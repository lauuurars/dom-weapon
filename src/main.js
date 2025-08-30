import mostrarArmas from "./mostrarArmas"

fetch('weapons.json')
    .then(respuesta => {
        return respuesta.json()
    }).then(data => {
        mostrarArmas(data)
    })