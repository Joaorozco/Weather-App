let input = document.querySelector('#buscar-city')
let btn = document.querySelector('#btn-search');
let form = document.querySelector('.form-banner')
let city = document.querySelector('.city')

form.addEventListener('submit', e =>{
      e.preventDefault()
      let inputVal = input.value;
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=059f48aa09d3f5e12c3d673f18a64fe3&units=metric`)
                  .then(response => response.json())
                  .then(data => {
                        const { main, name, sys, weather} = data;

                        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
                        weather[0]["icon"]}.svg`;

                        const markup = `
                        <h2  class="city-name" data-name="${name}">
                        <span>${name}</span></h2>
                        <div class="city-temp">Temp: ${Math.round(main.temp)}<sup>°C</sup></div>
                        <div class="city-humidity">Humidity: ${main.humidity}<sup>%</sup></div>
                        <figure>
                              <img class="city-icon" src="${icon}">
                        </figure>`
                        city.innerHTML = markup;
                  }) 
})