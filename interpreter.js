var interpret=c=>{
	var Ξ=[],//stack
			//I/O functions
			î=i=>[i=prompt`Input:`,Ξ.push(i)][0],//input
			ô=i=>alert(i!=[]._?i:JSON.stringify(Ξ)),//output
			ℹ=i=>[i=i!=[]._?document.getElementById("c").value[i]:document.getElementById("c").value,Ξ.push(i)][0],//source


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
			Ø=Object,
			Ĵ=JSON,
			Σ=eval,

			//syntax from esmin to es6
			c=c
				.replace(/⬮/g,'()')
				.replace(/⇏/g,'(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z)=>')
				.replace(/([ᵖᵍʳᶜôℹ])(-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)/g,'$1($2)')
				.replace(/“(.*)”/g,'(`$1`)')
				.replace(/‘(.*)’/g,'(\\`$1\\`)')
				.replace(/…/g,'...')
				.replace(/˖/g,'+=')
				.replace(/⧺/g,'++')
				.replace(/˗/g,'-=')
				.replace(/‡/g,'--')
				.replace(/×/g,'*=')
				.replace(/÷/g,'/=')
				.replace(/٪/g,'%=')
				.replace(/¡/g,'!!')
				.replace(/≔/g,'==')
				.replace(/≠/g,'!=')
				.replace(/⅋/g,'&&')
				.replace(/ǁ/g,'||')
				.replace(/↺(.+)\)/g,'for($1)')
	if(!c.match(/ô/g))c+=';ô()';
	document.getElementById('compiled').innerHTML=c;
	eval(c);
}