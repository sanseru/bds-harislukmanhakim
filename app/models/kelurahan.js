const axios = require("axios");

const kelurahan = (kodekelurahan,callback) => {


axios.get('https://api.jakarta.go.id/v1/kelurahan/'+kodekelurahan, {
    headers: {
      Authorization: 'LdT23Q9rv8g9bVf8v/fQYsyIcuD14svaYL6Bi8f9uGhLBVlHA3ybTFjjqe+cQo8k'
    }
  }) .then(response =>  {
      callback(null,{
        kode : response.data.data[0].nama_kelurahan,
    })
  });
}

  module.exports = kelurahan