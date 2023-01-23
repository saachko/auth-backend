# Auth-backend

**Auth-backend** is a server for user registration and authentication.

- node.js
- express
- mongoose
- mongoDB

### Security:

- jsonwebtoken
- bcryptjs

[Link to the deploy](https://auth-backend-gjj1.onrender.com/)

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
