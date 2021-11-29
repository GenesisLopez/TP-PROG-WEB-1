var regexEmail=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/
var regexCampoTelefono=/^[0-9]{4}-?[0-9]{4}$/
var regexDni=/^[0-9]{7,8}$/
let establecimientoinscripcion=localStorage.getItem("establecimiento");
let provinciainscripcion=localStorage.getItem("provincia");
let idiomainscripcion=localStorage.getItem("idioma");
let horarioinscripcion=localStorage.getItem("horario");
let horariostr=String(horarioinscripcion);
document.getElementById("establecimientovalor").value = establecimientoinscripcion;
document.getElementById("provinciavalor").value=provinciainscripcion;
document.getElementById("idiomavalor").value=idiomainscripcion;
document.getElementById("horariovalor").value=horariostr;
// Contacto
function validar(){
    var error=false;
    var mensajesError="";
	
   
    if(document.getElementById("nombre").value==''){
        error=true;
        mensajesError+="<p>El campo nombre no puede estar vacío</p>";
    }
    if(document.getElementById("apellido").value==''){
        error=true;
        mensajesError+="<p>El campo apellido no puede estar vacío</p>";
    }
    if(document.getElementById("prov").value==''){
        error=true;
        mensajesError+="<p>El campo provincia no puede estar vacío</p>";
    }

    if(!regexEmail.test(document.getElementById("correo").value)){
        error=true;
        mensajesError+="<p>Tiene que ser un correo electronico válido</p>";
    }

    if(document.getElementById("telefono").value==''){
        error=true;
        mensajesError+="<p>El campo Telefono no puede estar vacío</p>";
    }
    if(document.getElementById("city").value==''){
        error=true;
        mensajesError+="<p>El campo Ciudad no puede estar vacío</p>";
    }
    if(error){
        document.getElementById("mensaje").innerHTML=mensajesError;
        return false;
    }else{
        return true;
    }
}

function contarCaracteres(obj){
    var CANTIDAD = 1000;
    var usados = obj.value.length;
    var restantes = (CANTIDAD - usados);
    
    if(restantes < 0){
        document.getElementById("numCar").innerHTML = '<span style="color: red;">Cantidad máxima de carcteres 1000</span>';
    }else if(restantes < 100){
        document.getElementById("numCar").innerHTML = '<span style="color: orange;"> '+restantes+' caracteres restantes</span>';
    }else{
        document.getElementById("numCar").innerHTML = '<span style="color: green;"> '+restantes+' caracteres restantes</span>';
    }
}
