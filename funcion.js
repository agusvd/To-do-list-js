/* Primero selecionamos los datos que queremos manipular*/
const form = document.querySelector('#todo');
const input = document.querySelector('#escribir-lista');
const addButton = document.querySelector('#agregar-lista');
const list = document.querySelector('ul');



form.addEventListener('submit', (event) => {
    event.preventDefault();
    agregarTarea(input.value);
    input.value = '';
})

/* Este evento  detecta cuando se envia el submit del formulario,
ademas evita que se recargue la pagina y agrega una tarea con la funcion agregarTarea */

/* Ahora creamos la funcionar agregarTarea, va crear un elemento (li) con el texto de la tarea,
con dos botones, uno para marcar que esta lista la terea y otro para eliminar la tarea. */
function agregarTarea(texto) {
    const tarea = document.createElement("li");
    const tareaTexto = document.createTextNode(texto);
    tarea.appendChild(tareaTexto);
  
    const botonCompletado = document.createElement("button");
    const iconoCompletado = document.createElement("i");

    iconoCompletado.classList.add("fa-regular", "fa-square");
    botonCompletado.appendChild(iconoCompletado);
    botonCompletado.classList.add("boton-completado");

    botonCompletado.addEventListener("click", () => {
        tarea.classList.toggle("completado");
        if (tarea.classList.contains("completado")) {
            iconoCompletado.classList.remove("fa-regular", "fa-square");
            iconoCompletado.classList.add("fa-regular", "fa-square-check", "fa-bounce");
            tarea.style.textDecoration = "line-through #fff";
            tarea.style.color = "#FC2947";
    
            const botonEliminar = document.createElement("button");
            const iconoEliminar = document.createElement("i");

            iconoEliminar.classList.add("fas", "fa-trash-alt");
            botonEliminar.appendChild(iconoEliminar);
            botonEliminar.classList.add("boton-eliminar");

            botonEliminar.addEventListener("click", () => {
            tarea.remove();
            });
            tarea.appendChild(botonEliminar);
        } else {
            iconoCompletado.classList.remove("fa-regular", "fa-square-check", "fa-bounce");
            iconoCompletado.classList.add("fa-regular", "fa-square");
            tarea.style.textDecoration = "none";
            tarea.style.color = "#7882A4";

            const botonEliminar = tarea.querySelector(".boton-eliminar");
            if (botonEliminar) {
                botonEliminar.remove();
            }
        }
        });
        tarea.appendChild(botonCompletado);
    
        list.appendChild(tarea);
    }
  