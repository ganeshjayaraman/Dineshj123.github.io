function c(val)
{
document.getElementById("calc").innerHTML="";
document.getElementById("evaluation").innerHTML="";
}
function v(n)
{
   	var k=document.getElementById("calc").innerHTML;
	if(n=='c')
		document.getElementById("calc").innerHTML="";
else if(n=="del")
{ 
 document.getElementById("calc").innerHTML = k.substr(0 , k.length-1);
}
else
document.getElementById("calc").innerHTML+=n;
}
function e() 
{ 
var k=document.getElementById("calc").innerHTML;
document.getElementById("evaluation").innerHTML=eval(k);
} 