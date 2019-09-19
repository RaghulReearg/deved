const express = require("express");
const router = express.Router();
const Posts = require("../models/Posts");
router.get("/", (req, res) => {
  res.send("this is from posts");
});
router.post("/", (req, res) => {
  console.log(req.body);
  const post = new Posts({
    title: req.body.title,
    description: req.body.description
  });
  post
    .save()
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

module.exports = router;
