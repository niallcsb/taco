'use strict'

import {articleArray, mainArray, bioArray, navArray, faqArray} from "./data.js";

// Declare Variables
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

// This populates the nav in the header
const headerNav = () => {
	const headNav = document.querySelector(".headNav");
	const headNavList = document.createElement("ul");
	headNavList.classList.add("headNavList");
	navArray.forEach((item) => {
		const headNavItem = document.createElement("li");
		headNavItem.classList.add("headNavItem",`${item.className}`);
		const headNavLink = document.createElement("a");
		headNavLink.classList.add(`${item.className}Link`);
		headNavLink.href = item.link;
		headNavLink.textContent = `${item.title}`;
		headNavItem.append(headNavLink);
		headNavList.append(headNavItem);
	});
	headNav.append(headNavList);
};

// This populates the nav in the footer
const footerNav = () => {
	const footNav = document.querySelector(".footNav");
	navArray.forEach((item) => {
		const footNavSection = document.createElement("section");
		footNavSection.classList.add("footNavSection");
		const listTitle = document.createElement("a");
		listTitle.classList.add("listTitle");
		listTitle.href = item.link;
		listTitle.textContent = `${item.title}`;
		footNavSection.append(listTitle);
		if (item.subLinks.length !== 0) {
			const footList = document.createElement("ul");
			footList.classList.add("footList");
			item.subLinks.forEach((item) => {
				const footListItem = document.createElement("li");
				footListItem.classList.add("footListItem");
				if (Object.prototype.hasOwnProperty.call(item, "title")) {
					const listItemTitle = document.createElement("h4");
					listItemTitle.classList.add("subLinkTitle");
					listItemTitle.textContent = `${item.title}`;
					footListItem.append(listItemTitle);
					footList.append(footListItem);
				} else {
					const footListLink = document.createElement("a");
					footListLink.href = item.link;
					footListLink.textContent = `${item.name}`;
					footListItem.append(footListLink);
					footList.append(footListItem);
				}
				footNavSection.append(footList);
			});
		}
		footNav.append(footNavSection);
	});
}

// This calls both the nav functions
const navPopulator = () => {
	headerNav();
	footerNav();
};

// Functions
// Populate article links from the arrays
const arrayRefresh = (array) => {
	const content = document.querySelector("#allContent");
	array.forEach((item) => {
		const reviewItem = document.createElement("a");
		reviewItem.classList.add("reviewLink");
		reviewItem.href = item.link;
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
	locationString.forEach((item, i) => {
		if (item === "faq") {
			locationString[i] = "FAQ";
		}
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
	articleCaption.classList.add("articleCaption");
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
	toTop();
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
	bioArray.forEach((item) => {
		let bioSection = bioSetup(item);
		socialArticle.append(bioSection);
	});
	content.append(socialArticle);
}

// This sets up the bio sections for the social page
const bioSetup = (item) => {
	const bioSection = document.createElement("section");
	bioSection.classList.add("bioSection");
	const bioTitle = document.createElement("h1");
	bioTitle.classList.add("bioTitle");
	bioTitle.textContent = `${item.firstName} ${item.surName}`;
	const bioImg = document.createElement("img");
	bioImg.setAttribute("src", `${item.image}`);
	bioImg.classList.add("bioImg");
	bioImg.setAttribute("width", "100%");
	bioImg.setAttribute("height", "100%");
	bioImg.setAttribute("alt", "");
	const bioBody = document.createElement("p");
	bioBody.classList.add("bioBody");
	bioBody.textContent = `${item.body}`;
	const linkSpan = document.createElement("span");
	linkSpan.classList.add("linkSpan");
	item.links.forEach((item) => {
		const bioLink = document.createElement("a");
		bioLink.classList.add("bioLink");
		bioLink.href = item.link;
		const socialIcon = document.createElement("img");
		socialIcon.classList.add("socialIcon");
		socialIcon.setAttribute("src", `${item.icon}`);
		socialIcon.setAttribute("width", "32");
		socialIcon.setAttribute("height", "32");
		socialIcon.setAttribute("alt", "");
		bioLink.append(socialIcon);
		linkSpan.append(bioLink);
	});
	bioSection.append(bioTitle, bioImg, bioBody, linkSpan);
	return bioSection;
};

// This is for the FAQ
const faqSetup = () => {
	const content = document.querySelector("#allContent");
	const faqArticle = document.createElement("article");
	faqArticle.classList.add("faqArticle");
	const faqHeading = document.createElement("h1");
	faqHeading.classList.add("faqHeading");
	faqHeading.textContent = "Frequently Asked Questions";
	faqArticle.append(faqHeading);
	faqArray.forEach((item) => {
		const faqDetails = document.createElement("details");
		faqDetails.classList.add("faqDetails");
		const faqSummary = document.createElement("summary");
		faqSummary.classList.add("faqSummary");
		faqSummary.textContent = `${item.question}`;
		faqDetails.append(faqSummary);
		item.answer.forEach((item) => {
			const faqPara = document.createElement("p");
			faqPara.classList.add("faqPara");
			faqPara.textContent = `${item}`;
			faqDetails.append(faqPara);
		});
		faqArticle.append(faqDetails);
	});
	content.append(faqArticle);
}

// Reset mobile overlay
const resetOverlay = () => {
	const header = document.querySelector("header");
	const headNav = document.querySelector(".headNav");
	const headNavList = document.querySelector(".headNavList");
	const headArray = [header, headNav, headNavList];
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
	toTop();
};

// Add breadcrumbs to the nav
// This function just resets the breadcrumbs
const resetBreadcrumb = () => {
	const bcNav = document.querySelector(".bcNav");
	const breadcrumb = document.createElement("ul");
	breadcrumb.classList.add("breadcrumb");
	clearAll(bcNav);
	if (location.hash != "") {
		const homeBcItem = document.createElement("li")
		homeBcItem.classList.add("homeBcItem");
		const homeBcLink = document.createElement("a")
		homeBcLink.classList.add("homeBcLink");
		homeBcLink.textContent = "Home";
		homeBcLink.href = "/";
		const bcArrow = document.createElement("p");
		bcArrow.classList.add("bcArrow");
		bcArrow.textContent = ">";
		homeBcItem.append(homeBcLink, bcArrow)
		breadcrumb.append(homeBcItem);
		bcNav.append(breadcrumb);
		bcNav.style.display = "flex";
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
		bcLink.href = `#/${array[i]}`;
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
	navPopulator();
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
	} else if (location.hash == "#/faq") {
		contentSetup("faq");
		faqSetup();
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
	} else if (location.hash == "#/faq") {
		contentSetup("faq");
		faqSetup();
	} else if (location.hash == "") {
		arrayRefresh(mainArray);
	} else if (location.hash.includes("articles/")) {
		articleSetup();
	}
}, false);

// Turn hamburger/X icons into a button and append it to the header
// This creates the button in its initial hamburger state
const btnMaker = () => {
	const header = document.querySelector("header");
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
		const header = document.querySelector("header");
		const headNav = document.querySelector(".headNav");
		btnStatus = false;
		header.style.height = "100vh";
		headNav.style.display = "flex";
		overlayWait();
		newButton.innerHTML = xBtn;
	} else if (btnStatus == false) {
		resetOverlay();
	}
}, false);

// This waits a set amount of time before adding a style to the nav when you press the button
const overlayWait = async () => {
	const headNavList = document.querySelector(".headNavList");
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
		document.querySelector(".bcNav").removeAttribute('style');
		btnMaker();
	}
}, false);

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

// This scrolls to the top of the page when the user clicks a link
const toTop = () => {
	window.scrollTo(0, 0);
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
	}
	content.append(standin);
	toTop();
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
