const QrCode = require("qrcode");
const bcrypt = require("bcrypt");
const scnQrcode = async (req, res) => {
  const url = req.body.url;
  if (url.lenght === 0) {
    res.send("Empty Data");
  }
  let salt = await bcrypt.genSalt(8);
  let encrypted = await bcrypt.hash(url, salt);

  console.log("object", encrypted);
  QrCode.toDataURL(encrypted, (err, url) => {
    res.send(url);
  });
};
module.exports = { scnQrcode };
