// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
  let forwardsArray = str.split("");
  let forwardsWord = forwardsArray.join();
  let backwardsWord = forwardsArray.reverse().join();
  if (forwardsWord === backwardsWord) {
    return true;
  } else {
    return false;
  }
};
