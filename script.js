const countries = [
    {country: "Albanija", capital: "Tirana" },
    { country: "Andora", capital: "Andora" },
    { country: "Austrija", capital: "Viena" },
    { country: "Belgija", capital: "Briuselis" },
    { country: "Bosnia ir Hercegovina", capital: "Sarajevas" },
    { country: "Bulgarija", capital: "Sofija" },
    { country: "Kroatija", capital: "Zagrebas" },
    { country: "Kipras", capital: "Nikosija" },
    { country: "Čekija", capital: "Praha" },
    { country: "Danija", capital: "Kopenhaga" },
    { country: "Estija", capital: "Talinas" },
    { country: "Suomija", capital: "Helsinkis" },
    { country: "Prancūzija", capital: "Paryžius" },
    { country: "Vokietija", capital: "Berlynas" },
    { country: "Graikija", capital: "Atėnai" },
    { country: "Vengrija", capital: "Budapeštas" },
    { country: "Islandija", capital: "Reikjavikas" },
    { country: "Airija", capital: "Dublinas" },
    { country: "Italija", capital: "Roma" },
    { country: "Latvija", capital: "Ryga" },
    { country: "Lichtenšteinas", capital: "Vaducas" },
    { country: "Lietuva", capital: "Vilnius" },
    { country: "Liuksemburgas", capital: "Liuksemburgas" },
    { country: "Malta", capital: "Valeta" },
    { country: "Moldova", capital: "Kišiniovas" },
    { country: "Monakas", capital: "Monakas" },
    { country: "Juodkalnija", capital: "Podgorica" },
    { country: "Nyderlandai", capital: "Amsterdamas" },
    { country: "Šiaurės Makedonija", capital: "Skopjė" },
    { country: "Norvegija", capital: "Oslas" },
    { country: "Lenkija", capital: "Varšuva" },
    { country: "Portugalija", capital: "Lisabona" },
    { country: "Rumunija", capital: "Bukareštas" },
    { country: "San Marinas", capital: "San Marinas" },
    { country: "Serbija", capital: "Belgradas" },
    { country: "Slovakija", capital: "Bratislava" },
    { country: "Slovėnija", capital: "Liubliana" },
    { country: "Ispanija", capital: "Madridas" },
    { country: "Švedija", capital: "Stokholmas" },
    { country: "Šveicarija", capital: "Bernas" },
    { country: "Ukraina", capital: "Kijevas" },
    { country: "Didižioji Britanija", capital: "Londonas" },
    { country: "Vatikanas", capital: "Vatikanas" },
    { country: "Andora", capital: "Andora" }
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

    if(atsakymas.toLowerCase() === curentCountry.capital.toLowerCase()) {
        score ++
        result.innerText = 'Teisingai'
        result.style.color = 'green'
        rez2.innerText = `${score}/${i}`
        setTimeout(naujasKlausimas, 1000)
    } else {
        result.innerText = `Neteisingai. Teisingas atsakymas yra ${curentCountry.capital}`
        result.style.color = 'red'
        rez2.innerText = `${score}/${i}`
        setTimeout(naujasKlausimas, 2000)
    }
}

function naujasKlausimas() {
    rez2.innerText = `${score}/${i}`
    isCheckingAnswer = false;
    atsMygtukas2.disabled = "";
    answer2.value = ''
    result.innerText = ''

    if (selectedCountries.length === 0) {
        gameOver()
    } else {
        
        curentCountry = selectedCountries.pop()
        salis = countries[Math.floor(Math.random() * countries.length)];
        klausimas2.innerText = `Parašyk šios šalies sostinę: ${curentCountry.country}`
        i ++
    }

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