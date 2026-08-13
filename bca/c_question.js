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

    printf(<span class="string">"Addition = %d\n"</span>, a + b);
    printf(<span class="string">"Subtraction = %d\n"</span>, a - b);
    printf(<span class="string">"Multiplication = %d\n"</span>, a * b);
    printf(<span class="string">"Division = %d"</span>, a / b);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

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
    cQuestion1,
    cQuestion2,
    cQuestion3,
    cQuestion4,
    cQuestion1,
    cQuestion2,
    cQuestion3,
    cQuestion4,
    cQuestion5
];
