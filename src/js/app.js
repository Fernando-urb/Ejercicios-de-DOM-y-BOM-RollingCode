


// Script para inicializar los componentes de Preline y el resto del código
document.addEventListener('DOMContentLoaded', function () {
    // Inicializar componentes de Preline
    if (window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
    }
 // ejercicio 1 Numeros Magicos

let numeroMagico;


// seleciones iniciales 
const btnComenzarJuego = document.getElementById("btnIniciarJuego");
const containNumMagic = document.getElementById("contenedorNumMagic");
const btnEnviarNumMagicos = document.getElementById("btnEnviarNumMagicos");
const inputUsuario = document.getElementById("userInput");
const btnCerrarNumMagicos = document.getElementById("cerrarNumMagicos");

// funcion iniciar juego 
function iniciarJuego() {
    numeroMagico = Math.floor(Math.random() * 100) + 1;
    console.log(numeroMagico);

    containNumMagic.classList.remove("hidden");
    Swal.fire({
        title: "¡Juego iniciado!",
        text: "Adivina el número entre 1 y 100!",
        icon: "Iniciar"
    });
    inputUsuario.value = '';
    inputUsuario.focus();
}
//  evento iniciar juego 
btnComenzarJuego.addEventListener("click", () => {
    iniciarJuego();
});
//  funcion comparar numeros 
function CompararNumeros() {
    const valorUsuario = parseInt(inputUsuario.value);

    if (isNaN(valorUsuario) || valorUsuario < 1 || valorUsuario > 100) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Por favor, ingresa un número válido entre 1 y 100"
        });
        inputUsuario.value = '';
        inputUsuario.focus();
        return;
    }

    if (valorUsuario === numeroMagico) {
        Swal.fire({
            title: "¡Felicitaciones!",
            text: `¡Adivinaste el número mágico: ${numeroMagico}!`,
            icon: "success"
        }).then(() => {
            reiniciarJuego();
        });
    } else if (valorUsuario < numeroMagico) {
        Swal.fire({
            icon: "info",
            title: "¡Más alto!",
            text: "El número es mayor. ¡Inténtalo de nuevo!"
        }).then(() => {
            inputUsuario.value = '';
            inputUsuario.focus();
        });
    } else {
        Swal.fire({
            icon: "info",
            title: "¡Más bajo!",
            text: "El número es menor. ¡Inténtalo de nuevo!"
        }).then(() => {
            inputUsuario.value = '';
            inputUsuario.focus();
        });
    }

}
// evento comprar numeros 
btnEnviarNumMagicos.addEventListener("click", () => {
    CompararNumeros();
});
// funcion reiniciar juego 
function reiniciarJuego() {
    numeroMagico;
    containNumMagic.classList.add("hidden");

    inputUsuario.value = '';
    inputUsuario.focus();

}

// enevento cerrar juego
btnCerrarNumMagicos.addEventListener("click", () => {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡si sales , el juego se reiniciara!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Cancelar',
        cancelButtonText: 'Sí, Salir'
    }).then((result) => {
        if (result.isConfirmed) {
            reiniciarJuego();
        }
    });
});

// Ejercicio 2 Generaciones




class Persona {
    constructor(nombre, age, DNI, genero, peso, altura, anioDeNacimiento, nacionalidad) {
        this._nombre = nombre;
        this._age = age;
        this._DNI = DNI;
        this._genero = genero;
        this._peso = peso;
        this._altura = altura;
        this._anioDeNacimiento = anioDeNacimiento;
        this._nacionalidad = nacionalidad;
    }



    mostrarGeneracion() {


        if (this._anioDeNacimiento >= 1994 && this._anioDeNacimiento <= 2010) {
            return `${this._nombre} pertenece a la generacion Z , Rasgo Caracteristico: 😋 irreverencia `;
            ;
        } else if (
            this._anioDeNacimiento >= 1981 &&
            this._anioDeNacimiento <= 1993
        ) {
            return `${this._nombre} pertenece a la generacion Y , Rasgo Caracteristico: 😖 frustracion `
                ;
        } else if (
            this._anioDeNacimiento >= 1969 &&
            this._anioDeNacimiento <= 1980
        ) {
            return `${this._nombre} pertenece a la generacion  X , Rasgo Caracteristico: 😎 obsesion por el exito `
                ;
        } else if (
            this._anioDeNacimiento >= 1949 &&
            this._anioDeNacimiento <= 1968
        ) {
            return ` ${this._nombre} pertenece a la generacion Baby Boom , Rasgo Caracteristico: 🤑 Ambicion `
                ;
        } else if (
            this._anioDeNacimiento >= 1930 &&
            this._anioDeNacimiento <= 1948
        ) {
            return `${this._nombre} pertenece a la generacion Silent Generation , Rasgo Caracteristico: 😐 Austeridad `
                ;
        } else {
            return `${this._nombre} no pertenece a ninguna generacion`
                ;
        }

        
    }
    esMayorDeEdad() {

        if (this._age >= 18) {
            return`${this._nombre} es mayor de edad`;
        } else {
            return`${this._nombre} es menor de edad`;
        }
       
    }
    mostrarDatos() {
        return `Nombre: ${this._nombre} -\n 
               Edad: ${this._age} años -\n 
               DNI: ${this._DNI} -\n 
               Género: ${this._genero} -\n 
               Peso: ${this._peso} Kg -\n 
               Altura: ${this._altura} cm -\n
               Año de nacimiento: ${this._anioDeNacimiento} -\n
               Nacionalidad: ${this._nacionalidad}`;
    }

}

let persona;

const nombre = document.getElementById("nombrePersona");
const edad = document.getElementById("edadPersona");
const dni = document.getElementById("dniPersona");
const genero = document.getElementById("generoPersona");
const peso = document.getElementById("pesoPersona");
const altura = document.getElementById("alturaPersona");
const anio = document.getElementById("anioPersona");
const nacionalidad = document.getElementById("nacionalidadPersona");
const btnCrearPersona = document.getElementById("btnCrearPersona");
const contenedorInput = document.getElementById("contenedorInput");
const contenedorBotones = document.getElementById("contenedorBotones");
const contCrearPersona = document.getElementById("contCrearPersona")
const btnGeneracion = document.getElementById("btnGeneracion");
const btnMayorEdad = document.getElementById("btnMayorEdad");
const btnDatos = document.getElementById("btnDatos");
const btnCerrarPersonas = document.getElementById("btnCerrarPersona");



// funcion crear pesona 
function crearPersona() {
    const nombrePersona =  nombre.value;
    if (nombrePersona.trim() === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campos Vacios',
            text: 'Por favor, ingrese su nombre '
        });
     
        return;
    }
    const edadPersona = parseInt(edad.value);
    if (isNaN(edadPersona) || edadPersona < 1 || edadPersona > 100) {
        Swal.fire({
            icon: "error",
            title: "Edad Invalida",
            text: "Por favor, ingresa una edad valida"
        });
       
        return;
    }
    const dniPersona = parseInt(dni.value);
    if (isNaN(dniPersona) || dniPersona < 1000000 || dniPersona > 70000000) {
        Swal.fire({
            icon: "error",
            title: "Dni invalido",
            text: "Por favor, ingresa un DNI  valido"
        });
       
        return;
    }
    const generoPersona = genero.value;
    if (generoPersona.trim() === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campos Vacios',
            text: 'Por favor, Selecione un Genero '
        });
      
        return;
    }
    const pesoPersona = parseFloat(peso.value);
    if (isNaN(pesoPersona) || pesoPersona < 1 || pesoPersona > 300) {
        Swal.fire({
            icon: "error",
            title: "Peso Invalido",
            text: "Por favor, ingresa un peso valido"
        });
      
        return;
    }
    const alturaPersona = parseFloat(altura.value);
    if (isNaN(alturaPersona) || alturaPersona < 1 || alturaPersona > 250) {
        Swal.fire({
            icon: "error",
            title: "Altura Invalida",
            text: "Por favor, ingresa una altura valida"
        });
        alturaPersona.value = '';
        alturaPersona.focus();
        return;
    }
    const anioPersona = parseInt(anio.value);
    if (isNaN(anioPersona) || anioPersona < 1930 || anioPersona > 2025) {
        Swal.fire({
            icon: "error",
            title: "Anio Invalido",
            text: "Por favor, ingresa un anio valido"
        });
      
        return;
    }
    const nacionalidadPersona = nacionalidad.value;
    if (nacionalidadPersona.trim() === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campos Vacios',
            text: 'Por favor, ingrese su nacionalidad '
        });
     
        return;
    }

    persona = new Persona(nombrePersona, edadPersona, dniPersona, generoPersona, pesoPersona, alturaPersona, anioPersona, nacionalidadPersona);

    contenedorBotones.classList.remove("hidden");
    contCrearPersona.classList.add("hidden");
    contenedorInput.classList.add("hidden")
    

    Swal.fire({
        title: "Felicitaciones!",
        text: "La persona se creo correctamente",
        icon: "success"
    });
    return;
  
}
// evento crear persona 
btnCrearPersona.addEventListener("click", () => {
    crearPersona();
});
// funcion mostrar generacion 
function mostrarGeneracion() {
    if (persona) {
        Swal.fire({
            title: "Generación",
            text: persona.mostrarGeneracion(),
            icon: "info"
        });
    } 
}
// evento mostrar generacion 
btnGeneracion.addEventListener("click", () => {
    mostrarGeneracion();
});
// funcion pra saber si es mayor 
function esMayor() {
    if (persona) {
        Swal.fire({
            title: "Mayoría de Edad",
            text: persona.esMayorDeEdad(),
            icon: "info"
        });
    } 
}
// evento para ver si es mayor 
btnMayorEdad.addEventListener("click", () => {
    esMayor();
});
// funcion para mostrar los datos 
function mostrarDatos() {
    if (persona) {
        Swal.fire({
            title: "Datos de la Persona",
            text: persona.mostrarDatos(),
            icon: "info"
        });
    } 
}
// evento mostrar datos 
btnDatos.addEventListener("click", () => {
    mostrarDatos();
});

// funcion de reiniciar juego 
function reiniciarJuegoGeneraciones() {
    persona ;
    contenedorBotones.classList.add("hidden");
    contCrearPersona.classList.remove("hidden");
    contenedorInput.classList.remove("hidden");
    nombre.value = "";
    edad.value = "";
    dni.value = "";
    genero.value = "";
    peso.value = "";
    altura.value = "";
    anio.value = "";
    nacionalidad.value = "";
}


// evento cerrar y reiniciar juego

btnCerrarPersonas.addEventListener("click", () => {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡Si sales, el juego se reiniciará!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si , Salir',
        cancelButtonText: 'Cancelarr'
    }).then((result) => {
        if (result.isConfirmed) {
           reiniciarJuegoGeneraciones();
        }
    });
});

// ejercicio 3  lista de tareas 

// seleciones iniciales 
const nuevaTarea = document.getElementById("nueva-tarea");
const lista = document.getElementById("listaTareas");
const formulario = document.getElementById("form-tareas");
const bntCerrarTareas = document.getElementById("btnCerarTareas");

let total = 0; //inicializamos en 0 lista

// manejo formulario
formulario.addEventListener("submit", (e) => {
    e.preventDefault();// no se envie por defecto el formulario


    if (nuevaTarea.value.trim() === "") {
       
         Swal.fire({
            icon: 'error',
            title: 'Campos Vacios',
            text: 'Por favor, completa el campo para agregar una tarea.'
        });
         return;
        
      
    }else{
           agregarTarea(nuevaTarea.value);
    nuevaTarea.value = "";

    Swal.fire({
        icon: 'success',
        title: '¡Tarea Agregada!',
        text: 'La tarea fue agregada correctamente a la lista.'
    });
    

    }

 
   

});

// funcion agregar tareas 

function agregarTarea(tarea) {

    // agregar item 
    const li = document.createElement("li");
    //agregar texto
    const span = document.createElement("span");
    span.textContent = `📚 ${tarea}      `;
    span.classList.add(
        'uppercase',
        'text-gray-800',
        'text-xl',
        'font-medium',
        'dark:text-gray-200',
        'flex-1',
        'text-left'

    )
    // boton eliminar Tarea
    const btnDel = document.createElement("button");
    btnDel.textContent = " 🗑 "
    btnDel.classList.add(
        "rounded-lg",
        "border",
        "border-transparent",
        "bg-yellow-600",
        "text-white",
        "hover:bg-yellow-700",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-yellow-500",
        "focus:ring-offset-2",
    )
    btnDel.addEventListener("click", () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡Esta tarea se eliminara por completo!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, borrar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                lista.removeChild(li);
                total--;
                actualizarContador();
                Swal.fire(
                    '¡Tarea Eliminada!',
                    'La tarea ha sido eliminado.',
                    'success'
                )
            }
        })
    })
    //
    li.appendChild(span);
    li.appendChild(btnDel);
    lista.appendChild(li);
    total++;

}


// funcion de reiniciar juego 
function reiniciarTareas() {
    lista.innerHTML = "";
    total = 0;
    actualizarContador();

    
}


// evento cerrar y reiniciar juego

bntCerrarTareas.addEventListener("click", () => {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡Si sales, el juego se reiniciará!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si , Salir',
        cancelButtonText: 'Cancelarr'
    }).then((result) => {
        if (result.isConfirmed) {
           reiniciarTareas();
        }
    });
});


// ejercicio 4 reloj 


const hora = document.getElementById("hora");
const fecha = document.getElementById("fecha");

// funcion para que funcione reloj 

function actualizarReloj() {
    const ahora = new Date();

    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const diaSemana = dias[ahora.getDay()];
    const diaMes = ahora.getDate();
    const mes = meses[ahora.getMonth()];
    const año = ahora.getFullYear();

    let horas = ahora.getHours();
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    const ampm = horas >= 12 ? "PM" : "AM";

    horas = horas % 12;
    horas = horas ? horas : 12;

    fecha.innerText = `${diaSemana}, ${diaMes} de ${mes} de ${año}`;
    hora.innerText = `${horas}:${minutos}:${segundos} ${ampm}`;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();


// ejercicio 5 cronometro
const cronometroIniciar = document.getElementById("cronometroStart");
const cronometroPausar = document.getElementById("cronometroPause");
const cronometroReiniciar = document.getElementById("cronometroReset");
const cronometroDisplay = document.getElementById("cronometroDisplay");
const bntCerarCronometro = document.getElementById("bntCerarCronometro");

let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo = null;
let corriendo = false;

function actualizarDisplayCronometro() {
    const formato = (num) => num.toString().padStart(2, '0');
    cronometroDisplay.textContent = `${formato(horas)}:${formato(minutos)}:${formato(segundos)}`;
}

function iniciarCronometro() {
    if (!corriendo) {
        corriendo = true;
        intervalo = setInterval(() => {
            segundos++;
            if (segundos === 60) {
                segundos = 0;
                minutos++;
            }
            if (minutos === 60) {
                minutos = 0;
                horas++;
            }
        actualizarDisplayCronometro();
        }, 1000);
    }
}

function pausarCronometro() {
    corriendo = false;
    clearInterval(intervalo);
}

function resetearCronometro() {
    corriendo = false;
    clearInterval(intervalo);
    segundos = 0;
    minutos = 0;
    horas = 0;
    actualizarDisplayCronometro();
}


if (cronometroIniciar) {
    cronometroIniciar.addEventListener("click", iniciarCronometro);
}

if (cronometroPausar) {
    cronometroPausar.addEventListener("click", pausarCronometro);
}

if (cronometroReiniciar) {
    cronometroReiniciar.addEventListener("click", resetearCronometro);

}

bntCerarCronometro.addEventListener("click", () => {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡Si sales, se reiniciara el Cronometro!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si , Salir',
        cancelButtonText: 'Cancelarr'
    }).then((result) => {
        if (result.isConfirmed) {
            resetearCronometro();
        }
    });
});

// ejercicio 6 temporizador 

const inicioTemporizador = document.getElementById("startBtn");
const  pausaTemporizador = document.getElementById("pauseBtn");
const resetTemp = document.getElementById("resetBtn") ;
const cerrarTemporizador = document.getElementById("cerrarTemporizador");


let tiempoRestante = 0;
    let intervaloTemporizador ;
    let corriendoTemporizador = false;

    function actualizarDisplay() {
      const minutos = Math.floor(tiempoRestante / 60);
      const segundos = tiempoRestante % 60;
      const formato = (num) => num.toString().padStart(2, '0');
      document.getElementById("display").innerText = `${formato(minutos)}:${formato(segundos)}`;
    }

    function iniciarTemporizador() {
      if (!corriendoTemporizador) {
        const input = parseInt(document.getElementById("inputTiempo").value);
        if (!tiempoRestante && !isNaN(input) && input > 0) {
          tiempoRestante = input;
        }
        if (tiempoRestante > 0) {
          corriendoTemporizador = true;
          intervaloTemporizador = setInterval(() => {
            tiempoRestante--;
            actualizarDisplay();
            if (tiempoRestante <= 0) {
              clearInterval(intervaloTemporizador);
              corriendoTemporizador = false;
              Swal.fire({
                title: "Tiempo Finalizado!",
                text: "¿ Te gustaria volver a utilizarlo ?",
                icon: "success"
              });
            }
          }, 1000);
        }
      }
    }

    if(inicioTemporizador){
        inicioTemporizador.addEventListener("click", iniciarTemporizador);
    
    }
    function pausarTemporizador() {
      corriendoTemporizador = false;
      clearInterval(intervaloTemporizador);
    }
    if(pausaTemporizador){
        pausaTemporizador .addEventListener("click", pausarTemporizador);
    
     }

    function resetearTemporizador() {
      corriendoTemporizador = false;
      clearInterval(intervaloTemporizador);
      tiempoRestante = 0;
      document.getElementById("inputTiempo").value = "";
      actualizarDisplay();
    }

    if(resetTemp )
        {
            resetTemp .addEventListener("click", resetearTemporizador);
        }   
 
    actualizarDisplay(); 
   


});

cerrarTemporizador.addEventListener("click", () => {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡Si sales, se reiniciara el Temporizador!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si , Salir',
        cancelButtonText: 'Cancelarr'
    }).then((result) => {
        if (result.isConfirmed) {
            resetearTemporizador();
        }
    });
});
