<?php
function createTableProjects(){
    $dbhost="localhost";
    $dbuser="root";
    $dbpass='';
    $db="projects";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    $sql = 'CREATE TABLE projects (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255),
        description VARCHAR(255),
        github_link VARCHAR(255),
        web_link VARCHAR(255),
        image_link VARCHAR(255)
    )';
    if ( $conn->query($sql) === TRUE) {
        echo 'Table created succesfully';
    } else {
        echo 'Error creating table: '. $conn->error;
    }
}
function createDatabase() {
    $servername = "localhost";
    $username = "root";
    $password = "";

    // Create connection
    $conn = new mysqli($servername, $username, $password);
    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }

    // Create database
    $sql = "CREATE DATABASE projects";
    if ($conn->query($sql) === TRUE) {
    echo "Database created successfully";
    } else {
    echo "Error creating database: " . $conn->error;
    }

}
?>