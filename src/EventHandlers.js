// Made for Logic Cubed
// We thank you for showing interest :)
// We exist on Github at https://github.com/meryminas/logicCubed.github.io/
// We also exist on Facebook:
// https://www.facebook.com/logicCubed/

//#region Event handlers
// Track the mouse movement of the player
document.addEventListener("mousemove", onMUpdate, false);
// Track the mousewheel of the player
document.addEventListener("wheel", onWUpdate, false);
// Track clicks
document.addEventListener("mousedown", onMouse, false);



// This gets hoisted
function onMUpdate(e)
{
    // Speed up the cube relative to mouse movement in the x, y axis
    Cubely.dy += (e.pageX - mouseLocation[0]) * 0.0005;
    Cubely.dx += (e.pageY - mouseLocation[1]) * 0.0005;
    // Account the last recorded mouse position
    mouseLocation = [e.pageX, e.pageY];
}



// This gets hoisted
function onWUpdate(e)
{
    // Speed up the cube each wheelup or wheeldown in the z dimension
    // e.deltaY = 3 for wheelup
    // e.deltaY = -3 for wheeldown
    Cubely.dz += 0.01 * e.deltaY;
}



// This gets hoisted
function onMouse(e)
{
    if(listenEntry && !goToSelector)
    {
        goToSelector = true;
    }
    else if(AnimationCompleteness.lvl5 >= 1)
    {
        // Checks if the page is stil on the selector
        if( AnimationCompleteness.poplvl1Bool ||
            AnimationCompleteness.poplvl2Bool ||
            AnimationCompleteness.poplvl3Bool ||
            AnimationCompleteness.poplvl4Bool ||
            AnimationCompleteness.poplvl5Bool ||
            AnimationCompleteness.readmeBool)
        {
            if(AnimationCompleteness.readmeBool)
            {
                if(distance(
                    e.clientX,
                    e.clientY,
                    canvas.width/2 + levelSider() * 0.07,
                    canvas.height/4 + levelSider() * 7.65) < levelSider())
                {
                    AnimationCompleteness.readmeBool = false;
                }
            }
            if(AnimationCompleteness.poplvl1Bool)
            {
                if(distance(
                    e.clientX,
                    e.clientY,
                    canvas.width/2 + levelSider() * 0.07,
                    canvas.height/4 + levelSider() * 7.65) < levelSider())
                {
                    AnimationCompleteness.poplvl1Bool = false;
                }
            }
            if(AnimationCompleteness.poplvl2Bool)
            {
                if(distance(
                    e.clientX,
                    e.clientY,
                    canvas.width/2 + levelSider() * 0.07,
                    canvas.height/4 + levelSider() * 7.65) < levelSider())
                {
                    AnimationCompleteness.poplvl2Bool = false;
                }
            }
            if(AnimationCompleteness.poplvl3Bool)
            {
                if(distance(
                    e.clientX,
                    e.clientY,
                    canvas.width/2 + levelSider() * 0.07,
                    canvas.height/4 + levelSider() * 7.65) < levelSider())
                {
                    AnimationCompleteness.poplvl3Bool = false;
                }
            }
            if(AnimationCompleteness.poplvl4Bool)
            {
                if(distance(
                    e.clientX,
                    e.clientY,
                    canvas.width/2 + levelSider() * 0.07,
                    canvas.height/4 + levelSider() * 7.65) < levelSider())
                {
                    AnimationCompleteness.poplvl4Bool = false;
                }
            }
            if(AnimationCompleteness.poplvl5Bool)
            {
                if(distance(
                    e.clientX,
                    e.clientY,
                    canvas.width/2 + levelSider() * 0.07,
                    canvas.height/4 + levelSider() * 7.65) < levelSider())
                {
                    AnimationCompleteness.poplvl5Bool = false;
                }
            }
        }
        // lvl1
        else if(distance(e.clientX, 
            e.clientY, 
            (canvas.width * 25/64 - getAspectRatio() * levelSider()), 
            (canvas.height/2 + (255/(1 + AnimationCompleteness.Selector)))) < 5 * levelSider()/8)
        {
            AnimationCompleteness.poplvl1Bool = true;
            console.log(1)
        }
        // lvl2
        else if(distance(e.clientX, 
            e.clientY, 
            canvas.width * 13/32, 
            canvas.height * 5/8) < 5 * levelSider()/8)
        {
            AnimationCompleteness.poplvl2Bool = true;
        }
        // lvl3
        else if(distance(e.clientX,
            e.clientY, 
            canvas.width/2, 
            canvas.height * 3/4) < 5 * levelSider()/8)
        {
            AnimationCompleteness.poplvl3Bool = true;
        }
        // lvl4
        else if(distance(e.clientX, 
            e.clientY, 
            canvas.width * 19/32, 
            canvas.height * 5/8) < 5 * levelSider()/8)
        {
            AnimationCompleteness.poplvl4Bool = true;
        }
        // lvl5
        else if(distance(e.clientX, 
            e.clientY, 
            canvas.width * 39/64, 
            canvas.height/2) < 5 * levelSider()/8)
        {
            AnimationCompleteness.poplvl5Bool = true;
        }
        // readme
        else if(distance(e.clientX, 
            e.clientY, 
            5 + levelSider(), 
            5 + levelSider()) < 5 * levelSider()/8)
        {
            AnimationCompleteness.readmeBool = true;
        }
    }
}


//#endregion Event handlers