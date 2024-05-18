# Bug Tracking System

This is a bug tracking system built with Node.js, Express, MongoDB, and Passport.js for authentication. It allows users to register, log in, and report bugs.

## Features

- User authentication (login, logout, register)
- Flash messages for success and error notifications
- Basic bug reporting functionality

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Passport.js
- EJS
- bcrypt.js
- body-parser
- connect-flash
- express-session

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have a MongoDB database (local or hosted).

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/bug-tracking-system.git
    cd bug-tracking-system
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:

    ```
    MONGODB_URI=your_mongodb_uri
    SECRET=your_secret_key
    PORT=3000
    ```

4. Start the application:

    ```bash
    npm start
    ```

    The server will start on `http://localhost:3000`.

## Project Structure

- `models/User.js` - User model definition using Mongoose.
- `routes/auth.js` - Authentication routes (login, register, logout).
- `routes/bug.js` - Bug reporting routes.
- `views` - EJS templates for rendering pages.

## Usage

- Open your browser and navigate to `http://localhost:3000`.
- Register a new account or use the default admin account:
    - **Username:** `admin`
    - **Password:** `password`
- Log in and start reporting bugs.

## Screenshots

![image](https://github.com/chavez62/JS-Bug-Track/assets/67764701/adc045ae-7e6b-4710-8e55-568f6ee7dd17)
![image](https://github.com/chavez62/JS-Bug-Track/assets/67764701/f6583563-47ce-46c9-bbbc-ca8f3970c40c)


## Contributing

If you want to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Express](https://expressjs.com/)
- [Passport](http://www.passportjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [EJS](https://ejs.co/)
- [bcrypt.js](https://github.com/dcodeIO/bcrypt.js)

