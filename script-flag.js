import { continentData } from './countries.js';
  
  const pagrindinis = document.getElementById("pagrindinis")
  const pabaiga = document.getElementById("pabaiga")
  const result = document.getElementById("rezultatas")
  const mygtukas = document.getElementById("saliuPasirinkimoMygtukas")
  const atsMygtukas = document.getElementById("atsMygtukas")
  const klausimasSalys = document.getElementById("klausimasSalys")
  const answer = document.getElementById("answer")
  const rez = document.getElementById("rez")
  const klausimas = document.getElementById("klausimas")
  const pabaigosZinute = document.getElementById("pabaigosZinute")
  const playAgain = document.getElementById("playAgain")
  const veliava = document.getElementById("veliava")
  const continentSelect = document.getElementById("continent-select")
  const countryCountInfo = document.getElementById("country-count-info")
  const saliuSkaiciausPasirinkimas = document.getElementById("saliuSkaiciausPasirinkimas")
  
  function imposeMinMax(el) {
    if (el.value === "") {
      el.value = 1
    }
  
    const selectedContinent = continentSelect.value
    const maxCountries = continentData[selectedContinent].length
  
    const value = Number.parseInt(el.value)
    if (isNaN(value)) {
      el.value = 1
      return
    }
  
    if (value < 1) {
      el.value = 1
    } else if (value > maxCountries) {
      el.value = maxCountries
    }
  }
  
  // Update max countries when continent changes
  continentSelect.addEventListener("change", function () {
    const selectedContinent = this.value
    const maxCountries = continentData[selectedContinent].length
  
    countryCountInfo.textContent = `Maksimalus šalių skaičius: ${maxCountries}`
  
    // Update input max attribute and value if needed
    saliuSkaiciausPasirinkimas.max = maxCountries
  
    if (Number.parseInt(saliuSkaiciausPasirinkimas.value) > maxCountries) {
      saliuSkaiciausPasirinkimas.value = maxCountries
    }
  })
  
  // Initialize with default continent
  document.addEventListener("DOMContentLoaded", () => {
    const selectedContinent = continentSelect.value
    const maxCountries = continentData[selectedContinent].length
  
    countryCountInfo.textContent = `Maksimalus šalių skaičius: ${maxCountries}`
    saliuSkaiciausPasirinkimas.max = maxCountries
  })
  
  let i = 0
  let selectedCountries = []
  let score = 0
  pagrindinis.hidden = true
  pabaiga.hidden = true
  let skaicius
  let salis
  let curentCountry
  let isCheckingAnswer = false
  
  mygtukas.onclick = mygtukopaspaudimas
  atsMygtukas.onclick = checkAnswer
  playAgain.onclick = funkcijaReload
  
  function funkcijaReload() {
    location.reload()
  }
  
  function mygtukopaspaudimas() {
    const selectedContinent = continentSelect.value
    const continentCountries = continentData[selectedContinent]
  
    skaicius = Number.parseInt(document.getElementById("saliuSkaiciausPasirinkimas").value)
  
    if (skaicius > continentCountries.length) {
      skaicius = continentCountries.length
    }
  
    klausimasSalys.hidden = true
    pagrindinis.hidden = false
  
    selectedCountries = [...continentCountries].sort(() => 0.5 - Math.random()).slice(0, skaicius)
    naujasKlausimas()
  }
  
  answer.addEventListener("keypress", (event) => {
    if (event.key === "Enter" && !isCheckingAnswer) {
      checkAnswer()
    }
  })
  
function checkAnswer() {
  isCheckingAnswer = true
  atsMygtukas.disabled = "disabled"
  const atsakymas = answer.value.trim()

  if (atsakymas.toLowerCase() === curentCountry.country.toLowerCase() || 
      curentCountry.alternatives.some((alt) => atsakymas.toLowerCase() === alt.toLowerCase())) {
    score++
    result.innerText = "Teisingai"
    result.style.color = "green"
    rez.innerText = `${score}/${i}`
    setTimeout(naujasKlausimas, 1000)
  } else {
    result.innerText = `Neteisingai. Teisingas atsakymas yra ${curentCountry.country}`
    result.style.color = "red"
    rez.innerText = `${score}/${i}`
    setTimeout(naujasKlausimas, 2000)
  }
}
  
  function naujasKlausimas() {
    if (selectedCountries.length === 0) {
      gameOver()
      return
    }
  
    curentCountry = selectedCountries.pop()
    veliava.src = `https://flagcdn.com/w320/${curentCountry.abbreviation.toLowerCase()}.png`
    rez.innerText = `${score}/${i}`
  
    isCheckingAnswer = false
    atsMygtukas.disabled = ""
    answer.value = ""
    result.innerText = ""
  
    klausimas.innerText = "Parašyk šios šalies pavadinimą"
    i++
  }
  
  function gameOver() {
    pagrindinis.hidden = true
    pabaiga.hidden = false
  
    if (score >= skaicius) {
      pabaigosZinute.innerText = `Pabaiga. Rezultatas: ${score}/${skaicius}`
      pabaigosZinute.style.color = "green"
    } else {
      pabaigosZinute.innerText = `Pabaiga. Rezultatas: ${score}/${skaicius}`
    }
  }
  
  