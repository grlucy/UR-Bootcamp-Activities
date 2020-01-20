const DayCare = require("../dayCare");
const Child = require("../child");

describe("DayCare", () => {
  //ADD CHILD:
  describe("addChild", () => {
    // child is added
    // Positive test
    it("should add the child to the `children` array if not at capacity and child not over age limit", () => {
      //arrange
    });
    // child is not added - over age limit
    // Negative test
    it("should return early if the child is over the age limit", () => {
      // arrange
    });
    // child is not added - at capacity
    // Negative test
    it("should return early if daycare is at capacity", () => {
      // arrange
      const child = new Child("Ed", 2);
      const cb = () => new DayCare();
      cb.capacity = 0;
      cb.addChild(child);
      // assert
      expect(cb.children.length).toEqual(0);
    });
    // throw error when not passed child
    // Exception test
    it("should throw an error if not passed a Child object", () => {
      // arrange
    });
  });

  // PICKUP CHILD:
  // Correct child index found
  // No child found, no index returned
  // Child removed from array and returned
});
