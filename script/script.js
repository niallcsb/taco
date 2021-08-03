import {archiveArray, mainArray} from "./data.js";

// Declare Variables
const header = document.querySelector("header");
const headNav = document.querySelector(".headNav");
const headNavList = document.querySelector(".headNavList");
const mainSection = document.querySelector(".mainSection");
const homeLink = document.querySelector(".home");
const archiveLink = document.querySelector(".archive");
const newButton = document.createElement("button");
const hbBtn = `
	<svg class="headMenu" xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 24 24" width="3em" fill="#ED1D20">
		<path d="M0 0h24v24H0V0z" fill="none"/>
		<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
	</svg>
`;
const xBtn = `
	<svg class="headMenu" xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 24 24" width="3em" fill="#ED1D20">
		<path d="M0 0h24v24H0V0z" fill="none"/>
		<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
	</svg>
`
let windowWidth;

// Declare Functions
// Populate reviews from the arrays
function sectionRefresh(array) {
	mainSection.innerHTML = ``;
	array.forEach((item) => {
		const reviewItem = document.createElement("a");
		reviewItem.classList.add("reviewLink");
		reviewItem.setAttribute("href", `${item.link}`);
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
};

// Reset mobile overlay
function resetOverlay() {
	header.removeAttribute('style');
	headNav.removeAttribute('style');
	headNavList.removeAttribute('style');
	if (btnStatus !== true){
		newButton.innerHTML = hbBtn;
		btnStatus = true;
	};
};

// Loads the homepage version of the array on page load. Will need to change/work on this
window.addEventListener('load', (event) => {
	sectionRefresh(mainArray);
});

// Changes content to the archive content when archive button is pressed
archiveLink.addEventListener('click', () => {
	mainSection.className = "archiveSection";
	sectionRefresh(archiveArray);
	archiveLink.style.display = "none";
	homeLink.style.display = "block";
	resetOverlay();
});

// Changes content to the homepage content when home button is pressed
homeLink.addEventListener('click', () => {
	mainSection.className = "mainSection";
	sectionRefresh(mainArray);
	homeLink.style.display = "none";
	archiveLink.style.display = "block";
	resetOverlay();
});

// Turn hamburger/X icons into a button and append it to the header
newButton.classList.add("openBtn");
newButton.innerHTML = hbBtn;
let btnStatus = true;
header.append(newButton);

// Function to open and close the overlay
newButton.addEventListener('click', () => {
	if (btnStatus === true) {
		btnStatus = false;
		header.style.height = "100vh";
		headNav.style.display = "flex";
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

// Reset everything on change from mobile view to tablet/desktop views
setInterval(() => {
	windowWidth = window.innerWidth;
	if (windowWidth > 425) {
	resetOverlay();
	};
}, 300);

// This is an idea I was testing but have left behind for now
// document.querySelectorAll(".reviewItem").forEach((item) => {
// 	addEventListener(
//   "mouseenter",
//   () => {
//     reviewItem.classList.add("test");
//   },
//   false
// );
// });
//
// document.querySelectorAll(".reviewItem").forEach((item) => {
// 	addEventListener(
//   "mouseleave",
//   () => {
//     reviewItem.classList.remove("test");
//   },
//   false
// );
// });
