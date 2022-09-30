

let precio;

precio = prompt("introduzca su ciudad");

switch (precio) {
    case 'san nicolas': { 
    alert("no se cobrará el transporte");
}
    break;
    
    case 'general rojo':{
    alert("no se cobrará el transporte");
}
    break;
    default:{ 
    alert("consulte por el cobro a ese sitio");
}
}
function edad(){ 
        edad = prompt("ingrese su edad");
        if (edad >=18){
            alert("usted puede ingresar al sitio");
        }else{
            alert("usted es menor de 18 años, entre bajo su responsabilidad")
        }
}

edad()