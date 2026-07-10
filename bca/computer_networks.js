let dataCommunicationIntroContent = `

<h3>Introduction to Data Communication</h3>

<p>
<strong>Data Communication</strong> is the process of exchanging data or information between two or more devices through a communication channel. The communication channel may be a wired medium such as twisted pair cable, coaxial cable, and optical fiber, or a wireless medium such as radio waves, Wi-Fi, and satellite communication.
</p>

<p>
In simple words, data communication allows computers, mobile phones, servers, and other electronic devices to send and receive information from one another. Whenever you send a message on WhatsApp, browse a website, make a video call, or transfer a file, data communication takes place.
</p>

<p>
The main objective of data communication is to transfer information accurately, efficiently, and securely from one device to another. Modern communication systems such as the Internet, banking networks, mobile networks, and cloud computing rely heavily on data communication.
</p>

    <img src="bca_images/data_comm.png" alt="Data and Signals - Analog and Digital"  style="max-width: 100%; height: auto; border-radius: 6px;">

<h4>Definition of Data Communication</h4>

<p>
Data Communication is the exchange of digital or analog data between two or more devices through a transmission medium using a set of rules known as protocols.
</p>

<h4>Need for Data Communication</h4>

<ul>
    <li>To share information between users and devices.</li>
    <li>To access Internet services and online applications.</li>
    <li>To exchange files, images, audio, and video.</li>
    <li>To support communication through emails, chats, and video conferencing.</li>
    <li>To enable resource sharing such as printers, databases, and storage devices.</li>
    <li>To support business, education, banking, healthcare, and government services.</li>
</ul>

<h4>Components of Data Communication</h4>
<img src="bca_images/5-component.png" 
     alt="5 Components of Data Communication Diagram" 
   class="notes_img"
     >
<p>
A successful data communication system consists of the following five basic components:
</p>

<ul>
    <li><strong>Sender:</strong> The device that sends the data. Example: Computer, mobile phone, or server.</li>

    <li><strong>Receiver:</strong> The device that receives the data sent by the sender.</li>

    <li><strong>Message:</strong> The actual information being transmitted, such as text, image, audio, video, or files.</li>

    <li><strong>Transmission Medium:</strong> The path through which data travels from sender to receiver. Examples include cables, optical fiber, Wi-Fi, and radio waves.</li>

    <li><strong>Protocol:</strong> A set of rules that governs communication between devices. Example: TCP/IP, HTTP, FTP.</li>
</ul>

<h4>Characteristics of Effective Data Communication</h4>

<p>
For a communication system to be successful, it should possess the following characteristics:
</p>

<ul>
    <li>
        <strong>Delivery:</strong> Data must reach the correct destination device.
    </li>

    <li>
        <strong>Accuracy:</strong> Data should be delivered without errors or corruption.
    </li>

    <li>
        <strong>Timeliness:</strong> Data should arrive on time, especially in real-time applications such as video conferencing.
    </li>

    <li>
        <strong>Low Jitter:</strong> The variation in packet arrival time should be minimal for smooth audio and video communication.
    </li>
</ul>

<h4>Types of Data Communication</h4>

<ul>
    <li><strong>Simplex Communication:</strong> Data flows in only one direction. Example: Keyboard to Computer.</li>

    <li><strong>Half-Duplex Communication:</strong> Data flows in both directions, but only one direction at a time. Example: Walkie-Talkie.</li>

    <li><strong>Full-Duplex Communication:</strong> Data flows in both directions simultaneously. Example: Mobile Phone Calls.</li>
</ul>

<h4>Applications of Data Communication</h4>

<ul>
    <li>Internet and Web Browsing</li>
    <li>Email Communication</li>
    <li>Online Banking</li>
    <li>E-Commerce Websites</li>
    <li>Video Conferencing</li>
    <li>Social Media Platforms</li>
    <li>Cloud Computing Services</li>
    <li>Online Education Systems</li>
    <li>Mobile Communication Networks</li>
</ul>

<h4>Advantages of Data Communication</h4>

<ul>
    <li>Fast transfer of information.</li>
    <li>Easy sharing of resources and files.</li>
    <li>Supports global communication.</li>
    <li>Reduces communication costs.</li>
    <li>Improves productivity and collaboration.</li>
</ul>

<h4>Disadvantages of Data Communication</h4>

<ul>
    <li>Security and privacy risks.</li>
    <li>Network failures can interrupt communication.</li>
    <li>Requires proper infrastructure and maintenance.</li>
    <li>Possibility of data loss due to transmission errors.</li>
</ul>

<h4>Summary</h4>

<p>
<strong>Data Communication</strong> is the process of transferring data between two or more devices through a transmission medium using communication protocols. 
The five main components of data communication are Sender, Receiver, Message, Transmission Medium, and Protocol. 
The important characteristics of effective data communication are Delivery, Accuracy, Timeliness, and Low Jitter.
</p>



<p>
Data Communication forms the foundation of modern computer networks. It enables devices to exchange information efficiently through various communication channels. Understanding its components, characteristics, and applications is essential for studying computer networks and Internet technologies.
</p>

`;

let digitalAnalogContent = `


<h3>Data and Signals</h3>

<p>
    In a computer network, <strong>data</strong> is the information that needs to be transmitted from one device to another, while a <strong>signal</strong> is the electrical or electromagnetic representation of that data used during transmission.
</p>

<div class="image-box">
    <img  class="notes_img" src="bca_images/digital_anolog.png" alt="Data and Signals - Analog and Digital" class="notes-img">

    <p class="image-caption">
        <strong>Figure:</strong> Analog Data and Digital Data with their corresponding signals.
    </p>
</div>




<p>
    As shown in the above figure, data can be classified into two main types:
</p>

<ol>
    <li><strong>Analog Data</strong> – Continuous in nature.</li>
    <li><strong>Digital Data</strong> – Discrete in nature and represented using binary values (0 and 1).</li>
</ol>

<h4>Analog Data</h4>

<p>
    Analog data consists of continuously changing values. It can take an infinite number of values within a specific range. Examples include human voice, temperature, air pressure, and sound waves. When analog data is transmitted, it is represented using an <strong>analog signal</strong>, which has a smooth sine-wave shape.
</p>

<h4>Digital Data</h4>

<p>
    Digital data consists of discrete values and is represented using binary digits (<strong>0</strong> and <strong>1</strong>). Computers and digital devices understand only binary data. During transmission, digital data is represented by a <strong>digital signal</strong>, which appears as a series of square pulses with high and low voltage levels.
</p>

<div class="note">
    <strong>Observation from the Figure:</strong>
    <ul>
        <li>The left graph represents an <strong>Analog Signal</strong>, where the waveform changes continuously with time.</li>
        <li>The right graph represents a <strong>Digital Signal</strong>, where the waveform changes between two voltage levels (0 and 1).</li>
        <li>The horizontal axis (X-axis) represents <strong>Time</strong>.</li>
        <li>The vertical axis (Y-axis) represents the <strong>Signal Value (Amplitude)</strong>.</li>
    </ul>
</div>

<h3>Introduction to Transmission / Communication</h3>
<p>
    <strong>Transmission</strong> or <strong>Communication</strong> is the process of sending data, information, or messages from one device (called the <strong>sender</strong>) to another device (called the <strong>receiver</strong>) through a communication medium. Communication is one of the most important functions of a computer network because it enables devices to exchange information efficiently and accurately.
</p>

<p>
    In a computer network, communication takes place using a set of predefined rules known as <strong>protocols</strong>. The data may travel through a wired medium such as twisted-pair cable or optical fiber, or through a wireless medium such as Wi-Fi, Bluetooth, or satellite communication.
</p>

<p>
    The primary objective of data communication is to deliver information from the sender to the receiver with maximum accuracy, minimum delay, and high reliability.
</p>

<div class="note">
    <strong>Definition:</strong> Data communication is the exchange of digital or analog data between two or more devices through a transmission medium using communication protocols.
</div>

<hr>

<h3>Basic Components of Data Communication</h3>

<p>
    Every communication system consists of five essential components. Without these components, communication cannot be completed successfully.
</p>

<table class="notes-table">
    <thead>
        <tr>
            <th>Component</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Sender (Source)</strong></td>
            <td>The device that creates and sends the message.</td>
            <td>Computer, Mobile Phone</td>
        </tr>
        <tr>
            <td><strong>Receiver (Destination)</strong></td>
            <td>The device that receives the transmitted message.</td>
            <td>Laptop, Printer, Server</td>
        </tr>
        <tr>
            <td><strong>Message</strong></td>
            <td>The information or data being transmitted.</td>
            <td>Text, Image, Audio, Video</td>
        </tr>
        <tr>
            <td><strong>Transmission Medium</strong></td>
            <td>The physical or wireless path through which data travels.</td>
            <td>Wi-Fi, Optical Fiber, Ethernet Cable</td>
        </tr>
        <tr>
            <td><strong>Protocol</strong></td>
            <td>The set of rules that controls communication.</td>
            <td>TCP/IP, HTTP, FTP</td>
        </tr>
    </tbody>
</table>

<hr>

<h3>Characteristics of Effective Data Communication</h3>

<p>
    For communication to be considered successful, it should satisfy the following characteristics:
</p>

<ul>
    <li><strong>Delivery:</strong> Data should reach the correct destination.</li>

    <li><strong>Accuracy:</strong> The received data should be free from errors.</li>

    <li><strong>Timeliness:</strong> Data should arrive within the expected time.</li>

    <li><strong>Reliability:</strong> Communication should remain consistent without data loss.</li>

    <li><strong>Security:</strong> Data should be protected from unauthorized access.</li>
</ul>

<div class="note">
    <strong>Example:</strong> When you send a WhatsApp message, the message should reach the intended person (Delivery), without changes (Accuracy), instantly (Timeliness), every time (Reliability), and remain private (Security).
</div>

<hr>

<h3>Types of Data Transmission / Communication</h3>

<p>
    Based on the type of signal used to carry information, data transmission is classified into two major categories.
</p>

<ol>
    <li><strong>Analog Transmission</strong></li>
    <li><strong>Digital Transmission</strong></li>
</ol>

<p>
    Both transmission methods are widely used in communication systems. However, modern computer networks primarily use digital transmission because it provides better speed, reliability, and security.
</p>

<hr>

<h3>Analog Signal</h3>

<p>
    An <strong>Analog Signal</strong> is a continuous signal whose amplitude changes smoothly over time. It can have an infinite number of values within a given range. Analog signals are naturally generated by many physical phenomena, such as sound, temperature, and light.
</p>

<p>
    Since analog signals are continuous, they are more vulnerable to electrical noise and interference during transmission. As the transmission distance increases, the signal quality gradually decreases.
</p>

<h4>Characteristics of Analog Signals</h4>

<ul>
    <li>Continuous waveform.</li>

    <li>Infinite number of values.</li>

    <li>Usually represented by a sine wave.</li>

    <li>Highly affected by noise and interference.</li>

    <li>Signal quality decreases over long distances.</li>

    <li>Difficult to store and process accurately.</li>
</ul>

<h4>Examples of Analog Signals</h4>

<ul>
    <li>Human voice</li>

    <li>Traditional telephone system</li>

    <li>AM/FM Radio</li>

    <li>Analog Television</li>

    <li>Microphone output</li>
</ul>

<div class="note">
    <strong>Remember:</strong> Analog signals are continuous and can take any value between a minimum and maximum range.
</div>

<hr>

<h3>Digital Signal</h3>

<p>
    A <strong>Digital Signal</strong> is a discrete signal that represents information using only two values: <strong>0 (LOW)</strong> and <strong>1 (HIGH)</strong>. Computers and modern communication devices understand and process information in binary form; therefore, digital signals are widely used in today's networking systems.
</p>

<p>
    Digital signals are more resistant to noise and can be regenerated during transmission, making them ideal for long-distance communication.
</p>

<h4>Characteristics of Digital Signals</h4>

<ul>
    <li>Discrete signal.</li>

    <li>Represents data using binary values (0 and 1).</li>

    <li>Less affected by electrical noise.</li>

    <li>Easy to store, process, compress, and encrypt.</li>

    <li>Supports high-speed communication.</li>

    <li>Provides greater accuracy and reliability.</li>
</ul>

<h4>Examples of Digital Signals</h4>

<ul>
    <li>Computer Networks</li>

    <li>Internet</li>

    <li>Wi-Fi Communication</li>

    <li>USB Devices</li>

    <li>CD/DVD Storage</li>

    <li>Digital Television</li>
</ul>

<div class="note">
    <strong>Remember:</strong> Digital signals use only two voltage levels (0 and 1), making them more reliable than analog signals.
</div>

<hr>

<h3>Comparison Between Analog and Digital Signals</h3>

<table class="notes-table">
    <thead>
        <tr>
            <th>Basis</th>
            <th>Analog Signal</th>
            <th>Digital Signal</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Nature</td>
            <td>Continuous</td>
            <td>Discrete</td>
        </tr>

        <tr>
            <td>Values</td>
            <td>Infinite</td>
            <td>Only 0 and 1</td>
        </tr>

        <tr>
            <td>Waveform</td>
            <td>Sine Wave</td>
            <td>Square Wave</td>
        </tr>

        <tr>
            <td>Noise</td>
            <td>Highly affected</td>
            <td>Less affected</td>
        </tr>

        <tr>
            <td>Accuracy</td>
            <td>Lower</td>
            <td>Higher</td>
        </tr>

        <tr>
            <td>Transmission Quality</td>
            <td>Decreases over distance</td>
            <td>Can be regenerated</td>
        </tr>

        <tr>
            <td>Storage</td>
            <td>Difficult</td>
            <td>Easy</td>
        </tr>

        <tr>
            <td>Examples</td>
            <td>Radio, Telephone</td>
            <td>Computer, Internet, Wi-Fi</td>
        </tr>
    </tbody>
</table>

<div class="note">
    <strong>Exam Tip:</strong>
    Analog signals are continuous and represented by sine waves, whereas digital signals are discrete, represented by binary values (0 and 1), and are used in modern computer networks because they are faster, more reliable, and less affected by noise.
</div>
`

let transmissionModesContent = `

<h3>Parallel and Serial Transmission</h3>

<p>
In data communication, information is transferred from one device to another in the form of bits. A bit is the smallest unit of data and can have a value of either <strong>0</strong> or <strong>1</strong>.
</p>

<p>
Depending on how these bits are transmitted through a communication channel, data transmission can be classified into two main types:
</p>

<ul>
    <li><strong>Parallel Transmission</strong></li>
    <li><strong>Serial Transmission</strong></li>
</ul>

<p>
Both transmission methods are used in computer networks and communication systems, and each has its own advantages, disadvantages, and applications.
</p>

<h4>Parallel Transmission</h4>

<p>
<strong>Parallel Transmission</strong> is a method of data transmission in which multiple bits are transmitted simultaneously through multiple communication lines or channels.
</p>

<p>
In this method, each bit travels through a separate wire. For example, if 8 bits need to be transmitted, 8 separate communication lines are used so that all bits can be sent at the same time.
</p>

<p>
Because multiple bits are transmitted simultaneously, parallel transmission provides faster data transfer than serial transmission.
</p>

<h4>How Parallel Transmission Works</h4>

<p>
Suppose the binary data <strong>10110011</strong> is to be transmitted. In parallel transmission, all 8 bits are sent together through 8 different wires at the same time.
</p>

<p>
As a result, the receiver gets the entire byte in a single transmission cycle.
</p>

<h4>Examples of Parallel Transmission</h4>

<ul>
    <li>Communication between CPU and Memory.</li>
    <li>Old Printer Ports (Parallel Ports).</li>
    <li>Internal Computer Bus Systems.</li>
    <li>Data transfer inside computer hardware.</li>
</ul>

<h4>Advantages of Parallel Transmission</h4>

<ul>
    <li>Very high data transmission speed.</li>
    <li>Multiple bits are sent simultaneously.</li>
    <li>Suitable for transferring large amounts of data quickly.</li>
    <li>Efficient for short-distance communication.</li>
</ul>

<h4>Disadvantages of Parallel Transmission</h4>

<ul>
    <li>Requires multiple communication lines.</li>
    <li>Installation and maintenance costs are high.</li>
    <li>Signal interference may occur between wires.</li>
    <li>Not suitable for long-distance communication.</li>
    <li>More complex hardware design.</li>
</ul>

<h4>Applications of Parallel Transmission</h4>

<ul>
    <li>Computer motherboard communication.</li>
    <li>Memory systems.</li>
    <li>Old printer connections.</li>
    <li>Internal hardware communication.</li>
</ul>

<hr>

<h4>Serial Transmission</h4>

<p>
<strong>Serial Transmission</strong> is a method of data transmission in which bits are transmitted one after another through a single communication line.
</p>

<p>
Instead of sending multiple bits simultaneously, serial transmission sends one bit at a time in sequence until the entire message is transmitted.
</p>

<p>
Although serial transmission may appear slower, modern communication systems use very high transmission speeds, making serial communication the preferred method for long-distance communication.
</p>

<h4>How Serial Transmission Works</h4>

<p>
Suppose the binary data <strong>10110011</strong> needs to be transmitted. In serial transmission, each bit is sent one by one through a single communication channel:
</p>

<p>
1 → 0 → 1 → 1 → 0 → 0 → 1 → 1
</p>

<p>
The receiver collects these bits and reconstructs the original data.
</p>

<h4>Examples of Serial Transmission</h4>

<ul>
    <li>USB Communication.</li>
    <li>Internet Data Transfer.</li>
    <li>Ethernet Networks.</li>
    <li>Mobile Communication Networks.</li>
    <li>Wi-Fi Communication.</li>
    <li>Satellite Communication.</li>
</ul>

<h4>Advantages of Serial Transmission</h4>

<ul>
    <li>Requires only one communication channel.</li>
    <li>Low installation and maintenance cost.</li>
    <li>Suitable for long-distance communication.</li>
    <li>Less signal interference.</li>
    <li>Simple and reliable design.</li>
    <li>Widely used in modern communication systems.</li>
</ul>

<h4>Disadvantages of Serial Transmission</h4>

<ul>
    <li>Traditionally slower than parallel transmission.</li>
    <li>Bits are transmitted one at a time.</li>
    <li>Large amounts of data may require more transmission time.</li>
</ul>

<h4>Applications of Serial Transmission</h4>

<ul>
    <li>Computer Networks.</li>
    <li>Internet Communication.</li>
    <li>USB Devices.</li>
    <li>Mobile Networks.</li>
    <li>Wi-Fi Networks.</li>
    <li>Long-Distance Data Communication.</li>
</ul>

<hr>

<h4>Difference Between Parallel and Serial Transmission</h4>

<table class ="notes-table">

<tr>
    <th>Parallel Transmission</th>
    <th>Serial Transmission</th>
</tr>

<tr>
    <td>Multiple bits are transmitted simultaneously.</td>
    <td>Bits are transmitted one after another.</td>
</tr>

<tr>
    <td>Uses multiple communication lines.</td>
    <td>Uses a single communication line.</td>
</tr>

<tr>
    <td>Provides faster transmission speed.</td>
    <td>Comparatively slower transmission.</td>
</tr>

<tr>
    <td>More expensive.</td>
    <td>Less expensive.</td>
</tr>

<tr>
    <td>Suitable for short distances.</td>
    <td>Suitable for long distances.</td>
</tr>

<tr>
    <td>Signal interference is higher.</td>
    <td>Signal interference is lower.</td>
</tr>

<tr>
    <td>Complex hardware design.</td>
    <td>Simple hardware design.</td>
</tr>

<tr>
    <td>Used in internal computer communication.</td>
    <td>Used in networks and communication systems.</td>
</tr>

</table>

<h4>Real-Life Example</h4>

<p>
Imagine eight students delivering eight different messages at the same time. This represents <strong>Parallel Transmission</strong> because all messages are delivered simultaneously.
</p>

<p>
Now imagine only one student delivering the messages one by one. This represents <strong>Serial Transmission</strong> because messages are sent sequentially through a single path.
</p>

<h4>Summary</h4>

<p>
<strong>Parallel Transmission</strong> transmits multiple bits simultaneously through multiple communication lines, making it faster but more expensive and suitable for short distances.
</p>

<p>
<strong>Serial Transmission</strong> transmits bits one after another through a single communication line, making it cost-effective, reliable, and suitable for long-distance communication.
</p>

<p>
Parallel and Serial Transmission are two important methods of data transfer in computer networks. Parallel transmission offers high speed for short distances, while serial transmission provides reliable and economical communication over long distances. Modern communication systems such as USB, Ethernet, Wi-Fi, and the Internet primarily use serial transmission.
</p>

`;

let synchronizationContent = `

<h3>Synchronous and Asynchronous Transmission</h3>

<p>
In data communication, synchronization refers to the coordination between the sender and receiver during data transmission. For successful communication, both devices must know when data transmission starts, when it ends, and how the transmitted bits should be interpreted.
</p>

<p>
Based on the method used to synchronize data transmission, communication can be classified into two types:
</p>

<ul>
    <li><strong>Synchronous Transmission</strong></li>
    <li><strong>Asynchronous Transmission</strong></li>
</ul>

<p>
Both methods are widely used in computer networks and communication systems depending on the amount of data being transmitted and the required transmission speed.
</p>

<h4>Synchronous Transmission</h4>

<p>
<strong>Synchronous Transmission</strong> is a method of data transmission in which the sender and receiver are synchronized using a common clock signal. Data is transmitted continuously in the form of blocks or frames without using start and stop bits for each character.
</p>

<p>
Since both devices operate according to the same timing mechanism, data can be transferred at very high speed and with greater efficiency.
</p>

<h4>How Synchronous Transmission Works</h4>

<p>
In synchronous transmission, a clock signal is used to synchronize the sender and receiver. The sender continuously sends a stream of data bits, and the receiver reads the incoming bits according to the same clock timing.
</p>

<p>
Instead of transmitting one character at a time, large blocks of data are transmitted together, reducing transmission overhead.
</p>

<h4>Features of Synchronous Transmission</h4>

<ul>
    <li>Uses a common clock signal.</li>
    <li>Data is transmitted continuously.</li>
    <li>Data is sent in blocks or frames.</li>
    <li>No start and stop bits for every character.</li>
    <li>Provides high-speed communication.</li>
    <li>Suitable for large-volume data transfer.</li>
</ul>

<h4>Advantages of Synchronous Transmission</h4>

<ul>
    <li>Very high transmission speed.</li>
    <li>Efficient for transferring large amounts of data.</li>
    <li>Less transmission overhead.</li>
    <li>Better utilization of communication channels.</li>
    <li>Suitable for modern networking systems.</li>
</ul>

<h4>Disadvantages of Synchronous Transmission</h4>

<ul>
    <li>Requires synchronization between sender and receiver.</li>
    <li>More complex hardware and software.</li>
    <li>Higher implementation cost.</li>
    <li>Difficult to manage in simple communication systems.</li>
</ul>

<h4>Examples of Synchronous Transmission</h4>

<ul>
    <li>Ethernet Networks</li>
    <li>High-Speed Computer Networks</li>
    <li>Data Communication Between Servers</li>
    <li>Broadband Internet Communication</li>
    <li>Real-Time Data Transfer Systems</li>
</ul>

<hr>

<h4>Asynchronous Transmission</h4>

<p>
<strong>Asynchronous Transmission</strong> is a method of data transmission in which data is transmitted one character or byte at a time. Each character is surrounded by a <strong>start bit</strong> and one or more <strong>stop bits</strong> to indicate the beginning and end of transmission.
</p>

<p>
In this method, there is no common clock signal between the sender and receiver. Synchronization is achieved using start and stop bits.
</p>

<h4>How Asynchronous Transmission Works</h4>

<p>
Whenever a character is transmitted, a start bit is placed before the character and a stop bit is placed after it. These additional bits help the receiver identify the beginning and end of each character.
</p>

<p>
For example, if the letter 'A' is transmitted, the actual transmission includes:
</p>

<p>
Start Bit → Character Data → Stop Bit
</p>

<p>
This process is repeated for every character transmitted.
</p>

<h4>Features of Asynchronous Transmission</h4>

<ul>
    <li>No common clock signal is required.</li>
    <li>Data is transmitted one character at a time.</li>
    <li>Uses start and stop bits.</li>
    <li>Simple communication process.</li>
    <li>Suitable for irregular data transmission.</li>
</ul>

<h4>Advantages of Asynchronous Transmission</h4>

<ul>
    <li>Simple implementation.</li>
    <li>Low hardware cost.</li>
    <li>No synchronization clock required.</li>
    <li>Suitable for small amounts of data.</li>
    <li>Easy to manage and maintain.</li>
</ul>

<h4>Disadvantages of Asynchronous Transmission</h4>

<ul>
    <li>Lower transmission speed.</li>
    <li>Additional start and stop bits increase overhead.</li>
    <li>Less efficient for large data transfer.</li>
    <li>Communication channel utilization is lower.</li>
</ul>

<h4>Examples of Asynchronous Transmission</h4>

<ul>
    <li>Keyboard Communication</li>
    <li>Serial Port Communication</li>
    <li>Old Modem Communication</li>
    <li>Text Messaging Systems</li>
    <li>Simple Device-to-Device Communication</li>
</ul>

<hr>

<h4>Difference Between Synchronous and Asynchronous Transmission</h4>

<table class="notes-table">

<tr>
    <th>Synchronous Transmission</th>
    <th>Asynchronous Transmission</th>
</tr>

<tr>
    <td>Uses a common clock signal.</td>
    <td>Does not use a common clock signal.</td>
</tr>

<tr>
    <td>Data is transmitted continuously.</td>
    <td>Data is transmitted one character at a time.</td>
</tr>

<tr>
    <td>No start and stop bits are required.</td>
    <td>Uses start and stop bits.</td>
</tr>

<tr>
    <td>High transmission speed.</td>
    <td>Lower transmission speed.</td>
</tr>

<tr>
    <td>Suitable for large data transfer.</td>
    <td>Suitable for small data transfer.</td>
</tr>

<tr>
    <td>More efficient.</td>
    <td>Less efficient.</td>
</tr>

<tr>
    <td>Complex implementation.</td>
    <td>Simple implementation.</td>
</tr>

<tr>
    <td>Higher cost.</td>
    <td>Lower cost.</td>
</tr>

</table>

<h4>Real-Life Example</h4>

<p>
Imagine a teacher dictating an entire paragraph continuously while students write it down together. This is similar to <strong>Synchronous Transmission</strong>, where communication happens continuously with proper synchronization.
</p>

<p>
Now imagine the teacher speaking one word at a time and waiting before speaking the next word. This is similar to <strong>Asynchronous Transmission</strong>, where data is sent character by character with separate identification for each transmission.
</p>

<h4>Summary</h4>

<p>
<strong>Synchronous Transmission</strong> transfers data continuously using a common clock signal and is suitable for high-speed, large-volume data communication.
</p>

<p>
<strong>Asynchronous Transmission</strong> transfers data one character at a time using start and stop bits and is suitable for low-speed and small-volume data communication.
</p>


<p>
Synchronous and Asynchronous Transmission are important methods of data communication. Synchronous transmission offers high speed and efficiency for large data transfers, while asynchronous transmission provides a simple and economical solution for small and irregular data communication. Understanding both methods is essential for studying computer networks and communication systems.
</p>

`;

let communicationModesContent = `

<h3>Simplex, Half Duplex and Full Duplex Communication</h3>

<p>
In a communication system, data is exchanged between two or more devices. The direction in which data flows between the sender and receiver is known as the <strong>Mode of Communication</strong>.
</p>

<p>
Communication modes define whether data can travel in one direction only or in both directions. Understanding communication modes is important in computer networks because they determine how devices interact with each other.
</p>

<p>
Based on the direction of data flow, communication can be classified into three types:
</p>

<ul>
    <li><strong>Simplex Communication</strong></li>
    <li><strong>Half Duplex Communication</strong></li>
    <li><strong>Full Duplex Communication</strong></li>
</ul>

<h4>Simplex Communication</h4>

<p>
<strong>Simplex Communication</strong> is a communication mode in which data flows in only one direction. One device acts only as a sender, while the other device acts only as a receiver.
</p>

<p>
In Simplex communication, the receiver cannot send any response back to the sender. Therefore, communication is unidirectional.
</p>

<h4>How Simplex Communication Works</h4>

<p>
Sender ➜ Receiver
</p>

<p>
Data always travels in a single direction, and no reverse communication is possible.
</p>

<h4>Examples of Simplex Communication</h4>

<ul>
    <li>Keyboard to Computer</li>
    <li>Computer to Monitor</li>
    <li>Television Broadcasting</li>
    <li>Radio Broadcasting</li>
    <li>Digital Display Boards</li>
</ul>

<h4>Advantages of Simplex Communication</h4>

<ul>
    <li>Simple and easy to implement.</li>
    <li>Low communication cost.</li>
    <li>No need for complex control mechanisms.</li>
    <li>Suitable for one-way information delivery.</li>
</ul>

<h4>Disadvantages of Simplex Communication</h4>

<ul>
    <li>Communication occurs in only one direction.</li>
    <li>No feedback from the receiver.</li>
    <li>Not suitable for interactive communication.</li>
</ul>

<h4>Applications of Simplex Communication</h4>

<ul>
    <li>TV Broadcasting Systems</li>
    <li>Radio Broadcasting Systems</li>
    <li>Public Announcement Systems</li>
    <li>Electronic Notice Boards</li>
</ul>

<hr>

<h4>Half Duplex Communication</h4>

<p>
<strong>Half Duplex Communication</strong> is a communication mode in which data can flow in both directions, but not at the same time.
</p>

<p>
Both devices can send and receive data, but only one device can transmit at a particular moment. When one device is sending data, the other device must wait until transmission is complete.
</p>

<h4>How Half Duplex Communication Works</h4>

<p>
Sender ⇄ Receiver
</p>

<p>
Communication is bidirectional, but transmission occurs one direction at a time.
</p>

<h4>Examples of Half Duplex Communication</h4>

<ul>
    <li>Walkie-Talkie</li>
    <li>CB Radio Systems</li>
    <li>Police Wireless Communication</li>
    <li>Military Communication Systems</li>
</ul>

<h4>Advantages of Half Duplex Communication</h4>

<ul>
    <li>Supports two-way communication.</li>
    <li>Less expensive than full duplex systems.</li>
    <li>Efficient use of communication channels.</li>
    <li>Simple compared to full duplex communication.</li>
</ul>

<h4>Disadvantages of Half Duplex Communication</h4>

<ul>
    <li>Only one device can transmit at a time.</li>
    <li>Communication speed is lower than full duplex.</li>
    <li>Waiting time may occur during communication.</li>
</ul>

<h4>Applications of Half Duplex Communication</h4>

<ul>
    <li>Walkie-Talkies</li>
    <li>Wireless Radio Communication</li>
    <li>Emergency Communication Systems</li>
    <li>Security Communication Networks</li>
</ul>

<hr>

<h4>Full Duplex Communication</h4>

<p>
<strong>Full Duplex Communication</strong> is a communication mode in which data can flow in both directions simultaneously.
</p>

<p>
Both devices can send and receive data at the same time without waiting for each other. This provides the fastest and most efficient communication.
</p>

<h4>How Full Duplex Communication Works</h4>

<p>
Sender ⇄ Receiver
</p>

<p>
Both devices transmit and receive data simultaneously.
</p>

<h4>Examples of Full Duplex Communication</h4>

<ul>
    <li>Mobile Phone Calls</li>
    <li>Video Conferencing</li>
    <li>Telephone Communication</li>
    <li>Modern Computer Networks</li>
    <li>Online Voice Calls</li>
</ul>

<h4>Advantages of Full Duplex Communication</h4>

<ul>
    <li>Simultaneous two-way communication.</li>
    <li>Higher communication speed.</li>
    <li>No waiting time between sender and receiver.</li>
    <li>Efficient utilization of communication channels.</li>
    <li>Provides better communication experience.</li>
</ul>

<h4>Disadvantages of Full Duplex Communication</h4>

<ul>
    <li>More expensive than simplex and half duplex systems.</li>
    <li>Requires complex hardware and software.</li>
    <li>Implementation cost is higher.</li>
</ul>

<h4>Applications of Full Duplex Communication</h4>

<ul>
    <li>Telephone Networks</li>
    <li>Mobile Communication Systems</li>
    <li>Video Calling Applications</li>
    <li>Internet Voice Communication</li>
    <li>Modern Ethernet Networks</li>
</ul>

<hr>

<h4>Difference Between Simplex, Half Duplex and Full Duplex</h4>

<table class="notes-table">

<tr>
    <th>Feature</th>
    <th>Simplex</th>
    <th>Half Duplex</th>
    <th>Full Duplex</th>
</tr>

<tr>
    <td>Direction of Data Flow</td>
    <td>One Direction Only</td>
    <td>Both Directions</td>
    <td>Both Directions</td>
</tr>

<tr>
    <td>Simultaneous Communication</td>
    <td>No</td>
    <td>No</td>
    <td>Yes</td>
</tr>

<tr>
    <td>Feedback Possible</td>
    <td>No</td>
    <td>Yes</td>
    <td>Yes</td>
</tr>

<tr>
    <td>Communication Speed</td>
    <td>Low</td>
    <td>Moderate</td>
    <td>High</td>
</tr>

<tr>
    <td>Complexity</td>
    <td>Simple</td>
    <td>Moderate</td>
    <td>Complex</td>
</tr>

<tr>
    <td>Example</td>
    <td>Keyboard</td>
    <td>Walkie-Talkie</td>
    <td>Mobile Phone Call</td>
</tr>

</table>

<h4>Easy Trick to Remember</h4>

<ul>
    <li><strong>Simplex:</strong> One Way Road → Data moves only in one direction.</li>
    <li><strong>Half Duplex:</strong> Single Lane Bridge → Both directions but one at a time.</li>
    <li><strong>Full Duplex:</strong> Two Lane Highway → Both directions simultaneously.</li>
</ul>

<h4>Summary</h4>

<p>
<strong>Simplex Communication</strong> allows data transmission in only one direction. Example: Keyboard to Computer.
</p>

<p>
<strong>Half Duplex Communication</strong> allows communication in both directions but not at the same time. Example: Walkie-Talkie.
</p>

<p>
<strong>Full Duplex Communication</strong> allows communication in both directions simultaneously. Example: Mobile Phone Call.
</p>

<p>
Simplex, Half Duplex, and Full Duplex are the three main communication modes used in computer networks and communication systems. Simplex supports one-way communication, Half Duplex supports two-way communication one at a time, and Full Duplex supports simultaneous two-way communication. Full Duplex is the most efficient mode and is widely used in modern networking and telecommunication systems.
</p>

`;

let multiplexingContent = `

<h3>Multiplexing and Spreading</h3>

<p>
In modern communication systems, multiple users often need to transmit data through the same communication medium. If every user is provided with a separate communication channel, the cost of communication becomes very high and network resources are wasted.
</p>

<p>
To solve this problem, communication systems use techniques such as <strong>Multiplexing</strong> and <strong>Spreading</strong>. These techniques improve channel utilization, increase communication efficiency, and support multiple users simultaneously.
</p>

<p>
Multiplexing allows multiple signals to share a single communication channel, while Spreading distributes a signal across a wider frequency range to improve security and resistance to interference.
</p>

<hr>

<h3>Multiplexing</h3>

<p>
<strong>Multiplexing</strong> is a technique in which multiple signals or data streams are combined into a single communication channel for transmission.
</p>

<p>
The device that combines multiple signals is called a <strong>Multiplexer (MUX)</strong>. At the receiving end, a device called a <strong>Demultiplexer (DEMUX)</strong> separates the combined signals and delivers them to their respective destinations.
</p>

<p>
Multiplexing helps in efficient utilization of communication channels and reduces transmission costs.
</p>

<h4>Definition of Multiplexing</h4>

<p>
Multiplexing is the process of combining multiple independent signals into one shared communication channel and separating them at the destination.
</p>

<h4>Need for Multiplexing</h4>

<ul>
    <li>Efficient utilization of available bandwidth.</li>
    <li>Reduction in communication costs.</li>
    <li>Allows multiple users to share a single channel.</li>
    <li>Improves network performance.</li>
    <li>Reduces the number of physical communication links required.</li>
</ul>

<h4>Working of Multiplexing</h4>

<p>
Suppose four computers need to send data through a network.
</p>

<p>
Instead of using four separate communication channels, a multiplexer combines all signals into a single channel. At the receiving end, a demultiplexer separates the signals and sends them to the correct destination.
</p>

<p>
Computer 1 + Computer 2 + Computer 3 + Computer 4 → MUX → Communication Channel → DEMUX → Destinations
</p>

<h4>Components of Multiplexing System</h4>

<ul>
    <li><strong>Input Signals:</strong> Data from different users or devices.</li>
    <li><strong>Multiplexer (MUX):</strong> Combines multiple signals.</li>
    <li><strong>Communication Channel:</strong> Carries the combined signal.</li>
    <li><strong>Demultiplexer (DEMUX):</strong> Separates the signals.</li>
    <li><strong>Output Devices:</strong> Receive the original signals.</li>
</ul>

<h4>Advantages of Multiplexing</h4>

<ul>
    <li>Efficient use of communication bandwidth.</li>
    <li>Reduces communication cost.</li>
    <li>Supports multiple users simultaneously.</li>
    <li>Improves channel utilization.</li>
    <li>Reduces network congestion.</li>
    <li>Increases overall system efficiency.</li>
</ul>

<h4>Disadvantages of Multiplexing</h4>

<ul>
    <li>System design can be complex.</li>
    <li>Failure of the communication channel affects all users.</li>
    <li>Requires synchronization in some multiplexing techniques.</li>
    <li>Additional hardware such as MUX and DEMUX is required.</li>
</ul>

<h4>Types of Multiplexing</h4>

<h4>1. Frequency Division Multiplexing (FDM)</h4>

<p>
In <strong>Frequency Division Multiplexing (FDM)</strong>, the available bandwidth is divided into multiple frequency bands, and each signal is assigned a separate frequency range.
</p>

<p>
All signals are transmitted simultaneously over the same communication channel but at different frequencies.
</p>

<h4>Examples of FDM</h4>

<ul>
    <li>Radio Broadcasting</li>
    <li>Television Broadcasting</li>
    <li>Cable TV Networks</li>
</ul>

<h4>Advantages of FDM</h4>

<ul>
    <li>Continuous transmission of signals.</li>
    <li>Multiple signals can be transmitted simultaneously.</li>
    <li>Suitable for analog communication systems.</li>
</ul>

<h4>Disadvantages of FDM</h4>

<ul>
    <li>Requires larger bandwidth.</li>
    <li>Possibility of signal interference.</li>
</ul>

<hr>

<h4>2. Time Division Multiplexing (TDM)</h4>

<p>
In <strong>Time Division Multiplexing (TDM)</strong>, multiple users share the same communication channel by dividing transmission time into different time slots.
</p>

<p>
Each user is assigned a specific time slot during which data is transmitted.
</p>

<h4>Examples of TDM</h4>

<ul>
    <li>Digital Telephone Systems</li>
    <li>Computer Networks</li>
    <li>Digital Communication Systems</li>
</ul>

<h4>Advantages of TDM</h4>

<ul>
    <li>Efficient utilization of bandwidth.</li>
    <li>Suitable for digital communication.</li>
    <li>High transmission efficiency.</li>
</ul>

<h4>Disadvantages of TDM</h4>

<ul>
    <li>Requires synchronization.</li>
    <li>Time slots may remain unused if a user has no data to send.</li>
</ul>

<hr>

<h4>3. Wavelength Division Multiplexing (WDM)</h4>

<p>
<strong>Wavelength Division Multiplexing (WDM)</strong> is used in optical fiber communication. Multiple optical signals are transmitted simultaneously using different wavelengths of light.
</p>

<p>
WDM is similar to FDM, but instead of frequencies, it uses light wavelengths.
</p>

<h4>Examples of WDM</h4>

<ul>
    <li>Optical Fiber Networks</li>
    <li>High-Speed Internet Backbone Networks</li>
    <li>Telecommunication Fiber Systems</li>
</ul>

<h4>Advantages of WDM</h4>

<ul>
    <li>Extremely high data transmission speed.</li>
    <li>Supports large bandwidth.</li>
    <li>Efficient utilization of optical fibers.</li>
</ul>

<h4>Disadvantages of WDM</h4>

<ul>
    <li>Expensive implementation.</li>
    <li>Requires specialized optical equipment.</li>
</ul>

<hr>

<h3>Spreading</h3>

<p>
<strong>Spreading</strong> is a communication technique in which a signal is distributed over a much wider frequency band than actually required for transmission.
</p>

<p>
This technique is commonly known as <strong>Spread Spectrum Technology</strong>.
</p>

<p>
Spreading improves communication reliability, security, and resistance to interference and noise.
</p>

<h4>Definition of Spreading</h4>

<p>
Spreading is the process of expanding a signal over a wider frequency range than the minimum bandwidth required for transmitting information.
</p>

<h4>Need for Spreading</h4>

<ul>
    <li>Improves communication security.</li>
    <li>Provides resistance against interference and jamming.</li>
    <li>Reduces signal interception by unauthorized users.</li>
    <li>Improves communication reliability.</li>
</ul>

<h4>Advantages of Spreading</h4>

<ul>
    <li>Enhanced security.</li>
    <li>Resistance to noise and interference.</li>
    <li>Better signal reliability.</li>
    <li>Supports multiple users.</li>
    <li>Improved communication quality.</li>
</ul>

<h4>Disadvantages of Spreading</h4>

<ul>
    <li>Complex implementation.</li>
    <li>Requires additional bandwidth.</li>
    <li>Higher system cost.</li>
</ul>

<h4>Applications of Spreading</h4>

<ul>
    <li>Wi-Fi Networks</li>
    <li>GPS Systems</li>
    <li>Military Communication Systems</li>
    <li>Satellite Communication</li>
    <li>Mobile Communication Networks</li>
</ul>

<hr>

<h4>Difference Between Multiplexing and Spreading</h4>

<table class="notes-table">

<tr>
    <th>Multiplexing</th>
    <th>Spreading</th>
</tr>

<tr>
    <td>Combines multiple signals into one channel.</td>
    <td>Expands a signal over a wider frequency band.</td>
</tr>

<tr>
    <td>Main objective is efficient channel utilization.</td>
    <td>Main objective is security and interference resistance.</td>
</tr>

<tr>
    <td>Reduces communication cost.</td>
    <td>Improves communication reliability.</td>
</tr>

<tr>
    <td>Uses MUX and DEMUX devices.</td>
    <td>Uses spread spectrum techniques.</td>
</tr>

<tr>
    <td>Common in communication networks.</td>
    <td>Common in wireless communication systems.</td>
</tr>

</table>

<h4>Easy Trick to Remember</h4>

<ul>
    <li><strong>Multiplexing:</strong> Many Users → One Channel</li>
    <li><strong>Spreading:</strong> One Signal → Wide Frequency Band</li>
</ul>

<h4>Summary</h4>

<p>
<strong>Multiplexing</strong> is the technique of combining multiple signals into a single communication channel for efficient transmission. Its major types are FDM, TDM, and WDM.
</p>

<p>
<strong>Spreading</strong> is the technique of distributing a signal over a wider frequency range to improve security, reliability, and resistance to interference.
</p>

<p>
Multiplexing and Spreading are important concepts in data communication and networking. Multiplexing improves channel utilization by allowing multiple users to share a single communication medium, while Spreading enhances security and communication reliability by distributing signals over a wider frequency spectrum. Both techniques play a vital role in modern communication systems such as the Internet, mobile networks, Wi-Fi, optical fiber networks, and satellite communication.
</p>

`;

let encodingDecodingContent = `

<h3>Encoding and Decoding</h3>

<p>
In a computer network, data cannot be transmitted directly from one device to another. Before transmission, the data must be converted into a suitable form that can travel through the communication medium. This conversion process is known as <strong>Encoding</strong>.
</p>

<p>
Similarly, when the encoded signal reaches the destination, it must be converted back into its original form so that the receiver can understand the information. This reverse process is known as <strong>Decoding</strong>.
</p>

<p>
Encoding and Decoding are essential processes in data communication because they ensure that information can be transmitted accurately and efficiently between devices.
</p>

<hr>

<h3>Encoding</h3>

<p>
<strong>Encoding</strong> is the process of converting digital data into signals that can be transmitted through a communication channel.
</p>

<p>
Computers generate data in the form of binary digits (0s and 1s). Before transmission, these binary values must be represented as electrical, optical, or radio signals. This conversion is performed through encoding techniques.
</p>

<h4>Definition of Encoding</h4>

<p>
Encoding is the process of transforming data into a suitable signal format for transmission over a communication medium.
</p>

<h4>Need for Encoding</h4>

<ul>
    <li>To convert data into transmittable signals.</li>
    <li>To improve communication efficiency.</li>
    <li>To ensure synchronization between sender and receiver.</li>
    <li>To reduce transmission errors.</li>
    <li>To enable reliable data transfer over long distances.</li>
</ul>

<h4>How Encoding Works</h4>

<p>
Suppose a computer wants to transmit the binary data:
</p>

<p>
<strong>10110101</strong>
</p>

<p>
The encoder converts these binary digits into a specific signal pattern according to an encoding scheme. These signals are then transmitted through the communication channel.
</p>

<p>
At the receiving end, the decoder interprets the signal pattern and reconstructs the original binary data.
</p>

<h4>Types of Encoding</h4>

<p>
There are several encoding techniques used in data communication systems.
</p>

<h4>1. NRZ (Non-Return to Zero)</h4>

<p>
NRZ is one of the simplest encoding techniques. In this method, binary values are represented using different voltage levels.
</p>

<ul>
    <li>Binary 1 → Positive Voltage</li>
    <li>Binary 0 → Negative Voltage or Zero Voltage</li>
</ul>

<p>
The signal does not return to zero between bits, which is why it is called Non-Return to Zero.
</p>

<h4>Advantages of NRZ</h4>

<ul>
    <li>Simple implementation.</li>
    <li>Requires less bandwidth.</li>
    <li>Easy signal generation.</li>
</ul>

<h4>Disadvantages of NRZ</h4>

<ul>
    <li>Synchronization problems may occur.</li>
    <li>Not suitable for long sequences of identical bits.</li>
</ul>

<hr>

<h4>2. Manchester Encoding</h4>

<p>
Manchester Encoding is a widely used encoding technique in computer networks.
</p>

<p>
In this method, each bit contains a transition in the middle of the bit period. This transition helps maintain synchronization between the sender and receiver.
</p>

<ul>
    <li>Binary 0 → Low to High Transition</li>
    <li>Binary 1 → High to Low Transition</li>
</ul>

<h4>Advantages of Manchester Encoding</h4>

<ul>
    <li>Excellent synchronization.</li>
    <li>Reliable communication.</li>
    <li>Easy error detection.</li>
</ul>

<h4>Disadvantages of Manchester Encoding</h4>

<ul>
    <li>Requires more bandwidth.</li>
    <li>Signal generation is more complex.</li>
</ul>

<h4>Applications of Manchester Encoding</h4>

<ul>
    <li>Ethernet Networks</li>
    <li>Local Area Networks (LAN)</li>
    <li>Digital Communication Systems</li>
</ul>

<hr>

<h4>Advantages of Encoding</h4>

<ul>
    <li>Enables data transmission through communication channels.</li>
    <li>Improves signal quality.</li>
    <li>Supports synchronization.</li>
    <li>Reduces transmission errors.</li>
    <li>Ensures reliable communication.</li>
</ul>

<h4>Disadvantages of Encoding</h4>

<ul>
    <li>Some encoding techniques require additional bandwidth.</li>
    <li>Complex encoding schemes increase system complexity.</li>
    <li>Additional processing may be required.</li>
</ul>

<hr>

<h3>Decoding</h3>

<p>
<strong>Decoding</strong> is the process of converting received signals back into the original data at the receiving end.
</p>

<p>
When encoded signals travel through a communication channel and reach the destination, the receiver cannot directly understand the signal pattern. Therefore, a decoder is used to interpret the signals and reconstruct the original binary information.
</p>

<h4>Definition of Decoding</h4>

<p>
Decoding is the process of converting received signals into their original digital data form.
</p>

<h4>Need for Decoding</h4>

<ul>
    <li>To recover the original information.</li>
    <li>To make transmitted data understandable.</li>
    <li>To complete the communication process.</li>
    <li>To ensure accurate data interpretation.</li>
</ul>

<h4>How Decoding Works</h4>

<p>
The receiver analyzes the incoming signal pattern generated during encoding.
</p>

<p>
The decoder then converts these signals into binary digits (0s and 1s), allowing the receiving device to process and display the original information.
</p>

<p>
Signal Received → Decoder → Original Binary Data → User Information
</p>

<h4>Advantages of Decoding</h4>

<ul>
    <li>Recovers original data accurately.</li>
    <li>Supports reliable communication.</li>
    <li>Enables proper interpretation of transmitted information.</li>
    <li>Works with various encoding schemes.</li>
</ul>

<h4>Applications of Decoding</h4>

<ul>
    <li>Computer Networks</li>
    <li>Internet Communication</li>
    <li>Mobile Communication Systems</li>
    <li>Satellite Communication</li>
    <li>Digital Television</li>
    <li>Wireless Communication Systems</li>
</ul>

<hr>

<h4>Difference Between Encoding and Decoding</h4>

<table class="notes-table">

<tr>
    <th>Encoding</th>
    <th>Decoding</th>
</tr>

<tr>
    <td>Converts data into signals.</td>
    <td>Converts signals back into data.</td>
</tr>

<tr>
    <td>Performed at the sender side.</td>
    <td>Performed at the receiver side.</td>
</tr>

<tr>
    <td>Prepares data for transmission.</td>
    <td>Recovers original information.</td>
</tr>

<tr>
    <td>Occurs before transmission.</td>
    <td>Occurs after transmission.</td>
</tr>

<tr>
    <td>Examples: NRZ, Manchester Encoding.</td>
    <td>Uses corresponding decoding techniques.</td>
</tr>

</table>

<h4>Real-Life Example</h4>

<p>
Imagine writing a secret message using a special code before sending it to your friend. Converting the original message into the code is called <strong>Encoding</strong>.
</p>

<p>
When your friend receives the coded message and converts it back into the original readable message, that process is called <strong>Decoding</strong>.
</p>

<h4>Easy Trick to Remember</h4>

<ul>
    <li><strong>Encoding:</strong> Data → Signal</li>
    <li><strong>Decoding:</strong> Signal → Data</li>
</ul>

<h4>Summary</h4>

<p>
<strong>Encoding</strong> is the process of converting data into signals suitable for transmission through a communication medium. Common encoding techniques include NRZ and Manchester Encoding.
</p>

<p>
<strong>Decoding</strong> is the process of converting received signals back into their original data form so that the receiver can understand the transmitted information.
</p>

<p>
Encoding and Decoding are fundamental processes in data communication. Encoding converts data into signals for transmission, while decoding converts received signals back into original data. Together, these processes enable accurate, reliable, and efficient communication in computer networks, the Internet, mobile networks, and other digital communication systems.
</p>

`;

let errorDetectionContent = `

<h3>Error Detection and Recovery</h3>

<p>
During data transmission, information travels through communication channels such as cables, optical fibers, and wireless networks. While transmitting data, unwanted disturbances such as <strong>noise</strong>, <strong>electromagnetic interference</strong>, hardware failures, signal attenuation, and network congestion may alter the original data.
</p>

<p>
When the received data is different from the transmitted data, an <strong>Error</strong> occurs.
</p>

<p>
To ensure reliable communication, computer networks use various <strong>Error Detection</strong> and <strong>Error Recovery</strong> techniques. These techniques help identify transmission errors and recover the original data.
</p>

<hr>

<h3>What is an Error?</h3>

<p>
An error occurs when one or more bits of transmitted data change during transmission.
</p>

<p>
For example:
</p>

<p>
Original Data = <strong>10110110</strong>
</p>

<p>
Received Data = <strong>10100110</strong>
</p>

<p>
Since one bit has changed during transmission, an error has occurred.
</p>

<h4>Causes of Errors</h4>

<ul>
    <li>Noise in communication channels.</li>
    <li>Electromagnetic interference.</li>
    <li>Weak signal strength.</li>
    <li>Hardware malfunction.</li>
    <li>Network congestion.</li>
    <li>Environmental disturbances.</li>
</ul>

<hr>

<h3>Error Detection</h3>

<p>
<strong>Error Detection</strong> is the process of identifying whether data has been corrupted during transmission.
</p>

<p>
The sender adds extra information to the transmitted data. The receiver uses this information to verify whether the received data is correct or contains errors.
</p>

<h4>Definition of Error Detection</h4>

<p>
Error Detection is the technique used to determine whether transmitted data has been altered during communication.
</p>

<h4>Need for Error Detection</h4>

<ul>
    <li>To ensure data accuracy.</li>
    <li>To detect transmission errors.</li>
    <li>To improve communication reliability.</li>
    <li>To maintain data integrity.</li>
    <li>To support error recovery mechanisms.</li>
</ul>

<hr>

<h4>1. Parity Check</h4>

<p>
<strong>Parity Check</strong> is one of the simplest error detection techniques.
</p>

<p>
In this method, an additional bit called a <strong>Parity Bit</strong> is added to the data before transmission.
</p>

<p>
The parity bit helps determine whether the number of 1s in the transmitted data is even or odd.
</p>

<h4>Types of Parity Check</h4>

<ul>
    <li><strong>Even Parity</strong></li>
    <li><strong>Odd Parity</strong></li>
</ul>

<h4>Even Parity</h4>

<p>
The total number of 1s including the parity bit must be even.
</p>

<p>
Example:
</p>

<p>
Data = 1011001
</p>

<p>
Number of 1s = 4 (Even)
</p>

<p>
Parity Bit = 0
</p>

<p>
Transmitted Data = 10110010
</p>

<h4>Odd Parity</h4>

<p>
The total number of 1s including the parity bit must be odd.
</p>

<h4>Advantages of Parity Check</h4>

<ul>
    <li>Simple implementation.</li>
    <li>Low cost.</li>
    <li>Requires minimal additional data.</li>
</ul>

<h4>Disadvantages of Parity Check</h4>

<ul>
    <li>Cannot detect all errors.</li>
    <li>Fails when multiple bits change simultaneously.</li>
</ul>

<hr>

<h4>2. Checksum</h4>

<p>
<strong>Checksum</strong> is an error detection method in which the sender calculates a special value from the data and sends it along with the message.
</p>

<p>
The receiver performs the same calculation and compares the result with the received checksum value.
</p>

<p>
If both values match, the data is considered correct. Otherwise, an error is detected.
</p>

<h4>Working of Checksum</h4>

<ul>
    <li>Sender calculates checksum.</li>
    <li>Checksum is attached to the message.</li>
    <li>Receiver recalculates checksum.</li>
    <li>Results are compared.</li>
    <li>If values differ, an error is detected.</li>
</ul>

<h4>Applications of Checksum</h4>

<ul>
    <li>Internet Protocols.</li>
    <li>File Downloads.</li>
    <li>Email Systems.</li>
    <li>Data Storage Devices.</li>
</ul>

<h4>Advantages of Checksum</h4>

<ul>
    <li>Better accuracy than parity checking.</li>
    <li>Simple implementation.</li>
    <li>Suitable for network communication.</li>
</ul>

<h4>Disadvantages of Checksum</h4>

<ul>
    <li>Cannot detect every possible error.</li>
    <li>Less reliable than CRC.</li>
</ul>

<hr>

<h4>3. CRC (Cyclic Redundancy Check)</h4>

<p>
<strong>Cyclic Redundancy Check (CRC)</strong> is one of the most powerful and widely used error detection techniques in computer networks.
</p>

<p>
CRC uses mathematical calculations based on polynomial division to generate a special code called the CRC value.
</p>

<p>
The receiver performs the same calculation and verifies whether the received data is error-free.
</p>

<h4>Working of CRC</h4>

<ul>
    <li>Sender generates a CRC code.</li>
    <li>CRC code is attached to the data.</li>
    <li>Receiver performs CRC calculation.</li>
    <li>If the calculated value matches, data is accepted.</li>
    <li>If not, an error is detected.</li>
</ul>

<h4>Applications of CRC</h4>

<ul>
    <li>Ethernet Networks.</li>
    <li>Wi-Fi Communication.</li>
    <li>Storage Devices.</li>
    <li>Digital Communication Systems.</li>
</ul>

<h4>Advantages of CRC</h4>

<ul>
    <li>Very high error detection capability.</li>
    <li>Can detect burst errors.</li>
    <li>Highly reliable.</li>
    <li>Widely used in networking.</li>
</ul>

<h4>Disadvantages of CRC</h4>

<ul>
    <li>More complex than parity and checksum.</li>
    <li>Requires additional computation.</li>
</ul>

<hr>

<h3>Error Recovery</h3>

<p>
Detecting an error alone is not sufficient. Once an error is detected, the communication system must recover the correct data.
</p>

<p>
The process of correcting or retransmitting corrupted data is known as <strong>Error Recovery</strong>.
</p>

<h4>Definition of Error Recovery</h4>

<p>
Error Recovery is the process of obtaining correct data after an error has been detected during transmission.
</p>

<h4>Need for Error Recovery</h4>

<ul>
    <li>Ensures reliable communication.</li>
    <li>Prevents data loss.</li>
    <li>Maintains information accuracy.</li>
    <li>Improves network performance.</li>
</ul>

<hr>

<h4>1. Automatic Repeat Request (ARQ)</h4>

<p>
<strong>Automatic Repeat Request (ARQ)</strong> is a widely used error recovery technique.
</p>

<p>
In ARQ, the receiver checks the received data for errors. If an error is detected, the receiver requests the sender to retransmit the data.
</p>

<h4>Working of ARQ</h4>

<ul>
    <li>Sender transmits data.</li>
    <li>Receiver checks for errors.</li>
    <li>If data is correct, receiver sends ACK (Acknowledgement).</li>
    <li>If data contains errors, receiver sends NAK (Negative Acknowledgement).</li>
    <li>Sender retransmits the data.</li>
</ul>

<h4>Advantages of ARQ</h4>

<ul>
    <li>Reliable communication.</li>
    <li>Automatic error handling.</li>
    <li>Widely used in networks.</li>
</ul>

<hr>

<h4>2. Retransmission</h4>

<p>
<strong>Retransmission</strong> is the process of sending the same data again whenever an error is detected or when acknowledgement is not received within a specified time.
</p>

<p>
This technique ensures that the receiver eventually receives correct information.
</p>

<h4>Advantages of Retransmission</h4>

<ul>
    <li>Simple implementation.</li>
    <li>Ensures accurate delivery.</li>
    <li>Improves communication reliability.</li>
</ul>

<h4>Disadvantages of Retransmission</h4>

<ul>
    <li>Increases network traffic.</li>
    <li>May introduce communication delays.</li>
</ul>

<hr>

<h4>Difference Between Error Detection and Error Recovery</h4>

<table class="notes-table">

<tr>
    <th>Error Detection</th>
    <th>Error Recovery</th>
</tr>

<tr>
    <td>Identifies transmission errors.</td>
    <td>Corrects or recovers from detected errors.</td>
</tr>

<tr>
    <td>Performed before recovery.</td>
    <td>Performed after error detection.</td>
</tr>

<tr>
    <td>Examples: Parity Check, Checksum, CRC.</td>
    <td>Examples: ARQ, Retransmission.</td>
</tr>

<tr>
    <td>Improves data accuracy.</td>
    <td>Ensures correct data delivery.</td>
</tr>

</table>

<h4>Easy Trick to Remember</h4>

<ul>
    <li><strong>Error Detection:</strong> Find the Error.</li>
    <li><strong>Error Recovery:</strong> Fix the Error.</li>
</ul>

<h4>Summary</h4>

<p>
<strong>Error Detection</strong> is the process of identifying errors in transmitted data. Common techniques include Parity Check, Checksum, and CRC.
</p>

<p>
<strong>Error Recovery</strong> is the process of obtaining correct data after an error is detected. Common techniques include ARQ and Retransmission.
</p>

<p>
Among all error detection methods, <strong>CRC (Cyclic Redundancy Check)</strong> is the most reliable and widely used technique in computer networks.
</p>

<p>
Errors are common in data communication due to noise, interference, and transmission problems. Error Detection techniques such as Parity Check, Checksum, and CRC help identify transmission errors, while Error Recovery techniques such as ARQ and Retransmission ensure that the correct data is eventually delivered. Together, these mechanisms provide reliable and accurate communication in modern computer networks.
</p>

`;

let networkTopologyContent = `

<h3>Network Topologies</h3>

<p>
In a computer network, multiple devices such as computers, servers, printers, switches, and routers are connected to exchange data and resources. The way these devices are arranged and connected is known as the <strong>Network Topology</strong>.
</p>

<p>
Network topology plays an important role in determining the performance, reliability, scalability, and maintenance of a network. Different topologies are used depending on the size and requirements of the network.
</p>

<p>
Understanding network topologies is one of the most important topics in Computer Networks and is frequently asked in examinations.
</p>

<hr>

<h3>What is Network Topology?</h3>

<p>
<strong>Network Topology</strong> refers to the physical or logical arrangement of devices (nodes) and communication links in a computer network.
</p>

<p>
It describes how computers and other network devices are connected and how data flows between them.
</p>

<h4>Definition</h4>

<p>
Network Topology is the structure or layout of a network that defines the arrangement of nodes and communication paths.
</p>

<h4>Why Network Topology is Important?</h4>

<ul>
    <li>Determines network performance.</li>
    <li>Affects communication speed.</li>
    <li>Improves fault detection and troubleshooting.</li>
    <li>Influences network cost.</li>
    <li>Provides scalability for future expansion.</li>
    <li>Ensures reliable communication.</li>
</ul>

<hr>

<h3>Types of Network Topology</h3>

<p>
The major types of network topologies are:
</p>

<ul>
    <li>Bus Topology</li>
    <li>Star Topology</li>
    <li>Ring Topology</li>
    <li>Mesh Topology</li>
    <li>Tree Topology</li>
    <li>Hybrid Topology</li>
</ul>

<hr>

<h4>1. Bus Topology</h4>

<p>
<strong>Bus Topology</strong> is the simplest network topology in which all devices are connected to a single communication cable called the <strong>Bus</strong> or <strong>Backbone Cable</strong>.
</p>

<p>
All devices share the same communication channel. When one device sends data, the signal travels through the bus cable and is received by all devices, but only the intended receiver accepts the data.
</p>

<h4>Structure</h4>

<p>
Computer ─ Computer ─ Computer ─ Computer
</p>

<h4>Advantages of Bus Topology</h4>

<ul>
    <li>Simple design.</li>
    <li>Easy installation.</li>
    <li>Low implementation cost.</li>
    <li>Requires less cable.</li>
</ul>

<h4>Disadvantages of Bus Topology</h4>

<ul>
    <li>Failure of the main cable affects the entire network.</li>
    <li>Difficult fault detection.</li>
    <li>Performance decreases as devices increase.</li>
    <li>Limited network size.</li>
</ul>

<h4>Applications of Bus Topology</h4>

<ul>
    <li>Small office networks.</li>
    <li>Temporary networks.</li>
    <li>Early computer networks.</li>
</ul>

<hr>

<h4>2. Star Topology</h4>

<p>
<strong>Star Topology</strong> is the most widely used network topology in modern computer networks.
</p>

<p>
In this topology, all devices are connected to a central device such as a <strong>Switch</strong> or <strong>Hub</strong>.
</p>

<p>
All communication passes through the central device. When one computer wants to communicate with another computer, the data first reaches the switch and then is forwarded to the destination device.
</p>

<h4>Structure</h4>

<p>
&nbsp;&nbsp;&nbsp;&nbsp;Computer<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
Computer ─ Switch ─ Computer<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
&nbsp;&nbsp;&nbsp;&nbsp;Computer
</p>

<h4>Advantages of Star Topology</h4>

<ul>
    <li>Easy installation and management.</li>
    <li>Easy fault detection.</li>
    <li>Failure of one device does not affect the others.</li>
    <li>High network performance.</li>
    <li>Easy network expansion.</li>
</ul>

<h4>Disadvantages of Star Topology</h4>

<ul>
    <li>Requires more cable.</li>
    <li>Higher installation cost.</li>
    <li>If the central switch fails, the entire network stops working.</li>
</ul>

<h4>Applications of Star Topology</h4>

<ul>
    <li>Office Networks.</li>
    <li>School and College Networks.</li>
    <li>Home Networks.</li>
    <li>Modern LANs.</li>
</ul>

<h4>Important Exam Point</h4>

<p>
<strong>Star Topology is the most commonly used topology in modern computer networks.</strong>
</p>

<hr>

<h4>3. Ring Topology</h4>

<p>
<strong>Ring Topology</strong> is a network topology in which each device is connected to exactly two neighboring devices, forming a closed circular path.
</p>

<p>
Data travels from one device to another around the ring until it reaches the destination.
</p>

<h4>Structure</h4>

<p>
Computer → Computer → Computer → Computer → Back to First Computer
</p>

<h4>Advantages of Ring Topology</h4>

<ul>
    <li>Orderly data transmission.</li>
    <li>No data collision.</li>
    <li>Equal access for all devices.</li>
</ul>

<h4>Disadvantages of Ring Topology</h4>

<ul>
    <li>Failure of one device can affect the entire network.</li>
    <li>Difficult troubleshooting.</li>
    <li>Network expansion is difficult.</li>
</ul>

<h4>Applications of Ring Topology</h4>

<ul>
    <li>Token Ring Networks.</li>
    <li>Industrial Communication Systems.</li>
</ul>

<hr>

<h4>4. Mesh Topology</h4>

<p>
<strong>Mesh Topology</strong> is a network topology in which every device is directly connected to every other device in the network.
</p>

<p>
Multiple communication paths are available between devices, providing high reliability and fault tolerance.
</p>

<h4>Advantages of Mesh Topology</h4>

<ul>
    <li>Very reliable communication.</li>
    <li>High fault tolerance.</li>
    <li>Excellent security.</li>
    <li>No single point of failure.</li>
</ul>

<h4>Disadvantages of Mesh Topology</h4>

<ul>
    <li>Very expensive.</li>
    <li>Requires a large amount of cabling.</li>
    <li>Complex installation and maintenance.</li>
</ul>

<h4>Applications of Mesh Topology</h4>

<ul>
    <li>Military Networks.</li>
    <li>Internet Backbone Networks.</li>
    <li>Wireless Mesh Networks.</li>
</ul>

<hr>

<h4>5. Tree Topology</h4>

<p>
<strong>Tree Topology</strong> combines the characteristics of Bus Topology and Star Topology.
</p>

<p>
It has a hierarchical structure where multiple star networks are connected through a backbone cable.
</p>

<p>
The structure resembles a tree with branches extending from a central root.
</p>

<h4>Advantages of Tree Topology</h4>

<ul>
    <li>Easy network expansion.</li>
    <li>Suitable for large organizations.</li>
    <li>Supports hierarchical management.</li>
</ul>

<h4>Disadvantages of Tree Topology</h4>

<ul>
    <li>Complex configuration.</li>
    <li>Backbone failure affects many devices.</li>
    <li>Higher installation cost.</li>
</ul>

<h4>Applications of Tree Topology</h4>

<ul>
    <li>University Campus Networks.</li>
    <li>Large Corporate Networks.</li>
    <li>Enterprise Communication Systems.</li>
</ul>

<hr>

<h4>6. Hybrid Topology</h4>

<p>
<strong>Hybrid Topology</strong> is formed by combining two or more different network topologies.
</p>

<p>
Organizations often use hybrid topology to obtain the advantages of multiple topologies while minimizing their disadvantages.
</p>

<h4>Examples of Hybrid Topology</h4>

<ul>
    <li>Star-Bus Topology</li>
    <li>Star-Ring Topology</li>
</ul>

<h4>Advantages of Hybrid Topology</h4>

<ul>
    <li>Highly flexible.</li>
    <li>Scalable network design.</li>
    <li>Reliable communication.</li>
    <li>Supports large networks.</li>
</ul>

<h4>Disadvantages of Hybrid Topology</h4>

<ul>
    <li>Complex design.</li>
    <li>Expensive implementation.</li>
    <li>Difficult maintenance.</li>
</ul>

<h4>Applications of Hybrid Topology</h4>

<ul>
    <li>Large Organizations.</li>
    <li>Multinational Companies.</li>
    <li>Data Centers.</li>
</ul>

<hr>

<h4>Comparison of Network Topologies</h4>

<table class="notes-table">

<tr>
    <th>Topology</th>
    <th>Cost</th>
    <th>Reliability</th>
    <th>Complexity</th>
</tr>

<tr>
    <td>Bus</td>
    <td>Low</td>
    <td>Low</td>
    <td>Simple</td>
</tr>

<tr>
    <td>Star</td>
    <td>Medium</td>
    <td>High</td>
    <td>Simple</td>
</tr>

<tr>
    <td>Ring</td>
    <td>Medium</td>
    <td>Medium</td>
    <td>Moderate</td>
</tr>

<tr>
    <td>Mesh</td>
    <td>Very High</td>
    <td>Very High</td>
    <td>Complex</td>
</tr>

<tr>
    <td>Tree</td>
    <td>High</td>
    <td>High</td>
    <td>Moderate</td>
</tr>

<tr>
    <td>Hybrid</td>
    <td>Very High</td>
    <td>Very High</td>
    <td>Complex</td>
</tr>

</table>

<h4>Easy Trick to Remember</h4>

<ul>
    <li><strong>Bus:</strong> One Main Cable</li>
    <li><strong>Star:</strong> One Central Switch</li>
    <li><strong>Ring:</strong> Circular Connection</li>
    <li><strong>Mesh:</strong> Everyone Connected to Everyone</li>
    <li><strong>Tree:</strong> Hierarchical Structure</li>
    <li><strong>Hybrid:</strong> Combination of Topologies</li>
</ul>

<h4>Summary</h4>

<p>
Network Topology refers to the arrangement of devices and communication links in a network. The major types of topology are Bus, Star, Ring, Mesh, Tree, and Hybrid Topology.
</p>

<p>
Among all topologies, <strong>Star Topology</strong> is the most commonly used topology because it is easy to install, manage, and troubleshoot.
</p>

<p>
Network topology determines how devices are connected and communicate in a network. Different topologies provide different levels of performance, reliability, scalability, and cost. Understanding Bus, Star, Ring, Mesh, Tree, and Hybrid Topologies is essential for designing and managing computer networks effectively.
</p>

`;

let modulationContent = `

<h3>Modulation</h3>

<p>
In data communication and computer networks, information must often travel over long distances through communication channels such as telephone lines, radio waves, optical fibers, and satellite links.
</p>

<p>
Digital signals generated by computers cannot always be transmitted efficiently over long distances. To solve this problem, communication systems use a technique called <strong>Modulation</strong>.
</p>

<p>
Modulation is one of the most important concepts in communication systems because it enables long-distance transmission of information with better signal quality and reduced interference.
</p>

<hr>

<h3>What is Modulation?</h3>

<p>
<strong>Modulation</strong> is the process of modifying a high-frequency carrier signal according to the information signal (message signal) that needs to be transmitted.
</p>

<p>
In simple words, modulation combines the original information signal with a high-frequency carrier signal so that it can travel efficiently through the communication medium.
</p>

<h4>Definition of Modulation</h4>

<p>
Modulation is the process of changing the amplitude, frequency, or phase of a carrier signal according to the information signal for transmission over long distances.
</p>

<h4>Basic Idea of Modulation</h4>

<p>
Suppose you want to send your voice through a radio station.
</p>

<p>
Your voice signal has a low frequency and cannot travel very far on its own.
</p>

<p>
To transmit it over long distances, it is combined with a high-frequency carrier signal through modulation.
</p>

<p>
Information Signal + Carrier Signal → Modulated Signal
</p>

<p>
The modulated signal is then transmitted through the communication channel.
</p>

<hr>

<h3>Important Terms in Modulation</h3>

<h4>Message Signal</h4>

<p>
The original information that needs to be transmitted, such as voice, video, text, or data.
</p>

<h4>Carrier Signal</h4>

<p>
A high-frequency signal used to carry the information signal to the destination.
</p>

<h4>Modulated Signal</h4>

<p>
The final signal produced after modulation, which contains both the carrier and the information signal.
</p>

<hr>

<h3>Why Modulation is Needed?</h3>

<p>
Without modulation, long-distance communication would be difficult and inefficient.
</p>

<h4>Main Reasons for Using Modulation</h4>

<ul>
    <li>Enables long-distance communication.</li>
    <li>Improves signal strength.</li>
    <li>Reduces interference and noise.</li>
    <li>Allows efficient use of communication channels.</li>
    <li>Prevents mixing of different signals.</li>
    <li>Makes wireless communication possible.</li>
    <li>Improves transmission quality.</li>
</ul>

<h4>Need for Modulation Explained</h4>

<ul>
    <li><strong>Long Distance Communication:</strong> Low-frequency signals cannot travel very far. Modulation allows signals to travel over large distances.</li>

    <li><strong>Efficient Transmission:</strong> High-frequency carrier signals transmit information more efficiently.</li>

    <li><strong>Smaller Antenna Size:</strong> High-frequency signals require smaller antennas.</li>

    <li><strong>Reduced Noise:</strong> Modulation improves resistance to noise and interference.</li>

    <li><strong>Multiplexing Support:</strong> Multiple signals can be transmitted simultaneously using different carrier frequencies.</li>
</ul>

<hr>

<h3>How Modulation Works</h3>

<p>
The sender generates a message signal containing the information.
</p>

<p>
A carrier signal with high frequency is also generated.
</p>

<p>
The modulator combines both signals by changing one of the characteristics of the carrier signal.
</p>

<p>
The resulting modulated signal is transmitted through the communication channel.
</p>

<p>
At the receiver side, the original information is extracted using a process called <strong>Demodulation</strong>.
</p>

<p>
Message Signal → Modulator → Modulated Signal → Transmission Channel → Demodulator → Original Message
</p>

<hr>

<h3>Types of Modulation</h3>

<p>
Modulation can be classified into three major types based on the characteristic of the carrier signal that is modified.
</p>

<ul>
    <li>Amplitude Modulation (AM)</li>
    <li>Frequency Modulation (FM)</li>
    <li>Phase Modulation (PM)</li>
</ul>

<hr>

<h4>1. Amplitude Modulation (AM)</h4>

<p>
<strong>Amplitude Modulation (AM)</strong> is a modulation technique in which the amplitude of the carrier signal is varied according to the message signal while the frequency and phase remain constant.
</p>

<h4>Working of AM</h4>

<p>
When the strength of the information signal changes, the amplitude of the carrier signal also changes accordingly.
</p>

<h4>Characteristics of AM</h4>

<ul>
    <li>Amplitude changes continuously.</li>
    <li>Frequency remains constant.</li>
    <li>Phase remains constant.</li>
</ul>

<h4>Advantages of AM</h4>

<ul>
    <li>Simple implementation.</li>
    <li>Low equipment cost.</li>
    <li>Easy receiver design.</li>
</ul>

<h4>Disadvantages of AM</h4>

<ul>
    <li>Highly affected by noise.</li>
    <li>Poor audio quality.</li>
    <li>Less efficient than FM.</li>
</ul>

<h4>Applications of AM</h4>

<ul>
    <li>AM Radio Broadcasting.</li>
    <li>Aviation Communication.</li>
    <li>Shortwave Broadcasting.</li>
</ul>

<hr>

<h4>2. Frequency Modulation (FM)</h4>

<p>
<strong>Frequency Modulation (FM)</strong> is a modulation technique in which the frequency of the carrier signal is varied according to the message signal while the amplitude remains constant.
</p>

<h4>Working of FM</h4>

<p>
As the information signal changes, the carrier frequency increases or decreases accordingly.
</p>

<h4>Characteristics of FM</h4>

<ul>
    <li>Frequency changes continuously.</li>
    <li>Amplitude remains constant.</li>
    <li>Provides high-quality transmission.</li>
</ul>

<h4>Advantages of FM</h4>

<ul>
    <li>Excellent sound quality.</li>
    <li>Less affected by noise.</li>
    <li>Reliable communication.</li>
</ul>

<h4>Disadvantages of FM</h4>

<ul>
    <li>Requires larger bandwidth.</li>
    <li>More complex equipment.</li>
</ul>

<h4>Applications of FM</h4>

<ul>
    <li>FM Radio Broadcasting.</li>
    <li>Television Sound Transmission.</li>
    <li>Wireless Communication Systems.</li>
</ul>

<hr>

<h4>3. Phase Modulation (PM)</h4>

<p>
<strong>Phase Modulation (PM)</strong> is a modulation technique in which the phase of the carrier signal is varied according to the message signal while the amplitude remains constant.
</p>

<h4>Working of PM</h4>

<p>
Changes in the information signal cause corresponding changes in the phase angle of the carrier signal.
</p>

<h4>Characteristics of PM</h4>

<ul>
    <li>Phase changes continuously.</li>
    <li>Amplitude remains constant.</li>
    <li>Provides reliable digital communication.</li>
</ul>

<h4>Advantages of PM</h4>

<ul>
    <li>Better noise immunity.</li>
    <li>Reliable transmission.</li>
    <li>Suitable for digital communication systems.</li>
</ul>

<h4>Disadvantages of PM</h4>

<ul>
    <li>Complex implementation.</li>
    <li>Higher equipment cost.</li>
</ul>

<h4>Applications of PM</h4>

<ul>
    <li>Satellite Communication.</li>
    <li>Digital Communication Systems.</li>
    <li>Mobile Communication Networks.</li>
</ul>

<hr>

<h3>Demodulation</h3>

<p>
<strong>Demodulation</strong> is the reverse process of modulation.
</p>

<p>
It is used at the receiver side to extract the original message signal from the modulated carrier signal.
</p>

<h4>Definition of Demodulation</h4>

<p>
Demodulation is the process of recovering the original information signal from a modulated signal.
</p>

<p>
Modulation occurs at the sender side, while demodulation occurs at the receiver side.
</p>

<hr>

<h4>Difference Between Modulation and Demodulation</h4>

<table class="notes-table">

<tr>
    <th>Modulation</th>
    <th>Demodulation</th>
</tr>

<tr>
    <td>Converts message signal into a modulated signal.</td>
    <td>Recovers the original message signal.</td>
</tr>

<tr>
    <td>Performed at the sender side.</td>
    <td>Performed at the receiver side.</td>
</tr>

<tr>
    <td>Required before transmission.</td>
    <td>Required after reception.</td>
</tr>

<tr>
    <td>Uses a Modulator.</td>
    <td>Uses a Demodulator.</td>
</tr>

</table>

<hr>

<h4>Comparison of AM, FM and PM</h4>

<table class="notes-table">

<tr>
    <th>Feature</th>
    <th>AM</th>
    <th>FM</th>
    <th>PM</th>
</tr>

<tr>
    <td>Parameter Changed</td>
    <td>Amplitude</td>
    <td>Frequency</td>
    <td>Phase</td>
</tr>

<tr>
    <td>Noise Resistance</td>
    <td>Low</td>
    <td>High</td>
    <td>Very High</td>
</tr>

<tr>
    <td>Bandwidth Requirement</td>
    <td>Low</td>
    <td>High</td>
    <td>Moderate</td>
</tr>

<tr>
    <td>Complexity</td>
    <td>Simple</td>
    <td>Moderate</td>
    <td>Complex</td>
</tr>

<tr>
    <td>Example</td>
    <td>AM Radio</td>
    <td>FM Radio</td>
    <td>Satellite Communication</td>
</tr>

</table>

<h4>Easy Trick to Remember</h4>

<ul>
    <li><strong>AM</strong> → Amplitude Changes</li>
    <li><strong>FM</strong> → Frequency Changes</li>
    <li><strong>PM</strong> → Phase Changes</li>
</ul>

<h4>Summary</h4>

<p>
Modulation is the process of changing the amplitude, frequency, or phase of a high-frequency carrier signal according to the message signal for efficient transmission over long distances.
</p>

<p>
The three major types of modulation are:
</p>

<ul>
    <li><strong>AM (Amplitude Modulation)</strong></li>
    <li><strong>FM (Frequency Modulation)</strong></li>
    <li><strong>PM (Phase Modulation)</strong></li>
</ul>

<p>
The reverse process of modulation is called <strong>Demodulation</strong>.
</p>

<p>
Modulation is a fundamental technique used in communication systems to transmit information over long distances efficiently. By modifying the amplitude, frequency, or phase of a carrier signal, communication systems can deliver voice, video, and data reliably. AM, FM, and PM are the three primary modulation techniques, while demodulation is used at the receiver side to recover the original information signal.
</p>

`;

let osiModelContent = `

<h3>OSI Reference Model</h3>

<p>
The <strong>OSI (Open Systems Interconnection) Reference Model</strong> is a standard framework used to understand how data is transmitted from one computer to another over a network.
</p>

<p>
The OSI model was developed by the <strong>International Organization for Standardization (ISO)</strong> in 1984 to standardize communication between different networking systems and devices.
</p>

<p>
The OSI model divides the network communication process into <strong>seven layers</strong>. Each layer performs a specific function and communicates with the layers directly above and below it.
</p>

<p>
The main purpose of the OSI model is to simplify network communication, improve interoperability between different systems, and make troubleshooting easier.
</p>

<h4>OSI Model Communication Example</h4>

<div class="notes-image">
    <img src="bca_images/osi-communication-example.png" alt="OSI Communication Example" class="img-fluid">
    <p class="image-caption">
        <strong>Figure:</strong> Philosopher–Translator–Secretary Architecture illustrating layered communication in the OSI Model.
    </p>
</div>

<p>
    The above figure explains how communication takes place between two users (Location A and Location B) using the layered approach of the OSI Model. Each layer communicates with its corresponding layer on the remote system through protocols, while the actual data travels down through the sender's layers, across the physical medium, and up through the receiver's layers.
</p>

<h5>Explanation of the Figure</h5>

<ol>
    <li>
        <strong>Application Layer (Philosopher):</strong>
        The philosopher creates the original message in his own language (e.g., "I like rabbits"). This represents the user or application generating data.
    </li>

    <li>
        <strong>Presentation Layer (Translator):</strong>
        The translator converts the message into a format that the receiver can understand (for example, translating English into Dutch). This layer is responsible for translation, encryption, and compression.
    </li>

    <li>
        <strong>Session Layer (Secretary):</strong>
        The secretary prepares the translated message for transmission, manages the communication session, and ensures that both parties remain connected throughout the conversation.
    </li>

    <li>
        <strong>Lower Layers:</strong>
        The Transport, Network, Data Link, and Physical layers deliver the message over the communication medium (telephone/network cable). At the receiving end, the same layers process the data in reverse order until it reaches the application.
    </li>

    <li>
        <strong>Receiving Side:</strong>
        The receiver's secretary accepts the data, the translator converts it back into the receiver's language, and finally the philosopher reads and understands the original message.
    </li>
</ol>

<div class="note">
    <strong>Key Point:</strong> In the OSI Model, each layer communicates logically with its corresponding layer on the remote device, but the actual data flows vertically through all layers before being transmitted across the network.
</div>

<hr>

<h3>What is the OSI Model?</h3>

<p>
The OSI Model is a seven-layer architecture that explains how data travels from a sender to a receiver through a computer network.
</p>

<h4>Definition</h4>

<p>
The OSI (Open Systems Interconnection) Model is a conceptual framework consisting of seven layers that define the functions of network communication.
</p>

<h4>Objectives of the OSI Model</h4>

<ul>
    <li>Standardize network communication.</li>
    <li>Allow different systems to communicate.</li>
    <li>Simplify network design.</li>
    <li>Improve troubleshooting and maintenance.</li>
    <li>Provide modular networking architecture.</li>
</ul>

<hr>

<h3>Seven Layers of the OSI Model</h3>

<p>
The OSI model consists of the following seven layers:
</p>

<ol>
    <li>Physical Layer</li>
    <li>Data Link Layer</li>
    <li>Network Layer</li>
    <li>Transport Layer</li>
    <li>Session Layer</li>
    <li>Presentation Layer</li>
    <li>Application Layer</li>
</ol>

<p>
Data travels from the Application Layer to the Physical Layer at the sender side and from the Physical Layer to the Application Layer at the receiver side.
</p>

<hr>

<h3>Layer 1: Physical Layer</h3>

<p>
The <strong>Physical Layer</strong> is the lowest layer of the OSI model.
</p>

<p>
It is responsible for transmitting raw bits (0s and 1s) through the physical communication medium such as cables, fiber optics, or wireless signals.
</p>

<h4>Main Functions</h4>

<ul>
    <li>Transmission of raw bits.</li>
    <li>Signal generation.</li>
    <li>Data encoding.</li>
    <li>Physical connection establishment.</li>
    <li>Bit synchronization.</li>
</ul>

<h4>Devices Used</h4>

<ul>
    <li>Hub</li>
    <li>Repeater</li>
    <li>Cables</li>
    <li>Connectors</li>
</ul>

<h4>Example</h4>

<p>
Sending electrical signals through a network cable.
</p>

<hr>

<h3>Layer 2: Data Link Layer</h3>

<p>
The <strong>Data Link Layer</strong> provides error-free communication between directly connected devices.
</p>

<p>
It receives data from the Network Layer and converts it into frames before transmission.
</p>

<h4>Main Functions</h4>

<ul>
    <li>Framing.</li>
    <li>Error detection.</li>
    <li>Error control.</li>
    <li>Flow control.</li>
    <li>MAC Addressing.</li>
</ul>

<h4>Devices Used</h4>

<ul>
    <li>Switch</li>
    <li>Bridge</li>
</ul>

<h4>Example</h4>

<p>
Ethernet communication using MAC addresses.
</p>

<hr>

<h3>Layer 3: Network Layer</h3>

<p>
The <strong>Network Layer</strong> is responsible for routing and forwarding data packets from the source network to the destination network.
</p>

<p>
It determines the best path for data transmission.
</p>

<h4>Main Functions</h4>

<ul>
    <li>Logical Addressing.</li>
    <li>Routing.</li>
    <li>Packet Forwarding.</li>
    <li>Path Selection.</li>
</ul>

<h4>Devices Used</h4>

<ul>
    <li>Router</li>
    <li>Layer 3 Switch</li>
</ul>

<h4>Example</h4>

<p>
IP Address based communication over the Internet.
</p>

<hr>

<h3>Layer 4: Transport Layer</h3>

<p>
The <strong>Transport Layer</strong> provides reliable end-to-end communication between sender and receiver.
</p>

<p>
It ensures that data reaches the destination correctly and in the proper sequence.
</p>

<h4>Main Functions</h4>

<ul>
    <li>Segmentation.</li>
    <li>Error Recovery.</li>
    <li>Flow Control.</li>
    <li>Reliable Data Delivery.</li>
    <li>Port Addressing.</li>
</ul>

<h4>Protocols Used</h4>

<ul>
    <li>TCP (Transmission Control Protocol)</li>
    <li>UDP (User Datagram Protocol)</li>
</ul>

<h4>Example</h4>

<p>
Reliable file transfer using TCP.
</p>

<hr>

<h3>Layer 5: Session Layer</h3>

<p>
The <strong>Session Layer</strong> establishes, manages, and terminates communication sessions between applications.
</p>

<p>
It ensures that communication remains active until data exchange is completed.
</p>

<h4>Main Functions</h4>

<ul>
    <li>Session Establishment.</li>
    <li>Session Maintenance.</li>
    <li>Session Termination.</li>
    <li>Synchronization.</li>
</ul>

<h4>Example</h4>

<p>
Maintaining a login session while accessing a website.
</p>

<hr>

<h3>Layer 6: Presentation Layer</h3>

<p>
The <strong>Presentation Layer</strong> acts as a translator between the Application Layer and lower layers.
</p>

<p>
It ensures that data sent by one system can be understood by another system.
</p>

<h4>Main Functions</h4>

<ul>
    <li>Data Translation.</li>
    <li>Encryption.</li>
    <li>Decryption.</li>
    <li>Data Compression.</li>
    <li>Data Formatting.</li>
</ul>

<h4>Example</h4>

<p>
Converting text formats and encrypting data before transmission.
</p>

<hr>

<h3>Layer 7: Application Layer</h3>

<p>
The <strong>Application Layer</strong> is the topmost layer of the OSI model and provides network services directly to users and applications.
</p>

<p>
This layer acts as the interface between users and the network.
</p>

<h4>Main Functions</h4>

<ul>
    <li>Email Services.</li>
    <li>Web Browsing.</li>
    <li>File Transfer.</li>
    <li>Remote Login.</li>
    <li>Network Resource Access.</li>
</ul>

<h4>Protocols Used</h4>

<ul>
    <li>HTTP</li>
    <li>HTTPS</li>
    <li>FTP</li>
    <li>SMTP</li>
    <li>DNS</li>
</ul>

<h4>Example</h4>

<p>
Opening a website using a web browser.
</p>

<hr>

<h3>Data Flow in the OSI Model</h3>

<p>
At the sender side:
</p>

<p>
Application → Presentation → Session → Transport → Network → Data Link → Physical
</p>

<p>
At the receiver side:
</p>

<p>
Physical → Data Link → Network → Transport → Session → Presentation → Application
</p>

<p>
This process is called <strong>Encapsulation and Decapsulation</strong>.
</p>

<hr>

<h3>Memory Trick for OSI Layers</h3>

<p>
To remember the layers from top to bottom:
</p>

<p>
<strong>Please Do Not Throw Sausage Pizza Away</strong>
</p>

<table class="notes-table">

<tr>
    <th>Word</th>
    <th>Layer</th>
</tr>

<tr>
    <td>Please</td>
    <td>Presentation Layer</td>
</tr>

<tr>
    <td>Do</td>
    <td>Data Link Layer</td>
</tr>

<tr>
    <td>Not</td>
    <td>Network Layer</td>
</tr>

<tr>
    <td>Throw</td>
    <td>Transport Layer</td>
</tr>

<tr>
    <td>Sausage</td>
    <td>Session Layer</td>
</tr>

<tr>
    <td>Pizza</td>
    <td>Physical Layer</td>
</tr>

<tr>
    <td>Away</td>
    <td>Application Layer</td>
</tr>

</table>

<p>
<strong>Better Exam Trick (Top to Bottom):</strong>
</p>

<p>
<strong>All People Seem To Need Data Processing</strong>
</p>

<table class="notes-table">

<tr>
    <th>Word</th>
    <th>Layer</th>
</tr>

<tr>
    <td>All</td>
    <td>Application</td>
</tr>

<tr>
    <td>People</td>
    <td>Presentation</td>
</tr>

<tr>
    <td>Seem</td>
    <td>Session</td>
</tr>

<tr>
    <td>To</td>
    <td>Transport</td>
</tr>

<tr>
    <td>Need</td>
    <td>Network</td>
</tr>

<tr>
    <td>Data</td>
    <td>Data Link</td>
</tr>

<tr>
    <td>Processing</td>
    <td>Physical</td>
</tr>

</table>

<hr>

<h3>Advantages of the OSI Model</h3>

<ul>
    <li>Provides a standard networking framework.</li>
    <li>Simplifies troubleshooting.</li>
    <li>Supports interoperability between systems.</li>
    <li>Easy network design and maintenance.</li>
    <li>Allows independent development of protocols.</li>
</ul>

<h3>Disadvantages of the OSI Model</h3>

<ul>
    <li>Complex architecture.</li>
    <li>Some layers are rarely used independently.</li>
    <li>Implementation can be costly.</li>
</ul>

<hr>

<h4>Summary</h4>

<p>
The OSI (Open Systems Interconnection) Model is a seven-layer reference model developed by ISO to standardize network communication. The seven layers are Physical, Data Link, Network, Transport, Session, Presentation, and Application Layer.
</p>

<p>
The most important layers frequently asked in exams are:
</p>

<ul>
    <li>Physical Layer → Transmission of Bits</li>
    <li>Data Link Layer → Framing and Error Detection</li>
    <li>Network Layer → Routing and IP Addressing</li>
    <li>Transport Layer → End-to-End Communication</li>
</ul>

<hr>

<p>
The OSI Reference Model is the foundation of computer networking. It divides communication into seven layers, each responsible for specific networking tasks. Understanding the functions of each layer helps students learn networking concepts, troubleshoot communication problems, and understand how data travels across modern computer networks and the Internet.
</p>

`;

let tcpipModelContent = `

<h3>TCP/IP Reference Model</h3>

<p>
The <strong>TCP/IP (Transmission Control Protocol / Internet Protocol) Reference Model</strong> is the most widely used networking model in the world. It serves as the foundation of modern computer networks and the Internet.
</p>

<p>
Whenever we browse websites, send emails, watch videos online, use social media, or transfer files, communication takes place using the TCP/IP model.
</p>

<p>
Unlike the OSI Model, which is mainly a theoretical framework, the TCP/IP model is a practical model that is actually implemented in real-world networks.
</p>

<hr>

<h3>What is TCP/IP?</h3>

<p>
TCP/IP stands for:
</p>

<ul>
    <li><strong>TCP</strong> – Transmission Control Protocol</li>
    <li><strong>IP</strong> – Internet Protocol</li>
</ul>

<p>
TCP is responsible for reliable data transmission, while IP is responsible for addressing and routing data packets across networks.
</p>

<h4>Definition</h4>

<p>
The TCP/IP Reference Model is a four-layer networking architecture that defines how data is transmitted, routed, and received over interconnected networks such as the Internet.
</p>

<hr>

<h3>History of TCP/IP</h3>

<p>
The TCP/IP model was developed by the <strong>DARPA (Defense Advanced Research Projects Agency)</strong> of the United States Department of Defense.
</p>

<p>
It was designed to create a reliable communication system that could connect different types of computer networks.
</p>

<p>
Today, TCP/IP is the standard protocol suite used across the Internet.
</p>

<hr>

<h3>Objectives of TCP/IP Model</h3>

<ul>
    <li>Provide reliable communication.</li>
    <li>Enable communication between different networks.</li>
    <li>Support Internet connectivity.</li>
    <li>Allow routing of data packets.</li>
    <li>Provide scalable networking architecture.</li>
</ul>

<hr>

<h3>Layers of TCP/IP Reference Model</h3>

<p>
The TCP/IP model consists of four layers:
</p>

<ol>
    <li>Network Access Layer</li>
    <li>Internet Layer</li>
    <li>Transport Layer</li>
    <li>Application Layer</li>
</ol>

<p>
Each layer performs specific networking functions and works together to ensure successful communication.
</p>

<hr>

<h3>1. Network Access Layer</h3>

<p>
The <strong>Network Access Layer</strong> is the lowest layer of the TCP/IP model.
</p>

<p>
It is responsible for transmitting data between devices connected to the same physical network.
</p>

<p>
This layer combines the functions of the Physical Layer and Data Link Layer of the OSI model.
</p>

<h4>Main Functions</h4>

<ul>
    <li>Physical transmission of data.</li>
    <li>Framing of data.</li>
    <li>MAC addressing.</li>
    <li>Error detection.</li>
    <li>Network media access.</li>
</ul>

<h4>Protocols and Technologies</h4>

<ul>
    <li>Ethernet</li>
    <li>Wi-Fi</li>
    <li>PPP (Point-to-Point Protocol)</li>
    <li>ARP (Address Resolution Protocol)</li>
</ul>

<h4>Devices Used</h4>

<ul>
    <li>Hub</li>
    <li>Switch</li>
    <li>Network Interface Card (NIC)</li>
</ul>

<h4>Example</h4>

<p>
Transmitting data through an Ethernet cable in a local area network.
</p>

<hr>

<h3>2. Internet Layer</h3>

<p>
The <strong>Internet Layer</strong> is responsible for logical addressing and routing of data packets from the source network to the destination network.
</p>

<p>
This layer determines the best path for data transmission across interconnected networks.
</p>

<h4>Main Functions</h4>

<ul>
    <li>Logical addressing.</li>
    <li>Packet routing.</li>
    <li>Path determination.</li>
    <li>Packet forwarding.</li>
</ul>

<h4>Main Protocols</h4>

<ul>
    <li>IP (Internet Protocol)</li>
    <li>ICMP (Internet Control Message Protocol)</li>
    <li>IGMP (Internet Group Management Protocol)</li>
</ul>

<h4>Devices Used</h4>

<ul>
    <li>Router</li>
    <li>Layer 3 Switch</li>
</ul>

<h4>Example</h4>

<p>
Sending data from India to the United States through the Internet.
</p>

<hr>

<h3>3. Transport Layer</h3>

<p>
The <strong>Transport Layer</strong> provides end-to-end communication between sender and receiver.
</p>

<p>
It ensures that data is delivered correctly, completely, and in the proper sequence.
</p>

<h4>Main Functions</h4>

<ul>
    <li>Segmentation.</li>
    <li>Error recovery.</li>
    <li>Flow control.</li>
    <li>Reliable communication.</li>
    <li>Port addressing.</li>
</ul>

<h4>Main Protocols</h4>

<ul>
    <li>TCP (Transmission Control Protocol)</li>
    <li>UDP (User Datagram Protocol)</li>
</ul>

<h4>TCP Features</h4>

<ul>
    <li>Connection-oriented.</li>
    <li>Reliable communication.</li>
    <li>Error checking.</li>
    <li>Guaranteed delivery.</li>
</ul>

<h4>UDP Features</h4>

<ul>
    <li>Connectionless communication.</li>
    <li>Fast transmission.</li>
    <li>Less overhead.</li>
    <li>No guaranteed delivery.</li>
</ul>

<h4>Example</h4>

<p>
Downloading a file using TCP.
</p>

<hr>

<h3>4. Application Layer</h3>

<p>
The <strong>Application Layer</strong> is the highest layer of the TCP/IP model.
</p>

<p>
It provides services directly to users and application programs.
</p>

<p>
This layer combines the functions of the Application Layer, Presentation Layer, and Session Layer of the OSI model.
</p>

<h4>Main Functions</h4>

<ul>
    <li>Web browsing.</li>
    <li>Email communication.</li>
    <li>File transfer.</li>
    <li>Remote access.</li>
    <li>Network resource sharing.</li>
</ul>

<h4>Main Protocols</h4>

<ul>
    <li>HTTP</li>
    <li>HTTPS</li>
    <li>FTP</li>
    <li>SMTP</li>
    <li>POP3</li>
    <li>IMAP</li>
    <li>DNS</li>
    <li>Telnet</li>
</ul>

<h4>Example</h4>

<p>
Opening a website using a browser.
</p>

<hr>

<h3>Data Flow in TCP/IP Model</h3>

<p>
At the Sender Side:
</p>

<p>
Application Layer → Transport Layer → Internet Layer → Network Access Layer
</p>

<p>
At the Receiver Side:
</p>

<p>
Network Access Layer → Internet Layer → Transport Layer → Application Layer
</p>

<p>
Data is encapsulated at the sender side and decapsulated at the receiver side.
</p>

<hr>

<h3>Relationship Between OSI and TCP/IP Model</h3>

<table class="notes-table">

<tr>
    <th>OSI Model</th>
    <th>TCP/IP Model</th>
</tr>

<tr>
    <td>Application Layer</td>
    <td rowspan="3">Application Layer</td>
</tr>

<tr>
    <td>Presentation Layer</td>
</tr>

<tr>
    <td>Session Layer</td>
</tr>

<tr>
    <td>Transport Layer</td>
    <td>Transport Layer</td>
</tr>

<tr>
    <td>Network Layer</td>
    <td>Internet Layer</td>
</tr>

<tr>
    <td>Data Link Layer</td>
    <td rowspan="2">Network Access Layer</td>
</tr>

<tr>
    <td>Physical Layer</td>
</tr>

</table>

<hr>

<h3>Difference Between OSI and TCP/IP Model</h3>

<table class="notes-table">

<tr>
    <th>OSI Model</th>
    <th>TCP/IP Model</th>
</tr>

<tr>
    <td>Contains 7 Layers.</td>
    <td>Contains 4 Layers.</td>
</tr>

<tr>
    <td>Developed by ISO.</td>
    <td>Developed by DARPA.</td>
</tr>

<tr>
    <td>Theoretical Reference Model.</td>
    <td>Practical Networking Model.</td>
</tr>

<tr>
    <td>Less commonly implemented directly.</td>
    <td>Widely used on the Internet.</td>
</tr>

<tr>
    <td>Clearly separates services and interfaces.</td>
    <td>Less strict layer separation.</td>
</tr>

<tr>
    <td>More detailed architecture.</td>
    <td>Simpler architecture.</td>
</tr>

</table>

<hr>

<h3>Advantages of TCP/IP Model</h3>

<ul>
    <li>Supports large-scale networking.</li>
    <li>Foundation of the Internet.</li>
    <li>Reliable communication.</li>
    <li>Scalable architecture.</li>
    <li>Supports different hardware and operating systems.</li>
    <li>Flexible and efficient.</li>
</ul>

<h3>Disadvantages of TCP/IP Model</h3>

<ul>
    <li>Does not clearly separate some layers.</li>
    <li>Complex protocol configuration.</li>
    <li>Security was not built into the original design.</li>
</ul>

<hr>

<h3>Easy Trick to Remember TCP/IP Layers</h3>

<p>
From Top to Bottom:
</p>

<p>
<strong>All Teachers In Network</strong>
</p>

<table class="notes-table">

<tr>
    <th>Word</th>
    <th>Layer</th>
</tr>

<tr>
    <td>All</td>
    <td>Application Layer</td>
</tr>

<tr>
    <td>Teachers</td>
    <td>Transport Layer</td>
</tr>

<tr>
    <td>In</td>
    <td>Internet Layer</td>
</tr>

<tr>
    <td>Network</td>
    <td>Network Access Layer</td>
</tr>

</table>

<hr>

<h4>Summary</h4>

<p>
The TCP/IP Reference Model is a four-layer networking architecture developed by DARPA and used on the Internet. The four layers are Network Access Layer, Internet Layer, Transport Layer, and Application Layer.
</p>

<p>
TCP/IP is considered the practical implementation of networking concepts, whereas the OSI model is mainly used as a reference model for understanding network communication.
</p>

<p>
The most important protocols in TCP/IP are:
</p>

<ul>
    <li>TCP</li>
    <li>IP</li>
    <li>HTTP</li>
    <li>HTTPS</li>
    <li>FTP</li>
    <li>DNS</li>
</ul>

<hr>


<p>
The TCP/IP Reference Model is the backbone of modern Internet communication. It consists of four layers that work together to provide reliable data transmission, routing, addressing, and user services. Understanding the TCP/IP model is essential for learning computer networking because it is the model actually used in real-world networks and Internet communication.
</p>

`;

let communicationChannelsIntroContent = `

<h3>Communication Channels</h3>

<p>
A Communication Channel is the medium or path through which data, information, or signals travel from a sender to a receiver. It acts as a bridge that connects two or more devices and enables communication between them.
</p>

<p>
In computer networks, communication channels play a vital role because they provide the route through which messages are transmitted. Without a communication channel, devices would not be able to exchange information with each other.
</p>

<p>
Whenever we send an email, make a phone call, browse a website, watch online videos, or transfer files, communication channels are used to carry the data from one location to another.
</p>

<h4>Definition</h4>

<p>
A Communication Channel is a physical or logical medium used to transmit data from a source device to a destination device.
</p>

<h4>Need for Communication Channels</h4>

<p>
Communication channels are required because data must travel through a medium to reach its destination. They provide the necessary path for information exchange between computers, mobile devices, servers, and network equipment.
</p>

<p>
Without communication channels, communication over networks such as the Internet, LAN, and WAN would not be possible.
</p>

<h4>Objectives of Communication Channels</h4>

<ul>
<li>Enable data transmission between devices.</li>
<li>Provide reliable communication.</li>
<li>Support long-distance communication.</li>
<li>Facilitate resource sharing.</li>
<li>Allow information exchange in networks.</li>
<li>Support voice, video, and data communication.</li>
</ul>

<h4>Communication Process</h4>

<p>
Sender → Communication Channel → Receiver
</p>

<h4>Types of Communication Channels</h4>

<h4>1. Wired Communication Channels</h4>

<p>
In wired communication, data is transmitted through physical cables or wires.
</p>

<ul>
<li>Twisted Pair Cable</li>
<li>Coaxial Cable</li>
<li>Optical Fiber Cable</li>
<li>Telephone Lines</li>
</ul>

<h4>2. Wireless Communication Channels</h4>

<p>
In wireless communication, data is transmitted through electromagnetic waves without using physical cables.
</p>

<ul>
<li>Radio Waves</li>
<li>Microwave Transmission</li>
<li>Infrared Communication</li>
<li>Satellite Communication</li>
<li>Wi-Fi Networks</li>
<li>Bluetooth Communication</li>
</ul>

<h4>Comparison of Wired and Wireless Communication</h4>

<table class ="notes-table">
<tr>
<th>Wired Communication</th>
<th>Wireless Communication</th>
</tr>
<tr>
<td>Uses Physical Cables</td>
<td>Uses Electromagnetic Waves</td>
</tr>
<tr>
<td>Higher Security</td>
<td>Lower Security</td>
</tr>
<tr>
<td>More Stable</td>
<td>Affected by Interference</td>
</tr>
<tr>
<td>Limited Mobility</td>
<td>Supports Mobility</td>
</tr>
<tr>
<td>Higher Installation Cost</td>
<td>Easier Deployment</td>
</tr>
</table>

<h4>Characteristics of a Good Communication Channel</h4>

<ul>
<li>High Data Transfer Speed</li>
<li>Low Transmission Delay</li>
<li>High Reliability</li>
<li>Low Noise and Interference</li>
<li>High Security</li>
<li>Low Error Rate</li>
<li>Cost Effectiveness</li>
<li>Scalability</li>
</ul>

<h4>Applications of Communication Channels</h4>

<ul>
<li>Internet Communication</li>
<li>Email Services</li>
<li>Mobile Communication</li>
<li>Video Conferencing</li>
<li>Online Education</li>
<li>Cloud Computing</li>
<li>Banking Systems</li>
<li>Social Networking Platforms</li>
<li>Television Broadcasting</li>
<li>Satellite Communication</li>
</ul>

<h4>Advantages</h4>

<ul>
<li>Enable fast data transmission.</li>
<li>Support global communication.</li>
<li>Facilitate resource sharing.</li>
<li>Allow real-time communication.</li>
<li>Support voice, video, and multimedia services.</li>
</ul>

<h4>Disadvantages</h4>

<ul>
<li>Installation costs may be high.</li>
<li>Signal interference can affect performance.</li>
<li>Hardware failures may interrupt communication.</li>
<li>Wireless channels may face security threats.</li>
</ul>

<h4>Summary</h4>

<p>
A Communication Channel is a medium or path used to transfer data from a sender to a receiver. Communication channels are classified into wired and wireless channels. Examples include Twisted Pair Cable, Coaxial Cable, Optical Fiber Cable, Radio Waves, and Satellite Communication.
</p>

`;

let wiredTransmissionContent = `

<h3>Wired Transmission Media</h3>

<p>
Wired Transmission Media refers to the communication channels in which data travels through physical cables or wires from the sender to the receiver. It is also known as Guided Transmission Media because the signals are guided through a specific physical path.
</p>

<p>
In wired communication, electrical or light signals travel through cables to transfer information between devices. Wired transmission is widely used in computer networks because it provides reliable communication, high speed, and better security compared to wireless transmission.
</p>

<h4>Definition</h4>

<p>
Wired Transmission Media is a communication medium that uses physical cables to transmit data signals between network devices.
</p>

<h4>Need for Wired Transmission Media</h4>

<p>
To establish communication between computers and network devices, a transmission path is required. Wired transmission media provides a dedicated communication path that ensures accurate and reliable data transfer.
</p>

<p>
It is commonly used in Local Area Networks (LANs), telephone systems, cable television networks, and Internet connections.
</p>

<h4>Characteristics of Wired Transmission Media</h4>

<ul>
<li>Uses Physical Cables</li>
<li>Provides Reliable Communication</li>
<li>Less Signal Interference</li>
<li>Higher Data Security</li>
<li>Supports High Data Transfer Rates</li>
<li>Suitable for Long-Term Network Installations</li>
</ul>

<h4>Types of Wired Transmission Media</h4>

<ul>
<li>UTP (Unshielded Twisted Pair)</li>
<li>STP (Shielded Twisted Pair)</li>
<li>Telephone Lines</li>
<li>Coaxial Cable</li>
<li>Optical Fiber Cable</li>
</ul>

<hr>

<h3>UTP (Unshielded Twisted Pair Cable)</h3>

<p>
UTP stands for Unshielded Twisted Pair. It consists of multiple pairs of insulated copper wires twisted together. The twisting helps reduce electromagnetic interference and crosstalk between wire pairs.
</p>

<p>
UTP is the most commonly used cable in LANs and Ethernet networks because it is inexpensive, flexible, and easy to install.
</p>

<h4>Structure of UTP Cable</h4>

<p>
A UTP cable contains four pairs of twisted copper wires enclosed within a plastic jacket.
</p>

<h4>Categories of UTP Cable</h4>

<table class="notes-table">

<tr>
<th>Category</th>
<th>Maximum Speed</th>
</tr>

<tr>
<td>Cat5</td>
<td>100 Mbps</td>
</tr>

<tr>
<td>Cat5e</td>
<td>1 Gbps</td>
</tr>

<tr>
<td>Cat6</td>
<td>10 Gbps (Short Distance)</td>
</tr>

<tr>
<td>Cat6a</td>
<td>10 Gbps</td>
</tr>

</table>

<h4>Advantages of UTP</h4>

<ul>
<li>Low Cost</li>
<li>Easy Installation</li>
<li>Flexible and Lightweight</li>
<li>Widely Available</li>
<li>Easy Maintenance</li>
</ul>

<h4>Disadvantages of UTP</h4>

<ul>
<li>Affected by Electromagnetic Interference</li>
<li>Less Secure than Fiber Optics</li>
<li>Limited Distance Support</li>
</ul>

<h4>Applications of UTP</h4>

<ul>
<li>LAN Networks</li>
<li>Ethernet Networks</li>
<li>Office Networking</li>
<li>Home Internet Connections</li>
</ul>

<hr>

<h3>STP (Shielded Twisted Pair Cable)</h3>

<p>
STP stands for Shielded Twisted Pair. It is similar to UTP but contains an additional metallic shield around the twisted wires.
</p>

<p>
The shield protects the cable from electromagnetic interference and external noise, making communication more reliable.
</p>

<h4>Structure of STP Cable</h4>

<p>
STP consists of twisted wire pairs surrounded by metallic shielding and an outer protective jacket.
</p>

<h4>Advantages of STP</h4>

<ul>
<li>Better Protection Against Noise</li>
<li>Reduced Electromagnetic Interference</li>
<li>Improved Signal Quality</li>
<li>Reliable Communication</li>
</ul>

<h4>Disadvantages of STP</h4>

<ul>
<li>More Expensive than UTP</li>
<li>Difficult Installation</li>
<li>Less Flexible</li>
<li>Requires Proper Grounding</li>
</ul>

<h4>Applications of STP</h4>

<ul>
<li>Industrial Networks</li>
<li>Data Centers</li>
<li>High Interference Environments</li>
<li>Enterprise Networks</li>
</ul>

<h4>Difference Between UTP and STP</h4>

<table class="notes-table">

<tr>
<th>UTP</th>
<th>STP</th>
</tr>

<tr>
<td>No Shielding</td>
<td>Contains Shielding</td>
</tr>

<tr>
<td>Lower Cost</td>
<td>Higher Cost</td>
</tr>

<tr>
<td>Easy Installation</td>
<td>Complex Installation</td>
</tr>

<tr>
<td>More Noise Sensitive</td>
<td>Less Noise Sensitive</td>
</tr>

<tr>
<td>Used in LANs</td>
<td>Used in High Noise Areas</td>
</tr>

</table>

<hr>

<h3>Telephone Lines</h3>

<p>
Telephone Lines are one of the oldest communication media used for transmitting voice and data signals over long distances.
</p>

<p>
Traditional telephone systems use twisted pair copper wires to connect subscribers with telephone exchanges.
</p>

<p>
Modern Internet technologies such as DSL (Digital Subscriber Line) also use telephone lines for data communication.
</p>

<h4>Advantages of Telephone Lines</h4>

<ul>
<li>Widely Available</li>
<li>Low Installation Cost</li>
<li>Supports Voice and Data Communication</li>
</ul>

<h4>Disadvantages of Telephone Lines</h4>

<ul>
<li>Limited Bandwidth</li>
<li>Lower Speed than Modern Technologies</li>
<li>Affected by Signal Attenuation</li>
</ul>

<h4>Applications of Telephone Lines</h4>

<ul>
<li>Telephone Networks</li>
<li>DSL Internet Connections</li>
<li>Fax Communication</li>
<li>Voice Communication Systems</li>
</ul>

<hr>

<h3>Coaxial Cable</h3>

<p>
A Coaxial Cable is a high-capacity communication cable consisting of a central conductor surrounded by insulation, metallic shielding, and an outer protective cover.
</p>

<p>
The shielding provides excellent protection against external interference and allows data transmission over longer distances.
</p>

<h4>Structure of Coaxial Cable</h4>

<ul>
<li>Central Copper Conductor</li>
<li>Insulating Layer</li>
<li>Metallic Shield</li>
<li>Outer Plastic Jacket</li>
</ul>

<h4>Advantages of Coaxial Cable</h4>

<ul>
<li>Higher Bandwidth</li>
<li>Better Noise Resistance</li>
<li>Long Distance Communication</li>
<li>Reliable Performance</li>
</ul>

<h4>Disadvantages of Coaxial Cable</h4>

<ul>
<li>Costlier than UTP</li>
<li>Less Flexible</li>
<li>Difficult Installation</li>
</ul>

<h4>Applications of Coaxial Cable</h4>

<ul>
<li>Cable Television Networks</li>
<li>Broadband Internet Connections</li>
<li>CCTV Systems</li>
<li>Video Transmission Systems</li>
</ul>

<h4>Difference Between Twisted Pair Cable and Coaxial Cable</h4>

<table class="notes-table">

<tr>
<th>Twisted Pair Cable</th>
<th>Coaxial Cable</th>
</tr>

<tr>
<td>Lower Bandwidth</td>
<td>Higher Bandwidth</td>
</tr>

<tr>
<td>Less Expensive</td>
<td>More Expensive</td>
</tr>

<tr>
<td>More Interference</td>
<td>Better Noise Protection</td>
</tr>

<tr>
<td>Used in LANs</td>
<td>Used in Cable TV and Broadband</td>
</tr>

</table>

<h4>Advantages of Wired Transmission Media</h4>

<ul>
<li>High Reliability</li>
<li>Better Security</li>
<li>Stable Communication</li>
<li>Less Data Loss</li>
<li>Higher Speed</li>
</ul>

<h4>Disadvantages of Wired Transmission Media</h4>

<ul>
<li>Requires Physical Installation</li>
<li>Limited Mobility</li>
<li>Maintenance Cost</li>
<li>Cable Damage Can Disrupt Communication</li>
</ul>

<h4>Summary</h4>

<p>
Wired Transmission Media uses physical cables to transfer data between devices. Common wired media include UTP, STP, Telephone Lines, Coaxial Cable, and Optical Fiber Cable. Wired communication provides high reliability, better security, and stable performance, making it suitable for LANs, telephone systems, and Internet communication.
</p>

<p>
Wired Transmission Media is a guided communication medium that uses physical cables to transmit data. The major types are UTP, STP, Telephone Lines, Coaxial Cable, and Optical Fiber Cable. Wired media provide reliable communication, high security, and high-speed data transmission.
</p>

`;

let transmissionTechniquesContent = `

<h3>Transmission Techniques</h3>

<p>
Transmission Techniques refer to the methods used to send data signals from one device to another through a communication channel. These techniques determine how the available bandwidth of a communication medium is utilized for data transmission.
</p>

<p>
In computer networks, transmission techniques play an important role in achieving efficient communication, better bandwidth utilization, and reliable data transfer.
</p>

<h4>Definition</h4>

<p>
A Transmission Technique is a method used to transmit data signals through a communication medium from the sender to the receiver.
</p>

<h4>Need for Transmission Techniques</h4>

<p>
Different communication systems have different requirements regarding speed, bandwidth, distance, and the number of users. Transmission techniques help in utilizing communication channels efficiently and improving network performance.
</p>

<h4>Types of Transmission Techniques</h4>

<ul>
<li>Baseband Transmission</li>
<li>Broadband Transmission</li>
</ul>

<hr>

<h3>Baseband Transmission</h3>

<p>
Baseband Transmission is a transmission technique in which the entire bandwidth of the communication channel is used by a single signal at a time.
</p>

<p>
In this method, digital signals are transmitted directly through the communication medium without frequency modulation.
</p>

<p>
Since the complete channel is occupied by one signal, no other signal can use the channel simultaneously.
</p>

<h4>Working of Baseband Transmission</h4>

<p>
The sender transmits digital data directly over the communication medium. The entire bandwidth remains dedicated to that signal until the transmission is completed.
</p>

<h4>Characteristics of Baseband Transmission</h4>

<ul>
<li>Uses Digital Signals</li>
<li>Single Signal Transmission</li>
<li>Entire Channel Used by One Device</li>
<li>Simple Communication Method</li>
<li>Suitable for Short Distances</li>
</ul>

<h4>Advantages of Baseband Transmission</h4>

<ul>
<li>Simple Implementation</li>
<li>Low Cost</li>
<li>Easy Maintenance</li>
<li>Efficient for Local Networks</li>
</ul>

<h4>Disadvantages of Baseband Transmission</h4>

<ul>
<li>Only One Signal at a Time</li>
<li>Limited Distance Coverage</li>
<li>Bandwidth Cannot Be Shared</li>
</ul>

<h4>Applications of Baseband Transmission</h4>

<ul>
<li>Ethernet LAN</li>
<li>Computer Networks</li>
<li>Office Networks</li>
<li>Local Communication Systems</li>
</ul>

<hr>

<h3>Broadband Transmission</h3>

<p>
Broadband Transmission is a transmission technique in which the available bandwidth is divided into multiple frequency channels, allowing multiple signals to be transmitted simultaneously.
</p>

<p>
Each signal is assigned a separate frequency band, enabling several users or services to share the same communication medium.
</p>

<p>
Broadband communication generally uses analog signaling techniques and supports high-speed data transmission over longer distances.
</p>

<h4>Working of Broadband Transmission</h4>

<p>
The communication channel is divided into multiple frequency bands using Frequency Division Multiplexing (FDM). Each signal occupies a separate frequency range and can travel simultaneously through the same medium.
</p>

<h4>Characteristics of Broadband Transmission</h4>

<ul>
<li>Supports Multiple Signals</li>
<li>Uses Frequency Division Multiplexing</li>
<li>Higher Bandwidth Utilization</li>
<li>Suitable for Long Distances</li>
<li>Supports Simultaneous Communication</li>
</ul>

<h4>Advantages of Broadband Transmission</h4>

<ul>
<li>Multiple Signals Can Be Sent Simultaneously</li>
<li>Higher Data Transfer Capacity</li>
<li>Efficient Bandwidth Utilization</li>
<li>Suitable for Multimedia Communication</li>
</ul>

<h4>Disadvantages of Broadband Transmission</h4>

<ul>
<li>Complex Implementation</li>
<li>Higher Installation Cost</li>
<li>Requires Specialized Equipment</li>
</ul>

<h4>Applications of Broadband Transmission</h4>

<ul>
<li>Cable Television Networks</li>
<li>Broadband Internet Services</li>
<li>Satellite Communication</li>
<li>Video Streaming Services</li>
<li>Telecommunication Systems</li>
</ul>

<hr>

<h3>Difference Between Baseband and Broadband Transmission</h3>

<table class="notes-table">

<tr>
<th>Baseband Transmission</th>
<th>Broadband Transmission</th>
</tr>

<tr>
<td>Uses Entire Channel for One Signal</td>
<td>Channel is Divided into Multiple Frequency Bands</td>
</tr>

<tr>
<td>Only One Signal is Transmitted at a Time</td>
<td>Multiple Signals are Transmitted Simultaneously</td>
</tr>

<tr>
<td>Uses Digital Signals</td>
<td>Usually Uses Analog Signals</td>
</tr>

<tr>
<td>Simple and Low Cost</td>
<td>More Complex and Expensive</td>
</tr>

<tr>
<td>Suitable for Short Distances</td>
<td>Suitable for Long Distances</td>
</tr>

<tr>
<td>Commonly Used in Ethernet LANs</td>
<td>Commonly Used in Cable TV and Internet Services</td>
</tr>

<tr>
<td>Does Not Require Frequency Division Multiplexing</td>
<td>Uses Frequency Division Multiplexing (FDM)</td>
</tr>

</table>

<h4>Real-Life Example</h4>

<p>
Consider a road. In Baseband Transmission, the entire road is reserved for one vehicle at a time. In Broadband Transmission, the road is divided into multiple lanes, allowing several vehicles to travel simultaneously.
</p>

<h4>Summary</h4>

<p>
Transmission Techniques define how data signals are transmitted through a communication medium. The two major techniques are Baseband Transmission and Broadband Transmission. Baseband uses the entire channel for one signal, while Broadband divides the channel into multiple frequency bands and supports simultaneous communication.
</p>

<p>
Baseband Transmission uses the complete communication channel for transmitting a single signal at a time. Broadband Transmission divides the communication channel into multiple frequency bands and allows multiple signals to be transmitted simultaneously.
</p>

`;

let opticalFiberContent = `

<h3>Optical Fiber Transmission</h3>

<p>
Optical Fiber is one of the most advanced and fastest transmission media used in modern communication systems. It transmits data in the form of light pulses through extremely thin strands of glass or plastic called optical fibers.
</p>

<p>
Unlike traditional copper cables that use electrical signals, optical fiber uses light signals generated by lasers or LEDs. Because light travels at a very high speed, optical fiber provides extremely fast communication and very high bandwidth.
</p>

<p>
Today, optical fiber is widely used in Internet backbone networks, broadband connections, telecommunications, cable television systems, data centers, and long-distance communication networks.
</p>

<h4>Definition</h4>

<p>
Optical Fiber is a guided transmission medium that uses light signals to transmit data through thin glass or plastic fibers.
</p>

<h4>Need for Optical Fiber</h4>

<p>
As communication requirements increased, traditional copper cables became insufficient for handling large amounts of data at high speeds.
</p>

<p>
Optical fiber was developed to provide:
</p>

<ul>
<li>Higher Data Transfer Speed</li>
<li>Greater Bandwidth</li>
<li>Long Distance Communication</li>
<li>Better Signal Quality</li>
<li>Higher Security</li>
</ul>

<h4>Working Principle of Optical Fiber</h4>

<p>
Optical fiber works on the principle of Total Internal Reflection.
</p>

<p>
When a light ray enters the fiber at a specific angle, it continuously reflects from the inner walls of the fiber and travels through the cable with very little loss.
</p>

<p>
The transmission process is as follows:
</p>

<ul>
<li>Data is converted into light signals.</li>
<li>The light signals travel through the optical fiber.</li>
<li>The receiver detects the light pulses.</li>
<li>The light signals are converted back into electrical signals.</li>
</ul>

<h4>Communication Process</h4>

<p>
Sender → Light Source (LED/Laser) → Optical Fiber → Photodetector → Receiver
</p>

<h4>Main Components of Optical Fiber</h4>

<h4>1. Core</h4>

<p>
The Core is the central part of the optical fiber through which light travels.
</p>

<p>
It is made of high-quality glass or plastic and carries the actual data signals.
</p>

<h4>2. Cladding</h4>

<p>
The Cladding surrounds the core and has a lower refractive index than the core.
</p>

<p>
Its primary function is to keep the light signals confined within the core through total internal reflection.
</p>

<h4>3. Protective Jacket</h4>

<p>
The Protective Jacket is the outer covering that protects the fiber from physical damage, moisture, and environmental effects.
</p>

<h4>Structure of Optical Fiber</h4>

<table class="notes-table">

<tr>
<th>Component</th>
<th>Function</th>
</tr>

<tr>
<td>Core</td>
<td>Carries Light Signals</td>
</tr>

<tr>
<td>Cladding</td>
<td>Reflects Light Back into the Core</td>
</tr>

<tr>
<td>Protective Jacket</td>
<td>Provides Mechanical Protection</td>
</tr>

</table>

<h4>Types of Optical Fiber</h4>

<h4>1. Single Mode Fiber</h4>

<p>
Single Mode Fiber has a very small core diameter and allows only one light path to travel through the fiber.
</p>

<p>
It is used for long-distance communication because signal loss is very low.
</p>

<h4>Characteristics</h4>

<ul>
<li>Small Core Diameter</li>
<li>Single Light Path</li>
<li>Long Distance Communication</li>
<li>High Data Rate</li>
</ul>

<h4>Applications</h4>

<ul>
<li>Telecommunication Networks</li>
<li>Internet Backbone Networks</li>
<li>Long-Distance Communication</li>
</ul>

<h4>2. Multi Mode Fiber</h4>

<p>
Multi Mode Fiber has a larger core diameter and allows multiple light rays to travel simultaneously.
</p>

<p>
It is mainly used for short-distance communication.
</p>

<h4>Characteristics</h4>

<ul>
<li>Larger Core Diameter</li>
<li>Multiple Light Paths</li>
<li>Lower Cost</li>
<li>Short Distance Communication</li>
</ul>

<h4>Applications</h4>

<ul>
<li>LAN Networks</li>
<li>Data Centers</li>
<li>Campus Networks</li>
</ul>

<h4>Difference Between Single Mode and Multi Mode Fiber</h4>

<table class="notes-table">

<tr>
<th>Single Mode Fiber</th>
<th>Multi Mode Fiber</th>
</tr>

<tr>
<td>Small Core Diameter</td>
<td>Large Core Diameter</td>
</tr>

<tr>
<td>One Light Path</td>
<td>Multiple Light Paths</td>
</tr>

<tr>
<td>Long Distance Communication</td>
<td>Short Distance Communication</td>
</tr>

<tr>
<td>Higher Cost</td>
<td>Lower Cost</td>
</tr>

<tr>
<td>Higher Data Rate</td>
<td>Lower Data Rate</td>
</tr>

</table>

<h4>Features of Optical Fiber</h4>

<ul>
<li>Very High Transmission Speed</li>
<li>Extremely Large Bandwidth</li>
<li>Low Signal Loss</li>
<li>High Security</li>
<li>Long Distance Communication</li>
<li>Immune to Electromagnetic Interference</li>
<li>Lightweight and Compact</li>
</ul>

<h4>Advantages of Optical Fiber</h4>

<ul>
<li>Very High Speed Communication</li>
<li>Largest Bandwidth Among Transmission Media</li>
<li>Supports Long Distance Transmission</li>
<li>Very Low Signal Attenuation</li>
<li>Not Affected by Electromagnetic Interference</li>
<li>High Security and Privacy</li>
<li>Light Weight and Small Size</li>
<li>Reliable Communication</li>
</ul>

<h4>Disadvantages of Optical Fiber</h4>

<ul>
<li>High Installation Cost</li>
<li>Difficult Maintenance</li>
<li>Requires Skilled Technicians</li>
<li>Fragile Compared to Copper Cables</li>
<li>Complex Repair Process</li>
</ul>

<h4>Applications of Optical Fiber</h4>

<ul>
<li>Internet Backbone Networks</li>
<li>Fiber Broadband Connections</li>
<li>Telephone Networks</li>
<li>Cable Television Systems</li>
<li>Data Centers</li>
<li>Cloud Computing Infrastructure</li>
<li>Military Communication Systems</li>
<li>Medical Equipment</li>
<li>Video Conferencing Systems</li>
<li>Undersea Communication Cables</li>
</ul>

<h4>Difference Between Optical Fiber and Coaxial Cable</h4>

<table class="notes-table">

<tr>
<th>Optical Fiber</th>
<th>Coaxial Cable</th>
</tr>

<tr>
<td>Uses Light Signals</td>
<td>Uses Electrical Signals</td>
</tr>

<tr>
<td>Very High Speed</td>
<td>Moderate Speed</td>
</tr>

<tr>
<td>Very High Bandwidth</td>
<td>Lower Bandwidth</td>
</tr>

<tr>
<td>Immune to Electromagnetic Interference</td>
<td>Affected by Interference</td>
</tr>

<tr>
<td>Long Distance Communication</td>
<td>Shorter Distance Communication</td>
</tr>

<tr>
<td>Higher Cost</td>
<td>Lower Cost</td>
</tr>

</table>

<h4>Real-Life Example</h4>

<p>
Consider a highway designed exclusively for high-speed vehicles. Because there are fewer obstacles and less traffic congestion, vehicles can travel very quickly.
</p>

<p>
Similarly, optical fiber provides a dedicated light-based communication path that allows enormous amounts of data to travel at extremely high speeds.
</p>

<h4>Summary</h4>

<p>
Optical Fiber is a guided transmission medium that uses light signals for data communication. It consists of a core, cladding, and protective jacket and works on the principle of total internal reflection. Optical fiber provides the highest bandwidth, very high speed, excellent security, and long-distance communication capabilities, making it the preferred transmission medium for modern communication networks.
</p>


<p>
Optical Fiber is a transmission medium that uses light signals to transfer data through thin glass or plastic fibers. It works on the principle of total internal reflection and provides very high speed, large bandwidth, high security, and long-distance communication. The main components of optical fiber are Core, Cladding, and Protective Jacket.
</p>

`;

let wirelessTransmissionContent = `

<h3>Wireless Transmission</h3>

<p>
Wireless Transmission is a method of communication in which data is transmitted from one device to another without using any physical cables or wires. Instead of guided media such as twisted pair cables, coaxial cables, or optical fibers, wireless communication uses electromagnetic waves that travel through the atmosphere.
</p>

<p>
Wireless communication has become one of the most important technologies in modern networking because it provides mobility, flexibility, and easy connectivity. Mobile phones, Wi-Fi networks, Bluetooth devices, satellite communication systems, and radio broadcasting all rely on wireless transmission.
</p>

<h4>Definition</h4>

<p>
Wireless Transmission is the process of transmitting data, voice, video, or other information through electromagnetic waves without using physical transmission media.
</p>

<h4>Need for Wireless Transmission</h4>

<p>
In many situations, installing physical cables is difficult, expensive, or impractical. Wireless transmission solves this problem by enabling communication through the air.
</p>

<p>
It is especially useful for mobile users, remote locations, and rapidly changing network environments.
</p>

<h4>Working of Wireless Transmission</h4>

<p>
In wireless communication, the sender converts data into electromagnetic signals and transmits them through antennas. These signals travel through the atmosphere and are received by another antenna at the destination. The receiver then converts the signals back into usable data.
</p>

<h4>Communication Process</h4>

<p>
Sender → Antenna → Electromagnetic Waves → Antenna → Receiver
</p>

<h4>Characteristics of Wireless Transmission</h4>

<ul>
<li>No Physical Cables Required</li>
<li>Uses Electromagnetic Waves</li>
<li>Provides Mobility</li>
<li>Easy Network Expansion</li>
<li>Supports Long Distance Communication</li>
<li>Flexible Communication Method</li>
<li>Quick Installation</li>
</ul>

<h4>Types of Wireless Transmission Media</h4>

<ul>
<li>Radio Waves</li>
<li>Microwaves</li>
<li>Infrared Waves</li>
<li>Laser Communication</li>
<li>Satellite Communication</li>
</ul>

<h4>Advantages of Wireless Transmission</h4>

<ul>
<li>No Cable Installation Required</li>
<li>Supports Mobile Users</li>
<li>Easy Network Setup</li>
<li>Flexible Communication</li>
<li>Suitable for Remote Areas</li>
<li>Cost Effective for Large Areas</li>
<li>Easy Maintenance and Expansion</li>
</ul>

<h4>Disadvantages of Wireless Transmission</h4>

<ul>
<li>Security Risks</li>
<li>Affected by Noise and Interference</li>
<li>Signal Strength May Vary</li>
<li>Lower Reliability Than Wired Communication</li>
<li>Weather Conditions May Affect Communication</li>
<li>Limited Bandwidth in Some Technologies</li>
</ul>

<h4>Applications of Wireless Transmission</h4>

<ul>
<li>Wi-Fi Networks</li>
<li>Mobile Communication Systems</li>
<li>Bluetooth Communication</li>
<li>Satellite Communication</li>
<li>Radio Broadcasting</li>
<li>Television Broadcasting</li>
<li>GPS Navigation Systems</li>
<li>Military Communication</li>
<li>Remote Sensing Systems</li>
<li>Internet of Things (IoT)</li>
</ul>

<h4>Wireless Transmission Devices</h4>

<ul>
<li>Wireless Routers</li>
<li>Access Points</li>
<li>Mobile Phones</li>
<li>Satellite Antennas</li>
<li>Bluetooth Devices</li>
<li>Radio Transmitters</li>
</ul>

<h4>Difference Between Wired and Wireless Transmission</h4>

<table class="notes-table">

<tr>
<th>Wired Transmission</th>
<th>Wireless Transmission</th>
</tr>

<tr>
<td>Uses Physical Cables</td>
<td>Uses Electromagnetic Waves</td>
</tr>

<tr>
<td>Higher Security</td>
<td>Lower Security</td>
</tr>

<tr>
<td>More Reliable</td>
<td>Can Be Affected by Interference</td>
</tr>

<tr>
<td>Limited Mobility</td>
<td>Supports Mobility</td>
</tr>

<tr>
<td>Difficult Installation</td>
<td>Easy Installation</td>
</tr>

<tr>
<td>Generally Higher Speed</td>
<td>Speed Depends on Signal Strength</td>
</tr>

</table>

<h4>Challenges in Wireless Transmission</h4>

<ul>
<li>Signal Attenuation</li>
<li>Electromagnetic Interference</li>
<li>Multipath Propagation</li>
<li>Security Threats</li>
<li>Network Congestion</li>
<li>Environmental Obstacles</li>
</ul>

<h4>Real-Life Example</h4>

<p>
When you connect your smartphone to a Wi-Fi network, data is transmitted between the router and the smartphone through radio waves without using any physical cable. This is a common example of wireless transmission.
</p>

<h4>Summary</h4>

<p>
Wireless Transmission is a communication method that uses electromagnetic waves to transfer data without physical cables. It provides mobility, flexibility, and easy installation, making it ideal for modern communication systems such as Wi-Fi, mobile networks, Bluetooth, and satellite communication.
</p>


<p>
Wireless Transmission is the process of transmitting data through electromagnetic waves without using physical cables. It provides mobility and flexibility and is widely used in Wi-Fi networks, mobile communication, satellite communication, and radio broadcasting. Major wireless media include Radio Waves, Microwaves, Infrared Waves, Laser Communication, and Satellite Communication.
</p>

`;

let microwaveInfraredContent = `

<h3>Microwave and Infrared Transmission</h3>

<p>
Microwave and Infrared are important types of wireless transmission media used for data communication without physical cables. Both technologies use electromagnetic waves to transmit information, but they differ in frequency range, communication distance, applications, and transmission methods.
</p>

<p>
Microwave communication is mainly used for long-distance communication and networking, while Infrared communication is commonly used for short-range device communication.
</p>

<hr>

<h3>Microwave Transmission</h3>

<p>
Microwave Transmission is a wireless communication technology that uses high-frequency electromagnetic waves to transmit data, voice, and video signals over long distances.
</p>

<p>
Microwave signals generally operate between 1 GHz and 300 GHz frequency ranges and travel in straight lines. Therefore, microwave communication requires a clear Line of Sight (LOS) between the transmitting and receiving antennas.
</p>

<h4>Definition</h4>

<p>
Microwave Transmission is the process of transmitting information using high-frequency radio waves through the atmosphere.
</p>

<h4>Working of Microwave Communication</h4>

<p>
The transmitter converts information into microwave signals and sends them through a directional antenna. The receiving antenna captures these signals and converts them back into usable information.
</p>

<p>
Since microwave signals travel in straight lines, tall towers are often installed to maintain communication over long distances.
</p>

<h4>Characteristics of Microwave Transmission</h4>

<ul>
<li>Uses High-Frequency Electromagnetic Waves</li>
<li>Requires Line-of-Sight Communication</li>
<li>Supports Long Distance Communication</li>
<li>Provides High Data Transfer Rates</li>
<li>Can Carry Voice, Video, and Data Signals</li>
<li>Uses Directional Antennas</li>
</ul>

<h4>Advantages of Microwave Transmission</h4>

<ul>
<li>High Bandwidth</li>
<li>Long Distance Communication</li>
<li>Fast Data Transmission</li>
<li>Easy Installation Compared to Wired Networks</li>
<li>Suitable for Remote Areas</li>
</ul>

<h4>Disadvantages of Microwave Transmission</h4>

<ul>
<li>Requires Line of Sight</li>
<li>Affected by Weather Conditions</li>
<li>Signal Interference May Occur</li>
<li>Installation of Towers May Be Costly</li>
</ul>

<h4>Applications of Microwave Transmission</h4>

<ul>
<li>Mobile Communication Networks</li>
<li>Satellite Communication</li>
<li>Television Broadcasting</li>
<li>Internet Backbone Networks</li>
<li>Point-to-Point Communication Links</li>
<li>Radar Systems</li>
</ul>

<h4>Real-Life Example</h4>

<p>
Mobile phone towers communicate with each other using microwave signals to transfer voice and data traffic across cities and regions.
</p>

<hr>

<h3>Infrared Transmission</h3>

<p>
Infrared Transmission is a wireless communication technology that uses infrared light waves to transmit data between devices over short distances.
</p>

<p>
Infrared waves have frequencies higher than radio waves but lower than visible light. Infrared communication is commonly used in remote controls, wireless peripherals, and short-range communication systems.
</p>

<h4>Definition</h4>

<p>
Infrared Transmission is the process of transmitting information using infrared light waves between electronic devices.
</p>

<h4>Working of Infrared Communication</h4>

<p>
The transmitting device converts data into infrared light signals. These signals travel through the air and are detected by an infrared receiver, which converts them back into data.
</p>

<p>
Infrared communication usually requires a direct line of sight between the transmitter and receiver.
</p>

<h4>Characteristics of Infrared Transmission</h4>

<ul>
<li>Uses Infrared Light Waves</li>
<li>Short Distance Communication</li>
<li>Requires Direct Line of Sight</li>
<li>Cannot Penetrate Walls</li>
<li>Low Power Consumption</li>
<li>Suitable for Indoor Communication</li>
</ul>

<h4>Advantages of Infrared Transmission</h4>

<ul>
<li>Low Cost</li>
<li>Simple Technology</li>
<li>Secure Communication Within a Room</li>
<li>Low Power Requirement</li>
<li>No Radio Frequency Interference</li>
</ul>

<h4>Disadvantages of Infrared Transmission</h4>

<ul>
<li>Limited Communication Range</li>
<li>Requires Direct Line of Sight</li>
<li>Cannot Pass Through Walls</li>
<li>Affected by Physical Obstacles</li>
<li>Lower Data Range Compared to Microwave</li>
</ul>

<h4>Applications of Infrared Transmission</h4>

<ul>
<li>TV Remote Controls</li>
<li>Air Conditioner Remote Controls</li>
<li>Wireless Mouse and Keyboard</li>
<li>Short Range Device Communication</li>
<li>Infrared Sensors</li>
<li>Security Systems</li>
</ul>

<h4>Real-Life Example</h4>

<p>
When a user presses a button on a TV remote control, infrared light signals are transmitted to the television to perform the selected operation.
</p>

<hr>

<h3>Difference Between Microwave and Infrared Transmission</h3>

<table class="notes-table">

<tr>
<th>Microwave Transmission</th>
<th>Infrared Transmission</th>
</tr>

<tr>
<td>Uses High-Frequency Radio Waves</td>
<td>Uses Infrared Light Waves</td>
</tr>

<tr>
<td>Long Distance Communication</td>
<td>Short Distance Communication</td>
</tr>

<tr>
<td>Can Cover Several Kilometers</td>
<td>Usually Limited to a Few Meters</td>
</tr>

<tr>
<td>Used for Network Communication</td>
<td>Used for Device Communication</td>
</tr>

<tr>
<td>Used in Mobile Networks and Satellites</td>
<td>Used in Remote Controls and Sensors</td>
</tr>

<tr>
<td>Higher Bandwidth</td>
<td>Lower Bandwidth</td>
</tr>

<tr>
<td>Requires Line of Sight for Best Performance</td>
<td>Requires Direct Line of Sight</td>
</tr>

<tr>
<td>Suitable for Outdoor Communication</td>
<td>Mainly Suitable for Indoor Communication</td>
</tr>

</table>

<h4>Summary</h4>

<p>
Microwave and Infrared are important wireless transmission technologies. Microwave communication uses high-frequency radio waves and is suitable for long-distance communication such as mobile networks, satellite communication, and television broadcasting. Infrared communication uses infrared light waves and is suitable for short-range communication such as remote controls, sensors, and wireless peripherals.
</p>


<p>
Microwave Transmission uses high-frequency radio waves for long-distance communication and requires line-of-sight communication. Infrared Transmission uses infrared light waves for short-distance communication and cannot pass through walls. Microwave is used in mobile networks and satellite communication, while Infrared is commonly used in TV remote controls and short-range device communication.
</p>

`;

let laserRadioContent = `

<h3>Laser and Radio Transmission</h3>

<p>
Laser Transmission and Radio Transmission are important wireless communication technologies used to transmit data without physical cables. Both methods use electromagnetic waves, but they differ significantly in their transmission medium, communication range, speed, and applications.
</p>

<p>
Laser communication uses highly focused light beams for transmitting information, while radio communication uses radio frequency waves that can travel through the atmosphere over short and long distances.
</p>

<hr>

<h3>Laser Transmission</h3>

<p>
Laser Transmission is a wireless communication technology that uses highly focused laser light beams to transmit data between two locations.
</p>

<p>
Laser communication is also known as Free Space Optical Communication (FSO) because data is transmitted through free space using light instead of cables.
</p>

<p>
Due to its extremely high frequency and narrow beam width, laser communication can provide very high data transfer rates and enhanced security.
</p>

<h4>Definition</h4>

<p>
Laser Transmission is the process of transmitting data through focused laser light beams between a transmitter and a receiver.
</p>

<h4>Working of Laser Communication</h4>

<p>
The sender converts data into laser light signals and transmits them through a laser transmitter. The laser beam travels through the atmosphere and is received by an optical receiver that converts the light signals back into data.
</p>

<p>
Since laser beams travel in a straight line, precise alignment between the transmitter and receiver is required.
</p>

<h4>Characteristics of Laser Transmission</h4>

<ul>
<li>Uses Laser Light Beams</li>
<li>Very High Frequency Communication</li>
<li>Requires Line of Sight Communication</li>
<li>Very High Data Transfer Rate</li>
<li>Highly Directional Communication</li>
<li>Provides High Security</li>
</ul>

<h4>Advantages of Laser Transmission</h4>

<ul>
<li>Very High Speed Communication</li>
<li>Extremely Large Bandwidth</li>
<li>High Security Due to Narrow Beam</li>
<li>Low Signal Interference</li>
<li>No Frequency Licensing Required</li>
<li>Suitable for High-Speed Data Networks</li>
</ul>

<h4>Disadvantages of Laser Transmission</h4>

<ul>
<li>Requires Precise Alignment</li>
<li>Affected by Fog, Rain, and Dust</li>
<li>Line of Sight Communication Required</li>
<li>Limited Communication Range</li>
<li>Installation Can Be Complex</li>
</ul>

<h4>Applications of Laser Transmission</h4>

<ul>
<li>Building-to-Building Communication</li>
<li>Military Communication Systems</li>
<li>Satellite Communication</li>
<li>Space Communication</li>
<li>High-Speed Data Links</li>
<li>Optical Networking</li>
</ul>

<h4>Real-Life Example</h4>

<p>
Many organizations connect two nearby buildings using laser communication links instead of installing expensive underground cables.
</p>

<hr>

<h3>Radio Transmission</h3>

<p>
Radio Transmission is a wireless communication technology that uses radio waves to transmit data through the atmosphere.
</p>

<p>
Radio waves are one of the most widely used communication media because they can cover large areas and often do not require a direct line of sight between the sender and receiver.
</p>

<p>
Radio communication forms the foundation of modern wireless technologies such as Wi-Fi, Bluetooth, mobile networks, radio broadcasting, and television broadcasting.
</p>

<h4>Definition</h4>

<p>
Radio Transmission is the process of transmitting information using radio frequency electromagnetic waves.
</p>

<h4>Working of Radio Communication</h4>

<p>
The transmitter converts data into radio signals and broadcasts them through an antenna. These signals travel through the atmosphere and are captured by a receiving antenna, which converts them back into usable information.
</p>

<h4>Characteristics of Radio Transmission</h4>

<ul>
<li>Uses Radio Waves</li>
<li>Can Cover Large Areas</li>
<li>Supports Mobile Communication</li>
<li>May Not Require Line of Sight</li>
<li>Signals Can Penetrate Buildings and Obstacles</li>
<li>Suitable for Broadcasting and Networking</li>
</ul>

<h4>Advantages of Radio Transmission</h4>

<ul>
<li>Wide Coverage Area</li>
<li>Supports Mobility</li>
<li>No Physical Cables Required</li>
<li>Can Operate Without Direct Line of Sight</li>
<li>Easy Network Deployment</li>
<li>Cost Effective for Large Areas</li>
</ul>

<h4>Disadvantages of Radio Transmission</h4>

<ul>
<li>Prone to Signal Interference</li>
<li>Lower Security Than Laser Communication</li>
<li>Affected by Environmental Conditions</li>
<li>Limited Bandwidth Compared to Optical Systems</li>
<li>Signal Congestion in Crowded Areas</li>
</ul>

<h4>Applications of Radio Transmission</h4>

<ul>
<li>Radio Broadcasting</li>
<li>Television Broadcasting</li>
<li>Wi-Fi Networks</li>
<li>Bluetooth Communication</li>
<li>Mobile Communication Systems</li>
<li>Walkie-Talkies</li>
<li>Emergency Communication Systems</li>
<li>Navigation Systems</li>
</ul>

<h4>Real-Life Example</h4>

<p>
When a smartphone connects to a Wi-Fi router or a mobile network tower, radio waves are used to exchange information between devices.
</p>

<hr>

<h3>Difference Between Laser and Radio Transmission</h3>

<table class="notes-table">

<tr>
<th>Laser Transmission</th>
<th>Radio Transmission</th>
</tr>

<tr>
<td>Uses Laser Light Beams</td>
<td>Uses Radio Waves</td>
</tr>

<tr>
<td>Requires Direct Line of Sight</td>
<td>May Not Require Line of Sight</td>
</tr>

<tr>
<td>Very High Data Transfer Rate</td>
<td>Moderate Data Transfer Rate</td>
</tr>

<tr>
<td>Highly Secure Communication</td>
<td>Less Secure Communication</td>
</tr>

<tr>
<td>Affected by Fog and Rain</td>
<td>Less Affected by Weather Conditions</td>
</tr>

<tr>
<td>Narrow Transmission Beam</td>
<td>Wide Signal Coverage</td>
</tr>

<tr>
<td>Suitable for Point-to-Point Communication</td>
<td>Suitable for Broadcasting and Networking</td>
</tr>

<tr>
<td>Limited Coverage Area</td>
<td>Wide Coverage Area</td>
</tr>

</table>

<h4>Summary</h4>

<p>
Laser and Radio Transmission are important wireless communication technologies. Laser communication uses focused light beams and provides very high speed, large bandwidth, and high security. Radio communication uses radio waves and offers wide coverage, mobility, and support for modern wireless technologies such as Wi-Fi, Bluetooth, and mobile networks.
</p>

<p>
Laser Transmission uses focused laser light beams for high-speed and secure communication and requires line-of-sight communication. Radio Transmission uses radio waves for wireless communication and is widely used in radio broadcasting, Wi-Fi, Bluetooth, and mobile networks. Radio communication provides wider coverage, while laser communication offers higher speed and security.
</p>

`;

let satelliteVsatContent = `

<h3>Satellite Communication and VSAT</h3>

<p>
Satellite Communication is one of the most important wireless communication technologies used for transmitting voice, video, and data over very long distances. It uses artificial satellites placed in space to relay signals between different locations on Earth.
</p>

<p>
Satellite communication has revolutionized global communication by enabling television broadcasting, internet services, weather forecasting, navigation systems, military communication, and international telephone services.
</p>

<p>
VSAT (Very Small Aperture Terminal) is a specialized satellite communication system that uses small dish antennas installed at user locations to communicate with satellites. VSAT is widely used in banking, ATMs, remote offices, educational institutions, and corporate networks.
</p>

<hr>

<h3>Satellite Communication</h3>

<p>
Satellite Communication is a wireless communication system in which artificial satellites are used as relay stations to receive, amplify, and retransmit signals between Earth stations.
</p>

<h4>Definition</h4>

<p>
Satellite Communication is the transmission of information between two or more Earth stations through an artificial satellite placed in space.
</p>

<h4>Need for Satellite Communication</h4>

<p>
Traditional communication systems have limitations in covering very large geographical areas. Satellite communication overcomes these limitations by providing communication services across countries, continents, oceans, and remote regions.
</p>

<h4>Working of Satellite Communication</h4>

<p>
The communication process involves three major steps:
</p>

<ul>
<li>An Earth station transmits signals to the satellite. This process is called Uplink.</li>
<li>The satellite receives, amplifies, and processes the signals.</li>
<li>The satellite retransmits the signals to another Earth station. This process is called Downlink.</li>
</ul>

<h4>Communication Process</h4>

<p>
Earth Station → Uplink → Satellite → Downlink → Earth Station
</p>

<h4>Components of a Satellite Communication System</h4>

<ul>
<li>Earth Station</li>
<li>Satellite</li>
<li>Transponder</li>
<li>Antenna System</li>
<li>Communication Channel</li>
</ul>

<h4>What is a Transponder?</h4>

<p>
A Transponder is an electronic device inside a satellite that receives incoming signals, amplifies them, changes their frequency if required, and retransmits them back to Earth.
</p>

<h4>Types of Communication Satellites</h4>

<h4>1. Geostationary Satellite (GEO)</h4>

<p>
These satellites orbit the Earth at approximately 36,000 kilometers above the equator and appear stationary from Earth.
</p>

<h4>Features</h4>

<ul>
<li>Wide Coverage Area</li>
<li>Fixed Position Relative to Earth</li>
<li>Used for Television Broadcasting</li>
</ul>

<h4>2. Medium Earth Orbit Satellite (MEO)</h4>

<p>
These satellites operate between Low Earth Orbit and Geostationary Orbit.
</p>

<h4>Applications</h4>

<ul>
<li>Navigation Systems</li>
<li>GPS Services</li>
</ul>

<h4>3. Low Earth Orbit Satellite (LEO)</h4>

<p>
These satellites orbit close to the Earth and provide low communication delay.
</p>

<h4>Applications</h4>

<ul>
<li>Internet Services</li>
<li>Mobile Communication</li>
<li>Earth Observation</li>
</ul>

<h4>Advantages of Satellite Communication</h4>

<ul>
<li>Global Coverage</li>
<li>Supports Long Distance Communication</li>
<li>Suitable for Remote Areas</li>
<li>Reliable Communication</li>
<li>Supports Broadcasting Services</li>
<li>Disaster Recovery Communication</li>
</ul>

<h4>Disadvantages of Satellite Communication</h4>

<ul>
<li>High Installation Cost</li>
<li>Signal Delay Due to Long Distance</li>
<li>Weather Can Affect Signal Quality</li>
<li>Complex Technology</li>
</ul>

<h4>Applications of Satellite Communication</h4>

<ul>
<li>Television Broadcasting</li>
<li>International Telephone Communication</li>
<li>Internet Services</li>
<li>GPS Navigation</li>
<li>Weather Forecasting</li>
<li>Military Communication</li>
<li>Disaster Management Systems</li>
<li>Space Research</li>
</ul>

<h4>Real-Life Example</h4>

<p>
When people watch live international sports events on television, the video signals are transmitted through communication satellites located in space.
</p>

<hr>

<h3>VSAT (Very Small Aperture Terminal)</h3>

<p>
VSAT stands for Very Small Aperture Terminal. It is a small satellite communication system that uses a compact dish antenna to communicate directly with satellites.
</p>

<p>
VSAT enables reliable communication in areas where traditional wired communication infrastructure is unavailable or difficult to install.
</p>

<h4>Definition</h4>

<p>
VSAT is a two-way satellite communication system that uses a small dish antenna for transmitting and receiving data through satellites.
</p>

<h4>Main Components of a VSAT System</h4>

<ul>
<li>Small Dish Antenna</li>
<li>Outdoor Unit (ODU)</li>
<li>Indoor Unit (IDU)</li>
<li>Satellite</li>
<li>Hub Station</li>
</ul>

<h4>Working of VSAT</h4>

<p>
The VSAT terminal sends data to a communication satellite. The satellite forwards the data to a central hub station, which then routes the information to the intended destination.
</p>

<p>
Similarly, incoming data follows the reverse path through the satellite back to the VSAT terminal.
</p>

<h4>Features of VSAT</h4>

<ul>
<li>Small Dish Antenna</li>
<li>Two-Way Communication</li>
<li>Reliable Connectivity</li>
<li>Suitable for Remote Locations</li>
<li>Easy Installation</li>
</ul>

<h4>Advantages of VSAT</h4>

<ul>
<li>Works in Remote Areas</li>
<li>Reliable Communication</li>
<li>Independent of Local Infrastructure</li>
<li>Supports Data, Voice, and Video Communication</li>
<li>Quick Deployment</li>
</ul>

<h4>Disadvantages of VSAT</h4>

<ul>
<li>Higher Initial Cost</li>
<li>Satellite Delay</li>
<li>Affected by Severe Weather Conditions</li>
<li>Limited Bandwidth Compared to Fiber Networks</li>
</ul>

<h4>Applications of VSAT</h4>

<ul>
<li>Banking Networks</li>
<li>ATM Connectivity</li>
<li>Corporate Networks</li>
<li>Remote Office Communication</li>
<li>Educational Institutions</li>
<li>Oil and Gas Industries</li>
<li>Telemedicine Services</li>
<li>Government Networks</li>
</ul>

<h4>Real-Life Example</h4>

<p>
Many banks use VSAT networks to connect ATMs located in villages and remote areas where fiber or broadband connections are not available.
</p>

<hr>

<h3>Difference Between Satellite Communication and VSAT</h3>

<table class="notes-table">

<tr>
<th>Satellite Communication</th>
<th>VSAT</th>
</tr>

<tr>
<td>Complete Communication System</td>
<td>Ground-Based Satellite Terminal</td>
</tr>

<tr>
<td>Uses Artificial Satellites in Space</td>
<td>Uses Small Dish Antennas on Earth</td>
</tr>

<tr>
<td>Provides Communication Services</td>
<td>Accesses Satellite Communication Services</td>
</tr>

<tr>
<td>Located in Space</td>
<td>Located on Earth</td>
</tr>

<tr>
<td>Covers Very Large Geographical Areas</td>
<td>Used by Individual Organizations and Users</td>
</tr>

<tr>
<td>Acts as a Communication Relay</td>
<td>Acts as a User Communication Terminal</td>
</tr>

<tr>
<td>Supports Multiple Communication Systems</td>
<td>Provides Access to Satellite Networks</td>
</tr>

</table>

<h4>Summary</h4>

<p>
Satellite Communication uses artificial satellites to relay communication signals between Earth stations and provides worldwide coverage. VSAT is a small satellite communication terminal that uses a dish antenna to communicate with satellites. Both technologies are widely used for long-distance communication, remote connectivity, broadcasting, navigation, and business communication.
</p>

<p>
Satellite Communication uses artificial satellites to receive, amplify, and retransmit signals between Earth stations. It provides global coverage and supports long-distance communication. VSAT (Very Small Aperture Terminal) is a small satellite communication system that uses a dish antenna for transmitting and receiving data through satellites. VSAT is commonly used in banking networks, ATM connectivity, corporate networks, and remote area communication.
</p>

`;

let networkConnectingDevicesContent = `

<h3>Network Connecting Devices</h3>

<p>
Network Connecting Devices are hardware components used in computer networks to connect different devices such as computers, printers, servers, and routers so that they can communicate and share data efficiently.
</p>

<p>
These devices help in data transmission, network expansion, traffic control, and connecting different types of networks. Without these devices, communication between computers in a network is not possible.
</p>

<p>
In simple words, network connecting devices act as a bridge between different devices and networks to ensure smooth communication.
</p>

<h4>Definition</h4>

<p>
Network Connecting Devices are networking hardware components that are used to receive, transmit, and forward data between devices or networks.
</p>

<h4>Need of Network Connecting Devices</h4>

<ul>
<li>To connect multiple computers in a network</li>
<li>To extend network coverage area</li>
<li>To reduce network traffic and collisions</li>
<li>To improve communication speed and efficiency</li>
<li>To connect different types of networks (LAN, WAN)</li>
<li>To manage and control data flow</li>
</ul>

<hr>

<h3>Classification of Network Connecting Devices</h3>

<table class="notes-table">

<tr>
<th>Category</th>
<th>Devices</th>
</tr>

<tr>
<td>Physical Layer Devices</td>
<td>Repeater, Hub, Modem</td>
</tr>

<tr>
<td>Data Link Layer Devices</td>
<td>Bridge, Switch</td>
</tr>

<tr>
<td>Network Layer Devices</td>
<td>Router</td>
</tr>

<tr>
<td>Higher Layer Devices</td>
<td>Gateway</td>
</tr>

</table>

<hr>

<h3>Repeater</h3>

<p>
A Repeater is a network device used to regenerate weak signals and extend the distance of communication in a network.
</p>

<p>
When data travels long distances, the signal becomes weak due to attenuation. A repeater strengthens the signal and forwards it again.
</p>

<h4>Working</h4>

<p>
Repeater receives weak signal → regenerates it → sends it forward with original strength.
</p>

<h4>Advantages</h4>

<ul>
<li>Increases communication distance</li>
<li>Improves signal strength</li>
<li>Low cost device</li>
</ul>

<h4>Disadvantages</h4>

<ul>
<li>Cannot filter data</li>
<li>Cannot reduce network traffic</li>
</ul>

<hr>

<h3>Hub</h3>

<p>
A Hub is a simple networking device that connects multiple devices in a LAN and broadcasts data to all connected devices.
</p>

<h4>Working</h4>

<p>
When data arrives at one port, hub sends it to all ports without checking destination.
</p>

<h4>Advantages</h4>

<ul>
<li>Easy to use</li>
<li>Low cost</li>
<li>Simple network setup</li>
</ul>

<h4>Disadvantages</h4>

<ul>
<li>High data collision</li>
<li>Low security</li>
<li>Slow performance</li>
</ul>

<hr>

<h3>Bridge</h3>

<p>
A Bridge connects two LAN segments and filters data based on MAC addresses.
</p>

<h4>Working</h4>

<p>
Bridge checks MAC address → forwards data only if required → reduces unnecessary traffic.
</p>

<h4>Advantages</h4>

<ul>
<li>Reduces network traffic</li>
<li>Improves performance</li>
<li>Filters unnecessary data</li>
</ul>

<hr>

<h3>Switch</h3>

<p>
A Switch is an intelligent device that connects multiple devices in a LAN and sends data only to the correct destination using MAC address.
</p>

<h4>Working</h4>

<p>
Switch maintains MAC address table and forwards data only to specific device.
</p>

<h4>Advantages</h4>

<ul>
<li>High speed communication</li>
<li>Less traffic</li>
<li>Better security</li>
</ul>

<hr>

<h3>Router</h3>

<p>
A Router connects different networks and forwards data using IP addresses.
</p>

<h4>Working</h4>

<p>
Router checks destination IP → finds best path → sends data to destination network.
</p>

<h4>Advantages</h4>

<ul>
<li>Connects multiple networks</li>
<li>Provides internet access</li>
<li>Efficient routing</li>
</ul>

<hr>

<h3>Gateway</h3>

<p>
A Gateway connects two different networks that use different communication protocols.
</p>

<h4>Working</h4>

<p>
Gateway converts data from one protocol to another so different networks can communicate.
</p>

<h4>Advantages</h4>

<ul>
<li>Supports different networks</li>
<li>Protocol conversion</li>
</ul>

<hr>

<h3>Modem</h3>

<p>
Modem stands for Modulator and Demodulator. It converts digital signals into analog and analog into digital.
</p>

<h4>Working</h4>

<ul>
<li>Modulation: Digital → Analog</li>
<li>Demodulation: Analog → Digital</li>
</ul>

<h4>Advantages</h4>

<ul>
<li>Internet connectivity</li>
<li>Data transmission over telephone line</li>
</ul>

<hr>

<h3>Easy Trick to Remember Devices</h3>

<ul>
<li>Repeater = Regenerate signal</li>
<li>Hub = Broadcast data</li>
<li>Bridge = Filter LAN traffic</li>
<li>Switch = Smart data forwarding</li>
<li>Router = Route between networks</li>
<li>Gateway = Protocol conversion</li>
<li>Modem = Signal conversion</li>
</ul>

<hr>

<h3>Exam Point Summary</h3>

<ul>
<li>Repeater extends signal strength</li>
<li>Hub broadcasts data to all devices</li>
<li>Bridge connects LAN segments and filters traffic</li>
<li>Switch sends data using MAC address</li>
<li>Router forwards data using IP address</li>
<li>Gateway connects different protocols</li>
<li>Modem converts digital and analog signals</li>
</ul>

`;

let switchingContent = `

<h3>Switching</h3>

<p>
Switching is a technique used in computer networks to transfer data from a source device to a destination device through one or more intermediate nodes. It helps in selecting the most appropriate path for transmitting data across the network.
</p>

<p>
In large communication networks, it is not practical to establish a direct connection between every pair of devices. Therefore, switching techniques are used to efficiently forward data from the sender to the receiver.
</p>

<p>
Switching plays an important role in telephone networks, computer networks, mobile communication systems, and the Internet.
</p>

<h4>Definition</h4>

<p>
Switching is the process of forwarding data from a source to a destination through interconnected network devices by selecting an appropriate communication path.
</p>

<h4>Need for Switching</h4>

<ul>
<li>To transfer data efficiently between devices.</li>
<li>To reduce the number of direct connections required.</li>
<li>To utilize network resources effectively.</li>
<li>To support communication over long distances.</li>
<li>To improve network performance and reliability.</li>
</ul>

<h4>Types of Switching Techniques</h4>

<ul>
<li>Circuit Switching</li>
<li>Message Switching</li>
<li>Packet Switching</li>
</ul>

<hr>

<h3>Circuit Switching</h3>

<p>
Circuit Switching is a switching technique in which a dedicated communication path is established between the sender and receiver before data transmission begins.
</p>

<p>
Once the connection is established, the entire communication channel remains reserved for the communicating devices until the communication session is completed.
</p>

<p>
This technique was traditionally used in telephone networks.
</p>

<h4>Phases of Circuit Switching</h4>

<ul>
<li>Connection Establishment</li>
<li>Data Transfer</li>
<li>Connection Termination</li>
</ul>

<h4>Working of Circuit Switching</h4>

<p>
Before communication starts, a complete physical path is established between the sender and receiver. All data travels through the same dedicated path until communication ends.
</p>

<h4>Characteristics of Circuit Switching</h4>

<ul>
<li>Dedicated Communication Path</li>
<li>Fixed Route During Communication</li>
<li>Continuous Data Transfer</li>
<li>Guaranteed Bandwidth</li>
<li>No Packet Reordering Problem</li>
</ul>

<h4>Advantages of Circuit Switching</h4>

<ul>
<li>Reliable Communication</li>
<li>Continuous Data Transfer</li>
<li>Low Transmission Delay After Connection Setup</li>
<li>Guaranteed Bandwidth</li>
</ul>

<h4>Disadvantages of Circuit Switching</h4>

<ul>
<li>Wastes Bandwidth During Idle Periods</li>
<li>Connection Setup Takes Time</li>
<li>Not Suitable for Burst Data Traffic</li>
<li>Expensive Communication Method</li>
</ul>

<h4>Applications of Circuit Switching</h4>

<ul>
<li>Traditional Telephone Networks</li>
<li>Voice Communication Systems</li>
<li>Private Communication Networks</li>
</ul>

<h4>Real-Life Example</h4>

<p>
Making a telephone call is an example of Circuit Switching because a dedicated path is established between the caller and receiver for the duration of the call.
</p>

<hr>

<h3>Message Switching</h3>

<p>
Message Switching is a switching technique in which the entire message is transmitted from one node to another using the Store and Forward mechanism.
</p>

<p>
In this method, no dedicated communication path is established. Each intermediate node stores the complete message, checks it, and then forwards it to the next node.
</p>

<h4>Working of Message Switching</h4>

<p>
The complete message is first stored at an intermediate node. After processing, it is forwarded to the next node until it reaches the destination.
</p>

<h4>Characteristics of Message Switching</h4>

<ul>
<li>No Dedicated Path Required</li>
<li>Store and Forward Technique</li>
<li>Efficient Resource Utilization</li>
<li>Flexible Routing</li>
<li>Suitable for Non-Real-Time Communication</li>
</ul>

<h4>Advantages of Message Switching</h4>

<ul>
<li>No Need for Dedicated Circuit</li>
<li>Efficient Utilization of Network Resources</li>
<li>Flexible Routing</li>
<li>Reduced Communication Cost</li>
</ul>

<h4>Disadvantages of Message Switching</h4>

<ul>
<li>High Delay Due to Storage</li>
<li>Requires Large Storage Capacity</li>
<li>Not Suitable for Real-Time Applications</li>
</ul>

<h4>Applications of Message Switching</h4>

<ul>
<li>Telegraph Systems</li>
<li>Email Systems</li>
<li>Store-and-Forward Communication Systems</li>
</ul>

<h4>Real-Life Example</h4>

<p>
Email communication follows a concept similar to Message Switching because messages are stored on mail servers before being forwarded to recipients.
</p>

<hr>

<h3>Packet Switching</h3>

<p>
Packet Switching is the most widely used switching technique in modern computer networks.
</p>

<p>
In Packet Switching, a message is divided into small units called packets before transmission. Each packet contains source and destination information and may travel through different routes to reach the destination.
</p>

<p>
At the destination, all packets are reassembled to reconstruct the original message.
</p>

<h4>Working of Packet Switching</h4>

<ul>
<li>The message is divided into packets.</li>
<li>Each packet is transmitted independently.</li>
<li>Packets may follow different routes.</li>
<li>The destination reassembles all packets into the original message.</li>
</ul>

<h4>Characteristics of Packet Switching</h4>

<ul>
<li>Data Divided into Packets</li>
<li>No Dedicated Path Required</li>
<li>Efficient Bandwidth Utilization</li>
<li>Supports Dynamic Routing</li>
<li>Highly Reliable Communication</li>
</ul>

<h4>Advantages of Packet Switching</h4>

<ul>
<li>Efficient Use of Bandwidth</li>
<li>Fast Communication</li>
<li>Supports Multiple Users</li>
<li>Reliable Data Transmission</li>
<li>Cost Effective</li>
</ul>

<h4>Disadvantages of Packet Switching</h4>

<ul>
<li>Packets May Arrive Out of Order</li>
<li>Network Congestion Can Occur</li>
<li>Variable Transmission Delay</li>
</ul>

<h4>Applications of Packet Switching</h4>

<ul>
<li>Internet Communication</li>
<li>LAN Networks</li>
<li>WAN Networks</li>
<li>Cloud Computing</li>
<li>Video Streaming Services</li>
<li>Online Gaming</li>
</ul>

<h4>Real-Life Example</h4>

<p>
Whenever a user browses a website, sends a WhatsApp message, or watches a YouTube video, data is transmitted using Packet Switching.
</p>

<hr>

<h3>Difference Between Circuit Switching, Message Switching, and Packet Switching</h3>

<table class="notes-table">

<tr>
<th>Circuit Switching</th>
<th>Message Switching</th>
<th>Packet Switching</th>
</tr>

<tr>
<td>Dedicated Path Required</td>
<td>No Dedicated Path</td>
<td>No Dedicated Path</td>
</tr>

<tr>
<td>Continuous Communication</td>
<td>Store and Forward</td>
<td>Packet Based Communication</td>
</tr>

<tr>
<td>Fixed Route</td>
<td>Flexible Route</td>
<td>Dynamic Route</td>
</tr>

<tr>
<td>Low Delay After Setup</td>
<td>High Delay</td>
<td>Moderate Delay</td>
</tr>

<tr>
<td>Telephone Networks</td>
<td>Telegraph Systems</td>
<td>Internet Communication</td>
</tr>

<tr>
<td>Bandwidth Reserved</td>
<td>Bandwidth Shared</td>
<td>Bandwidth Shared</td>
</tr>

<tr>
<td>Suitable for Voice Calls</td>
<td>Suitable for Non-Real-Time Data</td>
<td>Suitable for Modern Data Networks</td>
</tr>

</table>

<h3>Comparison of Switching Techniques</h3>

<table class="notes-table">

<tr>
<th>Feature</th>
<th>Circuit Switching</th>
<th>Message Switching</th>
<th>Packet Switching</th>
</tr>

<tr>
<td>Connection Setup</td>
<td>Required</td>
<td>Not Required</td>
<td>Not Required</td>
</tr>

<tr>
<td>Dedicated Path</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>

<tr>
<td>Data Unit</td>
<td>Continuous Stream</td>
<td>Complete Message</td>
<td>Packets</td>
</tr>

<tr>
<td>Storage Requirement</td>
<td>Low</td>
<td>High</td>
<td>Moderate</td>
</tr>

<tr>
<td>Efficiency</td>
<td>Low</td>
<td>Moderate</td>
<td>High</td>
</tr>

<tr>
<td>Modern Usage</td>
<td>Limited</td>
<td>Rare</td>
<td>Very Common</td>
</tr>

</table>

<h4>Summary</h4>

<p>
Switching is the process of transferring data from a source to a destination through a network. The three major switching techniques are Circuit Switching, Message Switching, and Packet Switching. Circuit Switching uses a dedicated communication path, Message Switching uses the Store and Forward method, and Packet Switching divides data into packets and is widely used in modern computer networks and the Internet.
</p>

<ul>
<li>Switching is used to transfer data between source and destination devices.</li>
<li>Circuit Switching establishes a dedicated communication path before transmission.</li>
<li>Message Switching uses the Store and Forward technique.</li>
<li>Packet Switching divides messages into packets and is used in the Internet.</li>
<li>Packet Switching provides efficient bandwidth utilization and supports modern computer networks.</li>
<li>The Internet primarily uses Packet Switching technology.</li>
</ul>

`;

let dataLinkLayerIntroContent = `

<h3>Data Link Layer</h3>

<p>
In the OSI (Open Systems Interconnection) Reference Model, the Data Link Layer is the second layer.
It works between the Physical Layer and the Network Layer. The main responsibility of this layer is
to provide reliable communication between two directly connected devices on a network.
</p>

<p>
When data is sent from a computer, it passes through different layers of the OSI model.
The Data Link Layer receives packets from the Network Layer and converts them into frames.
These frames are then transmitted through the Physical Layer in the form of bits.
At the receiving side, the Data Link Layer receives the frames, checks them for errors,
extracts the original data, and passes it to the Network Layer.
</p>

<p>
The Data Link Layer ensures that data reaches the correct destination without corruption.
It controls how devices access the communication medium and helps in detecting and correcting
transmission errors. Because of these functions, it is considered one of the most important
layers for reliable data communication.
</p>

<h4>Why Do We Need the Data Link Layer?</h4>

<p>
During data transmission, various problems can occur such as data loss, collision,
duplicate frames, and transmission errors. The Physical Layer can only transmit bits
from one device to another and cannot detect whether the data has reached correctly.
The Data Link Layer solves these problems by providing framing, error detection,
flow control, and access control mechanisms.
</p>

<h4>Position of Data Link Layer in OSI Model</h4>

<p>
Application Layer
</p>

<p>
Presentation Layer
</p>

<p>
Session Layer
</p>

<p>
Transport Layer
</p>

<p>
Network Layer
</p>

<p>
<b>Data Link Layer</b>
</p>

<p>
Physical Layer
</p>

<p>
The Data Link Layer receives packets from the Network Layer and sends frames to the
Physical Layer for transmission.
</p>

<h4>Data Unit of Data Link Layer</h4>

<p>
The Protocol Data Unit (PDU) of the Data Link Layer is called a <b>Frame</b>.
A frame contains actual data along with additional information such as source address,
destination address, error detection bits, and control information.
</p>

<h4>Major Functions of Data Link Layer</h4>

<h4>1. Framing</h4>

<p>
Framing is the process of dividing the stream of data into smaller manageable units
called frames. Each frame contains header and trailer information that helps the receiver
identify the beginning and end of the frame.
</p>

<p>
Example:
A large file is divided into multiple frames before transmission.
</p>

<h4>2. Physical Addressing</h4>

<p>
The Data Link Layer adds source and destination MAC addresses to each frame.
These addresses help identify the sender and receiver devices within the same network.
</p>

<p>
Example:
A computer sends data to a printer using the printer's MAC address.
</p>

<h4>3. Error Control</h4>

<p>
During transmission, data may get damaged due to noise or interference.
The Data Link Layer detects errors using techniques such as parity bits,
checksums, and CRC (Cyclic Redundancy Check).
</p>

<p>
If an error is detected, the frame may be discarded or retransmitted.
This ensures reliable communication.
</p>

<h4>4. Flow Control</h4>

<p>
Flow control manages the speed of data transmission between sender and receiver.
If the sender sends data too fast, the receiver may not be able to process it.
The Data Link Layer controls the transmission rate to avoid data loss.
</p>

<p>
Example:
A fast computer sends data to a slower computer. Flow control ensures that
the slower computer receives data at a manageable speed.
</p>

<h4>5. Access Control</h4>

<p>
When multiple devices share the same communication channel,
the Data Link Layer determines which device can transmit data at a particular time.
This prevents collisions and improves network efficiency.
</p>

<p>
Example:
In an Ethernet network, access control rules determine when a computer can send data.
</p>

<h4>6. Reliable Delivery</h4>

<p>
The Data Link Layer ensures that frames are delivered correctly between two adjacent nodes.
Acknowledgment and retransmission mechanisms are used to achieve reliable delivery.
</p>

<h4>Data Link Layer Sublayers</h4>

<p>
The IEEE has divided the Data Link Layer into two sublayers:
</p>

<h4>1. Logical Link Control (LLC)</h4>

<p>
The LLC sublayer manages flow control, error control, and communication between
the Network Layer and MAC sublayer.
</p>

<h4>2. Media Access Control (MAC)</h4>

<p>
The MAC sublayer controls how devices access the transmission medium and handles
physical addressing using MAC addresses.
</p>

<h4>Advantages of Data Link Layer</h4>

<ul>
<li>Provides reliable data transmission.</li>
<li>Detects transmission errors.</li>
<li>Controls data flow between sender and receiver.</li>
<li>Reduces data loss and corruption.</li>
<li>Provides physical addressing using MAC addresses.</li>
<li>Improves network efficiency.</li>
<li>Supports orderly communication between devices.</li>
</ul>

<h4>Limitations of Data Link Layer</h4>

<ul>
<li>Works only between directly connected devices.</li>
<li>Cannot determine the best route to the destination.</li>
<li>Routing functions are performed by the Network Layer.</li>
</ul>

<h4>Real-Life Example</h4>

<p>
Suppose a student sends a file from a laptop to a printer connected to the same network.
The Data Link Layer divides the file into frames, adds MAC addresses,
checks for errors, controls transmission speed, and ensures that the printer receives
the frames correctly.
</p>

<h4>Important Exam Points</h4>

<ul>
<li>Data Link Layer is Layer 2 of the OSI Model.</li>
<li>The PDU of the Data Link Layer is called a Frame.</li>
<li>It provides node-to-node communication.</li>
<li>Main functions are Framing, Physical Addressing, Error Control, Flow Control, and Access Control.</li>
<li>It uses MAC addresses for communication within the same network.</li>
<li>The Data Link Layer is divided into LLC and MAC sublayers.</li>
<li>It ensures reliable transmission between directly connected devices.</li>
</ul>

<h4>Short Interview Question</h4>

<p>
<b>Question:</b> What is the Data Link Layer?
</p>

<p>
<b>Answer:</b> The Data Link Layer is the second layer of the OSI model. It is responsible for
reliable node-to-node communication. It converts packets into frames and performs framing,
physical addressing, error control, flow control, and access control to ensure accurate
data transmission between directly connected devices.
</p>

`;

let dataLinkLayerServicesContent = `

<h3>Services Provided to the Network Layer</h3>

<p>
The Data Link Layer acts as a bridge between the Physical Layer and the Network Layer.
One of its important responsibilities is to provide services to the Network Layer so that
data can be transmitted efficiently and reliably between directly connected devices.
</p>

<p>
The Network Layer expects data to be delivered correctly, but the Physical Layer only
transmits raw bits without checking whether they reach the destination safely.
Therefore, the Data Link Layer provides different types of services to ensure reliable
communication and to hide transmission errors from the Network Layer.
</p>

<p>
Depending on the reliability requirements, the Data Link Layer can provide three types
of services to the Network Layer.
</p>

<h4>Types of Services Provided by the Data Link Layer</h4>

<h4>1. Unacknowledged Connectionless Service</h4>

<p>
In this service, no connection is established between the sender and receiver before
transmitting data. Frames are sent directly without waiting for acknowledgements.
</p>

<p>
Since no acknowledgement is returned, the sender does not know whether the frame
has reached the destination successfully or not.
</p>

<p>
This service is fast because there is no overhead of connection establishment
or acknowledgement processing.
</p>

<h4>Working</h4>

<p>
Sender → Send Frame → Receiver
</p>

<p>
No acknowledgement is returned to the sender.
</p>

<h4>Characteristics</h4>

<ul>
<li>No connection setup is required.</li>
<li>No acknowledgement is provided.</li>
<li>Fast transmission speed.</li>
<li>Less overhead.</li>
<li>Lower reliability.</li>
</ul>

<h4>Advantages</h4>

<ul>
<li>Simple implementation.</li>
<li>High speed communication.</li>
<li>Suitable for real-time applications.</li>
</ul>

<h4>Disadvantages</h4>

<ul>
<li>No guarantee of delivery.</li>
<li>Frames may be lost without detection.</li>
<li>Not suitable for important data transmission.</li>
</ul>

<h4>Example</h4>

<p>
Voice communication and live audio streaming often use this service because occasional
data loss is acceptable, but delays caused by acknowledgements are not desirable.
</p>

<hr>

<h4>2. Acknowledged Connectionless Service</h4>

<p>
In this service, no connection is established before communication, but each frame sent
by the sender must be acknowledged by the receiver.
</p>

<p>
If the acknowledgement is not received within a specified time, the sender retransmits
the frame. This improves reliability while avoiding the overhead of establishing a connection.
</p>

<h4>Working</h4>

<p>
Sender → Frame → Receiver
</p>

<p>
Receiver → Acknowledgement → Sender
</p>

<p>
If acknowledgement is not received, the frame is sent again.
</p>

<h4>Characteristics</h4>

<ul>
<li>No connection setup required.</li>
<li>Acknowledgement is provided.</li>
<li>Better reliability than unacknowledged service.</li>
<li>Supports error recovery.</li>
</ul>

<h4>Advantages</h4>

<ul>
<li>Reliable frame delivery.</li>
<li>Lost frames can be retransmitted.</li>
<li>Improved communication accuracy.</li>
</ul>

<h4>Disadvantages</h4>

<ul>
<li>Additional overhead due to acknowledgements.</li>
<li>Slightly slower than unacknowledged service.</li>
</ul>

<h4>Example</h4>

<p>
Wireless communication networks often use this service because transmission errors
are more common in wireless environments.
</p>

<hr>

<h4>3. Acknowledged Connection-Oriented Service</h4>

<p>
This is the most reliable service provided by the Data Link Layer.
Before data transmission begins, a logical connection is established between the sender
and receiver.
</p>

<p>
After the connection is established, frames are transmitted in sequence and each frame
is acknowledged by the receiver.
</p>

<p>
When communication is completed, the connection is terminated.
</p>

<h4>Working</h4>

<p>
Step 1: Establish Connection
</p>

<p>
Step 2: Send Frames
</p>

<p>
Step 3: Receive Acknowledgements
</p>

<p>
Step 4: Terminate Connection
</p>

<h4>Characteristics</h4>

<ul>
<li>Connection establishment before communication.</li>
<li>Acknowledgement for transmitted frames.</li>
<li>Sequencing of frames.</li>
<li>Error detection and recovery.</li>
<li>Highly reliable communication.</li>
</ul>

<h4>Advantages</h4>

<ul>
<li>Highest reliability.</li>
<li>Guaranteed and ordered delivery.</li>
<li>Error detection and correction support.</li>
<li>Suitable for important data transmission.</li>
</ul>

<h4>Disadvantages</h4>

<ul>
<li>More overhead.</li>
<li>Slower than connectionless services.</li>
<li>Requires connection setup and termination.</li>
</ul>

<h4>Example</h4>

<p>
Reliable file transfer, banking transactions, and critical business communications
commonly use connection-oriented services because data accuracy is extremely important.
</p>

<hr>

<h4>Comparison of Data Link Layer Services</h4>

<table class="notes-table">

<tr>
<th>Feature</th>
<th>Unacknowledged Connectionless</th>
<th>Acknowledged Connectionless</th>
<th>Acknowledged Connection-Oriented</th>
</tr>

<tr>
<td>Connection Setup</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>

<tr>
<td>Acknowledgement</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
</tr>

<tr>
<td>Reliability</td>
<td>Low</td>
<td>Medium</td>
<td>High</td>
</tr>

<tr>
<td>Overhead</td>
<td>Very Low</td>
<td>Medium</td>
<td>High</td>
</tr>

<tr>
<td>Speed</td>
<td>Fast</td>
<td>Moderate</td>
<td>Slower</td>
</tr>

<tr>
<td>Example</td>
<td>Voice Communication</td>
<td>Wireless Networks</td>
<td>File Transfer</td>
</tr>

</table>

<h4>Real-Life Classroom Example</h4>

<p>
Imagine a teacher distributing notes to students.
</p>

<p>
In Unacknowledged Connectionless Service, the teacher simply distributes notes and
does not check whether every student received them.
</p>

<p>
In Acknowledged Connectionless Service, the teacher asks each student to confirm
that the notes have been received.
</p>

<p>
In Acknowledged Connection-Oriented Service, the teacher first creates a list of
students, distributes notes one by one, receives confirmation from each student,
and finally closes the distribution process.
</p>

<h4>Important Exam Points</h4>

<ul>
<li>The Data Link Layer provides services to the Network Layer.</li>
<li>There are three types of services provided by the Data Link Layer.</li>
<li>Unacknowledged Connectionless Service provides no acknowledgement.</li>
<li>Acknowledged Connectionless Service provides acknowledgement without connection setup.</li>
<li>Acknowledged Connection-Oriented Service provides connection establishment and acknowledgement.</li>
<li>Connection-oriented service is the most reliable service.</li>
<li>Acknowledgements improve reliability by confirming successful frame delivery.</li>
</ul>

<h4>Short Interview Question</h4>

<p>
<b>Question:</b> What services does the Data Link Layer provide to the Network Layer?
</p>

<p>
<b>Answer:</b> The Data Link Layer provides three services to the Network Layer:
Unacknowledged Connectionless Service, Acknowledged Connectionless Service, and
Acknowledged Connection-Oriented Service. These services differ in terms of
connection establishment, acknowledgement, and reliability.
</p>

`;


let framingContent = `

<h3>Framing</h3>

<p>
Framing is one of the most important functions of the Data Link Layer. It is the process
of dividing a continuous stream of bits received from the Network Layer into smaller,
manageable units called <b>frames</b>.
</p>

<p>
A frame is a structured block of data that contains the actual information along with
control information such as source address, destination address, error detection fields,
and frame delimiters.
</p>

<p>
The sender converts data into frames before transmission, and the receiver extracts the
original data from the received frames.
</p>

<h4>Introduction to Framing</h4>

<p>
The Physical Layer simply transmits bits from one device to another. It does not know
where a message starts or ends. If a large amount of data is sent as a continuous stream
of bits, the receiver will have difficulty determining the boundaries of each message.
</p>

<p>
To solve this problem, the Data Link Layer divides the data into frames. Each frame has
a clear beginning and ending, making communication more organized and reliable.
</p>

<h4>What is a Frame?</h4>

<p>
A frame is the Protocol Data Unit (PDU) of the Data Link Layer.
</p>

<p>
A typical frame contains:
</p>

<ul>
<li>Header</li>
<li>Source Address</li>
<li>Destination Address</li>
<li>Actual Data</li>
<li>Error Detection Information</li>
<li>Trailer</li>
</ul>

<p>
General Structure of a Frame:
</p>

<p>
Header → Data → Trailer
</p>

<h4>Why is Framing Required?</h4>

<p>
Framing is necessary because networks need a systematic way to transmit and receive data.
Without framing, the receiver would not be able to identify individual messages.
</p>

<h4>Advantages of Framing</h4>

<ul>
<li>Identifies the beginning and end of data.</li>
<li>Provides organized data transmission.</li>
<li>Supports error detection.</li>
<li>Improves communication reliability.</li>
<li>Makes data processing easier for the receiver.</li>
<li>Helps in flow control and error control.</li>
</ul>

<h4>Functions of Framing</h4>

<ul>
<li>Divides data into manageable units.</li>
<li>Provides synchronization between sender and receiver.</li>
<li>Supports addressing information.</li>
<li>Allows error detection mechanisms.</li>
<li>Improves transmission efficiency.</li>
</ul>

<h4>Methods of Framing</h4>

<p>
Several techniques are used to create and identify frames during communication.
The most commonly used framing methods are discussed below.
</p>

<hr>

<h4>1. Character Count Method</h4>

<p>
In the Character Count Method, the first field of the frame contains the total number
of characters present in that frame.
</p>

<p>
The receiver reads the count value and determines where the frame ends.
</p>

<h5>Working</h5>

<p>
Suppose a frame contains 10 characters.
The first field will contain the value 10.
</p>

<p>
10 DATA DATA DATA
</p>

<p>
The receiver reads the count value and knows that the next 10 characters belong
to the frame.
</p>

<h5>Advantages</h5>

<ul>
<li>Simple implementation.</li>
<li>Easy to understand.</li>
<li>Less overhead.</li>
</ul>

<h5>Disadvantages</h5>

<ul>
<li>If the count field is corrupted, synchronization is lost.</li>
<li>A single error can affect multiple frames.</li>
<li>Not commonly used in modern networks.</li>
</ul>

<hr>

<h4>2. Byte Stuffing Method</h4>

<p>
Byte Stuffing is also known as Character Stuffing. In this method, special bytes are
used to indicate the beginning and end of a frame.
</p>

<p>
A problem occurs when the same special byte appears inside the actual data.
To solve this problem, an additional escape character is inserted before the special byte.
</p>

<h5>Working</h5>

<p>
Flag Byte → Data → Flag Byte
</p>

<p>
If the flag byte appears inside the data, an escape byte is inserted before it.
</p>

<h5>Example</h5>

<p>
FLAG DATA ESC FLAG DATA FLAG
</p>

<p>
The receiver recognizes that the escaped flag byte is part of the data and not a frame boundary.
</p>

<h5>Advantages</h5>

<ul>
<li>Provides clear frame boundaries.</li>
<li>Easy error detection.</li>
<li>Widely used in character-oriented protocols.</li>
</ul>

<h5>Disadvantages</h5>

<ul>
<li>Additional bytes increase frame size.</li>
<li>Transmission overhead increases.</li>
</ul>

<hr>

<h4>3. Bit Stuffing Method</h4>

<p>
Bit Stuffing is widely used in modern computer networks and bit-oriented protocols
such as HDLC.
</p>

<p>
In this method, a special bit pattern is used as a frame delimiter.
Whenever the sender finds five consecutive 1s in the data, it automatically inserts
an extra 0 bit.
</p>

<p>
The receiver removes the inserted 0 bit during frame processing.
</p>

<h5>Working</h5>

<p>
Flag Pattern:
01111110
</p>

<p>
Original Data:
111110111111
</p>

<p>
After Bit Stuffing:
11111001111101
</p>

<p>
The inserted 0 prevents confusion between data bits and flag bits.
</p>

<h5>Advantages</h5>

<ul>
<li>Highly reliable.</li>
<li>Supports bit-oriented communication.</li>
<li>Widely used in networking protocols.</li>
<li>Prevents accidental flag generation.</li>
</ul>

<h5>Disadvantages</h5>

<ul>
<li>Additional processing is required.</li>
<li>Slight increase in transmission overhead.</li>
</ul>

<hr>

<h4>4. Physical Layer Coding Violations</h4>

<p>
In this method, special signal patterns that are not used for normal data transmission
are reserved to indicate the beginning and end of a frame.
</p>

<p>
These unique signal patterns are recognized by the receiver as frame boundaries.
</p>

<h5>Working</h5>

<p>
Special electrical or signal codes are used to mark frame start and frame end.
</p>

<h5>Advantages</h5>

<ul>
<li>No extra bits or bytes are required.</li>
<li>Efficient frame identification.</li>
<li>Fast processing.</li>
</ul>

<h5>Disadvantages</h5>

<ul>
<li>Requires special hardware support.</li>
<li>Not suitable for all transmission systems.</li>
</ul>

<hr>

<h4>Comparison of Framing Methods</h4>

<table class="notes-table">

<tr>
<th>Method</th>
<th>Working Principle</th>
<th>Advantage</th>
<th>Limitation</th>
</tr>

<tr>
<td>Character Count</td>
<td>Uses count field to specify frame length</td>
<td>Simple</td>
<td>Count field errors affect synchronization</td>
</tr>

<tr>
<td>Byte Stuffing</td>
<td>Uses special bytes and escape characters</td>
<td>Clear frame boundaries</td>
<td>Extra bytes increase overhead</td>
</tr>

<tr>
<td>Bit Stuffing</td>
<td>Inserts 0 after five consecutive 1s</td>
<td>Highly reliable</td>
<td>Additional processing required</td>
</tr>

<tr>
<td>Physical Layer Coding Violations</td>
<td>Uses special signal patterns</td>
<td>No extra bits required</td>
<td>Requires special hardware support</td>
</tr>

</table>

<h4>Real-Life Example</h4>

<p>
Imagine a teacher checking answer sheets.
Each student's answer sheet is kept separately with a cover page and roll number.
This makes it easy to identify where one student's answers begin and end.
</p>

<p>
Similarly, framing separates data into distinct frames so that the receiver can easily
identify and process each message.
</p>

<h4>Important Exam Points</h4>

<ul>
<li>Framing is a function of the Data Link Layer.</li>
<li>It divides a stream of bits into identifiable units called frames.</li>
<li>A frame is the PDU of the Data Link Layer.</li>
<li>Framing helps identify the beginning and end of data.</li>
<li>Main framing methods are Character Count, Byte Stuffing, Bit Stuffing, and Physical Layer Coding Violations.</li>
<li>Bit Stuffing is widely used in modern networking protocols.</li>
<li>HDLC uses the Bit Stuffing method.</li>
</ul>

<h4>Short Interview Question</h4>

<p>
<b>Question:</b> What is Framing in the Data Link Layer?
</p>

<p>
<b>Answer:</b> Framing is the process of dividing a stream of data into smaller units called frames.
The Data Link Layer adds headers and trailers to create frames, allowing the receiver to identify
the beginning and end of data and ensuring reliable communication.
</p>

`;


let errorAndFlowControlContent = `

<h3>Error Control and Flow Control</h3>

<p>
Error Control and Flow Control are two important functions of the Data Link Layer.
They help ensure that data is transmitted accurately and efficiently between sender
and receiver devices.
</p>

<p>
During communication, data may be damaged because of noise, interference, hardware
failures, or transmission problems. Also, if the sender transmits data faster than
the receiver can process it, data loss may occur. To overcome these problems, the
Data Link Layer uses Error Control and Flow Control mechanisms.
</p>

<hr>

<h3>Error Control</h3>

<p>
Error Control is the mechanism used to detect and recover from errors that occur
during data transmission. Its main goal is to ensure that the receiver obtains the
same data that was sent by the sender.
</p>

<p>
When a frame travels through a communication channel, some bits may change because
of noise or other disturbances. Error Control helps identify these errors and take
appropriate action.
</p>

<h4>Objectives of Error Control</h4>

<ul>
<li>Detect transmission errors.</li>
<li>Correct damaged data whenever possible.</li>
<li>Request retransmission of corrupted frames.</li>
<li>Provide reliable communication.</li>
<li>Improve data integrity.</li>
</ul>

<h4>Causes of Errors</h4>

<p>
Errors can occur for several reasons during data transmission.
</p>

<ul>
<li><b>Noise:</b> Unwanted electrical signals that affect transmitted data.</li>
<li><b>Signal Distortion:</b> Changes in signal shape during transmission.</li>
<li><b>Attenuation:</b> Weakening of signals over long distances.</li>
<li><b>Electromagnetic Interference:</b> Disturbance caused by nearby electronic devices.</li>
<li><b>Transmission Problems:</b> Faulty cables, connectors, or network devices.</li>
</ul>

<h4>Types of Errors</h4>

<h4>1. Single-Bit Error</h4>

<p>
A single-bit error occurs when only one bit changes during transmission.
</p>

<p>
Example:
</p>

<p>
Sent Data: 10110010
</p>

<p>
Received Data: 10100010
</p>

<p>
Only one bit has changed.
</p>

<h4>2. Burst Error</h4>

<p>
A burst error occurs when two or more bits are changed during transmission.
</p>

<p>
Example:
</p>

<p>
Sent Data: 10110010
</p>

<p>
Received Data: 11100110
</p>

<p>
Multiple bits have been altered.
</p>

<p>
Burst errors are more common in computer networks.
</p>

<h4>Error Detection Techniques</h4>

<p>
Several techniques are used to detect errors in transmitted frames.
</p>

<hr>

<h4>1. Parity Check</h4>

<p>
Parity Check is one of the simplest error detection methods.
A parity bit is added to the data before transmission.
</p>

<p>
The parity bit is chosen so that the total number of 1s becomes either even
(Even Parity) or odd (Odd Parity).
</p>

<h5>Example</h5>

<p>
Data: 1011001
</p>

<p>
Number of 1s = 4
</p>

<p>
For Even Parity, parity bit = 0
</p>

<p>
Transmitted Data = 10110010
</p>

<h5>Advantages</h5>

<ul>
<li>Simple implementation.</li>
<li>Low overhead.</li>
<li>Easy error detection.</li>
</ul>

<h5>Disadvantages</h5>

<ul>
<li>Cannot detect all multiple-bit errors.</li>
<li>Low reliability for large data transmissions.</li>
</ul>

<hr>

<h4>2. Checksum</h4>

<p>
Checksum is a method in which data is divided into equal segments and added together.
The resulting value is transmitted along with the data.
</p>

<p>
At the receiver side, the checksum is calculated again and compared with the received value.
If both values match, the data is considered correct.
</p>

<h5>Advantages</h5>

<ul>
<li>Better error detection than parity checking.</li>
<li>Simple calculation process.</li>
<li>Widely used in networking.</li>
</ul>

<h5>Disadvantages</h5>

<ul>
<li>Cannot detect every possible error.</li>
<li>Less accurate than CRC.</li>
</ul>

<hr>

<h4>3. CRC (Cyclic Redundancy Check)</h4>

<p>
CRC is one of the most powerful and widely used error detection techniques in computer networks.
</p>

<p>
In CRC, binary division is performed using a predefined generator polynomial.
The remainder obtained from the division is appended to the frame before transmission.
</p>

<p>
The receiver performs the same calculation. If the remainder is zero, the frame is accepted.
Otherwise, an error is detected.
</p>

<h5>Advantages</h5>

<ul>
<li>Highly accurate error detection.</li>
<li>Detects most burst errors.</li>
<li>Widely used in Ethernet and data communication protocols.</li>
</ul>

<h5>Disadvantages</h5>

<ul>
<li>More complex than parity checking.</li>
<li>Requires additional computation.</li>
</ul>

<hr>

<h4>Comparison of Error Detection Techniques</h4>

<table class="notes-table">

<tr>
<th>Technique</th>
<th>Complexity</th>
<th>Reliability</th>
<th>Common Usage</th>
</tr>

<tr>
<td>Parity Check</td>
<td>Low</td>
<td>Low</td>
<td>Simple systems</td>
</tr>

<tr>
<td>Checksum</td>
<td>Medium</td>
<td>Medium</td>
<td>Network protocols</td>
</tr>

<tr>
<td>CRC</td>
<td>High</td>
<td>Very High</td>
<td>Ethernet and modern networks</td>
</tr>

</table>

<hr>

<h3>Flow Control</h3>

<p>
Flow Control is the mechanism that regulates the rate at which data is transmitted
between sender and receiver.
</p>

<p>
The purpose of Flow Control is to ensure that a fast sender does not overwhelm a slow receiver.
Without Flow Control, the receiver's buffer may become full, causing frame loss.
</p>

<h4>Need for Flow Control</h4>

<ul>
<li>Prevents receiver overload.</li>
<li>Prevents frame loss.</li>
<li>Improves communication reliability.</li>
<li>Maintains proper synchronization.</li>
<li>Ensures efficient utilization of network resources.</li>
</ul>

<h4>Flow Control Techniques</h4>

<ul>
<li>Stop and Wait Protocol</li>
<li>Sliding Window Protocol</li>
</ul>

<hr>

<h4>1. Stop and Wait Protocol</h4>

<p>
Stop and Wait is the simplest Flow Control technique.
</p>

<p>
In this method, the sender transmits one frame and then waits for an acknowledgement
from the receiver before sending the next frame.
</p>

<h5>Working</h5>

<p>
Step 1: Sender sends Frame 1.
</p>

<p>
Step 2: Receiver receives Frame 1 and sends ACK.
</p>

<p>
Step 3: Sender receives ACK.
</p>

<p>
Step 4: Sender sends Frame 2.
</p>

<h5>Advantages</h5>

<ul>
<li>Simple implementation.</li>
<li>Reliable communication.</li>
<li>Easy error recovery.</li>
</ul>

<h5>Disadvantages</h5>

<ul>
<li>Low network utilization.</li>
<li>Slow transmission speed.</li>
<li>Sender spends time waiting for acknowledgements.</li>
</ul>

<hr>

<h4>2. Sliding Window Protocol</h4>

<p>
Sliding Window Protocol improves communication efficiency by allowing multiple frames
to be transmitted before receiving acknowledgements.
</p>

<p>
The sender maintains a window that specifies how many frames can be sent without waiting.
As acknowledgements arrive, the window moves forward, allowing new frames to be transmitted.
</p>

<h5>Working</h5>

<p>
Suppose the window size is 4.
</p>

<p>
The sender can send Frame 1, Frame 2, Frame 3, and Frame 4 without waiting for ACKs.
</p>

<p>
When acknowledgements arrive, the window slides forward and new frames can be sent.
</p>

<h5>Advantages</h5>

<ul>
<li>Higher transmission efficiency.</li>
<li>Better bandwidth utilization.</li>
<li>Faster communication.</li>
<li>Suitable for large networks.</li>
</ul>

<h5>Disadvantages</h5>

<ul>
<li>More complex implementation.</li>
<li>Requires additional memory and processing.</li>
</ul>

<hr>

<h4>Comparison of Flow Control Techniques</h4>

<table class="notes-table">

<tr>
<th>Feature</th>
<th>Stop and Wait</th>
<th>Sliding Window</th>
</tr>

<tr>
<td>Frames Sent at a Time</td>
<td>One</td>
<td>Multiple</td>
</tr>

<tr>
<td>Efficiency</td>
<td>Low</td>
<td>High</td>
</tr>

<tr>
<td>Complexity</td>
<td>Simple</td>
<td>Complex</td>
</tr>

<tr>
<td>Speed</td>
<td>Slower</td>
<td>Faster</td>
</tr>

<tr>
<td>Network Utilization</td>
<td>Low</td>
<td>High</td>
</tr>

</table>

<hr>

<h4>Real-Life Classroom Example</h4>

<p>
Imagine a teacher distributing answer sheets to students.
</p>

<p>
In Stop and Wait Protocol, the teacher gives one answer sheet to a student and waits
for confirmation before giving the next one.
</p>

<p>
In Sliding Window Protocol, the teacher distributes several answer sheets at once and
collects confirmations later, making the process much faster and more efficient.
</p>

<h4>Difference Between Error Control and Flow Control</h4>

<table class="notes-table">

<tr>
<th>Basis</th>
<th>Error Control</th>
<th>Flow Control</th>
</tr>

<tr>
<td>Purpose</td>
<td>Detects and handles transmission errors</td>
<td>Controls transmission speed</td>
</tr>

<tr>
<td>Main Goal</td>
<td>Accuracy</td>
<td>Efficiency</td>
</tr>

<tr>
<td>Techniques</td>
<td>Parity, Checksum, CRC</td>
<td>Stop and Wait, Sliding Window</td>
</tr>

<tr>
<td>Problem Solved</td>
<td>Data corruption</td>
<td>Receiver overload</td>
</tr>

</table>

<h4>Important Exam Points</h4>

<ul>
<li>Error Control ensures accurate and reliable data transmission.</li>
<li>Flow Control regulates the rate of data transfer.</li>
<li>Parity Check, Checksum, and CRC are error detection techniques.</li>
<li>CRC is the most widely used error detection technique.</li>
<li>Stop and Wait Protocol sends one frame at a time.</li>
<li>Sliding Window Protocol allows multiple frames before acknowledgement.</li>
<li>Sliding Window provides better efficiency and bandwidth utilization.</li>
</ul>

<h4>Short Interview Question</h4>

<p>
<b>Question:</b> What is the difference between Error Control and Flow Control?
</p>

<p>
<b>Answer:</b> Error Control ensures that transmitted data is received correctly by detecting
and handling errors, whereas Flow Control manages the transmission rate so that a fast
sender does not overwhelm a slow receiver.
</p>

`;


let hdlcSdlcContent = `

<h3>HDLC and SDLC</h3>

<p>
HDLC (High-Level Data Link Control) and SDLC (Synchronous Data Link Control) are important
Data Link Layer protocols used for reliable data communication. These protocols provide
framing, error control, flow control, and reliable transmission of data between devices.
</p>

<p>
Both protocols are based on synchronous communication and are designed to ensure that
data reaches its destination accurately and efficiently.
</p>

<hr>

<h3>HDLC (High-Level Data Link Control)</h3>

<p>
HDLC stands for <b>High-Level Data Link Control</b>. It is a bit-oriented Data Link Layer
protocol developed and standardized by the <b>International Organization for Standardization (ISO)</b>.
</p>

<p>
HDLC is used for reliable communication over point-to-point and multipoint network links.
It provides mechanisms for framing, flow control, error detection, and error recovery.
</p>

<p>
HDLC is one of the most widely used Data Link Layer protocols and serves as the foundation
for several other communication protocols.
</p>

<h4>Why HDLC is Needed?</h4>

<p>
When data is transmitted over a network, transmission errors, lost frames, and duplicate
frames may occur. HDLC helps solve these problems by providing reliable communication
between connected devices.
</p>

<h4>Characteristics of HDLC</h4>

<ul>
<li>Bit-oriented protocol.</li>
<li>Supports synchronous communication.</li>
<li>Provides reliable data transfer.</li>
<li>Supports both point-to-point and multipoint communication.</li>
<li>Provides error detection and recovery.</li>
<li>Supports full-duplex and half-duplex communication.</li>
<li>Uses bit stuffing for framing.</li>
</ul>

<h4>Features of HDLC</h4>

<ul>
<li>Reliable Data Transfer</li>
<li>Error Detection</li>
<li>Flow Control</li>
<li>Frame Sequencing</li>
<li>Error Recovery</li>
<li>Supports Full Duplex Communication</li>
<li>Efficient Bandwidth Utilization</li>
</ul>

<h4>Stations Used in HDLC</h4>

<p>
HDLC communication involves three types of stations.
</p>

<h4>1. Primary Station</h4>

<p>
The primary station controls communication and manages data flow.
</p>

<h4>2. Secondary Station</h4>

<p>
The secondary station operates under the control of the primary station.
</p>

<h4>3. Combined Station</h4>

<p>
A combined station can perform the functions of both primary and secondary stations.
</p>

<h4>HDLC Frame Structure</h4>

<p>
An HDLC frame contains several fields that help in communication and error detection.
</p>

<table class="notes-table">

<tr>
<th>Field</th>
<th>Purpose</th>
</tr>

<tr>
<td>Flag Field</td>
<td>Marks the beginning and end of a frame</td>
</tr>

<tr>
<td>Address Field</td>
<td>Identifies the destination station</td>
</tr>

<tr>
<td>Control Field</td>
<td>Controls flow and error management</td>
</tr>

<tr>
<td>Data Field</td>
<td>Contains actual user data</td>
</tr>

<tr>
<td>CRC Field</td>
<td>Used for error detection</td>
</tr>

<tr>
<td>Flag Field</td>
<td>Marks the end of the frame</td>
</tr>

</table>

<h4>HDLC Frame Format</h4>

<p>
Flag → Address → Control → Data → CRC → Flag
</p>

<h4>Flag Field</h4>

<p>
The Flag Field indicates the beginning and end of an HDLC frame.
The standard flag pattern is:
</p>

<p>
01111110
</p>

<p>
To prevent this pattern from appearing inside data, HDLC uses the Bit Stuffing technique.
</p>

<h4>Types of HDLC Frames</h4>

<h4>1. Information Frame (I-Frame)</h4>

<p>
Used to transmit actual user data and control information.
</p>

<h4>2. Supervisory Frame (S-Frame)</h4>

<p>
Used for flow control and error control.
</p>

<h4>3. Unnumbered Frame (U-Frame)</h4>

<p>
Used for link management and control purposes.
</p>

<h4>Advantages of HDLC</h4>

<ul>
<li>Highly reliable communication.</li>
<li>Efficient error detection using CRC.</li>
<li>Supports multiple network configurations.</li>
<li>Provides flow and error control.</li>
<li>Efficient use of bandwidth.</li>
</ul>

<h4>Disadvantages of HDLC</h4>

<ul>
<li>More complex than simple protocols.</li>
<li>Additional overhead due to control information.</li>
</ul>

<hr>

<h3>SDLC (Synchronous Data Link Control)</h3>

<p>
SDLC stands for <b>Synchronous Data Link Control</b>. It is a Data Link Layer protocol
developed by <b>IBM</b> for synchronous data communication.
</p>

<p>
SDLC was introduced before HDLC and became one of the earliest protocols used for
reliable communication in IBM networking environments.
</p>

<p>
Many concepts of SDLC were later adopted by ISO while developing HDLC.
</p>

<h4>Purpose of SDLC</h4>

<p>
SDLC was designed to provide reliable communication between computers and terminals
in IBM networks. It ensures proper framing, error control, and flow control.
</p>

<h4>Features of SDLC</h4>

<ul>
<li>Synchronous Communication</li>
<li>Error Control</li>
<li>Flow Control</li>
<li>Reliable Transmission</li>
<li>Frame Sequencing</li>
<li>Supports Multipoint Networks</li>
</ul>

<h4>Characteristics of SDLC</h4>

<ul>
<li>Developed by IBM.</li>
<li>Bit-oriented protocol.</li>
<li>Uses synchronous communication.</li>
<li>Supports primary and secondary station architecture.</li>
<li>Provides reliable data transfer.</li>
<li>Uses error detection techniques.</li>
</ul>

<h4>Working of SDLC</h4>

<p>
In SDLC, a primary station controls one or more secondary stations.
The primary station initiates communication and manages data transfer.
</p>

<p>
Secondary stations transmit data only when permitted by the primary station.
</p>

<h4>Advantages of SDLC</h4>

<ul>
<li>Reliable communication.</li>
<li>Supports large communication networks.</li>
<li>Provides error and flow control.</li>
<li>Well suited for IBM systems.</li>
</ul>

<h4>Disadvantages of SDLC</h4>

<ul>
<li>Mainly designed for IBM environments.</li>
<li>Less flexible than HDLC.</li>
<li>Limited compatibility with non-IBM systems.</li>
</ul>

<hr>

<h3>Relationship Between HDLC and SDLC</h3>

<p>
SDLC was developed first by IBM. Later, ISO used SDLC concepts and developed HDLC
as an international standard.
</p>

<p>
Therefore, HDLC can be considered an enhanced and standardized version of SDLC.
</p>

<hr>

<h3>Difference Between HDLC and SDLC</h3>

<table class="notes-table">

<tr>
<th>Basis</th>
<th>HDLC</th>
<th>SDLC</th>
</tr>

<tr>
<td>Full Form</td>
<td>High-Level Data Link Control</td>
<td>Synchronous Data Link Control</td>
</tr>

<tr>
<td>Developed By</td>
<td>ISO</td>
<td>IBM</td>
</tr>

<tr>
<td>Type</td>
<td>International Standard</td>
<td>Proprietary IBM Protocol</td>
</tr>

<tr>
<td>Flexibility</td>
<td>More Flexible</td>
<td>Less Flexible</td>
</tr>

<tr>
<td>Usage</td>
<td>Widely Used</td>
<td>Mainly IBM Systems</td>
</tr>

<tr>
<td>Compatibility</td>
<td>Supports Multiple Vendors</td>
<td>IBM-Oriented</td>
</tr>

<tr>
<td>Popularity</td>
<td>Very High</td>
<td>Limited</td>
</tr>

</table>

<hr>

<h4>Real-Life Example</h4>

<p>
Imagine a school where a principal communicates with multiple class monitors.
</p>

<p>
In SDLC, the principal controls all communication and monitors respond only when
permitted.
</p>

<p>
In HDLC, communication is more flexible, and different devices can communicate
efficiently while still maintaining reliability and control.
</p>

<h4>Important Exam Points</h4>

<ul>
<li>HDLC stands for High-Level Data Link Control.</li>
<li>SDLC stands for Synchronous Data Link Control.</li>
<li>HDLC was standardized by ISO.</li>
<li>SDLC was developed by IBM.</li>
<li>Both are bit-oriented protocols.</li>
<li>Both provide framing, error control, and flow control.</li>
<li>HDLC uses Bit Stuffing for framing.</li>
<li>The HDLC flag pattern is 01111110.</li>
<li>HDLC supports I-Frames, S-Frames, and U-Frames.</li>
<li>HDLC is more flexible and widely used than SDLC.</li>
</ul>

<h4>Short Interview Question</h4>

<p>
<b>Question:</b> What is the main difference between HDLC and SDLC?
</p>

<p>
<b>Answer:</b> HDLC is an ISO-standardized bit-oriented protocol that is widely used in
different networking environments, whereas SDLC is an IBM-developed protocol mainly
used in IBM systems. HDLC is more flexible and supports broader compatibility.
</p>

`;


let slipPppContent = `

<h3>Data Link Layer in the Internet (SLIP and PPP)</h3>

<p>
The Internet uses various Data Link Layer protocols to transmit data between devices.
When computers communicate through serial links or point-to-point connections, special
protocols are required to encapsulate IP packets and ensure proper communication.
</p>

<p>
Two important protocols used in Internet communication are <b>SLIP (Serial Line Internet Protocol)</b>
and <b>PPP (Point-to-Point Protocol)</b>.
</p>

<p>
SLIP was one of the earliest protocols used for Internet communication over serial lines,
while PPP was developed later to overcome the limitations of SLIP and provide more reliable
and secure communication.
</p>

<hr>

<h3>SLIP (Serial Line Internet Protocol)</h3>

<p>
SLIP stands for <b>Serial Line Internet Protocol</b>. It is a simple Data Link Layer protocol
used for transmitting IP packets over serial communication lines.
</p>

<p>
SLIP was developed during the early days of the Internet when users connected to the Internet
through dial-up telephone lines and serial connections.
</p>

<p>
Its primary purpose is to transfer Internet Protocol (IP) packets between two devices
connected through a serial link.
</p>

<h4>Why SLIP Was Developed?</h4>

<p>
Early computers required a simple mechanism to transmit IP packets over serial communication
channels. SLIP was introduced to provide a basic method of carrying IP traffic across these links.
</p>

<h4>Working of SLIP</h4>

<p>
SLIP encapsulates IP packets by adding special delimiter characters at the beginning
and end of the packet.
</p>

<p>
The receiver uses these delimiters to identify packet boundaries and extract the original
IP packet.
</p>

<h4>Features of SLIP</h4>

<ul>
<li>Simple Protocol</li>
<li>Supports Only IP Protocol</li>
<li>Low Processing Overhead</li>
<li>Easy to Implement</li>
<li>Suitable for Simple Serial Connections</li>
</ul>

<h4>Advantages of SLIP</h4>

<ul>
<li>Very simple design.</li>
<li>Requires minimal processing power.</li>
<li>Easy implementation.</li>
<li>Low communication overhead.</li>
</ul>

<h4>Limitations of SLIP</h4>

<ul>
<li>No Error Detection Mechanism.</li>
<li>No Authentication Support.</li>
<li>No Dynamic IP Address Assignment.</li>
<li>Supports Only IP Protocol.</li>
<li>No Compression Support.</li>
<li>Limited functionality.</li>
</ul>

<h4>Applications of SLIP</h4>

<ul>
<li>Early Internet connections.</li>
<li>Simple serial communication systems.</li>
<li>Legacy networking environments.</li>
</ul>

<hr>

<h3>PPP (Point-to-Point Protocol)</h3>

<p>
PPP stands for <b>Point-to-Point Protocol</b>. It is a Data Link Layer protocol designed
to provide communication between two devices connected through a point-to-point link.
</p>

<p>
PPP was developed as an improved replacement for SLIP. It offers many advanced features
such as authentication, error detection, protocol support, and dynamic address assignment.
</p>

<p>
PPP became one of the most widely used protocols for dial-up Internet access and WAN
communication.
</p>

<h4>Objectives of PPP</h4>

<ul>
<li>Reliable communication between two devices.</li>
<li>Support for multiple network layer protocols.</li>
<li>Error detection.</li>
<li>User authentication.</li>
<li>Automatic configuration of communication parameters.</li>
</ul>

<h4>Working of PPP</h4>

<p>
PPP encapsulates data into frames and transmits them across a point-to-point link.
</p>

<p>
Before data transmission begins, PPP establishes the connection, negotiates communication
parameters, authenticates users if required, and then starts data transfer.
</p>

<p>
After communication is completed, PPP terminates the connection properly.
</p>

<h4>Features of PPP</h4>

<ul>
<li>Error Detection</li>
<li>Authentication Support</li>
<li>Dynamic IP Address Assignment</li>
<li>Supports Multiple Protocols</li>
<li>Link Configuration Support</li>
<li>Reliable Communication</li>
<li>Protocol Negotiation Capability</li>
</ul>

<h4>PPP Frame Structure</h4>

<p>
PPP uses a frame format similar to HDLC.
</p>

<table class="notes-table">

<tr>
<th>Field</th>
<th>Purpose</th>
</tr>

<tr>
<td>Flag</td>
<td>Indicates beginning and end of frame</td>
</tr>

<tr>
<td>Address</td>
<td>Identifies communication endpoint</td>
</tr>

<tr>
<td>Control</td>
<td>Provides control information</td>
</tr>

<tr>
<td>Protocol</td>
<td>Specifies encapsulated protocol</td>
</tr>

<tr>
<td>Data</td>
<td>Contains actual user information</td>
</tr>

<tr>
<td>FCS</td>
<td>Error detection field</td>
</tr>

<tr>
<td>Flag</td>
<td>Marks frame end</td>
</tr>

</table>

<h4>PPP Components</h4>

<h4>1. Link Control Protocol (LCP)</h4>

<p>
LCP is responsible for establishing, configuring, maintaining, and terminating the link.
</p>

<h4>2. Network Control Protocol (NCP)</h4>

<p>
NCP is responsible for configuring Network Layer protocols such as IP.
</p>

<h4>3. Authentication Protocols</h4>

<p>
PPP supports authentication mechanisms to verify user identity.
</p>

<p>
Common authentication methods include:
</p>

<ul>
<li>PAP (Password Authentication Protocol)</li>
<li>CHAP (Challenge Handshake Authentication Protocol)</li>
</ul>

<h4>Advantages of PPP</h4>

<ul>
<li>Provides error detection.</li>
<li>Supports authentication.</li>
<li>Supports multiple Network Layer protocols.</li>
<li>Allows dynamic IP address assignment.</li>
<li>Provides reliable communication.</li>
<li>Supports protocol negotiation.</li>
</ul>

<h4>Disadvantages of PPP</h4>

<ul>
<li>More complex than SLIP.</li>
<li>Requires additional processing.</li>
<li>Slightly higher overhead.</li>
</ul>

<h4>Applications of PPP</h4>

<ul>
<li>Dial-up Internet connections.</li>
<li>Broadband communication.</li>
<li>WAN links.</li>
<li>Router-to-router communication.</li>
<li>Point-to-point network connections.</li>
</ul>

<hr>

<h3>Comparison Between SLIP and PPP</h3>

<p>
PPP was developed to overcome the shortcomings of SLIP. As a result, PPP offers more
features, better security, and greater flexibility.
</p>

<table class="notes-table">

<tr>
<th>Basis</th>
<th>SLIP</th>
<th>PPP</th>
</tr>

<tr>
<td>Full Form</td>
<td>Serial Line Internet Protocol</td>
<td>Point-to-Point Protocol</td>
</tr>

<tr>
<td>Complexity</td>
<td>Simple Protocol</td>
<td>Advanced Protocol</td>
</tr>

<tr>
<td>Error Detection</td>
<td>Not Available</td>
<td>Available</td>
</tr>

<tr>
<td>Authentication</td>
<td>Not Available</td>
<td>Available</td>
</tr>

<tr>
<td>Dynamic IP Addressing</td>
<td>Not Supported</td>
<td>Supported</td>
</tr>

<tr>
<td>Protocol Support</td>
<td>Supports Only IP</td>
<td>Supports Multiple Protocols</td>
</tr>

<tr>
<td>Security</td>
<td>Low</td>
<td>High</td>
</tr>

<tr>
<td>Reliability</td>
<td>Low</td>
<td>High</td>
</tr>

<tr>
<td>Usage</td>
<td>Older Systems</td>
<td>Modern Networks</td>
</tr>

</table>

<hr>

<h3>Real-Life Example</h3>

<p>
Imagine two students exchanging notes.
</p>

<p>
SLIP is like simply passing a note without checking whether the correct student received it.
There is no verification or security.
</p>

<p>
PPP is like handing over the note after checking the student's identity, confirming receipt,
and ensuring the message is delivered correctly.
</p>

<p>
Therefore, PPP provides more reliable and secure communication.
</p>

<h4>Why PPP Replaced SLIP?</h4>

<ul>
<li>Provides authentication.</li>
<li>Provides error detection.</li>
<li>Supports multiple protocols.</li>
<li>Supports automatic configuration.</li>
<li>Offers greater reliability and security.</li>
</ul>

<h4>Important Exam Points</h4>

<ul>
<li>SLIP stands for Serial Line Internet Protocol.</li>
<li>PPP stands for Point-to-Point Protocol.</li>
<li>SLIP supports only IP communication.</li>
<li>PPP supports multiple Network Layer protocols.</li>
<li>PPP provides authentication and error detection.</li>
<li>PPP uses LCP and NCP for connection management.</li>
<li>PAP and CHAP are authentication protocols used in PPP.</li>
<li>PPP is more secure and reliable than SLIP.</li>
<li>PPP largely replaced SLIP in modern networking.</li>
</ul>

<h4>Short Interview Question</h4>

<p>
<b>Question:</b> Why is PPP preferred over SLIP?
</p>

<p>
<b>Answer:</b> PPP is preferred over SLIP because it provides authentication,
error detection, dynamic IP addressing, support for multiple protocols,
and more reliable communication, whereas SLIP only supports basic IP packet transmission.
</p>

`;


let macSubLayerContent = `

<h3>MAC Sub Layer</h3>

<p>
MAC stands for <b>Media Access Control</b>. The MAC Sub Layer is one of the two sublayers
of the Data Link Layer in the OSI Reference Model. It is responsible for controlling
how devices access and share a common transmission medium.
</p>

<p>
The IEEE divides the Data Link Layer into two sublayers:
</p>

<ul>
<li>Logical Link Control (LLC) Sub Layer</li>
<li>Media Access Control (MAC) Sub Layer</li>
</ul>

<p>
The LLC sublayer provides services to the Network Layer, while the MAC sublayer controls
access to the communication medium and handles physical addressing.
</p>

<h4>Position of MAC Sub Layer in OSI Model</h4>

<p>
Application Layer
</p>

<p>
Presentation Layer
</p>

<p>
Session Layer
</p>

<p>
Transport Layer
</p>

<p>
Network Layer
</p>

<p>
Data Link Layer
</p>

<p>
&nbsp;&nbsp;&nbsp;&nbsp;LLC Sub Layer
</p>

<p>
&nbsp;&nbsp;&nbsp;&nbsp;<b>MAC Sub Layer</b>
</p>

<p>
Physical Layer
</p>

<p>
The MAC Sub Layer works closely with the Physical Layer because it directly controls
how data is placed onto the transmission medium.
</p>

<h4>Need for MAC Sub Layer</h4>

<p>
In many networks, multiple devices share the same communication channel.
If all devices attempt to transmit data at the same time, data collisions may occur,
resulting in communication failure.
</p>

<p>
The MAC Sub Layer solves this problem by determining which device can access the medium
at a particular time.
</p>

<h4>What is Media Access Control?</h4>

<p>
Media Access Control is the process of managing access to a shared communication channel.
It ensures that only one device or an authorized group of devices can transmit data
at a given moment.
</p>

<p>
This improves network performance and prevents communication conflicts.
</p>

<h4>Functions of MAC Sub Layer</h4>

<h4>1. Media Access Control</h4>

<p>
The primary responsibility of the MAC Sub Layer is to control access to the transmission medium.
It decides when a device can transmit data and when it must wait.
</p>

<p>
This prevents multiple devices from transmitting simultaneously on the same channel.
</p>

<h4>2. Physical Addressing</h4>

<p>
The MAC Sub Layer provides physical addressing using MAC addresses.
</p>

<p>
Every network interface card (NIC) is assigned a unique MAC address that identifies
the device within a local network.
</p>

<p>
Example:
</p>

<p>
00:1A:2B:3C:4D:5E
</p>

<p>
This unique address helps deliver frames to the correct destination device.
</p>

<h4>3. Collision Handling</h4>

<p>
A collision occurs when two or more devices transmit data simultaneously over the same medium.
</p>

<p>
The MAC Sub Layer detects and handles collisions using appropriate access methods,
ensuring successful transmission.
</p>

<p>
Example:
In Ethernet networks, collision handling is performed using CSMA/CD.
</p>

<h4>4. Channel Allocation</h4>

<p>
The MAC Sub Layer allocates communication channels among devices sharing the network.
</p>

<p>
It ensures fair and efficient utilization of available bandwidth.
</p>

<h4>5. Frame Transmission</h4>

<p>
The MAC Sub Layer prepares frames for transmission and forwards them to the Physical Layer.
</p>

<p>
At the receiving side, it accepts frames from the Physical Layer and passes them to the LLC Sub Layer.
</p>

<h4>6. Frame Synchronization</h4>

<p>
The MAC Sub Layer helps maintain synchronization between sender and receiver during frame transmission.
</p>

<h4>MAC Address</h4>

<p>
A MAC Address is a unique hardware address assigned to a network interface card.
It is also called a Physical Address or Hardware Address.
</p>

<h4>Characteristics of MAC Address</h4>

<ul>
<li>Globally unique identifier.</li>
<li>Assigned by the manufacturer.</li>
<li>Usually 48 bits long.</li>
<li>Written in hexadecimal format.</li>
<li>Used for communication within a local network.</li>
</ul>

<h4>Example of MAC Address</h4>

<p>
00:1A:2B:3C:4D:5E
</p>

<h4>Structure of MAC Address</h4>

<table class="notes-table">

<tr>
<th>Part</th>
<th>Description</th>
</tr>

<tr>
<td>First 24 Bits</td>
<td>Manufacturer Identifier (OUI)</td>
</tr>

<tr>
<td>Last 24 Bits</td>
<td>Device Identifier</td>
</tr>

</table>

<h4>How MAC Sub Layer Works</h4>

<p>
Step 1: Data is received from the LLC Sub Layer.
</p>

<p>
Step 2: Source and destination MAC addresses are added.
</p>

<p>
Step 3: Access rules determine when the device can transmit.
</p>

<p>
Step 4: Frame is forwarded to the Physical Layer.
</p>

<p>
Step 5: The receiver processes the frame using MAC addresses.
</p>

<h4>MAC Access Methods</h4>

<p>
Different networking technologies use different methods to control access to the medium.
</p>

<table class="notes-table">

<tr>
<th>Method</th>
<th>Used In</th>
<th>Purpose</th>
</tr>

<tr>
<td>CSMA/CD</td>
<td>Ethernet</td>
<td>Collision Detection</td>
</tr>

<tr>
<td>CSMA/CA</td>
<td>Wi-Fi</td>
<td>Collision Avoidance</td>
</tr>

<tr>
<td>Token Passing</td>
<td>Token Ring</td>
<td>Controlled Access</td>
</tr>

</table>

<h4>Advantages of MAC Sub Layer</h4>

<ul>
<li>Prevents unnecessary collisions.</li>
<li>Provides physical addressing.</li>
<li>Improves network efficiency.</li>
<li>Supports fair channel access.</li>
<li>Enhances communication reliability.</li>
<li>Enables organized frame transmission.</li>
</ul>

<h4>Disadvantages of MAC Sub Layer</h4>

<ul>
<li>Additional processing overhead.</li>
<li>Complex access control mechanisms in large networks.</li>
<li>Performance may decrease during heavy traffic.</li>
</ul>

<h4>Applications of MAC Sub Layer</h4>

<ul>
<li>Ethernet Networks</li>
<li>Wi-Fi Networks</li>
<li>LAN Communication</li>
<li>Wireless Communication Systems</li>
<li>Computer Networking Devices</li>
</ul>

<h4>Difference Between LLC and MAC Sub Layer</h4>

<table class="notes-table">

<tr>
<th>Basis</th>
<th>LLC Sub Layer</th>
<th>MAC Sub Layer</th>
</tr>

<tr>
<td>Full Form</td>
<td>Logical Link Control</td>
<td>Media Access Control</td>
</tr>

<tr>
<td>Main Function</td>
<td>Provides services to Network Layer</td>
<td>Controls medium access</td>
</tr>

<tr>
<td>Addressing</td>
<td>Logical Control</td>
<td>Physical Addressing</td>
</tr>

<tr>
<td>Focus</td>
<td>Error and Flow Control</td>
<td>Channel Access and MAC Addressing</td>
</tr>

<tr>
<td>Position</td>
<td>Upper Part of Data Link Layer</td>
<td>Lower Part of Data Link Layer</td>
</tr>

</table>

<h4>Real-Life Example</h4>

<p>
Imagine a classroom where many students want to ask questions.
If everyone speaks at the same time, confusion occurs.
</p>

<p>
The teacher controls who can speak and when. This prevents conflicts and ensures
smooth communication.
</p>

<p>
Similarly, the MAC Sub Layer controls which device can use the communication channel
at a particular time, preventing collisions and improving network efficiency.
</p>

<h4>Important Exam Points</h4>

<ul>
<li>MAC stands for Media Access Control.</li>
<li>MAC is a sublayer of the Data Link Layer.</li>
<li>It controls access to the transmission medium.</li>
<li>It provides physical addressing through MAC addresses.</li>
<li>A MAC address is generally 48 bits long.</li>
<li>MAC Sub Layer handles collisions and channel allocation.</li>
<li>CSMA/CD is used in Ethernet networks.</li>
<li>CSMA/CA is used in Wi-Fi networks.</li>
<li>The MAC Sub Layer works closely with the Physical Layer.</li>
</ul>

<h4>Short Interview Question</h4>

<p>
<b>Question:</b> What is the MAC Sub Layer?
</p>

<p>
<b>Answer:</b> The MAC (Media Access Control) Sub Layer is the lower sublayer of the Data Link Layer.
It controls access to the transmission medium, provides physical addressing through MAC addresses,
handles collisions, and ensures efficient communication among devices sharing the same network.
</p>

`;


let multipleAccessProtocolsContent = `

<h3>Multiple Access Protocols</h3>

<p>
In many computer networks, multiple devices share a common communication channel.
If two or more devices try to transmit data at the same time, collisions may occur,
resulting in data loss and reduced network performance.
</p>

<p>
To solve this problem, networks use <b>Multiple Access Protocols</b>. These protocols
define rules that determine how multiple users or devices can share the same communication
medium efficiently and fairly.
</p>

<p>
The main objective of Multiple Access Protocols is to maximize channel utilization,
reduce collisions, and ensure smooth communication among all users.
</p>

<h4>Need for Multiple Access Protocols</h4>

<ul>
<li>Allow multiple users to share a common channel.</li>
<li>Reduce data collisions.</li>
<li>Improve network efficiency.</li>
<li>Provide fair access to all devices.</li>
<li>Optimize bandwidth utilization.</li>
</ul>

<h4>Categories of Multiple Access Protocols</h4>

<p>
Multiple Access Protocols can be broadly classified into:
</p>

<ul>
<li>Random Access Protocols</li>
<li>Controlled Access Protocols</li>
<li>Channelization Protocols</li>
</ul>

<hr>

<h3>Random Access Protocols</h3>

<p>
In Random Access Protocols, any device can attempt to transmit data whenever it has data
to send. Since multiple devices may transmit simultaneously, collisions can occur.
Special techniques are used to detect or avoid collisions.
</p>

<hr>

<h4>ALOHA</h4>

<p>
ALOHA is one of the earliest random access protocols developed for computer networks.
It was introduced at the University of Hawaii for wireless communication.
</p>

<p>
In ALOHA, a device transmits data whenever it has data to send without checking whether
the channel is busy or free.
</p>

<p>
If a collision occurs, the device waits for a random period and retransmits the data.
</p>

<h4>Working of ALOHA</h4>

<p>
Step 1: Device sends data immediately.
</p>

<p>
Step 2: If acknowledgement is received, transmission is successful.
</p>

<p>
Step 3: If collision occurs, wait for a random time.
</p>

<p>
Step 4: Retransmit the frame.
</p>

<h4>Types of ALOHA</h4>

<h4>1. Pure ALOHA</h4>

<p>
In Pure ALOHA, a device can transmit data at any time whenever it has data to send.
</p>

<h5>Characteristics</h5>

<ul>
<li>No synchronization required.</li>
<li>Simple implementation.</li>
<li>High probability of collisions.</li>
</ul>

<h5>Efficiency</h5>

<p>
Maximum efficiency is approximately 18.4%.
</p>

<h4>2. Slotted ALOHA</h4>

<p>
In Slotted ALOHA, time is divided into fixed slots.
A device can transmit only at the beginning of a time slot.
</p>

<h5>Characteristics</h5>

<ul>
<li>Requires synchronization.</li>
<li>Reduces collisions.</li>
<li>Higher efficiency than Pure ALOHA.</li>
</ul>

<h5>Efficiency</h5>

<p>
Maximum efficiency is approximately 36.8%.
</p>

<h4>Difference Between Pure ALOHA and Slotted ALOHA</h4>

<table class="notes-table">

<tr>
<th>Basis</th>
<th>Pure ALOHA</th>
<th>Slotted ALOHA</th>
</tr>

<tr>
<td>Transmission Time</td>
<td>Any Time</td>
<td>Only at Slot Boundaries</td>
</tr>

<tr>
<td>Synchronization</td>
<td>Not Required</td>
<td>Required</td>
</tr>

<tr>
<td>Efficiency</td>
<td>18.4%</td>
<td>36.8%</td>
</tr>

<tr>
<td>Collision Rate</td>
<td>Higher</td>
<td>Lower</td>
</tr>

</table>

<hr>

<h4>CSMA (Carrier Sense Multiple Access)</h4>

<p>
CSMA stands for <b>Carrier Sense Multiple Access</b>.
</p>

<p>
Before transmitting data, a device first listens to the communication channel to determine
whether the channel is busy or idle.
</p>

<p>
If the channel is free, transmission begins. If the channel is busy, the device waits
until the channel becomes available.
</p>

<h4>Working of CSMA</h4>

<p>
Step 1: Listen to the channel.
</p>

<p>
Step 2: If the channel is idle, transmit data.
</p>

<p>
Step 3: If the channel is busy, wait and try again.
</p>

<h4>Advantages of CSMA</h4>

<ul>
<li>Reduces collisions.</li>
<li>Improves channel utilization.</li>
<li>More efficient than ALOHA.</li>
<li>Simple implementation.</li>
</ul>

<h4>Disadvantages of CSMA</h4>

<ul>
<li>Collisions can still occur.</li>
<li>Performance decreases under heavy traffic.</li>
</ul>

<hr>

<h4>Types of CSMA</h4>

<table class="notes-table">

<tr>
<th>Type</th>
<th>Description</th>
</tr>

<tr>
<td>1-Persistent CSMA</td>
<td>Transmits immediately when channel becomes free</td>
</tr>

<tr>
<td>Non-Persistent CSMA</td>
<td>Waits for a random time before retransmission</td>
</tr>

<tr>
<td>P-Persistent CSMA</td>
<td>Transmits with a specific probability</td>
</tr>

</table>

<hr>

<h4>CSMA/CD (Carrier Sense Multiple Access with Collision Detection)</h4>

<p>
CSMA/CD is an improved version of CSMA that can detect collisions while transmission
is in progress.
</p>

<p>
It is commonly used in traditional Ethernet networks.
</p>

<h4>Working of CSMA/CD</h4>

<p>
Step 1: Listen to the channel.
</p>

<p>
Step 2: If channel is free, begin transmission.
</p>

<p>
Step 3: Monitor the channel while transmitting.
</p>

<p>
Step 4: If a collision is detected, stop transmission immediately.
</p>

<p>
Step 5: Send a jam signal and wait for a random backoff period.
</p>

<p>
Step 6: Retransmit the frame.
</p>

<h4>Advantages of CSMA/CD</h4>

<ul>
<li>Efficient collision handling.</li>
<li>Better channel utilization.</li>
<li>Improved network performance.</li>
</ul>

<h4>Limitations of CSMA/CD</h4>

<ul>
<li>Not suitable for wireless networks.</li>
<li>Performance decreases with network congestion.</li>
<li>Modern switched Ethernet rarely experiences collisions.</li>
</ul>

<hr>

<h4>CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)</h4>

<p>
CSMA/CA is designed mainly for wireless networks where collision detection is difficult.
</p>

<p>
Instead of detecting collisions, it attempts to avoid them before transmission.
</p>

<p>
CSMA/CA is widely used in Wi-Fi networks.
</p>

<h4>Advantages of CSMA/CA</h4>

<ul>
<li>Reduces collisions in wireless communication.</li>
<li>Improves network performance.</li>
<li>Suitable for Wi-Fi environments.</li>
</ul>

<hr>

<h3>Controlled Access Protocols</h3>

<p>
In Controlled Access Protocols, devices transmit data according to predefined rules.
Only authorized devices are allowed to transmit at a given time.
</p>

<p>
Examples include Polling and Token Passing.
</p>

<h4>Token Passing</h4>

<p>
A special frame called a token circulates among devices.
Only the device holding the token can transmit data.
</p>

<p>
This method completely avoids collisions.
</p>

<hr>

<h3>Channelization Protocols</h3>

<p>
In Channelization Protocols, the available bandwidth is divided among users so that
multiple users can communicate simultaneously without collisions.
</p>

<p>
The most common channelization techniques are FDMA, TDMA, and CDMA.
</p>

<hr>

<h4>FDMA (Frequency Division Multiple Access)</h4>

<p>
FDMA divides the available frequency spectrum into multiple frequency bands.
Each user is assigned a separate frequency channel.
</p>

<h4>Working of FDMA</h4>

<p>
Each user transmits continuously on an allocated frequency band.
</p>

<h4>Advantages</h4>

<ul>
<li>Simple implementation.</li>
<li>No synchronization required.</li>
<li>Continuous transmission possible.</li>
</ul>

<h4>Disadvantages</h4>

<ul>
<li>Poor bandwidth utilization.</li>
<li>Unused frequencies may remain idle.</li>
</ul>

<h4>Example</h4>

<p>
Radio Broadcasting
</p>

<hr>

<h4>TDMA (Time Division Multiple Access)</h4>

<p>
TDMA divides communication time into multiple slots.
Each user is assigned a specific time slot for transmission.
</p>

<h4>Working of TDMA</h4>

<p>
Users transmit one after another according to their assigned time slots.
</p>

<h4>Advantages</h4>

<ul>
<li>Efficient bandwidth utilization.</li>
<li>No collision between users.</li>
<li>Supports multiple users.</li>
</ul>

<h4>Disadvantages</h4>

<ul>
<li>Requires synchronization.</li>
<li>Unused time slots may be wasted.</li>
</ul>

<h4>Example</h4>

<p>
Digital Cellular Systems
</p>

<hr>

<h4>CDMA (Code Division Multiple Access)</h4>

<p>
CDMA allows all users to share the same frequency band simultaneously.
Each user is assigned a unique code for communication.
</p>

<p>
The receiver uses the corresponding code to extract the desired signal.
</p>

<h4>Advantages</h4>

<ul>
<li>High capacity.</li>
<li>Better security.</li>
<li>Efficient spectrum utilization.</li>
<li>Supports many users simultaneously.</li>
</ul>

<h4>Disadvantages</h4>

<ul>
<li>Complex implementation.</li>
<li>Requires advanced signal processing.</li>
</ul>

<h4>Example</h4>

<p>
3G Mobile Networks
</p>

<hr>

<h4>Comparison of FDMA, TDMA, and CDMA</h4>

<table class="notes-table">

<tr>
<th>Feature</th>
<th>FDMA</th>
<th>TDMA</th>
<th>CDMA</th>
</tr>

<tr>
<td>Resource Used</td>
<td>Frequency</td>
<td>Time</td>
<td>Code</td>
</tr>

<tr>
<td>User Separation</td>
<td>Different Frequencies</td>
<td>Different Time Slots</td>
<td>Different Codes</td>
</tr>

<tr>
<td>Synchronization</td>
<td>Not Required</td>
<td>Required</td>
<td>Required</td>
</tr>

<tr>
<td>Complexity</td>
<td>Low</td>
<td>Medium</td>
<td>High</td>
</tr>

<tr>
<td>Capacity</td>
<td>Low</td>
<td>Medium</td>
<td>High</td>
</tr>

<tr>
<td>Example</td>
<td>Radio Broadcasting</td>
<td>Digital Cellular Systems</td>
<td>3G Networks</td>
</tr>

</table>

<hr>

<h3>IEEE Standards</h3>

<p>
IEEE (Institute of Electrical and Electronics Engineers) develops networking standards
to ensure compatibility and interoperability between networking devices manufactured by
different companies.
</p>

<h4>Important IEEE Standards</h4>

<table class="notes-table">

<tr>
<th>Standard</th>
<th>Technology</th>
</tr>

<tr>
<td>IEEE 802.3</td>
<td>Ethernet</td>
</tr>

<tr>
<td>IEEE 802.11</td>
<td>Wi-Fi</td>
</tr>

<tr>
<td>IEEE 802.15</td>
<td>Bluetooth and Personal Area Networks</td>
</tr>

<tr>
<td>IEEE 802.16</td>
<td>WiMAX</td>
</tr>

</table>

<hr>

<h4>Real-Life Example</h4>

<p>
Imagine a classroom where many students want to answer a question.
</p>

<p>
In ALOHA, students speak whenever they want.
</p>

<p>
In CSMA, students first check whether someone else is speaking.
</p>

<p>
In Token Passing, only the student holding a microphone can speak.
</p>

<p>
In FDMA, each student is assigned a separate room.
</p>

<p>
In TDMA, students speak one after another according to a timetable.
</p>

<p>
In CDMA, all students speak simultaneously but in different languages that the teacher can identify.
</p>

<h4>Important Exam Points</h4>

<ul>
<li>Multiple Access Protocols allow multiple users to share a communication channel.</li>
<li>ALOHA is the earliest random access protocol.</li>
<li>Slotted ALOHA is more efficient than Pure ALOHA.</li>
<li>CSMA listens before transmitting.</li>
<li>CSMA/CD detects collisions and is used in Ethernet.</li>
<li>CSMA/CA avoids collisions and is used in Wi-Fi.</li>
<li>FDMA uses frequency division.</li>
<li>TDMA uses time division.</li>
<li>CDMA uses unique codes.</li>
<li>IEEE 802.3 represents Ethernet.</li>
<li>IEEE 802.11 represents Wi-Fi.</li>
</ul>

<h4>Short Interview Question</h4>

<p>
<b>Question:</b> What are Multiple Access Protocols?
</p>

<p>
<b>Answer:</b> Multiple Access Protocols are communication rules that allow multiple devices
to share the same communication channel efficiently while minimizing collisions and ensuring
fair access to network resources.
</p>

`;


let frameRelayContent = `

<h3>Frame Relay</h3>

<p>
Frame Relay is a high-speed packet-switching technology used in Wide Area Networks (WANs)
for transmitting data between geographically separated locations. It was developed to
provide efficient and cost-effective communication over digital telecommunication networks.
</p>

<p>
Frame Relay operates at the Data Link Layer of the OSI Reference Model and transmits
data in the form of frames. It is designed for high-speed digital communication and
provides faster data transfer than many older WAN technologies.
</p>

<p>
Frame Relay became very popular for connecting branch offices, corporate networks,
banks, educational institutions, and large organizations before technologies such as
MPLS and modern broadband WAN services became widespread.
</p>

<h4>Introduction to Frame Relay</h4>

<p>
In traditional communication systems, a dedicated communication path was often required
between two locations. This approach was expensive and inefficient because bandwidth
could remain unused for long periods.
</p>

<p>
Frame Relay solved this problem by using packet switching techniques. Instead of reserving
an entire communication path, data is divided into frames and transmitted through a shared
network infrastructure.
</p>

<p>
This approach reduces communication costs and improves bandwidth utilization.
</p>

<h4>Position of Frame Relay in OSI Model</h4>

<p>
Application Layer
</p>

<p>
Presentation Layer
</p>

<p>
Session Layer
</p>

<p>
Transport Layer
</p>

<p>
Network Layer
</p>

<p>
<b>Data Link Layer (Frame Relay)</b>
</p>

<p>
Physical Layer
</p>

<p>
Frame Relay mainly provides services at the Data Link Layer while using the Physical Layer
for actual data transmission.
</p>

<h4>Working of Frame Relay</h4>

<p>
Frame Relay transmits data using variable-length frames.
</p>

<p>
When a device wants to send data:
</p>

<ul>
<li>Data is divided into frames.</li>
<li>A virtual circuit is established between sender and receiver.</li>
<li>Frames are transmitted through the Frame Relay network.</li>
<li>The destination receives and reconstructs the original data.</li>
</ul>

<p>
Unlike older technologies, Frame Relay performs minimal error checking, which increases
transmission speed.
</p>

<h4>Key Components of Frame Relay</h4>

<h4>1. Frame</h4>

<p>
The basic unit of transmission in Frame Relay is called a frame.
Each frame contains user data along with addressing and control information.
</p>

<h4>2. Virtual Circuit (VC)</h4>

<p>
A Virtual Circuit is a logical communication path established between two devices.
Multiple virtual circuits can share the same physical communication link.
</p>

<h4>3. DLCI (Data Link Connection Identifier)</h4>

<p>
DLCI is a unique number used to identify a virtual circuit within a Frame Relay network.
</p>

<p>
It helps switches determine the correct path for frame forwarding.
</p>

<h4>Frame Relay Frame Structure</h4>

<p>
A Frame Relay frame contains several fields used for addressing and communication control.
</p>

<table class="notes-table">

<tr>
<th>Field</th>
<th>Purpose</th>
</tr>

<tr>
<td>Flag</td>
<td>Indicates beginning and end of frame</td>
</tr>

<tr>
<td>Address</td>
<td>Contains DLCI and control information</td>
</tr>

<tr>
<td>Data</td>
<td>Actual user information</td>
</tr>

<tr>
<td>FCS</td>
<td>Frame Check Sequence for error detection</td>
</tr>

<tr>
<td>Flag</td>
<td>Marks frame end</td>
</tr>

</table>

<h4>Virtual Circuits in Frame Relay</h4>

<p>
Frame Relay uses virtual circuits to establish logical communication paths.
There are two types of virtual circuits:
</p>

<h4>1. Permanent Virtual Circuit (PVC)</h4>

<p>
A Permanent Virtual Circuit is permanently established by the service provider.
</p>

<p>
The connection remains available even when no data is being transmitted.
</p>

<h5>Advantages</h5>

<ul>
<li>Always available.</li>
<li>No setup delay.</li>
<li>Suitable for frequent communication.</li>
</ul>

<h4>2. Switched Virtual Circuit (SVC)</h4>

<p>
A Switched Virtual Circuit is established only when communication is required.
</p>

<p>
The connection is terminated after data transmission is completed.
</p>

<h5>Advantages</h5>

<ul>
<li>Efficient resource utilization.</li>
<li>Suitable for occasional communication.</li>
</ul>

<h4>Features of Frame Relay</h4>

<ul>
<li>High-Speed Communication.</li>
<li>Efficient Bandwidth Usage.</li>
<li>Supports Multiple Connections.</li>
<li>Low Transmission Delay.</li>
<li>Uses Virtual Circuits.</li>
<li>Supports Burst Data Traffic.</li>
<li>Cost-Effective WAN Solution.</li>
<li>Minimal Error Checking for Higher Speed.</li>
</ul>

<h4>Advantages of Frame Relay</h4>

<ul>
<li>Cost Effective.</li>
<li>Fast Data Transfer.</li>
<li>Efficient utilization of bandwidth.</li>
<li>Supports multiple virtual circuits.</li>
<li>Reduced communication costs.</li>
<li>Scalable WAN solution.</li>
<li>Suitable for enterprise networking.</li>
</ul>

<h4>Disadvantages of Frame Relay</h4>

<ul>
<li>Limited error recovery capabilities.</li>
<li>Depends on reliable digital networks.</li>
<li>Largely replaced by newer technologies.</li>
<li>Performance may decrease under heavy congestion.</li>
</ul>

<h4>Applications of Frame Relay</h4>

<ul>
<li>WAN Networks.</li>
<li>Corporate Communication.</li>
<li>Interconnecting Branch Offices.</li>
<li>Banking Networks.</li>
<li>Educational Institution Networks.</li>
<li>Business Data Communication.</li>
<li>Remote Office Connectivity.</li>
</ul>

<h4>Frame Relay vs Leased Line</h4>

<table class="notes-table">

<tr>
<th>Basis</th>
<th>Frame Relay</th>
<th>Leased Line</th>
</tr>

<tr>
<td>Connection Type</td>
<td>Shared Network</td>
<td>Dedicated Connection</td>
</tr>

<tr>
<td>Cost</td>
<td>Lower</td>
<td>Higher</td>
</tr>

<tr>
<td>Bandwidth Utilization</td>
<td>Efficient</td>
<td>May Remain Unused</td>
</tr>

<tr>
<td>Scalability</td>
<td>High</td>
<td>Limited</td>
</tr>

</table>

<h4>Difference Between Frame Relay and X.25</h4>

<table class="notes-table">

<tr>
<th>Basis</th>
<th>Frame Relay</th>
<th>X.25</th>
</tr>

<tr>
<td>Speed</td>
<td>High</td>
<td>Lower</td>
</tr>

<tr>
<td>Error Checking</td>
<td>Minimal</td>
<td>Extensive</td>
</tr>

<tr>
<td>Performance</td>
<td>Better</td>
<td>Slower</td>
</tr>

<tr>
<td>Network Type</td>
<td>Modern Digital Networks</td>
<td>Older Networks</td>
</tr>

</table>

<h4>Real-Life Example</h4>

<p>
Imagine a courier company transporting parcels between multiple cities.
</p>

<p>
Instead of reserving an entire truck for one customer's parcel, parcels from different
customers are transported together through shared routes.
</p>

<p>
Similarly, Frame Relay allows multiple users to share the same communication infrastructure
through virtual circuits, making communication more efficient and cost-effective.
</p>

<h4>Why Frame Relay Became Popular?</h4>

<ul>
<li>Lower communication costs.</li>
<li>Higher transmission speed.</li>
<li>Better bandwidth utilization.</li>
<li>Easy connectivity between branch offices.</li>
<li>Supports multiple logical connections.</li>
</ul>

<h4>Important Exam Points</h4>

<ul>
<li>Frame Relay is a packet-switching WAN technology.</li>
<li>It operates mainly at the Data Link Layer.</li>
<li>Data is transmitted in the form of frames.</li>
<li>DLCI identifies virtual circuits.</li>
<li>Frame Relay uses PVC and SVC virtual circuits.</li>
<li>It provides efficient bandwidth utilization.</li>
<li>It offers high-speed communication with low delay.</li>
<li>It became popular for connecting branch offices and corporate networks.</li>
<li>Frame Relay performs minimal error checking for higher performance.</li>
</ul>

<h4>Short Interview Question</h4>

<p>
<b>Question:</b> What is Frame Relay?
</p>

<p>
<b>Answer:</b> Frame Relay is a high-speed packet-switching technology used in WANs.
It transmits data in the form of frames, uses virtual circuits for communication,
and provides efficient bandwidth utilization with low transmission delay.
</p>

`;


let atmContent = `

<h3>ATM (Asynchronous Transfer Mode)</h3>

<p>
ATM stands for <b>Asynchronous Transfer Mode</b>. It is a high-speed networking and
switching technology designed to transmit voice, video, and data through a single
integrated network.
</p>

<p>
ATM was developed to support multimedia communication and broadband networking.
It provides fast, reliable, and efficient transmission while maintaining Quality of Service (QoS)
for different types of traffic.
</p>

<p>
Unlike traditional packet-switching technologies that use variable-sized packets,
ATM transfers information using small fixed-size units called <b>cells</b>.
This fixed cell size allows ATM networks to achieve predictable performance and low delay.
</p>

<hr>

<h4>Introduction to ATM</h4>

<p>
In modern communication systems, different types of information such as voice calls,
video streams, and computer data often need to travel through the same network.
</p>

<p>
Each type of traffic has different requirements.
For example:
</p>

<ul>
<li>Voice communication requires low delay.</li>
<li>Video communication requires high bandwidth.</li>
<li>Data communication requires reliability.</li>
</ul>

<p>
ATM was designed to support all these requirements simultaneously by providing
a unified high-speed communication infrastructure.
</p>

<h4>Why ATM Was Developed?</h4>

<ul>
<li>To support integrated voice, video, and data communication.</li>
<li>To provide high-speed data transmission.</li>
<li>To reduce network congestion.</li>
<li>To provide guaranteed Quality of Service.</li>
<li>To support broadband communication services.</li>
</ul>

<hr>

<h4>Working of ATM</h4>

<p>
ATM converts information into small fixed-size cells before transmission.
</p>

<p>
Each cell follows the same structure regardless of whether it carries voice,
video, or computer data.
</p>

<p>
The ATM switches forward cells through virtual circuits until they reach
their destination.
</p>

<p>
Because every cell has the same size, switching and processing can be performed
very quickly.
</p>

<h4>ATM Communication Process</h4>

<p>
Step 1: Data is received from higher layers.
</p>

<p>
Step 2: Information is divided into ATM cells.
</p>

<p>
Step 3: Cells are transmitted through ATM switches.
</p>

<p>
Step 4: Cells reach the destination.
</p>

<p>
Step 5: Original information is reconstructed.
</p>

<hr>

<h4>ATM Cell Structure</h4>

<p>
The basic transmission unit in ATM is called a <b>Cell</b>.
</p>

<p>
Each ATM cell has a fixed size of <b>53 bytes</b>.
</p>

<table class="notes-table">

<tr>
<th>Field</th>
<th>Size</th>
<th>Purpose</th>
</tr>

<tr>
<td>Header</td>
<td>5 Bytes</td>
<td>Routing and control information</td>
</tr>

<tr>
<td>Payload</td>
<td>48 Bytes</td>
<td>Actual user data</td>
</tr>

<tr>
<td>Total Cell Size</td>
<td>53 Bytes</td>
<td>Complete ATM Cell</td>
</tr>

</table>

<h4>ATM Cell Format</h4>

<p>
5 Bytes Header + 48 Bytes Payload = 53 Bytes
</p>

<p>
The fixed-size cell is one of the most important characteristics of ATM technology.
</p>

<hr>

<h4>ATM Header Fields</h4>

<p>
The ATM header contains control information required for routing and switching cells.
</p>

<table class="notes-table">

<tr>
<th>Field</th>
<th>Purpose</th>
</tr>

<tr>
<td>VPI</td>
<td>Virtual Path Identifier</td>
</tr>

<tr>
<td>VCI</td>
<td>Virtual Channel Identifier</td>
</tr>

<tr>
<td>PTI</td>
<td>Payload Type Indicator</td>
</tr>

<tr>
<td>CLP</td>
<td>Cell Loss Priority</td>
</tr>

<tr>
<td>HEC</td>
<td>Header Error Control</td>
</tr>

</table>

<h4>Virtual Paths and Virtual Channels</h4>

<p>
ATM communication is based on virtual connections.
</p>

<p>
Two important concepts are:
</p>

<ul>
<li>Virtual Path (VP)</li>
<li>Virtual Channel (VC)</li>
</ul>

<p>
A Virtual Path may contain multiple Virtual Channels.
This structure simplifies network management and routing.
</p>

<hr>

<h4>Features of ATM</h4>

<ul>
<li>High-Speed Communication.</li>
<li>Fixed Cell Size.</li>
<li>Supports Voice, Video, and Data.</li>
<li>Quality of Service (QoS).</li>
<li>Connection-Oriented Communication.</li>
<li>Low Transmission Delay.</li>
<li>Efficient Traffic Management.</li>
<li>Broadband Network Support.</li>
</ul>

<hr>

<h4>Quality of Service (QoS) in ATM</h4>

<p>
One of the biggest advantages of ATM is its ability to provide Quality of Service (QoS).
</p>

<p>
QoS ensures that different applications receive the bandwidth and performance they require.
</p>

<p>
For example:
</p>

<ul>
<li>Voice calls receive low-delay transmission.</li>
<li>Video streams receive sufficient bandwidth.</li>
<li>Data applications receive reliable delivery.</li>
</ul>

<hr>

<h4>ATM Layers</h4>

<p>
ATM architecture consists of three main layers.
</p>

<table class="notes-table">

<tr>
<th>Layer</th>
<th>Function</th>
</tr>

<tr>
<td>ATM Adaptation Layer (AAL)</td>
<td>Adapts user data for ATM transmission</td>
</tr>

<tr>
<td>ATM Layer</td>
<td>Cell creation, switching, and routing</td>
</tr>

<tr>
<td>Physical Layer</td>
<td>Actual transmission of ATM cells</td>
</tr>

</table>

<h4>ATM Adaptation Layer (AAL)</h4>

<p>
The ATM Adaptation Layer converts various types of traffic such as voice, video,
and computer data into ATM cells.
</p>

<p>
Different AAL types are used for different applications.
</p>

<hr>

<h4>Advantages of ATM</h4>

<ul>
<li>Fast Data Transmission.</li>
<li>Low Delay and Low Jitter.</li>
<li>Efficient Traffic Management.</li>
<li>Reliable Communication.</li>
<li>Supports Multimedia Applications.</li>
<li>Provides Quality of Service.</li>
<li>Suitable for Broadband Networks.</li>
<li>Handles Different Types of Traffic Efficiently.</li>
</ul>

<h4>Disadvantages of ATM</h4>

<ul>
<li>Complex implementation.</li>
<li>Higher installation cost.</li>
<li>Small cell size increases overhead.</li>
<li>More expensive than many modern alternatives.</li>
</ul>

<hr>

<h4>Applications of ATM</h4>

<ul>
<li>Broadband Networks.</li>
<li>Telecommunication Networks.</li>
<li>Video Conferencing.</li>
<li>Multimedia Communication.</li>
<li>Internet Backbone Networks.</li>
<li>Corporate Communication Systems.</li>
<li>Integrated Services Networks.</li>
</ul>

<hr>

<h4>Difference Between ATM and Frame Relay</h4>

<table class="notes-table">

<tr>
<th>Basis</th>
<th>Frame Relay</th>
<th>ATM</th>
</tr>

<tr>
<td>Data Unit</td>
<td>Variable Length Frames</td>
<td>Fixed Length Cells</td>
</tr>

<tr>
<td>Cell or Frame Size</td>
<td>Variable</td>
<td>53 Bytes Fixed</td>
</tr>

<tr>
<td>Speed</td>
<td>Lower</td>
<td>Higher</td>
</tr>

<tr>
<td>Cost</td>
<td>Less Expensive</td>
<td>More Expensive</td>
</tr>

<tr>
<td>QoS Support</td>
<td>Limited</td>
<td>Excellent</td>
</tr>

<tr>
<td>Traffic Support</td>
<td>Mainly Data</td>
<td>Voice, Video, and Data</td>
</tr>

<tr>
<td>Network Usage</td>
<td>WAN Networks</td>
<td>High-Speed Broadband Networks</td>
</tr>

</table>

<hr>

<h4>ATM vs Traditional Packet Switching</h4>

<table class="notes-table">

<tr>
<th>Feature</th>
<th>Traditional Packet Switching</th>
<th>ATM</th>
</tr>

<tr>
<td>Packet Size</td>
<td>Variable</td>
<td>Fixed</td>
</tr>

<tr>
<td>Delay</td>
<td>Higher</td>
<td>Lower</td>
</tr>

<tr>
<td>QoS</td>
<td>Limited</td>
<td>Strong Support</td>
</tr>

<tr>
<td>Multimedia Support</td>
<td>Moderate</td>
<td>Excellent</td>
</tr>

</table>

<hr>

<h4>Real-Life Example</h4>

<p>
Imagine a highway where every vehicle has exactly the same size.
Traffic management becomes easier because road authorities can predict traffic flow
and allocate lanes efficiently.
</p>

<p>
Similarly, ATM uses fixed-size cells of 53 bytes, making switching and traffic
management faster and more predictable.
</p>

<hr>

<h4>Why ATM Became Popular?</h4>

<ul>
<li>Supports integrated voice, video, and data communication.</li>
<li>Provides guaranteed Quality of Service.</li>
<li>Offers high-speed transmission.</li>
<li>Provides low delay and low jitter.</li>
<li>Suitable for multimedia applications.</li>
</ul>

<h4>Important Exam Points</h4>

<ul>
<li>ATM stands for Asynchronous Transfer Mode.</li>
<li>ATM uses fixed-size cells instead of variable-size packets.</li>
<li>Each ATM cell consists of 53 bytes.</li>
<li>Header size is 5 bytes.</li>
<li>Payload size is 48 bytes.</li>
<li>ATM supports voice, video, and data communication.</li>
<li>ATM provides Quality of Service (QoS).</li>
<li>ATM is connection-oriented.</li>
<li>ATM uses Virtual Paths (VP) and Virtual Channels (VC).</li>
<li>ATM is faster than Frame Relay.</li>
</ul>

<h4>Short Interview Question</h4>

<p>
<b>Question:</b> What is ATM and why does it use fixed-size cells?
</p>

<p>
<b>Answer:</b> ATM (Asynchronous Transfer Mode) is a high-speed networking technology used
for transmitting voice, video, and data over a single network. It uses fixed-size cells
of 53 bytes to provide fast switching, predictable performance, low delay, and efficient
traffic management.
</p>

`;



let lanWanIntroContent = `

<h3>Introduction to LAN and WAN Networks</h3>

<p>
Today we are going to study one of the most important topics in Computer Networks:
<b>LAN (Local Area Network)</b> and <b>WAN (Wide Area Network)</b>.
Before understanding LAN and WAN, we must first understand what a computer network is and why it is required in our daily life.
</p>

<p>
In today's digital world, computers, smartphones, servers, printers, and other devices need to communicate with each other to exchange information and share resources. This communication is made possible through computer networks.
</p>

<p>
Whether we are sending emails, browsing the Internet, attending online classes, making video calls, withdrawing money from an ATM, or using cloud storage, computer networks play a vital role in all these activities.
</p>

<hr>

<h4>What is a Computer Network?</h4>

<p>
A Computer Network is a collection of two or more interconnected computers and devices that can communicate with each other and share information, resources, and services.
</p>

<p>
The devices in a network are connected through wired or wireless communication channels.
</p>

<p>
The main purpose of networking is to enable communication and resource sharing among multiple users and devices.
</p>

<h4>Definition</h4>

<p>
A computer network is a system in which multiple computers and devices are connected together to exchange data and share resources.
</p>

<h4>Examples of Computer Networks</h4>

<ul>
<li>School Computer Lab Network</li>
<li>Office Network</li>
<li>College Campus Network</li>
<li>Banking Network</li>
<li>Mobile Communication Network</li>
<li>The Internet</li>
</ul>

<hr>

<h4>Why Do We Need Computer Networks?</h4>

<p>
Imagine a situation where every computer works independently and cannot communicate with other computers.
</p>

<p>
In such a situation:
</p>

<ul>
<li>Sharing files would be difficult.</li>
<li>Each computer would require its own printer.</li>
<li>Internet connections could not be shared.</li>
<li>Communication between users would become slow.</li>
<li>Managing data would be difficult.</li>
</ul>

<p>
Computer networks solve these problems by allowing devices to communicate and share resources efficiently.
</p>

<h4>Advantages of Computer Networks</h4>

<table class="notes-table">

<tr>
<th>Advantage</th>
<th>Description</th>
</tr>

<tr>
<td>Resource Sharing</td>
<td>Allows sharing of printers, scanners, and storage devices</td>
</tr>

<tr>
<td>Data Sharing</td>
<td>Users can exchange files and information easily</td>
</tr>

<tr>
<td>Communication</td>
<td>Supports email, chat, video conferencing, and messaging</td>
</tr>

<tr>
<td>Internet Sharing</td>
<td>Multiple users can share a single Internet connection</td>
</tr>

<tr>
<td>Centralized Management</td>
<td>Data and resources can be managed from one location</td>
</tr>

<tr>
<td>Cost Reduction</td>
<td>Reduces hardware and maintenance costs</td>
</tr>

</table>

<hr>

<h4>Classification of Networks Based on Geographical Area</h4>

<p>
Networks can be classified according to the geographical area they cover.
</p>

<table class="notes-table">

<tr>
<th>Network Type</th>
<th>Coverage Area</th>
</tr>

<tr>
<td>PAN</td>
<td>Personal Area Network</td>
</tr>

<tr>
<td>LAN</td>
<td>Local Area Network</td>
</tr>

<tr>
<td>MAN</td>
<td>Metropolitan Area Network</td>
</tr>

<tr>
<td>WAN</td>
<td>Wide Area Network</td>
</tr>

</table>

<p>
In this chapter, we will mainly focus on LAN and WAN.
</p>

<hr>

<h3>What is LAN?</h3>

<p>
LAN stands for <b>Local Area Network</b>.
</p>

<p>
A LAN is a computer network that connects computers and devices within a small geographical area such as a room, office, building, school, college, laboratory, or campus.
</p>

<p>
LAN provides high-speed communication and is usually owned, controlled, and maintained by a single organization.
</p>

<h4>Definition of LAN</h4>

<p>
A Local Area Network (LAN) is a network that connects computers and devices within a limited geographical area for communication and resource sharing.
</p>

<h4>Characteristics of LAN</h4>

<ul>
<li>Covers a small geographical area.</li>
<li>Provides high-speed data transmission.</li>
<li>Owned by a single organization.</li>
<li>Easy to install and maintain.</li>
<li>Offers low communication cost.</li>
<li>Provides reliable communication.</li>
</ul>

<h4>Examples of LAN</h4>

<ul>
<li>Computer Laboratory Network</li>
<li>School Network</li>
<li>Office Network</li>
<li>Library Network</li>
<li>Hospital Network</li>
</ul>

<h4>Real-Life Example of LAN</h4>

<p>
Consider a computer laboratory containing 30 computers connected through a switch.
All computers can share files, printers, and Internet access.
</p>

<p>
This network is an example of a LAN.
</p>

<h4>Advantages of LAN</h4>

<ul>
<li>High-speed communication.</li>
<li>Easy resource sharing.</li>
<li>Low installation cost.</li>
<li>Centralized data management.</li>
<li>Easy maintenance.</li>
</ul>

<h4>Disadvantages of LAN</h4>

<ul>
<li>Limited geographical coverage.</li>
<li>Network failure may affect all connected users.</li>
<li>Requires network administration.</li>
</ul>

<hr>

<h3>What is WAN?</h3>

<p>
WAN stands for <b>Wide Area Network</b>.
</p>

<p>
A WAN is a network that connects computers, LANs, or other networks over large geographical distances such as cities, states, countries, or continents.
</p>

<p>
WAN enables communication between users located in different parts of the world.
</p>

<h4>Definition of WAN</h4>

<p>
A Wide Area Network (WAN) is a network that covers a large geographical area and connects multiple LANs using communication links provided by service providers.
</p>

<h4>Characteristics of WAN</h4>

<ul>
<li>Covers large geographical areas.</li>
<li>Connects multiple LANs.</li>
<li>Uses public and private communication networks.</li>
<li>More expensive than LAN.</li>
<li>Supports long-distance communication.</li>
<li>Provides global connectivity.</li>
</ul>

<h4>Examples of WAN</h4>

<ul>
<li>The Internet</li>
<li>Banking Networks</li>
<li>Railway Reservation Systems</li>
<li>Telecommunication Networks</li>
<li>Corporate Branch Networks</li>
</ul>

<h4>Real-Life Example of WAN</h4>

<p>
Suppose a company has offices in Lucknow, Delhi, Mumbai, and Bangalore.
</p>

<p>
Each office may have its own LAN, but connecting all offices together requires a WAN.
</p>

<p>
Employees can then communicate and share information regardless of their location.
</p>

<h4>Advantages of WAN</h4>

<ul>
<li>Global communication.</li>
<li>Resource sharing across locations.</li>
<li>Centralized management.</li>
<li>Supports business expansion.</li>
<li>Facilitates remote access.</li>
</ul>

<h4>Disadvantages of WAN</h4>

<ul>
<li>Higher installation cost.</li>
<li>More complex management.</li>
<li>Lower speed compared to LAN.</li>
<li>Higher security risks.</li>
</ul>

<hr>

<h3>Difference Between LAN and WAN</h3>

<table class="notes-table">

<tr>
<th>Basis</th>
<th>LAN</th>
<th>WAN</th>
</tr>

<tr>
<td>Full Form</td>
<td>Local Area Network</td>
<td>Wide Area Network</td>
</tr>

<tr>
<td>Coverage Area</td>
<td>Small Area</td>
<td>Large Area</td>
</tr>

<tr>
<td>Speed</td>
<td>High</td>
<td>Lower than LAN</td>
</tr>

<tr>
<td>Ownership</td>
<td>Single Organization</td>
<td>Multiple Organizations or Service Providers</td>
</tr>

<tr>
<td>Cost</td>
<td>Low</td>
<td>High</td>
</tr>

<tr>
<td>Maintenance</td>
<td>Easy</td>
<td>Complex</td>
</tr>

<tr>
<td>Example</td>
<td>School Computer Lab</td>
<td>Internet</td>
</tr>

</table>

<hr>

<h3>LAN and WAN in Daily Life</h3>

<p>
We use LAN and WAN networks every day without realizing it.
</p>

<ul>
<li>School computer labs use LAN.</li>
<li>Office buildings use LAN.</li>
<li>Bank branches are connected through WAN.</li>
<li>Online banking uses WAN.</li>
<li>Social media platforms use WAN.</li>
<li>The Internet is the largest WAN in the world.</li>
</ul>

<hr>

<h3>Classroom Example</h3>

<p>
Imagine a college with five computer laboratories.
</p>

<p>
The computers inside each laboratory are connected through a LAN.
</p>

<p>
If the college wants to connect its campus with another campus located in another city,
a WAN is required.
</p>

<p>
Thus, LAN is used for local communication while WAN is used for long-distance communication.
</p>

<hr>

<h3>Summary</h3>

<p>
A computer network is a collection of interconnected devices that can communicate and share resources.
</p>

<p>
LAN (Local Area Network) connects devices within a small geographical area such as a room,
building, school, or office and provides high-speed communication.
</p>

<p>
WAN (Wide Area Network) connects devices and networks across large geographical areas such as
cities, countries, and continents.
</p>

<p>
Both LAN and WAN are essential for modern communication, resource sharing, and Internet connectivity.
</p>

<h4>Important Exam Points</h4>

<ul>
<li>LAN stands for Local Area Network.</li>
<li>WAN stands for Wide Area Network.</li>
<li>LAN covers a small geographical area.</li>
<li>WAN covers a large geographical area.</li>
<li>LAN provides higher speed than WAN.</li>
<li>The Internet is the largest WAN.</li>
<li>LAN is usually owned by a single organization.</li>
<li>WAN connects multiple LANs.</li>
</ul>

`;



let lanConceptContent = `

<h3>LAN (Local Area Network)</h3>

<p>
Today we will study one of the most important concepts in Computer Networks called
<b>LAN (Local Area Network)</b>.
LAN is the most commonly used type of network in homes, schools, colleges, offices,
banks, hospitals, and many other organizations.
</p>

<p>
Whenever multiple computers or devices need to communicate with each other within a limited area,
a Local Area Network is used.
</p>

<p>
Before the development of networking, computers worked independently and sharing files,
printers, and information was difficult. LAN solved this problem by allowing devices
to communicate and share resources efficiently.
</p>

<hr>

<h4>What is LAN?</h4>

<p>
LAN stands for <b>Local Area Network</b>.
</p>

<p>
It is a type of computer network that connects computers and other devices within a
small geographical area such as a room, office, school, college, laboratory,
building, or campus.
</p>

<p>
The primary purpose of a LAN is to enable communication and resource sharing among
connected devices.
</p>

<h4>Definition of LAN</h4>

<p>
A Local Area Network (LAN) is a computer network that connects computers and devices
within a limited geographical area for communication, data sharing, and resource sharing.
</p>

<hr>

<h4>Why Do We Need LAN?</h4>

<p>
Imagine a computer laboratory containing 50 computers.
</p>

<p>
If every computer works independently, sharing files, printers, and Internet access
would become difficult and expensive.
</p>

<p>
By connecting all computers through a LAN:
</p>

<ul>
<li>Files can be shared easily.</li>
<li>Printers can be shared.</li>
<li>Internet access can be shared.</li>
<li>Communication becomes faster.</li>
<li>Resources are utilized efficiently.</li>
</ul>

<p>
Therefore, LAN provides an efficient way to connect devices within a limited area.
</p>

<hr>

<h4>Characteristics of LAN</h4>

<table class="notes-table">

<tr>
<th>Characteristic</th>
<th>Description</th>
</tr>

<tr>
<td>Coverage Area</td>
<td>Small geographical area</td>
</tr>

<tr>
<td>Speed</td>
<td>High-speed communication</td>
</tr>

<tr>
<td>Ownership</td>
<td>Usually owned by a single organization</td>
</tr>

<tr>
<td>Cost</td>
<td>Relatively low installation cost</td>
</tr>

<tr>
<td>Reliability</td>
<td>Provides reliable communication</td>
</tr>

<tr>
<td>Maintenance</td>
<td>Easy to manage and maintain</td>
</tr>

</table>

<hr>

<h4>Main Features of LAN</h4>

<ul>
<li>Covers a small geographical area.</li>
<li>Provides high-speed data transmission.</li>
<li>Supports resource sharing.</li>
<li>Easy installation and maintenance.</li>
<li>Offers reliable communication.</li>
<li>Allows centralized management.</li>
<li>Supports wired and wireless communication.</li>
</ul>

<hr>

<h4>Components of a LAN</h4>

<p>
A LAN consists of several hardware and software components that work together
to provide communication and resource sharing.
</p>

<h4>1. Computers and Workstations</h4>

<p>
Computers are the primary devices connected to the network.
Users perform various tasks and exchange information through these systems.
</p>

<h4>2. Network Interface Card (NIC)</h4>

<p>
A Network Interface Card provides the physical connection between a computer and the network.
</p>

<p>
Every device connected to a LAN requires a NIC.
</p>

<h4>3. Switch</h4>

<p>
A switch is the most commonly used networking device in modern LANs.
</p>

<p>
It receives data from one device and forwards it to the correct destination device.
</p>

<h4>4. Hub</h4>

<p>
A hub connects multiple devices and broadcasts data to all connected computers.
</p>

<p>
Hubs are less efficient than switches and are rarely used today.
</p>

<h4>5. Network Cables</h4>

<p>
Network cables are used to physically connect devices.
</p>

<p>
Commonly used cables include:
</p>

<ul>
<li>UTP (Unshielded Twisted Pair)</li>
<li>STP (Shielded Twisted Pair)</li>
<li>Optical Fiber Cable</li>
</ul>

<h4>6. Wireless Access Point (WAP)</h4>

<p>
A Wireless Access Point allows devices to connect to the LAN using Wi-Fi technology.
</p>

<h4>7. Shared Devices</h4>

<p>
Shared devices include:
</p>

<ul>
<li>Printers</li>
<li>Scanners</li>
<li>Storage Devices</li>
<li>Servers</li>
</ul>

<hr>

<h4>How LAN Works?</h4>

<p>
When a computer wants to send data to another computer:
</p>

<ul>
<li>The sender creates a data packet.</li>
<li>The packet is transmitted through the network.</li>
<li>The switch identifies the destination.</li>
<li>The packet is delivered to the correct device.</li>
<li>The receiver processes the information.</li>
</ul>

<p>
This process happens very quickly, often within milliseconds.
</p>

<hr>

<h4>Advantages of LAN</h4>

<table class="notes-table">

<tr>
<th>Advantage</th>
<th>Description</th>
</tr>

<tr>
<td>Fast Communication</td>
<td>Provides high-speed data transfer</td>
</tr>

<tr>
<td>Resource Sharing</td>
<td>Allows sharing of printers and other devices</td>
</tr>

<tr>
<td>File Sharing</td>
<td>Easy exchange of files and information</td>
</tr>

<tr>
<td>Cost Effective</td>
<td>Reduces hardware costs</td>
</tr>

<tr>
<td>Centralized Management</td>
<td>Easy administration of resources</td>
</tr>

<tr>
<td>Easy Backup</td>
<td>Data can be backed up centrally</td>
</tr>

</table>

<hr>

<h4>Disadvantages of LAN</h4>

<table class="notes-table">

<tr>
<th>Disadvantage</th>
<th>Description</th>
</tr>

<tr>
<td>Limited Coverage</td>
<td>Suitable only for small areas</td>
</tr>

<tr>
<td>Security Risks</td>
<td>Unauthorized access may occur</td>
</tr>

<tr>
<td>Central Device Failure</td>
<td>Network may stop if switch fails</td>
</tr>

<tr>
<td>Maintenance Required</td>
<td>Needs proper administration</td>
</tr>

</table>

<hr>

<h4>Applications of LAN</h4>

<p>
LANs are widely used in many organizations and institutions.
</p>

<ul>
<li>Schools and Colleges.</li>
<li>Computer Laboratories.</li>
<li>Office Networks.</li>
<li>Hospitals.</li>
<li>Banks.</li>
<li>Libraries.</li>
<li>Government Offices.</li>
<li>Home Networks.</li>
</ul>

<hr>

<h4>Real-Life Examples of LAN</h4>

<table class="notes-table">

<tr>
<th>Location</th>
<th>LAN Example</th>
</tr>

<tr>
<td>School</td>
<td>Computer Lab Network</td>
</tr>

<tr>
<td>Office</td>
<td>Employee Computer Network</td>
</tr>

<tr>
<td>Home</td>
<td>Wi-Fi Network</td>
</tr>

<tr>
<td>Hospital</td>
<td>Patient Management Network</td>
</tr>

<tr>
<td>Bank</td>
<td>Branch Office Network</td>
</tr>

</table>

<hr>

<h4>Classroom Explanation</h4>

<p>
Suppose a computer laboratory contains 30 computers connected through a switch.
</p>

<p>
Students can access shared files, printers, educational software, and Internet services.
</p>

<p>
Since all computers are connected within the same building and communicate through
a common network, this setup is called a <b>Local Area Network (LAN)</b>.
</p>

<hr>

<h4>LAN vs Standalone Computer</h4>

<table class="notes-table">

<tr>
<th>Feature</th>
<th>Standalone Computer</th>
<th>LAN</th>
</tr>

<tr>
<td>Communication</td>
<td>Not Possible</td>
<td>Possible</td>
</tr>

<tr>
<td>Resource Sharing</td>
<td>Not Available</td>
<td>Available</td>
</tr>

<tr>
<td>File Sharing</td>
<td>Difficult</td>
<td>Easy</td>
</tr>

<tr>
<td>Internet Sharing</td>
<td>Limited</td>
<td>Available</td>
</tr>

<tr>
<td>Management</td>
<td>Individual</td>
<td>Centralized</td>
</tr>

</table>

<hr>

<h4>Importance of LAN in Modern Organizations</h4>

<ul>
<li>Improves communication.</li>
<li>Enhances productivity.</li>
<li>Supports collaborative work.</li>
<li>Reduces operational costs.</li>
<li>Provides centralized data management.</li>
<li>Allows efficient resource utilization.</li>
</ul>

<hr>

<h4>Summary</h4>

<p>
LAN (Local Area Network) is a computer network that connects computers and devices
within a limited geographical area such as a room, office, school, college, building,
or campus.
</p>

<p>
It provides high-speed communication, resource sharing, and centralized management.
</p>

<p>
LAN is one of the most commonly used networking technologies and forms the foundation
of modern organizational communication systems.
</p>

<h4>Important Exam Points</h4>

<ul>
<li>LAN stands for Local Area Network.</li>
<li>LAN covers a small geographical area.</li>
<li>LAN provides high-speed communication.</li>
<li>LAN is usually owned by a single organization.</li>
<li>Switch is the most commonly used LAN device.</li>
<li>LAN supports resource sharing.</li>
<li>Computer labs and office networks are examples of LAN.</li>
<li>LAN is easy to install and maintain.</li>
</ul>

<h4>Short Interview Question</h4>

<p>
<b>Question:</b> What is LAN?
</p>

<p>
<b>Answer:</b> LAN (Local Area Network) is a computer network that connects computers and
other devices within a small geographical area such as a room, office, school, or building
to enable communication and resource sharing.
</p>

`;

let wanConceptContent = `

<h3>WAN (Wide Area Network)</h3>

<p>
WAN stands for Wide Area Network. It is a type of computer network that connects computers, LANs, and other networks over large geographical areas such as cities, states, countries, or continents.
</p>

<p>
Unlike LAN, which covers a small area, WAN can connect networks located hundreds or thousands of kilometers apart. WAN uses communication technologies such as leased lines, fiber optic cables, microwave links, and satellite communication to transmit data over long distances.
</p>

<h4>Definition of WAN</h4>

<p>
A WAN is a computer network that connects computers and networks over a large geographical area.
</p>

<h4>Characteristics of WAN</h4>

<p>
1. Covers a very large geographical area.</p>

<p>
2. Connects multiple LANs together.</p>

<p>
3. Uses public and private communication networks.</p>

<p>
4. Data transmission speed is generally lower than LAN.</p>

<p>
5. More complex to manage and maintain.</p>

<h4>Advantages of WAN</h4>

<p>
1. Enables communication over long distances.</p>

<p>
2. Connects offices located in different cities or countries.</p>

<p>
3. Allows centralized data access.</p>

<p>
4. Supports global business operations.</p>

<p>
5. Facilitates remote working and online services.</p>

<h4>Disadvantages of WAN</h4>

<p>
1. Higher installation cost.</p>

<p>
2. More complex management.</p>

<p>
3. Lower speed compared to LAN.</p>

<p>
4. Security concerns due to wide connectivity.</p>

<h4>Examples of WAN</h4>

<p>
1. The Internet.</p>

<p>
2. Banking networks connecting branches across the country.</p>

<p>
3. Railway reservation systems.</p>

<p>
4. Multinational company networks.</p>

<h4>Classroom Explanation</h4>

<p>
Imagine a bank has branches in Delhi, Mumbai, Lucknow, and Kolkata. All these branches need to access customer information from a central database. To connect these distant locations, the bank uses a WAN.
</p>

<h4>Summary</h4>

<p>
WAN (Wide Area Network) is a network that connects computers and networks across large geographical areas such as cities, countries, or continents. The Internet is the largest example of a WAN.
</p>

`;


let lanTopologiesContent = `

<h3>LAN Topologies</h3>

<p>
Today we will study <b>LAN Topologies</b>, one of the most important topics in Computer Networks.
Whenever we design a network, one of the first decisions is determining how computers,
servers, printers, and other devices will be connected together.
</p>

<p>
The arrangement of devices and communication links in a network is known as a Network Topology.
The choice of topology affects network performance, reliability, scalability, maintenance,
and overall cost.
</p>

<hr>

<h4>What is Network Topology?</h4>

<p>
The term <b>Topology</b> refers to the physical or logical arrangement of computers,
network devices, and communication links in a network.
</p>

<p>
It describes:
</p>

<ul>
<li>How devices are connected.</li>
<li>How data flows through the network.</li>
<li>How communication takes place between devices.</li>
</ul>

<h4>Definition</h4>

<p>
Network Topology is the physical or logical layout of a network that determines how
devices are connected and how data is transmitted between them.
</p>

<hr>

<h4>Why is Network Topology Important?</h4>

<p>
The selection of a suitable topology is important because it directly affects network efficiency.
</p>

<table class="notes-table">

<tr>
<th>Benefit</th>
<th>Description</th>
</tr>

<tr>
<td>Performance</td>
<td>Determines data transmission efficiency</td>
</tr>

<tr>
<td>Reliability</td>
<td>Affects fault tolerance and network stability</td>
</tr>

<tr>
<td>Maintenance</td>
<td>Impacts troubleshooting and repair</td>
</tr>

<tr>
<td>Scalability</td>
<td>Determines ease of adding new devices</td>
</tr>

<tr>
<td>Cost</td>
<td>Affects installation and maintenance expenses</td>
</tr>

</table>

<hr>

<h4>Types of LAN Topologies</h4>

<p>
The most commonly used LAN topologies are:
</p>

<ul>
<li>Bus Topology</li>
<li>Star Topology</li>
<li>Ring Topology</li>
<li>Mesh Topology</li>
<li>Tree Topology</li>
</ul>

<hr>

<h3>1. Bus Topology</h3>

<p>
Bus Topology is one of the simplest network topologies.
In this topology, all computers and devices are connected to a single communication cable
called the <b>Backbone Cable</b>.
</p>

<p>
Whenever a device sends data, the data travels through the backbone cable and reaches all devices.
Only the intended destination accepts the data while other devices ignore it.
</p>

<h4>Structure of Bus Topology</h4>

<p>
Computer → Backbone Cable ← Computer ← Computer ← Computer
</p>

<h4>Working of Bus Topology</h4>

<ul>
<li>All devices share a common communication cable.</li>
<li>Data travels along the backbone cable.</li>
<li>Every device receives the transmitted signal.</li>
<li>The destination device processes the data.</li>
</ul>

<h4>Advantages of Bus Topology</h4>

<ul>
<li>Simple and inexpensive.</li>
<li>Requires less cable.</li>
<li>Easy to install.</li>
<li>Suitable for small networks.</li>
</ul>

<h4>Disadvantages of Bus Topology</h4>

<ul>
<li>Failure of backbone cable affects the entire network.</li>
<li>Difficult troubleshooting.</li>
<li>Performance decreases as devices increase.</li>
<li>Limited network size.</li>
</ul>

<h4>Applications</h4>

<ul>
<li>Small Office Networks.</li>
<li>Temporary Networks.</li>
<li>Laboratory Testing Networks.</li>
</ul>

<hr>

<h3>2. Star Topology</h3>

<p>
Star Topology is the most commonly used topology in modern LANs.
</p>

<p>
In this topology, all computers and devices are connected to a central device such as
a Switch or Hub.
</p>

<p>
All communication passes through the central device.
</p>

<h4>Structure of Star Topology</h4>

<p>
All Devices → Switch/Hub → Destination Device
</p>

<h4>Working of Star Topology</h4>

<ul>
<li>Each device has a dedicated connection to the switch.</li>
<li>The switch receives data from the sender.</li>
<li>The switch forwards data to the destination device.</li>
</ul>

<h4>Advantages of Star Topology</h4>

<ul>
<li>Easy to install and manage.</li>
<li>Easy fault detection.</li>
<li>Failure of one device does not affect others.</li>
<li>Good performance.</li>
<li>Easy network expansion.</li>
</ul>

<h4>Disadvantages of Star Topology</h4>

<ul>
<li>Requires more cable.</li>
<li>Higher installation cost.</li>
<li>Failure of switch or hub affects the entire network.</li>
</ul>

<h4>Applications</h4>

<ul>
<li>Office Networks.</li>
<li>School Networks.</li>
<li>College Computer Labs.</li>
<li>Home Networks.</li>
</ul>

<hr>

<h3>3. Ring Topology</h3>

<p>
In Ring Topology, each device is connected to two neighboring devices,
forming a circular communication path.
</p>

<p>
Data travels around the ring until it reaches its destination.
</p>

<h4>Structure of Ring Topology</h4>

<p>
Computer → Computer → Computer → Computer → Back to First Computer
</p>

<h4>Working of Ring Topology</h4>

<ul>
<li>Devices form a closed loop.</li>
<li>Data travels in one direction or both directions.</li>
<li>Each device forwards data to the next device.</li>
</ul>

<h4>Advantages of Ring Topology</h4>

<ul>
<li>Organized data transmission.</li>
<li>Minimal data collisions.</li>
<li>Predictable performance.</li>
</ul>

<h4>Disadvantages of Ring Topology</h4>

<ul>
<li>Difficult maintenance.</li>
<li>Failure of one node may affect the entire network.</li>
<li>Adding or removing devices is difficult.</li>
</ul>

<h4>Applications</h4>

<ul>
<li>Token Ring Networks.</li>
<li>Industrial Communication Systems.</li>
</ul>

<hr>

<h3>4. Mesh Topology</h3>

<p>
In Mesh Topology, every computer is connected directly to every other computer.
</p>

<p>
Multiple communication paths are available between devices.
</p>

<p>
This topology provides the highest level of reliability and fault tolerance.
</p>

<h4>Working of Mesh Topology</h4>

<ul>
<li>Each device has multiple connections.</li>
<li>If one path fails, another path can be used.</li>
<li>Communication continues even during failures.</li>
</ul>

<h4>Advantages of Mesh Topology</h4>

<ul>
<li>High reliability.</li>
<li>Fault tolerant.</li>
<li>Multiple communication paths.</li>
<li>Excellent security.</li>
<li>No single point of failure.</li>
</ul>

<h4>Disadvantages of Mesh Topology</h4>

<ul>
<li>Very expensive.</li>
<li>Complex installation.</li>
<li>Requires large amounts of cabling.</li>
<li>Difficult maintenance.</li>
</ul>

<h4>Applications</h4>

<ul>
<li>Military Networks.</li>
<li>Data Centers.</li>
<li>Critical Communication Systems.</li>
</ul>

<hr>

<h3>5. Tree Topology</h3>

<p>
Tree Topology combines the features of Bus Topology and Star Topology.
</p>

<p>
Devices are arranged in a hierarchical structure similar to a tree.
</p>

<p>
There is a root node at the top, and branches extend downward connecting multiple devices.
</p>

<h4>Working of Tree Topology</h4>

<ul>
<li>Uses a hierarchical structure.</li>
<li>Groups of star networks are connected together.</li>
<li>Data flows from parent nodes to child nodes.</li>
</ul>

<h4>Advantages of Tree Topology</h4>

<ul>
<li>Easy network expansion.</li>
<li>Suitable for large organizations.</li>
<li>Easy management of network segments.</li>
<li>Supports hierarchical communication.</li>
</ul>

<h4>Disadvantages of Tree Topology</h4>

<ul>
<li>Complex installation.</li>
<li>Higher cost.</li>
<li>Failure of backbone may affect large portions of the network.</li>
</ul>

<h4>Applications</h4>

<ul>
<li>University Campuses.</li>
<li>Large Corporate Networks.</li>
<li>Government Organizations.</li>
</ul>

<hr>

<h3>Comparison of LAN Topologies</h3>

<table class="notes-table">

<tr>
<th>Topology</th>
<th>Structure</th>
<th>Cost</th>
<th>Reliability</th>
<th>Complexity</th>
</tr>

<tr>
<td>Bus</td>
<td>Single Backbone Cable</td>
<td>Low</td>
<td>Low</td>
<td>Simple</td>
</tr>

<tr>
<td>Star</td>
<td>Central Switch/Hub</td>
<td>Medium</td>
<td>High</td>
<td>Easy</td>
</tr>

<tr>
<td>Ring</td>
<td>Circular Connection</td>
<td>Medium</td>
<td>Medium</td>
<td>Moderate</td>
</tr>

<tr>
<td>Mesh</td>
<td>Every Device Connected</td>
<td>Very High</td>
<td>Very High</td>
<td>Complex</td>
</tr>

<tr>
<td>Tree</td>
<td>Hierarchical Structure</td>
<td>High</td>
<td>High</td>
<td>Moderate</td>
</tr>

</table>

<hr>

<h3>Real-Life Examples</h3>

<table class="notes-table">

<tr>
<th>Topology</th>
<th>Real-Life Example</th>
</tr>

<tr>
<td>Bus</td>
<td>A single road connecting multiple houses</td>
</tr>

<tr>
<td>Star</td>
<td>An airport connected to multiple cities</td>
</tr>

<tr>
<td>Ring</td>
<td>A circular running track</td>
</tr>

<tr>
<td>Mesh</td>
<td>A network of interconnected roads between cities</td>
</tr>

<tr>
<td>Tree</td>
<td>Family tree structure</td>
</tr>

</table>

<hr>

<h3>Which Topology is Most Common Today?</h3>

<p>
Among all LAN topologies, <b>Star Topology</b> is the most widely used in modern computer networks.
</p>

<p>
This is because it provides:
</p>

<ul>
<li>Easy management.</li>
<li>High reliability.</li>
<li>Easy fault detection.</li>
<li>Simple network expansion.</li>
<li>Better performance.</li>
</ul>

<hr>

<h3>Summary</h3>

<p>
Network Topology refers to the arrangement of devices and communication links in a network.
</p>

<p>
The major LAN topologies are Bus, Star, Ring, Mesh, and Tree.
</p>

<p>
Each topology has its own advantages and disadvantages depending on the network requirements.
</p>

<p>
Star Topology is the most commonly used topology in modern LAN environments because of its reliability and ease of management.
</p>

<h4>Important Exam Points</h4>

<ul>
<li>Topology refers to the arrangement of devices in a network.</li>
<li>Bus Topology uses a backbone cable.</li>
<li>Star Topology uses a central switch or hub.</li>
<li>Ring Topology forms a circular path.</li>
<li>Mesh Topology provides multiple communication paths.</li>
<li>Tree Topology follows a hierarchical structure.</li>
<li>Mesh Topology offers the highest reliability.</li>
<li>Star Topology is the most widely used LAN topology.</li>
</ul>

<h4>Short Interview Question</h4>

<p>
<b>Question:</b> What is Network Topology?
</p>

<p>
<b>Answer:</b> Network Topology is the physical or logical arrangement of devices and communication links in a network that determines how devices are connected and how data is transmitted between them.
</p>

`;



let lanProtocolsContent = `

<h3>LAN Protocols</h3>

<p>
Today we will study an important topic of Computer Networks called <b>LAN Protocols</b>.
Before computers can communicate with each other, they must follow a common set of rules.
These rules are known as protocols.
</p>

<p>
Just as people need a common language to communicate, computers also require protocols
to exchange information correctly and efficiently.
</p>

<p>
LAN protocols define how devices communicate, how data is transmitted, how errors are handled,
and how network resources are shared within a Local Area Network (LAN).
</p>

<hr>

<h4>What is a Protocol?</h4>

<p>
A Protocol is a standard set of rules and procedures that governs communication between
network devices.
</p>

<p>
Protocols specify:
</p>

<ul>
<li>How data is transmitted.</li>
<li>How data is received.</li>
<li>How devices identify each other.</li>
<li>How errors are detected and corrected.</li>
<li>How communication is established and terminated.</li>
</ul>

<h4>Definition</h4>

<p>
A protocol is a set of rules that enables devices in a network to communicate and exchange
information accurately and efficiently.
</p>

<hr>

<h4>Why Are Protocols Important?</h4>

<p>
Without protocols, computers manufactured by different companies would not be able
to understand each other.
</p>

<p>
Protocols ensure smooth and reliable communication throughout the network.
</p>

<h4>Importance of Protocols</h4>

<table class="notes-table">

<tr>
<th>Purpose</th>
<th>Description</th>
</tr>

<tr>
<td>Reliable Communication</td>
<td>Ensures accurate data transmission</td>
</tr>

<tr>
<td>Error Control</td>
<td>Detects and handles transmission errors</td>
</tr>

<tr>
<td>Data Organization</td>
<td>Defines data format and structure</td>
</tr>

<tr>
<td>Resource Sharing</td>
<td>Allows devices to share resources efficiently</td>
</tr>

<tr>
<td>Network Management</td>
<td>Controls communication between devices</td>
</tr>

</table>

<hr>

<h4>What are LAN Protocols?</h4>

<p>
LAN Protocols are communication standards used within Local Area Networks.
</p>

<p>
They define how devices connected within a limited geographical area communicate,
exchange data, and access shared resources.
</p>

<p>
The most common LAN protocols are:
</p>

<ul>
<li>Ethernet</li>
<li>Token Ring</li>
<li>FDDI (Fiber Distributed Data Interface)</li>
</ul>

<hr>

<h3>1. Ethernet</h3>

<p>
Ethernet is the most widely used LAN protocol in modern computer networks.
</p>

<p>
It was developed by Xerox and later standardized by IEEE as IEEE 802.3.
</p>

<p>
Ethernet uses switches, network interface cards, and network cables to connect devices
within a Local Area Network.
</p>

<p>
Today, almost every office, school, college, and home network uses Ethernet technology.
</p>

<h4>How Ethernet Works</h4>

<p>
When a device wants to send data, it creates an Ethernet frame and sends it through
the network.
</p>

<p>
The destination device receives the frame and processes the information.
</p>

<p>
Modern Ethernet networks use switches to efficiently forward frames to the correct device.
</p>

<h4>Features of Ethernet</h4>

<ul>
<li>High-Speed Communication.</li>
<li>Reliable Data Transfer.</li>
<li>Low Cost Implementation.</li>
<li>Easy Installation and Maintenance.</li>
<li>Supports Large Networks.</li>
<li>Widely Accepted Standard.</li>
</ul>

<h4>Advantages of Ethernet</h4>

<ul>
<li>Simple technology.</li>
<li>Affordable networking solution.</li>
<li>Easy troubleshooting.</li>
<li>High performance.</li>
<li>Scalable network design.</li>
</ul>

<h4>Disadvantages of Ethernet</h4>

<ul>
<li>Performance may decrease during heavy traffic.</li>
<li>Requires physical cabling for wired communication.</li>
</ul>

<h4>Applications of Ethernet</h4>

<ul>
<li>Office Networks.</li>
<li>School Networks.</li>
<li>College Computer Labs.</li>
<li>Industrial Networks.</li>
<li>Home Networks.</li>
</ul>

<hr>

<h3>2. Token Ring</h3>

<p>
Token Ring is a LAN protocol developed by IBM.
</p>

<p>
In this protocol, computers are connected in a logical ring structure.
A special control packet called a <b>Token</b> continuously circulates around the network.
</p>

<p>
A device can transmit data only when it possesses the token.
After transmission, the token is passed to the next device.
</p>

<h4>How Token Ring Works</h4>

<p>
Step 1: A token circulates around the ring.
</p>

<p>
Step 2: A device waits for the token.
</p>

<p>
Step 3: When the token arrives, the device transmits data.
</p>

<p>
Step 4: The token is released and passed to the next device.
</p>

<h4>Features of Token Ring</h4>

<ul>
<li>Uses Token Passing Mechanism.</li>
<li>No Data Collisions.</li>
<li>Predictable Network Performance.</li>
<li>Controlled Access to Network.</li>
</ul>

<h4>Advantages of Token Ring</h4>

<ul>
<li>Collision-free communication.</li>
<li>Fair access for all devices.</li>
<li>Efficient under heavy traffic.</li>
</ul>

<h4>Disadvantages of Token Ring</h4>

<ul>
<li>More expensive than Ethernet.</li>
<li>Complex implementation.</li>
<li>Lower popularity.</li>
<li>Difficult maintenance.</li>
</ul>

<h4>Applications of Token Ring</h4>

<ul>
<li>Older IBM Networks.</li>
<li>Industrial Communication Systems.</li>
<li>Controlled Access Environments.</li>
</ul>

<hr>

<h3>3. FDDI (Fiber Distributed Data Interface)</h3>

<p>
FDDI stands for <b>Fiber Distributed Data Interface</b>.
</p>

<p>
It is a high-speed LAN protocol that uses optical fiber cables for communication.
</p>

<p>
FDDI was designed for networks requiring high reliability, long-distance communication,
and fault tolerance.
</p>

<p>
FDDI uses a dual-ring architecture that allows communication to continue even if one ring fails.
</p>

<h4>How FDDI Works</h4>

<p>
FDDI uses two rings:
</p>

<ul>
<li>Primary Ring</li>
<li>Secondary Ring</li>
</ul>

<p>
The primary ring carries normal network traffic.
The secondary ring acts as a backup in case of failure.
</p>

<h4>Features of FDDI</h4>

<ul>
<li>Uses Optical Fiber Cable.</li>
<li>High-Speed Communication.</li>
<li>Dual-Ring Architecture.</li>
<li>Fault Tolerance.</li>
<li>Long-Distance Communication.</li>
<li>High Reliability.</li>
</ul>

<h4>Advantages of FDDI</h4>

<ul>
<li>Very high speed.</li>
<li>Excellent reliability.</li>
<li>Long-distance support.</li>
<li>Backup communication path available.</li>
</ul>

<h4>Disadvantages of FDDI</h4>

<ul>
<li>High installation cost.</li>
<li>Requires optical fiber infrastructure.</li>
<li>Complex maintenance.</li>
</ul>

<h4>Applications of FDDI</h4>

<ul>
<li>Campus Networks.</li>
<li>Enterprise Networks.</li>
<li>Backbone Networks.</li>
<li>Telecommunication Systems.</li>
</ul>

<hr>

<h3>Comparison of LAN Protocols</h3>

<table class="notes-table">

<tr>
<th>Feature</th>
<th>Ethernet</th>
<th>Token Ring</th>
<th>FDDI</th>
</tr>

<tr>
<td>Standard</td>
<td>IEEE 802.3</td>
<td>IBM Technology</td>
<td>ANSI Standard</td>
</tr>

<tr>
<td>Transmission Medium</td>
<td>Copper/Fiber</td>
<td>Copper Cable</td>
<td>Optical Fiber</td>
</tr>

<tr>
<td>Access Method</td>
<td>CSMA/CD</td>
<td>Token Passing</td>
<td>Token Passing</td>
</tr>

<tr>
<td>Speed</td>
<td>High</td>
<td>Moderate</td>
<td>Very High</td>
</tr>

<tr>
<td>Cost</td>
<td>Low</td>
<td>Medium</td>
<td>High</td>
</tr>

<tr>
<td>Popularity</td>
<td>Very High</td>
<td>Low</td>
<td>Limited</td>
</tr>

<tr>
<td>Reliability</td>
<td>High</td>
<td>High</td>
<td>Very High</td>
</tr>

</table>

<hr>

<h3>IEEE Standards Related to LAN Protocols</h3>

<table class="notes-table">

<tr>
<th>IEEE Standard</th>
<th>Technology</th>
</tr>

<tr>
<td>IEEE 802.3</td>
<td>Ethernet</td>
</tr>

<tr>
<td>IEEE 802.5</td>
<td>Token Ring</td>
</tr>

<tr>
<td>ANSI FDDI</td>
<td>Fiber Distributed Data Interface</td>
</tr>

</table>

<hr>

<h3>Real-Life Example</h3>

<p>
Imagine a classroom where students want to ask questions.
</p>

<p>
In Ethernet, students raise their hands and speak when the opportunity is available.
</p>

<p>
In Token Ring, a microphone is passed around the classroom, and only the student holding
the microphone can speak.
</p>

<p>
In FDDI, there are two microphones. One is used for normal communication and the second
acts as a backup if the first microphone stops working.
</p>

<hr>

<h3>Summary</h3>

<p>
LAN Protocols are communication standards used within Local Area Networks.
</p>

<p>
Ethernet is the most popular LAN protocol because it is simple, reliable, and cost-effective.
</p>

<p>
Token Ring uses token passing to eliminate collisions and provide controlled access.
</p>

<p>
FDDI uses optical fiber and dual-ring architecture to provide high-speed and highly reliable communication.
</p>

<h4>Important Exam Points</h4>

<ul>
<li>A protocol is a set of rules for communication.</li>
<li>LAN protocols define communication within a Local Area Network.</li>
<li>Ethernet is the most widely used LAN protocol.</li>
<li>Ethernet follows IEEE 802.3 standard.</li>
<li>Token Ring was developed by IBM.</li>
<li>Token Ring uses token passing.</li>
<li>FDDI stands for Fiber Distributed Data Interface.</li>
<li>FDDI uses optical fiber cables.</li>
<li>FDDI uses a dual-ring structure.</li>
<li>Ethernet is popular because it is reliable and cost-effective.</li>
</ul>

<h4>Short Interview Question</h4>

<p>
<b>Question:</b> What are LAN Protocols?
</p>

<p>
<b>Answer:</b> LAN Protocols are communication rules used in Local Area Networks to control
data transmission, resource sharing, and communication between devices. Common LAN protocols
include Ethernet, Token Ring, and FDDI.
</p>

`;


let wirelessLanContent = `

<h3>Wireless LAN (WLAN)</h3>

<p>
Wireless LAN, commonly known as WLAN, is a type of Local Area Network that allows computers and other devices to communicate without using physical cables. Instead of wires, WLAN uses radio waves to transmit and receive data between devices. Today, Wireless LAN technology is widely used in homes, schools, colleges, offices, airports, hotels, and public places because it provides flexibility and mobility to users.
</p>

<p>
In a traditional wired LAN, computers are connected using network cables. However, in a Wireless LAN, devices communicate through wireless signals using technologies such as Wi-Fi. This eliminates the need for extensive cabling and makes network installation easier and more convenient.
</p>

<h4>Definition of Wireless LAN</h4>

<p>
A Wireless LAN (WLAN) is a Local Area Network that uses wireless communication technologies such as radio waves instead of physical cables to connect computers and devices within a limited geographical area.
</p>

<h4>Need for Wireless LAN</h4>

<p>
As the number of mobile devices increased, connecting every device using cables became difficult. Wireless LAN was developed to provide users with the freedom to move while remaining connected to the network.
</p>

<p>
Wireless LAN is needed because:</p>

<p>
1. It eliminates the need for network cables.</p>

<p>
2. It provides mobility to users.</p>

<p>
3. It allows easy expansion of networks.</p>

<p>
4. It reduces installation time and cost.</p>

<p>
5. It supports smartphones, tablets, and laptops.</p>

<h4>How Wireless LAN Works</h4>

<p>
In a Wireless LAN, devices communicate through a Wireless Access Point (AP). The access point receives and transmits wireless signals to connected devices. These signals travel through the air using radio frequencies.
</p>

<p>
When a user connects a laptop or smartphone to Wi-Fi, the device communicates with the access point, which then forwards the data to the destination device or the Internet.
</p>

<h4>Main Components of WLAN</h4>

<h4>1. Wireless Access Point (AP)</h4>

<p>
The Access Point is the central device that allows wireless devices to connect to the network.
</p>

<h4>2. Wireless Network Interface Card (WNIC)</h4>

<p>
A Wireless NIC enables a computer or device to communicate with a wireless network.
</p>

<h4>3. Router</h4>

<p>
The router connects the WLAN to the Internet and manages data traffic.
</p>

<h4>4. Wireless Devices</h4>

<p>
Devices such as laptops, smartphones, tablets, and smart TVs can connect to a WLAN.
</p>

<h4>Advantages of Wireless LAN</h4>

<p>
1. No physical cables are required.</p>

<p>
2. Easy installation and setup.</p>

<p>
3. Users can move freely while connected.</p>

<p>
4. Easy to add new devices to the network.</p>

<p>
5. Cost-effective for large areas.</p>

<p>
6. Supports modern mobile devices.</p>

<h4>Disadvantages of Wireless LAN</h4>

<p>
1. Lower security compared to wired networks.</p>

<p>
2. Signal interference may occur.</p>

<p>
3. Network speed may decrease with distance.</p>

<p>
4. Coverage area is limited.</p>

<p>
5. Performance can be affected by obstacles such as walls.</p>

<h4>Applications of Wireless LAN</h4>

<p>
1. Home Wi-Fi Networks.</p>

<p>
2. School and College Campuses.</p>

<p>
3. Corporate Offices.</p>

<p>
4. Hospitals.</p>

<p>
5. Airports and Railway Stations.</p>

<p>
6. Hotels and Shopping Malls.</p>

<h4>Real Life Example</h4>

<p>
When you connect your smartphone or laptop to the Wi-Fi network in your home, college, or office, you are using a Wireless LAN. The Wi-Fi router acts as an access point and provides wireless connectivity to all connected devices.
</p>

<h4>Difference Between Wired LAN and Wireless LAN</h4>

<p>
Wired LAN uses cables for communication, whereas Wireless LAN uses radio waves.</p>

<p>
Wired LAN generally provides higher speed and security, whereas Wireless LAN provides greater mobility and flexibility.</p>

<p>
Wired LAN installation is more complex, whereas Wireless LAN installation is easier.</p>

<h4>Summary</h4>

<p>
Wireless LAN is a modern networking technology that allows devices to communicate without cables. It uses radio waves for communication and provides flexibility, mobility, and ease of installation. Wi-Fi is the most common example of a Wireless LAN.
</p>

<p>
Wireless LAN (WLAN) is a Local Area Network that uses radio waves instead of cables for communication. It provides mobility, flexibility, and easy network installation. Wi-Fi is the most common example of WLAN.
</p>

`;

let vlanContent = `

<h3>Virtual LAN (VLAN)</h3>

<p>
A Virtual Local Area Network (VLAN) is a logical grouping of devices within a network, regardless of their physical location. VLAN technology allows network administrators to divide a large physical network into multiple smaller logical networks. This improves security, network performance, and management.
</p>

<p>
In a traditional LAN, all devices connected to the same switch belong to the same broadcast domain. As the network grows, excessive traffic and security issues may arise. VLAN solves these problems by logically separating devices into different groups.
</p>

<h4>Definition of VLAN</h4>

<p>
A VLAN is a logical partition of a network that groups devices together as if they were on the same physical LAN, even when they are physically located in different places.
</p>

<h4>Why VLAN is Needed</h4>

<p>
In large organizations, different departments such as Accounts, Human Resources, Administration, and Sales often use the same physical network. Allowing all users to communicate freely may create security risks and unnecessary network traffic.
</p>

<p>
VLAN is needed because:</p>

<p>
1. It improves network security.</p>

<p>
2. It reduces unnecessary broadcast traffic.</p>

<p>
3. It improves network performance.</p>

<p>
4. It simplifies network management.</p>

<p>
5. It allows logical grouping of users.</p>

<h4>Working of VLAN</h4>

<p>
A managed switch is configured to create different VLANs. Each VLAN acts as a separate network even though all devices may be connected to the same physical switch.
</p>

<p>
Devices within the same VLAN can communicate directly with each other. Communication between different VLANs requires a router or Layer 3 switch.
</p>

<h4>Example of VLAN</h4>

<p>
Suppose a college has three departments:</p>

<p>
1. Administration Department.</p>

<p>
2. Accounts Department.</p>

<p>
3. Computer Science Department.</p>

<p>
Even if all computers are connected to the same switch, VLANs can be created so that each department has its own logical network. This prevents unauthorized access and improves network efficiency.
</p>

<h4>Types of VLAN</h4>

<h4>1. Default VLAN</h4>

<p>
The VLAN automatically assigned to switch ports by default.
</p>

<h4>2. Data VLAN</h4>

<p>
Used for carrying normal user-generated data traffic.
</p>

<h4>3. Voice VLAN</h4>

<p>
Used for transmitting voice communication traffic.
</p>

<h4>4. Management VLAN</h4>

<p>
Used for managing network devices such as switches and routers.
</p>

<h4>Advantages of VLAN</h4>

<p>
1. Improved network security.</p>

<p>
2. Better network performance.</p>

<p>
3. Reduced broadcast traffic.</p>

<p>
4. Easier administration and management.</p>

<p>
5. Flexible network design.</p>

<p>
6. Efficient utilization of network resources.</p>

<h4>Disadvantages of VLAN</h4>

<p>
1. Configuration can be complex.</p>

<p>
2. Requires managed switches.</p>

<p>
3. Additional administrative effort is needed.</p>

<p>
4. Incorrect configuration may create communication problems.</p>

<h4>Real Life Example</h4>

<p>
In a university campus, computers of students, teachers, and administrative staff may be connected to the same switch. By creating separate VLANs, each group can communicate securely within its own network while remaining isolated from others.
</p>

<h4>Difference Between LAN and VLAN</h4>

<p>
LAN is a physical network, whereas VLAN is a logical network.</p>

<p>
LAN groups devices based on physical connections, whereas VLAN groups devices based on logical configuration.</p>

<p>
LAN may have more broadcast traffic, whereas VLAN reduces broadcast traffic.</p>

<p>
VLAN provides better security and management compared to a traditional LAN.</p>

<h4>Classroom Explanation</h4>

<p>
Imagine a school building where students of Class 10, Class 11, and Class 12 study in different classrooms. Although they are in the same building, they are separated into different groups. Similarly, VLAN divides one physical network into multiple logical groups for better organization and security.
</p>

<h4>Summary</h4>

<p>
A VLAN is a logical subdivision of a network that improves security, performance, and network management. It allows devices to be grouped logically rather than physically and is widely used in modern organizations.
</p>

<p>
A Virtual LAN (VLAN) is a logical grouping of devices within a network. It improves security, reduces broadcast traffic, and enhances network performance by dividing a large network into smaller logical segments.
</p>

`;

let ethernetContent = `

<h3>Ethernet</h3>

<p>
Ethernet is the most widely used LAN technology in the world. It is a standard networking technology used for connecting computers, servers, printers, and other devices within a Local Area Network (LAN). Ethernet defines how devices communicate with each other and how data is transmitted over a network.
</p>

<p>
Ethernet was developed by Xerox Corporation in the 1970s and later standardized by IEEE as IEEE 802.3. Today, Ethernet is the backbone of most office, school, college, and enterprise networks because it is reliable, fast, and cost-effective.
</p>

<h4>Definition of Ethernet</h4>

<p>
Ethernet is a LAN technology that provides rules and standards for communication between devices connected in a network.
</p>

<h4>How Ethernet Works</h4>

<p>
In an Ethernet network, devices are connected through switches using network cables. When a computer wants to send data, the data is divided into small units called frames. These frames travel through the network and reach the intended destination.
</p>

<p>
Each device in an Ethernet network has a unique MAC (Media Access Control) address. Ethernet uses these addresses to identify source and destination devices.
</p>

<h4>Features of Ethernet</h4>

<p>
1. High-speed communication.</p>

<p>
2. Reliable data transmission.</p>

<p>
3. Easy installation and maintenance.</p>

<p>
4. Uses MAC addresses for device identification.</p>

<p>
5. Supports wired communication.</p>

<p>
6. Cost-effective networking solution.</p>

<h4>Ethernet Frame Structure</h4>

<p>
An Ethernet frame contains:</p>

<p>
1. Destination Address</p>

<p>
2. Source Address</p>

<p>
3. Type Field</p>

<p>
4. Data Field</p>

<p>
5. Error Detection Field</p>

<h4>Advantages of Ethernet</h4>

<p>
1. High reliability.</p>

<p>
2. Easy implementation.</p>

<p>
3. Low installation cost.</p>

<p>
4. Supports high-speed communication.</p>

<p>
5. Widely available and standardized.</p>

<h4>Disadvantages of Ethernet</h4>

<p>
1. Limited cable length.</p>

<p>
2. Performance may decrease in very large networks.</p>

<p>
3. Requires physical cabling.</p>

<h4>Applications of Ethernet</h4>

<p>
1. Office Networks.</p>

<p>
2. School and College Laboratories.</p>

<p>
3. Banking Networks.</p>

<p>
4. Data Centers.</p>

<p>
5. Industrial Networks.</p>

<h4>Real Life Example</h4>

<p>
When computers in a computer laboratory are connected through a switch using LAN cables, they are typically using Ethernet technology.
</p>

<h4>Summary</h4>

<p>
Ethernet is the most popular LAN technology used for wired communication. It provides fast, reliable, and cost-effective networking and is standardized under IEEE 802.3.
</p>

<p>
Ethernet is a LAN technology standardized by IEEE 802.3. It is used for connecting devices in a network and provides reliable and high-speed communication using MAC addresses.
</p>

`;

let tokenRingContent = `

<h3>Token Ring</h3>

<p>
Token Ring is a LAN technology in which devices are connected in a logical ring. It was developed by IBM and standardized by IEEE 802.5. Unlike Ethernet, which allows devices to compete for network access, Token Ring uses a special control packet called a Token to regulate communication.
</p>

<p>
The token continuously circulates around the network. A computer can send data only when it receives the token. This controlled access method eliminates collisions and ensures orderly communication.
</p>

<h4>Definition of Token Ring</h4>

<p>
Token Ring is a LAN technology that uses a circulating token to control access to the network and prevent data collisions.
</p>

<h4>How Token Ring Works</h4>

<p>
A small packet called a token continuously moves around the ring.</p>

<p>
When a computer wants to send data, it waits until it receives the token.</p>

<p>
After receiving the token, the computer attaches its data and sends it through the network.</p>

<p>
Once the transmission is complete, the token is released for other devices.</p>

<h4>Features of Token Ring</h4>

<p>
1. Uses token passing technique.</p>

<p>
2. No data collisions.</p>

<p>
3. Predictable network performance.</p>

<p>
4. Controlled network access.</p>

<p>
5. Standardized as IEEE 802.5.</p>

<h4>Advantages of Token Ring</h4>

<p>
1. Collision-free communication.</p>

<p>
2. Efficient under heavy network load.</p>

<p>
3. Predictable data transmission.</p>

<p>
4. Fair access for all devices.</p>

<h4>Disadvantages of Token Ring</h4>

<p>
1. More expensive than Ethernet.</p>

<p>
2. Difficult installation and maintenance.</p>

<p>
3. Failure of a device may affect the ring.</p>

<p>
4. Lower popularity compared to Ethernet.</p>

<h4>Applications of Token Ring</h4>

<p>
1. Early IBM Networks.</p>

<p>
2. Industrial Control Systems.</p>

<p>
3. Specialized Enterprise Networks.</p>

<h4>Real Life Example</h4>

<p>
Imagine students sitting in a circle and passing a speaking stick. Only the student holding the stick can speak. Similarly, in Token Ring, only the device holding the token can transmit data.
</p>

<h4>Difference Between Ethernet and Token Ring</h4>

<table class = "notes-table">
<tr>
<th>Feature</th>
<th>Ethernet</th>
<th>Token Ring</th>
</tr>

<tr>
<td>Standard</td>
<td>IEEE 802.3</td>
<td>IEEE 802.5</td>
</tr>

<tr>
<td>Access Method</td>
<td>CSMA/CD</td>
<td>Token Passing</td>
</tr>

<tr>
<td>Collision</td>
<td>Possible</td>
<td>No Collision</td>
</tr>

<tr>
<td>Cost</td>
<td>Low</td>
<td>High</td>
</tr>

<tr>
<td>Popularity</td>
<td>Very High</td>
<td>Low</td>
</tr>
</table>

<h4>Summary</h4>

<p>
Token Ring is a LAN technology that uses token passing for communication. It provides collision-free data transmission but is more expensive and less popular than Ethernet.
</p>

<p>
Token Ring is a LAN technology standardized by IEEE 802.5. It uses a token passing mechanism to control communication and eliminate data collisions.
</p>

`;

let fddiContent = `

<h3>FDDI (Fiber Distributed Data Interface)</h3>

<p>
Fiber Distributed Data Interface (FDDI) is a high-speed networking technology that uses optical fiber cables for communication. FDDI was designed for large organizations that require reliable and high-speed data transmission over long distances.
</p>

<p>
FDDI uses a dual-ring architecture, which provides fault tolerance and reliability. If one ring fails, the second ring automatically takes over communication.
</p>

<h4>Definition of FDDI</h4>

<p>
FDDI is a high-speed LAN technology that uses fiber optic cables and dual-ring architecture for reliable communication.
</p>

<h4>How FDDI Works</h4>

<p>
FDDI uses two rings:</p>

<p>
1. Primary Ring.</p>

<p>
2. Secondary Ring.</p>

<p>
Normally, data travels through the primary ring. If a fault occurs, the secondary ring becomes active and maintains communication.
</p>

<h4>Features of FDDI</h4>

<p>
1. Uses optical fiber cables.</p>

<p>
2. Supports long-distance communication.</p>

<p>
3. Uses dual-ring architecture.</p>

<p>
4. Provides fault tolerance.</p>

<p>
5. High-speed data transmission.</p>

<h4>Advantages of FDDI</h4>

<p>
1. Very high reliability.</p>

<p>
2. Long-distance coverage.</p>

<p>
3. High-speed communication.</p>

<p>
4. Backup ring for fault recovery.</p>

<p>
5. Suitable for large networks.</p>

<h4>Disadvantages of FDDI</h4>

<p>
1. Expensive implementation.</p>

<p>
2. Complex installation.</p>

<p>
3. Requires specialized equipment.</p>

<p>
4. Less commonly used today.</p>

<h4>Applications of FDDI</h4>

<p>
1. University Campuses.</p>

<p>
2. Large Enterprises.</p>

<p>
3. Data Centers.</p>

<p>
4. Government Organizations.</p>

<p>
5. Backbone Networks.</p>

<h4>Real Life Example</h4>

<p>
A university with multiple buildings may use FDDI to connect departments through high-speed fiber optic links while maintaining reliability through its dual-ring structure.
</p>

<h4>Difference Between Ethernet, Token Ring, and FDDI</h4>

<table class = "notes-table">
<tr>
<th>Feature</th>
<th>Ethernet</th>
<th>Token Ring</th>
<th>FDDI</th>
</tr>

<tr>
<td>Standard</td>
<td>IEEE 802.3</td>
<td>IEEE 802.5</td>
<td>ANSI Standard</td>
</tr>

<tr>
<td>Transmission Medium</td>
<td>Copper Cable</td>
<td>Copper Cable</td>
<td>Fiber Optic Cable</td>
</tr>

<tr>
<td>Access Method</td>
<td>CSMA/CD</td>
<td>Token Passing</td>
<td>Token Passing</td>
</tr>

<tr>
<td>Speed</td>
<td>High</td>
<td>Moderate</td>
<td>Very High</td>
</tr>

<tr>
<td>Reliability</td>
<td>Good</td>
<td>Good</td>
<td>Excellent</td>
</tr>

<tr>
<td>Cost</td>
<td>Low</td>
<td>High</td>
<td>Very High</td>
</tr>

<tr>
<td>Popularity</td>
<td>Most Popular</td>
<td>Rarely Used</td>
<td>Specialized Usage</td>
</tr>

</table>

<h4>Summary</h4>

<p>
FDDI is a high-speed fiber optic networking technology that uses a dual-ring architecture for fault tolerance and reliable communication. It is suitable for large organizations and backbone networks.
</p>

<p>
FDDI (Fiber Distributed Data Interface) is a high-speed networking technology that uses fiber optic cables and dual-ring architecture to provide reliable and fault-tolerant communication.
</p>

`;

let wanConceptContentDetail = `

<h3>WAN (Wide Area Network)</h3>

<p>
WAN stands for Wide Area Network. It is a computer network that covers a large geographical area such as cities, states, countries, or even continents. WAN connects multiple LANs together so that users located in different places can communicate and share information.
</p>

<p>
Unlike a LAN, which is limited to a building or campus, a WAN can connect networks separated by hundreds or thousands of kilometers. WANs use communication technologies such as leased lines, fiber optic cables, microwave links, satellite communication, and the Internet to transfer data.
</p>

<h4>Definition of WAN</h4>

<p>
A Wide Area Network (WAN) is a computer network that connects computers, LANs, and other networks across large geographical distances.
</p>

<h4>Need for WAN</h4>

<p>
Large organizations often have offices in different cities and countries. To share information and communicate efficiently, these offices need to be connected through a WAN.
</p>

<p>
WAN is needed because:</p>

<p>
1. It connects geographically distant locations.</p>

<p>
2. It allows centralized access to data.</p>

<p>
3. It supports communication between branch offices.</p>

<p>
4. It enables online services and remote work.</p>

<p>
5. It supports global business operations.</p>

<h4>Characteristics of WAN</h4>

<p>
1. Covers a large geographical area.</p>

<p>
2. Connects multiple LANs and MANs.</p>

<p>
3. Uses public and private communication networks.</p>

<p>
4. More expensive than LAN.</p>

<p>
5. Data transmission speed is generally lower than LAN.</p>

<p>
6. Requires advanced networking devices.</p>

<h4>Components of WAN</h4>

<p>
1. Routers.</p>

<p>
2. Modems.</p>

<p>
3. Communication Links.</p>

<p>
4. Leased Lines.</p>

<p>
5. Satellite Links.</p>

<p>
6. Fiber Optic Networks.</p>

<h4>Advantages of WAN</h4>

<p>
1. Connects users across large distances.</p>

<p>
2. Supports global communication.</p>

<p>
3. Enables centralized management.</p>

<p>
4. Allows resource sharing between locations.</p>

<p>
5. Supports cloud services and online applications.</p>

<h4>Disadvantages of WAN</h4>

<p>
1. High installation cost.</p>

<p>
2. Complex management.</p>

<p>
3. Security challenges.</p>

<p>
4. Lower speed compared to LAN.</p>

<h4>Examples of WAN</h4>

<p>
1. The Internet.</p>

<p>
2. Banking Networks.</p>

<p>
3. Railway Reservation Systems.</p>

<p>
4. Corporate Networks connecting branches worldwide.</p>

<h4>Difference Between LAN and WAN</h4>

<table class = "notes-table">
<tr>
<th>Feature</th>
<th>LAN</th>
<th>WAN</th>
</tr>

<tr>
<td>Full Form</td>
<td>Local Area Network</td>
<td>Wide Area Network</td>
</tr>

<tr>
<td>Coverage Area</td>
<td>Small Area</td>
<td>Large Area</td>
</tr>

<tr>
<td>Speed</td>
<td>High</td>
<td>Lower than LAN</td>
</tr>

<tr>
<td>Cost</td>
<td>Low</td>
<td>High</td>
</tr>

<tr>
<td>Ownership</td>
<td>Single Organization</td>
<td>Multiple Organizations</td>
</tr>

<tr>
<td>Example</td>
<td>School Lab</td>
<td>Internet</td>
</tr>
</table>

<h4>Classroom Example</h4>

<p>
Suppose a bank has branches in Delhi, Mumbai, Lucknow, and Kolkata. Customers can access their accounts from any branch because all branches are connected through a WAN.
</p>

<h4>Summary</h4>

<p>
WAN (Wide Area Network) is a network that connects computers and networks across large geographical areas such as cities, countries, or continents. The Internet is the largest example of a WAN.
</p>

`;

let networkLayerContent = `

<h3>Network Layer</h3>

<p>
The Network Layer is the third layer of the OSI Model. It is responsible for transferring data packets from the source network to the destination network. This layer determines the best path for data transmission and ensures that packets reach the correct destination.
</p>

<p>
The Network Layer plays a crucial role in internetworking because it allows communication between devices located on different networks.
</p>

<h4>Definition of Network Layer</h4>

<p>
The Network Layer is responsible for logical addressing, routing, and forwarding packets between different networks.
</p>

<h4>Main Functions of Network Layer</h4>

<p>
1. Logical Addressing.</p>

<p>
2. Routing.</p>

<p>
3. Packet Forwarding.</p>

<p>
4. Path Determination.</p>

<p>
5. Congestion Handling.</p>

<p>
6. Internetwork Communication.</p>

<h4>Logical Addressing</h4>

<p>
Every device connected to a network is assigned an IP Address. The Network Layer uses these addresses to identify the source and destination devices.
</p>

<h4>Routing</h4>

<p>
Routing is the process of selecting the best path for sending packets from source to destination.
</p>

<h4>Packet Forwarding</h4>

<p>
After determining the route, routers forward packets toward the destination network.
</p>

<h4>Devices Used at Network Layer</h4>

<p>
Routers are the primary devices that operate at the Network Layer.
</p>

<h4>Protocols of Network Layer</h4>

<p>
1. Internet Protocol (IP).</p>

<p>
2. ICMP (Internet Control Message Protocol).</p>

<p>
3. ARP (Address Resolution Protocol).</p>

<p>
4. OSPF (Open Shortest Path First).</p>

<p>
5. RIP (Routing Information Protocol).</p>

<h4>Importance of Network Layer</h4>

<p>
Without the Network Layer, communication between different networks would not be possible. It acts as the backbone of the Internet.
</p>

<h4>Classroom Example</h4>

<p>
When you send a message from Delhi to Mumbai, the postal system selects the best route to deliver the letter. Similarly, the Network Layer selects the best route for data packets.
</p>


<p>
The Network Layer is the third layer of the OSI Model responsible for logical addressing, routing, and forwarding packets between different networks.
</p>

`;

let addressingConceptContent = `

<h3>Addressing Concepts</h3>

<p>
In a computer network, every device must have a unique address so that data can be delivered to the correct destination. Addressing is the process of assigning identifiers to devices for communication purposes.
</p>

<p>
Just as every house has a unique postal address, every device on a network requires a unique address to send and receive data.
</p>

<h4>Why Addressing is Important</h4>

<p>
1. Identifies devices uniquely.</p>

<p>
2. Helps deliver data to the correct destination.</p>

<p>
3. Supports communication between networks.</p>

<p>
4. Prevents data delivery errors.</p>

<h4>Types of Addresses in Networking</h4>

<h4>1. Physical Address (MAC Address)</h4>

<p>
A MAC Address is a unique hardware address assigned to a Network Interface Card (NIC).
</p>

<p>
Example: 00:1A:2B:3C:4D:5E</p>

<h4>2. Logical Address (IP Address)</h4>

<p>
An IP Address identifies a device on a network and is used for routing data.
</p>

<p>
Example: 192.168.1.10</p>

<h4>3. Port Address</h4>

<p>
Port numbers identify specific applications or services running on a device.
</p>

<p>
Example: Port 80 for HTTP.</p>

<h4>4. Specific Address</h4>

<p>
Used to identify a specific file, webpage, or resource.
</p>

<h4>Comparison of MAC Address and IP Address</h4>

<table class = "notes-table">
<tr>
<th>Feature</th>
<th>MAC Address</th>
<th>IP Address</th>
</tr>

<tr>
<td>Type</td>
<td>Physical Address</td>
<td>Logical Address</td>
</tr>

<tr>
<td>Assigned By</td>
<td>Manufacturer</td>
<td>Network Administrator / ISP</td>
</tr>

<tr>
<td>Changes</td>
<td>Normally Fixed</td>
<td>Can Change</td>
</tr>

<tr>
<td>Used For</td>
<td>Local Communication</td>
<td>Routing</td>
</tr>

<tr>
<td>Layer</td>
<td>Data Link Layer</td>
<td>Network Layer</td>
</tr>
</table>

<h4>Classroom Example</h4>

<p>
A student's roll number identifies a student within a class, while a home address identifies where the student lives. Similarly, MAC and IP addresses help identify devices in a network.
</p>

<h4>Summary</h4>

<p>
Addressing is the process of assigning unique identifiers to devices in a network. Common addressing types include MAC Address, IP Address, Port Address, and Specific Address.
</p>

`;

let routingConceptContent = `

<h3>Routing Concepts</h3>

<p>
Routing is the process of selecting the best path for transmitting data packets from a source device to a destination device across interconnected networks.
</p>

<p>
When data travels across multiple networks, routers determine the most efficient route to ensure successful delivery.
</p>

<h4>Definition of Routing</h4>

<p>
Routing is the process of finding and selecting the best path for forwarding data packets between networks.
</p>

<h4>Why Routing is Needed</h4>

<p>
1. Connects different networks.</p>

<p>
2. Determines the best path for data transmission.</p>

<p>
3. Reduces network congestion.</p>

<p>
4. Improves communication efficiency.</p>

<p>
5. Ensures reliable packet delivery.</p>

<h4>What is a Router?</h4>

<p>
A Router is a networking device that operates at the Network Layer and forwards packets between different networks.
</p>

<h4>How Routing Works</h4>

<p>
1. The source device creates a packet.</p>

<p>
2. The packet reaches a router.</p>

<p>
3. The router checks its routing table.</p>

<p>
4. The best route is selected.</p>

<p>
5. The packet is forwarded toward the destination.</p>

<h4>Types of Routing</h4>

<p>
1. Static Routing.</p>

<p>
2. Dynamic Routing.</p>

<h4>Characteristics of Routing</h4>

<p>
1. Uses routing tables.</p>

<p>
2. Supports inter-network communication.</p>

<p>
3. Helps determine optimal paths.</p>

<p>
4. Improves network performance.</p>

<h4>Difference Between Static and Dynamic Routing</h4>

<table class = "notes-table">
<tr>
<th>Feature</th>
<th>Static Routing</th>
<th>Dynamic Routing</th>
</tr>

<tr>
<td>Configuration</td>
<td>Manual</td>
<td>Automatic</td>
</tr>

<tr>
<td>Maintenance</td>
<td>High</td>
<td>Low</td>
</tr>

<tr>
<td>Adaptability</td>
<td>Does Not Adapt Automatically</td>
<td>Adapts Automatically</td>
</tr>

<tr>
<td>Complexity</td>
<td>Simple</td>
<td>Complex</td>
</tr>

<tr>
<td>Suitable For</td>
<td>Small Networks</td>
<td>Large Networks</td>
</tr>
</table>

<h4>Classroom Example</h4>

<p>
When traveling from Ghaziabad to Mumbai, there may be several routes available. You choose the fastest or shortest route to reach your destination. Similarly, routing selects the best path for data packets.
</p>

<h4>Summary</h4>

<p>
Routing is the process of selecting the best path for forwarding data packets between networks. Routers use routing tables to determine the most efficient route from source to destination.
</p>

`;

let staticRoutingContent = `

<h3>Static Routing</h3>

<p>
Static Routing is a routing method in which routes are manually configured by the network administrator. In this method, routers do not automatically learn routes from other routers. Every route must be entered and maintained manually.
</p>

<p>
Static Routing is commonly used in small networks where the network structure rarely changes. Since routes are fixed, the router always follows the same path to send packets unless the administrator modifies the routing table.
</p>

<h4>Definition of Static Routing</h4>

<p>
Static Routing is a routing technique in which routing information is manually entered into the routing table by the network administrator.
</p>

<h4>How Static Routing Works</h4>

<p>
1. The network administrator manually configures routes.</p>

<p>
2. The router stores these routes in its routing table.</p>

<p>
3. When a packet arrives, the router checks the routing table.</p>

<p>
4. The packet is forwarded according to the predefined route.</p>

<p>
5. If the network changes, the administrator must manually update the routes.</p>

<h4>Characteristics of Static Routing</h4>

<p>
1. Routes are manually configured.</p>

<p>
2. No automatic route updates.</p>

<p>
3. Low CPU and memory usage.</p>

<p>
4. Suitable for small networks.</p>

<p>
5. Provides predictable routing behavior.</p>

<h4>Advantages of Static Routing</h4>

<p>
1. Easy to understand.</p>

<p>
2. More secure because routes are fixed.</p>

<p>
3. No routing protocol overhead.</p>

<p>
4. Low bandwidth consumption.</p>

<p>
5. Good for small networks.</p>

<h4>Disadvantages of Static Routing</h4>

<p>
1. Difficult to manage in large networks.</p>

<p>
2. Network changes require manual updates.</p>

<p>
3. Not scalable.</p>

<p>
4. Route failures are not detected automatically.</p>

<h4>Real Life Example</h4>

<p>
Suppose a school has only two buildings connected through a router. Since the network rarely changes, the administrator can manually configure routes between the buildings using Static Routing.
</p>

<h4>Summary</h4>

<p>
Static Routing is a routing method in which routes are manually configured by the network administrator. It is simple, secure, and suitable for small networks.
</p>

`;

let dynamicRoutingContent = `

<h3>Dynamic Routing</h3>

<p>
Dynamic Routing is a routing method in which routers automatically learn, update, and maintain routing information using routing protocols. Unlike Static Routing, Dynamic Routing does not require manual configuration of every route.
</p>

<p>
Routers continuously exchange routing information with neighboring routers. If there is a change in the network, routers automatically update their routing tables and select the best available path.
</p>

<h4>Definition of Dynamic Routing</h4>

<p>
Dynamic Routing is a routing technique in which routers automatically discover and update routes using routing protocols.
</p>

<h4>How Dynamic Routing Works</h4>

<p>
1. Routers exchange routing information.</p>

<p>
2. Routing protocols calculate the best path.</p>

<p>
3. Routing tables are updated automatically.</p>

<p>
4. If a route fails, an alternate route is selected.</p>

<p>
5. Communication continues without manual intervention.</p>

<h4>Characteristics of Dynamic Routing</h4>

<p>
1. Automatic route discovery.</p>

<p>
2. Automatic route updates.</p>

<p>
3. Adapts to network changes.</p>

<p>
4. Suitable for large networks.</p>

<p>
5. Uses routing protocols.</p>

<h4>Advantages of Dynamic Routing</h4>

<p>
1. Easy management of large networks.</p>

<p>
2. Automatic route updates.</p>

<p>
3. Better fault tolerance.</p>

<p>
4. Supports network expansion.</p>

<p>
5. Automatically selects the best route.</p>

<h4>Disadvantages of Dynamic Routing</h4>

<p>
1. More complex than Static Routing.</p>

<p>
2. Consumes CPU and memory resources.</p>

<p>
3. Generates routing traffic.</p>

<p>
4. Requires routing protocols.</p>

<h4>Examples of Dynamic Routing Protocols</h4>

<p>
1. RIP (Routing Information Protocol).</p>

<p>
2. OSPF (Open Shortest Path First).</p>

<p>
3. EIGRP (Enhanced Interior Gateway Routing Protocol).</p>

<p>
4. IS-IS (Intermediate System to Intermediate System).</p>

<h4>Difference Between Static Routing and Dynamic Routing</h4>

<table class = "notes-table">
<tr>
<th>Feature</th>
<th>Static Routing</th>
<th>Dynamic Routing</th>
</tr>

<tr>
<td>Configuration</td>
<td>Manual</td>
<td>Automatic</td>
</tr>

<tr>
<td>Network Size</td>
<td>Small Networks</td>
<td>Large Networks</td>
</tr>

<tr>
<td>Maintenance</td>
<td>High</td>
<td>Low</td>
</tr>

<tr>
<td>Adaptability</td>
<td>No Automatic Changes</td>
<td>Automatically Adapts</td>
</tr>

<tr>
<td>Routing Protocols</td>
<td>Not Required</td>
<td>Required</td>
</tr>

<tr>
<td>Fault Tolerance</td>
<td>Low</td>
<td>High</td>
</tr>
</table>

<h4>Classroom Example</h4>

<p>
Google Maps automatically changes your route when a road is closed or traffic increases. Dynamic Routing works in a similar way by automatically finding a better path when network conditions change.
</p>

<h4>Summary</h4>

<p>
Dynamic Routing is a routing technique in which routers automatically discover and maintain routes using routing protocols. It is suitable for large and changing networks.
</p>

`;

let distanceVectorProtocolContent = `

<h3>Distance Vector Routing Protocol</h3>

<p>
Distance Vector Routing is a dynamic routing technique in which routers determine the best route based on two factors: Distance and Direction (Vector). The distance usually represents the number of hops required to reach the destination.
</p>

<p>
In this protocol, each router periodically shares its routing table with neighboring routers. Based on the received information, routers update their routing tables and determine the shortest path.
</p>

<h4>Definition</h4>

<p>
Distance Vector Routing Protocol is a routing method in which routers exchange routing information with neighboring routers and select routes based on distance and direction.
</p>

<h4>How Distance Vector Routing Works</h4>

<p>
1. Every router maintains a routing table.</p>

<p>
2. Routers periodically send routing tables to neighbors.</p>

<p>
3. Neighboring routers compare route information.</p>

<p>
4. The shortest route is selected.</p>

<p>
5. Routing tables are updated accordingly.</p>

<h4>Key Terms</h4>

<p>
Distance: Number of hops to reach the destination.</p>

<p>
Vector: Direction in which the packet should be forwarded.</p>

<h4>Characteristics of Distance Vector Routing</h4>

<p>
1. Uses hop count as a metric.</p>

<p>
2. Exchanges routing tables periodically.</p>

<p>
3. Easy to implement.</p>

<p>
4. Suitable for smaller networks.</p>

<p>
5. Slower convergence.</p>

<h4>Advantages</h4>

<p>
1. Simple configuration.</p>

<p>
2. Easy implementation.</p>

<p>
3. Less complex than Link State Routing.</p>

<h4>Disadvantages</h4>

<p>
1. Slow convergence.</p>

<p>
2. Routing loops may occur.</p>

<p>
3. Not suitable for very large networks.</p>

<p>
4. Generates periodic routing updates.</p>

<h4>Example Protocol</h4>

<p>
RIP (Routing Information Protocol) is the most common Distance Vector Routing Protocol.
</p>

<h4>Classroom Example</h4>

<p>
Imagine asking your friends for directions to reach a destination. Each friend tells you how many roads away the destination is. You choose the shortest route based on their information. This is similar to Distance Vector Routing.
</p>

<h4>Summary</h4>

<p>
Distance Vector Routing Protocol is a dynamic routing method in which routers exchange routing information with neighboring routers and select routes based on hop count and direction.
</p>

`;

let linkStateProtocolContent = `

<h3>Link State Routing Protocol</h3>

<p>
Link State Routing is a dynamic routing technique in which each router builds a complete map of the network. Instead of sharing entire routing tables, routers share information about the status of their links.
</p>

<p>
Using this information, every router independently calculates the shortest path to all destinations using Dijkstra's Shortest Path Algorithm.
</p>

<h4>Definition</h4>

<p>
Link State Routing Protocol is a routing method in which routers exchange link information and build a complete network topology map to calculate the shortest path.
</p>

<h4>How Link State Routing Works</h4>

<p>
1. Routers discover neighboring routers.</p>

<p>
2. Routers measure link costs.</p>

<p>
3. Link State Advertisements (LSAs) are generated.</p>

<p>
4. LSAs are distributed throughout the network.</p>

<p>
5. Every router creates a topology database.</p>

<p>
6. Dijkstra's Algorithm calculates the shortest path.</p>

<h4>Characteristics of Link State Routing</h4>

<p>
1. Uses complete network topology information.</p>

<p>
2. Faster convergence.</p>

<p>
3. More accurate route selection.</p>

<p>
4. Suitable for large networks.</p>

<p>
5. Uses Dijkstra's Algorithm.</p>

<h4>Advantages</h4>

<p>
1. Fast convergence.</p>

<p>
2. Better scalability.</p>

<p>
3. More accurate routing decisions.</p>

<p>
4. Reduced routing loops.</p>

<h4>Disadvantages</h4>

<p>
1. More complex implementation.</p>

<p>
2. Higher memory requirements.</p>

<p>
3. Greater CPU utilization.</p>

<h4>Difference Between Distance Vector and Link State Routing</h4>

<table class = "notes-table">
<tr>
<th>Feature</th>
<th>Distance Vector</th>
<th>Link State</th>
</tr>

<tr>
<td>Network Knowledge</td>
<td>Neighbor Information Only</td>
<td>Complete Network Map</td>
</tr>

<tr>
<td>Convergence</td>
<td>Slow</td>
<td>Fast</td>
</tr>

<tr>
<td>Complexity</td>
<td>Simple</td>
<td>Complex</td>
</tr>

<tr>
<td>Scalability</td>
<td>Small Networks</td>
<td>Large Networks</td>
</tr>

<tr>
<td>Algorithm</td>
<td>Bellman-Ford</td>
<td>Dijkstra</td>
</tr>
</table>

<h4>Summary</h4>

<p>
Link State Routing Protocol builds a complete map of the network and calculates the shortest path using Dijkstra's Algorithm. It provides faster convergence and better performance than Distance Vector Routing.
</p>

`;

let ospfContent = `

<h3>Open Shortest Path First (OSPF)</h3>

<p>
Open Shortest Path First (OSPF) is a Link State Routing Protocol used in large IP networks. It was developed to overcome the limitations of Distance Vector protocols such as RIP.
</p>

<p>
OSPF builds a complete map of the network and uses Dijkstra's Shortest Path Algorithm to calculate the best route between source and destination.
</p>

<h4>Definition of OSPF</h4>

<p>
OSPF is a Link State Routing Protocol that calculates the shortest path between routers using Dijkstra's Algorithm.
</p>

<h4>How OSPF Works</h4>

<p>
1. Routers discover neighbors.</p>

<p>
2. Link State Advertisements (LSAs) are exchanged.</p>

<p>
3. A topology database is created.</p>

<p>
4. Dijkstra's Algorithm calculates shortest paths.</p>

<p>
5. Routing tables are updated automatically.</p>

<h4>Features of OSPF</h4>

<p>
1. Link State Routing Protocol.</p>

<p>
2. Fast convergence.</p>

<p>
3. Supports large networks.</p>

<p>
4. Uses cost as a routing metric.</p>

<p>
5. Supports hierarchical routing.</p>

<p>
6. Open standard protocol.</p>

<h4>Advantages of OSPF</h4>

<p>
1. Fast route calculation.</p>

<p>
2. Efficient use of bandwidth.</p>

<p>
3. Suitable for enterprise networks.</p>

<p>
4. Scalable and reliable.</p>

<p>
5. Supports multiple paths.</p>

<h4>Disadvantages of OSPF</h4>

<p>
1. Complex configuration.</p>

<p>
2. Higher memory requirements.</p>

<p>
3. Requires more processing power.</p>

<h4>Difference Between RIP and OSPF</h4>

<table class = "notes-table">
<tr>
<th>Feature</th>
<th>RIP</th>
<th>OSPF</th>
</tr>

<tr>
<td>Protocol Type</td>
<td>Distance Vector</td>
<td>Link State</td>
</tr>

<tr>
<td>Metric</td>
<td>Hop Count</td>
<td>Cost</td>
</tr>

<tr>
<td>Convergence</td>
<td>Slow</td>
<td>Fast</td>
</tr>

<tr>
<td>Network Size</td>
<td>Small Networks</td>
<td>Large Networks</td>
</tr>

<tr>
<td>Maximum Hop Count</td>
<td>15</td>
<td>No Practical Limit</td>
</tr>
</table>

<h4>Real Life Example</h4>

<p>
Imagine Google Maps having complete information about all roads and traffic conditions. It can quickly determine the shortest route. OSPF works similarly by maintaining a complete network map and calculating the best route.
</p>

<h4>Summary</h4>

<p>
OSPF (Open Shortest Path First) is a Link State Routing Protocol that uses Dijkstra's Algorithm to determine the shortest path. It provides fast convergence and is widely used in large enterprise networks.
</p>

`;

let internetProtocolContent = `

<h3>Internet Protocol (IP)</h3>

<p>
Internet Protocol, commonly known as IP, is one of the most important protocols used in computer networks and the Internet. It is a Network Layer protocol responsible for delivering data packets from a source device to a destination device across one or more networks.
</p>

<p>
Whenever we browse websites, send emails, watch videos online, use social media, or transfer files, Internet Protocol plays a major role in ensuring that data reaches the correct destination.
</p>

<h4>Definition of Internet Protocol</h4>

<p>
Internet Protocol (IP) is a set of rules that governs the addressing and routing of data packets so that they can travel from a source device to a destination device across interconnected networks.
</p>

<h4>Why Internet Protocol is Needed</h4>

<p>
In a network, millions of devices communicate with each other. Without a proper addressing and routing mechanism, it would be impossible to identify devices and deliver data correctly.
</p>

<p>
Internet Protocol is needed because:</p>

<p>
1. It uniquely identifies devices using IP addresses.</p>

<p>
2. It helps route packets between networks.</p>

<p>
3. It enables communication over the Internet.</p>

<p>
4. It provides logical addressing.</p>

<p>
5. It allows data transmission between different networks.</p>

<h4>Main Functions of Internet Protocol</h4>

<p>
1. Logical Addressing.</p>

<p>
2. Packet Formation.</p>

<p>
3. Routing.</p>

<p>
4. Packet Forwarding.</p>

<p>
5. Fragmentation and Reassembly.</p>

<h4>Logical Addressing</h4>

<p>
Each device connected to a network is assigned a unique IP address. This address identifies the source and destination devices during communication.
</p>

<h4>Packet Formation</h4>

<p>
When data is sent over a network, it is divided into smaller units called packets. IP adds addressing information to each packet before transmission.
</p>

<h4>Routing</h4>

<p>
IP determines how packets travel through different networks to reach their destination.
</p>

<h4>Packet Forwarding</h4>

<p>
Routers use IP addresses to forward packets from one network to another.
</p>

<h4>Fragmentation and Reassembly</h4>

<p>
Sometimes a packet is too large for a network to handle. In such cases, IP divides the packet into smaller fragments. The destination device later reassembles these fragments into the original packet.
</p>

<h4>Characteristics of Internet Protocol</h4>

<p>
1. Connectionless Protocol.</p>

<p>
2. Best-Effort Delivery.</p>

<p>
3. Logical Addressing.</p>

<p>
4. Independent Packet Delivery.</p>

<p>
5. Supports Internetworking.</p>

<h4>Connectionless Communication</h4>

<p>
IP is a connectionless protocol because it does not establish a dedicated connection before sending data. Each packet is transmitted independently.
</p>

<h4>Best-Effort Delivery</h4>

<p>
IP tries its best to deliver packets but does not guarantee successful delivery. Error checking and reliability are handled by higher-layer protocols such as TCP.
</p>

<h4>Versions of Internet Protocol</h4>

<h4>1. IPv4 (Internet Protocol Version 4)</h4>

<p>
IPv4 is the most widely used version of IP. It uses 32-bit addresses and supports approximately 4.3 billion unique addresses.
</p>

<p>
Example: 192.168.1.1</p>

<h4>2. IPv6 (Internet Protocol Version 6)</h4>

<p>
IPv6 was developed to overcome the address limitations of IPv4. It uses 128-bit addresses and supports a very large number of unique addresses.
</p>

<p>
Example: 2001:db8::1</p>

<h4>Difference Between IPv4 and IPv6</h4>

<table class = "notes-table">
<tr>
<th>Feature</th>
<th>IPv4</th>
<th>IPv6</th>
</tr>

<tr>
<td>Address Length</td>
<td>32 Bits</td>
<td>128 Bits</td>
</tr>

<tr>
<td>Address Format</td>
<td>Decimal</td>
<td>Hexadecimal</td>
</tr>

<tr>
<td>Address Space</td>
<td>About 4.3 Billion</td>
<td>Very Large</td>
</tr>

<tr>
<td>Security</td>
<td>Optional</td>
<td>Built-In Support</td>
</tr>

<tr>
<td>Example</td>
<td>192.168.1.1</td>
<td>2001:db8::1</td>
</tr>
</table>

<h4>Advantages of Internet Protocol</h4>

<p>
1. Supports communication across different networks.</p>

<p>
2. Provides logical addressing.</p>

<p>
3. Supports global Internet communication.</p>

<p>
4. Flexible and scalable.</p>

<p>
5. Works with various network technologies.</p>

<h4>Limitations of Internet Protocol</h4>

<p>
1. Does not guarantee packet delivery.</p>

<p>
2. Does not provide error recovery.</p>

<p>
3. Does not guarantee packet order.</p>

<p>
4. Does not provide flow control.</p>

<h4>Real-Life Example</h4>

<p>
Imagine sending a letter through the postal system. The letter contains the sender's address and the receiver's address. Postal workers use these addresses to deliver the letter. Similarly, Internet Protocol uses IP addresses to deliver data packets from source to destination.
</p>

<h4>Summary</h4>

<p>
Internet Protocol (IP) is the fundamental protocol of the Internet. It provides logical addressing, routing, packet forwarding, and internetwork communication. Every device connected to the Internet relies on IP for communication.
</p>


<p>
Internet Protocol (IP) is a Network Layer protocol responsible for logical addressing and routing of packets across interconnected networks. It provides connectionless and best-effort delivery services.
</p>

`;

let ipAddressingContent = `

<h3>IP Addressing</h3>

<p>
An IP Address (Internet Protocol Address) is a unique numerical identifier assigned to every device connected to a computer network. Just as every house has a unique postal address, every device on a network requires a unique IP address for communication.
</p>

<p>
IP addressing is one of the most important concepts in networking because it helps identify the source and destination of data packets.
</p>

<h4>Definition of IP Address</h4>

<p>
An IP Address is a logical address assigned to a device in a network to uniquely identify it and enable communication with other devices.
</p>

<h4>Need for IP Addressing</h4>

<p>
1. To uniquely identify devices.</p>

<p>
2. To send and receive data.</p>

<p>
3. To identify source and destination devices.</p>

<p>
4. To support communication over the Internet.</p>

<p>
5. To enable routing between networks.</p>

<h4>Structure of an IP Address</h4>

<p>
An IP address consists of two parts:</p>

<p>
1. Network ID</p>

<p>
2. Host ID</p>

<p>
The Network ID identifies the network, while the Host ID identifies a specific device within that network.
</p>

<h4>IPv4 Address</h4>

<p>
IPv4 uses a 32-bit address represented in four decimal numbers separated by dots.
</p>

<p>
Example: 192.168.1.10</p>

<h4>IPv6 Address</h4>

<p>
IPv6 uses a 128-bit address represented using hexadecimal numbers.
</p>

<p>
Example: 2001:db8::1</p>

<h4>Classes of IPv4 Addresses</h4>

<table class = "notes-table">
<tr>
<th>Class</th>
<th>Range</th>
<th>Default Subnet Mask</th>
<th>Usage</th>
</tr>

<tr>
<td>A</td>
<td>1.0.0.0 - 126.255.255.255</td>
<td>255.0.0.0</td>
<td>Large Networks</td>
</tr>

<tr>
<td>B</td>
<td>128.0.0.0 - 191.255.255.255</td>
<td>255.255.0.0</td>
<td>Medium Networks</td>
</tr>

<tr>
<td>C</td>
<td>192.0.0.0 - 223.255.255.255</td>
<td>255.255.255.0</td>
<td>Small Networks</td>
</tr>

<tr>
<td>D</td>
<td>224.0.0.0 - 239.255.255.255</td>
<td>Not Applicable</td>
<td>Multicasting</td>
</tr>

<tr>
<td>E</td>
<td>240.0.0.0 - 255.255.255.255</td>
<td>Not Applicable</td>
<td>Research</td>
</tr>
</table>

<h4>Public and Private IP Address</h4>

<table class = "notes-table">
<tr>
<th>Public IP Address</th>
<th>Private IP Address</th>
</tr>

<tr>
<td>Used on Internet</td>
<td>Used inside local networks</td>
</tr>

<tr>
<td>Globally Unique</td>
<td>Can be reused</td>
</tr>

<tr>
<td>Assigned by ISP</td>
<td>Assigned by Router</td>
</tr>
</table>

<h4>Static IP and Dynamic IP</h4>

<table class = "notes-table">
<tr>
<th>Static IP</th>
<th>Dynamic IP</th>
</tr>

<tr>
<td>Manually Assigned</td>
<td>Automatically Assigned</td>
</tr>

<tr>
<td>Fixed Address</td>
<td>May Change</td>
</tr>

<tr>
<td>Used for Servers</td>
<td>Used for Clients</td>
</tr>
</table>

<h4>Difference Between IPv4 and IPv6</h4>

<table class = "notes-table">
<tr>
<th>Feature</th>
<th>IPv4</th>
<th>IPv6</th>
</tr>

<tr>
<td>Address Length</td>
<td>32 Bits</td>
<td>128 Bits</td>
</tr>

<tr>
<td>Address Space</td>
<td>Limited</td>
<td>Very Large</td>
</tr>

<tr>
<td>Format</td>
<td>Decimal</td>
<td>Hexadecimal</td>
</tr>

<tr>
<td>Security</td>
<td>Optional</td>
<td>Built-In Support</td>
</tr>
</table>

<h4>Summary</h4>

<p>
An IP Address is a logical address used to identify devices in a network. IPv4 uses 32-bit addresses, while IPv6 uses 128-bit addresses.
</p>

`;

let ipRoutingContent = `

<h3>IP Routing</h3>

<p>
IP Routing is the process of forwarding data packets from a source network to a destination network using routers. It ensures that packets follow the best available path to reach their destination.
</p>

<p>
When data travels between different networks, routers examine destination IP addresses and determine where the packet should be sent next.
</p>

<h4>Definition of IP Routing</h4>

<p>
IP Routing is the process of selecting and forwarding packets through the most appropriate path between source and destination networks.
</p>

<h4>Need for IP Routing</h4>

<p>
1. Connects multiple networks.</p>

<p>
2. Delivers packets to remote destinations.</p>

<p>
3. Supports Internet communication.</p>

<p>
4. Determines the best path.</p>

<p>
5. Reduces network congestion.</p>

<h4>Routing Table</h4>

<p>
A routing table is a database maintained by routers that contains information about available routes and destination networks.
</p>

<h4>Components of Routing Table</h4>

<p>
1. Destination Network.</p>

<p>
2. Next Hop Address.</p>

<p>
3. Interface.</p>

<p>
4. Metric.</p>

<h4>How IP Routing Works</h4>

<p>
1. A packet is generated by the source device.</p>

<p>
2. The router reads the destination IP address.</p>

<p>
3. The routing table is checked.</p>

<p>
4. The best route is selected.</p>

<p>
5. The packet is forwarded to the next router.</p>

<p>
6. The process continues until the packet reaches the destination.</p>

<h4>Types of Routing</h4>

<p>
1. Static Routing.</p>

<p>
2. Dynamic Routing.</p>

<h4>Direct and Indirect Routing</h4>

<table class = "notes-table">
<tr>
<th>Direct Routing</th>
<th>Indirect Routing</th>
</tr>

<tr>
<td>Same Network</td>
<td>Different Networks</td>
</tr>

<tr>
<td>No Router Required</td>
<td>Router Required</td>
</tr>

<tr>
<td>Simple Communication</td>
<td>Complex Communication</td>
</tr>
</table>

<h4>Summary</h4>

<p>
IP Routing is the process of forwarding packets from source to destination through routers using routing tables.
</p>

`;

let icmpContent = `

<h3>Internet Control Message Protocol (ICMP)</h3>

<p>
Internet Control Message Protocol (ICMP) is a Network Layer protocol used for error reporting and diagnostic purposes. It helps devices identify problems that occur during packet transmission.
</p>

<p>
ICMP does not transfer user data. Instead, it sends control and error messages between devices.
</p>

<h4>Definition of ICMP</h4>

<p>
ICMP is a protocol used to report errors and provide diagnostic information in IP networks.
</p>

<h4>Functions of ICMP</h4>

<p>
1. Error Reporting.</p>

<p>
2. Network Diagnostics.</p>

<p>
3. Connectivity Testing.</p>

<p>
4. Route Information.</p>

<h4>Common ICMP Messages</h4>

<p>
1. Echo Request.</p>

<p>
2. Echo Reply.</p>

<p>
3. Destination Unreachable.</p>

<p>
4. Time Exceeded.</p>

<p>
5. Redirect Message.</p>

<h4>Ping and ICMP</h4>

<p>
The Ping command uses ICMP Echo Request and Echo Reply messages to test connectivity between two devices.
</p>

<h4>Traceroute and ICMP</h4>

<p>
Traceroute uses ICMP messages to determine the path packets take through a network.
</p>

<h4>Difference Between IP and ICMP</h4>

<table class = "notes-table">
<tr>
<th>IP</th>
<th>ICMP</th>
</tr>

<tr>
<td>Transfers Data</td>
<td>Reports Errors</td>
</tr>

<tr>
<td>Main Protocol</td>
<td>Supporting Protocol</td>
</tr>

<tr>
<td>Handles Packet Delivery</td>
<td>Handles Diagnostics</td>
</tr>
</table>

<h4>Real Life Example</h4>

<p>
If a courier service cannot deliver a package because the address is incorrect, it sends a notification to the sender. Similarly, ICMP informs the sender when packet delivery fails.
</p>

<h4>Summary</h4>

<p>
ICMP is a Network Layer protocol used for error reporting and network diagnostics. Ping and Traceroute are common applications of ICMP.
</p>

`;

let arpContent = `

<h3>Address Resolution Protocol (ARP)</h3>

<p>
Address Resolution Protocol (ARP) is one of the most important protocols used in computer networks. ARP works between the Network Layer and Data Link Layer and is responsible for finding the physical address (MAC Address) of a device when its logical address (IP Address) is known.
</p>

<p>
Computers communicate using IP addresses at the Network Layer, but actual data transmission on a local network takes place using MAC addresses. Therefore, before sending data, a device must know the MAC address of the destination device. ARP helps in obtaining this information.
</p>

<h4>Definition of ARP</h4>

<p>
Address Resolution Protocol (ARP) is a protocol used to map an IP address to its corresponding MAC address in a local network.
</p>

<h4>Why ARP is Needed</h4>

<p>
Suppose Computer A wants to send data to Computer B on the same network. Computer A knows the IP address of Computer B but does not know its MAC address. Since actual communication occurs through MAC addresses, Computer A must first find the MAC address of Computer B. ARP performs this task.
</p>

<h4>Functions of ARP</h4>

<p>
1. Converts IP addresses into MAC addresses.</p>

<p>
2. Helps local network communication.</p>

<p>
3. Maintains ARP cache for faster communication.</p>

<p>
4. Reduces network delays by storing previously resolved addresses.</p>

<h4>How ARP Works</h4>

<p>
The working of ARP can be explained in the following steps:
</p>

<p>
Step 1: The source device wants to communicate with another device and knows its IP address.</p>

<p>
Step 2: The source device checks its ARP Cache to see whether the MAC address is already stored.</p>

<p>
Step 3: If the MAC address is not found, the device broadcasts an ARP Request to all devices in the network.</p>

<p>
Step 4: The device with the matching IP address sends an ARP Reply containing its MAC address.</p>

<p>
Step 5: The source device stores the received MAC address in its ARP Cache.</p>

<p>
Step 6: Data transmission begins using the MAC address.</p>

<h4>ARP Request</h4>

<p>
An ARP Request is a broadcast message sent to all devices on the local network asking, "Who has this IP address?"
</p>

<h4>ARP Reply</h4>

<p>
An ARP Reply is a unicast message sent by the target device containing its MAC address.
</p>

<h4>ARP Cache</h4>

<p>
ARP Cache is a temporary table stored in memory that contains recently resolved IP-to-MAC address mappings.
</p>

<p>
Using the ARP Cache improves network performance because devices do not need to send ARP requests repeatedly.
</p>

<h4>Example of ARP</h4>

<p>
Suppose Computer A has IP address 192.168.1.10 and wants to send data to Computer B with IP address 192.168.1.20.
</p>

<p>
Computer A knows only the IP address of Computer B.</p>

<p>
Computer A sends an ARP Request asking "Who has IP address 192.168.1.20?"</p>

<p>
Computer B replies with its MAC address.</p>

<p>
Computer A stores the MAC address and starts communication.</p>

<h4>Advantages of ARP</h4>

<p>
1. Enables communication within local networks.</p>

<p>
2. Automatically discovers MAC addresses.</p>

<p>
3. Reduces manual configuration.</p>

<p>
4. Improves communication efficiency.</p>

<h4>Limitations of ARP</h4>

<p>
1. Works only within local networks.</p>

<p>
2. Broadcast requests increase network traffic.</p>

<p>
3. Vulnerable to ARP Spoofing attacks.</p>

<h4>Difference Between IP Address and MAC Address</h4>

<table class = "notes-table">
<tr>
<th>Feature</th>
<th>IP Address</th>
<th>MAC Address</th>
</tr>

<tr>
<td>Type</td>
<td>Logical Address</td>
<td>Physical Address</td>
</tr>

<tr>
<td>Layer</td>
<td>Network Layer</td>
<td>Data Link Layer</td>
</tr>

<tr>
<td>Assigned By</td>
<td>Network Administrator / ISP</td>
<td>Manufacturer</td>
</tr>

<tr>
<td>Changes</td>
<td>Can Change</td>
<td>Usually Fixed</td>
</tr>

<tr>
<td>Purpose</td>
<td>Routing</td>
<td>Local Delivery</td>
</tr>
</table>

<h4>Real-Life Example</h4>

<p>
Suppose you know your friend's name but do not know their house number. Before delivering a letter, you must find their exact address. Similarly, ARP finds the MAC address corresponding to an IP address before data can be delivered.
</p>

<h4>Summary</h4>

<p>
ARP is responsible for translating IP addresses into MAC addresses. It enables devices within a local network to communicate efficiently and is essential for Ethernet-based communication.
</p>

<p>
Address Resolution Protocol (ARP) is used to map an IP address to its corresponding MAC address. It works by sending ARP Requests and receiving ARP Replies within a local network.
</p>

`;

let dhcpContent = `

<h3>Dynamic Host Configuration Protocol (DHCP)</h3>

<p>
Dynamic Host Configuration Protocol (DHCP) is a Network Management Protocol used to automatically assign IP addresses and other network configuration information to devices connected to a network.
</p>

<p>
Without DHCP, network administrators would have to manually configure IP addresses for every device, which would be time-consuming and error-prone. DHCP simplifies this process by automatically assigning network settings.
</p>

<h4>Definition of DHCP</h4>

<p>
DHCP is a protocol that automatically provides IP addresses and network configuration information to devices on a network.
</p>

<h4>Need for DHCP</h4>

<p>
In modern networks, hundreds or thousands of devices connect and disconnect frequently. Assigning IP addresses manually would be difficult.
</p>

<p>
DHCP solves this problem by automatically managing IP address allocation.
</p>

<h4>Functions of DHCP</h4>

<p>
1. Automatically assigns IP addresses.</p>

<p>
2. Assigns Subnet Mask.</p>

<p>
3. Assigns Default Gateway.</p>

<p>
4. Assigns DNS Server Information.</p>

<p>
5. Prevents IP Address Conflicts.</p>

<p>
6. Simplifies Network Administration.</p>

<h4>DHCP Components</h4>

<h4>1. DHCP Server</h4>

<p>
A DHCP Server is responsible for assigning IP addresses and network configuration information to clients.
</p>

<h4>2. DHCP Client</h4>

<p>
A DHCP Client is a device that requests network configuration from the DHCP Server.
</p>

<h4>3. IP Address Pool</h4>

<p>
A range of IP addresses maintained by the DHCP Server for assignment to clients.
</p>

<h4>Working of DHCP</h4>

<p>
DHCP follows a four-step process known as DORA.
</p>

<h4>D - Discover</h4>

<p>
The client broadcasts a DHCP Discover message to locate available DHCP servers.
</p>

<h4>O - Offer</h4>

<p>
The DHCP Server responds with a DHCP Offer containing an available IP address.
</p>

<h4>R - Request</h4>

<p>
The client sends a DHCP Request message indicating acceptance of the offered address.
</p>

<h4>A - Acknowledge</h4>

<p>
The DHCP Server sends a DHCP Acknowledge message confirming the assignment.
</p>

<h4>DHCP Lease</h4>

<p>
The assigned IP address is provided for a specific period known as the Lease Time. After the lease expires, the client must renew the address.
</p>

<h4>Advantages of DHCP</h4>

<p>
1. Automatic IP address assignment.</p>

<p>
2. Reduces administrative workload.</p>

<p>
3. Prevents duplicate IP addresses.</p>

<p>
4. Simplifies network management.</p>

<p>
5. Supports large networks efficiently.</p>

<h4>Disadvantages of DHCP</h4>

<p>
1. Dependency on DHCP Server.</p>

<p>
2. Server failure may affect clients.</p>

<p>
3. Additional security considerations.</p>

<h4>Static IP vs Dynamic IP</h4>

<table class = "notes-table">
<tr>
<th>Feature</th>
<th>Static IP</th>
<th>Dynamic IP</th>
</tr>

<tr>
<td>Assignment</td>
<td>Manual</td>
<td>Automatic</td>
</tr>

<tr>
<td>Administration</td>
<td>More Effort</td>
<td>Less Effort</td>
</tr>

<tr>
<td>Address Changes</td>
<td>Rarely Changes</td>
<td>May Change</td>
</tr>

<tr>
<td>Suitable For</td>
<td>Servers</td>
<td>Client Devices</td>
</tr>

<tr>
<td>Configuration</td>
<td>Manual Setup</td>
<td>DHCP Server</td>
</tr>
</table>

<h4>Applications of DHCP</h4>

<p>
1. Home Networks.</p>

<p>
2. School and College Networks.</p>

<p>
3. Corporate Networks.</p>

<p>
4. Wi-Fi Networks.</p>

<p>
5. Data Centers.</p>

<h4>Real-Life Example</h4>

<p>
When you connect your smartphone to a Wi-Fi network, you usually do not enter an IP address manually. The DHCP Server automatically assigns an IP address, subnet mask, gateway address, and DNS information. This allows the device to access the network immediately.
</p>

<h4>Difference Between ARP and DHCP</h4>

<table class = "notes-table">
<tr>
<th>Feature</th>
<th>ARP</th>
<th>DHCP</th>
</tr>

<tr>
<td>Full Form</td>
<td>Address Resolution Protocol</td>
<td>Dynamic Host Configuration Protocol</td>
</tr>

<tr>
<td>Main Purpose</td>
<td>Find MAC Address</td>
<td>Assign IP Address</td>
</tr>

<tr>
<td>Works With</td>
<td>IP to MAC Mapping</td>
<td>Network Configuration</td>
</tr>

<tr>
<td>Communication Type</td>
<td>Request and Reply</td>
<td>DORA Process</td>
</tr>

<tr>
<td>Used For</td>
<td>Local Communication</td>
<td>Automatic Configuration</td>
</tr>
</table>

<h4>Summary</h4>

<p>
DHCP is an important protocol that automatically assigns IP addresses and network settings to devices. It reduces manual configuration, prevents address conflicts, and simplifies network management.
</p>

<p>
Dynamic Host Configuration Protocol (DHCP) automatically assigns IP addresses, subnet masks, gateways, and DNS information to network devices. It uses the DORA process: Discover, Offer, Request, and Acknowledge.
</p>

`;

let transportLayerIntroContent = `

<h3>Transport Layer</h3>

<p>
The Transport Layer is the fourth layer of the OSI Model. It acts as a bridge between the Application Layer and the Network Layer. The main responsibility of the Transport Layer is to provide end-to-end communication between processes running on different devices.
</p>

<p>
While the Network Layer is responsible for delivering packets from one computer to another, the Transport Layer ensures that data reaches the correct application or process on the destination computer.
</p>

<h4>Definition of Transport Layer</h4>

<p>
The Transport Layer is responsible for end-to-end communication, process-to-process delivery, error control, flow control, segmentation, and reassembly of data.
</p>

<h4>Position of Transport Layer in OSI Model</h4>

<p>
Application Layer</p>

<p>
Presentation Layer</p>

<p>
Session Layer</p>

<p>
Transport Layer</p>

<p>
Network Layer</p>

<p>
Data Link Layer</p>

<p>
Physical Layer</p>

<h4>Functions of Transport Layer</h4>

<p>
1. Process-to-Process Delivery.</p>

<p>
2. Segmentation and Reassembly.</p>

<p>
3. Error Control.</p>

<p>
4. Flow Control.</p>

<p>
5. Connection Management.</p>

<p>
6. Multiplexing and Demultiplexing.</p>

<h4>Segmentation</h4>

<p>
Large messages received from the Application Layer are divided into smaller segments before transmission.
</p>

<h4>Reassembly</h4>

<p>
The destination Transport Layer combines received segments to reconstruct the original message.
</p>

<h4>Error Control</h4>

<p>
The Transport Layer detects and handles transmission errors to ensure reliable communication.
</p>

<h4>Flow Control</h4>

<p>
Flow control prevents a fast sender from overwhelming a slow receiver.
</p>

<h4>Protocols of Transport Layer</h4>

<p>
1. TCP (Transmission Control Protocol).</p>

<p>
2. UDP (User Datagram Protocol).</p>

<p>
3. SCTP (Stream Control Transmission Protocol).</p>

<h4>Importance of Transport Layer</h4>

<p>
The Transport Layer ensures reliable and efficient communication between applications running on different computers.
</p>

<h4>Real-Life Example</h4>

<p>
Imagine sending a large book through a courier service. The book is divided into multiple packages, delivered separately, and then reassembled at the destination. Similarly, the Transport Layer divides data into segments and reassembles it at the destination.
</p>

<h4>Summary</h4>

<p>
The Transport Layer is the fourth layer of the OSI Model responsible for process-to-process delivery, segmentation, error control, flow control, and end-to-end communication.
</p>

`;

let processToProcessDeliveryContent = `

<h3>Process-to-Process Delivery</h3>

<p>
One of the most important responsibilities of the Transport Layer is Process-to-Process Delivery. While the Network Layer delivers packets from one computer to another, the Transport Layer ensures that data reaches the correct application or process on the destination computer.
</p>

<p>
A single computer may run multiple applications simultaneously such as a web browser, email client, video conferencing software, and file transfer application. The Transport Layer identifies which application should receive incoming data.
</p>

<h4>Definition</h4>

<p>
Process-to-Process Delivery is the delivery of data from a specific process on the source device to the corresponding process on the destination device.
</p>

<h4>Need for Process-to-Process Delivery</h4>

<p>
1. Multiple applications run simultaneously.</p>

<p>
2. Data must reach the correct application.</p>

<p>
3. Prevents confusion between applications.</p>

<p>
4. Supports multitasking environments.</p>

<h4>Port Numbers</h4>

<p>
The Transport Layer uses Port Numbers to identify applications.
</p>

<p>
Examples:</p>

<p>
HTTP - Port 80</p>

<p>
HTTPS - Port 443</p>

<p>
FTP - Port 21</p>

<p>
SMTP - Port 25</p>

<h4>Multiplexing</h4>

<p>
Multiplexing allows multiple applications to send data through a single network connection.
</p>

<h4>Demultiplexing</h4>

<p>
Demultiplexing delivers received data to the correct application using port numbers.
</p>

<h4>Example</h4>

<p>
Suppose a user is browsing a website while downloading a file and checking emails. The Transport Layer uses port numbers to ensure that web data reaches the browser, file data reaches the download manager, and email data reaches the email application.
</p>

<h4>Summary</h4>

<p>
Process-to-Process Delivery is a Transport Layer function that delivers data to the correct application using port numbers.
</p>

`;

let udpContent = `

<h3>User Datagram Protocol (UDP)</h3>

<p>
User Datagram Protocol (UDP) is a Transport Layer protocol that provides connectionless communication between applications. It is designed for applications that require fast data transmission rather than guaranteed delivery.
</p>

<p>
UDP does not establish a connection before sending data and does not perform error recovery, sequencing, or acknowledgment.
</p>

<h4>Definition of UDP</h4>

<p>
UDP is a connectionless Transport Layer protocol that provides fast but unreliable communication.
</p>

<h4>Characteristics of UDP</h4>

<p>
1. Connectionless Protocol.</p>

<p>
2. Fast Transmission.</p>

<p>
3. No Acknowledgment.</p>

<p>
4. No Flow Control.</p>

<p>
5. No Error Recovery.</p>

<p>
6. Low Overhead.</p>

<h4>How UDP Works</h4>

<p>
The sender transmits data packets called datagrams directly to the destination without establishing a connection.
</p>

<p>
The receiver accepts the datagrams without sending acknowledgments.
</p>

<h4>Advantages of UDP</h4>

<p>
1. Faster communication.</p>

<p>
2. Lower overhead.</p>

<p>
3. Suitable for real-time applications.</p>

<p>
4. Simple implementation.</p>

<h4>Disadvantages of UDP</h4>

<p>
1. No guaranteed delivery.</p>

<p>
2. No sequencing.</p>

<p>
3. No retransmission of lost packets.</p>

<p>
4. Less reliable than TCP.</p>

<h4>Applications of UDP</h4>

<p>
1. Video Streaming.</p>

<p>
2. Online Gaming.</p>

<p>
3. Voice over IP (VoIP).</p>

<p>
4. DNS.</p>

<p>
5. Live Broadcasting.</p>

<h4>Summary</h4>

<p>
UDP is a connectionless Transport Layer protocol that provides fast communication without guaranteed delivery.
</p>

`;

let tcpContent = `

<h3>Transmission Control Protocol (TCP)</h3>

<p>
Transmission Control Protocol (TCP) is the most widely used Transport Layer protocol. It provides reliable, connection-oriented communication between applications.
</p>

<p>
TCP ensures that all data reaches the destination correctly, in sequence, and without duplication.
</p>

<h4>Definition of TCP</h4>

<p>
TCP is a connection-oriented Transport Layer protocol that provides reliable and error-free communication.
</p>

<h4>Characteristics of TCP</h4>

<p>
1. Connection-Oriented.</p>

<p>
2. Reliable Communication.</p>

<p>
3. Error Detection.</p>

<p>
4. Error Recovery.</p>

<p>
5. Flow Control.</p>

<p>
6. Sequencing.</p>

<h4>TCP Three-Way Handshake</h4>

<p>
Before communication begins, TCP establishes a connection using a Three-Way Handshake.
</p>

<p>
Step 1: SYN</p>

<p>
Step 2: SYN-ACK</p>

<p>
Step 3: ACK</p>

<h4>Advantages of TCP</h4>

<p>
1. Reliable communication.</p>

<p>
2. Error recovery.</p>

<p>
3. Ordered delivery.</p>

<p>
4. Flow control support.</p>

<p>
5. Congestion control support.</p>

<h4>Applications of TCP</h4>

<p>
1. Web Browsing.</p>

<p>
2. Email Services.</p>

<p>
3. File Transfer.</p>

<p>
4. Online Banking.</p>

<p>
5. E-Commerce Websites.</p>

<h4>Difference Between TCP and UDP</h4>

<table class = "notes-table">
<tr>
<th>Feature</th>
<th>TCP</th>
<th>UDP</th>
</tr>

<tr>
<td>Connection</td>
<td>Connection-Oriented</td>
<td>Connectionless</td>
</tr>

<tr>
<td>Reliability</td>
<td>Reliable</td>
<td>Unreliable</td>
</tr>

<tr>
<td>Speed</td>
<td>Slower</td>
<td>Faster</td>
</tr>

<tr>
<td>Acknowledgment</td>
<td>Yes</td>
<td>No</td>
</tr>

<tr>
<td>Flow Control</td>
<td>Available</td>
<td>Not Available</td>
</tr>

<tr>
<td>Examples</td>
<td>HTTP, HTTPS, FTP</td>
<td>DNS, VoIP, Streaming</td>
</tr>

</table>

<h4>Summary</h4>

<p>
TCP is a reliable, connection-oriented Transport Layer protocol that provides error-free and ordered communication.
</p>

`;

let stcpContent = `

<h3>Stream Control Transmission Protocol (SCTP)</h3>

<p>
Stream Control Transmission Protocol (SCTP) is a Transport Layer protocol that combines the advantages of both TCP and UDP. It provides reliable communication like TCP while supporting multiple streams and multiple paths for data transmission.
</p>

<p>
SCTP was developed by the Internet Engineering Task Force (IETF) to support applications such as telecommunication signaling, Voice over IP (VoIP), multimedia communication, and other applications that require reliable and efficient data transfer.
</p>

<h4>Definition of SCTP</h4>

<p>
SCTP is a Transport Layer protocol that provides reliable, message-oriented, and connection-oriented communication with support for multiple streams and multihoming.
</p>

<h4>Why SCTP Was Developed</h4>

<p>
TCP provides reliable communication but suffers from a problem called Head-of-Line Blocking. UDP is fast but unreliable. SCTP was developed to overcome these limitations and provide better performance for modern network applications.
</p>

<h4>Features of SCTP</h4>

<p>
1. Reliable Data Transfer.</p>

<p>
2. Connection-Oriented Communication.</p>

<p>
3. Message-Oriented Communication.</p>

<p>
4. Multi-Streaming Support.</p>

<p>
5. Multi-Homing Support.</p>

<p>
6. Error Detection and Recovery.</p>

<p>
7. Congestion Control.</p>

<h4>What is Multi-Streaming?</h4>

<p>
In SCTP, data can be divided into multiple independent streams. If a packet is delayed in one stream, communication in other streams continues without interruption.
</p>

<p>
This improves performance and reduces delays.
</p>

<h4>What is Multi-Homing?</h4>

<p>
Multi-Homing means a device can have multiple IP addresses associated with a single SCTP connection.
</p>

<p>
If one network path fails, SCTP automatically switches to another available path, improving reliability.
</p>

<h4>SCTP Association</h4>

<p>
Unlike TCP, which uses a connection, SCTP establishes an association between communicating devices.
</p>

<p>
The association is created using a Four-Way Handshake process.
</p>

<h4>SCTP Four-Way Handshake</h4>

<p>
Step 1: INIT</p>

<p>
The sender requests an SCTP association.</p>

<p>
Step 2: INIT ACK</p>

<p>
The receiver acknowledges the request.</p>

<p>
Step 3: COOKIE ECHO</p>

<p>
The sender sends a cookie received from the receiver.</p>

<p>
Step 4: COOKIE ACK</p>

<p>
The receiver confirms the association.</p>

<h4>Advantages of SCTP</h4>

<p>
1. Reliable communication.</p>

<p>
2. Supports multiple streams.</p>

<p>
3. Supports multiple network paths.</p>

<p>
4. Improved fault tolerance.</p>

<p>
5. Better performance than TCP in some applications.</p>

<p>
6. Reduces communication delays.</p>

<h4>Disadvantages of SCTP</h4>

<p>
1. More complex than TCP and UDP.</p>

<p>
2. Limited support in some operating systems.</p>

<p>
3. Less commonly used compared to TCP.</p>

<h4>Applications of SCTP</h4>

<p>
1. Telecommunication Networks.</p>

<p>
2. Signaling Systems.</p>

<p>
3. Voice over IP (VoIP).</p>

<p>
4. Multimedia Applications.</p>

<p>
5. Real-Time Communication Systems.</p>

<h4>Difference Between TCP and SCTP</h4>

<table class = "notes-table">
<tr>
<th>Feature</th>
<th>TCP</th>
<th>SCTP</th>
</tr>

<tr>
<td>Communication Type</td>
<td>Byte-Oriented</td>
<td>Message-Oriented</td>
</tr>

<tr>
<td>Multi-Streaming</td>
<td>No</td>
<td>Yes</td>
</tr>

<tr>
<td>Multi-Homing</td>
<td>No</td>
<td>Yes</td>
</tr>

<tr>
<td>Reliability</td>
<td>Reliable</td>
<td>Reliable</td>
</tr>

<tr>
<td>Connection Setup</td>
<td>Three-Way Handshake</td>
<td>Four-Way Handshake</td>
</tr>

<tr>
<td>Fault Tolerance</td>
<td>Normal</td>
<td>High</td>
</tr>
</table>

<h4>Difference Between UDP and SCTP</h4>

<table class = "notes-table">
<tr>
<th>Feature</th>
<th>UDP</th>
<th>SCTP</th>
</tr>

<tr>
<td>Connection</td>
<td>Connectionless</td>
<td>Connection-Oriented</td>
</tr>

<tr>
<td>Reliability</td>
<td>No</td>
<td>Yes</td>
</tr>

<tr>
<td>Error Recovery</td>
<td>No</td>
<td>Yes</td>
</tr>

<tr>
<td>Sequencing</td>
<td>No</td>
<td>Yes</td>
</tr>

<tr>
<td>Multi-Streaming</td>
<td>No</td>
<td>Yes</td>
</tr>
</table>

<h4>Real-Life Example</h4>

<p>
Imagine a person traveling to another city using multiple roads. If one road is blocked, the person immediately uses another route. Similarly, SCTP uses Multi-Homing to switch to another network path when one path fails.
</p>

<h4>Summary</h4>

<p>
SCTP is an advanced Transport Layer protocol that provides reliable communication, Multi-Streaming, and Multi-Homing. It combines the advantages of TCP and UDP while providing better fault tolerance and performance.
</p>


<p>
SCTP (Stream Control Transmission Protocol) is a reliable Transport Layer protocol that supports Multi-Streaming and Multi-Homing. It provides better fault tolerance and efficient communication than traditional TCP.
</p>

`;

let congestionControlContent = `

<h3>Congestion Control</h3>

<p>
Congestion Control is a technique used in computer networks to prevent excessive traffic from overwhelming the network. When too many packets are transmitted at the same time, routers and network devices become overloaded, resulting in packet loss, delays, and reduced performance. Congestion Control helps maintain efficient communication by regulating the amount of data entering the network.
</p>

<h4>Definition of Congestion Control</h4>

<p>
Congestion Control is the process of monitoring and controlling network traffic to prevent network congestion and ensure efficient data transmission.
</p>

<h4>What is Network Congestion?</h4>

<p>
Network Congestion occurs when the number of packets entering the network exceeds the network's capacity to handle them.
</p>

<p>
As a result:</p>

<p>
1. Packet loss may occur.</p>

<p>
2. Delay increases.</p>

<p>
3. Network performance decreases.</p>

<p>
4. Retransmissions increase.</p>

<p>
5. Communication becomes slower.</p>

<h4>Causes of Congestion</h4>

<p>
1. Excessive Network Traffic.</p>

<p>
2. Limited Bandwidth.</p>

<p>
3. Slow Routers.</p>

<p>
4. Large Number of Users.</p>

<p>
5. Broadcast Storms.</p>

<p>
6. High-Speed Senders and Slow Receivers.</p>

<h4>Effects of Congestion</h4>

<p>
1. Increased Delay.</p>

<p>
2. Packet Loss.</p>

<p>
3. Reduced Throughput.</p>

<p>
4. Poor User Experience.</p>

<p>
5. Network Instability.</p>

<h4>Congestion Control Techniques</h4>

<h4>1. Open Loop Congestion Control</h4>

<p>
Open Loop Congestion Control attempts to prevent congestion before it occurs.
</p>

<p>
It does not continuously monitor network conditions.
</p>

<p>
Examples:</p>

<p>
1. Retransmission Policy.</p>

<p>
2. Window Policy.</p>

<p>
3. Acknowledgment Policy.</p>

<p>
4. Admission Control.</p>

<h4>2. Closed Loop Congestion Control</h4>

<p>
Closed Loop Congestion Control monitors network conditions and takes corrective actions when congestion occurs.
</p>

<p>
Examples:</p>

<p>
1. Back Pressure.</p>

<p>
2. Choke Packets.</p>

<p>
3. Explicit Congestion Notification.</p>

<h4>TCP Congestion Control</h4>

<p>
TCP includes built-in congestion control mechanisms to improve network performance.
</p>

<h4>1. Slow Start</h4>

<p>
TCP starts with a small congestion window and gradually increases the transmission rate until congestion is detected.
</p>

<h4>2. Congestion Avoidance</h4>

<p>
The growth of the congestion window becomes slower to avoid overloading the network.
</p>

<h4>3. Fast Retransmit</h4>

<p>
Lost packets are retransmitted immediately without waiting for a timeout.
</p>

<h4>4. Fast Recovery</h4>

<p>
TCP quickly recovers from packet loss without returning to the initial slow start phase.
</p>

<h4>Difference Between Flow Control and Congestion Control</h4>

<table class = "notes-table">
<tr>
<th>Feature</th>
<th>Flow Control</th>
<th>Congestion Control</th>
</tr>

<tr>
<td>Purpose</td>
<td>Controls Sender and Receiver Speed</td>
<td>Controls Network Traffic</td>
</tr>

<tr>
<td>Focus</td>
<td>Receiver Capacity</td>
<td>Network Capacity</td>
</tr>

<tr>
<td>Layer</td>
<td>Transport Layer</td>
<td>Transport and Network Layers</td>
</tr>

<tr>
<td>Main Goal</td>
<td>Prevent Receiver Overload</td>
<td>Prevent Network Overload</td>
</tr>
</table>

<h4>Difference Between Open Loop and Closed Loop Congestion Control</h4>

<table class = "notes-table">
<tr>
<th>Feature</th>
<th>Open Loop</th>
<th>Closed Loop</th>
</tr>

<tr>
<td>Approach</td>
<td>Prevention</td>
<td>Detection and Correction</td>
</tr>

<tr>
<td>Monitoring</td>
<td>No Continuous Monitoring</td>
<td>Continuous Monitoring</td>
</tr>

<tr>
<td>Complexity</td>
<td>Simple</td>
<td>More Complex</td>
</tr>

<tr>
<td>Reaction to Congestion</td>
<td>Prevents Before Occurrence</td>
<td>Acts After Detection</td>
</tr>
</table>

<h4>Real-Life Example</h4>

<p>
Imagine a highway designed for 500 vehicles per hour. If 2,000 vehicles try to use the highway simultaneously, traffic jams occur. Traffic police may control vehicle entry to reduce congestion. Similarly, Congestion Control regulates network traffic to avoid network overload.
</p>

<h4>Summary</h4>

<p>
Congestion Control is a mechanism used to prevent and manage network overload. It improves network efficiency, reduces packet loss, and ensures smooth communication by controlling the amount of data transmitted through the network.
</p>


<p>
Congestion Control is the process of preventing and managing excessive network traffic. It improves network performance by reducing packet loss, delays, and network overload.
</p>

`;


let applicationLayerIntroContent = `

<h3>Application Layer</h3>

<p>
The Application Layer is the topmost layer of the OSI (Open Systems Interconnection) Model. It acts as an interface between the user and the network. This layer provides various network services directly to end users and application programs.
</p>

<p>
Whenever we browse websites, send emails, transfer files, use social media, attend online classes, watch videos, or access cloud services, we are using services provided by the Application Layer.
</p>

<p>
The Application Layer does not actually perform the communication itself. Instead, it provides protocols and services that allow application software to communicate over a network.
</p>

<h4>Definition of Application Layer</h4>

<p>
The Application Layer is the seventh and highest layer of the OSI Model that provides network services directly to end users and application programs.
</p>

<h4>Position of Application Layer in OSI Model</h4>

<p>
The Application Layer is located at the top of the OSI Model.
</p>

<table class = "notes-table">
<tr>
<th>Layer Number</th>
<th>OSI Layer</th>
</tr>

<tr>
<td>7</td>
<td>Application Layer</td>
</tr>

<tr>
<td>6</td>
<td>Presentation Layer</td>
</tr>

<tr>
<td>5</td>
<td>Session Layer</td>
</tr>

<tr>
<td>4</td>
<td>Transport Layer</td>
</tr>

<tr>
<td>3</td>
<td>Network Layer</td>
</tr>

<tr>
<td>2</td>
<td>Data Link Layer</td>
</tr>

<tr>
<td>1</td>
<td>Physical Layer</td>
</tr>

</table>

<h4>Why Application Layer is Important</h4>

<p>
Without the Application Layer, users would not be able to access network services. It acts as a bridge between application software and the underlying network infrastructure.
</p>

<p>
This layer allows users to interact with network resources without understanding the technical details of networking.
</p>

<h4>Main Functions of Application Layer</h4>

<p>
1. Provides user access to network services.</p>

<p>
2. Supports web browsing.</p>

<p>
3. Supports email communication.</p>

<p>
4. Supports file transfer.</p>

<p>
5. Supports remote login.</p>

<p>
6. Supports resource sharing.</p>

<p>
7. Provides network management services.</p>

<p>
8. Supports distributed applications.</p>

<h4>Services Provided by the Application Layer</h4>

<h4>1. File Transfer Service</h4>

<p>
The Application Layer provides facilities to transfer files between computers connected through a network.
</p>

<p>
Example: FTP (File Transfer Protocol).
</p>

<h4>2. Electronic Mail Service</h4>

<p>
The Application Layer supports sending and receiving electronic mail messages.
</p>

<p>
Example: SMTP and POP.
</p>

<h4>3. Remote Login Service</h4>

<p>
Users can access and control remote computers through network connections.
</p>

<p>
Example: Telnet.
</p>

<h4>4. Web Browsing Service</h4>

<p>
Users can access web pages and websites through browsers.
</p>

<p>
Example: HTTP and HTTPS.
</p>

<h4>5. Name Resolution Service</h4>

<p>
The Application Layer translates domain names into IP addresses.
</p>

<p>
Example: DNS (Domain Name System).
</p>

<h4>Application Layer Protocols</h4>

<p>
A protocol is a set of rules that governs communication between devices.
</p>

<p>
Some common Application Layer protocols are:
</p>

<table class = "notes-table">
<tr>
<th>Protocol</th>
<th>Full Form</th>
<th>Purpose</th>
</tr>

<tr>
<td>HTTP</td>
<td>Hyper Text Transfer Protocol</td>
<td>Web Browsing</td>
</tr>

<tr>
<td>HTTPS</td>
<td>Hyper Text Transfer Protocol Secure</td>
<td>Secure Web Browsing</td>
</tr>

<tr>
<td>FTP</td>
<td>File Transfer Protocol</td>
<td>File Transfer</td>
</tr>

<tr>
<td>SMTP</td>
<td>Simple Mail Transfer Protocol</td>
<td>Sending Emails</td>
</tr>

<tr>
<td>POP3</td>
<td>Post Office Protocol Version 3</td>
<td>Receiving Emails</td>
</tr>

<tr>
<td>DNS</td>
<td>Domain Name System</td>
<td>Name Resolution</td>
</tr>

<tr>
<td>Telnet</td>
<td>Telecommunication Network</td>
<td>Remote Login</td>
</tr>

<tr>
<td>NFS</td>
<td>Network File System</td>
<td>File Sharing</td>
</tr>

</table>

<h4>How Application Layer Works</h4>

<p>
Suppose a user wants to open a website.
</p>

<p>
Step 1: The user enters the website address in a browser.</p>

<p>
Step 2: DNS converts the domain name into an IP address.</p>

<p>
Step 3: HTTP sends a request to the web server.</p>

<p>
Step 4: The server processes the request.</p>

<p>
Step 5: The server sends the webpage back to the browser.</p>

<p>
Step 6: The browser displays the webpage to the user.</p>

<p>
All these activities involve Application Layer protocols.
</p>

<h4>Examples of Application Layer Usage in Daily Life</h4>

<p>
1. Opening Google in a browser.</p>

<p>
2. Sending an email through Gmail.</p>

<p>
3. Uploading files to Google Drive.</p>

<p>
4. Downloading documents from a website.</p>

<p>
5. Attending online classes.</p>

<p>
6. Using WhatsApp Web.</p>

<p>
7. Accessing cloud storage services.</p>

<h4>Advantages of Application Layer</h4>

<p>
1. Provides direct user interaction with network services.</p>

<p>
2. Supports multiple applications.</p>

<p>
3. Simplifies communication over networks.</p>

<p>
4. Provides resource sharing facilities.</p>

<p>
5. Enables Internet-based services.</p>

<p>
6. Makes networking user-friendly.</p>

<h4>Difference Between Application Layer and Transport Layer</h4>

<table class = "notes-table">

<tr>
<th>Application Layer</th>
<th>Transport Layer</th>
</tr>

<tr>
<td>Provides services to users</td>
<td>Provides end-to-end communication</td>
</tr>

<tr>
<td>Topmost layer</td>
<td>Middle layer</td>
</tr>

<tr>
<td>Works with applications</td>
<td>Works with data transmission</td>
</tr>

<tr>
<td>Uses protocols like HTTP and FTP</td>
<td>Uses protocols like TCP and UDP</td>
</tr>

</table>

<h4>Real-Life Example</h4>

<p>
Consider a restaurant. The customer places an order through a waiter. The waiter acts as an interface between the customer and the kitchen. Similarly, the Application Layer acts as an interface between the user and the network services.
</p>

<h4>Summary</h4>

<p>
The Application Layer is the highest layer of the OSI Model and provides network services directly to users and application programs. It supports web browsing, email communication, file transfer, remote login, and many other Internet services through various protocols such as HTTP, FTP, SMTP, DNS, and Telnet.
</p>

<p>
The Application Layer is the seventh layer of the OSI Model that provides network services directly to end users. It supports services such as web browsing, email communication, file transfer, remote login, and domain name resolution using protocols like HTTP, FTP, SMTP, DNS, and Telnet.
</p>

`;


let clientServerModelContent = `

<h3>Client-Server Model</h3>

<p>
The Client-Server Model is one of the most widely used network communication models in computer networks. It is a distributed application architecture in which one computer, called the Client, requests services or resources, and another computer, called the Server, provides those services or resources.
</p>

<p>
Almost every Internet service we use today is based on the Client-Server Model. When we open a website, send an email, watch videos on YouTube, access cloud storage, or use social media, a client sends a request and a server responds with the requested information.
</p>

<h4>Definition of Client-Server Model</h4>

<p>
The Client-Server Model is a network architecture in which clients request services and servers provide those services over a network.
</p>

<h4>What is a Client?</h4>

<p>
A Client is a computer, mobile device, or software application that requests services, data, or resources from a server.
</p>

<p>
The client initiates communication and waits for a response from the server.
</p>

<h4>Examples of Clients</h4>

<p>
1. Web Browser (Chrome, Firefox, Edge).</p>

<p>
2. Mobile Applications.</p>

<p>
3. Email Applications.</p>

<p>
4. FTP Client Software.</p>

<p>
5. Online Gaming Applications.</p>

<h4>What is a Server?</h4>

<p>
A Server is a computer or software application that provides services, data, or resources to clients over a network.
</p>

<p>
A server continuously waits for requests from clients and processes those requests when they arrive.
</p>

<h4>Examples of Servers</h4>

<p>
1. Web Server.</p>

<p>
2. Mail Server.</p>

<p>
3. File Server.</p>

<p>
4. Database Server.</p>

<p>
5. DNS Server.</p>

<h4>Main Components of Client-Server Model</h4>

<p>
1. Client.</p>

<p>
2. Server.</p>

<p>
3. Network.</p>

<p>
4. Communication Protocol.</p>

<p>
5. Requested Resource.</p>

<h4>How Client-Server Model Works</h4>

<p>
The Client-Server Model follows a Request-Response mechanism.
</p>

<p>
Step 1: The client sends a request to the server.</p>

<p>
Step 2: The server receives the request.</p>

<p>
Step 3: The server processes the request.</p>

<p>
Step 4: The server prepares a response.</p>

<p>
Step 5: The server sends the response back to the client.</p>

<p>
Step 6: The client receives and displays the information.</p>

<h4>Example of Client-Server Communication</h4>

<p>
Suppose a user wants to visit www.google.com.
</p>

<p>
Step 1: The user enters the website address in a browser.</p>

<p>
Step 2: The browser acts as a client and sends a request.</p>

<p>
Step 3: Google's web server receives the request.</p>

<p>
Step 4: The server processes the request.</p>

<p>
Step 5: The server sends the webpage to the browser.</p>

<p>
Step 6: The browser displays the webpage to the user.</p>

<h4>Client-Server Architecture Diagram</h4>

<p>
Client → Request → Server
</p>

<p>
Client ← Response ← Server
</p>

<h4>Characteristics of Client-Server Model</h4>

<p>
1. Centralized Management.</p>

<p>
2. Request-Response Communication.</p>

<p>
3. Resource Sharing.</p>

<p>
4. Supports Multiple Clients.</p>

<p>
5. Scalable Architecture.</p>

<p>
6. Secure Data Management.</p>

<h4>Types of Servers</h4>

<h4>1. Web Server</h4>

<p>
Provides web pages to users through HTTP or HTTPS.
</p>

<h4>2. File Server</h4>

<p>
Stores and shares files with clients.
</p>

<h4>3. Database Server</h4>

<p>
Stores and manages databases.
</p>

<h4>4. Mail Server</h4>

<p>
Handles sending and receiving emails.
</p>

<h4>5. DNS Server</h4>

<p>
Converts domain names into IP addresses.
</p>

<h4>Advantages of Client-Server Model</h4>

<p>
1. Centralized control of resources.</p>

<p>
2. Easy maintenance and management.</p>

<p>
3. Better security.</p>

<p>
4. Efficient resource sharing.</p>

<p>
5. Supports large numbers of users.</p>

<p>
6. Easy backup and recovery.</p>

<h4>Disadvantages of Client-Server Model</h4>

<p>
1. Server failure can affect all clients.</p>

<p>
2. Higher setup cost.</p>

<p>
3. Requires dedicated server hardware.</p>

<p>
4. Network dependency.</p>

<p>
5. Heavy server load may reduce performance.</p>

<h4>Difference Between Client and Server</h4>

<table class = "notes-table">

<tr>
<th>Client</th>
<th>Server</th>
</tr>

<tr>
<td>Requests Services</td>
<td>Provides Services</td>
</tr>

<tr>
<td>Initiates Communication</td>
<td>Responds to Requests</td>
</tr>

<tr>
<td>User Side Device</td>
<td>Central System</td>
</tr>

<tr>
<td>Consumes Resources</td>
<td>Manages Resources</td>
</tr>

<tr>
<td>Usually Less Powerful</td>
<td>Usually More Powerful</td>
</tr>

<tr>
<td>Examples: Browser, Mobile App</td>
<td>Examples: Web Server, Mail Server</td>
</tr>

</table>

<h4>Difference Between Client-Server and Peer-to-Peer Model</h4>

<table class = "notes-table">

<tr>
<th>Client-Server Model</th>
<th>Peer-to-Peer Model</th>
</tr>

<tr>
<td>Centralized Architecture</td>
<td>Decentralized Architecture</td>
</tr>

<tr>
<td>Dedicated Server Available</td>
<td>No Dedicated Server</td>
</tr>

<tr>
<td>Higher Security</td>
<td>Lower Security</td>
</tr>

<tr>
<td>Easy Management</td>
<td>Difficult Management</td>
</tr>

<tr>
<td>Suitable for Large Networks</td>
<td>Suitable for Small Networks</td>
</tr>

</table>

<h4>Applications of Client-Server Model</h4>

<p>
1. Web Browsing.</p>

<p>
2. Email Systems.</p>

<p>
3. Online Banking.</p>

<p>
4. Cloud Computing.</p>

<p>
5. Social Media Platforms.</p>

<p>
6. Online Shopping Websites.</p>

<p>
7. Video Streaming Services.</p>

<p>
8. Online Learning Platforms.</p>

<h4>Real-Life Example</h4>

<p>
Consider a restaurant. Customers place orders to the waiter, and the kitchen prepares and serves the food. Here, customers act as clients and the kitchen acts as the server. Similarly, in a computer network, clients request services and servers provide them.
</p>

<h4>Summary</h4>

<p>
The Client-Server Model is a network architecture where clients request services and servers provide those services. It is widely used in web applications, email systems, cloud computing, and Internet-based services because it offers centralized management, security, and efficient resource sharing.
</p>

<p>
The Client-Server Model is a network architecture in which a client requests services and a server provides those services. It follows a request-response mechanism and is widely used for web browsing, email communication, file sharing, and online applications.
</p>

`;


let nfsContent = `

<h3>Network File System (NFS)</h3>

<p>
Network File System (NFS) is an Application Layer protocol that allows users to access files and directories stored on a remote computer as if they were stored on their own local computer. NFS enables file sharing between computers connected through a network.
</p>

<p>
NFS was originally developed by Sun Microsystems and is widely used in UNIX and Linux operating systems. It provides a simple and efficient way to share files and resources among multiple users in a network environment.
</p>

<h4>Definition of NFS</h4>

<p>
Network File System (NFS) is a distributed file system protocol that allows a client computer to access files stored on a remote server over a network as if the files were located on the client's local storage.
</p>

<h4>Why NFS is Needed</h4>

<p>
In organizations, schools, colleges, and companies, files often need to be shared among multiple users. Instead of storing duplicate copies on every computer, files can be stored on a central server and accessed through NFS.
</p>

<p>
This reduces storage requirements and makes file management easier.
</p>

<h4>Objectives of NFS</h4>

<p>
1. Share files across a network.</p>

<p>
2. Allow remote file access.</p>

<p>
3. Provide centralized file storage.</p>

<p>
4. Improve collaboration among users.</p>

<p>
5. Simplify file management.</p>

<h4>Components of NFS</h4>

<h4>1. NFS Server</h4>

<p>
The NFS Server stores files and directories that can be shared with other computers on the network.
</p>

<p>
The server manages access permissions and responds to client requests.
</p>

<h4>2. NFS Client</h4>

<p>
The NFS Client is the computer that accesses shared files from the NFS Server.
</p>

<p>
The client can read, write, create, or delete files depending on the permissions granted by the server.
</p>

<h4>3. Shared Directory</h4>

<p>
A shared directory is a folder on the NFS Server that is made available to clients over the network.
</p>

<h4>How NFS Works</h4>

<p>
NFS follows the Client-Server Model.
</p>

<p>
Step 1: The administrator creates a shared directory on the NFS Server.</p>

<p>
Step 2: The server grants access permissions to clients.</p>

<p>
Step 3: The client sends a request to access the shared directory.</p>

<p>
Step 4: The server authenticates the client.</p>

<p>
Step 5: The client mounts the remote directory.</p>

<p>
Step 6: The client accesses files as if they were stored locally.</p>

<h4>NFS Architecture</h4>

<p>
NFS Client → Request → NFS Server
</p>

<p>
NFS Client ← Response ← NFS Server
</p>

<h4>Mounting in NFS</h4>

<p>
Mounting is the process of attaching a remote file system to a local directory structure.
</p>

<p>
After mounting, users can access remote files using normal file operations such as open, read, write, and delete.
</p>

<h4>Features of NFS</h4>

<p>
1. Transparent File Access.</p>

<p>
2. Centralized File Storage.</p>

<p>
3. Remote File Sharing.</p>

<p>
4. Multi-User Access.</p>

<p>
5. Platform Independence.</p>

<p>
6. Easy File Management.</p>

<p>
7. Distributed File System Support.</p>

<h4>Advantages of NFS</h4>

<p>
1. Easy sharing of files and directories.</p>

<p>
2. Centralized storage management.</p>

<p>
3. Reduced storage duplication.</p>

<p>
4. Easy backup and maintenance.</p>

<p>
5. Improved collaboration among users.</p>

<p>
6. Efficient use of storage resources.</p>

<h4>Disadvantages of NFS</h4>

<p>
1. Depends on network availability.</p>

<p>
2. Server failure can affect all clients.</p>

<p>
3. Performance may decrease on slow networks.</p>

<p>
4. Security risks if permissions are not configured properly.</p>

<h4>Applications of NFS</h4>

<p>
1. Educational Institutions.</p>

<p>
2. Corporate Networks.</p>

<p>
3. Research Laboratories.</p>

<p>
4. Data Centers.</p>

<p>
5. Software Development Environments.</p>

<p>
6. Cloud Computing Systems.</p>

<p>
7. Shared File Storage Systems.</p>

<h4>Example of NFS</h4>

<p>
Suppose a college has a central server containing study materials. Instead of storing copies of the files on every computer, students can access the files directly from the server using NFS.
</p>

<p>
When a student opens a file, it appears as if the file is stored on the local computer, even though it actually resides on the server.
</p>

<h4>Difference Between Local File System and NFS</h4>

<table class = "notes-table">

<tr>
<th>Local File System</th>
<th>Network File System (NFS)</th>
</tr>

<tr>
<td>Files stored on local computer</td>
<td>Files stored on remote server</td>
</tr>

<tr>
<td>No network required</td>
<td>Requires network connection</td>
</tr>

<tr>
<td>Accessible only locally</td>
<td>Accessible from multiple clients</td>
</tr>

<tr>
<td>Individual storage management</td>
<td>Centralized storage management</td>
</tr>

<tr>
<td>Limited sharing capability</td>
<td>Easy file sharing</td>
</tr>

</table>

<h4>Difference Between NFS and FTP</h4>

<table class = "notes-table">

<tr>
<th>NFS</th>
<th>FTP</th>
</tr>

<tr>
<td>Provides direct access to remote files</td>
<td>Transfers files between systems</td>
</tr>

<tr>
<td>Files appear as local files</td>
<td>Files must be uploaded or downloaded</td>
</tr>

<tr>
<td>Continuous access to remote storage</td>
<td>Used mainly for file transfer</td>
</tr>

<tr>
<td>Supports remote file system mounting</td>
<td>Does not support mounting</td>
</tr>

<tr>
<td>Suitable for shared storage</td>
<td>Suitable for file exchange</td>
</tr>

</table>

<h4>Real-Life Example</h4>

<p>
Imagine a library where books are stored in one central room. Students do not need to keep copies of all books. They simply access the required book whenever needed. Similarly, NFS stores files on a central server and allows users to access them whenever required.
</p>

<h4>Summary</h4>

<p>
Network File System (NFS) is a distributed file-sharing protocol that allows clients to access files stored on a remote server as if they were local files. It provides centralized storage, easy file sharing, and efficient resource management in network environments.
</p>

<p>
Network File System (NFS) is an Application Layer protocol that allows users to access remote files and directories over a network as if they were stored locally. It follows the Client-Server Model and is widely used for centralized file sharing and storage management.
</p>

`;



let remoteLoginContent = `

<h3>Remote Login</h3>

<p>
Remote Login is a networking service that allows a user to access and control a computer located at a different geographical location through a network. Using Remote Login, a user can log in to a remote computer and perform various operations as if sitting directly in front of that computer.
</p>

<p>
Remote Login is one of the most important services provided by the Application Layer. It enables users, administrators, engineers, and organizations to manage systems from anywhere in the world without physically visiting the remote machine.
</p>

<h4>Definition of Remote Login</h4>

<p>
Remote Login is a process that allows a user to connect to, access, and control a remote computer over a network using authentication credentials such as a username and password.
</p>

<h4>Need for Remote Login</h4>

<p>
In large organizations, servers and network devices are often located in separate rooms, buildings, cities, or even countries. It is not practical to physically travel to every machine whenever maintenance or monitoring is required.
</p>

<p>
Remote Login provides a convenient solution by allowing users to access those systems through a network connection.
</p>

<h4>Objectives of Remote Login</h4>

<p>
1. Access remote computers from any location.</p>

<p>
2. Manage servers and network devices remotely.</p>

<p>
3. Reduce travel time and operational costs.</p>

<p>
4. Simplify system administration.</p>

<p>
5. Enable remote troubleshooting and maintenance.</p>

<p>
6. Support work-from-home and remote working environments.</p>

<h4>How Remote Login Works</h4>

<p>
Remote Login follows a client-server architecture.
</p>

<p>
Step 1: The user launches a remote login application on the client computer.</p>

<p>
Step 2: The client sends a connection request to the remote computer.</p>

<p>
Step 3: The remote system verifies the user's identity using a username and password.</p>

<p>
Step 4: After successful authentication, a remote session is established.</p>

<p>
Step 5: The user can execute commands and access resources on the remote computer.</p>

<p>
Step 6: The results are sent back to the user's screen through the network.</p>

<h4>Components of Remote Login</h4>

<h4>1. Client</h4>

<p>
The client is the computer from which the user initiates the remote connection.
</p>

<h4>2. Server</h4>

<p>
The server is the remote computer being accessed.
</p>

<h4>3. Network Connection</h4>

<p>
The network connection provides communication between the client and the server.
</p>

<h4>4. Authentication System</h4>

<p>
Authentication verifies the identity of the user before access is granted.
</p>

<h4>Features of Remote Login</h4>

<p>
1. Access systems from distant locations.</p>

<p>
2. Execute commands remotely.</p>

<p>
3. Manage files and directories.</p>

<p>
4. Perform system administration tasks.</p>

<p>
5. Monitor network and server performance.</p>

<p>
6. Troubleshoot problems remotely.</p>

<h4>Advantages of Remote Login</h4>

<p>
1. Saves time and travel expenses.</p>

<p>
2. Enables remote administration.</p>

<p>
3. Provides quick access to systems.</p>

<p>
4. Improves productivity.</p>

<p>
5. Supports centralized management.</p>

<p>
6. Allows access from multiple locations.</p>

<h4>Disadvantages of Remote Login</h4>

<p>
1. Requires network connectivity.</p>

<p>
2. Security risks if authentication is weak.</p>

<p>
3. Performance depends on network speed.</p>

<p>
4. Unauthorized access may occur if proper security measures are not implemented.</p>

<h4>Applications of Remote Login</h4>

<p>
1. Server Administration.</p>

<p>
2. Network Management.</p>

<p>
3. Technical Support.</p>

<p>
4. Remote Education.</p>

<p>
5. Cloud Computing.</p>

<p>
6. Data Center Management.</p>

<p>
7. Remote Office Operations.</p>

<h4>Common Remote Login Protocols</h4>

<p>
Several protocols are used for remote login:
</p>

<p>
1. Telnet.</p>

<p>
2. SSH (Secure Shell).</p>

<p>
3. Remote Desktop Protocol (RDP).</p>

<p>
4. Virtual Network Computing (VNC).</p>

<h4>Remote Login Using Telnet</h4>

<p>
Telnet is one of the earliest protocols used for remote login. It allows users to access remote computers through a command-line interface.
</p>

<p>
However, Telnet transmits data, including passwords, in plain text, making it less secure.
</p>

<h4>Remote Login Using SSH</h4>

<p>
SSH (Secure Shell) is a secure remote login protocol that encrypts communication between the client and the server.
</p>

<p>
Today, SSH is widely used because it provides strong security and protection against unauthorized access.
</p>

<h4>Difference Between Remote Login and Local Login</h4>

<table class = "notes-table">

<tr>
<th>Remote Login</th>
<th>Local Login</th>
</tr>

<tr>
<td>Accesses a remote computer</td>
<td>Accesses the local computer</td>
</tr>

<tr>
<td>Requires network connection</td>
<td>No network required</td>
</tr>

<tr>
<td>User can be anywhere</td>
<td>User must be physically present</td>
</tr>

<tr>
<td>Supports remote administration</td>
<td>Supports local administration</td>
</tr>

<tr>
<td>Uses protocols such as Telnet and SSH</td>
<td>No remote login protocol required</td>
</tr>

</table>

<h4>Difference Between Telnet and SSH</h4>

<table class = "notes-table">

<tr>
<th>Telnet</th>
<th>SSH</th>
</tr>

<tr>
<td>Data is transmitted in plain text</td>
<td>Data is encrypted</td>
</tr>

<tr>
<td>Less Secure</td>
<td>Highly Secure</td>
</tr>

<tr>
<td>Uses Port 23</td>
<td>Uses Port 22</td>
</tr>

<tr>
<td>Suitable for trusted networks</td>
<td>Suitable for public networks</td>
</tr>

<tr>
<td>Older Protocol</td>
<td>Modern Protocol</td>
</tr>

</table>

<h4>Real-Life Example</h4>

<p>
Suppose a network administrator in Lucknow needs to manage a server located in Delhi. Instead of traveling to Delhi, the administrator uses a remote login application to access the server, monitor its performance, install updates, and troubleshoot issues from the office itself.
</p>

<h4>Summary</h4>

<p>
Remote Login is a networking service that allows users to access and control remote computers through a network. It simplifies system administration, reduces operational costs, and enables efficient management of remote resources. Common remote login protocols include Telnet and SSH.
</p>

<p>
Remote Login is a service that allows a user to access and control a remote computer over a network. It follows the client-server model and is commonly implemented using protocols such as Telnet and SSH.
</p>

`;
let telnetContent = `

<h3>Telnet (Telecommunication Network)</h3>

<p>
Telnet is one of the earliest and most widely known remote login protocols used in computer networks. It allows a user to connect to and control a remote computer over a network using a command-line interface.
</p>

<p>
Telnet is an Application Layer protocol that follows the Client-Server Model. Through Telnet, a user can log in to a remote machine, execute commands, manage files, and perform administrative tasks as if sitting directly in front of the remote computer.
</p>

<p>
Although Telnet was widely used in the early days of networking, it has largely been replaced by SSH (Secure Shell) because Telnet does not provide encryption and is therefore less secure.
</p>

<h4>Definition of Telnet</h4>

<p>
Telnet is an Application Layer protocol that enables remote login and remote command execution between computers connected through a network.
</p>

<h4>Full Form of Telnet</h4>

<p>
TELNET stands for TELecommunication NETwork.
</p>

<h4>Why Telnet is Needed</h4>

<p>
Before modern remote access tools were developed, network administrators needed a way to access and manage computers located in different places.
</p>

<p>
Telnet provided a simple method for connecting to remote systems and performing administrative tasks without physically visiting the computer.
</p>

<h4>Objectives of Telnet</h4>

<p>
1. Provide remote login services.</p>

<p>
2. Allow remote command execution.</p>

<p>
3. Enable remote system administration.</p>

<p>
4. Support remote troubleshooting.</p>

<p>
5. Facilitate communication between computers.</p>

<h4>How Telnet Works</h4>

<p>
Telnet follows the Client-Server architecture.
</p>

<p>
Step 1: The user starts a Telnet client application.</p>

<p>
Step 2: The client sends a connection request to the Telnet server.</p>

<p>
Step 3: The server accepts the connection request.</p>

<p>
Step 4: The user enters login credentials.</p>

<p>
Step 5: The server authenticates the user.</p>

<p>
Step 6: A remote session is established.</p>

<p>
Step 7: The user executes commands on the remote computer.</p>

<p>
Step 8: The server processes commands and returns results.</p>

<h4>Telnet Architecture</h4>

<p>
User → Telnet Client → Network → Telnet Server → Remote System
</p>

<h4>Port Number Used by Telnet</h4>

<p>
Telnet uses Port Number 23 by default for communication.
</p>

<table class = "notes-table">

<tr>
<th>Protocol</th>
<th>Port Number</th>
</tr>

<tr>
<td>Telnet</td>
<td>23</td>
</tr>

</table>

<h4>Features of Telnet</h4>

<p>
1. Remote Login Capability.</p>

<p>
2. Command-Line Interface.</p>

<p>
3. Client-Server Communication.</p>

<p>
4. Remote Command Execution.</p>

<p>
5. Platform Independence.</p>

<p>
6. Simple Configuration.</p>

<h4>Telnet Commands</h4>

<p>
Some common Telnet commands are:
</p>

<p>
1. open</p>

<p>
2. close</p>

<p>
3. quit</p>

<p>
4. status</p>

<p>
5. display</p>

<p>
6. send</p>

<p>
7. mode</p>

<h4>Advantages of Telnet</h4>

<p>
1. Easy to use.</p>

<p>
2. Simple remote access solution.</p>

<p>
3. Low resource consumption.</p>

<p>
4. Useful for testing network services.</p>

<p>
5. Supports remote administration.</p>

<h4>Disadvantages of Telnet</h4>

<p>
1. No encryption.</p>

<p>
2. Passwords are transmitted in plain text.</p>

<p>
3. Vulnerable to hacking and eavesdropping.</p>

<p>
4. Not suitable for sensitive communications.</p>

<p>
5. Largely replaced by SSH.</p>

<h4>Security Problems in Telnet</h4>

<p>
The biggest drawback of Telnet is security.
</p>

<p>
Telnet sends usernames, passwords, and data as plain text over the network.
</p>

<p>
An attacker monitoring network traffic can easily capture and read this information.
</p>

<p>
Because of this weakness, Telnet is rarely used on public networks today.
</p>

<h4>Applications of Telnet</h4>

<p>
1. Remote Login.</p>

<p>
2. Network Device Configuration.</p>

<p>
3. Server Management.</p>

<p>
4. Network Troubleshooting.</p>

<p>
5. Testing Network Services.</p>

<p>
6. Educational and Laboratory Environments.</p>

<h4>Example of Telnet Communication</h4>

<p>
Suppose a network administrator wants to manage a server located in another city.
</p>

<p>
The administrator starts a Telnet client and connects to the server using its IP address.
</p>

<p>
After successful login, the administrator can execute commands, view system status, and manage files remotely.
</p>

<h4>Difference Between Telnet and Remote Desktop</h4>

<table class = "notes-table">

<tr>
<th>Telnet</th>
<th>Remote Desktop</th>
</tr>

<tr>
<td>Text-Based Interface</td>
<td>Graphical Interface</td>
</tr>

<tr>
<td>Command-Line Access</td>
<td>Full Desktop Access</td>
</tr>

<tr>
<td>Consumes Less Bandwidth</td>
<td>Consumes More Bandwidth</td>
</tr>

<tr>
<td>Suitable for Administrators</td>
<td>Suitable for General Users</td>
</tr>

</table>

<h4>Difference Between Telnet and SSH</h4>

<table class = "notes-table">

<tr>
<th>Feature</th>
<th>Telnet</th>
<th>SSH</th>
</tr>

<tr>
<td>Security</td>
<td>Low</td>
<td>High</td>
</tr>

<tr>
<td>Encryption</td>
<td>No</td>
<td>Yes</td>
</tr>

<tr>
<td>Password Protection</td>
<td>Plain Text</td>
<td>Encrypted</td>
</tr>

<tr>
<td>Port Number</td>
<td>23</td>
<td>22</td>
</tr>

<tr>
<td>Modern Usage</td>
<td>Rare</td>
<td>Widely Used</td>
</tr>

<tr>
<td>Data Privacy</td>
<td>Not Secure</td>
<td>Secure</td>
</tr>

</table>

<h4>Real-Life Example</h4>

<p>
Imagine controlling a television using a remote control while sitting in another room. Similarly, Telnet allows users to control and operate a remote computer through a network connection.
</p>

<h4>Summary</h4>

<p>
Telnet is an Application Layer protocol used for remote login and remote command execution. It follows the Client-Server Model and uses Port 23 for communication. Although it provides simple remote access, it lacks encryption and has significant security risks. Today, SSH is preferred over Telnet because it offers secure communication.
</p>


<p>
Telnet is an Application Layer protocol used for remote login and remote command execution. It follows the Client-Server Model and uses Port Number 23. Telnet is less secure because it transmits data in plain text and is therefore largely replaced by SSH.
</p>

`;

let ftpContent = `

<h3>File Transfer Protocol (FTP)</h3>

<p>
File Transfer Protocol (FTP) is one of the most commonly used Application Layer protocols in computer networks. It is used for transferring files between computers connected through a network such as a Local Area Network (LAN) or the Internet.
</p>

<p>
FTP allows users to upload files from their local computer to a remote server and download files from a remote server to their local computer. It provides a reliable method for sharing data, software, documents, images, videos, and other files across networks.
</p>

<h4>Definition of FTP</h4>

<p>
File Transfer Protocol (FTP) is an Application Layer protocol used for transferring files between a client and a server over a TCP/IP network.
</p>

<h4>Why FTP is Needed</h4>

<p>
In many situations, files need to be shared between computers located at different places. Instead of physically carrying storage devices, users can transfer files through a network using FTP.
</p>

<p>
FTP provides an efficient and organized way to exchange files between systems.
</p>

<h4>Objectives of FTP</h4>

<p>
1. Transfer files between computers.</p>

<p>
2. Upload files to a server.</p>

<p>
3. Download files from a server.</p>

<p>
4. Share data across networks.</p>

<p>
5. Manage files on remote systems.</p>

<p>
6. Support backup and data distribution.</p>

<h4>FTP Architecture</h4>

<p>
FTP follows the Client-Server Model.
</p>

<p>
The FTP Client requests files or services, while the FTP Server stores and manages files.
</p>

<h4>Components of FTP</h4>

<h4>1. FTP Client</h4>

<p>
The FTP Client is a software application used to connect to an FTP Server and transfer files.
</p>

<p>
Examples include FileZilla, WinSCP, and command-line FTP clients.
</p>

<h4>2. FTP Server</h4>

<p>
The FTP Server stores files and responds to client requests.
</p>

<p>
It manages user authentication and file access permissions.
</p>

<h4>3. Control Connection</h4>

<p>
The Control Connection is used for sending commands and receiving responses between the client and the server.
</p>

<h4>4. Data Connection</h4>

<p>
The Data Connection is used for the actual transfer of files.
</p>

<h4>How FTP Works</h4>

<p>
FTP communication takes place in the following steps:
</p>

<p>
Step 1: The FTP Client sends a connection request to the FTP Server.</p>

<p>
Step 2: The server verifies the username and password.</p>

<p>
Step 3: A control connection is established.</p>

<p>
Step 4: The client requests a file upload or download.</p>

<p>
Step 5: A data connection is established.</p>

<p>
Step 6: File transfer takes place.</p>

<p>
Step 7: The connection is closed after completion.</p>

<h4>FTP Port Numbers</h4>

<p>
FTP uses two TCP ports:
</p>

<table class = "notes-table">

<tr>
<th>Port Number</th>
<th>Purpose</th>
</tr>

<tr>
<td>21</td>
<td>Control Connection</td>
</tr>

<tr>
<td>20</td>
<td>Data Transfer</td>
</tr>

</table>

<h4>FTP Operations</h4>

<h4>1. Uploading Files</h4>

<p>
Uploading means transferring files from a client computer to an FTP Server.
</p>

<p>
Example: Uploading a website to a web hosting server.
</p>

<h4>2. Downloading Files</h4>

<p>
Downloading means transferring files from an FTP Server to a client computer.
</p>

<p>
Example: Downloading software from a company server.
</p>

<h4>3. File Management</h4>

<p>
FTP allows users to create, rename, delete, and organize files and folders on the server.
</p>

<h4>Features of FTP</h4>

<p>
1. File Upload and Download.</p>

<p>
2. Client-Server Communication.</p>

<p>
3. User Authentication.</p>

<p>
4. Directory Navigation.</p>

<p>
5. Large File Transfer Support.</p>

<p>
6. File Management Capabilities.</p>

<p>
7. Reliable Data Transfer.</p>

<h4>Advantages of FTP</h4>

<p>
1. Fast file transfer.</p>

<p>
2. Supports large files.</p>

<p>
3. Easy file sharing.</p>

<p>
4. Supports remote file management.</p>

<p>
5. Widely supported across platforms.</p>

<p>
6. Useful for website management.</p>

<h4>Disadvantages of FTP</h4>

<p>
1. Data is transmitted without encryption in standard FTP.</p>

<p>
2. Vulnerable to security attacks.</p>

<p>
3. User credentials can be intercepted.</p>

<p>
4. Requires network connectivity.</p>

<p>
5. More secure alternatives are available.</p>

<h4>Applications of FTP</h4>

<p>
1. Website Uploading.</p>

<p>
2. Software Distribution.</p>

<p>
3. Data Backup.</p>

<p>
4. Cloud Storage Management.</p>

<p>
5. File Sharing Between Organizations.</p>

<p>
6. Educational Resource Distribution.</p>

<p>
7. Multimedia File Transfer.</p>

<h4>Anonymous FTP</h4>

<p>
Anonymous FTP allows users to access files on a server without providing a personal username and password.
</p>

<p>
Public software repositories often use Anonymous FTP to distribute files.
</p>

<h4>Active FTP and Passive FTP</h4>

<table class = "notes-table">

<tr>
<th>Active FTP</th>
<th>Passive FTP</th>
</tr>

<tr>
<td>Server initiates data connection</td>
<td>Client initiates data connection</td>
</tr>

<tr>
<td>May face firewall issues</td>
<td>Firewall friendly</td>
</tr>

<tr>
<td>Older approach</td>
<td>Modern approach</td>
</tr>

</table>

<h4>Difference Between FTP and HTTP</h4>

<table class = "notes-table">

<tr>
<th>FTP</th>
<th>HTTP</th>
</tr>

<tr>
<td>Used for File Transfer</td>
<td>Used for Web Pages</td>
</tr>

<tr>
<td>Ports 20 and 21</td>
<td>Port 80</td>
</tr>

<tr>
<td>Supports Upload and Download</td>
<td>Mainly Delivers Web Content</td>
</tr>

<tr>
<td>File Management Available</td>
<td>No File Management</td>
</tr>

</table>

<h4>Difference Between FTP and NFS</h4>

<table class = "notes-table">

<tr>
<th>FTP</th>
<th>NFS</th>
</tr>

<tr>
<td>Transfers Files</td>
<td>Provides Remote File Access</td>
</tr>

<tr>
<td>Files are Uploaded or Downloaded</td>
<td>Files Appear as Local Files</td>
</tr>

<tr>
<td>Used for File Exchange</td>
<td>Used for Shared Storage</td>
</tr>

<tr>
<td>Connection Based Transfer</td>
<td>Remote File System Access</td>
</tr>

</table>

<h4>Real-Life Example</h4>

<p>
Suppose a web developer creates a website on a local computer. To make the website available on the Internet, the developer uploads all website files to a web hosting server using FTP. Users can then access the website through a browser.
</p>

<h4>Summary</h4>

<p>
FTP is an Application Layer protocol used for transferring files between a client and a server. It follows the Client-Server Model and uses TCP Ports 20 and 21. FTP supports uploading, downloading, and managing files over a network.
</p>

<p>
File Transfer Protocol (FTP) is an Application Layer protocol used for transferring files between computers over a network. It follows the Client-Server Model and uses Port 21 for control communication and Port 20 for data transfer.
</p>

`;

let emailSystemContent = `

<h3>Email System (Electronic Mail System)</h3>

<p>
Email (Electronic Mail) is one of the most popular and widely used communication services on the Internet. It allows users to send and receive messages, documents, images, videos, and other files electronically from one computer or mobile device to another.
</p>

<p>
The Email System is an Application Layer service that enables fast, reliable, and cost-effective communication between users located anywhere in the world.
</p>

<p>
Today, email is used in schools, colleges, businesses, government organizations, and personal communication. Popular email services include Gmail, Outlook, Yahoo Mail, and many others.
</p>

<h4>Definition of Email System</h4>

<p>
An Email System is an electronic communication system that allows users to send, receive, store, and manage messages over a computer network or the Internet.
</p>

<h4>Need for Email System</h4>

<p>
Before email, communication was mainly done through traditional postal services, which required significant time and cost.
</p>

<p>
The Email System provides instant communication and allows users to exchange information quickly and efficiently.
</p>

<h4>Objectives of Email System</h4>

<p>
1. Send electronic messages.</p>

<p>
2. Receive messages from other users.</p>

<p>
3. Transfer documents and files.</p>

<p>
4. Provide fast communication.</p>

<p>
5. Maintain message records.</p>

<p>
6. Support communication across the world.</p>

<h4>Components of an Email System</h4>

<h4>1. Sender</h4>

<p>
The sender is the person who composes and sends an email message.
</p>

<h4>2. Receiver</h4>

<p>
The receiver is the person who receives the email message.
</p>

<h4>3. Email Client</h4>

<p>
An Email Client is a software application used to create, send, receive, and manage emails.
</p>

<p>
Examples: Gmail, Outlook, Thunderbird.
</p>

<h4>4. Mail Server</h4>

<p>
A Mail Server is a computer that stores, forwards, and manages email messages.
</p>

<h4>5. Email Address</h4>

<p>
An Email Address uniquely identifies a user in an email system.
</p>

<p>
Example: student@example.com
</p>

<h4>Structure of an Email Address</h4>

<p>
An email address consists of two parts:
</p>

<p>
Username + @ + Domain Name
</p>

<p>
Example:
</p>

<p>
student@gmail.com
</p>

<p>
Here:</p>

<p>
Username = student</p>

<p>
Domain Name = gmail.com</p>

<h4>Parts of an Email Message</h4>

<table class = "notes-table">

<tr>
<th>Part</th>
<th>Description</th>
</tr>

<tr>
<td>To</td>
<td>Recipient's Email Address</td>
</tr>

<tr>
<td>From</td>
<td>Sender's Email Address</td>
</tr>

<tr>
<td>Subject</td>
<td>Short Description of Message</td>
</tr>

<tr>
<td>Body</td>
<td>Main Message Content</td>
</tr>

<tr>
<td>Attachment</td>
<td>Additional Files</td>
</tr>

<tr>
<td>Date and Time</td>
<td>Message Sending Information</td>
</tr>

</table>

<h4>How Email System Works</h4>

<p>
The Email System works using various Application Layer protocols such as SMTP, POP3, and IMAP.
</p>

<p>
The complete process is as follows:
</p>

<p>
Step 1: The sender composes an email.</p>

<p>
Step 2: The email client sends the message to the sender's mail server.</p>

<p>
Step 3: SMTP transfers the message to the recipient's mail server.</p>

<p>
Step 4: The mail server stores the message.</p>

<p>
Step 5: The recipient accesses the mail server.</p>

<p>
Step 6: POP3 or IMAP retrieves the email.</p>

<p>
Step 7: The recipient reads the message.</p>

<h4>Email Architecture</h4>

<p>
Sender → SMTP → Mail Server → SMTP → Receiver Mail Server → POP3/IMAP → Receiver
</p>

<h4>Email Protocols</h4>

<table class = "notes-table">

<tr>
<th>Protocol</th>
<th>Purpose</th>
</tr>

<tr>
<td>SMTP</td>
<td>Sending Emails</td>
</tr>

<tr>
<td>POP3</td>
<td>Receiving Emails</td>
</tr>

<tr>
<td>IMAP</td>
<td>Managing Emails on Server</td>
</tr>

</table>

<h4>Features of Email System</h4>

<p>
1. Fast Communication.</p>

<p>
2. Global Accessibility.</p>

<p>
3. File Attachments.</p>

<p>
4. Multiple Recipients.</p>

<p>
5. Message Storage.</p>

<p>
6. Cost Effective Communication.</p>

<p>
7. Easy Record Keeping.</p>

<p>
8. Secure Communication Options.</p>

<h4>Advantages of Email System</h4>

<p>
1. Instant communication.</p>

<p>
2. Low communication cost.</p>

<p>
3. Supports file sharing.</p>

<p>
4. Easy to maintain records.</p>

<p>
5. Accessible from anywhere.</p>

<p>
6. Environment friendly.</p>

<p>
7. Supports business communication.</p>

<h4>Disadvantages of Email System</h4>

<p>
1. Spam emails.</p>

<p>
2. Phishing attacks.</p>

<p>
3. Internet dependency.</p>

<p>
4. Storage limitations.</p>

<p>
5. Virus-infected attachments.</p>

<h4>Applications of Email System</h4>

<p>
1. Business Communication.</p>

<p>
2. Educational Communication.</p>

<p>
3. Government Services.</p>

<p>
4. Online Registration.</p>

<p>
5. Banking Notifications.</p>

<p>
6. Social Networking Notifications.</p>

<p>
7. Customer Support Services.</p>

<h4>Difference Between Traditional Mail and Email</h4>

<table class = "notes-table">

<tr>
<th>Traditional Mail</th>
<th>Email</th>
</tr>

<tr>
<td>Delivered Physically</td>
<td>Delivered Electronically</td>
</tr>

<tr>
<td>Slow Delivery</td>
<td>Instant Delivery</td>
</tr>

<tr>
<td>Higher Cost</td>
<td>Very Low Cost</td>
</tr>

<tr>
<td>Requires Paper</td>
<td>Paperless Communication</td>
</tr>

<tr>
<td>Limited Accessibility</td>
<td>Accessible Worldwide</td>
</tr>

</table>

<h4>Real-Life Example</h4>

<p>
Suppose a teacher wants to send study material to students. Instead of printing hundreds of copies, the teacher can attach the document to an email and send it instantly to all students. The students can download and read the material from anywhere.
</p>

<h4>Summary</h4>

<p>
The Email System is an Application Layer service used for electronic communication. It allows users to send, receive, store, and manage messages and attachments using protocols such as SMTP, POP3, and IMAP. Email provides fast, reliable, and cost-effective communication across the world.
</p>

<p>
An Email System is an Application Layer communication service that allows users to send and receive electronic messages over a network. SMTP is used for sending emails, while POP3 and IMAP are used for receiving emails.
</p>

`;
let smtpContent = `

<h3>SMTP (Simple Mail Transfer Protocol)</h3>

<p>
SMTP stands for Simple Mail Transfer Protocol. It is one of the most important Application Layer protocols used in computer networks. SMTP is responsible for sending electronic mail (Email) from a sender to a mail server and from one mail server to another mail server.
</p>

<p>
Whenever we send an email using Gmail, Outlook, Yahoo Mail, or any other email service, SMTP is the protocol that handles the delivery of the message. Without SMTP, sending emails over the Internet would not be possible.
</p>

<h4>Definition of SMTP</h4>

<p>
SMTP (Simple Mail Transfer Protocol) is an Application Layer protocol used for sending and forwarding email messages over a TCP/IP network.
</p>

<h4>Full Form of SMTP</h4>

<p>
SMTP stands for Simple Mail Transfer Protocol.
</p>

<h4>Why SMTP is Needed</h4>

<p>
When a user writes an email and clicks the Send button, the email must travel from the sender's computer to the recipient's mail server. SMTP provides the rules and procedures required for this transmission.
</p>

<p>
SMTP ensures that emails are delivered correctly from one mail server to another across the Internet.
</p>

<h4>Objectives of SMTP</h4>

<p>
1. Send email messages.</p>

<p>
2. Transfer emails between mail servers.</p>

<p>
3. Ensure reliable email delivery.</p>

<p>
4. Support communication over the Internet.</p>

<p>
5. Manage outgoing email traffic.</p>

<h4>Role of SMTP in Email Communication</h4>

<p>
SMTP is responsible only for sending emails.
</p>

<p>
For receiving emails, protocols such as POP3 and IMAP are used.
</p>

<table class = "notes-table">

<tr>
<th>Protocol</th>
<th>Purpose</th>
</tr>

<tr>
<td>SMTP</td>
<td>Sending Emails</td>
</tr>

<tr>
<td>POP3</td>
<td>Receiving Emails</td>
</tr>

<tr>
<td>IMAP</td>
<td>Managing and Receiving Emails</td>
</tr>

</table>

<h4>How SMTP Works</h4>

<p>
SMTP follows the Client-Server Model.
</p>

<p>
The email client acts as the client and the mail server acts as the server.
</p>

<p>
The complete process is as follows:
</p>

<p>
Step 1: The sender composes an email.</p>

<p>
Step 2: The email client sends the message to the sender's mail server using SMTP.</p>

<p>
Step 3: The sender's mail server identifies the recipient's mail server.</p>

<p>
Step 4: SMTP transfers the email to the recipient's mail server.</p>

<p>
Step 5: The recipient's mail server stores the email.</p>

<p>
Step 6: The recipient retrieves the email using POP3 or IMAP.</p>

<h4>SMTP Communication Flow</h4>

<p>
Sender → Email Client → SMTP → Sender Mail Server → SMTP → Receiver Mail Server → POP3/IMAP → Receiver
</p>

<h4>SMTP Architecture</h4>

<p>
SMTP works using a Store and Forward mechanism.
</p>

<p>
The sender's mail server temporarily stores the message and forwards it to the destination mail server.
</p>

<p>
If the destination server is unavailable, the message remains in the queue and is retransmitted later.
</p>

<h4>Common SMTP Commands</h4>

<table class = "notes-table">

<tr>
<th>Command</th>
<th>Purpose</th>
</tr>

<tr>
<td>HELO</td>
<td>Initiates Communication</td>
</tr>

<tr>
<td>MAIL FROM</td>
<td>Specifies Sender Address</td>
</tr>

<tr>
<td>RCPT TO</td>
<td>Specifies Receiver Address</td>
</tr>

<tr>
<td>DATA</td>
<td>Transfers Message Content</td>
</tr>

<tr>
<td>QUIT</td>
<td>Terminates Session</td>
</tr>

</table>

<h4>SMTP Port Numbers</h4>

<p>
SMTP commonly uses the following port numbers:
</p>

<table class = "notes-table">

<tr>
<th>Port Number</th>
<th>Purpose</th>
</tr>

<tr>
<td>25</td>
<td>Standard SMTP Communication</td>
</tr>

<tr>
<td>587</td>
<td>Secure Email Submission</td>
</tr>

<tr>
<td>465</td>
<td>SMTP over SSL/TLS</td>
</tr>

</table>

<h4>Features of SMTP</h4>

<p>
1. Reliable Email Delivery.</p>

<p>
2. Client-Server Architecture.</p>

<p>
3. Store and Forward Mechanism.</p>

<p>
4. Platform Independent.</p>

<p>
5. Supports Multiple Recipients.</p>

<p>
6. Supports Email Attachments through MIME.</p>

<p>
7. Efficient Email Routing.</p>

<h4>MIME and SMTP</h4>

<p>
SMTP was originally designed to send only text messages.
</p>

<p>
MIME (Multipurpose Internet Mail Extensions) extends SMTP capabilities and allows the transmission of images, audio, video, PDF files, and other attachments.
</p>

<h4>Advantages of SMTP</h4>

<p>
1. Fast email delivery.</p>

<p>
2. Reliable message transfer.</p>

<p>
3. Supports global communication.</p>

<p>
4. Compatible with most email systems.</p>

<p>
5. Efficient mail routing.</p>

<p>
6. Supports large-scale communication.</p>

<h4>Disadvantages of SMTP</h4>

<p>
1. Cannot receive emails.</p>

<p>
2. Depends on other protocols such as POP3 and IMAP.</p>

<p>
3. Vulnerable to spam if not properly secured.</p>

<p>
4. Basic SMTP does not provide encryption.</p>

<h4>Applications of SMTP</h4>

<p>
1. Gmail Email Delivery.</p>

<p>
2. Outlook Email Services.</p>

<p>
3. Business Communication.</p>

<p>
4. Educational Communication.</p>

<p>
5. Banking Notifications.</p>

<p>
6. E-commerce Notifications.</p>

<p>
7. Password Recovery Emails.</p>

<p>
8. Automated System Alerts.</p>

<h4>Difference Between SMTP and POP3</h4>

<table class = "notes-table">

<tr>
<th>SMTP</th>
<th>POP3</th>
</tr>

<tr>
<td>Used for Sending Emails</td>
<td>Used for Receiving Emails</td>
</tr>

<tr>
<td>Handles Outgoing Mail</td>
<td>Handles Incoming Mail</td>
</tr>

<tr>
<td>Works Between Mail Servers</td>
<td>Works Between Mail Server and Client</td>
</tr>

<tr>
<td>Uses Ports 25, 465, 587</td>
<td>Uses Ports 110 and 995</td>
</tr>

</table>

<h4>Difference Between SMTP and IMAP</h4>

<table class = "notes-table">

<tr>
<th>SMTP</th>
<th>IMAP</th>
</tr>

<tr>
<td>Used for Sending Emails</td>
<td>Used for Accessing Emails</td>
</tr>

<tr>
<td>Transfers Outgoing Messages</td>
<td>Manages Incoming Messages</td>
</tr>

<tr>
<td>Mail Delivery Protocol</td>
<td>Mail Access Protocol</td>
</tr>

<tr>
<td>Works During Sending</td>
<td>Works During Reading</td>
</tr>

</table>

<h4>Real-Life Example</h4>

<p>
Consider a post office system. When a person sends a letter, the post office collects the letter, routes it through various centers, and delivers it to the destination. Similarly, SMTP collects email messages, transfers them between mail servers, and ensures they reach the recipient's mail server.
</p>

<h4>Summary</h4>

<p>
SMTP (Simple Mail Transfer Protocol) is an Application Layer protocol used for sending and forwarding emails over the Internet. It follows the Client-Server Model, uses a Store and Forward mechanism, and commonly operates on Ports 25, 465, and 587. SMTP is responsible for outgoing email communication and works together with POP3 and IMAP to provide complete email services.
</p>

<p>
SMTP (Simple Mail Transfer Protocol) is an Application Layer protocol used for sending emails from a client to a mail server and between mail servers. It follows the Client-Server Model and commonly uses Ports 25, 465, and 587 for email transmission.
</p>

`;
let popContent = `

<h3>POP (Post Office Protocol)</h3>

<p>
POP stands for Post Office Protocol. It is an Application Layer protocol used for receiving emails from a mail server to a user's computer or email client.
</p>

<p>
Whenever a user opens an email application and downloads emails from a mail server, POP is one of the protocols that can be used for this purpose.
</p>

<p>
POP works closely with SMTP. SMTP is responsible for sending emails, while POP is responsible for receiving emails. Together, they provide complete email communication services.
</p>

<h4>Definition of POP</h4>

<p>
Post Office Protocol (POP) is an Application Layer protocol used to retrieve email messages from a mail server and download them to a local computer.
</p>

<h4>Full Form of POP</h4>

<p>
POP stands for Post Office Protocol.
</p>

<h4>Current Version of POP</h4>

<p>
The most widely used version today is POP3 (Post Office Protocol Version 3).
</p>

<p>
When people refer to POP, they generally mean POP3.
</p>

<h4>Why POP is Needed</h4>

<p>
After an email reaches the recipient's mail server through SMTP, the recipient needs a method to access and download the email.
</p>

<p>
POP provides this functionality by allowing users to retrieve messages from the server and store them on their local devices.
</p>

<h4>Objectives of POP</h4>

<p>
1. Receive emails from a mail server.</p>

<p>
2. Download emails to a local device.</p>

<p>
3. Allow offline reading of emails.</p>

<p>
4. Manage incoming email messages.</p>

<p>
5. Provide simple email retrieval services.</p>

<h4>How POP Works</h4>

<p>
POP follows the Client-Server Model.
</p>

<p>
The email client acts as the client, while the mail server acts as the server.
</p>

<p>
The working process is as follows:
</p>

<p>
Step 1: The sender sends an email using SMTP.</p>

<p>
Step 2: The recipient's mail server receives and stores the email.</p>

<p>
Step 3: The recipient opens the email application.</p>

<p>
Step 4: The email client connects to the mail server using POP.</p>

<p>
Step 5: The server authenticates the user.</p>

<p>
Step 6: The email messages are downloaded to the local device.</p>

<p>
Step 7: The user reads the emails.</p>

<h4>POP Communication Flow</h4>

<p>
Sender → SMTP → Mail Server → POP3 → Receiver
</p>

<h4>POP Architecture</h4>

<p>
POP follows a Download-and-Delete approach by default.
</p>

<p>
After downloading the emails, the messages are usually removed from the mail server, although modern email clients can be configured to keep copies on the server.
</p>

<h4>POP Port Numbers</h4>

<table class = "notes-table">

<tr>
<th>Port Number</th>
<th>Purpose</th>
</tr>

<tr>
<td>110</td>
<td>Standard POP3 Communication</td>
</tr>

<tr>
<td>995</td>
<td>Secure POP3 over SSL/TLS</td>
</tr>

</table>

<h4>Main POP Commands</h4>

<table class = "notes-table">

<tr>
<th>Command</th>
<th>Purpose</th>
</tr>

<tr>
<td>USER</td>
<td>Provides Username</td>
</tr>

<tr>
<td>PASS</td>
<td>Provides Password</td>
</tr>

<tr>
<td>LIST</td>
<td>Displays Available Messages</td>
</tr>

<tr>
<td>RETR</td>
<td>Retrieves an Email</td>
</tr>

<tr>
<td>DELE</td>
<td>Deletes an Email</td>
</tr>

<tr>
<td>QUIT</td>
<td>Terminates Session</td>
</tr>

</table>

<h4>Features of POP</h4>

<p>
1. Downloads emails to local storage.</p>

<p>
2. Supports offline email reading.</p>

<p>
3. Simple protocol architecture.</p>

<p>
4. Reduces server storage usage.</p>

<p>
5. Easy implementation.</p>

<p>
6. Fast email retrieval.</p>

<h4>Advantages of POP</h4>

<p>
1. Emails can be accessed offline.</p>

<p>
2. Saves server storage space.</p>

<p>
3. Faster access after download.</p>

<p>
4. Simple configuration.</p>

<p>
5. Suitable for single-device usage.</p>

<p>
6. Low server resource consumption.</p>

<h4>Disadvantages of POP</h4>

<p>
1. Emails may be removed from the server after download.</p>

<p>
2. Difficult to synchronize across multiple devices.</p>

<p>
3. Limited server-side management.</p>

<p>
4. Less suitable for cloud-based email access.</p>

<p>
5. Risk of data loss if the local device fails.</p>

<h4>Applications of POP</h4>

<p>
1. Personal Email Systems.</p>

<p>
2. Educational Institutions.</p>

<p>
3. Small Business Email Solutions.</p>

<p>
4. Offline Email Access.</p>

<p>
5. Desktop Email Clients.</p>

<p>
6. Corporate Communication Systems.</p>

<h4>Difference Between SMTP and POP</h4>

<table class = "notes-table">

<tr>
<th>SMTP</th>
<th>POP</th>
</tr>

<tr>
<td>Used for Sending Emails</td>
<td>Used for Receiving Emails</td>
</tr>

<tr>
<td>Handles Outgoing Mail</td>
<td>Handles Incoming Mail</td>
</tr>

<tr>
<td>Transfers Messages to Mail Server</td>
<td>Retrieves Messages from Mail Server</td>
</tr>

<tr>
<td>Ports 25, 465, 587</td>
<td>Ports 110, 995</td>
</tr>

<tr>
<td>Mail Transfer Protocol</td>
<td>Mail Retrieval Protocol</td>
</tr>

</table>

<h4>Difference Between POP and IMAP</h4>

<table class = "notes-table">

<tr>
<th>POP3</th>
<th>IMAP</th>
</tr>

<tr>
<td>Downloads Emails to Local Device</td>
<td>Keeps Emails on Server</td>
</tr>

<tr>
<td>Suitable for Single Device</td>
<td>Suitable for Multiple Devices</td>
</tr>

<tr>
<td>Limited Synchronization</td>
<td>Full Synchronization</td>
</tr>

<tr>
<td>Consumes Less Server Storage</td>
<td>Consumes More Server Storage</td>
</tr>

<tr>
<td>Offline Access Available</td>
<td>Primarily Server Based Access</td>
</tr>

</table>

<h4>POP3 vs SMTP vs IMAP</h4>

<table class = "notes-table">

<tr>
<th>Protocol</th>
<th>Purpose</th>
</tr>

<tr>
<td>SMTP</td>
<td>Sending Emails</td>
</tr>

<tr>
<td>POP3</td>
<td>Receiving and Downloading Emails</td>
</tr>

<tr>
<td>IMAP</td>
<td>Managing and Synchronizing Emails</td>
</tr>

</table>

<h4>Real-Life Example</h4>

<p>
Imagine a post office box where letters are collected. When you visit the post office, you take the letters from the box and bring them home. Similarly, POP retrieves emails from the mail server and stores them on your local device for reading.
</p>

<h4>Summary</h4>

<p>
POP (Post Office Protocol) is an Application Layer protocol used for receiving emails from a mail server. The most common version is POP3. It downloads emails to the user's device and supports offline access. POP commonly uses Port 110 for normal communication and Port 995 for secure communication.
</p>

<p>
POP (Post Office Protocol) is an Application Layer protocol used to retrieve and download emails from a mail server to a client device. POP3 is the most commonly used version and operates on Ports 110 and 995.
</p>

`;

let wwwContent = `

<h3>World Wide Web (WWW)</h3>

<p>
The World Wide Web (WWW), commonly known as the Web, is one of the most important services available on the Internet. It is a system of interconnected web pages and websites that can be accessed using a web browser such as Chrome, Firefox, Edge, or Safari.
</p>

<p>
The WWW allows users to access information, communicate, watch videos, read articles, perform online shopping, attend online classes, use social media, and access various online services from anywhere in the world.
</p>

<p>
Although many people use the terms Internet and World Wide Web interchangeably, they are not the same. The Internet is the global network of computers, while the World Wide Web is a service that operates on the Internet.
</p>

<h4>Definition of WWW</h4>

<p>
The World Wide Web (WWW) is a collection of interconnected web pages and websites that can be accessed through the Internet using web browsers.
</p>

<h4>Full Form of WWW</h4>

<p>
WWW stands for World Wide Web.
</p>

<h4>History of WWW</h4>

<p>
The World Wide Web was invented by Sir Tim Berners-Lee in 1989 while working at CERN (European Organization for Nuclear Research).
</p>

<p>
He developed the Web to allow scientists to easily share information and research documents across computer networks.
</p>

<p>
The first website was launched in 1991, marking the beginning of the modern Web.
</p>

<h4>Need for WWW</h4>

<p>
Before the development of the World Wide Web, accessing information over networks was difficult and required specialized knowledge.
</p>

<p>
WWW simplified information sharing by providing an easy-to-use graphical interface and hyperlinks that allow users to move from one document to another.
</p>

<h4>Objectives of WWW</h4>

<p>
1. Provide easy access to information.</p>

<p>
2. Enable information sharing worldwide.</p>

<p>
3. Connect users through websites and web applications.</p>

<p>
4. Support communication and collaboration.</p>

<p>
5. Facilitate online services and e-commerce.</p>

<h4>Main Components of WWW</h4>

<h4>1. Web Browser</h4>

<p>
A Web Browser is a software application used to access and display web pages.
</p>

<p>
Examples:</p>

<p>
1. Google Chrome</p>

<p>
2. Mozilla Firefox</p>

<p>
3. Microsoft Edge</p>

<p>
4. Safari</p>

<h4>2. Web Server</h4>

<p>
A Web Server is a computer that stores websites and delivers web pages to users upon request.
</p>

<p>
Examples:</p>

<p>
Apache Web Server</p>

<p>
Nginx</p>

<p>
Microsoft IIS</p>

<h4>3. Web Pages</h4>

<p>
A Web Page is a document displayed in a browser.
</p>

<p>
Web pages are usually created using HTML, CSS, and JavaScript.
</p>

<h4>4. Website</h4>

<p>
A Website is a collection of related web pages stored on a web server.
</p>

<p>
Examples:</p>

<p>
www.google.com</p>

<p>
www.wikipedia.org</p>

<p>
www.youtube.com</p>

<h4>5. URL (Uniform Resource Locator)</h4>

<p>
A URL is the address used to locate a web page on the Internet.
</p>

<p>
Example:</p>

<p>
https://www.google.com
</p>

<h4>6. Hyperlink</h4>

<p>
A Hyperlink is a clickable connection that links one web page to another.
</p>

<p>
Hyperlinks make navigation on the Web easy and efficient.
</p>

<h4>How WWW Works</h4>

<p>
The World Wide Web works using the Client-Server Model.
</p>

<p>
The browser acts as a client and the website server acts as a server.
</p>

<p>
The process works as follows:
</p>

<p>
Step 1: The user enters a website address in the browser.</p>

<p>
Step 2: DNS converts the domain name into an IP address.</p>

<p>
Step 3: The browser sends an HTTP request to the web server.</p>

<p>
Step 4: The web server processes the request.</p>

<p>
Step 5: The server sends the requested web page.</p>

<p>
Step 6: The browser displays the page to the user.</p>

<h4>WWW Architecture</h4>

<p>
User → Browser → Internet → Web Server → Web Page → Browser → User
</p>

<h4>Technologies Used in WWW</h4>

<table class = "notes-table">

<tr>
<th>Technology</th>
<th>Purpose</th>
</tr>

<tr>
<td>HTML</td>
<td>Structure of Web Pages</td>
</tr>

<tr>
<td>CSS</td>
<td>Design and Styling</td>
</tr>

<tr>
<td>JavaScript</td>
<td>Interactivity</td>
</tr>

<tr>
<td>HTTP</td>
<td>Communication Protocol</td>
</tr>

<tr>
<td>DNS</td>
<td>Name Resolution</td>
</tr>

</table>

<h4>Features of WWW</h4>

<p>
1. Global Accessibility.</p>

<p>
2. Hyperlink-Based Navigation.</p>

<p>
3. Multimedia Support.</p>

<p>
4. User-Friendly Interface.</p>

<p>
5. Distributed Information System.</p>

<p>
6. Platform Independence.</p>

<p>
7. Interactive Applications.</p>

<h4>Advantages of WWW</h4>

<p>
1. Easy access to information.</p>

<p>
2. Supports online education.</p>

<p>
3. Enables global communication.</p>

<p>
4. Facilitates online business.</p>

<p>
5. Provides entertainment services.</p>

<p>
6. Supports research and learning.</p>

<p>
7. Available 24×7 worldwide.</p>

<h4>Disadvantages of WWW</h4>

<p>
1. Security threats.</p>

<p>
2. Fake or misleading information.</p>

<p>
3. Privacy concerns.</p>

<p>
4. Internet dependency.</p>

<p>
5. Cybercrime risks.</p>

<h4>Applications of WWW</h4>

<p>
1. Online Education.</p>

<p>
2. E-Commerce.</p>

<p>
3. Social Networking.</p>

<p>
4. Online Banking.</p>

<p>
5. News and Media.</p>

<p>
6. Video Streaming.</p>

<p>
7. Cloud Computing.</p>

<p>
8. Government Services.</p>

<h4>Difference Between Internet and WWW</h4>

<table class = "notes-table">

<tr>
<th>Internet</th>
<th>WWW</th>
</tr>

<tr>
<td>Global Network of Computers</td>
<td>Service Running on the Internet</td>
</tr>

<tr>
<td>Infrastructure</td>
<td>Information System</td>
</tr>

<tr>
<td>Provides Connectivity</td>
<td>Provides Web Pages</td>
</tr>

<tr>
<td>Uses Multiple Services</td>
<td>Mainly Uses HTTP and HTTPS</td>
</tr>

<tr>
<td>Developed Earlier</td>
<td>Developed Later</td>
</tr>

</table>

<h4>Difference Between Website and Web Page</h4>

<table class = "notes-table">

<tr>
<th>Website</th>
<th>Web Page</th>
</tr>

<tr>
<td>Collection of Web Pages</td>
<td>Single Document</td>
</tr>

<tr>
<td>Contains Multiple Pages</td>
<td>Part of a Website</td>
</tr>

<tr>
<td>Example: Amazon</td>
<td>Example: Product Page</td>
</tr>

<tr>
<td>Larger Information Source</td>
<td>Specific Information</td>
</tr>

</table>

<h4>Real-Life Example</h4>

<p>
Consider a large library. The library building represents the Internet, while the books inside represent websites and web pages. The World Wide Web helps users locate and access those books easily using browsers and hyperlinks.
</p>

<h4>Summary</h4>

<p>
The World Wide Web (WWW) is a system of interconnected web pages and websites accessible through the Internet. It uses technologies such as HTML, HTTP, DNS, and web browsers to provide information and online services to users worldwide. WWW follows the Client-Server Model and has become an essential part of modern communication and information sharing.
</p>

<p>
The World Wide Web (WWW) is a collection of interconnected web pages and websites that can be accessed through the Internet using web browsers. It was invented by Tim Berners-Lee in 1989 and operates using technologies such as HTML, HTTP, DNS, and web servers.
</p>

`;
let dnsContent = `

<h3>Domain Name System (DNS)</h3>

<p>
The Domain Name System (DNS) is one of the most important services of the Internet. DNS acts like the phonebook of the Internet. It converts human-readable domain names into machine-readable IP addresses so that computers can locate and communicate with each other.
</p>

<p>
Humans find it easy to remember names such as google.com, youtube.com, and wikipedia.org, but computers identify devices using numerical IP addresses. DNS bridges this gap by translating domain names into IP addresses.
</p>

<p>
Without DNS, users would have to remember the IP address of every website they wanted to visit, which would be difficult and impractical.
</p>

<h4>Definition of DNS</h4>

<p>
DNS (Domain Name System) is an Application Layer service that translates domain names into IP addresses and helps users locate resources on the Internet.
</p>

<h4>Full Form of DNS</h4>

<p>
DNS stands for Domain Name System.
</p>

<h4>Why DNS is Needed</h4>

<p>
Computers communicate using IP addresses, while humans prefer easy-to-remember names.
</p>

<p>
For example, remembering www.google.com is much easier than remembering an IP address such as 142.250.xxx.xxx.
</p>

<p>
DNS automatically performs this conversion whenever a user accesses a website.
</p>

<h4>Objectives of DNS</h4>

<p>
1. Convert domain names into IP addresses.</p>

<p>
2. Make Internet navigation easier.</p>

<p>
3. Provide fast name resolution.</p>

<p>
4. Support Internet communication.</p>

<p>
5. Reduce the need to remember IP addresses.</p>

<h4>What is a Domain Name?</h4>

<p>
A Domain Name is a human-readable name used to identify a website on the Internet.
</p>

<p>
Examples:</p>

<p>
www.google.com</p>

<p>
www.youtube.com</p>

<p>
www.wikipedia.org</p>

<p>
www.openai.com</p>

<h4>What is an IP Address?</h4>

<p>
An IP Address is a unique numerical address assigned to a device connected to a network.
</p>

<p>
Computers use IP addresses to identify and communicate with each other.
</p>

<p>
Example:</p>

<p>
192.168.1.1</p>

<p>
8.8.8.8</p>

<h4>DNS Hierarchical Structure</h4>

<p>
DNS is organized in a hierarchical structure.
</p>

<table class = "notes-table">

<tr>
<th>Level</th>
<th>Example</th>
</tr>

<tr>
<td>Root Domain</td>
<td>.</td>
</tr>

<tr>
<td>Top Level Domain (TLD)</td>
<td>.com, .org, .edu</td>
</tr>

<tr>
<td>Second Level Domain</td>
<td>google.com</td>
</tr>

<tr>
<td>Subdomain</td>
<td>mail.google.com</td>
</tr>

</table>

<h4>Components of DNS</h4>

<h4>1. DNS Client (Resolver)</h4>

<p>
The DNS Client sends DNS queries on behalf of the user.
</p>

<p>
It is usually built into the operating system.
</p>

<h4>2. DNS Server</h4>

<p>
A DNS Server stores DNS records and responds to DNS queries.
</p>

<h4>3. Root DNS Server</h4>

<p>
Root Servers are at the top of the DNS hierarchy and help locate Top Level Domain servers.
</p>

<h4>4. TLD Server</h4>

<p>
TLD (Top Level Domain) Servers manage domains such as .com, .org, and .net.
</p>

<h4>5. Authoritative DNS Server</h4>

<p>
This server contains the actual DNS records for a domain and provides the final IP address.
</p>

<h4>How DNS Works</h4>

<p>
Whenever a user enters a website address in a browser, DNS performs a process called DNS Resolution.
</p>

<p>
The process works as follows:
</p>

<p>
Step 1: The user enters a domain name in the browser.</p>

<p>
Step 2: The DNS Resolver receives the request.</p>

<p>
Step 3: The resolver checks its cache.</p>

<p>
Step 4: If the record is not found, the resolver contacts the Root DNS Server.</p>

<p>
Step 5: The Root Server directs the query to the appropriate TLD Server.</p>

<p>
Step 6: The TLD Server directs the query to the Authoritative DNS Server.</p>

<p>
Step 7: The Authoritative Server returns the IP address.</p>

<p>
Step 8: The browser connects to the web server using the obtained IP address.</p>

<p>
Step 9: The website is displayed to the user.</p>

<h4>DNS Resolution Flow</h4>

<p>
User → Browser → DNS Resolver → Root Server → TLD Server → Authoritative DNS Server → IP Address → Website
</p>

<h4>DNS Records</h4>

<p>
DNS stores information in the form of records.
</p>

<table class = "notes-table">

<tr>
<th>Record Type</th>
<th>Purpose</th>
</tr>

<tr>
<td>A Record</td>
<td>Maps Domain Name to IPv4 Address</td>
</tr>

<tr>
<td>AAAA Record</td>
<td>Maps Domain Name to IPv6 Address</td>
</tr>

<tr>
<td>CNAME</td>
<td>Creates Domain Aliases</td>
</tr>

<tr>
<td>MX Record</td>
<td>Specifies Mail Server</td>
</tr>

<tr>
<td>NS Record</td>
<td>Specifies Name Server</td>
</tr>

<tr>
<td>TXT Record</td>
<td>Stores Text Information</td>
</tr>

</table>

<h4>Features of DNS</h4>

<p>
1. Hierarchical Structure.</p>

<p>
2. Distributed Database.</p>

<p>
3. Scalable Design.</p>

<p>
4. Fast Name Resolution.</p>

<p>
5. Fault Tolerance.</p>

<p>
6. Easy Domain Management.</p>

<h4>Advantages of DNS</h4>

<p>
1. Easy website access.</p>

<p>
2. No need to remember IP addresses.</p>

<p>
3. Faster Internet navigation.</p>

<p>
4. Supports large-scale Internet operations.</p>

<p>
5. Reliable and scalable.</p>

<p>
6. Simplifies network management.</p>

<h4>Disadvantages of DNS</h4>

<p>
1. DNS attacks may occur.</p>

<p>
2. DNS server failures can affect accessibility.</p>

<p>
3. Misconfigured DNS records can cause connectivity problems.</p>

<p>
4. DNS lookups may introduce slight delays.</p>

<h4>Applications of DNS</h4>

<p>
1. Website Access.</p>

<p>
2. Email Routing.</p>

<p>
3. Cloud Services.</p>

<p>
4. Load Balancing.</p>

<p>
5. Network Administration.</p>

<p>
6. Content Delivery Networks (CDN).</p>

<p>
7. Internet Communication.</p>

<h4>Difference Between Domain Name and IP Address</h4>

<table class = "notes-table">

<tr>
<th>Domain Name</th>
<th>IP Address</th>
</tr>

<tr>
<td>Human Readable</td>
<td>Machine Readable</td>
</tr>

<tr>
<td>Easy to Remember</td>
<td>Difficult to Remember</td>
</tr>

<tr>
<td>Uses Characters</td>
<td>Uses Numbers</td>
</tr>

<tr>
<td>Example: google.com</td>
<td>Example: 142.250.xxx.xxx</td>
</tr>

</table>

<h4>Difference Between DNS and DHCP</h4>

<table class = "notes-table">

<tr>
<th>DNS</th>
<th>DHCP</th>
</tr>

<tr>
<td>Converts Domain Names to IP Addresses</td>
<td>Assigns IP Addresses Automatically</td>
</tr>

<tr>
<td>Used for Name Resolution</td>
<td>Used for Network Configuration</td>
</tr>

<tr>
<td>Application Layer Service</td>
<td>Application Layer Service</td>
</tr>

<tr>
<td>Helps Locate Websites</td>
<td>Helps Devices Join Networks</td>
</tr>

</table>

<h4>Real-Life Example</h4>

<p>
Consider a mobile phone contact list. Instead of remembering every person's phone number, we simply remember their names. When we select a name, the phone automatically finds the corresponding number.
</p>

<p>
Similarly, DNS allows users to remember domain names while automatically finding the corresponding IP addresses.
</p>

<h4>Summary</h4>

<p>
DNS (Domain Name System) is an Application Layer service that converts domain names into IP addresses. It acts as the Internet's phonebook and helps users access websites without remembering complex numerical addresses. DNS uses a hierarchical and distributed database structure to provide fast and reliable name resolution.
</p>

<p>
DNS (Domain Name System) is an Application Layer service that translates domain names into IP addresses. It helps users access Internet resources using easy-to-remember names instead of numerical IP addresses.
</p>

`;
let httpContent = `

<h3>Hyper Text Transfer Protocol (HTTP)</h3>

<p>
HTTP (Hyper Text Transfer Protocol) is one of the most important Application Layer protocols used on the World Wide Web (WWW). It is the foundation of data communication on the Web and enables communication between web browsers and web servers.
</p>

<p>
Whenever a user opens a website, clicks a link, submits a form, watches content online, or downloads information from a website, HTTP is used to transfer data between the client and the server.
</p>

<p>
HTTP defines a set of rules that govern how web browsers request web pages and how web servers respond to those requests.
</p>

<h4>Definition of HTTP</h4>

<p>
HTTP (Hyper Text Transfer Protocol) is an Application Layer protocol used for transferring web pages and other resources between web clients and web servers over the Internet.
</p>

<h4>Full Form of HTTP</h4>

<p>
HTTP stands for Hyper Text Transfer Protocol.
</p>

<h4>Why HTTP is Needed</h4>

<p>
The Internet contains millions of websites and web pages. Users need a standard method to request information from web servers and receive responses.
</p>

<p>
HTTP provides this standard communication mechanism and enables web browsing.
</p>

<h4>Objectives of HTTP</h4>

<p>
1. Transfer web pages between client and server.</p>

<p>
2. Enable communication on the World Wide Web.</p>

<p>
3. Support multimedia content transfer.</p>

<p>
4. Provide standardized web communication.</p>

<p>
5. Support web applications and online services.</p>

<h4>What is Hypertext?</h4>

<p>
Hypertext refers to text that contains links (hyperlinks) to other documents or web pages.
</p>

<p>
These hyperlinks allow users to navigate easily from one web page to another.
</p>

<h4>Components of HTTP Communication</h4>

<h4>1. Client</h4>

<p>
The client is usually a web browser such as Chrome, Firefox, Edge, or Safari.
</p>

<p>
The client sends requests to the web server.
</p>

<h4>2. Server</h4>

<p>
The server stores websites and web resources.
</p>

<p>
The server receives requests and sends responses.
</p>

<h4>3. HTTP Request</h4>

<p>
An HTTP Request is a message sent by the client to request a resource from the server.
</p>

<h4>4. HTTP Response</h4>

<p>
An HTTP Response is a message sent by the server containing the requested information.
</p>

<h4>How HTTP Works</h4>

<p>
HTTP follows the Client-Server Model and works through a Request-Response mechanism.
</p>

<p>
Step 1: The user enters a website URL in the browser.</p>

<p>
Step 2: DNS converts the domain name into an IP address.</p>

<p>
Step 3: The browser sends an HTTP request to the web server.</p>

<p>
Step 4: The server processes the request.</p>

<p>
Step 5: The server sends an HTTP response.</p>

<p>
Step 6: The browser displays the web page.</p>

<h4>HTTP Communication Flow</h4>

<p>
User → Browser → HTTP Request → Web Server → HTTP Response → Browser → User
</p>

<h4>HTTP Request Structure</h4>

<p>
An HTTP Request consists of:
</p>

<table class = "notes-table">

<tr>
<th>Part</th>
<th>Description</th>
</tr>

<tr>
<td>Request Line</td>
<td>Contains Method and URL</td>
</tr>

<tr>
<td>Headers</td>
<td>Additional Request Information</td>
</tr>

<tr>
<td>Body</td>
<td>Data Sent to Server</td>
</tr>

</table>

<h4>Example of HTTP Request</h4>

<pre>
GET /index.html HTTP/1.1
Host: www.example.com
</pre>

<h4>HTTP Response Structure</h4>

<table class = "notes-table">

<tr>
<th>Part</th>
<th>Description</th>
</tr>

<tr>
<td>Status Line</td>
<td>Status Information</td>
</tr>

<tr>
<td>Headers</td>
<td>Additional Response Information</td>
</tr>

<tr>
<td>Body</td>
<td>Requested Content</td>
</tr>

</table>

<h4>Example of HTTP Response</h4>

<pre>
HTTP/1.1 200 OK
Content-Type: text/html
</pre>

<h4>HTTP Methods</h4>

<p>
HTTP provides different methods to perform different operations.
</p>

<table class = "notes-table">

<tr>
<th>Method</th>
<th>Purpose</th>
</tr>

<tr>
<td>GET</td>
<td>Retrieve Data</td>
</tr>

<tr>
<td>POST</td>
<td>Submit Data</td>
</tr>

<tr>
<td>PUT</td>
<td>Update Existing Data</td>
</tr>

<tr>
<td>DELETE</td>
<td>Delete Data</td>
</tr>

<tr>
<td>HEAD</td>
<td>Retrieve Header Information</td>
</tr>

<tr>
<td>OPTIONS</td>
<td>Shows Supported Methods</td>
</tr>

</table>

<h4>Common HTTP Status Codes</h4>

<p>
HTTP responses contain status codes that indicate the result of a request.
</p>

<table class = "notes-table">

<tr>
<th>Status Code</th>
<th>Meaning</th>
</tr>

<tr>
<td>200 OK</td>
<td>Request Successful</td>
</tr>

<tr>
<td>201 Created</td>
<td>Resource Created</td>
</tr>

<tr>
<td>301 Moved Permanently</td>
<td>Resource Relocated</td>
</tr>

<tr>
<td>400 Bad Request</td>
<td>Invalid Request</td>
</tr>

<tr>
<td>401 Unauthorized</td>
<td>Authentication Required</td>
</tr>

<tr>
<td>403 Forbidden</td>
<td>Access Denied</td>
</tr>

<tr>
<td>404 Not Found</td>
<td>Resource Not Found</td>
</tr>

<tr>
<td>500 Internal Server Error</td>
<td>Server Failure</td>
</tr>

</table>

<h4>HTTP Port Number</h4>

<p>
HTTP uses Port Number 80 by default.
</p>

<table class = "notes-table">

<tr>
<th>Protocol</th>
<th>Port Number</th>
</tr>

<tr>
<td>HTTP</td>
<td>80</td>
</tr>

</table>

<h4>Features of HTTP</h4>

<p>
1. Client-Server Communication.</p>

<p>
2. Request-Response Architecture.</p>

<p>
3. Platform Independence.</p>

<p>
4. Extensible Protocol.</p>

<p>
5. Supports Multimedia Content.</p>

<p>
6. Fast Communication.</p>

<p>
7. Widely Supported.</p>

<h4>Advantages of HTTP</h4>

<p>
1. Easy implementation.</p>

<p>
2. Supports web communication.</p>

<p>
3. Flexible and scalable.</p>

<p>
4. Compatible with all browsers.</p>

<p>
5. Supports distributed applications.</p>

<p>
6. Efficient resource transfer.</p>

<h4>Disadvantages of HTTP</h4>

<p>
1. Data is transmitted in plain text.</p>

<p>
2. No built-in encryption.</p>

<p>
3. Vulnerable to interception.</p>

<p>
4. Less secure than HTTPS.</p>

<h4>Applications of HTTP</h4>

<p>
1. Web Browsing.</p>

<p>
2. Online Shopping Websites.</p>

<p>
3. Social Media Platforms.</p>

<p>
4. Educational Portals.</p>

<p>
5. Banking Systems.</p>

<p>
6. Web APIs.</p>

<p>
7. Cloud Applications.</p>

<h4>HTTP vs HTTPS</h4>

<p>
HTTPS (Hyper Text Transfer Protocol Secure) is the secure version of HTTP.
</p>

<p>
HTTPS uses SSL/TLS encryption to protect data during transmission.
</p>

<table class = "notes-table">

<tr>
<th>HTTP</th>
<th>HTTPS</th>
</tr>

<tr>
<td>Hyper Text Transfer Protocol</td>
<td>Hyper Text Transfer Protocol Secure</td>
</tr>

<tr>
<td>No Encryption</td>
<td>Encrypted Communication</td>
</tr>

<tr>
<td>Less Secure</td>
<td>Highly Secure</td>
</tr>

<tr>
<td>Port 80</td>
<td>Port 443</td>
</tr>

<tr>
<td>Suitable for Public Information</td>
<td>Suitable for Sensitive Information</td>
</tr>

</table>

<h4>Difference Between HTTP and FTP</h4>

<table class = "notes-table">

<tr>
<th>HTTP</th>
<th>FTP</th>
</tr>

<tr>
<td>Transfers Web Pages</td>
<td>Transfers Files</td>
</tr>

<tr>
<td>Uses Port 80</td>
<td>Uses Ports 20 and 21</td>
</tr>

<tr>
<td>Mainly for Web Browsing</td>
<td>Mainly for File Transfer</td>
</tr>

<tr>
<td>Uses Request-Response Model</td>
<td>Uses File Transfer Mechanism</td>
</tr>

</table>

<h4>Real-Life Example</h4>

<p>
Consider a restaurant. A customer places an order with a waiter. The waiter takes the order to the kitchen and brings back the food. Similarly, a browser sends an HTTP request to a server, and the server returns the requested web page as an HTTP response.
</p>

<h4>Summary</h4>

<p>
HTTP (Hyper Text Transfer Protocol) is an Application Layer protocol used for communication between web browsers and web servers. It follows the Client-Server Model and uses a Request-Response mechanism. HTTP operates on Port 80 and is the foundation of the World Wide Web.
</p>

<p>
HTTP (Hyper Text Transfer Protocol) is an Application Layer protocol used to transfer web pages and resources between clients and servers on the Internet. It follows the Client-Server Model, uses Port 80, and works through a Request-Response mechanism.
</p>

`;
let htmlContent = `

<h3>HTML  (Hyper Text Markup Language)</h3>

<p>
HTML stands for Hyper Text Markup Language. It is the standard markup language used to create and structure web pages on the World Wide Web (WWW). Every website that we visit on the Internet uses HTML as its basic building block.
</p>

<p>
HTML provides the structure of a web page by defining elements such as headings, paragraphs, images, tables, forms, links, videos, and other content. It tells the web browser how the content should be displayed to users.
</p>

<p>
HTML is not a programming language because it does not perform calculations or decision-making. Instead, it is a markup language that uses tags to organize and present information on web pages.
</p>

<h4>Definition of HTML</h4>

<p>
HTML (Hyper Text Markup Language) is a markup language used to create and structure web pages and web applications.
</p>

<h4>Full Form of HTML</h4>

<p>
HTML stands for Hyper Text Markup Language.
</p>

<h4>Why HTML is Needed</h4>

<p>
When a website is created, browsers need a standard way to understand and display its content.
</p>

<p>
HTML provides this structure by defining the different parts of a web page such as headings, paragraphs, images, links, tables, and forms.
</p>

<h4>Objectives of HTML</h4>

<p>
1. Create web pages.</p>

<p>
2. Structure website content.</p>

<p>
3. Display text, images, and multimedia.</p>

<p>
4. Connect web pages using hyperlinks.</p>

<p>
5. Develop web applications.</p>

<p>
6. Provide a foundation for CSS and JavaScript.</p>

<h4>Meaning of Hyper Text</h4>

<p>
Hyper Text refers to text that contains links to other documents or web pages.
</p>

<p>
These links are called Hyperlinks and allow users to move from one page to another by clicking them.
</p>

<h4>Meaning of Markup Language</h4>

<p>
A Markup Language uses tags to define the structure and presentation of content.
</p>

<p>
HTML tags tell the browser how information should be displayed.
</p>

<h4>History of HTML</h4>

<p>
HTML was developed by Sir Tim Berners-Lee in 1991.
</p>

<p>
It was created to share scientific documents over the Internet.
</p>

<p>
Since then, HTML has evolved through multiple versions.
</p>

<table class = "notes-table">

<tr>
<th>Version</th>
<th>Year</th>
</tr>

<tr>
<td>HTML 1.0</td>
<td>1991</td>
</tr>

<tr>
<td>HTML 2.0</td>
<td>1995</td>
</tr>

<tr>
<td>HTML 3.2</td>
<td>1997</td>
</tr>

<tr>
<td>HTML 4.01</td>
<td>1999</td>
</tr>

<tr>
<td>HTML5</td>
<td>2014</td>
</tr>

</table>

<h4>Basic Structure of an HTML Document</h4>

<pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;

&lt;head&gt;
    &lt;title&gt;My First Web Page&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;h1&gt;Welcome to HTML&lt;/h1&gt;
    &lt;p&gt;This is a web page.&lt;/p&gt;
&lt;/body&gt;

&lt;/html&gt;
</pre>

<h4>Main Components of HTML Document</h4>

<table class = "notes-table">

<tr>
<th>Tag</th>
<th>Purpose</th>
</tr>

<tr>
<td>&lt;html&gt;</td>
<td>Root Element of HTML Page</td>
</tr>

<tr>
<td>&lt;head&gt;</td>
<td>Contains Metadata</td>
</tr>

<tr>
<td>&lt;title&gt;</td>
<td>Page Title</td>
</tr>

<tr>
<td>&lt;body&gt;</td>
<td>Visible Content</td>
</tr>

</table>

<h4>HTML Tags</h4>

<p>
HTML uses tags enclosed within angle brackets (&lt; &gt;).
</p>

<p>
Most tags have an opening tag and a closing tag.
</p>

<p>
Example:
</p>

<pre>
&lt;p&gt;This is a paragraph.&lt;/p&gt;
</pre>

<h4>Types of HTML Tags</h4>

<h4>1. Container Tags</h4>

<p>
These tags have both opening and closing tags.
</p>

<p>
Example:
</p>

<pre>
&lt;h1&gt;Heading&lt;/h1&gt;
</pre>

<h4>2. Empty Tags</h4>

<p>
These tags do not require a closing tag.
</p>

<p>
Examples:
</p>

<pre>
&lt;br&gt;
&lt;hr&gt;
&lt;img&gt;
</pre>

<h4>Common HTML Tags</h4>

<table class = "notes-table">

<tr>
<th>Tag</th>
<th>Purpose</th>
</tr>

<tr>
<td>&lt;h1&gt; to &lt;h6&gt;</td>
<td>Headings</td>
</tr>

<tr>
<td>&lt;p&gt;</td>
<td>Paragraph</td>
</tr>

<tr>
<td>&lt;br&gt;</td>
<td>Line Break</td>
</tr>

<tr>
<td>&lt;hr&gt;</td>
<td>Horizontal Line</td>
</tr>

<tr>
<td>&lt;a&gt;</td>
<td>Hyperlink</td>
</tr>

<tr>
<td>&lt;img&gt;</td>
<td>Image</td>
</tr>

<tr>
<td>&lt;table&gt;</td>
<td>Table</td>
</tr>

<tr>
<td>&lt;form&gt;</td>
<td>Form Creation</td>
</tr>

</table>

<h4>Features of HTML</h4>

<p>
1. Easy to Learn.</p>

<p>
2. Platform Independent.</p>

<p>
3. Supports Hyperlinks.</p>

<p>
4. Supports Multimedia.</p>

<p>
5. Browser Friendly.</p>

<p>
6. Open Standard Technology.</p>

<p>
7. Foundation of Web Development.</p>

<h4>Advantages of HTML</h4>

<p>
1. Simple and easy to use.</p>

<p>
2. Supported by all web browsers.</p>

<p>
3. Free and open standard.</p>

<p>
4. Supports multimedia integration.</p>

<p>
5. Easy website development.</p>

<p>
6. Compatible with CSS and JavaScript.</p>

<h4>Disadvantages of HTML</h4>

<p>
1. Cannot perform logical operations.</p>

<p>
2. Cannot create dynamic functionality alone.</p>

<p>
3. Requires CSS for styling.</p>

<p>
4. Requires JavaScript for interactivity.</p>

<h4>Applications of HTML</h4>

<p>
1. Website Development.</p>

<p>
2. Web Application Development.</p>

<p>
3. Online Learning Platforms.</p>

<p>
4. E-Commerce Websites.</p>

<p>
5. Blog Creation.</p>

<p>
6. Portfolio Websites.</p>

<p>
7. Documentation Systems.</p>

<p>
8. Online Forms.</p>

<h4>Difference Between HTML and Programming Language</h4>

<table class = "notes-table">

<tr>
<th>HTML</th>
<th>Programming Language</th>
</tr>

<tr>
<td>Markup Language</td>
<td>Programming Language</td>
</tr>

<tr>
<td>Creates Structure</td>
<td>Performs Logic and Computation</td>
</tr>

<tr>
<td>Uses Tags</td>
<td>Uses Statements and Functions</td>
</tr>

<tr>
<td>No Decision Making</td>
<td>Supports Decision Making</td>
</tr>

<tr>
<td>No Loops</td>
<td>Supports Loops</td>
</tr>

</table>

<h4>Difference Between HTML and HTTP</h4>

<table class = "notes-table">

<tr>
<th>HTML</th>
<th>HTTP</th>
</tr>

<tr>
<td>Markup Language</td>
<td>Communication Protocol</td>
</tr>

<tr>
<td>Creates Web Pages</td>
<td>Transfers Web Pages</td>
</tr>

<tr>
<td>Defines Structure</td>
<td>Defines Communication Rules</td>
</tr>

<tr>
<td>Used by Developers</td>
<td>Used by Browsers and Servers</td>
</tr>

</table>

<h4>Real-Life Example</h4>

<p>
Consider building a house. The structure of the house, such as walls, rooms, doors, and windows, represents HTML. The paint and decoration represent CSS, while electrical systems and automation represent JavaScript.
</p>

<p>
Similarly, HTML provides the structure of a web page, CSS provides design, and JavaScript adds functionality.
</p>

<h4>Summary</h4>

<p>
HTML (Hyper Text Markup Language) is the standard markup language used to create and structure web pages. It uses tags to organize content and serves as the foundation of web development. HTML works together with CSS and JavaScript to create modern websites and web applications.
</p>

`;