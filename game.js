// הגדרת המשתנים והקריאה לפונקציות:
let one = 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/35th_Brigade_IDF.svg/150px-35th_Brigade_IDF.svg.png)'

let two='url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Golani_tree_color.svg/1481px-Golani_tree_color.svg.png)'

let three='url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/%D7%AA%D7%92_%D7%97%D7%98%D7%99%D7%91%D7%AA_%D7%92%D7%91%D7%A2%D7%AA%D7%99.svg/1200px-%D7%AA%D7%92_%D7%97%D7%98%D7%99%D7%91%D7%AA_%D7%92%D7%91%D7%A2%D7%AA%D7%99.svg.png)'

let Four='url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Logo_hativa_900.png/200px-Logo_hativa_900.png)'

let five='url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/%D7%AA%D7%92_%D7%99%D7%97%D7%99%D7%93%D7%94_401.svg/1200px-%D7%AA%D7%92_%D7%99%D7%97%D7%99%D7%93%D7%94_401.svg.png)'

let playingcards = [one, two, three, Four, five];

let game = playingcards.concat(playingcards);

// mixing1 - ערבוב רנדומלי:
function mixing1(arryToMix) {
    const result = arryToMix.sort(() => 0.5 - Math.random());
    return result;
}
let afterRandom = mixing1(game);
console.log(afterRandom);

// createCards - יצירת קלפים ב-HTML:

function createCards() {

    let openedCards = [];
    let rightAnswer=[]
    let boardelement = document.getElementsByClassName("board-card")[0];

    afterRandom.forEach((cardValue) => {
        let cardelement = document.createElement("div");
        cardelement.classList.add('card');
        boardelement.appendChild(cardelement)
        cardelement.value = cardValue;
        cardelement.innerHTML = ` `;
        
        cardelement.onclick = (e) => {
            if (openedCards.length < 2) {
                e.target.style.backgroundImage = cardValue;   

                const buttonClickSound = new Audio()
                buttonClickSound.src="img/flipcard-91468.mp3"
                buttonClickSound.play()
                openedCards.push(e.target)
            }
            
            if(openedCards.length === 2) {
                if (openedCards[0].value == openedCards[1].value) {
                    const SucsesClickSound = new Audio()
                    SucsesClickSound.src="img/short-success-sound-glockenspiel-treasure-video-game-6346 (1).mp3"
                    setTimeout(() => { SucsesClickSound.play()}, 1000)
                    rightAnswer.push(openedCards[0].value,openedCards[1].value);
                    // alert("עבודה יפה");
                    openedCards = [];
                }
                
                else{
                    const ErorClickSound = new Audio()
                    ErorClickSound.src="img/error-126627.mp3"
                    setTimeout(() => { ErorClickSound.play()}, 800)
                      
                    setTimeout(() => {        
                        openedCards.forEach(card => {                                   
                            card.style.backgroundImage='' 
                            openedCards = []
                        });
                    },1000);
                    // console.log(openedCards);
                    // alert("נחש אותי נחש");
                }
            }

            if (rightAnswer.length=== 10) { 
               function Winer() {          
                let popUp=document.querySelector('.popup');

                popUp.classList.add('active');

                let close=document.querySelector('.close');

                close.onclick = function(){
                  popUp.classList.remove('active');  
             
               }
               const SucsesSound = new Audio()
               SucsesSound.src="img/success-fanfare-trumpets-6185.mp3"
                SucsesSound.play();
            
             console.log('היידה');
            }
            Winer();
        }
        };
        boardelement.appendChild(cardelement);
    });
}


// init - רץ את המשחק:
function init() {
// backSound.play()
    createCards()
}

init();






// stars = cardsToSwitchToStars(afterRandom);
// getIndex - בקשה למספר מהמשתמש:
// function getIndex() {
//     return Number(prompt("Please choose a number between 1-10")) - 1;
// }

// checkIfEqual - בדיקה אם ערכים שווים:
// function checkIfEqual(valueA, valueB) {
//     return valueA === valueB;
// }

// cardsToSwitchToStars - יצירת מערך כוכביות:
// function cardsToSwitchToStars(arrToSwitch) {
//     return '*'.repeat(arrToSwitch.length).split('');
// }

// function backcard(cardValue) {
    // afterRandom.forEach((cardValue)=>{
        // let backCard=document.createElement("div");
        // backCard.id=('backcard')
        // boardelement.appendChild(backCard)
        // backCard.innerHTML = ` `;
//     })
    
// }

// let stars = cardsToSwitchToStars(afterRandom);

// while (!checkIfEqual(stars.toString(), afterRandom.toString())) {
    //     let card1 = getIndex();
    //     stars[card1] = afterRandom[card1];
    
    //     let card2 = getIndex();
    //     stars[card2] = afterRandom[card2];
    
    //     const isEqual = checkIfEqual(afterRandom[card1], afterRandom[card2]);
    
    //     if (!isEqual) {
        //         stars[card1] = "*";
        //         stars[card2] = "*";
        //     } else {
            //         console.log(stars);
            //     }
            // }