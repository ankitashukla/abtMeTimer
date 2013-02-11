function start()
{
	t=setTimeout("document.getElementById('alert').innerHTML=' '",5000);
	bdTimer();
}

function bdTimer()
{	
	var bm=07,bd=07;
	var pmd=monthDays(bm-1);
	document.getElementById('bd').innerHTML=bd+" "+monthName(bm);
	var today=new Date();
	var m=today.getMonth();
	var d=today.getDate();
	if (bm-1==m && bd==d) document.getElementById('bday').innerHTML="Today is my birthday!";
	else {
		if (bd>d) 
			m=bm-m-1;
		else m=bm-m-2;
		if (m<0) m=12+m;
		d=bd-d-1;
		if (d<0) {
			d*=-1;
			d=pmd-d;
		}
		var h=today.getHours();
		h=23-h;
		var min=today.getMinutes();
		min=59-min;
		var s=today.getSeconds();
		s=59-s;
		document.getElementById('bday').innerHTML=m+" "+plural("month",m)+" "+d+" "+plural("day",d)+" "+h+" "+plural("hour",h)+" "+min+" "+plural("minute",min)+" and "+s+" "+plural("second",s)+" "+" to go";
		t=setTimeout('bdTimer()',1000);
	}
}

function monthDays (m)
{
	var t=new Date();
	if (m==0) m=12;
	if (m%2==0 && m>=8) return 31;
	else if (m%2!=0 && m<=7) return 31;
	else if (m==2) 
	{
		if (t.getFullYear()%4==0 && t.getFullYear()%100!=0) return 29;
		else if (t.getFullYear()%400==0) return 29;
		else return 28;
	}
	else return 30;
}

function plural (str,n)
{
	if (n==1) return str;
	else return str+"s";
}

function monthName (m)
{
	switch(m)
	{
		case 1 : return "January";
		case 2 : return "February";
		case 3 : return "March";
		case 4 : return "April";
		case 5 : return "May";
		case 6 : return "June";
		case 7 : return "July";
		case 8 : return "August";
		case 9 : return "September";
		case 10 : return "October";
		case 11 : return "November";
		case 12 : return "December";
	}
}
