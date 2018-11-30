// Made for Logic Cubed
// We thank you for showing interest :)
// We exist on Github at https://github.com/meryminas/logicCubed.github.io/
// We also exist on Facebook:
// https://www.facebook.com/logicCubed/

//#region Event handlers

// Track the mouse movement of the player
document.addEventListener('mousemove', onMUpdate, false);
// Track the mousewheel of the player
document.addEventListener('wheel', onWUpdate, false);


function onMUpdate(e){
    // Speed up the cube relative to mouse movement in the x, y axis
    Cube.dy += (e.pageX - mouseLocation[0]) * 0.0005;
    Cube.dx += (e.pageY - mouseLocation[1]) * 0.0005;
    // Account the last recorded mouse position
    mouseLocation = [e.pageX, e.pageY];
}

function onWUpdate(e){
    // Speed up the cube each wheelup or wheeldown in the z dimension
    // e.deltaY = 3 for wheelup
    // e.deltaY = -3 for wheeldown
    Cube.dz += 0.01 * e.deltaY;
}


//#endregion Event handlers