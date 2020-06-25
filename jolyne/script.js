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
	name.style.transform = "translate(-50vw,-50vh) rotateX(180deg)";
	surname.style.transform = "translate(-50vw,-50vh) rotateX(180deg)";
/*Ввожу функцию, которая проверяет ширину экрана устройства*/
	function check() {
  if (window.matchMedia("(min-width: 600px) and (max-width: 1024px)").matches) { //Если окно устройства равно тому-то, делает это
    posit = "80vw"; /*Позиция кнопки будет 80vw*/
    open.style.width = "50vw"; /*Её ширина 50wv*/
  } 
  else{
  	posit = "15vw"; /*В противном случае позиция будет 15vw*/
  }
}
check();// Вызов функции прослушивателя во время выполнения

	open.style.left = posit; /*Позиция будет равна переменной posit*/
	open.style.cursor = "default"; /*Курсор стандартный*/
	open.innerHTML = "14 лет. Курск"; /*Значение кнопки изменяется*/
	/*Ввожу промис через стрелочную функцию, который отсчитывает время после нажатия на кнопку и запускает функцию reverReverse()*/
	let promise = new Promise(resolve => {
 		setTimeout(() => resolve(reverReverse()), 5000);
	});
	/*Создаю условие для работы промиса, в моём случае это равно true*/
	promise.then;
}


/*Ввожу функцию, которая возвращает имя и фамилию на свои места и убирает кнопку*/
function reverReverse(){
	name.style.transform = "translate(-50vw,-50vh)";
	surname.style.transform = "translate(-50vw,-50vh)";

	open.style.opacity = "0";
}