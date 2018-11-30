// Made for Logic Cubed
// We thank you for showing interest :)
// We exist on Github at https://github.com/meryminas/logicCubed.github.io/
// We also exist on Facebook:
// https://www.facebook.com/logicCubed/

//#region Drawable 2D Objects

// Creates a rectangle
const Box = (x, y, width, height, color, speedX, speedY, gravity, airResistance, spaceX, spaceY, context) => 
{
    const box = 
    {
        x: x,
        y: y,
        width: width,
        height: height,
        color: color, 
        speedX: speedX, 
        speedY: speedY, 
        gravity: gravity, 
        airResistance: airResistance, 
        spaceX: spaceX, 
        spaceY: spaceY, 
        context: context,
        draw: () => 
        {
            box.context.fillStyle = box.color;
            box.context.fillRect(box.x, box.y, box.width, box.height);
        },
        update: () => 
        {
            // X walls
            if(box.x > box.spaceX - box.width || box.x <= 0)
            {
                box.speedX *= -1; // Flips the velocity in X direction
            };
            // Y walls
            if(box.y > box.spaceY - box.height || box.y <= 0)
            {
                box.speedY *= -1; // Flips the velocity in Y direction
            } else if(gravity !== 0)
            {
                box.speedY += box.gravity;
            };
            // Object collision
            for(let p = 0; p < getWorld().length; p++)
            {
                if(this === getWorld()[p]){continue;};
                if
                (
                    // Top left
                    ((box.x >= getWorld()[p].x && box.x <= getWorld()[p].x + getWorld()[p].width) && 
                    (box.y >= getWorld()[p].y && box.y <= getWorld()[p].y + getWorld()[p].height)) || 
                    // Top right
                    ((box.x + box.width >= getWorld()[p].x && box.x + box.width <= getWorld()[p].x + getWorld()[p].width) && 
                    (box.y >= getWorld()[p].y && box.y <= getWorld()[p].y + getWorld()[p].height)) ||
                    // Bottom left
                    ((box.x >= getWorld()[p].x && box.x <= getWorld()[p].x + getWorld()[p].width) && 
                    (box.y + box.height >= getWorld()[p].y && box.y + box.height <= getWorld()[p].y + getWorld()[p].height)) ||
                    // Bottom right
                    ((box.x + box.width >= getWorld()[p].x && box.x + box.width <= getWorld()[p].x + getWorld()[p].width) && 
                    (box.y + box.height >= getWorld()[p].y && box.y + box.height <= getWorld()[p].y + getWorld()[p].height)) 
                    )
                {
                    let transferEnergyX = box.speedX;
                    let transferEnergyY = box.speedY;
                    box.speedX = getWorld()[p].speedX;
                    box.speedY = getWorld()[p].speedY;
                    getWorld()[p].speedX = transferEnergyX;
                    getWorld()[p].speedY = transferEnergyY;
                };
            }
                
            // Air resistance
            if(box.airResistance !== 0)
            {
                box.speedX *= box.airResistance;
                box.speedY *= box.airResistance;
                if(box.speedX <= 0.1){box.speedX = 0};
                if(box.speedY <= 0.1 && box.y - box.height === 0){box.speedY = 0; box.y = (box.spaceY - box.height)};
            }
            
            // Stuck check for beyond X walls
            if(box.x > box.spaceX + box.width + 1)
            {
                box.x = (box.spaceX - box.width - 1);
            } else
            {
                box.x = (box.x + (box.speedX / 2));
                box.y = (box.y + (box.speedY / 2));
            };
            
            //Stuck check for beyond Y walls
            if(box.y > box.spaceY + box.width + 1)
            {
                box.y = (box.spaceY - box.height - 1);
            } else
            {
                box.x = (box.x + (box.speedX / 2));
                box.y = (box.y + (box.speedY / 2));
            };
            box.draw();
        }
    }
    return box;
};



// Checked
const Circle = (point, radius, color, outlineColor, speedX, speedY, gravity, airResistance, spaceX, spaceY, context) => 
{
    let circle = 
    {
        x: point.x,
        y: point.y,
        radius: radius,
        color: color,
        outlineColor: outlineColor,
        speedX: speedX,
        speedY: speedY,
        gravity: gravity,
        airResistance: airResistance,
        spaceX: spaceX, 
        spaceY: spaceY, 
        context: context,
        draw: () => 
        {
            circle.context.fillStyle = circle.color;
            circle.context.beginPath();
            circle.context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
            circle.context.closePath();
            circle.context.fill()
            circle.context.fillStyle = circle.outlineColor;
            circle.context.stroke();
        },
        update: () => 
        {
            // X walls
            if(circle.x > circle.spaceX - circle.radius || circle.x <= 0)
            {
                circle.speedX *= -1; // Flips the velocity in X direction
            };

            // Y walls
            if(circle.y > circle.spaceY - circle.radius || circle.y <= 0)
            {
                circle.speedY *= -1; // Flips the velocity in Y direction
            } 
            else if(gravity !== 0)
            {
                circle.speedY += circle.gravity;
            };

            // Air resistance
            if(circle.airResistance !== 0)
            {
                circle.speedX *= circle.airResistance;
                circle.speedY *= circle.airResistance;
                if(circle.speedX <= 0.1){circle.speedX = 0};
                if(circle.speedY <= 0.1 && circle.y - circle.radius === 0){circle.speedY = 0; circle.y = (circle.spaceY - circle.radius)};
            }

            // Stuck check for beyond X walls
            if(circle.x > circle.spaceX + circle.radius + 1)
            {
                circle.x = (circle.spaceX - circle.radius - 1);
            } else
            {
                circle.x = (circle.x + (circle.speedX / 2));
                circle.y = (circle.y + (circle.speedY / 2));
            };

            //Stuck check for beyond Y walls
            if(circle.y > circle.spaceY + circle.radius + 1)
            {
                circle.y = (circle.spaceY - circle.radius - 1);
            } else
            {
                circle.x = (circle.x + (circle.speedX / 2));
                circle.y = (circle.y + (circle.speedY / 2));
            };
            circle.draw();
        }
    };
    return circle;
};
// Checked end



// Creates an octagon
const Octagon = (x, y, sides, floors, corners, color, outlineColor, speedX, speedY, gravity, airResistance, canvas, context) => 
{
    const octo = 
    {
        x: x,
        y: y,
        sides: sides,
        floors: floors,
        corners: corners,
        color: color,
        outlineColor: outlineColor,
        speedX: speedX, 
        speedY: speedY, 
        gravity: gravity, 
        airResistance: airResistance, 
        spaceX: canvas.width, 
        spaceY: canvas.height, 
        context: context,
        draw: () => 
        {
            octo.context.fillStyle = octo.color;
            octo.context.strokeStyle = octo.outlineColor;
            octo.context.beginPath();
            // Top left
            octo.context.moveTo(octo.x + (Math.sqrt(octo.corners)/2), octo.y);
            // Top Right
            octo.context.lineTo(octo.x + (Math.sqrt(octo.corners)/2) + octo.floors, octo.y);
            // Right mid top
            octo.context.lineTo(octo.x + octo.floors + Math.sqrt(octo.corners), octo.y + (Math.sqrt(octo.corners)/2));
            // Right mid bottom
            octo.context.lineTo(octo.x + octo.floors + Math.sqrt(octo.corners), octo.y + (Math.sqrt(octo.corners)/2) + octo.sides);
            // Bottom Right
            octo.context.lineTo(octo.x + (Math.sqrt(octo.corners)/2) + octo.floors, octo.y + Math.sqrt(octo.corners) + octo.sides);
            // Bottom Left
            octo.context.lineTo(octo.x + (Math.sqrt(octo.corners)/2), octo.y + Math.sqrt(octo.corners) + octo.sides);
            // Left mid bottom
            octo.context.lineTo(octo.x, octo.y + (Math.sqrt(octo.corners)/2) + octo.sides);
            // Left mid top
            octo.context.lineTo(octo.x, octo.y + (Math.sqrt(octo.corners)/2));
            // Top left
            octo.context.lineTo(octo.x + (Math.sqrt(octo.corners)/2), octo.y);
            octo.context.closePath();
            octo.context.stroke();
            octo.context.fill();
        }
    }
    return octo;
};



// Makes a rotatable triangle
const Triangle = (x, y, sides, color, strokeColor, orientation) => 
{
    const tri = {
        x: x,
        y: y,
        sides: sides,
        color: color,
        strokeColor: strokeColor,
        orientation: orientation,
        // 
        // Length of center to vert is side / sqrt(3)
        // 
        // top: [x, y - (sides / Math.sqrt(3))]
        // vertn: Rotate(x, y - (sides / Math.sqrt(3)), tri.orientation + n/3 * pi, x, y)
        vert1: Rotate(x, y - (sides / Math.sqrt(3)), orientation,                     x, y),
        vert2: Rotate(x, y - (sides / Math.sqrt(3)), orientation + 1/3 * Math.PI * 2, x, y),
        vert3: Rotate(x, y - (sides / Math.sqrt(3)), orientation + 2/3 * Math.PI * 2, x, y),
        draw: () => {
            context.fillStyle = tri.color;
            context.strokeStyle = tri.strokeColor;
            //Line(Point(vert1[0], vert1[1]), Point(vert2[0], vert2[1]), tri.strokeColor, context).draw();
            //Line(Point(vert2[0], vert2[1]), Point(vert3[0], vert3[1]), tri.strokeColor, context).draw();
            //Line(Point(vert3[0], vert3[1]), Point(vert1[0], vert1[1]), tri.strokeColor, context).draw();
            context.beginPath();
            context.moveTo(tri.vert1[0], tri.vert1[1]);
            context.lineTo(tri.vert2[0], tri.vert2[1]);
            context.lineTo(tri.vert3[0], tri.vert3[1]);
            context.lineTo(tri.vert1[0], tri.vert1[1]);
            context.closePath();
            context.fill();
            context.stroke();
        },
        update: () => {
            tri.draw();
        }
    }

    return tri;
};


// Creates the logo
const logoTRI = (x, y) => {
    const logoo = {
        x: x, 
        y: y,
        triangle1: Triangle(x, y, 100, rgba(Theme[1]), rgba(Theme[1]), 0),
        triangle3: Triangle(x, y, 150, rgba(Theme[0]), rgba(Theme[1]), 0),
        triangle2: Triangle(x + 15,  y - 8,  45, rgba(Theme[0]), rgba(Theme[0]), 0),
        draw: () => {
            logoo.triangle3.draw();
            logoo.triangle1.draw();
            logoo.triangle2.draw();
        },
        update: () => {logoo.draw()}
    }
    return logoo;
}



// Creates an array of triangles with text in them
const TextTri = (x, y, size, count, color, strokeColor, string, stringColor, font) =>
{
    const pop = {
        x: x,
        y: y,
        size: size,
        count: count,
        color: color, 
        strokeColor: strokeColor,
        font: font,
        string: string,
        stringColor: stringColor,
        draw: () => 
        {
            context.fillStyle = color;
            context.strokeStyle = strokeColor;
            for(let i = 0; i < count; i++)
            {
                Triangle(x + size * i/2, y - (((size/2) / Math.sqrt(3)) * (i % 2)), size, color, strokeColor, Math.PI * i).draw();
            }
            context.fillStyle = stringColor;
            context.font = font;
            context.fillText(string, x, y, size * count)
        }
    }

    return pop;
}

//#endregion Drawable 2D Objects