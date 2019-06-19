//run npm install -g json-server
// run json-server --watch db.json

/* src/index.js */
// document.addEventListener('DOMContentLoaded', () => {

// let cupidInterval


  const endPoint = 'http://localhost:3000/api/v1/users';
  fetch(endPoint)
    .then(res => res.json())
    .then(json => console.log(json));

  // display cupid and move left and right



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



  // function createHeart() {
  //   let newHeart = document.createElement('img')
  //   let heart = "images/heart.png"
  //   newHeart.src = heart
  //   newHeart.id = "newheart1"
  //   newHeart.style.width = "40px"
  //   newHeart.style.height = "40px"
  //   newHeart.classList.add('heart')
  //   newHeart.style.top = '100px'
  //   newHeart.style.left = `${Math.floor(Math.random() * 330) +30}px`
  //   gameContainer.appendChild(newHeart)
  // }
  //
  // createHeart()


    const FALLING_HEARTS = [];
    const gameContainer = document.getElementById("video-game-area")
    // const arrowTransform = 'rotate(90deg)'
    // heart.style.transform = heartTransform


    function createHeart() {
      // let div = document.createElement('div')
      // div.setAttribute('class', 'heartDiv');
      // gameContainer.appendChild(div)
      let heart = document.createElement('IMG');
      heart.id = 'heart';
      heart.setAttribute('src', 'images/heart.png');
      heart.style.width = "40px";
      heart.style.height = "40px";
      heart.style.top = '0px';
      heart.style.position = "absolute";
      FALLING_HEARTS.push(heart);
      gameContainer.appendChild(heart)
    }

    createHeart()

    function moveHeart(heart) {
      let topNum = parseInt(heart.style.top);
      if (topNum > 440) {
        //610 for 10
          heart.remove();
          return heart;
      } else {
      setTimeout(() => {
          topNum += 4;
          heart.style.top = topNum + 'px';
          // debugger
          moveHeart(heart)
        }, 70)
      }
    }
    let heart = document.getElementById('heart')
    console.log(heart);
    moveHeart(heart)
    //
    // // generate random arrow
    // function createRandomHeart(){
    //   let randomHeart = Math.floor(Math.random() * 4) + 1;
    //   switch (randomHeart){
    //     case 1:
    //       createHeart();
    //       break;
    //   }
    //
    // }
    //
    //   //set interval to generate random arrow to beat of music
    // setInterval(()=>{
    //   createRandomHeart();
    //   console.log("heart")
    //
    //   // drop arrows
    //   function dropHearts() {
    //     FALLING_HEARTS.forEach((heart) => {
    //       gameContainer.appendChild(heart);
    //       const heartFalling = document.querySelector('#heart');
    //       let heartId = heart.id
    //         switch (heartId) {
    //           case 'heart':
    //             moveHeart(heartFalling);
    //             break;
    //         }
    //     })
    //   }
    //
    //   dropHearts()
    // })
