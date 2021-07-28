import reviewArray from "./data.js";

// Create Reviews

const mainSection = document.querySelector(".mainSection");

reviewArray.forEach((item) => {
	const reviewItem = document.createElement("span");
	reviewItem.classList.add("reviewItem");
	reviewItem.innerHTML = `
		<a class="reviewLink" href="${item.link}" tabindex="0">
			<article class="review" style="background-image:url(${item.image})">
				<span class="reviewTitle">
					<h3 class="reviewTitleHead">${item.date}</h3>
				</span>
				<span class="reviewHeadings">
					<h2 class="headline">${item.headline}</h2>
					<h3 class="subhead">${item.subhead}</h3>
				</span>
			</article>
		</a>
	`
	mainSection.append(reviewItem);
});

// Hamburger Function

// Open

// Close
const closeNav = function closeNav(){
	document.querySelector(".headNav").style.height = "0";
}

const btn = `
		<svg class="headMenu" xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 24 24" width="3em" fill="#ED1D20">
			<path d="M0 0h24v24H0V0z" fill="none"/>
			<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
		</svg>
`;

const headNav = document.querySelector("header");

const newButton = document.createElement("button");
newButton.classList.add("headBtn");
newButton.innerHTML = btn;
// newButton.addEventListener('click', openNav(){
// 	document.querySelector(".headNav").style.height = "100%";
// });

headNav.append(newButton);
