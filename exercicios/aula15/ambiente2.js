let num = [1, 2, 3, 5, 8]
num.push(4) // adicionei 4
num.sort() // ordenou

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4) // buscou
if (pos == -1) {
  console.log('Valor não encontrado!')
} else {
  console.log(`O valor está na posição ${pos}`)
}