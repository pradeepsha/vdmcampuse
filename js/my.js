

function openHambergurMenu() {
	document.getElementById("m-drop-down").classList.toggle("show");
}

const dropdown = document.querySelector(".mobile_dropdown");
const dropbtn = document.querySelector(".mobile_dropbtn");

dropbtn.addEventListener("click", function () {
	dropdown.classList.toggle("active");
});


// open togel subunit 
function toggleSubUnit(element) {
	let list = element.nextElementSibling;

	if (list.style.display === "block") {
		list.style.display = "none";
	} else {
		list.style.display = "block";
	}
}

// end togel unit 