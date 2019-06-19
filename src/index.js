//run npm install -g json-server
// run json-server --watch db.json

/* src/index.js */
// document.addEventListener('DOMContentLoaded', () => {
  
// let cupidInterval


  const endPoint = 'http://localhost:3000/api/v1/users';
  fetch(endPoint)
    .then(res => res.json())
    .then(json => console.log(json));

    


  // display cupit and move left and right
 
  function init(){
         const cupid = document.getElementById('cupid')
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


  
  




// const startButton = document.getElementById("start-button")




//   function arrow(){
//     let arrow= createArrowElement()
//     gameArea.appendChild(arrow)
//     cupid.style.position='relative';
//     cupid.style.left='180px';
//     cupid.style.top='460px';
// }

// init()



  // const gameArea= document.getElementById('video-game-area')

  // function shootArrow(){
  //   let arrow = createArrowElement ()
  //   gameArea.appendChild(arrow)
  //   moveaArrow(arrow)
  // }


  
  // function createHeart() {
  //   let newHeart = document.createElement('img')
  //   newHeart.src = 'images/heart.png'
  //   newHeart.classList.add('heart')
  //   newHeart.classList.add('heart-transition')
  //   newHeart.style.top = '370px'
  //   newHeart.style.bottom = `${Math.floor(Math.random() * 330) + 30}px`
  //   mainPlayArea.appendChild(newHeart)
  //   moveHeart(newHeart)
  // }

  // startButton.addEventListener("click", (event) => {
  //   playGame()
  // })

  // function playGame() {
  //   startButton.style.display = 'none'
  //   instructions.style.display = 'none'
  //   window.addEventListener("keydown", letHeartsFall)
  //   // justice = new Audio("audio/Justice-One-Minute-To-Midnight.m4a")
  //   // justice.play()
  //   cupidInterval = setInterval(() => { 
  //     createHeart() 
  //   }, 2100)

  // }
  
  


