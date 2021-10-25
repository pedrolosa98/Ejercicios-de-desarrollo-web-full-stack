/*
    listado de tareas
        nombre tarea, descripcion, estado (si esta hecha o no)
*/
const div = document.querySelector(".lista")
const listaTareas = [
    {
        id: 0,
        nombreTarea: "limpieza",
        descripcion: "limpiar la casa",
        estado: false
    },
    {
        id: 1,
        nombreTarea: "deporte",
        descripcion: "ir al gimnasio",
        estado: false
    },
    {
        id: 2,
        nombreTarea: "cuidar a mi perro",
        descripcion: "cuidar al perro",
        estado: false
    }
]

for (const tareas of listaTareas) {
    div.innerHTML += `<input type='checkbox' class='tarea' id=' ${tareas.id}'><label>${tareas.nombreTarea}</label><br>`
}
const checkboxes = document.querySelectorAll(".tarea");

function handleCheckbox(ev) {
    // console.log(ev.target.checked);
    // console.log(ev.target.id);
    const id = ev.target.id;
    listaTareas[id].estado = ev.target.checked;
    console.log(listaTareas);
}

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", handleCheckbox)
    
}
