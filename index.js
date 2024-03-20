const temperatureField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dataField = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
// const searchField = document.querySelector(".searchField");
// const form = document.querySelector("form");

let target = "indore";

const fetchData = async()=>{
    const url = `https://api.weatherapi.com/v1/current.json?key=13feccae0b2e4b47a59185354242003&q=${target}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    updateDom(data.current.temp_c);
}

function updateDom(tempertaure){
    temperatureField.innerText = tempertaure;
}

fetchData();
