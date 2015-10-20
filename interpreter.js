var stack=[],//stack
		//I/O functions
		_=i=>[i=prompt`Input:`,stack.push(i)][0]//input
		$=i=>alert(i!=[]._?i:stack),//output
		//stack functions
		p=i=>stack.push(i),//push to stack
		g=i=>i!=[]._?stack[i<0?stack.length+i:i]:stack[stack.length-1],//get item from stack
		s=i=>stack.splice(i!=[]._?i:g()),//splice item from stack
		c=i=>stack=[],//clear stack
		//extra operators
		P=i=>(i=i.split`¢`,Math.pow(i[0]!=[]._?i[0]:g(),i[1]!=[]._?i[1]:2)),//number^exponent
		R=i=>(i=i.split`¢`,0|Math.random()*((i[1]!=[]._?i[1]:1)-(i[0]!=[]._?i[1]:0)+1)+i[0]),//random
		//other functions and builtins
		i=i=>(i=i.split`¢`,eval(`if(${i[0]}){${i[1]}}else{${i[2]}}`)),//if/else conditional statements
		l=i=>(i=i.split`¢`,eval(`for(${i[0]}){${i[1]}}`)),//loop
		e=eval,
		m=Math,
		L=length,
interpret=i=>{
	stack=[];
	i=document.getElementById('c').value;
	if(!i.match(/\$/g))i+=';$()';
	eval(i);
}