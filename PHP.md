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
?>
```


