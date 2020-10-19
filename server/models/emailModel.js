const mongoose = require("mongoose")

const EmailSchema = mongoose.Schema({
      name: {
            type: String,
            required: true
      },
      email: {
            type: String,
            required: true
      }
})

module.exports = mongoose.model("email", EmailSchema)