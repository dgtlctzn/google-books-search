const express = require("express");
const router = express.Router();
const axios = require("axios");
const db = require("../models");

router.post("/api/books", (req, res) => {
  console.log(req.body.link);
  // api link sent from front end to make axios call for single book
  axios({
    method: "GET",
    url: req.body.link,
  }).then((response) => {
    // desctructuring of axios response
    // console.log(response.data.volumeInfo)
    const {
      title,
      authors,
      description,
      imageLinks,
      infoLink,
    } = response.data.volumeInfo;
    // mongo db add book
    db.Books.create({
      title: title,
      authors: authors,
      // regex removes html tags present in google books api description
      description: description.replace(/<.*?>/g, ""),
      image: imageLinks.thumbnail,
      canonicalVolumeLink: infoLink,
    })
      .then((postedBook) => {
        console.log("success");
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

router.get("/api/books", (req, res) => {
  db.Books.find()
    .then((books) => {
      res.status(200).json(books);
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        data: null,
        message: "failed to get books",
      });
    });
});

router.put("/api/books/:id", (req, res) => {
  db.Books.findByIdAndDelete(req.params.id)
    .then((books) => {
      res.status(200).json(books);
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        data: null,
        message: "failed to delete book",
      });
    });
});

module.exports = router;
