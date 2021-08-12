const express = require("express");
const cors = require("cors");
const transitionRoute = require("./routes/transition");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/transition", transitionRoute);
app.get("/", (req, res) => res.send("Welcome to Silentium Test API"));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
