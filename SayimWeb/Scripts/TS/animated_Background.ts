import { DrawableCircle } from './DrawableCircle.js';

//setting canvas element
let bg:HTMLCanvasElement = document.getElementById('background') as HTMLCanvasElement;
let circles:DrawableCircle[]=[];

//methods
let generateCircles = () =>{

	circles =[];
	for (let i=0; i<150; i++){
		circles.push(new DrawableCircle(bg));
	}
} 

let everyFrame = () =>{

	bg.getContext('2d')!.clearRect(0,0,bg.width,bg.height);

	circles.forEach(circle => {
		circle.Draw(bg);
	});
	requestAnimationFrame(everyFrame);
}

window.onresize = () =>{
	
	bg.height = document.body.scrollHeight;
	bg.width = window.innerWidth;
	bg.getContext('2d')!.clearRect(0,0,bg.width,bg.height);
	generateCircles();
}

//start

//setting background to height and width of window
bg.width = window.innerWidth;
bg.height = document.body.clientHeight;

generateCircles();
everyFrame();

