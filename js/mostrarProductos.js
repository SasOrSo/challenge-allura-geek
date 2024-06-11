import { conexionAPI } from "./conexionAPI.js";
import { borrarCard } from "./borrarProducto.js";

const lista = document.querySelector("[data-lista]");

function crearCard(imagen,titulo,precio,id){
    const producto = document.createElement("div");
    producto.className = "card";
    producto.innerHTML = 
    `<img id="imagen-card" src="${imagen}" alt="${titulo}">
    <div class="producto-info">
        <h4 class="producto-titulo">${titulo}</h4>
        <p class="producto-precio"> $ ${precio}</p>
        <button class="producto-boton" data-id="${id}"><i class="gg-trash"></i></button>
    </div>`;

    //Agregar metodo listener para el boton de borrado  
    producto.querySelector(".producto-boton").addEventListener("click", () => {
        console.log(`Click en eliminar producto con id: ${id}`); 
        borrarCard(id);
    });

    return producto;
}

async function listarProductos(){
    const listaAPI = await conexionAPI.listarProductos();
    
    listaAPI.forEach(producto =>lista.appendChild(crearCard(producto.imagen,producto.titulo,producto.precio,producto.id)));
}

listarProductos();