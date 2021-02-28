function password(input){
  const char = ["@","#","$","%","^","&","*","(",")","-","+","!"]
  const number = []
  let cek = true
  let cekUppercase = 0
  let cekLowercase = 0
  let cekNumber=0
  let doble= false
  let cekChar= false
  let count = {}
  if (input.length > 20 || input.length < 10){
    return `Your password Must more than 10 characters but less than 20 characters`
  }
  for(let i=0; i<input.length; i++){

    if(count[input[i]] === undefined  ){
      count[input[i]] = 1
    }
    else {
      count[input[i]]++
      doble=true
    }
    if(char.includes(`${input[i]}`)){
        cekChar = true
    }
    else if( !isNaN(+input[i])){
      cekNumber++
    }
   else if(input[i].toUpperCase() === input[i]){
      cekUppercase++
      number.push(input[i])
    }
    else if(input[i].toLowerCase() === input[i]){
      cekLowercase++
    }
  }


  if(doble === true){
    return `A Character can't be use twice`
  }
  else if(cekChar === false){
    return `Please input one of this '@#$%^&*()-+' characters`
  }
  else if(cekUppercase<2 || cekLowercase<5 || cekNumber<2){
    return `Please input minimal ${5} LowerCase,${2} UpperCase, ${2} Number`
  }
  else if(cekUppercase>=2 && cekLowercase>=5 && cekChar=== true && cekNumber>=2){
    return `Your password is perfect`
    
  }

}
console.log(password('Google12#4'))
console.log(password('17Februari2021!'))
console.log(password('Lar1P4g!'))
console.log(password('KompasSL1702!'))
console.log(password('B4nD3R Ja!L'))