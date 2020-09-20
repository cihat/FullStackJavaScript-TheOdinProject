const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let cities = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function findMatches(wardToMarch, cities) {
  return cities.filter(place => {
    //here we need to figure out if the city on state matches what was searched 
    const regex = new RegExp(wardToMarch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  })
}

function displayMatches() {
  console.log(this.value);
}

const searchInput = document.querySelector('search');
const suggestions = document.querySelector('suggestions');

searchInput.addEventListener('change', displayMatches)