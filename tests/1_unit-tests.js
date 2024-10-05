const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("convertHandler Unit Tests", function () {
  suite("function `getNum`", function () {
    test("convertHandler should correctly read a whole number input", function () {
      assert.isNumber(convertHandler.getNum("12kg"), "12 is an integer number");
    });
    test("convertHandler should correctly read a decimal number input", function () {
      assert.isNumber(convertHandler.getNum("5.6lbs"), "5.6 is a decimal number");
    });
    test("convertHandler should correctly read a fractional input", function () {
      assert.isNumber(convertHandler.getNum("3/7km"), "3/7 is a fractional number");
    });
    test("convertHandler should correctly read a fractional input with a decimal", function () {
      assert.isNumber(
        convertHandler.getNum("5.2/13gal"),
        "5.2/13 is a fractional number with a decimal"
      );
    });
    test("convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)", function () {
      assert.isNotNumber(convertHandler.getNum("3/2/3mi"), "3/2/3 is a double fraction");
    });
    test("convertHandler should correctly default to a numerical input of 1 when no numerical input is provided", function () {
      assert.equal(convertHandler.getNum("kg"), 1, "kg has no numerical input");
    });
  });
  suite("function `getUnit`", function () {
    suite("convertHandler should correctly read each valid input unit", function () {
      test("gal", function () {
        assert.equal(convertHandler.getUnit("12gal"), "gal");
      });
      test("L", function () {
        assert.equal(convertHandler.getUnit("12L"), "L");
      });
      test("kg", function () {
        assert.equal(convertHandler.getUnit("12kg"), "kg");
      });
      test("lbs", function () {
        assert.equal(convertHandler.getUnit("12lbs"), "lbs");
      });
      test("km", function () {
        assert.equal(convertHandler.getUnit("12km"), "km");
      });
      test("mi", function () {
        assert.equal(convertHandler.getUnit("12mi"), "mi");
      });
    });
    test("convertHandler should correctly return an error for an invalid input unit", function () {
      assert.equal(convertHandler.getUnit("2.7klo"), "invalid unit");
    });
  });
  suite("function `getReturnUnit`", function () {
    suite(
      "convertHandler should return the correct return unit for each valid input unit",
      function () {
        test("gal", function () {
          assert.equal(convertHandler.getReturnUnit("gal"), "L");
        });
        test("l", function () {
          assert.equal(convertHandler.getReturnUnit("l"), "gal");
        });
        test("lbs", function () {
          assert.equal(convertHandler.getReturnUnit("lbs"), "kg");
        });
        test("kg", function () {
          assert.equal(convertHandler.getReturnUnit("kg"), "lbs");
        });
        test("mi", function () {
          assert.equal(convertHandler.getReturnUnit("mi"), "km");
        });
        test("km", function () {
          assert.equal(convertHandler.getReturnUnit("km"), "mi");
        });
      }
    );
  });
  suite("function `spellOutUnit`", function () {
    suite(
      "convertHandler should return the correct return unit for each valid input unit",
      function () {
        test("gal", function () {
          assert.equal(convertHandler.spellOutUnit("gal"), "gallons");
        });
        test("l", function () {
          assert.equal(convertHandler.spellOutUnit("l"), "liters");
        });
        test("lbs", function () {
          assert.equal(convertHandler.spellOutUnit("lbs"), "pounds");
        });
        test("kg", function () {
          assert.equal(convertHandler.spellOutUnit("kg"), "kilograms");
        });
        test("mi", function () {
          assert.equal(convertHandler.spellOutUnit("mi"), "miles");
        });
        test("km", function () {
          assert.equal(convertHandler.spellOutUnit("km"), "kilometers");
        });
      }
    );
  });
  suite("Conversions", function () {
    test("convertHandler should correctly convert gal to L", function () {
      assert.equal(convertHandler.convert(5, "gal"), 18.92705);
    });
    test("convertHandler should correctly convert L to gal", function () {
      assert.equal(convertHandler.convert(5, "L"), 1.32086);
    });
    test("convertHandler should correctly convert mi to km", function () {
      assert.equal(convertHandler.convert(5, "mi"), 8.0467);
    });
    test("convertHandler should correctly convert km to mi", function () {
      assert.equal(convertHandler.convert(5, "km"), 3.10686);
    });
    test("convertHandler should correctly convert lbs to kg", function () {
      assert.equal(convertHandler.convert(5, "lbs"), 2.26796);
    });
    test("convertHandler should correctly convert kg to lbs", function () {
      assert.equal(convertHandler.convert(5, "kg"), 11.02312);
    });
  });
});
