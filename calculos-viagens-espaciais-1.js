function square(num) {
  const digitsArray = num.toString().split('')
  const squaredArray = digitsArray.map(digit => Number(digit) ** 2).join('')

  return Number(squaredArray)
}

/*
  function square(num) {
  const str = num.toString();
  let result = "";

  for (let i = 0; i < str.length; i++){
    result += Math.pow(Number(str[i]), 2). toString() // result = result + ....
  }

  return Number(result);
}
*/

console.log(square(3514)) // 925116
console.log(square(94571)) // 811625491
console.log(square(24)) // 416
console.log(square(745821698)) // 4916256441368164