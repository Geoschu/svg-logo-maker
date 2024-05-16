// shapes.js
export class Circle {
  constructor(color) {
    this.color = color;
  }

  generateSVG() {
    return `<circle cx="50%" cy="50%" r="50" fill="${this.color}"/>`;
  }
}

export class Triangle {
  constructor(color) {
    this.color = color;
  }

  generateSVG() {
    return `<polygon points="150,50 100,150 200,150" fill="${this.color}"/>`;
  }
}

export class Square {
  constructor(color) {
    this.color = color;
  }

  generateSVG() {
    return `<rect x="100" y="50" width="100" height="100" fill="${this.color}"/>`;
  }
}
