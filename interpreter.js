var Ξ=[],//stack
		//I/O functions
		ô=i=>document.getElementById('o').value+=i!=[]._?i:(Ξ.shift(),Ξ.join`\n`),//output
		ℹ=i=>[i=i!=[]._?document.getElementById("c").value[i]:document.getElementById("c").value,Ξ.push(i)][0],//source

		//stack functions
		ᵖ=(i=0)=>{Array.prototype.slice.call(arguments).map(x=>Ξ.push(x))},
		ᵍ=i=>i!=[]._?Ξ[i<0?Ξ.length+i:i]:Ξ[Ξ.length-1],
		ʳ=(i=Ξ.length-1)=>Ξ.splice(i),
		ᶜ=i=>Ξ=[],

		//super-basic aliasing
		ī=Infinity,
		ü=[]._,
		М=math,
		Ϛ=String,
		Ѧ=Array,
		П=Number,
		Ø=Object,
		Ĵ=JSON,
		ɼ=RegExp,
		Ɗ=Date,
		ɘ=i=>LZString.decompress(i);
[Ϛ,Ѧ,П,Ø,ɼ,Ɗ].map(v=>Object.getOwnPropertyNames(v).map((x,y)=>v.prototype[String.fromCharCode(y+248)]=v.prototype[x]));
[М,Ϛ,Ѧ,П,Ø,Ĵ,ɼ,Ɗ].map(v=>Object.getOwnPropertyNames(v).map((x,y)=>v[String.fromCharCode(y+248)]=v[x]));
var Σ=(c,asdf=0)=>{
	//syntax from esmin to es6
	c=c
		.replace(/([ᵖᵍʳᶜôℹΣɘϚѦПØɼƊ])(-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?|[A-Za-z]+)/gm,'$1($2)')
		.replace(/([ᵖᵍʳᶜôℹΣɘϚѦПØɼƊ])(.+)⦆/gm,'$1($2)')
		.replace(/ï(\d+)/gm,'ï[$1]')
		.replace(/⬮/gm,'()')
		.replace(/⬯/gm,'(``)')
		.replace(/⇏/gm,'(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z)=>')
		.replace(/↛/gm,'=(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z)=>')
		.replace(/↪/gm,'($,_,ã)=>')
		.replace(/⤤/gm,'=($,_,ã)=>')
		.replace(/→/gm,'=>')
		.replace(/“/gm,'(`')
		.replace(/”/gm,'`)')
		.replace(/‘/gm,'(\\`')
		.replace(/’/gm,'\\`)')
		.replace(/⸨/gm,'((')
		.replace(/⸩/gm,'))')
		.replace(/⎛/gm,'(/')
		.replace(/⎞/gm,'/)')
		.replace(/⦃/gm,'${')
		.replace(/…/gm,'...')
		.replace(/˖/gm,'+=')
		.replace(/⧺/gm,'++')
		.replace(/˗/gm,'-=')
		.replace(/‡/gm,'--')
		.replace(/×/gm,'*=')
		.replace(/÷/gm,'/=')
		.replace(/٪/gm,'%=')
		.replace(/¡/gm,'!!')
		.replace(/≔/gm,'==')
		.replace(/≠/gm,'!=')
		.replace(/≤/gm,'<=')
		.replace(/≥/gm,'>=')
		.replace(/⅋/gm,'&&')
		.replace(/ǁ/gm,'||')
		.replace(/↺/gm,'for(')
		.replace(/Ʀ/gm,'return ')
		.replace(/ŋ/gm,'new ')
		.replace(/\((.+)\)²/gm,'Math.pow($1,2)')
		.replace(/\((.+)\)³/gm,'Math.pow($1,3)')
		.replace(/(-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)²/gm,'Math.pow($1,2)')
		.replace(/(-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)³/gm,'Math.pow($1,3)')
		.replace(/\((.+)\)ⁿ\((.+)\)/gm,'Math.pow($1,$2)')
		.replace(/(-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)ⁿ\((.+)\)/gm,'Math.pow($1,$2)')
		.replace(/(-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)ⁿ(-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)/gm,'Math.pow($1,$2)')
		.replace(/\((.+)\)ⁿ(-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)/gm,'Math.pow($1,$2)')
		.replace(/√\((.+)\)/gm,'Math.sqrt($1)')
		.replace(/√(-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)/gm,'Math.sqrt($1)')
		.replace(/∛\((.+)\)/gm,'Math.cbrt($1)')
		.replace(/∛(-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)/gm,'Math.cbrt($1)')
		.replace(/ɘ\(`(.+)`\)/gm,(x,y)=>`\`${ɘ(y)}\``)
		.replace(/½/gm,'0.5')
		.replace(/¼/gm,'0.25')
		.replace(/¾/gm,'0.75')
		.replace(/⅐/gm,'(1/7)')
		.replace(/⅑/gm,'(1/9)')
		.replace(/⅒/gm,'0.1')
		.replace(/⅓/gm,'(1/3)')
		.replace(/⅔/gm,'(2/3)')
		.replace(/⅕/gm,'0.2')
		.replace(/⅖/gm,'0.4')
		.replace(/⅗/gm,'0.6')
		.replace(/⅘/gm,'0.8')
		.replace(/⅙/gm,'(1/6)')
		.replace(/⅚/gm,'(5/6)')
		.replace(/⅛/gm,'(1/8)')
		.replace(/⅜/gm,'(3/8)')
		.replace(/⅝/gm,'(5/8)')
		.replace(/⅞/gm,'(7/8)')
	;
	if(asdf==1e4&&!c.match(/ô/gm))c+=';ô()';console.log(c);eval(c)
}

onload=function(){document.getElementById('c').value=decodeURIComponent((/code=(.+)/.exec(location.search)||[,""])[1]);document.getElementById('i').value=decodeURIComponent((/input=([^&]+)/.exec(location.search)||[,""])[1]);document.getElementById('e').checked=eval(decodeURIComponent((/eval=([^&]+)/.exec(location.search)||[,""])[1]))}