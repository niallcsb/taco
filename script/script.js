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
let windowWidth;
let btnStatus = true;

// Functions
// Populate article links from the arrays
const arrayRefresh = (array) => {
	const content = document.querySelector("#allContent");
	array.forEach((item) => {
		const reviewItem = document.createElement("a");
		reviewItem.classList.add("reviewLink");
		reviewItem.setAttribute("href", `${item.link}`);
		const reviewArticle = document.createElement("article");
		reviewArticle.classList.add("review");
		reviewArticle.setAttribute("style", `background-image:url(${item.image_169})`);
		const reviewDate = document.createElement("h4");
		reviewDate.classList.add("reviewDate");
		reviewDate.textContent = `${item.date}`;
		const reviewHeadings = document.createElement("span");
		reviewHeadings.classList.add("reviewHeadings");
		const reviewHeadline = document.createElement("h2");
		reviewHeadline.classList.add("headline");
		reviewHeadline.textContent = `${item.headline}`;
		const reviewSubhead = document.createElement("h3");
		reviewSubhead.classList.add("subhead");
		reviewSubhead.textContent = `${item.subhead}`;
		reviewHeadings.append(reviewHeadline, reviewSubhead);
		reviewArticle.append(reviewDate, reviewHeadings);
		reviewItem.append(reviewArticle);
		content.append(reviewItem);
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
	const content = document.querySelector("#allContent");
	clearAll(content);
	content.className = "individualArticle";
	const articleBody = document.createElement("article");
	articleBody.classList.add("articleBody");
	const articleFigure = document.createElement("figure");
	articleFigure.classList.add("articleFigure");
	const articleImg = document.createElement("img");
	articleImg.classList.add("articleImg");
	articleImg.setAttribute("src", `${id.imageArticle}`);
	articleImg.setAttribute("width", "100%");
	articleImg.setAttribute("alt", "");
	const articleCaption = document.createElement("figcaption");
	articleCaption.classList.add("figcaption");
	articleCaption.textContent = `${id.caption}`;
	articleFigure.append(articleImg, articleCaption);
	const articleHeading = document.createElement("span");
	articleHeading.classList.add("articleHeading");
	const articleHeadline = document.createElement("h1");
	articleHeadline.classList.add("articleHeadline");
	articleHeadline.textContent = `${id.headline}`;
	const articleDate = document.createElement("h2");
	articleDate.classList.add("articleDate");
	articleDate.textContent = `${id.date}`;
	articleHeading.append(articleHeadline, articleDate);
	const articleSubhead = document.createElement("h2");
	articleSubhead.classList.add("articleSubhead");
	articleSubhead.textContent = `${id.subhead}`;
	articleBody.append(articleFigure, articleHeading, articleSubhead);
	for (var i = 0; i < 5; i++) {
		const articlePara = document.createElement("p");
		articlePara.textContent = "asdfsadf dsf adsf sdfa dfasdf asdf asdfas dfasd fsadfasd asdfa dsfasdf sdf asdfa sdfads dfasdfsdf sdafasdf adsfa sdfsd fsdfa sdfa sdfasdfdsf asdf sdaf adsfa sdfasdf asdfsad sadfasd sdfs sdafasdf sadf asd asdf asdfsd f sadfa dsfsdf dsfsdf ssd";
		articleBody.append(articlePara);
	}
	content.append(articleBody);
	window.scrollTo(0, 0);
};

// This calls a random article from the array
const randomArticle = () => {
	const article = articleArray[Math.floor(Math.random() * articleArray.length)];
	location.hash = article.link;
	articleSetup(article);
};

// This adds the social page to the site
const socialSetup = () => {
	const content = document.querySelector("#allContent");
	const socialArticle = document.createElement("article");
	socialArticle.classList.add("socialArticle");
	const niallSection = niallSetup();
	const myrSection = myrSetup();
	socialArticle.append(niallSection, myrSection);
	content.append(socialArticle);
}

const niallSetup = () => {
	const niallSection = document.createElement("section");
	niallSection.classList.add("niallSection");
	const niallHeadline = document.createElement("h1");
	niallHeadline.classList.add("niallHeadline");
	niallHeadline.textContent = "Niall Bermingham"
	const niallImg = document.createElement("img");
	niallImg.setAttribute("src", "images/ppics/niall.jpeg");
	niallImg.classList.add("niallImg");
	niallImg.setAttribute("width", "300");
	const niallBio = document.createElement("p");
	niallBio.textContent = "Niall is a mainly self-taught frontend dev, and massive taco fan. He is working on expanding his skill set in HTML, CSS, JS, and more. He was born in Ireland and currently lives in Ontario, Canada where he spends most of his time annoying Myr about arrays and different types of for loops. Reach out and connect with him on his social links below.";
	const niallTwitter = document.createElement("a");
	niallTwitter.textContent = "Twitter";
	niallTwitter.setAttribute("href", "https://twitter.com/niallcsb");
	niallTwitter.setAttribute("target", "_blank");
	const niallGithub = document.createElement("a");
	niallGithub.textContent = "GitHub";
	niallGithub.setAttribute("href", "https://github.com/niallcsb");
	niallGithub.setAttribute("target", "_blank");
	const niallLinkedin = document.createElement("a");
	niallLinkedin.textContent = "LinkedIn";
	niallLinkedin.setAttribute("href", "https://www.linkedin.com/in/niallcsb/");
	niallLinkedin.setAttribute("target", "_blank");
	const linkSpan = document.createElement("span");
	linkSpan.classList.add("linkSpan");
	linkSpan.append(niallTwitter, `|`, niallGithub, `|`, niallLinkedin);
	niallSection.append(niallHeadline, niallImg, niallBio, linkSpan);
	return niallSection;
}

const myrSetup = () => {
	const myrSection = document.createElement("section");
	myrSection.classList.add("myrSection");
	const myrHeadline = document.createElement("h1");
	myrHeadline.textContent = "Myr Galarneau";
	const myrImg = document.createElement("img");
	myrImg.setAttribute("src", "images/ppics/myr.jpeg");
	myrImg.classList.add("myrImg");
	myrImg.setAttribute("width", "300");
	const myrBio = document.createElement("p");
	myrBio.textContent = "Myriam is a pretty great designer, but the real magic happens after a couple of margs. She loves functional and smart design which happens to look good while doing it's job. That's also why she loves tacos. They're aesthetic, delcious, and incredibly fun to eat.";
	const myrSite = document.createElement("a");
	myrSite.textContent = "Website";
	myrSite.setAttribute("href", "http://www.myriamgalarneau.com/");
	myrSite.setAttribute("target", "_blank");
	const myrInsta = document.createElement("a");
	myrInsta.textContent = "Instagram";
	myrInsta.setAttribute("href", "https://www.instagram.com/myrfest/");
	myrInsta.setAttribute("target", "_blank");
	const myrLinkedin = document.createElement("a");
	myrLinkedin.textContent = "LinkedIn";
	myrLinkedin.setAttribute("href", "https://www.linkedin.com/in/myriamgalarneau/");
	myrLinkedin.setAttribute("target", "_blank");
	const linkSpan = document.createElement("span");
	linkSpan.classList.add("linkSpan");
	linkSpan.append(myrSite, `|`, myrInsta, `|`, myrLinkedin);
	myrSection.append(myrHeadline, myrImg, myrBio, linkSpan);
	return myrSection;
}

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
	const content = document.querySelector("#allContent");
	clearAll(content);
	content.className = `${name}Content`;
	resetOverlay();
};

// Add breadcrumbs to the nav
// This function just resets the breadcrumbs
const resetBreadcrumb = () => {
	const breadcrumb = document.querySelector(".breadcrumb");
	clearAll(breadcrumb);
	if (location.hash != "") {
		const homeBcItem = document.createElement("li")
		homeBcItem.classList.add("homeBcItem");
		const homeBcLink = document.createElement("a")
		homeBcLink.classList.add("homeBcLink");
		homeBcLink.textContent = "Home";
		homeBcLink.setAttribute("href", "");
		const bcArrow = document.createElement("p");
		bcArrow.classList.add("bcArrow");
		bcArrow.textContent = ">";
		homeBcItem.append(homeBcLink, bcArrow)
		breadcrumb.append(homeBcItem);
		breadcrumb.style.display = "flex";
	}
};

// This creates the li for the breadcrumb and appends them to the html
const bcPopulator = (array) => {
	const breadcrumb = document.querySelector(".breadcrumb");
	let i;
	for(i = 0; i < array.length - 1; i++) {
		const bcItem = document.createElement("li");
		bcItem.classList.add(`${array[i]}BcItem`);
		const bcLink = document.createElement("a");
		bcLink.classList.add(`${array[i]}BcLink`);
		bcLink.setAttribute("href", `#/${array[i]}`);
		bcLink.textContent = `${array[i]}`;
		const bcArrow = document.createElement("p");
		bcArrow.classList.add("bcArrow");
		bcArrow.textContent = ">";
		bcItem.append(bcLink, bcArrow);
		breadcrumb.append(bcItem);
	}
	if (array.length == (i + 1)) {
		const bcItem = document.createElement("li");
		bcItem.classList.add("currentBcItem");
		const bcCurrent = document.createElement("p");
		bcCurrent.classList.add("bcCurrent");
		bcCurrent.textContent = `${array[i]}`;
		bcItem.append(bcCurrent);
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
	if (windowWidth > 425 && location.hash != "") {
		breadcrumbSetup();
	} else if (windowWidth < 425) {
		btnMaker();
	}
	if (windowWidth < 425 && location.hash == "") {
		location.hash = "#/articles";
		contentSetup("articles");
		arrayRefresh(articleArray);
	} else if (location.hash == "#/articles") {
		contentSetup("articles");
		arrayRefresh(articleArray);
	} else if (location.hash == "#/store") {
		standinSetup("store");
	} else if (location.hash == "#/social") {
		contentSetup("social");
		socialSetup();
	} else if (location.hash == "#/random") {
		randomArticle();
	} else if (location.hash.includes("articles/")) {
		articleSetup();
	} else {
		arrayRefresh(mainArray);
	}
}, false);

// This is to load the content on hash change
window.addEventListener('hashchange', () => {
	if (windowWidth > 425 && location.hash != "") {
		breadcrumbSetup();
	}
	resetOverlay();
	if (location.hash == "#/articles") {
		contentSetup("articles");
		arrayRefresh(articleArray);
	} else if (location.hash == "#/store") {
		standinSetup("store");
	} else if (location.hash == "#/social") {
		contentSetup("social");
		socialSetup();
	} else if (location.hash == "#/random") {
		randomArticle();
	} else if (location.hash == "") {
		arrayRefresh(mainArray);
	} else if (location.hash.includes("articles/")) {
		articleSetup();
	}
}, false);

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
		document.querySelector(".breadcrumb").removeAttribute('style');
		btnMaker();
	}
});

// This is a delay that is used for animations
const delay = (seconds) =>
	new Promise((resolves) =>
		setTimeout(resolves, seconds * 1000)
);

// This clears all HTML from the element passed in the function
const clearAll = (el) => {
	while (el.firstChild) {
		el.removeChild(el.firstChild);
	}
};

// This is a temporary content setup that covers the social and store pages
const standinSetup = (name) => {
	const content = document.querySelector("#allContent");
	clearAll(content);
	content.className = `${name}Content`;
	const standin = document.createElement("article");
	standin.classList.add(`${name}Body`);
	if (name == "store") {
		standin.innerHTML = `
			<h1>Come back soon!</h1>
			<p>All your taco related shopping needs will be available to you here. Possibly brought to you using Ruby On Rails, possibly not. Who knows?</p>
		`;
	} else if (name == "social") {
		standin.innerHTML = `
			<h1>Come back soon!</h1>
			<p>Social media links coming soon. Instagram and shit. Maybe TikTok, do you like dance challenges?</p>
		`;
	}
	content.append(standin);
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
