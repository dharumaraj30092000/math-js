var max=500;
var min=200;

function run(){
	let random=Math.floor(Math.random()* (max-min)+min);
	console.log(random);
}

var a=Math.ceil(-13.5);//To give nearest large number(-x->x direction)//
console.log(a);
var b=Math.floor(-13.5);//To give nearest small number(-x->x direction)//
console.log(b);
var c=Math.round(-13.5);//To give nearest large number(float 5 above) and nearest small number(float 5 below)(-x->x direction)//
console.log(c);
var d=Math.abs(-13.5);//To give positive number//
console.log(d);