### AJAX

##### Asynchronous JavaScript and XML

允许浏览器与服务器通信而无需刷新当前页面的技术

##### AJAX的缺陷

- 浏览器兼容性
- 后退等功能失效
- 对流媒体不够好
- 设备支持不足



##### HMLHttpRequest

方法：

- abort()
- getAllResponseHeaders()
- getResponseHeader("header")
- open("method","url")
- send(content)
- setRequestHeader("header","value")
  - 当浏览器向服务器请求页面时，它会伴随这个请求发送一组首部信息。这些首部信息是一系列描述请求的元数据。首部信息用来声明一个请求GET还是POST。
  - Ajax请求中，发送首部信息的工作可以由 setRequestHeader 来完成。
  - 参数header: 首部的名字；参数value：首部的值
  - 如果用POST请求向服务器发送数据，需要将 “Content-type” 的首部设置为 “application/x-www-form-urlencoded”. 它会告知服务器正在发送数据，并且数据已经符合URL编码了。
  - 该方法必须在 open() 之后才能调用 

属性：

- onreadystatechange:

- readyState:  

  - 0 代表未初始化。 还没有调用open方法
  - 1 代表证载加载。open方法已被调用，但send方法还没有被调用。
  - 2 代表已加载完毕。send已被调用。请求已经开始。
  - 3 代表交互中。服务器正在发送响应。
  - 4 代表完成。响应发送完毕。

  每次readyState值的改变，都会触发readystatechange事件。

- responseText 

- responseXML: 

- status: 

  - 服务器发送的每一个响应也都带有首部信息。三位数的状态码是服务器发送的响应中最重要的首部信息，并且属于超文本传输协议中的一部分。
  - 常用状态码及其含义：
    404 没找到页面
    403 禁止访问
    500 内部服务器出错
    200 一切正常
    304 没有被修改
  - 在 XMLHttpRequest 对象中，服务器发送的状态码都保存在 status 属性里。通过把这个值和200或304比较，可以确保服务器是否已发送了一个成功的响应。 

- statusText: 

##### AJAX步骤

GET示例：

```html
<script type="text/javascript">
	window.onload = function(){
    // 1. 获取 a 节点，并为其添加onclick响应函数
    document.getElementsByTagName("a")[0].onclick = function(){
      // 3. 创建一个XMLHttpRequest对象
      var request = new XMLHttpRequest();
      
      // 4. 准备发送请求的数据：url
      var url = this.href();  // var url = this.href + "?time=" + new Date();加Date以起到禁用缓存的目的
      var method = "GET";
      
      // 5. 调用 XMLHttpRequest 对象的 open 方法
      request.open(method, url);
      
      // 6. 调用 XMLHTTPRequest 对象的 send 方法
      request.send(null);
      
   		// 7. 为 XMLHttpRequest 对象添加 onreadystatechange 响应函数
      request.onreadystatechange = function(){
         // 8. 判断响应是否完成： XMLHttpRequest 对象的 readyState 属性值为 4 的时候
      	 if(request.readyState == 4){
           // 9. 再判断响应是否可用：XMLHttpRequest 对象 status 属性为200
           if(request.status == 200 || request.status ==304 ){
             // 10. 打印响应结果： responseText
             alert(request.responseText);
           }
         } 
      }
     
      
      // 2. 取消 a 节点的默认行为
      return false;
    }
  }
</script>
<a hrep="helloAjax.txt">HelloAjax</a>
```

POST示例：

```html
<script type="text/javascript">
	window.onload = function(){
    // 1. 获取 a 节点，并为其添加onclick响应函数
    document.getElementsByTagName("a")[0].onclick = function(){
      // 3. 创建一个XMLHttpRequest对象
      var request = new XMLHttpRequest();
      
      // 4. 准备发送请求的数据：url
      var url = this.href();  // var url = this.href + "?time=" + new Date();加Date以起到禁用缓存的目的
      var method = "GET";
      
      // 5. 调用 XMLHttpRequest 对象的 open 方法
      request.open(method, url);
      request.setRequestHeader("ContentType","application/x-www-form-urlencoded");
      
      // 6. 调用 XMLHTTPRequest 对象的 send 方法
      request.send("name='infoName'");
      
   		// 7. 为 XMLHttpRequest 对象添加 onreadystatechange 响应函数
      request.onreadystatechange = function(){
         // 8. 判断响应是否完成： XMLHttpRequest 对象的 readyState 属性值为 4 的时候
      	 if(request.readyState == 4){
           // 9. 再判断响应是否可用：XMLHttpRequest 对象 status 属性为200
           if(request.status == 200 || request.status ==304 ){
             // 10. 打印响应结果： responseText
             alert(request.responseText);
           }
         } 
      }
     
      
      // 2. 取消 a 节点的默认行为
      return false;
    }
  }
</script>
<a hrep="helloAjax.txt">HelloAjax</a>
```



##### 数据格式

- 在服务器端 AJAX 是一门与语言无关的技术。在业务逻辑层使用何种服务器端语言都可以。
- 从服务器端接收数据的时候，那些数据必须以浏览器能够理解的格式来发送。服务器端的编程语言只能以如下3种格式返回数据：
  - XML
  - JSON
  - HTML



HTML示例：

```html
<script type="text/javascript">
	window.onload = function(){
    var aNodes = document.getElementsByTagName("a");
    for( var i = 0; i < aNodes.length; i++){
      aNodes[i].onclick = function(){
        
        var request = new XMLHttpRequest();
        var method = "GET";
        var url = this.href;
        
        request.open(method, url);
        request.send(null);
        
        request.onreadystatechange = function(){
          if(request.readyState == 4){
            if(request.status == 200 || request.status == 304){
              document.getElementById("details").innerHTML = request.responseText;
            }
          }
        }
        
        return false;
      }
    }
  }
</script>
<ul>
  <li><a href="files/andy.html">Andy</a></li>
  <li><a href="files/richard.html">Richard</a></li>
</ul>
<div id="details"></div>
```

HTML格式优点：

- 从服务器端发送的HTML代码在浏览器端不需要用JavaScript进行解析
- HTML可读性好
- HTML代码块与innerHTML属性搭配，效率高



HTML格式缺点：

- 若需要通过AJAX更新一篇文档的多个部分，HTML不合适
- innerHTML并非DOM标准



XML格式示例：

```html
<script type="text/javascript">
	window.onload = function(){
    var aNodes = document.getElementsByTagName("a");
    for( var i = 0; i < aNodes.length; i++){
      aNodes[i].onclick = function(){
        
        var request = new XMLHttpRequest();
        var method = "GET";
        var url = this.href;
        
        request.open(method, url);
        request.send(null);
        
        request.onreadystatechange = function(){
          if(request.readyState == 4){
            if(request.status == 200 || request.status == 304){
              // 1. 结果为XML格式，所以需要使用 responseXML 来获取
              var result = request.responseXML;
              
              // 2. 结果不能直接使用，必须先创建对应的节点，再把节点加入到 #details
              // 目标格式为：
              /*
              	<h2><a href="mailto:andy@clearleft.com">Andy Budd</a></h2>
              	<a href="http://andybudd.com">http://andybudd.com</a>
              */
              var name = result.getElementsByTagName("name")[0].firstChild.nodeValue;
              var website = result.getElementsByTagName("website")[0].firstChild.nodeValue;
              var email = result.getElementsByTagName("email")[0].firstChild.n odeValue;
              
              var aNode = document.createElement("a");
              aNode.appendChild(document.createTextNode(name));
              aNode.href = "mailto:" + email;
              
              var h2Node = document.createElement("h2");
              h2Node.appendChild(aNode);
              
              var aNode2 = document.createElement("a");
              aNode2.appendChild(document.createTextNode(website));
              aNode2.href = website;
              
              var detailsNode = document.gegtElementById("details");
              detailsNode.innerHTML = "";
              detailsNode.appendChild(h2Node);
              detailsNode.appendChild(aNode2);
            }
          }
        }
        
        return false;
      }
    }
  }
</script>

```

XML格式优点：

反正也不怎么用了，懒得写了。



XML格式缺点：

拼dom真烦

