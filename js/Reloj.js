const hora = document.getElementById("hora");
const minutos =document.getElementById("minutos");
const segundo = document.getElementById("segundo");

 function actualizarReloj(){

    const fecha = new Date();
    hora.textContent = String(fecha.getHours()).padStart(2, "0")                ;
    minutos.textContent = String(fecha.getMinutes()).padStart(2, "0")  ;
    segundo.textContent = String(fecha.getSeconds()).padStart(2, "0")  ;

}

setInterval(actualizarReloj, 1000);
actualizarReloj();