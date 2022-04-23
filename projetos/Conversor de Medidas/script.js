function conversor(distancia) {
  var distancia = Number(prompt('Digite uma distância em metros (m)'))
  if (!distancia) {
      alert('Que pena que não quis saber a conversão!')
      return
  }
  var km = [distancia / 1000]
  var hec = [distancia / 100]
  var deca = [distancia / 10]
  var deci = [distancia * 10]
  var cm = [distancia * 100]
  var mm = [distancia * 1000]
  var res = document.querySelector('div#res')
  res.innerHTML = (`<h2>A distância de ${distancia} metros, corresponde a...</h2>`) + (`<p>${km} kilometros (Km)</p>`) + (`<p>${hec} hectometros (Hm)</p>`) + (`<p>${deca} decâmetros (Dam)</p>`) + (`<p>${deci} decímetros (dm)</p>`) + (`<p>${cm} centimetros (cm)</p>`) +(`<p>${mm} milímetros (mm)</p>`);
}