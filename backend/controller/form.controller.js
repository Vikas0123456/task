const { con } = require("../modal/connection");

let getData = async (req, res) => {
  try {
    const querry = "SELECT * FROM form";
    await con.query(querry, (err, result) => {
      if (err) {
        return res.send({ status: 400, Response: err.sqlMessage });
      }
      res.send({ status: 200, response: result });
    });
  } catch {
     res.send(err.sqlMessage);
  }
};
const postData = (req, res) => {
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      image: req.file.path,
    };
    const query = "INSERT INTO form SET ?";
    con.query(query, data, (err, result) => {
      if (err) {
        return res.send({ status: 400, response: err.sqlMessage });
      }
      res.send({ status: 200, response: result });
    });
  } catch {
    res.send(err.sqlMessage);
  } 
};

module.exports = { getData, postData };
