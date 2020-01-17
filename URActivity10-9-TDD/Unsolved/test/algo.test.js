const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it("Should take a string as an argument and return a new reversed version of the string", () => {
      const str = "wonderful";
      const reverseStr = "lufrednow";

      const reverseTest = new Algo().reverse(str);

      expect(reverseTest).toEqual(reverseStr);
    });
  });

  describe("isPalindrome", () => {
    it("Should take a string as an argument and return the boolean `true` if the provided string is a palindrome", () => {
      const palindrome = "racecar";

      const isPalindromeTest = new Algo().isPalindrome(palindrome);

      expect(isPalindromeTest).toEqual(true);
    });

    it("should return `false` if the string is not a palindrome", () => {
      const notPalindrome = "wonderful";

      const isNotPalindromeTest = new Algo().isPalindrome(notPalindrome);

      expect(isNotPalindromeTest).toEqual(false);
    });
  });

  describe("capitalize", () => {
    it("should take a string as an argument and return a new string with the first letter of each word capitalized", () => {
      const str = "I saw him over the misty moors, weeping.";
      const capStr = "I Saw Him Over The Misty Moors, Weeping.";

      const capitalizeTest = new Algo().capitalize(str);

      expect(capitalizeTest).toEqual(capStr);
    });
  });
});
