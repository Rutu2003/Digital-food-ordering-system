<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "resto";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO feedback (namee, addr, mob, feed)
VALUES ($namee, $addr, $mobno, $feedback)";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?> 