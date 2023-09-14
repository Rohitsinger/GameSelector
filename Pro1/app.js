let score = -10

function makeBubble() {
    var clutter = '';
var bubble = document.querySelector('.bubble')

for (let i = 0; i <= 220; i++) {
    var newNum = Math.floor(Math.random()*10)
   clutter += `<div class="bubble">${newNum}</div>`
  }
document.querySelector('#pbm').innerHTML = clutter
}
let timer = 60
function runTimer(){
  let timerVal =  setInterval(() => {
    if(timer>0){
        timer--;
       document.querySelector('#timerValue').textContent = timer
    }else{
        clearInterval(timerVal);
        document.querySelector('#pbm').innerHTML =`<h1>Congratulations Your Score is ${score}</h1>`
       
    }

   }, 1000);
}
var newHit;
function hits() {
     newHit = Math.floor(Math.random()*10)
    document.querySelector('#hitValue').textContent = newHit
}

function increaseSore() {
     score += 10

    document.querySelector('#hitScore').textContent = score
}

document.querySelector('#pbm').addEventListener('click',(details)=>{
   let clickedNum =  Number(details.target.textContent)
 if(clickedNum===newHit){
    increaseSore();
    hits();
    makeBubble();
 }
})
increaseSore()
hits()
runTimer()
makeBubble()












// const array =  ['h','he','hel','hell','hello'];//findt the longest string

// //done
// const findLongestArray = (str) => {
//     let max = ''
  
//     for (let i = 0; i < str.length; i++) {
//         if(str[i].length>max.length){
//             max= str[i]
//         }
        
//     }
//     return max
// }

// const result = findLongestArray(array)
// console.log(result);


// const array = [
//     {
//         "color": "purple",
//         "type": "minivan",
//         "registration": new Date('2012-02-03'),
//         "capacity": 7
//       },
// ]


// console.log(["color"]);








// let rect = document.querySelector('#rectangle')
// console.log(rect);

// rect.addEventListener('mousemove',(details)=>{
//    var wholeLocation = (rect.getBoundingClientRect());
//    var insideRectangle = (details.clientX - wholeLocation.left);
//    if(insideRectangle<wholeLocation.width/2){
//     var redColor = gsap.utils.mapRange(0, wholeLocation.width/2,255,0 ,insideRectangle);
//     gsap.to(rect,{
//         backgroundColor:`rgb(${redColor},0,0)`,
//         ease:Power4,
//     })
//    }else{
//     console.log("right");
//    }
// }) 

