<?php 

//http://static.com/jquery/ajax/Server.php?name=ss

if(isset($_GET['name'])){
	echo "hello:".$_GET['name'];
}else{
	echo "no name";
}

echo "<br>";

if(isset($_POST['name2'])){
	echo "hello:".$_POST['name2'];
}else{
	echo "no name2";
}