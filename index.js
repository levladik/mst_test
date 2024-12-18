(function () {
	const nav = document.querySelector('.header__nav');
	window.onscroll = () => {
		if (window.scrollY > 50) {
			nav.classList.add('header_active');
		} else {
			nav.classList.remove('header_active');
		}
	};

  const burgerMenu = document.querySelector('.burger-menu');
  const menuList = document.querySelector('.header__nav-menu-list');

  burgerMenu.addEventListener('click', function() {
    menuList.classList.toggle('active');
    burgerMenu.classList.toggle('active');
  })
}());

