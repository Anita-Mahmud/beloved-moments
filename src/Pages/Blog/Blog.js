import { Accordion, Table } from 'flowbite-react';
import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
    return (
        <div className='max-w-screen-lg mx-auto my-8 shadow-2xl shadow-slate-600'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Blog</title>
            </Helmet>
            <Accordion flush={true}>
  <Accordion.Panel >
    <Accordion.Title>
    Difference between SQL and NoSQL
    </Accordion.Title>
    <Accordion.Content>
    <Table hoverable={true}>
  <Table.Head className='text-center'>
    
    <Table.HeadCell>
    SQL
    </Table.HeadCell>
    <Table.HeadCell>
    NoSQL
    </Table.HeadCell>
  </Table.Head>
  <Table.Body className="divide-y">
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      
      <Table.Cell>
      SQL databases are primarily called as Relational Databases (RDBMS)
      </Table.Cell>
      <Table.Cell>
      NoSQL database are primarily called as non-relational or distributed database.
      </Table.Cell>
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      
      <Table.Cell>
      SQL databases are vertically scalable
      </Table.Cell>
      <Table.Cell>
      NoSQL databases are horizontally scalable
      </Table.Cell>
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      
      <Table.Cell>
      SQL databases are table-based
      </Table.Cell>
      <Table.Cell>
      NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores
      </Table.Cell>
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      
      <Table.Cell>
      SQL databases follow ACID properties
      </Table.Cell>
      <Table.Cell>
      NoSQL database follows the Brewers CAP theorem
      </Table.Cell>
    </Table.Row>
   
  </Table.Body>
</Table>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
    What is JWT, and how does it work?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
      Authentication server verifies the credentials and issues a jwt signed using either a secret or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret / public key.
      </p>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
    What is the difference between javascript and NodeJS?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
      </p>
      
      <ul className="mb-2 ml-6 text-gray-500 dark:text-gray-400 list-disc list-outside">
      <li>JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.</li>
<li>

JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.
</li>
<li>

JavaScript can manipulate DOM or add HTML within whereas Node.js doesnt have the capability to add HTML.
</li>

<li>
JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development
</li>
      </ul>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
    How does NodeJS handle multiple requests at the same time?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
      </p>
      
    </Accordion.Content>
  </Accordion.Panel>
</Accordion>

        </div>
    );
};

export default Blog;