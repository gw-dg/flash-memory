# Flashcard Project
## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MySQL

## Project Structure
- **flashcard-app/**: Frontend application
- **server.js**: Backend server file
- **package.json**: Backend dependencies and scripts

## Setup Instructions

### Cloning the Repository

1. Clone the repository using Git:
    ```bash
    git clone https://github.com/gw-dg/flash-memory.git
    ```

### Frontend

1. Navigate to the frontend directory:
    ```bash
    cd flashcard-app
    ```

2. Install the frontend dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm run dev
    ```

### Backend

1. Navigate to the root directory where `server.js` is located:
    ```bash
    cd ..
    ```

2. Install the backend dependencies:
    ```bash
    npm install
    ```

3. Start the backend server:
    ```bash
    node server.js
    ```

### Database

1. Ensure that MySQL is installed and running on your machine.

2. Create the database if it doesn’t exist. You can do this using the MySQL command line or a MySQL client:

    ```sql
    CREATE DATABASE flashcard_db;
    ```

3. Select the database:

    ```sql
    USE flashcard_db;
    ```

4. Create the `flashcards` table by running the following SQL command:

    ```sql
    CREATE TABLE flashcards (
        id INT AUTO_INCREMENT PRIMARY KEY,
        question VARCHAR(255) NOT NULL,
        answer TEXT NOT NULL
    );
    ```

### Additional Configuration

- **Database Configuration**: Update your backend configuration files with the correct database connection details (host, user, password, database name).

- **Dependencies**: Make sure that all required services and dependencies (e.g., MySQL) are installed and configured properly.

## Notes

- For detailed instructions on any additional setup or deployment, refer to the relevant sections in this document or other documentation provided in the repository.

