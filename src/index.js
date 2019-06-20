//run npm install -g json-server
// run json-server --watch db.json

/* src/index.js */
// document.addEventListener('DOMContentLoaded', () => {

  let heartInterval

  const endPoint = 'http://localhost:3000/api/v1/users';
  fetch(endPoint)
    .then(res => res.json())
    .then(json => console.log(json));

  // display cupid and move left and right
  const cupid = document.getElementById('cupid')
  let  SCORE = 0

  //Initialize game w/ cupid in place
  function init(){
         cupid.style.position='relative';
         cupid.style.left='280px';
         cupid.style.top='460px';
     }

  init()

  //Cupid movement left & right
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

  //Event listener for letCupidMove
  window.addEventListener("keydown", letCupidMove)

  //Creating / moving hearts down
    let FALLING_HEARTS = [];
    const gameContainer = document.getElementById("video-game-area")


    function createHeart() {
      let heart = document.createElement('IMG');
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

  // Checking for cupid and heart collision
  function checkCollision(cupid, heart) {
    let heartLeft = parseInt(heart.style.left)
    let heartTop = parseInt(heart.style.top)
    let cupidLeft = parseInt(cupid.style.left)
    let cupidTop = parseInt(cupid.style.top)

    if ((cupidLeft >= heartLeft -20 && cupidLeft <= heartLeft +20) &&
      (cupidTop >= heartTop -20 && cupidTop <=heartTop+20)) {
      return true
      }
    else if ((heartTop + 40 === 540))
      if (window.confirm(`💔 Game over: You caught ${SCORE} hearts! Do you want to play again?`)) {
        location.reload()
      }
    }


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


  // Incrementing score on each cupid/heart collision
  function incrementScore(){
    SCORE++
    let score = document.querySelector('#score')
    score.innerHTML = `
      SCORE: ${SCORE}
    `
  }

  // function heartBreak(){
  //   let heartbreak = document.querySelectorAll('heart')
  //   heartbreak.src = 'images/heartbreak.png'
  // }
