import { eliminarProducto } from './conexionAPI.js';

export function borrarCard(id){
    console.log(`Intentando eliminar producto con id: ${id}`);
    eliminarProducto(id)
    .then(data =>{
        if(data.sucess){
            const producto = document.querySelector(`.producto-boton [data-id="${id}"]`).closest(".card");
            if(producto){
                producto.remove();
            }
        } else {
            console.error('Error en la respuesta del API:', producto.message);
        }
    })
    .catch(error => {
        console.error('Error al eliminar el producto:', error);
    })
}