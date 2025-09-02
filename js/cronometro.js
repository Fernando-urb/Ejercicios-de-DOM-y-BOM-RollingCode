const cronometro = document.getElementById("cronometro");
const iniciarPausar = document.getElementById("boton-inio-pausa");
const reiniciar = document.getElementById("boton-reiniciar");

const tiempo = {
  horas: 0,
  minutos: 0,
  segundos: 0
};

let intervaloDeTiempo;
let estadoCronometro = "pausado";

function actualizarCronometro() {
  tiempo.segundos++;
  for (let i = 0; i < Object.keys(tiempo).length; i++) {
    const unidad = Object.keys(tiempo)[i];
    if (tiempo[unidad] >= 60) {
      tiempo[unidad] = 0;
      if (unidad === 'segundos') {
        tiempo.minutos++;
      } else if (unidad === 'minutos') {
        tiempo.horas++;
      }
    }
  }
  const segundosConFormato = asignarFormato(tiempo.segundos);
  const minutosConFormato = asignarFormato(tiempo.minutos);
  const horasConFormato = asignarFormato(tiempo.horas);

  cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
}
function asignarFormato(unidadTiempo) {
  return unidadTiempo < 10 ? "0" + unidadTiempo : unidadTiempo;
}

iniciarPausar.addEventListener("click", function () {
  if (estadoCronometro === "pausado") {
    intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
    estadoCronometro = 'iniciado'
  } else {
    window.clearInterval(intervaloDeTiempo);
    estadoCronometro = 'pausado'
  }
});

reiniciar.addEventListener("click", function () {
  tiempo.horas = 0;
  tiempo.minutos = 0;
  tiempo.segundos = 0;
  cronometro.innerText = "00:00:00";
  window.clearInterval(intervaloDeTiempo);
  estadoCronometro = "pausado";
});