const { avatarUpload, galleryUpload } = require("../utils/Uploads")
const user = require("./../model/User")
exports.addAvatar = async (req, res) => {
    try {
        avatarUpload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    message: "multrer error" + err,
                    success: false
                })
            }
            // console.log(req.body);
            // console.log(req.file.filename);
            const result = await user.create({
                ...req.body, profile: `profile/${req.file.filename}`
            })
            res.json({
                message: "avatar added successfully",
                success: true
            })
        })
    } catch (error) {
        res.status(400).json({
            message: "error" + error,
            success: false
        })
    }
}
exports.getAllAvatar = async (req, res) => {
    try {


        // console.log(req.body);
        // console.log(req.file.filename);
        const result = await user.find()
        res.json({
            message: "avatar fetched successfully",
            success: true,
            result
        })

    } catch (error) {
        res.status(400).json({
            message: "error" + error,
            success: false
        })
    }
}
exports.addToGallery = async (req, res) => {
    try {
        galleryUpload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "multrer error" + err
                })
            }
            console.log(req.body);
            console.log(req.files);
            const d = []
            for (let i = 0; i < req.files.length; i++) {
                d.push(`gallery/${req.files[i].filename}`)

            }
            const result = await user.create({
                ...req.body, docs: d
            })
            console.log(d);
            res.json({
                message: "multiple files added successfully",
                success: true
            })
        })
    } catch (error) {
        res.status(400).json({
            message: "error" + error,
            success: false
        })
    }
}
exports.getAllUsers = async (req, res) => {
    try {
        const result = await user.find()

        res.json({
            message: "users added successfully",
            success: true,
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "error" + error,
            success: false
        })
    }
}
exports.destroyAllUsers = async (req, res) => {
    try {
        const result = await user.deleteMany()

        res.json({
            message: "users deleted successfully",
            success: true,
        })
    } catch (error) {
        res.status(400).json({
            message: "error" + error,
            success: false
        })
    }
}
