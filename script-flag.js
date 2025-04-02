const countries = [
    { country: "Albanija", capital: "Tirana", abbreviation: "AL" },
    { country: "Andora", capital: "Andora", abbreviation: "AD" },
    { country: "Austrija", capital: "Viena", abbreviation: "AT" },
    { country: "Belgija", capital: "Briuselis", abbreviation: "BE" },
    { country: "Bosnija ir Hercegovina", capital: "Sarajevas", abbreviation: "BA" },
    { country: "Bulgarija", capital: "Sofija", abbreviation: "BG" },
    { country: "Kroatija", capital: "Zagrebas", abbreviation: "HR" },
    { country: "Kipras", capital: "Nikosija", abbreviation: "CY" },
    { country: "Čekija", capital: "Praha", abbreviation: "CZ" },
    { country: "Danija", capital: "Kopenhaga", abbreviation: "DK" },
    { country: "Estija", capital: "Talinas", abbreviation: "EE" },
    { country: "Suomija", capital: "Helsinkis", abbreviation: "FI" },
    { country: "Prancūzija", capital: "Paryžius", abbreviation: "FR" },
    { country: "Vokietija", capital: "Berlynas", abbreviation: "DE" },
    { country: "Graikija", capital: "Atėnai", abbreviation: "GR" },
    { country: "Vengrija", capital: "Budapeštas", abbreviation: "HU" },
    { country: "Islandija", capital: "Reikjavikas", abbreviation: "IS" },
    { country: "Airija", capital: "Dublinas", abbreviation: "IE" },
    { country: "Italija", capital: "Roma", abbreviation: "IT" },
    { country: "Latvija", capital: "Ryga", abbreviation: "LV" },
    { country: "Lichtenšteinas", capital: "Vaducas", abbreviation: "LI" },
    { country: "Lietuva", capital: "Vilnius", abbreviation: "LT" },
    { country: "Liuksemburgas", capital: "Liuksemburgas", abbreviation: "LU" },
    { country: "Malta", capital: "Valeta", abbreviation: "MT" },
    { country: "Moldova", capital: "Kišiniovas", abbreviation: "MD" },
    { country: "Monakas", capital: "Monakas", abbreviation: "MC" },
    { country: "Juodkalnija", capital: "Podgorica", abbreviation: "ME" },
    { country: "Nyderlandai", capital: "Amsterdamas", abbreviation: "NL" },
    { country: "Šiaurės Makedonija", capital: "Skopjė", abbreviation: "MK" },
    { country: "Norvegija", capital: "Oslas", abbreviation: "NO" },
    { country: "Lenkija", capital: "Varšuva", abbreviation: "PL" },
    { country: "Portugalija", capital: "Lisabona", abbreviation: "PT" },
    { country: "Rumunija", capital: "Bukareštas", abbreviation: "RO" },
    { country: "San Marinas", capital: "San Marinas", abbreviation: "SM" },
    { country: "Serbija", capital: "Belgradas", abbreviation: "RS" },
    { country: "Slovakija", capital: "Bratislava", abbreviation: "SK" },
    { country: "Slovėnija", capital: "Liubliana", abbreviation: "SI" },
    { country: "Ispanija", capital: "Madridas", abbreviation: "ES" },
    { country: "Švedija", capital: "Stokholmas", abbreviation: "SE" },
    { country: "Šveicarija", capital: "Bernas", abbreviation: "CH" },
    { country: "Ukraina", capital: "Kijevas", abbreviation: "UA" },
    { country: "Didžioji Britanija", capital: "Londonas", abbreviation: "GB" },
    { country: "Vatikanas", capital: "Vatikanas", abbreviation: "VA" },
    { country: "Andora", capital: "Andora", abbreviation: "AD"}
];


const pagrindinis2 = document.getElementById('pagrindinis')
const pabaiga2 = document.getElementById('pabaiga')
const result = document.getElementById('rezultatas')
const mygtukas = document.getElementById('saliuPasirinkimoMygtukas')
const atsMygtukas2 = document.getElementById("atsMygtukas")
const klausimasSalys2 = document.getElementById('klausimasSalys')
const answer2 = document.getElementById("answer")
const rez2 = document.getElementById('rez')
const klausimas2 = document.getElementById('klausimas')
const pabaigosZinute2 = document.getElementById('pabaigosZinute')
const playAgain2 = document.getElementById('playAgain')
const veliava2 = document.getElementById('veliava')


function imposeMinMax(el) {
    if (el.value === "") {
      el.value = 1
    }; // Don't validate empty inputs
    
    const value = parseInt(el.value);
    if (isNaN(value)) {
      el.value = 1; // Default to 1 if not a number
      return;
    }
    
    if (value < 1) {
      el.value = 1;
    } else if (value > countries.length) {
      el.value = countries.length;
    }
  }

let i = 0
let selectedCountries = []
let score = 0
pagrindinis2.hidden = true
pabaiga2.hidden = true
let skaicius;
let salis;
let curentCountry
let isCheckingAnswer = false;





mygtukas.onclick = mygtukopaspaudimas
atsMygtukas2.onclick = checkAnswer
playAgain2.onclick = funkcijaReload

function funkcijaReload() {
    location.reload()
}



function mygtukopaspaudimas() {
    skaicius = document.getElementById('saliuSkaiciausPasirinkimas').value
    klausimasSalys2.hidden = true
    pagrindinis2.hidden = false
    selectedCountries = [...countries].sort(() => 0.5 - Math.random()).slice(0, skaicius);
    naujasKlausimas()
}

answer2.addEventListener("keypress", function(event) {
    if (event.key === "Enter" && !isCheckingAnswer) {
        checkAnswer();
    }
});


function checkAnswer() {
    isCheckingAnswer = true;
    atsMygtukas2.disabled = "disabled";
    let atsakymas = answer2.value.trim()

    if(atsakymas.toLowerCase() === curentCountry.country.toLowerCase()) {
        score ++
        result.innerText = 'Teisingai'
        result.style.color = 'green'
        rez2.innerText = `${score}/${i}`
        setTimeout(naujasKlausimas, 1000)
    } else {
        result.innerText = `Neteisingai. Teisingas atsakymas yra ${curentCountry.country}`
        result.style.color = 'red'
        rez2.innerText = `${score}/${i}`
        setTimeout(naujasKlausimas, 2000)
    }
}

function naujasKlausimas() {
    // First check if there are any countries left
    if (selectedCountries.length === 0) {
        gameOver();
        return; // Exit the function early
    }
    
    // Then get a new country
    curentCountry = selectedCountries.pop();
    
    // Now you can safely use curentCountry
    veliava2.src = `https://flagcdn.com/w320/${curentCountry.abbreviation.toLowerCase()}.png`;
    rez2.innerText = `${score}/${i}`;
    
    // Reset UI elements
    isCheckingAnswer = false;
    atsMygtukas2.disabled = "";
    answer2.value = '';
    result.innerText = '';
    
    klausimas2.innerText = 'Parašyk šios šalies pavadinimą';
    i++;
}


function gameOver() {

    pagrindinis2.hidden = true
    pabaiga2.hidden = false

    if (score >= skaicius) {
        pabaigosZinute2.innerText = `Pabaiga. Rezultatas: ${score}/${skaicius}`
        pabaigosZinute2.style.color = 'green'
    } else {
        pabaigosZinute2.innerText = `Pabaiga. Rezultatas: ${score}/${skaicius}`
    }
    
    
}