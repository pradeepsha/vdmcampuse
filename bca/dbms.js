
let whydbms = `

<h3>Why DBMS?</h3>

<p>
Before understanding <strong>DBMS (Database Management System)</strong>, we should first understand how data was stored before DBMS. Earlier, organizations used the <strong>Traditional File System</strong> to store information.
</p>

<h3>What is a Traditional File System?</h3>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
A <strong>Traditional File System</strong> is a method of storing data in separate files where each department or application manages its own data independently without a centralized database.
</p>

</div>

<h4>Real-Life Example</h4>

<p>
Suppose there is a bank that has different departments.
Each department stores its own data in separate files.
</p>

<table class="notes-table">
<tr>
<th>Department</th>
<th>Data Stored</th>
</tr>

<tr>
<td>Official Department</td>
<td>Employee Data</td>
</tr>

<tr>
<td>Accounts Department</td>
<td>Saving Account & Current Account Data</td>
</tr>

<tr>
<td>Loan Department</td>
<td>Loan Records</td>
</tr>

<tr>
<td>Cash Department</td>
<td>Cash Deposit & Withdrawal Records</td>
</tr>

</table>

<p>
Every department works independently. One department does not know what is happening in another department.
This method is called the <strong>Traditional File System</strong>.
</p>

<h3>Why Not Use the Traditional File System?</h3>

<p>
Although the Traditional File System was easy to implement, it had many disadvantages. These disadvantages led to the development of DBMS.
</p>

<h3>Disadvantages of Traditional File System</h3>

<p>
The Traditional File System stores data in separate files for different departments or applications.
Since there is no centralized database, it creates many problems.
These problems are called the <strong>Disadvantages of the Traditional File System</strong>.
</p>

<hr>

<h4>1. Data Redundancy (Data Duplication)</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
<b>Data Redundancy</b> means storing the <b>same data</b> in more than one file or location.
The same information is repeated multiple times, which wastes storage space.
</p>

</div>

<h4>Example</h4>

<p>
Suppose Rahul has a Saving Account and also takes a Loan from the bank.
His personal information is stored in both files.
</p>

<pre class="notes_text_pre">
Saving Account File

Name : Rahul
Mobile : 9876543210

Loan File

Name : Rahul
Mobile : 9876543210
</pre>

<p>
The same information is stored twice.
This is called <b>Data Redundancy</b>.
</p>

<b>Problems:</b>

<ul>
<li>Wastes storage space.</li>
<li>Increases maintenance cost.</li>
<li>Updating data becomes difficult.</li>
</ul>

<hr>

<h4>2. Data Inconsistency</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
<b>Data Inconsistency</b> occurs when the same data has different values in different files.
This usually happens when one file is updated and another file is not.
</p>

</div>

<h4>Example</h4>

<p>
Rahul changes his mobile number.
The Saving Account file is updated, but the Loan file is not updated.
</p>

<pre class="notes_text_pre">
Saving File

Mobile : 9876543210

Loan File

Mobile : 9123456789
</pre>

<p>
Now there are two different mobile numbers for the same customer.
This is called <b>Data Inconsistency</b>.
</p>

<b>Problems:</b>

<ul>
<li>Incorrect information.</li>
<li>Wrong reports.</li>
<li>Confusion among departments.</li>
</ul>

<hr>

<h4>3. Data Isolation</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
<b>Data Isolation</b> means data is stored in different files and different formats.
Because of this, collecting complete information becomes difficult.
</p>

</div>

<h4>Example</h4>

<p>
Customer details are stored in one file.
Loan details are stored in another file.
Transaction details are stored in a different file.
To prepare one report, all files must be searched separately.
</p>

<b>Problems:</b>

<ul>
<li>Difficult to collect complete information.</li>
<li>Report generation becomes slow.</li>
<li>Searching requires more effort.</li>
</ul>

<hr>

<h4>4. Difficult Data Access</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
Finding the required information from many different files takes more time.
There is no single place where all data is available.
</p>

</div>

<h4>Example</h4>

<p>
If a bank manager wants the complete details of a customer,
he has to search multiple files such as Saving Account, Loan and Transaction files.
</p>

<b>Problems:</b>

<ul>
<li>Searching is slow.</li>
<li>More time is required.</li>
<li>Productivity decreases.</li>
</ul>

<hr>

<h4>5. Poor Data Security</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
The Traditional File System provides very little security.
Unauthorized users can easily view, modify or delete important data.
</p>

</div>

<h4>Example</h4>

<p>
An employee opens the salary file and changes the salary of another employee.
There is no proper access control.
</p>

<b>Problems:</b>

<ul>
<li>Unauthorized access.</li>
<li>Data theft.</li>
<li>Loss of confidential information.</li>
</ul>

<hr>

<h4>6. Difficult Data Sharing</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
Since every department stores its own files,
sharing data between departments becomes difficult.
</p>

</div>

<h4>Example</h4>

<p>
The Loan Department needs customer information from the Accounts Department.
The information has to be copied manually.
</p>

<b>Problems:</b>

<ul>
<li>Slow communication.</li>
<li>Extra manual work.</li>
<li>Possibility of errors.</li>
</ul>

<hr>

<h4>7. No Backup and Recovery</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
The Traditional File System does not provide a proper backup and recovery mechanism.
If data is lost due to hardware failure or accidental deletion,
recovering the data becomes very difficult.
</p>

</div>

<h4>Example</h4>

<p>
If the computer crashes or the hard disk is damaged,
important customer records may be permanently lost.
</p>

<b>Problems:</b>

<ul>
<li>Permanent data loss.</li>
<li>Difficult recovery process.</li>
<li>Business interruption.</li>
</ul>

<hr>

<h4>8. Program-Data Dependence</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
In the Traditional File System,
programs are directly connected to file structures.
If the file structure changes,
all related programs must also be modified.
</p>

</div>

<h4>Example</h4>

<p>
Suppose a new field called Email is added to the Employee File.
Every program using that file must be updated.
</p>

<b>Problems:</b>

<ul>
<li>Extra programming effort.</li>
<li>Higher maintenance cost.</li>
<li>More chances of software errors.</li>
</ul>

<hr>

<h4>9. No Concurrent Access</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
The Traditional File System does not properly support multiple users working on the same data at the same time.
</p>

</div>

<h4>Example</h4>

<p>
Two bank employees update the same customer account simultaneously.
One update may overwrite the other update.
</p>

<b>Problems:</b>

<ul>
<li>Data conflict.</li>
<li>Incorrect records.</li>
<li>Loss of important updates.</li>
</ul>

<hr>

<h4>10. High Maintenance Cost</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
Maintaining many separate files and programs requires more time, effort and money.
</p>

</div>

<h4>Example</h4>

<p>
Whenever customer information changes,
every related file must be updated manually.
</p>

<b>Problems:</b>

<ul>
<li>More manual work.</li>
<li>Higher maintenance cost.</li>
<li>Low efficiency.</li>
</ul>

<hr>

<h3>Summary</h3>

<table class="notes-table">

<tr>
<th>Disadvantage</th>
<th>Description</th>
</tr>

<tr>
<td>Data Redundancy</td>
<td>Same data is stored multiple times.</td>
</tr>

<tr>
<td>Data Inconsistency</td>
<td>Same data has different values in different files.</td>
</tr>

<tr>
<td>Data Isolation</td>
<td>Data is scattered across different files.</td>
</tr>

<tr>
<td>Difficult Data Access</td>
<td>Searching data takes more time.</td>
</tr>

<tr>
<td>Poor Security</td>
<td>Unauthorized users can access data.</td>
</tr>

<tr>
<td>Difficult Data Sharing</td>
<td>Departments cannot easily share information.</td>
</tr>

<tr>
<td>No Backup & Recovery</td>
<td>Data loss is difficult to recover.</td>
</tr>

<tr>
<td>Program-Data Dependence</td>
<td>Changing file structure requires program changes.</td>
</tr>

<tr>
<td>No Concurrent Access</td>
<td>Multiple users cannot safely update data together.</td>
</tr>

<tr>
<td>High Maintenance Cost</td>
<td>Managing many files is expensive and time-consuming.</td>
</tr>

</table>

<hr>

<h3>Types of Data in a Database</h3>

<p>
Data stored in a database can be of different types.
The two most common types are:
</p>

<h4>1. Structured Data</h4>

<div class="code-box">

<div class="code-title">
<span>Structured Data</span>
</div>

<p>
Structured data is data that is stored in a fixed format such as rows and columns.
It follows a predefined structure and is easy to search and manage.
</p>

</div>

<h4>Examples</h4>

<ul>
<li>MySQL Database</li>
<li>Oracle Database</li>
<li>SQL Server</li>
<li>Excel File</li>
<li>CSV File</li>
</ul>

<p>
Example:
</p>

<pre class="notes_text_pre">
ID   Name      Course

1    Rahul     BCA
2    Mohan     MCA
3    Priya     B.Tech
</pre>

<hr>

<h4>2. Unstructured Data</h4>

<div class="code-box">

<div class="code-title">
<span>Unstructured Data</span>
</div>

<p>
Unstructured data does not follow any fixed format.
It cannot be stored easily in rows and columns.
</p>

</div>

<h4>Examples</h4>

<ul>
<li>Images</li>
<li>Videos</li>
<li>Audio Files</li>
<li>Email Messages</li>
<li>PDF Documents</li>
<li>Word Documents</li>
<li>Social Media Posts</li>
</ul>

<hr>

<h3>Characteristics of Data in Database</h3>

<p>
A database stores data in an organized and systematic manner. The data stored in a database has some important characteristics that make it easy to manage, access, and protect. These characteristics help organizations store large amounts of information efficiently.
</p>

<hr>

<h4>1. Structured Data</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
Data in a database is stored in a <b>structured format</b>, usually in the form of <b>rows and columns (tables)</b>. This structure makes data easy to store, search, and update.
</p>

</div>

<b>Example:</b>

<pre class="notes_text_pre">
Student Table

+----+--------+------+
| ID | Name   | Age  |
+----+--------+------+
| 1  | Rahul  | 20   |
| 2  | Priya  | 21   |
+----+--------+------+
</pre>

<hr>

<h4>2. Organized Data</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
The data is stored in a well-organized manner so that users can easily find the required information without confusion.
</p>

</div>

<b>Example:</b>

<p>
A school's database stores student records, teacher records, and fee records in separate tables.
</p>

<hr>

<h4>3. Interrelated Data</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
The data stored in a database is related to each other. Different tables can be connected using relationships.
</p>

</div>

<b>Example:</b>

<p>
A Student table is connected with the Marks table using the Student ID.
</p>

<pre class="notes_text_pre">
Student Table          Marks Table

Student_ID ---------> Student_ID
</pre>

<hr>

<h4>4. Shared Data</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
Multiple users can access the same database at the same time, according to their permissions.
</p>

</div>

<b>Example:</b>

<p>
In a bank, the cashier, manager, and loan officer can access the same customer database.
</p>

<hr>

<h4>5. Data Integrity</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
Data Integrity means the data remains accurate, correct, and consistent throughout its life cycle.
</p>

</div>

<b>Example:</b>

<p>
A student's Roll Number cannot be duplicated because it is unique.
</p>

<hr>

<h4>6. Data Consistency</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
The same data should have the same value everywhere in the database. Whenever data is updated, all users see the latest information.
</p>

</div>

<b>Example:</b>

<p>
If a customer's mobile number is updated, every department sees the updated number.
</p>

<hr>

<h4>7. Data Security</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
The database protects data from unauthorized users by using usernames, passwords, and permissions.
</p>

</div>

<b>Example:</b>

<p>
Only the HR department can access employee salary information.
</p>

<hr>

<h4>8. Data Independence</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
Changes made to the database structure do not require major changes in application programs.
</p>

</div>

<b>Example:</b>

<p>
A new column "Email" is added to the Student table without affecting the existing application.
</p>

<hr>

<h4>9. Data Redundancy Control</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
The database minimizes duplicate data by storing the same information only once.
</p>

</div>

<b>Example:</b>

<p>
Customer information is stored in one table and used by all departments.
</p>

<hr>

<h4>10. Easy Data Retrieval</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
Users can quickly search and retrieve the required data using queries.
</p>

</div>

<b>Example:</b>

<p>
Searching a student by Roll Number returns the complete student information within seconds.
</p>

<hr>

<h4>11. Backup and Recovery</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
The database provides backup and recovery features to protect data from accidental loss or system failure.
</p>

</div>

<b>Example:</b>

<p>
If the server crashes, the database can be restored from the backup.
</p>

<hr>

<h4>12. Scalability</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
A database can store a small amount of data as well as millions of records without changing the overall system.
</p>

</div>

<b>Example:</b>

<p>
An e-commerce website can store information about millions of customers and products.
</p>

<hr>

<h3>Summary</h3>

<table class="notes-table">

<tr>
<th>Characteristic</th>
<th>Description</th>
</tr>

<tr>
<td>Structured Data</td>
<td>Data is stored in rows and columns.</td>
</tr>

<tr>
<td>Organized Data</td>
<td>Data is arranged systematically.</td>
</tr>

<tr>
<td>Interrelated Data</td>
<td>Different tables are connected.</td>
</tr>

<tr>
<td>Shared Data</td>
<td>Multiple users can access the database.</td>
</tr>

<tr>
<td>Data Integrity</td>
<td>Data remains accurate and valid.</td>
</tr>

<tr>
<td>Data Consistency</td>
<td>Same data has the same value everywhere.</td>
</tr>

<tr>
<td>Data Security</td>
<td>Unauthorized users cannot access data.</td>
</tr>

<tr>
<td>Data Independence</td>
<td>Database changes do not affect applications.</td>
</tr>

<tr>
<td>Redundancy Control</td>
<td>Duplicate data is minimized.</td>
</tr>

<tr>
<td>Easy Retrieval</td>
<td>Data can be searched quickly.</td>
</tr>

<tr>
<td>Backup & Recovery</td>
<td>Lost data can be restored.</td>
</tr>

<tr>
<td>Scalability</td>
<td>Database can grow with increasing data.</td>
</tr>

</table>



<hr>


<hr>

<h3>Interview Questions</h3>

<b>Q1. What is DBMS?</b>

<p>
A DBMS is software that helps users create, store, retrieve, update, delete and manage data efficiently.
</p>

<b>Q2. What is a Database?</b>

<p>
A database is an organized collection of related data.
</p>

<b>Q3. What is Structured Data?</b>

<p>
Structured data is data stored in a predefined format such as rows and columns.
</p>

<b>Q4. What is Unstructured Data?</b>

<p>
Unstructured data is data that does not follow any predefined format, such as images, videos and emails.
</p>

<hr>

<h3>Summary</h3>

<table class="notes-table">

<tr>
<th>Topic</th>
<th>Description</th>
</tr>

<tr>
<td>DBMS</td>
<td>Software used to manage databases.</td>
</tr>

<tr>
<td>Database</td>
<td>Collection of related data.</td>
</tr>

<tr>
<td>Structured Data</td>
<td>Data stored in rows and columns.</td>
</tr>

<tr>
<td>Unstructured Data</td>
<td>Data without a fixed format.</td>
</tr>

<tr>
<td>Main Purpose</td>
<td>Store, organize, retrieve and protect data.</td>
</tr>

</table>

`;

let intro_dbms = `

<h3>Introduction to DBMS (Database Management System)</h3>

<p>
In today's digital world, almost every organization stores a large amount of data. Schools maintain student records, banks store customer account details, hospitals keep patient information, and online shopping websites manage product and customer data. Managing such a huge amount of data manually is difficult, time-consuming, and error-prone.
</p>

<p>
Earlier, organizations used the <b>Traditional File System</b> to store data. In this system, every department maintained its own separate files. As the amount of data increased, many problems such as <b>data redundancy, data inconsistency, poor security, difficult data sharing, and slow data retrieval</b> started to occur.
</p>

<p>
To overcome these problems, the <b>Database Management System (DBMS)</b> was developed. A DBMS provides a centralized way to store, organize, manage, and retrieve data efficiently. It allows multiple users to access the same database securely while maintaining data accuracy and consistency.
</p>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
A <b>Database Management System (DBMS)</b> is software that allows users to create, store, retrieve, update, delete, and manage data in a structured and organized manner.
</p>

</div>

<h4>Why Do We Need DBMS?</h4>

<p>
As organizations grow, the amount of data also increases. Managing this data using separate files becomes difficult. DBMS solves these problems by providing a centralized database where all information is stored securely and efficiently.
</p>

<ul>
<li>Reduces Data Redundancy (Duplicate Data).</li>
<li>Maintains Data Consistency.</li>
<li>Provides Better Data Security.</li>
<li>Supports Multiple Users Simultaneously.</li>
<li>Allows Fast Searching and Retrieval of Data.</li>
<li>Provides Backup and Recovery Facilities.</li>
<li>Improves Data Sharing Among Departments.</li>
</ul>

<hr>

<h3>What is DBMS (Database Management System)?</h3>

<p>
Before learning DBMS, let us first understand two simple words:
</p>

<ul>
<li><b>Database</b> → A collection of related and interconnected data.</li>
<li><b>Management System</b> → Software that manages, controls, and protects the data.</li>
</ul>

<p>
When these two words are combined, they form the <b>Database Management System (DBMS)</b>.
</p>

<div class="code-box">

<div class="code-title">
<span>Definition of DBMS</span>
</div>

<p>
A <b>Database Management System (DBMS)</b> is software that is used to create, store, retrieve, update, delete, and manage data in a systematic, organized, and secure manner.
</p>

</div>

<p>
<b>In simple words:</b> DBMS is software that helps us store, organize, search, update, and manage data efficiently.
</p>

<hr>

<h4>Real-Life Example</h4>

<p>
Suppose there is a bank that has thousands of customers. The bank stores the following information:
</p>

<ul>
<li>Customer Name</li>
<li>Account Number</li>
<li>Mobile Number</li>
<li>Account Balance</li>
<li>Loan Details</li>
<li>Transaction History</li>
</ul>

<p>
If all this information is stored in different files, it becomes difficult to manage and update. Therefore, the bank uses a <b>DBMS</b> to store all customer information in a centralized database. Now every department can access the same data quickly, accurately, and securely.
</p>

<hr>

<h3>Key Components of DBMS</h3>

<h4>1. Database</h4>

<div class="code-box">

<div class="code-title">
<span>Database</span>
</div>

<p>
A <b>Database</b> is an organized collection of related and interconnected data. It stores information in tables so that it can be easily searched, updated, and managed.
</p>

</div>

<h4>Example</h4>

<ul>
<li>Student Details</li>
<li>Teacher Details</li>
<li>Attendance</li>
<li>Marks</li>
<li>Fee Records</li>
</ul>

<p>
All these records together form the school's database.
</p>

<hr>

<h4>2. Management System</h4>

<div class="code-box">

<div class="code-title">
<span>Management System</span>
</div>

<p>
A <b>Management System</b> is software that controls the database. It manages data storage, retrieval, updating, deletion, backup, recovery, and security.
</p>

</div>

<p>
It also ensures that only authorized users can access or modify the database.
</p>

<hr>

<h3>Functions of DBMS</h3>

<p>
A Database Management System performs many important functions to manage data efficiently.
</p>

<table class="notes-table">

<tr>
<th>Function</th>
<th>Description</th>
</tr>

<tr>
<td>Create</td>
<td>Create databases and tables.</td>
</tr>

<tr>
<td>Store</td>
<td>Store data securely.</td>
</tr>

<tr>
<td>Insert</td>
<td>Add new records.</td>
</tr>

<tr>
<td>Retrieve</td>
<td>Search and display records.</td>
</tr>

<tr>
<td>Update</td>
<td>Modify existing records.</td>
</tr>

<tr>
<td>Delete</td>
<td>Remove unwanted records.</td>
</tr>

<tr>
<td>Security</td>
<td>Protect data from unauthorized users.</td>
</tr>

<tr>
<td>Backup</td>
<td>Create backup copies of data.</td>
</tr>

<tr>
<td>Recovery</td>
<td>Restore data after failure.</td>
</tr>

</table>

<hr>

<h3>Operations Performed by DBMS</h3>

<p>
A DBMS allows users to perform the following operations:
</p>

<ul>
<li>Create Database</li>
<li>Create Tables</li>
<li>Insert Records</li>
<li>Retrieve Records</li>
<li>Update Records</li>
<li>Delete Records</li>
<li>Search Records</li>
<li>Sort Data</li>
<li>Filter Data</li>
<li>Generate Reports</li>
<li>Backup Database</li>
<li>Recover Lost Data</li>
</ul>

`;

let characteristics_data = `

<h3>Characteristics of Data in Database</h3>

<p>
A database stores data in a well-organized and structured manner. The data stored in a database has several important characteristics that make it easy to store, retrieve, update, and manage. These characteristics help organizations maintain accurate, secure, and reliable information.
</p>

<hr>

<h4>1. Structured Data</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
Data in a database is stored in a <b>structured format</b>, usually in the form of rows and columns (tables). This structure makes the data easy to understand, search, and manage.
</p>

</div>

<h4>Example</h4>

<pre class="notes_text_pre">
Student Table

+----+--------+------+
| ID | Name   | Age  |
+----+--------+------+
| 1  | Rahul  | 20   |
| 2  | Priya  | 21   |
+----+--------+------+
</pre>

<hr>

<h4>2. Organized Data</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
The data is stored in an organized manner so that users can easily locate and access the required information whenever needed.
</p>

</div>

<h4>Example</h4>

<p>
In a school database, student records, teacher records, attendance, and fee details are stored in separate tables.
</p>

<hr>

<h4>3. Interrelated Data</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
The data stored in different tables is related to each other. These relationships help combine information whenever required.
</p>

</div>

<h4>Example</h4>

<pre class="notes_text_pre">
Student Table

Student_ID

        │

        ▼

Marks Table

Student_ID
</pre>

<p>
The Student_ID connects both tables and helps retrieve a student's marks.
</p>

<hr>

<h4>4. Shared Data</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
A database allows multiple users to access the same data simultaneously according to their permissions.
</p>

</div>

<h4>Example</h4>

<p>
In a bank, the cashier, manager, and loan officer can access the same customer database without creating separate copies.
</p>

<hr>

<h4>5. Data Integrity</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
Data Integrity means the data stored in the database remains accurate, valid, and complete throughout its life cycle.
</p>

</div>

<h4>Example</h4>

<p>
Every student has a unique Roll Number. Two students cannot have the same Roll Number.
</p>

<hr>

<h4>6. Data Consistency</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
Data Consistency means the same data should have the same value everywhere in the database.
</p>

</div>

<h4>Example</h4>

<p>
If a customer's mobile number is updated, every department will see the updated number.
</p>

<hr>

<h4>7. Data Security</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
The database protects data from unauthorized users by providing usernames, passwords, roles, and access permissions.
</p>

</div>

<h4>Example</h4>

<p>
Only the HR department is allowed to view employee salary details.
</p>

<hr>

<h4>8. Data Independence</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
Changes made to the database structure do not require major changes in the application programs.
</p>

</div>

<h4>Example</h4>

<p>
If an Email column is added to the Student table, the existing application continues to work with minimal changes.
</p>

<hr>

<h4>9. Controlled Data Redundancy</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
A database minimizes duplicate data by storing the same information only once and sharing it whenever required.
</p>

</div>

<h4>Example</h4>

<p>
Customer details are stored in one table and used by all departments instead of storing the same information in multiple files.
</p>

<hr>

<h4>10. Easy Data Retrieval</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
Users can quickly search and retrieve information using database queries.
</p>

</div>

<h4>Example</h4>

<p>
Searching a student by Roll Number immediately displays the complete student record.
</p>

<hr>

<h4>11. Backup and Recovery</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
A DBMS provides backup and recovery features to protect data from accidental loss or system failure.
</p>

</div>

<h4>Example</h4>

<p>
If the database server crashes, the data can be restored using the latest backup.
</p>

<hr>

<h4>12. Scalability</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
A database can easily handle increasing amounts of data without changing the overall system.
</p>

</div>

<h4>Example</h4>

<p>
An online shopping website can store information for millions of customers and products efficiently.
</p>

<hr>

<h3>Summary</h3>

<table class="notes-table">

<tr>
<th>Characteristic</th>
<th>Description</th>
</tr>

<tr>
<td>Structured Data</td>
<td>Data is stored in rows and columns.</td>
</tr>

<tr>
<td>Organized Data</td>
<td>Data is stored systematically.</td>
</tr>

<tr>
<td>Interrelated Data</td>
<td>Tables are connected through relationships.</td>
</tr>

<tr>
<td>Shared Data</td>
<td>Multiple users can access the same database.</td>
</tr>

<tr>
<td>Data Integrity</td>
<td>Data remains accurate and valid.</td>
</tr>

<tr>
<td>Data Consistency</td>
<td>Same data has the same value everywhere.</td>
</tr>

<tr>
<td>Data Security</td>
<td>Data is protected from unauthorized users.</td>
</tr>

<tr>
<td>Data Independence</td>
<td>Database changes do not affect applications.</td>
</tr>

<tr>
<td>Controlled Redundancy</td>
<td>Duplicate data is minimized.</td>
</tr>

<tr>
<td>Easy Retrieval</td>
<td>Data can be searched quickly.</td>
</tr>

<tr>
<td>Backup & Recovery</td>
<td>Lost data can be restored.</td>
</tr>

<tr>
<td>Scalability</td>
<td>The database can grow as data increases.</td>
</tr>

</table>

`;

let significance_database = `

<h3>Significance of Database</h3>

<p>
A <b>Database</b> is one of the most important components of any organization. It helps in storing, organizing, managing, and retrieving large amounts of data efficiently. Almost every modern application, such as banking systems, hospitals, schools, e-commerce websites, and social media platforms, uses databases to manage information.
</p>

<p>
Without a database, managing large amounts of data becomes difficult, time-consuming, and error-prone. A database provides a centralized system where data can be stored securely and accessed whenever required.
</p>

<hr>

<h4>1. Centralized Data Storage</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
A database stores all related information in one central location instead of keeping separate files for different departments.
</p>

</div>

<h4>Example</h4>

<p>
In a bank, customer information, account details, loan records, and transaction history are stored in one centralized database.
</p>

<hr>

<h4>2. Reduces Data Redundancy</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
A database minimizes duplicate data by storing the same information only once.
This saves storage space and makes data management easier.
</p>

</div>

<h4>Example</h4>

<p>
A customer's mobile number is stored only once and used by all departments whenever required.
</p>

<hr>

<h4>3. Maintains Data Consistency</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
Whenever data is updated, the latest information becomes available to all users.
This ensures that everyone works with the same data.
</p>

</div>

<h4>Example</h4>

<p>
If a customer changes his address, every department immediately sees the updated address.
</p>

<hr>

<h4>4. Provides Data Security</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
A database protects important information from unauthorized users by providing usernames, passwords, roles, and access permissions.
</p>

</div>

<h4>Example</h4>

<p>
Only the HR department can access employee salary details.
</p>

<hr>

<h4>5. Fast Data Retrieval</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
A database allows users to search and retrieve required information quickly, even when millions of records are stored.
</p>

</div>

<h4>Example</h4>

<p>
Searching a student by Roll Number displays complete student information within a few seconds.
</p>

<hr>

<h4>6. Easy Data Sharing</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
Different departments can access the same database and share information without creating duplicate files.
</p>

</div>

<h4>Example</h4>

<p>
The Accounts Department and Examination Department can use the same student database.
</p>

<hr>

<h4>7. Supports Multiple Users</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
Many users can access and work on the same database simultaneously without affecting each other's work.
</p>

</div>

<h4>Example</h4>

<p>
In a bank, the cashier, manager, and loan officer can work on the same database at the same time.
</p>

<hr>

<h4>8. Backup and Recovery</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
A database provides backup and recovery facilities to protect data from accidental deletion, hardware failure, or system crashes.
</p>

</div>

<h4>Example</h4>

<p>
If the database server crashes, the administrator can restore the data from the latest backup.
</p>

<hr>

<h4>9. Improves Decision Making</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
A database provides accurate and up-to-date information that helps managers make better business decisions.
</p>

</div>

<h4>Example</h4>

<p>
A sales manager can analyze monthly sales data to identify the best-selling products.
</p>

<hr>

<h4>10. Saves Time and Cost</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
A database automates many tasks such as searching, updating, and reporting, reducing manual work, saving time, and lowering operational costs.
</p>

</div>

<h4>Example</h4>

<p>
Instead of searching through paper files, an employee can retrieve customer information instantly using the database.
</p>

<hr>

<h3>Applications of Database</h3>

<table class="notes-table">

<tr>
<th>Area</th>
<th>Use of Database</th>
</tr>

<tr>
<td>Banking</td>
<td>Customer accounts, transactions, loans</td>
</tr>

<tr>
<td>Education</td>
<td>Student records, attendance, marks, fees</td>
</tr>

<tr>
<td>Hospital</td>
<td>Patient records, doctors, medicines</td>
</tr>

<tr>
<td>Library</td>
<td>Books, members, issue and return records</td>
</tr>

<tr>
<td>E-Commerce</td>
<td>Products, customers, orders, payments</td>
</tr>

<tr>
<td>Railway Reservation</td>
<td>Passengers, tickets, schedules</td>
</tr>

</table>

<hr>

<h3>Summary</h3>

<table class="notes-table">

<tr>
<th>Significance</th>
<th>Description</th>
</tr>

<tr>
<td>Centralized Storage</td>
<td>Stores all data in one place.</td>
</tr>

<tr>
<td>Reduced Redundancy</td>
<td>Eliminates duplicate data.</td>
</tr>

<tr>
<td>Data Consistency</td>
<td>Maintains the latest and correct information.</td>
</tr>

<tr>
<td>Security</td>
<td>Protects data from unauthorized access.</td>
</tr>

<tr>
<td>Fast Retrieval</td>
<td>Quickly searches and displays data.</td>
</tr>

<tr>
<td>Data Sharing</td>
<td>Allows departments to use the same database.</td>
</tr>

<tr>
<td>Multi-user Support</td>
<td>Many users can work simultaneously.</td>
</tr>

<tr>
<td>Backup & Recovery</td>
<td>Protects data from loss.</td>
</tr>

<tr>
<td>Better Decisions</td>
<td>Provides accurate information for decision making.</td>
</tr>

<tr>
<td>Time & Cost Saving</td>
<td>Reduces manual work and improves efficiency.</td>
</tr>

</table>

`;

let database_system_applications = `

<h3>Database System Applications</h3>

<p>
A <b>Database Management System (DBMS)</b> is used in almost every organization to store, manage, retrieve, and protect data. It helps organizations handle large amounts of information efficiently and securely. Today, database systems are an essential part of our daily life because they are used in banking, education, hospitals, online shopping, social media, transportation, and many other fields.
</p>

<hr>

<h4>1. Banking System</h4>

<div class="code-box">

<div class="code-title">
<span>Application</span>
</div>

<p>
Banks use database systems to store customer information and manage all banking operations.
</p>

</div>

<b>Database Stores:</b>

<ul>
<li>Customer Details</li>
<li>Account Information</li>
<li>Balance</li>
<li>Deposits and Withdrawals</li>
<li>Loan Details</li>
<li>Transaction History</li>
</ul>

<b>Example:</b>

<p>
Whenever you withdraw money from an ATM, the database immediately updates your account balance.
</p>

<hr>

<h4>2. Education System</h4>

<div class="code-box">

<div class="code-title">
<span>Application</span>
</div>

<p>
Schools, colleges, and universities use databases to manage academic records.
</p>

</div>

<b>Database Stores:</b>

<ul>
<li>Student Information</li>
<li>Teacher Details</li>
<li>Attendance</li>
<li>Marks</li>
<li>Fee Records</li>
<li>Library Records</li>
</ul>

<b>Example:</b>

<p>
A student can check examination results online because the marks are stored in the database.
</p>

<hr>

<h4>3. Hospital Management System</h4>

<div class="code-box">

<div class="code-title">
<span>Application</span>
</div>

<p>
Hospitals use database systems to manage patient and medical information.
</p>

</div>

<b>Database Stores:</b>

<ul>
<li>Patient Details</li>
<li>Doctor Information</li>
<li>Medical History</li>
<li>Medicines</li>
<li>Laboratory Reports</li>
<li>Appointment Details</li>
</ul>

<b>Example:</b>

<p>
Doctors can quickly access a patient's medical history before starting treatment.
</p>

<hr>

<h4>4. Railway Reservation System</h4>

<div class="code-box">

<div class="code-title">
<span>Application</span>
</div>

<p>
Railway reservation systems use databases to manage ticket booking and passenger information.
</p>

</div>

<b>Database Stores:</b>

<ul>
<li>Passenger Details</li>
<li>Train Information</li>
<li>Seat Availability</li>
<li>Ticket Booking</li>
<li>Journey Schedule</li>
</ul>

<b>Example:</b>

<p>
When a ticket is booked online, the available seat count is automatically updated.
</p>

<hr>

<h4>5. Airline Reservation System</h4>

<div class="code-box">

<div class="code-title">
<span>Application</span>
</div>

<p>
Airlines use database systems to manage flight schedules and ticket reservations.
</p>

</div>

<b>Database Stores:</b>

<ul>
<li>Passenger Information</li>
<li>Flight Details</li>
<li>Seat Availability</li>
<li>Ticket Booking</li>
<li>Flight Schedule</li>
</ul>

<b>Example:</b>

<p>
Passengers can book, cancel, or reschedule tickets online using the airline database.
</p>

<hr>

<h4>6. Library Management System</h4>

<div class="code-box">

<div class="code-title">
<span>Application</span>
</div>

<p>
Libraries use database systems to manage books and member records.
</p>

</div>

<b>Database Stores:</b>

<ul>
<li>Book Details</li>
<li>Member Information</li>
<li>Issue Records</li>
<li>Return Records</li>
<li>Fine Details</li>
</ul>

<b>Example:</b>

<p>
The librarian can instantly check whether a book is available or already issued.
</p>

<hr>

<h4>7. E-Commerce Websites</h4>

<div class="code-box">

<div class="code-title">
<span>Application</span>
</div>

<p>
Online shopping websites use databases to manage products, customers, and orders.
</p>

</div>

<b>Database Stores:</b>

<ul>
<li>Product Details</li>
<li>Customer Information</li>
<li>Orders</li>
<li>Payments</li>
<li>Delivery Status</li>
</ul>

<b>Example:</b>

<p>
Amazon and Flipkart use databases to manage millions of products and customer orders.
</p>

<hr>

<h4>8. Social Media Platforms</h4>

<div class="code-box">

<div class="code-title">
<span>Application</span>
</div>

<p>
Social media applications use databases to store user information and activities.
</p>

</div>

<b>Database Stores:</b>

<ul>
<li>User Profiles</li>
<li>Posts</li>
<li>Photos</li>
<li>Videos</li>
<li>Comments</li>
<li>Messages</li>
</ul>

<b>Example:</b>

<p>
Whenever you upload a photo on Instagram or Facebook, it is stored in a database.
</p>

<hr>

<h4>9. Telecommunications</h4>

<div class="code-box">

<div class="code-title">
<span>Application</span>
</div>

<p>
Telecommunication companies use databases to manage customer information and billing.
</p>

</div>

<b>Database Stores:</b>

<ul>
<li>Customer Details</li>
<li>Call Records</li>
<li>Recharge History</li>
<li>Internet Usage</li>
<li>Billing Information</li>
</ul>

<b>Example:</b>

<p>
Mobile companies generate monthly bills using customer call and data usage records stored in the database.
</p>

<hr>

<h4>10. Government Organizations</h4>

<div class="code-box">

<div class="code-title">
<span>Application</span>
</div>

<p>
Government departments use databases to maintain citizen records and provide online services.
</p>

</div>

<b>Database Stores:</b>

<ul>
<li>Aadhaar Information</li>
<li>PAN Details</li>
<li>Passport Records</li>
<li>Driving License Details</li>
<li>Voter Information</li>
</ul>

<b>Example:</b>

<p>
When applying for a passport online, your personal information is stored and verified using a database system.
</p>

<hr>

<h3>Summary</h3>

<table class="notes-table">

<tr>
<th>Application Area</th>
<th>Purpose of Database</th>
</tr>

<tr>
<td>Banking</td>
<td>Manage accounts and transactions.</td>
</tr>

<tr>
<td>Education</td>
<td>Store student and teacher records.</td>
</tr>

<tr>
<td>Hospital</td>
<td>Maintain patient and medical records.</td>
</tr>

<tr>
<td>Railway Reservation</td>
<td>Manage ticket booking and schedules.</td>
</tr>

<tr>
<td>Airline Reservation</td>
<td>Store flight and passenger information.</td>
</tr>

<tr>
<td>Library</td>
<td>Manage books and members.</td>
</tr>

<tr>
<td>E-Commerce</td>
<td>Store products, customers, and orders.</td>
</tr>

<tr>
<td>Social Media</td>
<td>Manage user profiles and posts.</td>
</tr>

<tr>
<td>Telecommunications</td>
<td>Maintain customer and billing records.</td>
</tr>

<tr>
<td>Government</td>
<td>Store citizen information and public records.</td>
</tr>

</table>

`;

let data_independence = `

<h3>Data Independence</h3>

<p>
One of the most important features of a <b>Database Management System (DBMS)</b> is <b>Data Independence</b>. It allows changes to be made in the database without affecting the application programs. This makes the database flexible, easy to maintain, and less expensive to modify.
</p>

<p>
In simple words, <b>Data Independence</b> means that changes made at one level of the database do not require changes at the next higher level.
</p>

<hr>

<h4>Definition</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
<b>Data Independence</b> is the ability of a database system to modify the database structure without changing the application programs that access the data.
</p>

</div>

<p>
<b>Simple Definition:</b>
</p>

<p>
Data Independence means <b>"Changes in the database should not affect the application program."</b>
</p>

<hr>

<h3>Why is Data Independence Important?</h3>

<p>
In real-world applications, database structures often change. New columns may be added, data types may change, or tables may be reorganized. If every small change requires modifying all application programs, it becomes time-consuming and costly.
</p>

<p>
Data Independence allows the database to change while keeping the application programs working normally.
</p>

<hr>

<h3>Real-Life Example</h3>

<p>
Suppose a college has a <b>Student</b> table.
</p>

<pre class="notes_text_pre">
Student

Roll_No
Name
Course
</pre>

<p>
Later, the college decides to add a new column called <b>Email</b>.
</p>

<pre class="notes_text_pre">
Student

Roll_No
Name
Course
Email
</pre>

<p>
Because of <b>Data Independence</b>, the application that displays student information can continue working without major changes.
</p>

<hr>

<h3>Types of Data Independence</h3>

<p>
There are two types of Data Independence:
</p>

<ul>
<li>Physical Data Independence</li>
<li>Logical Data Independence</li>
</ul>

<hr>

<h3>1. Physical Data Independence</h3>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
<b>Physical Data Independence</b> is the ability to change the <b>physical storage</b> of the database without affecting the logical structure or application programs.
</p>

</div>

<h4>Simple Explanation</h4>

<p>
If we change how the data is stored inside the computer, users and application programs will not notice any difference.
</p>

<h4>Examples</h4>

<ul>
<li>Changing the storage device from HDD to SSD.</li>
<li>Creating or removing indexes.</li>
<li>Changing the file organization.</li>
<li>Compressing database files.</li>
<li>Moving the database to another server.</li>
</ul>

<h4>Example</h4>

<p>
A company moves its database from an old hard disk to a faster SSD. The employees continue using the same software without any changes.
</p>

<b>Result:</b>

<ul>
<li>Application programs are not affected.</li>
<li>Users do not notice any changes.</li>
<li>Only database performance improves.</li>
</ul>

<hr>

<h3>2. Logical Data Independence</h3>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
<b>Logical Data Independence</b> is the ability to change the logical structure of the database without affecting the application programs.
</p>

</div>

<h4>Simple Explanation</h4>

<p>
If we modify the database design by adding new columns or tables, the application should continue working with little or no modification.
</p>

<h4>Examples</h4>

<ul>
<li>Adding a new column.</li>
<li>Removing an unused column.</li>
<li>Adding a new table.</li>
<li>Changing relationships between tables.</li>
<li>Splitting one table into two tables.</li>
</ul>

<h4>Example</h4>

<p>
The Student table initially contains three columns.
</p>

<pre class="notes_text_pre">
Roll_No
Name
Course
</pre>

<p>
Later, a new column <b>Email</b> is added.
</p>

<pre class="notes_text_pre">
Roll_No
Name
Course
Email
</pre>

<p>
The existing application continues to work because of Logical Data Independence.
</p>

<hr>

<h3>Difference Between Physical and Logical Data Independence</h3>

<table class="notes-table">

<tr>
<th>Physical Data Independence</th>
<th>Logical Data Independence</th>
</tr>

<tr>
<td>Changes physical storage.</td>
<td>Changes logical database structure.</td>
</tr>

<tr>
<td>Easy to achieve.</td>
<td>More difficult to achieve.</td>
</tr>

<tr>
<td>Does not affect logical schema.</td>
<td>Does not affect application programs.</td>
</tr>

<tr>
<td>Examples: Indexing, Storage Device, File Organization.</td>
<td>Examples: Add Column, Remove Column, Add Table.</td>
</tr>

</table>

<hr>

<h3>Advantages of Data Independence</h3>

<ul>
<li>Reduces software maintenance cost.</li>
<li>Application programs require fewer changes.</li>
<li>Improves database flexibility.</li>
<li>Makes future modifications easier.</li>
<li>Improves system performance.</li>
<li>Supports database growth.</li>
<li>Reduces development time.</li>
<li>Provides better data management.</li>
</ul>

<hr>

<h3>Summary</h3>

<table class="notes-table">

<tr>
<th>Topic</th>
<th>Description</th>
</tr>

<tr>
<td>Data Independence</td>
<td>Changes in the database do not affect application programs.</td>
</tr>

<tr>
<td>Physical Data Independence</td>
<td>Changes physical storage without affecting the logical structure.</td>
</tr>

<tr>
<td>Logical Data Independence</td>
<td>Changes logical structure without affecting applications.</td>
</tr>

<tr>
<td>Main Benefit</td>
<td>Easy maintenance, flexibility, and reduced development cost.</td>
</tr>

</table>

`;

let advantages_disadvantages_dbms = `

<h3>Advantages and Disadvantages of DBMS</h3>

<p>
A <b>Database Management System (DBMS)</b> provides an efficient way to store, organize, retrieve, and manage data. It offers many advantages over the traditional file system. However, like every technology, DBMS also has some disadvantages.
</p>

<hr>

<h3>Advantages of DBMS</h3>

<p>
The following are the major advantages of using a Database Management System.
</p>

<hr>

<h4>1. Reduces Data Redundancy</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
DBMS reduces duplicate data by storing the same information only once. Different users or departments can access the same data without creating multiple copies.
</p>

</div>

<b>Example:</b>

<p>
A customer's mobile number is stored only once and is used by the Accounts, Loan, and Cash departments.
</p>

<hr>

<h4>2. Maintains Data Consistency</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
When data is updated in one place, the changes become visible to all users. This ensures that everyone works with the latest and correct information.
</p>

</div>

<b>Example:</b>

<p>
If a student's address is updated, every department sees the updated address immediately.
</p>

<hr>

<h4>3. Provides Better Data Security</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
DBMS protects important data using usernames, passwords, user roles, and access permissions. Only authorized users can access sensitive information.
</p>

</div>

<b>Example:</b>

<p>
Only the HR department can access employee salary records.
</p>

<hr>

<h4>4. Data Sharing</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
Multiple users and departments can access the same database simultaneously without creating duplicate files.
</p>

</div>

<b>Example:</b>

<p>
The Accounts Department and Examination Department can use the same student database.
</p>

<hr>

<h4>5. Backup and Recovery</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
DBMS provides backup and recovery features to protect data from hardware failure, accidental deletion, or system crashes.
</p>

</div>

<b>Example:</b>

<p>
If the database server fails, the administrator can restore data from the latest backup.
</p>

<hr>

<h4>6. Supports Multiple Users</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
Many users can access and update the database at the same time without causing data conflicts.
</p>

</div>

<b>Example:</b>

<p>
In a bank, the cashier, manager, and loan officer can work on the same database simultaneously.
</p>

<hr>

<h4>7. Fast Data Retrieval</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
DBMS allows users to search and retrieve data quickly using SQL queries and indexes.
</p>

</div>

<b>Example:</b>

<p>
Searching a student by Roll Number displays complete information within seconds.
</p>

<hr>

<h4>8. Data Integrity</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
DBMS maintains the accuracy and validity of data by applying rules and constraints.
</p>

</div>

<b>Example:</b>

<p>
A Roll Number cannot be duplicated because it is defined as a Primary Key.
</p>

<hr>

<h4>9. Data Independence</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
Changes made to the database structure do not require major changes in the application programs.
</p>

</div>

<b>Example:</b>

<p>
Adding a new Email column to the Student table does not affect the existing application.
</p>

<hr>

<h4>10. Better Decision Making</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
A DBMS provides accurate and up-to-date information, helping managers make better business decisions.
</p>

</div>

<b>Example:</b>

<p>
A sales manager can analyze monthly sales reports to improve business performance.
</p>

<hr>

<h3>Disadvantages of DBMS</h3>

<p>
Although DBMS provides many benefits, it also has some limitations.
</p>

<hr>

<h4>1. High Cost</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
Installing and maintaining a DBMS requires expensive software, hardware, and skilled professionals.
</p>

</div>

<b>Example:</b>

<p>
Large companies spend a significant amount of money purchasing Oracle or Microsoft SQL Server licenses.
</p>

<hr>

<h4>2. Complex System</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
A DBMS is more complex than the traditional file system. Users and administrators require proper training to use it effectively.
</p>

</div>

<hr>

<h4>3. Large Storage Requirement</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
DBMS software requires more memory and disk space because it stores data along with indexes, logs, and metadata.
</p>

</div>

<hr>

<h4>4. Performance Overhead</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
For very small applications, a DBMS may be slower than a simple file system because it performs additional security and integrity checks.
</p>

</div>

<hr>

<h4>5. Regular Maintenance Required</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
A database requires regular backup, monitoring, optimization, and updates to ensure smooth performance.
</p>

</div>

<hr>

<h4>6. Hardware Failure Can Affect the Entire System</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
Since all data is stored in a centralized database, a hardware failure may affect all users until the system is restored.
</p>

</div>

<hr>

<h4>7. Security Risks</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
If the database is not properly secured, hackers or unauthorized users may gain access to sensitive information.
</p>

</div>

<hr>

<h4>8. Requires Skilled Professionals</h4>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<p>
A Database Administrator (DBA) is required to install, configure, secure, and maintain the database system.
</p>

</div>

<hr>

<h3>Difference Between Advantages and Disadvantages of DBMS</h3>

<table class="notes-table">

<tr>
<th>Advantages</th>
<th>Disadvantages</th>
</tr>

<tr>
<td>Reduces data redundancy.</td>
<td>High installation and maintenance cost.</td>
</tr>

<tr>
<td>Provides better security.</td>
<td>Complex to learn and manage.</td>
</tr>

<tr>
<td>Supports multiple users.</td>
<td>Requires skilled professionals.</td>
</tr>

<tr>
<td>Provides backup and recovery.</td>
<td>Requires regular maintenance.</td>
</tr>

<tr>
<td>Fast data retrieval.</td>
<td>Needs more storage space.</td>
</tr>

<tr>
<td>Maintains data consistency.</td>
<td>Hardware failure may affect the entire database.</td>
</tr>

<tr>
<td>Improves data sharing.</td>
<td>Security risks if not properly configured.</td>
</tr>

</table>

<hr>

<h3>Summary</h3>

<p>
A <b>DBMS</b> is a powerful software that provides secure, accurate, and efficient data management. It reduces redundancy, improves security, supports multiple users, and provides backup and recovery facilities. However, it also requires higher cost, skilled professionals, regular maintenance, and more storage space. Despite these disadvantages, DBMS is widely used because its advantages greatly outweigh its limitations.
</p>

`;
let types_of_database = `

<h3>Types of Database</h3>

<p>
A <b>Database</b> is a collection of related data that is organized for easy access and management. Depending on how the data is stored and managed, databases are classified into different types. Each type is designed for a specific purpose and application.
</p>

<hr>

<h4>1. Relational Database (RDBMS)</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
A <b>Relational Database</b> stores data in the form of <b>tables</b> (rows and columns). The tables are related to each other using keys such as Primary Key and Foreign Key.
</p>

</div>

<b>Features:</b>

<ul>
<li>Data is stored in tables.</li>
<li>Supports relationships between tables.</li>
<li>Uses SQL (Structured Query Language).</li>
<li>Maintains data integrity.</li>
</ul>

<b>Examples:</b>

<ul>
<li>MySQL</li>
<li>Oracle</li>
<li>Microsoft SQL Server</li>
<li>PostgreSQL</li>
</ul>

<hr>

<h4>2. Non-Relational Database (NoSQL)</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
A <b>Non-Relational Database</b> (NoSQL) stores data in formats other than tables, such as documents, key-value pairs, graphs, or columns.
</p>

</div>

<b>Features:</b>

<ul>
<li>Does not use tables.</li>
<li>Suitable for unstructured and semi-structured data.</li>
<li>Highly scalable.</li>
<li>Fast performance for large applications.</li>
</ul>

<b>Examples:</b>

<ul>
<li>MongoDB</li>
<li>Cassandra</li>
<li>Redis</li>
<li>CouchDB</li>
</ul>

<hr>

<h4>3. Centralized Database</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
A <b>Centralized Database</b> stores all data at a single central location. Multiple users can access the database through a network.
</p>

</div>

<b>Advantages:</b>

<ul>
<li>Easy to manage.</li>
<li>Simple backup and recovery.</li>
<li>Better security.</li>
</ul>

<b>Example:</b>

<p>
A college stores all student records on one central server.
</p>

<hr>

<h4>4. Cloud Database</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
A <b>Cloud Database</b> is hosted on cloud platforms and can be accessed through the Internet from anywhere.
</p>

</div>

<b>Advantages:</b>

<ul>
<li>Accessible from anywhere.</li>
<li>Automatic backup.</li>
<li>Highly scalable.</li>
<li>Cost-effective.</li>
</ul>

<b>Examples:</b>

<ul>
<li>Google Firebase</li>
<li>Amazon RDS</li>
<li>Microsoft Azure SQL Database</li>
</ul>

<hr>

<h4>5. Network Database</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
A <b>Network Database</b> organizes data in a network structure where one record can have multiple parent and child records.
</p>

</div>

<b>Features:</b>

<ul>
<li>Supports many-to-many relationships.</li>
<li>Suitable for complex applications.</li>
<li>Fast navigation between records.</li>
</ul>

<b>Example:</b>

<p>
Airline reservation and telecommunication systems.
</p>

<hr>

<h4>6. Object-Oriented Database (OODBMS)</h4>

<div class="code-box">

<div class="code-title">
<span>Definition</span>
</div>

<p>
An <b>Object-Oriented Database</b> stores data in the form of objects, similar to object-oriented programming languages such as Java and C++.
</p>

</div>

<b>Features:</b>

<ul>
<li>Stores objects instead of tables.</li>
<li>Supports classes and inheritance.</li>
<li>Suitable for multimedia and engineering applications.</li>
</ul>

<b>Examples:</b>

<ul>
<li>ObjectDB</li>
<li>db4o</li>
</ul>

<hr>

<h3>Difference Between Relational and Non-Relational Database</h3>

<table class="notes-table">

<tr>
<th>Relational Database</th>
<th>Non-Relational Database</th>
</tr>

<tr>
<td>Stores data in tables.</td>
<td>Stores data as documents, key-value pairs, graphs, etc.</td>
</tr>

<tr>
<td>Uses SQL.</td>
<td>Uses NoSQL.</td>
</tr>

<tr>
<td>Supports fixed schema.</td>
<td>Supports flexible schema.</td>
</tr>

<tr>
<td>Best for structured data.</td>
<td>Best for unstructured or semi-structured data.</td>
</tr>

<tr>
<td>Example: MySQL, Oracle.</td>
<td>Example: MongoDB, Cassandra.</td>
</tr>

</table>

<hr>

<h3>Summary</h3>

<table class="notes-table">

<tr>
<th>Database Type</th>
<th>Main Purpose</th>
</tr>

<tr>
<td>Relational Database</td>
<td>Stores structured data in tables.</td>
</tr>

<tr>
<td>Non-Relational Database</td>
<td>Stores unstructured and semi-structured data.</td>
</tr>

<tr>
<td>Centralized Database</td>
<td>Stores data at one central location.</td>
</tr>

<tr>
<td>Cloud Database</td>
<td>Stores data on cloud servers.</td>
</tr>

<tr>
<td>Network Database</td>
<td>Supports many-to-many relationships.</td>
</tr>

<tr>
<td>Object-Oriented Database</td>
<td>Stores data as objects.</td>
</tr>

</table>

`;

let database_architecture = `

<h3>Database Architecture</h3>

<p>
<b>Database Architecture</b> is the overall design or structure of a Database Management System (DBMS).
It defines how the <b>User, Application, DBMS, and Database</b> communicate with each other to store,
retrieve, update, and manage data efficiently.
</p>

<h4>Definition</h4>

<p>
<b>Database Architecture</b> is the framework that describes how data is organized,
stored, processed, and accessed in a database system.
</p>

<h4>Why Do We Need Database Architecture?</h4>

<ul>
    <li>To organize data efficiently.</li>
    <li>To provide data security.</li>
    <li>To reduce data redundancy.</li>
    <li>To improve database performance.</li>
    <li>To allow multiple users to access data simultaneously.</li>
    <li>To simplify database management and maintenance.</li>
</ul>

<h3>Components of Database Architecture</h3>

<h4>1. User</h4>

<p>
A <b>User</b> is the person who interacts with the database through an application.
</p>

<p><b>Examples:</b></p>

<ul>
    <li>Student checking result.</li>
    <li>Customer shopping online.</li>
    <li>Bank employee updating account details.</li>
</ul>

<h4>2. Application</h4>

<p>
The <b>Application</b> is software that allows users to interact with the database.
It sends user requests to the DBMS.
</p>

<p><b>Examples:</b></p>

<ul>
    <li>Hospital Management System</li>
    <li>Library Management System</li>
    <li>College Management System</li>
</ul>

<h4>3. DBMS (Database Management System)</h4>

<p>
The <b>DBMS</b> is software that manages the database. It receives requests from
applications and performs operations like Insert, Update, Delete, and Retrieve.
</p>

<p><b>Examples:</b></p>

<ul>
    <li>MySQL</li>
    <li>Oracle Database</li>
    <li>PostgreSQL</li>
    <li>Microsoft SQL Server</li>
</ul>

<h4>4. Database</h4>

<p>
A <b>Database</b> is an organized collection of related data stored in tables.
</p>

<table class="notes-table">
<tr>
<th>Roll No</th>
<th>Name</th>
<th>Course</th>
</tr>

<tr>
<td>101</td>
<td>Rahul</td>
<td>BCA</td>
</tr>

<tr>
<td>102</td>
<td>Priya</td>
<td>MCA</td>
</tr>
</table>

<h3>Working of Database Architecture</h3>

<ol>
<li>User sends a request.</li>
<li>The application receives the request.</li>
<li>The application sends an SQL query to the DBMS.</li>
<li>The DBMS processes the query.</li>
<li>The database returns the required data.</li>
<li>The DBMS sends the result back to the application.</li>
<li>The application displays the result to the user.</li>
</ol>

<h3>Database Architecture Diagram</h3>

<pre class="notes_text_pre">
             User
               │
               ▼
         Application
               │
               ▼
             DBMS
               │
               ▼
           Database
               │
               ▼
         Required Data
</pre>

<h3>Types of Database Architecture</h3>

<ul>
<li>One-Tier Architecture</li>
<li>Two-Tier Architecture</li>
<li>Three-Tier Architecture</li>
</ul>

<h3>1. One-Tier Architecture</h3>

<h4>Definition</h4>

<p>
In One-Tier Architecture, the <b>User, Application, DBMS, and Database</b>
are all present on the same computer.
</p>

<h4>Diagram</h4>

<pre class="notes_text_pre">
+---------------------------+
| User                      |
| Application               |
| DBMS                      |
| Database                  |
+---------------------------+
</pre>

<h4>Advantages</h4>

<ul>
<li>Easy to use.</li>
<li>Simple installation.</li>
<li>No network required.</li>
<li>Suitable for a single user.</li>
</ul>

<h4>Disadvantages</h4>

<ul>
<li>Low security.</li>
<li>Not suitable for multiple users.</li>
<li>Difficult to share data.</li>
</ul>

<h3>2. Two-Tier Architecture</h3>

<h4>Definition</h4>

<p>
In Two-Tier Architecture, the client application directly communicates with the database server.
</p>

<h4>Diagram</h4>

<pre class="notes_text_pre">
Client
(User + Application)
          │
          ▼
 Database Server
(DBMS + Database)
</pre>

<h4>Advantages</h4>

<ul>
<li>Fast communication.</li>
<li>Easy to develop.</li>
<li>Better performance than One-Tier.</li>
</ul>

<h4>Disadvantages</h4>

<ul>
<li>Limited scalability.</li>
<li>Lower security.</li>
<li>Performance decreases with many users.</li>
</ul>

<h3>3. Three-Tier Architecture</h3>

<h4>Definition</h4>

<p>
In Three-Tier Architecture, an Application Server is placed between the client
and the database. The client never communicates directly with the database.
</p>

<h4>Diagram</h4>

<pre class="notes_text_pre">
        User
         │
         ▼
Presentation Layer
(Web Browser)
         │
         ▼
Application Layer
(Business Logic)
         │
         ▼
Database Layer
(DBMS + Database)
</pre>

<h4>Advantages</h4>

<ul>
<li>High security.</li>
<li>Easy maintenance.</li>
<li>Highly scalable.</li>
<li>Suitable for large applications.</li>
<li>Better performance.</li>
</ul>

<h4>Disadvantages</h4>

<ul>
<li>More complex.</li>
<li>Higher development cost.</li>
<li>Requires additional servers.</li>
</ul>

<h3>Comparison of Database Architectures</h3>

<table class="notes-table">

<tr>
<th>Feature</th>
<th>One-Tier</th>
<th>Two-Tier</th>
<th>Three-Tier</th>
</tr>

<tr>
<td>Layers</td>
<td>1</td>
<td>2</td>
<td>3</td>
</tr>

<tr>
<td>Security</td>
<td>Low</td>
<td>Medium</td>
<td>High</td>
</tr>

<tr>
<td>Scalability</td>
<td>Low</td>
<td>Medium</td>
<td>High</td>
</tr>

<tr>
<td>Multi-user Support</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
</tr>

<tr>
<td>Performance</td>
<td>Good</td>
<td>Better</td>
<td>Excellent</td>
</tr>

</table>

<h3>Real-Life Examples</h3>

<table class="notes-table">

<tr>
<th>Application</th>
<th>Architecture</th>
</tr>

<tr>
<td>SQLite Desktop App</td>
<td>One-Tier</td>
</tr>

<tr>
<td>College Desktop Software</td>
<td>Two-Tier</td>
</tr>

<tr>
<td>ATM System</td>
<td>Three-Tier</td>
</tr>

<tr>
<td>Amazon</td>
<td>Three-Tier</td>
</tr>

<tr>
<td>Banking System</td>
<td>Three-Tier</td>
</tr>

</table>

<h3>Key Points</h3>

<ul>
<li>Database Architecture defines how users interact with databases.</li>
<li>Its main components are User, Application, DBMS, and Database.</li>
<li>There are three types of Database Architecture.</li>
<li>One-Tier is suitable for single-user systems.</li>
<li>Two-Tier connects the client directly to the database server.</li>
<li>Three-Tier uses an application server between the client and database.</li>
<li>Most modern web applications use Three-Tier Architecture because it offers better security, scalability, and performance.</li>
</ul>

`;

let database_model = `

<h3>Database Model</h3>

<p>
A <b>Database Model</b> is a logical structure that defines how data is
organized, stored, managed, and related inside a database.
It acts as a blueprint for designing a database.
</p>

<h4>Definition</h4>

<p>
A <b>Database Model</b> is a collection of concepts that describes the
structure of a database, the relationships between data, and the rules
for storing and retrieving data.
</p>

<h4>Simple Definition</h4>

<p>
A Database Model is a method of organizing data inside a database so that
it can be stored, managed, and retrieved efficiently.
</p>

<h3>Why Do We Need a Database Model?</h3>

<ul>
<li>To organize data properly.</li>
<li>To reduce data redundancy.</li>
<li>To maintain data consistency.</li>
<li>To improve database performance.</li>
<li>To simplify data retrieval.</li>
<li>To establish relationships between different data.</li>
<li>To make database design easier.</li>
</ul>

<h3>Example</h3>

<p>
Suppose we are creating a <b>College Management System</b>.
</p>

<p>
Without a database model, student information, course information, and
teacher information may be stored randomly, making data management difficult.
</p>

<p>
Using a Database Model, we organize the data into proper structures and
define relationships between them.
</p>

<pre class="notes_text_pre">
Student
---------
Roll No
Name
Course ID

Course
---------
Course ID
Course Name

Relationship

Student ---- Enrolls ----> Course
</pre>

<h3>Types of Database Models</h3>

<p>
Database Models are mainly divided into two categories.
</p>

<h4>1. Classical Database Models</h4>

<ul>
<li>Hierarchical Model</li>
<li>Network Model</li>
<li>Relational Model</li>
<li>Object-Oriented Model</li>
</ul>

<h4>2. Database Design Models</h4>

<ul>
<li>Conceptual Database Model</li>
<li>Logical Database Model</li>
<li>Physical Database Model</li>
</ul>

<h3>1. Hierarchical Database Model</h3>

<p>
The Hierarchical Model organizes data in the form of a <b>tree structure</b>.
Each parent can have multiple children, but each child has only one parent.
</p>

<h4>Structure</h4>

<pre class="notes_text_pre">
          College
             |
     ----------------
     |              |
 Department     Department
     |
   Students
</pre>

<h4>Advantages</h4>

<ul>
<li>Simple structure.</li>
<li>Fast data retrieval.</li>
<li>Easy to understand.</li>
</ul>

<h4>Disadvantages</h4>

<ul>
<li>One child can have only one parent.</li>
<li>Difficult to modify.</li>
<li>Data redundancy may occur.</li>
</ul>

<hr>

<h3>2. Network Database Model</h3>

<p>
The Network Model stores data as a graph.
A child record can have multiple parent records.
</p>

<h4>Structure</h4>

<pre class="notes_text_pre">
Teacher -------- Student
     \          /
      \        /
       Course
</pre>

<h4>Advantages</h4>

<ul>
<li>Supports many-to-many relationships.</li>
<li>Fast data access.</li>
<li>Less redundancy.</li>
</ul>

<h4>Disadvantages</h4>

<ul>
<li>Complex structure.</li>
<li>Difficult to maintain.</li>
<li>Requires more programming knowledge.</li>
</ul>

<hr>

<h3>3. Relational Database Model</h3>

<p>
The Relational Model stores data in the form of <b>tables (relations)</b>.
Each table contains rows and columns.
Relationships are created using Primary Keys and Foreign Keys.
</p>

<h4>Example</h4>

<table class="notes-table">

<tr>
<th>Student ID</th>
<th>Name</th>
<th>Course ID</th>
</tr>

<tr>
<td>101</td>
<td>Rahul</td>
<td>C01</td>
</tr>

<tr>
<td>102</td>
<td>Priya</td>
<td>C02</td>
</tr>

</table>

<h4>Advantages</h4>

<ul>
<li>Easy to understand.</li>
<li>High data integrity.</li>
<li>Reduced redundancy.</li>
<li>Most widely used database model.</li>
</ul>

<h4>Disadvantages</h4>

<ul>
<li>Complex queries may reduce performance.</li>
<li>Less suitable for unstructured data.</li>
</ul>

<hr>

<h3>4. Object-Oriented Database Model</h3>

<p>
The Object-Oriented Model stores data as objects, similar to object-oriented
programming languages like Java and C++.
</p>

<h4>Example</h4>

<pre class="notes_text_pre">
Student Object

Roll No
Name
Course
Methods
</pre>

<h4>Advantages</h4>

<ul>
<li>Supports complex data.</li>
<li>Easy integration with OOP languages.</li>
<li>Supports inheritance and encapsulation.</li>
</ul>

<h4>Disadvantages</h4>

<ul>
<li>Complex implementation.</li>
<li>Less commonly used than relational databases.</li>
</ul>

<hr>

<h3>Database Design Models</h3>

<p>
Before implementing a database, database designers prepare three different
levels of models.
</p>

<h4>1. Conceptual Database Model</h4>

<p>
The Conceptual Model describes <b>what data will be stored</b> and
<b>how entities are related</b>.
It focuses on business requirements and is independent of any DBMS.
</p>

<h4>2. Logical Database Model</h4>

<p>
The Logical Model converts the conceptual design into tables, attributes,
primary keys, foreign keys, and relationships.
It still does not describe physical storage.
</p>

<h4>3. Physical Database Model</h4>

<p>
The Physical Model describes how data will actually be stored inside the
database, including indexes, storage, partitions, and file organization.
It depends on the selected DBMS.
</p>

<h3>Comparison of Database Design Models</h3>

<table class="notes-table">

<tr>
<th>Feature</th>
<th>Conceptual</th>
<th>Logical</th>
<th>Physical</th>
</tr>

<tr>
<td>Focus</td>
<td>Business Requirements</td>
<td>Database Structure</td>
<td>Storage Details</td>
</tr>

<tr>
<td>DBMS Dependent</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>

<tr>
<td>Tables</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
</tr>

<tr>
<td>Data Types</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
</tr>

<tr>
<td>Indexes</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>

</table>

<h3>Summary</h3>

<ul>
<li>A Database Model defines how data is organized and managed.</li>
<li>It provides the blueprint for database design.</li>
<li>The four major database models are Hierarchical, Network, Relational, and Object-Oriented.</li>
<li>The three database design models are Conceptual, Logical, and Physical.</li>
<li>The Relational Database Model is the most widely used model in modern DBMS.</li>
</ul>

`;


let conceptual_database_model = `

<h3>Conceptual Database Model</h3>

<p>
A <b>Conceptual Database Model</b> is the highest level of database design. It describes
<b>what data will be stored</b> in the database and <b>how different entities are related</b>,
without considering how the data will be physically stored.
</p>

<h4>Definition</h4>

<p>
The <b>Conceptual Database Model</b> is a high-level representation of a database that
focuses on business requirements, entities, attributes, and relationships.
It is independent of any DBMS or programming language.
</p>

<h4>Purpose of Conceptual Database Model</h4>

<ul>
    <li>To understand business requirements.</li>
    <li>To identify entities and their attributes.</li>
    <li>To define relationships between entities.</li>
    <li>To provide a blueprint for database design.</li>
    <li>To communicate database requirements with users and developers.</li>
</ul>

<h3>Characteristics</h3>

<ul>
    <li>High-level database model.</li>
    <li>Independent of DBMS.</li>
    <li>Focuses on business rules.</li>
    <li>Does not store physical details.</li>
    <li>Easy to understand.</li>
</ul>

<h3>Main Components</h3>

<h4>1. Entity</h4>

<p>
An <b>Entity</b> is any real-world object, person, place, or thing about which
data is stored.
</p>

<p><b>Examples:</b></p>

<ul>
    <li>Student</li>
    <li>Teacher</li>
    <li>Course</li>
    <li>Department</li>
</ul>

<h4>2. Attribute</h4>

<p>
An <b>Attribute</b> is a property or characteristic of an entity.
</p>

<p><b>Example:</b></p>

<table class="notes-table">

<tr>
<th>Entity</th>
<th>Attributes</th>
</tr>

<tr>
<td>Student</td>
<td>Roll No, Name, Email, Mobile</td>
</tr>

<tr>
<td>Course</td>
<td>Course ID, Course Name, Duration</td>
</tr>

</table>

<h4>3. Relationship</h4>

<p>
A <b>Relationship</b> describes how two or more entities are connected.
</p>

<p><b>Examples:</b></p>

<ul>
    <li>Student <b>enrolls in</b> Course.</li>
    <li>Teacher <b>teaches</b> Course.</li>
    <li>Customer <b>places</b> Order.</li>
</ul>

<h3>Conceptual Database Model Diagram</h3>

<pre class="notes_text_pre">
        Student
     +------------+
     | Roll No    |
     | Name       |
     | Email      |
     +------------+
           |
           | Enrolls
           |
           ▼
      +-------------+
      |   Course    |
      | Course ID   |
      | Course Name |
      +-------------+
</pre>

<h3>Advantages</h3>

<ul>
    <li>Simple and easy to understand.</li>
    <li>Independent of any database software.</li>
    <li>Helps identify business requirements.</li>
    <li>Improves communication between users and developers.</li>
    <li>Acts as the foundation for logical database design.</li>
</ul>

<h3>Disadvantages</h3>

<ul>
    <li>Does not describe physical storage.</li>
    <li>Cannot estimate database performance.</li>
    <li>Does not define indexes or file organization.</li>
    <li>Not directly implemented in a DBMS.</li>
</ul>

<h3>Real-Life Example</h3>

<p>
Consider a <b>College Management System</b>.
</p>

<ul>
    <li><b>Entities:</b> Student, Teacher, Course, Department</li>
    <li><b>Attributes:</b> Student Name, Roll No, Course Name, Teacher Name</li>
    <li><b>Relationships:</b></li>
    <ul>
        <li>Student enrolls in Course.</li>
        <li>Teacher teaches Course.</li>
        <li>Department manages Courses.</li>
    </ul>
</ul>

<h3>Conceptual vs Logical vs Physical Model</h3>

<table class="notes-table">

<tr>
<th>Feature</th>
<th>Conceptual Model</th>
<th>Logical Model</th>
<th>Physical Model</th>
</tr>

<tr>
<td>Focus</td>
<td>Business Requirements</td>
<td>Database Structure</td>
<td>Storage Details</td>
</tr>

<tr>
<td>DBMS Dependent</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>

<tr>
<td>Contains Tables</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
</tr>

<tr>
<td>Contains Data Types</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
</tr>

<tr>
<td>Contains Indexes</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>

</table>

<h3>Key Points</h3>

<ul>
    <li>The Conceptual Database Model is the highest level of database design.</li>
    <li>It focuses on entities, attributes, and relationships.</li>
    <li>It is independent of any DBMS.</li>
    <li>It represents business requirements.</li>
    <li>It serves as the foundation for logical and physical database design.</li>
</ul>

`;

let physical_database_model = `

<h3>Physical Database Model</h3>

<p>
The <b>Physical Database Model</b> is the lowest level of database design.
It describes <b>how data is actually stored</b> in the database management system (DBMS).
It includes tables, columns, data types, primary keys, foreign keys, indexes,
constraints, and storage details.
</p>

<h4>Definition</h4>

<p>
A <b>Physical Database Model</b> is a database design that specifies the
actual implementation of the database in a specific DBMS such as MySQL,
Oracle, SQL Server, or PostgreSQL.
</p>

<h4>Simple Definition</h4>

<p>
The Physical Database Model describes the actual structure of the database
that is created inside the DBMS.
</p>

<h3>Purpose of Physical Database Model</h3>

<ul>
<li>To implement the database in a DBMS.</li>
<li>To define tables and columns.</li>
<li>To specify data types.</li>
<li>To improve database performance.</li>
<li>To reduce storage space.</li>
<li>To create indexes and constraints.</li>
<li>To ensure data integrity.</li>
</ul>

<h3>Characteristics</h3>

<ul>
<li>Lowest level of database design.</li>
<li>DBMS dependent.</li>
<li>Contains actual table definitions.</li>
<li>Defines data types for every column.</li>
<li>Uses Primary Keys and Foreign Keys.</li>
<li>Includes indexes and constraints.</li>
<li>Focuses on performance and storage.</li>
</ul>

<h3>Main Components</h3>

<h4>1. Tables</h4>

<p>
Data is stored in the form of tables.
Each table contains rows and columns.
</p>

<h4>2. Columns</h4>

<p>
Each table consists of multiple columns that store different types of data.
</p>

<h4>3. Data Types</h4>

<p>
Every column has a specific data type.
</p>

<table class="notes-table">

<tr>
<th>Column</th>
<th>Data Type</th>
</tr>

<tr>
<td>StudentID</td>
<td>INT</td>
</tr>

<tr>
<td>Name</td>
<td>VARCHAR(100)</td>
</tr>

<tr>
<td>Age</td>
<td>INT</td>
</tr>

<tr>
<td>Email</td>
<td>VARCHAR(150)</td>
</tr>

</table>

<h4>4. Primary Key</h4>

<p>
A <b>Primary Key</b> uniquely identifies each record in a table.
</p>

<p><b>Example:</b> StudentID</p>

<h4>5. Foreign Key</h4>

<p>
A <b>Foreign Key</b> creates a relationship between two tables.
</p>

<p><b>Example:</b> CourseID in the Student table references the Course table.</p>

<h4>6. Constraints</h4>

<p>
Constraints are rules applied to columns to maintain data accuracy.
</p>

<ul>
<li>PRIMARY KEY</li>
<li>FOREIGN KEY</li>
<li>NOT NULL</li>
<li>UNIQUE</li>
<li>CHECK</li>
<li>DEFAULT</li>
</ul>

<h4>7. Indexes</h4>

<p>
Indexes improve the speed of searching and retrieving data.
</p>

<h3>Example of Physical Database Model</h3>

<p>
Student Table
</p>

<table class="notes-table">

<tr>
<th>Column</th>
<th>Data Type</th>
<th>Constraint</th>
</tr>

<tr>
<td>StudentID</td>
<td>INT</td>
<td>PRIMARY KEY</td>
</tr>

<tr>
<td>Name</td>
<td>VARCHAR(100)</td>
<td>NOT NULL</td>
</tr>

<tr>
<td>Email</td>
<td>VARCHAR(100)</td>
<td>UNIQUE</td>
</tr>

<tr>
<td>CourseID</td>
<td>INT</td>
<td>FOREIGN KEY</td>
</tr>

</table>

<h3>Relationship Example</h3>

<pre class="notes_text_pre">
Course
--------------------
CourseID (PK)
CourseName

        ▲
        │
        │
Student
-----------------------
StudentID (PK)
Name
Email
CourseID (FK)
</pre>

<h3>Working of Physical Database Model</h3>

<ol>
<li>Create database.</li>
<li>Create tables.</li>
<li>Define columns.</li>
<li>Assign data types.</li>
<li>Create Primary Keys.</li>
<li>Create Foreign Keys.</li>
<li>Apply constraints.</li>
<li>Create indexes for faster searching.</li>
<li>Store actual data.</li>
</ol>

<h3>Advantages</h3>

<ul>
<li>Represents the actual database implementation.</li>
<li>Improves database performance.</li>
<li>Supports indexing for faster queries.</li>
<li>Ensures data integrity using constraints.</li>
<li>Optimizes storage space.</li>
<li>Ready for implementation in a DBMS.</li>
</ul>

<h3>Disadvantages</h3>

<ul>
<li>DBMS dependent.</li>
<li>Difficult to modify after implementation.</li>
<li>Requires knowledge of SQL and DBMS.</li>
<li>Changes may affect existing applications.</li>
</ul>

<h3>Real-Life Example</h3>

<p>
In a College Management System, the Physical Database Model defines:
</p>

<ul>
<li>Student table.</li>
<li>Course table.</li>
<li>Teacher table.</li>
<li>Data types for each column.</li>
<li>Primary Keys and Foreign Keys.</li>
<li>Indexes for faster searching.</li>
<li>Constraints to maintain data integrity.</li>
</ul>

<h3>Conceptual vs Logical vs Physical Database Model</h3>

<table class="notes-table">

<tr>
<th>Feature</th>
<th>Conceptual</th>
<th>Logical</th>
<th>Physical</th>
</tr>

<tr>
<td>Focus</td>
<td>Business Requirements</td>
<td>Database Structure</td>
<td>Actual Implementation</td>
</tr>

<tr>
<td>DBMS Dependent</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>

<tr>
<td>Tables</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
</tr>

<tr>
<td>Data Types</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
</tr>

<tr>
<td>Indexes</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>

<tr>
<td>Constraints</td>
<td>No</td>
<td>Basic</td>
<td>Complete</td>
</tr>

</table>

<h3>Key Points</h3>

<ul>
<li>The Physical Database Model is the lowest level of database design.</li>
<li>It describes how data is physically stored in a DBMS.</li>
<li>It includes tables, columns, data types, indexes, and constraints.</li>
<li>It is DBMS dependent.</li>
<li>It is used to create the actual database in MySQL, Oracle, SQL Server, PostgreSQL, etc.</li>
</ul>

`;

let logical_database_model = `

<h3>Logical Database Model</h3>

<p>
The <b>Logical Database Model</b> is the second level of database design.
It describes <b>how data is logically organized</b> in the database.
It defines tables, columns, relationships, primary keys, and foreign keys,
but it does not describe how the data is physically stored.
</p>

<h4>Definition</h4>

<p>
A <b>Logical Database Model</b> is a database design that converts the
Conceptual Database Model into a logical structure by defining tables,
attributes, keys, and relationships.
It is independent of any specific DBMS.
</p>

<h4>Simple Definition</h4>

<p>
The Logical Database Model describes how data will be organized into tables
and how those tables are related to each other.
</p>

<h3>Purpose of Logical Database Model</h3>

<ul>
<li>To convert the conceptual model into database tables.</li>
<li>To define entities and attributes.</li>
<li>To identify Primary Keys.</li>
<li>To establish relationships using Foreign Keys.</li>
<li>To reduce data redundancy through normalization.</li>
<li>To prepare the database design before physical implementation.</li>
</ul>

<h3>Characteristics</h3>

<ul>
<li>Middle level of database design.</li>
<li>Independent of any DBMS.</li>
<li>Defines tables and columns.</li>
<li>Identifies Primary Keys and Foreign Keys.</li>
<li>Defines relationships between tables.</li>
<li>Does not specify storage details.</li>
<li>Focuses on database structure.</li>
</ul>

<h3>Main Components</h3>

<h4>1. Entities</h4>

<p>
Entities from the Conceptual Model are converted into database tables.
</p>

<p><b>Example:</b></p>

<ul>
<li>Student</li>
<li>Course</li>
<li>Teacher</li>
</ul>

<h4>2. Attributes</h4>

<p>
Attributes become the columns of each table.
</p>

<table class="notes-table">

<tr>
<th>Table</th>
<th>Columns</th>
</tr>

<tr>
<td>Student</td>
<td>StudentID, Name, Email, CourseID</td>
</tr>

<tr>
<td>Course</td>
<td>CourseID, CourseName</td>
</tr>

</table>

<h4>3. Primary Key</h4>

<p>
A <b>Primary Key (PK)</b> uniquely identifies each record in a table.
</p>

<p><b>Example:</b> StudentID</p>

<h4>4. Foreign Key</h4>

<p>
A <b>Foreign Key (FK)</b> is used to establish relationships between tables.
</p>

<p><b>Example:</b> CourseID in the Student table references the Course table.</p>

<h4>5. Relationships</h4>

<p>
Relationships define how tables are connected.
</p>

<p><b>Examples:</b></p>

<ul>
<li>One-to-One (1:1)</li>
<li>One-to-Many (1:M)</li>
<li>Many-to-Many (M:N)</li>
</ul>

<h3>Example of Logical Database Model</h3>

<p><b>Student Table</b></p>

<table class="notes-table">

<tr>
<th>StudentID (PK)</th>
<th>Name</th>
<th>Email</th>
<th>CourseID (FK)</th>
</tr>

<tr>
<td>101</td>
<td>Rahul</td>
<td>rahul@gmail.com</td>
<td>C01</td>
</tr>

<tr>
<td>102</td>
<td>Priya</td>
<td>priya@gmail.com</td>
<td>C02</td>
</tr>

</table>

<p><b>Course Table</b></p>

<table class="notes-table">

<tr>
<th>CourseID (PK)</th>
<th>Course Name</th>
</tr>

<tr>
<td>C01</td>
<td>BCA</td>
</tr>

<tr>
<td>C02</td>
<td>MCA</td>
</tr>

</table>

<h3>Relationship Diagram</h3>

<pre class="notes_text_pre">
Student
-------------------------
StudentID (PK)
Name
Email
CourseID (FK)
      │
      │
      ▼
Course
--------------------
CourseID (PK)
CourseName
</pre>

<h3>Working of Logical Database Model</h3>

<ol>
<li>Identify entities.</li>
<li>Convert entities into tables.</li>
<li>Convert attributes into columns.</li>
<li>Choose Primary Keys.</li>
<li>Create Foreign Keys.</li>
<li>Define relationships.</li>
<li>Normalize the database.</li>
<li>Prepare the design for physical implementation.</li>
</ol>

<h3>Advantages</h3>

<ul>
<li>Easy to understand.</li>
<li>Independent of any DBMS.</li>
<li>Reduces data redundancy.</li>
<li>Clearly defines relationships.</li>
<li>Provides a structured database design.</li>
<li>Acts as a bridge between conceptual and physical models.</li>
</ul>

<h3>Disadvantages</h3>

<ul>
<li>Does not describe physical storage.</li>
<li>Cannot estimate database performance.</li>
<li>Requires further conversion into a Physical Database Model.</li>
</ul>

<h3>Real-Life Example</h3>

<p>
In a College Management System:
</p>

<ul>
<li>Student becomes the Student table.</li>
<li>Course becomes the Course table.</li>
<li>Teacher becomes the Teacher table.</li>
<li>Relationships are created using Primary Keys and Foreign Keys.</li>
</ul>

<h3>Conceptual vs Logical vs Physical Database Model</h3>

<table class="notes-table">

<tr>
<th>Feature</th>
<th>Conceptual</th>
<th>Logical</th>
<th>Physical</th>
</tr>

<tr>
<td>Focus</td>
<td>Business Requirements</td>
<td>Database Structure</td>
<td>Actual Implementation</td>
</tr>

<tr>
<td>DBMS Dependent</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>

<tr>
<td>Tables</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
</tr>

<tr>
<td>Primary Keys</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
</tr>

<tr>
<td>Foreign Keys</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
</tr>

<tr>
<td>Data Types</td>
<td>No</td>
<td>Optional</td>
<td>Yes</td>
</tr>

<tr>
<td>Storage Details</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>

</table>

<h3>Key Points</h3>

<ul>
<li>The Logical Database Model is the middle level of database design.</li>
<li>It converts the Conceptual Model into tables.</li>
<li>It defines entities, attributes, Primary Keys, and Foreign Keys.</li>
<li>It establishes relationships between tables.</li>
<li>It is independent of any specific DBMS.</li>
<li>It serves as the foundation for the Physical Database Model.</li>
</ul>

`;

let role_of_dba = `

<h3>Role of DBA (Database Administrator)</h3>

<p>
A <b>Database Administrator (DBA)</b> is a person who is responsible for
installing, configuring, managing, securing, maintaining, and monitoring
a database system. The DBA ensures that the database is always available,
secure, and performs efficiently.
</p>

<h4>Definition</h4>

<p>
A <b>Database Administrator (DBA)</b> is a database professional who manages
the overall operation of a database and ensures that data is stored,
retrieved, and protected properly.
</p>

<h4>Simple Definition</h4>

<p>
A <b>DBA</b> is the person who manages the database and keeps it secure,
organized, and available for users.
</p>

<h3>Responsibilities (Roles) of a DBA</h3>

<h4>1. Database Installation</h4>

<p>
The DBA installs the Database Management System (DBMS) such as MySQL,
Oracle, SQL Server, or PostgreSQL on the server.
</p>

<h4>2. Database Configuration</h4>

<p>
The DBA configures the database according to the organization's
requirements to achieve better performance and security.
</p>

<h4>3. Database Design</h4>

<p>
The DBA helps design the database structure by creating databases,
tables, relationships, indexes, and constraints.
</p>

<h4>4. User Management</h4>

<p>
The DBA creates user accounts and manages user permissions and privileges.
Only authorized users can access the database.
</p>

<h4>5. Security Management</h4>

<p>
The DBA protects the database from unauthorized access by implementing
authentication, authorization, encryption, and security policies.
</p>

<h4>6. Backup and Recovery</h4>

<p>
The DBA regularly creates database backups and restores data in case of
hardware failure, software failure, or accidental deletion.
</p>

<h4>7. Performance Monitoring</h4>

<p>
The DBA monitors database performance and optimizes queries, indexes,
and server resources to improve speed.
</p>

<h4>8. Database Maintenance</h4>

<p>
The DBA performs regular maintenance tasks such as updating the database,
removing unused data, rebuilding indexes, and checking database health.
</p>

<h4>9. Data Integrity</h4>

<p>
The DBA ensures that the stored data is accurate, consistent, and reliable
by applying constraints and validation rules.
</p>

<h4>10. Disaster Recovery</h4>

<p>
The DBA prepares recovery plans to restore the database quickly after
system crashes, cyber-attacks, or natural disasters.
</p>

<h4>11. Storage Management</h4>

<p>
The DBA manages database storage, disk space, tablespaces, and memory
to ensure efficient data storage.
</p>

<h4>12. Database Upgradation</h4>

<p>
The DBA upgrades the database software to newer versions for better
performance, security, and new features.
</p>

<h4>13. Troubleshooting</h4>

<p>
The DBA identifies and resolves database-related problems such as slow
queries, connection failures, locking issues, and server crashes.
</p>

<h4>14. Documentation</h4>

<p>
The DBA maintains documentation related to database structure,
configuration, backup schedules, and security policies.
</p>

<h3>Skills Required for a DBA</h3>

<ul>
<li>Knowledge of SQL.</li>
<li>Knowledge of DBMS (MySQL, Oracle, SQL Server, PostgreSQL).</li>
<li>Backup and Recovery techniques.</li>
<li>Database Security.</li>
<li>Performance Tuning.</li>
<li>Problem Solving Skills.</li>
<li>Operating System Knowledge.</li>
<li>Networking Basics.</li>
</ul>

<h3>Real-Life Example</h3>

<p>
In a bank, the DBA is responsible for managing customer account data,
creating backups, securing transactions, controlling user access, and
ensuring that the banking database is available 24×7.
</p>

<h3>Advantages of Having a DBA</h3>

<ul>
<li>Improves database security.</li>
<li>Ensures high availability.</li>
<li>Improves database performance.</li>
<li>Prevents data loss.</li>
<li>Maintains data integrity.</li>
<li>Provides quick disaster recovery.</li>
<li>Efficient management of database resources.</li>
</ul>

<h3>Summary of DBA Responsibilities</h3>

<table class="notes-table">

<tr>
<th>Responsibility</th>
<th>Description</th>
</tr>

<tr>
<td>Installation</td>
<td>Installs DBMS software.</td>
</tr>

<tr>
<td>Configuration</td>
<td>Configures database settings.</td>
</tr>

<tr>
<td>Database Design</td>
<td>Creates database structure.</td>
</tr>

<tr>
<td>User Management</td>
<td>Creates users and assigns permissions.</td>
</tr>

<tr>
<td>Security</td>
<td>Protects the database.</td>
</tr>

<tr>
<td>Backup & Recovery</td>
<td>Creates backups and restores data.</td>
</tr>

<tr>
<td>Performance Tuning</td>
<td>Optimizes database performance.</td>
</tr>

<tr>
<td>Maintenance</td>
<td>Maintains database health.</td>
</tr>

<tr>
<td>Storage Management</td>
<td>Manages memory and disk space.</td>
</tr>

<tr>
<td>Troubleshooting</td>
<td>Solves database-related problems.</td>
</tr>

</table>

<h3>Key Points</h3>

<ul>
<li>A DBA manages the entire database system.</li>
<li>The DBA ensures database security, availability, and performance.</li>
<li>The DBA performs installation, backup, recovery, maintenance, and performance tuning.</li>
<li>The DBA protects data from unauthorized access and data loss.</li>
<li>The DBA is responsible for keeping the database available and reliable.</li>
</ul>

`;

let database_design = `

<h3>Database Design</h3>

<p>
<b>Database Design</b> is the process of planning and organizing data before
creating a database. It involves identifying entities, attributes,
relationships, keys, and constraints to build an efficient, secure, and
well-structured database.
</p>

<h4>Definition</h4>

<p>
A <b>Database Design</b> is the process of creating the structure of a database
so that data can be stored, managed, and retrieved efficiently with minimum
redundancy and maximum consistency.
</p>

<h4>Simple Definition</h4>

<p>
Database Design is the process of deciding <b>what data will be stored,
how it will be stored, and how different data will be related</b> inside a
database.
</p>

<h3>Why is Database Design Important?</h3>

<ul>
<li>Organizes data efficiently.</li>
<li>Reduces data redundancy.</li>
<li>Improves data consistency.</li>
<li>Provides faster data retrieval.</li>
<li>Improves database performance.</li>
<li>Maintains data integrity.</li>
<li>Makes database maintenance easier.</li>
<li>Supports future expansion.</li>
</ul>

<h3>Objectives of Database Design</h3>

<ul>
<li>Store data efficiently.</li>
<li>Reduce duplicate data.</li>
<li>Maintain data accuracy.</li>
<li>Provide data security.</li>
<li>Support multiple users.</li>
<li>Improve query performance.</li>
<li>Maintain relationships between data.</li>
</ul>

<h3>Steps in Database Design</h3>

<h4>Step 1: Requirement Analysis</h4>

<p>
Understand the business requirements and identify what information
needs to be stored.
</p>

<p><b>Example:</b> College Management System requires information about Students,
Teachers, Courses, and Departments.</p>

<h4>Step 2: Identify Entities</h4>

<p>
Identify the main objects about which data will be stored.
</p>

<p><b>Examples:</b></p>

<ul>
<li>Student</li>
<li>Teacher</li>
<li>Course</li>
<li>Department</li>
</ul>

<h4>Step 3: Identify Attributes</h4>

<p>
Determine the properties of each entity.
</p>

<table class="notes-table">

<tr>
<th>Entity</th>
<th>Attributes</th>
</tr>

<tr>
<td>Student</td>
<td>StudentID, Name, Email, Mobile</td>
</tr>

<tr>
<td>Course</td>
<td>CourseID, CourseName, Duration</td>
</tr>

</table>

<h4>Step 4: Identify Relationships</h4>

<p>
Define how entities are connected with each other.
</p>

<ul>
<li>Student enrolls in Course.</li>
<li>Teacher teaches Course.</li>
<li>Department manages Course.</li>
</ul>

<h4>Step 5: Select Primary Keys</h4>

<p>
Choose a unique column to identify each record.
</p>

<p><b>Example:</b> StudentID</p>

<h4>Step 6: Define Foreign Keys</h4>

<p>
Create relationships between tables using Foreign Keys.
</p>

<p><b>Example:</b> CourseID in the Student table references the Course table.</p>

<h4>Step 7: Normalize the Database</h4>

<p>
Normalization removes duplicate data and improves data consistency by
organizing tables properly.
</p>

<h4>Step 8: Create Physical Database</h4>

<p>
Implement the database in a DBMS such as MySQL, Oracle, SQL Server,
or PostgreSQL.
</p>

<h3>Database Design Process</h3>

<pre class="notes_text_pre">
Requirement Analysis
        │
        ▼
Identify Entities
        │
        ▼
Identify Attributes
        │
        ▼
Define Relationships
        │
        ▼
Choose Primary Keys
        │
        ▼
Create Foreign Keys
        │
        ▼
Normalization
        │
        ▼
Physical Database Implementation
</pre>

<h3>Example</h3>

<p><b>Student Table</b></p>

<table class="notes-table">

<tr>
<th>StudentID</th>
<th>Name</th>
<th>Email</th>
<th>CourseID</th>
</tr>

<tr>
<td>101</td>
<td>Rahul</td>
<td>rahul@gmail.com</td>
<td>C01</td>
</tr>

<tr>
<td>102</td>
<td>Priya</td>
<td>priya@gmail.com</td>
<td>C02</td>
</tr>

</table>

<p><b>Course Table</b></p>

<table class="notes-table">

<tr>
<th>CourseID</th>
<th>Course Name</th>
</tr>

<tr>
<td>C01</td>
<td>BCA</td>
</tr>

<tr>
<td>C02</td>
<td>MCA</td>
</tr>

</table>

<h3>Relationship Diagram</h3>

<pre class="notes_text_pre">
Student
------------------------
StudentID (PK)
Name
Email
CourseID (FK)
      │
      ▼
Course
------------------------
CourseID (PK)
CourseName
</pre>

<h3>Advantages of Good Database Design</h3>

<ul>
<li>Reduces data redundancy.</li>
<li>Improves data consistency.</li>
<li>Provides better security.</li>
<li>Improves database performance.</li>
<li>Simplifies maintenance.</li>
<li>Supports future scalability.</li>
<li>Ensures data integrity.</li>
</ul>

<h3>Disadvantages of Poor Database Design</h3>

<ul>
<li>Duplicate data.</li>
<li>Data inconsistency.</li>
<li>Slow query performance.</li>
<li>Difficult maintenance.</li>
<li>Higher storage requirements.</li>
<li>Data update anomalies.</li>
</ul>

<h3>Real-Life Example</h3>

<p>
In a <b>College Management System</b>, Database Design helps organize
Students, Teachers, Courses, Departments, and Results into separate tables,
while maintaining relationships between them using Primary Keys and
Foreign Keys.
</p>

<h3>Key Points</h3>

<ul>
<li>Database Design is the process of planning and creating the database structure.</li>
<li>It identifies entities, attributes, relationships, keys, and constraints.</li>
<li>A good database design reduces redundancy and improves consistency.</li>
<li>Database Design follows the sequence: Requirement Analysis → Conceptual Design → Logical Design → Physical Design.</li>
<li>A well-designed database is efficient, secure, scalable, and easy to maintain.</li>
</ul>

`;

let entity_relationship_model = `

<h3>Entity Relationship Model (ER Model)</h3>

<p>
The <b>Entity Relationship Model (ER Model)</b> is a high-level conceptual
database model used to design and represent the structure of a database.
It describes the <b>entities (objects)</b>, their <b>attributes (properties)</b>,
and the <b>relationships</b> between those entities.
</p>

<p>
The ER Model was introduced by <b>Peter Chen</b> in <b>1976</b> and is one of
the most widely used techniques for database design.
</p>

<h4>Definition</h4>

<p>
The <b>Entity Relationship Model (ER Model)</b> is a conceptual model that
represents real-world objects as entities, their characteristics as
attributes, and the associations among them as relationships.
</p>

<h4>Simple Definition</h4>

<p>
The ER Model is a graphical method used to design a database before
creating actual tables.
</p>

<h3>Why Do We Need an ER Model?</h3>

<ul>
<li>To understand business requirements.</li>
<li>To identify the data that will be stored.</li>
<li>To identify relationships between different data.</li>
<li>To reduce database design errors.</li>
<li>To provide a blueprint before creating tables.</li>
<li>To improve communication between users and developers.</li>
</ul>

<h3>Real-Life Example</h3>

<p>
Suppose we are designing a <b>College Management System</b>.
</p>

<p>
We need to store information about:
</p>

<ul>
<li>Students</li>
<li>Teachers</li>
<li>Courses</li>
<li>Departments</li>
</ul>

<p>
We also need to know:
</p>

<ul>
<li>Which student is enrolled in which course?</li>
<li>Which teacher teaches which course?</li>
<li>Which department offers which course?</li>
</ul>

<p>
Instead of directly creating database tables, we first prepare an ER Model.
</p>

<hr>

<h3>Components of ER Model</h3>

<p>
The ER Model mainly consists of three components:
</p>

<ul>
<li>Entity</li>
<li>Attribute</li>
<li>Relationship</li>
</ul>

<hr>

<h3>1. Entity</h3>

<p>
An <b>Entity</b> is a real-world object, person, place, event, or thing
about which information is stored in a database.
</p>

<h4>Definition</h4>

<p>
An Entity is anything that has an independent existence and can be uniquely identified.
</p>

<h4>Examples</h4>

<ul>
<li>Student</li>
<li>Teacher</li>
<li>Course</li>
<li>Department</li>
<li>Book</li>
<li>Employee</li>
<li>Customer</li>
<li>Product</li>
</ul>

<h4>Example</h4>

<p>
In a College Database:
</p>

<pre class="notes_text_pre">
Student
Teacher
Course
Department
</pre>

<p>
All these are entities because information is stored about them.
</p>

<hr>

<h3>Types of Entity</h3>

<h4>1. Strong Entity</h4>

<p>
A Strong Entity has its own Primary Key and can exist independently.
</p>

<p><b>Example:</b></p>

<pre class="notes_text_pre">
Student

StudentID
Name
Email
</pre>

<p>
Student can exist independently.
</p>

<h4>2. Weak Entity</h4>

<p>
A Weak Entity does not have its own Primary Key.
It depends on another entity for its identification.
</p>

<p><b>Example:</b></p>

<pre class="notes_text_pre">
Employee
     │
Dependent
</pre>

<p>
Dependent cannot exist without Employee.
</p>

<hr>

<h3>2. Attribute</h3>

<p>
An <b>Attribute</b> is a property or characteristic that describes an entity.
</p>

<h4>Definition</h4>

<p>
Attributes provide additional information about an entity.
</p>

<h4>Example</h4>

<pre class="notes_text_pre">
Student

StudentID
Name
Age
Email
Mobile
Address
</pre>

<p>
These are all attributes of Student.
</p>

<hr>

<h3>Types of Attributes</h3>

<h4>1. Simple Attribute</h4>

<p>
Cannot be divided into smaller parts.
</p>

<p><b>Example:</b></p>

<pre class="notes_text_pre">
Gender
Age
Salary
</pre>

<h4>2. Composite Attribute</h4>

<p>
Can be divided into multiple sub-parts.
</p>

<p><b>Example:</b></p>

<pre class="notes_text_pre">
Name

First Name
Middle Name
Last Name
</pre>

<p><b>Another Example:</b></p>

<pre class="notes_text_pre">
Address

House No
City
State
Country
PIN Code
</pre>

<h4>3. Single-Valued Attribute</h4>

<p>
Stores only one value.
</p>

<p><b>Example:</b></p>

<pre class="notes_text_pre">
Date of Birth

01-01-2000
</pre>

<h4>4. Multi-Valued Attribute</h4>

<p>
Stores multiple values.
</p>

<p><b>Example:</b></p>

<pre class="notes_text_pre">
Phone Number

9876543210
9123456780
7654321987
</pre>

<h4>5. Derived Attribute</h4>

<p>
Its value is calculated from another attribute.
</p>

<p><b>Example:</b></p>

<pre class="notes_text_pre">
Date of Birth ---> Age
</pre>

<p>
Age can be calculated from Date of Birth.
</p>

<h4>6. Key Attribute</h4>

<p>
An attribute that uniquely identifies every record.
</p>

<p><b>Example:</b></p>

<pre class="notes_text_pre">
StudentID
EmployeeID
Roll Number
</pre>

<hr>

<h3>3. Relationship</h3>

<p>
A <b>Relationship</b> represents the association between two or more entities.
</p>

<h4>Definition</h4>

<p>
A Relationship connects entities and describes how they interact with each other.
</p>

<h4>Examples</h4>

<ul>
<li>Student enrolls in Course.</li>
<li>Teacher teaches Course.</li>
<li>Customer places Order.</li>
<li>Employee works in Department.</li>
</ul>

<hr>

<h3>Types of Relationships</h3>

<h4>1. One-to-One (1:1)</h4>

<p>
One record of the first entity is associated with only one record of the second entity.
</p>

<p><b>Example:</b></p>

<pre class="notes_text_pre">
Person -------- Passport
</pre>

<p>
One person has one passport.
</p>

<hr>

<h4>2. One-to-Many (1:M)</h4>

<p>
One record of the first entity is related to multiple records of the second entity.
</p>

<p><b>Example:</b></p>

<pre class="notes_text_pre">
Department -------- Students
           1            Many
</pre>

<p>
One department has many students.
</p>

<hr>

<h4>3. Many-to-One (M:1)</h4>

<p>
Many records of one entity are related to one record of another entity.
</p>

<p><b>Example:</b></p>

<pre class="notes_text_pre">
Students -------- Department
 Many                 1
</pre>

<hr>

<h4>4. Many-to-Many (M:N)</h4>

<p>
Many records of one entity are related to many records of another entity.
</p>

<p><b>Example:</b></p>

<pre class="notes_text_pre">
Students -------- Courses
   Many             Many
</pre>

<p>
One student can enroll in many courses, and one course can have many students.
</p>

<hr>

<h3>ER Diagram Symbols</h3>

<table class="notes-table">

<tr>
<th>Symbol</th>
<th>Meaning</th>
</tr>

<tr>
<td>Rectangle</td>
<td>Entity</td>
</tr>

<tr>
<td>Ellipse (Oval)</td>
<td>Attribute</td>
</tr>

<tr>
<td>Diamond</td>
<td>Relationship</td>
</tr>

<tr>
<td>Double Rectangle</td>
<td>Weak Entity</td>
</tr>

<tr>
<td>Double Ellipse</td>
<td>Multivalued Attribute</td>
</tr>

<tr>
<td>Dashed Ellipse</td>
<td>Derived Attribute</td>
</tr>

<tr>
<td>Underline Attribute</td>
<td>Primary Key</td>
</tr>

</table>

<h3>Sample ER Diagram</h3>

<pre class="notes_text_pre">
              Student
          +---------------+
          | StudentID(PK) |
          | Name          |
          | Email         |
          +---------------+
                 |
             Enrolls
                 |
                 ▼
          +---------------+
          |    Course     |
          | CourseID(PK)  |
          | Course Name   |
          +---------------+
</pre>

<h3>Advantages of ER Model</h3>

<ul>
<li>Easy to understand.</li>
<li>Easy to design databases.</li>
<li>Represents real-world objects.</li>
<li>Reduces database design errors.</li>
<li>Improves communication between developers and users.</li>
<li>Acts as the blueprint for Logical Database Design.</li>
</ul>

<h3>Disadvantages of ER Model</h3>

<ul>
<li>Not suitable for very large databases.</li>
<li>Complex relationships make diagrams difficult to understand.</li>
<li>Cannot represent implementation details.</li>
<li>Needs conversion into Logical and Physical Database Models.</li>
</ul>

<h3>Applications of ER Model</h3>

<ul>
<li>College Management System</li>
<li>Hospital Management System</li>
<li>Banking System</li>
<li>Library Management System</li>
<li>Online Shopping System</li>
<li>Railway Reservation System</li>
<li>Employee Management System</li>
</ul>

<h3>Key Points</h3>

<ul>
<li>The ER Model was proposed by Peter Chen in 1976.</li>
<li>It is a conceptual database model.</li>
<li>The three basic components are Entity, Attribute, and Relationship.</li>
<li>Entities represent real-world objects.</li>
<li>Attributes describe entities.</li>
<li>Relationships connect entities.</li>
<li>The ER Model is used before creating database tables.</li>
<li>ER Diagrams are converted into the Logical Database Model, and then into the Physical Database Model.</li>
</ul>

`;

let components_of_er_model = `

<h3>Components of ER Model</h3>

<p>
The <b>Entity Relationship (ER) Model</b> is made up of three fundamental
components that describe the structure of a database.
These components help identify <b>what data will be stored</b>,
<b>what information will be stored about that data</b>, and
<b>how different data items are related to each other</b>.
</p>

<h4>Main Components of ER Model</h4>

<ol>
<li>Entity</li>
<li>Attribute</li>
<li>Relationship</li>
</ol>

<hr>

<h3>1. Entity</h3>

<p>
An <b>Entity</b> is a real-world object, person, place, event, or thing
about which information is stored in a database.
Every entity has its own identity and can be uniquely identified.
</p>

<h4>Definition</h4>

<p>
An Entity is any object that exists independently and whose information
needs to be stored in the database.
</p>

<h4>Examples</h4>

<ul>
<li>Student</li>
<li>Teacher</li>
<li>Course</li>
<li>Department</li>
<li>Employee</li>
<li>Customer</li>
<li>Book</li>
<li>Product</li>
</ul>

<h4>Example</h4>

<p>
In a College Management System:
</p>

<pre class="notes_text_pre">
Student
Teacher
Course
Department
</pre>

<p>
All these are entities because the database stores information about them.
</p>

<h4>Types of Entity</h4>

<h4>1. Strong Entity</h4>

<p>
A <b>Strong Entity</b> has its own Primary Key and can exist independently.
</p>

<p><b>Example:</b></p>

<pre class="notes_text_pre">
Student

StudentID (PK)
Name
Email
</pre>

<h4>2. Weak Entity</h4>

<p>
A <b>Weak Entity</b> does not have a complete Primary Key of its own.
It depends on another (strong) entity for identification.
</p>

<p><b>Example:</b></p>

<pre class="notes_text_pre">
Employee
     │
Dependent
</pre>

<p>
A dependent cannot exist without an employee.
</p>

<hr>

<h3>2. Attribute</h3>

<p>
An <b>Attribute</b> is a property or characteristic that describes an entity.
Attributes provide detailed information about an entity.
</p>

<h4>Definition</h4>

<p>
An Attribute is a piece of information that describes an entity.
</p>

<h4>Example</h4>

<p>
Entity: Student
</p>

<pre class="notes_text_pre">
Student

StudentID
Name
Age
Email
Mobile
Address
</pre>

<p>
These are all attributes of the Student entity.
</p>

<h4>Types of Attributes</h4>

<h4>1. Simple Attribute</h4>

<p>
Cannot be divided into smaller parts.
</p>

<p><b>Examples:</b></p>

<ul>
<li>Age</li>
<li>Gender</li>
<li>Salary</li>
</ul>

<h4>2. Composite Attribute</h4>

<p>
Can be divided into multiple sub-attributes.
</p>

<p><b>Example:</b></p>

<pre class="notes_text_pre">
Name

First Name
Middle Name
Last Name
</pre>

<p><b>Another Example:</b></p>

<pre class="notes_text_pre">
Address

House No
City
State
Country
PIN Code
</pre>

<h4>3. Single-Valued Attribute</h4>

<p>
Stores only one value for each entity.
</p>

<p><b>Examples:</b></p>

<ul>
<li>Date of Birth</li>
<li>Blood Group</li>
</ul>

<h4>4. Multi-Valued Attribute</h4>

<p>
Stores more than one value for an entity.
</p>

<p><b>Example:</b></p>

<pre class="notes_text_pre">
Phone Number

9876543210
9123456780
</pre>

<h4>5. Derived Attribute</h4>

<p>
Its value is calculated from another attribute.
</p>

<p><b>Example:</b></p>

<pre class="notes_text_pre">
Date of Birth  ----->  Age
</pre>

<p>
Age can be calculated from Date of Birth.
</p>

<h4>6. Key Attribute</h4>

<p>
A <b>Key Attribute</b> uniquely identifies every entity instance.
</p>

<p><b>Examples:</b></p>

<ul>
<li>StudentID</li>
<li>EmployeeID</li>
<li>Roll Number</li>
</ul>

<hr>

<h3>3. Relationship</h3>

<p>
A <b>Relationship</b> describes the association between two or more entities.
It shows how one entity is connected to another.
</p>

<h4>Definition</h4>

<p>
A Relationship is an association between entities that represents how they interact.
</p>

<h4>Examples</h4>

<ul>
<li>Student enrolls in Course.</li>
<li>Teacher teaches Course.</li>
<li>Customer places Order.</li>
<li>Employee works in Department.</li>
</ul>

<h4>Types of Relationships</h4>

<h4>1. One-to-One (1:1)</h4>

<p>
One entity is related to only one entity.
</p>

<p><b>Example:</b></p>

<pre class="notes_text_pre">
Person -------- Passport
</pre>

<p>
One person has one passport.
</p>

<h4>2. One-to-Many (1:M)</h4>

<p>
One entity is related to many entities.
</p>

<p><b>Example:</b></p>

<pre class="notes_text_pre">
Department -------- Students
      1               Many
</pre>

<h4>3. Many-to-One (M:1)</h4>

<p>
Many entities are related to one entity.
</p>

<p><b>Example:</b></p>

<pre class="notes_text_pre">
Students -------- Department
  Many               1
</pre>

<h4>4. Many-to-Many (M:N)</h4>

<p>
Many entities are related to many entities.
</p>

<p><b>Example:</b></p>

<pre class="notes_text_pre">
Students -------- Courses
   Many              Many
</pre>

<p>
One student can enroll in many courses, and one course can have many students.
</p>

<hr>

<h3>Summary of Components</h3>

<table class="notes-table">

<tr>
<th>Component</th>
<th>Description</th>
<th>Example</th>
</tr>

<tr>
<td>Entity</td>
<td>Real-world object whose data is stored.</td>
<td>Student, Teacher, Course</td>
</tr>

<tr>
<td>Attribute</td>
<td>Property or characteristic of an entity.</td>
<td>Name, Age, Email</td>
</tr>

<tr>
<td>Relationship</td>
<td>Association between two or more entities.</td>
<td>Student enrolls in Course</td>
</tr>

</table>

<h3>Complete Example</h3>

<pre class="notes_text_pre">
               Student
        +-------------------+
        | StudentID (PK)    |
        | Name              |
        | Email             |
        +-------------------+
                 |
              Enrolls
                 |
                 ▼
        +-------------------+
        | Course            |
        | CourseID (PK)     |
        | Course Name       |
        +-------------------+
</pre>

<p>
In the above example:
</p>

<ul>
<li><b>Student</b> and <b>Course</b> are <b>Entities</b>.</li>
<li><b>StudentID, Name, Email, CourseID, and Course Name</b> are <b>Attributes</b>.</li>
<li><b>Enrolls</b> is the <b>Relationship</b> connecting Student and Course.</li>
</ul>

<h3>Key Points</h3>

<ul>
<li>The ER Model has three main components: Entity, Attribute, and Relationship.</li>
<li>An Entity represents a real-world object.</li>
<li>An Attribute describes the properties of an entity.</li>
<li>A Relationship connects two or more entities.</li>
<li>These three components form the foundation of database design.</li>
</ul>

`;

let er_modeling_symbols = `

<h3>ER Modeling Symbols</h3>

<p>
<b>ER Modeling Symbols</b> are graphical symbols used in an <b>Entity Relationship (ER) Diagram</b>
to represent entities, attributes, relationships, and other database components.
These symbols make the database design easy to understand and visualize.
</p>

<h4>Definition</h4>

<p>
ER Modeling Symbols are standard graphical notations used to represent the
different components of an Entity Relationship Model.
</p>

<h4>Why Do We Use ER Modeling Symbols?</h4>

<ul>
<li>To represent database components visually.</li>
<li>To simplify database design.</li>
<li>To improve communication between developers and users.</li>
<li>To identify entities, attributes, and relationships easily.</li>
<li>To create a blueprint before implementing the database.</li>
</ul>

<h3>Main ER Modeling Symbols</h3>

<ol>
<li>Rectangle (Entity)</li>
<li>Double Rectangle (Weak Entity)</li>
<li>Ellipse / Oval (Attribute)</li>
<li>Double Ellipse (Multivalued Attribute)</li>
<li>Dashed Ellipse (Derived Attribute)</li>
<li>Underlined Attribute (Key Attribute)</li>
<li>Diamond (Relationship)</li>
<li>Double Diamond (Identifying Relationship)</li>
<li>Lines (Participation)</li>
<li>Cardinality Symbols</li>
</ol>

<hr>

<h3>1. Rectangle (Entity)</h3>

<p>
A <b>Rectangle</b> represents an <b>Entity</b>.
An entity is any real-world object whose information is stored in the database.
</p>

<p><b>Symbol</b></p>

<pre class="notes_text_pre">
+------------+
|  Student   |
+------------+
</pre>

<p><b>Examples</b></p>

<ul>
<li>Student</li>
<li>Teacher</li>
<li>Employee</li>
<li>Book</li>
<li>Customer</li>
</ul>

<hr>

<h3>2. Double Rectangle (Weak Entity)</h3>

<p>
A <b>Double Rectangle</b> represents a <b>Weak Entity</b>.
A weak entity cannot exist without a strong entity and does not have its own complete primary key.
</p>

<p><b>Symbol</b></p>

<pre class="notes_text_pre">
=====================
||   Dependent     ||
=====================
</pre>

<p><b>Example</b></p>

<pre class="notes_text_pre">
Employee
    │
Dependent
</pre>

<hr>

<h3>3. Ellipse / Oval (Attribute)</h3>

<p>
An <b>Ellipse (Oval)</b> represents an <b>Attribute</b>.
Attributes describe the properties of an entity.
</p>

<p><b>Symbol</b></p>

<pre class="notes_text_pre">
   ( Name )
</pre>

<p><b>Examples</b></p>

<ul>
<li>Name</li>
<li>Age</li>
<li>Email</li>
<li>Salary</li>
</ul>

<hr>

<h3>4. Double Ellipse (Multivalued Attribute)</h3>

<p>
A <b>Double Ellipse</b> represents a <b>Multivalued Attribute</b>.
It stores more than one value for an entity.
</p>

<p><b>Symbol</b></p>

<pre class="notes_text_pre">
 (( Phone Number ))
</pre>

<p><b>Example</b></p>

<p>
A student can have multiple phone numbers.
</p>

<pre class="notes_text_pre">
9876543210
9123456780
</pre>

<hr>

<h3>5. Dashed Ellipse (Derived Attribute)</h3>

<p>
A <b>Dashed Ellipse</b> represents a <b>Derived Attribute</b>.
Its value is calculated from another attribute.
</p>

<p><b>Symbol</b></p>

<pre class="notes_text_pre">
 - - ( Age ) - -
</pre>

<p><b>Example</b></p>

<pre class="notes_text_pre">
Date of Birth -----> Age
</pre>

<p>
Age is calculated from Date of Birth.
</p>

<hr>

<h3>6. Underlined Attribute (Key Attribute)</h3>

<p>
An <b>Underlined Attribute</b> represents the <b>Primary Key</b>.
It uniquely identifies each record.
</p>

<p><b>Symbol</b></p>

<pre class="notes_text_pre">
StudentID
---------
</pre>

<p><b>Examples</b></p>

<ul>
<li>StudentID</li>
<li>EmployeeID</li>
<li>Roll Number</li>
</ul>

<hr>

<h3>7. Diamond (Relationship)</h3>

<p>
A <b>Diamond</b> represents a <b>Relationship</b> between entities.
</p>

<p><b>Symbol</b></p>

<pre class="notes_text_pre">
     /---------\
    / Enrolls  \
    \          /
     \---------/
</pre>

<p><b>Examples</b></p>

<ul>
<li>Student enrolls in Course.</li>
<li>Teacher teaches Subject.</li>
<li>Customer places Order.</li>
</ul>

<hr>

<h3>8. Double Diamond (Identifying Relationship)</h3>

<p>
A <b>Double Diamond</b> represents the identifying relationship between
a weak entity and its strong entity.
</p>

<p><b>Symbol</b></p>

<pre class="notes_text_pre">
   //-----------\\
  // Dependent  \\
  \\  Of        //
   \\-----------//
</pre>

<p><b>Example</b></p>

<pre class="notes_text_pre">
Employee ===== Dependent
</pre>

<hr>

<h3>9. Lines (Participation)</h3>

<p>
Lines connect entities, attributes, and relationships.
They indicate participation.
</p>

<h4>Single Line</h4>

<p>
Represents <b>Partial Participation</b>.
</p>

<pre class="notes_text_pre">
Student -------- Enrolls
</pre>

<h4>Double Line</h4>

<p>
Represents <b>Total Participation</b>.
Every entity must participate in the relationship.
</p>

<pre class="notes_text_pre">
Student ======== Enrolls
</pre>

<hr>

<h3>10. Cardinality Symbols</h3>

<p>
Cardinality specifies how many instances of one entity are associated
with another entity.
</p>

<table class="notes-table">

<tr>
<th>Cardinality</th>
<th>Description</th>
<th>Example</th>
</tr>

<tr>
<td>1 : 1</td>
<td>One-to-One</td>
<td>Person → Passport</td>
</tr>

<tr>
<td>1 : M</td>
<td>One-to-Many</td>
<td>Department → Students</td>
</tr>

<tr>
<td>M : 1</td>
<td>Many-to-One</td>
<td>Students → Department</td>
</tr>

<tr>
<td>M : N</td>
<td>Many-to-Many</td>
<td>Students ↔ Courses</td>
</tr>

</table>

<hr>

<h3>Complete ER Diagram Example</h3>

<pre class="notes_text_pre">
                (StudentID)
                     |
                  +-----------+
                  | Student   |
                  +-----------+
                 /     |      \
          (Name)   (Email)  ((Phone))

                     |
                 <Enrolls>
                     |
              +---------------+
              |    Course     |
              +---------------+
                    |
               (CourseID)
                    |
             (Course Name)
</pre>

<h3>Summary of ER Modeling Symbols</h3>

<table class="notes-table">

<tr>
<th>Symbol</th>
<th>Represents</th>
</tr>

<tr>
<td>Rectangle</td>
<td>Strong Entity</td>
</tr>

<tr>
<td>Double Rectangle</td>
<td>Weak Entity</td>
</tr>

<tr>
<td>Ellipse (Oval)</td>
<td>Attribute</td>
</tr>

<tr>
<td>Double Ellipse</td>
<td>Multivalued Attribute</td>
</tr>

<tr>
<td>Dashed Ellipse</td>
<td>Derived Attribute</td>
</tr>

<tr>
<td>Underlined Attribute</td>
<td>Primary Key (Key Attribute)</td>
</tr>

<tr>
<td>Diamond</td>
<td>Relationship</td>
</tr>

<tr>
<td>Double Diamond</td>
<td>Identifying Relationship</td>
</tr>

<tr>
<td>Single Line</td>
<td>Partial Participation</td>
</tr>

<tr>
<td>Double Line</td>
<td>Total Participation</td>
</tr>

</table>

<h3>Key Points</h3>

<ul>
<li>ER Modeling Symbols are graphical symbols used to create ER Diagrams.</li>
<li>Rectangle represents an Entity.</li>
<li>Ellipse represents an Attribute.</li>
<li>Diamond represents a Relationship.</li>
<li>Double Rectangle represents a Weak Entity.</li>
<li>Double Ellipse represents a Multivalued Attribute.</li>
<li>Dashed Ellipse represents a Derived Attribute.</li>
<li>An Underlined Attribute represents the Primary Key.</li>
<li>Cardinality defines how entities are related.</li>
<li>ER Diagrams are the foundation of Logical and Physical Database Design.</li>
</ul>

`;

let attribute_inheritance = `

<h3>Attribute Inheritance in DBMS (Enhanced ER Model)</h3>

<p>
<b>Attribute Inheritance</b> is a feature of the <b>Enhanced Entity-Relationship (EER) Model</b>.
It allows a <b>subclass (child entity)</b> to automatically inherit all the attributes of its
<b>superclass (parent entity)</b>. This reduces data duplication and makes database design
simpler and more organized.
</p>

<h4>Definition</h4>

<p>
Attribute Inheritance means that a child entity automatically gets all the attributes
of its parent entity. The child entity can also have its own additional attributes.
</p>

<h4>Formula</h4>

<p class="notes_text_pre">
Child Entity = Parent Entity Attributes + Child's Own Attributes
</p>

<h4>Why Attribute Inheritance is Used?</h4>

<ul>
<li>Avoids duplication of common attributes.</li>
<li>Makes database design easier to understand.</li>
<li>Improves consistency.</li>
<li>Reduces storage of repeated data.</li>
<li>Makes future modifications easier.</li>
</ul>

<h4>Example 1: Employee Inheritance</h4>

<p>
Suppose every employee in a company has some common information.
</p>

<p><b>Parent Entity (Employee)</b></p>

<table class="notes-table">
<tr>
<th>Attribute</th>
<th>Description</th>
</tr>
<tr>
<td>Emp_ID</td>
<td>Employee ID</td>
</tr>
<tr>
<td>Name</td>
<td>Employee Name</td>
</tr>
<tr>
<td>Age</td>
<td>Employee Age</td>
</tr>
<tr>
<td>Salary</td>
<td>Employee Salary</td>
</tr>
</table>

<p><b>Child Entity (Teacher)</b></p>

<ul>
<li>Emp_ID (Inherited)</li>
<li>Name (Inherited)</li>
<li>Age (Inherited)</li>
<li>Salary (Inherited)</li>
<li>Subject (Own Attribute)</li>
</ul>

<p><b>Child Entity (Manager)</b></p>

<ul>
<li>Emp_ID (Inherited)</li>
<li>Name (Inherited)</li>
<li>Age (Inherited)</li>
<li>Salary (Inherited)</li>
<li>Department (Own Attribute)</li>
</ul>

<h4>Diagram</h4>

<p class="notes_text_pre">
                 Employee
        ------------------------
        Emp_ID
        Name
        Age
        Salary
             |
      -----------------
      |               |
   Teacher        Manager
   Subject       Department
</p>

<h4>Example 2: Vehicle Inheritance</h4>

<p>
All vehicles have some common information.
</p>

<p><b>Parent Entity (Vehicle)</b></p>

<ul>
<li>Vehicle_ID</li>
<li>Brand</li>
<li>Model</li>
<li>Price</li>
</ul>

<p><b>Child Entity (Car)</b></p>

<ul>
<li>Vehicle_ID (Inherited)</li>
<li>Brand (Inherited)</li>
<li>Model (Inherited)</li>
<li>Price (Inherited)</li>
<li>Number_of_Doors (Own Attribute)</li>
</ul>

<p><b>Child Entity (Bike)</b></p>

<ul>
<li>Vehicle_ID (Inherited)</li>
<li>Brand (Inherited)</li>
<li>Model (Inherited)</li>
<li>Price (Inherited)</li>
<li>Engine_CC (Own Attribute)</li>
</ul>

<h4>Diagram</h4>

<p class="notes_text_pre">
                  Vehicle
          -----------------------
          Vehicle_ID
          Brand
          Model
          Price
               |
       -----------------
       |               |
      Car            Bike
 Number_of_Doors   Engine_CC
</p>

<h4>Real-Life Example</h4>

<table class="notes-table">
<tr>
<th>Superclass</th>
<th>Subclass</th>
<th>Inherited Attributes</th>
<th>Own Attribute</th>
</tr>

<tr>
<td>Person</td>
<td>Student</td>
<td>Name, Age, Address</td>
<td>Roll Number</td>
</tr>

<tr>
<td>Person</td>
<td>Teacher</td>
<td>Name, Age, Address</td>
<td>Subject</td>
</tr>

<tr>
<td>Employee</td>
<td>Manager</td>
<td>Emp_ID, Name, Salary</td>
<td>Department</td>
</tr>

<tr>
<td>Vehicle</td>
<td>Car</td>
<td>Vehicle_ID, Brand, Price</td>
<td>Number of Doors</td>
</tr>
</table>

<h4>Advantages of Attribute Inheritance</h4>

<ul>
<li>Eliminates duplicate attributes.</li>
<li>Database becomes easy to maintain.</li>
<li>Improves consistency of data.</li>
<li>Makes the ER model more organized.</li>
<li>Supports object-oriented concepts.</li>
<li>Easy to extend the database.</li>
</ul>

<h4>Disadvantages of Attribute Inheritance</h4>

<ul>
<li>Database design becomes more complex.</li>
<li>Requires understanding of superclass and subclass.</li>
<li>Can increase complexity in queries.</li>
<li>Not required for small databases.</li>
</ul>

<h4>Key Points</h4>

<ul>
<li>Attribute Inheritance is available in the Enhanced ER (EER) Model.</li>
<li>A subclass automatically inherits all attributes of its superclass.</li>
<li>The subclass can define additional attributes of its own.</li>
<li>It helps reduce redundancy and improves database organization.</li>
<li>Inheritance follows the Parent → Child relationship.</li>
</ul>

`;

let specialization = `

<h3>Specialization in DBMS (Enhanced ER Model)</h3>

<p>
<b>Specialization</b> is a concept of the <b>Enhanced Entity-Relationship (EER) Model</b>.
It is the process of dividing a <b>superclass (parent entity)</b> into one or more
<b>subclasses (child entities)</b> based on their unique characteristics or properties.
Each subclass inherits all the attributes and relationships of the superclass and
can also have its own additional attributes.
</p>

<h4>Definition</h4>

<p>
Specialization is a <b>Top-Down Approach</b> in which a general entity is divided into
more specific entities according to their differences.
</p>

<h4>Formula</h4>

<p class="notes_text_pre">
Superclass (General Entity)
            ↓
      Specialization
            ↓
Subclass 1 + Subclass 2 + Subclass 3
</p>

<h4>Why Specialization is Used?</h4>

<ul>
<li>To classify entities into smaller groups.</li>
<li>To represent real-world objects more accurately.</li>
<li>To avoid unnecessary attributes in every entity.</li>
<li>To improve database organization.</li>
<li>To support inheritance of common attributes.</li>
</ul>

<h4>Example 1: Employee Specialization</h4>

<p>
Suppose a company has different types of employees.
All employees have some common information, but each type has its own unique details.
</p>

<p><b>Superclass (Employee)</b></p>

<table class="notes-table">
<tr>
<th>Attribute</th>
<th>Description</th>
</tr>

<tr>
<td>Emp_ID</td>
<td>Employee ID</td>
</tr>

<tr>
<td>Name</td>
<td>Employee Name</td>
</tr>

<tr>
<td>Age</td>
<td>Employee Age</td>
</tr>

<tr>
<td>Salary</td>
<td>Employee Salary</td>
</tr>

</table>

<p><b>Subclasses</b></p>

<ul>
<li><b>Teacher</b> → Subject</li>
<li><b>Manager</b> → Department</li>
<li><b>Developer</b> → Programming Language</li>
</ul>

<h4>Diagram</h4>

<p class="notes_text_pre">
                 Employee
        ------------------------
        Emp_ID
        Name
        Age
        Salary
             |
   -------------------------
   |           |           |
Teacher     Manager    Developer
Subject   Department   Programming Language
</p>

<h4>Example 2: Person Specialization</h4>

<p>
A person can belong to different categories.
</p>

<p><b>Superclass (Person)</b></p>

<ul>
<li>Person_ID</li>
<li>Name</li>
<li>Age</li>
<li>Address</li>
</ul>

<p><b>Subclasses</b></p>

<ul>
<li>Student → Roll Number, Course</li>
<li>Teacher → Subject, Experience</li>
<li>Doctor → Specialization</li>
</ul>

<h4>Diagram</h4>

<p class="notes_text_pre">
                 Person
        ----------------------
        Person_ID
        Name
        Age
        Address
             |
   -------------------------
   |          |            |
Student    Teacher      Doctor
Roll No.   Subject    Specialization
Course     Experience
</p>

<h4>Real-Life Examples</h4>

<table class="notes-table">

<tr>
<th>Superclass</th>
<th>Subclass</th>
<th>Special Attribute</th>
</tr>

<tr>
<td>Employee</td>
<td>Teacher</td>
<td>Subject</td>
</tr>

<tr>
<td>Employee</td>
<td>Manager</td>
<td>Department</td>
</tr>

<tr>
<td>Employee</td>
<td>Developer</td>
<td>Programming Language</td>
</tr>

<tr>
<td>Person</td>
<td>Student</td>
<td>Roll Number</td>
</tr>

<tr>
<td>Vehicle</td>
<td>Car</td>
<td>Number of Doors</td>
</tr>

<tr>
<td>Vehicle</td>
<td>Bike</td>
<td>Engine CC</td>
</tr>

</table>

<h4>Characteristics of Specialization</h4>

<ul>
<li>It is a Top-Down approach.</li>
<li>Starts with a general entity.</li>
<li>Creates multiple specialized entities.</li>
<li>Each subclass inherits all superclass attributes.</li>
<li>Each subclass may have additional attributes and relationships.</li>
</ul>

<h4>Advantages of Specialization</h4>

<ul>
<li>Represents real-world entities more accurately.</li>
<li>Reduces redundancy.</li>
<li>Improves database organization.</li>
<li>Supports attribute inheritance.</li>
<li>Makes data management easier.</li>
</ul>

<h4>Disadvantages of Specialization</h4>

<ul>
<li>Increases database design complexity.</li>
<li>Requires proper planning.</li>
<li>Complex queries may be needed.</li>
<li>Not suitable for very small databases.</li>
</ul>

<h4>Difference Between General Entity and Specialized Entity</h4>

<table class="notes-table">

<tr>
<th>Superclass</th>
<th>Subclass</th>
</tr>

<tr>
<td>General entity</td>
<td>Specific entity</td>
</tr>

<tr>
<td>Contains common attributes</td>
<td>Contains inherited and special attributes</td>
</tr>

<tr>
<td>Broad classification</td>
<td>Detailed classification</td>
</tr>

<tr>
<td>Parent entity</td>
<td>Child entity</td>
</tr>

</table>

<h4>Key Points</h4>

<ul>
<li>Specialization is an EER Model concept.</li>
<li>It is a Top-Down process.</li>
<li>A superclass is divided into multiple subclasses.</li>
<li>Subclasses inherit all attributes of the superclass.</li>
<li>Each subclass has its own unique attributes.</li>
<li>Specialization improves database organization and reduces redundancy.</li>
</ul>

`;

let generalization = `

<h3>Generalization in DBMS (Enhanced ER Model)</h3>

<p>
<b>Generalization</b> is a concept of the <b>Enhanced Entity-Relationship (EER) Model</b>.
It is the process of combining two or more similar <b>subclasses (child entities)</b>
into a single <b>superclass (parent entity)</b> based on their common attributes and
relationships.
</p>

<h4>Definition</h4>

<p>
Generalization is a <b>Bottom-Up Approach</b> in which multiple specific entities are
combined to form one general entity.
</p>

<h4>Formula</h4>

<p class="notes_text_pre">
Subclass 1 + Subclass 2 + Subclass 3
                ↓
         Generalization
                ↓
       Superclass (General Entity)
</p>

<h4>Why Generalization is Used?</h4>

<ul>
<li>To combine similar entities into one common entity.</li>
<li>To remove duplicate attributes.</li>
<li>To reduce data redundancy.</li>
<li>To simplify database design.</li>
<li>To improve database organization.</li>
</ul>

<h4>Example 1: Employee Generalization</h4>

<p>
Suppose a company has different types of employees.
All of them share some common information.
Instead of storing the same attributes separately, we create one common superclass.
</p>

<p><b>Subclasses</b></p>

<ul>
<li>Teacher → Subject</li>
<li>Manager → Department</li>
<li>Developer → Programming Language</li>
</ul>

<p><b>Common Attributes</b></p>

<table class="notes-table">

<tr>
<th>Attribute</th>
<th>Description</th>
</tr>

<tr>
<td>Emp_ID</td>
<td>Employee ID</td>
</tr>

<tr>
<td>Name</td>
<td>Employee Name</td>
</tr>

<tr>
<td>Age</td>
<td>Employee Age</td>
</tr>

<tr>
<td>Salary</td>
<td>Employee Salary</td>
</tr>

</table>

<p><b>Superclass Created</b></p>

<p>
Employee (Emp_ID, Name, Age, Salary)
</p>

<h4>Diagram</h4>

<p class="notes_text_pre">
Teacher      Manager      Developer
 Subject    Department   Programming Language
      \          |           /
       \         |          /
        --------------------
             Employee
        Emp_ID
        Name
        Age
        Salary
</p>

<h4>Example 2: Vehicle Generalization</h4>

<p>
Car and Bike have many common properties, so they can be combined into one
general entity called Vehicle.
</p>

<p><b>Subclasses</b></p>

<ul>
<li>Car → Number_of_Doors</li>
<li>Bike → Engine_CC</li>
</ul>

<p><b>Superclass</b></p>

<ul>
<li>Vehicle_ID</li>
<li>Brand</li>
<li>Model</li>
<li>Price</li>
</ul>

<h4>Diagram</h4>

<p class="notes_text_pre">
      Car              Bike
 Number_of_Doors    Engine_CC
        \             /
         \           /
        ----------------
          Vehicle
     Vehicle_ID
     Brand
     Model
     Price
</p>

<h4>Real-Life Examples</h4>

<table class="notes-table">

<tr>
<th>Subclass</th>
<th>Superclass</th>
</tr>

<tr>
<td>Student, Teacher</td>
<td>Person</td>
</tr>

<tr>
<td>Car, Bike</td>
<td>Vehicle</td>
</tr>

<tr>
<td>Savings Account, Current Account</td>
<td>Bank Account</td>
</tr>

<tr>
<td>Teacher, Manager, Developer</td>
<td>Employee</td>
</tr>

<tr>
<td>Dog, Cat</td>
<td>Animal</td>
</tr>

</table>

<h4>Characteristics of Generalization</h4>

<ul>
<li>It is a Bottom-Up approach.</li>
<li>Starts with specific entities (subclasses).</li>
<li>Creates one common superclass.</li>
<li>Common attributes are stored in the superclass.</li>
<li>Reduces duplication of data.</li>
</ul>

<h4>Advantages of Generalization</h4>

<ul>
<li>Reduces data redundancy.</li>
<li>Improves database organization.</li>
<li>Makes database maintenance easier.</li>
<li>Stores common attributes only once.</li>
<li>Supports attribute inheritance.</li>
</ul>

<h4>Disadvantages of Generalization</h4>

<ul>
<li>Database design becomes more complex.</li>
<li>Requires proper identification of common attributes.</li>
<li>Not suitable for very small databases.</li>
<li>Improper generalization may reduce clarity.</li>
</ul>

<h4>Difference Between Specialization and Generalization</h4>

<table class="notes-table">

<tr>
<th>Specialization</th>
<th>Generalization</th>
</tr>

<tr>
<td>Top-Down approach</td>
<td>Bottom-Up approach</td>
</tr>

<tr>
<td>One superclass becomes many subclasses.</td>
<td>Many subclasses become one superclass.</td>
</tr>

<tr>
<td>Creates specific entities.</td>
<td>Creates a general entity.</td>
</tr>

<tr>
<td>Focuses on differences.</td>
<td>Focuses on similarities.</td>
</tr>

<tr>
<td>Example: Employee → Teacher, Manager</td>
<td>Example: Teacher, Manager → Employee</td>
</tr>

</table>

<h4>Key Points</h4>

<ul>
<li>Generalization is an EER Model concept.</li>
<li>It is a Bottom-Up process.</li>
<li>Multiple subclasses are combined into one superclass.</li>
<li>Common attributes are stored in the superclass.</li>
<li>It reduces redundancy and improves database design.</li>
<li>Generalization is the opposite of Specialization.</li>
</ul>

`;

let categorization = `

<h3>Categorization in DBMS (Enhanced ER Model)</h3>

<p>
<b>Categorization</b> is an advanced concept of the <b>Enhanced Entity-Relationship (EER) Model</b>.
It is the process of creating a <b>category (subclass)</b> from two or more different
<b>superclasses</b>. A category represents entities that belong to any one of the
superclasses and share a common role or purpose.
</p>

<h4>Definition</h4>

<p>
Categorization is a process in which a <b>single subclass (Category)</b> is formed by
combining entities from <b>multiple superclasses</b>. The category inherits attributes
from the superclass to which an entity actually belongs.
</p>

<h4>Formula</h4>

<p class="notes_text_pre">
Superclass 1 + Superclass 2 + Superclass 3
                  ↓
            Categorization
                  ↓
          Category (Subclass)
</p>

<h4>Why Categorization is Used?</h4>

<ul>
<li>To combine entities from different superclasses.</li>
<li>To represent a common role shared by different entity types.</li>
<li>To simplify complex database designs.</li>
<li>To avoid creating duplicate relationships.</li>
<li>To improve flexibility in the database.</li>
</ul>

<h4>Example 1: Owner Category</h4>

<p>
Suppose a vehicle can be owned by either a <b>Person</b> or a <b>Company</b>.
Instead of creating separate ownership relationships, we create a category called
<b>Owner</b>.
</p>

<p><b>Superclass 1 : Person</b></p>

<ul>
<li>Person_ID</li>
<li>Name</li>
<li>Address</li>
</ul>

<p><b>Superclass 2 : Company</b></p>

<ul>
<li>Company_ID</li>
<li>Company_Name</li>
<li>Office_Address</li>
</ul>

<p><b>Category : Owner</b></p>

<p>
An Owner can be either a Person or a Company.
</p>

<h4>Diagram</h4>

<p class="notes_text_pre">
        Person           Company
      -----------      ------------
      Person_ID        Company_ID
      Name             Company_Name
      Address          Office_Address
          \               /
           \             /
            -------------
               Owner
</p>

<h4>Example 2: Account Holder</h4>

<p>
A bank account may belong to either an Individual or an Organization.
Both can be treated as an Account Holder.
</p>

<p><b>Superclass</b></p>

<ul>
<li>Individual</li>
<li>Organization</li>
</ul>

<p><b>Category</b></p>

<ul>
<li>Account Holder</li>
</ul>

<h4>Diagram</h4>

<p class="notes_text_pre">
      Individual      Organization
            \             /
             \           /
           ----------------
          Account Holder
</p>

<h4>Real-Life Examples</h4>

<table class="notes-table">

<tr>
<th>Superclass 1</th>
<th>Superclass 2</th>
<th>Category</th>
</tr>

<tr>
<td>Person</td>
<td>Company</td>
<td>Owner</td>
</tr>

<tr>
<td>Individual</td>
<td>Organization</td>
<td>Account Holder</td>
</tr>

<tr>
<td>Student</td>
<td>Teacher</td>
<td>Library Member</td>
</tr>

<tr>
<td>Customer</td>
<td>Supplier</td>
<td>Business Partner</td>
</tr>

<tr>
<td>Doctor</td>
<td>Hospital</td>
<td>Healthcare Provider</td>
</tr>

</table>

<h4>Characteristics of Categorization</h4>

<ul>
<li>Uses multiple superclasses.</li>
<li>Creates one common category (subclass).</li>
<li>An entity belongs to only one superclass at a time.</li>
<li>The category inherits attributes from the corresponding superclass.</li>
<li>Represents a common role rather than a common structure.</li>
</ul>

<h4>Advantages of Categorization</h4>

<ul>
<li>Reduces duplicate relationships.</li>
<li>Simplifies complex ER diagrams.</li>
<li>Provides flexibility in database design.</li>
<li>Represents real-world situations effectively.</li>
<li>Improves database organization.</li>
</ul>

<h4>Disadvantages of Categorization</h4>

<ul>
<li>More difficult to design than normal ER models.</li>
<li>Increases database complexity.</li>
<li>Requires careful planning of inheritance.</li>
<li>Not commonly used in small database applications.</li>
</ul>

<h4>Difference Between Generalization and Categorization</h4>

<table class="notes-table">

<tr>
<th>Generalization</th>
<th>Categorization</th>
</tr>

<tr>
<td>Combines similar subclasses.</td>
<td>Combines different superclasses.</td>
</tr>

<tr>
<td>Based on common attributes.</td>
<td>Based on a common role or purpose.</td>
</tr>

<tr>
<td>Creates one superclass.</td>
<td>Creates one category (subclass).</td>
</tr>

<tr>
<td>Example: Car + Bike → Vehicle</td>
<td>Example: Person + Company → Owner</td>
</tr>

</table>

<h4>Difference Between Specialization and Categorization</h4>

<table class="notes-table">

<tr>
<th>Specialization</th>
<th>Categorization</th>
</tr>

<tr>
<td>One superclass creates many subclasses.</td>
<td>Many superclasses create one category.</td>
</tr>

<tr>
<td>Based on differences.</td>
<td>Based on a common role.</td>
</tr>

<tr>
<td>Top-Down approach.</td>
<td>Advanced EER concept using multiple inheritance.</td>
</tr>

<tr>
<td>Example: Employee → Teacher, Manager</td>
<td>Example: Person + Company → Owner</td>
</tr>

</table>

<h4>Key Points</h4>

<ul>
<li>Categorization is an advanced concept of the EER Model.</li>
<li>It creates one category from multiple superclasses.</li>
<li>The category represents a common role shared by different entities.</li>
<li>An entity inherits attributes from the superclass it belongs to.</li>
<li>It simplifies complex database relationships.</li>
<li>Example: Person + Company → Owner.</li>
</ul>

`;

let introductiontoRelationalDBMS = `

<h3>Introduction to Relational DBMS (RDBMS)</h3>

<p>
A <b>Relational Database Management System (RDBMS)</b> is a type of Database Management
System (DBMS) that stores data in the form of <b>tables (relations)</b>. Each table
consists of <b>rows (records)</b> and <b>columns (attributes)</b>. Tables are connected
to each other using <b>keys</b>, making it easy to store, retrieve, and manage related
data efficiently.
</p>

<h4>Definition</h4>

<p>
A <b>Relational DBMS (RDBMS)</b> is a database management system that organizes data into
multiple related tables and uses relationships between tables to minimize data
redundancy and maintain data integrity.
</p>

<h4>History of RDBMS</h4>

<ul>
<li>The Relational Database Model was proposed by <b>Dr. Edgar F. Codd</b> in <b>1970</b>.</li>
<li>It is based on the concept of relations (tables).</li>
<li>Today, RDBMS is the most widely used database model in the world.</li>
</ul>

<h4>Basic Structure of RDBMS</h4>

<p class="notes_text_pre">
            Database
                |
    ------------------------
    |                      |
 Students Table      Courses Table
    |                      |
Rows (Records)      Rows (Records)
Columns             Columns
</p>

<h4>Components of RDBMS</h4>

<table class="notes-table">

<tr>
<th>Component</th>
<th>Description</th>
</tr>

<tr>
<td>Table (Relation)</td>
<td>Stores related data in rows and columns.</td>
</tr>

<tr>
<td>Row (Tuple)</td>
<td>Represents a single record.</td>
</tr>

<tr>
<td>Column (Attribute)</td>
<td>Represents a property of an entity.</td>
</tr>

<tr>
<td>Primary Key</td>
<td>Uniquely identifies each record.</td>
</tr>

<tr>
<td>Foreign Key</td>
<td>Creates a relationship between two tables.</td>
</tr>

<tr>
<td>Schema</td>
<td>Defines the structure of the database.</td>
</tr>

</table>

<h4>Example of an RDBMS Table</h4>

<p><b>Student Table</b></p>

<table class="notes-table">

<tr>
<th>Student_ID</th>
<th>Name</th>
<th>Course</th>
<th>City</th>
</tr>

<tr>
<td>101</td>
<td>Amit</td>
<td>BCA</td>
<td>Lucknow</td>
</tr>

<tr>
<td>102</td>
<td>Priya</td>
<td>BSc</td>
<td>Delhi</td>
</tr>

<tr>
<td>103</td>
<td>Rahul</td>
<td>BCA</td>
<td>Kanpur</td>
</tr>

</table>

<h4>Relationship Between Tables</h4>

<p>
Suppose we have two tables:
</p>

<ul>
<li><b>Student</b></li>
<li><b>Department</b></li>
</ul>

<p class="notes_text_pre">
Student Table

Student_ID (PK)
Name
Department_ID (FK)

            |
            |
            V

Department Table

Department_ID (PK)
Department_Name
</p>

<p>
The <b>Department_ID</b> in the Student table is a <b>Foreign Key</b> that refers to
the <b>Primary Key</b> of the Department table. This creates a relationship between
the two tables.
</p>

<h4>Features of RDBMS</h4>

<ul>
<li>Stores data in tables.</li>
<li>Supports relationships between tables.</li>
<li>Uses Primary Keys and Foreign Keys.</li>
<li>Reduces data redundancy.</li>
<li>Maintains data integrity.</li>
<li>Supports SQL (Structured Query Language).</li>
<li>Provides security and access control.</li>
<li>Supports multiple users simultaneously.</li>
</ul>

<h4>Advantages of RDBMS</h4>

<ul>
<li>Easy to organize and manage data.</li>
<li>Reduces duplicate data.</li>
<li>Maintains consistency and accuracy.</li>
<li>Supports data sharing among multiple users.</li>
<li>Provides backup and recovery features.</li>
<li>Supports powerful SQL queries.</li>
<li>Ensures data security.</li>
<li>Easy to maintain and update.</li>
</ul>

<h4>Disadvantages of RDBMS</h4>

<ul>
<li>Requires more memory and storage.</li>
<li>Can be slower for very large datasets.</li>
<li>Complex database design for large applications.</li>
<li>Requires knowledge of SQL.</li>
<li>Not suitable for highly unstructured data.</li>
</ul>

<h4>Popular RDBMS Software</h4>

<table class="notes-table">

<tr>
<th>RDBMS</th>
<th>Developed By</th>
</tr>

<tr>
<td>MySQL</td>
<td>Oracle Corporation</td>
</tr>

<tr>
<td>Oracle Database</td>
<td>Oracle Corporation</td>
</tr>

<tr>
<td>Microsoft SQL Server</td>
<td>Microsoft</td>
</tr>

<tr>
<td>PostgreSQL</td>
<td>PostgreSQL Global Development Group</td>
</tr>

<tr>
<td>SQLite</td>
<td>SQLite Development Team</td>
</tr>

<tr>
<td>MariaDB</td>
<td>MariaDB Foundation</td>
</tr>

</table>

<h4>Difference Between DBMS and RDBMS</h4>

<table class="notes-table">

<tr>
<th>DBMS</th>
<th>RDBMS</th>
</tr>

<tr>
<td>Stores data in files or tables.</td>
<td>Stores data only in related tables.</td>
</tr>

<tr>
<td>May not support relationships.</td>
<td>Supports relationships using keys.</td>
</tr>

<tr>
<td>Redundancy is higher.</td>
<td>Redundancy is minimized.</td>
</tr>

<tr>
<td>Less secure.</td>
<td>More secure.</td>
</tr>

<tr>
<td>Suitable for small applications.</td>
<td>Suitable for medium and large applications.</td>
</tr>

</table>

<h4>Applications of RDBMS</h4>

<ul>
<li>Banking Systems</li>
<li>Hospital Management Systems</li>
<li>College and University Databases</li>
<li>Library Management Systems</li>
<li>E-Commerce Websites</li>
<li>Railway and Airline Reservation Systems</li>
<li>Online Shopping Applications</li>
<li>Government Information Systems</li>
</ul>

<h4>Key Points</h4>

<ul>
<li>RDBMS stands for Relational Database Management System.</li>
<li>It stores data in the form of tables.</li>
<li>Tables are connected using Primary Keys and Foreign Keys.</li>
<li>It follows the Relational Model proposed by Dr. Edgar F. Codd.</li>
<li>SQL is used to create, retrieve, update, and delete data.</li>
<li>RDBMS reduces redundancy and maintains data integrity.</li>
<li>It is the most widely used database model today.</li>
</ul>

`;

let rdbmsTerminology = `

<h3>RDBMS Terminology</h3>

<p>
Before learning SQL and database operations, it is important to understand the
basic terminology used in a <b>Relational Database Management System (RDBMS)</b>.
These terms help us understand how data is stored, organized, and related in a
database.
</p>

<h4>1. Relation (Table)</h4>

<p>
A <b>Relation</b> is another name for a <b>Table</b>. It stores data in the form of
rows and columns. Each table contains information about a particular entity.
</p>

<p><b>Example:</b></p>

<table class="notes-table">

<tr>
<th>Student_ID</th>
<th>Name</th>
<th>Course</th>
</tr>

<tr>
<td>101</td>
<td>Amit</td>
<td>BCA</td>
</tr>

<tr>
<td>102</td>
<td>Priya</td>
<td>B.Sc.</td>
</tr>

</table>

<h4>2. Tuple (Row or Record)</h4>

<p>
A <b>Tuple</b> is a single row in a table. It represents one complete record.
</p>

<p><b>Example:</b></p>

<p class="notes_text_pre">
101 | Amit | BCA
</p>

<p>
The above row is one tuple.
</p>

<h4>3. Attribute (Column or Field)</h4>

<p>
An <b>Attribute</b> is a column in a table. It describes a property or characteristic
of an entity.
</p>

<p><b>Example:</b></p>

<ul>
<li>Student_ID</li>
<li>Name</li>
<li>Course</li>
</ul>

<h4>4. Domain</h4>

<p>
A <b>Domain</b> is the set of valid values that an attribute can have.
</p>

<p><b>Example:</b></p>

<table class="notes-table">

<tr>
<th>Attribute</th>
<th>Domain</th>
</tr>

<tr>
<td>Age</td>
<td>1 to 120</td>
</tr>

<tr>
<td>Gender</td>
<td>Male, Female, Other</td>
</tr>

<tr>
<td>Marks</td>
<td>0 to 100</td>
</tr>

</table>

<h4>5. Degree</h4>

<p>
The <b>Degree</b> of a relation is the total number of columns (attributes) in a table.
</p>

<p><b>Example:</b></p>

<p class="notes_text_pre">
Student_ID | Name | Course | City
</p>

<p>
The table has <b>4 columns</b>, so the degree is <b>4</b>.
</p>

<h4>6. Cardinality</h4>

<p>
The <b>Cardinality</b> of a relation is the total number of rows (records) in a table.
</p>

<p><b>Example:</b></p>

<table class="notes-table">

<tr>
<th>Student_ID</th>
<th>Name</th>
</tr>

<tr>
<td>101</td>
<td>Amit</td>
</tr>

<tr>
<td>102</td>
<td>Priya</td>
</tr>

<tr>
<td>103</td>
<td>Rahul</td>
</tr>

</table>

<p>
There are <b>3 rows</b>, so the cardinality is <b>3</b>.
</p>

<h4>7. Schema</h4>

<p>
A <b>Schema</b> is the overall structure or blueprint of a database. It defines
tables, columns, relationships, constraints, and data types.
</p>

<p><b>Example:</b></p>

<p class="notes_text_pre">
Student
(
Student_ID INT,
Name VARCHAR(50),
Course VARCHAR(30)
)
</p>

<h4>8. Instance</h4>

<p>
An <b>Instance</b> is the actual data stored in the database at a particular time.
As data changes, the instance also changes.
</p>

<h4>9. Primary Key</h4>

<p>
A <b>Primary Key</b> is an attribute (or combination of attributes) that uniquely
identifies each record in a table.
</p>

<p><b>Example:</b></p>

<p class="notes_text_pre">
Student_ID
</p>

<p>
Every student has a unique Student_ID.
</p>

<h4>10. Foreign Key</h4>

<p>
A <b>Foreign Key</b> is an attribute that creates a relationship between two tables.
It refers to the Primary Key of another table.
</p>

<p><b>Example:</b></p>

<p class="notes_text_pre">
Student
-------------------------
Student_ID
Name
Department_ID (FK)

Department
-------------------------
Department_ID (PK)
Department_Name
</p>

<h4>11. Candidate Key</h4>

<p>
A <b>Candidate Key</b> is an attribute or group of attributes that can uniquely
identify each record. One candidate key is selected as the Primary Key.
</p>

<h4>12. Alternate Key</h4>

<p>
The candidate keys that are not selected as the Primary Key are called
<b>Alternate Keys</b>.
</p>

<h4>13. Composite Key</h4>

<p>
A <b>Composite Key</b> is a key formed by combining two or more attributes to uniquely
identify a record.
</p>

<p><b>Example:</b></p>

<p class="notes_text_pre">
Student_ID + Course_ID
</p>

<h4>14. Null Value</h4>

<p>
A <b>NULL</b> value means the data is unknown, unavailable, or not applicable.
It is different from zero or an empty string.
</p>

<h4>15. Data Integrity</h4>

<p>
<b>Data Integrity</b> ensures that data stored in the database remains accurate,
consistent, and reliable.
</p>

<h4>Summary Table</h4>

<table class="notes-table">

<tr>
<th>Term</th>
<th>Meaning</th>
</tr>

<tr>
<td>Relation</td>
<td>Table</td>
</tr>

<tr>
<td>Tuple</td>
<td>Row or Record</td>
</tr>

<tr>
<td>Attribute</td>
<td>Column or Field</td>
</tr>

<tr>
<td>Domain</td>
<td>Set of valid values</td>
</tr>

<tr>
<td>Degree</td>
<td>Number of columns</td>
</tr>

<tr>
<td>Cardinality</td>
<td>Number of rows</td>
</tr>

<tr>
<td>Schema</td>
<td>Database structure</td>
</tr>

<tr>
<td>Instance</td>
<td>Current data in database</td>
</tr>

<tr>
<td>Primary Key</td>
<td>Uniquely identifies each row</td>
</tr>

<tr>
<td>Foreign Key</td>
<td>Creates relationship between tables</td>
</tr>

<tr>
<td>Candidate Key</td>
<td>Possible Primary Key</td>
</tr>

<tr>
<td>Alternate Key</td>
<td>Candidate key not selected as Primary Key</td>
</tr>

<tr>
<td>Composite Key</td>
<td>Combination of multiple attributes</td>
</tr>

<tr>
<td>NULL</td>
<td>Unknown or missing value</td>
</tr>

<tr>
<td>Data Integrity</td>
<td>Accuracy and consistency of data</td>
</tr>

</table>

<h4>Key Points</h4>

<ul>
<li>Relation means Table.</li>
<li>Tuple means Row.</li>
<li>Attribute means Column.</li>
<li>Degree is the number of columns.</li>
<li>Cardinality is the number of rows.</li>
<li>Schema defines the database structure.</li>
<li>Primary Key uniquely identifies each record.</li>
<li>Foreign Key creates relationships between tables.</li>
<li>Domain specifies valid values for an attribute.</li>
<li>Understanding these terms is essential before learning SQL.</li>
</ul>

`;

let databaseNormalization = `

<h3>Database Normalization</h3>

<p>
<b>Database Normalization</b> is the process of organizing data in a database to
reduce <b>data redundancy (duplicate data)</b> and improve <b>data integrity
(accuracy and consistency)</b>. It divides large tables into smaller related tables
and connects them using keys.
</p>

<h4>Definition</h4>

<p>
Normalization is a database design technique that organizes data into well-structured
tables to eliminate duplicate data and maintain consistency.
</p>

<h4>Why is Normalization Needed?</h4>

<ul>
<li>Reduces duplicate data.</li>
<li>Improves data consistency.</li>
<li>Avoids insertion, update, and deletion anomalies.</li>
<li>Makes the database easier to maintain.</li>
<li>Improves data integrity.</li>
<li>Uses storage space efficiently.</li>
</ul>

<h4>Goals of Normalization</h4>

<ul>
<li>Remove redundant data.</li>
<li>Ensure logical data storage.</li>
<li>Improve database performance.</li>
<li>Maintain relationships between tables.</li>
<li>Prevent data anomalies.</li>
</ul>

<h4>Types of Normalization</h4>

<table class="notes-table">

<tr>
<th>Normal Form</th>
<th>Purpose</th>
</tr>

<tr>
<td>1NF (First Normal Form)</td>
<td>Remove repeating groups and store atomic values.</td>
</tr>

<tr>
<td>2NF (Second Normal Form)</td>
<td>Remove partial dependency.</td>
</tr>

<tr>
<td>3NF (Third Normal Form)</td>
<td>Remove transitive dependency.</td>
</tr>

<tr>
<td>BCNF (Boyce-Codd Normal Form)</td>
<td>Remove remaining dependency problems.</td>
</tr>

<tr>
<td>4NF (Fourth Normal Form)</td>
<td>Remove multi-valued dependency.</td>
</tr>

<tr>
<td>5NF (Fifth Normal Form)</td>
<td>Remove join dependency.</td>
</tr>

</table>

<h3>1. First Normal Form (1NF)</h3>

<p>
A table is in <b>First Normal Form (1NF)</b> if every column contains
<b>atomic (single) values</b> and there are no repeating groups or multiple values
in a single column.
</p>

<p><b>Before 1NF</b></p>

<table class="notes-table">

<tr>
<th>Student_ID</th>
<th>Name</th>
<th>Subjects</th>
</tr>

<tr>
<td>101</td>
<td>Amit</td>
<td>C, Java, Python</td>
</tr>

</table>

<p><b>After 1NF</b></p>

<table class="notes-table">

<tr>
<th>Student_ID</th>
<th>Name</th>
<th>Subject</th>
</tr>

<tr>
<td>101</td>
<td>Amit</td>
<td>C</td>
</tr>

<tr>
<td>101</td>
<td>Amit</td>
<td>Java</td>
</tr>

<tr>
<td>101</td>
<td>Amit</td>
<td>Python</td>
</tr>

</table>

<h4>Rules of 1NF</h4>

<ul>
<li>Each column contains only one value.</li>
<li>No repeating groups.</li>
<li>Each row is unique.</li>
</ul>

<h3>2. Second Normal Form (2NF)</h3>

<p>
A table is in <b>Second Normal Form (2NF)</b> if it is already in <b>1NF</b> and
every non-key attribute depends on the <b>entire Primary Key</b>, not on part of it.
This removes <b>Partial Dependency</b>.
</p>

<p><b>Example</b></p>

<table class="notes-table">

<tr>
<th>Student_ID</th>
<th>Course_ID</th>
<th>Student_Name</th>
<th>Course_Name</th>
</tr>

<tr>
<td>101</td>
<td>C101</td>
<td>Amit</td>
<td>C Programming</td>
</tr>

</table>

<p>
Student_Name depends only on Student_ID, and Course_Name depends only on
Course_ID. Therefore, the table should be divided into separate tables.
</p>

<h4>Rules of 2NF</h4>

<ul>
<li>Must satisfy 1NF.</li>
<li>No partial dependency.</li>
<li>Every non-key attribute depends on the complete key.</li>
</ul>

<h3>3. Third Normal Form (3NF)</h3>

<p>
A table is in <b>Third Normal Form (3NF)</b> if it is already in <b>2NF</b> and
there is <b>no transitive dependency</b>. Non-key attributes should depend only
on the Primary Key.
</p>

<p><b>Example</b></p>

<table class="notes-table">

<tr>
<th>Student_ID</th>
<th>Department_ID</th>
<th>Department_Name</th>
</tr>

<tr>
<td>101</td>
<td>D01</td>
<td>Computer Science</td>
</tr>

</table>

<p>
Department_Name depends on Department_ID, not directly on Student_ID.
Therefore, Department information should be stored in a separate table.
</p>

<h4>Rules of 3NF</h4>

<ul>
<li>Must satisfy 2NF.</li>
<li>No transitive dependency.</li>
<li>Non-key attributes depend only on the Primary Key.</li>
</ul>

<h3>4. Boyce-Codd Normal Form (BCNF)</h3>

<p>
<b>BCNF</b> is an improved version of <b>3NF</b>. A table is in BCNF if every
determinant is a candidate key.
</p>

<h4>Rules of BCNF</h4>

<ul>
<li>Must satisfy 3NF.</li>
<li>Every determinant must be a Candidate Key.</li>
<li>Removes anomalies not handled by 3NF.</li>
</ul>

<h3>5. Fourth Normal Form (4NF)</h3>

<p>
A table is in <b>Fourth Normal Form (4NF)</b> if it is already in BCNF and has
<b>no Multi-Valued Dependency (MVD)</b>.
</p>

<p><b>Example</b></p>

<p>
If a student can have multiple hobbies and multiple languages independently,
they should be stored in separate tables.
</p>

<h4>Rules of 4NF</h4>

<ul>
<li>Must satisfy BCNF.</li>
<li>No Multi-Valued Dependency.</li>
</ul>

<h3>6. Fifth Normal Form (5NF)</h3>

<p>
A table is in <b>Fifth Normal Form (5NF)</b> if it is already in 4NF and has
<b>no Join Dependency</b>. It ensures that tables can be joined without losing
or creating unnecessary data.
</p>

<h4>Rules of 5NF</h4>

<ul>
<li>Must satisfy 4NF.</li>
<li>No Join Dependency.</li>
<li>Data can be reconstructed correctly using joins.</li>
</ul>

<h4>Normalization Flow</h4>

<p class="notes_text_pre">
Unnormalized Table
        |
        V
      First Normal Form (1NF)
        |
        V
     Second Normal Form (2NF)
        |
        V
      Third Normal Form (3NF)
        |
        V
             BCNF
        |
        V
      Fourth Normal Form (4NF)
        |
        V
      Fifth Normal Form (5NF)
</p>

<h4>Advantages of Normalization</h4>

<ul>
<li>Reduces duplicate data.</li>
<li>Improves data consistency.</li>
<li>Maintains data integrity.</li>
<li>Prevents insertion, update, and deletion anomalies.</li>
<li>Makes database easier to maintain.</li>
<li>Uses storage efficiently.</li>
</ul>

<h4>Disadvantages of Normalization</h4>

<ul>
<li>Increases the number of tables.</li>
<li>Complex queries require JOIN operations.</li>
<li>Database design becomes more complex.</li>
<li>Too much normalization may reduce performance.</li>
</ul>

<h4>Difference Between Normal Forms</h4>

<table class="notes-table">

<tr>
<th>Normal Form</th>
<th>Removes</th>
</tr>

<tr>
<td>1NF</td>
<td>Repeating groups and multi-valued attributes</td>
</tr>

<tr>
<td>2NF</td>
<td>Partial dependency</td>
</tr>

<tr>
<td>3NF</td>
<td>Transitive dependency</td>
</tr>

<tr>
<td>BCNF</td>
<td>Candidate key dependency issues</td>
</tr>

<tr>
<td>4NF</td>
<td>Multi-valued dependency</td>
</tr>

<tr>
<td>5NF</td>
<td>Join dependency</td>
</tr>

</table>

<h4>Key Points</h4>

<ul>
<li>Normalization organizes data efficiently.</li>
<li>It reduces redundancy and improves integrity.</li>
<li>1NF removes repeating groups.</li>
<li>2NF removes partial dependency.</li>
<li>3NF removes transitive dependency.</li>
<li>BCNF is a stronger version of 3NF.</li>
<li>4NF removes multi-valued dependency.</li>
<li>5NF removes join dependency.</li>
<li>Normalization results in a well-structured database.</li>
</ul>

`;

let functionalDepsContent = `

<h3>Functional Dependency (FD) in DBMS</h3>

<p>
Before learning <b>Normalization</b>, it is important to understand <b>Functional Dependency (FD)</b>. Functional Dependency describes the relationship between two or more attributes in a table. It helps identify how one attribute depends on another and is the foundation of database normalization.
</p>

<hr>

<h3>What is Functional Dependency?</h3>

<p>
A <b>Functional Dependency (FD)</b> is a relationship in which the value of one attribute (or a group of attributes) uniquely determines the value of another attribute.
</p>

<p>
In simple words:
</p>

<p class="notes_text">
If we know the value of one attribute, we can determine the value of another attribute.
</p>

<p>
It is represented using the symbol:
</p>

<pre class="notes_text_pre">
X → Y
</pre>

<p>Where:</p>

<ul>
<li><b>X</b> = Determinant (Independent Attribute)</li>
<li><b>Y</b> = Dependent Attribute</li>
</ul>

<p>
This means that the value of <b>X</b> uniquely determines the value of <b>Y</b>.
</p>

<hr>

<h3>Example 1: Student Table</h3>

<table class="notes-table">
<tr>
<th>Student_ID</th>
<th>Name</th>
<th>Department</th>
</tr>

<tr>
<td>101</td>
<td>Rahul</td>
<td>BCA</td>
</tr>

<tr>
<td>102</td>
<td>Priya</td>
<td>BBA</td>
</tr>

<tr>
<td>103</td>
<td>Amit</td>
<td>B.Tech</td>
</tr>
</table>

<p>
Functional Dependency:
</p>

<pre class="notes_text_pre">
Student_ID → Name

Student_ID → Department
</pre>

<p>
Reason:
Each Student_ID is unique, so it always identifies one student and one department.
</p>

<hr>

<h3>Example 2: Employee Table</h3>

<table class="notes-table">
<tr>
<th>Emp_ID</th>
<th>Employee_Name</th>
<th>Salary</th>
</tr>

<tr>
<td>E101</td>
<td>Rohit</td>
<td>40000</td>
</tr>

<tr>
<td>E102</td>
<td>Neha</td>
<td>50000</td>
</tr>

<tr>
<td>E103</td>
<td>Ankit</td>
<td>45000</td>
</tr>
</table>

<p>
Functional Dependencies:
</p>

<pre class="notes_text_pre">
Emp_ID → Employee_Name

Emp_ID → Salary
</pre>

<hr>

<h3>Example 3: Book Table</h3>

<table class="notes-table">
<tr>
<th>ISBN</th>
<th>Book_Name</th>
<th>Price</th>
</tr>

<tr>
<td>97801</td>
<td>DBMS</td>
<td>450</td>
</tr>

<tr>
<td>97802</td>
<td>Java</td>
<td>550</td>
</tr>
</table>

<p>
Functional Dependencies:
</p>

<pre class="notes_text_pre">
ISBN → Book_Name

ISBN → Price
</pre>

<hr>

<h3>Types of Functional Dependency</h3>

<ul>
<li>1. Trivial Functional Dependency</li>
<li>2. Non-Trivial Functional Dependency</li>
<li>3. Completely Non-Trivial Functional Dependency</li>
<li>4. Full Functional Dependency</li>
<li>5. Partial Functional Dependency</li>
<li>6. Transitive Functional Dependency</li>
</ul>

<hr>

<h3>1. Trivial Functional Dependency</h3>

<p>
A dependency is <b>Trivial</b> if the dependent attribute is already a part of the determinant.
</p>

<pre class="notes_text_pre">
(A, B) → A

(Student_ID, Name) → Name
</pre>

<hr>

<h3>2. Non-Trivial Functional Dependency</h3>

<p>
A dependency is <b>Non-Trivial</b> when the dependent attribute is not a part of the determinant.
</p>

<pre class="notes_text_pre">
Student_ID → Name

Emp_ID → Salary
</pre>

<hr>

<h3>3. Completely Non-Trivial Functional Dependency</h3>

<p>
A dependency is completely non-trivial when there are no common attributes between the determinant and the dependent attribute.
</p>

<pre class="notes_text_pre">
Student_ID → Department

ISBN → Price
</pre>

<hr>

<h3>4. Full Functional Dependency</h3>

<p>
An attribute is fully dependent on the entire composite key. Removing any part of the key breaks the dependency.
</p>

<table class="notes-table">
<tr>
<th>Student_ID</th>
<th>Course_ID</th>
<th>Grade</th>
</tr>

<tr>
<td>101</td>
<td>C101</td>
<td>A</td>
</tr>
</table>

<pre class="notes_text_pre">
(Student_ID, Course_ID) → Grade
</pre>

<p>
Both Student_ID and Course_ID are required to determine Grade.
</p>

<hr>

<h3>5. Partial Functional Dependency</h3>

<p>
A dependency is partial when the dependent attribute depends on only a part of a composite key.
</p>

Example:

<pre class="notes_text_pre">
(Student_ID, Course_ID) → Student_Name
</pre>

<p>
Here, Student_Name depends only on Student_ID, not on the complete key.
</p>

<hr>

<h3>6. Transitive Functional Dependency</h3>

<p>
A transitive dependency occurs when one non-key attribute depends on another non-key attribute.
</p>

Example:

<pre class="notes_text_pre">
Student_ID → Department_ID

Department_ID → Department_Name
</pre>

Therefore,

<pre class="notes_text_pre">
Student_ID → Department_Name
</pre>

<p>
This is called a <b>Transitive Functional Dependency</b>.
</p>

<hr>

<h3>Importance of Functional Dependency</h3>

<ul>
<li>Helps identify relationships between attributes.</li>
<li>Removes redundant data.</li>
<li>Reduces data inconsistency.</li>
<li>Forms the basis of Normalization.</li>
<li>Improves database design.</li>
<li>Maintains data integrity.</li>
</ul>

<hr>

<h3>Key Points</h3>

<ul>
<li>Functional Dependency is represented as <b>X → Y</b>.</li>
<li>X is called the Determinant.</li>
<li>Y is called the Dependent Attribute.</li>
<li>One determinant can determine one or more attributes.</li>
<li>Functional Dependency is the foundation of Normalization.</li>
</ul>

`;

let fnfContent = `

<h3>First Normal Form (1NF) - Atomicity (A column should hold a single value)</h3>

<p>
<b>First Normal Form (1NF)</b> is the first step of database normalization. A table is in <b>1NF</b> if every column contains only a <b>single (atomic)</b> value and there are no repeating groups or multiple values stored in the same cell.
</p>

<hr>

<h3>Rule of 1NF</h3>

<ul>
<li>Each column must contain only one value (Atomic Value).</li>
<li>A cell cannot store multiple values.</li>
<li>There should be no repeating groups.</li>
<li>Each row should be unique.</li>
</ul>

<hr>

<h3>What is an Atomic Value?</h3>

<p>
An <b>Atomic Value</b> means a single, indivisible value. Every cell in a table should contain only one value.
</p>

<p><b>Correct (Atomic)</b></p>

<table class="notes-table">
<tr>
<th>Student_ID</th>
<th>Name</th>
<th>Course</th>
</tr>

<tr>
<td>101</td>
<td>Rahul</td>
<td>C</td>
</tr>

<tr>
<td>102</td>
<td>Priya</td>
<td>Java</td>
</tr>
</table>

<br>

<p><b>Incorrect (Not Atomic)</b></p>

<table class="notes-table">
<tr>
<th>Student_ID</th>
<th>Name</th>
<th>Courses</th>
</tr>

<tr>
<td>101</td>
<td>Rahul</td>
<td>C, C++</td>
</tr>

<tr>
<td>102</td>
<td>Priya</td>
<td>Java</td>
</tr>
</table>

<p>
The value <b>"C, C++"</b> contains multiple courses in a single cell, so the table is <b>not in 1NF</b>.
</p>

<hr>

<h3>How to Convert into 1NF?</h3>

<p>
Split the multiple values into separate rows.
</p>

<p><b>Before 1NF (Unnormalized Table)</b></p>

<table class="notes-table">
<tr>
<th>ID</th>
<th>Name</th>
<th>Courses</th>
</tr>

<tr>
<td>1</td>
<td>A</td>
<td>C, C++</td>
</tr>

<tr>
<td>2</td>
<td>B</td>
<td>Java</td>
</tr>
</table>

<br>

<p><b>After Applying 1NF</b></p>

<table class="notes-table">
<tr>
<th>ID</th>
<th>Name</th>
<th>Course</th>
</tr>

<tr>
<td>1</td>
<td>A</td>
<td>C</td>
</tr>

<tr>
<td>1</td>
<td>A</td>
<td>C++</td>
</tr>

<tr>
<td>2</td>
<td>B</td>
<td>Java</td>
</tr>
</table>

<hr>

<h3>Advantages of 1NF</h3>

<ul>
<li>Eliminates repeating groups.</li>
<li>Stores only atomic values.</li>
<li>Makes data easier to search and update.</li>
<li>Improves data consistency.</li>
<li>Forms the foundation for higher normal forms.</li>
</ul>

<hr>

<h3>Key Points</h3>

<ul>
<li>Every cell must contain only one value.</li>
<li>No multiple values in a single column.</li>
<li>No repeating groups.</li>
<li>1NF removes multi-valued attributes.</li>
<li>1NF is the first step toward database normalization.</li>
</ul>

`;

let snfContent = `

<h3>Second Normal Form (2NF) - No Partial Dependency</h3>

<p>
<b>Second Normal Form (2NF)</b> is the second step of database normalization. A table is in <b>2NF</b> if:
</p>

<ul>
<li>The table is already in <b>First Normal Form (1NF)</b>.</li>
<li>There should be <b>no Partial Dependency</b>.</li>
</ul>

<hr>

<h3>What is Partial Dependency?</h3>

<p>
A <b>Partial Dependency</b> occurs when a non-key attribute depends on only a part of a <b>Composite Primary Key</b>, instead of depending on the entire key.
</p>

<p>
In simple words:
</p>

<p class="notes_text">
If the primary key has two or more columns, every non-key attribute must depend on <b>all columns</b> of the key, not just one column.
</p>

<hr>

<h3>Example (Before 2NF)</h3>

<p>
Suppose a student enrollment table has a composite primary key:
</p>

<pre class="notes_text_pre">
Primary Key = (Student_ID, Course_ID)
</pre>

<table class="notes-table">
<tr>
<th>Student_ID</th>
<th>Course_ID</th>
<th>Student_Name</th>
<th>Course_Name</th>
</tr>

<tr>
<td>101</td>
<td>C101</td>
<td>Rahul</td>
<td>DBMS</td>
</tr>

<tr>
<td>102</td>
<td>C102</td>
<td>Priya</td>
<td>Java</td>
</tr>

<tr>
<td>101</td>
<td>C103</td>
<td>Rahul</td>
<td>Python</td>
</tr>

</table>

<p>
Functional Dependencies:
</p>

<pre class="notes_text_pre">
(Student_ID, Course_ID) → Student_Name, Course_Name

Student_ID → Student_Name

Course_ID → Course_Name
</pre>

<p>
Here,
</p>

<ul>
<li><b>Student_Name</b> depends only on <b>Student_ID</b>.</li>
<li><b>Course_Name</b> depends only on <b>Course_ID</b>.</li>
</ul>

<p>
Both attributes depend on only part of the composite key, so this is called <b>Partial Dependency</b>. Therefore, the table is <b>not in 2NF</b>.
</p>

<hr>

<h3>How to Convert into 2NF?</h3>

<p>
Remove the partial dependencies by splitting the table into smaller tables.
</p>

<h4>Student Table</h4>

<table class="notes-table">
<tr>
<th>Student_ID</th>
<th>Student_Name</th>
</tr>

<tr>
<td>101</td>
<td>Rahul</td>
</tr>

<tr>
<td>102</td>
<td>Priya</td>
</tr>

</table>

<br>

<h4>Course Table</h4>

<table class="notes-table">
<tr>
<th>Course_ID</th>
<th>Course_Name</th>
</tr>

<tr>
<td>C101</td>
<td>DBMS</td>
</tr>

<tr>
<td>C102</td>
<td>Java</td>
</tr>

<tr>
<td>C103</td>
<td>Python</td>
</tr>

</table>

<br>

<h4>Enrollment Table</h4>

<table class="notes-table">
<tr>
<th>Student_ID</th>
<th>Course_ID</th>
</tr>

<tr>
<td>101</td>
<td>C101</td>
</tr>

<tr>
<td>102</td>
<td>C102</td>
</tr>

<tr>
<td>101</td>
<td>C103</td>
</tr>

</table>

<p>
Now every non-key attribute depends on the entire primary key, so the database is in <b>Second Normal Form (2NF)</b>.
</p>

<hr>

<h3>Advantages of 2NF</h3>

<ul>
<li>Removes Partial Dependency.</li>
<li>Reduces data redundancy.</li>
<li>Prevents update anomalies.</li>
<li>Improves data consistency.</li>
<li>Makes the database easier to maintain.</li>
</ul>

<hr>

<h3>Key Points</h3>

<ul>
<li>A table must already be in <b>1NF</b>.</li>
<li>2NF removes <b>Partial Dependency</b>.</li>
<li>Partial Dependency occurs only when there is a <b>Composite Primary Key</b>.</li>
<li>Every non-key attribute must depend on the <b>entire primary key</b>.</li>
<li>2NF reduces duplicate data and improves database design.</li>
</ul>

`;

let tnfContent = `

<h3>Third Normal Form (3NF)</h3>

<p>
<b>Third Normal Form (3NF)</b> is a database normalization technique used to eliminate
<b>transitive dependencies</b>.
</p>

<p>
It is a refinement of <b>Second Normal Form (2NF)</b> and ensures that all
<b>non-key attributes</b> depend only on the <b>primary key</b> and not on other
<b>non-key attributes</b>.
</p>

<h4>Example of Transitive Dependency</h4>

<table class="notes-table">
    <tr>
        <th>StudentID</th>
        <th>StudentName</th>
        <th>CourseID</th>
        <th>CourseName</th>
        <th>Instructor</th>
    </tr>


<tr>
    <td>101</td>
    <td>A</td>
    <td>C001</td>
    <td>Math</td>
    <td>Mr. Smith</td>
</tr>

<tr>
    <td>102</td>
    <td>B</td>
    <td>C002</td>
    <td>Science</td>
    <td>Ms. Davis</td>
</tr>

<tr>
    <td>101</td>
    <td>A</td>
    <td>C002</td>
    <td>Science</td>
    <td>Ms. Davis</td>
</tr>


</table>

<h4>Issues in the Table</h4>

<ul>
    <li>
        <b>CourseName depends on CourseID</b> ✅
        <br>
        This is a direct dependency and is fine.
    </li>


<li>
    <b>Instructor depends on CourseName instead of CourseID</b> ❌
    <br>
    This creates a <b>transitive dependency</b>.
</li>

<li>
    If we change the instructor for a course, we may have to update it in
    multiple rows, which can cause <b>data inconsistency</b>.
</li>

</ul>

<h4>Rules of 3NF</h4>

<p>
A table is in <b>Third Normal Form (3NF)</b> if:
</p>

<ol>
    <li>
        It is already in <b>2NF</b>, meaning it has no partial dependencies.
    </li>


<li>
    It has <b>no transitive dependencies</b>.
</li>

<li>
    All <b>non-key attributes</b> depend only on the primary key.
</li>

<li>
    No non-key attribute should depend on another non-key attribute.
</li>


</ol>

<h4>What is Transitive Dependency?</h4>

<p>
A <b>transitive dependency</b> occurs when a non-key attribute depends on another
non-key attribute instead of depending directly on the primary key.
</p>

<p>
For example:
</p>

<div class="notes_text_pre">

<b>StudentID → CourseID → CourseName → Instructor</b>

</div>

<p>
Here, <b>Instructor</b> does not directly depend on the primary key.
Instead, it depends on another non-key attribute, such as <b>CourseName</b>.
Therefore, it creates a <b>transitive dependency</b>.
</p>

<h4>Before 3NF: Table with Transitive Dependency</h4>

<table class="notes-table">
    <tr>
        <th>StudentID</th>
        <th>StudentName</th>
        <th>CourseID</th>
        <th>CourseName</th>
        <th>Instructor</th>
    </tr>


<tr>
    <td>101</td>
    <td>A</td>
    <td>C001</td>
    <td>Math</td>
    <td>Mr. Smith</td>
</tr>

<tr>
    <td>102</td>
    <td>B</td>
    <td>C002</td>
    <td>Science</td>
    <td>Ms. Davis</td>
</tr>

<tr>
    <td>101</td>
    <td>A</td>
    <td>C002</td>
    <td>Science</td>
    <td>Ms. Davis</td>
</tr>


</table>

<h4>Dependencies in the Table</h4>

<ul>
    <li>
        <b>StudentName depends only on StudentID</b> ✅
        <br>
        This is a direct dependency.
    </li>


<li>
    <b>CourseName depends only on CourseID</b> ✅
    <br>
    This is also a direct dependency.
</li>

<li>
    <b>Instructor depends on CourseName instead of CourseID</b> ❌
    <br>
    This creates a <b>transitive dependency</b>.
</li>


</ul>

<h4>Why is Transitive Dependency a Problem?</h4>

<ol>
    <li>
        <b>Data Redundancy</b>
        <p>
            If multiple students take the same course, the
            <b>CourseName</b> and <b>Instructor</b> information will be repeated
            in multiple rows.
        </p>
    </li>


<li>
    <b>Update Anomaly</b>
    <p>
        If the instructor for a course changes, we may need to update the
        instructor information in multiple rows.
    </p>
</li>

<li>
    <b>Deletion Anomaly</b>
    <p>
        If we delete all students enrolled in a course, we may also lose
        important course and instructor information.
    </p>
</li>


</ol>

<h4>Converting the Table into 3NF</h4>

<p>
To remove the transitive dependency, we separate the information into different
tables. Each non-key attribute should depend directly on the key of its own table.
</p>

<h4>1. Student Table</h4>

<table class="notes-table">
    <tr>
        <th>StudentID</th>
        <th>StudentName</th>
    </tr>


<tr>
    <td>101</td>
    <td>A</td>
</tr>

<tr>
    <td>102</td>
    <td>B</td>
</tr>


</table>

<p>
Here:
</p>

<div class="notes_text_pre">

StudentID → StudentName

</div>

<p>
<b>StudentName</b> depends directly on <b>StudentID</b>.
</p>

<h4>2. Course Table</h4>

<table class="notes-table">
    <tr>
        <th>CourseID</th>
        <th>CourseName</th>
        <th>Instructor</th>
    </tr>


<tr>
    <td>C001</td>
    <td>Math</td>
    <td>Mr. Smith</td>
</tr>

<tr>
    <td>C002</td>
    <td>Science</td>
    <td>Ms. Davis</td>
</tr>


</table>

<p>
Here:
</p>

<div class="notes_text_pre">

CourseID → CourseName
CourseID → Instructor

</div>

<p>
Both <b>CourseName</b> and <b>Instructor</b> depend directly on
<b>CourseID</b>. Therefore, the transitive dependency has been removed.
</p>

<h4>3. Student-Course Table</h4>

<table class="notes-table">
    <tr>
        <th>StudentID</th>
        <th>CourseID</th>
    </tr>


<tr>
    <td>101</td>
    <td>C001</td>
</tr>

<tr>
    <td>102</td>
    <td>C002</td>
</tr>

<tr>
    <td>101</td>
    <td>C002</td>
</tr>


</table>

<p>
This table represents which student is enrolled in which course.
The combination of <b>StudentID</b> and <b>CourseID</b> can be used as a
<b>composite primary key</b>.
</p>

<h4>Final Structure After 3NF</h4>

<ul>
    <li>
        <b>Student</b> → StudentID, StudentName
    </li>


<li>
    <b>Course</b> → CourseID, CourseName, Instructor
</li>

<li>
    <b>StudentCourse</b> → StudentID, CourseID
</li>


</ul>

<h4>Simple Rule to Remember 3NF</h4>

<div class="notes_text_pre">
    3NF = 2NF + No Transitive Dependency
</div>

<hr>


<h3>Advantages of 3NF</h3>

<ul>
<li>Removes Transitive Dependency.</li>
<li>Reduces data redundancy.</li>
<li>Improves data consistency.</li>
<li>Prevents update, insertion, and deletion anomalies.</li>
<li>Makes the database easier to maintain.</li>
</ul>

<hr>

<h3>Key Points</h3>

<ul>
<li>A table must already be in <b>2NF</b>.</li>
<li>3NF removes <b>Transitive Dependency</b>.</li>
<li>Non-key attributes should depend only on the primary key.</li>
<li>Non-key attributes should not depend on other non-key attributes.</li>
<li>3NF improves database integrity and reduces duplicate data.</li>
</ul>

`;

const boyceCoddNormalForm = `
<h3>Boyce-Codd Normal Form (BCNF)</h3>

<p>
<b>Boyce-Codd Normal Form (BCNF)</b> is a stronger version of
<b>Third Normal Form (3NF)</b>.
</p>

<p>
BCNF is used to further reduce <b>redundancy</b> and eliminate certain types of
<b>anomalies</b> that may still exist in a table even after applying 3NF.
</p>

<h4>What is BCNF?</h4>

<p>
A relation is in <b>BCNF</b> if, for every non-trivial functional dependency
<b>X → Y</b>, <b>X must be a super key</b>.
</p>

<div class="notes_text_pre">

<b>BCNF Rule:</b>

For every functional dependency X → Y,

X must be a Super Key.

</div>

<p>
In simple words:
</p>

<div class="notes_text_pre">

<b>"Every determinant must be a candidate key."</b>

</div>

<h4>What is a Determinant?</h4>

<p>
A <b>determinant</b> is an attribute or a set of attributes that determines
another attribute.
</p>

<p>
For example:
</p>

<div class="notes_text_pre">

StudentID → StudentName

</div>

<p>
Here, <b>StudentID</b> is the determinant because it determines
<b>StudentName</b>.
</p>

<h4>BCNF Condition</h4>

<p>
For every functional dependency:
</p>

<div class="notes_text_pre">

X → Y

</div>

<p>
the left-hand side <b>X</b> must be a <b>super key</b>.
</p>

<ul>
    <li>
        If <b>X is a super key</b> → BCNF condition is satisfied ✅
    </li>

    <li>
        If <b>X is not a super key</b> → BCNF violation ❌
    </li>
</ul>

<h4>Example of BCNF Violation</h4>

<table class="notes-table">

    <tr>
        <th>StudentID</th>
        <th>Course</th>
        <th>Instructor</th>
    </tr>

    <tr>
        <td>101</td>
        <td>DBMS</td>
        <td>Mr. Sharma</td>
    </tr>

    <tr>
        <td>102</td>
        <td>DBMS</td>
        <td>Mr. Sharma</td>
    </tr>

    <tr>
        <td>103</td>
        <td>Java</td>
        <td>Mr. Verma</td>
    </tr>

    <tr>
        <td>104</td>
        <td>Java</td>
        <td>Mr. Verma</td>
    </tr>

</table>

<h4>Functional Dependencies</h4>

<p>
Suppose we have the following functional dependencies:
</p>

<div class="notes_text_pre">

StudentID, Course → Instructor

Instructor → Course

</div>

<p>
Here:
</p>

<ul>
    <li>
        <b>StudentID + Course → Instructor</b>
        <br>
        StudentID and Course together determine the Instructor.
    </li>

    <li>
        <b>Instructor → Course</b>
        <br>
        An instructor teaches a particular course.
    </li>
</ul>

<h4>Finding the BCNF Violation</h4>

<p>
Consider the dependency:
</p>

<div class="notes_text_pre">

Instructor → Course

</div>

<p>
Here, <b>Instructor</b> determines <b>Course</b>.
Therefore, <b>Instructor</b> is a determinant.
</p>

<p>
But <b>Instructor</b> is not a super key because it cannot uniquely identify
every row of the table.
</p>

<p>
Therefore:
</p>

<div class="notes_text_pre">

Instructor → Course

Instructor is NOT a Super Key

Therefore, BCNF is violated ❌

</div>

<h4>Converting the Table into BCNF</h4>

<p>
To remove the BCNF violation, we decompose the original table into smaller
relations.
</p>

<h4>1. Instructor-Course Table</h4>

<table class="notes-table">

    <tr>
        <th>Instructor</th>
        <th>Course</th>
    </tr>

    <tr>
        <td>Mr. Sharma</td>
        <td>DBMS</td>
    </tr>

    <tr>
        <td>Mr. Verma</td>
        <td>Java</td>
    </tr>

</table>

<p>
Here:
</p>

<div class="notes_text_pre">

Instructor → Course

</div>

<p>
Now <b>Instructor</b> is the key of this table.
Therefore, the BCNF condition is satisfied.
</p>

<h4>2. Student-Instructor Table</h4>

<table class="notes-table">

    <tr>
        <th>StudentID</th>
        <th>Instructor</th>
    </tr>

    <tr>
        <td>101</td>
        <td>Mr. Sharma</td>
    </tr>

    <tr>
        <td>102</td>
        <td>Mr. Sharma</td>
    </tr>

    <tr>
        <td>103</td>
        <td>Mr. Verma</td>
    </tr>

    <tr>
        <td>104</td>
        <td>Mr. Verma</td>
    </tr>

</table>

<p>
The original relation has now been decomposed into two relations, removing
the BCNF violation.
</p>

<h4>BCNF vs 3NF</h4>

<table class="notes-table">

    <tr>
        <th>3NF</th>
        <th>BCNF</th>
    </tr>

    <tr>
        <td>Allows some dependencies where the determinant is not a super key.</td>
        <td>Every determinant must be a super key.</td>
    </tr>

    <tr>
        <td>Less strict.</td>
        <td>More strict.</td>
    </tr>

    <tr>
        <td>Removes transitive dependencies.</td>
        <td>Removes additional dependency-related redundancy.</td>
    </tr>

    <tr>
        <td>Every non-key attribute should depend on the key.</td>
        <td>Every determinant must be a candidate key/super key.</td>
    </tr>

</table>

<h4>Simple Rule to Remember BCNF</h4>

<div class="notes_text_pre">

<b>BCNF = Every Determinant Must Be a Super Key</b>

</div>

<p>
The easiest way to remember BCNF is:
</p>

<div class="notes_text_pre">

<b>"If X determines Y, then X must be a super key."</b>

</div>

<h4>Normalization Sequence</h4>

<div class="notes_text_pre">

1NF
   ↓
2NF
   ↓
3NF
   ↓
BCNF

</div>

<p>
BCNF is generally considered a <b>stronger form of 3NF</b>. Every BCNF
relation is in 3NF, but a relation in 3NF may not always be in BCNF.
</p>
`;

const relationalAlgebraContent = `
<h3>Relational Algebra</h3>

<p>
Before understanding <b>Relational Algebra</b>, let us first understand two simple words:
</p>

<ul>
    <li><b>Relation</b> → A table in a relational database.</li>
    <li><b>Algebra</b> → A system of mathematical operations used to perform calculations.</li>
</ul>

<p>
So, <b>Relational Algebra</b> means a set of mathematical operations that can be performed
on database tables to retrieve and manipulate data.
</p>

<h4>What is a Relation?</h4>

<p>
In DBMS, a <b>Relation</b> is basically a table that contains data in the form of
<b>rows and columns</b>.
</p>

<table class="notes-table">
    <tr>
        <th>StudentID</th>
        <th>StudentName</th>
        <th>Course</th>
        <th>Marks</th>
    </tr>
    <tr>
        <td>101</td>
        <td>Amit</td>
        <td>BCA</td>
        <td>85</td>
    </tr>
    <tr>
        <td>102</td>
        <td>Ravi</td>
        <td>BCA</td>
        <td>78</td>
    </tr>
    <tr>
        <td>103</td>
        <td>Neha</td>
        <td>BCA</td>
        <td>92</td>
    </tr>
</table>

<p>
In the above table:
</p>

<ul>
    <li><b>Table</b> → Relation</li>
    <li><b>Row</b> → Tuple / Record</li>
    <li><b>Column</b> → Attribute / Field</li>
</ul>

<h4>What is Algebra?</h4>

<p>
In mathematics, algebra provides different operators such as
<b>+, -, ×, ÷</b> to perform calculations.
</p>

<p>
Similarly, <b>Relational Algebra</b> provides different operators to perform operations
on database relations (tables).
</p>

<p>
For example, we can use relational algebra to:
</p>

<ul>
    <li>Select specific rows from a table.</li>
    <li>Select specific columns from a table.</li>
    <li>Combine two tables.</li>
    <li>Find common records.</li>
    <li>Find records present in one table but not another.</li>
    <li>Join related tables.</li>
</ul>

<h3>What is Relational Algebra in DBMS?</h3>

<p>
<b>Relational Algebra</b> is a formal query language used in DBMS to
<b>retrieve and manipulate data stored in relational databases</b>.
</p>

<p>
It consists of a collection of mathematical operations that take one or more
relations as input and produce a new relation as output.
</p>

<p>
In simple words:
</p>

<div class="notes_text_pre">
Relational Algebra = Operations on Tables to Get Required Data
</div>

<p>
For example, suppose we have a Student table containing 100 students.
If we want to find only students whose marks are greater than 80,
Relational Algebra provides an operation to select those records.
</p>

<h4>History of Relational Algebra</h4>

<p>
Relational Algebra is based on the <b>Relational Model</b> introduced by
<b>Edgar F. Codd</b>.
</p>

<p>
Edgar F. Codd was a computer scientist who introduced the relational model
of databases in <b>1970</b>. His work became the foundation of modern
relational database systems.
</p>

<p>
Because of his major contribution to the relational database model,
Edgar F. Codd is often called the <b>Father of Relational Databases</b>.
</p>

<h4>Why is Relational Algebra Important?</h4>

<p>
Relational Algebra provides a mathematical and theoretical foundation for
relational databases. It explains how different operations can be performed
on relations to obtain the required data.
</p>

<p>
It is also useful for understanding how database query languages such as
<b>SQL</b> work internally.
</p>

<h4>Relational Algebra is a Procedural Query Language</h4>

<p>
Relational Algebra is called a <b>Procedural Query Language</b> because it
describes <b>how to obtain the required result</b>.
</p>

<p>
In other words, it specifies the sequence of operations that should be
performed on the data.
</p>

<div class="notes_text_pre">
Procedural Query Language
        ↓
Specifies HOW to obtain the required result
</div>

<p>
For example, if we want to find the names of students who scored more than
80 marks, we can think about the process as:
</p>

<div class="notes_text_pre">
Step 1 → Find students whose marks are greater than 80
Step 2 → Select only the StudentName column
Step 3 → Display the result
</div>

<p>
This step-by-step approach is the main reason Relational Algebra is called
procedural.
</p>

<h4>Basic Idea of Relational Algebra</h4>

<p>
Every relational algebra operation generally takes one or more relations as
input and produces another relation as output.
</p>

<div class="notes_text_pre">
Input Relation
      ↓
Relational Algebra Operation
      ↓
Output Relation
</div>

<p>
This is important because the result of one operation can be used as the
input for another operation.
</p>

<h4>Example</h4>

<p>
Suppose we have the following Student relation:
</p>

<table class="notes-table">
    <tr>
        <th>StudentID</th>
        <th>Name</th>
        <th>Marks</th>
    </tr>
    <tr>
        <td>101</td>
        <td>Amit</td>
        <td>85</td>
    </tr>
    <tr>
        <td>102</td>
        <td>Ravi</td>
        <td>65</td>
    </tr>
    <tr>
        <td>103</td>
        <td>Neha</td>
        <td>92</td>
    </tr>
</table>

<p>
Suppose we want to find students whose marks are greater than 80.
The <b>Selection</b> operation can be used.
</p>

<div class="notes_text_pre">
σ Marks > 80 (Student)
</div>

<p>
Here:
</p>

<ul>
    <li><b>σ</b> → Selection operator</li>
    <li><b>Marks &gt; 80</b> → Condition</li>
    <li><b>Student</b> → Relation/Table</li>
</ul>

<p>
The result will contain only Amit and Neha because their marks are greater
than 80.
</p>

<h4>Main Operations of Relational Algebra</h4>

<p>
The commonly used relational algebra operations are:
</p>

<table class="notes-table">
    <tr>
        <th>Operation</th>
        <th>Symbol</th>
        <th>Purpose</th>
    </tr>
    <tr>
        <td>Selection</td>
        <td>σ</td>
        <td>Selects specific rows based on a condition.</td>
    </tr>
    <tr>
        <td>Projection</td>
        <td>π</td>
        <td>Selects specific columns.</td>
    </tr>
    <tr>
        <td>Union</td>
        <td>∪</td>
        <td>Combines tuples from two compatible relations.</td>
    </tr>
    <tr>
        <td>Set Difference</td>
        <td>−</td>
        <td>Finds tuples present in one relation but not another.</td>
    </tr>
    <tr>
        <td>Cartesian Product</td>
        <td>×</td>
        <td>Combines every tuple of one relation with every tuple of another.</td>
    </tr>
    <tr>
        <td>Intersection</td>
        <td>∩</td>
        <td>Finds common tuples between two relations.</td>
    </tr>
    <tr>
        <td>Join</td>
        <td>⋈</td>
        <td>Combines related rows from two relations.</td>
    </tr>
    <tr>
        <td>Rename</td>
        <td>ρ</td>
        <td>Renames a relation or its attributes.</td>
    </tr>
</table>

<h3>Types of Relational Operations in DBMS</h3>

<p>
In <b>Relational Algebra</b>, different operations are used to retrieve,
filter, combine, and manipulate data stored in relational tables.
</p>

<p>
There are mainly <b>two types of relational operations</b>:
</p>

<ul>
    <li><b>Basic Operations</b></li>
    <li><b>Derived Operations</b></li>
</ul>

<p>
When we apply these operations to relations (tables), they produce a
<b>new relation (table) as output</b>.
</p>

<div class="notes_text_pre">
Input Relation
      ↓
Relational Operation
      ↓
New Relation (Output)
</div>

<h4>Types of Relational Operations</h4>
<img src="bca_images/relational_oprators.png" alt="data type" class="notes_img" >

<table class="notes-table">
    <tr>
        <th>Type</th>
        <th>Operations</th>
    </tr>
    <tr>
        <td><b>Basic Operations</b></td>
        <td>Selection, Projection, Union, Set Difference, Cartesian Product, Rename</td>
    </tr>
    <tr>
        <td><b>Derived Operations</b></td>
        <td>Intersection, Division, Join</td>
    </tr>
</table>

<h3>1. Basic Relational Operations</h3>

<p>
<b>Basic operations</b> are the fundamental operations of relational
algebra. Other complex operations can be defined using these basic
operations.
</p>

<p>
The commonly studied basic operations are:
</p>

<ul>
    <li>Selection (σ)</li>
    <li>Projection (π)</li>
    <li>Union (∪)</li>
    <li>Set Difference (−)</li>
    <li>Cartesian Product (×)</li>
    <li>Rename (ρ)</li>
</ul>

<h3>2. Derived Relational Operations</h3>

<p>
<b>Derived operations</b> are operations that can be obtained or defined
using the basic relational algebra operations.
</p>

<p>
Common derived operations include:
</p>

<ul>
    <li>Intersection (∩)</li>
    <li>Division (÷)</li>
    <li>Join (⋈)</li>
</ul>



<h4>Important Properties of Relational Algebra</h4>

<ul>
    <li>It works with relations (tables).</li>
    <li>It is a formal mathematical query language.</li>
    <li>It is procedural in nature.</li>
    <li>It specifies how a query should be performed.</li>
    <li>Operations take relations as input.</li>
    <li>The result of an operation is also a relation.</li>
    <li>Multiple operations can be combined to form complex queries.</li>
    <li>It provides the theoretical foundation for relational query processing.</li>
</ul>

<h4>Relational Algebra vs SQL</h4>

<table class="notes-table">
    <tr>
        <th>Relational Algebra</th>
        <th>SQL</th>
    </tr>
    <tr>
        <td>Formal mathematical query language.</td>
        <td>Practical database query language.</td>
    </tr>
    <tr>
        <td>Procedural in nature.</td>
        <td>Mainly declarative in nature.</td>
    </tr>
    <tr>
        <td>Uses operators such as σ, π, ∪, −, × and ⋈.</td>
        <td>Uses SELECT, FROM, WHERE, JOIN, etc.</td>
    </tr>
    <tr>
        <td>Mostly used for theoretical understanding and query processing.</td>
        <td>Widely used to work with real databases.</td>
    </tr>
</table>

<h4>Classroom Example</h4>

<p>
Teacher: Suppose we have a Student table containing StudentID, Name,
Course and Marks. I ask you to find only students who scored more than 80.
What should we do?
</p>

<p>
Student: We need to filter the rows where Marks is greater than 80.
</p>

<p>
Teacher: Correct! Which relational algebra operation is used?
</p>

<p>
Student: <b>Selection (σ)</b>.
</p>

<p>
Teacher: Now suppose I only want the names of those students. What should
we do?
</p>

<p>
Student: We need to select the Name column using <b>Projection (π)</b>.
</p>

<div class="notes_text_pre">
Step 1:
σ Marks > 80 (Student)

Step 2:
π Name (Result)

Therefore:
First select required rows,
then select the required column.
</div>

<h4>Simple Real-Life Example</h4>

<p>
Think about an online shopping database containing thousands of products.
Suppose we want:
</p>

<ul>
    <li>Products whose price is less than ₹1,000.</li>
    <li>Only the product names.</li>
</ul>

<p>
First, we use <b>Selection</b> to find products with price less than
₹1,000. Then we use <b>Projection</b> to display only product names.
</p>

<div class="notes_text_pre">
Selection → Filter required rows

Projection → Display required columns
</div>

<h4>Exam Point of View</h4>

<p>
<b>Definition:</b> Relational Algebra is a formal procedural query language
that provides a set of mathematical operations for retrieving and
manipulating data stored in relational databases.
</p>

<p>
<b>Key Point:</b> Relational Algebra operates on relations and produces
relations as results.
</p>

<p>
<b>Remember:</b>
</p>

<div class="notes_text_pre">
Relation      → Table

Tuple         → Row

Attribute     → Column

Selection     → Rows

Projection    → Columns

Union         → Combine compatible relations

Difference    → Records in one relation but not another

Cartesian Product → Every combination of tuples

Join          → Combine related data

Intersection  → Common records

Rename        → Change relation/attribute name

Relational Algebra → Procedural Query Language
</div>

<h4>One-Line Summary</h4>

<p>
<b>
Relational Algebra is a mathematical and procedural query language that
uses different operations to retrieve and manipulate data from relational
tables.
</b>
</p>
`;

const selectionOperationContent = `
<h3>Selection Operation (σ) in Relational Algebra</h3>

<p>
The <b>Selection Operation</b> is used to retrieve only those
<b>rows (tuples)</b> from a table that satisfy a given condition.
</p>

<p>
The Selection operation is represented by the Greek letter
<b>Sigma (σ)</b>.
</p>

<h4>Simple Definition</h4>

<p>
<b>
Selection is a unary relational algebra operation that selects
required rows from a relation based on a specified condition.
</b>
</p>

<div class="notes_text_pre">
Selection → Selects Rows
Symbol    → σ (Sigma)
Input     → One Relation
Output    → A New Relation
</div>

<h4>Why is Selection Called a Unary Operation?</h4>

<p>
Selection is called a <b>unary operator</b> because it requires
only <b>one relation (table)</b> as input.
</p>

<div class="notes_text_pre">
Student Table
     ↓
Selection Operation
     ↓
Result Table
</div>

<p>
Here, only one table is involved, so Selection is a unary operation.
</p>

<h4>Notation of Selection</h4>

<p>
The general notation of the Selection operation is:
</p>

<div class="notes_text_pre">
σₚ (R)
</div>

<p>
Where:
</p>

<ul>
    <li><b>σ (Sigma)</b> → Represents the Selection operator.</li>
    <li><b>p</b> → Represents the selection condition or logical formula.</li>
    <li><b>R</b> → Represents the relation (table).</li>
</ul>

<h4>Meaning of Each Part</h4>

<div class="notes_text_pre">
σₚ (R)

σ → Selection operator
p → Condition / Predicate
R → Relation / Table
</div>

<p>
The condition <b>p</b> is also called a <b>predicate</b>.
It decides which rows should be selected.
</p>

<h4>What is a Predicate?</h4>

<p>
A <b>predicate</b> is a condition that is evaluated for each row.
It normally produces either <b>TRUE</b> or <b>FALSE</b>.
</p>

<p>
For example:
</p>

<div class="notes_text_pre">
Age > 20
Marks >= 50
Salary < 50000
Department = 'IT'
</div>

<p>
If the condition is <b>TRUE</b>, the row is included in the result.
If the condition is <b>FALSE</b>, the row is not included.
</p>

<h4>Example Table: STUDENT</h4>

<table class="notes-table">
    <tr>
        <th>Roll</th>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>001</td>
        <td>A</td>
        <td>20</td>
    </tr>
    <tr>
        <td>002</td>
        <td>B</td>
        <td>18</td>
    </tr>
    <tr>
        <td>003</td>
        <td>C</td>
        <td>20</td>
    </tr>
    <tr>
        <td>004</td>
        <td>D</td>
        <td>21</td>
    </tr>
</table>

<h4>Example 1: Select Students Whose Age is 20</h4>

<p>
Suppose we want to retrieve all students whose <b>Age is 20</b>.
</p>

<p>
The relational algebra expression will be:
</p>

<div class="code-box">

<div class="code-title">
<span>Selection Notation</span>
</div>

<pre><code><span class="operator">σ</span><sub>p</sub> <span class="relation">(R)</span>

<span class="operator">σ</span>      → Selection Operator
<span class="operator">p</span>      → Condition / Predicate
<span class="relation">R</span>      → Relation / Table</code></pre>

</div>

<h3>
Let's understand this notation:
</h3>

<div class="notes_text_pre">
σ       → Selection operator
Age=20  → Condition
STUDENT → Relation
</div>

<p>
Now check every row:
</p>

<table class="notes-table">
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Age = 20?</th>
    </tr>
    <tr>
        <td>A</td>
        <td>20</td>
        <td>TRUE → Select</td>
    </tr>
    <tr>
        <td>B</td>
        <td>18</td>
        <td>FALSE → Reject</td>
    </tr>
    <tr>
        <td>C</td>
        <td>20</td>
        <td>TRUE → Select</td>
    </tr>
    <tr>
        <td>D</td>
        <td>21</td>
        <td>FALSE → Reject</td>
    </tr>
</table>

<p>
Therefore, the output relation contains students <b>A and C</b>.
</p>

<table class="notes-table">
    <tr>
        <th>Roll</th>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>001</td>
        <td>A</td>
        <td>20</td>
    </tr>
    <tr>
        <td>003</td>
        <td>C</td>
        <td>20</td>
    </tr>
</table>

<h4>Important Point</h4>

<div class="notes_text_pre">
Selection changes the number of ROWS,
but normally keeps all the COLUMNS of the selected relation.
</div>

<h4>Example 2: Age Greater Than 20</h4>

<p>
Suppose we want students whose age is greater than 20.
</p>

<div class="notes_text_pre">
σ Age > 20 (STUDENT)
</div>

<p>
Only student D satisfies the condition because D has age 21.
</p>

<h4>Example 3: Age Less Than 20</h4>

<div class="notes_text_pre">
σ Age < 20 (STUDENT)
</div>

<p>
The result will contain student B because B has age 18.
</p>

<h4>Example 4: Multiple Conditions</h4>

<p>
We can also use logical operators such as <b>AND</b>, <b>OR</b>, and
<b>NOT</b> in the selection condition.
</p>

<p>
For example, to select students whose age is greater than 18
<b>AND</b> less than 21:
</p>

<div class="notes_text_pre">
σ Age > 18 AND Age < 21 (STUDENT)
</div>

<p>
This condition selects students whose age is 19 or 20.
</p>

<h4>Selection with AND</h4>

<div class="notes_text_pre">
σ Age >= 18 AND Age <= 20 (STUDENT)
</div>

<p>
Both conditions must be TRUE for a row to be selected.
</p>

<h4>Selection with OR</h4>

<div class="notes_text_pre">
σ Age = 18 OR Age = 21 (STUDENT)
</div>

<p>
A row is selected if at least one condition is TRUE.
</p>

<h4>Selection with NOT</h4>

<div class="notes_text_pre">
σ NOT(Age = 20) (STUDENT)
</div>

<p>
This selects students whose age is <b>not 20</b>.
</p>

<h4>Selection Operators</h4>

<p>
The predicate can use comparison operators such as:
</p>

<table class="notes-table">
    <tr>
        <th>Operator</th>
        <th>Meaning</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>=</td>
        <td>Equal to</td>
        <td>Age = 20</td>
    </tr>
    <tr>
        <td>≠</td>
        <td>Not equal to</td>
        <td>Age ≠ 20</td>
    </tr>
    <tr>
        <td>&gt;</td>
        <td>Greater than</td>
        <td>Age &gt; 20</td>
    </tr>
    <tr>
        <td>&lt;</td>
        <td>Less than</td>
        <td>Age &lt; 20</td>
    </tr>
    <tr>
        <td>≥</td>
        <td>Greater than or equal to</td>
        <td>Age ≥ 20</td>
    </tr>
    <tr>
        <td>≤</td>
        <td>Less than or equal to</td>
        <td>Age ≤ 20</td>
    </tr>
</table>

<h4>Logical Operators in Selection</h4>

<table class="notes-table">
    <tr>
        <th>Operator</th>
        <th>Meaning</th>
    </tr>
    <tr>
        <td>AND (∧)</td>
        <td>Both conditions must be TRUE.</td>
    </tr>
    <tr>
        <td>OR (∨)</td>
        <td>At least one condition must be TRUE.</td>
    </tr>
    <tr>
        <td>NOT (¬)</td>
        <td>Reverses the condition.</td>
    </tr>
</table>

<h4>General Form</h4>

<div class="notes_text_pre">
σ condition (Relation)
</div>

<p>
For example:
</p>

<div class="notes_text_pre">
σ Marks > 50 (STUDENT)

σ Age = 20 (STUDENT)

σ Age > 18 AND Age < 21 (STUDENT)

σ Department = 'IT' (EMPLOYEE)
</div>

<h4>Another Example: EMPLOYEE Table</h4>

<table class="notes-table">
    <tr>
        <th>EMP_NO</th>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>E-1</td>
        <td>A</td>
        <td>20</td>
    </tr>
    <tr>
        <td>E-2</td>
        <td>B</td>
        <td>23</td>
    </tr>
    <tr>
        <td>E-3</td>
        <td>C</td>
        <td>25</td>
    </tr>
    <tr>
        <td>E-4</td>
        <td>D</td>
        <td>20</td>
    </tr>
</table>

<p>
If we want employees whose age is 20:
</p>

<div class="notes_text_pre">
σ Age = 20 (EMPLOYEE)
</div>

<p>
The output will contain E-1 and E-4.
</p>

<h4>Selection Operation: Step-by-Step</h4>

<div class="notes_text_pre">
Step 1 → Take the relation/table.

Step 2 → Apply the Selection operator σ.

Step 3 → Specify the condition/predicate.

Step 4 → Check the condition for every row.

Step 5 → Keep rows where the condition is TRUE.

Step 6 → Produce a new relation as output.
</div>

<h4>Selection vs Projection</h4>

<table class="notes-table">
    <tr>
        <th>Selection</th>
        <th>Projection</th>
    </tr>
    <tr>
        <td>Works on rows.</td>
        <td>Works on columns.</td>
    </tr>
    <tr>
        <td>Uses a condition.</td>
        <td>Specifies required attributes.</td>
    </tr>
    <tr>
        <td>Symbol: σ</td>
        <td>Symbol: π</td>
    </tr>
</table>

<div class="notes_text_pre">
Selection  → Rows
Projection → Columns
</div>

<h4>Classroom Explanation</h4>

<p>
<b>Teacher:</b> Suppose I have a Student table containing 100 students.
I want only students whose age is 20. What should I do?
</p>

<p>
<b>Student:</b> We will apply a condition Age = 20.
</p>

<p>
<b>Teacher:</b> Which relational algebra operation will we use?
</p>

<p>
<b>Student:</b> Selection.
</p>

<p>
<b>Teacher:</b> Which symbol represents Selection?
</p>

<p>
<b>Student:</b> Sigma (σ).
</p>

<p>
<b>Teacher:</b> Is Selection a unary or binary operation?
</p>

<p>
<b>Student:</b> Unary operation because it requires only one relation.
</p>

<h4>Easy Memory Trick</h4>

<div class="notes_text_pre">
σ = Selection = Select Rows

π = Projection = Select Columns

Remember:

Selection → Row Filter
Projection → Column Filter
</div>

<h4>Exam Definition</h4>

<p>
<b>
Selection is a unary relational algebra operation represented by the
Greek letter Sigma (σ). It is used to retrieve tuples (rows) from a
relation that satisfy a specified selection condition or predicate.
</b>
</p>

<h4>Key Points for Exam</h4>

<ul>
    <li>Selection is represented by <b>σ (Sigma)</b>.</li>
    <li>Selection is a <b>unary operation</b>.</li>
    <li>It operates on <b>one relation</b>.</li>
    <li>It selects <b>rows/tuples</b>.</li>
    <li>It uses a <b>condition/predicate</b>.</li>
    <li>The result is also a <b>relation</b>.</li>
    <li>Selection is also called a <b>row filtering operation</b>.</li>
</ul>
<h4>Hand writen note</h4>
<img src="bca_images/select_operator.png"  class="notes_img" >


`;

const projectionOperationContent = `
<h3>Projection Operation (π)</h3>

<p>
The <b>Projection Operation</b> is used to retrieve specific
<b>attributes (columns)</b> from a relation (table).
</p>

<p>
The Projection operation is represented by the Greek letter
<b>Pi (π)</b>.
</p>

<p>
<b>
Projection is a unary relational algebra operation that selects
required columns (attributes) from a relation.
</b>
</p>

<div class="code-box">

<div class="code-title">
<span>Projection Operation</span>
</div>

<pre><code><span class="operator">π</span> <span class="attribute">Attribute_List</span> <span class="relation">(Relation)</span>

<span class="operator">π</span>      → Projection Operator
<span class="attribute">A</span>      → Attribute / Column
<span class="relation">R</span>      → Relation / Table</code></pre>

</div>

<h4>Why is Projection Called a Unary Operation?</h4>

<p>
Projection is called a <b>unary operator</b> because it requires only
<b>one relation (table)</b> as input.
</p>

<div class="code-box">

<div class="code-title">
<span>Unary Operation</span>
</div>

<pre><code><span class="relation">STUDENT</span>
    ↓
<span class="operator">π</span> <span class="attribute">Name</span>
    ↓
<span class="relation">Result</span></code></pre>

</div>

<h4>Notation of Projection</h4>

<p>
The general notation of Projection is:
</p>

<div class="code-box">

<div class="code-title">
<span>Projection Notation</span>
</div>

<pre><code><span class="operator">π</span> <span class="attribute">A</span> <span class="relation">(R)</span>

<span class="operator">π</span> → Projection Operator
<span class="attribute">A</span> → Attribute List
<span class="relation">R</span> → Relation / Table</code></pre>

</div>

<h4>Example: STUDENT Table</h4>

<table class="notes-table">
    <tr>
        <th>Roll</th>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>001</td>
        <td>A</td>
        <td>20</td>
    </tr>
    <tr>
        <td>002</td>
        <td>B</td>
        <td>18</td>
    </tr>
    <tr>
        <td>003</td>
        <td>C</td>
        <td>20</td>
    </tr>
    <tr>
        <td>004</td>
        <td>C</td>
        <td>21</td>
    </tr>
</table>

<h4>Example 1: Find Names of All Students</h4>

<p>
Suppose we want only the <b>Name</b> column from the STUDENT relation.
</p>

<div class="code-box">

<div class="code-title">
<span>Projection Example</span>
</div>

<pre><code><span class="operator">π</span> <span class="attribute">Name</span> <span class="relation">(STUDENT)</span></code></pre>

</div>

<p>
Here:
</p>

<div class="code-box">

<div class="code-title">
<span>Understanding the Expression</span>
</div>

<pre><code><span class="operator">π</span>       → Projection Operator
<span class="attribute">Name</span>    → Required Attribute
<span class="relation">STUDENT</span> → Relation / Table</code></pre>

</div>

<p>
The output will contain only the <b>Name</b> column.
</p>

<table class="notes-table">
    <tr>
        <th>Name</th>
    </tr>
    <tr>
        <td>A</td>
    </tr>
    <tr>
        <td>B</td>
    </tr>
    <tr>
        <td>C</td>
    </tr>
</table>

<p>
Notice that the name <b>C</b> appears only once even though it appears
twice in the original table.
</p>

<h4>Important Property: Duplicate Elimination</h4>

<p>
One important property of Projection is that it <b>eliminates duplicate
tuples</b> from the result.
</p>

<p>
Original Name column:
</p>

<div class="code-box">

<div class="code-title">
<span>Original Values</span>
</div>

<pre><code>A
B
C
C</code></pre>

</div>

<p>
After Projection:
</p>

<div class="code-box">

<div class="code-title">
<span>Projection Result</span>
</div>

<pre><code>A
B
C</code></pre>

</div>

<div class="code-box">

<div class="code-title">
<span>Remember</span>
</div>

<pre><code><span class="operator">π</span> → Projection → Select Columns
                     ↓
              Removes Duplicates</code></pre>

</div>

<h4>Example 2: Select Multiple Columns</h4>

<p>
We can select more than one attribute using Projection.
</p>

<div class="code-box">

<div class="code-title">
<span>Multiple Attributes</span>
</div>

<pre><code><span class="operator">π</span> <span class="attribute">Roll, Name</span> <span class="relation">(STUDENT)</span></code></pre>

</div>

<p>
This expression retrieves only the <b>Roll</b> and <b>Name</b> columns.
</p>

<table class="notes-table">
    <tr>
        <th>Roll</th>
        <th>Name</th>
    </tr>
    <tr>
        <td>001</td>
        <td>A</td>
    </tr>
    <tr>
        <td>002</td>
        <td>B</td>
    </tr>
    <tr>
        <td>003</td>
        <td>C</td>
    </tr>
    <tr>
        <td>004</td>
        <td>C</td>
    </tr>
</table>

<p>
If the selected columns together form duplicate rows, duplicate tuples
are removed from the final result.
</p>

<h4>Projection vs Selection</h4>

<table class="notes-table">
    <tr>
        <th>Selection</th>
        <th>Projection</th>
    </tr>
    <tr>
        <td>Selects rows.</td>
        <td>Selects columns.</td>
    </tr>
    <tr>
        <td>Symbol: σ</td>
        <td>Symbol: π</td>
    </tr>
    <tr>
        <td>Uses a condition.</td>
        <td>Uses an attribute list.</td>
    </tr>
    <tr>
        <td>Filters tuples.</td>
        <td>Filters attributes.</td>
    </tr>
</table>

<div class="code-box">

<div class="code-title">
<span>Easy Memory Trick</span>
</div>

<pre><code><span class="operator">σ</span> → Selection  → Rows
<span class="operator">π</span> → Projection → Columns</code></pre>

</div>

<h4>Using Selection and Projection Together</h4>

<p>
Selection and Projection can be combined to solve more complex queries.
</p>

<p>
Suppose we want the <b>Roll numbers of students whose Name is C</b>.
</p>

<p>
First, we select the rows where Name = C:
</p>

<div class="code-box">

<div class="code-title">
<span>Step 1: Selection</span>
</div>

<pre><code><span class="operator">σ</span> <span class="attribute">Name = 'C'</span> <span class="relation">(STUDENT)</span></code></pre>

</div>

<p>
Then, we project only the Roll attribute:
</p>

<div class="code-box">

<div class="code-title">
<span>Step 2: Projection</span>
</div>

<pre><code><span class="operator">π</span> <span class="attribute">Roll</span>
(
    <span class="operator">σ</span> <span class="attribute">Name = 'C'</span>
    <span class="relation">(STUDENT)</span>
)</code></pre>

</div>

<p>
The final result will be:
</p>

<table class="notes-table">
    <tr>
        <th>Roll</th>
    </tr>
    <tr>
        <td>003</td>
    </tr>
    <tr>
        <td>004</td>
    </tr>
</table>

<h4>Step-by-Step Working</h4>

<div class="code-box">

<div class="code-title">
<span>Query Processing</span>
</div>

<pre><code><span class="relation">STUDENT</span>
     ↓
<span class="operator">σ</span> <span class="attribute">Name = 'C'</span>
     ↓
Select rows having Name = C
     ↓
<span class="operator">π</span> <span class="attribute">Roll</span>
     ↓
Select only Roll column
     ↓
<span class="relation">Final Result</span></code></pre>

</div>

<h4>Classroom Explanation</h4>

<p>
<b>Teacher:</b> Suppose I have a Student table and I only want the
names of all students. Which operation should I use?
</p>

<p>
<b>Student:</b> Projection.
</p>

<p>
<b>Teacher:</b> Which symbol represents Projection?
</p>

<p>
<b>Student:</b> Pi (π).
</p>

<p>
<b>Teacher:</b> Does Projection select rows or columns?
</p>

<p>
<b>Student:</b> Columns.
</p>

<p>
<b>Teacher:</b> What happens to duplicate tuples?
</p>

<p>
<b>Student:</b> Duplicate tuples are eliminated from the result.
</p>

<h4>Key Points for Exam</h4>

<ul>
    <li>Projection is represented by <b>π (Pi)</b>.</li>
    <li>Projection is a <b>unary operation</b>.</li>
    <li>It requires only <b>one relation</b> as input.</li>
    <li>It selects <b>attributes (columns)</b>.</li>
    <li>It uses an <b>attribute list</b>.</li>
    <li>Duplicate tuples are <b>eliminated</b> from the result.</li>
    <li>The result of Projection is also a <b>relation</b>.</li>
</ul>

<h4>Exam Definition</h4>

<p>
<b>
Projection is a unary relational algebra operation represented by
Pi (π), which is used to retrieve specified attributes (columns)
from a relation. Duplicate tuples are eliminated from the result.
</b>
</p>
<h4>Hand Writen </h4>
<img src="bca_images/projection_operator.png"  class="notes_img" >

`;

const renameOperationContent = `
<h3>Rename Operation (ρ) in Relational Algebra</h3>

<p>
The <b>Rename Operation</b> is used to rename a relation or its attributes.
It is represented by the Greek letter <b>Rho (ρ)</b>.
</p>

<h4>Simple Definition</h4>

<p>
<b>
Rename operation is used to change the name of an existing relation
or to give a new name to its attributes.
</b>
</p>

<p>
The Rename operation is also useful when we want to give a temporary name
to the output of a relational algebra expression.
</p>

<div class="code-box">

<div class="code-title">
<span>Rename Operator</span>
</div>

<pre><code><span class="operator">ρ</span> → Rename Operator</code></pre>

</div>

<h4>Why is Rename Operation Used?</h4>

<ul>
    <li>To rename the output relation.</li>
    <li>To give a new name to an existing relation.</li>
    <li>To rename attributes when required.</li>
    <li>To make complex relational algebra expressions easier to understand.</li>
    <li>It is useful when the same relation is used more than once.</li>
</ul>

<h4>Rename is a Unary Operation</h4>

<p>
Rename is a <b>unary operation</b> because it requires only
<b>one relation</b> as input.
</p>

<div class="code-box">

<div class="code-title">
<span>Unary Operation</span>
</div>

<pre><code><span class="relation">STUDENT</span>
      ↓
<span class="operator">ρ</span>
      ↓
<span class="relation">New Relation</span></code></pre>

</div>

<h4>Notation of Rename Operation</h4>

<p>
The general notation of Rename operation is:
</p>

<div class="code-box">

<div class="code-title">
<span>Rename Notation</span>
</div>

<pre><code><span class="operator">ρ</span> <span class="relation">(R, S)</span></code></pre>

</div>

<p>
Where:
</p>

<ul>
    <li><b>ρ (Rho)</b> → Rename operator.</li>
    <li><b>R</b> → New relation name.</li>
    <li><b>S</b> → Old relation name.</li>
</ul>

<div class="code-box">

<div class="code-title">
<span>Meaning of Notation</span>
</div>

<pre><code><span class="operator">ρ</span> <span class="relation">(R, S)</span>

<span class="operator">ρ</span> → Rename Operator
<span class="relation">R</span> → New Relation Name
<span class="relation">S</span> → Old Relation Name</code></pre>

</div>

<h4>Example</h4>

<p>
Suppose we have a relation named <b>STUDENT</b>.
We want to rename this relation as <b>STUDENT_NAME</b>.
</p>

<div class="code-box">

<div class="code-title">
<span>Rename Relation</span>
</div>

<pre><code><span class="operator">ρ</span> <span class="relation">(STUDENT_NAME, STUDENT)</span></code></pre>

</div>

<p>
Here:
</p>

<div class="code-box">

<div class="code-title">
<span>Understanding the Expression</span>
</div>

<pre><code><span class="relation">STUDENT</span>      → Old Relation Name

<span class="relation">STUDENT_NAME</span> → New Relation Name</code></pre>

</div>

<p>
After applying the Rename operation, the relation can be referred to
as <b>STUDENT_NAME</b>.
</p>

<h4>Example with Projection</h4>

<p>
Suppose we want to retrieve the names of all students from the
<b>STUDENT</b> relation and then rename the resulting relation as
<b>STUDENT_NAME</b>.
</p>

<p>
First, we use Projection to select the <b>Name</b> attribute:
</p>

<div class="code-box">

<div class="code-title">
<span>Projection</span>
</div>

<pre><code><span class="operator">π</span> <span class="attribute">Name</span> <span class="relation">(STUDENT)</span></code></pre>

</div>

<p>
Now, we can rename the output relation:
</p>

<div class="code-box">

<div class="code-title">
<span>Projection + Rename</span>
</div>

<pre><code><span class="operator">ρ</span> <span class="relation">(STUDENT_NAME, 
    <span class="operator">π</span> <span class="attribute">Name</span> <span class="relation">(STUDENT)</span>)</span></code></pre>

</div>

<p>
This means:
</p>

<div class="code-box">

<div class="code-title">
<span>Step-by-Step</span>
</div>

<pre><code>STUDENT
   ↓
<span class="operator">π</span> Name
   ↓
Select Name column
   ↓
<span class="operator">ρ</span> STUDENT_NAME
   ↓
Rename the output
   ↓
STUDENT_NAME</code></pre>

</div>

<h4>Rename Relation vs Rename Attribute</h4>

<p>
Rename operation can be used to rename the <b>relation</b> as well as
its <b>attributes</b>.
</p>

<h4>1. Renaming a Relation</h4>

<div class="code-box">

<div class="code-title">
<span>Rename Relation</span>
</div>

<pre><code><span class="operator">ρ</span> <span class="relation">(STUDENT_NEW, STUDENT)</span></code></pre>

</div>

<p>
Here, <b>STUDENT</b> is renamed to <b>STUDENT_NEW</b>.
</p>

<h4>2. Renaming an Attribute</h4>

<p>
In some relational algebra notations, Rename can also be used to give
new names to attributes.
</p>

<div class="code-box">

<div class="code-title">
<span>Rename Attribute</span>
</div>

<pre><code><span class="operator">ρ</span> <span class="attribute">(StudentName / Name)</span>
    <span class="relation">(STUDENT)</span></code></pre>

</div>

<p>
This means the attribute <b>Name</b> is given the new name
<b>StudentName</b>.
</p>

<h4>Important Point</h4>

<p>
Rename does <b>not change the actual data</b>. It only changes the
name by which the relation or attribute is referred to.
</p>

<div class="code-box">

<div class="code-title">
<span>Remember</span>
</div>

<pre><code>Rename
   ↓
Changes Name
   ↓
Does NOT change Data</code></pre>

</div>

<h4>Classroom Example</h4>

<p>
<b>Teacher:</b> Suppose our table is named STUDENT. I want to refer to
this table using the name STUDENT_INFO. Which operation should I use?
</p>

<p>
<b>Student:</b> Rename operation.
</p>

<p>
<b>Teacher:</b> Which symbol represents Rename?
</p>

<p>
<b>Student:</b> Rho (ρ).
</p>

<p>
<b>Teacher:</b> Is Rename a unary or binary operation?
</p>

<p>
<b>Student:</b> Unary operation because it works on one relation.
</p>

<h4>Easy Memory Trick</h4>

<div class="code-box">

<div class="code-title">
<span>Remember</span>
</div>

<pre><code><span class="operator">ρ</span> → Rename

Rename → Change Name
        ↓
Relation Name / Attribute Name</code></pre>

</div>

<h4>Selection, Projection and Rename</h4>

<table class="notes-table">
    <tr>
        <th>Operation</th>
        <th>Symbol</th>
        <th>Purpose</th>
    </tr>
    <tr>
        <td>Selection</td>
        <td>σ</td>
        <td>Selects rows.</td>
    </tr>
    <tr>
        <td>Projection</td>
        <td>π</td>
        <td>Selects columns.</td>
    </tr>
    <tr>
        <td>Rename</td>
        <td>ρ</td>
        <td>Renames relation or attributes.</td>
    </tr>
</table>

<h4>Key Points for Exam</h4>

<ul>
    <li>Rename is represented by <b>ρ (Rho)</b>.</li>
    <li>Rename is a <b>unary operation</b>.</li>
    <li>It requires only <b>one relation</b> as input.</li>
    <li>It can rename a <b>relation</b>.</li>
    <li>It can also be used to rename <b>attributes</b>.</li>
    <li>It is useful in complex relational algebra expressions.</li>
    <li>Rename changes the name, not the actual data.</li>
</ul>

<h4>Exam Definition</h4>

<p>
<b>
Rename is a unary relational algebra operation represented by the
Greek letter Rho (ρ). It is used to rename a relation or its attributes
and is especially useful for giving a temporary name to the result of
a relational algebra expression.
</b>
</p>
`;

const unionOperationContent = `
<h3>Union Operation (∪)</h3>

<p>
The <b>Union Operation</b> combines the tuples of two relations and
returns all unique tuples.
</p>

<p>
It is represented by the <b>Union symbol (∪)</b>.
</p>

<h4>Definition</h4>

<p>
<b>
Union combines the records of two relations and automatically removes
duplicate records.
</b>
</p>

<h4>Notation</h4>

<div class="code-box">
<div class="code-title">
<span>Union Notation</span>
</div>

<pre><code><span class="relation">R</span> <span class="operator">∪</span> <span class="relation">S</span>

<span class="relation">R</span> → First Relation
<span class="relation">S</span> → Second Relation
<span class="operator">∪</span> → Union Operator</code></pre>
</div>

<h4>Union is a Binary Operation</h4>

<p>
Union is a <b>binary operation</b> because it requires
<b>two relations</b> as input.
</p>

<h4>Conditions for Union</h4>

<p>
Before applying Union, the two relations must be
<b>union compatible</b>.
</p>

<ul>
    <li>Both relations must have the <b>same number of columns</b>.</li>
    <li>Corresponding columns must have <b>compatible data types</b>.</li>
</ul>

<div class="code-box">
<div class="code-title">
<span>Union Compatibility</span>
</div>

<pre><code>Same Number of Columns
          +
Compatible Data Types
          ↓
    Union Compatible</code></pre>
</div>

<h3>Example of Union Operation</h3>

<p>
Consider the following two relations:
</p>

<h4>Relation 1: STUDENT_A</h4>

<table class="notes-table">
    <thead>
        <tr>
            <th>Roll</th>
            <th>Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>101</td>
            <td>Amit</td>
        </tr>
        <tr>
            <td>102</td>
            <td>Ravi</td>
        </tr>
        <tr>
            <td>103</td>
            <td>Neha</td>
        </tr>
    </tbody>
</table>

<h4>Relation 2: STUDENT_B</h4>

<table class="notes-table">
    <thead>
        <tr>
            <th>Roll</th>
            <th>Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>103</td>
            <td>Neha</td>
        </tr>
        <tr>
            <td>104</td>
            <td>Priya</td>
        </tr>
        <tr>
            <td>105</td>
            <td>Rahul</td>
        </tr>
    </tbody>
</table>

<h4>Apply Union</h4>

<div class="code-box">
<div class="code-title">
<span>Relational Algebra Expression</span>
</div>

<pre><code><span class="relation">STUDENT_A</span> <span class="operator">∪</span> <span class="relation">STUDENT_B</span></code></pre>
</div>

<p>
Both relations have <b>2 columns</b> and their corresponding columns
have compatible data types. Therefore, Union can be applied.
</p>

<h4>Step 1: Combine the Records</h4>

<table class="notes-table">
    <thead>
        <tr>
            <th>Roll</th>
            <th>Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>101</td>
            <td>Amit</td>
        </tr>
        <tr>
            <td>102</td>
            <td>Ravi</td>
        </tr>
        <tr>
            <td>103</td>
            <td>Neha</td>
        </tr>
        <tr>
            <td>103</td>
            <td>Neha</td>
        </tr>
        <tr>
            <td>104</td>
            <td>Priya</td>
        </tr>
        <tr>
            <td>105</td>
            <td>Rahul</td>
        </tr>
    </tbody>
</table>

<p>
The tuple <b>(103, Neha)</b> appears twice because it exists in both
relations.
</p>

<h4>Step 2: Remove Duplicate Tuples</h4>

<table class="notes-table">
    <thead>
        <tr>
            <th>Roll</th>
            <th>Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>101</td>
            <td>Amit</td>
        </tr>
        <tr>
            <td>102</td>
            <td>Ravi</td>
        </tr>
        <tr>
            <td>103</td>
            <td>Neha</td>
        </tr>
        <tr>
            <td>104</td>
            <td>Priya</td>
        </tr>
        <tr>
            <td>105</td>
            <td>Rahul</td>
        </tr>
    </tbody>
</table>

<p>
The duplicate tuple <b>(103, Neha)</b> is removed automatically.
</p>

<h4>Final Result</h4>

<div class="code-box">
<div class="code-title">
<span>Union Result</span>
</div>

<pre><code><span class="relation">STUDENT_A</span> <span class="operator">∪</span> <span class="relation">STUDENT_B</span>
            ↓
     Combine All Tuples
            ↓
     Remove Duplicates
            ↓
       <span class="relation">Final Relation</span></code></pre>
</div>

<table class="notes-table">
    <thead>
        <tr>
            <th>Roll</th>
            <th>Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>101</td>
            <td>Amit</td>
        </tr>
        <tr>
            <td>102</td>
            <td>Ravi</td>
        </tr>
        <tr>
            <td>103</td>
            <td>Neha</td>
        </tr>
        <tr>
            <td>104</td>
            <td>Priya</td>
        </tr>
        <tr>
            <td>105</td>
            <td>Rahul</td>
        </tr>
    </tbody>
</table>

<h4>Important Point</h4>

<div class="code-box">
<div class="code-title">
<span>Remember</span>
</div>

<pre><code>STUDENT_A → 3 Tuples
STUDENT_B → 3 Tuples

Total → 6 Tuples

Duplicate → 1 Tuple

Final Result → 5 Tuples</code></pre>
</div>

<h4>Example with Projection</h4>

<p>
Suppose we want to combine the <b>Name</b> of students from both
relations.
</p>

<div class="code-box">
<div class="code-title">
<span>Projection + Union</span>
</div>

<pre><code><span class="operator">π</span> <span class="attribute">Name</span> <span class="relation">(STUDENT_A)</span>
          <span class="operator">∪</span>
<span class="operator">π</span> <span class="attribute">Name</span> <span class="relation">(STUDENT_B)</span></code></pre>
</div>

<h4>Result</h4>

<table class="notes-table">
    <thead>
        <tr>
            <th>Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Amit</td>
        </tr>
        <tr>
            <td>Ravi</td>
        </tr>
        <tr>
            <td>Neha</td>
        </tr>
        <tr>
            <td>Priya</td>
        </tr>
        <tr>
            <td>Rahul</td>
        </tr>
    </tbody>
</table>

<h4>Key Points for Exam</h4>

<ul>
    <li>Union is represented by <b>∪</b>.</li>
    <li>Union is a <b>binary operation</b>.</li>
    <li>It requires <b>two relations</b>.</li>
    <li>Both relations must be <b>union compatible</b>.</li>
    <li>Both relations must have the same number of attributes.</li>
    <li>Corresponding attributes must have compatible data types.</li>
    <li>Duplicate tuples are automatically removed.</li>
    <li>The result has the same number of attributes as the input relations.</li>
</ul>

<h4>Exam Definition</h4>

<p>
<b>
Union is a binary relational algebra operation represented by ∪ that
combines the tuples of two union-compatible relations and removes
duplicate tuples from the result.
</b>
</p>
`;

const setDifferenceContent = `
<h3>Set Difference (−)</h3>

<p>
The <b>Set Difference</b> operation returns all tuples that are present
in one relation but <b>not present in the other relation</b>.
</p>

<p>
It is also called the <b>Minus Operation</b>.
</p>

<h4>Simple Definition</h4>

<p>
<b>
Set Difference finds the records that exist in the first relation but
do not exist in the second relation.
</b>
</p>

<h4>Notation</h4>

<div class="code-box">

<div class="code-title">
<span>Set Difference Notation</span>
</div>

<pre><code><span class="relation">R</span> <span class="operator">−</span> <span class="relation">S</span>

<span class="relation">R</span> → First Relation
<span class="relation">S</span> → Second Relation
<span class="operator">−</span> → Set Difference Operator</code></pre>

</div>

<p>
The expression <b>R − S</b> means:
</p>

<div class="code-box">

<div class="code-title">
<span>Meaning</span>
</div>

<pre><code>R − S

→ Take records from R
→ Check them in S
→ Keep only records NOT present in S</code></pre>

</div>

<h4>Set Difference is a Binary Operation</h4>

<p>
Set Difference is a <b>binary operation</b> because it requires
<b>two relations</b>.
</p>


<h4>Conditions for Set Difference</h4>

<p>
Before applying Set Difference, both relations must be
<b>union-compatible</b>.
</p>

<ul>
    <li>Both relations must have the <b>same number of attributes (columns)</b>.</li>
    <li>The corresponding attributes must have <b>compatible data types/domains</b>.</li>
</ul>

<div class="code-box">

<div class="code-title">
<span>Union Compatibility</span>
</div>

<pre><code>Same Number of Columns
          +
Compatible Data Types
          ↓
    Difference Possible</code></pre>

</div>

<h3>Example of Set Difference</h3>

<p>
Consider two relations: <b>STUDENT</b> and <b>EMPLOYEE</b>.
</p>

<h4>Relation 1: STUDENT</h4>

<table class="notes-table">
    <thead>
        <tr>
            <th>Roll</th>
            <th>Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>101</td>
            <td>Amit</td>
        </tr>
        <tr>
            <td>102</td>
            <td>Ravi</td>
        </tr>
        <tr>
            <td>103</td>
            <td>Neha</td>
        </tr>
        <tr>
            <td>104</td>
            <td>Priya</td>
        </tr>
    </tbody>
</table>

<h4>Relation 2: EMPLOYEE</h4>

<table class="notes-table">
    <thead>
        <tr>
            <th>Roll</th>
            <th>Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>103</td>
            <td>Neha</td>
        </tr>
        <tr>
            <td>104</td>
            <td>Priya</td>
        </tr>
        <tr>
            <td>105</td>
            <td>Rahul</td>
        </tr>
    </tbody>
</table>

<h4>Apply Set Difference</h4>

<p>
Suppose we want to find the students who are present in
<b>STUDENT</b> but not present in <b>EMPLOYEE</b>.
</p>

<div class="code-box">

<div class="code-title">
<span>Relational Algebra Expression</span>
</div>

<pre><code><span class="relation">STUDENT</span> <span class="operator">−</span> <span class="relation">EMPLOYEE</span></code></pre>

</div>

<h4>Step-by-Step</h4>

<table class="notes-table">
    <thead>
        <tr>
            <th>STUDENT Record</th>
            <th>Present in EMPLOYEE?</th>
            <th>Result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>(101, Amit)</td>
            <td>No</td>
            <td>Keep</td>
        </tr>
        <tr>
            <td>(102, Ravi)</td>
            <td>No</td>
            <td>Keep</td>
        </tr>
        <tr>
            <td>(103, Neha)</td>
            <td>Yes</td>
            <td>Remove</td>
        </tr>
        <tr>
            <td>(104, Priya)</td>
            <td>Yes</td>
            <td>Remove</td>
        </tr>
    </tbody>
</table>

<h4>Final Result</h4>

<table class="notes-table">
    <thead>
        <tr>
            <th>Roll</th>
            <th>Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>101</td>
            <td>Amit</td>
        </tr>
        <tr>
            <td>102</td>
            <td>Ravi</td>
        </tr>
    </tbody>
</table>

<div class="code-box">

<div class="code-title">
<span>Result</span>
</div>

<pre><code><span class="relation">STUDENT</span> <span class="operator">−</span> <span class="relation">EMPLOYEE</span>
          ↓
Records in STUDENT
          ↓
Remove records also present
in EMPLOYEE
          ↓
<span class="relation">(101, Amit)</span>
<span class="relation">(102, Ravi)</span></code></pre>

</div>

<h4>Important: Order Matters</h4>

<p>
Set Difference is <b>not commutative</b>. Therefore:
</p>

<div class="code-box">

<div class="code-title">
<span>Order Matters</span>
</div>

<pre><code><span class="relation">STUDENT</span> <span class="operator">−</span> <span class="relation">EMPLOYEE</span>
        ≠
<span class="relation">EMPLOYEE</span> <span class="operator">−</span> <span class="relation">STUDENT</span></code></pre>

</div>

<p>
For example:
</p>

<div class="code-box">

<div class="code-title">
<span>STUDENT − EMPLOYEE</span>
</div>

<pre><code>101 Amit
102 Ravi</code></pre>

</div>

<div class="code-box">

<div class="code-title">
<span>EMPLOYEE − STUDENT</span>
</div>

<pre><code>105 Rahul</code></pre>

</div>

<p>
So, changing the order of the relations changes the result.
</p>

<h4>Example with Projection</h4>

<p>
Suppose we only want the names of students who are not employees.
We can use Projection with Set Difference.
</p>

<div class="code-box">

<div class="code-title">
<span>Projection + Set Difference</span>
</div>

<pre><code><span class="operator">π</span> <span class="attribute">Name</span> <span class="relation">(STUDENT)</span>
<span class="operator">−</span>
<span class="operator">π</span> <span class="attribute">Name</span> <span class="relation">(EMPLOYEE)</span></code></pre>

</div>

<h4>Result</h4>

<table class="notes-table">
    <thead>
        <tr>
            <th>Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Amit</td>
        </tr>
        <tr>
            <td>Ravi</td>
        </tr>
    </tbody>
</table>


<h4>Key Points for Exam</h4>

<ul>
    <li>Set Difference is represented by <b>−</b>.</li>
    <li>It is also called the <b>Minus Operation</b>.</li>
    <li>It is a <b>binary operation</b>.</li>
    <li>It requires <b>two relations</b>.</li>
    <li>Both relations must be <b>union-compatible</b>.</li>
    <li>It returns tuples present in the first relation but not in the second.</li>
    <li>The order of relations is important.</li>
    <li><b>R − S</b> is generally not equal to <b>S − R</b>.</li>
    <li>The order of tuples in the result is not guaranteed.</li>
</ul>

<h4>Exam Definition</h4>

<p>
<b>
Set Difference is a binary relational algebra operation represented by
− that returns all tuples which are present in the first relation but
not present in the second relation.
</b>
</p>
`;

const cartesianProductContent = `
<h3>Cartesian Product (×)</h3>

<p>
The <b>Cartesian Product</b> combines every tuple of the first relation
with every tuple of the second relation.
</p>

<h4>Notation</h4>

<div class="code-box">
<div class="code-title">
<span>Cartesian Product Notation</span>
</div>

<pre><code><span class="relation">R</span> <span class="operator">×</span> <span class="relation">S</span>

<span class="relation">R</span> → First Relation
<span class="relation">S</span> → Second Relation
<span class="operator">×</span> → Cartesian Product Operator</code></pre>
</div>

<h4>Definition</h4>

<p>
If relation <b>R</b> has <b>m tuples</b> and relation <b>S</b> has
<b>n tuples</b>, then the Cartesian Product <b>R × S</b> will contain
<b>m × n tuples</b>.
</p>

<div class="code-box">
<div class="code-title">
<span>Number of Tuples</span>
</div>

<pre><code>R → m tuples
S → n tuples

R × S → m × n tuples</code></pre>
</div>

<h4>How Cartesian Product Works</h4>

<ul>
    <li>Each tuple of the first relation is paired with every tuple of the second relation.</li>
    <li>The result contains all attributes from both relations.</li>
    <li>The number of attributes in the result is the sum of attributes of both relations.</li>
</ul>

<h3>Example of Cartesian Product</h3>

<p>
Consider the following two relations:
</p>

<h4>Relation 1: STUDENTS</h4>

<table class="notes-table">
    <thead>
        <tr>
            <th>StudentID</th>
            <th>Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>001</td>
            <td>A</td>
        </tr>
        <tr>
            <td>002</td>
            <td>B</td>
        </tr>
    </tbody>
</table>

<h4>Relation 2: COURSES</h4>

<table class="notes-table">
    <thead>
        <tr>
            <th>CourseID</th>
            <th>CourseName</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>101</td>
            <td>BCA</td>
        </tr>
        <tr>
            <td>102</td>
            <td>BBA</td>
        </tr>
    </tbody>
</table>

<h4>Apply Cartesian Product</h4>

<div class="code-box">
<div class="code-title">
<span>Relational Algebra Expression</span>
</div>

<pre><code><span class="relation">STUDENTS</span> <span class="operator">×</span> <span class="relation">COURSES</span></code></pre>
</div>

<p>
The STUDENTS relation contains <b>2 tuples</b> and the COURSES relation
also contains <b>2 tuples</b>.
</p>

<div class="code-box">
<div class="code-title">
<span>Number of Result Tuples</span>
</div>

<pre><code>2 × 2 = 4 tuples</code></pre>
</div>

<h4>Cartesian Product Result</h4>

<table class="notes-table">
    <thead>
        <tr>
            <th>StudentID</th>
            <th>Name</th>
            <th>CourseID</th>
            <th>CourseName</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>001</td>
            <td>A</td>
            <td>101</td>
            <td>BCA</td>
        </tr>
        <tr>
            <td>001</td>
            <td>A</td>
            <td>102</td>
            <td>BBA</td>
        </tr>
        <tr>
            <td>002</td>
            <td>B</td>
            <td>101</td>
            <td>BCA</td>
        </tr>
        <tr>
            <td>002</td>
            <td>B</td>
            <td>102</td>
            <td>BBA</td>
        </tr>
    </tbody>
</table>

<h4>Step-by-Step Pairing</h4>

<table class="notes-table">
    <thead>
        <tr>
            <th>Student</th>
            <th>Course</th>
            <th>Result Pair</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>A</td>
            <td>BCA</td>
            <td>(A, BCA)</td>
        </tr>
        <tr>
            <td>A</td>
            <td>BBA</td>
            <td>(A, BBA)</td>
        </tr>
        <tr>
            <td>B</td>
            <td>BCA</td>
            <td>(B, BCA)</td>
        </tr>
        <tr>
            <td>B</td>
            <td>BBA</td>
            <td>(B, BBA)</td>
        </tr>
    </tbody>
</table>

<h4>Number of Attributes in Result</h4>

<p>
STUDENTS has <b>2 attributes</b> and COURSES has <b>2 attributes</b>.
Therefore, the Cartesian Product has <b>4 attributes</b>.
</p>

<div class="code-box">
<div class="code-title">
<span>Attributes in Result</span>
</div>

<pre><code>STUDENTS → 2 Attributes
COURSES  → 2 Attributes

Result → 2 + 2 = 4 Attributes</code></pre>
</div>

<h4>Important Points</h4>

<ul>
    <li>Cartesian Product is represented by <b>×</b>.</li>
    <li>It is a <b>binary operation</b>.</li>
    <li>It requires <b>two relations</b>.</li>
    <li>Every tuple of the first relation is paired with every tuple of the second relation.</li>
    <li>If R has <b>m tuples</b> and S has <b>n tuples</b>, R × S has <b>m × n tuples</b>.</li>
    <li>The result contains attributes from <b>both relations</b>.</li>
    <li>No union-compatibility condition is required for Cartesian Product.</li>
</ul>

<h4>Exam Definition</h4>

<p>
<b>
Cartesian Product is a binary relational algebra operation represented
by × that combines every tuple of one relation with every tuple of
another relation.
</b>
</p>
`;

const derivedOperationsContent = `

    <div class="notes_text">

        <h3>Derived Operations</h3>

        <p>
            Also known as <strong>extended operations</strong>, these operations
            can be derived from basic relational algebra operations.
        </p>

        <p>These include three operations:</p>

        <ul>
            <li>Join Operations</li>
            <li>Intersection Operation</li>
            <li>Division Operation</li>
        </ul>


        <h4>Join Operations</h4>

        <p>
            Join operations in DBMS are <strong>binary operations</strong>
            that allow us to combine two or more relations based on a
            specified condition.
        </p>

        <p>Join operations are broadly classified into:</p>

        <ul>
            <li>Inner Join</li>
            <li>Outer Join</li>
        </ul>


        <h4>Inner Join</h4>

        <p>
            An <strong>Inner Join</strong> is a relational database operation
            that combines rows from two or more tables based on a specified
            condition.
        </p>

        <p>
            It retrieves only those rows where there is a
            <strong>match in both tables</strong>.
        </p>

        <p>
            <strong>Note:</strong> Inner Join is the default type of JOIN in SQL.
        </p>

        <div class="code-box">
            <div class="code-title">
                <span>Relational Algebra Notation</span>
            </div>
            <pre><code>R ⋈<sub>condition</sub> S</code></pre>
        </div>

        <p>
            Here:
        </p>

        <ul>
            <li><strong>R</strong> and <strong>S</strong> are two relations.</li>
            <li>
                <strong>⋈</strong> represents the Join operation.
            </li>
            <li>
                The condition specifies how the two relations are joined.
            </li>
        </ul>

        <p>
            Inner Join is further classified into three types:
        </p>

        <ol>
            <li>Theta Join (θ-Join)</li>
            <li>Equi Join</li>
            <li>Natural Join</li>
        </ol>


        <h4>Theta Join (θ-Join)</h4>

        <p>
            A <strong>Theta Join</strong> combines two relations using a
            specified condition.
        </p>

        <p>
            This condition is represented by the symbol
            <strong>θ (Theta)</strong>.
        </p>

        <p>
            The condition can use operators such as:
        </p>

        <ul>
            <li><strong>&gt;</strong> Greater than</li>
            <li><strong>&lt;</strong> Less than</li>
            <li><strong>&gt;=</strong> Greater than or equal to</li>
            <li><strong>&lt;=</strong> Less than or equal to</li>
            <li><strong>=</strong> Equal to</li>
            <li><strong>&lt;&gt;</strong> Not equal to</li>
        </ul>

        <div class="code-box">
            <div class="code-title">
                <span>Theta Join Notation</span>
            </div>
            <pre><code>R ⋈<sub>θ condition</sub> S

or

R ⋈<sub>condition</sub> S</code></pre>
        </div>

        <p>Here:</p>

        <ul>
            <li><strong>R</strong> is the first relation.</li>
            <li><strong>S</strong> is the second relation.</li>
            <li>
                <strong>θ</strong> is a condition involving attributes
                of R and S.
            </li>
        </ul>


        <h4>Theta Join Example</h4>

        <p>
            Consider the following two relations:
        </p>

        <p><strong>Employee (EmpID, Name, Salary)</strong></p>

        <table class="notes-table">
            <tr>
                <th>EmpID</th>
                <th>Name</th>
                <th>Salary</th>
            </tr>
            <tr>
                <td>1</td>
                <td>A</td>
                <td>5000</td>
            </tr>
            <tr>
                <td>2</td>
                <td>B</td>
                <td>4000</td>
            </tr>
            <tr>
                <td>3</td>
                <td>C</td>
                <td>3000</td>
            </tr>
        </table>

        <p><strong>Department (DeptID, DeptName, Budget)</strong></p>

        <table class="notes-table">
            <tr>
                <th>DeptID</th>
                <th>DeptName</th>
                <th>Budget</th>
            </tr>
            <tr>
                <td>101</td>
                <td>Engineering</td>
                <td>6000</td>
            </tr>
            <tr>
                <td>102</td>
                <td>Sales</td>
                <td>4500</td>
            </tr>
            <tr>
                <td>103</td>
                <td>HR</td>
                <td>3500</td>
            </tr>
        </table>

        <p>
            <strong>Question:</strong> Find employees whose salary is less
            than the department budget.
        </p>

        <div class="code-box">
            <div class="code-title">
                <span>Theta Join Expression</span>
            </div>
            <pre><code>Employee ⋈<sub>Employee.Salary &lt; Department.Budget</sub> Department</code></pre>
        </div>


        <h4>Steps of Theta Join</h4>

        <ol>
            <li>
                Perform a <strong>Cartesian Product</strong> of Employee
                and Department.
            </li>
            <li>
                Select only those tuples that satisfy the condition:
                <strong>Employee.Salary &lt; Department.Budget</strong>.
            </li>
        </ol>

        <table class="notes-table">
            <tr>
                <th>EmpID</th>
                <th>Name</th>
                <th>Salary</th>
                <th>DeptID</th>
                <th>DeptName</th>
                <th>Budget</th>
            </tr>
            <tr>
                <td>1</td>
                <td>A</td>
                <td>5000</td>
                <td>101</td>
                <td>Engineering</td>
                <td>6000</td>
            </tr>
            <tr>
                <td>1</td>
                <td>A</td>
                <td>5000</td>
                <td>102</td>
                <td>Sales</td>
                <td>4500</td>
            </tr>
            <tr>
                <td>2</td>
                <td>B</td>
                <td>4000</td>
                <td>101</td>
                <td>Engineering</td>
                <td>6000</td>
            </tr>
            <tr>
                <td>2</td>
                <td>B</td>
                <td>4000</td>
                <td>102</td>
                <td>Sales</td>
                <td>4500</td>
            </tr>
            <tr>
                <td>3</td>
                <td>C</td>
                <td>3000</td>
                <td>101</td>
                <td>Engineering</td>
                <td>6000</td>
            </tr>
            <tr>
                <td>3</td>
                <td>C</td>
                <td>3000</td>
                <td>102</td>
                <td>Sales</td>
                <td>4500</td>
            </tr>
            <tr>
                <td>3</td>
                <td>C</td>
                <td>3000</td>
                <td>103</td>
                <td>HR</td>
                <td>3500</td>
            </tr>
        </table>

        <p>
            The result shows all employee-department combinations where the
            employee's salary is less than the department's budget.
        </p>


        <h4>Equi Join</h4>

        <p>
            An <strong>Equi Join</strong> in relational algebra is a special
            type of join where the join condition uses only the
            <strong>equality operator (=)</strong>.
        </p>

        <p>
            It combines tuples from two relations when the specified
            attributes have equal values.
        </p>

        <div class="code-box">
            <div class="code-title">
                <span>Equi Join Notation</span>
            </div>
            <pre><code>R ⋈<sub>A = B</sub> S</code></pre>
        </div>

        <p>Here:</p>

        <ul>
            <li><strong>R</strong> and <strong>S</strong> are two relations.</li>
            <li><strong>A</strong> is an attribute from relation R.</li>
            <li><strong>B</strong> is an attribute from relation S.</li>
            <li>
                <strong>A = B</strong> is the equality condition used for
                joining the relations.
            </li>
        </ul>


        <h4>Equi Join Example</h4>

        <p><strong>Employee</strong></p>

        <table class="notes-table">
            <tr>
                <th>EmpID</th>
                <th>Name</th>
                <th>DeptID</th>
            </tr>
            <tr>
                <td>1</td>
                <td>A</td>
                <td>101</td>
            </tr>
            <tr>
                <td>2</td>
                <td>B</td>
                <td>102</td>
            </tr>
            <tr>
                <td>3</td>
                <td>C</td>
                <td>103</td>
            </tr>
        </table>

        <p><strong>Department</strong></p>

        <table class="notes-table">
            <tr>
                <th>DeptID</th>
                <th>DeptName</th>
            </tr>
            <tr>
                <td>101</td>
                <td>Engineering</td>
            </tr>
            <tr>
                <td>102</td>
                <td>Sales</td>
            </tr>
            <tr>
                <td>103</td>
                <td>HR</td>
            </tr>
        </table>

        <div class="code-box">
            <div class="code-title">
                <span>Equi Join Expression</span>
            </div>
            <pre><code>Employee ⋈<sub>Employee.DeptID = Department.DeptID</sub> Department</code></pre>
        </div>

        <p><strong>Result:</strong></p>

        <table class="notes-table">
            <tr>
                <th>EmpID</th>
                <th>Name</th>
                <th>DeptID</th>
                <th>DeptName</th>
            </tr>
            <tr>
                <td>1</td>
                <td>A</td>
                <td>101</td>
                <td>Engineering</td>
            </tr>
            <tr>
                <td>2</td>
                <td>B</td>
                <td>102</td>
                <td>Sales</td>
            </tr>
            <tr>
                <td>3</td>
                <td>C</td>
                <td>103</td>
                <td>HR</td>
            </tr>
        </table>


        <h4>Natural Join</h4>

        <p>
            A <strong>Natural Join</strong> in relational algebra is a type
            of join that automatically matches and combines tuples from two
            relations based on attributes having the <strong>same name</strong>
            and compatible values.
        </p>

        <div class="code-box">
            <div class="code-title">
                <span>Natural Join Notation</span>
            </div>
            <pre><code>R ⋈ S</code></pre>
        </div>

        <p>Here:</p>

        <ul>
            <li><strong>R</strong> and <strong>S</strong> are two relations.</li>
            <li>
                The join condition is implicitly based on the equality of
                all common attribute names in R and S.
            </li>
            <li>
                Natural Join automatically uses the common attributes.
            </li>
            <li>
                Duplicate common attributes are generally represented only
                once in the result.
            </li>
        </ul>

        <p>
            <strong>Important:</strong> If there are no common attributes
            between the two relations, a Natural Join behaves like a
            Cartesian Product.
        </p>


        <h4>Natural Join Example</h4>

        <p><strong>Employee</strong></p>

        <table class="notes-table">
            <tr>
                <th>EmpID</th>
                <th>Name</th>
                <th>DeptID</th>
            </tr>
            <tr>
                <td>1</td>
                <td>A</td>
                <td>101</td>
            </tr>
            <tr>
                <td>2</td>
                <td>B</td>
                <td>102</td>
            </tr>
        </table>

        <p><strong>Department</strong></p>

        <table class="notes-table">
            <tr>
                <th>DeptID</th>
                <th>DeptName</th>
            </tr>
            <tr>
                <td>101</td>
                <td>Engineering</td>
            </tr>
            <tr>
                <td>102</td>
                <td>Sales</td>
            </tr>
        </table>

        <div class="code-box">
            <div class="code-title">
                <span>Natural Join Expression</span>
            </div>
            <pre><code>Employee ⋈ Department</code></pre>
        </div>

        <p>
            Here, <strong>DeptID</strong> is the common attribute in both
            relations. Therefore, the Natural Join automatically matches
            rows having the same DeptID.
        </p>

        <p><strong>Result:</strong></p>

        <table class="notes-table">
            <tr>
                <th>EmpID</th>
                <th>Name</th>
                <th>DeptID</th>
                <th>DeptName</th>
            </tr>
            <tr>
                <td>1</td>
                <td>A</td>
                <td>101</td>
                <td>Engineering</td>
            </tr>
            <tr>
                <td>2</td>
                <td>B</td>
                <td>102</td>
                <td>Sales</td>
            </tr>
        </table>

        <p>
            If there are no common values between the common attributes,
            the Natural Join will result in an <strong>empty relation</strong>.
        </p>


        <h4>Quick Comparison</h4>

        <table class="notes-table">
            <tr>
                <th>Join Type</th>
                <th>Condition</th>
            </tr>
            <tr>
                <td>Theta Join</td>
                <td>Uses conditions such as =, &lt;, &gt;, &lt;=, &gt;=, etc.</td>
            </tr>
            <tr>
                <td>Equi Join</td>
                <td>Uses only the equality (=) operator.</td>
            </tr>
            <tr>
                <td>Natural Join</td>
                <td>Automatically joins using common attributes.</td>
            </tr>
        </table>

    </div>

        <h4>Outer Join</h4>

        <p>
            An <strong>Outer Join</strong> is a type of join that retrieves
            both <strong>matching and non-matching records</strong> from
            related tables.
        </p>

        <p>There are three types of Outer Join:</p>

        <ol>
            <li>Left Outer Join</li>
            <li>Right Outer Join</li>
            <li>Full Outer Join</li>
        </ol>


        <h4>1. Left Outer Join</h4>

        <p>
            A <strong>Left Outer Join</strong> is also called a
            <strong>Left Join</strong>.
        </p>

        <p>
            It retrieves <strong>all records from the left table</strong>
            and the matching records from the right table.
        </p>

        <p>
            If there is no matching record in the right table,
            <strong>NULL</strong> is placed for the attributes of the
            right table.
        </p>

        <div class="code-box">
            <div class="code-title">
                <span>Left Outer Join Notation</span>
            </div>
            <pre><code>R ⟕ S</code></pre>
        </div>

        <p>
            The symbol <strong>⟕</strong> represents the Left Outer Join
            operation.
        </p>

        <p>
            The join condition can be specified as:
        </p>

        <div class="code-box">
            <pre><code>R ⟕<sub>R.DeptID = S.DeptID</sub> S</code></pre>
        </div>


        <h4>Example: Left Outer Join</h4>

        <p><strong>Employee</strong></p>

        <table class="notes-table">
            <tr>
                <th>EmpID</th>
                <th>Name</th>
                <th>DeptID</th>
            </tr>
            <tr>
                <td>1</td>
                <td>A</td>
                <td>101</td>
            </tr>
            <tr>
                <td>2</td>
                <td>B</td>
                <td>102</td>
            </tr>
            <tr>
                <td>3</td>
                <td>C</td>
                <td>103</td>
            </tr>
        </table>

        <p><strong>Department</strong></p>

        <table class="notes-table">
            <tr>
                <th>DeptID</th>
                <th>DeptName</th>
            </tr>
            <tr>
                <td>101</td>
                <td>HR</td>
            </tr>
            <tr>
                <td>102</td>
                <td>Finance</td>
            </tr>
        </table>

        <div class="code-box">
            <div class="code-title">
                <span>Left Outer Join</span>
            </div>
            <pre><code>Employee ⟕<sub>Employee.DeptID = Department.DeptID</sub> Department</code></pre>
        </div>

        <p><strong>Result:</strong></p>

        <table class="notes-table">
            <tr>
                <th>EmpID</th>
                <th>Name</th>
                <th>DeptID</th>
                <th>DeptName</th>
            </tr>
            <tr>
                <td>1</td>
                <td>A</td>
                <td>101</td>
                <td>HR</td>
            </tr>
            <tr>
                <td>2</td>
                <td>B</td>
                <td>102</td>
                <td>Finance</td>
            </tr>
            <tr>
                <td>3</td>
                <td>C</td>
                <td>103</td>
                <td>NULL</td>
            </tr>
        </table>

        <p>
            Notice that employee C is included even though there is no
            matching department. Therefore, <strong>NULL</strong> is placed
            in the DeptName column.
        </p>


        <h4>2. Right Outer Join</h4>

        <p>
            A <strong>Right Outer Join</strong> returns the matching tuples
            and the tuples that are present only in the
            <strong>right relation</strong>.
        </p>

        <p>
            If there is no match in the left relation, the result includes
            <strong>NULL</strong> for the attributes of the left relation.
        </p>

        <div class="code-box">
            <div class="code-title">
                <span>Right Outer Join Notation</span>
            </div>
            <pre><code>R ⟖ S</code></pre>
        </div>

        <p>Here:</p>

        <ul>
            <li><strong>R</strong> is the left relation.</li>
            <li><strong>S</strong> is the right relation.</li>
            <li>
                <strong>⟖</strong> represents the Right Outer Join operator.
            </li>
        </ul>


        <h4>Steps for Right Outer Join</h4>

        <ol>
            <li>Perform a Natural Join.</li>
            <li>
                Add the unmatched rows from the right relation with
                <strong>NULL</strong> values for the left relation's
                attributes.
            </li>
        </ol>

        <div class="code-box">
            <div class="code-title">
                <span>Right Outer Join Example</span>
            </div>
            <pre><code>Employee ⟖<sub>Employee.DeptID = Department.DeptID</sub> Department</code></pre>
        </div>

        <p>
            In a Right Outer Join, every row from the
            <strong>Department</strong> relation is preserved. If a
            department has no matching employee, the employee-related
            attributes contain <strong>NULL</strong>.
        </p>


        <h4>3. Full Outer Join</h4>

        <p>
            A <strong>Full Outer Join</strong> returns all tuples from
            <strong>both relations</strong>.
        </p>

        <p>
            A Full Outer Join combines the features of
            <strong>Left Outer Join</strong> and
            <strong>Right Outer Join</strong>.
        </p>

        <p>
            It retrieves all rows from both relations, including:
        </p>

        <ul>
            <li>Matching rows from both tables.</li>
            <li>Unmatched rows from the left table.</li>
            <li>Unmatched rows from the right table.</li>
        </ul>

        <p>
            If there is no match, <strong>NULL</strong> is placed for the
            missing attributes.
        </p>

        <div class="code-box">
            <div class="code-title">
                <span>Full Outer Join Notation</span>
            </div>
            <pre><code>R ⟗<sub>θ</sub> S</code></pre>
        </div>

        <p>Here:</p>

        <ul>
            <li><strong>R</strong> is the left relation.</li>
            <li><strong>S</strong> is the right relation.</li>
            <li>
                <strong>θ</strong> represents the join condition that
                specifies the matching criteria.
            </li>
            <li>
                <strong>⟗</strong> represents the Full Outer Join operator.
            </li>
        </ul>


        <h4>Steps for Full Outer Join</h4>

        <ol>
            <li>Perform a Natural Join.</li>
            <li>Add unmatched rows from relation R.</li>
            <li>Add unmatched rows from relation S.</li>
            <li>
                Put <strong>NULL</strong> in the columns where a matching
                record does not exist.
            </li>
        </ol>


        <h4>Example: Full Outer Join</h4>

        <p><strong>Employee</strong></p>

        <table class="notes-table">
            <tr>
                <th>EmpID</th>
                <th>Name</th>
                <th>DeptID</th>
            </tr>
            <tr>
                <td>1</td>
                <td>A</td>
                <td>101</td>
            </tr>
            <tr>
                <td>2</td>
                <td>B</td>
                <td>102</td>
            </tr>
            <tr>
                <td>3</td>
                <td>C</td>
                <td>104</td>
            </tr>
        </table>

        <p><strong>Department</strong></p>

        <table class="notes-table">
            <tr>
                <th>DeptID</th>
                <th>DeptName</th>
            </tr>
            <tr>
                <td>101</td>
                <td>HR</td>
            </tr>
            <tr>
                <td>102</td>
                <td>Finance</td>
            </tr>
            <tr>
                <td>103</td>
                <td>Marketing</td>
            </tr>
        </table>

        <div class="code-box">
            <div class="code-title">
                <span>Full Outer Join Expression</span>
            </div>
            <pre><code>Employee ⟗<sub>Employee.DeptID = Department.DeptID</sub> Department</code></pre>
        </div>

        <p><strong>Result:</strong></p>

        <table class="notes-table">
            <tr>
                <th>EmpID</th>
                <th>Name</th>
                <th>DeptID</th>
                <th>DeptName</th>
            </tr>
            <tr>
                <td>1</td>
                <td>A</td>
                <td>101</td>
                <td>HR</td>
            </tr>
            <tr>
                <td>2</td>
                <td>B</td>
                <td>102</td>
                <td>Finance</td>
            </tr>
            <tr>
                <td>3</td>
                <td>C</td>
                <td>104</td>
                <td>NULL</td>
            </tr>
            <tr>
                <td>NULL</td>
                <td>NULL</td>
                <td>103</td>
                <td>Marketing</td>
            </tr>
        </table>

        <p>
            The result contains all employees and all departments. For
            unmatched records, <strong>NULL</strong> is used for the
            missing values.
        </p>


        <h4>Quick Comparison of Outer Joins</h4>

        <table class="notes-table">
            <tr>
                <th>Join Type</th>
                <th>Records Preserved</th>
                <th>Unmatched Records</th>
            </tr>
            <tr>
                <td>Left Outer Join</td>
                <td>All records from left table</td>
                <td>Unmatched right-side values become NULL</td>
            </tr>
            <tr>
                <td>Right Outer Join</td>
                <td>All records from right table</td>
                <td>Unmatched left-side values become NULL</td>
            </tr>
            <tr>
                <td>Full Outer Join</td>
                <td>All records from both tables</td>
                <td>Missing values become NULL</td>
            </tr>
        </table>

`;

const intersectionOperationContent = `

    <div class="notes_text">

        <h3>Intersection Operation</h3>

        <p>
            <strong>Intersection</strong> is a derived relational algebra
            operation used to find the <strong>common tuples (rows)</strong>
            that exist in both relations.
        </p>

        <p>
            In simple words:
            <strong>Intersection returns only the common rows between two tables.</strong>
        </p>


        <h4>Intersection Symbol</h4>

        <div class="code-box">
            <div class="code-title">
                <span>Relational Algebra Notation</span>
            </div>
            <pre><code>R ∩ S</code></pre>
        </div>

        <p>Here:</p>

        <ul>
            <li><strong>R</strong> → First relation</li>
            <li><strong>S</strong> → Second relation</li>
            <li><strong>∩</strong> → Intersection operator</li>
        </ul>


        <h4>Example of Intersection</h4>

        <p><strong>Student_A</strong></p>

        <table class="notes-table">
            <tr>
                <th>StudentID</th>
                <th>Name</th>
            </tr>
            <tr>
                <td>101</td>
                <td>A</td>
            </tr>
            <tr>
                <td>102</td>
                <td>B</td>
            </tr>
            <tr>
                <td>103</td>
                <td>C</td>
            </tr>
            <tr>
                <td>104</td>
                <td>D</td>
            </tr>
        </table>

        <p><strong>Student_B</strong></p>

        <table class="notes-table">
            <tr>
                <th>StudentID</th>
                <th>Name</th>
            </tr>
            <tr>
                <td>102</td>
                <td>B</td>
            </tr>
            <tr>
                <td>103</td>
                <td>C</td>
            </tr>
            <tr>
                <td>105</td>
                <td>E</td>
            </tr>
        </table>

        <p>Apply the Intersection operation:</p>

        <div class="code-box">
            <div class="code-title">
                <span>Intersection Expression</span>
            </div>
            <pre><code>Student_A ∩ Student_B</code></pre>
        </div>

        <p><strong>Result:</strong></p>

        <table class="notes-table">
            <tr>
                <th>StudentID</th>
                <th>Name</th>
            </tr>
            <tr>
                <td>102</td>
                <td>B</td>
            </tr>
            <tr>
                <td>103</td>
                <td>C</td>
            </tr>
        </table>

        <p>
            Only the rows that are <strong>present in both relations</strong>
            are included in the result.
        </p>


        <h4>Conditions for Intersection</h4>

        <p>
            For Intersection to be performed, the two relations must be
            <strong>union compatible</strong>.
        </p>

        <p>This means:</p>

        <ol>
            <li>
                Both relations must have the
                <strong>same number of attributes (columns)</strong>.
            </li>
            <li>
                Corresponding attributes must have
                <strong>compatible data types/domains</strong>.
            </li>
        </ol>

        <p>For example:</p>

        <div class="code-box">
            <pre><code>R(StudentID, Name)
S(StudentID, Name)</code></pre>
        </div>

        <p>
            These relations can be intersected because they have the same
            number of attributes with compatible domains.
        </p>

        <p>
            But the following relations cannot be directly intersected:
        </p>

        <div class="code-box">
            <pre><code>R(StudentID, Name)

S(StudentID, Name, Age)</code></pre>
        </div>

        <p>
            because they have a different number of attributes.
        </p>


        <h4>Intersection as a Derived Operation</h4>

        <p>
            Intersection is a <strong>derived operation</strong> because it
            can be obtained using basic relational algebra operations.
        </p>

        <p>
            It can be expressed using the <strong>Set Difference (-)</strong>
            operation:
        </p>

        <div class="code-box">
            <div class="code-title">
                <span>Intersection Using Set Difference</span>
            </div>
            <pre><code>R ∩ S = R - (R - S)</code></pre>
        </div>

        <p>
            Therefore, the Intersection operation can be derived from the
            basic <strong>Set Difference</strong> operation.
        </p>


        <h4>Intersection in Set Theory</h4>

        <p>
            Intersection follows the same concept as mathematical sets.
        </p>

        <div class="code-box">
            <pre><code>A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

A ∩ B = {3, 4}</code></pre>
        </div>

        <p>
            Similarly, in relational algebra:
        </p>

        <div class="code-box">
            <pre><code>Relation R ∩ Relation S
        ↓
Common tuples only</code></pre>
        </div>


        <h4>Intersection in SQL</h4>

        <p>
            SQL provides the <strong>INTERSECT</strong> operator to find
            common rows between two query results.
        </p>

        <div class="code-box">
            <div class="code-title">
                <span>SQL Example</span>
            </div>
            <pre><code>SELECT StudentID, Name
FROM Student_A

INTERSECT

SELECT StudentID, Name
FROM Student_B;</code></pre>
        </div>

        <p><strong>Result:</strong></p>

        <table class="notes-table">
            <tr>
                <th>StudentID</th>
                <th>Name</th>
            </tr>
            <tr>
                <td>102</td>
                <td>B</td>
            </tr>
            <tr>
                <td>103</td>
                <td>C</td>
            </tr>
        </table>


        <h4>Key Points</h4>

        <ul>
            <li>
                Intersection finds the <strong>common tuples</strong>
                between two relations.
            </li>
            <li>It is represented by the symbol <strong>∩</strong>.</li>
            <li>
                The relations must be <strong>union compatible</strong>.
            </li>
            <li>
                It is a <strong>derived relational algebra operation</strong>.
            </li>
            <li>
                It can be derived using the <strong>Set Difference</strong>
                operation.
            </li>
            <li>
                In SQL, the equivalent operation is
                <strong>INTERSECT</strong>.
            </li>
        </ul>


        <h4> Definition</h4>

        <p>
            <strong>
                Intersection operation returns only those tuples that are
                common to both relations. It is represented by the symbol
                ∩, and the relations must be union compatible.
            </strong>
        </p>

    </div>

`;

const divisionOperationContent = `

    <div class="notes_text">

        <h3>Division Operation (÷)</h3>

        <p>
            <strong>Division</strong> is a derived relational algebra operation
            used to find tuples in one relation that are associated with
            <strong>all tuples</strong> of another relation.
        </p>

        <p>
            In simple words:
            <strong>
                Division is used when we want to find entities that satisfy
                a condition for all related values.
            </strong>
        </p>


        <h4>Division Symbol</h4>

        <div class="code-box">
            <div class="code-title">
                <span>Relational Algebra Notation</span>
            </div>
            <pre><code>R ÷ S</code></pre>
        </div>

        <p>Here:</p>

        <ul>
            <li><strong>R</strong> → Dividend relation</li>
            <li><strong>S</strong> → Divisor relation</li>
            <li><strong>÷</strong> → Division operator</li>
        </ul>


        <h4>When is Division Used?</h4>

        <p>
            Division is mainly used for queries involving the word
            <strong>"all"</strong>.
        </p>

        <p>For example:</p>

        <ul>
            <li>Find students who completed <strong>all courses</strong>.</li>
            <li>Find employees who work on <strong>all projects</strong>.</li>
            <li>Find suppliers who supply <strong>all products</strong>.</li>
        </ul>


        <h4>Example of Division</h4>

        <p>
            Suppose we have a relation called
            <strong>StudentCourse</strong>.
        </p>

        <p><strong>StudentCourse (Student, Course)</strong></p>

        <table class="notes-table">
            <tr>
                <th>Student</th>
                <th>Course</th>
            </tr>
            <tr>
                <td>A</td>
                <td>DBMS</td>
            </tr>
            <tr>
                <td>A</td>
                <td>Java</td>
            </tr>
            <tr>
                <td>A</td>
                <td>Python</td>
            </tr>
            <tr>
                <td>B</td>
                <td>DBMS</td>
            </tr>
            <tr>
                <td>B</td>
                <td>Java</td>
            </tr>
            <tr>
                <td>C</td>
                <td>DBMS</td>
            </tr>
        </table>

        <p>
            Now suppose we have another relation containing the courses
            that are required:
        </p>

        <p><strong>RequiredCourse (Course)</strong></p>

        <table class="notes-table">
            <tr>
                <th>Course</th>
            </tr>
            <tr>
                <td>DBMS</td>
            </tr>
            <tr>
                <td>Java</td>
            </tr>
        </table>

        <p>
            We want to find:
            <strong>
                "Students who have completed all required courses."
            </strong>
        </p>


        <h4>Division Expression</h4>

        <div class="code-box">
            <div class="code-title">
                <span>Relational Algebra Expression</span>
            </div>
            <pre><code>StudentCourse ÷ RequiredCourse</code></pre>
        </div>

        <p><strong>Result:</strong></p>

        <table class="notes-table">
            <tr>
                <th>Student</th>
            </tr>
            <tr>
                <td>A</td>
            </tr>
            <tr>
                <td>B</td>
            </tr>
        </table>

        <p>
            <strong>A</strong> completed both DBMS and Java, so A is included.
        </p>

        <p>
            <strong>B</strong> also completed both DBMS and Java, so B is
            included.
        </p>

        <p>
            <strong>C</strong> completed only DBMS, so C is not included
            because C did not complete <strong>all</strong> required courses.
        </p>


        <h4>How Division Works</h4>

        <p>
            Suppose:
        </p>

        <div class="code-box">
            <pre><code>R(Student, Course)
S(Course)</code></pre>
        </div>

        <p>
            When we perform:
        </p>

        <div class="code-box">
            <pre><code>R ÷ S</code></pre>
        </div>

        <p>
            the result contains the <strong>Student</strong> values that are
            associated with <strong>every Course</strong> present in S.
        </p>

        <div class="code-box">
            <pre><code>R(Student, Course)
        ÷
S(Course)
        ↓
Students associated with ALL courses in S</code></pre>
        </div>


        <h4>Important Point</h4>

        <p>
            Division does not simply mean dividing numbers. In relational
            algebra, it is used to answer queries involving
            <strong>"for all"</strong>.
        </p>

        <p>
            For example:
        </p>

        <div class="code-box">
            <pre><code>StudentCourse ÷ RequiredCourse</code></pre>
        </div>

        <p>
            means:
            <strong>
                Find students who have completed every course listed in
                RequiredCourse.
            </strong>
        </p>


        <h4>Division Operation Using Basic Operations</h4>

        <p>
            Division is a <strong>derived operation</strong> because it can
            be expressed using basic relational algebra operations such as
            <strong>Cartesian Product, Difference, and Projection</strong>.
        </p>

        <p>
            The general expression for division is:
        </p>

        <div class="code-box">
            <div class="code-title">
                <span>Division Using Basic Operations</span>
            </div>
            <pre><code>R ÷ S =
π<sub>X</sub>(R) −
π<sub>X</sub>((π<sub>X</sub>(R) × S) − R)</code></pre>
        </div>

        <p>
            Here, <strong>X</strong> represents the attributes of R that are
            not present in S.
        </p>


        <h4>Another Example</h4>

        <p>
            Consider:
            <strong>EmployeeProject (Employee, Project)</strong>
        </p>

        <table class="notes-table">
            <tr>
                <th>Employee</th>
                <th>Project</th>
            </tr>
            <tr>
                <td>A</td>
                <td>P1</td>
            </tr>
            <tr>
                <td>A</td>
                <td>P2</td>
            </tr>
            <tr>
                <td>B</td>
                <td>P1</td>
            </tr>
            <tr>
                <td>B</td>
                <td>P2</td>
            </tr>
            <tr>
                <td>B</td>
                <td>P3</td>
            </tr>
            <tr>
                <td>C</td>
                <td>P1</td>
            </tr>
        </table>

        <p><strong>RequiredProject</strong></p>

        <table class="notes-table">
            <tr>
                <th>Project</th>
            </tr>
            <tr>
                <td>P1</td>
            </tr>
            <tr>
                <td>P2</td>
            </tr>
        </table>

        <p>
            Find employees who work on <strong>all required projects</strong>.
        </p>

        <div class="code-box">
            <pre><code>EmployeeProject ÷ RequiredProject</code></pre>
        </div>

        <p><strong>Result:</strong></p>

        <table class="notes-table">
            <tr>
                <th>Employee</th>
            </tr>
            <tr>
                <td>A</td>
            </tr>
            <tr>
                <td>B</td>
            </tr>
        </table>

        <p>
            Employee A works on P1 and P2, and Employee B also works on P1
            and P2. Therefore, both satisfy the <strong>"all"</strong>
            condition.
        </p>


        <h4>Key Points</h4>

        <ul>
            <li>
                Division is a <strong>derived relational algebra operation</strong>.
            </li>
            <li>
                It is represented by the symbol <strong>÷</strong>.
            </li>
            <li>
                It is mainly used for queries involving
                <strong>"all"</strong>.
            </li>
            <li>
                The result contains values from the first relation that are
                related to <strong>every value</strong> in the second relation.
            </li>
            <li>
                It can be derived using
                <strong>Projection, Cartesian Product, and Difference</strong>.
            </li>
        </ul>


        <h4> Definition</h4>

        <p>
            <strong>
                Division operation finds those tuples from one relation that
                are associated with every tuple of another relation. It is
                mainly used to answer queries involving the word "all".
            </strong>
        </p>

    </div>

`;

const historyOfSQLContent = `

    <div class="notes_text">

        <h3>History of SQL</h3>

        <p>
            <strong>SQL (Structured Query Language)</strong> is a standard
            language used to communicate with and manage relational databases.
        </p>

        <p>
            SQL is used to create, retrieve, insert, update, and delete data
            from relational databases.
        </p>


        <h4>Beginning of SQL</h4>

        <p>
            The history of SQL began in the <strong>1970s</strong> at
            <strong>IBM</strong>. The development of SQL was based on the
            relational database model proposed by
            <strong>Dr. Edgar F. Codd</strong>.
        </p>

        <p>
            In <strong>1970</strong>, Edgar F. Codd introduced the
            <strong>Relational Model of Data</strong>. This model became the
            foundation of modern relational database systems.
        </p>


        <h4>SEQUEL</h4>

        <p>
            In the early 1970s, IBM researchers
            <strong>Donald D. Chamberlin</strong> and
            <strong>Raymond F. Boyce</strong> developed a language called
            <strong>SEQUEL</strong>.
        </p>

        <p>
            SEQUEL originally stood for
            <strong>Structured English QUEry Language</strong>.
        </p>

        <p>
            It was designed to provide an easy way to access and manipulate
            data stored in relational databases.
        </p>


        <h4>System R</h4>

        <p>
            IBM developed an experimental relational database management
            system called <strong>System R</strong>.
        </p>

        <p>
            SEQUEL was used with System R to test the practical implementation
            of the relational database model.
        </p>

        <p>
            Later, the name <strong>SEQUEL</strong> was shortened to
            <strong>SQL</strong>.
        </p>


        <h4>SQL Becomes Popular</h4>

        <p>
            During the late 1970s and early 1980s, SQL became increasingly
            popular with the development of relational database systems.
        </p>

        <p>
            SQL-based database systems were introduced commercially, helping
            SQL become widely used in business applications.
        </p>


        <h4>ANSI and ISO Standardization</h4>

        <p>
            As different database vendors started using SQL, there was a need
            for a common standard.
        </p>

        <p>
            In <strong>1986</strong>, ANSI adopted SQL as a standard.
        </p>

        <p>
            In <strong>1987</strong>, ISO also adopted SQL as an international
            standard.
        </p>


        <h4>Characteristics of SQL</h4>

        <p>
            SQL has several characteristics that make it useful for working
            with relational databases.
        </p>

        <ol>

            <li>
                <strong>Easy to Learn</strong>
                <p>
                    SQL uses simple and English-like commands such as
                    <strong>SELECT, INSERT, UPDATE</strong> and
                    <strong>DELETE</strong>, making it relatively easy for
                    beginners to learn.
                </p>
            </li>

            <li>
                <strong>Declarative Language</strong>
                <p>
                    SQL is mainly a declarative language. The user specifies
                    <strong>what data is required</strong>, rather than
                    describing every step of how to retrieve it.
                </p>
            </li>

            <li>
                <strong>Works with Relational Databases</strong>
                <p>
                    SQL is primarily designed to work with
                    <strong>relational database management systems (RDBMS)</strong>.
                </p>
            </li>

            <li>
                <strong>Data Definition</strong>
                <p>
                    SQL can be used to create and modify database structures
                    using commands such as <strong>CREATE, ALTER</strong> and
                    <strong>DROP</strong>.
                </p>
            </li>

            <li>
                <strong>Data Manipulation</strong>
                <p>
                    SQL allows users to insert, modify, and delete data using
                    commands such as <strong>INSERT, UPDATE</strong> and
                    <strong>DELETE</strong>.
                </p>
            </li>

            <li>
                <strong>Data Retrieval</strong>
                <p>
                    SQL provides the <strong>SELECT</strong> statement for
                    retrieving required data from one or more tables.
                </p>
            </li>

            <li>
                <strong>Data Security</strong>
                <p>
                    SQL supports database security by providing commands for
                    controlling user permissions and access to database
                    objects.
                </p>
            </li>

            <li>
                <strong>Transaction Management</strong>
                <p>
                    SQL supports transaction management using commands such as
                    <strong>COMMIT</strong> and <strong>ROLLBACK</strong>.
                </p>
            </li>

            <li>
                <strong>Supports Multiple Tables</strong>
                <p>
                    SQL can retrieve and combine data from multiple tables
                    using operations such as <strong>JOIN</strong>.
                </p>
            </li>

            <li>
                <strong>Standardized Language</strong>
                <p>
                    SQL is standardized by organizations such as
                    <strong>ANSI</strong> and <strong>ISO</strong>.
                </p>
            </li>

        </ol>


        <h4>Advantages of SQL</h4>

        <p>
            SQL provides several advantages for database developers,
            administrators, and users.
        </p>

        <ol>

            <li>
                <strong>Easy to Use</strong>
                <p>
                    SQL commands are written using English-like keywords,
                    making SQL comparatively easy to understand and use.
                </p>
            </li>

            <li>
                <strong>Fast Data Retrieval</strong>
                <p>
                    SQL allows users to quickly retrieve required information
                    from large databases using queries.
                </p>
            </li>

            <li>
                <strong>Easy Data Manipulation</strong>
                <p>
                    SQL provides simple commands for inserting, updating,
                    deleting, and retrieving data.
                </p>
            </li>

            <li>
                <strong>Data Security</strong>
                <p>
                    SQL supports authorization and access control, allowing
                    administrators to control what users can access or modify.
                </p>
            </li>

            <li>
                <strong>Reduced Development Time</strong>
                <p>
                    SQL provides predefined commands for common database
                    operations, reducing the amount of code developers need
                    to write.
                </p>
            </li>

            <li>
                <strong>Supports Large Databases</strong>
                <p>
                    SQL-based database systems can manage and process large
                    amounts of structured data.
                </p>
            </li>

            <li>
                <strong>Portability</strong>
                <p>
                    SQL is standardized, so basic SQL knowledge can be used
                    across different relational database systems, although
                    specific syntax and features may vary.
                </p>
            </li>

            <li>
                <strong>Data Integrity</strong>
                <p>
                    SQL supports constraints such as
                    <strong>PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL</strong>
                    and <strong>CHECK</strong> to help maintain accurate and
                    consistent data.
                </p>
            </li>

            <li>
                <strong>Transaction Management</strong>
                <p>
                    SQL supports transactions that help maintain database
                    consistency when multiple operations are performed.
                </p>
            </li>

            <li>
                <strong>Widely Supported</strong>
                <p>
                    SQL is supported by many popular database systems such as
                    <strong>MySQL, Oracle Database, Microsoft SQL Server,
                    PostgreSQL</strong> and <strong>SQLite</strong>.
                </p>
            </li>

        </ol>


        <h4>Characteristics vs Advantages of SQL</h4>

        <table class="notes-table">

            <tr>
                <th>Characteristics</th>
                <th>Advantages</th>
            </tr>

            <tr>
                <td>SQL is declarative.</td>
                <td>Users can specify what data they need without describing every processing step.</td>
            </tr>

            <tr>
                <td>SQL supports data retrieval.</td>
                <td>Required information can be retrieved quickly using queries.</td>
            </tr>

            <tr>
                <td>SQL supports data manipulation.</td>
                <td>Data can be easily inserted, updated, and deleted.</td>
            </tr>

            <tr>
                <td>SQL supports security.</td>
                <td>User access and permissions can be controlled.</td>
            </tr>

            <tr>
                <td>SQL is standardized.</td>
                <td>Basic SQL knowledge can be applied across many RDBMSs.</td>
            </tr>

        </table>


        <h4> Summary</h4>

        <p>
            <strong>
                SQL is an easy-to-use, declarative, and standardized language
                for managing relational databases. It allows users to create
                database structures, retrieve and manipulate data, manage
                transactions, maintain data integrity, and control database
                access.
            </strong>
        </p>

    </div>

`;

const literalsInSQLContent = `

    <div class="notes_text">

        <h3>Literals in SQL</h3>

        <p>
            A <strong>literal</strong> in SQL is a fixed value that is written
            directly in an SQL statement.
        </p>

        <p>
            In simple words:
            <strong>
                A literal is a constant value that is directly specified in
                an SQL query.
            </strong>
        </p>

        <p>
            Literals are used to provide values for comparison, insertion,
            calculations, conditions, and other database operations.
        </p>


        <h4>Example</h4>

        <div class="code-box">
            <div class="code-title">
                <span>SQL Literal Example</span>
            </div>
            <pre><code>SELECT *
FROM Student
WHERE Age = 20;</code></pre>
        </div>

        <p>
            Here, <strong>20</strong> is a numeric literal because it is a
            fixed value directly written in the SQL statement.
        </p>


        <h4>Types of Literals in SQL</h4>

        <p>
            Common types of SQL literals include:
        </p>

        <ol>
            <li>Numeric Literals</li>
            <li>Character/String Literals</li>
            <li>Date and Time Literals</li>
            <li>Boolean Literals</li>
            <li>NULL Literal</li>
            <li>Binary Literals</li>
        </ol>


        <h4>1. Numeric Literals</h4>

        <p>
            Numeric literals represent <strong>numbers</strong> in SQL.
            They can be integers or decimal values.
        </p>

        <div class="code-box">
            <div class="code-title">
                <span>Examples</span>
            </div>
            <pre><code>10
250
-50
25.5
3.14</code></pre>
        </div>

        <p>Example in a query:</p>

<div class="code-box">
    <div class="code-title">SQL Example</div>

    <pre><code><span class="keyword">SELECT</span> *
<span class="keyword">FROM</span> Student
<span class="keyword">WHERE</span> Marks &gt;= <span class="number">50</span>;</code></pre>
</div>

        <p>
            Here, <strong>50</strong> is a numeric literal.
        </p>


        <h4>2. Character / String Literals</h4>

        <p>
            Character or string literals represent
            <strong>text values</strong>.
        </p>

        <p>
            String values are generally enclosed in
            <strong>single quotes (' ')</strong>.
        </p>

        <div class="code-box">
            <div class="code-title">
                <span>Examples</span>
            </div>
            <pre><code>'Pradeep'
'Computer Science'
'India'
'BCA'</code></pre>
        </div>

        <p>Example:</p>
<div class="code-box">
    <pre><code><span class="keyword">SELECT</span> *
<span class="keyword">FROM</span> Student
<span class="keyword">WHERE</span> Name = <span class="string">'Amit'</span>;</code></pre>
</div>

        <p>
            Here, <strong>'Amit'</strong> is a string literal.
        </p>


        <h4>3. Date and Time Literals</h4>

        <p>
            Date and time literals represent
            <strong>date, time, or timestamp values</strong>.
        </p>

        <p>
            The exact literal syntax can vary between SQL implementations.
        </p>

<div class="code-box">
    <div class="code-title">
        <span>Examples</span>
    </div>

    <pre><code><span class="keyword">DATE</span> <span class="string">'2026-08-11'</span>
<span class="keyword">TIME</span> <span class="string">'10:30:00'</span>
<span class="keyword">TIMESTAMP</span> <span class="string">'2026-08-11 10:30:00'</span></code></pre>
</div>

        <p>Example:</p>
<div class="code-box">
    <pre><code><span class="keyword">SELECT</span> *
<span class="keyword">FROM</span> Student
<span class="keyword">WHERE</span> AdmissionDate = <span class="keyword">DATE</span> <span class="string">'2026-08-11'</span>;</code></pre>
</div>


        <h4>4. Boolean Literals</h4>

        <p>
            Boolean literals represent logical values such as
            <strong>TRUE</strong> and <strong>FALSE</strong>.
        </p>

<div class="code-box">
    <div class="code-title">
        <span>Examples</span>
    </div>

    <pre><code><span class="keyword">TRUE</span>
<span class="keyword">FALSE</span></code></pre>
</div>

        <p>
            Example:
        </p>

<div class="code-box">
    <pre><code><span class="keyword">SELECT</span> *
<span class="keyword">FROM</span> Student
<span class="keyword">WHERE</span> IsActive = <span class="keyword">TRUE</span>;</code></pre>
</div>

        <p>
            <strong>Note:</strong> Boolean support and syntax can differ
            between database systems.
        </p>


        <h4>5. NULL Literal</h4>

        <p>
            <strong>NULL</strong> represents the absence of a value or an
            unknown value.
        </p>

<div class="code-box">
    <div class="code-title">
        <span>Example</span>
    </div>

    <pre><code><span class="keyword">INSERT INTO</span> Student (StudentID, Name, Email)
<span class="keyword">VALUES</span> (<span class="number">101</span>, <span class="string">'Amit'</span>, <span class="keyword">NULL</span>);</code></pre>
</div>

        <p>
            Here, <strong>NULL</strong> indicates that the Email value is
            not available.
        </p>

        <p>
            <strong>Important:</strong> NULL should not normally be compared
            using <strong>=</strong>. Use <strong>IS NULL</strong> or
            <strong>IS NOT NULL</strong>.
        </p>

<div class="code-box">
    <pre><code><span class="keyword">SELECT</span> *
<span class="keyword">FROM</span> Student
<span class="keyword">WHERE</span> Email <span class="keyword">IS NULL</span>;</code></pre>
</div>


        <h4>6. Binary Literals</h4>

        <p>
            Binary literals are used to represent
            <strong>binary or byte data</strong>.
        </p>

        <p>
            Their syntax depends on the database system.
        </p>

<div class="code-box">
    <div class="code-title">
        <span>Example</span>
    </div>

    <pre><code><span class="keyword">X</span><span class="string">'48656C6C6F'</span></code></pre>
</div>

        <p>
            The above represents binary data using hexadecimal notation in
            SQL systems that support this standard-style syntax.
        </p>


        <h4>Literal vs Column Value</h4>

        <p>
            A literal is a value written directly in the SQL statement,
            whereas a column value comes from a row stored in the database.
        </p>

<div class="code-box">
    <pre><code><span class="keyword">SELECT</span> *
<span class="keyword">FROM</span> Student
<span class="keyword">WHERE</span> Age = <span class="number">20</span>;</code></pre>
</div>

        <p>
            Here:
        </p>

        <ul>
            <li><strong>Age</strong> → Column</li>
            <li><strong>20</strong> → Literal</li>
            <li><strong>=</strong> → Comparison operator</li>
        </ul>


        <h4>Literal Examples in SQL</h4>

        <table class="notes-table">

            <tr>
                <th>Literal Type</th>
                <th>Example</th>
                <th>Meaning</th>
            </tr>

            <tr>
                <td>Numeric</td>
                <td>100</td>
                <td>Number</td>
            </tr>

            <tr>
                <td>Decimal</td>
                <td>25.50</td>
                <td>Decimal number</td>
            </tr>

            <tr>
                <td>String</td>
                <td>'BCA'</td>
                <td>Text value</td>
            </tr>

            <tr>
                <td>Date</td>
                <td>DATE '2026-08-11'</td>
                <td>Date value</td>
            </tr>

            <tr>
                <td>Time</td>
                <td>TIME '10:30:00'</td>
                <td>Time value</td>
            </tr>

            <tr>
                <td>Boolean</td>
                <td>TRUE</td>
                <td>Logical value</td>
            </tr>

            <tr>
                <td>NULL</td>
                <td>NULL</td>
                <td>Missing/unknown value</td>
            </tr>

            <tr>
                <td>Binary</td>
                <td>X'48656C6C6F'</td>
                <td>Binary data</td>
            </tr>

        </table>


        <h4> Definition</h4>

        <p>
            <strong>
                A literal in SQL is a fixed value directly written in an SQL
                statement. Examples include numbers such as 100, strings such
                as 'BCA', dates, Boolean values, and NULL.
            </strong>
        </p>

    </div>

`;