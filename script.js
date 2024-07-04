function makeBubble(){
var clutter= "";
var hitrn=0;

for(var i=1; i<=140; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class ="bubble">${rn}</div>`;
}
document.querySelector(".pbtm").innerHTML = clutter;
}
  var timer =60;
  function runTimer(){
  var timer1=  setInterval(function(){
        if(timer>0){
      timer--;
      document.querySelector("#timerval").textContent=timer;
   }
   else{
    clearInterval(timer1);
    document.querySelector(".pbtm").innerHTML=`<h1> Game Over <h1>`;
   }
 },1000);
  }
  function getNewHit(){
   hitrn=  Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
  }
  var score=0;
  function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;

  }
  document.querySelector(".pbtm")
  .addEventListener("click",function(dets){
    var clickednum= Number(dets.target.textContent);
    if(clickednum==hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
  })
  
  getNewHit();
runTimer();
makeBubble();