function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) { // verifica se o ano esta vazio ou maior do que o ano atual, Number para conversao
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 18) {
                // Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 30) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            document.body.style.background = '#d1aa40'
            if (idade >= 0 && idade < 18) {
                // Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 30) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 70) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) 
        
    }             

}