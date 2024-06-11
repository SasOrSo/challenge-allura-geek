async function listarProductos() {
    const conexion = await fetch("http://localhost:3000/productos");
    const conexionConvertida = conexion.json();
    console.log(conexionConvertida);
    return conexionConvertida;
}

async function enviarProducto(imagen,titulo,precio){
    const conexion = await fetch("http://localhost:3000/productos",{
        method: "POST", 
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            imagen:imagen,
            titulo:titulo,
            precio:precio
        })
    });
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

export async function eliminarProducto(id){
    if (!id) throw new Error('ID de producto no proporcionado');
    const conexion = await fetch(`http://localhost:3000/productos/${id}`,{
        method: 'DELETE',
        headers:{"Content-type":"application/json"},
    });
    if (!conexion.ok){
        throw new Error(`Error al eliminar el producto: ${conexion.statusText}`);
    }
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

export const conexionAPI={
    listarProductos,enviarProducto,eliminarProducto
}
