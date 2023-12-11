//Declaracion array de excursiones
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
        descripcion:"El paseo en barco a la Isla Victoria y al Bosque de Arrayanes es una experiencia fascinante que te sumergirá en la belleza natural de la región de los lagos en Argentina, específicamente en el Parque Nacional Nahuel Huapi.",
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
        descripcion:"Visitarás el lado argentino de las Cataratas del Iguazú y sentirás de cerca la intensidad de la naturaleza.",
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
        descripcion:"El Cerro Champaquí, ubicado en la provincia de Córdoba, es el pico más alto de las Sierras y ofrece una emocionante experiencia de trekking para los amantes de la naturaleza y los aficionados a las caminatas.",
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
        descripcion:"Con una altura de 2370 metros sobre el nivel del mar, el Cerro Mogote es considerado el más alto del macizo Los Gigantes. Una maravilla natural ubicada al extremo norte de Sierras Grandes, todo un paraíso para los amantes del trekking.",
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
        descripcion:"Aguas bajo de los Gigantes, el hermoso Río Yuspe toma cuerpo y atraviesa la montaña durante varios kilometros, formando recovecos, playitas de arena, cajones y ollas sumamente bellas, exclusivas y poco conocidas!",
        precio:9000,
        destino:"Sierras de Cordoba",
        dificultad:"Baja",
        traslado: false,
        duracion:"10hs",
        guia: true,
        cupo:10

    }
];

//Declaracion de variables
let carrito = [];
let destino;
let confirmacion;
let precioTraslado=3000;
let estadoCompra;

//Funcion que muestra un menu con los destinos de excursiones disponibles 
menuExcursiones();

function menuExcursiones(){

do {
    
    destino = prompt("Bienvenido al sistema de excursiones Recorriendo Argentina!!!\n Ingrese su lugar de destino: \n1- Bariloche \n2- Puerto Iguazú,Misiones \n3- Mendoza \n4- Sierras de Cordoba \n0-Para salir");
    estadoCompra=false;

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
                alert("Muchas gracias por visitar nuestra pagina de excursiones. Lo esperamos pronto!!");
                break;
        default:
            alert("Ingresaste un valor no valido");
            break;
    }
           
}
while(destino !=0);


}
//Funcion que realiza las distintas operaciones del carrito de compras de excursiones. Desde la seleccion de una excursion hasta la confirmacion de la compra.
function operacionesMenu(destino){

      //Selecciona una excursion de un catalogo de excursiones
      let excursionSeleccionada=excursionesPorDestino(destino);
      //Muestra el detalle de la excusion seleccionada
      alert("Detalle de la excursion " + excursionSeleccionada.nombre + "\n" + mostrarExcursion(excursionSeleccionada));
      //Agrega la excusion al carrito de compras
      confirmacion= confirm("¿Desea agregar excursion:" + excursionSeleccionada.nombre + " al carrito de compras?\n Seleccione Aceptar para agregar excursion al carrito y Cancelar para volver al catalogo de excursiones");
      agregarExcursionCarrito(excursionSeleccionada, confirmacion);
      confirmarCompra();
      
}
//Funcion que retorna las excursiones disponibles de un destino como parametro
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

//Funcion que retorna el detalle de una excursion que recibe como parametro
function mostrarExcursion(excursion)
{
        
    let detalleExcursion = "\nDestino: " + excursion.destino +
    "\nExcursion: " + excursion.nombre + 
    "\nDescripcion: " + excursion.descripcion +
    "\nValor: $ " + excursion.precio + 
    "\nDificultad:" + excursion.dificultad + 
    "\nDuracion: " + excursion.duracion +
    "\nIncluyeTraslado: " + validarTraslado(excursion) + 
    "\nIncluyeGuia: " + validarGuia(excursion);


    return detalleExcursion;
   };

//Funcion que valida si una excursion tiene costo de traslado
function validarTraslado(excursion)
{
  let poseeTraslado="";
   
    if(excursion.traslado==true){
        poseeTraslado="Si, Costo $" + precioTraslado;
    }else {
        poseeTraslado="No posee traslado"};
        
return poseeTraslado;

}

//Funcion que valida si una excursion posee un guia
function validarGuia(excursion){
    let poseeGuia="";
        if(excursion.guia==true){
            poseeGuia="Si";
        }else {
            poseeGuia="No"};
    return poseeGuia;
}

//Funcion que retorna el detalle del carrito de compra
function mostrarCarritoCompras(){

    let detalleCarrito="";
    for (let i= 0; i < carrito.length; i++) {
    
        detalleCarrito += "\nExcursion: " + carrito[i].nombre + " Valor: $ " + carrito[i].precio + " Traslado:" + validarTraslado(carrito[i]);
       
    }

    detalleCarrito += "\n\nCosto total excursiones: $" + calcularTotal() + "\nCosto total traslado: $" + sumaTraslados() + "\nCosto total con traslado: $ " + (calcularTotal() + sumaTraslados());

    return detalleCarrito;

};

//Funcion que recibe como parametro una excursion y la confirmación para agregar la excursion al carrito de compras, 
//actualiza el cupo de la excursion en caso que se agregue al carrito, caso contrario le permite al usuario volver al catalogo de excursiones.
function agregarExcursionCarrito(excursion, confirmacion)
{
    
    if(confirmacion==true){
        if(mostrarCupo(excursion) >=1){

            carrito.push(excursion);
            actualizarCupo(excursion);
            alert("Se agrego al carrito la excusión:  " + excursion.nombre);
            alert("Detalle de la Compra: " + mostrarCarritoCompras());

        }else
            alert("Lo sentimos, el cupo esta completo para la excursion seleccionada");
            
    }     
    else
        menuExcursiones();
}
//Funcion que calcula y retorna el costo total de las excursiones agregadas al carrito, sumando el precio de c/u  de las excursiones.
function calcularTotal(){
    let sumaTotal=0;

    for (const excursion of carrito) 
    {
        sumaTotal += excursion.precio;
        
    }
    return parseInt(sumaTotal);
}

//Funcion que retorna el cupo disponible de una excursion
function mostrarCupo(excursion){
    return excursion.cupo;
            
}

//Funcion que actualiza el cupo disponible de una excursion
function actualizarCupo(excursion)
{
   excursion.cupo= (mostrarCupo(excursion) -1);
   console.log("Cupo de la excursion " + excursion.nombre + " actualizado. Quedan " + mostrarCupo(excursion) + " lugares disponibles.");

}

//Funcion que vacia el carrito de compras
function vaciarCarritoCompras(){
    carrito=[];
}

//Funcion que realiza la suma del precio del traslado de cada excursion agregada al carrito y retorna la sumatoria.
//Cabe aclarar que esta sumatoria aplica a todas las excursiones agregadas al carrito que poseen traslado=true.
//Para esos casos el importe de traslado, se debe sumar al precio de la excursion. 

function sumaTraslados(){
    let sumaTraslados=0;
    for(const excursion of carrito){
        if(excursion.traslado==true){
            sumaTraslados+=precioTraslado;
   
        }
    }
    return parseInt(sumaTraslados);
};
 

//Funcion que realiza la confirmacion de la compra, validando que la compra se encuentre en proceso(estadoCompra==false) para mostrar la confirmación. 
//estadoCompra: True(Compra terminada)/False(Compra en Proceso)
function confirmarCompra(){
      
    if(estadoCompra==false){
        confirmacion= confirm("Desea comprar alguna otra excursion?\n (Seleccione 'Aceptar' para continuar la compra y 'Cancelar' para confirmar la compra)")
        if(confirmacion ==true)
            menuExcursiones();
        else
            alert("Compra realizada exitosamente!" + mostrarCarritoCompras());
            estadoCompra=true;
            vaciarCarritoCompras();
    }
}






