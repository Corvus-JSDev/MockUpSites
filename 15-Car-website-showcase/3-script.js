"use strict";

//document.querySelector("#");

const heroTopText = document.querySelector("#hero_top_div");
const heroTopImg = document.querySelector("#herotop_img");
const heroTopButton = document.querySelector("#hero__top__text > button");

const heroBottomText = document.querySelector("#hero_bottom_div");
const heroBottomImg = document.querySelector("#herobottom_img");
const heroBottomButton = document.querySelector("#hero__bottom__text > button");

const reviewTitle = document.querySelector("#reviews-title");

const leftReviews = document.querySelectorAll("#left-reviews p");
const rightReviews = document.querySelectorAll("#right-reviews p");

const qualityPoints = document.querySelectorAll("#quality_desc > div");

// This will animate the first items to load on the page
const amountToMove = "50px";
const amountToLeftReviews = "-100px";
const amountToRightReviews = "100px";

window.onload = () => {
	document.documentElement.scrollTop = 0;
};

function setInitValues() {
	document.body.style.overflow = "hidden";

	heroTopText.style.top = amountToMove;
	heroTopText.style.opacity = 0;
	heroTopButton.style.top = amountToMove;
	heroTopButton.style.opacity = 0;
	heroTopImg.style.top = amountToMove;
	heroTopImg.style.opacity = 0;

	heroBottomText.style.top = amountToMove;
	heroBottomText.style.opacity = 0;
	heroBottomButton.style.top = amountToMove;
	heroBottomButton.style.opacity = 0;
	heroBottomImg.style.top = amountToMove;
	heroBottomImg.style.opacity = 0;

	reviewTitle.style.top = "75px";

	leftReviews.forEach((review1) => {
		review1.style.left = amountToLeftReviews;
		review1.style.opacity = 0;
	});
	rightReviews.forEach((review2) => {
		review2.style.left = amountToRightReviews;
		review2.style.opacity = 0;
	});

	qualityPoints.forEach((quality) => {
		quality.style.top = "100px";
	});
}
setInitValues();

function initAnimationOnFirstVisit() {
	heroTopText.style.top = "0";
	heroTopText.style.opacity = 1;
	heroTopImg.style.top = "0";
	heroTopImg.style.opacity = 1;
	setTimeout(() => {
		heroTopButton.style.top = "0";
		heroTopButton.style.opacity = 1;
	}, 300);

	heroBottomText.style.top = "0";
	heroBottomText.style.opacity = 1;
	heroBottomImg.style.top = "0";
	heroBottomImg.style.opacity = 1;
	setTimeout(() => {
		heroBottomButton.style.top = "0";
		heroBottomButton.style.opacity = 1;
		heroBottomButton.style.opacity = 1;
	}, 300);
}

const loadingScreen = document.querySelector("#loading-container");

setTimeout(() => {
	loadingScreen.setAttribute("style", "animation: opacityChange 1s ease;");
	setTimeout(() => {
		loadingScreen.style.display = "none";
		document.body.style.overflowY = "scroll";
	}, 300);
	setTimeout(() => {
		initAnimationOnFirstVisit();
	}, 500);
}, 2000);

const leftReviewsArray = Array.from(leftReviews);
const rightReviewsArray = Array.from(rightReviews);
const qualityPointsArray = Array.from(qualityPoints);

window.addEventListener("scroll", () => {
	console.log(window.scrollY);

	let windowY = window.scrollY;

	if (windowY >= 340) {
		reviewTitle.style.top = "0";
	} else {
		reviewTitle.style.top = "75px";
	}

	// Left reviews
	if (windowY >= 470) {
		leftReviewsArray[0].style.left = "0";
		leftReviewsArray[0].style.opacity = 1;
	} else {
		leftReviewsArray[0].style.left = amountToLeftReviews;
		leftReviewsArray[0].style.opacity = 0;
	}

	if (windowY >= 825) {
		leftReviewsArray[1].style.left = "0";
		leftReviewsArray[1].style.opacity = 1;
	} else {
		leftReviewsArray[1].style.left = amountToLeftReviews;
		leftReviewsArray[1].style.opacity = 0;
	}
	if (windowY >= 1190) {
		leftReviewsArray[2].style.left = "0";
		leftReviewsArray[2].style.opacity = 1;
	} else {
		leftReviewsArray[2].style.left = amountToLeftReviews;
		leftReviewsArray[2].style.opacity = 0;
	}
	if (windowY >= 1550) {
		leftReviewsArray[3].style.left = "0";
		leftReviewsArray[3].style.opacity = 1;
	} else {
		leftReviewsArray[3].style.left = amountToLeftReviews;
		leftReviewsArray[3].style.opacity = 0;
	}

	// Right reviews
	if (windowY >= 700) {
		rightReviewsArray[0].style.left = "0";
		rightReviewsArray[0].style.opacity = 1;
	} else {
		rightReviewsArray[0].style.left = amountToRightReviews;
		rightReviewsArray[0].style.opacity = 0;
	}
	if (windowY >= 970) {
		rightReviewsArray[1].style.left = "0";
		rightReviewsArray[1].style.opacity = 1;
	} else {
		rightReviewsArray[1].style.left = amountToRightReviews;
		rightReviewsArray[1].style.opacity = 0;
	}
	if (windowY >= 1330) {
		rightReviewsArray[2].style.left = "0";
		rightReviewsArray[2].style.opacity = 1;
	} else {
		rightReviewsArray[2].style.left = amountToRightReviews;
		rightReviewsArray[2].style.opacity = 0;
	}
	if (windowY >= 1760) {
		rightReviewsArray[3].style.left = "0";
		rightReviewsArray[3].style.opacity = 1;
	} else {
		rightReviewsArray[3].style.left = amountToRightReviews;
		rightReviewsArray[3].style.opacity = 0;
	}

	if (windowY >= 2220) {
		for (let i = 0; i < qualityPointsArray.length; i++) {
			const element = qualityPointsArray[i];

			setTimeout(() => {
				element.style.top = "0";
			}, 200 * i);
		}
	} else {
		for (let i = 0; i < qualityPointsArray.length; i++) {
			const element = qualityPointsArray[i];
			element.style.top = "100px";
		}
	}
});
