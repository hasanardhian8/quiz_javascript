/** Buat program untuk menampilkan prosentasi dari income*/

function getProsentase(start,end){
    if (typeof(start) === "string" || typeof(end) === "string" ) {
        return start+" atau " +end+ " harus dalam angka " 
    } else {
        let laba = end - start;
        let persen = ((laba/start)*100).toFixed(0);
        if (persen > 0) {
            return "Total kenaikan income "+persen+ "%"
        } else {
            return "Total penurunann income "+persen+ "%"
        }
    }

    
}

console.log(getProsentase("abc","bca"));//abc or bca harus dalam angka
console.log(getProsentase(600000.00,750000.00));//Total kenaikan income 25%
console.log(getProsentase(750000.00,650000.00));//Total penurunan income -14%