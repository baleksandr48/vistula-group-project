const { Book } = require("../models");
const path = require("path");
const multer = require("multer");
const fs = require("fs");

module.exports.getAllBooks = async (req, res, next) => {
  try {
    const result = await Book.findAll();
    res.json(result);
  } catch (e) {
    next({ code: e.code || 400, message: e.message });
  }
};

module.exports.getBookById = async (req, res, next) => {
  try {
    const result = await Book.findById(req.params.id);
    res.json(result);
  } catch (e) {
    next({ code: e.code || 400, message: e.message });
  }
};

module.exports.createBook = async (req, res, next) => {
  try {
    const result = await Book.create(req.body);
    res.json(result);
  } catch (e) {
    next({ code: e.code || 400, message: e.message });
  }
};

module.exports.deleteBook = async (req, res, next) => {
  try {
    await Book.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json("OK");
  } catch (e) {
    next({ code: e.code || 400, message: e.message });
  }
};

module.exports.updateBook = async (req, res, next) => {
  try {
    await Book.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json("OK");
  } catch (e) {
    next({ code: e.code || 400, message: e.message });
  }
};

module.exports.uploadImage = async (req, res, next) => {
  try {
    let filename = "";
    const storage = multer.diskStorage({
      destination: "./public/img/",
      filename: (req, file, cb) => {
        filename = Date.now().toString();
        cb(null, filename);
      },
    });

    const upload = multer({
      storage: storage,
      fileFilter: function (req, file, cb) {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(
          path.extname(file.originalname).toLowerCase()
        );
        if (mimetype && extname) {
          return cb(null, true);
        }
        return cb(new Error("This type isn`t supported"));
      },
    }).single("image");

    await upload(req, res, async function (err) {
      if (err) {
        throw err;
      } else {
        res.json({
          image: filename,
        });
      }
    });
  } catch (e) {
    next({ code: e.code || 400, message: e.message });
  }
};
