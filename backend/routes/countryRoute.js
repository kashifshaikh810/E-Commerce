const express = require("express");
const {
  getAllCountries,
  getAllStates,
} = require("../controllers/countryController");

const router = express.Router();

router.route("/countries").get(getAllCountries);
router.route("/states").post(getAllStates);

module.exports = router;
