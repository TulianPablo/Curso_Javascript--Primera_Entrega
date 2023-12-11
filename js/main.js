let excursiones=[
    {
        nombre:"Circuito chico",
        descripcion:"Es el recorrido más tradicional de Bariloche, un paseo atrapante en el que la ciudad, los bosques, los lagos y las montañas se integran en un solo paisaje",
        precio: 10000,
        destino:"Bariloche",
        dificultad:"Baja",
        traslado: true,
        duracion:"4hs",
        guia: true,
        cupo:30
    },
    {
        nombre:"Ruta de los 7 lagos",
        descripcion:"La Ruta de los 7 Lagos es un pintoresco recorrido que conecta las localidades de San Martín de los Andes y Villa La Angostura, en la provincia de Neuquén, Argentina",
        precio: 30000,
        destino:"Bariloche",
        dificultad:"Baja",
        traslado:true,
        duracion:"10hs",
        guia: false,
        cupo:25
    },
    {
        nombre:"Paseo en Barco a isla la Victoria y bosque de Arrayanes",
        descripcion:"El paseo en barco a la Isla Victoria y al Bosque de Arrayanes es una experiencia fascinante que te sumergirá en la belleza natural de la región de los lagos en Argentina, específicamente en el Parque Nacional Nahuel Huapi, ubicado en la provincia de Neuquén y Río Negro",
        precio:45000,
        destino:"Bariloche",
        dificultad:"Baja",
        traslado: false,
        duracion:"5hs",
        guia: true,
        cupo:40

    },
    {
        nombre:"Cataratas lado Argentino",
        descripcion:"",
        precio: 21000,
        destino:"Puerto Iguazu,Misiones",
        dificultad:"Media",
        traslado: true,
        duracion:"10hs",
        guia: false,
        cupo:30

    },
    {
        nombre:"Ruinas de San Ignacio",
        descripcion:"Explorarás ruinas del siglo XVII en el pueblo de San Ignacio y te sorprenderás al explorar cuevas llenas de piedras preciosas",
        precio:37000,
        destino:"Puerto Iguazu,Misiones",
        dificultad:"Baja",
        traslado: false,
        duracion:"12hs",
        guia: true,
        cupo:30

    },
    {
        nombre:"Excursion a Minas de Wanda",
        descripcion:"La excursión a las Minas de Wanda ofrece a los visitantes la oportunidad de explorar un fascinante sitio arqueológico y geológico en la provincia de Misiones, Argentina",
        precio:15000,
        destino:"Puerto Iguazu,Misiones",
        dificultad:"Media",
        traslado: false,
        duracion:"10hs",
        guia: true,
        cupo:15

    },
    {
        nombre:"Tour de Alta Montaña",
        descripcion:"El tour de alta montaña en Mendoza, Argentina, ofrece una experiencia espectacular que te lleva a través de los impresionantes paisajes de los Andes. ",
        precio:28000,
        destino:"Mendoza",
        dificultad:"Media",
        traslado: true,
        duracion:"10hs",
        guia: true,
        cupo:25

    },
    {
        nombre:"Visita a Bodegas",
        descripcion:"Mendoza es una de las capitales mundiales del vino, es por esto que los invitamos a conocer y experimentar como es el proceso de producción y elaboración de vinos reconocidos a nivel mundial. ",
        precio:39000,
        destino:"Mendoza",
        dificultad:"Baja",
        traslado: true,
        duracion:"5hs",
        guia: true,
        cupo:20

    },
    {
        nombre:"Excursion a Valle de Uco",
        descripcion:"Visitarás el Valle de Uco, famoso por los impresionantes paisajes del Cordón del Plata y sus premiadas bodegas. Recorra esta región, formada por colinas y volcanes de más de 6000 metros de altura.",
        precio:29000,
        destino:"Mendoza",
        dificultad:"",
        traslado: true,
        duracion:"10hs",
        guia: true,
        cupo:30

    },
    {
        nombre:"Cascadas de Copina",
        descripcion:"",
        precio:9000,
        destino:"Sierras de Cordoba",
        dificultad:"Baja",
        traslado: true,
        duracion:"10hs",
        guia: true,
        cupo:15

    },
    {
        nombre:"Cerro Champaqui",
        descripcion:"",
        precio:45000,
        destino:"Sierras de Cordoba",
        dificultad:"Alta",
        traslado: false,
        duracion:"3dias",
        guia: true,
        cupo:15

    },
    {
        nombre:"Los Gigantes, Cerro Mogote",
        descripcion:"",
        precio:12000,
        destino:"Sierras de Cordoba",
        dificultad:"Media",
        traslado: true,
        duracion:"12hs",
        guia: true,
        cupo:15

    },
    {
        nombre:"Maravillas del Rio Yuspe",
        descripcion:"",
        precio:9000,
        destino:"Sierras de Cordoba",
        dificultad:"Baja",
        traslado: false,
        duracion:"10hs",
        guia: true,
        cupo:10

    }
];

let carrito = [];
let destino;
let confirmacion;
let traslado=3000;

menuExcursiones();

function menuExcursiones(){

do {
    
    destino = prompt("Bienvenido al sistema de excursiones Recorriendo Argentina!!!\n Ingrese su lugar de destino: \n1- Bariloche \n2- Puerto Iguazú,Misiones \n3- Mendoza \n4- Sierras de Cordoba \n0-Para salir");
    switch (destino) {
        case "1":
            operacionesMenu("Bariloche");
            break;
    
        case "2":
           operacionesMenu("Puerto Iguazu,Misiones");
            break;    

        case "3":
            operacionesMenu("Mendoza");
            break; 

        case "4":   
            operacionesMenu("Sierras de Cordoba");  
            break;

        case "0":
                prompt("Muchas gracias por visitar nuestra pagina de excursiones. Lo esperamos pronto!!");
                break;
        default:
            alert("Ingresaste un valor no valido");
            break;
    }

    //Confirma la compra
    confirmacion= confirm("Desea comprar alguna otra excursion?\n (Seleccione 'Aceptar' para continuar la compra y 'Cancelar' para confirmar la compra)")
    if(confirmacion ==true)
        continue;
    else
        alert("Compra realizada exitosamente " + mostrarCarritoCompras());
        vaciarCarritoCompras();
       
}
while(destino !=0 && confirmacion==true);


}

function operacionesMenu(destino){

      //Selecciona una excursion de un catalogo de excursiones
      let excursionSeleccionada=excursionesPorDestino(destino);
      //Muestra el detalle de la excusion seleccionada
      alert("Detalle de la excursion " + excursionSeleccionada.nombre + "\n" + mostrarExcursion(excursionSeleccionada));
      //Agrega la excusion al carrito de compras
      confirmacion= confirm("¿Desea agregar excursion:" + excursionSeleccionada.nombre + " al carrito de compras?\n Seleccione Aceptar para agregar excursion al carrito y Cancelar para volver al catalogo de excursiones");
      agregarExcursionCarrito(excursionSeleccionada, confirmacion);
      
}

function excursionesPorDestino(destino)
{   
    let excDestino="Seleccione la excursion a realizar del destino " + destino + ":";
    for (let i = 0; i < excursiones.length; i++) 
    {
        if(excursiones[i].destino == destino)
            excDestino += "\n" + (i+1) + "-" +  excursiones[i].nombre;
        
    }
   let seleccion=prompt(excDestino);
   return excursiones[seleccion-1];
   
}

function mostrarExcursion(excursion)
{

    let detalleExcursion = "\nDestino: " + excursion.destino + 
    "\nExcursion: " + excursion.nombre + 
    "\nDescripcion: " + excursion.descripcion +
    "\nValor: $ " + excursion.precio + 
    "\nDificultad:" + excursion.dificultad + 
    "\nDuracion: " + excursion.duracion;
    
   /*  if(excursion.traslado==true){let traslado="Si";}
        else {traslado="No"};

    if(excursion.guia==true){let guia="Si"}
    else {guia="No"}; */


    //detalleDuracion+="\nIncluyeTraslado: " + traslado + "Costo: " + validarTraslado(excursion); 
    //detalleExcursion+="\nIncluyeGuia: " + guia + "Costo: $";

    return detalleExcursion;
    
};

/* validarTraslado(excursion){
    let costoTraslado='N/A';
    if(excursion.traslado==true)
        costoTraslado=traslado;
    else{
        return costoTraslado;
    }
        
return costoTraslado;

} */

function mostrarCarritoCompras(){

    let detalleCarrito="";
    for (let i= 0; i < carrito.length; i++) {
    
        detalleCarrito += "\n Excursion: " + carrito[i].nombre + "Valor: $" + carrito[i].precio;
       
    }
    detalleCarrito += "\n Costo Total Excursiones: $" + calcularTotal() + "\nCosto Total Traslado: $" + sumaTraslados() + "\n Costo Total Excusiones + Traslado: $ " + (calcularTotal() + sumaTraslados());

    return detalleCarrito;

};

function agregarExcursionCarrito(excursion, confirmacion)
{
    //confirmacion= confirm("¿Desea agregar excursion:" + excursion.nombre + " al carrito de compras?\n(Seleccione 'Aceptar' para agregarlo al carrito y 'Cancelar' para volver al catalogo de excursiones)");
    //let completo;
    if(confirmacion==true){
        if(mostrarCupo(excursion) >=1){

            carrito.push(excursion);
            actualizarCupo(excursion);
            alert("Se agrego al carrito la excusión:  " + excursion.nombre);
            alert("Detalle de la Compra: " + mostrarCarritoCompras());
            //completo=false;

        }else
            //completo= true;
            alert("Lo sentimos, el cupo esta completo para la excursion seleccionada");
            
    }     
    else
        menuExcursiones();
    //return completo;
}

function calcularTotal(){
    let sumaTotal=0;

    for (const excursion of carrito) 
    {
        sumaTotal += excursion.precio;
        
    }
    return parseInt(sumaTotal);
}

function mostrarCupo(excursion){
    return excursion.cupo;
            
}

function actualizarCupo(excursion)
{
   excursion.cupo= (mostrarCupo(excursion) -1);
   console.log("Cupo de la excursion " + excursion.nombre + " actualizado. Quedan " + mostrarCupo(excursion) + " lugares disponibles.");

}

function vaciarCarritoCompras(){
    carrito=[];
}

function sumaTraslados(){
    let sumaTraslados=0;
    for(const excursion of carrito){
        if(excursion.traslado==true){
            sumaTraslados+=traslado;
   
        }
    }
    return parseInt(sumaTraslados);
};
 


/* function confirmarCompra(){
    let confirmacion= confirm("Presione 'Aceptar' para confirmar la compra y 'Cancelar' para cancelar la compra" );
    if (confirmacion==true){
        alert("Compra realizada exitosamente!!");
        alert("Detall de la compra realizada: \n" + mostrarCarritoCompras());
    }   
    else
        alert("Compra de excursiones cancelada");

    carrito=[];
    console.log(mostrarCarritoCompras());
} */






