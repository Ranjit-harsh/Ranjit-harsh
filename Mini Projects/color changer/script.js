let btn1 = document.querySelector(".random");
let btn2 = document.querySelector(".applycolor");
let body = document.querySelector("body");
let input = document.querySelector("#input");
let currentColorValue = document.querySelector(".currentColorValue");
// console.log(btn1, btn2, body, input, currentColorValue);

const colorChanger = function (color) {
  body.style.background = color;
  currentColorValue.innerHTML = color;
};
const randomColorGenerator = function (
  randomcolor1,
  randomcolor2,
  randomcolor3,
) {
  let randomColorISgenerated = `linear-gradient(90deg, ${randomcolor1}, ${randomcolor2},${randomcolor3})`;
  //  let randomColorISgenerated ="rgba(${randomcolor1}"
  body.style.background = randomColorISgenerated;
  currentColorValue.innerHTML = `${randomColorISgenerated}`;
};

const handleRandomColorBtn = () => {
  let color1 = `rgb(${Math.ceil(Math.random() * 255)}, 
                       ${Math.ceil(Math.random() * 255)}, 
                       ${Math.ceil(Math.random() * 255)})`;

  let color2 = `rgb(${Math.ceil(Math.random() * 255)}, 
                       ${Math.ceil(Math.random() * 255)}, 
                       ${Math.ceil(Math.random() * 255)})`;

  let color3 = `rgb(${Math.ceil(Math.random() * 255)}, 
                       ${Math.ceil(Math.random() * 255)}, 
                       ${Math.ceil(Math.random() * 255)})`;
  randomColorGenerator(color1, color2, color3);
};

// const handleApplyColorBtn = ()=>{
//   body.style.background= input.value
//   currentColorValue.innerHTML=input.value
// }
const handleApplyColorBtn = () => {
  let color = input.value;
  colorChanger(color);
};

btn1.addEventListener("click", handleRandomColorBtn);
btn2.addEventListener("click", handleApplyColorBtn);
