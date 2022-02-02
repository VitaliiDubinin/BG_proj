let form = document.querySelector("form");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let direction = document.querySelectorAll('input[name="direction"]');

const setGradient = () => {
  let selectedValue;

  for (const sel of direction) {
    if (sel.checked) {
      selectedValue = sel.value;
    }
  }
  console.log(selectedValue);

  // const setGradient = () => {
  //   console.log(color1.value);
  //   console.log(color2.value);

  //   console.log(direction);
  //   console.log(direction[0].value);

  document.body.style.backgroundImage = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`;

  // document.getElementsByName(
  //   "square"
  // ).style.background = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`;

  // console.log(getElementsByClassName());

  // document.getElementById(
  //   "square"
  // ).style.backgroundImage = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`;

  // document.body.style.marginTop = "100px";

  // document.body.style.marginLeft = "50px";

  // document.getElementsById("square").style.marginLeft = "50px";
};

//   "linear-gradient(" + color1.value + "," + color2.value + ")";

// document;
form.addEventListener("change", setGradient);
