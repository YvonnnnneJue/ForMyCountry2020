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



查询案例

```mysql
# 查询所有数据记录
SELECT * FROM tablename;

# 查询指定列
SELECT listname,listname FROM tablename;

# 查询 列别名
# AS可省略，若有‘空格’ 需使用反单引号 ``
SELECT listname AS 列别名 , ename AS 姓名, deptId `部门 编号` FROME tablename;

# 只显示不同的记录
# 显示出哪些部门编号下有员工
SELECT DISTINCT listname FROM tablename

# 抓取数据执行计算
# 简单计算
SELECT (3+5)*6
SELECT listname 别名,listname2*12 别名 FROM tablename;

# 数据排序(升序)
SELECT * FROM tablename ORDER BY listname;        // ASC，默认值，ascendant 升序

# 数据排序(降序)
SELECT * FROM tablename ORDER BY listname DESC;    // descendant 降序

# 数据按 listname1 降序排列；若数据相同，按 listname2 升序排列
SELECT * FROM tablename ORDER BY listname DESC, listname2 ASC;

# 示例：查询出所有员工信息，按员工姓名升序排列，要求 部门1 的记录排在 部门2 的记录之前
SELECT * FROM tablename ORDER BY deptId, ename;

# 条件查询
# 示例：抓取id为5的记录
SELECT * FROM tablename WHERE id=5;

# 示例： 查询出姓名为TOM的编号、地址
	SELECT id, address FROM tablename WHERE ename='TOM';
	
# 示例： 查询出 部门1 下所有记录
	SELECT * FROM tablename WHERE deptId=1;
	
# 示例： 查询出所有 值为1 的记录
	SELECT * FROM tablename WHERE val=1;
	
# 示例： 查询出值大于等于5000的 行 （= > < >= <= !=或<>）
	SELECT * FROM tablename WHERE val>=5000;
	
# 示例： 查询 值不为2 的记录
	SELECT * FROM tablename WHERE val!=2;

# 示例： 查询 val 为 NULL 的记录 （IS NULL \ IS NOT NULL \ AND \ OR \ NOT）
	SELECT * FROM tablename WHERE val IS NULL;   // NULL不能用 = 或 != 判断
	
# 示例： 查询 val 不为 NULL 的记录
	SELECT * FROM tablename WHERE val IS NOT NULL; 

# 示例： 查询 val 大于 6000 且 s 为1 的记录
	SELECT * FROM tablename WHERE val>60 AND s=1;

# 示例： 查询 val 为 5000~5999 的记录
	SELECT * FROM tablename WHERE val>=5000 AND val<=5999;  // 不可写为5000<=val<=5999
	SELECT * FROM tablename WHERE val BETWEEN 5000 AND 5999;
	
# 示例： 查询 val 小于 5000 和 大于 5999 的记录
	SELECT * FROM tablename WHERE val<5000 OR val>5999;

# 示例： 查询 val 为 10 、 20 、 30 的记录
	SELECT * FROM tablename WHERE val=10 OR val=20 OR val=30;
	SELECT * FROM tablename WHERE val IN(10,20,30);

# 示例： 查询 val 不为 10 和 20 的记录
	SELECT * FROM tablename WHERE val!=10 AND val!=20;
	SELECT * FROM tablename WHERE val NOT IN (10,20);
	
# 模糊条件查询 (%: 任意多个字符 | _: 一个任意字符) 关键字 LIKE 同用
# 示例： 查询出 str 中包含字母 E 的记录
	SELECT * FROM tablename WHERE str LIKE '%E%';
	
# 示例： 查询出 str 中字母 E 为结尾的记录
	SELECT * FROM tablename WHERE str LIKE '%E';
	
# 示例： 查询出 str 中字母 E 为倒数第二个字符的记录
	SELECT * FROM tablename WHERE str LIKE '%E_';
	
# 分页查询（其他数据库语法不同）
#	SELECT ... FROM ... WHERE... ORDER BY ... LIMIT start, count;
# 示例：每一页最多展现15条记录
/*
第1页： SELECT ... LIMIT 0,15;
第2页： SELECT ... LIMIT 16,30;
...
第n页： SELECT ... LIMIT (n-1)*pageSize, pageSiz;
*/
# 查询所有数据记录， 只显示第1页， 每页最多显示20条
  SELECT * FROM tablename LIMIT 0，20;
  
# 查询所有数据记录， 只显示第3页， 每页最多显示20条
  SELECT * FROM tablename LIMIT 40, 20;
  
# 查询val为10的所有数据记录， 只显示第3页， 每页最多显示8条
  SELECT * FROM tablename WHERE val=10 LIMIT 16, 8;
  
# 聚合/分组查询（COUNT() \ SUM() \ AVGG() \ MAX() \ MIN()）
# 示例：查询数据记录的总数
	SELECT COUNT(*) AS 总数 FROM tablename;

# 示例：查询val的总和
	SELECT SUM(val) FROM tablename;
	
# 示例：查询 eid 为 10 的平均值
	SELECT AVG(val) FROM tablename WHERE eid=10;
	
# 示例：查询val的最大值和最小值
	SELECT MIN(val), MAX(val) FROM tablename;
	
# 示例：查询出每个部门的编号以及该部门的员工数量
	SELECT deptId, COUNT(*) FROM empTable GROUP BY deptId;
	
# 示例：查询出每个部门的编号、该部门工资最大值、最小值、平均值
	SELECT deptId, MAX(salary),MIN(salary),AVG(salary) FROM emp GROUP BY deptId;
	
# 示例：查询出男员工和女员工的数量
	SELECT sex, COUNT(*) FROM tablename GROUP BY sex;
	
# 示例：子查询
	示例：查询出"研发部"所有员工的数据记录（ empTable \ deptTable ）
	SELECT did FROM deptTable WHERE dname='研发部';
	SELECT * FROM empTable WHERE deptId=10;
	#合并后
	SELECT * FROM empTable WHERE deptId=(SELECT did FROM deptTable WHERE dname='研发部');
	
# 示例： 查询出工资比TOM高的员工的所有信息
	SELECT * FROM empTable WHERE salary>(SELECT salary FROM empTable WHERE ename='TOM');
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

# 设置字符集
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



##### 数据库中存储日期时间数据

大体有三种方式

1. VARCHAR 存储
2. DATE/TIME/DATETIME 存储
3. BIGINT 存储：表示距离计算机元年的毫秒值。**推荐 √** 



##### MySQL中使用自增列

id INT PRIMARY KEY **AUTO_INCREMENT**

自增列： 只能用于整数列，且必须是主键列。自增列无需手工赋值，会自动采用1/2/3…数列，在当前最大值基础上+1.

注意：SQL标准中没有此关键字，它是MySQL所专有的。