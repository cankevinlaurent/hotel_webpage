CSS˵��

struct.css
���ļ�ָ������ҳ�Ŀ��ģ�壬���ȱ�����ҳ�档����ҳ�汻��Ϊcontainer���������������headerͷ����sidebar�������mainbody�ұ����壬footerҳ�š���Լҳ�汻��Ϊcontainer���������������headerͷ����maintext���壬footerҳ�š�

main.css
���ļ���������ҳ�ĳ����ģ�����������ʽ�����Ҳ�����ĸ�album��ʽ��hoverbox��ʽ��clearbox��ʽ��ad_check_in��ʽ��clickalbum��ʽ��Բ�Ǿ�����ʽ����
clearbox��ʽʹ�÷�����
<P>��ͼ��ʾ
  <a href="images/cb_sample_01.jpg" rel="clearbox" title="������">
	<img src="images/cb_sample_01_tn.jpg" /></a>
ͼ����ʾ��
<a href="images/cb_sample_01.jpg" rel="clearbox[test1]" title="������">
	<img src="images/cb_sample_01_tn.jpg" /></a>
<a href="images/cb_sample_05.jpg" rel="clearbox[test1]" title="������">
	<img src="images/cb_sample_05_tn.jpg" /></a>
��ַ��ʾ��
��굥����ʾ<a href="http://www.***.com/" rel="clearbox(692,500,click)">����������</a>
����ƶ���ʾ<a href="http://tool.***.com/***/" rel="clearbox(692,500,ovre)">����������</a></p>

Բ�Ǿ�����ʾЧ����
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