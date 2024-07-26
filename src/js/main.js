const hamburgerBtn = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');
const hamburgerIcon = document.querySelector('.hamburgerIcon');
const body = document.querySelector('body');
const html = document.querySelector('html');

const openNav = () => {
	navMobile.classList.toggle('open');
	hamburgerBtn.classList.toggle('hamburger__black');
	hamburgerIcon.classList.toggle('fa-bars');
    disableScroll();
	setTimeout(function () {
		hamburgerIcon.classList.toggle('fa-xmark');
	}, 100);
	if (!hamburgerBtn.classList.contains('hamburger__black')) {
		hamburgerBtn.classList.add('hamburger__closed');
	} else {
		hamburgerBtn.classList.remove('hamburger__closed');
		
	}
};

const disableScroll = () => {
	body.classList.toggle('disableScroll');
	html.classList.toggle('disableScroll');
};

hamburgerBtn.addEventListener('click', openNav);
