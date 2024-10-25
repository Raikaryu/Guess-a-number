function giveANumber() {
     const givenNumber = parseInt(prompt("Donner un nombre"))
     console.log(givenNumber)
     return givenNumber
}

//Step 2
// function didWin(givenNumber) {
//      const numberToFind = 22
//      if (givenNumber == numberToFind) {
//           alert("Bravo ! Vous avez devinez le nombre")
//           return;
//           }
//      else if (givenNumber < numberToFind) {
//           alert("Plus grand")
//           gamePlay()
//           }
//      else if (givenNumber > numberToFind) {
//           alert("Plus petit")
//           gamePlay()
//           }
// }

// function gamePlay() {
//      const number = giveANumber()
//      didWin(number)
// }

// gamePlay()

//Step 3
function didIWin2(givenNumber) {
     const numberToFind = 22
     let result 
     if (givenNumber == numberToFind){
          result = true ;
     }
     else {
          result = false ;
     }
     console.log(result)
     return result
     
}

function gamePlay2() {
     if(didIWin2(giveANumber())){
          alert("Bravo ! Vous avez trouver le nombre!")
     }
     else {
          gamePlay2()
     }
}

gamePlay2()



