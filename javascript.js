var contador = 0

function jogada(indice) {
    console.log('chamou')
    
     let elemento = document.getElementsByClassName("bloco")[indice]
     console.log(elemento)
     contador++
     if (contador % 2 == 0) {
    elemento.innerHTML = '<img src="x.png">';
     }
    else {
         elemento.innerHTML = "<img src='o.png'>";
     }
}
