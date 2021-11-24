
let regexEmail= /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
let regexNumeros = /^[0-9]+$/;
let regexLetras = /^[a-zA-Z]+$/;
let regexTelefono = /^\d{4}-?\d{4}$/

$(document).ready(function(){

    $("#comentario").on('keyup', function() {
        var limit = 1000;
        $("#comentario").attr('maxlength', limit);
        var init = $(this).val().length;
        
        
        if(init<limit){
          init++;
          $('#caracteres').text("Máximo 1000 caracteres:" + init); 
        }
        
      });
    
    $("#form").submit(function(e){
        validar(e);
    
            
    });
});

function validar(e){
    let error=false;
    $("#mensaje").empty();

        if($("#nombre").val()==""){
        error=true;
        $("#mensaje").append("<p>El campo nombre es obligatorio</p>");
        $("#nombre").addClass("error");
    }
        if($("#apellido").val().length<5){
        error=true;
        $("#mensaje").append("<p>El campo apellido es obligatorio</p>");
        $("#apellido").addClass("error");
    }
        if(!$("#email").val().match(regexEmail)){
        error=true;
        $("#mensaje").append("<p>Ingrese un Email válido</p>")
    }  
        if(!$("#telefono").val().match(regexTelefono)){     
        error=true;  
        $("#mensaje").append("<p>El teléfono debe tener 8 caracteres. Ej. 1122-3344</p>");
    }  
        if(error == false){
            e.preventDefault(e);
            $("#myModal").show();


        }
        if (error){
        e.preventDefault();
    }
}
