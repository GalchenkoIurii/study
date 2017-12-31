import {init} from "../app";

function addNavbarEvents() {
let navbar = document.querySelector('.navbar-fixed');
navbar.outerHTML = navbar.outerHTML;

let inTheaters = document.querySelector('.btn-in-theaters');
inTheaters.addEventListener('click', filterInTheaters);

function filterInTheaters() {
    window.location.hash = "#inTheaters";
    init();
  }
}

export default addNavbarEvents;