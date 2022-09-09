const { Country, State } = require("country-state-city");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.getAllCountries = catchAsyncErrors(async (req, res, next) => {
  const countries = await Country.getAllCountries();

  res.status(200).json({
    success: true,
    countries,
  });
});

exports.getAllStates = catchAsyncErrors(async (req, res, next) => {
  const states = State.getStatesOfCountry(req.body.country);

  res.status(200).json({
    success: true,
    states,
  });
});
