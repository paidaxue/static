<?php 

//http://static.com/jquery/ajax/Server.php?name=ss

if(isset($_GET['name'])){
	echo "hello_get:".$_GET['name'];
}else{
	echo "no get";
}

echo "<br>";

if(isset($_POST['name2'])){
	echo "hello_post:".$_POST['name2'];
}else{
	echo "no post";
}