// Made for Logic Cubed
// We thank you for showing interest :)
// We exist on Github at https://github.com/meryminas/logicCubed.github.io/
// We also exist on Facebook:
// https://www.facebook.com/logicCubed/

function Run(){
    Maxout();
    //#region Background
    if(AnimationCompleteness.Background <= 1)
    {    
        AnimationCompleteness.Background += 0.02;
    }

    context.fillStyle = rgba([16, 16, 16, AnimationCompleteness.Background])
        
    context.fillRect(0, 0, canvas.width, canvas.height)
    //#endregion Background
    
    
    Cube.update();
    context.font = "40px Segoe UI"
    context.fillText("Press any key", canvas.width/2 - 130, canvas.height/8 * 7, canvas.width/2)
    window.requestAnimationFrame(Run);
}

Run();