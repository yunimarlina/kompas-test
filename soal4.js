let angka = [1,2,3,4,5,1,4,6,8,10]
let jawaban_4a = 0
let jawaban_4d = 0
let jawaban_4e = 0
for(let i=0; i<angka.length; i++){
  jawaban_4a +=angka[i]
  if(angka[i]%2 === 0){
    jawaban_4d++
  }
  if((angka[i]+angka[i+1]) === angka[i+2]){
    jawaban_4e++
  }
}


let sorted = angka
let sorted_terbesar = []
let angka_double = 0
let jumlah_angka_double = 0 
for (let i = 0; i < sorted.length; i++) {
  for (let j = 0; j < sorted.length; j++) {
    if (sorted[j+1] < sorted[j]) {
      let temp = sorted[j];
      sorted[j] = sorted[j+1];
      sorted[j+1] = temp;
    }
  }
}
for (let i = 0; i < sorted.length; i++) {
  if(sorted[i] === sorted[i+1]){
    angka_double++
    jumlah_angka_double +=(sorted[i]*2)
  }
}
for(let i=sorted.length-1; i>0; i--){
 sorted_terbesar.push(sorted[i])
}



let jawaban_4c = angka.filter((element, index) => {
  return angka.indexOf(element) === index;
});

console.log(`1. Jumlah sum dalam array adalah ${jawaban_4a}`)
console.log(`2. ada ${angka_double} angka yang diulang dan total jumlah semuanya adalah ${jumlah_angka_double}` )
console.log(`3. array setelah nilai berulang dihapus adalah ${jawaban_4c}`)
console.log(`4. Jumlah angka genap dalam array tersebut adalah ${jawaban_4d}`)
console.log(`5. Jumlah angka fibonacci dalam array tersebut adalah ${jawaban_4e}`)
console.log(`6. Urutan array setelah diurutkan dari terbesar ke terkecil adalah ${sorted_terbesar}`)




