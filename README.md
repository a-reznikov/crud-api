## CRUD API

## Requirements

1. **[Node.js 22.9 or later.](https://nodejs.org/en)**

## Getting Started

1. `git clone https://github.com/a-reznikov/crud-api.git`;
1. Run `npm i` to install all dependencies;
1. Create .env file in root of the project with variable PORT (for example `PORT=4000`);
1. Run `npm run start:dev` to start the development mode;
1. Run `npm run start:prod` to start the production mode.

## Requests:

- Get all users `{{base_url}}/api/users`
- Get user by id `{{base_url}}/api/users/:userId`
- POST Add new user `{{base_url}}/api/users`
  - example body:

```
    {
      "username": "Name", // string
      "age": 2,  // number
      "hobbies": ["reading"] // string[]
    }
```

- PUT Update user `{{base_url}}/api/users/:userId``
  - example body:

```
    {
      "username": "Name", // string
      "age": 10,  // number
    }
```

- DELETE user by id `{{base_url}}/api/users/:userId`
