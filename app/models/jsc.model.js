// const sql = require("./db.js");
const axios = require("axios");

const Jsc = function (jsc) {
  this.key = jsc.key;
};




Jsc.getAll = result => {
  // Optionally the request above could also be done as
  axios.get('https://api.jakarta.go.id/v1/rumahsakitumum', {
      headers: {
        Authorization: 'LdT23Q9rv8g9bVf8v/fQYsyIcuD14svaYL6Bi8f9uGhLBVlHA3ybTFjjqe+cQo8k'
      }
    })
    .then(response => {
      this.data = response.data.data[0];

      axios.get('https://api.jakarta.go.id/v1/kelurahan/' + this.data.kode_kelurahan, {
        headers: {
          Authorization: 'LdT23Q9rv8g9bVf8v/fQYsyIcuD14svaYL6Bi8f9uGhLBVlHA3ybTFjjqe+cQo8k'
        }
      }).then(response => {
        datax = {
          id: this.data.id,
          nama_rsu: this.data.nama_rsu,
          jenis_rsu: this.data.jenis_rsu,
          location: this.data.location,
          kode_pos: this.data.kode_pos,
          telepon: this.data.telepon,
          faximile: this.data.faximile,
          website: this.data.website,
          email: this.data.email,
          kelurahan: {
            kode: response.data.data[0].kode_kelurahan,
            nama: response.data.data[0].nama_kelurahan,

          },
          kecamatan: {
            kode: response.data.data[0].kode_kecamatan,
            nama: response.data.data[0].nama_kecamatan,
          },
          kota: {
            kode: response.data.data[0].kode_kota,
            nama: response.data.data[0].nama_kota,
          }

        }
        result(null, datax);
        return;
      });


    })
    .catch(function (error) {
      console.log(error);
      result(null, error);
      return;

    })

};



module.exports = Jsc;