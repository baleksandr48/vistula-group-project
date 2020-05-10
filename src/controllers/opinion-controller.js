const { Opinion } = require("../models");

module.exports.getAllOpinions = async (req, res, next) => {
  try {
    const result = await Opinion.findAll();
    res.json(result);
  } catch (e) {
    next({ code: e.code || 400, message: e.message });
  }
};

module.exports.getOpinionById = async (req, res, next) => {
  try {
    const result = await Opinion.findById(req.params.id);
    res.json(result);
  } catch (e) {
    next({ code: e.code || 400, message: e.message });
  }
};

module.exports.createOpinion = async (req, res, next) => {
  try {
    const result = await Opinion.create(req.body);
    res.json(result);
  } catch (e) {
    next({ code: e.code || 400, message: e.message });
  }
};

module.exports.deleteOpinion = async (req, res, next) => {
  try {
    await Opinion.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json("OK");
  } catch (e) {
    next({ code: e.code || 400, message: e.message });
  }
};

module.exports.updateOpinion = async (req, res, next) => {
  try {
    await Opinion.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json("OK");
  } catch (e) {
    next({ code: e.code || 400, message: e.message });
  }
};
