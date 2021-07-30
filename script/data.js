import Review_Link from "./Review_Link.js"

// headline, subhead, link, image, date

// Create review array

const firstReview = new Review_Link(
	"Grand Electric",
	"This Parkdale based taco joint covers all the bases, great tacos, great margs, great atmosphere",
	"#",
	"../images/grandelectric.jpeg",
	"July 28, 2021"
)

const secondReview = new Review_Link(
	"El Rey Mezcal Bar",
	"This taco place has a squid ink taco that will blow your socks off",
	"#",
	"../images/elrey.jpeg",
	"July 21, 2021"
)

const thirdReview = new Review_Link(
	"Seven Lives",
	"Don't let the queue put you off, you need to try these take out tacos",
	"#",
	"../images/sevenlives.jpeg",
	"July 14, 2021"
)

const fourthReview = new Review_Link(
	"Good Hombres",
	"Make your taco sets delivered to your door!",
	"#",
	"../images/goodhombres.jpeg",
	"July 07, 2021"
)

const mainReviewArray = [firstReview, secondReview, thirdReview, fourthReview];

export default mainReviewArray;
