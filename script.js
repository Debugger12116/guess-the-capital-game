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
const result = document.getElementById('rezultatas')
let i = 0
let selectedCountries = []
let score = 0
document.getElementById('pagrindinis').hidden = true
document.getElementById('pabaiga').hidden = true
let skaicius;
let salis;
let curentCountry
let isCheckingAnswer = false;


const mygtukas = document.getElementById('saliuPasirinkimoMygtukas')


mygtukas.onclick = mygtukopaspaudimas
document.getElementById("atsMygtukas").onclick = checkAnswer




function mygtukopaspaudimas() {
    skaicius = document.getElementById('saliuSkaiciausPasirinkimas').value
    document.getElementById('klausimasSalys').hidden = true
    document.getElementById('pagrindinis').hidden = false
    selectedCountries = [...countries].sort(() => 0.5 - Math.random()).slice(0, skaicius);
    naujasKlausimas()
}

document.getElementById("answer").addEventListener("keypress", function(event) {
    if (event.key === "Enter" && !isCheckingAnswer) {
        checkAnswer();
    }
});



function checkAnswer() {
    isCheckingAnswer = true;
    document.getElementById("atsMygtukas").disabled = "disabled";
    let atsakymas = document.getElementById('answer').value.trim()

    if(atsakymas.toLowerCase() === curentCountry.capital.toLowerCase()) {
        score ++
        result.innerText = 'Teisingai'
        result.style.color = 'green'
        document.getElementById('rez').innerText = `${score}/${i}`
        setTimeout(naujasKlausimas, 1000)
    } else {
        result.innerText = `Neteisingai. Teisingas atsakymas yra ${curentCountry.capital}`
        result.style.color = 'red'
        document.getElementById('rez').innerText = `${score}/${i}`
        setTimeout(naujasKlausimas, 2000)
    }
}

function naujasKlausimas() {
    document.getElementById('rez').innerText = `${score}/${i}`
    isCheckingAnswer = false;
    document.getElementById("atsMygtukas").disabled = "";
    document.getElementById('answer').value = ''
    result.innerText = ''

    if (selectedCountries.length === 0) {
        gameOver()
    } else {
        
        curentCountry = selectedCountries.pop()
        salis = countries[Math.floor(Math.random() * countries.length)];
        document.getElementById('klausimas').innerText = `Parašyk šios šalies sostinę: ${curentCountry.country}`
        i ++
    }

}




function gameOver() {

    document.getElementById('pagrindinis').hidden = true
    document.getElementById('pabaiga').hidden = false

    if (score >= skaicius) {
        document.getElementById('pabaigosZinute').innerText = `Pabaiga. Rezultatas: ${score}/${skaicius}`
        document.getElementById('pabaigosZinute').style.color = 'green'
    } else {
        document.getElementById('pabaigosZinute').innerText = `Pabaiga. Rezultatas: ${score}/${skaicius}`
    }
    
    
}