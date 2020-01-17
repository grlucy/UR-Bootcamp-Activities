const Child = require("../child");

describe("Child", () => {
  describe("Initialization", () => {
    //exception test
    it("should throw an error if parameter 'name' is an empty string", () => {
      //arrange
      const child = new Child();
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );
      const cb = () => Child("", 5);

      //assert
      expect(cb).toThrowError(err);
    });
  });
});
