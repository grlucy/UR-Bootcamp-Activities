const Child = require("../child");

describe("Child", () => {
  describe("Initialization", () => {
    // exception test
    it("should throw an error if not provided a 'name' value", () => {
      //arrange
      const cb = () => new Child("", 2);
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );
      //assert
      expect(cb).toThrowError(err);
    });

    //exception test
    it("should throw an error if not provided a non-negative number for 'age'", () => {
      //arrange
      const cb = () => new Child("Ed", -7);
      const err = new Error(
        "Expected parameter 'age' to be a non-negative number"
      );
      //assert
      expect(cb).toThrowError(err);
    });
  });
});
