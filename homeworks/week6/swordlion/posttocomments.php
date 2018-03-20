<?php
	require('conn.php');

	$stmt3 = $conn->prepare("SELECT * from users_certificate LEFT JOIN users on users_certificate.username=users.username WHERE certificate =?");
	$stmt3->bind_param("s", $_COOKIE["member_id"]);
	$stmt3->execute();
	$result = $stmt3->get_result();
	if ($result->num_rows>0) {
		$takeid = $result->fetch_assoc();
		$user_id = $takeid["id"];
	}

	$content = '';
	$mainoradd = '';

	if (isset($_POST['content']) && !empty($_POST['content']) && isset($_COOKIE["member_id"])) {
		
	    $content = addslashes($_POST['content']); 
	    $mainoradd = $_POST['mainoradd'];

	    // 主留言

	    if($mainoradd === 0) {
	    	$stmt = $conn->prepare("INSERT INTO comments (`mainoradd`,`user_id` , `content`) VALUES ('0',? ,?)");
	    	$stmt->bind_param("ss",$user_id, $content);
	    	$stmt->execute();

			if ($stmt) {
				echo "<script>alert ('恭喜您新增了一筆留言!'); location.href ='add_comments.php';</script>";
			} else {
				echo "<script>alert ('oops!something went wrong!'); location.href ='add_comments.php';</script>";
			}

	    }

	    //副留言


	    if($mainoradd !== 0) {
	    	$stmt2 = $conn->prepare("INSERT INTO comments (`mainoradd`,`user_id` , `content`) VALUES (?,?,?)");
	    	$stmt2->bind_param("sss",$mainoradd,$user_id, $content);
	    	$stmt2->execute();
			
			if ($stmt2) {
				echo "<script>alert ('恭喜您新增了一筆留言!'); location.href ='add_comments.php';</script>";
			} else {
				echo "<script>alert ('oops!something went wrong!'); location.href ='add_comments.php';</script>";
			}
	    }
	} else if (!isset($_COOKIE["member_id"])) {
		echo "<script>alert ('請先登入!!!'); location.href ='login.php';</script>";
	} else {
		echo "<script>alert ('欄位不可為空!!!'); location.href ='add_comments.php';</script>";
	}
	
?>