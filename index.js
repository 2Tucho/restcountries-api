//Localización del id de cada bandera: [i].cca3
//Localización de la bandera: [i].flags.png
//Localización del alt de la imagen: [i].flags.alt
//Localización del nombre: [i].name.common

function cardTemplate (eachCountry) {
  if (eachCountry.flags.alt === undefined) eachCountry.flags.alt = "This country's flag isn't explained in countries.api"
  return `<div class="card">
              <img id="${eachCountry.cca3}" src="${eachCountry.flags.png}" alt="${eachCountry.flags.alt}" />
              <h1 class="center">${eachCountry.name.common}</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");

fetch("https://restcountries.com/v3.1/all")
  .then(res => res.json())
  .then(function (countries) {
    // Here is where you'll need to add into the DOM all the countries received from API 
      countries.sort((a, b) => a.name.common.localeCompare(b.name.common))
      for (let i = 0; i < countries.length; i++) {
        countriesNode.innerHTML += cardTemplate(countries[i])
      }
    // 1 - We will need to iterate the countries variable with a loop
    // 2 - You can use the cardTemplate() function to create a div with a class card already styled
    // 💡 you can use countriesNode variable to add elements
  });

  //Funciona pero sin organizar alfabeticamente: 
  /* for (let i = 0; i < countries.length; i++) {
    //Ordenar el array de objetos por atributo: computadoras.sort((a, b) => a.name.common.localeCompare(b.name.common))
    countriesNode.innerHTML += cardTemplate(countries[i])
  } */

  
//Para el premium, ya están los paises organizados por continentes, se accede por [i].continents
let region = `
              
`