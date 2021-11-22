$(document).ready(function () {
    $("a.menu-hamburguesa").click(function(){
        if($(".menu-hamburguesa").is(":visible")){
            $(".item2").sliderUp();
        }else{
            $(".menu-hamburguesa").sliderDown();
        }
    })
});
$(windows).resize(function(){
    if($(this).width()>768){
        $("menu-hamburguesa").hide();
    }
})
