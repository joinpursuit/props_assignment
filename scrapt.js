document.addEventListener("DOMContentLoaded", () =>{
  let button = document.querySelector(".button");
  let selector = document.querySelector(".dropmenu");
  let deckId;
  let userInput;
  let imgsrc; //url of an img
getDeck()
  button.addEventListener("click", getCards)
  function getDeck() {
    axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(response => {
      deckId = response.data.deck_id
      console.log(deckId);
      })
      .catch(err => {
        console.log("Error");
      })
    }
  selector.addEventListener("change", (event) => {
    userInput = event.target.value
  })
  function getCards() {
    axios
    .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${userInput}`)
    .then(response => {
      let cardDiv = document.querySelector('.dataDiv');
      let newDiv = document.createElement("div")
      newDiv.classList.add("dataDiv")
      response.data.cards.forEach(card =>{
        let cardImg = document.createElement('img')
        cardImg.src = card.image
        // debugger
        newDiv.appendChild(cardImg)
      })
      document.body.replaceChild(newDiv, cardDiv)
    })
  }
  })
