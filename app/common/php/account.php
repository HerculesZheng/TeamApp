<?php
	// response.type("application/json");
	// response.header("Access-Control-Allow-Origin:*");
	// response.header("Access-Control-Allow-Methods:POST,GET,PUT,OPTIONS,DELETE");
	// response.header("Access-Control-Allow-Headers:x-requested-with,content-type");
	// header("Access-Control-Allow-Origin:*");
	// header("Access-Control-Allow-Methods:POST,GET,PUT,DELETE,OPTIONS");
	// header("Access-Control-Allow-Headers:x-requested-with,content-type");
	// 指定允许其他域名访问  
	header('Access-Control-Allow-Origin:*');  
	// 响应类型  
	header('Access-Control-Allow-Methods:GET,POST');  
	// 响应头设置  
	header('Access-Control-Allow-Headers:x-requested-with,content-type');
	if ($_POST["act"]=="vality") {
		$Account=$_POST["Account"];
		if ($Account!="") {
			$conn=mysql_connect("localhost","root","123456","mysql");

			if (!$conn) {			
				die("连接失败！");
			}

			$conn->query("set name utf8");

			$sql="SELECT FROM Users WHERE UserAccount ='{$Account}'";

			$result=$conn->query($sql);

			$result=mysqli_affected_rows($conn)>0
			echo "{$result}";
		}		
	}elseif ($_POST["act"]=="register") {
		# code...
	}elseif ($_POST["act"]=="login") {
		# code...
	}elseif ($_POST["act"]=="changePwd") {
		# code...
	}
 ?>