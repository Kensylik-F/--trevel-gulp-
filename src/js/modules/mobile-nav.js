function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
	};
}

export default mobileNav;
// function mobileNav(){
//     const navdtn = document.querySelector('.mobile-nav-btn');
//     const mobile_Nav = document.querySelector('.mobile-nav');
//     const navIcon = document.querySelector('.nav-icon');


//     navdtn.onclick = function(){
//         mobile_Nav.classList.toggle('mobile-nav--open');
//         navIcon.classList.toggle('nav-icon--active')
//         document.body.classList.toggle('.no-scroll');
        
// }
// };
// export default mobileNav;
