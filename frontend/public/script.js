/*
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
*/

const loadEvent = async function () {
    const rootElement = document.getElementById("root");

    /* a fetch függvény azonnal objektummá formálódik, ennek az objektumnak a metódusa a .then() */

    /* fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(function (response){
        console.log(response);
        return response.json()

    })

    .then(function (json){
        console.log(json.date)
        rootElement.insertAdjacentHTML("beforeend", `
        <img src="${json.hdurl}">
        `)
    }) */

    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
    const responseJson = await response.json();

    rootElement.insertAdjacentHTML("beforeend", `
    <img src="${responseJson.hdurl}">
    `)
}

window.addEventListener("load", loadEvent)