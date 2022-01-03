let canvas = document.querySelector("canvas");

let index = 0;
(function type() {

  let msg = "Oops! We can't seem to find the page you were looking for."
  let letter = '';

  letter = msg.slice(0, ++index);
  document.querySelector('#text-msg').textContent = letter;
  setTimeout(type, 100)

}());

let ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let str = "A+新k js:2 @dfs 1京 tr Y動 ぜfds M5r P8実 #18 $!& ^dfs $Ew er JH # $ * . (! ;) ,: :";
let matrix = str.split("");
let font = 12;
let col = width / font;
let arr = [];

for (let i = 0; i < col; i++) {
  arr[i] = 1;
}

const draw = () => {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#00FF00";
  ctx.font = `${font}px serif`;

  for (let i = 0; i < arr.length; i++) {
    let txt = matrix[Math.floor(Math.random() * matrix.length)];
    ctx.fillText(txt, i * font, arr[i] * font);

    if (arr[i] * font > height && Math.random() > 0.975) {
      arr[i] = 0;
    }
    arr[i]++;
  }
}

setInterval(draw, 20);

window.addEventListener("resize", () => location.reload());