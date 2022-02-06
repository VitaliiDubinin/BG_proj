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

  if (selectedValue == "to center") {
    // console.log(5);
    // return selectedValue;
    // document.querySelector(".square").style.backgroundImage = `radial-gradient(${color1.value}, ${color2.value})`;
    document.body.style.backgroundImage = `radial-gradient(${color1.value}, ${color2.value})`;

    // return color1.value, color2.value;
  } else {
    // console.log(10);
    // document.querySelector(".square").style.backgroundImage = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`;
    document.body.style.backgroundImage = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`;
    // console.log(color1.value);
    // document.getElementById("codCol1").innerHTML = "color 1:  " + color1.value;
    // document.getElementById("codCol2").innerHTML = "color 2:  " + color2.value;
    // document.querySelector(".codCol").value = color1.value;
    // document.getElementById("codCol").value = color1.value;
  }
  document.getElementById("codCol1").innerHTML = "color 1:  " + color1.value;
  document.getElementById("codCol2").innerHTML = "color 2:  " + color2.value;
  // document.body.style.backgroundImage = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`;
};

form.addEventListener("change", setGradient);

//hints:  background-image: radial-gradient(#e66465, #9198e5);
