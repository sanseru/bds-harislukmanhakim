const Customer = require("../models/jsc.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    Customer.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });

        else 
        rspon = {
          status : "success",
          count  : "1",
          data  : [data]
        }
        res.send(rspon);
      });
};
