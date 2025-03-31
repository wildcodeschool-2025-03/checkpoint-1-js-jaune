document.addEventListener("DOMContentLoaded", () => {
	const avatar = document.querySelector(".avatar");

	avatar.addEventListener("click", () => {
		avatar.src = "image/avatar.svg";
	});

	const button = document.querySelector(".button");

	function changeColor() {
		const color = prompt("Enter a color");

		if (color) {
			const newBgColor = document.querySelectorAll(".pink-bg");

			for (let element of newBgColor) {
				element.style.backgroundColor = color;
			}

			const newTextColor = document.querySelectorAll(".pink-text");

			for (let element of newTextColor) {
				element.style.color = color;
			}
		}
	}

	function changeName() {
		const name = prompt("Enter your name");

		if (name) {
			const text = document.getElementById("firstname");
			text.textContent = name;
			text.style.color = "white";
		}
	}

	if (button) {
		button.addEventListener("click", function () {
			changeColor();
			changeName();
		});
	}
});
