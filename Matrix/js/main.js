var cards = [
  {
    rank:"queen",
    suit:"hearts",
    cardImage:"images/queen-of-hearts.png"
  },
  {
    rank:"queen",
    suit:"diamonds",
    cardImage:"images/queen-of-diamonds.png"
  },
  {
    rank:"king",
    suit:"hearts",
    cardImage:"images/king-of-hearts.png"
  },
  {
    rank:"king",
    suit:"diamonds",
    cardImage:"images/king-of-diamonds.png"
  }

];


var cardsInPlay = [];


//Adds HTML elements using javascript

function createBoard()
{
  for(var i = 0; i < cards.length; i++)
  {
    var cardElement = document.createElement('img')
    cardElement.setAttribute('src', 'images/back.png')
    cardElement.setAttribute('data-id', i)
    cardElement.addEventListener("click", flipCard)
    document.getElementById('game-board').appendChild(cardElement)


  }
}

function play(){
  document.getElementById('game-board').style.display = 'none;'

}

// Adds content inside Asigned Array using Javascript and Flips Cards by listening to the createBoard function and pushing the Array content inside....
function flipCard()
{
    var cardId = this.getAttribute('data-id')
    cardsInPlay.push(cards[cardId].rank);
    
    this.setAttribute('src', cards[cardId].cardImage)
    checkForMatch();
    
    console.log("User flipped " + cards[cardId].rank);
}


//Self Explanatory, Checks for the Match when FlipCard function is activated

function checkForMatch()
{
  if(cardsInPlay.length === 2)
  {
      if(cardsInPlay[0] === cardsInPlay[1])
    {
      alert("found a match")
    }else{
      alert("Sorry, try again")
    }
  }
}
createBoard();



function loadref(time)
{

  setTimeout("location.reload(true);",time);

}