<!--

	function Year_Month(){
		var now = new Date(); 
		var yy = now.getYear()%100+2000; 
		var mm = now.getMonth()+1; 
		if (now.getDay() == 0)return('<SPAN style="color:#C00000;">' + yy + '��' + mm + '��</SPAN>'); 
		if (now.getDay() == 6)return('<SPAN style="color:#00C000;">' + yy + '��' + mm + '��</SPAN>');
		return(yy + '��' + mm + '��'); 
	}

	function Date_of_Today(){
		var now = new Date();
		if (now.getDay() == 0)return('<SPAN style="color:#C00000;">' + now.getDate() + '</SPAN>'); 
		if (now.getDay() == 6)return('<SPAN style="color:#00C000;">' + now.getDate() + '</SPAN>'); 
		return(now.getDate());
	}

	function Day_of_Today(){
		var day = new Array();
		day[0] = "������"; 
		day[1] = "����һ"; 
		day[2] = "���ڶ�"; 
		day[3] = "������"; 
		day[4] = "������"; 
		day[5] = "������"; 
		day[6] = "������"; 
		var now = new Date(); 
		if (now.getDay() == 0)return('<SPAN style="color:#C00000;">' + day[now.getDay()] + '</SPAN>'); 
		if (now.getDay() == 6)return('<SPAN style="color:#00C000;">' + day[now.getDay()] + '</SPAN>'); 
		return(day[now.getDay()]);
	}

	function CurentTime(){
		var now = new Date(); 
		var hh = now.getHours(); 
		var mm = now.getMinutes(); 
		var ss = now.getTime() % 60000; 
		ss = (ss - (ss % 1000)) / 1000; 
		var clock = hh+':'; 
		if (mm < 10) clock += '0'; 
		clock += mm+':'; 
		if (ss < 10) clock += '0'; 
		clock += ss; 
		return(clock);
	}

	function refreshCalendarClock(){
		document.getElementById("calendarClock1").innerHTML = Year_Month(); 
		document.getElementById("calendarClock2").innerHTML = Date_of_Today(); 
		document.getElementById("calendarClock3").innerHTML = Day_of_Today(); 
		document.getElementById("calendarClock4").innerHTML = CurentTime();
	}

	document.write('<DIV id="calendarClock1"></DIV>');
	document.write('<DIV id="calendarClock2" style="margin-top:7px; font-family:Arial; font-size:14pt;color:#0000FF;"></DIV>');
	document.write('<DIV id="calendarClock3" style="margin-top:8px; font-size:9pt;"></DIV>');
	document.write('<DIV id="calendarClock4" style="margin-top:2px; font-size:8pt;"></DIV>');
	setInterval('refreshCalendarClock()',1000);

// -->