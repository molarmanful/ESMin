[String,Array,Number,Object,RegExp,Date,s,_,XRegExp,Function].map(v=>Object.getOwnPropertyNames(v).map((x,y)=>v.prototype[String.fromCharCode(y+248)]=v.prototype[x]));
[math,String,Array,Number,Object,JSON,RegExp,Date,_,s,window,Function].map(v=>Object.getOwnPropertyNames(v).map((x,y)=>v[String.fromCharCode(y+248)]=v[x]));
var Ξ=[],//stack
		//I/O functions
		ô=i=>document.getElementById('o').value+=i!=[]._?i:Ξ.join`\n`,//output
		ℹ=i=>[i=i!=[]._?document.getElementById("c").value[i]:document.getElementById("c").value,Ξ.push(i)][0],//source

		//stack functions
		ᵖ=(i=0,...r)=>{Ξ.push(i,...r)},
		ᵍ=i=>i!=[]._?Ξ[i<0?Ξ.length+i:i]:Ξ[Ξ.length-1],
		ʳ=(i=Ξ.length-1)=>Ξ.splice(i,1),
		ᶜ=i=>Ξ=[],

		//aliasing
		ȉ=Infinity,
		ʉ=[]._,
		ℇ=math.e,
		ε=Number.EPSILON,
		ȋ=math.sqrt(-1),
		ɸ=(1+math.sqrt(5))/2,
		π=math.pi,
		τ=math.pi*2,
		М=math,
		Ϛ=String,
		Ѧ=Array,
		Ѩ=_,
		П=Number,
		Ø=Object,
		ʝ=JSON,
		ɼ=RegExp,
		Ɽ=XRegExp,
		Ḍ=Date,
		ש=window,
		ƒ=Function,
		ß='toString',
		Ꝉ='length',
		ᶏ='apply',
		ᶊ=s,
		Ɱ=(i,f,s='',j='')=>typeof i=='object'?i.map(f):typeof i=='string'?i.split(s).map(f).join(j):eval((''+i).split(s).map(f).join(j)),
		ᴙ=i=>[...i].reverse().join``,
		ë=eval,
		nchars=`ḀḁḂḃḄḅḆḇḈḉḊḋḌḍḎḏḐḑḒḓḔḕḖḗḘḙḚḛḜḝḞḟḠḡḢḣḤḥḦḧḨḩḪḫḬḭḮḯḰḱḲḳḴḵḶḷḸḹḺḻḼḽḾḿṀṁṂṃṄṅṆṇṈṉṊṋṌṍṎṏṐṑṒṓṔṕṖṗṘṙṚṛṜṝṞṟṠṡṢṣṤṥṦṧṨṩṪṫṬṭṮṯṰṱṲṳṴṵṶṷṸṹṺṻṼṽṾṿẀẁẂẃẄẅẆẇẈẉẊẋẌẍẎẏẐẑẒẓẔẕẖẗẘẙaʾẛẜẝẞẟẠạẢảẤấẦầẨẩẪẫẬậẮắẰằẲẳẴẵẶặẸẹẺẻẼẽẾếỀềỂểỄễỆệỈỉỊịỌọỎỏỐốỒồỔổỖỗỘộỚớỜờỞởỠỡỢợỤụỦủỨứỪừỬửỮữỰựỲỳỴỵỶỷỸỹỺỻỼỽỾỿ`
		;

//compression stuff
shoco.c=i=>Array.prototype.map.call(shoco.compress(i),x=>String.fromCharCode(x)).join``;
shoco.d=i=>shoco.decompress(Uint8Array((i.constructor==Array?i[0]:i).split``.map(x=>x.charCodeAt(0))));
var compress=i=>LZString.compress(shoco.c(i));

var Σ=c=>{
	//syntax from esmin to es6
	c=c
		.replace(/ɘ(.+)#/g,(x,y)=>shoco.d(LZString.decompress(y)))
		.replace(/ℍ/g,'00')
		.replace(/𝕜/g,'000')
		.replace(/𝕄/g,'000000')
		.replace(/𝔾/g,'000000000')
		.replace(/𝕋/g,'000000000000')
		.replace(/ℙ/g,'000000000000000')
		.replace(/𝔼/g,'000000000000000000')
		.replace(/ℤ/g,'000000000000000000000')
		.replace(/𝕐/g,'000000000000000000000000')
		.replace(/⬮/g,'()')
		.replace(/⬯/g,'(``)')
		.replace(/⬭/g,'(` `)')
		.replace(/⇝/g,'((a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z)=>')
		.replace(/⇀/g,'(($,_,ã)=>')
		.replace(/§/g,'($1)')
		.replace(/([ᵖᵍʳôℹΣɘϚѦПØѨɼⱤƒḌⱮᴙᶊëßᶏ\u00f8-\u01ef])(([A-Za-z$_ãïîíìȉʉℇεȋɸπτ²³ⁿ√∛¼½¾⅐⅑⅒⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞ᶀᶍ\u1e00-\u1eff]|-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)+)/g,'$1($2)')
		.replace(/([ᵖᵍʳôℹΣɘϚѦПØɼⱤѨḌƒⱮᴙᶊëßᶏ\u00f8-\u01ef])([^(\u00f8-\u01efᶏ])/g,'$1($2')
		.replace(/⎖(\d+)/g,'[$1]')
		.replace(/([ïîíì])(\d+)/g,'$1[$2]')
		.replace(/⇏/g,'(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z)=>')
		.replace(/↛/g,'=(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z)=>')
		.replace(/↪/g,'($,_,ã)=>')
		.replace(/⤤/g,'=($,_,ã)=>')
		.replace(/→/g,'=>')
		.replace(/”/g,'`)')
		.replace(/‘/g,'\\`')
		.replace(/’/g,'\\`)')
		.replace(/⸩/g,'))')
		.replace(/⎞/g,'/)')
		.replace(/⦃/g,'${')
		.replace(/…/g,'...')
		.replace(/⟦/g,'[...')
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
		.replace(/≤/g,'<=')
		.replace(/≥/g,'>=')
		.replace(/⅋/g,'&&')
		.replace(/⋎/g,'||')
		.replace(/↺/g,'for(')
		.replace(/ᶉ/g,'return ')
		.replace(/ŋ/g,'new ')
		.replace(/ᕠ/g,'this')
		.replace(/(⦅.+|(([A-Za-z$_ãïîíìȉʉℇεȋɸπτ²³ⁿ√∛¼½¾⅐⅑⅒⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞ᶀᶍ\u1e00-\u1eff]|-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)+))²/g,'Math.pow($1,2)')
		.replace(/(⦅.+|(([A-Za-z$_ãïîíìȉʉℇεȋɸπτ²³ⁿ√∛¼½¾⅐⅑⅒⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞ᶀᶍ\u1e00-\u1eff]|-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)+))³/g,'Math.pow($1,3)')
		.replace(/(⦅.+|(([A-Za-z$_ãïîíìȉʉℇεȋɸπτ²³ⁿ√∛¼½¾⅐⅑⅒⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞ᶀᶍ\u1e00-\u1eff]|-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)+))ⁿ(.+⦆|(([A-Za-z$_ãïîíìȉʉℇεȋɸπτ²³ⁿ√∛¼½¾⅐⅑⅒⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞ᶀᶍ\u1e00-\u1eff]|-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)+))/g,'Math.pow($1,$4)')
		.replace(/√(.+⦆|(([A-Za-z$_ãïîíìȉʉℇεȋɸπτ²³ⁿ√∛¼½¾⅐⅑⅒⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞ᶀᶍ\u1e00-\u1eff]|-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)+))/g,'Math.sqrt($1)')
		.replace(/∛(.+⦆|(([A-Za-z$_ãïîíìȉʉℇεȋɸπτ²³ⁿ√∛¼½¾⅐⅑⅒⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞ᶀᶍ\u1e00-\u1eff]|-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)+))/g,'Math.cbrt($1)')
		.replace(/[⦅⦆]/g,'')
		.replace(/½/g,'0.5')
		.replace(/¼/g,'0.25')
		.replace(/¾/g,'0.75')
		.replace(/⅐/g,'(1/7)')
		.replace(/⅑/g,'(1/9)')
		.replace(/⅒/g,'0.1')
		.replace(/⅓/g,'(1/3)')
		.replace(/⅔/g,'(2/3)')
		.replace(/⅕/g,'0.2')
		.replace(/⅖/g,'0.4')
		.replace(/⅗/g,'0.6')
		.replace(/⅘/g,'0.8')
		.replace(/⅙/g,'(1/6)')
		.replace(/⅚/g,'(5/6)')
		.replace(/⅛/g,'(1/8)')
		.replace(/⅜/g,'(3/8)')
		.replace(/⅝/g,'(5/8)')
		.replace(/⅞/g,'(7/8)')
		.replace(/ᶀ/g,'0b')
		.replace(/ᶍ/g,'0x')
		.replace(/Ⅹ/g,'10')
		.replace(/([\u00f8-\u01ef])/g,'["$1"]')
		.replace(/([ßꝈᶏ])/g,'[$1]')
		.replace(/⑴/g,'$1')
		.replace(/⑵/g,'$2')
		.replace(/⑶/g,'$3')
		.replace(/⊙/g,'(.)')
		.replace(/⁅/g,'[^')
		.replace(/α/g,'a-z')
		.replace(/𝚨/g,'A-Z')
		.replace(/𐄫/g,'0-9')
		.replace(/ᶌ/g,'aeiou')
		.replace(/⌿/g,'/g')
		.replace(/⍀/g,'/ig')
		.replace(/⊨/g,'true')
		.replace(/⊭/g,'false')
		.replace(/«/g,'<<')
		.replace(/»/g,'>>')
		.replace(/⫸/g,'>>>')
		.replace(/˜/g,'~~')
	;
	if(!c.match(/ô/g)&&c.match(/ᵖ/g)){c+=';ô()',console.log(c),eval(c);return}
	else if(Ξ.length<1&&!c.match(/ô/g)){console.log(c),document.getElementById('o').value=eval(c);return}
	else console.log(c),eval(c);
}
