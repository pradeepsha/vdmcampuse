// ========================================
// C QUESTIONS
// ========================================

const cQuestions = `

<div class="notes_title">
    C Programming Questions

</div>

<div class="notes_text">

    <div id="questions"></div>

</div>

`;


const cQuestion1 = {
    question: "Write a C program to print Hello World.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    printf(<span class="string">"Hello World"</span>);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion2 = {
    question: "Write a C program to declare an integer variable and print its value.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> num = <span class="number">10</span>;

    printf(<span class="string">"Number = %d"</span>, num);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion3 = {
    question: "Write a C program to take a number from the user and print it.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> num;

    printf(<span class="string">"Enter a number: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;num);

    printf(<span class="string">"Number = %d"</span>, num);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion4 = {
    question: "Write a C program to take two numbers from the user and print their sum.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> a, b;

    printf(<span class="string">"Enter two numbers: "</span>);
    scanf(<span class="string">"%d %d"</span>, &amp;a, &amp;b);

    printf(<span class="string">"Sum = %d"</span>, a + b);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion5 = {
    question: "Write a C program to perform addition, subtraction, multiplication, and division of two numbers.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> a, b;

    printf(<span class="string">"Enter two numbers: "</span>);
    scanf(<span class="string">"%d %d"</span>, &amp;a, &amp;b);

    printf(<span class="string">"Addition = %d\\n"</span>, a + b);
    printf(<span class="string">"Subtraction = %d\\n"</span>, a - b);
    printf(<span class="string">"Multiplication = %d\\n"</span>, a * b);
    printf(<span class="string">"Division = %d"</span>, a / b);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};

const cQuestion6 = {
    question: "Write a C program to find the ASCII value of a character.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">char</span> ch;

    printf(<span class="string">"Enter a character: "</span>);
    scanf(<span class="string">"%c"</span>, &amp;ch);

    printf(<span class="string">"ASCII value of %c = %d"</span>, ch, ch);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};

const cQuestion7 = {
    question: "Write a C program to find the size of int, float, double, and char data types.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    printf(<span class="string">"Size of int = %zu bytes\\n"</span>, <span class="function">sizeof</span>(<span class="keyword">int</span>));

    printf(<span class="string">"Size of float = %zu bytes\\n"</span>, <span class="function">sizeof</span>(<span class="keyword">float</span>));

    printf(<span class="string">"Size of double = %zu bytes\\n"</span>, <span class="function">sizeof</span>(<span class="keyword">double</span>));

    printf(<span class="string">"Size of char = %zu byte"</span>, <span class="function">sizeof</span>(<span class="keyword">char</span>));

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};

const cQuestion8 = {
    question: "Write a C program to print your own name.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    printf(<span class="string">"Pradeep Kumar Yadav"</span>);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion9 = {
    question: "Write a C program to take an integer from the user and print it.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> num;

    printf(<span class="string">"Enter an integer: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;num);

    printf(<span class="string">"You entered: %d"</span>, num);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};

const cQuestion10 = {
    question: "Write a C program to print the ASCII value of a character using typecasting.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">char</span> ch;

    printf(<span class="string">"Enter a character: "</span>);
    scanf(<span class="string">"%c"</span>, &amp;ch);

    printf(<span class="string">"ASCII value of %c = %d"</span>, ch, (<span class="keyword">int</span>)ch);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};

const cQuestion11 = {
    question: "Write a C program to find the ASCII value of a character using a function.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> getASCII(<span class="keyword">char</span> ch)
{
    <span class="keyword">return</span> ch;
}

<span class="keyword">int</span> main()
{
    <span class="keyword">char</span> ch;
    <span class="keyword">int</span> ascii;

    printf(<span class="string">"Enter a character: "</span>);
    scanf(<span class="string">"%c"</span>, &amp;ch);

    ascii = getASCII(ch);

    printf(<span class="string">"ASCII value of %c = %d"</span>, ch, ascii);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion12 = {
    question: "Who developed the C programming language?",

    options: [
        "James Gosling",
        "Dennis Ritchie",
        "Ken Thompson",
        "Bjarne Stroustrup"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) Dennis Ritchie</span></code></pre>

</div>
`
};


const cQuestion13 = {
    question: "In which year was C language developed?",

    options: [
        "1965",
        "1970",
        "1972",
        "1980"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) 1972</span></code></pre>

</div>
`
};


const cQuestion14 = {
    question: "Where was C language developed?",

    options: [
        "IBM",
        "Microsoft",
        "Bell Laboratories",
        "Google"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) Bell Laboratories</span></code></pre>

</div>
`
};


const cQuestion15 = {
    question: "C language was mainly developed for which operating system?",

    options: [
        "Windows",
        "UNIX",
        "Android",
        "Linux"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) UNIX</span></code></pre>

</div>
`
};


const cQuestion16 = {
    question: "Which language directly influenced the development of C?",

    options: [
        "Java",
        "B",
        "Python",
        "Pascal"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) B</span></code></pre>

</div>
`
};


const cQuestion17 = {
    question: "Who developed the B programming language?",

    options: [
        "Dennis Ritchie",
        "Ken Thompson",
        "Martin Richards",
        "James Gosling"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) Ken Thompson</span></code></pre>

</div>
`
};


const cQuestion18 = {
    question: "Which language came before B?",

    options: [
        "C",
        "C++",
        "BCPL",
        "Java"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) BCPL</span></code></pre>

</div>
`
};


const cQuestion19 = {
    question: "Which organization standardized C in 1989?",

    options: [
        "ISO",
        "ANSI",
        "IEEE",
        "W3C"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) ANSI</span></code></pre>

</div>
`
};


const cQuestion20 = {
    question: "Which version of C was introduced in 1999?",

    options: [
        "C89",
        "C90",
        "C99",
        "C11"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) C99</span></code></pre>

</div>
`
};


const cQuestion21 = {
    question: "Which of the following is a major use of C language?",

    options: [
        "System programming",
        "Web browsing only",
        "Video editing only",
        "Database management only"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">A) System programming</span></code></pre>

</div>
`
};

const cQuestion22 = {
    question: "Which of the following is a valid identifier in C?",

    options: [
        "2value",
        "total_marks",
        "float",
        "my-name"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) total_marks</span></code></pre>

</div>
`
};


const cQuestion23 = {
    question: "Which symbol can be used in a C identifier?",

    options: [
        "@",
        "#",
        "_",
        "-"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) _</span></code></pre>

</div>
`
};


const cQuestion24 = {
    question: "Which of the following cannot be the first character of an identifier?",

    options: [
        "Letter",
        "Underscore",
        "Digit",
        "Special character"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) Digit</span></code></pre>

</div>
`
};


const cQuestion25 = {
    question: "C identifiers are:",

    options: [
        "Case-sensitive",
        "Case-insensitive",
        "Both",
        "None"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">A) Case-sensitive</span></code></pre>

</div>
`
};


const cQuestion26 = {
    question: "Which of the following is an invalid identifier?",

    options: [
        "student1",
        "_marks",
        "totalMarks",
        "1student"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">D) 1student</span></code></pre>

</div>
`
};


const cQuestion27 = {
    question: "Which of the following is a valid variable declaration?",

    options: [
        "int 1num;",
        "int num1;",
        "int num-1;",
        "int float;"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) int num1;</span></code></pre>

</div>
`
};


const cQuestion28 = {
    question: "How many variables are declared in: int a, b, c;",

    options: [
        "1",
        "2",
        "3",
        "4"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) 3</span></code></pre>

</div>
`
};


const cQuestion29 = {
    question: "What is the value of x after: int x = 10;",

    options: [
        "0",
        "1",
        "10",
        "Garbage value"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) 10</span></code></pre>

</div>
`
};


const cQuestion30 = {
    question: "Which of the following cannot be used as an identifier?",

    options: [
        "main",
        "student",
        "return",
        "_main"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) return</span></code></pre>

</div>
`
};


const cQuestion31 = {
    question: `What will be the output?

int a = 10;
int A = 20;`,

    options: [
        "a = 20 and A = 20",
        "a = 10 and A = 10",
        "a = 10 and A = 20",
        "Compilation error"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) a = 10 and A = 20</span></code></pre>

    <pre><code><span class="comment">// C identifiers are case-sensitive.</span>

<span class="keyword">int</span> a = <span class="number">10</span>;
<span class="keyword">int</span> A = <span class="number">20</span>;</code></pre>

</div>
`
};

const cQuestion32 = {
    question: "Which data type is used to store an integer value?",

    options: [
        "float",
        "int",
        "char",
        "double"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) int</span></code></pre>

</div>
`
};


const cQuestion33 = {
    question: "Which data type is used to store a single character?",

    options: [
        "int",
        "float",
        "char",
        "double"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) char</span></code></pre>

</div>
`
};


const cQuestion34 = {
    question: "Which data type is generally used to store decimal values?",

    options: [
        "int",
        "char",
        "float",
        "void"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) float</span></code></pre>

</div>
`
};


const cQuestion35 = {
    question: "Which data type provides higher precision for floating-point values?",

    options: [
        "char",
        "int",
        "float",
        "double"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">D) double</span></code></pre>

</div>
`
};


const cQuestion36 = {
    question: "Which data type does not return any value?",

    options: [
        "int",
        "char",
        "void",
        "float"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) void</span></code></pre>

</div>
`
};


const cQuestion37 = {
    question: "Which of the following is a valid declaration?",

    options: [
        "int age;",
        "integer age;",
        "number age;",
        "real age;"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">A) int age;</span></code></pre>

</div>
`
};


const cQuestion38 = {
    question: "Which format specifier is used to print an integer?",

    options: [
        "%f",
        "%d",
        "%c",
        "%s"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) %d</span></code></pre>

</div>
`
};


const cQuestion39 = {
    question: "Which format specifier is used to print a character?",

    options: [
        "%d",
        "%f",
        "%c",
        "%lf"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) %c</span></code></pre>

</div>
`
};


const cQuestion40 = {
    question: "Which of the following is NOT a basic data type in C?",

    options: [
        "int",
        "char",
        "float",
        "string"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">D) string</span></code></pre>

</div>
`
};


const cQuestion41 = {
    question: "Which data type is commonly used to store a double-precision floating-point value?",

    options: [
        "int",
        "char",
        "double",
        "void"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) double</span></code></pre>

</div>
`
};

const cQuestion42 = {
    question: "Which format specifier is used to print an integer in C?",

    options: [
        "%f",
        "%d",
        "%c",
        "%s"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) %d</span></code></pre>

</div>
`
};


const cQuestion43 = {
    question: "Which format specifier is used to print a character?",

    options: [
        "%d",
        "%f",
        "%c",
        "%s"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) %c</span></code></pre>

</div>
`
};


const cQuestion44 = {
    question: "Which format specifier is used to print a string?",

    options: [
        "%s",
        "%c",
        "%d",
        "%f"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">A) %s</span></code></pre>

</div>
`
};


const cQuestion45 = {
    question: "Which format specifier is commonly used to print a float value?",

    options: [
        "%d",
        "%c",
        "%f",
        "%s"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) %f</span></code></pre>

</div>
`
};


const cQuestion46 = {
    question: "Which format specifier is used for an unsigned integer?",

    options: [
        "%u",
        "%d",
        "%i",
        "%f"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">A) %u</span></code></pre>

</div>
`
};


const cQuestion47 = {
    question: "Which format specifier is used to print a hexadecimal value in lowercase?",

    options: [
        "%o",
        "%X",
        "%x",
        "%h"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) %x</span></code></pre>

</div>
`
};


const cQuestion48 = {
    question: "Which format specifier is used to print an octal value?",

    options: [
        "%o",
        "%x",
        "%d",
        "%u"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">A) %o</span></code></pre>

</div>
`
};


const cQuestion49 = {
    question: "Which format specifier is used to print a pointer address?",

    options: [
        "%a",
        "%p",
        "%ptr",
        "%P"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) %p</span></code></pre>

</div>
`
};


const cQuestion50 = {
    question: "Which format specifier is used to print the % symbol?",

    options: [
        "%p",
        "%%",
        "%percent",
        "%s"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) %%</span></code></pre>

</div>
`
};


const cQuestion51 = {
    question: "Which format specifier is used with scanf() to read a double value?",

    options: [
        "%f",
        "%d",
        "%lf",
        "%ld"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) %lf</span></code></pre>

</div>
`
};

const cQuestion52 = {
    question: "Which operator is used for addition in C?",

    options: [
        "-",
        "+",
        "*",
        "/"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) +</span></code></pre>
</div>
`
};


const cQuestion53 = {
    question: "Which operator is used to find the remainder?",

    options: [
        "/",
        "//",
        "%",
        "&"
    ],

    answer: 2,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) %</span></code></pre>
</div>
`
};


const cQuestion54 = {
    question: "What is the output of: 10 / 3?",

    options: [
        "3",
        "3.33",
        "4",
        "1"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">A) 3</span></code></pre>
</div>
`
};


const cQuestion55 = {
    question: "Which operator has the highest precedence among the following?",

    options: [
        "+",
        "-",
        "*",
        "="
    ],

    answer: 2,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) *</span></code></pre>
</div>
`
};


const cQuestion56 = {
    question: "Which operator is used for simple assignment?",

    options: [
        "==",
        "=",
        ":=",
        "==="
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) =</span></code></pre>
</div>
`
};


const cQuestion57 = {
    question: "What is the value of x after: x = 10; x += 5;?",

    options: [
        "5",
        "10",
        "15",
        "50"
    ],

    answer: 2,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) 15</span></code></pre>
</div>
`
};


const cQuestion58 = {
    question: "Which is equivalent to: x = x * 5?",

    options: [
        "x += 5",
        "x *= 5",
        "x /= 5",
        "x %= 5"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) x *= 5</span></code></pre>
</div>
`
};


const cQuestion59 = {
    question: "Which operator checks whether two values are equal?",

    options: [
        "=",
        "!=",
        "==",
        "<="
    ],

    answer: 2,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) ==</span></code></pre>
</div>
`
};


const cQuestion60 = {
    question: "Which logical operator represents AND?",

    options: [
        "||",
        "&&",
        "!",
        "&"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) &&</span></code></pre>
</div>
`
};


const cQuestion61 = {
    question: "Which logical operator represents OR?",

    options: [
        "&&",
        "||",
        "!",
        "|"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) ||</span></code></pre>
</div>
`
};


const cQuestion62 = {
    question: "What is the result of: 1 && 0?",

    options: [
        "1",
        "0",
        "10",
        "Error"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) 0</span></code></pre>
</div>
`
};


const cQuestion63 = {
    question: "What is the result of: 1 || 0?",

    options: [
        "0",
        "1",
        "10",
        "Error"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) 1</span></code></pre>
</div>
`
};


const cQuestion64 = {
    question: "Which operator is used for logical NOT?",

    options: [
        "~",
        "!",
        "!=",
        "^"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) !</span></code></pre>
</div>
`
};


const cQuestion65 = {
    question: "What is the result of: !5?",

    options: [
        "5",
        "1",
        "0",
        "-5"
    ],

    answer: 2,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) 0</span></code></pre>
</div>
`
};


const cQuestion66 = {
    question: "Which operator performs bitwise AND?",

    options: [
        "&&",
        "&",
        "|",
        "^"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) &</span></code></pre>
</div>
`
};


const cQuestion67 = {
    question: "Which operator performs bitwise OR?",

    options: [
        "||",
        "&",
        "|",
        "^"
    ],

    answer: 2,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) |</span></code></pre>
</div>
`
};


const cQuestion68 = {
    question: "Which operator performs bitwise XOR?",

    options: [
        "^",
        "&&",
        "||",
        "~"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">A) ^</span></code></pre>
</div>
`
};


const cQuestion69 = {
    question: "Which operator performs bitwise NOT?",

    options: [
        "!",
        "~",
        "^",
        "&"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) ~</span></code></pre>
</div>
`
};


const cQuestion70 = {
    question: "What is the result of: 5 & 3?",

    options: [
        "1",
        "2",
        "3",
        "7"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">A) 1</span></code></pre>
</div>
`
};


const cQuestion71 = {
    question: "What is the result of: 5 | 3?",

    options: [
        "1",
        "6",
        "7",
        "8"
    ],

    answer: 2,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) 7</span></code></pre>
</div>
`
};


const cQuestion72 = {
    question: "Which operator is used for incrementing a value by 1?",

    options: [
        "+",
        "++",
        "+=",
        "**"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) ++</span></code></pre>
</div>
`
};


const cQuestion73 = {
    question: "Which operator is used for decrementing a value by 1?",

    options: [
        "--",
        "-=",
        "-",
        "**"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">A) --</span></code></pre>
</div>
`
};


const cQuestion74 = {
    question: `What is the value of x after:

int x = 5;
++x;`,

    options: [
        "4",
        "5",
        "6",
        "7"
    ],

    answer: 2,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) 6</span></code></pre>
</div>
`
};


const cQuestion75 = {
    question: `What is the output?

int x = 5;
printf("%d", x++);`,

    options: [
        "4",
        "5",
        "6",
        "Error"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) 5</span></code></pre>

    <pre><code><span class="keyword">int</span> x = <span class="number">5</span>;
printf(<span class="string">"%d"</span>, x++);</code></pre>

</div>
`
};


const cQuestion76 = {
    question: `What is the output?

int x = 5;
printf("%d", ++x);`,

    options: [
        "4",
        "5",
        "6",
        "7"
    ],

    answer: 2,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) 6</span></code></pre>

    <pre><code><span class="keyword">int</span> x = <span class="number">5</span>;
printf(<span class="string">"%d"</span>, ++x);</code></pre>

</div>
`
};


const cQuestion77 = {
    question: "Which operator is called the conditional or ternary operator?",

    options: [
        "::",
        "??",
        "?:",
        "=="
    ],

    answer: 2,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) ?:</span></code></pre>
</div>
`
};


const cQuestion78 = {
    question: "What is the correct syntax of the ternary operator?",

    options: [
        "condition : expression ? expression",
        "condition ? expression1 : expression2",
        "condition ? expression1 ; expression2",
        "condition :: expression1 : expression2"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) condition ? expression1 : expression2</span></code></pre>
</div>
`
};


const cQuestion79 = {
    question: `What is the output?

int x = 10;
int y = (x > 5) ? 100 : 200;
printf("%d", y);`,

    options: [
        "5",
        "10",
        "100",
        "200"
    ],

    answer: 2,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) 100</span></code></pre>

    <pre><code><span class="keyword">int</span> x = <span class="number">10</span>;
<span class="keyword">int</span> y = (x &gt; <span class="number">5</span>) ? <span class="number">100</span> : <span class="number">200</span>;
printf(<span class="string">"%d"</span>, y);</code></pre>

</div>
`
};


const cQuestion80 = {
    question: `What is the output?

int a = 10, b = 20;
int max = (a > b) ? a : b;
printf("%d", max);`,

    options: [
        "10",
        "20",
        "30",
        "0"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) 20</span></code></pre>

    <pre><code><span class="keyword">int</span> a = <span class="number">10</span>, b = <span class="number">20</span>;
<span class="keyword">int</span> max = (a &gt; b) ? a : b;
printf(<span class="string">"%d"</span>, max);</code></pre>

</div>
`
};


const cQuestion81 = {
    question: `What is the output?

int a = 5, b = 10, c = 15;
int result = (a > b) ? a : (b > c) ? b : c;
printf("%d", result);`,

    options: [
        "5",
        "10",
        "15",
        "30"
    ],

    answer: 2,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) 15</span></code></pre>

    <pre><code><span class="keyword">int</span> a = <span class="number">5</span>, b = <span class="number">10</span>, c = <span class="number">15</span>;
<span class="keyword">int</span> result = (a &gt; b) ? a : (b &gt; c) ? b : c;
printf(<span class="string">"%d"</span>, result);</code></pre>

</div>
`
};

const cQuestion82 = {
    question: `What is the output of the following code?

int a = 5;
printf("%d", ++a);`,

    options: [
        "4",
        "5",
        "6",
        "7"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) 6</span></code></pre>

</div>
`
};


const cQuestion83 = {
    question: `What is the output of the following code?

int a = 5;
printf("%d", a++);`,

    options: [
        "4",
        "5",
        "6",
        "7"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) 5</span></code></pre>

</div>
`
};


const cQuestion84 = {
    question: `What is the output of the following code?

int a = 10;
printf("%d", --a);`,

    options: [
        "8",
        "9",
        "10",
        "11"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) 9</span></code></pre>

</div>
`
};


const cQuestion85 = {
    question: `What is the output of the following code?

int a = 10;
printf("%d", a--);`,

    options: [
        "8",
        "9",
        "10",
        "11"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) 10</span></code></pre>

</div>
`
};


const cQuestion86 = {
    question: `What is the output of the following code?

int a = 5;
printf("%d ", a++);
printf("%d", a);`,

    options: [
        "5 5",
        "5 6",
        "6 6",
        "6 5"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) 5 6</span></code></pre>

</div>
`
};


const cQuestion87 = {
    question: `What is the output of the following code?

int a = 5;
printf("%d ", ++a);
printf("%d", a);`,

    options: [
        "5 5",
        "5 6",
        "6 6",
        "6 5"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) 6 6</span></code></pre>

</div>
`
};


const cQuestion88 = {
    question: `What is the output of the following code?

int a = 10;
printf("%d ", a--);
printf("%d", a);`,

    options: [
        "10 10",
        "10 9",
        "9 9",
        "9 10"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) 10 9</span></code></pre>

</div>
`
};


const cQuestion89 = {
    question: `What is the output of the following code?

int a = 10;
printf("%d ", --a);
printf("%d", a);`,

    options: [
        "10 9",
        "9 9",
        "9 10",
        "10 10"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) 9 9</span></code></pre>

</div>
`
};


const cQuestion90 = {
    question: `What is the output of the following code?

int a = 3;
printf("%d ", a++);
printf("%d ", ++a);
printf("%d", a);`,

    options: [
        "3 4 4",
        "3 5 5",
        "4 5 5",
        "3 4 5"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) 3 5 5</span></code></pre>

</div>
`
};


const cQuestion91 = {
    question: `What is the output of the following code?

int a = 8;
printf("%d ", --a);
printf("%d ", a--);
printf("%d", a);`,

    options: [
        "7 7 6",
        "8 7 6",
        "7 6 6",
        "8 8 7"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">A) 7 7 6</span></code></pre>

</div>
`
};

const cQuestion92 = {
    question: "Which operator is used for logical AND in C?",

    options: [
        "&",
        "&&",
        "||",
        "!"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) &&</span></code></pre>

</div>
`
};


const cQuestion93 = {
    question: "Which operator is used for logical OR in C?",

    options: [
        "|",
        "&&",
        "||",
        "!"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) ||</span></code></pre>

</div>
`
};


const cQuestion94 = {
    question: "Which operator is used for logical NOT in C?",

    options: [
        "~",
        "!=",
        "!",
        "^"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) !</span></code></pre>

</div>
`
};


const cQuestion95 = {
    question: `What is the result of the following expression?

1 && 1`,

    options: [
        "0",
        "1",
        "2",
        "Error"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) 1</span></code></pre>

</div>
`
};


const cQuestion96 = {
    question: `What is the result of the following expression?

1 && 0`,

    options: [
        "0",
        "1",
        "2",
        "Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">A) 0</span></code></pre>

</div>
`
};


const cQuestion97 = {
    question: `What is the result of the following expression?

0 || 1`,

    options: [
        "0",
        "1",
        "2",
        "Error"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) 1</span></code></pre>

</div>
`
};


const cQuestion98 = {
    question: `What is the result of the following expression?

!0`,

    options: [
        "0",
        "1",
        "-1",
        "Error"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) 1</span></code></pre>

</div>
`
};


const cQuestion99 = {
    question: `What is the output?

int a = 10;
printf("%d", a > 5 && a < 20);`,

    options: [
        "0",
        "1",
        "10",
        "Error"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) 1</span></code></pre>

</div>
`
};


const cQuestion100 = {
    question: `What is the output?

int a = 10;
printf("%d", a < 5 || a == 10);`,

    options: [
        "0",
        "1",
        "10",
        "Error"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) 1</span></code></pre>

</div>
`
};


const cQuestion101 = {
    question: `What is the output?

int a = 5;
printf("%d", !(a > 10));`,

    options: [
        "0",
        "1",
        "5",
        "10"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) 1</span></code></pre>

</div>
`
};

const cQuestion102 = {
    question: "Write a C program to perform addition, subtraction, multiplication, division, and modulus of two integers.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> a, b;

    printf(<span class="string">"Enter two integers: "</span>);
    scanf(<span class="string">"%d %d"</span>, &amp;a, &amp;b);

    printf(<span class="string">"Addition = %d\\n"</span>, a + b);
    printf(<span class="string">"Subtraction = %d\\n"</span>, a - b);
    printf(<span class="string">"Multiplication = %d\\n"</span>, a * b);
    printf(<span class="string">"Division = %d\\n"</span>, a / b);
    printf(<span class="string">"Modulus = %d\\n"</span>, a % b);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion103 = {
    question: "Write a C program to calculate the area of a circle using arithmetic operators.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">float</span> radius, area;
    <span class="keyword">const float</span> PI = <span class="number">3.14</span>;

    printf(<span class="string">"Enter radius: "</span>);
    scanf(<span class="string">"%f"</span>, &amp;radius);

    area = PI * radius * radius;

    printf(<span class="string">"Area of circle = %.2f"</span>, area);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion104 = {
    question: "Write a C program to calculate the total and average of three numbers.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">float</span> a, b, c, total, average;

    printf(<span class="string">"Enter three numbers: "</span>);
    scanf(<span class="string">"%f %f %f"</span>, &amp;a, &amp;b, &amp;c);

    total = a + b + c;
    average = total / <span class="number">3</span>;

    printf(<span class="string">"Total = %.2f\\n"</span>, total);
    printf(<span class="string">"Average = %.2f"</span>, average);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion105 = {
    question: "Write a C program to calculate the simple interest using arithmetic operators.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">float</span> principal, rate, time, interest;

    printf(<span class="string">"Enter principal, rate and time: "</span>);
    scanf(<span class="string">"%f %f %f"</span>, &amp;principal, &amp;rate, &amp;time);

    interest = (principal * rate * time) / <span class="number">100</span>;

    printf(<span class="string">"Simple Interest = %.2f"</span>, interest);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};
const cBasicQuestion01 = {
    question: "Write a C program to input two numbers and check which number is greater using the ternary operator.",

    solution: `
<div class="code-box">
<div class="code-title">
<span>Program</span>
</div>
<pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main(<span class="keyword">void</span>)
{
    <span class="keyword">int</span> a, b;

    printf(<span class="string">"Enter the first number: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;a);

    printf(<span class="string">"Enter the second number: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;b);

    printf(<span class="string">"First number = %d\\n"</span>, a);
    printf(<span class="string">"Second number = %d\\n"</span>, b);

    <span class="keyword">char</span> *result = (a &gt; b) ? <span class="string">" A is greater than b"</span> : <span class="string">" B is greater than A"</span>;

    printf(<span class="string">"result%s"</span>, result);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>
</div>

<div class="code-box">
<div class="code-title">
<span>Explanation</span>
</div>
<pre><code><span class="keyword">Step 1:</span>
Two integer variables <span class="string">a</span> and <span class="string">b</span> are declared to store two numbers.

<span class="keyword">Step 2:</span>
The <span class="string">scanf()</span> function takes two numbers from the user.

<span class="keyword">Step 3:</span>
The ternary operator checks:

a &gt; b

If the condition is true, it stores:

<span class="string">" A is greater than b"</span>

Otherwise, it stores:

<span class="string">" B is greater than A"</span>

<span class="keyword">Step 4:</span>
The <span class="string">printf()</span> function displays the result.

<span class="keyword">Example:</span>

If:
a = 10
b = 5

Then:

10 &gt; 5

Therefore:

<span class="string">A is greater than b</span></code></pre>
</div>
`
};

const cQuestion106 = {
    question: "Write a C program to swap the values of two variables using assignment operators.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> a, b, temp;

    printf(<span class="string">"Enter two numbers: "</span>);
    scanf(<span class="string">"%d %d"</span>, &amp;a, &amp;b);

    temp = a;
    a = b;
    b = temp;

    printf(<span class="string">"After swapping: a = %d, b = %d"</span>, a, b);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion107 = {
    question: "Write a C program to increase the value of a variable by 10 using the += operator.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> number;

    printf(<span class="string">"Enter a number: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;number);

    number += <span class="number">10</span>;

    printf(<span class="string">"Updated value = %d"</span>, number);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion108 = {
    question: "Write a C program to calculate the final price of a product after applying a discount using assignment operators.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">float</span> price, discount, finalPrice;

    printf(<span class="string">"Enter product price: "</span>);
    scanf(<span class="string">"%f"</span>, &amp;price);

    printf(<span class="string">"Enter discount percentage: "</span>);
    scanf(<span class="string">"%f"</span>, &amp;discount);

    finalPrice = price;
    finalPrice -= (price * discount) / <span class="number">100</span>;

    printf(<span class="string">"Final Price = %.2f"</span>, finalPrice);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion109 = {
    question: "Write a C program to check whether a number is positive using a logical operator.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> number;

    printf(<span class="string">"Enter a number: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;number);

    <span class="keyword">if</span> (number &gt; <span class="number">0</span>)
        printf(<span class="string">"Positive number"</span>);
    <span class="keyword">else</span>
        printf(<span class="string">"Not a positive number"</span>);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion110 = {
    question: "Write a C program to check whether a number lies between 10 and 50 using the logical AND operator.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> number;

    printf(<span class="string">"Enter a number: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;number);

    <span class="keyword">if</span> (number &gt;= <span class="number">10</span> &amp;&amp; number &lt;= <span class="number">50</span>)
        printf(<span class="string">"Number lies between 10 and 50"</span>);
    <span class="keyword">else</span>
        printf(<span class="string">"Number is outside the range"</span>);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion111 = {
    question: "Write a C program to check whether a number is divisible by either 3 or 5 using the logical OR operator.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> number;

    printf(<span class="string">"Enter a number: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;number);

    <span class="keyword">if</span> (number % <span class="number">3</span> == <span class="number">0</span> || number % <span class="number">5</span> == <span class="number">0</span>)
        printf(<span class="string">"Number is divisible by 3 or 5"</span>);
    <span class="keyword">else</span>
        printf(<span class="string">"Number is not divisible by 3 or 5"</span>);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion112 = {
    question: "Write a C program to check whether a number is NOT equal to zero using the logical NOT operator.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> number;

    printf(<span class="string">"Enter a number: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;number);

    <span class="keyword">if</span> (!(number == <span class="number">0</span>))
        printf(<span class="string">"Number is NOT equal to zero"</span>);
    <span class="keyword">else</span>
        printf(<span class="string">"Number is equal to zero"</span>);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion113 = {
    question: "Write a C program to check whether a student has passed using logical operators. The passing marks are 40 or above in both subjects.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> subject1, subject2;

    printf(<span class="string">"Enter marks of two subjects: "</span>);
    scanf(<span class="string">"%d %d"</span>, &amp;subject1, &amp;subject2);

    <span class="keyword">if</span> (subject1 &gt;= <span class="number">40</span> &amp;&amp; subject2 &gt;= <span class="number">40</span>)
        printf(<span class="string">"Pass"</span>);
    <span class="keyword">else</span>
        printf(<span class="string">"Fail"</span>);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion114 = {
    question: "Write a C program to find the result of bitwise AND, OR, and XOR between two integers.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> a, b;

    printf(<span class="string">"Enter two integers: "</span>);
    scanf(<span class="string">"%d %d"</span>, &amp;a, &amp;b);

    printf(<span class="string">"Bitwise AND = %d\\n"</span>, a &amp; b);
    printf(<span class="string">"Bitwise OR = %d\\n"</span>, a | b);
    printf(<span class="string">"Bitwise XOR = %d"</span>, a ^ b);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion115 = {
    question: "Write a C program to perform bitwise NOT operation on an integer.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> number;

    printf(<span class="string">"Enter an integer: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;number);

    printf(<span class="string">"Bitwise NOT = %d"</span>, ~number);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion116 = {
    question: "Write a C program to check whether a number is even or odd using the bitwise AND operator.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> number;

    printf(<span class="string">"Enter an integer: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;number);

    <span class="keyword">if</span> ((number &amp; <span class="number">1</span>) == <span class="number">0</span>)
        printf(<span class="string">"Even number"</span>);
    <span class="keyword">else</span>
        printf(<span class="string">"Odd number"</span>);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion117 = {
    question: "Write a C program to multiply an integer by 2 using the left-shift operator.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> number, result;

    printf(<span class="string">"Enter an integer: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;number);

    result = number &lt;&lt; <span class="number">1</span>;

    printf(<span class="string">"Result = %d"</span>, result);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion118 = {
    question: "Write a C program to divide an integer by 2 using the right-shift operator.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> number, result;

    printf(<span class="string">"Enter an integer: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;number);

    result = number &gt;&gt; <span class="number">1</span>;

    printf(<span class="string">"Result = %d"</span>, result);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion119 = {
    question: "Write a C program to demonstrate the difference between pre-increment and post-increment operators using printf().",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> a = <span class="number">5</span>;

    printf(<span class="string">"Post-increment: %d\\n"</span>, a++);
    printf(<span class="string">"After post-increment: %d\\n"</span>, a);

    printf(<span class="string">"Pre-increment: %d\\n"</span>, ++a);
    printf(<span class="string">"After pre-increment: %d"</span>, a);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion120 = {
    question: "Write a C program to demonstrate the difference between pre-decrement and post-decrement operators using printf().",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> a = <span class="number">5</span>;

    printf(<span class="string">"Post-decrement: %d\\n"</span>, a--);
    printf(<span class="string">"After post-decrement: %d\\n"</span>, a);

    printf(<span class="string">"Pre-decrement: %d\\n"</span>, --a);
    printf(<span class="string">"After pre-decrement: %d"</span>, a);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion121 = {
    question: "Write a C program to increment a variable three times and display its value after each increment.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> number = <span class="number">5</span>;

    number++;
    printf(<span class="string">"After first increment = %d\\n"</span>, number);

    number++;
    printf(<span class="string">"After second increment = %d\\n"</span>, number);

    number++;
    printf(<span class="string">"After third increment = %d"</span>, number);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion122 = {
    question: "Write a C program to decrement a variable three times and display its value after each decrement.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> number = <span class="number">5</span>;

    number--;
    printf(<span class="string">"After first decrement = %d\\n"</span>, number);

    number--;
    printf(<span class="string">"After second decrement = %d\\n"</span>, number);

    number--;
    printf(<span class="string">"After third decrement = %d"</span>, number);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion123 = {
    question: "Write a C program to find the greater of two numbers using the ternary operator.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> a, b, greater;

    printf(<span class="string">"Enter two numbers: "</span>);
    scanf(<span class="string">"%d %d"</span>, &amp;a, &amp;b);

    greater = (a &gt; b) ? a : b;

    printf(<span class="string">"Greater number = %d"</span>, greater);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion124 = {
    question: "Write a C program to check whether a number is even or odd using the ternary operator.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> number;

    printf(<span class="string">"Enter a number: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;number);

    (number % <span class="number">2</span> == <span class="number">0</span>)
        ? printf(<span class="string">"Even number"</span>)
        : printf(<span class="string">"Odd number"</span>);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion125 = {
    question: "Write a C program to find the largest of three numbers using nested ternary operators.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> a, b, c, largest;

    printf(<span class="string">"Enter three numbers: "</span>);
    scanf(<span class="string">"%d %d %d"</span>, &amp;a, &amp;b, &amp;c);

    largest = (a &gt; b)
              ? ((a &gt; c) ? a : c)
              : ((b &gt; c) ? b : c);

    printf(<span class="string">"Largest number = %d"</span>, largest);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion126 = {
    question: "Write a C program to determine whether a student is Pass or Fail using the ternary operator.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> marks;

    printf(<span class="string">"Enter marks: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;marks);

    (marks &gt;= <span class="number">40</span>)
        ? printf(<span class="string">"Pass"</span>)
        : printf(<span class="string">"Fail"</span>);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion127 = {
    question: "Write a C program to demonstrate operator precedence using an expression containing +, -, *, /, and % operators.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> result;

    result = <span class="number">20</span> + <span class="number">10</span> * <span class="number">2</span> - <span class="number">8</span> / <span class="number">2</span> % <span class="number">3</span>;

    printf(<span class="string">"Result = %d"</span>, result);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion128 = {
    question: "Write a C program to evaluate the following expression and display the result: result = 10 + 5 * 2 - 8 / 4;",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> result;

    result = <span class="number">10</span> + <span class="number">5</span> * <span class="number">2</span> - <span class="number">8</span> / <span class="number">4</span>;

    printf(<span class="string">"Result = %d"</span>, result);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion129 = {
    question: "Write a C program to declare and use integer, floating-point, character, and string literals.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> number = <span class="number">100</span>;
    <span class="keyword">float</span> price = <span class="number">99.50</span>;
    <span class="keyword">char</span> grade = <span class="string">'A'</span>;
    <span class="keyword">char</span> name[] = <span class="string">"Pradeep"</span>;

    printf(<span class="string">"Integer = %d\\n"</span>, number);
    printf(<span class="string">"Float = %.2f\\n"</span>, price);
    printf(<span class="string">"Character = %c\\n"</span>, grade);
    printf(<span class="string">"String = %s"</span>, name);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion130 = {
    question: "Write a C program using const variables to store the value of PI and calculate the area of a circle.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">const float</span> PI = <span class="number">3.14</span>;
    <span class="keyword">float</span> radius, area;

    printf(<span class="string">"Enter radius: "</span>);
    scanf(<span class="string">"%f"</span>, &amp;radius);

    area = PI * radius * radius;

    printf(<span class="string">"Area of circle = %.2f"</span>, area);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cQuestion131 = {
    question: "Write a C program that takes two integers from the user and demonstrates arithmetic, assignment, logical, bitwise, increment/decrement, and ternary operators, displaying the result of each operation.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> a, b, x, greater;

    printf(<span class="string">"Enter two integers: "</span>);
    scanf(<span class="string">"%d %d"</span>, &amp;a, &amp;b);

    <span class="comment">// Arithmetic Operators</span>
    printf(<span class="string">"Addition = %d\\n"</span>, a + b);
    printf(<span class="string">"Subtraction = %d\\n"</span>, a - b);
    printf(<span class="string">"Multiplication = %d\\n"</span>, a * b);
    printf(<span class="string">"Division = %d\\n"</span>, a / b);
    printf(<span class="string">"Modulus = %d\\n"</span>, a % b);

    <span class="comment">// Assignment Operator</span>
    x = a;
    x += b;
    printf(<span class="string">"Assignment (x += b) = %d\\n"</span>, x);

    <span class="comment">// Logical Operators</span>
    printf(<span class="string">"Logical AND = %d\\n"</span>, a &gt; <span class="number">0</span> &amp;&amp; b &gt; <span class="number">0</span>);
    printf(<span class="string">"Logical OR = %d\\n"</span>, a &gt; <span class="number">0</span> || b &gt; <span class="number">0</span>);
    printf(<span class="string">"Logical NOT = %d\\n"</span>, !(a == <span class="number">0</span>));

    <span class="comment">// Bitwise Operators</span>
    printf(<span class="string">"Bitwise AND = %d\\n"</span>, a &amp; b);
    printf(<span class="string">"Bitwise OR = %d\\n"</span>, a | b);
    printf(<span class="string">"Bitwise XOR = %d\\n"</span>, a ^ b);

    <span class="comment">// Increment / Decrement</span>
    x = a;
    printf(<span class="string">"Post-increment = %d\\n"</span>, x++);
    printf(<span class="string">"After increment = %d\\n"</span>, x);

    printf(<span class="string">"Pre-decrement = %d\\n"</span>, --x);

    <span class="comment">// Ternary Operator</span>
    greater = (a &gt; b) ? a : b;

    printf(<span class="string">"Greater number = %d"</span>, greater);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};

const ctypeCastingQuestion1 = {
    question: `What is the output of the following C program?

<div class="code-box">

    <div class="code-title">
        type-casting.c
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> <span class="function">main</span>()
{
    <span class="keyword">int</span> a = <span class="number">10</span>;
    <span class="keyword">int</span> b = <span class="number">3</span>;

    <span class="keyword">float</span> result = (<span class="keyword">float</span>)a / b;

    printf(<span class="string">"%f"</span>, result);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>`,

    options: [
        "3.000000",
        "3.333333",
        "3",
        "10.000000"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) 3.333333</span></code></pre>

</div>
`
};


const ctypeCastingQuestion2 = {
    question: `What is the output of the following C program?

<div class="code-box">

    <div class="code-title">
        float-to-int.c
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> <span class="function">main</span>()
{
    <span class="keyword">float</span> price = <span class="number">99.99</span>;
    <span class="keyword">int</span> value = (<span class="keyword">int</span>)price;

    printf(<span class="string">"%d"</span>, value);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>`,

    options: [
        "99",
        "100",
        "99.99",
        "Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">A) 99</span></code></pre>

</div>
`
};


const ctypeCastingQuestion3 = {
    question: `What is the output of the following C program?

<div class="code-box">

    <div class="code-title">
        char-to-int.c
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> <span class="function">main</span>()
{
    <span class="keyword">char</span> ch = <span class="string">'A'</span>;
    <span class="keyword">int</span> value = (<span class="keyword">int</span>)ch;

    printf(<span class="string">"%d"</span>, value);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>`,

    options: [
        "A",
        "64",
        "65",
        "66"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) 65</span></code></pre>

</div>
`
};


const ctypeCastingQuestion4 = {
    question: `What is the output of the following C program?

<div class="code-box">

    <div class="code-title">
        int-to-char.c
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> <span class="function">main</span>()
{
    <span class="keyword">int</span> value = <span class="number">65</span>;
    <span class="keyword">char</span> ch = (<span class="keyword">char</span>)value;

    printf(<span class="string">"%c"</span>, ch);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>`,

    options: [
        "65",
        "A",
        "a",
        "Error"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) A</span></code></pre>

</div>
`
};


const ctypeCastingQuestion5 = {
    question: `What is the output of the following C program?

<div class="code-box">

    <div class="code-title">
        division.c
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> <span class="function">main</span>()
{
    <span class="keyword">int</span> a = <span class="number">5</span>;
    <span class="keyword">int</span> b = <span class="number">2</span>;

    <span class="keyword">float</span> result = (<span class="keyword">float</span>)(a / b);

    printf(<span class="string">"%f"</span>, result);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>`,

    options: [
        "2.500000",
        "2.000000",
        "2",
        "5.000000"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) 2.000000</span></code></pre>

</div>
`
};


const ctypeCastingQuestion6 = {
    question: `What is the output of the following C program?

<div class="code-box">

    <div class="code-title">
        division.c
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> <span class="function">main</span>()
{
    <span class="keyword">int</span> a = <span class="number">5</span>;
    <span class="keyword">int</span> b = <span class="number">2</span>;

    <span class="keyword">float</span> result = (<span class="keyword">float</span>)a / b;

    printf(<span class="string">"%f"</span>, result);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>`,

    options: [
        "2.000000",
        "2.500000",
        "3.000000",
        "5.000000"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) 2.500000</span></code></pre>

</div>
`
};


const ctypeCastingQuestion7 = {
    question: `What is the output of the following C program?

<div class="code-box">

    <div class="code-title">
        expression.c
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> <span class="function">main</span>()
{
    <span class="keyword">int</span> a = <span class="number">10</span>;
    <span class="keyword">float</span> b = <span class="number">2.5</span>;

    <span class="keyword">int</span> result = (<span class="keyword">int</span>)(a + b);

    printf(<span class="string">"%d"</span>, result);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>`,

    options: [
        "12",
        "12.5",
        "13",
        "10"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">A) 12</span></code></pre>

</div>
`
};


const ctypeCastingQuestion8 = {
    question: `What is the output of the following C program?

<div class="code-box">

    <div class="code-title">
        expression.c
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> <span class="function">main</span>()
{
    <span class="keyword">float</span> a = <span class="number">10.8</span>;

    printf(<span class="string">"%d"</span>, (<span class="keyword">int</span>)a);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>`,

    options: [
        "10",
        "11",
        "10.8",
        "Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">A) 10</span></code></pre>

</div>
`
};


const ctypeCastingQuestion9 = {
    question: `What is the output of the following C program?

<div class="code-box">

    <div class="code-title">
        calculation.c
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> <span class="function">main</span>()
{
    <span class="keyword">int</span> a = <span class="number">7</span>;
    <span class="keyword">int</span> b = <span class="number">2</span>;

    <span class="keyword">float</span> result = (<span class="keyword">float</span>)(a + b);

    printf(<span class="string">"%f"</span>, result);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>`,

    options: [
        "4.500000",
        "9.000000",
        "9",
        "7.000000"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) 9.000000</span></code></pre>

</div>
`
};


const ctypeCastingQuestion10 = {
    question: `What is the output of the following C program?

<div class="code-box">

    <div class="code-title">
        calculation.c
    </div>

<pre class="program-code-box-pre"><code class="program-code-box-code"><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> <span class="function">main</span>()
{
    <span class="keyword">int</span> a = <span class="number">10</span>;
    <span class="keyword">int</span> b = <span class="number">4</span>;

    <span class="keyword">double</span> result = (<span class="keyword">double</span>)a / b;

    printf(<span class="string">"%lf"</span>, result);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>`,

    options: [
        "2.000000",
        "2.500000",
        "2",
        "10.000000"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) 2.500000</span></code></pre>

</div>
`
};

const cProgrammingQuestion = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
<pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">10</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">3</span>;

    printf(<span class="program-code-box-string">"%f\\n"</span>, (<span class="program-code-box-keyword">float</span>)a / b);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "3.000000",
        "3.333333",
        "3",
        "Compilation Error"
    ],

    answer: 2,

    solution: `
<div class="code-box">
<div class="code-title">
<span>Answer</span>
</div>
<pre><code><span class="keyword">Output:</span>
<span class="string">3.333333</span>

<span class="keyword">Explanation:</span>
The expression (<span class="keyword">float</span>)a converts the integer
value of a into a floating-point value.

Therefore, floating-point division is performed:

<span class="string">10.0 / 3 = 3.333333</span>

The <span class="keyword">%f</span> format specifier is used to display
the floating-point result.

Therefore, the output is:

<span class="string">3.333333</span></code></pre>
</div>
`
};
const cProgrammingQuestion1 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
<pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">10</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">3</span>;

    printf(<span class="program-code-box-string">"%f"</span>, (<span class="program-code-box-keyword">float</span>)(a / b));

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "3.000000",
        "3.333333",
        "3",
        "Compilation Error"
    ],

    answer: 1,

    solution: `
<div class="code-box">
<div class="code-title">
<span>Answer</span>
</div>
<pre><code><span class="keyword">Output:</span>
<span class="string">3.000000</span>

<span class="keyword">Explanation:</span>
First, <span class="string">a / b</span> is evaluated.

Both <span class="string">a</span> and <span class="string">b</span> are integers, so integer
division is performed:

<span class="string">10 / 3 = 3</span>

After that, the result <span class="string">3</span> is converted to
<span class="string">float</span>:

<span class="string">(float)3 = 3.0</span>

The <span class="keyword">%f</span> format specifier displays the
floating-point value as:

<span class="string">3.000000</span>

Therefore, the output is:

<span class="string">3.000000</span></code></pre>
</div>
`
};


// ========================================
// ALL QUESTIONS
// ========================================
const cProgrammingQuestions = [
    cQuestion1,
    cQuestion2,
    cQuestion3,
    cQuestion4,
    cQuestion5,
    cQuestion6,
    cQuestion7,
    cQuestion8,
    cQuestion9,
    cQuestion10,
    cQuestion11,
    cQuestion12,
    cQuestion13,
    cQuestion14,
    cQuestion15,
    cQuestion16,
    cQuestion17,
    cQuestion18,
    cQuestion19,
    cQuestion20,
    cQuestion21,
    cQuestion22,
    cQuestion23,
    cQuestion24,
    cQuestion25,
    cQuestion26,
    cQuestion27,
    cQuestion28,
    cQuestion29,
    cQuestion30,
    cQuestion31,
    cQuestion32,
    cQuestion33,
    cQuestion34,
    cQuestion35,
    cQuestion36,
    cQuestion37,
    cQuestion38,
    cQuestion39,
    cQuestion40,
    cQuestion41,
    cQuestion42,
    cQuestion43,
    cQuestion44,
    cQuestion45,
    cQuestion46,
    cQuestion47,
    cQuestion48,
    cQuestion49,
    cQuestion50,
    cBasicQuestion01,
       ctypeCastingQuestion1,
    ctypeCastingQuestion2,
    ctypeCastingQuestion3,
    ctypeCastingQuestion4,
    ctypeCastingQuestion5,
    ctypeCastingQuestion6,
    ctypeCastingQuestion7,
    ctypeCastingQuestion8,
    ctypeCastingQuestion9,
    ctypeCastingQuestion10,
        cProgrammingQuestion,
    cProgrammingQuestion1,
    cQuestion51,
    cQuestion52,
    cQuestion53,
    cQuestion54,
    cQuestion55,
    cQuestion56,
    cQuestion57,
    cQuestion58,
    cQuestion59,
    cQuestion60,
    cQuestion61,
    cQuestion62,
    cQuestion63,
    cQuestion64,
    cQuestion65,
    cQuestion66,
    cQuestion67,
    cQuestion68,
    cQuestion69,
    cQuestion70,
    cQuestion71,
    cQuestion72,
    cQuestion73,
    cQuestion74,
    cQuestion75,
    cQuestion76,
    cQuestion77,
    cQuestion78,
    cQuestion79,
    cQuestion80,
    cQuestion81,
    cQuestion82,
    cQuestion83,
    cQuestion84,
    cQuestion85,
    cQuestion86,
    cQuestion87,
    cQuestion88,
    cQuestion89,
    cQuestion90,
    cQuestion91,
    cQuestion92,
    cQuestion93,
    cQuestion94,
    cQuestion95,
    cQuestion96,
    cQuestion97,
    cQuestion98,
    cQuestion99,
    cQuestion100,
    cQuestion101,
    cQuestion102,
    cQuestion103,
    cQuestion104,
    cQuestion105,
    cQuestion106,
    cQuestion107,
    cQuestion108,
    cQuestion109,
    cQuestion110,
    cQuestion111,
    cQuestion112,
    cQuestion113,
    cQuestion114,
    cQuestion115,
    cQuestion116,
    cQuestion117,
    cQuestion118,
    cQuestion119,
    cQuestion120,
    cQuestion121,
    cQuestion122,
    cQuestion123,
    cQuestion124,
    cQuestion125,
    cQuestion126,
    cQuestion127,
    cQuestion128,
    cQuestion129,
    cQuestion130,
    cQuestion131
];
