//importing nav element profiles for dimensions
//import { navElementProfile } from "./js/navElementProfile.js";
import { navElementProfile } from "./navElementProfile";


//fetching and assigning canvas navbar
let canvas:HTMLCanvasElement = document.getElementById("iconAnimate") as HTMLCanvasElement;
let ct:CanvasRenderingContext2D = canvas.getContext('2d')!;
canvas.height=55;
canvas.width=window.innerWidth;

//fetching and assigning 'Home' nav-icon
let nav_home = document.getElementById("nav_home")!;
let nav_past_proj = document.getElementById("nav_past_proj")!;
let nav_current_proj = document.getElementById("nav_current_proj")!;
let nav_cv_info = document.getElementById("nav_cv_info")!;

let x:number;
let y:number;
let sy:number;
let sx:number;
let endX:number;
let endY:number;

let finishedInitRun:boolean = false;
let currentFrame:number;

let speed:number =25;

onresize = ()=>{
    canvas.width=window.innerWidth;
}

let initialize = (elementProfile:navElementProfile)=>{

    sx = elementProfile.getStartX();
    sy = elementProfile.getStartY();

    endX = elementProfile.getEndX();
    endY = elementProfile.getEndY();

    finishedInitRun = false;
    ct.strokeStyle = "#F2F2F2";
    ct.lineWidth=2;
}

let stopAnimation = () =>{
    cancelAnimationFrame(currentFrame);
    ct.clearRect(0,0,canvas.width,canvas.height);
}

let drawStart = () =>{

    if (finishedInitRun){
        sy = sy-1;
        y = sy; 
        x = sx;

    } else{
        x = sx;
        y = sy; 
    }
    drawHighlightTop();
}

let drawHighlightTop = ()=>{
   
    ct.beginPath();
    ct.moveTo(sx,y);
    ct.lineTo(x, y);
    ct.stroke();

    if(x>=endX){
        drawRightSide();
    }else{
        if ((x+speed)>endX){
            x = endX;
        } else{
            x=x+speed;
        }
        currentFrame = requestAnimationFrame(drawHighlightTop);
    }
}

let drawRightSide = () =>{

    ct.beginPath();
    ct.moveTo(x,sy);
    ct.lineTo(x,y);
    ct.stroke();

    if(y>=endY){
        drawHighlightBottom();
    }else{
        if((y+speed)>endY){
            y = endY;
        }else{
            y=y+speed;
        }
        currentFrame = requestAnimationFrame(drawRightSide);
    }
}

let drawHighlightBottom = () =>{
    
    ct.beginPath();
    ct.moveTo(endX,y);
    ct.lineTo(x, y);
    ct.stroke();

    if(x<=sx){
        drawLeftSide();
    }else{
        if((x-speed)<sx){
            x = sx;
        }else{
            x=x-speed;
        }
        currentFrame = requestAnimationFrame(drawHighlightBottom);
    }
}

let drawLeftSide = () =>{

    ct.beginPath();
    ct.moveTo(x,endY);
    ct.lineTo(x,y);
    ct.stroke();

    if(y<=sy){
        if(!finishedInitRun){
            finishedInitRun = true;
            ct.strokeStyle = "#262626";
            ct.lineWidth=2;
            drawStart();
        }

    }else{
        if((y-speed)<sy){
            y = sy;
        }else{
            y=y-speed;
        }
        currentFrame = requestAnimationFrame(drawLeftSide);
    }
}

nav_home.onmouseenter  = ()=>{
    stopAnimation();
    initialize(navElementProfile.home_nav_item_profile);
    drawStart();
}

nav_home.onmouseleave = ()=>{
    stopAnimation();
}

nav_past_proj.onmouseenter = () =>{
    stopAnimation();
    initialize(navElementProfile.pastProject_nav_item_profile);
    drawStart();
}

nav_past_proj.onmouseleave = () =>{
    stopAnimation();
}

nav_current_proj.onmouseenter = () =>{
    stopAnimation();
    initialize(navElementProfile.currentProject_nav_item_profile);
    drawStart();
}

nav_current_proj.onmouseleave = () =>{
    stopAnimation();
}

nav_cv_info.onmouseenter = () =>{
    stopAnimation();
    initialize(navElementProfile.cvInfo_nav_item_profile);
    drawStart();
}

nav_cv_info.onmouseleave = () =>{
    stopAnimation();
}


