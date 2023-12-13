# FastAPI Education Project with MongoDB

## Overview

This project is a FastAPI application with MongoDB as the database. It provides APIs for managing students, teachers, and courses.

## Features

- **Students API:** CRUD operations for managing student data.
- **Teachers API:** CRUD operations for managing teacher data.
- **Courses API:** CRUD operations for managing course data.
- **MongoDB Integration:** Data is stored in a MongoDB database.

## Requirements

- Python 3.8 or later
- FastAPI
- Motor (MongoDB driver for Python)
- MongoDB

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/frdayvz85/microservices.git
   cd learn-fastapi
    ```
2. Create a virtual environment:
   ```bash
   python -m venv venv
    ```
3. Activate the virtual environment:
    - On Windows:
        ```bash
        .\venv\Scripts\activate
        ```
    - On macOS/Linux:
        ```bash
        source venv/bin/activate
        ```
4. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
5. Configure `MongoDB`:
- Update the Database name in the `.env` file..
- Update the MongoDB connection URI in the `.env` file.

6. Run the FastAPI application:
    ```bash
    py app/main.py
    ```
 The API will be accessible at http://127.0.0.1:8000.

##### API Documentation
Access the Swagger documentation at http://127.0.0.1:8000/docs or the ReDoc documentation at http://127.0.0.1:8000/redoc for detailed API information.

##### Environment Variables
`MONGO_URI`: MongoDB connection URI.
`DATABASE_NAME`: MongoDB database name.

#### Project Structure
```bash
learn-fastapi/
│
├── .env                  # Environment variable configuration
├── requirements.txt      # Project dependencies
├── .gitignore
├── README.md
├── .env.example
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── src/
│   │   ├── __init__.py
│   │   ├── db.py
│   │   ├── app.py
│   │   ├── models/
│   │   │   ├── __init__.py
│   │   │   ├── student.py
│   │   │   ├── teacher.py
│   │   │   └── course.py
│   │   ├── routes/
│   │   │   ├── __init__.py
│   │   │   ├── student.py
│   │   │   ├── teacher.py
│   │   │   └── course.py
│   │   ├── helpers/
│   │   │   ├── __init__.py
│   │   │   ├── student.py
│   │   │   ├── teacher.py
│   │   │   ├── course.py  
```