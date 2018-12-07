// Made for Logic Cubed
// We thank you for showing interest :)
// We exist on Github at https://github.com/meryminas/logicCubed.github.io/
// We also exist on Facebook:
// https://www.facebook.com/logicCubed/

//Get the canvas element
const canvas = document.querySelector("canvas");

// Get the canvas interface for 2d rendering
const context = canvas.getContext("2d");

// Colors used in this page
const Theme = [
    [0, 0, 0, 1], // Black
    [0, 255, 0, 1], // Green
    [10, 10, 10, 1], // Dark Grey
    [16, 16, 16, 1], // Grey
    [255, 255, 255, 1] // White
]; 

let cubeSizer = 0;
let Input = "";


let AnimationCompleteness = {
    Background: 0,
    Cube: 100,
    Text: 2,
    Selector: 0,
    logo: 0,
    lvl1: 0,
    lvl2: 0,
    lvl3: 0,
    lvl4: 0,
    lvl5: 0,
    poplvl1: 0,
    poplvl2: 0,
    poplvl3: 0,
    poplvl4: 0,
    poplvl5: 0,
    readme: 0,
    poplvl1Bool: false,
    poplvl2Bool: false,
    poplvl3Bool: false,
    poplvl4Bool: false,
    poplvl5Bool: false,
    readmeBool: false,
    contentlvl1: 0,
    contentlvl2: 0,
    contentlvl3: 0,
    contentlvl4: 0,
    contentlvl5: 0,
    contentreadme: 0
};

// Determine if it is the first time the player has opened the CTF using this browser
let firstTimePlaying = (() => 
{
    if(localStorage.getItem("first") === null || 
    localStorage.getItem("first") === undefined ||
    localStorage.getItem("first") === "true")
    {
        localStorage.setItem("first", "false");
        localStorage.setItem("score", "0");
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
let posOfCube = [canvas.width / 2, canvas.height / 2];

// Listen to the first page
let listenEntry = false;
// Trigger transmission to the level selector page
let goToSelector = false;

