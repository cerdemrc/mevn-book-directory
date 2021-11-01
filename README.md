<div align="center">
  
  <img src="https://media.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif" width="10%"> 
  <p>📢 A book directory application with mevn stack (mongo, express, vue, node) </p>
  <p><strong>Used Techs:</strong> Node Js, Express Js, MongoDb, Vue Js, Vuex, Vue-Router, Axios, SCSS</p>
  
  ![repo size](https://img.shields.io/github/repo-size/cerdemrc/mevn-book-directory?style=plastic)
  ![last commit](https://img.shields.io/github/last-commit/cerdemrc/mevn-book-directory?style=plastic)
</div>

## :page_facing_up: Table of contents
  * [:camera: Screenshots](#camera-screenshots)
  * [:computer: Technologies](#computer-technologies)
    * [Frontend](#frontend)
    * [Backend](#backend)
  * [:globe_with_meridians: API Routes](#globewithmeridians-apiroutes)
  * [:pushpin: .env](#pushpin-env)
  * [:mailbox: Contact](#mailbox-contact)

## :camera: Screenshots

<img src="https://user-images.githubusercontent.com/40372039/138366037-d4ea25cd-c95b-4033-b0a0-aeaf3ed5813c.png">

## :computer: Technologies

### Frontend
- <strong>Vue</strong> - as a Frontend Framework
- <strong>Vue-Router</strong> - for routing
- <strong>Vuex</strong> - for state management
- <strong>Axios</strong> - for make HTTP requests
### Backend
- <strong>MongoDb and Mongoose</strong> - MongoDb as a Database and mongoose as a Object Data Modeling library for MongoDB and Node.js
- <strong>Node</strong> - runtime JavaScript
- <strong>Express</strong> - as a backend Framework
- <strong>JsonWebToken</strong> - for creating JSON-based access tokens
- <strong>bcryptjs</strong> - for hashing the user passwords

## :globe_with_meridians: API Routes

| Method | Endpoint | Authentication | Description |
| :-------- | :------- | :---------- |:----------- |
| POST      | `/api/auth/register` |  | Register |
| POST      | `/api/auth/login` |  | Login |
| GET      | `/api/books` | required  | Return all books infos in DB  |
| POST      | `/api/books` | required  | Add a book to the book directory in DB  |
| DELETE      | `/api/books/:id` | required |Delete book infos in DB  |

## :pushpin: .env

```
PORT=5000
NODE_ENV=development

MONGO_URI= <YOUR_MONGO_URI>

JWT_SECRET_KEY= <YOUR_SECRET_KEY>
JWT_EXPIRE=30m
JWT_COOKIE=30
```

## :mailbox: Contact

* Repo created by [Ceren](https://github.com/cerdemrc)
* Email: cerdemrc@gmail.com

<hr/>
<p align="center">
Developed with ❤️
</p>
