let num = [2, 3, 5, 8, 9]
num.push(7)
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posiçoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(5) // buscar um valor no vetor, onde esta o valor 5
if (pos == -1) { // quando pesquisa e nao encontra resulta em -1
  console.log('Valor nao encontrado!')
} else {
  console.log(`O valor está na posiçao ${pos}`)
}