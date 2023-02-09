//carrito de compras

//variable si desea continuar o no.
let continuar;
continuar = "si";


let productoElegir;
let total = 0;

function sumaProductos() {

    if (productoElegir == "A") {

        total = total + 100000;
        console.log(`El total es: ${total}`);
    }else if(productoElegir == "B"){
        total = total + 15000;
        console.log(`El total es: ${total}`);
    }else if(productoElegir == "C"){
        total = total + 20000;
        console.log(`El total es: ${total}`);
    }else if(productoElegir == "D"){
        total = total + 8000;
        console.log(`El total es: ${total}`);
    }else if(productoElegir == "E"){
        total = total + 10000;
        console.log(`El total es: ${total}`);
    }

    return total;

}

function calcularCuotas(){

    let cuota, valorCuota;
    cuota = prompt("En cuantas cuotas le gustaria pagar? una, tres, seis o doce: ")
    if(cuota == "tres"){
        valorCuota = total/3;
    }else if(cuota == "seis"){
        valorCuota = total/6;
    }else if(cuota == "doce"){
        valorCuota = total/12;
    }else if(cuota == "una"){
        valorCuota = total;
    }

    console.log(`El valor total con las cuotas seleccionadas es de: ${valorCuota}`);
    return valorCuota;
}

while (continuar != "no") {
    productoElegir = prompt("Ingrese el producto de la lista mostrada en la pagina, ejemplo: A ");

    sumaProductos();

    continuar = prompt("Desea agregar mas productos? si quiere ingrese si, de lo contarrio no: ");
}

calcularCuotas();