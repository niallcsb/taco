import mainReviewArray from "./data.js";

// Create Reviews

const mainSection = document.querySelector(".mainSection");

mainReviewArray.forEach((item) => {
	const reviewItem = document.createElement("a");
	reviewItem.classList.add("reviewLink");
	reviewItem.setAttribute("href", `${item.link}`);
	reviewItem.setAttribute("tabindex", "0");
	reviewItem.innerHTML = `
			<article class="review" style="background-image:url(${item.image})">
				<h4 class="reviewDate">${item.date}</h4>
				<span class="reviewHeadings">
					<h2 class="headline">${item.headline}</h2>
					<h3 class="subhead">${item.subhead}</h3>
				</span>
			</article>
	`
	mainSection.append(reviewItem);
});

// document.querySelectorAll(".reviewItem").forEach((item) => {
// 	addEventListener(
//   "mouseenter",
//   () => {
//     reviewItem.classList.add("blue");
//   },
//   false
// );
// });
//
// document.querySelectorAll(".reviewItem").forEach((item) => {
// 	addEventListener(
//   "mouseleave",
//   () => {
//     reviewItem.classList.add("blue");
//   },
//   false
// );
// });

// Overlay Function

// Create hamburger / x icons

// Hamburger
const hbBtn = `
	<svg class="headMenu" xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 24 24" width="3em" fill="#ED1D20">
		<path d="M0 0h24v24H0V0z" fill="none"/>
		<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
	</svg>
`;

// X
const xBtn = `
	<svg class="headMenu" xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 24 24" width="3em" fill="#ED1D20">
		<path d="M0 0h24v24H0V0z" fill="none"/>
		<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
	</svg>
`

// Turn icons into buttons

const newButton = document.createElement("button");
newButton.classList.add("openBtn");
newButton.innerHTML = hbBtn;
let btnStatus = true;

// Function to open and close the overlay

const header = document.querySelector("header");
const headNav = document.querySelector(".headNav");
const headNavList = document.querySelector(".headNavList");

newButton.addEventListener('click', () => {
	if (btnStatus === true) {
		btnStatus = false;
		header.style.height = "100vh";
		headNav.style.display = "block";
		header.addEventListener('transitionend', () => {
			headNavList.style.opacity = "1";
		});
		newButton.innerHTML = xBtn;
	} else if (btnStatus === false) {
		btnStatus = true;
		header.style.height = "3em";
		headNav.style.display = "none";
		header.addEventListener('transitionend', () => {
			headNavList.style.opacity = "0";
		});
		newButton.innerHTML = hbBtn;
	}
});

// Reset everything on display change

let windowWidth;

setInterval(() => {
	windowWidth = window.innerWidth;
	if (windowWidth > 425) {
		// document.querySelector("header").style.removeProperty("height");
		// document.querySelector(".headNav").style.removeProperty("display");
		header.removeAttribute('style');
		headNav.removeAttribute('style');
		headNavList.removeAttribute('style');
		if (btnStatus !== true){
			newButton.innerHTML = hbBtn;
			btnStatus = true;
		}
	};
}, 1);

// Append button to header

header.append(newButton);
