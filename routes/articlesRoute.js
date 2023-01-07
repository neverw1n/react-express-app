const express = require('express');
const router = express.Router();
const articleController = require("../controllers/articlesController");

router.get("/", articleController.getArticles);
router.get("/:id", articleController.getArticleByID);
router.post("/", articleController.createArticles);
router.put("/:id", articleController.updateArticles);
router.delete("/:id", articleController.deleteArticles);

module.exports = router;



// var express = require('express');
// var router = express.Router();
// const db = require('./../db');

// router.get('/', (req, res) => {
//     query("SELECT * FROM Article",
//     function(err, results, fields) {
//       res.json(results);
//   });
//   })
 
// router.get('/:id', (req, res) => {
//     query("SELECT * FROM Article WHERE ArticleID = '" + req.params.id+ "' ",
//     function(err, results, fields) {
//       res.json(results);
//   });
//   }) 

// router.post('/', (req, res) => {
//     query("INSERT INTO Article (UserID, ArticleName, ArticleText) VALUES ('" + req.body.user_id + "', '" + req.body.art_name+ "', '" + req.body.art_text+ "')",
//     function(err, results, fields) {
//       if(err) {
//         res.json(err);
//       } 
//       else {
//         res.json(results);
//       }
//   });
//   })
  
// router.put('/:id', (req, res) => {
//     query("UPDATE Article SET ArticleName = '" + req.query.art_name+ "', ArticleText = '" + req.query.art_text+ "' WHERE ArticleID = '" + req.params.id+ "' ",
//     function(err, results, fields) {
//       if(err) {
//         res.json(err);
//       } 
//       else {
//         res.json(results);
//       }
//   });
//   })
  
// router.delete('/:id', (req, res) => {
//     query("DELETE FROM Article WHERE ArticleID = '" + req.params.id+ "' ",
//     function(err, results, fields) {
//       if(err) {
//         res.json(err);
//       } 
//       else {
//         res.json(results);
//       }
//   });
//   })

//   module.exports = router;