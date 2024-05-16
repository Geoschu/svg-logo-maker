// index.js
import inquirer from "inquirer";
import fs from "fs";
import { Circle, Triangle, Square } from "./lib/shapes.js";

// Define the shapes and colors options
const shapes = ["Circle", "Triangle", "Square"];

// Function to validate color input
function isValidColor(color) {
  const colorKeywords = [
    "red",
    "green",
    "blue",
    "cyan",
    "magenta",
    "yellow",
    "black",
    "white",
  ];
  return (
    colorKeywords.includes(color.toLowerCase()) ||
    /^#(?:[0-9a-fA-F]{3}){1,2}$/i.test(color)
  );
}

// Prompt the user for input
async function askUser() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the logo text:",
      validate: (value) =>
        value.length <= 3 || "Text must be up to three characters long.",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a text color (keyword or hexadecimal):",
      validate: (value) =>
        isValidColor(value) ||
        "Color must be a valid keyword or hexadecimal color.",
    },
    {
      type: "list",
      name: "shape",
      message: "Select a shape:",
      choices: shapes,
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter a shape color (keyword or hexadecimal):",
      validate: (value) =>
        isValidColor(value) ||
        "Color must be a valid keyword or hexadecimal color.",
    },
  ]);

  // Generate the SVG content based on user input
  const svgContent = generateSVG(answers);

  // Save the SVG content to a file
  let filename = `./examples/logo_${Date.now()}.svg`;
  fs.writeFile(`./examples/logo_${Date.now()}.svg`, svgContent, (err) => {
    if (err) throw err;
    console.log(`Generated ${filename} in /examples folder`);
  });
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
