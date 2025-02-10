let correctAns = false;

function keyPressed() {
  if (key == "m" || key == "M") {
    mode = 0;
    typeAns = "";
    typeRemainder = "";
    txtBox1 = false;
    txtBox2 = false;
    txtBox1Select = true;
    txtBox2Select = true;
    txtBox1outline = 0;
    txtBox2outline = 0;

    correctFeedbackBoolean = false;
    wrongFeedbackBoolean = false;
  }

  if (
    keyCode >= 48 &&
    keyCode <= 57 &&
    typeAns.length < 4 &&
    (txtBox1 || mode != 3)
  ) {
    typeAns = typeAns + key;
  }
  if (keyCode >= 48 && keyCode <= 57 && typeRemainder.length < 2 && txtBox2) {
    typeRemainder = typeRemainder + key;
  }
  if (keyCode == 8) {
    if (mode != 3 || txtBox1) {
      typeAns = typeAns.substring(0, typeAns.length - 1);
    }
    if (txtBox2) {
      typeRemainder = typeRemainder.substring(0, typeRemainder.length - 1);
    }
  }

  for (let j = 0; j < 4; j++) {
    if (keyCode == 13) {
      let division = term1.n / term2.n;

      let text = division.toString();
      let splitString = split(text, ".");
      let mathFunction = [
        term1.n + term2.n,
        term1.n - term2.n,
        splitString[0],
        term1.n * term2.n,
      ];

      if (mode == modeArray[j]) {
        if (typeAns == mathFunction[j] && typeRemainder == remainder) {
          print("Correct!");

          correctAns = true;
          wrongFeedbackBoolean = false;
          correctFeedbackBoolean = true;
        } else {
          print("Wrong!");
          correctFeedbackBoolean = false;
          wrongFeedbackBoolean = true;
          setTimeout(wrongAnswer, 1200);
        }
      }
    }
    if (key == "n" || key == "N") {
      newEquation();
    } else if (correctAns) {
      setTimeout(newEquation, 600);
    }
  }
  function newEquation() {
    for (let j = 0; j < 4; j++) {
      if (mode == modeArray[j]) {
        term1 = new Equation(text1posX, undefined, minRange1[j], maxRange1[j]);
        term2 = new Equation(text2posX, undefined, minRange2[j], maxRange2[j]);
        correctAns = false;

        if (mode == 3) {
          txtBox1 = false;
          txtBox2 = false;
          txtBox1Select = true;
          txtBox2Select = true;
          txtBox1outline = 0;
          txtBox2outline = 0;
        }
      }
 
      typeAns = "";
      typeRemainder = "";
    }

    correctFeedbackBoolean = false;
  }

  function wrongAnswer() {
    wrongFeedbackBoolean = false;
  }
}
