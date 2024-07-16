"use strict";

const imgContainer = document.querySelector("#product-imgs__img-container");
const imgs = Array.from(imgContainer.children);
imgs[0].style.opacity = 1;

const btnContainer = document.querySelector("#product-imgs__btn-container");
const circles = Array.from(document.querySelectorAll(".btn-container__circle-indicator"));

const nextImgBtn = document.querySelector("#product-imgs__next-btn");
const prevImgBtn = document.querySelector("#product-imgs__prev-btn");

let imgIndex = 1;
function updateImageContainer() {
	function updateOpacity(indexToChange) {
		for (let i = 0; i < circles.length; i++) {
			circles[i].style.opacity = 0.5;
		}
		circles[indexToChange].style.opacity = 1;

		for (let x = 0; x < imgs.length; x++) {
			imgs[x].style.opacity = 0;
		}
		imgs[indexToChange].style.opacity = 1;
	}

	switch (imgIndex) {
		case 1:
			imgContainer.style.left = "850px";
			updateOpacity(0);
			break;
		case 2:
			imgContainer.style.left = "-80px";
			updateOpacity(1);
			break;
		case 3:
			imgContainer.style.left = "-930px";
			updateOpacity(2);
			break;
	}
}

nextImgBtn.addEventListener("click", () => {
	imgIndex++;

	if (imgIndex <= 3) {
		updateImageContainer();
	}
	if (imgIndex > 3) {
		imgIndex = 1;
		updateImageContainer();
	}
});

prevImgBtn.addEventListener("click", () => {
	imgIndex--;

	if (imgIndex >= 1) {
		updateImageContainer();
	}
	if (imgIndex < 1) {
		imgIndex = 3;
		updateImageContainer();
	}
});
