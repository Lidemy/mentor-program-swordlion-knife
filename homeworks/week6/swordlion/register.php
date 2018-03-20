

<style>

	input {
		font-size:20px;
		margin-top: 10px;
	}
	
	.container {
		padding: 5px;
		background: grey;
		width: 33%;
		margin:50px auto;
	}
</style>

<div class='container'>

	<h1>會員註冊</h1>

	<form action='/swordlion/registerr.php' method='POST'>
		帳號 :<br> <input type='text' name = 'usernames'/><br>
		密碼 :<br> <input type='password' name = 'passwords' /><br>
		<input type='submit' value= '送出'/>
		<input type='button' value= '已經有帳號' onclick="javascript:location.href='login.php'" / >
		
	</form>

</div>