function palindrome(str){
  const cleanLowercaseString = str.replace(/[\W_]/gi, "").toLowerCase();
  const splitArray = cleanLowercaseString.split("");
  const reversedArray = splitArray.reverse();
  const reversedString = reversedArray.join('');
  return reversedString == cleanLowercaseString;
}

palindrome("!!!eYe___");