// const doSomething = () => {
//   const kickSound = new Audio('kick.wav');
//   console.log(kickSound);
//   kickSound.play()
// }


// document.addEventListener("Click" , (event) => { console.log(event)

//  let druma = document.querySelector("drum a")
 
 
// })
// druma.


const boom = new Audio()
boom.src = sound/boom.wav

document.addEventListener("keydown" , (event) => {
  if(event.code == 65){
    console.log(event.code)
    boom.play()
  }
})
