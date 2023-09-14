let profileItems = document.querySelectorAll('.profile-item');
let cards = document.querySelectorAll('.card');

let index = 0;
var paused = false;

function changeCardLoop() {
	if (!paused) {
		profileItems[index % 8].classList.toggle('active');
		profileItems[(index + 1) % 8].classList.toggle('active');
		cards[index % 8].classList.toggle('active');
		cards[(index + 1) % 8].classList.toggle('active');
		index++;
	}
}

var timer = setInterval(changeCardLoop, 3000);



for (let i = 0; i < profileItems.length; i++) {
	profileItems[i].addEventListener('mouseover', () => {
		for (let j = 0; j < profileItems.length; j++) {
			profileItems[j].classList.remove('active');
		}
		profileItems[i].classList.add('active');
		paused = true;
		index = i;

		for (let j = 0; j < cards.length; j++) {
			cards[j].classList.remove('active');
		}
		cards[i].classList.add('active');
	});

	profileItems[i].addEventListener('mouseout', () => {
		paused = false;
	});

}

const cardWrapper = document.querySelector('.card-wrapper');

cardWrapper.addEventListener('mouseover', () => {
	paused = true;
});

cardWrapper.addEventListener('mouseout', () => {
	paused = false;
});
