<div align="center">
  <img src="https://media.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif" width="10%">
  <p>📢 A book directory application with mevn stack (mongo, express, vue, node) </p>
  <p><strong>Used Techs:</strong> Node Js, Express Js, MongoDb, Vue Js, Vuex, Vue-Router, Axios, SCSS</p>
</div>

<h2>📷 Screenshots</h2>
<img src="https://user-images.githubusercontent.com/40372039/136376422-ae2d28df-e60c-43cd-b514-85e9a64bdce3.png">

## ⚙ Stack
- <strong>MongoDb and Mongoose</strong> - MongoDb as a Database and mongoose as as a Object Data Modeling library for MongoDB and Node.js
- <strong>Node</strong> - runtime JavaScript
- <strong>Express</strong> - as a backend Framework
- <strong>Vue</strong> - as a Frontend Framework
- <strong>Vue-Router</strong> - for routing
- <strong>Vuex</strong> - for state management
- <strong>Axios</strong> - for make HTTP requests
- <strong>JsonWebToken</strong> - for creating JSON-based access tokens
- <strong>bcryptjs</strong> - for hashing the user passwords

## ⚡ API Routes

| Method | Endpoint | Authentication | Description |
| :-------- | :------- | :---------- |:----------- |
| POST      | `/api/auth/register` |  | Register |
| POST      | `/api/auth/login` |  | Login |
| GET      | `/api/books` | required  | Return all books infos in DB  |
| POST      | `/api/books` | required  | Add a book to the book directory in DB  |
| DELETE      | `/api/books/:id` | required |Delete book infos in DB  |

## 🛠️ .env
```
PORT=5000
NODE_ENV=development

MONGO_URI= <YOUR_MONGO_URI>

JWT_SECRET_KEY= <YOUR_SECRET_KEY>
JWT_EXPIRE=30m
JWT_COOKIE=30
```


<hr/>
<p align="center">
Developed with ❤️
</p>


