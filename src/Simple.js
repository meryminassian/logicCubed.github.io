// Made for Logic Cubed
// We thank you for showing interest :)
// We exist on Github at https://github.com/meryminas/logicCubed.github.io/
// We also exist on Facebook:
// https://www.facebook.com/logicCubed/

//#region Simple

// Creates a 3D point
const Point3D = (x, y, z) => {
    // Check for bad input
    if( x === null || 
        x === undefined || 
        y === null || 
        y === undefined ||
        z === null || 
        z === undefined ||
        typeof(x) !== "number" ||
        typeof(y) !== "number" ||
        typeof(z) !== "number" ||
        x < 0 ||
        y < 0)
    {
        return null;
    }
    let point = {
        x: x,
        y: y,
        z: z
    }
    return point;
}



// Creates a 2D point
const Point = (x, y) => {
    // Check for bad input
    if( x === null || 
        x === undefined || 
        y === null || 
        y === undefined ||
        typeof(x) !== "number" ||
        typeof(y) !== "number" ||
        x < 0 ||
        y < 0)
    {
        return null;
    }
    let point = {
        x: x,
        y: y
    }
    return point;
}



// Creates a new line
const Line = (Point, Point_2, color, context) => {
    const line = {
        x: Point.x,
        y: Point.y,
        x_2: Point_2.x,
        y_2: Point_2.y,
        clr: color,
        context: context,
        draw: () => {
            line.context.fillStyle = line.clr;
            line.context.strokeStyle = line.clr;
            line.context.beginPath();
            line.context.moveTo(line.x, line.y);
            line.context.lineTo(line.x_2, line.y_2);
            line.context.closePath();
            line.context.stroke()
        }
    }
    
    return line;
}
// Checked end
    
//#endregion Simple