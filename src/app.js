
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// health check
app.get("/healthz", (req, res) => {
  res.json({ ok: true });
});

module.exports = app;
