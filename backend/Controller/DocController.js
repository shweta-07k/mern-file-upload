
const { multiDocsUpload } = require("../utils/Uploads")
const multiDocs = require("./../model/Docs")


exports.AddDocController = async (req, res) => {
    try {
        multiDocsUpload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: " multer Error" + err,
                })
            }

            if (req.files.dob) {
                req.body.userDob = `dob/${req.files.dob[0].filename}`
            }
            if (req.files.aadhar) {
                req.body.userAdhar = `aadhar/${req.files.aadhar[0].filename}`
            }
            if (req.files.tc) {
                req.body.userTc = `tc/${req.files.tc[0].filename}`
            }
            const result = await multiDocs.create(req.body)
            res.json({
                success: true,
                message: "Doc Upload Succesfully",
            })
        })
    } catch (error) {
        res.status(400).json({
            success: true,
            message: "Error" + error,
        })
    }
}
exports.getAlldocsController = async (req, res) => {
    try {
        const result = await multiDocs.find()
        res.json({
            success: true,
            message: "doc fetched successfully",
            result

        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error" + error,


        })
    }
}