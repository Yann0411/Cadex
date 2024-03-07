const array1 = ["Orange", "Pomme", "Citron"];
const array2 = ["Tomate", "Carrote", "Comcombre"];
const array4 = ["Bonbon", "Gateaux", "Jus"];
const animals = ["duck", "bison", "elephant", "ant", "camel"];

const arrayElm = document.getElementById("array");

const ulElm = document.createElement("ul");
ulElm.classList.add("ulElm");
arrayElm.appendChild(ulElm);

function CreateliElm(arrayContent) {
    const liElm = document.createElement("li");
    liElm.classList.add("liElm");
    liElm.textContent = arrayContent;
    ulElm.appendChild(liElm);
}
const melange = shuffle(animals);

animals.forEach((animal) => {
    CreateliElm(animal);
});

function shuffle(array) {
    let currentIndex = array.length; let
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}


console.log(melange);
