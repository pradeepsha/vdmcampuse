

function openHambergurMenu() {
	document.getElementById("m-drop-down").classList.toggle("show");
}

const dropdown = document.querySelector(".mobile_dropdown");
const dropbtn = document.querySelector(".mobile_dropbtn");

dropbtn.addEventListener("click", function () {
	dropdown.classList.toggle("active");
});


        function loadNote(title, text, event) {

            document.getElementById("notes_title").innerHTML = title;
            document.getElementById("notes_text").innerHTML = text;

            let lectures = document.querySelectorAll(".lecture");

            lectures.forEach(l => l.classList.remove("active"));


            // Remove active from all sub lectures
            document.querySelectorAll(".sub_lecture").forEach(item => {
                item.classList.remove("active");
            });

            // Add active to clicked sub lecture
            event.currentTarget.classList.add("active");

            // Scroll content area to top after loading
            document.getElementById("mainContent").scrollTo({
                top: 0,
                behavior: "smooth"
            });

            closeSidebar();
        }


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

// function toggleSubUnit(element) {
// 	let current = element.nextElementSibling;

// 	document.querySelectorAll('.sub_lecture_list').forEach(list => {
// 		if (list !== current) {
// 			list.style.display = 'none';
// 		}
// 	});

// 	current.style.display =
// 		window.getComputedStyle(current).display === 'none'
// 			? 'block'
// 			: 'none';

// }


function toggleSubUnit(element) {

    let current = element.nextElementSibling;

    // Remove active from all lectures
    document.querySelectorAll(".lecture").forEach(lecture => {
        lecture.classList.remove("active");
    });

    // Add active to clicked lecture
    element.parentElement.classList.add("active");

    // Close other sub-lecture lists
    document.querySelectorAll(".sub_lecture_list").forEach(list => {
        if (list !== current) {
            list.style.display = "none";
        }
    });

    // Toggle current sub-lecture list
    current.style.display =
        window.getComputedStyle(current).display === "none"
            ? "block"
            : "none";
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

// Practice Questions

function toggleSolution(button)
{
    const questionBox = button.closest(".question-box");
    const solution = questionBox.querySelector(".solution-content");

    if(solution.style.display === "none" ||
       solution.style.display === "")
    {
        solution.style.display = "block";
        button.innerText = "Hide";
    }
    else
    {
        solution.style.display = "none";
        button.innerText = "View";
    }
}


// let currentQuestionPage = 1;

const questionsPerPage = 10;


// function loadQuestions()
// {
//     const totalQuestions = cProgrammingQuestions.length;

//     const totalPages = Math.ceil(
//         totalQuestions / questionsPerPage
//     );

//     let startIndex =
//         (currentQuestionPage - 1) * questionsPerPage;

//     let endIndex =
//         startIndex + questionsPerPage;

//     let questions = cProgrammingQuestions.slice(
//         startIndex,
//         endIndex
//     );

//     let content = "";

//     // ==============================
//     // PAGINATION
//     // ==============================

//     content += `
//         <div class="question-pagination">

//             <button
//                 class="pagination-btn"
//                 onclick="previousQuestionPage()"
//                 ${currentQuestionPage === 1 ? "disabled" : ""}>
//                 Previous
//             </button>
//     `;


//     for(let i = 1; i <= totalPages; i++)
//     {
//         content += `
//             <button
//                 class="pagination-number
//                 ${i === currentQuestionPage ? "active" : ""}"
//                 onclick="goToQuestionPage(${i})">
//                 ${i}
//             </button>
//         `;
//     }


//     content += `
//             <button
//                 class="pagination-btn"
//                 onclick="nextQuestionPage()"
//                 ${currentQuestionPage === totalPages ? "disabled" : ""}>
//                 Next
//             </button>

//         </div>
//     `;


//     // ==============================
//     // QUESTIONS
//     // ==============================

//     questions.forEach((item, index) =>
//     {
//         let questionNumber =
//             startIndex + index + 1;


//         // ==============================
//         // MCQ OPTIONS
//         // ==============================

//         const optionLetters = ["A", "B", "C", "D"];

//         let optionsHTML = "";

//         if (item.options)
//         {
//             optionsHTML = `
//                 <div class="mcq-options">

//                     ${item.options.map((option, optionIndex) => `
                        
//                         <div class="mcq-option">

//                             <span class="mcq-option-label">
//                                 ${optionLetters[optionIndex]}
//                             </span>

//                             <span class="mcq-option-text">
//                                 ${option}
//                             </span>

//                         </div>

//                     `).join("")}

//                 </div>
//             `;
//         }


//         // ==============================
//         // QUESTION HTML
//         // ==============================

//         content += `
//             <div class="question-box">

//                 <div class="question-title">
//                     Question ${questionNumber}
//                 </div>

//                 <div class="question-row">

//                     <div class="question-text">
//                         ${item.question}
//                     </div>

//                     <button
//                         class="view-solution-btn"
//                         onclick="toggleSolution(this)">
//                         View
//                     </button>

//                 </div>

//                 ${optionsHTML}

//                 <div class="solution-content">
//                     ${item.solution}
//                 </div>

//             </div>
//         `;
//     });


//     document.getElementById("questions").innerHTML = content;
// }

// function previousQuestionPage()
// {
//     if(currentQuestionPage > 1)
//     {
//         currentQuestionPage--;

//         loadQuestions();
//     }
// }

// function nextQuestionPage()
// {
//     const totalPages = Math.ceil(
//         cProgrammingQuestions.length / questionsPerPage
//     );

//     if(currentQuestionPage < totalPages)
//     {
//         currentQuestionPage++;

//         loadQuestions();
//     }
// }

// function goToQuestionPage(page)
// {
//     currentQuestionPage = page;

//     loadQuestions();
// }



let currentQuestionArray = [];
let currentQuestionPage = 1;


function loadQuestions(questionArray)
{
    // Store the selected question array
    currentQuestionArray = questionArray;

    // Reset pagination when a new question array is loaded
    currentQuestionPage = 1;

    renderQuestions();
}


function renderQuestions()
{
    const totalQuestions = currentQuestionArray.length;

    const totalPages = Math.ceil(
        totalQuestions / questionsPerPage
    );

    let startIndex =
        (currentQuestionPage - 1) * questionsPerPage;

    let endIndex =
        startIndex + questionsPerPage;

    let questions = currentQuestionArray.slice(
        startIndex,
        endIndex
    );

    let content = "";


    // ==============================
    // PAGINATION
    // ==============================

    content += `
        <div class="question-pagination">

            <button
                class="pagination-btn"
                onclick="previousQuestionPage()"
                ${currentQuestionPage === 1 ? "disabled" : ""}>
                Previous
            </button>
    `;


    for(let i = 1; i <= totalPages; i++)
    {
        content += `
            <button
                class="pagination-number
                ${i === currentQuestionPage ? "active" : ""}"
                onclick="goToQuestionPage(${i})">
                ${i}
            </button>
        `;
    }


    content += `
            <button
                class="pagination-btn"
                onclick="nextQuestionPage()"
                ${currentQuestionPage === totalPages ? "disabled" : ""}>
                Next
            </button>

        </div>
    `;


    // ==============================
    // QUESTIONS
    // ==============================

    questions.forEach((item, index) =>
    {
        let questionNumber =
            startIndex + index + 1;


        // ==============================
        // MCQ OPTIONS
        // ==============================

        const optionLetters = ["A", "B", "C", "D"];

        let optionsHTML = "";


        if(item.options)
        {
            optionsHTML = `
                <div class="mcq-options">

                    ${item.options.map((option, optionIndex) => `

                        <div class="mcq-option">

                            <span class="mcq-option-label">
                                ${optionLetters[optionIndex]}
                            </span>

                            <span class="mcq-option-text">
                                ${option}
                            </span>

                        </div>

                    `).join("")}

                </div>
            `;
        }


        // ==============================
        // QUESTION HTML
        // ==============================

        content += `
            <div class="question-box">

                <div class="question-title">
                    Question ${questionNumber}
                </div>

                <div class="question-row">

                    <div class="question-text">
                        ${item.question}
                    </div>

                    <button
                        class="view-solution-btn"
                        onclick="toggleSolution(this)">
                        View
                    </button>

                </div>

                ${optionsHTML}

                <div class="solution-content">
                    ${item.solution}
                </div>

            </div>
        `;
    });


    // ==============================
    // DISPLAY QUESTIONS
    // ==============================

    document.getElementById("questions").innerHTML = content;
}

function previousQuestionPage()
{
    if(currentQuestionPage > 1)
    {
        currentQuestionPage--;

        renderQuestions();
    }
}


function nextQuestionPage()
{
    const totalPages = Math.ceil(
        currentQuestionArray.length / questionsPerPage
    );

    if(currentQuestionPage < totalPages)
    {
        currentQuestionPage++;

        renderQuestions();
    }
}


function goToQuestionPage(page)
{
    currentQuestionPage = page;

    renderQuestions();
}


// End Practice Questions