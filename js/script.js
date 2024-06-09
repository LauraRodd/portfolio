// Typing Effect Animation

const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');
const textArray = [ 'a User Experience Designer', 'a Data Enthusiast', 'a Marketing Specialist', 'a Creative Problem Solver', 'a Fast Learner' ];
const typingDelay = 120;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

// Typing animation

function type() {
	if (charIndex < textArray[textArrayIndex].length) {
		if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
		typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
		charIndex++;
		setTimeout(type, typingDelay);
	} else {
		cursorSpan.classList.remove('typing');
		setTimeout(erase, newTextDelay);
	}
}

// Delete text animation

function erase() {
	if (charIndex > 0) {
		if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
		typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
		charIndex--;
		setTimeout(erase, erasingDelay);
	} else {
		cursorSpan.classList.remove('typing');
		textArrayIndex++;
		if (textArrayIndex >= textArray.length) textArrayIndex = 0;
		setTimeout(type, typingDelay + 1100);
	}
}

document.addEventListener('DOMContentLoaded', function() {
	// On DOM Load initiate the effect
	if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Toggle between dark and light mode

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('light-mode');
});

// Back to top button

//Get the button:
const topButton = document.getElementById('topBtn');

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
	scrollFunction();
};
function scrollFunction() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		topButton.style.display = 'block';
	} else {
		topButton.style.display = 'none';
	}
}
// When the user clicks on the button, scroll to the top of the document
function topBtn() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

