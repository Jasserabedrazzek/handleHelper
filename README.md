
---


# HandleHelper

![npm version](https://img.shields.io/npm/v/@jasserabedrazzek/handlehelper)
![npm downloads](https://img.shields.io/npm/dm/@jasserabedrazzek/handlehelper)
[![GitHub stars](https://img.shields.io/github/stars/Jasserabedrazzek/handleHelper)](https://github.com/Jasserabedrazzek/handleHelper/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Jasserabedrazzek/handleHelper)](https://github.com/Jasserabedrazzek/handleHelper/network/members)
[![GitHub issues](https://img.shields.io/github/issues/Jasserabedrazzek/handleHelper)](https://github.com/Jasserabedrazzek/handleHelper/issues)
[![GitHub license](https://img.shields.io/github/license/Jasserabedrazzek/handleHelper)](LICENSE)
![Top Language](https://img.shields.io/github/languages/top/Jasserabedrazzek/handleHelper)
![Code Style](https://img.shields.io/badge/code%20style-standard-brightgreen)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange)

---

**HandleHelper** is a lightweight TypeScript library for **Express.js** that simplifies **async error handling** and **API responses**. It provides easy-to-use wrappers for asynchronous route handlers and a standardized way to send JSON responses.

---

## Features

- Wrap async Express route handlers to catch errors automatically.  
- Standardize API responses with a consistent structure.  
- Fully written in TypeScript.  
- Compatible with Express 5.x.

---

## Installation

```bash
npm install @jasserabedrazzek/handlehelper express
# or
yarn add @jasserabedrazzek/handlehelper express
````

> **Note:** `express` is a peer dependency.

---

## Quick Start

```ts
import express from "express";
import { asyncHandler, apiResponse } from "@jasserabedrazzek/handlehelper";

const app = express();

// Async route example
app.get('/hello', asyncHandler(async (req, res) => {
    const message = await Promise.resolve("Hello World!");
    apiResponse(res, { message, data: { message } });
}));

// Global error handler
app.use((err, req, res, next) => {
    console.error(err);
    apiResponse(res, {
        statusCode: 500,
        success: false,
        message: "Internal Server Error",
        data: null
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

---

## Usage Details

### 1. Async Error Handling

Instead of manually wrapping each route with `try/catch`, use `asyncHandler`:

```ts
app.get("/users", asyncHandler(async (req, res) => {
    const users = await getUsersFromDB();
    apiResponse(res, {
        statusCode: 200,
        success: true,
        message: "Users fetched successfully",
        data: users
    });
}));
```

**Explanation**:

* `asyncHandler(fn)` wraps your async function and automatically forwards errors to Express's `next()` middleware.
* Reduces repetitive `try/catch` code.

---

### 2. Standard API Responses

Use `apiResponse` to send consistent responses:

```ts
app.get("/example", (req, res) => {
    apiResponse(res, {
        statusCode: 200,
        success: true,
        message: "Request successful",
        data: { foo: "bar" },
        extraInfo: "Optional extra fields are supported"
    });
});
```

**Response Structure:**

```json
{
    "success": true,
    "message": "Request successful",
    "data": { "foo": "bar" },
    "extraInfo": "Optional extra fields are supported"
}
```

**Default values:**

* `statusCode` → `200`
* `success` → `true`
* `message` → `""`
* `data` → `null`

---

## API Reference

### `asyncHandler(asyncFn)`

* **Description:** Wraps an async Express route function to automatically catch errors and forward them to `next()`.
* **Parameters:**

  * `asyncFn: (req: Request, res: Response, next: NextFunction) => Promise<any>`
* **Returns:** Wrapped async function.

### `apiResponse(res, options)`

* **Description:** Sends a standardized JSON response.
* **Parameters:**

  * `res: Response` → Express response object
  * `options: IResponseOptions` → Options object:

```ts
interface IResponseOptions {
    statusCode?: number;
    success?: boolean;
    message?: string;
    data?: any;
    [key: string]: any; // Additional optional fields
}
```

---

## TypeScript Support

Fully typed. You can import `asyncHandler` and `apiResponse` in TypeScript projects without extra type definitions.

---

## Flow Diagram

```text
      +-----------------+
      |  Express Route  |
      +--------+--------+
               |
               v
      +-----------------+
      | asyncHandler(fn)|  <-- wraps async function
      +--------+--------+
               |
         Executes async
               v
      +-----------------+
      |    Route Code   |
      +--------+--------+
               |
               v
      +-----------------+
      |  apiResponse()  |  <-- sends standardized JSON
      +--------+--------+
               |
               v
      +-----------------+
      |   Express Res   |
      +-----------------+
```

---

## License

MIT License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#license)

---

## Contributing

Contributions are welcome! Open an issue or pull request for improvements, bug fixes, or new features.

---




