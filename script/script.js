import Review_Link from "./Review_Link.js"

// Create Reviews

const firstReview = new Review_Link(
	"Grand Electric",
	"This Parkdale based taco joint covers all the bases, great tacos, great margs, great atmosphere",
	"#",
	"../images/grandelectric.jpeg"
)

const secondReview = new Review_Link(
	"El Rey Mezcal Bar",
	"",
	"#",
	"../images/elrey.jpeg"
)

const thirdReview = new Review_Link(
	"Seven Lives",
	"",
	"#",
	"../images/sevenlives.jpeg"
)

const fourthReview = new Review_Link(
	"Good Hombres",
	"",
	"#",
	"../images/goodhombres.jpeg"
)

// Create Content

const primaryContent = `
	<a class="reviewLink firstLink" href="${firstReview.link}" tabindex="0">
		<article class="review first" style="background-image:url(${firstReview.image})">
			<span class="reviewTitle">
				<h3 class="reviewTitleHead">Most Recent</h3>
			</span>
			<span class="reviewHeadings">
				<h2 class="headline">${firstReview.headline}</h2>
				<h3 class="subhead">${firstReview.subhead}</h3>
			</span>
		</article>
	</a>
	<a class="reviewLink secondLink" href="${secondReview.link}" tabindex="0">
		<article class="review second" style="background-image:url(${secondReview.image})">
			<span class="reviewTitle">
				<h3 class="reviewTitleHead">Best Tacos</h3>
			</span>
			<span class="reviewHeadings">
				<h2 class="headline">${secondReview.headline}</h2>
			</span>
		</article>
	</a>
	<a class="reviewLink thirdLink" href="${thirdReview.link}" tabindex="0">
		<article class="review third" style="background-image:url(${thirdReview.image})">
			<span class="reviewTitle">
				<h3 class="reviewTitleHead">Best Margs</h3>
			</span>
			<span class="reviewHeadings">
				<h2 class="headline">${thirdReview.headline}</h2>
			</span>
		</article>
	</a>
	<a class="reviewLink fourthLink" href="${fourthReview.link}" tabindex="0">
		<article class="review fourth" style="background-image:url(${fourthReview.image})">
			<span class="reviewTitle">
				<h3 class="reviewTitleHead">Best Mood</h3>
			</span>
			<span class="reviewHeadings">
				<h2 class="headline">${fourthReview.headline}</h2>
			</span>
		</article>
	</a>
      `;

// Populate HTML

const main = document.querySelector(".mainContent");

const newSection = document.createElement("section");
newSection.classList.add("mainSection");
newSection.innerHTML = primaryContent;

main.append(newSection);

// Hamburger Function - I haven't put a lot of effort into this yet so it doesn't work properly

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
