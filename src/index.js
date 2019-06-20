//run npm install -g json-server
// run json-server --watch db.json

/* src/index.js */
// document.addEventListener('DOMContentLoaded', () => {

// let cupidInterval
  // let heartInterval
  
  const endPoint = 'http://localhost:3000/api/v1/users';
  fetch(endPoint)
    .then(res => res.json())
    .then(json => console.log(json));

  // display cupid and move left and right
  const cupid = document.getElementById('cupid')
  let  SCORE = 0


  function init(){
         cupid.style.position='relative';
         cupid.style.left='180px';
         cupid.style.top='460px';
     }

  init()

  function moveLeft(){
    if (cupid.offsetLeft > -5) {
    cupid.style.left=parseInt(cupid.style.left)-15 + 'px';
  }
}

  function moveRight(){
    if (cupid.offsetLeft < 510) {
    cupid.style.left=parseInt(cupid.offsetLeft)+15 + 'px';
  }
}



  function letCupidMove(event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      moveLeft()
    } else if (event.key ==="ArrowRight") {
      event.preventDefault()
      moveRight()
    } else if (event.key === " ") {
      event.preventDefault()
      shootArrow()
    }
  }

  //  event listener for letcupidmove
  window.addEventListener("keydown", letCupidMove)



 


    const FALLING_HEARTS = [];
    const gameContainer = document.getElementById("video-game-area")
    let heartInterval

    function createHeart() {
      let heart = document.createElement('IMG');
      // let heartSpriteImg = heart[Math.floor(Math.random()*heart.length)]
      // heart.scr = heartSpriteImg
      heart.id = 'heart';
      heart.setAttribute('src', 'images/heart.png');
      heart.style.width = "40px";
      heart.style.height = "40px";
      heart.style.left = `${Math.ceil(Math.random()*500)}px`;
      heart.style.top = '0px';
      heart.style.position = "absolute";
      FALLING_HEARTS.push(heart);
      gameContainer.appendChild(heart)
      moveHeart(heart)
    }

    createHeart()

// match heart and cupid = collied 

function checkCollision(cupid, heart) {
  let heartLeft = parseInt(heart.style.left)
  let heartTop = parseInt(heart.style.top)
  // let heartBottom = heartTop - 30
  let cupidLeft = parseInt(cupid.style.left)
  let cupidTop = parseInt(cupid.style.top)
  if ((cupidLeft >= heartLeft -20 && cupidLeft <= heartLeft +20) &&
 (cupidTop >= heartTop -20 && cupidTop <=heartTop+20)) {
    // console.log("heartbeat")
   
    return true 

  }
  return false
  // if (cupidLeft === heartLeft && cupidTop === heartTop) {
     
}









    
    
    function moveHeart(heart) {

      let topNum = parseInt(heart.style.top);
      if (topNum > 500) {
          heart.remove();
          return heart;
      } else {
      setTimeout(() => {
          topNum += 4;
          heart.style.top = topNum + 'px';
          moveHeart(heart)
        }, 70)
      }
    }

    // let heart = document.getElementById('heart')
    moveHeart(heart)

    // function heartDrop() {
    //   createHeart()
    //   moveHeart(heart)
    // }
    
    function playGame() { 
      let counter = 0
      heartInterval = setInterval(() => {  
        let indexToRemove = -1
        FALLING_HEARTS.forEach(function(heart, index) {
          if (checkCollision(cupid, heart)) {
            heart.remove();
            indexToRemove = index
            incrementScore()
          }
        })
        if (indexToRemove != -1){
          FALLING_HEARTS.splice(indexToRemove, 1)
          
        }
        if (counter == 21) { 
          createHeart() 
          counter = 0
        }else {
          counter++
        }
        }, 100)
      }
 
    playGame()
    
   
    
  function incrementScore(){
    SCORE++
    let score = document.querySelector('#score')
    score.innerHTML = `
      score: ${SCORE}
     
    `
  }