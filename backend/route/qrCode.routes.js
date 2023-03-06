const express = require("express");
const { scnQrcode } = require("../controller/qr.controller");
const qrcoderouter = express.Router();

qrcoderouter.post("/scnQrcode", scnQrcode);

module.exports = { qrcoderouter };
