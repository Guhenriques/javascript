let valores = [1, 2, 4, 6, 8, 9]
valores.sort()

console.log(valores)
/*
for (let pos=0; pos < valores.length; pos++) {
  console.log(`A posiçao ${pos} tem o valor de ${valores[pos]}`)
}
*/

for (let pos in valores) {
  console.log (`A posiçao ${pos} tem o valor ${valores[pos]}`)
}