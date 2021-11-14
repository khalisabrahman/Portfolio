// MENU FOR MOBILE
const btnHamburger = document.querySelector('#btnHamburger');
const menuLinks = document.querySelectorAll('.menuLinks');
const popupModal = document.querySelector(`[data-popup-modal="one"]`);
const header = document.querySelector('.header');

btnHamburger.addEventListener('click', () => {
	if (header.classList.contains('open')) {
		header.classList.remove('open');
		popupModal.classList.remove('is--visible');
		btnHamburger.classList.remove('openMenu');
	} else {
		header.classList.add('open');
		popupModal.classList.add('is--visible');
		btnHamburger.classList.add('openMenu')
	}
	
})

menuLinks.forEach(link => {
	link.addEventListener('click', () => {
		popupModal.classList.remove('is--visible');
		btnHamburger.classList.remove('openMenu');
	})
})



