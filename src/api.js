const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/key", (req, res) => {
  res.json({
    x_api_key: "fa12345678912345678912345678985"
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);