<?php

$conn = @mysql_connect('120.24.177.172','other','other1990');
if (!$conn) {
	die('Could not connect: ' . mysql_error());
}
mysql_select_db('other', $conn);

?>