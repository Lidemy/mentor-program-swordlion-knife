<?php
	
	$is_login = false;
	$user_id='';

	if (isset($_COOKIE["member_id"]) && !empty($_COOKIE["member_id"])) {
		$is_login = true;
    	$user_id = $_COOKIE["member_id"];
    } 


?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<title>留言板</title>
		<link rel="stylesheet" type="text/css" href="style.css" />
		<script src="script.js"></script>
</head>
		<div class="bar">
			<div class='welcome'>
				<?php 
					if ($is_login) {
						require('conn.php');
						$stmt = $conn->prepare("SELECT * from users_certificate WHERE certificate =?");
						$stmt-> bind_param("s", $_COOKIE["member_id"]);
						$stmt->execute();
						$findit = $stmt->get_result();
						$findit2 = $findit->fetch_assoc();
						echo " Welcome, ".$findit2['username'];
						echo "<a href='/swordlion/logout.php'><input class='logout' type='button' value='登出' /></a>";
					}
					else {
						echo "Welcome!!";
						echo "<a href='/swordlion/login.php'><input class='logout' type='button' value='登入' /></a>";
						echo "<a href='/swordlion/register.php'><input class='logout' type='button' value='註冊' /></a>";
					}
				?> 
			</div>
		</div>

		<div class ='container'>
			<h1>留言板</h1>

			<div class= 'box'>
				<form action='posttocomments.php' method='POST'>
					<input class='content' name='content' type ='text' placeholder="留言內容" /><br>
					<input type='hidden' name="mainoradd" value='0' />
					<?php
						if ($is_login) {
							echo "<input class='submit' type ='submit' value='留言'/>";
						} else {
							echo "<input class='submit' type ='submit' value='請先登入'/>";
						}
					?>
				</form>


			</div>
		</div>


		<?php

			require('conn.php');

			$stmt2 =$conn->prepare("SELECT * FROM users LEFT JOIN comments ON comments.user_id = users.id WHERE mainoradd = 0 ORDER BY created_at DESC");
			$stmt2->execute();
			$insure = $stmt2->get_result(); 

			if ($insure->num_rows >0) {
				while ( $data = $insure->fetch_assoc()) {
					require('maincomment.php');

					if ($data["user_id"] == $user_id) {
						require('revise.php');		
					}

					$stmt3 = $conn->prepare("SELECT * FROM comments LEFT JOIN users ON comments.user_id = users.id WHERE mainoradd =? ORDER BY created_at DESC");
					$stmt3->bind_param("s" , $data["id"]);
					$stmt3->execute();
					$addfindexe = $stmt3->get_result();

					if ($addfindexe->num_rows >0) {
						while ( $data2 = $addfindexe->fetch_assoc()) {
							require('subcomment.php');
			
							if ($data2["user_id"] == $user_id) {
								require('revise.php');
					}
		?>			
				</div>
		<?php			
					}
				}	
			    require('response.php')
		?>
				
				</div>
		<?php
				}
			}	
		?>
</html>