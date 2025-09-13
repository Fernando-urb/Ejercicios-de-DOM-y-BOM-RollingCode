//  Script para inicializar los componentes de Preline 

document.addEventListener('DOMContentLoaded', function () {
    // Inicializar componentes de Preline
    if (window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
    }
});

// Numeros Magicos

let numeroMagico = null;


// seleciones iniciales 
const btnComenzarJuego = document.getElementById("startBtn");
const containNumerosMagicos = document.getElementById("containJuegos");
const btnEnviarNumMagicos = document.getElementById("submitBtn");
const valorUsuario = document.getElementById("userInput");

// iniciar juego 

btnComenzarJuego.addEventListener("click", () => {
    numeroMagico = Math.floor(Math.random() * 100) + 1;
    console.log(numeroMagico);

    containNumerosMagicos.classList.remove("hidden");
    Swal.fire({
        title: "¡Juego iniciado!",
        text: "Adivina el número entre 1 y 100!",
        icon: "Iniciar"
    });

});

//comprar numeros 
btnEnviarNumMagicos.addEventListener("click", () => {
    const valorUsuario = parseInt(document.getElementById("userInput").value);



    if (isNaN(valorUsuario)) {
        Swal.fire({
            icon: "error",
            title: "Por favor, ingresa un numero valido.",

        });

        return;
    }

    if (valorUsuario === numeroMagico) {


        Swal.fire({
            title: "Felicitaciones , adivinaste el numero magico",
            icon: "success"
        });

    } else if (valorUsuario < numeroMagico) {
        Swal.fire({
            icon: "error",
            title: "El numero es mayor. ¡Intentalo de nuevo!",

        });
    } else {
        Swal.fire({
            icon: "error",
            title: "El numero es menor. ¡Intentalo de nuevo!",

        });


    }
    inputUsuario.value = '';
    inputUsuario.focus();
});



// / lista de tareas 

// seleciones iniciales 
const nuevaTarea = document.getElementById("nueva-tarea");
const lista = document.getElementById("listaTareas");
let total = 0; //inicializamos en 0 lista

// manejo formulario
form.addEventListener("submit", (e) => {
    e.preventDefault();// no se envie por defecto el formulario


    if (nuevaTarea.value.trim() === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campos Vacios',
            text: 'Por favor, completa el campo para agregar una tarea.'
        });
        return;
    }

    agregarTarea(nuevaTarea.value);
    nuevaTarea.value = "";

    Swal.fire({
        icon: 'success',
        title: '¡Tarea Agregada!',
        text: 'La tarea fue agregada correctamente a la lista.'
    });

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


// reloj 


const hora = document.getElementById("hora");
const fecha = document.getElementById("fecha");

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
