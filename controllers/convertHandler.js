function ConvertHandler() {
  this.getNum = function (input) {
    const chrRe = /[a-zA-Z]/;
    const numRe = /^\d+(?:\.\d+)?(?:\/\d+(?:\.\d+)?)?$/;
    const num = input.split(chrRe)[0];
    const isCorrectNumber = numRe.test(num);
    return isCorrectNumber ? parseFloat(num) : "invalid number";
  };

  this.getUnit = function (input) {
    const measureUnits = ["gal", "L", "kg", "lbs", "km", "mi"];
    let unit = input.split("").reverse().join("").split(/\d/)[0].split("").reverse().join("");
    unit = unit == "l" ? "L" : unit;
    const isCorrectUnit = measureUnits.includes(unit);
    return isCorrectUnit ? unit : "invalid unit";
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

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const lToGal = 1 / galToL;
    const kgToLbs = 1 / lbsToKg;
    const kmToMi = 1 / miToKm;
    let result;
    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum * lToGal;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum * kgToLbs;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum * kmToMi;
        break;
      default:
        result = "invalid unit";
        break;
    }
    return typeof result == "number" ? Number(result.toFixed(5)) : result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(
      returnUnit
    )}`;
  };
}

module.exports = ConvertHandler;
