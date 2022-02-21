/** input 4 digit, cek apakah angka palindrome */

function isPalindrome(angka){
  if (isNaN(angka)) {
    return angka+" is not an number"
  } 
  else {
    let rem, temp, final = 0;
    let number = Number(angka);

    temp = number;
    while(number>0){
      rem = number%10;
      number = parseInt(number/10);
      final = final*10+rem;
    }
    if(final==temp){
      return angka+" is Palindrome"
    }
    else{
      return angka+" not palindrome"
    }
  }
}


console.log(isPalindrome("abcd"));//abcd is not an number
console.log(isPalindrome("123a"));//123a is not an number
console.log(isPalindrome("1234"));//1234 is not palindrome
console.log(isPalindrome(1221));//1221 is palindrome
console.log(isPalindrome("8888"));//8888 is palindrome