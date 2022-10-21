
function presupuestoDes (numeroUnidadesItem, precio){
var descuento;    
    if (numeroUnidadesItem <= 6) {
        descuento = 0.05;
        console.log("Descuento del 5%")
        precioNormal= numeroUnidadesItem * precio;
        cotizacion = (precio-(precio*descuento))*numeroUnidadesItem;
    }
    else if (numeroUnidadesItem <= 12){
        descuento = 0.10;
        console.log("Descuento del 10%")
        precioNormal= numeroUnidadesItem * precio; 
        cotizacion = (precio-(precio*descuento))*numeroUnidadesItem;
    }
    else if (numeroUnidadesItem <= 24){
        descuento = 0.15;
        console.log("Descuento del 15%")
        precioNormal= numeroUnidadesItem * precio; 
        cotizacion = (precio-(precio*descuento))*numeroUnidadesItemd;
    }
    else if (numeroUnidadesItem >= 36 && numeroUnidadesItem <= 300){
        descuento = 0.20;
        console.log("Descuento del 20%")
        precioNormal= numeroUnidadesItem * precio; 
        cotizacion = (precio-(precio*descuento))*numeroUnidadesItem;
    }
    else{
        descuento = 0.20;
        precioNormal= numeroUnidadesItem * precio;
        cotizacion = (precio-(precio*descuento))*numeroUnidadesItem;
        console.log("Descuento del 20%");
    }
}
    console.log(presupuestoDes(3001, 90));
    console.log("Su compra actual es de $", precioNormal);
    console.log("Por la cantidad de su compra su presupuesto es de $", cotizacion);
    
    

        