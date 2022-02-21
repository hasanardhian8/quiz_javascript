/** Display year is kabisat and display month */

function getDays(month,year){
    if (isNaN(month) && typeof(year) === "number") {
        return "inputan bulan harus dalam integer"
    } 
    else if(Number(month) && isNaN(year)){
        return "inputan tahun harus dalam integer"
    }
    else if(isNaN(month) && isNaN(year)){
        return "inputan bulan & tahun harus dalam integer"
    }
    else{
        const kabisat = new Date(year,1,29).getDate() === 29;
        if (kabisat) {
            let tgl = new Date(year,month,0).getDate()
            return "this month has "+tgl+" hari "+year+" adalah tahun kabisat"
        } else {
            let tgl = new Date(year,month,0).getDate()
            return "this month has "+tgl+" hari "
        }
    }
}

console.log(getDays("a",2021)); //inputan bulan harus dalam integer
console.log(getDays("2","year")); //inputan tahun harus dalam integer
console.log(getDays("m","year"));//inputan bulan & tahun harus dalam integer
console.log(getDays(2,2000)); //This month has 29 days, 2000 adalah tahun kabisat
console.log(getDays(8,2021)); //This month has 31 hari