const countries = [
    { country: "Albania", capital: "Tirana" },
    { country: "Andorra", capital: "Andorra la Vella" },
    { country: "Austria", capital: "Vienna" },
    { country: "Belarus", capital: "Minsk" },
    { country: "Belgium", capital: "Brussels" },
    { country: "Bosnia and Herzegovina", capital: "Sarajevo" },
    { country: "Bulgaria", capital: "Sofia" },
    { country: "Croatia", capital: "Zagreb" },
    { country: "Cyprus", capital: "Nicosia" },
    { country: "Czech Republic", capital: "Prague" },
    { country: "Denmark", capital: "Copenhagen" },
    { country: "Estonia", capital: "Tallinn" },
    { country: "Finland", capital: "Helsinki" },
    { country: "France", capital: "Paris" },
    { country: "Germany", capital: "Berlin" },
    { country: "Greece", capital: "Athens" },
    { country: "Hungary", capital: "Budapest" },
    { country: "Iceland", capital: "Reykjavik" },
    { country: "Ireland", capital: "Dublin" },
    { country: "Italy", capital: "Rome" },
    { country: "Latvia", capital: "Riga" },
    { country: "Liechtenstein", capital: "Vaduz" },
    { country: "Lithuania", capital: "Vilnius" },
    { country: "Luxembourg", capital: "Luxembourg" },
    { country: "Malta", capital: "Valletta" },
    { country: "Moldova", capital: "Chisinau" },
    { country: "Monaco", capital: "Monaco" },
    { country: "Montenegro", capital: "Podgorica" },
    { country: "Netherlands", capital: "Amsterdam" },
    { country: "North Macedonia", capital: "Skopje" },
    { country: "Norway", capital: "Oslo" },
    { country: "Poland", capital: "Warsaw" },
    { country: "Portugal", capital: "Lisbon" },
    { country: "Romania", capital: "Bucharest" },
    { country: "San Marino", capital: "San Marino" },
    { country: "Serbia", capital: "Belgrade" },
    { country: "Slovakia", capital: "Bratislava" },
    { country: "Slovenia", capital: "Ljubljana" },
    { country: "Spain", capital: "Madrid" },
    { country: "Sweden", capital: "Stockholm" },
    { country: "Switzerland", capital: "Bern" },
    { country: "Ukraine", capital: "Kyiv" },
    { country: "United Kingdom", capital: "London" },
    { country: "Vatican City", capital: "Vatican City" }
];
let i = 0
document.getElementById('pagrindinis').hidden = true
let skaicius;
let salis;
const mygtukas = document.getElementById('saliuPasirinkimoMygtukas')
mygtukas.onclick = mygtukopaspaudimas




function mygtukopaspaudimas() {
    skaicius = document.getElementById('saliuSkaiciausPasirinkimas').value
    document.getElementById('klausimasSalys').hidden = true
    document.getElementById('pagrindinis').hidden = false
    naujasKlausimas()
}

document.getElementById("atsMygtukas").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
}); 

document.getElementById("atsMygtukas").onclick = checkAnswer

function checkAnswer() {
    //
}

function naujasKlausimas() {

    if (i < skaicius) {
        salis = countries[Math.floor(Math.random() * countries.length)];
        document.getElementById('klausimas').innerText = `Parašyk šios šalies sostinę: ${salis.country}`
    } else {
        // gameOver()
    }

}


