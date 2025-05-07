//dialog box
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('form a[href="#"]').addEventListener('click', function(){
		document.querySelector('form dialog').classList.toggle('show');
	});
	document.querySelector('.close').addEventListener('click', function(){
		document.querySelector('form dialog').classList.toggle('show');
	});
});
//Location Section
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.location>.accordion').addEventListener('click', function(){
		document.querySelector('.location>article').classList.toggle('show');
		document.querySelector('.location span').classList.toggle('rotate');
	});
});
//FAQs Section
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.faqs>.accordion').addEventListener('click', function(){
		document.querySelector('.faqs>article').classList.toggle('show');
		document.querySelector('.faqs span').classList.toggle('rotate');
	});
});
//Contact Section
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.contact>.accordion').addEventListener('click', function(){
		document.querySelector('.contact>article').classList.toggle('show');
		document.querySelector('.contact span').classList.toggle('rotate');
	});
});
function toggleNav() {
    let elements = document.getElementsByClassName('toggle-nav');
    for(let i = 0; i < elements.length; i++){
    elements[i].classList.toggle('show');
    }
}