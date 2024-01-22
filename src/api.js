const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    x_api_key: "xyzzzzzzzzzzse"
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);