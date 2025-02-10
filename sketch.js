let mode = 0;
let i;
let counter = 0;

let addSymbol;
let term1;
let term2;
let typeAns;

let text1posX = 127;
let text2posX = 377;

let txtBox1W = 200;
let txtBox1H = 100;

let txtBox1 = false;
let txtBox2 = false;

let txtBox1fill = 255;
let txtBox1outline = 0;
let txtBox1Select = true;

let txtBox2fill = 255;
let txtBox2outline = 0;
let txtBox2Select = true;

let remainder = 0;

let equalsX = text2posX * 0.95 + (text2posX - (text1posX + text2posX) / 2);

let txtBox1X = 640;
let txtBox1Y = 176;

let correctFeedbackBoolean = false;
let wrongFeedbackBoolean = false;


function setup() {
  createCanvas(800, 400);
  typing();

  term1 = new Equation();
  term2 = new Equation();
  
}

function draw() {
  background(255);

  textFont("Figtree");

  // equation();
  addSymbol = new Equation(undefined, i);

  if (mode >= 1) {
    background(200);

    term1.show();
    term2.show();
    addSymbol.symbols();
    txtbox();

    if (correctFeedbackBoolean) {
      correctFeedback();
    }

    noStroke(0);
    fill(0);
    textSize(28);
    text(
      "Press 'M' to return to menu and 'N' for a new equation !",
      width / 2,
      65
    );

    if (mode != 3) {
      txtBox1outline = color(219, 150, 70);
    }
  }
  switch (mode) {
    case 0:
      menu();
      break;

    case 1:
      i = 0;

      print(term1.n + term2.n);
      break;

    case 2:
      i = 1;
      print(term1.n - term2.n);
      break;

    case 3:
      i = 3;

      print(int(term1.n / term2.n) + ", " + (term1.n % term2.n));
      textSize(66);

      fill(40);
      text("remainder :", width / 3, height - height / 7);

      fill(txtBox2fill);
      stroke(txtBox2outline);
      strokeWeight(4);
      rect(txtBox1X - txtBox1W / 4, height - height / 5, 100, 100);

      if (
        mouseX > txtBox1X - txtBox1W / 2 &&
        mouseX < txtBox1X + txtBox1W / 2 &&
        mouseY > txtBox1Y - txtBox1H / 2 &&
        mouseY < txtBox1Y + txtBox1H / 2 &&
        txtBox1Select
      ) {
        txtBox1fill = 180;

        if (mouseIsPressed) {
          txtBox1outline = color(219, 150, 70);
          txtBox2outline = 0;
          txtBox1Select = false;
          txtBox2Select = true;
          txtBox1 = true;
          txtBox2 = false;
        }
      } else {
        txtBox1fill = 255;
      }
      if (
        mouseX > txtBox1X - txtBox1W / 4 - 50 &&
        mouseX < txtBox1X - txtBox1W / 4 + 50 &&
        mouseY > height - height / 5 - 50 &&
        mouseY < height - height / 5 + 50 &&
        txtBox2Select
      ) {
        txtBox2fill = 180;

        if (mouseIsPressed) {
          txtBox2outline = color(219, 150, 70);
          txtBox1outline = 0;
          txtBox1Select = true;
          txtBox2Select = false;
          txtBox2 = true;
          txtBox1 = false;
        }
      } else {
        txtBox2fill = 255;
      }

      noStroke();
      fill(0);
      textAlign(CENTER);
      text(typeRemainder, width - 162 - txtBox1W / 4, height - height / 5 + 25);
      // if (term1.n % term2.n != 0) {
      //   term1 = new Equation(100, undefined, 300, 1000);
      //   term2 = new Equation(180, undefined, 2, 25);
      // }
      remainder = term1.n % term2.n;
      
      
            fill(0, 134, 255);
      text(counter, 40 , height - height / 7 + 5);
      break;
    case 4:
      i = 2;
      print(term1.n * term2.n);

      break;
  }
  if (wrongFeedbackBoolean) {
    wrongFeedback();
  }
  noStroke(0);
  fill(0);
}

function typing() {
  typeAns = "";
  typeRemainder = "";
}

function txtbox() {
  rectMode(CENTER);
  fill(txtBox1fill);
  stroke(txtBox1outline);
  strokeWeight(4);
  rect(txtBox1X, txtBox1Y, txtBox1W, txtBox1H);

  noStroke();
  fill(0);
  textAlign(CENTER);
  text(typeAns, txtBox1X, height / 2);
  textAlign(CENTER);
  text("=", equalsX, height / 2);
}

function correctFeedback() {
  
 
  fill(54, 120, 20);
  text("✓", 35, height / 2);

  if (mode == 3) {
    text("✓", 35, height - height / 7);
  

  }
}

function wrongFeedback() {

  fill(245, 78, 66);
  strokeWeight(20);
  stroke(245, 78, 66);
  //text("X", width/2, height / 2);
  line(100, -10, width - 100, height + 10);
  line(width - 100, -10, 100, height + 10);
}
