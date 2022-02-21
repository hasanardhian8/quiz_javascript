/**
 * Hitung pajak dari total penjualan
 * function getSalesTax(price, tax)
 */

 function getSalesTax(price, tax) {
    if (typeof(price) === "string" && typeof(tax) != "string") {
        return "Price harus dalam angka"
    } 
    else if(typeof(price) != "string" && typeof(tax) === "string"){
        return "Price & Pajak harus dalam angka"
    }    
    else if(typeof(price) === "string" && typeof(tax) === "string"){
        return "Pajak harus dalam angka"
    }
    else{
        let pajak = price * tax;
        return price + pajak
    }
}

console.log(getSalesTax("a", 1));//Price harus dalam angka
console.log(getSalesTax(500, "pajak"));//Price & Pajak harus dalam angka
console.log(getSalesTax("harga", "pajak"));//Pajak harus dalam angka
console.log(getSalesTax(4500, 0.5));
/**
 Total Sales : Rp.4500
 Pajak : 0.5 
 TotalHarga+Pajak : Rp.4505
 
*/