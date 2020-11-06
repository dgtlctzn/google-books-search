const express = require("express");
const router = express.Router();

router.post("/api/books", (req, res) => {
    console.log(req.body)
})

module.exports = router;