document.addEventListener('DOMContentLoaded', ()=>{
    
    //cards list
    const cardsArray = [
    {
        name: 'castle',
        img: 'images/049-castle.png'
    },
    {
        name: 'castle',
        img: 'images/049-castle.png'
    },
    {
        name: 'crystalball',
        img: 'images/044-crystal ball.png'
    },
    {
        name: 'crystalball',
        img: 'images/044-crystal ball.png'
    },
    {
        name: 'fairy',
        img: 'images/016-fairy.png'
    },
    {
        name: 'fairy',
        img: 'images/016-fairy.png'
    },
    {
        name: 'Frogprince',
        img: 'images/015-frog prince.png'
    },
    {
        name: 'Frogprince',
        img: 'images/015-frog prince.png'
    },
    {
        name: 'princess',
        img: 'images/013-princess.png'
    },
    {
        name: 'princess',
        img: 'images/013-princess.png'
    },
    {
        name: 'witch',
        img: 'images/005-witch.png'
    },
    {
        name: 'witch',
        img: 'images/005-witch.png'
    }
    ]

    cardsArray.sort(()=> 0.5 - Math.random())

    const board = document.querySelector('.board')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
        
    //create game board
    function createBoard(){
    for(let i = 0; i < cardsArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            board.appendChild(card)
        }
    }

    //card matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(cardsChosen[0] === cardsChosen[1]){
            alert('You found a match!')
            cards[optionOneId].setAttribute('src','images/white.png')
            cards[optionTwoId].setAttribute('src','images/white.png')
            cardsWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute('src','images/blank.png')
            cards[optionTwoId].setAttribute('src','images/blank.png')
            alert('ops, try again!')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardsArray.length/2){
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    //flip cards
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardsArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardsArray[cardId].img)
        if(cardsChosen.length === 2){
            preventSelectTwice();
        }
    }

    function preventSelectTwice() {
        if(cardsChosenId[0] !== cardsChosenId[1]){
            setTimeout(checkForMatch, 500)
        }else {
            cardsChosen.pop();
            cardsChosenId.pop();
            alert("choose another card!")
        }
    }

    createBoard()
})