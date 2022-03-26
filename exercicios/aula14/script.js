function carregar () {
    var msg = document.getElementById('mensagem')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.innerHTML = '<img src="imagens/manha.png" width="200px">'
        document.body.style.background = '#f8cd98'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.innerHTML = '<img src="imagens/tarde.png" width="200px">'
        document.body.style.background = '#f1a661'
    } else {
        // BOA NOITE
        img.innerHTML = '<img src="imagens/noite.png" width="200px">'
        document.body.style.background = '#6a5d6e'
    }
}

