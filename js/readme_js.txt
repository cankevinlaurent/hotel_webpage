javascript说明

calendar.js
该文件用来在页面生成一个日历。

index.js
该文件包含六个功能。一是对mainbody的内容进行滑动门效果，二是页脚的收藏功能，三是四格相册自动效果，四是clearbox调出图片效果，五是对联广告、六是点击滑动相册。
其中clearbox使用方法：
<P>单图演示
  <a href="images/cb_sample_01.jpg" rel="clearbox" title="标题名">
	<img src="images/cb_sample_01_tn.jpg" /></a>
图组演示：
<a href="images/cb_sample_01.jpg" rel="clearbox[test1]" title="标题名">
	<img src="images/cb_sample_01_tn.jpg" /></a>
<a href="images/cb_sample_05.jpg" rel="clearbox[test1]" title="标题名">
	<img src="images/cb_sample_05_tn.jpg" /></a>
网址演示：
鼠标单击演示<a href="http://www.***.com/" rel="clearbox(692,500,click)">点下来试试</a>
鼠标移动演示<a href="http://tool.***.com/***/" rel="clearbox(692,500,ovre)">放上来试试</a></p>