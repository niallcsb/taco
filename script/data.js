import Review_Link from "./Review_Link.js"

// headline, subhead, link, image, imageAlt, date

// Create arrays

// First is the article array for all Reviews

const articleArray = [
	new Review_Link(
		"Grand Electric",
		"This Parkdale based taco joint covers all the bases, great tacos, great margs, great atmosphere",
		"#/articles/0",
		"../images/grandelectric.jpeg",
		"",
		"July 28, 2021"
	),
	new Review_Link(
		"El Rey Mezcal Bar",
		"This taco place has a squid ink taco that will blow your socks off",
		"#/articles/1",
		"../images/elrey.jpeg",
		"",
		"July 21, 2021"
	),
	new Review_Link(
		"Seven Lives",
		"Don't let the queue put you off, you need to try these take out tacos",
		"#/articles/2",
		"../images/sevenlives.jpeg",
		"",
		"July 14, 2021"
	),
	new Review_Link(
		"Good Hombres",
		"Make your taco sets delivered to your door!",
		"#/articles/3",
		"../images/goodhombres.jpeg",
		"",
		"July 07, 2021"
	),
	new Review_Link(
		"Mi Taco Taqueria",
		"This Parkdale based taco joint covers all the bases, great tacos, great margs, great atmosphere",
		"#/articles/4",
		"../images/grandelectric.jpeg",
		"",
		"June 30, 2021"
	),
	new Review_Link(
		"Playa Cabana",
		"This taco place has a squid ink taco that will blow your socks off",
		"#/articles/5",
		"../images/elrey.jpeg",
		"",
		"June 23, 2021"
	),
	new Review_Link(
		"El Nahual Tacos",
		"Don't let the queue put you off, you need to try these take out tacos",
		"#/articles/6",
		"../images/sevenlives.jpeg",
		"",
		"June 16, 2021"
	),
	new Review_Link(
		"Campechano Taquería",
		"Make your taco sets delivered to your door!",
		"#/articles/7",
		"../images/goodhombres.jpeg",
		"",
		"June 09, 2021"
	),
	new Review_Link(
		"La Carnita",
		"This Parkdale based taco joint covers all the bases, great tacos, great margs, great atmosphere",
		"#/articles/8",
		"../images/grandelectric.jpeg",
		"",
		"June 02, 2021"
	),
	new Review_Link(
		"Wilbur Mexicana",
		"This taco place has a squid ink taco that will blow your socks off",
		"#/articles/9",
		"../images/elrey.jpeg",
		"",
		"May 26, 2021"
	),
	new Review_Link(
		"Tacos El Asador",
		"Don't let the queue put you off, you need to try these take out tacos",
		"#/articles/10",
		"../images/sevenlives.jpeg",
		"",
		"May 19, 2021"
	),
	new Review_Link(
		"El Catrin Destileria",
		"Make your taco sets delivered to your door!",
		"#/articles/11",
		"../images/goodhombres.jpeg",
		"",
		"May 12, 2021"
	)
];

// Second is the main array for the most recent reviews showing on the home page

const mainArray = [];

for (let i = 0; i < 4; i++) {
	mainArray[i] = articleArray[i]
};

// Export both arrays

export {articleArray, mainArray};
