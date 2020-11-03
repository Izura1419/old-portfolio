console.log("Улыбнись \n Если ты открыл консоль, то у тебя есть либо ноутбук, либо ПК и доступ к интернету, а значит, ты можешь найти ответ на множество различных вопросов. \n И взамен на это ты зашёл на этот сайт?");
/*Ввожу переменные*/
let name = document.querySelector("#one"); //Имя
let surname = document.querySelector("#two"); //Фамилия
let open = document.querySelector(".span"); //Кнопка "Открыть" 
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
	let posit;
	function check() {
	  if (window.matchMedia("(max-width: 1024px)").matches) { //Если окно устройства равно тому-то, делает это
	    posit = "80%"; /*Позиция кнопки будет 80vw*/
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

//создаю функцию, которая при клике на блок добавляет к нему часть пасхалки - слово "за"
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
//функция, генерирующая случаные числа в диапазоне (большее, меньшее)
function get(max,min){
	let f = Math.floor(Math.random() * (max - min + 1)) + min;
	return f;
}
//функция, которая перемешивает три слова в тексте по клику
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
//функция, которая вызывает появление надписи "СОБОЙ" спустя 20 секунд после обновления сайта и закрывает её
function screamer(){
	wrapper.style.display = "none";
	ySlf.style.display = "inline-block";
}
function silence(){
	wrapper.style.display = "inline-block";
	ySlf.style.display = "none";
}
	setInterval(screamer, 20000);
	setInterval(silence, 20100);
//буквы, который по рандому переворачиваются или не переворачиваются
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

	function flipOver(letter){//если все буквы перевёрнуты, то надпись пропадает
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
//небольшая пасхалка, которая показывает какое сейчас время суток, исходя из часов
	let dataAndTime = document.querySelector(".dataAndTime");

	let today = new Date();
	
	let hours = today.getHours();
	let minutes = today.getMinutes();
	
	let timeOfDay = (hours < 6) ? "Ночь" : 
	(hours < 12) ? "Утро" :
	(hours < 18) ? "День" :
	"Вечер" ;

	dataAndTime.innerHTML = timeOfDay + ". " + hours + ":" + minutes;
//каждая из трёх картинок увеличивается, появляется в одном месте и возвращается на другое место
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
			    screen.style.width = "95%";
				screen.style.borderRadius = "50%";
				screen.style.clipPath = "circle(50% at 50% 50%)";
				screen.style.top = "45%";
				screen.style.left = "0";
				startPart.style.top = "80%";
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
let epic = document.querySelector(".epic");
//массив, который при клике выбирает любое число и вставляет его в текст
	epic.onclick = function(){
		let whatYouCanDo = ["взять животное из приюта", "отправиться путешествовать автостопом", "устроить соревнования по сну", "наесться до отвала", "пробежать марафон", "сделать сто отжиманий", "взять велосипед и ехать куда глаза глядят", "смастерить плот и проплыть по реке", "прожить неделю без соцсетей", "посмотреть короткометражное аниме и расплакаться", "послушать все альбомы Короля и Шута"];
		let numberOfElement = get(10,0);
		this.innerHTML = whatYouCanDo[numberOfElement];
	}
//функция, которая меняет картинки
let site3Screen1 = document.querySelector(".site3Screen1");
let site3Screen2 = document.querySelector(".site3Screen2");
let site3Screen3 = document.querySelector(".site3Screen3");

	site3Screen1.onclick = function(){
		site3Screen2.style.animation = "showYouOneOne 1s ease";
		setTimeout(function(){
			site3Screen2.style.animation = "showYouOneTwo 1s ease";
		}, 1000);
		site3Screen2.style.zIndex = 1;

		site3Screen3.style.zIndex = 0;
		site3Screen1.style.zIndex = 0;
	}
	site3Screen2.onclick = function(){
		site3Screen3.style.animation = "showYouTwoOne 1s ease";
		setTimeout(function(){
			site3Screen3.style.animation = "showYouTwoTwo 1s ease";
		}, 1000);
		site3Screen3.style.zIndex = 1;

		site3Screen1.style.zIndex = 0;
		site3Screen2.style.zIndex = 0;
	}
	site3Screen3.onclick = function(){
		site3Screen1.style.animation = "showYouThreeOne 1s ease";
		setTimeout(function(){
			site3Screen1.style.animation = "showYouThreeTwo 1s ease";
		}, 1000);
		site3Screen1.style.zIndex = 1;

		site3Screen2.style.zIndex = 0;
		site3Screen3.style.zIndex = 0;
	}

//функция, которая меняет цвет фона на рандомный
let pageEight = document.querySelector(".pageEight");

let earnEpilepsy = document.querySelector(".earnEpilepsy");

	earnEpilepsy.onclick = function(){
		if (window.matchMedia("(max-width: 1024px)").matches) { //Если окно устройства равно тому-то, делает это
		    earnEpilepsy.innerHTML = "Заработали?";
			earnEpilepsy.style.color = "white";

			earnEpilepsy.style.paddingBottom = "2%";
			earnEpilepsy.style.paddingLeft = "0.5%";
			earnEpilepsy.style.paddingTop = "1%";
			earnEpilepsy.style.border = "0.5em solid white";
		    earnEpilepsy.style.fontSize = "1.5em";

		    earnEpilepsy.style.backgroundColor = "blue";

		    earnEpilepsy.style.clipPath = "circle(50% at 50% 50%)";
	  } 
	  else{
	  	earnEpilepsy.innerHTML = "Заработали?";
		earnEpilepsy.style.color = "white";

		earnEpilepsy.style.paddingBottom = "2%";
		earnEpilepsy.style.paddingLeft = "0.5%";
		earnEpilepsy.style.paddingTop = "1%";
		earnEpilepsy.style.border = "0.5em solid white";

		earnEpilepsy.style.backgroundColor = "blue";

		earnEpilepsy.style.clipPath = "circle(30% at 50% 50%)";
	  }

		function set(){
			setTimeout(changeBackgroundColor,0);
		}

		function changeBackgroundColor() {
			let a = get(255,0);
			let b = get(255,0);
			let c = get(255,0);

			let d = "rgb" + "(" + a + "," + b + "," + c + ")";

			pageEight.style.backgroundColor = d ;

			setTimeout(changeBackgroundColor,100);
		}

		set();
	}

//функция, которая постепенно делает видимыми точки, а после, также постепенно, меняет их цвета 
	let pointOne = document.querySelector(".pointOne");
	let pointTwo = document.querySelector(".pointTwo");
	let pointThree = document.querySelector(".pointThree")

setTimeout(createPointOne,1000);
	function createPointOne(){
		pointOne.style.display = "inline-block";
			setTimeout(createPointTwo,3000);
				function createPointTwo(){
					pointTwo.style.display = "inline-block";
						setTimeout(createPointThree,3000);
							function createPointThree(){
								pointThree.style.display = "inline-block";
									setTimeout(deletePoints,3000);
										function deletePoints(){
											pointOne.style.display = "none";
											pointTwo.style.display = "none";
											pointThree.style.display = "none";

											setTimeout(createPointOne,1000);
				}
			}
		}
	}
//функция, которая по клику перемещает картинку на рандомную позицию
	let site5Screen1 = document.querySelector(".site5Screen1");
	let site5Screen2 = document.querySelector(".site5Screen2");

	function getLocationPoint(screenFive,topPoint,leftPoint){
		screenFive.style.top = topPoint + "%";
		screenFive.style.left = leftPoint + "%";

		if (window.matchMedia("(max-width: 1024px)").matches) { //Если окно устройства равно тому-то, делает это
			    screenFive.style.left = get(20,0) + "%";
	  		}
	}
//функция, которая проверяет правильность кодового слова и если оно неверно, то выдаёт анекдот
let passwordForEmail = document.querySelector(".passwordForEmail");
let buttonForEmail = document.querySelector(".buttonForEmail");

	function checkCod(){
		let codWord = passwordForEmail.value;

		if(codWord == "Следи за собой" || codWord == "следи за собой" || codWord == "следи за СОБОЙ" || codWord == "uchihaizura1219@gmail.com"){
			passwordForEmail.value = "uchihaizura1219@gmail.com";
			if (window.matchMedia("(max-width: 1024px)").matches) { //Если окно устройства равно тому-то, делает это
			    passwordForEmail.style.width = "80%";
				passwordForEmail.style.fontSize = "1.5em";
				passwordForEmail.style.paddingLeft = "4%";
	  		} 
		}
		else{
			alert(`${"Однажды Эрнест Хемингуей поспорил что сможет написать самый короткий рассказ, который растрогает любого :"}  \n  ${" — "}  ${passwordForEmail.value}`);
		}
	}
//функция, которая телепортирует пользователя по ссылке-якорю. Ссылки якоря находятся в массиве, который перебирает цикл
let navigationBefore = document.querySelector(".navigationBefore");

	function navigationBeforeOpen(){
		navigationBefore.style.display = "inline-block";
		navigationBefore.style.backgroundColor = "rgb(38,120,255)";
	}
	function navigationBeforeClose(){
		navigationBefore.style.display = "none";
		navigationBefore.style.backgroundColor = "rgba(38,120,255,0)";
	}

setTimeout(navigationBeforeOpen, 5000); 
setTimeout(navigationBeforeClose, 10000); 

let navigation = document.querySelector(".navigation");

let teleportLink = document.querySelectorAll(".teleportLink");
let teleport = document.querySelector(".teleport");
let spin = document.querySelector(".spin");

	 for (let elem of teleportLink) {
    	elem.onclick = function(){
    		navigation.style.zIndex = 0;

    		teleport.style.opacity = 1;
			teleport.style.zIndex = "5";

			spin.style.transform = "translate(-50%,-50%) rotateZ(500deg)"

			setTimeout(stopLoading, 1000);
    	}
  }

  		function stopLoading(){
  			navigation.style.zIndex = 10;

  			teleport.style.opacity = 0;
			teleport.style.zIndex = "-5";

			spin.style.transform = "translate(-50%,-50%) rotateZ(-500deg)"
  		}