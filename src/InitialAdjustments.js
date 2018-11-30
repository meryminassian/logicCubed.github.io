// Made for Logic Cubed
// We thank you for showing interest :)
// We exist on Github at https://github.com/meryminas/logicCubed.github.io/
// We also exist on Facebook:
// https://www.facebook.com/logicCubed/

//Get the canvas element
const canvas = document.querySelector("canvas");

// Get the canvas interface for 2d rendering
const context = canvas.getContext("2d");

// Colors used in this page, (black, primary, dark grey, grey, white)
const Theme = ["#000000", "#00ff00", "#101010", "#161616", "#ffffff"];

// Determine if it is the first time the player has opened the CTF using this browser
let firstTimePlaying = (() => 
{
    if(localStorage.getItem("first") === null || 
    localStorage.getItem("first") === undefined ||
    localStorage.getItem("first") === "true")
    {
        return true;
    }
    else
    {
        return false;
    }
})();

// Last recorded mouse location
let mouseLocation = [0,0];

// The position of the interactive 3D cube
let posOfCube = [canvas.width / 2, canvas. height / 2];