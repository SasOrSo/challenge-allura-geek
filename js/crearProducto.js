import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento){

    evento.preventDefault();
    
    const titulo= document.querySelector("[data-titulo]").value;
    const precio= document.querySelector("[data-precio]").value;
    const imagen= document.querySelector("[data-imagen]").value;

    try {
        const nuevoProducto = await conexionAPI.enviarProducto(imagen,titulo,precio);
        alert("Producto agregado con exito!");
    } catch (error){
        console.error("Error al agregar el producto:", error);
        alert("Error al agregar el producto");
    }
}

formulario.addEventListener("submit",evento => crearProducto(evento));