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

document.addEventListener("keydown", onKey, false);



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


// This gets hoisted up per request
function onKey(e)
{
    
    if( AnimationCompleteness.poplvl1Bool ||
        AnimationCompleteness.poplvl2Bool ||
        AnimationCompleteness.poplvl3Bool ||
        AnimationCompleteness.poplvl4Bool ||
        AnimationCompleteness.poplvl5Bool ||
        AnimationCompleteness.readmeBool)
    {
        
        if(e.key === "Backspace")
        {
            if(Input.length > 0)
            {
                Input = Input.slice(0, -1);
            }
        }
        else if(e.key === "Q" ||
                e.key === "W" ||
                e.key === "E" ||
                e.key === "R" ||
                e.key === "T" ||
                e.key === "Y" ||
                e.key === "U" ||
                e.key === "I" ||
                e.key === "O" ||
                e.key === "P" ||
                e.key === "A" ||
                e.key === "S" ||
                e.key === "D" ||
                e.key === "F" ||
                e.key === "G" ||
                e.key === "H" ||
                e.key === "J" ||
                e.key === "K" ||
                e.key === "L" ||
                e.key === "=" ||
                e.key === "Z" ||
                e.key === "X" ||
                e.key === "C" ||
                e.key === "V" ||
                e.key === "B" ||
                e.key === "N" ||
                e.key === "M" ||
                e.key === "0" ||
                e.key === "1" ||
                e.key === "2" ||
                e.key === "3" ||
                e.key === "4" ||
                e.key === "5" ||
                e.key === "6" ||
                e.key === "7" ||
                e.key === "8" ||
                e.key === "9" ||
                e.key === "q" ||
                e.key === "w" ||
                e.key === "e" ||
                e.key === "r" ||
                e.key === "t" ||
                e.key === "y" ||
                e.key === "u" ||
                e.key === "i" ||
                e.key === "o" ||
                e.key === "p" ||
                e.key === "a" ||
                e.key === "s" ||
                e.key === "d" ||
                e.key === "f" ||
                e.key === "g" ||
                e.key === "h" ||
                e.key === "j" ||
                e.key === "k" ||
                e.key === "l" ||
                e.key === "z" ||
                e.key === "x" ||
                e.key === "c" ||
                e.key === "v" ||
                e.key === "b" ||
                e.key === "n" ||
                e.key === "m" ||
                e.key === "{" ||
                e.key === "}")
        {
            if(e.shiftKey)
            {
                Input += e.key.toUpperCase();
            }
            else
            {
                Input += e.key;
            }

        }
        if(AnimationCompleteness.poplvl1Bool)
        {
            if(Input === "CTF{A113A4M}")
            {
                if(localStorage.getItem("lvl1") === "1")
                {}
                else
                {
                    SetScore(GetScore() + 550);
                    localStorage.setItem("lvl1", "1");
                    alert("Nice! You did it! You have recieved points! Proceed");
                }
            }
        }
        if(AnimationCompleteness.poplvl2Bool)
        {
            if(Input === "CTF{BASe==}")
            {
                if(localStorage.getItem("lvl2") === "1")
                {}
                else
                {
                    SetScore(GetScore() + 600);
                    localStorage.setItem("lvl2", "1");
                    alert("Nice! You did it! You have recieved points! Proceed");
                }
            }
        }
        if(AnimationCompleteness.poplvl3Bool)
        {
            if(Input === "CTF{StabbySalad}")
            {
                if(localStorage.getItem("lvl3") === "1")
                {}
                else
                {
                    SetScore(GetScore() + 720);
                    localStorage.setItem("lvl3", "1");
                    alert("Nice! You did it! You have recieved points! Proceed");
                }
            }
        }
        if(AnimationCompleteness.poplvl4Bool)
        {
            if(Input === "CTF{670tt31233fe}")
            {
                if(localStorage.getItem("lvl4") === "1")
                {}
                else
                {
                    SetScore(GetScore() + 290);
                    localStorage.setItem("lvl4", "1");
                    alert("Nice! You did it! You have recieved points! Proceed");
                }
            }
        }
        if(AnimationCompleteness.poplvl5Bool)
        {
            if(Input === "CTF{4D686572}")
            {
                if(localStorage.getItem("lvl5") === "1")
                {}
                else
                {
                    SetScore(GetScore() + 1750);
                    localStorage.setItem("lvl5", "1");
                    alert("Nice! You did it! You have recieved points! You legend!");
                }
            }
        }
    }
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
                else if(distance(
                    e.clientX,
                    e.clientY,
                    canvas.width/2,
                    canvas.height/4 + levelSider() * 3
                ) < levelSider())
                {
                    let weendow = window.open("https://github.com/meryminas/logicCubed.github.io/blob/master/Levels/1/yR23e81c.ctf");
                    weendow.focus();
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
                else if(distance(
                    e.clientX,
                    e.clientY,
                    canvas.width/2,
                    canvas.height/4 + levelSider() * 3
                ) < levelSider())
                {
                    let weendow = window.open("https://github.com/meryminas/logicCubed.github.io/blob/master/Levels/2/HQ.txt");
                    weendow.focus();
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
                else if(distance(
                    e.clientX,
                    e.clientY,
                    canvas.width/2,
                    canvas.height/4 + levelSider() * 3
                ) < levelSider())
                {
                    let weendow = window.open("https://github.com/meryminas/logicCubed.github.io/blob/master/Levels/3/saladCease.cs");
                    weendow.focus();
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
                else if(distance(
                    e.clientX,
                    e.clientY,
                    canvas.width/2,
                    canvas.height/4 + levelSider() * 3
                ) < levelSider())
                {
                    let weendow = window.open("https://github.com/meryminas/logicCubed.github.io/blob/master/Levels/4/httpget.js");
                    weendow.focus();
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
                else if(distance(
                    e.clientX,
                    e.clientY,
                    canvas.width/2,
                    canvas.height/4 + levelSider() * 3
                ) < levelSider())
                {
                    let weendow = window.open("https://github.com/meryminas/logicCubed.github.io/tree/master/Levels/filum%20(Advanced)/applications");
                    weendow.focus();
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
        }
        // lvl2
        else if(distance(e.clientX, 
            e.clientY, 
            (canvas.width * 13/32 - getAspectRatio() * levelSider()), 
            (canvas.height * 5/8   + (255/(1 + AnimationCompleteness.Selector)))) < 5 * levelSider()/8)
        {
            AnimationCompleteness.poplvl2Bool = true;
        }
        // lvl3
        else if(distance(e.clientX,
            e.clientY, 
            canvas.width/2, 
            (canvas.height * 3/4 + (255/(1 + AnimationCompleteness.Selector)))) < 5 * levelSider()/8)
        {
            AnimationCompleteness.poplvl3Bool = true;
        }
        // lvl4
        else if(distance(e.clientX, 
            e.clientY, 
            (canvas.width * 19/32 + getAspectRatio() * levelSider()), 
            (canvas.height * 5/8   + (255/(1 + AnimationCompleteness.Selector)))) < 5 * levelSider()/8)
        {
            AnimationCompleteness.poplvl4Bool = true;
        }
        // lvl5
        else if(distance(e.clientX, 
            e.clientY, 
            (canvas.width * 39/64 + getAspectRatio() * levelSider()), 
            (canvas.height/2       + (255/(1 + AnimationCompleteness.Selector)))) < 5 * levelSider()/8)
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