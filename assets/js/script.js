function tocarSom(idTagSeletor){
    const elemento = document.querySelector(idTagSeletor);
    if(elemento && elemento.localName ==="audio"){
        elemento.play();
    }else{
        console.log("Elemento não encontrado!")
    }
}

const teclas = document.querySelectorAll(".tecla");
    
for (let i = 0; i<teclas.length; i++){

    let tecla = teclas[i].classList[1];
    let str = `#som_${tecla}`

    teclas[i].onclick = function(){
        tocarSom(str);
    };
    teclas[i].onkeydown = function(evento){
        if(evento.code === "Space"|| evento.code==="Enter"){
            teclas[i].classList.add("ativa");
        }
    };
    teclas[i].onkeyup = function () {
        teclas[i].classList.remove("ativa")
    }

}

// som_tecla_pom.addEventListener("click", function (){
//     tocarSom;
// });



