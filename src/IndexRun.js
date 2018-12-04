// Made for Logic Cubed
// We thank you for showing interest :)
// We exist on Github at https://github.com/meryminas/logicCubed.github.io/
// We also exist on Facebook:
// https://www.facebook.com/logicCubed/
// And also on twitter
// https://twitter.com/cubedlogic


let cubeSizer = 0;
let Level1 = Triangle();

// Draws the page
const Cast = () => 
{
    if(AnimationCompleteness.Background <= 1)
    {    
        AnimationCompleteness.Background += 0.02;
    }else if(AnimationCompleteness.Cube > 1)
    {
        AnimationCompleteness.Cube -= Math.log(AnimationCompleteness.Cube);
    }else if(AnimationCompleteness.Text  >= 1)
    {
        AnimationCompleteness.Text = AnimationCompleteness.Text * 0.99;
    }else if(!listenEntry){listenEntry = true;}
    else if(goToSelector)
    {
        if(AnimationCompleteness.Selector < 255)
        {
            AnimationCompleteness.Selector += 5;
        }
    }

    
    
    context.fillStyle = rgba([16, 16, 16, AnimationCompleteness.Background]);
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    Cubely.SetColor(rgba([AnimationCompleteness.Selector, 255, AnimationCompleteness.Selector, 1]))
    cubeSizer += 0.01;
    posOfCube = [canvas.width / 2 + (AnimationCompleteness.Selector/255 * (canvas.height/4)), (canvas.height / 2) + AnimationCompleteness.Cube*20]
    Cubely.SetSize(75 + (3 * AnimationCompleteness.Cube * Math.sin(Math.PI * cubeSizer)));
    Cubely.update();
    
    
    context.font = "40px Segoe UI";
    context.fillText("Press any key", canvas.width/2 - 130 - (AnimationCompleteness.Selector/200 * (canvas.width/2 + 130)), (canvas.height/8 * 7) * (AnimationCompleteness.Text), canvas.width/2);
}