const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/api/books", (req, res) => {
    console.log(req.body.link)
    axios({
        method: "GET",
        url: req.body.link
    }).then((response) => {
        console.log(response);
    })
})

module.exports = router;