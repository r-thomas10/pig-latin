const piglatin = require("../src/index")

test("when given 'apple' returns 'appleway'", function() {
    expect(translate("apple")).toEqual("appleway");
});



