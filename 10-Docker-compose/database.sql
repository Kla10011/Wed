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
INSERT IGNORE INTO users (username, email) VALUES
('john_doe', 'john@example.com'),
('jane_doe', 'jane@example.com'),
('ronnakon_mekvimanloi', 'klaza565@gmail.com');