function tabuada() {
  let num = document.getElementById('numb1')
  let tab = document.getElementById('seltab')
  if (num.value.length == 0) {
    alert('Digite um número válido!')
  } else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = "" // limpa a exibicao anterior. 
    while (c <= 10) {
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c}` 
      tab.appendChild(item)
      item.value = `tab ${c}` // para o JS nao e util, mas para outras linguagens é importante, saber qual tab foi selecionado
      c++ // incrementa o valor de C para partir a 2, 3, 4...
    }
  } 
 console.log(typeof'n')
}