
const javascriptEqualityExplanation = `

<h3>Difference Between == and === Operators</h3>

<p>
In JavaScript, <strong>==</strong> and <strong>===</strong> are equality
operators used to compare two values.
</p>

<p>
The main difference is that <strong>==</strong> performs type conversion,
while <strong>===</strong> does not perform type conversion.
</p>


<h4>Loose Equality (==)</h4>

<p>
The <strong>==</strong> operator is called the <strong>loose equality
operator</strong>. It compares two values after performing type conversion
when required.
</p>

<pre class="notes_text_pre"><code><span class="keyword">let</span> a = <span class="number">10</span>;
<span class="keyword">let</span> b = <span class="string">"10"</span>;

console.log(a == b);

<span class="keyword">Output:</span>
<span class="boolean">true</span></code></pre>

<p>
Here, <strong>10</strong> is a number and <strong>"10"</strong> is a string.
The <strong>==</strong> operator converts the string into a number before
performing the comparison.
</p>


<h4>Strict Equality (===)</h4>

<p>
The <strong>===</strong> operator is called the <strong>strict equality
operator</strong>. It compares both the value and the data type.
It does not perform implicit type conversion.
</p>

<pre class="notes_text_pre"><code><span class="keyword">let</span> a = <span class="number">10</span>;
<span class="keyword">let</span> b = <span class="string">"10"</span>;

console.log(a === b);

<span class="keyword">Output:</span>
<span class="boolean">false</span></code></pre>

<p>
Here, the values look the same, but their data types are different.
</p>

<pre class="notes_text_pre"><code><span class="number">10</span>   → <span class="keyword">number</span>
<span class="string">"10"</span> → <span class="keyword">string</span></code></pre>


<h4>Difference Between == and ===</h4>

<table class="notes-table">

    <tr>
        <th>==</th>
        <th>===</th>
    </tr>

    <tr>
        <td>Loose equality</td>
        <td>Strict equality</td>
    </tr>

    <tr>
        <td>Performs type conversion</td>
        <td>Does not perform type conversion</td>
    </tr>

    <tr>
        <td>Compares values</td>
        <td>Compares value and data type</td>
    </tr>

</table>


<h4>Example</h4>

<pre class="notes_text_pre"><code>console.log(<span class="number">5</span> == <span class="string">"5"</span>);
console.log(<span class="number">5</span> === <span class="string">"5"</span>);

<span class="keyword">Output:</span>
<span class="boolean">true</span>
<span class="boolean">false</span></code></pre>


<h4>Interview Answer</h4>

<p>
<strong>==</strong> is a loose equality operator that compares values
after type conversion, whereas <strong>===</strong> is a strict equality
operator that compares both value and data type without type conversion.
</p>

<p>
In modern JavaScript, <strong>===</strong> is generally preferred because
it provides more predictable results and avoids unexpected type conversion.
</p>

`;