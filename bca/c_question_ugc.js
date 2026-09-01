
const ugcNetCQuestion1 = {
    question: "Which of the following is NOT a fundamental data type in C?",

    options: [
        "int",
        "float",
        "char",
        "string"
    ],

    answer: "string"
};


const ugcNetCQuestion2 = {
    question: "Consider the declaration: char ch = 'A'; Which of the following is TRUE about ch?",

    options: [
        "It stores the string \"A\"",
        "It stores the ASCII value of A",
        "It stores the address of A",
        "It stores a floating-point value"
    ],

    answer: "It stores the ASCII value of A"
};


const ugcNetCQuestion3 = {
    question: "Which of the following format specifiers is used with scanf() to read a value of type double?",

    options: [
        "%f",
        "%lf",
        "%d",
        "%ld"
    ],

    answer: "%lf"
};


const ugcNetCQuestion4 = {
    question: "What is the result of the following expression in C?\n\n5 / 2",

    options: [
        "2",
        "2.5",
        "3",
        "2.0"
    ],

    answer: "2"
};


const ugcNetCQuestion5 = {
    question: "Which of the following statements about the sizeof operator in C is correct?",

    options: [
        "It returns the size in bits",
        "It returns the size in bytes",
        "It always returns 4",
        "It can be used only with integer variables"
    ],

    answer: "It returns the size in bytes"
};


const ugcNetCQuestion6 = {
    question: "Consider the following declaration:\n\nunsigned int x = -10;\n\nWhat happens according to the rules of C?",

    options: [
        "Compilation error",
        "x stores -10",
        "The value is converted to an unsigned representation",
        "The program terminates"
    ],

    answer: "The value is converted to an unsigned representation"
};


const ugcNetCQuestion7 = {
    question: "Which of the following is the minimum range guaranteed for a signed char in C?",

    options: [
        "0 to 255",
        "-127 to 127",
        "-128 to 127",
        "-255 to 255"
    ],

    answer: "-127 to 127"
};


const ugcNetCQuestion8 = {
    question: "What is the type of the character constant 'A' in C?",

    options: [
        "char",
        "int",
        "float",
        "string"
    ],

    answer: "int"
};


const ugcNetCQuestion9 = {
    question: "Consider the following declarations:\n\nint a = 10;\nfloat b = 3.5;\n\nWhat is the type of the expression a + b?",

    options: [
        "int",
        "char",
        "float",
        "double"
    ],

    answer: "float"
};


const ugcNetCQuestion10 = {
    question: "Which of the following statements about integer constants in C is correct?",

    options: [
        "012 represents decimal 12",
        "012 represents an octal constant",
        "0x12 represents an octal constant",
        "0x12 represents a binary constant"
    ],

    answer: "012 represents an octal constant"
};


const ugcNetCQuestion11 = {
    question: "What is the decimal value of the hexadecimal constant 0x10 in C?",

    options: [
        "10",
        "12",
        "16",
        "20"
    ],

    answer: "16"
};


const ugcNetCQuestion12 = {
    question: "Which of the following declarations is INVALID in C?",

    options: [
        "int x = 10;",
        "float x = 10.5;",
        "char x = 'A';",
        "int 1x = 10;"
    ],

    answer: "int 1x = 10;"
};


const ugcNetCQuestion13 = {
    question: "Consider the following code:\n\nint a = 10;\nfloat b = 3;\nprintf(\"%d\", a / b);\n\nWhich statement is correct?",

    options: [
        "It prints 3",
        "It prints 3.000000",
        "The expression a / b produces a floating-point value, so %d is an incorrect format specifier",
        "Division between int and float is not allowed"
    ],

    answer: "The expression a / b produces a floating-point value, so %d is an incorrect format specifier"
};


const ugcNetCQuestion14 = {
    question: "Which of the following standard floating-point types generally provides the highest precision in C?",

    options: [
        "float",
        "double",
        "long double",
        "int"
    ],

    answer: "long double"
};


const ugcNetCQuestion15 = {
    question: "Consider the following declaration:\n\nconst int x = 10;\n\nWhich of the following operations is NOT allowed?",

    options: [
        "Reading x",
        "Using x in an expression",
        "Printing x",
        "Assigning a new value to x"
    ],

    answer: "Assigning a new value to x"
};


const ugcNetCQuestion16 = {
    question: "Which of the following statements about the C data type char is correct?",

    options: [
        "char can store only alphabetic characters",
        "char is always exactly 8 bits",
        "char is an integer type capable of representing character values",
        "char cannot participate in arithmetic expressions"
    ],

    answer: "char is an integer type capable of representing character values"
};


const ugcNetCQuestion17 = {
    question: "Consider the following declarations:\n\nint x = 5;\nfloat y = 2.0;\n\nWhat is the type of the expression x / y?",

    options: [
        "int",
        "float",
        "double",
        "char"
    ],

    answer: "float"
};


const ugcNetCQuestion18 = {
    question: "Which of the following is an example of explicit type conversion in C?",

    options: [
        "int x = 10.5;",
        "float x = 10;",
        "int x = (int)10.5;",
        "double x = 10;"
    ],

    answer: "int x = (int)10.5;"
};


const ugcNetCQuestion19 = {
    question: "Consider the following code:\n\nint x = 10;\nchar c = 'A';\n\nWhat is the type of the expression x + c?",

    options: [
        "char",
        "int",
        "float",
        "double"
    ],

    answer: "int"
};


const ugcNetCQuestion20 = {
    question: "Which of the following statements about signed integer overflow in C is correct?",

    options: [
        "It always wraps around",
        "It always produces a compilation error",
        "It results in undefined behavior",
        "It automatically converts the value to unsigned"
    ],

    answer: "It results in undefined behavior"
};

const ugcNetCQuestion21 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    printf(<span class="program-code-box-string">"%zu"</span>, <span class="program-code-box-keyword">sizeof</span>(x));

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1",
        "2",
        "4",
        "8"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">4</span>

<span class="keyword">Explanation:</span>
The variable x is of type int.
The sizeof operator returns the size of int in bytes.
On a typical implementation, int occupies 4 bytes.</code></pre>

</div>
`
};


const ugcNetCQuestion22 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    printf(<span class="program-code-box-string">"%zu"</span>, <span class="program-code-box-keyword">sizeof</span>(<span class="program-code-box-keyword">char</span>));

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0",
        "1",
        "2",
        "4"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1</span>

<span class="keyword">Explanation:</span>
The C standard guarantees that sizeof(char) is always 1.
The unit used by sizeof is a byte.</code></pre>

</div>
`
};


const ugcNetCQuestion23 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">5</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">2</span>;

    printf(<span class="program-code-box-string">"%d"</span>, a / b);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "2",
        "2.5",
        "3",
        "2.0"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">2</span>

<span class="keyword">Explanation:</span>
Both a and b are integers.
Therefore, integer division is performed.
The fractional part is discarded, so 5 / 2 gives 2.</code></pre>

</div>
`
};


const ugcNetCQuestion24 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">5</span>;
    <span class="program-code-box-keyword">float</span> b = <span class="program-code-box-number">2.0</span>;

    printf(<span class="program-code-box-string">"%.1f"</span>, a / b);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "2.0",
        "2.5",
        "3.0",
        "Compilation error"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">2.5</span>

<span class="keyword">Explanation:</span>
Since b is a float, a is converted to float.
Therefore, floating-point division is performed.

5 / 2.0 = 2.5</code></pre>

</div>
`
};


const ugcNetCQuestion25 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">0x10</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "10",
        "16",
        "8",
        "20"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">16</span>

<span class="keyword">Explanation:</span>
The prefix 0x indicates a hexadecimal integer constant.

0x10 = 1 × 16 + 0 = 16</code></pre>

</div>
`
};


const ugcNetCQuestion26 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">017</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "17",
        "15",
        "8",
        "7"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">15</span>

<span class="keyword">Explanation:</span>
An integer constant beginning with 0 is interpreted as octal.

017 in octal = 1 × 8 + 7 = 15</code></pre>

</div>
`
};


const ugcNetCQuestion27 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">char</span> ch = <span class="program-code-box-string">'A'</span>;

    printf(<span class="program-code-box-string">"%d"</span>, ch);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "65",
        "97",
        "1"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">65</span>

<span class="keyword">Explanation:</span>
In an ASCII-based implementation, 'A' has the value 65.
The %d format specifier prints the integer value of ch.</code></pre>

</div>
`
};


const ugcNetCQuestion28 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">char</span> ch = <span class="program-code-box-number">65</span>;

    printf(<span class="program-code-box-string">"%c"</span>, ch);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

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

    <pre><code><span class="keyword">Output:</span>
<span class="string">A</span>

<span class="keyword">Explanation:</span>
On an ASCII-based implementation, the integer value 65 corresponds to
the character 'A'.

The %c format specifier displays the character.</code></pre>

</div>
`
};


const ugcNetCQuestion29 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">float</span> x = <span class="program-code-box-number">10.75</span>;
    <span class="program-code-box-keyword">int</span> y;

    y = (<span class="program-code-box-keyword">int</span>)x;

    printf(<span class="program-code-box-string">"%d"</span>, y);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "10",
        "11",
        "10.75",
        "Compilation error"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">10</span>

<span class="keyword">Explanation:</span>
The explicit cast (int) converts the floating-point value 10.75
to an integer.

The fractional part .75 is discarded.</code></pre>

</div>
`
};


const ugcNetCQuestion30 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;
    <span class="program-code-box-keyword">float</span> y = <span class="program-code-box-number">3.5</span>;

    printf(<span class="program-code-box-string">"%.1f"</span>, x + y);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "13",
        "13.0",
        "13.5",
        "Compilation error"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">13.5</span>

<span class="keyword">Explanation:</span>
The integer x is converted to float because y is a float.

Therefore:

10 + 3.5 = 13.5

The %.1f format displays one digit after the decimal point.</code></pre>

</div>
`
};


const ugcNetCQuestion31 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    printf(<span class="program-code-box-string">"%d"</span>, <span class="program-code-box-string">'A'</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "65",
        "97",
        "Compilation error"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">65</span>

<span class="keyword">Explanation:</span>
A character constant such as 'A' has type int in C.
On an ASCII-based implementation, its value is 65.

Therefore, %d prints 65.</code></pre>

</div>
`
};


const ugcNetCQuestion32 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">char</span> a = <span class="program-code-box-number">10</span>;
    <span class="program-code-box-keyword">char</span> b = <span class="program-code-box-number">20</span>;

    printf(<span class="program-code-box-string">"%zu"</span>, <span class="program-code-box-keyword">sizeof</span>(a + b));

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1",
        "2",
        "4",
        "8"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">4</span>

<span class="keyword">Explanation:</span>
Although a and b are char variables, they undergo integer promotion
during the arithmetic operation.

The expression a + b has type int.

On a typical implementation, sizeof(int) is 4 bytes.</code></pre>

</div>
`
};


const ugcNetCQuestion33 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">unsigned int</span> x = <span class="program-code-box-number">10</span>;

    printf(<span class="program-code-box-string">"%u"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "-10",
        "0",
        "10",
        "Undefined"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">10</span>

<span class="keyword">Explanation:</span>
x is an unsigned integer initialized with the value 10.
The %u format specifier is used to display an unsigned integer.</code></pre>

</div>
`
};


const ugcNetCQuestion34 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">double</span> x = <span class="program-code-box-number">10.5</span>;

    printf(<span class="program-code-box-string">"%zu"</span>, <span class="program-code-box-keyword">sizeof</span>(x));

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "2",
        "4",
        "8",
        "16"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">8</span>

<span class="keyword">Explanation:</span>
On a typical C implementation, double occupies 8 bytes.
Therefore sizeof(x) returns 8.</code></pre>

</div>
`
};


const ugcNetCQuestion35 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">char</span> a = <span class="program-code-box-number">5</span>;
    <span class="program-code-box-keyword">short int</span> b = <span class="program-code-box-number">10</span>;

    printf(<span class="program-code-box-string">"%zu"</span>, <span class="program-code-box-keyword">sizeof</span>(a + b));

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1",
        "2",
        "4",
        "8"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">4</span>

<span class="keyword">Explanation:</span>
Both char and short int undergo integer promotion during arithmetic.
They are promoted to int.

Therefore, the expression a + b has type int.</code></pre>

</div>
`
};


const ugcNetCQuestion36 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">float</span> x = <span class="program-code-box-number">10.0f</span>;

    printf(<span class="program-code-box-string">"%zu"</span>, <span class="program-code-box-keyword">sizeof</span>(x));

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1",
        "2",
        "4",
        "8"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">4</span>

<span class="keyword">Explanation:</span>
The suffix f specifies that 10.0f is a float constant.
On a typical implementation, float occupies 4 bytes.</code></pre>

</div>
`
};


const ugcNetCQuestion37 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;
    <span class="program-code-box-keyword">float</span> y = <span class="program-code-box-number">2.5</span>;

    printf(<span class="program-code-box-string">"%zu"</span>, <span class="program-code-box-keyword">sizeof</span>(x + y));

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1",
        "2",
        "4",
        "8"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">4</span>

<span class="keyword">Explanation:</span>
When int and float are used together in an arithmetic expression,
the int value is converted to float.

Therefore, x + y has type float.

On a typical implementation, sizeof(float) is 4 bytes.</code></pre>

</div>
`
};


const ugcNetCQuestion38 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">const int</span> x = <span class="program-code-box-number">10</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0",
        "10",
        "Garbage value",
        "Compilation error"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">10</span>

<span class="keyword">Explanation:</span>
The const keyword prevents modification of x.
It does not prevent the value from being read or printed.

Therefore, 10 is printed.</code></pre>

</div>
`
};


const ugcNetCQuestion39 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">double</span> x = <span class="program-code-box-number">10.0</span>;
    <span class="program-code-box-keyword">float</span> y = <span class="program-code-box-number">5.0f</span>;

    printf(<span class="program-code-box-string">"%zu"</span>, <span class="program-code-box-keyword">sizeof</span>(x + y));

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "2",
        "4",
        "8",
        "16"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">8</span>

<span class="keyword">Explanation:</span>
When a float and a double participate in an arithmetic expression,
the float is converted to double.

Therefore, x + y has type double.

On a typical implementation, double occupies 8 bytes.</code></pre>

</div>
`
};


const ugcNetCQuestion40 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = -<span class="program-code-box-number">1</span>;
    <span class="program-code-box-keyword">unsigned int</span> b = <span class="program-code-box-number">1</span>;

    printf(<span class="program-code-box-string">"%d"</span>, a + b);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0",
        "1",
        "-1",
        "The result is implementation-dependent"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">The result is implementation-dependent</span>

<span class="keyword">Explanation:</span>
The expression combines a signed int and an unsigned int.

The usual arithmetic conversions may convert the signed operand
to unsigned int depending on the relative ranges of the types.

Printing the resulting unsigned value with %d also creates a
format mismatch, so this program does not have a portable,
well-defined output.

Therefore, no single portable output can be specified.</code></pre>

</div>
`
};

const ugcNetCQuestion41 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;
    <span class="program-code-box-keyword">float</span> y = <span class="program-code-box-number">3.0</span>;

    printf(<span class="program-code-box-string">"%.2f"</span>, x / y);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "3.00",
        "3.33",
        "3",
        "Compilation error"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">3.33</span>

<span class="keyword">Explanation:</span>
Since y is a float, x is converted to float.
Therefore, floating-point division is performed.

10 / 3.0 = 3.333...

Using %.2f displays 3.33.</code></pre>

</div>
`
};


const ugcNetCQuestion42 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    printf(<span class="program-code-box-string">"%zu"</span>, <span class="program-code-box-keyword">sizeof</span>(<span class="program-code-box-string">'A'</span>));

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1",
        "2",
        "4",
        "Depends on the character"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">4</span>

<span class="keyword">Explanation:</span>
A character constant such as 'A' has type int in C.
Therefore, sizeof('A') is equivalent to sizeof(int).

On a typical implementation, int occupies 4 bytes.</code></pre>

</div>
`
};


const ugcNetCQuestion43 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">float</span> x = <span class="program-code-box-number">10.5f</span>;

    printf(<span class="program-code-box-string">"%zu"</span>, <span class="program-code-box-keyword">sizeof</span>(<span class="program-code-box-number">10.5</span>));

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "2",
        "4",
        "8",
        "16"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">8</span>

<span class="keyword">Explanation:</span>
A floating-point constant without a suffix, such as 10.5,
has type double in C.

Therefore, sizeof(10.5) is sizeof(double).

On a typical implementation, double occupies 8 bytes.</code></pre>

</div>
`
};


const ugcNetCQuestion44 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    printf(<span class="program-code-box-string">"%zu"</span>, <span class="program-code-box-keyword">sizeof</span>(<span class="program-code-box-number">10.5f</span>));

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1",
        "2",
        "4",
        "8"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">4</span>

<span class="keyword">Explanation:</span>
The suffix f makes 10.5f a float constant.

Therefore, sizeof(10.5f) is sizeof(float).
On a typical implementation, float occupies 4 bytes.</code></pre>

</div>
`
};


const ugcNetCQuestion45 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    printf(<span class="program-code-box-string">"%d"</span>, (<span class="program-code-box-keyword">float</span>)x / <span class="program-code-box-number">4</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "2",
        "2.5",
        "2.50",
        "Compilation error"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Undefined / invalid format usage</span>

<span class="keyword">Explanation:</span>
The cast converts x to float.

Therefore, the expression produces a floating-point result.
However, %d expects an int argument.

Using %d for a floating-point argument results in undefined behavior.</code></pre>

</div>
`
};


const ugcNetCQuestion46 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    printf(<span class="program-code-box-string">"%.1f"</span>, (<span class="program-code-box-keyword">float</span>)x / <span class="program-code-box-number">4</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "2",
        "2.0",
        "2.5",
        "4.0"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">2.5</span>

<span class="keyword">Explanation:</span>
x is explicitly converted to float.

Therefore:

(float)10 / 4 = 2.5

The %.1f format displays one digit after the decimal point.</code></pre>

</div>
`
};


const ugcNetCQuestion47 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10.9</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "10",
        "11",
        "10.9",
        "Compilation error"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">10</span>

<span class="keyword">Explanation:</span>
The floating-point constant 10.9 is converted to int during assignment.

The fractional part is discarded.

Therefore, x becomes 10.</code></pre>

</div>
`
};


const ugcNetCQuestion48 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">char</span> ch = <span class="program-code-box-number">65</span>;

    printf(<span class="program-code-box-string">"%d %c"</span>, ch, ch);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "65 A",
        "A 65",
        "65 65",
        "A A"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">65 A</span>

<span class="keyword">Explanation:</span>
The character variable ch contains the integer value 65.

With %d, its numeric value is printed.
With %c, the corresponding ASCII character A is printed.</code></pre>

</div>
`
};


const ugcNetCQuestion49 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;
    <span class="program-code-box-keyword">char</span> c = <span class="program-code-box-string">'A'</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x + c);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "10",
        "65",
        "75",
        "Compilation error"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">75</span>

<span class="keyword">Explanation:</span>
'A' has the integer value 65 in an ASCII-based implementation.

Therefore:

10 + 65 = 75

The result is of type int.</code></pre>

</div>
`
};


const ugcNetCQuestion50 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;
    <span class="program-code-box-keyword">char</span> c = <span class="program-code-box-string">'A'</span>;

    printf(<span class="program-code-box-string">"%zu"</span>, <span class="program-code-box-keyword">sizeof</span>(x + c));

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1",
        "2",
        "4",
        "8"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">4</span>

<span class="keyword">Explanation:</span>
The character constant participates as an int in the expression.

Therefore, x + c has type int.

On a typical implementation, sizeof(int) is 4 bytes.</code></pre>

</div>
`
};


const ugcNetCQuestion51 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">unsigned int</span> x = <span class="program-code-box-number">10</span>;

    printf(<span class="program-code-box-string">"%u"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "-10",
        "0",
        "10",
        "Undefined"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">10</span>

<span class="keyword">Explanation:</span>
x is an unsigned integer containing the value 10.
The %u format specifier prints an unsigned integer.</code></pre>

</div>
`
};


const ugcNetCQuestion52 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">unsigned int</span> x = <span class="program-code-box-number">0</span>;

    printf(<span class="program-code-box-string">"%u"</span>, x - <span class="program-code-box-number">1</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0",
        "-1",
        "The maximum value of unsigned int",
        "Compilation error"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">The maximum value of unsigned int</span>

<span class="keyword">Explanation:</span>
Unsigned integer arithmetic is performed modulo 2^N,
where N is the number of value bits.

Therefore, subtracting 1 from unsigned zero produces
the maximum representable unsigned int value.</code></pre>

</div>
`
};


const ugcNetCQuestion53 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">signed char</span> x = <span class="program-code-box-number">127</span>;

    x = x + <span class="program-code-box-number">1</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "127",
        "128",
        "-128",
        "Undefined behavior"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Undefined behavior</span>

<span class="keyword">Explanation:</span>
On an implementation where signed char has range -128 to 127,
the value 127 is the maximum representable value.

The expression x + 1 is evaluated as int, but assigning 128
to a signed char cannot be represented.

The conversion to a signed integer type that cannot represent
the value is implementation-defined, so a fixed portable output
cannot be specified.</code></pre>

</div>
`
};


const ugcNetCQuestion54 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;
    <span class="program-code-box-keyword">double</span> y = <span class="program-code-box-number">2.0</span>;

    printf(<span class="program-code-box-string">"%.1f"</span>, x / y);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "2.0",
        "2.5",
        "3.0",
        "Compilation error"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">2.5</span>

<span class="keyword">Explanation:</span>
The presence of double causes the integer operand to be
converted to double.

Therefore:

5 / 2.0 = 2.5

The result is a double value.</code></pre>

</div>
`
};


const ugcNetCQuestion55 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">long double</span> x = <span class="program-code-box-number">10.5L</span>;

    printf(<span class="program-code-box-string">"%zu"</span>, <span class="program-code-box-keyword">sizeof</span>(x));

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "4",
        "8",
        "10",
        "Implementation-dependent"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Implementation-dependent</span>

<span class="keyword">Explanation:</span>
The size of long double is implementation-dependent.
It is not guaranteed by the C standard to have one fixed size.

Therefore, a specific numeric output cannot be universally specified.</code></pre>

</div>
`
};


const ugcNetCQuestion56 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">short</span> x = <span class="program-code-box-number">10</span>;

    printf(<span class="program-code-box-string">"%zu"</span>, <span class="program-code-box-keyword">sizeof</span>(x + <span class="program-code-box-number">1</span>));

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1",
        "2",
        "4",
        "Depends on short size"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">4</span>

<span class="keyword">Explanation:</span>
The short integer undergoes integer promotion before the addition.

Therefore, x + 1 has type int.

On a typical implementation, sizeof(int) is 4 bytes.</code></pre>

</div>
`
};


const ugcNetCQuestion57 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">char</span> x = <span class="program-code-box-number">10</span>;

    printf(<span class="program-code-box-string">"%zu"</span>, <span class="program-code-box-keyword">sizeof</span>(x));

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1",
        "2",
        "4",
        "Depends on compiler"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1</span>

<span class="keyword">Explanation:</span>
The sizeof operator is applied directly to the variable x.
Its type is char.

The C standard guarantees sizeof(char) == 1.</code></pre>

</div>
`
};


const ugcNetCQuestion58 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    printf(<span class="program-code-box-string">"%zu"</span>, <span class="program-code-box-keyword">sizeof</span>(x + <span class="program-code-box-number">1.0</span>));

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1",
        "4",
        "8",
        "Depends on x"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">8</span>

<span class="keyword">Explanation:</span>
The constant 1.0 has type double.

Therefore, x is converted to double during the expression.
The complete expression has type double.

On a typical implementation, sizeof(double) is 8 bytes.</code></pre>

</div>
`
};


const ugcNetCQuestion59 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;
    <span class="program-code-box-keyword">const int</span> y = <span class="program-code-box-number">20</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x + y);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "10",
        "20",
        "30",
        "Compilation error"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">30</span>

<span class="keyword">Explanation:</span>
The const qualifier does not prevent a variable from being used
in an arithmetic expression.

Therefore:

10 + 20 = 30</code></pre>

</div>
`
};


const ugcNetCQuestion60 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">unsigned char</span> x = <span class="program-code-box-number">255</span>;

    printf(<span class="program-code-box-string">"%u"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0",
        "127",
        "255",
        "256"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">255</span>

<span class="keyword">Explanation:</span>
On an implementation where unsigned char can represent values
from 0 to 255, the value 255 is valid.

The %u format specifier displays the unsigned integer value.

Therefore, 255 is printed.</code></pre>

</div>
`
};
const ugcNetCQuestion61 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">10</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">3</span>;

    printf(<span class="program-code-box-string">"%d"</span>, a % b);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1",
        "3",
        "0",
        "10"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1</span>

<span class="keyword">Explanation:</span>
The % operator returns the remainder of integer division.

10 % 3 = 1</code></pre>

</div>
`
};


const ugcNetCQuestion62 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    printf(<span class="program-code-box-string">"%d"</span>, ++x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "10",
        "11",
        "9",
        "12"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">11</span>

<span class="keyword">Explanation:</span>
The prefix increment operator ++x increments x before its value
is used in the expression.

Therefore, x becomes 11 and 11 is printed.</code></pre>

</div>
`
};


const ugcNetCQuestion63 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    printf(<span class="program-code-box-string">"%d "</span>, x++);
    printf(<span class="program-code-box-string">"%d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "10 10",
        "11 11",
        "10 11",
        "11 10"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">10 11</span>

<span class="keyword">Explanation:</span>
The postfix increment operator returns the current value first
and then increments the variable.

The first printf prints 10.
After that, x becomes 11.

The second printf prints 11.</code></pre>

</div>
`
};


const ugcNetCQuestion64 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x--);

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
The postfix decrement operator uses the current value first
and then decrements the variable.

Therefore, 5 is printed.</code></pre>

</div>
`
};


const ugcNetCQuestion65 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">5</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">2</span>;

    printf(<span class="program-code-box-string">"%d"</span>, a + b * <span class="program-code-box-number">3</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "21",
        "11",
        "15",
        "10"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">11</span>

<span class="keyword">Explanation:</span>
Multiplication has higher precedence than addition.

Therefore:

5 + (2 * 3)
= 5 + 6
= 11</code></pre>

</div>
`
};


const ugcNetCQuestion66 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x &gt; <span class="program-code-box-number">5</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

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

    <pre><code><span class="keyword">Output:</span>
<span class="string">1</span>

<span class="keyword">Explanation:</span>
The condition 10 > 5 is true.

In C, a true relational expression evaluates to 1,
while false evaluates to 0.</code></pre>

</div>
`
};


const ugcNetCQuestion67 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x == <span class="program-code-box-number">10</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

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

    <pre><code><span class="keyword">Output:</span>
<span class="string">1</span>

<span class="keyword">Explanation:</span>
The expression x == 10 checks whether x is equal to 10.

Since x contains 10, the condition is true.
A true condition produces 1.</code></pre>

</div>
`
};


const ugcNetCQuestion68 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">0</span>;

    printf(<span class="program-code-box-string">"%d"</span>, !x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0",
        "1",
        "-1",
        "Undefined"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1</span>

<span class="keyword">Explanation:</span>
In C, zero represents false.

The logical NOT operator ! converts false to true.
Therefore:

!0 = 1</code></pre>

</div>
`
};


const ugcNetCQuestion69 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    printf(<span class="program-code-box-string">"%d"</span>, !x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0",
        "1",
        "5",
        "-1"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0</span>

<span class="keyword">Explanation:</span>
Any non-zero value represents true in C.

Therefore, !5 becomes false, which is represented by 0.</code></pre>

</div>
`
};


const ugcNetCQuestion70 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">5</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">10</span>;

    printf(<span class="program-code-box-string">"%d"</span>, a &amp;&amp; b);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

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

    <pre><code><span class="keyword">Output:</span>
<span class="string">1</span>

<span class="keyword">Explanation:</span>
Both 5 and 10 are non-zero values, so both operands are true.

true &amp;&amp; true = true

In C, true is represented by 1.</code></pre>

</div>
`
};


const ugcNetCQuestion71 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">5</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">0</span>;

    printf(<span class="program-code-box-string">"%d"</span>, a || b);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0",
        "1",
        "5",
        "Undefined"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1</span>

<span class="keyword">Explanation:</span>
a is non-zero, so it represents true.
b is zero, so it represents false.

true || false = true

Therefore, 1 is printed.</code></pre>

</div>
`
};


const ugcNetCQuestion72 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    x += <span class="program-code-box-number">5</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

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

    <pre><code><span class="keyword">Output:</span>
<span class="string">15</span>

<span class="keyword">Explanation:</span>
The compound assignment operator += is equivalent to:

x = x + 5

Therefore:

x = 10 + 5
x = 15</code></pre>

</div>
`
};


const ugcNetCQuestion73 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">20</span>;

    x /= <span class="program-code-box-number">4</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "4",
        "5",
        "20",
        "80"
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
The operator /= is equivalent to:

x = x / 4

Therefore:

20 / 4 = 5</code></pre>

</div>
`
};


const ugcNetCQuestion74 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">2</span>;

    x *= <span class="program-code-box-number">5</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "2",
        "5",
        "7",
        "10"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">10</span>

<span class="keyword">Explanation:</span>
The operator *= is equivalent to:

x = x * 5

Therefore:

2 * 5 = 10</code></pre>

</div>
`
};


const ugcNetCQuestion75 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">10</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">20</span>;

    <span class="program-code-box-keyword">int</span> result = (a &lt; b) ? a : b;

    printf(<span class="program-code-box-string">"%d"</span>, result);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "10",
        "20",
        "30",
        "0"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">10</span>

<span class="keyword">Explanation:</span>
The conditional operator checks:

a &lt; b

Since 10 &lt; 20 is true, the first expression a is selected.

Therefore, result becomes 10.</code></pre>

</div>
`
};


const ugcNetCQuestion76 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x &amp; <span class="program-code-box-number">3</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0",
        "1",
        "2",
        "3"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">2</span>

<span class="keyword">Explanation:</span>
The bitwise AND operator works bit by bit.

10 in binary = 1010
3  in binary = 0011

1010
0011
----
0010

Therefore, the result is 2.</code></pre>

</div>
`
};


const ugcNetCQuestion77 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x &lt;&lt; <span class="program-code-box-number">1</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "5",
        "6",
        "10",
        "20"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">10</span>

<span class="keyword">Explanation:</span>
Left shifting by one position multiplies the value by 2
for this positive integer.

5 &lt;&lt; 1 = 5 × 2 = 10</code></pre>

</div>
`
};


const ugcNetCQuestion78 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">20</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x &gt;&gt; <span class="program-code-box-number">2</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "5",
        "10",
        "18",
        "40"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">5</span>

<span class="keyword">Explanation:</span>
20 in binary is 10100.

Right shifting by 2 positions gives:

10100 &gt;&gt; 2 = 00101

Therefore, the result is 5.</code></pre>

</div>
`
};


const ugcNetCQuestion79 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x ^ <span class="program-code-box-number">3</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "8",
        "9",
        "11",
        "13"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">9</span>

<span class="keyword">Explanation:</span>
The bitwise XOR operator compares corresponding bits.

10 = 1010
 3 = 0011

1010
0011
----
1001

1001 in decimal is 9.</code></pre>

</div>
`
};


const ugcNetCQuestion80 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">10</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">20</span>;

    printf(<span class="program-code-box-string">"%d"</span>, a &lt; b ? b : a);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

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

    <pre><code><span class="keyword">Output:</span>
<span class="string">20</span>

<span class="keyword">Explanation:</span>
The conditional expression is:

a &lt; b ? b : a

Since 10 &lt; 20 is true, the first expression b is selected.

Therefore, 20 is printed.</code></pre>

</div>
`
};

const ugcNetCQuestion81 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">5</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">2</span>;

    printf(<span class="program-code-box-string">"%d"</span>, a / b);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "2",
        "2.5",
        "3",
        "0"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">2</span>

<span class="keyword">Explanation:</span>
Both operands are of type int.

Therefore, integer division is performed.

5 / 2 = 2

The fractional part is discarded.</code></pre>

</div>
`
};


const ugcNetCQuestion82 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">float</span> x = <span class="program-code-box-number">5</span> / <span class="program-code-box-number">2</span>;

    printf(<span class="program-code-box-string">"%.1f"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "2.0",
        "2.5",
        "3.0",
        "2"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">2.0</span>

<span class="keyword">Explanation:</span>
The operands 5 and 2 are both integers.

Therefore, integer division occurs first:

5 / 2 = 2

The result 2 is then assigned to float x.

Therefore, x contains 2.0.</code></pre>

</div>
`
};


const ugcNetCQuestion83 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">float</span> x = <span class="program-code-box-number">5.0</span> / <span class="program-code-box-number">2</span>;

    printf(<span class="program-code-box-string">"%.1f"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "2.0",
        "2.5",
        "3.0",
        "2"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">2.5</span>

<span class="keyword">Explanation:</span>
5.0 is a floating-point constant.

Therefore, floating-point division is performed:

5.0 / 2 = 2.5

Hence, x contains 2.5.</code></pre>

</div>
`
};


const ugcNetCQuestion84 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x % <span class="program-code-box-number">4</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0",
        "1",
        "2",
        "4"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">2</span>

<span class="keyword">Explanation:</span>
The % operator returns the remainder.

10 / 4 gives quotient 2 and remainder 2.

Therefore:

10 % 4 = 2</code></pre>

</div>
`
};


const ugcNetCQuestion85 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x &gt;&gt; <span class="program-code-box-number">1</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "2",
        "5",
        "10",
        "20"
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
10 in binary is 1010.

Right shifting by one position gives:

1010 &gt;&gt; 1 = 0101

Therefore, the result is 5.</code></pre>

</div>
`
};


const ugcNetCQuestion86 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">3</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x &lt;&lt; <span class="program-code-box-number">2</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "6",
        "9",
        "12",
        "16"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">12</span>

<span class="keyword">Explanation:</span>
3 in binary is 0011.

Left shifting by 2 positions:

0011 &lt;&lt; 2 = 1100

1100 in decimal is 12.</code></pre>

</div>
`
};


const ugcNetCQuestion87 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">6</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">3</span>;

    printf(<span class="program-code-box-string">"%d"</span>, a &amp; b);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0",
        "1",
        "2",
        "3"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">2</span>

<span class="keyword">Explanation:</span>
6 = 0110
3 = 0011

Bitwise AND:

0110
0011
----
0010

Therefore, the result is 2.</code></pre>

</div>
`
};


const ugcNetCQuestion88 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">6</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">3</span>;

    printf(<span class="program-code-box-string">"%d"</span>, a | b);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "5",
        "6",
        "7",
        "9"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">7</span>

<span class="keyword">Explanation:</span>
6 = 0110
3 = 0011

Bitwise OR:

0110
0011
----
0111

Therefore, the result is 7.</code></pre>

</div>
`
};


const ugcNetCQuestion89 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">6</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">3</span>;

    printf(<span class="program-code-box-string">"%d"</span>, a ^ b);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "3",
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

    <pre><code><span class="keyword">Output:</span>
<span class="string">5</span>

<span class="keyword">Explanation:</span>
6 = 0110
3 = 0011

Bitwise XOR:

0110
0011
----
0101

Therefore, the result is 5.</code></pre>

</div>
`
};


const ugcNetCQuestion90 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x == <span class="program-code-box-number">5</span> &amp;&amp; x &lt; <span class="program-code-box-number">10</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

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

    <pre><code><span class="keyword">Output:</span>
<span class="string">1</span>

<span class="keyword">Explanation:</span>
Both conditions are true:

x == 5  → true
x &lt; 10  → true

Therefore:

true &amp;&amp; true = true

The value of true is 1.</code></pre>

</div>
`
};


const ugcNetCQuestion91 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x == <span class="program-code-box-number">10</span> || x &lt; <span class="program-code-box-number">10</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

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

    <pre><code><span class="keyword">Output:</span>
<span class="string">1</span>

<span class="keyword">Explanation:</span>
The first condition is false:

x == 10 → false

The second condition is true:

x &lt; 10 → true

Therefore:

false || true = true

Hence, 1 is printed.</code></pre>

</div>
`
};


const ugcNetCQuestion92 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">0</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x &amp;&amp; ++x);

    printf(<span class="program-code-box-string">" %d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0 0",
        "0 1",
        "1 1",
        "1 0"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0 0</span>

<span class="keyword">Explanation:</span>
The first operand x is zero.

For the && operator, if the first operand is false,
the second operand is not evaluated because of short-circuit evaluation.

Therefore, ++x is not executed.

x remains 0.</code></pre>

</div>
`
};


const ugcNetCQuestion93 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x || ++x);

    printf(<span class="program-code-box-string">" %d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1 5",
        "1 6",
        "0 5",
        "0 6"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1 5</span>

<span class="keyword">Explanation:</span>
The first operand x is non-zero.

Therefore, x is true and the || operator does not evaluate
the second operand because of short-circuit evaluation.

Hence, ++x is not executed.

x remains 5.</code></pre>

</div>
`
};


const ugcNetCQuestion94 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x ? <span class="program-code-box-number">100</span> : <span class="program-code-box-number">200</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "10",
        "100",
        "200",
        "0"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">100</span>

<span class="keyword">Explanation:</span>
The conditional operator checks whether x is true or false.

Since x contains 10, it is a non-zero value and therefore true.

Hence, the first expression 100 is selected.</code></pre>

</div>
`
};


const ugcNetCQuestion95 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">0</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x ? <span class="program-code-box-number">100</span> : <span class="program-code-box-number">200</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0",
        "100",
        "200",
        "1"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">200</span>

<span class="keyword">Explanation:</span>
The value of x is zero.

In C, zero represents false.

Therefore, the second expression of the conditional operator
is selected.

Hence, 200 is printed.</code></pre>

</div>
`
};


const ugcNetCQuestion96 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x += <span class="program-code-box-number">3</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "3",
        "5",
        "8",
        "15"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">8</span>

<span class="keyword">Explanation:</span>
The expression:

x += 3

is equivalent to:

x = x + 3

Therefore:

x = 5 + 3
x = 8</code></pre>

</div>
`
};


const ugcNetCQuestion97 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">7</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x &gt; <span class="program-code-box-number">5</span> ? <span class="program-code-box-number">1</span> : <span class="program-code-box-number">0</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0",
        "1",
        "5",
        "7"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1</span>

<span class="keyword">Explanation:</span>
The condition is:

7 &gt; 5

This condition is true.

Therefore, the first expression 1 is selected.</code></pre>

</div>
`
};


const ugcNetCQuestion98 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">5</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">5</span>;

    printf(<span class="program-code-box-string">"%d"</span>, a != b);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0",
        "1",
        "5",
        "10"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0</span>

<span class="keyword">Explanation:</span>
The != operator checks whether two values are different.

Here:

a = 5
b = 5

Since both values are equal, the condition a != b is false.

False is represented by 0.</code></pre>

</div>
`
};


const ugcNetCQuestion99 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x &lt;= <span class="program-code-box-number">5</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

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

    <pre><code><span class="keyword">Output:</span>
<span class="string">1</span>

<span class="keyword">Explanation:</span>
The condition checks:

5 &lt;= 5

This is true because 5 is equal to 5.

Therefore, the relational expression evaluates to 1.</code></pre>

</div>
`
};


const ugcNetCQuestion100 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">10</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">20</span>;

    a = a + b;
    b = a - b;
    a = a - b;

    printf(<span class="program-code-box-string">"%d %d"</span>, a, b);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "10 20",
        "20 10",
        "30 20",
        "20 30"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">20 10</span>

<span class="keyword">Explanation:</span>
Initially:

a = 10
b = 20

Step 1:
a = a + b
a = 30

Step 2:
b = a - b
b = 30 - 20 = 10

Step 3:
a = a - b
a = 30 - 10 = 20

Therefore:

a = 20
b = 10</code></pre>

</div>
`
};



const ugcNetCConditionalQuestion1 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">if</span> (x)
        printf(<span class="program-code-box-string">"True"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"False"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "True",
        "False",
        "0",
        "Compilation Error"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">False</span>

<span class="keyword">Explanation:</span>
In C, zero represents false and any non-zero value represents true.

Since x is 0, the condition is false.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion2 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = -<span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (x)
        printf(<span class="program-code-box-string">"True"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"False"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "True",
        "False",
        "-5",
        "Compilation Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">True</span>

<span class="keyword">Explanation:</span>
Any non-zero integer value is considered true in C.

Therefore, -5 makes the condition true.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion3 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x = <span class="program-code-box-number">0</span>)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "10",
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
The expression x = 0 is an assignment, not a comparison.

The value assigned to x is 0.

Since 0 represents false, the else block executes.

Therefore, B is printed.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion4 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x == <span class="program-code-box-number">10</span>)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "10",
        "No output"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">A</span>

<span class="keyword">Explanation:</span>
The comparison x == 10 is true because x contains 10.

Therefore, the if block executes.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion5 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">2</span>)
        <span class="program-code-box-keyword">if</span> (x &lt; <span class="program-code-box-number">10</span>)
            printf(<span class="program-code-box-string">"Yes"</span>);
        <span class="program-code-box-keyword">else</span>
            printf(<span class="program-code-box-string">"No"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "Yes",
        "No",
        "YesNo",
        "No output"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Yes</span>

<span class="keyword">Explanation:</span>
x &gt; 2 is true.

Then x &lt; 10 is also true.

Therefore, Yes is printed.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion6 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">10</span>)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span> <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">3</span>)
        printf(<span class="program-code-box-string">"B"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"C"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "C",
        "ABC"
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
x &gt; 10 is false.

The next condition x &gt; 3 is true.

Therefore, B is printed.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion7 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">if</span> (x++)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    printf(<span class="program-code-box-string">" %d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A 0",
        "B 0",
        "A 1",
        "B 1"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">B 1</span>

<span class="keyword">Explanation:</span>
x++ is post-increment.

The old value 0 is used for the condition.

Therefore, the condition is false and B is printed.

After evaluation, x becomes 1.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion8 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">1</span>;

    <span class="program-code-box-keyword">if</span> (++x)
        printf(<span class="program-code-box-string">"%d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1",
        "2",
        "0",
        "Compilation Error"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">2</span>

<span class="keyword">Explanation:</span>
++x is pre-increment.

Therefore, x becomes 2 before the condition is evaluated.

Since 2 is non-zero, the if block executes.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion9 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (x &amp;&amp; <span class="program-code-box-number">0</span>)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "5",
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
x is non-zero, so it is true.

However, the second operand is 0, which is false.

Therefore:

true &amp;&amp; false = false

Hence, the else block executes.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion10 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (x || <span class="program-code-box-number">0</span>)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "5",
        "0"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">A</span>

<span class="keyword">Explanation:</span>
x is non-zero and therefore true.

For the || operator, true || anything is true.

Hence, A is printed.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion11 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">5</span>)
        <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">15</span>)
            printf(<span class="program-code-box-string">"A"</span>);
        <span class="program-code-box-keyword">else</span>
            printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "No output",
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
The outer condition x &gt; 5 is true.

The inner condition x &gt; 15 is false.

Therefore, the inner else executes.

Hence, B is printed.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion12 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">20</span>)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">5</span>)
            printf(<span class="program-code-box-string">"B"</span>);
        <span class="program-code-box-keyword">else</span>
            printf(<span class="program-code-box-string">"C"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "C",
        "ABC"
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
10 &gt; 20 is false.

The next condition 10 &gt; 5 is true.

Therefore, B is printed.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion13 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">5</span>)
        printf(<span class="program-code-box-string">"A"</span>);
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "AB",
        "Compilation Error"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">AB</span>

<span class="keyword">Explanation:</span>
Without braces, only the first statement belongs to the if statement.

Since x &gt; 5 is true, A is printed.

The second printf statement is outside the if statement,
so B is also printed.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion14 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">20</span>)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);
        printf(<span class="program-code-box-string">"C"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "BC",
        "ABC"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">BC</span>

<span class="keyword">Explanation:</span>
x &gt; 20 is false, so the else statement executes and prints B.

The second printf statement is outside the if-else statement.

Therefore, C is also printed.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion15 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">0</span>)
        printf(<span class="program-code-box-string">"%d"</span>, x &gt; <span class="program-code-box-number">10</span> ? <span class="program-code-box-number">10</span> : <span class="program-code-box-number">20</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "5",
        "10",
        "20",
        "0"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">20</span>

<span class="keyword">Explanation:</span>
First, x &gt; 0 is true.

Then the conditional operator evaluates:

x &gt; 10

Since 5 &gt; 10 is false, the second expression 20 is selected.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion16 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">5</span>)
    {
        <span class="program-code-box-keyword">if</span> (x &lt; <span class="program-code-box-number">20</span>)
        {
            printf(<span class="program-code-box-string">"A"</span>);
        }
        <span class="program-code-box-keyword">else</span>
        {
            printf(<span class="program-code-box-string">"B"</span>);
        }
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "AB",
        "No output"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">A</span>

<span class="keyword">Explanation:</span>
The outer condition 10 &gt; 5 is true.

The inner condition 10 &lt; 20 is also true.

Therefore, A is printed.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion17 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">5</span> &amp;&amp; x &lt; <span class="program-code-box-number">15</span>)
        printf(<span class="program-code-box-string">"Valid"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"Invalid"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "Valid",
        "Invalid",
        "10",
        "Compilation Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Valid</span>

<span class="keyword">Explanation:</span>
Both conditions are true:

10 &gt; 5
10 &lt; 15

Therefore:

true &amp;&amp; true = true

Hence, Valid is printed.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion18 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x &lt; <span class="program-code-box-number">5</span> || x == <span class="program-code-box-number">10</span>)
        printf(<span class="program-code-box-string">"Yes"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"No"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "Yes",
        "No",
        "10",
        "Compilation Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Yes</span>

<span class="keyword">Explanation:</span>
The first condition is false:

10 &lt; 5 → false

The second condition is true:

10 == 10 → true

Therefore:

false || true = true

Hence, Yes is printed.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion19 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (x == <span class="program-code-box-number">5</span>)
        printf(<span class="program-code-box-string">"One"</span>);
    <span class="program-code-box-keyword">else</span> <span class="program-code-box-keyword">if</span> (x == <span class="program-code-box-number">10</span>)
        printf(<span class="program-code-box-string">"Two"</span>);
    <span class="program-code-box-keyword">else</span> <span class="program-code-box-keyword">if</span> (x == <span class="program-code-box-number">15</span>)
        printf(<span class="program-code-box-string">"Three"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"Other"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "One",
        "Two",
        "Three",
        "Other"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">One</span>

<span class="keyword">Explanation:</span>
The first condition x == 5 is true.

Therefore, One is printed and the remaining else-if conditions
are not evaluated.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion20 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x =! <span class="program-code-box-number">10</span>)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "Compilation Error",
        "Undefined Output"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">A</span>

<span class="keyword">Explanation:</span>
The expression =! is parsed as:

x = !10

The logical NOT of 10 is 0.

Therefore:

x = 0

The condition becomes false.

<span class="keyword">Important:</span>
Although x = 0 is assigned, the original expression x =! 10
has the value 0, so the else block should execute.

Therefore, the correct output is B.</code></pre>

</div>
`
};

const ugcNetCConditionalQuestion21 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (a &gt; <span class="program-code-box-number">2</span>)
        <span class="program-code-box-keyword">if</span> (a &gt; <span class="program-code-box-number">7</span>)
            printf(<span class="program-code-box-string">"A"</span>);
        <span class="program-code-box-keyword">else</span>
            printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "AB",
        "No output"
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
The outer condition is true because 5 &gt; 2.

The inner condition 5 &gt; 7 is false.

The else is associated with the nearest unmatched if.

Therefore, B is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion22 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">if</span> (x++)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"%d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "0",
        "1",
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
<span class="string">1</span>

<span class="keyword">Explanation:</span>
x++ uses the old value of x for the condition.

The old value is 0, so the condition is false.

After the evaluation, x becomes 1.

Therefore, 1 is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion23 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">3</span>)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">4</span>)
        printf(<span class="program-code-box-string">"B"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"C"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "A",
        "AB",
        "AC",
        "ABC"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">AB</span>

<span class="keyword">Explanation:</span>
Both conditions are true:

5 &gt; 3
5 &gt; 4

Therefore, A and B are printed.

The else belongs to the second if, whose condition is true.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion24 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">10</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">20</span>;

    <span class="program-code-box-keyword">if</span> (a &gt; b)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "A",
        "B",
        "AB",
        "No output"
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
10 is not greater than 20.

Therefore, the if condition is false and the else block executes.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion25 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">5</span>)
    {
        printf(<span class="program-code-box-string">"A"</span>);
        printf(<span class="program-code-box-string">"B"</span>);
    }
    <span class="program-code-box-keyword">else</span>
    {
        printf(<span class="program-code-box-string">"C"</span>);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "A",
        "B",
        "AB",
        "C"
    ],

    answer: 2,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">AB</span>

<span class="keyword">Explanation:</span>
Since 10 &gt; 5 is true, the complete if block executes.

Both printf statements inside the block are executed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion26 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">2</span>;

    <span class="program-code-box-keyword">if</span> (x == <span class="program-code-box-number">1</span>)
        printf(<span class="program-code-box-string">"One"</span>);
    <span class="program-code-box-keyword">else</span> <span class="program-code-box-keyword">if</span> (x == <span class="program-code-box-number">2</span>)
        printf(<span class="program-code-box-string">"Two"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"Other"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "One",
        "Two",
        "Other",
        "OneTwo"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Two</span>

<span class="keyword">Explanation:</span>
The first condition is false.

The second condition x == 2 is true.

Therefore, Two is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion27 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x &gt; <span class="program-code-box-number">3</span> ? <span class="program-code-box-number">100</span> : <span class="program-code-box-number">200</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "5",
        "100",
        "200",
        "1"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">100</span>

<span class="keyword">Explanation:</span>
The condition 5 &gt; 3 is true.

Therefore, the first expression of the conditional operator is selected.

Hence, 100 is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion28 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">if</span> (!x)
        printf(<span class="program-code-box-string">"True"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"False"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "True",
        "False",
        "0",
        "1"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">True</span>

<span class="keyword">Explanation:</span>
x is 0.

The logical NOT operator converts 0 to 1.

Therefore, !x is true and True is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion29 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x &amp;&amp; x - <span class="program-code-box-number">10</span>)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "A",
        "B",
        "10",
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
x is non-zero.

However, x - 10 equals 0.

Therefore:

true &amp;&amp; false = false

Hence, B is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion30 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">0</span> &amp;&amp; x &lt; <span class="program-code-box-number">10</span>)
        printf(<span class="program-code-box-string">"Valid"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"Invalid"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "Valid",
        "Invalid",
        "5",
        "Compilation Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Valid</span>

<span class="keyword">Explanation:</span>
Both conditions are true:

5 &gt; 0
5 &lt; 10

Therefore, the complete condition evaluates to true.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion31 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x &lt; <span class="program-code-box-number">5</span> || x &gt; <span class="program-code-box-number">8</span>)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "A",
        "B",
        "10",
        "Compilation Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">A</span>

<span class="keyword">Explanation:</span>
10 &lt; 5 is false.

10 &gt; 8 is true.

Therefore:

false || true = true

Hence, A is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion32 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (!(x &gt; <span class="program-code-box-number">10</span>))
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "A",
        "B",
        "5",
        "Compilation Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">A</span>

<span class="keyword">Explanation:</span>
5 &gt; 10 is false.

The ! operator reverses the result.

Therefore, !(false) becomes true.

Hence, A is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion33 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x % <span class="program-code-box-number">2</span> == <span class="program-code-box-number">0</span>)
        printf(<span class="program-code-box-string">"Even"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"Odd"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "Even",
        "Odd",
        "10",
        "0"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Even</span>

<span class="keyword">Explanation:</span>
10 % 2 gives 0.

Therefore, the condition is true and Even is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion34 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">10</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (a != b)
        printf(<span class="program-code-box-string">"Different"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"Same"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "Different",
        "Same",
        "10",
        "Compilation Error"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Same</span>

<span class="keyword">Explanation:</span>
Both a and b contain the value 10.

Therefore, a != b is false and the else block executes.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion35 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x &gt;= <span class="program-code-box-number">10</span>)
        printf(<span class="program-code-box-string">"Yes"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"No"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "Yes",
        "No",
        "10",
        "Compilation Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Yes</span>

<span class="keyword">Explanation:</span>
The >= operator means greater than or equal to.

Since x is exactly 10, the condition is true.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion36 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">5</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (a &gt; b)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span> <span class="program-code-box-keyword">if</span> (a &lt; b)
        printf(<span class="program-code-box-string">"B"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"C"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "A",
        "B",
        "C",
        "AB"
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
a &gt; b is false.

a &lt; b is true because 5 is less than 10.

Therefore, B is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion37 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">1</span>;

    <span class="program-code-box-keyword">if</span> (x == <span class="program-code-box-number">1</span> || x++ == <span class="program-code-box-number">2</span>)
        printf(<span class="program-code-box-string">"%d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "1",
        "2",
        "3",
        "Compilation Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1</span>

<span class="keyword">Explanation:</span>
The first condition x == 1 is true.

The || operator uses short-circuit evaluation.

Therefore, x++ is not evaluated.

Hence, x remains 1.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion38 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">if</span> (x == <span class="program-code-box-number">0</span> &amp;&amp; x++ == <span class="program-code-box-number">0</span>)
        printf(<span class="program-code-box-string">"%d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "0",
        "1",
        "No output",
        "Compilation Error"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1</span>

<span class="keyword">Explanation:</span>
x == 0 is true.

Therefore, the second operand is evaluated.

x++ compares 0 with 0, which is true, and then increments x to 1.

The complete condition is true, so 1 is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion39 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">10</span> &amp;&amp; ++x)
        printf(<span class="program-code-box-string">"%d"</span>, x);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"%d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "5",
        "6",
        "1",
        "Compilation Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">5</span>

<span class="keyword">Explanation:</span>
The first condition x &gt; 10 is false.

Because of short-circuit evaluation of &&,
++x is not evaluated.

Therefore, x remains 5 and the else block executes.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion40 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">10</span>)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">3</span>)
            printf(<span class="program-code-box-string">"B"</span>);
        <span class="program-code-box-keyword">else</span>
            printf(<span class="program-code-box-string">"C"</span>);

    printf(<span class="program-code-box-string">"D"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "B",
        "BD",
        "CD",
        "BCD"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">BD</span>

<span class="keyword">Explanation:</span>
x &gt; 10 is false.

The next condition x &gt; 3 is true.

Therefore, B is printed.

The final printf statement is outside the conditional statement,
so D is also printed.

Hence, the output is BD.</code></pre>
</div>
`
};

const ugcNetCConditionalQuestion41 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">5</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (a &lt; b)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "A",
        "B",
        "AB",
        "No output"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">A</span>

<span class="keyword">Explanation:</span>
Since 5 is less than 10, the condition a &lt; b is true.

Therefore, the if block executes and A is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion42 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">0</span>)
        printf(<span class="program-code-box-string">"Positive"</span>);
    <span class="program-code-box-keyword">else</span> <span class="program-code-box-keyword">if</span> (x &lt; <span class="program-code-box-number">0</span>)
        printf(<span class="program-code-box-string">"Negative"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"Zero"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "Positive",
        "Negative",
        "Zero",
        "Compilation Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Positive</span>

<span class="keyword">Explanation:</span>
The value of x is 10.

Since 10 &gt; 0 is true, the first condition is satisfied.

Therefore, Positive is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion43 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = -<span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">0</span>)
        printf(<span class="program-code-box-string">"P"</span>);
    <span class="program-code-box-keyword">else</span> <span class="program-code-box-keyword">if</span> (x &lt; <span class="program-code-box-number">0</span>)
        printf(<span class="program-code-box-string">"N"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"Z"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "P",
        "N",
        "Z",
        "PN"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">N</span>

<span class="keyword">Explanation:</span>
-10 is less than zero.

Therefore, the second condition is true and N is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion44 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">0</span>)
        printf(<span class="program-code-box-string">"P"</span>);
    <span class="program-code-box-keyword">else</span> <span class="program-code-box-keyword">if</span> (x &lt; <span class="program-code-box-number">0</span>)
        printf(<span class="program-code-box-string">"N"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"Z"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "P",
        "N",
        "Z",
        "0"
    ],

    answer: 2,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Z</span>

<span class="keyword">Explanation:</span>
x is neither greater than zero nor less than zero.

Therefore, x is zero and the final else block executes.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion45 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x % <span class="program-code-box-number">2</span>)
        printf(<span class="program-code-box-string">"Odd"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"Even"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "Odd",
        "Even",
        "10",
        "0"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Even</span>

<span class="keyword">Explanation:</span>
10 % 2 produces 0.

Since zero represents false, the else block executes.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion46 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">7</span>;

    <span class="program-code-box-keyword">if</span> (x % <span class="program-code-box-number">2</span>)
        printf(<span class="program-code-box-string">"Odd"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"Even"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "Odd",
        "Even",
        "7",
        "Compilation Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Odd</span>

<span class="keyword">Explanation:</span>
7 % 2 produces 1.

Any non-zero value is true in C.

Therefore, the if block executes.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion47 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">5</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (a == b)
        printf(<span class="program-code-box-string">"Equal"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"Not Equal"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "Equal",
        "Not Equal",
        "5",
        "Compilation Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Equal</span>

<span class="keyword">Explanation:</span>
Both variables contain the value 5.

Therefore, a == b evaluates to true.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion48 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x != <span class="program-code-box-number">10</span>)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "A",
        "B",
        "10",
        "No output"
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
x contains 10.

Therefore, x != 10 is false and the else block executes.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion49 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x &gt;= <span class="program-code-box-number">10</span> &amp;&amp; x &lt;= <span class="program-code-box-number">20</span>)
        printf(<span class="program-code-box-string">"Inside"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"Outside"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "Inside",
        "Outside",
        "10",
        "Compilation Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Inside</span>

<span class="keyword">Explanation:</span>
Both conditions are true:

10 &gt;= 10
10 &lt;= 20

Therefore, the complete && expression is true.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion50 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">25</span>;

    <span class="program-code-box-keyword">if</span> (x &lt; <span class="program-code-box-number">10</span> || x &gt; <span class="program-code-box-number">20</span>)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "A",
        "B",
        "25",
        "Compilation Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">A</span>

<span class="keyword">Explanation:</span>
25 &lt; 10 is false.

25 &gt; 20 is true.

Therefore:

false || true = true

Hence, A is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion51 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">0</span>)
    {
        <span class="program-code-box-keyword">if</span> (x % <span class="program-code-box-number">2</span> == <span class="program-code-box-number">0</span>)
            printf(<span class="program-code-box-string">"Even"</span>);
        <span class="program-code-box-keyword">else</span>
            printf(<span class="program-code-box-string">"Odd"</span>);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "Even",
        "Odd",
        "5",
        "No output"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Odd</span>

<span class="keyword">Explanation:</span>
5 is greater than zero, so the outer if executes.

5 % 2 gives 1, which is non-zero.

Therefore, the number is considered odd.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion52 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x)
        <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">20</span>)
            printf(<span class="program-code-box-string">"A"</span>);
        <span class="program-code-box-keyword">else</span>
            printf(<span class="program-code-box-string">"B"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"C"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "A",
        "B",
        "C",
        "BC"
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
The first if condition x is true because x is 10.

The nested condition x &gt; 20 is false.

The nearest else belongs to the nested if.

Therefore, B is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion53 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">if</span> (x &amp;&amp; x++)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"%d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "0",
        "1",
        "A",
        "Compilation Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0</span>

<span class="keyword">Explanation:</span>
The first operand x is 0, which is false.

Due to short-circuit evaluation of &&, x++ is not evaluated.

Therefore, x remains 0.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion54 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">1</span>;

    <span class="program-code-box-keyword">if</span> (x || x++)
        printf(<span class="program-code-box-string">"%d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "1",
        "2",
        "0",
        "Compilation Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1</span>

<span class="keyword">Explanation:</span>
x is 1, which is true.

For the || operator, if the first operand is true,
the second operand is not evaluated.

Therefore, x++ is not executed and x remains 1.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion55 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (x == <span class="program-code-box-number">5</span>)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    printf(<span class="program-code-box-string">"C"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "A",
        "AC",
        "BC",
        "ABC"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">AC</span>

<span class="keyword">Explanation:</span>
x == 5 is true, so A is printed.

The final printf statement is outside the if-else statement.

Therefore, C is also printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion56 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x &gt; <span class="program-code-box-number">5</span> ? x : <span class="program-code-box-number">0</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "0",
        "5",
        "10",
        "1"
    ],

    answer: 2,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">10</span>

<span class="keyword">Explanation:</span>
The condition 10 &gt; 5 is true.

Therefore, the first expression x is selected.

Hence, 10 is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion57 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    printf(<span class="program-code-box-string">"%d"</span>, x &lt; <span class="program-code-box-number">5</span> ? <span class="program-code-box-number">1</span> : <span class="program-code-box-number">2</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "1",
        "2",
        "10",
        "0"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">2</span>

<span class="keyword">Explanation:</span>
10 &lt; 5 is false.

Therefore, the second expression of the conditional operator is selected.

Hence, 2 is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion58 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">0</span>)
    {
        <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">10</span>)
            printf(<span class="program-code-box-string">"A"</span>);
        <span class="program-code-box-keyword">else</span>
            printf(<span class="program-code-box-string">"B"</span>);
    }
    <span class="program-code-box-keyword">else</span>
    {
        printf(<span class="program-code-box-string">"C"</span>);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "A",
        "B",
        "C",
        "BC"
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
The outer condition x &gt; 0 is true.

The inner condition x &gt; 10 is false.

Therefore, the inner else block executes.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion59 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">3</span>;

    <span class="program-code-box-keyword">if</span> (x &amp; <span class="program-code-box-number">1</span>)
        printf(<span class="program-code-box-string">"Odd"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"Even"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "Odd",
        "Even",
        "3",
        "Compilation Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Odd</span>

<span class="keyword">Explanation:</span>
The bitwise AND operation is performed:

3 &amp; 1 = 1

Since the result is non-zero, the condition is true.

Therefore, Odd is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion60 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">4</span>;

    <span class="program-code-box-keyword">if</span> (x &amp; <span class="program-code-box-number">1</span>)
        printf(<span class="program-code-box-string">"Odd"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"Even"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "Odd",
        "Even",
        "4",
        "1"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Even</span>

<span class="keyword">Explanation:</span>
The bitwise AND operation is:

4 &amp; 1 = 0

Since the result is zero, the condition is false.

Therefore, the else block executes and Even is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion61 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">5</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (a &gt; b)
        printf(<span class="program-code-box-string">"%d"</span>, a);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"%d"</span>, b);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "5",
        "10",
        "15",
        "0"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">10</span>

<span class="keyword">Explanation:</span>
The condition a &gt; b means 5 &gt; 10, which is false.

Therefore, the else block executes and 10 is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion62 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">20</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (a &gt; b)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "A",
        "B",
        "AB",
        "Compilation Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">A</span>

<span class="keyword">Explanation:</span>
20 &gt; 10 is true.

Therefore, the if block executes and A is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion63 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x == <span class="program-code-box-number">10</span>)
        printf(<span class="program-code-box-string">"One"</span>);
    <span class="program-code-box-keyword">else</span> <span class="program-code-box-keyword">if</span> (x == <span class="program-code-box-number">20</span>)
        printf(<span class="program-code-box-string">"Two"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"Other"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "One",
        "Two",
        "Other",
        "OneTwo"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">One</span>

<span class="keyword">Explanation:</span>
The first condition x == 10 is true.

Therefore, the first if block executes and the remaining else-if
and else blocks are skipped.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion64 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">20</span>;

    <span class="program-code-box-keyword">if</span> (x == <span class="program-code-box-number">10</span>)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span> <span class="program-code-box-keyword">if</span> (x == <span class="program-code-box-number">20</span>)
        printf(<span class="program-code-box-string">"B"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"C"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "A",
        "B",
        "C",
        "ABC"
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
x is 20.

The first condition is false, but x == 20 is true.

Therefore, B is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion65 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">30</span>;

    <span class="program-code-box-keyword">if</span> (x &lt; <span class="program-code-box-number">10</span>)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span> <span class="program-code-box-keyword">if</span> (x &lt; <span class="program-code-box-number">20</span>)
        printf(<span class="program-code-box-string">"B"</span>);
    <span class="program-code-box-keyword">else</span> <span class="program-code-box-keyword">if</span> (x &lt; <span class="program-code-box-number">30</span>)
        printf(<span class="program-code-box-string">"C"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"D"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "A",
        "B",
        "C",
        "D"
    ],

    answer: 3,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">D</span>

<span class="keyword">Explanation:</span>
30 is not less than 10, 20, or 30.

Therefore, all conditions are false and the final else block executes.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion66 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">5</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (a &lt; b &amp;&amp; b &gt; <span class="program-code-box-number">0</span>)
        printf(<span class="program-code-box-string">"True"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"False"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "True",
        "False",
        "1",
        "0"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">True</span>

<span class="keyword">Explanation:</span>
Both conditions are true:

5 &lt; 10
10 &gt; 0

Therefore, true &amp;&amp; true gives true.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion67 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">5</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (a &gt; b || b == <span class="program-code-box-number">10</span>)
        printf(<span class="program-code-box-string">"Yes"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"No"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "Yes",
        "No",
        "10",
        "Compilation Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Yes</span>

<span class="keyword">Explanation:</span>
a &gt; b is false.

b == 10 is true.

Therefore:

false || true = true

Hence, Yes is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion68 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (!(x &gt; <span class="program-code-box-number">10</span>))
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "A",
        "B",
        "5",
        "0"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">A</span>

<span class="keyword">Explanation:</span>
5 &gt; 10 is false.

The ! operator reverses false to true.

Therefore, A is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion69 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (x = <span class="program-code-box-number">0</span>)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "A",
        "B",
        "5",
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
The expression x = 0 is an assignment, not a comparison.

The value assigned to x is 0.

Since 0 represents false in C, the else block executes.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion70 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (x = <span class="program-code-box-number">10</span>)
        printf(<span class="program-code-box-string">"%d"</span>, x);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"Zero"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "5",
        "10",
        "Zero",
        "Compilation Error"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">10</span>

<span class="keyword">Explanation:</span>
x = 10 assigns 10 to x.

The value of the assignment expression is 10.

Any non-zero value is considered true in C.

Therefore, 10 is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion71 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">10</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">20</span>;
    <span class="program-code-box-keyword">int</span> c = <span class="program-code-box-number">15</span>;

    <span class="program-code-box-keyword">if</span> (a &gt; b)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span> <span class="program-code-box-keyword">if</span> (b &gt; c)
        printf(<span class="program-code-box-string">"B"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"C"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "A",
        "B",
        "C",
        "ABC"
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
10 &gt; 20 is false.

Then 20 &gt; 15 is true.

Therefore, B is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion72 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">10</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">20</span>;
    <span class="program-code-box-keyword">int</span> c = <span class="program-code-box-number">30</span>;

    <span class="program-code-box-keyword">if</span> (a &gt; b &amp;&amp; a &gt; c)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span> <span class="program-code-box-keyword">if</span> (b &gt; a &amp;&amp; b &gt; c)
        printf(<span class="program-code-box-string">"B"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"C"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "A",
        "B",
        "C",
        "No output"
    ],

    answer: 2,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">C</span>

<span class="keyword">Explanation:</span>
30 is greater than both 10 and 20.

Therefore, neither of the first two conditions is true.

The final else block executes.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion73 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">15</span>;

    <span class="program-code-box-keyword">if</span> (x &gt;= <span class="program-code-box-number">10</span>)
        <span class="program-code-box-keyword">if</span> (x &lt;= <span class="program-code-box-number">20</span>)
            printf(<span class="program-code-box-string">"Inside"</span>);
        <span class="program-code-box-keyword">else</span>
            printf(<span class="program-code-box-string">"Outside"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "Inside",
        "Outside",
        "No output",
        "Compilation Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Inside</span>

<span class="keyword">Explanation:</span>
15 &gt;= 10 is true.

15 &lt;= 20 is also true.

Therefore, Inside is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion74 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">25</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">10</span>)
    {
        <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">20</span>)
            printf(<span class="program-code-box-string">"A"</span>);
        <span class="program-code-box-keyword">else</span>
            printf(<span class="program-code-box-string">"B"</span>);
    }
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"C"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "A",
        "B",
        "C",
        "ABC"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">A</span>

<span class="keyword">Explanation:</span>
25 &gt; 10 is true.

The nested condition 25 &gt; 20 is also true.

Therefore, A is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion75 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">8</span>;

    <span class="program-code-box-keyword">switch</span> (x)
    {
        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">5</span>:
            printf(<span class="program-code-box-string">"Five"</span>);
            <span class="program-code-box-keyword">break</span>;

        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">8</span>:
            printf(<span class="program-code-box-string">"Eight"</span>);
            <span class="program-code-box-keyword">break</span>;

        <span class="program-code-box-keyword">default</span>:
            printf(<span class="program-code-box-string">"Other"</span>);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "Five",
        "Eight",
        "Other",
        "FiveEight"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Eight</span>

<span class="keyword">Explanation:</span>
The value of x is 8.

Therefore, case 8 is matched and Eight is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion76 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">2</span>;

    <span class="program-code-box-keyword">switch</span> (x)
    {
        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">1</span>:
            printf(<span class="program-code-box-string">"A"</span>);

        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">2</span>:
            printf(<span class="program-code-box-string">"B"</span>);

        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">3</span>:
            printf(<span class="program-code-box-string">"C"</span>);
            <span class="program-code-box-keyword">break</span>;

        <span class="program-code-box-keyword">default</span>:
            printf(<span class="program-code-box-string">"D"</span>);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "B",
        "BC",
        "BCD",
        "ABCD"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">BC</span>

<span class="keyword">Explanation:</span>
case 2 is matched.

There is no break after case 2, so execution falls through
to case 3.

case 3 prints C and then break terminates the switch.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion77 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">switch</span> (x)
    {
        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">5</span>:
            printf(<span class="program-code-box-string">"A"</span>);
            <span class="program-code-box-keyword">break</span>;

        <span class="program-code-box-keyword">default</span>:
            printf(<span class="program-code-box-string">"B"</span>);
    }

    printf(<span class="program-code-box-string">"C"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "A",
        "AC",
        "ABC",
        "BC"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">AC</span>

<span class="keyword">Explanation:</span>
case 5 is matched and A is printed.

The break exits the switch statement.

The printf statement after the switch then prints C.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion78 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">15</span>;

    printf(<span class="program-code-box-string">"%s"</span>,
           x % <span class="program-code-box-number">2</span> == <span class="program-code-box-number">0</span>
           ? <span class="program-code-box-string">"Even"</span>
           : <span class="program-code-box-string">"Odd"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "Even",
        "Odd",
        "15",
        "0"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Odd</span>

<span class="keyword">Explanation:</span>
15 % 2 gives 1.

Therefore, the condition is false and the second expression
of the conditional operator is selected.

Hence, Odd is printed.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion79 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">5</span>)
        printf(<span class="program-code-box-string">"A"</span>);

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">8</span>)
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"C"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "A",
        "AB",
        "AC",
        "ABC"
    ],

    answer: 1,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">AB</span>

<span class="keyword">Explanation:</span>
The first if condition is true, so A is printed.

The second if condition is also true, so B is printed.

The else belongs to the second if statement and is skipped.</code></pre>
</div>
`
};


const ugcNetCConditionalQuestion80 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">
    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">2</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">3</span>;
    <span class="program-code-box-keyword">int</span> c = <span class="program-code-box-number">4</span>;

    <span class="program-code-box-keyword">if</span> (a &lt; b)
    {
        <span class="program-code-box-keyword">if</span> (b &lt; c)
            printf(<span class="program-code-box-string">"ABC"</span>);
        <span class="program-code-box-keyword">else</span>
            printf(<span class="program-code-box-string">"AB"</span>);
    }
    <span class="program-code-box-keyword">else</span>
    {
        printf(<span class="program-code-box-string">"C"</span>);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>
</div>
`,

    options: [
        "ABC",
        "AB",
        "C",
        "BC"
    ],

    answer: 0,

    solution: `
<div class="code-box">
    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">ABC</span>

<span class="keyword">Explanation:</span>
First, 2 &lt; 3 is true.

Therefore, the outer if block executes.

Then, 3 &lt; 4 is also true.

Therefore, ABC is printed.</code></pre>
</div>
`
};
const ugcNetCConditionalQuestion81 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">if</span> (x)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "0",
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
In C, zero represents false.

Since x is 0, the if condition is false and the else block executes.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion82 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = -<span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (x)
        printf(<span class="program-code-box-string">"True"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"False"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "True",
        "False",
        "-5",
        "Compilation Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">True</span>

<span class="keyword">Explanation:</span>
In C, every non-zero value is considered true.

Therefore, -5 is treated as true.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion83 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">5</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (a &gt; b)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        <span class="program-code-box-keyword">if</span> (a &lt; b)
            printf(<span class="program-code-box-string">"B"</span>);
        <span class="program-code-box-keyword">else</span>
            printf(<span class="program-code-box-string">"C"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "C",
        "BC"
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
5 &gt; 10 is false.

The else-if condition 5 &lt; 10 is true.

Therefore, B is printed.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion84 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">5</span>)
        <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">15</span>)
            printf(<span class="program-code-box-string">"A"</span>);
        <span class="program-code-box-keyword">else</span>
            printf(<span class="program-code-box-string">"B"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"C"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "C",
        "No output"
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
The outer condition 10 &gt; 5 is true.

The inner condition 10 &gt; 15 is false.

The else is associated with the nearest unmatched if.

Therefore, B is printed.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion85 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">5</span>)
    {
        <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">15</span>)
            printf(<span class="program-code-box-string">"A"</span>);
    }
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "No output",
        "AB"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">No output</span>

<span class="keyword">Explanation:</span>
The outer condition 10 &gt; 5 is true.

Therefore, the else block is skipped.

The inner condition 10 &gt; 15 is false, so its printf is not executed.

Hence, nothing is printed.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion86 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (x++ &gt; <span class="program-code-box-number">5</span>)
        printf(<span class="program-code-box-string">"%d"</span>, x);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"%d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "5",
        "6",
        "4",
        "Compilation Error"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">6</span>

<span class="keyword">Explanation:</span>
x++ is a post-increment expression.

First, 5 is used for comparison:

5 &gt; 5 is false.

After the comparison, x becomes 6.

Therefore, the else block prints 6.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion87 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (++x &gt; <span class="program-code-box-number">5</span>)
        printf(<span class="program-code-box-string">"%d"</span>, x);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"%d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "5",
        "6",
        "7",
        "Compilation Error"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">6</span>

<span class="keyword">Explanation:</span>
++x is a pre-increment expression.

x becomes 6 before comparison.

6 &gt; 5 is true.

Therefore, the if block executes and 6 is printed.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion88 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">5</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (a &lt; b &amp;&amp; ++a &lt; b)
        printf(<span class="program-code-box-string">"%d"</span>, a);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"%d"</span>, b);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "5",
        "6",
        "10",
        "11"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">6</span>

<span class="keyword">Explanation:</span>
First condition:

5 &lt; 10 → true.

Therefore, the second condition is evaluated.

++a changes a from 5 to 6.

6 &lt; 10 → true.

Thus, the if block prints 6.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion89 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">5</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (a &gt; b &amp;&amp; ++a &lt; b)
        printf(<span class="program-code-box-string">"%d"</span>, a);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"%d"</span>, a);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "5",
        "6",
        "10",
        "Compilation Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">5</span>

<span class="keyword">Explanation:</span>
The first condition a &gt; b is false.

Because && uses short-circuit evaluation, the second condition
++a &lt; b is not evaluated.

Therefore, a remains 5.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion90 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">5</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (a &lt; b || ++a &gt; b)
        printf(<span class="program-code-box-string">"%d"</span>, a);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"%d"</span>, b);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "5",
        "6",
        "10",
        "11"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">5</span>

<span class="keyword">Explanation:</span>
The first condition a &lt; b is true.

Because || uses short-circuit evaluation, ++a &gt; b is not evaluated.

Therefore, a remains 5.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion91 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x % <span class="program-code-box-number">2</span>)
        printf(<span class="program-code-box-string">"Odd"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"Even"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "Odd",
        "Even",
        "10",
        "0"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Even</span>

<span class="keyword">Explanation:</span>
10 % 2 gives 0.

Zero is false in C.

Therefore, the else block executes and Even is printed.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion92 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">7</span>;

    <span class="program-code-box-keyword">if</span> (x % <span class="program-code-box-number">2</span>)
        printf(<span class="program-code-box-string">"Odd"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"Even"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "Odd",
        "Even",
        "7",
        "1"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Odd</span>

<span class="keyword">Explanation:</span>
7 % 2 gives 1.

Any non-zero value is true in C.

Therefore, the if block executes.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion93 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    printf(<span class="program-code-box-string">"%d"</span>,
           x &gt; <span class="program-code-box-number">5</span> ? <span class="program-code-box-number">100</span> : <span class="program-code-box-number">200</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "10",
        "100",
        "200",
        "105"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">100</span>

<span class="keyword">Explanation:</span>
10 &gt; 5 is true.

Therefore, the first expression of the conditional operator is selected.

Hence, 100 is printed.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion94 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">10</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">20</span>;

    <span class="program-code-box-keyword">if</span> (a &gt; b)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"%d"</span>, a &lt; b ? a : b);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "10",
        "20",
        "A",
        "30"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">10</span>

<span class="keyword">Explanation:</span>
10 &gt; 20 is false.

Therefore, the else block executes.

The condition a &lt; b is true, so the conditional operator returns a,
which is 10.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion95 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">if</span> (x == <span class="program-code-box-number">0</span>)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "0",
        "No output"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">A</span>

<span class="keyword">Explanation:</span>
The expression x == 0 compares x with zero.

Since x is zero, the condition is true.

Therefore, A is printed.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion96 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (x != <span class="program-code-box-number">5</span>)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "5",
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
The != operator checks whether two values are different.

Since x is equal to 5, x != 5 is false.

Therefore, the else block executes.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion97 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">1</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">2</span>;
    <span class="program-code-box-keyword">int</span> c = <span class="program-code-box-number">3</span>;

    <span class="program-code-box-keyword">if</span> (a &lt; b &lt; c)
        printf(<span class="program-code-box-string">"True"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"False"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "True",
        "False",
        "Compilation Error",
        "1"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">True</span>

<span class="keyword">Explanation:</span>
C does not interpret a &lt; b &lt; c as a mathematical chained comparison.

First:

a &lt; b
1 &lt; 2 → 1

Then:

1 &lt; c
1 &lt; 3 → true

Therefore, True is printed.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion98 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">5</span>)
    {
        printf(<span class="program-code-box-string">"A"</span>);

        <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">15</span>)
            printf(<span class="program-code-box-string">"B"</span>);
        <span class="program-code-box-keyword">else</span>
            printf(<span class="program-code-box-string">"C"</span>);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "AB",
        "AC",
        "ABC"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">AC</span>

<span class="keyword">Explanation:</span>
10 &gt; 5 is true, so A is printed.

Then 10 &gt; 15 is false.

Therefore, the inner else executes and C is printed.

Hence, the output is AC.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion99 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x &amp;&amp; x - <span class="program-code-box-number">10</span>)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "10",
        "0"
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
The first operand x is 10, which is true.

The second operand x - 10 is 0, which is false.

Therefore:

true &amp;&amp; false = false

Hence, B is printed.</code></pre>

</div>
`
};


const ugcNetCConditionalQuestion100 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">if</span> (x || <span class="program-code-box-number">5</span>)
        printf(<span class="program-code-box-string">"True"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"False"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "True",
        "False",
        "5",
        "0"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">True</span>

<span class="keyword">Explanation:</span>
x is 0, which is false.

The second operand is 5, which is non-zero and therefore true.

Thus:

false || true = true

Hence, True is printed.</code></pre>

</div>
`
};

const ugcNetCDifficultQuestion101 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (a++ &amp;&amp; ++a)
        printf(<span class="program-code-box-string">"%d"</span>, a);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"%d"</span>, a);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "5",
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

    <pre><code><span class="keyword">Output:</span>
<span class="string">7</span>

<span class="keyword">Explanation:</span>
Initially a = 5.

a++ returns 5, which is true.
Then a becomes 6.

Since the first operand of && is true,
the second operand is evaluated.

++a changes a from 6 to 7.

Both conditions are true, so the if block executes.

Therefore, 7 is printed.</code></pre>

</div>
`
};


const ugcNetCDifficultQuestion102 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">if</span> (a++ || ++a)
        printf(<span class="program-code-box-string">"%d"</span>, a);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"%d"</span>, a);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0",
        "1",
        "2",
        "3"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">2</span>

<span class="keyword">Explanation:</span>
Initially a = 0.

a++ returns 0, which is false.
After evaluation, a becomes 1.

Because the first operand of || is false,
the second operand is evaluated.

++a changes a from 1 to 2.

The complete condition becomes true.

Therefore, 2 is printed.</code></pre>

</div>
`
};


const ugcNetCDifficultQuestion103 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (a &gt; <span class="program-code-box-number">5</span>)
        <span class="program-code-box-keyword">if</span> (a &gt; <span class="program-code-box-number">15</span>)
            printf(<span class="program-code-box-string">"A"</span>);
        <span class="program-code-box-keyword">else</span>
            <span class="program-code-box-keyword">if</span> (a == <span class="program-code-box-number">10</span>)
                printf(<span class="program-code-box-string">"B"</span>);
            <span class="program-code-box-keyword">else</span>
                printf(<span class="program-code-box-string">"C"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "C",
        "No output"
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
10 &gt; 5 is true.

10 &gt; 15 is false.

Therefore, the else associated with the nearest if executes.

Then:

10 == 10 → true.

Hence, B is printed.</code></pre>

</div>
`
};


const ugcNetCDifficultQuestion104 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">3</span>;

    <span class="program-code-box-keyword">if</span> (x == <span class="program-code-box-number">3</span>)
        printf(<span class="program-code-box-string">"%d"</span>, x++);

    printf(<span class="program-code-box-string">"%d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "33",
        "34",
        "44",
        "43"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">34</span>

<span class="keyword">Explanation:</span>
Initially x = 3.

The condition x == 3 is true.

x++ prints the current value 3,
then increments x to 4.

The next printf prints 4.

Therefore, the output is 34.</code></pre>

</div>
`
};


const ugcNetCDifficultQuestion105 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">5</span> ? x &lt; <span class="program-code-box-number">20</span> : x &gt; <span class="program-code-box-number">20</span>)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "10",
        "Compilation Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">A</span>

<span class="keyword">Explanation:</span>
The conditional operator is evaluated first.

x &gt; 5 is true.

Therefore, the expression becomes:

x &lt; 20

10 &lt; 20 is true.

Hence, the if block executes.</code></pre>

</div>
`
};


const ugcNetCDifficultQuestion106 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">5</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (a++ == b++)
        printf(<span class="program-code-box-string">"%d %d"</span>, a, b);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"%d %d"</span>, a, b);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "5 5",
        "6 6",
        "5 6",
        "6 5"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">6 6</span>

<span class="keyword">Explanation:</span>
a++ returns 5 and then a becomes 6.

b++ returns 5 and then b becomes 6.

Therefore:

5 == 5 → true

The if block executes.

Both variables are now 6.</code></pre>

</div>
`
};


const ugcNetCDifficultQuestion107 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">4</span>;

    <span class="program-code-box-keyword">if</span> (x &amp; <span class="program-code-box-number">1</span>)
        printf(<span class="program-code-box-string">"Odd"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"Even"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "Odd",
        "Even",
        "4",
        "Compilation Error"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Even</span>

<span class="keyword">Explanation:</span>
4 in binary is 100.

100 &amp; 001 = 000.

The result is zero, which is false.

Therefore, Even is printed.</code></pre>

</div>
`
};


const ugcNetCDifficultQuestion108 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">7</span>;

    <span class="program-code-box-keyword">if</span> (x &amp;&amp; !x)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "7",
        "0"
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
x is non-zero, so x is true.

!x therefore becomes false.

Thus:

true &amp;&amp; false = false

Therefore, B is printed.</code></pre>

</div>
`
};


const ugcNetCDifficultQuestion109 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">if</span> (!x)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "0",
        "Compilation Error"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">A</span>

<span class="keyword">Explanation:</span>
x is zero.

In C, !0 evaluates to 1.

Therefore, the if condition is true and A is printed.</code></pre>

</div>
`
};


const ugcNetCDifficultQuestion110 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">3</span>;

    <span class="program-code-box-keyword">if</span> (a == <span class="program-code-box-number">3</span>)
    {
        <span class="program-code-box-keyword">if</span> (a++ == <span class="program-code-box-number">3</span>)
            printf(<span class="program-code-box-string">"%d"</span>, a);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "3",
        "4",
        "5",
        "No output"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">4</span>

<span class="keyword">Explanation:</span>
a == 3 is true.

Then a++ == 3 compares 3 with 3, so the condition is true.

After the comparison, a becomes 4.

Therefore, 4 is printed.</code></pre>

</div>
`
};


const ugcNetCDifficultQuestion111 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">2</span>;

    <span class="program-code-box-keyword">if</span> (x++ == <span class="program-code-box-number">2</span> || x++ == <span class="program-code-box-number">3</span>)
        printf(<span class="program-code-box-string">"%d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "2",
        "3",
        "4",
        "5"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">3</span>

<span class="keyword">Explanation:</span>
Initially x = 2.

x++ returns 2, so:

2 == 2 → true

After that x becomes 3.

Since the left operand of || is true,
the right operand is not evaluated.

Therefore, x remains 3.</code></pre>

</div>
`
};


const ugcNetCDifficultQuestion112 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">2</span>;

    <span class="program-code-box-keyword">if</span> (x++ == <span class="program-code-box-number">3</span> &amp;&amp; x++ == <span class="program-code-box-number">3</span>)
        printf(<span class="program-code-box-string">"%d"</span>, x);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"%d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "2",
        "3",
        "4",
        "5"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">3</span>

<span class="keyword">Explanation:</span>
Initially x = 2.

x++ returns 2.

2 == 3 is false.

Because the left operand of &amp;&amp; is false,
the second operand is not evaluated.

However, the first x++ has already incremented x to 3.

Therefore, the else block prints 3.</code></pre>

</div>
`
};


const ugcNetCDifficultQuestion113 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x = <span class="program-code-box-number">0</span>)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "10",
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
The expression x = 0 is an assignment, not a comparison.

The assignment stores 0 in x.

The value of the assignment expression is 0,
which is false.

Therefore, the else block executes.</code></pre>

</div>
`
};


const ugcNetCDifficultQuestion114 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (x = <span class="program-code-box-number">5</span>)
        printf(<span class="program-code-box-string">"%d"</span>, x);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"False"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "10",
        "5",
        "False",
        "Compilation Error"
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
x = 5 assigns 5 to x.

The value of the assignment expression is 5.

Since 5 is non-zero, the condition is true.

Therefore, 5 is printed.</code></pre>

</div>
`
};


const ugcNetCDifficultQuestion115 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">5</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">if</span> (a &gt; b)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span> <span class="program-code-box-keyword">if</span> (a &lt; b)
        printf(<span class="program-code-box-string">"B"</span>);
    <span class="program-code-box-keyword">else</span> <span class="program-code-box-keyword">if</span> (a == b)
        printf(<span class="program-code-box-string">"C"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"D"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "C",
        "D"
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
5 &gt; 10 is false.

Next:

5 &lt; 10 is true.

Therefore, B is printed and the remaining conditions are skipped.</code></pre>

</div>
`
};


const ugcNetCDifficultQuestion116 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">0</span>)
        printf(<span class="program-code-box-string">"P"</span>);
    <span class="program-code-box-keyword">if</span> (x &gt; <span class="program-code-box-number">3</span>)
        printf(<span class="program-code-box-string">"Q"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"R"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "P",
        "PQ",
        "PR",
        "PQR"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">PQ</span>

<span class="keyword">Explanation:</span>
The first if is independent and 5 &gt; 0 is true,
so P is printed.

The second if checks 5 &gt; 3, which is also true.

Therefore, Q is printed.

The else belongs to the second if.</code></pre>

</div>
`
};


const ugcNetCDifficultQuestion117 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">1</span>;

    <span class="program-code-box-keyword">if</span> (x == <span class="program-code-box-number">1</span> &amp;&amp; x++ == <span class="program-code-box-number">1</span>)
        printf(<span class="program-code-box-string">"%d"</span>, x);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"%d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "1",
        "2",
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
<span class="string">2</span>

<span class="keyword">Explanation:</span>
x == 1 is true.

Therefore, the second operand is evaluated.

x++ == 1 is true.

After x++ executes, x becomes 2.

Both conditions are true, so the if block prints 2.</code></pre>

</div>
`
};


const ugcNetCDifficultQuestion118 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">if</span> (x++ &amp;&amp; x++)
        printf(<span class="program-code-box-string">"%d"</span>, x);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"%d"</span>, x);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "0",
        "1",
        "2",
        "3"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1</span>

<span class="keyword">Explanation:</span>
Initially x = 0.

x++ returns 0, which is false.

After evaluation, x becomes 1.

Because the first operand of &amp;&amp; is false,
the second x++ is not evaluated.

Therefore, the else block prints 1.</code></pre>

</div>
`
};


const ugcNetCDifficultQuestion119 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">10</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">20</span>;

    <span class="program-code-box-keyword">if</span> (a &gt; b ? a : b)
        printf(<span class="program-code-box-string">"TRUE"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"FALSE"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "TRUE",
        "FALSE",
        "10",
        "20"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">TRUE</span>

<span class="keyword">Explanation:</span>
The conditional operator checks:

a &gt; b

10 &gt; 20 is false.

Therefore, the second expression b is selected.

b is 20.

Since 20 is non-zero, the if condition is true.

Therefore, TRUE is printed.</code></pre>

</div>
`
};


const ugcNetCDifficultQuestion120 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> a = <span class="program-code-box-number">0</span>;
    <span class="program-code-box-keyword">int</span> b = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">if</span> (a || b &amp;&amp; a)
        printf(<span class="program-code-box-string">"A"</span>);
    <span class="program-code-box-keyword">else</span>
        printf(<span class="program-code-box-string">"B"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "AB",
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
The precedence of &amp;&amp; is higher than ||.

Therefore, the expression is evaluated as:

a || (b &amp;&amp; a)

Substituting values:

0 || (5 &amp;&amp; 0)

5 is true and 0 is false.

Therefore:

0 || 0 → 0

The complete condition is false.

Hence, B is printed.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion1 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">2</span>;

    <span class="program-code-box-keyword">switch</span> (x)
    {
        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">1</span>:
            printf(<span class="program-code-box-string">"A "</span>);

        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">2</span>:
            printf(<span class="program-code-box-string">"B "</span>);

        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">3</span>:
            printf(<span class="program-code-box-string">"C "</span>);
            <span class="program-code-box-keyword">break</span>;

        <span class="program-code-box-keyword">default</span>:
            printf(<span class="program-code-box-string">"D "</span>);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "B C",
        "A B C",
        "B C D",
        "B"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">B C</span>

<span class="keyword">Explanation:</span>
The value of x is 2, so execution starts from case 2.
There is no break after case 2, so case 3 is also executed.
The break statement then terminates the switch statement.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion2 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">switch</span> (x)
    {
        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">5</span>:
            printf(<span class="program-code-box-string">"Five"</span>);
            <span class="program-code-box-keyword">break</span>;

        <span class="program-code-box-keyword">default</span>:
            printf(<span class="program-code-box-string">"Default"</span>);
    }

    printf(<span class="program-code-box-string">" End"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "Five",
        "Five End",
        "Default End",
        "End"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Five End</span>

<span class="keyword">Explanation:</span>
case 5 matches the value of x.
The break exits only the switch statement.
Execution continues with the statement following the switch.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion3 = {
    question: "Which of the following statements about the controlling expression of a switch statement in C is correct?",

    options: [
        "It can be of any scalar type",
        "It must be an integer type",
        "It must be a floating-point type",
        "It must be a string"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span>
<span class="string">It must be an integer type</span>

<span class="keyword">Explanation:</span>
In C, the controlling expression of switch must have
an integer type. Floating-point expressions are not
permitted as the controlling expression.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion4 = {
    question: "What will happen when two case labels in the same switch statement have identical constant expressions?",

    options: [
        "The first case is selected",
        "The second case is selected",
        "The compiler reports a constraint violation",
        "Both cases are executed"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span>
<span class="string">The compiler reports a constraint violation</span>

<span class="keyword">Explanation:</span>
The values of case labels within one switch statement
must be unique. Duplicate case values are not permitted.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion5 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">switch</span> (x)
    {
        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">0</span>:
            printf(<span class="program-code-box-string">"A"</span>);

        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">1</span>:
            printf(<span class="program-code-box-string">"B"</span>);
            <span class="program-code-box-keyword">break</span>;

        <span class="program-code-box-keyword">default</span>:
            printf(<span class="program-code-box-string">"C"</span>);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "AB",
        "ABC"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">AB</span>

<span class="keyword">Explanation:</span>
case 0 matches first and prints A.
Since there is no break, execution falls through to case 1.
case 1 prints B and then break terminates the switch.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion6 = {
    question: "Which of the following can be used as a case label in a C switch statement?",

    options: [
        "case 10:",
        "case 10 + 5:",
        "case 'A':",
        "All of the above"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span>
<span class="string">All of the above</span>

<span class="keyword">Explanation:</span>
A case label must be an integer constant expression.
Integer constants, character constants and expressions
such as 10 + 5 are valid.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion7 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">char</span> ch = <span class="program-code-box-string">'A'</span>;

    <span class="program-code-box-keyword">switch</span> (ch)
    {
        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">65</span>:
            printf(<span class="program-code-box-string">"X"</span>);
            <span class="program-code-box-keyword">break</span>;

        <span class="program-code-box-keyword">default</span>:
            printf(<span class="program-code-box-string">"Y"</span>);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "X",
        "Y",
        "65",
        "Compilation error"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">X</span>

<span class="keyword">Explanation:</span>
The character constant 'A' has an integer value corresponding
to its character code. On the usual execution character set,
'A' is 65, so case 65 matches.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion8 = {
    question: "Which statement about the default label in a C switch statement is correct?",

    options: [
        "default must always be the first label",
        "default must always be the last label",
        "default is optional",
        "default must always contain break"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span>
<span class="string">default is optional</span>

<span class="keyword">Explanation:</span>
The default label is optional.
It executes when no case label matches the switch expression.
It does not have to appear first or last.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion9 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">3</span>;

    <span class="program-code-box-keyword">switch</span> (x)
    {
        <span class="program-code-box-keyword">default</span>:
            printf(<span class="program-code-box-string">"D "</span>);

        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">3</span>:
            printf(<span class="program-code-box-string">"C "</span>);
            <span class="program-code-box-keyword">break</span>;
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "D C",
        "C",
        "D",
        "Compilation error"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">C</span>

<span class="keyword">Explanation:</span>
default is not automatically executed first.
The matching case 3 is selected, so only C is printed.
The position of default does not determine execution.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion10 = {
    question: "Which of the following expressions is NOT valid as the controlling expression of a switch statement in C?",

    options: [
        "int x",
        "char ch",
        "enum value",
        "float x"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span>
<span class="string">float x</span>

<span class="keyword">Explanation:</span>
The controlling expression of switch must have integer type.
A floating-point expression such as float x is not valid.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion11 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">2</span>;

    <span class="program-code-box-keyword">switch</span> (x + <span class="program-code-box-number">1</span>)
    {
        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">2</span>:
            printf(<span class="program-code-box-string">"A"</span>);
            <span class="program-code-box-keyword">break</span>;

        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">3</span>:
            printf(<span class="program-code-box-string">"B"</span>);
            <span class="program-code-box-keyword">break</span>;

        <span class="program-code-box-keyword">default</span>:
            printf(<span class="program-code-box-string">"C"</span>);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "C",
        "Compilation error"
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
The switch expression is x + 1.
Since x is 2, the expression evaluates to 3.
Therefore, case 3 is selected.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion12 = {
    question: "Which statement is TRUE regarding a break statement inside a switch statement?",

    options: [
        "It terminates the entire program",
        "It terminates the switch statement",
        "It skips only the next case",
        "It restarts the switch statement"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span>
<span class="string">It terminates the switch statement</span>

<span class="keyword">Explanation:</span>
A break statement transfers control to the statement
immediately following the switch statement.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion13 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">1</span>;

    <span class="program-code-box-keyword">switch</span> (x)
    {
        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">1</span>:
        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">2</span>:
        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">3</span>:
            printf(<span class="program-code-box-string">"Low"</span>);
            <span class="program-code-box-keyword">break</span>;

        <span class="program-code-box-keyword">default</span>:
            printf(<span class="program-code-box-string">"High"</span>);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "Low",
        "High",
        "Low High",
        "Compilation error"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Low</span>

<span class="keyword">Explanation:</span>
Multiple case labels can share the same statement block.
Since x is 1, execution enters case 1 and continues
until the break statement.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion14 = {
    question: "Which of the following is a valid case label in C?",

    options: [
        "case 2.5:",
        "case x:",
        "case 2 + 3:",
        "case 2 > 1:"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span>
<span class="string">case 2 + 3:</span>

<span class="keyword">Explanation:</span>
A case label must be an integer constant expression.
2 + 3 is an integer constant expression.

2.5 is floating point, while x is not necessarily
an integer constant expression.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion15 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">10</span>;

    <span class="program-code-box-keyword">switch</span> (x)
    {
        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">5</span>:
            printf(<span class="program-code-box-string">"A"</span>);
            <span class="program-code-box-keyword">break</span>;

        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">10</span>:
            printf(<span class="program-code-box-string">"B"</span>);

        <span class="program-code-box-keyword">default</span>:
            printf(<span class="program-code-box-string">"C"</span>);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "B",
        "C",
        "BC",
        "ABC"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">BC</span>

<span class="keyword">Explanation:</span>
case 10 matches and prints B.
There is no break after case 10.
Execution falls through to default and prints C.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion16 = {
    question: "In C, which statement about case labels is correct?",

    options: [
        "Case labels must be in ascending order",
        "Case labels must be consecutive",
        "Case labels may appear in any order",
        "Case labels must begin from zero"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span>
<span class="string">Case labels may appear in any order</span>

<span class="keyword">Explanation:</span>
C does not require case labels to be sorted or consecutive.
The compiler determines the appropriate case based on
the value of the controlling expression.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion17 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">2</span>;

    <span class="program-code-box-keyword">switch</span> (x)
    {
        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">1</span>:
            printf(<span class="program-code-box-string">"One "</span>);
            <span class="program-code-box-keyword">break</span>;

        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">2</span>:
            printf(<span class="program-code-box-string">"Two "</span>);
            <span class="program-code-box-keyword">break</span>;

        <span class="program-code-box-keyword">default</span>:
            printf(<span class="program-code-box-string">"Default "</span>);
    }

    printf(<span class="program-code-box-string">"End"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "Two",
        "Two End",
        "Default End",
        "End"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Two End</span>

<span class="keyword">Explanation:</span>
case 2 matches and prints Two.
The break exits the switch, not the main function.
Therefore, execution continues with printf("End").</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion18 = {
    question: "Which of the following statements about nested switch statements in C is correct?",

    options: [
        "Nested switch statements are not allowed",
        "A switch can contain another switch",
        "Only one switch is allowed in a program",
        "Nested switch is allowed only inside default"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span>
<span class="string">A switch can contain another switch</span>

<span class="keyword">Explanation:</span>
C permits nested switch statements.
A switch statement may appear inside the body of
another switch case.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion19 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">2</span>;

    <span class="program-code-box-keyword">switch</span> (x)
    {
        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">1</span>:
            printf(<span class="program-code-box-string">"A"</span>);
            <span class="program-code-box-keyword">break</span>;

        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">2</span>:
            <span class="program-code-box-keyword">switch</span> (x + <span class="program-code-box-number">1</span>)
            {
                <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">3</span>:
                    printf(<span class="program-code-box-string">"B"</span>);
                    <span class="program-code-box-keyword">break</span>;
            }
            <span class="program-code-box-keyword">break</span>;
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "AB",
        "No output"
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
The outer switch selects case 2.
The inner switch evaluates x + 1, which is 3.
Therefore, inner case 3 executes and prints B.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion20 = {
    question: "Which of the following is NOT permitted for a case label in standard C?",

    options: [
        "case 10:",
        "case 'A':",
        "case 2 * 5:",
        "case 10.0:"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span>
<span class="string">case 10.0:</span>

<span class="keyword">Explanation:</span>
A case label requires an integer constant expression.
10.0 is a floating-point constant and therefore is not valid.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion21 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">4</span>;

    <span class="program-code-box-keyword">switch</span> (x)
    {
        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">1</span> + <span class="program-code-box-number">3</span>:
            printf(<span class="program-code-box-string">"A"</span>);
            <span class="program-code-box-keyword">break</span>;

        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">5</span> - <span class="program-code-box-number">1</span>:
            printf(<span class="program-code-box-string">"B"</span>);
            <span class="program-code-box-keyword">break</span>;

        <span class="program-code-box-keyword">default</span>:
            printf(<span class="program-code-box-string">"C"</span>);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "B",
        "C",
        "Compilation error"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span>
<span class="string">Compilation error</span>

<span class="keyword">Explanation:</span>
Both case expressions evaluate to 4:

1 + 3 = 4
5 - 1 = 4

Therefore, duplicate case values occur, which violates
the constraints of the switch statement.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion22 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">1</span>;

    <span class="program-code-box-keyword">switch</span> (x)
    {
        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">1</span>:
            printf(<span class="program-code-box-string">"A "</span>);

        <span class="program-code-box-keyword">default</span>:
            printf(<span class="program-code-box-string">"D "</span>);

        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">2</span>:
            printf(<span class="program-code-box-string">"B "</span>);
    }

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A",
        "A D",
        "A D B",
        "D B"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">A D B</span>

<span class="keyword">Explanation:</span>
case 1 matches and prints A.
There is no break, so execution continues sequentially.
The default label does not stop execution.
Therefore D and then B are printed.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion23 = {
    question: "Which of the following best describes the relationship between case labels and execution order in a C switch statement?",

    options: [
        "Execution always begins from the first case",
        "Execution begins from the matching case and may fall through",
        "Execution always begins from default",
        "Cases execute according to their numerical order"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span>
<span class="string">Execution begins from the matching case and may fall through</span>

<span class="keyword">Explanation:</span>
The switch selects the matching case.
After entering that case, execution continues normally
until a break, return, or end of the switch is reached.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion24 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">3</span>;

    <span class="program-code-box-keyword">switch</span> (x)
    {
        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">1</span>:
        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">3</span>:
            printf(<span class="program-code-box-string">"X"</span>);
            <span class="program-code-box-keyword">break</span>;

        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">2</span>:
            printf(<span class="program-code-box-string">"Y"</span>);
            <span class="program-code-box-keyword">break</span>;
    }

    printf(<span class="program-code-box-string">"Z"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "X",
        "XZ",
        "YZ",
        "XYZ"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">XZ</span>

<span class="keyword">Explanation:</span>
x is 3, so case 3 is selected.
It shares the statement block with case 1.
X is printed and break exits the switch.
Then Z is printed.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion25 = {
    question: "Which statement about a switch statement in C is FALSE?",

    options: [
        "The default label is optional",
        "Case labels must have unique values",
        "The controlling expression can be a float",
        "Fall-through can occur without break"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span>
<span class="string">The controlling expression can be a float</span>

<span class="keyword">Explanation:</span>
The controlling expression of a C switch must have
integer type. A floating-point expression is not allowed.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion26 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">2</span>;

    <span class="program-code-box-keyword">switch</span> (x)
    {
        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">1</span>:
            printf(<span class="program-code-box-string">"1"</span>);
            <span class="program-code-box-keyword">break</span>;

        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">2</span>:
            printf(<span class="program-code-box-string">"2"</span>);
            <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;

        <span class="program-code-box-keyword">default</span>:
            printf(<span class="program-code-box-string">"3"</span>);
    }

    printf(<span class="program-code-box-string">"4"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "2",
        "24",
        "234",
        "4"
    ],

    answer: 0,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">2</span>

<span class="keyword">Explanation:</span>
case 2 executes and prints 2.
The return statement immediately terminates main().
Therefore, the statement after the switch is not executed.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion27 = {
    question: "Which of the following is TRUE about the scope of a case label in C?",

    options: [
        "A case label creates a new block scope",
        "A case label itself does not create a new scope",
        "Each case automatically creates a function",
        "Each case creates a separate switch statement"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span>
<span class="string">A case label itself does not create a new scope</span>

<span class="keyword">Explanation:</span>
A case label is a label associated with a statement.
It does not itself introduce a separate block scope.
Braces can be used when a separate block is required.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion28 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">switch</span> (x)
    {
        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">0</span>:
            printf(<span class="program-code-box-string">"A "</span>);

        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">1</span>:
            printf(<span class="program-code-box-string">"B "</span>);

        <span class="program-code-box-keyword">default</span>:
            printf(<span class="program-code-box-string">"C "</span>);
    }

    printf(<span class="program-code-box-string">"D"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "A B",
        "A B C",
        "A B C D",
        "A D"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">A B C D</span>

<span class="keyword">Explanation:</span>
case 0 matches and prints A.
There is no break after case 0 or case 1.
Therefore execution continues through case 1 and default.
Finally D is printed after the switch.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion29 = {
    question: "Consider the following C statement: switch(x) { case 1: ... case 1: ... } What is the most appropriate conclusion?",

    options: [
        "Both case blocks execute",
        "The first case has higher priority",
        "The second case has higher priority",
        "The program violates the constraints of the C language"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Correct Answer:</span>
<span class="string">The program violates the constraints of the C language</span>

<span class="keyword">Explanation:</span>
Two case labels within the same switch statement
cannot have the same constant value.
Therefore, duplicate case values result in a diagnostic.</code></pre>

</div>
`
};

const ugcNetCSwitchQuestion30 = {
    question: "What will be the output of the following C program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-preprocessor">#include</span> <span class="program-code-box-header-file">&lt;stdio.h&gt;</span>

<span class="program-code-box-keyword">int</span> main()
{
    <span class="program-code-box-keyword">int</span> x = <span class="program-code-box-number">2</span>;

    <span class="program-code-box-keyword">switch</span> (x)
    {
        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">1</span>:
            printf(<span class="program-code-box-string">"A"</span>);
            <span class="program-code-box-keyword">break</span>;

        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">2</span>:
            printf(<span class="program-code-box-string">"B"</span>);

        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">3</span>:
            printf(<span class="program-code-box-string">"C"</span>);

        <span class="program-code-box-keyword">case</span> <span class="program-code-box-number">4</span>:
            printf(<span class="program-code-box-string">"D"</span>);
            <span class="program-code-box-keyword">break</span>;

        <span class="program-code-box-keyword">default</span>:
            printf(<span class="program-code-box-string">"E"</span>);
    }

    printf(<span class="program-code-box-string">"F"</span>);

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-number">0</span>;
}</code></pre>

</div>
`,

    options: [
        "B C D",
        "B C D F",
        "B F",
        "B C D E F"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">B C D F</span>

<span class="keyword">Explanation:</span>
x is 2, so execution starts at case 2.
There is no break after cases 2 and 3.
Therefore cases 2, 3 and 4 execute sequentially.
The break after case 4 exits the switch.
Finally F is printed.</code></pre>

</div>
`
};

const ugcNetCBasicsQuestions = [



    ugcNetCQuestion1,
    ugcNetCQuestion2,
    ugcNetCQuestion3,
    ugcNetCQuestion4,
    ugcNetCQuestion5,
    ugcNetCQuestion6,
    ugcNetCQuestion7,
    ugcNetCQuestion8,
    ugcNetCQuestion9,
    ugcNetCQuestion10,
    ugcNetCQuestion11,
    ugcNetCQuestion12,
    ugcNetCQuestion13,
    ugcNetCQuestion14,
    ugcNetCQuestion15,
    ugcNetCQuestion16,
    ugcNetCQuestion17,
    ugcNetCQuestion18,
    ugcNetCQuestion19,
    ugcNetCQuestion20,
    ugcNetCQuestion21,
    ugcNetCQuestion22,
    ugcNetCQuestion23,
    ugcNetCQuestion24,
    ugcNetCQuestion25,
    ugcNetCQuestion26,
    ugcNetCQuestion27,
    ugcNetCQuestion28,
    ugcNetCQuestion29,
    ugcNetCQuestion30,
    ugcNetCQuestion31,
    ugcNetCQuestion32,
    ugcNetCQuestion33,
    ugcNetCQuestion34,
    ugcNetCQuestion35,
    ugcNetCQuestion36,
    ugcNetCQuestion37,
    ugcNetCQuestion38,
    ugcNetCQuestion39,
    ugcNetCQuestion40,
    ugcNetCQuestion41,
    ugcNetCQuestion42,
    ugcNetCQuestion43,
    ugcNetCQuestion44,
    ugcNetCQuestion45,
    ugcNetCQuestion46,
    ugcNetCQuestion47,
    ugcNetCQuestion48,
    ugcNetCQuestion49,
    ugcNetCQuestion50,
    ugcNetCQuestion51,
    ugcNetCQuestion52,
    ugcNetCQuestion53,
    ugcNetCQuestion54,
    ugcNetCQuestion55,
    ugcNetCQuestion56,
    ugcNetCQuestion57,
    ugcNetCQuestion58,
    ugcNetCQuestion59,
    ugcNetCQuestion60,
    ugcNetCQuestion61,
    ugcNetCQuestion62,
    ugcNetCQuestion63,
    ugcNetCQuestion64,
    ugcNetCQuestion65,
    ugcNetCQuestion66,
    ugcNetCQuestion67,
    ugcNetCQuestion68,
    ugcNetCQuestion69,
    ugcNetCQuestion70,
    ugcNetCQuestion71,
    ugcNetCQuestion72,
    ugcNetCQuestion73,
    ugcNetCQuestion74,
    ugcNetCQuestion75,
    ugcNetCQuestion76,
    ugcNetCQuestion77,
    ugcNetCQuestion78,
    ugcNetCQuestion79,
    ugcNetCQuestion80,
    ugcNetCQuestion81,
    ugcNetCQuestion82,
    ugcNetCQuestion83,
    ugcNetCQuestion84,
    ugcNetCQuestion85,
    ugcNetCQuestion86,
    ugcNetCQuestion87,
    ugcNetCQuestion88,
    ugcNetCQuestion89,
    ugcNetCQuestion90,
    ugcNetCQuestion91,
    ugcNetCQuestion92,
    ugcNetCQuestion93,
    ugcNetCQuestion94,
    ugcNetCQuestion95,
    ugcNetCQuestion96,
    ugcNetCQuestion97,
    ugcNetCQuestion98,
    ugcNetCQuestion99,
    ugcNetCQuestion100,

     ugcNetCConditionalQuestion1,
    ugcNetCConditionalQuestion2,
    ugcNetCConditionalQuestion3,
    ugcNetCConditionalQuestion4,
    ugcNetCConditionalQuestion5,
    ugcNetCConditionalQuestion6,
    ugcNetCConditionalQuestion7,
    ugcNetCConditionalQuestion8,
    ugcNetCConditionalQuestion9,
    ugcNetCConditionalQuestion10,

    ugcNetCConditionalQuestion11,
    ugcNetCConditionalQuestion12,
    ugcNetCConditionalQuestion13,
    ugcNetCConditionalQuestion14,
    ugcNetCConditionalQuestion15,
    ugcNetCConditionalQuestion16,
    ugcNetCConditionalQuestion17,
    ugcNetCConditionalQuestion18,
    ugcNetCConditionalQuestion19,
    ugcNetCConditionalQuestion20,

    ugcNetCConditionalQuestion21,
    ugcNetCConditionalQuestion22,
    ugcNetCConditionalQuestion23,
    ugcNetCConditionalQuestion24,
    ugcNetCConditionalQuestion25,
    ugcNetCConditionalQuestion26,
    ugcNetCConditionalQuestion27,
    ugcNetCConditionalQuestion28,
    ugcNetCConditionalQuestion29,
    ugcNetCConditionalQuestion30,

    ugcNetCConditionalQuestion31,
    ugcNetCConditionalQuestion32,
    ugcNetCConditionalQuestion33,
    ugcNetCConditionalQuestion34,
    ugcNetCConditionalQuestion35,
    ugcNetCConditionalQuestion36,
    ugcNetCConditionalQuestion37,
    ugcNetCConditionalQuestion38,
    ugcNetCConditionalQuestion39,
    ugcNetCConditionalQuestion40,

    ugcNetCConditionalQuestion41,
    ugcNetCConditionalQuestion42,
    ugcNetCConditionalQuestion43,
    ugcNetCConditionalQuestion44,
    ugcNetCConditionalQuestion45,
    ugcNetCConditionalQuestion46,
    ugcNetCConditionalQuestion47,
    ugcNetCConditionalQuestion48,
    ugcNetCConditionalQuestion49,
    ugcNetCConditionalQuestion50,

    ugcNetCConditionalQuestion51,
    ugcNetCConditionalQuestion52,
    ugcNetCConditionalQuestion53,
    ugcNetCConditionalQuestion54,
    ugcNetCConditionalQuestion55,
    ugcNetCConditionalQuestion56,
    ugcNetCConditionalQuestion57,
    ugcNetCConditionalQuestion58,
    ugcNetCConditionalQuestion59,
    ugcNetCConditionalQuestion60,

    ugcNetCConditionalQuestion61,
    ugcNetCConditionalQuestion62,
    ugcNetCConditionalQuestion63,
    ugcNetCConditionalQuestion64,
    ugcNetCConditionalQuestion65,
    ugcNetCConditionalQuestion66,
    ugcNetCConditionalQuestion67,
    ugcNetCConditionalQuestion68,
    ugcNetCConditionalQuestion69,
    ugcNetCConditionalQuestion70,

    ugcNetCConditionalQuestion71,
    ugcNetCConditionalQuestion72,
    ugcNetCConditionalQuestion73,
    ugcNetCConditionalQuestion74,
    ugcNetCConditionalQuestion75,
    ugcNetCConditionalQuestion76,
    ugcNetCConditionalQuestion77,
    ugcNetCConditionalQuestion78,
    ugcNetCConditionalQuestion79,
    ugcNetCConditionalQuestion80,

    ugcNetCConditionalQuestion81,
    ugcNetCConditionalQuestion82,
    ugcNetCConditionalQuestion83,
    ugcNetCConditionalQuestion84,
    ugcNetCConditionalQuestion85,
    ugcNetCConditionalQuestion86,
    ugcNetCConditionalQuestion87,
    ugcNetCConditionalQuestion88,
    ugcNetCConditionalQuestion89,
    ugcNetCConditionalQuestion90,

    ugcNetCConditionalQuestion91,
    ugcNetCConditionalQuestion92,
    ugcNetCConditionalQuestion93,
    ugcNetCConditionalQuestion94,
    ugcNetCConditionalQuestion95,
    ugcNetCConditionalQuestion96,
    ugcNetCConditionalQuestion97,
    ugcNetCConditionalQuestion98,
    ugcNetCConditionalQuestion99,
    ugcNetCConditionalQuestion100,

      ugcNetCDifficultQuestion101,
    ugcNetCDifficultQuestion102,
    ugcNetCDifficultQuestion103,
    ugcNetCDifficultQuestion104,
    ugcNetCDifficultQuestion105,
    ugcNetCDifficultQuestion106,
    ugcNetCDifficultQuestion107,
    ugcNetCDifficultQuestion108,
    ugcNetCDifficultQuestion109,
    ugcNetCDifficultQuestion110,
    ugcNetCDifficultQuestion111,
    ugcNetCDifficultQuestion112,
    ugcNetCDifficultQuestion113,
    ugcNetCDifficultQuestion114,
    ugcNetCDifficultQuestion115,
    ugcNetCDifficultQuestion116,
    ugcNetCDifficultQuestion117,
    ugcNetCDifficultQuestion118,
    ugcNetCDifficultQuestion119,
    ugcNetCDifficultQuestion120,
     ugcNetCSwitchQuestion1,
    ugcNetCSwitchQuestion2,
    ugcNetCSwitchQuestion3,
    ugcNetCSwitchQuestion4,
    ugcNetCSwitchQuestion5,
    ugcNetCSwitchQuestion6,
    ugcNetCSwitchQuestion7,
    ugcNetCSwitchQuestion8,
    ugcNetCSwitchQuestion9,
    ugcNetCSwitchQuestion10,
    ugcNetCSwitchQuestion11,
    ugcNetCSwitchQuestion12,
    ugcNetCSwitchQuestion13,
    ugcNetCSwitchQuestion14,
    ugcNetCSwitchQuestion15,
    ugcNetCSwitchQuestion16,
    ugcNetCSwitchQuestion17,
    ugcNetCSwitchQuestion18,
    ugcNetCSwitchQuestion19,
    ugcNetCSwitchQuestion20,
    ugcNetCSwitchQuestion21,
    ugcNetCSwitchQuestion22,
    ugcNetCSwitchQuestion23,
    ugcNetCSwitchQuestion24,
    ugcNetCSwitchQuestion25,
    ugcNetCSwitchQuestion26,
    ugcNetCSwitchQuestion27,
    ugcNetCSwitchQuestion28,
    ugcNetCSwitchQuestion29,
    ugcNetCSwitchQuestion30
    
];