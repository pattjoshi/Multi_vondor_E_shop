const express = require("express");
const path = require("path");
const User = require("../model/user");
const { upload } = require("../multer");

const router = express.Router();

router.post(
  "/create-user",
  upload.single("file"),
  async (req, res, next) => {}
);
