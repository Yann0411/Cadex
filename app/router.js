const express = require("express");
const controller = require("./controller");

const router = express.Router();

// get indique la récupération de données
router.get("/v1/cadex", controller.getCadex);
router.post("/v1/cadex", controller.postCadex);

module.exports = router;
