let minRange1 = [50, 500, 300, 11];
let maxRange1 = [499, 999, 999, 99];
let minRange2 = [50, 50, 2, 11];
let maxRange2 = [499, 499, 25, 99];

let modeArray = [1, 2, 3, 4];

let optionsX = [0, 1 / 2, 0, 1 / 2];
let optionsY = [0, 0, 1 / 2, 1 / 2];
let optionsColor = [120, 150, 150, 120];
let optionsText = ["Addition", "Subtraction",  "Division", "Multiplication"];
let oTX = [1 / 4, 3 / 4, 1 / 4, 3 / 4];
let oTY = [1 / 3.25, 1 / 3.25, 4 / 5, 4 / 5];

let mouseIsReleased = false;

function menu() {
  for (let j = 0; j < 4; j++) {
    if (
      mouseX > width * optionsX[j] &&
      mouseX < width * optionsX[j] + width / 2 &&
      mouseY > height * optionsY[j] &&
      mouseY < height * optionsY[j] + height / 2
    ) {
      optionsColor[j] = 60;

      if (mouseIsPressed) {
        mode = modeArray[j];
        term1 = new Equation(text1posX, undefined, minRange1[j], maxRange1[j]);
        term2 = new Equation(text2posX, undefined, minRange2[j], maxRange2[j]);
      }
    } else {
      optionsColor = [120, 150, 150, 120];
    }
    rectMode(CORNER);
    fill(optionsColor[j]);
    rect(width * optionsX[j], height * optionsY[j], width / 2, height / 2);

    noStroke();
    textAlign(CENTER);
    textSize(54);
    fill(222);
    text(optionsText[j], width * oTX[j], height * oTY[j]);
  }
}

function mouseReleased() {
  mouseIsReleased = true;
}
