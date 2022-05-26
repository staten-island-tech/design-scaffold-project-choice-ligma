import './style.css'
import { sections, foods, museums, beaches, cultures, histories, nature, volcanoes, legends, islands } from './catelog';
import { gsap } from "gsap";

const tl = gsap.timeline({ scrollTrigger: ".header-title", delay: 0.5 }); //sequence animations easily

tl.from("#header", { opacity: 0, duration: 1, ease: "ease-out" });
tl.from(".btn", { x: -1000, duration: 0.5, ease: "ease-out" });
tl.from(".island-card", { duration: 1, flip: "flip" });

const DOMSelectors = {
  card: document.querySelector(".card"),
  display: document.querySelector(".info"),
  fooddisplay: document.getElementById("foods"),
  museumdisplay: document.getElementById("museums"),
  beachdisplay: document.getElementById("beaches"),
  culturedisplay: document.getElementById("cultures"),
  historydisplay: document.getElementById("history"),
  naturedisplay: document.getElementById("nature"),
  volcanodisplay: document.getElementById("volcanoes"),
  legenddisplay: document.getElementById("legends"),
  islanddisplay: document.getElementById("islands"),
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
    `<div class="food card id="${index}">
      <div class="name">${food.name}</div>
      <img class="img" src="${food.img}" alt="${food.name}">
      <p class="description">${food.description}</p>
    </div>`
  );
});

museums.forEach((museum, index) => {
  DOMSelectors.museumdisplay.insertAdjacentHTML(
    "beforeend",
    `<div class="museums card id="${index}">
      <div class="name">${museum.name}</div> 
      <img class="img" src="${museum.img}" alt="${museum.name}">
      <p class="description">${museum.description}</p>
      </div>`
  );
});

beaches.forEach((beach, index) => {
  DOMSelectors.beachdisplay.insertAdjacentHTML(
    "beforeend",
    `<div class="beaches card id="${index}">
      <div class="name">${beach.name}</div> 
      <img class="img" src="${beach.img}" alt="${beach.name}">
      <p class="description">${beach.description}</p>
      </div>`
  );
});

cultures.forEach((culture, index) => {
  DOMSelectors.culturedisplay.insertAdjacentHTML(
    "beforeend",
    `<div class="cultures card id="${index}">
      <div class="name">${culture.name}</div> 
      <img class="img" src="${culture.img}" alt="${culture.name}">
      <p class="description">${culture.description}</p>
      </div>`
  );
});

histories.forEach((history, index) => {
  DOMSelectors.historydisplay.insertAdjacentHTML(
    "beforeend",
    `<div class="history card id="${index}">
      <div class="name">${history.name}</div> 
      <img class="img" src="${history.img}" alt="${history.name}">
      <p class="description">${history.description}</p>
      </div>`
  );
});

nature.forEach((nature, index) => {
  DOMSelectors.naturedisplay.insertAdjacentHTML(
    "beforeend",
    `<div class="nature card id="${index}">
      <div class="name">${nature.name}</div> 
      <img class="img" src="${nature.img}" alt="${nature.name}">
      <p class="description">${nature.description}</p>
      </div>`
  );
});

volcanoes.forEach((volcano, index) => {
  DOMSelectors.volcanodisplay.insertAdjacentHTML(
    "beforeend",
    `<div class="volcanoes card" id="${index}">
      <div class="name">${volcano.name}</div>
      <img class="img" src="${volcano.img}" alt="${volcano.name}">
      <p class="description">${volcano.description}</p>
    </div>`
  );
});

legends.forEach((legend, index) => {
  DOMSelectors.legenddisplay.insertAdjacentHTML(
    "beforeend",
    `<div class="legends card" id="${index}">
      <div class="name">${legend.name}</div>
      <img class="img" src="${legend.img}" alt="${legend.name}">
      <p class="description">${legend.description}</p>
    </div>`
  );
});

islands.forEach((island, index) => {
  DOMSelectors.islanddisplay.insertAdjacentHTML(
    "beforeend",
    `<div class="card island-card" id="${index}">
      <div class="name">${island.name}</div>
      <img class="island-img" src="${island.img}" alt="${island.name}">
      <p class="description">${island.description}</p>
    </div>`
  );
});
