import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='mt-3'>
                <h3>Q.1 Difference between SQL and NoSQL.</h3>
                <p>Type – 
SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. 
 

Language – 
SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. 
A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. 

 

Scalability – 
In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database. It is similar to adding more floors to the same building versus adding more buildings to the neighborhood. Thus NoSQL can ultimately become larger and more powerful, making these databases the preferred choice for large or ever-changing data sets. 
 

Structure – 
SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure. 
 

Property followed – 
SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability) whereas the NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance). 
 

Support – 
Great support is available for all SQL database from their vendors. Also a lot of independent consultations are there who can help you with SQL database for a very large scale deployments but for some NoSQL database you still have to rely on community support and only limited outside experts are available for setting up and deploying your large scale NoSQL deployments. </p>
            </div>
            <div className='mt-3'>
                <h3>Q.2 What is JWT and how does it work?</h3>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued fer from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

A JWT is a string made up of three parts, separated by dots (.), and serialized using base64.</p>
            </div>
            <div className='mt-3'>
                <h3>Q.3 What is the difference between javascript and NodeJS?</h3>
                <div>
                    <h4>Javascript</h4>
                    <p>Javascript is a programming language that is used for writing scripts on the website. </p>
                    <p>Javascript can only be run in the browsers.</p>
                    <p>It is basically used on the client-side.</p>
                    <p>Javascript is capable enough to add HTML and play with the DOM.</p>
                </div>
                <div>
                    <h4>NodeJS</h4>
                    <p>NodeJS is a Javascript runtime environment.</p>
                    <p>We can run Javascript outside the browser with the help of NodeJS.</p>
                    <p>It is mostly used on the server-side.</p>
                    <p>Nodejs does not have capability to add HTML tags.</p>
                </div>
            </div>
            <div className='mt-3'>
                <h3>Q.4 How does NodeJS handle multiple requests at the same time?</h3>
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 

If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
            </div>
        </div>
    );
};

export default Blog;