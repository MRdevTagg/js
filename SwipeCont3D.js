document.addEventListener("DOMContentLoaded", (main));
const cartaAll = document.querySelectorAll('.card');
var containerAll = document.querySelectorAll('.container');
const carta = Array.from(cartaAll)
var container = Array.from(containerAll);
 let prevDef = false



//VARIABLES


const tiempoActualizar = 350;
let izquierda = true;
let derecha = false;
let puedeSwipe= true;



const objReferencias =[
 ref1=
{
titulo:'',
fondo:'rgb(241,164,220)',
 logo: 'Recursos\\IMG\\Logos\\logo-Spotter.svg',
 linkhref: 'https://www.spotter.com.uy/',
 linktxt: 'Visitar Sitio',
 texto:'1'
},
 ref2=
{
    titulo:'',
    fondo:'rgb(0,196,7)',
 logo: 'Recursos\\IMG\\Logos\\fable.svg',
 linkhref: 'https://www.fabletybertoni.com/landing/',
 linktxt: 'Visitar Sitio',
 texto: '2'
},
 ref3=
{
  titulo:'',
  fondo:'rgb(244,0,76)',
 logo: 'Recursos\\IMG\\Logos\\EliasRegulesLogo.jpg',
 linkhref: 'https://www.spotter.com.uy/',
 linktxt: 'Visitar Sitio',
 texto: '3'
},
ref4=
{
 titulo:'',
 fondo:'rgb(232,145,1)',
 logo: 'Recursos\\IMG\\Logos\\logo-Spotter.svg',
 linkhref: 'https://www.spotter.com.uy/',
 linktxt: 'Visitar Sitio',
 texto:'4'
},
ref5=
{
 titulo:'',
 fondo:'rgb(0,81,189)',
 logo: 'Recursos\\IMG\\Logos\\logo-Spotter.svg',
 linkhref: 'https://www.spotter.com.uy/',
 linktxt: 'Visitar Sitio',
 texto:'5'
},
ref6=
{
 titulo:'',
 fondo:'linear-gradient(60deg, rgba(47,32,61,1) 0%, rgba(99,47,124,1) 35%, rgba(152,98,189,1) 100%)',
 logo: 'Recursos\\IMG\\Logos\\logo-Spotter.svg',
 linkhref: 'https://www.spotter.com.uy/',
 linktxt: 'Visitar Sitio',
 texto:'6'
}
]

const $cards = [carta[0],carta[1],carta[2],1,0,1]



//ANIMACIONES
let animRL2 = function animacionRL2(selectores){
    
    if(izquierda){
        selectores[1].classList.remove("zero");
        selectores[2].classList.add("tozero");
        selectores[2].classList.remove("right");
        selectores[1].classList.add("toleft");
    }
    if(!izquierda){
      selectores[0].classList.remove("left");
      selectores[1].classList.remove("zero");
      selectores[0].classList.add("tozero");
      selectores[1].classList.add("toright");
    }
}
let animRL3 = function animacionRL2(selectores){
    
    if(izquierda){
        selectores[1].classList.remove("zero");
        selectores[2].classList.add("tozero");
        selectores[2].classList.remove("right");
        selectores[1].classList.add("toleft");
    }
    if(!izquierda){
      selectores[0].classList.remove("left");
      selectores[1].classList.remove("zero");
      selectores[0].classList.add("tozero");
      selectores[1].classList.add("toright");
    }
}

//FUNCIONES
function ResetearPosicion (selectores){
 
    selectores[0].classList.remove("tozero");
    selectores[2].classList.remove("tozero");
    selectores[1].classList.remove("toright");
    selectores[1].classList.remove("toleft");

      
    selectores[0].classList.add("left");
    selectores[1].classList.add("zero");
    selectores[2].classList.add("right");
  
  }
function ActualizarLogica (selectores,objs){
if(derecha)
    {
      selectores[3]-=1;
      if(selectores[3]<0){selectores[3]=objs.length - 1}
      selectores[4]-=1;
      if(selectores[4]<0){selectores[4]=objs.length - 1}
      selectores[5]-=1;
      if(selectores[5]<0){selectores[5]=objs.length - 1}
    
      ResetearPosicion(selectores,objs);
    }
if(!derecha)
    {
      selectores[3]+=1;
      if(selectores[3]>objs.length - 1){selectores[3]=0;}
      selectores[4]+=1;
      if(selectores[4]>objs.length - 1){selectores[4]=0;}
      selectores[5]+=1;
      if(selectores[5]>objs.length - 1){selectores[5]=0;}
      
      ResetearPosicion(selectores,objs);
    }   
}
function ActualizarVista(selectores,objs){
   let obj0 = objs[selectores[3]];
   let obj1 = objs[selectores[4]];
   let obj2 = objs[selectores[5]];
   let $0 = selectores[0];
   let $1 = selectores[1];
   let $2 = selectores[2];
  $0.querySelector('h3').innerHTML = obj0.texto
  $1.querySelector('h3').innerHTML = obj1.texto
  $2.querySelector('h3').innerHTML = obj2.texto

  $0.style.background = obj0.fondo
  $1.style.background = obj1.fondo
  $2.style.background = obj2.fondo
    
}
function Actualizar(selectores,objs){
ActualizarLogica(selectores,objs);
ActualizarVista(selectores,objs);
}
function Izquierda(selectores,objs,anim){
  puedeSwipe=false;
   izquierda=true;
  anim(selectores);
    
    setTimeout(()=>
    {puedeSwipe=true;     
     derecha=false;
     Actualizar(selectores,objs);},tiempoActualizar);
      
}
function Derecha(selectores,objs,anim){
    puedeSwipe=false; 
    izquierda = false;
anim(selectores);
   

     setTimeout(()=>{
     puedeSwipe=true;
    derecha=true;
    Actualizar(selectores,objs);
    },tiempoActualizar)
    
}


// FUNCIONES SWIPE


 function DetectarMovimiento(padre,elemento,invertir,e){

 let xAxis = padre.offsetWidth / 2 - Math.round(e.changedTouches[0].clientX);
 let yAxis = padre.offsetHeight / 2 -  Math.round(e.changedTouches[0].clientY);
 const end = new Date();
 const passedTime = end - start

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
der=false;
 } if(e.changedTouches[0].clientX > elemento.getBoundingClientRect().right)
 {
   
   elemento.style.transition = 'all 700ms linear'
   elemento.style.transform = 'scale(0.8)'
   der =true;
   X=0
 }

//DETECTAR SI EL EJE Y ESTA FUERA DEL AREA
else if(e.changedTouches[0].clientY < padre.getBoundingClientRect().top || e.changedTouches[0].clientY > padre.getBoundingClientRect().bottom)
 {
   elemento.style.transition= 'all 700ms linear'
   elemento.style.transform = 'scale(0.8)';
 
   Y=0;
 }
 
//SI EL EJE X y/o Y ESTAN DENTRO DEL AREA
//TRANSFORMACION
 else{
   //TRANSFORMACION
   elemento.style.transition= 'all 200ms linear'
   Y = yInvert / 7;
   X = xInvert / 5;
  elemento.style.transform = 'scale(.87) rotateY('+X+'deg) rotateX('+Y+'deg)';
  //elemento.style.left = X+'px';
 // elemento.style.top = Y+'px';
 }
 }
 
 
 
function main(){
 //  $cards[3] = objReferencias.length-1

 // ActualizarVista($cards,objReferencias);   

container[1].addEventListener('touchstart', (e)=>{
start = new Date();
  carta[1].style.transform = 'scale(.7) rotateX(0deg) rotateY(0deg)';
});
container[1].addEventListener('touchmove', (e)=>{
  DetectarMovimiento(container[1],carta[1],'invertirX',e)
});

container[1].addEventListener('touchend',(e)=>{

});

}