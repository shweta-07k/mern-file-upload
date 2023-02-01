const { AddDocController, getAlldocsController } = require("../Controller/DocController")

const router = require("express").Router()
router
    .get("/", getAlldocsController)
    .post("/add", AddDocController)


module.exports = router