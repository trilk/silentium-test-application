const express = require("express");
const router = express.Router();
const controller = require("../controllers/transition.controller");

router.get("/init", controller.initState);

router.post("/:nextstep", controller.nextStep);

module.exports = router;
