module.exports = app => {
    const jsc = require("../controllers/jsc.controller.js");
  

      // Retrieve all Customers
    app.get("/jsc", jsc.findAll);

}