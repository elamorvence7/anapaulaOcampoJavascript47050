const carrito = [];

const algarrobo = {
  nombre: "Algarrobo blanco",
  precio: 2500,
  subtotal: 2500,
  cantidad: 20,
};
const algarroboNegro = {
  nombre: "Algarrobo negro",
  precio: 3000,
  subtotal: 3000,
  cantidad: 15,
};
const espinillo = {
  nombre: "Espinillo",
  precio: 1500,
  subtotal: 1500,
  cantidad: 40,
};
const garabatoHembra = {
  nombre: "Garabato hembra",
  precio: 4000,
  subtotal: 4000,
  cantidad: 10,
};

carrito.push(algarrobo);
carrito.push(algarroboNegro);
carrito.push(espinillo);
carrito.push(garabatoHembra);

function enCarrito(nombrePrompt) {
  return carrito.find((producto) => producto.nombre == nombrePrompt);
}
function buscar() {
  const keyword = prompt("¿Qué producto desea buscar?");
  const arrayResultados = carrito.filter((el) =>
    el.nombre.toLowerCase().includes(keyword.toLowerCase())
  );
  console.log(arrayResultados);
}
function agregar() {
  const nombrePrompt = prompt("Introduzca el nombre del producto:");
  const nuevoProducto = {
    nombre: nombrePrompt,
    precio: parseInt(precioPrompt),
    subtotal: parseInt(precioPrompt),
    cantidad: 1,
  };

  const productoEncontrado = enCarrito(nombrePrompt);
  if (productoEncontrado) {
    productoEncontrado.cantidad++;
    productoEncontrado.precio = parseInt(precioPrompt);
    productoEncontrado.subtotal = parseInt(precioPrompt) * productoEncontrado.cantidad;
  } else {
    carrito.push(nuevoProducto);
  }
  alert("El producto " + nombrePrompt + " fue agregado al carrito.");
  listar();
}

function listar() {
  console.clear();
  console.log("Productos que hay en el carrito:");

  carrito.forEach((elemento) => {
    console.log("----------");
    console.log("Nombre:", elemento.nombre);
    console.log("Precio:", elemento.precio);
    console.log("Cantidad:", elemento.cantidad);
    console.log("Subtotal:", elemento.subtotal);
  });

  const totalCarrito = carrito.reduce((acu, el) => acu + el.subtotal, 0);
  console.log("TOTAL DEL CARRITO: $", totalCarrito);
  const preciosActualizados = carrito.map((producto) => {
    return {
      nombre: producto.nombre,
      precio: producto.precio * 1.25,
      cantidad: producto.cantidad,
    };
  });
  console.log("Precios actualizados:", preciosActualizados);

function quitar() {
  const nombrePrompt = prompt("¿Qué producto querés quitar?");
  const productoEncontrado = enCarrito(nombrePrompt);
  if (productoEncontrado) {
    const indiceProducto = carrito.indexOf(productoEncontrado);
    carrito.splice(indiceProducto, 1);
    alert("El producto " + productoEncontrado.nombre + " fue borrado del carrito.");
    listar();
  } else {
    alert("No se encontró el producto " + nombrePrompt + " en el carrito.");
  }
}
