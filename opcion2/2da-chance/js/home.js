/*$(document).ready(function(){
    $("a.menu-hamburguesa").click(function(){
    if($(".menu-hamburguesa").is(":visible")){
      
            $(".item2").show();
        }else{
            $(".item2").hide();
        }
    })
});
$(windows).resize(function(){
    if($(this).width()>768){
        $("menu-hamburguesa").hide();
    }
})*/


$(document).ready(function () {
$("a.menu-hamburguesa").click(function (){
    if($(".item2").is(":visible")){
        $(".item2").hide();
        console.log("visible")
    } else {
        $(".item2").show();
    }
})


});



