var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var input4 = document.getElementById("input4");
var btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    /*Write your logic here */
    max_val = 0;
    max_val=Math.max(input1.value,input2.value,input3.value);
    /*if(input1.value>input2.value && input1.value>input3.value)
		{
		    max_val=input1.value;
		}
		else if(input2.value>input1.value && input2.value>input3.value)
		{
		    max_val=input2.value;
		}
		else if(input3.value>input1.value && input3.value>input1.value)
		{
			    max_val=input3.value;
		}*/
  document.getElementById("input4").setAttribute("value",max_val );
});