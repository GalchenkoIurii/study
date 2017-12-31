import {init} from "../app";
import filmData from "./data";
import addNavbarEvents from "./navbarEvents";


function mainJS() {

/*axios.get('http://www.myapifilms.com/imdb/top?start=1&end=20&token=ebfb7525-3b98-4d85-b1ed-e1796c3b0087&data=1')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });*/

console.log(filmData);

let listMovies = document.querySelector('.list-movies');
listMovies.innerHTML = null;
addNavbarEvents();

function filmCard(film) {
  let html = `
  <div class="card col s3">
  <div class="card-image waves-effect waves-block waves-light">
    <img class="activator" src=${film.urlPoster}>
  </div>
  <div class="card-content"><span class="card-title activator grey-text text-darken-4">${film.title} (${film.year})<i class="material-icons right">more_vert</i></span>
  <p>Director: ${film.directors[0].name}</p>    
  </div>
  <div class="card-action">
  <a class="filmPageLink" name="${film.title}" >Show film page</a>
  </div>
  <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">${film.title}<i class="material-icons right">close</i></span>
    <p>${film.plot}</p>
  </div>
  </div>
  `;
  return html;
}

function addEvents() {
  let filmPageLinks = document.querySelectorAll('.filmPageLink');
  filmPageLinks.forEach((element) => {
    element.addEventListener('click', goToFilmPage);
  });
}

function renderInRows(arr, itemsInRow) {
  for (let i = 0; i < arr.length; i += itemsInRow) {
    let row = [];
    for (let j = 0; j < itemsInRow; j++) {
      row.push(arr[i + j]);
    }
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    listMovies.appendChild(rowDiv);
    row.forEach((element) => {
      let filmDiv = document.createElement('div');
      filmDiv.innerHTML = filmCard(element);
      rowDiv.appendChild(filmDiv);
      addEvents();
    });    
  }
}

function goToFilmPage() {
  window.location.hash = this.name;
  init();
}


renderInRows(filmData.data.movies, 4);
}

export default mainJS;