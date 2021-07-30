import mainReviewArray from "./data.js";

// Create Reviews

const mainSection = document.querySelector(".mainSection");

mainReviewArray.forEach((item) => {
	const reviewItem = document.createElement("a");
	reviewItem.classList.add("reviewLink");
	reviewItem.setAttribute("href", `"${item.link}"`);
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

// This below can be ignored for now. I'm trying to do a hover effect on the images of the reviews but don't know what yet.

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

// Overlay Function. This works now but the nav list in the overlay displays before the background transition ends. 
// I'd also like to animate the button change somehow but don't know how to start yet lol.

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
let btnStatus = "closed"

// Function to open and close the overlay

newButton.addEventListener('click', () => {
	if (btnStatus === "closed") {
		btnStatus = "open";
		document.querySelector("header").style.height = "100vh";
		document.querySelector(".headNav").style.display = "block";
		newButton.innerHTML = xBtn;
	} else if (btnStatus === "open") {
		btnStatus = "closed";
		document.querySelector("header").style.height = "3em";
		document.querySelector(".headNav").style.display = "none";
		newButton.innerHTML = hbBtn;
	}
});

// Reset header display and height once the window goes to the larger window sizes.

let windowWidth = window.innerWidth;

window.addEventListener('resize', () => {
	if (windowWidth < 425) {
		document.querySelector("header").style.removeProperty("height");
		document.querySelector(".headNav").style.removeProperty("display");
	}
});

// Append button to header

const headNav = document.querySelector("header");
headNav.append(newButton);
