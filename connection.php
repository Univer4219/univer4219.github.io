<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "samba";

// Create connection
$conn = new mysqli($servername,
	$username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
	die("Connection failed: "
		. $conn->connect_error);
}

$sqlquery = "INSERT INTO samba(username, email, pass) VALUES
	('username', 'email', 'password')";

if ($conn->query($sql) === TRUE) {
	echo "record inserted successfully";
} else {
	echo "Error: " . $sql . "<br>" . $conn->error;
}

?>