const { Circle, Triangle, Square } = require("./shapes.js");

describe("Shapes", () => {
  describe("Circle", () => {
    it("should render a green circle", () => {
      const shape = new Circle();
      shape.setColor("green");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="100" r="80" fill="green" />'
      );
    });
  });

  describe("Square", () => {
    it("should render a red square", () => {
      const shape = new Square();
      shape.setColor("red");
      expect(shape.render()).toEqual(
        '<rect x="60" y="10" width="180" height="180" fill="red" />'
      );
    });
  });

  describe("Triangle", () => {
    it("should render a blue Triangle", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });
});
