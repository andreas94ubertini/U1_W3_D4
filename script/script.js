let randomNumber = Math.floor(Math.random() * 76 + 1)
const selectNumberForm = document.forms[0]
const numeriUsciti = []
const sortANumber = document.getElementById("sort-number")
const mainCard = document.getElementById("main-card")
const cardContainer = document.getElementById("your-cards-container")
const playersCard = document.getElementsByClassName("card")
const mainCardGenerator = function (numberOfCell, parentElement, randomN) {
  for (let i = 0; i < numberOfCell; i++) {
    const newDivNumber = document.createElement("div")
    newDivNumber.classList.add("number")
    if (parentElement.classList.contains("main")) {
      newDivNumber.innerText = `${i + 1}`
      newDivNumber.classList.add(`${i + 1}`)
    } else {
      newDivNumber.innerText = Math.floor(Math.random() * 76 + 1)
    }
    parentElement.appendChild(newDivNumber)
  }
  console.log(parentElement, "sono parent")
  const allTheNumbers = document.querySelectorAll(".number")
  allTheNumbers.forEach((div) => {
    div.classList.add(div.innerText)
  })
}

const playersCardGenerator = function (numberOfCard, n = 24) {
  for (let i = 0; i < numberOfCard; i++) {
    const newCard = document.createElement("div")
    newCard.classList.add("card")
    mainCardGenerator(24, newCard)
    cardContainer.appendChild(newCard)
  }
}

selectNumberForm.addEventListener("submit", (e) => {
  e.preventDefault()
  let numberOfCards = document.getElementById("choiced-number").value
  numberOfCards = parseInt(numberOfCards) + 1
  console.log(numberOfCards, "sono n")
  mainCardGenerator(76, mainCard)
  playersCardGenerator(numberOfCards, 24)
  selectNumberForm.classList.add("hidden")
})

randomNumberGenerator = function () {
  const randomNumber = Math.floor(Math.random() * 76 + 1)
  console.log(randomNumber)
  numeriUsciti.push(randomNumber)
  console.log(numeriUsciti)
  const allTheNumbers = document.querySelectorAll(".number")
  allTheNumbers.forEach((div) => {
    if (div.classList.contains(`${randomNumber}`)) {
      div.classList.add("uscito")
    }
  })
}
sortANumber.addEventListener("click", randomNumberGenerator)
