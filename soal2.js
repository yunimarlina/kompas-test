function hitungHuruf(input){
  let letters = /^[A-Za-z]+$/;
  let count = {}
  let inputUppercase= input.toUpperCase()

  for (i = 0; i < inputUppercase.length; i++){
    if(inputUppercase[i].match(letters)){
      if(count[inputUppercase[i]] === undefined  ){
        count[inputUppercase[i]] = 1
      }
      else {
        count[inputUppercase[i]]++
      }
    }
  
  }
  for(let j=0; j<count.length;j++){
    console.log(count[j].A)
  }
return count

}

console.log(hitungHuruf("aaaaa134"))