// index.js

import inquirer from "inquirer";
import fs from "fs";
import { Circle, Triangle, Square } from "./lib/shapes.js";

// Define the shapes and colors options
const shapes = [Circle, Triangle, Square];
const colors = ["#FF0000", "#00FF00", "#0000FF"];

// Function to validate color input
function isValidColor(color) {
  /*...*/
}

// Prompt the user for input
async function askUser() {
  /*...*/
}

// Function to generate SVG content based on user input
function generateSVG({ text, textColor, shape, shapeColor }) {
  let shapeInstance;

  switch (shape) {
    case "Circle":
      shapeInstance = new Circle(shapeColor);
      break;
    case "Triangle":
      shapeInstance = new Triangle(shapeColor);
      break;
    case "Square":
      shapeInstance = new Square(shapeColor);
      break;
  }

  let shapeSVG = shapeInstance.generateSVG();

  let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
                      ${shapeSVG}
                      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
                    </svg>`;

  return svgContent;
}

// Run the application
askUser();
