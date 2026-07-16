const programmingLanguageHistory = `
<h3>History of Programming Languages</h3>

<p>
Programming languages have evolved over time to make writing software easier, faster, and more efficient.
The history of programming languages is generally divided into different generations based on their level of abstraction and ease of use.
</p>

<!-- ==================== First Generation ==================== -->
<div class="note-section">
    <h3>1. First Generation Language (1GL) - Machine Language (1940s - 1950s)</h3>

    <p>
        <strong>Machine Language</strong> was the first programming language used by computers.
        It is the only language that a computer's CPU can understand directly.
        All instructions are written in the form of binary digits (0 and 1).
    </p>

    <h4>Example</h4>

<pre class ="notes_text_pre"><code>
10110000 01100001
11001010 00010011
</code></pre>

    <h4>Characteristics</h4>

    <ul>
        <li>Written entirely in binary numbers (0 and 1).</li>
        <li>Executed directly by the CPU.</li>
        <li>No translator (compiler or interpreter) is required.</li>
        <li>Machine dependent.</li>
        <li>Very difficult for humans to read and write.</li>
    </ul>

<h4>Advantages and Disadvantages of Machine Language</h4>

<table class="notes-table">
    <tr>
        <th>Advantages</th>
        <th>Disadvantages</th>
    </tr>

    <tr>
        <td>Machine Language provides the fastest execution speed.</td>
        <td>Machine Language is very difficult to understand and write.</td>
    </tr>

    <tr>
        <td>It does not require any translator such as a compiler or interpreter.</td>
        <td>Writing programs in Machine Language is time-consuming.</td>
    </tr>

    <tr>
        <td>It uses computer hardware and memory efficiently.</td>
        <td>It is more prone to errors because instructions are written in binary code.</td>
    </tr>

    <tr>
        <td>Programs execute directly on the CPU.</td>
        <td>Programs written for one computer architecture cannot be used on different computers.</td>
    </tr>

</table>
</div>

<!-- ==================== Second Generation ==================== -->
<div class="note-section">
    <h3>2. Second Generation Language (2GL) - Assembly Language (1950s)</h3>

    <p>
        Assembly Language was developed to make programming easier than Machine Language.
        Instead of writing binary numbers, programmers use mnemonic instructions such as
        <strong>MOV</strong>, <strong>ADD</strong>, <strong>SUB</strong>, and <strong>JMP</strong>.
        An <strong>Assembler</strong> converts Assembly Language into Machine Language.
    </p>

    <h4>Example</h4>

<table class="notes-table">
    <thead>
        <tr>
            <th>Assembly Instruction</th>
            <th>Student-Friendly Explanation</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td><code>MOV AX, 10</code></td>
            <td>
                <strong>MOV</strong> means <strong>"Move"</strong>. This instruction stores the value
                <strong>10</strong> inside the <strong>AX</strong> register (a small memory location inside the CPU).
            </td>
        </tr>

        <tr>
            <td><code>MOV BX, 20</code></td>
            <td>
                This instruction stores the value <strong>20</strong> inside the
                <strong>BX</strong> register. Now the CPU has two values:
                <strong>AX = 10</strong> and <strong>BX = 20</strong>.
            </td>
        </tr>

        <tr>
            <td><code>ADD AX, BX</code></td>
            <td>
                <strong>ADD</strong> means <strong>"Addition"</strong>. This instruction adds the value
                stored in <strong>BX (20)</strong> to the value stored in
                <strong>AX (10)</strong>. The result <strong>30</strong> is stored back in the
                <strong>AX</strong> register.
            </td>
        </tr>
    </tbody>
</table>

<p><strong>Final Result:</strong></p>

<ul>
    <li>AX = 30</li>
    <li>BX = 20 (remains unchanged)</li>
</ul>

<p><strong>Simple Analogy:</strong></p>

<p>
Think of <strong>AX</strong> and <strong>BX</strong> as two boxes.
First, put <strong>10</strong> in the AX box and <strong>20</strong> in the BX box.
Then, the <strong>ADD AX, BX</strong> instruction adds both numbers (10 + 20 = 30) and stores the answer back in the AX box.
</p>

    <p>
        Assembly language provides direct access to the computer's hardware. Programmers can manipulate
        CPU registers, memory locations, and input/output devices with fine-grained control.
    </p>

    <h4>Applications</h4>

    <ul>
        <li>Device Drivers</li>
        <li>Operating System Development</li>
        <li>Embedded Systems</li>
        <li>Microcontroller Programming</li>
    </ul>

<h4>Advantages and Disadvantages of Assembly Language</h4>

<table class="notes-table">
    <tr>
        <th>Advantages</th>
        <th>Disadvantages</th>
    </tr>

    <tr>
        <td>Easier to understand than Machine Language.</td>
        <td>Machine dependent (works only on a specific processor).</td>
    </tr>

    <tr>
        <td>Provides faster execution than High-Level Languages.</td>
        <td>Difficult to learn and write.</td>
    </tr>

    <tr>
        <td>Provides direct control over computer hardware.</td>
        <td>Requires an assembler to convert the program into machine code.</td>
    </tr>

    <tr>
        <td>Uses memory efficiently and produces optimized programs.</td>
        <td>Program development and debugging take more time.</td>
    </tr>

</table>
</div>

<!-- ==================== Third Generation ==================== -->
<div class="note-section">
    <h3>3. Third Generation Language (3GL) - High-Level Languages (1950s - 1970s)</h3>

    <p>
        Third Generation Languages (3GL) are also known as <strong>High-Level Languages</strong>.
        These languages are designed to be easy for humans to read, write, and understand.
        They are independent of computer hardware and use English-like syntax.
    </p>

    <p>
        High-level languages introduced important programming concepts such as:
    </p>

    <ul>
        <li>Variables</li>
        <li>Data Types</li>
        <li>Conditional Statements (if-else)</li>
        <li>Loops</li>
        <li>Functions</li>
        <li>Arrays</li>
    </ul>

    <p>
        A <strong>Compiler</strong> or <strong>Interpreter</strong> translates High-Level Language
        into Machine Language.
    </p>

    <h4>Popular High-Level Languages</h4>

    <table class="notes-table">
        <thead>
            <tr>
                <th>Language</th>
                <th>Year</th>
                <th>Description</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td><strong>FORTRAN</strong></td>
                <td>1957</td>
                <td>Formula Translation. Designed for scientific and engineering calculations. Introduced variables and loops.</td>
            </tr>

            <tr>
                <td><strong>ALGOL</strong></td>
                <td>1958 / 1960</td>
                <td>Algorithmic Language. Influenced many modern programming languages.</td>
            </tr>

            <tr>
                <td><strong>COBOL</strong></td>
                <td>1959</td>
                <td>Common Business-Oriented Language. Used for banking and business applications.</td>
            </tr>

            <tr>
                <td><strong>BASIC</strong></td>
                <td>1964</td>
                <td>Beginner's All-purpose Symbolic Instruction Code. Designed for students and beginners.</td>
            </tr>

            <tr>
                <td><strong>C</strong></td>
                <td>1972</td>
                <td>Developed at Bell Labs. Widely used for system programming, operating systems, and application software.</td>
            </tr>
        </tbody>
    </table>

<h4>Advantages and Disadvantages of High-Level Language</h4>

<table class="notes-table">
    <tr>
        <th>Advantages</th>
        <th>Disadvantages</th>
    </tr>

    <tr>
        <td>High-Level Language is easy to read, write, and understand.</td>
        <td>High-Level Language is slower than Machine Language and Assembly Language.</td>
    </tr>

    <tr>
        <td>It is machine independent and can run on different computer systems.</td>
        <td>It requires a Compiler or Interpreter to convert the program into Machine Language.</td>
    </tr>

    <tr>
        <td>It makes debugging, testing, and maintenance easier.</td>
        <td>It provides less direct control over computer hardware.</td>
    </tr>

    <tr>
        <td>It reduces development time and increases programmer productivity.</td>
        <td>It generally uses more memory than Machine Language.</td>
    </tr>

    <tr>
        <td>Programs are portable and can run on different operating systems with little or no modification.</td>
        <td>Some programs may execute slower because of the translation process.</td>
    </tr>

</table>
</div>

<!-- ==================== Summary ==================== -->
<div class="note-section">
    <h3>Summary</h3>

    <table class="notes-table">
        <thead>
            <tr>
                <th>Generation</th>
                <th>Language</th>
                <th>Translator</th>
                <th>Easy to Learn</th>
                <th>Machine Dependent</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>1GL</td>
                <td>Machine Language</td>
                <td>Not Required</td>
                <td>❌</td>
                <td>✅</td>
            </tr>

            <tr>
                <td>2GL</td>
                <td>Assembly Language</td>
                <td>Assembler</td>
                <td>Medium</td>
                <td>✅</td>
            </tr>

            <tr>
                <td>3GL</td>
                <td>High-Level Language</td>
                <td>Compiler / Interpreter</td>
                <td>✅</td>
                <td>❌</td>
            </tr>
        </tbody>
    </table>
</div>
`;

let introC = `

<h3>Introduction to C Language</h3>

<p>
<strong>C</strong> is a general-purpose, procedural programming language developed by <strong>Dennis Ritchie</strong> in <strong>1972</strong> at <strong>Bell Laboratories</strong>.
</p>

<p>
It is one of the most popular programming languages and is widely used for system programming, application development, embedded systems, and operating systems.
</p>

<p>
C is known for its simplicity, efficiency, and powerful features. Many modern programming languages such as C++, Java, and C# are influenced by C.
</p>

<p>
A programming language is a set of instructions used to communicate with a computer. C language allows programmers to write programs that can perform calculations, process data, and solve real-world problems.
</p>

<h4>Why Learn C Language?</h4>

<ul>
    <li><strong>Easy to Learn:</strong> C has a simple syntax and is a good starting language for beginners.</li>
    <li><strong>Fast Execution:</strong> Programs written in C run very quickly because they are compiled into machine code.</li>
    <li><strong>Portable:</strong> C programs can run on different operating systems with little modification.</li>
    <li><strong>Foundation Language:</strong> Learning C helps in understanding advanced languages such as C++, Java, and Python.</li>
</ul>

<h4>Features of C Language</h4>

<ul>

<li>
<b>Simple Language</b><br>
C has a simple syntax and a small number of keywords, making it easy for beginners to learn and understand.
</li>

<li>
<b>Structured Programming Language</b><br>
C allows programs to be divided into smaller functions. This makes programs easier to write, test, and maintain.
</li>

<li>
<b>Middle-Level Language</b><br>
C combines the features of both low-level and high-level languages. It can interact with hardware while also supporting high-level programming concepts.
</li>

<li>
<b>Portable Language</b><br>
Programs written in C can run on different operating systems with little or no modification.
</li>

<li>
<b>Fast Execution</b><br>
C programs execute very quickly because they are compiled directly into machine code.
</li>

<li>
<b>Efficient Memory Management</b><br>
C provides direct access to memory through pointers, allowing efficient use of system resources.
</li>

<li>
<b>Rich Library Functions</b><br>
C provides many built-in functions through header files such as stdio.h, string.h, and math.h.
</li>

<li>
<b>Modular Programming</b><br>
Large programs can be divided into smaller modules or functions, making code reusable and organized.
</li>

<li>
<b>Supports Pointers</b><br>
Pointers allow direct access to memory locations and are useful for advanced programming techniques.
</li>

<li>
<b>Dynamic Memory Allocation</b><br>
Memory can be allocated and released during program execution using functions like malloc() and free().
</li>

<li>
<b>Case Sensitive</b><br>
C treats uppercase and lowercase letters differently. For example, "A" and "a" are considered different.
</li>

<li>
<b>Extensible Language</b><br>
Programmers can create their own functions and add them to existing programs.
</li>

</ul>

<h3>History of C Language</h3>

<p>
The C programming language was developed by <strong>Dennis Ritchie</strong> in <strong>1972</strong> at <strong>Bell Laboratories (Bell Labs)</strong> in the United States.
</p>

<p>
C was created to develop the <strong>UNIX Operating System</strong>. Before C, programmers used assembly language and the B programming language. Dennis Ritchie improved the B language and developed C to provide better performance and flexibility.
</p>

<h4>Evolution of C Language</h4>

<ul>
    <li><strong>1960 – ALGOL</strong>  – ALGOL stands for Algorithmic Language. Early high-level programming language.</li>
    <li><strong>1967 – BCPL</strong> –(Basic Combined Programming Language) Developed by Martin Richards.</li>
    <li><strong>1970 – B Language</strong> – Developed by Ken Thompson.</li>
    <li><strong>1972 – C Language</strong> – Developed by Dennis Ritchie.</li>
    <li><strong>1978 – K&R C</strong> – First C language book published.</li>
    <li><strong>1989 – ANSI C (C89)</strong> –  Standardized by ANSI(American National Standards Institute).</li>
    <li><strong>1990 – ISO C (C90)</strong> – Adopted by ISO (International Organization for Standardization).</li>
    <li><strong>1999 – C99</strong> – Added many modern features.</li>
    <li><strong>2011 – C11</strong> – Introduced multithreading support.</li>
    <li><strong>2018 – C18</strong> – Minor improvements and fixes.</li>
</ul>

<h4>Why Was C Developed?</h4>

<ul>
    <li>To develop the UNIX Operating System.</li>
    <li>To replace assembly language with a portable language.</li>
    <li>To write efficient and fast programs.</li>
    <li>To provide better control over computer hardware.</li>
</ul>

<h4>Father of C Language</h4>

<ul>
    <li><strong>Dennis Ritchie</strong> is known as the Father of C Language.</li>
    <li>He developed C in 1972 at Bell Laboratories.</li>
    <li>He also contributed significantly to UNIX development.</li>
</ul>

<h4>Applications of C Language</h4>

<ul>
    <li>Operating Systems (Windows, Linux, UNIX)</li>
    <li>Database Systems</li>
    <li>Embedded Systems</li>
    <li>Device Drivers</li>
    <li>Compilers and Interpreters</li>
    <li>Networking Applications</li>
    <li>Game Development</li>
</ul>

<h4>Basic Structure of a C Program</h4>

<h3>C Program: Hello World</h3>

<div class="definition-box">
    <p>
        This is the first and most basic C program. Its purpose is to display the message
        <strong>"Hello World"</strong> on the screen.
    </p>
</div>

<div class="code-box">
    <div class="code-title">hello_world.c</div>

<pre><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Hello World"</span><span class="symbol">);</span>
    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span>
</pre>
</div>

<h3>Program Output</h3>

<div class="code-box">
    <div class="code-title">Output</div>
<pre>Hello World</pre>
</div>

<h3>Line-by-Line Explanation</h3>

<h4>1. #include &lt;stdio.h&gt;</h4>

<div class="notes-box">
    <p>
        The <strong>#include</strong> statement is a preprocessor directive that tells the compiler
        to include the Standard Input Output header file (<strong>stdio.h</strong>) in the program.
    </p>

    <h4>What is a Preprocessor?</h4>

<p>
    A <strong>Preprocessor</strong> is a software program that processes the source code
    <strong>before the actual compilation starts</strong>. It performs tasks such as including
    header files, expanding macros, and processing conditional compilation directives.
</p>

<p>
    The preprocessor executes all <strong>preprocessor directives</strong>, which always begin
    with the <strong>#</strong> symbol.
</p>

<p>
    For example:
</p>

<div class="code-box">
    <div class="code-title">Example</div>
<pre><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span></pre>
</div>

<p>
    In the above statement, the preprocessor reads the contents of the
    <strong>stdio.h</strong> header file and inserts it into the program before the compiler
    starts compiling the source code.
</p>

<h4>Preprocessor Directives</h4>

<table class="notes-table">
    <tr>
        <th>Directive</th>
        <th>Purpose</th>
    </tr>
    <tr>
        <td>#include</td>
        <td>Includes a header file into the program.</td>
    </tr>
    <tr>
        <td>#define</td>
        <td>Defines constants or macros.</td>
    </tr>
    <tr>
        <td>#undef</td>
        <td>Removes a previously defined macro.</td>
    </tr>
    <tr>
        <td>#ifdef</td>
        <td>Checks whether a macro is defined.</td>
    </tr>
    <tr>
        <td>#ifndef</td>
        <td>Checks whether a macro is not defined.</td>
    </tr>
    <tr>
        <td>#if</td>
        <td>Compiles code only if a condition is true.</td>
    </tr>
    <tr>
        <td>#elif</td>
        <td>Specifies another condition if the previous one is false.</td>
    </tr>
    <tr>
        <td>#else</td>
        <td>Executes code when previous conditions are false.</td>
    </tr>
    <tr>
        <td>#endif</td>
        <td>Marks the end of a conditional preprocessor block.</td>
    </tr>
</table>

<h4>Features of the Preprocessor</h4>

<ul>
    <li>Works before the compiler starts compiling the program.</li>
    <li>Processes all statements beginning with the <strong>#</strong> symbol.</li>
    <li>Includes header files into the source code.</li>
    <li>Defines constants and macros.</li>
    <li>Supports conditional compilation.</li>
    <li>Makes programs easier to maintain and reuse.</li>
</ul>

    <h4>What is a Header File?</h4>

<p>
    A <strong>Header File</strong> is a file that contains the <strong>declarations (prototypes)</strong> of predefined functions, macros, constants, and other definitions that can be used in a C program.
</p>

<p>
    Instead of writing these functions ourselves, we simply include the required header file using the <strong>#include</strong> directive.
</p>

<p>
    The <strong>stdio.h</strong> header file (Standard Input Output Header File) provides declarations for input and output functions used to communicate with the user through the keyboard and monitor.
</p>

<p>
    This header file contains predefined functions such as:
</p>

<ul>
    <li><strong>printf()</strong> - Displays output on the screen.</li>
    <li><strong>scanf()</strong> - Takes input from the keyboard.</li>
    <li><strong>getchar()</strong> - Reads a single character from the keyboard.</li>
    <li><strong>putchar()</strong> - Displays a single character on the screen.</li>
    <li><strong>gets()</strong> - Reads a string from the keyboard (deprecated).</li>
    <li><strong>puts()</strong> - Displays a string on the screen.</li>
</ul>

<p>
    Without including <strong>stdio.h</strong>, the compiler will not recognize functions like
    <strong>printf()</strong> and <strong>scanf()</strong>, resulting in compilation errors or warnings.
</p>

<h4>Header Files in C</h4>

<table class="notes-table">
    <tr>
        <th>Header File</th>
        <th>Purpose</th>
        <th>Common Functions</th>
    </tr>
    <tr>
        <td>stdio.h</td>
        <td>Standard Input and Output</td>
        <td>printf(), scanf(), getchar(), putchar()</td>
    </tr>
    <tr>
        <td>string.h</td>
        <td>String Handling</td>
        <td>strlen(), strcpy(), strcat(), strcmp()</td>
    </tr>
    <tr>
        <td>math.h</td>
        <td>Mathematical Operations</td>
        <td>sqrt(), pow(), sin(), cos()</td>
    </tr>
    <tr>
        <td>stdlib.h</td>
        <td>General Utility Functions</td>
        <td>malloc(), free(), rand(), exit()</td>
    </tr>
    <tr>
        <td>ctype.h</td>
        <td>Character Handling</td>
        <td>isalpha(), isdigit(), toupper(), tolower()</td>
    </tr>
    <tr>
        <td>time.h</td>
        <td>Date and Time Functions</td>
        <td>time(), clock(), difftime()</td>
    </tr>
</table>

    <p>
        This header file contains predefined functions such as:
    </p>

    <ul>
        <li><strong>printf()</strong> - Display output on the screen</li>
        <li><strong>scanf()</strong> - Take input from the user</li>
        <li><strong>getchar()</strong> - Read a character</li>
        <li><strong>putchar()</strong> - Display a character</li>
    </ul>

    <p>
        Without including <strong>stdio.h</strong>, the compiler will not recognize the
        <strong>printf()</strong> function.
    </p>
</div>

<h4>2. int main()</h4>

<div class="notes-box">
    <p>
        The <strong>main()</strong> function is the starting point of every C program.
        Program execution always begins from this function.
    </p>

    <p><strong>int</strong> indicates that the function will return an integer value.</p>

    <p><strong>main</strong> is a special function name recognized by the compiler.</p>

    <p>
        The parentheses <strong>()</strong> indicate that this is a function.
        Since nothing is written inside the parentheses, the function does not receive any arguments.
    </p>
</div>

<h4>3. Opening Curly Brace {</h4>

<div class="notes-box">
    <p>
        The opening curly brace <strong>{</strong> marks the beginning of the main function body.
        All statements belonging to the function are written inside these braces.
    </p>
</div>

<h4>4. printf("Hello World");</h4>

<div class="notes-box">
    <p>
        The <strong>printf()</strong> function is used to display output on the screen.
    </p>

    <p>
        The text written inside double quotation marks is called a
        <strong>string literal</strong>.
    </p>

    <p>
        Whatever is written inside the quotation marks will be displayed exactly on the screen.
    </p>

    <p>
        Therefore:
    </p>

    <div class="code-box">
        <div class="code-title">Example</div>
<pre>printf("Hello World");</pre>
    </div>

    <p>Displays:</p>

    <div class="code-box">
        <div class="code-title">Output</div>
<pre>Hello World</pre>
    </div>
</div>

<h4>5. return 0;</h4>

<div class="notes-box">
    <p>
        The <strong>return</strong> statement terminates the execution of the main function.
    </p>

    <p>
        Returning <strong>0</strong> indicates that the program executed successfully
        without any errors.
    </p>

    <p>
        The operating system receives this value after program completion.
    </p>
</div>

<h4>6. Closing Curly Brace }</h4>

<div class="notes-box">
    <p>
        The closing curly brace <strong>}</strong> marks the end of the main function.
    </p>
</div>

<h3>Meaning of Each Symbol</h3>

<table class="notes-table">
    <tr>
        <th>Symbol</th>
        <th>Name</th>
        <th>Purpose</th>
    </tr>
    <tr>
        <td>#</td>
        <td>Hash Symbol</td>
        <td>Used with preprocessor directives</td>
    </tr>
    <tr>
        <td>&lt; &gt;</td>
        <td>Angle Brackets</td>
        <td>Used to include standard header files</td>
    </tr>
    <tr>
        <td>()</td>
        <td>Parentheses</td>
        <td>Used for function declaration and function calls</td>
    </tr>
    <tr>
        <td>{}</td>
        <td>Curly Braces</td>
        <td>Define the beginning and end of a code block</td>
    </tr>
    <tr>
        <td>" "</td>
        <td>Double Quotes</td>
        <td>Used to represent strings</td>
    </tr>
    <tr>
        <td>;</td>
        <td>Semicolon</td>
        <td>Marks the end of a statement</td>
    </tr>
</table>

<h4>Program Execution Process</h4>

<p>
Whenever we write a C program, the computer cannot understand it directly because it is written in a human-readable language. Before the program can run, it passes through several stages. This complete procedure is called the <strong>Program Execution Process</strong>.
</p>

<div class="code-box">
    <div class="code-title">Compilation Process</div>
<pre>
Source Code (.c)
      ↓
Preprocessor
      ↓
Compiler
      ↓
Assembler
      ↓
Linker
      ↓
Executable File (.exe)
</pre>
</div>

<h4>Step 1: Source Code (.c)</h4>

<p>
The source code is the C program written by the programmer. It is saved with the <strong>.c</strong> extension.
</p>

<p><strong>Example:</strong> <code>hello.c</code></p>

<p>
At this stage, the program contains C statements that are easy for humans to read, but the computer cannot execute them directly.
</p>

<hr>

<h4>Step 2: Preprocessor</h4>

<p>
The <strong>Preprocessor</strong> is the first stage of compilation. It processes all preprocessor directives before the actual compilation begins.
</p>

<p>It performs the following tasks:</p>

<ul>
<li>Processes <code>#include</code> directives by inserting the contents of header files.</li>
<li>Expands macros created using <code>#define</code>.</li>
<li>Removes comments from the program.</li>
<li>Handles conditional compilation such as <code>#ifdef</code> and <code>#ifndef</code>.</li>
</ul>

<p><strong>Example:</strong></p>

<div class="code-box">
    <div class="code-title">Before Processing</div>

<pre><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Hello World"</span><span class="symbol">);</span>
    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span>
</pre>
</div>

<p>
After preprocessing, the contents of the <strong>stdio.h</strong> header file are inserted into the program automatically.
</p>

<hr>

<h4>Step 3: Compiler</h4>

<p>
The <strong>Compiler</strong> is a software program that converts the preprocessed C program into Assembly Language. 
It also checks the program for syntax errors.
</p>

<p>The compiler performs:</p>

<ul>
<li>Syntax checking</li>
<li>Type checking</li>
<li>Error detection</li>
<li>Code optimization</li>
<li>Conversion of C code into Assembly Language</li>
</ul>

<p>
If there are syntax errors, the compilation stops here until they are corrected.
</p>

<hr>

<h4>Step 4: Assembler</h4>

<p>

An <strong>Assembler</strong> is a type of computer program that converts assembly language code into machine language code that can be directly executed by a computer's processor.
</p>

<p>
The generated file is called an <strong>Object File</strong>, usually having the extension <strong>.obj</strong> or <strong>.o</strong>.
</p>

<p>
Machine code consists of binary instructions (0s and 1s) that the processor understands.
</p>

<p>
    The object file (.o or .obj) contains only the machine code generated from your program. It does not contain the machine code of the required library functions (such as printf() and scanf()).
    The Linker adds the machine code for these library functions and creates the final executable file.
</p>

<hr>

<h4>Step 5: Linker</h4>

<p>
The <strong>Linker</strong> combines the object file with the required library files.
</p>

<p>
For example, the <code>printf()</code> function is stored inside the C Standard Library, not inside your program. The linker finds its definition and connects it with your program.
</p>

<p>The linker performs:</p>

<ul>
<li>Combines object files.</li>
<li>Links library functions.</li>
<li>Resolves external references.</li>
<li>Creates the final executable file.</li>
</ul>

<hr>

<h4>Step 6: Executable File (.exe)</h4>

<p>
After successful linking, an executable file (<strong>.exe</strong> in Windows) is created.
</p>

<p>
This is the final program that the operating system can load into memory and execute.
</p>

<p><strong>Example:</strong></p>

<pre>
hello.exe
</pre>

<p>
When you double-click this file or run it from the command prompt, the program starts executing.
</p>

<hr>

<h4>Complete Flow</h4>

<div class="code-box">
<div class="code-title">Program Execution Flow</div>
<pre>
Programmer
      │
      ▼
Writes C Program (.c)
      │
      ▼
Preprocessor
(Removes comments,
expands macros,
includes header files)
      │
      ▼
Compiler
(Checks errors and
converts C code to Assembly)
      │
      ▼
Assembler
(Converts Assembly
to Machine Code)
      │
      ▼
Linker
(Adds required libraries)
      │
      ▼
Executable File (.exe)
      │
      ▼
Program Runs
</pre>
</div>

<h4>Summary</h4>

<table class="notes-table">
<tr>
<th>Stage</th>
<th>Purpose</th>
<th>Output</th>
</tr>

<tr>
<td>Source Code</td>
<td>Program written by the programmer</td>
<td>.c file</td>
</tr>

<tr>
<td>Preprocessor</td>
<td>Processes directives and header files</td>
<td>Expanded source code</td>
</tr>

<tr>
<td>Compiler</td>
<td>Checks syntax and converts C to Assembly</td>
<td>Assembly code (.asm)</td>
</tr>

<tr>
<td>Assembler</td>
<td>Converts Assembly to Machine Code</td>
<td>Object file (.obj/.o)</td>
</tr>

<tr>
<td>Linker</td>
<td>Combines object files and libraries</td>
<td>Executable file (.exe)</td>
</tr>

<tr>
<td>Execution</td>
<td>Operating System loads and runs the program</td>
<td>Program Output</td>
</tr>
</table>

<h4>Remember</h4>

<ul>
<li>Source Code → Written by the programmer.</li>
<li>Preprocessor → Processes <code>#include</code>, <code>#define</code>, and removes comments.</li>
<li>Compiler → Converts C code into Assembly Language.</li>
<li>Assembler → Converts Assembly Language into Machine Code.</li>
<li>Linker → Connects object files and library functions.</li>
<li>Executable File → Final program that the computer can execute.</li>
</ul>


<h3>Important Points</h3>

<ul>
    <li>Every C program starts execution from the <strong>main()</strong> function.</li>
    <li><strong>stdio.h</strong> is required for input and output functions.</li>
    <li><strong>printf()</strong> is used to display output.</li>
    <li>Every statement in C ends with a semicolon (<strong>;</strong>).</li>
    <li>Curly braces define the body of a function.</li>
    <li><strong>return 0;</strong> indicates successful program execution.</li>
</ul>

<h4>Important Points</h4>

<ul>
    <li>C is a case-sensitive language.</li>
    <li>Every statement ends with a semicolon (;).</li>
    <li>The main() function is the entry point of a C program.</li>
    <li>C programs are compiled before execution.</li>
    <li>C supports functions, arrays, pointers, structures, and file handling.</li>
</ul>

<h4>Important Interview Questions</h4>

<ul>
    <li>What is the purpose of #include &lt;stdio.h&gt;?</li>
    <li>What is the role of the main() function?</li>
    <li>Why is printf() used?</li>
    <li>What is a header file?</li>
    <li>Why do we use return 0?</li>
    <li>What happens if a semicolon is omitted?</li>
    <li>Can a C program run without main()?</li>
    <li>Who developed the C language?</li>
    <li>When was C language developed?</li>
    <li>Who is known as the Father of C Language?</li>
    <li>Which language was the predecessor of C?</li>
    <li>What is the full form of BCPL?</li>
</ul>

`;

const computerHardwareSoftwareExplanation = `

<h3>Computer Hardware and Software</h3>
    <img class="notes_img" src="bca_images/computer-hardware-software.png" alt="Computer Hardware and Software Classification">

    
<p>
A <strong>Computer</strong> is an electronic device that accepts data, processes it, stores it, and produces meaningful information.
Every computer consists of two main components:
</p>

<ul>
    <li><strong>Hardware</strong></li>
    <li><strong>Software</strong></li>
</ul>

<hr>

<h3>Hardware</h3>

<p>
<strong>Hardware</strong> refers to the physical parts of a computer that can be seen and touched.
These components work together to perform various tasks.
</p>

<h4>Examples of Hardware</h4>

<table class="notes-table">
    <tr>
        <th>Hardware Device</th>
        <th>Purpose</th>
    </tr>

    <tr>
        <td>Monitor</td>
        <td>Displays the output on the screen.</td>
    </tr>

    <tr>
        <td>Keyboard</td>
        <td>Used to enter text, numbers, and commands into the computer.</td>
    </tr>

    <tr>
        <td>Mouse</td>
        <td>Used to point, click, select, and navigate on the screen.</td>
    </tr>

    <tr>
        <td>CPU (System Unit)</td>
        <td>Processes data and controls all computer operations.</td>
    </tr>

    <tr>
        <td>Printer</td>
        <td>Produces a hard copy of documents and images.</td>
    </tr>

    <tr>
        <td>Scanner</td>
        <td>Converts printed documents and images into digital form.</td>
    </tr>

    <tr>
        <td>Camera</td>
        <td>Captures photos and videos for the computer.</td>
    </tr>
</table>

<h4>Simple Example</h4>

<p>
Think of the computer as a human body. The monitor, keyboard, mouse, and CPU are like the body's hands, eyes, and brain. These physical parts are called <strong>Hardware</strong>.
</p>

<hr>

<h3>Software</h3>

<p>
<strong>Software</strong> is a collection of programs and instructions that tell the hardware what to do.
Unlike hardware, software cannot be touched physically.
</p>

<p>
Software is divided into two main categories:
</p>

<ul>
    <li>Application Software</li>
    <li>System Software</li>
</ul>

<hr>

<h3>Application Software</h3>

<p>
Application Software is designed to help users perform specific tasks such as writing documents, browsing the internet, editing photos, watching videos, and making online payments.
</p>

<h4>Types of Application Software</h4>

<h4>1. Desktop Application</h4>

<p>
Desktop applications are installed on a computer and usually have an <strong>.exe</strong> file in Windows.
</p>

<h4>Examples</h4>

<ul>
    <li>MS Word</li>
    <li>Photoshop</li>
    <li>Google Chrome</li>
    <li>VLC Media Player</li>
    <li>Visual Studio Code</li>
</ul>

<h4>2. Web Application</h4>

<p>
Web applications run inside a web browser and generally require an internet connection.
</p>

<h4>Examples</h4>

<ul>
    <li>Gmail</li>
    <li>Facebook</li>
    <li>WhatsApp Web</li>
    <li>Google Docs</li>
    <li>YouTube</li>
</ul>

<h4>3. Mobile Application</h4>

<p>
Mobile applications are designed for smartphones and tablets. They are downloaded from the Google Play Store or Apple App Store.
</p>

<h4>Examples</h4>

<ul>
    <li>WhatsApp</li>
    <li>Instagram</li>
    <li>PhonePe</li>
    <li>Google Maps</li>
    <li>Paytm</li>
</ul>

<hr>

<h3>System Software</h3>

<p>
System Software manages and controls the entire computer system. It acts as a bridge between the hardware and application software.
</p>

<p>
System Software is divided into:
</p>

<ul>
    <li>Operating System</li>
    <li>Device Drivers</li>
</ul>

<hr>

<h3>Operating System (OS)</h3>

<p>
An Operating System is the most important software in a computer. It controls all hardware devices and allows users to interact with the computer.
</p>

<h4>Examples</h4>

<ul>
    <li>Windows</li>
    <li>Linux</li>
    <li>macOS</li>
    <li>Android</li>
    <li>iOS</li>
</ul>

<h4>Main Functions</h4>

<ul>
    <li>Starts the computer.</li>
    <li>Manages memory.</li>
    <li>Controls hardware devices.</li>
    <li>Runs application software.</li>
    <li>Provides a user-friendly interface.</li>
</ul>

<hr>

<h3>Device Drivers</h3>

<p>
A Device Driver is a special software that enables the operating system to communicate with hardware devices.
Without the correct driver, the hardware may not function properly.
</p>

<h4>Examples</h4>

<ul>
    <li>Printer Driver</li>
    <li>Graphics Driver</li>
    <li>Audio Driver</li>
    <li>Wi-Fi Driver</li>
    <li>Bluetooth Driver</li>
    <li>Keyboard Driver</li>
    <li>Mouse Driver</li>
    <li>Scanner Driver</li>
    <li>Webcam Driver</li>
</ul>

<hr>

<h3>Difference Between Hardware and Software</h3>

<table class="notes-table">
<thead>
<tr>
<th>Hardware</th>
<th>Software</th>
</tr>
</thead>

<tbody>
<tr>
<td>Physical components of a computer.</td>
<td>Programs and instructions.</td>
</tr>

<tr>
<td>Can be seen and touched.</td>
<td>Cannot be seen or touched.</td>
</tr>

<tr>
<td>Manufactured.</td>
<td>Developed by programmers.</td>
</tr>

<tr>
<td>Examples: Keyboard, Mouse, Monitor, CPU.</td>
<td>Examples: Windows, MS Word, Chrome, Photoshop.</td>
</tr>
</tbody>
</table>

<hr>

<h3>Quick Revision</h3>

<table class="notes-table">
<thead>
<tr>
<th>Topic</th>
<th>Description</th>
</tr>
</thead>

<tbody>
<tr>
<td>Hardware</td>
<td>Physical parts of the computer.</td>
</tr>

<tr>
<td>Software</td>
<td>Programs that make the hardware work.</td>
</tr>

<tr>
<td>Application Software</td>
<td>Helps users perform specific tasks.</td>
</tr>

<tr>
<td>Desktop Application</td>
<td>Installed on a computer.</td>
</tr>

<tr>
<td>Web Application</td>
<td>Runs inside a web browser.</td>
</tr>

<tr>
<td>Mobile Application</td>
<td>Runs on smartphones.</td>
</tr>

<tr>
<td>Operating System</td>
<td>Controls and manages the computer.</td>
</tr>

<tr>
<td>Device Driver</td>
<td>Allows communication between hardware and the operating system.</td>
</tr>
</tbody>
</table>

<hr>

<h3>Remember</h3>

<p>
✔ Hardware = Physical parts of the computer.<br>
✔ Software = Programs that control the hardware.<br>
✔ Application Software helps users complete their daily work.<br>
✔ System Software manages the entire computer system.<br>
✔ Operating System is the heart of System Software.<br>
✔ Device Drivers help hardware communicate with the operating system.
</p>
`;


let flowCharts = `

<h3>Flowcharts in C Programming</h3>

<p>
A <strong>flowchart</strong> is a graphical representation of an algorithm or program logic.
It uses different symbols connected by arrows to show the sequence of steps required to solve a problem.
</p>

<p>
Flowcharts help programmers understand, analyze, and design programs before writing actual code.
</p>

<h4>Advantages of Flowcharts</h4>

<ul>
<li>Easy to understand program logic.</li>
<li>Helps in finding errors before coding.</li>
<li>Makes program development faster.</li>
<li>Improves communication among programmers.</li>
<li>Provides proper documentation of the program.</li>
</ul>

<h4>Common Flowchart Symbols</h4>

<table class="notes-table">
    <tr>
        <th>Symbol</th>
        <th>Name</th>
        <th>Purpose</th>
    </tr>

    <tr>
        <td>⬭</td>
        <td>Terminal (Oval)</td>
        <td>Represents the <strong>Start</strong> or <strong>End</strong> of a program.</td>
    </tr>

    <tr>
        <td>▭</td>
        <td>Process (Rectangle)</td>
        <td>Represents calculations, processing, or instructions.</td>
    </tr>

    <tr>
        <td>▱</td>
        <td>Input / Output (Parallelogram)</td>
        <td>Used for input and output operations.</td>
    </tr>

    <tr>
        <td>◇</td>
        <td>Decision (Diamond)</td>
        <td>Represents a condition or decision (Yes/No).</td>
    </tr>

    <tr>
        <td>➜</td>
        <td>Flow Line (Arrow)</td>
        <td>Shows the direction of program flow.</td>
    </tr>

</table>

<h4>Flowchart: Print "Hello World"</h4>

<div style="text-align:center; margin:20px 0;">
<svg width="350" height="350" xmlns="http://www.w3.org/2000/svg">

    <!-- START -->
    <ellipse cx="175" cy="35" rx="70" ry="25"
             fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
    <text x="175" y="41"
          text-anchor="middle"
          font-size="18"
          font-family="Arial"
          font-weight="bold">
        START
    </text>

    <!-- Arrow -->
    <line x1="175" y1="60" x2="175" y2="100"
          stroke="#000" stroke-width="2"/>
    <polygon points="170,98 180,98 175,108" fill="#000"/>

    <!-- Process -->
    <rect x="85" y="110" width="180" height="60"
          fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
    <text x="175" y="145"
          text-anchor="middle"
          font-size="16"
          font-family="Arial">
        Print "Hello World"
    </text>

    <!-- Arrow -->
    <line x1="175" y1="170" x2="175" y2="215"
          stroke="#000" stroke-width="2"/>
    <polygon points="170,213 180,213 175,223" fill="#000"/>

    <!-- END -->
    <ellipse cx="175" cy="255" rx="70" ry="25"
             fill="#ffebee" stroke="#c62828" stroke-width="2"/>
    <text x="175" y="261"
          text-anchor="middle"
          font-size="18"
          font-family="Arial"
          font-weight="bold">
        END
    </text>

</svg>
</div>

<h3>Flowchart: Add Two Numbers</h3>

<div style="text-align:center; margin:20px 0;">
<svg width="420" height="520" xmlns="http://www.w3.org/2000/svg">

    <!-- START -->
    <ellipse cx="210" cy="35" rx="70" ry="25"
             fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
    <text x="210" y="41"
          text-anchor="middle"
          font-size="18"
          font-family="Arial"
          font-weight="bold">
        START
    </text>

    <!-- Arrow -->
    <line x1="210" y1="60" x2="210" y2="90"
          stroke="#000" stroke-width="2"/>
    <polygon points="205,88 215,88 210,98" fill="#000"/>

    <!-- Input -->
    <polygon points="110,100 290,100 310,150 130,150"
             fill="#fff8e1"
             stroke="#f9a825"
             stroke-width="2"/>
    <text x="210" y="130"
          text-anchor="middle"
          font-size="16"
          font-family="Arial">
        Input A, B
    </text>

    <!-- Arrow -->
    <line x1="210" y1="150" x2="210" y2="180"
          stroke="#000" stroke-width="2"/>
    <polygon points="205,178 215,178 210,188" fill="#000"/>

    <!-- Process -->
    <rect x="120" y="190" width="180" height="60"
          fill="#e3f2fd"
          stroke="#1565c0"
          stroke-width="2"/>
    <text x="210" y="225"
          text-anchor="middle"
          font-size="16"
          font-family="Arial">
        Sum = A + B
    </text>

    <!-- Arrow -->
    <line x1="210" y1="250" x2="210" y2="280"
          stroke="#000" stroke-width="2"/>
    <polygon points="205,278 215,278 210,288" fill="#000"/>

    <!-- Output -->
    <polygon points="110,290 290,290 310,340 130,340"
             fill="#fff8e1"
             stroke="#f9a825"
             stroke-width="2"/>
    <text x="210" y="320"
          text-anchor="middle"
          font-size="16"
          font-family="Arial">
        Display Sum
    </text>

    <!-- Arrow -->
    <line x1="210" y1="340" x2="210" y2="380"
          stroke="#000" stroke-width="2"/>
    <polygon points="205,378 215,378 210,388" fill="#000"/>

    <!-- END -->
    <ellipse cx="210" cy="425" rx="70" ry="25"
             fill="#ffebee"
             stroke="#c62828"
             stroke-width="2"/>
    <text x="210" y="431"
          text-anchor="middle"
          font-size="18"
          font-family="Arial"
          font-weight="bold">
        END
    </text>

</svg>
</div>

<h3>Flowchart: Check Even or Odd</h3>

    <img class="notes_img" src="bca_images/check-odd-even.png" alt="Data and Signals - Analog and Digital" >


<h4>Algorithm vs Flowchart</h4>

<table class="notes-table">
    <tr>
        <th>Algorithm</th>
        <th>Flowchart</th>
    </tr>

    <tr>
        <td>A step-by-step written procedure to solve a problem is called an <strong>Algorithm</strong>.</td>
        <td>A graphical representation of an algorithm using standard symbols is called a <strong>Flowchart</strong>.</td>
    </tr>

    <tr>
        <td>An algorithm is written in simple English or pseudocode.</td>
        <td>A flowchart is drawn using symbols and arrows.</td>
    </tr>

    <tr>
        <td>An algorithm is easy to write and modify.</td>
        <td>A flowchart is easy to understand because it shows the program flow visually.</td>
    </tr>

    <tr>
        <td>An algorithm does not use graphical symbols.</td>
        <td>A flowchart uses symbols such as Oval, Rectangle, Diamond, and Parallelogram.</td>
    </tr>

    <tr>
        <td>An algorithm is mainly used for planning the logic of a program.</td>
        <td>A flowchart is mainly used for explaining the logic of a program visually.</td>
    </tr>

</table>

`;

let variablesAndIdentifiers = `

<h3>Variables and Identifiers</h3>

<p>
Variables and identifiers are basic concepts in C programming. They help programmers store data and give meaningful names to different elements in a program.
</p>

<h4>What is an Identifier?</h4>

<p>
An <strong>identifier</strong> is a name used to identify variables, functions, arrays, structures, and other user-defined items in a program.
</p>

<p>
In simple words, identifiers are names given by the programmer to different program elements.
</p>

<h4>Examples of Identifiers</h4>

<pre class="notes_text_pre">
age
salary
studentName
calculateSum
marks
</pre>

<h4>Rules for Naming Identifiers</h4>

<ul>
<li>An identifier can contain letters (A-Z, a-z), digits (0-9), and underscore (_).</li>
<li>It must begin with a letter or underscore.</li>
<li>It cannot start with a digit.</li>
<li>Keywords cannot be used as identifiers.</li>
<li>Spaces are not allowed.</li>
<li>C is case-sensitive, so Total and total are different.</li>
</ul>

<h4>Examples</h4>

<table class="notes-table">
    <tr>
        <th>Identifier</th>
        <th>Valid / Invalid</th>
        <th>Reason</th>
    </tr>

    <tr>
        <td><code>age</code></td>
        <td>✅ Valid</td>
        <td>Starts with a letter and follows all identifier rules.</td>
    </tr>

    <tr>
        <td><code>student_name</code></td>
        <td>✅ Valid</td>
        <td>Uses an underscore (<code>_</code>), which is allowed.</td>
    </tr>

    <tr>
        <td><code>totalMarks</code></td>
        <td>✅ Valid</td>
        <td>Uses letters and follows the camelCase naming convention.</td>
    </tr>

    <tr>
        <td><code>_salary</code></td>
        <td>✅ Valid</td>
        <td>Starts with an underscore, which is permitted.</td>
    </tr>

    <tr>
        <td><code>num1</code></td>
        <td>✅ Valid</td>
        <td>Starts with a letter and contains digits after it.</td>
    </tr>

    <tr>
        <td><code>1age</code></td>
        <td>❌ Invalid</td>
        <td>Identifiers cannot begin with a digit.</td>
    </tr>

    <tr>
        <td><code>student name</code></td>
        <td>❌ Invalid</td>
        <td>Spaces are not allowed in identifiers.</td>
    </tr>

    <tr>
        <td><code>float</code></td>
        <td>❌ Invalid</td>
        <td><code>float</code> is a reserved keyword in C.</td>
    </tr>

    <tr>
        <td><code>total-marks</code></td>
        <td>❌ Invalid</td>
        <td>The hyphen (<code>-</code>) is not allowed in identifiers.</td>
    </tr>
</table>

<h4>What is a Variable?</h4>

<p>
A <strong>variable</strong> is a named memory location used to store data. The value stored in a variable can change during program execution.
</p>

<h4>Syntax of Variable Declaration</h4>

<div class="code-box">
    <div class="code-title">Syntax</div>
<pre>
data_type variable_name;
</pre>
</div>

<p>
A <strong>variable declaration</strong> tells the compiler that a variable with a specific name and data type will be used in the program.
</p>

<table class="notes-table">
    <tr>
        <th>Part</th>
        <th>Description</th>
        <th>Example</th>
    </tr>

    <tr>
        <td><code>data_type</code></td>
        <td>Specifies the type of data the variable can store.</td>
        <td><code>int</code>, <code>float</code>, <code>char</code>, <code>double</code></td>
    </tr>

    <tr>
        <td><code>variable_name</code></td>
        <td>The name given to the variable. It must follow the identifier rules.</td>
        <td><code>age</code>, <code>salary</code>, <code>marks</code></td>
    </tr>

    <tr>
        <td><code>;</code> (Semicolon)</td>
        <td>Marks the end of the declaration statement.</td>
        <td><code>int age;</code></td>
    </tr>
</table>

<h4>Examples</h4>

<div class="code-box">
    <div class="code-title">Variable Declarations</div>
<pre>
int age;
float salary;
char grade;
double percentage;
</pre>
</div>

<table class="notes-table">
    <tr>
        <th>Declaration</th>
        <th>Meaning</th>
    </tr>

    <tr>
        <td><code>int age;</code></td>
        <td>Declares an integer variable named <strong>age</strong>.</td>
    </tr>

    <tr>
        <td><code>float salary;</code></td>
        <td>Declares a floating-point variable named <strong>salary</strong>.</td>
    </tr>

    <tr>
        <td><code>char grade;</code></td>
        <td>Declares a character variable named <strong>grade</strong>.</td>
    </tr>

    <tr>
        <td><code>double percentage;</code></td>
        <td>Declares a double-precision floating-point variable named <strong>percentage</strong>.</td>
    </tr>
</table>

<h4>Remember</h4>

<ul>
    <li><strong>Data Type</strong> → Defines what kind of value the variable can store.</li>
    <li><strong>Variable Name</strong> → Identifies the variable in the program.</li>
    <li><strong>Semicolon (;)</strong> → Ends the declaration statement.</li>
</ul>

<h4>Difference Between Identifier and Variable</h4>

<table class="notes-table">
<tr>
<th>Identifier</th>
<th>Variable</th>
</tr>

<tr>
<td>Name used to identify program elements.</td>
<td>Memory location used to store data.</td>
</tr>

<tr>
<td>Can represent variables, functions, arrays, etc.</td>
<td>Stores values only.</td>
</tr>

<tr>
<td>Example: age, totalMarks</td>
<td>Example: int age = 20;</td>
</tr>

<tr>
<td>Every variable is an identifier.</td>
<td>Not every identifier is a variable.</td>
</tr>

</table>

<h4>Important Points</h4>

<ul>
<li>Identifiers are names given by programmers.</li>
<li>Variables are used to store data.</li>
<li>Every variable must have a data type.</li>
<li>Variable names follow the rules of identifiers.</li>
<li>C is case-sensitive.</li>
</ul>

<h4>Important Interview Questions</h4>

<ul>
<li>What is an identifier in C?</li>
<li>What is a variable?</li>
<li>What are the rules for naming identifiers?</li>
<li>What is variable initialization?</li>
<li>What is the difference between an identifier and a variable?</li>
</ul>

`;

let dataTypes = `

<h3>Data Types in C Language</h3>

<p>
A <strong>data type</strong> is used to specify the type of data that a variable can store in a program.
In C language, every variable must have a data type because the compiler needs to know what kind of value will be stored and how much memory should be allocated.
</p>

<p>
For example, if we want to store a student's age, we use an integer data type. If we want to store marks with decimal values, we use a float data type. Similarly, if we want to store a character such as a grade, we use the char data type.
</p>

<p>
In simple words, a data type tells the computer what type of data is being stored in a variable.
</p>

<h4>Why Do We Need Data Types?</h4>

<ul>
<li>To identify the type of data stored in a variable.</li>
<li>To allocate the correct amount of memory.</li>
<li>To perform operations correctly.</li>
<li>To improve program efficiency and reliability.</li>
<li>To avoid errors while executing the program.</li>
</ul>

<h4>Example Without Data Types</h4>

<p>
Suppose a program stores age, salary, and grade. The computer needs to know whether the value is a number, decimal value, or character. Data types help the computer understand this information.
</p>

<pre>
int age = 20;
float salary = 25000.50;
char grade = 'A';
</pre>

<h4>Classification of Data Types in C</h4>

<p>
Data types in C are mainly divided into four categories:
</p>

<ul>
<li><strong>Basic (Primary) Data Types</strong></li>
<li><strong>Derived Data Types</strong></li>
<li><strong>User-Defined Data Types</strong></li>
<li><strong>Void Data Type</strong></li>
</ul>

<h4>1. Basic (Primary) Data Types</h4>

<p>
Basic data types are the fundamental data types provided by C language.
</p>

<table class="notes-table">
<tr>
<th>Data Type</th>
<th>Description</th>
<th>Example</th>
</tr>

<tr>
<td>int</td>
<td>Stores whole numbers</td>
<td>10, 50, -20</td>
</tr>

<tr>
<td>float</td>
<td>Stores decimal numbers</td>
<td>10.5, 25.75</td>
</tr>

<tr>
<td>double</td>
<td>Stores large decimal numbers with higher precision</td>
<td>12345.6789</td>
</tr>

<tr>
<td>char</td>
<td>Stores a single character</td>
<td>'A', 'B', 'C'</td>
</tr>

</table>

<h4>Integer Data Type (int)</h4>

<p>
The <strong>int</strong> data type is used to store whole numbers without decimal points.
</p>

<pre>
int age = 20;
int marks = 85;
</pre>

<p><strong>Output:</strong></p>

<pre>
20
85
</pre>

<h4>Float Data Type (float)</h4>

<p>
The <strong>float</strong> data type is used to store decimal numbers.
</p>

<pre>
float percentage = 85.5;
float price = 199.99;
</pre>

<h4>Double Data Type (double)</h4>

<p>
The <strong>double</strong> data type stores decimal numbers with greater precision than float.
</p>

<pre>
double salary = 25000.56789;
</pre>

<h4>Character Data Type (char)</h4>

<p>
The <strong>char</strong> data type is used to store a single character enclosed within single quotes.
</p>

<pre>
char grade = 'A';
char gender = 'M';
</pre>

<h4>2. Derived Data Types</h4>

<p>
Derived data types are created from basic data types.
</p>

<ul>
<li>Array</li>
<li>Pointer</li>
<li>Function</li>
</ul>

<p><strong>Example:</strong></p>

<pre>
int marks[5];
int *ptr;
</pre>

<h4>3. User-Defined Data Types</h4>

<p>
These data types are created by the programmer according to the program requirements.
</p>

<ul>
<li>Structure (struct)</li>
<li>Union (union)</li>
<li>Enumeration (enum)</li>
<li>typedef</li>
</ul>

<p><strong>Example:</strong></p>

<pre>
struct Student
{
    int id;
    char name[20];
};
</pre>

<h4>4. Void Data Type</h4>

<p>
The <strong>void</strong> data type means "no value" or "nothing".
It is commonly used in functions that do not return any value.
</p>

<pre>
void display()
{
    printf("Welcome");
}
</pre>

<h4>Type Modifiers in C</h4>

<p>
Type modifiers are used to modify the size or range of basic data types.
</p>

<ul>
<li>short</li>
<li>long</li>
<li>signed</li>
<li>unsigned</li>
</ul>

<p><strong>Examples:</strong></p>

<pre>
short int a;
long int b;
unsigned int c;
signed int d;
</pre>

<h4>Size of Common Data Types</h4>

<table class="notes-table">
<tr>
<th>Data Type</th>
<th>Size (Approx.)</th>
</tr>

<tr>
<td>char</td>
<td>1 Byte</td>
</tr>

<tr>
<td>int</td>
<td>4 Bytes</td>
</tr>

<tr>
<td>float</td>
<td>4 Bytes</td>
</tr>

<tr>
<td>double</td>
<td>8 Bytes</td>
</tr>

</table>

<h4>Program Using Different Data Types</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int age = 20;
    float marks = 85.5;
    double salary = 25000.75;
    char grade = 'A';

    printf("Age = %d\\n", age);
    printf("Marks = %.2f\\n", marks);
    printf("Salary = %lf\\n", salary);
    printf("Grade = %c\\n", grade);

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Age = 20
Marks = 85.50
Salary = 25000.750000
Grade = A
</pre>

<h4>Important Points to Remember</h4>

<ul>
<li>Every variable must have a data type.</li>
<li>Data types determine memory allocation.</li>
<li>int stores whole numbers.</li>
<li>float and double store decimal numbers.</li>
<li>char stores a single character.</li>
<li>double provides higher precision than float.</li>
<li>void represents no value.</li>
</ul>

<h4>Important Interview & Exam Questions</h4>

<ul>
<li>What is a data type in C language?</li>
<li>Why are data types important?</li>
<li>What are the different categories of data types in C?</li>
<li>What is the difference between float and double?</li>
<li>What is the use of char data type?</li>
<li>What is a void data type?</li>
<li>What are type modifiers in C?</li>
<li>How many bytes does an int occupy?</li>
</ul>

`;

let operators = `

<h3>Operators in C Language</h3>

<p>
An <strong>operator</strong> is a special symbol that performs an operation on one or more operands (values or variables).
Operators are used to perform calculations, comparisons, logical operations, and assignments in a C program.
</p>

<p>
Example:
</p>

<pre>
int a = 10, b = 5;
int sum = a + b;
</pre>

<p>
Here, <strong>+</strong> is an operator used for addition.
</p>

<h4>Types of Operators in C</h4>

<ol>
<li>Arithmetic Operators</li>
<li>Relational Operators</li>
<li>Logical Operators</li>
<li>Assignment Operators</li>
<li>Increment and Decrement Operators</li>
<li>Bitwise Operators</li>
<li>Conditional (Ternary) Operator</li>
<li>Special Operators</li>
</ol>

<hr>

<h3>1. Arithmetic Operators</h3>

<p>
Arithmetic operators are used to perform mathematical calculations.
</p>

<table  class="notes-table">
<tr>
<th>Operator</th>
<th>Name</th>
<th>Example</th>
<th>Result</th>
</tr>

<tr>
<td>+</td>
<td>Addition</td>
<td>10 + 5</td>
<td>15</td>
</tr>

<tr>
<td>-</td>
<td>Subtraction</td>
<td>10 - 5</td>
<td>5</td>
</tr>

<tr>
<td>*</td>
<td>Multiplication</td>
<td>10 * 5</td>
<td>50</td>
</tr>

<tr>
<td>/</td>
<td>Division</td>
<td>10 / 5</td>
<td>2</td>
</tr>

<tr>
<td>%</td>
<td>Modulus</td>
<td>10 % 3</td>
<td>1</td>
</tr>

</table>

<h4>Program Example</h4>

<pre>
#include <stdio.h>

int main()
{
    int a = 10, b = 3;

    printf("Addition = %d\\n", a+b);
    printf("Subtraction = %d\\n", a-b);
    printf("Multiplication = %d\\n", a*b);
    printf("Division = %d\\n", a/b);
    printf("Modulus = %d\\n", a%b);

    return 0;
}
</pre>

<hr>

<h3>2. Relational Operators</h3>

<p>
Relational operators compare two values and return either True (1) or False (0).
</p>

<table  class="notes-table">
<tr>
<th>Operator</th>
<th>Name</th>
<th>Example</th>
<th>Output</th>
</tr>

<tr>
<td>==</td>
<td>Equal To</td>
<td>10 == 10</td>
<td>1</td>
</tr>

<tr>
<td>!=</td>
<td>Not Equal To</td>
<td>10 != 5</td>
<td>1</td>
</tr>

<tr>
<td>&gt;</td>
<td>Greater Than</td>
<td>10 &gt; 5</td>
<td>1</td>
</tr>

<tr>
<td>&lt;</td>
<td>Less Than</td>
<td>10 &lt; 5</td>
<td>0</td>
</tr>

<tr>
<td>&gt;=</td>
<td>Greater Than Equal To</td>
<td>10 &gt;= 10</td>
<td>1</td>
</tr>

<tr>
<td>&lt;=</td>
<td>Less Than Equal To</td>
<td>5 &lt;= 10</td>
<td>1</td>
</tr>

</table>

<h4>Example</h4>

<pre>
int a = 10, b = 20;

printf("%d", a == b);
printf("%d", a != b);
printf("%d", a < b);
</pre>

<hr>

<h3>3. Logical Operators</h3>

<p>
Logical operators are used to combine two or more conditions.
</p>

<table  class="notes-table">
<tr>
<th>Operator</th>
<th>Name</th>
<th>Meaning</th>
</tr>

<tr>
<td>&&</td>
<td>Logical AND</td>
<td>Returns true if both conditions are true.</td>
</tr>

<tr>
<td>||</td>
<td>Logical OR</td>
<td>Returns true if at least one condition is true.</td>
</tr>

<tr>
<td>!</td>
<td>Logical NOT</td>
<td>Reverses the result.</td>
</tr>

</table>

<h4>Example</h4>

<pre>
int age = 20;

(age >= 18 && age <= 60)

(age < 18 || age > 60)

!(age == 20)
</pre>

<hr>

<h3>4. Assignment Operators</h3>

<p>
Assignment operators are used to assign values to variables.
</p>

<table  class="notes-table">
<tr>
<th>Operator</th>
<th>Example</th>
<th>Equivalent Expression</th>
</tr>

<tr>
<td>=</td>
<td>a = 10</td>
<td>Assign value</td>
</tr>

<tr>
<td>+=</td>
<td>a += 5</td>
<td>a = a + 5</td>
</tr>

<tr>
<td>-=</td>
<td>a -= 5</td>
<td>a = a - 5</td>
</tr>

<tr>
<td>*=</td>
<td>a *= 5</td>
<td>a = a * 5</td>
</tr>

<tr>
<td>/=</td>
<td>a /= 5</td>
<td>a = a / 5</td>
</tr>

<tr>
<td>%=</td>
<td>a %= 5</td>
<td>a = a % 5</td>
</tr>

</table>

<hr>

<h3>5. Increment and Decrement Operators</h3>

<p>
These operators increase or decrease a variable value by 1.
</p>

<table  class="notes-table">
<tr>
<th>Operator</th>
<th>Name</th>
<th>Example</th>
</tr>

<tr>
<td>++</td>
<td>Increment</td>
<td>a++</td>
</tr>

<tr>
<td>--</td>
<td>Decrement</td>
<td>a--</td>
</tr>

</table>

<h4>Example</h4>

<pre>
int a = 5;

a++;
printf("%d", a);

a--;
printf("%d", a);
</pre>

<hr>

<h3>6. Bitwise Operators</h3>

<p>
Bitwise operators work directly on binary values (bits).
</p>

<table  class="notes-table">
<tr>
<th>Operator</th>
<th>Name</th>
</tr>

<tr>
<td>&</td>
<td>Bitwise AND</td>
</tr>

<tr>
<td>|</td>
<td>Bitwise OR</td>
</tr>

<tr>
<td>^</td>
<td>Bitwise XOR</td>
</tr>

<tr>
<td>~</td>
<td>Bitwise NOT</td>
</tr>

<tr>
<td>&lt;&lt;</td>
<td>Left Shift</td>
</tr>

<tr>
<td>&gt;&gt;</td>
<td>Right Shift</td>
</tr>

</table>

<h4>Example</h4>

<pre>
5 & 3 = 1
5 | 3 = 7
</pre>

<hr>

<h3>7. Conditional (Ternary) Operator</h3>

<p>
The conditional operator is a short form of if-else.
</p>

<pre>
condition ? true_statement : false_statement;
</pre>

<h4>Example</h4>

<pre>
int a = 10, b = 20;

(a > b) ? printf("A is Greater")
        : printf("B is Greater");
</pre>

<hr>

<h3>8. Special Operators</h3>

<table  class="notes-table">
<tr>
<th>Operator</th>
<th>Purpose</th>
</tr>

<tr>
<td>sizeof()</td>
<td>Returns size of variable or data type</td>
</tr>

<tr>
<td>&</td>
<td>Address Operator</td>
</tr>

<tr>
<td>*</td>
<td>Pointer Operator</td>
</tr>

</table>

<h4>Example</h4>

<pre>
int a;

printf("%d", sizeof(a));
</pre>

<hr>

<h3>Summary</h3>

<ul>
<li>Arithmetic Operators → Mathematical calculations.</li>
<li>Relational Operators → Compare values.</li>
<li>Logical Operators → Combine conditions.</li>
<li>Assignment Operators → Assign values.</li>
<li>Increment/Decrement Operators → Increase or decrease value by 1.</li>
<li>Bitwise Operators → Work on binary values.</li>
<li>Conditional Operator → Short form of if-else.</li>
<li>Special Operators → Memory and pointer operations.</li>
</ul>

<h3>Important Exam Questions</h3>

<ul>
<li>What is an operator in C language?</li>
<li>Explain arithmetic operators with examples.</li>
<li>What is the difference between = and == ?</li>
<li>Explain logical operators with suitable examples.</li>
<li>What are assignment operators?</li>
<li>Explain increment and decrement operators.</li>
<li>What is a ternary operator?</li>
<li>Write a short note on bitwise operators.</li>
</ul>

`;

let constantsAndLiterals = `

<h3>Constants and Literals in C Language</h3>

<p>
In C programming, <strong>Constants</strong> and <strong>Literals</strong> represent fixed values that do not change during program execution.
They are used to store and work with fixed data in a program.
</p>

<hr>

<h3>Constants</h3>

<p>
A <strong>constant</strong> is a value that cannot be changed during the execution of a program.
Once a constant is defined, its value remains fixed throughout the program.
</p>

<p>
In simple words, a constant is a fixed value that never changes.
</p>

<h4>Example</h4>

<pre>
const int age = 18;
</pre>

<p>
Here, the value of <strong>age</strong> cannot be changed because it is declared as a constant.
</p>

<h4>Why Use Constants?</h4>

<ul>
<li>To store fixed values.</li>
<li>To make programs easier to understand.</li>
<li>To prevent accidental modification of important values.</li>
<li>To improve code readability.</li>
</ul>

<h4>Types of Constants in C</h4>

<ol>
<li>Integer Constants</li>
<li>Floating Point Constants</li>
<li>Character Constants</li>
<li>String Constants</li>
<li>Enumeration Constants</li>
</ol>

<hr>

<h3>1. Integer Constants</h3>

<p>
Integer constants contain whole numbers without decimal points.
</p>

<table class="notes-table">
<tr>
<th>Constant</th>
<th>Description</th>
</tr>

<tr>
<td>10</td>
<td>Positive Integer</td>
</tr>

<tr>
<td>-50</td>
<td>Negative Integer</td>
</tr>

<tr>
<td>0</td>
<td>Zero</td>
</tr>
</table>

<h4>Example</h4>

<pre>
int marks = 90;
</pre>

<hr>

<h3>2. Floating Point Constants</h3>

<p>
Floating point constants contain decimal values.
</p>

<table class="notes-table">
<tr>
<th>Constant</th>
<th>Description</th>
</tr>

<tr>
<td>10.5</td>
<td>Decimal Number</td>
</tr>

<tr>
<td>25.75</td>
<td>Decimal Number</td>
</tr>

<tr>
<td>-15.2</td>
<td>Negative Decimal</td>
</tr>
</table>

<h4>Example</h4>

<pre>
float price = 99.99;
</pre>

<hr>

<h3>3. Character Constants</h3>

<p>
A character constant contains a single character enclosed in single quotes.
</p>

<table class="notes-table">
<tr>
<th>Constant</th>
<th>Description</th>
</tr>

<tr>
<td>'A'</td>
<td>Character A</td>
</tr>

<tr>
<td>'B'</td>
<td>Character B</td>
</tr>

<tr>
<td>'1'</td>
<td>Digit Character</td>
</tr>
</table>

<h4>Example</h4>

<pre>
char grade = 'A';
</pre>

<hr>

<h3>4. String Constants</h3>

<p>
A string constant is a group of characters enclosed within double quotes.
</p>

<table class="notes-table">
<tr>
<th>Constant</th>
<th>Description</th>
</tr>

<tr>
<td>"Hello"</td>
<td>String Constant</td>
</tr>

<tr>
<td>"C Programming"</td>
<td>String Constant</td>
</tr>

<tr>
<td>"India"</td>
<td>String Constant</td>
</tr>
</table>

<h4>Example</h4>

<pre>
char name[] = "Pradeep";
</pre>

<hr>

<h3>Literals</h3>

<p>
A <strong>literal</strong> is the actual value written directly in the program.
Every constant value written in code is called a literal.
</p>

<p>
In simple words, literals are fixed values written directly in the source code.
</p>

<h4>Example</h4>

<pre>
int age = 20;
</pre>

<p>
Here:
</p>

<ul>
<li><strong>age</strong> → Variable</li>
<li><strong>20</strong> → Literal</li>
</ul>

<hr>

<h3>Types of Literals</h3>

<h4>Integer Literal</h4>

<pre>
int num = 100;
</pre>

<p>
100 is an integer literal.
</p>

<h4>Floating Literal</h4>

<pre>
float pi = 3.14;
</pre>

<p>
3.14 is a floating-point literal.
</p>

<h4>Character Literal</h4>

<pre>
char ch = 'A';
</pre>

<p>
'A' is a character literal.
</p>

<h4>String Literal</h4>

<pre>
char city[] = "Delhi";
</pre>

<p>
"Delhi" is a string literal.
</p>

<hr>

<h3>Difference Between Constants and Literals</h3>

<table class="notes-table">
<tr>
<th>Constants</th>
<th>Literals</th>
</tr>

<tr>
<td>Fixed values that cannot be changed.</td>
<td>Actual values written directly in code.</td>
</tr>

<tr>
<td>Can be assigned to variables.</td>
<td>Represent the exact value.</td>
</tr>

<tr>
<td>May be declared using const.</td>
<td>No declaration is required.</td>
</tr>

<tr>
<td>Example: const int age = 18;</td>
<td>Example: 18 is a literal.</td>
</tr>
</table>

<hr>

<h3>Program Example</h3>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    const int age = 18;

    int marks = 90;
    float pi = 3.14;
    char grade = 'A';

    printf("Age = %d\\n", age);
    printf("Marks = %d\\n", marks);
    printf("Pi = %.2f\\n", pi);
    printf("Grade = %c\\n", grade);

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Age = 18
Marks = 90
Pi = 3.14
Grade = A
</pre>

<hr>

<h3>Important Points to Remember</h3>

<ul>
<li>Constants are fixed values that cannot be changed.</li>
<li>Literals are actual values written directly in code.</li>
<li>Integer, float, character, and string values can all be literals.</li>
<li>The const keyword is used to create constants.</li>
<li>Constants improve program safety and readability.</li>
</ul>

<hr>

<h3>Important Exam Questions</h3>

<ul>
<li>What is a constant in C language?</li>
<li>What is a literal?</li>
<li>Explain different types of constants with examples.</li>
<li>Differentiate between constants and literals.</li>
<li>What is the use of the const keyword?</li>
<li>Explain string constants and character constants.</li>
</ul>

`;


let conditionalStatementsAndLoops = `

<h3>Conditional Statements and Loops in C Language</h3>

<p>
In C programming, <strong>Conditional Statements</strong> and <strong>Loops</strong> are important control structures that help us control the flow of a program.
</p>

<p>
A program normally executes statements one after another. However, sometimes we need to make decisions or repeat a set of instructions multiple times. For this purpose, C provides conditional statements and loops.
</p>

<h4>Conditional Statements</h4>

<p>
Conditional statements are used to make decisions in a program. They execute different blocks of code based on whether a condition is true or false.
</p>

<p>
For example, if a student's marks are greater than 40, the program can display <strong>"Pass"</strong>; otherwise, it can display <strong>"Fail"</strong>.
</p>

<p>
C language provides the following conditional statements:
</p>

<ul>
<li><strong>if Statement</strong></li>
<li><strong>if-else Statement</strong></li>
<li><strong>Nested if Statement</strong></li>
<li><strong>else-if Ladder</strong></li>
<li><strong>switch Statement</strong></li>
</ul>

<h4>Loops</h4>

<p>
Loops are used to execute a block of code repeatedly until a specified condition becomes false.
</p>

<p>
Without loops, programmers would need to write the same statements many times. Loops make programs shorter, easier to understand, and more efficient.
</p>

<p>
For example, if you want to print numbers from 1 to 100, using a loop is much easier than writing 100 separate print statements.
</p>

<p>
C language provides the following types of loops:
</p>

<ul>
<li><strong>for Loop</strong></li>
<li><strong>while Loop</strong></li>
<li><strong>do-while Loop</strong></li>
</ul>

<h4>Why Are Conditional Statements and Loops Important?</h4>

<ul>
<li>They help programs make decisions.</li>
<li>They reduce repetitive code.</li>
<li>They improve program efficiency.</li>
<li>They make programs more flexible and interactive.</li>
<li>They are essential for solving real-world programming problems.</li>
</ul>

<p>
In simple words, <strong>conditional statements help a program decide what to do, while loops help a program repeat tasks efficiently.</strong>
</p>

`;



let ifStatementContent = `

<h3>If Statement in C Language</h3>

<p>
The <strong>if statement</strong> is the simplest decision-making statement in C language.
It is used to execute a block of code only when a specified condition is true.
</p>

<p>
In simple words, the if statement allows a program to make decisions.
If the condition is true, the statements inside the if block are executed.
If the condition is false, the statements inside the if block are skipped.
</p>

<h4>Syntax of if Statement</h4>

<pre>
if(condition)
{
    // statements
}
</pre>

<h4>Flow of Execution</h4>

<ul>
<li>The condition is checked first.</li>
<li>If the condition is true (1), the statements inside the if block execute.</li>
<li>If the condition is false (0), the statements inside the if block are skipped.</li>
<li>The program continues with the next statement after the if block.</li>
</ul>

<h4>Example 1: Check Eligibility for Voting</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int age = 20;

    if(age >= 18)
    {
        printf("You are eligible to vote.");
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
You are eligible to vote.
</pre>

<p>
Since age is 20 and the condition (age >= 18) is true, the message is displayed.
</p>

<hr>

<h4>Example 2: Check Positive Number</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int num = 10;

    if(num > 0)
    {
        printf("Positive Number");
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Positive Number
</pre>

<hr>

<h4>Example 3: Check Pass or Not</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int marks = 45;

    if(marks >= 40)
    {
        printf("Pass");
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Pass
</pre>

<hr>

<h4>Relational Operators Used with if Statement</h4>

<table class="notes-table">
<tr>
<th>Operator</th>
<th>Meaning</th>
<th>Example</th>
</tr>

<tr>
<td>==</td>
<td>Equal To</td>
<td>a == b</td>
</tr>

<tr>
<td>!=</td>
<td>Not Equal To</td>
<td>a != b</td>
</tr>

<tr>
<td>&gt;</td>
<td>Greater Than</td>
<td>a &gt; b</td>
</tr>

<tr>
<td>&lt;</td>
<td>Less Than</td>
<td>a &lt; b</td>
</tr>

<tr>
<td>&gt;=</td>
<td>Greater Than or Equal To</td>
<td>a &gt;= b</td>
</tr>

<tr>
<td>&lt;=</td>
<td>Less Than or Equal To</td>
<td>a &lt;= b</td>
</tr>

</table>

<hr>

<h4>Important Rules of if Statement</h4>

<ul>
<li>The condition must be enclosed within parentheses ( ).</li>
<li>Curly braces { } are used to create the if block.</li>
<li>If the condition is true, the block executes.</li>
<li>If the condition is false, the block is skipped.</li>
<li>The if statement can contain one or more statements.</li>
</ul>

<hr>

<h4>Advantages of if Statement</h4>

<ul>
<li>Helps programs make decisions.</li>
<li>Easy to understand and use.</li>
<li>Allows execution of code based on conditions.</li>
<li>Improves program flexibility.</li>
</ul>

<hr>

<h4>Real-Life Examples of if Statement</h4>

<table class="notes-table">
<tr>
<th>Condition</th>
<th>Action</th>
</tr>

<tr>
<td>If age is 18 or above</td>
<td>Allow voting</td>
</tr>

<tr>
<td>If marks are 40 or above</td>
<td>Pass student</td>
</tr>

<tr>
<td>If balance is sufficient</td>
<td>Allow withdrawal</td>
</tr>

<tr>
<td>If password is correct</td>
<td>Allow login</td>
</tr>

</table>

<hr>

<h4>Common Mistakes</h4>

<table class="notes-table">
<tr>
<th>Wrong</th>
<th>Correct</th>
</tr>

<tr>
<td>if age > 18</td>
<td>if(age > 18)</td>
</tr>

<tr>
<td>if(age = 18)</td>
<td>if(age == 18)</td>
</tr>

</table>

<p>
Remember:
<strong>=</strong> is Assignment Operator and
<strong>==</strong> is Comparison Operator.
</p>

<hr>

<h4>Summary</h4>

<ul>
<li>The if statement is used for decision making.</li>
<li>It executes a block only when the condition is true.</li>
<li>If the condition is false, the block is skipped.</li>
<li>Relational operators are commonly used with if statements.</li>
<li>It is the foundation of all conditional statements in C.</li>
</ul>

<hr>

<h4>Important Exam Questions</h4>

<ul>
<li>What is an if statement in C language?</li>
<li>Write the syntax of an if statement.</li>
<li>Explain the working of an if statement with an example.</li>
<li>What happens when the condition is false?</li>
<li>Differentiate between = and ==.</li>
<li>Write a program to check whether a student has passed or failed using if statement.</li>
</ul>

`

let ifElseStatementContent = `

<h3>if-else Statement in C Language</h3>

<p>
The <strong>if-else statement</strong> is a decision-making statement in C language.
It is used when we want to perform one action if a condition is true and another action if the condition is false.
</p>

<p>
In simple words, the if-else statement gives the program two choices.
The program checks a condition and chooses one block of code to execute.
</p>

<p>
For example, if a student's marks are 40 or above, the program displays <strong>"Pass"</strong>. Otherwise, it displays <strong>"Fail"</strong>.
</p>

<hr>

<h4>Syntax of if-else Statement</h4>

<pre>
if(condition)
{
    // Executes when condition is true
}
else
{
    // Executes when condition is false
}
</pre>

<hr>

<h4>Working of if-else Statement</h4>

<ul>
<li>The condition is checked first.</li>
<li>If the condition is true, the if block executes.</li>
<li>If the condition is false, the else block executes.</li>
<li>Only one block executes at a time.</li>
</ul>

<hr>

<h4>Flowchart of if-else Statement</h4>

<pre>
        Condition
            |
      ----------------
      |              |
    True          False
      |              |
   if Block      else Block
      |              |
      ----------------
             |
           End
</pre>

<hr>

<h4>Example 1: Check Pass or Fail</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int marks = 35;

    if(marks >= 40)
    {
        printf("Pass");
    }
    else
    {
        printf("Fail");
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Fail
</pre>

<p>
Since marks are less than 40, the condition becomes false and the else block executes.
</p>

<hr>

<h4>Example 2: Check Voting Eligibility</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int age = 17;

    if(age >= 18)
    {
        printf("Eligible for Voting");
    }
    else
    {
        printf("Not Eligible for Voting");
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Not Eligible for Voting
</pre>

<hr>

<h4>Example 3: Check Positive or Negative Number</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int num = -5;

    if(num >= 0)
    {
        printf("Positive Number");
    }
    else
    {
        printf("Negative Number");
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Negative Number
</pre>

<hr>

<h4>Real-Life Examples of if-else Statement</h4>

<table class="notes-table">
<tr>
<th>Condition</th>
<th>If Condition is True</th>
<th>If Condition is False</th>
</tr>

<tr>
<td>Marks >= 40</td>
<td>Pass</td>
<td>Fail</td>
</tr>

<tr>
<td>Age >= 18</td>
<td>Can Vote</td>
<td>Cannot Vote</td>
</tr>

<tr>
<td>Password Correct</td>
<td>Login Success</td>
<td>Login Failed</td>
</tr>

<tr>
<td>Balance Available</td>
<td>Withdraw Money</td>
<td>Transaction Denied</td>
</tr>

</table>

<hr>

<h4>Comparison Operators Used with if-else</h4>

<table class="notes-table">
<tr>
<th>Operator</th>
<th>Meaning</th>
<th>Example</th>
</tr>

<tr>
<td>==</td>
<td>Equal To</td>
<td>a == b</td>
</tr>

<tr>
<td>!=</td>
<td>Not Equal To</td>
<td>a != b</td>
</tr>

<tr>
<td>&gt;</td>
<td>Greater Than</td>
<td>a &gt; b</td>
</tr>

<tr>
<td>&lt;</td>
<td>Less Than</td>
<td>a &lt; b</td>
</tr>

<tr>
<td>&gt;=</td>
<td>Greater Than or Equal To</td>
<td>a &gt;= b</td>
</tr>

<tr>
<td>&lt;=</td>
<td>Less Than or Equal To</td>
<td>a &lt;= b</td>
</tr>

</table>

<hr>

<h4>Advantages of if-else Statement</h4>

<ul>
<li>Helps programs make decisions.</li>
<li>Provides two possible execution paths.</li>
<li>Easy to understand and implement.</li>
<li>Used in almost every real-world application.</li>
<li>Improves program flexibility.</li>
</ul>

<hr>

<h4>Important Rules</h4>

<ul>
<li>The condition must be written inside parentheses ( ).</li>
<li>The else block does not require any condition.</li>
<li>Only one block (if or else) executes.</li>
<li>Curly braces { } are used to group statements.</li>
<li>The else block is optional but useful when handling false conditions.</li>
</ul>

<hr>

<h4>Common Mistakes</h4>

<table class="notes-table">
<tr>
<th>Wrong</th>
<th>Correct</th>
</tr>

<tr>
<td>if(age = 18)</td>
<td>if(age == 18)</td>
</tr>

<tr>
<td>if age > 18</td>
<td>if(age > 18)</td>
</tr>

<tr>
<td>else(age < 18)</td>
<td>else</td>
</tr>

</table>

<p>
Remember:
</p>

<ul>
<li><strong>=</strong> → Assignment Operator</li>
<li><strong>==</strong> → Comparison Operator</li>
</ul>

<hr>

<h4>Difference Between if and if-else</h4>

<table class="notes-table">
<tr>
<th>if Statement</th>
<th>if-else Statement</th>
</tr>

<tr>
<td>Executes only when condition is true.</td>
<td>Executes one block for true and another for false.</td>
</tr>

<tr>
<td>No action when condition is false.</td>
<td>Handles both true and false conditions.</td>
</tr>

<tr>
<td>Used for single decision.</td>
<td>Used when two outcomes are possible.</td>
</tr>

</table>

<hr>

<h4>Summary</h4>

<ul>
<li>The if-else statement is used for decision making.</li>
<li>It checks a condition and chooses one of two blocks.</li>
<li>If the condition is true, the if block executes.</li>
<li>If the condition is false, the else block executes.</li>
<li>Only one block executes at a time.</li>
<li>It is widely used in real-world applications.</li>
</ul>

<hr>

<h4>Important Exam Questions</h4>

<ul>
<li>What is an if-else statement in C language?</li>
<li>Write the syntax of if-else statement.</li>
<li>Explain the working of if-else with a suitable example.</li>
<li>Write a program to check voting eligibility using if-else.</li>
<li>Differentiate between if and if-else statement.</li>
<li>What happens when the condition becomes false?</li>
</ul>

`

let nestedIfStatementContent = `

<h3>Nested if Statement in C Language</h3>

<p>
A <strong>Nested if Statement</strong> is an if statement inside another if statement.
It is used when multiple conditions need to be checked one after another.
</p>

<p>
In simple words, when one condition depends on another condition, we use a nested if statement.
The inner if statement executes only if the outer if condition is true.
</p>

<p>
For example, before allowing a student to sit in an examination, the program may first check whether the student is registered. If the student is registered, then it checks whether the attendance is sufficient.
</p>

<hr>

<h4>Syntax of Nested if Statement</h4>

<pre>
if(condition1)
{
    if(condition2)
    {
        // statements
    }
}
</pre>

<hr>

<h4>Working of Nested if Statement</h4>

<ul>
<li>The outer if condition is checked first.</li>
<li>If the outer condition is true, the inner if condition is checked.</li>
<li>If both conditions are true, the inner block executes.</li>
<li>If the outer condition is false, the inner condition is never checked.</li>
</ul>

<hr>

<h4>Flowchart of Nested if Statement</h4>

<pre>
        Condition 1
             |
      ----------------
      |              |
    True          False
      |
   Condition 2
      |
   ----------
   |        |
 True     False
   |
Statements
</pre>

<hr>

<h4>Example 1: Student Eligible for Exam</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int registered = 1;
    int attendance = 80;

    if(registered == 1)
    {
        if(attendance >= 75)
        {
            printf("Eligible for Exam");
        }
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Eligible for Exam
</pre>

<p>
Since the student is registered and attendance is greater than 75%, the message is displayed.
</p>

<hr>

<h4>Example 2: Driving License Eligibility</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int age = 20;
    int testPassed = 1;

    if(age >= 18)
    {
        if(testPassed == 1)
        {
            printf("License Approved");
        }
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
License Approved
</pre>

<hr>

<h4>Example 3: Employee Bonus</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int experience = 5;
    int performance = 90;

    if(experience >= 3)
    {
        if(performance >= 80)
        {
            printf("Bonus Approved");
        }
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Bonus Approved
</pre>

<hr>

<h4>Real-Life Examples of Nested if</h4>

<table class="notes-table">
<tr>
<th>First Condition</th>
<th>Second Condition</th>
<th>Result</th>
</tr>

<tr>
<td>Student Registered</td>
<td>Attendance ≥ 75%</td>
<td>Eligible for Exam</td>
</tr>

<tr>
<td>Age ≥ 18</td>
<td>Driving Test Passed</td>
<td>License Approved</td>
</tr>

<tr>
<td>Employee Working</td>
<td>Good Performance</td>
<td>Bonus Approved</td>
</tr>

<tr>
<td>Username Correct</td>
<td>Password Correct</td>
<td>Login Success</td>
</tr>

</table>

<hr>

<h4>Nested if with else</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int age = 17;

    if(age >= 18)
    {
        if(age >= 21)
        {
            printf("Adult");
        }
        else
        {
            printf("Young Adult");
        }
    }
    else
    {
        printf("Minor");
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Minor
</pre>

<hr>

<h4>Advantages of Nested if Statement</h4>

<ul>
<li>Allows checking multiple conditions.</li>
<li>Useful for complex decision-making.</li>
<li>Makes programs more logical and organized.</li>
<li>Helps solve real-world problems efficiently.</li>
</ul>

<hr>

<h4>Disadvantages of Nested if Statement</h4>

<ul>
<li>Too many nested if statements can make programs difficult to read.</li>
<li>Debugging becomes harder when nesting levels increase.</li>
<li>Large nested structures may reduce code readability.</li>
</ul>

<hr>

<h4>Difference Between if and Nested if</h4>

<table class="notes-table">
<tr>
<th>if Statement</th>
<th>Nested if Statement</th>
</tr>

<tr>
<td>Checks only one condition.</td>
<td>Checks multiple conditions.</td>
</tr>

<tr>
<td>Simple decision making.</td>
<td>Complex decision making.</td>
</tr>

<tr>
<td>Easy to understand.</td>
<td>Can become complex if overused.</td>
</tr>

</table>

<hr>

<h4>Important Rules</h4>

<ul>
<li>An if statement can be placed inside another if statement.</li>
<li>The inner if executes only when the outer if condition is true.</li>
<li>There is no limit on the number of nested if statements.</li>
<li>Proper indentation should be used for better readability.</li>
</ul>

<hr>

<h4>Summary</h4>

<ul>
<li>Nested if means an if statement inside another if statement.</li>
<li>It is used when multiple conditions must be checked.</li>
<li>The inner condition is checked only if the outer condition is true.</li>
<li>Nested if statements are useful for complex decision-making.</li>
<li>They are commonly used in login systems, eligibility checks, and validation processes.</li>
</ul>

<hr>

<h4>Important Exam Questions</h4>

<ul>
<li>What is a Nested if Statement?</li>
<li>Write the syntax of Nested if Statement.</li>
<li>Explain the working of Nested if with a suitable example.</li>
<li>Differentiate between if and Nested if Statement.</li>
<li>Write a program to check exam eligibility using Nested if.</li>
<li>What are the advantages and disadvantages of Nested if Statement?</li>
</ul>

`;

let elseIfLadderContent = `

<h3>Else-if Ladder in C Language</h3>

<p>
The <strong>else-if ladder</strong> is a decision-making statement used when there are multiple conditions to check.
It allows the program to choose one block of code from many possible options.
</p>

<p>
In simple words, if the first condition is false, the program checks the second condition. If the second condition is also false, it checks the third condition, and so on until a true condition is found.
</p>

<p>
The else-if ladder is very useful when a program has multiple choices or outcomes.
</p>

<hr>

<h4>Why Do We Need Else-if Ladder?</h4>

<p>
Suppose you want to display a student's grade based on marks:
</p>

<ul>
<li>Marks ≥ 90 → Grade A</li>
<li>Marks ≥ 75 → Grade B</li>
<li>Marks ≥ 60 → Grade C</li>
<li>Marks ≥ 40 → Grade D</li>
<li>Marks < 40 → Fail</li>
</ul>

<p>
Since there are multiple conditions, a simple if or if-else statement is not enough.
In such situations, we use the <strong>else-if ladder</strong>.
</p>

<hr>

<h4>Syntax of Else-if Ladder</h4>

<pre>
if(condition1)
{
    // statements
}
else if(condition2)
{
    // statements
}
else if(condition3)
{
    // statements
}
else
{
    // statements
}
</pre>

<hr>

<h4>Working of Else-if Ladder</h4>

<ul>
<li>The first condition is checked.</li>
<li>If it is true, its block executes and the remaining conditions are skipped.</li>
<li>If it is false, the next else-if condition is checked.</li>
<li>The process continues until a true condition is found.</li>
<li>If all conditions are false, the else block executes.</li>
<li>Only one block executes at a time.</li>
</ul>

<hr>

<h4>Flowchart of Else-if Ladder</h4>

<pre>
        Condition 1
             |
      ----------------
      |              |
    True          False
      |              |
 Block 1       Condition 2
                    |
              --------------
              |            |
            True        False
              |            |
          Block 2    Condition 3
                           |
                     -------------
                     |           |
                   True       False
                     |           |
                 Block 3      Else Block
</pre>

<hr>

<h4>Example 1: Student Grade System</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int marks = 82;

    if(marks >= 90)
    {
        printf("Grade A");
    }
    else if(marks >= 75)
    {
        printf("Grade B");
    }
    else if(marks >= 60)
    {
        printf("Grade C");
    }
    else if(marks >= 40)
    {
        printf("Grade D");
    }
    else
    {
        printf("Fail");
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Grade B
</pre>

<p>
Since marks are 82, the second condition becomes true and Grade B is displayed.
</p>

<hr>

<h4>Example 2: Find Largest Number</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int a = 20, b = 35, c = 15;

    if(a > b && a > c)
    {
        printf("A is Largest");
    }
    else if(b > a && b > c)
    {
        printf("B is Largest");
    }
    else
    {
        printf("C is Largest");
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
B is Largest
</pre>

<hr>

<h4>Example 3: Check Age Category</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int age = 25;

    if(age < 13)
    {
        printf("Child");
    }
    else if(age < 20)
    {
        printf("Teenager");
    }
    else if(age < 60)
    {
        printf("Adult");
    }
    else
    {
        printf("Senior Citizen");
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Adult
</pre>

<hr>

<h4>Real-Life Applications of Else-if Ladder</h4>

<table class="notes-table">
<tr>
<th>Application</th>
<th>Purpose</th>
</tr>

<tr>
<td>Student Grading System</td>
<td>Assign grades based on marks.</td>
</tr>

<tr>
<td>Salary Calculation</td>
<td>Calculate bonus according to salary range.</td>
</tr>

<tr>
<td>Banking System</td>
<td>Apply interest rates based on account type.</td>
</tr>

<tr>
<td>Online Shopping</td>
<td>Provide discounts according to purchase amount.</td>
</tr>

<tr>
<td>Age Classification</td>
<td>Determine age group.</td>
</tr>

</table>

<hr>

<h4>Difference Between if, if-else and else-if Ladder</h4>

<table class="notes-table">
<tr>
<th>Statement</th>
<th>Purpose</th>
</tr>

<tr>
<td>if</td>
<td>Checks only one condition.</td>
</tr>

<tr>
<td>if-else</td>
<td>Checks one condition and provides two choices.</td>
</tr>

<tr>
<td>else-if Ladder</td>
<td>Checks multiple conditions and selects one option.</td>
</tr>

</table>

<hr>

<h4>Advantages of Else-if Ladder</h4>

<ul>
<li>Can handle multiple conditions efficiently.</li>
<li>Easy to understand and implement.</li>
<li>Reduces the need for multiple separate if statements.</li>
<li>Useful for menu-driven and grading applications.</li>
<li>Only one block executes, improving efficiency.</li>
</ul>

<hr>

<h4>Important Rules</h4>

<ul>
<li>The first true condition is executed.</li>
<li>Remaining conditions are skipped after a true condition is found.</li>
<li>The else block is optional.</li>
<li>The order of conditions is very important.</li>
<li>Only one block executes at a time.</li>
</ul>

<hr>

<h4>Common Mistakes</h4>

<table class="notes-table">
<tr>
<th>Wrong</th>
<th>Correct</th>
</tr>

<tr>
<td>if(marks > 90) Grade A before if(marks > 75)</td>
<td>Write conditions from highest to lowest properly.</td>
</tr>

<tr>
<td>Using separate if statements unnecessarily</td>
<td>Use else-if ladder for multiple choices.</td>
</tr>

<tr>
<td>Forgetting final else block</td>
<td>Add else block for default condition.</td>
</tr>

</table>

<hr>

<h4>Summary</h4>

<ul>
<li>The else-if ladder is used when multiple conditions need to be checked.</li>
<li>Conditions are checked from top to bottom.</li>
<li>The first true condition executes.</li>
<li>If all conditions are false, the else block executes.</li>
<li>Only one block executes at a time.</li>
<li>It is commonly used in grading systems, banking applications, and menu-driven programs.</li>
</ul>

<hr>

<h4>Important Exam Questions</h4>

<ul>
<li>What is an else-if ladder in C language?</li>
<li>Write the syntax of an else-if ladder.</li>
<li>Explain the working of else-if ladder with a suitable example.</li>
<li>Differentiate between if, if-else, and else-if ladder.</li>
<li>Write a C program to display grades using else-if ladder.</li>
<li>What are the advantages of using else-if ladder?</li>
<li>Why is the order of conditions important in an else-if ladder?</li>
</ul>

`;

let switchCaseContent = `

<h3>Switch Case Statement in C Language</h3>

<p>
The <strong>switch case statement</strong> is a multi-way decision-making statement in C language.
It allows a program to select and execute one block of code from multiple available options.
</p>

<p>
In simple words, the switch statement is used when we have many choices and want to perform different actions based on the value of a variable.
</p>

<p>
For example, when a user selects an option from a menu, the program can perform different tasks according to the selected option.
</p>

<hr>

<h4>Why Do We Need Switch Case?</h4>

<p>
Suppose a program displays the following menu:
</p>

<ul>
<li>1 → Add</li>
<li>2 → Subtract</li>
<li>3 → Multiply</li>
<li>4 → Divide</li>
</ul>

<p>
Instead of writing many if-else statements, we can use a switch statement to make the program shorter, cleaner, and easier to understand.
</p>

<hr>

<h4>Syntax of Switch Statement</h4>

<pre>
switch(expression)
{
    case value1:
        statements;
        break;

    case value2:
        statements;
        break;

    case value3:
        statements;
        break;

    default:
        statements;
}
</pre>

<hr>

<h4>Working of Switch Statement</h4>

<ul>
<li>The expression is evaluated first.</li>
<li>The value of the expression is compared with each case value.</li>
<li>If a matching case is found, its statements execute.</li>
<li>The break statement terminates the switch block.</li>
<li>If no case matches, the default block executes.</li>
</ul>

<hr>

<h4>Flowchart of Switch Statement</h4>

<pre>
           Expression
                |
      ---------------------
      |    |    |    |    |
   Case1 Case2 Case3 ... Default
      |    |    |         |
      ---------------------
                |
               End
</pre>

<hr>

<h4>Example 1: Display Day Name</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int day = 3;

    switch(day)
    {
        case 1:
            printf("Monday");
            break;

        case 2:
            printf("Tuesday");
            break;

        case 3:
            printf("Wednesday");
            break;

        case 4:
            printf("Thursday");
            break;

        case 5:
            printf("Friday");
            break;

        default:
            printf("Invalid Day");
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Wednesday
</pre>

<hr>

<h4>Example 2: Simple Calculator</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int choice = 2;
    int a = 20, b = 10;

    switch(choice)
    {
        case 1:
            printf("Addition = %d", a+b);
            break;

        case 2:
            printf("Subtraction = %d", a-b);
            break;

        case 3:
            printf("Multiplication = %d", a*b);
            break;

        case 4:
            printf("Division = %d", a/b);
            break;

        default:
            printf("Invalid Choice");
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Subtraction = 10
</pre>

<hr>

<h4>Example 3: Check Vowel</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    char ch = 'A';

    switch(ch)
    {
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            printf("Vowel");
            break;

        default:
            printf("Consonant");
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Vowel
</pre>

<hr>

<h4>Important Parts of Switch Statement</h4>

<table class="notes-table">
<tr>
<th>Part</th>
<th>Description</th>
</tr>

<tr>
<td>switch</td>
<td>Used to start the switch block.</td>
</tr>

<tr>
<td>case</td>
<td>Represents a possible value.</td>
</tr>

<tr>
<td>break</td>
<td>Terminates the current case.</td>
</tr>

<tr>
<td>default</td>
<td>Executes when no case matches.</td>
</tr>

</table>

<hr>

<h4>What is the Importance of break Statement?</h4>

<p>
The <strong>break</strong> statement is used to stop the execution of the switch block after a matching case is executed.
</p>

<p>
Without break, the program continues executing the next cases even if they do not match.
This behavior is called <strong>fall-through</strong>.
</p>

<h4>Example Without break</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int num = 1;

    switch(num)
    {
        case 1:
            printf("One\\n");

        case 2:
            printf("Two\\n");

        case 3:
            printf("Three\\n");
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
One
Two
Three
</pre>

<p>
Because there is no break statement, all remaining cases execute after the matching case.
</p>

<hr>

<h4>What is Default Case?</h4>

<p>
The <strong>default</strong> case works like the else block of an if-else statement.
It executes when none of the case values match the expression.
</p>

<h4>Example</h4>

<pre>
int choice = 10;

switch(choice)
{
    case 1:
        printf("Option 1");
        break;

    case 2:
        printf("Option 2");
        break;

    default:
        printf("Invalid Option");
}
</pre>

<h4>Output</h4>

<pre>
Invalid Option
</pre>

<hr>

<h4>Real-Life Applications of Switch Statement</h4>

<table class="notes-table">
<tr>
<th>Application</th>
<th>Purpose</th>
</tr>

<tr>
<td>ATM Machine</td>
<td>Select banking operations.</td>
</tr>

<tr>
<td>Calculator</td>
<td>Select arithmetic operations.</td>
</tr>

<tr>
<td>Menu-Driven Programs</td>
<td>Choose different options.</td>
</tr>

<tr>
<td>Game Development</td>
<td>Handle game choices and actions.</td>
</tr>

<tr>
<td>Student Management System</td>
<td>Select various functions from menus.</td>
</tr>

</table>

<hr>

<h4>Advantages of Switch Statement</h4>

<ul>
<li>Easy to read and understand.</li>
<li>Reduces the complexity of multiple if-else statements.</li>
<li>Suitable for menu-driven programs.</li>
<li>Improves program readability.</li>
<li>Makes code cleaner and more organized.</li>
</ul>

<hr>

<h4>Limitations of Switch Statement</h4>

<ul>
<li>Works only with integer, character, and constant expressions.</li>
<li>Cannot directly use floating-point values.</li>
<li>Cannot evaluate complex logical conditions like if-else.</li>
</ul>

<hr>

<h4>Difference Between Else-if Ladder and Switch Statement</h4>

<table class="notes-table">
<tr>
<th>Else-if Ladder</th>
<th>Switch Statement</th>
</tr>

<tr>
<td>Can check multiple conditions.</td>
<td>Checks only one expression value.</td>
</tr>

<tr>
<td>Supports relational and logical operators.</td>
<td>Uses case values only.</td>
</tr>

<tr>
<td>Suitable for complex conditions.</td>
<td>Suitable for menu-driven programs.</td>
</tr>

<tr>
<td>Can be lengthy.</td>
<td>Cleaner and easier to read.</td>
</tr>

</table>

<hr>

<h4>Important Rules of Switch Statement</h4>

<ul>
<li>The expression must return an integer or character value.</li>
<li>Case values must be unique.</li>
<li>Each case should end with a break statement.</li>
<li>The default case is optional.</li>
<li>Only one matching case executes.</li>
</ul>

<hr>

<h4>Summary</h4>

<ul>
<li>The switch statement is used for multi-way decision making.</li>
<li>It selects one block of code from many choices.</li>
<li>Case labels represent different options.</li>
<li>The break statement prevents fall-through.</li>
<li>The default case executes when no match is found.</li>
<li>It is widely used in menu-driven applications.</li>
</ul>

<hr>

<h4>Important Exam Questions</h4>

<ul>
<li>What is a switch case statement in C language?</li>
<li>Write the syntax of a switch statement.</li>
<li>Explain the working of switch case with a suitable example.</li>
<li>What is the purpose of the break statement?</li>
<li>What is the role of the default case?</li>
<li>Differentiate between else-if ladder and switch statement.</li>
<li>What is fall-through in a switch statement?</li>
<li>Write a menu-driven calculator program using switch case.</li>
</ul>

`;

let loopsAndForLoopContent = `

<h3>Loops in C Language</h3>

<p>
A <strong>loop</strong> is a control structure in C language that is used to execute a block of code repeatedly until a specified condition becomes false.
</p>

<p>
In simple words, a loop allows us to perform the same task multiple times without writing the same code again and again.
</p>

<p>
For example, if you want to print numbers from 1 to 100, writing 100 printf() statements would be difficult and time-consuming. Using a loop, we can do the same task with just a few lines of code.
</p>

<hr>

<h4>Why Do We Need Loops?</h4>

<ul>
<li>To reduce repetitive code.</li>
<li>To save programming time.</li>
<li>To make programs shorter and easier to understand.</li>
<li>To perform repetitive tasks automatically.</li>
<li>To improve program efficiency.</li>
</ul>

<hr>

<h4>Real-Life Examples of Loops</h4>

<table class="notes-table">
<tr>
<th>Situation</th>
<th>Loop Activity</th>
</tr>

<tr>
<td>School Attendance</td>
<td>Checking attendance of every student one by one.</td>
</tr>

<tr>
<td>Counting Numbers</td>
<td>Counting from 1 to 100.</td>
</tr>

<tr>
<td>ATM PIN Entry</td>
<td>Allowing multiple attempts until correct PIN is entered.</td>
</tr>

<tr>
<td>Online Quiz</td>
<td>Displaying questions one after another.</td>
</tr>

<tr>
<td>Game</td>
<td>Repeating actions until the game ends.</td>
</tr>

</table>

<hr>

<h3>Types of Loops in C</h3>

<p>
C language provides three types of loops:
</p>

<table class="notes-table">
<tr>
<th>Loop</th>
<th>Description</th>
</tr>

<tr>
<td>for Loop</td>
<td>Used when the number of iterations is known.</td>
</tr>

<tr>
<td>while Loop</td>
<td>Used when the condition is checked before execution.</td>
</tr>

<tr>
<td>do-while Loop</td>
<td>Used when the loop must execute at least once.</td>
</tr>

</table>

<hr>

<h3>For Loop in C Language</h3>

<p>
The <strong>for loop</strong> is the most commonly used loop in C language.
It is used when the number of repetitions (iterations) is known in advance.
</p>

<p>
For example, if you want to print numbers from 1 to 10, the for loop is the best choice because we already know how many times the loop should run.
</p>

<hr>

<h4>Syntax of For Loop</h4>

<pre>
for(initialization; condition; increment/decrement)
{
    // statements
}
</pre>

<hr>

<h4>Structure of For Loop</h4>

<table class="notes-table">
<tr>
<th>Part</th>
<th>Purpose</th>
</tr>

<tr>
<td>Initialization</td>
<td>Executes only once at the beginning.</td>
</tr>

<tr>
<td>Condition</td>
<td>Checks whether the loop should continue.</td>
</tr>

<tr>
<td>Increment/Decrement</td>
<td>Updates the loop variable after each iteration.</td>
</tr>

</table>

<hr>

<h4>Working of For Loop</h4>

<ol>
<li>The initialization statement executes first.</li>
<li>The condition is checked.</li>
<li>If the condition is true, the loop body executes.</li>
<li>The increment/decrement statement executes.</li>
<li>The condition is checked again.</li>
<li>The process continues until the condition becomes false.</li>
</ol>

<hr>

<h4>Flowchart of For Loop</h4>

<pre>
      Initialization
             |
        Condition
             |
        ----------
        |        |
      True     False
        |
    Statements
        |
   Increment/
   Decrement
        |
      Back to
     Condition
</pre>

<hr>

<h4>Example 1: Print Numbers from 1 to 10</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int i;

    for(i = 1; i <= 10; i++)
    {
        printf("%d\\n", i);
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
1
2
3
4
5
6
7
8
9
10
</pre>

<hr>

<h4>Explanation</h4>

<table class="notes-table">
<tr>
<th>Statement</th>
<th>Meaning</th>
</tr>

<tr>
<td>i = 1</td>
<td>Loop starts from 1.</td>
</tr>

<tr>
<td>i <= 10</td>
<td>Loop runs until i becomes 10.</td>
</tr>

<tr>
<td>i++</td>
<td>Increase value of i by 1 after each iteration.</td>
</tr>

</table>

<hr>

<h4>Example 2: Print Even Numbers from 2 to 20</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int i;

    for(i = 2; i <= 20; i = i + 2)
    {
        printf("%d\\n", i);
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
2
4
6
8
10
12
14
16
18
20
</pre>

<hr>

<h4>Example 3: Print Table of 5</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int i;

    for(i = 1; i <= 10; i++)
    {
        printf("5 x %d = %d\\n", i, 5*i);
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
...
5 x 10 = 50
</pre>

<hr>

<h4>Example 4: Print Numbers in Reverse Order</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int i;

    for(i = 10; i >= 1; i--)
    {
        printf("%d\\n", i);
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
10
9
8
7
6
5
4
3
2
1
</pre>

<hr>

<h4>Nested For Loop</h4>

<p>
A for loop inside another for loop is called a nested for loop.
It is commonly used for patterns, tables, and matrix operations.
</p>

<pre>
for(i = 1; i <= 3; i++)
{
    for(j = 1; j <= 3; j++)
    {
        printf("* ");
    }
    printf("\\n");
}
</pre>

<h4>Output</h4>

<pre>
* * *
* * *
* * *
</pre>

<hr>

<h4>Advantages of For Loop</h4>

<ul>
<li>Easy to understand and use.</li>
<li>Reduces code repetition.</li>
<li>Suitable when the number of iterations is known.</li>
<li>Makes programs shorter and cleaner.</li>
<li>Improves program readability.</li>
</ul>

<hr>

<h4>Common Mistakes in For Loop</h4>

<table class="notes-table">
<tr>
<th>Wrong</th>
<th>Correct</th>
</tr>

<tr>
<td>for(i=1 i<=10 i++)</td>
<td>for(i=1; i<=10; i++)</td>
</tr>

<tr>
<td>for(i=1; i<=10;)</td>
<td>for(i=1; i<=10; i++)</td>
</tr>

<tr>
<td>Using comma instead of semicolon</td>
<td>Use semicolon (;) properly.</td>
</tr>

</table>

<hr>

<h4>Difference Between for Loop and while Loop</h4>

<table class="notes-table">
<tr>
<th>For Loop</th>
<th>While Loop</th>
</tr>

<tr>
<td>Used when iterations are known.</td>
<td>Used when iterations are unknown.</td>
</tr>

<tr>
<td>Initialization, condition, and update are written together.</td>
<td>Initialization and update are usually written separately.</td>
</tr>

<tr>
<td>More compact.</td>
<td>More flexible.</td>
</tr>

</table>

<hr>

<h4>Summary</h4>

<ul>
<li>A loop is used to repeat a block of code.</li>
<li>C provides three loops: for, while, and do-while.</li>
<li>The for loop is used when the number of repetitions is known.</li>
<li>It consists of initialization, condition, and increment/decrement.</li>
<li>The loop continues until the condition becomes false.</li>
<li>For loops are widely used in tables, patterns, counting, and calculations.</li>
</ul>

<hr>

<h4>Important Exam Questions</h4>

<ul>
<li>What is a loop in C language?</li>
<li>Why are loops used in programming?</li>
<li>Name the types of loops in C.</li>
<li>What is a for loop?</li>
<li>Write the syntax of a for loop.</li>
<li>Explain the working of a for loop with a suitable example.</li>
<li>Write a C program to print numbers from 1 to 10 using a for loop.</li>
<li>Write a program to display the multiplication table of a number.</li>
<li>What is a nested for loop?</li>
<li>State the advantages of a for loop.</li>
</ul>

`;

let whileLoopContent = `

<h3>While Loop in C Language</h3>

<p>
A <strong>while loop</strong> is a control statement that repeatedly executes a block of code as long as a given condition remains true.
</p>

<p>
In simple words, the while loop keeps running until the specified condition becomes false.
</p>

<p>
The while loop is generally used when the number of iterations is not known in advance.
</p>

<hr>

<h4>Why Do We Need While Loop?</h4>

<ul>
<li>To execute a block of code repeatedly.</li>
<li>To avoid writing the same statements again and again.</li>
<li>When the number of repetitions is unknown.</li>
<li>To make programs shorter and more efficient.</li>
</ul>

<hr>

<h4>Real-Life Examples of While Loop</h4>

<table class="notes-table">
<tr>
<th>Situation</th>
<th>Loop Condition</th>
</tr>

<tr>
<td>ATM PIN Entry</td>
<td>Keep asking until correct PIN is entered.</td>
</tr>

<tr>
<td>Login System</td>
<td>Keep asking until valid username and password are entered.</td>
</tr>

<tr>
<td>Game</td>
<td>Continue until the player quits.</td>
</tr>

<tr>
<td>Downloading File</td>
<td>Continue until download reaches 100%.</td>
</tr>

</table>

<hr>

<h4>Syntax of While Loop</h4>

<pre>
while(condition)
{
    // statements
}
</pre>

<hr>

<h4>Working of While Loop</h4>

<ol>
<li>Condition is checked first.</li>
<li>If the condition is true, the loop body executes.</li>
<li>After execution, the condition is checked again.</li>
<li>The process continues until the condition becomes false.</li>
<li>When the condition becomes false, the loop terminates.</li>
</ol>

<hr>

<h4>Flowchart of While Loop</h4>

<pre>
       Condition
           |
      -----------
      |         |
    True      False
      |
 Statements
      |
      ------
         |
   Back to Condition
</pre>

<hr>

<h4>Example 1: Print Numbers from 1 to 10</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int i = 1;

    while(i <= 10)
    {
        printf("%d\\n", i);
        i++;
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
1
2
3
4
5
6
7
8
9
10
</pre>

<hr>

<h4>Explanation</h4>

<table class="notes-table">
<tr>
<th>Statement</th>
<th>Purpose</th>
</tr>

<tr>
<td>i = 1</td>
<td>Initialization</td>
</tr>

<tr>
<td>i <= 10</td>
<td>Condition</td>
</tr>

<tr>
<td>i++</td>
<td>Increment value of i</td>
</tr>

</table>

<hr>

<h4>Example 2: Print Even Numbers from 2 to 20</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int i = 2;

    while(i <= 20)
    {
        printf("%d\\n", i);
        i = i + 2;
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
2
4
6
8
10
12
14
16
18
20
</pre>

<hr>

<h4>Example 3: Multiplication Table of 5</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int i = 1;

    while(i <= 10)
    {
        printf("5 x %d = %d\\n", i, 5*i);
        i++;
    }

    return 0;
}
</pre>

<hr>

<h4>Example 4: Reverse Counting</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int i = 10;

    while(i >= 1)
    {
        printf("%d\\n", i);
        i--;
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
10
9
8
7
6
5
4
3
2
1
</pre>

<hr>

<h4>Infinite While Loop</h4>

<p>
If the condition never becomes false, the loop runs forever. This is called an <strong>Infinite Loop</strong>.
</p>

<pre>
while(1)
{
    printf("Hello");
}
</pre>

<p>
This loop will continue forever because the condition is always true.
</p>

<hr>

<h4>Advantages of While Loop</h4>

<ul>
<li>Simple and easy to understand.</li>
<li>Useful when the number of iterations is unknown.</li>
<li>Reduces code repetition.</li>
<li>Makes programs more efficient.</li>
<li>Widely used in real-world applications.</li>
</ul>

<hr>

<h4>Difference Between For Loop and While Loop</h4>

<table class="notes-table">
<tr>
<th>For Loop</th>
<th>While Loop</th>
</tr>

<tr>
<td>Used when iterations are known.</td>
<td>Used when iterations are unknown.</td>
</tr>

<tr>
<td>Initialization, condition, and update are together.</td>
<td>Initialization and update are separate.</td>
</tr>

<tr>
<td>More compact.</td>
<td>More flexible.</td>
</tr>

</table>

<hr>

<h4>Common Mistakes</h4>

<table class="notes-table">
<tr>
<th>Mistake</th>
<th>Result</th>
</tr>

<tr>
<td>Forgetting increment/decrement</td>
<td>Infinite loop</td>
</tr>

<tr>
<td>Wrong condition</td>
<td>Incorrect output</td>
</tr>

<tr>
<td>Missing initialization</td>
<td>Unexpected results</td>
</tr>

</table>

<hr>

<h4>Summary</h4>

<ul>
<li>A while loop repeats a block of code while a condition is true.</li>
<li>The condition is checked before execution.</li>
<li>If the condition is false initially, the loop will not execute even once.</li>
<li>It is useful when the number of iterations is not known.</li>
<li>Care should be taken to update the loop variable to avoid infinite loops.</li>
</ul>

<hr>

<h4>Important Exam Questions</h4>

<ul>
<li>What is a while loop in C language?</li>
<li>Write the syntax of a while loop.</li>
<li>Explain the working of a while loop with an example.</li>
<li>Differentiate between for loop and while loop.</li>
<li>What is an infinite loop?</li>
<li>Write a program to print numbers from 1 to 10 using while loop.</li>
<li>Write a program to display the multiplication table of 5 using while loop.</li>
</ul>

`;

let doWhileLoopContent = `

<h3>Do-While Loop in C Language</h3>

<p>
The <strong>do-while loop</strong> is a looping statement in C language that executes a block of code repeatedly as long as a specified condition remains true.
</p>

<p>
The main feature of the do-while loop is that the loop body executes <strong>at least one time</strong>, even if the condition is false.
</p>

<p>
In simple words, the do-while loop first performs the task and then checks the condition.
</p>

<hr>

<h4>Why Do We Need Do-While Loop?</h4>

<p>
Sometimes we want a block of code to execute at least once before checking any condition. In such situations, the do-while loop is used.
</p>

<p>
For example:
</p>

<ul>
<li>ATM menu should appear at least once.</li>
<li>A game menu should be displayed at least once.</li>
<li>A user should be asked for input at least once.</li>
<li>Password verification should happen after first input.</li>
</ul>

<hr>

<h4>Syntax of Do-While Loop</h4>

<pre>
do
{
    // statements
}
while(condition);
</pre>

<hr>

<h4>Working of Do-While Loop</h4>

<ol>
<li>The statements inside the do block execute first.</li>
<li>After execution, the condition is checked.</li>
<li>If the condition is true, the loop executes again.</li>
<li>If the condition is false, the loop stops.</li>
</ol>

<hr>

<h4>Flowchart of Do-While Loop</h4>

<pre>
     Statements
          |
          V
      Condition
      /       \\
   True      False
     |          |
     --------> End
        |
     Repeat
</pre>

<hr>

<h4>Example 1: Print Numbers from 1 to 10</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int i = 1;

    do
    {
        printf("%d\\n", i);
        i++;
    }
    while(i <= 10);

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
1
2
3
4
5
6
7
8
9
10
</pre>

<hr>

<h4>Example 2: Multiplication Table of 5</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int i = 1;

    do
    {
        printf("5 x %d = %d\\n", i, 5*i);
        i++;
    }
    while(i <= 10);

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
...
5 x 10 = 50
</pre>

<hr>

<h4>Example 3: Loop Executes At Least Once</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int i = 20;

    do
    {
        printf("Hello Students");
    }
    while(i <= 10);

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Hello Students
</pre>

<p>
Although the condition is false, the message is printed once because the condition is checked after execution.
</p>

<hr>

<h4>Difference Between While Loop and Do-While Loop</h4>

<table class="notes-table">
<tr>
<th>While Loop</th>
<th>Do-While Loop</th>
</tr>

<tr>
<td>Condition is checked first.</td>
<td>Condition is checked after execution.</td>
</tr>

<tr>
<td>May execute zero times.</td>
<td>Executes at least one time.</td>
</tr>

<tr>
<td>Entry-Controlled Loop.</td>
<td>Exit-Controlled Loop.</td>
</tr>

<tr>
<td>Syntax is simpler.</td>
<td>Ends with a semicolon after while(condition).</td>
</tr>

</table>

<hr>

<h4>Entry Controlled and Exit Controlled Loops</h4>

<table class="notes-table">
<tr>
<th>Loop Type</th>
<th>Examples</th>
<th>Condition Check</th>
</tr>

<tr>
<td>Entry Controlled Loop</td>
<td>for, while</td>
<td>Before execution</td>
</tr>

<tr>
<td>Exit Controlled Loop</td>
<td>do-while</td>
<td>After execution</td>
</tr>

</table>

<hr>

<h4>Real-Life Examples of Do-While Loop</h4>

<table class="notes-table">
<tr>
<th>Application</th>
<th>Purpose</th>
</tr>

<tr>
<td>ATM Machine</td>
<td>Display menu at least once.</td>
</tr>

<tr>
<td>Online Quiz</td>
<td>Show first question before checking next condition.</td>
</tr>

<tr>
<td>Game Menu</td>
<td>Display options repeatedly until user exits.</td>
</tr>

<tr>
<td>Password Verification</td>
<td>Ask for password at least once.</td>
</tr>

</table>

<hr>

<h4>Advantages of Do-While Loop</h4>

<ul>
<li>Executes at least one time.</li>
<li>Useful for menu-driven programs.</li>
<li>Easy to implement user input systems.</li>
<li>Suitable when the first execution is mandatory.</li>
<li>Reduces repetitive code.</li>
</ul>

<hr>

<h4>Common Mistakes</h4>

<table class="notes-table">
<tr>
<th>Mistake</th>
<th>Correction</th>
</tr>

<tr>
<td>Missing semicolon after while(condition)</td>
<td>Add semicolon (;)</td>
</tr>

<tr>
<td>Forgetting increment/decrement</td>
<td>Update loop variable properly.</td>
</tr>

<tr>
<td>Wrong condition</td>
<td>Check condition carefully.</td>
</tr>

</table>

<hr>

<h4>Summary</h4>

<ul>
<li>The do-while loop executes the statements first and checks the condition later.</li>
<li>It always executes at least one time.</li>
<li>It is called an Exit-Controlled Loop.</li>
<li>It is useful for menus, games, and user input programs.</li>
<li>The loop continues until the condition becomes false.</li>
</ul>

<hr>

<h4>Important Exam Questions</h4>

<ul>
<li>What is a do-while loop in C language?</li>
<li>Write the syntax of a do-while loop.</li>
<li>Explain the working of a do-while loop with a suitable example.</li>
<li>Differentiate between while loop and do-while loop.</li>
<li>Why is do-while called an Exit-Controlled Loop?</li>
<li>Write a program to print numbers from 1 to 10 using do-while loop.</li>
<li>State the advantages of do-while loop.</li>
</ul>

`;

let jumpStatementsIntro = `

<h3>Jump Statements in C Language</h3>

<p>
<strong>Jump Statements</strong> are special statements in C language that are used to transfer the control of a program from one part to another.
</p>

<p>
In simple words, jump statements allow the program to skip some instructions, exit from a loop, continue with the next iteration, or move directly to another part of the program.
</p>

<p>
Normally, a program executes statements one after another in sequence. However, in some situations we need to change the normal flow of execution. For this purpose, C provides Jump Statements.
</p>

<hr>

<h4>Why Do We Need Jump Statements?</h4>

<ul>
<li>To terminate a loop immediately.</li>
<li>To skip specific iterations of a loop.</li>
<li>To transfer control to another part of the program.</li>
<li>To improve program efficiency.</li>
<li>To handle special situations in loops and decision-making.</li>
</ul>

<hr>

<h4>Types of Jump Statements in C</h4>

<table class="notes-table">
<tr>
<th>Jump Statement</th>
<th>Purpose</th>
</tr>

<tr>
<td><strong>break</strong></td>
<td>Terminates a loop or switch statement immediately.</td>
</tr>

<tr>
<td><strong>continue</strong></td>
<td>Skips the current iteration and moves to the next iteration of the loop.</td>
</tr>

<tr>
<td><strong>goto</strong></td>
<td>Transfers control directly to a labeled statement in the program.</td>
</tr>

<tr>
<td><strong>return</strong></td>
<td>Terminates a function and returns control to the calling function.</td>
</tr>

</table>

<hr>

<h4>Real-Life Examples of Jump Statements</h4>

<table class="notes-table">
<tr>
<th>Situation</th>
<th>Jump Statement Used</th>
</tr>

<tr>
<td>Stop searching after finding a record.</td>
<td>break</td>
</tr>

<tr>
<td>Skip absent students while processing attendance.</td>
<td>continue</td>
</tr>

<tr>
<td>Move directly to an error-handling section.</td>
<td>goto</td>
</tr>

<tr>
<td>Return result from a function.</td>
<td>return</td>
</tr>

</table>

<hr>

<h4>Advantages of Jump Statements</h4>

<ul>
<li>Improve program efficiency.</li>
<li>Reduce unnecessary execution of statements.</li>
<li>Provide better control over loops.</li>
<li>Help in handling special conditions.</li>
<li>Useful in menu-driven and large programs.</li>
</ul>

<hr>

<h4>Important Points</h4>

<ul>
<li>Jump statements change the normal flow of program execution.</li>
<li>They are commonly used with loops and functions.</li>
<li>Overuse of jump statements can make programs difficult to understand.</li>
<li>break and continue are mainly used inside loops.</li>
<li>goto should be used carefully because it may reduce readability.</li>
<li>return is used inside functions.</li>
</ul>

<hr>

<h4>Summary</h4>

<ul>
<li>Jump statements transfer program control from one location to another.</li>
<li>C language provides break, continue, goto, and return statements.</li>
<li>They are used to control loops, functions, and program execution flow.</li>
<li>Jump statements help make programs more efficient and flexible.</li>
</ul>

<hr>

<h4>Important Exam Questions</h4>

<ul>
<li>What are Jump Statements in C language?</li>
<li>Why are Jump Statements used?</li>
<li>Name the types of Jump Statements in C.</li>
<li>Differentiate between break and continue statements.</li>
<li>What is the purpose of goto statement?</li>
<li>What is the use of return statement?</li>
</ul>

`;

let breakAndContinueContent = `

<h3>Break Statement in C Language</h3>

<p>
The <strong>break statement</strong> is a jump statement used to immediately terminate a loop or switch statement.
</p>

<p>
In simple words, when the break statement is encountered, the program stops the current loop and transfers control to the statement immediately after the loop.
</p>

<hr>

<h4>Why Do We Use Break Statement?</h4>

<ul>
<li>To stop a loop before its normal completion.</li>
<li>To avoid unnecessary iterations.</li>
<li>To improve program efficiency.</li>
<li>To exit from switch statements.</li>
</ul>

<hr>

<h4>Syntax of Break Statement</h4>

<pre>
break;
</pre>

<hr>

<h4>Flow of Break Statement</h4>

<pre>
Loop Starts
     |
Condition
     |
Statements
     |
Break ?
 /      \\
Yes      No
 |         |
Exit     Continue
Loop      Loop
</pre>

<hr>

<h4>Example 1: Break in For Loop</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int i;

    for(i=1; i<=10; i++)
    {
        if(i==5)
        {
            break;
        }

        printf("%d\\n", i);
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
1
2
3
4
</pre>

<p>
When the value of i becomes 5, the break statement executes and the loop terminates immediately.
</p>

<hr>

<h4>Example 2: Break in While Loop</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int i=1;

    while(i<=10)
    {
        if(i==7)
        {
            break;
        }

        printf("%d\\n", i);
        i++;
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
1
2
3
4
5
6
</pre>

<hr>

<h4>Break Statement in Switch Case</h4>

<pre>
switch(choice)
{
    case 1:
        printf("One");
        break;

    case 2:
        printf("Two");
        break;

    default:
        printf("Invalid Choice");
}
</pre>

<p>
In switch statements, break prevents the execution of other cases.
</p>

<hr>

<h4>Advantages of Break Statement</h4>

<ul>
<li>Terminates loop immediately.</li>
<li>Reduces unnecessary processing.</li>
<li>Makes searching operations faster.</li>
<li>Useful in loops and switch statements.</li>
</ul>

<hr>

<h4>Important Exam Questions</h4>

<ul>
<li>What is a break statement?</li>
<li>Write the syntax of break statement.</li>
<li>Explain break statement with an example.</li>
<li>What is the use of break in switch statement?</li>
</ul>

<hr>
<hr>

<h3>Continue Statement in C Language</h3>

<p>
The <strong>continue statement</strong> is a jump statement used to skip the current iteration of a loop and move directly to the next iteration.
</p>

<p>
In simple words, continue does not terminate the loop. It only skips the current iteration and continues with the remaining iterations.
</p>

<hr>

<h4>Why Do We Use Continue Statement?</h4>

<ul>
<li>To skip unwanted iterations.</li>
<li>To avoid executing specific statements for certain conditions.</li>
<li>To make programs more efficient.</li>
<li>To continue loop execution without stopping it.</li>
</ul>

<hr>

<h4>Syntax of Continue Statement</h4>

<pre>
continue;
</pre>

<hr>

<h4>Flow of Continue Statement</h4>

<pre>
Loop Starts
     |
Condition
     |
Statements
     |
Continue ?
 /         \\
Yes         No
 |            |
Skip      Execute
Current   Remaining
Iteration Statements
 |
Next Iteration
</pre>

<hr>

<h4>Example 1: Skip Number 5</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int i;

    for(i=1; i<=10; i++)
    {
        if(i==5)
        {
            continue;
        }

        printf("%d\\n", i);
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
1
2
3
4
6
7
8
9
10
</pre>

<p>
When i becomes 5, the continue statement skips that iteration and moves to the next iteration.
</p>

<hr>

<h4>Example 2: Print Odd Numbers Only</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int i;

    for(i=1; i<=10; i++)
    {
        if(i%2==0)
        {
            continue;
        }

        printf("%d\\n", i);
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
1
3
5
7
9
</pre>

<p>
All even numbers are skipped and only odd numbers are displayed.
</p>

<hr>

<h4>Advantages of Continue Statement</h4>

<ul>
<li>Skips unnecessary iterations.</li>
<li>Improves program readability.</li>
<li>Useful when some conditions need to be ignored.</li>
<li>Keeps the loop running.</li>
</ul>

<hr>

<h4>Difference Between Break and Continue</h4>

<table class="notes-table">
<tr>
<th>Break Statement</th>
<th>Continue Statement</th>
</tr>

<tr>
<td>Terminates the loop completely.</td>
<td>Skips only the current iteration.</td>
</tr>

<tr>
<td>Control exits the loop.</td>
<td>Control returns to the next iteration.</td>
</tr>

<tr>
<td>Used to stop loop execution.</td>
<td>Used to skip specific iterations.</td>
</tr>

<tr>
<td>Can be used in loops and switch.</td>
<td>Used only in loops.</td>
</tr>

</table>

<hr>

<h4>Summary</h4>

<ul>
<li>break terminates a loop or switch statement.</li>
<li>continue skips the current iteration and moves to the next iteration.</li>
<li>break exits the loop completely.</li>
<li>continue keeps the loop running.</li>
<li>Both are jump statements used to control loop execution.</li>
</ul>

<hr>

<h4>Important Exam Questions</h4>

<ul>
<li>What is a continue statement?</li>
<li>Write the syntax of continue statement.</li>
<li>Explain continue statement with an example.</li>
<li>Differentiate between break and continue statement.</li>
<li>Write a program to print odd numbers using continue statement.</li>
</ul>

`;


let gotoStatementContent = `

<h3>Goto Statement in C Language</h3>

<p>
The <strong>goto statement</strong> is a jump statement that transfers program control directly to another part of the program marked by a label.
</p>

<p>
In simple words, goto allows the program to jump from one location to another without following the normal sequence of execution.
</p>

<p>
Although goto is available in C language, programmers generally avoid using it because excessive use can make programs difficult to understand and maintain.
</p>

<hr>

<h4>Why Do We Use Goto Statement?</h4>

<ul>
<li>To transfer control directly to another part of a program.</li>
<li>To exit from deeply nested loops.</li>
<li>To simplify error handling in some situations.</li>
<li>To jump to a specific labeled statement.</li>
</ul>

<hr>

<h4>Syntax of Goto Statement</h4>

<pre>
goto label;

/* statements */

label:
    statement;
</pre>

<hr>

<h4>Components of Goto Statement</h4>

<table class="notes-table">
<tr>
<th>Component</th>
<th>Description</th>
</tr>

<tr>
<td>goto</td>
<td>Keyword used to transfer control.</td>
</tr>

<tr>
<td>Label</td>
<td>A user-defined identifier followed by a colon (:).</td>
</tr>

<tr>
<td>Statement</td>
<td>The code that executes after jumping to the label.</td>
</tr>

</table>

<hr>

<h4>Example 1: Simple Goto Program</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    printf("Welcome\\n");

    goto end;

    printf("This line will not execute\\n");

end:
    printf("Program Finished");

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Welcome
Program Finished
</pre>

<p>
The goto statement skips the middle printf() statement and directly jumps to the label named <strong>end</strong>.
</p>

<hr>

<h4>Example 2: Print Numbers Using Goto</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int i = 1;

start:

    printf("%d\\n", i);
    i++;

    if(i <= 5)
    {
        goto start;
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
1
2
3
4
5
</pre>

<hr>

<h4>Working of Goto Statement</h4>

<ol>
<li>Program execution starts normally.</li>
<li>When goto is encountered, control jumps to the specified label.</li>
<li>Statements between goto and label are skipped.</li>
<li>Execution continues from the labeled statement.</li>
</ol>

<hr>

<h4>Flowchart of Goto Statement</h4>

<pre>
 Statement
     |
   goto
     |
     V
  Label
     |
 Remaining
 Statements
</pre>

<hr>

<h4>Advantages of Goto Statement</h4>

<ul>
<li>Provides direct control transfer.</li>
<li>Useful for exiting nested loops.</li>
<li>Can simplify some error-handling code.</li>
<li>Easy to understand in small programs.</li>
</ul>

<hr>

<h4>Disadvantages of Goto Statement</h4>

<ul>
<li>Makes programs difficult to read.</li>
<li>Creates confusing program flow.</li>
<li>Difficult to debug large programs.</li>
<li>Not recommended in modern programming practices.</li>
</ul>

<hr>

<h4>Important Rules</h4>

<ul>
<li>A label must be followed by a colon (:).</li>
<li>The label and goto statement must be inside the same function.</li>
<li>Labels can have any valid identifier name.</li>
<li>Avoid excessive use of goto.</li>
</ul>

<hr>

<h4>Difference Between Break, Continue and Goto</h4>

<table class="notes-table">
<tr>
<th>Break</th>
<th>Continue</th>
<th>Goto</th>
</tr>

<tr>
<td>Terminates loop.</td>
<td>Skips current iteration.</td>
<td>Jumps to a label.</td>
</tr>

<tr>
<td>Used in loops and switch.</td>
<td>Used in loops only.</td>
<td>Can jump anywhere inside the same function.</td>
</tr>

<tr>
<td>Structured control.</td>
<td>Structured control.</td>
<td>Unstructured control.</td>
</tr>

</table>

<hr>

<h4>Summary</h4>

<ul>
<li>goto is a jump statement.</li>
<li>It transfers control directly to a labeled statement.</li>
<li>It can skip multiple statements.</li>
<li>Labels must end with a colon (:).</li>
<li>Use goto carefully because it can reduce program readability.</li>
</ul>

<hr>

<h4>Important Exam Questions</h4>

<ul>
<li>What is a goto statement in C language?</li>
<li>Write the syntax of goto statement.</li>
<li>Explain goto statement with a suitable example.</li>
<li>What are the advantages and disadvantages of goto statement?</li>
<li>Differentiate between break, continue, and goto.</li>
<li>Why is goto generally avoided in programming?</li>
</ul>

`;

let functionIntroduction = `

<h3>Functions in C Language</h3>

<p>
A <strong>function</strong> is a block of code that performs a specific task. Functions help us divide a large program into smaller and manageable parts.
</p>

<p>
In simple words, a function is a reusable piece of code that performs a particular job whenever it is called.
</p>

<p>
Instead of writing the same code again and again, we can place it inside a function and use it whenever needed. This makes programs shorter, easier to understand, and easier to maintain.
</p>

<hr>

<h4>Real-Life Example of Function</h4>

<p>
Think of a calculator. When you press the addition button, the calculator performs only the addition task. Similarly, each function in a program performs a specific task.
</p>

<table class="notes-table">
<tr>
<th>Real-Life Task</th>
<th>Function</th>
</tr>

<tr>
<td>Making Tea</td>
<td>Tea Function</td>
</tr>

<tr>
<td>Sending Message</td>
<td>SendMessage() Function</td>
</tr>

<tr>
<td>Calculating Sum</td>
<td>sum() Function</td>
</tr>

<tr>
<td>Displaying Output</td>
<td>printf() Function</td>
</tr>

</table>

<hr>

<h4>Why Do We Need Functions?</h4>

<ul>
<li>To reduce code repetition.</li>
<li>To make programs easier to read.</li>
<li>To simplify debugging.</li>
<li>To improve program organization.</li>
<li>To make code reusable.</li>
</ul>

<hr>

<h4>Advantages of Functions</h4>

<ul>
<li>Code Reusability.</li>
<li>Easy Maintenance.</li>
<li>Better Program Structure.</li>
<li>Faster Development.</li>
<li>Easy Testing and Debugging.</li>
</ul>

<hr>

<h4>Example Without Function</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    printf("Welcome Students\\n");
    printf("Welcome Students\\n");
    printf("Welcome Students\\n");

    return 0;
}
</pre>

<p>
Here the same statement is written multiple times.
</p>

<hr>

<h4>Example Using Function</h4>

<pre>
#include &lt;stdio.h&gt;

void welcome()
{
    printf("Welcome Students\\n");
}

int main()
{
    welcome();
    welcome();
    welcome();

    return 0;
}
</pre>

<p>
Here the code is written once and reused multiple times.
</p>

<hr>

<h4>Parts of a Function</h4>

<table class="notes-table">
<tr>
<th>Part</th>
<th>Description</th>
</tr>

<tr>
<td>Function Declaration</td>
<td>Tells the compiler about the function.</td>
</tr>

<tr>
<td>Function Definition</td>
<td>Contains the actual code of the function.</td>
</tr>

<tr>
<td>Function Call</td>
<td>Executes the function.</td>
</tr>

</table>



<h4>1. Function Declaration</h4>

<p>
Function declaration means informing the compiler about a function before its actual use.
It tells the compiler the function name, return type, and parameters.
</p>

<h4>Example:</h4>
<pre>
int add(int, int);
</pre>

<h4>Explanation:</h4>
<ul>
  <li>It is also called function prototype</li>
  <li>No function body here</li>
  <li>Used before main() function</li>
</ul>

<hr>

<h4>2. Function Definition</h4>

<p>
Function definition means writing the actual logic of the function.
It defines what the function will do.
</p>

<h4>Example:</h4>
<pre>
int add(int a, int b) {
    int sum = a + b;
    return sum;
}
</pre>

<h4>Explanation:</h4>
<ul>
  <li>Contains function body</li>
  <li>Performs actual task</li>
  <li>Returns result (if needed)</li>
</ul>

<hr>

<h4>3. Function Call</h4>

<p>
Function call means using the function in the program to execute its code.
</p>

<h4>Example:</h4>
<pre>
int result = add(5, 10);
</pre>

<h4>Explanation:</h4>
<ul>
  <li>Passes values to function</li>
  <li>Executes function logic</li>
  <li>Returns output</li>
</ul>

<hr>

<h4>Complete Example</h4>

<pre>
#include &lt;stdio.h&gt;

// Function Declaration
int add(int, int);

int main() {

    int result;

    // Function Call
    result = add(5, 10);

    printf("Sum = %d", result);

    return 0;
}

// Function Definition
int add(int a, int b) {
    return a + b;
}
</pre>

<hr>

<h4>Exam Points</h4>
<ul>
  <li>Declaration → tells compiler about function</li>
  <li>Definition → actual logic of function</li>
  <li>Call → execution of function</li>
</ul>

<hr>

<h4>General Syntax of Function</h4>

<pre>
return_type function_name()
{
    // statements
}
</pre>

<hr>

<h4>Example of Simple Function</h4>

<pre>
#include &lt;stdio.h&gt;

void greet()
{
    printf("Hello Students");
}

int main()
{
    greet();

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Hello Students
</pre>

<hr>

<h4>Built-in Functions in C</h4>

<table class="notes-table">
<tr>
<th>Function</th>
<th>Purpose</th>
</tr>

<tr>
<td>printf()</td>
<td>Display output.</td>
</tr>

<tr>
<td>scanf()</td>
<td>Take input.</td>
</tr>

<tr>
<td>strlen()</td>
<td>Find string length.</td>
</tr>

<tr>
<td>sqrt()</td>
<td>Find square root.</td>
</tr>

</table>

<hr>

<h4>User-Defined Functions</h4>

<p>
Functions created by programmers according to their requirements are called <strong>User-Defined Functions</strong>.
</p>

<pre>
void display()
{
    printf("Learning C Language");
}
</pre>

<hr>

<h4>Important Points</h4>

<ul>
<li>A function performs a specific task.</li>
<li>Functions help avoid code duplication.</li>
<li>Functions improve readability and maintainability.</li>
<li>main() is also a function.</li>
<li>A function can be called multiple times.</li>
</ul>

<hr>

<h4>Summary</h4>

<ul>
<li>A function is a reusable block of code.</li>
<li>Functions divide a program into smaller parts.</li>
<li>They reduce code repetition.</li>
<li>Functions make programs easier to understand and maintain.</li>
<li>Every C program starts execution from the main() function.</li>
</ul>

<hr>

<h4>Important Exam Questions</h4>

<ul>
<li>What is a function in C language?</li>
<li>Why are functions used?</li>
<li>What are the advantages of functions?</li>
<li>What are the parts of a function?</li>
<li>Differentiate between built-in and user-defined functions.</li>
<li>Write a program using a simple function.</li>
</ul>

`;

let functionDeclarationContent = `

<h3>Function Declaration (Function Prototype) in C Language</h3>

<p>
A <strong>Function Declaration</strong> tells the compiler about the name, return type, and parameters of a function before it is used in the program.
</p>

<p>
It is also called a <strong>Function Prototype</strong>.
</p>

<p>
In simple words, a function declaration acts like an announcement that informs the compiler that a function exists and will be defined later in the program.
</p>

<hr>

<h4>Why Do We Need Function Declaration?</h4>

<p>
Before calling a function, the compiler should know:
</p>

<ul>
<li>The name of the function.</li>
<li>The return type of the function.</li>
<li>The number of parameters.</li>
<li>The type of parameters.</li>
</ul>

<p>
This information is provided through the function declaration.
</p>

<hr>

<h4>Real-Life Example</h4>

<p>
Imagine your teacher announces:
</p>

<p>
<strong>"Tomorrow there will be a Mathematics class."</strong>
</p>

<p>
This announcement is similar to a function declaration. It informs students about the class before the actual class takes place.
</p>

<p>
Similarly, a function declaration informs the compiler about a function before its actual definition.
</p>

<hr>

<h4>Syntax of Function Declaration</h4>

<pre>
return_type function_name(parameter_list);
</pre>

<hr>

<h4>Example of Function Declaration</h4>

<pre>
void display();
</pre>

<p>
Here:
</p>

<table class="notes-table">
<tr>
<th>Part</th>
<th>Meaning</th>
</tr>

<tr>
<td>void</td>
<td>Function returns nothing.</td>
</tr>

<tr>
<td>display</td>
<td>Name of the function.</td>
</tr>

<tr>
<td>()</td>
<td>No parameters.</td>
</tr>

<tr>
<td>;</td>
<td>Ends the declaration.</td>
</tr>

</table>

<hr>

<h4>Program Using Function Declaration</h4>

<pre>
#include &lt;stdio.h&gt;

void display();

int main()
{
    display();

    return 0;
}

void display()
{
    printf("Welcome Students");
}
</pre>

<h4>Output</h4>

<pre>
Welcome Students
</pre>

<hr>

<h4>How This Program Works?</h4>

<table class="notes-table">
<tr>
<th>Step</th>
<th>Explanation</th>
</tr>

<tr>
<td>1</td>
<td>Compiler reads function declaration.</td>
</tr>

<tr>
<td>2</td>
<td>Compiler understands that display() exists.</td>
</tr>

<tr>
<td>3</td>
<td>main() calls display().</td>
</tr>

<tr>
<td>4</td>
<td>Control goes to function definition.</td>
</tr>

<tr>
<td>5</td>
<td>Function executes and prints output.</td>
</tr>

</table>

<hr>

<h4>Function Declaration with Parameters</h4>

<pre>
int sum(int, int);
</pre>

<p>
This declaration tells the compiler:
</p>

<ul>
<li>The function name is <strong>sum</strong>.</li>
<li>It accepts two integer values.</li>
<li>It returns an integer value.</li>
</ul>

<hr>

<h4>Example with Parameters</h4>

<pre>
#include &lt;stdio.h&gt;

int sum(int, int);

int main()
{
    int result;

    result = sum(10, 20);

    printf("Sum = %d", result);

    return 0;
}

int sum(int a, int b)
{
    return a + b;
}
</pre>

<h4>Output</h4>

<pre>
Sum = 30
</pre>

<hr>

<h4>Advantages of Function Declaration</h4>

<ul>
<li>Helps the compiler identify functions.</li>
<li>Allows functions to be defined later.</li>
<li>Improves program organization.</li>
<li>Reduces compilation errors.</li>
<li>Makes programs easier to understand.</li>
</ul>

<hr>

<h4>Important Rules</h4>

<ul>
<li>Function declaration ends with a semicolon (;).</li>
<li>It contains the function name, return type, and parameters.</li>
<li>Parameter names are optional in declarations.</li>
<li>A declaration does not contain the function body.</li>
<li>One function can have only one valid prototype.</li>
</ul>

<hr>

<h4>Declaration vs Definition</h4>

<table class="notes-table">
<tr>
<th>Function Declaration</th>
<th>Function Definition</th>
</tr>

<tr>
<td>Tells the compiler about the function.</td>
<td>Contains the actual code.</td>
</tr>

<tr>
<td>No function body.</td>
<td>Contains function body.</td>
</tr>

<tr>
<td>Ends with semicolon (;).</td>
<td>No semicolon after function block.</td>
</tr>

<tr>
<td>Called Function Prototype.</td>
<td>Actual implementation.</td>
</tr>

</table>

<hr>

<h4>Common Mistakes</h4>

<table class="notes-table">
<tr>
<th>Mistake</th>
<th>Correction</th>
</tr>

<tr>
<td>void display()</td>
<td>void display();</td>
</tr>

<tr>
<td>Missing semicolon</td>
<td>Add semicolon after declaration.</td>
</tr>

<tr>
<td>Wrong parameter types</td>
<td>Match declaration and definition.</td>
</tr>

</table>

<hr>

<h4>Summary</h4>

<ul>
<li>Function Declaration is also called Function Prototype.</li>
<li>It informs the compiler about a function before its use.</li>
<li>It contains function name, return type, and parameters.</li>
<li>It does not contain function body.</li>
<li>It helps in error checking and program organization.</li>
</ul>

<hr>

<h4>Important Exam Questions</h4>

<ul>
<li>What is a Function Declaration?</li>
<li>What is a Function Prototype?</li>
<li>Why is Function Declaration required?</li>
<li>Write the syntax of Function Declaration.</li>
<li>Differentiate between Function Declaration and Function Definition.</li>
<li>Write a program using Function Declaration.</li>
</ul>

`;

let functionDefinitionContent = `

<h3>Function Definition in C Language</h3>

<p>
A <strong>Function Definition</strong> contains the actual code that performs a specific task.
</p>

<p>
In simple words, function definition is the part where we write the statements that tell the function what work it has to do.
</p>

<p>
While a function declaration only informs the compiler about the function, the function definition contains the complete implementation of that function.
</p>

<hr>

<h4>Why Do We Need Function Definition?</h4>

<ul>
<li>To define the actual work performed by a function.</li>
<li>To execute specific tasks whenever the function is called.</li>
<li>To organize programs into smaller modules.</li>
<li>To make programs easier to maintain and understand.</li>
</ul>

<hr>

<h4>Real-Life Example</h4>

<p>
Suppose a teacher announces:
</p>

<p>
<strong>"Tomorrow there will be a Mathematics class."</strong>
</p>

<p>
This announcement is similar to a <strong>Function Declaration</strong>.
</p>

<p>
The actual teaching that happens in the classroom is similar to a <strong>Function Definition</strong>.
</p>

<p>
In other words, declaration tells about the function, while definition performs the actual work.
</p>

<hr>

<h4>Syntax of Function Definition</h4>

<pre>
return_type function_name(parameters)
{
    // statements
}
</pre>

<hr>

<h4>Example of Function Definition</h4>

<pre>
void display()
{
    printf("Welcome Students");
}
</pre>

<table class="notes-table">
<tr>
<th>Part</th>
<th>Description</th>
</tr>

<tr>
<td>void</td>
<td>Return type</td>
</tr>

<tr>
<td>display()</td>
<td>Function name</td>
</tr>

<tr>
<td>{ }</td>
<td>Function body</td>
</tr>

<tr>
<td>printf()</td>
<td>Statement executed by function</td>
</tr>

</table>

<hr>

<h4>Program Using Function Definition</h4>

<pre>
#include &lt;stdio.h&gt;

void display();

int main()
{
    display();

    return 0;
}

void display()
{
    printf("Welcome Students");
}
</pre>

<h4>Output</h4>

<pre>
Welcome Students
</pre>

<hr>

<h4>How This Program Works?</h4>

<table class="notes-table">
<tr>
<th>Step</th>
<th>Explanation</th>
</tr>

<tr>
<td>1</td>
<td>Compiler reads function declaration.</td>
</tr>

<tr>
<td>2</td>
<td>main() function starts execution.</td>
</tr>

<tr>
<td>3</td>
<td>display() function is called.</td>
</tr>

<tr>
<td>4</td>
<td>Control moves to function definition.</td>
</tr>

<tr>
<td>5</td>
<td>printf() executes and displays output.</td>
</tr>

<tr>
<td>6</td>
<td>Control returns to main().</td>
</tr>

</table>

<hr>

<h4>Function Definition with Parameters</h4>

<pre>
int sum(int a, int b)
{
    return a + b;
}
</pre>

<p>
This function accepts two numbers and returns their sum.
</p>

<hr>

<h4>Example Program</h4>

<pre>
#include &lt;stdio.h&gt;

int sum(int, int);

int main()
{
    int result;

    result = sum(10, 20);

    printf("Sum = %d", result);

    return 0;
}

int sum(int a, int b)
{
    return a + b;
}
</pre>

<h4>Output</h4>

<pre>
Sum = 30
</pre>

<hr>

<h4>Main Components of Function Definition</h4>

<table class="notes-table">
<tr>
<th>Component</th>
<th>Purpose</th>
</tr>

<tr>
<td>Return Type</td>
<td>Specifies the value returned by the function.</td>
</tr>

<tr>
<td>Function Name</td>
<td>Identifies the function.</td>
</tr>

<tr>
<td>Parameters</td>
<td>Accept data from the calling function.</td>
</tr>

<tr>
<td>Function Body</td>
<td>Contains executable statements.</td>
</tr>

<tr>
<td>Return Statement</td>
<td>Returns a value to the caller.</td>
</tr>

</table>

<hr>

<h4>Advantages of Function Definition</h4>

<ul>
<li>Reduces code duplication.</li>
<li>Makes programs modular.</li>
<li>Improves readability.</li>
<li>Simplifies debugging.</li>
<li>Promotes code reusability.</li>
</ul>

<hr>

<h4>Important Rules</h4>

<ul>
<li>A function definition contains the actual code.</li>
<li>Function name should match its declaration.</li>
<li>Parameter types should match the declaration.</li>
<li>A function can be called multiple times.</li>
<li>Only one definition of a function is allowed in a program.</li>
</ul>

<hr>

<h4>Difference Between Function Declaration and Function Definition</h4>

<table class="notes-table">
<tr>
<th>Function Declaration</th>
<th>Function Definition</th>
</tr>

<tr>
<td>Tells the compiler about the function.</td>
<td>Contains actual implementation.</td>
</tr>

<tr>
<td>No function body.</td>
<td>Contains function body.</td>
</tr>

<tr>
<td>Ends with semicolon (;).</td>
<td>Does not end with semicolon.</td>
</tr>

<tr>
<td>Also called prototype.</td>
<td>Actual working code.</td>
</tr>

</table>

<hr>

<h4>Common Mistakes</h4>

<table class="notes-table">
<tr>
<th>Mistake</th>
<th>Correction</th>
</tr>

<tr>
<td>Missing braces { }</td>
<td>Add function body braces.</td>
</tr>

<tr>
<td>Different parameter types</td>
<td>Match declaration and definition.</td>
</tr>

<tr>
<td>Wrong return type</td>
<td>Use correct return type.</td>
</tr>

</table>

<hr>

<h4>Summary</h4>

<ul>
<li>Function Definition contains the actual code of a function.</li>
<li>It specifies what task the function performs.</li>
<li>It includes return type, function name, parameters, and function body.</li>
<li>Functions make programs modular and reusable.</li>
<li>A function executes only when it is called.</li>
</ul>

<hr>

<h4>Important Exam Questions</h4>

<ul>
<li>What is Function Definition in C?</li>
<li>Write the syntax of Function Definition.</li>
<li>Explain Function Definition with an example.</li>
<li>Differentiate between Function Declaration and Function Definition.</li>
<li>What are the components of a Function Definition?</li>
<li>Write a program using Function Definition.</li>
</ul>

`;

let functionCallContent = `

<h3>Function Call in C Language</h3>

<p>
A <strong>Function Call</strong> is used to execute a function in a program.
</p>

<p>
In simple words, creating a function is not enough. The function performs its task only when it is called.
</p>

<p>
Whenever a function is called, program control transfers to that function, executes its statements, and then returns back to the calling function.
</p>

<hr>

<h4>What is a Function Call?</h4>

<p>
A function call is a statement that invokes or executes a function.
</p>

<p>
Without a function call, the code inside the function will never run.
</p>

<hr>

<h4>Real-Life Example</h4>

<p>
Imagine you have a mobile phone and your friend saved in contacts.
</p>

<ul>
<li>Saving the contact = Function Definition</li>
<li>Dialing the number = Function Call</li>
<li>Conversation starts = Function Execution</li>
</ul>

<p>
Similarly, a function performs its work only when it is called.
</p>

<hr>

<h4>Syntax of Function Call</h4>

<pre>
function_name();
</pre>

<hr>

<h4>Example of Function Call</h4>

<pre>
#include &lt;stdio.h&gt;

void greet()
{
    printf("Hello Students");
}

int main()
{
    greet();

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Hello Students
</pre>

<hr>

<h4>How Does Function Call Work?</h4>

<table class="notes-table">
<tr>
<th>Step</th>
<th>Explanation</th>
</tr>

<tr>
<td>1</td>
<td>Program execution starts from main().</td>
</tr>

<tr>
<td>2</td>
<td>Function call statement is encountered.</td>
</tr>

<tr>
<td>3</td>
<td>Control transfers to the called function.</td>
</tr>

<tr>
<td>4</td>
<td>Function statements execute.</td>
</tr>

<tr>
<td>5</td>
<td>Control returns to main().</td>
</tr>

</table>

<hr>

<h4>Program Flow</h4>

<pre>
main()
  |
  V
Function Call
  |
  V
Function Executes
  |
  V
Return to main()
</pre>

<hr>

<h4>Example: Calling Function Multiple Times</h4>

<pre>
#include &lt;stdio.h&gt;

void display()
{
    printf("Welcome Students\\n");
}

int main()
{
    display();
    display();
    display();

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Welcome Students
Welcome Students
Welcome Students
</pre>

<p>
A single function can be called many times whenever required.
</p>

<hr>

<h4>Function Call with Arguments</h4>

<pre>
#include &lt;stdio.h&gt;

int sum(int a, int b)
{
    return a + b;
}

int main()
{
    int result;

    result = sum(10, 20);

    printf("Sum = %d", result);

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Sum = 30
</pre>

<p>
Here, 10 and 20 are passed to the function as arguments.
</p>

<hr>

<h4>Actual Arguments and Formal Arguments</h4>

<table class="notes-table">
<tr>
<th>Actual Arguments</th>
<th>Formal Arguments</th>
</tr>

<tr>
<td>Values passed during function call.</td>
<td>Variables that receive those values.</td>
</tr>

<tr>
<td>sum(10,20)</td>
<td>int sum(int a, int b)</td>
</tr>

<tr>
<td>10 and 20</td>
<td>a and b</td>
</tr>

</table>

<hr>

<h4>Types of Function Calls</h4>

<table class="notes-table">
<tr>
<th>Type</th>
<th>Description</th>
</tr>

<tr>
<td>Function Call Without Arguments</td>
<td>No values are passed.</td>
</tr>

<tr>
<td>Function Call With Arguments</td>
<td>Values are passed to the function.</td>
</tr>

</table>

<hr>

<h4>Advantages of Function Call</h4>

<ul>
<li>Executes reusable code.</li>
<li>Reduces code duplication.</li>
<li>Makes programs modular.</li>
<li>Improves readability.</li>
<li>Saves development time.</li>
</ul>

<hr>

<h4>Important Rules</h4>

<ul>
<li>A function must be called to execute.</li>
<li>The function name in the call must match the function definition.</li>
<li>The number of arguments should match the parameters.</li>
<li>Control always returns to the calling function after execution.</li>
<li>A function can be called multiple times.</li>
</ul>

<hr>

<h4>Declaration vs Definition vs Call</h4>

<table class="notes-table">
<tr>
<th>Term</th>
<th>Purpose</th>
</tr>

<tr>
<td>Function Declaration</td>
<td>Informs the compiler about the function.</td>
</tr>

<tr>
<td>Function Definition</td>
<td>Contains the actual code.</td>
</tr>

<tr>
<td>Function Call</td>
<td>Executes the function.</td>
</tr>

</table>

<hr>

<h4>Summary</h4>

<ul>
<li>A Function Call is used to execute a function.</li>
<li>Control transfers from main() to the called function.</li>
<li>After execution, control returns back to main().</li>
<li>A function can be called multiple times.</li>
<li>Arguments can be passed during a function call.</li>
</ul>

<hr>

<h4>Important Exam Questions</h4>

<ul>
<li>What is a Function Call in C language?</li>
<li>Write the syntax of a Function Call.</li>
<li>Explain the working of Function Call with an example.</li>
<li>Differentiate between Function Declaration, Definition, and Call.</li>
<li>What are Actual Arguments and Formal Arguments?</li>
<li>Write a program demonstrating a Function Call.</li>
</ul>

`;

let typesOfFunctionsContent = `

<h3>Types of Functions in C Language</h3>

<p>
Functions are classified based on whether they accept arguments and whether they return a value.
</p>

<p>
Understanding the types of functions is very important because it helps programmers choose the appropriate function according to the requirement of the program.
</p>

<hr>

<h4>Classification of Functions</h4>

<table class="notes-table">
<tr>
<th>Type</th>
<th>Arguments</th>
<th>Return Value</th>
</tr>

<tr>
<td>1. No Arguments, No Return Value</td>
<td>No</td>
<td>No</td>
</tr>

<tr>
<td>2. Arguments, No Return Value</td>
<td>Yes</td>
<td>No</td>
</tr>

<tr>
<td>3. No Arguments, Return Value</td>
<td>No</td>
<td>Yes</td>
</tr>

<tr>
<td>4. Arguments, Return Value</td>
<td>Yes</td>
<td>Yes</td>
</tr>

</table>

<hr>

<h3>1. Function with No Arguments and No Return Value</h3>

<p>
In this type of function:
</p>

<ul>
<li>No values are passed to the function.</li>
<li>The function does not return any value.</li>
<li>The entire task is performed inside the function.</li>
</ul>

<h4>Syntax</h4>

<pre>
void display()
{
    // statements
}
</pre>

<h4>Example</h4>

<pre>
#include &lt;stdio.h&gt;

void display()
{
    printf("Welcome Students");
}

int main()
{
    display();

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Welcome Students
</pre>

<h4>Advantages</h4>

<ul>
<li>Easy to understand.</li>
<li>Suitable for simple tasks.</li>
<li>Useful for displaying messages.</li>
</ul>

<hr>

<h3>2. Function with Arguments and No Return Value</h3>

<p>
In this type:
</p>

<ul>
<li>Values are passed to the function.</li>
<li>The function performs the task.</li>
<li>No value is returned.</li>
</ul>

<h4>Syntax</h4>

<pre>
void function_name(parameters)
{
    // statements
}
</pre>

<h4>Example</h4>

<pre>
#include &lt;stdio.h&gt;

void sum(int a, int b)
{
    printf("Sum = %d", a+b);
}

int main()
{
    sum(10,20);

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Sum = 30
</pre>

<h4>Explanation</h4>

<p>
The values 10 and 20 are passed to the function. The function calculates the sum and displays the result. Since the result is printed directly, no value is returned.
</p>

<hr>

<h3>3. Function with No Arguments and Return Value</h3>

<p>
In this type:
</p>

<ul>
<li>No values are passed to the function.</li>
<li>The function performs a task.</li>
<li>The function returns a value to the calling function.</li>
</ul>

<h4>Syntax</h4>

<pre>
return_type function_name()
{
    return value;
}
</pre>

<h4>Example</h4>

<pre>
#include &lt;stdio.h&gt;

int getNumber()
{
    return 100;
}

int main()
{
    int num;

    num = getNumber();

    printf("%d", num);

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
100
</pre>

<h4>Explanation</h4>

<p>
The function returns the value 100 to the main() function, which stores it in the variable num.
</p>

<hr>

<h3>4. Function with Arguments and Return Value</h3>

<p>
This is the most commonly used type of function.
</p>

<ul>
<li>Values are passed to the function.</li>
<li>The function processes the values.</li>
<li>A result is returned to the calling function.</li>
</ul>

<h4>Syntax</h4>

<pre>
return_type function_name(parameters)
{
    return value;
}
</pre>

<h4>Example</h4>

<pre>
#include &lt;stdio.h&gt;

int sum(int a, int b)
{
    return a+b;
}

int main()
{
    int result;

    result = sum(10,20);

    printf("Sum = %d", result);

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Sum = 30
</pre>

<h4>Explanation</h4>

<p>
The values 10 and 20 are passed as arguments. The function calculates the sum and returns the result to main().
</p>

<hr>

<h4>Comparison of All Function Types</h4>

<table class="notes-table">
<tr>
<th>Function Type</th>
<th>Arguments</th>
<th>Return Value</th>
<th>Example</th>
</tr>

<tr>
<td>No Arguments, No Return Value</td>
<td>No</td>
<td>No</td>
<td>display()</td>
</tr>

<tr>
<td>Arguments, No Return Value</td>
<td>Yes</td>
<td>No</td>
<td>sum(10,20)</td>
</tr>

<tr>
<td>No Arguments, Return Value</td>
<td>No</td>
<td>Yes</td>
<td>getNumber()</td>
</tr>

<tr>
<td>Arguments, Return Value</td>
<td>Yes</td>
<td>Yes</td>
<td>sum(10,20)</td>
</tr>

</table>

<hr>

<h4>How to Remember the Four Types?</h4>

<table class="notes-table">
<tr>
<th>Type</th>
<th>Memory Trick</th>
</tr>

<tr>
<td>No Argument + No Return</td>
<td>Only performs task.</td>
</tr>

<tr>
<td>Argument + No Return</td>
<td>Takes data, displays result.</td>
</tr>

<tr>
<td>No Argument + Return</td>
<td>Returns result without input.</td>
</tr>

<tr>
<td>Argument + Return</td>
<td>Takes input and returns output.</td>
</tr>

</table>

<hr>
<h3>Function: Call by Value & Call by Reference</h3>

<p>
In C programming, functions can pass parameters in two ways:
<b>Call by Value</b> and <b>Call by Reference</b>.
</p>

<hr>

<h4>1. Call by Value</h4>

<p>
In Call by Value, a copy of the actual parameter is passed to the function.
Changes made inside the function do NOT affect the original value.
</p>

<h4>Example (Call by Value)</h4>

<pre>
#include &lt;stdio.h&gt;

void change(int x) {
    x = x + 10;
    printf("Inside function: %d\\n", x);
}

int main() {
    int a = 5;

    change(a);

    printf("Outside function: %d\\n", a);

    return 0;
}
</pre>

<h4>Output:</h4>
<pre>
Inside function: 15
Outside function: 5
</pre>

<hr>

<h4>2. Call by Reference</h4>

<p>
In Call by Reference, the address of the variable is passed to the function.
Changes made inside the function affect the original value.
</p>

<h4>Example (Call by Reference)</h4>

<pre>
#include &lt;stdio.h&gt;

void change(int *x) {
    *x = *x + 10;
    printf("Inside function: %d\\n", *x);
}

int main() {
    int a = 5;

    change(&a);

    printf("Outside function: %d\\n", a);

    return 0;
}
</pre>

<h4>Output:</h4>
<pre>
Inside function: 15
Outside function: 15
</pre>

<hr>

<h4>Difference Between Call by Value and Call by Reference</h4>

<ul>
  <li><b>Call by Value:</b> Works on copy of data</li>
  <li><b>Call by Reference:</b> Works on original data</li>
  <li><b>Call by Value:</b> No change in original value</li>
  <li><b>Call by Reference:</b> Changes reflect in original value</li>
</ul>





<h4>Important Points</h4>

<ul>
<li>Functions improve code reusability.</li>
<li>Arguments are used to pass data to functions.</li>
<li>Return statements send values back to the calling function.</li>
<li>The fourth type (Arguments + Return Value) is the most commonly used.</li>
<li>All four types are important for exams and practical programs.</li>
</ul>

<hr>

<h4>Summary</h4>

<ul>
<li>C functions are classified into four categories.</li>
<li>The classification depends on arguments and return values.</li>
<li>Each type is used for different programming requirements.</li>
<li>Functions make programs modular and easier to manage.</li>
</ul>

<hr>

<h4>Important Exam Questions</h4>

<ul>
<li>What are the different types of functions in C?</li>
<li>Explain function with no arguments and no return value.</li>
<li>Explain function with arguments and no return value.</li>
<li>Explain function with no arguments and return value.</li>
<li>Explain function with arguments and return value.</li>
<li>Differentiate between the four types of functions.</li>
<li>Which type of function is most commonly used and why?</li>
</ul>

`;

let arrayContent = `

<h3>Arrays in C Language</h3>

<p>
An <strong>Array</strong> is a collection of similar data items stored at contiguous (continuous) memory locations under a single variable name.
</p>

<p>
In simple words, an array allows us to store multiple values of the same data type using one variable name.
</p>

<p>
Instead of creating many separate variables, we can use an array to store a group of related values.
</p>

<hr>

<h4>Why Do We Need Arrays?</h4>

<p>
Suppose we want to store marks of 5 students.
</p>

<p><strong>Without Array:</strong></p>

<pre>
int m1 = 80;
int m2 = 75;
int m3 = 90;
int m4 = 85;
int m5 = 70;
</pre>

<p>
Here we need 5 different variables.
</p>

<p><strong>With Array:</strong></p>

<pre>
int marks[5] = {80, 75, 90, 85, 70};
</pre>

<p>
Using an array, all values can be stored in a single variable.
</p>

<hr>

<h4>Definition of Array</h4>

<p>
An array is a data structure that stores a fixed number of elements of the same data type in sequential memory locations.
</p>

<hr>

<h4>Features of Array</h4>

<ul>
<li>Stores multiple values using one variable name.</li>
<li>All elements must have the same data type.</li>
<li>Elements are stored in contiguous memory locations.</li>
<li>Provides fast access using index numbers.</li>
<li>Reduces code complexity.</li>
</ul>

<hr>

<h4>Syntax of Array Declaration</h4>

<pre>
data_type array_name[size];
</pre>

<h4>Example</h4>

<pre>
int marks[5];
</pre>

<p>
Here:
</p>

<table class="notes-table">
<tr>
<th>Part</th>
<th>Description</th>
</tr>

<tr>
<td>int</td>
<td>Data Type</td>
</tr>

<tr>
<td>marks</td>
<td>Array Name</td>
</tr>

<tr>
<td>5</td>
<td>Number of Elements</td>
</tr>

</table>

<hr>

<h4>Array Index</h4>

<p>
Array elements are accessed using index numbers.
</p>

<p>
The index of an array always starts from <strong>0</strong>.
</p>

<table class="notes-table">
<tr>
<th>Index</th>
<th>Value</th>
</tr>

<tr>
<td>0</td>
<td>10</td>
</tr>

<tr>
<td>1</td>
<td>20</td>
</tr>

<tr>
<td>2</td>
<td>30</td>
</tr>

<tr>
<td>3</td>
<td>40</td>
</tr>

<tr>
<td>4</td>
<td>50</td>
</tr>

</table>

<pre>
int arr[5] = {10,20,30,40,50};
</pre>

<hr>

<h4>Important Note</h4>

<p>
The first element is stored at index 0, the second element at index 1, and so on.
</p>

<p>
For an array of size n, the last index is n-1.
</p>

<hr>

<h4>Initialization of Array</h4>

<h4>Method 1: During Declaration</h4>

<pre>
int num[5] = {10,20,30,40,50};
</pre>

<h4>Method 2: Partial Initialization</h4>

<pre>
int num[5] = {10,20};
</pre>

<p>
Remaining elements automatically become 0.
</p>

<hr>

<h4>Accessing Array Elements</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int arr[5] = {10,20,30,40,50};

    printf("%d", arr[2]);

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
30
</pre>

<p>
Because index 2 contains the value 30.
</p>

<hr>

<h4>Input and Output Using Array</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int marks[5];
    int i;

    for(i=0;i<5;i++)
    {
        scanf("%d",&marks[i]);
    }

    for(i=0;i<5;i++)
    {
        printf("%d ",marks[i]);
    }

    return 0;
}
</pre>

<hr>

<h4>Traversing an Array</h4>

<p>
The process of accessing each element of an array one by one is called <strong>Array Traversal</strong>.
</p>

<pre>
for(i=0;i<5;i++)
{
    printf("%d",arr[i]);
}
</pre>

<hr>

<h4>Memory Representation of Array</h4>

<table class="notes-table">
<tr>
<th>Index</th>
<th>Value</th>
<th>Address (Example)</th>
</tr>

<tr>
<td>0</td>
<td>10</td>
<td>1000</td>
</tr>

<tr>
<td>1</td>
<td>20</td>
<td>1004</td>
</tr>

<tr>
<td>2</td>
<td>30</td>
<td>1008</td>
</tr>

<tr>
<td>3</td>
<td>40</td>
<td>1012</td>
</tr>

<tr>
<td>4</td>
<td>50</td>
<td>1016</td>
</tr>

</table>

<p>
Array elements are stored in continuous memory locations.
</p>

<hr>

<h4>Finding Sum of Array Elements</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int arr[5]={10,20,30,40,50};
    int i,sum=0;

    for(i=0;i<5;i++)
    {
        sum=sum+arr[i];
    }

    printf("Sum = %d",sum);

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Sum = 150
</pre>

<hr>

<h4>Finding Largest Element</h4>

<pre>
#include &lt;stdio.h&gt;

int main()
{
    int arr[5]={12,45,23,78,34};
    int i,max;

    max=arr[0];

    for(i=1;i<5;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }

    printf("Largest = %d",max);

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Largest = 78
</pre>

<hr>

<h4>Advantages of Arrays</h4>

<ul>
<li>Stores multiple values using one variable.</li>
<li>Easy to process large amounts of data.</li>
<li>Reduces code size.</li>
<li>Provides fast access using indexes.</li>
<li>Makes programs easier to manage.</li>
</ul>

<hr>

<h4>Disadvantages of Arrays</h4>

<ul>
<li>Can store only similar data types.</li>
<li>Array size is fixed after declaration.</li>
<li>Memory may be wasted if all locations are not used.</li>
<li>Insertion and deletion are difficult.</li>
</ul>

<hr>

<h4>Applications of Arrays</h4>

<ul>
<li>Storing marks of students.</li>
<li>Managing employee records.</li>
<li>Searching and sorting data.</li>
<li>Matrix operations.</li>
<li>Database applications.</li>
<li>Game development.</li>
</ul>

<hr>

<h4>Important Points</h4>

<ul>
<li>Array stores multiple values of the same data type.</li>
<li>Index numbering starts from 0.</li>
<li>Elements are stored in contiguous memory locations.</li>
<li>Array size must be specified during declaration.</li>
<li>Array elements are accessed using index numbers.</li>
</ul>

<hr>

<h4>Difference Between Variable and Array</h4>

<table class="notes-table">
<tr>
<th>Variable</th>
<th>Array</th>
</tr>

<tr>
<td>Stores one value.</td>
<td>Stores multiple values.</td>
</tr>

<tr>
<td>Uses a single memory location.</td>
<td>Uses multiple memory locations.</td>
</tr>

<tr>
<td>No index required.</td>
<td>Uses index numbers.</td>
</tr>

<tr>
<td>Example: int a;</td>
<td>Example: int a[5];</td>
</tr>

</table>

<hr>

<h4>Summary</h4>

<ul>
<li>An array stores multiple elements of the same data type.</li>
<li>Array indexing starts from 0.</li>
<li>Arrays reduce the need for multiple variables.</li>
<li>Arrays make data processing easier and faster.</li>
<li>Arrays are widely used in programming for storing and manipulating data.</li>
</ul>

<hr>

<h4>Important Exam Questions</h4>

<ul>
<li>What is an array in C language?</li>
<li>Write the syntax of array declaration.</li>
<li>What are the advantages and disadvantages of arrays?</li>
<li>Explain array initialization with examples.</li>
<li>Write a program to find the sum of array elements.</li>
<li>Write a program to find the largest element in an array.</li>
<li>Differentiate between a variable and an array.</li>
<li>What is array traversal?</li>
</ul>

`;

let arrayAdvancedContent = `


<h2>Arrays in C Language</h2>


<p>
An <strong>Array</strong> is a collection of elements of the same data type stored in contiguous memory locations under a single variable name.
</p>


<p>
In simple words, an array allows us to store multiple values using one variable instead of creating separate variables for each value.
</p>


<h4>Why Do We Need Arrays?</h4>


<p>
Suppose we want to store marks of 5 students.
</p>


<p>Without Array:</p>


<pre>
int mark1 = 80;
int mark2 = 75;
int mark3 = 90;
int mark4 = 85;
int mark5 = 70;
</pre>


<p>Using Array:</p>


<pre>
int marks = {80,75,90,85,70};
</pre>


<p>
Arrays make programs shorter, easier to manage, and more efficient.
</p>


<hr>


<h3>Characteristics of Arrays</h3>


<ul>
<li>Stores multiple values of the same data type.</li>
<li>Elements are stored in contiguous memory locations.</li>
<li>Each element is accessed using an index number.</li>
<li>Array indexing starts from 0.</li>
<li>Array size is fixed after declaration.</li>
</ul>


<hr>


<h3>Advantages of Arrays</h3>


<ul>
<li>Stores large amounts of data using a single variable.</li>
<li>Reduces program complexity.</li>
<li>Provides faster access to elements.</li>
<li>Makes searching and sorting easier.</li>
<li>Saves programming time.</li>
</ul>


<hr>


<h3>Disadvantages of Arrays</h3>


<ul>
<li>Array size cannot be changed after declaration.</li>
<li>Only same type of data can be stored.</li>
<li>Insertion and deletion require shifting elements.</li>
<li>Memory may be wasted if all locations are not used.</li>
</ul>


<hr>


<h3>Array Declaration</h3>


<pre>
data_type array_name[size];
</pre>


<h4>Examples</h4>


<pre>
int marks;
float salary;
char grade;
</pre>


<hr>


<h3>Array Initialization</h3>


<pre>
int marks = {80,75,90,85,70};
</pre>


<hr>


<h3>Accessing Array Elements</h3>


<table class="notes-table">
<tr>
<th>Index</th>
<th>0</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
</tr>


<tr>
<th>Value</th>
<td>80</td>
<td>75</td>
<td>90</td>
<td>85</td>
<td>70</td>
</tr>
</table>


<pre>
printf("%d", marks);
</pre>


<p><strong>Output:</strong> 90</p>


<hr>


<h3>Types of Arrays</h3>


<table class="notes-table">
<tr>
<th>Type</th>
<th>Description</th>
</tr>


<tr>
<td>One Dimensional Array (1D)</td>
<td>Stores data in a single row.</td>
</tr>


<tr>
<td>Two Dimensional Array (2D)</td>
<td>Stores data in rows and columns.</td>
</tr>


</table>


<hr>


<h3>One Dimensional Array (1D Array)</h3>


<p>
A One Dimensional Array stores elements in a single row and uses one index value to access elements.
</p>


<pre>
int marks={80,75,90,85,70};
</pre>


<table class="notes-table">
<tr>
<th>Index</th>
<th>0</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
</tr>


<tr>
<th>Value</th>
<td>80</td>
<td>75</td>
<td>90</td>
<td>85</td>
<td>70</td>
</tr>
</table>


<hr>


<h3>Array Manipulation</h3>


<p>
Array Manipulation means performing different operations on array elements.
</p>


<h4>Common Operations</h4>


<table class="notes-table">
<tr>
<th>Operation</th>
<th>Description</th>
</tr>


<tr>
<td>Traversal</td>
<td>Displaying all array elements one by one.</td>
</tr>


<tr>
<td>Insertion</td>
<td>Adding a new element.</td>
</tr>


<tr>
<td>Deletion</td>
<td>Removing an existing element.</td>
</tr>


<tr>
<td>Searching</td>
<td>Finding a particular element.</td>
</tr>


<tr>
<td>Sorting</td>
<td>Arranging elements in order.</td>
</tr>


<tr>
<td>Updation</td>
<td>Changing an existing value.</td>
</tr>


</table>


<hr>


<h3>Traversal of an Array</h3>


<p>
Traversal means accessing each element of an array one by one using loops.
</p>


<pre>
#include <stdio.h>
int main() {
int arr = {10, 20, 30, 40, 50};
int i;
printf("Array elements: ");
for(i = 0; i < 5; i++) {
printf("%d ", arr[i]);
}
return 0;
}
// Output:
Array elements: 10 20 30 40 50
</pre>

<hr>


<h3>Insertion in an Array</h3>

<p>
Insertion in an array means adding a new element at a specific position.
We need to shift elements to the right to make space for the new element.
</p>

<h4>Algorithm (Steps)</h4>
<ol>
  <li>Start</li>
  <li>Read array elements</li>
  <li>Read position and new element</li>
  <li>Shift elements from last index to position</li>
  <li>Insert new element at given position</li>
  <li>Stop</li>
</ol>

<h4>C Program for Insertion in Array</h4>

<pre>
#include &lt;stdio.h&gt;

int main() {
    int arr[50], n, i, pos, value;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    printf("Enter elements:\\n");
    for(i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter position to insert (1 to %d): ", n+1);
    scanf("%d", &pos);

    printf("Enter value to insert: ");
    scanf("%d", &value);

    // Shift elements to right
    for(i = n; i >= pos; i--) {
        arr[i] = arr[i - 1];
    }

    // Insert new element
    arr[pos - 1] = value;
    n++;

    printf("Array after insertion:\\n");
    for(i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}
</pre>

<h4>Example</h4>
<p>
Input: 10 20 30 40 <br>
Insert 25 at position 2 <br>
Output: 10 20 25 30 40
</p>

<h4>Important Points</h4>
<ul>
  <li>Elements are shifted to make space.</li>
  <li>Time complexity is O(n).</li>
  <li>Array size increases after insertion.</li>
</ul>




<hr>


<h3>Deletion from an Array (With Code)</h3>

<p>
Deletion in an array means removing an element from a specific position.
After deletion, elements are shifted to the left to fill the empty space.
</p>

<h4>Algorithm (Steps)</h4>
<ol>
  <li>Start</li>
  <li>Read array elements</li>
  <li>Read position of element to delete</li>
  <li>Shift elements from right to left</li>
  <li>Reduce array size by 1</li>
  <li>Stop</li>
</ol>

<h4>C Program for Deletion in Array</h4>

<pre>
#include &lt;stdio.h&gt;

int main() {
    int arr[50], n, i, pos;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    printf("Enter elements:\\n");
    for(i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter position to delete (1 to %d): ", n);
    scanf("%d", &pos);

    // Shift elements to left
    for(i = pos - 1; i < n - 1; i++) {
        arr[i] = arr[i + 1];
    }

    n--; // reduce size

    printf("Array after deletion:\\n");
    for(i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}
</pre>

<h4>Example</h4>
<p>
Input: 10 20 30 40 <br>
Delete position 2 <br>
Output: 10 30 40
</p>

<h4>Important Points</h4>
<ul>
  <li>Elements are shifted to the left after deletion.</li>
  <li>Time complexity is O(n).</li>
  <li>Array size decreases after deletion.</li>
</ul>


<hr>


<h3>Searching in an Array</h3>


<p>
Searching means finding whether an element exists in an array and determining its position.
</p>


<pre>
Array = {10,20,30,40,50}


Search Element = 30


Position = 3
</pre>


<hr>


<h3>Sorting in an Array</h3>


<p>
Sorting means arranging elements in ascending or descending order.
</p>


<table class="notes-table">
<tr>
<th>Before Sorting</th>
<th>After Sorting</th>
</tr>


<tr>
<td>50 20 40 10 30</td>
<td>10 20 30 40 50</td>
</tr>


</table>


<hr>


<h3>Finding Largest Element</h3>


<p>
The largest element is the element having the highest value in an array.
</p>


<pre>
Array = {12,45,23,78,34}


Largest Element = 78
</pre>


<hr>


<h3>Finding Smallest Element</h3>


<p>
The smallest element is the element having the lowest value in an array.
</p>


<pre>
Array = {12,45,23,78,34}


Smallest Element = 12
</pre>


<hr>


<h3>Two Dimensional Array (2D Array)</h3>


<p>
A Two Dimensional Array stores data in rows and columns and is commonly used to represent matrices.
</p>


<pre>
int matrix;
</pre>


<table class="notes-table">
<tr>
<td>10</td>
<td>20</td>
<td>30</td>
</tr>


<tr>
<td>40</td>
<td>50</td>
<td>60</td>
</tr>


<tr>
<td>70</td>
<td>80</td>
<td>90</td>
</tr>


</table>


<hr>


<h3>Addition of Two Matrices</h3>


<p>
Matrix addition is performed by adding corresponding elements of two matrices.
</p>


<pre>
C[i][j] = A[i][j] + B[i][j]
</pre>


<hr>


<h3>Multiplication of Two Matrices</h3>


<p>
Matrix multiplication is performed by multiplying rows of the first matrix with columns of the second matrix.
</p>


<pre>
C[i][j] = A[i][k] * B[k][j]
</pre>


<hr>


<h3>Transpose of a Square Matrix</h3>


<p>
The transpose of a matrix is obtained by converting rows into columns and columns into rows.
</p>


<pre>
Transpose[i][j] = Matrix[j][i]
</pre>


<hr>


<h3>Strings as Character Arrays</h3>


<p>
A string is a collection of characters stored in a character array.
</p>


<pre>
char name[] = "HELLO";
</pre>


<hr>


<h3>Null-Terminated Strings</h3>


<p>
Every string in C ends with a special character called the <strong>Null Character (\\0)</strong>.
</p>


<table class="notes-table">
<tr>
<td>H</td>
<td>E</td>
<td>L</td>
<td>L</td>
<td>O</td>
<td>\\0</td>
</tr>
</table>


<p>
The null character indicates the end of the string.
</p>


<hr>


<h3>Summary</h3>


<ul>
<li>Array stores multiple values of the same data type.</li>
<li>Arrays are mainly of two types: 1D and 2D.</li>
<li>Array manipulation includes traversal, insertion, deletion, searching and sorting.</li>
<li>Largest and smallest elements can be found using loops.</li>
<li>2D arrays are used for matrices.</li>
<li>Matrix operations include addition, multiplication and transpose.</li>
<li>Strings are character arrays ending with a null character (\\0).</li>
</ul>


`;
let callByValueContent = `

<h3>Call by Value & Call by Reference</h3>

<p>
In C programming, when we pass parameters to a function, there are two ways to pass data:
<b>Call by Value</b> and <b>Call by Reference</b>.
</p>

<ul>
  <li>These methods define how values are passed to a function.</li>
  <li>They decide whether changes inside function affect original data or not.</li>
</ul>

<hr>

<h4>Types of Function Parameter Passing</h4>

<ol>
  <li><b>Call by Value</b></li>
  <li><b>Call by Reference</b></li>
</ol>

<hr>

<h4>1. Call by Value</h4>

<p>
Call by Value means passing a copy of the actual value to a function.
So, changes made inside the function do NOT affect the original variable.
</p>

<h4>Simple Example</h4>

<pre>
#include &lt;stdio.h&gt;

void update(int x) {
    x = x + 10;
    printf("Inside Function: %d\\n", x);
}

int main() {

    int a = 5;

    update(a);

    printf("Outside Function: %d\\n", a);

    return 0;
}
</pre>

<hr>

<h4>Output</h4>

<pre>
Inside Function: 15
Outside Function: 5
</pre>

<hr>

<h4>Explanation (Very Simple)</h4>

<ul>
  <li>Value of <b>a = 5</b> is passed to function</li>
  <li>Function receives a copy in <b>x</b></li>
  <li><b>x</b> is changed inside function</li>
  <li>But original <b>a</b> remains unchanged</li>
</ul>

<hr>

<h4>Exam Points</h4>

<ul>
  <li>Also called Pass by Value</li>
  <li>Function works on copy of data</li>
  <li>Original value is safe and unchanged</li>
  <li>Used when we don’t want to modify original data</li>
</ul>

`;

let callByReferenceContent = `

<h3>Call by Reference</h3>

<ul>
<li>
In C programming, Call by Reference is a method in which the address of the variable is passed to the function.
So, the function works directly on the original data.
</li>
  <li>Changes made inside function affect the original variable.</li>
  <li>It uses pointers to access memory address.</li>
</ul>
<hr>
<h4>Simple Meaning</h4>

<ul>
  <li>Pass address of variables using & operator</li>
  <li>Use pointers (*) to access values</li>
  <li>Function updates original variables</li>
</ul>

<hr>

<h4>Example</h4>

<pre>
#include &lt;stdio.h&gt;

void add(int *a, int *b, int *sum) {
    *sum = *a + *b;
}

int main() {

    int x, y, result;

    printf("Enter two numbers: ");
    scanf("%d %d", &x, &y);

    add(&x, &y, &result);

    printf("Sum = %d", result);

    return 0;
}
</pre>

<hr>

<h4>Output</h4>

<pre>
Enter two numbers: 10 20
Sum = 30
</pre>

<hr>

<h4>Explanation </h4>

<ul>
  <li><b>x</b> and <b>y</b> are input numbers</li>
  <li>Addresses of x and y are passed to function</li>
  <li>Function calculates sum using pointers</li>
  <li>Result is stored in original variable</li>
</ul>

<hr>

<h4>Exam Points</h4>

<ul>
  <li>Also called Pass by Reference</li>
  <li>Works using pointers</li>
  <li>Original value is modified</li>
  <li>Useful when we need to update original data</li>
</ul>

`;
let arrayOperationsContent = `

<h3>Operations in Array</h3>

<div class="box">
<p><b>Introduction:</b> An array is a collection of similar data types stored in continuous memory locations. 
We perform different operations to manage data efficiently.</p>
</div>

<h4>Common Operations</h4>


<table class="notes-table">
<tr>
<th>Operation</th>
<th>Description</th>
</tr>


<tr>
<td>Traversal</td>
<td>Displaying all array elements one by one.</td>
</tr>


<tr>
<td>Insertion</td>
<td>Adding a new element.</td>
</tr>


<tr>
<td>Deletion</td>
<td>Removing an existing element.</td>
</tr>


<tr>
<td>Searching</td>
<td>Finding a particular element.</td>
</tr>


<tr>
<td>Sorting</td>
<td>Arranging elements in order.</td>
</tr>


<tr>
<td>Updation</td>
<td>Changing an existing value.</td>
</tr>


</table>


<hr>

<h3>1️⃣ Traversal (Accessing Elements)</h3>
<div class="box">
<p>Traversal means visiting each element of an array one by one.</p>

<pre>
for(int i = 0; i < n; i++) {
    printf("%d ", arr[i]);
}
</pre>
</div>

<h3>2️⃣ Insertion (Adding Element)</h3>
<div class="box">
<p>Insertion means adding a new element at a specific position.</p>

<pre>
for(int i = n; i > pos; i--) {
    arr[i] = arr[i - 1];
}
arr[pos] = value;
n++;
</pre>
</div>

<h3>3️⃣ Deletion (Removing Element)</h3>
<div class="box">
<p>Deletion means removing an element and shifting remaining elements left.</p>

<pre>
for(int i = pos; i < n - 1; i++) {
    arr[i] = arr[i + 1];
}
n--;
</pre>
</div>

<h3>4️⃣ Searching (Finding Element)</h3>
<div class="box">
<p>Searching means checking whether an element exists or not.</p>

<pre>
for(int i = 0; i < n; i++) {
    if(arr[i] == key) {
        printf("Found at position %d", i);
    }
}
</pre>
</div>

<h3>5️⃣ Update (Modify Element)</h3>
<div class="box">
<p>Update means changing the value of an existing element.</p>

<pre>
arr[pos] = newValue;
</pre>
</div>

<h3>6️⃣ Sorting (Arranging Elements)</h3>
<div class="box">
<p>Sorting means arranging elements in ascending or descending order.</p>

<pre>
for(int i = 0; i < n; i++) {
    for(int j = i + 1; j < n; j++) {
        if(arr[i] > arr[j]) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
</pre>
</div>

<h3>Quick Revision</h3>
<div class="box">
<ul>
    <li>Traversal → Access elements</li>
    <li>Insertion → Add element</li>
    <li>Deletion → Remove element</li>
    <li>Searching → Find element</li>
    <li>Update → Modify value</li>
    <li>Sorting → Arrange data</li>
</ul>
</div>

<h3>Exam Tip</h3>
<div class="box">
<p>Always write definition + algorithm + example for full marks in exams.</p>
</div>

`;

let traversalCContent = `

<div class="box">

    <h3> Array Traversal in C</h3>

    <p>
        Traversal means visiting each element of an array one by one using loop.
        It is used to display or process all elements of an array.
    </p>

    <h4> Example 1: Fixed Array Traversal</h4>
    <pre>
#include <stdio.h>

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int i;

    printf("Array Elements:\\n");

    for(i = 0; i < 5; i++) {
        printf("%d\\n", arr[i]);
    }

    return 0;
}
    </pre>

    <h4> Output</h4>
    <pre>
Array Elements:
10
20
30
40
50
    </pre>

    <h4> Example 2: Take Input from User and Traverse</h4>
    <pre>
#include <stdio.h>

int main() {
    int arr[100], n, i;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    printf("Enter %d elements:\\n", n);

    for(i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Array Elements are:\\n");

    for(i = 0; i < n; i++) {
        printf("%d\\n", arr[i]);
    }

    return 0;
}
    </pre>

    <h4> Explanation</h4>
    <ul>
        <li><b>n</b> → number of elements entered by user</li>
        <li><b>scanf</b> → takes input from user</li>
        <li><b>for loop</b> → used for input + traversal</li>
        <li><b>arr[i]</b> → stores and prints elements</li>
    </ul>

    <h4> Exam Point</h4>
    <p>
        Traversal means visiting each element of an array using loop. It can be done with fixed array or user input array.
    </p>

</div>

`;

let insertionCContent = `



    <h3> Array Insertion in C</h3>

    <p>
        Insertion means adding a new element at a specific position in an array.
        Existing elements are shifted to the right to make space.
    </p>

    <h4> Example 1: Insert Element with User Input</h4>
    <pre>
#include <stdio.h>

int main() {
    int arr[100], n, i, pos, value;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    printf("Enter %d elements:\\n", n);
    for(i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter position to insert: ");
    scanf("%d", &pos);

    printf("Enter value to insert: ");
    scanf("%d", &value);

    // Shifting elements to right
    for(i = n; i > pos; i--) {
        arr[i] = arr[i - 1];
    }

    arr[pos] = value;
    n++;

    printf("Array after insertion:\\n");

    for(i = 0; i < n; i++) {
        printf("%d\\n", arr[i]);
    }

    return 0;
}
    </pre>

    <h4> Explanation</h4>
    <ul>
        <li><b>n</b> → number of elements</li>
        <li><b>pos</b> → position where element is inserted</li>
        <li><b>value</b> → new element to insert</li>
        <li><b>arr[i] = arr[i - 1]</b> → shifting right</li>
        <li><b>arr[pos] = value</b> → inserting element</li>
    </ul>

    <h4> Exam Point</h4>
    <p>
        Insertion means adding a new element at a given position by shifting elements to the right side.
    </p>


`;

let deletionCContent = `

<div class="box">

<h3>Array Deletion in C</h3>


<p>
Deletion means removing an element from a specific position in an array.
After deletion, remaining elements are shifted to the left side.
</p>

<h4>Example Program</h4>

<pre>
#include <stdio.h>

int main() {
    int arr[100], n, i, pos;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    printf("Enter %d elements:\\n", n);
    for(i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter position to delete: ");
    scanf("%d", &pos);

    for(i = pos; i < n - 1; i++) {
        arr[i] = arr[i + 1];
    }

    n--;

    printf("Array after deletion:\\n");

    for(i = 0; i < n; i++) {
        printf("%d\\n", arr[i]);
    }

    return 0;
}
</pre>

<h4>Explanation</h4>
<ul>
<li>n is number of elements</li>
<li>pos is position of element to delete</li>
<li>arr[i] = arr[i + 1] is used for left shifting</li>
<li>n-- reduces the size of array</li>
</ul>

<h4>Exam Point</h4>
<p>
Deletion means removing an element from a specific position and shifting remaining elements to the left.
</p>

</div>

`;

let searchingCContent = `

<h3>Array Searching in C</h3>


<p>
Searching means finding a specific element in an array. If the element is found,
its position is displayed; otherwise, a message is shown that the element is not found.
</p>

<h4>Example Program</h4>

<pre>
#include <stdio.h>

int main() {
    int arr[100], n, i, key, found = 0;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    printf("Enter %d elements:\\n", n);
    for(i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter element to search: ");
    scanf("%d", &key);

    for(i = 0; i < n; i++) {
        if(arr[i] == key) {
            printf("Element found at position %d", i + 1);
            found = 1;
            break;
        }
    }

    if(found == 0) {
        printf("Element not found");
    }

    return 0;
}
</pre>

<h4>Sample Input</h4>

<pre>
Enter number of elements: 5
Enter 5 elements:
10 20 30 40 50
Enter element to search: 30
</pre>

<h4>Output</h4>

<pre>
Element found at position 3
</pre>

<h4>Explanation</h4>

<ul>
<li>n stores the number of elements in the array.</li>
<li>key stores the element to be searched.</li>
<li>The for loop checks each element one by one.</li>
<li>If arr[i] equals key, the element is found.</li>
<li>i + 1 is used to display the position in a user-friendly way.</li>
<li>The variable found is used to check whether the element exists in the array.</li>
</ul>

<h4>Algorithm</h4>

<ol>
<li>Read the size of the array.</li>
<li>Input array elements.</li>
<li>Input the element to search.</li>
<li>Compare the search element with each array element.</li>
<li>If a match is found, display its position.</li>
<li>If no match is found, display "Element not found".</li>
</ol>

<h4>Exam Point</h4>

<p>
Linear Search is a searching technique in which each element of the array is checked one by one until the required element is found or the array ends.
</p>

`;

let arrayCRUDContent = `

<h3>Array CRUD C</h3>

<p>
CRUD stands for Create, Read, Update, and Delete. In this mini project, users can
insert elements, display elements, search elements, update elements, and delete elements
using a menu-driven program.
</p>

<h4>Example Program</h4>

<pre>
#include <stdio.h>

int main() {
    int arr[100], n = 0;
    int choice, i, pos, value, key, found;

    while(1) {

        printf("\\nArray CRUD Operations");
        printf("\\n1. Insert");
        printf("\\n2. Display");
        printf("\\n3. Search");
        printf("\\n4. Update");
        printf("\\n5. Delete");
        printf("\\n6. Exit");

        printf("\\nEnter your choice: ");
        scanf("%d", &choice);

        switch(choice) {

            case 1:
                printf("Enter element to insert: ");
                scanf("%d", &value);

                arr[n] = value;
                n++;

                printf("Element inserted successfully.");
                break;

            case 2:
                if(n == 0) {
                    printf("Array is empty.");
                } else {
                    printf("Array Elements:\\n");

                    for(i = 0; i < n; i++) {
                        printf("%d ", arr[i]);
                    }
                }
                break;

            case 3:
                printf("Enter element to search: ");
                scanf("%d", &key);

                found = 0;

                for(i = 0; i < n; i++) {
                    if(arr[i] == key) {
                        printf("Element found at position %d", i + 1);
                        found = 1;
                        break;
                    }
                }

                if(found == 0) {
                    printf("Element not found.");
                }

                break;

            case 4:
                printf("Enter position to update: ");
                scanf("%d", &pos);

                if(pos < 1 || pos > n) {
                    printf("Invalid position.");
                } else {
                    printf("Enter new value: ");
                    scanf("%d", &value);

                    arr[pos - 1] = value;

                    printf("Element updated successfully.");
                }

                break;

            case 5:
                printf("Enter position to delete: ");
                scanf("%d", &pos);

                if(pos < 1 || pos > n) {
                    printf("Invalid position.");
                } else {

                    for(i = pos - 1; i < n - 1; i++) {
                        arr[i] = arr[i + 1];
                    }

                    n--;

                    printf("Element deleted successfully.");
                }

                break;

            case 6:
                printf("Program terminated.");
                return 0;

            default:
                printf("Invalid choice.");
        }
    }

    return 0;
}
</pre>

<h4>Operations Performed</h4>

<ul>
<li>Create (Insert) - Add new elements into the array.</li>
<li>Read (Display) - Show all elements of the array.</li>
<li>Search - Find an element and display its position.</li>
<li>Update - Modify an existing element.</li>
<li>Delete - Remove an element from the array.</li>
</ul>

<h4>Sample Output</h4>

<pre>
Array CRUD Operations

1. Insert
2. Display
3. Search
4. Update
5. Delete
6. Exit

Enter your choice: 1
Enter element to insert: 10

Element inserted successfully.

Enter your choice: 1
Enter element to insert: 20

Element inserted successfully.

Enter your choice: 2

Array Elements:
10 20
</pre>

<h4>Explanation</h4>

<ul>
<li>The array stores up to 100 elements.</li>
<li>The menu allows the user to choose different operations.</li>
<li>Insertion adds a new element at the end of the array.</li>
<li>Display shows all stored elements.</li>
<li>Search finds an element and displays its position.</li>
<li>Update changes the value at a given position.</li>
<li>Delete removes an element and shifts remaining elements to the left.</li>
<li>Exit terminates the program.</li>
</ul>

<h4>Algorithm</h4>

<ol>
<li>Start the program.</li>
<li>Display the menu.</li>
<li>Read the user's choice.</li>
<li>Perform the selected operation.</li>
<li>Repeat until the user chooses Exit.</li>
<li>Stop the program.</li>
</ol>

<h4>Exam Point</h4>

<p>
A CRUD program combines Create, Read, Update, and Delete operations in a single menu-driven application. It is one of the most important practical programs for understanding array operations.
</p>

`;

let multidimensionalArraysContent = `

<h3>Multidimensional Arrays</h3>

<p>
A multidimensional array is an array that contains more than one dimension.
The most commonly used multidimensional array is a two-dimensional array, which is used to store data in rows and columns like a table or matrix.
</p>

<h4>Syntax</h4>

<pre>
data_type array_name[row_size][column_size];
</pre>

<h4>Example</h4>

<pre>
int marks[3][4];
</pre>

<p>
In this example:
</p>

<ul>
<li>3 represents the number of rows.</li>
<li>4 represents the number of columns.</li>
<li>The array can store 12 elements.</li>
</ul>

<h4>Initialization of a Two-Dimensional Array</h4>

<pre>
int matrix[2][3] = {
    {10, 20, 30},
    {40, 50, 60}
};
</pre>

<h4>Program to Display Elements of a Two-Dimensional Array</h4>

<pre>
#include <stdio.h>

int main() {
    int matrix[2][3] = {
        {10, 20, 30},
        {40, 50, 60}
    };

    int i, j;

    printf("Matrix Elements:\\n");

    for(i = 0; i < 2; i++) {
        for(j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\\n");
    }

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
Matrix Elements:
10 20 30
40 50 60
</pre>

<h4>Program to Take Input from User and Display Matrix</h4>

<pre>
#include <stdio.h>

int main() {
    int matrix[3][3];
    int i, j;

    printf("Enter 9 elements:\\n");

    for(i = 0; i < 3; i++) {
        for(j = 0; j < 3; j++) {
            scanf("%d", &matrix[i][j]);
        }
    }

    printf("Matrix Elements:\\n");

    for(i = 0; i < 3; i++) {
        for(j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\\n");
    }

    return 0;
}
</pre>

<h4>Explanation</h4>

<ul>
<li>A two-dimensional array stores data in rows and columns.</li>
<li>The first index represents the row number.</li>
<li>The second index represents the column number.</li>
<li>Nested loops are used to access all elements of the matrix.</li>
<li>The outer loop controls rows and the inner loop controls columns.</li>
</ul>

<h4>Applications</h4>

<ul>
<li>Matrix operations</li>
<li>Marksheet management systems</li>
<li>Game boards</li>
<li>Image processing</li>
<li>Tabular data storage</li>
</ul>

<h4>Exam Point</h4>

<p>
A multidimensional array is an array of arrays. A two-dimensional array is used to store data in rows and columns and is commonly known as a matrix.
</p>

`;

let pointersContent = `

<h3>Pointers in C Language</h3>

<p>A pointer is a special variable that stores the memory address of another variable instead of storing a normal value.</p>

<p>Pointers are one of the most powerful features of C language. They help in memory management, array handling, function calls, dynamic memory allocation, and data structures.</p>

<hr>

<h3>Why Do We Use Pointers?</h3>

<ul>
    <li>To access memory directly.</li>
    <li>To pass arguments by reference to functions.</li>
    <li>To work efficiently with arrays and strings.</li>
    <li>To create dynamic memory during program execution.</li>
    <li>To implement data structures like Linked Lists, Trees, and Graphs.</li>
</ul>

<hr>

<h3>Pointer Declaration</h3>

<p>Syntax:</p>

<pre>
data_type *pointer_name;
</pre>

<p>Example:</p>

<pre>
int *ptr;
float *fptr;
char *cptr;
</pre>

<hr>

<h3>Initializing a Pointer</h3>

<pre>
#include <stdio.h>

int main() {

    int num = 10;
    int *ptr = &num;

    printf("Value of num = %d", num);
    printf("\\nAddress of num = %p", &num);
    printf("\\nValue stored in ptr = %p", ptr);
    printf("\\nValue using pointer = %d", *ptr);

    return 0;
}
</pre>

<h4>Explanation</h4>

<ul>
    <li><b>&num</b> gives the address of variable num.</li>
    <li><b>ptr</b> stores that address.</li>
    <li><b>*ptr</b> accesses the value stored at that address.</li>
</ul>

<hr>

<h3>Pointer Operators</h3>

<h4>1. Address Operator (&)</h4>

<p>Returns the address of a variable.</p>

<pre>
int a = 5;
printf("%p", &a);
</pre>

<h4>2. Dereference Operator (*)</h4>

<p>Returns the value stored at the address.</p>

<pre>
int a = 5;
int *ptr = &a;

printf("%d", *ptr);
</pre>

<hr>

<h3>Types of Pointers</h3>

<h4>1. Integer Pointer</h4>

<p>Stores the address of an integer variable.</p>

<pre>
int num = 100;
int *ptr = &num;
</pre>

<h4>2. Character Pointer</h4>

<p>Stores the address of a character variable.</p>

<pre>
char ch = 'A';
char *ptr = &ch;
</pre>

<h4>3. Float Pointer</h4>

<p>Stores the address of a float variable.</p>

<pre>
float price = 99.5;
float *ptr = &price;
</pre>

<h4>4. Double Pointer</h4>

<p>Stores the address of a double variable.</p>

<pre>
double pi = 3.14;
double *ptr = &pi;
</pre>

<h4>5. Void Pointer (Generic Pointer)</h4>

<p>A void pointer can store the address of any data type.</p>

<pre>
void *ptr;
</pre>

<p>Example:</p>

<pre>
int num = 50;

void *ptr = &num;

printf("%d", *(int *)ptr);
</pre>

<hr>

<h3>Special Types of Pointers</h3>

<h4>6. Null Pointer</h4>

<p>A pointer that points to nothing.</p>

<pre>
int *ptr = NULL;
</pre>

<p>Used to indicate that a pointer is not currently assigned to any memory location.</p>

<h4>7. Wild Pointer</h4>

<p>An uninitialized pointer.</p>

<pre>
int *ptr;
</pre>

<p>It contains a garbage address and should never be used before initialization.</p>

<h4>8. Dangling Pointer</h4>

<p>A pointer that points to memory which has already been released.</p>

<pre>
int *ptr = (int *)malloc(sizeof(int));

free(ptr);
</pre>

<p>After free(), ptr becomes a dangling pointer.</p>

<hr>

<h3>Pointer to Pointer (Double Pointer)</h3>

<p>A pointer that stores the address of another pointer.</p>

<pre>
#include <stdio.h>

int main() {

    int num = 10;

    int *ptr = &num;

    int **pptr = &ptr;

    printf("%d", **pptr);

    return 0;
}
</pre>

<h4>Memory Representation</h4>

<pre>
num  = 10
ptr  = address of num
pptr = address of ptr
</pre>

<hr>

<h3>Pointers and Arrays</h3>

<p>The name of an array acts as a pointer to its first element.</p>

<pre>
#include <stdio.h>

int main() {

    int arr[] = {10,20,30,40};

    printf("%d", *arr);
    printf("\\n%d", *(arr+1));

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
10
20
</pre>

<hr>

<h3>Pointer Arithmetic</h3>

<p>Pointers can be incremented and decremented.</p>

<pre>
#include <stdio.h>

int main() {

    int arr[] = {10,20,30};

    int *ptr = arr;

    printf("%d\\n", *ptr);

    ptr++;

    printf("%d", *ptr);

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
10
20
</pre>

<hr>

<h3>Pointers and Functions</h3>

<h4>Call By Reference Using Pointers</h4>

<pre>
#include <stdio.h>

void swap(int *a, int *b) {

    int temp;

    temp = *a;
    *a = *b;
    *b = temp;
}

int main() {

    int x = 10;
    int y = 20;

    swap(&x, &y);

    printf("x = %d", x);
    printf("\\ny = %d", y);

    return 0;
}
</pre>

<h4>Output</h4>

<pre>
x = 20
y = 10
</pre>

<hr>

<h3>Dynamic Memory Allocation Using Pointers</h3>

<p>Pointers are used with malloc(), calloc(), realloc(), and free().</p>

<pre>
#include <stdio.h>
#include <stdlib.h>

int main() {

    int *ptr;

    ptr = (int *)malloc(5 * sizeof(int));

    for(int i=0; i<5; i++) {
        ptr[i] = i + 1;
    }

    for(int i=0; i<5; i++) {
        printf("%d ", ptr[i]);
    }

    free(ptr);

    return 0;
}
</pre>

<hr>

<h3>Advantages of Pointers</h3>

<ul>
    <li>Efficient memory management.</li>
    <li>Supports dynamic memory allocation.</li>
    <li>Fast processing of arrays and strings.</li>
    <li>Useful for implementing data structures.</li>
    <li>Allows call by reference.</li>
</ul>

<hr>

<h3>Disadvantages of Pointers</h3>

<ul>
    <li>Difficult for beginners to understand.</li>
    <li>Can cause memory leaks.</li>
    <li>Wild and dangling pointers may crash programs.</li>
    <li>Incorrect use can create bugs.</li>
</ul>

<hr>

<h3>Frequently Asked Exam Questions</h3>

<h4>What is a Pointer?</h4>

<p>A pointer is a variable that stores the memory address of another variable.</p>

<h4>What is a Null Pointer?</h4>

<p>A null pointer is a pointer that does not point to any valid memory location.</p>

<h4>What is a Wild Pointer?</h4>

<p>A wild pointer is an uninitialized pointer containing a garbage address.</p>

<h4>What is a Dangling Pointer?</h4>

<p>A dangling pointer points to memory that has already been freed.</p>

<h4>What is a Void Pointer?</h4>

<p>A void pointer is a generic pointer that can store the address of any data type.</p>

<h4>What is a Pointer to Pointer?</h4>

<p>A pointer that stores the address of another pointer is called a pointer to pointer.</p>

<hr>

<h3>Quick Revision Table</h3>

<table class="notes-table">

<tr>
    <th>Pointer Type</th>
    <th>Description</th>
</tr>

<tr>
    <td>int *</td>
    <td>Points to an integer variable</td>
</tr>

<tr>
    <td>char *</td>
    <td>Points to a character variable</td>
</tr>

<tr>
    <td>float *</td>
    <td>Points to a float variable</td>
</tr>

<tr>
    <td>double *</td>
    <td>Points to a double variable</td>
</tr>

<tr>
    <td>void *</td>
    <td>Generic pointer</td>
</tr>

<tr>
    <td>NULL Pointer</td>
    <td>Points to nothing</td>
</tr>

<tr>
    <td>Wild Pointer</td>
    <td>Uninitialized pointer</td>
</tr>

<tr>
    <td>Dangling Pointer</td>
    <td>Points to invalid memory</td>
</tr>

<tr>
    <td>Pointer to Pointer</td>
    <td>Stores address of another pointer</td>
</tr>

</table>

<hr>

<h3>Important Exam Points</h3>

<ul>
    <li>A pointer stores an address, not a value.</li>
    <li>& is called Address Operator.</li>
    <li>* is called Dereference Operator.</li>
    <li>Array names behave like pointers.</li>
    <li>Pointers are used for Call by Reference.</li>
    <li>Always initialize pointers before use.</li>
    <li>Use free() after dynamic memory allocation.</li>
</ul>

`;

let structureContent = `

<h3>Structures in C Language</h3>

<p>
A Structure is a user-defined data type in C that allows us to store different types of data
under a single name. Unlike an array, which stores elements of the same data type,
a structure can store integers, characters, floats, arrays, and even other structures together.
</p>

<p>
Structures are widely used to represent real-world entities such as Students, Employees,
Books, Products, and Vehicles where multiple pieces of related information need to be stored together.
</p>

<hr>

<h3>Why Do We Use Structures?</h3>

<ul>
    <li>To group related data into a single unit.</li>
    <li>To make programs easier to understand and manage.</li>
    <li>To store records such as student information.</li>
    <li>To pass multiple values to functions easily.</li>
    <li>To create complex data structures.</li>
</ul>

<hr>

<h3>Syntax of Structure</h3>

<pre>
struct structure_name
{
    data_type member1;
    data_type member2;
    data_type member3;
};
</pre>

<h4>Example</h4>

<pre>
struct Student
{
    int rollNo;
    char name[50];
    float marks;
};
</pre>

<p>
Here Student is the structure name and rollNo, name, and marks are structure members.
</p>

<hr>

<h3>Structure Variables</h3>

<p>
After creating a structure, we need a structure variable to store data.
</p>

<h4>Method 1: Declare Variable After Structure</h4>

<pre>
struct Student
{
    int rollNo;
    char name[50];
    float marks;
};

struct Student s1;
</pre>

<h4>Method 2: Declare Variable During Structure Creation</h4>

<pre>
struct Student
{
    int rollNo;
    char name[50];
    float marks;
} s1, s2;
</pre>

<hr>

<h3>Accessing Structure Members</h3>

<p>
The dot (.) operator is used to access structure members.
</p>

<h4>Example</h4>

<pre>
#include <stdio.h>

struct Student
{
    int rollNo;
    char name[50];
    float marks;
};

int main()
{
    struct Student s1;

    s1.rollNo = 101;
    s1.marks = 85.5;

    printf("Roll Number = %d\\n", s1.rollNo);
    printf("Marks = %.2f", s1.marks);

    return 0;
}
</pre>

<hr>

<h3>Structure Initialization</h3>

<p>
Values can be assigned during declaration.
</p>

<h4>Example</h4>

<pre>
#include <stdio.h>

struct Student
{
    int rollNo;
    char name[20];
    float marks;
};

int main()
{
    struct Student s1 = {101, "Pradeep", 89.5};

    printf("Roll No = %d\\n", s1.rollNo);
    printf("Name = %s\\n", s1.name);
    printf("Marks = %.2f", s1.marks);

    return 0;
}
</pre>

<hr>

<h3>Structure Assignment</h3>

<p>
One structure variable can be assigned to another structure variable of the same type.
</p>

<h4>Example</h4>

<pre>
#include <stdio.h>

struct Student
{
    int rollNo;
    float marks;
};

int main()
{
    struct Student s1 = {101, 90};
    struct Student s2;

    s2 = s1;

    printf("Roll No = %d\\n", s2.rollNo);
    printf("Marks = %.2f", s2.marks);

    return 0;
}
</pre>

<hr>

<h3>Nested Structure</h3>

<p>
A structure inside another structure is called a Nested Structure.
</p>

<h4>Example</h4>

<pre>
#include <stdio.h>

struct Address
{
    char city[30];
    int pin;
};

struct Student
{
    int rollNo;
    char name[30];
    struct Address add;
};

int main()
{
    struct Student s1 =
    {
        101,
        "Pradeep",
        {"Gorakhpur", 273001}
    };

    printf("Roll No = %d\\n", s1.rollNo);
    printf("Name = %s\\n", s1.name);
    printf("City = %s\\n", s1.add.city);
    printf("PIN = %d", s1.add.pin);

    return 0;
}
</pre>

<hr>

<h3>Structures and Functions</h3>

<p>
Structures can be passed to functions just like normal variables.
</p>

<h4>Example: Passing Structure to Function</h4>

<pre>
#include <stdio.h>

struct Student
{
    int rollNo;
    float marks;
};

void display(struct Student s)
{
    printf("Roll No = %d\\n", s.rollNo);
    printf("Marks = %.2f", s.marks);
}

int main()
{
    struct Student s1 = {101, 88.5};

    display(s1);

    return 0;
}
</pre>

<hr>

<h3>Returning Structure From Function</h3>

<h4>Example</h4>

<pre>
#include <stdio.h>

struct Student
{
    int rollNo;
    float marks;
};

struct Student getData()
{
    struct Student s;

    s.rollNo = 101;
    s.marks = 92.5;

    return s;
}

int main()
{
    struct Student s1;

    s1 = getData();

    printf("Roll No = %d\\n", s1.rollNo);
    printf("Marks = %.2f", s1.marks);

    return 0;
}
</pre>

<hr>

<h3>Structures and Arrays</h3>

<p>
An array can contain multiple structure variables.
This is called an Array of Structures.
</p>

<hr>

<h3>Array of Structures</h3>

<p>
Used to store information of multiple students, employees, books, etc.
</p>

<h4>Example</h4>

<pre>
#include <stdio.h>

struct Student
{
    int rollNo;
    char name[30];
    float marks;
};

int main()
{
    struct Student s[3];

    for(int i = 0; i < 3; i++)
    {
        printf("Enter Roll No: ");
        scanf("%d", &s[i].rollNo);

        printf("Enter Name: ");
        scanf("%s", s[i].name);

        printf("Enter Marks: ");
        scanf("%f", &s[i].marks);
    }

    printf("\\nStudent Details\\n");

    for(int i = 0; i < 3; i++)
    {
        printf("\\nRoll No = %d\\n", s[i].rollNo);
        printf("Name = %s\\n", s[i].name);
        printf("Marks = %.2f\\n", s[i].marks);
    }

    return 0;
}
</pre>

<hr>

<h3>Structures Containing Arrays</h3>

<p>
A structure member can itself be an array.
</p>

<h4>Example</h4>

<pre>
#include <stdio.h>

struct Student
{
    int rollNo;
    char name[50];
    int marks[5];
};

int main()
{
    struct Student s1;

    s1.rollNo = 101;

    printf("Enter Name: ");
    scanf("%s", s1.name);

    printf("Enter 5 Subject Marks\\n");

    for(int i = 0; i < 5; i++)
    {
        scanf("%d", &s1.marks[i]);
    }

    printf("\\nStudent Information\\n");

    printf("Roll No = %d\\n", s1.rollNo);
    printf("Name = %s\\n", s1.name);

    printf("Marks = ");

    for(int i = 0; i < 5; i++)
    {
        printf("%d ", s1.marks[i]);
    }

    return 0;
}
</pre>

<hr>

<h3>Real Life Example of Structure</h3>

<pre>
#include <stdio.h>

struct Employee
{
    int id;
    char name[50];
    float salary;
};

int main()
{
    struct Employee emp;

    printf("Enter Employee ID: ");
    scanf("%d", &emp.id);

    printf("Enter Employee Name: ");
    scanf("%s", emp.name);

    printf("Enter Salary: ");
    scanf("%f", &emp.salary);

    printf("\\nEmployee Information\\n");

    printf("ID = %d\\n", emp.id);
    printf("Name = %s\\n", emp.name);
    printf("Salary = %.2f", emp.salary);

    return 0;
}
</pre>

<hr>

<h3>Advantages of Structures</h3>

<ul>
    <li>Stores different data types together.</li>
    <li>Makes programs organized and readable.</li>
    <li>Useful for record management.</li>
    <li>Supports arrays, functions, and nested structures.</li>
    <li>Represents real-world objects easily.</li>
</ul>

<hr>

<h3>Disadvantages of Structures</h3>

<ul>
    <li>Require more memory than individual variables.</li>
    <li>Operations become complex for very large structures.</li>
    <li>No built-in data hiding like classes in C++.</li>
</ul>

<hr>

<h3>Frequently Asked Exam Questions</h3>

<h4>What is a Structure?</h4>

<p>
A Structure is a user-defined data type that groups variables of different data types under one name.
</p>

<h4>What is a Structure Variable?</h4>

<p>
A variable created from a structure is called a structure variable.
</p>

<h4>What is a Nested Structure?</h4>

<p>
A structure inside another structure is called a nested structure.
</p>

<h4>What is an Array of Structures?</h4>

<p>
An array that stores multiple structure variables is called an array of structures.
</p>

<h4>Can a Structure Contain an Array?</h4>

<p>
Yes, a structure member can be an array.
</p>

<h4>Can Structures Be Passed to Functions?</h4>

<p>
Yes, structures can be passed to functions and returned from functions.
</p>

<hr>

<h3>Quick Revision Table</h3>

<table class ="notes-table">

<tr>
    <th>Topic</th>
    <th>Description</th>
</tr>

<tr>
    <td>Structure</td>
    <td>User-defined data type</td>
</tr>

<tr>
    <td>Structure Variable</td>
    <td>Variable of structure type</td>
</tr>

<tr>
    <td>Initialization</td>
    <td>Assign values during declaration</td>
</tr>

<tr>
    <td>Structure Assignment</td>
    <td>Copy one structure to another</td>
</tr>

<tr>
    <td>Nested Structure</td>
    <td>Structure inside structure</td>
</tr>

<tr>
    <td>Structure and Function</td>
    <td>Pass structure to function</td>
</tr>

<tr>
    <td>Array of Structures</td>
    <td>Array containing structure variables</td>
</tr>

<tr>
    <td>Structure Containing Arrays</td>
    <td>Array as structure member</td>
</tr>

</table>

<hr>

<h3>Important Exam Points</h3>

<ul>
    <li>Structures can store different data types together.</li>
    <li>Members are accessed using dot (.) operator.</li>
    <li>Structures support initialization and assignment.</li>
    <li>Structures can contain arrays.</li>
    <li>Structures can be nested.</li>
    <li>Structures can be passed to functions.</li>
    <li>Arrays of structures are used to store multiple records.</li>
</ul>

`;

let unionContent = `

<h3>Unions in C Language</h3>

<p>
A Union is a user-defined data type in C that allows different data types to be stored
in the same memory location. It is similar to a Structure, but the main difference is that
all members of a union share the same memory location.
</p>

<p>
In a structure, each member gets separate memory, while in a union, all members use
the same memory space. Therefore, at any given time, only one member can contain a valid value.
</p>

<hr>

<h3>Why Do We Use Unions?</h3>

<ul>
    <li>To save memory.</li>
    <li>To store different types of data in the same memory location.</li>
    <li>Useful when only one member is required at a time.</li>
    <li>Commonly used in embedded systems and hardware programming.</li>
</ul>

<hr>

<h3>Difference Between Structure and Union</h3>

<table class = "notes-table">

<tr>
    <th>Structure</th>
    <th>Union</th>
</tr>

<tr>
    <td>Each member has its own memory.</td>
    <td>All members share the same memory.</td>
</tr>

<tr>
    <td>Multiple members can store values simultaneously.</td>
    <td>Only one member should contain a valid value at a time.</td>
</tr>

<tr>
    <td>Requires more memory.</td>
    <td>Requires less memory.</td>
</tr>

<tr>
    <td>Size is the sum of all members.</td>
    <td>Size is equal to the largest member.</td>
</tr>

</table>

<hr>

<h3>Syntax of Union</h3>

<pre>
union union_name
{
    data_type member1;
    data_type member2;
    data_type member3;
};
</pre>

<h4>Example</h4>

<pre>
union Student
{
    int rollNo;
    float marks;
    char grade;
};
</pre>

<hr>

<h3>Union Variables</h3>

<p>
After creating a union, we need a union variable to store data.
</p>

<h4>Method 1</h4>

<pre>
union Student
{
    int rollNo;
    float marks;
};

union Student s1;
</pre>

<h4>Method 2</h4>

<pre>
union Student
{
    int rollNo;
    float marks;
} s1, s2;
</pre>

<hr>

<h3>Accessing Union Members</h3>

<p>
The dot (.) operator is used to access union members.
</p>

<h4>Example</h4>

<pre>
#include <stdio.h>

union Student
{
    int rollNo;
};

int main()
{
    union Student s1;

    s1.rollNo = 101;

    printf("Roll No = %d", s1.rollNo);

    return 0;
}
</pre>

<hr>

<h3>Union Initialization</h3>

<p>
A union can be initialized during declaration.
Only the first member is initialized directly.
</p>

<h4>Example</h4>

<pre>
#include <stdio.h>

union Data
{
    int num;
    float price;
};

int main()
{
    union Data d = {100};

    printf("Number = %d", d.num);

    return 0;
}
</pre>

<hr>

<h3>Understanding Shared Memory</h3>

<p>
All members of a union share the same memory location.
When one member's value changes, the previous member's value is overwritten.
</p>

<h4>Example</h4>

<pre>
#include <stdio.h>

union Data
{
    int num;
    float price;
};

int main()
{
    union Data d;

    d.num = 100;

    printf("Number = %d\\n", d.num);

    d.price = 99.5;

    printf("Price = %.2f\\n", d.price);

    printf("Number After Storing Price = %d", d.num);

    return 0;
}
</pre>

<h4>Explanation</h4>

<ul>
    <li>First, num stores 100.</li>
    <li>Then, price stores 99.5.</li>
    <li>Since both share the same memory, the value of num is overwritten.</li>
</ul>

<hr>

<h3>Size of Union</h3>

<p>
The size of a union is equal to the size of its largest member.
</p>

<h4>Example</h4>

<pre>
#include <stdio.h>

union Data
{
    int num;
    float marks;
    char grade;
};

int main()
{
    printf("Size = %lu", sizeof(union Data));

    return 0;
}
</pre>

<h4>Explanation</h4>

<p>
If int = 4 bytes, float = 4 bytes, and char = 1 byte,
then the union size will be 4 bytes because the largest member is 4 bytes.
</p>

<hr>

<h3>Union with User Input</h3>

<h4>Example</h4>

<pre>
#include <stdio.h>

union Data
{
    int num;
};

int main()
{
    union Data d;

    printf("Enter Number: ");
    scanf("%d", &d.num);

    printf("You Entered = %d", d.num);

    return 0;
}
</pre>

<hr>

<h3>Array of Unions</h3>

<p>
An array can store multiple union variables.
</p>

<h4>Example</h4>

<pre>
#include <stdio.h>

union Student
{
    int rollNo;
};

int main()
{
    union Student s[3];

    for(int i = 0; i < 3; i++)
    {
        printf("Enter Roll No: ");
        scanf("%d", &s[i].rollNo);
    }

    printf("\\nStudent Details\\n");

    for(int i = 0; i < 3; i++)
    {
        printf("Roll No = %d\\n", s[i].rollNo);
    }

    return 0;
}
</pre>

<hr>

<h3>Union Inside Structure</h3>

<p>
A union can be used as a member of a structure.
</p>

<h4>Example</h4>

<pre>
#include <stdio.h>

union Data
{
    int num;
    float marks;
};

struct Student
{
    int rollNo;
    union Data info;
};

int main()
{
    struct Student s1;

    s1.rollNo = 101;
    s1.info.marks = 88.5;

    printf("Roll No = %d\\n", s1.rollNo);
    printf("Marks = %.2f", s1.info.marks);

    return 0;
}
</pre>

<hr>

<h3>Union and Functions</h3>

<p>
Union variables can be passed to functions.
</p>

<h4>Example</h4>

<pre>
#include <stdio.h>

union Data
{
    int num;
};

void display(union Data d)
{
    printf("Number = %d", d.num);
}

int main()
{
    union Data d;

    d.num = 500;

    display(d);

    return 0;
}
</pre>

<hr>

<h3>Real Life Example of Union</h3>

<p>
Suppose a student can have either marks or grade stored at a time.
Using a union helps save memory because only one value is needed at a time.
</p>

<pre>
#include <stdio.h>

union Result
{
    float marks;
    char grade;
};

int main()
{
    union Result r;

    r.marks = 89.5;

    printf("Marks = %.2f", r.marks);

    return 0;
}
</pre>

<hr>

<h3>Advantages of Union</h3>

<ul>
    <li>Saves memory.</li>
    <li>Efficient memory utilization.</li>
    <li>Useful when only one data member is needed at a time.</li>
    <li>Widely used in system programming.</li>
</ul>

<hr>

<h3>Disadvantages of Union</h3>

<ul>
    <li>Only one member can hold a valid value at a time.</li>
    <li>Changing one member affects all other members.</li>
    <li>Can be confusing for beginners.</li>
</ul>

<hr>

<h3>Frequently Asked Exam Questions</h3>

<h4>What is a Union?</h4>

<p>
A Union is a user-defined data type in which all members share the same memory location.
</p>

<h4>What is the Main Difference Between Structure and Union?</h4>

<p>
In a structure, each member gets separate memory, while in a union, all members share the same memory.
</p>

<h4>Why Are Unions Used?</h4>

<p>
Unions are used to save memory when only one member is required at a time.
</p>

<h4>How Is the Size of a Union Calculated?</h4>

<p>
The size of a union is equal to the size of its largest member.
</p>

<h4>Can a Union Be Passed to a Function?</h4>

<p>
Yes, union variables can be passed to functions just like structure variables.
</p>

<hr>

<h3>Quick Revision Table</h3>

<table class ="notes-table">

<tr>
    <th>Topic</th>
    <th>Description</th>
</tr>

<tr>
    <td>Union</td>
    <td>User-defined data type</td>
</tr>

<tr>
    <td>Memory</td>
    <td>Shared by all members</td>
</tr>

<tr>
    <td>Access Operator</td>
    <td>Dot (.) operator</td>
</tr>

<tr>
    <td>Initialization</td>
    <td>Possible during declaration</td>
</tr>

<tr>
    <td>Array of Unions</td>
    <td>Array storing union variables</td>
</tr>

<tr>
    <td>Union and Function</td>
    <td>Can be passed to functions</td>
</tr>

<tr>
    <td>Union Inside Structure</td>
    <td>Union can be a structure member</td>
</tr>

<tr>
    <td>Size of Union</td>
    <td>Size of largest member</td>
</tr>

</table>

<hr>

<h3>Important Exam Points</h3>

<ul>
    <li>Union is a user-defined data type.</li>
    <li>All members share the same memory location.</li>
    <li>Only one member should contain a valid value at a time.</li>
    <li>Union size equals the size of the largest member.</li>
    <li>Unions are memory efficient.</li>
    <li>Dot (.) operator is used to access union members.</li>
    <li>Union variables can be passed to functions.</li>
    <li>A union can be used inside a structure.</li>
</ul>

`;

let fileHandlingContent = `

<h3>File Handling in C Language</h3>

<p>
File Handling in C is used to store data permanently in a file. Normally, data stored in variables is lost when the program ends. Files help us save data permanently so that it can be used later.
</p>

<p>
File handling allows us to create, open, read, write, update, and close files.
</p>

<hr>

<h3>Why Do We Use Files?</h3>

<ul>
    <li>To store data permanently.</li>
    <li>To retrieve data whenever required.</li>
    <li>To avoid losing data after program execution.</li>
    <li>To manage large amounts of information.</li>
    <li>To create applications like Student Management Systems.</li>
</ul>

<hr>

<h3>Concept of Files</h3>

<p>
A file is a collection of related data stored on a storage device such as a hard disk, SSD, or pen drive.
</p>

<p>
In C language, files are handled using the <b>FILE</b> structure and file pointers.
</p>

<h4>File Pointer</h4>

<pre>
FILE *fp;
</pre>

<p>
A file pointer is used to access and manipulate a file.
</p>

<hr>

<h3>Steps in File Handling</h3>

<ol>
    <li>Create a file pointer.</li>
    <li>Open the file.</li>
    <li>Perform read/write operations.</li>
    <li>Close the file.</li>
</ol>

<hr>

<h3>Opening a File</h3>

<p>
The fopen() function is used to open a file.
</p>

<h4>Syntax</h4>

<pre>
FILE *fp;

fp = fopen("filename","mode");
</pre>

<hr>

<h3>File Opening Modes</h3>

<table class ="notes-table">

<tr>
    <th>Mode</th>
    <th>Description</th>
</tr>

<tr>
    <td>r</td>
    <td>Open file for reading</td>
</tr>

<tr>
    <td>w</td>
    <td>Open file for writing</td>
</tr>

<tr>
    <td>a</td>
    <td>Open file for appending</td>
</tr>

<tr>
    <td>r+</td>
    <td>Read and write</td>
</tr>

<tr>
    <td>w+</td>
    <td>Read and write (old data deleted)</td>
</tr>

<tr>
    <td>a+</td>
    <td>Read and append</td>
</tr>

</table>

<hr>

<h3>Closing a File</h3>

<p>
The fclose() function is used to close a file.
</p>

<h4>Syntax</h4>

<pre>
fclose(fp);
</pre>

<h4>Example</h4>

<pre>
FILE *fp;

fp = fopen("data.txt","r");

fclose(fp);
</pre>

<hr>

<h3>Writing Data into a File</h3>

<p>
The fprintf() function is used to write formatted data into a file.
</p>

<h4>Syntax</h4>

<pre>
fprintf(fp,"format",variables);
</pre>

<h4>Example: Write Student Information</h4>

<pre>
#include <stdio.h>

int main()
{
    FILE *fp;

    fp = fopen("student.txt","w");

    fprintf(fp,"Roll No = 101\\n");
    fprintf(fp,"Name = Pradeep\\n");
    fprintf(fp,"Marks = 89");

    fclose(fp);

    printf("Data Written Successfully");

    return 0;
}
</pre>

<hr>

<h3>Writing User Input into a File</h3>

<h4>Example</h4>

<pre>
#include <stdio.h>

int main()
{
    FILE *fp;

    char name[50];

    fp = fopen("student.txt","w");

    printf("Enter Name: ");
    scanf("%s", name);

    fprintf(fp,"%s", name);

    fclose(fp);

    printf("Data Saved Successfully");

    return 0;
}
</pre>

<hr>

<h3>Reading Data from a File</h3>

<p>
The fscanf() function is used to read formatted data from a file.
</p>

<h4>Syntax</h4>

<pre>
fscanf(fp,"format",variables);
</pre>

<h4>Example</h4>

<pre>
#include <stdio.h>

int main()
{
    FILE *fp;

    char name[50];

    fp = fopen("student.txt","r");

    fscanf(fp,"%s", name);

    printf("Name = %s", name);

    fclose(fp);

    return 0;
}
</pre>

<hr>

<h3>Reading Character by Character</h3>

<p>
The fgetc() function reads one character at a time.
</p>

<h4>Example</h4>

<pre>
#include <stdio.h>

int main()
{
    FILE *fp;

    char ch;

    fp = fopen("student.txt","r");

    while((ch = fgetc(fp)) != EOF)
    {
        printf("%c", ch);
    }

    fclose(fp);

    return 0;
}
</pre>

<hr>

<h3>Writing Character by Character</h3>

<p>
The fputc() function writes one character at a time.
</p>

<h4>Example</h4>

<pre>
#include <stdio.h>

int main()
{
    FILE *fp;

    fp = fopen("data.txt","w");

    fputc('A', fp);
    fputc('B', fp);
    fputc('C', fp);

    fclose(fp);

    return 0;
}
</pre>

<hr>

<h3>Reading a Complete Line</h3>

<p>
The fgets() function reads a complete line from a file.
</p>

<h4>Example</h4>

<pre>
#include <stdio.h>

int main()
{
    FILE *fp;

    char str[100];

    fp = fopen("data.txt","r");

    fgets(str,100,fp);

    printf("%s", str);

    fclose(fp);

    return 0;
}
</pre>

<hr>

<h3>Writing a Complete Line</h3>

<p>
The fputs() function writes a complete string into a file.
</p>

<h4>Example</h4>

<pre>
#include <stdio.h>

int main()
{
    FILE *fp;

    fp = fopen("data.txt","w");

    fputs("Welcome to File Handling", fp);

    fclose(fp);

    return 0;
}
</pre>

<hr>

<h3>Appending Data to a File</h3>

<p>
Append mode adds new data at the end of the file without deleting old data.
</p>

<h4>Example</h4>

<pre>
#include <stdio.h>

int main()
{
    FILE *fp;

    fp = fopen("student.txt","a");

    fprintf(fp,"\\nNew Record Added");

    fclose(fp);

    return 0;
}
</pre>

<hr>

<h3>Dynamic Accessing of File</h3>

<p>
Dynamic Accessing means moving the file pointer to any position in a file for reading or writing data.
</p>

<p>
This is also called Random Access in files.
</p>

<hr>

<h3>fseek() Function</h3>

<p>
Used to move the file pointer to a specified position.
</p>

<h4>Syntax</h4>

<pre>
fseek(fp, offset, position);
</pre>

<h4>Position Values</h4>

<table class = "notes-table">

<tr>
    <th>Constant</th>
    <th>Description</th>
</tr>

<tr>
    <td>SEEK_SET</td>
    <td>Beginning of file</td>
</tr>

<tr>
    <td>SEEK_CUR</td>
    <td>Current position</td>
</tr>

<tr>
    <td>SEEK_END</td>
    <td>End of file</td>
</tr>

</table>

<h4>Example</h4>

<pre>
#include <stdio.h>

int main()
{
    FILE *fp;

    char ch;

    fp = fopen("data.txt","r");

    fseek(fp, 5, SEEK_SET);

    ch = fgetc(fp);

    printf("%c", ch);

    fclose(fp);

    return 0;
}
</pre>

<hr>

<h3>ftell() Function</h3>

<p>
Returns the current position of the file pointer.
</p>

<h4>Example</h4>

<pre>
#include <stdio.h>

int main()
{
    FILE *fp;

    fp = fopen("data.txt","r");

    printf("%ld", ftell(fp));

    fclose(fp);

    return 0;
}
</pre>

<hr>

<h3>rewind() Function</h3>

<p>
Moves the file pointer back to the beginning of the file.
</p>

<h4>Example</h4>

<pre>
#include <stdio.h>

int main()
{
    FILE *fp;

    fp = fopen("data.txt","r");

    fseek(fp,10,SEEK_SET);

    rewind(fp);

    printf("%ld", ftell(fp));

    fclose(fp);

    return 0;
}
</pre>

<hr>

<h3>File Copy Program</h3>

<h4>Example</h4>

<pre>
#include <stdio.h>

int main()
{
    FILE *source;
    FILE *destination;

    char ch;

    source = fopen("source.txt","r");

    destination = fopen("destination.txt","w");

    while((ch = fgetc(source)) != EOF)
    {
        fputc(ch,destination);
    }

    fclose(source);
    fclose(destination);

    printf("File Copied Successfully");

    return 0;
}
</pre>

<hr>

<h3>Advantages of File Handling</h3>

<ul>
    <li>Provides permanent storage.</li>
    <li>Stores large amounts of data.</li>
    <li>Data can be reused later.</li>
    <li>Useful for database-like applications.</li>
    <li>Supports reading and writing operations.</li>
</ul>

<hr>

<h3>Disadvantages of File Handling</h3>

<ul>
    <li>File operations are slower than memory operations.</li>
    <li>Requires proper file management.</li>
    <li>Errors may occur if files are not closed properly.</li>
</ul>

<hr>

<h3>Frequently Asked Exam Questions</h3>

<h4>What is File Handling?</h4>

<p>
File handling is the process of storing, reading, writing, and managing data in files.
</p>

<h4>What is a File Pointer?</h4>

<p>
A file pointer is a pointer of type FILE used to access a file.
</p>

<h4>What is fopen()?</h4>

<p>
fopen() is used to open a file in a specified mode.
</p>

<h4>What is fclose()?</h4>

<p>
fclose() is used to close an opened file.
</p>

<h4>What is Dynamic Accessing of File?</h4>

<p>
Dynamic Accessing or Random Access allows moving directly to any position in a file using functions like fseek(), ftell(), and rewind().
</p>

<hr>

<h3>Quick Revision Table</h3>

<table class = "notes-table">

<tr>
    <th>Function</th>
    <th>Purpose</th>
</tr>

<tr>
    <td>fopen()</td>
    <td>Open a file</td>
</tr>

<tr>
    <td>fclose()</td>
    <td>Close a file</td>
</tr>

<tr>
    <td>fprintf()</td>
    <td>Write formatted data</td>
</tr>

<tr>
    <td>fscanf()</td>
    <td>Read formatted data</td>
</tr>

<tr>
    <td>fgetc()</td>
    <td>Read character</td>
</tr>

<tr>
    <td>fputc()</td>
    <td>Write character</td>
</tr>

<tr>
    <td>fgets()</td>
    <td>Read string</td>
</tr>

<tr>
    <td>fputs()</td>
    <td>Write string</td>
</tr>

<tr>
    <td>fseek()</td>
    <td>Move file pointer</td>
</tr>

<tr>
    <td>ftell()</td>
    <td>Current position</td>
</tr>

<tr>
    <td>rewind()</td>
    <td>Move to beginning</td>
</tr>

</table>

<hr>

<h3>Important Exam Points</h3>

<ul>
    <li>FILE *fp is used for file handling.</li>
    <li>Always close files using fclose().</li>
    <li>Use "r" for reading and "w" for writing.</li>
    <li>Use "a" mode to append data.</li>
    <li>fseek(), ftell(), and rewind() are used for dynamic file access.</li>
    <li>EOF indicates End Of File.</li>
    <li>File handling provides permanent storage.</li>
</ul>

`;