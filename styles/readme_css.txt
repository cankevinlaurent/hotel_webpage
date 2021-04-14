CSS说明

struct.css
该文件指定了网页的框架模板，最先被引入页面。正规页面被分为container容器。里面包括了header头部，sidebar左边条，mainbody右边主体，footer页脚。简约页面被分为container容器。里面包括了header头部，maintext主体，footer页脚。

main.css
该文件定义了网页的除框架模板外的所有样式（因此也包括四格album样式、hoverbox样式、clearbox样式、ad_check_in样式、clickalbum样式、圆角矩形样式）。
clearbox样式使用方法：
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

圆角矩形演示效果：
<body>

<div id="container">
<div class="xsnazzy" style="float:left;">
<b class="xb1"></b><b class="xb2"></b><b class="xb3"></b><b class="xb4"></b><b class="xb5"></b><b class="xb6"></b><b class="xb7"></b>
<div class="xboxcontent">
<h1>Chunky Borders</h1>
<h2>3 pixel rounded borders without images</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
  euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
  ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
  ut aliquip ex ea commodo consequat.</p>
</div>
<b class="xb7"></b><b class="xb6"></b><b class="xb5"></b><b class="xb4"></b><b class="xb3"></b><b class="xb2"></b><b class="xb1"></b>
</div>

<div class="xsnazzy">
<b class="xb1"></b><b class="xb2"></b><b class="xb3"></b><b class="xb4"></b><b class="xb5"></b><b class="xb6"></b><b class="xb7"></b>
<div class="xboxcontent">
<p>Or this can be used as a speech bubble with the addition of a little CSS pointer. This does require a careful choice of colors for the foreground, border and background to hide the chunky non-anti aliased corners, and it works with javascript off and images off.</p>
</div>
<b class="xb7"></b><b class="xb6"></b><b class="xb5"></b><b class="xb4"></b><b class="xb3"></b><b class="xb2"></b><b class="xb1"></b>
<em></em><span></span>
</div>

</div>
<div id="picture">
<div class="xsnazzy">
<b class="xb1"></b><b class="xb2"></b><b class="xb3"></b><b class="xb4"></b><b class="xb5"></b><b class="xb6"></b><b class="xb7"></b>
<div class="xboxcontent">
<h1>For non-IE6 browsers</h1>
<h2>12th June 2007</h2>
<h1>AND NOW FOR IE6 AS WELL</h2>
<p>Just to show that this can be applied over a background image because the corners have 'transparent' margins and the pointer has transparent borders.</p>
</div>
<b class="xb7"></b><b class="xb6"></b><b class="xb5"></b><b class="xb4"></b><b class="xb3"></b><b class="xb2"></b><b class="xb1"></b>
<em></em><span></span>
</div>
</div>

</body>