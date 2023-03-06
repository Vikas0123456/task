const express = require("express");
const app = express();
const routeMulter = express.Router();

const path = require("path");
const multer = require("multer");
const { getData, postData } = require("../controller/form.controller");
app.use(express.static(path.join(__dirname + "/uploads")));

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage: storage });

routeMulter.get("/getinfo", getData);
routeMulter.post("/postdata", upload.single("image"), postData);
module.exports = { routeMulter };
