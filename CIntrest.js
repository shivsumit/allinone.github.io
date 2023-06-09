function myfun(){
var P=document.getElementById("pri").value;

var R=document.getElementById("rate").value;

var T=document.getElementById("time").value;

var N=document.getElementById("ic").value;

var M=document.getElementById("tg").value;

var A=1;

R=Number(R)/100;
T=Number(T);

if(M=="year")
{
	T=T*12;
}
else if (M=="month")
{
	T=T;

}
else
{
	alert("You are Inputed Something Wrong")
	window.reload();
}

if(N=="year")
{
	T=T;
	R=R;

}
else if (N=="halfyear")
{
	T=T/6;
	R=R/2;

}
else if (N=="quater")
{
	T=T/3;
	R=R/4;

}
else if (N=="month")
{
	T=T;
	R=R/12;
}
else if (N=="week")
{
	T=(T/12)*52;
	R=R/52;
}
else if (N=="days")
{
	T=(T/12)*365;
	R=R/365;
}
else
{
	alert("You are Inputed Something Wrong")
	window.reload();
}

R = 1+R;

for(i=1; i<=T; i++)
{
A=A*R;
}
A=A*P;



var S = Number(A)-Number(P);

if(!isNaN(S)){

document.getElementById("pri1").value=P;
document.getElementById("rate1").value=R.toFixed(2);
document.getElementById("time1").value=T+" "+N;
document.getElementById("int1").value=S.toFixed(2);
document.getElementById("amnt1").value=A.toFixed(2);

document.getElementById("box2").style.display="block";
document.getElementById("box1").style.display="none";
}




}