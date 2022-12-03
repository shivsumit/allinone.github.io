function reset(){
	document.getElementById('textbox').value="";
	document.getElementById('textbox2').value="";
}

function cancel(){
	let a=document.getElementById("textbox").value;
	let b="";
	let n=a.length;
		for(i=0;i<n-1;i++){
			b=b+a[i];
		}
	a=b;
	document.getElementById("textbox").value=a;
}

function display(num){
	document.getElementById('textbox').value +=num;
}

function calculate() {
	let num = document.getElementById('textbox').value;
	if(num.search('%')!=-1){
		let num2=num.split('%');
		let lenth=num2.length;
		let ans=Number(num2[0])*Number(num2[1])/100;
			for (var i=2; i<lenth; i++) {
					ans=Number(ans)*Number(num2[i])/100;
			}
			document.getElementById('textbox2').value=ans;

	}
	else{
		let ans=eval(num);
		document.getElementById('textbox2').value=ans;
	}
}