
// Gets the document canvas and stores it into the canvas variable
const canvas = document.getElementById("canvas");
// Get the tools needed to draw in 2d 
const contex= canvas.getContex("2d");


// Returns an array of x, y lenghts
const getResolutionArray= () => 
{
	return [canvas.width, canvas.height];
};

// Sets the canvas width and height
const setResolutionArray = (arrayOfWidthAndHeight) => 
{
	// Check for bad input
	if(arrayOfWidthAndHeight[0] === null || arrayOfWidthAndHeight[1] === null || arrayOfWidthAndHeight[0] === undefined || arrayOfWidthAndHeight[1] === undefined){return null};
	if(typeOf(arrayOfWidthAndHeight[0]) !== "number"){return null;}
	if(typeOf(arrayOfWidthAndHeight[1]) !== "number"){return null;}
	// Set the canvas height and width
	canvas.width = arrayOfWidthAndHeight[0];
	canvas.height = arrayOfWidthAndHeight[1];
	// Indicate that the function has been called succesfully
	return true;
};


// Sets the canvas width and height
const setResolution = (width, height) => 
{
	// Check for bad input
	if(width === null || height === null || width === undefined || height === undefined){return null};
	if(typeOf(width) !== "number"){return null;}
	if(typeOf(height) !== "number"){return null;}
	// Set the canvas height and width
	canvas.width = width;
	canvas.height = height;
	// Indicate that the function has been called succesfully
	return true;
};

// TODO:
// 1. get set resolution with objects
// 2. Events for resolution change...
// 3. Types of devices