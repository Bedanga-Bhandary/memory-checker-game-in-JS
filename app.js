const orignalArray=[
    {
    name: 'fries',
    img:'img/fries.png',
    },
    {
    name: 'ice-cream',
    img:'img/ice-cream.png',
    },
    {
    name: 'milkshake',
    img:'img/milkshake.png',
    },
    {
    name: 'pizza',
    img:'img/pizza.png',
    },
    {
    name: 'hotdog',
    img:'img/hotdog.png',
    },
    
    {
    name: 'cheeseburger',
    img:'img/cheeseburger.png',
    },
    {
    name: 'fries',
    img:'img/fries.png',
    },
    {
    name: 'ice-cream',
    img:'img/ice-cream.png',
    },
    {
    name: 'milkshake',
    img:'img/milkshake.png',
    },
    {
    name: 'pizza',
    img:'img/pizza.png',
    },
    {
    name: 'hotdog',
    img:'img/hotdog.png',
    },
    
    {
    name: 'cheeseburger',
    img:'img/cheeseburger.png',
    }
]
orignalArray.sort(() =>0.5 - Math.random())//sort randomly

const gridDisplay=document.querySelector('#grid')//selects all elements with id grid

let cardChosen =[]
let cardsChosenId=[]
const cardsWon=[]

function createBoard(){
    for(let i=0;i<orignalArray.length;i++){
        const card =document.createElement('img')//creating an image and svaing it in card... here img in the bracket is the type
        card.setAttribute('src','img/blank.png')
        card.setAttribute('data-id',i)//set a new attribute to the value.... set attribute(name, values)
        card.addEventListener('click',flipCard)//if any card is clicked call the flipCard function thats why no () at the end of the name 
        gridDisplay.appendChild(card)//display the image on the page
        // console.log(orignalArray[i])
    }
}

function checkMatch()
{
    const cardsinhand= document.querySelectorAll('#grid img')
    const resultDisplay = document.querySelector('#result')
    if(cardsChosenId[0] == cardsChosenId[1])
    {
        alert('Dont Cheat BROOOOOO')
        cardsinhand[cardsChosenId[0]].setAttribute('src','img/blank.png')
    }
    else if(cardChosen[0]== cardChosen[1])
    {
        alert('You Found a Match')
        cardsinhand[cardsChosenId[0]].setAttribute('src','img/white.png')
        cardsinhand[cardsChosenId[1]].setAttribute('src','img/white.png')
        console.log(cardsinhand[cardsChosenId[0]])
        cardsinhand[cardsChosenId[0]].removeEventListener('click',flipCard)
        cardsinhand[cardsChosenId[1]].removeEventListener('click',flipCard)
        cardsWon.push(cardChosen)

    }
    else if(cardChosen[0] != cardChosen[1])
    {
        cardsinhand[cardsChosenId[0]].setAttribute('src','img/blank.png')
        cardsinhand[cardsChosenId[1]].setAttribute('src','img/blank.png')
    }
    resultDisplay.innerHTML=cardsWon.length
    cardChosen=[]
    cardsChosenId=[]
    if(cardsWon.length == orignalArray.length/2)
    {
        resultDisplay.innerHTML='Congratulations you have fount them all'
    }
}

createBoard()
//  console.log(gridDisplay)
function flipCard(){
    const cardId= this.getAttribute('data-id')//get the card id of whatever element has been clicked with the help of this keyword
    cardChosen.push(orignalArray[cardId].name)//push the chosen card into a new array
    cardsChosenId.push(cardId)
    // console.log(cardChosen)
    // console.log(cardsChosenId)
    // console.log("clicked!", cardId)
    // console.log(cardChosen)
    this.setAttribute('src',orignalArray[cardId].img)// change the image of the particular card to the clicked card
    if(cardChosen.length===2)
    {
        setTimeout(checkMatch,500)
    }

}