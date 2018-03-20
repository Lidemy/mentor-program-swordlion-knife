
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

	<h1>會員登入</h1>

	<form action='/swordlion/loginn.php' method='POST'>
		帳號 :<br> <input type='text' name = 'usernames'/><br>
		密碼 :<br> <input type='password' name = 'passwords' /><br>
		<input type='submit' value= '登入' class='login'/>
		<a href="/swordlion/register.php"><input type='button' value= '註冊' / ></a>
	</form>

</div>