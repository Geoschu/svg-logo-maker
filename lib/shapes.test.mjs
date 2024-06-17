var shapes = require("./shapes.js");
var Circle = shapes.Circle;
var Triangle = shapes.Triangle;
var Square = shapes.Square;

describe("Circle", function () {
  it("should generate correct SVG", function () {
    var circle = new Circle("red");
    expect(circle.generateSVG()).toBe(
      '<circle cx="50%" cy="50%" r="50" fill="red"/>'
    );
  });
});

describe("Triangle", function () {
  it("should generate correct SVG", function () {
    var triangle = new Triangle("blue");
    expect(triangle.generateSVG()).toBe(
      '<polygon points="150,50 100,150 200,150" fill="blue"/>'
    );
  });
});

describe("Square", function () {
  it("should generate correct SVG", function () {
    var square = new Square("green");
    expect(square.generateSVG()).toBe(
      '<rect x="100" y="50" width="100" height="100" fill="green"/>'
    );
  });
});
