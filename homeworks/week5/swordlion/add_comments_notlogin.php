<?php
	$is_login = false;
	setcookie("member_id","",time()-3600);
?>


<style>
	.flexend {
		display: inline-block;
		position: absolute;
		right:60px;
	}
	.flexend1 {
		display: inline-block;
		position: absolute;
		right:10px;
	}

	
	.container {
		width:33%;
		margin: auto;
		padding: 20px;
	}
	.box {
		border:1px solid grey;
	}
	input {
		margin: 15px 10px;
	}
	.content {
		width:300px;
		height:50px;
	}

</style>


<a href='/swordlion/login.php'><input class='flexend' type="button" value="登入" /></a>
<a href='/swordlion/register.php'><input class='flexend1' type="button" value="註冊" /></a>

<div class ='container'>
	<h1>留言板</h1>

	<div class= 'box'>
		<input class='nickname' type ='text' placeholder="您的暱稱" /><br>
		<input class='content' type ='text' placeholder="留言內容" /><br>
		<input type ='submit' value='送出' onclick="alert('you have not login yet'); location.href='login.php'"/>


	</div>
	<h1>必須登入才能瀏覽訊息!!!</h1>
</div>
>