const express = require("express");
const app = express();
const router = express.Router();
const userService = require("./user.service");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploaded");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
var fs = require("fs");
const upload = multer({ storage: storage });

// routes
router.post("/upload", upload.single("productImage"), (req, res, next) => {
  userService
    .upload1(req)
    .then(() => res.json({}))
    .catch(err => next(err));
});

module.exports = router;
