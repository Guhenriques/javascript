function reajustar() {
  let nome = prompt('Qual o nome do funcionário?')
  let salario = Number(prompt(`Qual é o salário de ${nome}?`))
  let porc = Number(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
  let res = document.getElementById('botao')
  if (salario.length == 0) {
    alert('Digite um salário válido!')
  } else {
    let reajuste = (salario / 100) * porc
    res.innerHTML = `Reajuste foi de ${reajuste}`
  }
}