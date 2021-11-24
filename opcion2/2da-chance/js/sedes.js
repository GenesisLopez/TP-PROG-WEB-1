
$(document).ready(function(){
    console.log("Hola");
    $("#filtrar").click(function(){

            if($("#region").val()==1)
            {
            
                $("#ramos").hide();
                $("#sanjusto").hide();
                $("#caballito").show();
                $("#belgrano").show();

            }
            else{
            if($("#region").val()==2)
            {
                $("#ramos").show();
                $("#sanjusto").show();
                $("#caballito").hide();
                $("#belgrano").hide();
            }
            else{
                $("#ramos").show();
                $("#sanjusto").show();
                $("#belgrano").show();
                $("#caballito").show();
            }
        }
        
        

    });


   


});
