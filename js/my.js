

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

// print current note

async function getAllCssStyles() {
    const styleElements = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));

    const promises = styleElements.map(async (el) => {
        // If it's a <style> tag, grab the text inside it immediately
        if (el.tagName.toLowerCase() === 'style') {
            return el.textContent;
        }
        
        // If it's a <link> tag, fetch the external CSS file asynchronously
        if (el.tagName.toLowerCase() === 'link') {
            try {
                const response = await fetch(el.href);
                if (!response.ok) return ''; // Skip if the file failed to load
                return await response.txt();
            } catch (err) {
                console.warn(`Could not fetch styles from ${el.href}:`, err);
                return ''; // Skip if blocked by CORS or network error
            }
        }
        return '';
    });

    // Wait for all the fetches to finish, then join them together
    const allStyles = await Promise.all(promises);
    return allStyles.join("\n");
}






async function printCurrentNote() {

    const note = document.getElementById("notes_text");

    if (!note) {
        alert("notes_text element not found.");
        return;
    }

    const content = note.innerHTML.trim();

    if (!content) {
        alert("No content to print.");
        return;
    }

    // Copy all CSS
    // const styles = Array.from(
    //     document.querySelectorAll('link[rel="stylesheet"], style')
    // ).map(el => el.outerHTML).join("\n");

    // How to use it:
const styles = await getAllCssStyles();
console.log(styles);

    // Remove old iframe if exists
    const oldFrame = document.getElementById("printFrame");
    if (oldFrame) oldFrame.remove();

    // Create hidden iframe
    const iframe = document.createElement("iframe");
    iframe.id = "printFrame";
    iframe.style.position = "fixed";
    iframe.style.right = "0";
    iframe.style.bottom = "0";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "0";

    document.body.appendChild(iframe);

    const doc = iframe.contentWindow.document;

    doc.open();
    doc.write(`
<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">
<base href="${document.baseURI}">

${styles}

<style>
body{
    margin:20px;
    background:#fff;
}

img{
    max-width:100%;
    height:auto;
}

table{
    width:100%;
    border-collapse:collapse;
}

table,th,td{
    border:1px solid #000;
}

th,td{
    padding:8px;
}

@media print{
    body{
        margin:15mm;
    }

    .no-print{
        display:none !important;
    }
}
</style>

</head>

<body>

${content}

</body>
</html>
`);
    doc.close();

    iframe.onload = function () {

        const imgs = doc.images;

        if (imgs.length === 0) {
            iframe.contentWindow.focus();
            iframe.contentWindow.print();

            setTimeout(() => iframe.remove(), 1000);
            return;
        }

        let loaded = 0;

        function done() {
            loaded++;

            if (loaded === imgs.length) {
                setTimeout(() => {
                    iframe.contentWindow.focus();
                    iframe.contentWindow.print();

                    setTimeout(() => iframe.remove(), 1000);

                }, 500);
            }
        }

        [...imgs].forEach(img => {
            if (img.complete) {
                done();
            } else {
                img.onload = done;
                img.onerror = done;
            }
        });

    };

}

// End print current note

