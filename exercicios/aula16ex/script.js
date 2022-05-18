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
    alert('Tudo ok!')
  } else {
    alert('Valor inválido ou já encontrado na lista!')
  }
}