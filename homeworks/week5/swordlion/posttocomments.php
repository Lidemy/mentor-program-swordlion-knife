<?php
	require('conn.php');

	$nickname = '';
	$content = '';
	$mainoradd = '';



	if (isset($_POST['nickname']) && isset($_POST['content']) && !empty($_POST['nickname']) && !empty($_POST['content']) && !isset($_COOKIE["member_id"])) {
		
		$nickname = $_POST['nickname']; 
	    $content = addslashes($_POST['content']); 
	    $mainoradd = $_POST['mainoradd'];

	    // 主留言

	    if($mainoradd === 0) {

			$pushin = "INSERT INTO comments (`mainoradd`,`nickname` , `content`) VALUES ('0','$nickname' ,'$content'); ";
			$bigcomment = $conn->query($pushin);

			if ($bigcomment) {
				echo "<script>alert ('恭喜您新增了一筆留言!'); location.href ='add_comments.php';</script>";
			} else {
				echo "<script>alert ('oops!something went wrong!'); location.href ='add_comments.php';</script>";
			}

	    }

	    //副留言


	    if($mainoradd !== 0) {

			$pushin2 = "INSERT INTO comments (`mainoradd`,`nickname` , `content`) VALUES ('$mainoradd','$nickname' ,'$content'); ";
			$subcomment = $conn->query($pushin2);

			if ($subcomment) {
				echo "<script>alert ('恭喜您新增了一筆留言!'); location.href ='add_comments.php';</script>";
			} else {
				echo "<script>alert ('oops!something went wrong!'); location.href ='add_comments.php';</script>";
			}
	    }
	} else {
		echo "<script>alert ('欄位不可為空!!!'); location.href ='add_comments.php';</script>";
	}
	
?>