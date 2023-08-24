// Variable para el saldo inicial
let saldo = 1000;

// Función para realizar un retiro
function realizarRetiro(monto) {
  if (monto <= saldo && monto > 0) {
    saldo -= monto;
    return `Retiro exitoso. Saldo restante: ${saldo}`;
  } else {
    return "Monto no válido o saldo insuficiente.";
  }
}

// Función para realizar una consignación
function realizarConsignacion(monto) {
  if (monto > 0) {
    saldo += monto;
    return `Consignación exitosa. Saldo actual: ${saldo}`;
  } else {
    return "Monto de consignación no válido.";
  }
}

// Función para consultar el saldo
function consultarSaldo() {
  return `Saldo actual: ${saldo}`;
}

// Simulación de operaciones
console.log(realizarRetiro(500)); // Retiro exitoso. Saldo restante: 500
console.log(realizarConsignacion(300)); // Consignación exitosa. Saldo actual: 800
console.log(consultarSaldo()); // Saldo actual: 800
console.log(realizarRetiro(1000)); // Monto no válido o saldo insuficiente.



//-----------------------------//-------------------------------//


// Definición de productos y precios
const productos = [
  { nombre: "Galletas", precio: 1.5 },
  { nombre: "Gaseosa", precio: 2.0 }
];

// Variables de la máquina expendedora
let maquinaPrendida = true;
let cantidadIngresada = 0;

// Función para insertar dinero
function insertarDinero(monto) {
  if (!maquinaPrendida) {
    return "La máquina está apagada. Enciéndela para insertar dinero.";
  }
  cantidadIngresada += monto;
  return `Cantidad ingresada: ${cantidadIngresada.toFixed(2)}`;
}

// Función para realizar una compra
function comprarProducto(productoIndex) {
  if (!maquinaPrendida) {
    return "La máquina está apagada. Enciéndela para hacer una compra.";
  }

  const producto = productos[productoIndex];
  if (cantidadIngresada >= producto.precio) {
    cantidadIngresada -= producto.precio;
    return `Compra exitosa. Has adquirido ${producto.nombre}. Cantidad restante: ${cantidadIngresada.toFixed(2)}`;
  } else {
    return "Saldo insuficiente para comprar el producto.";
  }
}

// Función para devolver el dinero
function devolverDinero() {
  const dineroDevuelto = cantidadIngresada;
  cantidadIngresada = 0;
  return `Se ha devuelto $${dineroDevuelto.toFixed(2)}.`;
}

// Simulación de operaciones
console.log(insertarDinero(2.0)); // Cantidad ingresada: 2.00
console.log(comprarProducto(0)); // Saldo insuficiente para comprar el producto.
console.log(insertarDinero(3.0)); // Cantidad ingresada: 5.00
console.log(comprarProducto(0)); // Compra exitosa. Has adquirido Galletas. Cantidad restante: 3.50
console.log(comprarProducto(1)); // Compra exitosa. Has adquirido Gaseosa. Cantidad restante: 1.50
console.log(devolverDinero()); // Se ha devuelto $1.50.
