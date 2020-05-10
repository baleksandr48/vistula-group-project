const { Book } = require("../models");

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
