// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Juego de Numero Secreto"
// let parrafo = document.querySelector("p");
// seleccione el elemento p
// parrafo.innerHTML = "Indica un numero del 1 al 10";
// en el elemnto p ponga el siguiente mensaje


// existe una manera mas eficiente de declarar la funcion
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    // con lo antetior se fuerza que el valor ingresado sea de tipo numero
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario);
    //console.log(numeroDeUsuario === numeroSecreto);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }   else {
            //el usuario no acertó
            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento("p","El numero secreto es menor");
            }   else {
                    asignarTextoElemento("p","El número secreto es mayor");
            }
            intentos++;
            limpiarCaja();
    };
    // === igual en valor e igual en tipo
    //alert("Click desde el boton");
    return;
}
function limpiarCaja() {
    //let valorCaja = document.querySelector("#valorUsuario");
    document.querySelector("#valorUsuario").value = "";
    //valorCaja.value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // return numeroSecreto;
    // si el numero generado está incluido en la lista hacer una op u otra
    // include   revisa una lista y devuelve un boolean
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // se debe consultar si ya se sortearon todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
       asignarTextoElemento("p","Ya se sortearon todos los numeros posibles");
        
    }   else {


    }

    if (listaNumerosSorteados.includes(numeroGenerado)) {
        // concepto de recursividad funcion que se llama a si misma
            return generarNumeroSecreto();
    }   else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;

    }
}
function condicionesIniciales() {
    asignarTextoElemento("h1","Juego del Numero Secreto !");
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}
function reiniciarJuego() {
    // esta funcion necesita limpiar la caja, indicar mensaje de intervalo de numeros, generar el numero aleatorio, desahilitar el boton de nuevo juego, reiniciar intentos
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true");
    
}
condicionesIniciales();