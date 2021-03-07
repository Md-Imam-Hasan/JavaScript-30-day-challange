const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities=[]
fetch(endpoint)
.then(res=>res.json())
.then(data=>cities.push(...data));
// console.log(cities);

function searchResult(res,cities){
  const resPlace = cities.filter(place =>{
    const regex = new RegExp(res,'gi');
    return place.city.match(regex)||place.state.match(regex)
  })
  // console.log(resPlace);
  return resPlace;
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatch(){
  const resToDispay=searchResult(this.value,cities);
  const html = resToDispay.map(place=>{
    const regex = new RegExp(this.value,'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `<li>
      <span className="name">${cityName},${stateName}</span>
      <span className="population">${numberWithCommas(place.population)}</span>
    </li>`
  }).join('');
  suggesion.innerHTML = html;
}
const input = document.querySelector('.search');
const suggesion = document.querySelector('.suggestions');

input.addEventListener('change',displayMatch);
input.addEventListener('keyup',displayMatch);