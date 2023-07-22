const Articles = require("./../models/articles");

exports.getArticles = function (req, res) {
  Articles.findAll()
    .then((data) => {
      if (Object.keys(data).length === 0) {
        return res.status(204).send({
          message: "No Content",
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Internal Server Error",
      });
    });
};

exports.getArticleByID = function (req, res) {
  const id = req.params.id;

  Articles.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Not Found`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Internal Server Error",
      });
    });
};

exports.createArticles = function (req, res) {
  if (!req.body.art_name || !req.body.art_text) {
    return res.status(400).send({
      message: "Bad Request",
    });
  }

  const article = {
    UserID: req.body.user,
    ArticleName: req.body.art_name,
    ArticleText: req.body.art_text,
  };

  Articles.create(article)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Internal Server Error",
      });
    });
};

exports.updateArticles = function (req, res) {
  if (!req.body.art_name || !req.body.art_text) {
    return res.status(400).send({
      message: "Bad Request",
    });
  }
  const id = req.params.id;

  const article = {
    UserID: req.body.user,
    ArticleName: req.body.art_name,
    ArticleText: req.body.art_text,
  };

  Articles.update(article, { where: { ArticleID: id } })
    .then((data) => {
      if (data == 1) {
        Articles.findByPk(id).then((upd) => {
          res.send(upd);
        });
      } else {
        res.status(404).send({
          message: `Not Found`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Internal Server Error",
      });
    });
};

exports.deleteArticles = function (req, res) {
  const id = req.params.id;

  Articles.destroy({ where: { ArticleID: id } })
    .then((data) => {
      if (data == 1) {
        res.send({
          message: "Article was deleted successfully.",
        });
      } else {
        res.status(404).send({
          message: `Not Found`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Internal Server Error",
      });
    });
};
