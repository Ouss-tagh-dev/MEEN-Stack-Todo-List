### Todo List Application

This repository contains a simple Todo List application built with Express.js, Node.js, and MongoDB, utilizing the EJS templating engine. The application allows users to create, read, update, and delete todo items.

### Technologies Used

- **Express.js**: A minimalist web framework for Node.js, used to handle HTTP requests and routes.
- **Node.js**: A JavaScript runtime environment used to execute server-side code.
- **MongoDB**: A NoSQL database used for storing todo items.
- **EJS (Embedded JavaScript)**: A templating engine used to generate HTML with plain JavaScript.
- **Body-parser**: Middleware for handling HTTP POST request data.
- **Dotenv**: A module for loading environment variables from a `.env` file.
- **Moment**: A library for parsing, validating, manipulating, and formatting dates and times.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js, used to simplify interactions with MongoDB databases.
- **Nodemon**: A utility that automatically restarts the Node.js application when file changes are detected, used for development purposes.

### Installation

1. Clone the repository:

    ```
    git clone https://github.com/Ouss-tagh-dev/MEEN-Stack-Todo-List.git
    ```

2. Install dependencies:

    ```
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory of the project and add the following variables:

    ```
    CONNECTION_URL=mongodb://127.0.0.1:27017/todoDb
    PORT=8000
    ```

    Modify the `CONNECTION_URL` and `PORT` values according to your MongoDB connection string and preferred server port.

4. Start the server:

    ```
    npm start
    ```

    This will start the server using Nodemon, allowing automatic restarts on file changes during development.

### Usage

- Navigate to `http://localhost:8000` in your web browser to access the Todo List application.
- From the homepage, you can view existing todos, add new todos, update existing todos, and delete todos.
- The application utilizes CRUD (Create, Read, Update, Delete) operations to manage todo items.
- Todos are stored in a MongoDB database and displayed using EJS templates.

### Contributing

Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests to help improve this project.

