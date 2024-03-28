function renderProducto () {
      
    const producto = buscarProducto ();
    
    let contenido =`<div class='row'>
        <div class="col-md-6 offset-md-3 text-center">
        <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid" />
        </div>
        </div>
        <div class='row'>
        <div class="col-md-8 offset-md-2 text-center">
        <h1 class="colorFuente"> ${producto.nombre}</h1>
        <p class="colorFuente"> ${producto.descripcion}</p>
        <p class="colorFuente"> $${producto.precio}</p>
        <p><button class="btn colorFondoDos" onclick="agregarProductoCarrito()">(+) Agregar</button></p>
        </div>`;

    document.getElementById("producto").innerHTML = contenido ;

}


renderProducto ();
renderBotonCarrito ();