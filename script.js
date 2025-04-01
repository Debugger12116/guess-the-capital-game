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
const result = document.getElementById('rezultatas')
let i = 0
let score = 0
document.getElementById('pagrindinis').hidden = true
document.getElementById('pabaiga').hidden = true
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
    let atsakymas = document.getElementById('answer').value.trim()

    if(atsakymas.toLowerCase() === salis.capital.toLowerCase()) {
        score ++
        result.innerText = 'Teisingai'
        result.style.color = 'green'
        setTimeout(naujasKlausimas, 1000)
    } else {
        result.innerText = `Neteisingai. Teisingas atsakymas yra ${salis.capital}`
        result.style.color = 'red'
        setTimeout(naujasKlausimas, 1000)
    }
}

function naujasKlausimas() {
    result.innerText = ''

    if (i < skaicius) {
        salis = countries[Math.floor(Math.random() * countries.length)];
        document.getElementById('klausimas').innerText = `Parašyk šios šalies sostinę: ${salis.country}`
        i ++
    } else {
        gameOver()
    }

}


function gameOver() {
    /*let pavadinimas2 = document.getElementsByClassName('pavadinimas')
    let inputas2 = document.getElementById('saliuSkaiciausPasirinkimas')
    let saliuskaiciuklausimas2 = document.getElementById('saliuskaiciuklausimas')
    let saliuPasirinkimoMygtukas2 = document.getElementById('saliuPasirinkimoMygtukas')

    pavadinimas2.innerText = ''
    inputas2.style.display = 'hidden'
    saliuskaiciuklausimas2.innerText = 'Žaidimas baigėsi'
    saliuPasirinkimoMygtukas2.style.display = 'hidden'
    */
    document.getElementById('pagrindinis').hidden = true
    document.getElementById('pabaiga').hidden = false

    if (score === skaicius) {
        document.getElementById('pabaigosZinute').innerText = `Pabaiga. Rezultatas: ${score}/${skaicius}`
        document.getElementById('pabaigosZinute').style.color = 'red'
    } else {
        document.getElementById('pabaigosZinute').innerText = `Pabaiga. Rezultatas: ${score}/${skaicius}`
        document.getElementById('pabaigosZinute').style.color = 'red'
    }
    
    
}