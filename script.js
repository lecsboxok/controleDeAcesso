let button = document.getElementById('enviar');

function vai() {
    let numero = document.getElementById('numero').value;
    let cor = document.body.style;
    let letraCor = document.getElementById('resultado').style;
    if (numero >= 1000 && numero <= 1999) {
        resultado = "ACESSO LIBERADO";
    }
    else if (numero >= 2000 && numero <= 2999) {
        resultado = "ACESSO RESTRITO";
    }
    else {
        resultado = "ACESSO NEGADO"
    }

    document.querySelector('#resultado').textContent = resultado;

    switch (resultado) {
        case "ACESSO LIBERADO":
            cor.backgroundColor = '#055902';
            letraCor.color = '#055902'
            break;
        case "ACESSO RESTRITO":
            cor.backgroundColor = '#EAF205';
            letraCor.color = '#EAF205'
            break;
        case "ACESSO NEGADO":
            cor.backgroundColor = '#8C0327';
            letraCor.color = '#8C0327'
            break;
        default:
            cor.backgroundColor = '#6C6C73';
    }
    
}




