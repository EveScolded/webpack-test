import "../scss/main.scss";

import moment from "moment";

function testowa(Fname, Fage) {
  console.log(
    `Nazywam się ${Fname} i mam ${Fage} lat. Witam w moim frontendowym placu zabaw :)`
  );
}
testowa("Ewelina", 28);

// wyświetlanie daty i godziny

function setTime() {
  moment.locale("pl");
  const time = moment().format("LLLL");
  const timePlaceholder = document.querySelector(".timePlaceholder--js");
  timePlaceholder.innerHTML = time;
  setTimeout(setTime, 100);
} 

setTime();

// Hamburger menu

const myButton = document.querySelector(".navigation__button--js");

myButton.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--ON");
});

// Light mode

let isDark = true;

const lightButton = document.querySelector(".lightmode__button--js");

lightButton.addEventListener("click", () => {
  if (isDark == true) {
    document.documentElement.style.setProperty(
      "--background-color",
      "rgba(208, 211, 214, 0.9)"
    );
    document.documentElement.style.setProperty("--section-color", "black");
    document.documentElement.style.setProperty(
      "--sectionHeader-color",
      "#d01919"
    );
    document.documentElement.style.setProperty("--mainHeader-color", "#d01919");
    document.documentElement.style.setProperty(
      "--timePlaceholder-color",
      "#000000"
    );
    isDark = false;
    lightButton.innerHTML = "Dark mode";
  } else {
    document.documentElement.style.setProperty(
      "--background-color",
      "rgba(12, 13, 14, 50%)"
    );
    document.documentElement.style.setProperty("--section-color", "#fff");
    document.documentElement.style.setProperty(
      "--sectionHeader-color",
      "#fcbf49"
    );
    document.documentElement.style.setProperty("--mainHeader-color", "#fcbf49");
    document.documentElement.style.setProperty(
      "--timePlaceholder-color",
      "#fff"
    );
    isDark = true;
    lightButton.innerHTML = "Light mode";
  }
});
