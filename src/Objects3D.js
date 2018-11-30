// Made for Logic Cubed
// We thank you for showing interest :)
// We exist on Github at https://github.com/meryminas/logicCubed.github.io/
// We also exist on Facebook:
// https://www.facebook.com/logicCubed/

//#region Drawable 3D Objects

// Eye candy 3D cube that responds to mouse movements
const Cube = {
    Qx: Math.PI/4,
    Qy: Math.PI/3,
    Qz: Math.PI/4,
    dx: 0, // delta x
    dy: 0, // delta y
    dz: 0, // delta z
    airResistance: 0.95,
    Size: 75,
    vertices: [[75,75,75],
               [75,75,-1 * 75],
               [75,-1 * 75,-1 * 75],
               [75,-1 * 75,75],
               [-1 * 75,-1 * 75,75],
               [-1 * 75,-1 * 75,-1 * 75],
               [-1 * 75,75,-1 * 75],
               [-1 * 75,75,75]],
    project: (x, y, z) => {
        // x rotation
        let xRotQz = x * Math.cos(Cube.Qz) + y * Math.sin(Cube.Qz);
        // y rotation
        let yRotQz = y * Math.cos(Cube.Qz) - x * Math.sin(Cube.Qz);
        // z rotation
        let zRotQz = z;
        // x 
        let xRotQzQx = xRotQz;
        // y
        let yRotQzQx = yRotQz * Math.cos(Cube.Qx) + zRotQz * Math.sin(Cube.Qx);
        // z
        let zRotQzQx = zRotQz * Math.cos(Cube.Qx) - yRotQz * Math.sin(Cube.Qx);
        //x
        let xRotQzQxQy = xRotQzQx * Math.cos(Cube.Qy) + zRotQzQx * Math.sin(Cube.Qy);
        //y
        let yRotQzQxQy = yRotQzQx;
        return [xRotQzQxQy, yRotQzQxQy];
    },
    draw: () => {
        context.fillStyle = rgba(Theme[1]);
        context.strokeStyle = rgba(Theme[0]);
        var verticesPixLoc = [];
        for(let i = 0; i < Cube.vertices.length; i++)
        {
            // locations
            let xyLoc = Cube.project(Cube.vertices[i][0], Cube.vertices[i][1], Cube.vertices[i][2]);
            let pixLoc = formXYtoPixels(xyLoc[0], xyLoc[1]);
            verticesPixLoc.push(pixLoc);
            context.beginPath();
            context.arc(pixLoc[0], pixLoc[1], 5, 0, 2 * Math.PI, false);
            context.fill();
            context.stroke();
        }
        // #region Edges
        
        context.strokeStyle = rgba(Theme[1]);
        // 0 to 1
        context.beginPath();
        context.moveTo(verticesPixLoc[0][0], verticesPixLoc[0][1]);
        context.lineTo(verticesPixLoc[1][0], verticesPixLoc[1][1]);
        context.stroke();
        context.fill()

        // 0 to 3
        context.beginPath();
        context.moveTo(verticesPixLoc[0][0], verticesPixLoc[0][1]);
        context.lineTo(verticesPixLoc[3][0], verticesPixLoc[3][1]);
        context.stroke();

        // 0 to 7
        context.beginPath();
        context.moveTo(verticesPixLoc[0][0], verticesPixLoc[0][1]);
        context.lineTo(verticesPixLoc[7][0], verticesPixLoc[7][1]);
        context.stroke();

        // 1 to 2
        context.beginPath();
        context.moveTo(verticesPixLoc[1][0], verticesPixLoc[1][1]);
        context.lineTo(verticesPixLoc[2][0], verticesPixLoc[2][1]);
        context.stroke();
        
        // 1 to 6
        context.beginPath();
        context.moveTo(verticesPixLoc[1][0], verticesPixLoc[1][1]);
        context.lineTo(verticesPixLoc[6][0], verticesPixLoc[6][1]);
        context.stroke();
        
        // 2 to 3
        context.beginPath();
        context.moveTo(verticesPixLoc[2][0], verticesPixLoc[2][1]);
        context.lineTo(verticesPixLoc[3][0], verticesPixLoc[3][1]);
        context.stroke();

        // 2 to 5
        context.beginPath();
        context.moveTo(verticesPixLoc[2][0], verticesPixLoc[2][1]);
        context.lineTo(verticesPixLoc[5][0], verticesPixLoc[5][1]);
        context.stroke();
        
        // 3 to 4
        context.beginPath();
        context.moveTo(verticesPixLoc[3][0], verticesPixLoc[3][1]);
        context.lineTo(verticesPixLoc[4][0], verticesPixLoc[4][1]);
        context.stroke();
        
        // 4 to 7
        context.beginPath();
        context.moveTo(verticesPixLoc[4][0], verticesPixLoc[4][1]);
        context.lineTo(verticesPixLoc[7][0], verticesPixLoc[7][1]);
        context.stroke();
        
        // 4 to 5
        context.beginPath();
        context.moveTo(verticesPixLoc[4][0], verticesPixLoc[4][1]);
        context.lineTo(verticesPixLoc[5][0], verticesPixLoc[5][1]);
        context.stroke();
        
        // 6 to 7
        context.beginPath();
        context.moveTo(verticesPixLoc[6][0], verticesPixLoc[6][1]);
        context.lineTo(verticesPixLoc[7][0], verticesPixLoc[7][1]);
        context.stroke();

        // 6 to 5
        context.beginPath();
        context.moveTo(verticesPixLoc[6][0], verticesPixLoc[6][1]);
        context.lineTo(verticesPixLoc[5][0], verticesPixLoc[5][1]);
        context.stroke();

        //#endregion Edges
    },
    update: () => {
        Cube.dx = t = Cube.airResistance * Cube.dx;
        Cube.Qx += Cube.dx;
        Cube.dy = Cube.airResistance * Cube.dy;
        Cube.Qy += Cube.dy;
        Cube.dz = Cube.airResistance * Cube.dz;
        Cube.Qz += Cube.dz;
        Cube.draw();
    }
}


//#endregion Drawable 3D Objects