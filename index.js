// function isPalindrome(str) {
//   const regex = /[\W_]/g;
//   const smallStr = str.toLowerCase().replace(regex, "");
//   const reversed = smallStr.split("").reverse().join("");
//   return reversed === smallStr? true: false
//  }
 
//  const string = "abba___!!!"
 
//  console.log(isPalindrome(string))



const isPalindrome = (str) => {
 
  for (let i = 0; i < str.length / 2; i++) {
   const j = str.length - 1 - i;
    
    if (str[i] !== str[j]) return false
  }

  return true
}


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("rac___eca   r"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
