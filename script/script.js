import {articleArray, mainArray} from "./data.js";

// Declare Variables
const header = document.querySelector("header");
const headNav = document.querySelector(".headNav");
const headNavList = document.querySelector(".headNavList");
const headArray = [header, headNav, headNavList];
const homeLink = document.querySelector(".title");
const articleLink = document.querySelector(".articlesLink");
const storeLink = document.querySelector(".store");
const socialLink = document.querySelector(".social");
const randomLink = document.querySelector(".random");
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
`;
const breadcrumb = document.querySelector(".breadcrumb");
const breadcrumbStarter = `
	<li class="homeBcLink"><a class="homeLink" href="">Home</a></li>
`;
const mainSection = document.querySelector(".mainSection");
let currentLocation;
let locationString;
let windowWidth;
let btnStatus = true;

// Functions
// Populate reviews from the arrays
const arrayRefresh = function(array) {
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
		`;
		mainSection.append(reviewItem);
	});
};

// Reset mobile overlay
const resetOverlay = function() {
	headArray.forEach((item) => {
		item.removeAttribute('style')
	});
	if (btnStatus != true){
		newButton.innerHTML = hbBtn;
		btnStatus = true;
	};
};

// Sets up the CSS for the content that we want to show on the page
const contentSetup = function(name) {
	mainSection.innerHTML = ``;
	mainSection.className = `${name}`;
	resetOverlay();
}

// Add breadcrumbs to the nav. This sucks but it works-ish... for now.
const resetBreadcrumb = function() {
	breadcrumb.innerHTML = (breadcrumbStarter + `>`);
	breadcrumb.style.display = "flex";
};

const breadcrumbSetup = function() {
	currentLocation = location.hash;
	locationString = currentLocation.toString().substring(2).split('/');
	console.log(locationString);
	windowWidth = window.innerWidth;
	if (locationString.length == 1) {
		if (windowWidth > 425 && location.hash != "") {
			resetBreadcrumb();
			const bcItem = document.createElement("li");
			bcItem.classList.add(`${locationString}BcLink`);
			bcItem.innerHTML = `
				<p class="${locationString}Link">${locationString}</p>
			`,
			breadcrumb.append(bcItem);
		};
	} else if (locationString.length > 1) {
		if (windowWidth > 425 && location.hash != "") {
			resetBreadcrumb();
			let i = 0;
			do {
				const bcItem = document.createElement("li");
				bcItem.classList.add(`${locationString[i]}BcLink`);
				bcItem.innerHTML = `
					<a class="${locationString[i]}Link" href="${currentLocation}">${locationString[i]}</a>
				`,
				breadcrumb.append(bcItem, `>`);
				i++;
			} while (i != (locationString.length - 1));
			if (i == (locationString.length - 1)) {
				const bcItem = document.createElement("li");
				bcItem.classList.add(`${locationString[i]}BcLink`);
				bcItem.innerHTML = `
					<p class="${locationString[i]}Link">${locationString[i]}</p>
				`,
				breadcrumb.append(bcItem);
			}
		};
	};
};

// Handles clicks on nav links
const navClick = function(hash) {
	resetOverlay();
	contentSetup(`${hash}Section`);
};

// Loads the content for each page on page load depending on the hash.
// More work still to be done
window.addEventListener('load', (event) => {
	windowWidth = window.innerWidth;
	breadcrumbSetup();
	if (windowWidth < 425 && location.hash == "") {
			location.hash = "#/articles";
			contentSetup("articlesSection");
			arrayRefresh(articleArray);
	} else if (location.hash == "#/articles") {
		contentSetup("articlesSection");
		arrayRefresh(articleArray);
	} else if (location.hash == "#/store") {
		contentSetup("storeSection");
	} else if (location.hash == "#/social") {
		contentSetup("socialSection");
	} else if (location.hash == "#/random") {
		contentSetup("randomSection");
	} else {
		arrayRefresh(mainArray);
	};
});

// This is to load the content on hash change
window.addEventListener('hashchange', () => {
	breadcrumbSetup();
	resetOverlay();
	if (location.hash == "#/articles") {
		contentSetup("articlesSection");
		arrayRefresh(articleArray);
	} else if (location.hash == "#/store") {
		contentSetup("storeSection");
	} else if (location.hash == "#/social") {
		contentSetup("socialSection");
	} else if (location.hash == "#/random") {
		contentSetup("randomSection");
	} else if (location.hash == "") {
		arrayRefresh(mainArray);
	};
});

// Changes content to the article content when article button is pressed
articleLink.addEventListener('click', () => {
	navClick("articles");
	arrayRefresh(articleArray);
});

// Changes content to the store content when store button is pressed
storeLink.addEventListener('click', () => {
	navClick("store");
});

// Changes content to the social content when social button is pressed
socialLink.addEventListener('click', () => {
	navClick("social");
});

// Changes content to the random content when random button is pressed
randomLink.addEventListener('click', () => {
	navClick("random");
});

// Changes content to the homepage content when home button is pressed
homeLink.addEventListener('click', () => {
	windowWidth = window.innerWidth;
	if (windowWidth < 425) {
		contentSetup("articlesSection");
		arrayRefresh(articleArray);
	} else {
		contentSetup("mainSection");
		arrayRefresh(mainArray);
	};
});

// Turn hamburger/X icons into a button and append it to the header
newButton.classList.add("openBtn");
newButton.innerHTML = hbBtn;
header.append(newButton);

// Function to open and close the overlay
newButton.addEventListener('click', () => {
	if (btnStatus == true) {
		btnStatus = false;
		header.style.height = "100vh";
		headNav.style.display = "flex";
		headNavList.style.opacity = "1";
		newButton.innerHTML = xBtn;
	} else if (btnStatus == false) {
		resetOverlay();
	}
});

// Reset everything on change from mobile view to tablet/desktop views and back again
window.addEventListener('resize', () => {
	windowWidth = window.innerWidth;
	if (windowWidth > 425) {
		resetOverlay();
		breadcrumbSetup();
	} else if (windowWidth < 425) {
		breadcrumb.removeAttribute('style');
	}
});

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
