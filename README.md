# Motivation

This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

**I haven't used any kind of AI tools like ChatGPT, CoPIlot, or any other "
crutches" for the mind.**

## Requirements

- [Node](https://nodejs.org/en/) `^16.15.0`
- [NPM](https://www.npmjs.com/) `^8.5.5`

## Installation

After confirming that your environment meets the
above [requirements](#requirements), it is time to clone the project
locally by doing the following:

```bash
$ git clone git@github.com:DeanHristov/fake-e-commerce-web-app.git <project-name>
$ cd <project-name>
```

When you're done with the steps above, run the following command:

```bash
$ npm install # or yarn install
```

## Configuration

Create a **.env.local** file in a root folder and copy-paste variables below

```dotenv
API_MOCKING=true
API_URL=https://my-backend-endpoint.com/api

JWT_SECRET=super-secret-word
JWT_EXPIRE=1h
```

## Running the Project

Running the app in **development** mode

```bash
$ npm run dev
```

Running the app in **production** mode. Firstly, build the app with the
following command:

```bash
$ npm run build
```

then start the app

```bash
$ npm start
```

## Included functionality

### Users & Authentication

- Authentication
    - A JWT and cookie which expires in 1 hour
- User login
    - User can login with email and password
    - Plain text password will compare with stored hashed password
    - Once logged in, a token will be sent along with a cookie (token).
- User logout
    - Cookie will be destroyed
    - Token will be invalidated

Currently, there are two kinds of users. Each of them has different abilities

| # | email                    | pass   | type    | effects     |
|---|--------------------------|--------|---------|-------------|
| 1 | admin@example.com        | 123456 | admin   | Super user  |
| 2 | regular-user@example.com | 123456 | regular | can do CRUD |

## Main tasks

All tasks automation are based
on [NPM scripts](https://docs.npmjs.com/misc/scripts).

| Tasks                   | Description                                   |
|-------------------------|-----------------------------------------------|
| `npm run dev`           | Running the app in **dev** mode               |
| `npm run build`         | Building the app in **production-ready** mode |
| `npm run start`         | Running the app in **prod** mode              |
| `npm run lint`          | Linting the code                              |
| `npm run test`          | Running the unit tests ( using jest/RTL)      |
| `npm run test:watch`    | Running the unit tests in "watch" mode        |
| `npm run test:coverage` | Running the coverage of the unit tests        |
| `npm run storybook`     | Running the storybook at port 6006            |

## Used technologies

- NodeJS- https://nodejs.org/en/
- Git - https://git-scm.com/
- TypeScript - https://www.typescriptlang.org/
- NextJS (v13+) - https://nextjs.org/

## Made by

Author: [D. Hristov](https://dhristov.eu/) | [Documentation](https://nextjs.org/docs)
