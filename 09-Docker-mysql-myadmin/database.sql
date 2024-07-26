-- Create a sample database if it doesn't exist
CREATE DATABASE IF NOT EXISTS test;

-- Switch to the database
USE test;

-- Create a sample table if it doesn't exist
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data into the table if it doesn't exist
INSERT INTO users (username, email)
SELECT 'john_doe', 'john@example.com'
WHERE NOT EXISTS (SELECT * FROM users WHERE username = 'john_doe' AND email = 'john@example.com')
UNION
SELECT 'jane_doe', 'jane@example.com'
WHERE NOT EXISTS (SELECT * FROM users WHERE username = 'jane_doe' AND email = 'jane@example.com');
