const productos = [
    { id: 1, nombre: "Fernet", imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_625593-MLA74134567488_012024-F.webp", descripcion: "Es una bebida elaborada con varias decenas de botánicos tales como hierbas, cortezas, raíces, frutas y flores provenientes de 4 continentes", precio: "9500", categoria: "alcohol" },
    { id: 2, nombre: "Absolut", imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_653243-MLA74218928615_012024-F.webp", descripcion: " Es una bebida con cuerpo y complejo, pero suave y maduro con el carácter distintivo del grano de trigo, seguido de un toque a frutas secas.", precio: "17500", categoria: "alcohol" },
    { id: 3, nombre: "Gin", imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_691277-MLA74139426669_012024-F.webp", descripcion: "Su esencia es extraída a partir de 7 botánicos: Bayas de Enebro, Semillas de Coriandro, Raíz de Angelica, Raíz de Regaliz, Almendra, Cassia, Cáscara de Limon", precio: "10000", categoria: "alcohol" },
    { id: 4, nombre: "Campari", imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_987838-MLA53300291199_012023-F.webp", descripcion: "bebida alcohólica de grado medio, tonificante y refrescante, calificable como aperitivo, de característico color rojo y sabor amargo", precio: "70000", categoria: "alcohol" },
    { id: 5, nombre: "Ron", imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_657424-MLA74218925321_012024-F.webp", descripcion: "Ron triple añejo de barril, fruto de un proceso único de elaboración. Se reconoce por su brillante color ámbar y sus tenues toques de vainilla y tabaco.", precio: "12000", categoria: "alcohol" },
    { id: 6, nombre: "Whisky", imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_811495-MLA74113010398_012024-F.webp", descripcion: "Aroma fresco y vibrante con notas de clavo y caramelo.Explosiones de manzana fresca con toques de canela y pimienta.Suaves notas ahumadas y afrutadas.", precio: "25000", categoria: "alcohol" },
    { id: 7, nombre: "Coca cola", imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_663842-MLA53151984915_012023-F.webp", descripcion: "bebida sin alcohol azucarada gaseosa ", precio: "2400", categoria: "no alcohol" },
    { id: 8, nombre: "Jugo cepita", imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_841533-MLA52981759494_122022-F.webp", descripcion: "Bebida sin alcohol a base de jugo exprimido de naranja", precio: "1600", categoria: "no alcohol" },
    { id: 9, nombre: "Sprite", imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_754202-MLA53024251477_122022-F.webp", descripcion: "Bebida sin alcohol hecho a base de agua carbonatada con sabor a lima o limón, incolora y sin cafeína", precio: "2400", categoria: "no alcohol" },
    { id: 10, nombre: "Speed", imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_994699-MLA52877016055_122022-F.webp", descripcion: "Bebidda sin alcohol energizante", precio: "1300", categoria: "no alcohol" },

]


const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}


const obtenerProductosLS = () => {
    return JSON.parse (localStorage.getItem("productos")) || [];
}


const guardarCarritoLS = (productos) => {
    localStorage.setItem ("carrito" , JSON.stringify(productos));
} 


const obtenerCarritoLS = () => {
    return JSON.parse (localStorage.getItem("carrito")) || [];
}


const obtenerIdProductoLS = () => {
    return JSON.parse(localStorage.getItem("producto")) || 0;
}

//Parte 2
const obtenerIdCategoriaLS = () => {
    return JSON.parse(localStorage.getItem("categoria")) || "todos";
}



const cantTotalProductos = () => {
    const carrito = obtenerCarritoLS ();

    return carrito.lenght;
}

const renderTotalCarrito = () => {
    document.getElementById ("totalCarrito").innerHTML = cantTotalProductos () ;
}


const verProducto = (id) => {
    localStorage.setItem("producto",JSON.stringify(id));
}


const verProductosPorCategoria = (id) => {
    localStorage.setItem("categoria",JSON.stringify(id));

}


//parte 2
const buscarProducto = () => {
  const productos = obtenerProductosLS ();
  const id = obtenerIdProductoLS ();
  const producto = productos.find (item => item.id === id);

  return producto;
}


//Parte 2
const agregarProductoCarrito = () => {
   const producto = buscarProducto ();
   const carrito = obtenerCarritoLS ();
   carrito.push (producto);
   guardarCarritoLS (carrito);
   renderBotonCarrito ();

}


//Parte 2
const renderBotonCarrito = () => {
    document.getElementById("totalCarrito").innerHTML = cantTotalProductos ();

}


guardarProductosLS (productos);