// const sql = require("./db.js");
const axios = require("axios");
const request = require('postman-request')

const Jsc = function(jsc) {
    this.key = jsc.key;
  };




  Jsc.getAll = result => {
    // Optionally the request above could also be done as
      axios.get('https://api.jakarta.go.id/v1/rumahsakitumum', {
        headers: {
          Authorization: 'LdT23Q9rv8g9bVf8v/fQYsyIcuD14svaYL6Bi8f9uGhLBVlHA3ybTFjjqe+cQo8k'
        }
      })
      .then(response =>  {
        // console.log(response.data.data)
        this.data = response.data.data[0];
        // console.log(this.data)

        // this.data.forEach((item) => {
        //   console.log("found: ", item)
        //   result(null, item);
        //   return;
        // });
        axios.get('https://api.jakarta.go.id/v1/kelurahan/'+this.data.kode_kelurahan, {
          headers: {
            Authorization: 'LdT23Q9rv8g9bVf8v/fQYsyIcuD14svaYL6Bi8f9uGhLBVlHA3ybTFjjqe+cQo8k'
          }
        })     .then(response =>  {
          console.log(response.data)
        });
          result(null, this.data);
          return;

      })
      .catch(function (error) {
        console.log(error);
        result(null, error);
        return;

      })

  };


 
  module.exports = Jsc;