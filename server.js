const express = require("express");
const app = express();
const { employees } = require("./app");
const app = require("./app");

// import app from "#app";
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
