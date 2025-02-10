let sign = ["+", "-", "×", " ÷"];

class Equation {
  constructor(x, i, minNum, maxNum) {
    this.minNum = minNum;
    this.maxNum = maxNum;
    this.n = int(random(this.minNum, this.maxNum));
    this.x = x;
    this.i = i;
  }
  show() {
    textSize(66);
    fill(0);
    textAlign(CENTER);
    text(this.n, this.x, height / 2);
  }

  symbols() {
   // textAlign(CENTER);
    text(sign[this.i], (text1posX + text2posX)/2, height/2);

  }
}
