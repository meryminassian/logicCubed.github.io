// Made for Logic Cubed
// We thank you for showing interest :)
// We exist on Github at https://github.com/meryminas/logicCubed.github.io/
// We also exist on Facebook:
// https://www.facebook.com/logicCubed/

Maxout();
Cube.update();

function Run(){
    Maxout();
    Cube.update();
    window.requestAnimationFrame(Run)
}

Run();