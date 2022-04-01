import './style.css'
import { sections } from './catelog';
import { gsap } from "gsap"

const DOMSelectors = {
  card: document.querySelector(".card"),
  display: document.querySelector(".info"),

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
