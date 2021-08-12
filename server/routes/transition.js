const express = require("express");
const router = express.Router();
const controller = require("../controllers/transition.controller");

const buttons = [
  {
    id: "blue",
    selected: true,
    disabled: false,
  },
  {
    id: "green",
    selected: false,
    disabled: false,
  },
  {
    id: "yellow",
    selected: false,
    disabled: false,
  },
];

router.get("/init", controller.initState);

router.post("/:nextstep", controller.nextStep);

module.exports = router;
