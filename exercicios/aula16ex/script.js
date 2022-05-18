let num = document.getElementById('txtn')
let tab = document.getElementById('tabselect')
let res = document.getElementById('res')
let valores = [] 
// Analise de dados por um vetor/array

function isNumero(n) {
  if(Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

// indexOf -1 indica que valor nao foi encontrado na lista
function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1 ) {   
    return true
  } else {
    return false
  }
}

/* \/ - vai verificar se é um numero e se o numero digitado esta na lista, parametro 'valores' para referenciar vetor */

function adicionar() {
  if(isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value)) 
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    tab.appendChild(item)
    res.innerHTML = ''
  } else {
    alert('Valor inválido ou já encontrado na lista!')
  }
  num.value = ''     // apaga o numero anterior ja digitado no campo
  num.focus()        // foca o cursor no campo de digitacao
}

function finalizar() {
  if (valores.length == 0) {
    alert('Digite um número na lista!')
  } else {
    let tot = valores.length
    let maior = valores[0] // ate o momento o primeiro eh o maior e o menor, pois so tem ele
    let menor = valores[0]
    let soma = 0
    let media = 0
    for (let pos in valores) {        // para cada posicao in valores, verificar se o valores na posicao pos, for maior que o maior valor, o maior valor passa a ser...
      soma += valores[pos]
      if(valores [pos] > maior)
        maior = valores[pos]
      if (valores [pos] < menor)
        menor = valores[pos]  
    } 
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média de todos os valores é ${media}.</p>`
  }
  
}