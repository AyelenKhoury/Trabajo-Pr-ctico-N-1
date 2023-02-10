// Crear variables con nombres de productos (por lo menos 5), variables con código de productos y variables con precio de los productos

// Producto = Camisa mangas largas
let camisa_mangas_largas = "camisa mangas largas";
let precio_camisa_mangas_largas = 1200;
let codigo_camisa_mangas_largas ="CML12";

// Producto = Chomba
let chomba_vincent = "chomba vincent";
let precio_chomba = 1000;
let codigo_chomba = "CH12";

// Producto = Zapatillas 
let zapatilla_azul = "zapatilla azul";
let precio_zapatilla_azul = 1300;
let codigo_zapatilla_azul = "ZPT12";

// Producto = Reloj
let reloj_casio = "reloj casio";
let precio_reloj_casio = 1500;
let codigo_reloj_casio = "CSO12";

// Producto = Bermuda
let bermuda_verde = "bermuda verde";
let precio_bermuda_verde = 1900;
let codigo_bermuda_verde = "BRMVR12"


// Cliente 1 = compra camisa mangas largas
let cliente_1 = "CML12";
let acumulador = 0;

if (codigo_camisa_mangas_largas === "CML12") {
    acumulador = acumulador + precio_camisa_mangas_largas;
    console.log("El total a abonar es $" + acumulador);
}


// Cliente 2 = Compra bermuda / codigo incorrecto 
let cliente_2 = "BRMVR12";
let acumulador_2 = 0;

if (cliente_2 === codigo_reloj_casio) {
    acumulador_2 += precio_reloj_casio;
    console.log("El total a abonar es $" + acumulador_2);
}
else {
    acumulador_2 += precio_bermuda_verde;
    console.log("El total a abonar es $" + acumulador_2);
}


// Cliente 3 = compra bermuda, reloj y chomba / todos los codigos correctos
let cliente_3_bermuda = "BRMVR12";
let cliente_3_reloj = "CSO12";
let cliente_3_chomba = "CH12";
let acumulador_3 = 0;

if ((cliente_3_bermuda === codigo_bermuda_verde) && (cliente_3_reloj === codigo_reloj_casio) && (cliente_3_chomba === codigo_chomba)) {
    acumulador_3 += precio_bermuda_verde;
    acumulador_3 += precio_reloj_casio;
    acumulador_3 += precio_chomba;
    console.log("El total a abonar es $" + acumulador_3);
}
else {
    console.log("Uno o más códigos es incorrecto");
}


/*
let cliente_3_bermuda = "BRMVR12";
let cliente_3_reloj = "CSO12";
let cliente_3_chomba = "CH12";
let acumulador_3 = 0;

if ((cliente_3_bermuda === 1) && (cliente_3_reloj === codigo_reloj_casio) && (cliente_3_chomba === codigo_chomba)) {
    acumulador_3 += precio_bermuda_verde;
    acumulador_3 += precio_reloj_casio;
    acumulador_3 += precio_chomba;
    console.log("El total a abonar es $" + acumulador_3);
}
else {
    console.log("Uno o más códigos es incorrecto");
}
    
    AL TENER UN CÓDIGO INCORRECTO SE EJECUTA EL SEGUNDO BLOQUE
*/     


