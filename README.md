Peer Review Assignment – Backend App with Node.js & Express
This project is part of the "Developing Backend Apps with Node.js and Express" course on Coursera.

It includes implementation of:

REST API for book management

User registration & login

Book reviews (Add, Edit, Delete)

Axios-based Node.js client scripts using async/await and promises

 Features by Task
General Users:
Task	Feature	Endpoint
1	Get all books	GET /books
2	Get book by ISBN	GET /books/:isbn
3	Get books by author	GET /books/author/:author
4	Get books by title	GET /books/title/:title
5	Get reviews for a book	GET /review/:isbn
6	Register a new user	POST /register
7	Login as a registered user	POST /login

Registered Users:
Task	Feature	Endpoint
8	Add/Modify review for a book	PUT /auth/review/:isbn
9	Delete review by user	DELETE /auth/review/:isbn

 Axios Client Scripts (Node.js)
Folder: axios-client/

Task	File	Description
10	task10_getAllBooks.js	Get all books (async/await)
11	task11_searchByISBN.js	Get book by ISBN (promises)
12	task12_searchByAuthor.js	Search by author (async/await)
13	task13_searchByTitle.js	Search by title (async/await)

🚀 How to Run
Install dependencies

bash
Copy
Edit
npm install
Start the backend server

bash
Copy
Edit
npm start
Run client scripts

bash
Copy
Edit
node axios-client/task10_getAllBooks.js
 Screenshots
Screenshots for each task (1–13) have been included as .png files in the ZIP folder as per lab requirements.

