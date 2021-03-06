const express = require("express")
const next = require("next")
const mongoose = require("mongoose")

const PORT = process.env.PORT || 5000
const dev = process.env.NODE_DEV !== "production"
const nextApp = next({dev})
const handle = nextApp.getRequestHandler()

const db = mongoose.connect(process.env.MONGO_DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true
}).then(() => console.log("Connected to MongoDB"))

nextApp.prepare().then(() => {
      const app = express()

      app.use(require("./routes/index"))
      app.get("*", (req, res) => {
            return handle(req, res)
      })

      app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
})