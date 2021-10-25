const listaEstudiantes = [
    {
        nombre: "Guillermo",
        edad: 23,
        estudio: "diseñador"
    },
    {
        nombre: "Alicia",
        edad: 25,
        estudio: "ingeniera quimica"},
    {
        nombre: "Josefina",
        edad: 27,
        estudio: "periodista"},
    {
        nombre: "Ivan",
        edad: 30,
        estudio: "diseñador"},
    {
        nombre: "Monica",
        edad: 35,
        estudio: "psicologa"}
]

function countEstudent(listaEstudiantes) {
    let suma = 0;
    for (let i = 0; i < listaEstudiantes.length; i++) {
        suma = listaEstudiantes.length
        
        
    }
    console.log(suma)
}
countEstudent(listaEstudiantes);

function averageAge(listaEstudiantes) {
    let edad = 0
    for (let i = 0; i < listaEstudiantes.length; i++) {
        edad += listaEstudiantes[i].edad
    }
    console.log(edad)
}
averageAge(listaEstudiantes)
