<?php
	require('conn.php');

	$usernames='';
	$passwords='';


	if (isset($_POST['usernames']) && isset($_POST['passwords'])) {
		
		$username = $_POST['usernames']; 
	   	$password = $_POST['passwords'];
	
	    $take = "SELECT * from users WHERE username ='$username'";
		$result = $conn->query($take);
	  

		if($result->num_rows > 0) {
			echo "<script>alert ('這個帳號有人用了!');location.href ='register.php';</script>";
		} else {
			$insert = "INSERT INTO users (`username`, `password`) VALUES ('$username', '$password');";
			$insertin = $conn->query($insert);
			if ($insertin){
				setcookie("member_id", "$username", time()+3600*24);
				echo "<script>alert ('註冊成功!');location.href ='add_comments.php';</script>";
			} else {
				echo "<script>alert ('註冊失敗，請重新註冊!');location.href ='register.php';</script>";
			}
		}

	}


?>