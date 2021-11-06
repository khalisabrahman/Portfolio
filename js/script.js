// const body = document.querySelector('body');
const btnHamburger = document.querySelector('#btnHamburger');
const menuLinks = document.querySelectorAll('.menuLinks');
const menuTrigger = btnHamburger.dataset;
const popupModal = document.querySelector(`[data-popup-modal="one"]`);

btnHamburger.addEventListener('click', () => {
	popupModal.classList.add('is--visible');
})

menuLinks.forEach(link => {
	link.addEventListener('click', () => {
		popupModal.classList.remove('is--visible');
	})
})