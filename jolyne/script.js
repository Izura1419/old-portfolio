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

	open.style.left = "15vw";
	open.style.cursor = "default";
	open.innerHTML = "14 лет. Курск";
	/*Ввожу промис через стрелочную функцию, который отсчитывает время после нажатия на кнопку и запускает функцию reverReverse()*/
	let promise = new Promise(resolve => {
 		setTimeout(() => resolve(reverReverse()), 5000);
	});
	/*Создаю условие для работы промиса, в моём случае это равно true*/
	promise.then;
}

/*Ввожу функцию, которая возвращает имя и фамилию на свои места и удаляет содержимое кнопки*/
function reverReverse(){
	name.style.transform = "translate(-50vw,-50vh)";
	surname.style.transform = "translate(-50vw,-50vh)";

	open.innerHTML = "";
}