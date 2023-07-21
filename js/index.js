/*
    X Repasar DOM y Eventos JS 
    X Agregar algunas otras funcionalidades de valor
    X Crear una aplicación que sea funcional (que tenga un cometido)
    X LocalStorage y JSON y sus métodos
*/

const tableProductos = document.querySelector('#tablaProductos')
const inputBuscar = document.querySelector('#inputSearch')
const divToast = document.querySelector('div.toast-msg')
const productosEnCarrito = document.querySelector('span#productosEnCarrito')


/* conteo de cantidad de productos */
function mostrarTotalProdsEnCarrito() {
    productosEnCarrito.textContent = actividades.length
}
actividades.length > 0 && mostrarTotalProdsEnCarrito()

/* funcion principal para crear filas con actividades */
function crearFilaHTML(producto) {
    return `<tr>
                    <td class="class-table-number">${producto.fecha}</td>
                    <td class="class-table-number">${producto.codigo}</td>
                    <td>${producto.nombre}</td>
                    <td>$ ${producto.precio}</td>
                    <td><button id="${producto.id}" class="button button-outline">Seleccionar</button></td>
                </tr>`
}

/* click en los botones funcionalidad */
function activarClickEnBotonesProductos() {
    const botones = document.querySelectorAll('button.button.button-outline')
    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            let producto = productosActividades.find((prod) => prod.id === parseInt(boton.id))
            actividades.push(producto)
            divToast.textContent = "Se anoto en la siguiente actividad: " + producto.nombre
            mostrarTotalProdsEnCarrito()
            guardarActEnLocalStorage()
        })
    })
}

function cargarProductos(array) {
    tableProductos.innerHTML = ""
    if (array.length > 0) {
        array.forEach((producto) => tableProductos.innerHTML += crearFilaHTML(producto))
        activarClickEnBotonesProductos()
    } else {
        divToast.textContent = "No hay productos para listar."
    }
}
/* funcion de valor Buscador */
inputBuscar.addEventListener("search", () => {
    localStorage.setItem("ultimaBusqueda", inputSearch.value)
    const arrayResultante = productosActividades.filter((producto) => producto.nombre.toLowerCase().includes(inputBuscar.value.trim().toLowerCase()))
    cargarProductos(arrayResultante)
})

cargarProductos(productosActividades)
