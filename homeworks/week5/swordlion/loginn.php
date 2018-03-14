<?php
	require('conn.php');
	
	$usernames='';
	$passwords='';
	

	if (isset($_POST['usernames']) && isset($_POST['passwords'])) {
		
		$username = $_POST['usernames']; 
	    $password = $_POST['passwords']; 


		$take = "SELECT * from users WHERE username ='$username'and password = '$password' ";
		$result = $conn->query($take);

		if ($result->num_rows > 0) {
			setcookie("member_id", "$username", time()+3600*24);
			echo "<script>alert ('登入成功'); location.href ='add_comments.php';</script>";
		} else {
			echo "<script>alert ('登入失敗!請再試一次~'); location.href ='login.php';</script>";
		}
	}
	echo "<script>alert ('欄位不能為空!'); location.href ='login.php';</script>";
	
?>

