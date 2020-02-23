### HTTP

#### 定义

- 超文本传输协议
- 用于从万维网服务器传输超文本到本地浏览器的传送协议
- HTTP协议是基于TCP的应用层协议，它不关心数据传输的细节，主要是用来规定客户端和服务端的数据传输格式，最初是用来向客户端传输HTML页面的内容。默认端口是80
- http是基于请求与响应模式的、无状态的、应用层的协议



##### 协议定义

不同设备之间一样的准则

客户端 => （请求）服务器

客户端 <=（响应）服务器



##### 网络层

​	应用层  ： HTTP

​		↓	

​	传输层 ：

​		↓

​	网络层 ： 

​		↓

​	链路层 ： 



#### HTTP请求报文

- HTTP请求报文主要由请求行、请求头部、空一行、请求正文4部分组成



#### 请求方法

- GET：请求资源
- POST：提交资源
- Head：获取响应头
- PUT：替换资源
- DELETE：删除资源
- OPTIONS：允许客户端查看服务器的性能
- TRACE：回显服务器收到的请求，用于测试或诊断
- CONNECT



#### URL

##### 定义：

- 统一资源定位符
  用于描述网上的资源
- 格式：schema://host[:port#]/path/.../[?query-string]
  - scheme: 协议，如http, https, ftp等
  - host: 域名或IP地址
  - port: 端口
  - path: 资源路径
  - query-string: 发送的参数

如： https://www.baidu.com/s?wd=aaa



#### 请求头

- Host：主机ip地址或域名
- User-Agent：客户端相关信息，如操作系统、浏览器等信息
- Accept：指定客户端接收信息类型，如：image/jpg, text/html, application/json
- Accept-Charset：客户端接收的字符集， 如：gb2312，iso-8859-1
- Accept-Encoding：可接收的内容编码， 如gzip
- Accept-Language：接收的语言，如Accept-Language: zh-cn
- Authorization：客户端提供给服务端，进行权限认真的信息
- Cookie：携带的cookie信息
- Referer：当前文档的URL，即从哪个链接过来的
- Content-Type：请求体内容类型，如Content-Type: application/x-www-form-urlencoded
- Content-Length：数据长度
- Cache-Control：缓存机制，如Cache-Control: no-cacha
- Pragma：防止页面被缓存，和Cache-Control: no-cache作用一样



#### 响应报文

- 状态行
- 消息报头
- 空一行
- 响应正文



#####  状态码：用以表示网页服务器HTTP响应状态的3位数字代码

- 1XX：提示信息，请求被成功接收
- 2XX：成功，请求被成功处理，如 200
- 3XX：重定向相关，如304：在本地已经储存，再次请求时，没有被修改
- 4XX：客户端错误， 如：404
- 5XX：服务器端错误， 如：500



##### 响应头：

- Server：HTTP服务器的软件信息
- Date：响应报文的时间
- Expires：指定缓存过期时间
- **Set-Cookie**：种Cookie
- Last-Modified：资源最后修改时间
- **Content-Type**：响应的类型和字符集
- Content-Length：内容长度
- Connection：如Keep-Alive，表示保持tcp连接不关闭
- **Location**：指定重定向的位置，新的URL地址，如304的情况



#### HTTP 和 HTTPS的区别

HTTPS = HTTP + SSL（加密）









### 计算机网络（状态：懵）

主要指的是TCP/IP协议栈

TCP/IP 技术栈有一大部分都隐藏于操作系统内核态



1. TCP/IP协议体系的认知
2. 数据链路层：
   - 以太网帧的格式
   - MTU的概念
   - ARP协议（报文格式、查询原理、缓存）
3. 网络层（IP层）：
   - 16位分片标识
   - DF不分片标志
   - MF更多分片标志
   - 13位片偏移
   - 8位生存时间TTL
   - 16位的首部检验
   - IP分片
   - IP选路
   - ICMP协议：报文格式、报文的两大分类：查询+差错、2种查询报文+5种差错报文
4. 传输层：
   - UDP协议：包括特点 + 首部各个字段
   - TCP协议：特点 + 首部字段 + 可靠机制
   - TCP连接控制：三次握手、四次挥手、同时打开、同时关闭、半关闭
   - TCP流量控制机制：滑动窗口、慢启动、拥塞避免、快速重传、快速恢复
   - TCP超时重传机制：各种定时器
5. 应用层：
   - 掌握DNS协议：名字空间、DNS指针查询（反向查找或逆向解析）基本原理、DNS缓存
   - 掌握FTP协议：它是网络界的活化石
     两条连接：控制连接 + 数据连接
     两种工作模式：PASV  + PORT
     各种FTP指令 和 响应码
     FTP断点续传
     匿名FTP
   - 掌握HTTP协议：
     1. 报文格式：请求报文、响应报文、请求头各种字段、响应头各种字段
     2. http状态码
   - HTTPS协议：
     1. https的详细握手过程
     2. 摘要算法、数字签名、数字证书的原理和过程



