const express = require("express")
const router = express.Router()
const { check, validationResult } = require("express-validator")
const Community = require("../../models/Community")

router.post("/", [
    check("category", "Please pick at least one category"),
    check("message", "Please type your message")
], async (req, res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { message, category } = req.query

    try {
        let community = new Community({
            message, 
            category
        })

        await community.save()

        res.json({
            message: "Received, you will be assisted as soon as possible"
        })
    } catch (error) {
        console.error(error)
    }

})

module.exports = router