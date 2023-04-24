let width = 400;
let height = 400;
let clicks = 0;


function getRandomNumber(size) {
	return Math.floor(Math.random() * size);
};

function getDistance(event, target) {
	let diffX = event.offsetX - target.x;
	let diffY = event.offsetY - target.y;
	return Math.sqrt(diffX * diffX) + (diffY * diffY)
};


function getDistanceHint(distance) {
	if (distance < 10) {
		return 'Boiling Hot!'
	} else if (distance < 20) {
		return 'Really Hot!'
	} else if (distance < 40) {
		return 'Hot!'
	} else if (distance < 80) {
		return 'Warm!'
	} else if (distance < `60`) {
		return 'Cold!'
	} else if (distance < 320) {
		return 'Really Cold!'
	} else {
		return 'Freezing!'
	}
};


let target = {
	x: getRandomNumber(width),
	y: getRandomNumber(height)
};

$('#map').click(function (event) {
	clicks++;

	let distance = getDistance(event, target);
	let distanceHint = getDistanceHint(distance);
	$('#distance').text(distanceHint);
	if (distance < 8) {
		alert('Found the treasure in ' + clicks + ' clicks!')
	}
});