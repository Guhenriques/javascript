var agora = new Date()
var diaSem = agora.getDay()

//diaSem = 9

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    default:
        console.log('Esse dia nao existe, rapá!')
}