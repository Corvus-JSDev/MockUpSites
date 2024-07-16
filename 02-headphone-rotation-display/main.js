// Get all the background divs
var backgrounds = document.querySelectorAll(".background");
// Get the slider and the images
const slider = document.querySelector(".slider-images");
const images = Array.from(slider.children);

const blueHPimg = images[0];
const redHPimg = images[1];
const whiteHPimg = images[2];

const blueBtn = document.querySelector(".skyblue-btn");
const redBtn = document.querySelector(".salmon-btn");
const whiteBtn = document.querySelector(".white-btn");

let imageIndex = 0;

// Set default img classes
blueHPimg.classList.add("active");
redHPimg.classList.add("next");
whiteHPimg.classList.add("previous");

// Resets all the imgs classes
function removeAllClassFromAllImgs() {
	images.forEach((image) => {
		image.classList.remove("active", "previous", "next");
	});
}

// Change the background color
function changeBackgroundTo(color) {
	// Set the opacity of all the background divs to 0
	backgrounds.forEach((background) => {
		background.style.opacity = 0;
	});

	// Fade in the selected background
	if (color == "blue") {
		backgrounds[0].style.opacity = 1;
	}
	if (color == "red") {
		backgrounds[1].style.opacity = 1;
	}
	if (color == "white") {
		backgrounds[2].style.opacity = 1;
	}
}

// Disable all buttons for a short time
const headphoneButtonSelectorsDiv = document.querySelector(".headphone-btn-color-selector");
const selectorButtons = Array.from(headphoneButtonSelectorsDiv.children);

function disableAllButtons(buttonClicked) {
	// First check if the buttons should actually be disabled
	let actuallyDisable;

	if (
		(buttonClicked == "blue" && blueHPimg.classList.contains("active")) ||
		(buttonClicked == "red" && redHPimg.classList.contains("active")) ||
		(buttonClicked == "white" && whiteHPimg.classList.contains("active"))
	) {
		actuallyDisable = false;
	} else {
		actuallyDisable = true;
	}

	// Disable them
	if (actuallyDisable) {
		selectorButtons.forEach((element) => {
			element.disabled = true;
		});

		setTimeout(() => {
			selectorButtons.forEach((element) => {
				element.disabled = false;
			});
		}, 700);
	}
}

// Button event listeners that also change the position of all the imgs
blueBtn.addEventListener("click", () => {
	disableAllButtons("blue");
	removeAllClassFromAllImgs();
	redHPimg.classList.add("next");
	whiteHPimg.classList.add("previous");
	blueHPimg.classList.add("active");
	changeBackgroundTo("blue");
});

redBtn.addEventListener("click", () => {
	disableAllButtons("red");
	removeAllClassFromAllImgs();
	whiteHPimg.classList.add("next");
	blueHPimg.classList.add("previous");
	redHPimg.classList.add("active");
	changeBackgroundTo("red");
});

whiteBtn.addEventListener("click", () => {
	disableAllButtons("white");
	removeAllClassFromAllImgs();
	blueHPimg.classList.add("next");
	redHPimg.classList.add("previous");
	whiteHPimg.classList.add("active");
	changeBackgroundTo("white");
});

// Mobile and desktop viewing compatibility, this will change the position of the white circle to the middle of the screen
function checkWindowWidth() {
	if (window.innerWidth <= 767) {
		// initial default background
		document.querySelector(".slider-main").style.background = "radial-gradient(50% 50% at 50% 90%, #d1e4f6 0%, #5f9ccf 100%)";

		// The background of the divs
		document.querySelector("#blue-BG").style.background = "radial-gradient(50% 50% at 50% 90%, #d1e4f6 0%, #5f9ccf 100%)";
		document.querySelector("#red-BG").style.background = "radial-gradient(50% 50% at 50% 90%, #ffb7b2 0%, #ed746e 100%)";
		document.querySelector("#white-BG").style.background = "radial-gradient(50% 50% at 50% 90%, #d7d7d7 0%, #979797 100%)";
	} else {
		document.querySelector(".slider-main").style.background = "radial-gradient(50% 50% at 70% 50%, #d1e4f6 0%, #5f9ccf 100%)";

		document.querySelector("#blue-BG").style.background = "radial-gradient(50% 50% at 70% 50%, #d1e4f6 0%, #5f9ccf 100%)";
		document.querySelector("#red-BG").style.background = "radial-gradient(50% 50% at 70% 50%, #ffb7b2 0%, #ed746e 100%)";
		document.querySelector("#white-BG").style.background = "radial-gradient(50% 50% at 70% 50%, #d7d7d7 0%, #979797 100%)";
	}
}

// Initially check the users width. Then rerun any time the user resizes the window
checkWindowWidth();
window.addEventListener("resize", () => {
	checkWindowWidth();
});
