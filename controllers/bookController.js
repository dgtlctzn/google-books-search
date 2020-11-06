const express = require("express");
const router = express.Router();
const axios = require("axios");
const db = require("../models");

router.post("/api/books", (req, res) => {
  console.log(req.body.link);
  axios({
    method: "GET",
    url: req.body.link,
  }).then(({ data }) => {
    // console.log(data);
    db.Books.create({
      title: data.volumeInfo.title,
      authors: data.volumeInfo.authors,
      description: data.volumeInfo.description,
      image: data.volumeInfo.imageLinks.thumbnail,
      link: data.volumeInfo.infoLink,
    })
      .then((postedBook) => {
          console.log("success")
        res.status(200).json(postedBook);
      })
      .catch((err) => {
        res.status(500).json({
          error: true,
          data: null,
          message: "failed to post book",
        });
      });
  });
});

module.exports = router;
