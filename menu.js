let menu = document.getElementById('menu-nav')
document.addEventListener('scroll', rolar)

let ultimaPosicao = 0;

function rolar(){

    let posicaoAtual = window.screenY;

    if(posicaoAtual > ultimaPosicao){
        document.getElementById('menu-nav').className = "";
    } else{
        document.getElementById('menu-nav').className = "teste"
    }
}