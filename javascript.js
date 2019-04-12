var contador = 0
var ganhou = false;
function jogada(indice) {
    let elemento = document.getElementsByClassName("bloco")[indice]
    
    if (!elemento.querySelector('img') && (!ganhou)) {
        if (contador % 2 == 0) {
            elemento.innerHTML = '<img src="x.png">';
            contador++
        }
        else {
            elemento.innerHTML = "<img src='o.png'>";
            contador++
        }
    }

    puxar(elemento)
}

function puxar(elemento) {
    let elemento0 = document.getElementById("bloco1")
    let elemento1 = document.getElementById("bloco2")
    let elemento2 = document.getElementById("bloco3")
    let elemento3 = document.getElementById("bloco4")
    let elemento4 = document.getElementById("bloco5")
    let elemento5 = document.getElementById("bloco6")
    let elemento6 = document.getElementById("bloco7")
    let elemento7 = document.getElementById("bloco8")
    let elemento8 = document.getElementById("bloco9")

    if ((elemento0.innerHTML == elemento1.innerHTML) && (elemento1.innerHTML == elemento2.innerHTML)) {
        if (elemento.innerHTML == '<img src="x.png">') {
            document.getElementById("ganhou").innerHTML = "<h1>O JOGADOR QUE UTILIZOU O XIZINHO GANHOU<h1>"
            ganhou=true;
        }
        else {
            document.getElementById("ganhou").innerHTML = "<h1>O JOGADOR QUE UTILIZOU O BOLINHA GANHOU<h1>"
            ganhou=true;
        }
    }

    if ((elemento3.innerHTML == elemento4.innerHTML) && (elemento4.innerHTML == elemento5.innerHTML)) {
        if (elemento.innerHTML == '<img src="x.png">') {
            document.getElementById("ganhou").innerHTML = "<h1>O JOGADOR QUE UTILIZOU O XIZINHO GANHOU<h1>"
            ganhou=true;
        }
        else {
            document.getElementById("ganhou").innerHTML = "<h1>O JOGADOR QUE UTILIZOU O BOLINHA GANHOU<h1>"
            ganhou=true;

        }

    }

    if ((elemento6.innerHTML == elemento7.innerHTML) && (elemento7.innerHTML == elemento8.innerHTML)) {
        if (elemento.innerHTML == '<img src="x.png">') {
            document.getElementById("ganhou").innerHTML = "<h1>O JOGADOR QUE UTILIZOU O XIZINHO GANHOU<h1>"
            ganhou=true;
        }
        else {
            document.getElementById("ganhou").innerHTML = "<h1>O JOGADOR QUE UTILIZOU O BOLINHA GANHOU<h1>"
            ganhou=true;
        }
    }

    if ((elemento0.innerHTML == elemento3.innerHTML) && (elemento3.innerHTML == elemento6.innerHTML)) {
        if (elemento.innerHTML == '<img src="x.png">') {
             document.getElementById("ganhou").innerHTML = "<h1>O JOGADOR QUE UTILIZOU O XIZINHO GANHOU<h1>"
             ganhou=true;
        }
        else {
            document.getElementById("ganhou").innerHTML = "<h1>O JOGADOR QUE UTILIZOU O BOLINHA GANHOU<h1>"
            ganhou=true;
        }
    }

    if (elemento1.innerHTML == elemento4.innerHTML && elemento4.innerHTML == elemento7.innerHTML) {
        if (elemento.innerHTML == '<img src="x.png">') {
             document.getElementById("ganhou").innerHTML = "<h1>O JOGADOR QUE UTILIZOU O XIZINHO GANHOU<h1>"
             ganhou=true;
        }
        else {
            document.getElementById("ganhou").innerHTML = "<h1>O JOGADOR QUE UTILIZOU O BOLINHA GANHOU<h1>"
            ganhou=true;
        }
    }
    if (elemento2.innerHTML == elemento5.innerHTML && elemento5.innerHTML == elemento8.innerHTML) {
        if (elemento.innerHTML == '<img src="x.png">') {
             document.getElementById("ganhou").innerHTML = "<h1>O JOGADOR QUE UTILIZOU O XIZINHO GANHOU<h1>"
             ganhou=true;
        }
        else {
            document.getElementById("ganhou").innerHTML = "<h1>O JOGADOR QUE UTILIZOU O BOLINHA GANHOU<h1>"
            ganhou=true;
        }
    }
    if (elemento0.innerHTML == elemento4.innerHTML && elemento4.innerHTML == elemento8.innerHTML) {
        if (elemento.innerHTML == '<img src="x.png">') {
             document.getElementById("ganhou").innerHTML = "<h1>O JOGADOR QUE UTILIZOU O XIZINHO GANHOU<h1>"
             ganhou=true;
        }
        else {
            document.getElementById("ganhou").innerHTML = "<h1>O JOGADOR QUE UTILIZOU O BOLINHA GANHOU<h1>"
            ganhou=true;
        }
    }
    if (elemento2.innerHTML == elemento4.innerHTML && elemento4.innerHTML == elemento6.innerHTML) {
        if (elemento.innerHTML == '<img src="x.png">') {
             document.getElementById("ganhou").innerHTML = "<h1>O JOGADOR QUE UTILIZOU O XIZINHO GANHOU<h1>"
             ganhou=true;
        }
        else {
            document.getElementById("ganhou").innerHTML = "<h1>O JOGADOR QUE UTILIZOU O BOLINHA GANHOU<h1>"
            ganhou=true;
        }

    }
    if ( contador == 9){
        
        document.getElementById("ganhou").innerHTML = "<h1>DEU VELHA!!!<h1>"
        ganhou=true;
    }
}