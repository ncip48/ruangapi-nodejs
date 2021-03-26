const Ongkir = require("./ongkir");
fs = require("fs");

module.exports = {
  Ongkir: function (key) {
    if (!key) throw new Error("Must have apikey from ruangapi");
    return new Ongkir(key);
  },
};
