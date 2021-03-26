const express = require("express");
const {
  getProvince,
  getProvinces,
  getCity,
  getDistrict,
  checkOngkirJNE,
  getJNTWaybill,
  getSicepatWaybill,
  getJNEWaybill,
  checkOngkirPOS,
} = require("../controller/ongkir");
const router = express.Router();

router.get("/provinces", getProvinces);
router.get("/province", getProvince);
router.get("/city", getCity);
router.get("/district", getDistrict);

router.get("/ongkir_jne", checkOngkirJNE);
router.get("/ongkir_pos", checkOngkirPOS);

router.get("/waybill_jne", getJNEWaybill);
router.get("/waybill_jnt", getJNTWaybill);
router.get("/waybill_sicepat", getSicepatWaybill);

module.exports = router;
