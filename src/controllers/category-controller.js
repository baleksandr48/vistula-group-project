const { Category } = require("../models");

module.exports.getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (e) {
    next({ code: e.code || 400, message: e.message });
  }
};

module.exports.getCategoryById = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    res.json(category);
  } catch (e) {
    next({ code: e.code || 400, message: e.message });
  }
};

module.exports.createCategory = async (req, res, next) => {
  try {
    const newCategory = await Category.create(req.body);
    res.json(newCategory);
  } catch (e) {
    next({ code: e.code || 400, message: e.message });
  }
};

module.exports.deleteCategory = async (req, res, next) => {
  try {
    await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json("OK");
  } catch (e) {
    next({ code: e.code || 400, message: e.message });
  }
};

module.exports.updateCategory = async (req, res, next) => {
  try {
    await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json("OK");
  } catch (e) {
    next({ code: e.code || 400, message: e.message });
  }
};
