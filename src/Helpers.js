// Made for Logic Cubed
// We thank you for showing interest :)
// We exist on Github at https://github.com/meryminas/logicCubed.github.io/
// We also exist on Facebook:
// https://www.facebook.com/logicCubed/

//#region Helpers

// turns csv into array
const addPoint = (x, y, z) => {
    return [x, y, z]
}



// stretches the canvas to be the size of the screen
const Maxout = () => {
    canvas.width = window.innerWidth - (window.outerWidth - window.innerWidth);
    canvas.height = window.innerHeight - (window.outerHeight - window.innerHeight);
    posOfCube = [canvas.width / 2, canvas. height / 2]
}
Maxout();



// Sets the score
const SetScore = (score) => {
    localStorage.setItem("score", toString(score));
}



// Gets the score from the local storage (10 mb max)
const GetScore = () => {
    if(firstTimePlaying){
        SetScore(0);
        return 0;
    }
    else
    {
        return parseInt(localStorage.getItem("score"));
    }
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


//#endregion Helpers