/**
 * input 4 digit integer lalu hitung jumlahnya
 */

 function sumDigit(n){
    if (isNaN(n)) {
        return "a123 is not number, try again..."
    } 
    else if(n > 10000){
        return "12345 harus lebih kecil dari 10000"
    }
    else{
        let jumlah = 0;
	    let pisah = n.toString().split("");

	    let sum = pisah.reduce(function(a, b){
            return parseInt(a) + parseInt(b);
        }, 0);
        return sum;
    }       
    
}


console.log(sumDigit(1234)); //10
console.log(sumDigit("1234"));//10
console.log(sumDigit(12345));//12345 harus lebih kecil dari 10000
console.log(sumDigit("a123"));//a123 is not number, try again...
