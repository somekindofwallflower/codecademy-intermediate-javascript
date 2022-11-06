###  Message Mixer

This project offers a message-encryption service that transforms input text, using various ciphers, and displays the encrypted message to the console.

There are three encryption methods provided by this service:

<ol>
    <li>A “Caesar Cipher” in which the characters of the input message are shifted alphabetically by a given amount.</li>
    <li>A “Symbol Cipher” in which select characters from the input message are replaced with visually similar symbols.</li>
    <li>A “Reverse Cipher” in which each word of the input message is reversed in place.</li>
</ul>


To use this service, run the command below:

``
node message-mixer.js ['caesar'|'symbol'|'reverse'] [amount]
``


