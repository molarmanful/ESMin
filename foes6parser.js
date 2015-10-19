var stack=[],//stack
		
		//I/O functions
		_=prompt(),//input
		$=i=>alert(i),//output
		
		//stack functions
		p=i=>stack.push(i),//push to stack
		g=i=>i!=[]._?stack[i<0?stack.length+i:i]:stack[stack.length-1],//get item from stack
		s=i=>stack.splice(i!=[]._?i:g()),//splice item from stack
		c=i=>stack=[],//clear stack
		
		//operators
		A=()=>g(-2)+g(),//add top 2 numbers in stack
		S=()=>g(-2)-g(),//subtract top 2 numbers in stack
		T=()=>g(-2)*g(),//multiply top 2 numbers in stack
		D=()=>g(-2)/g(),//divide top 2 numbers in stack
		M=()=>g(-2)%g(),//modulo/remainder top 2 numbers in stack
		P=(x,i)=>Math.pow(i!=[]._?i:g(),x),//number^exponent
		R=(x=0,y=0)=>0|Math.random()*(y-x+1)+x,//random
		
		//other functions and builtins
		i=(c,f,e)=>eval(`if(${c}){${f}}else{${e}}`),//if/else conditional statements
		l=(c,f)=>eval(`for(${c}){${f}}`),//loop
		e=eval,
		a=Array,
		s=String,
		r=RegExp,
		m=Math;