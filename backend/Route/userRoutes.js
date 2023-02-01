const { addAvatar, getAllAvatar, addToGallery, getAllUsers, destroyAllUsers } = require("../Controller/UserCotroller")


const router = require("express").Router()
router.get("/", getAllAvatar)
router.get("/fetch", getAllUsers)
router.post("/add", addAvatar)
router.delete("/destroy", destroyAllUsers)
router.post("/add-to-gallery", addToGallery)


module.exports = router