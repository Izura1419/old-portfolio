let name = document.querySelector("#one");
let surname = document.querySelector("#two");
let open = document.querySelector("span");

function startFly() {
	name.style.animation = "fly 8s linear 0s infinite";
	surname.style.animation = "fly2 8s linear 0s infinite";
}
setTimeout(startFly(), 1000);


function reverse(){
	name.style.transform = "translate(-50vw,-50vh) rotateX(180deg)";
	surname.style.transform = "translate(-50vw,-50vh) rotateX(180deg)";

	open.style.left = "15vw";
	open.style.cursor = "default";
	open.innerHTML = "14 лет. Курск";

	let promise = new Promise(resolve => {
 		setTimeout(() => resolve(reverReverse()), 5000);
	});

	promise.then;
}


function reverReverse(){
	name.style.transform = "translate(-50vw,-50vh)";
	surname.style.transform = "translate(-50vw,-50vh)";

	open.innerHTML = "";
}