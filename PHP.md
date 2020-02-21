### Web 服务器

web服务器用于监听客户端的HTTP或HTTPS请求，通常用于处理用户提交的数据或向客户端返回请求的资源。 

作用： 接收客户端（PC/PAD/PHONE）的请求，查找需要的数据（文件/数据库/其他系统），发送回客户端。

Web服务器分为2种：静态Web服务器 和 动态Web服务器。

静态：HTML/CSS/JS

​			常见web服务器：Apache Httpd、MS IIS、NginX

动态：JSP=HTML+Java

​			PHP=HTML+PHP

​			ASP.NET=HTML+C#

​			Node.js=HTML+Node



学习新语言的顺序：

1. 了解背景：历史、现状、特点、应用领域、发展趋势
2. 搭建开发环境，编写HelloWorld
3. 声明变量和常量
4. 数据类型
5. 运算符
6. 逻辑结构
7. 算法小程序
8. 函数和对象
9. 第三方库、组件、框架
10. 小项目

<hr>

##### PHP搭建开发环境

1. 服务器端：下载并安装静态web服务器

2. 服务器端：下载并安装PHP解释器

3. 服务器端：编写静态/动态网页

4. 服务器端：启动web服务器

   <hr>

5. 客户端：在浏览器中输入协议、地址、端口访问web服务器

总结： 下载XAMPP



#####	PHP声明

变量： `$变量名 = 值;`

输出变量： `echo $变量名;`

常量：`const PI = 3.14;`

输出变量： `echo 常量名;`

输出类型和值：`var_dump($变量名);`

```php
<?php
	$a = 3.5;
	$b = 2;
	echo $a*$b;
	echo '<hr>';

	$c = 5;
	const b = 7;
	$sum = $c + b;
	echo '$sum+$sum';   //$sum+$sum
	echo '<hr>';
	echo "$sum+$sum"; 	//12+12
?>
```

注意： 

单引号字符串中有变量名，则直接输出为变量名；双引号直接取变量名的值，但不具备运算能力。

拼接符：.



##### PHP的数据类型

PHP属于“弱类型语言” —— 创建变量时无需指定类型，一个变量可以先后赋值为不同类型的值。

PHP数据类型：https://www.php.net/manual/zh/ 官方文档

1. 四种标量类型

   boolean

   integer

   float

   string

   

2. 三种复合类型

   array

   object

   callable

   

3. 两种特殊类型

   resource

   NULL



##### PHP的运算符

- 算数运算符： +   -   *   /    %   ++   --
- 比较运算符： >   >=    <    <=    ==  ===  !=  !==
- 逻辑运算符： &&   ||   ！
- 位运算符： <<    >>
- 赋值运算符： =       +=   -=   、=
- 拼接运算符：.    .=
- 三目运算符： ?:
- 其他：->(  stu->name  等同js里的stu.name)    []      =>



注意：

1. +只用作算数运算，不用做字符串拼接

2. +作用于字符串，会发生隐式转换

3. +作用于布尔，会发生隐式转换：true为1， false为0

4. 字符串比较 Unicode 码

   

```php
<?php
	# 案例：判断年份是否为闰年
	# 判断公式为：年份能被4整除，且不能被100整除的闰年。年份能被400整除的闰年。
		$year = 2008;
		$isLeapYear = (($year%4===0) && ($year%100 !== 0)) || ($year%400===0);
		echo "$year 是闰年吗: $isLeapYear"
    
  #现有变量 $num=5, 计算出 $num*16 的最快方式是：
    $num << 4;
	
?>
```

注意：

- 按左移位 原数* 2<sup>n</sup>

  按右移位  原数/(2<sup>n</sup>)

- 三目运算符：表达式1 ? 表达式2 : 表达式3



##### 逻辑结构

- 顺序：输入 -> 计算 -> 输出

- 条件

  if

  if..else

  switch...case...

- 循环

  - while(循环判定=true){

    ​	// 循环体

    }

  - do{

    ​	循环体

    }while(循环判断=true);

    注意：while ... 先判定后执行，do...while...先执行再判定

  - for(表达式1; 表达式2; 表达式3){

    ​	// 循环体

    }

    注意关键字：break  continue
    
  - foreach 只用于遍历数组
  
    foreach($数组名 as $元素变量名){
  
    ​	// 循环体
  
    }
  
    foreach( $数组名 as $下标变量名=>$元素变量名 ){
  
    ​	// 循环体
  
    }

```php
<?php
	# 判定金额是否足够
  if($money >= $sum){
    $change = $money - $sum;
    echo "<br>总金额： $sum <br>应找零： $change";
  }else{
    echo "错误：已付金额不足!";
  }

	# 判定工资等级
	$salary = 8000;
	if($salary>=10000){
    echo "白领级别";
  }else if($salary >= 5000){
    echo "蓝领级别";
  }else{
    echo "普通级别";
  }

	# 判断状态
	$status = 3;
	switch($status){
    case 1:
      echo "等待";
      break;
    case 2:
      echo "响应";
      break;
    case 3:
      echo "准备";
      break;
    case 4:
      echo "发送";
      break;
    default:
      echo "其他";
  }

	# while打印
	$i = 0;
	while($i<5){
    echo "hello<br>";
    $i++;
  }

	# 输出1+2+3……+100的总和
	$sum = 0;
	$i = 1;
	while(i<=100){
    $sum += $i;
    $i++;
  }
	echo "1~100的累加和为： $sum";
	echo "<hr>";
	
	# 输出1*2*3*……*10的乘积
	$result = 1;
	$i = 1;
	while( $i<=10){
    $result *= $i;
    $i++;
  }
	echo "1~10的累乘积为： $result";

	# 输出1/90+3/85+5/80+7/75+9/70的总和
	$sum = 0;
	$zi = 1;
	$mu = 90;
	while($zi<=9; ){
    $sum += $zi/$mu;
    $zi += 2;
    $mu -= 5;
  }
	echo "总和为： $sum";

	# 输出5行10列的※
	# 思路1
	$i = 0;
	while($i<50){
    echo '※';
    $i++;
    if($i%10===0){
      echo '<br>';
    }
  }

	# 思路2
	$j=0;
	while($j<5){
      $i=0;
      while($i<10){
        echo '※';
        $i++;
      }
      echo "<br>";
    	$j++;
  }

	/* 输出
			※
			※※
			※※※
			※※※※
			※※※※※
	*/
	$i = 1;
	while($i<=5){
    $j = 1;
    while($j<=$i){
      echo '※';
      $j++;
    }
		echo '<br>';
    $i++;
  }

	# 九九乘法表
	$i = 1;
	while($i<=9){
    $j=1;
    while($j<=$i){
      echo "$i*$j=".$i*$j."&nbsp;&nbsp;";
      $j++;
    }
    echo '<br>';
    $i++;
  }

	# 输出5个hello;
	$i;
	do{
    echo "hello<br>";
    $i++;
  }while($i<5);
	
	# 输出 5/10/15…/90/
	for($i=5; $i<=90;$i+=5){
    echo "$i/";
  }

	# 三位水仙花（如：253==2*2*2+5*5*5+3*3*3）
	for($i=100; $i<=999; $i++){
    $ge = $i%10;
    $shi = $i/10%10;
    $bai = $i/100%10;   // $bai = (int)($i/100);
    if( $i === $ge*$ge*$ge + $shi*$shi*$shi + $bai*$bai*$bai ){
      echo "$i/";
    }
  }

	# 输出100以内所有的质数（质数只能被1和自身整除的数）
	for($i=2; $i<100; $i++){
    for($j=2; $j<$i; $j++){
      if($i%$j === 0){
        break;
      }
      if($j===$i){
        echo "$i/";
      }
    }
  }


		
?>
```



#### PHP的数据类型之复合类型 

##### 数组

$变量名=[值1,值2,……,值n];

注意：数组变量不能echo，只能var_dump()。

##### 数组类型

1. 索引数组

   $arr = ['aaa','bbb','ccc'];

2. 关联数组

   $arr = ['uid' => 123, 'name'='Y', 'age'=>50];

```php
<?php
	$list = [35,3,75,78,23];
	var_dump($list);
	
	# 获取数组长度
	$arr = ['a','b','c','d'];
	echo count($arr);

	# 修改指定下标的元素
	$arr[2] = 'e';

	# 输出指定下标的元素
	echo $arr[0];

	# 循环输出数组
	for($i=0; $i<count($arr);i++){
    echo $arr[$i]."<br>";
  }

	# 数组添加新元素
	$arr[count($arr)]="n";   // 可简写 $arr[]="n";
	var_dump($arr);

	# 新建空数组，添加元素，再使用for输出索引数组
	$arr1 = [];
	
	$arr1[] = 'Tom';
	$arr1[] = 'Kate';
	$arr1[] = 'Jarry';

	for($i = 0; $i< count($arr1); $i++){
    echo $arr1[$i]."<br>";
  }
	
	# 新建空数组，添加元素，再输出关联数组。无法使用for循环
	$arr = ['uid' => 123, 'uname'='Y', 'age'=>50];
	var_dump($arr);
	echo $arr['age'];
	#加新元素必须手工指定
	$arr['addr'] = '中国';
	echo "name：".$arr['uname']; //两种写法 “”外变量要+‘’
	echo "name: $arr[uname]";		//两种写法 “”内变量要+‘’

	
	#循环输出 二维数组
	$user0=['uid'=>1, 'uname'=>'Tom'];
  $user1=['uid'=>2, 'uname'=>'Johb'];
  $user2=['uid'=>3, 'uname'=>'XiaoMing'];

  $userList = [$user0,$user1];
	$userList[] = $user2;
	
	for($i=0;$i<count($userList);$i++){
    $arr = $userList[$i];
    echo "$arr[uid] &nbsp;&nbsp";
    echo "$arr[uname] &nbsp;&nbsp";
  }

	#foreach案例
  # 案例1
  $ageList = [20,32,5];
	foreach($ageList as $a){
    echo "$a<br>";
  }
  
	# 案例2
	$order=['oid'=>1, 'rcvName'=>'Tom'];
	foreach($order as $key => $value ){
    echo "$key - $value <br>" 
  }
	
?>
```



##### PHP预定义数组：( 默认array(0){} )

​	$_GET

​	$_POST

​	$_COOKIE

​	$_FILES

​	$_REQUEST：保存 客户端 提交给 服务器 的“请求”数据

​	$_SESSION



Web项目中，客户端（浏览器）如何给服务器传数据：

​	http://168.x.x.x/login.php?uname=tom&upwd=123

PHP服务器会自动把请求数据存储到$_REQUEST数组中：

​	$_REQUEST['uname'] = 'tom';

​	$_REQUEST['upwd'] = '123';

程序员如何读取客户端提交的数据：

​	echo $_REQUEST['uname'];

​	echo $_REQUEST['upwd']

``` php
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

	/*
		练习：服务器端页面 max.php , 接收服务端提交的 n1/n2/n3 三个数中最大值
	*/
	$n1 = $_REQUEST['n1'];
	$n2 = $_REQUEST['n2'];
	$n3 = $_REQUEST['n3'];

	$n1 = (int)$n1;
	$n2 = (int)$n2;
	$n3 = (int)$n3;
	
	$max = $n1;
	if($n2>$max){
    $max = $n2;
  }
	if($n3>$max){
    $max = $n3;
  }
	echo "n1\n2\n3 三个数中最大的为：$max";
	
?>
```



##### php函数

function 函数名(){

​	// 函数体

}



function 函数名([参数名1,  参数2, ...]){

​	// 函数体;

​	return 值;

}

$变量名 = 函数名([值1, 值2, ...]);

```php
<?php
  function funName(){
  	echo "函数体";
	}
	funName();
?>

```

参数类型：

- 形参
- 实参



##### PHP预定义函数 —— 数据库相关

提示：使用MySQLI 是改进版

```php
<?php
	// 连接到数据库服务器
  $conn = mysqli_connect("127.0.0.1","root","","jd",3306);
	// 提交SQL命令给服务器执行
	$sql = "INSERT INTO dept VALUES(50, 'Testing' )";
	$result = mysqli_query($conn, $sql);

	// 查看执行结果
	if($result===false){
    echo "SQL命令执行失败！请检查：$sql";
  }else{
    echo "SQL 执行成功";
  }
?>
```



服务器分：web服务器(PHP解释器 $_REQUEST['n'=>'x', 'p'=>'y']等)、文件服务器(html/css/js/jpg/php/jsp/aspx)、数据库服务器(tableName)

客户端：浏览器（HTML/CSS/JS解释器）



案例：创建“用户注册”模块

1. 编写 user_add.php， 接收客户端提交的请求数据uname、upwd、email、phone，检验用户输入
2. 连接数据库
3. 向数据库服务器提交INSERT语句
4. 输出执行结果：注册成功  / 失败

```php
<?php
	/*
	完成“用户注册”功能点
	*/ 
	// 1. 编写 user_add.php， 接收客户端提交的请求数据uname、upwd、email、phone，检验用户输入
	@$name = $_REQUEST['uname'];    // 增加@：不显示错误警告
	if($name===null || $name===""){
		die('用户名不为空'); // 终止当前页面执行
	}
	@$pwd = $_REQUEST['upwd'];
	if($pwd ===null || $pwd ===""){
		die('密码不为空'); // 终止当前页面执行
	}
	@$email = $_REQUEST['email'];
	if($email===null || $email===""){
		die('邮箱不为空'); // 终止当前页面执行
	}
	@$phone = $_REQUEST['phone'];
	if($phone===null || $phone===""){
		die('手机号码不为空'); // 终止当前页面执行
	}
	echo "<hr>";

	// 2. 连接数据库
	$conn = mysqli_connect('localhost',"root","","user", 8080); // 服务器地址，用户名，密码，数据库名称，端口号

	// 3. 向数据库服务器提交INSERT语句
	$sql = "INSERT INTO userTable VALUES('$name','$pwd','$email','$phone') ";
	$result = mysqli_query($conn, $sql);

	// 4. 输出执行结果：注册成功  / 失败
	if($result === false){
		echo "失败：$sql";
	}else{
		echo "成功";
		$i = mysqli_insert_id($conn);
		echo "新用户在数据库中的编号为:$i";  // $i 为自增编号，前提必须有 主键
	}


?>
```

```php
<?php
	/*
		实现后台“用户删除”模块
	*/  
  //1. 接收客户端提交的请求数据uid, 检验用户输入
  @$id = $_REQUEST['uid'];
	if($id===null || $id===""){
    die('uid 不能为空');
  }
  
  //2. 连接数据库服务器
  $conn = mysqli_connect("localhost","root","","databaseName",8080);
  
  //3. 向数据库服务器提交DELETE语句
  $sql = "DELECT FROM databaseName_userTable WHERE uid='$id' ";
	$result = mysqli_query($conn, $sql);
  
  //4. 输出执行结果： 删除成功 / 失败
  if($result === false){
    echo "删除失败<br>";
    echo "请检查SQL语句： $sql";
  }else{
    echo "数据库删除成功。<br>";
    // 获取INSERT / DELETE / UPDATE 语句影响的行数
    $count = mysqli_affected_rows($conn);
    echo "删除操作影响的行数：$count";
  }
?>
```

```sql
SET NAMES UTF8;
DROP DATABASE IF EXISTS databaseName;
CREATE DATABASE databaseName CHARSET=UTF8;
USE databaseName;
```



提取连接代码段：init.php

```php
<?php
	/*
		项目初始化页面，用于声明其它页面都需要的公共变量、函数
  */
    //比如： 2. 连接数据库服务器
  	$conn = mysqli_connect("localhost","root","","databaseName",8080);
  
?>
```

引用连接代码：

```php
<?php
	/*
		实现后台“用户删除”模块
	*/  
  //1. 接收客户端提交的请求数据uid, 检验用户输入
  @$id = $_REQUEST['uid'];
	if($id===null || $id===""){
    die('uid 不能为空');
  }
  
  //2. 连接数据库服务器
  require('init.php');
  
  //3. 向数据库服务器提交DELETE语句
  $sql = "DELECT FROM databaseName_userTable WHERE uid='$id' ";
	$result = mysqli_query($conn, $sql);
  
  //4. 输出执行结果： 删除成功 / 失败
  if($result === false){
    echo "删除失败<br>";
    echo "请检查SQL语句： $sql";
  }else{
    echo "数据库删除成功。<br>";
    // 获取INSERT / DELETE / UPDATE 语句影响的行数
    $count = mysqli_affected_rows($conn);
    echo "删除操作影响的行数：$count";
  }
?>
```

```php
<?php
	/*
		实现后台“用户删除”模块
	*/  
  //1. 接收客户端提交的请求数据uid, 检验用户输入
  @$id=$_REQUEST['uid'];
	if($id===null || $id===""){
    die('uid 不能为空');
  }
  @$email = $_REQUEST['email'];
	if($email===null || $email===""){
    die('uid 不能为空');
  }
   @$phone = $_REQUEST['phone'];
	if($id===null || $id===""){
    die('phone 不能为空');
  }
  //2. 连接数据库服务器
  require('init.php');
  
  //3. 向数据库服务器提交UPDATE语句
  $sql = "UPDATE userTable SET email='$email',phone='$phone' WHERE uid='$id'";
	$result = mysqli_query($conn, $sql);
  
  //4. 输出执行结果： 删除成功 / 失败
  if($result === false){
    echo "更新失败<br>";
    echo "请检查SQL语句： $sql";
  }else{
    echo "数据库更新成功。<br>";
    // 获取INSERT / DELETE / UPDATE 语句影响的行数
    $count = mysqli_affected_rows($conn);
    echo "更新操作影响的行数：$count";
  }
?>
```

```php
<?php
	/*
  	使用“用户登录”模块
  */
  // 1. 编写user_login.php, 接收客户端提交的请求数据uname、upwd，检验用户输入
  @$n = $_REQUEST['uname'];
	if($n === null || $n===""){
    die('uname 不能为空');
  }
	@$p = $_REQUEST['upwd'];
	if($p === null || $p===""){
    die('upwd 不能为空');
  }
  
  // 2. 连接数据库服务器
  include('init.php');    // require()和include()功能同等。

  // 3. 向数据库服务器提交SELECT语句
  $sql = "SELECT * FROM xz_user WHERE uname='$n' AND upwd='$p'";
	$result = mysqli_query($conn, $sql);  

  // 4. 输出执行结果：登录成功/失败
  if($result===false){
    echo "数据库查询失败<br>";
    echo "请检查SQL语句：$sql";
  }else{
    // SQL语句执行成果，语法没有错误
    // 查看结果集中是否有数据
    $row = mysqli_fetch_assoc($result);
    if($row===null){ // 没有数据
      echo "登录失败，用户名或密码错误";
    }else{ // 有一行数据
      echo "登录成功";
    }
  }
  
?>
```

SQL语句的分类：

DDL：Data Define Language，数据定义语言——定义列

​			CREATE / DROP / ALTER / TRUNCATE

DML：Data Manipulate Languge，数据操作语言 —— 操作行

​			INSERT / DELETE / UPDATE

DQL：Data Query Language，数据查询语言 —— 不影响数据

​			SELECT 

DCL：Data Control Language，数据控制语言 —— 控制权限

​			GRANT / REVOKE



Tips: mysqli_query($conn, $sql)的返回值类型：

1. DML：增删改，执行失败返回false， 成功返回true

2. DQL：查，执行失败返回false，成功返回查询结果集对象，可能有0/1/N行数据；从其中获取一行数据可以使用：

   $row=mysqli_fetch_row($result);  抓取一个索引数组或null

   $row=mysqli_fetch_assoc($result); 抓取一个关联数组或null

   从其中获取所有记录行可以使用：

   $rowList=mysqli_fetch_all($result, MYSQLI_ASSOC); 抓取一个二维数组 

   等同：$rowList=mysqli_fetch_all($result, 1); 

   

   

   

   

   