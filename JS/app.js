class AlimentoEnlatado {
    constructor(id = [], nombre = [], precio = [], imagen = " ") {
        this.id = id;
        this.nombre = nombre;
        this.precio = Number(precio);
        this.imagen = imagen;
    }
}
class AlimentoFideos {
    constructor(id = [], nombre = [], precio = [], imagen = " ") {
        this.id = id;
        this.nombre = nombre;
        this.precio = Number(precio);
        this.imagen = imagen;
    }
}
class AlimentoHarinas {
    constructor(id = [], nombre = [], precio = [], imagen = " ") {
        this.id = id;
        this.nombre = nombre;
        this.precio = Number(precio);
        this.imagen = imagen;
    }
}

const lataAtun = new AlimentoEnlatado(1, "lata de atun", 2300, "./img/atun.png");
const lataArvejas = new AlimentoEnlatado(2, "lata de arvejas", 1350, "./img/arvejas.webp");
const lataDurazno = new AlimentoEnlatado(3, "lata de durazno", 1600, "./img/durazno.jpg");
const paqueteMostachol = new AlimentoFideos(4, "fideos mostachol", 1050, "./img/mostachol.jpg");
const paquetespaghetti = new AlimentoFideos(5, "fideos spaghetti", 1200, "./img/fideos.jpg");
const paqueteTirabuzon = new AlimentoFideos(6, "fideos tirabuzon", 1100, "./img/tirabuzon.webp");
const harinaRefinada = new AlimentoHarinas(7, "harina ultra refinada", 1050, "./img/refinada.jpg");
const harinaLeudante = new AlimentoHarinas(8, "harina leudante", 1600, "./img/harina-leudante.jpg");
const harinaCuatroCero = new AlimentoHarinas(9, "harina cuatro ceros", 1200, "./img/cuatrocero.jpg");

const productosTotales = [lataAtun, lataArvejas, lataDurazno, paqueteMostachol, paquetespaghetti, paqueteTirabuzon, harinaRefinada, harinaLeudante, harinaCuatroCero];


productosTotales.map((producto) => {
    const div = document.getElementById("productosCarrito");
    const divProductos = document.createElement("div")
    divProductos.innerHTML = `
    <div class="productos">
    <img class="productosCarrito" src="${producto.imagen}" alt="${producto.nombre}" title="${producto.precio}">
    <h5 class="productosCarrito"> ${producto.nombre}</h5>
    <p class="productosCarrito">${producto.precio}</p>
    <button id="botonClick" type="button" class="botonAgregarAlCarrito btn btn">Agregar al carrito</button>
    </div>
    `
    div.appendChild(divProductos);
});

    localStorage.setItem("productosCarrito", JSON.stringify (productosCarrito));
    productosCarrito = JSON.parse(localStorage.getItem("productosCarrito")) || [];
    if (productosCarrito.length > 0) {
        imprimirCarritoEnHTML(productosCarrito);
    }

    const botonAgregarAlCarrito = document.getElementById("botonClick");
    botonAgregarAlCarrito.addEventListener("click", () => {

});



