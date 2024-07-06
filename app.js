let numeroSecreto = generarNumeroSecreto();
let intentos=1;

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
    }
    else{

        if(numeroSecreto>numeroDeUsuario){
            asignarTextoElemento('p','el numero secreto es mayor');
        }
        else{
            asignarTextoElemento('p','el numero secreto es menor');
        }
        intentos++;

    
}

return;
    }

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1','Juego del numero secreto!');
asignarTextoElemento('p','Indica un numero del 1 al 10');
