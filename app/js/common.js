$(function() {

	// Burger menu
	var menu = document.querySelector('.header__nav--mobile');
	var nav = document.querySelector('.header__nav');
	var close = document.querySelector('.header__close');
	function showHideMenu(elem, event) {
		elem.addEventListener('click', function() {
		nav.style.display = event
	})
	}
	showHideMenu(menu, 'flex');
	showHideMenu(close, 'none')

	//show category
	var cat = document.querySelectorAll('.portfolio__menu li');
	var blocks = document.querySelectorAll('.portfolio__block');

	cat.forEach(function(category) {
		category.addEventListener('click', function(e) {
			var catClass = e.target.classList[0]
			for (var i=0; i<cat.length; i++) {
				if (cat[i].classList.contains('active')) {
					cat[i].classList.remove('active')
				}
			}
			e.target.classList.add('active')
			blocks.forEach(function(item) {
				item.parentNode.style.display = 'block'
				if(item.classList.contains(catClass)) {
					item.style.display = 'block'
				} else {
					item.parentNode.style.display = 'none'
				}
			})
		})
	})
	
});
