
const cUnit_3Question1 = {
    question: "Which of the following is the correct syntax of a for loop in C?",

    options: [
        "for(initialization; condition; increment)",
        "for(condition; initialization; increment)",
        "for(initialization, condition, increment)",
        "for(initialization: condition: increment)"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span> <span class="string">A) for(initialization; condition; increment)</span>

<span class="keyword">Explanation:</span>
A for loop contains three parts:
1. Initialization
2. Condition
3. Increment or decrement

These parts are separated by semicolons.</code></pre>

</div>
`
};


const cUnit_3Question2 = {
    question: "How many times will the following loop execute? for(int i = 1; i <= 5; i++)",

    options: [
        "4",
        "5",
        "6",
        "Infinite"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span> <span class="string">B) 5</span>

<span class="keyword">Explanation:</span>
The values of i are:

1, 2, 3, 4, 5

Therefore, the loop executes <span class="number">5</span> times.</code></pre>

</div>
`
};


const cUnit_3Question3 = {
    question: "Which part of a for loop is executed only once?",

    options: [
        "Condition",
        "Increment",
        "Initialization",
        "Loop body"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span> <span class="string">C) Initialization</span>

<span class="keyword">Explanation:</span>
The initialization part is executed only once when the loop starts.

Example:
<span class="keyword">for</span>(<span class="number">int i = 1</span>; i &lt;= <span class="number">5</span>; i++)</code></pre>

</div>
`
};


const cUnit_3Question4 = {
    question: "Which statement is used to immediately terminate a loop?",

    options: [
        "skip",
        "continue",
        "break",
        "exitloop"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span> <span class="string">C) break</span>

<span class="keyword">Explanation:</span>
The <span class="keyword">break</span> statement immediately terminates the loop and transfers control to the statement after the loop.</code></pre>

</div>
`
};


const cUnit_3Question5 = {
    question: "Which statement skips the current iteration and moves to the next iteration?",

    options: [
        "break",
        "continue",
        "skip",
        "next"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span> <span class="string">B) continue</span>

<span class="keyword">Explanation:</span>
The <span class="keyword">continue</span> statement skips the remaining statements of the current iteration and starts the next iteration.</code></pre>

</div>
`
};


const cUnit_3Question6 = {
    question: "How many times will the following loop execute? for(int i = 0; i < 10; i++)",

    options: [
        "9",
        "10",
        "11",
        "Infinite"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span> <span class="string">B) 10</span>

<span class="keyword">Explanation:</span>
The loop runs for:

i = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

Therefore, it executes <span class="number">10</span> times.</code></pre>

</div>
`
};


const cUnit_3Question7 = {
    question: "Which of the following creates an infinite for loop in C?",

    options: [
        "for(;;)",
        "for()",
        "for( ; )",
        "for(infinite)"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span> <span class="string">A) for(;;)</span>

<span class="keyword">Explanation:</span>
All three expressions of the for loop can be omitted.

Therefore:

<span class="keyword">for</span>(;;)

creates an infinite loop.</code></pre>

</div>
`
};


const cUnit_3Question8 = {
    question: "What is the initial value of i in the following loop? for(int i = 10; i >= 1; i--)",

    options: [
        "0",
        "1",
        "10",
        "-1"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span> <span class="string">C) 10</span>

<span class="keyword">Explanation:</span>
The initialization part is:

<span class="keyword">int i = 10</span>

Therefore, the initial value of i is <span class="number">10</span>.</code></pre>

</div>
`
};


const cUnit_3Question9 = {
    question: "Which operator is commonly used to increase a loop variable by 1?",

    options: [
        "--",
        "++",
        "**",
        "//"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span> <span class="string">B) ++</span>

<span class="keyword">Explanation:</span>
The increment operator <span class="keyword">++</span> increases the value of a variable by <span class="number">1</span>.</code></pre>

</div>
`
};


const cUnit_3Question10 = {
    question: "Which loop is generally preferred when the number of iterations is known in advance?",

    options: [
        "while",
        "do-while",
        "for",
        "switch"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span> <span class="string">C) for</span>

<span class="keyword">Explanation:</span>
The <span class="keyword">for</span> loop is commonly used when the number of iterations is known in advance.</code></pre>

</div>
`
};


// ======================================================
// OUTPUT BASED QUESTIONS
// ======================================================

const cUnit_3Question11 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">#include</span> &lt;stdio.h&gt;

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">for</span>(<span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>; i &lt;= <span class="program-code-box-number">5</span>; i++)
    {
        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 2 3 4",
        "1 2 3 4 5",
        "1 2 3 4",
        "5 4 3 2 1"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 3 4 5</span>

<span class="keyword">Explanation:</span>
The loop starts from 1 and continues until i becomes 5.
Therefore, the values printed are 1, 2, 3, 4, and 5.</code></pre>

</div>
`
};


const cUnit_3Question12 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">#include</span> &lt;stdio.h&gt;

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">for</span>(<span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">5</span>; i &gt;= <span class="program-code-box-number">1</span>; i--)
    {
        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 4 5",
        "5 4 3 2 1",
        "5 4 3 2",
        "1 3 5"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">5 4 3 2 1</span>

<span class="keyword">Explanation:</span>
The loop starts at 5 and decreases i by 1 using i--.</code></pre>

</div>
`
};


const cUnit_3Question13 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">#include</span> &lt;stdio.h&gt;

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">for</span>(<span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">2</span>; i &lt;= <span class="program-code-box-number">10</span>; i += <span class="program-code-box-number">2</span>)
    {
        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 4 5",
        "2 4 6 8 10",
        "2 3 4 5 6",
        "10 8 6 4 2"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">2 4 6 8 10</span>

<span class="keyword">Explanation:</span>
The value of i increases by 2 after every iteration.</code></pre>

</div>
`
};


const cUnit_3Question14 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">#include</span> &lt;stdio.h&gt;

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">for</span>(<span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>; i &lt;= <span class="program-code-box-number">5</span>; i++)
    {
        printf(<span class="program-code-box-string">"%d "</span>, i * i);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 4 5",
        "1 4 9 16 25",
        "2 4 6 8 10",
        "1 8 27 64 125"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 4 9 16 25</span>

<span class="keyword">Explanation:</span>
The expression i * i calculates the square of each value of i.</code></pre>

</div>
`
};


const cUnit_3Question15 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">#include</span> &lt;stdio.h&gt;

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> sum = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">for</span>(<span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>; i &lt;= <span class="program-code-box-number">5</span>; i++)
    {
        sum = sum + i;
    }

    printf(<span class="program-code-box-string">"%d"</span>, sum);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "5",
        "10",
        "15",
        "20"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">15</span>

<span class="keyword">Explanation:</span>
The loop calculates:

1 + 2 + 3 + 4 + 5 = 15</code></pre>

</div>
`
};


const cUnit_3Question16 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">#include</span> &lt;stdio.h&gt;

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">for</span>(<span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>; i &lt;= <span class="program-code-box-number">5</span>; i++)
    {
        <span class="program-code-box-keyword">if</span>(i == <span class="program-code-box-number">3</span>)
            <span class="program-code-box-keyword">continue</span>;

        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 4 5",
        "1 2 4 5",
        "3",
        "1 2"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 4 5</span>

<span class="keyword">Explanation:</span>
When i becomes 3, continue skips that iteration.</code></pre>

</div>
`
};


const cUnit_3Question17 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">#include</span> &lt;stdio.h&gt;

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">for</span>(<span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>; i &lt;= <span class="program-code-box-number">5</span>; i++)
    {
        <span class="program-code-box-keyword">if</span>(i == <span class="program-code-box-number">3</span>)
            <span class="program-code-box-keyword">break</span>;

        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2",
        "1 2 3",
        "1 2 4 5",
        "3 4 5"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2</span>

<span class="keyword">Explanation:</span>
When i becomes 3, break terminates the loop immediately.</code></pre>

</div>
`
};


const cUnit_3Question18 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">#include</span> &lt;stdio.h&gt;

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">for</span>(<span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">10</span>; i &gt;= <span class="program-code-box-number">2</span>; i -= <span class="program-code-box-number">2</span>)
    {
        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "10 8 6 4 2",
        "2 4 6 8 10",
        "10 9 8 7 6",
        "8 6 4 2"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">10 8 6 4 2</span>

<span class="keyword">Explanation:</span>
The loop starts at 10 and decreases by 2 in every iteration.</code></pre>

</div>
`
};


const cUnit_3Question19 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">#include</span> &lt;stdio.h&gt;

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">for</span>(<span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>; i &lt;= <span class="program-code-box-number">3</span>; i++)
    {
        <span class="program-code-box-keyword">for</span>(<span class="program-code-box-keyword">int</span> j = <span class="program-code-box-number">1</span>; j &lt;= <span class="program-code-box-number">2</span>; j++)
        {
            printf(<span class="program-code-box-string">"* "</span>);
        }
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "* * *",
        "* * * * *",
        "* * * * * *",
        "* *"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">* * * * * *</span>

<span class="keyword">Explanation:</span>
The outer loop executes 3 times.

The inner loop executes 2 times for every outer iteration.

Total executions:

3 × 2 = 6</code></pre>

</div>
`
};


const cUnit_3Question20 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">#include</span> &lt;stdio.h&gt;

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">for</span>(<span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>; i &lt;= <span class="program-code-box-number">5</span>; i++)
    {
        printf(<span class="program-code-box-string">"%d "</span>, i * <span class="program-code-box-number">2</span>);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 4 5",
        "2 4 6 8 10",
        "1 4 9 16 25",
        "2 3 4 5 6"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">2 4 6 8 10</span>

<span class="keyword">Explanation:</span>
Each value of i is multiplied by 2.</code></pre>

</div>
`
};
// ======================================================
// PROGRAM BASED QUESTIONS
// ======================================================

const cUnit_3Question21 = {
    question: "Write a C program to print numbers from 1 to 10 using a for loop.",

    output: `
1 2 3 4 5 6 7 8 9 10
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">for</span>(<span class="keyword">int</span> i = <span class="number">1</span>; i &lt;= <span class="number">10</span>; i++)
    {
        printf(<span class="string">"%d "</span>, i);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};

const cUnit_3Question22 = {
    question: "Write a C program to print numbers from 1 to 10 using a for loop.",

    output: `
1 2 3 4 5 6 7 8 9 10
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">for</span>(<span class="keyword">int</span> i = <span class="number">1</span>; i &lt;= <span class="number">10</span>; i++)
    {
        printf(<span class="string">"%d "</span>, i);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};

const cUnit_3Question23 = {
    question: "Write a C program to print the multiplication table of a given number using a for loop.",

    input: `
Enter number: 5
`,

    output: `
5
10
15
20
25
30
35
40
45
50
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> n;

    printf(<span class="string">"Enter number: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;n);

    <span class="keyword">for</span>(<span class="keyword">int</span> i = <span class="number">1</span>; i &lt;= <span class="number">10</span>; i++)
    {
        printf(<span class="string">"%d\\n"</span>, n * i);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};

const cUnit_3Question24 = {
    question: "Write a C program to print the multiplication table of a given number using a for loop.",

    input: `
Enter number: 5
`,

    output: `
5
10
15
20
25
30
35
40
45
50
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> n;

    scanf(<span class="string">"%d"</span>, &amp;n);

    <span class="keyword">for</span>(<span class="keyword">int</span> i = <span class="number">1</span>; i &lt;= <span class="number">10</span>; i++)
    {
        printf(<span class="string">"%d\\n"</span>, n * i);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_3Question25 = {
    question: "Write a C program to print all even numbers from 1 to a given number using a for loop.",

    input: `
Enter number: 20
`,

    output: `
2 4 6 8 10 12 14 16 18 20
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> n;

    scanf(<span class="string">"%d"</span>, &amp;n);

    <span class="keyword">for</span>(<span class="keyword">int</span> i = <span class="number">2</span>; i &lt;= n; i += <span class="number">2</span>)
    {
        printf(<span class="string">"%d "</span>, i);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_3Question26 = {
    question: "Write a C program to print all odd numbers from 1 to a given number using a for loop.",

    input: `
Enter number: 15
`,

    output: `
1 3 5 7 9 11 13 15
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> n;

    scanf(<span class="string">"%d"</span>, &amp;n);

    <span class="keyword">for</span>(<span class="keyword">int</span> i = <span class="number">1</span>; i &lt;= n; i += <span class="number">2</span>)
    {
        printf(<span class="string">"%d "</span>, i);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_3Question27 = {
    question: "Write a C program to find the sum of numbers from 1 to a given number using a for loop.",

    input: `
Enter number: 10
`,

    output: `
Sum = 55
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> n;
    <span class="keyword">int</span> sum = <span class="number">0</span>;

    scanf(<span class="string">"%d"</span>, &amp;n);

    <span class="keyword">for</span>(<span class="keyword">int</span> i = <span class="number">1</span>; i &lt;= n; i++)
    {
        sum += i;
    }

    printf(<span class="string">"Sum = %d"</span>, sum);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_3Question28 = {
    question: "Write a C program to calculate the factorial of a given number using a for loop.",

    input: `
Enter number: 5
`,

    output: `
Factorial = 120
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> n;
    <span class="keyword">int</span> factorial = <span class="number">1</span>;

    scanf(<span class="string">"%d"</span>, &amp;n);

    <span class="keyword">for</span>(<span class="keyword">int</span> i = <span class="number">1</span>; i &lt;= n; i++)
    {
        factorial *= i;
    }

    printf(<span class="string">"Factorial = %d"</span>, factorial);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_3Question29 = {
    question: "Write a C program to find the sum of all even numbers from 1 to a given number using a for loop.",

    input: `
Enter number: 20
`,

    output: `
Sum = 110
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> n;
    <span class="keyword">int</span> sum = <span class="number">0</span>;

    scanf(<span class="string">"%d"</span>, &amp;n);

    <span class="keyword">for</span>(<span class="keyword">int</span> i = <span class="number">2</span>; i &lt;= n; i += <span class="number">2</span>)
    {
        sum += i;
    }

    printf(<span class="string">"Sum = %d"</span>, sum);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_3Question30 = {
    question: "Write a C program to find the sum of all odd numbers from 1 to a given number using a for loop.",

    input: `
Enter number: 15
`,

    output: `
Sum = 64
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> n;
    <span class="keyword">int</span> sum = <span class="number">0</span>;

    scanf(<span class="string">"%d"</span>, &amp;n);

    <span class="keyword">for</span>(<span class="keyword">int</span> i = <span class="number">1</span>; i &lt;= n; i += <span class="number">2</span>)
    {
        sum += i;
    }

    printf(<span class="string">"Sum = %d"</span>, sum);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_3Question31 = {
    question: "Write a C program to count the number of digits in a given number using a for loop.",

    input: `
Enter number: 12345
`,

    output: `
Number of digits = 5
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> n;
    <span class="keyword">int</span> count = <span class="number">0</span>;

    scanf(<span class="string">"%d"</span>, &amp;n);

    <span class="keyword">for</span>(; n != <span class="number">0</span>; n /= <span class="number">10</span>)
    {
        count++;
    }

    printf(<span class="string">"Number of digits = %d"</span>, count);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_3Question32 = {
    question: "Write a C program to reverse a given number using a for loop.",

    input: `
Enter number: 12345
`,

    output: `
Reverse = 54321
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> n;
    <span class="keyword">int</span> reverse = <span class="number">0</span>;

    scanf(<span class="string">"%d"</span>, &amp;n);

    <span class="keyword">for</span>(; n != <span class="number">0</span>; n /= <span class="number">10</span>)
    {
        reverse = reverse * <span class="number">10</span> + n % <span class="number">10</span>;
    }

    printf(<span class="string">"Reverse = %d"</span>, reverse);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_3Question33 = {
    question: "Write a C program to find the largest digit in a given number using a for loop.",

    input: `
Enter number: 58321
`,

    output: `
Largest digit = 8
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> n;
    <span class="keyword">int</span> largest = <span class="number">0</span>;

    scanf(<span class="string">"%d"</span>, &amp;n);

    <span class="keyword">for</span>(; n != <span class="number">0</span>; n /= <span class="number">10</span>)
    {
        <span class="keyword">int</span> digit = n % <span class="number">10</span>;

        <span class="keyword">if</span>(digit &gt; largest)
        {
            largest = digit;
        }
    }

    printf(<span class="string">"Largest digit = %d"</span>, largest);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_3Question34 = {
    question: "Write a C program to find the smallest digit in a given number using a for loop.",

    input: `
Enter number: 58321
`,

    output: `
Smallest digit = 1
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> n;
    <span class="keyword">int</span> smallest = <span class="number">9</span>;

    scanf(<span class="string">"%d"</span>, &amp;n);

    <span class="keyword">for</span>(; n != <span class="number">0</span>; n /= <span class="number">10</span>)
    {
        <span class="keyword">int</span> digit = n % <span class="number">10</span>;

        <span class="keyword">if</span>(digit &lt; smallest)
        {
            smallest = digit;
        }
    }

    printf(<span class="string">"Smallest digit = %d"</span>, smallest);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_3Question35 = {
    question: "Write a C program to calculate the sum of digits of a given number using a for loop.",

    input: `
Enter number: 12345
`,

    output: `
Sum of digits = 15
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> n;
    <span class="keyword">int</span> sum = <span class="number">0</span>;

    scanf(<span class="string">"%d"</span>, &amp;n);

    <span class="keyword">for</span>(; n != <span class="number">0</span>; n /= <span class="number">10</span>)
    {
        sum += n % <span class="number">10</span>;
    }

    printf(<span class="string">"Sum of digits = %d"</span>, sum);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_3Question36 = {
    question: "Write a C program to print the first n natural numbers in reverse order using a for loop.",

    input: `
Enter number: 5
`,

    output: `
5 4 3 2 1
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> n;

    scanf(<span class="string">"%d"</span>, &amp;n);

    <span class="keyword">for</span>(<span class="keyword">int</span> i = n; i &gt;= <span class="number">1</span>; i--)
    {
        printf(<span class="string">"%d "</span>, i);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_3Question37 = {
    question: "Write a C program to print the squares of numbers from 1 to n using a for loop.",

    input: `
Enter number: 5
`,

    output: `
1 4 9 16 25
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> n;

    scanf(<span class="string">"%d"</span>, &amp;n);

    <span class="keyword">for</span>(<span class="keyword">int</span> i = <span class="number">1</span>; i &lt;= n; i++)
    {
        printf(<span class="string">"%d "</span>, i * i);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_3Question38 = {
    question: "Write a C program to print the cubes of numbers from 1 to n using a for loop.",

    input: `
Enter number: 5
`,

    output: `
1 8 27 64 125
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> n;

    scanf(<span class="string">"%d"</span>, &amp;n);

    <span class="keyword">for</span>(<span class="keyword">int</span> i = <span class="number">1</span>; i &lt;= n; i++)
    {
        printf(<span class="string">"%d "</span>, i * i * i);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_3Question39 = {
    question: "Which of the following is the correct syntax of a for loop in C?",

    options: [
        "for(initialization; condition; increment)",
        "for(condition; initialization; increment)",
        "for(initialization, condition, increment)",
        "for(increment; condition; initialization)"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span> <span class="string">A) for(initialization; condition; increment)</span></code></pre>

</div>
`
};






// ======================================================
// QUESTION ARRAY
// ======================================================

const cProgrammingQuestionsUnit_3 = [

    cUnit_3Question1,
    cUnit_3Question2,
    cUnit_3Question3,
    cUnit_3Question4,
    cUnit_3Question5,
    cUnit_3Question6,
    cUnit_3Question7,
    cUnit_3Question8,
    cUnit_3Question9,
    cUnit_3Question10,

    cUnit_3Question11,
    cUnit_3Question12,
    cUnit_3Question13,
    cUnit_3Question14,
    cUnit_3Question15,
    cUnit_3Question16,
    cUnit_3Question17,
    cUnit_3Question18,
    cUnit_3Question19,
    cUnit_3Question20,

    cUnit_3Question21,
    cUnit_3Question22,
    cUnit_3Question23,
    cUnit_3Question24,
    cUnit_3Question25,
    cUnit_3Question26,
    cUnit_3Question27,
    cUnit_3Question28,
    cUnit_3Question29,
    cUnit_3Question30,

    cUnit_3Question31,
    cUnit_3Question32,
    cUnit_3Question33,
    cUnit_3Question34,
    cUnit_3Question35,
    cUnit_3Question36,
    cUnit_3Question37,
    cUnit_3Question38,
    cUnit_3Question39,

];