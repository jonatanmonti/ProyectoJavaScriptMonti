const formulario = document.querySelector("#formulario");
const botonCuotas = document.querySelectorAll("#button")

class Producto {
    constructor(codigo, nombre, marca, categoria, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.marca = marca;
        this.categoria = categoria;
        this.precio = precio;
    }
}

let divProducto = document.querySelector("#producto");
const listaProductos = JSON.parse(localStorage.getItem("producto")) || [];

const nuevoProducto = () => {
    let codigo = document.getElementById("codigo").value;
    let nombre = document.getElementById("nombre").value;
    let marca = document.getElementById("marca").value;
    let categoria = document.getElementById("categoria").value;
    let precio = document.getElementById("precio").value;

    let productoNuevo = new Producto(codigo, nombre, marca, categoria, precio);

    //let producto = listaProductos.find(x => x.codigo);

    total += JSON.parse(productoNuevo.precio);

    console.log(total);

    listaProductos.push(productoNuevo);
    localStorage.setItem("producto", JSON.stringify(listaProductos));

    return listaProductos;
}

formulario.onsubmit = (e) => {
    e.preventDefault();
    nuevoProducto();
    mostrarProducto();
}

botonCuotas.onsubmit = (e) =>{
    e.preventDefault();
    calcularCuotas();
}

function calcularCuotas() {

    let cuota, valorCuota;

    while (cuota != "TRES" && cuota != "SEIS" && cuota != "DOCE" && cuota != "UNA") {
        cuota = prompt("En cuantas cuotas le gustaria pagar? UNA, TRES, SEIS o DOCE: ").toUpperCase();
        if (cuota == "TRES") {
            valorCuota = total / 3;
        } else if (cuota == "SEIS") {
            valorCuota = total / 6;
        } else if (cuota == "DOCE") {
            valorCuota = total / 12;
        } else if (cuota == "UNA") {
            valorCuota = total;
        } else {
            alert("Esta ingresando un valor incorrecto porfavor seleccione una cuota valida");
        }
    }

    console.log(`El valor total con las cuotas seleccionadas es de: ${valorCuota}`);
    return valorCuota;
}

let total = 0;

const mostrarProducto = () => {
    const productoGuardado = JSON.parse(localStorage.getItem("producto"));

    productoGuardado.forEach(producto => {
            divProducto.innerHTML += `
                        <div class = 'producto'>
                        <h2>Codigo del producto: ${producto.codigo}</h2>
                        <h2>Nombre del producto: ${producto.nombre}</h2>
                        <h2>Marca del producto: ${producto.marca}</h2>
                        <h2>Categoria del producto: ${producto.categoria}</h2>
                        <h2>Precio del producto: ${producto.precio}</h2>
                        <h2>suma total: ${total}</h2>
                        </div>
                        `
    })
}