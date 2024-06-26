const temperatureField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dataField = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");

let target = "mumbai";

const fetchData = async(target)=>{
    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=13feccae0b2e4b47a59185354242003&q=${target}`;

    const response = await fetch(url);
    const data = await response.json();

    // console.log(data);

    const {
        current: {
            temp_c,
            condition:{text, icon}
        },
        location: {
            name,
            localtime
        }
    } = data;

    updateDom(temp_c, name, localtime, icon, text);
    } catch (error) {
        alert("Location Not Found");
    }
}

function updateDom(tempertaure, city, time, emoji, text){
    temperatureField.innerText = tempertaure +"° ";
    cityField.innerText = city;
    const exactTime = time.split(" ")[1];
    const exactDate = time.split(" ")[0];
    const exactDay = getDay(new Date().getDay());
    
    dataField.innerText = `${exactTime} - ${exactDay} ${exactDate}`;
    emojiField.src = emoji;
    weatherField.innerText = text;
}

fetchData(target);

function getDay(dayNum){
    const arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return arr[dayNum];
}

function search(e){
    e.preventDefault();
    target = searchField.value;
    fetchData(target);
};

form.addEventListener("submit", search)

