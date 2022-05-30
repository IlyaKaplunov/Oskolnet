/* const header = document.querySelector('.header');
const home = document.querySelector('.home');
const headerHeight = header.offsetHeight;
const homeHeight = home.offsetHeight;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	 if (scrollDistance >= homeHeight + headerHeight) {
	 	header.classList.add('fixed');
	 	home.style.marginTop = `${headerHeight}px`;
	 } else {
	 	header.classList.remove('fixed');
	 	home.style.marginTop = null;
	 }

	/* if (scrollDistance > lastScrollTop) {
		header.classList.remove('fixed');
		home.style.marginTop = null;
	} else {
		header.classList.add('fixed');
		first.style.marginTop = `${headerHeight}px`;
	}

	if (scrollDistance === 0) {
		header.classList.remove('fixed');
		home.style.marginTop = null;
	}

	lastScrollTop = scrollDistance; 
}); */
/* 
const header = document.querySelector('.js-header')
		headerH = document.querySelector('.js-header').clientHeight;

document.onscroll = function () {
	let scroll = window.scrollY;

	if (scroll > headerH) {
		header.classList.add('fixed');
		document.body.style.paddingTop = headerH + 'px';
	} else {
		header.classList.remove('fixed');
		document.body.removeAttribute('style');
	}
} */