import './style.css'
import { sections } from './catelog';
import { islands } from './island';
import { gsap } from "gsap"

const DOMSelectors = {
  card: document.querySelector(".card"),
  display: document.querySelector(".info"),
  islanddisplay: document.querySelector(".islands"),
  beachdisplay: document.querySelector(".beaches"),
  volcanodisplay: document.querySelector(".valcanoes"),
  museumdisplay: document.querySelector(".museums"),
  btn: document.querySelector("#btn"),
  themebtn: document.getElementById("themebtn"),
};

sections.forEach((section, index) => {
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<h2 class="title">${section.name}</h2>
      <div class="card" id="${index}">
      <img class="img" src="${section.img}" alt="${section.name}">
      <div class="subtitle">${section.subname}</div>
      <p class="description">${section.description}</p>
      </div>`
  );
});

DOMSelectors.themebtn.addEventListener("click", function () {
  if (document.body.classList.contains("pinktheme")) {
    document.body.classList.add("bluetheme");
    document.body.classList.remove("pinktheme");
  } else {
    document.body.classList.add("pinktheme");
    document.body.classList.remove("bluetheme");
  }
});

islands.forEach((island, index) => {
  DOMSelectors.islanddisplay.insertAdjacentHTML(
    "afterbegin",
    `<div class="parent island-card" id="${index}">
      <div class="island-name">${island.name}</div>
      <img class="island-img" src="${island.img}" alt="${island.name}">
      <p class="island-description">${island.description}</p>
    </div>`
  );
});
