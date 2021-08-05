import {archiveArray, mainArray} from "./data.js";

// Declare Variables
const header = document.querySelector("header");
const headNav = document.querySelector(".headNav");
const headNavList = document.querySelector(".headNavList");
const headArray = [header, headNav, headNavList];
const homeLink = document.querySelector(".home");
const archiveLink = document.querySelector(".archive");
const storeLink = document.querySelector(".store");
const socialLink = document.querySelector(".social");
const randomLink = document.querySelector(".random");
const navArray = [homeLink, archiveLink, storeLink, socialLink, randomLink];
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
const mainSection = document.querySelector(".mainSection");
let windowWidth;
let btnStatus = true;

// Functions
// Populate reviews from the arrays
const sectionRefresh = function(array) {
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
const resetOverlay = function() {
	headArray.forEach((item) => {
		item.removeAttribute('style')
	});
	if (btnStatus !== true){
		newButton.innerHTML = hbBtn;
		btnStatus = true;
	};
};

// Sets up the CSS for the content that we want to show on the page
const contentSetup = function(name, link) {
	mainSection.innerHTML = ``;
	navArray.forEach((item) => {
		if (item.style.display === "none") {
			item.removeAttribute('style');
		}
	});
	mainSection.className = `${name}`;
	link.style.display = "none";
	 if (link !== homeLink) {
		 homeLink.style.display = "block";
	 } else {
		 link.removeAttribute('style');
	 }
	resetOverlay();
}

// Loads the content for each page on page load depending on the hash. More work still to be done
window.addEventListener('load', (event) => {
	if (location.hash === "#/archive") {
		contentSetup("archiveSection", archiveLink);
		sectionRefresh(archiveArray);
	} else if (location.hash === "#/store") {
		contentSetup("storeSection", storeLink);
	} else if (location.hash === "#/socials") {
		contentSetup("socialSection", socialLink);
	} else if (location.hash === "#/random") {
		contentSetup("randomSection", randomLink);
	} else {
		sectionRefresh(mainArray);
	}
});

// Changes content to the archive content when archive button is pressed
archiveLink.addEventListener('click', () => {
	contentSetup("archiveSection", archiveLink);
	sectionRefresh(archiveArray);
});

// Changes content to the store content when store button is pressed
storeLink.addEventListener('click', () => {
	contentSetup("storeSection", storeLink);
});

// Changes content to the social content when social button is pressed
socialLink.addEventListener('click', () => {
	contentSetup("socialSection", socialLink);
});

// Changes content to the random content when random button is pressed
randomLink.addEventListener('click', () => {
	contentSetup("randomSection", randomLink);
});

// Changes content to the homepage content when home button is pressed
homeLink.addEventListener('click', () => {
	contentSetup("mainSection", homeLink);
	sectionRefresh(mainArray);
});

// Turn hamburger/X icons into a button and append it to the header
newButton.classList.add("openBtn");
newButton.innerHTML = hbBtn;
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
