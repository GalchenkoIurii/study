import {init} from "../app";
import filmData from "./data";

function filmDetails() {

let listMovies = document.querySelector('.list-movies');
listMovies.innerHTML = null;

function urlToString(url) {
    return url.slice(1).replace(/%20/g, " ");
}



function createFilmCard(film) {
    let genres = film.genres.join(", ");
    let directors = film.directors.map(element => {
        let str = '';
        return str += " " + element.name;
    });
    let writers = film.writers.map(element => {
        let str = '';
        return str += " " + element.name;
    });
    let html = 
    `<div class="col s12 m7">
    <h2 class="header">${film.title} (${film.year})</h2>
    <div class="card horizontal">
      <div class="card-image">
        <img src=${film.urlPoster}>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Genre: ${genres}</p>
          <p>Directors: ${directors}</p>
          <p>Writers: ${writers}</p>
          <p>Runtime: ${film.runtime}</p>
          <p>Rating: ${film.rating}</p>
          <p>Votes: ${film.votes}</p>
          <br>      
          <p>Plot: ${film.plot}</p>
        </div>
        <div class="card-action">
          <a class="goBackLink" >go back</a>
        </div>
      </div>
    </div>
  </div>`;
    listMovies.insertAdjacentHTML('beforeend', html);
}
    
function addEvents() {
  let filmPageLinks = document.querySelectorAll('.goBackLink');
  filmPageLinks.forEach((element) => {
    element.addEventListener('click', goBack);
  });
}
    
function goBack() {
  if (filmData.data.movies[filmData.data.movies.findIndex(item => item.title === urlToString(window.location.hash))]) {
    window.location.hash = "main";
  } else {
    window.location.hash = "inTheaters";
  }
  init();
}

console.log(urlToString(window.location.hash));

if (filmData.data.movies[filmData.data.movies.findIndex(item => item.title === urlToString(window.location.hash))]) {
    createFilmCard(filmData.data.movies[filmData.data.movies.findIndex(item => item.title === urlToString(window.location.hash))]);
} else {
    createFilmCard(filmData.data.inTheaters[1].movies[filmData.data.inTheaters[1].movies.findIndex(item => item.title === urlToString(window.location.hash))]);
}
    
addEvents();
}


export default filmDetails;