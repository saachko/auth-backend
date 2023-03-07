# Auth-backend

**Auth-backend** is a server for user registration and authentication.

- node.js
- express
- mongoose
- mongoDB

### Security:

- jsonwebtoken
- bcryptjs

> **Attention!** The backend is deployed on a free service render.com, so when you run the application for the first time, you need to wait a little bit. Thank you 🙏

[Link to the server deploy](https://auth-backend-gjj1.onrender.com/)

[Link to the app deploy](https://saachko.github.io/auth-app/)

## Endpoints:

`Auth` (`auth/` route)

- `POST /signup` - new user registration
- `POST /signin` - user authorization

`User` (`users/` route)

> Non-authenticated users don't have access to the user management.

- `GET /users` - get all users
- `GET /:userId` - get user by id
- `PUT /:userId` - update user by id
- `DELETE /:userId` - delete user by id

_Developed by [Anastasiya Sachko](https://github.com/saachko)_
