# Motivation

There are two reasons why this repo exists.
1) My main mission behind this repo is to show you my ability to work with this stack of technologies and how I organize the project and code as well.

2) Just challenging myself with the latest version (during development) of NextJs (v14+) and React-toolkit

**I haven't used any AI tools like ChatGPT, CoPIlot, or any other "crutches" for the mind.**

## Requirements

- [Node](https://nodejs.org/en/) `^18.17.0`
- [NPM](https://www.npmjs.com/) `^9.6.7`

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

Create a **.env** file in a root folder and copy-paste variables below

```dotenv
API_MOCKING=true

API_URL=https://dummyjson.com
BASE_URL=http://localhost:3000/api

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

## Used technologies

- NodeJS- https://nodejs.org/en/
- Git - https://git-scm.com/
- TypeScript - https://www.typescriptlang.org/
- NextJS (v13+) - https://nextjs.org/

## Made by

Author: [D. Hristov](https://dhristov.eu/) | [Documentation](https://nextjs.org/docs)
