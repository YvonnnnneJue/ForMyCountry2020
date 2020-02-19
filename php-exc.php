<?php
  /*
  	练习：客户端访问star.php
  	给服务器提交rows和cols表示要打印的星星行数和列数
  	服务器端编写 star.php，读取客户端提交的rows和cols
  */
  $r = $_REQUEST['rows'];
	$c = $_REQUEST['cols'];
	
	$r = (int)$r;
	$c = (int)$c;

for( $i=0; $i<$r; $i++ ){
    for( $j=0; $j<$c; $j++ ){
      echo "※";
    }
    echo "<br>";
  }


  function funName(){
	echo "函数体";
  }
  funName();
  