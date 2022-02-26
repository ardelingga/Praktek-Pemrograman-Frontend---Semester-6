const nilai = 200;

if(nilai > 90){
    console.log("A")
}else if(nilai > 80){
    console.log("B")
}else if(nilai > 70){
    console.log("C")
}else{
    console.log("D")
}


// TERNARY OPERATOR
const age = 23;

const status = age > 21 ? "Dewasa" : "Belum Dewasa"
console.log(status);


const isLoggedIn = true
const component = "hai"

isLoggedIn && console.log(component)

const hasil = isLoggedIn || "Tidak"
console.log(hasil)