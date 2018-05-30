function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("boton",ev.target);
  ev.dataTransfer.setData("id_boton",ev.target.id);
 }

function drop(ev) {
  ev.preventDefault();
  var boton = ev.dataTransfer.getData("boton");
  var id=ev.dataTransfer.getData("id_boton");
  
   var total = document.getElementById(id).childNodes.length; 
  var elementoArrastrado = document.getElementById(id); // Elemento arrastrado
  var Clonado = elementoArrastrado.cloneNode(true); // Se clona el elemento
var fondo=elementoArrastrado.getAttribute("background");
alert(fondo);
 Clonado.setAttribute("id",id);
  
ev.target.appendChild(Clonado);


	
		
			  
		  ev.target.appendChild(elementoClonado); // Se añade el elemento clonado
		
}

function cargar_imagen(input){

    var imag=input.files[0];
     
    reader = new FileReader();
    reader.onload = (function(imag){
      return function() {
      }
    })(imag);
   
     var path_imagen=imag.path;
    var path=path_imagen.replace(/\\/g,"//");
   document.getElementById("panel_plano").style.backgroundImage="url("+"'"+path+"')";
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
