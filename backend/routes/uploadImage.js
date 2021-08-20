const express = require("express");
const router = express.Router();
const homeController = require("../controller/home.js");
const uploadController = require("../controller/upload.js");
const upload = require("../middleWares/uploadImageMiddleware.js");

let routes = (app) => {
  router.get("/", homeController.getHome);

  router.post("/upload", upload.single("file"), uploadController.uploadFiles);

  return app.use("/", router);
};

module.exports = routes;