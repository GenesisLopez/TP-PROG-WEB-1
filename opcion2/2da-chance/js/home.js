

$(document).ready(function() {
    $("#belgrano-info").hide();
    $("#sanjusto-info").hide();
    $("#ramos-info").hide();
    $("#caballito-info").hide();
    
$("a.menu-hamburguesa").click(function (){
    if($(".item2").is(":visible")){
       $(".item2").hide();
        console.log("visible")
    } else {
        $(".item2").show();
    }
})

let opcionOeste= document.getElementsByClassName("oeste");
let opciones= document.getElementById("provincia");
let opcionEstablecimiento=document.getElementById("establecimiento");
opciones.onchange=function(){
  
    if(this.value==1){
        $(".caba").show()
        $(".oeste").hide()
    }else{
        $(".caba").hide()
        $(".oeste").show()
    }

    
};



opcionEstablecimiento.onchange=function(){
    $("#belgrano-info").hide();
    $("#sanjusto-info").hide();
    $("#ramos-info").hide();
    $("#caballito-info").hide();
    console.log(opcionEstablecimiento.text);
    switch(opcionEstablecimiento.value){
        case '1':
            $("#sanjusto-info").hide();
            $("#ramos-info").hide();
            $("#caballito-info").hide();
            $("#belgrano-info").show();
            break;
        case "2":
            $("#belgrano-info").hide();
            $("#ramos-info").hide();
            $("#caballito-info").hide();
            $("#sanjusto-info").show();
            break;
        case "3":
            $("#belgrano-info").hide();
            $("#sanjusto-info").hide();
            $("#caballito-info").hide();
            $("#ramos-info").show();
            break;
        case "4":
            $("#belgrano-info").hide();
            $("#sanjusto-info").hide();
            $("#ramos-info").hide();
         $("#caballito-info").show();

            break;
    }
}
$("#mandarAInscripcion").click( function(){
    let valor=  $("#establecimiento").val();
    let texto = $("#establecimiento").find('option:selected').text();
    localStorage.setItem("establecimiento", texto);


    let valor2 = $("#provincia").val();  
    let texto2 = $("#provincia").find('option:selected').text();
     localStorage.setItem("provincia", texto2);

       
 let valor3 =  $("#idioma").val();
 let texto3 =  $("#idioma").find('option:selected').text(); 
localStorage.setItem("idioma", texto3);
console.log(texto3);

   
let valor4= $("#horario").val(); 
    
let texto4 = $("#horario").find('option:selected').text();

localStorage.setItem("horario", texto4);
console.log(texto4);




});

})
