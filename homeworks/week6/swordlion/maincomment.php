<div class='contentarea'>
	<div class='nickname'><?php echo $data["username"];?></div>
	<div class='time'><?php echo $data["created_at"];?></div>
	<hr>
	<div class='content'><?php echo htmlspecialchars($data["content"], ENT_QUOTES,'utf-8');?></div>