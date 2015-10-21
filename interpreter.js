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
		P=(i='g()¢2',j)=>[i=i.split`¢`,j=Math.pow(i[0]!=[]._?eval(i[0]):g(),i[1]!=[]._?eval(i[1]):2),p(j)][1],//number^exponent
		R=(i='0¢1',j,x,y)=>[i=i.split`¢`,j=0|Math.random()*(i[1]-i[0]+1)+i[0],p(j)][1],//random
		//other functions and builtins
		i=i=>(i=i.split`¢`,eval(`if(${i[0]}){${i[1]}}else{${i[2]}}`)),//if/else conditional statements
		l=i=>(i=i.split`¢`,eval(`for(${i[0]}){${i[1]}}`)),//loop
		e=eval,
		m=Math,
		L=length,
		r=(i,j)=>(p(j=[...i].reverse().join``),j),
		
interpret=i=>{
	stack=[];
	i=document.getElementById('c').value
		.replace(/([^\\])@/g,'$1()')
		.replace(/~>/g,'=()=>')
		.replace(/([_$a-zA-Z]*)[“‘«⧘](.*?)[⧙”’»]/g,'$1(`$2`)');
	if(!i.match(/\$[^{]/g))i+=';$()';
	eval(i);
}