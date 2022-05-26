import './style.css'
import { sections, foods, museums, beaches, cultures, volcanoes, islands } from './catelog';
import { gsap } from "gsap";

const tl = gsap.timeline({ scrollTrigger: ".header-title", delay: 0.5 }); //sequence animations easily

tl.from("#header", { opacity: 0, duration: 1, ease: "ease-out" });
tl.from(".btn", { x: -500, duration: 0.5, ease: "ease-out" });
tl.from(".island-card", { duration: 1, flip: "flip" });

const DOMSelectors = {
  card: document.querySelector(".card"),
  display: document.querySelector(".info"),
  islanddisplay: document.querySelector(".islands"),
  beachdisplay: document.querySelector(".beaches"),
  culturedisplay: document.querySelector(".cultures"),
  volcanodisplay: document.querySelector(".volcanoes"),
  fooddisplay: document.querySelector(".foods"),
  museumdisplay: document.querySelector(".museums"),
  btn: document.querySelector(".btn"),
  themebtn: document.getElementById("themebtn"),
};

DOMSelectors.themebtn.addEventListener("click", function () {
  if (document.body.classList.contains("pinktheme")) {
    document.body.classList.add("bluetheme");
    document.body.classList.remove("pinktheme");
  } else {
    document.body.classList.add("pinktheme");
    document.body.classList.remove("bluetheme");
  }
});

foods.forEach((food, index) => {
  DOMSelectors.fooddisplay.insertAdjacentHTML(
    "beforeend",
    `<div class="foods parent card id="${index}">
      <div class="name">${food.name}</div>
      <img class="img" src="${food.img}" alt="${food.name}">
      <p class="description">${food.description}</p>
    </div>`
  );
});

museums.forEach((museum, index) => {
  DOMSelectors.museumdisplay.insertAdjacentHTML(
    "beforeend",
    `<div class="museums parent card id="${index}">
      <div class="name">${museum.name}</div> 
      <img class="img" src="${museum.img}" alt="${museum.name}">
      <p class="description">${museum.description}</p>
      </div>`
  );
});

beaches.forEach((beach, index) => {
  DOMSelectors.beachdisplay.insertAdjacentHTML(
    "beforeend",
    `<div class="beaches parent card id="${index}">
      <div class="name">${beach.name}</div> 
      <img class="img" src="${beach.img}" alt="${beach.name}">
      <p class="description">${beach.description}</p>
      </div>`
  );
});

cultures.forEach((culture, index) => {
  DOMSelectors.culturedisplay.insertAdjacentHTML(
    "beforeend",
    `<div class="cultures parent card id="${index}">
      <div class="name">${culture.name}</div> 
      <img class="img" src="${culture.img}" alt="${culture.name}">
      <p class="description">${culture.description}</p>
      </div>`
  );
});

volcanoes.forEach((volcano, index) => {
  DOMSelectors.volcanodisplay.insertAdjacentHTML(
    "beforeend",
    `<div class="volcanoes parent card" id="${index}">
      <div class="name">${volcano.name}</div>
      <img class="img" src="${volcano.img}" alt="${volcano.name}">
      <p class="description">${volcano.description}</p>
    </div>`
  );
});

islands.forEach((island, index) => {
  DOMSelectors.islanddisplay.insertAdjacentHTML(
    "beforeend",
    `<div class="islands parent card island-card" id="${index}">
      <div class="name">${island.name}</div>
      <img class="island-img" src="${island.img}" alt="${island.name}">
      <p class="description">${island.description}</p>
    </div>`
  );
});
