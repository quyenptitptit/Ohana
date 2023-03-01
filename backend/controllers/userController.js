import User from "../models/userModel.js"

const userController = {
    getAllUser: async (req, res) => {
        try{
            const users = await User.find()
            res.status(200).json(users)
        }catch(e) {
            res.status(500).json(e)
        }
    },

    getUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            res.status(200).json(user)
        }
        catch(e) {
            res.status(500).json(e)
        }
    },

    updateUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            await user.updateOne({ $set: req.body })
            res.status(200).json("Update successfull!")
        }
        catch(e) {
            res.status(500).json(e)
        }
    },

    deleteUser: async (req, res) => {
        try{
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json("Delete successfully!")
        }catch(e) {
            res.status(500).json(e)
        }
    }

}

export default userController