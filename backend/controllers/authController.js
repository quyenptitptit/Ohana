import bcrypt from "bcrypt"
import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import { Auth } from 'two-step-auth'

let refreshTokens = []

// async function login(emailId){
//     const res = await Auth(emailId, "Ohana");
//     console.log(res);
//     otp = res
// }

const authController = {
    //REGISTER
    registerUser: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt)
            //create new user
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
                fullname: req.body.fullname || "",
                phoneNumber: req.body.phoneNumber || "",
                address: req.body.address || "",
                bankAcount: {
                    bankName: req.body.bankName || "",
                    acountName: req.body.acountName || "",
                    acountNumber: req.body.acountNumber || ""
                }
            })
            //save to db
            const user = await newUser.save()
            res.status(200).json(user)
        }
        catch (e) {
            res.status(500).json(e)
        }
    },

    //GENERATE
    generateAccessToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin
            },
            process.env.JWT_ACCESS_KEY,
            { expiresIn: "30s" }
        )
    },
    generateRefreshToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin
            },
            process.env.JWT_REFRESH_KEY,
            { expiresIn: "365d" }
        )
    },

    //LOGIN
    loginUser: async (req, res) => {
        try {
            const user = await User.findOne({ username: req.body.username })
            if (!user) {
                res.status(403).json("Wrong username!")
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            )
            if (!validPassword) {
                res.status(404).json("Wrong password!")
            }
            if (user && validPassword) {
                const accessToken = authController.generateAccessToken(user) // luu acctoken len redux(fe)
                const refreshToken = authController.generateRefreshToken(user)
                refreshTokens.push(refreshToken)
                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSite: "strict"
                }) // luu refreshToken len cookie
                const { password, ...others } = user._doc
                res.status(200).json({ ...others, accessToken })
            }
        }
        catch (e) {
            res.status(500).json(e)
        }
    },

    // luu vao redis
    refreshToken: async (req, res) => {
        // lay refreshToken tu user
        const refreshToken = req.cookies.refreshToken
        if (!refreshToken) return res.status(401).json("You're not authenticated")
        if (!refreshTokens.includes(refreshToken)) {
            return res.status(403).json("Refresh token is valid")
        }
        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
            if (err) {
                console.log(err)
            }
            refreshTokens = refreshTokens.filter((token) => token !== refreshToken)
            //create new accesstoken and refreshtoken
            const newAccessToken = authController.generateAccessToken(user)
            const newRefreshToken = authController.generateRefreshToken(user)
            refreshTokens.push(newRefreshToken)
            res.cookie("refreshToken", newRefreshToken, {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "strict"
            })
            res.status(200).json({ accessToken: newAccessToken })
        })
    },

    userLoggout: async (req, res) => {
        res.clearCookie("refreshToken")
        // +xoa accesstoken tren redux(fe)
        refreshTokens = refreshTokens.filter(token => token !== req.cookies.refreshToken)
        res.status(200).json("Logged out!")
    },

    // sendEmail: async (req, res) => {
    //     try {
    //         await login(req.body.email)
    //         res.status(200).json(req.body.email)
    //     }
    //     catch (e) {
    //         res.status(500).json(e)
    //     }
    // }
    
}

export default authController