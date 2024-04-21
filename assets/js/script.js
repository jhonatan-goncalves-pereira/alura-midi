function tocarSom(idTagSeletor){
    document.querySelector(idTagSeletor).play();
}

const teclas = document.querySelectorAll(".tecla");
    
for (let i = 0; i<teclas.length; i++){

    let tecla = teclas[i].classList[1];
    let str = `#som_${tecla}`

    teclas[i].onclick = function(){
        tocarSom(str)
    };

}

// som_tecla_pom.addEventListener("click", function (){
//     tocarSom;
// });



