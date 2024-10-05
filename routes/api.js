"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.get("/api/convert", (req, res) => {
    const input = req.query.input;
    let response = "";

    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);
    console.log({ input, initNum, initUnit });
    if (
      initNum.toString().toLowerCase().startsWith("invalid") &&
      initUnit.toString().toLowerCase().startsWith("invalid")
    ) {
      response = "invalid number and unit";
    } else if (initNum.toString().toLowerCase().startsWith("invalid")) {
      response = "invalid number";
    } else if (initUnit.toLowerCase().startsWith("invalid")) {
      response = "invalid unit";
    } else {
      const returnNum = convertHandler.convert(initNum, initUnit);
      const returnUnit = convertHandler.getReturnUnit(initUnit);
      const string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

      response = { initNum, initUnit, returnNum, returnUnit, string };
    }

    res.send(response);
  });
};
