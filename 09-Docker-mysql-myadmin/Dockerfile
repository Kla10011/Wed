# Use an official MySQL runtime as a parent image
FROM mysql:8.0

# Set environment variables for MySQL
ENV MYSQL_DATABASE=example_db
ENV MYSQL_ROOT_PASSWORD=0000
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=0000

# Add the SQL script to the Docker image
COPY database.sql /docker-entrypoint-initdb.d/

# Expose the MySQL port
EXPOSE 3306