const tableBody = document.querySelector('tbody');
const sectionProductos = document.querySelector('section');

/*muestra de actividades que vienen del LocalStorage y JSON */
function listarProductosEnCarritoHTML(actividad) {
    return `<tr>
                <td>${actividad.fecha}</td>
                <td>${actividad.nombre}</td>
                <td>$ ${actividad.precio.toLocaleString()}</td>
                <td><button class="button button-outline btn-quitar" data-id="${actividad.id}">Quitar</button></td>
            </tr>`;
}

function mostrarMsgCarritoVacio() {
    return `<div class="card-error">
                <h3>El carrito de Actividades está vacío</h3>
                <h4>🛒</h4>
            </div>`;
}

function armarCarrito() {
    tableBody.innerHTML = ''
    actividades.length > 0 ? actividades.forEach((actividad) => tableBody.innerHTML += listarProductosEnCarritoHTML(actividad))
        : sectionProductos.innerHTML = mostrarMsgCarritoVacio()
}
armarCarrito()
