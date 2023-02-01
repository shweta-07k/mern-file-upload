const multer = require("multer")
const path = require("path")
const fs = require("fs")
const { v4: uuid } = require("uuid")


const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        const allowedext = [".png", ".jpg", ".jpeg"]
        if (!allowedext.includes(ext)) {
            cb("Invalid Extension")
        }
        const fn = uuid() + ext
        cb(null, fn)
    },
    destination: (req, file, cb) => {
        const loc = "public/profile"
        fs.mkdirSync(loc, { recursive: true })
        cb(null, loc)
    }
})
const multiStorage = multer.diskStorage({
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        const allowedext = [".png", ".jpg", ".jpeg", ".pdf"]
        if (!allowedext.includes(ext)) {
            cb("Invalid Extension" + ext)
        }
        const fn = uuid() + ext
        cb(null, fn)
    },
    destination: (req, file, cb) => {
        const loc = "public/gallery"
        fs.mkdirSync(loc, { recursive: true })
        cb(null, loc)
    }
})
const multiDocsStorage = multer.diskStorage({
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname)

        const allowedext = [".png", ".jpg", ".jpeg", ".pdf"]
        if (!allowedext.includes(ext)) {
            cb("Invalid Extension" + ext)
        }
        const fn = uuid() + ext
        cb(null, fn)
    },
    destination: (req, file, cb) => {
        // const loc = "public/docs"
        let loc
        if (file.fieldname === "dob") {
            loc = "public/dob"
        }
        if (file.fieldname === "aadhar") {
            loc = "public/aadhar"
        }
        if (file.fieldname === "tc") {
            loc = "public/tc"
        }
        fs.mkdirSync(loc, { recursive: true })
        cb(null, loc)
    }
})

exports.avatarUpload = multer({ storage, limits: { fileSize: "1mb" } }).single("avatar")
exports.galleryUpload = multer({ storage: multiStorage, limits: { fileSize: "1mb" } }).array("doc", 5)
exports.multiDocsUpload = multer({ storage: multiDocsStorage, limits: { fileSize: "1mb" } }).fields([{ name: "dob", maxCount: 1 }, { name: "aadhar", maxCount: 1 }, { name: "tc", maxCount: 1 }])