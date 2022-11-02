let altura = 0
let largura = 0
let vidas = 1
let tempo = 10

let cronometrotempo = 1500

let nivel = window.location.search
nivel = nivel.replace("?","")

if (nivel === "normal") {

    cronometrotempo = 1500

} else if ( nivel === "dificil") {

    cronometrotempo = 1000

} else if ( nivel === "hard") {

    cronometrotempo = 750
}

let cronometro = setInterval( function (){

    tempo -= 1

    if ( tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)

        window.location.href = "vitoria.html"

    } else {document.getElementById("cronometro").innerHTML = tempo
    }
},1000)

let dimensao = document.getElementById("bod")

dimensao.onresize = TamanhoVariavel

function TamanhoVariavel(){
    largura = window.innerWidth
    altura = window.innerHeight
    
    console.log(largura, altura)
}

TamanhoVariavel()

function PosicaoAleatoria () {

let busca = document.getElementById("mosca")

if (busca) {
    busca.remove()

   if (vidas > 3) {
    window.location.href ="Gameover.html"
   } else {
    document.getElementById("c" + vidas).src="coracao_vazio.png"
    
    vidas ++
   }

}

let positionx = Math.floor(Math.random() * largura) - 90
let positiony = Math.floor(Math.random() * altura) -90

positionx = positionx < 0 ? 0 : positionx
positiony = positiony < 0 ? 0 : positiony

console.log(positionx, positiony)

let mosquito = document.createElement("img")
mosquito.src="mosca.png"
mosquito.className = TamanhoQualer() + " " + ladoQualer()
mosquito.style.left = positionx + "px"
mosquito.style.top = positiony + "px"
mosquito.style.position = "absolute"
mosquito.id = "mosca"
mosquito.onclick =function () {
    this.remove()
}

document.body.appendChild(mosquito)

}

function TamanhoQualer () {
    let cla = Math.floor(Math.random() * 3)
    
    switch (cla) {
        case 0:
            return "mosca0"
        case 1:
            return "mosca1"
        case 2:
            return "mosca2"
    }
}

function ladoQualer () {
    let cla = Math.floor(Math.random() * 2)
    
    switch (cla) {
        case 0:
            return "ladoa"
        case 1:
            return "ladob"
    }
}

document.getElementById("cronometro").innerHTML = tempo

let criaMosca = setInterval( function (){
    PosicaoAleatoria()
}, cronometrotempo)






