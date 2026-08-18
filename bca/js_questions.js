
const javascriptRestSpreadQuestion1 = {
    question: "Which syntax is used for the Rest and Spread operators in JavaScript?",

    options: [
        "...",
        "&&",
        "##",
        "??"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="operator">...</span>

<span class="keyword">Explanation:</span>
The three dots <span class="operator">...</span> are used for
both Rest and Spread operators.

Their meaning depends on how they are used.</code></pre>

</div>
`
};


const javascriptRestSpreadQuestion2 = {
    question: "What is the output of the following JavaScript code?<br><br><code>let numbers = [10, 20, 30];<br>let copy = [...numbers];<br>console.log(copy);</code>",

    options: [
        "[10, 20, 30]",
        "[[10, 20, 30]]",
        "10, 20, 30",
        "Error"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">[10, 20, 30]</span>

<span class="keyword">Explanation:</span>
The Spread operator expands the elements of
the <span class="variable">numbers</span> array.

A new array is created containing the
same elements.</code></pre>

</div>
`
};


const javascriptRestSpreadQuestion3 = {
    question: "Which operator is used to collect multiple function arguments into a single array?",

    options: [
        "Spread operator",
        "Rest operator",
        "Assignment operator",
        "Ternary operator"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">Rest operator</span>

<span class="keyword">Explanation:</span>
The Rest operator collects multiple values
into a single array.

Example:

<span class="keyword">function</span> sum(<span class="operator">...</span>numbers) {
    console.log(numbers);
}</code></pre>

</div>
`
};


const javascriptRestSpreadQuestion4 = {
    question: "What is the output of the following JavaScript code?<br><br><code>function sum(...numbers) {<br>&nbsp;&nbsp;console.log(numbers);<br>}<br><br>sum(10, 20, 30);</code>",

    options: [
        "[10, 20, 30]",
        "10",
        "30",
        "undefined"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">[10, 20, 30]</span>

<span class="keyword">Explanation:</span>
The Rest operator collects all remaining
arguments into an array.

numbers = [<span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>]</code></pre>

</div>
`
};


const javascriptRestSpreadQuestion5 = {
    question: "What is the output of the following JavaScript code?<br><br><code>let a = [1, 2];<br>let b = [3, 4];<br>let result = [...a, ...b];<br>console.log(result);</code>",

    options: [
        "[1, 2, 3, 4]",
        "[[1, 2], [3, 4]]",
        "[1, 2]",
        "[3, 4]"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">[1, 2, 3, 4]</span>

<span class="keyword">Explanation:</span>
The Spread operator expands both arrays.

[<span class="operator">...</span>a, <span class="operator">...</span>b]

becomes:

[<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>]</code></pre>

</div>
`
};


const javascriptRestSpreadQuestion6 = {
    question: "Write a JavaScript program using the Rest operator to accept any number of arguments and calculate their sum.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>JavaScript Program</span>
    </div>

    <pre><code><span class="keyword">function</span> sum(<span class="operator">...</span>numbers)
{
    <span class="keyword">let</span> total = <span class="number">0</span>;

    <span class="keyword">for</span> (<span class="keyword">let</span> num <span class="keyword">of</span> numbers)
    {
        total += num;
    }

    console.log(total);
}

sum(<span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>);

<span class="keyword">Output:</span>
<span class="number">60</span></code></pre>

</div>
`
};


const javascriptRestSpreadQuestion7 = {
    question: "What is the output of the following JavaScript code?<br><br><code>let numbers = [10, 20, 30, 40];<br>let [first, ...remaining] = numbers;<br>console.log(remaining);</code>",

    options: [
        "[20, 30, 40]",
        "[10]",
        "[10, 20, 30]",
        "40"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">[20, 30, 40]</span>

<span class="keyword">Explanation:</span>
The first element is assigned to <span class="variable">first</span>.

The Rest operator collects the remaining
elements into <span class="variable">remaining</span>.

first = <span class="number">10</span>
remaining = [<span class="number">20</span>, <span class="number">30</span>, <span class="number">40</span>]</code></pre>

</div>
`
};


const javascriptRestSpreadQuestion8 = {
    question: "Which statement correctly describes the Spread operator?",

    options: [
        "It collects values into an array",
        "It expands an iterable into individual elements",
        "It creates a loop",
        "It converts a string into a number"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span>
<span class="string">It expands an iterable into individual elements</span>

<span class="keyword">Explanation:</span>
The Spread operator expands elements from
an array, object, or other iterable.</code></pre>

</div>
`
};


const javascriptRestSpreadQuestion9 = {
    question: "What is the output of the following JavaScript code?<br><br><code>let person = { name: \"Pradeep\", age: 30 };<br>let copy = { ...person };<br>console.log(copy.name);</code>",

    options: [
        "Pradeep",
        "name",
        "undefined",
        "Error"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">Pradeep</span>

<span class="keyword">Explanation:</span>
The Spread operator copies the properties
of the <span class="variable">person</span> object into a new object.

Therefore:

copy.name → <span class="string">"Pradeep"</span></code></pre>

</div>
`
};


const javascriptRestSpreadQuestion10 = {
    question: "Write a JavaScript program to merge two arrays using the Spread operator.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>JavaScript Program</span>
    </div>

    <pre><code><span class="keyword">let</span> first = [<span class="number">10</span>, <span class="number">20</span>];
<span class="keyword">let</span> second = [<span class="number">30</span>, <span class="number">40</span>];

<span class="keyword">let</span> result = [<span class="operator">...</span>first, <span class="operator">...</span>second];

console.log(result);

<span class="keyword">Output:</span>
[<span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>, <span class="number">40</span>]</code></pre>

</div>
`
};


const javascriptRestSpreadQuestion11 = {
    question: "What is the output of the following JavaScript code?<br><br><code>function show(a, b, ...rest) {<br>&nbsp;&nbsp;console.log(rest);<br>}<br><br>show(10, 20, 30, 40, 50);</code>",

    options: [
        "[30, 40, 50]",
        "[10, 20]",
        "[10, 20, 30]",
        "50"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">[30, 40, 50]</span>

<span class="keyword">Explanation:</span>
The first two arguments are assigned to
<span class="variable">a</span> and <span class="variable">b</span>.

The Rest operator collects the remaining
arguments.

rest = [<span class="number">30</span>, <span class="number">40</span>, <span class="number">50</span>]</code></pre>

</div>
`
};


const javascriptRestSpreadQuestion12 = {
    question: "Write a JavaScript program to create a copy of an array using the Spread operator.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>JavaScript Program</span>
    </div>

    <pre><code><span class="keyword">let</span> original = [<span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>];

<span class="keyword">let</span> copy = [<span class="operator">...</span>original];

console.log(copy);

<span class="keyword">Output:</span>
[<span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>]</code></pre>

</div>
`
};


const javascriptRestSpreadQuestion13 = {
    question: "What is the output of the following JavaScript code?<br><br><code>let obj1 = { a: 10, b: 20 };<br>let obj2 = { ...obj1, c: 30 };<br>console.log(obj2);</code>",

    options: [
        "{ a: 10, b: 20, c: 30 }",
        "{ c: 30 }",
        "{ a: 10, b: 20 }",
        "Error"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span>
<span class="string">{ a: 10, b: 20, c: 30 }</span>

<span class="keyword">Explanation:</span>
The Spread operator copies all properties
from <span class="variable">obj1</span> into <span class="variable">obj2</span>.

The property <span class="variable">c</span> is then added.</code></pre>

</div>
`
};


const javascriptRestSpreadQuestion14 = {
    question: "Which of the following correctly uses the Rest operator in a function?",

    options: [
        "function test(...args) {}",
        "function test(args...) {}",
        "function ...test(args) {}",
        "function test(...args...) {}"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span>
<span class="keyword">function</span> test(<span class="operator">...</span>args) { }

<span class="keyword">Explanation:</span>
The Rest parameter is written using three dots
before the parameter name.</code></pre>

</div>
`
};


const javascriptRestSpreadQuestion15 = {
    question: "What is the output of the following JavaScript code?<br><br><code>let arr = [1, 2, 3];<br>let result = [0, ...arr, 4];<br>console.log(result);</code>",

    options: [
        "[0, 1, 2, 3, 4]",
        "[1, 2, 3]",
        "[0, 4]",
        "[[1, 2, 3]]"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">[0, 1, 2, 3, 4]</span>

<span class="keyword">Explanation:</span>
The Spread operator expands the elements
of <span class="variable">arr</span>.

[<span class="number">0</span>, <span class="operator">...</span>arr, <span class="number">4</span>]

becomes:

[<span class="number">0</span>, <span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>]</code></pre>

</div>
`
};


const javascriptRestSpreadQuestion16 = {
    question: "Write a JavaScript program using the Rest operator to find the largest number from any number of arguments.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>JavaScript Program</span>
    </div>

    <pre><code><span class="keyword">function</span> findLargest(<span class="operator">...</span>numbers)
{
    <span class="keyword">return</span> Math.max(<span class="operator">...</span>numbers);
}

console.log(findLargest(
    <span class="number">10</span>,
    <span class="number">50</span>,
    <span class="number">30</span>,
    <span class="number">80</span>
));

<span class="keyword">Output:</span>
<span class="number">80</span></code></pre>

</div>
`
};


const javascriptRestSpreadQuestion17 = {
    question: "What is the output of the following JavaScript code?<br><br><code>let [first, second, ...others] = [10, 20, 30, 40, 50];<br>console.log(first);<br>console.log(others);</code>",

    options: [
        "10 and [30, 40, 50]",
        "20 and [30, 40, 50]",
        "10 and [20, 30, 40]",
        "50 and [10, 20, 30]"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span>
<span class="number">10</span> and <span class="string">[30, 40, 50]</span>

<span class="keyword">Explanation:</span>
first = <span class="number">10</span>
second = <span class="number">20</span>

The Rest operator collects the remaining
elements into <span class="variable">others</span>.

others = [<span class="number">30</span>, <span class="number">40</span>, <span class="number">50</span>]</code></pre>

</div>
`
};


const javascriptRestSpreadQuestion18 = {
    question: "Write a JavaScript program to merge two objects using the Spread operator.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>JavaScript Program</span>
    </div>

    <pre><code><span class="keyword">let</span> student = {
    name: <span class="string">"Rahul"</span>,
    age: <span class="number">20</span>
};

<span class="keyword">let</span> course = {
    subject: <span class="string">"JavaScript"</span>
};

<span class="keyword">let</span> result = {
    <span class="operator">...</span>student,
    <span class="operator">...</span>course
};

console.log(result);

<span class="keyword">Output:</span>
{
    name: <span class="string">"Rahul"</span>,
    age: <span class="number">20</span>,
    subject: <span class="string">"JavaScript"</span>
}</code></pre>

</div>
`
};


const javascriptRestSpreadQuestion19 = {
    question: "What happens when the same property exists in two objects and the second object is spread after the first?",

    options: [
        "The first value is always kept",
        "The second value overwrites the first value",
        "Both values are deleted",
        "JavaScript throws an error"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span>
<span class="string">The second value overwrites the first value</span>

<span class="keyword">Example:</span>

<span class="keyword">let</span> obj = {
    <span class="operator">...</span>{ name: <span class="string">"A"</span> },
    <span class="operator">...</span>{ name: <span class="string">"B"</span> }
};

console.log(obj.name);

<span class="keyword">Output:</span>
<span class="string">"B"</span></code></pre>

</div>
`
};


const javascriptRestSpreadQuestion20 = {
    question: "Write a JavaScript program using both Rest and Spread operators to find the sum of numbers stored in an array.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>JavaScript Program</span>
    </div>

    <pre><code><span class="keyword">function</span> sum(<span class="operator">...</span>numbers)
{
    <span class="keyword">return</span> numbers.reduce(
        (total, num) =&gt; total + num,
        <span class="number">0</span>
    );
}

<span class="keyword">let</span> values = [<span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>];

console.log(sum(<span class="operator">...</span>values));

<span class="keyword">Output:</span>
<span class="number">60</span></code></pre>

</div>
`
};

const javascriptTypeConversionQuestion1 = {
    question: "What is the output of the following JavaScript code?<br><br><code>let x = \"10\";<br>let y = Number(x);<br>console.log(y);</code>",

    options: [
        "10",
        "\"10\"",
        "undefined",
        "NaN"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="number">10</span>

<span class="keyword">Explanation:</span>
The <span class="function">Number()</span> function converts
the string <span class="string">"10"</span> into a number.

<span class="keyword">let</span> x = <span class="string">"10"</span>;
<span class="keyword">let</span> y = Number(x);

Therefore:

<span class="function">typeof</span> y → <span class="string">"number"</span></code></pre>

</div>
`
};


const javascriptTypeConversionQuestion2 = {
    question: "What is the output of the following JavaScript code?<br><br><code>let value = 25;<br>console.log(String(value));</code>",

    options: [
        "25",
        "\"25\"",
        "undefined",
        "NaN"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">"25"</span>

<span class="keyword">Explanation:</span>
The <span class="function">String()</span> function converts
the number <span class="number">25</span> into a string.

<span class="keyword">let</span> value = <span class="number">25</span>;

String(value) → <span class="string">"25"</span></code></pre>

</div>
`
};


const javascriptTypeConversionQuestion3 = {
    question: "What is the output of the following JavaScript code?<br><br><code>let value = \"5\";<br>console.log(value * 2);</code>",

    options: [
        "10",
        "\"52\"",
        "7",
        "NaN"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="number">10</span>

<span class="keyword">Explanation:</span>
The multiplication operator <span class="operator">*</span>
automatically converts the string <span class="string">"5"</span>
into a number.

<span class="string">"5"</span> * <span class="number">2</span>

becomes:

<span class="number">5</span> * <span class="number">2</span> = <span class="number">10</span></code></pre>

</div>
`
};


const javascriptTypeConversionQuestion4 = {
    question: "Which function is commonly used to convert a string into an integer in JavaScript?",

    options: [
        "parseInt()",
        "parseString()",
        "toInteger()",
        "Integer()"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="function">parseInt()</span>

<span class="keyword">Explanation:</span>
The <span class="function">parseInt()</span> function converts
a string into an integer.

Example:

parseInt(<span class="string">"25"</span>)

<span class="keyword">Result:</span>
<span class="number">25</span></code></pre>

</div>
`
};


const javascriptTypeConversionQuestion5 = {
    question: "Write a JavaScript program to convert a string value into a number using the Number() function.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>JavaScript Program</span>
    </div>

    <pre><code><span class="keyword">let</span> value = <span class="string">"100"</span>;

<span class="keyword">let</span> number = Number(value);

console.log(number);
console.log(<span class="keyword">typeof</span> number);

<span class="keyword">Output:</span>
<span class="number">100</span>
<span class="string">"number"</span></code></pre>

</div>
`
};

const javascriptControlStatementsQuestion1 = {
    question: "Which statement is used to execute a block of code only when a specified condition is true?",

    options: [
        "if",
        "for",
        "switch",
        "break"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="keyword">if</span>

<span class="keyword">Explanation:</span>
The <span class="keyword">if</span> statement executes a block
of code when its condition evaluates to true.</code></pre>

</div>
`
};


const javascriptControlStatementsQuestion2 = {
    question: "What is the output of the following JavaScript code?<br><br><code>let age = 20;<br><br>if (age &gt;= 18) {<br>&nbsp;&nbsp;console.log(\"Adult\");<br>} else {<br>&nbsp;&nbsp;console.log(\"Minor\");<br>}</code>",

    options: [
        "Adult",
        "Minor",
        "true",
        "undefined"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">"Adult"</span>

<span class="keyword">Explanation:</span>
The value of <span class="variable">age</span> is <span class="number">20</span>.

<span class="number">20</span> &gt;= <span class="number">18</span> → <span class="boolean">true</span>

Therefore, the <span class="keyword">if</span> block executes.</code></pre>

</div>
`
};


const javascriptControlStatementsQuestion3 = {
    question: "Which statement is used when multiple conditions need to be checked one after another?",

    options: [
        "if...else if...else",
        "for...of",
        "switch only",
        "break"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="keyword">if...else if...else</span>

<span class="keyword">Explanation:</span>
The <span class="keyword">if...else if...else</span> statement
is useful for checking multiple conditions.</code></pre>

</div>
`
};


const javascriptControlStatementsQuestion4 = {
    question: "Write a JavaScript program to check whether a number is positive, negative, or zero.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>JavaScript Program</span>
    </div>

    <pre><code><span class="keyword">let</span> num = <span class="number">-10</span>;

<span class="keyword">if</span> (num &gt; <span class="number">0</span>) {
    console.log(<span class="string">"Positive"</span>);
}
<span class="keyword">else if</span> (num &lt; <span class="number">0</span>) {
    console.log(<span class="string">"Negative"</span>);
}
<span class="keyword">else</span> {
    console.log(<span class="string">"Zero"</span>);
}

<span class="keyword">Output:</span>
<span class="string">"Negative"</span></code></pre>

</div>
`
};


const javascriptControlStatementsQuestion5 = {
    question: "What is the output of the following JavaScript code?<br><br><code>let day = 2;<br><br>switch (day) {<br>&nbsp;&nbsp;case 1:<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log(\"Monday\");<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>&nbsp;&nbsp;case 2:<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log(\"Tuesday\");<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>&nbsp;&nbsp;default:<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log(\"Invalid\");<br>}</code>",

    options: [
        "Monday",
        "Tuesday",
        "Invalid",
        "undefined"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">"Tuesday"</span>

<span class="keyword">Explanation:</span>
The value of <span class="variable">day</span> is <span class="number">2</span>.

Therefore, <span class="keyword">case 2</span> is matched.

The <span class="keyword">break</span> statement stops execution
after that case.</code></pre>

</div>
`
};


const javascriptControlStatementsQuestion6 = {
    question: "Which keyword is used to exit a loop immediately?",

    options: [
        "continue",
        "break",
        "return",
        "exit"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="keyword">break</span>

<span class="keyword">Explanation:</span>
The <span class="keyword">break</span> statement immediately
terminates the loop or switch statement.</code></pre>

</div>
`
};


const javascriptControlStatementsQuestion7 = {
    question: "What is the output of the following JavaScript code?<br><br><code>for (let i = 1; i &lt;= 5; i++) {<br>&nbsp;&nbsp;if (i === 3) {<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;console.log(i);<br>}</code>",

    options: [
        "1 2",
        "1 2 3",
        "1 2 3 4 5",
        "3 4 5"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="number">1 2</span>

<span class="keyword">Explanation:</span>
When <span class="variable">i</span> becomes <span class="number">3</span>,
the <span class="keyword">break</span> statement terminates the loop.

<span class="keyword">Output:</span>
<span class="number">1</span>
<span class="number">2</span></code></pre>

</div>
`
};


const javascriptControlStatementsQuestion8 = {
    question: "Which keyword skips the current iteration of a loop and moves to the next iteration?",

    options: [
        "break",
        "continue",
        "skip",
        "next"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="keyword">continue</span>

<span class="keyword">Explanation:</span>
The <span class="keyword">continue</span> statement skips
the remaining statements of the current iteration
and starts the next iteration.</code></pre>

</div>
`
};


const javascriptControlStatementsQuestion9 = {
    question: "What is the output of the following JavaScript code?<br><br><code>for (let i = 1; i &lt;= 5; i++) {<br>&nbsp;&nbsp;if (i === 3) continue;<br>&nbsp;&nbsp;console.log(i);<br>}</code>",

    options: [
        "1 2 3 4 5",
        "1 2 4 5",
        "3",
        "1 2"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="number">1 2 4 5</span>

<span class="keyword">Explanation:</span>
When <span class="variable">i</span> is <span class="number">3</span>,
the <span class="keyword">continue</span> statement skips
that iteration.

Therefore, <span class="number">3</span> is not printed.</code></pre>

</div>
`
};


const javascriptControlStatementsQuestion10 = {
    question: "Write a JavaScript program using a for loop to print numbers from 1 to 10.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>JavaScript Program</span>
    </div>

    <pre><code><span class="keyword">for</span> (
    <span class="keyword">let</span> i = <span class="number">1</span>;
    i &lt;= <span class="number">10</span>;
    i++
) {
    console.log(i);
}

<span class="keyword">Output:</span>
<span class="number">1</span>
<span class="number">2</span>
<span class="number">3</span>
<span class="number">4</span>
<span class="number">5</span>
<span class="number">6</span>
<span class="number">7</span>
<span class="number">8</span>
<span class="number">9</span>
<span class="number">10</span></code></pre>

</div>
`
};


const javascriptControlStatementsQuestion11 = {
    question: "What is the output of the following JavaScript code?<br><br><code>let i = 1;<br><br>while (i &lt;= 3) {<br>&nbsp;&nbsp;console.log(i);<br>&nbsp;&nbsp;i++;<br>}</code>",

    options: [
        "1 2 3",
        "0 1 2",
        "1 2",
        "Infinite loop"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="number">1 2 3</span>

<span class="keyword">Explanation:</span>
The loop continues while:

i &lt;= <span class="number">3</span>

The value of <span class="variable">i</span> is increased after
each iteration.

<span class="keyword">Output:</span>
<span class="number">1</span>
<span class="number">2</span>
<span class="number">3</span></code></pre>

</div>
`
};


const javascriptControlStatementsQuestion12 = {
    question: "Which loop executes its body at least once, even when the condition is initially false?",

    options: [
        "for loop",
        "while loop",
        "do...while loop",
        "for...of loop"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="keyword">do...while</span>

<span class="keyword">Explanation:</span>
A <span class="keyword">do...while</span> loop executes the
code block first and checks the condition afterward.</code></pre>

</div>
`
};


const javascriptControlStatementsQuestion13 = {
    question: "What is the output of the following JavaScript code?<br><br><code>let i = 10;<br><br>do {<br>&nbsp;&nbsp;console.log(i);<br>&nbsp;&nbsp;i++;<br>} while (i &lt; 5);</code>",

    options: [
        "No output",
        "10",
        "10 11 12 13 14",
        "Infinite loop"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="number">10</span>

<span class="keyword">Explanation:</span>
A <span class="keyword">do...while</span> loop executes
at least once.

The value <span class="number">10</span> is printed before
the condition is checked.

10 &lt; 5 → <span class="boolean">false</span></code></pre>

</div>
`
};


const javascriptControlStatementsQuestion14 = {
    question: "Write a JavaScript program to print the multiplication table of a number using a loop.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>JavaScript Program</span>
    </div>

    <pre><code><span class="keyword">let</span> num = <span class="number">5</span>;

<span class="keyword">for</span> (
    <span class="keyword">let</span> i = <span class="number">1</span>;
    i &lt;= <span class="number">10</span>;
    i++
) {
    console.log(num + <span class="string">" x "</span> + i + <span class="string">" = "</span> + (num * i));
}

<span class="keyword">Output:</span>
<span class="number">5 x 1 = 5</span>
<span class="number">5 x 2 = 10</span>
<span class="number">5 x 3 = 15</span>
<span class="number">...</span>
<span class="number">5 x 10 = 50</span></code></pre>

</div>
`
};


const javascriptControlStatementsQuestion15 = {
    question: "What is the output of the following JavaScript code?<br><br><code>let score = 85;<br><br>if (score &gt;= 90) {<br>&nbsp;&nbsp;console.log(\"A\");<br>} else if (score &gt;= 80) {<br>&nbsp;&nbsp;console.log(\"B\");<br>} else {<br>&nbsp;&nbsp;console.log(\"C\");<br>}</code>",

    options: [
        "A",
        "B",
        "C",
        "No output"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">"B"</span>

<span class="keyword">Explanation:</span>
85 &gt;= 90 → <span class="boolean">false</span>

85 &gt;= 80 → <span class="boolean">true</span>

Therefore, the second condition executes.</code></pre>

</div>
`
};


const javascriptControlStatementsQuestion16 = {
    question: "Write a JavaScript program to find the largest of three numbers using if...else statements.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>JavaScript Program</span>
    </div>

    <pre><code><span class="keyword">let</span> a = <span class="number">25</span>;
<span class="keyword">let</span> b = <span class="number">40</span>;
<span class="keyword">let</span> c = <span class="number">30</span>;

<span class="keyword">if</span> (a &gt;= b &amp;&amp; a &gt;= c) {
    console.log(a);
}
<span class="keyword">else if</span> (b &gt;= a &amp;&amp; b &gt;= c) {
    console.log(b);
}
<span class="keyword">else</span> {
    console.log(c);
}

<span class="keyword">Output:</span>
<span class="number">40</span></code></pre>

</div>
`
};


const javascriptControlStatementsQuestion17 = {
    question: "What is the output of the following JavaScript code?<br><br><code>for (let i = 1; i &lt;= 3; i++) {<br>&nbsp;&nbsp;for (let j = 1; j &lt;= 2; j++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log(i, j);<br>&nbsp;&nbsp;}<br>}</code>",

    options: [
        "1 1, 1 2, 2 1, 2 2, 3 1, 3 2",
        "1 1, 2 2, 3 3",
        "1 2 3",
        "1 1 2 2 3 3"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span>
<span class="string">1 1, 1 2, 2 1, 2 2, 3 1, 3 2</span>

<span class="keyword">Explanation:</span>
The outer loop runs 3 times.

For every outer-loop iteration,
the inner loop runs 2 times.

Therefore:

1 1
1 2
2 1
2 2
3 1
3 2</code></pre>

</div>
`
};


const javascriptControlStatementsQuestion18 = {
    question: "Write a JavaScript program to print all even numbers from 1 to 20 using a loop and the continue statement.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>JavaScript Program</span>
    </div>

    <pre><code><span class="keyword">for</span> (
    <span class="keyword">let</span> i = <span class="number">1</span>;
    i &lt;= <span class="number">20</span>;
    i++
) {
    <span class="keyword">if</span> (i % <span class="number">2</span> !== <span class="number">0</span>) {
        <span class="keyword">continue</span>;
    }

    console.log(i);
}

<span class="keyword">Output:</span>
<span class="number">2</span>
<span class="number">4</span>
<span class="number">6</span>
<span class="number">8</span>
<span class="number">10</span>
<span class="number">12</span>
<span class="number">14</span>
<span class="number">16</span>
<span class="number">18</span>
<span class="number">20</span></code></pre>

</div>
`
};


const javascriptControlStatementsQuestion19 = {
    question: "What is the output of the following JavaScript code?<br><br><code>let value = 3;<br><br>switch (value) {<br>&nbsp;&nbsp;case 1:<br>&nbsp;&nbsp;case 2:<br>&nbsp;&nbsp;case 3:<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log(\"Low\");<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>&nbsp;&nbsp;default:<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log(\"High\");<br>}</code>",

    options: [
        "Low",
        "High",
        "3",
        "No output"
    ],

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">"Low"</span>

<span class="keyword">Explanation:</span>
The value of <span class="variable">value</span> is <span class="number">3</span>.

Therefore, <span class="keyword">case 3</span> is matched.

The statement executes:

console.log(<span class="string">"Low"</span>);</code></pre>

</div>
`
};


const javascriptControlStatementsQuestion20 = {
    question: "Write a JavaScript program to check whether a number is prime using a loop and conditional statements.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>JavaScript Program</span>
    </div>

    <pre><code><span class="keyword">let</span> num = <span class="number">17</span>;
<span class="keyword">let</span> isPrime = <span class="boolean">true</span>;

<span class="keyword">if</span> (num &lt; <span class="number">2</span>) {
    isPrime = <span class="boolean">false</span>;
}
<span class="keyword">else</span> {
    <span class="keyword">for</span> (
        <span class="keyword">let</span> i = <span class="number">2</span>;
        i &lt; num;
        i++
    ) {
        <span class="keyword">if</span> (num % i === <span class="number">0</span>) {
            isPrime = <span class="boolean">false</span>;
            <span class="keyword">break</span>;
        }
    }
}

<span class="keyword">if</span> (isPrime) {
    console.log(<span class="string">"Prime Number"</span>);
}
<span class="keyword">else</span> {
    console.log(<span class="string">"Not a Prime Number"</span>);
}

<span class="keyword">Output:</span>
<span class="string">"Prime Number"</span></code></pre>

</div>
`
};

const javascriptProgramQuestion1 = {
    question: "Write a JavaScript program to reverse a string.",

    input: `
Enter string: Hello
`,

    output: `
olleH
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">let</span> str = prompt(<span class="string">"Enter string: "</span>);

<span class="keyword">let</span> reversed = str
    .split(<span class="string">""</span>)
    .reverse()
    .join(<span class="string">""</span>);

console.log(reversed);</code></pre>

</div>
`
};


const javascriptProgramQuestion2 = {
    question: "Write a JavaScript program to check whether a string is a palindrome string.",

    input: `
Enter string: madam
`,

    output: `
Palindrome
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">let</span> str = prompt(<span class="string">"Enter string: "</span>);

<span class="keyword">let</span> reversed = str
    .split(<span class="string">""</span>)
    .reverse()
    .join(<span class="string">""</span>);

<span class="keyword">if</span> (str === reversed)
{
    console.log(<span class="string">"Palindrome"</span>);
}
<span class="keyword">else</span>
{
    console.log(<span class="string">"Not Palindrome"</span>);
}</code></pre>

</div>
`
};


const javascriptProgramQuestion3 = {
    question: "Write a JavaScript program to find the largest number in an array.",

    input: `
Enter array: [10, 45, 67, 23, 89]
`,

    output: `
89
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">let</span> numbers = [<span class="number">10</span>, <span class="number">45</span>, <span class="number">67</span>, <span class="number">23</span>, <span class="number">89</span>];

<span class="keyword">let</span> largest = numbers[<span class="number">0</span>];

<span class="keyword">for</span> (<span class="keyword">let</span> i = <span class="number">1</span>; i &lt; numbers.length; i++)
{
    <span class="keyword">if</span> (numbers[i] &gt; largest)
    {
        largest = numbers[i];
    }
}

console.log(largest);</code></pre>

</div>
`
};


const javascriptProgramQuestion4 = {
    question: "Write a JavaScript program to remove the first element from an array.",

    input: `
Enter array: [10, 20, 30, 40]
`,

    output: `
[20, 30, 40]
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">let</span> numbers = [<span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>, <span class="number">40</span>];

numbers.shift();

console.log(numbers);</code></pre>

</div>
`
};


const javascriptProgramQuestion5 = {
    question: "Write a JavaScript program to find the sum of all elements in an array.",

    input: `
Enter array: [10, 20, 30, 40]
`,

    output: `
100
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">let</span> numbers = [<span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>, <span class="number">40</span>];

<span class="keyword">let</span> sum = <span class="number">0</span>;

<span class="keyword">for</span> (<span class="keyword">let</span> num <span class="keyword">of</span> numbers)
{
    sum += num;
}

console.log(sum);</code></pre>

</div>
`
};


const javascriptProgramQuestion6 = {
    question: "Write a JavaScript program to check whether a number is prime or not.",

    input: `
Enter number: 17
`,

    output: `
Prime Number
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">let</span> num = Number(prompt(<span class="string">"Enter number: "</span>));

<span class="keyword">let</span> isPrime = <span class="boolean">true</span>;

<span class="keyword">if</span> (num &lt; <span class="number">2</span>)
{
    isPrime = <span class="boolean">false</span>;
}

<span class="keyword">for</span> (<span class="keyword">let</span> i = <span class="number">2</span>; i &lt; num; i++)
{
    <span class="keyword">if</span> (num % i === <span class="number">0</span>)
    {
        isPrime = <span class="boolean">false</span>;
        <span class="keyword">break</span>;
    }
}

<span class="keyword">if</span> (isPrime)
{
    console.log(<span class="string">"Prime Number"</span>);
}
<span class="keyword">else</span>
{
    console.log(<span class="string">"Not Prime Number"</span>);
}</code></pre>

</div>
`
};


const javascriptProgramQuestion7 = {
    question: "Write a JavaScript program to find the factorial of a number.",

    input: `
Enter number: 5
`,

    output: `
120
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">let</span> num = Number(prompt(<span class="string">"Enter number: "</span>));

<span class="keyword">let</span> factorial = <span class="number">1</span>;

<span class="keyword">for</span> (<span class="keyword">let</span> i = <span class="number">1</span>; i &lt;= num; i++)
{
    factorial *= i;
}

console.log(factorial);</code></pre>

</div>
`
};


const javascriptProgramQuestion8 = {
    question: "Write a JavaScript program to calculate the power of a number.",

    input: `
Enter base: 2
Enter exponent: 4
`,

    output: `
16
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">let</span> base = Number(prompt(<span class="string">"Enter base: "</span>));
<span class="keyword">let</span> exponent = Number(prompt(<span class="string">"Enter exponent: "</span>));

<span class="keyword">let</span> result = <span class="number">1</span>;

<span class="keyword">for</span> (<span class="keyword">let</span> i = <span class="number">1</span>; i &lt;= exponent; i++)
{
    result *= base;
}

console.log(result);</code></pre>

</div>
`
};


const javascriptProgramQuestion9 = {
    question: "Write a JavaScript program to print the frequency of elements in an array.",

    input: `
Enter array: [1, 2, 2, 3, 3, 3]
`,

    output: `
1 = 1
2 = 2
3 = 3
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">let</span> numbers = [
    <span class="number">1</span>,
    <span class="number">2</span>,
    <span class="number">2</span>,
    <span class="number">3</span>,
    <span class="number">3</span>,
    <span class="number">3</span>
];

<span class="keyword">let</span> frequency = {};

<span class="keyword">for</span> (<span class="keyword">let</span> num <span class="keyword">of</span> numbers)
{
    <span class="keyword">if</span> (frequency[num])
    {
        frequency[num]++;
    }
    <span class="keyword">else</span>
    {
        frequency[num] = <span class="number">1</span>;
    }
}

<span class="keyword">for</span> (<span class="keyword">let</span> key <span class="keyword">in</span> frequency)
{
    console.log(key + <span class="string">" = "</span> + frequency[key]);
}</code></pre>

</div>
`
};


const javascriptProgramQuestion10 = {
    question: "Write a JavaScript program to count the occurrences of a character in a string.",

    input: `
Enter string: banana
Enter character: a
`,

    output: `
3
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">let</span> str = prompt(<span class="string">"Enter string: "</span>);
<span class="keyword">let</span> ch = prompt(<span class="string">"Enter character: "</span>);

<span class="keyword">let</span> count = <span class="number">0</span>;

<span class="keyword">for</span> (<span class="keyword">let</span> char <span class="keyword">of</span> str)
{
    <span class="keyword">if</span> (char === ch)
    {
        count++;
    }
}

console.log(count);</code></pre>

</div>
`
};


const javascriptProgramQuestion11 = {
    question: "Write a JavaScript program to sort an array in ascending order.",

    input: `
Enter array: [50, 20, 40, 10, 30]
`,

    output: `
10
20
30
40
50
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">let</span> numbers = [
    <span class="number">50</span>,
    <span class="number">20</span>,
    <span class="number">40</span>,
    <span class="number">10</span>,
    <span class="number">30</span>
];

numbers.sort((a, b) =&gt; a - b);

<span class="keyword">for</span> (<span class="keyword">let</span> num <span class="keyword">of</span> numbers)
{
    console.log(num);
}</code></pre>

</div>
`
};


const javascriptProgramQuestion12 = {
    question: "Write a JavaScript program to sort an array in descending order.",

    input: `
Enter array: [50, 20, 40, 10, 30]
`,

    output: `
50
40
30
20
10
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">let</span> numbers = [
    <span class="number">50</span>,
    <span class="number">20</span>,
    <span class="number">40</span>,
    <span class="number">10</span>,
    <span class="number">30</span>
];

numbers.sort((a, b) =&gt; b - a);

<span class="keyword">for</span> (<span class="keyword">let</span> num <span class="keyword">of</span> numbers)
{
    console.log(num);
}</code></pre>

</div>
`
};


const javascriptProgramQuestion13 = {
    question: "Write a JavaScript program to find the first non-repeated character in a string.",

    input: `
Enter string: swiss
`,

    output: `
w
`,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Program</span>
    </div>

    <pre><code><span class="keyword">let</span> str = <span class="string">"swiss"</span>;

<span class="keyword">for</span> (<span class="keyword">let</span> char <span class="keyword">of</span> str)
{
    <span class="keyword">let</span> count = <span class="number">0</span>;

    <span class="keyword">for</span> (<span class="keyword">let</span> item <span class="keyword">of</span> str)
    {
        <span class="keyword">if</span> (char === item)
        {
            count++;
        }
    }

    <span class="keyword">if</span> (count === <span class="number">1</span>)
    {
        console.log(char);
        <span class="keyword">break</span>;
    }
}</code></pre>

</div>
`
};

const javascriptLoopsDifficultQuestion1 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">for</span> (<span class="program-code-box-keyword">var</span> i = <span class="program-code-box-number">0</span>; i &lt; <span class="program-code-box-number">3</span>; i++) {
    setTimeout(() =&gt; console.log(i), <span class="program-code-box-number">0</span>);
}

console.log(i);</code></pre>

</div>
`,

    options: [
        "0 1 2 3",
        "3 3 3 3",
        "0 1 2 then 3",
        "3 then 0 1 2"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">3
3
3
3</span>

<span class="keyword">Explanation:</span>
The variable declared using var is function-scoped.
The for loop completes before the setTimeout callbacks execute.
Therefore, all callbacks access the final value of i, which is 3.</code></pre>

</div>
`
};


const javascriptLoopsDifficultQuestion2 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">for</span> (<span class="program-code-box-keyword">let</span> i = <span class="program-code-box-number">0</span>; i &lt; <span class="program-code-box-number">3</span>; i++) {
    setTimeout(() =&gt; console.log(i), <span class="program-code-box-number">0</span>);
}</code></pre>

</div>
`,

    options: [
        "0 1 2",
        "3 3 3",
        "0 1 2 (in order, after a short delay)",
        "Syntax error"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0
1
2</span>

<span class="keyword">Explanation:</span>
The let declaration creates a separate binding for each iteration.
Therefore, each setTimeout callback remembers its corresponding
value of i.

The callbacks execute after the loop completes, so the values
are printed as 0, 1, and 2.</code></pre>

</div>
`
};


const javascriptLoopsDifficultQuestion3 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">let</span> i = <span class="program-code-box-number">0</span>;

<span class="program-code-box-keyword">for</span> (; i &lt; <span class="program-code-box-number">3</span>; i++) {
    <span class="program-code-box-keyword">if</span> (i === <span class="program-code-box-number">1</span>) {
        i++;
        <span class="program-code-box-keyword">continue</span>;
    }

    console.log(i);
}</code></pre>

</div>
`,

    options: [
        "0 2",
        "0 1 2",
        "0 3",
        "0"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0
2</span>

<span class="keyword">Explanation:</span>
Initially, i is 0, so 0 is printed.

When i becomes 1, the if condition is true.
Inside the condition, i is incremented to 2 and continue
skips the remaining statements of that iteration.

After continue, the for loop's update expression i++ executes,
making i equal to 3.

Therefore, the output is 0 and 2.</code></pre>

</div>
`
};


const javascriptLoopsDifficultQuestion4 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">let</span> arr = [<span class="program-code-box-number">1</span>, <span class="program-code-box-number">2</span>, <span class="program-code-box-number">3</span>];

<span class="program-code-box-keyword">for</span> (<span class="program-code-box-keyword">let</span> i <span class="program-code-box-keyword">in</span> arr) {
    console.log(<span class="program-code-box-keyword">typeof</span> i);
}</code></pre>

</div>
`,

    options: [
        "number number number",
        "string string string",
        "undefined undefined undefined",
        "object object object"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">string
string
string</span>

<span class="keyword">Explanation:</span>
The for...in loop iterates over the property keys of an array.
Array indexes are returned as strings.

Therefore, typeof i returns "string" for every iteration.</code></pre>

</div>
`
};


const javascriptLoopsDifficultQuestion5 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">let</span> arr = [<span class="program-code-box-number">10</span>, <span class="program-code-box-number">20</span>, <span class="program-code-box-number">30</span>];

<span class="program-code-box-keyword">for</span> (<span class="program-code-box-keyword">let</span> i <span class="program-code-box-keyword">of</span> arr) {
    i = i * <span class="program-code-box-number">2</span>;
}

console.log(arr);</code></pre>

</div>
`,

    options: [
        "[10, 20, 30]",
        "[20, 40, 60]",
        "[undefined, undefined, undefined]",
        "Error"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">[10, 20, 30]</span>

<span class="keyword">Explanation:</span>
The variable i receives each array value.
Since the values are primitive numbers, assigning a new value
to i does not modify the original array.

Therefore, the array remains unchanged.</code></pre>

</div>
`
};


const javascriptLoopsDifficultQuestion6 = {
    question: "Which statement about the for...of loop is TRUE?",

    options: [
        "It gives the index of array elements",
        "It can be used with plain objects directly",
        "It works only on iterable objects",
        "It cannot be used with strings"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span>
<span class="string">It works only on iterable objects</span>

<span class="keyword">Explanation:</span>
The for...of loop is designed to iterate over iterable objects.

Examples of iterables include arrays, strings, Maps and Sets.
A normal plain object is not directly iterable.</code></pre>

</div>
`
};


const javascriptLoopsDifficultQuestion7 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">let</span> count = <span class="program-code-box-number">0</span>;

outer:
<span class="program-code-box-keyword">for</span> (<span class="program-code-box-keyword">let</span> i = <span class="program-code-box-number">0</span>; i &lt; <span class="program-code-box-number">3</span>; i++) {
    <span class="program-code-box-keyword">for</span> (<span class="program-code-box-keyword">let</span> j = <span class="program-code-box-number">0</span>; j &lt; <span class="program-code-box-number">3</span>; j++) {

        <span class="program-code-box-keyword">if</span> (i === <span class="program-code-box-number">1</span> &amp;&amp; j === <span class="program-code-box-number">1</span>)
            <span class="program-code-box-keyword">break</span> outer;

        count++;
    }
}

console.log(count);</code></pre>

</div>
`,

    options: [
        "9",
        "6",
        "4",
        "3"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">4</span>

<span class="keyword">Explanation:</span>
The inner loop runs for:

i = 0 → j = 0, 1, 2 → count becomes 3
i = 1 → j = 0 → count becomes 4

When i = 1 and j = 1, break outer terminates
the outer loop as well.

Therefore, count is 4.</code></pre>

</div>
`
};


const javascriptLoopsDifficultQuestion8 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">let</span> i = <span class="program-code-box-number">0</span>;

<span class="program-code-box-keyword">while</span> (i &lt; <span class="program-code-box-number">5</span>) {

    <span class="program-code-box-keyword">if</span> (i === <span class="program-code-box-number">3</span>) {
        i++;
        <span class="program-code-box-keyword">continue</span>;
    }

    console.log(i);
    i++;
}</code></pre>

</div>
`,

    options: [
        "0 1 2 3 4",
        "0 1 2 4",
        "0 1 2 3",
        "0 1 2"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0
1
2
4</span>

<span class="keyword">Explanation:</span>
When i becomes 3, the condition is true.
The statement i++ changes i to 4 and continue skips console.log().

The next iteration prints 4.

Therefore, the output is 0, 1, 2 and 4.</code></pre>

</div>
`
};


const javascriptLoopsDifficultQuestion9 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">for</span> (<span class="program-code-box-keyword">let</span> i = <span class="program-code-box-number">0</span>; i &lt; <span class="program-code-box-number">3</span>; i++) {
    setTimeout(() =&gt; console.log(i), <span class="program-code-box-number">0</span>);
}

<span class="program-code-box-keyword">for</span> (<span class="program-code-box-keyword">let</span> j = <span class="program-code-box-number">0</span>; j &lt; <span class="program-code-box-number">3</span>; j++) {
    console.log(j);
}</code></pre>

</div>
`,

    options: [
        "0 1 2 0 1 2",
        "0 1 2 then 0 1 2 (after delay)",
        "0 1 2 0 1 2 (all immediate)",
        "0 1 2 (only second loop runs)"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0
1
2
0
1
2</span>

<span class="keyword">Explanation:</span>
The second for loop executes synchronously and prints
0, 1 and 2 immediately.

The setTimeout callbacks are asynchronous and execute
after the current synchronous code finishes.

Therefore, the second loop's output appears first.</code></pre>

</div>
`
};


const javascriptLoopsDifficultQuestion10 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">let</span> obj = {
    a: <span class="program-code-box-number">1</span>,
    b: <span class="program-code-box-number">2</span>,
    c: <span class="program-code-box-number">3</span>
};

<span class="program-code-box-keyword">let</span> sum = <span class="program-code-box-number">0</span>;

<span class="program-code-box-keyword">for</span> (<span class="program-code-box-keyword">let</span> key <span class="program-code-box-keyword">in</span> obj) {
    sum += obj[key];
}

console.log(sum);</code></pre>

</div>
`,

    options: [
        "0",
        "3",
        "6",
        "Error"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">6</span>

<span class="keyword">Explanation:</span>
The for...in loop iterates over the keys a, b and c.

The corresponding values are:
1 + 2 + 3 = 6

Therefore, the value of sum is 6.</code></pre>

</div>
`
};


const javascriptLoopsDifficultQuestion11 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">let</span> arr = [
    <span class="program-code-box-number">1</span>, <span class="program-code-box-number">2</span>, <span class="program-code-box-number">3</span>,
    <span class="program-code-box-number">4</span>, <span class="program-code-box-number">5</span>
];

<span class="program-code-box-keyword">for</span> (<span class="program-code-box-keyword">let</span> i = <span class="program-code-box-number">0</span>; i &lt; arr.length; i++) {

    <span class="program-code-box-keyword">if</span> (arr[i] % <span class="program-code-box-number">2</span> === <span class="program-code-box-number">0</span>) {
        arr.splice(i, <span class="program-code-box-number">1</span>);
        i--;
    }
}

console.log(arr);</code></pre>

</div>
`,

    options: [
        "[1, 2, 3, 4, 5]",
        "[1, 3, 5]",
        "[2, 4]",
        "[1, 3, 4, 5]"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">[1, 3, 5]</span>

<span class="keyword">Explanation:</span>
When an even number is found, splice() removes it from
the array.

The statement i-- moves the index back by one so that
the next element is checked correctly.

The final array contains only the odd numbers:
[1, 3, 5]</code></pre>

</div>
`
};


const javascriptLoopsDifficultQuestion12 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">let</span> x = <span class="program-code-box-number">0</span>;

<span class="program-code-box-keyword">do</span> {
    x++;

    <span class="program-code-box-keyword">if</span> (x === <span class="program-code-box-number">3</span>) {
        <span class="program-code-box-keyword">break</span>;
    }

} <span class="program-code-box-keyword">while</span> (x &lt; <span class="program-code-box-number">5</span>);

console.log(x);</code></pre>

</div>
`,

    options: [
        "2",
        "3",
        "4",
        "5"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">3</span>

<span class="keyword">Explanation:</span>
The value of x is incremented on every iteration.

When x becomes 3, the break statement immediately
terminates the do...while loop.

Therefore, x remains 3.</code></pre>

</div>
`
};


const javascriptLoopsDifficultQuestion13 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">let</span> sum = <span class="program-code-box-number">0</span>;

<span class="program-code-box-keyword">for</span> (<span class="program-code-box-keyword">let</span> i = <span class="program-code-box-number">1</span>; i &lt;= <span class="program-code-box-number">5</span>; i++) {

    <span class="program-code-box-keyword">for</span> (<span class="program-code-box-keyword">let</span> j = <span class="program-code-box-number">1</span>; j &lt;= i; j++) {
        sum += j;
    }
}

console.log(sum);</code></pre>

</div>
`,

    options: [
        "15",
        "20",
        "25",
        "35"
    ],

    answer: 4,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">35</span>

<span class="keyword">Explanation:</span>
For i = 1:
1

For i = 2:
1 + 2 = 3

For i = 3:
1 + 2 + 3 = 6

For i = 4:
1 + 2 + 3 + 4 = 10

For i = 5:
1 + 2 + 3 + 4 + 5 = 15

Total:
1 + 3 + 6 + 10 + 15 = 35

Therefore, the output is 35.</code></pre>

</div>
`
};


const javascriptLoopsDifficultQuestion14 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">let</span> i = <span class="program-code-box-number">5</span>;

<span class="program-code-box-keyword">while</span> (i--) {
    console.log(i);
}</code></pre>

</div>
`,

    options: [
        "5 4 3 2 1",
        "4 3 2 1 0",
        "5 4 3 2 1 0",
        "4 3 2 1"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">4
3
2
1
0</span>

<span class="keyword">Explanation:</span>
The postfix decrement operator i-- returns the current
value for the condition and then decreases i.

The values printed are 4, 3, 2, 1 and 0.</code></pre>

</div>
`
};


const javascriptLoopsDifficultQuestion15 = {
    question: "Which loop is most suitable to iterate over a Map's entries?",

    options: [
        "for...in",
        "for...of with destructuring",
        "while",
        "do...while"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span>
<span class="string">for...of with destructuring</span>

<span class="keyword">Example:</span>
<span class="keyword">const</span> map = <span class="keyword">new</span> Map([
    [<span class="string">"name"</span>, <span class="string">"Pradeep"</span>],
    [<span class="string">"age"</span>, <span class="number">38</span>]
]);

<span class="keyword">for</span> (<span class="keyword">const</span> [key, value] <span class="keyword">of</span> map) {
    console.log(key, value);
}

The Map object is iterable, and for...of can directly
iterate over its entries.</code></pre>

</div>
`
};


const javascriptLoopsDifficultQuestion16 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">let</span> arr = [
    <span class="program-code-box-number">10</span>, <span class="program-code-box-number">20</span>, <span class="program-code-box-number">30</span>
];

<span class="program-code-box-keyword">let</span> sum = <span class="program-code-box-number">0</span>;

<span class="program-code-box-keyword">for</span> (
    <span class="program-code-box-keyword">let</span> i = <span class="program-code-box-number">0</span>;
    i &lt; arr.length;
    sum += arr[i], i++
);

console.log(sum);</code></pre>

</div>
`,

    options: [
        "0",
        "60",
        "30",
        "Error (infinite loop)"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">60</span>

<span class="keyword">Explanation:</span>
The for loop has an empty body because of the semicolon.

The update expression performs two operations:

sum += arr[i]
i++

The values added are:

10 + 20 + 30 = 60

Therefore, the output is 60.</code></pre>

</div>
`
};


const javascriptLoopsDifficultQuestion17 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">let</span> i = <span class="program-code-box-number">0</span>;

<span class="program-code-box-keyword">for</span> (;;) {

    <span class="program-code-box-keyword">if</span> (i &gt;= <span class="program-code-box-number">3</span>) {
        <span class="program-code-box-keyword">break</span>;
    }

    console.log(i);
    i++;
}</code></pre>

</div>
`,

    options: [
        "0 1 2",
        "1 2 3",
        "Infinite loop",
        "Syntax error"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">0
1
2</span>

<span class="keyword">Explanation:</span>
The for loop has no initialization, condition or update expression.

Therefore, for (;;) creates an infinite loop.

However, when i becomes 3, the break statement
terminates the loop.

Therefore, the output is 0, 1 and 2.</code></pre>

</div>
`
};


const javascriptLoopsDifficultQuestion18 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">let</span> str = <span class="program-code-box-string">"abc"</span>;
<span class="program-code-box-keyword">let</span> res = <span class="program-code-box-string">""</span>;

<span class="program-code-box-keyword">for</span> (<span class="program-code-box-keyword">let</span> ch <span class="program-code-box-keyword">of</span> str) {
    res = ch + res;
}

console.log(res);</code></pre>

</div>
`,

    options: [
        "abc",
        "cba",
        "aaabbbccc",
        "Error"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">cba</span>

<span class="keyword">Explanation:</span>
The for...of loop reads the characters in this order:

a → res = "a"
b → res = "ba"
c → res = "cba"

Therefore, the final output is "cba".</code></pre>

</div>
`
};


const javascriptLoopsDifficultQuestion19 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">let</span> arr = [
    <span class="program-code-box-number">1</span>, <span class="program-code-box-number">2</span>, <span class="program-code-box-number">3</span>
];

<span class="program-code-box-keyword">for</span> (<span class="program-code-box-keyword">let</span> i = <span class="program-code-box-number">0</span>; i &lt; arr.length; i++) {
    setTimeout(() =&gt; console.log(arr[i]), <span class="program-code-box-number">0</span>);
}</code></pre>

</div>
`,

    options: [
        "1 2 3",
        "3 3 3",
        "undefined undefined undefined",
        "1 2 3 (after delay)"
    ],

    answer: 4,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">1
2
3</span>

<span class="keyword">Explanation:</span>
The loop uses let, so each iteration gets its own
binding for i.

The setTimeout callbacks execute after the loop,
but each callback remembers the correct value of i.

Therefore, the values 1, 2 and 3 are printed after the delay.</code></pre>

</div>
`
};


const javascriptLoopsDifficultQuestion20 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">let</span> count = <span class="program-code-box-number">0</span>;

<span class="program-code-box-keyword">for</span> (<span class="program-code-box-keyword">let</span> i = <span class="program-code-box-number">0</span>; i &lt; <span class="program-code-box-number">3</span>; i++) {

    <span class="program-code-box-keyword">for</span> (<span class="program-code-box-keyword">let</span> j = <span class="program-code-box-number">0</span>; j &lt; <span class="program-code-box-number">3</span>; j++) {

        <span class="program-code-box-keyword">if</span> ((i + j) % <span class="program-code-box-number">2</span> === <span class="program-code-box-number">0</span>)
            <span class="program-code-box-keyword">continue</span>;

        count++;
    }
}

console.log(count);</code></pre>

</div>
`,

    options: [
        "9",
        "6",
        "4",
        "3"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">4</span>

<span class="keyword">Explanation:</span>
The continue statement skips iterations where
(i + j) is even.

The combinations where (i + j) is odd are:

(0, 1)
(1, 0)
(1, 2)
(2, 1)

There are 4 such combinations.

Therefore, count becomes 4.</code></pre>

</div>
`
};

const javascriptFunctionsQuestion1 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">function</span> greet(name = <span class="program-code-box-string">"Guest"</span>) {

    <span class="program-code-box-keyword">return</span> <span class="program-code-box-string">"Hello, "</span> + name;
}

console.log(greet());</code></pre>

</div>
`,

    options: [
        "Hello, undefined",
        "Hello, null",
        "Hello, Guest",
        "Error"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Hello, Guest</span>

<span class="keyword">Explanation:</span>
The function parameter <span class="string">name</span> has a default value
of <span class="string">"Guest"</span>.

Since no argument is passed to <span class="string">greet()</span>,
the default value is used.

Therefore, the output is:

<span class="string">Hello, Guest</span></code></pre>

</div>
`
};


const javascriptFunctionsQuestion2 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">const</span> add = (a, b) =&gt; a + b;

console.log(add(<span class="program-code-box-number">2</span>, <span class="program-code-box-number">3</span>));</code></pre>

</div>
`,

    options: [
        "5",
        "\"23\"",
        "undefined",
        "Error"
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
The arrow function adds the two arguments passed to it.

2 + 3 = 5

Therefore, the output is:

<span class="string">5</span></code></pre>

</div>
`
};


const javascriptFunctionsQuestion3 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">function</span> test() {

    <span class="program-code-box-keyword">return</span> {
        message: <span class="program-code-box-string">"Hi"</span>
    };
}

console.log(test().message);</code></pre>

</div>
`,

    options: [
        "undefined",
        "Hi",
        "Error",
        "null"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">Hi</span>

<span class="keyword">Explanation:</span>
The function returns an object containing the
<span class="string">message</span> property.

The expression <span class="string">test().message</span> accesses
that property.

Therefore, the output is:

<span class="string">Hi</span></code></pre>

</div>
`
};


const javascriptFunctionsQuestion4 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">function</span> outer() {

    <span class="program-code-box-keyword">let</span> count = <span class="program-code-box-number">0</span>;

    <span class="program-code-box-keyword">return function</span> inner() {
        count++;
        <span class="program-code-box-keyword">return</span> count;
    };
}

<span class="program-code-box-keyword">const</span> fn = outer();

console.log(fn(), fn(), fn());</code></pre>

</div>
`,

    options: [
        "1 1 1",
        "1 2 3",
        "0 1 2",
        "Error"
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
The inner function forms a closure over the
<span class="string">count</span> variable.

Initially:

count = 0

First call:
count becomes 1

Second call:
count becomes 2

Third call:
count becomes 3

Therefore, the output is:

<span class="string">1 2 3</span></code></pre>

</div>
`
};


const javascriptFunctionsQuestion5 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">const</span> arr = [<span class="program-code-box-number">1</span>, <span class="program-code-box-number">2</span>, <span class="program-code-box-number">3</span>];

<span class="program-code-box-keyword">const</span> result = arr.map(<span class="program-code-box-keyword">function</span>(x) {
    <span class="program-code-box-keyword">return</span> x * <span class="program-code-box-number">2</span>;
});

console.log(result);</code></pre>

</div>
`,

    options: [
        "[1, 2, 3]",
        "[2, 4, 6]",
        "[1, 4, 9]",
        "undefined"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">[2, 4, 6]</span>

<span class="keyword">Explanation:</span>
The map() method executes the function for every
element of the array.

1 × 2 = 2
2 × 2 = 4
3 × 2 = 6

Therefore, a new array is created:

<span class="string">[2, 4, 6]</span></code></pre>

</div>
`
};


const javascriptFunctionsQuestion6 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">function</span> test(a = <span class="program-code-box-number">10</span>, b = <span class="program-code-box-number">20</span>) {

    <span class="program-code-box-keyword">return</span> a + b;
}

console.log(test(<span class="program-code-box-number">5</span>));</code></pre>

</div>
`,

    options: [
        "25",
        "15",
        "20",
        "Error"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">25</span>

<span class="keyword">Explanation:</span>
The first argument is passed as 5.

Therefore:

a = 5

No value is passed for b, so its default value
20 is used.

5 + 20 = 25

Therefore, the output is:

<span class="string">25</span></code></pre>

</div>
`
};


const javascriptFunctionsQuestion7 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">const</span> fn = () =&gt; {

    <span class="program-code-box-keyword">return</span> {
        name: <span class="program-code-box-string">"John"</span>
    };
};

console.log(fn().name);</code></pre>

</div>
`,

    options: [
        "undefined",
        "John",
        "Error",
        "null"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">John</span>

<span class="keyword">Explanation:</span>
The arrow function returns an object containing
the <span class="string">name</span> property.

The expression <span class="string">fn().name</span> accesses
the value of the name property.

Therefore, the output is:

<span class="string">John</span></code></pre>

</div>
`
};


const javascriptFunctionsQuestion8 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">function</span> sum(...nums) {

    <span class="program-code-box-keyword">return</span> nums.reduce(
        (acc, n) =&gt; acc + n,
        <span class="program-code-box-number">0</span>
    );
}

console.log(sum(<span class="program-code-box-number">1</span>, <span class="program-code-box-number">2</span>, <span class="program-code-box-number">3</span>, <span class="program-code-box-number">4</span>));</code></pre>

</div>
`,

    options: [
        "10",
        "4",
        "[1, 2, 3, 4]",
        "Error"
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
The rest parameter <span class="string">...nums</span> collects all
arguments into an array.

The reduce() method adds all the values:

1 + 2 + 3 + 4 = 10

Therefore, the output is:

<span class="string">10</span></code></pre>

</div>
`
};


const javascriptFunctionsQuestion9 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">const</span> obj = {

    value: <span class="program-code-box-number">10</span>,

    getValue: <span class="program-code-box-keyword">function</span>() {
        <span class="program-code-box-keyword">return</span> <span class="program-code-box-keyword">this</span>.value;
    }
};

console.log(obj.getValue());</code></pre>

</div>
`,

    options: [
        "undefined",
        "10",
        "Error",
        "null"
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
The function <span class="string">getValue()</span> is called as a
method of the <span class="string">obj</span> object.

Therefore, <span class="string">this</span> refers to the
<span class="string">obj</span> object.

So:

this.value = 10

Therefore, the output is:

<span class="string">10</span></code></pre>

</div>
`
};


const javascriptFunctionsQuestion10 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">function</span> outerFunc() {

    <span class="program-code-box-keyword">var</span> x = <span class="program-code-box-number">5</span>;

    <span class="program-code-box-keyword">function</span> innerFunc() {
        console.log(x);
    }

    innerFunc();
}

outerFunc();</code></pre>

</div>
`,

    options: [
        "undefined",
        "5",
        "Error",
        "null"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">5</span>

<span class="keyword">Explanation:</span>
The inner function can access variables declared
inside its outer function.

The variable <span class="string">x</span> is declared inside
<span class="string">outerFunc()</span> and is accessible to
<span class="string">innerFunc()</span>.

Therefore, the output is:

<span class="string">5</span></code></pre>

</div>
`
};

const javascriptArraysQuestion1 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">const</span> arr = [<span class="program-code-box-number">10</span>, <span class="program-code-box-number">20</span>, <span class="program-code-box-number">30</span>];

console.log(arr[<span class="program-code-box-number">1</span>]);</code></pre>

</div>
`,

    options: [
        "10",
        "20",
        "30",
        "undefined"
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
JavaScript arrays use zero-based indexing.

arr[0] = 10
arr[1] = 20
arr[2] = 30

Therefore, arr[1] returns:

<span class="string">20</span></code></pre>

</div>
`
};


const javascriptArraysQuestion2 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">const</span> arr = [<span class="program-code-box-number">1</span>, <span class="program-code-box-number">2</span>, <span class="program-code-box-number">3</span>];

arr.push(<span class="program-code-box-number">4</span>);

console.log(arr);</code></pre>

</div>
`,

    options: [
        "[1, 2, 3]",
        "[4, 1, 2, 3]",
        "[1, 2, 3, 4]",
        "4"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">[1, 2, 3, 4]</span>

<span class="keyword">Explanation:</span>
The push() method adds an element to the
end of an array.

The value 4 is added after 3.

Therefore:

<span class="string">[1, 2, 3, 4]</span></code></pre>

</div>
`
};


const javascriptArraysQuestion3 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">const</span> arr = [<span class="program-code-box-number">10</span>, <span class="program-code-box-number">20</span>, <span class="program-code-box-number">30</span>];

console.log(arr.length);</code></pre>

</div>
`,

    options: [
        "2",
        "3",
        "4",
        "undefined"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">3</span>

<span class="keyword">Explanation:</span>
The length property returns the total number
of elements present in an array.

The array contains:

10, 20, 30

Therefore:

<span class="string">arr.length = 3</span></code></pre>

</div>
`
};


const javascriptArraysQuestion4 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">const</span> arr = [<span class="program-code-box-number">10</span>, <span class="program-code-box-number">20</span>, <span class="program-code-box-number">30</span>];

arr.pop();

console.log(arr);</code></pre>

</div>
`,

    options: [
        "[10, 20]",
        "[20, 30]",
        "[10, 20, 30]",
        "30"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">[10, 20]</span>

<span class="keyword">Explanation:</span>
The pop() method removes the last element
from an array.

Before:

[10, 20, 30]

After pop():

[10, 20]

Therefore, the output is:

<span class="string">[10, 20]</span></code></pre>

</div>
`
};


const javascriptArraysQuestion5 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">const</span> arr = [<span class="program-code-box-number">1</span>, <span class="program-code-box-number">2</span>, <span class="program-code-box-number">3</span>, <span class="program-code-box-number">4</span>];

<span class="program-code-box-keyword">const</span> result = arr.map(x =&gt; x * <span class="program-code-box-number">2</span>);

console.log(result);</code></pre>

</div>
`,

    options: [
        "[1, 2, 3, 4]",
        "[2, 4, 6, 8]",
        "[1, 4, 9, 16]",
        "8"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">[2, 4, 6, 8]</span>

<span class="keyword">Explanation:</span>
The map() method creates a new array by applying
the given function to every element.

1 × 2 = 2
2 × 2 = 4
3 × 2 = 6
4 × 2 = 8

Therefore:

<span class="string">[2, 4, 6, 8]</span></code></pre>

</div>
`
};


const javascriptArraysQuestion6 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">const</span> arr = [<span class="program-code-box-number">5</span>, <span class="program-code-box-number">10</span>, <span class="program-code-box-number">15</span>, <span class="program-code-box-number">20</span>];

<span class="program-code-box-keyword">const</span> result = arr.filter(x =&gt; x &gt; <span class="program-code-box-number">10</span>);

console.log(result);</code></pre>

</div>
`,

    options: [
        "[5, 10]",
        "[10, 15, 20]",
        "[15, 20]",
        "[5, 15]"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">[15, 20]</span>

<span class="keyword">Explanation:</span>
The filter() method returns only those elements
that satisfy the specified condition.

Condition:

x &gt; 10

15 and 20 satisfy the condition.

Therefore:

<span class="string">[15, 20]</span></code></pre>

</div>
`
};


const javascriptArraysQuestion7 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">const</span> arr = [<span class="program-code-box-number">1</span>, <span class="program-code-box-number">2</span>, <span class="program-code-box-number">3</span>, <span class="program-code-box-number">4</span>];

<span class="program-code-box-keyword">const</span> result = arr.reduce(
    (sum, value) =&gt; sum + value,
    <span class="program-code-box-number">0</span>
);

console.log(result);</code></pre>

</div>
`,

    options: [
        "4",
        "10",
        "24",
        "0"
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
The reduce() method combines all array elements
into a single value.

Calculation:

0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10

Therefore:

<span class="string">10</span></code></pre>

</div>
`
};


const javascriptArraysQuestion8 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">const</span> arr = [<span class="program-code-box-number">10</span>, <span class="program-code-box-number">20</span>, <span class="program-code-box-number">30</span>];

arr.unshift(<span class="program-code-box-number">5</span>);

console.log(arr);</code></pre>

</div>
`,

    options: [
        "[10, 20, 30, 5]",
        "[5, 10, 20, 30]",
        "[10, 5, 20, 30]",
        "[5, 30, 20, 10]"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">[5, 10, 20, 30]</span>

<span class="keyword">Explanation:</span>
The unshift() method adds one or more elements
to the beginning of an array.

Before:

[10, 20, 30]

After:

[5, 10, 20, 30]

Therefore, the output is:

<span class="string">[5, 10, 20, 30]</span></code></pre>

</div>
`
};


const javascriptArraysQuestion9 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">const</span> arr = [<span class="program-code-box-number">10</span>, <span class="program-code-box-number">20</span>, <span class="program-code-box-number">30</span>];

<span class="program-code-box-keyword">const</span> result = arr.slice(<span class="program-code-box-number">1</span>);

console.log(result);</code></pre>

</div>
`,

    options: [
        "[10]",
        "[20]",
        "[20, 30]",
        "[10, 20]"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">[20, 30]</span>

<span class="keyword">Explanation:</span>
The slice() method returns a portion of an array
without modifying the original array.

Starting from index 1:

index 0 → 10
index 1 → 20
index 2 → 30

Therefore:

<span class="string">arr.slice(1)</span>

returns:

<span class="string">[20, 30]</span></code></pre>

</div>
`
};


const javascriptArraysQuestion10 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">const</span> arr = [<span class="program-code-box-number">1</span>, <span class="program-code-box-number">2</span>, <span class="program-code-box-number">3</span>];

console.log(arr.includes(<span class="program-code-box-number">2</span>));</code></pre>

</div>
`,

    options: [
        "true",
        "false",
        "2",
        "undefined"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Output:</span>
<span class="string">true</span>

<span class="keyword">Explanation:</span>
The includes() method checks whether a specified
element exists in an array.

The value 2 is present in the array:

[1, 2, 3]

Therefore, includes() returns:

<span class="string">true</span></code></pre>

</div>
`
};

const javascriptFunctionsAdvancedQuestion1 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">
<pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">function</span> createCounter() {
    <span class="program-code-box-keyword">let</span> count = <span class="program-code-box-number">0</span>;
    <span class="program-code-box-keyword">return</span> {
        increment: () =&gt; count++,
        getCount: () =&gt; count
    };
}
<span class="program-code-box-keyword">const</span> counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount());</code></pre>
</div>
`,

    options: [
        "0",
        "1",
        "2",
        "Error"
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
The createCounter() function creates a closure around
the count variable.

First increment:
count = 1

Second increment:
count = 2

Therefore, getCount() returns:

<span class="string">2</span></code></pre>
</div>
`
};


const javascriptFunctionsAdvancedQuestion2 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">
<pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">const</span> obj = {
    name: <span class="program-code-box-string">"John"</span>,
    greet: <span class="program-code-box-keyword">function</span>() {
        setTimeout(<span class="program-code-box-keyword">function</span>() {
            console.log(<span class="program-code-box-string">"Hello, "</span> + <span class="program-code-box-keyword">this</span>.name);
        }, <span class="program-code-box-number">0</span>);
    }
};
obj.greet();</code></pre>
</div>
`,

    options: [
        "Hello, John",
        "Hello, undefined",
        "Error",
        "null"
    ],

    answer: 2,

    solution: `
<div class="code-box">
<div class="code-title">
<span>Answer</span>
</div>
<pre><code><span class="keyword">Output:</span>
<span class="string">Hello, undefined</span>

<span class="keyword">Explanation:</span>
The function passed to setTimeout() is a regular function.
It does not preserve the this value of obj.

Therefore, this.name does not refer to obj.name.

The output is:

<span class="string">Hello, undefined</span></code></pre>
</div>
`
};


const javascriptFunctionsAdvancedQuestion3 = {
    question: "How can the following JavaScript program be modified to print Hello, John?",

    program: `
<div class="program-code-box">
<pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">const</span> obj = {
    name: <span class="program-code-box-string">"John"</span>,
    greet: <span class="program-code-box-keyword">function</span>() {
        setTimeout(<span class="program-code-box-keyword">function</span>() {
            console.log(<span class="program-code-box-string">"Hello, "</span> + <span class="program-code-box-keyword">this</span>.name);
        }, <span class="program-code-box-number">0</span>);
    }
};
obj.greet();</code></pre>
</div>
`,

    options: [
        "Use an arrow function",
        "Use let instead of const",
        "Use var instead of const",
        "Remove setTimeout()"
    ],

    answer: 1,

    solution: `
<div class="code-box">
<div class="code-title">
<span>Answer</span>
</div>
<pre><code><span class="keyword">Correct Answer:</span>
<span class="string">Use an arrow function</span>

<span class="keyword">Explanation:</span>
An arrow function does not create its own this.
It inherits this from the surrounding function.

The code can be changed to:

setTimeout(() =&gt; {
    console.log(<span class="string">"Hello, "</span> + <span class="keyword">this</span>.name);
}, 0);

Another solution is to explicitly bind this:

setTimeout(<span class="keyword">function</span>() {
    console.log(<span class="string">"Hello, "</span> + <span class="keyword">this</span>.name);
}.bind(<span class="keyword">this</span>), 0);</code></pre>
</div>
`
};


const javascriptFunctionsAdvancedQuestion4 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">
<pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">function</span> test() {
    console.log(a);
    console.log(b);
    <span class="program-code-box-keyword">var</span> a = <span class="program-code-box-number">10</span>;
    <span class="program-code-box-keyword">let</span> b = <span class="program-code-box-number">20</span>;
}
test();</code></pre>
</div>
`,

    options: [
        "10 20",
        "undefined 20",
        "undefined, then ReferenceError",
        "Error for both"
    ],

    answer: 3,

    solution: `
<div class="code-box">
<div class="code-title">
<span>Answer</span>
</div>
<pre><code><span class="keyword">Output:</span>
<span class="string">undefined</span>
<span class="string">ReferenceError</span>

<span class="keyword">Explanation:</span>
The var declaration is hoisted and initialized with undefined.

Therefore:

console.log(a);

prints undefined.

The let variable b is hoisted but remains in the
Temporal Dead Zone until its declaration is reached.

Therefore, accessing b before declaration causes
a ReferenceError.</code></pre>
</div>
`
};


const javascriptFunctionsAdvancedQuestion5 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">
<pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">const</span> multiply = (x) =&gt; (y) =&gt; (z) =&gt; x * y * z;
console.log(multiply(<span class="program-code-box-number">2</span>)(<span class="program-code-box-number">3</span>)(<span class="program-code-box-number">4</span>));</code></pre>
</div>
`,

    options: [
        "24",
        "9",
        "20",
        "Error"
    ],

    answer: 1,

    solution: `
<div class="code-box">
<div class="code-title">
<span>Answer</span>
</div>
<pre><code><span class="keyword">Output:</span>
<span class="string">24</span>

<span class="keyword">Explanation:</span>
The function returns another function at each level.

multiply(2)(3)(4)

The final calculation is:

2 × 3 × 4 = 24

Therefore, the output is:

<span class="string">24</span></code></pre>
</div>
`
};


const javascriptFunctionsAdvancedQuestion6 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">
<pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">function</span> outer() {
    <span class="program-code-box-keyword">for</span> (<span class="program-code-box-keyword">var</span> i = <span class="program-code-box-number">0</span>; i &lt; <span class="program-code-box-number">3</span>; i++) {
        setTimeout(<span class="program-code-box-keyword">function</span>() {
            console.log(i);
        }, <span class="program-code-box-number">0</span>);
    }
}
outer();</code></pre>
</div>
`,

    options: [
        "0 1 2",
        "3 3 3",
        "0 1 2 3",
        "Error"
    ],

    answer: 2,

    solution: `
<div class="code-box">
<div class="code-title">
<span>Answer</span>
</div>
<pre><code><span class="keyword">Output:</span>
<span class="string">3 3 3</span>

<span class="keyword">Explanation:</span>
The loop uses var, which is function-scoped.

By the time the setTimeout() callbacks execute,
the loop has already completed.

The final value of i is 3.

Therefore, all three callbacks print:

<span class="string">3 3 3</span></code></pre>
</div>
`
};


const javascriptFunctionsAdvancedQuestion7 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">
<pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">function</span> outer() {
    <span class="program-code-box-keyword">for</span> (<span class="program-code-box-keyword">let</span> i = <span class="program-code-box-number">0</span>; i &lt; <span class="program-code-box-number">3</span>; i++) {
        setTimeout(() =&gt; {
            console.log(i);
        }, <span class="program-code-box-number">0</span>);
    }
}
outer();</code></pre>
</div>
`,

    options: [
        "0 1 2",
        "3 3 3",
        "0 1 2 3",
        "Error"
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
The loop uses let.

A new binding of i is created for each iteration.
The arrow function preserves the value belonging
to that iteration.

Therefore, the callbacks print:

<span class="string">0 1 2</span></code></pre>
</div>
`
};


const javascriptFunctionsAdvancedQuestion8 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">
<pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">const</span> fn = <span class="program-code-box-keyword">function</span>(a, b = <span class="program-code-box-number">10</span>, c = <span class="program-code-box-number">20</span>) {
    <span class="program-code-box-keyword">return</span> a + b + c;
};
console.log(fn(<span class="program-code-box-number">5</span>, <span class="program-code-box-keyword">undefined</span>, <span class="program-code-box-number">30</span>));</code></pre>
</div>
`,

    options: [
        "55",
        "45",
        "35",
        "Error"
    ],

    answer: 1,

    solution: `
<div class="code-box">
<div class="code-title">
<span>Answer</span>
</div>
<pre><code><span class="keyword">Output:</span>
<span class="string">45</span>

<span class="keyword">Explanation:</span>
The second argument is explicitly passed as undefined.

Therefore, the default value of b is used:

b = 10

So:

5 + 10 + 30 = 45

Therefore, the output is:

<span class="string">45</span></code></pre>
</div>
`
};


const javascriptFunctionsAdvancedQuestion9 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">
<pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">function</span> test(...args) {
    <span class="program-code-box-keyword">return</span> args.reduce((sum, n) =&gt; sum + n, <span class="program-code-box-number">0</span>);
}
console.log(test(<span class="program-code-box-number">1</span>, <span class="program-code-box-number">2</span>, <span class="program-code-box-number">3</span>, <span class="program-code-box-number">4</span>, <span class="program-code-box-number">5</span>));</code></pre>
</div>
`,

    options: [
        "15",
        "5",
        "[1,2,3,4,5]",
        "Error"
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
The rest parameter collects all arguments into an array.

args = [1, 2, 3, 4, 5]

The reduce() method adds all values:

1 + 2 + 3 + 4 + 5 = 15

Therefore, the output is:

<span class="string">15</span></code></pre>
</div>
`
};


const javascriptFunctionsAdvancedQuestion10 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">
<pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">const</span> obj = {
    value: <span class="program-code-box-number">100</span>,
    getValue: () =&gt; {
        <span class="program-code-box-keyword">return</span> <span class="program-code-box-keyword">this</span>.value;
    }
};
console.log(obj.getValue());</code></pre>
</div>
`,

    options: [
        "100",
        "undefined",
        "Error",
        "null"
    ],

    answer: 2,

    solution: `
<div class="code-box">
<div class="code-title">
<span>Answer</span>
</div>
<pre><code><span class="keyword">Output:</span>
<span class="string">undefined</span>

<span class="keyword">Explanation:</span>
Arrow functions do not have their own this.

The arrow function inherits this from its surrounding
lexical scope. It does not automatically refer to obj.

Therefore, this.value is undefined.

<span class="string">undefined</span></code></pre>
</div>
`
};


const javascriptFunctionsAdvancedQuestion11 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">
<pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">function</span> createAdder(x) {
    <span class="program-code-box-keyword">return function</span>(y) {
        <span class="program-code-box-keyword">return</span> x + y;
    };
}
<span class="program-code-box-keyword">const</span> add5 = createAdder(<span class="program-code-box-number">5</span>);
console.log(add5(<span class="program-code-box-number">10</span>));</code></pre>
</div>
`,

    options: [
        "10",
        "15",
        "5",
        "Error"
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
createAdder(5) creates a function that remembers x = 5.

When add5(10) is called:

5 + 10 = 15

Therefore, the output is:

<span class="string">15</span></code></pre>
</div>
`
};


const javascriptFunctionsAdvancedQuestion12 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">
<pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">async function</span> fetchData() {
    <span class="program-code-box-keyword">return</span> <span class="program-code-box-string">"Data loaded"</span>;
}
fetchData().then(result =&gt; console.log(result));</code></pre>
</div>
`,

    options: [
        "Data loaded",
        "Promise {&lt;pending&gt;}",
        "undefined",
        "Error"
    ],

    answer: 1,

    solution: `
<div class="code-box">
<div class="code-title">
<span>Answer</span>
</div>
<pre><code><span class="keyword">Output:</span>
<span class="string">Data loaded</span>

<span class="keyword">Explanation:</span>
An async function always returns a Promise.

The returned Promise is fulfilled with the value:

<span class="string">"Data loaded"</span>

The then() method receives this value and
console.log() prints it.</code></pre>
</div>
`
};


const javascriptFunctionsAdvancedQuestion13 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">
<pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">function</span>* generator() {
    <span class="program-code-box-keyword">yield</span> <span class="program-code-box-number">1</span>;
    <span class="program-code-box-keyword">yield</span> <span class="program-code-box-number">2</span>;
    <span class="program-code-box-keyword">yield</span> <span class="program-code-box-number">3</span>;
}
<span class="program-code-box-keyword">const</span> gen = generator();
console.log(gen.next().value, gen.next().value, gen.next().value);</code></pre>
</div>
`,

    options: [
        "1 2 3",
        "0 1 2",
        "undefined undefined undefined",
        "Error"
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
Each call to next() resumes the generator from
where the previous yield stopped.

First next() → 1
Second next() → 2
Third next() → 3

Therefore:

<span class="string">1 2 3</span></code></pre>
</div>
`
};


const javascriptFunctionsAdvancedQuestion14 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">
<pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">const</span> fn1 = () =&gt; <span class="program-code-box-string">"Hello"</span>;
<span class="program-code-box-keyword">const</span> fn2 = () =&gt; ({ message: <span class="program-code-box-string">"Hi"</span> });
console.log(fn1(), fn2().message);</code></pre>
</div>
`,

    options: [
        "Hello Hi",
        "Hello undefined",
        "Error",
        "null"
    ],

    answer: 1,

    solution: `
<div class="code-box">
<div class="code-title">
<span>Answer</span>
</div>
<pre><code><span class="keyword">Output:</span>
<span class="string">Hello Hi</span>

<span class="keyword">Explanation:</span>
fn1() directly returns the string "Hello".

fn2() returns an object containing the message property.

Therefore:

fn1() = Hello
fn2().message = Hi

Output:

<span class="string">Hello Hi</span></code></pre>
</div>
`
};


const javascriptFunctionsAdvancedQuestion15 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">
<pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">function</span> test() {
    <span class="program-code-box-keyword">return</span>
    {
        name: <span class="program-code-box-string">"John"</span>
    };
}
console.log(test());</code></pre>
</div>
`,

    options: [
        "{ name: \"John\" }",
        "undefined",
        "Error",
        "null"
    ],

    answer: 2,

    solution: `
<div class="code-box">
<div class="code-title">
<span>Answer</span>
</div>
<pre><code><span class="keyword">Output:</span>
<span class="string">undefined</span>

<span class="keyword">Explanation:</span>
JavaScript applies Automatic Semicolon Insertion after
the return statement because the object starts on the
next line.

The statement is effectively treated as:

return;

Therefore, the function returns:

<span class="string">undefined</span></code></pre>
</div>
`
};


const javascriptFunctionsAdvancedQuestion16 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">
<pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">const</span> obj = {
    name: <span class="program-code-box-string">"Alice"</span>,
    greet: <span class="program-code-box-keyword">function</span>() {
        <span class="program-code-box-keyword">const</span> inner = () =&gt; {
            console.log(<span class="program-code-box-string">"Hello, "</span> + <span class="program-code-box-keyword">this</span>.name);
        };
        inner();
    }
};
obj.greet();</code></pre>
</div>
`,

    options: [
        "Hello, Alice",
        "Hello, undefined",
        "Error",
        "null"
    ],

    answer: 1,

    solution: `
<div class="code-box">
<div class="code-title">
<span>Answer</span>
</div>
<pre><code><span class="keyword">Output:</span>
<span class="string">Hello, Alice</span>

<span class="keyword">Explanation:</span>
The greet() function is called as a method of obj,
so this refers to obj.

The inner arrow function inherits this from greet().

Therefore:

this.name = Alice

Output:

<span class="string">Hello, Alice</span></code></pre>
</div>
`
};


const javascriptFunctionsAdvancedQuestion17 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">
<pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">function</span> memoize(fn) {
    <span class="program-code-box-keyword">const</span> cache = {};
    <span class="program-code-box-keyword">return function</span>(...args) {
        <span class="program-code-box-keyword">const</span> key = JSON.stringify(args);
        <span class="program-code-box-keyword">if</span> (cache[key]) <span class="program-code-box-keyword">return</span> cache[key];
        cache[key] = fn(...args);
        <span class="program-code-box-keyword">return</span> cache[key];
    };
}
<span class="program-code-box-keyword">const</span> add = memoize((a, b) =&gt; a + b);
console.log(add(<span class="program-code-box-number">2</span>, <span class="program-code-box-number">3</span>), add(<span class="program-code-box-number">2</span>, <span class="program-code-box-number">3</span>));</code></pre>
</div>
`,

    options: [
        "5 5",
        "5 undefined",
        "Error",
        "NaN NaN"
    ],

    answer: 1,

    solution: `
<div class="code-box">
<div class="code-title">
<span>Answer</span>
</div>
<pre><code><span class="keyword">Output:</span>
<span class="string">5 5</span>

<span class="keyword">Explanation:</span>
The first call calculates:

2 + 3 = 5

The result is stored in the cache.

When add(2, 3) is called again, the cached result
5 is returned instead of executing the function again.

Therefore:

<span class="string">5 5</span></code></pre>
</div>
`
};


const javascriptFunctionsAdvancedQuestion18 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">
<pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">function</span> test(a = <span class="program-code-box-number">10</span>, b = a + <span class="program-code-box-number">5</span>) {
    <span class="program-code-box-keyword">return</span> a + b;
}
console.log(test(<span class="program-code-box-number">5</span>));</code></pre>
</div>
`,

    options: [
        "15",
        "10",
        "20",
        "Error"
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
The first argument sets:

a = 5

The default value of b depends on a:

b = a + 5
b = 5 + 5
b = 10

Therefore:

a + b = 5 + 10 = 15

Output:

<span class="string">15</span></code></pre>
</div>
`
};


const javascriptFunctionsAdvancedQuestion19 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">
<pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">const</span> compose = (f, g) =&gt; (x) =&gt; f(g(x));
<span class="program-code-box-keyword">const</span> double = x =&gt; x * <span class="program-code-box-number">2</span>;
<span class="program-code-box-keyword">const</span> increment = x =&gt; x + <span class="program-code-box-number">1</span>;
<span class="program-code-box-keyword">const</span> fn = compose(double, increment);
console.log(fn(<span class="program-code-box-number">5</span>));</code></pre>
</div>
`,

    options: [
        "10",
        "11",
        "12",
        "Error"
    ],

    answer: 3,

    solution: `
<div class="code-box">
<div class="code-title">
<span>Answer</span>
</div>
<pre><code><span class="keyword">Output:</span>
<span class="string">12</span>

<span class="keyword">Explanation:</span>
The compose() function executes g first and then f.

Here:

increment(5) = 5 + 1 = 6

Then:

double(6) = 6 × 2 = 12

Therefore, the output is:

<span class="string">12</span></code></pre>
</div>
`
};


const javascriptFunctionsAdvancedQuestion20 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">
<pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">function</span> test() {
    console.log(<span class="program-code-box-keyword">typeof</span> inner);
    <span class="program-code-box-keyword">function</span> inner() {}
}
test();</code></pre>
</div>
`,

    options: [
        "undefined",
        "function",
        "Error",
        "null"
    ],

    answer: 2,

    solution: `
<div class="code-box">
<div class="code-title">
<span>Answer</span>
</div>
<pre><code><span class="keyword">Output:</span>
<span class="string">function</span>

<span class="keyword">Explanation:</span>
Function declarations are hoisted to the top of their
function scope.

Therefore, inner is already available when typeof inner
is executed.

The typeof operator returns:

<span class="string">"function"</span>

Therefore, the output is:

<span class="string">function</span></code></pre>
</div>
`
};




const javascriptQuestions_1 = [
    javascriptRestSpreadQuestion1,
    javascriptRestSpreadQuestion2,
    javascriptRestSpreadQuestion3,
    javascriptRestSpreadQuestion4,
    javascriptRestSpreadQuestion5,
    javascriptRestSpreadQuestion6,
    javascriptRestSpreadQuestion7,
    javascriptRestSpreadQuestion8,
    javascriptRestSpreadQuestion9,
    javascriptRestSpreadQuestion10,

    javascriptRestSpreadQuestion11,
    javascriptRestSpreadQuestion12,
    javascriptRestSpreadQuestion13,
    javascriptRestSpreadQuestion14,
    javascriptRestSpreadQuestion15,
    javascriptRestSpreadQuestion16,
    javascriptRestSpreadQuestion17,
    javascriptRestSpreadQuestion18,
    javascriptRestSpreadQuestion19,
    javascriptRestSpreadQuestion20,
    javascriptTypeConversionQuestion1,
    javascriptTypeConversionQuestion2,
    javascriptTypeConversionQuestion3,
    javascriptTypeConversionQuestion4,
    javascriptTypeConversionQuestion5,

    javascriptControlStatementsQuestion1,
    javascriptControlStatementsQuestion2,
    javascriptControlStatementsQuestion3,
    javascriptControlStatementsQuestion4,
    javascriptControlStatementsQuestion5,
    javascriptControlStatementsQuestion6,
    javascriptControlStatementsQuestion7,
    javascriptControlStatementsQuestion8,
    javascriptControlStatementsQuestion9,
    javascriptControlStatementsQuestion10,

    javascriptControlStatementsQuestion11,
    javascriptControlStatementsQuestion12,
    javascriptControlStatementsQuestion13,
    javascriptControlStatementsQuestion14,
    javascriptControlStatementsQuestion15,
    javascriptControlStatementsQuestion16,
    javascriptControlStatementsQuestion17,
    javascriptControlStatementsQuestion18,
    javascriptControlStatementsQuestion19,
    javascriptControlStatementsQuestion20,

    javascriptProgramQuestion1,
    javascriptProgramQuestion2,
    javascriptProgramQuestion3,
    javascriptProgramQuestion4,
    javascriptProgramQuestion5,
    javascriptProgramQuestion6,
    javascriptProgramQuestion7,
    javascriptProgramQuestion8,
    javascriptProgramQuestion9,
    javascriptProgramQuestion10,

    javascriptProgramQuestion11,
    javascriptProgramQuestion12,
    javascriptProgramQuestion13,
    javascriptLoopsDifficultQuestion1,
    javascriptLoopsDifficultQuestion2,
    javascriptLoopsDifficultQuestion3,
    javascriptLoopsDifficultQuestion4,
    javascriptLoopsDifficultQuestion5,
    javascriptLoopsDifficultQuestion6,
    javascriptLoopsDifficultQuestion7,
    javascriptLoopsDifficultQuestion8,
    javascriptLoopsDifficultQuestion9,
    javascriptLoopsDifficultQuestion10,
    javascriptLoopsDifficultQuestion11,
    javascriptLoopsDifficultQuestion12,
    javascriptLoopsDifficultQuestion13,
    javascriptLoopsDifficultQuestion14,
    javascriptLoopsDifficultQuestion15,
    javascriptLoopsDifficultQuestion16,
    javascriptLoopsDifficultQuestion17,
    javascriptLoopsDifficultQuestion18,
    javascriptLoopsDifficultQuestion19,
    javascriptLoopsDifficultQuestion20,
    javascriptFunctionsQuestion1,
    javascriptFunctionsQuestion2,
    javascriptFunctionsQuestion3,
    javascriptFunctionsQuestion4,
    javascriptFunctionsQuestion5,
    javascriptFunctionsQuestion6,
    javascriptFunctionsQuestion7,
    javascriptFunctionsQuestion8,
    javascriptFunctionsQuestion9,
    javascriptFunctionsQuestion10,

    javascriptArraysQuestion1,
    javascriptArraysQuestion2,
    javascriptArraysQuestion3,
    javascriptArraysQuestion4,
    javascriptArraysQuestion5,
    javascriptArraysQuestion6,
    javascriptArraysQuestion7,
    javascriptArraysQuestion8,
    javascriptArraysQuestion9,
    javascriptArraysQuestion10,
        javascriptFunctionsAdvancedQuestion1,
    javascriptFunctionsAdvancedQuestion2,
    javascriptFunctionsAdvancedQuestion3,
    javascriptFunctionsAdvancedQuestion4,
    javascriptFunctionsAdvancedQuestion5,
    javascriptFunctionsAdvancedQuestion6,
    javascriptFunctionsAdvancedQuestion7,
    javascriptFunctionsAdvancedQuestion8,
    javascriptFunctionsAdvancedQuestion9,
    javascriptFunctionsAdvancedQuestion10,
    javascriptFunctionsAdvancedQuestion11,
    javascriptFunctionsAdvancedQuestion12,
    javascriptFunctionsAdvancedQuestion13,
    javascriptFunctionsAdvancedQuestion14,
    javascriptFunctionsAdvancedQuestion15,
    javascriptFunctionsAdvancedQuestion16,
    javascriptFunctionsAdvancedQuestion17,
    javascriptFunctionsAdvancedQuestion18,
    javascriptFunctionsAdvancedQuestion19,
    javascriptFunctionsAdvancedQuestion20
];