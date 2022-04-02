var idade = 12
console.log(`Voce tem ${idade} anos!`)
if (idade < 16) {
    console.log('Voce ainda nao pode votar, carinha!')
} else if (idade < 18 || idade > 65) {
    console.log('O seu voto é opcional!')
} else {
    console.log('Vai votar seu panaca!!!!!')
}