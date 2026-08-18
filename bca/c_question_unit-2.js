
const cUnit_2Question1 = {
    question: "Write a C program to check whether a number is positive, negative, or zero using if statements.",

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
    {
        printf(<span class="string">"Positive"</span>);
    }

    <span class="keyword">if</span> (number &lt; <span class="number">0</span>)
    {
        printf(<span class="string">"Negative"</span>);
    }

    <span class="keyword">if</span> (number == <span class="number">0</span>)
    {
        printf(<span class="string">"Zero"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question2 = {
    question: "Write a C program to find the largest of two numbers using only if statements.",

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

    <span class="keyword">if</span> (a &gt; b)
    {
        printf(<span class="string">"%d is largest"</span>, a);
    }

    <span class="keyword">if</span> (b &gt; a)
    {
        printf(<span class="string">"%d is largest"</span>, b);
    }

    <span class="keyword">if</span> (a == b)
    {
        printf(<span class="string">"Both numbers are equal"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question3 = {
    question: "Write a C program to find the largest of three numbers using only if statements.",

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

    largest = a;

    <span class="keyword">if</span> (b &gt; largest)
    {
        largest = b;
    }

    <span class="keyword">if</span> (c &gt; largest)
    {
        largest = c;
    }

    printf(<span class="string">"Largest = %d"</span>, largest);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question4 = {
    question: "Write a C program to check whether a year is a leap year using if statements.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> year;

    printf(<span class="string">"Enter year: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;year);

    <span class="keyword">if</span> ((year % <span class="number">400</span> == <span class="number">0</span>) ||
        (year % <span class="number">4</span> == <span class="number">0</span> &amp;&amp;
         year % <span class="number">100</span> != <span class="number">0</span>))
    {
        printf(<span class="string">"Leap year"</span>);
    }

    <span class="keyword">if</span> (!((year % <span class="number">400</span> == <span class="number">0</span>) ||
          (year % <span class="number">4</span> == <span class="number">0</span> &amp;&amp;
           year % <span class="number">100</span> != <span class="number">0</span>)))
    {
        printf(<span class="string">"Not a leap year"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question5 = {
    question: "Write a C program to check whether a character is a vowel using an if statement.",

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

    <span class="keyword">if</span> (ch == <span class="string">'a'</span> || ch == <span class="string">'e'</span> ||
        ch == <span class="string">'i'</span> || ch == <span class="string">'o'</span> ||
        ch == <span class="string">'u'</span> ||
        ch == <span class="string">'A'</span> || ch == <span class="string">'E'</span> ||
        ch == <span class="string">'I'</span> || ch == <span class="string">'O'</span> ||
        ch == <span class="string">'U'</span>)
    {
        printf(<span class="string">"Vowel"</span>);
    }

    <span class="keyword">if</span> (!(ch == <span class="string">'a'</span> || ch == <span class="string">'e'</span> ||
          ch == <span class="string">'i'</span> || ch == <span class="string">'o'</span> ||
          ch == <span class="string">'u'</span> ||
          ch == <span class="string">'A'</span> || ch == <span class="string">'E'</span> ||
          ch == <span class="string">'I'</span> || ch == <span class="string">'O'</span> ||
          ch == <span class="string">'U'</span>))
    {
        printf(<span class="string">"Not a vowel"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question6 = {
    question: "Write a C program to check whether three given sides can form a valid triangle using an if statement.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> a, b, c;

    printf(<span class="string">"Enter three sides: "</span>);
    scanf(<span class="string">"%d %d %d"</span>, &amp;a, &amp;b, &amp;c);

    <span class="keyword">if</span> (a &gt; <span class="number">0</span> &amp;&amp; b &gt; <span class="number">0</span> &amp;&amp; c &gt; <span class="number">0</span> &amp;&amp;
        a + b &gt; c &amp;&amp; a + c &gt; b &amp;&amp; b + c &gt; a)
    {
        printf(<span class="string">"Valid triangle"</span>);
    }

    <span class="keyword">if</span> (!(a &gt; <span class="number">0</span> &amp;&amp; b &gt; <span class="number">0</span> &amp;&amp; c &gt; <span class="number">0</span> &amp;&amp;
          a + b &gt; c &amp;&amp; a + c &gt; b &amp;&amp; b + c &gt; a))
    {
        printf(<span class="string">"Invalid triangle"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question7 = {
    question: "Write a C program to check whether a number is a three-digit number using an if statement.",

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

    <span class="keyword">if</span> ((number &gt;= <span class="number">100</span> &amp;&amp; number &lt;= <span class="number">999</span>) ||
        (number &lt;= -<span class="number">100</span> &amp;&amp; number &gt;= -<span class="number">999</span>))
    {
        printf(<span class="string">"Three-digit number"</span>);
    }

    <span class="keyword">if</span> (!((number &gt;= <span class="number">100</span> &amp;&amp; number &lt;= <span class="number">999</span>) ||
          (number &lt;= -<span class="number">100</span> &amp;&amp; number &gt;= -<span class="number">999</span>)))
    {
        printf(<span class="string">"Not a three-digit number"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question8 = {
    question: "Write a C program to check whether a number is divisible by 3, 5, or both using if statements.",

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

    <span class="keyword">if</span> (number % <span class="number">3</span> == <span class="number">0</span> &amp;&amp;
        number % <span class="number">5</span> == <span class="number">0</span>)
    {
        printf(<span class="string">"Divisible by both 3 and 5"</span>);
    }

    <span class="keyword">if</span> (number % <span class="number">3</span> == <span class="number">0</span> &amp;&amp;
        number % <span class="number">5</span> != <span class="number">0</span>)
    {
        printf(<span class="string">"Divisible only by 3"</span>);
    }

    <span class="keyword">if</span> (number % <span class="number">5</span> == <span class="number">0</span> &amp;&amp;
        number % <span class="number">3</span> != <span class="number">0</span>)
    {
        printf(<span class="string">"Divisible only by 5"</span>);
    }

    <span class="keyword">if</span> (number % <span class="number">3</span> != <span class="number">0</span> &amp;&amp;
        number % <span class="number">5</span> != <span class="number">0</span>)
    {
        printf(<span class="string">"Not divisible by 3 or 5"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question9 = {
    question: "Write a C program to check whether a given number is a perfect square using an if statement.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;
<span class="keyword">#include</span> &lt;math.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> number, root;

    printf(<span class="string">"Enter a number: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;number);

    <span class="keyword">if</span> (number &gt;= <span class="number">0</span>)
    {
        root = sqrt(number);

        <span class="keyword">if</span> (root * root == number)
        {
            printf(<span class="string">"Perfect square"</span>);
        }

        <span class="keyword">if</span> (root * root != number)
        {
            printf(<span class="string">"Not a perfect square"</span>);
        }
    }

    <span class="keyword">if</span> (number &lt; <span class="number">0</span>)
    {
        printf(<span class="string">"Not a perfect square"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question10 = {
    question: "Write a C program to check whether a number is a palindrome using an if statement.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> number, original, reverse = <span class="number">0</span>, digit;

    printf(<span class="string">"Enter a number: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;number);

    original = number;

    <span class="keyword">while</span> (number != <span class="number">0</span>)
    {
        digit = number % <span class="number">10</span>;
        reverse = reverse * <span class="number">10</span> + digit;
        number /= <span class="number">10</span>;
    }

    <span class="keyword">if</span> (original == reverse)
    {
        printf(<span class="string">"Palindrome number"</span>);
    }

    <span class="keyword">if</span> (original != reverse)
    {
        printf(<span class="string">"Not a palindrome number"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};

const cUnit_2Question11 = {
    question: "Write a C program to check whether a number is a two-digit number using an if-else statement.",

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

    <span class="keyword">if</span> (number &gt;= <span class="number">10</span> &amp;&amp; number &lt;= <span class="number">99</span>)
    {
        printf(<span class="string">"Two-digit number"</span>);
    }
    <span class="keyword">else</span>
    {
        printf(<span class="string">"Not a two-digit number"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question12 = {
    question: "Write a C program to check whether a number is divisible by both 3 and 5 using an if-else statement.",

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

    <span class="keyword">if</span> (number % <span class="number">3</span> == <span class="number">0</span> &amp;&amp;
        number % <span class="number">5</span> == <span class="number">0</span>)
    {
        printf(<span class="string">"Number is divisible by both 3 and 5"</span>);
    }
    <span class="keyword">else</span>
    {
        printf(<span class="string">"Number is not divisible by both 3 and 5"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question13 = {
    question: "Write a C program to check whether a number is divisible by either 3 or 5 using an if-else statement.",

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

    <span class="keyword">if</span> (number % <span class="number">3</span> == <span class="number">0</span> ||
        number % <span class="number">5</span> == <span class="number">0</span>)
    {
        printf(<span class="string">"Number is divisible by 3 or 5"</span>);
    }
    <span class="keyword">else</span>
    {
        printf(<span class="string">"Number is not divisible by 3 or 5"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question14 = {
    question: "Write a C program to check whether a person is eligible for a driving license. The minimum age is 18.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> age;

    printf(<span class="string">"Enter your age: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;age);

    <span class="keyword">if</span> (age &gt;= <span class="number">18</span>)
    {
        printf(<span class="string">"Eligible for driving license"</span>);
    }
    <span class="keyword">else</span>
    {
        printf(<span class="string">"Not eligible for driving license"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question15 = {
    question: "Write a C program to check whether a number is within the range 1 to 100 using an if-else statement.",

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

    <span class="keyword">if</span> (number &gt;= <span class="number">1</span> &amp;&amp; number &lt;= <span class="number">100</span>)
    {
        printf(<span class="string">"Number is within the range"</span>);
    }
    <span class="keyword">else</span>
    {
        printf(<span class="string">"Number is outside the range"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question16 = {
    question: "Write a C program to find whether a given character is an uppercase letter or lowercase letter using if-else statements.",

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
    scanf(<span class="string">" %c"</span>, &amp;ch);

    <span class="keyword">if</span> (ch &gt;= <span class="string">'A'</span> &amp;&amp; ch &lt;= <span class="string">'Z'</span>)
    {
        printf(<span class="string">"Uppercase letter"</span>);
    }
    <span class="keyword">else</span> <span class="keyword">if</span> (ch &gt;= <span class="string">'a'</span> &amp;&amp; ch &lt;= <span class="string">'z'</span>)
    {
        printf(<span class="string">"Lowercase letter"</span>);
    }
    <span class="keyword">else</span>
    {
        printf(<span class="string">"Not an alphabet"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question17 = {
    question: "Write a C program to check whether a character is an alphabet, digit, or special character using if-else statements.",

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
    scanf(<span class="string">" %c"</span>, &amp;ch);

    <span class="keyword">if</span> ((ch &gt;= <span class="string">'A'</span> &amp;&amp; ch &lt;= <span class="string">'Z'</span>) ||
        (ch &gt;= <span class="string">'a'</span> &amp;&amp; ch &lt;= <span class="string">'z'</span>))
    {
        printf(<span class="string">"Alphabet"</span>);
    }
    <span class="keyword">else</span> <span class="keyword">if</span> (ch &gt;= <span class="string">'0'</span> &amp;&amp; ch &lt;= <span class="string">'9'</span>)
    {
        printf(<span class="string">"Digit"</span>);
    }
    <span class="keyword">else</span>
    {
        printf(<span class="string">"Special character"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question18 = {
    question: "Write a C program to find the smallest of three numbers using if-else statements.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> a, b, c;

    printf(<span class="string">"Enter three numbers: "</span>);
    scanf(<span class="string">"%d %d %d"</span>, &amp;a, &amp;b, &amp;c);

    <span class="keyword">if</span> (a &lt; b &amp;&amp; a &lt; c)
    {
        printf(<span class="string">"%d is smallest"</span>, a);
    }
    <span class="keyword">else</span> <span class="keyword">if</span> (b &lt; c)
    {
        printf(<span class="string">"%d is smallest"</span>, b);
    }
    <span class="keyword">else</span>
    {
        printf(<span class="string">"%d is smallest"</span>, c);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question19 = {
    question: "Write a C program to check whether a student has passed or failed based on marks in two subjects. The student passes only if both subjects have marks of 40 or above.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> marks1, marks2;

    printf(<span class="string">"Enter marks of two subjects: "</span>);
    scanf(<span class="string">"%d %d"</span>, &amp;marks1, &amp;marks2);

    <span class="keyword">if</span> (marks1 &gt;= <span class="number">40</span> &amp;&amp; marks2 &gt;= <span class="number">40</span>)
    {
        printf(<span class="string">"Pass"</span>);
    }
    <span class="keyword">else</span>
    {
        printf(<span class="string">"Fail"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question20 = {
    question: "Write a C program to calculate electricity bill using if-else-if statements. If units are up to 100, charge ₹5 per unit; from 101 to 200, charge ₹7 per unit; above 200, charge ₹10 per unit.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> units;
    <span class="keyword">float</span> bill;

    printf(<span class="string">"Enter electricity units: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;units);

    <span class="keyword">if</span> (units &lt;= <span class="number">100</span>)
    {
        bill = units * <span class="number">5</span>;
    }
    <span class="keyword">else</span> <span class="keyword">if</span> (units &lt;= <span class="number">200</span>)
    {
        bill = units * <span class="number">7</span>;
    }
    <span class="keyword">else</span>
    {
        bill = units * <span class="number">10</span>;
    }

    printf(<span class="string">"Electricity Bill = %.2f"</span>, bill);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};

const cUnit_2Question21 = {
    question: "Write a C program to find the largest of two numbers using nested if-else statements.",

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

    <span class="keyword">if</span> (a &gt; b)
    {
        printf(<span class="string">"%d is greater"</span>, a);
    }
    <span class="keyword">else</span>
    {
        <span class="keyword">if</span> (b &gt; a)
        {
            printf(<span class="string">"%d is greater"</span>, b);
        }
        <span class="keyword">else</span>
        {
            printf(<span class="string">"Both numbers are equal"</span>);
        }
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question22 = {
    question: "Write a C program to find the largest of three numbers using nested if-else statements.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> a, b, c;

    printf(<span class="string">"Enter three numbers: "</span>);
    scanf(<span class="string">"%d %d %d"</span>, &amp;a, &amp;b, &amp;c);

    <span class="keyword">if</span> (a &gt; b)
    {
        <span class="keyword">if</span> (a &gt; c)
        {
            printf(<span class="string">"%d is largest"</span>, a);
        }
        <span class="keyword">else</span>
        {
            printf(<span class="string">"%d is largest"</span>, c);
        }
    }
    <span class="keyword">else</span>
    {
        <span class="keyword">if</span> (b &gt; c)
        {
            printf(<span class="string">"%d is largest"</span>, b);
        }
        <span class="keyword">else</span>
        {
            printf(<span class="string">"%d is largest"</span>, c);
        }
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question23 = {
    question: "Write a C program to find the smallest of three numbers using nested if-else statements.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> a, b, c;

    printf(<span class="string">"Enter three numbers: "</span>);
    scanf(<span class="string">"%d %d %d"</span>, &amp;a, &amp;b, &amp;c);

    <span class="keyword">if</span> (a &lt; b)
    {
        <span class="keyword">if</span> (a &lt; c)
        {
            printf(<span class="string">"%d is smallest"</span>, a);
        }
        <span class="keyword">else</span>
        {
            printf(<span class="string">"%d is smallest"</span>, c);
        }
    }
    <span class="keyword">else</span>
    {
        <span class="keyword">if</span> (b &lt; c)
        {
            printf(<span class="string">"%d is smallest"</span>, b);
        }
        <span class="keyword">else</span>
        {
            printf(<span class="string">"%d is smallest"</span>, c);
        }
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question24 = {
    question: "Write a C program to check whether a number is positive or negative and then check whether it is even or odd using nested if-else statements.",

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

    <span class="keyword">if</span> (number &gt;= <span class="number">0</span>)
    {
        <span class="keyword">if</span> (number % <span class="number">2</span> == <span class="number">0</span>)
        {
            printf(<span class="string">"Positive even number"</span>);
        }
        <span class="keyword">else</span>
        {
            printf(<span class="string">"Positive odd number"</span>);
        }
    }
    <span class="keyword">else</span>
    {
        <span class="keyword">if</span> (number % <span class="number">2</span> == <span class="number">0</span>)
        {
            printf(<span class="string">"Negative even number"</span>);
        }
        <span class="keyword">else</span>
        {
            printf(<span class="string">"Negative odd number"</span>);
        }
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question25 = {
    question: "Write a C program to check whether a student is eligible for admission. The student must have marks of 60 or above. If eligible, check whether the student has scored 80 or above for scholarship eligibility using nested if-else statements.",

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

    <span class="keyword">if</span> (marks &gt;= <span class="number">60</span>)
    {
        printf(<span class="string">"Eligible for admission\n"</span>);

        <span class="keyword">if</span> (marks &gt;= <span class="number">80</span>)
        {
            printf(<span class="string">"Eligible for scholarship"</span>);
        }
        <span class="keyword">else</span>
        {
            printf(<span class="string">"Not eligible for scholarship"</span>);
        }
    }
    <span class="keyword">else</span>
    {
        printf(<span class="string">"Not eligible for admission"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question26 = {
    question: "Write a C program to check whether a person is eligible to vote. If the age is 18 or above, then check whether the person is 60 or above and display whether the person is a senior citizen.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> age;

    printf(<span class="string">"Enter your age: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;age);

    <span class="keyword">if</span> (age &gt;= <span class="number">18</span>)
    {
        printf(<span class="string">"Eligible to vote\n"</span>);

        <span class="keyword">if</span> (age &gt;= <span class="number">60</span>)
        {
            printf(<span class="string">"Senior citizen"</span>);
        }
        <span class="keyword">else</span>
        {
            printf(<span class="string">"Not a senior citizen"</span>);
        }
    }
    <span class="keyword">else</span>
    {
        printf(<span class="string">"Not eligible to vote"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question27 = {
    question: "Write a C program to check whether a number is divisible by 2. If it is divisible by 2, then check whether it is also divisible by 4 using nested if-else statements.",

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

    <span class="keyword">if</span> (number % <span class="number">2</span> == <span class="number">0</span>)
    {
        printf(<span class="string">"Number is divisible by 2\n"</span>);

        <span class="keyword">if</span> (number % <span class="number">4</span> == <span class="number">0</span>)
        {
            printf(<span class="string">"Number is also divisible by 4"</span>);
        }
        <span class="keyword">else</span>
        {
            printf(<span class="string">"Number is not divisible by 4"</span>);
        }
    }
    <span class="keyword">else</span>
    {
        printf(<span class="string">"Number is not divisible by 2"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question28 = {
    question: "Write a C program to check whether a character is an alphabet. If it is an alphabet, then check whether it is uppercase or lowercase using nested if-else statements.",

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
    scanf(<span class="string">" %c"</span>, &amp;ch);

    <span class="keyword">if</span> ((ch &gt;= <span class="string">'A'</span> &amp;&amp; ch &lt;= <span class="string">'Z'</span>) ||
        (ch &gt;= <span class="string">'a'</span> &amp;&amp; ch &lt;= <span class="string">'z'</span>))
    {
        <span class="keyword">if</span> (ch &gt;= <span class="string">'A'</span> &amp;&amp; ch &lt;= <span class="string">'Z'</span>)
        {
            printf(<span class="string">"Uppercase alphabet"</span>);
        }
        <span class="keyword">else</span>
        {
            printf(<span class="string">"Lowercase alphabet"</span>);
        }
    }
    <span class="keyword">else</span>
    {
        printf(<span class="string">"Not an alphabet"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question29 = {
    question: "Write a C program to check whether a student has passed in both subjects. If the student passes both subjects, then check whether the average marks are 75 or above for distinction using nested if-else statements.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> marks1, marks2;
    <span class="keyword">float</span> average;

    printf(<span class="string">"Enter marks of two subjects: "</span>);
    scanf(<span class="string">"%d %d"</span>, &amp;marks1, &amp;marks2);

    average = (marks1 + marks2) / <span class="number">2.0</span>;

    <span class="keyword">if</span> (marks1 &gt;= <span class="number">40</span> &amp;&amp; marks2 &gt;= <span class="number">40</span>)
    {
        printf(<span class="string">"Pass\n"</span>);

        <span class="keyword">if</span> (average &gt;= <span class="number">75</span>)
        {
            printf(<span class="string">"Distinction"</span>);
        }
        <span class="keyword">else</span>
        {
            printf(<span class="string">"No distinction"</span>);
        }
    }
    <span class="keyword">else</span>
    {
        printf(<span class="string">"Fail"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question30 = {
    question: "Write a C program to check whether a number is positive. If it is positive, then check whether it is greater than 100 using nested if-else statements.",

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
    {
        printf(<span class="string">"Positive number\n"</span>);

        <span class="keyword">if</span> (number &gt; <span class="number">100</span>)
        {
            printf(<span class="string">"Number is greater than 100"</span>);
        }
        <span class="keyword">else</span>
        {
            printf(<span class="string">"Number is 100 or less"</span>);
        }
    }
    <span class="keyword">else</span>
    {
        printf(<span class="string">"Number is not positive"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};

const cUnit_2Question31 = {
    question: "Write a C program to check whether a number is positive, negative, or zero using an else-if ladder.",

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
    {
        printf(<span class="string">"Positive number"</span>);
    }
    <span class="keyword">else if</span> (number &lt; <span class="number">0</span>)
    {
        printf(<span class="string">"Negative number"</span>);
    }
    <span class="keyword">else</span>
    {
        printf(<span class="string">"Zero"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question32 = {
    question: "Write a C program to display the grade of a student using an else-if ladder. Use A for marks 90 or above, B for 75–89, C for 60–74, D for 40–59, and F below 40.",

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

    <span class="keyword">if</span> (marks &gt;= <span class="number">90</span>)
    {
        printf(<span class="string">"Grade A"</span>);
    }
    <span class="keyword">else if</span> (marks &gt;= <span class="number">75</span>)
    {
        printf(<span class="string">"Grade B"</span>);
    }
    <span class="keyword">else if</span> (marks &gt;= <span class="number">60</span>)
    {
        printf(<span class="string">"Grade C"</span>);
    }
    <span class="keyword">else if</span> (marks &gt;= <span class="number">40</span>)
    {
        printf(<span class="string">"Grade D"</span>);
    }
    <span class="keyword">else</span>
    {
        printf(<span class="string">"Grade F"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question33 = {
    question: "Write a C program to find the largest among three numbers using an else-if ladder.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> a, b, c;

    printf(<span class="string">"Enter three numbers: "</span>);
    scanf(<span class="string">"%d %d %d"</span>, &amp;a, &amp;b, &amp;c);

    <span class="keyword">if</span> (a &gt;= b &amp;&amp; a &gt;= c)
    {
        printf(<span class="string">"%d is largest"</span>, a);
    }
    <span class="keyword">else if</span> (b &gt;= a &amp;&amp; b &gt;= c)
    {
        printf(<span class="string">"%d is largest"</span>, b);
    }
    <span class="keyword">else</span>
    {
        printf(<span class="string">"%d is largest"</span>, c);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question34 = {
    question: "Write a C program to find the smallest among three numbers using an else-if ladder.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> a, b, c;

    printf(<span class="string">"Enter three numbers: "</span>);
    scanf(<span class="string">"%d %d %d"</span>, &amp;a, &amp;b, &amp;c);

    <span class="keyword">if</span> (a &lt;= b &amp;&amp; a &lt;= c)
    {
        printf(<span class="string">"%d is smallest"</span>, a);
    }
    <span class="keyword">else if</span> (b &lt;= a &amp;&amp; b &lt;= c)
    {
        printf(<span class="string">"%d is smallest"</span>, b);
    }
    <span class="keyword">else</span>
    {
        printf(<span class="string">"%d is smallest"</span>, c);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question35 = {
    question: "Write a C program to check whether a character is a vowel, consonant, digit, or special character using an else-if ladder.",

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
    scanf(<span class="string">" %c"</span>, &amp;ch);

    <span class="keyword">if</span> (ch == <span class="string">'a'</span> || ch == <span class="string">'e'</span> ||
        ch == <span class="string">'i'</span> || ch == <span class="string">'o'</span> ||
        ch == <span class="string">'u'</span> ||
        ch == <span class="string">'A'</span> || ch == <span class="string">'E'</span> ||
        ch == <span class="string">'I'</span> || ch == <span class="string">'O'</span> ||
        ch == <span class="string">'U'</span>)
    {
        printf(<span class="string">"Vowel"</span>);
    }
    <span class="keyword">else if</span> ((ch &gt;= <span class="string">'A'</span> &amp;&amp; ch &lt;= <span class="string">'Z'</span>) ||
             (ch &gt;= <span class="string">'a'</span> &amp;&amp; ch &lt;= <span class="string">'z'</span>))
    {
        printf(<span class="string">"Consonant"</span>);
    }
    <span class="keyword">else if</span> (ch &gt;= <span class="string">'0'</span> &amp;&amp; ch &lt;= <span class="string">'9'</span>)
    {
        printf(<span class="string">"Digit"</span>);
    }
    <span class="keyword">else</span>
    {
        printf(<span class="string">"Special character"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question36 = {
    question: "Write a C program to calculate electricity bill based on units consumed using an else-if ladder. Use different rates for different unit ranges.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> units;
    <span class="keyword">float</span> bill;

    printf(<span class="string">"Enter electricity units: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;units);

    <span class="keyword">if</span> (units &lt;= <span class="number">100</span>)
    {
        bill = units * <span class="number">2.0</span>;
    }
    <span class="keyword">else if</span> (units &lt;= <span class="number">200</span>)
    {
        bill = units * <span class="number">3.0</span>;
    }
    <span class="keyword">else if</span> (units &lt;= <span class="number">300</span>)
    {
        bill = units * <span class="number">4.0</span>;
    }
    <span class="keyword">else</span>
    {
        bill = units * <span class="number">5.0</span>;
    }

    printf(<span class="string">"Electricity Bill = %.2f"</span>, bill);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question37 = {
    question: "Write a C program to calculate income tax based on annual income using an else-if ladder.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">float</span> income, tax;

    printf(<span class="string">"Enter annual income: "</span>);
    scanf(<span class="string">"%f"</span>, &amp;income);

    <span class="keyword">if</span> (income &lt;= <span class="number">250000</span>)
    {
        tax = <span class="number">0</span>;
    }
    <span class="keyword">else if</span> (income &lt;= <span class="number">500000</span>)
    {
        tax = income * <span class="number">0.05</span>;
    }
    <span class="keyword">else if</span> (income &lt;= <span class="number">1000000</span>)
    {
        tax = income * <span class="number">0.20</span>;
    }
    <span class="keyword">else</span>
    {
        tax = income * <span class="number">0.30</span>;
    }

    printf(<span class="string">"Tax = %.2f"</span>, tax);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question38 = {
    question: "Write a C program to display the name of a month based on its number using an else-if ladder.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> month;

    printf(<span class="string">"Enter month number: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;month);

    <span class="keyword">if</span> (month == <span class="number">1</span>)
    {
        printf(<span class="string">"January"</span>);
    }
    <span class="keyword">else if</span> (month == <span class="number">2</span>)
    {
        printf(<span class="string">"February"</span>);
    }
    <span class="keyword">else if</span> (month == <span class="number">3</span>)
    {
        printf(<span class="string">"March"</span>);
    }
    <span class="keyword">else if</span> (month == <span class="number">4</span>)
    {
        printf(<span class="string">"April"</span>);
    }
    <span class="keyword">else if</span> (month == <span class="number">5</span>)
    {
        printf(<span class="string">"May"</span>);
    }
    <span class="keyword">else if</span> (month == <span class="number">6</span>)
    {
        printf(<span class="string">"June"</span>);
    }
    <span class="keyword">else if</span> (month == <span class="number">7</span>)
    {
        printf(<span class="string">"July"</span>);
    }
    <span class="keyword">else if</span> (month == <span class="number">8</span>)
    {
        printf(<span class="string">"August"</span>);
    }
    <span class="keyword">else if</span> (month == <span class="number">9</span>)
    {
        printf(<span class="string">"September"</span>);
    }
    <span class="keyword">else if</span> (month == <span class="number">10</span>)
    {
        printf(<span class="string">"October"</span>);
    }
    <span class="keyword">else if</span> (month == <span class="number">11</span>)
    {
        printf(<span class="string">"November"</span>);
    }
    <span class="keyword">else if</span> (month == <span class="number">12</span>)
    {
        printf(<span class="string">"December"</span>);
    }
    <span class="keyword">else</span>
    {
        printf(<span class="string">"Invalid month"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question39 = {
    question: "Write a C program to determine the type of triangle based on its angles using an else-if ladder. Display Acute, Right, or Obtuse triangle.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> angle;

    printf(<span class="string">"Enter the largest angle: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;angle);

    <span class="keyword">if</span> (angle &lt; <span class="number">90</span>)
    {
        printf(<span class="string">"Acute triangle"</span>);
    }
    <span class="keyword">else if</span> (angle == <span class="number">90</span>)
    {
        printf(<span class="string">"Right triangle"</span>);
    }
    <span class="keyword">else if</span> (angle &lt; <span class="number">180</span>)
    {
        printf(<span class="string">"Obtuse triangle"</span>);
    }
    <span class="keyword">else</span>
    {
        printf(<span class="string">"Invalid angle"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question40 = {
    question: "Write a C program to calculate a discount based on the purchase amount using an else-if ladder. Give 5% discount for ₹1,000 or above, 10% for ₹5,000 or above, and 20% for ₹10,000 or above.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">float</span> amount, discount, finalAmount;

    printf(<span class="string">"Enter purchase amount: "</span>);
    scanf(<span class="string">"%f"</span>, &amp;amount);

    <span class="keyword">if</span> (amount &gt;= <span class="number">10000</span>)
    {
        discount = amount * <span class="number">0.20</span>;
    }
    <span class="keyword">else if</span> (amount &gt;= <span class="number">5000</span>)
    {
        discount = amount * <span class="number">0.10</span>;
    }
    <span class="keyword">else if</span> (amount &gt;= <span class="number">1000</span>)
    {
        discount = amount * <span class="number">0.05</span>;
    }
    <span class="keyword">else</span>
    {
        discount = <span class="number">0</span>;
    }

    finalAmount = amount - discount;

    printf(<span class="string">"Discount = %.2f\n"</span>, discount);
    printf(<span class="string">"Final Amount = %.2f"</span>, finalAmount);

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};

const cUnit_2Question41 = {
    question: "Write a C program to display the day of the week using a switch case. Take a number from 1 to 7 as input.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> day;

    printf(<span class="string">"Enter day number (1-7): "</span>);
    scanf(<span class="string">"%d"</span>, &amp;day);

    <span class="keyword">switch</span> (day)
    {
        <span class="keyword">case</span> <span class="number">1</span>:
            printf(<span class="string">"Monday"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">2</span>:
            printf(<span class="string">"Tuesday"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">3</span>:
            printf(<span class="string">"Wednesday"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">4</span>:
            printf(<span class="string">"Thursday"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">5</span>:
            printf(<span class="string">"Friday"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">6</span>:
            printf(<span class="string">"Saturday"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">7</span>:
            printf(<span class="string">"Sunday"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">default</span>:
            printf(<span class="string">"Invalid day number"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question42 = {
    question: "Write a C program to display the name of a month using a switch case. Take a number from 1 to 12 as input.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> month;

    printf(<span class="string">"Enter month number (1-12): "</span>);
    scanf(<span class="string">"%d"</span>, &amp;month);

    <span class="keyword">switch</span> (month)
    {
        <span class="keyword">case</span> <span class="number">1</span>:
            printf(<span class="string">"January"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">2</span>:
            printf(<span class="string">"February"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">3</span>:
            printf(<span class="string">"March"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">4</span>:
            printf(<span class="string">"April"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">5</span>:
            printf(<span class="string">"May"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">6</span>:
            printf(<span class="string">"June"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">7</span>:
            printf(<span class="string">"July"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">8</span>:
            printf(<span class="string">"August"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">9</span>:
            printf(<span class="string">"September"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">10</span>:
            printf(<span class="string">"October"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">11</span>:
            printf(<span class="string">"November"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">12</span>:
            printf(<span class="string">"December"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">default</span>:
            printf(<span class="string">"Invalid month number"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question43 = {
    question: "Write a C program to create a simple calculator using switch case. Perform addition, subtraction, multiplication, and division.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> a, b;
    <span class="keyword">char</span> operator;

    printf(<span class="string">"Enter two numbers: "</span>);
    scanf(<span class="string">"%d %d"</span>, &amp;a, &amp;b);

    printf(<span class="string">"Enter operator (+, -, *, /): "</span>);
    scanf(<span class="string">" %c"</span>, &amp;operator);

    <span class="keyword">switch</span> (operator)
    {
        <span class="keyword">case</span> <span class="string">'+'</span>:
            printf(<span class="string">"Result = %d"</span>, a + b);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="string">'-'</span>:
            printf(<span class="string">"Result = %d"</span>, a - b);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="string">'*'</span>:
            printf(<span class="string">"Result = %d"</span>, a * b);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="string">'/'</span>:
            <span class="keyword">if</span> (b != <span class="number">0</span>)
            {
                printf(<span class="string">"Result = %d"</span>, a / b);
            }
            <span class="keyword">else</span>
            {
                printf(<span class="string">"Division by zero is not allowed"</span>);
            }
            <span class="keyword">break</span>;

        <span class="keyword">default</span>:
            printf(<span class="string">"Invalid operator"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question44 = {
    question: "Write a C program to check whether a character is a vowel or consonant using a switch case.",

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
    scanf(<span class="string">" %c"</span>, &amp;ch);

    <span class="keyword">switch</span> (ch)
    {
        <span class="keyword">case</span> <span class="string">'a'</span>:
        <span class="keyword">case</span> <span class="string">'e'</span>:
        <span class="keyword">case</span> <span class="string">'i'</span>:
        <span class="keyword">case</span> <span class="string">'o'</span>:
        <span class="keyword">case</span> <span class="string">'u'</span>:
        <span class="keyword">case</span> <span class="string">'A'</span>:
        <span class="keyword">case</span> <span class="string">'E'</span>:
        <span class="keyword">case</span> <span class="string">'I'</span>:
        <span class="keyword">case</span> <span class="string">'O'</span>:
        <span class="keyword">case</span> <span class="string">'U'</span>:
            printf(<span class="string">"Vowel"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">default</span>:
            printf(<span class="string">"Consonant"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question45 = {
    question: "Write a C program to check whether a number is even or odd using a switch case.",

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

    <span class="keyword">switch</span> (number % <span class="number">2</span>)
    {
        <span class="keyword">case</span> <span class="number">0</span>:
            printf(<span class="string">"Even number"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">1</span>:
        <span class="keyword">case</span> -<span class="number">1</span>:
            printf(<span class="string">"Odd number"</span>);
            <span class="keyword">break</span>;
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question46 = {
    question: "Write a C program to display the number of days in a month using a switch case.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> month;

    printf(<span class="string">"Enter month number: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;month);

    <span class="keyword">switch</span> (month)
    {
        <span class="keyword">case</span> <span class="number">2</span>:
            printf(<span class="string">"28 or 29 days"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">4</span>:
        <span class="keyword">case</span> <span class="number">6</span>:
        <span class="keyword">case</span> <span class="number">9</span>:
        <span class="keyword">case</span> <span class="number">11</span>:
            printf(<span class="string">"30 days"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">1</span>:
        <span class="keyword">case</span> <span class="number">3</span>:
        <span class="keyword">case</span> <span class="number">5</span>:
        <span class="keyword">case</span> <span class="number">7</span>:
        <span class="keyword">case</span> <span class="number">8</span>:
        <span class="keyword">case</span> <span class="number">10</span>:
        <span class="keyword">case</span> <span class="number">12</span>:
            printf(<span class="string">"31 days"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">default</span>:
            printf(<span class="string">"Invalid month"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question47 = {
    question: "Write a C program to create a menu-driven program for finding the square, cube, and double of a number using switch case.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> choice, number;

    printf(<span class="string">"1. Square\\n"</span>);
    printf(<span class="string">"2. Cube\\n"</span>);
    printf(<span class="string">"3. Double\\n"</span>);

    printf(<span class="string">"Enter your choice: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;choice);

    printf(<span class="string">"Enter a number: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;number);

    <span class="keyword">switch</span> (choice)
    {
        <span class="keyword">case</span> <span class="number">1</span>:
            printf(<span class="string">"Square = %d"</span>, number * number);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">2</span>:
            printf(<span class="string">"Cube = %d"</span>, number * number * number);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">3</span>:
            printf(<span class="string">"Double = %d"</span>, number * <span class="number">2</span>);
            <span class="keyword">break</span>;

        <span class="keyword">default</span>:
            printf(<span class="string">"Invalid choice"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question48 = {
    question: "Write a C program to perform addition, subtraction, multiplication, and modulus using a menu-driven switch case.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> choice, a, b;

    printf(<span class="string">"1. Addition\\n"</span>);
    printf(<span class="string">"2. Subtraction\\n"</span>);
    printf(<span class="string">"3. Multiplication\\n"</span>);
    printf(<span class="string">"4. Modulus\\n"</span>);

    printf(<span class="string">"Enter your choice: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;choice);

    printf(<span class="string">"Enter two integers: "</span>);
    scanf(<span class="string">"%d %d"</span>, &amp;a, &amp;b);

    <span class="keyword">switch</span> (choice)
    {
        <span class="keyword">case</span> <span class="number">1</span>:
            printf(<span class="string">"Addition = %d"</span>, a + b);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">2</span>:
            printf(<span class="string">"Subtraction = %d"</span>, a - b);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">3</span>:
            printf(<span class="string">"Multiplication = %d"</span>, a * b);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">4</span>:
            <span class="keyword">if</span> (b != <span class="number">0</span>)
            {
                printf(<span class="string">"Modulus = %d"</span>, a % b);
            }
            <span class="keyword">else</span>
            {
                printf(<span class="string">"Modulus by zero is not allowed"</span>);
            }
            <span class="keyword">break</span>;

        <span class="keyword">default</span>:
            printf(<span class="string">"Invalid choice"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question49 = {
    question: "Write a C program to check whether a given character is a digit, alphabet, or special character using switch case.",

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
    scanf(<span class="string">" %c"</span>, &amp;ch);

    <span class="keyword">switch</span> ((ch &gt;= <span class="string">'0'</span> &amp;&amp; ch &lt;= <span class="string">'9'</span>) ? <span class="number">1</span> :
            ((ch &gt;= <span class="string">'A'</span> &amp;&amp; ch &lt;= <span class="string">'Z'</span>) ||
             (ch &gt;= <span class="string">'a'</span> &amp;&amp; ch &lt;= <span class="string">'z'</span>)) ? <span class="number">2</span> : <span class="number">3</span>)
    {
        <span class="keyword">case</span> <span class="number">1</span>:
            printf(<span class="string">"Digit"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">2</span>:
            printf(<span class="string">"Alphabet"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">3</span>:
            printf(<span class="string">"Special character"</span>);
            <span class="keyword">break</span>;
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};


const cUnit_2Question50 = {
    question: "Write a C program to display a menu for calculating the area of a circle, rectangle, or square using switch case.",

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Solution</span>
    </div>

    <pre><code><span class="keyword">#include</span> &lt;stdio.h&gt;

<span class="keyword">int</span> main()
{
    <span class="keyword">int</span> choice;
    <span class="keyword">float</span> radius, length, width, side;

    printf(<span class="string">"1. Area of Circle\\n"</span>);
    printf(<span class="string">"2. Area of Rectangle\\n"</span>);
    printf(<span class="string">"3. Area of Square\\n"</span>);

    printf(<span class="string">"Enter your choice: "</span>);
    scanf(<span class="string">"%d"</span>, &amp;choice);

    <span class="keyword">switch</span> (choice)
    {
        <span class="keyword">case</span> <span class="number">1</span>:
            printf(<span class="string">"Enter radius: "</span>);
            scanf(<span class="string">"%f"</span>, &amp;radius);

            printf(<span class="string">"Area = %.2f"</span>,
                   <span class="number">3.14159</span> * radius * radius);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">2</span>:
            printf(<span class="string">"Enter length and width: "</span>);
            scanf(<span class="string">"%f %f"</span>, &amp;length, &amp;width);

            printf(<span class="string">"Area = %.2f"</span>, length * width);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">3</span>:
            printf(<span class="string">"Enter side: "</span>);
            scanf(<span class="string">"%f"</span>, &amp;side);

            printf(<span class="string">"Area = %.2f"</span>, side * side);
            <span class="keyword">break</span>;

        <span class="keyword">default</span>:
            printf(<span class="string">"Invalid choice"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}</code></pre>

</div>
`
};
const cUnit_2Question51 = {
    question: "Which keyword is used to create a multi-way selection statement in C?",

    options: [
        "if",
        "switch",
        "select",
        "choose"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) switch</span></code></pre>

</div>
`
};


const cUnit_2Question52 = {
    question: "Which keyword is used to define an option inside a switch statement?",

    options: [
        "option",
        "case",
        "choice",
        "select"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) case</span></code></pre>

</div>
`
};


const cUnit_2Question53 = {
    question: "Which keyword is executed when no case matches in a switch statement?",

    options: [
        "else",
        "otherwise",
        "default",
        "none"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) default</span></code></pre>

</div>
`
};


const cUnit_2Question54 = {
    question: "Which keyword is commonly used to stop execution of a switch case?",

    options: [
        "stop",
        "exit",
        "break",
        "continue"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) break</span></code></pre>

</div>
`
};


const cUnit_2Question55 = {
    question: "What will be the output?\n\nint choice = 2;\nswitch(choice)\n{\n    case 1:\n        printf(\"One\");\n        break;\n    case 2:\n        printf(\"Two\");\n        break;\n    default:\n        printf(\"Other\");\n}",

    options: [
        "One",
        "Two",
        "Other",
        "Error"
    ],

    answer: 1,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">B) Two</span></code></pre>

</div>
`
};


const cUnit_2Question56 = {
    question: "What happens if a break statement is omitted from a matching case?",

    options: [
        "Program terminates immediately",
        "Switch statement is skipped",
        "Execution may continue into the next case",
        "Compilation always fails"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) Execution may continue into the next case</span></code></pre>

</div>
`
};


const cUnit_2Question57 = {
    question: "What will be the output?\n\nint x = 1;\nswitch(x)\n{\n    case 1:\n        printf(\"A\");\n    case 2:\n        printf(\"B\");\n        break;\n    default:\n        printf(\"C\");\n}",

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

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) AB</span></code></pre>

</div>
`
};


const cUnit_2Question58 = {
    question: "Which of the following can be used as the expression in a switch statement?",

    options: [
        "int",
        "char",
        "enum",
        "All of the above"
    ],

    answer: 3,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">D) All of the above</span></code></pre>

</div>
`
};


const cUnit_2Question59 = {
    question: "What will be the output?\n\nint n = 3;\nswitch(n)\n{\n    case 1:\n        printf(\"One\");\n        break;\n    case 2:\n        printf(\"Two\");\n        break;\n    default:\n        printf(\"Invalid\");\n}",

    options: [
        "One",
        "Two",
        "Invalid",
        "No output"
    ],

    answer: 2,

    solution: `
<div class="code-box">

    <div class="code-title">
        <span>Answer</span>
    </div>

    <pre><code><span class="keyword">Answer:</span> <span class="string">C) Invalid</span></code></pre>

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
The variable declared with var is function-scoped.
The loop completes before the setTimeout callbacks execute.
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
let creates a separate binding for each iteration of the loop.
Therefore, each callback remembers its corresponding value of i.

The callbacks execute after the loop completes, producing
0, 1 and 2 in order.</code></pre>

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
skips the remaining statements.

The update expression of the for loop then increments i
to 3. Therefore, the output is 0 and 2.</code></pre>

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
The for...in loop iterates over property keys.
Array indexes are property keys and are returned as strings.

Therefore, typeof i is "string" in every iteration.</code></pre>

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
The variable i receives the value of each array element.
Changing i does not modify the original array because
the array contains primitive number values.

Therefore, the original array remains unchanged.</code></pre>

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
The for...of loop works with iterable objects such as
arrays, strings, Maps and Sets.

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

        <span class="program-code-box-keyword">if</span> (i === <span class="program-code-box-number">1</span> &amp;&amp; j === <span class="program-code-box-number">1</span>) {
            <span class="program-code-box-keyword">break</span> outer;
        }

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
For i = 0, the inner loop executes three times.
Therefore, count becomes 3.

For i = 1, j = 0 executes once, making count 4.

When i = 1 and j = 1, break outer terminates
both the inner and outer loops.

Therefore, the final value is 4.</code></pre>

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
When i becomes 3, the if condition is true.
The statement i++ changes i to 4 and continue skips
the console.log() statement.

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

The setTimeout callbacks execute later because they are
asynchronous.

Therefore, the second loop's values are printed first,
followed by the callback values.</code></pre>

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

Their corresponding values are:

1 + 2 + 3 = 6

Therefore, the final value of sum is 6.</code></pre>

</div>
`
};


const javascriptLoopsDifficultQuestion11 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">let</span> arr = [
    <span class="program-code-box-number">1</span>,
    <span class="program-code-box-number">2</span>,
    <span class="program-code-box-number">3</span>,
    <span class="program-code-box-number">4</span>,
    <span class="program-code-box-number">5</span>
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
When an even number is found, splice() removes it.

The statement i-- moves the index back by one.
This ensures that the next element is not skipped.

Therefore, all even numbers are removed and the final
array becomes [1, 3, 5].</code></pre>

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

Therefore, the final value of x is 3.</code></pre>

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
The postfix decrement operator returns the current value
for the condition and then decreases i.

The loop therefore prints 4, 3, 2, 1 and 0.</code></pre>

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

The Map object is iterable, so for...of is suitable for
iterating over its entries.</code></pre>

</div>
`
};


const javascriptLoopsDifficultQuestion16 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">let</span> arr = [
    <span class="program-code-box-number">10</span>,
    <span class="program-code-box-number">20</span>,
    <span class="program-code-box-number">30</span>
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

The update expression performs:

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
The for (;;) loop has no condition, so it can run indefinitely.

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
The loop processes the characters in this order:

a → res = "a"
b → res = "ba"
c → res = "cba"

Each new character is added before the existing result.

Therefore, the final output is "cba".</code></pre>

</div>
`
};


const javascriptLoopsDifficultQuestion19 = {
    question: "What will be the output of the following JavaScript program?",

    program: `
<div class="program-code-box">

    <pre class="program-code-box-pre"><code class="program-code-box-code"><span class="program-code-box-keyword">let</span> arr = [
    <span class="program-code-box-number">1</span>,
    <span class="program-code-box-number">2</span>,
    <span class="program-code-box-number">3</span>
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
The loop uses let, so each iteration has its own binding
for i.

The setTimeout callbacks execute after the loop completes,
but each callback retains the correct value of i.

Therefore, 1, 2 and 3 are printed after the delay.</code></pre>

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
        <span class="program-code-box-keyword">if</span> ((i + j) % <span class="program-code-box-number">2</span> === <span class="program-code-box-number">0</span>) {
            <span class="program-code-box-keyword">continue</span>;
        }
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
The continue statement skips iterations where i + j is even.

The combinations where i + j is odd are:

(0, 1)
(1, 0)
(1, 2)
(2, 1)

There are 4 such combinations.

Therefore, count becomes 4.</code></pre>

</div>
`
};

const cProgrammingQuestionsUnit_2 = [
    cUnit_2Question1,
    cUnit_2Question2,
    cUnit_2Question3,
    cUnit_2Question4,
    cUnit_2Question5,
    cUnit_2Question6,
    cUnit_2Question7,
    cUnit_2Question8,
    cUnit_2Question9,
    cUnit_2Question10,

    cUnit_2Question11,
    cUnit_2Question12,
    cUnit_2Question13,
    cUnit_2Question14,
    cUnit_2Question15,
    cUnit_2Question16,
    cUnit_2Question17,
    cUnit_2Question18,
    cUnit_2Question19,
    cUnit_2Question20,

    cUnit_2Question21,
    cUnit_2Question22,
    cUnit_2Question23,
    cUnit_2Question24,
    cUnit_2Question25,
    cUnit_2Question26,
    cUnit_2Question27,
    cUnit_2Question28,
    cUnit_2Question29,
    cUnit_2Question30,

    cUnit_2Question31,
    cUnit_2Question32,
    cUnit_2Question33,
    cUnit_2Question34,
    cUnit_2Question35,
    cUnit_2Question36,
    cUnit_2Question37,
    cUnit_2Question38,
    cUnit_2Question39,
    cUnit_2Question40,

    cUnit_2Question41,
    cUnit_2Question42,
    cUnit_2Question43,
    cUnit_2Question44,
    cUnit_2Question45,
    cUnit_2Question46,
    cUnit_2Question47,
    cUnit_2Question48,
    cUnit_2Question49,
    cUnit_2Question50,

    cUnit_2Question51,
    cUnit_2Question52,
    cUnit_2Question53,
    cUnit_2Question54,
    cUnit_2Question55,
    cUnit_2Question56,
    cUnit_2Question57,
    cUnit_2Question58,
    cUnit_2Question59,
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
    javascriptLoopsDifficultQuestion20
];