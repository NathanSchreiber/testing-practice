import * as functions from "./function";

test("Capitalize first letter", () => {
  expect(functions.firstCaps("hello")).toMatch(/^[A-Z][a-z]+$/);
});

test("Reverse String", () => {
  expect(functions.reverseString("hello")).toBe("olleh");
});

test("Calculator", () => {
  expect(functions.calculator.add(1, 2)).toBe(3);
  expect(functions.calculator.subtract(15, 5)).toBe(10);
  expect(functions.calculator.divide(6, 2)).toBe(3);
  expect(functions.calculator.multiply(5, 5)).toBe(25);
});

test("Caesar cipher", () => {
  expect(functions.caesarCipher("Hello friend", 3)).toBe("khoor iulhqg");
  expect(functions.caesarCipher("Test number zebra.", 13)).toBe(
    "grfg ahzore mroen."
  );
  expect(
    functions.caesarCipher("went to the bank today. this is a test.", 4)
  ).toBe("airx xs xli fero xshec. xlmw mw e xiwx.");
});

test("Analyze array", () => {
  expect(functions.analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
