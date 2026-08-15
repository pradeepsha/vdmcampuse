
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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="operator">...</span>

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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="string">[10, 20, 30]</span>

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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="string">Rest operator</span>

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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="string">[10, 20, 30]</span>

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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="string">[1, 2, 3, 4]</span>

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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="string">[20, 30, 40]</span>

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

    <pre><code><span class="keyword">Correct Answer:</span>
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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="string">Pradeep</span>

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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="string">[30, 40, 50]</span>

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

    <pre><code><span class="keyword">Correct Answer:</span>
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

    <pre><code><span class="keyword">Correct Answer:</span>
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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="string">[0, 1, 2, 3, 4]</span>

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

    <pre><code><span class="keyword">Correct Answer:</span>
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

    <pre><code><span class="keyword">Correct Answer:</span>
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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="number">10</span>

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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="string">"25"</span>

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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="number">10</span>

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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="function">parseInt()</span>

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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="keyword">if</span>

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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="string">"Adult"</span>

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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="keyword">if...else if...else</span>

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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="string">"Tuesday"</span>

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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="keyword">break</span>

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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="number">1 2</span>

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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="keyword">continue</span>

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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="number">1 2 4 5</span>

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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="number">1 2 3</span>

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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="keyword">do...while</span>

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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="number">10</span>

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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="string">"B"</span>

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

    <pre><code><span class="keyword">Correct Answer:</span>
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

    <pre><code><span class="keyword">Correct Answer:</span> <span class="string">"Low"</span>

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
    javascriptProgramQuestion13
];