var interpret=c=>{
	var Ξ=[],//stack
			//I/O functions
			î=i=>[i=prompt`Input:`,Ξ.push(i)][0],//input
			ô=i=>alert(i!=[]._?i:Ξ),//output
			ℹ=i=>[i=i!=[]._?c[i]:c,stack.push(i)][0],//source


			//stack functions
			ᵖ=(i=0)=>{Array.prototype.slice.call(arguments).map(x=>Ξ.push(x))},
			ᵍ=i=>i!=[]._?Ξ[i<0?Ξ.length+i:i]:Ξ[Ξ.length-1],
			ʳ=(i=Ξ.length-1)=>Ξ.splice(i),
			ᶜ=i=>Ξ=[],

			//super-basic aliasing
			ī=Infinity,
			ü=[]._,
			М=Math,
			Ϛ=String,
			Ѧ=Array,
			П=Number,
			Σ=eval,

			//syntax from esmin to es6
			c=c
				.replace(/⬮/g,'()')
				.replace(/(.+)⤇/g,'($1)=>')
				.replace(/⇏/g,'=()=>')
				.replace(/([ᵖᵍʳᶜô])(-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)/g,'$1($2)')
				.replace(/([_$a-zA-Z]*)“([^”]*?)$/gm,'$1(`$2`)')
				.replace(/([_$a-zA-Z]*)‘([^’]*?)$/gm,'$1(\\`$2\\`)')
				.replace(/([_$a-zA-Z]*)\(([^)]*?)$/gm,'$1($2)')
				.replace(/([_$a-zA-Z]*)\[([^\]]*?)$/gm,'$1[$2]')
				.replace(/([_$a-zA-Z]*){([^}]*?)$/gm,'$1{$2}')
				.replace(/…/g,'...')
				.replace(/˖/g,'+=')
				.replace(/˗/g,'-=')
				.replace(/×/g,'*=')
				.replace(/÷/g,'/=')
				.replace(/¡/g,'!!')
				.replace(/≔/g,'==')
				.replace(/≠/g,'!=')
				.replace(/⅋/g,'&&')
				.replace(/ǁ/g,'||')
	if(!c.match(/ô/g))c+=';ô()';
	eval(c);
}