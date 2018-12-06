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
    posOfCube = [canvas.width / 2, (canvas.height / 2) + AnimationCompleteness.Cube*20  - (AnimationCompleteness.Selector/250 * (canvas.height/8 * 3))]
    Cubely.SetSize((75 + (3 * AnimationCompleteness.Cube * Math.sin(Math.PI * cubeSizer))) - AnimationCompleteness.Selector/255 * 25);
    Cubely.update();
    
    if(!(goToSelector && AnimationCompleteness.Selector >= 255))
    {
        context.font = "40px Segoe UI";
        context.fillText("Click to proceed", canvas.width/2 - 130 - (AnimationCompleteness.Selector/150 * (canvas.width/2 + 130)), (canvas.height/8 * 7) * (AnimationCompleteness.Text), canvas.width/2);
    }

    if(goToSelector)
    {
        // Lvl1
        if(AnimationCompleteness.poplvl1Bool)
        {
            if(AnimationCompleteness.poplvl1 < 1){ AnimationCompleteness.poplvl1 += 0.02}
        }
        else if(AnimationCompleteness.poplvl1 > 0){ AnimationCompleteness.poplvl1 -= 0.02}

        // Lvl2
        if(AnimationCompleteness.poplvl2Bool)
        {
            if(AnimationCompleteness.poplvl2 < 1){ AnimationCompleteness.poplvl2 += 0.02}
        }
        else if(AnimationCompleteness.poplvl2 > 0){ AnimationCompleteness.poplvl2 -= 0.02}

        // Lvl3
        if(AnimationCompleteness.poplvl3Bool)
        {
            if(AnimationCompleteness.poplvl3 < 1){ AnimationCompleteness.poplvl3 += 0.02}
        }
        else if(AnimationCompleteness.poplvl3 > 0){ AnimationCompleteness.poplvl3 -= 0.02}

        // Lvl4
        if(AnimationCompleteness.poplvl4Bool)
        {
            if(AnimationCompleteness.poplvl4 < 1){ AnimationCompleteness.poplvl4 += 0.02}
        }
        else if(AnimationCompleteness.poplvl4 > 0){ AnimationCompleteness.poplvl4 -= 0.02}

        // Lvl5
        if(AnimationCompleteness.poplvl5Bool)
        {
            if(AnimationCompleteness.poplvl5 < 1){ AnimationCompleteness.poplvl5 += 0.02}
        }
        else if(AnimationCompleteness.poplvl5 > 0){ AnimationCompleteness.poplvl5 -= 0.02}

        // readme
        if(AnimationCompleteness.readmeBool)
        {
            if(AnimationCompleteness.readme < 1){ AnimationCompleteness.readme += 0.02}
        }
        else if(AnimationCompleteness.readme > 0){ AnimationCompleteness.readme -= 0.02}



        let Level1 = Triangle(  (canvas.width * 25/64 - getAspectRatio() * levelSider()) * (1 - AnimationCompleteness.poplvl1) + AnimationCompleteness.poplvl1 * canvas.width / 2,
                                (canvas.height/2 + (255/(1 + AnimationCompleteness.Selector)))  * (1 - AnimationCompleteness.poplvl1) + AnimationCompleteness.poplvl1 * canvas.height / 2, 
                                levelSider() + (levelSider() * 16 * AnimationCompleteness.poplvl1), 
                                rgba(Theme[0]), 
                                rgba(Theme[4]), 
                                AnimationCompleteness.Selector/255 * ((2 * Math.PI - angle(canvas.width * 25/64 - getAspectRatio() * levelSider(), canvas.height / 2 + (255/(1 + AnimationCompleteness.Selector)), mouseLocation[0], mouseLocation[1])) - 0.5235988) * (1 - AnimationCompleteness.poplvl1));
        
        
        let Level2 = Triangle(  (canvas.width * 13/32 - getAspectRatio() * levelSider()) * (1 - AnimationCompleteness.poplvl2) + AnimationCompleteness.poplvl2 * canvas.width / 2,
                                (canvas.height * 5/8   + (255/(1 + AnimationCompleteness.Selector))) * (1 - AnimationCompleteness.poplvl2) + AnimationCompleteness.poplvl2 * canvas.height / 2, 
                                levelSider() + (levelSider() * 16 * AnimationCompleteness.poplvl2), 
                                rgba(Theme[0]), 
                                rgba(Theme[4]), 
                                AnimationCompleteness.Selector/255 * ((2 * Math.PI - angle(canvas.width * 13/32 - getAspectRatio() * levelSider(), canvas.height * 5/8 + (255/(1 + AnimationCompleteness.Selector)), mouseLocation[0], mouseLocation[1])) - 0.5235988) * (1 - AnimationCompleteness.poplvl2));
        
        let Level3 = Triangle(  (canvas.width / 2)  * (1 - AnimationCompleteness.poplvl3) + AnimationCompleteness.poplvl3 * canvas.width / 2,
                                (canvas.height * 3/4 + (255/(1 + AnimationCompleteness.Selector))) * (1 - AnimationCompleteness.poplvl3) + AnimationCompleteness.poplvl3 * canvas.height / 2, 
                                levelSider() + (levelSider() * 16 * AnimationCompleteness.poplvl3), 
                                rgba(Theme[0]), 
                                rgba(Theme[4]), 
                                AnimationCompleteness.Selector/255 * ((2 * Math.PI - angle(canvas.width / 2, canvas.height * 3/4   + (255/(1 + AnimationCompleteness.Selector)), mouseLocation[0], mouseLocation[1])) - 0.5235988) * (1 - AnimationCompleteness.poplvl3));
        
        let Level4 = Triangle(  (canvas.width * 19/32 + getAspectRatio() * levelSider()) * (1 - AnimationCompleteness.poplvl4) + AnimationCompleteness.poplvl4 * canvas.width / 2,
                                (canvas.height * 5/8   + (255/(1 + AnimationCompleteness.Selector))) * (1 - AnimationCompleteness.poplvl4) + AnimationCompleteness.poplvl4 * canvas.height / 2, 
                                levelSider()  + (levelSider() * 16 * AnimationCompleteness.poplvl4), 
                                rgba(Theme[0]), 
                                rgba(Theme[4]), 
                                AnimationCompleteness.Selector/255 * ((2 * Math.PI - angle(canvas.width * 19/32 + getAspectRatio() * levelSider(), canvas.height * 5/8   + (255/(1 + AnimationCompleteness.Selector)), mouseLocation[0], mouseLocation[1])) - 0.5235988) * (1 - AnimationCompleteness.poplvl4));
        
        let Level5 = Triangle(  (canvas.width * 39/64 + getAspectRatio() * levelSider())   * (1 - AnimationCompleteness.poplvl5) + AnimationCompleteness.poplvl5 * canvas.width / 2,
                                (canvas.height/2       + (255/(1 + AnimationCompleteness.Selector))) * (1 - AnimationCompleteness.poplvl5) + AnimationCompleteness.poplvl5 * canvas.height / 2,
                                levelSider() + (levelSider() * 16 * AnimationCompleteness.poplvl5),
                                rgba(Theme[0]),
                                rgba(Theme[4]),
                                AnimationCompleteness.Selector/255 * ((2 * Math.PI - angle(canvas.width * 39/64 + getAspectRatio() * levelSider(), canvas.height / 2 + (255/(1 + AnimationCompleteness.Selector)), mouseLocation[0], mouseLocation[1])) - 0.5235988) * (1 - AnimationCompleteness.poplvl5));
        
        let readme = Triangle(  (5 + levelSider()) * (1 - AnimationCompleteness.readme) + AnimationCompleteness.readme * canvas.width / 2,
                                (5 + levelSider() + (255/(1 + AnimationCompleteness.Selector))) * (1 - AnimationCompleteness.readme) + AnimationCompleteness.readme * canvas.height / 2, 
                                levelSider() + (levelSider() * 16 * AnimationCompleteness.readme), 
                                rgba(Theme[0]), 
                                rgba(Theme[4]), 
                                Math.cos(cubeSizer) * Math.PI * (1 - AnimationCompleteness.readme));
        
        let Logo = logoTRI(canvas.width/2, canvas.height/2 + (255/(1 + AnimationCompleteness.Selector)));
        Logo.draw();
        if( !AnimationCompleteness.poplvl1Bool ||
            !AnimationCompleteness.poplvl2Bool ||
            !AnimationCompleteness.poplvl3Bool ||
            !AnimationCompleteness.poplvl4Bool ||
            !AnimationCompleteness.poplvl5Bool ||
            !AnimationCompleteness.readmeBool)
        {
            Level1.draw();
            Level2.draw();
            Level3.draw();
            Level4.draw();
            Level5.draw();
            readme.draw();
        }
        
        context.font = (levelSider()/3) + "px Segoe UI"
        context.textAlign = "center";
        context.fillStyle = rgba([255, 255, 255, AnimationCompleteness.lvl1]);
        context.fillText("I", canvas.width * 25/64 - getAspectRatio() * levelSider(), canvas.height/2 + levelSider()/6 - 1, 100);
        context.fillStyle = rgba([255, 255, 255, AnimationCompleteness.lvl2]);
        context.fillText("II", canvas.width * 13/32 - getAspectRatio() * levelSider(), canvas.height * 5/8 + levelSider()/6 - 1, 100);
        context.fillStyle = rgba([255, 255, 255, AnimationCompleteness.lvl3]);
        context.fillText("III", canvas.width/2, canvas.height * 3/4 + levelSider()/6 - 1, 100);
        context.fillStyle = rgba([255, 255, 255, AnimationCompleteness.lvl4]);
        context.fillText("IV", canvas.width * 19/32 + getAspectRatio() * levelSider(), canvas.height * 5/8 + levelSider()/6 - 1, 100);
        context.fillStyle = rgba([255, 255, 255, AnimationCompleteness.lvl5]);
        context.fillText("V", canvas.width * 39/64 + getAspectRatio() * levelSider(), canvas.height/2 + levelSider()/6 - 1, 100);
        context.fillText("?", 5 + levelSider(), 5 + levelSider() + levelSider()/6 - 1, 100);
        
        // Make the selection dominant
        switch(true)
        {
            case AnimationCompleteness.poplvl1Bool:
                Level1.draw();
                break;
            case AnimationCompleteness.poplvl2Bool:
                Level2.draw();
                break;
            case AnimationCompleteness.poplvl3Bool:
                Level3.draw();
                break;
            case AnimationCompleteness.poplvl4Bool:
                Level4.draw();
                break;
            case AnimationCompleteness.poplvl5Bool:
                Level5.draw();
                break;
            case AnimationCompleteness.readmeBool:
                readme.draw();
                AnimationCompleteness.contentreadme += 0.01;
                context.fillStyle = rgba([255, 255, 255, AnimationCompleteness.contentreadme]);
                context.fillText("Thank you for playing", canvas.width/2, canvas.height/8, canvas.width/4);
                context.fillText("This is a simple Capture the Flag made by", canvas.width/2, canvas.height/4, canvas.width/3);
                context.fillText("three college students. We hope that with this", canvas.width/2, canvas.height/4 + levelSider()/2, canvas.width/3);
                context.fillText("we can get more people to develop their problem", canvas.width/2, canvas.height/4  + levelSider(), canvas.width/3);
                context.fillText("solving skills. We also want to introduce you to", canvas.width/2, canvas.height/4 + levelSider() * 3/2, canvas.width/3);
                context.fillText("CTFs, which are very growth provoking yet almost always", canvas.width/2, canvas.height/4 + levelSider() * 2, canvas.width/3);
                context.fillText("intimidating on the first glance. By the end this CTF", canvas.width/2, canvas.height/4 + levelSider() * 2.5, canvas.width/3);
                context.fillText("you will get the gist of CTFs in general, and through hard work", canvas.width/2, canvas.height/4 + levelSider() * 3, canvas.width/3);
                context.fillText("you can achieve your goals and conquer any CTF you stumble upon.", canvas.width/2, canvas.height/4 + levelSider() * 3.5, canvas.width/3);
                context.fillText("We hope you have great fun", canvas.width/2, canvas.height/4 + levelSider() * 4, canvas.width/3);

                context.fillText("This is where your journey begins ...", canvas.width/2, canvas.height/4 + levelSider() * 6, canvas.width/3);
                
                Octagon(canvas.width / 2 - levelSider() / 2, canvas.height / 4 + levelSider() * 7, levelSider(), levelSider(), levelSider(), rgba([0, 0, 0, 0]), rgba([255, 255, 255, AnimationCompleteness.contentreadme]), 0, 0, 0, 0, canvas, context).draw();
                context.fillStyle = rgba([255, 255, 255, AnimationCompleteness.contentreadme]);
                context.fillText("x", canvas.width/2 + levelSider() * 0.07, canvas.height/4 + levelSider() * 7.65, canvas.width/3);
                break;
        }
    }
}