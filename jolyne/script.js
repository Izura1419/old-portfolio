/*Ввожу переменные*/
let name = document.querySelector("#one"); //Имя
let surname = document.querySelector("#two"); //Фамилия
let open = document.querySelector("span"); //Кнопка "Открыть" 
/*Ввожу функцию, которая создаёт анимацию полёта имени и фамилии*/
function startFly() {
	name.style.animation = "fly 8s linear 0s infinite";
	surname.style.animation = "fly2 8s linear 0s infinite";
}
setTimeout(startFly(), 1000); //Эта функция появится спустя 1секунду после обновления сайта

/*Ввожу функцию, которая переворачивает имя и фамилию и заменяет кнопку на возраст и город*/
function reverse(){
	name.style.transform = "translate(-50%,-50%) rotateX(180deg)";
	surname.style.transform = "translate(-50%,-50%) rotateX(180deg)";
/*Ввожу функцию, которая проверяет ширину экрана устройства*/
	function check() {
	  if (window.matchMedia("(max-width: 1024px)").matches) { //Если окно устройства равно тому-то, делает это
	    posit = "60%"; /*Позиция кнопки будет 80vw*/
	    open.style.width = "50%"; /*Её ширина 50wv*/
	  } 
	  else{
	  	posit = "30%"; /*В противном случае позиция будет 15vw*/
	  }
}
check();// Вызов функции прослушивателя во время выполнения

	open.style.left = posit; /*Позиция будет равна переменной posit*/
	open.style.cursor = "default"; /*Курсор стандартный*/
	open.innerHTML = "14 лет. Россия"; /*Значение кнопки изменяется*/
	/*Ввожу промис через стрелочную функцию, который отсчитывает время после нажатия на кнопку и запускает функцию reverReverse()*/
	let promise = new Promise(resolve => {
 		setTimeout(() => resolve(reverReverse()), 5000);
	});
	/*Создаю условие для работы промиса, в моём случае это равно true*/
	promise.then;
}

/*Ввожу функцию, которая возвращает имя и фамилию на свои места и убирает кнопку*/
function reverReverse(){
	name.style.transform = "translate(-50%,-50%)";
	surname.style.transform = "translate(-50%,-50%)";

	open.style.opacity = "0";
}


let sclboy = document.querySelector(".sclboy");

	sclboy.onclick = function(){
		let za = document.createElement("span");
		za.id = "eEZa";
		za.innerHTML = "за ";
		
		function add(){
			sclboy.appendChild(za);
		}
		add();
	}

function get(max,min){
	let f = Math.floor(Math.random() * (max - min + 1)) + min;
	return f;
}

	let oneDL = document.querySelector(".oneDL");
	let twoDL = document.querySelector(".twoDL");
	let threeDL = document.querySelector(".threeDL");

	function stir(language){
	let getNum = get(3,1);
		if(getNum == 1){
			language.innerHTML = "html";
		}
		if(getNum == 2){
			language.innerHTML = "css";
		}
		if(getNum == 3){
			language.innerHTML = "js";
		}
	}
	oneDL.onclick = function(){
		stir(oneDL);
		stir(twoDL);
		stir(threeDL);
	}
	twoDL.onclick = function(){
		stir(oneDL);
		stir(twoDL);
		stir(threeDL);
	}
	threeDL.onclick = function(){
		stir(oneDL);
		stir(twoDL);
		stir(threeDL);
	}

	let wrapper = document.querySelector(".wrapper");
	let ySlf = document.querySelector(".ySlf");

function screamer(){
	//wrapper.style.display = "none";
	//ySlf.style.display = "inline-block";
}
function silence(){
	wrapper.style.display = "inline-block";
	ySlf.style.display = "none";
}
	setInterval(screamer, 10000);
	setInterval(silence, 10500);

let turnEverAroun = document.querySelector(".turnEverAroun");
let projects = document.querySelector(".myProjects");

let wrd = document.querySelector(".wrd");
let wrd1 = document.querySelector(".wrd1");
let wrd2 = document.querySelector(".wrd2");
let wrd3 = document.querySelector(".wrd3");
let wrd4 = document.querySelector(".wrd4");
let wrd5 = document.querySelector(".wrd5");
let wrd6 = document.querySelector(".wrd6");
let wrd7 = document.querySelector(".wrd7");
let wrd8 = document.querySelector(".wrd8");
let wrd9 = document.querySelector(".wrd9");

	function flipOver(letter){
	let getNum = get(5,1);
		if(getNum == 1){
			letter.style.transform = "rotateX(180deg)";
			letter.style.color = "black";
		}
		if(wrd.style.color == "black" && wrd1.style.color == "black" && wrd2.style.color == "black" &&
		wrd3.style.color == "black" && wrd4.style.color == "black" && wrd5.style.color == "black" &&
		wrd6.style.color == "black" && wrd7.style.color == "black" && wrd8.style.color == "black" &&
		wrd9.style.color == "black"){
			turnEverAroun.style.display = "none";
		}
	}
	wrd.onclick = function(){
		flipOver(wrd);
		flipOver(wrd1);
		flipOver(wrd2);
		flipOver(wrd3);
		flipOver(wrd4);
		flipOver(wrd5);
		flipOver(wrd6);
		flipOver(wrd7);
		flipOver(wrd8);
		flipOver(wrd9);
	}
	wrd1.onclick = function(){
		flipOver(wrd);
		flipOver(wrd1);
		flipOver(wrd2);
		flipOver(wrd3);
		flipOver(wrd4);
		flipOver(wrd5);
		flipOver(wrd6);
		flipOver(wrd7);
		flipOver(wrd8);
		flipOver(wrd9);
	}
	wrd2.onclick = function(){
		flipOver(wrd);
		flipOver(wrd1);
		flipOver(wrd2);
		flipOver(wrd3);
		flipOver(wrd4);
		flipOver(wrd5);
		flipOver(wrd6);
		flipOver(wrd7);
		flipOver(wrd8);
		flipOver(wrd9);
	}
	wrd3.onclick = function(){
		flipOver(wrd);
		flipOver(wrd1);
		flipOver(wrd2);
		flipOver(wrd3);
		flipOver(wrd4);
		flipOver(wrd5);
		flipOver(wrd6);
		flipOver(wrd7);
		flipOver(wrd8);
		flipOver(wrd9);
	}
	wrd4.onclick = function(){
		flipOver(wrd);
		flipOver(wrd1);
		flipOver(wrd2);
		flipOver(wrd3);
		flipOver(wrd4);
		flipOver(wrd5);
		flipOver(wrd6);
		flipOver(wrd7);
		flipOver(wrd8);
		flipOver(wrd9);
	}
	wrd5.onclick = function(){
		flipOver(wrd);
		flipOver(wrd1);
		flipOver(wrd2);
		flipOver(wrd3);
		flipOver(wrd4);
		flipOver(wrd5);
		flipOver(wrd6);
		flipOver(wrd7);
		flipOver(wrd8);
		flipOver(wrd9);
	}
	wrd6.onclick = function(){
		flipOver(wrd);
		flipOver(wrd1);
		flipOver(wrd2);
		flipOver(wrd3);
		flipOver(wrd4);
		flipOver(wrd5);
		flipOver(wrd6);
		flipOver(wrd7);
		flipOver(wrd8);
		flipOver(wrd9);
	}
	wrd7.onclick = function(){
		flipOver(wrd);
		flipOver(wrd1);
		flipOver(wrd2);
		flipOver(wrd3);
		flipOver(wrd4);
		flipOver(wrd5);
		flipOver(wrd6);
		flipOver(wrd7);
		flipOver(wrd8);
		flipOver(wrd9);
	}
	wrd8.onclick = function(){
		flipOver(wrd);
		flipOver(wrd1);
		flipOver(wrd2);
		flipOver(wrd3);
		flipOver(wrd4);
		flipOver(wrd5);
		flipOver(wrd6);
		flipOver(wrd7);
		flipOver(wrd8);
		flipOver(wrd9);
	}
	wrd9.onclick = function(){
		flipOver(wrd);
		flipOver(wrd1);
		flipOver(wrd2);
		flipOver(wrd3);
		flipOver(wrd4);
		flipOver(wrd5);
		flipOver(wrd6);
		flipOver(wrd7);
		flipOver(wrd8);
		flipOver(wrd9);
	}

	let dataAndTime = document.querySelector(".dataAndTime");

	let today = new Date();
	
	let hours = today.getHours();
	let minutes = today.getMinutes();
	
	let timeOfDay = (hours < 6) ? "Ночь" : 
	(hours < 12) ? "Утро" :
	(hours < 18) ? "День" :
	"Вечер" ;

	dataAndTime.innerHTML = timeOfDay + ". " + hours + ":" + minutes;

let site1Screen1 = document.querySelector(".site1Screen1");
let site1Screen2 = document.querySelector(".site1Screen2");
let site1Screen3 = document.querySelector(".site1Screen3");

let startPart = document.querySelector(".startPart2");

function stopViewing(screen){
		if (window.matchMedia("(max-width: 1024px)").matches) { //Если окно устройства равно тому-то, делает это
		    screen.style.width = "90%";
			screen.style.borderRadius = "0%";
			screen.style.clipPath = "none";
			screen.style.position = "relative";
			screen.style.left = "5%";
			screen.style.paddingBottom = "5%";
	  } 
	  else{
	  	screen.style.width = "30%";
		screen.style.borderRadius = "0%";
		screen.style.clipPath = "none";
		screen.style.top = "35%";
		screen.style.left = "60%";
	  }
	}

function clickForAllScreens(screen){
			if (window.matchMedia("(max-width: 1024px)").matches) { //Если окно устройства равно тому-то, делает это
			    screen.style.width = "100%";
				screen.style.borderRadius = "50%";
				screen.style.clipPath = "circle(50% at 50% 50%)";
				screen.style.top = "40%";
				screen.style.left = "0%";
				startPart.style.top = "75%";
	  } 
	  else{
	  	screen.style.width = "60%";
		screen.style.borderRadius = "50%";
		screen.style.clipPath = "circle(50% at 50% 50%)";
		screen.style.top = "15%";
		screen.style.left = "22%";
	  }

	/*Ввожу промис через стрелочную функцию, который отсчитывает время после нажатия на кнопку и запускает функцию reverReverse()*/
	let promise = new Promise(resolve => {
 		setTimeout(() => resolve(stopViewing(screen)), 6000);
	});
	/*Создаю условие для работы промиса, в моём случае это равно true*/
	promise.then;
}

	site1Screen1.onclick = function(){
		clickForAllScreens(this);
	}
	site1Screen2.onclick = function(){
		clickForAllScreens(this);
	}
	site1Screen3.onclick = function(){
		clickForAllScreens(this);
	}