<h1>Mac版Python学习笔记</h1>

<h3>一. 准备工作</h3>

1. 进入Python官网下载最新版python后，双击安装即可
   https://www.python.org/

   <img src="/Users/yvonne/Library/Application Support/typora-user-images/image-20201116092903998.png" alt="image-20201116092903998" style="zoom:50%;" />

   downloads

   <img src="/Users/yvonne/Library/Application Support/typora-user-images/image-20201116093000042.png" alt="image-20201116093000042" style="zoom: 50%;" />

   下载后双击安装

   <img src="/Users/yvonne/Library/Application Support/typora-user-images/image-20201116093040756.png" alt="image-20201116093040756" style="zoom:50%;" />

   打开终端，输入 python3

   <img src="/Users/yvonne/Library/Application Support/typora-user-images/image-20201116093138184.png" alt="image-20201116093138184" style="zoom:200%;" />

   安装成功，输入exit()或control+D 退出python

   

   可以在终端输入：where is python3

   就可以查询python3的路径

   

2. 安装vs code（编辑器）
   https://code.visualstudio.com/

   <img src="/Users/yvonne/Library/Application Support/typora-user-images/image-20201116093354211.png" alt="image-20201116093354211" style="zoom:50%;" />

   官网下载双击安装

   

   control + '`'(数字1前面的按键，与‘~’为同有一个按键) 呼唤出终端

   <img src="/Users/yvonne/Library/Application Support/typora-user-images/image-20201116093938860.png" alt="image-20201116093938860" style="zoom:50%;" />

   输入python3

   <img src="/Users/yvonne/Library/Application Support/typora-user-images/image-20201116094012383.png" alt="image-20201116094012383" style="zoom:50%;" />

   python运行正常

   exit() 或 control+D退出python

   

3. vs code插件安装（插件选择摘自知乎）

   打开插件拓展页面，输入插件名，点击后面的安装即可

   <img src="/Users/yvonne/Library/Application Support/typora-user-images/image-20201116094248649.png" alt="image-20201116094248649" style="zoom:50%;" />

   

   插件输入：

   ```text
   1.1、Python //Python的基础插件、调试、解释、运行py代码的基础
   1.2、Django
   1.3、Jinja
   1.4、MagicPython
   1.5、Python Extension Pack
   1.6、Python Path
   1.7、Python-autopep8
   
   2、Anaconda Extension Pack //会高亮、提示、补全Python标准库里没有的关键字
   3、Code Runner //生成一键运行程序的按钮，支持很多语言，包括python
   4、Bracket Pair Colorizer //为括号生成不同颜色，能醒目的区分括号
   5、indent-rainbow //缩进颜色提示，能直接对缩进进行颜色提示
   6、vscode-icons //VSCode的图标按钮主题，能很快辨别出代码的语言类型
   7、Chinese (Simplified) Language Pack for Visual Studio Code //VSCode的菜单显示中文
   8、Visual Studio IntelliCode
   9、YAML
   10、Project Manager(个人并未安装这个)
   ```

   

4. vs code工作区编辑（完全可以跳过，不影响大局）

   直接查看底部颜色，紫色没有建立工作区。蓝色则是建立了工作区。

   <img src="/Users/yvonne/Library/Application Support/typora-user-images/image-20201116101815394.png" alt="image-20201116101815394" style="zoom:50%;" />

   工作区的作用：在多语言的环境下，管理不同环境下使用相应的插件。比如有2个工作区，一个使用python，一个使用C，python中不想使用C语言插件，在C语言中不想使用C语言插件，有了工作区就可以保证插件的管理。

   可以考虑在根目录下创建一个coding目录作为所有代码的根目录，然后分别创建python、C、HTML等目录（文件夹）当做不同代码的工作区。

   

5. Hello World

   **（1）终端里运行**

   启动python3，在终端输入：python3

   <img src="/Users/yvonne/Library/Application Support/typora-user-images/image-20201116112517067.png" alt="image-20201116112517067" style="zoom:80%;" />

   输入 print("Hello World!")

   ![image-20201116112619464](/Users/yvonne/Library/Application Support/typora-user-images/image-20201116112619464.png)

   打印成功

   

   输入exit()或 control+D，退出python3

   

   **（1）VS CODE里使用文本运行**

   **前提**：插件内已安装code runner

   ![image-20201116114134603](/Users/yvonne/Library/Application Support/typora-user-images/image-20201116114134603.png)

   

   **vscode配置环境变量路径**

   a. 新建hello.py文件，用vscode打开该文件，vscode会有弹出提示选择环境变量的路径，选择“/usr/local/bin/python3.9”即可。

   b. 或者搜索setting.json文件添加环境变量路径，如下图,在用户设置中添加python3的路径"python.pythonPath": "/usr/local/bin/python3.9"

   ![image-20201116114244310](/Users/yvonne/Library/Application Support/typora-user-images/image-20201116114244310.png)

   

   ![image-20201116114315237](/Users/yvonne/Library/Application Support/typora-user-images/image-20201116114315237.png)

   

   **新建文件**:hello_world.py

   ![image-20201116114544982](/Users/yvonne/Library/Application Support/typora-user-images/image-20201116114544982.png)

   

   ![image-20201116114629882](/Users/yvonne/Library/Application Support/typora-user-images/image-20201116114629882.png)

   **输入**：print("Hello World!")，ctrl+S保存

   ![image-20201116114759503](/Users/yvonne/Library/Application Support/typora-user-images/image-20201116114759503.png)

   

   **点击**右上角的 运行按钮  或者  同时**按下**control +option + N

   ![image-20201116114825354](/Users/yvonne/Library/Application Support/typora-user-images/image-20201116114825354.png)

   

   ![image-20201116114952222](/Users/yvonne/Library/Application Support/typora-user-images/image-20201116114952222.png)

   如果空白，可能是没保存。

   

   

   6. 默认print（打印）不支持中文

      使用中文会报错

      ![image-20201116165028938](/Users/yvonne/Library/Application Support/typora-user-images/image-20201116165028938.png)

      

      在文档开头加上  \# -*- coding: UTF-8 -*-    （两边不要有空格）

      ![image-20201116165009767](/Users/yvonne/Library/Application Support/typora-user-images/image-20201116165009767.png)

      ![image-20201116165100165](/Users/yvonne/Library/Application Support/typora-user-images/image-20201116165100165.png)

   

   

   

