const confirmacion = confirm ("¿le gustaria recibir notificaciones?");
if (confirmacion == true){
    alert ("Recibiras nuestras ofertas diarias.");
} else {
    alert ("No recibiras ninguna notificacion.");
}

const productos =   [
{nombre: "Vino", precio: 55000},
{nombre:  "Fideos", precio: 1800},
{nombre:  "Gaseosa", precio: 3000},
{nombre: "Arroz", precio: 1500},
{nombre: "Papas Fritas", precio: 2500}
];


const cantidadProductos = [0,1,2,3,4];
for (let index = 0; index < cantidadProductos.length; index++){
console.log (cantidadProductos[index]);
}

function aplicarDescuento(precio) {
    if (precio > 2000) {
        return precio * 0.9;
    } else{
        return precio;
    }
}
console.log(aplicarDescuento(55000));
console.log(aplicarDescuento(1800));
console.log(aplicarDescuento(3000));
console.log(aplicarDescuento(1500));
console.log(aplicarDescuento(2500));
