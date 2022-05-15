
document.addEventListener("DOMContentLoaded", (main));

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
function Actualizar(selectores,hijo,objs){
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

function desplazar(sel,obj,anim){
  if (l){ izquierda(sel,obj,anim)}
  if (!l){ Derecha(sel,obj,anim)}
}
// FUNCIONES SWIPE
function touch_start(event) {

        start_xPos = event.touches[0].pageX;
        start_yPos = event.touches[0].pageY;
        start_time = new Date();
    }
function TouchendHderech(event) {
        var end_xPos = event.changedTouches[0].pageX;
        var end_yPos = event.changedTouches[0].pageY;
        var end_time = new Date();
        let move_x = end_xPos - start_xPos;
        let move_y = end_yPos - start_yPos;
        let elapsed_time = end_time - start_time;
        if (Math.abs(move_x) > min_horizontal_move && Math.abs(move_y) < max_vertical_move && elapsed_time < within_ms) {
            if (move_x < 0 && puedeSwipe) {
                //alert("left");
                Izquierda($containers,objReferencias,animRL2)
            } if(move_x > 0 &&puedeSwipe) {
                //alert("right");
                Derecha()
            }
        }
    }
            


//PROGRAMA

  
  
 $containers[3] = objReferencias.length-1
  ActualizarVista($containers,objReferencias);   
                    
//EVENTOS USUARIO

}
   
