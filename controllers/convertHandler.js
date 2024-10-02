function ConvertHandler() {
  this.getNum = function (input) {
    let result;
    result = input.slice(0, input.search(/[a-zA-Z]/));
    return result;
  };

  this.getUnit = function (input) {
    let result;
    const measureUnits = ["gal", "L", "kg", "lbs", "km", "mi"];
    result = input.slice(input.search(/[a-zA-Z]/)).toLowerCase();
    result = result == "l" ? "L" : result;
    return measureUnits.includes(result) ? result : "invalid unit";
  };

  this.getReturnUnit = function (initUnit) {
    let result;
    const unit = initUnit.toLowerCase();
    switch (unit) {
      case "gal":
        result = "L";
        break;
      case "l":
        result = "gal";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      default:
        result = "invalid unit";
        break;
    }
    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;
    switch (unit) {
      case "gal":
        result = "gallons";
        break;
      case "l":
        result = "liters";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
      default:
        result = "invalid unit";
        break;
    }
    return result;
  };

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //     DA QUI
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
