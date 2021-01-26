const Customer = require("../models/jsc.model.js");

// Retrieve all.
exports.findAll = (req, res) => {
  Customer.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving customers."
      });

    else
      rspon = {
        status: "success",
        count: "1",
        data: [data]
      }
    res.send(rspon);
  });
};