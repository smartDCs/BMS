function cargar_imagen(input){
    
    var imag=input.files[0];
     
    reader = new FileReader();
    reader.onload = (function(imag){
      return function() {
//          alert(imagen.name);
       
      }
    })(imag);
   
     var path_imagen=imag.path;
  var tamaño=document;
  
   var contenedor_imagen=document.getElementById("imagen");
   contenedor_imagen.src=path_imagen;

}
function info(boton){
    var id=boton.id;
    alert(id);
switch(id){
    case "btn_red":
        alert("Configurar la conexion\n Ej.: 192.168.10.1");
        break;
}
}