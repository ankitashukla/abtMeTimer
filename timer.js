function timer()
{
	var bm=7,bd=7,n=30;            //n=no of days in the previous mnth (here June)
	var today=new Date();


	//month calculation
	var m=today.getMonth();
	m=bm-m-2;               //bcoz if the mnth is 2, dn m=1, and bm-1=7-1=6, and actual no of mnths left 
	                        //are 7-2=5; therefore define m=(bm-m)-2;
	if(m<0)
	{
		m=12+m;
	}


	//days calculation
	var d=today.getDate();
	d=bd-d;                  //coz if today date is 11, then no of days left would be 7-11=-4
	if(d<0)
	{
		d=n+d-1;
	}                         // -ve no of days discarded
		 if(d==0)                //actual no of days left=from 11june to 7jul=25
	 {                        //therefore, for -ve d, define d=30+d-1
	 	d=""                  //that means it is d 7 of any mnth
	 }



	 //similar calculations for hour, min, sec
	 //remaining=max-current && leave blank if remaining===0;
	 

	 //hours calculation
	 var h=today.getHours();
	 h=23-h;
	 if(h==0)
	 	h="";


	 //minutes calculation
	 var min=today.getMinutes();
	 min=59-min;
	 if(min==0)
	 	min="";

	 //seconds calculation
	 var s=today.getSeconds();
	 s=59-s;
	 if(s==0)
	 	s="";


	document.getElementById('Timer').innerHTML=m+" "+adds("Month",m)+" "+d+" "+adds("Day",d)+" "+h+" "+adds("Hour",h)+" "+min+" "+adds("Minute",min)+" "+s+" "+adds("Second",s);
	t=setTimeout('timer()',1000);

}
function adds (a,b) 
{
	if(b==1) return a;
	if (b==0) return "";
	else return a+"s";
}

