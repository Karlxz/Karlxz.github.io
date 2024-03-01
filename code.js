var openAlready = false;
if (!openAlready){
        setup().then(function(){
        movement();
    });         
}else movement();