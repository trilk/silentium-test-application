const _ = require("lodash");

//Create const original buttons state
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

//Init and reset state of buttons
exports.initState = (req, res) => {
  let newButtons = _.cloneDeep(orgButtons);
  setSelection(newButtons, "blue");
  res.json({ success: true, state: newButtons });
};

//set new state of buttons base on params & request body
exports.nextStep = (req, res) => {
  const nextstep = req.params.nextstep;
  const { currentstep, disabled } = req.body;

  if (disabled) {
    //Invalid step
    res.status(400).send({ success: false, message: "Invalid step" });
    return;
  }

  if (nextstep === currentstep) {
    res.status(400).send({ success: false, message: "Do nothing" });
    return;
  }

  let newButtons = _.cloneDeep(orgButtons);
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

  //Return new state of buttons
  res.json({ success: true, state: newButtons });
};

//Set a selected button
setSelection = (btns, id) => {
  let btn = btns.find((bt) => bt.id === id);
  btn.selected = true;
};

//Set a disabled button
setDisable = (btns, id) => {
  let btn = btns.find((bt) => bt.id === id);
  btn.disabled = true;
};
