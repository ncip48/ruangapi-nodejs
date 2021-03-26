var request = require("request");
var Promise = require("promise");
var qs = require("querystring");

function Ongkir(key) {
  this.apiKey = key;
  this.baseUrl = "https://ruangapi.com/api/v1";
}

module.exports = Ongkir;

Ongkir.prototype.getProvinces = function () {
  var uri = this.baseUrl + "/provinces";
  var apiKey = this.apiKey;
  return new Promise(function (resolve, reject) {
    request(
      {
        uri: uri,
        method: "GET",
        headers: {
          Authorization: apiKey,
        },
      },
      function (error, response, body) {
        if (error) reject(error);
        var result = JSON.parse(body);
        if (result.statusCode !== 200) reject(result);
        return resolve(result.data.results);
      }
    );
  });
};

Ongkir.prototype.getProvince = function (id) {
  var uri = this.baseUrl + `/provinces?id=${id}`;
  var apiKey = this.apiKey;
  return new Promise(function (resolve, reject) {
    request(
      {
        uri: uri,
        method: "GET",
        headers: {
          Authorization: apiKey,
        },
      },
      function (error, response, body) {
        if (error) reject(error);
        var result = JSON.parse(body);
        if (result.statusCode !== 200) reject(result);
        return resolve(result.data.results);
      }
    );
  });
};

Ongkir.prototype.getCity = function (id) {
  var uri = this.baseUrl + `/cities?province=${id}&id=&q=`;
  var apiKey = this.apiKey;
  return new Promise(function (resolve, reject) {
    request(
      {
        uri: uri,
        method: "GET",
        headers: {
          Authorization: apiKey,
        },
      },
      function (error, response, body) {
        if (error) reject(error);
        var result = JSON.parse(body);
        if (result.statusCode !== 200) reject(result);
        return resolve(result.data.results);
      }
    );
  });
};

Ongkir.prototype.searchCity = function (payload) {
  var uri = this.baseUrl + `/cities?province=1&id=&q=${payload}`;
  var apiKey = this.apiKey;
  return new Promise(function (resolve, reject) {
    request(
      {
        uri: uri,
        method: "GET",
        headers: {
          Authorization: apiKey,
        },
      },
      function (error, response, body) {
        if (error) reject(error);
        var result = JSON.parse(body);
        if (result.statusCode !== 200) reject(result);
        return resolve(result.data.results);
      }
    );
  });
};

Ongkir.prototype.getDistrict = function (id) {
  var uri = this.baseUrl + `/districts?city=${id}&id=&q=`;
  var apiKey = this.apiKey;
  return new Promise(function (resolve, reject) {
    request(
      {
        uri: uri,
        method: "GET",
        headers: {
          Authorization: apiKey,
        },
      },
      function (error, response, body) {
        if (error) reject(error);
        var result = JSON.parse(body);
        if (result.statusCode !== 200) reject(result);
        return resolve(result.data.results);
      }
    );
  });
};

Ongkir.prototype.searchDistrict = function (payload) {
  var uri = this.baseUrl + `/districts?city=1&id=&q=${payload}`;
  var apiKey = this.apiKey;
  return new Promise(function (resolve, reject) {
    request(
      {
        uri: uri,
        method: "GET",
        headers: {
          Authorization: apiKey,
        },
      },
      function (error, response, body) {
        if (error) reject(error);
        var result = JSON.parse(body);
        if (result.statusCode !== 200) reject(result);
        return resolve(result.data.results);
      }
    );
  });
};

Ongkir.prototype.getJNECost = function (origin, destination, weight) {
  var uri =
    this.baseUrl +
    `/shipping?origin=${origin}&destination=${destination}&weight=${weight}&courier=jne`;
  var apiKey = this.apiKey;
  return new Promise(function (resolve, reject) {
    request(
      {
        uri: uri,
        method: "POST",
        headers: {
          Authorization: apiKey,
        },
      },
      function (error, response, body) {
        if (error) reject(error);
        var result = JSON.parse(body);
        if (result.statusCode !== 200) reject(result);
        return resolve(result.data);
      }
    );
  });
};

Ongkir.prototype.getJNTCost = function (origin, destination, weight) {
  var uri =
    this.baseUrl +
    `/shipping?origin=${origin}&destination=${destination}&weight=${weight}&courier=jnt`;
  var apiKey = this.apiKey;
  return new Promise(function (resolve, reject) {
    request(
      {
        uri: uri,
        method: "POST",
        headers: {
          Authorization: apiKey,
        },
      },
      function (error, response, body) {
        if (error) reject(error);
        var result = JSON.parse(body);
        if (result.statusCode !== 200) reject(result);
        return resolve(result.data);
      }
    );
  });
};

Ongkir.prototype.getPOSCost = function (origin, destination, weight) {
  // var uri =
  //   this.baseUrl +
  //   `/shipping?origin=${origin}&destination=${destination}&weight=${weight}&courier=pos`;
  // var apiKey = this.apiKey;
  // return new Promise(function (resolve, reject) {
  //   request(
  //     {
  //       uri: uri,
  //       method: "POST",
  //       headers: {
  //         Authorization: apiKey,
  //       },
  //     },
  //     function (error, response, body) {
  //       if (error) reject(error);
  //       var result = JSON.parse(body);
  //       if (result.statusCode !== 200) reject(result);
  //       return resolve(result.data);
  //     }
  //   );
  // });
  return { type: "POS Indonesia", status: "Not available" };
};

Ongkir.prototype.getTikiCost = function (origin, destination, weight) {
  var uri =
    this.baseUrl +
    `/shipping?origin=${origin}&destination=${destination}&weight=${weight}&courier=tiki`;
  var apiKey = this.apiKey;
  return new Promise(function (resolve, reject) {
    request(
      {
        uri: uri,
        method: "POST",
        headers: {
          Authorization: apiKey,
        },
      },
      function (error, response, body) {
        if (error) reject(error);
        var result = JSON.parse(body);
        if (result.statusCode !== 200) reject(result);
        return resolve(result.data);
      }
    );
  });
};

Ongkir.prototype.getLionCost = function (origin, destination, weight) {
  var uri =
    this.baseUrl +
    `/shipping?origin=${origin}&destination=${destination}&weight=${weight}&courier=lion`;
  var apiKey = this.apiKey;
  return new Promise(function (resolve, reject) {
    request(
      {
        uri: uri,
        method: "POST",
        headers: {
          Authorization: apiKey,
        },
      },
      function (error, response, body) {
        if (error) reject(error);
        var result = JSON.parse(body);
        if (result.statusCode !== 200) reject(result);
        return resolve(result.data);
      }
    );
  });
};

Ongkir.prototype.getNinjaCost = function (origin, destination, weight) {
  // var uri =
  //   this.baseUrl +
  //   `/shipping?origin=${origin}&destination=${destination}&weight=${weight}&courier=ninja`;
  // var apiKey = this.apiKey;
  // return new Promise(function (resolve, reject) {
  //   request(
  //     {
  //       uri: uri,
  //       method: "POST",
  //       headers: {
  //         Authorization: apiKey,
  //       },
  //     },
  //     function (error, response, body) {
  //       if (error) reject(error);
  //       var result = JSON.parse(body);
  //       if (result.statusCode !== 200) reject(result);
  //       return resolve(result.data);
  //     }
  //   );
  // });
  return { type: "Ninja Xpress (NINJA)", status: "Not available" };
};

Ongkir.prototype.getWahanaCost = function (origin, destination, weight) {
  // var uri =
  //   this.baseUrl +
  //   `/shipping?origin=${origin}&destination=${destination}&weight=${weight}&courier=wahana`;
  // var apiKey = this.apiKey;
  // return new Promise(function (resolve, reject) {
  //   request(
  //     {
  //       uri: uri,
  //       method: "POST",
  //       headers: {
  //         Authorization: apiKey,
  //       },
  //     },
  //     function (error, response, body) {
  //       if (error) reject(error);
  //       var result = JSON.parse(body);
  //       if (result.statusCode !== 200) reject(result);
  //       return resolve(result.data);
  //     }
  //   );
  // });
  return { type: "Wahana Prestasi Logistik (WAHANA)", status: "Not available" };
};

Ongkir.prototype.getSicepatCost = function (origin, destination, weight) {
  var uri =
    this.baseUrl +
    `/shipping?origin=${origin}&destination=${destination}&weight=${weight}&courier=sicepat`;
  var apiKey = this.apiKey;
  return new Promise(function (resolve, reject) {
    request(
      {
        uri: uri,
        method: "POST",
        headers: {
          Authorization: apiKey,
        },
      },
      function (error, response, body) {
        if (error) reject(error);
        var result = JSON.parse(body);
        if (result.statusCode !== 200) reject(result);
        return resolve(result.data);
      }
    );
  });
};

Ongkir.prototype.getAlfatrexCost = function (origin, destination, weight) {
  var uri =
    this.baseUrl +
    `/shipping?origin=${origin}&destination=${destination}&weight=${weight}&courier=alfatrex`;
  var apiKey = this.apiKey;
  return new Promise(function (resolve, reject) {
    request(
      {
        uri: uri,
        method: "POST",
        headers: {
          Authorization: apiKey,
        },
      },
      function (error, response, body) {
        if (error) reject(error);
        var result = JSON.parse(body);
        if (result.statusCode !== 200) reject(result);
        return resolve(result.data);
      }
    );
  });
};

Ongkir.prototype.getPCPCost = function (origin, destination, weight) {
  var uri =
    this.baseUrl +
    `/shipping?origin=${origin}&destination=${destination}&weight=${weight}&courier=pcp`;
  var apiKey = this.apiKey;
  return new Promise(function (resolve, reject) {
    request(
      {
        uri: uri,
        method: "POST",
        headers: {
          Authorization: apiKey,
        },
      },
      function (error, response, body) {
        if (error) reject(error);
        var result = JSON.parse(body);
        if (result.statusCode !== 200) reject(result);
        return resolve(result.data);
      }
    );
  });
};

Ongkir.prototype.getSAPCost = function (origin, destination, weight) {
  var uri =
    this.baseUrl +
    `/shipping?origin=${origin}&destination=${destination}&weight=${weight}&courier=sap`;
  var apiKey = this.apiKey;
  return new Promise(function (resolve, reject) {
    request(
      {
        uri: uri,
        method: "POST",
        headers: {
          Authorization: apiKey,
        },
      },
      function (error, response, body) {
        if (error) reject(error);
        var result = JSON.parse(body);
        if (result.statusCode !== 200) reject(result);
        return resolve(result.data);
      }
    );
  });
};

Ongkir.prototype.getJNEWaybill = function (waybill) {
  var uri = this.baseUrl + `/waybill?waybill=${waybill}&courier=jne`;
  var apiKey = this.apiKey;
  return new Promise(function (resolve, reject) {
    request(
      {
        uri: uri,
        method: "POST",
        headers: {
          Authorization: apiKey,
        },
      },
      function (error, response, body) {
        if (error) reject(error);
        var result = JSON.parse(body);
        if (result.statusCode !== 200) reject(result);
        return resolve(result.data);
      }
    );
  });
};

Ongkir.prototype.getJNTWaybill = function (waybill) {
  var uri = this.baseUrl + `/waybill?waybill=${waybill}&courier=jnt`;
  var apiKey = this.apiKey;
  return new Promise(function (resolve, reject) {
    request(
      {
        uri: uri,
        method: "POST",
        headers: {
          Authorization: apiKey,
        },
      },
      function (error, response, body) {
        if (error) reject(error);
        var result = JSON.parse(body);
        if (result.statusCode !== 200) reject(result);
        return resolve(result.data);
      }
    );
  });
};

Ongkir.prototype.getPOSWaybill = function (waybill) {
  // var uri = this.baseUrl + `/waybill?waybill=${waybill}&courier=pos`;
  // var apiKey = this.apiKey;
  // return new Promise(function (resolve, reject) {
  //   request(
  //     {
  //       uri: uri,
  //       method: "POST",
  //       headers: {
  //         Authorization: apiKey,
  //       },
  //     },
  //     function (error, response, body) {
  //       if (error) reject(error);
  //       var result = JSON.parse(body);
  //       if (result.statusCode !== 200) reject(result);
  //       return resolve(result.data);
  //     }
  //   );
  // });
  return { type: "POS Indonesia", status: "Not available" };
};

Ongkir.prototype.getTikiWaybill = function (waybill) {
  var uri = this.baseUrl + `/waybill?waybill=${waybill}&courier=tiki`;
  var apiKey = this.apiKey;
  return new Promise(function (resolve, reject) {
    request(
      {
        uri: uri,
        method: "POST",
        headers: {
          Authorization: apiKey,
        },
      },
      function (error, response, body) {
        if (error) reject(error);
        var result = JSON.parse(body);
        if (result.statusCode !== 200) reject(result);
        return resolve(result.data);
      }
    );
  });
};

Ongkir.prototype.getLionWaybill = function (waybill) {
  var uri = this.baseUrl + `/waybill?waybill=${waybill}&courier=lion`;
  var apiKey = this.apiKey;
  return new Promise(function (resolve, reject) {
    request(
      {
        uri: uri,
        method: "POST",
        headers: {
          Authorization: apiKey,
        },
      },
      function (error, response, body) {
        if (error) reject(error);
        var result = JSON.parse(body);
        if (result.statusCode !== 200) reject(result);
        return resolve(result.data);
      }
    );
  });
};

Ongkir.prototype.getNinjaWaybill = function (waybill) {
  // var uri = this.baseUrl + `/waybill?waybill=${waybill}&courier=ninja`;
  // var apiKey = this.apiKey;
  // return new Promise(function (resolve, reject) {
  //   request(
  //     {
  //       uri: uri,
  //       method: "POST",
  //       headers: {
  //         Authorization: apiKey,
  //       },
  //     },
  //     function (error, response, body) {
  //       if (error) reject(error);
  //       var result = JSON.parse(body);
  //       if (result.statusCode !== 200) reject(result);
  //       return resolve(result.data);
  //     }
  //   );
  // });
  return { type: "Ninja Xpress (NINJA)", status: "Not available" };
};

Ongkir.prototype.getWahanaWaybill = function (waybill) {
  // var uri = this.baseUrl + `/waybill?waybill=${waybill}&courier=wahana`;
  // var apiKey = this.apiKey;
  // return new Promise(function (resolve, reject) {
  //   request(
  //     {
  //       uri: uri,
  //       method: "POST",
  //       headers: {
  //         Authorization: apiKey,
  //       },
  //     },
  //     function (error, response, body) {
  //       if (error) reject(error);
  //       var result = JSON.parse(body);
  //       if (result.statusCode !== 200) reject(result);
  //       return resolve(result.data);
  //     }
  //   );
  // });
  return { type: "Wahana Prestasi Logistik (WAHANA)", status: "Not available" };
};

Ongkir.prototype.getSicepatWaybill = function (waybill) {
  var uri = this.baseUrl + `/waybill?waybill=${waybill}&courier=sicepat`;
  var apiKey = this.apiKey;
  return new Promise(function (resolve, reject) {
    request(
      {
        uri: uri,
        method: "POST",
        headers: {
          Authorization: apiKey,
        },
      },
      function (error, response, body) {
        if (error) reject(error);
        var result = JSON.parse(body);
        if (result.statusCode !== 200) reject(result);
        return resolve(result.data);
      }
    );
  });
};

Ongkir.prototype.getAlfatrexWaybill = function (waybill) {
  // var uri = this.baseUrl + `/waybill?waybill=${waybill}&courier=alfatrex`;
  // var apiKey = this.apiKey;
  // return new Promise(function (resolve, reject) {
  //   request(
  //     {
  //       uri: uri,
  //       method: "POST",
  //       headers: {
  //         Authorization: apiKey,
  //       },
  //     },
  //     function (error, response, body) {
  //       if (error) reject(error);
  //       var result = JSON.parse(body);
  //       if (result.statusCode !== 200) reject(result);
  //       return resolve(result.data);
  //     }
  //   );
  // });
  return { type: "Alfatrex", status: "Not available" };
};

Ongkir.prototype.getPCPWaybill = function (waybill) {
  // var uri = this.baseUrl + `/waybill?waybill=${waybill}&courier=pcp`;
  // var apiKey = this.apiKey;
  // return new Promise(function (resolve, reject) {
  //   request(
  //     {
  //       uri: uri,
  //       method: "POST",
  //       headers: {
  //         Authorization: apiKey,
  //       },
  //     },
  //     function (error, response, body) {
  //       if (error) reject(error);
  //       var result = JSON.parse(body);
  //       if (result.statusCode !== 200) reject(result);
  //       return resolve(result.data);
  //     }
  //   );
  // });
  return { type: "PCP Express", status: "Not available" };
};

Ongkir.prototype.getSAPWaybill = function (waybill) {
  // var uri = this.baseUrl + `/waybill?waybill=${waybill}&courier=sap`;
  // var apiKey = this.apiKey;
  // return new Promise(function (resolve, reject) {
  //   request(
  //     {
  //       uri: uri,
  //       method: "POST",
  //       headers: {
  //         Authorization: apiKey,
  //       },
  //     },
  //     function (error, response, body) {
  //       if (error) reject(error);
  //       var result = JSON.parse(body);
  //       if (result.statusCode !== 200) reject(result);
  //       return resolve(result.data);
  //     }
  //   );
  // });
  return { type: "SAP Express", status: "Not available" };
};
