const express = require("express");
const router = express.Router();

const BlogController = require("../controllers/blogCtrl");
const AcountController = require("../controllers/accountCtrl");
const BlogDetailController = require("../controllers/blogDetailCtrl");

const handlebars = require("handlebars");
handlebars.registerHelper("eq", function (a, b) {
  return a === b;
});

router.get(
  "/blog-detail/:id",
  AcountController.verify,
  BlogDetailController.show
);

router.get(
  "/delete-comment/:id",
  AcountController.verify,
  BlogDetailController.deleteComment
);

router.post("/blog-detail/:id", BlogDetailController.comment);

module.exports = router;
