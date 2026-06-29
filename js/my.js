

function openHambergurMenu() {
	document.getElementById("m-drop-down").classList.toggle("show");
}

const dropdown = document.querySelector(".mobile_dropdown");
const dropbtn = document.querySelector(".mobile_dropbtn");

dropbtn.addEventListener("click", function () {
	dropdown.classList.toggle("active");
});


// open togel subunit 
// function toggleSubUnit(element) {
// 	let list = element.nextElementSibling;

// 	if (list.style.display === "block") {
// 		list.style.display = "none";
// 	} else {
// 		list.style.display = "block";
// 	}
// }

function toggleUnit(element) {
	let current = element.nextElementSibling;

	document.querySelectorAll('.lecture_list').forEach(list => {
		if (list !== current) {
			list.style.display = 'none';
		}
	});

	current.style.display =
		window.getComputedStyle(current).display === 'none'
			? 'block'
			: 'none';
}

function toggleSubUnit(element) {
	let current = element.nextElementSibling;

	document.querySelectorAll('.sub_lecture_list').forEach(list => {
		if (list !== current) {
			list.style.display = 'none';
		}
	});

	current.style.display =
		window.getComputedStyle(current).display === 'none'
			? 'block'
			: 'none';
}

// end togel unit 