const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const emailModel = require("../models/emailModel")

const router = express.Router()

router.use(bodyParser.urlencoded({extended: true}))

router.post("/email", (req, res) => {
      const name = req.body.name
      const email = req.body.email

      const newEmail = new emailModel ({
            name: name,
            email: email
      })

      newEmail.save()
      .then(() => {
            res.redirect("/")
      }).catch(err => {
            console.error(err);
            res.end()
      })
})

module.exports = router