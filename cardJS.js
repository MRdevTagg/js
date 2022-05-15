document.addEventListener("DOMContentLoaded", (main));
const cartaAll = document.querySelectorAll('.card');
var containerAll = document.querySelectorAll('.container');
const carta = Array.from(cartaAll)
var container = Array.from(containerAll);
 let prevDef = false
 let transX = 0
 //VARIABLES


 function DetectarMovimiento(padre,elemento,invertir,e){

 let xAxis = window.innerWidth / 2 - Math.round(e.changedTouches[0].clientX);
 let yAxis = window.innerHeight / 2 -  Math.round(e.changedTouches[0].clientY);
 const end = new Date();
 const passedTime = end - start;

 var xInvert = xAxis;
 var yInvert = yAxis;
 
//ANULAR EVENTOS POR DEFAULT 
if(passedTime > 100){e.preventDefault()}
//INVERTIR DIRECCIONES
switch (true) {
  case invertir == 'invertirX':  
if (xAxis>0) {xInvert =xAxis - (xAxis*2)}
if (xAxis<0) {xInvert =xAxis + (Math.abs(xAxis)*2)}break;
  case invertir =='invertirY':
  if (yAxis>0) {yInvert =yAxis - (yAxis*2)}
  if (yAxis<0) {yInvert =yAxis + (Math.abs(yAxis)*2)}break;
  case Invertir == 'invertirXY':
  if (xAxis>0) {xInvert =xAxis - (xAxis*2)}
  if (xAxis<0) {xInvert =xAxis + (Math.abs(xAxis)*2)}
  if (yAxis>0) {yInvert =yAxis - (yAxis*2)}
  if (yAxis<0) {yInvert =yAxis + (Math.abs(yAxis)*2)
}break;
  
default:
  
}

//DETECTAR SI EL EJE X ESTA FUERA DEL AREA
 if(e.changedTouches[0].clientX < elemento.getBoundingClientRect().left){
   if(canRotate){
     canRotate = false
      transX = -100
        X=-20
   elemento.style.transition= 'all 700ms linear'
  elemento.style.transform = 'scale(0.7) translateX(' + transX +'%) rotateY('+X+'deg)'
  l = true
}
 }
 if(e.changedTouches[0].clientX > elemento.getBoundingClientRect().right)
 {if(canRotate){
   canRotate = false
   transX = 100
   X= 20
 elemento.style.transition= 'all 700ms linear'
   elemento.style.transform = 'scale(0.7) translateX(' + transX +'%) rotateY('+X+'deg)'
  l = false
   }
 }

//DETECTAR SI EL EJE Y ESTA FUERA DEL AREA
else if(e.changedTouches[0].clientY < padre.getBoundingClientRect().top || e.changedTouches[0].clientY > elemento.getBoundingClientRect().bottom)
 {
   canRotate = false
   elemento.style.transition= 'all 700ms linear'
 
   Y=0;
   elemento.style.transform = 'scale(0.8) translateX(' + transX +'%) rotateX(0deg) rotateY(0deg)';
 }
//SI EL EJE X y/o Y ESTAN DENTRO DEL AREA
//TRANSFORMACION
 else if (canRotate){
   //TRANSFORMACION
   elemento.style.transition= 'all 400ms linear';
   Y = yInvert / 5;
   X = xInvert / 2;
   //xStr = X.toString();
   //yStr = Y.toString();
  elemento.style.transform = 'scale(.87) translateX(' + transX +'%) rotateY('+X+'deg) rotateX('+Y+'deg)';
 // elemento.style.transform = `scale(.87) translateX(${transX}) rotateY(${xStr}deg) rotateX(${yStr})`;
  //elemento.style.left = X+'px';
 // elemento.style.top = Y+'px';
 }
 }
 
 
 
function main(){

 //$containers[3] = objReferencias.length-1

 // ActualizarVista($containers,objReferencias);  

carta[1].addEventListener('touchstart', (e)=>{
start = new Date();
canRotate=true;
transX = 0;
  carta[1].style.transform = 'scale(.7) translateX(' + transX +'%) rotateX(0deg) rotateY(0deg)';
});


carta[1].addEventListener('touchmove', (e)=>{
  DetectarMovimiento(container[0],carta[1],'invertirX',e);
});

carta[1].addEventListener('touchend',(e)=>{
  canRotate=false;
  
   // desplazar($containers,objReferencias,animRL2,$cards);
  
 // carta[1].style.transition= 'all 700ms ease-out';
  carta[1].style.transform = 'scale(.8) translateX(' + transX +'%) rotateX(0deg) rotateY(0deg)';
});

}
