var stack=[],//stack
		
		//I/O functions
		_=i=>stack.push(prompt`Input:`),//input
		$=i=>alert(i!=[]._?i:stack),//output
		
		//stack functions
		p=i=>stack.push(i),//push to stack
		g=i=>i!=[]._?stack[i<0?stack.length+i:i]:stack[stack.length-1],//get item from stack
		s=i=>stack.splice(i!=[]._?i:g()),//splice item from stack
		c=i=>stack=[],//clear stack
		
		//extra operators
		P=(x,i)=>Math.pow(i!=[]._?i:g(),x),//number^exponent
		R=(x,y)=>0|Math.random()*(y-x+1)+x,//random
		
		//other functions and builtins
		i=(c,f,e)=>eval(`if(${c}){${f}}else{${e}}`),//if/else conditional statements
		l=(c,f)=>eval(`for(${c}){${f}}`),//loop
		e=eval,
		m=Math,
interpret=i=>{
	stack=[];
	i=document.getElementById('c').value;
	i+=i.match(/\$/g)||';$()';
	eval(i);
}