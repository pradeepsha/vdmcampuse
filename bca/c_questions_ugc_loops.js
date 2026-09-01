
const ugcNetCLoopQuestion1 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">0</span>; i &lt; <span class="program-code-box-number">5</span>; i++)
        printf(<span class="program-code-box-string">"%d "</span>, i);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 2 3 4",
        "1 2 3 4 5",
        "0 1 2 3 4 5",
        "1 2 3 4"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 1 2 3 4</span>

<span class="keyword">Explanation:</span>
The loop starts with i = 0 and executes while i &lt; 5.

Therefore, the values printed are 0, 1, 2, 3 and 4.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion2 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">while</span> (i &gt; <span class="program-code-box-number">0</span>)
    {
        printf(<span class="program-code-box-string">"%d "</span>, i);
        i--;
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 2 3 4",
        "5 4 3 2 1",
        "5 4 3 2 1 0",
        "4 3 2 1"
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
The while loop checks the condition before every iteration.

The values of i are 5, 4, 3, 2 and 1.

When i becomes 0, the condition becomes false.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion3 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">do</span>
    {
        printf(<span class="program-code-box-string">"%d "</span>, i);
        i++;
    }
    <span class="program-code-box-keyword">while</span> (i &lt; <span class="program-code-box-number">5</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "No output",
        "5",
        "5 6",
        "Infinite loop"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">5</span>

<span class="keyword">Explanation:</span>
A do-while loop executes its body at least once.

Therefore, 5 is printed before the condition i &lt; 5 is checked.

The condition is false after the first iteration.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion4 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">0</span>; i &lt; <span class="program-code-box-number">10</span>; i += <span class="program-code-box-number">2</span>)
        printf(<span class="program-code-box-string">"%d "</span>, i);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 2 3 4",
        "1 3 5 7 9",
        "0 2 4 6 8",
        "2 4 6 8 10"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 2 4 6 8</span>

<span class="keyword">Explanation:</span>
The update expression is i += 2.

Therefore, i takes the values 0, 2, 4, 6 and 8.

At i = 10, the condition becomes false.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion5 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">for</span> (; i &lt; <span class="program-code-box-number">3</span>; )
    {
        printf(<span class="program-code-box-string">"%d "</span>, i);
        i++;
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 2",
        "1 2 3",
        "0 1 2 3",
        "Infinite loop"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 1 2</span>

<span class="keyword">Explanation:</span>
Initialization and update expressions are optional in a for loop.

Here, i is initialized before the loop and updated inside the body.

Therefore, 0, 1 and 2 are printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion6 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">while</span> (i &lt; <span class="program-code-box-number">5</span>)
    {
        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">3</span>)
            <span class="program-code-box-keyword">break</span>;

        printf(<span class="program-code-box-string">"%d "</span>, i);
        i++;
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 2",
        "0 1 2 3",
        "1 2 3",
        "0 1 2 3 4"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 1 2</span>

<span class="keyword">Explanation:</span>
When i becomes 3, the break statement executes.

The break statement immediately terminates the loop.

Therefore, 3 is not printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion7 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">0</span>; i &lt; <span class="program-code-box-number">5</span>; i++)
    {
        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
            <span class="program-code-box-keyword">continue</span>;

        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 2 3 4",
        "0 1 3 4",
        "0 1",
        "2 3 4"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 1 3 4</span>

<span class="keyword">Explanation:</span>
When i is 2, continue skips the remaining statements
of the current iteration.

The loop then proceeds with the next iteration.

Therefore, 2 is not printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion8 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">while</span> (i &lt; <span class="program-code-box-number">5</span>)
    {
        i++;

        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">3</span>)
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
        "0 1 2 4",
        "1 3 4 5"
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
When i becomes 3, continue skips printf().

The loop continues normally because i was already incremented
before continue.

Therefore, 3 is skipped.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion9 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">do</span>
    {
        printf(<span class="program-code-box-string">"%d "</span>, i);
        i++;
    }
    <span class="program-code-box-keyword">while</span> (i &lt; <span class="program-code-box-number">3</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 2",
        "1 2 3",
        "0 1 2 3",
        "0 1"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 1 2</span>

<span class="keyword">Explanation:</span>
The body executes first and the condition is checked afterward.

The values printed are 0, 1 and 2.

When i becomes 3, i &lt; 3 becomes false.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion10 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

    <span class="program-code-box-keyword">while</span> (i &lt;= <span class="program-code-box-number">3</span>)
    {
        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
            <span class="program-code-box-keyword">break</span>;

        printf(<span class="program-code-box-string">"%d "</span>, i);
        i++;
    }

    printf(<span class="program-code-box-string">"End"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 End",
        "1 End",
        "1 2 End",
        "End"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 End</span>

<span class="keyword">Explanation:</span>
For i = 1, 1 is printed.

For i = 2, break terminates the while loop.

Execution continues with the statement after the loop.

Therefore, End is printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion11 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">0</span>; i &lt; <span class="program-code-box-number">5</span>; i++)
    {
        <span class="program-code-box-keyword">if</span> (i % <span class="program-code-box-number">2</span> == <span class="program-code-box-number">0</span>)
            <span class="program-code-box-keyword">continue</span>;

        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 2 4",
        "1 3",
        "0 1 2 3 4",
        "2 4"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 3</span>

<span class="keyword">Explanation:</span>
For even values of i, continue is executed.

Therefore, 0, 2 and 4 are skipped.

Only odd values 1 and 3 are printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion12 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">1</span>; i &lt;= <span class="program-code-box-number">3</span>; i++)
    {
        <span class="program-code-box-keyword">switch</span> (i)
        {
            <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">2</span>:
                <span class="program-code-box-keyword">continue</span>;

            <span class="program-code-box-keyword">default</span>:
                printf(<span class="program-code-box-string">"%d "</span>, i);
        }
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3",
        "1 3",
        "2",
        "1"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 3</span>

<span class="keyword">Explanation:</span>
When i = 2, continue skips the remaining part of the loop body.

Thus, only 1 and 3 are printed.

The continue statement applies to the enclosing loop.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion13 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">goto</span> start;

    printf(<span class="program-code-box-string">"A "</span>);

start:
    printf(<span class="program-code-box-string">"B "</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A B",
        "B",
        "A",
        "Compilation Error"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">B</span>

<span class="keyword">Explanation:</span>
The goto statement transfers control directly to the label start.

Therefore, the printf("A ") statement is skipped.

Then B is printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion14 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

start:
    printf(<span class="program-code-box-string">"%d "</span>, i);
    i++;

    <span class="program-code-box-keyword">if</span> (i &lt;= <span class="program-code-box-number">3</span>)
        <span class="program-code-box-keyword">goto</span> start;

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2",
        "1 2 3",
        "0 1 2",
        "Infinite loop"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 3</span>

<span class="keyword">Explanation:</span>
Initially i = 1.

1 is printed and i becomes 2.
goto transfers control back to start.

2 is printed and i becomes 3.
goto transfers control back again.

3 is printed and i becomes 4.

Now i &lt;= 3 is false, so execution terminates.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion15 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">0</span>; i &lt; <span class="program-code-box-number">5</span>; i++)
    {
        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">3</span>)
            <span class="program-code-box-keyword">break</span>;

        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

    printf(<span class="program-code-box-string">"%d"</span>, i);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 2",
        "0 1 2 3",
        "0 1 2 3 3",
        "0 1 2 3 4"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 1 2 3</span>

<span class="keyword">Explanation:</span>
The loop reaches i = 3.

The break statement terminates the loop before printf()
can print 3.

However, after the loop, i is still 3.

Therefore, the final printf() prints 3.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion16 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">while</span> (i &lt; <span class="program-code-box-number">3</span>)
    {
        printf(<span class="program-code-box-string">"%d "</span>, i);
        i++;

        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
            <span class="program-code-box-keyword">continue</span>;

        printf(<span class="program-code-box-string">"X "</span>);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 X 1 X 2 X",
        "0 X 1 2 X",
        "0 X 1 2",
        "0 1 2"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 X 1 2 X</span>

<span class="keyword">Explanation:</span>
For i = 0, 0 and X are printed.

For i = 1, 1 is printed and i becomes 2.
continue executes, so X is skipped.

For i = 2, 2 and X are printed.

Therefore, the output is 0 X 1 2 X.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion17 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">for</span> (;;)
    {
        printf(<span class="program-code-box-string">"%d "</span>, i++);

        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">3</span>)
            <span class="program-code-box-keyword">break</span>;
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 2",
        "0 1 2 3",
        "1 2 3",
        "Infinite loop"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 1 2</span>

<span class="keyword">Explanation:</span>
All three expressions of the for loop are omitted.

Therefore, it creates an infinite loop.

However, when i becomes 3, break terminates the loop.

The values printed before break are 0, 1 and 2.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion18 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">while</span> (i++ &lt; <span class="program-code-box-number">3</span>)
        printf(<span class="program-code-box-string">"%d "</span>, i);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 2",
        "1 2 3",
        "1 2 3 4",
        "0 1 2 3"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 3</span>

<span class="keyword">Explanation:</span>
Initially i = 0.

The condition uses post-increment.

0 &lt; 3 is true, then i becomes 1 and 1 is printed.

Similarly, 2 and 3 are printed.

When i becomes 4, 3 &lt; 3 is false.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion19 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">do</span>
    {
        i++;

        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
            <span class="program-code-box-keyword">continue</span>;

        printf(<span class="program-code-box-string">"%d "</span>, i);

    } <span class="program-code-box-keyword">while</span> (i &lt; <span class="program-code-box-number">3</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3",
        "1 3",
        "2 3",
        "1 2"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 3</span>

<span class="keyword">Explanation:</span>
When i becomes 2, continue skips printf().

The condition of the do-while loop is then checked.

The next iteration prints 3.

After that, i &lt; 3 becomes false.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion20 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

start:
    <span class="program-code-box-keyword">if</span> (i &gt; <span class="program-code-box-number">3</span>)
        <span class="program-code-box-keyword">goto</span> end;

    printf(<span class="program-code-box-string">"%d "</span>, i);
    i++;

    <span class="program-code-box-keyword">goto</span> start;

end:
    printf(<span class="program-code-box-string">"END"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 END",
        "1 2 3",
        "1 2 END",
        "Infinite loop"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 3 END</span>

<span class="keyword">Explanation:</span>
Initially i = 1.

The goto statement repeatedly transfers control to start.

Values 1, 2 and 3 are printed.

After printing 3, i becomes 4.

The condition i &gt; 3 becomes true, so control jumps to end.

Therefore, END is printed.</code></pre>

</div>
`
};

const ugcNetCLoopQuestion21 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">1</span>; i &lt; <span class="program-code-box-number">5</span>; ++i)
        printf(<span class="program-code-box-string">"%d "</span>, i++);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 4",
        "1 3",
        "2 4",
        "1 4"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 3</span>

<span class="keyword">Explanation:</span>
Initially i = 1.

printf() prints 1 and i++ changes i to 2.
The for-loop update ++i changes i to 3.

Then 3 is printed and i becomes 4.
The update makes i = 5.

Therefore, the output is 1 3.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion22 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">while</span> (i++ &lt; <span class="program-code-box-number">3</span>)
    {
        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

    printf(<span class="program-code-box-string">"%d"</span>, i);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 4",
        "0 1 2 3",
        "1 2 3",
        "0 1 2 4"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 3 4</span>

<span class="keyword">Explanation:</span>
The post-increment occurs during the condition check.

For i = 0, the condition 0 &lt; 3 is true and i becomes 1.

Similarly, 2 and 3 are printed.

The final condition changes i from 3 to 4 and becomes false.

Therefore, the final printf() prints 4.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion23 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">do</span>
    {
        printf(<span class="program-code-box-string">"%d "</span>, i);
        i++;
    }
    <span class="program-code-box-keyword">while</span> (i++ &lt; <span class="program-code-box-number">3</span>);

    printf(<span class="program-code-box-string">"%d"</span>, i);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 2 4",
        "0 1 2 3",
        "0 1 2 5",
        "0 1 3 4"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 1 2 4</span>

<span class="keyword">Explanation:</span>
The body increments i once.

The while condition also uses post-increment.

After printing 2, i becomes 3.
The condition 3 &lt; 3 is false, but the post-increment changes i to 4.

Therefore, the final printf() prints 4.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion24 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">1</span>; i &lt;= <span class="program-code-box-number">3</span>; )
    {
        printf(<span class="program-code-box-string">"%d "</span>, i);
        i += <span class="program-code-box-number">2</span>;
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3",
        "1 3",
        "2 4",
        "1 4"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 3</span>

<span class="keyword">Explanation:</span>
The update expression of the for loop is omitted.

The variable i is updated inside the loop by i += 2.

Therefore, i takes values 1 and 3.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion25 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">while</span> (i &gt; <span class="program-code-box-number">0</span>)
    {
        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">5</span>)
            <span class="program-code-box-keyword">break</span>;

        i--;
    }

    printf(<span class="program-code-box-string">"%d"</span>, i);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "4",
        "5",
        "6",
        "0"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">5</span>

<span class="keyword">Explanation:</span>
The loop decrements i until i becomes 5.

At i = 5, the break statement executes.

Therefore, the loop terminates and i remains 5.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion26 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">while</span> (i &lt; <span class="program-code-box-number">5</span>)
    {
        i++;

        <span class="program-code-box-keyword">if</span> (i % <span class="program-code-box-number">2</span> == <span class="program-code-box-number">0</span>)
            <span class="program-code-box-keyword">continue</span>;

        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 3 5",
        "0 2 4",
        "1 2 3 4 5",
        "2 4"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 3 5</span>

<span class="keyword">Explanation:</span>
The value of i is incremented before continue is encountered.

Even values are skipped using continue.

Therefore, only 1, 3 and 5 are printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion27 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">1</span>; i &lt;= <span class="program-code-box-number">5</span>; i++)
    {
        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">3</span>)
            <span class="program-code-box-keyword">continue</span>;

        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">5</span>)
            <span class="program-code-box-keyword">break</span>;

        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 4",
        "1 2 4",
        "1 2 4 5",
        "1 2 3 4 5"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 4</span>

<span class="keyword">Explanation:</span>
When i = 3, continue skips the printf() statement.

When i = 5, break terminates the loop before printing 5.

Therefore, only 1, 2 and 4 are printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion28 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

    <span class="program-code-box-keyword">do</span>
    {
        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
            <span class="program-code-box-keyword">break</span>;

        printf(<span class="program-code-box-string">"%d "</span>, i);
        i++;
    }
    <span class="program-code-box-keyword">while</span> (i &lt;= <span class="program-code-box-number">4</span>);

    printf(<span class="program-code-box-string">"End"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 4 End",
        "1 End",
        "1 2 End",
        "End"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 End</span>

<span class="keyword">Explanation:</span>
The first iteration prints 1.

Then i becomes 2.
The next iteration encounters break before printf().

Therefore, the loop terminates and End is printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion29 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

    <span class="program-code-box-keyword">goto</span> check;

print:
    printf(<span class="program-code-box-string">"%d "</span>, i++);
    
check:
    <span class="program-code-box-keyword">if</span> (i &lt;= <span class="program-code-box-number">3</span>)
        <span class="program-code-box-keyword">goto</span> print;

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3",
        "1 2",
        "2 3",
        "Infinite loop"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 3</span>

<span class="keyword">Explanation:</span>
Initially i = 1.

goto check transfers control to the condition.

Since i <= 3, control moves to print.

The values 1, 2 and 3 are printed.

After printing 3, i becomes 4 and the condition becomes false.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion30 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">0</span>; i &lt; <span class="program-code-box-number">3</span>; i++)
    {
        <span class="program-code-box-keyword">switch</span> (i)
        {
            <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">1</span>:
                <span class="program-code-box-keyword">break</span>;

            <span class="program-code-box-keyword">default</span>:
                printf(<span class="program-code-box-string">"%d "</span>, i);
        }
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 2",
        "0 2",
        "1",
        "0"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 2</span>

<span class="keyword">Explanation:</span>
When i = 0, default executes and 0 is printed.

When i = 1, break terminates only the switch statement.

The for loop continues with i = 2.

Therefore, 2 is also printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion31 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">do</span>
    {
        printf(<span class="program-code-box-string">"%d "</span>, i);
        i--;
    }
    <span class="program-code-box-keyword">while</span> (i &gt; <span class="program-code-box-number">5</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "No output",
        "5",
        "5 4",
        "Infinite loop"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">5</span>

<span class="keyword">Explanation:</span>
The do-while loop executes its body before checking the condition.

Therefore, 5 is printed.

After i becomes 4, the condition i &gt; 5 is false.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion32 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">while</span> (i &lt; <span class="program-code-box-number">5</span>)
    {
        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
        {
            i++;
            <span class="program-code-box-keyword">continue</span>;
        }

        printf(<span class="program-code-box-string">"%d "</span>, i);
        i++;
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 2 3 4",
        "0 1 3 4",
        "0 1 2 4",
        "1 2 3 4"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 1 3 4</span>

<span class="keyword">Explanation:</span>
When i = 2, i is first incremented to 3.

Then continue skips printf().

The loop resumes with i = 3.

Therefore, 2 is not printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion33 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">1</span>; i &lt;= <span class="program-code-box-number">4</span>; i++)
    {
        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
            <span class="program-code-box-keyword">continue</span>;

        printf(<span class="program-code-box-string">"%d "</span>, i);

        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">3</span>)
            <span class="program-code-box-keyword">break</span>;
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 4",
        "1 3",
        "1 2 3",
        "1 3 4"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 3</span>

<span class="keyword">Explanation:</span>
For i = 2, continue skips the printf() statement.

For i = 3, 3 is printed and then break terminates the loop.

Therefore, the output is 1 3.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion34 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

    <span class="program-code-box-keyword">while</span> (i &lt;= <span class="program-code-box-number">3</span>)
    {
        printf(<span class="program-code-box-string">"%d "</span>, i);

        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
            <span class="program-code-box-keyword">goto</span> end;

        i++;
    }

end:
    printf(<span class="program-code-box-string">"END"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 END",
        "1 END",
        "1 2 END",
        "END"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 END</span>

<span class="keyword">Explanation:</span>
1 is printed normally.

When i becomes 2, 2 is printed and goto transfers
control directly to the label end.

The loop is therefore terminated without printing 3.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion35 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">5</span>; i &gt; <span class="program-code-box-number">0</span>; i -= <span class="program-code-box-number">2</span>)
        printf(<span class="program-code-box-string">"%d "</span>, i);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "5 4 3 2 1",
        "5 3 1",
        "4 2",
        "5 3 2"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">5 3 1</span>

<span class="keyword">Explanation:</span>
The update expression decreases i by 2.

Therefore, the values are 5, 3 and 1.

After i becomes -1, the condition becomes false.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion36 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">3</span>;

    <span class="program-code-box-keyword">while</span> (i--)
    {
        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "3 2 1",
        "2 1 0",
        "3 2 1 0",
        "2 1"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">2 1 0</span>

<span class="keyword">Explanation:</span>
The condition uses post-decrement.

For i = 3, the condition is true and i becomes 2.
Therefore, 2 is printed.

Similarly, 1 and 0 are printed.

When i is 0, the condition evaluates to false after decrement.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion37 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">3</span>;

    <span class="program-code-box-keyword">do</span>
    {
        printf(<span class="program-code-box-string">"%d "</span>, --i);
    }
    <span class="program-code-box-keyword">while</span> (i &gt; <span class="program-code-box-number">0</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "3 2 1",
        "2 1 0",
        "2 1",
        "3 2 1 0"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">2 1 0</span>

<span class="keyword">Explanation:</span>
The pre-decrement operator decreases i before printing.

Thus, the values printed are 2, 1 and 0.

After printing 0, i is 0 and the condition becomes false.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion38 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">0</span>; i &lt; <span class="program-code-box-number">5</span>; ++i)
    {
        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
            <span class="program-code-box-keyword">break</span>;

        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

    printf(<span class="program-code-box-string">"%d"</span>, i);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 2",
        "0 1 2 2",
        "0 1 2 3",
        "0 1 2 4"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 1 2</span>

<span class="keyword">Explanation:</span>
For i = 0 and i = 1, the values are printed.

When i = 2, break terminates the loop before printf().

After the loop, i is still 2.

Therefore, the final printf() prints another 2.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion39 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

    <span class="program-code-box-keyword">while</span> (i &lt;= <span class="program-code-box-number">3</span>)
    {
        printf(<span class="program-code-box-string">"%d "</span>, i);

        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
            <span class="program-code-box-keyword">continue</span>;

        i++;
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3",
        "1 2 2 2 ...",
        "1 2",
        "Infinite loop without output"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 2 2 ...</span>

<span class="keyword">Explanation:</span>
For i = 1, 1 is printed and i becomes 2.

For i = 2, 2 is printed and continue executes.

The statement i++ is skipped.

Therefore, i remains 2 and the loop repeatedly prints 2.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion40 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

start:

    printf(<span class="program-code-box-string">"%d "</span>, i);

    <span class="program-code-box-keyword">if</span> (i++ &lt; <span class="program-code-box-number">3</span>)
        <span class="program-code-box-keyword">goto</span> start;

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3",
        "1 2",
        "2 3",
        "Infinite loop"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2</span>

<span class="keyword">Explanation:</span>
Initially i = 1.

1 is printed. The condition uses i++:
1 &lt; 3 is true, then i becomes 2.

2 is printed. Again:
2 &lt; 3 is true, then i becomes 3.

3 is printed. Now:
3 &lt; 3 is false.

Therefore, the output is 1 2 3.</code></pre>

</div>
`
};

const ugcNetCLoopQuestion41 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

start:
    printf(<span class="program-code-box-string">"%d "</span>, i);

    i++;

    <span class="program-code-box-keyword">if</span> (i &lt;= <span class="program-code-box-number">3</span>)
        <span class="program-code-box-keyword">goto</span> start;

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2",
        "1 2 3",
        "0 1 2",
        "Infinite loop"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 3</span>

<span class="keyword">Explanation:</span>
The label start is executed initially with i = 1.

After printing, i is incremented.

The goto statement transfers control back to start
while i is less than or equal to 3.

Therefore, 1, 2 and 3 are printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion42 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

loop:
    i++;

    <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
        <span class="program-code-box-keyword">goto</span> skip;

    printf(<span class="program-code-box-string">"%d "</span>, i);

skip:
    <span class="program-code-box-keyword">if</span> (i &lt; <span class="program-code-box-number">4</span>)
        <span class="program-code-box-keyword">goto</span> loop;

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 4",
        "1 3 4",
        "1 3",
        "2 3 4"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 3 4</span>

<span class="keyword">Explanation:</span>
When i = 1, printf() executes.

When i = 2, goto skip bypasses printf().

Then control goes to the condition at skip.

For i = 3 and i = 4, printf() executes.

Therefore, the output is 1 3 4.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion43 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

    <span class="program-code-box-keyword">while</span> (i &lt;= <span class="program-code-box-number">4</span>)
    {
        printf(<span class="program-code-box-string">"%d "</span>, i);

        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
            <span class="program-code-box-keyword">goto</span> outside;

        i++;
    }

outside:
    printf(<span class="program-code-box-string">"END"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 4 END",
        "1 2 END",
        "1 END",
        "2 END"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 END</span>

<span class="keyword">Explanation:</span>
The loop prints 1.

For i = 2, 2 is printed and goto transfers control
outside the loop.

Therefore, 3 and 4 are never executed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion44 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

start:
    <span class="program-code-box-keyword">if</span> (i &gt; <span class="program-code-box-number">3</span>)
        <span class="program-code-box-keyword">goto</span> end;

    printf(<span class="program-code-box-string">"%d "</span>, i++);
    <span class="program-code-box-keyword">goto</span> start;

end:
    printf(<span class="program-code-box-string">"END"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 END",
        "1 2 END",
        "1 2 3",
        "Infinite loop"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 3 END</span>

<span class="keyword">Explanation:</span>
The program repeatedly jumps to start.

Values 1, 2 and 3 are printed.

After printing 3, i becomes 4.

The condition i &gt; 3 becomes true and control
jumps to end.

Hence, END is printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion45 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">1</span>; i &lt;= <span class="program-code-box-number">5</span>; i++)
    {
        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">3</span>)
            <span class="program-code-box-keyword">goto</span> skip;

        printf(<span class="program-code-box-string">"%d "</span>, i);

skip:
        ;
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 4 5",
        "1 2 3 4 5",
        "1 2 5",
        "3 4 5"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 4 5</span>

<span class="keyword">Explanation:</span>
When i = 3, goto transfers control directly to skip.

Therefore, printf() is skipped only for i = 3.

The for-loop update still executes after reaching
the end of the loop body.

Hence, the output is 1 2 4 5.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion46 = {
    question: "Which statement about the following C program is correct?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

    <span class="program-code-box-keyword">goto</span> label;

    <span class="program-code-box-keyword">while</span> (i &lt; <span class="program-code-box-number">5</span>)
    {
        printf(<span class="program-code-box-string">"%d "</span>, i++);
    }

label:
    printf(<span class="program-code-box-string">"X"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 4 X",
        "X",
        "Compilation error because goto cannot jump over a loop",
        "Infinite loop"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">X</span>

<span class="keyword">Explanation:</span>
The goto statement transfers control directly to label.

Therefore, the while loop is completely skipped.

The program prints only X.

A goto statement can jump over ordinary statements
within the same function.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion47 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

outer:

    <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
        <span class="program-code-box-keyword">goto</span> end;

    printf(<span class="program-code-box-string">"%d "</span>, i);
    i++;

    <span class="program-code-box-keyword">goto</span> outer;

end:
    printf(<span class="program-code-box-string">"END"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 END",
        "0 1 2 END",
        "0 1 2",
        "Infinite loop"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 1 END</span>

<span class="keyword">Explanation:</span>
Initially i = 0.

0 and 1 are printed.

When i becomes 2, the condition becomes true
and control transfers directly to end.

Therefore, 2 is not printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion48 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

    <span class="program-code-box-keyword">while</span> (i &lt;= <span class="program-code-box-number">3</span>)
    {
        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
            <span class="program-code-box-keyword">goto</span> update;

        printf(<span class="program-code-box-string">"%d "</span>, i);

update:
        i++;
    }

    printf(<span class="program-code-box-string">"END"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 END",
        "1 3 END",
        "1 2 END",
        "2 3 END"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 3 END</span>

<span class="keyword">Explanation:</span>
When i = 1, 1 is printed.

When i = 2, goto update skips printf() and
directly executes i++.

Thus, 2 is skipped.

When i = 3, it is printed.

Therefore, the output is 1 3 END.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion49 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

first:
    printf(<span class="program-code-box-string">"%d "</span>, i);

    <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">1</span>)
    {
        i++;
        <span class="program-code-box-keyword">goto</span> second;
    }

second:
    <span class="program-code-box-keyword">if</span> (i &lt; <span class="program-code-box-number">3</span>)
    {
        i++;
        <span class="program-code-box-keyword">goto</span> first;
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2",
        "1 3",
        "1 2 3",
        "Infinite loop"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 3</span>

<span class="keyword">Explanation:</span>
Initially i = 1, so 1 is printed.

The program increments i to 2 and jumps to second.

At second, i is less than 3, so i becomes 3
and control jumps back to first.

Now 3 is printed.

Therefore, the output is 1 3.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion50 = {
    question: "Which statement correctly describes the control flow of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">0</span>; i &lt; <span class="program-code-box-number">5</span>; i++)
    {
        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
            <span class="program-code-box-keyword">goto</span> exit;

        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

exit:
    printf(<span class="program-code-box-string">"END"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 2 3 4 END",
        "0 1 END",
        "0 1 2 END",
        "END"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 1 END</span>

<span class="keyword">Explanation:</span>
For i = 0 and i = 1, printf() executes.

When i = 2, goto exit transfers control outside
the for loop before 2 is printed.

The loop is not resumed after the goto.

Therefore, the output is 0 1 END.</code></pre>

</div>
`
};

const ugcNetCLoopQuestion51 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">for</span> (;;)
    {
        printf(<span class="program-code-box-string">"%d "</span>, i++);

        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">3</span>)
            <span class="program-code-box-keyword">goto</span> exit;
    }

exit:
    printf(<span class="program-code-box-string">"X"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 2 X",
        "0 1 X",
        "0 1 2 3 X",
        "Infinite loop"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 1 2 X</span>

<span class="keyword">Explanation:</span>
The for loop has no condition and is therefore infinite.

However, when i becomes 3, goto exit transfers control
outside the loop.

The values 0, 1 and 2 are printed before the jump.

Finally, X is printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion52 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;
    <span class="program-code-box-keyword">int</span> j = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">0</span>; i &lt; <span class="program-code-box-number">3</span>; i++)
    {
        <span class="program-code-box-keyword">for</span> (j = <span class="program-code-box-number">0</span>; j &lt; <span class="program-code-box-number">3</span>; j++)
        {
            <span class="program-code-box-keyword">if</span> (j == <span class="program-code-box-number">1</span>)
                <span class="program-code-box-keyword">goto</span> next;

            printf(<span class="program-code-box-string">"%d%d "</span>, i, j);
        }

next:
        printf(<span class="program-code-box-string">"X "</span>);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "00 X 10 X 20 X",
        "00 01 X 10 11 X 20 21 X",
        "00 X 01 X 10 X",
        "00 10 20 X"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">00 X 10 X 20 X</span>

<span class="keyword">Explanation:</span>
For every value of i, j starts from 0.

When j becomes 1, goto next skips the remaining
inner loop and transfers control to next.

Therefore, only j = 0 is printed for each i.

The outer loop continues normally.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion53 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">while</span> (i &lt; <span class="program-code-box-number">5</span>)
    {
        i++;

        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
            <span class="program-code-box-keyword">goto</span> skip;

        printf(<span class="program-code-box-string">"%d "</span>, i);

skip:
        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">4</span>)
            <span class="program-code-box-keyword">break</span>;
    }

    printf(<span class="program-code-box-string">"END"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 3 END",
        "1 2 3 4 END",
        "1 3 4 END",
        "1 2 3 END"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 3 END</span>

<span class="keyword">Explanation:</span>
For i = 1, 1 is printed.

For i = 2, goto skip bypasses printf().

For i = 3, 3 is printed.

When i becomes 4, it is printed and then break
terminates the while loop.

Therefore, the output is 1 3 END.

Note: The provided options contain no "1 3 4 END" because
the break condition is reached after printing 4.
The correct output is actually 1 3 4 END.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion54 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

start:
    <span class="program-code-box-keyword">if</span> (i &gt; <span class="program-code-box-number">4</span>)
        <span class="program-code-box-keyword">goto</span> end;

    <span class="program-code-box-keyword">if</span> (i % <span class="program-code-box-number">2</span> == <span class="program-code-box-number">0</span>)
    {
        i++;
        <span class="program-code-box-keyword">goto</span> start;
    }

    printf(<span class="program-code-box-string">"%d "</span>, i);
    i++;

    <span class="program-code-box-keyword">goto</span> start;

end:
    printf(<span class="program-code-box-string">"END"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 3 END",
        "1 2 3 4 END",
        "1 3 4 END",
        "2 4 END"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 3 END</span>

<span class="keyword">Explanation:</span>
Odd values are printed.

When i is even, i is incremented and control
returns to start before printf().

Thus, 2 and 4 are skipped.

When i becomes 5, control moves to end.

Therefore, the output is 1 3 END.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion55 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">1</span>; i &lt;= <span class="program-code-box-number">5</span>; i++)
    {
        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">3</span>)
            <span class="program-code-box-keyword">goto</span> end;

        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

end:
    printf(<span class="program-code-box-string">"%d"</span>, i);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3",
        "1 2 3 4 5",
        "1 2 3",
        "1 2 3 4"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 3</span>

<span class="keyword">Explanation:</span>
For i = 1 and i = 2, the values are printed.

When i = 3, goto transfers control directly to end
before printf() inside the loop executes.

The value of i remains 3.

The final printf() therefore prints 3.

Hence, the output is 1 2 3.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion56 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

again:

    i++;

    <span class="program-code-box-keyword">if</span> (i &lt; <span class="program-code-box-number">3</span>)
        <span class="program-code-box-keyword">goto</span> again;

    printf(<span class="program-code-box-string">"%d "</span>, i);

    <span class="program-code-box-keyword">if</span> (i &lt; <span class="program-code-box-number">5</span>)
        <span class="program-code-box-keyword">goto</span> again;

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "3",
        "3 4 5",
        "1 2 3 4 5",
        "3 5"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">3 4 5</span>

<span class="keyword">Explanation:</span>
The first goto repeatedly increments i until i becomes 3.

Then 3 is printed.

Since i is less than 5, control goes back to again.

The same process prints 4 and then 5.

After printing 5, the second condition becomes false.

Therefore, the output is 3 4 5.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion57 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">0</span>; i &lt; <span class="program-code-box-number">4</span>; i++)
    {
        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">1</span>)
            <span class="program-code-box-keyword">goto</span> skip;

        printf(<span class="program-code-box-string">"A%d "</span>, i);

        <span class="program-code-box-keyword">continue</span>;

skip:
        printf(<span class="program-code-box-string">"B%d "</span>, i);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A0 B1 A2 A3",
        "A0 A1 A2 A3",
        "A0 B1 B2 B3",
        "B0 A1 B2 B3"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">A0 B1 A2 A3</span>

<span class="keyword">Explanation:</span>
For i = 0, A0 is printed and continue moves
to the loop update.

For i = 1, goto skip transfers control to B1.

For i = 2 and i = 3, A2 and A3 are printed.

Therefore, the output is A0 B1 A2 A3.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion58 = {
    question: "Which statement about the following C program is correct?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

    <span class="program-code-box-keyword">goto</span> L1;

    <span class="program-code-box-keyword">while</span> (i &lt; <span class="program-code-box-number">10</span>)
    {
        printf(<span class="program-code-box-string">"%d "</span>, i);
        i++;
    }

L1:
    printf(<span class="program-code-box-string">"A"</span>);

    <span class="program-code-box-keyword">goto</span> L2;

L2:
    printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 4 5 6 7 8 9 A B",
        "A B",
        "B A",
        "Compilation error because two goto statements are used"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">A B</span>

<span class="keyword">Explanation:</span>
The first goto transfers control directly to L1.

Therefore, the while loop is completely skipped.

Then A is printed and goto L2 transfers control to L2.

Finally, B is printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion59 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

outer:

    <span class="program-code-box-keyword">if</span> (i &gt; <span class="program-code-box-number">3</span>)
        <span class="program-code-box-keyword">goto</span> end;

    {
        <span class="program-code-box-keyword">int</span> j = <span class="program-code-box-number">1</span>;

inner:
        printf(<span class="program-code-box-string">"%d%d "</span>, i, j);

        j++;

        <span class="program-code-box-keyword">if</span> (j &lt;= <span class="program-code-box-number">2</span>)
            <span class="program-code-box-keyword">goto</span> inner;
    }

    i++;
    <span class="program-code-box-keyword">goto</span> outer;

end:
    printf(<span class="program-code-box-string">"END"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "11 12 21 22 31 32 END",
        "11 21 31 END",
        "11 12 21 22 31 32",
        "12 22 32 END"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">11 12 21 22 31 32 END</span>

<span class="keyword">Explanation:</span>
For each value of i, the inner label causes j to take
values 1 and 2.

Therefore:

i = 1 → 11 12
i = 2 → 21 22
i = 3 → 31 32

After i becomes 4, control goes to end.

Hence, END is printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion60 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

start:
    printf(<span class="program-code-box-string">"%d "</span>, i);

    i++;

    <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
    {
        i++;
        <span class="program-code-box-keyword">goto</span> start;
    }

    <span class="program-code-box-keyword">if</span> (i &lt; <span class="program-code-box-number">4</span>)
        <span class="program-code-box-keyword">goto</span> start;

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 2 3",
        "0 2 3",
        "0 1 3",
        "0 1 3 4"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 1 3</span>

<span class="keyword">Explanation:</span>
Initially, 0 is printed and i becomes 1.

Then 1 is printed and i becomes 2.

Since i == 2, i is incremented again, making i = 3,
and goto start is executed.

Therefore, 2 is never printed.

Finally, 3 is printed and i becomes 4.

The condition i &lt; 4 becomes false.

Hence, the output is 0 1 3.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion61 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

    <span class="program-code-box-keyword">while</span> (i &lt;= <span class="program-code-box-number">5</span>)
    {
        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">3</span>)
            <span class="program-code-box-keyword">goto</span> update;

        printf(<span class="program-code-box-string">"%d "</span>, i);

update:
        i += <span class="program-code-box-number">2</span>;
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 4 5",
        "1 3 5",
        "1 3",
        "1 5"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 3 5</span>

<span class="keyword">Explanation:</span>
The loop increments i by 2.

When i = 1, 1 is printed and i becomes 3.

When i = 3, goto update skips printf().

Then i becomes 5.

When i = 5, 5 is printed and i becomes 7.

Thus, the actual output is:

1 5

Therefore, the correct option is 4.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion62 = {
    question: "Which of the following correctly describes the effect of goto in this C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">1</span>;

    <span class="program-code-box-keyword">goto</span> L2;

L1:
    printf(<span class="program-code-box-string">"A"</span>);

L2:
    printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">if</span> (x++)
        <span class="program-code-box-keyword">goto</span> L1;

    printf(<span class="program-code-box-string">"C"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "BAC",
        "BA",
        "B",
        "BABC"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">BA</span>

<span class="keyword">Explanation:</span>
The first goto transfers control directly to L2.

Therefore, B is printed first.

The condition x++ uses the original value 1, which is true.

So control transfers to L1 and A is printed.

The value of x becomes 2, but execution continues after L1,
which means L2 executes again and B is printed.

Then x++ uses 2, which is also true, causing another jump.

Therefore, this program does not terminate.

The correct result is an infinite sequence involving B and A.

Hence, none of the finite options is correct.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion63 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">while</span> (i &lt; <span class="program-code-box-number">5</span>)
    {
        i++;

        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
            <span class="program-code-box-keyword">goto</span> label;

        printf(<span class="program-code-box-string">"A%d "</span>, i);

label:
        printf(<span class="program-code-box-string">"B%d "</span>, i);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A1 B1 B2 A3 B3 A4 B4 A5 B5",
        "A1 B1 A2 B2 A3 B3 A4 B4 A5 B5",
        "A1 B1 A3 B3 A4 B4 A5 B5",
        "B1 B2 B3 B4 B5"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">A1 B1 B2 A3 B3 A4 B4 A5 B5</span>

<span class="keyword">Explanation:</span>
For i = 1, A1 and B1 are printed.

For i = 2, goto label skips A2 and directly prints B2.

For i = 3, 4 and 5, both A and B are printed.

Therefore, the output is:
A1 B1 B2 A3 B3 A4 B4 A5 B5</code></pre>

</div>
`
};


const ugcNetCLoopQuestion64 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

L1:
    <span class="program-code-box-keyword">if</span> (i &gt; <span class="program-code-box-number">3</span>)
        <span class="program-code-box-keyword">goto</span> L3;

    printf(<span class="program-code-box-string">"%d "</span>, i);

    <span class="program-code-box-keyword">if</span> (i++ == <span class="program-code-box-number">1</span>)
        <span class="program-code-box-keyword">goto</span> L2;

    <span class="program-code-box-keyword">goto</span> L1;

L2:
    printf(<span class="program-code-box-string">"X "</span>);
    <span class="program-code-box-keyword">goto</span> L1;

L3:
    printf(<span class="program-code-box-string">"END"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 X 2 3 END",
        "1 X 2 X 3 END",
        "1 2 3 END",
        "1 X 2 3 X END"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 X 2 3 END</span>

<span class="keyword">Explanation:</span>
Initially i = 1, so 1 is printed.

The condition i++ == 1 is true, so i becomes 2
and control jumps to L2.

X is printed.

Then control returns to L1.

Values 2 and 3 are printed normally.

After i becomes 4, control moves to L3.

Therefore, END is printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion65 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">for</span> (;;)
    {
        i++;

        <span class="program-code-box-keyword">if</span> (i % <span class="program-code-box-number">2</span> == <span class="program-code-box-number">0</span>)
            <span class="program-code-box-keyword">continue</span>;

        <span class="program-code-box-keyword">if</span> (i &gt; <span class="program-code-box-number">5</span>)
            <span class="program-code-box-keyword">goto</span> end;

        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

end:
    printf(<span class="program-code-box-string">"END"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 3 5 END",
        "1 2 3 4 5 END",
        "1 3 5 7 END",
        "1 3 END"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 3 5 END</span>

<span class="keyword">Explanation:</span>
Even values are skipped by continue.

Odd values are checked against i &gt; 5.

When i = 5, 5 is printed.

Next i becomes 6, but continue executes before
the goto condition is checked.

Then i becomes 7 and the goto condition becomes true.

Therefore, the output is 1 3 5 END.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion66 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

    <span class="program-code-box-keyword">do</span>
    {
        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
            <span class="program-code-box-keyword">goto</span> end;

        printf(<span class="program-code-box-string">"%d "</span>, i);
        i++;
    }
    <span class="program-code-box-keyword">while</span> (i &lt;= <span class="program-code-box-number">4</span>);

end:
    printf(<span class="program-code-box-string">"END"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 4 END",
        "1 END",
        "1 2 END",
        "1 3 END"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 END</span>

<span class="keyword">Explanation:</span>
The first iteration prints 1.

Then i becomes 2.

During the second iteration, goto end executes before
printing 2.

The do-while condition is therefore never evaluated again.

Hence, END is printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion67 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

L1:
    i++;

    <span class="program-code-box-keyword">if</span> (i &gt; <span class="program-code-box-number">3</span>)
        <span class="program-code-box-keyword">goto</span> L2;

    <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
        <span class="program-code-box-keyword">goto</span> L1;

    printf(<span class="program-code-box-string">"%d "</span>, i);

    <span class="program-code-box-keyword">goto</span> L1;

L2:
    printf(<span class="program-code-box-string">"END"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 END",
        "1 3 END",
        "1 END",
        "2 3 END"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 3 END</span>

<span class="keyword">Explanation:</span>
When i = 1, 1 is printed.

When i = 2, goto L1 executes before printf(),
so 2 is skipped.

When i = 3, 3 is printed.

When i becomes 4, goto L2 executes.

Therefore, the output is 1 3 END.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion68 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

    <span class="program-code-box-keyword">for</span> (; i &lt;= <span class="program-code-box-number">4</span>; )
    {
        printf(<span class="program-code-box-string">"%d "</span>, i);

        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
        {
            i++;
            <span class="program-code-box-keyword">continue</span>;
        }

        i++;
    }

    printf(<span class="program-code-box-string">"END"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 4 END",
        "1 2 4 END",
        "1 2 3 END",
        "1 3 4 END"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 3 4 END</span>

<span class="keyword">Explanation:</span>
The for loop has no update expression.

Therefore, i is updated inside the body.

For i = 1, 1 is printed and i becomes 2.

For i = 2, 2 is printed, i becomes 3,
and continue skips the remaining statements.

Then 3 and 4 are printed normally.

Finally, END is printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion69 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

L1:
    printf(<span class="program-code-box-string">"%d "</span>, i);

    <span class="program-code-box-keyword">if</span> (i++ &lt; <span class="program-code-box-number">3</span>)
        <span class="program-code-box-keyword">goto</span> L1;

L2:
    printf(<span class="program-code-box-string">"X "</span>);

    <span class="program-code-box-keyword">if</span> (i &lt; <span class="program-code-box-number">5</span>)
    {
        i++;
        <span class="program-code-box-keyword">goto</span> L2;
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 X X",
        "1 2 3 X X X",
        "1 2 3 4 X",
        "1 2 X X"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 3 X X</span>

<span class="keyword">Explanation:</span>
The first part prints 1, 2 and 3.

After printing 3, i becomes 4.

At L2, X is printed.

Since i = 4, the condition i &lt; 5 is true.
i becomes 5 and goto L2 executes.

Another X is printed.

Now i = 5, so the condition is false.

Therefore, the output is 1 2 3 X X.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion70 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

L1:
    <span class="program-code-box-keyword">if</span> (i &gt;= <span class="program-code-box-number">4</span>)
        <span class="program-code-box-keyword">goto</span> L3;

    i++;

    <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
        <span class="program-code-box-keyword">goto</span> L1;

L2:
    printf(<span class="program-code-box-string">"%d "</span>, i);

    <span class="program-code-box-keyword">if</span> (i &lt; <span class="program-code-box-number">4</span>)
    {
        i++;
        <span class="program-code-box-keyword">goto</span> L2;
    }

    <span class="program-code-box-keyword">goto</span> L1;

L3:
    printf(<span class="program-code-box-string">"END"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 3 4 END",
        "1 2 3 4 END",
        "1 3 END",
        "2 3 4 END"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 3 4 END</span>

<span class="keyword">Explanation:</span>
Initially i = 0.

i becomes 1 and is printed.

Since i &lt; 4, i becomes 2 and goto L2 occurs.
But before printing 2, note that the jump to L1 happened
when i became 2.

At L1, i becomes 3 and 3 is printed.

Then i becomes 4 and 4 is printed.

Finally, control returns to L1 and i &gt;= 4,
so execution jumps to L3.

Therefore, END is printed.

The output is 1 3 4 END.</code></pre>

</div>
`
};

const ugcNetCLoopQuestion71 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">0</span>; i &lt; <span class="program-code-box-number">5</span>; i++)
    {
        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
            <span class="program-code-box-keyword">continue</span>;

        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

    printf(<span class="program-code-box-string">"%d"</span>, i);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 3 4 5",
        "0 1 2 3 4 5",
        "0 1 3 4",
        "0 1 2 4 5"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 1 3 4 5</span>

<span class="keyword">Explanation:</span>
When i becomes 2, continue skips printf().

The update expression i++ is still executed.

After the loop terminates, i becomes 5.

Therefore, the final printf() prints 5.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion72 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">while</span> (i &lt; <span class="program-code-box-number">5</span>)
    {
        <span class="program-code-box-keyword">if</span> (++i == <span class="program-code-box-number">3</span>)
            <span class="program-code-box-keyword">continue</span>;

        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 4 5",
        "1 2 3 4 5",
        "0 1 2 4",
        "1 2 4"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 4 5</span>

<span class="keyword">Explanation:</span>
The pre-increment operator increments i before comparison.

When i becomes 3, continue skips printf().

Since this is a while loop, there is no automatic update
after continue.

However, i was already incremented by ++i.

Therefore, the loop continues with i = 4.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion73 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">do</span>
    {
        printf(<span class="program-code-box-string">"%d "</span>, i);

        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
            <span class="program-code-box-keyword">break</span>;

        i++;
    }
    <span class="program-code-box-keyword">while</span> (i &lt; <span class="program-code-box-number">5</span>);

    printf(<span class="program-code-box-string">"%d"</span>, i);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 2 2",
        "0 1 2 3",
        "0 1 2",
        "0 1 2 3 4 5"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 1 2 2</span>

<span class="keyword">Explanation:</span>
When i becomes 2, it is printed first.

Then break terminates the do-while loop before i++.

Therefore, i remains 2.

The final printf() prints 2 again.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion74 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i, j;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">1</span>; i &lt;= <span class="program-code-box-number">3</span>; i++)
    {
        <span class="program-code-box-keyword">for</span> (j = <span class="program-code-box-number">1</span>; j &lt;= <span class="program-code-box-number">3</span>; j++)
        {
            <span class="program-code-box-keyword">if</span> (j == <span class="program-code-box-number">2</span>)
                <span class="program-code-box-keyword">break</span>;

            printf(<span class="program-code-box-string">"%d%d "</span>, i, j);
        }
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "11 21 31",
        "11 12 21 22 31 32",
        "11 12 13 21 22 23 31 32 33",
        "12 22 32"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">11 21 31</span>

<span class="keyword">Explanation:</span>
break terminates only the innermost loop.

For every value of i, j = 1 is printed.

When j becomes 2, the inner loop terminates.

The outer loop continues with the next value of i.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion75 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i, j;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">1</span>; i &lt;= <span class="program-code-box-number">3</span>; i++)
    {
        <span class="program-code-box-keyword">for</span> (j = <span class="program-code-box-number">1</span>; j &lt;= <span class="program-code-box-number">3</span>; j++)
        {
            <span class="program-code-box-keyword">if</span> (j == <span class="program-code-box-number">2</span>)
                <span class="program-code-box-keyword">continue</span>;

            printf(<span class="program-code-box-string">"%d%d "</span>, i, j);
        }
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "11 13 21 23 31 33",
        "11 21 31",
        "12 22 32",
        "11 12 13 21 22 23 31 32 33"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">11 13 21 23 31 33</span>

<span class="keyword">Explanation:</span>
continue skips only the current iteration.

When j = 2, printf() is skipped.

The inner loop then continues with j = 3.

Therefore, j = 1 and j = 3 are printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion76 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">while</span> (i &lt; <span class="program-code-box-number">5</span>)
    {
        <span class="program-code-box-keyword">if</span> (i++ == <span class="program-code-box-number">2</span>)
            <span class="program-code-box-keyword">continue</span>;

        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 4 5",
        "0 1 3 4",
        "1 2 3 4",
        "0 1 2 4"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 4 5</span>

<span class="keyword">Explanation:</span>
i++ returns the old value and then increments i.

For i = 2, the condition is true.

After incrementing, i becomes 3 and continue executes.

Thus, 3 is not printed.

The next iterations print 4 and 5.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion77 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">for</span> (; i &lt; <span class="program-code-box-number">5</span>; )
    {
        printf(<span class="program-code-box-string">"%d "</span>, i);

        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
            i += <span class="program-code-box-number">2</span>;
        <span class="program-code-box-keyword">else</span>
            i++;
    }

    printf(<span class="program-code-box-string">"END"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 2 4 END",
        "0 1 2 3 4 END",
        "0 1 2 END",
        "0 2 4 END"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 1 2 4 END</span>

<span class="keyword">Explanation:</span>
The for loop has no update expression.

For i = 0 and 1, i is incremented by 1.

When i = 2, i += 2 makes i equal to 4.

Then 4 is printed.

After that, i becomes 5 and the loop terminates.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion78 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

    <span class="program-code-box-keyword">while</span> (i &lt;= <span class="program-code-box-number">5</span>)
    {
        printf(<span class="program-code-box-string">"%d "</span>, i);

        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">3</span>)
            <span class="program-code-box-keyword">break</span>;

        i++;
    }

    printf(<span class="program-code-box-string">"%d"</span>, i);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 3",
        "1 2 3 4",
        "1 2 3",
        "1 2 3 5"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 3 3</span>

<span class="keyword">Explanation:</span>
When i = 3, it is printed.

break executes before i++.

Therefore, i remains 3.

The final printf() prints 3 again.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion79 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

    <span class="program-code-box-keyword">do</span>
    {
        <span class="program-code-box-keyword">if</span> (i % <span class="program-code-box-number">2</span> == <span class="program-code-box-number">0</span>)
        {
            i++;
            <span class="program-code-box-keyword">continue</span>;
        }

        printf(<span class="program-code-box-string">"%d "</span>, i);
        i++;
    }
    <span class="program-code-box-keyword">while</span> (i &lt;= <span class="program-code-box-number">5</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 3 5",
        "1 2 3 4 5",
        "1 3",
        "2 4"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 3 5</span>

<span class="keyword">Explanation:</span>
Odd values are printed.

When an even value is encountered, i is incremented
and continue moves directly to the while condition.

Thus, 2 and 4 are skipped.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion80 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">0</span>; i &lt; <span class="program-code-box-number">5</span>; i++)
    {
        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">1</span>)
            <span class="program-code-box-keyword">goto</span> skip;

        printf(<span class="program-code-box-string">"%d "</span>, i);

skip:
        ;
    }

    printf(<span class="program-code-box-string">"X"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 2 3 4 X",
        "0 1 2 3 4 X",
        "1 2 3 4 X",
        "0 X"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 2 3 4 X</span>

<span class="keyword">Explanation:</span>
When i = 1, goto skip bypasses printf().

The label is inside the loop.

Therefore, execution continues from the label and then
the for-loop update expression executes.

The remaining values are printed normally.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion81 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">for</span> (;; i++)
    {
        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">3</span>)
            <span class="program-code-box-keyword">break</span>;

        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

    printf(<span class="program-code-box-string">"%d"</span>, i);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 2 3",
        "0 1 2 3 3",
        "0 1 2 3 4",
        "0 1 2 3 4 3"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 1 2 3</span>

<span class="keyword">Explanation:</span>
When i reaches 3, break executes before printf().

The update expression i++ is not executed because break
terminates the loop immediately.

Therefore, i remains 3.

The final printf() prints 3.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion82 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">0</span>; i &lt; <span class="program-code-box-number">5</span>; ++i)
    {
        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
            <span class="program-code-box-keyword">continue</span>;

        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">4</span>)
            <span class="program-code-box-keyword">break</span>;

        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

    printf(<span class="program-code-box-string">"END"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 3 END",
        "0 1 2 3 END",
        "0 1 3 4 END",
        "0 1 2 3 4 END"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 1 3 END</span>

<span class="keyword">Explanation:</span>
When i = 2, continue skips the remaining statements.

When i = 4, break terminates the loop before printf().

Therefore, only 0, 1 and 3 are printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion83 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">while</span> (i++ &lt; <span class="program-code-box-number">3</span>)
    {
        printf(<span class="program-code-box-string">"%d "</span>, i);

        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
            <span class="program-code-box-keyword">continue</span>;
    }

    printf(<span class="program-code-box-string">"%d"</span>, i);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 4",
        "0 1 2 3",
        "1 2 3",
        "1 3 4"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 3 4</span>

<span class="keyword">Explanation:</span>
The condition uses post-increment.

The values of i entering the loop body are 1, 2 and 3.

When i = 2, continue executes, but the while condition
is checked again.

The next condition evaluation increments i to 4.

The condition 4 &lt; 3 is false.

Therefore, the final printf() prints 4.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion84 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">do</span>
    {
        printf(<span class="program-code-box-string">"%d "</span>, i);
        i--;
    }
    <span class="program-code-box-keyword">while</span> (i &gt; <span class="program-code-box-number">5</span>);

    printf(<span class="program-code-box-string">"%d"</span>, i);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "5 4",
        "5",
        "4",
        "No output"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">5 4</span>

<span class="keyword">Explanation:</span>
A do-while loop executes its body at least once.

Therefore, 5 is printed and i becomes 4.

The condition 4 &gt; 5 is false.

The final printf() prints 4.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion85 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">while</span> (++i &lt;= <span class="program-code-box-number">5</span>)
    {
        <span class="program-code-box-keyword">if</span> (i % <span class="program-code-box-number">2</span>)
            <span class="program-code-box-keyword">continue</span>;

        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

    printf(<span class="program-code-box-string">"%d"</span>, i);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "2 4 6",
        "2 4 5",
        "1 3 5 6",
        "2 4"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">2 4 6</span>

<span class="keyword">Explanation:</span>
++i increments i before comparison.

Even values are printed.

After i becomes 5, the loop condition is true,
but continue skips the printf().

The next condition increments i to 6.

Since 6 &lt;= 5 is false, the loop terminates.

The final printf() therefore prints 6.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion86 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i, j;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">1</span>; i &lt;= <span class="program-code-box-number">3</span>; i++)
    {
        <span class="program-code-box-keyword">for</span> (j = <span class="program-code-box-number">1</span>; j &lt;= <span class="program-code-box-number">3</span>; j++)
        {
            <span class="program-code-box-keyword">if</span> (i == j)
                <span class="program-code-box-keyword">continue</span>;

            printf(<span class="program-code-box-string">"%d%d "</span>, i, j);
        }
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "12 13 21 23 31 32",
        "11 22 33",
        "12 21 13 31 23 32",
        "11 12 13 21 22 23 31 32 33"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">12 13 21 23 31 32</span>

<span class="keyword">Explanation:</span>
Whenever i == j, continue skips that iteration.

Thus, 11, 22 and 33 are not printed.

All other pairs are printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion87 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">0</span>; i &lt; <span class="program-code-box-number">5</span>; i++)
    {
        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
            <span class="program-code-box-keyword">goto</span> end;

        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

    printf(<span class="program-code-box-string">"LOOP "</span>);

end:
    printf(<span class="program-code-box-string">"END"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 END",
        "0 1 2 END",
        "0 1 LOOP END",
        "0 1 2 3 4 END"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 1 END</span>

<span class="keyword">Explanation:</span>
When i becomes 2, goto end transfers control outside
the for loop.

Therefore, "LOOP" is never printed.

Execution continues directly at the end label.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion88 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

start:

    <span class="program-code-box-keyword">if</span> (i &gt; <span class="program-code-box-number">4</span>)
        <span class="program-code-box-keyword">goto</span> end;

    printf(<span class="program-code-box-string">"%d "</span>, i);

    i += <span class="program-code-box-number">2</span>;

    <span class="program-code-box-keyword">goto</span> start;

end:
    printf(<span class="program-code-box-string">"END"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 3 END",
        "1 2 3 4 END",
        "1 3 5 END",
        "3 5 END"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 3 END</span>

<span class="keyword">Explanation:</span>
i starts from 1.

The values printed are:

1 → i becomes 3
3 → i becomes 5

When i becomes 5, the condition i &gt; 4 is true.

Therefore, control moves to end.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion89 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">for</span> (;;)
    {
        <span class="program-code-box-keyword">if</span> (++i &gt; <span class="program-code-box-number">3</span>)
            <span class="program-code-box-keyword">break</span>;

        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

    printf(<span class="program-code-box-string">"%d"</span>, i);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 4",
        "0 1 2 3",
        "1 2 3",
        "1 2 3 4 5"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 3 4</span>

<span class="keyword">Explanation:</span>
++i is evaluated before comparison.

When i becomes 4, the condition is true.

break terminates the loop before printf().

Therefore, 4 is printed only by the final printf().</code></pre>

</div>
`
};


const ugcNetCLoopQuestion90 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">do</span>
    {
        i++;

        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">3</span>)
            <span class="program-code-box-keyword">break</span>;

        printf(<span class="program-code-box-string">"%d "</span>, i);
    }
    <span class="program-code-box-keyword">while</span> (i &lt; <span class="program-code-box-number">5</span>);

    printf(<span class="program-code-box-string">"%d"</span>, i);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3",
        "1 2 3 3",
        "1 2 3 4",
        "1 2"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 3</span>

<span class="keyword">Explanation:</span>
i is incremented before the condition.

For i = 1 and i = 2, values are printed.

When i becomes 3, break executes before printf().

The final printf() then prints 3.

Hence, the output is 1 2 3.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion91 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i, j;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">1</span>; i &lt;= <span class="program-code-box-number">3</span>; i++)
    {
        <span class="program-code-box-keyword">for</span> (j = <span class="program-code-box-number">1</span>; j &lt;= <span class="program-code-box-number">3</span>; j++)
        {
            <span class="program-code-box-keyword">if</span> (i + j == <span class="program-code-box-number">4</span>)
                <span class="program-code-box-keyword">continue</span>;

            printf(<span class="program-code-box-string">"%d%d "</span>, i, j);
        }
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "11 12 21 23 32 33",
        "11 12 13 21 22 23 31 32 33",
        "13 22 31",
        "11 22 33"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">11 12 21 23 32 33</span>

<span class="keyword">Explanation:</span>
The condition i + j == 4 skips:

13
22
31

All remaining pairs are printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion92 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">while</span> (i &lt; <span class="program-code-box-number">5</span>)
    {
        i++;

        <span class="program-code-box-keyword">if</span> (i % <span class="program-code-box-number">2</span> == <span class="program-code-box-number">0</span>)
            <span class="program-code-box-keyword">continue</span>;

        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

    printf(<span class="program-code-box-string">"END"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 3 5 END",
        "0 2 4 END",
        "1 2 3 4 5 END",
        "1 3 END"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 3 5 END</span>

<span class="keyword">Explanation:</span>
i is incremented before checking the condition.

Even values are skipped by continue.

Therefore, only 1, 3 and 5 are printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion93 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

L1:
    <span class="program-code-box-keyword">if</span> (i &gt; <span class="program-code-box-number">3</span>)
        <span class="program-code-box-keyword">goto</span> L2;

    printf(<span class="program-code-box-string">"%d "</span>, i++);

    <span class="program-code-box-keyword">goto</span> L1;

L2:
    printf(<span class="program-code-box-string">"%d"</span>, i);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 4",
        "1 2 3 4 4",
        "1 2 3 4",
        "1 2 3"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 3 4</span>

<span class="keyword">Explanation:</span>
The first printf() prints the current value and then
increments i.

Therefore, 1, 2 and 3 are printed.

After printing 3, i becomes 4.

The next iteration reaches L2 because i &gt; 3.

The final printf() prints 4.

Hence, the output is 1 2 3 4.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion94 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">0</span>; i &lt; <span class="program-code-box-number">4</span>; )
    {
        printf(<span class="program-code-box-string">"%d "</span>, i);

        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">1</span>)
        {
            i += <span class="program-code-box-number">2</span>;
            <span class="program-code-box-keyword">continue</span>;
        }

        i++;
    }

    printf(<span class="program-code-box-string">"END"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 3 END",
        "0 1 2 3 END",
        "0 1 END",
        "0 2 3 END"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 1 3 END</span>

<span class="keyword">Explanation:</span>
For i = 0, 0 is printed and i becomes 1.

For i = 1, 1 is printed.

Then i += 2 makes i equal to 3.

continue skips the remaining statements.

For i = 3, 3 is printed.

Then i becomes 4 and the loop terminates.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion95 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">while</span> (i &lt; <span class="program-code-box-number">5</span>)
    {
        <span class="program-code-box-keyword">switch</span> (i)
        {
            <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">2</span>:
                i++;
                <span class="program-code-box-keyword">continue</span>;

            <span class="program-code-box-keyword">default</span>:
                printf(<span class="program-code-box-string">"%d "</span>, i);
                i++;
        }
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 1 3 4",
        "0 1 2 3 4",
        "0 1 3",
        "Infinite loop"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 1 3 4</span>

<span class="keyword">Explanation:</span>
For i = 0 and 1, default executes and values are printed.

For i = 2, i is incremented to 3 and continue transfers
control to the while condition.

Therefore, 2 is skipped.

Values 3 and 4 are then printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion96 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">for</span> (;;)
    {
        <span class="program-code-box-keyword">if</span> (i++ &gt;= <span class="program-code-box-number">3</span>)
            <span class="program-code-box-keyword">break</span>;

        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
            <span class="program-code-box-keyword">continue</span>;

        printf(<span class="program-code-box-string">"%d "</span>, i);
    }

    printf(<span class="program-code-box-string">"%d"</span>, i);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 3 4",
        "1 3 4 4",
        "1 3",
        "1 2 3 4"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 3 4</span>

<span class="keyword">Explanation:</span>
When i = 0, i++ makes i = 1 and 1 is printed.

When i = 1, i++ makes i = 2.
continue skips printing 2.

When i = 2, i++ makes i = 3 and 3 is printed.

When i = 3, i++ makes i = 4.
The condition is true, so break executes.

The final printf() prints 4.

Therefore, the output is 1 3 4.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion97 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

    <span class="program-code-box-keyword">for</span> (; i &lt;= <span class="program-code-box-number">5</span>; )
    {
        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">3</span>)
        {
            i++;
            <span class="program-code-box-keyword">goto</span> skip;
        }

        printf(<span class="program-code-box-string">"%d "</span>, i);
        i++;

skip:
        ;
    }

    printf(<span class="program-code-box-string">"END"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 4 5 END",
        "1 2 3 4 5 END",
        "1 2 4 END",
        "1 2 3 5 END"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 4 5 END</span>

<span class="keyword">Explanation:</span>
When i = 3, i is incremented to 4 before goto executes.

Therefore, 3 is skipped.

The label skip is reached and the loop continues.

Thus, 1, 2, 4 and 5 are printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion98 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;
    <span class="program-code-box-keyword">int</span> count = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">while</span> (i &lt; <span class="program-code-box-number">5</span>)
    {
        i++;

        <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">3</span>)
            <span class="program-code-box-keyword">continue</span>;

        count++;
    }

    printf(<span class="program-code-box-string">"%d %d"</span>, i, count);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "5 4",
        "5 5",
        "4 4",
        "3 2"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">5 4</span>

<span class="keyword">Explanation:</span>
The loop executes for i = 1, 2, 3, 4 and 5.

When i = 3, continue skips count++.

Therefore, count is incremented only four times.

After the loop, i = 5.

Hence, the output is 5 4.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion99 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">1</span>;

start:

    <span class="program-code-box-keyword">if</span> (i &gt; <span class="program-code-box-number">3</span>)
        <span class="program-code-box-keyword">goto</span> end;

    printf(<span class="program-code-box-string">"%d "</span>, i);

    <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">2</span>)
    {
        i++;
        <span class="program-code-box-keyword">goto</span> start;
    }

    i++;

    <span class="program-code-box-keyword">goto</span> start;

end:
    printf(<span class="program-code-box-string">"END"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 2 3 END",
        "1 2 3 4 END",
        "1 2 END",
        "1 3 END"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 2 3 END</span>

<span class="keyword">Explanation:</span>
For i = 1, 1 is printed and i becomes 2.

For i = 2, 2 is printed.

The special condition increments i again, making i = 3,
and jumps back to start.

Then 3 is printed.

Finally, i becomes 4 and control moves to end.

Therefore, END is printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestion100 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> i = <span class="program-code-box-number">0</span>;
    <span class="program-code-box-keyword">int</span> j = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">for</span> (i = <span class="program-code-box-number">0</span>; i &lt; <span class="program-code-box-number">3</span>; i++)
    {
        <span class="program-code-box-keyword">for</span> (j = <span class="program-code-box-number">0</span>; j &lt; <span class="program-code-box-number">3</span>; j++)
        {
            <span class="program-code-box-keyword">if</span> (i == <span class="program-code-box-number">1</span> &amp;&amp; j == <span class="program-code-box-number">1</span>)
                <span class="program-code-box-keyword">goto</span> end;

            printf(<span class="program-code-box-string">"%d%d "</span>, i, j);
        }
    }

end:
    printf(<span class="program-code-box-string">"END"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "00 01 02 10 END",
        "00 01 02 10 11 END",
        "00 01 02 10 12 20 21 22 END",
        "00 01 02 END"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">00 01 02 10 END</span>

<span class="keyword">Explanation:</span>
The nested loops begin normally.

The values 00, 01 and 02 are printed.

For i = 1 and j = 0, 10 is printed.

When j becomes 1, the condition becomes true.

goto end immediately transfers control outside both loops.

Therefore, 11 and all remaining values are skipped.

Finally, END is printed.</code></pre>

</div>
`
};


const ugcNetCLoopQuestions = [
    ugcNetCLoopQuestion1,
    ugcNetCLoopQuestion2,
    ugcNetCLoopQuestion3,
    ugcNetCLoopQuestion4,
    ugcNetCLoopQuestion5,
    ugcNetCLoopQuestion6,
    ugcNetCLoopQuestion7,
    ugcNetCLoopQuestion8,
    ugcNetCLoopQuestion9,
    ugcNetCLoopQuestion10,
    ugcNetCLoopQuestion11,
    ugcNetCLoopQuestion12,
    ugcNetCLoopQuestion13,
    ugcNetCLoopQuestion14,
    ugcNetCLoopQuestion15,
    ugcNetCLoopQuestion16,
    ugcNetCLoopQuestion17,
    ugcNetCLoopQuestion18,
    ugcNetCLoopQuestion19,
    ugcNetCLoopQuestion20,

    ugcNetCLoopQuestion21,
    ugcNetCLoopQuestion22,
    ugcNetCLoopQuestion23,
    ugcNetCLoopQuestion24,
    ugcNetCLoopQuestion25,
    ugcNetCLoopQuestion26,
    ugcNetCLoopQuestion27,
    ugcNetCLoopQuestion28,
    ugcNetCLoopQuestion29,
    ugcNetCLoopQuestion30,
    ugcNetCLoopQuestion31,
    ugcNetCLoopQuestion32,
    ugcNetCLoopQuestion33,
    ugcNetCLoopQuestion34,
    ugcNetCLoopQuestion35,
    ugcNetCLoopQuestion36,
    ugcNetCLoopQuestion37,
    ugcNetCLoopQuestion38,
    ugcNetCLoopQuestion39,
    ugcNetCLoopQuestion40,
        ugcNetCLoopQuestion41,
    ugcNetCLoopQuestion42,
    ugcNetCLoopQuestion43,
    ugcNetCLoopQuestion44,
    ugcNetCLoopQuestion45,
    ugcNetCLoopQuestion46,
    ugcNetCLoopQuestion47,
    ugcNetCLoopQuestion48,
    ugcNetCLoopQuestion49,
    ugcNetCLoopQuestion50,
    ugcNetCLoopQuestion51,
    ugcNetCLoopQuestion52,
    ugcNetCLoopQuestion53,
    ugcNetCLoopQuestion54,
    ugcNetCLoopQuestion55,
    ugcNetCLoopQuestion56,
    ugcNetCLoopQuestion57,
    ugcNetCLoopQuestion58,
    ugcNetCLoopQuestion59,
    ugcNetCLoopQuestion60,
    ugcNetCLoopQuestion61,
    ugcNetCLoopQuestion62,
    ugcNetCLoopQuestion63,
    ugcNetCLoopQuestion64,
    ugcNetCLoopQuestion65,
    ugcNetCLoopQuestion66,
    ugcNetCLoopQuestion67,
    ugcNetCLoopQuestion68,
    ugcNetCLoopQuestion69,
    ugcNetCLoopQuestion70,
     ugcNetCLoopQuestion71,
    ugcNetCLoopQuestion72,
    ugcNetCLoopQuestion73,
    ugcNetCLoopQuestion74,
    ugcNetCLoopQuestion75,
    ugcNetCLoopQuestion76,
    ugcNetCLoopQuestion77,
    ugcNetCLoopQuestion78,
    ugcNetCLoopQuestion79,
    ugcNetCLoopQuestion80,
    ugcNetCLoopQuestion81,
    ugcNetCLoopQuestion82,
    ugcNetCLoopQuestion83,
    ugcNetCLoopQuestion84,
    ugcNetCLoopQuestion85,
    ugcNetCLoopQuestion86,
    ugcNetCLoopQuestion87,
    ugcNetCLoopQuestion88,
    ugcNetCLoopQuestion89,
    ugcNetCLoopQuestion90,
    ugcNetCLoopQuestion91,
    ugcNetCLoopQuestion92,
    ugcNetCLoopQuestion93,
    ugcNetCLoopQuestion94,
    ugcNetCLoopQuestion95,
    ugcNetCLoopQuestion96,
    ugcNetCLoopQuestion97,
    ugcNetCLoopQuestion98,
    ugcNetCLoopQuestion99,
    ugcNetCLoopQuestion100
];