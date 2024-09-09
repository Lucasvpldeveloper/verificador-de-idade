function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nascimento = document.getElementById('ano')
    var res = document.getElementById('res')
    if (nascimento.value.length == 0 || ano < nascimento.value) {
        alert('[ERRO] Por favor verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('fsex')
        var idade = ano - Number(nascimento.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 20) {
                //jovem
                img.setAttribute('src','homem-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src','homem-adulto.png')
            } else {
                //idoso
                img.setAttribute('src','homem-velho.png')
            }
        } else {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 20) {
                //jovem
                img.setAttribute('src','mulher-jovem10.png')
            } else if (idade < 50) {
                img.setAttribute('src','mulher-adulta.png')
            } else {
                //idoso
                img.setAttribute('src','mulher-velha.png')
            }
        }
    }
    res.innerHTML = (`Detectamos um ${genero} com ${idade} anos`)
    res.appendChild(img)
}