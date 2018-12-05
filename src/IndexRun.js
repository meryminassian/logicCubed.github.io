// Made for Logic Cubed
// We thank you for showing interest :)
// We exist on Github at https://github.com/meryminas/logicCubed.github.io/
// We also exist on Facebook:
// https://www.facebook.com/logicCubed/
// And also on twitter
// https://twitter.com/cubedlogic


let cubeSizer = 0;
// Triangle positions in a semicircle
// Rotate(canvas.width/2 + radius, canvas.height/2, n/Math.PI starting from 0, canvas.width,)
//let Level1 = Triangle(canvas.width * 25/64, canvas.height/2, levelSider(), rgba(Theme[0]), rgba(Theme[4]), -Math.PI / 2);
//let Level2 = Triangle(canvas.width * 13/32, canvas.height * 5/8, levelSider(), rgba(Theme[0]), rgba(Theme[4]), 2 * Math.PI / 3);
//let Level3 = Triangle(canvas.width/2, canvas.height * 3/4, levelSider(), rgba(Theme[0]), rgba(Theme[4]), Math.PI);
//let Level4 = Triangle(canvas.width * 19/32, canvas.height * 5/8, levelSider(), rgba(Theme[0]), rgba(Theme[4]), 2 * Math.PI / 3);
//let Level5 = Triangle(canvas.width * 39/64, canvas.height/2, levelSider(), rgba(Theme[0]), rgba(Theme[4]), Math.PI / 2);

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
        }else if(AnimationCompleteness.lvl1 < 1)
        {
            AnimationCompleteness.lvl1 += 0.3
        }
        else if(AnimationCompleteness.lvl2 < 1)
        {
            AnimationCompleteness.lvl2 += 0.3
        }
        else if(AnimationCompleteness.lvl3 < 1)
        {
            AnimationCompleteness.lvl3 += 0.3
        }
        else if(AnimationCompleteness.lvl4 < 1)
        {
            AnimationCompleteness.lvl4 += 0.3
        }
        else if(AnimationCompleteness.lvl5 < 1)
        {
            AnimationCompleteness.lvl5 += 0.3
        }
    }

    
    
    context.fillStyle = rgba([16, 16, 16, AnimationCompleteness.Background]);
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    Cubely.SetColor(rgba([AnimationCompleteness.Selector, 255, AnimationCompleteness.Selector, 1]))
    cubeSizer += 0.01;
    posOfCube = [canvas.width / 2, (canvas.height / 2) + AnimationCompleteness.Cube*20  - (AnimationCompleteness.Selector/250 * (canvas.height/4))]
    Cubely.SetSize((75 + (3 * AnimationCompleteness.Cube * Math.sin(Math.PI * cubeSizer))) - AnimationCompleteness.Selector/255 * 25);
    Cubely.update();
    
    if(!(goToSelector && AnimationCompleteness.Selector >= 255))
    {
        context.font = "40px Segoe UI";
        context.fillText("Press any key", canvas.width/2 - 130 - (AnimationCompleteness.Selector/150 * (canvas.width/2 + 130)), (canvas.height/8 * 7) * (AnimationCompleteness.Text), canvas.width/2);
    }

    if(goToSelector)
    {
        let Level1 = Triangle(canvas.width * 25/64  , canvas.height/2       + (255/(1 + AnimationCompleteness.Selector)), levelSider(), rgba(Theme[0]), rgba(Theme[4]), AnimationCompleteness.Selector/255 * -Math.PI / 2);
        let Level2 = Triangle(canvas.width * 13/32  , canvas.height * 5/8   + (255/(1 + AnimationCompleteness.Selector)), levelSider(), rgba(Theme[0]), rgba(Theme[4]), AnimationCompleteness.Selector/255 * 2 * Math.PI / 3);
        let Level3 = Triangle(canvas.width/2        , canvas.height * 3/4   + (255/(1 + AnimationCompleteness.Selector)), levelSider(), rgba(Theme[0]), rgba(Theme[4]), AnimationCompleteness.Selector/255 * Math.PI);
        let Level4 = Triangle(canvas.width * 19/32  , canvas.height * 5/8   + (255/(1 + AnimationCompleteness.Selector)), levelSider(), rgba(Theme[0]), rgba(Theme[4]), AnimationCompleteness.Selector/255 * 2 * Math.PI / 3);
        let Level5 = Triangle(canvas.width * 39/64  , canvas.height/2       + (255/(1 + AnimationCompleteness.Selector)), levelSider(), rgba(Theme[0]), rgba(Theme[4]), AnimationCompleteness.Selector/255 * Math.PI / 2);
        let ReadMe = Triangle(5 + levelSider()      , 5 + levelSider()      + (255/(1 + AnimationCompleteness.Selector)), levelSider(), rgba(Theme[0]), rgba(Theme[4]), Math.cos(cubeSizer) * Math.PI);
        Level1.draw();
        Level2.draw();
        Level3.draw();
        Level4.draw();
        Level5.draw();
        ReadMe.draw();
        context.font = (levelSider()/3) + "px Segoe UI"
        context.textAlign = "center";
        context.fillStyle = rgba([255, 255, 255, AnimationCompleteness.lvl1]);
        context.fillText("I", canvas.width * 25/64, canvas.height/2 + levelSider()/6 - 1, 100);
        context.fillStyle = rgba([255, 255, 255, AnimationCompleteness.lvl2]);
        context.fillText("II", canvas.width * 13/32, canvas.height * 5/8 + levelSider()/6 - 1, 100);
        context.fillStyle = rgba([255, 255, 255, AnimationCompleteness.lvl3]);
        context.fillText("II", canvas.width/2, canvas.height * 3/4 + levelSider()/6 - 1, 100);
        context.fillStyle = rgba([255, 255, 255, AnimationCompleteness.lvl4]);
        context.fillText("IV", canvas.width * 19/32, canvas.height * 5/8 + levelSider()/6 - 1, 100);
        context.fillStyle = rgba([255, 255, 255, AnimationCompleteness.lvl5]);
        context.fillText("V", canvas.width * 39/64, canvas.height/2 + levelSider()/6 - 1, 100);
        context.fillText("?", 5 + levelSider(), 5 + levelSider() + levelSider()/6 - 1, 100);
    }
}