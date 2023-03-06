const con = require("./modal/connection");
const fs = require("fs");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
const { routeMulter } = require("./route/form.route");
app.use("/api", routeMulter);
const { qrcoderouter } = require("./route/qrCode.routes");
const data = require("./hindi_language.json");
const data = require("./english_language.json");


app.use("/api", qrcoderouter);

/////api for json data for english.json////
app.get("/english-data", (req, res) => {
  res.json(data);
  console.log(data, "mydata");
});

/////api for json data for hindi.json////
app.get("/hindi-data", (req, res) => {
  res.json(data);
  console.log(data);
});

app.listen(3322, (err) => {
  if (err) {
    console.log("server not started ");
  }
  console.log("server  started ");
});

fs.readFile("english_language.json", (err, data) => {
  if (err) throw err;
  const englishJson = JSON.parse(data);
});

fs.readFile("hindi_language.json", (err, data) => {
  if (err) throw err;
  const hindiJson = JSON.parse(data);
});
