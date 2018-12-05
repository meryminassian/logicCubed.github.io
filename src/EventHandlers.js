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
        // lvl1
        if(distance(e.clientX, e.clientY, canvas.width * 25/64, canvas.height/2) < 5 * levelSider()/8)
        {
            console.log(1);
        }
        // lvl2
        else if(distance(e.clientX, e.clientY, canvas.width * 13/32, canvas.height * 5/8) < 5 * levelSider()/8)
        {
            console.log(2);
        }
        // lvl3
        else if(distance(e.clientX, e.clientY, canvas.width/2, canvas.height * 3/4) < 5 * levelSider()/8)
        {
            console.log(3);
        }
        // lvl4
        else if(distance(e.clientX, e.clientY, canvas.width * 19/32, canvas.height * 5/8) < 5 * levelSider()/8)
        {
            console.log(4);
        }
        // lvl5
        else if(distance(e.clientX, e.clientY, canvas.width * 39/64, canvas.height/2) < 5 * levelSider()/8)
        {
            console.log(5);
        }
        // readme
        else if(distance(e.clientX, e.clientY, 5 + levelSider(), 5 + levelSider()) < 5 * levelSider()/8)
        {
            console.log("readme");
        }
    }
}


//#endregion Event handlers