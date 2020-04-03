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



JSON格式:

- JSON一种简单的数据格式，比XML更轻巧。JSON是 JavaScript 原生格式，这意味着在 JavaScript 中处理 JSON 数据不需要任何特殊的 API 或工具包。
- JSON的规则很简单：对象是一个无序的“ ‘名称/值’对 ”集合。

```html
<script type="text/javascript">
	var jsonObject = {
    "name":"abc",
    "age":12,
    "address":{"city":"BeiJing","school":"清华"},
    "teaching":function(){
      alert("计算机");
    }
  };
  alert(jsonObject.name);
  alert(jsonObject.address.city);
  
  jsonObject.teaching();
  
  var jsonStr = "{'name':'abc'}";
  
  // 使用eval()方法
  var testStr = "alert('hello eval')";
  // alert(testStr);
  
  // eval 可以把一个字符串转为本地的 JS 代码来执行
  eval(testStr);
  
  // 把JSON字符串转为 JSON 对象
  var testObject = eval("(" + jsonStr + ")");
  alert(testObject.name);
</script>
```

JSON格式示例：

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
              var result = request.responseText;
              var object = eval("(" + result + ")");
              
              // 2. 结果不能直接使用，必须先创建对应的节点，再把节点加入到 #details
              // 目标格式为：
              /*
              	<h2><a href="mailto:andy@clearleft.com">Andy Budd</a></h2>
              	<a href="http://andybudd.com">http://andybudd.com</a>
              */
              var name = object.person.name;
              var website = object.person.website;
              var email = object.person.email;
              
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

```JavaScript
{
  "person":{
    "name":"Andy Budd",
    "website":"http://andybudd.com",
    "email":"andy@clearleft.com"
  }
}
```

JSON格式优点：

- JSON比XML更灵巧
- JSON不需要从服务器端发送含有特定内容类型的首部信息



JSON格式缺点：

- 语法过于严谨
- 代码不易读
- eval函数存在风险



#### 总结：

- 若应用程序 不需要与其他应用程序共享数据的时候，使用HTML片段来返回数据时最简单的。
- 如果数据需要重用，JSON是个不错的选择，在性能和文件大小方面有优势。
- 当远程应用程序未知时，XML文档是首选，因为XML是web服务领域的 “世界语”。







### jQuery 中的Ajax

jQuery 对 Ajax 操作进行了封装，在 jQuery 中最底层的方法时 $.ajax()，第二层是 load()，$.get() 和 $.post()，第三层是 $.getScript() 和 $.getJSON()

```html
<script type="text/javascript" src="scripts/jquery-1.7.2.js"></script>
<script type="text/javascript">

  $(function(){
    $("a").click(function(){
      // 使用 load 方法处理 Ajax
      var url = this.href;
      var args = {"time": new Date()}
      $("#content").load(url,args);
      
      return false;
    });
  });
  
</script>
<a href="helloAjax.txt">HelloAjax</a>
<div id="content"></div>

```



使用 jQuery 写 html

```html
<script type="text/javascript" src="../scripts/jquery-1.7.2.js"></script>
<script type="text/javascript">
	$(function(){
    $("a").click(function(){
      var url = this.href + "h2";    // 取 h2 的 a ： var url = this.href + "h2 a";
      var args = {"time":new Date()};
      // 任何一个 html 节点都可以使用 load 方法来加载 Ajax，结果将直接插入 html 节点中。
      $("#details").load(url, args);
      return false;
    })
  });
</script>

<body>
  <h1>People</h1>
  <ul>
  	<li><a href="files/andy.html">Andy</a></li>
    <li><a href="files/richard.html">Richard</a></li>
    <li><a href="files/jeremy.html">Jeremy</a></li>
  </ul>
</body>
```



使用jQuery 写 get  （XML格式）

```html
<script type="text/javascript" src="../scripts/jquery-1.7.2.js"></script>
<script type="text/javascript">
	$(function(){
    $("a").click(function(){
      var url = this.href + "h2";    // 取 h2 的 a ： var url = this.href + "h2 a";
      var args = {"time":new Date()};
      
     
      $.get(url, args, function(data){
        var name = $(data){
          var name = $(data).find("name").text();
          var email = $(data).find("email").text();
          var website = $(data).find("website").text();
          
          $("#details").empty()
            					 .append("<h2><a href='mailto:" + email + "'>" + name + "</a></h2>")
          						 .append("<a href='" + website + "'>" + website + "</a>");
        }
      })
      return false;
    })
  });
</script>

<body>
  <h1>People</h1>
  <ul>
  	<li><a href="files/andy.html">Andy</a></li>
    <li><a href="files/richard.html">Richard</a></li>
    <li><a href="files/jeremy.html">Jeremy</a></li>
  </ul>
</body>
```

```xml
<?xml version="1.0" encoding="utf-8"?>
<details>
	<name>Andy Budd</name>
  <website>http://andybudd.com</website>
  <email>andy@clearleft.com</email>
</details>
```

使用jQuery 写 post  （JSON格式）

```html
<script type="text/javascript" src="../scripts/jquery-1.7.2.js"></script>
<script type="text/javascript">
	$(function(){
    $("a").click(function(){
      var url = this.href + "h2";    // 取 h2 的 a ： var url = this.href + "h2 a";
      var args = {"time":new Date()};
      
     	// url:
      // args: JSON格式
      // function: 回调函数： 当响应结束时，回调函数被触发。响应结果在 data 中。
      $.getJSON(url, args, function(data){
        var name = $(data){
          var name = data.person.name;
          var email = data.person.email;
          var website = data.person.website;
          
          $("#details").empty()
            					 .append("<h2><a href='mailto:" + email + "'>" + name + "</a></h2>")
          						 .append("<a href='" + website + "'>" + website + "</a>");
        }
      },"JSON")
      return false;
    })
  });
</script>

<body>
  <h1>People</h1>
  <ul>
  	<li><a href="files/andy.html">Andy</a></li>
    <li><a href="files/richard.html">Richard</a></li>
    <li><a href="files/jeremy.html">Jeremy</a></li>
  </ul>
</body>
```



#### 小结

- 什么是Ajax？不用刷新页面，但可以和服务端进行通信的方式。使用 Ajax 的主要方式是 XMLHttpRequest 对象。

- 使用 XMLHttpRequest 对象实现 Ajax。

- Ajax 传输数据的3种方式：

  - XML：笨重，解析困难。但XML是通用的数据交换格式
  - HTML： 不需要解析可以直接放到文档中。若仅更新一部分区域。但传输数据不方便，且HTML代码需要拼装完成。
  - JSON：小巧，有面向对象的特征，且有很多第三方的 jar 包。

- 使用 jQuery 完成 Ajax 操作

  - load 方法：可以用于 HTML 文档的元素节点，把结果直接加为对应节点的子元素。通常而言，load 方法加载后的数据时一个HTML片段。

  - $.get， $.post， $.getJSON: 更加灵活。除去使用 load 方法的情况，大部分时候都使用这3个方法。

    I. 基本的使用

    // url：Ajax 请求的目标URL

    // args：传递的参数：JSON类型

    // data：Ajax 响应成功后的数据。可能是XML，HTML，JSON

    $.get(url, args, function(data){

    })


    II. 请求JSON数据

    $.get(url, args, function(data){

    },"JSON");

    $.post(url, args, function(data){

    },"JSON");

    $.getJSON(url, args, function(data){

    });