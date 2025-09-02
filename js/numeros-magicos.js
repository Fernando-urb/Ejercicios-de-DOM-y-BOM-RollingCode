const comenzarJuego = document.getElementById("comenzar-juego");
const juego = document.getElementById("juego");
const numeroIngresado = document.getElementById("numero-ingresado");
const enviar = document.getElementById("enviar");
const resultado = document.getElementById("resultado");


comenzarJuego.addEventListener("click",  (e) => {

    juego.style.display = "block";
    comenzarJuego.style.display = "none";
});

enviar.addEventListener("click", (e) => {
    const numero = parseInt(numeroIngresado.value);
    let mensaje = "";

    if(){

    }
    else{
        
    }

    resultado.textContent = mensaje;
});