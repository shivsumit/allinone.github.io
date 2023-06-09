function myfun(){
var P=document.getElementById("pri").value;

var R=document.getElementById("rate").value;

var T=document.getElementById("time").value;

var A=1;
P=Number(P);
R=Number(R);
T=Number(T);

var S=P*R*T/100;

A= Number(S)+Number(P);

if(!isNaN(S)){

document.getElementById("pri1").value=P;
document.getElementById("rate1").value=R.toFixed(2);
document.getElementById("time1").value=T;
document.getElementById("int1").value=S.toFixed(2);
document.getElementById("amnt1").value=A.toFixed(2);

document.getElementById("box2").style.display="block";
document.getElementById("box1").style.display="none";
}




}