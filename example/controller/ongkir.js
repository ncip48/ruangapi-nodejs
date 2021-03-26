var RuangApi = require("../../lib/ruangapi").Ongkir(
  "NB4c1ECdhbrb0ULHSXrhmmga2zayMRxUPfTOQKFl"
);
//var RuangApi = require("ruangapi-nodejs").Ongkir(apikey);

exports.getProvinces = async (req, res) => {
  const { from, to } = req.query;
  const resp = await RuangApi.getProvinces();
  res.send({
    data: resp,
  });
};

exports.getProvince = async (req, res) => {
  const { id } = req.query; //province_id
  const resp = await RuangApi.getProvince(id);
  res.send({
    data: resp,
  });
};

exports.getCity = async (req, res) => {
  const { id } = req.query; //province_id
  const resp = await RuangApi.getCity(id);
  res.send({
    data: resp,
  });
};

exports.getDistrict = async (req, res) => {
  const { id } = req.query; //city_id
  const resp = await RuangApi.getDistrict(id);
  res.send({
    data: resp,
  });
};

exports.checkOngkirJNE = async (req, res) => {
  const { from, to, weight } = req.query; //from = kota/kabupaten, to = kecamatan, weight = berat
  const resp = await RuangApi.getJNECost(from, to, weight);
  res.send({
    data: resp,
  });
};

exports.checkOngkirPOS = async (req, res) => {
  const { from, to, weight } = req.query; //from = kota/kabupaten, to = kecamatan, weight = berat
  const resp = await RuangApi.getPOSCost(from, to, weight);
  res.send({
    data: resp,
  });
};

exports.getJNEWaybill = async (req, res) => {
  const { waybill } = req.query; //no resi
  const resp = await RuangApi.getJNEWaybill(waybill);
  res.send({
    data: resp,
  });
};

exports.getJNTWaybill = async (req, res) => {
  const { waybill } = req.query; //no resi
  const resp = await RuangApi.getJNTWaybill(waybill);
  res.send({
    data: resp,
  });
};

exports.getSicepatWaybill = async (req, res) => {
  const { waybill } = req.query; //no resi
  const resp = await RuangApi.getSicepatWaybill(waybill);
  res.send({
    data: resp,
  });
};
