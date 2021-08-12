const _ = require("lodash");
const orgButtons = [
  {
    id: "blue",
    selected: false,
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

exports.initState = (req, res) => {
  let newButtons = _.cloneDeep(orgButtons);
  setSelection(newButtons, "blue");
  res.json({ success: true, state: newButtons });
};

exports.nextStep = (req, res) => {
  const nextstep = req.params.nextstep;
  const { currentstep, disabled } = req.body;

  if (disabled) {
    res.status(400).send({ success: false, message: "Invalid step" });
    return;
  }

  if (nextstep === currentstep) {
    res.status(400).send({ success: false, message: "Do nothing" });
    return;
  }

  let newButtons = _.cloneDeep(orgButtons);
  console.log(orgButtons);
  setSelection(newButtons, nextstep);

  if (
    (nextstep === "blue" && currentstep === "yellow") ||
    nextstep === "green"
  ) {
    setDisable(newButtons, "yellow");
  }

  if (nextstep === "yellow") {
    setDisable(newButtons, "green");
  }

  res.json({ success: true, state: newButtons });
};

setSelection = (btns, id) => {
  let btn = btns.find((bt) => bt.id === id);
  btn.selected = true;
};

setDisable = (btns, id) => {
  let btn = btns.find((bt) => bt.id === id);
  btn.disabled = true;
};
