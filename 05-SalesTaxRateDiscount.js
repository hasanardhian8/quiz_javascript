 /**
  * hitung sales discount plus tax rate
  * function getSalesDiscount
  */

  function getSalesDiscount(price,tax,discount){
   if (typeof(price) === "string" && typeof(tax) != "string" && typeof(discount) != "string") {
      return "Price harus dalam angka"
   } 
   else if(typeof(price) != "string" && typeof(tax) === "string" && typeof(discount) != "string"){
      return "Pajak harus dalam angka"
   }    
   else if(typeof(price) === "string" && typeof(tax) === "string" && typeof(discount) === "string"){
      return "Price, Tax & Discount harus dalam angkaa"
   }
   else{
      let diskon = (discount/100)*price;
      let hargaafter = diskon+price;
      let pajak = hargaafter * (tax/100);
      return hargaafter+pajak
   }
}

console.log(getSalesDiscount("a", 1, 5));//Price harus dalam angka
console.log(getSalesDiscount(500, "pajak",5));//Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak","discount"));//Price, Tax & Discount harus dalam angkaa
console.log(getSalesDiscount(4500, 10, 5));
/**
   Total Sales 	: Rp.4500 
   Discount (5%) 	: Rp.225
   PriceAfterDiscount 	: Rp.4275
   Pajak (10%) 	: Rp.427.5
   ----------------------------------
   TotalPayment 	: Rp.4702.5
*/