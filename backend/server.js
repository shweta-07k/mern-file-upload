const express = require("express")
const cors = require("cors")
const { connect } = require("./config/db")
require("dotenv").config({ path: ".env" })
const app = express()
connect()


app.use(express.json())
app.use(express.static("public"))
app.use(cors())
app.use("/user", require("./Route/userRoutes"))
app.use("/doc", require("./Route/DocRoute"))


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Serving Running http:localhost:${PORT}`))
