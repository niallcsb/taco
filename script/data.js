import Review_Link from "./Review_Link.js"

// headline, subhead, link, image_169, imageArticle, caption, id, date, section, subsection

// Create arrays

// First is the article array for all Reviews
// Link and date intentionally left blank for now. Updated through a function later on.
const articleArray = [
	new Review_Link(
		"Grand Electric",
		"This Parkdale based taco joint covers all the bases, great tacos, great margs, great atmosphere",
		"",
		"../images/16_9/grandelectric.jpeg",
		"../images/article/grandelectric.jpeg",
		"Patrons sitting at the bar in Grand Electric soaking up margs and the atmosphere",
		1627444800000,
		"",
		"articles",
		""
	),
	new Review_Link(
		"El Rey Mezcal Bar",
		"This taco place has a squid ink taco that will blow your socks off",
		"",
		"../images/16_9/elrey.jpeg",
		"../images/article/elrey.jpeg",
		"",
		1626840000000,
		"",
		"articles",
		""
	),
	new Review_Link(
		"Seven Lives",
		"Don't let the queue put you off, you need to try these take out tacos",
		"",
		"../images/16_9/sevenlives.jpeg",
		"../images/article/sevenlives.jpeg",
		"",
		1626235200000,
		"",
		"articles",
		""
	),
	new Review_Link(
		"Good Hombres",
		"Make your taco sets delivered to your door!",
		"",
		"../images/16_9/goodhombres.jpeg",
		"../images/article/goodhombres.jpeg",
		"",
		1625630400000,
		"",
		"articles",
		""
	),
	new Review_Link(
		"Mi Taco Taqueria",
		"This Parkdale based taco joint covers all the bases, great tacos, great margs, great atmosphere",
		"",
		"../images/16_9/grandelectric.jpeg",
		"../images/article/grandelectric.jpeg",
		"",
		1625025600000,
		"",
		"articles",
		""
	),
	new Review_Link(
		"Playa Cabana",
		"This taco place has a squid ink taco that will blow your socks off",
		"",
		"../images/16_9/elrey.jpeg",
		"../images/article/elrey.jpeg",
		"",
		1624420800000,
		"",
		"articles",
		""
	),
	new Review_Link(
		"El Nahual Tacos",
		"Don't let the queue put you off, you need to try these take out tacos",
		"",
		"../images/16_9/sevenlives.jpeg",
		"../images/article/sevenlives.jpeg",
		"",
		1623816000000,
		"",
		"articles",
		""
	),
	new Review_Link(
		"Campechano Taquería",
		"Make your taco sets delivered to your door!",
		"",
		"../images/16_9/goodhombres.jpeg",
		"../images/article/goodhombres.jpeg",
		"",
		1623211200000,
		"",
		"articles",
		""
	),
	new Review_Link(
		"La Carnita",
		"This Parkdale based taco joint covers all the bases, great tacos, great margs, great atmosphere",
		"",
		"../images/16_9/grandelectric.jpeg",
		"../images/article/grandelectric.jpeg",
		"",
		1622606400000,
		"",
		"articles",
		""
	),
	new Review_Link(
		"Wilbur Mexicana",
		"This taco place has a squid ink taco that will blow your socks off",
		"",
		"../images/16_9/elrey.jpeg",
		"../images/article/elrey.jpeg",
		"",
		1622001600000,
		"",
		"articles",
		""
	),
	new Review_Link(
		"Tacos El Asador",
		"Don't let the queue put you off, you need to try these take out tacos",
		"",
		"../images/16_9/sevenlives.jpeg",
		"../images/article/sevenlives.jpeg",
		"",
		1621396800000,
		"",
		"articles",
		""
	),
	new Review_Link(
		"El Catrin Destileria",
		"Make your taco sets delivered to your door!",
		"",
		"../images/16_9/goodhombres.jpeg",
		"../images/article/goodhombres.jpeg",
		"",
		1620792000000,
		"",
		"articles",
		""
	)
];

// Format some of the parameters in the objects.
// Converts the month from a number to a string
const monthString = function(date) {
	let month;
	switch (date.getMonth()) {
		case 0:
			month = "January";
			break;
		case 1:
			month = "February";
			break;
		case 2:
			month = "March";
			break;
		case 3:
			month = "April";
			break;
		case 4:
			month = "May";
			break;
		case 5:
			month = "June";
			break;
		case 6:
			month = "July";
			break;
		case 7:
			month = "August";
			break;
		case 8:
			month = "September";
			break;
		case 9:
			month = "October";
			break;
		case 10:
			month = "November";
			break;
		case 11:
			month = "December";
			break;
	};
	return month;
};

articleArray.forEach((item) => {
	let urlUpdate = item.headline.replace(/\s/g,'').toLowerCase();
	item.link = `#/articles/${item.id}/${urlUpdate}`;
	let dateUpdate = new Date(item.id);
	let month = monthString(dateUpdate);
	item.date = `${month} ${dateUpdate.getDate()}, ${dateUpdate.getFullYear()}`;
});

// Second is the main array for the most recent reviews showing on the home page

const mainArray = [];

for (let i = 0; i < 4; i++) {
	mainArray[i] = articleArray[i]
};

// Export both arrays

export {articleArray, mainArray};
