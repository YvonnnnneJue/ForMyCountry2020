## MySQL

##### 数据库系统分为：

服务器端：负责管理维护数据

客户端：用于连接到服务器，发起 增删改查 命令

<hr>

#### MySQL服务器端数据的逻辑结构：

​	SERVER => DATABASE => TABLE => ROW => COLUMN



##### 如何连接到数据库服务器：

​	交互模式：mysql.exe -uroot -p

​	脚本模式： mysql.exe -uroot -p < (文件路径).sql

```mysql
# 搭建数据库

SET NAMES UTF8;
# 防数据库重名
DROP DATABASE IF EXISTS databasename;
# 创建数据库
CREATE DATABASE databasename CHARSET=UTF8;
# 进入数据库
USE databasename;

# 创建 表头
CREATE TABLE tablename(
	id INT,	// 整数类型
  pic VARCHAR(128),
  isHot BOOL,  // boolean也是字符串
  shelfTime VARCHAR(19) // 时间也是字符串
);
# 插入数据
INSERT INTO tablename VALUES(10,'img/9.png',FALSE,'2012-1-2');
INSERT INTO tablename VALUES(15,'img/19.png',TRUE,'2012-1-2');

# 删除数据
# DELETE FROM tablename;   // 清除表所有的记录行 *慎用*
DELETE FROM tablename WHERE id=10; // 删除 满足条件 的 记录行

# 修改数据
#UPDATE tablename SET listname=value, ... , listname=value;
UPDATE tablename SET id=30, pic='imgg/80.png' WHERE id=15;

```



```mysql
#案例
# 1. 删除数值大于3000的行
	DELETE FROM tablename WHERE val>3000;
# 2. 修改所有数值小于2000的行，数值在原有基础上减500，并全部设置为 热卖=是
	UPDATE tablename SET val=val-"500", isHot='1' WHERE val<2000;
```



#### MySQL的列类型

	##### 数值类型

​	整数数值类型：TINYINT(-128~127)、SMALLINT(2个字节，-32768~32767)、INT(4个字节，-2147483648~-2147483647)、BIGGINT(8个字节)

​	小数数值类型：FLOAT(M,D)、DOUBLE、DECIMAL

​	`product(price DECIMAL(7,2))`

​	布尔数值类型：TRUE / FALSE

##### 日期时间类型

​	DATE：日期

​	TIME：时间

​	DATETIME：日期时间

##### 字符串类型

​	CHAR(M)：定长字符串，最长255

​	VARCHAR(M)：变长字符串，最长65535

​	TEXT(M)：大型变长字符串，最长2G



案例：

创建用户数据库 userbase ，创建一个保存用户信息的表user(uid、uname、upwd、email、phone、sex、avatar、registerTime、isOnline)

```mysql
#用户登录信息表

SET NAMES UTF8;
DROP DATABASE IF EXISTS userbase;
CREATE DATABASE userbase CHARSET=UTF8;
USE userbase;

# 创建用户信息表
CREATE TABLE user(
  uid INT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone CHAR(11),
  sex TINYINT,
  avatar VARCHAR(128),
  registerTime DATATIME,
  isOnline BOOL
);
# 插入数据
INSERT INTO user VALUES(3,'John','123456','111@qq.com','13012345678',1,'img/aaa.png','2020-2-8 16:21:00',TRUE)
```



##### 列约束

Constraint：约束，数据库中列的数据规范

- 主键约束 —— PRIMARY KEY ： 值不能重复，不能为空值；自动按列上值从小到大排序；一个表中至多只能有一个。

- 非空约束 —— NOT NULL：不能为NULL值

- 唯一约束 —— UNIQUE：值不能重复

- ~~检查约束 —— CHECK：检查插入的数据是否符合数据规范~~

  ~~user( age INT CHECK(age>=18 AND age<=60))~~

  ~~MySQL不支持~~    但是Orancle可以用

- 默认约束 —— DEFAULT

- 外键约束 —— FOREIGN KEY ... REFERENCES

  必须参考另一个表的主键

  





案例：

创建数据库company

创建部门信息表dept(did, dname, empCount)

创建员工信息表emp(eid, ename, salary, deptId)

```mysql
SET NAMES UTF8;
DROP DATABASE IF EXISTS company;
CREATE DATABASE company CHARSET=UTF8;
USE company;

# 创建部门信息表
CREATE TABLE dept(
	did INT PRIMARY KEY,
  dname VARCHAR(32) UNIQUE NOT NULL,
  empCount INT,
);
INSERT INTO dept VALUES(2,'运营',2);
INSERT INTO dept VALUES(3,'技术',3);

CREATE TABLE emp(
	eid INT,
  ename VARCHAR(32) NOT NULL,
  salary DECIMAL(8,2),
  deptId INT DEFAULT 2,
  FOREIGGN KEY(deptId) REFERENCES dept(did) 
);
INSERT INTO emp VALUES(3, '张三', 6000,DEFAULT);
INSERT INTO emp VALUES(5, '李四', 8000,2);
INSERT INTO emp VALUES(9, '赵武', 16000,3);
INSERT INTO emp VALUES(8, '张三', 13000,3);
INSERT INTO emp VALUES(2, '可乐', 23000,3);
```

