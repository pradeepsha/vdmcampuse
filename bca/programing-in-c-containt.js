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
    <li>C is a case-sensitive language.</li>
    <li>Every statement ends with a semicolon (;).</li>
    <li>The main() function is the entry point of a C program.</li>
    <li>C programs are compiled before execution.</li>
    <li>C supports functions, arrays, pointers, structures, and file handling.</li>
    <li>Every C program starts execution from the <strong>main()</strong> function.</li>
    <li><strong>stdio.h</strong> is required for input and output functions.</li>
    <li><strong>printf()</strong> is used to display output.</li>
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

<h4>Flowchart Symbols</h4>

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

<div class="code-box">

    <div class="code-title">
        <span>Example</span>
    </div>

<pre><code>
int age = 20;
float salary = 25000.50;
char grade = 'A';
</code></pre>

</div>

<h4>Classification of Data Types in C</h4>
<img src="bca_images/data-type.png" alt="data type" class="notes_img" >

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

<div class="code-box">

    <div class="code-title">
        <span>Program: Integer Data Type</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="comment">// Integer variables</span>
    <span class="datatype">int</span> age <span class="symbol">=</span> 20<span class="symbol">;</span>
    <span class="datatype">int</span> marks <span class="symbol">=</span> 95<span class="symbol">;</span>
    <span class="datatype">int</span> temperature <span class="symbol">=</span> -5<span class="symbol">;</span>

    <span class="comment">// Display values</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Age = %d"</span><span class="symbol">,</span> age<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Marks = %d"</span><span class="symbol">,</span> marks<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Temperature = %d"</span><span class="symbol">,</span> temperature<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>


<h3>Float Data Type (<span class="keyword">float</span>)</h3>

<p>
    The <span class="keyword">float</span> data type is used to store <b>decimal (floating-point)</b> numbers.
    It is commonly used when a value contains digits after the decimal point.
</p>

<p><b>Examples of Float Values:</b></p>

<div class="code-box">

    <div class="code-title">
        <span>Float Values</span>
    </div>

<pre><code>
10.5
-25.75
0.0
99.99
3.1416
</code></pre>

</div>

<p><b>Program: Float Data Type</b></p>

<div class="code-box">

    <div class="code-title">
        <span>Program: Float Data Type</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="comment">// Float variables</span>
    <span class="datatype">float</span> price <span class="symbol">=</span> 250.75<span class="symbol">;</span>
    <span class="datatype">float</span> height <span class="symbol">=</span> 5.8<span class="symbol">;</span>
    <span class="datatype">float</span> temperature <span class="symbol">=</span> -12.5<span class="symbol">;</span>

    <span class="comment">// Display values</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Price = %.2f"</span><span class="symbol">,</span> price<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Height = %.1f"</span><span class="symbol">,</span> height<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Temperature = %.1f"</span><span class="symbol">,</span> temperature<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>
Price = 250.75
Height = 5.8
Temperature = -12.5
</code></pre>

</div>

<h4>Key Points</h4>

<table class="notes-table">
    <tr>
        <th>Property</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>Keyword</td>
        <td><code>float</code></td>
    </tr>
    <tr>
        <td>Stores</td>
        <td>Decimal (Floating-point) Numbers</td>
    </tr>
    <tr>
        <td>Decimal Values</td>
        <td>✔ Allowed</td>
    </tr>
    <tr>
        <td>Positive Values</td>
        <td>✔ Allowed</td>
    </tr>
    <tr>
        <td>Negative Values</td>
        <td>✔ Allowed</td>
    </tr>
    <tr>
        <td>Default Size</td>
        <td>Usually 4 Bytes (Compiler Dependent)</td>
    </tr>
    <tr>
        <td>Precision</td>
        <td>Approximately 6–7 Decimal Digits</td>
    </tr>
    <tr>
        <td>Format Specifier</td>
        <td><code>%f</code></td>
    </tr>
</table>

<p>
    <b>Note:</b> The <code>float</code> data type is suitable for storing decimal numbers with moderate precision. For higher precision, use the <code>double</code> data type.
</p>

<h3>Double Data Type (<span class="keyword">double</span>)</h3>

<p>
    The <span class="keyword">double</span> data type is used to store <b>decimal (floating-point)</b> numbers with
    <b>higher precision</b> than the <span class="keyword">float</span> data type.
    It is commonly used in scientific calculations and applications where greater accuracy is required.
</p>

<p><b>Examples of Double Values:</b></p>

<div class="code-box">

    <div class="code-title">
        <span>Double Values</span>
    </div>

<pre><code>
3.1415926535
25000.987654
-45.678912
0.000001
123456.789123
</code></pre>

</div>

<div class="code-box">

    <div class="code-title">
        <span>Program: Double Data Type</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="comment">// Double variables</span>
    <span class="datatype">double</span> pi <span class="symbol">=</span> 3.1415926535<span class="symbol">;</span>
    <span class="datatype">double</span> salary <span class="symbol">=</span> 25000.987654<span class="symbol">;</span>
    <span class="datatype">double</span> temperature <span class="symbol">=</span> -45.678912<span class="symbol">;</span>

    <span class="comment">// Display values</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Pi = %lf"</span><span class="symbol">,</span> pi<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Salary = %lf"</span><span class="symbol">,</span> salary<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Temperature = %lf"</span><span class="symbol">,</span> temperature<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>
Pi = 3.141593
Salary = 25000.987654
Temperature = -45.678912
</code></pre>

</div>

<h4>Key Points</h4>

<table class="notes-table">
    <tr>
        <th>Property</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>Keyword</td>
        <td><code>double</code></td>
    </tr>
    <tr>
        <td>Stores</td>
        <td>Decimal (Floating-point) Numbers</td>
    </tr>
    <tr>
        <td>Decimal Values</td>
        <td>✔ Allowed</td>
    </tr>
    <tr>
        <td>Positive Values</td>
        <td>✔ Allowed</td>
    </tr>
    <tr>
        <td>Negative Values</td>
        <td>✔ Allowed</td>
    </tr>
    <tr>
        <td>Default Size</td>
        <td>Usually 8 Bytes (Compiler Dependent)</td>
    </tr>
    <tr>
        <td>Precision</td>
        <td>Approximately 15–16 Decimal Digits</td>
    </tr>
    <tr>
        <td>Format Specifier</td>
        <td><code>%lf</code></td>
    </tr>
</table>

<p>
    <b>Note:</b> The <code>double</code> data type provides higher precision than <code>float</code>. It is preferred when calculations require more accurate decimal values.
</p>

<h3>Character Data Type (<span class="keyword">char</span>)</h3>

<p>
    The <span class="keyword">char</span> data type is used to store a <b>single character</b>, such as a letter, digit,
    or special symbol. A character value must always be enclosed in <b>single quotes (' ')</b>.
</p>

<p><b>Examples of Character Values:</b></p>

<div class="code-box">

    <div class="code-title">
        <span>Character Values</span>
    </div>

<pre><code>
'A'
'Z'
'a'
'5'
'#'
</code></pre>

</div>

<p><b>Program: Character Data Type</b></p>

<div class="code-box">

    <div class="code-title">
        <span>Program: Character Data Type</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="comment">// Character variables</span>
    <span class="datatype">char</span> grade <span class="symbol">=</span> <span class="string">'A'</span><span class="symbol">;</span>
    <span class="datatype">char</span> gender <span class="symbol">=</span> <span class="string">'M'</span><span class="symbol">;</span>
    <span class="datatype">char</span> symbol <span class="symbol">=</span> <span class="string">'#'</span><span class="symbol">;</span>

    <span class="comment">// Display values</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Grade = %c"</span><span class="symbol">,</span> grade<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Gender = %c"</span><span class="symbol">,</span> gender<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Symbol = %c"</span><span class="symbol">,</span> symbol<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>
Grade = A
Gender = M
Symbol = #
</code></pre>

</div>

<h4>Key Points</h4>

<table class="notes-table">
    <tr>
        <th>Property</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>Keyword</td>
        <td><code>char</code></td>
    </tr>
    <tr>
        <td>Stores</td>
        <td>A Single Character</td>
    </tr>
    <tr>
        <td>Value Enclosed In</td>
        <td>Single Quotes (<code>' '</code>)</td>
    </tr>
    <tr>
        <td>Examples</td>
        <td><code>'A'</code>, <code>'5'</code>, <code>'#'</code></td>
    </tr>
    <tr>
        <td>Default Size</td>
        <td>1 Byte</td>
    </tr>
    <tr>
        <td>ASCII Support</td>
        <td>Stores ASCII character values internally</td>
    </tr>
    <tr>
        <td>Format Specifier</td>
        <td><code>%c</code></td>
    </tr>
</table>

<p>
    <b>Note:</b> The <code>char</code> data type can store only <b>one character at a time</b>. To store multiple characters or words, use a <code>char</code> array (string).
</p>

<h4>2. Derived Data Types</h4>

<p>
Derived data types are created from basic data types.
</p>

<ul>
<li>Array</li>
<li>Pointer</li>
<li>Function</li>
</ul>


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


<h3>Void Data Type (<span class="keyword">void</span>)</h3>

<p>
    The <span class="keyword">void</span> data type represents the <b>absence of a value</b>. It means that no data is
    returned or stored. The <span class="keyword">void</span> data type is mainly used with functions and pointers.
</p>

<p><b>Common Uses of <code>void</code>:</b></p>

<ul>
    <li>A function that does not return any value.</li>
    <li>A function that does not accept any arguments.</li>
    <li>A generic pointer (<code>void *</code>) that can point to any data type.</li>
</ul>

<p><b>Program: Function Returning No Value</b></p>

<div class="code-box">

    <div class="code-title">
        <span>Program: Void Data Type</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">void</span> <span class="function">displayMessage</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Welcome to C Programming!"</span><span class="symbol">);</span>
<span class="symbol">}</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="function">displayMessage</span><span class="symbol">();</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>
Welcome to C Programming!
</code></pre>

</div>

<h4>Key Points</h4>

<table class="notes-table">
    <tr>
        <th>Property</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>Keyword</td>
        <td><code>void</code></td>
    </tr>
    <tr>
        <td>Represents</td>
        <td>No Value / Empty Data Type</td>
    </tr>
    <tr>
        <td>Used With</td>
        <td>Functions and Pointers</td>
    </tr>
    <tr>
        <td>Return Value</td>
        <td>Does Not Return Any Value</td>
    </tr>
    <tr>
        <td>Function Parameters</td>
        <td><code>void</code> indicates that a function takes no arguments.</td>
    </tr>
    <tr>
        <td>Void Pointer</td>
        <td><code>void *</code> can store the address of any data type.</td>
    </tr>
</table>

<p>
    <b>Note:</b> The <code>void</code> data type does not store any value. It is mainly used when a function does not return a value or when creating a generic pointer (<code>void *</code>).
</p>


<h4>Type Modifiers in C</h4>

<p>
Type modifiers are special keywords that are used to <b>modify the size, range, or sign</b> of basic data types. They allow a program to store larger values, smaller values, or only positive values, depending on the requirement.
</p>

<p>The four type modifiers available in C are:</p>

<ul>
    <li><b>short</b></li>
    <li><b>long</b></li>
    <li><b>signed</b></li>
    <li><b>unsigned</b></li>
</ul>

<h4>Type Modifiers with Data Types</h4>

<table class="notes-table">
    <tr>
        <th>Modifier</th>
        <th>Common Data Type</th>
        <th>Example</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>short</code></td>
        <td>int</td>
        <td><code>short int age;</code></td>
        <td>Stores small integer values.</td>
    </tr>
    <tr>
        <td><code>long</code></td>
        <td>int, double</td>
        <td><code>long int population;</code></td>
        <td>Stores larger values than the normal data type.</td>
    </tr>
    <tr>
        <td><code>signed</code></td>
        <td>int, char</td>
        <td><code>signed int temperature;</code></td>
        <td>Stores both positive and negative values.</td>
    </tr>
    <tr>
        <td><code>unsigned</code></td>
        <td>int, char</td>
        <td><code>unsigned int marks;</code></td>
        <td>Stores only non-negative (positive) values.</td>
    </tr>
</table>

<p>
<b>Note:</b> Type modifiers cannot be used with every data type. They are mainly used with
<code>int</code>, <code>char</code>, and <code>double</code> (only <code>long double</code>).
</p>

<hr>

<h4>1. <span class="keyword">short</span> Modifier</h4>

<p>
The <b>short</b> modifier is used when the values to be stored are small. It uses less memory than a normal <code>int</code> on most systems.
</p>

<p>
In C, <code>short</code> is the short form of <code>short int</code>. Therefore, both declarations are exactly the same:
</p>

<pre class="notes_text_pre">
short int a = 5;
short a = 5;
</pre>

<p>
Both statements create a variable named <code>a</code> of type <code>short int</code> and initialize it with the value <code>5</code>.
</p>

<h4>Format Specifier for <code>short</code></h4>

<p>
The correct format specifier for a <code>short</code> or <code>short int</code> variable is <code>%hd</code>.
</p>

<table class="notes-table">
    <tr>
        <th>Specifier</th>
        <th>Meaning</th>
    </tr>
    <tr>
        <td><code>%</code></td>
        <td>Indicates the beginning of a format specifier.</td>
    </tr>
    <tr>
        <td><code>h</code></td>
        <td>Represents a <code>short</code> integer.</td>
    </tr>
    <tr>
        <td><code>d</code></td>
        <td>Displays a signed decimal integer.</td>
    </tr>
</table>

<p>
Therefore, <code>%hd</code> is the correct format specifier for variables of type <code>short</code> or <code>short int</code>.
</p>

<pre class="notes_text_pre">
short age = 20;

printf("Age = %hd", age);
</pre>

<p>
<b>Note:</b> Although <code>%d</code> also prints a <code>short</code> value correctly in <code>printf()</code> because of <b>integer promotion</b>, beginners should use <code>%hd</code> as it is the correct format specifier for the <code>short</code> data type.
</p>



<h4>Example</h4>

<div class="code-box">

    <div class="code-title">
        <span>short Modifier</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="comment">// Both declarations are the same</span>
    <span class="datatype">short int</span> students <span class="symbol">=</span> 60<span class="symbol">;</span>
    <span class="datatype">short</span> marks <span class="symbol">=</span> 95<span class="symbol">;</span>

    <span class="comment">// Display the values</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Students = %hd"</span><span class="symbol">,</span> students<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Marks = %hd"</span><span class="symbol">,</span> marks<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>
Number of Students = 60
</code></pre>

</div>

<p>
<b>Explanation:</b> Here, <code>short int</code> is used because the number of students is small. It is a good choice for storing small integer values and can save memory compared to a normal <code>int</code> on some systems.
</p>


<hr>

<h4>2. <span class="keyword">long</span> Modifier</h4>

<p>
The <b>long</b> modifier is used when very large values need to be stored.
</p>

<h4>Example</h4>

<p>
The <b>long</b> modifier is used to store very large integer values. It provides a larger range than a normal <code>int</code>.
</p>

<div class="code-box">

    <div class="code-title">
        <span> long Modifier</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="comment">// Long integer variable</span>
    <span class="datatype">long int</span> population <span class="symbol">=</span> 1420000000<span class="symbol">;</span>

    <span class="comment">// Display the value</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Population = %ld"</span><span class="symbol">,</span> population<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>
Population = 1420000000
</code></pre>

</div>

<p>
<b>Explanation:</b> Here, <code>long int</code> is used because the population of a country is a very large number. A <code>long int</code> can store larger integer values than a normal <code>int</code>, making it suitable for values such as population, distance, and large financial records.
</p>

<hr>

<h4>3. <span class="keyword">signed</span> Modifier</h4>

<p>
The <b>signed</b> modifier allows a variable to store both <b>positive</b> and <b>negative</b> values.
</p>

<p><b>Example:</b></p>

<p>
Temperature can be above or below zero. Therefore, a signed integer is suitable.
</p>

<div class="code-box">
<div class="code-title">
<span>Example</span>
</div>

<pre><code>signed int temperature = -15;</code></pre>

</div>

<hr>

<h4>4. <span class="keyword">unsigned</span> Modifier</h4>

<p>
The <b>unsigned</b> modifier allows only <b>zero and positive</b> values. Since negative values are not stored, the maximum positive range becomes larger.
</p>

<p><b>Example:</b></p>

<p>
The number of students in a class can never be negative. Therefore, <code>unsigned int</code> is a good choice.
</p>

<div class="code-box">
<div class="code-title">
<span>Example</span>
</div>

<pre><code>unsigned int students = 75;</code></pre>

</div>

<p>
<b>Remember:</b> Choose the modifier based on the type of data you want to store. This helps in using memory efficiently and storing values correctly.
</p>




<h4>Program Using Different Data Types</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: Format Specifiers Example</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> age <span class="symbol">=</span> <span class="number">20</span><span class="symbol">;</span>
    <span class="datatype">float</span> marks <span class="symbol">=</span> <span class="number">85.5</span><span class="symbol">;</span>
    <span class="datatype">double</span> salary <span class="symbol">=</span> <span class="number">25000.75</span><span class="symbol">;</span>
    <span class="datatype">char</span> grade <span class="symbol">=</span> <span class="character">'A'</span><span class="symbol">;</span>

    <span class="comment">// Display values using different format specifiers</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Age = %d\\n"</span><span class="symbol">,</span> age<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Marks = %.2f\\n"</span><span class="symbol">,</span> marks<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Salary = %lf\\n"</span><span class="symbol">,</span> salary<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Grade = %c\\n"</span><span class="symbol">,</span> grade<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Age = <span class="number">20</span>
Marks = <span class="number">85.50</span>
Salary = <span class="number">25000.750000</span>
Grade = <span class="character">A</span></code></pre>

</div>

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

const modifiers = `
<h3>Modifiers in Programming</h3>

<p>
A <b>modifier</b> is a keyword that changes the behavior, properties, or accessibility of a data type, variable, method, or class.
Modifiers do not create anything new. Instead, they modify the existing feature.
</p>

<p>
There are two main types of modifiers used in programming:
</p>

<table class="notes-table">
<tr>
<th>Modifier Type</th>
<th>Purpose</th>
<th>Examples</th>
</tr>

<tr>
<td><b>Type Modifiers</b></td>
<td>Modify the size, range, or storage of a data type.</td>
<td>short, long, signed, unsigned</td>
</tr>

<tr>
<td><b>Access Modifiers</b></td>
<td>Control who can access variables, methods, or classes.</td>
<td>public, private, protected</td>
</tr>
</table>

<div class="note">
<b>Note:</b> Different programming languages support different modifiers. For example, C mainly uses <b>Type Modifiers</b>, while languages like Java and C++ use both <b>Type Modifiers</b> and <b>Access Modifiers</b>.
</div>


<h3>1. Type Modifiers</h3>

<p>
Type modifiers are special keywords that are used to <b>modify the size, range, or sign</b> of basic data types. They allow a program to store larger values, smaller values, or only positive values, depending on the requirement.
</p>

<p>The four type modifiers available in C are:</p>

<ul>
    <li><b>short</b></li>
    <li><b>long</b></li>
    <li><b>signed</b></li>
    <li><b>unsigned</b></li>
</ul>

<h4>Type Modifiers with Data Types</h4>

<table class="notes-table">
    <tr>
        <th>Modifier</th>
        <th>Common Data Type</th>
        <th>Example</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>short</code></td>
        <td>int</td>
        <td><code>short int age;</code></td>
        <td>Stores small integer values.</td>
    </tr>
    <tr>
        <td><code>long</code></td>
        <td>int, double</td>
        <td><code>long int population;</code></td>
        <td>Stores larger values than the normal data type.</td>
    </tr>
    <tr>
        <td><code>signed</code></td>
        <td>int, char</td>
        <td><code>signed int temperature;</code></td>
        <td>Stores both positive and negative values.</td>
    </tr>
    <tr>
        <td><code>unsigned</code></td>
        <td>int, char</td>
        <td><code>unsigned int marks;</code></td>
        <td>Stores only non-negative (positive) values.</td>
    </tr>
</table>

<p>
<b>Note:</b> Type modifiers cannot be used with every data type. They are mainly used with
<code>int</code>, <code>char</code>, and <code>double</code> (only <code>long double</code>).
</p>

<hr>

<h4>1. <span class="keyword">short</span> Modifier</h4>

<p>
The <b>short</b> modifier is used when the values to be stored are small. It uses less memory than a normal <code>int</code> on most systems.
</p>

<p>
In C, <code>short</code> is the short form of <code>short int</code>. Therefore, both declarations are exactly the same:
</p>

<pre class="notes_text_pre">
short int a = 5;
short a = 5;
</pre>

<p>
Both statements create a variable named <code>a</code> of type <code>short int</code> and initialize it with the value <code>5</code>.
</p>

<h4>Format Specifier for <code>short</code></h4>

<p>
The correct format specifier for a <code>short</code> or <code>short int</code> variable is <code>%hd</code>.
</p>

<table class="notes-table">
    <tr>
        <th>Specifier</th>
        <th>Meaning</th>
    </tr>
    <tr>
        <td><code>%</code></td>
        <td>Indicates the beginning of a format specifier.</td>
    </tr>
    <tr>
        <td><code>h</code></td>
        <td>Represents a <code>short</code> integer.</td>
    </tr>
    <tr>
        <td><code>d</code></td>
        <td>Displays a signed decimal integer.</td>
    </tr>
</table>

<p>
Therefore, <code>%hd</code> is the correct format specifier for variables of type <code>short</code> or <code>short int</code>.
</p>

<pre class="notes_text_pre">
short age = 20;

printf("Age = %hd", age);
</pre>

<p>
<b>Note:</b> Although <code>%d</code> also prints a <code>short</code> value correctly in <code>printf()</code> because of <b>integer promotion</b>, beginners should use <code>%hd</code> as it is the correct format specifier for the <code>short</code> data type.
</p>



<h4>Example</h4>

<div class="code-box">

    <div class="code-title">
        <span>short Modifier</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="comment">// Both declarations are the same</span>
    <span class="datatype">short int</span> students <span class="symbol">=</span> 60<span class="symbol">;</span>
    <span class="datatype">short</span> marks <span class="symbol">=</span> 95<span class="symbol">;</span>

    <span class="comment">// Display the values</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Students = %hd"</span><span class="symbol">,</span> students<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Marks = %hd"</span><span class="symbol">,</span> marks<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>
Number of Students = 60
</code></pre>

</div>

<p>
<b>Explanation:</b> Here, <code>short int</code> is used because the number of students is small. It is a good choice for storing small integer values and can save memory compared to a normal <code>int</code> on some systems.
</p>


<h4>2. <span class="keyword">long</span> Modifier</h4>

<p>
The <b>long</b> modifier is used to store large integer values. It can hold much larger numbers than
a normal <code>int</code>, making it suitable for applications where the value may exceed the range of
an <code>int</code>. The exact size of a <code>long</code> depends on the compiler and operating system,
but it is always at least as large as an <code>int</code>.
</p>

<p>
In C, <code>long</code> is the short form of <code>long int</code>. Both declarations represent the
same data type, so the compiler treats them identically. You may use either form according to your
coding preference.
</p>

<pre class="notes_text_pre">
long int population = 1450000000;
long distance = 250000;
</pre>

<p>
In the above example, both variables are of type <code>long int</code>. The first declaration uses
the complete form, while the second uses the shorter keyword <code>long</code>. Both are exactly the
same.
</p>

<h4>Memory Size and Range</h4>

<p>
The size of a <code>long</code> data type depends on the compiler and operating system. On many modern
64-bit systems, it occupies <b>8 bytes</b>, while on many Windows compilers it occupies
<b>4 bytes</b>. The C standard guarantees that <code>long</code> is never smaller than
<code>int</code>.
</p>

<table class="notes-table">
<tr>
<th>Type</th>
<th>Typical Size</th>
<th>Typical Range</th>
</tr>

<tr>
<td><code>long</code></td>
<td>4 or 8 Bytes</td>
<td>Much larger than <code>int</code></td>
</tr>

<tr>
<td><code>unsigned long</code></td>
<td>4 or 8 Bytes</td>
<td>Stores only positive values</td>
</tr>

</table>

<p>
You can check the actual size of a <code>long</code> on your computer using the
<code>sizeof()</code> operator.
</p>

<pre class="notes_text_pre">
printf("%zu", sizeof(long));
</pre>

<h4>Why Use <code>long</code>?</h4>

<ul>
<li>It stores much larger integer values than <code>int</code>.</li>
<li>It helps prevent overflow when working with large numbers.</li>
<li>It is useful for scientific, financial, and engineering applications.</li>
<li>It is commonly used for storing large counts, distances, populations, and file sizes.</li>
<li>It provides better support for applications dealing with millions or billions of values.</li>
</ul>

<h4>When Should We Use <code>long</code>?</h4>

<p>
Use the <code>long</code> data type whenever an <code>int</code> may not be large enough to store the
required value.
</p>

<ul>
<li>Population of a country</li>
<li>Distance between planets</li>
<li>File sizes</li>
<li>Bank transaction IDs</li>
<li>Large product IDs</li>
<li>Scientific calculations</li>
</ul>

<p>
If even larger numbers are required, C also provides the
<code>long long</code> data type.
</p>

<h4>Format Specifier for <code>long</code></h4>

<p>
The correct format specifier for a variable of type <code>long</code> or
<code>long int</code> is <code>%ld</code>.
</p>

<table class="notes-table">

<tr>
<th>Specifier</th>
<th>Meaning</th>
</tr>

<tr>
<td><code>%</code></td>
<td>Indicates the beginning of a format specifier.</td>
</tr>

<tr>
<td><code>l</code></td>
<td>Represents a <code>long</code> integer.</td>
</tr>

<tr>
<td><code>d</code></td>
<td>Displays or reads a signed decimal integer.</td>
</tr>

</table>

<p>
Therefore, <code>%ld</code> is the correct format specifier for variables declared using
<code>long</code> or <code>long int</code>.
</p>

<pre class="notes_text_pre">
long population = 1450000000;

printf("Population = %ld\n", population);

scanf("%ld", &population);
</pre>

<p>
The first statement prints the value stored in the variable, while the second statement reads a
value from the keyboard.
</p>

<p>
<b>Note:</b> Beginners should always use <code>%ld</code> with a
<code>long</code> variable. Using the correct format specifier makes programs more readable and avoids
unexpected results.
</p>

<h4>Example</h4>

<div class="code-box">

<div class="code-title">
<span>long Modifier</span>
</div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">long int</span> population <span class="symbol">=</span> 1450000000<span class="symbol">;</span>
    <span class="datatype">long</span> distance <span class="symbol">=</span> 250000<span class="symbol">;</span>
    <span class="datatype">long</span> salary <span class="symbol">=</span> 850000<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Population = %ld\n"</span><span class="symbol">,</span> population<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Distance = %ld\n"</span><span class="symbol">,</span> distance<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Salary = %ld"</span><span class="symbol">,</span> salary<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

<div class="code-title">
<span>Output</span>
</div>

<pre><code>
Population = 1450000000
Distance = 250000
Salary = 850000
</code></pre>

</div>

<h4>Explanation</h4>

<p>
In this program, three variables are declared using the <code>long</code> data type. These variables
store values that can be much larger than those typically stored in an <code>int</code>. The
<code>printf()</code> function uses the <code>%ld</code> format specifier to display the values
correctly.
</p>

<p>
The example also demonstrates that <code>long</code> and <code>long int</code> are exactly the same
data type. The compiler treats both declarations identically, so programmers often use the shorter
keyword <code>long</code> because it is easier to read and write.
</p>

<p>
Whenever your program needs to store large integer values such as populations, file sizes, distances,
or transaction IDs, using the <code>long</code> data type is a better choice than
<code>int</code> because it provides a larger storage capacity and reduces the risk of integer
overflow.
</p>

<hr>

<h4>3. <span class="keyword">long long</span> Modifier</h4>

<p>
The <b>long long</b> modifier is used to store very large integer values. It provides a larger storage
capacity than both <code>int</code> and <code>long</code>. This data type is useful when your program
needs to work with numbers that are too large to fit into a normal <code>int</code> or
<code>long</code>.
</p>

<p>
In C, <code>long long</code> is the short form of <code>long long int</code>. Both declarations
represent exactly the same data type, so the compiler treats them identically.
</p>

<pre class="notes_text_pre">
long long int worldPopulation = 8200000000;
long long stars = 5000000000000;
</pre>

<p>
In the above example, both variables are of type <code>long long int</code>. The first declaration
uses the complete form, while the second uses the shorter keyword
<code>long long</code>. Both are exactly the same.
</p>

<h4>Memory Size and Range</h4>

<p>
A <code>long long</code> data type usually occupies <b>8 bytes (64 bits)</b> on most modern
computers. It can store extremely large integer values, making it suitable for scientific,
financial, and engineering applications.
</p>

<table class="notes-table">
<tr>
<th>Type</th>
<th>Typical Size</th>
<th>Typical Range</th>
</tr>

<tr>
<td><code>long long</code></td>
<td>8 Bytes</td>
<td>-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807</td>
</tr>

<tr>
<td><code>unsigned long long</code></td>
<td>8 Bytes</td>
<td>0 to 18,446,744,073,709,551,615</td>
</tr>

</table>

<p>
If your program needs to store numbers larger than a <code>long</code>, then
<code>long long</code> is the appropriate choice.
</p>

<h4>Why Use <code>long long</code>?</h4>

<ul>
<li>It stores extremely large integer values.</li>
<li>It greatly reduces the possibility of integer overflow.</li>
<li>It is useful for scientific and mathematical calculations.</li>
<li>It is commonly used in competitive programming.</li>
<li>It is suitable for large file sizes, timestamps, and astronomical values.</li>
</ul>

<h4>When Should We Use <code>long long</code>?</h4>

<p>
Use the <code>long long</code> data type whenever the required value cannot fit into an
<code>int</code> or <code>long</code>.
</p>

<ul>
<li>World population statistics</li>
<li>Distance between planets</li>
<li>Large database record IDs</li>
<li>Nanoseconds or milliseconds in time calculations</li>
<li>Scientific and engineering calculations</li>
<li>Very large counters in programs</li>
</ul>

<h4>Format Specifier for <code>long long</code></h4>

<p>
The correct format specifier for a variable of type
<code>long long</code> or <code>long long int</code> is
<code>%lld</code>.
</p>

<table class="notes-table">

<tr>
<th>Specifier</th>
<th>Meaning</th>
</tr>

<tr>
<td><code>%</code></td>
<td>Indicates the beginning of a format specifier.</td>
</tr>

<tr>
<td><code>ll</code></td>
<td>Represents a <code>long long</code> integer.</td>
</tr>

<tr>
<td><code>d</code></td>
<td>Displays or reads a signed decimal integer.</td>
</tr>

</table>

<p>
Therefore, <code>%lld</code> is the correct format specifier for variables of type
<code>long long</code>.
</p>

<pre class="notes_text_pre">
long long population = 8200000000;

printf("Population = %lld\n", population);

scanf("%lld", &population);
</pre>

<p>
The first statement prints the value stored in the variable, while the second statement reads a
value from the keyboard.
</p>

<p>
<b>Note:</b> Always use <code>%lld</code> with a <code>long long</code> variable.
Using <code>%d</code> or <code>%ld</code> may produce incorrect output because they are intended for
different integer types.
</p>

<h4>Example</h4>

<div class="code-box">

<div class="code-title">
<span>long long Modifier</span>
</div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">long long</span> worldPopulation <span class="symbol">=</span> 8200000000LL<span class="symbol">;</span>
    <span class="datatype">long long</span> stars <span class="symbol">=</span> 5000000000000LL<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"World Population = %lld\n"</span><span class="symbol">,</span> worldPopulation<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Stars = %lld"</span><span class="symbol">,</span> stars<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

<div class="code-title">
<span>Output</span>
</div>

<pre><code>
World Population = 8200000000
Stars = 5000000000000
</code></pre>

</div>

<h4>Explanation</h4>

<p>
In this program, the variables <code>worldPopulation</code> and <code>stars</code> are declared
using the <code>long long</code> data type because their values are much larger than what an
<code>int</code> can store. The <code>printf()</code> function uses the
<code>%lld</code> format specifier to display these large numbers correctly.
</p>

<p>
This example also shows that <code>long long</code> and
<code>long long int</code> are identical data types. The shorter form
<code>long long</code> is commonly used because it is easier to write while providing the same
functionality.
</p>

<p>
Whenever your program needs to work with extremely large integer values, choose
<code>long long</code>. It provides a much larger storage range than both
<code>int</code> and <code>long</code>, making it the preferred choice for handling very large
numbers.
</p>


<h4>4. <span class="keyword">signed</span> Modifier</h4>

<p>
The <b>signed</b> modifier is used to store both <b>positive</b> and <b>negative</b> integer values.
It allows a variable to represent numbers with a plus (<code>+</code>) or minus (<code>-</code>) sign.
In C, integer data types such as <code>int</code>, <code>short</code>, and <code>long</code> are
<b>signed by default</b>. Therefore, writing <code>signed int</code> and <code>int</code> means the
same thing.
</p>

<p>
A signed integer reserves one bit to represent the sign of the number. As a result, it can store
both negative and positive values, but its maximum positive value is smaller than that of an
unsigned integer of the same size.
</p>

<pre class="notes_text_pre">
signed int temperature = -15;
int marks = 95;
signed salary = 25000;
</pre>

<p>
In the above example, all variables are signed integers. The variable
<code>temperature</code> stores a negative value, while <code>marks</code> and
<code>salary</code> store positive values.
</p>

<h4>Memory Size and Range</h4>

<p>
The <code>signed</code> modifier does not change the size of a data type. It only specifies that
the variable can store both positive and negative values. The size depends on the base data type.
</p>

<table class="notes-table">

<tr>
<th>Data Type</th>
<th>Typical Size</th>
<th>Typical Range</th>
</tr>

<tr>
<td><code>signed short</code></td>
<td>2 Bytes</td>
<td>-32,768 to 32,767</td>
</tr>

<tr>
<td><code>signed int</code></td>
<td>4 Bytes</td>
<td>-2,147,483,648 to 2,147,483,647</td>
</tr>

<tr>
<td><code>signed long long</code></td>
<td>8 Bytes</td>
<td>-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807</td>
</tr>

</table>

<p>
The exact range may vary depending on the compiler and operating system, but the above values are
commonly found on modern systems.
</p>

<h4>Why Use <code>signed</code>?</h4>

<ul>
<li>It stores both positive and negative integer values.</li>
<li>It is useful when values may increase or decrease.</li>
<li>It is the default integer type in C.</li>
<li>It is suitable for mathematical and scientific calculations.</li>
<li>It allows arithmetic operations involving negative numbers.</li>
</ul>

<h4>When Should We Use <code>signed</code>?</h4>

<p>
Use the <code>signed</code> modifier whenever a variable may contain negative values.
</p>

<ul>
<li>Temperature measurements</li>
<li>Profit and loss calculations</li>
<li>Bank account balance</li>
<li>Altitude above or below sea level</li>
<li>Student score differences</li>
<li>Coordinate values on a graph</li>
</ul>

<h4>Format Specifier for <code>signed</code></h4>

<p>
The format specifier depends on the underlying data type, not on the
<code>signed</code> keyword itself.
</p>

<table class="notes-table">

<tr>
<th>Data Type</th>
<th>Format Specifier</th>
</tr>

<tr>
<td><code>signed short</code></td>
<td><code>%hd</code></td>
</tr>

<tr>
<td><code>signed int</code></td>
<td><code>%d</code></td>
</tr>

<tr>
<td><code>signed long</code></td>
<td><code>%ld</code></td>
</tr>

<tr>
<td><code>signed long long</code></td>
<td><code>%lld</code></td>
</tr>

</table>

<pre class="notes_text_pre">
signed int balance = -5000;

printf("Balance = %d\n", balance);

scanf("%d", &balance);
</pre>

<p>
The <code>printf()</code> function displays the value of the variable, while
<code>scanf()</code> reads a signed integer from the keyboard.
</p>

<p>
<b>Note:</b> Since <code>int</code> is signed by default, writing
<code>signed int</code> is optional. Both declarations create the same type of variable.
</p>

<h4>Example</h4>

<div class="code-box">

<div class="code-title">
<span>signed Modifier</span>
</div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">signed int</span> temperature <span class="symbol">=</span> -15<span class="symbol">;</span>
    <span class="datatype">signed int</span> balance <span class="symbol">=</span> -5000<span class="symbol">;</span>
    <span class="datatype">signed int</span> marks <span class="symbol">=</span> 95<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Temperature = %d\n"</span><span class="symbol">,</span> temperature<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Balance = %d\n"</span><span class="symbol">,</span> balance<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Marks = %d"</span><span class="symbol">,</span> marks<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

<div class="code-title">
<span>Output</span>
</div>

<pre><code>
Temperature = -15
Balance = -5000
Marks = 95
</code></pre>

</div>

<h4>Explanation</h4>

<p>
In this program, all variables are declared using the <code>signed</code> modifier. The variables
<code>temperature</code> and <code>balance</code> store negative values, while
<code>marks</code> stores a positive value. Because the variables are signed, they can represent
both positive and negative integers.
</p>

<p>
The <code>printf()</code> function uses the <code>%d</code> format specifier because the variables
are of type <code>signed int</code>. Since <code>int</code> is signed by default, the declaration
<code>signed int</code> can also be written simply as <code>int</code>.
</p>

<p>
Whenever your program needs to work with values that may become negative, such as temperatures,
bank balances, or profit and loss, the <code>signed</code> modifier is the appropriate choice.
</p>


<h4>5. <span class="keyword">unsigned</span> Modifier</h4>

<p>
The <b>unsigned</b> modifier is used to store <b>only non-negative (positive and zero)</b> integer
values. Unlike a signed integer, an unsigned integer cannot store negative numbers. Since it does
not need a sign bit, it can store a much larger positive value than a signed integer of the same
size.
</p>

<p>
In C, the <code>unsigned</code> modifier can be used with integer data types such as
<code>short</code>, <code>int</code>, <code>long</code>, and
<code>long long</code>. It is commonly used when negative values are never required.
</p>

<pre class="notes_text_pre">
unsigned int age = 20;
unsigned int students = 150;
unsigned marks = 95;
</pre>

<p>
In the above example, all variables are unsigned integers. They can store only
positive values and zero. Assigning a negative value to an unsigned variable may
produce unexpected results.
</p>

<h4>Memory Size and Range</h4>

<p>
The <code>unsigned</code> modifier does not change the memory size of a data type.
It only changes the range of values that can be stored. Since there is no sign bit,
the entire memory is used to store positive values.
</p>

<table class="notes-table">

<tr>
<th>Data Type</th>
<th>Typical Size</th>
<th>Typical Range</th>
</tr>

<tr>
<td><code>unsigned short</code></td>
<td>2 Bytes</td>
<td>0 to 65,535</td>
</tr>

<tr>
<td><code>unsigned int</code></td>
<td>4 Bytes</td>
<td>0 to 4,294,967,295</td>
</tr>

<tr>
<td><code>unsigned long long</code></td>
<td>8 Bytes</td>
<td>0 to 18,446,744,073,709,551,615</td>
</tr>

</table>

<p>
These ranges are commonly found on modern systems. The exact values may vary
depending on the compiler and operating system.
</p>

<h4>Why Use <code>unsigned</code>?</h4>

<ul>
<li>It stores larger positive values than the corresponding signed type.</li>
<li>It is useful when negative values are not required.</li>
<li>It provides a wider positive range without increasing memory usage.</li>
<li>It is commonly used for counters and indexes.</li>
<li>It is suitable for storing quantities that can never be negative.</li>
</ul>

<h4>When Should We Use <code>unsigned</code>?</h4>

<p>
Use the <code>unsigned</code> modifier whenever a variable should never contain a
negative value.
</p>

<ul>
<li>Age of a person</li>
<li>Number of students in a class</li>
<li>Marks obtained in an examination</li>
<li>Quantity of products in stock</li>
<li>Population count</li>
<li>Array indexes and loop counters</li>
</ul>

<p>
Avoid using <code>unsigned</code> if the value may become negative during program execution.
</p>

<h4>Format Specifier for <code>unsigned</code></h4>

<p>
The correct format specifier depends on the underlying unsigned data type.
</p>

<table class="notes-table">

<tr>
<th>Data Type</th>
<th>Format Specifier</th>
</tr>

<tr>
<td><code>unsigned short</code></td>
<td><code>%hu</code></td>
</tr>

<tr>
<td><code>unsigned int</code></td>
<td><code>%u</code></td>
</tr>

<tr>
<td><code>unsigned long</code></td>
<td><code>%lu</code></td>
</tr>

<tr>
<td><code>unsigned long long</code></td>
<td><code>%llu</code></td>
</tr>

</table>

<p>
These format specifiers should be used with both <code>printf()</code> and
<code>scanf()</code>.
</p>

<pre class="notes_text_pre">
unsigned int students = 120;

printf("Students = %u\n", students);

scanf("%u", &students);
</pre>

<p>
The <code>printf()</code> function displays the value stored in the variable,
while <code>scanf()</code> reads an unsigned integer from the keyboard.
</p>

<p>
<b>Note:</b> Never use <code>%d</code> for an <code>unsigned int</code>.
Always use <code>%u</code> because it is the correct format specifier for
unsigned integers.
</p>

<h4>Example</h4>

<div class="code-box">

<div class="code-title">
<span>unsigned Modifier</span>
</div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">unsigned int</span> students <span class="symbol">=</span> 120<span class="symbol">;</span>
    <span class="datatype">unsigned int</span> marks <span class="symbol">=</span> 95<span class="symbol">;</span>
    <span class="datatype">unsigned long</span> population <span class="symbol">=</span> 1450000000<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Students = %u\n"</span><span class="symbol">,</span> students<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Marks = %u\n"</span><span class="symbol">,</span> marks<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Population = %lu"</span><span class="symbol">,</span> population<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

<div class="code-title">
<span>Output</span>
</div>

<pre><code>
Students = 120
Marks = 95
Population = 1450000000
</code></pre>

</div>

<h4>Explanation</h4>

<p>
In this program, all variables are declared using the <code>unsigned</code>
modifier. Since these variables represent quantities that can never be negative,
using <code>unsigned</code> allows them to store a larger range of positive
values than the corresponding signed data types.
</p>

<p>
The <code>printf()</code> function uses <code>%u</code> for
<code>unsigned int</code> variables and <code>%lu</code> for the
<code>unsigned long</code> variable. Using the correct format specifier ensures
that the values are displayed correctly.
</p>

<p>
The <code>unsigned</code> modifier is commonly used for variables such as
population counts, item quantities, array indexes, and loop counters because
these values are never expected to be negative.
</p>


<h4>6. Comparison of <span class="keyword">signed</span> and <span class="keyword">unsigned</span> Modifiers</h4>

<p>
Both <code>signed</code> and <code>unsigned</code> are integer modifiers in C. They determine whether
a variable can store negative values. A <code>signed</code> variable can store both positive and
negative numbers, whereas an <code>unsigned</code> variable stores only positive numbers and zero.
</p>

<p>
Since an <code>unsigned</code> variable does not reserve a bit for the sign, it can store a much
larger positive value than the corresponding <code>signed</code> data type of the same size.
</p>

<h4>Difference Between <code>signed</code> and <code>unsigned</code></h4>

<table class="notes-table">

<tr>
<th>Feature</th>
<th>signed</th>
<th>unsigned</th>
</tr>

<tr>
<td>Stores Negative Values</td>
<td>Yes</td>
<td>No</td>
</tr>

<tr>
<td>Stores Positive Values</td>
<td>Yes</td>
<td>Yes</td>
</tr>

<tr>
<td>Stores Zero</td>
<td>Yes</td>
<td>Yes</td>
</tr>

<tr>
<td>Sign Bit</td>
<td>Uses one bit for the sign</td>
<td>No sign bit</td>
</tr>

<tr>
<td>Positive Range</td>
<td>Smaller</td>
<td>Larger</td>
</tr>

<tr>
<td>Negative Range</td>
<td>Available</td>
<td>Not Available</td>
</tr>

<tr>
<td>Default for <code>int</code></td>
<td>Yes</td>
<td>No</td>
</tr>

<tr>
<td>Common Format Specifier</td>
<td><code>%d</code></td>
<td><code>%u</code></td>
</tr>

<tr>
<td>Typical Uses</td>
<td>Temperature, profit/loss, balance</td>
<td>Age, quantity, population, counters</td>
</tr>

</table>

<h4>Range Comparison (32-bit Integer)</h4>

<table class="notes-table">

<tr>
<th>Data Type</th>
<th>Typical Range</th>
</tr>

<tr>
<td><code>signed int</code></td>
<td>-2,147,483,648 to 2,147,483,647</td>
</tr>

<tr>
<td><code>unsigned int</code></td>
<td>0 to 4,294,967,295</td>
</tr>

</table>

<p>
Notice that both data types usually occupy the same memory (4 bytes), but
<code>unsigned int</code> stores a much larger positive value because it does not
need to store negative numbers.
</p>

<h4>Example</h4>

<div class="code-box">

<div class="code-title">
<span>signed vs unsigned</span>
</div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">signed int</span> temperature <span class="symbol">=</span> -20<span class="symbol">;</span>
    <span class="datatype">unsigned int</span> students <span class="symbol">=</span> 120<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Temperature = %d\n"</span><span class="symbol">,</span> temperature<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Students = %u"</span><span class="symbol">,</span> students<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

<div class="code-title">
<span>Output</span>
</div>

<pre><code>
Temperature = -20
Students = 120
</code></pre>

</div>

<h4>Explanation</h4>

<p>
In this program, the variable <code>temperature</code> is declared as
<code>signed int</code>, so it can store a negative value (<code>-20</code>).
The variable <code>students</code> is declared as <code>unsigned int</code>,
which stores only non-negative values.
</p>

<p>
The <code>printf()</code> function uses <code>%d</code> to print the signed
integer and <code>%u</code> to print the unsigned integer. Each format
specifier matches the corresponding data type.
</p>

<h4>Important Points</h4>

<ul>
<li><code>int</code> is <b>signed</b> by default in C.</li>
<li>Use <code>unsigned</code> only when negative values are never required.</li>
<li>Both data types usually occupy the same amount of memory.</li>
<li><code>unsigned</code> provides a larger positive range than <code>signed</code>.</li>
<li>Always use the correct format specifier (<code>%d</code> or <code>%u</code>).</li>
<li>Choosing the appropriate modifier improves program correctness and memory usage.</li>
</ul>

<h4>7. Combining Integer Modifiers</h4>

<p>
In C, integer modifiers can be combined with integer data types to create variables
with different storage sizes and value ranges. Combining modifiers allows programmers
to choose the most appropriate data type based on the requirements of the program.
</p>

<p>
For example, if a variable needs to store only positive values, the
<code>unsigned</code> modifier can be combined with <code>short</code>,
<code>int</code>, <code>long</code>, or <code>long long</code>. Similarly,
the <code>signed</code> modifier can also be combined with these data types.
</p>

<h4>Common Integer Modifier Combinations</h4>

<table class="notes-table">

<tr>
<th>Declaration</th>
<th>Description</th>
<th>Typical Format Specifier</th>
</tr>

<tr>
<td><code>short int</code></td>
<td>Stores small signed integers.</td>
<td><code>%hd</code></td>
</tr>

<tr>
<td><code>unsigned short</code></td>
<td>Stores only positive small integers.</td>
<td><code>%hu</code></td>
</tr>

<tr>
<td><code>int</code> or <code>signed int</code></td>
<td>Stores positive and negative integers.</td>
<td><code>%d</code></td>
</tr>

<tr>
<td><code>unsigned int</code></td>
<td>Stores only positive integers.</td>
<td><code>%u</code></td>
</tr>

<tr>
<td><code>long int</code></td>
<td>Stores large signed integers.</td>
<td><code>%ld</code></td>
</tr>

<tr>
<td><code>unsigned long</code></td>
<td>Stores large positive integers.</td>
<td><code>%lu</code></td>
</tr>

<tr>
<td><code>long long</code></td>
<td>Stores very large signed integers.</td>
<td><code>%lld</code></td>
</tr>

<tr>
<td><code>unsigned long long</code></td>
<td>Stores very large positive integers.</td>
<td><code>%llu</code></td>
</tr>

</table>

<h4>Example</h4>

<div class="code-box">

<div class="code-title">
<span>Combining Integer Modifiers</span>
</div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">short</span> age <span class="symbol">=</span> 20<span class="symbol">;</span>
    <span class="datatype">unsigned short</span> students <span class="symbol">=</span> 150<span class="symbol">;</span>

    <span class="datatype">long</span> population <span class="symbol">=</span> 1450000000<span class="symbol">;</span>
    <span class="datatype">unsigned long</span> distance <span class="symbol">=</span> 5000000<span class="symbol">;</span>

    <span class="datatype">long long</span> stars <span class="symbol">=</span> 5000000000000LL<span class="symbol">;</span>
    <span class="datatype">unsigned long long</span> atoms <span class="symbol">=</span> 18000000000000000000ULL<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Age = %hd\n"</span><span class="symbol">,</span> age<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Students = %hu\n"</span><span class="symbol">,</span> students<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Population = %ld\n"</span><span class="symbol">,</span> population<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Distance = %lu\n"</span><span class="symbol">,</span> distance<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Stars = %lld\n"</span><span class="symbol">,</span> stars<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Atoms = %llu"</span><span class="symbol">,</span> atoms<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

<div class="code-title">
<span>Output</span>
</div>

<pre><code>
Age = 20
Students = 150
Population = 1450000000
Distance = 5000000
Stars = 5000000000000
Atoms = 18000000000000000000
</code></pre>

</div>

<h4>Explanation</h4>

<p>
This program demonstrates different combinations of integer modifiers. Each
variable is declared according to the type of data it stores. Small values are
stored using <code>short</code>, large values use <code>long</code>, very large
values use <code>long long</code>, and variables that never contain negative
numbers use the <code>unsigned</code> modifier.
</p>

<p>
Notice that each data type uses its own format specifier while printing the
value. Using the correct format specifier ensures that the output is displayed
correctly and avoids undefined behavior.
</p>

<h4>Valid Integer Modifier Combinations</h4>

<table class="notes-table">

<tr>
<th>Declaration</th>
<th>Valid</th>
</tr>

<tr>
<td><code>short</code></td>
<td>✔ Yes</td>
</tr>

<tr>
<td><code>unsigned short</code></td>
<td>✔ Yes</td>
</tr>

<tr>
<td><code>signed short</code></td>
<td>✔ Yes</td>
</tr>

<tr>
<td><code>int</code></td>
<td>✔ Yes</td>
</tr>

<tr>
<td><code>unsigned int</code></td>
<td>✔ Yes</td>
</tr>

<tr>
<td><code>signed int</code></td>
<td>✔ Yes</td>
</tr>

<tr>
<td><code>long</code></td>
<td>✔ Yes</td>
</tr>

<tr>
<td><code>unsigned long</code></td>
<td>✔ Yes</td>
</tr>

<tr>
<td><code>signed long</code></td>
<td>✔ Yes</td>
</tr>

<tr>
<td><code>long long</code></td>
<td>✔ Yes</td>
</tr>

<tr>
<td><code>unsigned long long</code></td>
<td>✔ Yes</td>
</tr>

<tr>
<td><code>signed long long</code></td>
<td>✔ Yes</td>
</tr>

</table>

<h4>Important Points</h4>

<ul>
<li><code>short</code>, <code>long</code>, and <code>long long</code> modify the <b>size</b> of an integer.</li>
<li><code>signed</code> and <code>unsigned</code> modify the <b>range</b> of values.</li>
<li><code>int</code> is <b>signed</b> by default.</li>
<li><code>signed int</code> and <code>int</code> are identical.</li>
<li>Use <code>unsigned</code> only when negative values are never required.</li>
<li>Always use the correct format specifier with each data type.</li>
<li>Choose the smallest suitable data type to improve memory efficiency and program performance.</li>
</ul>

<h4>Summary</h4>

<p>
Integer modifiers help programmers choose the most appropriate integer type for
a program. By combining <code>signed</code>, <code>unsigned</code>,
<code>short</code>, <code>long</code>, and <code>long long</code>, you can
store values efficiently while ensuring that the required range of numbers is
supported.
</p>

<hr>

<h3>1. Type Modifiers</h3>

<p>
Type modifiers are keywords that modify the size, range, or sign of basic data types.
They help the programmer use memory efficiently and store larger or smaller values when needed.
</p>

<h4>Common Type Modifiers in C</h4>

<table class="notes-table">
<tr>
<th>Modifier</th>
<th>Purpose</th>
<th>Example</th>
</tr>

<tr>
<td><b>short</b></td>
<td>Stores smaller integer values and uses less memory.</td>
<td>short age = 20;</td>
</tr>

<tr>
<td><b>long</b></td>
<td>Stores larger integer values.</td>
<td>long population = 1400000000;</td>
</tr>

<tr>
<td><b>signed</b></td>
<td>Stores both positive and negative values.</td>
<td>signed int temperature = -15;</td>
</tr>

<tr>
<td><b>unsigned</b></td>
<td>Stores only positive values, allowing a larger positive range.</td>
<td>unsigned int marks = 100;</td>
</tr>

</table>

<h4>Example</h4>

<p>
Suppose you are storing the age of a student. The value will never be very large,
so you can use <b>short</b>. But if you want to store the population of a country,
you need <b>long</b> because the number is much bigger.
</p>

<div class="code-box">

    <div class="code-title">
        <span>Program: Type Modifiers Example</span>
    </div>

<pre><code><span class="comment">// Type modifier variables</span>
<span class="datatype">short</span> age <span class="symbol">=</span> <span class="number">20</span><span class="symbol">;</span>
<span class="datatype">long</span> population <span class="symbol">=</span> <span class="number">1400000000</span><span class="symbol">;</span>
<span class="datatype">signed int</span> temperature <span class="symbol">=</span> <span class="number">-5</span><span class="symbol">;</span>
<span class="datatype">unsigned int</span> marks <span class="symbol">=</span> <span class="number">95</span><span class="symbol">;</span></code></pre>

</div>

<div class="note">
<b>Remember:</b> Type modifiers change the characteristics of a data type, such as its size or value range.
</div>

<hr>

<h3>2. Access Modifiers</h3>

<p>
Access modifiers control the visibility or accessibility of variables, methods, and classes.
They decide <b>who can access a particular member</b> of a class.
</p>

<p>
Access modifiers are mainly used in Object-Oriented Programming (OOP) languages such as
<b>Java</b> and <b>C++</b>. They are <b>not available in the C programming language</b>.
</p>

<h4>Common Access Modifiers</h4>

<table class="notes-table">
<tr>
<th>Access Modifier</th>
<th>Meaning</th>
</tr>

<tr>
<td><b>public</b></td>
<td>Accessible from anywhere in the program.</td>
</tr>

<tr>
<td><b>private</b></td>
<td>Accessible only within the same class.</td>
</tr>

<tr>
<td><b>protected</b></td>
<td>Accessible within the same class and its child classes.</td>
</tr>

</table>

<h4>Example</h4>

<p>
Imagine a school:
</p>

<ul>
<li><b>Public</b> → School playground (everyone can enter).</li>
<li><b>Protected</b> → Staff room (only teachers and authorized people).</li>
<li><b>Private</b> → Principal's personal office (only the principal).</li>
</ul>

<div class="code-box">

    <div class="code-title">
        <span>Program: Access Modifiers Example</span>
    </div>

<pre><code><span class="comment">// Java Example</span>

<span class="keyword">public</span> <span class="keyword">class</span> Student <span class="symbol">{</span>

    <span class="keyword">public</span> <span class="datatype">String</span> name<span class="symbol">;</span>      <span class="comment">// Accessible everywhere</span>

    <span class="keyword">private</span> <span class="datatype">int</span> marks<span class="symbol">;</span>       <span class="comment">// Accessible only inside Student class</span>

    <span class="keyword">protected</span> <span class="datatype">int</span> rollNo<span class="symbol">;</span>    <span class="comment">// Accessible in Student and child classes</span>

<span class="symbol">}</span></code></pre>

</div>

<div class="note">
<b>Important:</b>
<ul>
<li>C Programming → Uses <b>Type Modifiers</b> only.</li>
<li>Java & C++ → Use both <b>Type Modifiers</b> and <b>Access Modifiers</b>.</li>
</ul>
</div>

<h3>Difference Between Type Modifiers and Access Modifiers</h3>

<table class="notes-table">
<tr>
<th>Type Modifiers</th>
<th>Access Modifiers</th>
</tr>

<tr>
<td>Modify the size or range of a data type.</td>
<td>Control the accessibility of class members.</td>
</tr>

<tr>
<td>Used with data types.</td>
<td>Used with classes, methods, and variables.</td>
</tr>

<tr>
<td>Available in C, C++, and Java.</td>
<td>Mainly used in Object-Oriented languages like Java and C++.</td>
</tr>

<tr>
<td>Examples: short, long, signed, unsigned</td>
<td>Examples: public, private, protected</td>
</tr>

</table>

<div class="note">
<b>Exam Tip:</b><br>
<b>Type Modifiers</b> change the properties of a data type, whereas
<b>Access Modifiers</b> control who can access data or methods in a program.
</div>
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

<div class="code-box">

    <div class="code-title">
        <span> Example</span>
    </div>

<pre><code><span class="datatype">int</span> a <span class="symbol">=</span> <span class="number">10</span><span class="symbol">,</span> b <span class="symbol">=</span> <span class="number">5</span><span class="symbol">;</span>

<span class="datatype">int</span> sum <span class="symbol">=</span> a <span class="symbol">+</span> b<span class="symbol">;</span></code></pre>

</div>

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

<div class="code-box">

    <div class="code-title">
        <span>Arithmetic_Operators.c</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> a <span class="symbol">=</span> <span class="number">10</span><span class="symbol">,</span> b <span class="symbol">=</span> <span class="number">3</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Addition = %d\\n"</span><span class="symbol">,</span> a <span class="symbol">+</span> b<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Subtraction = %d\\n"</span><span class="symbol">,</span> a <span class="symbol">-</span> b<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Multiplication = %d\\n"</span><span class="symbol">,</span> a <span class="symbol">*</span> b<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Division = %d\\n"</span><span class="symbol">,</span> a <span class="symbol">/</span> b<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Modulus = %d\\n"</span><span class="symbol">,</span> a <span class="symbol">%</span> b<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

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

<div class="code-box">

    <div class="code-title">
        <span>Program: Relational Operators</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> a <span class="symbol">=</span> <span class="number">10</span><span class="symbol">,</span> b <span class="symbol">=</span> <span class="number">20</span><span class="symbol">;</span>

    <span class="comment">// Equal to (==)</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"a == b : %d\\n"</span><span class="symbol">,</span> a <span class="symbol">==</span> b<span class="symbol">);</span>

    <span class="comment">// Not equal to (!=)</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"a != b : %d\\n"</span><span class="symbol">,</span> a <span class="symbol">!=</span> b<span class="symbol">);</span>

    <span class="comment">// Less than (<)</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"a < b : %d\\n"</span><span class="symbol">,</span> a <span class="symbol">&lt;</span> b<span class="symbol">);</span>

    <span class="comment">// Greater than (>)</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"a > b : %d\\n"</span><span class="symbol">,</span> a <span class="symbol">&gt;</span> b<span class="symbol">);</span>

    <span class="comment">// Less than or equal to (<=)</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"a <= b : %d\\n"</span><span class="symbol">,</span> a <span class="symbol">&lt;=</span> b<span class="symbol">);</span>

    <span class="comment">// Greater than or equal to (>=)</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"a >= b : %d\\n"</span><span class="symbol">,</span> a <span class="symbol">&gt;=</span> b<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<hr>

<h3>3. Logical Operators</h3>

<p>
Logical operators are used to combine two or more conditions. The result of a logical operation is always either <b>true (1)</b> or <b>false (0)</b>.
</p>

<table class="notes-table">
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

<hr>

<h4>1. Logical AND (&&)</h4>

<p>
The <b>Logical AND (&&)</b> operator checks two or more conditions.
It returns <b>true (1)</b> only when <b>all conditions are true</b>.
If even one condition is false, the result becomes <b>false (0)</b>.
</p>

<h4>Truth Table</h4>

<table class="notes-table">
<tr>
<th>Condition A</th>
<th>Condition B</th>
<th>A && B</th>
</tr>

<tr>
<td>0</td>
<td>0</td>
<td>0</td>
</tr>

<tr>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>

<tr>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>

<tr>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>

</table>

<div class="code-box">

<div class="code-title">
<span>Logical AND Example</span>
</div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> age <span class="symbol">=</span> 20<span class="symbol">;</span>

    <span class="keyword">if</span> <span class="symbol">(</span>age <span class="symbol">&gt;=</span> 18 <span class="symbol">&amp;&amp;</span> age <span class="symbol">&lt;=</span> 60<span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Eligible"</span><span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<p><b>Output:</b> Eligible</p>

<hr>

<h4>2. Logical OR (||)</h4>

<p>
The <b>Logical OR (||)</b> operator returns <b>true (1)</b> if
<b>at least one condition is true</b>.
It returns <b>false (0)</b> only when <b>all conditions are false</b>.
</p>

<h4>Truth Table</h4>

<table class="notes-table">
<tr>
<th>Condition A</th>
<th>Condition B</th>
<th>A || B</th>
</tr>

<tr>
<td>0</td>
<td>0</td>
<td>0</td>
</tr>

<tr>
<td>0</td>
<td>1</td>
<td>1</td>
</tr>

<tr>
<td>1</td>
<td>0</td>
<td>1</td>
</tr>

<tr>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>

</table>

<div class="code-box">

<div class="code-title">
<span>Logical OR Example</span>
</div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> marks <span class="symbol">=</span> 35<span class="symbol">;</span>

    <span class="keyword">if</span> <span class="symbol">(</span>marks <span class="symbol">&gt;=</span> 33 <span class="symbol">||</span> marks <span class="symbol">==</span> 0<span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Condition is True"</span><span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<p><b>Output:</b> Condition is True</p>

<hr>

<h4>3. Logical NOT (!)</h4>

<p>
The <b>Logical NOT (!)</b> operator reverses the result of a condition.
If the condition is <b>true (1)</b>, it becomes <b>false (0)</b>.
If the condition is <b>false (0)</b>, it becomes <b>true (1)</b>.
</p>

<h4>Truth Table</h4>

<table class="notes-table">
<tr>
<th>Condition A</th>
<th>!A</th>
</tr>

<tr>
<td>0</td>
<td>1</td>
</tr>

<tr>
<td>1</td>
<td>0</td>
</tr>

</table>

<div class="code-box">

<div class="code-title">
<span>Logical NOT Example</span>
</div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> isLoggedIn <span class="symbol">=</span> 0<span class="symbol">;</span>

    <span class="keyword">if</span> <span class="symbol">(</span><span class="symbol">!</span>isLoggedIn<span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Please Login"</span><span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<p><b>Output:</b> Please Login</p>

<p>
<b>Remember:</b><br>
<b>&&</b> → All conditions must be true.<br>
<b>||</b> → At least one condition must be true.<br>
<b>!</b> → Reverses the result (True becomes False, False becomes True).
</p>

<h4>Example</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: Logical Operators</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> age <span class="symbol">=</span> <span class="number">20</span><span class="symbol">;</span>

    <span class="comment">// Logical AND (&&)</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"age >= 18 && age <= 60 : %d\\n"</span><span class="symbol">,</span> age <span class="symbol">&gt;=</span> <span class="number">18</span> <span class="symbol">&amp;&amp;</span> age <span class="symbol">&lt;=</span> <span class="number">60</span><span class="symbol">);</span>

    <span class="comment">// Logical OR (||)</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"age < 18 || age > 60 : %d\\n"</span><span class="symbol">,</span> age <span class="symbol">&lt;</span> <span class="number">18</span> <span class="symbol">||</span> age <span class="symbol">&gt;</span> <span class="number">60</span><span class="symbol">);</span>

    <span class="comment">// Logical NOT (!)</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"!(age == 20) : %d\\n"</span><span class="symbol">,</span> <span class="symbol">!(</span>age <span class="symbol">==</span> <span class="number">20</span><span class="symbol">));</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

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

<div class="code-box">

    <div class="code-title">
        <span>Program: Increment and Decrement Operators</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> a <span class="symbol">=</span> <span class="number">5</span><span class="symbol">;</span>

    <span class="comment">// Increment operator (++): Increases the value by 1</span>
    a<span class="symbol">++;</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"After Increment = %d\\n"</span><span class="symbol">,</span> a<span class="symbol">);</span>

    <span class="comment">// Decrement operator (--): Decreases the value by 1</span>
    a<span class="symbol">--;</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"After Decrement = %d\\n"</span><span class="symbol">,</span> a<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<hr>

<h3>6. Bitwise Operators</h3>

<p>
Bitwise operators work directly on the <b>binary representation (bits)</b> of numbers.
Each bit is compared or modified individually.
They are commonly used in system programming, embedded systems, and performance optimization.
</p>

<table class="notes-table">
<tr>
<th>Operator</th>
<th>Name</th>
</tr>

<tr>
<td>&amp;</td>
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

<hr>

<h4>1. Bitwise AND (&amp;)</h4>

<p>
The <b>Bitwise AND (&amp;)</b> operator compares each bit of two numbers.
A bit becomes <b>1</b> only when <b>both corresponding bits are 1</b>.
Otherwise, the result is <b>0</b>.
</p>

<p><b>Example:</b> 5 &amp; 3</p>

<p>
5 = <b>0101</b><br>
3 = <b>0011</b>
</p>

<h4>Truth Table</h4>

<table class="notes-table">
<tr>
<th>A</th>
<th>B</th>
<th>A &amp; B</th>
</tr>

<tr>
<td>0</td>
<td>0</td>
<td>0</td>
</tr>

<tr>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>

<tr>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>

<tr>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>

</table>

<p>
Result:<br>
0101<br>
0011<br>
────<br>
0001 = <b>1</b>
</p>

<div class="code-box">

<div class="code-title">
<span>Bitwise AND Example</span>
</div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> a <span class="symbol">=</span> 5<span class="symbol">,</span> b <span class="symbol">=</span> 3<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> a <span class="symbol">&amp;</span> b<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<p><b>Output:</b> 1</p>

<hr>

<h4>2. Bitwise OR (|)</h4>

<p>
The <b>Bitwise OR (|)</b> operator compares each bit of two numbers.
A bit becomes <b>1</b> if <b>at least one corresponding bit is 1</b>.
</p>

<p><b>Example:</b> 5 | 3</p>

<p>
5 = <b>0101</b><br>
3 = <b>0011</b>
</p>

<h4>Truth Table</h4>

<table class="notes-table">
<tr>
<th>A</th>
<th>B</th>
<th>A | B</th>
</tr>

<tr>
<td>0</td>
<td>0</td>
<td>0</td>
</tr>

<tr>
<td>0</td>
<td>1</td>
<td>1</td>
</tr>

<tr>
<td>1</td>
<td>0</td>
<td>1</td>
</tr>

<tr>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>

</table>

<p>
Result:<br>
0101<br>
0011<br>
────<br>
0111 = <b>7</b>
</p>

<div class="code-box">

<div class="code-title">
<span>Bitwise OR Example</span>
</div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> a <span class="symbol">=</span> 5<span class="symbol">,</span> b <span class="symbol">=</span> 3<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> a <span class="symbol">|</span> b<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<p><b>Output:</b> 7</p>

<hr>

<h4>3. Bitwise XOR (^)</h4>

<p>
The <b>Bitwise XOR (^)</b> operator returns <b>1</b> only when the two corresponding bits are <b>different</b>.
If both bits are the same, the result is <b>0</b>.
</p>

<h4>Truth Table</h4>

<table class="notes-table">
<tr>
<th>A</th>
<th>B</th>
<th>A ^ B</th>
</tr>

<tr>
<td>0</td>
<td>0</td>
<td>0</td>
</tr>

<tr>
<td>0</td>
<td>1</td>
<td>1</td>
</tr>

<tr>
<td>1</td>
<td>0</td>
<td>1</td>
</tr>

<tr>
<td>1</td>
<td>1</td>
<td>0</td>
</tr>

</table>

<p>
Example:<br>
5 = 0101<br>
3 = 0011<br>
────<br>
0110 = <b>6</b>
</p>

<div class="code-box">

<div class="code-title">
<span>Bitwise XOR Example</span>
</div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> a <span class="symbol">=</span> 5<span class="symbol">,</span> b <span class="symbol">=</span> 3<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> a <span class="symbol">^</span> b<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<p><b>Output:</b> 6</p>

<hr>

<h4>4. Bitwise NOT (~)</h4>

<p>
The <b>Bitwise NOT (~)</b> operator reverses every bit of a number.
All <b>1s become 0s</b> and all <b>0s become 1s</b>.
</p>

<h4>Truth Table</h4>

<table class="notes-table">
<tr>
<th>A</th>
<th>~A</th>
</tr>

<tr>
<td>0</td>
<td>1</td>
</tr>

<tr>
<td>1</td>
<td>0</td>
</tr>

</table>

<p>
Example:<br>
5 = 00000101<br>
~5 = 11111010 = <b>-6</b> (in two's complement)
</p>

<div class="code-box">

<div class="code-title">
<span>Bitwise NOT Example</span>
</div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> a <span class="symbol">=</span> 5<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">~</span>a<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<p><b>Output:</b> -6</p>

<hr>

<h4>5. Left Shift (&lt;&lt;)</h4>

<p>
The <b>Left Shift (&lt;&lt;)</b> operator shifts all bits to the left by the specified number of positions.
Each left shift is approximately equal to multiplying the number by <b>2</b>.
</p>

<p>
Example:<br>
5 = 00000101<br>
5 &lt;&lt; 1 = 00001010 = <b>10</b>
</p>

<div class="code-box">

<div class="code-title">
<span>Left Shift Example</span>
</div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> a <span class="symbol">=</span> 5<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> a <span class="symbol">&lt;&lt;</span> 1<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<p><b>Output:</b> 10</p>

<hr>

<h4>6. Right Shift (&gt;&gt;)</h4>

<p>
The <b>Right Shift (&gt;&gt;)</b> operator shifts all bits to the right by the specified number of positions.
Each right shift is approximately equal to dividing the number by <b>2</b>.
</p>

<p>
Example:<br>
20 = 00010100<br>
20 &gt;&gt; 2 = 00000101 = <b>5</b>
</p>

<div class="code-box">

<div class="code-title">
<span>Right Shift Example</span>
</div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> a <span class="symbol">=</span> 20<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> a <span class="symbol">&gt;&gt;</span> 2<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<p><b>Output:</b> 5</p>

<p>
<b>Remember:</b><br>
<b>&amp;</b> → 1 only if both bits are 1.<br>
<b>|</b> → 1 if at least one bit is 1.<br>
<b>^</b> → 1 if both bits are different.<br>
<b>~</b> → Reverses every bit.<br>
<b>&lt;&lt;</b> → Shifts bits to the left (≈ multiply by 2).<br>
<b>&gt;&gt;</b> → Shifts bits to the right (≈ divide by 2).
</p>

<h4>Example</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: Bitwise Operators</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> a <span class="symbol">=</span> <span class="number">5</span><span class="symbol">,</span> b <span class="symbol">=</span> <span class="number">3</span><span class="symbol">;</span>

    <span class="comment">// Bitwise AND (&)</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"a & b = %d\\n"</span><span class="symbol">,</span> a <span class="symbol">&amp;</span> b<span class="symbol">);</span>

    <span class="comment">// Bitwise OR (|)</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"a | b = %d\\n"</span><span class="symbol">,</span> a <span class="symbol">|</span> b<span class="symbol">);</span>

    <span class="comment">// Bitwise XOR (^)</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"a ^ b = %d\\n"</span><span class="symbol">,</span> a <span class="symbol">^</span> b<span class="symbol">);</span>

    <span class="comment">// Bitwise NOT (~)</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"~a = %d\\n"</span><span class="symbol">,</span> <span class="symbol">~</span>a<span class="symbol">);</span>

    <span class="comment">// Left Shift (<<)</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"a << 1 = %d\\n"</span><span class="symbol">,</span> a <span class="symbol">&lt;&lt;</span> <span class="number">1</span><span class="symbol">);</span>

    <span class="comment">// Right Shift (>>)</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"a >> 1 = %d\\n"</span><span class="symbol">,</span> a <span class="symbol">&gt;&gt;</span> <span class="number">1</span><span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<hr>

<h3>7. Conditional (Ternary) Operator</h3>

<p>
The conditional operator is a short form of if-else.
</p>

<div class="code-box">

    <div class="code-title">
        <span>Syntax: Ternary Operator</span>
    </div>

<pre><code>condition <span class="symbol">?</span> true_statement <span class="symbol">:</span> false_statement<span class="symbol">;</span></code></pre>

</div>

<h4>Example</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: Ternary Operator</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> a <span class="symbol">=</span> <span class="number">10</span><span class="symbol">,</span> b <span class="symbol">=</span> <span class="number">20</span><span class="symbol">;</span>

    <span class="comment">// Check which number is greater using the ternary operator</span>
    <span class="symbol">(</span>a <span class="symbol">&gt;</span> b<span class="symbol">)</span>
        <span class="symbol">?</span> <span class="function">printf</span><span class="symbol">(</span><span class="string">"A is Greater"</span><span class="symbol">)</span>
        <span class="symbol">:</span> <span class="function">printf</span><span class="symbol">(</span><span class="string">"B is Greater"</span><span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

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

<div class="code-box">

    <div class="code-title">
        <span>Program: sizeof Operator</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> a<span class="symbol">;</span>

    <span class="comment">// Display the size of integer variable in bytes</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Size of int = %zu bytes"</span><span class="symbol">,</span> <span class="keyword">sizeof</span><span class="symbol">(</span>a<span class="symbol">));</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

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

const formatSpecifiers = `
<h3>Format Specifiers in C</h3>

<p>
A <b>Format Specifier</b> is a special code that begins with the <b>%</b> symbol.
It tells the <b>printf()</b> function how to display a value on the screen and tells the
<b>scanf()</b> function what type of input should be accepted from the keyboard.
</p>

<p>
In simple words, a format specifier tells the compiler <b>what type of data</b> is being printed or entered.
Without the correct format specifier, the output may be incorrect or the program may not work as expected.
</p>

<h4>Common Format Specifiers</h4>

<table class="notes-table">
<tr>
<th>Format Specifier</th>
<th>Data Type</th>
<th>Description</th>
<th>Example</th>
</tr>

<tr>
<td><b>%d</b></td>
<td>int</td>
<td>Displays or reads a signed integer value.</td>
<td>25</td>
</tr>

<tr>
<td><b>%f</b></td>
<td>float</td>
<td>Displays or reads a floating-point (decimal) value.</td>
<td>12.50</td>
</tr>

<tr>
<td><b>%lf</b></td>
<td>double</td>
<td>Used with double values (especially in scanf()).</td>
<td>123.456</td>
</tr>

<tr>
<td><b>%c</b></td>
<td>char</td>
<td>Displays or reads a single character.</td>
<td>A</td>
</tr>

<tr>
<td><b>%s</b></td>
<td>char array (String)</td>
<td>Displays or reads a string.</td>
<td>Hello</td>
</tr>

<tr>
<td><b>%u</b></td>
<td>unsigned int</td>
<td>Displays an unsigned integer.</td>
<td>250</td>
</tr>

<tr>
<td><b>%ld</b></td>
<td>long int</td>
<td>Displays or reads a long integer.</td>
<td>123456789</td>
</tr>

<tr>
<td><b>%lld</b></td>
<td>long long int</td>
<td>Displays or reads a long long integer.</td>
<td>9876543210</td>
</tr>

<tr>
<td><b>%x</b></td>
<td>int</td>
<td>Displays a number in hexadecimal (base 16) format.</td>
<td>1A</td>
</tr>

<tr>
<td><b>%o</b></td>
<td>int</td>
<td>Displays a number in octal (base 8) format.</td>
<td>32</td>
</tr>

</table>

<h3>Detailed Explanation of Each Format Specifier</h3>

<h4>1. %d (Integer)</h4>

<p>
The <b>%d</b> format specifier is used to print or read an <b>int</b> (integer) value.
An integer is a whole number that does not contain any decimal point.
</p>

<p>
Use <b>%d</b> whenever your variable is declared as <b>int</b>.
</p>

<h4>Example</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: %d Format Specifier</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> age <span class="symbol">=</span> <span class="number">20</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> age<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code><span class="number">20</span></code></pre>

</div>

<div class="note">
<b>Student Note:</b>
Use <b>%d</b> only for integer values such as age, roll number, salary (without decimals), marks, etc.
</div>

<hr>

<h4>2. %f (Float)</h4>

<p>
The <b>%f</b> format specifier is used to print or read a <b>float</b> value.
A float stores numbers that contain a decimal point.
</p>

<p>
By default, <b>printf()</b> displays six digits after the decimal point.
</p>

<h4>Example</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: %f Format Specifier</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">float</span> marks <span class="symbol">=</span> <span class="number">85.5</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%f"</span><span class="symbol">,</span> marks<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code><span class="number">85.500000</span></code></pre>

</div>

<p>
You can control the number of decimal places.
</p>

<h4>Example</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: Display Float with 2 Decimal Places</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">float</span> marks <span class="symbol">=</span> <span class="number">85.5</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%.2f"</span><span class="symbol">,</span> marks<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code><span class="number">85.50</span></code></pre>

</div>

<div class="note">
<b>Student Note:</b>
Use <b>%f</b> for decimal values like height, weight, percentage, temperature, etc.
</div>

<hr>

<h4>3. %lf (Double)</h4>

<p>
The <b>%lf</b> format specifier is mainly used with the <b>double</b> data type.
A double stores decimal values with much higher precision than float.
</p>

<h4>Example</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: %lf Format Specifier</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">double</span> pi <span class="symbol">=</span> <span class="number">3.1415926535</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%lf"</span><span class="symbol">,</span> pi<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code><span class="number">3.141593</span></code></pre>

</div>

<div class="note">
<b>Remember:</b>

<ul>
<li>In <b>scanf()</b>, use <b>%lf</b> for double variables.</li>
<li>In modern C, <b>printf()</b> also accepts <b>%f</b> for double values.</li>
</ul>

</div>

<hr>

<h4>4. %c (Character)</h4>

<p>
The <b>%c</b> format specifier is used to print or read a single character.
A character is enclosed within single quotes.
</p>

<h4>Example</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: %c Format Specifier</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">char</span> grade <span class="symbol">=</span> <span class="character">'A'</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%c"</span><span class="symbol">,</span> grade<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code><span class="character">A</span></code></pre>

</div>

<div class="note">
<b>Student Note:</b>
Use <b>%c</b> for a single letter, digit, or symbol such as A, B, 5, @, #, etc.
</div>

<hr>

<h4>5. %s (String)</h4>

<p>
The <b>%s</b> format specifier is used to print or read a string.
A string is a collection of characters stored in a character array.
</p>

<h4>Example</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: %s Format Specifier</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">char</span> name<span class="symbol">[] =</span> <span class="string">"Pradeep"</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%s"</span><span class="symbol">,</span> name<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code><span class="string">Pradeep</span></code></pre>

</div>

<div class="note">
<b>Student Note:</b>
Use <b>%s</b> whenever you want to print or read a complete word or sentence.
</div>

<hr>

<h4>6. %u (Unsigned Integer)</h4>

<p>
The <b>%u</b> format specifier is used for <b>unsigned int</b>.
Unsigned integers can store only positive values and zero.
</p>

<h4>Example</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: %u Format Specifier</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">unsigned int</span> population <span class="symbol">=</span> <span class="number">500</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%u"</span><span class="symbol">,</span> population<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code><span class="number">500</span></code></pre>

</div>

<div class="note">
<b>Student Note:</b>
Since unsigned integers cannot store negative numbers, they can represent larger positive values than signed integers.
</div>

<hr>

<h4>7. %ld (Long Integer)</h4>

<p>
The <b>%ld</b> format specifier is used with the <b>long int</b> data type.
It stores larger integer values than a normal int.
</p>

<h4>Example</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: %ld Format Specifier</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">long int</span> distance <span class="symbol">=</span> <span class="number">123456789</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%ld"</span><span class="symbol">,</span> distance<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code><span class="number">123456789</span></code></pre>

</div>

<div class="note">
<b>Student Note:</b>
Use <b>%ld</b> when the value is too large to fit into a normal integer.
</div>

<hr>

<h4>8. %lld (Long Long Integer)</h4>

<p>
The <b>%lld</b> format specifier is used with the <b>long long int</b> data type.
It stores very large integer values.
</p>

<h4>Example</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: %lld Format Specifier</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">long long int</span> stars <span class="symbol">=</span> <span class="number">9876543210</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%lld"</span><span class="symbol">,</span> stars<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code><span class="number">9876543210</span></code></pre>

</div>

<div class="note">
<b>Student Note:</b>
Use <b>%lld</b> when working with very large numbers such as population, bank records, or scientific calculations.
</div>

<hr>

<h4>9. %x (Hexadecimal)</h4>

<p>
The <b>%x</b> format specifier displays an integer in <b>Hexadecimal (Base 16)</b>.
Hexadecimal numbers use digits from 0-9 and letters A-F.
</p>

<h4>Example</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: %x Format Specifier</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> num <span class="symbol">=</span> <span class="number">26</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%x"</span><span class="symbol">,</span> num<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code><span class="number">1a</span></code></pre>

</div>

<div class="note">
<b>Student Note:</b>
Hexadecimal numbers are commonly used in memory addresses, colors, and low-level programming.
</div>

<hr>

<h4>10. %o (Octal)</h4>

<p>
The <b>%o</b> format specifier displays an integer in <b>Octal (Base 8)</b>.
Octal numbers contain digits from 0 to 7 only.
</p>

<h4>Example</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: %o Format Specifier</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> num <span class="symbol">=</span> <span class="number">26</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%o"</span><span class="symbol">,</span> num<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code><span class="number">32</span></code></pre>

</div>

<div class="note">
<b>Student Note:</b>
Octal numbers are mainly used in operating systems and permission settings.
</div>

<h3>Complete Example</h3>

<div class="code-box">

    <div class="code-title">
        <span>Program: Using Different Format Specifiers</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> age <span class="symbol">=</span> <span class="number">20</span><span class="symbol">;</span>
    <span class="datatype">float</span> marks <span class="symbol">=</span> <span class="number">85.5</span><span class="symbol">;</span>
    <span class="datatype">double</span> pi <span class="symbol">=</span> <span class="number">3.14159</span><span class="symbol">;</span>
    <span class="datatype">char</span> grade <span class="symbol">=</span> <span class="character">'A'</span><span class="symbol">;</span>
    <span class="datatype">char</span> name<span class="symbol">[] =</span> <span class="string">"Pradeep"</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Age = %d\\n"</span><span class="symbol">,</span> age<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Marks = %.2f\\n"</span><span class="symbol">,</span> marks<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Pi = %lf\\n"</span><span class="symbol">,</span> pi<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Grade = %c\\n"</span><span class="symbol">,</span> grade<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Name = %s\\n"</span><span class="symbol">,</span> name<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Age = <span class="number">20</span>
Marks = <span class="number">85.50</span>
Pi = <span class="number">3.141590</span>
Grade = <span class="character">A</span>
Name = <span class="string">Pradeep</span></code></pre>

</div>

<h3>Summary</h3>

<table class="notes-table">
<tr>
<th>Specifier</th>
<th>Used For</th>
</tr>

<tr>
<td>%d</td>
<td>Integer (int)</td>
</tr>

<tr>
<td>%f</td>
<td>Float (decimal number)</td>
</tr>

<tr>
<td>%lf</td>
<td>Double</td>
</tr>

<tr>
<td>%c</td>
<td>Single Character</td>
</tr>

<tr>
<td>%s</td>
<td>String</td>
</tr>

<tr>
<td>%u</td>
<td>Unsigned Integer</td>
</tr>

<tr>
<td>%ld</td>
<td>Long Integer</td>
</tr>

<tr>
<td>%lld</td>
<td>Long Long Integer</td>
</tr>

<tr>
<td>%x</td>
<td>Hexadecimal Number</td>
</tr>

<tr>
<td>%o</td>
<td>Octal Number</td>
</tr>

</table>

<div class="note">
<b>Remember:</b>

<ul>
<li>A format specifier always starts with the <b>%</b> symbol.</li>
<li>Always use the correct format specifier for the corresponding data type.</li>
<li>Using the wrong format specifier may produce incorrect output or undefined behavior.</li>
<li><b>Type Modifiers</b> (short, long, signed, unsigned) change the size or range of a data type.</li>
<li><b>Format Specifiers</b> (%d, %f, %c, %s, etc.) tell <code>printf()</code> and <code>scanf()</code> how to print or read that data.</li>
</ul>
</div>

<hr>

<h3> scanf() with Different Format Specifiers </h3>

<div class="code-box">

    <div class="code-title">
        scanf.c
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">char</span> ch<span class="symbol">;</span>
    <span class="datatype">char</span> str<span class="symbol">[</span>100<span class="symbol">];</span>
    <span class="datatype">int</span> i<span class="symbol">;</span>
    <span class="datatype">short</span> s<span class="symbol">;</span>
    <span class="datatype">long</span> l<span class="symbol">;</span>
    <span class="datatype">float</span> f<span class="symbol">;</span>
    <span class="datatype">double</span> d<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter a character: "</span><span class="symbol">);</span>
    <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%c"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>ch<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter a string: "</span><span class="symbol">);</span>
    <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%s"</span><span class="symbol">,</span> str<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter an integer: "</span><span class="symbol">);</span>
    <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>i<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter a short integer: "</span><span class="symbol">);</span>
    <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%hd"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>s<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter a long integer: "</span><span class="symbol">);</span>
    <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%ld"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>l<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter a float: "</span><span class="symbol">);</span>
    <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%f"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>f<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter a double: "</span><span class="symbol">);</span>
    <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%lf"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>d<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

`;

const cTypeConversion = `
<h3>C Type Conversion</h3>

<p>
Type Conversion in C is the process of converting one data type into another data type.
It is useful when we want to perform operations on different types of data.
</p>

<p>
For example, if we add an <b>int</b> and a <b>float</b>, C automatically converts the integer
to a float before performing the calculation.
</p>

<h3>Types of Type Conversion</h3>

<table class="notes-table">
<tr>
<th>Type</th>
<th>Description</th>
</tr>

<tr>
<td>Implicit Type Conversion</td>
<td>Conversion performed automatically by the C compiler.</td>
</tr>

<tr>
<td>Explicit Type Conversion (Type Casting)</td>
<td>Conversion performed manually by the programmer using a type cast.</td>
</tr>

</table>

<hr>

<h3>1. Implicit Type Conversion (Automatic Conversion)</h3>

<p>
In Implicit Type Conversion, the compiler automatically converts one data type into another.
Generally, the smaller data type is converted into the larger data type to avoid data loss.
</p>

<h4>Example 1: Integer Converted to Float</h4>

<div class="code-box">

    <div class="code-title">Example: Integer Converted to Float</div>

<pre>
<span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> a <span class="symbol">=</span> 10<span class="symbol">;</span>
    <span class="datatype">float</span> b <span class="symbol">=</span> 2.5<span class="symbol">;</span>

    <span class="datatype">float</span> result <span class="symbol">=</span> a <span class="symbol">+</span> b<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="header-file">"Result = %f"</span><span class="symbol">,</span> result<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">Output</div>

<pre>
Result = 12.500000
</pre>

</div>

<h4>Explanation</h4>

<ul>
<li><b>a</b> is an integer.</li>
<li><b>b</b> is a float.</li>
<li>Before addition, the compiler converts <b>a</b> from int to float.</li>
<li>The result becomes a floating-point value.</li>
</ul>

<hr>

<h4>Example 2: Character Converted to Integer</h4>

<div class="code-box">

    <div class="code-title">Example: Character Converted to Integer</div>

<pre>
<span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">char</span> ch <span class="symbol">=</span> <span class="header-file">'A'</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="header-file">"%d"</span><span class="symbol">,</span> ch<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">Output</div>

<pre>
65
</pre>

</div>

<h4>Explanation</h4>

<p>
The character <b>'A'</b> has the ASCII value <b>65</b>.
The compiler automatically converts the character into its integer ASCII value.
</p>

<hr>

<h3>2. Explicit Type Conversion (Type Casting)</h3>

<p>
In Explicit Type Conversion, the programmer manually converts one data type into another
using the type cast operator.
</p>

<p><b>Syntax</b></p>

<div class="code-box">

    <div class="code-title">Syntax of Type Casting</div>

<pre>
<span class="symbol">(</span><span class="datatype">data_type</span><span class="symbol">)</span> expression
</pre>

</div>

<hr>

<h4>Example 1: Integer Division Using Type Casting</h4>

<div class="code-box">

    <div class="code-title">Example: Integer Division Using Type Casting</div>

<pre>
<span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> a <span class="symbol">=</span> 10<span class="symbol">;</span>
    <span class="datatype">int</span> b <span class="symbol">=</span> 3<span class="symbol">;</span>

    <span class="datatype">float</span> result <span class="symbol">=</span> <span class="symbol">(</span><span class="datatype">float</span><span class="symbol">)</span>a <span class="symbol">/</span> b<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="header-file">"Result = %f"</span><span class="symbol">,</span> result<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">Output</div>

<pre>
Result = 3.333333
</pre>

</div>

<h4>Explanation</h4>

<ul>
<li>Without type casting, <b>10 / 3</b> performs integer division.</li>
<li>Integer division removes the decimal part.</li>
<li>After converting <b>a</b> into float, floating-point division is performed.</li>
</ul>

<hr>

<h4>Example 2: Float Converted to Integer</h4>

<div class="code-box">

    <div class="code-title">Example: Float Converted to Integer</div>

<pre>
<span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">float</span> num <span class="symbol">=</span> 9.85<span class="symbol">;</span>

    <span class="datatype">int</span> value <span class="symbol">=</span> <span class="symbol">(</span><span class="datatype">int</span><span class="symbol">)</span>num<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="header-file">"%d"</span><span class="symbol">,</span> value<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">Output</div>

<pre>
9
</pre>

</div>

<h4>Explanation</h4>

<p>
The decimal part (.85) is removed after converting the float into an integer.
Only the whole number (9) is stored.
</p>

<hr>

<h3>Why Type Conversion is Needed?</h3>

<ul>
<li>To perform calculations between different data types.</li>
<li>To avoid compiler warnings.</li>
<li>To improve program accuracy.</li>
<li>To control the result of arithmetic operations.</li>
<li>To convert data into the required format.</li>
</ul>

<hr>

<h3>Important Notes</h3>

<table class="notes-table">

<tr>
<th>Point</th>
<th>Description</th>
</tr>

<tr>
<td>Implicit Conversion</td>
<td>Done automatically by the compiler.</td>
</tr>

<tr>
<td>Explicit Conversion</td>
<td>Done manually using type casting.</td>
</tr>

<tr>
<td>Data Loss</td>
<td>Converting from float to int removes the decimal part.</td>
</tr>

<tr>
<td>Safe Conversion</td>
<td>Converting from a smaller type to a larger type is generally safe.</td>
</tr>

<tr>
<td>Programmer Control</td>
<td>Type casting gives the programmer full control over conversion.</td>
</tr>

</table>

<hr>

<h3>Real-Life Analogy</h3>

<p>
Suppose you have <b>₹10</b> (integer) and <b>₹2.50</b> (float).
When you add them, the answer becomes <b>₹12.50</b>.
Similarly, C converts the integer into a float so that the decimal value is preserved.
</p>

<hr>

<h3>Summary</h3>

<ul>
<li>Type Conversion means converting one data type into another.</li>
<li>C supports two types of conversion:
    <ul>
        <li>Implicit Type Conversion</li>
        <li>Explicit Type Conversion (Type Casting)</li>
    </ul>
</li>
<li>Implicit conversion is performed automatically by the compiler.</li>
<li>Explicit conversion is performed manually by the programmer.</li>
<li>Type casting is useful for obtaining accurate calculation results.</li>
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

<div class="code-box">

    <div class="code-title">
        <span>Program: const Keyword</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="keyword">const</span> <span class="datatype">int</span> age <span class="symbol">=</span> <span class="number">18</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Age = %d"</span><span class="symbol">,</span> age<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Age = <span class="number">18</span></code></pre>

</div>

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
An <b>Integer Constant</b> is a fixed whole number written directly in a C program.
It does <b>not</b> contain a decimal point. Integer constants can be <b>positive</b>,
<b>negative</b>, or <b>zero</b>.
</p>

<table class="notes-table">
<tr>
<th>Constant</th>
<th>Description</th>
</tr>

<tr>
<td>10</td>
<td>Positive Integer Constant</td>
</tr>

<tr>
<td>-50</td>
<td>Negative Integer Constant</td>
</tr>

<tr>
<td>0</td>
<td>Zero Constant</td>
</tr>
</table>

<div class="note">
<b>Remember:</b>
<ul>
<li>An <b>Integer Constant</b> is a fixed numeric value written directly in the program.</li>
<li>In the statement <code>int marks = 90;</code>, <b>marks</b> is a variable, while <b>90</b> is an integer constant (literal).</li>
<li>Do not confuse an <b>Integer Constant</b> with a <b>Constant Variable</b>. A constant variable is declared using the <code>const</code> keyword (for example, <code>const int age = 18;</code>).</li>
</ul>
</div>

<h4>Example</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: Integer Constants</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="comment">// Integer constants</span>
    <span class="datatype">int</span> marks <span class="symbol">=</span> <span class="number">90</span><span class="symbol">;</span>
    <span class="datatype">int</span> temperature <span class="symbol">=</span> <span class="number">-50</span><span class="symbol">;</span>
    <span class="datatype">int</span> count <span class="symbol">=</span> <span class="number">0</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Marks = %d\\n"</span><span class="symbol">,</span> marks<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Temperature = %d\\n"</span><span class="symbol">,</span> temperature<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Count = %d\\n"</span><span class="symbol">,</span> count<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Marks = <span class="number">90</span>
Temperature = <span class="number">-50</span>
Count = <span class="number">0</span></code></pre>

</div>

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

<div class="code-box">

    <div class="code-title">
        <span>Program: Floating-Point Constants</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="comment">// Floating-point constants</span>
    <span class="datatype">float</span> price <span class="symbol">=</span> <span class="number">99.99</span><span class="symbol">;</span>
    <span class="datatype">float</span> temperature <span class="symbol">=</span> <span class="number">-12.5</span><span class="symbol">;</span>
    <span class="datatype">float</span> discount <span class="symbol">=</span> <span class="number">0.0</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Price = %.2f\\n"</span><span class="symbol">,</span> price<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Temperature = %.1f\\n"</span><span class="symbol">,</span> temperature<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Discount = %.1f\\n"</span><span class="symbol">,</span> discount<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Price = <span class="number">99.99</span>
Temperature = <span class="number">-12.5</span>
Discount = <span class="number">0.0</span></code></pre>

</div>

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

<div class="code-box">

    <div class="code-title">
        <span>Program: Character Constants</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="comment">// Character constants</span>
    <span class="datatype">char</span> grade <span class="symbol">=</span> <span class="character">'A'</span><span class="symbol">;</span>
    <span class="datatype">char</span> section <span class="symbol">=</span> <span class="character">'B'</span><span class="symbol">;</span>
    <span class="datatype">char</span> digit <span class="symbol">=</span> <span class="character">'5'</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Grade = %c\\n"</span><span class="symbol">,</span> grade<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Section = %c\\n"</span><span class="symbol">,</span> section<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Digit = %c\\n"</span><span class="symbol">,</span> digit<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Grade = <span class="character">A</span>
Section = <span class="character">B</span>
Digit = <span class="character">5</span></code></pre>

</div>

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

<div class="code-box">

    <div class="code-title">
        <span>Program: String Constants</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="comment">// String constants</span>
    <span class="datatype">char</span> name<span class="symbol">[] =</span> <span class="string">"Pradeep"</span><span class="symbol">;</span>
    <span class="datatype">char</span> city<span class="symbol">[] =</span> <span class="string">"Delhi"</span><span class="symbol">;</span>
    <span class="datatype">char</span> course<span class="symbol">[] =</span> <span class="string">"BCA"</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Name = %s\\n"</span><span class="symbol">,</span> name<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"City = %s\\n"</span><span class="symbol">,</span> city<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Course = %s\\n"</span><span class="symbol">,</span> course<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Name = <span class="string">Pradeep</span>
City = <span class="string">Delhi</span>
Course = <span class="string">BCA</span></code></pre>

</div>

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

<div class="code-box">

    <div class="code-title">
        <span>Program: Variables</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="comment">// Variable declaration and initialization</span>
    <span class="datatype">int</span> age <span class="symbol">=</span> <span class="number">20</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Age = %d\\n"</span><span class="symbol">,</span> age<span class="symbol">);</span>

    <span class="comment">// Change the value of the variable</span>
    age <span class="symbol">=</span> <span class="number">25</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Updated Age = %d\\n"</span><span class="symbol">,</span> age<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Age = <span class="number">20</span>
Updated Age = <span class="number">25</span></code></pre>

</div>

<p>
Here:
</p>

<ul>
<li><strong>age</strong> → Variable</li>
<li><strong>20</strong> → Literal</li>
</ul>

<hr>

<h3>Types of Literals</h3>

<h4>1. Integer Literal</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: Integer Literal</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> num <span class="symbol">=</span> <span class="number">100</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Number = %d\\n"</span><span class="symbol">,</span> num<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<p>
In the statement <code>int num = 100;</code>, <b>100</b> is an <b>integer literal</b>.
</p>

<h4>2. Floating-Point Literal</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: Floating-Point Literal</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">float</span> pi <span class="symbol">=</span> <span class="number">3.14</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Pi = %.2f\\n"</span><span class="symbol">,</span> pi<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<p>
In the statement <code>float pi = 3.14;</code>, <b>3.14</b> is a <b>floating-point literal</b>.
</p>

<h4>3. Character Literal</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: Character Literal</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">char</span> ch <span class="symbol">=</span> <span class="character">'A'</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Character = %c\\n"</span><span class="symbol">,</span> ch<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<p>
In the statement <code>char ch = 'A';</code>, <b>'A'</b> is a <b>character literal</b>.
</p>

<h4>4. String Literal</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: String Literal</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">char</span> city<span class="symbol">[] =</span> <span class="string">"Delhi"</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"City = %s\\n"</span><span class="symbol">,</span> city<span class="symbol">);</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<p>
In the statement <code>char city[] = "Delhi";</code>, <b>"Delhi"</b> is a <b>string literal</b>.
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

<div class="code-box">

    <div class="code-title">
        <span>Program: Constants in C</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="comment">// Constant variable</span>
    <span class="keyword">const</span> <span class="datatype">int</span> age <span class="symbol">=</span> <span class="number">18</span><span class="symbol">;</span>

    <span class="comment">// Variables initialized with constants (literals)</span>
    <span class="datatype">int</span> marks <span class="symbol">=</span> <span class="number">90</span><span class="symbol">;</span>
    <span class="datatype">float</span> pi <span class="symbol">=</span> <span class="number">3.14</span><span class="symbol">;</span>
    <span class="datatype">char</span> grade <span class="symbol">=</span> <span class="character">'A'</span><span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Age = %d\\n"</span><span class="symbol">,</span> age<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Marks = %d\\n"</span><span class="symbol">,</span> marks<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Pi = %.2f\\n"</span><span class="symbol">,</span> pi<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Grade = %c\\n"</span><span class="symbol">,</span> grade<span class="symbol">);</span>

    <span class="comment">// age = 20;  // Error: Cannot modify a constant variable</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Age = <span class="number">18</span>
Marks = <span class="number">90</span>
Pi = <span class="number">3.14</span>
Grade = <span class="character">A</span></code></pre>

</div>


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

<h3>Conditional Statements</h3>

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

<h4>Syntax</h4>

<div class="code-box">

    <div class="code-title">
        <span>Syntax: if Statement</span>
    </div>

<pre><code><span class="keyword">if</span> <span class="symbol">(</span>condition<span class="symbol">)</span>
<span class="symbol">{</span>
    <span class="comment">// Statements to execute if the condition is true</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Flow of Execution</h4>

<ul>
<li>The condition is checked first.</li>
<li>If the condition is true (1), the statements inside the if block execute.</li>
<li>If the condition is false (0), the statements inside the if block are skipped.</li>
<li>The program continues with the next statement after the if block.</li>
</ul>

<h4>Example 1: Check Eligibility for Voting</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: if Statement</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> age <span class="symbol">=</span> <span class="number">20</span><span class="symbol">;</span>

    <span class="keyword">if</span> <span class="symbol">(</span>age <span class="symbol">&gt;=</span> <span class="number">18</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"You are eligible to vote.\\n"</span><span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>You are eligible to vote.</code></pre>

</div>

<p>
Since age is 20 and the condition (age >= 18) is true, the message is displayed.
</p>

<hr>

<h4>Example 2: Check Positive Number</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: if Statement</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> num <span class="symbol">=</span> <span class="number">10</span><span class="symbol">;</span>

    <span class="keyword">if</span> <span class="symbol">(</span>num <span class="symbol">&gt;</span> <span class="number">0</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Positive Number\\n"</span><span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Positive Number</code></pre>

</div>

<hr>

<h4>Example 3: Check Pass or Not</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: if Statement</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> marks <span class="symbol">=</span> <span class="number">45</span><span class="symbol">;</span>

    <span class="keyword">if</span> <span class="symbol">(</span>marks <span class="symbol">&gt;=</span> <span class="number">40</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Pass\\n"</span><span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span></code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Pass</code></pre>

</div>

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

<div class="code-box">

    <div class="code-title">
        <span>Syntax: if-else Statement</span>
    </div>

<pre><code><span class="keyword">if</span> <span class="symbol">(</span>condition<span class="symbol">)</span>
<span class="symbol">{</span>
    <span class="comment">// Executes when condition is true</span>
<span class="symbol">}</span>
<span class="keyword">else</span>
<span class="symbol">{</span>
    <span class="comment">// Executes when condition is false</span>
<span class="symbol">}</span>
</code></pre>

</div>

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
<img src="bca_images/if-else.png" alt="flow chart if else" class="notes_img">

<hr>

<h4>Example 1: Check Pass or Fail</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: if-else Statement</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> marks <span class="symbol">=</span> <span class="number">35</span><span class="symbol">;</span>

    <span class="keyword">if</span> <span class="symbol">(</span>marks <span class="symbol">&gt;=</span> <span class="number">40</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Pass"</span><span class="symbol">);</span>
    <span class="symbol">}</span>
    <span class="keyword">else</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Fail"</span><span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
Fail
</pre>

<p>
Since marks are less than 40, the condition becomes false and the else block executes.
</p>

<hr>

<h4>Example 2: Check Voting Eligibility</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: Voting Eligibility using if-else Statement</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> age <span class="symbol">=</span> <span class="number">17</span><span class="symbol">;</span>

    <span class="keyword">if</span> <span class="symbol">(</span>age <span class="symbol">&gt;=</span> <span class="number">18</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Eligible for Voting"</span><span class="symbol">);</span>
    <span class="symbol">}</span>
    <span class="keyword">else</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Not Eligible for Voting"</span><span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
Not Eligible for Voting
</pre>

<hr>

<h4>Example 3: Check Positive or Negative Number</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: Check Positive or Negative Number</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> num <span class="symbol">=</span> <span class="symbol">-</span><span class="number">5</span><span class="symbol">;</span>

    <span class="keyword">if</span> <span class="symbol">(</span>num <span class="symbol">&gt;=</span> <span class="number">0</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Positive Number"</span><span class="symbol">);</span>
    <span class="symbol">}</span>
    <span class="keyword">else</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Negative Number"</span><span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
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

<div class="code-box">

    <div class="code-title">
        <span class="code-icon"></span>
        <span>Syntax </span>
    </div>

<pre><span class="keyword">if</span>(condition1)
{
    <span class="keyword">if</span>(condition2)
    {
        <span class="comment">// statements</span>
    }
}
</pre>

</div>

<hr>

<h4>Working of Nested if Statement</h4>

<ul>
<li>The outer if condition is checked first.</li>
<li>If the outer condition is true, the inner if condition is checked.</li>
<li>If both conditions are true, the inner block executes.</li>
<li>If the outer condition is false, the inner condition is never checked.</li>
</ul>

<hr>


<img src="bca_images/nested-if.png" 
     alt="Flowchart of Nested if Statement" 
   class="notes_img"
     >

<hr>

<h4>Example: Student Eligible for Exam</h4>

<div class="code-box">
    <div class="code-title">
        <span class="code-text">eligibal.c</span>
    </div>
<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>
<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="datatype">int</span> registered = <span class="number">1</span>;
    <span class="datatype">int</span> attendance = <span class="number">80</span>;
    <span class="keyword">if</span>(registered == <span class="number">1</span>)
    {
        <span class="keyword">if</span>(attendance &gt;= <span class="number">75</span>)
        {
            <span class="function">printf</span>(<span class="string">"Eligible for Exam"</span>);
        }
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>

</div>

<h4>Output</h4>

<div class="code-box output-box">
    <div class="code-title">
        <span class="code-dot red"></span>
        <span class="code-dot yellow"></span>
        <span class="code-dot green"></span>
        <span class="code-text">Output</span>
    </div>
<pre><code>Eligible for Exam</code></pre>
</div>

<p>
Since the student is registered and attendance is greater than 75%, the message is displayed.
</p>

<hr>

<h4>Example 2: Driving License Eligibility</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: Nested if Statement</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> age <span class="symbol">=</span> <span class="number">20</span><span class="symbol">;</span>
    <span class="datatype">int</span> testPassed <span class="symbol">=</span> <span class="number">1</span><span class="symbol">;</span>

    <span class="keyword">if</span> <span class="symbol">(</span>age <span class="symbol">&gt;=</span> <span class="number">18</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="keyword">if</span> <span class="symbol">(</span>testPassed <span class="symbol">==</span> <span class="number">1</span><span class="symbol">)</span>
        <span class="symbol">{</span>
            <span class="function">printf</span><span class="symbol">(</span><span class="string">"License Approved"</span><span class="symbol">);</span>
        <span class="symbol">}</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<pre>
License Approved
</pre>

<hr>

<h4>Example 3: Employee Bonus</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: Employee Bonus Approval</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> experience <span class="symbol">=</span> <span class="number">5</span><span class="symbol">;</span>
    <span class="datatype">int</span> performance <span class="symbol">=</span> <span class="number">90</span><span class="symbol">;</span>

    <span class="keyword">if</span> <span class="symbol">(</span>experience <span class="symbol">&gt;=</span> <span class="number">3</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="keyword">if</span> <span class="symbol">(</span>performance <span class="symbol">&gt;=</span> <span class="number">80</span><span class="symbol">)</span>
        <span class="symbol">{</span>
            <span class="function">printf</span><span class="symbol">(</span><span class="string">"Bonus Approved"</span><span class="symbol">);</span>
        <span class="symbol">}</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

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

<div class="code-box">

    <div class="code-title">
        <span>Program: Nested if-else Statement</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> age <span class="symbol">=</span> <span class="number">17</span><span class="symbol">;</span>

    <span class="keyword">if</span> <span class="symbol">(</span>age <span class="symbol">&gt;=</span> <span class="number">18</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="keyword">if</span> <span class="symbol">(</span>age <span class="symbol">&gt;=</span> <span class="number">21</span><span class="symbol">)</span>
        <span class="symbol">{</span>
            <span class="function">printf</span><span class="symbol">(</span><span class="string">"Adult"</span><span class="symbol">);</span>
        <span class="symbol">}</span>
        <span class="keyword">else</span>
        <span class="symbol">{</span>
            <span class="function">printf</span><span class="symbol">(</span><span class="string">"Young Adult"</span><span class="symbol">);</span>
        <span class="symbol">}</span>
    <span class="symbol">}</span>
    <span class="keyword">else</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Minor"</span><span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

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
<h4>Flowchart of Else-if Ladder</h4>
<img src="bca_images/if-else-ladder.png" class="notes_img">

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

<h4>Example 1: Student Grade System</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: Grade Calculation using else-if Ladder</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> marks <span class="symbol">=</span> <span class="number">82</span><span class="symbol">;</span>

    <span class="keyword">if</span> <span class="symbol">(</span>marks <span class="symbol">&gt;=</span> <span class="number">90</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Grade A"</span><span class="symbol">);</span>
    <span class="symbol">}</span>
    <span class="keyword">else if</span> <span class="symbol">(</span>marks <span class="symbol">&gt;=</span> <span class="number">75</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Grade B"</span><span class="symbol">);</span>
    <span class="symbol">}</span>
    <span class="keyword">else if</span> <span class="symbol">(</span>marks <span class="symbol">&gt;=</span> <span class="number">60</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Grade C"</span><span class="symbol">);</span>
    <span class="symbol">}</span>
    <span class="keyword">else if</span> <span class="symbol">(</span>marks <span class="symbol">&gt;=</span> <span class="number">40</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Grade D"</span><span class="symbol">);</span>
    <span class="symbol">}</span>
    <span class="keyword">else</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Fail"</span><span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
Grade B
</pre>

<p>
Since marks are 82, the second condition becomes true and Grade B is displayed.
</p>

<hr>

<h4>Example 2: Find Largest Number</h4>

<div class="code-box">

    <div class="code-title">
        <span>Program: Find the Largest of Three Numbers</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> a <span class="symbol">=</span> <span class="number">20</span><span class="symbol">,</span> b <span class="symbol">=</span> <span class="number">35</span><span class="symbol">,</span> c <span class="symbol">=</span> <span class="number">15</span><span class="symbol">;</span>

    <span class="keyword">if</span> <span class="symbol">(</span>a <span class="symbol">&gt;</span> b <span class="symbol">&amp;&amp;</span> a <span class="symbol">&gt;</span> c<span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"A is Largest"</span><span class="symbol">);</span>
    <span class="symbol">}</span>
    <span class="keyword">else if</span> <span class="symbol">(</span>b <span class="symbol">&gt;</span> a <span class="symbol">&amp;&amp;</span> b <span class="symbol">&gt;</span> c<span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"B is Largest"</span><span class="symbol">);</span>
    <span class="symbol">}</span>
    <span class="keyword">else</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"C is Largest"</span><span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
B is Largest
</pre>

<hr>

<div class="code-box">

    <div class="code-title">
        <span>Program: Check Age Category using else-if Ladder</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> age <span class="symbol">=</span> <span class="number">25</span><span class="symbol">;</span>

    <span class="keyword">if</span> <span class="symbol">(</span>age <span class="symbol">&lt;</span> <span class="number">13</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Child"</span><span class="symbol">);</span>
    <span class="symbol">}</span>
    <span class="keyword">else if</span> <span class="symbol">(</span>age <span class="symbol">&lt;</span> <span class="number">20</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Teenager"</span><span class="symbol">);</span>
    <span class="symbol">}</span>
    <span class="keyword">else if</span> <span class="symbol">(</span>age <span class="symbol">&lt;</span> <span class="number">60</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Adult"</span><span class="symbol">);</span>
    <span class="symbol">}</span>
    <span class="keyword">else</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Senior Citizen"</span><span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> <span class="number">0</span><span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
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

<img src="bca_images/switch.png" class="notes_img">

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

<h4>Example 1: Display Day Name</h4>

<div class="code-box">

    <div class="code-title">
        <span class="code-dot red"></span>
        <span class="code-dot yellow"></span>
        <span class="code-dot green"></span>

        <span class="code-text">Example: switch Statement</span>
    </div>

<pre><code>
<span class="header-file">#include &lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="datatype">int</span> day = <span class="number">3</span>;

    <span class="keyword">switch</span>(day)
    {
        <span class="keyword">case</span> <span class="number">1</span>:
            <span class="function">printf</span>(<span class="string">"Monday"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">2</span>:
            <span class="function">printf</span>(<span class="string">"Tuesday"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">3</span>:
            <span class="function">printf</span>(<span class="string">"Wednesday"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">4</span>:
            <span class="function">printf</span>(<span class="string">"Thursday"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">5</span>:
            <span class="function">printf</span>(<span class="string">"Friday"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">default</span>:
            <span class="function">printf</span>(<span class="string">"Invalid Day"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}
</code></pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
Wednesday
</pre>

<hr>

<h4>Example 2: Simple Calculator</h4>

<div class="code-box">

    <div class="code-title">
        <span class="code-dot red"></span>
        <span class="code-dot yellow"></span>
        <span class="code-dot green"></span>

        <span class="code-text">Example: switch Statement</span>
    </div>

<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>
<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="datatype">int</span> choice = <span class="number">2</span>;
    <span class="datatype">int</span> a = <span class="number">20</span>, b = <span class="number">10</span>;
    <span class="keyword">switch</span>(choice)
    {
        <span class="keyword">case</span> <span class="number">1</span>:
            <span class="function">printf</span>(<span class="string">"Addition = %d"</span>, a + b);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">2</span>:
            <span class="function">printf</span>(<span class="string">"Subtraction = %d"</span>, a - b);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">3</span>:
            <span class="function">printf</span>(<span class="string">"Multiplication = %d"</span>, a * b);
            <span class="keyword">break</span>;

        <span class="keyword">case</span> <span class="number">4</span>:
            <span class="function">printf</span>(<span class="string">"Division = %d"</span>, a / b);
            <span class="keyword">break</span>;

        <span class="keyword">default</span>:
            <span class="function">printf</span>(<span class="string">"Invalid Choice"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
Subtraction = 10
</pre>
<hr>
<h4>Example 3: Check Vowel or Consonant</h4>

<div class="code-box">

    <div class="code-title">
        <span class="code-dot red"></span>
        <span class="code-dot yellow"></span>
        <span class="code-dot green"></span>

        <span class="code-text">Example: switch Statement</span>
    </div>

<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>
<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="datatype">char</span> ch = <span class="string">'A'</span>;
    <span class="keyword">switch</span>(ch)
    {
        <span class="keyword">case</span> <span class="string">'A'</span>:
        <span class="keyword">case</span> <span class="string">'E'</span>:
        <span class="keyword">case</span> <span class="string">'I'</span>:
        <span class="keyword">case</span> <span class="string">'O'</span>:
        <span class="keyword">case</span> <span class="string">'U'</span>:
            <span class="function">printf</span>(<span class="string">"Vowel"</span>);
            <span class="keyword">break</span>;

        <span class="keyword">default</span>:
            <span class="function">printf</span>(<span class="string">"Consonant"</span>);
    }
    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
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

<h4>Example: Without break</h4>

<div class="code-box">
    <div class="code-title">
        <span class="code-dot red"></span>
        <span class="code-dot yellow"></span>
        <span class="code-dot green"></span>
        <span class="code-text">Example: switch Statement Without break</span>
    </div>
<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>
<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="datatype">int</span> num = <span class="number">1</span>;
    <span class="keyword">switch</span>(num)
    {
        <span class="keyword">case</span> <span class="number">1</span>:
            <span class="function">printf</span>(<span class="string">"One\\n"</span>);

        <span class="keyword">case</span> <span class="number">2</span>:
            <span class="function">printf</span>(<span class="string">"Two\\n"</span>);

        <span class="keyword">case</span> <span class="number">3</span>:
            <span class="function">printf</span>(<span class="string">"Three\\n"</span>);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>
</div>

<h4>Output</h4>

<pre class="notes_text_pre">
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

<h4>Example 5: Using default Case</h4>

<div class="code-box">

    <div class="code-title">
        <span class="code-dot red"></span>
        <span class="code-dot yellow"></span>
        <span class="code-dot green"></span>

        <span class="code-text">Example: switch Statement with default</span>
    </div>

<pre><code>
<span class="datatype">int</span> choice = <span class="number">10</span>;

<span class="keyword">switch</span>(choice)
{
    <span class="keyword">case</span> <span class="number">1</span>:
        <span class="function">printf</span>(<span class="string">"Option 1"</span>);
        <span class="keyword">break</span>;

    <span class="keyword">case</span> <span class="number">2</span>:
        <span class="function">printf</span>(<span class="string">"Option 2"</span>);
        <span class="keyword">break</span>;

    <span class="keyword">default</span>:
        <span class="function">printf</span>(<span class="string">"Invalid Option"</span>);
}
</code></pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
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

<pre class="notes_text_pre">
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
<img src="bca_images/for-loop.png" alt="data type" class="notes_img" >

<hr>

<h4>Example 1: Print Numbers from 1 to 10</h4>


<div class="code-box">

    <div class="code-title">
        <span class="code-dot red"></span>
        <span class="code-dot yellow"></span>
        <span class="code-dot green"></span>

        <span class="code-text">Example: for Loop</span>
    </div>

<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="datatype">int</span> i;

    <span class="keyword">for</span>(i = <span class="number">1</span>; i &lt;= <span class="number">10</span>; i++)
    {
        <span class="function">printf</span>(<span class="string">"%d\\n"</span>, i);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
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

<div class="code-box">

    <div class="code-title">
        <span class="code-dot red"></span>
        <span class="code-dot yellow"></span>
        <span class="code-dot green"></span>

        <span class="code-text">Example: for Loop</span>
    </div>

<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="datatype">int</span> i;

    <span class="keyword">for</span>(i = <span class="number">2</span>; i &lt;= <span class="number">20</span>; i = i + <span class="number">2</span>)
    {
        <span class="function">printf</span>(<span class="string">"%d\\n"</span>, i);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
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

<div class="code-box">

    <div class="code-title">
        <span class="code-dot red"></span>
        <span class="code-dot yellow"></span>
        <span class="code-dot green"></span>

        <span class="code-text">Example: for Loop</span>
    </div>

<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="datatype">int</span> i;

    <span class="keyword">for</span>(i = <span class="number">1</span>; i &lt;= <span class="number">10</span>; i++)
    {
        <span class="function">printf</span>(<span class="string">"5 x %d = %d\\n"</span>, i, <span class="number">5</span> * i);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
</pre>
<hr>

<h4>Example 4: Print Numbers in Reverse Order</h4>

<div class="code-box">

    <div class="code-title">
        <span class="code-dot red"></span>
        <span class="code-dot yellow"></span>
        <span class="code-dot green"></span>

        <span class="code-text">Example: for Loop</span>
    </div>

<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="datatype">int</span> i;

    <span class="keyword">for</span>(i = <span class="number">10</span>; i &gt;= <span class="number">1</span>; i--)
    {
        <span class="function">printf</span>(<span class="string">"%d\\n"</span>, i);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
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
<img src="bca_images/nested-for-loop1.png" alt="data type" class="notes_img" >

<h4>Example 5: Print Square Pattern Using Nested for Loop</h4>

<div class="code-box">

    <div class="code-title">
        <span class="code-dot red"></span>
        <span class="code-dot yellow"></span>
        <span class="code-dot green"></span>

        <span class="code-text">Example: Nested for Loop</span>
    </div>

<pre>
<span class="keyword">for</span>(i = <span class="number">1</span>; i &lt;= <span class="number">3</span>; i++)
{
    <span class="keyword">for</span>(j = <span class="number">1</span>; j &lt;= <span class="number">3</span>; j++)
    {
        <span class="function">printf</span>(<span class="string">"* "</span>);
    }

    <span class="function">printf</span>(<span class="string">"\\n"</span>);
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
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

<div class="code-box">

    <div class="code-title">
        <span class="code-dot red"></span>
        <span class="code-dot yellow"></span>
        <span class="code-dot green"></span>

        <span class="code-text">Syntax: while Loop</span>
    </div>

<pre>
<span class="keyword">while</span>(condition)
{
    <span class="comment">// statements</span>
}
</pre>

</div>

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
<img src="bca_images/while-loop.png" alt="data type" class="notes_img" >

<hr>

<h4>Example 1: Print Numbers from 1 to 10</h4>

<div class="code-box">

    <div class="code-title">
        <span class="code-dot red"></span>
        <span class="code-dot yellow"></span>
        <span class="code-dot green"></span>

        <span class="code-text">Example: while Loop</span>
    </div>

<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="datatype">int</span> i = <span class="number">1</span>;

    <span class="keyword">while</span>(i &lt;= <span class="number">10</span>)
    {
        <span class="function">printf</span>(<span class="string">"%d\\n"</span>, i);
        i++;
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
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

<div class="code-box">

    <div class="code-title">
        <span class="code-text">Example: while Loop</span>
    </div>

<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="datatype">int</span> i = <span class="number">2</span>;

    <span class="keyword">while</span>(i &lt;= <span class="number">20</span>)
    {
        <span class="function">printf</span>(<span class="string">"%d\\n"</span>, i);
        i = i + <span class="number">2</span>;
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
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

<div class="code-box">

    <div class="code-title">
        <span class="code-text">Example: while Loop</span>
    </div>

<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="datatype">int</span> i = <span class="number">1</span>;

    <span class="keyword">while</span>(i &lt;= <span class="number">10</span>)
    {
        <span class="function">printf</span>(<span class="string">"5 x %d = %d\\n"</span>, i, <span class="number">5</span> * i);
        i++;
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
</pre>
<hr>

<h4>Example 4: Reverse Counting</h4>

<div class="code-box">

    <div class="code-title">
        <span class="code-text">Example: while Loop</span>
    </div>

<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="datatype">int</span> i = <span class="number">10</span>;

    <span class="keyword">while</span>(i &gt;= <span class="number">1</span>)
    {
        <span class="function">printf</span>(<span class="string">"%d\\n"</span>, i);
        i--;
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
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

<h4>Example 5: Infinite while Loop</h4>

<div class="code-box">

    <div class="code-title">
        <span class="code-text">Example: Infinite while Loop</span>
    </div>

<pre>
<span class="keyword">while</span>(<span class="number">1</span>)
{
    <span class="function">printf</span>(<span class="string">"Hello"</span>);
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
Hello
Hello
Hello
Hello
...
(continues indefinitely until the program is stopped)
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

<div class="code-box">

    <div class="code-title">
        <span class="code-text">Syntax: do-while Loop</span>
    </div>

<pre>
<span class="keyword">do</span>
{
    <span class="comment">// statements</span>

} <span class="keyword">while</span>(condition);
</pre>

</div>

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
<img src="bca_images/do-while-loop.png" alt="do while loop" class="notes_img" >

<hr>

<h4>Example 1: Print Numbers from 1 to 10</h4>

<div class="code-box">

    <div class="code-title">
        <span class="code-text">Example: do-while Loop</span>
    </div>

<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="datatype">int</span> i = <span class="number">1</span>;

    <span class="keyword">do</span>
    {
        <span class="function">printf</span>(<span class="string">"%d\\n"</span>, i);
        i++;
    }
    <span class="keyword">while</span>(i &lt;= <span class="number">10</span>);

    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
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

<div class="code-box">

    <div class="code-title">
        <span class="code-text">Example: do-while Loop</span>
    </div>

<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="datatype">int</span> i = <span class="number">1</span>;

    <span class="keyword">do</span>
    {
        <span class="function">printf</span>(<span class="string">"5 x %d = %d\\n"</span>, i, <span class="number">5</span> * i);
        i++;
    }
    <span class="keyword">while</span>(i &lt;= <span class="number">10</span>);

    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
</pre>

<hr>

<h4>Example 3: Loop Executes At Least Once</h4>

<div class="code-box">

    <div class="code-title">
        <span class="code-text">Example: do-while Loop</span>
    </div>

<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="datatype">int</span> i = <span class="number">20</span>;

    <span class="keyword">do</span>
    {
        <span class="function">printf</span>(<span class="string">"Hello Students"</span>);
    }
    <span class="keyword">while</span>(i &lt;= <span class="number">10</span>);

    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
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
In C programming, statements normally execute one after another from top to bottom. This is called the <strong>normal flow of execution</strong>.
</p>

<p>
However, in some situations we need to stop a loop immediately, skip some statements, return from a function, or jump to another part of the program. To perform these tasks, C provides <strong>Jump Statements</strong>.
</p>

<p>
<strong>Definition:</strong> Jump Statements are special statements that transfer the control of a program from one location to another instead of following the normal sequential execution.
</p>

<hr>

<h4>Easy Meaning</h4>

<p>
Think of a student walking through a school corridor.
Normally, the student walks from one classroom to the next in sequence.
Sometimes the student may:
</p>

<ul>
<li>Stop walking immediately.</li>
<li>Skip one classroom and move to the next.</li>
<li>Go directly to the Principal's office.</li>
<li>Return back to the classroom.</li>
</ul>

<p>
Similarly, Jump Statements change the normal flow of a program.
</p>

<hr>

<h4>Why Do We Need Jump Statements?</h4>

<ul>
<li>To stop a loop before it finishes.</li>
<li>To skip unnecessary iterations.</li>
<li>To transfer control to another section of the program.</li>
<li>To return a value from a function.</li>
<li>To make programs faster and more efficient.</li>
</ul>

<hr>

<h4>Types of Jump Statements in C</h4>

<table class="notes-table">

<tr>
<th>Statement</th>
<th>Purpose</th>
<th>Used With</th>
</tr>

<tr>
<td><strong>break</strong></td>
<td>Terminates the current loop or switch statement.</td>
<td>Loops, switch</td>
</tr>

<tr>
<td><strong>continue</strong></td>
<td>Skips the current iteration and starts the next iteration.</td>
<td>Loops</td>
</tr>

<tr>
<td><strong>goto</strong></td>
<td>Transfers control directly to a labeled statement.</td>
<td>Anywhere inside the same function</td>
</tr>

<tr>
<td><strong>return</strong></td>
<td>Terminates the current function and returns control.</td>
<td>Functions</td>
</tr>

</table>

<hr>

<h4>Understanding Each Jump Statement</h4>

<h5>1. break Statement</h5>

<p>
The <strong>break</strong> statement immediately stops the execution of a loop or switch statement.
Once <strong>break</strong> is executed, the control moves to the first statement after the loop.
</p>

<p><strong>Student Example:</strong></p>

<p>
Suppose your teacher asks you to search for Roll Number <strong>25</strong>.
As soon as you find Roll Number 25, you stop searching.
There is no need to check the remaining students.
</p>

<p><strong>Real-Life Example:</strong></p>

<ul>
<li>Finding a student's record.</li>
<li>Searching a word in a document.</li>
<li>Stopping a menu after selecting Exit.</li>
</ul>

<h4>Example 2: Find Student Roll Number</h4>

<div class="code-box">

    <div class="code-title">
        <span class="code-text">Example: break Statement</span>
    </div>

<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="datatype">int</span> roll;

    <span class="keyword">for</span>(roll = <span class="number">1</span>; roll &lt;= <span class="number">50</span>; roll++)
    {
        <span class="keyword">if</span>(roll == <span class="number">25</span>)
        {
            <span class="function">printf</span>(<span class="string">"Student Found"</span>);
            <span class="keyword">break</span>;
        }
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
Student Found
</pre>

<h4>Example 1: Using break Statement</h4>

<div class="code-box">

    <div class="code-title">
        <span class="code-text">Example: break Statement</span>
    </div>

<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="datatype">int</span> i;

    <span class="keyword">for</span>(i = <span class="number">1</span>; i &lt;= <span class="number">10</span>; i++)
    {
        <span class="keyword">if</span>(i == <span class="number">5</span>)
        {
            <span class="keyword">break</span>;
        }

        <span class="function">printf</span>(<span class="string">"%d\\n"</span>, i);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
1
2
3
4
</pre>

<hr>

<h5>2. continue Statement</h5>

<p>
The <strong>continue</strong> statement skips the current iteration of a loop and immediately starts the next iteration.
The loop does not terminate.
</p>

<p><strong>Student Example:</strong></p>

<p>
Suppose the teacher is checking attendance.
If one student is absent, the teacher skips that student and continues checking the remaining students.
</p>

<p><strong>Real-Life Example:</strong></p>

<ul>
<li>Skip absent students.</li>
<li>Ignore negative numbers.</li>
<li>Skip invalid records.</li>
</ul>

<h4>Example 2: Skip Absent Students</h4>

<div class="code-box">

    <div class="code-title">
        <span class="code-text">Example: continue Statement</span>
    </div>

<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="datatype">int</span> roll;

    <span class="keyword">for</span>(roll = <span class="number">1</span>; roll &lt;= <span class="number">10</span>; roll++)
    {
        <span class="keyword">if</span>(roll == <span class="number">4</span>)
        {
            <span class="keyword">continue</span>;
        }

        <span class="function">printf</span>(<span class="string">"Roll Number %d is Present\\n"</span>, roll);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
Roll Number 1 is Present
Roll Number 2 is Present
Roll Number 3 is Present
Roll Number 5 is Present
Roll Number 6 is Present
Roll Number 7 is Present
Roll Number 8 is Present
Roll Number 9 is Present
Roll Number 10 is Present
</pre>

<hr>

<h5>3. goto Statement</h5>

<p>
The <strong>goto</strong> statement transfers program control directly to a labeled statement.
</p>

<p>
Although it is available in C, programmers generally avoid using <strong>goto</strong> because it can make programs difficult to understand.
</p>

<p><strong>Student Example:</strong></p>

<p>
Imagine you are walking through different classrooms.
Suddenly the Principal calls you.
Instead of visiting every classroom, you directly go to the Principal's office.
</p>

<p><strong>Real-Life Example:</strong></p>

<ul>
<li>Error handling.</li>
<li>Exiting deeply nested loops.</li>
<li>Special system-level programming.</li>
</ul>

<h4>Example 1: Using goto Statement</h4>

<div class="code-box">

    <div class="code-title">
        <span class="code-text">Example: goto Statement</span>
    </div>

<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="function">printf</span>(<span class="string">"Welcome to C Programming\\n"</span>);

    <span class="keyword">goto</span> message;

    <span class="function">printf</span>(<span class="string">"This line will not be executed.\\n"</span>);

message:

    <span class="function">printf</span>(<span class="string">"Learning goto Statement"</span>);

    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
Welcome to C Programming
Learning goto Statement
</pre>

<hr>

<h5>4. return Statement</h5>

<p>
The <strong>return</strong> statement immediately terminates the current function and returns control to the calling function.
It may also return a value.
</p>

<p><strong>Student Example:</strong></p>

<p>
Suppose your teacher asks you to calculate the total marks.
After calculating, you return the result to the teacher.
Your work is finished.
</p>

<p><strong>Real-Life Example:</strong></p>

<ul>
<li>Returning the sum of two numbers.</li>
<li>Returning login status.</li>
<li>Returning search results.</li>
</ul>

<h4>Example 1: Using return Statement</h4>

<div class="code-box">

    <div class="code-title">
        <span class="code-text">Example: return Statement</span>
    </div>

<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="function">printf</span>(<span class="string">"Welcome to C Programming\\n"</span>);

    <span class="keyword">return</span> <span class="number">0</span>;

    <span class="function">printf</span>(<span class="string">"This line will not be executed."</span>);
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
Welcome to C Programming
</pre>

<hr>

<h4>Comparison of Jump Statements</h4>

<table class="notes-table">

<tr>
<th>Statement</th>
<th>Stops Loop</th>
<th>Skips Iteration</th>
<th>Moves Control</th>
<th>Returns From Function</th>
</tr>

<tr>
<td>break</td>
<td>✔</td>
<td>✖</td>
<td>✔</td>
<td>✖</td>
</tr>

<tr>
<td>continue</td>
<td>✖</td>
<td>✔</td>
<td>✔</td>
<td>✖</td>
</tr>

<tr>
<td>goto</td>
<td>Depends</td>
<td>Depends</td>
<td>✔</td>
<td>✖</td>
</tr>

<tr>
<td>return</td>
<td>Function Ends</td>
<td>✖</td>
<td>✔</td>
<td>✔</td>
</tr>

</table>

<hr>

<h4>Advantages of Jump Statements</h4>

<ul>

<li>Improve program efficiency.</li>

<li>Reduce unnecessary execution.</li>

<li>Provide better control over loops.</li>

<li>Useful in searching and menu-driven programs.</li>

<li>Help terminate functions easily.</li>

</ul>

<hr>

<h4>Important Notes</h4>

<div class="notes-point">

<ul>

<li><strong>break</strong> completely exits the loop.</li>

<li><strong>continue</strong> skips only one iteration.</li>

<li><strong>goto</strong> should be used only when necessary.</li>

<li><strong>return</strong> always terminates the current function.</li>

<li>Among all jump statements, <strong>break</strong> and <strong>continue</strong> are used most frequently.</li>

</ul>

</div>

<hr>

<h4>Summary</h4>

<ul>

<li>Jump Statements change the normal execution of a program.</li>

<li>C provides four jump statements: <strong>break</strong>, <strong>continue</strong>, <strong>goto</strong>, and <strong>return</strong>.</li>

<li>Each jump statement has a different purpose.</li>

<li>Choosing the correct jump statement makes programs simple, efficient, and easy to manage.</li>

</ul>

<hr>

<h4>Exam Questions</h4>

<ul>

<li>What are Jump Statements in C language?</li>

<li>Why are Jump Statements used?</li>

<li>Explain break statement with an example.</li>

<li>Differentiate between break and continue.</li>

<li>What is goto statement? Why is it generally avoided?</li>

<li>What is the purpose of return statement?</li>

<li>Write all types of Jump Statements in C.</li>

<li>Compare break, continue, goto, and return.</li>

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

<h4>Flow of Break Statement</h4>
<img src="bca_images/break.png" alt="data type" class="notes_img" >
<hr>

<h4>Example 1: Break in for Loop</h4>

<div class="code-box">

    <div class="code-title">
        <span class="code-text">Example: break Statement</span>
    </div>

<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="datatype">int</span> i;

    <span class="keyword">for</span>(i = <span class="number">1</span>; i &lt;= <span class="number">10</span>; i++)
    {
        <span class="keyword">if</span>(i == <span class="number">5</span>)
        {
            <span class="keyword">break</span>;
        }

        <span class="function">printf</span>(<span class="string">"%d\\n"</span>, i);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
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

<div class="code-box">

    <div class="code-title">
        <span class="code-text">Example: break Statement</span>
    </div>

<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="datatype">int</span> i = <span class="number">1</span>;

    <span class="keyword">while</span>(i &lt;= <span class="number">10</span>)
    {
        <span class="keyword">if</span>(i == <span class="number">7</span>)
        {
            <span class="keyword">break</span>;
        }

        <span class="function">printf</span>(<span class="string">"%d\n"</span>, i);
        i++;
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
1
2
3
4
5
6
</pre>

<hr>

<h4>Break Statement in switch Case</h4>

<div class="code-box">

    <div class="code-title">
        <span class="code-text">Example: break Statement in switch</span>
    </div>

<pre>
<span class="keyword">switch</span>(choice)
{
    <span class="keyword">case</span> <span class="number">1</span>:
        <span class="function">printf</span>(<span class="string">"One"</span>);
        <span class="keyword">break</span>;

    <span class="keyword">case</span> <span class="number">2</span>:
        <span class="function">printf</span>(<span class="string">"Two"</span>);
        <span class="keyword">break</span>;

    <span class="keyword">default</span>:
        <span class="function">printf</span>(<span class="string">"Invalid Choice"</span>);
}
</pre>

</div>

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

<h4>Flow of Continue Statement</h4>
<img src="bca_images/continue.png" alt="data type" class="notes_img" >

<hr>

<h4>Example 1: Skip Number 5</h4>

<div class="code-box">

    <div class="code-title">
        <span class="code-text">Example: continue Statement</span>
    </div>

<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="datatype">int</span> i;

    <span class="keyword">for</span>(i = <span class="number">1</span>; i &lt;= <span class="number">10</span>; i++)
    {
        <span class="keyword">if</span>(i == <span class="number">5</span>)
        {
            <span class="keyword">continue</span>;
        }

        <span class="function">printf</span>(<span class="string">"%d\\n"</span>, i);
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
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
When <strong>i</strong> becomes <strong>5</strong>, the <strong>continue</strong> statement skips that iteration and immediately moves to the next iteration of the loop.
</p>

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

<h4>Syntax of goto Statement</h4>

<div class="code-box">

    <div class="code-title">
        <span class="code-text">Syntax: goto Statement</span>
    </div>

<pre>
<span class="keyword">goto</span> label;

<span class="comment">/* statements */</span>

label:
    statement;
</pre>

</div>

<hr>

<h4>Flow of goto Statement</h4>
<img src="bca_images/goto.png" alt="data type" class="notes_img" >

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

<h4>Example 1: Simple goto Program</h4>

<div class="code-box">

    <div class="code-title">
        <span class="code-text">Example: goto Statement</span>
    </div>

<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="function">printf</span>(<span class="string">"Welcome\\n"</span>);

    <span class="keyword">goto</span> end;

    <span class="function">printf</span>(<span class="string">"This line will not execute\\n"</span>);

end:
    <span class="function">printf</span>(<span class="string">"Program Finished"</span>);

    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
Welcome
Program Finished
</pre>
<p>
The goto statement skips the middle printf() statement and directly jumps to the label named <strong>end</strong>.
</p>

<hr>

<h4>Example 2: Print Numbers Using goto</h4>

<div class="code-box">

    <div class="code-title">
        <span class="code-text">Example: goto Statement</span>
    </div>

<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="datatype">int</span> i = <span class="number">1</span>;

start:

    <span class="function">printf</span>(<span class="string">"%d\\n"</span>, i);
    i++;

    <span class="keyword">if</span>(i &lt;= <span class="number">5</span>)
    {
        <span class="keyword">goto</span> start;
    }

    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
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

<h4>Example: Program Without Function</h4>

<div class="code-box">

    <div class="code-title">
        <span class="code-text">welcome.c</span>
    </div>

<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="function">printf</span>(<span class="string">"Welcome Students\\n"</span>);
    <span class="function">printf</span>(<span class="string">"Welcome Students\\n"</span>);
    <span class="function">printf</span>(<span class="string">"Welcome Students\\n"</span>);

    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
Welcome Students
Welcome Students
Welcome Students
</pre>

<p>
Here the same statement is written multiple times.
</p>

<hr>

<h4>Example Using Function</h4>

<div class="code-box">

    <div class="code-title">
        <span class="code-text">welcome.c</span>
    </div>

<pre>
<span class="header-file">#include &lt;stdio.h&gt;</span>

<span class="datatype">void</span> <span class="function">welcome</span>()
{
    <span class="function">printf</span>(<span class="string">"Welcome Students\\n"</span>);
}

<span class="datatype">int</span> <span class="function">main</span>()
{
    <span class="function">welcome</span>();
    <span class="function">welcome</span>();
    <span class="function">welcome</span>();

    <span class="keyword">return</span> <span class="number">0</span>;
}
</pre>

</div>

<h4>Output</h4>

<pre class="notes_text_pre">
Welcome Students
Welcome Students
Welcome Students
</pre>

<p>
Here the code is written once and reused multiple times.
</p>

<hr>
<h4>Structure of a Function</h4>
<img src="bca_images/function.png" alt="data type" class="notes_img" >

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

<h4>Syntax:</h4>
<pre class="notes_text_pre">
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
<pre class="notes_text_pre">
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
<pre class="notes_text_pre">
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

<div class="code-box">

    <div class="code-title">
        <span>Function Declaration, Function Call and Function Definition</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="comment">// Function Declaration</span>
<span class="datatype">int</span> <span class="function">add</span><span class="symbol">(</span><span class="datatype">int</span><span class="symbol">,</span> <span class="datatype">int</span><span class="symbol">);</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> result<span class="symbol">;</span>

    <span class="comment">// Function Call</span>
    result <span class="symbol">=</span> <span class="function">add</span><span class="symbol">(</span>5<span class="symbol">,</span> 10<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Sum = %d"</span><span class="symbol">,</span> result<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>

<span class="comment">// Function Definition</span>
<span class="datatype">int</span> <span class="function">add</span><span class="symbol">(</span><span class="datatype">int</span> a<span class="symbol">,</span> <span class="datatype">int</span> b<span class="symbol">)</span>
<span class="symbol">{</span>
    <span class="keyword">return</span> a <span class="symbol">+</span> b<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<hr>

<h4>Exam Points</h4>
<ul>
  <li>Declaration → tells compiler about function</li>
  <li>Definition → actual logic of function</li>
  <li>Call → execution of function</li>
</ul>

<hr>

<h4>General Syntax of Function</h4>

<pre class="notes_text_pre">
return_type function_name()
{
    // statements
}
</pre>

<hr>

<h4>Example of Simple Function</h4>

<div class="code-box">

    <div class="code-title">
        <span>Simple Function Example</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">void</span> <span class="function">greet</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Hello Students"</span><span class="symbol">);</span>
<span class="symbol">}</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="function">greet</span><span class="symbol">();</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Hello Students</code></pre>

</div>

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

<pre class = "notes_text_pre">
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

<pre class="notes_text_pre">
void display()
{
    // statements
}
</pre>

<h4>Example</h4>

<h4>Example of User-Defined Function</h4>

<div class="code-box">

    <div class="code-title">
        <span>User-Defined Function Example</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">void</span> <span class="function">display</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Welcome Students"</span><span class="symbol">);</span>
<span class="symbol">}</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="function">display</span><span class="symbol">();</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Welcome Students</code></pre>

</div>

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

<pre class="notes_text_pre">
void function_name(parameters)
{
    // statements
}
</pre>

<h4>Example of Function with Parameters</h4>

<div class="code-box">

    <div class="code-title">
        <span>Function with Parameters Example</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">void</span> <span class="function">sum</span><span class="symbol">(</span><span class="datatype">int</span> a<span class="symbol">,</span> <span class="datatype">int</span> b<span class="symbol">)</span>
<span class="symbol">{</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Sum = %d"</span><span class="symbol">,</span> a <span class="symbol">+</span> b<span class="symbol">);</span>
<span class="symbol">}</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="function">sum</span><span class="symbol">(</span>10<span class="symbol">,</span> 20<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Sum = 30</code></pre>

</div>

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

<pre class="notes_text_pre">
return_type function_name()
{
    return value;
}
</pre>

<h4>Example of Function with Return Value</h4>

<div class="code-box">

    <div class="code-title">
        <span>Function with Return Value Example</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">getNumber</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="keyword">return</span> 100<span class="symbol">;</span>
<span class="symbol">}</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> num<span class="symbol">;</span>

    num <span class="symbol">=</span> <span class="function">getNumber</span><span class="symbol">();</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> num<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>100</code></pre>

</div>

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

<pre class="notes_text_pre">
return_type function_name(parameters)
{
    return value;
}
</pre>

<h4>Example of Function with Parameters and Return Value</h4>

<div class="code-box">

    <div class="code-title">
        <span>Function with Parameters and Return Value Example</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">sum</span><span class="symbol">(</span><span class="datatype">int</span> a<span class="symbol">,</span> <span class="datatype">int</span> b<span class="symbol">)</span>
<span class="symbol">{</span>
    <span class="keyword">return</span> a <span class="symbol">+</span> b<span class="symbol">;</span>
<span class="symbol">}</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> result<span class="symbol">;</span>

    result <span class="symbol">=</span> <span class="function">sum</span><span class="symbol">(</span>10<span class="symbol">,</span> 20<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Sum = %d"</span><span class="symbol">,</span> result<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Sum = 30</code></pre>

</div>

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

<div class="code-box">

    <div class="code-title">
        <span>Call by Value Example</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">void</span> <span class="function">change</span><span class="symbol">(</span><span class="datatype">int</span> x<span class="symbol">)</span>
<span class="symbol">{</span>
    x <span class="symbol">=</span> x <span class="symbol">+</span> 10<span class="symbol">;</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Inside function: %d\n"</span><span class="symbol">,</span> x<span class="symbol">);</span>
<span class="symbol">}</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> a <span class="symbol">=</span> 5<span class="symbol">;</span>

    <span class="function">change</span><span class="symbol">(</span>a<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Outside function: %d\n"</span><span class="symbol">,</span> a<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Inside function: 15
Outside function: 5</code></pre>

</div>

<hr>

<h4>2. Call by Reference</h4>

<p>
In Call by Reference, the address of the variable is passed to the function.
Changes made inside the function affect the original value.
</p>

<h4>Example (Call by Reference)</h4>

<div class="code-box">

    <div class="code-title">
        <span>Call by Reference Example</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">void</span> <span class="function">change</span><span class="symbol">(</span><span class="datatype">int</span> <span class="symbol">*</span>x<span class="symbol">)</span>
<span class="symbol">{</span>
    <span class="symbol">*</span>x <span class="symbol">=</span> <span class="symbol">*</span>x <span class="symbol">+</span> 10<span class="symbol">;</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Inside function: %d\n"</span><span class="symbol">,</span> <span class="symbol">*</span>x<span class="symbol">);</span>
<span class="symbol">}</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> a <span class="symbol">=</span> 5<span class="symbol">;</span>

    <span class="function">change</span><span class="symbol">(</span><span class="symbol">&amp;</span>a<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Outside function: %d\n"</span><span class="symbol">,</span> a<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Inside function: 15
Outside function: 15</code></pre>

</div>

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

<pre class="notes_text_pre">
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

<pre class="notes_text_pre">
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

<pre class="notes_text_pre">
data_type array_name[size];
</pre>

<h4>Example</h4>

<pre class="notes_text_pre">
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

<pre class="notes_text_pre">
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

<pre class="notes_text_pre">
int num[5] = {10,20,30,40,50};
</pre>

<h4>Method 2: Partial Initialization</h4>

<pre class="notes_text_pre">
int num[5] = {10,20};
</pre>

<p>
Remaining elements automatically become 0.
</p>

<hr>

<h4>Accessing Array Elements</h4>

<div class="code-box">

    <div class="code-title">
        <span>accessing.c</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> arr<span class="symbol">[</span>5<span class="symbol">]</span> <span class="symbol">=</span> <span class="symbol">{</span>10<span class="symbol">,</span> 20<span class="symbol">,</span> 30<span class="symbol">,</span> 40<span class="symbol">,</span> 50<span class="symbol">};</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> arr<span class="symbol">[</span>2<span class="symbol">]);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>30</code></pre>

</div>
<p>
Because index 2 contains the value 30.
</p>

<hr>

<h4>Input and Output Using Array</h4>

<div class="code-box">

    <div class="code-title">
        <span>array.c</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> marks<span class="symbol">[</span>5<span class="symbol">];</span>
    <span class="datatype">int</span> i<span class="symbol">;</span>

    <span class="comment">// Input array elements</span>
    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> 5<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>marks<span class="symbol">[</span>i<span class="symbol">]);</span>
    <span class="symbol">}</span>

    <span class="comment">// Display array elements</span>
    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> 5<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d "</span><span class="symbol">,</span> marks<span class="symbol">[</span>i<span class="symbol">]);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Enter 5 numbers:
10 20 30 40 50

10 20 30 40 50</code></pre>

</div>

<hr>

<h4>Traversing an Array</h4>

<p>
The process of accessing each element of an array one by one is called <strong>Array Traversal</strong>.
</p>

<div class="code-box">

    <div class="code-title">
        <span>Print Array Elements Using for Loop</span>
    </div>

<pre><code><span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> 5<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
<span class="symbol">{</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d "</span><span class="symbol">,</span> arr<span class="symbol">[</span>i<span class="symbol">]);</span>
<span class="symbol">}</span>
</code></pre>

</div>

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

<div class="code-box">

    <div class="code-title">
        <span>Sum of Array Elements Example</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> arr<span class="symbol">[</span>5<span class="symbol">]</span> <span class="symbol">=</span> <span class="symbol">{</span>10<span class="symbol">,</span> 20<span class="symbol">,</span> 30<span class="symbol">,</span> 40<span class="symbol">,</span> 50<span class="symbol">};</span>
    <span class="datatype">int</span> i<span class="symbol">,</span> sum <span class="symbol">=</span> 0<span class="symbol">;</span>

    <span class="comment">// Calculate the sum of all array elements</span>
    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> 5<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        sum <span class="symbol">=</span> sum <span class="symbol">+</span> arr<span class="symbol">[</span>i<span class="symbol">];</span>
    <span class="symbol">}</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Sum = %d"</span><span class="symbol">,</span> sum<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Sum = 150</code></pre>

</div>

<hr>

<h4>Finding the Largest Element in an Array</h4>

<div class="code-box">

    <div class="code-title">
        <span>element.c</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> arr<span class="symbol">[</span>5<span class="symbol">]</span> <span class="symbol">=</span> <span class="symbol">{</span>12<span class="symbol">,</span> 45<span class="symbol">,</span> 23<span class="symbol">,</span> 78<span class="symbol">,</span> 34<span class="symbol">};</span>
    <span class="datatype">int</span> i<span class="symbol">,</span> max<span class="symbol">;</span>

    <span class="comment">// Assume the first element is the largest</span>
    max <span class="symbol">=</span> arr<span class="symbol">[</span>0<span class="symbol">];</span>

    <span class="comment">// Compare remaining elements with max</span>
    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 1<span class="symbol">;</span> i <span class="symbol">&lt;</span> 5<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="keyword">if</span><span class="symbol">(</span>arr<span class="symbol">[</span>i<span class="symbol">]</span> <span class="symbol">&gt;</span> max<span class="symbol">)</span>
        <span class="symbol">{</span>
            max <span class="symbol">=</span> arr<span class="symbol">[</span>i<span class="symbol">];</span>
        <span class="symbol">}</span>
    <span class="symbol">}</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Largest = %d"</span><span class="symbol">,</span> max<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Largest = 78</code></pre>

</div>

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

<h4>Example (Pass by Value)</h4>

<div class="code-box">

    <div class="code-title">
        <span>Pass by Value Example</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">void</span> <span class="function">update</span><span class="symbol">(</span><span class="datatype">int</span> x<span class="symbol">)</span>
<span class="symbol">{</span>
    x <span class="symbol">=</span> x <span class="symbol">+</span> 10<span class="symbol">;</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Inside Function: %d\n"</span><span class="symbol">,</span> x<span class="symbol">);</span>
<span class="symbol">}</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> a <span class="symbol">=</span> 5<span class="symbol">;</span>

    <span class="function">update</span><span class="symbol">(</span>a<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Outside Function: %d\n"</span><span class="symbol">,</span> a<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Inside Function: 15
Outside Function: 5</code></pre>

</div>

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

<h4>Example (Pass by Reference)</h4>

<div class="code-box">

    <div class="code-title">
        <span>Pass by Reference Example</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">void</span> <span class="function">add</span><span class="symbol">(</span><span class="datatype">int</span> <span class="symbol">*</span>a<span class="symbol">,</span> <span class="datatype">int</span> <span class="symbol">*</span>b<span class="symbol">,</span> <span class="datatype">int</span> <span class="symbol">*</span>sum<span class="symbol">)</span>
<span class="symbol">{</span>
    <span class="symbol">*</span>sum <span class="symbol">=</span> <span class="symbol">*</span>a <span class="symbol">+</span> <span class="symbol">*</span>b<span class="symbol">;</span>
<span class="symbol">}</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> x<span class="symbol">,</span> y<span class="symbol">,</span> result<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter two numbers: "</span><span class="symbol">);</span>
    <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d %d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>x<span class="symbol">,</span> <span class="symbol">&amp;</span>y<span class="symbol">);</span>

    <span class="function">add</span><span class="symbol">(</span><span class="symbol">&amp;</span>x<span class="symbol">,</span> <span class="symbol">&amp;</span>y<span class="symbol">,</span> <span class="symbol">&amp;</span>result<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Sum = %d"</span><span class="symbol">,</span> result<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Enter two numbers: 10 20
Sum = 30</code></pre>

</div>

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

<h4>Find Number of Elements in an Array</h4>

<div class="code-box">

    <div class="code-title">
        <span>array.c</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> arr<span class="symbol">[]</span> <span class="symbol">=</span> <span class="symbol">{</span>10<span class="symbol">,</span> 20<span class="symbol">,</span> 30<span class="symbol">,</span> 40<span class="symbol">,</span> 50<span class="symbol">};</span>
    <span class="datatype">int</span> n<span class="symbol">;</span>
    <span class="datatype">int</span> i<span class="symbol">;</span>

    <span class="comment">// Find the number of elements in the array</span>
    n <span class="symbol">=</span> <span class="function">sizeof</span><span class="symbol">(</span>arr<span class="symbol">)</span> <span class="symbol">/</span> <span class="function">sizeof</span><span class="symbol">(</span>arr<span class="symbol">[</span>0<span class="symbol">]);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Array Elements: "</span><span class="symbol">);</span>

    <span class="comment">// Print all array elements</span>
    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> n<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d "</span><span class="symbol">,</span> arr<span class="symbol">[</span>i<span class="symbol">]);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Array Elements: 10 20 30 40 50</code></pre>

</div>


</div>

<h3>2️⃣ Insertion (Adding Element)</h3>
<h4>Example (Insertion in an Array)</h4>

<div class="box">
<p>
Insertion means adding a new element at a specific position in an array.
To insert an element, first shift all elements one position to the right, then place the new value at the desired position.
</p>
</div>

<div class="code-box">

    <div class="code-title">
        <span>Insertion in an Array Example</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> arr<span class="symbol">[</span>10<span class="symbol">]</span> <span class="symbol">=</span> <span class="symbol">{</span>10<span class="symbol">,</span> 20<span class="symbol">,</span> 30<span class="symbol">,</span> 40<span class="symbol">,</span> 50<span class="symbol">};</span>
    <span class="datatype">int</span> n <span class="symbol">=</span> 5<span class="symbol">;</span>
    <span class="datatype">int</span> pos <span class="symbol">=</span> 2<span class="symbol">;</span>
    <span class="datatype">int</span> value <span class="symbol">=</span> 25<span class="symbol">;</span>
    <span class="datatype">int</span> i<span class="symbol">;</span>

    <span class="comment">// Shift elements to the right</span>
    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> n<span class="symbol">;</span> i <span class="symbol">&gt;</span> pos<span class="symbol">;</span> i<span class="symbol">--</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        arr<span class="symbol">[</span>i<span class="symbol">]</span> <span class="symbol">=</span> arr<span class="symbol">[</span>i <span class="symbol">-</span> 1<span class="symbol">];</span>
    <span class="symbol">}</span>

    <span class="comment">// Insert the new value</span>
    arr<span class="symbol">[</span>pos<span class="symbol">]</span> <span class="symbol">=</span> value<span class="symbol">;</span>
    n<span class="symbol">++;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Array after insertion: "</span><span class="symbol">);</span>

    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> n<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d "</span><span class="symbol">,</span> arr<span class="symbol">[</span>i<span class="symbol">]);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Array after insertion: 10 20 25 30 40 50</code></pre>

</div>

<h3>3️⃣ Deletion (Removing Element)</h3>

<div class="box">
<p>
Deletion means removing an element from a specific position in an array.
After deleting the element, all remaining elements are shifted one position to the left to fill the empty space.
</p>
</div>

<div class="code-box">

    <div class="code-title">
        <span>Deletion in an Array Example</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> arr<span class="symbol">[</span>10<span class="symbol">]</span> <span class="symbol">=</span> <span class="symbol">{</span>10<span class="symbol">,</span> 20<span class="symbol">,</span> 30<span class="symbol">,</span> 40<span class="symbol">,</span> 50<span class="symbol">};</span>
    <span class="datatype">int</span> n <span class="symbol">=</span> 5<span class="symbol">;</span>
    <span class="datatype">int</span> pos <span class="symbol">=</span> 2<span class="symbol">;</span>
    <span class="datatype">int</span> i<span class="symbol">;</span>

    <span class="comment">// Shift elements to the left</span>
    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> pos<span class="symbol">;</span> i <span class="symbol">&lt;</span> n <span class="symbol">-</span> 1<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        arr<span class="symbol">[</span>i<span class="symbol">]</span> <span class="symbol">=</span> arr<span class="symbol">[</span>i <span class="symbol">+</span> 1<span class="symbol">];</span>
    <span class="symbol">}</span>

    <span class="comment">// Decrease the array size</span>
    n<span class="symbol">--;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Array after deletion: "</span><span class="symbol">);</span>

    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> n<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d "</span><span class="symbol">,</span> arr<span class="symbol">[</span>i<span class="symbol">]);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Array after deletion: 10 20 40 50</code></pre>

</div>

<hr>

<h3>4️⃣ Searching (Finding Element)</h3>

<div class="box">
<p>
Searching means finding whether a specific element is present in an array or not.
If the element is found, its position (index) is displayed; otherwise, a message is shown that the element is not found.
</p>
</div>

<div class="code-box">

    <div class="code-title">
        <span>Searching an Element in an Array Example</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> arr<span class="symbol">[]</span> <span class="symbol">=</span> <span class="symbol">{</span>10<span class="symbol">,</span> 20<span class="symbol">,</span> 30<span class="symbol">,</span> 40<span class="symbol">,</span> 50<span class="symbol">};</span>
    <span class="datatype">int</span> n <span class="symbol">=</span> 5<span class="symbol">;</span>
    <span class="datatype">int</span> key <span class="symbol">=</span> 30<span class="symbol">;</span>
    <span class="datatype">int</span> i<span class="symbol">,</span> found <span class="symbol">=</span> 0<span class="symbol">;</span>

    <span class="comment">// Search for the element</span>
    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> n<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="keyword">if</span><span class="symbol">(</span>arr<span class="symbol">[</span>i<span class="symbol">]</span> <span class="symbol">==</span> key<span class="symbol">)</span>
        <span class="symbol">{</span>
            <span class="function">printf</span><span class="symbol">(</span><span class="string">"Element found at index %d"</span><span class="symbol">,</span> i<span class="symbol">);</span>
            found <span class="symbol">=</span> 1<span class="symbol">;</span>
            <span class="keyword">break</span><span class="symbol">;</span>
        <span class="symbol">}</span>
    <span class="symbol">}</span>

    <span class="keyword">if</span><span class="symbol">(</span>found <span class="symbol">==</span> 0<span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Element not found"</span><span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Element found at index 2</code></pre>

</div>

<hr>

<h3>5️⃣ Update (Modify Element)</h3>

<div class="box">
<p>
Update means changing the value of an existing element in an array.
The old value is replaced with a new value at the specified position (index).
</p>
</div>

<div class="code-box">

    <div class="code-title">
        <span>Update an Element in an Array Example</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> arr<span class="symbol">[]</span> <span class="symbol">=</span> <span class="symbol">{</span>10<span class="symbol">,</span> 20<span class="symbol">,</span> 30<span class="symbol">,</span> 40<span class="symbol">,</span> 50<span class="symbol">};</span>
    <span class="datatype">int</span> n <span class="symbol">=</span> 5<span class="symbol">;</span>
    <span class="datatype">int</span> pos <span class="symbol">=</span> 2<span class="symbol">;</span>
    <span class="datatype">int</span> newValue <span class="symbol">=</span> 35<span class="symbol">;</span>
    <span class="datatype">int</span> i<span class="symbol">;</span>

    <span class="comment">// Update the element</span>
    arr<span class="symbol">[</span>pos<span class="symbol">]</span> <span class="symbol">=</span> newValue<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Array after update: "</span><span class="symbol">);</span>

    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> n<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d "</span><span class="symbol">,</span> arr<span class="symbol">[</span>i<span class="symbol">]);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Array after update: 10 20 35 40 50</code></pre>

</div>

<hr>

<h3>6️⃣ Sorting (Arranging Elements)</h3>

<div class="box">
<p>
Sorting means arranging the elements of an array in a specific order.
The order can be <b>ascending (smallest to largest)</b> or <b>descending (largest to smallest)</b>.
The following example uses a simple sorting technique to arrange the array in ascending order.
</p>
</div>


::contentReference[oaicite:0]{index=0}


<div class="code-box">

    <div class="code-title">
        <span>Sorting an Array in Ascending Order</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> arr<span class="symbol">[]</span> <span class="symbol">=</span> <span class="symbol">{</span>50<span class="symbol">,</span> 20<span class="symbol">,</span> 40<span class="symbol">,</span> 10<span class="symbol">,</span> 30<span class="symbol">};</span>
    <span class="datatype">int</span> n <span class="symbol">=</span> 5<span class="symbol">;</span>
    <span class="datatype">int</span> i<span class="symbol">,</span> j<span class="symbol">,</span> temp<span class="symbol">;</span>

    <span class="comment">// Sort the array in ascending order</span>
    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> n <span class="symbol">-</span> 1<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="keyword">for</span><span class="symbol">(</span>j <span class="symbol">=</span> i <span class="symbol">+</span> 1<span class="symbol">;</span> j <span class="symbol">&lt;</span> n<span class="symbol">;</span> j<span class="symbol">++</span><span class="symbol">)</span>
        <span class="symbol">{</span>
            <span class="keyword">if</span><span class="symbol">(</span>arr<span class="symbol">[</span>i<span class="symbol">]</span> <span class="symbol">&gt;</span> arr<span class="symbol">[</span>j<span class="symbol">]</span><span class="symbol">)</span>
            <span class="symbol">{</span>
                temp <span class="symbol">=</span> arr<span class="symbol">[</span>i<span class="symbol">];</span>
                arr<span class="symbol">[</span>i<span class="symbol">]</span> <span class="symbol">=</span> arr<span class="symbol">[</span>j<span class="symbol">];</span>
                arr<span class="symbol">[</span>j<span class="symbol">]</span> <span class="symbol">=</span> temp<span class="symbol">;</span>
            <span class="symbol">}</span>
        <span class="symbol">}</span>
    <span class="symbol">}</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Sorted Array: "</span><span class="symbol">);</span>

    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> n<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d "</span><span class="symbol">,</span> arr<span class="symbol">[</span>i<span class="symbol">]);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Sorted Array: 10 20 30 40 50</code></pre>

</div>

<hr>

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

    <h4>Fixed Array Traversal</h4>

<div class="code-box">

    <div class="code-title">
        <span>example.c</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> arr<span class="symbol">[</span>5<span class="symbol">]</span> <span class="symbol">=</span> <span class="symbol">{</span>10<span class="symbol">,</span> 20<span class="symbol">,</span> 30<span class="symbol">,</span> 40<span class="symbol">,</span> 50<span class="symbol">};</span>
    <span class="datatype">int</span> i<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Array Elements:\\n"</span><span class="symbol">);</span>

    <span class="comment">// Traverse the array using a for loop</span>
    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> 5<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d\\n"</span><span class="symbol">,</span> arr<span class="symbol">[</span>i<span class="symbol">]);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Array Elements:
10
20
30
40
50</code></pre>

</div>

    <h4>Example 2: Take Input from User and Traverse</h4>

<div class="code-box">

    <div class="code-title">
        <span>Array Traversal Using User Input</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> arr<span class="symbol">[</span>100<span class="symbol">],</span> n<span class="symbol">,</span> i<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter number of elements: "</span><span class="symbol">);</span>
    <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>n<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter %d elements:\\n"</span><span class="symbol">,</span> n<span class="symbol">);</span>

    <span class="comment">// Input array elements</span>
    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> n<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>arr<span class="symbol">[</span>i<span class="symbol">]);</span>
    <span class="symbol">}</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Array Elements are:\\n"</span><span class="symbol">);</span>

    <span class="comment">// Traverse and display the array</span>
    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> n<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d\\n"</span><span class="symbol">,</span> arr<span class="symbol">[</span>i<span class="symbol">]);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Enter number of elements: 5
Enter 5 elements:
10 20 30 40 50

Array Elements are:
10
20
30
40
50</code></pre>

</div>

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

<div class="code-box">

    <div class="code-title">
        <span>Insert an Element into an Array</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> arr<span class="symbol">[</span>100<span class="symbol">],</span> n<span class="symbol">,</span> i<span class="symbol">,</span> pos<span class="symbol">,</span> value<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter number of elements: "</span><span class="symbol">);</span>
    <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>n<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter %d elements:\\n"</span><span class="symbol">,</span> n<span class="symbol">);</span>

    <span class="comment">// Input array elements</span>
    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> n<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>arr<span class="symbol">[</span>i<span class="symbol">]);</span>
    <span class="symbol">}</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter position to insert: "</span><span class="symbol">);</span>
    <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>pos<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter value to insert: "</span><span class="symbol">);</span>
    <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>value<span class="symbol">);</span>

    <span class="comment">// Shift elements to the right</span>
    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> n<span class="symbol">;</span> i <span class="symbol">&gt;</span> pos<span class="symbol">;</span> i<span class="symbol">--</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        arr<span class="symbol">[</span>i<span class="symbol">]</span> <span class="symbol">=</span> arr<span class="symbol">[</span>i <span class="symbol">-</span> 1<span class="symbol">];</span>
    <span class="symbol">}</span>

    <span class="comment">// Insert the new value</span>
    arr<span class="symbol">[</span>pos<span class="symbol">]</span> <span class="symbol">=</span> value<span class="symbol">;</span>
    n<span class="symbol">++;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Array after insertion:\\n"</span><span class="symbol">);</span>

    <span class="comment">// Display updated array</span>
    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> n<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d\\n"</span><span class="symbol">,</span> arr<span class="symbol">[</span>i<span class="symbol">]);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Enter number of elements: 5
Enter 5 elements:
10 20 30 40 50
Enter position to insert: 2
Enter value to insert: 25

Array after insertion:
10
20
25
30
40
50</code></pre>

</div>

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

<h4>Example: Deletion from an Array (User Input)</h4>

<div class="code-box">

    <div class="code-title">
        <span>Delete an Element from an Array</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> arr<span class="symbol">[</span>100<span class="symbol">],</span> n<span class="symbol">,</span> i<span class="symbol">,</span> pos<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter number of elements: "</span><span class="symbol">);</span>
    <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>n<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter %d elements:\\n"</span><span class="symbol">,</span> n<span class="symbol">);</span>

    <span class="comment">// Input array elements</span>
    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> n<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>arr<span class="symbol">[</span>i<span class="symbol">]);</span>
    <span class="symbol">}</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter position to delete: "</span><span class="symbol">);</span>
    <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>pos<span class="symbol">);</span>

    <span class="comment">// Shift elements to the left</span>
    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> pos<span class="symbol">;</span> i <span class="symbol">&lt;</span> n <span class="symbol">-</span> 1<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        arr<span class="symbol">[</span>i<span class="symbol">]</span> <span class="symbol">=</span> arr<span class="symbol">[</span>i <span class="symbol">+</span> 1<span class="symbol">];</span>
    <span class="symbol">}</span>

    <span class="comment">// Reduce the array size</span>
    n<span class="symbol">--;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Array after deletion:\\n"</span><span class="symbol">);</span>

    <span class="comment">// Display updated array</span>
    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> n<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d\\n"</span><span class="symbol">,</span> arr<span class="symbol">[</span>i<span class="symbol">]);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Enter number of elements: 5
Enter 5 elements:
10 20 30 40 50
Enter position to delete: 2

Array after deletion:
10
20
40
50</code></pre>

</div>

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

<h4>Example: Searching an Element in an Array (User Input)</h4>

<div class="code-box">

    <div class="code-title">
        <span>Search an Element in an Array</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> arr<span class="symbol">[</span>100<span class="symbol">],</span> n<span class="symbol">,</span> i<span class="symbol">,</span> key<span class="symbol">,</span> found <span class="symbol">=</span> 0<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter number of elements: "</span><span class="symbol">);</span>
    <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>n<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter %d elements:\\n"</span><span class="symbol">,</span> n<span class="symbol">);</span>

    <span class="comment">// Input array elements</span>
    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> n<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>arr<span class="symbol">[</span>i<span class="symbol">]);</span>
    <span class="symbol">}</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter element to search: "</span><span class="symbol">);</span>
    <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>key<span class="symbol">);</span>

    <span class="comment">// Search for the element</span>
    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> n<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="keyword">if</span><span class="symbol">(</span>arr<span class="symbol">[</span>i<span class="symbol">]</span> <span class="symbol">==</span> key<span class="symbol">)</span>
        <span class="symbol">{</span>
            <span class="function">printf</span><span class="symbol">(</span><span class="string">"Element found at position %d"</span><span class="symbol">,</span> i <span class="symbol">+</span> 1<span class="symbol">);</span>
            found <span class="symbol">=</span> 1<span class="symbol">;</span>
            <span class="keyword">break</span><span class="symbol">;</span>
        <span class="symbol">}</span>
    <span class="symbol">}</span>

    <span class="keyword">if</span><span class="symbol">(</span>found <span class="symbol">==</span> 0<span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Element not found"</span><span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Enter number of elements: 5
Enter 5 elements:
10 20 30 40 50
Enter element to search: 30

Element found at position 3</code></pre>

</div>

<h4>Sample Input</h4>

<pre class="notes_text_pre">
Enter number of elements: 5
Enter 5 elements:
10 20 30 40 50
Enter element to search: 30
</pre>

<h4>Output</h4>

<pre class="notes_text_pre">
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

<h4>Example: Array CRUD Operations (Insert, Display, Search, Update & Delete)</h4>

<div class="code-box">

    <div class="code-title">
        <span>Array CRUD Operations Using Menu</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> arr<span class="symbol">[</span>100<span class="symbol">],</span> n <span class="symbol">=</span> 0<span class="symbol">;</span>
    <span class="datatype">int</span> choice<span class="symbol">,</span> i<span class="symbol">,</span> pos<span class="symbol">,</span> value<span class="symbol">,</span> key<span class="symbol">,</span> found<span class="symbol">;</span>

    <span class="keyword">while</span><span class="symbol">(</span>1<span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"\\n========== Array CRUD Operations ==========\\n"</span><span class="symbol">);</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"1. Insert\\n"</span><span class="symbol">);</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"2. Display\\n"</span><span class="symbol">);</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"3. Search\\n"</span><span class="symbol">);</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"4. Update\\n"</span><span class="symbol">);</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"5. Delete\\n"</span><span class="symbol">);</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"6. Exit\\n"</span><span class="symbol">);</span>

        <span class="function">printf</span><span class="symbol">(</span><span class="string">"\\nEnter your choice: "</span><span class="symbol">);</span>
        <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>choice<span class="symbol">);</span>

        <span class="keyword">switch</span><span class="symbol">(</span>choice<span class="symbol">)</span>
        <span class="symbol">{</span>
            <span class="keyword">case</span> 1<span class="symbol">:</span>

                <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter element to insert: "</span><span class="symbol">);</span>
                <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>value<span class="symbol">);</span>

                arr<span class="symbol">[</span>n<span class="symbol">]</span> <span class="symbol">=</span> value<span class="symbol">;</span>
                n<span class="symbol">++;</span>

                <span class="function">printf</span><span class="symbol">(</span><span class="string">"Element inserted successfully."</span><span class="symbol">);</span>
                <span class="keyword">break</span><span class="symbol">;</span>

            <span class="keyword">case</span> 2<span class="symbol">:</span>

                <span class="keyword">if</span><span class="symbol">(</span>n <span class="symbol">==</span> 0<span class="symbol">)</span>
                <span class="symbol">{</span>
                    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Array is empty."</span><span class="symbol">);</span>
                <span class="symbol">}</span>
                <span class="keyword">else</span>
                <span class="symbol">{</span>
                    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Array Elements:\\n"</span><span class="symbol">);</span>

                    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> n<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
                    <span class="symbol">{</span>
                        <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d "</span><span class="symbol">,</span> arr<span class="symbol">[</span>i<span class="symbol">]);</span>
                    <span class="symbol">}</span>
                <span class="symbol">}</span>
                <span class="keyword">break</span><span class="symbol">;</span>

            <span class="keyword">case</span> 3<span class="symbol">:</span>

                <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter element to search: "</span><span class="symbol">);</span>
                <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>key<span class="symbol">);</span>

                found <span class="symbol">=</span> 0<span class="symbol">;</span>

                <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> n<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
                <span class="symbol">{</span>
                    <span class="keyword">if</span><span class="symbol">(</span>arr<span class="symbol">[</span>i<span class="symbol">]</span> <span class="symbol">==</span> key<span class="symbol">)</span>
                    <span class="symbol">{</span>
                        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Element found at position %d"</span><span class="symbol">,</span> i <span class="symbol">+</span> 1<span class="symbol">);</span>
                        found <span class="symbol">=</span> 1<span class="symbol">;</span>
                        <span class="keyword">break</span><span class="symbol">;</span>
                    <span class="symbol">}</span>
                <span class="symbol">}</span>

                <span class="keyword">if</span><span class="symbol">(</span>found <span class="symbol">==</span> 0<span class="symbol">)</span>
                <span class="symbol">{</span>
                    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Element not found."</span><span class="symbol">);</span>
                <span class="symbol">}</span>

                <span class="keyword">break</span><span class="symbol">;</span>

            <span class="keyword">case</span> 4<span class="symbol">:</span>

                <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter position to update: "</span><span class="symbol">);</span>
                <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>pos<span class="symbol">);</span>

                <span class="keyword">if</span><span class="symbol">(</span>pos <span class="symbol">&lt;</span> 1 <span class="symbol">||</span> pos <span class="symbol">&gt;</span> n<span class="symbol">)</span>
                <span class="symbol">{</span>
                    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Invalid position."</span><span class="symbol">);</span>
                <span class="symbol">}</span>
                <span class="keyword">else</span>
                <span class="symbol">{</span>
                    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter new value: "</span><span class="symbol">);</span>
                    <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>value<span class="symbol">);</span>

                    arr<span class="symbol">[</span>pos <span class="symbol">-</span> 1<span class="symbol">]</span> <span class="symbol">=</span> value<span class="symbol">;</span>

                    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Element updated successfully."</span><span class="symbol">);</span>
                <span class="symbol">}</span>

                <span class="keyword">break</span><span class="symbol">;</span>

            <span class="keyword">case</span> 5<span class="symbol">:</span>

                <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter position to delete: "</span><span class="symbol">);</span>
                <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>pos<span class="symbol">);</span>

                <span class="keyword">if</span><span class="symbol">(</span>pos <span class="symbol">&lt;</span> 1 <span class="symbol">||</span> pos <span class="symbol">&gt;</span> n<span class="symbol">)</span>
                <span class="symbol">{</span>
                    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Invalid position."</span><span class="symbol">);</span>
                <span class="symbol">}</span>
                <span class="keyword">else</span>
                <span class="symbol">{</span>
                    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> pos <span class="symbol">-</span> 1<span class="symbol">;</span> i <span class="symbol">&lt;</span> n <span class="symbol">-</span> 1<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
                    <span class="symbol">{</span>
                        arr<span class="symbol">[</span>i<span class="symbol">]</span> <span class="symbol">=</span> arr<span class="symbol">[</span>i <span class="symbol">+</span> 1<span class="symbol">];</span>
                    <span class="symbol">}</span>

                    n<span class="symbol">--;</span>

                    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Element deleted successfully."</span><span class="symbol">);</span>
                <span class="symbol">}</span>

                <span class="keyword">break</span><span class="symbol">;</span>

            <span class="keyword">case</span> 6<span class="symbol">:</span>

                <span class="function">printf</span><span class="symbol">(</span><span class="string">"Program terminated."</span><span class="symbol">);</span>
                <span class="keyword">return</span> 0<span class="symbol">;</span>

            <span class="keyword">default</span><span class="symbol">:</span>

                <span class="function">printf</span><span class="symbol">(</span><span class="string">"Invalid choice."</span><span class="symbol">);</span>
        <span class="symbol">}</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Operations Performed</h4>

<ul>
<li>Create (Insert) - Add new elements into the array.</li>
<li>Read (Display) - Show all elements of the array.</li>
<li>Search - Find an element and display its position.</li>
<li>Update - Modify an existing element.</li>
<li>Delete - Remove an element from the array.</li>
</ul>

<h4>Sample Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>========== Array CRUD Operations ==========
1. Insert
2. Display
3. Search
4. Update
5. Delete
6. Exit

Enter your choice: 1
Enter element to insert: 10
Element inserted successfully.

========== Array CRUD Operations ==========
1. Insert
2. Display
3. Search
4. Update
5. Delete
6. Exit

Enter your choice: 1
Enter element to insert: 20
Element inserted successfully.

========== Array CRUD Operations ==========
1. Insert
2. Display
3. Search
4. Update
5. Delete
6. Exit

Enter your choice: 2
Array Elements:
10 20</code></pre>

</div>

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

<pre class="notes_text_pre">
data_type array_name[row_size][column_size];
</pre>

<h4>Example</h4>

<pre class="notes_text_pre">
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

<pre class="notes_text_pre">
int matrix[2][3] = {
    {10, 20, 30},
    {40, 50, 60}
};
</pre>

<h4>Example: Print a Two-Dimensional Array (Matrix)</h4>

<div class="code-box">

    <div class="code-title">
        <span>Display Matrix Elements</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> matrix<span class="symbol">[</span>2<span class="symbol">][</span>3<span class="symbol">]</span> <span class="symbol">=</span>
    <span class="symbol">{</span>
        <span class="symbol">{</span>10<span class="symbol">,</span> 20<span class="symbol">,</span> 30<span class="symbol">}</span><span class="symbol">,</span>
        <span class="symbol">{</span>40<span class="symbol">,</span> 50<span class="symbol">,</span> 60<span class="symbol">}</span>
    <span class="symbol">};</span>

    <span class="datatype">int</span> i<span class="symbol">,</span> j<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Matrix Elements:\n"</span><span class="symbol">);</span>

    <span class="comment">// Traverse the matrix using nested loops</span>
    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> 2<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="keyword">for</span><span class="symbol">(</span>j <span class="symbol">=</span> 0<span class="symbol">;</span> j <span class="symbol">&lt;</span> 3<span class="symbol">;</span> j<span class="symbol">++</span><span class="symbol">)</span>
        <span class="symbol">{</span>
            <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d "</span><span class="symbol">,</span> matrix<span class="symbol">[</span>i<span class="symbol">][</span>j<span class="symbol">]);</span>
        <span class="symbol">}</span>

        <span class="function">printf</span><span class="symbol">(</span><span class="string">"\n"</span><span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Matrix Elements:
10 20 30
40 50 60</code></pre>

</div>

<h4>Program to Take Input from User and Display Matrix</h4>

<div class="code-box">

    <div class="code-title">
        <span>Input and Display Matrix Elements</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> matrix<span class="symbol">[</span>3<span class="symbol">][</span>3<span class="symbol">];</span>
    <span class="datatype">int</span> i<span class="symbol">,</span> j<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter 9 elements:\n"</span><span class="symbol">);</span>

    <span class="comment">// Input matrix elements</span>
    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> 3<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="keyword">for</span><span class="symbol">(</span>j <span class="symbol">=</span> 0<span class="symbol">;</span> j <span class="symbol">&lt;</span> 3<span class="symbol">;</span> j<span class="symbol">++</span><span class="symbol">)</span>
        <span class="symbol">{</span>
            <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>matrix<span class="symbol">[</span>i<span class="symbol">][</span>j<span class="symbol">]);</span>
        <span class="symbol">}</span>
    <span class="symbol">}</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Matrix Elements:\n"</span><span class="symbol">);</span>

    <span class="comment">// Display matrix elements</span>
    <span class="keyword">for</span><span class="symbol">(</span>i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> 3<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="keyword">for</span><span class="symbol">(</span>j <span class="symbol">=</span> 0<span class="symbol">;</span> j <span class="symbol">&lt;</span> 3<span class="symbol">;</span> j<span class="symbol">++</span><span class="symbol">)</span>
        <span class="symbol">{</span>
            <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d "</span><span class="symbol">,</span> matrix<span class="symbol">[</span>i<span class="symbol">][</span>j<span class="symbol">]);</span>
        <span class="symbol">}</span>

        <span class="function">printf</span><span class="symbol">(</span><span class="string">"\n"</span><span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Enter 9 elements:
10 20 30
40 50 60
70 80 90

Matrix Elements:
10 20 30
40 50 60
70 80 90</code></pre>

</div>

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

<pre class="notes_text_pre">
data_type *pointer_name;
</pre>

<p>Example:</p>

<pre class="notes_text_pre">
int *ptr;
float *fptr;
char *cptr;
</pre>

<hr>

<h4>Example: Pointer Basics</h4>

<div class="code-box">

    <div class="code-title">
        <span>Pointer Example</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> num <span class="symbol">=</span> 10<span class="symbol">;</span>
    <span class="datatype">int</span> <span class="symbol">*</span>ptr <span class="symbol">=</span> <span class="symbol">&amp;</span>num<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Value of num = %d"</span><span class="symbol">,</span> num<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"\nAddress of num = %p"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>num<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"\nValue stored in ptr = %p"</span><span class="symbol">,</span> ptr<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"\nValue using pointer = %d"</span><span class="symbol">,</span> <span class="symbol">*</span>ptr<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Value of num = 10
Address of num = 0x7ffe1234abcd
Value stored in ptr = 0x7ffe1234abcd
Value using pointer = 10</code></pre>

</div>

<div class="box">
<b>Note:</b> The memory address printed using <code>%p</code> is different on every computer and every program execution. Therefore, your output address may not match the address shown above.
</div>

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

<pre class="notes_text_pre">
int a = 5;
printf("%p", &a);
</pre>

<h4>2. Dereference Operator (*)</h4>

<p>Returns the value stored at the address.</p>

<pre class="notes_text_pre">
int a = 5;
int *ptr = &a;

printf("%d", *ptr);
</pre>

<hr>

<h3>Types of Pointers</h3>

<h4>1. Integer Pointer</h4>

<p>Stores the address of an integer variable.</p>

<pre class="notes_text_pre">
int num = 100;
int *ptr = &num;
</pre>

<h4>2. Character Pointer</h4>

<p>Stores the address of a character variable.</p>

<pre class="notes_text_pre">
char ch = 'A';
char *ptr = &ch;
</pre>

<h4>3. Float Pointer</h4>

<p>Stores the address of a float variable.</p>

<pre class="notes_text_pre">
float price = 99.5;
float *ptr = &price;
</pre>

<h4>4. Double Pointer</h4>

<p>Stores the address of a double variable.</p>

<pre class="notes_text_pre">
double pi = 3.14;
double *ptr = &pi;
</pre>

<h4>5. Void Pointer (Generic Pointer)</h4>

<p>A void pointer can store the address of any data type.</p>

<pre class="notes_text_pre">
void *ptr;
</pre>

<p>Example:</p>

<pre class="notes_text_pre">
int num = 50;

void *ptr = &num;

printf("%d", *(int *)ptr);
</pre>

<hr>

<h3>Special Types of Pointers</h3>

<h4>6. Null Pointer</h4>

<p>A pointer that points to nothing.</p>

<pre class="notes_text_pre">
int *ptr = NULL;
</pre>

<p>Used to indicate that a pointer is not currently assigned to any memory location.</p>

<h4>7. Wild Pointer</h4>

<p>An uninitialized pointer.</p>

<pre class="notes_text_pre">
int *ptr;
</pre>

<p>It contains a garbage address and should never be used before initialization.</p>

<h4>8. Dangling Pointer</h4>

<p>A pointer that points to memory which has already been released.</p>

<pre class="notes_text_pre">
int *ptr = (int *)malloc(sizeof(int));

free(ptr);
</pre>

<p>After free(), ptr becomes a dangling pointer.</p>

<hr>

<h3>Pointer to Pointer (Double Pointer)</h3>

<p>A pointer that stores the address of another pointer.</p>

<h4>Example: Pointer to Pointer (Double Pointer)</h4>

<div class="code-box">

    <div class="code-title">
        <span>Pointer to Pointer Example</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> num <span class="symbol">=</span> 10<span class="symbol">;</span>

    <span class="datatype">int</span> <span class="symbol">*</span>ptr <span class="symbol">=</span> <span class="symbol">&amp;</span>num<span class="symbol">;</span>

    <span class="datatype">int</span> <span class="symbol">**</span>pptr <span class="symbol">=</span> <span class="symbol">&amp;</span>ptr<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">**</span>pptr<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>10</code></pre>

</div>

<div class="box">
<b>Explanation:</b>
<ul>
<li><code>num</code> stores the value <b>10</b>.</li>
<li><code>ptr</code> stores the address of <code>num</code>.</li>
<li><code>pptr</code> stores the address of <code>ptr</code>.</li>
<li><code>*pptr</code> gives the value of <code>ptr</code> (the address of <code>num</code>).</li>
<li><code>**pptr</code> accesses the value stored at that address, which is <b>10</b>.</li>
</ul>
</div>

<h4>Memory Representation</h4>

<pre class="notes_text_pre">
num  = 10
ptr  = address of num
pptr = address of ptr
</pre>

<hr>

<h3>Pointers and Arrays</h3>

<p>The name of an array acts as a pointer to its first element.</p>

<h4>Example: Pointer with Array</h4>

<div class="code-box">

    <div class="code-title">
        <span>Access Array Elements Using Pointer</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> arr<span class="symbol">[]</span> <span class="symbol">=</span> <span class="symbol">{</span>10<span class="symbol">,</span> 20<span class="symbol">,</span> 30<span class="symbol">,</span> 40<span class="symbol">};</span>

    <span class="comment">// Access array elements using pointer notation</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">*</span>arr<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"\n%d"</span><span class="symbol">,</span> <span class="symbol">*</span><span class="symbol">(</span>arr <span class="symbol">+</span> 1<span class="symbol">));</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>10
20</code></pre>

</div>

<div class="box">
<b>Explanation:</b>
<ul>
<li><code>arr</code> points to the address of the first element of the array.</li>
<li><code>*arr</code> accesses the first element (<b>10</b>).</li>
<li><code>arr + 1</code> points to the second element of the array.</li>
<li><code>*(arr + 1)</code> accesses the second element (<b>20</b>).</li>
</ul>
</div>

<h4>Output</h4>

<pre class="notes_text_pre">
10
20
</pre>

<hr>

<h3>Pointer Arithmetic</h3>

<p>Pointers can be incremented and decremented.</p>

<h4>Example: Pointer Arithmetic</h4>

<div class="code-box">

    <div class="code-title">
        <span>Pointer Arithmetic Example</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> arr<span class="symbol">[]</span> <span class="symbol">=</span> <span class="symbol">{</span>10<span class="symbol">,</span> 20<span class="symbol">,</span> 30<span class="symbol">};</span>

    <span class="datatype">int</span> <span class="symbol">*</span>ptr <span class="symbol">=</span> arr<span class="symbol">;</span>

    <span class="comment">// Print the first element</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d\n"</span><span class="symbol">,</span> <span class="symbol">*</span>ptr<span class="symbol">);</span>

    <span class="comment">// Move the pointer to the next element</span>
    ptr<span class="symbol">++;</span>

    <span class="comment">// Print the second element</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">*</span>ptr<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>10
20</code></pre>

</div>

<div class="box">
<b>Explanation:</b>
<ul>
<li><code>ptr = arr</code> stores the address of the first element of the array.</li>
<li><code>*ptr</code> accesses the first element, which is <b>10</b>.</li>
<li><code>ptr++</code> moves the pointer to the next integer location in memory.</li>
<li>After incrementing, <code>ptr</code> points to the second element of the array.</li>
<li><code>*ptr</code> now accesses the second element, which is <b>20</b>.</li>
</ul>
</div>
<hr>

<h4>Example: Swap Two Numbers Using Pointers (Call by Reference)</h4>

<div class="code-box">

    <div class="code-title">
        <span>Call by Reference</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">void</span> <span class="function">swap</span><span class="symbol">(</span><span class="datatype">int</span> <span class="symbol">*</span>a<span class="symbol">,</span> <span class="datatype">int</span> <span class="symbol">*</span>b<span class="symbol">)</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> temp<span class="symbol">;</span>

    temp <span class="symbol">=</span> <span class="symbol">*</span>a<span class="symbol">;</span>
    <span class="symbol">*</span>a <span class="symbol">=</span> <span class="symbol">*</span>b<span class="symbol">;</span>
    <span class="symbol">*</span>b <span class="symbol">=</span> temp<span class="symbol">;</span>
<span class="symbol">}</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> x <span class="symbol">=</span> 10<span class="symbol">;</span>
    <span class="datatype">int</span> y <span class="symbol">=</span> 20<span class="symbol">;</span>

    <span class="comment">// Pass the addresses of x and y</span>
    <span class="function">swap</span><span class="symbol">(</span><span class="symbol">&amp;</span>x<span class="symbol">,</span> <span class="symbol">&amp;</span>y<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"x = %d"</span><span class="symbol">,</span> x<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"\ny = %d"</span><span class="symbol">,</span> y<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>x = 20
y = 10</code></pre>

</div>

<div class="box">
<b>Explanation:</b>
<ul>
<li><code>swap()</code> receives the addresses of <code>x</code> and <code>y</code>.</li>
<li><code>*a</code> represents the value of <code>x</code> and <code>*b</code> represents the value of <code>y</code>.</li>
<li>A temporary variable <code>temp</code> stores the value of <code>*a</code>.</li>
<li>The value of <code>*b</code> is assigned to <code>*a</code>.</li>
<li>The value stored in <code>temp</code> is assigned to <code>*b</code>.</li>
<li>Since the original variables are modified through their addresses, the values of <code>x</code> and <code>y</code> are successfully swapped.</li>
</ul>
</div>

<hr>

<h3>Dynamic Memory Allocation Using Pointers</h3>

<p>Pointers are used with malloc(), calloc(), realloc(), and free().</p>

<h4>Example: Dynamic Memory Allocation Using <code>malloc()</code></h4>

<div class="code-box">

    <div class="code-title">
        <span>malloc() Example</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>
<span class="preprocessor">#include</span> <span class="header-file">&lt;stdlib.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">int</span> <span class="symbol">*</span>ptr<span class="symbol">;</span>

    <span class="comment">// Allocate memory for 5 integers</span>
    ptr <span class="symbol">=</span> <span class="symbol">(</span><span class="datatype">int</span> <span class="symbol">*</span><span class="symbol">)</span><span class="function">malloc</span><span class="symbol">(</span>5 <span class="symbol">*</span> <span class="keyword">sizeof</span><span class="symbol">(</span><span class="datatype">int</span><span class="symbol">));</span>

    <span class="comment">// Store values in allocated memory</span>
    <span class="keyword">for</span><span class="symbol">(</span><span class="datatype">int</span> i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> 5<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        ptr<span class="symbol">[</span>i<span class="symbol">]</span> <span class="symbol">=</span> i <span class="symbol">+</span> 1<span class="symbol">;</span>
    <span class="symbol">}</span>

    <span class="comment">// Display the values</span>
    <span class="keyword">for</span><span class="symbol">(</span><span class="datatype">int</span> i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> 5<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d "</span><span class="symbol">,</span> ptr<span class="symbol">[</span>i<span class="symbol">]);</span>
    <span class="symbol">}</span>

    <span class="comment">// Free the allocated memory</span>
    <span class="function">free</span><span class="symbol">(</span>ptr<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>1 2 3 4 5</code></pre>

</div>

<div class="box">
<b>Explanation:</b>
<ul>
<li><code>malloc()</code> dynamically allocates memory for <b>5 integer</b> values.</li>
<li><code>sizeof(int)</code> returns the size of one integer in bytes.</li>
<li><code>ptr</code> stores the address of the allocated memory block.</li>
<li>The first <code>for</code> loop stores the values <b>1, 2, 3, 4, 5</b> in the allocated memory.</li>
<li>The second <code>for</code> loop prints all the values stored in memory.</li>
<li><code>free(ptr)</code> releases the allocated memory to prevent memory leaks.</li>
</ul>
</div>

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

<div class="code-box">

    <div class="code-title">
        <span>Structure Syntax</span>
    </div>

<pre><code><span class="keyword">struct</span> structure_name
<span class="symbol">{</span>
    <span class="datatype">data_type</span> member1<span class="symbol">;</span>
    <span class="datatype">data_type</span> member2<span class="symbol">;</span>
    <span class="datatype">data_type</span> member3<span class="symbol">;</span>
<span class="symbol">}</span><span class="symbol">;</span>
</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>struct</code> is a keyword used to define a structure in C.</li>
<li><code>structure_name</code> is the name of the structure (for example: <code>Student</code>, <code>Employee</code>, <code>Book</code>).</li>
<li>Inside the structure, we declare variables called <b>members</b> (or fields).</li>
<li>Each member can have a different data type such as <code>int</code>, <code>float</code>, <code>char</code>, etc.</li>
<li>The structure definition ends with a semicolon (<code>;</code>).</li>
<li>A structure only defines a new data type. Memory is allocated only when a structure variable is created.</li>
</ul>

</div>

<h4>Example: Structure Declaration</h4>

<div class="code-box">

    <div class="code-title">
        <span>Declare a Structure</span>
    </div>

<pre><code><span class="keyword">struct</span> Student
<span class="symbol">{</span>
    <span class="datatype">int</span> rollNo<span class="symbol">;</span>
    <span class="datatype">char</span> name<span class="symbol">[</span>50<span class="symbol">];</span>
    <span class="datatype">float</span> marks<span class="symbol">;</span>
<span class="symbol">}</span><span class="symbol">;</span>
</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>Student</code> is the name of the structure.</li>
<li><code>rollNo</code> stores the student's roll number.</li>
<li><code>name</code> stores the student's name as a character array (string).</li>
<li><code>marks</code> stores the student's marks in decimal format.</li>
<li>This code only defines the structure. It does <b>not</b> create any variable or allocate memory.</li>
<li>To use this structure, you must create a structure variable such as <code>struct Student s1;</code>.</li>
</ul>

</div>

<p>
Here Student is the structure name and rollNo, name, and marks are structure members.
</p>

<hr>

<h3>Structure Variables</h3>

<p>
After creating a structure, we need a structure variable to store data.
</p>

<h4>Method 1: Declare Variable After Structure</h4>


<div class="code-box">

    <div class="code-title">
        <span>Create a Structure Variable</span>
    </div>

<pre><code><span class="keyword">struct</span> Student
<span class="symbol">{</span>
    <span class="datatype">int</span> rollNo<span class="symbol">;</span>
    <span class="datatype">char</span> name<span class="symbol">[</span>50<span class="symbol">];</span>
    <span class="datatype">float</span> marks<span class="symbol">;</span>
<span class="symbol">}</span><span class="symbol">;</span>

<span class="keyword">struct</span> Student s1<span class="symbol">;</span>
</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>struct Student</code> defines a new structure data type.</li>
<li><code>s1</code> is a structure variable of type <code>Student</code>.</li>
<li>Memory is allocated for <code>s1</code> when it is declared.</li>
<li><code>s1</code> contains three members:
    <ul>
        <li><code>s1.rollNo</code></li>
        <li><code>s1.name</code></li>
        <li><code>s1.marks</code></li>
    </ul>
</li>
<li>You can access the members of <code>s1</code> using the <b>dot (.) operator</b>.</li>
</ul>

</div>

<h4>Method 2: Declare Variable During Structure Creation</h4>

<div class="code-box">

    <div class="code-title">
        <span>Create Multiple Structure Variables</span>
    </div>

<pre><code><span class="keyword">struct</span> Student
<span class="symbol">{</span>
    <span class="datatype">int</span> rollNo<span class="symbol">;</span>
    <span class="datatype">char</span> name<span class="symbol">[</span>50<span class="symbol">];</span>
    <span class="datatype">float</span> marks<span class="symbol">;</span>
<span class="symbol">}</span> s1<span class="symbol">,</span> s2<span class="symbol">;</span>
</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>struct Student</code> defines a new structure named <code>Student</code>.</li>
<li><code>s1</code> and <code>s2</code> are two structure variables created at the same time.</li>
<li>Separate memory is allocated for both <code>s1</code> and <code>s2</code>.</li>
<li>Each variable has its own members:
    <ul>
        <li><code>s1.rollNo</code>, <code>s1.name</code>, <code>s1.marks</code></li>
        <li><code>s2.rollNo</code>, <code>s2.name</code>, <code>s2.marks</code></li>
    </ul>
</li>
<li>You can store different data in <code>s1</code> and <code>s2</code> independently.</li>
</ul>

</div>

<hr>

<h3>Accessing Structure Members</h3>

<p>
The dot (.) operator is used to access structure members.
</p>

<h4>Example: Accessing Structure Members Using Dot (.) Operator</h4>

<div class="code-box">

    <div class="code-title">
        <span>Structure Member Access</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">struct</span> Student
<span class="symbol">{</span>
    <span class="datatype">int</span> rollNo<span class="symbol">;</span>
    <span class="datatype">char</span> name<span class="symbol">[</span>50<span class="symbol">];</span>
    <span class="datatype">float</span> marks<span class="symbol">;</span>
<span class="symbol">}</span><span class="symbol">;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="keyword">struct</span> Student s1<span class="symbol">;</span>

    <span class="comment">// Assign values to structure members</span>
    s1<span class="symbol">.</span>rollNo <span class="symbol">=</span> 101<span class="symbol">;</span>
    s1<span class="symbol">.</span>marks <span class="symbol">=</span> 85.5<span class="symbol">;</span>

    <span class="comment">// Display structure members</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Roll Number = %d\n"</span><span class="symbol">,</span> s1<span class="symbol">.</span>rollNo<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Marks = %.2f"</span><span class="symbol">,</span> s1<span class="symbol">.</span>marks<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Roll Number = 101
Marks = 85.50</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>s1</code> is a structure variable of type <code>Student</code>.</li>
<li>The <b>dot (.) operator</b> is used to access the members of a structure.</li>
<li><code>s1.rollNo = 101;</code> assigns <b>101</b> to the <code>rollNo</code> member.</li>
<li><code>s1.marks = 85.5;</code> assigns <b>85.5</b> to the <code>marks</code> member.</li>
<li><code>printf()</code> displays the values stored in the structure members.</li>
<li>The <code>name</code> member is declared but is not used in this example.</li>
</ul>

</div>

<hr>

<h3>Structure Initialization</h3>

<p>
Values can be assigned during declaration.
</p>

<h4>Example: Structure Initialization</h4>

<div class="code-box">

    <div class="code-title">
        <span>Initialize a Structure Variable</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">struct</span> Student
<span class="symbol">{</span>
    <span class="datatype">int</span> rollNo<span class="symbol">;</span>
    <span class="datatype">char</span> name<span class="symbol">[</span>20<span class="symbol">];</span>
    <span class="datatype">float</span> marks<span class="symbol">;</span>
<span class="symbol">}</span><span class="symbol">;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="comment">// Initialize structure variable</span>
    <span class="keyword">struct</span> Student s1 <span class="symbol">=</span> <span class="symbol">{</span>101<span class="symbol">,</span> <span class="string">"Pradeep"</span><span class="symbol">,</span> 89.5<span class="symbol">}</span><span class="symbol">;</span>

    <span class="comment">// Display structure members</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Roll No = %d\n"</span><span class="symbol">,</span> s1<span class="symbol">.</span>rollNo<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Name = %s\n"</span><span class="symbol">,</span> s1<span class="symbol">.</span>name<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Marks = %.2f"</span><span class="symbol">,</span> s1<span class="symbol">.</span>marks<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Roll No = 101
Name = Pradeep
Marks = 89.50</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>struct Student s1 = {101, "Pradeep", 89.5};</code> initializes all structure members at the time of declaration.</li>
<li><code>101</code> is assigned to <code>rollNo</code>.</li>
<li><code>"Pradeep"</code> is assigned to the <code>name</code> character array.</li>
<li><code>89.5</code> is assigned to the <code>marks</code> member.</li>
<li>The <b>dot (.) operator</b> is used to access and display each member of the structure.</li>
</ul>

</div>
<hr>

<h3>Structure Assignment</h3>

<p>
One structure variable can be assigned to another structure variable of the same type.
</p>

<h4>Example: Copying One Structure to Another</h4>

<div class="code-box">

    <div class="code-title">
        <span>Structure Assignment</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">struct</span> Student
<span class="symbol">{</span>
    <span class="datatype">int</span> rollNo<span class="symbol">;</span>
    <span class="datatype">float</span> marks<span class="symbol">;</span>
<span class="symbol">}</span><span class="symbol">;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="comment">// Initialize first structure variable</span>
    <span class="keyword">struct</span> Student s1 <span class="symbol">=</span> <span class="symbol">{</span>101<span class="symbol">,</span> 90<span class="symbol">}</span><span class="symbol">;</span>

    <span class="comment">// Declare second structure variable</span>
    <span class="keyword">struct</span> Student s2<span class="symbol">;</span>

    <span class="comment">// Copy all members of s1 into s2</span>
    s2 <span class="symbol">=</span> s1<span class="symbol">;</span>

    <span class="comment">// Display copied values</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Roll No = %d\n"</span><span class="symbol">,</span> s2<span class="symbol">.</span>rollNo<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Marks = %.2f"</span><span class="symbol">,</span> s2<span class="symbol">.</span>marks<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Roll No = 101
Marks = 90.00</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>s1</code> is initialized with the values <b>101</b> and <b>90</b>.</li>
<li><code>s2</code> is another structure variable of the same type.</li>
<li><code>s2 = s1;</code> copies all members of <code>s1</code> into <code>s2</code>.</li>
<li>After copying, both <code>s1</code> and <code>s2</code> contain the same values.</li>
<li>Changing the values of <code>s2</code> later will <b>not</b> affect <code>s1</code>, because each structure has its own separate memory.</li>
</ul>

</div>

<hr>

<h3>Nested Structure</h3>

<p>
A structure inside another structure is called a Nested Structure.
</p>

<h4>Example: Nested Structure</h4>

<div class="code-box">

    <div class="code-title">
        <span>Structure Inside Another Structure</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">struct</span> Address
<span class="symbol">{</span>
    <span class="datatype">char</span> city<span class="symbol">[</span>30<span class="symbol">];</span>
    <span class="datatype">int</span> pin<span class="symbol">;</span>
<span class="symbol">}</span><span class="symbol">;</span>

<span class="keyword">struct</span> Student
<span class="symbol">{</span>
    <span class="datatype">int</span> rollNo<span class="symbol">;</span>
    <span class="datatype">char</span> name<span class="symbol">[</span>30<span class="symbol">];</span>
    <span class="keyword">struct</span> Address add<span class="symbol">;</span>
<span class="symbol">}</span><span class="symbol">;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="comment">// Initialize nested structure</span>
    <span class="keyword">struct</span> Student s1 <span class="symbol">=</span>
    <span class="symbol">{</span>
        101<span class="symbol">,</span>
        <span class="string">"Pradeep"</span><span class="symbol">,</span>
        <span class="symbol">{</span><span class="string">"Gorakhpur"</span><span class="symbol">,</span> 273001<span class="symbol">}</span>
    <span class="symbol">}</span><span class="symbol">;</span>

    <span class="comment">// Display structure members</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Roll No = %d\n"</span><span class="symbol">,</span> s1<span class="symbol">.</span>rollNo<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Name = %s\n"</span><span class="symbol">,</span> s1<span class="symbol">.</span>name<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"City = %s\n"</span><span class="symbol">,</span> s1<span class="symbol">.</span>add<span class="symbol">.</span>city<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"PIN = %d"</span><span class="symbol">,</span> s1<span class="symbol">.</span>add<span class="symbol">.</span>pin<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Roll No = 101
Name = Pradeep
City = Gorakhpur
PIN = 273001</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>Address</code> is a structure that stores the student's <code>city</code> and <code>pin</code>.</li>
<li><code>Student</code> is another structure that contains an <code>Address</code> structure as a member named <code>add</code>.</li>
<li>This is called a <b>Nested Structure</b> because one structure is declared inside another structure.</li>
<li>The nested structure is initialized using:
<code>{ "Gorakhpur", 273001 }</code>.</li>
<li>The nested members are accessed using multiple dot (<code>.</code>) operators:
<ul>
<li><code>s1.add.city</code> → Accesses the city name.</li>
<li><code>s1.add.pin</code> → Accesses the PIN code.</li>
</ul>
</li>
</ul>

</div>
<hr>

<h3>Structures and Functions</h3>

<p>
Structures can be passed to functions just like normal variables.
</p>

<h4>Example: Passing Structure to Function</h4>

<div class="code-box">

    <div class="code-title">
        <span>Pass Structure to Function</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">struct</span> Student
<span class="symbol">{</span>
    <span class="datatype">int</span> rollNo<span class="symbol">;</span>
    <span class="datatype">float</span> marks<span class="symbol">;</span>
<span class="symbol">}</span><span class="symbol">;</span>

<span class="datatype">void</span> <span class="function">display</span><span class="symbol">(</span><span class="keyword">struct</span> Student s<span class="symbol">)</span>
<span class="symbol">{</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Roll No = %d\n"</span><span class="symbol">,</span> s<span class="symbol">.</span>rollNo<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Marks = %.2f"</span><span class="symbol">,</span> s<span class="symbol">.</span>marks<span class="symbol">);</span>
<span class="symbol">}</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="comment">// Initialize structure variable</span>
    <span class="keyword">struct</span> Student s1 <span class="symbol">=</span> <span class="symbol">{</span>101<span class="symbol">,</span> 88.5<span class="symbol">}</span><span class="symbol">;</span>

    <span class="comment">// Pass structure variable to the function</span>
    <span class="function">display</span><span class="symbol">(</span>s1<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Roll No = 101
Marks = 88.50</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>struct Student</code> defines a structure with two members: <code>rollNo</code> and <code>marks</code>.</li>
<li><code>s1</code> is initialized with the values <b>101</b> and <b>88.5</b>.</li>
<li><code>display(s1);</code> passes the entire structure variable to the <code>display()</code> function.</li>
<li>The function receives a copy of the structure in the parameter <code>s</code>.</li>
<li>Inside the function, the members are accessed using the <b>dot (.) operator</b>.</li>
<li>Since the structure is passed by value, any changes made to <code>s</code> inside the function will <b>not</b> affect the original structure <code>s1</code>.</li>
</ul>

</div>

<hr>

<h3>Returning Structure From Function</h3>

<div class="code-box">

    <div class="code-title">
        <span>Return Structure from Function</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">struct</span> Student
<span class="symbol">{</span>
    <span class="datatype">int</span> rollNo<span class="symbol">;</span>
    <span class="datatype">float</span> marks<span class="symbol">;</span>
<span class="symbol">}</span><span class="symbol">;</span>

<span class="keyword">struct</span> Student <span class="function">getData</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="keyword">struct</span> Student s<span class="symbol">;</span>

    s<span class="symbol">.</span>rollNo <span class="symbol">=</span> 101<span class="symbol">;</span>
    s<span class="symbol">.</span>marks <span class="symbol">=</span> 92.5<span class="symbol">;</span>

    <span class="keyword">return</span> s<span class="symbol">;</span>
<span class="symbol">}</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="keyword">struct</span> Student s1<span class="symbol">;</span>

    <span class="comment">// Receive the returned structure</span>
    s1 <span class="symbol">=</span> <span class="function">getData</span><span class="symbol">();</span>

    <span class="comment">// Display structure members</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Roll No = %d\n"</span><span class="symbol">,</span> s1<span class="symbol">.</span>rollNo<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Marks = %.2f"</span><span class="symbol">,</span> s1<span class="symbol">.</span>marks<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Roll No = 101
Marks = 92.50</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>getData()</code> is a function that returns a structure of type <code>Student</code>.</li>
<li>Inside the function, a structure variable <code>s</code> is created and its members are assigned values.</li>
<li><code>return s;</code> returns the complete structure to the calling function.</li>
<li>In <code>main()</code>, the returned structure is stored in <code>s1</code> using <code>s1 = getData();</code>.</li>
<li>The members of <code>s1</code> are accessed using the <b>dot (.) operator</b> and displayed using <code>printf()</code>.</li>
</ul>

</div>

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

<h4>Example: Array of Structures</h4>

<div class="code-box">

    <div class="code-title">
        <span>Store and Display Multiple Student Records</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">struct</span> Student
<span class="symbol">{</span>
    <span class="datatype">int</span> rollNo<span class="symbol">;</span>
    <span class="datatype">char</span> name<span class="symbol">[</span>30<span class="symbol">];</span>
    <span class="datatype">float</span> marks<span class="symbol">;</span>
<span class="symbol">}</span><span class="symbol">;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="comment">// Declare an array of structures</span>
    <span class="keyword">struct</span> Student s<span class="symbol">[</span>3<span class="symbol">];</span>

    <span class="comment">// Input student details</span>
    <span class="keyword">for</span><span class="symbol">(</span><span class="datatype">int</span> i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> 3<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter Roll No: "</span><span class="symbol">);</span>
        <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>s<span class="symbol">[</span>i<span class="symbol">]</span><span class="symbol">.</span>rollNo<span class="symbol">);</span>

        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter Name: "</span><span class="symbol">);</span>
        <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%s"</span><span class="symbol">,</span> s<span class="symbol">[</span>i<span class="symbol">]</span><span class="symbol">.</span>name<span class="symbol">);</span>

        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter Marks: "</span><span class="symbol">);</span>
        <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%f"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>s<span class="symbol">[</span>i<span class="symbol">]</span><span class="symbol">.</span>marks<span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"\nStudent Details\n"</span><span class="symbol">);</span>

    <span class="comment">// Display student details</span>
    <span class="keyword">for</span><span class="symbol">(</span><span class="datatype">int</span> i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> 3<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"\nRoll No = %d\n"</span><span class="symbol">,</span> s<span class="symbol">[</span>i<span class="symbol">]</span><span class="symbol">.</span>rollNo<span class="symbol">);</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Name = %s\n"</span><span class="symbol">,</span> s<span class="symbol">[</span>i<span class="symbol">]</span><span class="symbol">.</span>name<span class="symbol">);</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Marks = %.2f\n"</span><span class="symbol">,</span> s<span class="symbol">[</span>i<span class="symbol">]</span><span class="symbol">.</span>marks<span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Sample Input</h4>

<div class="code-box">

    <div class="code-title">
        <span>Input</span>
    </div>

<pre><code>Enter Roll No: 101
Enter Name: Pradeep
Enter Marks: 89.5

Enter Roll No: 102
Enter Name: Rahul
Enter Marks: 84.0

Enter Roll No: 103
Enter Name: Amit
Enter Marks: 91.5</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Student Details

Roll No = 101
Name = Pradeep
Marks = 89.50

Roll No = 102
Name = Rahul
Marks = 84.00

Roll No = 103
Name = Amit
Marks = 91.50</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>struct Student s[3];</code> creates an array that can store details of <b>3 students</b>.</li>
<li>Each element of the array is a separate structure variable.</li>
<li>The first <code>for</code> loop is used to input the roll number, name, and marks for each student.</li>
<li>The second <code>for</code> loop displays the details of all students.</li>
<li>Members of each structure are accessed using the <b>dot (.) operator</b>, such as:
    <ul>
        <li><code>s[i].rollNo</code></li>
        <li><code>s[i].name</code></li>
        <li><code>s[i].marks</code></li>
    </ul>
</li>
</ul>

</div>
<hr>

<h3>Structures Containing Arrays</h3>

<p>
A structure member can itself be an array.
</p>

<h4>Example: Structure with Array</h4>

<div class="code-box">

    <div class="code-title">
        <span>Structure Containing an Array</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">struct</span> Student
<span class="symbol">{</span>
    <span class="datatype">int</span> rollNo<span class="symbol">;</span>
    <span class="datatype">char</span> name<span class="symbol">[</span>50<span class="symbol">];</span>
    <span class="datatype">int</span> marks<span class="symbol">[</span>5<span class="symbol">];</span>
<span class="symbol">}</span><span class="symbol">;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="keyword">struct</span> Student s1<span class="symbol">;</span>

    s1<span class="symbol">.</span>rollNo <span class="symbol">=</span> 101<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter Name: "</span><span class="symbol">);</span>
    <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%s"</span><span class="symbol">,</span> s1<span class="symbol">.</span>name<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter 5 Subject Marks\n"</span><span class="symbol">);</span>

    <span class="comment">// Input marks</span>
    <span class="keyword">for</span><span class="symbol">(</span><span class="datatype">int</span> i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> 5<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>s1<span class="symbol">.</span>marks<span class="symbol">[</span>i<span class="symbol">]</span><span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"\nStudent Information\n"</span><span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Roll No = %d\n"</span><span class="symbol">,</span> s1<span class="symbol">.</span>rollNo<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Name = %s\n"</span><span class="symbol">,</span> s1<span class="symbol">.</span>name<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Marks = "</span><span class="symbol">);</span>

    <span class="comment">// Display marks</span>
    <span class="keyword">for</span><span class="symbol">(</span><span class="datatype">int</span> i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> 5<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"%d "</span><span class="symbol">,</span> s1<span class="symbol">.</span>marks<span class="symbol">[</span>i<span class="symbol">]</span><span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Sample Input</h4>

<div class="code-box">

    <div class="code-title">
        <span>Input</span>
    </div>

<pre><code>Enter Name: Pradeep
Enter 5 Subject Marks
80
85
90
88
92</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Student Information
Roll No = 101
Name = Pradeep
Marks = 80 85 90 88 92</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>struct Student</code> contains three members: <code>rollNo</code>, <code>name</code>, and an integer array <code>marks[5]</code>.</li>
<li>The <code>marks</code> array stores the marks of <b>5 subjects</b> for one student.</li>
<li><code>scanf("%s", s1.name);</code> reads the student's name.</li>
<li>The first <code>for</code> loop inputs the marks into <code>s1.marks[i]</code>.</li>
<li>The second <code>for</code> loop displays all five subject marks.</li>
<li>The array inside the structure is accessed using <code>s1.marks[i]</code>.</li>
</ul>

</div>
<hr>

<h3>Real Life Example of Structure</h3>

<div class="code-box">

    <div class="code-title">
        <span>Read and Display Employee Information</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">struct</span> Employee
<span class="symbol">{</span>
    <span class="datatype">int</span> id<span class="symbol">;</span>
    <span class="datatype">char</span> name<span class="symbol">[</span>50<span class="symbol">];</span>
    <span class="datatype">float</span> salary<span class="symbol">;</span>
<span class="symbol">}</span><span class="symbol">;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="keyword">struct</span> Employee emp<span class="symbol">;</span>

    <span class="comment">// Input employee details</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter Employee ID: "</span><span class="symbol">);</span>
    <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>emp<span class="symbol">.</span>id<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter Employee Name: "</span><span class="symbol">);</span>
    <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%s"</span><span class="symbol">,</span> emp<span class="symbol">.</span>name<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter Salary: "</span><span class="symbol">);</span>
    <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%f"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>emp<span class="symbol">.</span>salary<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"\nEmployee Information\n"</span><span class="symbol">);</span>

    <span class="comment">// Display employee details</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"ID = %d\n"</span><span class="symbol">,</span> emp<span class="symbol">.</span>id<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Name = %s\n"</span><span class="symbol">,</span> emp<span class="symbol">.</span>name<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Salary = %.2f"</span><span class="symbol">,</span> emp<span class="symbol">.</span>salary<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Sample Input</h4>

<div class="code-box">

    <div class="code-title">
        <span>Input</span>
    </div>

<pre><code>Enter Employee ID: 101
Enter Employee Name: Pradeep
Enter Salary: 45000</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Employee Information
ID = 101
Name = Pradeep
Salary = 45000.00</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>struct Employee</code> defines a structure with three members: <code>id</code>, <code>name</code>, and <code>salary</code>.</li>
<li><code>struct Employee emp;</code> creates a structure variable named <code>emp</code>.</li>
<li><code>scanf()</code> is used to input the employee's ID, name, and salary.</li>
<li>The <b>dot (.) operator</b> is used to access the structure members:
    <ul>
        <li><code>emp.id</code></li>
        <li><code>emp.name</code></li>
        <li><code>emp.salary</code></li>
    </ul>
</li>
<li><code>printf()</code> displays all the information stored in the structure variable.</li>
</ul>

</div>
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

<div class="code-box">

    <div class="code-title">
        <span>Union Syntax</span>
    </div>

<pre><code><span class="keyword">union</span> union_name
<span class="symbol">{</span>
    <span class="datatype">data_type</span> member1<span class="symbol">;</span>
    <span class="datatype">data_type</span> member2<span class="symbol">;</span>
    <span class="datatype">data_type</span> member3<span class="symbol">;</span>
<span class="symbol">}</span><span class="symbol">;</span>
</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>union</code> is a keyword used to define a union in C.</li>
<li><code>union_name</code> is the name of the union (for example: <code>Student</code>, <code>Employee</code>, <code>Data</code>).</li>
<li>Inside the union, different members of different data types can be declared.</li>
<li>Unlike a structure, <b>all members of a union share the same memory location</b>.</li>
<li>At any given time, only <b>one member</b> can store a valid value.</li>
<li>The size of a union is equal to the size of its <b>largest member</b>.</li>
<li>The union definition ends with a semicolon (<code>;</code>).</li>
<li>Memory is allocated only when a union variable is created.</li>
</ul>

</div>

<h4>Example: Defining a Union</h4>

<div class="code-box">

    <div class="code-title">
        <span>Union Declaration</span>
    </div>

<pre><code><span class="keyword">union</span> Student
<span class="symbol">{</span>
    <span class="datatype">int</span> rollNo<span class="symbol">;</span>
    <span class="datatype">float</span> marks<span class="symbol">;</span>
    <span class="datatype">char</span> grade<span class="symbol">;</span>
<span class="symbol">}</span><span class="symbol">;</span>
</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>union Student</code> defines a union named <code>Student</code>.</li>
<li>The union contains three members:
    <ul>
        <li><code>rollNo</code> of type <code>int</code></li>
        <li><code>marks</code> of type <code>float</code></li>
        <li><code>grade</code> of type <code>char</code></li>
    </ul>
</li>
<li>All members share the <b>same memory location</b>.</li>
<li>Only <b>one member can hold a valid value at a time</b>.</li>
<li>If a new value is assigned to one member, the previous value stored in another member is overwritten.</li>
<li>The size of the union is equal to the size of its <b>largest data member</b>. In this example, the size is typically the size of a <code>float</code> or an <code>int</code> (usually <code>4 bytes</code>, depending on the compiler).</li>
</ul>

</div>

<hr>

<h3>Union Variables</h3>

<p>
After creating a union, we need a union variable to store data.
</p>

<h4>Method 1: Declare Union Variable After Union Definition</h4>

<div class="code-box">

    <div class="code-title">
        <span>Method 1</span>
    </div>

<pre><code><span class="keyword">union</span> Student
<span class="symbol">{</span>
    <span class="datatype">int</span> rollNo<span class="symbol">;</span>
    <span class="datatype">float</span> marks<span class="symbol">;</span>
<span class="symbol">}</span><span class="symbol">;</span>

<span class="keyword">union</span> Student s1<span class="symbol">;</span>
</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li>First, the <code>Student</code> union is defined.</li>
<li>After the union definition, a union variable <code>s1</code> is declared.</li>
<li>Memory is allocated for the union only when the variable <code>s1</code> is created.</li>
<li>This method is useful when you want to create variables later in the program.</li>
</ul>

</div>

<hr>

<h4>Method 2: Declare Union Variables Along with Union Definition</h4>

<div class="code-box">

    <div class="code-title">
        <span>Method 2</span>
    </div>

<pre><code><span class="keyword">union</span> Student
<span class="symbol">{</span>
    <span class="datatype">int</span> rollNo<span class="symbol">;</span>
    <span class="datatype">float</span> marks<span class="symbol">;</span>
<span class="symbol">}</span> s1<span class="symbol">,</span> s2<span class="symbol">;</span>
</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li>The <code>Student</code> union is defined and the variables <code>s1</code> and <code>s2</code> are declared in the same statement.</li>
<li>Memory is allocated for both <code>s1</code> and <code>s2</code> immediately.</li>
<li>Both variables are independent but have the same union type.</li>
<li>This method is shorter and is commonly used when the variables are needed immediately after the union definition.</li>
</ul>

</div>

<div class="box">
<b>Note:</b>

<ul>
<li>Both methods are correct.</li>
<li>The only difference is <b>when and where the union variables are declared</b>.</li>
<li>In both methods, the union behaves the same and all members share the same memory location.</li>
</ul>

</div>
<hr>

<h3>Accessing Union Members</h3>

<p>
The dot (.) operator is used to access union members.
</p>


<h4>Example: Accessing Union Members</h4>

<div class="code-box">

    <div class="code-title">
        <span>Union Member Access</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">union</span> Student
<span class="symbol">{</span>
    <span class="datatype">int</span> rollNo<span class="symbol">;</span>
<span class="symbol">}</span><span class="symbol">;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="keyword">union</span> Student s1<span class="symbol">;</span>

    <span class="comment">// Assign value to union member</span>
    s1<span class="symbol">.</span>rollNo <span class="symbol">=</span> 101<span class="symbol">;</span>

    <span class="comment">// Display union member</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Roll No = %d"</span><span class="symbol">,</span> s1<span class="symbol">.</span>rollNo<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Roll No = 101</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>union Student</code> contains one member named <code>rollNo</code>.</li>
<li><code>union Student s1;</code> creates a union variable named <code>s1</code>.</li>
<li><code>s1.rollNo = 101;</code> stores the value <b>101</b> in the <code>rollNo</code> member.</li>
<li>The <b>dot (.) operator</b> is used to access union members, just like a structure.</li>
<li><code>printf()</code> displays the value stored in the union member.</li>
<li>Since this union has only one member, there is no memory-sharing effect in this example.</li>
</ul>

</div>
<hr>

<h3>Union Initialization</h3>

<p>
A union can be initialized during declaration.
Only the first member is initialized directly.
</p>

<h4>Example: Union Initialization</h4>

<div class="code-box">

    <div class="code-title">
        <span>Initialize a Union Variable</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">union</span> Data
<span class="symbol">{</span>
    <span class="datatype">int</span> num<span class="symbol">;</span>
    <span class="datatype">float</span> price<span class="symbol">;</span>
<span class="symbol">}</span><span class="symbol">;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="comment">// Initialize the first member of the union</span>
    <span class="keyword">union</span> Data d <span class="symbol">=</span> <span class="symbol">{</span>100<span class="symbol">}</span><span class="symbol">;</span>

    <span class="comment">// Display the value</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Number = %d"</span><span class="symbol">,</span> d<span class="symbol">.</span>num<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Number = 100</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>union Data</code> contains two members: <code>num</code> and <code>price</code>.</li>
<li><code>union Data d = {100};</code> initializes the union with the value <b>100</b>.</li>
<li>By default, the value inside the braces is assigned to the <b>first member</b> of the union, which is <code>num</code>.</li>
<li><code>printf("Number = %d", d.num);</code> displays the value stored in the <code>num</code> member.</li>
<li>Since all union members share the same memory, writing a value to another member (such as <code>price</code>) will overwrite the value of <code>num</code>.</li>
</ul>

</div>
<hr>

<h3>Understanding Shared Memory</h3>

<p>
All members of a union share the same memory location.
When one member's value changes, the previous member's value is overwritten.
</p>

<h4>Example: Memory Sharing in Union</h4>

<div class="code-box">

    <div class="code-title">
        <span>Union Memory Sharing</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">union</span> Data
<span class="symbol">{</span>
    <span class="datatype">int</span> num<span class="symbol">;</span>
    <span class="datatype">float</span> price<span class="symbol">;</span>
<span class="symbol">}</span><span class="symbol">;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="keyword">union</span> Data d<span class="symbol">;</span>

    <span class="comment">// Store value in num</span>
    d<span class="symbol">.</span>num <span class="symbol">=</span> 100<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Number = %d\n"</span><span class="symbol">,</span> d<span class="symbol">.</span>num<span class="symbol">);</span>

    <span class="comment">// Store value in price</span>
    d<span class="symbol">.</span>price <span class="symbol">=</span> 99.5<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Price = %.2f\n"</span><span class="symbol">,</span> d<span class="symbol">.</span>price<span class="symbol">);</span>

    <span class="comment">// Previous value of num is overwritten</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Number After Storing Price = %d"</span><span class="symbol">,</span> d<span class="symbol">.</span>num<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Sample Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Number = 100
Price = 99.50
Number After Storing Price = 1120337920</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>union Data</code> contains two members: <code>num</code> and <code>price</code>.</li>
<li>Initially, <code>d.num = 100;</code> stores the integer value <b>100</b>.</li>
<li>The program prints:
<code>Number = 100</code>.</li>
<li>Next, <code>d.price = 99.5;</code> stores a floating-point value in the <code>price</code> member.</li>
<li>Since all union members share the <b>same memory location</b>, storing <code>price</code> overwrites the memory previously used by <code>num</code>.</li>
<li>When <code>d.num</code> is printed again, it no longer contains <b>100</b>. Instead, it displays the integer interpretation of the binary representation of the floating-point value <code>99.5</code>.</li>
<li>The exact value of <code>Number After Storing Price</code> may be different on different compilers and systems because it depends on how the float is stored in memory.</li>
<li>This example clearly demonstrates that <b>only one union member can hold a valid value at a time</b>.</li>
</ul>

</div>

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


<h4>Example: Size of Union</h4>

<div class="code-box">

    <div class="code-title">
        <span>Find Size of Union</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">union</span> Data
<span class="symbol">{</span>
    <span class="datatype">int</span> num<span class="symbol">;</span>
    <span class="datatype">float</span> marks<span class="symbol">;</span>
    <span class="datatype">char</span> grade<span class="symbol">;</span>
<span class="symbol">}</span><span class="symbol">;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Size = %lu"</span><span class="symbol">,</span> <span class="function">sizeof</span><span class="symbol">(</span><span class="keyword">union</span> Data<span class="symbol">)</span><span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Sample Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Size = 4</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>union Data</code> contains three members:
    <ul>
        <li><code>int num</code></li>
        <li><code>float marks</code></li>
        <li><code>char grade</code></li>
    </ul>
</li>

<li><code>sizeof(union Data)</code> returns the total memory occupied by the union.</li>

<li>In a union, <b>all members share the same memory location</b>.</li>

<li>The size of a union is equal to the size of its <b>largest data member</b>, not the sum of all members.</li>

<li>On most systems:
    <ul>
        <li><code>int</code> = 4 bytes</li>
        <li><code>float</code> = 4 bytes</li>
        <li><code>char</code> = 1 byte</li>
    </ul>
</li>

<li>Since the largest member (<code>int</code> or <code>float</code>) is <b>4 bytes</b>, the size of the union is <b>4 bytes</b>.</li>

<li>Some compilers may add padding for alignment, so the size can vary on different systems.</li>
</ul>

</div>

<h4>Explanation</h4>

<p>
If int = 4 bytes, float = 4 bytes, and char = 1 byte,
then the union size will be 4 bytes because the largest member is 4 bytes.
</p>

<hr>

<h3>Union with User Input</h3>

<div class="code-box">

    <div class="code-title">
        <span>Read and Display Union Data</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">union</span> Data
<span class="symbol">{</span>
    <span class="datatype">int</span> num<span class="symbol">;</span>
<span class="symbol">}</span><span class="symbol">;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="keyword">union</span> Data d<span class="symbol">;</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter Number: "</span><span class="symbol">);</span>
    <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>d<span class="symbol">.</span>num<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"You Entered = %d"</span><span class="symbol">,</span> d<span class="symbol">.</span>num<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Sample Input</h4>

<div class="code-box">

    <div class="code-title">
        <span>Input</span>
    </div>

<pre><code>Enter Number: 100</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>You Entered = 100</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>union Data</code> contains one member named <code>num</code>.</li>
<li><code>union Data d;</code> creates a union variable named <code>d</code>.</li>
<li><code>scanf("%d", &amp;d.num);</code> reads an integer from the user and stores it in the <code>num</code> member.</li>
<li><code>printf("You Entered = %d", d.num);</code> displays the value entered by the user.</li>
<li>The <b>dot (.) operator</b> is used to access the members of a union.</li>
<li>Since this union has only one member, there is no memory-sharing effect in this example.</li>
</ul>

</div>
<hr>

<h3>Array of Unions</h3>

<p>
An array can store multiple union variables.
</p>

<h4>Example: Array of Unions</h4>

<div class="code-box">

    <div class="code-title">
        <span>Store and Display Multiple Union Records</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">union</span> Student
<span class="symbol">{</span>
    <span class="datatype">int</span> rollNo<span class="symbol">;</span>
<span class="symbol">}</span><span class="symbol">;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="comment">// Declare an array of unions</span>
    <span class="keyword">union</span> Student s<span class="symbol">[</span>3<span class="symbol">];</span>

    <span class="comment">// Input roll numbers</span>
    <span class="keyword">for</span><span class="symbol">(</span><span class="datatype">int</span> i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> 3<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter Roll No: "</span><span class="symbol">);</span>
        <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>s<span class="symbol">[</span>i<span class="symbol">]</span><span class="symbol">.</span>rollNo<span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"\nStudent Details\n"</span><span class="symbol">);</span>

    <span class="comment">// Display roll numbers</span>
    <span class="keyword">for</span><span class="symbol">(</span><span class="datatype">int</span> i <span class="symbol">=</span> 0<span class="symbol">;</span> i <span class="symbol">&lt;</span> 3<span class="symbol">;</span> i<span class="symbol">++</span><span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"Roll No = %d\n"</span><span class="symbol">,</span> s<span class="symbol">[</span>i<span class="symbol">]</span><span class="symbol">.</span>rollNo<span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Sample Input</h4>

<div class="code-box">

    <div class="code-title">
        <span>Input</span>
    </div>

<pre><code>Enter Roll No: 101
Enter Roll No: 102
Enter Roll No: 103</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Student Details
Roll No = 101
Roll No = 102
Roll No = 103</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>union Student s[3];</code> creates an array of <b>3 union variables</b>.</li>
<li>Each element of the array is an independent union.</li>
<li>The first <code>for</code> loop is used to input the roll number for each union variable.</li>
<li>The second <code>for</code> loop displays the stored roll numbers.</li>
<li>The union member is accessed using the <b>dot (.) operator</b>, for example <code>s[i].rollNo</code>.</li>
<li>Although this example uses an array of unions, each union still follows the same rule that <b>all members of a union share the same memory location</b>.</li>
<li>Since this union contains only one member, there is no memory-sharing effect in this program.</li>
</ul>

</div>

<hr>

<h3>Union Inside Structure</h3>

<p>
A union can be used as a member of a structure.
</p>

<h4>Example: Union Inside a Structure</h4>

<div class="code-box">

    <div class="code-title">
        <span>Nested Union in Structure</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">union</span> Data
<span class="symbol">{</span>
    <span class="datatype">int</span> num<span class="symbol">;</span>
    <span class="datatype">float</span> marks<span class="symbol">;</span>
<span class="symbol">}</span><span class="symbol">;</span>

<span class="keyword">struct</span> Student
<span class="symbol">{</span>
    <span class="datatype">int</span> rollNo<span class="symbol">;</span>
    <span class="keyword">union</span> Data info<span class="symbol">;</span>
<span class="symbol">}</span><span class="symbol">;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="keyword">struct</span> Student s1<span class="symbol">;</span>

    <span class="comment">// Assign values</span>
    s1<span class="symbol">.</span>rollNo <span class="symbol">=</span> 101<span class="symbol">;</span>
    s1<span class="symbol">.</span>info<span class="symbol">.</span>marks <span class="symbol">=</span> 88.5<span class="symbol">;</span>

    <span class="comment">// Display values</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Roll No = %d\n"</span><span class="symbol">,</span> s1<span class="symbol">.</span>rollNo<span class="symbol">);</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Marks = %.2f"</span><span class="symbol">,</span> s1<span class="symbol">.</span>info<span class="symbol">.</span>marks<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Roll No = 101
Marks = 88.50</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>union Data</code> contains two members:
    <ul>
        <li><code>num</code> (integer)</li>
        <li><code>marks</code> (floating-point)</li>
    </ul>
</li>

<li><code>struct Student</code> contains:
    <ul>
        <li><code>rollNo</code> (student's roll number)</li>
        <li><code>info</code>, which is a union of type <code>Data</code></li>
    </ul>
</li>

<li><code>s1.info.marks = 88.5;</code> stores the marks inside the union member of the structure.</li>

<li>The members of the nested union are accessed using the <b>dot (.) operator</b>:
    <ul>
        <li><code>s1.info.num</code></li>
        <li><code>s1.info.marks</code></li>
    </ul>
</li>

<li>Since <code>info</code> is a union, its members share the same memory location. If <code>info.num</code> is assigned a value later, it will overwrite the value stored in <code>info.marks</code>.</li>

<li>This example demonstrates how a <b>union can be nested inside a structure</b> to save memory when only one of several related values is needed at a time.</li>
</ul>

</div>

<hr>

<h3>Union and Functions</h3>

<p>
Union variables can be passed to functions.
</p>

<h4>Example: Passing Union to Function</h4>

<div class="code-box">

    <div class="code-title">
        <span>Pass Union as Function Argument</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">union</span> Data
<span class="symbol">{</span>
    <span class="datatype">int</span> num<span class="symbol">;</span>
<span class="symbol">}</span><span class="symbol">;</span>

<span class="datatype">void</span> <span class="function">display</span><span class="symbol">(</span><span class="keyword">union</span> Data d<span class="symbol">)</span>
<span class="symbol">{</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Number = %d"</span><span class="symbol">,</span> d<span class="symbol">.</span>num<span class="symbol">);</span>
<span class="symbol">}</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="keyword">union</span> Data d<span class="symbol">;</span>

    d<span class="symbol">.</span>num <span class="symbol">=</span> 500<span class="symbol">;</span>

    <span class="comment">// Pass union to function</span>
    <span class="function">display</span><span class="symbol">(</span>d<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Number = 500</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>union Data</code> contains one member named <code>num</code>.</li>

<li><code>display(union Data d)</code> is a function that accepts a <b>union variable as an argument</b>.</li>

<li>In <code>main()</code>, a union variable <code>d</code> is created and <code>d.num</code> is assigned the value <b>500</b>.</li>

<li><code>display(d);</code> passes the complete union variable to the <code>display()</code> function.</li>

<li>Inside the function, the value is accessed using <code>d.num</code> and displayed using <code>printf()</code>.</li>

<li>When a union is passed by value, a copy of the union is passed to the function. Any changes made inside the function do not affect the original union variable in <code>main()</code>.</li>
</ul>

</div>

<hr>

<h3>Real Life Example of Union</h3>

<p>
Suppose a student can have either marks or grade stored at a time.
Using a union helps save memory because only one value is needed at a time.
</p>

<h4>Example: Using Union to Store Student Result</h4>

<div class="code-box">

    <div class="code-title">
        <span>Union Example</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="keyword">union</span> Result
<span class="symbol">{</span>
    <span class="datatype">float</span> marks<span class="symbol">;</span>
    <span class="datatype">char</span> grade<span class="symbol">;</span>
<span class="symbol">}</span><span class="symbol">;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="keyword">union</span> Result r<span class="symbol">;</span>

    <span class="comment">// Store marks in the union</span>
    r<span class="symbol">.</span>marks <span class="symbol">=</span> 89.5<span class="symbol">;</span>

    <span class="comment">// Display marks</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Marks = %.2f"</span><span class="symbol">,</span> r<span class="symbol">.</span>marks<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Marks = 89.50</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>union Result</code> contains two members:
    <ul>
        <li><code>marks</code> of type <code>float</code></li>
        <li><code>grade</code> of type <code>char</code></li>
    </ul>
</li>

<li>A union variable <code>r</code> is created using <code>union Result r;</code>.</li>

<li><code>r.marks = 89.5;</code> stores the floating-point value <b>89.5</b> in the union.</li>

<li><code>printf("Marks = %.2f", r.marks);</code> displays the stored marks with two digits after the decimal point.</li>

<li>Since only the <code>marks</code> member is used, the output is correct.</li>

<li>If a value is later assigned to <code>r.grade</code>, it will overwrite the value stored in <code>r.marks</code> because both members share the same memory location.</li>

<li>This example shows that a union can store different types of data, but <b>only one member should be used at a time</b>.</li>
</ul>

</div>
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

<div class="code-box">

    <div class="code-title">
        <span>Syntax of File Pointer</span>
    </div>

<pre><code><span class="datatype">FILE</span> <span class="symbol">*</span>fp<span class="symbol">;</span>
</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>FILE</code> is a predefined data type (structure) provided by the <code>&lt;stdio.h&gt;</code> header file.</li>

<li><code>fp</code> is a file pointer variable.</li>

<li>A file pointer is used to <b>open, read, write, append, and close files</b> in C.</li>

<li>The pointer stores the address of the file that is opened using the <code>fopen()</code> function.</li>

<li>Before performing any file operation, a file pointer must be declared.</li>

<li>Multiple file pointers can be declared if you need to work with multiple files.</li>

<h4>Example: Declaring Multiple File Pointers</h4>

<div class="code-box">

    <div class="code-title">
        <span>File Pointer Declaration</span>
    </div>

<pre><code><span class="datatype">FILE</span> <span class="symbol">*</span>fp1<span class="symbol">;</span>
<span class="datatype">FILE</span> <span class="symbol">*</span>fp2<span class="symbol">;</span>
</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>

<li><code>FILE</code> is a predefined data type in C used for file handling.</li>

<li><code>fp1</code> and <code>fp2</code> are file pointers used to store the address of opened files.</li>

<li>Multiple file pointers can be declared when working with more than one file at the same time.</li>

<li>For example, one pointer can be used for reading a file and another pointer can be used for writing data into another file.</li>

</ul>

</div>

<h4>Example Usage</h4>

<div class="code-box">

    <div class="code-title">
        <span>Opening Two Files</span>
    </div>

<pre><code><span class="datatype">FILE</span> <span class="symbol">*</span>fp1<span class="symbol">;</span>
<span class="datatype">FILE</span> <span class="symbol">*</span>fp2<span class="symbol">;</span>

fp1 <span class="symbol">=</span> <span class="function">fopen</span><span class="symbol">(</span><span class="string">"source.txt"</span><span class="symbol">,</span> <span class="string">"r"</span><span class="symbol">);</span>

fp2 <span class="symbol">=</span> <span class="function">fopen</span><span class="symbol">(</span><span class="string">"destination.txt"</span><span class="symbol">,</span> <span class="string">"w"</span><span class="symbol">);</span>
</code></pre>

</div>

<div class="box">

<b>Example:</b>

<ul>
<li><code>fp1</code> → points to <code>source.txt</code> for reading data.</li>
<li><code>fp2</code> → points to <code>destination.txt</code> for writing data.</li>
</ul>

</div>

<li>After opening a file, the file pointer points to the beginning of the file.</li>

<li>After completing file operations, the file should always be closed using the <code>fclose()</code> function.</li>

</ul>

</div>

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

<h4>Syntax of <code>fopen()</code></h4>

<div class="code-box">

    <div class="code-title">
        <span>Open a File</span>
    </div>

<pre><code><span class="datatype">FILE</span> <span class="symbol">*</span>fp<span class="symbol">;</span>

fp <span class="symbol">=</span> <span class="function">fopen</span><span class="symbol">(</span><span class="string">"filename"</span><span class="symbol">,</span> <span class="string">"mode"</span><span class="symbol">);</span>
</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>FILE *fp;</code> declares a file pointer.</li>

<li><code>fopen()</code> is a library function used to <b>open a file</b>.</li>

<li>The function returns a pointer to the opened file. This pointer is stored in <code>fp</code>.</li>

<li>If the file cannot be opened, <code>fopen()</code> returns <code>NULL</code>.</li>

<li>The syntax of <code>fopen()</code> is:</li>

<h4>Syntax of <code>fopen()</code></h4>

<div class="code-box">

    <div class="code-title">
        <span>Opening a File</span>
    </div>

<pre><code><span class="function">fopen</span><span class="symbol">(</span><span class="string">"filename"</span><span class="symbol">,</span> <span class="string">"mode"</span><span class="symbol">);</span>
</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>

<li><code>fopen()</code> is a library function used to <b>open a file</b> in C programming.</li>

<li>It returns a file pointer that is used for further file operations.</li>

<li>The syntax contains two parameters:</li>

</ul>

<table class="notes-table">

<tr>
<th>Parameter</th>
<th>Description</th>
</tr>

<tr>
<td><code>"filename"</code></td>
<td>Name of the file that we want to open.</td>
</tr>

<tr>
<td><code>"mode"</code></td>
<td>Specifies the purpose for opening the file (read, write, append, etc.).</td>
</tr>

</table>

</div>

<h4>File Opening Modes</h4>

<div class="box">

<table class="notes-table">

<tr>
<th>Mode</th>
<th>Description</th>
</tr>

<tr>
<td><code>r</code></td>
<td>Open an existing file for reading.</td>
</tr>

<tr>
<td><code>w</code></td>
<td>Open a file for writing. Creates a new file if it does not exist. Deletes old content if the file exists.</td>
</tr>

<tr>
<td><code>a</code></td>
<td>Open a file for appending. New data is added at the end of the file.</td>
</tr>

<tr>
<td><code>r+</code></td>
<td>Open an existing file for both reading and writing.</td>
</tr>

<tr>
<td><code>w+</code></td>
<td>Create a file for both reading and writing.</td>
</tr>

<tr>
<td><code>a+</code></td>
<td>Open a file for reading and appending.</td>
</tr>

</table>

</div>

<h4>Example</h4>

<div class="code-box">

    <div class="code-title">
        <span>Opening a File</span>
    </div>

<pre><code><span class="datatype">FILE</span> <span class="symbol">*</span>fp<span class="symbol">;</span>

fp <span class="symbol">=</span> <span class="function">fopen</span><span class="symbol">(</span><span class="string">"student.txt"</span><span class="symbol">,</span> <span class="string">"r"</span><span class="symbol">);</span>
</code></pre>

</div>

<div class="box">

<b>Explanation:</b>

<ul>

<li><code>student.txt</code> is the file name.</li>

<li><code>"r"</code> opens the file in read mode.</li>

<li>The returned file address is stored in the file pointer <code>fp</code>.</li>

</ul>

</div>

<li><code>"filename"</code> specifies the name (or path) of the file to open.</li>

<li><code>"mode"</code> specifies how the file should be opened, such as for reading, writing, or appending.</li>

<li>After finishing all file operations, the file should be closed using <code>fclose(fp);</code>.</li>

</ul>

</div>

<h4>Common File Modes</h4>

<table class="notes-table">

<tr>
<th>Mode</th>
<th>Description</th>
</tr>

<tr>
<td><code>r</code></td>
<td>Opens an existing file for reading.</td>
</tr>

<tr>
<td><code>w</code></td>
<td>Creates a new file or overwrites an existing file for writing.</td>
</tr>

<tr>
<td><code>a</code></td>
<td>Opens a file for appending. New data is added at the end of the file.</td>
</tr>

<tr>
<td><code>r+</code></td>
<td>Opens an existing file for both reading and writing.</td>
</tr>

<tr>
<td><code>w+</code></td>
<td>Creates a new file (or overwrites an existing one) for both reading and writing.</td>
</tr>

<tr>
<td><code>a+</code></td>
<td>Opens a file for reading and appending.</td>
</tr>

</table>

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

<h4>Syntax of <code>fclose()</code></h4>

<div class="code-box">

    <div class="code-title">
        <span>Close a File</span>
    </div>

<pre><code><span class="function">fclose</span><span class="symbol">(</span>fp<span class="symbol">);</span>
</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>
<li><code>fclose()</code> is a library function used to <b>close an opened file</b>.</li>

<li><code>fp</code> is the file pointer that refers to the opened file.</li>

<li>After all file operations (reading, writing, or appending) are completed, the file should be closed using <code>fclose()</code>.</li>

<li>Closing a file saves any pending data to the file and releases the memory and other system resources associated with the file.</li>

<li>It is considered a good programming practice to always close a file after use.</li>

<li>If the file is not closed properly, some data may not be written to the file completely.</li>

<li>The <code>fclose()</code> function returns:
    <ul>
        <li><code>0</code> if the file is closed successfully.</li>
        <li><code>EOF</code> if an error occurs while closing the file.</li>
    </ul>
</li>

</ul>

</div>

<h4>Example</h4>

<div class="code-box">

    <div class="code-title">
        <span>Closing a File</span>
    </div>

<pre><code><span class="datatype">FILE</span> <span class="symbol">*</span>fp<span class="symbol">;</span>

fp <span class="symbol">=</span> <span class="function">fopen</span><span class="symbol">(</span><span class="string">"data.txt"</span><span class="symbol">,</span> <span class="string">"w"</span><span class="symbol">);</span>

<span class="comment">// File operations</span>

<span class="function">fclose</span><span class="symbol">(</span>fp<span class="symbol">);</span>
</code></pre>

</div>

<h4>Example: Opening and Closing a File</h4>

<div class="code-box">

    <div class="code-title">
        <span>Open and Close File</span>
    </div>

<pre><code><span class="datatype">FILE</span> <span class="symbol">*</span>fp<span class="symbol">;</span>

fp <span class="symbol">=</span> <span class="function">fopen</span><span class="symbol">(</span><span class="string">"data.txt"</span><span class="symbol">,</span> <span class="string">"r"</span><span class="symbol">);</span>

<span class="function">fclose</span><span class="symbol">(</span>fp<span class="symbol">);</span>
</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>

<li><code>FILE *fp;</code> declares a file pointer.</li>

<li><code>fopen("data.txt", "r");</code> opens the file <code>data.txt</code> in <b>read (<code>r</code>) mode</b>.</li>

<li>If the file exists, <code>fp</code> stores the address of the opened file.</li>

<li>If the file does not exist or cannot be opened, <code>fopen()</code> returns <code>NULL</code>.</li>

<li><code>fclose(fp);</code> closes the opened file and releases the resources associated with it.</li>

<li>Always close a file after completing file operations to avoid memory leaks and ensure that all resources are released properly.</li>

</ul>

</div>

<div class="box">
<b>Note:</b>

<ul>

<li>Before reading from a file, it is a good practice to check whether the file was opened successfully.</li>

<h4>Example: Checking File Opening Error</h4>

<div class="code-box">

    <div class="code-title">
        <span>Using <code>NULL</code> Check with File Pointer</span>
    </div>

<pre><code><span class="keyword">if</span><span class="symbol">(</span>fp <span class="symbol">==</span> NULL<span class="symbol">)</span>
<span class="symbol">{</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"File could not be opened."</span><span class="symbol">);</span>
<span class="symbol">}</span>
</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>

<li>When a file is opened using <code>fopen()</code>, it returns the address of the file.</li>

<li>If the file cannot be opened, <code>fopen()</code> returns <code>NULL</code>.</li>

<li><code>fp == NULL</code> checks whether the file pointer contains a valid address or not.</li>

<li>If the condition is true, it means the file opening failed.</li>

<li>This check prevents errors while performing file operations.</li>

</ul>

</div>

<h4>Complete Example</h4>

<div class="code-box">

    <div class="code-title">
        <span>File Opening with Error Handling</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>

    <span class="datatype">FILE</span> <span class="symbol">*</span>fp<span class="symbol">;</span>

    fp <span class="symbol">=</span> <span class="function">fopen</span><span class="symbol">(</span><span class="string">"data.txt"</span><span class="symbol">,</span> <span class="string">"r"</span><span class="symbol">);</span>

    <span class="keyword">if</span><span class="symbol">(</span>fp <span class="symbol">==</span> NULL<span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"File could not be opened."</span><span class="symbol">);</span>
    <span class="symbol">}</span>
    <span class="keyword">else</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"File opened successfully."</span><span class="symbol">);</span>

        <span class="function">fclose</span><span class="symbol">(</span>fp<span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>

<span class="symbol">}</span>
</code></pre>

</div>

<h4>Possible Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>File opened successfully.</code></pre>

</div>

</ul>

</div>

<hr>

<h3>Writing Data into a File</h3>

<p>
The fprintf() function is used to write formatted data into a file.
</p>

<h4>Syntax of <code>fprintf()</code></h4>

<div class="code-box">

    <div class="code-title">
        <span>Write Data to a File</span>
    </div>

<pre><code><span class="function">fprintf</span><span class="symbol">(</span>fp<span class="symbol">,</span> <span class="string">"format"</span><span class="symbol">,</span> variables<span class="symbol">);</span>
</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>

<li><code>fprintf()</code> is a library function used to <b>write formatted data to a file</b>.</li>

<li><code>fp</code> is the file pointer that refers to the opened file.</li>

<li><code>"format"</code> specifies the format in which the data will be written, such as <code>%d</code>, <code>%f</code>, <code>%c</code>, and <code>%s</code>.</li>

<li><code>variables</code> are the values that will be written to the file.</li>

<li><code>fprintf()</code> works similarly to <code>printf()</code>, but instead of displaying data on the screen, it writes the data into a file.</li>

<li>The file must be opened in a mode that allows writing, such as <code>"w"</code>, <code>"a"</code>, or <code>"w+"</code>.</li>

<li>After writing data, always close the file using <code>fclose(fp);</code>.</li>

</ul>

</div>

<h4>Example</h4>

<div class="code-box">

    <div class="code-title">
        <span>Writing Data Using fprintf()</span>
    </div>

<pre><code><span class="datatype">FILE</span> <span class="symbol">*</span>fp<span class="symbol">;</span>

fp <span class="symbol">=</span> <span class="function">fopen</span><span class="symbol">(</span><span class="string">"data.txt"</span><span class="symbol">,</span> <span class="string">"w"</span><span class="symbol">);</span>

<span class="function">fprintf</span><span class="symbol">(</span>fp<span class="symbol">,</span> <span class="string">"Age = %d"</span><span class="symbol">,</span> 25<span class="symbol">);</span>

<span class="function">fclose</span><span class="symbol">(</span>fp<span class="symbol">);</span>
</code></pre>

</div>

<div class="box">
<b>Output in <code>data.txt</code>:</b>

<pre>
Age = 25
</pre>

</div>

<h4>Example: Write Student Information</h4>

<div class="code-box">

    <div class="code-title">
        <span>Writing Data to a File Using <code>fprintf()</code></span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">FILE</span> <span class="symbol">*</span>fp<span class="symbol">;</span>

    <span class="comment">// Open file in write mode</span>
    fp <span class="symbol">=</span> <span class="function">fopen</span><span class="symbol">(</span><span class="string">"student.txt"</span><span class="symbol">,</span> <span class="string">"w"</span><span class="symbol">);</span>

    <span class="comment">// Write data into the file</span>
    <span class="function">fprintf</span><span class="symbol">(</span>fp<span class="symbol">,</span> <span class="string">"Roll No = 101\n"</span><span class="symbol">);</span>
    <span class="function">fprintf</span><span class="symbol">(</span>fp<span class="symbol">,</span> <span class="string">"Name = Pradeep\n"</span><span class="symbol">);</span>
    <span class="function">fprintf</span><span class="symbol">(</span>fp<span class="symbol">,</span> <span class="string">"Marks = 89"</span><span class="symbol">);</span>

    <span class="comment">// Close the file</span>
    <span class="function">fclose</span><span class="symbol">(</span>fp<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Data Written Successfully"</span><span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Output (Console)</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Data Written Successfully</code></pre>

</div>

<h4>Content of <code>student.txt</code></h4>

<div class="code-box">

    <div class="code-title">
        <span>student.txt</span>
    </div>

<pre><code>Roll No = 101
Name = Pradeep
Marks = 89</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>

<li><code>FILE *fp;</code> declares a file pointer.</li>

<li><code>fopen("student.txt", "w");</code> opens the file in <b>write mode</b>. If the file does not exist, it is created. If it already exists, its previous contents are erased.</li>

<li><code>fprintf()</code> writes the student information into the file.</li>

<li>The escape sequence <code>\n</code> moves the cursor to the next line in the file.</li>

<li><code>fclose(fp);</code> closes the file and ensures that all data is saved properly.</li>

<li><code>printf("Data Written Successfully");</code> displays a confirmation message on the screen after writing the data.</li>

</ul>

</div>
<hr>

<h3>Writing User Input into a File</h3>

<div class="code-box">

    <div class="code-title">
        <span>Writing User Input Using <code>fprintf()</code></span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">FILE</span> <span class="symbol">*</span>fp<span class="symbol">;</span>

    <span class="datatype">char</span> name<span class="symbol">[</span>50<span class="symbol">]</span><span class="symbol">;</span>

    <span class="comment">// Open file in write mode</span>
    fp <span class="symbol">=</span> <span class="function">fopen</span><span class="symbol">(</span><span class="string">"student.txt"</span><span class="symbol">,</span> <span class="string">"w"</span><span class="symbol">);</span>

    <span class="comment">// Take input from user</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Enter Name: "</span><span class="symbol">);</span>
    <span class="function">scanf</span><span class="symbol">(</span><span class="string">"%s"</span><span class="symbol">,</span> name<span class="symbol">);</span>

    <span class="comment">// Write input to the file</span>
    <span class="function">fprintf</span><span class="symbol">(</span>fp<span class="symbol">,</span> <span class="string">"%s"</span><span class="symbol">,</span> name<span class="symbol">);</span>

    <span class="comment">// Close the file</span>
    <span class="function">fclose</span><span class="symbol">(</span>fp<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Data Saved Successfully"</span><span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Sample Input</h4>

<div class="code-box">

    <div class="code-title">
        <span>Input</span>
    </div>

<pre><code>Enter Name: Pradeep</code></pre>

</div>

<h4>Output (Console)</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Data Saved Successfully</code></pre>

</div>

<h4>Content of <code>student.txt</code></h4>

<div class="code-box">

    <div class="code-title">
        <span>student.txt</span>
    </div>

<pre><code>Pradeep</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>

<li><code>FILE *fp;</code> declares a file pointer.</li>

<li><code>char name[50];</code> declares a character array to store the user's name.</li>

<li><code>fopen("student.txt", "w");</code> opens the file in <b>write mode</b>.</li>

<li><code>scanf("%s", name);</code> reads the name entered by the user.</li>

<li><code>fprintf(fp, "%s", name);</code> writes the entered name into the file.</li>

<li><code>fclose(fp);</code> closes the file and saves the data permanently.</li>

<li><code>printf("Data Saved Successfully");</code> displays a success message on the screen.</li>

<li><b>Note:</b> <code>%s</code> reads only a single word. To store a full name containing spaces (for example, <code>Pradeep Kumar</code>), use <code>fgets()</code> instead of <code>scanf("%s")</code>.</li>

</ul>

</div>
<hr>

<h3>Reading Data from a File</h3>

<p>
The fscanf() function is used to read formatted data from a file.
</p>

<h4>Syntax of <code>fscanf()</code></h4>

<div class="code-box">

    <div class="code-title">
        <span>Read Data from a File</span>
    </div>

<pre><code><span class="function">fscanf</span><span class="symbol">(</span>fp<span class="symbol">,</span> <span class="string">"format"</span><span class="symbol">,</span> variables<span class="symbol">);</span>
</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>

<li><code>fscanf()</code> is a library function used to <b>read formatted data from a file</b>.</li>

<li><code>fp</code> is the file pointer that refers to the opened file.</li>

<li><code>"format"</code> specifies the type of data to be read, such as <code>%d</code>, <code>%f</code>, <code>%c</code>, and <code>%s</code>.</li>

<li><code>variables</code> are the variables where the read data will be stored.</li>

<li><code>fscanf()</code> works similarly to <code>scanf()</code>, but instead of reading data from the keyboard, it reads data from a file.</li>

<li>The file must be opened in a mode that allows reading, such as <code>"r"</code>, <code>"r+"</code>, or <code>"a+"</code>.</li>

<li>After reading the required data, always close the file using <code>fclose(fp);</code>.</li>

</ul>

</div>

<h4>Example</h4>

<div class="code-box">

    <div class="code-title">
        <span>Reading Data Using <code>fscanf()</code></span>
    </div>

<pre><code><span class="datatype">FILE</span> <span class="symbol">*</span>fp<span class="symbol">;</span>

<span class="datatype">int</span> age<span class="symbol">;</span>

fp <span class="symbol">=</span> <span class="function">fopen</span><span class="symbol">(</span><span class="string">"data.txt"</span><span class="symbol">,</span> <span class="string">"r"</span><span class="symbol">);</span>

<span class="function">fscanf</span><span class="symbol">(</span>fp<span class="symbol">,</span> <span class="string">"%d"</span><span class="symbol">,</span> <span class="symbol">&amp;</span>age<span class="symbol">);</span>

<span class="function">printf</span><span class="symbol">(</span><span class="string">"Age = %d"</span><span class="symbol">,</span> age<span class="symbol">);</span>

<span class="function">fclose</span><span class="symbol">(</span>fp<span class="symbol">);</span>
</code></pre>

</div>

<div class="box">
<b>Suppose <code>data.txt</code> contains:</b>

<pre>
25
</pre>

<b>Output:</b>

<pre>
Age = 25
</pre>

</div>

<h4>Example</h4>

<h4>Example: Read Data from a File Using <code>fscanf()</code></h4>

<div class="code-box">

    <div class="code-title">
        <span>Reading Data from File</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">FILE</span> <span class="symbol">*</span>fp<span class="symbol">;</span>

    <span class="datatype">char</span> name<span class="symbol">[</span>50<span class="symbol">]</span><span class="symbol">;</span>

    <span class="comment">// Open file in read mode</span>
    fp <span class="symbol">=</span> <span class="function">fopen</span><span class="symbol">(</span><span class="string">"student.txt"</span><span class="symbol">,</span> <span class="string">"r"</span><span class="symbol">);</span>

    <span class="comment">// Read data from the file</span>
    <span class="function">fscanf</span><span class="symbol">(</span>fp<span class="symbol">,</span> <span class="string">"%s"</span><span class="symbol">,</span> name<span class="symbol">);</span>

    <span class="comment">// Display the data</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"Name = %s"</span><span class="symbol">,</span> name<span class="symbol">);</span>

    <span class="comment">// Close the file</span>
    <span class="function">fclose</span><span class="symbol">(</span>fp<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Suppose <code>student.txt</code> Contains</h4>

<div class="code-box">

    <div class="code-title">
        <span>student.txt</span>
    </div>

<pre><code>Pradeep</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Name = Pradeep</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>

<li><code>FILE *fp;</code> declares a file pointer.</li>

<li><code>char name[50];</code> creates a character array to store the name read from the file.</li>

<li><code>fopen("student.txt", "r");</code> opens the file in <b>read mode</b>.</li>

<li><code>fscanf(fp, "%s", name);</code> reads a string from the file and stores it in the <code>name</code> array.</li>

<li><code>printf("Name = %s", name);</code> displays the name on the screen.</li>

<li><code>fclose(fp);</code> closes the file after reading is complete.</li>

<li><b>Note:</b> <code>fscanf("%s", name)</code> reads only one word. If the file contains multiple words separated by spaces (for example, <code>Pradeep Kumar</code>), only <code>Pradeep</code> will be read.</li>

</ul>

</div>

<hr>

<h3>Reading Character by Character</h3>

<p>
The fgetc() function reads one character at a time.
</p>

<h4>Example: Read File Character by Character Using <code>fgetc()</code></h4>

<div class="code-box">

    <div class="code-title">
        <span>Reading Characters from a File</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">FILE</span> <span class="symbol">*</span>fp<span class="symbol">;</span>

    <span class="datatype">char</span> ch<span class="symbol">;</span>

    <span class="comment">// Open file in read mode</span>
    fp <span class="symbol">=</span> <span class="function">fopen</span><span class="symbol">(</span><span class="string">"student.txt"</span><span class="symbol">,</span> <span class="string">"r"</span><span class="symbol">);</span>

    <span class="comment">// Read file character by character</span>
    <span class="keyword">while</span><span class="symbol">((</span>ch <span class="symbol">=</span> <span class="function">fgetc</span><span class="symbol">(</span>fp<span class="symbol">))</span> <span class="symbol">!=</span> EOF<span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">printf</span><span class="symbol">(</span><span class="string">"%c"</span><span class="symbol">,</span> ch<span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="comment">// Close the file</span>
    <span class="function">fclose</span><span class="symbol">(</span>fp<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Suppose <code>student.txt</code> Contains</h4>

<div class="code-box">

    <div class="code-title">
        <span>student.txt</span>
    </div>

<pre><code>Pradeep
Kumar
Marks = 89</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Pradeep
Kumar
Marks = 89</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>

<li><code>FILE *fp;</code> declares a file pointer.</li>

<li><code>char ch;</code> declares a character variable to store one character at a time.</li>

<li><code>fopen("student.txt", "r");</code> opens the file in <b>read mode</b>.</li>

<li><code>fgetc(fp)</code> reads <b>one character</b> from the file each time it is called.</li>

<li>The <code>while</code> loop continues reading characters until <code>fgetc()</code> returns <code>EOF</code> (End Of File).</li>

<li><code>printf("%c", ch);</code> displays each character on the screen exactly as it appears in the file.</li>

<li><code>EOF</code> is a predefined constant that indicates the end of the file has been reached.</li>

<li><code>fclose(fp);</code> closes the file after all characters have been read.</li>

<li>This method is useful when you need to process a file <b>character by character</b>.</li>

</ul>

</div>

<hr>

<h3>Writing Character by Character</h3>

<p>
The fputc() function writes one character at a time.
</p>

<h4>Example: Write Characters to a File Using <code>fputc()</code></h4>

<div class="code-box">

    <div class="code-title">
        <span>Writing Characters to a File</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">FILE</span> <span class="symbol">*</span>fp<span class="symbol">;</span>

    <span class="comment">// Open file in write mode</span>
    fp <span class="symbol">=</span> <span class="function">fopen</span><span class="symbol">(</span><span class="string">"data.txt"</span><span class="symbol">,</span> <span class="string">"w"</span><span class="symbol">);</span>

    <span class="comment">// Write characters to the file</span>
    <span class="function">fputc</span><span class="symbol">(</span><span class="character">'A'</span><span class="symbol">,</span> fp<span class="symbol">);</span>
    <span class="function">fputc</span><span class="symbol">(</span><span class="character">'B'</span><span class="symbol">,</span> fp<span class="symbol">);</span>
    <span class="function">fputc</span><span class="symbol">(</span><span class="character">'C'</span><span class="symbol">,</span> fp<span class="symbol">);</span>

    <span class="comment">// Close the file</span>
    <span class="function">fclose</span><span class="symbol">(</span>fp<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Content of <code>data.txt</code></h4>

<div class="code-box">

    <div class="code-title">
        <span>data.txt</span>
    </div>

<pre><code>ABC</code></pre>

</div>

<h4>Output (Console)</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>No output is displayed on the screen.</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>

<li><code>FILE *fp;</code> declares a file pointer.</li>

<li><code>fopen("data.txt", "w");</code> opens the file in <b>write mode</b>. If the file does not exist, it is created. If it already exists, its previous contents are erased.</li>

<li><code>fputc('A', fp);</code> writes the character <code>A</code> into the file.</li>

<li><code>fputc('B', fp);</code> writes the character <code>B</code> immediately after <code>A</code>.</li>

<li><code>fputc('C', fp);</code> writes the character <code>C</code> immediately after <code>B</code>.</li>

<li>After execution, the file <code>data.txt</code> contains <code>ABC</code>.</li>

<li><code>fclose(fp);</code> closes the file and saves all written characters.</li>

<li><code>fputc()</code> is used when you want to write <b>one character at a time</b> into a file.</li>

</ul>

</div>

<hr>

<h3>Reading a Complete Line</h3>

<p>
The fgets() function reads a complete line from a file.
</p>

<h4>Example: Read a Line from a File Using <code>fgets()</code></h4>

<div class="code-box">

    <div class="code-title">
        <span>Reading a String from a File</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">FILE</span> <span class="symbol">*</span>fp<span class="symbol">;</span>

    <span class="datatype">char</span> str<span class="symbol">[</span>100<span class="symbol">]</span><span class="symbol">;</span>

    <span class="comment">// Open file in read mode</span>
    fp <span class="symbol">=</span> <span class="function">fopen</span><span class="symbol">(</span><span class="string">"data.txt"</span><span class="symbol">,</span> <span class="string">"r"</span><span class="symbol">);</span>

    <span class="comment">// Read one line from the file</span>
    <span class="function">fgets</span><span class="symbol">(</span>str<span class="symbol">,</span> 100<span class="symbol">,</span> fp<span class="symbol">);</span>

    <span class="comment">// Display the string</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%s"</span><span class="symbol">,</span> str<span class="symbol">);</span>

    <span class="comment">// Close the file</span>
    <span class="function">fclose</span><span class="symbol">(</span>fp<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Suppose <code>data.txt</code> Contains</h4>

<div class="code-box">

    <div class="code-title">
        <span>data.txt</span>
    </div>

<pre><code>Welcome to C Programming</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>Welcome to C Programming</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>

<li><code>FILE *fp;</code> declares a file pointer.</li>

<li><code>char str[100];</code> creates a character array that can store up to 99 characters plus the null character (<code>'\0'</code>).</li>

<li><code>fopen("data.txt", "r");</code> opens the file in <b>read mode</b>.</li>

<li><code>fgets(str, 100, fp);</code> reads one line (or up to 99 characters) from the file and stores it in the <code>str</code> array.</li>

<li>The number <code>100</code> specifies the maximum number of characters that can be read, including the null terminator.</li>

<li><code>printf("%s", str);</code> displays the string that was read from the file.</li>

<li><code>fclose(fp);</code> closes the file after reading is complete.</li>

<li><code>fgets()</code> is useful for reading an entire line, including spaces, from a file.</li>

</ul>

</div>

<hr>

<h3>Writing a Complete Line</h3>

<p>
The fputs() function writes a complete string into a file.
</p>

<h4>Write a String to a File Using <code>fputs()</code></h4>

<div class="code-box">

    <div class="code-title">
        <span>Writing a String to a File</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">FILE</span> <span class="symbol">*</span>fp<span class="symbol">;</span>

    <span class="comment">// Open file in write mode</span>
    fp <span class="symbol">=</span> <span class="function">fopen</span><span class="symbol">(</span><span class="string">"data.txt"</span><span class="symbol">,</span> <span class="string">"w"</span><span class="symbol">);</span>

    <span class="comment">// Write a string to the file</span>
    <span class="function">fputs</span><span class="symbol">(</span><span class="string">"Welcome to File Handling"</span><span class="symbol">,</span> fp<span class="symbol">);</span>

    <span class="comment">// Close the file</span>
    <span class="function">fclose</span><span class="symbol">(</span>fp<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Content of <code>data.txt</code></h4>

<div class="code-box">

    <div class="code-title">
        <span>data.txt</span>
    </div>

<pre><code>Welcome to File Handling</code></pre>

</div>

<h4>Output (Console)</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>No output is displayed on the screen.</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>

<li><code>FILE *fp;</code> declares a file pointer.</li>

<li><code>fopen("data.txt", "w");</code> opens the file in <b>write mode</b>. If the file does not exist, it is created. If it already exists, its previous contents are erased.</li>

<li><code>fputs("Welcome to File Handling", fp);</code> writes the complete string into the file.</li>

<li>Unlike <code>fprintf()</code>, <code>fputs()</code> writes only a string and does not use format specifiers such as <code>%d</code> or <code>%f</code>.</li>

<li><code>fclose(fp);</code> closes the file and saves the written data.</li>

<li>After execution, the file <code>data.txt</code> contains the text <code>Welcome to File Handling</code>.</li>

<li><code>fputs()</code> is useful when you want to write an entire string to a file in a single statement.</li>

</ul>

</div>

<hr>

<h3>Appending Data to a File</h3>

<p>
Append mode adds new data at the end of the file without deleting old data.
</p>

<h4>Example: Append Data to a File</h4>

<div class="code-box">

    <div class="code-title">
        <span>Appending Data Using <code>fprintf()</code></span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">FILE</span> <span class="symbol">*</span>fp<span class="symbol">;</span>

    <span class="comment">// Open file in append mode</span>
    fp <span class="symbol">=</span> <span class="function">fopen</span><span class="symbol">(</span><span class="string">"student.txt"</span><span class="symbol">,</span> <span class="string">"a"</span><span class="symbol">);</span>

    <span class="comment">// Append new data to the file</span>
    <span class="function">fprintf</span><span class="symbol">(</span>fp<span class="symbol">,</span> <span class="string">"\nNew Record Added"</span><span class="symbol">);</span>

    <span class="comment">// Close the file</span>
    <span class="function">fclose</span><span class="symbol">(</span>fp<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Suppose <code>student.txt</code> Contains Before Execution</h4>

<div class="code-box">

    <div class="code-title">
        <span>student.txt (Before)</span>
    </div>

<pre><code>Roll No = 101
Name = Pradeep
Marks = 89</code></pre>

</div>

<h4>Content of <code>student.txt</code> After Execution</h4>

<div class="code-box">

    <div class="code-title">
        <span>student.txt (After)</span>
    </div>

<pre><code>Roll No = 101
Name = Pradeep
Marks = 89
New Record Added</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>

<li><code>FILE *fp;</code> declares a file pointer.</li>

<li><code>fopen("student.txt", "a");</code> opens the file in <b>append (<code>a</code>) mode</b>.</li>

<li>In append mode, new data is always added at the <b>end of the file</b>.</li>

<li>The existing contents of the file are <b>not deleted</b>.</li>

<li><code>fprintf(fp, "\nNew Record Added");</code> writes the text on a new line because of the <code>\n</code> escape sequence.</li>

<li><code>fclose(fp);</code> closes the file and saves the appended data.</li>

<li>Append mode is useful when you want to keep existing records and continuously add new records to the same file.</li>

</ul>

</div>

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

<h4>Syntax of <code>fseek()</code></h4>

<div class="code-box">

    <div class="code-title">
        <span>Move File Pointer</span>
    </div>

<pre><code><span class="function">fseek</span><span class="symbol">(</span>fp<span class="symbol">,</span> offset<span class="symbol">,</span> position<span class="symbol">);</span>
</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>

<li><code>fseek()</code> is a library function used to <b>move the file pointer</b> to a specific location in a file.</li>

<li><code>fp</code> is the file pointer that refers to the opened file.</li>

<li><code>offset</code> specifies the number of bytes to move the file pointer.</li>

<li><code>position</code> specifies the starting point from where the movement begins.</li>

<li><code>fseek()</code> is commonly used in file handling when you need to skip data, read from a particular position, or overwrite data in a file.</li>

</ul>

</div>

<h4>Position Values</h4>

<table class="notes-table">

<tr>
<th>Position</th>
<th>Description</th>
</tr>

<tr>
<td><code>SEEK_SET</code></td>
<td>Moves the file pointer relative to the beginning of the file.</td>
</tr>

<tr>
<td><code>SEEK_CUR</code></td>
<td>Moves the file pointer relative to the current position.</td>
</tr>

<tr>
<td><code>SEEK_END</code></td>
<td>Moves the file pointer relative to the end of the file.</td>
</tr>

</table>

<div class="box">
<b>Example:</b>

<pre>
fseek(fp, 10, SEEK_SET);
</pre>

<ul>
<li>This moves the file pointer <b>10 bytes from the beginning</b> of the file.</li>
</ul>

</div>

<div class="box">
<b>Note:</b>

<ul>

<li><code>fseek()</code> moves the file pointer by bytes, not by lines.</li>

<li>It is often used together with functions like <code>fgetc()</code>, <code>fgets()</code>, <code>fprintf()</code>, and <code>fread()</code>.</li>

</ul>

</div>

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

<h4>Example: Using <code>fseek()</code> to Move the File Pointer</h4>

<div class="code-box">

    <div class="code-title">
        <span>Read Character from a Specific Position</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">FILE</span> <span class="symbol">*</span>fp<span class="symbol">;</span>

    <span class="datatype">char</span> ch<span class="symbol">;</span>

    <span class="comment">// Open file in read mode</span>
    fp <span class="symbol">=</span> <span class="function">fopen</span><span class="symbol">(</span><span class="string">"data.txt"</span><span class="symbol">,</span> <span class="string">"r"</span><span class="symbol">);</span>

    <span class="comment">// Move file pointer 5 bytes from the beginning</span>
    <span class="function">fseek</span><span class="symbol">(</span>fp<span class="symbol">,</span> 5<span class="symbol">,</span> SEEK_SET<span class="symbol">);</span>

    <span class="comment">// Read one character from the current position</span>
    ch <span class="symbol">=</span> <span class="function">fgetc</span><span class="symbol">(</span>fp<span class="symbol">);</span>

    <span class="comment">// Display the character</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%c"</span><span class="symbol">,</span> ch<span class="symbol">);</span>

    <span class="comment">// Close the file</span>
    <span class="function">fclose</span><span class="symbol">(</span>fp<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Suppose <code>data.txt</code> Contains</h4>

<div class="code-box">

    <div class="code-title">
        <span>data.txt</span>
    </div>

<pre><code>Hello World</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code> </code></pre>

<p><b>Explanation of Output:</b> The 6<sup>th</sup> character (byte) in <code>"Hello World"</code> is a <b>space</b>, so the program prints a blank space.</p>

</div>

<div class="box">
<b>Explanation:</b>

<ul>

<li><code>FILE *fp;</code> declares a file pointer.</li>

<li><code>fopen("data.txt", "r");</code> opens the file in <b>read mode</b>.</li>

<li><code>fseek(fp, 5, SEEK_SET);</code> moves the file pointer <b>5 bytes from the beginning</b> of the file.
    <ul>
        <li><code>fp</code> → file pointer</li>
        <li><code>5</code> → number of bytes to move</li>
        <li><code>SEEK_SET</code> → start counting from the beginning of the file</li>
    </ul>
</li>

<li>After moving the pointer, <code>fgetc(fp)</code> reads the character at the current position.</li>

<li><code>printf("%c", ch);</code> displays that character on the screen.</li>

<li><code>fclose(fp);</code> closes the file after reading.</li>

<li><b>Character positions in "Hello World":</b></li>

<pre>
Index : 0 1 2 3 4 5 6 7 8 9 10
Data  : H e l l o _ W o r l  d
              ↑
          fseek(fp, 5, SEEK_SET)
</pre>

</ul>

</div>

<hr>

<h3>ftell() Function</h3>

<p>
Returns the current position of the file pointer.
</p>

<h4>Example: Using <code>ftell()</code> to Find File Pointer Position</h4>

<div class="code-box">

    <div class="code-title">
        <span>Get Current Position of File Pointer</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">FILE</span> <span class="symbol">*</span>fp<span class="symbol">;</span>

    <span class="comment">// Open file in read mode</span>
    fp <span class="symbol">=</span> <span class="function">fopen</span><span class="symbol">(</span><span class="string">"data.txt"</span><span class="symbol">,</span> <span class="string">"r"</span><span class="symbol">);</span>

    <span class="comment">// Get current position of file pointer</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%ld"</span><span class="symbol">,</span> <span class="function">ftell</span><span class="symbol">(</span>fp<span class="symbol">));</span>

    <span class="comment">// Close the file</span>
    <span class="function">fclose</span><span class="symbol">(</span>fp<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Suppose <code>data.txt</code> Contains</h4>

<div class="code-box">

    <div class="code-title">
        <span>data.txt</span>
    </div>

<pre><code>Hello World</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>0</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>

<li><code>ftell()</code> is a library function used to find the <b>current position of the file pointer</b>.</li>

<h4>Syntax of <code>ftell()</code></h4>

<div class="code-box">

    <div class="code-title">
        <span>Finding Current File Pointer Position</span>
    </div>

<pre><code><span class="function">ftell</span><span class="symbol">(</span>fp<span class="symbol">);</span>
</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>

<li><code>ftell()</code> is a file handling function used to find the <b>current position of the file pointer</b>.</li>

<li><code>fp</code> is the file pointer that points to the opened file.</li>

<li>It returns the current position of the file pointer in the form of a <code>long int</code> value.</li>

<li>The position is calculated in <b>bytes</b> from the beginning of the file.</li>

<li>When a file is opened, the initial file pointer position is <code>0</code>.</li>

</ul>

</div>

<h4>Example</h4>

<div class="code-box">

    <div class="code-title">
        <span>Using <code>ftell()</code></span>
    </div>

<pre><code><span class="datatype">FILE</span> <span class="symbol">*</span>fp<span class="symbol">;</span>

fp <span class="symbol">=</span> <span class="function">fopen</span><span class="symbol">(</span><span class="string">"data.txt"</span><span class="symbol">,</span> <span class="string">"r"</span><span class="symbol">);</span>

<span class="function">printf</span><span class="symbol">(</span><span class="string">"%ld"</span><span class="symbol">,</span> <span class="function">ftell</span><span class="symbol">(</span>fp<span class="symbol">));</span>
</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>0</code></pre>

</div>

<div class="box">
<b>Note:</b>

<ul>

<li><code>ftell()</code> is generally used with <code>fseek()</code> and <code>rewind()</code> for controlling file pointer movement.</li>

<li>The format specifier <code>%ld</code> is used because <code>ftell()</code> returns a <code>long int</code> value.</li>

</ul>

</div>

<li><code>fp</code> is the file pointer that points to the opened file.</li>

<li>When a file is opened using <code>fopen()</code> in read mode, the file pointer is initially placed at the <b>beginning</b> of the file.</li>

<li>The beginning position of a file is represented by <b>0</b>, so <code>ftell(fp)</code> returns <code>0</code>.</li>

<li><code>%ld</code> format specifier is used to print the value returned by <code>ftell()</code> because it returns a <code>long int</code> value.</li>

<li>The file pointer position changes after reading or moving the pointer using functions like <code>fgetc()</code>, <code>fgets()</code>, or <code>fseek()</code>.</li>

</ul>

</div>

<h4>Example After Reading a Character</h4>

<div class="code-box">

    <div class="code-title">
        <span>File Pointer Movement</span>
    </div>

<pre><code>FILE *fp;

fp = fopen("data.txt","r");

fgetc(fp);

printf("%ld", ftell(fp));
</code></pre>

</div>

<div class="box">

<b>Output:</b>

<pre>
1
</pre>

<b>Reason:</b> After reading one character, the file pointer moves one byte forward.

</div>

<hr>

<h3>rewind() Function</h3>

<p>
Moves the file pointer back to the beginning of the file.
</p>

<h4>Example: Using <code>rewind()</code> to Move File Pointer to Beginning</h4>

<div class="code-box">

    <div class="code-title">
        <span>Reset File Pointer Position</span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">FILE</span> <span class="symbol">*</span>fp<span class="symbol">;</span>

    <span class="comment">// Open file in read mode</span>
    fp <span class="symbol">=</span> <span class="function">fopen</span><span class="symbol">(</span><span class="string">"data.txt"</span><span class="symbol">,</span> <span class="string">"r"</span><span class="symbol">);</span>

    <span class="comment">// Move file pointer 10 bytes from beginning</span>
    <span class="function">fseek</span><span class="symbol">(</span>fp<span class="symbol">,</span> 10<span class="symbol">,</span> SEEK_SET<span class="symbol">);</span>

    <span class="comment">// Move file pointer back to beginning</span>
    <span class="function">rewind</span><span class="symbol">(</span>fp<span class="symbol">);</span>

    <span class="comment">// Print current file pointer position</span>
    <span class="function">printf</span><span class="symbol">(</span><span class="string">"%ld"</span><span class="symbol">,</span> <span class="function">ftell</span><span class="symbol">(</span>fp<span class="symbol">));</span>

    <span class="comment">// Close the file</span>
    <span class="function">fclose</span><span class="symbol">(</span>fp<span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Suppose <code>data.txt</code> Contains</h4>

<div class="code-box">

    <div class="code-title">
        <span>data.txt</span>
    </div>

<pre><code>Hello World Programming</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Output</span>
    </div>

<pre><code>0</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>

<li><code>fseek(fp, 10, SEEK_SET);</code> moves the file pointer <b>10 bytes from the beginning</b> of the file.</li>

<li>After executing <code>fseek()</code>, the file pointer is at position <b>10</b>.</li>

<li><code>rewind(fp);</code> moves the file pointer back to the <b>beginning of the file</b>.</li>

<li>The position after <code>rewind()</code> becomes <b>0</b>.</li>

<li><code>ftell(fp);</code> returns the current position of the file pointer.</li>

<li>Therefore, the output is <code>0</code>.</li>

</ul>

</div>

<h4>File Pointer Movement</h4>

<div class="code-box">

    <div class="code-title">
        <span>Working Flow</span>
    </div>

<pre><code>
Initial Position
        |
        v
Position = 0

fseek(fp,10,SEEK_SET)

        |
        v

Position = 10

rewind(fp)

        |
        v

Position = 0
</code></pre>

</div>

<div class="box">
<b>Note:</b>

<ul>

<li><code>rewind()</code> is similar to <code>fseek(fp, 0, SEEK_SET)</code>.</li>

<li>It is used when we want to read a file again from the beginning.</li>

<li><code>rewind()</code> does not return any value.</li>

</ul>

</div>
<hr>

<h4>Example: Copy Data from One File to Another File</h4>

<div class="code-box">

    <div class="code-title">
        <span>File Copy Program Using <code>fgetc()</code> and <code>fputc()</code></span>
    </div>

<pre><code><span class="preprocessor">#include</span> <span class="header-file">&lt;stdio.h&gt;</span>

<span class="datatype">int</span> <span class="function">main</span><span class="symbol">()</span>
<span class="symbol">{</span>
    <span class="datatype">FILE</span> <span class="symbol">*</span>source<span class="symbol">;</span>
    <span class="datatype">FILE</span> <span class="symbol">*</span>destination<span class="symbol">;</span>

    <span class="datatype">char</span> ch<span class="symbol">;</span>

    <span class="comment">// Open source file in read mode</span>
    source <span class="symbol">=</span> <span class="function">fopen</span><span class="symbol">(</span><span class="string">"source.txt"</span><span class="symbol">,</span> <span class="string">"r"</span><span class="symbol">);</span>

    <span class="comment">// Open destination file in write mode</span>
    destination <span class="symbol">=</span> <span class="function">fopen</span><span class="symbol">(</span><span class="string">"destination.txt"</span><span class="symbol">,</span> <span class="string">"w"</span><span class="symbol">);</span>

    <span class="comment">// Read from source and write into destination</span>
    <span class="keyword">while</span><span class="symbol">((</span>ch <span class="symbol">=</span> <span class="function">fgetc</span><span class="symbol">(</span>source<span class="symbol">))</span> <span class="symbol">!=</span> EOF<span class="symbol">)</span>
    <span class="symbol">{</span>
        <span class="function">fputc</span><span class="symbol">(</span>ch<span class="symbol">,</span> destination<span class="symbol">);</span>
    <span class="symbol">}</span>

    <span class="comment">// Close both files</span>
    <span class="function">fclose</span><span class="symbol">(</span>source<span class="symbol">);</span>
    <span class="function">fclose</span><span class="symbol">(</span>destination<span class="symbol">);</span>

    <span class="function">printf</span><span class="symbol">(</span><span class="string">"File Copied Successfully"</span><span class="symbol">);</span>

    <span class="keyword">return</span> 0<span class="symbol">;</span>
<span class="symbol">}</span>
</code></pre>

</div>

<h4>Suppose <code>source.txt</code> Contains</h4>

<div class="code-box">

    <div class="code-title">
        <span>source.txt</span>
    </div>

<pre><code>Welcome to C Programming</code></pre>

</div>

<h4>Content of <code>destination.txt</code> After Execution</h4>

<div class="code-box">

    <div class="code-title">
        <span>destination.txt</span>
    </div>

<pre><code>Welcome to C Programming</code></pre>

</div>

<h4>Output</h4>

<div class="code-box">

    <div class="code-title">
        <span>Console Output</span>
    </div>

<pre><code>File Copied Successfully</code></pre>

</div>

<div class="box">
<b>Explanation:</b>

<ul>

<li><code>FILE *source;</code> creates a file pointer for the source file.</li>

<li><code>FILE *destination;</code> creates a file pointer for the destination file.</li>

<li><code>fopen("source.txt","r");</code> opens the source file in <b>read mode</b>.</li>

<li><code>fopen("destination.txt","w");</code> opens the destination file in <b>write mode</b>.</li>

<li><code>fgetc(source)</code> reads one character at a time from the source file.</li>

<li><code>fputc(ch, destination)</code> writes the read character into the destination file.</li>

<li>The <code>while</code> loop continues until the end of the source file is reached (<code>EOF</code>).</li>

<li>After copying all characters, both files are closed using <code>fclose()</code>.</li>

<li>This program copies the complete content of one file into another file.</li>

</ul>

</div>

<h4>Working Flow</h4>

<div class="code-box">

    <div class="code-title">
        <span>File Copy Process</span>
    </div>

<pre><code>
source.txt
    |
    |  fgetc()
    v
Read Character
    |
    |  fputc()
    v
destination.txt
</code></pre>

</div>
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