let numeroSecreto = 0;
let intentos=0;
let listaDeNumerosSorteados=[];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
let elementohtml=document.querySelector(elemento)
elementohtml.innerHTML=texto;

}

function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);


    console.log(`intentos son ${intentos}`);

    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos==1)?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
   
    }
    else{
//el usuario no acepto
        if(numeroSecreto>numeroDeUsuario){
            asignarTextoElemento('p','el numero secreto es mayor');
        }
        else{
            asignarTextoElemento('p','el numero secreto es menor');
        }
        intentos++;
        limpiarCaja();

    
}

return;
    }

    function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';//# siginifica que se requiere por id
    //.value='' la vuelve vacio

    }

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados);
    
    if (listaDeNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los numeros');
    }
    else{
        if (listaDeNumerosSorteados.includes(numeroGenerado)){
    
            return generarNumeroSecreto();
        }
        else {
            listaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }
       

}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}
function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilita el boton reinicio
    document.querySelector('#reiniciar').setAttribute('disabled','true');
 
}


condicionesIniciales();