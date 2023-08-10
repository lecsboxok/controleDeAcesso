let numeroAcesso = Number(prompt("Insira um numero"));
let cor = document.body.style;
if (numeroAcesso >= 1000 && numeroAcesso <=1999) {
    var acesso = "Acesso liberado";
    alert(acesso);
}
else if (numeroAcesso >= 2000 && numeroAcesso <= 2999) {
    var acesso = "Acesso restrito";
    alert(acesso);
}
else {
    var acesso = "Acesso negado"
    alert(acesso)
}

switch (acesso) {
    case "Acesso liberado":
        cor.backgroundColor = 'green';
        break;
    case "Acesso restrito":
        cor.backgroundColor = 'yellow';
        break;
    case "Acesso negado":
        cor.backgroundColor = 'red';
        break;
    default:
        cor.backgroundColor = 'white';
}


























// let button = document.getElementById('enviar')

// button.addEventListener('click', function() {

//     let nome = parseInt(document.getElementById('nome').value);
//     let info = document.getElementById('info');


//     if(nome>=1000 && nome<=1999){
//         var info = ('Bom dia!')
//       }
//       else if(nome>=2000 && hora<=2999){
//         console.log('Boa Tarde!')
//       }
//       else{
//         console.log('Boa Noite!')
//       }
// })



