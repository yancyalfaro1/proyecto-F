const position = document.getElementsByClassName("position")
const etiqueta = document.getElementById("etiqueta")

let marcador = (localStorage.getItem("marcador"))|| [];


for (let index = 0; index < position.length; index++) {

  position[index].addEventListener("click", function () {
   

    if  (position[index].textContent === ""){
       position[index].textContent = "x"
       let listaVacios=[]


  
     for (let index = 0; index < position.length; index++) {

       if (position[index].textContent === ""){
           listaVacios.push(position[index]);

        }
      }
    
     if (listaVacios.length > 0) {
       let valorAleatorio = Math.floor(Math.random()*listaVacios.length)
       listaVacios[valorAleatorio].textContent = "o"  
     }
    }
    
    

    //Si "0" la selda que es guardada por "position" y que llamamos a .textContent porque nos dice que "x u o"//
    //es lo que hay dentro de la selda  es === a "x" y a su vez "1" y "2" son verdaderos entonces ganas//
    if (position[0].textContent === "x" && position[1].textContent === "x" && position[2].textContent === "x") {
      etiqueta.textContent = "¡HAS GANADO!";
      marcador ++
    }
    if (position[3].textContent === "x" && position[4].textContent === "x" && position[5].textContent === "x") {
       etiqueta.textContent = "¡HAS GANADO!";
       marcador ++
    }
    if (position[6].textContent === "x" && position[7].textContent === "x" && position[8].textContent === "x") {
       etiqueta.textContent = "¡HAS GANADO!";
       marcador ++
    }
    if (position[0].textContent === "x" && position[3].textContent === "x" && position[6].textContent === "x") {
       etiqueta.textContent = "¡HAS GANADO!";
       marcador ++
    }
    if (position[1].textContent === "x" && position[4].textContent === "x" && position[7].textContent === "x") {
       etiqueta.textContent = "¡HAS GANADO!";
       marcador ++
    }
    if (position[2].textContent === "x" && position[5].textContent === "x" && position[8].textContent === "x") {
       etiqueta.textContent = "¡HAS GANADO!";
       marcador ++
    }
    if (position[0].textContent === "x" && position[4].textContent === "x" && position[8].textContent === "x") {
       etiqueta.textContent = "¡HAS GANADO!";
       marcador ++

    }
    if (position[2].textContent === "x" && position[4].textContent === "x" && position[6].textContent === "x") {
       etiqueta.textContent = "¡HAS GANADO!";
       marcador ++
    }

    if (position[0].textContent === "o" && position[1].textContent === "o" && position[2].textContent === "o") {
       etiqueta.textContent = "¡HAS PERDIDO!";
       marcador ++
    }
    if (position[3].textContent === "o" && position[4].textContent === "o" && position[5].textContent === "o") {
       etiqueta.textContent = "¡HAS PERDIDO!";
       marcador ++
    }
    if (position[6].textContent === "o" && position[7].textContent === "o" && position[8].textContent === "o") {
       etiqueta.textContent = "¡HAS PERDIDO!";
       marcador ++
    }
    if (position[0].textContent === "o" && position[3].textContent === "o" && position[6].textContent === "o") {
       etiqueta.textContent = "¡HAS PERDIDO!";
       marcador ++
    }
    if (position[1].textContent === "o" && position[4].textContent === "o" && position[7].textContent === "o") {
       etiqueta.textContent = "¡HAS PERDIDO!";
       marcador ++
    }
    if (position[2].textContent === "o" && position[5].textContent === "o" && position[8].textContent === "o") {
       etiqueta.textContent = "¡HAS PERDIDO!";
       marcador ++
    }
    if (position[0].textContent === "o" && position[4].textContent === "o" && position[8].textContent === "o") {
       etiqueta.textContent = "¡HAS PERDIDO!";
       marcador ++
    }
    if (position[2].textContent === "o" && position[4].textContent === "o" && position[6].textContent === "o") {
       etiqueta.textContent = "¡HAS PERDIDO!";
       marcador ++
    }
    
    
  




  })
}




