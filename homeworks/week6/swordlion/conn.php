<?php
	

	$servername = "localhost";
    $username = "root";
    $password = "does578wear026";
    $dbname = "mentor";

    $conn = new mysqli($servername, $username, $password, $dbname);
    mysqli_set_charset($conn , "utf8");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }	

?>
