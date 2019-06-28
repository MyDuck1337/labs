let burger = document.getElementsByClassName("burger")[0];
let headerNav = document.getElementsByClassName("header__nav")[0];

burger.onclick = function(){
	headerNav.style.display = (headerNav.style.display == "block") ? "none" : "block";
};
