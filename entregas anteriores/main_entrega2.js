//Lista de productos y carrito

let continuar = "SI";

class Producto {
    constructor(codigo, nombre, marca, categoria, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.marca = marca;
        this.categoria = categoria;
        this.precio = precio;
    }
}

let listaProductos = [
    { codigo: "A", nombre: "8GB RAM", marca: "Team", categoria: "RAM", precio: 29000 },
    { codigo: "B", nombre: "16GB RAM", marca: "GeiL", categoria: "RAM", precio: 15000 },
    { codigo: "C", nombre: "3080 TI", marca: "GALAX", categoria: "GPU", precio: 270000 },
    { codigo: "D", nombre: "Intel I5 10400F", marca: "Intel", categoria: "CPU", precio: 37600 },
    { codigo: "E", nombre: "EVGA 600W", marca: "Asus", categoria: "FUENTE", precio: 56000 },
]

let total = 0;
let productoElegir;

function sumaProductos() {

    productoElegir = prompt("Escriba el producto que desea agregar: A = 8GB RAM, B = 16GB RAM, C = 3080 TI, D = Intel I5 10400F, E = EVGA 600W").toUpperCase();

    let producto = listaProductos.find(x => x.codigo === productoElegir);

    if (producto) {
        total += producto.precio;
    }

    console.log(total);

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

while (continuar != "NO") {


    sumaProductos();


    continuar = prompt("Desea agregar mas productos? si quiere ingrese si, de lo contarrio no: ").toUpperCase();

    if (continuar != "SI" && continuar != "NO") {
        while (continuar != "NO" && continuar != "SI") {
            alert("Esta ingresando un valor INCORRECTO porfavor escriba si quiere continuar o no: ")
            continuar = prompt("Desea agregar mas productos? si quiere ingrese si, de lo contarrio no: ").toUpperCase();
        }
    }
}

calcularCuotas();