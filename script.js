// Burger-меню
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu){
    const nav = document.querySelector('.nav');
	const info = document.querySelector('.info__info');
    iconMenu.addEventListener("click", function(e) {
        iconMenu.classList.toggle('active');
        nav.classList.toggle('active');
		info.classList.toggle('active');
    });
}

// Счетчик
const body = document.body;

let counter = document.getElementById('counter');
let isCounting = true;

counter.innerHTML = 0;

let observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting && isCounting) {
			let interval = setInterval(() => {
				counter.innerHTML = ++counter.innerHTML;
				if (+counter.innerHTML == 17) {
					clearInterval(interval);
				}
			}, 100);
			isCounting = false;
		}
	})
}, {
	threshold: .5
})

observer.observe(counter);

// Табы
const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(function(item) {
	item.addEventListener("click", function() {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);

		if( ! currentBtn.classList.contains('active') ) {
			tabsBtn.forEach(function(item) {
				item.classList.remove('active');
			});
			tabsItems.forEach(function(item) {
				item.classList.remove('active');
			});
	
			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		}

	});
});

// Видео popup
const openPopUp = document.querySelector('.play');
const closePopUp = document.querySelector('.pop_up_close');
const popUp = document.querySelector('.pop_up');

openPopUp.addEventListener('click', function(e){
	e.preventDefault();
	popUp.classList.add('active');
});

closePopUp.addEventListener('click', () => {
	popUp.classList.remove('active');
});

