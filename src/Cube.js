// Made for Logic Cubed
// We thank you for showing interest :)
// We exist on Github at https://github.com/meryminas/logicCubed.github.io/
// We also exist on Facebook:
// https://www.facebook.com/logicCubed/

//#region Drawable 3D Objects

// Eye candy 3D cube that responds to mouse movements
const Cube = (Size) => {
    const cube = {
        Qx: Math.PI/4,
        Qy: Math.PI/3,
        Qz: Math.PI/4,
        dx: 0, // delta x
        dy: 0, // delta y
        dz: 0, // delta z
        color: "rgba(0, 255, 0, 1)",
        airResistance: 0.95,
        Size: Size,
        vertices: [[Size, Size, Size],
                   [Size, Size, -1 * Size],
                   [Size, -1 * Size, -1 * Size],
                   [Size, -1 * Size, Size],
                   [-1 * Size, -1 * Size, Size],
                   [-1 * Size, -1 * Size, -1 * Size],
                   [-1 * Size, Size, -1 * Size],
                   [-1 * Size, Size, Size]],
        SetSize:(size) => {
            cube.vertices = [[size, size, size],
                            [size, size, -1 * size],
                            [size, -1 * size, -1 * size],
                            [size, -1 * size, size],
                            [-1 * size, -1 * size, size],
                            [-1 * size, -1 * size, -1 * size],
                            [-1 * size, size, -1 * size],
                            [-1 * size, size, size]];
            cube.Size = size;
        },
        SetColor: (color) => 
        {
            cube.color = color;
        },
        project: (x, y, z) => {
            // x rotation
            let xRotQz = x * Math.cos(cube.Qz) + y * Math.sin(cube.Qz);
            // y rotation
            let yRotQz = y * Math.cos(cube.Qz) - x * Math.sin(cube.Qz);
            // z rotation
            let zRotQz = z;
            // x 
            let xRotQzQx = xRotQz;
            // y
            let yRotQzQx = yRotQz * Math.cos(cube.Qx) + zRotQz * Math.sin(cube.Qx);
            // z
            let zRotQzQx = zRotQz * Math.cos(cube.Qx) - yRotQz * Math.sin(cube.Qx);
            //x
            let xRotQzQxQy = xRotQzQx * Math.cos(cube.Qy) + zRotQzQx * Math.sin(cube.Qy);
            //y
            let yRotQzQxQy = yRotQzQx;
            return [xRotQzQxQy, yRotQzQxQy];
        },
        draw: () => {
            context.fillStyle = cube.color;
            context.strokeStyle = rgba(Theme[0]);
            var verticesPixLoc = [];
            for(let i = 0; i < cube.vertices.length; i++)
            {
                // locations
                let xyLoc = cube.project(cube.vertices[i][0], cube.vertices[i][1], cube.vertices[i][2]);
                let pixLoc = formXYtoPixels(xyLoc[0], xyLoc[1]);
                verticesPixLoc.push(pixLoc);
                context.beginPath();
                context.arc(pixLoc[0], pixLoc[1], 5, 0, 2 * Math.PI, false);
                context.fill();
                context.stroke();
            }


            // #region Edges

            context.strokeStyle = cube.color;
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
            cube.dx = t = cube.airResistance * cube.dx;
            cube.Qx += cube.dx;
            cube.dy = cube.airResistance * cube.dy;
            cube.Qy += cube.dy;
            cube.dz = cube.airResistance * cube.dz;
            cube.Qz += cube.dz;
            cube.draw();
        }
    }

    return cube;
}


const Cubely = Cube(50);
//#endregion Drawable 3D Objects