// let formClick = document.getElementById ('clickMe'); 
// console.log (formClick);
// let footerBackground = document.body.querySelector ('.footer');
// console.log (footerBackground);
// // function mouseForm (){
// // 	alert ('Натисніть кнопку і відправте форму');
// // 	}
// // formClick.addEventListener ('mouseenter', mouseForm);

// function sendForm (){
// 	let formSend = document.body.querySelector ('.block-form');
// 	console.log (formSend);
// 	let formInput = document.body.querySelector ('.right form');
// 	console.log (formInput);

// 	formInput.style.display = "none";
// 	formSend.style.display = "block";
// }

// formClick.addEventListener ('click', sendForm);

let windowOpen = document.body.querySelector ('.window');
	console.log (windowOpen);
let windowClick = document.body.querySelector ('.window-block button');
	console.log (windowClick);
function clickWindow () {
	windowOpen.style.display = "none";
}
windowClick.addEventListener ('click', clickWindow );

function timeWindow () {
	windowOpen.style.display = "block";
}
// setTimeout(timeWindow, 2000);


let helpWindow = document.body.querySelector ('.help-window');
	console.log (helpWindow);
let helpButton = document.body.querySelector ('.help-button button');
	console.log (helpButton);
let helpButtonClose = document.body.querySelector ('.help-button-close button');
	console.log (helpButtonClose);	
function callbackWindow () {
	helpWindow.style.display = "block";
	helpButtonClose.style.display = "block";
}
helpButton.addEventListener ('click', callbackWindow );
// helpWindow.style.display = "none";
function helpButtonOnly () {
	helpWindow.style.display = "none";
	helpButtonClose.style.display = "none";
}
helpButtonClose.addEventListener ('click', helpButtonOnly );



// function windowOut () {
// 	helpWindow.style.display = "none";
// }
// setTimeout(windowOut, 2000);


let backToTop = document.body.querySelector ('.back-to-top button');
console.log (backToTop);
backToTop.addEventListener ('click', backUp);
function backUp (){
	window.scrollTo(0,0);
}



window.addEventListener('scroll', () => {
	if (document.documentElement.scrollTop > document.documentElement.clientHeight/4) {		
		backToTop.style.display = "block";
	} else {
		backToTop.style.display = "none";
	}
} )

let menuButton = document.body.querySelector ('.menu-button button.open');

let menuButtonClose = document.body.querySelector ('.menu-button button.close');
console.log (menuButton);
let mainMenu = document.body.querySelector ('.main-menu.mobile');
console.log (mainMenu);
let mobileMenuItem = document.body.querySelectorAll ('.main-menu.mobile a');
console.log (mobileMenuItem);
menuButton.addEventListener ('click', showMenu);
function showMenu () {
mainMenu.style.display = "block";
menuButton.style.display = "none";
menuButtonClose.style.display = "block";
}
menuButtonClose.addEventListener ('click', hideMenu);
function hideMenu () {
mainMenu.style.display = "none";
menuButtonClose.style.display = "none";
menuButton.style.display = "block";
}
for (let a=0; a<mobileMenuItem.length; a++){
	mobileMenuItem[a].addEventListener ('click', hideMenu);	
}
