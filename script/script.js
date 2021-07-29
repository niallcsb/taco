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
				<h3 class="reviewDate">${item.date}</h3>
				<span class="reviewHeadings">
					<h2 class="headline">${item.headline}</h2>
					<h3 class="subhead">${item.subhead}</h3>
				</span>
			</article>
	`
	mainSection.append(reviewItem);
});

// Hamburger Function - Please ignore this. I started it when I was delirously tired, fell asleep, and then forgot what I was  doing.

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
