'use strict'

import {articleArray, mainArray} from "./data.js";

// Declare Variables
const header = document.querySelector("header");
const headNav = document.querySelector(".headNav");
const headNavList = document.querySelector(".headNavList");
const headArray = [header, headNav, headNavList];
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
	<li class="homeBcItem">
		<a class="homeBcLink" href="">Home</a>
		<p class="bcArrow">></p>
	</li>
`;
const mainSection = document.querySelector(".mainSection");
let windowWidth;
let btnStatus = true;

// Functions
// Populate article links from the arrays
const arrayRefresh = (array) => {
	array.forEach((item) => {
		const reviewItem = document.createElement("a");
		reviewItem.classList.add("reviewLink");
		reviewItem.setAttribute("href", `${item.link}`);
		reviewItem.innerHTML = `
				<article class="review" style="background-image:url(${item.image_169})">
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

// This validates which object is being called and viewed on the page
const validator = () => {
	let locationString = location.hash.toString().substring(2).split('/');
	let validator;
	locationString.forEach((item) => {
		let initValidator = parseInt(item, 10);
		if (Number.isFinite(initValidator) == true) {
			validator = initValidator;
		}
	});
	let validatedArticle = articleArray.find(({id}) => id == validator);
	let returnResults = [validatedArticle, locationString];
	return returnResults;
};

// This sets up the actual articles
const articleSetup = (id = validator()[0]) => {
	mainSection.innerHTML = ``;
	mainSection.className = "individualArticle";
	const articleBody = document.createElement("article");
	articleBody.classList.add("articleBody");
	articleBody.innerHTML = `
		<figure class="articleFigure">
			<img class="articleImg" src="${id.imageArticle}" width="100%" alt="">
			<figcaption class="articleCaption">${id.caption}</figcaption>
		</figure>
		<span class="articleHeading">
			<h1 class="articleHeadline">${id.headline}</h1>
			<h2 class="articleDate">${id.date}</h2>
		</span>
		<h2 class="articleSubHead">${id.subhead}</h2>
		<p>asdfsadf dsf adsf sdfa dfasdf asdf asdfas dfasd fsadfasd asdfa dsfasdf sdf asdfa
		sdfads dfasdfsdf sdafasdf adsfa sdfsd fsdfa sdfa sdfasdfdsf asdf sdaf adsfa sdfasdf
		asdfsad sadfasd sdfs sdafasdf sadf asd asdf asdfsd f sadfa dsfsdf dsfsdf ssd</p>
		<p>asdfsadf dsf adsf sdfa dfasdf asdf asdfas dfasd fsadfasd asdfa dsfasdf sdf asdfa
		sdfads dfasdfsdf sdafasdf adsfa sdfsd fsdfa sdfa sdfasdfdsf asdf sdaf adsfa sdfasdf
		asdfsad sadfasd sdfs sdafasdf sadf asd asdf asdfsd f sadfa dsfsdf dsfsdf ssd</p>
		<p>asdfsadf dsf adsf sdfa dfasdf asdf asdfas dfasd fsadfasd asdfa dsfasdf sdf asdfa
		sdfads dfasdfsdf sdafasdf adsfa sdfsd fsdfa sdfa sdfasdfdsf asdf sdaf adsfa sdfasdf
		asdfsad sadfasd sdfs sdafasdf sadf asd asdf asdfsd f sadfa dsfsdf dsfsdf ssd</p>
		<p>asdfsadf dsf adsf sdfa dfasdf asdf asdfas dfasd fsadfasd asdfa dsfasdf sdf asdfa
		sdfads dfasdfsdf sdafasdf adsfa sdfsd fsdfa sdfa sdfasdfdsf asdf sdaf adsfa sdfasdf
		asdfsad sadfasd sdfs sdafasdf sadf asd asdf asdfsd f sadfa dsfsdf dsfsdf ssd</p>
	`;
	mainSection.append(articleBody);
	window.scrollTo(0, 0);
};

// This calls a random article from the array
const randomArticle = () => {
	let article = articleArray[Math.floor(Math.random() * articleArray.length)];
	location.hash = article.link;
	articleSetup(article);
};

// Reset mobile overlay
const resetOverlay = () => {
	headArray.forEach((item) => {
		item.removeAttribute('style')
	});
	if (btnStatus != true){
		newButton.innerHTML = hbBtn;
		btnStatus = true;
	}
};

// Sets up the CSS for the content that we want to show on the page
const contentSetup = (name) => {
	mainSection.innerHTML = ``;
	mainSection.className = `${name}`;
	resetOverlay();
};

// Add breadcrumbs to the nav
// This function just resets the breadcrumbs
const resetBreadcrumb = () => {
	if (location.hash != "") {
		breadcrumb.innerHTML = (breadcrumbStarter);
		breadcrumb.style.display = "flex";
	}
};

// This creates the li for the breadcrumb and appends them to the html
const bcPopulator = (array) => {
	let i;
	for(i = 0; i < array.length - 1; i++) {
		const bcItem = document.createElement("li");
		bcItem.classList.add(`${array[i]}BcItem`);
		bcItem.innerHTML = `
			<a class="${array[i]}BcLink" href="#/${array[i]}">${array[i]}</a>
			<p class="bcArrow">></p>
		`;
		breadcrumb.append(bcItem);
	}
	if (array.length == (i + 1)) {
		const bcItem = document.createElement("li");
		bcItem.classList.add("currentBcItem");
		bcItem.innerHTML = `
			<p class="bcCurrent">${array[i]}</p>
		`;
		breadcrumb.append(bcItem);
	}
};

//This function adds the breadcrumbs dynamically to the nav
const breadcrumbSetup = () => {
	let returnResults = validator();
	let locationString = returnResults[1];
	windowWidth = window.innerWidth;
	resetBreadcrumb();
	if (locationString.length == 1 && location.hash != "") {
		bcPopulator(locationString);
	} else if (locationString.length > 1) {
		let validatedArticle = returnResults[0];
		let bcArray
		if (validatedArticle.subsection == "") {
			bcArray = [validatedArticle.section, validatedArticle.headline];
		} else {
			bcArray = [validatedArticle.section, validatedArticle.subsection, validatedArticle.headline];
		}
		bcPopulator(bcArray);
	}
};

// Loads the content for each page on page load depending on the hash.
// More work still to be done
window.addEventListener('load', () => {
	windowWidth = window.innerWidth;
	if (windowWidth > 425) {
		breadcrumbSetup();
	} else if (windowWidth < 425) {
		btnMaker();
	}
	if (windowWidth < 425 && location.hash == "") {
		location.hash = "#/articles";
		contentSetup("articlesSection");
		arrayRefresh(articleArray);
	} else if (location.hash == "#/articles") {
		contentSetup("articlesSection");
		arrayRefresh(articleArray);
	} else if (location.hash == "#/store") {
		storeSetup();
	} else if (location.hash == "#/social") {
		socialSetup();
	} else if (location.hash == "#/random") {
		randomArticle();
	} else if (location.hash.includes("articles/")) {
		articleSetup();
	} else {
		arrayRefresh(mainArray);
	}
});

// This is to load the content on hash change
window.addEventListener('hashchange', () => {
	if (windowWidth > 425) {
		breadcrumbSetup();
	}
	resetOverlay();
	if (location.hash == "#/articles") {
		contentSetup("articlesSection");
		arrayRefresh(articleArray);
	} else if (location.hash == "#/store") {
		storeSetup();
	} else if (location.hash == "#/social") {
		socialSetup();
	} else if (location.hash == "#/random") {
		randomArticle();
	} else if (location.hash == "") {
		arrayRefresh(mainArray);
	} else if (location.hash.includes("articles/")) {
		articleSetup();
	}
});

// Turn hamburger/X icons into a button and append it to the header
// This creates the button in its initial hamburger state
const btnMaker = () => {
	newButton.classList.add("openBtn");
	newButton.innerHTML = hbBtn;
	header.append(newButton);
};

// This is to remove the button once we are no longer in a mobile size
const btnRemove = () => {
	newButton.remove();
};

// Function to open and close the overlay
newButton.addEventListener('click', () => {
	if (btnStatus == true) {
		btnStatus = false;
		header.style.height = "100vh";
		headNav.style.display = "flex";
		overlayWait();
		newButton.innerHTML = xBtn;
	} else if (btnStatus == false) {
		resetOverlay();
	}
});

// This waits a set amount of time before adding a style to the nav when you press the button
const overlayWait = async () => {
	await delay(0.2);
	headNavList.style.opacity = "1";
};

// Reset everything on change from mobile view to tablet/desktop views and back again
window.addEventListener('resize', () => {
	windowWidth = window.innerWidth;
	if (windowWidth > 425) {
		btnRemove();
		resetOverlay();
		breadcrumbSetup();
	} else if (windowWidth < 425) {
		breadcrumb.removeAttribute('style');
		btnMaker();
	}
});

// This is a delay that is used for animations
const delay = (seconds) =>
	new Promise((resolves) =>
		setTimeout(resolves, seconds * 1000)
);

const storeSetup = () => {
	mainSection.innerHTML = ``;
	mainSection.className = "storeSection";
	const store = document.createElement("article");
	store.classList.add("storeBody");
	store.innerHTML = `
		<h1>Come back soon!</h1>
		<p>All your taco related shopping needs will be available to you here. Possibly brought to you using Ruby On Rails, possibly not. Who knows?</p>
	`;
	mainSection.append(store);
};

const socialSetup = () => {
	mainSection.innerHTML = ``;
	mainSection.className = "socialSection";
	const social = document.createElement("article");
	social.classList.add("socialBody");
	social.innerHTML = `
		<h1>Come back soon!</h1>
		<p>Social media links coming soon. Instagram and shit. Maybe TikTok, do you like dance challenges?</p>
	`;
	mainSection.append(social);
};

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
