let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeoMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =  texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSeceto() {
    let numeroGenerado = Math.floor(Math.random()*numeoMaximo)+1
    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados);
    //Si el numero generado esta en la lista
    if(listaDeNumerosSorteados.length == numeoMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else{
        if(listaDeNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSeceto();
        } else {
            listaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeoMaximo}`);
    numeroSecreto = generarNumeroSeceto();
    intentos = 1;
}

function reiniciarJuego(){
limpiarCaja();
condicionesIniciales();
document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();