<?php
	
	$is_login = false;
	$user_id='';

	if (isset($_COOKIE["member_id"]) && !empty($_COOKIE["member_id"])) {
		$is_login = true;
    	$user_id = $_COOKIE["member_id"];
	} else if ($is_login == false) {
		echo "<script>alert('you have to login first!!!')</script>";
		header("Location:add_comments_notlogin.php");
	}


?>


<style>
	.welcome {
		display: inline-block;
		position: absolute;
		right:70px;
	}
	input {
		margin: 10px 10px;
	}
	.logout {
		display: inline-block;
		position: absolute;
		right:10px;
		margin:0px;
	}

	.container {
		width:33%;
		margin: auto;
		padding: 20px;
	}
	.box {
		border:1px solid grey;
	}
	
	.content {
		display: inline-block;
		width:300px;
		height:40px;
		margin-top: 0px;
	}
	.submit {
		margin-top:0px;
		margin-bottom:10px; 
	}
	.contentarea {
		border:1px solid grey;
		width:33%;
		margin:15px auto;
	}
	div > .nickname {
		margin: 5px 10px;
	}
	div > .content {
		margin: 5px 10px;
	}
	.nickname {
		display: inline-block;
		width: 40%;
	}
	.time {
		display: inline-block;
		width: 50%;
		text-align: right;
		margin: 5px 10px;
	}
	.addcomments {
		margin:10px 50px;
		background: pink; 
	}
	.littlebox {
		margin:10px 50px;
		background: pink; 
	}
	.littlebox > form {
		display: none;
	}
	.openbox {
		width:50px;
		margin-left: 10px;
		color:blue;
	}
	.openbox:hover {
		cursor: pointer;
		color:darkblue;
	}
	.delete {
		display: inline;
		text-align: right;
		margin-left: 65px;
	}
	.delete > input {
		margin-left: 0px;
	}
</style>

<script type="text/javascript">
	document.addEventListener('DOMContentLoaded', function () {
		document.querySelector('body').addEventListener('click' , (e)=> {
			if(e.target.className =='openbox') {
				if (e.target.innerText == '回應→') {
					e.target.innerText = '回應↓';
					e.target.nextElementSibling.style.display='block';
				}else if (e.target.innerText == '回應↓') {
					e.target.innerText = '回應→';
					e.target.nextElementSibling.style.display='none';
				}
			}

		})
	})
</script>

<div class='welcome'><?php echo $_COOKIE["member_id"] . " , Welcome!! ";?> </div>
<a href='/swordlion/add_comments_notlogin.php'><input class='logout' type="button" value="登出" /></a>

<div class ='container'>
	<h1>留言板</h1>

	<div class= 'box'>
		<form action='posttocomments.php' method='POST'>
			<input class='nickname' name='nickname' type ='text' placeholder="您的暱稱" value='<?php echo $user_id;?>' /><br>
			<input class='content' name='content' type ='text' placeholder="留言內容" /><br>
			<input type='hidden' name="mainoradd" value='0' />
			<input class='submit' type ='submit' value='留言'/>
		</form>


	</div>
</div>


<?php

	require('conn.php');

	$insure = "SELECT * FROM comments WHERE mainoradd = 0";
	$insure_result = $conn->query($insure);

	if ($insure_result->num_rows >0) {
		while ( $data = $insure_result->fetch_assoc()) {
?>
		<div class='contentarea'>
			<div class='nickname'><?php echo $data["nickname"];?></div>
			<div class='time'><?php echo $data["created_at"];?></div>
			<hr>
			<div class='content'><?php echo $data["content"];?></div>

<?php
		if ($data["nickname"] == $user_id) {
?>
		<div class='delete'><input type='button' value='修改'/>
		<input type='button' value='刪除'/></div>
<?php			
		}

		$addfind = "SELECT * FROM comments WHERE mainoradd =" . $data["id"];
		$addfindexe = $conn->query($addfind);

		if ($addfindexe->num_rows >0) {
			while ( $data2 = $addfindexe->fetch_assoc()) {
?>
			<div class='addcomments'>
				<div class='nickname'><?php echo $data2["nickname"];?></div>
				<div class='time'><?php echo $data2["created_at"];?></div>
				<hr>
				<div class='content'><?php echo $data2["content"];?></div>
			</div>
<?php			
			}
		}	
	
?>
			<div class='littlebox'>
				<div class='openbox'>回應→</div>
				<form action='posttocomments.php' method="POST">
					<input class='nickname' name='nickname' type ='text' placeholder="您的暱稱" /><br>
					<input class='content' name='content' type ='text' placeholder="留言內容" /><br>
					<input type='hidden' name="mainoradd" value=<?php echo $data["id"] ?> >
					<input class='submit' type ='submit' value='留言'/>

				</form>
			</div>
		</div>
<?php
		}
	}	
?>