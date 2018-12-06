// Made for Logic Cubed
// We thank you for showing interest :)
// We exist on Github at https://github.com/meryminas/logicCubed.github.io/
// We also exist on Facebook:
// https://www.facebook.com/logicCubed/

//#region Helpers

// turns csv into array
const addPoint = (x, y, z) => 
{
    return [x, y, z]
}

const distance = (x, y, x_2, y_2) => 
{
    return Math.sqrt(Math.pow(x - x_2, 2) + Math.pow(y - y_2, 2))
};


// Turns an array into an rgba color that is interpretable by the canvas
const rgba = (array) => 
{
    return "rgba(" + array[0] + ", " + array[1] + ", " + array[2] + ", " + array[3] + ")";
}

// stretches the canvas to be the size of the screen
const Maxout = () => 
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    posOfCube = [canvas.width / 2, canvas. height / 2];
    document.documentElement.style.overflow = 'hidden';  // Firefox, Chrome
    document.body.scroll = "no";                         // Internet explorer
}
Maxout();


// Gets the score from the local storage (10 mb max)
const GetScore = () => 
{
    if(firstTimePlaying){
        SetScore(0);
        return 0;
    }
    else
    {
        return parseInt(localStorage.getItem("score"));
    }
}


// Sets the score
const SetScore = (score) => 
{
    localStorage.setItem("score", score + "");
}



// account for position of cube
const formXYtoPixels = (x, y) => 
{
    return [x + posOfCube[0], -y + posOfCube[1]];
}

// Rotates a 2D point about a point
// x: The x of the point that is supposed to be rotated
// y: The y of the point that is supposed to be rotated
// Theta: Angle of rotation in radians
// aboutX, aboutY: the coordinates about which the point is rotated
const Rotate = (x, y, Theta, aboutX, aboutY) => 
{
    const localizedPoint = [x - aboutX, y - aboutY];
    const rotatedLocalizedPoint = [(localizedPoint[0] * Math.cos(Theta)) - (localizedPoint[1] * Math.sin(Theta)),
                                   (localizedPoint[1] * Math.cos(Theta)) + (localizedPoint[0] * Math.sin(Theta))];
    const rotatedGlobalPoint = [rotatedLocalizedPoint[0] + aboutX, rotatedLocalizedPoint[1] + aboutY];
    return rotatedGlobalPoint;
};



//  Determines the appropriate size of the triangle level buttons
const levelSider = () => 
{
    if(canvas.height < canvas.width)
    {
        return canvas.height/14
    }
    else
    {
        return canvas.width/14
    }
};


// Gets the angle between two points
const angle = (x, y, x_2, y_2) => 
{
    return Math.atan2((y - y_2), (x_2 - x));
}

function openInNewTab(url) 
{
    var jar = window.open(url, '_blank');
    jar.focus();
}


//#endregion Helpers