// Required processes defined here.
const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Square, Trangle } = require("./lib/shapes.js");
const SVG = require("./lib/svg");

// create prompts for user for options they wat to use on their logo. Then call a fuction to render logo.
inquirer
  .prompt([
    {
      message: "please enter up to three characters for the text on your logo",
      name: "logoText",

      validate: function (logoText) {
        if (logoText.length < 4) {
          return true;
        } else {
          console.log(
            `\n\n the maximun allowance for characters is three, please enter up to three characters\n`
          );
        }
      },
    },
    {
      type: "input",
      message:
        "please enter a color keyword or a hexadecimal number for the text color.",
      name: "textColor",
    },
    {
      type: "list",
      message: "please choose a shape for your logo.",
      name: "logoShape",
      choices: ["circle", "square", "triangle"],
    },
    {
      type: "input",
      message:
        "please enter a color keyword or a hexadecimal number for the color of the shape.",
      name: "shapeColor",
    },
  ])

  .then((res) => {
    let shape;
    if (res.logoShape === "circle") shape = new Circle();
    else if (res.logoShape === "square") shape = new Square();
    else shape = new Trangle();
    shape.setColor(res.shapeColor);
    const svg = new SVG();
    svg.setText(res.logoText, res.textColor);
    svg.setShape(shape);

    writeToFile("examples/logo.svg", svg.render());
  });

//This function writes the svg information to a file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.error("An error has occurred.", err)
      : console.log(`Generated logo.svg`)
  );
}
