let dbmsOracleIntroductionContent = `

<p>
Good morning students!
Today we will learn about Database Management System (DBMS) and Oracle Database, which are fundamental concepts in database technology.
</p>

<h3>What is a Database?</h3>

<p>
A database is an organized collection of related data that can be easily accessed, managed, and updated. It helps store large amounts of information in a structured manner.
</p>

<p><strong>Examples:</strong></p>
<ul>
    <li>Student Management System</li>
    <li>Library Management System</li>
    <li>Banking System</li>
    <li>Hospital Management System</li>
    <li>Online Shopping Websites</li>
</ul>

<h3>Types of Databases</h3>

<p>
Databases are classified into different types based on their data model and structure:
</p>

<ul>
    <li><strong>Relational Database (RDBMS):</strong> Stores data in tables with rows and columns. Examples: Oracle, MySQL, SQL Server, PostgreSQL [web:2]</li>
    <li><strong>Non-Relational Database (NoSQL):</strong> Stores data in documents, graphs, or key-value pairs. Examples: MongoDB, Cassandra, Redis [web:2]</li>
    <li><strong>Object-Oriented Database:</strong> Stores data as objects, similar to object programming. Examples: Oracle (with object-relational features), db4o [web:2]</li>
    <li><strong>Cloud Database:</strong> Runs on cloud platforms. Examples: Oracle Cloud Database, Amazon RDS, Google Cloud SQL [web:2]</li>
    <li><strong>Centralized Database:</strong> Data stored at a single location accessed by multiple users</li>
    <li><strong>Distributed Database:</strong> Data stored across multiple physical locations</li>
    <li><strong>Hierarchical Database:</strong> Data organized in a tree-like structure with parent-child relationships</li>
    <li><strong>Network Database:</strong> Data organized in a graph structure allowing multiple relationships</li>
</ul>

<h3>What is DBMS?</h3>

<p>
DBMS (Database Management System) is software that allows users to create, store, retrieve, update, and manage data efficiently. It acts as an interface between users and databases.
</p>

<p>
A DBMS ensures that data remains secure, consistent, and easily accessible whenever needed.
</p>

<h3>Features of DBMS</h3>

<ul>
    <li>Data Storage and Retrieval</li>
    <li>Data Security</li>
    <li>Data Integrity</li>
    <li>Data Sharing</li>
    <li>Backup and Recovery</li>
    <li>Reduced Data Redundancy</li>
    <li>Multi-user Access</li>
</ul>

<h3>Need for DBMS</h3>

<p>
Before DBMS, data was stored in files. Managing large amounts of data using files was difficult because of:
</p>

<ul>
    <li>Data Redundancy (Duplicate Data)</li>
    <li>Data Inconsistency</li>
    <li>Difficulty in Data Retrieval</li>
    <li>Security Issues</li>
    <li>Limited Data Sharing</li>
</ul>

<p>
DBMS solves these problems and provides efficient data management.
</p>

<h3>Introduction to Oracle Database</h3>

<p>
Oracle Database is one of the world's most popular Relational Database Management Systems (RDBMS). It is developed and maintained by Oracle Corporation [web:2][web:3].
</p>

<p>
Oracle is widely used in banks, hospitals, government organizations, educational institutions, and large enterprises because of its reliability, security, and scalability [web:2].
</p>

<p>
Oracle stores data in the form of tables consisting of rows and columns and supports SQL (Structured Query Language) for database operations [web:2][web:3].
</p>

<p>
Oracle was the first database designed for the cloud and for enterprise grid computing [web:2][web:3].
</p>

<h3>History of Oracle</h3>

<p>
The history of Oracle began in 1977 when Larry Ellison, Bob Miner, and Ed Oates founded Software Development Laboratories (SDL) [web:2][web:3].
</p>

<ul>
    <li><strong>1977:</strong> Software Development Laboratories (SDL) was established by Larry Ellison, Bob Miner, and Ed Oates [web:2][web:3]</li>
    <li><strong>1979:</strong> Oracle Version 2 was released as the first commercial SQL-based database [web:2]</li>
    <li><strong>1982:</strong> SDL was renamed Oracle Corporation</li>
    <li><strong>1983:</strong> Oracle 3.0 was rewritten in C programming language (from Assembly) [web:1]</li>
    <li><strong>1985:</strong> Oracle introduced client-server architecture support</li>
    <li><strong>1997:</strong> Oracle 8 introduced object-relational features</li>
    <li><strong>1998:</strong> Oracle 8i and 9i introduced Internet-based computing ("i" = INTERNET) [web:2]</li>
    <li><strong>2003:</strong> Oracle 10g and 11g introduced grid computing features ("g" = GRID) [web:2]</li>
    <li><strong>2013:</strong> Oracle 12c introduced multi-tenant architecture ("c" = CLOUD) [web:2]</li>
    <li><strong>Present:</strong> Oracle continues to provide cloud-based and enterprise database solutions</li>
</ul>

<p>
Oracle became the first company to bring databases to the Internet platform [web:1].
</p>

<h3>Founders of Oracle</h3>

<ul>
    <li>Larry Ellison</li>
    <li>Bob Miner</li>
    <li>Ed Oates</li>
</ul>

<h3>Editions of Oracle Database</h3>

<p>
Oracle provides different editions to meet various business requirements [web:2][web:3].
</p>

<h4>1. Oracle Enterprise Edition (EE)</h4>

<p>
Designed for large organizations and enterprises. It provides advanced features such as security, performance tuning, data warehousing, and high availability [web:2][web:3].
</p>

<h4>2. Oracle Standard Edition (SE)</h4>

<p>
Suitable for medium-sized organizations. It provides essential database features at a lower cost than Enterprise Edition [web:2][web:3].
</p>

<h4>3. Oracle Standard Edition One (SEO)</h4>

<p>
Designed for single CPU servers. Specially priced for small businesses [web:3].
</p>

<h4>4. Oracle Express Edition (XE)</h4>

<p>
A free edition of Oracle Database intended for students, developers, and small applications. It is easy to install and learn. Includes basic DBA features and read-only replication [web:2][web:3].
</p>

<h4>5. Oracle Personal Edition (PE)</h4>

<p>
Designed for individual users and developers who need Oracle features on a single machine. For system development only [web:2].
</p>

<h4>6. Oracle Lite</h4>

<p>
A lightweight version designed for mobile and embedded applications.
</p>

<p>
<strong>For Students:</strong> Start learning with Oracle XE (free edition) [web:3].
</p>

<h3>Key Oracle Features</h3>

<ul>
    <li><strong>SQL-based RDBMS with PL/SQL:</strong> Procedural Language extensions to SQL with variables, loops, and conditions [web:2][web:3]</li>
    <li><strong>Parallel SQL Execution:</strong> For faster processing [web:2]</li>
    <li><strong>Online Backup & Recovery:</strong> Continuous data protection [web:2]</li>
    <li><strong>Automated Database Management:</strong> Self-managing capabilities [web:2]</li>
    <li><strong>Automatic Database Diagnostic Monitor:</strong> Performance monitoring [web:2]</li>
    <li><strong>Grid Architecture:</strong> Distributed computing support [web:2]</li>
    <li><strong>Active Data Guard:</strong> Real-time data replication [web:2]</li>
</ul>

<h3>Advantages of Oracle Database</h3>

<ul>
    <li>High Performance</li>
    <li>Strong Security Features</li>
    <li>Scalability</li>
    <li>Reliability</li>
    <li>Backup and Recovery Support</li>
    <li>Multi-user Environment</li>
    <li>Cloud Integration</li>
</ul>

<h3>Applications of Oracle</h3>

<ul>
    <li>Banking Systems</li>
    <li>Railway Reservation Systems</li>
    <li>E-commerce Websites</li>
    <li>Healthcare Systems</li>
    <li>Educational Institutions</li>
    <li>Government Organizations</li>
</ul>

<h3>Class Summary</h3>

<p>
In today's lecture, we learned about databases, types of databases (Relational, NoSQL, Object-Oriented, Cloud, Hierarchical, Network, Centralized, Distributed), DBMS, the need for DBMS, Oracle Database, the history of Oracle, Oracle founders, different Oracle editions (EE, SE, SEO, XE, PE, Lite), key Oracle features, and the advantages of Oracle. Oracle is one of the most powerful database systems used worldwide for managing large amounts of data securely and efficiently [web:2][web:3].
</p>

`;


let oracleArchitectureToolsComponentsContent = `

<h3>Oracle Architecture, Tools and Components</h3>

<p>
Good morning students!
Today we will learn about Oracle Architecture, its tools, and its major components. Understanding Oracle Architecture is very important because it helps us know how Oracle Database processes user requests and stores data efficiently.
</p>

<p>
<strong>What We Will Cover:</strong>
</p>

<ul>
    <li>What is Oracle Architecture?</li>
    <li>Oracle Client</li>
    <li>Oracle Server</li>
    <li>Oracle Instance</li>
    <li>Oracle Database</li>
    <li>Oracle Tools</li>
    <li>Working of Oracle Architecture</li>
</ul>

<h3>What is Oracle Architecture?</h3>

<p>
Oracle Architecture is the overall structure of the Oracle Database system. It describes how different components work together to store, retrieve, and manage data.
</p>

<p>
Oracle Architecture mainly consists of two parts:
</p>

<ol>
    <li>Oracle Client</li>
    <li>Oracle Server</li>
</ol>

<h3>Oracle Architecture Diagram</h3>

<pre>
                USER
                  │
                  ▼
        Oracle Client (SQL Developer)
                  │
             SQL Request
                  │
                  ▼
             Oracle Server
          ┌─────────────────┐
          │    Instance     │
          │ SGA + Processes │
          └─────────────────┘
                  │
                  ▼
              Database
      (Data Files, Control Files,
          Redo Log Files)
                  │
                  ▼
             SQL Response
                  │
                  ▼
                 USER
</pre>

<h3>1. Oracle Client</h3>

<p>
Oracle Client is the software that allows users to connect to the Oracle Database Server. It sends SQL commands to the server and displays the results to the user.
</p>

<p><strong>Functions of Oracle Client:</strong></p>

<ul>
    <li>Connect to Oracle Database</li>
    <li>Send SQL commands</li>
    <li>Receive results from the server</li>
    <li>Display data to the user</li>
</ul>

<p><strong>Examples of Oracle Client Tools:</strong></p>

<ul>
    <li>SQL*Plus</li>
    <li>SQL Developer</li>
    <li>TOAD</li>
    <li>PL/SQL Developer</li>
</ul>

<h3>2. Oracle Server</h3>

<p>
Oracle Server processes all SQL commands and manages the database. It consists of two major components:
</p>

<ol>
    <li>Oracle Instance</li>
    <li>Oracle Database</li>
</ol>

<h3>Oracle Instance</h3>

<p>
An Oracle Instance is a combination of memory structures and background processes. It is created whenever the Oracle Database starts.
</p>

<p><strong>Main Components of Instance:</strong></p>

<ul>
    <li>System Global Area (SGA)</li>
    <li>Background Processes</li>
</ul>

<h4>System Global Area (SGA)</h4>

<p>
SGA is a shared memory area allocated from RAM. It stores frequently used data and improves database performance.
</p>

<h4>Background Processes</h4>

<p>
Oracle automatically starts several background processes to manage database operations.
</p>

<table class="notes-table">
    <tr>
        <th>Process</th>
        <th>Function</th>
    </tr>
    <tr>
        <td>DBWR</td>
        <td>Writes data from memory to data files</td>
    </tr>
    <tr>
        <td>LGWR</td>
        <td>Writes redo information to redo log files</td>
    </tr>
    <tr>
        <td>CKPT</td>
        <td>Updates checkpoint information</td>
    </tr>
    <tr>
        <td>SMON</td>
        <td>Performs system recovery</td>
    </tr>
    <tr>
        <td>PMON</td>
        <td>Cleans failed user processes</td>
    </tr>
</table>

<h3>Oracle Database</h3>

<p>
Oracle Database is the permanent storage area where all user data is stored on the hard disk.
</p>

<p><strong>Main Database Files:</strong></p>

<ul>
    <li>Data Files</li>
    <li>Control Files</li>
    <li>Redo Log Files</li>
</ul>

<h4>Data Files</h4>

<p>
Data Files store all database objects such as tables, indexes, and user records.
</p>

<h4>Control Files</h4>

<p>
Control Files contain information about the physical structure of the database, database name, and file locations.
</p>

<h4>Redo Log Files</h4>

<p>
Redo Log Files record every database transaction. They help recover the database if a system failure occurs.
</p>

<h3>Oracle Tools</h3>

<p>
Oracle provides different tools for database administration and development.
</p>

<table class="notes-table">
    <tr>
        <th>Tool</th>
        <th>Purpose</th>
    </tr>
    <tr>
        <td>SQL*Plus</td>
        <td>Execute SQL and PL/SQL commands</td>
    </tr>
    <tr>
        <td>SQL Developer</td>
        <td>GUI tool for database development</td>
    </tr>
    <tr>
        <td>Oracle Enterprise Manager (OEM)</td>
        <td>Database administration and monitoring</td>
    </tr>
    <tr>
        <td>TOAD</td>
        <td>Database development and administration</td>
    </tr>
    <tr>
        <td>PL/SQL Developer</td>
        <td>Develop PL/SQL programs</td>
    </tr>
    <tr>
        <td>SQL Loader</td>
        <td>Import external data into Oracle Database</td>
    </tr>
    <tr>
        <td>RMAN</td>
        <td>Backup and Recovery tool</td>
    </tr>
</table>

<h3>Working of Oracle Architecture</h3>

<p>
The following steps explain how Oracle processes a user's request:
</p>

<ol>
    <li>User writes a SQL query using Oracle Client.</li>
    <li>The client sends the request to Oracle Server.</li>
    <li>The Oracle Instance processes the request.</li>
    <li>The database reads or updates the required data.</li>
    <li>The result is returned to the client.</li>
    <li>The client displays the output to the user.</li>
</ol>

<h3>Advantages of Oracle Architecture</h3>

<ul>
    <li>High performance</li>
    <li>Secure data management</li>
    <li>Efficient memory utilization</li>
    <li>Reliable backup and recovery</li>
    <li>Supports multiple users simultaneously</li>
    <li>Highly scalable for enterprise applications</li>
</ul>

<h3>Class Summary</h3>

<p>
Today we learned:
</p>

<ul>
    <li>Oracle Architecture and its overview</li>
    <li>Oracle Client and its functions</li>
    <li>Oracle Server and its components</li>
    <li>Oracle Instance (SGA and Background Processes)</li>
    <li>Oracle Database files</li>
    <li>Oracle development and administration tools</li>
    <li>Working process of Oracle Architecture</li>
</ul>

<p>
<strong>Remember:</strong> Oracle Client sends requests, Oracle Server processes them, Oracle Database stores the data, and finally the results are returned back to the user.
</p>

`;

let architectureIntroductionContent = `

<h3>Database Architecture</h3>

<p>
Good morning students!
Today we are going to learn one of the most important concepts in Database Management Systems (DBMS) and Oracle Database—Architecture.
</p>

<p>
Before learning Oracle Database, we must first understand what Architecture is, what Client-Server Architecture means, and finally how Oracle follows the Client-Server Architecture.
</p>

<p>
<strong>What We Will Cover:</strong>
</p>

<ul>
    <li>What is Architecture?</li>
    <li>Why Architecture is Important?</li>
    <li>Types of Architecture</li>
    <li>Single-Tier Architecture</li>
    <li>Two-Tier (Client-Server) Architecture</li>
    <li>Three-Tier Architecture</li>
    <li>Client-Server Architecture in Detail</li>
    <li>Advantages of Client-Server Architecture</li>
</ul>

<h3>What is Architecture?</h3>

<p>
The word <strong>"Architecture"</strong> means the structure or design of a system.
</p>

<p>
Just like every building has an architectural design before construction, every software application and database also has an architecture that explains how different parts work together.
</p>

<p>
Architecture tells us:
</p>

<ul>
    <li>How different components are connected.</li>
    <li>How data moves from one component to another.</li>
    <li>How users communicate with the system.</li>
    <li>How requests are processed.</li>
</ul>

<h3>Real-Life Example of Architecture</h3>

<p>
Imagine a school building.
</p>

<ul>
    <li>Students study inside classrooms.</li>
    <li>Teachers teach the students.</li>
    <li>The Principal manages the entire school.</li>
</ul>

<p>
Every person has a specific responsibility.
Similarly, in a computer system, every component has its own responsibility.
This arrangement is called <strong>Architecture</strong>.
</p>

<h3>Why is Architecture Important?</h3>

<p>
Architecture helps developers design software that is organized, secure, fast, and easy to maintain.
</p>

<p><strong>Benefits of Architecture:</strong></p>

<ul>
    <li>Easy to understand</li>
    <li>Better performance</li>
    <li>Easy maintenance</li>
    <li>High security</li>
    <li>Easy troubleshooting</li>
    <li>Scalable for large applications</li>
</ul>

<h3>Types of Database Architecture</h3>

<p>
Database systems generally use three types of architecture:
</p>

<ol>
    <li>Single-Tier Architecture</li>
    <li>Two-Tier (Client-Server) Architecture</li>
    <li>Three-Tier Architecture</li>
</ol>

<h3>1. Single-Tier Architecture</h3>

<p>
In Single-Tier Architecture, the User, Application, and Database all exist on the same computer.
</p>

<p>
Everything is performed locally.
</p>

<p><strong>Example:</strong></p>

<ul>
    <li>MS Access</li>
    <li>SQLite</li>
</ul>

<pre>
+---------------------------+
|       Computer            |
|                           |
| User                      |
| Application               |
| Database                  |
+---------------------------+
</pre>

<p><strong>Advantages:</strong></p>

<ul>
    <li>Simple</li>
    <li>Easy to install</li>
    <li>No network required</li>
</ul>

<p><strong>Disadvantages:</strong></p>

<ul>
    <li>Only one user can work efficiently.</li>
    <li>Low security.</li>
    <li>Not suitable for large organizations.</li>
</ul>

<h3>2. Two-Tier Architecture (Client-Server Architecture)</h3>

<p>
Two-Tier Architecture is also called <strong>Client-Server Architecture</strong>.
</p>

<p>
It consists of two parts:
</p>

<ol>
    <li>Client</li>
    <li>Server</li>
</ol>

<p>
The client sends requests to the server.
The server processes the request and returns the result.
</p>

<pre>
+-----------+       SQL Query       +-------------+
|  Client   | --------------------> |   Server    |
| (User PC) |                       | (Database)  |
|           | <-------------------- |             |
+-----------+      Result           +-------------+
</pre>

<h3>What is a Client?</h3>

<p>
A Client is a computer or software used by the user to connect to the database.
</p>

<p>
The client does not store the database.
Its job is only to send requests and display results.
</p>

<p><strong>Examples:</strong></p>

<ul>
    <li>SQL Developer</li>
    <li>SQL*Plus</li>
    <li>TOAD</li>
    <li>Web Browser</li>
</ul>

<h3>What is a Server?</h3>

<p>
A Server is a powerful computer that stores the database and processes user requests.
</p>

<p>
Whenever a client sends a SQL query, the server:
</p>

<ul>
    <li>Receives the request.</li>
    <li>Checks user permissions.</li>
    <li>Processes the SQL statement.</li>
    <li>Reads or updates data.</li>
    <li>Sends the result back to the client.</li>
</ul>

<h3>Real-Life Example of Client-Server Architecture</h3>

<p>
Imagine you visit a restaurant.
</p>

<ul>
    <li>You are the <strong>Client</strong>.</li>
    <li>The waiter is the communication medium.</li>
    <li>The kitchen is the <strong>Server</strong>.</li>
</ul>

<p>
You place an order.
The waiter takes your order to the kitchen.
The kitchen prepares the food.
The waiter brings the food back to you.
</p>

<p>
Similarly,
</p>

<ul>
    <li>User = Client</li>
    <li>SQL Query = Order</li>
    <li>Oracle Server = Kitchen</li>
    <li>Result = Prepared Food</li>
</ul>

<h3>Working of Client-Server Architecture</h3>

<ol>
    <li>User opens SQL Developer.</li>
    <li>User writes a SQL query.</li>
    <li>The Client sends the SQL query to Oracle Server.</li>
    <li>Oracle Server processes the query.</li>
    <li>The Server retrieves data from the database.</li>
    <li>The Server sends the result back to the Client.</li>
    <li>The Client displays the result to the user.</li>
</ol>

<pre>
User
   │
   ▼
Client (SQL Developer)
   │
   ▼
SQL Query
   │
   ▼
Oracle Server
   │
   ▼
Database
   │
   ▼
Result
   │
   ▼
Client
   │
   ▼
User
</pre>

<h3>Advantages of Client-Server Architecture</h3>

<ul>
    <li>Centralized database management.</li>
    <li>High security.</li>
    <li>Multiple users can work simultaneously.</li>
    <li>Easy backup and recovery.</li>
    <li>Easy maintenance.</li>
    <li>Better performance.</li>
    <li>Data consistency.</li>
</ul>

<h3>Disadvantages of Client-Server Architecture</h3>

<ul>
    <li>Requires a network connection.</li>
    <li>Server failure affects all clients.</li>
    <li>Initial setup cost is higher.</li>
</ul>

<h3>3. Three-Tier Architecture</h3>

<p>
In Three-Tier Architecture, an additional Application Server is placed between the Client and Database Server.
</p>

<pre>
Client
   │
   ▼
Application Server
   │
   ▼
Database Server
</pre>

<p>
This architecture is commonly used in:
</p>

<ul>
    <li>Banking Systems</li>
    <li>Amazon</li>
    <li>Flipkart</li>
    <li>Facebook</li>
    <li>Government Portals</li>
</ul>

<h3>Class Summary</h3>

<ul>
    <li>Architecture means the structure or design of a system.</li>
    <li>Database Architecture explains how users and databases communicate.</li>
    <li>There are three major database architectures.</li>
    <li>Oracle Database mainly follows Client-Server (Two-Tier) Architecture.</li>
    <li>In Client-Server Architecture, the Client sends requests, and the Server processes them and returns the result.</li>
</ul>

<p>
<strong>Remember:</strong><br>
Client asks for data → Server processes the request → Database stores the data → Server returns the result → Client displays the output.
</p>

`;

let oracleInstallationGuideContent = `

<h2>Oracle Database Installation </h2>

<p>
Good morning students!
Today we will learn how to install Oracle Database step-by-step. This is a hands-on practical lesson that will help you set up Oracle on your computer for learning and practice.
</p>

<p>
<strong>What We Will Cover:</strong>
</p>
<ul>
    <li>Which Oracle edition to choose for students</li>
    <li>Prerequisites before installation</li>
    <li>Step-by-step installation process</li>
    <li>Oracle components: Client and Server</li>
    <li>How to connect and communicate with Oracle DB</li>
    <li>How to verify your installation</li>
</ul>

<h3>Step 1: Choose the Right Oracle Edition for Students</h3>

<p>
For students and beginners, always start with **Oracle Database Express Edition (XE)** because:
</p>

<ul>
    <li>✅ It is **100% FREE**</li>
    <li>✅ **Easy to install** – ready in a few minutes with simple "NEXT" clicks</li>
    <li>✅ Includes basic DBA features and read-only replication</li>
    <li>✅ Perfect for learning SQL and PL/SQL</li>
    <li>✅ Small system requirements</li>
</ul>

<p>
<strong>Recommended Version:</strong> Oracle 18c XE or Oracle 11g XE.
</p>

<h3>Step 2: Prerequisites – Check Before Installation</h3>

<p>
Before installing Oracle, make sure your system meets these requirements:
</p>

<h4>System Requirements for Oracle XE:</h4>

<ul>
    <li><strong>Operating System:</strong> Windows 10/11, Linux, or macOS</li>
    <li><strong>RAM:</strong> Minimum 2 GB (4 GB recommended)</li>
    <li><strong>Hard Disk:</strong> At least 8 GB free space</li>
    <li><strong>Processor:</strong> 1 GHz or faster</li>
    <li><strong>Administrator Access:</strong> You must log in as a member of the administrative group authorized to install Oracle software</li>
</ul>

<h4>What to Download:</h4>

<ul>
    <li>Go to Oracle's official download site: <strong>https://www.oracle.com/database/technologies/oracle-database-software-downloads.html</strong></li>
    <li>Find "Oracle Database Express Edition (XE)"</li>
    <li>Download the installer for your operating system</li>
</ul>

<h3>Step 3: Installation Process – Step by Step</h3>

<p>
Oracle uses the **Oracle Universal Installer (OUI)** – a Java-based GUI tool that looks and works the same on all operating systems.
</p>

<p>
There are **two installation methods**:
</p>
<ul>
    <li><strong>Basic Installation:</strong> Quick install with minimal user input</li>
    <li><strong>Advanced Installation:</strong> Custom installation with more options</li>
</ul>

<p>
<strong>For students, use Basic Installation!</strong>
</p>

<h4>Basic Installation Steps (13 Steps):</h4>

<table class="notes-table">
    <tr>
        <th>Step</th>
        <th>Action</th>
    </tr>
    <tr>
        <td><strong>1</strong></td>
        <td>Log onto your computer as a member of the administrative group authorized to install Oracle software</td>
    </tr>
    <tr>
        <td><strong>2</strong></td>
        <td>Run the Oracle installer (double-click the downloaded file)</td>
    </tr>
    <tr>
        <td><strong>3</strong></td>
        <td><strong>Configure Security Updates:</strong> Enter email and Oracle Support password, OR uncheck the box and click Next (leave text boxes empty)</td>
    </tr>
    <tr>
        <td><strong>4</strong></td>
        <td><strong>Installation Option:</strong> Select <strong>"Create and configure a database"</strong> and click Next</td>
    </tr>
    <tr>
        <td><strong>5</strong></td>
        <td><strong>System Class:</strong> Select <strong>"Server Class"</strong> and click Next</td>
    </tr>
    <tr>
        <td><strong>6</strong></td>
        <td><strong>Grid Options:</strong> Select <strong>"Single instance database installation"</strong> and click Next</td>
    </tr>
    <tr>
        <td><strong>7</strong></td>
        <td><strong>Install Type:</strong> Select <strong>"Typical install"</strong> and click Next</td>
    </tr>
    <tr>
        <td><strong>8</strong></td>
        <td><strong>Typical Installation:</strong> Enter an <strong>Administrative Password</strong>, confirm it, and click Next</td>
    </tr>
    <tr>
        <td><strong>9</strong></td>
        <td><strong>Create Inventory:</strong> Accept the defaults and click Next</td>
    </tr>
    <tr>
        <td><strong>10</strong></td>
        <td><strong>Prerequisite Checks:</strong> Click <strong>"Fix and Check Again"</strong> if issues appear</td>
    </tr>
    <tr>
        <td><strong>11</strong></td>
        <td><strong>Execute Fixup Scripts:</strong> Open terminal, change to OS user <strong>root</strong>, and execute the script</td>
    </tr>
    <tr>
        <td><strong>12</strong></td>
        <td>Wait for installation to complete (usually 10-20 minutes)</td>
    </tr>
    <tr>
        <td><strong>13</strong></td>
        <td>Click <strong>"Finish"</strong> when installation is complete</td>
    </tr>
</table>

<h3>IMPORTANT: Oracle Components After Installation</h3>

<p>
<strong>NOTE:</strong> Once we install Oracle Internally, there are two components installed in the system:
</p>

<ol>
    <li>Oracle Client</li>
    <li>Oracle Server</li>
</ol>

<h4>1. Oracle Client</h4>

<p>
This client tool is used to perform the following three operations:
</p>

<ul>
    <li><strong>Step-1:</strong> Connect to Oracle DB server</li>
    <li><strong>Step-2:</strong> Send request to Oracle DB Server</li>
    <li><strong>Step-3:</strong> Get response from Oracle DB Server</li>
</ul>

<p>
<strong>Examples of Oracle Client Tools:</strong>
</p>
<ul>
    <li>SQL*Plus</li>
    <li>SQL Developer</li>
    <li>TOAD</li>
    <li>PL/SQL Developer</li>
</ul>

<h4>2. Oracle Server</h4>

<p>
Oracle Server has two or more sub-components:
</p>

<ol>
    <li>Instance</li>
    <li>Database</li>
</ol>

<h5>Instance:</h5>

<ul>
    <li>It is a **temporary memory**</li>
    <li>This memory is allocated by the system from **RAM**</li>
    <li>Data can be stored **temporarily**</li>
</ul>

<h5>Database:</h5>

<ul>
    <li>It is a **permanent memory**</li>
    <li>This memory is allocated by the system from **Hard Disk**</li>
    <li>Data can be stored **permanently**</li>
</ul>

<h3>How to Work with Oracle DB – 2 Step Procedure</h3>

<p>
<strong>NOTE:</strong> When we want to work on Oracle DB, we follow the following 2-step procedure:
</p>

<ol>
    <li><strong>Step-1:</strong> Connect to Oracle</li>
    <li><strong>Step-2:</strong> Communicate with Oracle DB</li>
</ol>

<h4>Step-1: Connect to Oracle DB Server</h4>

<p>
When a user wants to connect to Oracle DB Server, we need DB Tools called:
</p>

<ul>
    <li>SQL*Plus</li>
    <li>SQL Developer</li>
    <li>TOAD</li>
    <li>PL/SQL Developer</li>
</ul>

<h4>Step-2: Communicate with Oracle DB</h4>

<p>
When a user wants to communicate with DB, we need a DB Language called **SQL** (Structured Query Language).
</p>

<p>
<strong>SQL Commands You Will Learn:</strong>
</p>
<ul>
    <li><code>SELECT</code> – Retrieve data</li>
    <li><code>INSERT</code> – Add new data</li>
    <li><code>UPDATE</code> – Modify data</li>
    <li><code>DELETE</code> – Remove data</li>
    <li><code>CREATE TABLE</code> – Create new table</li>
</ul>

<h3>Step 4: Verify Your Installation</h3>

<p>
Let's check if Oracle is installed correctly:
</p>

<h4>Method 1: Check Services (Windows)</h4>

<ul>
    <li>Open <strong>Start → Run</strong> and type: <code>services.msc</code></li>
    <li>Look for services named:
        <ul>
            <li><code>OracleXETemplated</code></li>
            <li><code>OracleServiceXE</code></li>
            <li><code>OracleOraDB...T1homeListener</code></li>
        </ul>
    </li>
    <li>All should show "Running" status</li>
</ul>

<h4>Method 2: Use SQL Command Line</h4>

<ul>
    <li>Open <strong>Command Prompt</strong> (Windows) or <strong>Terminal</strong> (Linux/macOS)</li>
    <li>Type: <code>sqlplus</code></li>
    <li>Login with:
        <pre>
Username: system
Password: [your administrative password]
        </pre>
    </li>
    <li>If you see SQL> prompt, Oracle is working!</li>
</ul>

<h3>Common Problems and Solutions</h3>

<table class="notes-table">
    <tr>
        <th>Problem</th>
        <th>Solution</th>
    </tr>
    <tr>
        <td><strong>Installation fails at Prerequisite Checks</strong></td>
        <td>Click "Fix and Check Again" – OUI will generate a script. Run it as root</td>
    </tr>
    <tr>
        <td><strong>Password is too weak</strong></td>
        <td>Use a stronger password with at least 8 characters, mix of uppercase/lowercase, and one number</td>
    </tr>
    <tr>
        <td><strong>SQL*Plus not found</strong></td>
        <td>Add Oracle to system PATH: <code>C:\\oracle\\product\\11.2.0\\xe\\bin</code></td>
    </tr>
    <tr>
        <td><strong>Listener not running</strong></td>
        <td>Start Oracle Listener: <code>lsnrctl start</code></td>
    </tr>
</table>

<h3>What to Do After Installation</h3>

<p>
Now that Oracle is installed, start learning:
</p>

<ul>
    <li>✅ Open SQL*Plus or SQL Developer</li>
    <li>✅ Learn basic SQL commands: <code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code></li>
    <li>✅ Practice creating tables: <code>CREATE TABLE students (...)</code></li>
    <li>✅ Learn PL/SQL: variables, loops, IF conditions</li>
    <li>✅ Create your first Student Management System database</li>
</ul>

<h3>Class Summary</h3>

<p>
In today's practical lecture, we learned:
</p>

<ul>
    <li>Choosing Oracle XE for students (free and easy to install)</li>
    <li>System prerequisites before installation</li>
    <li>The 13-step basic installation process using Oracle Universal Installer (OUI)</li>
    <li><strong>Two Oracle components:</strong> Oracle Client (for connecting) and Oracle Server (with Instance and Database)</li>
    <li><strong>Instance = Temporary memory (RAM)</strong></li>
    <li><strong>Database = Permanent memory (Hard Disk)</strong></li>
    <li><strong>2-step procedure to work with Oracle:</strong> (1) Connect using SQL*Plus/SQL Developer, (2) Communicate using SQL language</li>
    <li>Three methods to verify installation (Services, SQL*Plus, SQL Developer)</li>
    <li>Common problems and their solutions</li>
</ul>

<p>
<strong>Remember:</strong> Oracle installation is simple – just a few mouse clicks. With Oracle XE, you can start practicing SQL immediately!
</p>

<p>
<strong>Homework:</strong> Install Oracle XE on your computer and create a simple "students" table with 5 sample records using SQL.
</p>

`;

let sqlIntroductionContent = `

<h3>Introduction to SQL</h3>

<p>
Good morning students!
Today we will learn about **SQL (Structured Query Language)**, which is the database language used to communicate with Oracle Database. After installing Oracle in our previous class, this is the next essential step to work with databases.
</p>

<p>
<strong>What We Will Cover:</strong>
</p>
<ul>
    <li>What is SQL?</li>
    <li>Why do we need SQL?</li>
    <li>Types of SQL Statements (DDL, DML, DCL, TCL)</li>
    <li>SQL Data Types</li>
    <li>Basic SQL Commands with examples</li>
    <li>Hands-on Practice: Creating your first table</li>
</ul>

<h3>What is SQL?</h3>

<p>
<strong>SQL (Structured Query Language)</strong> is the set of statements with which all programs and users access data in an Oracle Database [web:21].
</p>

<ul>
    <li>SQL is a **database language** for storing, retrieving, and managing data</li>
    <li>It is the **standard language** for all relational databases (Oracle, MySQL, SQL Server, PostgreSQL) [web:21]</li>
    <li>SQL commands are **easy to learn** – most use simple English words like SELECT, INSERT, UPDATE</li>
    <li>Application programs and Oracle tools often allow users to access the database without using SQL directly, but these applications must use SQL when executing the user's request [web:21]</li>
</ul>

<p>
<strong>Remember from Previous Class:</strong>
</p>
<ul>
    <li><strong>Step-1:</strong> Connect to Oracle → Use tools like SQL*Plus, SQL Developer, TOAD</li>
    <li><strong>Step-2:</strong> Communicate with Oracle DB → Use **SQL language**</li>
</ul>

<h3>Why Do We Need SQL?</h3>

<p>
Without SQL, we cannot:
</p>
<ul>
    <li>❌ Create tables in the database</li>
    <li>❌ Insert data into tables</li>
    <li>❌ Retrieve data from tables</li>
    <li>❌ Update or delete data</li>
    <li>❌ Control access to data</li>
</ul>

<p>
SQL is essential for **all database operations** [web:21][web:26].
</p>

<h3>Types of SQL Statements</h3>

<p>
SQL statements are divided into **four main categories**:
</p>

<table class="notes-table">
    <tr>
        <th>Type</th>
        <th>Full Name</th>
        <th>Purpose</th>
        <th>Commands</th>
    </tr>
    <tr>
        <td><strong>DDL</strong></td>
        <td>Data Definition Language</td>
        <td>Define database structure (create, modify, delete objects)</td>
        <td>CREATE, ALTER, DROP, TRUNCATE, RENAME</td>
    </tr>
    <tr>
        <td><strong>DML</strong></td>
        <td>Data Manipulation Language</td>
        <td>Manipulate data inside tables</td>
        <td>INSERT, UPDATE, DELETE, SELECT</td>
    </tr>
    <tr>
        <td><strong>DCL</strong></td>
        <td>Data Control Language</td>
        <td>Control access to data (permissions)</td>
        <td>GRANT, REVOKE</td>
    </tr>
    <tr>
        <td><strong>TCL</strong></td>
        <td>Transaction Control Language</td>
        <td>Manage transactions in database</td>
        <td>COMMIT, ROLLBACK, SAVEPOINT</td>
    </tr>
</table>

<h4>1. DDL (Data Definition Language)</h4>

<p>
Used to **define or modify database structure** (tables, indexes, schemas):
</p>

<ul>
    <li><strong>CREATE:</strong> Create new database object</li>
    <li><strong>ALTER:</strong> Modify existing database object</li>
    <li><strong>DROP:</strong> Delete database object completely</li>
    <li><strong>TRUNCATE:</strong> Remove all data from table (but keep table structure)</li>
    <li><strong>RENAME:</strong> Change name of database object</li>
</ul>

<h4>2. DML (Data Manipulation Language)</h4>

<p>
Used to **manipulate data inside tables**:
</p>

<ul>
    <li><strong>INSERT:</strong> Add new data (rows) to table</li>
    <li><strong>UPDATE:</strong> Modify existing data in table</li>
    <li><strong>DELETE:</strong> Remove data from table</li>
    <li><strong>SELECT:</strong> Retrieve data from table</li>
</ul>

<h4>3. DCL (Data Control Language)</h4>

<p>
Used to **control user access and permissions**:
</p>

<ul>
    <li><strong>GRANT:</strong> Give permission to user</li>
    <li><strong>REVOKE:</strong> Remove permission from user</li>
</ul>

<h4>4. TCL (Transaction Control Language)</h4>

<p>
Used to **manage database transactions**:
</p>

<ul>
    <li><strong>COMMIT:</strong> Save all changes permanently</li>
    <li><strong>ROLLBACK:</strong> Undo changes back to last commit</li>
    <li><strong>SAVEPOINT:</strong> Set a point to rollback to</li>
</ul>

<h3>SQL Data Types</h3>

<p>
When creating tables, each column must have a **data type** that defines what kind of data it can store [web:24]:
</p>

<table class="notes-table">
    <tr>
        <th>Data Type</th>
        <th>Description</th>
        <th>Example</th>
    </tr>
    <tr>
        <td><strong>VARCHAR2(size)</strong></td>
        <td>Variable-length character string</td>
        <td>VARCHAR2(50) for names</td>
    </tr>
    <tr>
        <td><strong>CHAR(size)</strong></td>
        <td>Fixed-length character string</td>
        <td>CHAR(10) for codes</td>
    </tr>
    <tr>
        <td><strong>NUMBER(size, precision)</strong></td>
        <td>Numeric data (integers and decimals)</td>
        <td>NUMBER(5,2) for prices</td>
    </tr>
    <tr>
        <td><strong>INTEGER</strong></td>
        <td>Integer numbers (no decimals)</td>
        <td>INTEGER for age, count</td>
    </tr>
    <tr>
        <td><strong>FLOAT</strong></td>
        <td>Floating-point numbers</td>
        <td>FLOAT for measurements</td>
    </tr>
    <tr>
        <td><strong>DATE</strong></td>
        <td>Date and time</td>
        <td>DATE for birthdate, order date</td>
    </tr>
    <tr>
        <td><strong>TIMESTAMP</strong></td>
        <td>Date with time (more precise)</td>
        <td>TIMESTAMP for transaction time</td>
    </tr>
    <tr>
        <td><strong>BLOB</strong></td>
        <td>Binary large object (images, files)</td>
        <td>BLOB for storing photos</td>
    </tr>
</table>

<h3>Basic SQL Commands – With Examples</h3>

<h4>Example 1: CREATE Table (DDL)</h4>

<pre>
CREATE TABLE students (
    student_id NUMBER(5) PRIMARY KEY,
    student_name VARCHAR2(50) NOT NULL,
    student_email VARCHAR2(100),
    age NUMBER(3),
    enrollment_date DATE
);
</pre>

<p>
This creates a table named <strong>students</strong> with 5 columns .
</p>

<h4>Example 2: INSERT Data (DML)</h4>

<pre>
INSERT INTO students (student_id, student_name, student_email, age, enrollment_date)
VALUES (1, 'Rahul Kumar', 'rahul@email.com', 20, '2024-01-15');
</pre>

<p>
This adds one new row to the students table .
</p>

<h4>Example 3: SELECT Data (DML)</h4>

<pre>
-- Select all columns
SELECT * FROM students;

-- Select specific columns
SELECT student_name, age FROM students;

-- Select with condition
SELECT * FROM students WHERE age > 18;
</pre>

<p>
This retrieves data from the students table .
</p>

<h4>Example 4: UPDATE Data (DML)</h4>

<pre>
UPDATE students 
SET age = 21 
WHERE student_id = 1;
</pre>

<p>
This modifies existing data in the table.
</p>

<h4>Example 5: DELETE Data (DML)</h4>

<pre>
DELETE FROM students 
WHERE student_id = 1;
</pre>

<p>
This removes a row from the table.
</p>

<h4>Example 6: COMMIT and ROLLBACK (TCL)</h4>

<pre>
-- Save changes permanently
COMMIT;

-- Undo changes
ROLLBACK;
</pre>

<h3>Hands-on Practice: Create Your First Table</h3>

<p>
<strong>Lab Exercise:</strong> Create a Student Registration Database 
</p>

<h4>Task 1: Create Database</h4>

<pre>
CREATE DATABASE college_registration;
</pre>

<h4>Task 2: Create Student Table</h4>

<pre>
CREATE TABLE Student (
    student_id NUMBER(5) PRIMARY KEY,
    student_name VARCHAR2(50) NOT NULL,
    student_email VARCHAR2(100) UNIQUE,
    mobile_number VARCHAR2(10),
    department VARCHAR2(50),
    enrollment_year NUMBER(4)
);
</pre>

<h4>Task 3: Insert Records</h4>

<pre>
INSERT INTO Student VALUES (1, 'Amit Sharma', 'amit@email.com', '9876543210', 'Computer Science', 2024);
INSERT INTO Student VALUES (2, 'Priya Singh', 'priya@email.com', '9876543211', 'Mathematics', 2024);
INSERT INTO Student VALUES (3, 'Rajesh Patel', 'rajesh@email.com', '9876543212', 'Physics', 2024);
INSERT INTO Student VALUES (4, 'Sneha Gupta', 'sneha@email.com', '9876543213', 'Computer Science', 2024);
INSERT INTO Student VALUES (5, 'Vikram Reddy', 'vikram@email.com', '9876543214', 'Chemistry', 2024);
</pre>

<h4>Task 4: Retrieve Data</h4>

<pre>
-- Display all students
SELECT * FROM Student;

-- Display students from Computer Science
SELECT * FROM Student WHERE department = 'Computer Science';

-- Display student names and mobile numbers
SELECT student_name, mobile_number FROM Student;
</pre>

<h3>SQL Features</h3>

<ul>
    <li><strong>Easy to Learn:</strong> Uses simple English words</li>
    <li><strong>Non-Procedural:</strong> You specify what you want, not how to get it</li>
    <li><strong>Standardized:</strong> Works across all relational databases</li>
    <li><strong>Powerful:</strong> Can handle complex queries with joins, functions, groups</li>
    <li><strong>Interactive:</strong> Immediate results when you run commands</li>
</ul>

<h3>How to Run SQL Commands</h3>

<p>
You can run SQL commands using these tools:
</p>

<ul>
    <li><strong>SQL*Plus:</strong> Command-line tool (type <code>sqlplus</code> in command prompt)</li>
    <li><strong>SQL Developer:</strong> GUI tool (download from Oracle website)</li>
    <li><strong>TOAD:</strong> Another popular GUI tool</li>
    <li><strong>PL/SQL Developer:</strong> For advanced PL/SQL programming</li>
</ul>

<p>
<strong>Example: Using SQL*Plus</strong>
</p>
<pre>
C:\> sqlplus
Enter user-name: system
Enter password: [your password]

SQL&gt; SELECT * FROM students;
SQL&gt; INSERT INTO students VALUES (...);
SQL&gt; COMMIT;
</pre>

<h3>Common SQL Errors</h3>

<table class="notes-table">
    <tr>
        <th>Error</th>
        <th>Cause</th>
        <th>Solution</th>
    </tr>
    <tr>
        <td><strong>ORA-00922: Missing or invalid option</strong></td>
        <td>Typo in SQL command</td>
        <td>Check spelling and syntax</td>
    </tr>
    <tr>
        <td><strong>ORA-00942: Table or view does not exist</strong></td>
        <td>Table name incorrect or not created</td>
        <td>Create table first or check name</td>
    </tr>
    <tr>
        <td><strong>ORA-01722: Zero row selected</strong></td>
        <td>No data matches condition</td>
        <td>Check WHERE clause condition</td>
    </tr>
    <tr>
        <td><strong>ORA-00001: Unique constraint violated</strong></td>
        <td>Trying to insert duplicate unique value</td>
        <td>Use different value</td>
    </tr>
</table>

<h3>Class Summary</h3>

<p>
In today's lecture, we learned:
</p>

<ul>
    <li><strong>What is SQL:</strong> Structured Query Language for accessing Oracle Database [web:21]</li>
    <li><strong>Why SQL is needed:</strong> Essential for all database operations [web:21][web:26]</li>
    <li><strong>Four types of SQL statements:</strong>
        <ul>
            <li><strong>DDL:</strong> CREATE, ALTER, DROP, TRUNCATE (define structure)</li>
            <li><strong>DML:</strong> INSERT, UPDATE, DELETE, SELECT (manipulate data)</li>
            <li><strong>DCL:</strong> GRANT, REVOKE (control access)</li>
            <li><strong>TCL:</strong> COMMIT, ROLLBACK, SAVEPOINT (manage transactions)</li>
        </ul>
    </li>
    <li><strong>SQL Data Types:</strong> VARCHAR2, CHAR, NUMBER, INTEGER, DATE, TIMESTAMP, BLOB</li>
    <li><strong>Basic SQL Commands:</strong> CREATE TABLE, INSERT, SELECT, UPDATE, DELETE</li>
    <li><strong>Hands-on Practice:</strong> Created Student table with 5 records </li>
    <li><strong>How to run SQL:</strong> Using SQL*Plus, SQL Developer, TOAD</li>
</ul>

<p>
<strong>Remember:</strong> SQL is the language you use to communicate with Oracle Database (Step-2 from our 2-step procedure). Every database operation requires SQL!
</p>

<p>
<strong>Homework:</strong> 
</p>
<ul>
    <li>1. Create a "Course" table with at least 5 columns</li>
    <li>2. Insert 5 course records</li>
    <li>3. Write SELECT queries to retrieve courses by department</li>
</ul>

<p>
<strong>Next Topic:</strong> Constraints in SQL (Primary Key, Foreign Key, Unique, Not Null, Check)
</p>

`;

let sqlKeysContent = `

<h3>SQL Keys</h3>

<p>
Good morning students!
Today we will learn about <strong>SQL Keys</strong>, one of the most important concepts in Database Management Systems (DBMS) and Oracle Database.
</p>

<p>
Keys are used to uniquely identify records in a table and establish relationships between tables. Without keys, it becomes difficult to maintain data accuracy, avoid duplicate records, and connect related tables.
</p>

<p>
<strong>What We Will Cover:</strong>
</p>

<ul>
    <li>What is a Key?</li>
    <li>Why Do We Need Keys?</li>
    <li>Characteristics of a Good Key</li>
    <li>Types of SQL Keys</li>
    <li>Super Key</li>
    <li>Candidate Key</li>
    <li>Primary Key</li>
    <li>Alternate Key</li>
    <li>Composite Key</li>
    <li>Foreign Key</li>
    <li>Unique Key</li>
    <li>Difference Between Various Keys</li>
</ul>

<h3>What is a Key?</h3>

<p>
A <strong>Key</strong> is one or more columns in a database table that are used to uniquely identify each record (row).
</p>

<p>
Keys help Oracle identify, retrieve, update, and delete records efficiently while maintaining data integrity.
</p>

<p>
In simple words,
</p>

<p>
<strong>
"A Key is an attribute or a set of attributes that uniquely identifies a record in a table."
</strong>
</p>

<h3>Real-Life Example</h3>

<p>
Imagine a school has 500 students.
Many students may have the same name, but every student has a unique Roll Number.
</p>

<table class="notes-table">
<tr>
<th>Roll No</th>
<th>Name</th>
<th>Class</th>
</tr>

<tr>
<td>101</td>
<td>Rahul</td>
<td>BCA</td>
</tr>

<tr>
<td>102</td>
<td>Rahul</td>
<td>BCA</td>
</tr>

<tr>
<td>103</td>
<td>Amit</td>
<td>BCA</td>
</tr>

</table>

<p>
Here, the <strong>Roll Number</strong> uniquely identifies each student.
Therefore, Roll Number is a <strong>Key</strong>.
</p>

<h3>Why Do We Need Keys?</h3>

<ul>
<li>Uniquely identify each record.</li>
<li>Prevent duplicate records.</li>
<li>Maintain data integrity.</li>
<li>Create relationships between tables.</li>
<li>Improve database performance.</li>
<li>Support fast searching and updating.</li>
</ul>

<h3>Characteristics of a Good Key</h3>

<ul>
<li>Must uniquely identify every record.</li>
<li>Should not contain duplicate values.</li>
<li>Should remain stable.</li>
<li>Should be simple whenever possible.</li>
<li>Should not change frequently.</li>
</ul>

<h3>Types of SQL Keys</h3>

<ol>
<li>Super Key</li>
<li>Candidate Key</li>
<li>Primary Key</li>
<li>Alternate Key</li>
<li>Composite Key</li>
<li>Foreign Key</li>
<li>Unique Key</li>
</ol>

<!-- Continue each key in the following sections -->

`;

let superKeyContent = `

<h3>Super Key</h3>

<p>
Good morning students!
Today we will learn about the <strong>Super Key</strong>, which is the first and one of the most important types of keys in Database Management Systems (DBMS).
</p>

<p>
Before understanding Candidate Key, Primary Key, or Foreign Key, it is important to understand the concept of a Super Key because all other keys are derived from it.
</p>

<p>
<strong>What We Will Cover:</strong>
</p>

<ul>
    <li>What is a Super Key?</li>
    <li>Why Do We Need a Super Key?</li>
    <li>Characteristics of a Super Key</li>
    <li>Real-Life Example</li>
    <li>Database Example</li>
    <li>Possible Super Keys</li>
    <li>Advantages</li>
    <li>Disadvantages</li>
    <li>Important Interview Questions</li>
</ul>

<h3>What is a Super Key?</h3>

<p>
A <strong>Super Key</strong> is a single column or a combination of two or more columns that can uniquely identify every record in a database table.
</p>

<p>
A Super Key may contain <strong>extra or unnecessary attributes</strong>, but it must uniquely identify each row.
</p>

<p>
<strong>Definition:</strong>
</p>

<p>
A Super Key is an attribute or a set of attributes that uniquely identifies each record in a table.
</p>

<h3>Why Do We Need a Super Key?</h3>

<p>
Suppose a table contains hundreds or thousands of records.
If two students have the same name, how will the database identify the correct student?
</p>

<p>
To solve this problem, we use a Super Key.
</p>

<p>
A Super Key helps the database identify each record uniquely.
</p>

<h3>Real-Life Example</h3>

<p>
Imagine a school has the following student records:
</p>

<table class="notes-table">

<tr>
<th>Student ID</th>
<th>Roll No</th>
<th>Aadhaar No</th>
<th>Name</th>
</tr>

<tr>
<td>101</td>
<td>BCA001</td>
<td>123456789012</td>
<td>Rahul</td>
</tr>

<tr>
<td>102</td>
<td>BCA002</td>
<td>987654321012</td>
<td>Rahul</td>
</tr>

<tr>
<td>103</td>
<td>BCA003</td>
<td>456789123456</td>
<td>Amit</td>
</tr>

</table>

<p>
Notice that two students have the same name (Rahul), so the Name column cannot uniquely identify a student.
</p>

<p>
However,
</p>

<ul>
<li>Student ID is unique.</li>
<li>Roll Number is unique.</li>
<li>Aadhaar Number is unique.</li>
</ul>

<p>
Therefore, all these columns can uniquely identify a student.
</p>

<h3>Database Example</h3>

<p>
Consider the following Student table:
</p>

<table class="notes-table">

<tr>
<th>StudentID</th>
<th>RollNo</th>
<th>Email</th>
<th>Name</th>
</tr>

<tr>
<td>101</td>
<td>BCA001</td>
<td>rahul@gmail.com</td>
<td>Rahul</td>
</tr>

<tr>
<td>102</td>
<td>BCA002</td>
<td>amit@gmail.com</td>
<td>Amit</td>
</tr>

<tr>
<td>103</td>
<td>BCA003</td>
<td>rohit@gmail.com</td>
<td>Rohit</td>
</tr>

</table>

<h3>Possible Super Keys</h3>

<p>
The following combinations can uniquely identify every student:
</p>

<ul>
<li>StudentID ✔</li>
<li>RollNo ✔</li>
<li>Email ✔</li>
<li>StudentID + Name ✔</li>
<li>RollNo + Name ✔</li>
<li>Email + Name ✔</li>
<li>StudentID + RollNo ✔</li>
<li>StudentID + Email ✔</li>
<li>StudentID + RollNo + Email ✔</li>
</ul>

<p>
All of these are Super Keys because each combination uniquely identifies every record.
</p>

<h3>Important Point</h3>

<p>
Notice that:
</p>

<pre>

StudentID

</pre>

is enough to identify a student.

But

<pre>

StudentID + Name

</pre>

also identifies the student.

The <strong>Name</strong> column is not required.

It is an <strong>extra attribute</strong>.

Therefore,

<p>

StudentID + Name

</p>

is still a Super Key.

This is the most important property of a Super Key.

<h3>Characteristics of a Super Key</h3>

<ul>

<li>Uniquely identifies every record.</li>

<li>May consist of one or more columns.</li>

<li>May contain unnecessary attributes.</li>

<li>Can have many possible combinations.</li>

<li>Every Candidate Key is also a Super Key.</li>

</ul>

<h3>Advantages of Super Key</h3>

<ul>

<li>Uniquely identifies records.</li>

<li>Maintains data integrity.</li>

<li>Provides the basis for Candidate Keys.</li>

<li>Helps avoid duplicate records.</li>

</ul>

<h3>Disadvantages of Super Key</h3>

<ul>

<li>May contain unnecessary columns.</li>

<li>Not always efficient.</li>

<li>Consumes extra storage if many columns are used.</li>

<li>Can make queries more complex.</li>

</ul>

<h3>Difference Between Super Key and Candidate Key</h3>

<table class="notes-table">

<tr>
<th>Super Key</th>
<th>Candidate Key</th>
</tr>

<tr>
<td>May contain extra attributes.</td>
<td>Does not contain extra attributes.</td>
</tr>

<tr>
<td>Many Super Keys can exist.</td>
<td>Only minimal Super Keys are Candidate Keys.</td>
</tr>

<tr>
<td>Not necessarily minimal.</td>
<td>Always minimal.</td>
</tr>

</table>

<h3>Interview Questions</h3>

<ol>

<li>What is a Super Key?</li>

<li>Can a Super Key contain multiple columns?</li>

<li>Can a Super Key contain unnecessary attributes?</li>

<li>Is every Candidate Key a Super Key?</li>

<li>Can there be multiple Super Keys in a table?</li>

</ol>

<h3>Class Summary</h3>

<ul>

<li>A Super Key uniquely identifies every record in a table.</li>

<li>It may consist of one or more columns.</li>

<li>It may contain extra attributes.</li>

<li>Every Candidate Key is a Super Key.</li>

<li>Not every Super Key is a Candidate Key.</li>

</ul>

<p>

<strong>Easy Trick to Remember:</strong>

</p>

<p>

<b>Super Key = Unique Identification + Extra Columns Allowed</b>

</p>

<p>

<strong>Homework:</strong>

Create a Student table with StudentID, RollNo, Email, Name, and Mobile Number.
Identify at least <strong>10 possible Super Keys</strong> from the table.

</p>

`;

let candidateKeyContent = `

<h3>Candidate Key</h3>

<p>
Good morning students!
Today we will learn about the <strong>Candidate Key</strong>, one of the most important concepts in Database Management Systems (DBMS).
</p>

<p>
In our previous lecture, we learned about <strong>Super Key</strong>. We know that a Super Key can uniquely identify every record in a table, but it may contain unnecessary (extra) attributes.
</p>

<p>
Today, we will learn how to remove those unnecessary attributes and obtain the <strong>Candidate Key</strong>.
</p>

<p>
<strong>What We Will Cover:</strong>
</p>

<ul>
    <li>What is a Candidate Key?</li>
    <li>Why Do We Need a Candidate Key?</li>
    <li>Characteristics of a Candidate Key</li>
    <li>Real-Life Example</li>
    <li>Database Example</li>
    <li>Difference Between Super Key and Candidate Key</li>
    <li>Advantages</li>
    <li>Disadvantages</li>
    <li>Interview Questions</li>
</ul>

<h4>What is a Candidate Key?</h4>

<p>
A <strong>Candidate Key</strong> is the minimum set of one or more columns that can uniquely identify every record in a table.
</p>

<p>
Unlike a Super Key, a Candidate Key <strong>does not contain any unnecessary (extra) attributes.</strong>
</p>

<p>
In simple words,
</p>

<p>
<strong>
A Candidate Key is the smallest possible Super Key that uniquely identifies each record.
</strong>
</p>

<h4>Why Do We Need a Candidate Key?</h4>

<p>
Suppose we have a Student table.
</p>

<p>
The following combinations can uniquely identify a student:
</p>

<ul>
<li>StudentID</li>
<li>RollNo</li>
<li>Email</li>
<li>StudentID + Name</li>
<li>RollNo + Name</li>
</ul>

<p>
Although all these combinations uniquely identify the student, some combinations contain unnecessary columns.
</p>

<p>
For example,
</p>

<pre>

StudentID + Name

</pre>

<p>
Here, <strong>StudentID</strong> alone is enough to identify the student.
The <strong>Name</strong> column is not required.
</p>

<div class="example-box">
StudentID + Name
</div>

<p>
This combination is a <strong>Super Key</strong> because it uniquely identifies every student.
However, it is <strong>not a Candidate Key</strong> because the <strong>Name</strong> column is an unnecessary (extra) attribute.
</p>

<h4>Real-Life Example</h4>

<p>
Imagine a school has the following student information:
</p>

<table class="notes-table">

<tr>
<th>Student ID</th>
<th>Roll No</th>
<th>Email</th>
<th>Name</th>
</tr>

<tr>
<td>101</td>
<td>BCA001</td>
<td>rahul@gmail.com</td>
<td>Rahul</td>
</tr>

<tr>
<td>102</td>
<td>BCA002</td>
<td>amit@gmail.com</td>
<td>Amit</td>
</tr>

<tr>
<td>103</td>
<td>BCA003</td>
<td>rohit@gmail.com</td>
<td>Rohit</td>
</tr>

</table>

<p>
In this table:
</p>

<ul>
<li>StudentID is unique.</li>
<li>RollNo is unique.</li>
<li>Email is unique.</li>
</ul>

<p>
Each of these columns alone can identify every student.
Therefore, they are Candidate Keys.
</p>

<h4>Database Example</h4>

<table class="notes-table">

<tr>
<th>StudentID</th>
<th>RollNo</th>
<th>Email</th>
<th>Name</th>
</tr>

<tr>
<td>101</td>
<td>BCA001</td>
<td>rahul@gmail.com</td>
<td>Rahul</td>
</tr>

<tr>
<td>102</td>
<td>BCA002</td>
<td>amit@gmail.com</td>
<td>Amit</td>
</tr>

<tr>
<td>103</td>
<td>BCA003</td>
<td>rohit@gmail.com</td>
<td>Rohit</td>
</tr>

</table>

<p>
Possible Super Keys are:
</p>

<ul>
<li>StudentID</li>
<li>RollNo</li>
<li>Email</li>
<li>StudentID + Name</li>
<li>RollNo + Name</li>
<li>Email + Name</li>
<li>StudentID + RollNo</li>
<li>StudentID + Email</li>
</ul>

<p>
Among these, the Candidate Keys are:
</p>

<ul>
<li>StudentID ✔</li>
<li>RollNo ✔</li>
<li>Email ✔</li>
</ul>

<p>
The remaining combinations are Super Keys because they contain extra attributes.
</p>

<h4>How to Find a Candidate Key?</h4>

<ol>

<li>Find all possible Super Keys.</li>

<li>Remove unnecessary columns from each Super Key.</li>

<li>The remaining minimal Super Keys are called Candidate Keys.</li>

</ol>

<h4>Characteristics of Candidate Key</h4>

<ul>

<li>Uniquely identifies every record.</li>

<li>Contains no unnecessary attributes.</li>

<li>Can consist of one or more columns.</li>

<li>There can be multiple Candidate Keys in a table.</li>

<li>One Candidate Key is selected as the Primary Key.</li>

</ul>

<h4>Difference Between Super Key and Candidate Key</h4>

<table class="notes-table">

<tr>
<th>Super Key</th>
<th>Candidate Key</th>
</tr>

<tr>
<td>May contain extra attributes.</td>
<td>Contains no extra attributes.</td>
</tr>

<tr>
<td>May not be minimal.</td>
<td>Always minimal.</td>
</tr>

<tr>
<td>Many Super Keys can exist.</td>
<td>One or more Candidate Keys can exist.</td>
</tr>

<tr>
<td>Every Candidate Key is a Super Key.</td>
<td>Not every Super Key is a Candidate Key.</td>
</tr>

</table>

<h4>Advantages of Candidate Key</h4>

<ul>

<li>Uniquely identifies every record.</li>

<li>Removes unnecessary columns.</li>

<li>Improves database efficiency.</li>

<li>Provides the basis for selecting the Primary Key.</li>

<li>Maintains data integrity.</li>

</ul>

<h4>Disadvantages of Candidate Key</h4>

<ul>

<li>Finding Candidate Keys in large databases can be difficult.</li>

<li>A table may have multiple Candidate Keys, making Primary Key selection important.</li>

</ul>

<h4>Interview Questions</h4>

<ol>

<li>What is a Candidate Key?</li>

<li>How is a Candidate Key different from a Super Key?</li>

<li>Can a table have more than one Candidate Key?</li>

<li>Can a Candidate Key contain unnecessary attributes?</li>

<li>Which Candidate Key becomes the Primary Key?</li>

</ol>

<h4>Class Summary</h4>

<ul>

<li>A Candidate Key is the smallest Super Key.</li>

<li>It uniquely identifies every record.</li>

<li>It never contains unnecessary attributes.</li>

<li>A table can have multiple Candidate Keys.</li>

<li>One Candidate Key is selected as the Primary Key.</li>

</ul>

<p>

<strong>Easy Trick to Remember:</strong> Candidate Key = Minimum Super Key (No Extra Columns)

</p>

<p>

<strong>Homework:</strong>

Create a Student table containing StudentID, RollNo, Email, MobileNo, and Name.
Identify all the Super Keys and then determine which of them are Candidate Keys.

</p>

`;

let primaryKeyContent = `

<h3>Primary Key</h3>

<p>
Good morning students!
Today we will learn about the <strong>Primary Key</strong>, one of the most important concepts in Database Management Systems (DBMS).
</p>

<p>
In our previous lecture, we learned about <strong>Candidate Key</strong>. We know that a table can have one or more Candidate Keys. Out of all the Candidate Keys, we select one key to uniquely identify every record in the table. This selected key is called the <strong>Primary Key</strong>.
</p>

<p>
<strong>What We Will Cover:</strong>
</p>

<ul>
    <li>What is a Primary Key?</li>
    <li>Why Do We Need a Primary Key?</li>
    <li>Characteristics of a Primary Key</li>
    <li>Real-Life Example</li>
    <li>Database Example</li>
    <li>SQL Syntax</li>
    <li>Advantages</li>
    <li>Disadvantages</li>
    <li>Difference Between Candidate Key and Primary Key</li>
    <li>Interview Questions</li>
</ul>

<h4>What is a Primary Key?</h4>

<p>
A <strong>Primary Key</strong> is a Candidate Key that is selected to uniquely identify every record in a database table.
</p>

<p>
Each table can have <strong>only one Primary Key</strong>.
</p>

<p>
A Primary Key cannot contain <strong>NULL</strong> values and cannot contain <strong>duplicate</strong> values.
</p>

<p>

<strong>Definition:</strong> A Primary Key is a column or a combination of columns that uniquely identifies every record in a table.

</p>

<h4>Why Do We Need a Primary Key?</h4>

<p>
Imagine a school has thousands of students.
Many students may have the same name, city, or class.
</p>

<h3>
For example:
</h3>

<table class="notes-table">

<tr>
<th>Student ID</th>
<th>Name</th>
<th>Class</th>
</tr>

<tr>
<td>101</td>
<td>Rahul</td>
<td>BCA</td>
</tr>

<tr>
<td>102</td>
<td>Rahul</td>
<td>BCA</td>
</tr>

<tr>
<td>103</td>
<td>Amit</td>
<td>BCA</td>
</tr>

</table>

<p>
There are two students with the name <strong>Rahul</strong>.
If the teacher wants to find a particular Rahul, the name alone is not sufficient.
</p>

<p>
However, the <strong>Student ID</strong> is unique for every student.
Therefore, Student ID is selected as the <strong>Primary Key</strong>.
</p>

<h4>Database Example</h4>

<table class="notes-table">

<tr>
<th>StudentID</th>
<th>RollNo</th>
<th>Email</th>
<th>Name</th>
</tr>

<tr>
<td>101</td>
<td>BCA001</td>
<td>rahul@gmail.com</td>
<td>Rahul</td>
</tr>

<tr>
<td>102</td>
<td>BCA002</td>
<td>amit@gmail.com</td>
<td>Amit</td>
</tr>

<tr>
<td>103</td>
<td>BCA003</td>
<td>rohit@gmail.com</td>
<td>Rohit</td>
</tr>

</table>

<p>
Possible Candidate Keys are:
</p>

<ul>
<li>StudentID</li>
<li>RollNo</li>
<li>Email</li>
</ul>

<p>
Among these Candidate Keys, suppose we choose <strong>StudentID</strong>.
Then,
</p>

<table class="notes-table">

<tr>
<th>Candidate Keys</th>
<th>Primary Key</th>
</tr>

<tr>
<td>StudentID, RollNo, Email</td>
<td>StudentID</td>
</tr>

</table>

<p>
Once StudentID is selected, it becomes the <strong>Primary Key</strong>.
The remaining Candidate Keys become <strong>Alternate Keys</strong>.
</p>

<h4>Characteristics of a Primary Key</h4>

<ul>

<li>Uniquely identifies every record.</li>

<li>Cannot contain duplicate values.</li>

<li>Cannot contain NULL values.</li>

<li>Each table can have only one Primary Key.</li>

<li>Can consist of one or more columns (Composite Primary Key).</li>

</ul>

<h4>SQL Syntax</h4>

<p><strong>Method 1: Defining Primary Key while creating the table</strong></p>

<pre>
CREATE TABLE Student(

StudentID NUMBER PRIMARY KEY,

Name VARCHAR2(50),

City VARCHAR2(30)

);
</pre>

<p><strong>Method 2: Using CONSTRAINT</strong></p>

<pre>
CREATE TABLE Student(

StudentID NUMBER,

Name VARCHAR2(50),

City VARCHAR2(30),

CONSTRAINT PK_Student
PRIMARY KEY(StudentID)

);
</pre>

<h4>What Happens if We Insert Duplicate Values?</h4>

<p>
Suppose the Student table already contains:
</p>

<table class="notes-table">

<tr>
<th>StudentID</th>
<th>Name</th>
</tr>

<tr>
<td>101</td>
<td>Rahul</td>
</tr>

<tr>
<td>102</td>
<td>Amit</td>
</tr>

</table>

<p>
Now we try to insert:
</p>

<pre>
INSERT INTO Student
VALUES(101,'Rohit');
</pre>

<p>
Oracle will display an error because the Primary Key value <strong>101</strong> already exists.
Duplicate values are not allowed.
</p>

<h4>What Happens if We Insert NULL?</h4>

<pre>
INSERT INTO Student
VALUES(NULL,'Rahul');
</pre>

<p>
Oracle will again display an error because a Primary Key cannot contain NULL values.
</p>

<h4>Advantages of Primary Key</h4>

<ul>

<li>Uniquely identifies every record.</li>

<li>Prevents duplicate records.</li>

<li>Does not allow NULL values.</li>

<li>Maintains data integrity.</li>

<li>Helps establish relationships with other tables.</li>

<li>Improves searching and indexing performance.</li>

</ul>

<h4>Disadvantages of Primary Key</h4>

<ul>

<li>Only one Primary Key is allowed per table.</li>

<li>Changing the Primary Key value may affect related tables.</li>

<li>Selecting an inappropriate Primary Key can reduce database efficiency.</li>

</ul>

<h4>Difference Between Candidate Key and Primary Key</h4>

<table class="notes-table">

<tr>
<th>Candidate Key</th>
<th>Primary Key</th>
</tr>

<tr>
<td>One or more Candidate Keys can exist.</td>
<td>Only one Primary Key is allowed.</td>
</tr>

<tr>
<td>May or may not be selected.</td>
<td>Always selected from Candidate Keys.</td>
</tr>

<tr>
<td>Uniquely identifies records.</td>
<td>Uniquely identifies records.</td>
</tr>

<tr>
<td>One Candidate Key becomes the Primary Key.</td>
<td>The selected Candidate Key becomes the Primary Key.</td>
</tr>

</table>

<h4>Interview Questions</h4>

<ol>

<li>What is a Primary Key?</li>

<li>Can a table have more than one Primary Key?</li>

<li>Can a Primary Key contain NULL values?</li>

<li>Can a Primary Key contain duplicate values?</li>

<li>What is the difference between Candidate Key and Primary Key?</li>

</ol>

<h4>Class Summary</h4>

<ul>

<li>A Primary Key uniquely identifies every record.</li>

<li>It is selected from the Candidate Keys.</li>

<li>Each table can have only one Primary Key.</li>

<li>A Primary Key cannot contain NULL values.</li>

<li>A Primary Key cannot contain duplicate values.</li>

<li>The remaining Candidate Keys become Alternate Keys.</li>

</ul>

<p>

<strong>Easy Trick to Remember:</strong>

</p>

<p>

<b>Primary Key = Selected Candidate Key + Unique + No NULL + No Duplicate</b>

</p>

<p>

<strong>Homework:</strong>

Create a <strong>Student</strong> table with StudentID, RollNo, Email, Name, and MobileNo.
Identify all Candidate Keys and choose one as the Primary Key.
Then try inserting a duplicate StudentID and a NULL StudentID. Observe the errors generated by Oracle.

</p>

`;

let alternateKeyContent = `

<h3>Alternate Key</h3>

<p>
Good morning students!
Today we will learn about the <strong>Alternate Key</strong>, another important type of key in Database Management Systems (DBMS).
</p>

<p>
In our previous lecture, we learned that a table can have multiple <strong>Candidate Keys</strong>, but only one of them is selected as the <strong>Primary Key</strong>.
</p>

<h3>
Now the question is:
</h3>

<p>
<strong>What happens to the remaining Candidate Keys?</strong>
The Candidate Keys that are <strong>not selected</strong> as the Primary Key are called <strong>Alternate Keys</strong>.

</p>




<h3>
What We Will Cover
</h3>

<ul>

<li>What is an Alternate Key?</li>

<li>Why Do We Need an Alternate Key?</li>

<li>Characteristics of an Alternate Key</li>

<li>Real-Life Example</li>

<li>Database Example</li>

<li>SQL Example</li>

<li>Advantages</li>

<li>Disadvantages</li>

<li>Difference Between Primary Key and Alternate Key</li>

<li>Interview Questions</li>

</ul>

<h3>
What is an Alternate Key?
</h3>

<p>

<strong>Definition:</strong> An Alternate Key is a Candidate Key that is <strong>not selected</strong> as the Primary Key.

</p>

<p>

In simple words, if a table has multiple Candidate Keys, only one becomes the Primary Key, and all the remaining Candidate Keys become Alternate Keys.

</p>

<h3>
Why Do We Need an Alternate Key?
</h3>

<p>

Suppose a Student table contains three Candidate Keys:

</p>

<ul>

<li>StudentID</li>

<li>RollNo</li>

<li>Email</li>

</ul>

<p>

Only one Candidate Key can become the Primary Key.

Suppose we select <strong>StudentID</strong> as the Primary Key.

Then,

</p>

<ul>

<li>RollNo becomes an Alternate Key.</li>

<li>Email becomes an Alternate Key.</li>

</ul>

<p>

Although RollNo and Email are not Primary Keys, they still uniquely identify every student.

</p>

<h3>
Example: Student Table
</h3>

<table class="notes-table">

<tr>

<th>StudentID</th>

<th>RollNo</th>

<th>Email</th>

<th>Name</th>

</tr>

<tr>

<td>101</td>

<td>BCA001</td>

<td>rahul@gmail.com</td>

<td>Rahul</td>

</tr>

<tr>

<td>102</td>

<td>BCA002</td>

<td>amit@gmail.com</td>

<td>Amit</td>

</tr>

<tr>

<td>103</td>

<td>BCA003</td>

<td>rohit@gmail.com</td>

<td>Rohit</td>

</tr>

</table>

<h3>
Identify the Keys
</h3>

<table class="notes-table">

<tr>

<th>Candidate Keys</th>

<th>Selected Primary Key</th>

<th>Alternate Keys</th>

</tr>

<tr>

<td>StudentID, RollNo, Email</td>

<td>StudentID</td>

<td>RollNo, Email</td>

</tr>

</table>

<p>

<strong>Remember:</strong> Every Alternate Key is a Candidate Key, but it is not selected as the Primary Key.

</p>

<h3>
Real-Life Example
</h3>

<p>

Imagine a school assigns the following information to every student:

</p>

<ul>

<li>Student ID</li>

<li>Roll Number</li>

<li>Aadhaar Number</li>

</ul>

<p>

All three values are unique.

The school chooses <strong>Student ID</strong> as the Primary Key.

The remaining unique values:

</p>

<ul>

<li>Roll Number</li>

<li>Aadhaar Number</li>

</ul>

<p>

become the <strong>Alternate Keys</strong>.

</p>

<h3>
Characteristics of Alternate Key
</h3>

<ul>

<li>It is a Candidate Key.</li>

<li>It uniquely identifies every record.</li>

<li>It is not selected as the Primary Key.</li>

<li>A table can have multiple Alternate Keys.</li>

<li>Alternate Keys should also contain unique values.</li>

</ul>

<h3>
SQL Example
</h3>

<pre>
CREATE TABLE Student(

StudentID NUMBER PRIMARY KEY,

RollNo VARCHAR2(20) UNIQUE,

Email VARCHAR2(50) UNIQUE,

Name VARCHAR2(50)

);
</pre>

<p>

In this example:

</p>

<ul>

<li>StudentID → Primary Key</li>

<li>RollNo → Alternate Key</li>

<li>Email → Alternate Key</li>

</ul>

<p>

The <strong>UNIQUE</strong> constraint is generally used to implement Alternate Keys in SQL.

</p>

<h3>
Advantages of Alternate Key
</h3>

<ul>

<li>Provides additional unique identifiers.</li>

<li>Prevents duplicate values.</li>

<li>Improves data integrity.</li>

<li>Allows flexibility while selecting the Primary Key.</li>

<li>Helps maintain accurate records.</li>

</ul>

<h3>
Disadvantages of Alternate Key
</h3>

<ul>

<li>Cannot replace the Primary Key completely.</li>

<li>Requires additional UNIQUE constraints.</li>

<li>Too many Alternate Keys can make table design complex.</li>

</ul>

<h3>
Difference Between Primary Key and Alternate Key
</h3>

<table class="notes-table">

<tr>

<th>Primary Key</th>

<th>Alternate Key</th>

</tr>

<tr>

<td>Selected Candidate Key</td>

<td>Remaining Candidate Keys</td>

</tr>

<tr>

<td>Only one Primary Key is allowed.</td>

<td>There can be multiple Alternate Keys.</td>

</tr>

<tr>

<td>Cannot contain NULL values.</td>

<td>Generally implemented using UNIQUE constraints.</td>

</tr>

<tr>

<td>Main identifier of the table.</td>

<td>Additional unique identifiers.</td>

</tr>

</table>

<h3>
Interview Questions
</h3>

<ol>

<li>What is an Alternate Key?</li>

<li>How is an Alternate Key created?</li>

<li>Can a table have multiple Alternate Keys?</li>

<li>What is the relationship between Candidate Key and Alternate Key?</li>

<li>Which SQL constraint is commonly used for an Alternate Key?</li>

</ol>

<h3>
Class Summary
</h3>

<ul>

<li>A table may have multiple Candidate Keys.</li>

<li>Only one Candidate Key becomes the Primary Key.</li>

<li>The remaining Candidate Keys become Alternate Keys.</li>

<li>Alternate Keys also uniquely identify records.</li>

<li>Alternate Keys are commonly implemented using the UNIQUE constraint.</li>

</ul>

<p>

<strong>Easy Trick to Remember:</strong>

</p>

<p>

<b>Candidate Keys − Primary Key = Alternate Keys</b>

</p>

<h3>
Homework
</h3>

<p>

Create a <strong>Student</strong> table with the following columns:

</p>

<ul>

<li>StudentID</li>

<li>RollNo</li>

<li>Email</li>

<li>AadhaarNo</li>

<li>Name</li>

</ul>

<p>

Identify all the Candidate Keys.

Choose one Candidate Key as the Primary Key.

Identify the remaining Alternate Keys.

</p>

`;

let compositeKeyContent = `

<h3>Composite Key</h3>

<p>

Good morning students!

Today we will learn about the <strong>Composite Key</strong>, an important type of key in Database Management Systems (DBMS).

</p>

<p>

In our previous lectures, we learned that a <strong>Primary Key</strong> uniquely identifies every record in a table. Usually, a Primary Key consists of a single column such as StudentID or EmployeeID.

However, there are situations where <strong>one column alone is not enough</strong> to uniquely identify a record. In such cases, we combine two or more columns to form a <strong>Composite Key</strong>.

</p>

<h3>
What We Will Cover
</h3>

<ul>

<li>What is a Composite Key?</li>

<li>Why Do We Need a Composite Key?</li>

<li>Characteristics of a Composite Key</li>

<li>Real-Life Example</li>

<li>Database Example</li>

<li>SQL Example</li>

<li>Advantages</li>

<li>Disadvantages</li>

<li>Difference Between Primary Key and Composite Key</li>

<li>Interview Questions</li>

</ul>

<h3>
What is a Composite Key?
</h3>

<p>

<strong>Definition:</strong> A Composite Key is a key that is created by combining <strong>two or more columns</strong> to uniquely identify each record in a table.

</p>

<p>

In simple words, when a single column cannot uniquely identify a record, we combine multiple columns to create one unique identifier.

</p>

<h3>
Why Do We Need a Composite Key?
</h3>

<p>

Suppose a student can enroll in multiple courses.

Similarly, one course can have many students.

If we create an <strong>Enrollment</strong> table, then:

</p>

<ul>

<li>StudentID can appear multiple times.</li>

<li>CourseID can also appear multiple times.</li>

</ul>

<p>

Therefore, neither StudentID nor CourseID alone can uniquely identify an enrollment record.

However, the combination of <strong>StudentID + CourseID</strong> uniquely identifies each enrollment.

This combination becomes the <strong>Composite Key</strong>.

</p>

<h3>
Example: Enrollment Table
</h3>

<table class="notes-table">

<tr>
<th>StudentID</th>
<th>CourseID</th>
<th>Course Name</th>
</tr>

<tr>
<td>101</td>
<td>C101</td>
<td>Java</td>
</tr>

<tr>
<td>101</td>
<td>C102</td>
<td>Python</td>
</tr>

<tr>
<td>102</td>
<td>C101</td>
<td>Java</td>
</tr>

<tr>
<td>103</td>
<td>C103</td>
<td>Oracle</td>
</tr>

</table>

<p>

Notice carefully:

</p>

<ul>

<li>StudentID <strong>101</strong> appears twice.</li>

<li>CourseID <strong>C101</strong> also appears twice.</li>

<li>But the combination <strong>(101, C101)</strong> appears only once.</li>

</ul>

<p>

Therefore,

<strong>StudentID + CourseID</strong> forms a Composite Key.

</p>

<h3>
How Does a Composite Key Work?
</h3>

<table class="notes-table">

<tr>
<th>StudentID</th>
<th>CourseID</th>
<th>Unique?</th>
</tr>

<tr>
<td>101</td>
<td>—</td>
<td>❌ No</td>
</tr>

<tr>
<td>—</td>
<td>C101</td>
<td>❌ No</td>
</tr>

<tr>
<td>101</td>
<td>C101</td>
<td>✅ Yes</td>
</tr>

</table>

<p>

<strong>Important Point:</strong> Neither StudentID nor CourseID is unique individually, but together they uniquely identify each record.

</p>

<h3>
Real-Life Example
</h3>

<p>

Imagine a school maintains an attendance register.

</p>

<table class="notes-table">

<tr>
<th>StudentID</th>
<th>Date</th>
<th>Status</th>
</tr>

<tr>
<td>101</td>
<td>01-Jan-2026</td>
<td>Present</td>
</tr>

<tr>
<td>101</td>
<td>02-Jan-2026</td>
<td>Absent</td>
</tr>

<tr>
<td>102</td>
<td>01-Jan-2026</td>
<td>Present</td>
</tr>

</table>

<p>

Here,

</p>

<ul>

<li>StudentID alone is not unique.</li>

<li>Date alone is also not unique.</li>

<li>StudentID + Date uniquely identifies one attendance record.</li>

</ul>

<p>

Therefore, <strong>StudentID + Date</strong> is a Composite Key.

</p>

<h3>
SQL Example
</h3>

<pre>
CREATE TABLE Enrollment(

StudentID NUMBER,

CourseID VARCHAR2(10),

EnrollmentDate DATE,

PRIMARY KEY(StudentID, CourseID)

);
</pre>

<p>

In this example,

</p>

<ul>

<li>StudentID alone is not the Primary Key.</li>

<li>CourseID alone is not the Primary Key.</li>

<li>The combination of StudentID and CourseID forms the Composite Primary Key.</li>

</ul>

<h3>
Characteristics of Composite Key
</h3>

<ul>

<li>Consists of two or more columns.</li>

<li>Uniquely identifies every record.</li>

<li>Used when a single column is not sufficient.</li>

<li>Cannot contain duplicate combinations.</li>

<li>Can be used as a Primary Key.</li>

</ul>

<h3>
Advantages of Composite Key
</h3>

<ul>

<li>Uniquely identifies records when one column is not enough.</li>

<li>Prevents duplicate combinations.</li>

<li>Maintains data integrity.</li>

<li>Represents many-to-many relationships effectively.</li>

<li>Reduces the need for creating an additional ID column.</li>

</ul>

<h3>
Disadvantages of Composite Key
</h3>

<ul>

<li>Queries become slightly more complex.</li>

<li>Indexes become larger.</li>

<li>Joins may be slower if many columns are used.</li>

<li>Difficult to remember compared to a single-column Primary Key.</li>

</ul>

<h3>
Difference Between Primary Key and Composite Key
</h3>

<table class="notes-table">

<tr>
<th>Primary Key</th>
<th>Composite Key</th>
</tr>

<tr>
<td>May contain one or more columns.</td>
<td>Always consists of two or more columns.</td>
</tr>

<tr>
<td>Can be a single-column key.</td>
<td>Cannot be a single-column key.</td>
</tr>

<tr>
<td>Uniquely identifies records.</td>
<td>Also uniquely identifies records.</td>
</tr>

<tr>
<td>Example: StudentID</td>
<td>Example: StudentID + CourseID</td>
</tr>

</table>

<h3>
Interview Questions
</h3>

<ol>

<li>What is a Composite Key?</li>

<li>Why do we use a Composite Key?</li>

<li>Can a Composite Key contain two or more columns?</li>

<li>Can a Composite Key be a Primary Key?</li>

<li>Give a real-life example of a Composite Key.</li>

</ol>

<h3>
Class Summary
</h3>

<ul>

<li>A Composite Key is made by combining two or more columns.</li>

<li>It is used when one column alone cannot uniquely identify a record.</li>

<li>The combination of columns must always be unique.</li>

<li>A Composite Key can be used as a Primary Key.</li>

<li>Common examples include StudentID + CourseID and StudentID + Date.</li>

</ul>

<p>

<strong>Easy Trick to Remember:</strong>

</p>

<p>

<b>Composite Key = Two or More Columns Working Together to Uniquely Identify a Record</b>

</p>

<h3>
Homework
</h3>

<p>

Create an <strong>Enrollment</strong> table with StudentID, CourseID, EnrollmentDate, and Marks.

Identify the Composite Key and write the SQL statement to create the table using a Composite Primary Key.

</p>

`;

let foreignKeyContent = `

<h3>Foreign Key</h3>

<p>

Good morning students!

Today we will learn about the <strong>Foreign Key</strong>, one of the most important concepts in Database Management Systems (DBMS).

</p>

<p>

In our previous lectures, we learned that a <strong>Primary Key</strong> uniquely identifies every record in a table.

Now, the question is:

<strong>How do we connect two or more tables in a database?</strong>

The answer is by using a <strong>Foreign Key</strong>.

</p>

<h3>
What We Will Cover
</h3>

<ul>

<li>What is a Foreign Key?</li>

<li>Why Do We Need a Foreign Key?</li>

<li>Parent Table and Child Table</li>

<li>Referential Integrity</li>

<li>Multiple Real-Life Examples</li>

<li>SQL Examples</li>

<li>Characteristics</li>

<li>Advantages</li>

<li>Disadvantages</li>

<li>Difference Between Primary Key and Foreign Key</li>

<li>Interview Questions</li>

</ul>

<h3>
What is a Foreign Key?
</h3>

<p>

<strong>Definition:</strong> A Foreign Key is a column (or combination of columns) in one table that refers to the Primary Key of another table.

</p>

<p>

In simple words, a Foreign Key is used to create a relationship between two tables.

</p>

<h3>
Why Do We Need a Foreign Key?
</h3>

<p>

Imagine a college database.

There are two tables:

</p>

<ul>

<li>Department</li>

<li>Student</li>

</ul>

<p>

Every student belongs to one department.

Instead of writing the department name again and again in the Student table, we store only the Department ID.

This Department ID comes from the Department table.

This is called a <strong>Foreign Key</strong>.

</p>

<h3>
Example 1: Department and Student
</h3>

<h3>
Department Table (Parent Table)
</h3>

<table class="notes-table">

<tr>

<th>DeptID (PK)</th>

<th>Department Name</th>

</tr>

<tr>

<td>10</td>

<td>Computer Science</td>

</tr>

<tr>

<td>20</td>

<td>Mechanical</td>

</tr>

<tr>

<td>30</td>

<td>Civil</td>

</tr>

</table>

<h3>
Student Table (Child Table)
</h3>

<table class="notes-table">

<tr>

<th>StudentID (PK)</th>

<th>Name</th>

<th>DeptID (FK)</th>

</tr>

<tr>

<td>101</td>

<td>Rahul</td>

<td>10</td>

</tr>

<tr>

<td>102</td>

<td>Amit</td>

<td>20</td>

</tr>

<tr>

<td>103</td>

<td>Rohit</td>

<td>10</td>

</tr>

</table>

<p>

<strong>Explanation:</strong>

Student table contains <strong>DeptID</strong>.

This DeptID refers to the Primary Key of the Department table.

Therefore, DeptID in the Student table is the <strong>Foreign Key</strong>.

</p>

<h3>
SQL Example
</h3>

<pre>
CREATE TABLE Department(

DeptID NUMBER PRIMARY KEY,

DeptName VARCHAR2(50)

);

CREATE TABLE Student(

StudentID NUMBER PRIMARY KEY,

Name VARCHAR2(50),

DeptID NUMBER,

FOREIGN KEY (DeptID)

REFERENCES Department(DeptID)

);
</pre>

<h3>
Example 2: Customer and Orders
</h3>

<h3>
Customer Table (Parent Table)
</h3>

<table class="notes-table">

<tr>

<th>CustomerID (PK)</th>

<th>Name</th>

</tr>

<tr>

<td>1</td>

<td>Rahul</td>

</tr>

<tr>

<td>2</td>

<td>Amit</td>

</tr>

</table>

<h3>
Orders Table (Child Table)
</h3>

<table class="notes-table">

<tr>

<th>OrderID (PK)</th>

<th>CustomerID (FK)</th>

<th>Amount</th>

</tr>

<tr>

<td>1001</td>

<td>1</td>

<td>500</td>

</tr>

<tr>

<td>1002</td>

<td>1</td>

<td>1200</td>

</tr>

<tr>

<td>1003</td>

<td>2</td>

<td>700</td>

</tr>

</table>

<p>

<strong>Explanation:</strong>

One customer can place many orders.

CustomerID in the Orders table is the Foreign Key.

</p>

<h3>
Example 3: Teacher and Subject
</h3>

<h3>
Teacher Table
</h3>

<table class="notes-table">

<tr>

<th>TeacherID (PK)</th>

<th>Teacher Name</th>

</tr>

<tr>

<td>1</td>

<td>Mr. Sharma</td>

</tr>

<tr>

<td>2</td>

<td>Mrs. Gupta</td>

</tr>

</table>

<h3>
Subject Table
</h3>

<table class="notes-table">

<tr>

<th>SubjectID (PK)</th>

<th>Subject Name</th>

<th>TeacherID (FK)</th>

</tr>

<tr>

<td>101</td>

<td>Oracle</td>

<td>1</td>

</tr>

<tr>

<td>102</td>

<td>Java</td>

<td>1</td>

</tr>

<tr>

<td>103</td>

<td>Python</td>

<td>2</td>

</tr>

</table>

<p>

One teacher can teach multiple subjects.

TeacherID in the Subject table is the Foreign Key.

</p>

<h3>
Example 4: Bank and Account
</h3>

<table class="notes-table">

<tr>

<th>CustomerID (PK)</th>

<th>Name</th>

</tr>

<tr>

<td>101</td>

<td>Rahul</td>

</tr>

<tr>

<td>102</td>

<td>Amit</td>

</tr>

</table>

<br>

<table class="notes-table">

<tr>

<th>AccountNo (PK)</th>

<th>CustomerID (FK)</th>

<th>Balance</th>

</tr>

<tr>

<td>5001</td>

<td>101</td>

<td>15000</td>

</tr>

<tr>

<td>5002</td>

<td>101</td>

<td>50000</td>

</tr>

<tr>

<td>5003</td>

<td>102</td>

<td>20000</td>

</tr>

</table>

<p>

One customer can have multiple bank accounts.

CustomerID is the Foreign Key.

</p>

<h3>
Parent Table and Child Table
</h3>

<table class="notes-table">

<tr>

<th>Parent Table</th>

<th>Child Table</th>

</tr>

<tr>

<td>Contains Primary Key</td>

<td>Contains Foreign Key</td>

</tr>

<tr>

<td>Department</td>

<td>Student</td>

</tr>

<tr>

<td>Customer</td>

<td>Orders</td>

</tr>

<tr>

<td>Teacher</td>

<td>Subject</td>

</tr>

</table>

<h3>
Referential Integrity
</h3>

<p>

<strong>Definition:</strong> Referential Integrity ensures that every Foreign Key value must exist in the referenced Parent Table.

</p>

<h3>
Example
</h3>

<p>

Department table contains only these Department IDs:

</p>

<table class="notes-table">

<tr>

<th>DeptID</th>

</tr>

<tr>

<td>10</td>

</tr>

<tr>

<td>20</td>

</tr>

<tr>

<td>30</td>

</tr>

</table>

<p>

Now suppose we try to insert:

</p>

<pre>
INSERT INTO Student
VALUES(104,'Ankit',40);
</pre>

<p>

Oracle will display an error because Department ID <strong>40</strong> does not exist in the Department table.

This rule is called <strong>Referential Integrity</strong>.

</p>

<h3>
Characteristics of Foreign Key
</h3>

<ul>

<li>Creates a relationship between two tables.</li>

<li>References the Primary Key of another table.</li>

<li>Duplicate values are allowed.</li>

<li>NULL values are allowed (unless restricted).</li>

<li>A table can have multiple Foreign Keys.</li>

</ul>

<h3>
Advantages of Foreign Key
</h3>

<ul>

<li>Creates relationships between tables.</li>

<li>Maintains data integrity.</li>

<li>Reduces duplicate data.</li>

<li>Improves database consistency.</li>

<li>Supports relational database design.</li>

</ul>

<h3>
Disadvantages of Foreign Key
</h3>

<ul>

<li>Insert and update operations may become slightly slower.</li>

<li>Incorrect relationships may cause errors.</li>

<li>Complex databases may contain many Foreign Keys.</li>

</ul>

<h3>
Difference Between Primary Key and Foreign Key
</h3>

<table class="notes-table">

<tr>

<th>Primary Key</th>

<th>Foreign Key</th>

</tr>

<tr>

<td>Uniquely identifies records.</td>

<td>Creates relationships between tables.</td>

</tr>

<tr>

<td>Cannot contain NULL values.</td>

<td>Can contain NULL values.</td>

</tr>

<tr>

<td>Duplicate values are not allowed.</td>

<td>Duplicate values are allowed.</td>

</tr>

<tr>

<td>Only one Primary Key per table.</td>

<td>Multiple Foreign Keys are allowed.</td>

</tr>

<tr>

<td>Exists in Parent Table.</td>

<td>Exists in Child Table.</td>

</tr>

</table>

<h3>
Interview Questions
</h3>

<ol>

<li>What is a Foreign Key?</li>

<li>Why do we use a Foreign Key?</li>

<li>What is the difference between Parent Table and Child Table?</li>

<li>Can a Foreign Key contain duplicate values?</li>

<li>Can a table have multiple Foreign Keys?</li>

<li>What is Referential Integrity?</li>

<li>Can a Foreign Key contain NULL values?</li>

</ol>

<h3>
Class Summary
</h3>

<ul>

<li>A Foreign Key creates a relationship between two tables.</li>

<li>It always references the Primary Key of another table.</li>

<li>The table containing the Primary Key is called the Parent Table.</li>

<li>The table containing the Foreign Key is called the Child Table.</li>

<li>Foreign Keys maintain Referential Integrity.</li>

<li>Duplicate values are allowed in a Foreign Key.</li>

<li>A table can have multiple Foreign Keys.</li>

</ul>

<p>

<strong>Easy Trick to Remember:</strong>

</p>

<p>

<b>Primary Key identifies records, while Foreign Key connects tables.</b>

</p>

<h3>
Homework
</h3>

<p>

Create the following tables using Oracle SQL:

</p>

<ul>

<li>Department and Student</li>

<li>Customer and Orders</li>

<li>Teacher and Subject</li>

<li>Bank Customer and Account</li>

</ul>

<p>

Identify the Primary Key and Foreign Key in each example and explain the relationship between the tables.

</p>

`;

let uniqueKeyContent = `

<h3>Unique Key</h3>

<p>

Good morning students!

Today we will learn about the <strong>Unique Key</strong>, one of the most useful constraints in Database Management Systems (DBMS).

</p>

<p>

In our previous lectures, we learned about the <strong>Primary Key</strong>. A Primary Key uniquely identifies every record in a table.

But what if we have another column that should also contain unique values, such as <strong>Email</strong>, <strong>Mobile Number</strong>, or <strong>Aadhaar Number</strong>?

In such cases, we use a <strong>Unique Key</strong>.

</p>

<h3>
What We Will Cover
</h3>

<ul>

<li>What is a Unique Key?</li>

<li>Why Do We Need a Unique Key?</li>

<li>Characteristics of a Unique Key</li>

<li>Multiple Real-Life Examples</li>

<li>SQL Examples</li>

<li>Advantages</li>

<li>Disadvantages</li>

<li>Difference Between Primary Key and Unique Key</li>

<li>Interview Questions</li>

</ul>

<h3>
What is a Unique Key?
</h3>

<p>

<strong>Definition:</strong> A Unique Key is a column or a combination of columns that ensures all values are unique in a table.

</p>

<p>

In simple words, a Unique Key prevents duplicate values from being stored in a column.

</p>

<p>

Unlike a Primary Key, a Unique Key can allow <strong>one NULL value</strong> in Oracle.

</p>

<h3>
Why Do We Need a Unique Key?
</h3>

<p>

Suppose every student has a unique Email ID.

No two students can have the same Email address.

To prevent duplicate Email IDs, we use a <strong>Unique Key</strong>.

</p>

<h3>
Example 1: Student Table
</h3>

<table class="notes-table">

<tr>
<th>StudentID (PK)</th>
<th>Name</th>
<th>Email (Unique)</th>
</tr>

<tr>
<td>101</td>
<td>Rahul</td>
<td>rahul@gmail.com</td>
</tr>

<tr>
<td>102</td>
<td>Amit</td>
<td>amit@gmail.com</td>
</tr>

<tr>
<td>103</td>
<td>Rohit</td>
<td>rohit@gmail.com</td>
</tr>

</table>

<p>

Every Email address is different.

Therefore, Email should have a <strong>Unique Key</strong>.

</p>

<h3>
Example 2: Employee Table
</h3>

<table class="notes-table">

<tr>
<th>EmpID (PK)</th>
<th>Name</th>
<th>Mobile Number (Unique)</th>
</tr>

<tr>
<td>1</td>
<td>Rahul</td>
<td>9876543210</td>
</tr>

<tr>
<td>2</td>
<td>Amit</td>
<td>9123456789</td>
</tr>

<tr>
<td>3</td>
<td>Rohit</td>
<td>9988776655</td>
</tr>

</table>

<p>

Every employee should have a different mobile number.

Therefore, Mobile Number should be declared as a Unique Key.

</p>

<h3>
Example 3: Citizen Database
</h3>

<table class="notes-table">

<tr>
<th>CitizenID (PK)</th>
<th>Name</th>
<th>Aadhaar Number (Unique)</th>
</tr>

<tr>
<td>1</td>
<td>Rahul</td>
<td>123456789012</td>
</tr>

<tr>
<td>2</td>
<td>Amit</td>
<td>987654321012</td>
</tr>

<tr>
<td>3</td>
<td>Rohit</td>
<td>456789123456</td>
</tr>

</table>

<p>

No two citizens can have the same Aadhaar Number.

Therefore, Aadhaar Number should have a Unique Key.

</p>

<h3>
SQL Example 1
</h3>

<pre>
CREATE TABLE Student(

StudentID NUMBER PRIMARY KEY,

Name VARCHAR2(50),

Email VARCHAR2(100) UNIQUE

);
</pre>

<h3>
SQL Example 2
</h3>

<pre>
CREATE TABLE Employee(

EmpID NUMBER PRIMARY KEY,

EmpName VARCHAR2(50),

MobileNo VARCHAR2(15) UNIQUE,

Email VARCHAR2(100) UNIQUE

);
</pre>

<p>

In this example,

</p>

<ul>

<li>EmpID is the Primary Key.</li>

<li>MobileNo is a Unique Key.</li>

<li>Email is also a Unique Key.</li>

</ul>

<p>

<strong>Important Point:</strong> A table can have multiple Unique Keys, but only one Primary Key.

</p>

<h3>
What Happens if Duplicate Values are Inserted?
</h3>

<p>

Suppose the Student table already contains:

</p>

<table class="notes-table">

<tr>
<th>StudentID</th>
<th>Email</th>
</tr>

<tr>
<td>101</td>
<td>rahul@gmail.com</td>
</tr>

</table>

<p>

Now we execute the following SQL statement:

</p>

<pre>
INSERT INTO Student
VALUES(102,'Amit','rahul@gmail.com');
</pre>

<p>

Oracle will display an error because the Email value already exists.

Duplicate values are not allowed in a Unique Key.

</p>

<h3>
What Happens if NULL is Inserted?
</h3>

<pre>
INSERT INTO Student
VALUES(103,'Rohit',NULL);
</pre>

<p>

Oracle allows one NULL value in a Unique Key.

However, duplicate non-NULL values are not allowed.

</p>

<h3>
Characteristics of Unique Key
</h3>

<ul>

<li>Ensures unique values.</li>

<li>Prevents duplicate values.</li>

<li>Can allow one NULL value in Oracle.</li>

<li>A table can have multiple Unique Keys.</li>

<li>Can be applied to one or more columns.</li>

</ul>

<h3>
Advantages of Unique Key
</h3>

<ul>

<li>Prevents duplicate data.</li>

<li>Maintains data integrity.</li>

<li>Improves data accuracy.</li>

<li>Allows multiple unique columns in a table.</li>

<li>Useful for Email, Mobile Number, Aadhaar Number, Passport Number, etc.</li>

</ul>

<h3>
Disadvantages of Unique Key
</h3>

<ul>

<li>Cannot replace the Primary Key.</li>

<li>Incorrect selection may increase database complexity.</li>

<li>Additional checking is required during insert and update operations.</li>

</ul>

<h3>
Difference Between Primary Key and Unique Key
</h3>

<table class="notes-table">

<tr>

<th>Primary Key</th>

<th>Unique Key</th>

</tr>

<tr>

<td>Only one Primary Key is allowed.</td>

<td>Multiple Unique Keys are allowed.</td>

</tr>

<tr>

<td>Does not allow NULL values.</td>

<td>Allows one NULL value in Oracle.</td>

</tr>

<tr>

<td>Uniquely identifies every record.</td>

<td>Prevents duplicate values.</td>

</tr>

<tr>

<td>Main identifier of the table.</td>

<td>Additional unique columns.</td>

</tr>

</table>

<h3>
Primary Key vs Unique Key Example
</h3>

<table class="notes-table">

<tr>

<th>StudentID</th>

<th>Email</th>

<th>Primary Key</th>

<th>Unique Key</th>

</tr>

<tr>

<td>101</td>

<td>rahul@gmail.com</td>

<td>✔</td>

<td>✔</td>

</tr>

<tr>

<td>102</td>

<td>amit@gmail.com</td>

<td>✔</td>

<td>✔</td>

</tr>

</table>

<p>

<strong>Explanation:</strong>

StudentID is used as the Primary Key because it is the main identifier of the table.

Email is declared as a Unique Key because every student must have a different Email address.

</p>

<h3>
Interview Questions
</h3>

<ol>

<li>What is a Unique Key?</li>

<li>What is the difference between Primary Key and Unique Key?</li>

<li>Can a table have multiple Unique Keys?</li>

<li>Can a Unique Key contain NULL values?</li>

<li>Can duplicate values be inserted into a Unique Key?</li>

</ol>

<h3>
Class Summary
</h3>

<ul>

<li>A Unique Key prevents duplicate values.</li>

<li>A table can have multiple Unique Keys.</li>

<li>A Unique Key can allow one NULL value in Oracle.</li>

<li>Primary Key is the main identifier, whereas Unique Key is used for additional unique columns.</li>

<li>Common examples include Email, Mobile Number, Aadhaar Number, PAN Number, Passport Number, and Driving License Number.</li>

</ul>

<p>

<strong>Easy Trick to Remember:</strong>

</p>

<p>

<b>Primary Key = Main Identity</b><br>

<b>Unique Key = Additional Unique Identity</b>

</p>

<h3>
Homework
</h3>

<p>

Create an <strong>Employee</strong> table with the following columns:

</p>

<ul>

<li>EmpID</li>

<li>EmpName</li>

<li>Email</li>

<li>Mobile Number</li>

<li>PAN Number</li>

</ul>

<p>

Make EmpID the Primary Key.

Apply the Unique Key to Email, Mobile Number, and PAN Number.

Then try inserting duplicate Email and Mobile Number values. Observe the Oracle errors.

</p>

`;

let sqlKeysComparisonContent = `

<h3>Difference Between SQL Keys</h3>

<p>

Good morning students!

In our previous lectures, we learned about different types of SQL Keys such as Super Key, Candidate Key, Primary Key, Alternate Key, Composite Key, Foreign Key, and Unique Key.

Now, let us compare all these keys in one place so that we can understand their differences more clearly.

</p>

<h3>
Why Do We Compare SQL Keys?
</h3>

<p>

Many students get confused between different types of keys because they all help identify records or maintain relationships.

Comparing them side by side makes it easier to understand when and where each key is used.

</p>

<h3>
Difference Between SQL Keys
</h3>

<table class="notes-table">

<tr>

<th>Key</th>

<th>Purpose</th>

<th>Duplicate Values</th>

<th>NULL Values</th>

<th>Number Allowed</th>

</tr>

<tr>

<td><strong>Super Key</strong></td>

<td>Uniquely identifies every record. May contain extra attributes.</td>

<td>Not Allowed</td>

<td>Not Allowed</td>

<td>Many</td>

</tr>

<tr>

<td><strong>Candidate Key</strong></td>

<td>Minimum Super Key without unnecessary attributes.</td>

<td>Not Allowed</td>

<td>Not Allowed</td>

<td>One or More</td>

</tr>

<tr>

<td><strong>Primary Key</strong></td>

<td>Main key selected from Candidate Keys.</td>

<td>Not Allowed</td>

<td>Not Allowed</td>

<td>Only One</td>

</tr>

<tr>

<td><strong>Alternate Key</strong></td>

<td>Candidate Keys that are not selected as Primary Key.</td>

<td>Not Allowed</td>

<td>Not Allowed</td>

<td>One or More</td>

</tr>

<tr>

<td><strong>Composite Key</strong></td>

<td>Combination of two or more columns used to uniquely identify records.</td>

<td>Not Allowed</td>

<td>Not Allowed</td>

<td>One or More</td>

</tr>

<tr>

<td><strong>Foreign Key</strong></td>

<td>Creates a relationship between two tables.</td>

<td>Allowed</td>

<td>Allowed</td>

<td>One or More</td>

</tr>

<tr>

<td><strong>Unique Key</strong></td>

<td>Ensures that values remain unique.</td>

<td>Not Allowed</td>

<td>One NULL Allowed (Oracle)</td>

<td>Multiple</td>

</tr>

</table>

<h3>
Quick Comparison
</h3>

<table class="notes-table">

<tr>

<th>Question</th>

<th>Answer</th>

</tr>

<tr>

<td>Which key is the parent of all keys?</td>

<td>Super Key</td>

</tr>

<tr>

<td>Which key is the smallest Super Key?</td>

<td>Candidate Key</td>

</tr>

<tr>

<td>Which Candidate Key is selected for the table?</td>

<td>Primary Key</td>

</tr>

<tr>

<td>What happens to the remaining Candidate Keys?</td>

<td>They become Alternate Keys.</td>

</tr>

<tr>

<td>Which key consists of two or more columns?</td>

<td>Composite Key</td>

</tr>

<tr>

<td>Which key connects two tables?</td>

<td>Foreign Key</td>

</tr>

<tr>

<td>Which key prevents duplicate values?</td>

<td>Unique Key</td>

</tr>

</table>

<h3>
Relationship Between SQL Keys
</h3>

<pre>

Super Key
     │
     ▼
Candidate Key
     │
     ├──────────────► Primary Key
     │
     └──────────────► Alternate Key

Composite Key
(Used when two or more columns form a key)

Primary Key
     │
     ▼
Foreign Key
(Used to create relationships between tables)

Unique Key
(Prevents duplicate values)

</pre>

<h3>
Easy Trick to Remember
</h3>

<ul>

<li><strong>Super Key</strong> → Can uniquely identify records (extra columns allowed).</li>

<li><strong>Candidate Key</strong> → Minimum Super Key.</li>

<li><strong>Primary Key</strong> → Selected Candidate Key.</li>

<li><strong>Alternate Key</strong> → Remaining Candidate Keys.</li>

<li><strong>Composite Key</strong> → Two or more columns together form a key.</li>

<li><strong>Foreign Key</strong> → Connects two tables.</li>

<li><strong>Unique Key</strong> → Prevents duplicate values.</li>

</ul>

<h3>
Frequently Asked Interview Questions
</h3>

<ol>

<li>What is the difference between Super Key and Candidate Key?</li>

<li>What is the difference between Candidate Key and Primary Key?</li>

<li>What is the difference between Primary Key and Unique Key?</li>

<li>What is the difference between Primary Key and Foreign Key?</li>

<li>Can a table have multiple Candidate Keys?</li>

<li>Can a table have multiple Foreign Keys?</li>

<li>Can a table have multiple Unique Keys?</li>

<li>Can a Composite Key also be a Primary Key?</li>

</ol>

<h3>
Class Summary
</h3>

<ul>

<li>Super Key is the foundation of all keys.</li>

<li>Candidate Key is the minimum Super Key.</li>

<li>One Candidate Key becomes the Primary Key.</li>

<li>The remaining Candidate Keys become Alternate Keys.</li>

<li>A Composite Key uses two or more columns to identify a record.</li>

<li>A Foreign Key creates relationships between tables.</li>

<li>A Unique Key prevents duplicate values and allows one NULL value in Oracle.</li>

</ul>

<p>

<strong>Easy Formula to Remember:</strong>

</p>

<p>

<b>Super Key → Candidate Key → Primary Key → Foreign Key</b><br>

<b>Remaining Candidate Keys → Alternate Keys</b><br>

<b>Two or More Columns → Composite Key</b><br>

<b>No Duplicate Values → Unique Key</b>

</p>

`;


let sqlConstraintsContent = `

<h3>SQL Constraints</h3>

<p>
Good morning students!
Today we will learn about <strong>SQL Constraints</strong>, one of the most important concepts in SQL and Database Management Systems.
</p>

<p>
Whenever we create a table, we need to make sure that only valid and accurate data is stored in the database. SQL Constraints help us achieve this by applying rules on table columns.
</p>

<p>
<strong>What We Will Cover:</strong>
</p>

<ul>
    <li>What are SQL Constraints?</li>
    <li>Why Constraints are Important?</li>
    <li>Types of SQL Constraints</li>
    <li>PRIMARY KEY</li>
    <li>FOREIGN KEY</li>
    <li>NOT NULL</li>
    <li>UNIQUE</li>
    <li>CHECK</li>
    <li>DEFAULT</li>
    <li>Examples of Each Constraint</li>
</ul>

<h3>What are SQL Constraints?</h3>

<p>
SQL Constraints are rules that are applied to one or more columns of a table. These rules control what type of data can be inserted, updated, or deleted.
</p>

<p>
Constraints help maintain the <strong>accuracy, consistency, and integrity</strong> of the data stored in the database.
</p>

<p>
In simple words,
</p>

<p>
<strong>
"Constraints are restrictions or rules that prevent invalid data from being stored in a database."
</strong>
</p>

<h3>Real-Life Example</h3>

<p>
Suppose your school admission form asks for:
</p>

<ul>
    <li>Roll Number (must be unique)</li>
    <li>Name (cannot be empty)</li>
    <li>Age (must be greater than 5 years)</li>
    <li>Class (default value may be "Not Assigned")</li>
</ul>

<p>
These rules are called <strong>Constraints</strong>.
Similarly, SQL Constraints apply rules to database tables.
</p>

<h3>Why Do We Need Constraints?</h3>

<ul>
    <li>Prevent duplicate data.</li>
    <li>Prevent invalid data.</li>
    <li>Maintain data accuracy.</li>
    <li>Improve data consistency.</li>
    <li>Maintain relationships between tables.</li>
    <li>Improve database reliability.</li>
</ul>

<h3>Types of SQL Constraints</h3>

<table class="notes-table">
<tr>
<th>Constraint</th>
<th>Description</th>
</tr>

<tr>
<td>NOT NULL</td>
<td>Column cannot contain NULL values.</td>
</tr>

<tr>
<td>UNIQUE</td>
<td>All values in the column must be unique.</td>
</tr>

<tr>
<td>PRIMARY KEY</td>
<td>Uniquely identifies each record.</td>
</tr>

<tr>
<td>FOREIGN KEY</td>
<td>Maintains relationship between tables.</td>
</tr>

<tr>
<td>CHECK</td>
<td>Allows only values that satisfy a condition.</td>
</tr>

<tr>
<td>DEFAULT</td>
<td>Assigns a default value if no value is provided.</td>
</tr>

</table>

<hr>

<h3>1. NOT NULL Constraint</h3>

<p>
The NOT NULL constraint ensures that a column cannot have an empty (NULL) value.
</p>

<p><strong>Example:</strong></p>

<pre>
CREATE TABLE Student(
StudentID NUMBER,
Name VARCHAR2(50) NOT NULL
);
</pre>

<p>
Now the Name column must contain a value.
</p>

<p><strong>Invalid:</strong></p>

<pre>
INSERT INTO Student VALUES(101,NULL);
</pre>

<p><strong>Result:</strong></p>

<p>
Oracle will display an error because Name cannot be NULL.
</p>

<hr>

<h3>2. UNIQUE Constraint</h3>

<p>
The UNIQUE constraint ensures that every value in the column is different.
</p>

<p><strong>Example:</strong></p>

<pre>
CREATE TABLE Student(
StudentID NUMBER,
Email VARCHAR2(100) UNIQUE
);
</pre>

<p>
Two students cannot have the same Email ID.
</p>

<p><strong>Example:</strong></p>

<pre>
abc@gmail.com
xyz@gmail.com
abc@gmail.com ❌
</pre>

<hr>

<h3>3. PRIMARY KEY Constraint</h3>

<p>
A PRIMARY KEY uniquely identifies every row in a table.
</p>

<p>
A Primary Key:
</p>

<ul>
<li>Cannot contain NULL values.</li>
<li>Cannot contain duplicate values.</li>
<li>Only one Primary Key is allowed per table.</li>
</ul>

<p><strong>Example:</strong></p>

<pre>
CREATE TABLE Student(
StudentID NUMBER PRIMARY KEY,
Name VARCHAR2(50)
);
</pre>

<p>

StudentID values:

101 ✅

102 ✅

103 ✅

101 ❌ Duplicate

NULL ❌ Not Allowed

</p>

<hr>

<h3>Difference between PRIMARY KEY and UNIQUE</h3>

<table class="notes-table">

<tr>
<th>PRIMARY KEY</th>
<th>UNIQUE</th>
</tr>

<tr>
<td>Cannot be NULL</td>
<td>Can contain one NULL value</td>
</tr>

<tr>
<td>No duplicate values</td>
<td>No duplicate values</td>
</tr>

<tr>
<td>Only one per table</td>
<td>Multiple UNIQUE constraints allowed</td>
</tr>

</table>

<hr>

<h3>4. FOREIGN KEY Constraint</h3>

<p>
A FOREIGN KEY creates a relationship between two tables.
</p>

<p>
It ensures that a value exists in another table before inserting data.
</p>

<p><strong>Example:</strong></p>

<pre>

Department

DeptID
------
10
20
30

Student

StudentID
Name
DeptID

</pre>

<p>

DeptID in Student table refers to DeptID in Department table.

If DeptID = 50 does not exist in Department,
Oracle will not allow the insertion.

</p>

<pre>
CREATE TABLE Department(
DeptID NUMBER PRIMARY KEY,
DeptName VARCHAR2(50)
);

CREATE TABLE Student(
StudentID NUMBER PRIMARY KEY,
Name VARCHAR2(50),
DeptID NUMBER,
FOREIGN KEY(DeptID)
REFERENCES Department(DeptID)
);
</pre>

<hr>

<h3>5. CHECK Constraint</h3>

<p>
CHECK constraint allows only values that satisfy a specified condition.
</p>

<p><strong>Example:</strong></p>

<pre>
CREATE TABLE Student(
Age NUMBER CHECK(Age>=18)
);
</pre>

<p>

Age = 20 ✅

Age = 25 ✅

Age = 15 ❌

</p>

<hr>

<h3>6. DEFAULT Constraint</h3>

<p>
DEFAULT automatically inserts a value if the user does not provide one.
</p>

<p><strong>Example:</strong></p>

<pre>
CREATE TABLE Student(
City VARCHAR2(30)
DEFAULT 'Bhopal'
);
</pre>

<p>

INSERT INTO Student(Name)

VALUES('Rahul');

</p>

<p>

Result:

City = Bhopal

</p>

<hr>

<h3>Multiple Constraints Example</h3>

<pre>

CREATE TABLE Student(

StudentID NUMBER PRIMARY KEY,

Name VARCHAR2(50) NOT NULL,

Email VARCHAR2(100) UNIQUE,

Age NUMBER CHECK(Age>=18),

City VARCHAR2(30)
DEFAULT 'Bhopal'

);

</pre>

<h3>Advantages of SQL Constraints</h3>

<ul>

<li>Maintains data integrity.</li>

<li>Prevents duplicate records.</li>

<li>Prevents invalid data entry.</li>

<li>Improves database security.</li>

<li>Maintains relationships between tables.</li>

<li>Makes the database reliable.</li>

</ul>

<h3>Class Summary</h3>

<ul>

<li>Constraints are rules applied to table columns.</li>

<li>They prevent invalid data from entering the database.</li>

<li>NOT NULL prevents empty values.</li>

<li>UNIQUE prevents duplicate values.</li>

<li>PRIMARY KEY uniquely identifies each record.</li>

<li>FOREIGN KEY maintains relationships between tables.</li>

<li>CHECK validates data based on a condition.</li>

<li>DEFAULT inserts a value automatically when no value is supplied.</li>

</ul>

<p>

<strong>Easy Trick to Remember:</strong>

</p>

<ul>

<li>NOT NULL → No Empty Value</li>

<li>UNIQUE → No Duplicate</li>

<li>PRIMARY KEY → Unique + No NULL</li>

<li>FOREIGN KEY → Connects Tables</li>

<li>CHECK → Checks Condition</li>

<li>DEFAULT → Automatic Value</li>

</ul>

<p>

<strong>Homework:</strong>

Create a <strong>Student</strong> table using all six SQL Constraints and insert five valid records.

</p>

`;


let sqlDDLCompleteContent = `

<h3>SQL DDL (Data Definition Language) </h3>

<p>
Good morning students!
Today we will learn about **DDL (Data Definition Language)** in detail. DDL commands are used to define and modify the structure of database objects like tables, indexes, and schemas. These are the foundation commands you need before working with any database.
</p>

<p>
<strong>What We Will Cover:</strong>
</p>
<ul>
    <li>What is DDL?</li>
    <li>When to use DDL commands</li>
    <li>CREATE command with examples</li>
    <li>ALTER command with all variations (MODIFY, ADD, RENAME, DROP)</li>
    <li>RENAME command</li>
    <li>TRUNCATE command</li>
    <li>Complete practical examples</li>
</ul>

<h3>What is DDL?</h3>

<p>
<strong>DDL (Data Definition Language)</strong> is a subset of SQL statements used to define or change the structure of database objects [web:24].
</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Purpose</strong></td>
        <td>Define database structure (create, modify, delete objects like tables, indexes, schemas)</td>
    </tr>
    <tr>
        <td><strong>When to Use</strong></td>
        <td>Before inserting data – when you need to create tables or modify their structure</td>
    </tr>
    <tr>
        <td><strong>Auto-Commit</strong></td>
        <td>Yes – DDL commands automatically commit changes (no need for COMMIT)</td>
    </tr>
    <tr>
        <td><strong>Can Rollback?</strong></td>
        <td>No – Once executed, DDL changes cannot be rolled back</td>
    </tr>
    <tr>
        <td><strong>Impact</strong></td>
        <td>Changes table structure, not just data</td>
    </tr>
</table>

<h3>DDL Commands Overview</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Command</th>
        <th>Purpose</th>
        <th>When to Use</th>
    </tr>
    <tr>
        <td><strong>CREATE</strong></td>
        <td>Create new database object (table, database, index)</td>
        <td>When starting a new database or adding a new table</td>
    </tr>
    <tr>
        <td><strong>ALTER</strong></td>
        <td>Modify existing table structure</td>
        <td>When you need to add/remove/change columns</td>
    </tr>
    <tr>
        <td><strong>RENAME</strong></td>
        <td>Change name of database object</td>
        <td>When table name needs to be updated</td>
    </tr>
    <tr>
        <td><strong>TRUNCATE</strong></td>
        <td>Remove all data from table (keep structure)</td>
        <td>When you want to clear table but keep it for future use</td>
    </tr>
    <tr>
        <td><strong>DROP</strong></td>
        <td>Delete table completely (structure + data)</td>
        <td>When table is no longer needed</td>
    </tr>
</table>

<h3>1. CREATE Command</h3>

<p>Creates a new database object (table, database, index, view, etc.)</p>

<h4>Syntax:</h4>
<pre>
CREATE TABLE table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    column3 datatype constraint,
    ...
);
</pre>

<h4>Detailed Example – Creating Student Table:</h4>

<pre>
CREATE TABLE students (
    student_id NUMBER(5) PRIMARY KEY,
    student_name VARCHAR2(50) NOT NULL,
    student_email VARCHAR2(100) UNIQUE,
    mobile_number VARCHAR2(10),
    age NUMBER(3),
    department VARCHAR2(50),
    enrollment_date DATE,
    status VARCHAR2(20) DEFAULT 'Active'
);
</pre>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Column</th>
        <th>Data Type</th>
        <th>Constraint</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td>student_id</td>
        <td>NUMBER(5)</td>
        <td>PRIMARY KEY</td>
        <td>Unique identifier for each student (auto-increment)</td>
    </tr>
    <tr>
        <td>student_name</td>
        <td>VARCHAR2(50)</td>
        <td>NOT NULL</td>
        <td>Student name (cannot be empty)</td>
    </tr>
    <tr>
        <td>student_email</td>
        <td>VARCHAR2(100)</td>
        <td>UNIQUE</td>
        <td>Email address (must be unique for each student)</td>
    </tr>
    <tr>
        <td>mobile_number</td>
        <td>VARCHAR2(10)</td>
        <td>None</td>
        <td>Contact number (optional)</td>
    </tr>
    <tr>
        <td>age</td>
        <td>NUMBER(3)</td>
        <td>None</td>
        <td>Student age (optional)</td>
    </tr>
    <tr>
        <td>department</td>
        <td>VARCHAR2(50)</td>
        <td>None</td>
        <td>Department name (optional)</td>
    </tr>
    <tr>
        <td>enrollment_date</td>
        <td>DATE</td>
        <td>None</td>
        <td>Date when student enrolled</td>
    </tr>
    <tr>
        <td>status</td>
        <td>VARCHAR2(20)</td>
        <td>DEFAULT 'Active'</td>
        <td>Default status is 'Active'</td>
    </tr>
</table>

<h4>When to Use CREATE:</h4>
<ul>
    <li>✅ Starting a new database project</li>
    <li>✅ Adding a new table to existing database</li>
    <li>✅ Creating backup tables</li>
    <li>❌ Not for inserting data (use INSERT instead)</li>
    <li>❌ Not for modifying structure (use ALTER instead)</li>
</ul>

<h3>2. ALTER Command</h3>

<p>Modifies the structure of an existing table without deleting data</p>

<h4>When to Use ALTER:</h4>
<ul>
    <li>✅ Adding new columns to existing table</li>
    <li>✅ Changing column data type or size</li>
    <li>✅ Adding or removing constraints</li>
    <li>✅ Renaming columns</li>
    <li>✅ Dropping columns from table</li>
    <li>❌ Not for creating new table (use CREATE instead)</li>
    <li>❌ Not for deleting data (use DELETE or TRUNCATE instead)</li>
</ul>

<h4>ALTER – MODIFY (Change Column Definition)</h4>

<p>
 Modify existing column's data type, size, or constraints
</p>

<pre>
ALTER TABLE students MODIFY student_name VARCHAR2(100);
</pre>

<p>
<strong>Explanation:</strong> Changes student_name column from VARCHAR2(50) to VARCHAR2(100), allowing longer names
</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Scenario</th>
        <th>Before ALTER</th>
        <th>After ALTER</th>
        <th>Why Use</th>
    </tr>
    <tr>
        <td>Increase column size</td>
        <td>VARCHAR2(50)</td>
        <td>VARCHAR2(100)</td>
        <td>Store longer names</td>
    </tr>
    <tr>
        <td>Change data type</td>
        <td>NUMBER(3)</td>
        <td>VARCHAR2(10)</td>
        <td>Store text instead of numbers</td>
    </tr>
    <tr>
        <td>Add constraint</td>
        <td>VARCHAR2(50)</td>
        <td>VARCHAR2(50) NOT NULL</td>
        <td>Make column required</td>
    </tr>
    <tr>
        <td>Remove constraint</td>
        <td>VARCHAR2(50) NOT NULL</td>
        <td>VARCHAR2(50)</td>
        <td>Allow empty values</td>
    </tr>
</table>

<h4>Complete MODIFY Example:</h4>

<pre>
-- Change email column to accept longer emails
ALTER TABLE students MODIFY student_email VARCHAR2(150);

-- Change age column to allow larger values
ALTER TABLE students MODIFY age NUMBER(5);

-- Add NOT NULL constraint to mobile
ALTER TABLE students MODIFY mobile_number VARCHAR2(10) NOT NULL;
</pre>

<h4>ALTER – ADD (Add New Column)</h4>

<p>
 Add a new column to existing table
</p>

<pre>
ALTER TABLE students ADD (gender VARCHAR2(10));
</pre>

<p>
<strong>Explanation:</strong> Adds new column "gender" to students table
</p>

<h4>Complete ADD Example – Adding Multiple Columns:</h4>

<pre>
-- Add single column
ALTER TABLE students ADD (gender VARCHAR2(10));

-- Add multiple columns at once
ALTER TABLE students ADD (
    father_name VARCHAR2(50),
    mother_name VARCHAR2(50),
    address VARCHAR2(200),
    pincode NUMBER(6)
);
</pre>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Use Case</th>
        <th>Example</th>
        <th>When to Use</th>
    </tr>
    <tr>
        <td>Add contact information</td>
        <td>ALTER TABLE students ADD (phone VARCHAR2(10))</td>
        <td>When you need to store phone numbers</td>
    </tr>
    <tr>
        <td>Add address details</td>
        <td>ALTER TABLE students ADD (address VARCHAR2(200))</td>
        <td>When student address is required</td>
    </tr>
    <tr>
        <td>Add academic info</td>
        <td>ALTER TABLE students ADD (grade VARCHAR2(5))</td>
        <td>When storing student grades</td>
    </tr>
    <tr>
        <td>Add date fields</td>
        <td>ALTER TABLE students ADD (birth_date DATE)</td>
        <td>When storing birth dates</td>
    </tr>
</table>

<h4>ALTER – RENAME (Rename Column)</h4>

<p>
 Rename an existing column
</p>

<h4>Syntax (Oracle 12c and later):</h4>
<pre>
ALTER TABLE table_name RENAME COLUMN old_column_name TO new_column_name;
</pre>

<h4>Example:</h4>

<pre>
-- Rename mobile_number to phone_number
ALTER TABLE students RENAME COLUMN mobile_number TO phone_number;

-- Rename enrollment_date to join_date
ALTER TABLE students RENAME COLUMN enrollment_date TO join_date;
</pre>

<h4>Old Syntax (Oracle versions before 12c):</h4>
<pre>
ALTER TABLE table_name RENAME old_column_name TO new_column_name;
</pre>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Scenario</th>
        <th>Old Name</th>
        <th>New Name</th>
        <th>Why Rename</th>
    </tr>
    <tr>
        <td>Make name clearer</td>
        <td>mob</td>
        <td>mobile_number</td>
        <td>More descriptive name</td>
    </tr>
    <tr>
        <td>Follow naming convention</td>
        <td>Name</td>
        <td>student_name</td>
        <td>Consistent naming</td>
    </tr>
    <tr>
        <td>Correct spelling</td>
        <td>Emailaddres</td>
        <td>student_email</td>
        <td>Fix typo</td>
    </tr>
    <tr>
        <td>simplify name</td>
        <td>student_full_name</td>
        <td>name</td>
        <td>Shorter name</td>
    </tr>
</table>

<h4>ALTER – DROP (Remove Column)</h4>

<p>
 Delete a column from existing table (column structure removed, data lost)
</p>

<pre>
ALTER TABLE students DROP COLUMN gender;
</pre>

<p>
<strong>Explanation:</strong> Removes "gender" column completely from students table
</p>

<h4>Complete DROP Example:</h4>

<pre>
-- Drop single column
ALTER TABLE students DROP COLUMN father_name;

-- Drop multiple columns
ALTER TABLE students DROP COLUMN (mother_name, address, pincode);
</pre>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>When to Use DROP</th>
        <th>Example</th>
        <th>Note</th>
    </tr>
    <tr>
        <td>Column no longer needed</td>
        <td>ALTER TABLE students DROP COLUMN gender</td>
        <td>All data in column is deleted</td>
    </tr>
    <tr>
        <td>Wrong column added</td>
        <td>ALTER TABLE students DROP COLUMN temp_field</td>
        <td>Remove incorrect column</td>
    </tr>
    <tr>
        <td>Reduce table size</td>
        <td>ALTER TABLE students DROP COLUMN old_data</td>
        <td>Remove unnecessary columns</td>
    </tr>
    <tr>
        <td>Security requirement</td>
        <td>ALTER TABLE students DROP COLUMN ssn</td>
        <td>Remove sensitive data column</td>
    </tr>
</table>

<h4>Important Warning:</h4>
<ul>
    <li>⚠️ Dropping a column is **permanent** – data cannot be recovered</li>
    <li>⚠️ Always backup data before dropping columns</li>
    <li>⚠️ Check if column is used in queries before dropping</li>
</ul>

<h3>3. RENAME Command</h3>

<p>Rename an entire table (not just column)</p>

<h4>Syntax (Oracle 12c and later):</h4>
<pre>
RENAME old_table_name TO new_table_name;
</pre>

<h4>Old Syntax (all Oracle versions):</h4>
<pre>
ALTER TABLE old_table_name RENAME TO new_table_name;
</pre>

<h4>Example:</h4>

<pre>
-- Rename students table to student_records
RENAME students TO student_records;

-- Or using ALTER syntax
ALTER TABLE students RENAME TO student_records;
</pre>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>When to Use RENAME</th>
        <th>Example</th>
        <th>Why</th>
    </tr>
    <tr>
        <td>Make name more descriptive</td>
        <td>RENAME students TO student_records</td>
        <td>Clearer purpose</td>
    </tr>
    <tr>
        <td>Follow naming convention</td>
        <td>RENAME emp TO employees</td>
        <td>Consistent naming</td>
    </tr>
    <tr>
        <td>Version table</td>
        <td>RENAME students TO students_2024</td>
        <td>Year-specific data</td>
    </tr>
    <tr>
        <td>Temporary rename</td>
        <td>RENAME students TO students_backup</td>
        <td>Create backup name</td>
    </tr>
</table>

<h3>4. TRUNCATE Command</h3>

<p>Remove **all data** from table but **keep table structure** intact</p>

<h4>Syntax:</h4>
<pre>
TRUNCATE TABLE table_name;
</pre>

<h4>Example:</h4>

<pre>
-- Remove all students from table
TRUNCATE TABLE students;
</pre>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>TRUNCATE</th>
        <th>DELETE (without WHERE)</th>
    </tr>
    <tr>
        <td>Speed</td>
        <td>Very Fast (instant)</td>
        <td>Slower (processes each row)</td>
    </tr>
    <tr>
        <td>Auto-commit</td>
        <td>Yes (cannot rollback)</td>
        <td>No (can rollback before COMMIT)</td>
    </tr>
    <tr>
        <td>Table structure</td>
        <td>Kept intact</td>
        <td>Kept intact</td>
    </tr>
    <tr>
        <td>Data</td>
        <td>All removed</td>
        <td>All removed</td>
    </tr>
    <tr>
        <td>Space</td>
        <td>Releases space</td>
        <td>Keeps space</td>
    </tr>
    <tr>
        <td>When to Use</td>
        <td>Clear table for new data</td>
        <td>Test data cleanup</td>
    </tr>
</table>

<h4>When to Use TRUNCATE:</h4>
<ul>
    <li>✅ Clearing test data before new testing</li>
    <li>✅ Removing all records but keeping table for future use</li>
    <li>✅ Resetting table for new batch of data</li>
    <li>✅ Fast cleanup when you don't need to rollback</li>
    <li>❌ When you need to delete only specific rows (use DELETE with WHERE)</li>
    <li>❌ When you need to rollback changes (use DELETE instead)</li>
</ul>

<h4>Complete Practical Example:</h4>

<pre>
-- Step 1: Create table
CREATE TABLE course_enrollment (
    enrollment_id NUMBER(5) PRIMARY KEY,
    student_id NUMBER(5),
    course_id NUMBER(5),
    enrollment_date DATE
);

-- Step 2: Insert test data
INSERT INTO course_enrollment VALUES (1, 101, 1, '2024-01-15');
INSERT INTO course_enrollment VALUES (2, 102, 1, '2024-01-16');
INSERT INTO course_enrollment VALUES (3, 103, 2, '2024-01-17');

-- Step 3: Check data
SELECT * FROM course_enrollment;

-- Step 4: Clear all data (keep table)
TRUNCATE TABLE course_enrollment;

-- Step 5: Table is empty but structure exists
SELECT * FROM course_enrollment; -- Returns 0 rows
</pre>

<h3>Complete DDL Workflow Example – Student Database</h3>

<pre>
-- STEP 1: CREATE the table
CREATE TABLE students (
    student_id NUMBER(5) PRIMARY KEY,
    student_name VARCHAR2(50) NOT NULL,
    student_email VARCHAR2(100),
    age NUMBER(3)
);

-- STEP 2: ALTER – ADD new columns
ALTER TABLE students ADD (
    mobile_number VARCHAR2(10),
    department VARCHAR2(50)
);

-- STEP 3: ALTER – MODIFY column size
ALTER TABLE students MODIFY student_name VARCHAR2(100);

-- STEP 4: ALTER – RENAME column
ALTER TABLE students RENAME COLUMN mobile_number TO phone_number;

-- STEP 5: ALTER – DROP unnecessary column
ALTER TABLE students DROP COLUMN age;

-- STEP 6: RENAME table
RENAME students TO student_records;

-- STEP 7: TRUNCATE to clear all data
TRUNCATE TABLE student_records;

-- STEP 8: Verify table structure still exists
DESC student_records; -- Shows all columns
</pre>

<h3>DDL Command Comparison Table</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Command</th>
        <th>Action</th>
        <th>Auto-Commit</th>
        <th>Can Rollback?</th>
        <th>Impact on Data</th>
    </tr>
    <tr>
        <td><strong>CREATE</strong></td>
        <td>Create new object</td>
        <td>Yes</td>
        <td>No</td>
        <td>No data affected</td>
    </tr>
    <tr>
        <td><strong>ALTER</strong></td>
        <td>Modify structure</td>
        <td>Yes</td>
        <td>No</td>
        <td>Data preserved (except DROP column)</td>
    </tr>
    <tr>
        <td><strong>RENAME</strong></td>
        <td>Change name</td>
        <td>Yes</td>
        <td>No</td>
        <td>No data affected</td>
    </tr>
    <tr>
        <td><strong>TRUNCATE</strong></td>
        <td>Remove all data</td>
        <td>Yes</td>
        <td>No</td>
        <td>All data deleted</td>
    </tr>
    <tr>
        <td><strong>DROP</strong></td>
        <td>Delete object</td>
        <td>Yes</td>
        <td>No</td>
        <td>Structure + data deleted</td>
    </tr>
</table>

<h3>Key Points to Remember</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Point</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td><strong>DDL = Auto-Commit</strong></td>
        <td>All DDL commands automatically commit – changes are permanent immediately</td>
    </tr>
    <tr>
        <td><strong>No Rollback</strong></td>
        <td>Once DDL executes, you cannot use ROLLBACK to undo changes</td>
    </tr>
    <tr>
        <td><strong>Structure Changes</strong></td>
        <td>DDL modifies table structure, not just data</td>
    </tr>
    <tr>
        <td><strong>Backup First</strong></td>
        <td>Always backup data before using ALTER DROP or TRUNCATE</td>
    </tr>
    <tr>
        <td><strong>Check Dependencies</strong></td>
        <td>Before dropping columns, check if used in views, triggers, or queries</td>
    </tr>
    <tr>
        <td><strong>Use DESC</strong></td>
        <td>After ALTER, use DESC table_name to verify structure changes</td>
    </tr>
</table>

<h3>Class Summary</h3>

<p>
In today's detailed lecture, we learned about **DDL (Data Definition Language)**:
</p>

<ul>
    <li><strong>CREATE:</strong> Create new table with columns and constraints</li>
    <li><strong>ALTER – MODIFY:</strong> Change column data type, size, or constraints</li>
    <li><strong>ALTER – ADD:</strong> Add new column(s) to existing table</li>
    <li><strong>ALTER – RENAME:</strong> Rename existing column</li>
    <li><strong>ALTER – DROP:</strong> Remove column from table (data lost)</li>
    <li><strong>RENAME:</strong> Rename entire table</li>
    <li><strong>TRUNCATE:</strong> Remove all data but keep table structure</li>
    <li><strong>Key特性:</strong> All DDL auto-commits, cannot rollback, permanent changes</li>
</ul>

<p>
<strong>Remember:</strong> Use DDL commands when you need to define or modify database structure. Always backup before destructive operations like DROP or TRUNCATE!
</p>

<p>
<strong>Homework:</strong>
</p>
<ul>
    <li>1. Create a "courses" table with 5 columns</li>
    <li>2. Use ALTER to add 2 new columns</li>
    <li>3. Use ALTER to modify one column size</li>
    <li>4. Use ALTER to rename one column</li>
    <li>5. Use TRUNCATE to clear all data</li>
    <li>6. Verify structure with DESC courses</li>
</ul>

<p>
<strong>Next Topic:</strong> DML (Data Manipulation Language) – INSERT, UPDATE, DELETE, SELECT
</p>

`;

let oracleNewFeaturesContent = `

<h3>New Features in Oracle Database – RECYCLEBIN, FLASHBACK, PURGE</h3>

<p>
Good morning students!
Today we will learn about three powerful new features in Oracle Database that help protect your data and recover from mistakes: **RECYCLEBIN**, **FLASHBACK**, and **PURGE**. These features are especially useful when you accidentally delete data or tables.
</p>

<p>
<strong>What We Will Cover:</strong>
</p>
<ul>
    <li>What are these new features?</li>
    <li>RECYCLEBIN – Oracle's safety net for dropped tables</li>
    <li>FLASHBACK – Recover data to a previous point in time</li>
    <li>PURGE – Permanently remove objects from RECYCLEBIN</li>
    <li>Complete practical examples</li>
    <li>When to use each feature</li>
</ul>

<h3>Introduction to Oracle's New Recovery Features</h3>

<p>
Oracle Database introduced these features to solve common problems:
</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Problem</th>
        <th>Old Solution</th>
        <th>New Oracle Feature</th>
    </tr>
    <tr>
        <td>Accidentally dropped a table</td>
        <td>Restore from backup (slow, complex)</td>
        <td>**RECYCLEBIN** – Instant recovery</td>
    </tr>
    <tr>
        <td>Deleted wrong data</td>
        <td>Restore entire database from backup</td>
        <td>**FLASHBACK** – Recover specific data</td>
    </tr>
    <tr>
        <td>RECYCLEBIN full of old objects</td>
        <td>No easy cleanup method</td>
        <td>**PURGE** – Quick cleanup</td>
    </tr>
    <tr>
        <td>Need to undo transaction</td>
        <td>Wait for next backup</td>
        <td>**FLASHBACK TRANSACTION**</td>
    </tr>
</table>

<h3>1. RECYCLEBIN – Oracle's Safety Net</h3>

<h4>What is RECYCLEBIN?</h4>

<p>
The **RECYCLEBIN** is a feature in Oracle Database that automatically stores dropped tables in a "recycling area" instead of deleting them permanently. It works like Windows Recycle Bin – when you drop a table, it goes to RECYCLEBIN and can be recovered later [web:24].
</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Purpose</strong></td>
        <td>Store dropped tables temporarily for recovery</td>
    </tr>
    <tr>
        <td><strong>When Activated</strong></td>
        <td>Automatically when you use DROP TABLE command</td>
    </tr>
    <tr>
        <td><strong>Storage Location</strong></td>
        <td>System tablespace (hidden area)</td>
    </tr>
    <tr>
        <td><strong>Duration</strong></td>
        <td>Until manually purged OR tablespace runs full</td>
    </tr>
    <tr>
        <td><strong>Automatic</strong></td>
        <td>Yes – enabled by default in Oracle 10g and later</td>
    </tr>
</table>

<h4>How RECYCLEBIN Works:</h4>

<pre>
-- Step 1: Create a table
CREATE TABLE employees (
    emp_id NUMBER(5) PRIMARY KEY,
    emp_name VARCHAR2(50),
    salary NUMBER(10)
);

-- Step 2: Insert data
INSERT INTO employees VALUES (1, 'Rahul', 50000);
INSERT INTO employees VALUES (2, 'Priya', 60000);

-- Step 3: Accidentally drop the table
DROP TABLE employees;

-- Step 4: Table is NOT deleted permanently!
-- It's moved to RECYCLEBIN with a new name
</pre>

<h4>What Happens When You Drop a Table?</h4>

<p>
When you execute <code>DROP TABLE</code>:
</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Action</th>
        <th>Details</th>
    </tr>
    <tr>
        <td>Original table name</td>
        <td>Removed from database</td>
    </tr>
    <tr>
        <td>Table data</td>
        <td>Moved to RECYCLEBIN (not deleted)</td>
    </tr>
    <tr>
        <td>Table structure</td>
        <td>Preserved in RECYCLEBIN</td>
    </tr>
    <tr>
        <td>New object name</td>
        <td>Oracle assigns: <code>BIN$unique_id$version</code></td>
    </tr>
    <tr>
        <td>Original name</td>
        <td>Stored as "original_name" in RECYCLEBIN</td>
    </tr>
</table>

<h4>Viewing RECYCLEBIN Contents:</h4>

<pre>
-- View all objects in RECYCLEBIN
SELECT original_name, object_name, type, droptime 
FROM recyclebin;

-- Or use SQL*Plus command
SHOW RECYCLEBIN;
</pre>

<h4>Example Output:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>ORIGINAL_NAME</th>
        <th>OBJECT_NAME</th>
        <th>TYPE</th>
        <th>DROPTIME</th>
    </tr>
    <tr>
        <td>employees</td>
        <td>BIN$0$L9jF3kQIiPgDfKxAB==$0</td>
        <td>TABLE</td>
        <td>2024-01-15 10:30:00</td>
    </tr>
    <tr>
        <td>students</td>
        <td>BIN$1$M8kG4lRlQhRElMBCD==$1</td>
        <td>TABLE</td>
        <td>2024-01-14 15:45:00</td>
    </tr>
</table>

<h4>Recovering Table from RECYCLEBIN:</h4>

<pre>
-- Method 1: Recover using original name
FLASHBACK TABLE employees TO BEFORE DROP;

-- Method 2: Recover using RECYCLEBIN object name
FLASHBACK TABLE "BIN$0$L9jF3kQIiPgDfKxAB==$0" TO BEFORE DROP;

-- Method 3: Recover with new name
FLASHBACK TABLE employees TO BEFORE DROP RENAME TO emp_backup;
</pre>

<h4>Complete RECYCLEBIN Example:</h4>

<pre>
-- Step 1: Create and use table
CREATE TABLE products (
    prod_id NUMBER(5),
    prod_name VARCHAR2(50),
    price NUMBER(10)
);

INSERT INTO products VALUES (1, 'Laptop', 50000);
INSERT INTO products VALUES (2, 'Mouse', 500);

-- Step 2: View current data
SELECT * FROM products;

-- Step 3: Drop table (accidentally)
DROP TABLE products;

-- Step 4: Verify table is gone
SELECT * FROM products; -- Error: table does not exist

-- Step 5: Check RECYCLEBIN
SHOW RECYCLEBIN;

-- Step 6: Recover the table
FLASHBACK TABLE products TO BEFORE DROP;

-- Step 7: Verify recovery
SELECT * FROM products; -- Data is back!
</pre>

<h4>When to Use RECYCLEBIN:</h4>
<ul>
    <li>✅ Accidentally dropped a table</li>
    <li>✅ Need to recover table structure and data quickly</li>
    <li>✅ Testing environment – frequently create/drop tables</li>
    <li>✅ Development – want safety net for mistakes</li>
    <li>❌ When you intentionally want to delete table permanently (use PURGE with DROP)</li>
    <li>❌ RECYCLEBIN is full and needs space</li>
</ul>

<h4>RENAME with DROP TABLE:</h4>

<pre>
-- Drop table and rename it in RECYCLEBIN
DROP TABLE old_table RENAME TO backup_old_table;
</pre>

<h3>2. FLASHBACK – Recover Data to Previous Point</h4>

<h4>What is FLASHBACK?</h4>

<p>
**FLASHBACK** is a powerful Oracle feature that allows you to view or recover data to a previous point in time without restoring from backup. It can recover:
</p>

<ul>
    <li>Deleted rows from a table</li>
    <li>Dropped tables (using FLASHBACK TABLE)</li>
    <li Entire database to previous state (FLASHBACK DATABASE)</li>
    <li>Transactions (using FLASHBACK TRANSACTION)</li>
</ul>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Type</th>
        <th>Command</th>
        <th>Purpose</th>
    </tr>
    <tr>
        <td>FLASHBACK TABLE</td>
        <td>FLASHBACK TABLE table_name TO BEFORE DROP</td>
        <td>Recover dropped table (uses RECYCLEBIN)</td>
    </tr>
    <tr>
        <td>FLASHBACK TABLE (timestamp)</td>
        <td>FLASHBACK TABLE table_name TO TIMESTAMP ...</td>
        <td>Recover table data to specific time</td>
    </tr>
    <tr>
        <td>FLASHBACK DATABASE</td>
        <td>FLASHBACK DATABASE TO TIMESTAMP ...</td>
        <td>Recover entire database</td>
    </tr>
    <tr>
        <td>FLASHBACK TRANSACTION</td>
        <td>FLASHBACK TRANSACTION ...</td>
        <td>Undo specific transaction</td>
    </tr>
    <tr>
        <td>FLASHBACK QUERY</td>
        <td>SELECT ... TIMESTAMP_TO_SCM(...)</td>
        <td>View data as it was at past time</td>
    </tr>
</table>

<h4>FLASHBACK TABLE – Recover Deleted Data:</h4>

<pre>
-- Step 1: Create table with data
CREATE TABLE sales (
    sale_id NUMBER(5),
    product VARCHAR2(50),
    amount NUMBER(10),
    sale_date DATE
);

INSERT INTO sales VALUES (1, 'Laptop', 50000, '2024-01-15');
INSERT INTO sales VALUES (2, 'Mouse', 500, '2024-01-15');
INSERT INTO sales VALUES (3, 'Keyboard', 1500, '2024-01-15');

-- Step 2: Accidentally delete some rows
DELETE FROM sales WHERE sale_id = 2;

-- Step 3: Commit the deletion
COMMIT;

-- Step 4: Flashback to recover deleted data
FLASHBACK TABLE sales TO TIMESTAMP (SYSTIMESTAMP - INTERVAL '5' MINUTE);

-- Step 5: Verify recovery
SELECT * FROM sales; -- All 3 rows are back!
</pre>

<h4>FLASHBACK QUERY – View Past Data:</h4>

<pre>
-- View data as it was 10 minutes ago
SELECT * FROM sales 
TIMESTAMP AS OF SYSTIMESTAMP - INTERVAL '10' MINUTE;

-- View data at specific timestamp
SELECT * FROM sales 
TIMESTAMP AS OF TIMESTAMP '2024-01-15 10:30:00';

-- Compare current vs past data
SELECT 'Current' AS period, sale_id, product, amount FROM sales
UNION
SELECT 'Past' AS period, sale_id, product, amount 
FROM sales TIMESTAMP AS OF SYSTIMESTAMP - INTERVAL '10' MINUTE;
</pre>

<h4>FLASHBACK DATABASE – Recover Entire Database:</h4>

<pre>
-- Step 1: Enable FLASHBACK (must be done by DBA)
ALTER DATABASE FLASHBACK ON;

-- Step 2: Database was corrupted at 10:00 AM
-- Recover to 9:00 AM
SHUTDOWN IMMEDIATE;
STARTUP MOUNT;
FLASHBACK DATABASE TO TIMESTAMP TIMESTAMP '2024-01-15 09:00:00';
ALTER DATABASE OPEN RESETLOGS;

-- Step 3: Database is recovered!
</pre>

<h4>When to Use FLASHBACK:</h4>
<ul>
    <li>✅ Deleted wrong rows from table</li>
    <li>✅ Updated data incorrectly</li>
    <li>✅ Need to see data as it was at past time</li>
    <li>✅ Database corruption – recover to earlier state</li>
    <li>✅ Accidental transaction – undo specific changes</li>
    <li>❌ Table was dropped and RECYCLEBIN is full (use PURGE first)</li>
    <li>❌ FLASHBACK not enabled by DBA</li>
</ul>

<h4>FLASHBACK Requirements:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Requirement</th>
        <th>Details</th>
    </tr>
    <tr>
        <td><strong>FLASHBACK Area</strong></td>
        <td>Must have space allocated for flashback logs</td>
    </tr>
    <tr>
        <td><strong>DBA Enablement</strong></td>
        <td>DBA must enable FLASHBACK DATABASE</td>
    </tr>
    <tr>
        <td><strong>Undo Tablespace</strong></td>
        <td>Must use undo tablespace (not rollback segments)</td>
    </tr>
    <tr>
        <td><strong>Archive Logging</strong></td>
        <td>Database must be in ARCHIVELOG mode</td>
    </tr>
</table>

<h3>3. PURGE – Permanently Remove Objects</h4>

<h4>What is PURGE?</h4>

<p>
**PURGE** is the command to permanently delete objects from RECYCLEBIN. When you use PURGE, the object is completely removed and cannot be recovered [web:24].
</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Purpose</strong></td>
        <td>Permanently delete objects from RECYCLEBIN</td>
    </tr>
    <tr>
        <td><strong>When to Use</strong></td>
        <td>RECYCLEBIN is full OR intentionally delete dropped table</td>
    </tr>
    <tr>
        <td><strong>Recoverable?</strong></td>
        <td>No – permanent deletion, cannot flashback</td>
    </tr>
    <tr>
        <td><strong>Auto-Commit</strong></td>
        <td>Yes – immediate permanent deletion</td>
    </tr>
</table>

<h4>PURGE Commands:</h4>

<pre>
-- Method 1: Purge specific table from RECYCLEBIN
PURGE TABLE employees;

-- Method 2: Purge by RECYCLEBIN object name
PURGE TABLE "BIN$0$L9jF3kQIiPgDfKxAB==$0";

-- Method 3: Purge entire RECYCLEBIN (all objects)
PURGE RECYCLEBIN;

-- Method 4: Drop table and skip RECYCLEBIN (instant permanent delete)
DROP TABLE products PURGE;
</pre>

<h4>Complete PURGE Example:</h4>

<pre>
-- Step 1: Create multiple tables
CREATE TABLE temp_data1 (id NUMBER);
CREATE TABLE temp_data2 (id NUMBER);
CREATE TABLE temp_data3 (id NUMBER);

-- Step 2: Drop all tables
DROP TABLE temp_data1;
DROP TABLE temp_data2;
DROP TABLE temp_data3;

-- Step 3: Check RECYCLEBIN
SHOW RECYCLEBIN;
-- Shows 3 tables

-- Step 4: Purge specific table
PURGE TABLE temp_data1;

-- Step 5: Verify temp_data1 removed
SHOW RECYCLEBIN;
-- Shows 2 tables (temp_data2, temp_data3)

-- Step 6: Purge entire RECYCLEBIN
PURGE RECYCLEBIN;

-- Step 7: RECYCLEBIN is now empty
SHOW RECYCLEBIN;
-- No objects
</pre>

<h4>DROP TABLE with PURGE:</h4>

<pre>
-- Normal drop (goes to RECYCLEBIN)
DROP TABLE old_table;
-- Can recover with: FLASHBACK TABLE old_table TO BEFORE DROP;

-- Drop with PURGE (permanent, no recovery)
DROP TABLE old_table PURGE;
-- Cannot recover!
</pre>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Scenario</th>
        <th>Command</th>
        <th>Recoverable?</th>
    </tr>
    <tr>
        <td>Normal drop</td>
        <td>DROP TABLE table_name</td>
        <td>Yes (from RECYCLEBIN)</td>
    </tr>
    <tr>
        <td>Permanent delete</td>
        <td>DROP TABLE table_name PURGE</td>
        <td>No</td>
    </tr>
    <tr>
        <td>Purge from RECYCLEBIN</td>
        <td>PURGE TABLE table_name</td>
        <td>No</td>
    </tr>
    <tr>
        <td>Clean all RECYCLEBIN</td>
        <td>PURGE RECYCLEBIN</td>
        <td>No</td>
    </tr>
</table>

<h4>When to Use PURGE:</h4>
<ul>
    <li>✅ RECYCLEBIN is full and needs space</li>
    <li>✅ Intentionally want permanent deletion</li>
    <li>✅ Dropped table by mistake but no need to recover</li>
    <li>✅ Security requirement – completely remove sensitive data</li>
    <li>✅ Testing cleanup – remove old test tables</li>
    <li>❌ Accidentally dropped important table (don't purge!)</li>
    <li>❌ Need to recover data later</li>
</ul>

<h3>Comparison: RECYCLEBIN vs FLASHBACK vs PURGE</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Feature</th>
        <th>RECYCLEBIN</th>
        <th>FLASHBACK</th>
        <th>PURGE</th>
    </tr>
    <tr>
        <td><strong>Purpose</strong></td>
        <td>Store dropped tables</td>
        <td>Recover data to past time</td>
        <td>Permanently delete</td>
    </tr>
    <tr>
        <td><strong>When Used</strong></td>
        <td>Automatically on DROP TABLE</td>
        <td>Manual recovery command</td>
        <td>Manual cleanup command</td>
    </tr>
    <tr>
        <td><strong>Recoverable</strong></td>
        <td>Yes (FLASHBACK TABLE)</td>
        <td>Yes (within time limit)</td>
        <td>No (permanent)</td>
    </tr>
    <tr>
        <td><strong>Auto-Enabled</strong></td>
        <td>Yes (Oracle 10g+)</td>
        <td>No (DBA must enable)</td>
        <td>Manual command</td>
    </tr>
    <tr>
        <td><strong>Storage</strong></td>
        <td>System tablespace</td>
        <td>Flashback logs</td>
        <td>N/A (deletion)</td>
    </tr>
    <tr>
        <td><strong>Best For</strong></td>
        <td>Dropped table recovery</td>
        <td>Deleted/updated data recovery</td>
        <td>Cleanup permanent deletion</td>
    </tr>
</table>

<h3>Complete Workflow Example</h3>

<pre>
-- ===== SCENARIO 1: Accidentally Drop Table =====

-- Step 1: Create table
CREATE TABLE important_data (id NUMBER, data VARCHAR2(50));
INSERT INTO important_data VALUES (1, 'Critical Info');

-- Step 2: Accidentally drop
DROP TABLE important_data;

-- Step 3: Check RECYCLEBIN
SHOW RECYCLEBIN;
-- Shows: important_data → BIN$...

-- Step 4: Recover using FLASHBACK
FLASHBACK TABLE important_data TO BEFORE DROP;

-- Step 5: Verify recovery
SELECT * FROM important_data; -- Data is back!

-- ===== SCENARIO 2: Delete Wrong Rows =====

-- Step 1: Existing table with data
CREATE TABLE employees (emp_id NUMBER, emp_name VARCHAR2(50));
INSERT INTO employees VALUES (1, 'Rahul');
INSERT INTO employees VALUES (2, 'Priya');
INSERT INTO employees VALUES (3, 'Amit');

-- Step 2: Accidentally delete
DELETE FROM employees WHERE emp_id = 2;
COMMIT;

-- Step 3: View data before deletion (FLASHBACK QUERY)
SELECT * FROM employees TIMESTAMP AS OF SYSTIMESTAMP - INTERVAL '5' MINUTE;

-- Step 4: Recover deleted data
FLASHBACK TABLE employees TO TIMESTAMP SYSTIMESTAMP - INTERVAL '5' MINUTE;

-- Step 5: Verify
SELECT * FROM employees; -- All 3 employees back!

-- ===== SCENARIO 3: RECYCLEBIN Cleanup =====

-- Step 1: Drop multiple test tables
DROP TABLE test1;
DROP TABLE test2;
DROP TABLE test3;

-- Step 2: RECYCLEBIN is full
SHOW RECYCLEBIN;
-- Shows many old tables

-- Step 3: Purge specific table (no recovery needed)
PURGE TABLE test1;

-- Step 4: Clean entire RECYCLEBIN
PURGE RECYCLEBIN;

-- Step 5: RECYCLEBIN is empty
SHOW RECYCLEBIN;
-- No objects

-- ===== SCENARIO 4: Permanent Delete (No Recovery) =====

-- Step 1: Drop table permanently (skip RECYCLEBIN)
DROP TABLE old_legacy_table PURGE;

-- Step 2: Cannot recover!
FLASHBACK TABLE old_legacy_table TO BEFORE DROP;
-- Error: table not in RECYCLEBIN
</pre>

<h3>Key Points to Remember</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Point</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td><strong>RECYCLEBIN is Automatic</strong></td>
        <td>Enabled by default in Oracle 10g and later</td>
    </tr>
    <tr>
        <td><strong>FLASHBACK Requires Setup</strong></td>
        <td>DBA must enable FLASHBACK DATABASE and allocate space</td>
    </tr>
    <tr>
        <td><strong>PURGE is Permanent</strong></td>
        <td>Once purged, cannot recover – be careful!</td>
    </tr>
    <tr>
        <td><strong>DROP PURGE = No RECYCLEBIN</strong></td>
        <td>Use DROP TABLE name PURGE for instant permanent delete</td>
    </tr>
    <tr>
        <td><strong>RENAME on Recovery</strong></td>
        <td>FLASHBACK TABLE ... RENAME TO new_name – recover with new name</td>
    </tr>
    <tr>
        <td><strong>View RECYCLEBIN</strong></td>
        <td>SELECT * FROM recyclebin; or SHOW RECYCLEBIN</td>
    </tr>
    <tr>
        <td><strong>Time Limit</strong></td>
        <td>FLASHBACK works within undo retention period (configured by DBA)</td>
    </tr>
</table>

<h3>Class Summary</h3>

<p>
In today's lecture, we learned about three powerful Oracle recovery features:
</p>

<ul>
    <li><strong>RECYCLEBIN:</strong>
        <ul>
            <li>Automatically stores dropped tables</li>
            <li>Works like Windows Recycle Bin</li>
            <li>Recover with: <code>FLASHBACK TABLE name TO BEFORE DROP</code></li>
            <li>Enabled by default (Oracle 10g+)</li>
        </ul>
    </li>
    <li><strong>FLASHBACK:</strong>
        <ul>
            <li>Recover data to previous point in time</li>
            <li>Types: FLASHBACK TABLE, FLASHBACK DATABASE, FLASHBACK QUERY</li>
            <li>Recover deleted rows, not just dropped tables</li>
            <li>Requires DBA to enable and allocate space</li>
        </ul>
    </li>
    <li><strong>PURGE:</strong>
        <ul>
            <li>Permanently delete from RECYCLEBIN</li>
            <li>Commands: <code>PURGE TABLE name</code>, <code>PURGE RECYCLEBIN</code></li>
            <li>Use: <code>DROP TABLE name PURGE</code> for instant permanent delete</li>
            <li>Cannot recover after purge – be careful!</li>
        </ul>
    </li>
</ul>

<p>
<strong>Remember:</strong> These features protect you from data loss mistakes. Use RECYCLEBIN for dropped tables, FLASHBACK for deleted data, and PURGE for cleanup. Always be careful with PURGE – it's permanent!
</p>

<p>
<strong>Homework:</strong>
</p>
<ul>
    <li>1. Create a table, drop it, and recover using RECYCLEBIN</li>
    <li>2. Insert data, delete some rows, and recover using FLASHBACK</li>
    <li>3. Create 3 test tables, drop them, then PURGE RECYCLEBIN</li>
    <li>4. Drop a table with PURGE and verify it cannot be recovered</li>
    <li>5. Use FLASHBACK QUERY to view data from 5 minutes ago</li>
</ul>

<p>
<strong>Next Topic:</strong> DML (Data Manipulation Language) – INSERT, UPDATE, DELETE, SELECT with detailed examples
</p>

`;


let sqlDMLCompleteContent = `

<h3>SQL DML (Data Manipulation Language)</h3>

<p>
Good morning students!
Today we will learn about **DML (Data Manipulation Language)** in detail. DML commands are used to work with the data inside tables – inserting new data, updating existing data, and deleting data. These are the most frequently used commands in database work.
</p>

<p>
<strong>What We Will Cover:</strong>
</p>
<ul>
    <li>What is DML?</li>
    <li>When to use DML commands</li>
    <li>INSERT command with examples</li>
    <li>UPDATE command with examples</li>
    <li>DELETE command with examples</li>
    <li>New Oracle Features: INSERT ALL and MERGE</li>
    <li>Complete practical examples</li>
</ul>

<h3>What is DML?</h3>

<p>
<strong>DML (Data Manipulation Language)</strong> is a subset of SQL statements used to manipulate data inside tables (not table structure) [web:24].
</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Purpose</strong></td>
        <td>Work with data inside tables (insert, update, delete, select)</td>
    </tr>
    <tr>
        <td><strong>When to Use</strong></td>
        <td>After creating tables – when you need to add, modify, or remove data</td>
    </tr>
    <tr>
        <td><strong>Auto-Commit</strong></td>
        <td>No – DML commands do NOT auto-commit (need COMMIT to save)</td>
    </tr>
    <tr>
        <td><strong>Can Rollback?</strong></td>
        <td>Yes – can use ROLLBACK before COMMIT to undo changes</td>
    </tr>
    <tr>
        <td><strong>Impact</strong></td>
        <td>Changes data only, not table structure</td>
    </tr>
</table>

<h3>DML Commands Overview</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Command</th>
        <th>Purpose</th>
        <th>When to Use</th>
        <th>Auto-Commit</th>
    </tr>
    <tr>
        <td><strong>INSERT</strong></td>
        <td>Add new rows to table</td>
        <td>When adding new records</td>
        <td>No (need COMMIT)</td>
    </tr>
    <tr>
        <td><strong>UPDATE</strong></td>
        <td>Modify existing data in table</td>
        <td>When changing existing records</td>
        <td>No (need COMMIT)</td>
    </tr>
    <tr>
        <td><strong>DELETE</strong></td>
        <td>Remove rows from table</td>
        <td>When removing records</td>
        <td>No (need COMMIT)</td>
    </tr>
    <tr>
        <td><strong>SELECT</strong></td>
        <td>Retrieve data from table</td>
        <td>When viewing/querying data</td>
        <td>No (read-only)</td>
    </tr>
    <tr>
        <td><strong>INSERT ALL</strong></td>
        <td>Insert multiple rows at once (Oracle new feature)</td>
        <td>When bulk inserting data</td>
        <td>No (need COMMIT)</td>
    </tr>
    <tr>
        <td><strong>MERGE</strong></td>
        <td>Insert or Update based on condition (Oracle new feature)</td>
        <td>When syncing data from source</td>
        <td>No (need COMMIT)</td>
    </tr>
</table>

<h3>1. INSERT Command</h3>

<p>Adds new rows (records) to a table</p>

<h4>Syntax:</h4>
<pre>
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
</pre>

<h4>Basic Example – Insert Single Row:</h4>

<pre>
-- Create table first
CREATE TABLE students (
    student_id NUMBER(5) PRIMARY KEY,
    student_name VARCHAR2(50),
    student_email VARCHAR2(100),
    age NUMBER(3),
    department VARCHAR2(50)
);

-- Insert single row
INSERT INTO students (student_id, student_name, student_email, age, department)
VALUES (1, 'Rahul Kumar', 'rahul@email.com', 20, 'Computer Science');
</pre>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Step</th>
        <th>Action</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>1</td>
        <td>CREATE TABLE students</td>
        <td>Empty table created</td>
    </tr>
    <tr>
        <td>2</td>
        <td>INSERT INTO students VALUES (...)</td>
        <td>1 row added to table</td>
    </tr>
    <tr>
        <td>3</td>
        <td>SELECT * FROM students</td>
        <td>Shows 1 row with data</td>
    </tr>
    <tr>
        <td>4</td>
        <td>COMMIT</td>
        <td>Changes saved permanently</td>
    </tr>
</table>

<h4>INSERT with All Columns (Skip Column List):</h4>

<pre>
-- When inserting values for ALL columns in order
INSERT INTO students
VALUES (2, 'Priya Singh', 'priya@email.com', 21, 'Mathematics');
</pre>

<h4>INSERT with NULL Values:</h4>

<pre>
-- Insert with NULL for optional column
INSERT INTO students (student_id, student_name, student_email, age, department)
VALUES (3, 'Amit Patel', 'amit@email.com', NULL, NULL);

-- Or explicitly use NULL
INSERT INTO students (student_id, student_name, student_email)
VALUES (4, 'Sneha Gupta', 'sneha@email.com');
</pre>

<h4>INSERT Multiple Rows (Standard Method):</h4>

<pre>
-- Insert first row
INSERT INTO students (student_id, student_name, student_email, age, department)
VALUES (1, 'Rahul Kumar', 'rahul@email.com', 20, 'Computer Science');

-- Insert second row
INSERT INTO students (student_id, student_name, student_email, age, department)
VALUES (2, 'Priya Singh', 'priya@email.com', 21, 'Mathematics');

-- Insert third row
INSERT INTO students (student_id, student_name, student_email, age, department)
VALUES (3, 'Amit Patel', 'amit@email.com', 22, 'Physics');

-- Save all changes
COMMIT;
</pre>

<h3>2. NEW FEATURE: INSERT ALL (Bulk Insert)</h3>


<p><strong>INSERT ALL</strong> is a new Oracle feature that allows inserting multiple rows in a single statement (more efficient than multiple INSERT statements)</p>

<h4>Syntax:</h4>
<pre>
INSERT ALL
INTO table_name (column1, column2, ...) VALUES (value1, value2, ...)
INTO table_name (column1, column2, ...) VALUES (value1, value2, ...)
INTO table_name (column1, column2, ...) VALUES (value1, value2, ...)
[SELECT 1];
</pre>

<h4>Example – Insert Multiple Rows with INSERT ALL:</h4>

<pre>
-- Insert 5 students in ONE statement
INSERT ALL
INTO students (student_id, student_name, student_email, age, department) VALUES (1, 'Rahul Kumar', 'rahul@email.com', 20, 'Computer Science')
INTO students (student_id, student_name, student_email, age, department) VALUES (2, 'Priya Singh', 'priya@email.com', 21, 'Mathematics')
INTO students (student_id, student_name, student_email, age, department) VALUES (3, 'Amit Patel', 'amit@email.com', 22, 'Physics')
INTO students (student_id, student_name, student_email, age, department) VALUES (4, 'Sneha Gupta', 'sneha@email.com', 20, 'Chemistry')
INTO students (student_id, student_name, student_email, age, department) VALUES (5, 'Vikram Reddy', 'vikram@email.com', 21, 'Computer Science')
SELECT 1;

-- Save changes
COMMIT;
</pre>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Comparison</th>
        <th>Standard INSERT</th>
        <th>INSERT ALL</th>
    </tr>
    <tr>
        <td><strong>Statements Needed</strong></td>
        <td>5 separate INSERT statements</td>
        <td>1 INSERT ALL statement</td>
    </tr>
    <tr>
        <td><strong>Code Length</strong></td>
        <td>Longer (50+ lines)</td>
        <td>Shorter (10 lines)</td>
    </tr>
    <tr>
        <td><strong>Performance</strong></td>
        <td>Slower (5 separate operations)</td>
        <td>Faster (1 bulk operation)</td>
    </tr>
    <tr>
        <td><strong>COMMIT Calls</strong></td>
        <td>5 COMMIT calls needed</td>
        <td>1 COMMIT call needed</td>
    </tr>
    <tr>
        <td><strong>Best For</strong></td>
        <td>Single row insert</td>
        <td>Bulk insert (multiple rows)</td>
    </tr>
</table>

<h4>Complete INSERT ALL Example:</h4>

<pre>
-- Create employees table
CREATE TABLE employees (
    emp_id NUMBER(5) PRIMARY KEY,
    emp_name VARCHAR2(50),
    salary NUMBER(10),
    department VARCHAR2(50)
);

-- Insert 10 employees using INSERT ALL
INSERT ALL
INTO employees (emp_id, emp_name, salary, department) VALUES (1, 'Rahul Sharma', 50000, 'IT')
INTO employees (emp_id, emp_name, salary, department) VALUES (2, 'Priya Mehta', 60000, 'IT')
INTO employees (emp_id, emp_name, salary, department) VALUES (3, 'Amit Kumar', 55000, 'Finance')
INTO employees (emp_id, emp_name, salary, department) VALUES (4, 'Sneha Joshi', 58000, 'Finance')
INTO employees (emp_id, emp_name, salary, department) VALUES (5, 'Vikram Singh', 62000, 'Marketing')
INTO employees (emp_id, emp_name, salary, department) VALUES (6, 'Neha Patel', 57000, 'Marketing')
INTO employees (emp_id, emp_name, salary, department) VALUES (7, 'Rajesh Gupta', 65000, 'IT')
INTO employees (emp_id, emp_name, salary, department) VALUES (8, 'Pooja Reddy', 59000, 'Finance')
INTO employees (emp_id, emp_name, salary, department) VALUES (9, 'Karan Malhotra', 61000, 'IT')
INTO employees (emp_id, emp_name, salary, department) VALUES (10, 'Anita Desai', 56000, 'Marketing')
SELECT 1;

-- Commit all changes
COMMIT;

-- Verify insertion
SELECT * FROM employees;
SELECT COUNT(*) FROM employees; -- Shows 10
</pre>

<h4>When to Use INSERT ALL:</h4>
<ul>
    <li>✅ Bulk data insertion (inserting 5+ rows)</li>
    <li>✅ Loading test data quickly</li>
    <li>✅ Importing data from CSV/files</li>
    <li>✅ Initial database population</li>
    <li>❌ Inserting single row (use standard INSERT)</li>
    <li>❌ Inserting rows with different conditions (use MERGE)</li>
</ul>

<h3>3. UPDATE Command</h3>


<p>Modifies existing data in table rows</p>

<h4>Syntax:</h4>
<pre>
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
</pre>

<h4>Important Note:</h4>
<p>⚠️ Always use WHERE clause! Without WHERE, ALL rows will be updated</p>

<h4>Example 1 – Update Single Column:</h4>

<pre>
-- Update age of student_id = 1
UPDATE students
SET age = 21
WHERE student_id = 1;

-- Commit the change
COMMIT;
</pre>

<h4>Example 2 – Update Multiple Columns:</h4>

<pre>
-- Update multiple columns for student_id = 2
UPDATE students
SET age = 22,
    department = 'Statistics'
WHERE student_id = 2;

COMMIT;
</pre>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Before UPDATE</th>
        <th>After UPDATE</th>
    </tr>
    <tr>
        <td>student_id: 2<br>student_name: Priya Singh<br>age: 21<br>department: Mathematics</td>
        <td>student_id: 2<br>student_name: Priya Singh<br>age: 22<br>department: Statistics</td>
    </tr>
</table>

<h4>Example 3 – Update Without WHERE (DANGEROUS!):</h4>

<pre>
-- This updates ALL rows in table!
UPDATE students
SET age = 25;

-- ALL students now have age = 25 (probably wrong!)
</pre>

<h4>Example 4 – Update with Calculation:</h4>

<pre>
-- Increase salary by 10% for all IT employees
UPDATE employees
SET salary = salary * 1.10
WHERE department = 'IT';

COMMIT;
</pre>

<h4>Example 5 – Update with Subquery:</h4>

<pre>
-- Update department based on another table
UPDATE students s
SET s.department = (SELECT dept_name FROM departments WHERE dept_id = s.dept_id)
WHERE EXISTS (SELECT dept_name FROM departments WHERE dept_id = s.dept_id);
</pre>

<h4>When to Use UPDATE:</h4>
<ul>
    <li>✅ Correcting wrong data</li>
    <li>✅ Updating changed information (new address, phone)</li>
    <li>✅ Bulk updates (update all IT employees salary)</li>
    <li>✅ Applying calculations (increase price by 10%)</li>
    <li>❌ Without WHERE clause (updates all rows – dangerous!)</li>
    <li>❌ When you need to add new data (use INSERT)</li>
</ul>

<h4>Verify UPDATE:</h4>

<pre>
-- Before update
SELECT student_id, student_name, age, department FROM students WHERE student_id = 1;

-- Perform update
UPDATE students SET age = 21 WHERE student_id = 1;
COMMIT;

-- After update
SELECT student_id, student_name, age, department FROM students WHERE student_id = 1;
</pre>

<h3>4. DELETE Command</h3>


<p>Removes rows from table</p>

<h4>Syntax:</h4>
<pre>
DELETE FROM table_name
WHERE condition;
</pre>

<h4>Important Note:</h4>
<p>⚠️ Always use WHERE clause! Without WHERE, ALL rows will be deleted</p>

<h4>Example 1 – Delete Single Row:</h4>

<pre>
-- Delete student with student_id = 3
DELETE FROM students
WHERE student_id = 3;

-- Commit the deletion
COMMIT;
</pre>

<h4>Example 2 – Delete Multiple Rows:</h4>

<pre>
-- Delete all students from Physics department
DELETE FROM students
WHERE department = 'Physics';

COMMIT;
</pre>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Before DELETE</th>
        <th>After DELETE</th>
    </tr>
    <tr>
        <td>5 rows in table:<br>1. Rahul (CS)<br>2. Priya (Math)<br>3. Amit (Physics)<br>4. Sneha (Chem)<br>5. Vikram (CS)</td>
        <td>4 rows in table:<br>1. Rahul (CS)<br>2. Priya (Math)<br>4. Sneha (Chem)<br>5. Vikram (CS)<br>(Amit deleted)</td>
    </tr>
</table>

<h4>Example 3 – Delete Without WHERE (DANGEROUS!):</h4>

<pre>
-- This deletes ALL rows!
DELETE FROM students;

-- Table is now empty (but structure exists)
SELECT COUNT(*) FROM students; -- Shows 0
</pre>

<h4>Example 4 – Delete with Condition:</h4>

<pre>
-- Delete students older than 30
DELETE FROM students
WHERE age > 30;

COMMIT;

-- Delete inactive students
DELETE FROM students
WHERE status = 'Inactive';

COMMIT;
</pre>

<h4>DELETE vs TRUNCATE Comparison:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>DELETE</th>
        <th>TRUNCATE</th>
    </tr>
    <tr>
        <td><strong>Type</strong></td>
        <td>DML (Data Manipulation)</td>
        <td>DDL (Data Definition)</td>
    </tr>
    <tr>
        <td><strong>Auto-Commit</strong></td>
        <td>No (need COMMIT)</td>
        <td>Yes (automatic)</td>
    </tr>
    <tr>
        <td><strong>Can Rollback?</strong></td>
        <td>Yes (before COMMIT)</td>
        <td>No</td>
    </tr>
    <tr>
        <td><strong>WHERE Clause</strong></td>
        <td>Yes (delete specific rows)</td>
        <td>No (delete all rows)</td>
    </tr>
    <tr>
        <td><strong>Speed</strong></td>
        <td>Slower (processes each row)</td>
        <td>Faster (instant)</td>
    </tr>
    <tr>
        <td><strong>Use When</strong></td>
        <td>Delete specific rows</td>
        <td>Delete all rows quickly</td>
    </tr>
</table>

<h4>When to Use DELETE:</h4>
<ul>
    <li>✅ Remove specific rows (use WHERE clause)</li>
    <li>✅ Need to rollback if mistake (before COMMIT)</li>
    <li>✅ Delete based on condition (age > 30, status = 'Inactive')</li>
    <li>❌ Delete all rows quickly (use TRUNCATE instead)</li>
    <li>❌ Want to rollback after COMMIT (can't rollback COMMIT)</li>
</ul>

<h4>Verify DELETE:</h4>

<pre>
-- Before delete
SELECT COUNT(*) FROM students; -- Shows 5

-- Perform delete
DELETE FROM students WHERE student_id = 3;
COMMIT;

-- After delete
SELECT COUNT(*) FROM students; -- Shows 4
</pre>

<h3>5. NEW FEATURE: MERGE (Insert or Update)</h3>

<p><strong>MERGE</strong> is a powerful Oracle feature that combines INSERT and UPDATE. It inserts a row if it doesn't exist, OR updates if it already exists (also called "Upsert")</p>

<h4>Syntax:</h4>
<pre>
MERGE INTO target_table t
USING source_table s
ON (t.column = s.column)
WHEN MATCHED THEN
    UPDATE SET t.column1 = s.column1, t.column2 = s.column2
WHEN NOT MATCHED THEN
    INSERT (column1, column2) VALUES (s.column1, s.column2);
</pre>

<h4>Simple MERGE Example:</h4>

<pre>
-- Create target table
CREATE TABLE student_scores (
    student_id NUMBER(5) PRIMARY KEY,
    student_name VARCHAR2(50),
    score NUMBER(5)
);

-- Insert initial data
INSERT INTO student_scores (student_id, student_name, score)
VALUES (1, 'Rahul', 85);

INSERT INTO student_scores (student_id, student_name, score)
VALUES (2, 'Priya', 90);

COMMIT;

-- Create source data (new scores)
CREATE TABLE score_updates (
    student_id NUMBER(5),
    student_name VARCHAR2(50),
    score NUMBER(5)
);

INSERT INTO score_updates VALUES (1, 'Rahul', 88);  -- Existing student - UPDATE
INSERT INTO score_updates VALUES (2, 'Priya', 92);  -- Existing student - UPDATE
INSERT INTO score_updates VALUES (3, 'Amit', 75);   -- New student - INSERT

COMMIT;
</pre>

<h4>Execute MERGE:</h4>

<pre>
-- Merge source into target
MERGE INTO student_scores t
USING score_updates s
ON (t.student_id = s.student_id)
WHEN MATCHED THEN
    UPDATE SET t.score = s.score, t.student_name = s.student_name
WHEN NOT MATCHED THEN
    INSERT (student_id, student_name, score)
    VALUES (s.student_id, s.student_name, s.score);

-- Commit the merge
COMMIT;

-- Verify results
SELECT * FROM student_scores;
</pre>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>student_id</th>
        <th>student_name</th>
        <th>score</th>
        <th>Action Taken</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Rahul</td>
        <td>88</td>
        <td>UPDATED (was 85)</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Priya</td>
        <td>92</td>
        <td>UPDATED (was 90)</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Amit</td>
        <td>75</td>
        <td>INSERTED (new row)</td>
    </tr>
</table>

<h4>MERGE with Values Clause:</h4>

<pre>
-- MERGE with direct values instead of table
MERGE INTO student_scores t
USING (SELECT 4 AS student_id, 'Neha' AS student_name, 82 AS score FROM dual) s
ON (t.student_id = s.student_id)
WHEN MATCHED THEN
    UPDATE SET t.score = s.score
WHEN NOT MATCHED THEN
    INSERT (student_id, student_name, score)
    VALUES (s.student_id, s.student_name, s.score);

COMMIT;
</pre>

<h4>Complete MERGE Example – Employee Database:</h4>

<pre>
-- Create target table
CREATE TABLE employee_master (
    emp_id NUMBER(5) PRIMARY KEY,
    emp_name VARCHAR2(50),
    salary NUMBER(10),
    department VARCHAR2(50)
);

-- Create source table (HR updates)
CREATE TABLE hr_updates (
    emp_id NUMBER(5),
    emp_name VARCHAR2(50),
    salary NUMBER(10),
    department VARCHAR2(50)
);

-- Insert existing employees
INSERT INTO employee_master VALUES (1, 'Rahul', 50000, 'IT');
INSERT INTO employee_master VALUES (2, 'Priya', 55000, 'Finance');
COMMIT;

-- Insert updates (some existing, some new)
INSERT INTO hr_updates VALUES (1, 'Rahul', 55000, 'IT');  -- Update salary
INSERT INTO hr_updates VALUES (2, 'Priya', 60000, 'Finance'); -- Update salary
INSERT INTO hr_updates VALUES (3, 'Amit', 52000, 'Marketing'); -- New employee

COMMIT;

-- Execute MERGE
MERGE INTO employee_master e
USING hr_updates h
ON (e.emp_id = h.emp_id)
WHEN MATCHED THEN
    UPDATE SET e.salary = h.salary, e.department = h.department
WHEN NOT MATCHED THEN
    INSERT (emp_id, emp_name, salary, department)
    VALUES (h.emp_id, h.emp_name, h.salary, h.department);

COMMIT;

-- Verify
SELECT * FROM employee_master;
</pre>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>emp_id</th>
        <th>emp_name</th>
        <th>salary</th>
        <th>department</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Rahul</td>
        <td>55000</td>
        <td>IT</td>
        <td>UPDATED (50000→55000)</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Priya</td>
        <td>60000</td>
        <td>Finance</td>
        <td>UPDATED (55000→60000)</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Amit</td>
        <td>52000</td>
        <td>Marketing</td>
        <td>INSERTED (new)</td>
    </tr>
</table>

<h4>When to Use MERGE:</h4>
<ul>
    <li>✅ Syncing data from source system</li>
    <li>✅ Updating existing records AND adding new ones</li>
    <li>✅ Importing data where some may already exist</li>
    <li>✅ Daily/weekly data synchronization</li>
    <li>✅ Backups with incremental updates</li>
    <li>❌ Inserting only new data (use INSERT ALL)</li>
    <li>❌ Updating only existing data (use UPDATE)</li>
</ul>

<h4>MERGE vs INSERT + UPDATE:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Approach</th>
        <th>Statements</th>
        <th>Performance</th>
        <th>Complexity</th>
    </tr>
    <tr>
        <td>INSERT + UPDATE</td>
        <td>2 statements (SELECT + INSERT/UPDATE)</td>
        <td>Slower (2 operations)</td>
        <td>More complex</td>
    </tr>
    <tr>
        <td>MERGE</td>
        <td>1 statement</td>
        <td>Faster (1 operation)</td>
        <td>Simpler</td>
    </tr>
</table>

<h3>Complete DML Workflow Example</h3>

<pre>
-- ===== STEP 1: CREATE TABLE =====
CREATE TABLE products (
    product_id NUMBER(5) PRIMARY KEY,
    product_name VARCHAR2(50),
    price NUMBER(10),
    quantity NUMBER(5),
    category VARCHAR2(50)
);

-- ===== STEP 2: INSERT DATA (Standard) =====
INSERT INTO products (product_id, product_name, price, quantity, category)
VALUES (1, 'Laptop', 50000, 10, 'Electronics');

INSERT INTO products (product_id, product_name, price, quantity, category)
VALUES (2, 'Mouse', 500, 50, 'Electronics');

COMMIT;

-- ===== STEP 3: INSERT DATA (Bulk with INSERT ALL) =====
INSERT ALL
INTO products (product_id, product_name, price, quantity, category) VALUES (3, 'Keyboard', 1500, 30, 'Electronics')
INTO products (product_id, product_name, price, quantity, category) VALUES (4, 'Monitor', 15000, 15, 'Electronics')
INTO products (product_id, product_name, price, quantity, category) VALUES (5, 'Pen', 20, 200, 'Office')
SELECT 1;

COMMIT;

-- ===== STEP 4: VERIFY INSERT =====
SELECT * FROM products;
-- Shows 5 products

-- ===== STEP 5: UPDATE DATA =====
-- Increase price of Laptop by 10%
UPDATE products
SET price = price * 1.10
WHERE product_name = 'Laptop';

COMMIT;

-- Verify update
SELECT product_name, price FROM products WHERE product_name = 'Laptop';
-- Price: 55000 (was 50000)

-- ===== STEP 6: DELETE DATA =====
-- Delete products with quantity < 20
DELETE FROM products
WHERE quantity < 20;

COMMIT;

-- Verify delete
SELECT * FROM products;
-- Shows 3 products (Mouse, Keyboard, Pen)

-- ===== STEP 7: MERGE (Upsert) =====
-- Create source table
CREATE TABLE product_updates (
    product_id NUMBER(5),
    product_name VARCHAR2(50),
    price NUMBER(10),
    quantity NUMBER(5)
);

-- Insert update data
INSERT INTO product_updates VALUES (2, 'Mouse', 550, 60);  -- Update
INSERT INTO product_updates VALUES (6, 'Headphone', 3000, 25); -- New

COMMIT;

-- Execute MERGE
MERGE INTO products p
USING product_updates u
ON (p.product_id = u.product_id)
WHEN MATCHED THEN
    UPDATE SET p.price = u.price, p.quantity = u.quantity
WHEN NOT MATCHED THEN
    INSERT (product_id, product_name, price, quantity, category)
    VALUES (u.product_id, u.product_name, u.price, u.quantity, 'Electronics');

COMMIT;

-- Final verification
SELECT * FROM products;
-- Shows 4 products (Mouse updated, Headphone inserted)
</pre>

<h3>DML Commands Summary Table</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Command</th>
        <th>Action</th>
        <th>Auto-Commit</th>
        <th>Can Rollback</th>
        <th>WHERE Clause</th>
        <th>Best For</th>
    </tr>
    <tr>
        <td><strong>INSERT</strong></td>
        <td>Add single row</td>
        <td>No</td>
        <td>Yes</td>
        <td>No</td>
        <td>Single record insertion</td>
    </tr>
    <tr>
        <td><strong>INSERT ALL</strong></td>
        <td>Add multiple rows</td>
        <td>No</td>
        <td>Yes</td>
        <td>No</td>
        <td>Bulk insertion (5+ rows)</td>
    </tr>
    <tr>
        <td><strong>UPDATE</strong></td>
        <td>Modify existing data</td>
        <td>No</td>
        <td>Yes</td>
        <td>Recommended</td>
        <td>Changing existing records</td>
    </tr>
    <tr>
        <td><strong>DELETE</strong></td>
        <td>Remove rows</td>
        <td>No</td>
        <td>Yes</td>
        <td>Recommended</td>
        <td>Removing specific records</td>
    </tr>
    <tr>
        <td><strong>MERGE</strong></td>
        <td>Insert or Update</td>
        <td>No</td>
        <td>Yes</td>
        <td>Yes (ON clause)</td>
        <td>Data synchronization</td>
    </tr>
</table>

<h3>Key Points to Remember</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Point</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td><strong>Always COMMIT DML</strong></td>
        <td>DML changes are not permanent until you COMMIT</td>
    </tr>
    <tr>
        <td><strong>Use WHERE in UPDATE/DELETE</strong></td>
        <td>Without WHERE, ALL rows are affected (dangerous!)</td>
    </tr>
    <tr>
        <td><strong>Can Rollback Before COMMIT</strong></td>
        <td>Use ROLLBACK to undo DML before COMMIT</td>
    </tr>
    <tr>
        <td><strong>INSERT ALL for Bulk</strong></td>
        <td>Use INSERT ALL instead of multiple INSERT statements</td>
    </tr>
    <tr>
        <td><strong>MERGE for Upsert</strong></td>
        <td>Use MERGE when you need to insert OR update</td>
    </tr>
    <tr>
        <td><strong>Verify Changes</strong></td>
        <td>Always SELECT after INSERT/UPDATE/DELETE to verify</td>
    </tr>
    <tr>
        <td><strong>Test First</strong></td>
        <td>Test UPDATE/DELETE with SELECT WHERE first</td>
    </tr>
</table>

<h3>Class Summary</h3>

<p>
In today's detailed lecture, we learned about **DML (Data Manipulation Language)**:
</p>

<ul>
    <li><strong>INSERT:</strong> Add single row to table</li>
    <li><strong>INSERT ALL (New Feature):</strong> Add multiple rows in ONE statement (bulk insert)</li>
    <li><strong>UPDATE:</strong> Modify existing data (use WHERE clause!)</li>
    <li><strong>DELETE:</strong> Remove rows from table (use WHERE clause!)</li>
    <li><strong>MERGE (New Feature):</strong> Insert if new OR Update if exists (Upsert)</li>
    <li><strong>Key特性:</strong> DML does NOT auto-commit, can rollback before COMMIT</li>
</ul>

<p>
<strong>Remember:</strong> Always COMMIT after DML operations. Use WHERE clause in UPDATE and DELETE to avoid affecting all rows. Use INSERT ALL for bulk inserts and MERGE for data synchronization!
</p>

<p>
<strong>Homework:</strong>
</p>
<ul>
    <li>1. Create a "courses" table with 5 columns</li>
    <li>2. Insert 1 course using standard INSERT</li>
    <li>3. Insert 5 courses using INSERT ALL</li>
    <li>4. UPDATE price of 1 course by 10%</li>
    <li>5. DELETE courses with quantity < 5</li>
    <li>6. Create source table and use MERGE to sync data</li>
    <li>7. Verify all changes with SELECT</li>
</ul>

<p>
<strong>Next Topic:</strong> DCL (Data Control Language) – GRANT and REVOKE permissions
</p>

`;

let sqlDQLCompleteContent = `

<h3>SQL DQL (Data Query Language) </h3>

<p>
Good morning students!
Today we will learn about **DQL (Data Query Language)**, which consists of the **SELECT** command. SELECT is the most important and frequently used SQL command because it allows you to retrieve data from tables. Every database user needs to master SELECT to work with data.
</p>

<p>
<strong>What We Will Cover:</strong>
</p>
<ul>
    <li>What is DQL?</li>
    <li>When to use SELECT</li>
    <li>Basic SELECT syntax</li>
    <li>Selecting specific columns</li>
    <li>Selecting all columns</li>
    <li>SELECT with WHERE clause (filtering)</li>
    <li>SELECT with ORDER BY (sorting)</li>
    <li>SELECT with DISTINCT (unique values)</li>
    <li>SELECT with aliases</li>
    <li>Complete practical examples</li>
</ul>

<h3>What is DQL?</h3>

<p>
<strong>DQL (Data Query Language)</strong> or <strong>DRL (Data Retrieval Language)</strong> is the subset of SQL used to retrieve data from database tables. The only command in DQL is **SELECT** [web:24].
</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Purpose</strong></td>
        <td>Retrieve/query data from tables (read-only operation)</td>
    </tr>
    <tr>
        <td><strong>Command</strong></td>
        <td>SELECT (only one command in DQL)</td>
    </tr>
    <tr>
        <td><strong>When to Use</strong></td>
        <td>When you need to view, search, or analyze data</td>
    </tr>
    <tr>
        <td><strong>Auto-Commit</strong></td>
        <td>No – SELECT doesn't change data (no commit needed)</td>
    </tr>
    <tr>
        <td><strong>Impact</strong></td>
        <td>Read-only – does NOT modify data or structure</td>
    </tr>
    <tr>
        <td><strong>Frequency</strong></td>
        <td>Most used SQL command (90% of database operations)</td>
    </tr>
</table>

<h3>DQL vs Other SQL Languages</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Language</th>
        <th>Commands</th>
        <th>Action</th>
        <th>Auto-Commit</th>
    </tr>
    <tr>
        <td><strong>DDL</strong></td>
        <td>CREATE, ALTER, DROP, TRUNCATE</td>
        <td>Modify structure</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td><strong>DML</strong></td>
        <td>INSERT, UPDATE, DELETE</td>
        <td>Modify data</td>
        <td>No</td>
    </tr>
    <tr>
        <td><strong>DQL</strong></td>
        <td>SELECT</td>
        <td>Read data only</td>
        <td>No (not needed)</td>
    </tr>
    <tr>
        <td><strong>DCL</strong></td>
        <td>GRANT, REVOKE</td>
        <td>Control access</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td><strong>TCL</strong></td>
        <td>COMMIT, ROLLBACK</td>
        <td>Manage transactions</td>
        <td>Yes</td>
    </tr>
</table>

<h3>Basic SELECT Syntax</h3>

<h4>Syntax 1 – Select Specific Columns:</h4>
<pre>
SELECT column1, column2, column3
FROM table_name;
</pre>

<h4>Syntax 2 – Select All Columns:</h4>
<pre>
SELECT *
FROM table_name;
</pre>

<h4>Syntax 3 – Select with Condition:</h4>
<pre>
SELECT column1, column2
FROM table_name
WHERE condition;
</pre>

<h4>Syntax 4 – Select with Sorting:</h4>
<pre>
SELECT column1, column2
FROM table_name
ORDER BY column1 ASC;
</pre>

<h3>1. SELECT All Columns (*)</h3>

<h4>Example:</h4>

<pre>
-- Create sample table
CREATE TABLE students (
    student_id NUMBER(5),
    student_name VARCHAR2(50),
    student_email VARCHAR2(100),
    age NUMBER(3),
    department VARCHAR2(50),
    enrollment_date DATE
);

-- Insert sample data
INSERT ALL
INTO students VALUES (1, 'Rahul Kumar', 'rahul@email.com', 20, 'Computer Science', '2024-01-15')
INTO students VALUES (2, 'Priya Singh', 'priya@email.com', 21, 'Mathematics', '2024-01-16')
INTO students VALUES (3, 'Amit Patel', 'amit@email.com', 22, 'Physics', '2024-01-17')
INTO students VALUES (4, 'Sneha Gupta', 'sneha@email.com', 20, 'Chemistry', '2024-01-18')
INTO students VALUES (5, 'Vikram Reddy', 'vikram@email.com', 21, 'Computer Science', '2024-01-19')
SELECT 1;

COMMIT;

-- Select ALL columns from students table
SELECT *
FROM students;
</pre>

<h4>Output:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>student_id</th>
        <th>student_name</th>
        <th>student_email</th>
        <th>age</th>
        <th>department</th>
        <th>enrollment_date</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Rahul Kumar</td>
        <td>rahul@email.com</td>
        <td>20</td>
        <td>Computer Science</td>
        <td>2024-01-15</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Priya Singh</td>
        <td>priya@email.com</td>
        <td>21</td>
        <td>Mathematics</td>
        <td>2024-01-16</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Amit Patel</td>
        <td>amit@email.com</td>
        <td>22</td>
        <td>Physics</td>
        <td>2024-01-17</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Sneha Gupta</td>
        <td>sneha@email.com</td>
        <td>20</td>
        <td>Chemistry</td>
        <td>2024-01-18</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Vikram Reddy</td>
        <td>vikram@email.com</td>
        <td>21</td>
        <td>Computer Science</td>
        <td>2024-01-19</td>
    </tr>
</table>

<h4>When to Use SELECT *:</h4>
<ul>
    <li>✅ Exploring table structure (see all columns)</li>
    <li>✅ Quick data check (view all data)</li>
    <li>✅ Debugging (see complete record)</li>
    <li>❌ Production code (specify columns for performance)</li>
    <li>❌ Large tables with many columns (useless data)</li>
</ul>

<h3>2. SELECT Specific Columns</h3>

<h4>Example:</h4>

<pre>
-- Select only name and department
SELECT student_name, department
FROM students;
</pre>

<h4>Output:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>student_name</th>
        <th>department</th>
    </tr>
    <tr>
        <td>Rahul Kumar</td>
        <td>Computer Science</td>
    </tr>
    <tr>
        <td>Priya Singh</td>
        <td>Mathematics</td>
    </tr>
    <tr>
        <td>Amit Patel</td>
        <td>Physics</td>
    </tr>
    <tr>
        <td>Sneha Gupta</td>
        <td>Chemistry</td>
    </tr>
    <tr>
        <td>Vikram Reddy</td>
        <td>Computer Science</td>
    </tr>
</table>

<h4>More Examples:</h4>

<pre>
-- Select name and email
SELECT student_name, student_email
FROM students;

-- Select id, name, and age
SELECT student_id, student_name, age
FROM students;

-- Select single column
SELECT department
FROM students;
</pre>

<h4>When to Select Specific Columns:</h4>
<ul>
    <li>✅ Production queries (better performance)</li>
    <li>✅ When you need only specific data</li>
    <li>✅ Reducing network traffic</li>
    <li>✅ Clearer, more focused results</li>
</ul>

<h3>3. SELECT with WHERE Clause (Filtering)</h3>


<p>Filter rows based on conditions</p>

<h4>Syntax:</h4>
<pre>
SELECT column1, column2
FROM table_name
WHERE condition;
</pre>

<h4>Example 1 – Filter by Single Value:</h4>

<pre>
-- Select students from Computer Science
SELECT student_name, age, department
FROM students
WHERE department = 'Computer Science';
</pre>

<h4>Output:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>student_name</th>
        <th>age</th>
        <th>department</th>
    </tr>
    <tr>
        <td>Rahul Kumar</td>
        <td>20</td>
        <td>Computer Science</td>
    </tr>
    <tr>
        <td>Vikram Reddy</td>
        <td>21</td>
        <td>Computer Science</td>
    </tr>
</table>

<h4>Example 2 – Filter by Number:</h4>

<pre>
-- Select students older than 20
SELECT student_name, age, department
FROM students
WHERE age > 20;
</pre>

<h4>Output:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>student_name</th>
        <th>age</th>
        <th>department</th>
    </tr>
    <tr>
        <td>Priya Singh</td>
        <td>21</td>
        <td>Mathematics</td>
    </tr>
    <tr>
        <td>Amit Patel</td>
        <td>22</td>
        <td>Physics</td>
    </tr>
    <tr>
        <td>Vikram Reddy</td>
        <td>21</td>
        <td>Computer Science</td>
    </tr>
</table>

<h4>Example 3 – Filter with Multiple Conditions:</h4>

<pre>
-- Students from CS and age 20
SELECT student_name, age, department
FROM students
WHERE department = 'Computer Science' AND age = 20;

-- Students older than 20 OR from Mathematics
SELECT student_name, age, department
FROM students
WHERE age > 20 OR department = 'Mathematics';
</pre>

<h4>Example 4 – Filter with IN Operator:</h4>

<pre>
-- Select students from specific departments
SELECT student_name, department
FROM students
WHERE department IN ('Computer Science', 'Mathematics');
</pre>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>student_name</th>
        <th>department</th>
    </tr>
    <tr>
        <td>Rahul Kumar</td>
        <td>Computer Science</td>
    </tr>
    <tr>
        <td>Priya Singh</td>
        <td>Mathematics</td>
    </tr>
    <tr>
        <td>Vikram Reddy</td>
        <td>Computer Science</td>
    </tr>
</table>

<h4>Example 5 – Filter with BETWEEN Operator:</h4>

<pre>
-- Select students with age between 20 and 21
SELECT student_name, age
FROM students
WHERE age BETWEEN 20 AND 21;
</pre>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>student_name</th>
        <th>age</th>
    </tr>
    <tr>
        <td>Rahul Kumar</td>
        <td>20</td>
    </tr>
    <tr>
        <td>Priya Singh</td>
        <td>21</td>
    </tr>
    <tr>
        <td>Sneha Gupta</td>
        <td>20</td>
    </tr>
    <tr>
        <td>Vikram Reddy</td>
        <td>21</td>
    </tr>
</table>

<h4>Example 6 – Filter with LIKE Operator:</h4>

<pre>
-- Select names starting with 'R'
SELECT student_name
FROM students
WHERE student_name LIKE 'R%';

-- Select names ending with 'a'
SELECT student_name
FROM students
WHERE student_name LIKE '%a';

-- Select names containing 'hi'
SELECT student_name
FROM students
WHERE student_name LIKE '%hi%';
</pre>

<h4>Output (LIKE 'R%'):</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>student_name</th>
    </tr>
    <tr>
        <td>Rahul Kumar</td>
    </tr>
</table>

<h4>Example 7 – Filter with NULL:</h4>

<pre>
-- Create table with NULL
CREATE TABLE employees (
    emp_id NUMBER(5),
    emp_name VARCHAR2(50),
    salary NUMBER(10),
    department VARCHAR2(50)
);

INSERT INTO employees VALUES (1, 'Rahul', 50000, 'IT');
INSERT INTO employees VALUES (2, 'Priya', NULL, 'IT');  -- NULL salary
INSERT INTO employees VALUES (3, 'Amit', 55000, NULL);  -- NULL department

COMMIT;

-- Select employees with NULL salary
SELECT emp_name, salary
FROM employees
WHERE salary IS NULL;

-- Select employees with NOT NULL department
SELECT emp_name, department
FROM employees
WHERE department IS NOT NULL;
</pre>

<h4>WHERE Operators Summary:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Operator</th>
        <th>Purpose</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>=</td>
        <td>Equal to</td>
        <td>WHERE department = 'IT'</td>
    </tr>
    <tr>
        <td>&gt;</td>
        <td>Greater than</td>
        <td>WHERE age > 20</td>
    </tr>
    <tr>
        <td>&lt;</td>
        <td>Less than</td>
        <td>WHERE salary < 50000</td>
    </tr>
    <tr>
        <td>&gt;=</td>
        <td>Greater or equal</td>
        <td>WHERE age >= 20</td>
    </tr>
    <tr>
        <td>&lt;=</td>
        <td>Less or equal</td>
        <td>WHERE age <= 21</td>
    </tr>
    <tr>
        <td>!= or &lt;&gt;</td>
        <td>Not equal</td>
        <td>WHERE department != 'IT'</td>
    </tr>
    <tr>
        <td>IN</td>
        <td>Match any value in list</td>
        <td>WHERE dept IN ('IT', 'Finance')</td>
    </tr>
    <tr>
        <td>BETWEEN</td>
        <td>Within range</td>
        <td>WHERE age BETWEEN 20 AND 25</td>
    </tr>
    <tr>
        <td>LIKE</td>
        <td>Pattern match</td>
        <td>WHERE name LIKE 'R%'</td>
    </tr>
    <tr>
        <td>IS NULL</td>
        <td>Is NULL value</td>
        <td>WHERE salary IS NULL</td>
    </tr>
    <tr>
        <td>IS NOT NULL</td>
        <td>Is not NULL</td>
        <td>WHERE dept IS NOT NULL</td>
    </tr>
</table>

<h4>Logical Operators:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Operator</th>
        <th>Purpose</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>AND</td>
        <td>Both conditions must be true</td>
        <td>WHERE age > 20 AND dept = 'IT'</td>
    </tr>
    <tr>
        <td>OR</td>
        <td>At least one condition true</td>
        <td>WHERE age > 20 OR dept = 'IT'</td>
    </tr>
    <tr>
        <td>NOT</td>
        <td>Negate condition</td>
        <td>WHERE NOT dept = 'IT'</td>
    </tr>
</table>

<h3>4. SELECT with ORDER BY (Sorting)</h3>

<p>Sort results by one or more columns</p>

<h4>Syntax:</h4>
<pre>
SELECT column1, column2
FROM table_name
ORDER BY column1 ASC;  -- ASC for ascending, DESC for descending
</pre>

<h4>Example 1 – Sort by Single Column (Ascending):</h4>

<pre>
-- Sort students by name (ascending)
SELECT student_name, age, department
FROM students
ORDER BY student_name ASC;
</pre>

<h4>Output:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>student_name</th>
        <th>age</th>
        <th>department</th>
    </tr>
    <tr>
        <td>Amit Patel</td>
        <td>22</td>
        <td>Physics</td>
    </tr>
    <tr>
        <td>Priya Singh</td>
        <td>21</td>
        <td>Mathematics</td>
    </tr>
    <tr>
        <td>Rahul Kumar</td>
        <td>20</td>
        <td>Computer Science</td>
    </tr>
    <tr>
        <td>Sneha Gupta</td>
        <td>20</td>
        <td>Chemistry</td>
    </tr>
    <tr>
        <td>Vikram Reddy</td>
        <td>21</td>
        <td>Computer Science</td>
    </tr>
</table>

<h4>Example 2 – Sort by Single Column (Descending):</h4>

<pre>
-- Sort students by age (descending - oldest first)
SELECT student_name, age, department
FROM students
ORDER BY age DESC;
</pre>

<h4>Output:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>student_name</th>
        <th>age</th>
        <th>department</th>
    </tr>
    <tr>
        <td>Amit Patel</td>
        <td>22</td>
        <td>Physics</td>
    </tr>
    <tr>
        <td>Priya Singh</td>
        <td>21</td>
        <td>Mathematics</td>
    </tr>
    <tr>
        <td>Vikram Reddy</td>
        <td>21</td>
        <td>Computer Science</td>
    </tr>
    <tr>
        <td>Rahul Kumar</td>
        <td>20</td>
        <td>Computer Science</td>
    </tr>
    <tr>
        <td>Sneha Gupta</td>
        <td>20</td>
        <td>Chemistry</td>
    </tr>
</table>

<h4>Example 3 – Sort by Multiple Columns:</h4>

<pre>
-- Sort by department first, then by age within department
SELECT student_name, age, department
FROM students
ORDER BY department ASC, age DESC;
</pre>

<h4>Output:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>student_name</th>
        <th>age</th>
        <th>department</th>
    </tr>
    <tr>
        <td>Sneha Gupta</td>
        <td>20</td>
        <td>Chemistry</td>
    </tr>
    <tr>
        <td>Rahul Kumar</td>
        <td>20</td>
        <td>Computer Science</td>
    </tr>
    <tr>
        <td>Vikram Reddy</td>
        <td>21</td>
        <td>Computer Science</td>
    </tr>
    <tr>
        <td>Priya Singh</td>
        <td>21</td>
        <td>Mathematics</td>
    </tr>
    <tr>
        <td>Amit Patel</td>
        <td>22</td>
        <td>Physics</td>
    </tr>
</table>

<h4>ASC vs DESC Summary:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Order</th>
        <th>Numbers</th>
        <th>Text</th>
        <th>Dates</th>
        <th>Default</th>
    </tr>
    <tr>
        <td><strong>ASC</strong></td>
        <td>1, 2, 3, 4, 5</td>
        <td>A, B, C, D</td>
        <td>Oldest → Newest</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td><strong>DESC</strong></td>
        <td>5, 4, 3, 2, 1</td>
        <td>Z, Y, X, W</td>
        <td>Newest → Oldest</td>
        <td>No</td>
    </tr>
</table>

<h3>5. SELECT with DISTINCT (Unique Values)</h3>

<p>Return only unique (different) values, removing duplicates</p>

<h4>Syntax:</h4>
<pre>
SELECT DISTINCT column1
FROM table_name;
</pre>

<h4>Example:</h4>

<pre>
-- Get all departments (with duplicates)
SELECT department
FROM students;
</pre>

<h4>Output (with duplicates):</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>department</th>
    </tr>
    <tr>
        <td>Computer Science</td>
    </tr>
    <tr>
        <td>Mathematics</td>
    </tr>
    <tr>
        <td>Physics</td>
    </tr>
    <tr>
        <td>Chemistry</td>
    </tr>
    <tr>
        <td>Computer Science</td>
    </tr>
</table>

<pre>
-- Get unique departments (no duplicates)
SELECT DISTINCT department
FROM students;
</pre>

<h4>Output (DISTINCT):</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>department</th>
    </tr>
    <tr>
        <td>Computer Science</td>
    </tr>
    <tr>
        <td>Mathematics</td>
    </tr>
    <tr>
        <td>Physics</td>
    </tr>
    <tr>
        <td>Chemistry</td>
    </tr>
</table>

<h4>More DISTINCT Examples:</h4>

<pre>
-- Count unique departments
SELECT COUNT(DISTINCT department)
FROM students;
-- Result: 4

-- Get unique age and department combinations
SELECT DISTINCT age, department
FROM students
ORDER BY age;
</pre>

<h4>Output (DISTINCT age, department):</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>age</th>
        <th>department</th>
    </tr>
    <tr>
        <td>20</td>
        <td>Computer Science</td>
    </tr>
    <tr>
        <td>20</td>
        <td>Chemistry</td>
    </tr>
    <tr>
        <td>21</td>
        <td>Mathematics</td>
    </tr>
    <tr>
        <td>21</td>
        <td>Computer Science</td>
    </tr>
    <tr>
        <td>22</td>
        <td>Physics</td>
    </tr>
</table>

<h4>When to Use DISTINCT:</h4>
<ul>
    <li>✅ Get list of unique values (departments, categories)</li>
    <li>✅ Count unique items (COUNT DISTINCT)</li>
    <li>✅ Remove duplicate data from results</li>
    <li>✅ Data analysis and reporting</li>
    <li>❌ When you need all rows (including duplicates)</li>
    <li>❌ Large tables (DISTINCT can be slow)</li>
</ul>

<h3>6. ALIAS NAMES</h3>

<p>
**Alias Names** are **temporary names** for columns or tables. They are created at two levels:
</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Level</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>**i) Column Level Alias**</td>
        <td>Create alias names for **columns** (change column names in output)</td>
    </tr>
    <tr>
        <td>**ii) Table Level Alias**</td>
        <td>Create alias name for **table** (temporary table name in query)</td>
    </tr>
</table>

<h4>Syntax for Aliases:</h4>

<pre>
SELECT column_name1 alias_name1,
       column_name2 alias_name2,
       column_name3 alias_name3
FROM table_name table_alias;
</pre>

<h3>i) COLUMN LEVEL ALIAS</h3>

<h4>Column Alias Example - Your Exact Example:</h4>

<pre>
-- Your example from notes (CORRECT WAY)
SELECT deptno X,
       dname Y,
       loc Z
FROM dept D;
</pre>

<h4>In this query:</h4>
<ul>
    <li>**D** = Table alias for **dept** table</li>
    <li>**X** = Column alias for **deptno** column</li>
    <li>**Y** = Column alias for **dname** column</li>
    <li>**Z** = Column alias for **loc** column</li>
</ul>

<h3>6. SELECT with Column Aliases</h3>

<p>Change column names in output for better readability</p>

<h4>Syntax:</h4>
<pre>
SELECT column1 AS alias1, column2 alias2
FROM table_name;
</pre>

<h4>Example:</h4>

<pre>
-- Without aliases
SELECT student_name, age, department
FROM students;

-- With aliases
SELECT student_name AS Name,
       age AS Age,
       department AS Department
FROM students;
</pre>

<h4>Output Comparison:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Without Alias</th>
        <th>With Alias</th>
    </tr>
    <tr>
        <td>student_name<br>age<br>department</td>
        <td>Name<br>Age<br>Department</td>
    </tr>
</table>

<h4>More Alias Examples:</h4>

<pre>
-- Alias with spaces (use quotes)
SELECT student_name AS "Student Name",
       student_email AS "Email Address"
FROM students;

-- Alias for calculation
SELECT student_name,
       age AS "Student Age",
       age + 1 AS "Next Year Age"
FROM students;

-- Alias without AS (works too)
SELECT student_name Name,
       age Age
FROM students;
</pre>

<h3>Complete SELECT Examples</h3>

<h4>Example 1 – Basic Query:</h4>

<pre>
SELECT student_name, department
FROM students
WHERE age > 20
ORDER BY department ASC;
</pre>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>student_name</th>
        <th>department</th>
    </tr>
    <tr>
        <td>Vikram Reddy</td>
        <td>Computer Science</td>
    </tr>
    <tr>
        <td>Priya Singh</td>
        <td>Mathematics</td>
    </tr>
    <tr>
        <td>Amit Patel</td>
        <td>Physics</td>
    </tr>
</table>

<h4>Example 2 – Complex Query:</h4>

<pre>
SELECT DISTINCT department,
       COUNT(*) AS total_students,
       AVG(age) AS average_age
FROM students
WHERE age BETWEEN 20 AND 22
GROUP BY department
ORDER BY total_students DESC;
</pre>

<h3>SELECT Best Practices</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Practice</th>
        <th>Why</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>Specify columns</td>
        <td>Better performance</td>
        <td>SELECT name, age (not SELECT *)</td>
    </tr>
    <tr>
        <td>Use WHERE</td>
        <td>Filter unnecessary data</td>
        <td>SELECT * WHERE age > 20</td>
    </tr>
    <tr>
        <td>Use aliases</td>
        <td>Clearer output</td>
        <td>SELECT name AS "Student Name"</td>
    </tr>
    <tr>
        <td>Use ORDER BY</td>
        <td>Predictable results</td>
        <td>ORDER BY name ASC</td>
    </tr>
    <tr>
        <td>Use DISTINCT</td>
        <td>Remove duplicates</td>
        <td>SELECT DISTINCT department</td>
    </tr>
</table>

<h3>Class Summary</h3>

<p>
In today's lecture, we learned about **DQL (Data Query Language)** and the **SELECT** command:
</p>

<ul>
    <li><strong>What is DQL:</strong> Language for retrieving data (only SELECT command)</li>
    <li><strong>SELECT *:</strong> Select all columns (quick exploration)</li>
    <li><strong>SELECT columns:</strong> Select specific columns (better performance)</li>
    <li><strong>WHERE clause:</strong> Filter rows (age > 20, dept = 'IT')</li>
    <li><strong>WHERE operators:</strong> =, >, <, IN, BETWEEN, LIKE, IS NULL</li>
    <li><strong>ORDER BY:</strong> Sort results (ASC ascending, DESC descending)</li>
    <li><strong>DISTINCT:</strong> Get unique values only</li>
    <li><strong>Aliases:</strong> Change column names in output (AS Name)</li>
</ul>

<p>
<strong>Remember:</strong> SELECT is the most used SQL command (90% of operations). Always specify columns instead of SELECT * for better performance. Use WHERE to filter and ORDER BY to sort!
</p>

<p>
<strong>Homework:</strong>
</p>
<ul>
    <li>1. Create "employees" table with 6 columns</li>
    <li>2. Insert 10 employee records</li>
    <li>3. SELECT all employees</li>
    <li>4. SELECT name, salary, department only</li>
    <li>5. SELECT employees with salary > 50000</li>
    <li>6. SELECT employees ORDER BY salary DESC</li>
    <li>7. SELECT DISTINCT departments</li>
    <li>8. SELECT with aliases for better readability</li>
</ul>

<p>
<strong>Next Topic:</strong> SQL Aggregate Functions (COUNT, SUM, AVG, MAX, MIN) with GROUP BY
</p>

`;

let sqlTCLCompleteContent = `

<h3>SQL TCL (Transaction Control Language)</h3>

<p>
Good morning students!
Today we will learn about **TCL (Transaction Control Language)**, which is used to manage transactions in Oracle Database. A transaction is a group of SQL operations that should be executed together as one unit – either all succeed or all fail. TCL commands ensure data integrity and help you recover from mistakes.
</p>

<p>
<strong>What We Will Cover:</strong>
</p>
<ul>
    <li>What is a Transaction?</li>
    <li>When to use TCL commands</li>
    <li>COMMIT – Save changes permanently</li>
    <li>ROLLBACK – Undo changes</li>
    <li>SAVEPOINT – Mark points within transaction</li>
    <li>Complete practical examples</li>
    <li>Transaction properties (ACID)</li>
</ul>

<h3>What is a Transaction?</h3>

<p>
A **Transaction** is a logical unit of work that consists of one or more SQL statements. All statements in a transaction are executed together – either all succeed (commit) or all fail (rollback) [web:24].
</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Definition</strong></td>
        <td>Group of SQL operations executed as one unit</td>
    </tr>
    <tr>
        <td><strong>Example</strong></td>
        <td>Transfer money: (1) Deduct from Account A, (2) Add to Account B</td>
    </tr>
    <tr>
        <td><strong>Rule</strong></td>
        <td>All operations succeed OR all fail (no partial success)</td>
    </tr>
    <tr>
        <td><strong>TCL Commands</strong></td>
        <td>COMMIT, ROLLBACK, SAVEPOINT</td>
    </tr>
    <tr>
        <td><strong>When Started</strong></td>
        <td>First DML statement (INSERT, UPDATE, DELETE)</td>
    </tr>
    <tr>
        <td><strong>When Ended</strong></td>
        <td>COMMIT or ROLLBACK executed</td>
    </tr>
</table>

<h4>Real-World Transaction Example:</h4>

<pre>
-- Bank Money Transfer Transaction
-- Step 1: Deduct 10000 from Rahul's account
UPDATE accounts
SET balance = balance - 10000
WHERE account_holder = 'Rahul';

-- Step 2: Add 10000 to Priya's account
UPDATE accounts
SET balance = balance + 10000
WHERE account_holder = 'Priya';

-- Step 3: Save both changes together
COMMIT;
</pre>

<p>
<strong>Important:</strong> If Step 2 fails, Step 1 must also be undone (rollback) – money should not disappear!
</p>

<h3>Transaction Example in Student Database</h3>

<pre>
-- Transaction: Enroll student in course
-- Step 1: Add enrollment record
INSERT INTO enrollments (enrollment_id, student_id, course_id)
VALUES (101, 1, 5);

-- Step 2: Update course seat count
UPDATE courses
SET seats_available = seats_available - 1
WHERE course_id = 5;

-- Step 3: Commit both changes
COMMIT;
</pre>

<h3>TCL Commands Overview</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Command</th>
        <th>Purpose</th>
        <th>When to Use</th>
        <th>Effect</th>
    </tr>
    <tr>
        <td><strong>COMMIT</strong></td>
        <td>Save all changes permanently</td>
        <td>After successful transaction</td>
        <td>Changes cannot be undone</td>
    </tr>
    <tr>
        <td><strong>ROLLBACK</strong></td>
        <td>Undo all changes in transaction</td>
        <td>When error occurs or mistake made</td>
        <td>Changes reverted to before transaction</td>
    </tr>
    <tr>
        <td><strong>SAVEPOINT</strong></td>
        <td>Mark point within transaction</td>
        <td>When transaction has multiple steps</td>
        <td>Can rollback to specific point</td>
    </tr>
</table>

<h3>1. COMMIT – Save Changes Permanently</h3>

<p>Permanently saves all changes made during the current transaction to the database</p>

<h4>Syntax:</h4>
<pre>
COMMIT;
</pre>

<h4>When COMMIT is Needed:</h4>
<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>DML Command</th>
        <th>Auto-Commit?</th>
        <th>Need COMMIT?</th>
    </tr>
    <tr>
        <td>INSERT</td>
        <td>No</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>UPDATE</td>
        <td>No</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>DELETE</td>
        <td>No</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>SELECT</td>
        <td>No</td>
        <td>No (read-only)</td>
    </tr>
    <tr>
        <td>DDL (CREATE, ALTER)</td>
        <td>Yes</td>
        <td>No (auto-commits)</td>
    </tr>
</table>

<h4>Basic COMMIT Example:</h4>

<pre>
-- Step 1: Insert new student
INSERT INTO students (student_id, student_name, student_email, age, department)
VALUES (6, 'Neha Sharma', 'neha@email.com', 20, 'Chemistry');

-- Step 2: Check if inserted (visible in your session)
SELECT * FROM students WHERE student_id = 6;
-- Shows the new student

-- Step 3: Commit to save permanently
COMMIT;

-- Step 4: Verify saved (visible to others too)
SELECT * FROM students WHERE student_id = 6;
-- Student is now permanently saved
</pre>

<h4>Complete Transaction with COMMIT:</h4>

<pre>
-- Transaction: Add new student and enroll in course

-- Step 1: Insert student
INSERT INTO students (student_id, student_name, student_email, age, department)
VALUES (7, 'Karan Malhotra', 'karan@email.com', 21, 'Computer Science');

-- Step 2: Insert enrollment
INSERT INTO enrollments (enrollment_id, student_id, course_id)
VALUES (102, 7, 1);

-- Step 3: Update course seats
UPDATE courses
SET seats_available = seats_available - 1
WHERE course_id = 1;

-- Step 4: All successful – commit
COMMIT;

-- Step 5: Verify all changes
SELECT * FROM students WHERE student_id = 7;
SELECT * FROM enrollments WHERE enrollment_id = 102;
SELECT seats_available FROM courses WHERE course_id = 1;
</pre>

<h4>What Happens When You COMMIT:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Action</th>
        <th>Before COMMIT</th>
        <th>After COMMIT</th>
    </tr>
    <tr>
        <td><strong>Visibility</strong></td>
        <td>Only visible to your session</td>
        <td>Visible to ALL users</td>
    </tr>
    <tr>
        <td><strong>Undo Possible</strong></td>
        <td>Yes (ROLLBACK works)</td>
        <td>No (permanent)</td>
    </tr>
    <tr>
        <td><strong>Lock Released</strong></td>
        <td>Rows locked</td>
        <td>Locks released</td>
    </tr>
    <tr>
        <td><strong>Transaction End</strong></td>
        <td>Transaction active</td>
        <td>Transaction complete</td>
    </tr>
</table>

<h4>When to Use COMMIT:</h4>
<ul>
    <li>✅ After successful INSERT, UPDATE, DELETE operations</li>
    <li>✅ End of multi-step transaction</li>
    <li>✅ Before closing database connection</li>
    <li>✅ When data is verified and correct</li>
    <li>❌ Before verifying data (might commit wrong data)</li>
    <li>❌ Too frequently (reduces ROLLBACK ability)</li>
</ul>

<h3>2. ROLLBACK – Undo Changes</h3>

<p>Undoes all changes made during the current transaction, reverting data to state before transaction started</p>

<h4>Syntax:</h4>
<pre>
ROLLBACK;
</pre>

<h4>Basic ROLLBACK Example:</h4>

<pre>
-- Step 1: Insert student (but might be wrong)
INSERT INTO students (student_id, student_name, student_email, age, department)
VALUES (8, 'Wrong Student', 'wrong@email.com', 99, 'Unknown');

-- Step 2: Check insertion
SELECT * FROM students WHERE student_id = 8;
-- Shows wrong student

-- Step 3: Decide to undo
ROLLBACK;

-- Step 4: Verify rollback
SELECT * FROM students WHERE student_id = 8;
-- No row found (student deleted)
</pre>

<h4>Complete ROLLBACK Example:</h4>

<pre>
-- Transaction: Update employee salary (potentially wrong)

-- Step 1: Check current salary
SELECT emp_name, salary FROM employees WHERE emp_id = 1;
-- Current salary: 50000

-- Step 2: Update salary
UPDATE employees
SET salary = 100000
WHERE emp_id = 1;

-- Step 3: Check updated salary
SELECT emp_name, salary FROM employees WHERE emp_id = 1;
-- Salary: 100000 (looks too high!)

-- Step 4: Realize mistake
ROLLBACK;

-- Step 5: Verify rollback
SELECT emp_name, salary FROM employees WHERE emp_id = 1;
-- Salary back to: 50000
</pre>

<h4>ROLLBACK vs COMMIT Comparison:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>ROLLBACK</th>
        <th>COMMIT</th>
    </tr>
    <tr>
        <td><strong>Action</strong></td>
        <td>Undo changes</td>
        <td>Save changes</td>
    </tr>
    <tr>
        <td><strong>Visibility</strong></td>
        <td>Changes disappear</td>
        <td>Changes visible to all</td>
    </tr>
    <tr>
        <td><strong>Undo Possible</strong></td>
        <td>No (after ROLLBACK)</td>
        <td>No (after COMMIT)</td>
    </tr>
    <tr>
        <td><strong>Locks</strong></td>
        <td>Released</td>
        <td>Released</td>
    </tr>
    <tr>
        <td><strong>When to Use</strong></td>
        <td>Error or mistake</td>
        <td>Data verified correct</td>
    </tr>
</table>

<h4>When to Use ROLLBACK:</h4>
<ul>
    <li>✅ Error occurred during transaction</li>
    <li>✅ Wrong data inserted/updated</li>
    <li>✅ Business rule violated</li>
    <li>✅ System crash during transaction</li>
    <li>✅ Testing – want to revert test changes</li>
    <li>❌ After COMMIT (can't rollback committed changes)</li>
    <li>❌ DDL operations (auto-committed)</li>
</ul>

<h4>Automatic ROLLBACK:</h4>

<pre>
-- Transaction automatically rolls back if:

-- 1. System crash
-- 2. Database shutdown
-- 3. User disconnects without COMMIT
-- 4. Error in SQL statement
UPDATE employees SET salary = 999999 WHERE emp_id = 999;
-- Error: emp_id 999 not found
-- Transaction automatically rolled back!
</pre>

<h3>3. SAVEPOINT – Mark Points Within Transaction</h3>

<p><strong>SAVEPOINT</strong> marks a point within a transaction where you can rollback to later. Instead of rolling back entire transaction, you can rollback to specific savepoint</p>

<h4>Syntax:</h4>
<pre>
-- Create savepoint
SAVEPOINT savepoint_name;

-- Rollback to savepoint
ROLLBACK TO SAVEPOINT savepoint_name;
</pre>

<h4>Basic SAVEPOINT Example:</h4>

<pre>
-- Transaction with multiple steps
INSERT INTO students (student_id, student_name, age, department)
VALUES (9, 'Student A', 20, 'CS');

-- Mark savepoint after first insert
SAVEPOINT sp_after_first;

INSERT INTO students (student_id, student_name, age, department)
VALUES (10, 'Student B', 21, 'Math');

-- Mark savepoint after second insert
SAVEPOINT sp_after_second;

INSERT INTO students (student_id, student_name, age, department)
VALUES (11, 'Student C', 22, 'Physics');

-- Check all inserts
SELECT student_id, student_name FROM students WHERE student_id >= 9;
-- Shows: Student A, Student B, Student C

-- Oops! Student C is wrong, rollback to sp_after_second
ROLLBACK TO SAVEPOINT sp_after_second;

-- Verify Student C removed
SELECT student_id, student_name FROM students WHERE student_id >= 9;
-- Shows: Student A, Student B (Student C removed)

-- Commit remaining changes
COMMIT;
</pre>

<h4>Complete SAVEPOINT Example – Bank Transaction:</h4>

<pre>
-- Transaction: Transfer money between 3 accounts

-- Step 1: Deduct from Account A
UPDATE accounts
SET balance = balance - 5000
WHERE account_id = 1;

SAVEPOINT sp_account_a;

-- Step 2: Add to Account B
UPDATE accounts
SET balance = balance + 3000
WHERE account_id = 2;

SAVEPOINT sp_account_b;

-- Step 3: Add to Account C
UPDATE accounts
SET balance = balance + 2000
WHERE account_id = 3;

-- Check all updates
SELECT account_id, balance FROM accounts WHERE account_id <= 3;

-- Oops! Account C update was wrong
ROLLBACK TO SAVEPOINT sp_account_b;

-- Verify Account C not updated
SELECT account_id, balance FROM accounts WHERE account_id <= 3;
-- Account A and B updated, C original

-- Commit remaining changes
COMMIT;
</pre>

<h4>SAVEPOINT vs ROLLBACK Comparison:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Scenario</th>
        <th>ROLLBACK</th>
        <th>ROLLBACK TO SAVEPOINT</th>
    </tr>
    <tr>
        <td>Undo entire transaction</td>
        <td>Yes – all changes undone</td>
        <td>No – only changes after savepoint</td>
    </tr>
    <tr>
        <td>Undo specific step</td>
        <td>No – must undo all</td>
        <td>Yes – rollback to savepoint</td>
    </tr>
    <tr>
        <td>Multiple undo points</td>
        <td>No – only one point</td>
        <td>Yes – multiple savepoints</td>
    </tr>
    <tr>
        <td>Use case</td>
        <td>Error in final step</td>
        <td>Error in middle step</td>
    </tr>
</table>

<h4>When to Use SAVEPOINT:</h4>
<ul>
    <li>✅ Large transaction with many steps</li>
    <li>✅ Want to undo specific step only</li>
    <li>✅ Multi-stage process (payment, shipping, notification)</li>
    <li>✅ Testing – checkpoint at each stage</li>
    <li>❌ Simple transaction (single step)</li>
    <li>❌ Too many savepoints (complexity)</li>
</ul>

<h3>Complete Transaction Example – End-to-End</h3>

<pre>
-- ===== SCENARIO: Successful Transaction =====

-- Start transaction
INSERT INTO students (student_id, student_name, department) VALUES (12, 'Test Student', 'CS');
INSERT INTO enrollments (enrollment_id, student_id, course_id) VALUES (103, 12, 1);
UPDATE courses SET seats_available = seats_available - 1 WHERE course_id = 1;

-- All successful
COMMIT;

-- Verify
SELECT * FROM students WHERE student_id = 12;
SELECT * FROM enrollments WHERE enrollment_id = 103;


-- ===== SCENARIO: Transaction with Error =====

-- Start transaction
INSERT INTO students (student_id, student_name, department) VALUES (13, 'Test 2', 'Math');
INSERT INTO enrollments (enrollment_id, student_id, course_id) VALUES (104, 13, 999);
-- Error: course_id 999 not found!

-- Rollback entire transaction
ROLLBACK;

-- Verify nothing inserted
SELECT * FROM students WHERE student_id = 13;
-- No row found


-- ===== SCENARIO: Transaction with SAVEPOINT =====

-- Start transaction
INSERT INTO students (student_id, student_name, department) VALUES (14, 'Test 3', 'CS');
SAVEPOINT sp_1;

INSERT INTO students (student_id, student_name, department) VALUES (15, 'Test 4', 'Math');
SAVEPOINT sp_2;

INSERT INTO students (student_id, student_name, department) VALUES (16, 'Wrong Student', 'Invalid');
-- Error: Invalid department!

-- Rollback to sp_2 (keep first 2 inserts)
ROLLBACK TO SAVEPOINT sp_2;

-- Verify
SELECT student_id, student_name FROM students WHERE student_id >= 14;
-- Shows: Test 3, Test 4 (Wrong Student removed)

COMMIT;
</pre>

<h3>Transaction Properties – ACID</h3>

<p>
Every transaction must follow **ACID** properties to ensure data integrity [web:24]:
</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Example</th>
    </tr>
    <tr>
        <td><strong>A</strong> – Atomicity</td>
        <td>All operations succeed OR all fail</td>
        <td>Transfer: deduct AND add both succeed, or both fail</td>
    </tr>
    <tr>
        <td><strong>C</strong> – Consistency</td>
        <td>Database moves from one valid state to another</td>
        <td>Total balance before = total balance after transfer</td>
    </tr>
    <tr>
        <td><strong>I</strong> – Isolation</td>
        <td>Transactions don't interfere with each other</td>
        <td>User A and User B transactions are independent</td>
    </tr>
    <tr>
        <td><strong>D</strong> – Durability</td>
        <td>Committed changes are permanent</td>
        <td>After COMMIT, changes survive system crash</td>
    </tr>
</table>

<h3>TCL Commands Summary</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Command</th>
        <th>Action</th>
        <th>Auto-Commit</th>
        <th>Can Undo After?</th>
        <th>When to Use</th>
    </tr>
    <tr>
        <td><strong>COMMIT</strong></td>
        <td>Save permanently</td>
        <td>No</td>
        <td>No (permanent)</td>
        <td>Transaction successful</td>
    </tr>
    <tr>
        <td><strong>ROLLBACK</strong></td>
        <td>Undo all changes</td>
        <td>No</td>
        <td>No (after rollback)</td>
        <td>Error or mistake</td>
    </tr>
    <tr>
        <td><strong>SAVEPOINT</strong></td>
        <td>Mark point in transaction</td>
        <td>No</td>
        <td>Yes (before COMMIT)</td>
        <td>Large transaction</td>
    </tr>
</table>

<h3>Key Points to Remember</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Point</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td><strong>DML needs COMMIT</strong></td>
        <td>INSERT, UPDATE, DELETE are not permanent until COMMIT</td>
    </tr>
    <tr>
        <td><strong>DDL auto-commits</strong></td>
        <td>CREATE, ALTER, DROP automatically commit (no COMMIT needed)</td>
    </tr>
    <tr>
        <td><strong>ROLLBACK before COMMIT</strong></td>
        <td>Can only rollback transaction before committing</td>
    </tr>
    <tr>
        <td><strong>COMMIT is permanent</strong></td>
        <td>After COMMIT, cannot rollback – changes are saved</td>
    </tr>
    <tr>
        <td><strong>SAVEPOINT for checkpoints</strong></td>
        <td>Use SAVEPOINT in large transactions to mark checkpoints</td>
    </tr>
    <tr>
        <td><strong>Auto-ROLLBACK on error</strong></td>
        <td>Transaction automatically rolls back if error occurs</td>
    </tr>
    <tr>
        <td><strong>Transaction ends at COMMIT/ROLLBACK</strong></td>
        <td>New transaction starts after COMMIT or ROLLBACK</td>
    </tr>
</table>

<h3>Class Summary</h3>

<p>
In today's lecture, we learned about **TCL (Transaction Control Language)**:
</p>

<ul>
    <li><strong>What is Transaction:</strong> Group of SQL operations executed as one unit</li>
    <li><strong>COMMIT:</strong> Save all changes permanently (cannot undo)</li>
    <li><strong>ROLLBACK:</strong> Undo all changes in transaction (revert to before)</li>
    <li><strong>SAVEPOINT:</strong> Mark point within transaction (rollback to specific point)</li>
    <li><strong>ACID Properties:</strong> Atomicity, Consistency, Isolation, Durability</li>
    <li><strong>Key规则:</strong> DML needs COMMIT, DDL auto-commits, can't rollback after COMMIT</li>
</ul>

<p>
<strong>Remember:</strong> Always COMMIT after successful DML operations. Use ROLLBACK when error occurs. Use SAVEPOINT for large transactions with multiple steps. Never commit wrong data!
</p>

<p>
<strong>Homework:</strong>
</p>
<ul>
    <li>1. Insert 3 students, then COMMIT</li>
    <li>2. Insert 1 student, verify, then ROLLBACK</li>
    <li>3. Create transaction with SAVEPOINT at each insert</li>
    <li>4. Rollback to SAVEPOINT (remove last insert only)</li>
    <li>5. Update 2 records, then COMMIT</li>
    <li>6. Delete 1 record, realize mistake, ROLLBACK</li>
    <li>7. Verify all results with SELECT</li>
</ul>

<p>
<strong>Next Topic:</strong> SQL Aggregate Functions (COUNT, SUM, AVG, MAX, MIN) with GROUP BY and HAVING clauses
</p>

`;

let sqlNumericDataTypesContent = `

<h3>SQL Numeric Data Types in Oracle</h3>

<p>
Good morning students!
Today we will learn about **Numeric Data Types** in Oracle Database. Numeric data types are used to store numbers — integers, decimals, and floating-point values. Understanding numeric data types is crucial because they affect storage, precision, and performance.
</p>

<p>
<strong>What We Will Cover:</strong>
</p>
<ul>
    <li>Introduction to Numeric Data Types</li>
    <li>INT Data Type (with examples)</li>
    <li>NUMBER(P, S) Data Type (with examples)</li>
    <li>Precision and Scale explained</li>
    <li>Negative Scale (ROUNDING)</li>
    <li>Special Notes and Best Practices</li>
    <li>Complete practical examples</li>
</ul>

<h3>Introduction to Numeric Data Types</h3>

<p>
In Oracle, **numeric data types** are used to store:
</p>
<ul>
    <li><strong>Integers:</strong> Whole numbers (no decimal) – like 123, -999, 0</li>
    <li><strong>Decimals:</strong> Numbers with decimal point – like 45.67, 99.99</li>
    <li><strong>Floating-point:</strong> Very large or scientific numbers – like 1.23E+10</li>
</ul>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Data Type</th>
        <th>Stores</th>
        <th>Example Values</th>
    </tr>
    <tr>
        <td><strong>INT</strong></td>
        <td>Whole numbers only</td>
        <td>123, -999, 0, 50000</td>
    </tr>
    <tr>
        <td><strong>NUMBER(p,0)</strong></td>
        <td>Integers (explicit)</td>
        <td>123, -999, 0, 50000</td>
    </tr>
    <tr>
        <td><strong>NUMBER(p,s)</strong></td>
        <td>Decimals (positive scale)</td>
        <td>45.67, 99.99, 12.345</td>
    </tr>
    <tr>
        <td><strong>NUMBER(p,-s)</strong></td>
        <td>Rounded numbers (negative scale)</td>
        <td>100, 5000, 100000</td>
    </tr>
    <tr>
        <td><strong>FLOAT</strong></td>
        <td>Floating-point (scientific)</td>
        <td>1.23E+10, 9.87E-5</td>
    </tr>
</table>

<h3>1. INT Data Type</h3>

<h4>Meaning:</h4>
<p><strong>INT</strong> stores whole numbers (integers) — no decimal or fractional part allowed.</p>

<h4>In Oracle:</h4>
<p>INT is just a **subtype of NUMBER(38,0)** in Oracle. This means:</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Property</th>
        <th>Value</th>
    </tr>
    <tr>
        <td><strong>Precision (p)</strong></td>
        <td>38 digits maximum</td>
    </tr>
    <tr>
        <td><strong>Scale (s)</strong></td>
        <td>0 → no digits after decimal point</td>
    </tr>
    <tr>
        <td><strong>Stores</strong></td>
        <td>Whole numbers only (integers)</td>
    </tr>
    <tr>
        <td><strong>Decimal Allowed</strong></td>
        <td>No → fractional part not allowed</td>
    </tr>
</table>

<h4>Examples with INT:</h4>

<pre>
-- Create table with INT column
CREATE TABLE test_int (
    id INT
);

-- Insert valid whole numbers
INSERT INTO test_int VALUES (123);        -- ✅ valid
INSERT INTO test_int VALUES (-99999);     -- ✅ valid (negative integer)
INSERT INTO test_int VALUES (0);          -- ✅ valid
INSERT INTO test_int VALUES (5000000);    -- ✅ valid

-- Insert decimal (INVALID)
INSERT INTO test_int VALUES (45.67);      -- ❌ error (fractional part not allowed)
INSERT INTO test_int VALUES (99.99);      -- ❌ error
</pre>

<h4>Error Message for Decimal:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Insert Statement</th>
        <th>Result</th>
        <th>Error</th>
    </tr>
    <tr>
        <td>INSERT INTO test_int VALUES (45.67)</td>
        <td>❌ Failed</td>
        <td>ORA-01722: floating point number not allowed for INT column</td>
    </tr>
</table>

<h4>Important NOTE on INT:</h4>

<p>
<strong>WHEN WE USE "INT" DATATYPE ON A COLUMN INTERNALLY ORACLE SERVER CONVERTS IT INTO "NUMBER" DATATYPE WITH MAXIMUM SIZE OF 38 DIGITS.</strong>
</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>What You Write</th>
        <th>What Oracle Stores Internally</th>
    </tr>
    <tr>
        <td><code>id INT</code></td>
        <td><code>id NUMBER(38, 0)</code></td>
    </tr>
    <tr>
        <td><code>count INT</code></td>
        <td><code>count NUMBER(38, 0)</code></td>
    </tr>
</table>

<h4>When to Use INT:</h4>
<ul>
    <li>✅ Storing whole numbers (IDs, counts, quantities)</li>
    <li>✅ When you don't need decimal points</li>
    <li>✅ Primary keys and foreign keys</li>
    <li>❌ When you need decimals (use NUMBER(p,s))</li>
    <li>❌ When you need scientific calculations (use FLOAT)</li>
</ul>

<h3>2. NUMBER Data Type</h3>

<h4>Meaning:</h4>
<p>In Oracle, the **NUMBER** data type is used to store both integer and floating-point numbers. It is very flexible because you can control precision and scale.</p>

<h4>Syntax:</h4>
<pre>
NUMBER[(precision, scale)]
</pre>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Parameter</th>
        <th>Description</th>
        <th>Range</th>
    </tr>
    <tr>
        <td><strong>precision (p)</strong></td>
        <td>Total number of digits allowed</td>
        <td>1 to 38</td>
    </tr>
    <tr>
        <td><strong>scale (s)</strong></td>
        <td>Number of digits after decimal point</td>
        <td>-84 to 127 (can be negative, zero, or positive)</td>
    </tr>
</table>

<h4>Understanding Precision and Scale:</h4>

<p>
<strong>Precision (p):</strong> Total number of digits in the number (before AND after decimal)
</p>
<p>
<strong>Scale (s):</strong> Number of digits AFTER the decimal point
</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>NUMBER(p,s)</th>
        <th>Precision (p)</th>
        <th>Scale (s)</th>
        <th>Total Digits</th>
        <th>Digits After Decimal</th>
        <th>Digits Before Decimal</th>
        <th>Example Values</th>
    </tr>
    <tr>
        <td>NUMBER(5,0)</td>
        <td>5</td>
        <td>0</td>
        <td>5 total</td>
        <td>0</td>
        <td>5 before</td>
        <td>12345, -999, 0</td>
    </tr>
    <tr>
        <td>NUMBER(8,2)</td>
        <td>8</td>
        <td>2</td>
        <td>8 total</td>
        <td>2</td>
        <td>6 before</td>
        <td>123456.78, 99.99, 0.01</td>
    </tr>
    <tr>
        <td>NUMBER(10,3)</td>
        <td>10</td>
        <td>3</td>
        <td>10 total</td>
        <td>3</td>
        <td>7 before</td>
        <td>1234567.891, 99.999</td>
    </tr>
    <tr>
        <td>NUMBER(5,2)</td>
        <td>5</td>
        <td>2</td>
        <td>5 total</td>
        <td>2</td>
        <td>3 before</td>
        <td>123.45, 9.99, 0.01</td>
    </tr>
</table>

<h4>Visual Breakdown of NUMBER(8,2):</h4>

<pre>
Number: 123456.78

Digits:  1  2  3  4  5  6  .  7  8
         ↑  ↑  ↑  ↑  ↑  ↑     ↑  ↑
         └─────────────────┘  └──┘
         6 digits before     2 digits after
         decimal point       decimal point
         
Total digits = 6 + 2 = 8 ✅
Scale = 2 (digits after decimal) ✅
</pre>

<h4>Complete Example – Creating Table with NUMBER:</h4>

<pre>
CREATE TABLE employees (
    emp_id NUMBER(5),        -- up to 5 digits (integer)
    name VARCHAR2(50),
    salary NUMBER(8,2),      -- 8 digits total, 2 after decimal
    bonus NUMBER(5,-2)       -- rounds to nearest 100
);
</pre>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Column</th>
        <th>Data Type</th>
        <th>Precision</th>
        <th>Scale</th>
        <th>Stores</th>
        <th>Example Values</th>
    </tr>
    <tr>
        <td>emp_id</td>
        <td>NUMBER(5)</td>
        <td>5</td>
        <td>0 (default)</td>
        <td>Integer, up to 5 digits</td>
        <td>1, 123, 9999, 12345</td>
    </tr>
    <tr>
        <td>name</td>
        <td>VARCHAR2(50)</td>
        <td>50 chars</td>
        <td>—</td>
        <td>Text</td>
        <td>"Rahul Kumar"</td>
    </tr>
    <tr>
        <td>salary</td>
        <td>NUMBER(8,2)</td>
        <td>8</td>
        <td>2</td>
        <td>Decimal, 6 before + 2 after</td>
        <td>50000.00, 99999.99, 1234.56</td>
    </tr>
    <tr>
        <td>bonus</td>
        <td>NUMBER(5,-2)</td>
        <td>5</td>
        <td>-2</td>
        <td>Rounded to nearest 100</td>
        <td>100, 5000, 12300</td>
    </tr>
</table>

<h4>Inserting Data with NUMBER:</h4>

<pre>
-- Insert valid values
INSERT INTO employees VALUES (1, 'Rahul', 50000.00, 5000);
INSERT INTO employees VALUES (2, 'Priya', 75000.50, 12500);
INSERT INTO employees VALUES (3, 'Amit', 45999.99, 3456);

COMMIT;

-- Check data
SELECT * FROM employees;
</pre>

<h4>Output:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>emp_id</th>
        <th>name</th>
        <th>salary</th>
        <th>bonus</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Rahul</td>
        <td>50000.00</td>
        <td>5000</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Priya</td>
        <td>75000.50</td>
        <td>12500</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Amit</td>
        <td>45999.99</td>
        <td>3500</td>
    </tr>
</table>

<p>
<strong>Note:</strong> Amit's bonus (3456) was stored as 3500 because NUMBER(5,-2) rounds to nearest 100!
</p>

<h3>Special Notes on NUMBER</h3>

<h4>1. Default (No Precision/Scale Specified):</h4>

<pre>
-- NUMBER without (p,s)
CREATE TABLE test_default (
    value NUMBER
);

INSERT INTO test_default VALUES (12345678901234567890123456789012345678); -- ✅ valid (38 digits)
INSERT INTO test_default VALUES (99.999); -- ✅ valid
</pre>

<p>
<strong>Default:</strong> If you don't specify (p, s), Oracle allows up to **38 digits** total.
</p>

<h4>2. Scale Zero (Integers):</h4>

<pre>
-- Integer with explicit scale 0
CREATE TABLE test_integer (
    count NUMBER(10, 0)
);

INSERT INTO test_integer VALUES (1234567890);  -- ✅ valid (10 digits)
INSERT INTO test_integer VALUES (123.45);      -- ❌ error (decimal not allowed)
</pre>

<h4>3. Performance Tip:</h4>

<p>
<strong>If you always store integers, use NUMBER(p, 0) for efficiency.</strong>
</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Recommendation</th>
        <th>Use For</th>
        <th>Example</th>
    </tr>
    <tr>
        <td><strong>NUMBER(p, 0)</strong></td>
        <td>Integers (exact)</td>
        <td>NUMBER(10, 0) for IDs</td>
    </tr>
    <tr>
        <td><strong>NUMBER(p, s)</strong></td>
        <td>Decimals (exact)</td>
        <td>NUMBER(8, 2) for money</td>
    </tr>
    <tr>
        <td><strong>FLOAT</strong></td>
        <td>Scientific (rounded)</td>
        <td>FLOAT for large calculations</td>
    </tr>
    <tr>
        <td><strong>INTEGER</strong></td>
        <td>Whole numbers</td>
        <td>INTEGER (same as NUMBER(p,0))</td>
    </tr>
</table>

<h4>4. Use Cases:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Scenario</th>
        <th>Data Type</th>
        <th>Reason</th>
    </tr>
    <tr>
        <td>Money (salary, price)</td>
        <td>NUMBER(8,2)</td>
        <td>Exact precision required</td>
    </tr>
    <tr>
        <td>Quantity (items, count)</td>
        <td>NUMBER(10,0) or INT</td>
        <td>Whole numbers only</td>
    </tr>
    <tr>
        <td>ID (primary key)</td>
        <td>NUMBER(5,0) or INT</td>
        <td>Whole numbers, unique</td>
    </tr>
    <tr>
        <td>Scientific data</td>
        <td>FLOAT</td>
        <td>Very large/small, slight rounding OK</td>
    </tr>
    <tr>
        <td>Percentages</td>
        <td>NUMBER(5,2)</td>
        <td>2 decimal places (e.g., 99.99)</td>
    </tr>
</table>

<h3>3. Negative Scale (ROUNDING)</h3>

<h4>What is Negative Scale?</h4>

<p>
<strong>Negative scale</strong> means Oracle rounds the value to the **left of the decimal point**.
</p>

<pre>
NUMBER(p, -s)

s = -1 → Round to nearest 10
s = -2 → Round to nearest 100
s = -3 → Round to nearest 1000
</pre>

<h4>Example – NUMBER(8, -2):</h4>

<pre>
CREATE TABLE test_rounding (
    value NUMBER(8, -2)
);

-- Insert values
INSERT INTO test_rounding VALUES (1234);    -- Stored as: 1200
INSERT INTO test_rounding VALUES (5678);    -- Stored as: 5700
INSERT INTO test_rounding VALUES (9949);    -- Stored as: 9900
INSERT INTO test_rounding VALUES (9951);    -- Stored as: 10000
</pre>

<h4>How Rounding Works:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Original Value</th>
        <th>Stored Value</th>
        <th>Rounding Rule</th>
    </tr>
    <tr>
        <td>1234</td>
        <td>1200</td>
        <td>34 < 50 → round down to 1200</td>
    </tr>
    <tr>
        <td>5678</td>
        <td>5700</td>
        <td>78 ≥ 50 → round up to 5700</td>
    </tr>
    <tr>
        <td>9949</td>
        <td>9900</td>
        <td>49 < 50 → round down to 9900</td>
    </tr>
    <tr>
        <td>9951</td>
        <td>10000</td>
        <td>51 ≥ 50 → round up to 10000</td>
    </tr>
</table>

<h4>Visual Explanation of NUMBER(8, -2):</h4>

<pre>
Original Number: 5678

Digits:  5  6  7  8
         ↑  ↑  ↑  ↑
         │  │  └──┬─ round here (scale = -2)
         │  │     └─ nearest 100
         │  └─────── tens digit (7)
         └────────── hundreds digit (6)

Round 5678 to nearest 100:
- Look at tens digit: 7
- 7 ≥ 5 → round UP
- Result: 5700 ✅
</pre>

<h4>Key Points on Negative Scale:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Scale (s)</th>
        <th>Rounding To</th>
        <th>Example</th>
        <th>Original → Stored</th>
    </tr>
    <tr>
        <td><strong>s = -1</strong></td>
        <td>Nearest 10</td>
        <td>NUMBER(5, -1)</td>
        <td>123 → 120</td>
    </tr>
    <tr>
        <td><strong>s = -2</strong></td>
        <td>Nearest 100</td>
        <td>NUMBER(5, -2)</td>
        <td>1234 → 1200</td>
    </tr>
    <tr>
        <td><strong>s = -3</strong></td>
        <td>Nearest 1000</td>
        <td>NUMBER(5, -3)</td>
        <td>12345 → 12000</td>
    </tr>
    <tr>
        <td><strong>s = -4</strong></td>
        <td>Nearest 10000</td>
        <td>NUMBER(5, -4)</td>
        <td>123456 → 120000</td>
    </tr>
</table>

<h4>Important Notes on Negative Scale:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Point</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td><strong>Always stores rounded values</strong></td>
        <td>Oracle rounds immediately when inserting</td>
    </tr>
    <tr>
        <td><strong>Still enforces precision</strong></td>
        <td>Max digits still limited (e.g., 8 digits in NUMBER(8,-2))</td>
    </tr>
    <tr>
        <td><strong>Use for approximations</strong></td>
        <td>Good when exact value not critical (e.g., large quantities)</td>
    </tr>
    <tr>
        <td><strong>NOT for money</strong></td>
        <td>Never use negative scale for financial data (need exact precision)</td>
    </tr>
</table>

<h3>Complete Practical Examples</h3>

<h4>Example 1 – Using INT:</h4>

<pre>
CREATE TABLE products_int (
    product_id INT,
    quantity INT,
    price INT
);

INSERT INTO products_int VALUES (1, 100, 500);     -- ✅ valid
INSERT INTO products_int VALUES (2, 250, 750);     -- ✅ valid
INSERT INTO products_int VALUES (3, 123.45, 500);  -- ❌ error (quantity has decimal)

COMMIT;
</pre>

<h4>Example 2 – Using NUMBER(p,0) for Integers:</h4>

<pre>
CREATE TABLE products_number (
    product_id NUMBER(10, 0),
    quantity NUMBER(5, 0),
    price NUMBER(8, 0)
);

INSERT INTO products_number VALUES (1, 100, 500);     -- ✅ valid
INSERT INTO products_number VALUES (2, 250, 750);     -- ✅ valid
INSERT INTO products_number VALUES (3, 123, 500);     -- ✅ valid
</pre>

<h4>Example 3 – Using NUMBER(p,s) for Decimals:</h4>

<pre>
CREATE TABLE financial (
    transaction_id NUMBER(10, 0),
    amount NUMBER(15, 2),
    tax NUMBER(10, 2),
    total NUMBER(15, 2)
);

INSERT INTO financial VALUES (1, 10000.00, 500.00, 10500.00);
INSERT INTO financial VALUES (2, 25000.50, 1250.03, 26250.53);
INSERT INTO financial VALUES (3, 9999.99, 499.99, 10499.98);

COMMIT;

SELECT * FROM financial;
</pre>

<h4>Output:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>transaction_id</th>
        <th>amount</th>
        <th>tax</th>
        <th>total</th>
    </tr>
    <tr>
        <td>1</td>
        <td>10000.00</td>
        <td>500.00</td>
        <td>10500.00</td>
    </tr>
    <tr>
        <td>2</td>
        <td>25000.50</td>
        <td>1250.03</td>
        <td>26250.53</td>
    </tr>
    <tr>
        <td>3</td>
        <td>9999.99</td>
        <td>499.99</td>
        <td>10499.98</td>
    </tr>
</table>

<h4>Example 4 – Using Negative Scale:</h4>

<pre>
CREATE TABLE approximate (
    id NUMBER(5, 0),
    population NUMBER(10, -3),  -- rounds to nearest 1000
    revenue NUMBER(12, -2)       -- rounds to nearest 100
);

INSERT INTO approximate VALUES (1, 1234567, 5678900);
INSERT INTO approximate VALUES (2, 8945621, 1234567);
INSERT INTO approximate VALUES (3, 5678912, 9999999);

COMMIT;

SELECT * FROM approximate;
</pre>

<h4>Output (with rounding):</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>id</th>
        <th>population</th>
        <th>revenue</th>
    </tr>
    <tr>
        <td>1</td>
        <td>1235000</td>  <!-- 1234567 → 1235000 (nearest 1000) -->
        <td>5678900</td>  <!-- 5678900 → 5678900 (already nearest 100) -->
    </tr>
    <tr>
        <td>2</td>
        <td>8946000</td>  <!-- 8945621 → 8946000 -->
        <td>1234600</td>  <!-- 1234567 → 1234600 -->
    </tr>
    <tr>
        <td>3</td>
        <td>5679000</td>  <!-- 5678912 → 5679000 -->
        <td>10000000</td> <!-- 9999999 → 10000000 -->
    </tr>
</table>

<h3>Comparison Table – INT vs NUMBER</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>INT</th>
        <th>NUMBER(p, s)</th>
    </tr>
    <tr>
        <td><strong>Stores</strong></td>
        <td>Integers only</td>
        <td>Integers AND decimals</td>
    </tr>
    <tr>
        <td><strong>Precision</strong></td>
        <td>38 digits (fixed)</td>
        <td>1-38 digits (custom)</td>
    </tr>
    <tr>
        <td><strong>Scale</strong></td>
        <td>0 (fixed)</td>
        <td>-84 to 127 (custom)</td>
    </tr>
    <tr>
        <td><strong>Decimal Allowed</strong></td>
        <td>No</td>
        <td>Yes (if s > 0)</td>
    </tr>
    <tr>
        <td><strong>Internal Type</strong></td>
        <td>NUMBER(38, 0)</td>
        <td>NUMBER(p, s)</td>
    </tr>
    <tr>
        <td><strong>Flexibility</strong></td>
        <td>Low (fixed)</td>
        <td>High (custom)</td>
    </tr>
    <tr>
        <td><strong>Best For</strong></td>
        <td>IDs, counts</td>
        <td>Money, measurements</td>
    </tr>
</table>

<h3>Key Points Summary</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Point</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td><strong>INT = NUMBER(38,0)</strong></td>
        <td>Oracle converts INT internally to NUMBER with 38 digits and scale 0</td>
    </tr>
    <tr>
        <td><strong>Default NUMBER</strong></td>
        <td>Without (p,s), allows up to 38 digits total</td>
    </tr>
    <tr>
        <td><strong>Precision (p)</strong></td>
        <td>Total digits (1-38)</td>
    </tr>
    <tr>
        <td><strong>Scale (s)</strong></td>
        <td>Digits after decimal (-84 to 127)</td>
    </tr>
    <tr>
        <td><strong>s = 0</strong></td>
        <td>Integer (no decimal)</td>
    </tr>
    <tr>
        <td><strong>s > 0</strong></td>
        <td>Decimal (s digits after decimal)</td>
    </tr>
    <tr>
        <td><strong>s < 0</strong></td>
        <td>Rounding to left of decimal (nearest 10, 100, 1000...)</td>
    </tr>
    <tr>
        <td><strong>Use NUMBER(p,0)</strong></td>
        <td>For integers (better performance than INT)</td>
    </tr>
    <tr>
        <td><strong>Use NUMBER(p,s)</strong></td>
        <td>For exact precision (money, quantities)</td>
    </tr>
    <tr>
        <td><strong>Use FLOAT</strong></td>
        <td>For scientific calculations (slight rounding OK)</td>
    </tr>
</table>

<h3>Class Summary</h3>

<p>
In today's lecture, we learned about **Numeric Data Types** in Oracle:
</p>

<ul>
    <li><strong>INT:</strong> Stores whole numbers only (internally NUMBER(38,0))</li>
    <li><strong>NUMBER(p, s):</strong> Flexible type for integers AND decimals</li>
    <li><strong>Precision (p):</strong> Total digits allowed (1-38)</li>
    <li><strong>Scale (s):</strong> Digits after decimal point</li>
    <li><strong>s = 0:</strong> Integer (no decimal)</li>
    <li><strong>s > 0:</strong> Decimal (e.g., NUMBER(8,2) for money)</li>
    <li><strong>s < 0 (Negative):</strong> Rounds to left of decimal (nearest 10, 100, 1000)</li>
    <li><strong>Best Practices:</strong> Use NUMBER(p,0) for integers, NUMBER(p,s) for money</li>
</ul>

<p>
<strong>Remember:</strong> INT is just NUMBER(38,0) internally. Use NUMBER(p,s) for decimals (especially money). Use negative scale only for approximations – never for financial data!
</p>

<p>
<strong>Homework:</strong>
</p>
<ul>
    <li>1. Create table with INT column, insert integer and decimal (observe error)</li>
    <li>2. Create table with NUMBER(10,0), insert same values</li>
    <li>3. Create table with NUMBER(8,2) for storing prices</li>
    <li>4. Insert 5 product prices with decimals</li>
    <li>5. Create table with NUMBER(10,-2), insert values and observe rounding</li>
    <li>6. Compare: INT vs NUMBER(10,0) for same data</li>
    <li>7. Verify all results with SELECT</li>
</ul>

<p>
<strong>Next Topic:</strong> VARCHAR2, CHAR, and Other String Data Types in Oracle
</p>

`;

let sqlStringDataTypesContent = `

<h3>SQL Character/String Data Types in Oracle – Complete Guide</h3>

<p>
Good morning students!
Today we will learn about **Character/String Data Types** in Oracle Database. These data types are used to store string format data only. Understanding string data types is crucial because they affect storage, memory usage, and language support (English vs. other national languages).
</p>

<p>
<strong>What We Will Cover:</strong>
</p>
<ul>
    <li>Introduction to String Data Types</li>
    <li>How to represent strings (with examples)</li>
    <li>Non-Unicode Data Types (CHAR, VARCHAR2)</li>
    <li>Unicode Data Types (NCHAR, NVARCHAR2)</li>
    <li>Fixed vs Dynamic data types</li>
    <li>Memory usage comparison</li>
    <li>Best practices and recommendations</li>
</ul>

<h3>Introduction to String Data Types</h3>

<p>
<strong>String data types</strong> are used to store text data (characters, letters, words, sentences). In Oracle, strings must be represented with **single quotes** (' ').
</p>

<h4>String Representation:</h4>

<pre>
STRING CAN BE REPRESENTED WITH '<STRING>'
</pre>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Example</th>
        <th>Code</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>Valid string</td>
        <td>'SMITH'</td>
        <td>✅ ALLOWED</td>
    </tr>
    <tr>
        <td>Invalid (no quotes)</td>
        <td>SMITH</td>
        <td>❌ ERROR (treated as column name)</td>
    </tr>
    <tr>
        <td>Valid number as string</td>
        <td>'1021'</td>
        <td>✅ ALLOWED (stored as text)</td>
    </tr>
    <tr>
        <td>Invalid number</td>
        <td>1021</td>
        <td>❌ ERROR (treated as number, not string)</td>
    </tr>
</table>

<h4>Examples in CREATE TABLE:</h4>

<pre>
-- Correct usage
CREATE TABLE employees (
    ename CHAR(10)
);

INSERT INTO employees VALUES ('SMITH');  -- ✅ ALLOWED

-- Incorrect usage
INSERT INTO employees VALUES (SMITH);    -- ❌ ERROR
INSERT INTO employees VALUES (1021);     -- ❌ ERROR (number, not string)
</pre>

<h3>Two Types of Character/String Data Types</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Type</th>
        <th>Purpose</th>
        <th>Languages Supported</th>
        <th>Data Types</th>
    </tr>
    <tr>
        <td><strong>1. Non-Unicode</strong></td>
        <td>Store localized data only</td>
        <td>English language ONLY</td>
        <td>CHAR(SIZE)<br>VARCHAR2(SIZE)</td>
    </tr>
    <tr>
        <td><strong>2. Unicode</strong></td>
        <td>Store globalized data</td>
        <td>All national languages</td>
        <td>NCHAR(SIZE)<br>NVARCHAR2(SIZE)</td>
    </tr>
</table>

<p>
<strong>Note:</strong> In Unicode data types, **"N"** stands for **NATIONAL LANGUAGE**.
</p>

<h3>1. NON-UNICODE DATATYPES</h3>

<p>To store **localized data only** (i.e., English language ONLY)</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Data Type</th>
        <th>Type</th>
        <th>Storage</th>
        <th>Max Size</th>
        <th>Memory Usage</th>
    </tr>
    <tr>
        <td><strong>CHAR(SIZE)</strong></td>
        <td>Fixed (Static)</td>
        <td>1 CHAR = 1 BYTE</td>
        <td>2000 bytes</td>
        <td>Wastes memory (pads with spaces)</td>
    </tr>
    <tr>
        <td><strong>VARCHAR2(SIZE)</strong></td>
        <td>Dynamic</td>
        <td>1 CHAR = 1 BYTE</td>
        <td>4000 bytes</td>
        <td>Saves memory (no padding)</td>
    </tr>
</table>

<h3>1) CHAR(SIZE) – Fixed Data Type</h3>

<h4>Characteristics:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Property</th>
        <th>Value</th>
    </tr>
    <tr>
        <td><strong>Type</strong></td>
        <td>Fixed (Static)</td>
    </tr>
    <tr>
        <td><strong>Storage Format</strong></td>
        <td>1 CHAR = 1 BYTE</td>
    </tr>
    <tr>
        <td><strong>Max Size</strong></td>
        <td>2000 bytes (2000 characters)</td>
    </tr>
    <tr>
        <td><strong>Memory Usage</strong></td>
        <td>Always uses full size (pads with spaces)</td>
    </tr>
    <tr>
        <td><strong>Advantage</strong></td>
        <td>Fast access (fixed length)</td>
    </tr>
    <tr>
        <td><strong>Disadvantage</strong></td>
        <td>Memory wasted</td>
    </tr>
</table>

<h4>How CHAR Works (Memory Wastage):</h4>

<pre>
SNAME CHAR(10)

-- Example 1: 'HELLO' (5 characters)
'H' 'E' 'L' 'L' 'O' ' ' ' ' ' ' ' ' ' '
 ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑
 5 BYTES USED = 5 BYTES WASTED (padded with 5 spaces)

-- Example 2: 'HEL' (3 characters)
'H' 'E' 'L' ' ' ' ' ' ' ' ' ' ' ' ' ' '
 ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑
 3 BYTES USED = 7 BYTES WASTED (padded with 7 spaces)

-- Example 3: 'HE' (2 characters)
'H' 'E' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' '
 ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑
 2 BYTES USED = 8 BYTES WASTED (padded with 8 spaces)
</pre>

<h4>Visual Representation:</h4>

<p><strong>CHAR(10) with 'HELLO':</strong></p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Position</th>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>10</td>
    </tr>
    <tr>
        <th>Character</th>
        <td>H</td>
        <td>E</td>
        <td>L</td>
        <td>L</td>
        <td>O</td>
        <td>␣</td>
        <td>␣</td>
        <td>␣</td>
        <td>␣</td>
        <td>␣</td>
    </tr>
    <tr>
        <th>Usage</th>
        <td colspan="5">5 bytes used</td>
        <td colspan="5">5 bytes wasted (spaces)</td>
    </tr>
</table>

<p><strong>CHAR(10) with 'HEL':</strong></p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Position</th>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>10</td>
    </tr>
    <tr>
        <th>Character</th>
        <td>H</td>
        <td>E</td>
        <td>L</td>
        <td>␣</td>
        <td>␣</td>
        <td>␣</td>
        <td>␣</td>
        <td>␣</td>
        <td>␣</td>
        <td>␣</td>
    </tr>
    <tr>
        <th>Usage</th>
        <td colspan="3">3 bytes used</td>
        <td colspan="7">7 bytes wasted (spaces)</td>
    </tr>
</table>

<h4>Complete Example with CHAR:</h4>

<pre>
CREATE TABLE test_char (
    sname CHAR(10)
);

INSERT INTO test_char VALUES ('HELLO');   -- 5 bytes used, 5 bytes wasted
INSERT INTO test_char VALUES ('HEL');     -- 3 bytes used, 7 bytes wasted
INSERT INTO test_char VALUES ('HE');      -- 2 bytes used, 8 bytes wasted
INSERT INTO test_char VALUES ('SMITH');   -- 6 bytes used, 4 bytes wasted

COMMIT;

-- Check actual storage
SELECT sname, LENGTH(sname) AS length, VSIZE(sname) AS bytes_used FROM test_char;
</pre>

<h4>Output:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>sname</th>
        <th>LENGTH(sname)</th>
        <th>VSIZE(sname)</th>
        <th>Bytes Wasted</th>
    </tr>
    <tr>
        <td>HELLO</td>
        <td>5</td>
        <td>5</td>
        <td>5 (10-5)</td>
    </tr>
    <tr>
        <td>HEL</td>
        <td>3</td>
        <td>3</td>
        <td>7 (10-3)</td>
    </tr>
    <tr>
        <td>HE</td>
        <td>2</td>
        <td>2</td>
        <td>8 (10-2)</td>
    </tr>
    <tr>
        <td>SMITH</td>
        <td>6</td>
        <td>6</td>
        <td>4 (10-6)</td>
    </tr>
</table>

<h4>When to Use CHAR:</h4>
<ul>
    <li>✅ Fixed-length data (e.g., country codes: 'US', 'IN', 'UK')</li>
    <li>✅ When all values have same length</li>
    <li>✅ For performance (fixed length = faster access)</li>
    <li>❌ Variable-length data (wastes memory)</li>
    <li>❌ Short text with varying lengths</li>
</ul>

<h3>2) VARCHAR2(SIZE) – Dynamic Data Type</h3>

<h4>Characteristics:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Property</th>
        <th>Value</th>
    </tr>
    <tr>
        <td><strong>Type</strong></td>
        <td>Dynamic</td>
    </tr>
    <tr>
        <td><strong>Storage Format</strong></td>
        <td>1 CHAR = 1 BYTE</td>
    </tr>
    <tr>
        <td><strong>Max Size</strong></td>
        <td>4000 bytes (4000 characters)</td>
    </tr>
    <tr>
        <td><strong>Memory Usage</strong></td>
        <td>Uses only what's needed (no padding)</td>
    </tr>
    <tr>
        <td><strong>Advantage</strong></td>
        <td>Memory saved</td>
    </tr>
    <tr>
        <td><strong>Disadvantage</strong></td>
        <td>Slightly slower than CHAR (variable length)</td>
    </tr>
</table>

<h4>How VARCHAR2 Works (Memory Savings):</h4>

<pre>
SNAME VARCHAR2(10)

-- Example 1: 'HELLO' (5 characters)
'H' 'E' 'L' 'L' 'O'
 ↑   ↑   ↑   ↑   ↑
 5 BYTES USED = 0 BYTES WASTED

-- Example 2: 'HEL' (3 characters)
'H' 'E' 'L'
 ↑   ↑   ↑
 3 BYTES USED = 0 BYTES WASTED

-- Example 3: 'HE' (2 characters)
'H' 'E'
 ↑   ↑
 2 BYTES USED = 0 BYTES WASTED
</pre>

<h4>Visual Comparison: CHAR vs VARCHAR2</h4>

<pre>
VARCHAR2(10) with 'HELLO':
Position: 1  2  3  4  5
Char:     H  E  L  L  O
Usage:    5 bytes used = 0 bytes wasted ✅

CHAR(10) with 'HELLO':
Position: 1  2  3  4  5  6  7  8  9  10
Char:     H  E  L  L  O  ␣  ␣  ␣  ␣  ␣
Usage:    5 bytes used = 5 bytes wasted ❌
</pre>

<h4>Complete Example with VARCHAR2:</h4>

<pre>
CREATE TABLE test_varchar2 (
    sname VARCHAR2(10)
);

INSERT INTO test_varchar2 VALUES ('HELLO');   -- 5 bytes used, 0 bytes wasted
INSERT INTO test_varchar2 VALUES ('HEL');     -- 3 bytes used, 0 bytes wasted
INSERT INTO test_varchar2 VALUES ('HE');      -- 2 bytes used, 0 bytes wasted
INSERT INTO test_varchar2 VALUES ('SMITH');   -- 6 bytes used, 0 bytes wasted

COMMIT;

-- Check actual storage
SELECT sname, LENGTH(sname) AS length, VSIZE(sname) AS bytes_used FROM test_varchar2;
</pre>

<h4>Output:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>sname</th>
        <th>LENGTH(sname)</th>
        <th>VSIZE(sname)</th>
        <th>Bytes Wasted</th>
    </tr>
    <tr>
        <td>HELLO</td>
        <td>5</td>
        <td>5</td>
        <td>0</td>
    </tr>
    <tr>
        <td>HEL</td>
        <td>3</td>
        <td>3</td>
        <td>0</td>
    </tr>
    <tr>
        <td>HE</td>
        <td>2</td>
        <td>2</td>
        <td>0</td>
    </tr>
    <tr>
        <td>SMITH</td>
        <td>6</td>
        <td>6</td>
        <td>0</td>
    </tr>
</table>

<h4>When to Use VARCHAR2:</h4>
<ul>
    <li>✅ Variable-length data (most common case)</li>
    <li>✅ Names, addresses, descriptions</li>
    <li>✅ When you want to save memory</li>
    <li>✅ Default choice for string data in Oracle</li>
    <li>❌ Fixed-length data where performance critical (use CHAR)</li>
</ul>

<h3>CHAR vs VARCHAR2 Comparison</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>CHAR(SIZE)</th>
        <th>VARCHAR2(SIZE)</th>
    </tr>
    <tr>
        <td><strong>Type</strong></td>
        <td>Fixed (Static)</td>
        <td>Dynamic</td>
    </tr>
    <tr>
        <td><strong>Memory Usage</strong></td>
        <td>Always full size (pads with spaces)</td>
        <td>Only what's needed (no padding)</td>
    </tr>
    <tr>
        <td><strong>Max Size</strong></td>
        <td>2000 bytes</td>
        <td>4000 bytes</td>
    </tr>
    <tr>
        <td><strong>Memory Wasted</strong></td>
        <td>Yes (for short strings)</td>
        <td>No</td>
    </tr>
    <tr>
        <td><strong>Performance</strong></td>
        <td>Faster (fixed length)</td>
        <td>Slower (variable length)</td>
    </tr>
    <tr>
        <td><strong>Best For</strong></td>
        <td>Fixed-length data</td>
        <td>Variable-length data</td>
    </tr>
    <tr>
        <td><strong>Recommendation</strong></td>
        <td>Use rarely</td>
        <td>Use as default</td>
    </tr>
</table>

<h3>2. UNICODE DATATYPES</h3>

<p>To store **globalized data** (i.e., ALL NATIONAL LANGUAGES)</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Data Type</th>
        <th>Type</th>
        <th>Storage</th>
        <th>Max Size</th>
        <th>Languages</th>
        <th>Memory Usage</th>
    </tr>
    <tr>
        <td><strong>NCHAR(SIZE)</strong></td>
        <td>Fixed (Static)</td>
        <td>1 CHAR = 1 BYTE</td>
        <td>2000 bytes</td>
        <td>All national languages</td>
        <td>Wastes memory</td>
    </tr>
    <tr>
        <td><strong>NVARCHAR2(SIZE)</strong></td>
        <td>Dynamic</td>
        <td>1 CHAR = 1 BYTE</td>
        <td>4000 bytes</td>
        <td>All national languages</td>
        <td>Saves memory</td>
    </tr>
</table>

<p>
<strong>Note:</strong> **"N"** stands for **NATIONAL LANGUAGE**.
</p>

<h3>i) NCHAR(SIZE) – Fixed Unicode Data Type</h3>

<h4>Characteristics:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Property</th>
        <th>Value</th>
    </tr>
    <tr>
        <td><strong>Type</strong></td>
        <td>Fixed (Static)</td>
    </tr>
    <tr>
        <td><strong>Storage Format</strong></td>
        <td>1 CHAR = 1 BYTE (Unicode)</td>
    </tr>
    <tr>
        <td><strong>Max Size</strong></td>
        <td>2000 bytes (2000 characters)</td>
    </tr>
    <tr>
        <td><strong>Languages</strong></td>
        <td>All national languages (Hindi, Chinese, Arabic, etc.)</td>
    </tr>
    <tr>
        <td><strong>Memory Usage</strong></td>
        <td>Always uses full size (pads with spaces)</td>
    </tr>
    <tr>
        <td><strong>Advantage</strong></td>
        <td>Fast access (fixed length)</td>
    </tr>
    <tr>
        <td><strong>Disadvantage</strong></td>
        <td>Memory wasted</td>
    </tr>
</table>

<h4>When to Use NCHAR:</h4>
<ul>
    <li>✅ Fixed-length Unicode data</li>
    <li>✅ Country codes in multiple languages</li>
    <li>❌ Variable-length data (wastes memory)</li>
</ul>

<h3>ii) NVARCHAR2(SIZE) – Dynamic Unicode Data Type</h3>

<h4>Characteristics:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Property</th>
        <th>Value</th>
    </tr>
    <tr>
        <td><strong>Type</strong></td>
        <td>Dynamic</td>
    </tr>
    <tr>
        <td><strong>Storage Format</strong></td>
        <td>1 CHAR = 1 BYTE (Unicode)</td>
    </tr>
    <tr>
        <td><strong>Max Size</strong></td>
        <td>4000 bytes (4000 characters)</td>
    </tr>
    <tr>
        <td><strong>Languages</strong></td>
        <td>All national languages (Hindi, Chinese, Arabic, etc.)</td>
    </tr>
    <tr>
        <td><strong>Memory Usage</strong></td>
        <td>Uses only what's needed (no padding)</td>
    </tr>
    <tr>
        <td><strong>Advantage</strong></td>
        <td>Memory saved</td>
    </tr>
    <tr>
        <td><strong>Disadvantage</strong></td>
        <td>Slightly slower than NCHAR</td>
    </tr>
</table>

<h4>Example with NVARCHAR2 (Hindi Text):</h4>

<pre>
CREATE TABLE test_nvarchar2 (
    name NVARCHAR2(50)
);

INSERT INTO test_nvarchar2 VALUES ('राहुल');      -- Hindi name
INSERT INTO test_nvarchar2 VALUES ('priya');      -- English name
INSERT INTO test_nvarchar2 VALUES ('李明');         -- Chinese name
INSERT INTO test_nvarchar2 VALUES ('محمد');         -- Arabic name

COMMIT;

SELECT * FROM test_nvarchar2;
</pre>

<h4>Output:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>name</th>
    </tr>
    <tr>
        <td>राहुल</td>
    </tr>
    <tr>
        <td>priya</td>
    </tr>
    <tr>
        <td>李明</td>
    </tr>
    <tr>
        <td>محمد</td>
    </tr>
</table>

<h4>When to Use NVARCHAR2:</h4>
<ul>
    <li>✅ Variable-length Unicode data (most common)</li>
    <li>✅ Names in multiple languages</li>
    <li>✅ International applications</li>
    <li>✅ Default choice for multi-language string data</li>
</ul>

<h3>Complete Comparison Table – All 4 String Data Types</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Data Type</th>
        <th>Type</th>
        <th>Max Size</th>
        <th>Languages</th>
        <th>Memory</th>
        <th>Performance</th>
        <th>Use When</th>
    </tr>
    <tr>
        <td><strong>CHAR</strong></td>
        <td>Fixed</td>
        <td>2000 bytes</td>
        <td>English only</td>
        <td>Wastes (pads)</td>
        <td>Faster</td>
        <td>Fixed-length English</td>
    </tr>
    <tr>
        <td><strong>VARCHAR2</strong></td>
        <td>Dynamic</td>
        <td>4000 bytes</td>
        <td>English only</td>
        <td>Saves (no pad)</td>
        <td>Slower</td>
        <td>Variable-length English ✅</td>
    </tr>
    <tr>
        <td><strong>NCHAR</strong></td>
        <td>Fixed</td>
        <td>2000 bytes</td>
        <td>All languages</td>
        <td>Wastes (pads)</td>
        <td>Faster</td>
        <td>Fixed-length multi-language</td>
    </tr>
    <tr>
        <td><strong>NVARCHAR2</strong></td>
        <td>Dynamic</td>
        <td>4000 bytes</td>
        <td>All languages</td>
        <td>Saves (no pad)</td>
        <td>Slower</td>
        <td>Variable-length multi-language ✅</td>
    </tr>
</table>

<h3>Fixed vs Dynamic Data Types</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Fixed (CHAR, NCHAR)</th>
        <th>Dynamic (VARCHAR2, NVARCHAR2)</th>
    </tr>
    <tr>
        <td><strong>Storage</strong></td>
        <td>Always uses full size</td>
        <td>Uses only what's needed</td>
    </tr>
    <tr>
        <td><strong>Padding</strong></td>
        <td>Pads with spaces</td>
        <td>No padding</td>
    </tr>
    <tr>
        <td><strong>Memory</strong></td>
        <td>Wasted for short strings</td>
        <td>Saved (efficient)</td>
    </tr>
    <tr>
        <td><strong>Speed</strong></td>
        <td>Faster (predictable)</td>
        <td>Slower (variable)</td>
    </tr>
    <tr>
        <td><strong>Best For</strong></td>
        <td>Fixed-length data</td>
        <td>Variable-length data</td>
    </tr>
</table>

<h3>Memory Usage Examples</h3>

<h4>Example: CHAR(10) vs VARCHAR2(10) with 'HELLO'</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Data Type</th>
        <th>Value</th>
        <th>Bytes Used</th>
        <th>Bytes Wasted</th>
        <th>Total Allocated</th>
    </tr>
    <tr>
        <td>CHAR(10)</td>
        <td>'HELLO'</td>
        <td>5</td>
        <td>5</td>
        <td>10</td>
    </tr>
    <tr>
        <td>VARCHAR2(10)</td>
        <td>'HELLO'</td>
        <td>5</td>
        <td>0</td>
        <td>5</td>
    </tr>
</table>

<p>
<strong>Result:</strong> VARCHAR2 saves 5 bytes (50% less memory)!
</p>

<h4>Example: CHAR(10) vs VARCHAR2(10) with 'HE'</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Data Type</th>
        <th>Value</th>
        <th>Bytes Used</th>
        <th>Bytes Wasted</th>
        <th>Total Allocated</th>
    </tr>
    <tr>
        <td>CHAR(10)</td>
        <td>'HE'</td>
        <td>2</td>
        <td>8</td>
        <td>10</td>
    </tr>
    <tr>
        <td>VARCHAR2(10)</td>
        <td>'HE'</td>
        <td>2</td>
        <td>0</td>
        <td>2</td>
    </tr>
</table>

<p>
<strong>Result:</strong> VARCHAR2 saves 8 bytes (80% less memory)!
</p>

<h3>Best Practices and Recommendations</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Scenario</th>
        <th>Recommended Data Type</th>
        <th>Reason</th>
    </tr>
    <tr>
        <td>Names (English)</td>
        <td><strong>VARCHAR2</strong></td>
        <td>Variable length, saves memory</td>
    </tr>
    <tr>
        <td>Addresses</td>
        <td><strong>VARCHAR2</strong></td>
        <td>Variable length, can be long</td>
    </tr>
    <tr>
        <td>Descriptions</td>
        <td><strong>VARCHAR2</strong></td>
        <td>Variable length, can be very long</td>
    </tr>
    <tr>
        <td>Country Codes (US, IN)</td>
        <td><strong>CHAR(2)</strong></td>
        <td>Fixed length (2 chars)</td>
    </tr>
    <tr>
        <td>Phone Numbers</td>
        <td><strong>VARCHAR2</strong></td>
        <td>Variable length (+ formatting)</td>
    </tr>
    <tr>
        <td>Email Addresses</td>
        <td><strong>VARCHAR2</strong></td>
        <td>Variable length</td>
    </tr>
    <tr>
        <td>Multi-language Names</td>
        <td><strong>NVARCHAR2</strong></td>
        <td>Supports all languages</td>
    </tr>
    <tr>
        <td>International App</td>
        <td><strong>NVARCHAR2</strong></td>
        <td>Globalized data support</td>
    </tr>
    <tr>
        <td>Default String</td>
        <td><strong>VARCHAR2</strong></td>
        <td>Most efficient for Oracle</td>
    </tr>
</table>

<h3>Key Points Summary</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Point</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td><strong>Strings need quotes</strong></td>
        <td>Always use single quotes: 'SMITH' (not SMITH)</td>
    </tr>
    <tr>
        <td><strong>Non-Unicode</strong></td>
        <td>English only: CHAR, VARCHAR2</td>
    </tr>
    <tr>
        <td><strong>Unicode</strong></td>
        <td>All languages: NCHAR, NVARCHAR2 (N = National)</td>
    </tr>
    <tr>
        <td><strong>CHAR</strong></td>
        <td>Fixed type, wastes memory (pads with spaces)</td>
    </tr>
    <tr>
        <td><strong>VARCHAR2</strong></td>
        <td>Dynamic type, saves memory (default choice)</td>
    </tr>
    <tr>
        <td><strong>NCHAR</strong></td>
        <td>Fixed Unicode, wastes memory</td>
    </tr>
    <tr>
        <td><strong>NVARCHAR2</strong></td>
        <td>Dynamic Unicode, saves memory</td>
    </tr>
    <tr>
        <td><strong>CHAR max size</strong></td>
        <td>2000 bytes</td>
    </tr>
    <tr>
        <td><strong>VARCHAR2 max size</strong></td>
        <td>4000 bytes</td>
    </tr>
    <tr>
        <td><strong>Default recommendation</strong></td>
        <td>Use VARCHAR2 for English, NVARCHAR2 for multi-language</td>
    </tr>
</table>

<h3>Class Summary</h3>

<p>
In today's lecture, we learned about **Character/String Data Types** in Oracle:
</p>

<ul>
    <li><strong>String representation:</strong> Always use single quotes: 'SMITH' ✅, SMITH ❌</li>
    <li><strong>Non-Unicode (English only):</strong> CHAR, VARCHAR2</li>
    <li><strong>Unicode (All languages):</strong> NCHAR, NVARCHAR2 (N = National Language)</li>
    <li><strong>CHAR:</strong> Fixed type, 2000 bytes max, wastes memory (pads)</li>
    <li><strong>VARCHAR2:</strong> Dynamic type, 4000 bytes max, saves memory ✅</li>
    <li><strong>NCHAR:</strong> Fixed Unicode, 2000 bytes max, wastes memory</li>
    <li><strong>NVARCHAR2:</strong> Dynamic Unicode, 4000 bytes max, saves memory</li>
    <li><strong>Best practice:</strong> Use VARCHAR2 by default (saves memory)</li>
</ul>

<p>
<strong>Remember:</strong> VARCHAR2 is the recommended choice for most string data in Oracle because it saves memory. Use CHAR only for fixed-length data. Use NVARCHAR2 for multi-language applications!
</p>

<p>
<strong>Homework:</strong>
</p>
<ul>
    <li>1. Create table with CHAR(10), insert 'HELLO', 'HEL', 'HE' and check bytes wasted</li>
    <li>2. Create table with VARCHAR2(10), insert same values and check bytes saved</li>
    <li>3. Compare memory usage between CHAR and VARCHAR2</li>
    <li>4. Create table with NVARCHAR2(50), insert names in Hindi, Chinese, Arabic</li>
    <li>5. Try inserting SMITH (no quotes) and observe error</li>
    <li>6. Try inserting 1021 (number) and observe error</li>
    <li>7. Verify all results with SELECT</li>
</ul>

<p>
<strong>Next Topic:</strong> DATE and TIMESTAMP Data Types in Oracle
</p>

`;

let sqlLongDataTypeContent = `

<h3>LONG Data Type in Oracle </h3>

<p>
Good morning students!
Today we will learn about the **LONG Data Type** in Oracle Database. LONG is used to store very large text data (up to 2 GB). It is useful for storing addresses, documents, descriptions, and other large text content that exceeds the limits of VARCHAR2.
</p>

<p>
<strong>What We Will Cover:</strong>
</p>
<ul>
    <li>Introduction to LONG Data Type</li>
    <li>Key Characteristics</li>
    <li>Maximum Size (2 GB)</li>
    <li>One LONG Column Per Table Rule</li>
    <li>Unicode and Non-Unicode Support</li>
    <li>Examples with Addresses</li>
    <li>When to Use LONG</li>
    <li>Limited in Modern Oracle (Deprecated)</li>
</ul>

<h3>Introduction to LONG Data Type</h3>

<p>
>**LONG** is a dynamic data type used to store very large text data (strings) in Oracle Database.
</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Property</th>
        <th>Value</th>
    </tr>
    <tr>
        <td><strong>Type</strong></td>
        <td>Dynamic</td>
    </tr>
    <tr>
        <td><strong>Stores</strong></td>
        <td>Unicode AND Non-Unicode characters</td>
    </tr>
    <tr>
        <td><strong>Storage Format</strong></td>
        <td>1 CHAR = 1 BYTE</td>
    </tr>
    <tr>
        <td><strong>Max Size</strong></td>
        <td>2 GB (2,147,483,648 bytes)</td>
    </tr>
    <tr>
        <td><strong>Columns Per Table</strong></td>
        <td>Only ONE LONG column allowed per table</td>
    </tr>
</table>

<h3>Key Characteristics of LONG</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Characteristic</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Dynamic Data Type</strong></td>
        <td>Uses only the space needed (no padding like CHAR)</td>
    </tr>
    <tr>
        <td><strong>Unicode Support</strong></td>
        <td>Can store all national languages (Hindi, Chinese, Arabic, etc.)</td>
    </tr>
    <tr>
        <td><strong>Non-Unicode Support</strong></td>
        <td>Can also store English text</td>
    </tr>
    <tr>
        <td><strong>1 CHAR = 1 BYTE</strong></td>
        <td>Each character takes 1 byte of storage</td>
    </tr>
    <tr>
        <td><strong>2 GB Maximum</strong></td>
        <td>Can store up to 2 billion characters (2 GB)</td>
    </tr>
    <tr>
        <td><strong>One Column Only</strong></td>
        <td>A table can have ONLY ONE LONG column</td>
    </tr>
</table>

<h3>Maximum Size: 2 GB</h3>

<p>
>**LONG** can store up to **2 GB** of text data.
</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Size</th>
        <th>Bytes</th>
        <th>Characters</th>
        <th>Example Content</th>
    </tr>
    <tr>
        <td><strong>1 KB</strong></td>
        <td>1,024 bytes</td>
        <td>1,024 characters</td>
        <td>Short paragraph</td>
    </tr>
    <tr>
        <td><strong>1 MB</strong></td>
        <td>1,048,576 bytes</td>
        <td>1 million characters</td>
        <td>Short document</td>
    </tr>
    <tr>
        <td><strong>100 MB</strong></td>
        <td>104,857,600 bytes</td>
        <td>100 million characters</td>
        <td>Large document</td>
    </tr>
    <tr>
        <td><strong>2 GB</strong></td>
        <td>2,147,483,648 bytes</td>
        <td>2.1 billion characters</td>
        <td>Very large document/book</td>
    </tr>
</table>

<p>
><strong>Comparison with other data types:</strong>
</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Data Type</th>
        <th>Max Size</th>
        <th>Use Case</th>
    </tr>
    <tr>
        <td>CHAR</td>
        <td>2000 bytes</td>
        <td>Fixed-length short text</td>
    </tr>
    <tr>
        <td>VARCHAR2</td>
        <td>4000 bytes</td>
        <td>Variable-length short text</td>
    </tr>
    <tr>
        <td><strong>LONG</strong></td>
        <td><strong>2 GB</strong></td>
        <td><strong>Very large text (documents, addresses)</strong></td>
    </tr>
</table>

<h3>One LONG Column Per Table Rule</h3>

<p>
>**IMPORTANT:** A table can have ONLY ONE LONG datatype column.
</p>

<h4>Correct Example (One LONG Column):</h4>

<pre>
-- ✅ VALID: Only ONE LONG column
CREATE TABLE employees (
    emp_id NUMBER(5),
    emp_name VARCHAR2(50),
    email VARCHAR2(100),
    address LONG  -- Only one LONG column
);
</pre>

<h4>Incorrect Example (Two LONG Columns):</h4>

<pre>
-- ❌ INVALID: TWO LONG columns (not allowed)
CREATE TABLE employees (
    emp_id NUMBER(5),
    emp_name VARCHAR2(50),
    address LONG,        -- First LONG column
    comments LONG        -- Second LONG column ❌ ERROR!
);
-- Error: Only one LONG column allowed per table
</pre>

<h4>Why Only One LONG Column?</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Reason</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td><strong>Storage Efficiency</strong></td>
        <td>LONG uses special storage mechanism (not row storage)</td>
    </tr>
    <tr>
        <td><strong>Performance</strong></td>
        <td>Multiple LONG columns would slow down queries</td>
    </tr>
    <tr>
        <td><strong>Stability</strong></td>
        <td>Oracle limits to prevent table corruption</td>
    </tr>
</table>

<h3>Unicode and Non-Unicode Support</h3>

<p>
>**LONG** stores both **Unicode** (all national languages) AND **Non-Unicode** (English only) characters.
</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Language Type</th>
        <th>Supported?</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>English (Non-Unicode)</td>
        <td>✅ Yes</td>
        <td>'Mr. SMITH'</td>
    </tr>
    <tr>
        <td>Hindi (Unicode)</td>
        <td>✅ Yes</td>
        <td>'राहुल कुमार'</td>
    </tr>
    <tr>
        <td>Chinese (Unicode)</td>
        <td>✅ Yes</td>
        <td>'李明'</td>
    </tr>
    <tr>
        <td>Arabic (Unicode)</td>
        <td>✅ Yes</td>
        <td>'محمد'</td>
    </tr>
    <tr>
        <td>Numbers in Text</td>
        <td>✅ Yes</td>
        <td>'12-3/45-123'</td>
    </tr>
</table>

<h3>Example: Storing Address with LONG</h3>

<h4>Create Table with LONG:</h4>

<pre>
-- Create table with LONG column for address
CREATE TABLE employees (
    emp_id NUMBER(5),
    emp_name VARCHAR2(50),
    email VARCHAR2(100),
    address LONG  -- Store full address here
);
</pre>

<h4>Insert Long Address:**</h4>

<pre>
-- Insert employee with long address
INSERT INTO employees (emp_id, emp_name, email, address)
VALUES (
    1,
    'Mr. SMITH',
    'smith@email.com',
    'H. NO: 12-3/45-123, MADHAPUR, HYDERABAD - 500023'
);

-- Insert another employee with very long address
INSERT INTO employees (emp_id, emp_name, email, address)
VALUES (
    2,
    'Ms. Priya Sharma',
    'priya@email.com',
    'House No. 45-6/78-901, Block A, Sector 12, 
     Kavuli Street, Madhapur, Hyderabad, 
     Andhra Pradesh - 500023, India'
);

COMMIT;
</pre>

<h4>Output:**</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>emp_id</th>
        <th>emp_name</th>
        <th>email</th>
        <th>address</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Mr. SMITH</td>
        <td>smith@email.com</td>
        <td>H. NO: 12-3/45-123, MADHAPUR, HYDERABAD - 500023</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Ms. Priya Sharma</td>
        <td>priya@email.com</td>
        <td>House No. 45-6/78-901, Block A, Sector 12, Kavuli Street, Madhapur, Hyderabad, Andhra Pradesh - 500023, India</td>
    </tr>
</table>

<h4>Query LONG Column:**</h4>

<pre>
-- Select full address
SELECT emp_name, address FROM employees WHERE emp_id = 1;
</pre>

<h4>Output:**</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>emp_name</th>
        <th>address</th>
    </tr>
    <tr>
        <td>Mr. SMITH</td>
        <td>H. NO: 12-3/45-123, MADHAPUR, HYDERABAD - 500023</td>
    </tr>
</table>

<h3>Example: Storing Multi-Language Text with LONG</h3>

<pre>
-- Create table
CREATE TABLE documents (
    doc_id NUMBER(5),
    doc_title VARCHAR2(100),
    content LONG
);

-- Insert English text
INSERT INTO documents (doc_id, doc_title, content)
VALUES (
    1,
    'English Document',
    'Mr. SMITH lives at H. NO: 12-3/45-123, MADHAPUR, HYDERABAD - 500023'
);

-- Insert Hindi text (Unicode)
INSERT INTO documents (doc_id, doc_title, content)
VALUES (
    2,
    'हिंदी दस्तावेज़',
    'राहुल कुमार का घर: घर नं. 12-3/45-123, माधापुर, हैदराबाद - 500023'
);

-- Insert Chinese text (Unicode)
INSERT INTO documents (doc_id, doc_title, content)
VALUES (
    3,
    '中文文档',
    '李明住在: 门牌号 12-3/45-123, 马达普尔, 海得拉巴 - 500023'
);

COMMIT;

-- View all documents
SELECT doc_title, content FROM documents;
</pre>

<h3>When to Use LONG</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Use Case</th>
        <th>Recommended?</th>
        <th>Alternative</th>
    </tr>
    <tr>
        <td>Short addresses (< 4000 chars)</td>
        <td>❌ No</td>
        <td>VARCHAR2(4000)</td>
    </tr>
    <tr>
        <td>Long addresses (> 4000 chars)</td>
        <td>✅ Yes</td>
        <td>LONG</td>
    </tr>
    <tr>
        <td>Full document text</td>
        <td>✅ Yes</td>
        <td>LONG</td>
    </tr>
    <tr>
        <td>Book chapters</td>
        <td>✅ Yes</td>
        <td>LONG</td>
    </tr>
    <tr>
        <td>Large descriptions</td>
        <td>✅ Yes</td>
        <td>LONG</td>
    </tr>
    <tr>
        <td>HTML/XML content</td>
        <td>⚠️ Consider</td>
        <td>CLOB (better)</td>
    </tr>
    <tr>
        <td>Binary data (images)</td>
        <td>❌ No</td>
        <td>BLOB</td>
    </tr>
</table>

<h4>When to Use LONG:**</h4>
<ul>
    <li>✅ Very long text (> 4000 characters)</li>
    <li>✅ Full document content</li>
    <li>✅ Long addresses with multiple lines</li>
    <li>✅ Book chapters or articles</li>
    <li>✅ Large descriptions</li>
    <li>❌ Short text (use VARCHAR2)</li>
    <li>❌ Binary data (use BLOB)</li>
    <li>❌ Multiple large text columns (use CLOB)</li>
</ul>

<h3>LIMITATION: LONG is Deprecated in Modern Oracle</h3>

<p>
><strong>IMPORTANT NOTE:** LONG data type is **deprecated** (limited support) in modern Oracle Database versions. Oracle recommends using **CLOB** (Character Large Object) instead.
</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>LONG</th>
        <th>CLOB (Recommended)</th>
    </tr>
    <tr>
        <td><strong>Status</strong></td>
        <td>Deprecated (limited)</td>
        <td>Supported (modern)</td>
    </tr>
    <tr>
        <td><strong>Max Size</strong></td>
        <td>2 GB</td>
        <td>4 GB (128 TB in some versions)</td>
    </tr>
    <tr>
        <td><strong>Columns Per Table</strong></td>
        <td>Only 1</td>
        <td>Multiple allowed</td>
    </tr>
    <tr>
        <td><strong>Functions</strong></td>
        <td>Limited SQL functions</td>
        <td>Full SQL function support</td>
    </tr>
    <tr>
        <td><strong>Performance</strong></td>
        <td>Slower</td>
        <td>Faster</td>
    </tr>
    <tr>
        <td><strong>Recommendation</strong></td>
        <td>❌ Avoid</td>
        <td>✅ Use instead</td>
    </tr>
</table>

<h4>CLOB vs LONG Comparison:**</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Feature</th>
        <th>LONG</th>
        <th>CLOB</th>
    </tr>
    <tr>
        <td>Max Size</td>
        <td>2 GB</td>
        <td>4 GB (or 128 TB)</td>
    </tr>
    <tr>
        <td>Multiple Columns</td>
        <td>Only 1 allowed</td>
        <td>Multiple allowed ✅</td>
    </tr>
    <tr>
        <td>SQL Functions</td>
        <td>Limited</td>
        <td>Full support ✅</td>
    </tr>
    <tr>
        <td>Indexing</td>
        <td>Not supported</td>
        <td>Supported ✅</td>
    </tr>
    <tr>
        <td>Performance</td>
        <td>Slower</td>
        <td>Faster ✅</td>
    </tr>
    <tr>
        <td>Future Support</td>
        <td>Deprecated ❌</td>
        <td>Supported ✅</td>
    </tr>
</table>

<h4>Recommended: Use CLOB Instead of LONG</h4>

<pre>
-- ❌ OLD (Deprecated): Using LONG
CREATE TABLE employees_old (
    emp_id NUMBER(5),
    emp_name VARCHAR2(50),
    address LONG  -- Deprecated!
);

-- ✅ NEW (Recommended): Using CLOB
CREATE TABLE employees_new (
    emp_id NUMBER(5),
    emp_name VARCHAR2(50),
    address CLOB  -- Modern, recommended!
);

-- Insert data
INSERT INTO employees_new (emp_id, emp_name, address)
VALUES (
    1,
    'Mr. SMITH',
    'H. NO: 12-3/45-123, MADHAPUR, HYDERABAD - 500023'
);

COMMIT;
</pre>

<h3>LONG vs Other String Data Types</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Data Type</th>
        <th>Type</th>
        <th>Max Size</th>
        <th>Columns Per Table</th>
        <th>Status</th>
        <th>Use When</th>
    </tr>
    <tr>
        <td>CHAR</td>
        <td>Fixed</td>
        <td>2000 bytes</td>
        <td>Multiple</td>
        <td>Supported</td>
        <td>Fixed-length short text</td>
    </tr>
    <tr>
        <td>VARCHAR2</td>
        <td>Dynamic</td>
        <td>4000 bytes</td>
        <td>Multiple</td>
        <td>Supported ✅</td>
        <td>Variable-length short text (default)</td>
    </tr>
    <tr>
        <td><strong>LONG</strong></td>
        <td><strong>Dynamic</strong></td>
        <td><strong>2 GB</strong></td>
        <td><strong>Only 1</strong></td>
        <td><strong>Deprecated ❌</strong></td>
        <td><strong>Very large text (avoid)</strong></td>
    </tr>
    <tr>
        <td>CLOB</td>
        <td>Dynamic</td>
        <td>4 GB (128 TB)</td>
        <td>Multiple ✅</td>
        <td>Supported ✅</td>
        <td>Very large text (recommended)</td>
    </tr>
    <tr>
        <td>NVARCHAR2</td>
        <td>Dynamic</td>
        <td>4000 bytes</td>
        <td>Multiple</td>
        <td>Supported ✅</td>
        <td>Multi-language short text</td>
    </tr>
    <tr>
        <td>NCHAR</td>
        <td>Fixed</td>
        <td>2000 bytes</td>
        <td>Multiple</td>
        <td>Supported ✅</td>
        <td>Multi-language fixed text</td>
    </tr>
</table>

<h3>Key Points Summary</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Point</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td><strong>Dynamic type</strong></td>
        <td>Uses only space needed (no padding)</td>
    </tr>
    <tr>
        <td><strong>Unicode & Non-Unicode</strong></td>
        <td>Stores all languages (English, Hindi, Chinese, Arabic)</td>
    </tr>
    <tr>
        <td><strong>1 CHAR = 1 BYTE</strong></td>
        <td>Each character = 1 byte</td>
    </tr>
    <tr>
        <td><strong>2 GB Max</strong></td>
        <td>Up to 2 billion characters</td>
    </tr>
    <tr>
        <td><strong>One Column Only</strong></td>
        <td>Only ONE LONG column per table</td>
    </tr>
    <tr>
        <td><strong>Deprecated</strong></td>
        <td>Limited support in modern Oracle</td>
    </tr>
    <tr>
        <td><strong>Use CLOB Instead</strong></td>
        <td>CLOB is recommended (4 GB, multiple columns)</td>
    </tr>
    <tr>
        <td><strong>Best For</strong></td>
        <td>Very long text (> 4000 chars): addresses, documents</td>
    </tr>
</table>

<h3>Class Summary</h3>

<p>
In today's lecture, we learned about the **LONG Data Type** in Oracle:
</p>

<ul>
    <li><strong>Type:</strong> Dynamic data type</li>
    <li><strong>Stores:</strong> Unicode AND Non-Unicode characters (all languages)</li>
    <li><strong>Storage:</strong> 1 CHAR = 1 BYTE</li>
    <li><strong>Max Size:</strong> 2 GB (2.1 billion characters)</li>
    <li><strong>Limitation:</strong> Only ONE LONG column per table</li>
    <li><strong>Example:</strong> ADDRESS LONG for long addresses</li>
    <li><strong>Status:</strong> Deprecated in modern Oracle ❌</li>
    <li><strong>Recommended:</strong> Use CLOB instead ✅</li>
</ul>

<p>
><strong>IMPORTANT:</strong> LONG is deprecated. Use **CLOB** (Character Large Object) for very large text data in modern Oracle Database. CLOB supports up to 4 GB (or 128 TB) and allows multiple columns per table!
</p>

<p>
<strong>Homework:</strong>
</p>
<ul>
    <li>1. Create table with LONG column, insert long address</li>
    <li>2. Try creating table with TWO LONG columns (observe error)</li>
    <li>3. Insert multi-language text (Hindi, Chinese) in LONG</li>
    <li>4. Create table with CLOB instead of LONG</li>
    <li>5. Insert same data in CLOB column</li>
    <li>6. Compare LONG vs CLOB features</li>
    <li>7. Verify all results with SELECT</li>
</ul>

<p>
><strong>Next Topic:</strong> DATE and TIMESTAMP Data Types in Oracle
</p>

`;

let sqlBinaryLargeObjectDataTypesContent = `

<h3>RAW, LONG RAW, and LOB Data Types in Oracle </h3>

<p>
Good morning students!
Today we will learn about **Binary Data Types** (RAW, LONG RAW) and **LOB (Large Object) Data Types** (CLOB, NCLOB, BLOB) in Oracle Database. These data types are used to store binary data like images, audio, video files, and very large text content that cannot be stored in regular string data types.
</p>

<p>
<strong>What We Will Cover:</strong>
</p>
<ul>
    <li>RAW and LONG RAW Data Types (Binary)</li>
    <li>LOB Data Types Overview</li>
    <li>CLOB (Character Large Object)</li>
    <li>NCLOB (National Character Large Object)</li>
    <li>BLOB (Binary Large Object)</li>
    <li>Comparison Table</li>
    <li>Complete Examples</li>
</ul>

<h3>1. RAW & LONG RAW Data Types (Binary Data Types)</h3>

<p>
>**RAW** and **LONG RAW** are used to store IMAGE/AUDIO/VIDEO files in **binary format** (0101001010101).
</p>

<p>
These data types are also called **"BINARY DATATYPES"** in Oracle.
</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Data Type</th>
        <th>Type</th>
        <th>Max Size</th>
        <th>Stores</th>
        <th>Status</th>
    </tr>
    <tr>
        <td><strong>RAW</strong></td>
        <td>Static (Fixed)</td>
        <td>2000 bytes</td>
        <td>Binary data (small files)</td>
        <td>Supported</td>
    </tr>
    <tr>
        <td><strong>LONG RAW</strong></td>
        <td>Dynamic</td>
        <td>2 GB</td>
        <td>Binary data (large files)</td>
        <td>Deprecated ❌</td>
    </tr>
</table>

<h4>i) RAW Data Type</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Property</th>
        <th>Value</th>
    </tr>
    <tr>
        <td><strong>Type</strong></td>
        <td>Static (Fixed)</td>
    </tr>
    <tr>
        <td><strong>Max Size</strong></td>
        <td>2000 bytes</td>
    </tr>
    <tr>
        <td><strong>Stores</strong></td>
        <td>Binary data in format: 0101001010101</td>
    </tr>
    <tr>
        <td><strong>Use Case</strong></td>
        <td>Small binary files (small images, icons)</td>
    </tr>
</table>

<h4>RAW Example:</h4>

<pre>
-- Create table with RAW column
CREATE TABLE small_images (
    id NUMBER(5),
    image_name VARCHAR2(50),
    image_data RAW(2000)  -- Store small image (max 2000 bytes)
);

-- Insert small binary data
INSERT INTO small_images (id, image_name, image_data)
VALUES (1, 'icon.png', HEXTORAW('89504E470D0A1A0A'));  -- Binary as hex

COMMIT;
</pre>

<h4>ii) LONG RAW Data Type</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Property</th>
        <th>Value</th>
    </tr>
    <tr>
        <td><strong>Type</strong></td>
        <td>Dynamic</td>
    </tr>
    <tr>
        <td><strong>Max Size</strong></td>
        <td>2 GB</td>
    </tr>
    <tr>
        <td><strong>Stores</strong></td>
        <td>Binary data in format: 0101010101000101</td>
    </tr>
    <tr>
        <td><strong>Use Case</strong></td>
        <td>Large binary files (large images, audio, video)</td>
    </tr>
    <tr>
        <td><strong>Status</strong></td>
        <td>Deprecated ❌ (Use BLOB instead)</td>
    </tr>
</table>

<h4>LONG RAW Example (Deprecated):</h4>

<pre>
-- ❌ OLD (Deprecated): Using LONG RAW
CREATE TABLE large_files_old (
    id NUMBER(5),
    file_name VARCHAR2(100),
    file_data LONG RAW  -- Deprecated! Use BLOB instead
);
</pre>

<h3>2. LOB (Large Object) Data Types</h3>

<p>
>**LOB (Large Object)** data types are used to store very large data (up to 4 GB or more).
</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>LOB Type</th>
        <th>Full Name</th>
        <th>Stores</th>
        <th>Type</th>
        <th>Max Size</th>
        <th>Languages</th>
    </tr>
    <tr>
        <td><strong>CLOB</strong></td>
        <td>Character Large Object</td>
        <td>Non-Unicode text</td>
        <td>Dynamic</td>
        <td>4 GB</td>
        <td>English only</td>
    </tr>
    <tr>
        <td><strong>NCLOB</strong></td>
        <td>National Character Large Object</td>
        <td>Unicode text</td>
        <td>Dynamic</td>
        <td>4 GB</td>
        <td>All languages</td>
    </tr>
    <tr>
        <td><strong>BLOB</strong></td>
        <td>Binary Large Object</td>
        <td>Binary data (images, audio, video)</td>
        <td>Dynamic</td>
        <td>4 GB</td>
        <td>Binary (01010101)</td>
    </tr>
</table>

<h3>CLOB: Character Large Object</h3>

<h4>Characteristics:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Property</th>
        <th>Value</th>
    </tr>
    <tr>
        <td><strong>Full Name</strong></td>
        <td>Character Large Object</td>
    </tr>
    <tr>
        <td><strong>Stores</strong></td>
        <td>Non-Unicode characters (English only)</td>
    </tr>
    <tr>
        <td><strong>Type</strong></td>
        <td>Dynamic</td>
    </tr>
    <tr>
        <td><strong>Max Size</strong></td>
        <td>4 GB</td>
    </tr>
    <tr>
        <td><strong>Languages</strong></td>
        <td>English ONLY</td>
    </tr>
</table>

<h4>Syntax:</h4>
<pre>
description CLOB
</pre>

<h4>CLOB Example - Create Table:</h4>

<pre>
-- Create table with CLOB column
CREATE TABLE clob_example (
    id NUMBER,
    description CLOB
);
</pre>

<h4>CLOB Example - Insert Long Text:</h4>

<pre>
-- Insert long text description
INSERT INTO clob_example (id, description)
VALUES (
    1,
    'This is a very long description that exceeds the VARCHAR2 limit of 4000 bytes. 
     CLOB can store up to 4 GB of text data, which is perfect for storing 
     long documents, articles, reviews, and detailed descriptions.
     
     Mr. SMITH lives at H. NO: 12-3/45-123, MADHAPUR, HYDERABAD - 500023.
     
     This document contains multiple paragraphs and can be extremely long.'
);

COMMIT;
</pre>

<h4>CLOB Example - Query Data:</h4>

<pre>
-- Select CLOB data
SELECT id, description FROM clob_example WHERE id = 1;
</pre>

<h3>NCLOB: National Character Large Object</h3>

<h4>Characteristics:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Property</th>
        <th>Value</th>
    </tr>
    <tr>
        <td><strong>Full Name</strong></td>
        <td>National Character Large Object</td>
    </tr>
    <tr>
        <td><strong>Stores</strong></td>
        <td>Unicode characters (all national languages)</td>
    </tr>
    <tr>
        <td><strong>Type</strong></td>
        <td>Dynamic</td>
    </tr>
    <tr>
        <td><strong>Max Size</strong></td>
        <td>4 GB</td>
    </tr>
    <tr>
        <td><strong>Languages</strong></td>
        <td>All national languages (Hindi, Chinese, Arabic, etc.)</td>
    </tr>
    <tr>
        <td><strong>"N" Means</strong></td>
        <td>NATIONAL LANGUAGE</td>
    </tr>
</table>

<h4>Syntax:</h4>
<pre>
notes NCLOB
</pre>

<h4>NCLOB Example - Create Table:</h4>

<pre>
-- Create table with NCLOB column
CREATE TABLE nclob_example (
    id NUMBER,
    notes NCLOB
);
</pre>

<h4>NCLOB Example - Insert Multi-Language Text:</h4>

<pre>
-- Insert Hindi text (Unicode)
INSERT INTO nclob_example (id, notes)
VALUES (
    1,
    'राहुल कुमार का घर: घर नं. 12-3/45-123, माधापुर, हैदराबाद - 500023'
);

-- Insert Chinese text (Unicode)
INSERT INTO nclob_example (id, notes)
VALUES (
    2,
    '李明住在: 门牌号 12-3/45-123, 马达普尔, 海得拉巴 - 500023'
);

-- Insert Arabic text (Unicode)
INSERT INTO nclob_example (id, notes)
VALUES (
    3,
    'محمد يسكن في: رقم المنزل 12-3/45-123, مدابور, هيدراباد - 500023'
);

-- Insert English text
INSERT INTO nclob_example (id, notes)
VALUES (
    4,
    'Mr. SMITH lives at H. NO: 12-3/45-123, MADHAPUR, HYDERABAD - 500023'
);

COMMIT;
</pre>

<h4>NCLOB Example - Query Data:</h4>

<pre>
-- Select all notes
SELECT id, notes FROM nclob_example;
</pre>

<h3>BLOB: Binary Large Object</h3>

<h4>Characteristics:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Property</th>
        <th>Value</th>
    </tr>
    <tr>
        <td><strong>Full Name</strong></td>
        <td>Binary Large Object</td>
    </tr>
    <tr>
        <td><strong>Stores</strong></td>
        <td>IMAGE/AUDIO/VIDEO files in binary format (0101010101000101)</td>
    </tr>
    <tr>
        <td><strong>Type</strong></td>
        <td>Dynamic</td>
    </tr>
    <tr>
        <td><strong>Max Size</strong></td>
        <td>4 GB</td>
    </tr>
    <tr>
        <td><strong>Format</strong></td>
        <td>Binary: 0101010101000101</td>
    </tr>
</table>

<h4>BLOB Example - Create Table:</h4>

<pre>
-- Create table with BLOB column
CREATE TABLE blob_example (
    id NUMBER PRIMARY KEY,
    file_name VARCHAR2(100),
    file_data BLOB
);
</pre>

<h4>BLOB Example - Insert Binary Data:</h4>

<pre>
-- Insert image data (binary)
INSERT INTO blob_example (id, file_name, file_data)
VALUES (
    1,
    'photo.jpg',
    HEXTORAW('89504E470D0A1A0A89504E470D0A1A0A')  -- Binary as hex
);

-- Insert audio data
INSERT INTO blob_example (id, file_name, file_data)
VALUES (
    2,
    'song.mp3',
    HEXTORAW('49443303000000000000')  -- MP3 binary header
);

-- Insert video data
INSERT INTO blob_example (id, file_name, file_data)
VALUES (
    3,
    'video.mp4',
    HEXTORAW('0000001C66546464')  -- MP4 binary header
);

COMMIT;
</pre>

<h4>BLOB Example - Query Data:</h4>

<pre>
-- Select file information
SELECT id, file_name, DBMS_LOB.GETLENGTH(file_data) AS file_size_bytes
FROM blob_example;
</pre>

<h3>Comparison Table - All Binary and LOB Data Types</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Data Type</th>
        <th>Type</th>
        <th>Max Size</th>
        <th>Stores</th>
        <th>Languages</th>
        <th>Status</th>
        <th>Use When</th>
    </tr>
    <tr>
        <td><strong>RAW</strong></td>
        <td>Static</td>
        <td>2000 bytes</td>
        <td>Binary (small)</td>
        <td>Binary</td>
        <td>Supported</td>
        <td>Small binary files</td>
    </tr>
    <tr>
        <td><strong>LONG RAW</strong></td>
        <td>Dynamic</td>
        <td>2 GB</td>
        <td>Binary (large)</td>
        <td>Binary</td>
        <td>Deprecated ❌</td>
        <td>Large binary (use BLOB)</td>
    </tr>
    <tr>
        <td><strong>CLOB</strong></td>
        <td>Dynamic</td>
        <td>4 GB</td>
        <td>Text (English)</td>
        <td>Non-Unicode</td>
        <td>Supported ✅</td>
        <td>Very long text (English)</td>
    </tr>
    <tr>
        <td><strong>NCLOB</strong></td>
        <td>Dynamic</td>
        <td>4 GB</td>
        <td>Text (all)</td>
        <td>Unicode</td>
        <td>Supported ✅</td>
        <td>Very long text (multi-language)</td>
    </tr>
    <tr>
        <td><strong>BLOB</strong></td>
        <td>Dynamic</td>
        <td>4 GB</td>
        <td>Binary files</td>
        <td>Binary</td>
        <td>Supported ✅</td>
        <td>Images, audio, video</td>
    </tr>
</table>

<h3>Size Comparison Table</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Data Type</th>
        <th>Max Size</th>
        <th>Equivalent</th>
        <th>Use Case</th>
    </tr>
    <tr>
        <td>CHAR</td>
        <td>2000 bytes</td>
        <td>2 KB</td>
        <td>Short fixed text</td>
    </tr>
    <tr>
        <td>VARCHAR2</td>
        <td>4000 bytes</td>
        <td>4 KB</td>
        <td>Short variable text</td>
    </tr>
    <tr>
        <td>RAW</td>
        <td>2000 bytes</td>
        <td>2 KB</td>
        <td>Small binary</td>
    </tr>
    <tr>
        <td>LONG RAW</td>
        <td>2 GB</td>
        <td>2,000,000 KB</td>
        <td>Large binary (deprecated)</td>
    </tr>
    <tr>
        <td>CLOB</td>
        <td>4 GB</td>
        <td>4,000,000 KB</td>
        <td>Very long text</td>
    </tr>
    <tr>
        <td>NCLOB</td>
        <td>4 GB</td>
        <td>4,000,000 KB</td>
        <td>Very long multi-language text</td>
    </tr>
    <tr>
        <td>BLOB</td>
        <td>4 GB</td>
        <td>4,000,000 KB</td>
        <td>Large binary files</td>
    </tr>
</table>

<h3>Complete Example - Multi-File Storage System</h3>

<pre>
-- Create table to store various file types
CREATE TABLE file_storage (
    file_id NUMBER PRIMARY KEY,
    file_name VARCHAR2(100),
    file_type VARCHAR2(50),
    description CLOB,        -- For English text descriptions
    notes NCLOB,              -- For multi-language notes
    file_data BLOB            -- For binary file content
);

-- Insert record with English description
INSERT INTO file_storage (file_id, file_name, file_type, description, notes, file_data)
VALUES (
    1,
    'contract.pdf',
    'PDF Document',
    'This is a legal contract document between Mr. SMITH and the company. 
     Address: H. NO: 12-3/45-123, MADHAPUR, HYDERABAD - 500023',
    'नियम और शर्तें: यह एक कानूनी अनुबंध दस्तावेज़ है',
    HEXTORAW('255044462D312E34')  -- PDF binary header
);

-- Insert record with Chinese notes
INSERT INTO file_storage (file_id, file_name, file_type, description, notes, file_data)
VALUES (
    2,
    'photo.jpg',
    'Image',
    'Family photo taken during vacation',
    '家庭照片，在度假时拍摄',
    HEXTORAW('89504E47')  -- PNG binary header
);

-- Insert record with audio file
INSERT INTO file_storage (file_id, file_name, file_type, description, notes, file_data)
VALUES (
    3,
    'presentation.mp3',
    'Audio',
    'Recorded presentation from meeting',
    '会议录音',
    HEXTORAW('494433')  -- MP3 binary header
);

COMMIT;

-- View all files
SELECT file_id, file_name, file_type, DBMS_LOB.GETLENGTH(file_data) AS size_bytes
FROM file_storage;
</pre>

<h3>When to Use Each Data Type</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Scenario</th>
        <th>Recommended Type</th>
        <th>Reason</th>
    </tr>
    <tr>
        <td>Small image (< 2KB)</td>
        <td>RAW</td>
        <td>Small binary, simple</td>
    </tr>
    <tr>
        <td>Large image/audio/video</td>
        <td><strong>BLOB</strong></td>
        <td>Up to 4 GB, modern</td>
    </tr>
    <tr>
        <td>Long English text</td>
        <td><strong>CLOB</strong></td>
        <td>Up to 4 GB text</td>
    </tr>
    <tr>
        <td>Long multi-language text</td>
        <td><strong>NCLOB</strong></td>
        <td>Unicode support</td>
    </tr>
    <tr>
        <td>Short English text</td>
        <td>VARCHAR2</td>
        <td>Up to 4000 bytes</td>
    </tr>
    <tr>
        <td>Short multi-language</td>
        <td>NVARCHAR2</td>
        <td>Unicode support</td>
    </tr>
</table>

<h3>Key Points Summary</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Point</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td><strong>RAW</strong></td>
        <td>Static, 2000 bytes, small binary</td>
    </tr>
    <tr>
        <td><strong>LONG RAW</strong></td>
        <td>Dynamic, 2 GB, deprecated (use BLOB)</td>
    </tr>
    <tr>
        <td><strong>CLOB</strong></td>
        <td>Dynamic, 4 GB, non-Unicode text (English)</td>
    </tr>
    <tr>
        <td><strong>NCLOB</strong></td>
        <td>Dynamic, 4 GB, Unicode text (all languages)</td>
    </tr>
    <tr>
        <td><strong>BLOB</strong></td>
        <td>Dynamic, 4 GB, binary files (images, audio, video)</td>
    </tr>
    <tr>
        <td><strong>Binary Format</strong></td>
        <td>0101010101000101 (for RAW, LONG RAW, BLOB)</td>
    </tr>
    <tr>
        <td><strong>"N" Prefix</strong></td>
        <td>NATIONAL LANGUAGE (Unicode)</td>
    </tr>
    <tr>
        <td><strong>LOB Max Size</strong></td>
        <td>All LOBs: 4 GB</td>
    </tr>
    <tr>
        <td><strong>Dynamic Types</strong></td>
        <td>VARCHAR2, CLOB, NCLOB, BLOB, LONG RAW</td>
    </tr>
</table>

<h3>Class Summary</h3>

<p>
In today's lecture, we learned about **Binary and LOB Data Types** in Oracle:
</p>

<ul>
    <li><strong>RAW:</strong> Static, 2000 bytes, small binary files</li>
    <li><strong>LONG RAW:</strong> Dynamic, 2 GB, deprecated ❌ (use BLOB)</li>
    <li><strong>CLOB:</strong> Dynamic, 4 GB, non-Unicode text (English)</li>
    <li><strong>NCLOB:</strong> Dynamic, 4 GB, Unicode text (all languages)</li>
    <li><strong>BLOB:</strong> Dynamic, 4 GB, binary files (images, audio, video) ✅</li>
    <li><strong>Binary Format:</strong> 0101010101000101</li>
    <li><strong>LOB = Large Object:</strong> CLOB, NCLOB, BLOB</li>
    <li><strong>"N" = National Language:</strong> Unicode support</li>
</ul>

<p>
><strong>IMPORTANT:</strong> Use **BLOB** instead of LONG RAW for binary data. Use **CLOB** or **NCLOB** instead of LONG for very large text. LOB types support up to 4 GB and are modern, recommended data types!
</p>

<p>
<strong>Homework:</strong>
</p>
<ul>
    <li>1. Create table with BLOB column, insert small image data</li>
    <li>2. Create table with CLOB column, insert long English text</li>
    <li>3. Create table with NCLOB column, insert Hindi/Chinese text</li>
    <li>4. Try creating table with LONG RAW (observe deprecated warning)</li>
    <li>5. Compare BLOB vs LONG RAW features</li>
    <li>6. Compare CLOB vs LONG features</li>
    <li>7. Verify all results with SELECT</li>
</ul>

<p>
><strong>Next Topic:</strong> DATE and TIMESTAMP Data Types in Oracle
</p>

`;

let sqlDateDataTypesContent = `

<h3>SQL DATE Data Types in Oracle </h3>

<p>
Good morning students!
Today we will learn about **DATE Data Types** in Oracle Database. DATE data types are used to store date and time information. Understanding date and time storage is crucial for applications that track transactions, events, appointments, and any time-based data.
</p>

<p>
<strong>What We Will Cover:</strong>
</p>
<ul>
    <li>Introduction to DATE Data Types</li>
    <li>Date Range in Oracle</li>
    <li>DATE Data Type (with examples)</li>
    <li>TIMESTAMP Data Type (with examples)</li>
    <li>DATE vs TIMESTAMP Comparison</li>
    <li>SYSDATE Function</li>
    <li>Default Date Format</li>
    <li>Complete practical examples</li>
</ul>

<h3>Introduction to DATE Data Types</h3>

<p>
>**DATE data types** are used to store date and time information.
</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Data Type</th>
        <th>Stores</th>
        <th>Time Precision</th>
        <th>Size</th>
    </tr>
    <tr>
        <td><strong>DATE</strong></td>
        <td>Date and time (optional)</td>
        <td>Seconds</td>
        <td>7 bytes</td>
    </tr>
    <tr>
        <td><strong>TIMESTAMP</strong></td>
        <td>Date, time, and milliseconds</td>
        <td>Milliseconds</td>
        <td>11 bytes (fixed)</td>
    </tr>
</table>

<h3>Date Range in Oracle</h3>

<p>
>The range of DATE datatype is from **'01-JAN-4712 BC'** to **'31-DEC-9999 AD'**.
</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Value</th>
    </tr>
    <tr>
        <td><strong>Minimum Date</strong></td>
        <td>01-JAN-4712 BC</td>
    </tr>
    <tr>
        <td><strong>Maximum Date</strong></td>
        <td>31-DEC-9999 AD</td>
    </tr>
    <tr>
        <td><strong>Total Range</strong></td>
        <td>Approximately 14,711 years</td>
    </tr>
    <tr>
        <td><strong>Includes</strong></td>
        <td>BC (Before Christ) and AD (After Christ)</td>
    </tr>
</table>

<h3>1. DATE Data Type</h3>

<h4>Characteristics:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Property</th>
        <th>Value</th>
    </tr>
    <tr>
        <td><strong>Stores</strong></td>
        <td>Date AND time information of a particular day</td>
    </tr>
    <tr>
        <td><strong>Time Required?</strong></td>
        <td>Time is OPTIONAL (can store date only)</td>
    </tr>
    <tr>
        <td><strong>Default Time</strong></td>
        <td>If time not inserted → '00:00:00 AM' (midnight)</td>
    </tr>
    <tr>
        <td><strong>Default Format</strong></td>
        <td>'DD-MON-YY/YYYY HH:MI:SS'</td>
    </tr>
    <tr>
        <td><strong>Size</strong></td>
        <td>7 bytes (fixed)</td>
    </tr>
    <tr>
        <td><strong>Time Precision</strong></td>
        <td>Seconds (no milliseconds)</td>
    </tr>
</table>

<h4>Default Date Format:</h4>

<pre>
THE DEFAULT DATE FORMAT OF ORACLE IS: 'DD-MON-YY/YYYY HH:MI:SS'

Example: 26-DEC-2022 10:41:23
         ↑  ↑   ↑    ↑  ↑  ↑  ↑
         │  │   │    │  │  │  │
        Day Month Year  Hour Min Sec
</pre>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Format Component</th>
        <th>Example</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>DD</td>
        <td>26</td>
        <td>Day (01-31)</td>
    </tr>
    <tr>
        <td_MON</td>
        <td>DEC</td>
        <td>Month name (3 letters)</td>
    </tr>
    <tr>
        <td>YYYY</td>
        <td>2022</td>
        <td>Year (4 digits)</td>
    </tr>
    <tr>
        <td>HH</td>
        <td>10</td>
        <td>Hour (01-12)</td>
    </tr>
    <tr>
        <td>MI</td>
        <td>41</td>
        <td>Minute (00-59)</td>
    </tr>
    <tr>
        <td>SS</td>
        <td>23</td>
        <td>Second (00-59)</td>
    </tr>
</table>

<h4>DATE Example - Create Table:</h4>

<pre>
-- Create table with DATE column
CREATE TABLE transactions (
    transaction_id NUMBER(5),
    transaction_name VARCHAR2(50),
    transaction_date DATE  -- Store date (time optional)
);
</pre>

<h4>DATE Example - Insert Date Only (Time Optional):</h4>

<pre>
-- Insert date only (time NOT required)
INSERT INTO transactions (transaction_id, transaction_name, transaction_date)
VALUES (1, 'Payment', '26-DEC-2022');  -- ✅ ALLOWED

-- Time is automatically set to 00:00:00 AM
</pre>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Input</th>
        <th>Stored Value</th>
        <th>Note</th>
    </tr>
    <tr>
        <td>'26-DEC-2022'</td>
        <td>26-DEC-2022 00:00:00 AM</td>
        <td>Time defaults to midnight</td>
    </tr>
</table>

<h4>DATE Example - Insert Date WITH Time:</h4>

<pre>
-- Insert date WITH time
INSERT INTO transactions (transaction_id, transaction_name, transaction_date)
VALUES (2, 'Purchase', '26-DEC-2022 10:41:23');  -- ❌ ERROR (wrong format)

-- Correct format:
INSERT INTO transactions (transaction_id, transaction_name, transaction_date)
VALUES (2, 'Purchase', '26-DEC-2022 10:41:23');  -- ✅ ALLOWED (correct format)
</pre>

<h4>Important: DATE Insertion Rules</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Insert Statement</th>
        <th>Result</th>
        <th>Reason</th>
    </tr>
    <tr>
        <td>'26-DEC-2022 10:41:23'</td>
        <td>❌ ERROR</td>
        <td>Wrong format (space before time)</td>
    </tr>
    <tr>
        <td>'26-DEC-2022'</td>
        <td>✅ ALLOWED</td>
        <td>Date only (time defaults to 00:00:00 AM)</td>
    </tr>
    <tr>
        <td>'26-DEC-2022 10:41:23'</td>
        <td>✅ ALLOWED</td>
        <td>Date + time (correct format)</td>
    </tr>
</table>

<h4>DATE Example - Insert with Default Time:</h4>

<pre>
-- Insert only date (no time)
INSERT INTO transactions (transaction_id, transaction_name, transaction_date)
VALUES (1, 'Payment', '26-DEC-2022');

-- What Oracle stores internally:
-- Date: 26-DEC-2022
-- Time: 00:00:00 AM (default midnight)

COMMIT;

-- Verify
SELECT transaction_id, transaction_name, transaction_date FROM transactions;
</pre>

<h4>Output:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>transaction_id</th>
        <th>transaction_name</th>
        <th>transaction_date</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Payment</td>
        <td>26-DEC-2022 00:00:00</td>
    </tr>
</table>

<h4>DATE Example - Insert with Specific Time:</h4>

<pre>
-- Insert date WITH specific time
INSERT INTO transactions (transaction_id, transaction_name, transaction_date)
VALUES (2, 'Purchase', '26-DEC-2022 10:41:23');

COMMIT;

-- Verify
SELECT transaction_id, transaction_name, transaction_date FROM transactions;
</pre>

<h4>Output:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>transaction_id</th>
        <th>transaction_name</th>
        <th>transaction_date</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Payment</td>
        <td>26-DEC-2022 00:00:00</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Purchase</td>
        <td>26-DEC-2022 10:41:23</td>
    </tr>
</table>

<h4>Storage Size:</h4>

<p>
>DATE allocates maximum size of **7 bytes**.
</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Component</th>
        <th>Bytes</th>
        <th>Stores</th>
    </tr>
    <tr>
        <td>Year</td>
        <td>2 bytes</td>
        <td>Year (4712 BC to 9999 AD)</td>
    </tr>
    <tr>
        <td>Month</td>
        <td>1 byte</td>
        <td>Month (1-12)</td>
    </tr>
    <tr>
        <td>Day</td>
        <td>1 byte</td>
        <td>Day (1-31)</td>
    </tr>
    <tr>
        <td>Hour</td>
        <td>1 byte</td>
        <td>Hour (0-23)</td>
    </tr>
    <tr>
        <td>Minute</td>
        <td>1 byte</td>
        <td>Minute (0-59)</td>
    </tr>
    <tr>
        <td>Second</td>
        <td>1 byte</td>
        <td>Second (0-59)</td>
    </tr>
    <tr>
        <td><strong>Total</strong></td>
        <td><strong>7 bytes</strong></td>
        <td>All date/time components</td>
    </tr>
</table>

<h3>SYSDATE Function</h3>

<p>
>SYSDATE returns the **current date and time** from the database server.
</p>

<pre>
SYSDATE → 26-DEC-2022 10:43:34
</pre>

<h4>SYSDATE Example:</h4>

<pre>
-- Get current date and time
SELECT SYSDATE FROM dual;
</pre>

<h4>Output:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>SYSDATE</th>
    </tr>
    <tr>
        <td>26-DEC-2022 10:43:34</td>
    </tr>
</table>

<h4>SYSDATE in INSERT:</h4>

<pre>
-- Insert transaction with current date/time
INSERT INTO transactions (transaction_id, transaction_name, transaction_date)
VALUES (3, 'Login', SYSDATE);

COMMIT;

-- Verify
SELECT transaction_id, transaction_name, transaction_date FROM transactions;
</pre>

<h4>Output:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>transaction_id</th>
        <th>transaction_name</th>
        <th>transaction_date</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Payment</td>
        <td>26-DEC-2022 00:00:00</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Purchase</td>
        <td>26-DEC-2022 10:41:23</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Login</td>
        <td>26-DEC-2022 10:43:34</td>
    </tr>
</table>

<h3>2. TIMESTAMP Data Type</h3>

<h4>Characteristics:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Property</th>
        <th>Value</th>
    </tr>
    <tr>
        <td><strong>Stores</strong></td>
        <td>Date AND time information ALONG WITH MILLISECONDS</td>
    </tr>
    <tr>
        <td><strong>Format</strong></td>
        <td>'DD-MON-YY/YYYY HH:MI:SS.MS'</td>
    </tr>
    <tr>
        <td><strong>Size</strong></td>
        <td>11 bytes (fixed memory)</td>
    </tr>
    <tr>
        <td><strong>Type</strong></td>
        <td>Fixed (static)</td>
    </tr>
    <tr>
        <td><strong>Time Precision</strong></td>
        <td>Milliseconds (more precise than DATE)</td>
    </tr>
</table>

<h4>TIMESTAMP Format:</h4>

<pre>
'DD-MON-YY/YYYY HH:MI:SS.MS'

Example: 26-DEC-2022 10:41:23.500
         ↑  ↑   ↑    ↑  ↑  ↑  ↑  ↑
         │  │   │    │  │  │  │  │
        Day Month Year  Hour Min Sec Milli&#8209;second
</pre>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Format Component</th>
        <th>Example</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>DD</td>
        <td>26</td>
        <td>Day (01-31)</td>
    </tr>
    <tr>
        <td_MON</td>
        <td>DEC</td>
        <td>Month name (3 letters)</td>
    </tr>
    <tr>
        <td>YYYY</td>
        <td>2022</td>
        <td>Year (4 digits)</td>
    </tr>
    <tr>
        <td>HH</td>
        <td>10</td>
        <td>Hour (01-12)</td>
    </tr>
    <tr>
        <td>MI</td>
        <td>41</td>
        <td>Minute (00-59)</td>
    </tr>
    <tr>
        <td>SS</td>
        <td>23</td>
        <td>Second (00-59)</td>
    </tr>
    <tr>
        <td>MS</td>
        <td>500</td>
        <td><strong>Millisecond (000-999)</strong> ✅</td>
    </tr>
</table>

<h4>TIMESTAMP Example - Create Table:</h4>

<pre>
-- Create table with TIMESTAMP column
CREATE TABLE events (
    event_id NUMBER(5),
    event_name VARCHAR2(50),
    event_time TIMESTAMP  -- Store date + time + milliseconds
);
</pre>

<h4>TIMESTAMP Example - Insert with Milliseconds:</h4>

<pre>
-- Insert timestamp WITH milliseconds
INSERT INTO events (event_id, event_name, event_time)
VALUES (1, 'Event Start', '26-DEC-2022 10:41:23.500');

-- Insert timestamp WITHOUT milliseconds (defaults to .000)
INSERT INTO events (event_id, event_name, event_time)
VALUES (2, 'Event End', '26-DEC-2022 11:30:45');

COMMIT;

-- Verify
SELECT event_id, event_name, event_time FROM events;
</pre>

<h4>Output:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>event_id</th>
        <th>event_name</th>
        <th>event_time</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Event Start</td>
        <td>26-DEC-2022 10:41:23.500</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Event End</td>
        <td>26-DEC-2022 11:30:45.000</td>
    </tr>
</table>

<p>
><strong>Note:</strong> Event End shows .000 milliseconds (default when not specified).
</p>

<h4>TIMESTAMP Example - Insert with SYSTIMESTAMP:</h4>

<pre>
-- SYSTIMESTAMP returns current date, time, and milliseconds
INSERT INTO events (event_id, event_name, event_time)
VALUES (3, 'System Event', SYSTIMESTAMP);

COMMIT;

-- Verify
SELECT event_id, event_name, event_time FROM events;
</pre>

<h4>Output:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>event_id</th>
        <th>event_name</th>
        <th>event_time</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Event Start</td>
        <td>26-DEC-2022 10:41:23.500</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Event End</td>
        <td>26-DEC-2022 11:30:45.000</td>
    </tr>
    <tr>
        <td>3</td>
        <td>System Event</td>
        <td>26-DEC-2022 10:45:12.345</td>
    </tr>
</table>

<p>
><strong>Note:</strong> SYSTIMESTAMP includes milliseconds (.345).
</p>

<h4>Storage Size:</h4>

<p>
>TIMESTAMP uses **11 bytes** (fixed memory).
</p>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Component</th>
        <th>Bytes</th>
        <th>Stores</th>
    </tr>
    <tr>
        <td>Year</td>
        <td>2 bytes</td>
        <td>Year</td>
    </tr>
    <tr>
        <td>Month</td>
        <td>1 byte</td>
        <td>Month</td>
    </tr>
    <tr>
        <td>Day</td>
        <td>1 byte</td>
        <td>Day</td>
    </tr>
    <tr>
        <td>Hour</td>
        <td>1 byte</td>
        <td>Hour</td>
    </tr>
    <tr>
        <td>Minute</td>
        <td>1 byte</td>
        <td>Minute</td>
    </tr>
    <tr>
        <td>Second</td>
        <td>1 byte</td>
        <td>Second</td>
    </tr>
    <tr>
        <td><strong>Millisecond</strong></td>
        <td><strong>4 bytes</strong></td>
        <td><strong>Millisecond</strong> ✅</td>
    </tr>
    <tr>
        <td><strong>Total</strong></td>
        <td><strong>11 bytes</strong></td>
        <td>All components + milliseconds</td>
    </tr>
</table>

<h3>DATE vs TIMESTAMP Comparison</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>DATE</th>
        <th>TIMESTAMP</th>
    </tr>
    <tr>
        <td><strong>Stores</strong></td>
        <td>Date + Time (seconds)</td>
        <td>Date + Time + Milliseconds</td>
    </tr>
    <tr>
        <td><strong>Time Precision</strong></td>
        <td>Seconds</td>
        <td>Milliseconds ✅</td>
    </tr>
    <tr>
        <td><strong>Format</strong></td>
        <td>DD-MON-YY HH:MI:SS</td>
        <td>DD-MON-YY HH:MI:SS.MS</td>
    </tr>
    <tr>
        <td><strong>Size</strong></td>
        <td>7 bytes</td>
        <td>11 bytes (fixed)</td>
    </tr>
    <tr>
        <td><strong>Type</strong></td>
        <td>Fixed</td>
        <td>Fixed</td>
    </tr>
    <tr>
        <td><strong>Milliseconds</strong></td>
        <td>No ❌</td>
        <td>Yes ✅</td>
    </tr>
    <tr>
        <td><strong>Default Time</strong></td>
        <td>00:00:00 AM</td>
        <td>00:00:00.000</td>
    </tr>
    <tr>
        <td><strong>Current Function</strong></td>
        <td>SYSDATE</td>
        <td>SYSTIMESTAMP</td>
    </tr>
    <tr>
        <td><strong>Use When</strong></td>
        <td>Time not critical (appointments)</td>
        <td>Time critical (transactions)</td>
    </tr>
</table>

<h3>Side-by-Side Example</h3>

<pre>
-- Create table with both DATE and TIMESTAMP
CREATE TABLE date_comparison (
    id NUMBER(5),
    description VARCHAR2(50),
    date_col DATE,
    timestamp_col TIMESTAMP
);

-- Insert same date/time into both
INSERT INTO date_comparison (id, description, date_col, timestamp_col)
VALUES (1, 'Same Time', '26-DEC-2022 10:41:23', '26-DEC-2022 10:41:23.500');

COMMIT;

-- Compare
SELECT id, description, date_col, timestamp_col FROM date_comparison;
</pre>

<h4>Output:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>id</th>
        <th>description</th>
        <th>date_col</th>
        <th>timestamp_col</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Same Time</td>
        <td>26-DEC-2022 10:41:23</td>
        <td>26-DEC-2022 10:41:23.500</td>
    </tr>
</table>

<p>
><strong>Difference:</strong> TIMESTAMP shows .500 milliseconds, DATE does not!
</p>

<h3>Complete Example - Transaction System</h3>

<pre>
-- Create transaction table
CREATE TABLE transaction_system (
    transaction_id NUMBER(5) PRIMARY KEY,
    transaction_type VARCHAR2(50),
    transaction_date DATE,           -- For date only (time optional)
    transaction_time TIMESTAMP,      -- For precise time with milliseconds
    amount NUMBER(10,2)
);

-- Insert transaction with DATE (time defaults to midnight)
INSERT INTO transaction_system (transaction_id, transaction_type, transaction_date, amount)
VALUES (1, 'Deposit', '26-DEC-2022', 5000.00);

-- Insert transaction with DATE and specific time
INSERT INTO transaction_system (transaction_id, transaction_type, transaction_date, amount)
VALUES (2, 'Withdrawal', '26-DEC-2022 10:41:23', 1500.00);

-- Insert transaction with TIMESTAMP (precise time)
INSERT INTO transaction_system (transaction_id, transaction_type, transaction_time, amount)
VALUES (3, 'Transfer', '26-DEC-2022 10:45:12.345', 2500.00);

-- Insert with SYSDATE and SYSTIMESTAMP
INSERT INTO transaction_system (transaction_id, transaction_type, transaction_date, transaction_time, amount)
VALUES (4, 'Payment', SYSDATE, SYSTIMESTAMP, 750.00);

COMMIT;

-- View all transactions
SELECT transaction_id, transaction_type, transaction_date, transaction_time, amount
FROM transaction_system;
</pre>

<h4>Output:</h4>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>transaction_id</th>
        <th>transaction_type</th>
        <th>transaction_date</th>
        <th>transaction_time</th>
        <th>amount</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Deposit</td>
        <td>26-DEC-2022 00:00:00</td>
        <td>26-DEC-2022 00:00:00.000</td>
        <td>5000.00</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Withdrawal</td>
        <td>26-DEC-2022 10:41:23</td>
        <td>26-DEC-2022 10:41:23.000</td>
        <td>1500.00</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Transfer</td>
        <td>NULL</td>
        <td>26-DEC-2022 10:45:12.345</td>
        <td>2500.00</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Payment</td>
        <td>26-DEC-2022 10:43:34</td>
        <td>26-DEC-2022 10:43:34.567</td>
        <td>750.00</td>
    </tr>
</table>

<h3>Key Points Summary</h3>

<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Point</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td><strong>Date Range</strong></td>
        <td>01-JAN-4712 BC to 31-DEC-9999 AD</td>
    </tr>
    <tr>
        <td><strong>DATE stores</strong></td>
        <td>Date + Time (seconds only)</td>
    </tr>
    <tr>
        <td><strong>Time optional in DATE</strong></td>
        <td>If not inserted → defaults to 00:00:00 AM</td>
    </tr>
    <tr>
        <td><strong>DATE format</strong></td>
        <td>DD-MON-YY YYYY HH:MI:SS</td>
    </tr>
    <tr>
        <td><strong>DATE size</strong></td>
        <td>7 bytes (fixed)</td>
    </tr>
    <tr>
        <td><strong>TIMESTAMP stores</strong></td>
        <td>Date + Time + Milliseconds</td>
    </tr>
    <tr>
        <td><strong>TIMESTAMP format</strong></td>
        <td>DD-MON-YY YYYY HH:MI:SS.MS</td>
    </tr>
    <tr>
        <td><strong>TIMESTAMP size</strong></td>
        <td>11 bytes (fixed)</td>
    </tr>
    <tr>
        <td><strong>Millisecond precision</strong></td>
        <td>Only TIMESTAMP has it (DATE does not)</td>
    </tr>
    <tr>
        <td><strong>SYSDATE</strong></td>
        <td>Returns current date + time (seconds)</td>
    </tr>
    <tr>
        <td><strong>SYSTIMESTAMP</strong></td>
        <td>Returns current date + time + milliseconds</td>
    </tr>
</table>

<h3>Class Summary</h3>

<p>
In today's lecture, we learned about **DATE Data Types** in Oracle:
</p>

<ul>
    <li><strong>DATE Range:</strong> 01-JAN-4712 BC to 31-DEC-9999 AD</li>
    <li><strong>DATE:</strong> Stores date + time (seconds), time optional, defaults to 00:00:00 AM, 7 bytes</li>
    <li><strong>DATE Format:</strong> DD-MON-YY YYYY HH:MI:SS</li>
    <li><strong>Time in DATE:</strong> Optional (if not inserted → 00:00:00 AM)</li>
    <li><strong>SYSDATE:</strong> Current date + time (e.g., 26-DEC-2022 10:43:34)</li>
    <li><strong>TIMESTAMP:</strong> Stores date + time + milliseconds, 11 bytes</li>
    <li><strong>TIMESTAMP Format:</strong> DD-MON-YY YYYY HH:MI:SS.MS</li>
    <li><strong>Milliseconds:</strong> Only TIMESTAMP has them (DATE does not)</li>
    <li><strong>SYSTIMESTAMP:</strong> Current date + time + milliseconds</li>
    <li><strong>Use DATE:</strong> When time precision not critical (appointments)</li>
    <li><strong>Use TIMESTAMP:</strong> When time precision critical (transactions, logs)</li>
</ul>

<p>
><strong>Remember:</strong> DATE stores seconds only (7 bytes). TIMESTAMP stores milliseconds (11 bytes). Use SYSDATE for DATE and SYSTIMESTAMP for TIMESTAMP!
</p>

<p>
><strong>Homework:</strong>
</p>
<ul>
    <li>1. Create table with DATE column, insert date only (observe default time)</li>
    <li>2. Create table with TIMESTAMP column, insert timestamp with milliseconds</li>
    <li>3. Insert SYSDATE into DATE column</li>
    <li>4. Insert SYSTIMESTAMP into TIMESTAMP column</li>
    <li>5. Compare DATE vs TIMESTAMP output</li>
    <li>6. Try inserting '26-DEC-2022 10:41:23' (observe error)</li>
    <li>7. Verify all results with SELECT</li>
</ul>

<p>
><strong>Next Topic:</strong> INTERVAL Data Types and Date Functions in Oracle
</p>

`;

let oracleOperatorsContent = `


<h3>Introduction to Oracle Operators</h3>


<p>
Good morning students!
Today we will learn about Operators in Oracle Database. Operators are special symbols that perform operations on variables, values, and columns. Understanding operators is crucial for writing SQL queries.
</p>


<p>
<strong>What We Will Cover:</strong>
</p>
<ul>
    <li>Introduction to Oracle Operators</li>
    <li>Types of Operators in Oracle</li>
    <li>ASSIGNMENT OPERATOR (Detailed Explanation)</li>
    <li>Assignment Operator Syntax</li>
    <li>Assignment Operator in SQL (UPDATE, SET)</li>
    <li>Assignment vs Equality Operator (=)</li>
    <li>Complete practical examples</li>
</ul>


<h3>Introduction to Oracle Operators</h3>


<p>
An operator is a special symbol that performs operations on values, variables, or columns.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Operator Type</th>
        <th>Purpose</th>
        <th>Example</th>
    </tr>
    <tr>
        <td><strong>Assignment</strong></td>
        <td>Assign value to variable/attribute</td>
        <td>=</td>
    </tr>
    <tr>
        <td><strong>Arithmetic</strong></td>
        <td>Mathematical operations</td>
        <td>+, -, *, /, %</td>
    </tr>
    <tr>
        <td><strong>Comparison</strong></td>
        <td>Compare values</td>
        <td>=, <, >, <=, >=, !=</td>
    </tr>
    <tr>
        <td><strong>Logical</strong></td>
        <td>Combine conditions</td>
        <td>AND, OR, NOT</td>
    </tr>
    <tr>
        <td><strong>String</strong></td>
        <td>String operations</td>
        <td>|| (concatenation)</td>
    </tr>
    <tr>
        <td><strong>Set</strong></td>
        <td>Set operations</td>
        <td>UNION, INTERSECT, MINUS</td>
    </tr>
</table>


<h3>ASSIGNMENT OPERATOR (Detailed)</h3>


<h4>Purpose:</h4>


<p>
>The ASSIGNMENT OPERATOR is used to assign a value to a variable or attribute.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Purpose</strong></td>
        <td>Assign value to variable/attribute</td>
    </tr>
    <tr>
        <td><strong>Left Side</strong></td>
        <td>Variable name or attribute name</td>
    </tr>
    <tr>
        <td><strong>Right Side</strong></td>
        <td>Value or expression</td>
    </tr>
    <tr>
        <td><strong>Result</strong></td>
        <td>Left side gets the value of right side</td>
    </tr>
</table>


<h4>Syntax:</h4>


<pre>
<ATTRIBUTE NAME> <ASSIGNMENT OPERATOR> <VALUE>
</pre>


<pre>
column_name = value;
</pre>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Component</th>
        <th>Description</th>
        <th>Example</th>
    </tr>
    <tr>
        <td><ATTRIBUTE NAME></td>
        <td>Name of column</td>
        <td>sal, age, empno</td>
    </tr>
    <tr>
        <td><ASSIGNMENT OPERATOR></td>
        <td>Operator that assigns value</td>
        <td>=</td>
    </tr>
    <tr>
        <td><VALUE></td>
        <td>Value or expression to assign</td>
        <td>40000, 25, 7788</td>
    </tr>
</table>


<h3>1. Assignment Operator = in SQL (UPDATE Statement)</h3>


<p>
>In SQL UPDATE statements, the equal sign = is used as assignment operator.
</p>


<h4>UPDATE Syntax:</h4>


<pre>
UPDATE <table_name> 
SET <column_name> = <value> 
WHERE <condition>;
</pre>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Component</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>UPDATE</strong></td>
        <td>Table to update</td>
    </tr>
    <tr>
        <td><strong>SET</strong></td>
        <td>Keyword for assignment</td>
    </tr>
    <tr>
        <td><strong>=</strong></td>
        <td>Assignment operator</td>
    </tr>
    <tr>
        <td><strong>WHERE</strong></td>
        <td>Condition to filter rows</td>
    </tr>
</table>


<h4>UPDATE Example - Assign Salary:</h4>


<pre>
-- Update salary for employee named SMITH
UPDATE emp 
SET sal = 40000 
WHERE ename = 'SMITH';
</pre>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Component</th>
        <th>Value</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td>Table</td>
        <td>emp</td>
        <td>Employee table</td>
    </tr>
    <tr>
        <td>Column</td>
        <td>sal</td>
        <td>Salary column (attribute)</td>
    </tr>
    <tr>
        <td>Assignment Operator</td>
        <td>=</td>
        <td>Assigns value to column</td>
    </tr>
    <tr>
        <td>Value</td>
        <td>40000</td>
        <td>New salary value</td>
    </tr>
    <tr>
        <td>Condition</td>
        <td>ename = 'SMITH'</td>
        <td>Only update SMITH's row</td>
    </tr>
</table>


<h4>Before and After UPDATE:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>Status</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>25000</td>
        <td><strong>Before:</strong> Old salary</td>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>40000</td>
        <td><strong>After:</strong> New salary (assigned)</td>
    </tr>
</table>


<h4>UPDATE Example - Multiple Columns:</h4>


<pre>
-- Update multiple columns
UPDATE emp 
SET sal = 45000, 
    deptno = 20,
    job = 'MANAGER'
WHERE empno = 7788;
</pre>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Column</th>
        <th>Old Value</th>
        <th>New Value (Assigned)</th>
    </tr>
    <tr>
        <td>sal</td>
        <td>25000</td>
        <td>45000</td>
    </tr>
    <tr>
        <td>deptno</td>
        <td>10</td>
        <td>20</td>
    </tr>
    <tr>
        <td>job</td>
        <td>'CLERK'</td>
        <td>'MANAGER'</td>
    </tr>
</table>


<h4>UPDATE Example - With Expression:</h4>


<pre>
-- Increase salary by 10%
UPDATE emp 
SET sal = sal * 1.10 
WHERE deptno = 20;
</pre>


<p>
><strong>Note:</strong> Right side can be expression (sal times 1.10)
</p>


<h3>2. Assignment in WHERE Clause (= for Comparison)</h3>


<p>
>In WHERE clause, = is used for equality comparison (not assignment).
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Context</th>
        <th>Usage of =</th>
        <th>Example</th>
    </tr>
    <tr>
        <td><strong>SET clause (UPDATE)</strong></td>
        <td>Assignment operator</td>
        <td>SET sal = 40000</td>
    </tr>
    <tr>
        <td><strong>WHERE clause</strong></td>
        <td>Equality comparison</td>
        <td>WHERE empno = 7788</td>
    </tr>
</table>


<h4>SELECT Example - Using = for Comparison:</h4>


<pre>
-- Select employee with empno = 7788
SELECT * 
FROM emp 
WHERE empno = 7788;
</pre>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Component</th>
        <th>Value</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td>Column</td>
        <td>empno</td>
        <td>Employee number column</td>
    </tr>
    <tr>
        <td>Operator</td>
        <td>=</td>
        <td><strong>Equality comparison</strong> (not assignment)</td>
    </tr>
    <tr>
        <td>Value</td>
        <td>7788</td>
        <td>Value to compare</td>
    </tr>
    <tr>
        <td>Purpose</td>
        <td>-</td>
        <td>Find row where empno EQUALS 7788</td>
    </tr>
</table>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>deptno</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>40000</td>
        <td>20</td>
    </tr>
</table>


<h3>3. DELETE Statement (Using = for Comparison)</h3>


<p>
>In DELETE statement, = is also used for equality comparison in WHERE clause.
</p>


<h4>DELETE Syntax:</h4>


<pre>
DELETE FROM <table_name> 
WHERE <condition>;
</pre>


<h4>DELETE Example - Delete by Department:</h4>


<pre>
-- Delete employees from department 20
DELETE FROM emp 
WHERE deptno = 20;
</pre>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Component</th>
        <th>Value</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td>Table</td>
        <td>emp</td>
        <td>Employee table</td>
    </tr>
    <tr>
        <td>Column</td>
        <td>deptno</td>
        <td>Department number column</td>
    </tr>
    <tr>
        <td>Operator</td>
        <td>=</td>
        <td><strong>Equality comparison</strong></td>
    </tr>
    <tr>
        <td>Value</td>
        <td>20</td>
        <td>Department to delete</td>
    </tr>
    <tr>
        <td>Action</td>
        <td>DELETE</td>
        <td>Remove matching rows</td>
    </tr>
</table>


<h4>Before and After DELETE:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>deptno</th>
        <th>Status</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>20</td>
        <td><strong>Before:</strong> Will be deleted</td>
    </tr>
    <tr>
        <td>7800</td>
        <td>JONES</td>
        <td>10</td>
        <td><strong>After:</strong> Remains (deptno not equal 20)</td>
    </tr>
    <tr>
        <td>7900</td>
        <td>BROWN</td>
        <td>30</td>
        <td><strong>After:</strong> Remains (deptno not equal 20)</td>
    </tr>
</table>


<h3>Assignment Operator (=) vs Equality Operator (=)</h3>


<p>
><strong>The same symbol (=) has different meanings based on context!</strong>
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Context</th>
        <th>Meaning of =</th>
        <th>Example</th>
        <th>Purpose</th>
    </tr>
    <tr>
        <td><strong>SET clause</strong></td>
        <td>Assignment operator</td>
        <td>SET sal = 40000</td>
        <td>Assign 40000 to sal column</td>
    </tr>
    <tr>
        <td><strong>WHERE clause</strong></td>
        <td>Equality comparison</td>
        <td>WHERE empno = 7788</td>
        <td>Compare empno with 7788</td>
    </tr>
</table>


<h4>Detailed Comparison:</h4>


<pre>
-- Example showing both uses of =


UPDATE emp                        -- UPDATE table
SET sal = 40000                  -- = is ASSIGNMENT (set sal to 40000)
WHERE empno = 7788;              -- = is COMPARISON (where empno EQUALS 7788)



-- Breakdown:
SET sal = 40000    → Assign value 40000 to column sal (ASSIGNMENT)
WHERE empno = 7788 → Find rows where empno EQUALS 7788 (COMPARISON)
</pre>


<h3>Key Rules for Assignment Operator</h3>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Rule</th>
        <th>Description</th>
        <th>Example</th>
    </tr>
    <tr>
        <td><strong>Left side must be column</strong></td>
        <td>Can only assign to assignable target</td>
        <td>SET sal = 40000 ✅</td>
    </tr>
    <tr>
        <td><strong>Right side is value/expression</strong></td>
        <td>Value or computed expression</td>
        <td>SET sal = sal * 1.1 ✅</td>
    </tr>
    <tr>
        <td><strong>Data type must match</strong></td>
        <td>Types must be compatible</td>
        <td>SET sal = 40000 ✅</td>
    </tr>
    <tr>
        <td><strong>SQL UPDATE uses =</strong></td>
        <td>Equal sign in SET clause</td>
        <td>SET col = val ✅</td>
    </tr>
    <tr>
        <td><strong>WHERE uses = for comparison</strong></td>
        <td>Equal sign compares values</td>
        <td>WHERE col = val ✅</td>
    </tr>
</table>


<h3>Complete Practical Examples</h3>


<h4>Example 1 - Complete UPDATE with WHERE:</h4>


<pre>
-- Step 1: View current data
SELECT empno, ename, sal, deptno 
FROM emp 
WHERE empno = 7788;



-- Step 2: Update salary (assignment)
UPDATE emp 
SET sal = 40000 
WHERE ename = 'SMITH';



-- Step 3: Verify update
SELECT empno, ename, sal, deptno 
FROM emp 
WHERE empno = 7788;
</pre>


<h4>Before UPDATE:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>deptno</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>25000</td>
        <td>20</td>
    </tr>
</table>


<h4>After UPDATE:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>deptno</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>40000</td>
        <td>20</td>
    </tr>
</table>


<p>
><strong>Assignment occurred:</strong> sal = 40000 (25000 to 40000)
</p>


<h4>Example 2 - Complete DELETE Operation:</h4>


<pre>
-- Step 1: View employees in department 20
SELECT empno, ename, sal, deptno 
FROM emp 
WHERE deptno = 20;



-- Step 2: Delete employees from department 20
DELETE FROM emp 
WHERE deptno = 20;



-- Step 3: Verify deletion
SELECT empno, ename, sal, deptno 
FROM emp 
WHERE deptno = 20;
</pre>


<h4>Before DELETE:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>deptno</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>20</td>
    </tr>
    <tr>
        <td>7800</td>
        <td>DAVIS</td>
        <td>20</td>
    </tr>
</table>


<h4>After DELETE:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>deptno</th>
    </tr>
    <tr>
        <td colspan="3"><strong>No rows (all deleted)</strong></td>
    </tr>
</table>


<p>
><strong>Note:</strong> Comparison occurred (deptno = 20), rows matching deleted
</p>


<h3>Key Points Summary</h3>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Point</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td><strong>Assignment Operator Purpose</strong></td>
        <td>Assign value to variable/attribute</td>
    </tr>
    <tr>
        <td><strong>SQL UPDATE Assignment</strong></td>
        <td>Uses = in SET clause</td>
    </tr>
    <tr>
        <td><strong>WHERE Clause</strong></td>
        <td>Uses = for comparison (not assignment)</td>
    </tr>
    <tr>
        <td><strong>Syntax</strong></td>
        <td><attribute> <operator> <value></td>
    </tr>
    <tr>
        <td><strong>Left Side</strong></td>
        <td>Variable or column name</td>
    </tr>
    <tr>
        <td><strong>Right Side</strong></td>
        <td>Value or expression</td>
    </tr>
    <tr>
        <td><strong>UPDATE Example</strong></td>
        <td>SET sal = 40000</td>
    </tr>
    <tr>
        <td><strong>SELECT Example</strong></td>
        <td>WHERE empno = 7788 (comparison)</td>
    </tr>
    <tr>
        <td><strong>DELETE Example</strong></td>
        <td>WHERE deptno = 20 (comparison)</td>
    </tr>
</table>


<h3>Class Summary</h3>


<p>
In today's lecture, we learned about Oracle Operators with focus on ASSIGNMENT OPERATOR:
</p>


<ul>
    <li><strong>Operator:</strong> Special symbol that performs operations</li>
    <li><strong>Assignment Operator:</strong> Assigns value to variable/attribute</li>
    <li><strong>SQL Assignment:</strong> Uses = in SET clause (e.g., SET sal = 40000)</li>
    <li><strong>Syntax:</strong> <attribute> <operator> <value></li>
    <li><strong>SELECT WHERE:</strong> Uses = for comparison (WHERE empno = 7788)</li>
    <li><strong>UPDATE SET:</strong> Uses = for assignment (SET sal = 40000)</li>
    <li><strong>DELETE WHERE:</strong> Uses = for comparison (WHERE deptno = 20)</li>
    <li><strong>Same symbol (=):</strong> Different meaning based on context</li>
    <li><strong>Left side:</strong> Must be variable or column</li>
    <li><strong>Right side:</strong> Value or expression</li>
</ul>


<p>
><strong>Remember:</strong> In SQL UPDATE use = in SET clause for assignment. In WHERE clause, = is for comparison!
</p>


<p>
><strong>Homework:</strong>
</p>
<ul>
    <li>1. Create UPDATE statement to change salary (use = in SET)</li>
    <li>2. Create SELECT with WHERE clause (use = for comparison)</li>
    <li>3. Create DELETE statement (use = in WHERE)</li>
    <li>4. Compare = usage in different contexts (SET vs WHERE)</li>
    <li>5. Assign computed value (e.g., SET sal = sal * 1.1)</li>
    <li>6. Verify all changes with SELECT statements</li>
</ul>


<p>
><strong>Next Topic:</strong> Arithmetic Operators in Oracle (+, -, *, /)
</p>


`;

let oracleArithmeticOperatorsContent = `


<h3>ARITHMETIC OPERATORS in Oracle</h3>


<p>
Good morning students!
Today we will learn about ARITHMETIC OPERATORS in Oracle Database. Arithmetic operators are special symbols that perform mathematical operations on numbers, columns, and variables. Understanding arithmetic operators is essential for data calculations and transformations.
</p>


<p>
<strong>What We Will Cover:</strong>
</p>
<ul>
    <li>Introduction to Arithmetic Operators</li>
    <li>List of Arithmetic Operators in Oracle</li>
    <li>ADDITION OPERATOR (+)</li>
    <li>SUBTRACTION OPERATOR (-)</li>
    <li>MULTIPLICATION OPERATOR (*)</li>
    <li>DIVISION OPERATOR (/)</li>
    <li>MODULUS OPERATOR (MOD)</li>
    <li>Arithmetic Operators in SELECT Statement</li>
    <li>Arithmetic Operators in UPDATE Statement</li>
    <li>Complete practical examples</li>
</ul>


<h3>Introduction to Arithmetic Operators</h3>


<p>
>Arithmetic operators perform **mathematical operations** on numeric values.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Operator Type</th>
        <th>Purpose</th>
        <th>Examples</th>
    </tr>
    <tr>
        <td><strong>Arithmetic</strong></td>
        <td>Mathematical calculations</td>
        <td>+, -, *, /</td>
    </tr>
    <tr>
        <td><strong>Assignment</strong></td>
        <td>Assign value</td>
        <td>=</td>
    </tr>
    <tr>
        <td><strong>Comparison</strong></td>
        <td>Compare values</td>
        <td>=, <, >, !=</td>
    </tr>
    <tr>
        <td><strong>Logical</strong></td>
        <td>Combine conditions</td>
        <td>AND, OR, NOT</td>
    </tr>
</table>


<h3>List of Arithmetic Operators in Oracle</h3>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Operator</th>
        <th>Name</th>
        <th>Description</th>
        <th>Example</th>
        <th>Result</th>
    </tr>
    <tr>
        <td><strong>+</strong></td>
        <td>Addition</td>
        <td>Add two values</td>
        <td>10 + 5</td>
        <td>15</td>
    </tr>
    <tr>
        <td><strong>-</strong></td>
        <td>Subtraction</td>
        <td>Subtract second from first</td>
        <td>10 - 5</td>
        <td>5</td>
    </tr>
    <tr>
        <td><strong>*</strong></td>
        <td>Multiplication</td>
        <td>Multiply two values</td>
        <td>10 * 5</td>
        <td>50</td>
    </tr>
    <tr>
        <td><strong>/</strong></td>
        <td>Division</td>
        <td>Divide first by second</td>
        <td>10 / 5</td>
        <td>2</td>
    </tr>
    <tr>
        <td><strong>MOD()</strong></td>
        <td>Modulus</td>
        <td>Return remainder</td>
        <td>MOD(10, 3)</td>
        <td>1</td>
    </tr>
</table>


<h3>1. ADDITION OPERATOR (+)</h3>


<h4>Description:</h4>


<p>
>The **+** operator adds two numeric values together.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Operator</strong></td>
        <td>+ (plus sign)</td>
    </tr>
    <tr>
        <td><strong>Left Operand</strong></td>
        <td>First number or column</td>
    </tr>
    <tr>
        <td><strong>Right Operand</strong></td>
        <td>Second number or column</td>
    </tr>
    <tr>
        <td><strong>Result</strong></td>
        <td>Sum of both operands</td>
    </tr>
</table>


<h4>Basic Addition Examples:</h4>


<pre>
-- Simple addition
SELECT 10 + 5 FROM dual;


-- Output: 15
</pre>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Expression</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>10 + 5</td>
        <td>15</td>
    </tr>
    <tr>
        <td>25 + 75</td>
        <td>100</td>
    </tr>
    <tr>
        <td>3.5 + 2.5</td>
        <td>6.0</td>
    </tr>
    <tr>
        <td>-10 + 5</td>
        <td>-5</td>
    </tr>
</table>


<h4>Addition with Columns - SELECT:</h4>


<pre>
-- Add bonus to salary
SELECT empno, ename, sal, sal + 5000 AS new_sal
FROM emp;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>new_sal</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>25000</td>
        <td>30000</td>
    </tr>
    <tr>
        <td>7800</td>
        <td>JONES</td>
        <td>30000</td>
        <td>35000</td>
    </tr>
</table>


<p>
><strong>Calculation:</</strong> sal + 5000 (25000 + 5000 = 30000)
</p>


<h4>Addition in UPDATE:</h4>


<pre>
-- Increase salary by 5000
UPDATE emp 
SET sal = sal + 5000 
WHERE empno = 7788;
</pre>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>Old Salary</th>
        <th>New Salary</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>25000</td>
        <td>30000</td>
    </tr>
</table>


<h3>2. SUBTRACTION OPERATOR (-)</h3>


<h4>Description:</h4>


<p>
>The **-** operator subtracts the second value from the first value.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Operator</strong></td>
        <td>- (minus sign)</td>
    </tr>
    <tr>
        <td><strong>Left Operand</strong></td>
        <td>First number (subtract from)</td>
    </tr>
    <tr>
        <td><strong>Right Operand</strong></td>
        <td>Second number (to subtract)</td>
    </tr>
    <tr>
        <td><strong>Result</strong></td>
        <td>Difference (first minus second)</td>
    </tr>
</table>


<h4>Basic Subtraction Examples:</h4>


<pre>
-- Simple subtraction
SELECT 10 - 5 FROM dual;


-- Output: 5
</pre>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Expression</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>10 - 5</td>
        <td>5</td>
    </tr>
    <tr>
        <td>100 - 25</td>
        <td>75</td>
    </tr>
    <tr>
        <td>50 - 50</td>
        <td>0</td>
    </tr>
    <tr>
        <td>10 - 20</td>
        <td>-10</td>
    </tr>
</table>


<h4>Subtraction with Columns - SELECT:</h4>


<pre>
-- Calculate salary after deduction
SELECT empno, ename, sal, sal - 3000 AS net_sal
FROM emp;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>net_sal</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>30000</td>
        <td>27000</td>
    </tr>
    <tr>
        <td>7800</td>
        <td>JONES</td>
        <td>35000</td>
        <td>32000</td>
    </tr>
</table>


<p>
><strong>Calculation:</strong> sal - 3000 (30000 - 3000 = 27000)
</p>


<h4>Subtraction Between Columns:</h4>


<pre>
-- Calculate difference between salary and commission
SELECT empno, ename, sal, comm, sal - comm AS diff
FROM emp
WHERE comm IS NOT NULL;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>comm</th>
        <th>diff</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>30000</td>
        <td>5000</td>
        <td>25000</td>
    </tr>
</table>


<p>
><strong>Calculation:</strong> sal - comm (30000 - 5000 = 25000)
</p>


<h3>3. MULTIPLICATION OPERATOR (*)</h3>


<h4>Description:</h4>


<p>
>The **\*** operator multiplies two numeric values.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Operator</strong></td>
        <td>* (asterisk)</td>
    </tr>
    <tr>
        <td><strong>Left Operand</strong></td>
        <td>First number (multiplier)</td>
    </tr>
    <tr>
        <td><strong>Right Operand</strong></td>
        <td>Second number (multiplied)</td>
    </tr>
    <tr>
        <td><strong>Result</strong></td>
        <td>Product of both operands</td>
    </tr>
</table>


<h4>Basic Multiplication Examples:</h4>


<pre>
-- Simple multiplication
SELECT 10 * 5 FROM dual;


-- Output: 50
</pre>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Expression</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>10 * 5</td>
        <td>50</td>
    </tr>
    <tr>
        <td>25 * 4</td>
        <td>100</td>
    </tr>
    <tr>
        <td>3.5 * 2</td>
        <td>7.0</td>
    </tr>
    <tr>
        <td>-5 * 10</td>
        <td>-50</td>
    </tr>
</table>


<h4>Multiplication with Columns - SELECT:</h4>


<pre>
-- Calculate annual salary (monthly sal * 12)
SELECT empno, ename, sal, sal * 12 AS annual_sal
FROM emp;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>annual_sal</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>30000</td>
        <td>360000</td>
    </tr>
    <tr>
        <td>7800</td>
        <td>JONES</td>
        <td>35000</td>
        <td>420000</td>
    </tr>
</table>


<p>
><strong>Calculation:</strong> sal * 12 (30000 * 12 = 360000)
</p>


<h4>Multiplication in UPDATE:</h4>


<pre>
-- Increase salary by 10% (multiply by 1.10)
UPDATE emp 
SET sal = sal * 1.10 
WHERE deptno = 20;
</pre>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>Old Salary</th>
        <th>New Salary</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>30000</td>
        <td>33000</td>
    </tr>
</table>


<p>
><strong>Calculation:</strong> sal * 1.10 (30000 * 1.10 = 33000)
</p>


<h3>4. DIVISION OPERATOR (/)</h3>


<h4>Description:</h4>


<p>
>The **/** operator divides the first value by the second value.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Operator</strong></td>
        <td>/ (slash)</td>
    </tr>
    <tr>
        <td><strong>Left Operand</strong></td>
        <td>First number (dividend)</td>
    </tr>
    <tr>
        <td><strong>Right Operand</strong></td>
        <td>Second number (divisor)</td>
    </tr>
    <tr>
        <td><strong>Result</strong></td>
        <td>Quotient (first divided by second)</td>
    </tr>
</table>


<h4>Basic Division Examples:</h4>


<pre>
-- Simple division
SELECT 10 / 5 FROM dual;


-- Output: 2
</pre>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Expression</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>10 / 5</td>
        <td>2</td>
    </tr>
    <tr>
        <td>100 / 25</td>
        <td>4</td>
    </tr>
    <tr>
        <td>50 / 10</td>
        <td>5</td>
    </tr>
    <tr>
        <td>10 / 4</td>
        <td>2.5</td>
    </tr>
</table>


<p>
><strong>Note:</strong> Oracle returns decimal result for division
</p>


<h4>Division with Columns - SELECT:</h4>


<pre>
-- Calculate monthly salary from annual salary
SELECT empno, ename, sal * 12 AS annual_sal, (sal * 12) / 12 AS monthly_sal
FROM emp;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>annual_sal</th>
        <th>monthly_sal</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>360000</td>
        <td>30000</td>
    </tr>
</table>


<p>
><strong>Calculation:</strong> (sal * 12) / 12 (360000 / 12 = 30000)
</p>


<h4>Division for Average Calculation:</h4>


<pre>
-- Calculate average salary per employee in department
SELECT deptno, SUM(sal) AS total_sal, COUNT(*) AS emp_count, SUM(sal) / COUNT(*) AS avg_sal
FROM emp
GROUP BY deptno;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>deptno</th>
        <th>total_sal</th>
        <th>emp_count</th>
        <th>avg_sal</th>
    </tr>
    <tr>
        <td>20</td>
        <td>135000</td>
        <td>5</td>
        <td>27000</td>
    </tr>
</table>


<p>
><strong>Calculation:</strong> total_sal / emp_count (135000 / 5 = 27000)
</p>


<h3>5. MODULUS OPERATOR (MOD)</h3>


<h4>Description:</h4>


<p>
>The **MOD()** function returns the **remainder** of division.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Function</strong></td>
        <td>MOD(number, divisor)</td>
    </tr>
    <tr>
        <td><strong>First Parameter</strong></td>
        <td>Number to divide (dividend)</td>
    </tr>
    <tr>
        <td><strong>Second Parameter</strong></td>
        <td>Number to divide by (divisor)</td>
    </tr>
    <tr>
        <td><strong>Result</strong></td>
        <td>Remainder after division</td>
    </tr>
</table>


<h4>Basic MOD Examples:</h4>


<pre>
-- Get remainder of 10 divided by 3
SELECT MOD(10, 3) FROM dual;


-- Output: 1
</pre>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Expression</th>
        <th>Calculation</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>MOD(10, 3)</td>
        <td>10 / 3 = 3 remainder 1</td>
        <td>1</td>
    </tr>
    <tr>
        <td>MOD(15, 5)</td>
        <td>15 / 5 = 3 remainder 0</td>
        <td>0</td>
    </tr>
    <tr>
        <td>MOD(17, 4)</td>
        <td>17 / 4 = 4 remainder 1</td>
        <td>1</td>
    </tr>
    <tr>
        <td>MOD(20, 6)</td>
        <td>20 / 6 = 3 remainder 2</td>
        <td>2</td>
    </tr>
</table>


<h4>MOD for Even/Odd Check:</h4>


<pre>
-- Check if employee number is even or odd
SELECT empno, ename, MOD(empno, 2) AS even_odd
FROM emp;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>even_odd</th>
        <th>Status</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>0</td>
        <td>Even</td>
    </tr>
    <tr>
        <td>7800</td>
        <td>JONES</td>
        <td>0</td>
        <td>Even</td>
    </tr>
    <tr>
        <td>7789</td>
        <td>BROWN</td>
        <td>1</td>
        <td>Odd</td>
    </tr>
</table>


<p>
><strong>Note:</strong> MOD = 0 means Even, MOD = 1 means Odd
</p>


<h4>MOD for Grouping:</h4>


<pre>
-- Assign employees to groups (1-4) based on empno
SELECT empno, ename, MOD(empno - 1, 4) + 1 AS group_num
FROM emp;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>group_num</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>1</td>
    </tr>
    <tr>
        <td>7789</td>
        <td>BROWN</td>
        <td>2</td>
    </tr>
    <tr>
        <td>7790</td>
        <td>DAVIS</td>
        <td>3</td>
    </tr>
    <tr>
        <td>7791</td>
        <td>MILLER</td>
        <td>4</td>
    </tr>
</table>


<h3>Arithmetic Operators in SELECT Statement</h3>


<h4>Complete Example - Multiple Operations:</h4>


<pre>
-- Calculate salary with bonus, tax, and net salary
SELECT empno, 
       ename, 
       sal AS base_sal,
       sal + 5000 AS with_bonus,
       sal * 1.10 AS with_10pct_bonus,
       sal - 3000 AS after_deduction,
       sal / 1000 AS sal_in_thousands,
       MOD(empno, 10) AS empno_remainder
FROM emp;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>base_sal</th>
        <th>with_bonus</th>
        <th>with_10pct</th>
        <th>after_ded</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>30000</td>
        <td>35000</td>
        <td>33000</td>
        <td>27000</td>
    </tr>
</table>


<h3>Arithmetic Operators in UPDATE Statement</h3>


<h4>Complete Example - Multiple Updates:</h4>


<pre>
-- Update salary with different calculations
UPDATE emp 
SET sal = sal * 1.10 + 1000,
    comm = sal * 0.05
WHERE deptno = 20;
</pre>


<p>
><strong>Note:</strong> Multiple arithmetic operations in one UPDATE
</p>


<h3>Key Points Summary</h3>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Point</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td><strong>Addition (+)</strong></td>
        <td>Adds two values (sal + 5000)</td>
    </tr>
    <tr>
        <td><strong>Subtraction (-)</strong></td>
        <td>Subtracts second from first (sal - 3000)</td>
    </tr>
    <tr>
        <td><strong>Multiplication (*)</strong></td>
        <td>Multiplies two values (sal * 12)</td>
    </tr>
    <tr>
        <td><strong>Division (/)</strong></td>
        <td>Divides first by second (sal / 1000)</td>
    </tr>
    <tr>
        <td><strong>Modulus (MOD)</strong></td>
        <td>Returns remainder (MOD(empno, 2))</td>
    </tr>
    <tr>
        <td><strong>Result Type</strong></td>
        <td>NUMBER (decimal for division)</td>
    </tr>
    <tr>
        <td><strong>NULL Handling</strong></td>
        <td>Any NULL operand returns NULL</td>
    </tr>
    <tr>
        <td><strong>Use in SELECT</strong></td>
        <td>Calculate new values in query</td>
    </tr>
    <tr>
        <td><strong>Use in UPDATE</strong></td>
        <td>Modify column values with calculations</td>
    </tr>
</table>


<h3>Class Summary</h3>


<p>
In today's lecture, we learned about ARITHMETIC OPERATORS in Oracle:
</p>


<ul>
    <li><strong>Addition (+):</strong> Adds values (10 + 5 = 15)</li>
    <li><strong>Subtraction (-):</strong> Subtracts (10 - 5 = 5)</li>
    <li><strong>Multiplication (*):</strong> Multiplies (10 * 5 = 50)</li>
    <li><strong>Division (/):</strong> Divides (10 / 5 = 2)</li>
    <li><strong>Modulus (MOD):</strong> Returns remainder (MOD(10, 3) = 1)</li>
    <li><strong>Use in SELECT:</strong> Calculate new columns (sal + 5000)</li>
    <li><strong>Use in UPDATE:</strong> Modify values (SET sal = sal * 1.10)</li>
    <li><strong>Division Result:</strong> Returns decimal (10 / 4 = 2.5)</li>
    <li><strong>NULL Handling:</strong> NULL operand returns NULL</li>
    <li><strong>Combined Operations:</strong> Use multiple operators (sal * 1.10 + 1000)</li>
</ul>


<p>
><strong>Remember:</strong> + for addition, - for subtraction, * for multiplication, / for division, MOD() for remainder!
</p>


<p>
><strong>Homework:</strong>
</p>
<ul>
    <li>1. Create SELECT with addition (sal + bonus)</li>
    <li>2. Create SELECT with subtraction (sal - tax)</li>
    <li>3. Create SELECT with multiplication (sal * 12 for annual)</li>
    <li>4. Create SELECT with division (total / count for average)</li>
    <li>5. Use MOD to check even/odd employee numbers</li>
    <li>6. Create UPDATE with salary increase (sal * 1.10)</li>
    <li>7. Combine multiple operators in one query</li>
</ul>


<p>
><strong>Next Topic:</strong> Comparison Operators in Oracle (=, <, >, <=, >=, !=)
</p>


`;

let oracleRelationalOperatorsContent = `


<h3>RELATIONAL OPERATORS in Oracle</h3>


<p>
Good morning students!
Today we will learn about RELATIONAL OPERATORS in Oracle Database. Relational operators (also called Comparison Operators) compare two values and return a boolean result (TRUE or FALSE). Understanding relational operators is essential for filtering data in WHERE clauses and conditions.
</p>


<p>
<strong>What We Will Cover:</strong>
</p>
<ul>
    <li>Introduction to Relational Operators</li>
    <li>List of Relational Operators in Oracle</li>
    <li>EQUAL OPERATOR (=)</li>
    <li>NOT EQUAL OPERATORS (!=, <>, NOT =)</li>
    <li>GREATER THAN OPERATOR (>)</li>
    <li>LESS THAN OPERATOR (<)</li>
    <li>GREATER THAN OR EQUAL OPERATOR (>=)</li>
    <li>LESS THAN OR EQUAL OPERATOR (<=)</li>
    <li>Relational Operators in WHERE Clause</li>
    <li>Relational Operators in JOIN Conditions</li>
    <li>Complete practical examples</li>
</ul>


<h3>Introduction to Relational Operators</h3>


<p>
Relational operators compare two values and determine the relationship between them.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Operator Type</th>
        <th>Purpose</th>
        <th>Returns</th>
    </tr>
    <tr>
        <td><strong>Relational</strong></td>
        <td>Compare two values</td>
        <td>TRUE or FALSE</td>
    </tr>
    <tr>
        <td><strong>Arithmetic</strong></td>
        <td>Mathematical operations</td>
        <td>NUMBER</td>
    </tr>
    <tr>
        <td><strong>Logical</strong></td>
        <td>Combine conditions</td>
        <td>TRUE or FALSE</td>
    </tr>
</table>


<h3>List of Relational Operators in Oracle</h3>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Operator</th>
        <th>Name</th>
        <th>Description</th>
        <th>Example</th>
        <th>Result (TRUE/FALSE)</th>
    </tr>
    <tr>
        <td><strong>=</strong></td>
        <td>Equal</td>
        <td>Values are equal</td>
        <td>10 = 10</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td><strong>!=</strong></td>
        <td>Not Equal</td>
        <td>Values are not equal</td>
        <td>10 != 5</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td><strong><></strong></td>
        <td>Not Equal</td>
        <td>Values are not equal</td>
        <td>10 <> 5</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td><strong>></strong></td>
        <td>Greater Than</td>
        <td>Left is greater than right</td>
        <td>10 > 5</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td><strong><</strong></td>
        <td>Less Than</td>
        <td>Left is less than right</td>
        <td>5 < 10</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td><strong>>=</strong></td>
        <td>Greater or Equal</td>
        <td>Left is greater or equal</td>
        <td>10 >= 10</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td><strong><=</strong></td>
        <td>Less or Equal</td>
        <td>Left is less or equal</td>
        <td>5 <= 10</td>
        <td>TRUE</td>
    </tr>
</table>


<h3>1. EQUAL OPERATOR (=)</h3>


<h4>Description:</h4>


<p>
The = operator checks if two values are EQUAL.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Operator</strong></td>
        <td>= (equal sign)</td>
    </tr>
    <tr>
        <td><strong>Left Operand</strong></td>
        <td>First value to compare</td>
    </tr>
    <tr>
        <td><strong>Right Operand</strong></td>
        <td>Second value to compare</td>
    </tr>
    <tr>
        <td><strong>Result</strong></td>
        <td>TRUE if equal, FALSE if not equal</td>
    </tr>
</table>


<h4>Basic Equal Examples:</h4>


<pre>
-- Check if values are equal
SELECT * FROM dual WHERE 10 = 10;


-- Output: Row returned (TRUE)
</pre>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Expression</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>10 = 10</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td>25 = 25</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td>10 = 5</td>
        <td>FALSE</td>
    </tr>
    <tr>
        <td>'John' = 'John'</td>
        <td>TRUE</td>
    </tr>
</table>


<h4>Equal Operator in WHERE - SELECT:</h4>


<pre>
-- Select employee with empno = 7788
SELECT empno, ename, sal, deptno
FROM emp
WHERE empno = 7788;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>deptno</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>30000</td>
        <td>20</td>
    </tr>
</table>


<p>
Note: Returns row where empno EQUALS 7788
</p>


<h4>Equal Operator with Strings:</h4>


<pre>
-- Select employees named SMITH
SELECT empno, ename, sal
FROM emp
WHERE ename = 'SMITH';
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>30000</td>
    </tr>
</table>


<h4>Equal Operator in UPDATE:</h4>


<pre>
-- Update salary for employee named SMITH
UPDATE emp
SET sal = 40000
WHERE ename = 'SMITH';
</pre>


<p>
Note: = in SET clause is ASSIGNMENT, = in WHERE clause is COMPARISON
</p>


<h3>2. NOT EQUAL OPERATORS (!=, <>)</h3>


<h4>Description:</h4>


<p>
The != and <> operators check if two values are NOT EQUAL. Both work the same in Oracle.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Operator</th>
        <th>Name</th>
        <th>Oracle Support</th>
    </tr>
    <tr>
        <td><strong>!=</strong></td>
        <td>Not Equal</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td><strong><></strong></td>
        <td>Not Equal</td>
        <td>Yes (standard)</td>
    </tr>
</table>


<h4>Basic Not Equal Examples:</h4>


<pre>
-- Check if values are not equal
SELECT * FROM dual WHERE 10 != 5;


-- Output: Row returned (TRUE)
</pre>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Expression</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>10 != 5</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td>10 <> 5</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td>10 != 10</td>
        <td>FALSE</td>
    </tr>
    <tr>
        <td>'John' != 'Jane'</td>
        <td>TRUE</td>
    </tr>
</table>


<h4>Not Equal Operator in WHERE:</h4>


<pre>
-- Select employees NOT in department 20
SELECT empno, ename, sal, deptno
FROM emp
WHERE deptno != 20;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>deptno</th>
    </tr>
    <tr>
        <td>7800</td>
        <td>JONES</td>
        <td>35000</td>
        <td>10</td>
    </tr>
    <tr>
        <td>7900</td>
        <td>BROWN</td>
        <td>28000</td>
        <td>30</td>
    </tr>
</table>


<p>
Note: Returns rows where deptno is NOT EQUAL to 20
</p>


<h4>Not Equal with Strings:</h4>


<pre>
-- Select employees NOT named SMITH
SELECT empno, ename, sal
FROM emp
WHERE ename != 'SMITH';
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
    </tr>
    <tr>
        <td>7800</td>
        <td>JONES</td>
        <td>35000</td>
    </tr>
    <tr>
        <td>7900</td>
        <td>BROWN</td>
        <td>28000</td>
    </tr>
</table>


<h3>3. GREATER THAN OPERATOR (>)</h3>


<h4>Description:</h4>


<p>
The > operator checks if the LEFT value is GREATER THAN the RIGHT value.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Operator</strong></td>
        <td>> (greater than)</td>
    </tr>
    <tr>
        <td><strong>Left Operand</strong></td>
        <td>First value (to check if greater)</td>
    </tr>
    <tr>
        <td><strong>Right Operand</strong></td>
        <td>Second value (to compare against)</td>
    </tr>
    <tr>
        <td><strong>Result</strong></td>
        <td>TRUE if left > right, FALSE otherwise</td>
    </tr>
</table>


<h4>Basic Greater Than Examples:</h4>


<pre>
-- Check if left is greater than right
SELECT * FROM dual WHERE 10 > 5;


-- Output: Row returned (TRUE)
</pre>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Expression</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>10 > 5</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td>25 > 20</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td>10 > 10</td>
        <td>FALSE</td>
    </tr>
    <tr>
        <td>5 > 10</td>
        <td>FALSE</td>
    </tr>
</table>


<h4>Greater Than in WHERE - Salary Example:</h4>


<pre>
-- Select employees with salary greater than 30000
SELECT empno, ename, sal, deptno
FROM emp
WHERE sal > 30000;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>deptno</th>
    </tr>
    <tr>
        <td>7800</td>
        <td>JONES</td>
        <td>35000</td>
        <td>10</td>
    </tr>
    <tr>
        <td>7850</td>
        <td>DAVIS</td>
        <td>32000</td>
        <td>10</td>
    </tr>
</table>


<p>
Note: Returns rows where sal is GREATER THAN 30000
</p>


<h4>Greater Than with Dates:</h4>


<pre>
-- Select employees hired after 1982
SELECT empno, ename, hiredate
FROM emp
WHERE hiredate > '31-DEC-1982';
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>hiredate</th>
    </tr>
    <tr>
        <td>7800</td>
        <td>JONES</td>
        <td>01-JAN-1983</td>
    </tr>
</table>


<h3>4. LESS THAN OPERATOR (<)</h3>


<h4>Description:</h4>


<p>
The < operator checks if the LEFT value is LESS THAN the RIGHT value.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Operator</strong></td>
        <td>< (less than)</td>
    </tr>
    <tr>
        <td><strong>Left Operand</strong></td>
        <td>First value (to check if less)</td>
    </tr>
    <tr>
        <td><strong>Right Operand</strong></td>
        <td>Second value (to compare against)</td>
    </tr>
    <tr>
        <td><strong>Result</strong></td>
        <td>TRUE if left < right, FALSE otherwise</td>
    </tr>
</table>


<h4>Basic Less Than Examples:</h4>


<pre>
-- Check if left is less than right
SELECT * FROM dual WHERE 5 < 10;


-- Output: Row returned (TRUE)
</pre>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Expression</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>5 < 10</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td>20 < 25</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td>10 < 10</td>
        <td>FALSE</td>
    </tr>
    <tr>
        <td>10 < 5</td>
        <td>FALSE</td>
    </tr>
</table>


<h4>Less Than in WHERE - Salary Example:</h4>


<pre>
-- Select employees with salary less than 30000
SELECT empno, ename, sal, deptno
FROM emp
WHERE sal < 30000;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>deptno</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>25000</td>
        <td>20</td>
    </tr>
    <tr>
        <td>7900</td>
        <td>BROWN</td>
        <td>28000</td>
        <td>30</td>
    </tr>
</table>


<p>
Note: Returns rows where sal is LESS THAN 30000
</p>


<h4>Less Than for Department Filter:</h4>


<pre>
-- Select employees in departments less than 20
SELECT empno, ename, sal, deptno
FROM emp
WHERE deptno < 20;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>deptno</th>
    </tr>
    <tr>
        <td>7800</td>
        <td>JONES</td>
        <td>35000</td>
        <td>10</td>
    </tr>
</table>


<p>
Note: Returns rows where deptno is LESS THAN 20 (only dept 10)
</p>


<h3>5. GREATER THAN OR EQUAL OPERATOR (>=)</h3>


<h4>Description:</h4>


<p>
The >= operator checks if the LEFT value is GREATER THAN OR EQUAL TO the RIGHT value.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Operator</strong></td>
        <td>>= (greater or equal)</td>
    </tr>
    <tr>
        <td><strong>Left Operand</strong></td>
        <td>First value</td>
    </tr>
    <tr>
        <td><strong>Right Operand</strong></td>
        <td>Second value</td>
    </tr>
    <tr>
        <td><strong>Result</strong></td>
        <td>TRUE if left >= right, FALSE otherwise</td>
    </tr>
</table>


<h4>Basic Greater or Equal Examples:</h4>


<pre>
-- Check if left is greater or equal to right
SELECT * FROM dual WHERE 10 >= 10;


-- Output: Row returned (TRUE)
</pre>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Expression</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>10 >= 10</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td>15 >= 10</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td>5 >= 10</td>
        <td>FALSE</td>
    </tr>
</table>


<h4>Greater or Equal in WHERE:</h4>


<pre>
-- Select employees with salary >= 30000
SELECT empno, ename, sal, deptno
FROM emp
WHERE sal >= 30000;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>deptno</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>30000</td>
        <td>20</td>
    </tr>
    <tr>
        <td>7800</td>
        <td>JONES</td>
        <td>35000</td>
        <td>10</td>
    </tr>
</table>


<p>
Note: Returns rows where sal is GREATER THAN OR EQUAL TO 30000 (includes 30000)
</p>


<h3>6. LESS THAN OR EQUAL OPERATOR (<=)</h3>


<h4>Description:</h4>


<p>
The <= operator checks if the LEFT value is LESS THAN OR EQUAL TO the RIGHT value.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Operator</strong></td>
        <td><= (less or equal)</td>
    </tr>
    <tr>
        <td><strong>Left Operand</strong></td>
        <td>First value</td>
    </tr>
    <tr>
        <td><strong>Right Operand</strong></td>
        <td>Second value</td>
    </tr>
    <tr>
        <td><strong>Result</strong></td>
        <td>TRUE if left <= right, FALSE otherwise</td>
    </tr>
</table>


<h4>Basic Less or Equal Examples:</h4>


<pre>
-- Check if left is less or equal to right
SELECT * FROM dual WHERE 10 <= 10;


-- Output: Row returned (TRUE)
</pre>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Expression</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>10 <= 10</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td>5 <= 10</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td>15 <= 10</td>
        <td>FALSE</td>
    </tr>
</table>


<h4>Less or Equal in WHERE:</h4>


<pre>
-- Select employees with salary <= 30000
SELECT empno, ename, sal, deptno
FROM emp
WHERE sal <= 30000;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>deptno</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>30000</td>
        <td>20</td>
    </tr>
    <tr>
        <td>7900</td>
        <td>BROWN</td>
        <td>28000</td>
        <td>30</td>
    </tr>
</table>


<p>
Note: Returns rows where sal is LESS THAN OR EQUAL TO 30000 (includes 30000)
</p>


<h3>Relational Operators in WHERE Clause</h3>


<h4>Complete Example - Multiple Operators:</h4>


<pre>
-- Use multiple relational operators
SELECT empno, ename, sal, deptno
FROM emp
WHERE sal >= 25000 AND sal <= 35000
      AND deptno != 30;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>deptno</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>30000</td>
        <td>20</td>
    </tr>
    <tr>
        <td>7800</td>
        <td>JONES</td>
        <td>35000</td>
        <td>10</td>
    </tr>
</table>


<p>
Note: sal is between 25000 and 35000, AND deptno is NOT 30
</p>


<h3>Relational Operators in JOIN Conditions</h3>


<h4>JOIN with Equal Operator:</h4>


<pre>
-- Join emp and dept tables using =
SELECT e.empno, e.ename, e.sal, d.deptno, d.dname
FROM emp e
JOIN dept d ON e.deptno = d.deptno;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>deptno</th>
        <th>dname</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>30000</td>
        <td>20</td>
        <td>RESEARCH</td>
    </tr>
    <tr>
        <td>7800</td>
        <td>JONES</td>
        <td>35000</td>
        <td>10</td>
        <td>ACCOUNTING</td>
    </tr>
</table>


<h3>Key Points Summary</h3>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Point</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td><strong>= (Equal)</strong></td>
        <td>Checks if values are equal</td>
    </tr>
    <tr>
        <td><strong>!= or <> (Not Equal)</strong></td>
        <td>Checks if values are not equal</td>
    </tr>
    <tr>
        <td><strong>> (Greater Than)</strong></td>
        <td>Left is greater than right</td>
    </tr>
    <tr>
        <td><strong>< (Less Than)</strong></td>
        <td>Left is less than right</td>
    </tr>
    <tr>
        <td><strong>>= (Greater or Equal)</strong></td>
        <td>Left is greater or equal to right</td>
    </tr>
    <tr>
        <td><strong><= (Less or Equal)</strong></td>
        <td>Left is less or equal to right</td>
    </tr>
    <tr>
        <td><strong>Returns</strong></td>
        <td>TRUE or FALSE</td>
    </tr>
    <tr>
        <td><strong>Use in WHERE</strong></td>
        <td>Filter rows based on conditions</td>
    </tr>
    <tr>
        <td><strong>Use in JOIN</strong></td>
        <td>Match rows between tables</td>
    </tr>
    <tr>
        <td><strong>Combine with AND/OR</strong></td>
        <td>Create complex conditions</td>
    </tr>
</table>


<h3>Class Summary</h3>


<p>
In today's lecture, we learned about RELATIONAL OPERATORS in Oracle:
</p>


<ul>
    <li><strong>= (Equal):</strong> Checks equality (empno = 7788)</li>
    <li><strong>!= or <> (Not Equal):</strong> Checks not equal (deptno != 20)</li>
    <li><strong>> (Greater Than):</strong> Left greater than right (sal > 30000)</li>
    <li><strong>< (Less Than):</strong> Left less than right (sal < 30000)</li>
    <li><strong>>= (Greater or Equal):</strong> Left >= right (sal >= 30000)</li>
    <li><strong><= (Less or Equal):</strong> Left <= right (sal <= 30000)</li>
    <li><strong>Returns:</strong> TRUE or FALSE</li>
    <li><strong>Use in WHERE:</strong> Filter rows (WHERE sal > 30000)</li>
    <li><strong>Use in JOIN:</strong> Match tables (ON emp.deptno = dept.deptno)</li>
    <li><strong>Combine:</strong> Use AND/OR for multiple conditions</li>
</ul>


<p>
Remember: = for equal, != or <> for not equal, > for greater, < for less, >= and <= for inclusive ranges!
</p>


<p>
<strong>Homework:</strong>
</p>
<ul>
    <li>1. Create SELECT with = operator (find employee by empno)</li>
    <li>2. Create SELECT with != operator (exclude department)</li>
    <li>3. Create SELECT with > operator (find high salary employees)</li>
    <li>4. Create SELECT with < operator (find low salary employees)</li>
    <li>5. Create SELECT with >= and <= (find salary range)</li>
    <li>6. Create JOIN using = operator</li>
    <li>7. Combine multiple relational operators with AND/OR</li>
</ul>


<p>
<strong>Next Topic:</strong> Logical Operators in Oracle (AND, OR, NOT)
</p>


`;

let oracleLogicalOperatorsContent = `


<h3>LOGICAL OPERATORS in Oracle</h3>


<p>
Good morning students!
Today we will learn about LOGICAL OPERATORS in Oracle Database. Logical operators combine multiple conditions and determine the overall truth value. They are essential for creating complex WHERE clauses and filtering data with multiple criteria.
</p>


<p>
<strong>What We Will Cover:</strong>
</p>
<ul>
    <li>Introduction to Logical Operators</li>
    <li>List of Logical Operators in Oracle</li>
    <li>AND OPERATOR</li>
    <li>OR OPERATOR</li>
    <li>NOT OPERATOR</li>
    <li>Operator Precedence</li>
    <li>Logical Operators in WHERE Clause</li>
    <li>Combining with Relational Operators</li>
    <li>Complete practical examples</li>
</ul>


<h3>Introduction to Logical Operators</h3>


<p>
Logical operators combine two or more conditions and return TRUE or FALSE based on the logic.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Operator Type</th>
        <th>Purpose</th>
        <th>Returns</th>
    </tr>
    <tr>
        <td><strong>Logical</strong></td>
        <td>Combine conditions</td>
        <td>TRUE or FALSE</td>
    </tr>
    <tr>
        <td><strong>Relational</strong></td>
        <td>Compare values</td>
        <td>TRUE or FALSE</td>
    </tr>
    <tr>
        <td><strong>Arithmetic</strong></td>
        <td>Math operations</td>
        <td>NUMBER</td>
    </tr>
</table>


<h3>List of Logical Operators in Oracle</h3>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Operator</th>
        <th>Name</th>
        <th>Description</th>
        <th>Example</th>
        <th>Result</th>
    </tr>
    <tr>
        <td><strong>AND</strong></td>
        <td>Logical AND</td>
        <td>TRUE if BOTH conditions are TRUE</td>
        <td>sal > 30000 AND deptno = 10</td>
        <td>TRUE or FALSE</td>
    </tr>
    <tr>
        <td><strong>OR</strong></td>
        <td>Logical OR</td>
        <td>TRUE if AT LEAST ONE condition is TRUE</td>
        <td>sal > 30000 OR deptno = 10</td>
        <td>TRUE or FALSE</td>
    </tr>
    <tr>
        <td><strong>NOT</strong></td>
        <td>Logical NOT</td>
        <td>Reverses the condition (TRUE becomes FALSE)</td>
        <td>NOT deptno = 10</td>
        <td>TRUE or FALSE</td>
    </tr>
</table>


<h3>1. AND OPERATOR</h3>


<h4>Description:</h4>


<p>
The AND operator returns TRUE only if BOTH conditions are TRUE.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Condition 1</th>
        <th>Condition 2</th>
        <th>Result (AND)</th>
    </tr>
    <tr>
        <td>TRUE</td>
        <td>TRUE</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td>TRUE</td>
        <td>FALSE</td>
        <td>FALSE</td>
    </tr>
    <tr>
        <td>FALSE</td>
        <td>TRUE</td>
        <td>FALSE</td>
    </tr>
    <tr>
        <td>FALSE</td>
        <td>FALSE</td>
        <td>FALSE</td>
    </tr>
</table>


<h4>Basic AND Examples:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Condition 1</th>
        <th>Condition 2</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>10 > 5 (TRUE)</td>
        <td>20 > 15 (TRUE)</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td>10 > 5 (TRUE)</td>
        <td>10 > 15 (FALSE)</td>
        <td>FALSE</td>
    </tr>
    <tr>
        <td>5 > 10 (FALSE)</td>
        <td>20 > 15 (TRUE)</td>
        <td>FALSE</td>
    </tr>
</table>


<h4>AND in WHERE Clause - SELECT:</h4>


<pre>
-- Select employees with salary > 30000 AND in department 10
SELECT empno, ename, sal, deptno
FROM emp
WHERE sal > 30000 AND deptno = 10;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>deptno</th>
    </tr>
    <tr>
        <td>7800</td>
        <td>JONES</td>
        <td>35000</td>
        <td>10</td>
    </tr>
</table>


<p>
Note: Both conditions must be TRUE (sal > 30000 AND deptno = 10)
</p>


<h4>AND with Multiple Conditions:</h4>


<pre>
-- Select employees with salary between 25000 and 35000 in department 20
SELECT empno, ename, sal, deptno
FROM emp
WHERE sal >= 25000 AND sal <= 35000 AND deptno = 20;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>deptno</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>30000</td>
        <td>20</td>
    </tr>
</table>


<p>
Note: All THREE conditions must be TRUE
</p>


<h4>AND in UPDATE:</h4>


<pre>
-- Update salary for SMITH in department 20
UPDATE emp
SET sal = 40000
WHERE ename = 'SMITH' AND deptno = 20;
</pre>


<p>
Note: UPDATE only if BOTH conditions are TRUE
</p>


<h3>2. OR OPERATOR</h3>


<h4>Description:</h4>


<p>
The OR operator returns TRUE if AT LEAST ONE condition is TRUE.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Condition 1</th>
        <th>Condition 2</th>
        <th>Result (OR)</th>
    </tr>
    <tr>
        <td>TRUE</td>
        <td>TRUE</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td>TRUE</td>
        <td>FALSE</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td>FALSE</td>
        <td>TRUE</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td>FALSE</td>
        <td>FALSE</td>
        <td>FALSE</td>
    </tr>
</table>


<h4>Basic OR Examples:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Condition 1</th>
        <th>Condition 2</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>10 > 5 (TRUE)</td>
        <td>20 > 15 (TRUE)</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td>10 > 5 (TRUE)</td>
        <td>10 > 15 (FALSE)</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td>5 > 10 (FALSE)</td>
        <td>20 > 15 (TRUE)</td>
        <td>TRUE</td>
    </tr>
    <tr>
        <td>5 > 10 (FALSE)</td>
        <td>10 > 15 (FALSE)</td>
        <td>FALSE</td>
    </tr>
</table>


<h4>OR in WHERE Clause - SELECT:</h4>


<pre>
-- Select employees with salary > 35000 OR in department 10
SELECT empno, ename, sal, deptno
FROM emp
WHERE sal > 35000 OR deptno = 10;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>deptno</th>
    </tr>
    <tr>
        <td>7800</td>
        <td>JONES</td>
        <td>35000</td>
        <td>10</td>
    </tr>
    <tr>
        <td>7850</td>
        <td>DAVIS</td>
        <td>38000</td>
        <td>30</td>
    </tr>
</table>


<p>
Note: Returns rows where EITHER condition is TRUE (sal > 35000 OR deptno = 10)
</p>


<h4>OR with Names:</h4>


<pre>
-- Select employees named SMITH or JONES
SELECT empno, ename, sal
FROM emp
WHERE ename = 'SMITH' OR ename = 'JONES';
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>30000</td>
    </tr>
    <tr>
        <td>7800</td>
        <td>JONES</td>
        <td>35000</td>
    </tr>
</table>


<h4>OR in UPDATE:</h4>


<pre>
-- Update salary for SMITH or JONES
UPDATE emp
SET sal = sal * 1.10
WHERE ename = 'SMITH' OR ename = 'JONES';
</pre>


<p>
Note: UPDATE if EITHER condition is TRUE
</p>


<h3>3. NOT OPERATOR</h3>


<h4>Description:</h4>


<p>
The NOT operator reverses (negates) the condition. TRUE becomes FALSE, FALSE becomes TRUE.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Condition</th>
        <th>Result (NOT)</th>
    </tr>
    <tr>
        <td>TRUE</td>
        <td>FALSE</td>
    </tr>
    <tr>
        <td>FALSE</td>
        <td>TRUE</td>
    </tr>
</table>


<h4>Basic NOT Examples:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Condition</th>
        <th>NOT Condition</th>
    </tr>
    <tr>
        <td>10 = 10 (TRUE)</td>
        <td>NOT 10 = 10 (FALSE)</td>
    </tr>
    <tr>
        <td>10 = 5 (FALSE)</td>
        <td>NOT 10 = 5 (TRUE)</td>
    </tr>
    <tr>
        <td>deptno = 10 (TRUE)</td>
        <td>NOT deptno = 10 (FALSE)</td>
    </tr>
</table>


<h4>NOT in WHERE Clause - SELECT:</h4>


<pre>
-- Select employees NOT in department 10
SELECT empno, ename, sal, deptno
FROM emp
WHERE NOT deptno = 10;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>deptno</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>30000</td>
        <td>20</td>
    </tr>
    <tr>
        <td>7900</td>
        <td>BROWN</td>
        <td>28000</td>
        <td>30</td>
    </tr>
</table>


<p>
Note: Returns rows where deptno is NOT EQUAL to 10
</p>


<h4>NOT Equivalent to Not Equal (!= or <>):</h4>


<pre>
-- These two are equivalent:

-- Using NOT
SELECT * FROM emp WHERE NOT deptno = 10;

-- Using not equal operator
SELECT * FROM emp WHERE deptno != 10;
SELECT * FROM emp WHERE deptno <> 10;
</pre>


<p>
Note: NOT condition1 is same as condition1 != value
</p>


<h4>NOT with Multiple Conditions:</h4>


<pre>
-- Select employees NOT (in department 10 AND salary > 30000)
SELECT empno, ename, sal, deptno
FROM emp
WHERE NOT (deptno = 10 AND sal > 30000);
</pre>


<h3>Combining AND, OR, and NOT</h3>


<h4>Complete Example - Complex WHERE:</h4>


<pre>
-- Complex condition with AND, OR, NOT
SELECT empno, ename, sal, deptno
FROM emp
WHERE (sal > 30000 AND deptno = 10) 
      OR (sal < 25000 AND deptno != 20);
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>deptno</th>
    </tr>
    <tr>
        <td>7800</td>
        <td>JONES</td>
        <td>35000</td>
        <td>10</td>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>23000</td>
        <td>30</td>
    </tr>
</table>


<p>
Note: First group (sal > 30000 AND deptno = 10) OR Second group (sal < 25000 AND deptno != 20)
</p>


<h4>Example with NOT:</h4>


<pre>
-- NOT with AND
SELECT empno, ename, sal, deptno
FROM emp
WHERE deptno != 10 AND sal > 25000;

-- Equivalent to:
SELECT empno, ename, sal, deptno
FROM emp
WHERE NOT deptno = 10 AND sal > 25000;
</pre>


<h3>Operator Precedence</h3>


<p>
Oracle evaluates operators in this order (highest to lowest):
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Level</th>
        <th>Operator</th>
        <th>Order</th>
    </tr>
    <tr>
        <td>1 (Highest)</td>
        <td>NOT</td>
        <td>Evaluated first</td>
    </tr>
    <tr>
        <td>2</td>
        <td>AND</td>
        <td>Evaluated second</td>
    </tr>
    <tr>
        <td>3 (Lowest)</td>
        <td>OR</td>
        <td>Evaluated last</td>
    </tr>
</table>


<h4>Precedence Example:</h4>


<pre>
-- Without parentheses:
WHERE sal > 30000 OR deptno = 10 AND sal < 35000

-- Oracle evaluates as:
WHERE sal > 30000 OR (deptno = 10 AND sal < 35000)
</pre>


<h4>Using Parentheses for Clarity:</h4>


<pre>
-- With parentheses (explicit):
WHERE (sal > 30000 OR deptno = 10) AND sal < 35000

-- This evaluates differently!
</pre>


<p>
Note: Use parentheses to control evaluation order and make code clear
</p>


<h3>Logical Operators in WHERE Clause</h3>


<h4>Complete Example - Multiple Operators:</h4>


<pre>
-- Find high salary employees NOT in department 30
SELECT empno, ename, sal, deptno
FROM emp
WHERE sal > 30000 AND deptno != 30;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>deptno</th>
    </tr>
    <tr>
        <td>7800</td>
        <td>JONES</td>
        <td>35000</td>
        <td>10</td>
    </tr>
</table>


<h3>Combining with Relational Operators</h3>


<h4>Example - Range with AND:</h4>


<pre>
-- Salary between 25000 and 35000 (inclusive)
SELECT empno, ename, sal
FROM emp
WHERE sal >= 25000 AND sal <= 35000;
</pre>


<h4>Example - Multiple Values with OR:</h4>


<pre>
-- Employees in department 10 OR 20
SELECT empno, ename, sal, deptno
FROM emp
WHERE deptno = 10 OR deptno = 20;
</pre>


<p>
Note: Equivalent to WHERE deptno IN (10, 20)
</p>


<h4>Example - Exclude with NOT:</h4>


<pre>
-- Employees NOT named SMITH
SELECT empno, ename, sal
FROM emp
WHERE NOT ename = 'SMITH';

-- Equivalent to:
SELECT empno, ename, sal
FROM emp
WHERE ename != 'SMITH';
</pre>


<h3>Key Points Summary</h3>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Point</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td><strong>AND</strong></td>
        <td>TRUE if BOTH conditions are TRUE</td>
    </tr>
    <tr>
        <td><strong>OR</strong></td>
        <td>TRUE if AT LEAST ONE condition is TRUE</td>
    </tr>
    <tr>
        <td><strong>NOT</strong></td>
        <td>Reverses condition (TRUE becomes FALSE)</td>
    </tr>
    <tr>
        <td><strong>Precedence</strong></td>
        <td>NOT first, AND second, OR last</td>
    </tr>
    <tr>
        <td><strong>Parentheses</strong></td>
        <td>Use to control evaluation order</td>
    </tr>
    <tr>
        <td><strong>Use in WHERE</strong></td>
        <td>Create complex filter conditions</td>
    </tr>
    <tr>
        <td><strong>Combine with relational</strong></td>
        <td>AND/OR with =, >, <, etc.</td>
    </tr>
    <tr>
        <td><strong>NOT equivalent</strong></td>
        <td>NOT condition = NOT EQUAL (!= or <>)</td>
    </tr>
    <tr>
        <td><strong>Returns</strong></td>
        <td>TRUE or FALSE</td>
    </tr>
    <tr>
        <td><strong>Multiple AND</strong></td>
        <td>All conditions must be TRUE</td>
    </tr>
</table>


<h3>Class Summary</h3>


<p>
In today's lecture, we learned about LOGICAL OPERATORS in Oracle:
</p>


<ul>
    <li><strong>AND:</strong> TRUE if BOTH conditions TRUE (sal > 30000 AND deptno = 10)</li>
    <li><strong>OR:</strong> TRUE if ANY condition TRUE (deptno = 10 OR deptno = 20)</li>
    <li><strong>NOT:</strong> Reverses condition (NOT deptno = 10 equals deptno != 10)</li>
    <li><strong>Precedence:</</strong> NOT first, AND second, OR last</li>
    <li><strong>Parentheses:</strong> Control evaluation order</li>
    <li><strong>Use in WHERE:</strong> Complex filtering (WHERE sal > 30000 AND deptno != 30)</li>
    <li><strong>Combine:</strong> AND/OR with relational operators (=, >, <)</li>
    <li><strong>Multiple AND:</strong> All must be TRUE</li>
    <li><strong>Any OR:</strong> At least one must be TRUE</li>
    <li><strong>Returns:</strong> TRUE or FALSE</li>
</ul>


<p>
Remember: AND for both true, OR for any true, NOT to reverse! Use parentheses for complex conditions!
</p>


<p>
<strong>Homework:</strong>
</p>
<ul>
    <li>1. Create SELECT with AND (salary range AND specific department)</li>
    <li>2. Create SELECT with OR (multiple departments)</li>
    <li>3. Create SELECT with NOT (exclude specific department)</li>
    <li>4. Combine AND and OR with parentheses</li>
    <li>5. Create UPDATE with AND condition</li>
    <li>6. Create DELETE with OR condition</li>
    <li>7. Test operator precedence (NOT, AND, OR)</li>
</ul>


<p>
<strong>Next Topic:</strong> String Operators in Oracle (CONCATENATION ||)
</p>


`;

let oracleSetOperatorsContent = `


<h3>SET OPERATORS in Oracle</h3>


<p>
Good morning students!
Today we will learn about SET OPERATORS in Oracle Database. Set operators combine the results of two or more SELECT queries into a single result set. They work vertically (combining rows) unlike JOINs which work horizontally (combining columns).
</p>


<p>
<strong>What We Will Cover:</strong>
</p>
<ul>
    <li>Introduction to Set Operators</li>
    <li>List of Set Operators in Oracle</li>
    <li>UNION Operator</li>
    <li>UNION ALL Operator</li>
    <li>INTERSECT Operator</li>
    <li>MINUS Operator (Oracle's EXCEPT)</li>
    <li>Rules for Using Set Operators</li>
    <li>Set Operators with Examples</li>
    <li>Complete practical examples</li>
</ul>


<h3>Introduction to Set Operators</h3>


<p>
Set operators combine rows from multiple queries into a single result set.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Feature</th>
        <th>Set Operators</th>
        <th>JOINs</th>
    </tr>
    <tr>
        <td><strong>Direction</strong></td>
        <td>Vertical (top to bottom)</td>
        <td>Horizontal (left to right)</td>
    </tr>
    <tr>
        <td><strong>Combines</strong></td>
        <td>Rows</td>
        <td>Columns</td>
    </tr>
    <tr>
        <td><strong>Number of Queries</strong></td>
        <td>Two or more</td>
        <td>Two or more tables</td>
    </tr>
    <tr>
        <td><strong>Result</strong></td>
        <td>Single result set</td>
        <td>Single result set</td>
    </tr>
</table>


<h3>List of Set Operators in Oracle</h3>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Operator</th>
        <th>Returns</th>
        <th>Duplicates</th>
        <th>Example</th>
    </tr>
    <tr>
        <td><strong>UNION</strong></td>
        <td>All distinct rows from both queries</td>
        <td>Removes duplicates</td>
        <td>Query1 UNION Query2</td>
    </tr>
    <tr>
        <td><strong>UNION ALL</strong></td>
        <td>All rows from both queries</td>
        <td>Includes duplicates</td>
        <td>Query1 UNION ALL Query2</td>
    </tr>
    <tr>
        <td><strong>INTERSECT</strong></td>
        <td>Only common rows from both queries</td>
        <td>Removes duplicates</td>
        <td>Query1 INTERSECT Query2</td>
    </tr>
    <tr>
        <td><strong>MINUS</strong></td>
        <td>Rows from first query NOT in second</td>
        <td>Removes duplicates</td>
        <td>Query1 MINUS Query2</td>
    </tr>
</table>


<p>
Note: Oracle uses MINUS instead of EXCEPT (used in SQL Server, PostgreSQL)
</p>


<h3>1. UNION Operator</h3>


<h4>Description:</h4>


<p>
UNION combines results from both queries and REMOVES duplicate rows.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Operator</strong></td>
        <td>UNION</td>
    </tr>
    <tr>
        <td><strong>Returns</strong></td>
        <td>All distinct rows from both queries</td>
    </tr>
    <tr>
        <td><strong>Duplicates</strong></td>
        <td>Removes duplicate rows</td>
    </tr>
    <tr>
        <td><strong>Sorting</strong></td>
        <td>Automatically sorts result</td>
    </tr>
</table>


<h4>UNION Syntax:</h4>


<pre>
SELECT column1, column2 FROM table1
UNION
SELECT column1, column2 FROM table2;
</pre>


<h4>UNION Example - Combine Departments:</h4>


<pre>
-- Get all distinct department numbers from emp and dept
SELECT deptno FROM emp
UNION
SELECT deptno FROM dept;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>deptno</th>
    </tr>
    <tr>
        <td>10</td>
    </tr>
    <tr>
        <td>20</td>
    </tr>
    <tr>
        <td>30</td>
    </tr>
</table>


<p>
Note: If deptno 10 exists in both tables, it appears only once (duplicates removed)
</p>


<h4>UNION Example - Employee Names:</h4>


<pre>
-- Get all distinct employee names
SELECT ename FROM emp WHERE deptno = 10
UNION
SELECT ename FROM emp WHERE deptno = 20;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>ename</th>
    </tr>
    <tr>
        <td>JONES</td>
    </tr>
    <tr>
        <td>SMITH</td>
    </tr>
</table>


<h3>2. UNION ALL Operator</h3>


<h4>Description:</h4>


<p>
UNION ALL combines results from both queries and INCLUDES all duplicate rows.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Operator</strong></td>
        <td>UNION ALL</td>
    </tr>
    <tr>
        <td><strong>Returns</strong></td>
        <td>All rows from both queries</td>
    </tr>
    <tr>
        <td><strong>Duplicates</strong></td>
        <td>Includes duplicate rows</td>
    </tr>
    <tr>
        <td><strong>Sorting</strong></td>
        <td>No automatic sorting</td>
    </tr>
</table>


<h4>UNION ALL Syntax:</h4>


<pre>
SELECT column1, column2 FROM table1
UNION ALL
SELECT column1, column2 FROM table2;
</pre>


<h4>UNION ALL Example - Compare with UNION:</h4>


<pre>
-- Using UNION (removes duplicates)
SELECT deptno FROM emp
UNION
SELECT deptno FROM dept;


-- Using UNION ALL (includes duplicates)
SELECT deptno FROM emp
UNION ALL
SELECT deptno FROM dept;
</pre>


<h4>Output Comparison:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>UNION</th>
        <th>UNION ALL</th>
    </tr>
    <tr>
        <td>10</td>
        <td>10</td>
    </tr>
    <tr>
        <td>20</td>
        <td>10</td>
    </tr>
    <tr>
        <td>30</td>
        <td>20</td>
    </tr>
    <tr>
        <td>(3 rows)</td>
        <td>20</td>
    </tr>
    <tr>
        <td></td>
        <td>30</td>
    </tr>
    <tr>
        <td></td>
        <td>(5 rows)</td>
    </tr>
</table>


<p>
Note: UNION ALL includes duplicates, so more rows returned
</p>


<h4>UNION ALL - Faster Performance:</h4>


<pre>
-- UNION ALL is faster (no duplicate checking)
SELECT empno, ename FROM emp WHERE deptno = 10
UNION ALL
SELECT empno, ename FROM emp WHERE deptno = 20;
</pre>


<h3>3. INTERSECT Operator</h3>


<h4>Description:</h4>


<p>
INTERSECT returns only rows that appear in BOTH queries (common rows).
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Operator</strong></td>
        <td>INTERSECT</td>
    </tr>
    <tr>
        <td><strong>Returns</strong></td>
        <td>Common rows from both queries</td>
    </tr>
    <tr>
        <td><strong>Duplicates</strong></td>
        <td>Removes duplicates</td>
    </tr>
    <tr>
        <td><strong>Sorting</strong></td>
        <td>Automatically sorts result</td>
    </tr>
</table>


<h4>INTERSECT Syntax:</h4>


<pre>
SELECT column1, column2 FROM table1
INTERSECT
SELECT column1, column2 FROM table2;
</pre>


<h4>INTERSECT Example - Common Departments:</h4>


<pre>
-- Get department numbers common to both emp and dept
SELECT deptno FROM emp
INTERSECT
SELECT deptno FROM dept;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>deptno</th>
    </tr>
    <tr>
        <td>10</td>
    </tr>
    <tr>
        <td>20</td>
    </tr>
    <tr>
        <td>30</td>
    </tr>
</table>


<p>
Note: Only deptnos that exist in BOTH tables are returned
</p>


<h4>INTERSECT Example - Employee Names:</h4>


<pre>
-- Get employee names in both department 10 and 20
SELECT ename FROM emp WHERE deptno = 10
INTERSECT
SELECT ename FROM emp WHERE deptno = 20;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>ename</th>
    </tr>
    <tr>
        <td>(no rows)</td>
    </tr>
</table>


<p>
Note: No employee names are common to both departments
</p>


<h3>4. MINUS Operator (Oracle's EXCEPT)</h3>


<h4>Description:</h4>


<p>
MINUS returns rows from the FIRST query that do NOT appear in the SECOND query.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Operator</strong></td>
        <td>MINUS</td>
    </tr>
    <tr>
        <td><strong>Returns</strong></td>
        <td>Rows in first query NOT in second</td>
    </tr>
    <tr>
        <td><strong>Duplicates</strong></td>
        <td>Removes duplicates</td>
    </tr>
    <tr>
        <td><strong>Sorting</strong></td>
        <td>Automatically sorts result</td>
    </tr>
</table>


<p>
Note: Other databases use EXCEPT instead of MINUS
</p>


<h4>MINUS Syntax:</h4>


<pre>
SELECT column1, column2 FROM table1
MINUS
SELECT column1, column2 FROM table2;
</pre>


<h4>MINUS Example - Departments Without Employees:</h4>


<pre>
-- Get department numbers in dept NOT in emp
SELECT deptno FROM dept
MINUS
SELECT deptno FROM emp;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>deptno</th>
    </tr>
    <tr>
        <td>40</td>
    </tr>
</table>


<p>
Note: Dept 40 exists in dept table but has no employees in emp table
</p>


<h4>MINUS Example - Employees in Specific Dept:</h4>


<pre>
-- Get employees in department 10 NOT in department 20
SELECT ename FROM emp WHERE deptno = 10
MINUS
SELECT ename FROM emp WHERE deptno = 20;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>ename</th>
    </tr>
    <tr>
        <td>JONES</td>
    </tr>
</table>


<p>
Note: Returns names from dept 10 that are NOT in dept 20
</p>


<h3>Rules for Using Set Operators</h3>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Rule</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>1. Same Columns</strong></td>
        <td>Both SELECTs must have same number of columns</td>
    </tr>
    <tr>
        <td><strong>2. Same Order</strong></td>
        <td>Columns must be in the same order</td>
    </tr>
    <tr>
        <td><strong>3. Compatible Types</strong></td>
        <td>Corresponding columns must have compatible data types</td>
    </tr>
    <tr>
        <td><strong>4. Column Names</strong></td>
        <td>Result uses column names from FIRST query</td>
    </tr>
    <tr>
        <td><strong>5. ORDER BY</strong></td>
        <td>Use ORDER BY after the last query only</td>
    </tr>
    <tr>
        <td><strong>6. Parentheses</strong></td>
        <td>Use parentheses for complex conditions</td>
    </tr>
</table>


<h4>Rule 1 - Same Number of Columns:</h4>


<pre>
-- CORRECT: Both have 2 columns
SELECT empno, ename FROM emp WHERE deptno = 10
UNION
SELECT empno, ename FROM emp WHERE deptno = 20;


-- WRONG: Different number of columns
SELECT empno, ename FROM emp WHERE deptno = 10
UNION
SELECT empno FROM emp WHERE deptno = 20;
-- Error: Column count mismatch
</pre>


<h4>Rule 3 - Compatible Data Types:</h4>


<pre>
-- CORRECT: Both are NUMBER
SELECT deptno FROM emp
UNION
SELECT deptno FROM dept;


-- WRONG: NUMBER vs VARCHAR2
SELECT deptno FROM emp
UNION
SELECT dname FROM dept;
-- Error: Type mismatch
</pre>


<h4>Rule 4 - Column Names from First Query:</h4>


<pre>
SELECT empno AS employee_id, ename AS name FROM emp WHERE deptno = 10
UNION
SELECT empno, ename FROM emp WHERE deptno = 20;

-- Result columns: employee_id, name (from FIRST query)
</pre>


<h4>Rule 5 - ORDER BY After Last Query:</h4>


<pre>
-- CORRECT
SELECT empno, ename FROM emp WHERE deptno = 10
UNION
SELECT empno, ename FROM emp WHERE deptno = 20
ORDER BY ename;


-- WRONG
SELECT empno, ename FROM emp WHERE deptno = 10
ORDER BY ename
UNION
SELECT empno, ename FROM emp WHERE deptno = 20;
-- Error: ORDER BY only at end
</pre>


<h3>Set Operators with Examples</h3>


<h4>Example 1 - UNION:</h4>


<pre>
-- Combine employees from dept 10 and 20 (no duplicates)
SELECT empno, ename, sal FROM emp WHERE deptno = 10
UNION
SELECT empno, ename, sal FROM emp WHERE deptno = 20;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
    </tr>
    <tr>
        <td>7800</td>
        <td>JONES</td>
        <td>35000</td>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>30000</td>
    </tr>
</table>


<h4>Example 2 - UNION ALL:</h4>


<pre>
-- Combine all employees (including duplicates if any)
SELECT empno, ename, sal FROM emp WHERE deptno = 10
UNION ALL
SELECT empno, ename, sal FROM emp WHERE deptno = 20;
</pre>


<h4>Example 3 - INTERSECT:</h4>


<pre>
-- Get employees with salary > 30000 in dept 10 AND dept 20
SELECT ename FROM emp WHERE deptno = 10 AND sal > 30000
INTERSECT
SELECT ename FROM emp WHERE deptno = 20 AND sal > 30000;
</pre>


<h4>Example 4 - MINUS:</h4>


<pre>
-- Get employees in dept 10 NOT in dept 20
SELECT ename FROM emp WHERE deptno = 10
MINUS
SELECT ename FROM emp WHERE deptno = 20;
</pre>


<h3>Venn Diagram Visualization</h3>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Operator</th>
        <th>Venn Diagram</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>UNION</strong></td>
        <td>Both circles combined</td>
        <td>All rows from both queries</td>
    </tr>
    <tr>
        <td><strong>UNION ALL</strong></td>
        <td>Both circles (with overlap)</td>
        <td>All rows including duplicates</td>
    </tr>
    <tr>
        <td><strong>INTERSECT</strong></td>
        <td>Overlapping area only</td>
        <td>Common rows only</td>
    </tr>
    <tr>
        <td><strong>MINUS</strong></td>
        <td>First circle minus overlap</td>
        <td>First query rows NOT in second</td>
    </tr>
</table>


<h3>Key Points Summary</h3>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Point</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td><strong>UNION</strong></td>
        <td>All distinct rows, removes duplicates</td>
    </tr>
    <tr>
        <td><strong>UNION ALL</strong></td>
        <td>All rows, includes duplicates, faster</td>
    </tr>
    <tr>
        <td><strong>INTERSECT</strong></td>
        <td>Common rows only</td>
    </tr>
    <tr>
        <td><strong>MINUS</strong></td>
        <td>Rows in first NOT in second</td>
    </tr>
    <tr>
        <td><strong>Direction</strong></td>
        <td>Vertical (rows), not horizontal (columns)</td>
    </tr>
    <tr>
        <td><strong>Same columns</strong></td>
        <td>Both SELECTs must have same column count</td>
    </tr>
    <tr>
        <td><strong>Compatible types</strong></td>
        <td>Corresponding columns must match types</td>
    </tr>
    <tr>
        <td><strong>Column names</strong></td>
        <td>From FIRST query only</td>
    </tr>
    <tr>
        <td><strong>ORDER BY</strong></td>
        <td>Only at the end, after last query</td>
    </tr>
    <tr>
        <td><strong>UNION ALL faster</strong></td>
        <td>No duplicate checking needed</td>
    </tr>
</table>


<h3>Class Summary</h3>


<p>
In today's lecture, we learned about SET OPERATORS in Oracle:
</p>


<ul>
    <li><strong>UNION:</strong> All distinct rows, removes duplicates (deptno FROM emp UNION deptno FROM dept)</li>
    <li><strong>UNION ALL:</strong> All rows including duplicates, faster performance</li>
    <li><strong>INTERSECT:</strong> Common rows only (rows in both queries)</li>
    <li><strong>MINUS:</strong> Rows in first query NOT in second (Oracle's EXCEPT)</li>
    <li><strong>Vertical:</strong> Combines rows (not columns like JOINs)</li>
    <li><strong>Same columns:</strong> Both SELECTs must have same number of columns</li>
    <li><strong>Compatible types:</strong> Corresponding columns must have matching data types</li>
    <li><strong>Column names:</strong> From first query only</li>
    <li><strong>ORDER BY:</strong> Only at the end after last query</li>
    <li><strong>UNION ALL faster:</strong> No duplicate checking</li>
</ul>


<p>
Remember: UNION for distinct, UNION ALL for all rows (faster), INTERSECT for common, MINUS for exclusion!
</p>


<p>
<strong>Homework:</strong>
</p>
<ul>
    <li>1. Create UNION to combine employees from two departments</li>
    <li>2. Create UNION ALL and compare row count with UNION</li>
    <li>3. Create INTERSECT to find common employees</li>
    <li>4. Create MINUS to find employees in one dept NOT another</li>
    <li>5. Test rule: same number of columns requirement</li>
    <li>6. Test rule: compatible data types requirement</li>
    <li>7. Add ORDER BY at the end of UNION query</li>
</ul>


<p>
<strong>Next Topic:</strong> String Operators in Oracle (CONCATENATION ||)
</p>


`;

let oracleSpecialOperatorsContent = `


<h3>SPECIAL OPERATORS in Oracle</h3>


<p>
Good morning students!
Today we will learn about SPECIAL OPERATORS in Oracle Database. Special operators handle unique operations like NULL testing, pattern matching, set membership, and existence checks. They extend Oracle's capabilities beyond basic arithmetic, relational, logical, and set operators.
</p>


<p>
<strong>What We Will Cover:</strong>
</p>
<ul>
    <li>Introduction to Special Operators</li>
    <li>List of Special Operators in Oracle</li>
    <li>IS NULL Operator</li>
    <li>IS NOT NULL Operator</li>
    <li>LIKE Operator</li>
    <li>BETWEEN Operator</li>
    <li>IN Operator</li>
    <li>EXISTS Operator</li>
    <li>Concatenation Operator (||)</li>
    <li>SPECIAL OPERATORS in WHERE Clause</li>
    <li>Complete practical examples</li>
</ul>


<h3>Introduction to Special Operators</h3>


<p>
Special operators handle unique conditions that cannot be expressed with standard operators.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Operator Type</th>
        <th>Purpose</th>
        <th>Examples</th>
    </tr>
    <tr>
        <td><strong>Special</strong></td>
        <td>Unique conditions (NULL, pattern, range, set)</td>
        <td>IS NULL, LIKE, BETWEEN, IN</td>
    </tr>
    <tr>
        <td><strong>Relational</strong></td>
        <td>Compare values</td>
        <td>=, >, <, !=</td>
    </tr>
    <tr>
        <td><strong>Logical</strong></td>
        <td>Combine conditions</td>
        <td>AND, OR, NOT</td>
    </tr>
    <tr>
        <td><strong>Arithmetic</strong></td>
        <td>Math operations</td>
        <td>+, -, *, /</td>
    </tr>
</table>


<h3>List of Special Operators in Oracle</h3>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Operator</th>
        <th>Name</th>
        <th>Description</th>
        <th>Example</th>
        <th>Returns</th>
    </tr>
    <tr>
        <td><strong>IS NULL</strong></td>
        <td>Null Test</td>
        <td>Checks if value is NULL</td>
        <td>comm IS NULL</td>
        <td>TRUE or FALSE</td>
    </tr>
    <tr>
        <td><strong>IS NOT NULL</strong></td>
        <td>Not Null Test</td>
        <td>Checks if value is NOT NULL</td>
        <td>comm IS NOT NULL</td>
        <td>TRUE or FALSE</td>
    </tr>
    <tr>
        <td><strong>LIKE</strong></td>
        <td>Pattern Match</td>
        <td>Matches string pattern</td>
        <td>ename LIKE 'S%'</td>
        <td>TRUE or FALSE</td>
    </tr>
    <tr>
        <td><strong>BETWEEN</strong></td>
        <td>Range Test</td>
        <td>Checks if value in range</td>
        <td>sal BETWEEN 25000 AND 35000</td>
        <td>TRUE or FALSE</td>
    </tr>
    <tr>
        <td><strong>IN</strong></td>
        <td>Set Membership</td>
        <td>Checks if value in list</td>
        <td>deptno IN (10, 20)</td>
        <td>TRUE or FALSE</td>
    </tr>
    <tr>
        <td><strong>EXISTS</strong></td>
        <td>Subquery Test</td>
        <td>Checks if subquery returns rows</td>
        <td>EXISTS (SELECT * FROM...)</td>
        <td>TRUE or FALSE</td>
    </tr>
    <tr>
        <td><strong>||</strong></td>
        <td>Concatenation</td>
        <td>Combines strings</td>
        <td>ename || ' - ' || job</td>
        <td>STRING</td>
    </tr>
</table>


<h3>1. IS NULL Operator</h3>


<h4>Description:</h4>


<p>
IS NULL checks if a value is NULL (empty/missing).
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Operator</strong></td>
        <td>IS NULL</td>
    </tr>
    <tr>
        <td><strong>Use</strong></td>
        <td>Test for NULL values</td>
    </tr>
    <tr>
        <td><strong>Result</strong></td>
        <td>TRUE if NULL, FALSE if not NULL</td>
    </tr>
</table>


<h4>Important Note about NULL:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Point</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td><strong=NULL != Zero</strong></td>
        <td>NULL is not equal to 0</td>
    </tr>
    <tr>
        <td><strong>NULL != Empty String</strong></td>
        <td>NULL is not equal to ''</td>
    </tr>
    <tr>
        <td><strong>Cannot use =</strong></td>
        <td>CANNOT write column = NULL</td>
    </tr>
    <tr>
        <td><strong>MUST use IS</strong></td>
        <td>MUST write column IS NULL</td>
    </tr>
</table>


<h4>IS NULL Example - Empty Commission:</h4>


<pre>
-- Select employees with NULL commission
SELECT empno, ename, sal, comm
FROM emp
WHERE comm IS NULL;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>comm</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>30000</td>
        <td>(NULL)</td>
    </tr>
    <tr>
        <td>7800</td>
        <td>JONES</td>
        <td>35000</td>
        <td>(NULL)</td>
    </tr>
</table>


<p>
Note: Returns rows where comm has NO value (NULL)
</p>


<h4>IS NULL in UPDATE:</h4>


<pre>
-- Set default commission for employees with NULL commission
UPDATE emp
SET comm = 0
WHERE comm IS NULL;
</pre>


<h3>2. IS NOT NULL Operator</h3>


<h4>Description:</h4>


<p>
IS NOT NULL checks if a value is NOT NULL (has a value).
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Operator</strong></td>
        <td>IS NOT NULL</td>
    </tr>
    <tr>
        <td><strong>Use</strong></td>
        <td>Test for non-NULL values</td>
    </tr>
    <tr>
        <td><strong>Result</strong></td>
        <td>TRUE if not NULL, FALSE if NULL</td>
    </tr>
</table>


<h4>IS NOT NULL Example - With Commission:</h4>


<pre>
-- Select employees WITH commission (not NULL)
SELECT empno, ename, sal, comm
FROM emp
WHERE comm IS NOT NULL;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>comm</th>
    </tr>
    <tr>
        <td>7850</td>
        <td>DAVIS</td>
        <td>32000</td>
        <td>5000</td>
    </tr>
    <tr>
        <td>7900</td>
        <td>BROWN</td>
        <td>28000</td>
        <td>3000</td>
    </tr>
</table>


<p>
Note: Returns rows where comm HAS a value (not NULL)
</p>


<h4>IS NOT NULL vs NOT NULL:</h4>


<pre>
-- These are equivalent:

-- Using IS NOT NULL
SELECT * FROM emp WHERE comm IS NOT NULL;

-- NOT used in constraint (different context)
CREATE TABLE test (comm NUMBER NOT NULL);
</pre>


<h3>3. LIKE Operator</h3>


<h4>Description:</h4>


<p>
LIKE matches string patterns using wildcard characters.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Operator</strong></td>
        <td>LIKE</td>
    </tr>
    <tr>
        <td><strong>Use</strong></td>
        <td>Pattern matching for strings</td>
    </tr>
    <tr>
        <td><strong>Wildcards</strong></td>
        <td>% (any characters), _ (single character)</td>
    </tr>
    <tr>
        <td><strong>Result</strong></td>
        <td>TRUE if pattern matches, FALSE otherwise</td>
    </tr>
</table>


<h4>Wildcard Characters:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Wildcard</th>
        <th>Description</th>
        <th>Example</th>
        <th>Matches</th>
    </tr>
    <tr>
        <td><strong>%</strong></td>
        <td>Zero or MORE characters</td>
        <td>'S%'</td>
        <td>SMITH, STU, S</td>
    </tr>
    <tr>
        <td><strong>_</strong></td>
        <td>EXACTLY ONE character</td>
        <td>'S_%'</td>
        <td>SMITH, STU (but not S)</td>
    </tr>
</table>


<h4>LIKE Example - Names Starting with S:</h4>


<pre>
-- Select employees named starting with 'S'
SELECT empno, ename, sal
FROM emp
WHERE ename LIKE 'S%';
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>30000</td>
    </tr>
</table>


<p>
Note: 'S%' means S followed by ANY characters (including zero)
</p>


<h4>LIKE Example - Names Ending with S:</h4>


<pre>
-- Select employees named ending with 'S'
SELECT empno, ename, sal
FROM emp
WHERE ename LIKE '%S';
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
    </tr>
    <tr>
        <td>7800</td>
        <td>JONES</td>
        <td>35000</td>
    </tr>
</table>


<p>
Note: '%S' means ANY characters followed by S
</p>


<h4>LIKE Example - Names with S in Middle:</h4>


<pre>
-- Select employees named containing 'S'
SELECT empno, ename, sal
FROM emp
WHERE ename LIKE '%S%';
</pre>


<h4>LIKE Example - Exactly 5 Characters:</h4>


<pre>
-- Select employees with 5-character names
SELECT empno, ename, sal
FROM emp
WHERE ename LIKE '_____';
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>30000</td>
    </tr>
    <tr>
        <td>7800</td>
        <td>JONES</td>
        <td>35000</td>
    </tr>
</table>


<p>
Note: '_____' means exactly 5 characters (5 underscores)
</p>


<h4>LIKE with Escape Character:</h4>


<pre>
-- Search for names starting with '%'
SELECT empno, ename
FROM emp
WHERE ename LIKE '%\%%' ESCAPE '\';
</pre>


<h3>4. BETWEEN Operator</h3>


<h4>Description:</h4>


<p>
BETWEEN checks if a value is within a range (inclusive).
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Operator</strong></td>
        <td>BETWEEN ... AND</td>
    </tr>
    <tr>
        <td><strong>Use</strong></td>
        <td>Test if value in range</td>
    </tr>
    <tr>
        <td><strong>Inclusive</strong></td>
        <td>Includes both boundary values</td>
    </tr>
    <tr>
        <td><strong>Result</strong></td>
        <td>TRUE if in range, FALSE otherwise</td>
    </tr>
</table>


<h4>BETWEEN Example - Salary Range:</h4>


<pre>
-- Select employees with salary between 25000 and 35000
SELECT empno, ename, sal
FROM emp
WHERE sal BETWEEN 25000 AND 35000;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>30000</td>
    </tr>
    <tr>
        <td>7800</td>
        <td>JONES</td>
        <td>35000</td>
    </tr>
    <tr>
        <td>7900</td>
        <td>BROWN</td>
        <td>28000</td>
    </tr>
</table>


<p>
Note: Includes 25000 AND 35000 (inclusive range)
</p>


<h4>BETWEEN Equivalent:</h4>


<pre>
-- These are equivalent:

-- Using BETWEEN
SELECT * FROM emp WHERE sal BETWEEN 25000 AND 35000;

-- Using >= and <=
SELECT * FROM emp WHERE sal >= 25000 AND sal <= 35000;
</pre>


<h4>BETWEEN with Dates:</h4>


<pre>
-- Select employees hired between 1980 and 1982
SELECT empno, ename, hiredate
FROM emp
WHERE hiredate BETWEEN '01-JAN-1980' AND '31-DEC-1982';
</pre>


<h3>5. IN Operator</h3>


<h4>Description:</h4>


<p>
IN checks if a value is in a list of values.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Operator</strong></td>
        <td>IN (...)</td>
    </tr>
    <tr>
        <td><strong>Use</strong></td>
        <td>Test if value in list</td>
    </tr>
    <tr>
        <td><strong>List</strong></td>
        <td>Comma-separated values</td>
    </tr>
    <tr>
        <td><strong>Result</strong></td>
        <td>TRUE if in list, FALSE otherwise</td>
    </tr>
</table>


<h4>IN Example - Multiple Departments:</h4>


<pre>
-- Select employees in department 10 OR 20
SELECT empno, ename, sal, deptno
FROM emp
WHERE deptno IN (10, 20);
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal</th>
        <th>deptno</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>30000</td>
        <td>20</td>
    </tr>
    <tr>
        <td>7800</td>
        <td>JONES</td>
        <td>35000</td>
        <td>10</td>
    </tr>
</table>


<p>
Note: Equivalent to WHERE deptno = 10 OR deptno = 20
</p>


<h4>IN Equivalent:</h4>


<pre>
-- These are equivalent:

-- Using IN
SELECT * FROM emp WHERE deptno IN (10, 20, 30);

-- Using OR
SELECT * FROM emp WHERE deptno = 10 OR deptno = 20 OR deptno = 30;
</pre>


<h4>IN with Subquery:</h4>


<pre>
-- Select employees in departments with average salary > 30000
SELECT empno, ename, sal, deptno
FROM emp
WHERE deptno IN (
    SELECT deptno FROM emp GROUP BY deptno 
    AVG(sal) > 30000
);
</pre>


<h3>6. EXISTS Operator</h3>


<h4>Description:</h4>


<p>
EXISTS checks if a subquery returns any rows.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Operator</strong></td>
        <td>EXISTS (...)</td>
    </tr>
    <tr>
        <td><strong>Use</strong></td>
        <td>Test if subquery returns rows</td>
    </tr>
    <tr>
        <td><strong>Result</strong></td>
        <td>TRUE if rows exist, FALSE otherwise</td>
    </tr>
</table>


<h4>EXISTS Example - Check Department:</h4>


<pre>
-- Select employees if department 10 exists
SELECT empno, ename, sal
FROM emp
WHERE EXISTS (
    SELECT * FROM dept WHERE deptno = 10
);
</pre>


<h3>7. Concatenation Operator (||)</h3>


<h4>Description:</h4>


<p>
|| combines (concatenates) two strings into one.
</p>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Aspect</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>Operator</strong></td>
        <td>|| (double pipe)</td>
    </tr>
    <tr>
        <td><strong>Use</strong></td>
        <td>Combine strings</td>
    </tr>
    <tr>
        <td><strong>Result</strong></td>
        <td>Combined string</td>
    </tr>
</table>


<h4>Concatenation Example - Full Info:</h4>


<pre>
-- Combine employee name and job
SELECT empno, ename || ' - ' || job AS employee_info
FROM emp;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>employee_info</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH - ANALYST</td>
    </tr>
    <tr>
        <td>7800</td>
        <td>JONES - MANAGER</td>
    </tr>
</table>


<h4>Concatenation Example - Salary Info:</h4>


<pre>
-- Create salary description
SELECT empno, ename, 
       'Salary: ' || sal || ' for ' || ename AS sal_desc
FROM emp;
</pre>


<h4>Output Example:</h4>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>empno</th>
        <th>ename</th>
        <th>sal_desc</th>
    </tr>
    <tr>
        <td>7788</td>
        <td>SMITH</td>
        <td>Salary: 30000 for SMITH</td>
    </tr>
</table>


<h3>SPECIAL OPERATORS in WHERE Clause</h3>


<h4>Complete Example - Multiple Operators:</h4>


<pre>
-- Complex condition with special operators
SELECT empno, ename, sal, comm, deptno
FROM emp
WHERE sal BETWEEN 25000 AND 35000
      AND deptno IN (10, 20)
      AND comm IS NULL
      AND ename LIKE 'S%';
</pre>


<h3>Key Points Summary</h3>


<table border="1" class="notes-table" cellpadding="10">
    <tr>
        <th>Point</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td><strong>IS NULL</strong></td>
        <td>Tests if value is NULL (must use IS, not =)</td>
    </tr>
    <tr>
        <td><strong>IS NOT NULL</strong></td>
        <td>Tests if value has a value</td>
    </tr>
    <tr>
        <td><strong>LIKE</strong></td>
        <td>Pattern matching with % and _ wildcards</td>
    </tr>
    <tr>
        <td><strong>% wildcard</strong></td>
        <td>Zero or more characters</td>
    </tr>
    <tr>
        <td><strong>_ wildcard</strong></td>
        <td>Exactly one character</td>
    </tr>
    <tr>
        <td><strong>BETWEEN</strong></td>
        <td>Inclusive range (includes boundaries)</td>
    </tr>
    <tr>
        <td><strong>IN</strong></td>
        <td>Value in list (equivalent to multiple OR)</td>
    </tr>
    <tr>
        <td><strong>EXISTS</strong></td>
        <td>Subquery returns rows</td>
    </tr>
    <tr>
        <td><strong>||</strong></td>
        <td>String concatenation</td>
    </tr>
    <tr>
        <td><strong>Use in WHERE</strong></td>
        <td>Filter with special conditions</td>
    </tr>
</table>


<h3>Class Summary</h3>


<p>
In today's lecture, we learned about SPECIAL OPERATORS in Oracle:
</p>


<ul>
    <li><strong>IS NULL:</strong> Tests NULL values (WHERE comm IS NULL)</li>
    <li><strong>IS NOT NULL:</strong> Tests non-NULL values (WHERE comm IS NOT NULL)</li>
    <li><strong>LIKE:</strong> Pattern matching (WHERE ename LIKE 'S%')</li>
    <li><strong>% wildcard:</strong> Zero or more characters (S% = starts with S)</li>
    <li><strong>_ wildcard:</strong> Exactly one character (S__ = S + 2 chars)</li>
    <li><strong>BETWEEN:</strong> Inclusive range (WHERE sal BETWEEN 25000 AND 35000)</li>
    <li><strong>IN:</strong> Value in list (WHERE deptno IN (10, 20))</li>
    <li><strong>EXISTS:</strong> Subquery returns rows</li>
    <li><strong>||:</strong> String concatenation (ename || ' - ' || job)</li>
    <li><strong>NULL:</strong> Not equal to 0 or '', must use IS NULL</li>
</ul>


<p>
Remember: IS NULL for NULL test, LIKE for pattern, BETWEEN for range, IN for list, || for concatenation!
</p>


<p>
<strong>Homework:</strong>
</p>
<ul>
    <li>1. Create SELECT with IS NULL (find employees without commission)</li>
    <li>2. Create SELECT with IS NOT NULL (find employees with commission)</li>
    <li>3. Create SELECT with LIKE (find names starting with letter)</li>
    <li>4. Create SELECT with BETWEEN (find salary range)</li>
    <li>5. Create SELECT with IN (find specific departments)</li>
    <li>6. Create SELECT with || concatenation (combine columns)</li>
    <li>7. Combine multiple special operators in one query</li>
</ul>


<p>
<strong>Next Topic:</strong> Aggregate Functions in Oracle (SUM, AVG, COUNT, MAX, MIN)
</p>


`;

let oracleFunctionsContent = `

<h3>Functions in Oracle SQL</h3>

<p>

Good morning students!

Today we are going to learn one of the most interesting and useful topics in Oracle SQL called <strong>Functions</strong>.

Till now, we have learned how to create tables, insert records, retrieve data using the <strong>SELECT</strong> statement, filter records using the <strong>WHERE</strong> clause, and perform calculations using different SQL operators.

But in real-world databases, simply displaying data is not enough. Most of the time, we need to modify, calculate, format, convert, or summarize the data before displaying it to the user.

To perform these tasks easily, Oracle provides <strong>Functions</strong>.

</p>

<p>

For example, suppose we have a Student table containing hundreds or thousands of records. We may need to perform operations like:

</p>

<ul>

<li>Convert a student's name into uppercase letters.</li>

<li>Convert a student's name into lowercase letters.</li>

<li>Find the length of a student's name.</li>

<li>Calculate the average salary of employees.</li>

<li>Count the total number of students.</li>

<li>Display today's current date.</li>

<li>Round a decimal number.</li>

<li>Replace NULL values with another value.</li>

</ul>

<p>

Can we perform all these operations manually?

Of course, we can, but it would take more time and our SQL queries would become very lengthy and difficult to understand.

Instead of writing complex logic, Oracle provides many built-in Functions that can perform these operations automatically with just a single line of code.

</p>

<p>

In simple words, a <strong>Function</strong> accepts one or more values as input, performs a specific operation on those values, and returns the required output.

Using Functions makes our SQL queries shorter, faster, easier to understand, and more efficient.

</p>

<h3>
Real-Life Example
</h3>

<p>

Suppose you are using a calculator on your mobile phone.

You enter two numbers, <strong>25</strong> and <strong>15</strong>, and then press the <strong>+</strong> button.

The calculator automatically performs the addition and displays the result.

Similarly, Oracle Functions also work in the same way.

</p>

<table class="notes-table">

<tr>

<th>Input</th>

<th>Operation</th>

<th>Output</th>

</tr>

<tr>

<td>25, 15</td>

<td>Addition (+)</td>

<td>40</td>

</tr>

</table>

<p>

Oracle Functions work exactly like a calculator.

You provide the input, Oracle performs the required operation, and finally returns the result.

</p>

<h3>
How Does a Function Work?
</h3>

<table class="notes-table">

<tr>

<th>Step</th>

<th>Description</th>

</tr>

<tr>

<td>Input</td>

<td>Provide a value, expression, or column name.</td>

</tr>

<tr>

<td>Processing</td>

<td>The Function performs the required operation.</td>

</tr>

<tr>

<td>Output</td>

<td>The Function returns the final result.</td>

</tr>

</table>

<h3>
Example
</h3>

<table class="notes-table">

<tr>

<th>Input</th>

<th>Function</th>

<th>Output</th>

</tr>

<tr>

<td>oracle</td>

<td>UPPER()</td>

<td>ORACLE</td>

</tr>

<tr>

<td>DATABASE</td>

<td>LOWER()</td>

<td>database</td>

</tr>

<tr>

<td>Oracle SQL</td>

<td>LENGTH()</td>

<td>10</td>

</tr>

<tr>

<td>45.678</td>

<td>ROUND()</td>

<td>46</td>

</tr>

<tr>

<td>Student Records</td>

<td>COUNT()</td>

<td>Total Records</td>

</tr>

</table>

<h3>
Why Do We Use Functions?
</h3>

<p>

Functions are used because they make SQL programming simple and efficient.

Instead of writing long and complex SQL statements, we can use built-in Functions to perform different operations within a few seconds.

</p>

<ul>

<li>To manipulate text data.</li>

<li>To perform mathematical calculations.</li>

<li>To work with dates and time.</li>

<li>To convert one data type into another.</li>

<li>To replace NULL values.</li>

<li>To calculate totals, averages, maximum and minimum values.</li>

<li>To make SQL queries shorter and easier to understand.</li>

</ul>

<h3>
What We Will Learn
</h3>

<ul>

<li>What is a Function?</li>

<li>Why do we use Functions in Oracle SQL?</li>

<li>How does a Function work?</li>

<li>Syntax of Oracle Functions.</li>

<li>Types of Oracle Functions.</li>

<h3>Types of Functions in Oracle SQL</h3>

<p>

Good morning students!

In the previous lecture, we learned what a Function is and why it is used in Oracle SQL.

Now, let us understand the different <strong>Types of Functions</strong> available in Oracle SQL.

Oracle provides many built-in Functions to perform different tasks. These Functions are mainly divided into <strong>two categories</strong> based on how they process data.

</p>

<h3>
Main Types of Functions
</h3>

<table class="notes-table">

<tr>

<th>S.No.</th>

<th>Function Type</th>

<th>Description</th>

</tr>

<tr>

<td>1</td>

<td>Single Row Functions</td>

<td>Work on one row at a time and return one result for each row.</td>

</tr>

<tr>

<td>2</td>

<td>Group (Aggregate) Functions</td>

<td>Work on multiple rows and return a single result for the entire group.</td>

</tr>

</table>

<p>

Let us understand both types one by one.

</p>

<hr>

<h3>
1. Single Row Functions
</h3>

<p>

<strong>Definition:</strong> A Single Row Function works on one row (or one value) at a time and returns exactly one result for each row.

</p>

<p>

If a table contains 100 records, then a Single Row Function will execute 100 times and return 100 results.

</p>

<h3>
Example
</h3>

<table class="notes-table">

<tr>

<th>Student Name</th>

<th>Function</th>

<th>Output</th>

</tr>

<tr>

<td>rahul</td>

<td>UPPER(Name)</td>

<td>RAHUL</td>

</tr>

<tr>

<td>amit</td>

<td>UPPER(Name)</td>

<td>AMIT</td>

</tr>

<tr>

<td>rohit</td>

<td>UPPER(Name)</td>

<td>ROHIT</td>

</tr>

</table>

<p>

Notice that every row produces its own result.

Therefore, this is called a <strong>Single Row Function</strong>.

</p>

<h3>
Types of Single Row Functions
</h3>

<table class="notes-table">

<tr>

<th>Function Type</th>

<th>Purpose</th>

<th>Examples</th>

</tr>

<tr>

<td>Character Functions</td>

<td>Used to manipulate text or character data.</td>

<td>UPPER(), LOWER(), LENGTH(), SUBSTR(), INITCAP()</td>

</tr>

<tr>

<td>Number Functions</td>

<td>Used to perform mathematical calculations.</td>

<td>ROUND(), CEIL(), FLOOR(), MOD(), ABS()</td>

</tr>

<tr>

<td>Date Functions</td>

<td>Used to perform operations on dates.</td>

<td>SYSDATE, ADD_MONTHS(), MONTHS_BETWEEN()</td>

</tr>

<tr>

<td>Conversion Functions</td>

<td>Convert one data type into another.</td>

<td>TO_CHAR(), TO_DATE(), TO_NUMBER()</td>

</tr>

<tr>

<td>General Functions</td>

<td>Handle NULL values and perform general operations.</td>

<td>NVL(), NVL2(), NULLIF(), COALESCE()</td>

</tr>

</table>

<p>

We will study each of these Single Row Functions separately in the upcoming lectures.

</p>

<hr>

<h3>
2. Group (Aggregate) Functions
</h3>

<p>

<strong>Definition:</strong> A Group Function works on multiple rows at the same time and returns only one result for the entire group.

</p>

<p>

Instead of producing one output for each row, it combines all rows and returns a single value.

</p>

<h3>
Example
</h3>

<table class="notes-table">

<tr>

<th>Marks</th>

</tr>

<tr>

<td>80</td>

</tr>

<tr>

<td>75</td>

</tr>

<tr>

<td>90</td>

</tr>

<tr>

<td>85</td>

</tr>

</table>

<p>

Now suppose we execute the following SQL statement.

</p>

<pre>
SELECT AVG(Marks)
FROM Student;
</pre>

<h3>
Output
</h3>

<table class="notes-table">

<tr>

<th>AVG(Marks)</th>

</tr>

<tr>

<td>82.5</td>

</tr>

</table>

<p>

Here, Oracle reads all four rows, calculates the average, and returns only one result.

Therefore, <strong>AVG()</strong> is a Group Function.

</p>

<h3>
Common Group Functions
</h3>

<table class="notes-table">

<tr>

<th>Function</th>

<th>Purpose</th>

</tr>

<tr>

<td>COUNT()</td>

<td>Counts the total number of rows.</td>

</tr>

<tr>

<td>SUM()</td>

<td>Calculates the total value.</td>

</tr>

<tr>

<td>AVG()</td>

<td>Calculates the average value.</td>

</tr>

<tr>

<td>MAX()</td>

<td>Finds the highest value.</td>

</tr>

<tr>

<td>MIN()</td>

<td>Finds the lowest value.</td>

</tr>

</table>

<hr>

<h3>
Difference Between Single Row Function and Group Function
</h3>

<table class="notes-table">

<tr>

<th>Single Row Function</th>

<th>Group Function</th>

</tr>

<tr>

<td>Works on one row at a time.</td>

<td>Works on multiple rows together.</td>

</tr>

<tr>

<td>Returns one result for each row.</td>

<td>Returns one result for the entire group.</td>

</tr>

<tr>

<td>Processes each record individually.</td>

<td>Processes all selected records together.</td>

</tr>

<tr>

<td>Examples: UPPER(), LOWER(), LENGTH(), ROUND()</td>

<td>Examples: COUNT(), SUM(), AVG(), MAX(), MIN()</td>

</tr>

</table>

<h3>
Easy Trick to Remember
</h3>

<table class="notes-table">

<tr>

<th>Function Type</th>

<th>Remember</th>

</tr>

<tr>

<td>Single Row Function</td>

<td>One Row → One Result</td>

</tr>

<tr>

<td>Group Function</td>

<td>Many Rows → One Result</td>

</tr>

</table>

<h3>
Class Summary
</h3>

<ul>

<li>Oracle Functions are mainly divided into two categories.</li>

<li>Single Row Functions work on one row and return one result for each row.</li>

<li>Group Functions work on multiple rows and return one result.</li>

<li>Single Row Functions have five categories: Character, Number, Date, Conversion, and General Functions.</li>

<li>Group Functions include COUNT(), SUM(), AVG(), MAX(), and MIN().</li>

</ul>


<li>SQL examples with proper output.</li>

<li>Real-life examples for better understanding.</li>

<li>Advantages of using Functions.</li>

<li>Frequently Asked Interview Questions.</li>

</ul>

<p>

By the end of this chapter, you will be able to use Oracle Functions to manipulate text, perform calculations, work with dates, convert data types, replace NULL values, and generate meaningful reports from database tables.

</p>

`; 

let oracleCharacterFunctionsContent = `

<h3>Character Functions in Oracle SQL</h3>

<p>
Good morning students!

Today we are going to learn an important topic in Oracle SQL called <strong>Character Functions</strong>.

Character Functions are used to manipulate <strong>string (text) data</strong> in Oracle SQL. These functions help us to format, convert, extract, search, and modify text values stored in database tables.
</p>

<p>
In real-world databases, data is often stored in text form like names, addresses, emails, and descriptions. To work with this data effectively, Oracle provides built-in Character Functions.
</p>

<h3>What are Character Functions?</h3>

<p>
Character Functions are functions that take a string as input, perform an operation on it, and return a modified string or numeric result.
</p>

<h3>Why Do We Use Character Functions?</h3>

<ul>
<li>To convert text into uppercase or lowercase</li>
<li>To extract part of a string</li>
<li>To find length of text</li>
<li>To replace characters in a string</li>
<li>To remove extra spaces</li>
<li>To format data for reporting</li>
</ul>

<h3>Types of Character Functions</h3>

<table class="notes-table">
<tr>
<th>Category</th>
<th>Function</th>
<th>Purpose</th>
</tr>

<tr>
<td>Case Conversion</td>
<td>UPPER, LOWER, INITCAP</td>
<td>Change letter case</td>
</tr>

<tr>
<td>String Manipulation</td>
<td>CONCAT, SUBSTR, LENGTH, REPLACE</td>
<td>Modify or extract string data</td>
</tr>

<tr>
<td>Trimming Functions</td>
<td>TRIM, LTRIM, RTRIM</td>
<td>Remove unwanted spaces or characters</td>
</tr>
</table>

<h3>1. Case Conversion Functions</h3>

<p>
These functions are used to change the case of text data.
</p>

<h4>UPPER()</h4>
<p>Converts all characters into uppercase.</p>

<pre>
SELECT UPPER('oracle') FROM dual;
Output: ORACLE
</pre>

<h4>LOWER()</h4>
<p>Converts all characters into lowercase.</p>

<pre>
SELECT LOWER('ORACLE') FROM dual;
Output: oracle
</pre>

<h4>INITCAP()</h4>
<p>Converts first letter of each word into uppercase.</p>

<pre>
SELECT INITCAP('oracle sql functions') FROM dual;
Output: Oracle Sql Functions
</pre>

<h3>2. String Manipulation Functions</h3>

<p>
These functions are used to work with string values such as joining, extracting, replacing, and measuring strings.
</p>

<h4>CONCAT()</h4>
<p>Joins two strings together.</p>

<pre>
SELECT CONCAT('Hello', ' World') FROM dual;
Output: Hello World
</pre>

<h4>SUBSTR()</h4>
<p>Extracts a part of a string.</p>

<pre>
SELECT SUBSTR('ORACLE DATABASE', 1, 6) FROM dual;
Output: ORACLE
</pre>

<h4>LENGTH()</h4>
<p>Returns the number of characters in a string.</p>

<pre>
SELECT LENGTH('ORACLE') FROM dual;
Output: 6
</pre>

<h4>REPLACE()</h4>
<p>Replaces a part of a string with another value.</p>

<pre>
SELECT REPLACE('JAVA SQL', 'JAVA', 'ORACLE') FROM dual;
Output: ORACLE SQL
</pre>

<h3>3. Trimming Functions</h3>

<p>
These functions are used to remove unwanted spaces or characters.
</p>

<h4>TRIM()</h4>
<p>Removes spaces from both sides of a string.</p>

<pre>
SELECT TRIM('  ORACLE  ') FROM dual;
Output: ORACLE
</pre>

<h4>LTRIM()</h4>
<p>Removes spaces from the left side of a string.</p>

<h4>RTRIM()</h4>
<p>Removes spaces from the right side of a string.</p>

<h3>Real-Life Example</h3>

<p>
Suppose a database contains student names written in different formats like:
</p>

<ul>
<li>rahul</li>
<li>RAHUL</li>
<li>Rahul</li>
</ul>

<p>
We can use Character Functions like <strong>INITCAP()</strong> or <strong>UPPER()</strong> to standardize the format.
</p>

<h3>Conclusion</h3>

<p>
Character Functions are very powerful in Oracle SQL. They help in cleaning, formatting, and transforming text data efficiently, making database queries more meaningful and professional.
</p>

`;

let oracleNumberFunctionsContent = `

<h3>Number Functions in Oracle SQL</h3>

<p>
Good morning students!

Today we are going to learn an important topic in Oracle SQL called <strong>Number Functions</strong>.

Number Functions are used to perform mathematical operations on numeric data in Oracle SQL. These functions help us to round numbers, calculate absolute values, find remainders, and control numeric precision.
</p>

<p>
In real-world databases, numeric data is widely used in salary calculations, marks, prices, discounts, taxes, and reports. To handle all these operations efficiently, Oracle provides built-in Number Functions.
</p>

<h3>What are Number Functions?</h3>

<p>
Number Functions are functions that take numeric input, perform mathematical operations on it, and return a numeric result.
</p>

<h3>Why Do We Use Number Functions?</h3>

<ul>
<li>To round decimal values</li>
<li>To find absolute values</li>
<li>To calculate remainder of division</li>
<li>To control precision of numbers</li>
<li>To generate ceiling and floor values</li>
</ul>

<h3>Types of Number Functions</h3>

<table class="notes-table">
<tr>
<th>Function</th>
<th>Purpose</th>
<th>Example Output</th>
</tr>

<tr>
<td>ROUND()</td>
<td>Rounds a number to nearest value</td>
<td>ROUND(45.678) = 46</td>
</tr>

<tr>
<td>TRUNC()</td>
<td>Removes decimal part without rounding</td>
<td>TRUNC(45.678) = 45</td>
</tr>

<tr>
<td>CEIL()</td>
<td>Returns next highest integer</td>
<td>CEIL(45.2) = 46</td>
</tr>

<tr>
<td>FLOOR()</td>
<td>Returns next lowest integer</td>
<td>FLOOR(45.9) = 45</td>
</tr>

<tr>
<td>MOD()</td>
<td>Returns remainder of division</td>
<td>MOD(10, 3) = 1</td>
</tr>

<tr>
<td>ABS()</td>
<td>Returns absolute (positive) value</td>
<td>ABS(-25) = 25</td>
</tr>
</table>

<h3>1. ROUND() Function</h3>

<p>
The ROUND function is used to round a number to the nearest integer or specified decimal places.
</p>

<pre>
SELECT ROUND(45.678) FROM dual;
Output: 46
</pre>

<pre>
SELECT ROUND(45.678, 2) FROM dual;
Output: 45.68
</pre>

<h3>2. TRUNC() Function</h3>

<p>
The TRUNC function removes decimal values without rounding.
</p>

<pre>
SELECT TRUNC(45.678) FROM dual;
Output: 45
</pre>

<h3>3. CEIL() Function</h3>

<p>
The CEIL function returns the smallest integer greater than or equal to the given number.
</p>

<pre>
SELECT CEIL(45.2) FROM dual;
Output: 46
</pre>

<h3>4. FLOOR() Function</h3>

<p>
The FLOOR function returns the largest integer less than or equal to the given number.
</p>

<pre>
SELECT FLOOR(45.9) FROM dual;
Output: 45
</pre>

<h3>5. MOD() Function</h3>

<p>
The MOD function returns the remainder after division.
</p>

<pre>
SELECT MOD(10, 3) FROM dual;
Output: 1
</pre>

<h3>6. ABS() Function</h3>

<p>
The ABS function returns the absolute value (removes negative sign).
</p>

<pre>
SELECT ABS(-25) FROM dual;
Output: 25
</pre>

<h3>Real-Life Example</h3>

<p>
Suppose a company calculates salaries and taxes:
</p>

<ul>
<li>ROUND() → to finalize salary</li>
<li>TRUNC() → to cut extra decimal values</li>
<li>MOD() → to check remainder in calculations</li>
</ul>

<h3>Conclusion</h3>

<p>
Number Functions are very important in Oracle SQL because they help in performing accurate mathematical calculations and make numeric data easier to manage in real-world applications.
</p>

`;

let oracleDateFunctionsContent = `

<h3>Date Functions in Oracle SQL</h3>

<p>
Good morning students!

Today we are going to learn an important topic in Oracle SQL called <strong>Date Functions</strong>.

Date Functions are used to work with date and time values in Oracle SQL. These functions help us to retrieve current date, perform calculations on dates, add or subtract days/months, and format date values.
</p>

<p>
In real-world database applications, date data is very important. It is used in employee joining dates, attendance systems, booking systems, transactions, and reports. To handle all these operations efficiently, Oracle provides built-in Date Functions.
</p>

<h3>What are Date Functions?</h3>

<p>
Date Functions are functions that take date values as input, perform operations on them, and return a modified date or numeric result.
</p>

<h3>Why Do We Use Date Functions?</h3>

<ul>
<li>To get current system date and time</li>
<li>To perform date arithmetic (add or subtract days/months)</li>
<li>To calculate difference between two dates</li>
<li>To extract parts of a date (year, month, day)</li>
<li>To format date values</li>
</ul>

<h3>Common Date Functions in Oracle SQL</h3>

<table class="notes-table">
<tr>
<th>Function</th>
<th>Purpose</th>
<th>Example Output</th>
</tr>

<tr>
<td>SYSDATE</td>
<td>Returns current system date and time</td>
<td>30-JUN-2026</td>
</tr>

<tr>
<td>CURRENT_DATE</td>
<td>Returns current date in session time zone</td>
<td>30-JUN-2026</td>
</tr>

<tr>
<td>ADD_MONTHS()</td>
<td>Adds months to a date</td>
<td>ADD_MONTHS(SYSDATE, 2)</td>
</tr>

<tr>
<td>MONTHS_BETWEEN()</td>
<td>Returns number of months between two dates</td>
<td>MONTHS_BETWEEN(date1, date2)</td>
</tr>

<tr>
<td>LAST_DAY()</td>
<td>Returns last day of month</td>
<td>LAST_DAY(SYSDATE)</td>
</tr>

<tr>
<td>NEXT_DAY()</td>
<td>Returns next occurrence of a specific weekday</td>
<td>NEXT_DAY(SYSDATE, 'MONDAY')</td>
</tr>
</table>

<h3>1. SYSDATE</h3>

<p>
SYSDATE returns the current system date and time from the database server.
</p>

<pre>
SELECT SYSDATE FROM dual;
Output: 30-JUN-2026
</pre>

<h3>2. CURRENT_DATE</h3>

<p>
CURRENT_DATE returns the current date based on the session time zone.
</p>

<pre>
SELECT CURRENT_DATE FROM dual;
Output: 30-JUN-2026
</pre>

<h3>3. ADD_MONTHS()</h3>

<p>
ADD_MONTHS function is used to add or subtract months from a given date.
</p>

<pre>
SELECT ADD_MONTHS(SYSDATE, 2) FROM dual;
Output: (date after 2 months)
</pre>

<pre>
SELECT ADD_MONTHS(SYSDATE, -1) FROM dual;
Output: (date before 1 month)
</pre>

<h3>4. MONTHS_BETWEEN()</h3>

<p>
MONTHS_BETWEEN returns the number of months between two dates.
</p>

<pre>
SELECT MONTHS_BETWEEN('01-JAN-2026', '01-JAN-2025') FROM dual;
Output: 12
</pre>

<h3>5. LAST_DAY()</h3>

<p>
LAST_DAY returns the last date of the month for a given date.
</p>

<pre>
SELECT LAST_DAY(SYSDATE) FROM dual;
Output: 31-JUL-2026 (example based on current month)
</pre>

<h3>6. NEXT_DAY()</h3>

<p>
NEXT_DAY returns the next occurrence of a specified weekday.
</p>

<pre>
SELECT NEXT_DAY(SYSDATE, 'MONDAY') FROM dual;
Output: Next Monday date
</pre>

<h3>Real-Life Example</h3>

<p>
Suppose we are managing a student admission system:
</p>

<ul>
<li>SYSDATE → Admission date tracking</li>
<li>ADD_MONTHS() → Course duration calculation</li>
<li>MONTHS_BETWEEN() → Experience or age calculation</li>
</ul>

<h3>Conclusion</h3>

<p>
Date Functions are very important in Oracle SQL because they help in managing time-based data efficiently, making database systems more powerful and accurate.
</p>

`;

let oracleConversionFunctionsContent = `

<h3>Conversion Functions in Oracle SQL</h3>

<p>
Good morning students!

Today we are going to learn an important topic in Oracle SQL called <strong>Conversion Functions</strong>.

Conversion Functions are used to convert data from one data type into another data type in Oracle SQL. These functions are very useful when we need to change numbers into strings, strings into dates, or dates into formatted text.
</p>

<p>
In real-world databases, data is often stored in different formats. Sometimes we need to display data in a specific format or convert it to perform calculations. For this purpose, Oracle provides built-in Conversion Functions.
</p>

<h3>What are Conversion Functions?</h3>

<p>
Conversion Functions are functions that convert one data type into another and return the converted value.
</p>

<h3>Why Do We Use Conversion Functions?</h3>

<ul>
<li>To convert numbers into text format</li>
<li>To convert text into numbers</li>
<li>To convert strings into dates</li>
<li>To format date values for display</li>
<li>To ensure correct data type operations</li>
</ul>

<h3>Main Conversion Functions in Oracle SQL</h3>

<table class="notes-table">
<tr>
<th>Function</th>
<th>Purpose</th>
<th>Example</th>
</tr>

<tr>
<td>TO_CHAR()</td>
<td>Converts number or date to string</td>
<td>TO_CHAR(SYSDATE)</td>
</tr>

<tr>
<td>TO_NUMBER()</td>
<td>Converts string to number</td>
<td>TO_NUMBER('100')</td>
</tr>

<tr>
<td>TO_DATE()</td>
<td>Converts string to date</td>
<td>TO_DATE('2026-06-30','YYYY-MM-DD')</td>
</tr>
</table>

<h3>1. TO_CHAR() Function</h3>

<p>
TO_CHAR function is used to convert a number or date into a string format.
</p>

<pre>
SELECT TO_CHAR(SYSDATE) FROM dual;
Output: 30-JUN-2026
</pre>

<pre>
SELECT TO_CHAR(12345) FROM dual;
Output: '12345'
</pre>

<h4>TO_CHAR with Date Format</h4>

<pre>
SELECT TO_CHAR(SYSDATE, 'DD-MON-YYYY') FROM dual;
Output: 30-JUN-2026
</pre>

<pre>
SELECT TO_CHAR(SYSDATE, 'YYYY-MM-DD') FROM dual;
Output: 2026-06-30
</pre>

<h3>2. TO_NUMBER() Function</h3>

<p>
TO_NUMBER function is used to convert a string value into a number.
</p>

<pre>
SELECT TO_NUMBER('100') FROM dual;
Output: 100
</pre>

<pre>
SELECT TO_NUMBER('2500') + 500 FROM dual;
Output: 3000
</pre>

<h3>3. TO_DATE() Function</h3>

<p>
TO_DATE function is used to convert a string into a date format.
</p>

<pre>
SELECT TO_DATE('2026-06-30', 'YYYY-MM-DD') FROM dual;
Output: 30-JUN-2026
</pre>

<pre>
SELECT TO_DATE('01-JAN-2026', 'DD-MON-YYYY') FROM dual;
Output: 01-JAN-2026
</pre>

<h3>Real-Life Example</h3>

<p>
Suppose in an online application:
</p>

<ul>
<li>User enters date as text → TO_DATE() converts it into proper date</li>
<li>Price stored as string → TO_NUMBER() converts it for calculation</li>
<li>Reports → TO_CHAR() formats data for display</li>
</ul>

<h3>Conclusion</h3>

<p>
Conversion Functions are very important in Oracle SQL because they help in handling different data types and ensure smooth data processing and accurate results in queries.
</p>

`;

let oracleGeneralFunctionsContent = `

<h3>General Functions in Oracle SQL</h3>

<p>
Good morning students!

Today we are going to learn an important topic in Oracle SQL called <strong>General Functions</strong>.

General Functions are used to handle NULL values and perform basic conditional operations in Oracle SQL. These functions are very useful when working with incomplete or missing data in database tables.
</p>

<p>
In real-world databases, NULL values are very common. A NULL means "no value" or "unknown value". To handle such situations, Oracle provides General Functions.
</p>

<h3>What are General Functions?</h3>

<p>
General Functions are functions that help us manage NULL values and control data output based on conditions.
</p>

<h3>Why Do We Use General Functions?</h3>

<ul>
<li>To replace NULL values with meaningful values</li>
<li>To compare values safely</li>
<li>To handle missing or unknown data</li>
<li>To simplify conditional logic in SQL queries</li>
</ul>

<h3>Main General Functions in Oracle SQL</h3>

<table class="notes-table">
<tr>
<th>Function</th>
<th>Purpose</th>
<th>Example</th>
</tr>

<tr>
<td>NVL()</td>
<td>Replaces NULL with a specified value</td>
<td>NVL(salary, 0)</td>
</tr>

<tr>
<td>NVL2()</td>
<td>Checks NULL and returns two possible values</td>
<td>NVL2(salary, 'YES', 'NO')</td>
</tr>

<tr>
<td>NULLIF()</td>
<td>Compares two values and returns NULL if equal</td>
<td>NULLIF(10, 10)</td>
</tr>

<tr>
<td>COALESCE()</td>
<td>Returns first non-null value from list</td>
<td>COALESCE(NULL, NULL, 100)</td>
</tr>
</table>

<h3>1. NVL() Function</h3>

<p>
NVL function is used to replace NULL values with a default value.
</p>

<pre>
SELECT NVL(NULL, 0) FROM dual;
Output: 0
</pre>

<pre>
SELECT NVL(salary, 5000) FROM employees;
Output: salary value or 5000 if NULL
</pre>

<h3>2. NVL2() Function</h3>

<p>
NVL2 checks whether a value is NULL or not and returns two different results.
</p>

<pre>
SELECT NVL2(100, 'NOT NULL', 'NULL') FROM dual;
Output: NOT NULL
</pre>

<pre>
SELECT NVL2(NULL, 'NOT NULL', 'NULL') FROM dual;
Output: NULL
</pre>

<h3>3. NULLIF() Function</h3>

<p>
NULLIF returns NULL if both values are equal; otherwise returns the first value.
</p>

<pre>
SELECT NULLIF(10, 10) FROM dual;
Output: NULL
</pre>

<pre>
SELECT NULLIF(10, 20) FROM dual;
Output: 10
</pre>

<h3>4. COALESCE() Function</h3>

<p>
COALESCE returns the first non-null value from a list of expressions.
</p>

<pre>
SELECT COALESCE(NULL, NULL, 50, 100) FROM dual;
Output: 50
</pre>

<h3>Real-Life Example</h3>

<p>
Suppose in a student database:
</p>

<ul>
<li>Some students have missing marks → NVL() replaces them with 0</li>
<li>Employee bonus is NULL → COALESCE() assigns default bonus</li>
<li>Data validation → NVL2() checks presence of value</li>
</ul>

<h3>Conclusion</h3>

<p>
General Functions are very important in Oracle SQL because they help in handling NULL values and make database queries more reliable and meaningful.
</p>

`;

let oracleGroupFunctionsContent = `

<h3>Group (Aggregate) Functions </h3>

<p>
Good morning students!
</p>

<p>
In the previous lectures, we learned about <strong>Single Row Functions</strong> such as Character Functions, Number Functions, Date Functions, Conversion Functions, and General Functions.
</p>

<p>
Today, we are going to learn another important category of Oracle Functions called <strong>Group Functions</strong>, also known as <strong>Aggregate Functions</strong>.
</p>

<p>
These functions are one of the most frequently used functions in SQL because they help us analyze data and generate reports from database tables.
</p>

<hr>

<h3>What are Group (Aggregate) Functions?</h3>

<p>
A <strong>Group Function</strong> is a function that performs an operation on <strong>multiple rows</strong> and returns <strong>only one result</strong>.
</p>

<p>
Unlike Single Row Functions, which process one row at a time, Group Functions read all selected rows together, perform the required calculation, and return a single value.
</p>

<p>
These functions are mainly used for generating reports, calculating totals, averages, highest values, lowest values, and counting records.
</p>

<hr>

<h3>Real-Life Example</h3>

<p>
Suppose a teacher wants to know the average marks of all students in a class.
</p>

<table class="notes-table">
<tr>
<th>Student</th>
<th>Marks</th>
</tr>

<tr>
<td>Rahul</td>
<td>80</td>
</tr>

<tr>
<td>Amit</td>
<td>75</td>
</tr>

<tr>
<td>Rohit</td>
<td>90</td>
</tr>

<tr>
<td>Priya</td>
<td>85</td>
</tr>

</table>

<p>
Instead of calculating the average manually, Oracle can calculate it automatically.
</p>

<pre>
SELECT AVG(Marks)
FROM Student;
</pre>

<table class="notes-table">
<tr>
<th>Average Marks</th>
</tr>

<tr>
<td>82.5</td>
</tr>

</table>

<p>
Oracle reads all four rows, calculates the average, and returns only one value.
</p>

<p>
This is why <strong>AVG()</strong> is called a <strong>Group Function</strong>.
</p>

<hr>

<h3>Why Do We Use Group Functions?</h3>

<ul>

<li>To count the total number of records.</li>

<li>To calculate the total value.</li>

<li>To calculate the average value.</li>

<li>To find the maximum value.</li>

<li>To find the minimum value.</li>

<li>To generate reports quickly.</li>

<li>To summarize large amounts of data.</li>

</ul>

<hr>

<h3>Characteristics of Group Functions</h3>

<table class="notes-table">

<tr>
<th>Feature</th>
<th>Description</th>
</tr>

<tr>
<td>Works on Multiple Rows</td>
<td>Processes many rows together.</td>
</tr>

<tr>
<td>Returns One Result</td>
<td>Produces only one output.</td>
</tr>

<tr>
<td>Ignores NULL Values</td>
<td>Most Group Functions ignore NULL values automatically (except COUNT(*)).</td>
</tr>

<tr>
<td>Used in Reports</td>
<td>Commonly used in business reports and analytics.</td>
</tr>

</table>

<hr>

<h3>Common Group Functions</h3>

<table class="notes-table">

<tr>
<th>Function</th>
<th>Purpose</th>
</tr>

<tr>
<td>COUNT()</td>
<td>Counts the total number of rows.</td>
</tr>

<tr>
<td>SUM()</td>
<td>Calculates the total value.</td>
</tr>

<tr>
<td>AVG()</td>
<td>Calculates the average value.</td>
</tr>

<tr>
<td>MAX()</td>
<td>Returns the highest value.</td>
</tr>

<tr>
<td>MIN()</td>
<td>Returns the lowest value.</td>
</tr>

</table>

<hr>

<h3>1. COUNT() Function</h3>

<p>
The <strong>COUNT()</strong> function is used to count the total number of rows.
</p>

<h4>Syntax</h4>

<pre>
SELECT COUNT(*)
FROM table_name;
</pre>

<h4>Example</h4>

<pre>
SELECT COUNT(*)
FROM Student;
</pre>

<table class="notes-table">

<tr>
<th>Total Students</th>
</tr>

<tr>
<td>100</td>
</tr>

</table>

<p>
COUNT(*) counts all rows, including rows containing NULL values.
</p>

<h4>COUNT(column_name)</h4>

<pre>
SELECT COUNT(Email)
FROM Student;
</pre>

<p>
This counts only those rows where the Email column is NOT NULL.
</p>

<hr>

<h3>2. SUM() Function</h3>

<p>
The <strong>SUM()</strong> function calculates the total of a numeric column.
</p>

<h4>Syntax</h4>

<pre>
SELECT SUM(column_name)
FROM table_name;
</pre>

<h4>Example</h4>

<pre>
SELECT SUM(Salary)
FROM Employee;
</pre>

<table class="notes-table">

<tr>
<th>Total Salary</th>
</tr>

<tr>
<td>850000</td>
</tr>

</table>

<hr>

<h3>3. AVG() Function</h3>

<p>
The <strong>AVG()</strong> function calculates the average value of a numeric column.
</p>

<h4>Syntax</h4>

<pre>
SELECT AVG(column_name)
FROM table_name;
</pre>

<h4>Example</h4>

<pre>
SELECT AVG(Marks)
FROM Student;
</pre>

<table class="notes-table">

<tr>
<th>Average Marks</th>
</tr>

<tr>
<td>82.5</td>
</tr>

</table>

<hr>

<h3>4. MAX() Function</h3>

<p>
The <strong>MAX()</strong> function returns the highest value from a column.
</p>

<h4>Example</h4>

<pre>
SELECT MAX(Salary)
FROM Employee;
</pre>

<table class="notes-table">

<tr>
<th>Highest Salary</th>
</tr>

<tr>
<td>95000</td>
</tr>

</table>

<hr>

<h3>5. MIN() Function</h3>

<p>
The <strong>MIN()</strong> function returns the smallest value from a column.
</p>

<h4>Example</h4>

<pre>
SELECT MIN(Salary)
FROM Employee;
</pre>

<table class="notes-table">

<tr>
<th>Lowest Salary</th>
</tr>

<tr>
<td>18000</td>
</tr>

</table>

<hr>

<h3>Difference Between Single Row Functions and Group Functions</h3>

<table class="notes-table">

<tr>
<th>Single Row Functions</th>
<th>Group Functions</th>
</tr>

<tr>
<td>Work on one row at a time.</td>
<td>Work on multiple rows together.</td>
</tr>

<tr>
<td>Return one result for each row.</td>
<td>Return one result for all selected rows.</td>
</tr>

<tr>
<td>Example: UPPER(), ROUND(), SYSDATE</td>
<td>Example: COUNT(), SUM(), AVG(), MAX(), MIN()</td>
</tr>

</table>

<hr>

<h3>Important Points to Remember</h3>

<ul>

<li>Group Functions work on multiple rows.</li>

<li>They always return one result.</li>

<li>Most Group Functions ignore NULL values automatically.</li>

<li>COUNT(*) counts every row, including rows containing NULL values.</li>

<li>SUM() and AVG() work only with numeric columns.</li>

<li>MAX() and MIN() can be used with numbers, dates, and character data.</li>

<li>Group Functions are commonly used with the <strong>GROUP BY</strong> clause to create category-wise reports.</li>

</ul>

<hr>

<h3>Class Summary</h3>

<ul>

<li>Group Functions are also called Aggregate Functions.</li>

<li>They process multiple rows and return a single result.</li>

<li>The five most commonly used Group Functions are COUNT(), SUM(), AVG(), MAX(), and MIN().</li>

<li>They are widely used in reports, dashboards, payroll systems, attendance systems, banking applications, and business analytics.</li>

<li>Understanding Group Functions is essential before learning the <strong>GROUP BY</strong> and <strong>HAVING</strong> clauses.</li>

</ul>

`;

let oracleNestedFunctionsContent = `

<h3>Nested Functions in Oracle SQL</h3>

<p>
Good morning students!
</p>

<p>
In the previous lectures, we learned about <strong>Single Row Functions</strong> and <strong>Group (Aggregate) Functions</strong>. We used functions individually to perform different operations on data.
</p>

<p>
Today, we are going to learn an advanced concept in Oracle SQL called <strong>Nested Functions</strong>.
</p>

<p>
Nested Functions are very useful when a single function cannot produce the required result. In such cases, we can combine two or more functions together to perform multiple operations in a single SQL statement.
</p>

<hr>

<h3>What are Nested Functions?</h3>

<p>
A <strong>Nested Function</strong> is a function that is placed inside another function.
</p>

<p>
In simple words, the output of one function becomes the input of another function.
</p>

<p>
Oracle first executes the <strong>inner function</strong>. After getting its result, Oracle passes that result to the <strong>outer function</strong>.
</p>

<hr>

<h3>Real-Life Example</h3>

<p>
Suppose you are making tea.
</p>

<ol>

<li>First, boil the water.</li>

<li>Then, add tea leaves and sugar.</li>

<li>Finally, filter the tea before serving.</li>

</ol>

<p>
Each step depends on the result of the previous step.
</p>

<p>
Similarly, Nested Functions also work step by step. One function completes its work first, and then another function uses its output.
</p>

<hr>

<h3>How Nested Functions Work</h3>

<table class="notes-table">

<tr>
<th>Step</th>
<th>Description</th>
</tr>

<tr>
<td>Step 1</td>
<td>Oracle executes the innermost function.</td>
</tr>

<tr>
<td>Step 2</td>
<td>The output of the inner function becomes the input of the outer function.</td>
</tr>

<tr>
<td>Step 3</td>
<td>The outer function performs its operation and returns the final result.</td>
</tr>

</table>

<hr>

<h3>Syntax</h3>

<pre>
SELECT Outer_Function(
       Inner_Function(column_name)
)
FROM table_name;
</pre>

<hr>

<h3>Example 1: UPPER() and SUBSTR()</h3>

<p>
Suppose we want to extract the first five characters of a name and convert them into uppercase.
</p>

<pre>
SELECT UPPER(SUBSTR('oracle database',1,6))
FROM dual;
</pre>

<table class="notes-table">

<tr>
<th>Execution Order</th>
<th>Result</th>
</tr>

<tr>
<td>SUBSTR('oracle database',1,6)</td>
<td>oracle</td>
</tr>

<tr>
<td>UPPER('oracle')</td>
<td>ORACLE</td>
</tr>

</table>

<p>
Final Output:
</p>

<pre>
ORACLE
</pre>

<hr>

<h3>Example 2: LOWER() and REPLACE()</h3>

<p>
Replace one word first and then convert the complete string into lowercase.
</p>

<pre>
SELECT LOWER(REPLACE('JAVA SQL','JAVA','ORACLE'))
FROM dual;
</pre>

<table class="notes-table">

<tr>
<th>Execution</th>
<th>Output</th>
</tr>

<tr>
<td>REPLACE('JAVA SQL','JAVA','ORACLE')</td>
<td>ORACLE SQL</td>
</tr>

<tr>
<td>LOWER('ORACLE SQL')</td>
<td>oracle sql</td>
</tr>

</table>

<hr>

<h3>Example 3: ROUND() and AVG()</h3>

<p>
Suppose we want to calculate the average salary and then round it.
</p>

<pre>
SELECT ROUND(AVG(Salary))
FROM Employee;
</pre>

<table class="notes-table">

<tr>
<th>Execution</th>
<th>Result</th>
</tr>

<tr>
<td>AVG(Salary)</td>
<td>45678.56</td>
</tr>

<tr>
<td>ROUND(45678.56)</td>
<td>45679</td>
</tr>

</table>

<hr>

<h3>Example 4: TO_CHAR() and SYSDATE</h3>

<p>
Display the current system date in a custom format.
</p>

<pre>
SELECT TO_CHAR(SYSDATE,'DD-MON-YYYY')
FROM dual;
</pre>

<table class="notes-table">

<tr>
<th>Execution</th>
<th>Output</th>
</tr>

<tr>
<td>SYSDATE</td>
<td>Current Date</td>
</tr>

<tr>
<td>TO_CHAR()</td>
<td>30-JUN-2026</td>
</tr>

</table>

<hr>

<h3>Example 5: LENGTH() and TRIM()</h3>

<p>
Suppose a string contains unwanted spaces. First remove the spaces and then calculate the length.
</p>

<pre>
SELECT LENGTH(TRIM('   Oracle SQL   '))
FROM dual;
</pre>

<table class="notes-table">

<tr>
<th>Execution</th>
<th>Output</th>
</tr>

<tr>
<td>TRIM('   Oracle SQL   ')</td>
<td>Oracle SQL</td>
</tr>

<tr>
<td>LENGTH('Oracle SQL')</td>
<td>10</td>
</tr>

</table>

<hr>

<h3>Advantages of Nested Functions</h3>

<ul>

<li>Reduce the number of SQL statements.</li>

<li>Perform multiple operations in a single query.</li>

<li>Make queries more powerful and efficient.</li>

<li>Improve readability when used properly.</li>

<li>Reduce manual calculations.</li>

<li>Widely used in reports and real-world applications.</li>

</ul>

<hr>

<h3>Important Points to Remember</h3>

<ul>

<li>The inner function is always executed first.</li>

<li>The output of the inner function becomes the input of the outer function.</li>

<li>You can nest both Single Row Functions and Group Functions.</li>

<li>Not every function can be nested with every other function; the output data type of the inner function must be compatible with the input expected by the outer function.</li>

<li>Avoid excessive nesting because it can make SQL queries difficult to read and maintain.</li>

</ul>

<hr>

<h3>Difference Between Normal Functions and Nested Functions</h3>

<table class="notes-table">

<tr>
<th>Normal Function</th>
<th>Nested Function</th>
</tr>

<tr>
<td>Uses only one function.</td>
<td>Uses two or more functions together.</td>
</tr>

<tr>
<td>Performs one operation.</td>
<td>Performs multiple operations.</td>
</tr>

<tr>
<td>Simple syntax.</td>
<td>Function inside another function.</td>
</tr>

<tr>
<td>Example: UPPER(Name)</td>
<td>Example: UPPER(SUBSTR(Name,1,5))</td>
</tr>

</table>

<hr>

<h3>Class Summary</h3>

<ul>

<li>Nested Functions are functions used inside another function.</li>

<li>Oracle always executes the innermost function first.</li>

<li>The result of the inner function becomes the input for the outer function.</li>

<li>Nested Functions help perform multiple operations in a single SQL statement.</li>

<li>They make SQL queries more powerful, flexible, and efficient.</li>

<li>Common combinations include UPPER(SUBSTR()), ROUND(AVG()), TO_CHAR(SYSDATE), and LENGTH(TRIM()).</li>

</ul>

`;

let oracleInstallationContent = `

<h3>Installation of Oracle Database Software</h3>

<p>
Good morning students!
</p>

<p>
Today we are going to learn how to install <strong>Oracle Database</strong> on a Windows computer.
Before we can write SQL queries or create databases, we must first install Oracle Database software and the required tools.
</p>

<p>
Oracle provides different editions of its database software. For beginners and students, the most commonly used editions are <strong>Oracle Database Express Edition (Oracle XE)</strong> and <strong>Oracle Database Enterprise Edition</strong>.
</p>

<hr>

<h3>What is Oracle Database?</h3>

<p>
Oracle Database is a <strong>Relational Database Management System (RDBMS)</strong> developed by Oracle Corporation. It is used to store, manage, retrieve, and secure data efficiently.
</p>

<p>
Oracle Database is widely used in banks, hospitals, schools, e-commerce websites, government organizations, and large enterprises because of its performance, reliability, and security.
</p>

<hr>

<h3>Oracle Software Required</h3>

<p>
To start learning Oracle SQL, we need the following software packages:
</p>

<table class="notes-table">

<tr>
<th>Software</th>
<th>Purpose</th>
</tr>

<tr>
<td>Oracle Database XE</td>
<td>Stores and manages the database.</td>
</tr>

<tr>
<td>Oracle SQL Developer</td>
<td>Graphical tool used to write and execute SQL and PL/SQL programs.</td>
</tr>

<tr>
<td>Java Development Kit (JDK)</td>
<td>Required for some versions of SQL Developer.</td>
</tr>

</table>

<hr>

<h3>System Requirements</h3>

<table class="notes-table">

<tr>
<th>Requirement</th>
<th>Recommended</th>
</tr>

<tr>
<td>Operating System</td>
<td>Windows 10 or Windows 11 (64-bit)</td>
</tr>

<tr>
<td>RAM</td>
<td>Minimum 4 GB (8 GB Recommended)</td>
</tr>

<tr>
<td>Processor</td>
<td>Intel Core i3 or above</td>
</tr>

<tr>
<td>Free Disk Space</td>
<td>At least 15 GB</td>
</tr>

<tr>
<td>Java</td>
<td>Latest JDK (if required)</td>
</tr>

</table>

<hr>

<h3>Steps to Install Oracle Database XE</h3>

<ol>

<li>Download the Oracle Database XE setup file from the Oracle website.</li>

<li>Double-click the installer to start the installation.</li>

<li>Accept the License Agreement.</li>

<li>Select the installation folder.</li>

<li>Create and remember the password for the <strong>SYS</strong> and <strong>SYSTEM</strong> users.</li>

<li>Click the <strong>Install</strong> button.</li>

<li>Wait until the installation is completed.</li>

<li>Click <strong>Finish</strong> to complete the setup.</li>

</ol>

<hr>

<h3>Installing Oracle SQL Developer</h3>

<p>
Oracle SQL Developer is a free graphical tool used to connect to Oracle Database and execute SQL queries.
</p>

<ol>

<li>Download Oracle SQL Developer.</li>

<li>Extract the downloaded ZIP file (if applicable).</li>

<li>Open the SQL Developer application.</li>

<li>Create a new database connection.</li>

<li>Enter the Username, Password, Host Name, Port Number, and Service Name.</li>

<li>Click <strong>Test</strong> to verify the connection.</li>

<li>If the status shows <strong>Success</strong>, click <strong>Connect</strong>.</li>

</ol>

<hr>

<h3>Default Connection Details</h3>

<table class="notes-table">

<tr>
<th>Property</th>
<th>Value</th>
</tr>

<tr>
<td>Username</td>
<td>SYSTEM</td>
</tr>

<tr>
<td>Password</td>
<td>Your installation password</td>
</tr>

<tr>
<td>Hostname</td>
<td>localhost</td>
</tr>

<tr>
<td>Port</td>
<td>1521</td>
</tr>

<tr>
<td>Service Name</td>
<td>XEPDB1 (Oracle XE 18c/21c)</td>
</tr>

</table>

<hr>

<h3>Verifying the Installation</h3>

<p>
After connecting successfully, execute the following SQL query:
</p>

<pre>
SELECT * FROM dual;
</pre>

<p>
Expected Output:
</p>

<table class="notes-table">

<tr>
<th>DUMMY</th>
</tr>

<tr>
<td>X</td>
</tr>

</table>

<p>
If you receive the above output, Oracle Database has been installed successfully.
</p>

<hr>

<h3>Common Installation Problems</h3>

<table class="notes-table">

<tr>
<th>Problem</th>
<th>Solution</th>
</tr>

<tr>
<td>Database service is not running</td>
<td>Start Oracle services from Windows Services.</td>
</tr>

<tr>
<td>Invalid Username or Password</td>
<td>Check the login credentials entered during installation.</td>
</tr>

<tr>
<td>Connection Failed</td>
<td>Verify Hostname, Port (1521), and Service Name.</td>
</tr>

<tr>
<td>Port Already in Use</td>
<td>Change the port number or stop the conflicting application.</td>
</tr>

</table>

<hr>

<h3>Advantages of Oracle Database</h3>

<ul>

<li>High performance and scalability.</li>

<li>Excellent security features.</li>

<li>Reliable backup and recovery.</li>

<li>Supports very large databases.</li>

<li>Widely used in enterprise applications.</li>

<li>Supports SQL and PL/SQL programming.</li>

</ul>

<hr>

<h3>Class Summary</h3>

<ul>

<li>Oracle Database is an RDBMS developed by Oracle Corporation.</li>

<li>Oracle Database XE is suitable for learning and small projects.</li>

<li>Oracle SQL Developer is used to write and execute SQL statements.</li>

<li>The default Oracle port is <strong>1521</strong>.</li>

<li>The default service name for Oracle XE is <strong>XEPDB1</strong>.</li>

<li>After installation, execute <strong>SELECT * FROM dual;</strong> to verify the connection.</li>

</ul>

`;

let oraclePLSQLIntroductionContent = `

<h3>Introduction to PL/SQL</h3>

<p>
Good morning students!
</p>

<p>
Today we are going to learn an important programming language used in Oracle Database called <strong>PL/SQL</strong>.
</p>

<p>
<strong>PL/SQL</strong> stands for <strong>Procedural Language/Structured Query Language</strong>. It is an extension of SQL developed by Oracle Corporation to overcome the limitations of SQL.
</p>

<p>
PL/SQL was first introduced in <strong>Oracle Database Version 6.0</strong>. It combines the power of SQL with procedural programming features such as variables, conditions, loops, functions, procedures, and exception handling.
</p>

<p>
SQL is mainly used to retrieve and manipulate data stored in database tables. However, SQL alone cannot develop complete database applications because it does not support programming concepts like decision-making and looping.
</p>

<p>
To solve this problem, Oracle introduced PL/SQL, which allows programmers to write complete database programs by combining SQL statements with procedural programming constructs.
</p>

<hr>

<h3>What is PL/SQL?</h3>

<p>
PL/SQL is Oracle's procedural programming language that extends SQL by adding programming capabilities. It allows developers to write blocks of code that contain SQL statements along with programming logic.
</p>

<p>
Using PL/SQL, we can:
</p>

<ul>

<li>Write blocks of code containing SQL statements.</li>

<li>Declare variables and constants.</li>

<li>Use conditional statements such as IF...THEN...ELSE.</li>

<li>Use looping statements such as LOOP, WHILE, and FOR LOOP.</li>

<li>Create functions and procedures.</li>

<li>Handle runtime errors using Exception Handling.</li>

<li>Group multiple SQL statements into a single logical program.</li>

</ul>

<hr>

<h3>Difference Between SQL and PL/SQL</h3>

<table class="notes-table">

<tr>
<th>SQL</th>
<th>PL/SQL</th>
</tr>

<tr>
<td>SQL stands for Structured Query Language.</td>
<td>PL/SQL stands for Procedural Language/Structured Query Language.</td>
</tr>

<tr>
<td>SQL is a Non-Procedural Language.</td>
<td>PL/SQL is a Procedural Language.</td>
</tr>

<tr>
<td>Executes one SQL statement at a time.</td>
<td>Executes multiple statements together as one program.</td>
</tr>

<tr>
<td>Supports only SQL statements.</td>
<td>Supports SQL statements and programming features.</td>
</tr>

<tr>
<td>Does not support variables.</td>
<td>Supports variables and constants.</td>
</tr>

<tr>
<td>Does not support loops.</td>
<td>Supports FOR, WHILE, and LOOP statements.</td>
</tr>

<tr>
<td>Does not support exception handling.</td>
<td>Supports Exception Handling.</td>
</tr>

<tr>
<td>Mainly used for querying data.</td>
<td>Used to develop complete database applications.</td>
</tr>

</table>

<hr>

<h3>Why Was PL/SQL Introduced?</h3>

<p>
In SQL, every query is compiled and executed separately. If an application contains many SQL statements, Oracle has to compile and execute each statement individually.
</p>

<p>
As the number of SQL statements increases, the number of compilations also increases, which reduces the overall performance of the database.
</p>

<p>
PL/SQL solves this problem by grouping multiple SQL statements into a single block. Oracle compiles the entire block only once and executes it as one unit. This reduces compilation time, minimizes network traffic, and improves database performance.
</p>

<hr>

<h3>How PL/SQL Improves Performance</h3>

<table class="notes-table">

<tr>
<th>SQL</th>
<th>PL/SQL</th>
</tr>

<tr>
<td>Every SQL statement is compiled separately.</td>
<td>Entire PL/SQL block is compiled once.</td>
</tr>

<tr>
<td>More communication between client and server.</td>
<td>Less communication between client and server.</td>
</tr>

<tr>
<td>Higher execution time.</td>
<td>Faster execution.</td>
</tr>

<tr>
<td>Lower performance.</td>
<td>Better performance.</td>
</tr>

</table>

<hr>

<h3>Features of PL/SQL</h3>

<table class="notes-table">

<tr>
<th>S.No.</th>
<th>Feature</th>
<th>Description</th>
</tr>

<tr>
<td>1</td>
<td>Improved Performance</td>
<td>Compiles and executes multiple SQL statements as a single block.</td>
</tr>

<tr>
<td>2</td>
<td>Conditional Statements</td>
<td>Supports IF...THEN...ELSE decision-making statements.</td>
</tr>

<tr>
<td>3</td>
<td>Looping Statements</td>
<td>Supports LOOP, WHILE LOOP, and FOR LOOP.</td>
</tr>

<tr>
<td>4</td>
<td>Reusability</td>
<td>Programs can be reused using Procedures and Functions.</td>
</tr>

<tr>
<td>5</td>
<td>Security</td>
<td>Programs are stored inside the database and accessed only by authorized users.</td>
</tr>

<tr>
<td>6</td>
<td>Portability</td>
<td>PL/SQL programs can be moved from one Oracle platform to another without modification.</td>
</tr>

<tr>
<td>7</td>
<td>Exception Handling</td>
<td>Supports handling of runtime errors.</td>
</tr>

<tr>
<td>8</td>
<td>Modular Programming</td>
<td>Large programs can be divided into smaller modules like Procedures, Functions, Packages, and Triggers.</td>
</tr>

</table>

<hr>

<h3>PL/SQL Architecture</h3>

<p>
PL/SQL is a <strong>Block Structured Programming Language</strong>. Every PL/SQL program is written in the form of blocks.
</p>

<p>
Oracle Database uses two engines to execute a PL/SQL program.
</p>

<table class="notes-table">

<tr>
<th>Engine</th>
<th>Purpose</th>
</tr>

<tr>
<td>SQL Engine</td>
<td>Executes SQL statements such as SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER, and DROP.</td>
</tr>

<tr>
<td>PL/SQL Engine</td>
<td>Executes procedural statements such as variables, loops, conditions, procedures, and exception handling.</td>
</tr>

</table>

<hr>

<h3>Working of PL/SQL Architecture</h3>

<p>
Whenever we submit a PL/SQL block to the Oracle Server, Oracle first sends the block to the <strong>PL/SQL Engine</strong>.
</p>

<p>
The PL/SQL Engine analyzes the program and separates the SQL statements from the procedural statements.
</p>

<ul>

<li>The SQL statements are forwarded to the <strong>SQL Engine</strong> for execution.</li>

<li>The PL/SQL statements are executed by the <strong>PL/SQL Engine</strong>.</li>

<li>Finally, both results are combined and returned to the user.</li>

</ul>

<hr>

<h3>PL/SQL Execution Process</h3>

<table class="notes-table">

<tr>
<th>Step</th>
<th>Description</th>
</tr>

<tr>
<td>Step 1</td>
<td>User submits a PL/SQL block.</td>
</tr>

<tr>
<td>Step 2</td>
<td>PL/SQL Engine receives the block.</td>
</tr>

<tr>
<td>Step 3</td>
<td>SQL statements are sent to the SQL Engine.</td>
</tr>

<tr>
<td>Step 4</td>
<td>Procedural statements are executed by the PL/SQL Engine.</td>
</tr>

<tr>
<td>Step 5</td>
<td>Oracle combines the results and returns the output.</td>
</tr>

</table>

<hr>

<h3>Advantages of PL/SQL</h3>

<ul>

<li>Improves database performance.</li>

<li>Reduces network traffic.</li>

<li>Supports structured programming.</li>

<li>Supports modular programming.</li>

<li>Provides better security.</li>

<li>Supports code reusability.</li>

<li>Supports exception handling.</li>

<li>Makes database applications faster and easier to maintain.</li>

</ul>

<hr>

<h3>Class Summary</h3>

<ul>

<li>PL/SQL is an extension of SQL developed by Oracle.</li>

<li>PL/SQL was introduced in Oracle Version 6.0.</li>

<li>SQL is a Non-Procedural Language, whereas PL/SQL is a Procedural Language.</li>

<li>PL/SQL supports variables, loops, conditions, procedures, functions, and exception handling.</li>

<li>PL/SQL groups multiple SQL statements into a single block, improving performance.</li>

<li>Oracle uses two engines for execution: SQL Engine and PL/SQL Engine.</li>

<li>PL/SQL is widely used for developing secure, fast, and efficient database applications.</li>

</ul>

`;

let oraclePLSQLBlocksContent = `

<h3>PL/SQL Blocks</h3>

<p>
Good morning students!
</p>

<p>
In the previous lecture, we learned that PL/SQL is a <strong>Block Structured Programming Language</strong>. Every PL/SQL program is written in the form of a block.
</p>

<p>
Today, we are going to learn about <strong>PL/SQL Blocks</strong>, their types, structure, and components.
</p>

<hr>

<h3>What is a Block?</h3>

<p>
A <strong>Block</strong> is a collection (set) of SQL and PL/SQL statements that are compiled and executed by Oracle as a <strong>single unit</strong>.
</p>

<p>
Instead of executing each SQL statement individually, Oracle executes the complete block at one time. This improves performance and makes programs easier to write and maintain.
</p>

<hr>

<h3>Types of PL/SQL Blocks</h3>

<p>
PL/SQL supports the following two types of blocks:
</p>

<table class="notes-table">

<tr>
<th>S.No.</th>
<th>Block Type</th>
<th>Description</th>
</tr>

<tr>
<td>1</td>
<td>Anonymous Block</td>
<td>An unnamed PL/SQL block that is written and executed only once.</td>
</tr>

<tr>
<td>2</td>
<td>Sub Block</td>
<td>A block written inside another PL/SQL block.</td>
</tr>

</table>


<hr>

<h3>Anonymous Block</h3>

<p>
An <strong>Anonymous Block</strong> is an unnamed PL/SQL block. It is the simplest type of PL/SQL program and is executed only once.
</p>

<p>
Anonymous Blocks are generally used for testing SQL statements, learning PL/SQL, and writing small programs.
</p>

<p>
An Anonymous Block consists of three sections:
</p>

<ol>

<li>Declaration Block</li>

<li>Execution Block</li>

<li>Exception Block</li>

</ol>

<hr>

<h3>1. Declaration Block</h3>

<p>
The Declaration Block starts with the <strong>DECLARE</strong> keyword.
</p>

<p>
It is used to declare:
</p>

<ul>

<li>Variables</li>

<li>Constants</li>

<li>Cursors</li>

<li>User-defined Exceptions</li>

</ul>

<p>
This block is <strong>Optional</strong>. If no variables or declarations are required, we can omit this section.
</p>

<h4>Example</h4>

<pre>
DECLARE
   v_name VARCHAR2(30);
   v_salary NUMBER;
</pre>

<hr>

<h3>2. Execution Block</h3>

<p>
The Execution Block starts with the <strong>BEGIN</strong> keyword and ends with the <strong>END</strong> keyword.
</p>

<p>
This block contains the executable statements of the program such as:
</p>

<ul>

<li>SQL Statements (SELECT, INSERT, UPDATE, DELETE)</li>

<li>Assignments</li>

<li>Conditional Statements</li>

<li>Loops</li>

<li>Procedure Calls</li>

</ul>

<p>
The Execution Block is <strong>Mandatory</strong>. Every PL/SQL program must contain a BEGIN...END block.
</p>

<h4>Example</h4>

<pre>
BEGIN
   DBMS_OUTPUT.PUT_LINE('Welcome to PL/SQL');
END;
</pre>

<hr>

<h3>3. Exception Block</h3>

<p>
The Exception Block starts with the <strong>EXCEPTION</strong> keyword.
</p>

<p>
It is used to handle runtime errors that occur while executing the program.
</p>

<p>
This block is <strong>Optional</strong>. If no exception handling is required, this section can be omitted.
</p>

<h4>Example</h4>

<pre>
EXCEPTION
   WHEN OTHERS THEN
      DBMS_OUTPUT.PUT_LINE('An Error Occurred');
</pre>

<hr>

<h3>Basic Structure of a PL/SQL Block</h3>

<pre>
DECLARE
   -- Variable declarations (Optional)

BEGIN
   -- SQL Statements
   -- PL/SQL Statements
   -- Executable Code (Mandatory)

EXCEPTION
   -- Exception Handling (Optional)

END;
/
</pre>

<hr>

<h3>Explanation of PL/SQL Block Structure</h3>

<table class="notes-table">

<tr>
<th>Section</th>
<th>Keyword</th>
<th>Purpose</th>
<th>Required</th>
</tr>

<tr>
<td>Declaration Block</td>
<td>DECLARE</td>
<td>Declare variables, constants, cursors, and exceptions.</td>
<td>Optional</td>
</tr>

<tr>
<td>Execution Block</td>
<td>BEGIN...END</td>
<td>Contains executable SQL and PL/SQL statements.</td>
<td>Mandatory</td>
</tr>

<tr>
<td>Exception Block</td>
<td>EXCEPTION</td>
<td>Handles runtime errors.</td>
<td>Optional</td>
</tr>

</table>

<hr>

<h3>Complete Example of an Anonymous Block</h3>

<pre>
DECLARE
   v_name VARCHAR2(20) := 'Rahul';

BEGIN
   DBMS_OUTPUT.PUT_LINE('Student Name : ' || v_name);

EXCEPTION
   WHEN OTHERS THEN
      DBMS_OUTPUT.PUT_LINE('Some Error Occurred');

END;
/
</pre>

<hr>

<h3>Output</h3>

<table class="notes-table">

<tr>
<th>Result</th>
</tr>

<tr>
<td>Student Name : Rahul</td>
</tr>

</table>

<hr>

<h3>Important Points to Remember</h3>

<ul>

<li>PL/SQL is a Block Structured Programming Language.</li>

<li>A Block is compiled and executed as a single unit.</li>

<li>DECLARE block is optional.</li>

<li>BEGIN...END block is mandatory.</li>

<li>EXCEPTION block is optional.</li>

<li>Every PL/SQL block must end with the <strong>END;</strong> statement.</li>

<li>The <strong>/</strong> symbol is required in SQL*Plus to execute the block, but it is not required in Oracle SQL Developer.</li>

</ul>

<hr>

<h3>Advantages of PL/SQL Blocks</h3>

<ul>

<li>Improve database performance.</li>

<li>Reduce compilation time.</li>

<li>Support modular programming.</li>

<li>Improve code readability.</li>

<li>Support exception handling.</li>

<li>Make programs easier to debug and maintain.</li>

</ul>

<hr>

<h3>Sub Block (Nested Block) in PL/SQL</h3>

<p>

Good morning students!

In the previous lecture, we learned about Anonymous Blocks.

Now, let us understand another important concept in PL/SQL called the <strong>Sub Block</strong> (also known as a <strong>Nested Block</strong>).

A Sub Block is simply a PL/SQL block written inside another PL/SQL block.

Each block has its own DECLARE, BEGIN, EXCEPTION, and END sections.

</p>

<hr>

<h3>What is a Sub Block?</h3>

<p>

A <strong>Sub Block</strong> (Nested Block) is a PL/SQL block written inside another PL/SQL block.

The outer block is called the <strong>Main Block</strong>, and the inner block is called the <strong>Sub Block</strong>.

Each block executes independently and may contain its own variables, executable statements, and exception handlers.

</p>

<hr>

<h3>Why Do We Use Sub Blocks?</h3>

<ul>

<li>To divide a large program into smaller logical parts.</li>

<li>To declare local variables.</li>

<li>To handle exceptions separately.</li>

<li>To improve readability and maintenance.</li>

<li>To continue execution even if one block generates an error.</li>

</ul>

<hr>

<h3>Structure of a Nested Block</h3>

<pre>
DECLARE
   -- Outer Block Declarations

BEGIN

   -- Outer Block Statements

   DECLARE
      -- Inner Block Declarations
   BEGIN
      -- Inner Block Statements
   EXCEPTION
      WHEN OTHERS THEN
         -- Inner Exception Handling
   END;

   -- Outer Block Continues

EXCEPTION
   WHEN OTHERS THEN
      -- Outer Exception Handling
END;
/
</pre>

<hr>

<h3>Flow of Execution</h3>

<table class="notes-table">

<tr>
<th>Step</th>
<th>Description</th>
</tr>

<tr>
<td>1</td>
<td>Outer block starts execution.</td>
</tr>

<tr>
<td>2</td>
<td>Control enters the inner (sub) block.</td>
</tr>

<tr>
<td>3</td>
<td>If an exception occurs, the inner exception block handles it.</td>
</tr>

<tr>
<td>4</td>
<td>Control returns to the outer block.</td>
</tr>

<tr>
<td>5</td>
<td>The outer block continues execution normally.</td>
</tr>

</table>

<hr>

<h3>Example : Using Sub Blocks for Multiple Exceptions</h3>

<pre>
DECLARE
   v_name   employees.emp_name%TYPE;
   v_salary NUMBER;
   v_result NUMBER;

BEGIN

   -- Sub Block 1 : NO_DATA_FOUND

   BEGIN

      SELECT emp_name
      INTO v_name
      FROM employees
      WHERE emp_id = 999;

      DBMS_OUTPUT.PUT_LINE(v_name);

   EXCEPTION

      WHEN NO_DATA_FOUND THEN

         DBMS_OUTPUT.PUT_LINE('NO_DATA_FOUND handled');

   END;


   -- Sub Block 2 : TOO_MANY_ROWS

   BEGIN

      SELECT emp_name
      INTO v_name
      FROM employees
      WHERE dept_id = 10;

      DBMS_OUTPUT.PUT_LINE(v_name);

   EXCEPTION

      WHEN TOO_MANY_ROWS THEN

         DBMS_OUTPUT.PUT_LINE('TOO_MANY_ROWS handled');

   END;


   -- Sub Block 3 : ZERO_DIVIDE

   BEGIN

      v_result := 100/0;

   EXCEPTION

      WHEN ZERO_DIVIDE THEN

         DBMS_OUTPUT.PUT_LINE('ZERO_DIVIDE handled');

   END;


   -- Sub Block 4 : INVALID_NUMBER

   BEGIN

      v_salary := TO_NUMBER('ABC123');

   EXCEPTION

      WHEN INVALID_NUMBER THEN

         DBMS_OUTPUT.PUT_LINE('INVALID_NUMBER handled');

   END;


   -- Sub Block 5 : DUP_VAL_ON_INDEX

   BEGIN

      INSERT INTO employees(emp_id,emp_name,salary)
      VALUES(101,'Pradeep',50000);

   EXCEPTION

      WHEN DUP_VAL_ON_INDEX THEN

         DBMS_OUTPUT.PUT_LINE('DUP_VAL_ON_INDEX handled');

   END;

   DBMS_OUTPUT.PUT_LINE('Program Completed Successfully');

END;
/
</pre>

<hr>

<h3>Advantages of Sub Blocks</h3>

<ul>

<li>Local exception handling.</li>

<li>Improves modular programming.</li>

<li>Variables remain local to the block.</li>

<li>Program continues after handling an inner exception.</li>

<li>Easy to read and maintain.</li>

</ul>

<hr>

<h3>Difference Between Main Block and Sub Block</h3>

<table class="notes-table">

<tr>
<th>Main Block</th>
<th>Sub Block</th>
</tr>

<tr>
<td>Outer PL/SQL block.</td>
<td>Block inside another block.</td>
</tr>

<tr>
<td>Starts program execution.</td>
<td>Executes only when control enters it.</td>
</tr>

<tr>
<td>Can contain many sub blocks.</td>
<td>Can also contain another nested block.</td>
</tr>

<tr>
<td>May have its own exception handler.</td>
<td>Can handle exceptions locally.</td>
</tr>

</table>

<hr>

<h3>Important Note</h3>

<p>

Do not confuse a <strong>Sub Block</strong> with Oracle Stored Program Units.

A Sub Block is simply a nested PL/SQL block.

The following are <strong>Stored Program Units</strong> that are stored permanently in the Oracle Database:

</p>

<table class="notes-table">

<tr>
<th>Stored Program Unit</th>
<th>Purpose</th>
</tr>

<tr>
<td>Stored Procedure</td>
<td>Performs a specific task.</td>
</tr>

<tr>
<td>Stored Function</td>
<td>Returns a value.</td>
</tr>

<tr>
<td>Package</td>
<td>Groups related procedures and functions.</td>
</tr>

<tr>
<td>Trigger</td>
<td>Executes automatically when an event occurs.</td>
</tr>

</table>

<hr>

<h3>Class Summary</h3>

<ul>

<li>A Sub Block is also called a Nested Block.</li>

<li>It is a PL/SQL block written inside another block.</li>

<li>Each block has its own DECLARE, BEGIN, EXCEPTION, and END.</li>

<li>Exceptions can be handled locally inside the sub block.</li>

<li>After handling the exception, control returns to the outer block.</li>

<li>Stored Procedures, Functions, Packages, and Triggers are Stored Program Units, not Sub Blocks.</li>

</ul>
`;


let oraclePLSQLVariablesContent1 = `

<h3>Variables in PL/SQL</h3>

<p>
Good morning students!
</p>

<p>
In the previous lecture, we learned about PL/SQL Blocks. Today, we are going to learn one of the most important concepts in PL/SQL programming called <strong>Variables</strong>.
</p>

<p>
A variable is a named memory location used to store data temporarily while a PL/SQL program is executing. The value stored in a variable can change during program execution.
</p>

<p>
Variables make PL/SQL programs dynamic because they allow us to store user input, perform calculations, retrieve data from tables, and display results.
</p>

<hr>

<h3>Why Do We Use Variables?</h3>

<ul>

<li>To store values temporarily.</li>

<li>To perform calculations.</li>

<li>To store user input.</li>

<li>To retrieve data from database tables.</li>

<li>To display output to the user.</li>

<li>To make programs flexible and reusable.</li>

</ul>

<hr>

<h3>Steps to Use Variables in PL/SQL</h3>

<table class="notes-table">

<tr>
<th>Step</th>
<th>Description</th>
</tr>

<tr>
<td>Step 1</td>
<td>Declare the variable.</td>
</tr>

<tr>
<td>Step 2</td>
<td>Assign a value to the variable.</td>
</tr>

<tr>
<td>Step 3</td>
<td>Use or display the variable.</td>
</tr>

</table>

<hr>

<h3>Step 1 : Declaring Variables</h3>

<p>
Before using a variable, it must be declared in the <strong>DECLARE</strong> section of the PL/SQL block.
</p>

<h4>Syntax</h4>

<pre>
DECLARE
   variable_name datatype(size);
BEGIN
   -- Executable Statements
END;
/
</pre>

<h4>Example</h4>

<pre>
DECLARE
   A NUMBER(10);
   B VARCHAR2(10);
BEGIN
   NULL;
END;
/
</pre>

<table class="notes-table">

<tr>
<th>Variable</th>
<th>Datatype</th>
<th>Purpose</th>
</tr>

<tr>
<td>A</td>
<td>NUMBER(10)</td>
<td>Stores numeric values.</td>
</tr>

<tr>
<td>B</td>
<td>VARCHAR2(10)</td>
<td>Stores character data.</td>
</tr>

</table>

<hr>

<h3>Step 2 : Assigning Values to Variables</h3>

<p>
After declaring variables, we can store values using the <strong>Assignment Operator (:=)</strong>.
</p>

<h4>Syntax</h4>

<pre>
variable_name := value;
</pre>

<h4>Example</h4>

<pre>
A := 1021;
B := 'SAI';
</pre>

<h3>Assignment Operator vs Comparison Operator</h3>

<table class="notes-table">

<tr>
<th>Operator</th>
<th>Meaning</th>
</tr>

<tr>
<td>:=</td>
<td>Assignment Operator (Stores value in a variable)</td>
</tr>

<tr>
<td>=</td>
<td>Comparison Operator (Compares two values)</td>
</tr>

</table>

<hr>

<h3>Step 3 : Printing Variable Values</h3>

<p>
To display the value stored in a variable, Oracle provides the <strong>DBMS_OUTPUT.PUT_LINE()</strong> procedure.
</p>

<h4>Syntax</h4>

<pre>
DBMS_OUTPUT.PUT_LINE(variable_name);

OR

DBMS_OUTPUT.PUT_LINE('Message : ' || variable_name);
</pre>

<hr>

<h3>Example 1 : Printing Variables</h3>

<pre>
SET SERVEROUTPUT ON;

DECLARE
   A VARCHAR2(20);
   B VARCHAR2(20);

BEGIN

   A := 'HELLO';
   B := 'WORLD';

   DBMS_OUTPUT.PUT_LINE(A);
   DBMS_OUTPUT.PUT_LINE(B);
   DBMS_OUTPUT.PUT_LINE('WELCOME TO PL/SQL ' || A);

END;
/
</pre>

<h4>Output</h4>

<table class="notes-table">

<tr>
<th>Result</th>
</tr>

<tr>
<td>HELLO</td>
</tr>

<tr>
<td>WORLD</td>
</tr>

<tr>
<td>WELCOME TO PL/SQL HELLO</td>
</tr>

</table>

<hr>

<h3>SET SERVEROUTPUT ON</h3>

<p>
The <strong>DBMS_OUTPUT.PUT_LINE()</strong> procedure sends output to the PL/SQL output buffer.
</p>

<p>
To display this output on the screen in SQL*Plus, we must enable the output using:
</p>

<pre>
SET SERVEROUTPUT ON;
</pre>

<table class="notes-table">

<tr>
<th>Command</th>
<th>Description</th>
</tr>

<tr>
<td>SET SERVEROUTPUT ON</td>
<td>Displays PL/SQL output.</td>
</tr>

<tr>
<td>SET SERVEROUTPUT OFF</td>
<td>Hides PL/SQL output (Default).</td>
</tr>

</table>

<p><strong>Note:</strong></p>

<ul>

<li>In SQL*Plus, SQL statement output is displayed automatically.</li>

<li>PL/SQL output must be enabled manually using <strong>SET SERVEROUTPUT ON</strong>.</li>

<li>In Oracle SQL Developer, enable the <strong>DBMS Output</strong> panel to view output.</li>

</ul>

<hr>

<h3>Example 2 : Printing Multiple Variables</h3>

<pre>
SET SERVEROUTPUT ON;

DECLARE

   X NUMBER(10) := 100;
   Y NUMBER(10);

BEGIN

   Y := 200;

   DBMS_OUTPUT.PUT_LINE('VARIABLE VALUES ARE : ' || X || ', ' || Y);

END;
/
</pre>

<h4>Output</h4>

<table class="notes-table">

<tr>
<th>Result</th>
</tr>

<tr>
<td>VARIABLE VALUES ARE : 100, 200</td>
</tr>

</table>

<hr>

<h3>Example 3 : Sum of Two Numbers at Runtime</h3>

<p>
Oracle allows us to accept values from the user at runtime using the substitution variable <strong>&</strong>.
</p>

<pre>
SET SERVEROUTPUT ON;

DECLARE

   X NUMBER(2);
   Y NUMBER(2);
   Z NUMBER(10);

BEGIN

   X := &X;
   Y := &Y;

   Z := X + Y;

   DBMS_OUTPUT.PUT_LINE('SUM = ' || Z);

END;
/
</pre>

<h4>Sample Input</h4>

<table class="notes-table">

<tr>
<th>Variable</th>
<th>Value</th>
</tr>

<tr>
<td>X</td>
<td>25</td>
</tr>

<tr>
<td>Y</td>
<td>15</td>
</tr>

</table>

<h4>Output</h4>

<table class="notes-table">

<tr>
<th>Result</th>
</tr>

<tr>
<td>SUM = 40</td>
</tr>

</table>

<hr>

<h3>Important Points to Remember</h3>

<ul>

<li>Variables are declared in the DECLARE section.</li>

<li>Variables store data temporarily during program execution.</li>

<li>The := operator assigns values to variables.</li>

<li>The = operator is used for comparison.</li>

<li>DBMS_OUTPUT.PUT_LINE() displays output.</li>

<li>SET SERVEROUTPUT ON is required to display PL/SQL output in SQL*Plus.</li>

<li>The & symbol accepts values from the user at runtime.</li>

</ul>

<hr>

<h3>Class Summary</h3>

<ul>

<li>A variable is a named memory location used to store data.</li>

<li>Every variable must be declared before use.</li>

<li>Values are assigned using the := operator.</li>

<li>DBMS_OUTPUT.PUT_LINE() is used to print variable values.</li>

<li>SET SERVEROUTPUT ON enables PL/SQL output.</li>

<li>Runtime input can be accepted using substitution variables (&).</li>

</ul>

`;


let oraclePLSQLVariablesContent2 = `

<h3>SELECT...INTO Statement in PL/SQL</h3>

<p>
Good morning students!
</p>

<p>
In the previous lecture, we learned how to declare variables, assign values to them, and display their contents using <strong>DBMS_OUTPUT.PUT_LINE()</strong>.
</p>

<p>
Until now, we stored values manually in variables. However, in real-world applications, data is usually stored in database tables. To retrieve data from a table and store it into variables, PL/SQL provides the <strong>SELECT...INTO</strong> statement.
</p>

<hr>

<h3>What is SELECT...INTO Statement?</h3>

<p>
The <strong>SELECT...INTO</strong> statement is used to retrieve data from a database table and store the selected column values into PL/SQL variables.
</p>

<p>
It is commonly used whenever a PL/SQL program needs to read data from a table before performing calculations or other operations.
</p>

<p>
The <strong>SELECT...INTO</strong> statement always returns <strong>exactly one row</strong>. Therefore, the query should return only one record.
</p>

<hr>

<h3>Purpose of SELECT...INTO</h3>

<ul>

<li>Retrieve data from database tables.</li>

<li>Store column values into PL/SQL variables.</li>

<li>Use retrieved values for calculations or processing.</li>

<li>Display table data inside PL/SQL programs.</li>

</ul>

<hr>

<h3>Rules of SELECT...INTO</h3>

<table class="notes-table">

<tr>
<th>Rule</th>
<th>Description</th>
</tr>

<tr>
<td>One Row Only</td>
<td>The query must return exactly one row.</td>
</tr>

<tr>
<td>Matching Variables</td>
<td>The number of variables in the INTO clause must match the number of selected columns.</td>
</tr>

<tr>
<td>Execution Block</td>
<td>SELECT...INTO is written inside the BEGIN...END block.</td>
</tr>

<tr>
<td>Compatible Datatypes</td>
<td>The variable datatype should match the datatype of the selected column.</td>
</tr>

</table>

<hr>

<h3>Syntax</h3>

<pre>
SELECT column_name1, column_name2, ...
INTO variable1, variable2, ...
FROM table_name
WHERE condition;
</pre>

<hr>

<h3>Execution Flow</h3>

<table class="notes-table">

<tr>
<th>Step</th>
<th>Description</th>
</tr>

<tr>
<td>Step 1</td>
<td>Oracle executes the SELECT statement.</td>
</tr>

<tr>
<td>Step 2</td>
<td>The selected column values are stored into variables.</td>
</tr>

<tr>
<td>Step 3</td>
<td>The variables can be used anywhere in the PL/SQL block.</td>
</tr>

</table>

<hr>

<h3>Example 1 : Display Employee Name and Salary</h3>

<p>
Write a PL/SQL program to display the Employee Name and Salary from the EMP table for the given Employee Number using the <strong>SELECT...INTO</strong> statement.
</p>

<pre>
SET SERVEROUTPUT ON;

DECLARE

   V_ENAME VARCHAR2(10);
   V_SAL   NUMBER(10);

BEGIN

   SELECT ENAME, SAL
   INTO V_ENAME, V_SAL
   FROM EMP
   WHERE EMPNO = &EMPNO;

   DBMS_OUTPUT.PUT_LINE('Employee Name : ' || V_ENAME);
   DBMS_OUTPUT.PUT_LINE('Salary        : ' || V_SAL);

END;
/
</pre>

<h3>Sample Input</h3>

<table class="notes-table">

<tr>
<th>Enter Employee Number</th>
</tr>

<tr>
<td>7788</td>
</tr>

</table>

<h3>Output</h3>

<table class="notes-table">

<tr>
<th>Result</th>
</tr>

<tr>
<td>Employee Name : SCOTT</td>
</tr>

<tr>
<td>Salary : 3000</td>
</tr>

</table>

<hr>

<h3>How the Above Program Works</h3>

<table class="notes-table">

<tr>
<th>Statement</th>
<th>Explanation</th>
</tr>

<tr>
<td>DECLARE</td>
<td>Declares variables to store employee name and salary.</td>
</tr>

<tr>
<td>SELECT ENAME, SAL</td>
<td>Reads the ENAME and SAL columns from the EMP table.</td>
</tr>

<tr>
<td>INTO V_ENAME, V_SAL</td>
<td>Stores the retrieved values into variables.</td>
</tr>

<tr>
<td>WHERE EMPNO=&EMPNO</td>
<td>Fetches only the employee entered by the user.</td>
</tr>

<tr>
<td>DBMS_OUTPUT.PUT_LINE()</td>
<td>Displays the retrieved values.</td>
</tr>

</table>

<hr>

<h3>Important Notes</h3>

<ul>

<li>The SELECT...INTO statement is used only inside PL/SQL blocks.</li>

<li>It must return exactly one row.</li>

<li>If no row is found, Oracle raises the <strong>NO_DATA_FOUND</strong> exception.</li>

<li>If more than one row is returned, Oracle raises the <strong>TOO_MANY_ROWS</strong> exception.</li>

<li>The number of selected columns and variables must always be equal.</li>

</ul>

<hr>

<h3>Common Errors</h3>

<table class="notes-table">

<tr>
<th>Error</th>
<th>Reason</th>
</tr>

<tr>
<td>NO_DATA_FOUND</td>
<td>No record satisfies the WHERE condition.</td>
</tr>

<tr>
<td>TOO_MANY_ROWS</td>
<td>The query returns more than one row.</td>
</tr>

<tr>
<td>Datatype Mismatch</td>
<td>The variable datatype does not match the selected column datatype.</td>
</tr>

</table>

<hr>

<h3>Advantages of SELECT...INTO</h3>

<ul>

<li>Retrieves table data directly into variables.</li>

<li>Reduces manual coding.</li>

<li>Makes PL/SQL programs dynamic.</li>

<li>Allows retrieved data to be reused throughout the program.</li>

<li>Improves program readability and efficiency.</li>

</ul>

<hr>

<h3>Class Summary</h3>

<ul>

<li>SELECT...INTO retrieves data from a table and stores it into variables.</li>

<li>It is used only inside the execution block of a PL/SQL program.</li>

<li>The query must return exactly one row.</li>

<li>The number of selected columns and variables must be the same.</li>

<li>SELECT...INTO is one of the most frequently used statements in PL/SQL programming.</li>

</ul>

`;


let oraclePLSQLVariablesContent3 = `

<h3>Variable Attributes (Anchor Notations) in PL/SQL</h3>

<p>
Good morning students!
</p>

<p>
In the previous lecture, we learned how to declare variables by specifying their datatypes manually.
</p>

<p>
Today, we are going to learn about <strong>Variable Attributes</strong>, also known as <strong>Anchor Notations</strong>. These attributes make our PL/SQL programs more flexible and easier to maintain.
</p>

<hr>

<h3>What are Variable Attributes?</h3>

<p>
Normally, while declaring a variable, we specify its datatype manually.
</p>

<pre>
DECLARE
   V_NAME VARCHAR2(30);
   V_SAL  NUMBER(10);
</pre>

<p>
However, if the datatype of the corresponding database column changes in the future, we must also modify the datatype of the PL/SQL variable manually.
</p>

<p>
To avoid this problem, Oracle provides <strong>Variable Attributes</strong> (Anchor Notations).
</p>

<p>
A Variable Attribute allows a variable to automatically inherit its datatype from a table column or an entire table row.
</p>

<hr>

<h3>Why Do We Use Variable Attributes?</h3>

<ul>

<li>To avoid manually specifying datatypes.</li>

<li>To reduce programming errors.</li>

<li>To make programs easier to maintain.</li>

<li>To automatically adapt if the table structure changes.</li>

<li>To improve code readability.</li>

</ul>

<hr>

<h3>Advantages of Variable Attributes</h3>

<table class="notes-table">

<tr>
<th>Advantage</th>
<th>Description</th>
</tr>

<tr>
<td>Automatic Datatype</td>
<td>The datatype is automatically taken from the table.</td>
</tr>

<tr>
<td>Easy Maintenance</td>
<td>No need to modify the PL/SQL program when the table datatype changes.</td>
</tr>

<tr>
<td>Less Coding</td>
<td>Reduces manual datatype declarations.</td>
</tr>

<tr>
<td>Reliable</td>
<td>Minimizes datatype mismatch errors.</td>
</tr>

</table>

<hr>

<h3>Types of Variable Attributes</h3>

<p>
PL/SQL provides two types of Variable Attributes.
</p>

<table class="notes-table">

<tr>
<th>S.No.</th>
<th>Attribute</th>
<th>Description</th>
</tr>

<tr>
<td>1</td>
<td>Column Level Attribute (%TYPE)</td>
<td>Represents the datatype of a single column.</td>
</tr>

<tr>
<td>2</td>
<td>Row Level Attribute (%ROWTYPE)</td>
<td>Represents an entire row of a table.</td>
</tr>

</table>

<hr>

<h3>1. Column Level Attribute (%TYPE)</h3>

<p>
The <strong>%TYPE</strong> attribute is used to declare a variable with the same datatype as a specific table column.
</p>

<p>
Instead of writing the datatype manually, Oracle automatically copies the datatype of the selected column.
</p>

<hr>

<h3>Syntax</h3>

<pre>
variable_name
table_name.column_name%TYPE;
</pre>

<hr>

<h3>Example</h3>

<pre>
DECLARE

   V_ENAME EMP.ENAME%TYPE;
   V_SAL   EMP.SAL%TYPE;

BEGIN

   NULL;

END;
/
</pre>

<p>
Here,
</p>

<ul>

<li>V_ENAME automatically gets the datatype of EMP.ENAME.</li>

<li>V_SAL automatically gets the datatype of EMP.SAL.</li>

</ul>

<hr>

<h3>Example 1 : Using %TYPE with SELECT...INTO</h3>

<pre>
SET SERVEROUTPUT ON;

DECLARE

   V_ENAME EMP.ENAME%TYPE;
   V_SAL   EMP.SAL%TYPE;

BEGIN

   SELECT ENAME, SAL
   INTO V_ENAME, V_SAL
   FROM EMP
   WHERE EMPNO=&EMPNO;

   DBMS_OUTPUT.PUT_LINE('Employee Name : ' || V_ENAME);
   DBMS_OUTPUT.PUT_LINE('Salary : ' || V_SAL);

END;
/
</pre>

<h3>Sample Output</h3>

<table class="notes-table">

<tr>
<th>Input</th>
<th>Output</th>
</tr>

<tr>
<td>7788</td>
<td>SCOTT, 3000</td>
</tr>

</table>

<hr>

<h3>Example 2 : Using %TYPE with INSERT</h3>

<pre>
DECLARE

   V_EMP_ID EMPLOYEES.EMP_ID%TYPE := 200;
   V_NAME   EMPLOYEES.EMP_NAME%TYPE := 'Ravi';

BEGIN

   INSERT INTO EMPLOYEES(EMP_ID, EMP_NAME)
   VALUES(V_EMP_ID, V_NAME);

END;
/
</pre>

<p>
In this example, both variables automatically inherit their datatypes from the EMPLOYEES table columns.
</p>

<hr>

<h3>Important Points about %TYPE</h3>

<ul>

<li>Represents only one column.</li>

<li>Automatically inherits the datatype.</li>

<li>Automatically adjusts when the table column datatype changes.</li>

<li>Reduces datatype mismatch errors.</li>

</ul>

<hr>

<h3>Difference Between Manual Datatype and %TYPE</h3>

<table class="notes-table">

<tr>
<th>Manual Datatype</th>
<th>%TYPE</th>
</tr>

<tr>
<td>Datatype is written manually.</td>
<td>Datatype is taken automatically.</td>
</tr>

<tr>
<td>Needs modification when the table changes.</td>
<td>No modification required.</td>
</tr>

<tr>
<td>Higher chance of datatype mismatch.</td>
<td>Very low chance of datatype mismatch.</td>
</tr>

<tr>
<td>Less flexible.</td>
<td>Highly flexible.</td>
</tr>

</table>

<hr>

<h3>Class Summary</h3>

<ul>

<li>Variable Attributes are also called Anchor Notations.</li>

<li>They automatically inherit datatypes from database objects.</li>

<li>Oracle provides two Variable Attributes: %TYPE and %ROWTYPE.</li>

<li>%TYPE represents a single table column.</li>

<li>%TYPE makes PL/SQL programs flexible and easier to maintain.</li>

<li>It is one of the most commonly used features in professional PL/SQL programming.</li>

</ul>

`;

let oraclePLSQLVariablesContent4 = `

<h3> Row Level Attribute (%ROWTYPE)</h3>

<p>
Good morning students!
</p>

<p>
In the previous lecture, we learned about the <strong>%TYPE</strong> attribute, which is used to declare a variable having the same datatype as a single table column.
</p>

<p>
Now, let us learn another important Variable Attribute called <strong>%ROWTYPE</strong>.
</p>

<p>
The <strong>%ROWTYPE</strong> attribute is used to declare a single variable that can store an entire row of a table. Instead of declaring separate variables for each column, one record variable can hold the values of all columns.
</p>

<hr>

<h3>What is %ROWTYPE?</h3>

<p>
The <strong>%ROWTYPE</strong> attribute creates a record variable whose structure is exactly the same as the structure of a database table (or cursor).
</p>

<p>
It automatically inherits:
</p>

<ul>

<li>All the columns of the table.</li>

<li>Datatype of each column.</li>

<li>Size of each column.</li>

<li>The same order of columns as defined in the table.</li>

</ul>

<p>
If the structure of the table changes in the future (for example, a new column is added or a datatype is modified), the <strong>%ROWTYPE</strong> variable automatically reflects those changes. Therefore, no modification is required in the PL/SQL program.
</p>

<hr>

<h3>Why Do We Use %ROWTYPE?</h3>

<ul>

<li>To represent an entire row using a single variable.</li>

<li>To reduce the number of variable declarations.</li>

<li>To automatically inherit column datatypes.</li>

<li>To improve readability and maintainability.</li>

<li>To avoid datatype mismatch errors.</li>

</ul>

<hr>

<h3>Syntax</h3>

<pre>
DECLARE

   variable_name table_name%ROWTYPE;

BEGIN

   ...

END;
/
</pre>

<h3>Example</h3>

<pre>
DECLARE

   EMP_RECORD EMP%ROWTYPE;

BEGIN

   NULL;

END;
/
</pre>

<p>
Here, <strong>EMP_RECORD</strong> behaves like one complete row of the EMP table.
</p>

<hr>

<h3>Example Table</h3>

<pre>
CREATE TABLE employees
(
    emp_id     NUMBER,
    emp_name   VARCHAR2(50),
    salary     NUMBER
);
</pre>

<p>
Now we can declare a single variable to represent one complete row of this table.
</p>

<hr>

<h3>Example 1 : Using %ROWTYPE with SELECT</h3>

<pre>
SET SERVEROUTPUT ON;

DECLARE

   EMP_RECORD EMPLOYEES%ROWTYPE;

BEGIN

   SELECT *
   INTO EMP_RECORD
   FROM EMPLOYEES
   WHERE EMP_ID = 101;

   DBMS_OUTPUT.PUT_LINE('Employee Name : ' || EMP_RECORD.EMP_NAME);

   DBMS_OUTPUT.PUT_LINE('Salary : ' || EMP_RECORD.SALARY);

END;
/
</pre>

<h3>Output</h3>

<table class="notes-table">

<tr>
<th>Result</th>
</tr>

<tr>
<td>Employee Name : Ravi</td>
</tr>

<tr>
<td>Salary : 25000</td>
</tr>

</table>

<hr>

<h3>How Does This Program Work?</h3>

<table class="notes-table">

<tr>
<th>Statement</th>
<th>Explanation</th>
</tr>

<tr>
<td>EMP_RECORD EMPLOYEES%ROWTYPE</td>
<td>Declares one record variable representing the entire EMPLOYEES table.</td>
</tr>

<tr>
<td>SELECT *</td>
<td>Retrieves all columns.</td>
</tr>

<tr>
<td>INTO EMP_RECORD</td>
<td>Stores the complete row into the record variable.</td>
</tr>

<tr>
<td>EMP_RECORD.EMP_NAME</td>
<td>Accesses the EMP_NAME field.</td>
</tr>

<tr>
<td>EMP_RECORD.SALARY</td>
<td>Accesses the SALARY field.</td>
</tr>

</table>

<hr>

<h3>Example 2 : Using %ROWTYPE in UPDATE</h3>

<pre>
SET SERVEROUTPUT ON;

DECLARE

   EMP_RECORD EMPLOYEES%ROWTYPE;

BEGIN

   SELECT *
   INTO EMP_RECORD
   FROM EMPLOYEES
   WHERE EMP_ID = 101;

   DBMS_OUTPUT.PUT_LINE('Before Update : ' ||
                        EMP_RECORD.EMP_NAME ||
                        ' Salary : ' ||
                        EMP_RECORD.SALARY);

   EMP_RECORD.SALARY := EMP_RECORD.SALARY + 5000;

   UPDATE EMPLOYEES
   SET SALARY = EMP_RECORD.SALARY
   WHERE EMP_ID = EMP_RECORD.EMP_ID;

   DBMS_OUTPUT.PUT_LINE('After Update : ' ||
                        EMP_RECORD.EMP_NAME ||
                        ' Salary : ' ||
                        EMP_RECORD.SALARY);

END;
/
</pre>

<h3>Sample Output</h3>

<table class="notes-table">

<tr>
<th>Before Update</th>
<th>After Update</th>
</tr>

<tr>
<td>Ravi, 25000</td>
<td>Ravi, 30000</td>
</tr>

</table>

<hr>

<h3>Example 3 : %ROWTYPE with Specific Columns</h3>

<p>
Although <strong>%ROWTYPE</strong> represents the complete table, we can also fetch only selected columns into the required fields of the record variable.
</p>

<pre>
SET SERVEROUTPUT ON;

DECLARE

   EMP_DETAIL EMPLOYEES%ROWTYPE;

BEGIN

   SELECT EMP_NAME,
          SALARY
   INTO
          EMP_DETAIL.EMP_NAME,
          EMP_DETAIL.SALARY
   FROM EMPLOYEES
   WHERE EMP_ID = &EMP_ID;

   DBMS_OUTPUT.PUT_LINE(
      EMP_DETAIL.EMP_NAME || ', ' ||
      EMP_DETAIL.SALARY);

END;
/
</pre>

<h3>Sample Output</h3>

<table class="notes-table">

<tr>
<th>Input</th>
<th>Output</th>
</tr>

<tr>
<td>7900</td>
<td>JAMES, 950</td>
</tr>

</table>

<hr>

<h3>Example 4 : %ROWTYPE with All Columns</h3>

<pre>
SET SERVEROUTPUT ON;

DECLARE

   EMP_DETAIL EMPLOYEES%ROWTYPE;

BEGIN

   SELECT *
   INTO EMP_DETAIL
   FROM EMPLOYEES
   WHERE EMP_ID = &EMP_ID;

   DBMS_OUTPUT.PUT_LINE(
      EMP_DETAIL.EMP_ID || ', ' ||
      EMP_DETAIL.EMP_NAME || ', ' ||
      EMP_DETAIL.SALARY);

END;
/
</pre>

<h3>Sample Output</h3>

<table class="notes-table">

<tr>
<th>Input</th>
<th>Output</th>
</tr>

<tr>
<td>7900</td>
<td>7900, JAMES, 950</td>
</tr>

</table>

<hr>

<h3>%TYPE vs %ROWTYPE</h3>

<table class="notes-table">

<tr>
<th>%TYPE</th>
<th>%ROWTYPE</th>
</tr>

<tr>
<td>Represents one column.</td>
<td>Represents the entire row.</td>
</tr>

<tr>
<td>One variable stores one value.</td>
<td>One variable stores multiple column values.</td>
</tr>

<tr>
<td>Uses table_name.column_name%TYPE.</td>
<td>Uses table_name%ROWTYPE.</td>
</tr>

<tr>
<td>Suitable for individual columns.</td>
<td>Suitable for complete records.</td>
</tr>

<tr>
<td>Less memory usage.</td>
<td>More memory usage because it stores all columns.</td>
</tr>

</table>

<hr>

<h3>Advantages of %ROWTYPE</h3>

<ul>

<li>Declares one variable for an entire table row.</li>

<li>Automatically inherits all column datatypes.</li>

<li>Automatically adjusts if the table structure changes.</li>

<li>Reduces coding effort.</li>

<li>Improves readability and maintainability.</li>

<li>Minimizes datatype mismatch errors.</li>

</ul>

<hr>
<hr>

<h3>Difference Between Column Level & Row Level Attribute </h3>

<table class="notes-table">

<tr>
<th>Column Level Attribute (%TYPE)</th>
<th>Row Level Attribute (%ROWTYPE)</th>
</tr>

<tr>
<td>Represents the datatype of a single table column.</td>
<td>Represents the complete structure of a table row.</td>
</tr>

<tr>
<td>Stores the value of only one column.</td>
<td>Stores the values of all columns in a single record.</td>
</tr>

<tr>
<td>Syntax: <strong>table_name.column_name%TYPE</strong></td>
<td>Syntax: <strong>table_name%ROWTYPE</strong></td>
</tr>

<tr>
<td>Used when only one or a few column values are required.</td>
<td>Used when most or all column values are required.</td>
</tr>

<tr>
<td>Requires separate variables for different columns.</td>
<td>Requires only one record variable for the entire table row.</td>
</tr>

<tr>
<td>Consumes less memory because it stores only one value.</td>
<td>Consumes more memory because it stores all column values.</td>
</tr>

<tr>
<td>Example: <strong>V_ENAME EMP.ENAME%TYPE;</strong></td>
<td>Example: <strong>EMP_REC EMP%ROWTYPE;</strong></td>
</tr>

<tr>
<td>Accessed directly using the variable name.</td>
<td>Individual fields are accessed using the dot (.) operator (e.g., EMP_REC.ENAME).</td>
</tr>

<tr>
<td>Best suited for INSERT, UPDATE, or calculations involving individual columns.</td>
<td>Best suited for fetching, processing, or updating complete records.</td>
</tr>

</table>

<hr>

<h3>Easy Trick to Remember</h3>

<table class="notes-table">

<tr>
<th>Attribute</th>
<th>Remember</th>
</tr>

<tr>
<td><strong>%TYPE</strong></td>
<td><strong>One Column → One Variable</strong></td>
</tr>

<tr>
<td><strong>%ROWTYPE</strong></td>
<td><strong>One Row → One Record Variable</strong></td>
</tr>

</table>
<h3>Class Summary</h3>

<ul>

<li>%ROWTYPE is a Row Level Attribute in PL/SQL.</li>

<li>It represents an entire row of a table.</li>

<li>One record variable can store values of all columns.</li>

<li>Individual fields are accessed using the dot (.) operator.</li>

<li>%ROWTYPE is commonly used with SELECT, INSERT, UPDATE, and DELETE operations.</li>

<li>It makes PL/SQL programs more flexible, reliable, and easier to maintain.</li>

</ul>

`;

let oraclePLSQLControlStructuresContent = `

<h3>Control Structures in PL/SQL</h3>

<p>
Good morning students!
</p>

<p>
In the previous lectures, we learned about Variables, Variable Attributes, and PL/SQL Blocks.
Now, we are going to learn another important concept in PL/SQL called <strong>Control Structures</strong>.
</p>

<p>
A <strong>Control Structure</strong> is used to control the flow of execution of a PL/SQL program. It determines the order in which statements are executed based on conditions or repetitions.
</p>

<p>
By default, a PL/SQL program executes statements sequentially (from top to bottom). However, in real-world applications, we often need to make decisions, repeat certain statements, or jump to another part of the program. These tasks are performed using Control Structures.
</p>

<hr>

<h3>Why Do We Use Control Structures?</h3>

<ul>

<li>To control the execution flow of a program.</li>

<li>To execute statements based on conditions.</li>

<li>To repeat a group of statements multiple times.</li>

<li>To transfer control from one part of the program to another.</li>

<li>To make programs dynamic, efficient, and easy to understand.</li>

</ul>

<hr>

<h3>Types of Control Structures</h3>

<p>
PL/SQL provides three types of Control Structures.
</p>

<table class="notes-table">

<tr>
<th>S.No.</th>
<th>Control Structure</th>
<th>Purpose</th>
</tr>

<tr>
<td>1</td>
<td>Conditional Control Structures</td>
<td>Execute different statements based on one or more conditions.</td>
</tr>

<tr>
<td>2</td>
<td>Branching Control Structures</td>
<td>Transfer the control of execution from one statement to another.</td>
</tr>

<tr>
<td>3</td>
<td>Iteration Control Structures</td>
<td>Execute a group of statements repeatedly until a condition is satisfied.</td>
</tr>

</table>

<hr>

<h3>1. Conditional Control Structures</h3>

<p>
Conditional Control Structures are used to make decisions in a program. Depending on whether a condition is <strong>TRUE</strong> or <strong>FALSE</strong>, Oracle executes different blocks of code.
</p>

<p><strong>Examples:</strong></p>

<ul>

<li>IF Statement</li>

<li>IF...ELSE Statement</li>

<li>IF...ELSIF...ELSE Statement</li>

<li>CASE Statement</li>

</ul>

<hr>

<h3>2. Branching Control Structures</h3>

<p>
Branching Control Structures are used to transfer the control of execution from one part of the program to another.
</p>

<p><strong>Examples:</strong></p>

<ul>

<li>GOTO Statement</li>

<li>NULL Statement</li>

</ul>

<hr>

<h3>3. Iteration Control Structures</h3>

<p>
Iteration Control Structures are used to execute a block of statements repeatedly until a specified condition becomes false or for a fixed number of times.
</p>

<p><strong>Examples:</strong></p>

<ul>

<li>Simple LOOP</li>

<li>WHILE LOOP</li>

<li>FOR LOOP</li>

</ul>

<hr>

<h3>Difference Between the Three Control Structures</h3>

<table class="notes-table">

<tr>
<th>Conditional</th>
<th>Branching</th>
<th>Iteration</th>
</tr>

<tr>
<td>Used for decision making.</td>
<td>Used to transfer program control.</td>
<td>Used to repeat statements.</td>
</tr>

<tr>
<td>Checks conditions.</td>
<td>Jumps from one location to another.</td>
<td>Executes statements multiple times.</td>
</tr>

<tr>
<td>Examples: IF, CASE</td>
<td>Examples: GOTO, NULL</td>
<td>Examples: LOOP, WHILE, FOR</td>
</tr>

</table>

<hr>

<h3>Class Summary</h3>

<ul>

<li>Control Structures control the execution flow of a PL/SQL program.</li>

<li>They make programs dynamic and flexible.</li>

<li>PL/SQL provides three types of Control Structures.</li>

<li>Conditional Control Structures are used for decision making.</li>

<li>Branching Control Structures transfer execution from one place to another.</li>

<li>Iteration Control Structures repeat statements multiple times.</li>

<li>We will study each Control Structure in detail in the upcoming lectures.</li>

</ul>

`;

let oraclePLSQLConditionalControlStructuresContent = `


<h3>Conditional Control Structures in PL/SQL</h3>


<p>
Conditional Control Structures are used to make decisions in a PL/SQL program. Depending on whether a condition is <strong>TRUE</strong> or <strong>FALSE</strong>, Oracle executes different blocks of code.
</p>


<p><strong>Examples:</strong></p>


<ul>
<li>IF Statement</li>
<li>IF...ELSE Statement</li>
<li>Nested IF Statement</li>
<li>IF...ELSIF...ELSE Statement</li>
</ul>


<hr>


<h3>1. Simple IF</h3>


<p>
It contains only the true block. The statements are executed only when the condition is true.
</p>


<p><strong>Syntax:</strong></p>


<pre>
IF condition THEN
   -- statements to execute when condition is true
END IF;
</pre>


<p><strong>Example 1: Voting Eligibility using Simple IF</strong></p>


<pre>
DECLARE
   v_age NUMBER := &v_age;
BEGIN
   IF v_age >= 18 THEN
      DBMS_OUTPUT.PUT_LINE('Eligible to vote');
   END IF;

   IF v_age < 18 THEN
      DBMS_OUTPUT.PUT_LINE('Not eligible to vote');
   END IF;
END;
</pre>


<p><strong>Example 2: Fetch age from PERSONS table using Simple IF</strong></p>


<pre>
DECLARE
   v_age NUMBER;
BEGIN
   SELECT age INTO v_age
   FROM persons
   WHERE person_id = &person_id;

   IF v_age >= 18 THEN
      DBMS_OUTPUT.PUT_LINE('Eligible to vote');
   END IF;

   IF v_age < 18 THEN
      DBMS_OUTPUT.PUT_LINE('Not eligible to vote');
   END IF;
END;
</pre>


<hr>


<h3>2. IF...ELSE</h3>


<p>
It contains both a true block and a false block. One of the blocks is executed based on the condition.
</p>


<p><strong>Syntax:</strong></p>


<pre>
IF condition THEN
   -- statements if condition is TRUE
ELSE
   -- statements if condition is FALSE
END IF;
</pre>


<p><strong>Example 1: Voting Eligibility using IF...ELSE</strong></p>


<pre>
DECLARE
   v_age NUMBER;
BEGIN
   v_age := &Enter_Age;

   IF v_age >= 18 THEN
      DBMS_OUTPUT.PUT_LINE('Eligible to vote');
   ELSE
      DBMS_OUTPUT.PUT_LINE('Not eligible to vote');
   END IF;
END;
</pre>


<p><strong>Example 2: Fetch age from PERSONS table using IF...ELSE</strong></p>


<pre>
DECLARE
   v_age NUMBER;
BEGIN
   SELECT age INTO v_age
   FROM persons
   WHERE person_id = &person_id;

   IF v_age >= 18 THEN
      DBMS_OUTPUT.PUT_LINE('Eligible to vote');
   ELSE
      DBMS_OUTPUT.PUT_LINE('Not eligible to vote');
   END IF;
END;
</pre>


<hr>


<h3>3. Nested IF</h3>


<p>
A nested IF means putting one IF statement inside another IF or ELSE block. It is used when you want to check multiple conditions step by step.
</p>


<p><strong>Syntax:</strong></p>


<pre>
IF condition1 THEN
   IF condition2 THEN
      -- statements when both condition1 and condition2 are TRUE
   END IF;
ELSE
   -- statements when condition1 is FALSE
END IF;
</pre>


<p><strong>Example: Age-based voting eligibility using Nested IF</strong></p>


<pre>
DECLARE
   v_age NUMBER := &Enter_Age;
BEGIN
   IF v_age >= 18 THEN
      IF v_age >= 60 THEN
         DBMS_OUTPUT.PUT_LINE('Senior Citizen - Eligible to vote');
      ELSE
         DBMS_OUTPUT.PUT_LINE('Adult - Eligible to vote');
      END IF;
   ELSE
      DBMS_OUTPUT.PUT_LINE('Not eligible to vote');
   END IF;
END;
</pre>


<hr>


<h3>4. IF...ELSIF...ELSE Ladder</h3>


<p>
This is used when you want to check multiple conditions one after another.
</p>


<p><strong>Syntax:</strong></p>


<pre>
IF &lt;CONDITION&gt; THEN
   -- statements
ELSIF &lt;CONDITION&gt; THEN
   -- statements
ELSIF &lt;CONDITION&gt; THEN
   -- statements
ELSE
   -- statements if none of the above are true
END IF;
</pre>


<p><strong>Example: Voting Eligibility using IF...ELSIF...ELSE</strong></p>


<pre>
DECLARE
   v_age NUMBER := &Enter_Age;
BEGIN
   IF v_age < 18 THEN
      DBMS_OUTPUT.PUT_LINE('Not eligible to vote');
   ELSIF v_age BETWEEN 18 AND 59 THEN
      DBMS_OUTPUT.PUT_LINE('Adult - Eligible to vote');
   ELSIF v_age >= 60 THEN
      DBMS_OUTPUT.PUT_LINE('Senior Citizen - Eligible to vote');
   ELSE
      DBMS_OUTPUT.PUT_LINE('Invalid age');
   END IF;
END;
</pre>


<hr>


<h3>Summary</h3>


<ul>
<li>Simple IF checks only the true condition.</li>
<li>IF...ELSE checks both true and false cases.</li>
<li>Nested IF is used to test conditions step by step.</li>
<li>IF...ELSIF...ELSE ladder is used for multiple conditions.</li>
<li>These structures help in decision-making in PL/SQL programs.</li>
</ul>


`;

let oraclePLSQLBranchingControlStructuresContent = `


<h3>Branching Control Structures in PL/SQL</h3>


<p>
Branching Control Structures are used to transfer the control of execution from one part of a program to another.
</p>


<p>
One important branching control structure in PL/SQL is the <strong>CASE statement</strong>.
</p>


<hr>


<h3>CASE Statement</h3>


<p>
The CASE statement is used when you compare one expression against multiple possible values, similar to the switch statement in other programming languages.
</p>


<p><strong>Syntax:</strong></p>


<pre>
CASE expression
   WHEN value1 THEN
      -- statements
   WHEN value2 THEN
      -- statements
   WHEN value3 THEN
      -- statements
   ELSE
      -- statements (optional, executes if no match)
END CASE;
</pre>


<p><strong>Example: Display Day Name Using CASE Statement</strong></p>


<pre>
DECLARE
   v_day NUMBER := &ENTER_DAY;
BEGIN
   CASE v_day
      WHEN 1 THEN
         DBMS_OUTPUT.PUT_LINE('Monday');
      WHEN 2 THEN
         DBMS_OUTPUT.PUT_LINE('Tuesday');
      WHEN 3 THEN
         DBMS_OUTPUT.PUT_LINE('Wednesday');
      WHEN 4 THEN
         DBMS_OUTPUT.PUT_LINE('Thursday');
      WHEN 5 THEN
         DBMS_OUTPUT.PUT_LINE('Friday');
      ELSE
         DBMS_OUTPUT.PUT_LINE('Weekend');
   END CASE;
END;
</pre>


<hr>


<h3>More Examples for Class Lecture</h3>


<p>
Below are some additional examples that you can use to explain the CASE statement in a more interesting way.
</p>


<h3>Example 1: Display Month Name</h3>


<p>
This example takes a month number as input and displays the corresponding month name.
</p>


<pre>
DECLARE
   v_month NUMBER := &ENTER_MONTH;
BEGIN
   CASE v_month
      WHEN 1 THEN DBMS_OUTPUT.PUT_LINE('January');
      WHEN 2 THEN DBMS_OUTPUT.PUT_LINE('February');
      WHEN 3 THEN DBMS_OUTPUT.PUT_LINE('March');
      WHEN 4 THEN DBMS_OUTPUT.PUT_LINE('April');
      WHEN 5 THEN DBMS_OUTPUT.PUT_LINE('May');
      WHEN 6 THEN DBMS_OUTPUT.PUT_LINE('June');
      WHEN 7 THEN DBMS_OUTPUT.PUT_LINE('July');
      WHEN 8 THEN DBMS_OUTPUT.PUT_LINE('August');
      WHEN 9 THEN DBMS_OUTPUT.PUT_LINE('September');
      WHEN 10 THEN DBMS_OUTPUT.PUT_LINE('October');
      WHEN 11 THEN DBMS_OUTPUT.PUT_LINE('November');
      WHEN 12 THEN DBMS_OUTPUT.PUT_LINE('December');
      ELSE DBMS_OUTPUT.PUT_LINE('Invalid Month');
   END CASE;
END;
</pre>


<h3>Example 2: Display Grade</h3>


<p>
This example helps students understand how different values map to different outputs.
</p>


<pre>
DECLARE
   v_grade CHAR(1) := '&ENTER_GRADE';
BEGIN
   CASE v_grade
      WHEN 'A' THEN DBMS_OUTPUT.PUT_LINE('Excellent');
      WHEN 'B' THEN DBMS_OUTPUT.PUT_LINE('Very Good');
      WHEN 'C' THEN DBMS_OUTPUT.PUT_LINE('Good');
      WHEN 'D' THEN DBMS_OUTPUT.PUT_LINE('Average');
      WHEN 'F' THEN DBMS_OUTPUT.PUT_LINE('Fail');
      ELSE DBMS_OUTPUT.PUT_LINE('Invalid Grade');
   END CASE;
END;
</pre>


<h3>Example 3: Display Weekday or Holiday</h3>


<p>
This example is useful because students can easily relate it to daily life.
</p>


<pre>
DECLARE
   v_day NUMBER := &ENTER_DAY;
BEGIN
   CASE v_day
      WHEN 1 THEN DBMS_OUTPUT.PUT_LINE('Sunday');
      WHEN 2 THEN DBMS_OUTPUT.PUT_LINE('Monday');
      WHEN 3 THEN DBMS_OUTPUT.PUT_LINE('Tuesday');
      WHEN 4 THEN DBMS_OUTPUT.PUT_LINE('Wednesday');
      WHEN 5 THEN DBMS_OUTPUT.PUT_LINE('Thursday');
      WHEN 6 THEN DBMS_OUTPUT.PUT_LINE('Friday');
      WHEN 7 THEN DBMS_OUTPUT.PUT_LINE('Saturday');
      ELSE DBMS_OUTPUT.PUT_LINE('Invalid Day');
   END CASE;
END;
</pre>


<h3>Example 4: Display Food Category</h3>


<p>
This example makes the lecture more interesting by using a simple real-life category system.
</p>


<pre>
DECLARE
   v_choice NUMBER := &ENTER_CHOICE;
BEGIN
   CASE v_choice
      WHEN 1 THEN DBMS_OUTPUT.PUT_LINE('Breakfast');
      WHEN 2 THEN DBMS_OUTPUT.PUT_LINE('Lunch');
      WHEN 3 THEN DBMS_OUTPUT.PUT_LINE('Dinner');
      WHEN 4 THEN DBMS_OUTPUT.PUT_LINE('Snacks');
      ELSE DBMS_OUTPUT.PUT_LINE('Invalid Choice');
   END CASE;
END;
</pre>


<h3>Example 5: Display Transport Type</h3>


<p>
This example can be used to explain how menus work in programs.
</p>


<pre>
DECLARE
   v_vehicle NUMBER := &ENTER_VEHICLE;
BEGIN
   CASE v_vehicle
      WHEN 1 THEN DBMS_OUTPUT.PUT_LINE('Bicycle');
      WHEN 2 THEN DBMS_OUTPUT.PUT_LINE('Bike');
      WHEN 3 THEN DBMS_OUTPUT.PUT_LINE('Car');
      WHEN 4 THEN DBMS_OUTPUT.PUT_LINE('Bus');
      ELSE DBMS_OUTPUT.PUT_LINE('Unknown Vehicle');
   END CASE;
END;
</pre>


<hr>


<h3>Key Points</h3>


<ul>
<li>CASE is used for multiple choices based on one expression.</li>
<li>It improves readability when there are many possible values.</li>
<li>The ELSE part is optional.</li>
<li>If no WHEN value matches, the ELSE block is executed.</li>
<li>It is very useful for menu-based programs and classification examples.</li>
</ul>


`;

let oraclePLSQLIterationControlStructuresContent = `


<h3>Iteration Control Structures in PL/SQL</h3>


<p>
Iteration Control Structures are used to execute a block of statements repeatedly until a condition becomes false or a required number of repetitions is completed.
</p>


<p>
PL/SQL provides three important iteration control structures:
</p>


<ul>
<li>Simple LOOP</li>
<li>WHILE LOOP</li>
<li>FOR LOOP</li>
</ul>


<hr>


<h3>1. Simple LOOP</h3>


<p>
A Simple LOOP repeatedly executes a block of statements until an explicit EXIT condition is encountered. By default, it is an infinite loop, so we must use <strong>EXIT</strong> or <strong>EXIT WHEN</strong> to stop it.
</p>


<p>
It ensures at least one execution of the loop body.
</p>


<p><strong>Syntax:</strong></p>


<pre>
LOOP
   -- Statements to execute
   EXIT WHEN condition;
END LOOP;
</pre>


<p><strong>Example 1: Print numbers from 1 to 5</strong></p>


<pre>
DECLARE
   v_num NUMBER := 1;
BEGIN
   LOOP
      DBMS_OUTPUT.PUT_LINE('Number: ' || v_num);
      v_num := v_num + 1;

      EXIT WHEN v_num > 5;
   END LOOP;
END;
/
</pre>


<p><strong>Example 2: Factorial using Simple LOOP</strong></p>


<pre>
DECLARE
   v_num NUMBER := 5;
   v_fact NUMBER := 1;
BEGIN
   LOOP
      v_fact := v_fact * v_num;
      v_num := v_num - 1;

      EXIT WHEN v_num = 0;
   END LOOP;

   DBMS_OUTPUT.PUT_LINE('Factorial = ' || v_fact);
END;
/
</pre>


<hr>


<h3>2. WHILE LOOP</h3>


<p>
A WHILE LOOP executes a block of code as long as the given condition is TRUE. The condition is checked first, and then the statements are executed.
</p>


<p>
If the condition is FALSE initially, the loop will not execute even once.
</p>


<p>
It is best used when we do not know exactly how many times the loop will run, but we know the condition.
</p>


<p><strong>Syntax:</strong></p>


<pre>
WHILE condition LOOP
   -- statements;
END LOOP;
</pre>


<p><strong>Example 1: Print numbers from 1 to 5</strong></p>


<pre>
DECLARE
   v_num NUMBER := 1;
BEGIN
   WHILE v_num <= 5 LOOP
      DBMS_OUTPUT.PUT_LINE('Number: ' || v_num);
      v_num := v_num + 1;
   END LOOP;
END;
/
</pre>


<p><strong>Example 2: Print even numbers from 2 to 10</strong></p>


<pre>
DECLARE
   v_num NUMBER := 2;
BEGIN
   WHILE v_num <= 10 LOOP
      DBMS_OUTPUT.PUT_LINE('Even Number: ' || v_num);
      v_num := v_num + 2;
   END LOOP;
END;
/
</pre>


<hr>


<h3>3. FOR LOOP</h3>


<p>
A FOR LOOP is used when we know in advance how many times we want to execute a block of code. The loop runs automatically from a start value to an end value.
</p>


<p>
By default, it is incremented by 1. The counter variable is created implicitly, so there is no need to manually increment it.
</p>


<p><strong>Syntax:</strong></p>


<pre>
FOR counter_variable IN start_value..end_value LOOP
   -- Statements
END LOOP;
</pre>


<p><strong>Example 1: Print Student Roll Numbers from 1 to 5</strong></p>


<pre>
BEGIN
   FOR v_rollno IN 1..5 LOOP
      DBMS_OUTPUT.PUT_LINE('Student Roll No: ' || v_rollno);
   END LOOP;
END;
/
</pre>


<p><strong>Example 2: Print table of 5</strong></p>


<pre>
BEGIN
   FOR v_num IN 1..10 LOOP
      DBMS_OUTPUT.PUT_LINE('5 x ' || v_num || ' = ' || (5 * v_num));
   END LOOP;
END;
/
</pre>


<hr>


<h3>Comparison of Loop Types</h3>


<table class="notes-table">
<tr>
<th>Loop Type</th>
<th>When to Use</th>
<th>Main Feature</th>
</tr>
<tr>
<td>Simple LOOP</td>
<td>When you want to repeat statements until an EXIT condition is found.</td>
<td>Must use EXIT or EXIT WHEN.</td>
</tr>
<tr>
<td>WHILE LOOP</td>
<td>When the number of repetitions is not fixed.</td>
<td>Condition is checked before execution.</td>
</tr>
<tr>
<td>FOR LOOP</td>
<td>When the number of repetitions is known.</td>
<td>Counter increases automatically.</td>
</tr>
</table>


<hr>


<h3>Class Summary</h3>


<ul>
<li>Simple LOOP is an infinite loop unless stopped by EXIT.</li>
<li>WHILE LOOP runs only while the condition is TRUE.</li>
<li>FOR LOOP is best when the number of iterations is known.</li>
<li>These loops help repeat statements in PL/SQL efficiently.</li>
<li>Iteration control structures are very useful in counting, tables, patterns, and calculations.</li>
</ul>


`;

let sqlWithinPlsqlContent = `


<h3>SQL within PL/SQL</h3>


<p>
PL/SQL is a procedural language designed to work closely with SQL. This means we can use SQL statements inside a PL/SQL block to fetch data, insert records, update values, delete rows, and perform transaction control.
</p>


<p>
In simple words, SQL is used to interact with the database, and PL/SQL is used to add logic, conditions, and loops around those SQL statements.
</p>


<hr>


<h3>Why Use SQL inside PL/SQL?</h3>


<ul>
<li>To retrieve data from tables.</li>
<li>To insert, update, and delete records.</li>
<li>To apply conditions and loops on SQL operations.</li>
<li>To build powerful database programs.</li>
<li>To combine database access with procedural logic.</li>
</ul>


<hr>


<h3>Types of SQL Statements Used in PL/SQL</h3>


<table class="notes-table">
<tr>
<th>S.No.</th>
<th>SQL Type</th>
<th>Purpose</th>
</tr>
<tr>
<td>1</td>
<td>SELECT</td>
<td>Fetches data from the database into PL/SQL variables.</td>
</tr>
<tr>
<td>2</td>
<td>INSERT</td>
<td>Adds new rows into a table.</td>
</tr>
<tr>
<td>3</td>
<td>UPDATE</td>
<td>Modifies existing rows in a table.</td>
</tr>
<tr>
<td>4</td>
<td>DELETE</td>
<td>Removes rows from a table.</td>
</tr>
<tr>
<td>5</td>
<td>COMMIT / ROLLBACK</td>
<td>Controls transaction changes.</td>
</tr>
</table>


<hr>


<h3>1. SELECT INTO Statement</h3>


<p>
The SELECT INTO statement is used to fetch a single row from a table and store it into PL/SQL variables.
</p>


<p><strong>Example:</strong></p>


<pre>
DECLARE
   v_name  VARCHAR2(50);
   v_salary NUMBER;
BEGIN
   SELECT name, salary
   INTO v_name, v_salary
   FROM employees
   WHERE emp_id = 101;

   DBMS_OUTPUT.PUT_LINE('Name: ' || v_name);
   DBMS_OUTPUT.PUT_LINE('Salary: ' || v_salary);
END;
/
</pre>


<hr>


<h3>2. INSERT Statement</h3>


<p>
The INSERT statement is used to add a new row into a table from a PL/SQL block.
</p>


<p><strong>Example:</strong></p>


<pre>
BEGIN
   INSERT INTO students (student_id, student_name, age)
   VALUES (1, 'Amit', 20);

   DBMS_OUTPUT.PUT_LINE('Record inserted successfully');
END;
/
</pre>


<hr>


<h3>3. UPDATE Statement</h3>


<p>
The UPDATE statement is used to modify existing records in a table.
</p>


<p><strong>Example:</strong></p>


<pre>
BEGIN
   UPDATE employees
   SET salary = salary + 5000
   WHERE emp_id = 101;

   DBMS_OUTPUT.PUT_LINE('Salary updated successfully');
END;
/
</pre>


<hr>


<h3>4. DELETE Statement</h3>


<p>
The DELETE statement is used to remove records from a table.
</p>


<p><strong>Example:</strong></p>


<pre>
BEGIN
   DELETE FROM students
   WHERE student_id = 1;

   DBMS_OUTPUT.PUT_LINE('Record deleted successfully');
END;
/
</pre>


<hr>


<h3>5. COMMIT and ROLLBACK</h3>


<p>
COMMIT is used to save changes permanently in the database, while ROLLBACK is used to cancel changes.
</p>


<p><strong>Example:</strong></p>


<pre>
BEGIN
   UPDATE employees
   SET salary = salary + 1000
   WHERE emp_id = 102;

   COMMIT;
END;
/
</pre>


<hr>


<h3>Important Notes</h3>


<ul>
<li>SQL statements can be written directly inside PL/SQL blocks.</li>
<li>PL/SQL adds logic such as IF, LOOP, and CASE around SQL commands.</li>
<li>SELECT INTO is used to assign query results to variables.</li>
<li>INSERT, UPDATE, and DELETE are used for data manipulation.</li>
<li>COMMIT and ROLLBACK are used for transaction control.</li>
</ul>


<hr>


<h3>Class Summary</h3>


<ul>
<li>SQL inside PL/SQL makes database programs powerful and flexible.</li>
<li>SQL handles database operations.</li>
<li>PL/SQL handles logic and control flow.</li>
<li>Together, they help build efficient database applications.</li>
</ul>


`;

let oraclePLSQLCursorContent = `


<h3>Cursors in PL/SQL</h3>


<p>
A cursor is a pointer that fetches rows one by one from a query result in PL/SQL.
It is a temporary memory or work space used by Oracle to process SQL statements.
</p>


<p>
PL/SQL mainly has two types of cursors:
</p>


<ul>
<li>Explicit Cursors</li>
<li>Implicit Cursors</li>
</ul>


<hr>


<h3>1. Explicit Cursors</h3>


<p>
Explicit cursors are created by the user for fetching rows from a table.
They allow you to fetch multiple rows one by one from a database table.
</p>


<p>
An explicit cursor can hold multiple rows in memory, but it processes only one row at a time.
</p>


<p>
When using an explicit cursor, we follow four steps:
</p>


<ol>
<li>Declare the cursor.</li>
<li>Open the cursor.</li>
<li>Fetch rows one by one.</li>
<li>Close the cursor.</li>
</ol>


<p><strong>Syntax:</strong></p>


<pre>
DECLARE
   CURSOR cursor_name IS
      SELECT columns FROM table_name WHERE condition;

   variable1 datatype;
   variable2 datatype;
BEGIN
   OPEN cursor_name;

   LOOP
      FETCH cursor_name INTO variable1, variable2;
      EXIT WHEN cursor_name%NOTFOUND;

      -- Process the fetched data here
   END LOOP;

   CLOSE cursor_name;
END;
</pre>


<p><strong>Another Syntax Example:</strong></p>


<pre>
DECLARE
   CURSOR cursor_name IS
      SELECT column1, column2
      FROM table_name
      WHERE condition;

   v_col1 table_name.column1%TYPE;
   v_col2 table_name.column2%TYPE;
BEGIN
   OPEN cursor_name;
   LOOP
      FETCH cursor_name INTO v_col1, v_col2;
      EXIT WHEN cursor_name%NOTFOUND;

      DBMS_OUTPUT.PUT_LINE(v_col1 || ' - ' || v_col2);
   END LOOP;
   CLOSE cursor_name;
END;
/
</pre>


<h3>Example 1: Display Student Details Using Explicit Cursor</h3>


<pre>
DECLARE
   CURSOR student_cur IS
      SELECT roll_no, name FROM students;

   v_rollno students.roll_no%TYPE;
   v_name   students.name%TYPE;
BEGIN
   OPEN student_cur;
   LOOP
      FETCH student_cur INTO v_rollno, v_name;
      EXIT WHEN student_cur%NOTFOUND;

      DBMS_OUTPUT.PUT_LINE('Roll No: ' || v_rollno || ', Name: ' || v_name);
   END LOOP;
   CLOSE student_cur;
END;
/
</pre>


<h3>Example 2: Display Employees from a Department</h3>


<pre>
DECLARE
   CURSOR emp_cur IS
      SELECT emp_id, emp_name
      FROM employees
      WHERE dept_id = 10;

   v_empid employees.emp_id%TYPE;
   v_empname employees.emp_name%TYPE;
BEGIN
   OPEN emp_cur;
   LOOP
      FETCH emp_cur INTO v_empid, v_empname;
      EXIT WHEN emp_cur%NOTFOUND;

      DBMS_OUTPUT.PUT_LINE('Employee ID: ' || v_empid || ', Name: ' || v_empname);
   END LOOP;
   CLOSE emp_cur;
END;
/
</pre>


<hr>


<h3>Attributes of Explicit Cursors</h3>


<p>
Every explicit cursor in PL/SQL has four important attributes to check the status of the cursor.
</p>


<ul>
<li><strong>%FOUND</strong> → Returns TRUE if the last FETCH returned a row, else FALSE.</li>
<li><strong>%NOTFOUND</strong> → Returns TRUE if the last FETCH did not return a row.</li>
<li><strong>%ISOPEN</strong> → Returns TRUE if the cursor is open, else FALSE.</li>
<li><strong>%ROWCOUNT</strong> → Returns the number of rows fetched so far.</li>
</ul>


<p><strong>Example: Demonstrating Cursor Attributes</strong></p>


<pre>
DECLARE
   CURSOR student_cur IS
      SELECT roll_no, name FROM students;

   v_rollno students.roll_no%TYPE;
   v_name   students.name%TYPE;
BEGIN
   DBMS_OUTPUT.PUT_LINE('Before OPEN: Is cursor open? ' ||
      CASE WHEN student_cur%ISOPEN THEN 'YES' ELSE 'NO' END);

   OPEN student_cur;

   DBMS_OUTPUT.PUT_LINE('After OPEN: Is cursor open? ' ||
      CASE WHEN student_cur%ISOPEN THEN 'YES' ELSE 'NO' END);

   LOOP
      FETCH student_cur INTO v_rollno, v_name;

      IF student_cur%FOUND THEN
         DBMS_OUTPUT.PUT_LINE('Row #: ' || student_cur%ROWCOUNT ||
                              ' -> Roll No = ' || v_rollno || ', Name = ' || v_name);
      END IF;

      EXIT WHEN student_cur%NOTFOUND;
   END LOOP;

   CLOSE student_cur;

   DBMS_OUTPUT.PUT_LINE('After CLOSE: Is cursor open? ' ||
      CASE WHEN student_cur%ISOPEN THEN 'YES' ELSE 'NO' END);
END;
/
</pre>


<hr>


<h3>2. Implicit Cursors</h3>


<p>
In PL/SQL, whenever you run a DML statement such as INSERT, UPDATE, DELETE, or a SELECT INTO statement, Oracle automatically creates a cursor internally.
This cursor is called an Implicit Cursor.
</p>


<p>
You do not declare it manually. Oracle manages it automatically.
It is used for single-row queries or for checking the effect of DML statements.
</p>


<p>
For multi-row queries, we use Explicit Cursors instead.
</p>


<p>
No need to open, fetch, or close an implicit cursor.
</p>


<p><strong>Implicit Cursor Attributes:</strong></p>


<ul>
<li><strong>SQL%FOUND</strong> → TRUE if at least one row was affected.</li>
<li><strong>SQL%NOTFOUND</strong> → TRUE if no rows were affected.</li>
<li><strong>SQL%ROWCOUNT</strong> → Returns the number of rows affected.</li>
<li><strong>SQL%ISOPEN</strong> → Always FALSE for implicit cursors because Oracle closes it automatically.</li>
</ul>


<p><strong>Example: Using Implicit Cursor with SELECT INTO</strong></p>


<pre>
DECLARE
   v_name employees.emp_name%TYPE;
BEGIN
   SELECT emp_name
   INTO v_name
   FROM employees
   WHERE emp_id = 101;

   DBMS_OUTPUT.PUT_LINE('Employee Name: ' || v_name);
EXCEPTION
   WHEN NO_DATA_FOUND THEN
      DBMS_OUTPUT.PUT_LINE('No employee found.');
END;
/
</pre>


<p><strong>Example: Using Implicit Cursor with UPDATE</strong></p>


<pre>
BEGIN
   UPDATE employees
   SET salary = salary + 1000
   WHERE emp_id = 101;

   DBMS_OUTPUT.PUT_LINE('Rows affected: ' || SQL%ROWCOUNT);
END;
/
</pre>


<hr>


<h3>Difference Between Implicit and Explicit Cursors</h3>


<table class="notes-table">
<tr>
<th>Implicit Cursor</th>
<th>Explicit Cursor</th>
</tr>
<tr>
<td>Created automatically by Oracle.</td>
<td>Declared manually by the programmer.</td>
</tr>
<tr>
<td>Used for single-row queries and DML.</td>
<td>Used for multi-row queries.</td>
</tr>
<tr>
<td>No need to open, fetch, or close.</td>
<td>Must be opened, fetched, and closed.</td>
</tr>
<tr>
<td>Oracle manages it automatically.</td>
<td>Programmer controls it manually.</td>
</tr>
</table>


<hr>


<h3>Class Summary</h3>


<ul>
<li>A cursor is used to process query results row by row.</li>
<li>Explicit cursors are manual and used for multiple rows.</li>
<li>Implicit cursors are automatic and used for single-row queries or DML.</li>
<li>Cursor attributes help check the status of a cursor.</li>
<li>Explicit cursor = manual, multi-row, programmer controlled.</li>
<li>Implicit cursor = automatic, single-row or DML.</li>
</ul>


`;

let oraclePLSQLExceptionHandlingContent = `


<h3>Exception Handling in PL/SQL</h3>


<p>
In PL/SQL, exception handling is a mechanism to handle runtime errors gracefully, without abruptly terminating the program.
</p>


<p>
Exception handling improves program reliability and ensures smooth execution even when errors occur.
</p>


<p>
Instead of stopping the program abruptly, exceptions give us a way to catch the error and take corrective action.
</p>


<p>
In PL/SQL, it is not possible for multiple exceptions to occur at the same time inside a single block.
As soon as the first error happens, Oracle immediately transfers control to the exception-handling section of the block.
It will not continue execution of the remaining statements after that error.
That means only one exception is raised per block execution.
</p>


<p><strong>Syntax:</strong></p>


<pre>
DECLARE
   -- Declarations (variables, cursors, etc.)
BEGIN
   -- Main executable statements

EXCEPTION
   WHEN exception_name THEN
      -- Actions to handle the error
   WHEN OTHERS THEN
      -- Handle all other errors
END;
</pre>


<hr>


<h3>Types of Exceptions</h3>


<p>
PL/SQL exceptions are mainly of three types:
</p>


<ul>
<li>Predefined Exceptions</li>
<li>User-Defined Exceptions</li>
<li>WHEN OTHERS Clause</li>
</ul>


<hr>


<h3>1. Predefined Exceptions</h3>


<p>
Predefined exceptions are built-in exceptions already defined by Oracle.
</p>


<ul>
<li><strong>NO_DATA_FOUND</strong> → When a SELECT returns no rows</li>
<li><strong>TOO_MANY_ROWS</strong> → When a SELECT returns more than one row</li>
<li><strong>ZERO_DIVIDE</strong> → Divide by zero error</li>
<li><strong>INVALID_NUMBER</strong> → Conversion error like CHAR to NUMBER</li>
<li><strong>DUP_VAL_ON_INDEX</strong> → Duplicate value in a unique column</li>
</ul>


<p><strong>Example:</strong></p>


<pre>
DECLARE
   v_name   employees.emp_name%TYPE;
   v_salary NUMBER;
   v_result NUMBER;
BEGIN
   -- 1 NO_DATA_FOUND (employee does not exist)
   SELECT emp_name INTO v_name
   FROM employees
   WHERE emp_id = 999;

   DBMS_OUTPUT.PUT_LINE('Employee Name: ' || v_name);

   -- 2 TOO_MANY_ROWS (multiple employees in same dept)
   SELECT emp_name INTO v_name
   FROM employees
   WHERE dept_id = 10;

   DBMS_OUTPUT.PUT_LINE('Employee from Dept 10: ' || v_name);

   -- 3 ZERO_DIVIDE (division by zero)
   v_result := 100 / 0;
   DBMS_OUTPUT.PUT_LINE('Division Result: ' || v_result);

   -- 4 INVALID_NUMBER (wrong conversion)
   v_salary := TO_NUMBER('ABC123');
   DBMS_OUTPUT.PUT_LINE('Converted Salary: ' || v_salary);

   -- 5 DUP_VAL_ON_INDEX (duplicate emp_id insert)
   INSERT INTO employees(emp_id, emp_name, salary)
   VALUES (101, 'Pradeep', 50000);

EXCEPTION
   WHEN NO_DATA_FOUND THEN
      DBMS_OUTPUT.PUT_LINE('Error: No employee found (NO_DATA_FOUND).');

   WHEN TOO_MANY_ROWS THEN
      DBMS_OUTPUT.PUT_LINE('Error: More than one row found (TOO_MANY_ROWS).');

   WHEN ZERO_DIVIDE THEN
      DBMS_OUTPUT.PUT_LINE('Error: Division by zero not allowed (ZERO_DIVIDE).');

   WHEN INVALID_NUMBER THEN
      DBMS_OUTPUT.PUT_LINE('Error: Invalid number conversion (INVALID_NUMBER).');

   WHEN DUP_VAL_ON_INDEX THEN
      DBMS_OUTPUT.PUT_LINE('Error: Duplicate value in unique column (DUP_VAL_ON_INDEX).');

   WHEN OTHERS THEN
      DBMS_OUTPUT.PUT_LINE('Some other error occurred: ' || SQLERRM);
END;
</pre>


<hr>


<h3>2. User-Defined Exceptions</h3>


<p>
User-defined exceptions are declared by the programmer using the EXCEPTION keyword.
They are raised manually using the RAISE statement.
</p>


<p><strong>Example:</strong></p>


<pre>
DECLARE
   e_low_salary EXCEPTION;
   v_salary employees.salary%TYPE;
BEGIN
   SELECT salary INTO v_salary
   FROM employees
   WHERE emp_id = 101;

   IF v_salary < 3000 THEN
      RAISE e_low_salary;
   END IF;

   DBMS_OUTPUT.PUT_LINE('Employee Salary: ' || v_salary);

EXCEPTION
   WHEN e_low_salary THEN
      DBMS_OUTPUT.PUT_LINE('Error: Salary is too low!');
END;
</pre>


<hr>


<h3>3. WHEN OTHERS Clause</h3>


<p>
The WHEN OTHERS clause catches all other unhandled exceptions.
It should be used at the end of the exception handling section.
</p>


<p>
It is useful as a backup error handler when no specific exception matches.
</p>


<p><strong>Example:</strong></p>


<pre>
BEGIN
   -- some statements
   NULL;
EXCEPTION
   WHEN OTHERS THEN
      DBMS_OUTPUT.PUT_LINE('Unexpected error occurred: ' || SQLERRM);
END;
</pre>


<hr>


<h3>Important Points</h3>


<ul>
<li>Exception handling helps the program continue smoothly after an error.</li>
<li>Only one exception is raised per block execution.</li>
<li>Oracle transfers control to the EXCEPTION section as soon as an error occurs.</li>
<li>Predefined exceptions are already built into Oracle.</li>
<li>User-defined exceptions are created by the programmer.</li>
<li>WHEN OTHERS is used to catch all remaining unhandled errors.</li>
</ul>


<hr>


<h3>Class Summary</h3>


<ul>
<li>Exception handling is used to manage runtime errors.</li>
<li>Predefined exceptions handle common Oracle errors.</li>
<li>User-defined exceptions handle custom business rules.</li>
<li>WHEN OTHERS acts as a final safety net.</li>
<li>Proper exception handling makes PL/SQL programs reliable and user-friendly.</li>
</ul>


`;

let oraclePLSQLTransactionManagementContent = `


<h3>Transaction Management in PL/SQL</h3>


<p>
A transaction is a logical unit of work that is either completely performed or completely undone.
If any error occurs, Oracle allows us to rollback the changes so that the database remains consistent.
</p>


<p>
Transaction management is very important in database programming because it helps maintain data accuracy and reliability.
</p>


<hr>


<h3>Transaction Control Commands</h3>


<table class="notes-table">
<tr>
<th>Command</th>
<th>Description</th>
</tr>
<tr>
<td>COMMIT</td>
<td>Saves all changes made during the current transaction permanently.</td>
</tr>
<tr>
<td>ROLLBACK</td>
<td>Undoes all changes made during the current transaction.</td>
</tr>
<tr>
<td>SAVEPOINT</td>
<td>Marks a point in the transaction to which you can roll back.</td>
</tr>
</table>


<hr>


<h3>1. COMMIT</h3>


<p>
COMMIT is used to make all changes permanent in the database.
After COMMIT, the changes cannot be undone using ROLLBACK.
</p>


<p><strong>Example:</strong></p>


<pre>
BEGIN
   INSERT INTO students (id, name) VALUES (101, 'Amit');
   COMMIT;
END;
/
</pre>


<hr>


<h3>2. ROLLBACK</h3>


<p>
ROLLBACK is used to cancel the changes made in the current transaction.
It restores the database to the last committed state.
</p>


<p><strong>Example:</strong></p>


<pre>
BEGIN
   UPDATE students
   SET name = 'Ravi'
   WHERE id = 101;

   ROLLBACK;
END;
/
</pre>


<hr>


<h3>3. SAVEPOINT</h3>


<p>
SAVEPOINT is used to set a marker inside a transaction.
If needed, we can rollback only up to that point instead of undoing the entire transaction.
</p>


<p><strong>Example:</strong></p>


<pre>
BEGIN
   INSERT INTO students (id, name) VALUES (102, 'Bob');
   SAVEPOINT sp1;

   UPDATE students
   SET name = 'Robert'
   WHERE id = 102;

   ROLLBACK TO sp1;
   COMMIT;
END;
/
</pre>


<hr>


<h3>Example: Transaction with Error Handling</h3>


<pre>
BEGIN
   INSERT INTO students (id, name) VALUES (102, 'Bob');

   -- Simulate error
   RAISE_APPLICATION_ERROR(-20001, 'Something went wrong');

   COMMIT;
EXCEPTION
   WHEN OTHERS THEN
      ROLLBACK;
      DBMS_OUTPUT.PUT_LINE('Transaction rolled back due to error: ' || SQLERRM);
END;
/
</pre>


<hr>


<h3>Key Points</h3>


<ul>
<li>A transaction is a unit of work that should be completed fully or not at all.</li>
<li>COMMIT saves changes permanently.</li>
<li>ROLLBACK cancels changes.</li>
<li>SAVEPOINT allows partial rollback.</li>
<li>Transaction control helps keep the database consistent and reliable.</li>
</ul>


<hr>


<h3>Class Summary</h3>


<ul>
<li>Transactions are used to manage database changes safely.</li>
<li>COMMIT confirms changes.</li>
<li>ROLLBACK cancels changes.</li>
<li>SAVEPOINT supports partial rollback.</li>
<li>Error handling with transactions prevents data inconsistency.</li>
</ul>


`;

let oracleLocksContent = `

<h3>Locks in Oracle</h3>

<p>

Good morning students!

Today we are going to learn an important Oracle Database concept called <strong>Locks</strong>.

When multiple users access the same database at the same time, Oracle must ensure that the data remains accurate and consistent. To achieve this, Oracle uses a mechanism called <strong>Locking</strong>.

</p>

<hr>

<h3>What is a Lock?</h3>

<p>

A <strong>Lock</strong> is a mechanism used by Oracle to control access to database objects when multiple users try to read or modify the same data simultaneously.

</p>

<p>

Whenever one user modifies data, Oracle temporarily locks that data so that other users cannot make conflicting changes until the transaction is completed.

</p>

<hr>

<h3>Why Do We Use Locks?</h3>

<p>

Locks are used to maintain the correctness and consistency of data in a multi-user environment.

</p>

<ul>

<li>To protect data integrity.</li>

<li>To avoid data corruption.</li>

<li>To prevent two users from modifying the same data simultaneously.</li>

<li>To ensure data consistency.</li>

<li>To support safe transaction processing.</li>

</ul>

<hr>

<h3>Real-Life Example</h3>

<p>

Imagine two students are writing on the same page of a notebook at the same time.

</p>

<ul>

<li>One student writes "Oracle".</li>

<li>The other student erases it and writes "PL/SQL".</li>

<li>The notebook becomes incorrect and confusing.</li>

</ul>

<p>

Similarly, if two database users update the same record at the same time, incorrect or inconsistent data may be stored.

To prevent this problem, Oracle automatically applies <strong>Locks</strong>.

</p>

<hr>

<h3>Types of Locks in Oracle</h3>

<table class="notes-table">

<tr>
<th>Lock Type</th>
<th>Level</th>
<th>Purpose</th>
<th>Example</th>
</tr>

<tr>
<td>DML Lock</td>
<td>Row Level</td>
<td>Locks rows during INSERT, UPDATE and DELETE operations.</td>
<td>UPDATE, INSERT, DELETE</td>
</tr>

<tr>
<td>Table Lock</td>
<td>Table Level</td>
<td>Locks the entire table.</td>
<td>LOCK TABLE</td>
</tr>

<tr>
<td>DDL Lock</td>
<td>Object Level</td>
<td>Locks database objects during DDL operations.</td>
<td>CREATE, ALTER, DROP</td>
</tr>

</table>

<hr>

<h3>1. DML Lock (Data Manipulation Language Lock)</h3>

<p>

A <strong>DML Lock</strong> is automatically applied whenever a user performs <strong>INSERT</strong>, <strong>UPDATE</strong>, <strong>DELETE</strong>, or <strong>MERGE</strong> operations.

</p>

<p>

Oracle locks only the affected rows, allowing other users to work on different rows of the same table.

</p>

<h4>Example</h4>

<pre>
UPDATE employees
SET salary = 5000
WHERE emp_id = 101;
</pre>

<h4>Explanation</h4>

<ul>

<li>Oracle automatically locks the row where EMP_ID = 101.</li>

<li>Other users cannot update or delete this row.</li>

<li>Other rows in the EMPLOYEES table remain accessible.</li>

<li>The lock is released after COMMIT or ROLLBACK.</li>

</ul>

<hr>

<h3>2. Table Lock</h3>

<p>

A <strong>Table Lock</strong> locks the entire table instead of individual rows.

</p>

<p>

It is generally used when performing maintenance or preventing all users from modifying a table.

</p>

<h4>Syntax</h4>

<pre>
LOCK TABLE table_name
IN EXCLUSIVE MODE;
</pre>

<h4>Example</h4>

<pre>
LOCK TABLE employees
IN EXCLUSIVE MODE;
</pre>

<h4>Explanation</h4>

<ul>

<li>The complete EMPLOYEES table becomes locked.</li>

<li>Other users cannot modify the table until the lock is released.</li>

<li>The lock is removed after COMMIT, ROLLBACK, or session termination.</li>

</ul>

<hr>

<h3>3. DDL Lock (Data Definition Language Lock)</h3>

<p>

A <strong>DDL Lock</strong> is automatically applied whenever database objects are created, modified, or deleted.

</p>

<p>

This prevents other users from making structural changes to the same object simultaneously.

</p>

<h4>Examples</h4>

<pre>
CREATE TABLE student
(
   id NUMBER,
   name VARCHAR2(50)
);

ALTER TABLE employees
ADD email VARCHAR2(100);

DROP TABLE student;
</pre>

<h4>Explanation</h4>

<ul>

<li>Oracle locks the database object during the DDL operation.</li>

<li>No other user can modify the same object until the operation finishes.</li>

<li>DDL statements automatically perform a COMMIT before and after execution.</li>

</ul>

<hr>

<h3>When are Locks Released?</h3>

<table class="notes-table">

<tr>
<th>Operation</th>
<th>Lock Released?</th>
</tr>

<tr>
<td>COMMIT</td>
<td>Yes</td>
</tr>

<tr>
<td>ROLLBACK</td>
<td>Yes</td>
</tr>

<tr>
<td>Session Ends</td>
<td>Yes</td>
</tr>

</table>

<hr>

<h3>Difference Between DML Lock, Table Lock and DDL Lock</h3>

<table class="notes-table">

<tr>
<th>DML Lock</th>
<th>Table Lock</th>
<th>DDL Lock</th>
</tr>

<tr>
<td>Locks only affected rows.</td>
<td>Locks the entire table.</td>
<td>Locks the database object.</td>
</tr>

<tr>
<td>Applied automatically.</td>
<td>Applied manually.</td>
<td>Applied automatically.</td>
</tr>

<tr>
<td>Used with INSERT, UPDATE and DELETE.</td>
<td>Used with LOCK TABLE command.</td>
<td>Used with CREATE, ALTER and DROP.</td>
</tr>

<tr>
<td>Allows access to other rows.</td>
<td>Blocks access to the complete table.</td>
<td>Blocks structural changes to the object.</td>
</tr>

</table>

<hr>

<h3>Class Summary</h3>

<table class="notes-table">

<tr>
<th>Concept</th>
<th>Description</th>
</tr>

<tr>
<td>Lock</td>
<td>Prevents conflicting operations on database objects.</td>
</tr>

<tr>
<td>DML Lock</td>
<td>Automatically locks affected rows during data modification.</td>
</tr>

<tr>
<td>Table Lock</td>
<td>Locks the complete table manually.</td>
</tr>

<tr>
<td>DDL Lock</td>
<td>Automatically locks database objects during DDL operations.</td>
</tr>

<tr>
<td>Released By</td>
<td>COMMIT, ROLLBACK, or End of Session.</td>
</tr>

</table>

`;


let oracleConcurrencyControlContent = `

<h3>Concurrency Control in Oracle</h3>

<p>

Good morning students!

Today we are going to learn one of the most important concepts in Oracle Database called <strong>Concurrency Control</strong>.

In a real-world database, hundreds or even thousands of users may access the same database at the same time. Some users may be reading data while others are inserting, updating, or deleting records.

Oracle must ensure that all users can work simultaneously without causing data inconsistency or corruption.

This process is known as <strong>Concurrency Control</strong>.

</p>

<hr>

<h3>What is Concurrency Control?</h3>

<p>

<strong>Concurrency Control</strong> is a mechanism used by Oracle Database to manage simultaneous access to the same data by multiple users while maintaining data consistency, integrity, and isolation.

</p>

<p>

Its main purpose is to ensure that multiple users can work on the database at the same time without interfering with each other's transactions.

</p>

<hr>

<h3>Why Do We Need Concurrency Control?</h3>

<p>

Imagine a banking application where two users try to withdraw money from the same account at exactly the same time.

If Oracle allows both transactions to execute without control, the account balance may become incorrect.

Concurrency Control prevents such problems.

</p>

<ul>

<li>To maintain data consistency.</li>

<li>To protect data integrity.</li>

<li>To prevent conflicting transactions.</li>

<li>To allow multiple users to work simultaneously.</li>

<li>To improve database performance.</li>

<li>To avoid data corruption.</li>

</ul>

<hr>

<h3>Real-Life Example</h3>

<p>

Suppose there is only one seat available on a train.

</p>

<p>

Two users try to book the same seat at exactly the same time.

Without Concurrency Control, both users may receive the same seat number.

With Oracle Concurrency Control, only one booking is successful, while the other user must wait or receives an appropriate message.

</p>

<hr>

<h3>How Concurrency Control Works?</h3>

<table class="notes-table">

<tr>
<th>Step</th>
<th>Description</th>
</tr>

<tr>
<td>1</td>
<td>User A starts a transaction.</td>
</tr>

<tr>
<td>2</td>
<td>Oracle locks the required data.</td>
</tr>

<tr>
<td>3</td>
<td>User B requests the same data.</td>
</tr>

<tr>
<td>4</td>
<td>Oracle makes User B wait until User A finishes.</td>
</tr>

<tr>
<td>5</td>
<td>User A performs COMMIT or ROLLBACK.</td>
</tr>

<tr>
<td>6</td>
<td>Oracle releases the lock and User B continues.</td>
</tr>

</table>

<hr>

<h3>Problems Without Concurrency Control</h3>

<table class="notes-table">

<tr>
<th>Problem</th>
<th>Description</th>
</tr>

<tr>
<td>Lost Update</td>
<td>One user's update overwrites another user's update.</td>
</tr>

<tr>
<td>Dirty Read</td>
<td>A transaction reads uncommitted data from another transaction.</td>
</tr>

<tr>
<td>Non-Repeatable Read</td>
<td>The same query returns different results because another transaction modified the data.</td>
</tr>

<tr>
<td>Phantom Read</td>
<td>New rows appear or disappear during repeated execution of the same query.</td>
</tr>

</table>

<hr>

<h3>Example 1 : Lost Update</h3>

<p>

Assume Employee 101 has a salary of <strong>50000</strong>.

</p>

<table class="notes-table">

<tr>
<th>User A</th>
<th>User B</th>
</tr>

<tr>
<td>Reads Salary = 50000</td>
<td>Reads Salary = 50000</td>
</tr>

<tr>
<td>Updates Salary to 55000</td>
<td>Updates Salary to 60000</td>
</tr>

<tr>
<td>COMMIT</td>
<td>COMMIT</td>
</tr>

</table>

<p>

Without Concurrency Control, User A's update is lost because User B overwrites it.

Oracle prevents this by using row-level locking.

</p>

<hr>

<h3>Example 2 : Automatic Row Lock</h3>

<pre>
UPDATE employees
SET salary = 60000
WHERE emp_id = 101;
</pre>

<p>

Oracle automatically locks the row with EMP_ID = 101.

Another user cannot update or delete the same row until the current transaction performs COMMIT or ROLLBACK.

</p>

<hr>

<h3>Techniques Used by Oracle</h3>

<table class="notes-table">

<tr>
<th>Technique</th>
<th>Purpose</th>
</tr>

<tr>
<td>Row-Level Locking</td>
<td>Locks only the affected rows.</td>
</tr>

<tr>
<td>Multi-Version Read Consistency (MVCC)</td>
<td>Allows readers to see a consistent snapshot without blocking writers.</td>
</tr>

<tr>
<td>Transactions</td>
<td>Maintain consistency using COMMIT and ROLLBACK.</td>
</tr>

<tr>
<td>Undo Segments</td>
<td>Store previous versions of data for rollback and read consistency.</td>
</tr>

</table>

<hr>

<h3>Concurrency Control vs Locking</h3>

<table class="notes-table">

<tr>
<th>Concurrency Control</th>
<th>Locking</th>
</tr>

<tr>
<td>Overall mechanism to manage multiple users.</td>
<td>A technique used to implement concurrency control.</td>
</tr>

<tr>
<td>Includes transactions, MVCC, and locks.</td>
<td>Only prevents conflicting updates.</td>
</tr>

<tr>
<td>Provides consistency and isolation.</td>
<td>Protects specific rows or tables.</td>
</tr>

<tr>
<td>Broad database concept.</td>
<td>One component of concurrency control.</td>
</tr>

</table>

<hr>

<h3>Advantages of Concurrency Control</h3>

<ul>

<li>Maintains data consistency.</li>

<li>Protects data integrity.</li>

<li>Allows multiple users to work simultaneously.</li>

<li>Prevents lost updates.</li>

<li>Improves database reliability.</li>

<li>Supports safe transaction processing.</li>

<li>Provides better database performance.</li>

</ul>

<hr>

<h3>Important Commands Used</h3>

<table class="notes-table">

<tr>
<th>Command</th>
<th>Purpose</th>
</tr>

<tr>
<td>COMMIT</td>
<td>Saves the transaction permanently and releases locks.</td>
</tr>

<tr>
<td>ROLLBACK</td>
<td>Undoes changes and releases locks.</td>
</tr>

<tr>
<td>SAVEPOINT</td>
<td>Creates a checkpoint within a transaction.</td>
</tr>

<tr>
<td>LOCK TABLE</td>
<td>Locks an entire table manually.</td>
</tr>

</table>

<hr>

<h3>Class Summary</h3>

<ul>

<li>Concurrency Control manages simultaneous access to database data.</li>

<li>It ensures data consistency, integrity, and isolation.</li>

<li>Oracle uses Row-Level Locking and MVCC to support concurrent users.</li>

<li>It prevents problems such as Lost Update, Dirty Read, Non-Repeatable Read, and Phantom Read.</li>

<li>Locks are automatically released after COMMIT, ROLLBACK, or the end of a session.</li>

<li>Concurrency Control is essential for multi-user database applications.</li>

</ul>

`;

let oracleTriggersContent = `

<h3>Triggers in Oracle PL/SQL</h3>

<p>

Good morning students!

Today we are going to learn an important database object in Oracle PL/SQL called <strong>Trigger</strong>.

A <strong>Trigger</strong> is a special type of stored PL/SQL program that automatically executes (fires) whenever a specified event occurs in the database.

Unlike Procedures and Functions, a Trigger does not need to be called explicitly. Oracle automatically executes it when the associated event occurs.

</p>

<hr>

<h3>What is a Trigger?</h3>

<p>

A <strong>Trigger</strong> is a stored PL/SQL block that is automatically executed when a specific event such as <strong>INSERT</strong>, <strong>UPDATE</strong>, or <strong>DELETE</strong> occurs on a table or view.

</p>

<p>

Triggers are mainly used to enforce business rules, maintain audit information, validate data, and perform automatic actions whenever database changes occur.

</p>

<hr>

<h3>Why Do We Use Triggers?</h3>

<ul>

<li>To automatically execute code when data changes.</li>

<li>To maintain data integrity.</li>

<li>To validate data before inserting or updating.</li>

<li>To create audit logs automatically.</li>

<li>To generate automatic values such as dates or IDs.</li>

<li>To enforce business rules.</li>

</ul>

<hr>

<h3>Real-Life Example</h3>

<p>

Suppose a college maintains a <strong>Student Registration</strong> system.

Whenever a new student is admitted, the admission date should automatically be stored.

Instead of entering the admission date manually every time, a Trigger automatically stores the current system date.

This saves time and avoids mistakes.

</p>

<hr>

<h3>Events That Fire a Trigger</h3>

<table class="notes-table">

<tr>
<th>Event</th>
<th>Description</th>
</tr>

<tr>
<td>INSERT</td>
<td>Trigger executes whenever a new row is inserted.</td>
</tr>

<tr>
<td>UPDATE</td>
<td>Trigger executes whenever an existing row is modified.</td>
</tr>

<tr>
<td>DELETE</td>
<td>Trigger executes whenever a row is deleted.</td>
</tr>

<tr>
<td>DDL Events</td>
<td>CREATE, ALTER, DROP etc.</td>
</tr>

<tr>
<td>System Events</td>
<td>LOGON, LOGOFF, STARTUP, SHUTDOWN etc.</td>
</tr>

</table>

<hr>

<h3>Parts of a Trigger</h3>

<table class="notes-table">

<tr>
<th>Part</th>
<th>Description</th>
</tr>

<tr>
<td>Trigger Header</td>
<td>Defines the trigger name, timing, event, and table.</td>
</tr>

<tr>
<td>Trigger Timing</td>
<td>Specifies whether the trigger fires BEFORE or AFTER the event.</td>
</tr>

<tr>
<td>Trigger Body</td>
<td>Contains the PL/SQL statements executed by the trigger.</td>
</tr>

</table>

<hr>

<h3>General Syntax of a Trigger</h3>

<pre>
CREATE OR REPLACE TRIGGER trigger_name

BEFORE | AFTER

INSERT OR UPDATE OR DELETE

ON table_name

FOR EACH ROW

DECLARE
   -- Variable declarations (Optional)

BEGIN
   -- Trigger Logic

EXCEPTION
   -- Exception Handling (Optional)

END;
/
</pre>

<hr>

<h3>Types of Triggers</h3>

<table class="notes-table">

<tr>
<th>Trigger Type</th>
<th>Description</th>
</tr>

<tr>
<td>Row-Level Trigger</td>
<td>Executes once for every affected row. Uses FOR EACH ROW.</td>
</tr>

<tr>
<td>Statement-Level Trigger</td>
<td>Executes only once for the entire SQL statement.</td>
</tr>

<tr>
<td>BEFORE Trigger</td>
<td>Executes before INSERT, UPDATE, or DELETE.</td>
</tr>

<tr>
<td>AFTER Trigger</td>
<td>Executes after INSERT, UPDATE, or DELETE.</td>
</tr>

<tr>
<td>INSTEAD OF Trigger</td>
<td>Used on views to perform custom DML operations.</td>
</tr>

</table>

<hr>

<h3>Difference Between Row-Level and Statement-Level Trigger</h3>

<table class="notes-table">

<tr>
<th>Row-Level Trigger</th>
<th>Statement-Level Trigger</th>
</tr>

<tr>
<td>Executes once for every affected row.</td>
<td>Executes only once for the SQL statement.</td>
</tr>

<tr>
<td>Uses FOR EACH ROW.</td>
<td>Does not use FOR EACH ROW.</td>
</tr>

<tr>
<td>Can use :NEW and :OLD values.</td>
<td>Cannot use :NEW and :OLD values.</td>
</tr>

<tr>
<td>Suitable for row validation.</td>
<td>Suitable for logging and auditing.</td>
</tr>

</table>

<hr>

<h3>Difference Between BEFORE and AFTER Trigger</h3>

<table class="notes-table">

<tr>
<th>BEFORE Trigger</th>
<th>AFTER Trigger</th>
</tr>

<tr>
<td>Executes before the event.</td>
<td>Executes after the event.</td>
</tr>

<tr>
<td>Used for validation and modifying values.</td>
<td>Used for logging and auditing.</td>
</tr>

<tr>
<td>Can change :NEW values.</td>
<td>Cannot modify data already committed by the event.</td>
</tr>

</table>

<hr>

<h3>Example : BEFORE INSERT Trigger</h3>

<h4>Step 1 : Create Table</h4>

<pre>
CREATE TABLE students
(
    id NUMBER PRIMARY KEY,
    name VARCHAR2(50),
    created_date DATE
);
</pre>

<p>

The <strong>created_date</strong> column will be filled automatically by the trigger.

</p>

<hr>

<h4>Step 2 : Create Trigger</h4>

<p>

Whenever a new student is inserted, Oracle automatically stores the current system date.

</p>

<pre>
CREATE OR REPLACE TRIGGER trg_students_before_insert

BEFORE INSERT

ON students

FOR EACH ROW

BEGIN

   :NEW.created_date := SYSDATE;

END;
/
</pre>

<hr>

<h4>Step 3 : Insert Data</h4>

<pre>
INSERT INTO students(id, name)
VALUES (1, 'Amit');

INSERT INTO students(id, name)
VALUES (2, 'Priya');

INSERT INTO students(id, name)
VALUES (3, 'Rahul');
</pre>

<p>

Notice that we did not insert the <strong>created_date</strong> value.

The trigger automatically stores the current date.

</p>

<hr>

<h4>Step 4 : Verify Data</h4>

<pre>
SELECT *
FROM students;
</pre>

<table class="notes-table">

<tr>
<th>ID</th>
<th>NAME</th>
<th>CREATED_DATE</th>
</tr>

<tr>
<td>1</td>
<td>Amit</td>
<td>09-OCT-2025</td>
</tr>

<tr>
<td>2</td>
<td>Priya</td>
<td>09-OCT-2025</td>
</tr>

<tr>
<td>3</td>
<td>Rahul</td>
<td>09-OCT-2025</td>
</tr>

</table>

<hr>

<h3>Understanding :NEW and :OLD</h3>

<table class="notes-table">

<tr>
<th>Pseudo Record</th>
<th>Description</th>
</tr>

<tr>
<td>:NEW</td>
<td>Represents the new values being inserted or updated.</td>
</tr>

<tr>
<td>:OLD</td>
<td>Represents the existing values before UPDATE or DELETE.</td>
</tr>

</table>

<h4>Example</h4>

<pre>
:NEW.salary
</pre>

<p>

Represents the new salary value after an UPDATE or INSERT.

</p>

<pre>
:OLD.salary
</pre>

<p>

Represents the old salary before the UPDATE operation.

</p>

<hr>

<h3>Advantages of Triggers</h3>

<ul>

<li>Execute automatically.</li>

<li>Improve data integrity.</li>

<li>Reduce repetitive programming.</li>

<li>Useful for auditing database activities.</li>

<li>Automatically maintain history tables.</li>

<li>Validate data before saving.</li>

<li>Enforce business rules.</li>

</ul>

<hr>

<h3>Disadvantages of Triggers</h3>

<ul>

<li>Can make debugging difficult.</li>

<li>May reduce performance if many triggers exist.</li>

<li>Hidden execution makes code harder to understand.</li>

<li>Complex trigger chains can become difficult to maintain.</li>

</ul>

<hr>

<h3>Class Summary</h3>

<ul>

<li>A Trigger is a stored PL/SQL program that executes automatically.</li>

<li>Triggers fire on INSERT, UPDATE, DELETE, DDL, or System events.</li>

<li>Triggers may be BEFORE, AFTER, Row-Level, Statement-Level, or INSTEAD OF.</li>

<li>:NEW contains new values and :OLD contains previous values.</li>

<li>Triggers help automate tasks, validate data, and maintain database integrity.</li>

</ul>

`;












let oraclePLSQLSubBlockAndStoredProcedureContent = `

<h3>Stored Program </h3>

<p>

Good morning students!

In the previous lectures, we learned about PL/SQL blocks, variables, control structures, exception handling, and sub blocks.

Now, we are going to study one of the most important concepts in Oracle PL/SQL called <strong>Stored Program Units</strong>.

In real-world applications, the same PL/SQL code is often required multiple times. Instead of writing the same code repeatedly, Oracle allows us to save the program permanently inside the database. These saved programs are called <strong>Stored Program Units</strong>.

</p>

<hr>

<h3>What are Stored Program Units?</h3>

<p>

<strong>Stored Program Units</strong> are named PL/SQL programs that are permanently stored in the Oracle Database.

They are compiled only once and can be executed whenever required without rewriting the code.

</p>

<p>

Since they are stored inside the database, they improve performance, reduce code duplication, and make application development easier.

</p>

<hr>

<h3>Why Do We Use Stored Program Units?</h3>

<ul>

<li>To reuse the same code multiple times.</li>

<li>To improve database performance.</li>

<li>To reduce code duplication.</li>

<li>To simplify application development.</li>

<li>To improve security by storing business logic in the database.</li>

<li>To make programs easier to maintain.</li>

</ul>

<hr>

<h3>Real-Life Example</h3>

<p>

Suppose a bank calculates interest for customer accounts every month.

Instead of writing the interest calculation code in every application, the bank stores the calculation logic once in the Oracle Database.

Whenever required, different applications simply execute the stored program.

This saves time, reduces errors, and improves performance.

</p>

<hr>

<h3>Characteristics of Stored Program Units</h3>

<table class="notes-table">

<tr>
<th>Feature</th>
<th>Description</th>
</tr>

<tr>
<td>Named Program</td>
<td>Every stored program has a unique name.</td>
</tr>

<tr>
<td>Permanently Stored</td>
<td>Saved inside the Oracle Database.</td>
</tr>

<tr>
<td>Compiled Once</td>
<td>Compilation occurs only when the program is created or modified.</td>
</tr>

<tr>
<td>Reusable</td>
<td>Can be executed multiple times.</td>
</tr>

<tr>
<td>Secure</td>
<td>Only authorized users can access or execute them.</td>
</tr>

</table>

<hr>

<h3>Types of Stored Program Units</h3>

<table class="notes-table">

<tr>
<th>S.No.</th>
<th>Stored Program Unit</th>
<th>Purpose</th>
</tr>

<tr>
<td>1</td>
<td>Stored Procedure</td>
<td>Performs a specific task but does not directly return a value.</td>
</tr>

<tr>
<td>2</td>
<td>Stored Function</td>
<td>Performs a task and always returns a value.</td>
</tr>

<tr>
<td>3</td>
<td>Package</td>
<td>Groups related procedures, functions, variables, and cursors together.</td>
</tr>

<tr>
<td>4</td>
<td>Trigger</td>
<td>Automatically executes when a specified database event occurs.</td>
</tr>

</table>

<hr>


<h3>Advantages of Stored Program Units</h3>

<ul>

<li>Improves execution performance.</li>

<li>Supports code reusability.</li>

<li>Reduces network traffic.</li>

<li>Provides better security.</li>

<li>Makes debugging and maintenance easier.</li>

<li>Centralizes business logic inside the database.</li>

<li>Reduces application development time.</li>

</ul>

<hr>


<h3>Stored Procedures</h3>


<p>
A stored procedure is a named PL/SQL block that is stored in the database and can be executed whenever required.
It is a database object that contains precompiled logic and queries.
</p>


<p>
Oracle stores the procedure in the data dictionary after compilation.
When executed, Oracle loads it into memory, runs it, and then frees the memory.
</p>


<p>
A procedure can return values indirectly through OUT or IN OUT parameters, but not directly like a function.
</p>


<p><strong>There are two types of stored procedures:</strong></p>


<ul>
<li>Procedure Without Parameters</li>
<li>Procedure With Parameters</li>
</ul>


<hr>


<h3>1. Procedure Without Parameters</h3>


<p>
A procedure without parameters does not take any input or output values.
It performs a task independently, such as printing a message or showing the current date.
</p>


<p><strong>Syntax:</strong></p>


<pre>
CREATE OR REPLACE PROCEDURE procedure_name
IS
   -- Declarations (optional)
BEGIN
   -- Executable statements
EXCEPTION
   -- Exception handling (optional)
END procedure_name;
/
</pre>


<p><strong>Example:</strong></p>


<pre>
CREATE OR REPLACE PROCEDURE show_welcome_message
IS
BEGIN
   DBMS_OUTPUT.PUT_LINE('Welcome to SharadaIT Training!');
   DBMS_OUTPUT.PUT_LINE('Today''s Date is: ' || TO_CHAR(SYSDATE, 'DD-MON-YYYY'));
END show_welcome_message;
/
</pre>


<p><strong>How to Call:</strong></p>


<pre>
EXEC show_welcome_message;
</pre>


<p><strong>Or use an Anonymous Block:</strong></p>


<pre>
BEGIN
   show_welcome_message;
END;
/
</pre>


<hr>


<h3>2. Procedure With Parameters</h3>


<p>
Procedures can accept parameters to make them more flexible.
Parameters allow us to send values into the procedure, get values out of it, or do both.
</p>


<p><strong>Parameter Modes:</strong></p>


<ul>
<li><strong>IN</strong> → Input parameter, used to send value into the procedure.</li>
<li><strong>OUT</strong> → Output parameter, used to return a value from the procedure.</li>
<li><strong>IN OUT</strong> → Works both ways, sends a value in and returns an updated value.</li>
</ul>


<p><strong>Syntax:</strong></p>


<pre>
CREATE OR REPLACE PROCEDURE procedure_name(
   parameter1 IN datatype,
   parameter2 OUT datatype,
   parameter3 IN OUT datatype
)
IS
   -- Declarations
BEGIN
   -- Executable statements
EXCEPTION
   -- Exception handling
END procedure_name;
/
</pre>


<p><strong>Example: A Simple Stored Procedure</strong></p>


<pre>
CREATE OR REPLACE PROCEDURE calculate_values(
   p_num1   IN NUMBER,
   p_square OUT NUMBER,
   p_double IN OUT NUMBER
)
IS
BEGIN
   p_square := p_num1 * p_num1;
   p_double := p_double * 2;
EXCEPTION
   WHEN OTHERS THEN
      DBMS_OUTPUT.PUT_LINE('An error occurred: ' || SQLERRM);
END calculate_values;
/
</pre>


<p><strong>How to Call the Procedure:</strong></p>


<pre>
DECLARE
   v_num1   NUMBER := 5;
   v_square NUMBER;
   v_double NUMBER := 10;
BEGIN
   calculate_values(v_num1, v_square, v_double);

   DBMS_OUTPUT.PUT_LINE('Number: ' || v_num1);
   DBMS_OUTPUT.PUT_LINE('Square: ' || v_square);
   DBMS_OUTPUT.PUT_LINE('Double: ' || v_double);
END;
/
</pre>


<p><strong>Example: Get User ID by Username</strong></p>


<pre>
CREATE OR REPLACE PROCEDURE get_user_id (
   p_username IN VARCHAR2,
   p_user_id OUT NUMBER
)
IS
BEGIN
   SELECT user_id
   INTO p_user_id
   FROM users
   WHERE username = p_username;

EXCEPTION
   WHEN NO_DATA_FOUND THEN
      DBMS_OUTPUT.PUT_LINE('No user found with username: ' || p_username);
      p_user_id := NULL;
   WHEN OTHERS THEN
      DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
      p_user_id := NULL;
END;
/
</pre>


<p><strong>Call the Procedure:</strong></p>


<pre>
SET SERVEROUTPUT ON;
DECLARE
   v_user_id NUMBER;
BEGIN
   get_user_id('john_doe', v_user_id);
   DBMS_OUTPUT.PUT_LINE('User ID: ' || v_user_id);
END;
/
</pre>


<hr>


<h3>Memory and Execution Notes</h3>


<ul>
<li>Oracle stores compiled procedures in the database data dictionary.</li>
<li>When executed, the procedure is loaded into shared memory and processed.</li>
<li>SGA is shared memory used by the Oracle instance for code and data.</li>
<li>PGA is private memory used for a session’s variables, cursors, and work areas.</li>
<li>Stored procedures improve performance because they are precompiled and reusable.</li>
</ul>


<hr>


<h3>Dropping a Procedure</h3>


<pre>
DROP PROCEDURE proc_name;
</pre>


<hr>


<h3>Class Summary</h3>


<ul>
<li>Sub blocks help handle errors locally inside another block.</li>
<li>Stored procedures are named PL/SQL blocks stored in the database.</li>
<li>Procedures may have no parameters or may use IN, OUT, and IN OUT parameters.</li>
<li>Procedures can return values indirectly through OUT parameters.</li>
<li>They can be executed whenever required and dropped when no longer needed.</li>
</ul>


`;

