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
const arrayRefresh = function(array) {
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
const validator = function(stringArray) {
	let locationString = location.hash.toString().substring(2).split('/');
	let validator;
	locationString.forEach((item) => {
		let initValidator = parseInt(item, 10);
		if (Number.isFinite(initValidator) == true) {
			validator = initValidator;
		};
	});
	let validatedArticle = articleArray.find(({id}) => id == validator);
	let returnResults = [validatedArticle, locationString];
	return returnResults;
};

// This sets up the actual articles
const articleSetup = function() {
	mainSection.innerHTML = ``;
	mainSection.className = "individualArticle";
	const articleBody = document.createElement("article");
	let validatedArticle = validator()[0];
	articleBody.classList.add("articleBody");
	articleBody.innerHTML = `
		<figure class="articleFigure">
			<img class="articleImg" src="${validatedArticle.imageArticle}" width="100%" alt="">
			<figcaption class="articleCaption">${validatedArticle.caption}</figcaption>
		</figure>
		<span class="articleHeading">
			<h1 class="articleHeadline">${validatedArticle.headline}</h1>
			<h2 class="articleDate">${validatedArticle.date}</h2>
		</span>
		<h2 class="articleSubHead">${validatedArticle.subhead}</h2>
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
}

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

// Add breadcrumbs to the nav
// This function just resets the breadcrumbs
const resetBreadcrumb = function() {
	if (location.hash != "") {
		breadcrumb.innerHTML = (breadcrumbStarter);
		breadcrumb.style.display = "flex";
	};
};

//This function adds the breadcrumbs dynamically to the nav
const breadcrumbSetup = function() {
	let returnResults = validator();
	let validatedArticle = returnResults[0];
	let locationString = returnResults[1];
	const bcItem = document.createElement("li");
	windowWidth = window.innerWidth;
	if (windowWidth > 425) {
		resetBreadcrumb();
		if (locationString.length == 1 && location.hash != "") {
			if (location.hash != "") {
				bcItem.classList.add("currentBcItem");
				bcItem.innerHTML = `
					<p class="bcCurrent">${locationString}</p>
				`;
				breadcrumb.append(bcItem);
			};
		} else if (locationString.length > 1) {
			if (validatedArticle.subsection == "") {
				bcItem.classList.add(`${validatedArticle.section}BcItem`);
				bcItem.innerHTML = `
						<a class="${validatedArticle.section}BcLink" href="#/${validatedArticle.section}">${validatedArticle.section}</a>
						<p class="bcArrow">></p>
						<p class="bcCurrent">${validatedArticle.headline}</p>
					`;
			} else if (validatedArticle.subsection != "") {
				bcItem.innerHTML = `
						<a class="${validatedArticle.section}BcLink" href="#/${validatedArticle.section}">${validatedArticle.section}</a>
						<p class="bcArrow">></p>
						<a class="${validatedArticle.subsection}BcLink" href="#/${validatedArticle.subsection}">${validatedArticle.subsection}</a>
						<p class="bcArrow">></p>
						<p class="bcCurrent">${validatedArticle.headline}</p>
					`;
			};
			breadcrumb.append(bcItem);
		};
	};
};

// Handles clicks on nav links
const navClick = function(hash) {
	resetOverlay();
	contentSetup(`${hash}Section`);
	window.scrollTo(0, 0);
};

// Loads the content for each page on page load depending on the hash.
// More work still to be done
window.addEventListener('load', (event) => {
	windowWidth = window.innerWidth;
	breadcrumbSetup();
	window.scrollTo(0, 0);
	if (windowWidth < 425) {
		btnMaker();
	};
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
	} else if (location.hash.includes("articles/")) {
		articleSetup();
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
	} else if (location.hash.includes("articles/")) {
		articleSetup();
	}
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
const btnMaker = function() {
	newButton.classList.add("openBtn");
	newButton.innerHTML = hbBtn;
	header.append(newButton);
};

const btnRemove = function() {
	newButton.remove();
}

const delay = (seconds) =>
	new Promise((resolves) =>
		setTimeout(resolves, seconds * 1000)
);

const overlayWait = async () => {
	await delay(0.3);
	headNavList.style.opacity = "1";
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
