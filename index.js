let DATA = require("./data");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

app.get("/products", (req, res) => {
  res.json(DATA);
});

app.delete("/products/:id", (req, res) => {
  DATA = DATA.filter((product) => product.id !== req.params.id.toString());
  res.sendStatus(200);
});

app.post("/products/post", (req, res) => {
  console.log("req.body", req.body);
  DATA.push(req.body);
  res.sendStatus(200);
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
