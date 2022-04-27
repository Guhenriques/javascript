let num = [2, 3, 5, 8, 9]
num.push(1)
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posiçoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(5)
if (pos == -1) {
  console.log('Valor nao encontrado!')
} else {
  console.log(`O valor está na posiçao ${pos}`)
}