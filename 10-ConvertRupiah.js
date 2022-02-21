/**
 * Convert rupiah to other currency
 */

 function convertToRupiah(money,type){
    if (type ==="yen") {
        let dyen= money *130.120;
        currency1 = new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(dyen);
        return money+" yen"+" = "+currency1
    } 
    else if(type ==="usd"){
        let dusd = money * 14382.5
        currency2 = new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(dusd);
        return money+" dollar"+" = "+currency2
    }
    else if(type ==="eur"){
        let deur = money * 16000
        currency3 = new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(deur);
        return money+" dollar"+" = "+currency3
    }
    else{
        return "no match type currency"
    }
}

console.log(convertToRupiah(1000,'yen'));//1000 yen  = Rp.130.120
console.log(convertToRupiah(100,'usd'));//100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100,'eur'));//100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100,''));//no match type currency