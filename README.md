# Employee Management System

## Overview

The Employee Management System is a project developed during the learning process with AdonisJS. It is designed to list and manage employee details within an organization. The system includes CRUD (Create, Read, Update, Delete) operations for managing employees and employs API tokens for authentication and authorization.

## Technologies Used

- **AdonisJS:** Framework for building the backend application.
- **Lucid ORM:** Object-Relational Mapping tool used with AdonisJS.
- **MySQL:** Database for storing employee and user information.
- **API Tokens:** For authentication and authorization.

## Frontend

The frontend repository for this project can be found here:

- [Frontend Repository](https://www.github.com/Varunkumar0812/employee-details-frontend)

## Database Schema

### Employee Table

- **id:** Primary key, auto-incremented integer.
- **name:** Name of the employee.
- **role:** Role of the employee in the organization.
- **salary:** Salary of the employee.
- **address:** Address of the employee.
- **mobile:** Mobile number of the employee.
- **pincode:** Pincode of the employee's address.

### User Table

- **id:** Primary key, auto-incremented integer.
- **username:** Username for the user.
- **email:** Email address of the user.
- **password:** Hashed password of the user.

## Features

- **CRUD Operations:** Create, Read, Update, and Delete employee records.
- **Authentication and Authorization:** Implemented using API tokens.
- **Registration and Login Routes:** For user management and access control.

## Future Work

The project is open for improvements and additional features. You are welcome to use the code and contribute to its development.

## Contribution

Feel free to use the code, suggest improvements, or contribute to the project. Your contributions are welcome!

## License

This project is open-source and free to use under the MIT License.

## Acknowledgements

- **AdonisJS:** For the robust backend framework.
- **Lucid ORM:** For simplifying database interactions.
- **MySQL:** For reliable data storage.

For any questions or further discussion, please reach out to the project maintainers.
