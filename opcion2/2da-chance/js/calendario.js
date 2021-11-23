
$(document).ready(function(){
    $("#Filtrar").click(function(){

            if(($("#informacion1").val()==2)&&($("#informacion2").val()==1))
            {
            
                $("#fotoingles1").show();
                $("#inglesramos").show();
                $("#fotofrances1").hide();
                $("#francessanjusto").hide();
                $("#fotoaleman1").hide();
                $("#alemancaballito").hide();
                $("#fotoitaliano1").hide();
                $("#italianobelgrano").hide();
                $("#fotoingles2").hide();
                $("#inglescaballito").hide();
                $("#fotofrances2").hide();
                $("#francessanjusto2").hide();
                $("#fotoitaliano2").hide();
                $("#italianocaballito").hide();
                $("#fotoaleman2").hide();
                $("#alemanramos").hide();

            }
            else{
                 if(($("#informacion1").val()==4)&&($("#informacion2").val()==2))
                    {
                
                        $("#fotoingles1").hide();
                        $("#inglesramos").hide();
                        $("#fotofrances1").show();
                        $("#francessanjusto").show();
                        $("#fotoaleman1").hide();
                        $("#alemancaballito").hide();
                        $("#fotoitaliano1").hide();
                        $("#italianobelgrano").hide();
                        $("#fotoingles2").hide();
                        $("#inglescaballito").hide();
                        $("#fotofrances2").hide();
                        $("#francessanjusto2").hide();
                        $("#fotoitaliano2").hide();
                        $("#italianocaballito").hide();
                        $("#fotoaleman2").hide();
                        $("#alemanramos").hide();
    
                    }
                else{
                        if(($("#informacion1").val()==3)&&($("#informacion2").val()==3))
                        {
            
                            $("#fotoingles1").hide();
                            $("#inglesramos").hide();
                            $("#fotofrances1").hide();
                            $("#francessanjusto").hide();
                            $("#fotoaleman1").show();
                            $("#alemancaballito").show();
                            $("#fotoitaliano1").hide();
                            $("#italianobelgrano").hide();
                            $("#fotoingles2").hide();
                            $("#inglescaballito").hide();
                            $("#fotofrances2").hide();
                            $("#francessanjusto2").hide();
                            $("#fotoitaliano2").hide();
                            $("#italianocaballito").hide();
                            $("#fotoaleman2").hide();
                            $("#alemanramos").hide();

                        }
                        else{
                            if(($("#informacion1").val()==1)&&($("#informacion2").val()==4))
                                {
            
                                $("#fotoingles1").hide();
                                $("#inglesramos").hide();
                                $("#fotofrances1").hide();
                                $("#francessanjusto").hide();
                                $("#fotoaleman1").hide();
                                $("#alemancaballito").hide();
                                $("#fotoitaliano1").show();
                                $("#italianobelgrano").show();
                                $("#fotoingles2").hide();
                                $("#inglescaballito").hide();
                                $("#fotofrances2").hide();
                                $("#francessanjusto2").hide();
                                $("#fotoitaliano2").hide();
                                $("#italianocaballito").hide();
                                $("#fotoaleman2").hide();
                                $("#alemanramos").hide();

                                }
                            else
                                {
                                    if(($("#informacion1").val()==3)&&($("#informacion2").val()==1))
                                        {
            
                                            $("#fotoingles1").hide();
                                            $("#inglesramos").hide();
                                            $("#fotofrances1").hide();
                                            $("#francessanjusto").hide();
                                            $("#fotoaleman1").hide();
                                            $("#alemancaballito").hide();
                                            $("#fotoitaliano1").hide();
                                            $("#italianobelgrano").hide();
                                            $("#fotoingles2").show();
                                            $("#inglescaballito").show();
                                            $("#fotofrances2").hide();
                                            $("#francessanjusto2").hide();
                                            $("#fotoitaliano2").hide();
                                            $("#italianocaballito").hide();
                                            $("#fotoaleman2").hide();
                                            $("#alemanramos").hide();

                                        }
                                    else{
                                        if(($("#informacion1").val()==4)&&($("#informacion2").val()==2))
                                            {
            
                                                $("#fotoingles1").hide();
                                                $("#inglesramos").hide();
                                                $("#fotofrances1").hide();
                                                $("#francessanjusto").hide();
                                                $("#fotoaleman1").hide();
                                                $("#alemancaballito").hide();
                                                $("#fotoitaliano1").hide();
                                                $("#italianobelgrano").hide();
                                                $("#fotoingles2").hide();
                                                $("#inglescaballito").hide();
                                                $("#fotofrances2").show();
                                                $("#francessanjusto2").show();
                                                $("#fotoitaliano2").hide();
                                                $("#italianocaballito").hide();
                                                $("#fotoaleman2").hide();
                                                $("#alemanramos").hide();

                                            }
                                        else{
                                                if(($("#informacion1").val()==3)&&($("#informacion2").val()==4))
                                                    {
            
                                                    $("#fotoingles1").hide();
                                                    $("#inglesramos").hide();
                                                    $("#fotofrances1").hide();
                                                    $("#francessanjusto").hide();
                                                    $("#fotoaleman1").hide();
                                                    $("#alemancaballito").hide();
                                                    $("#fotoitaliano1").hide();
                                                    $("#italianobelgrano").hide();
                                                    $("#fotoingles2").hide();
                                                    $("#inglescaballito").hide();
                                                    $("#fotofrances2").hide();
                                                    $("#francessanjusto2").hide();
                                                    $("#fotoitaliano2").show();
                                                    $("#italianocaballito").show();
                                                    $("#fotoaleman2").hide();
                                                    $("#alemanramos").hide();

                                                    }
                                                else{
                                                    if(($("#informacion1").val()==2)&&($("#informacion2").val()==3))
                                                        {
            
                                                            $("#fotoingles1").hide();
                                                            $("#inglesramos").hide();
                                                            $("#fotofrances1").hide();
                                                            $("#francessanjusto").hide();
                                                            $("#fotoaleman1").hide();
                                                            $("#alemancaballito").hide();
                                                            $("#fotoitaliano1").hide();
                                                            $("#italianobelgrano").hide();
                                                            $("#fotoingles2").hide();
                                                            $("#inglescaballito").hide();
                                                            $("#fotofrances2").hide();
                                                            $("#francessanjusto2").hide();
                                                            $("#fotoitaliano2").hide();
                                                            $("#italianocaballito").hide();
                                                            $("#fotoaleman2").show();
                                                            $("#alemanramos").show();

                                                        }
                                                    else
                                                    {
                                                        alert("No se encontró el curso");
                                                        $("#fotoingles1").hide();
                                                            $("#inglesramos").hide();
                                                            $("#fotofrances1").hide();
                                                            $("#francessanjusto").hide();
                                                            $("#fotoaleman1").hide();
                                                            $("#alemancaballito").hide();
                                                            $("#fotoitaliano1").hide();
                                                            $("#italianobelgrano").hide();
                                                            $("#fotoingles2").hide();
                                                            $("#inglescaballito").hide();
                                                            $("#fotofrances2").hide();
                                                            $("#francessanjusto2").hide();
                                                            $("#fotoitaliano2").hide();
                                                            $("#italianocaballito").hide();
                                                            $("#fotoaleman2").hide();
                                                            $("#alemanramos").hide();




                                                    }


                                                    }
            
                                            }
                                        }
                                }
                         }
        
                    }
 
                }
       });
        
    });