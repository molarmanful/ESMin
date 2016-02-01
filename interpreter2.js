//Welcome to the annotated source code of the interpreter for [𝔼𝕊𝕄𝕚𝕟 2](https://github.com/molarmanful/ESMin), a wonderful JavaScript ES6 golfing language created by [@molarmanful](https://github.com/molarmanful)!
//This will serve as documentation for those who want to learn the language.
// 
//---
// 
//Let's get started!
//---

//put the numbers.js library in the math object
math.import(numbers,{wrap:true,silent:true});

//- improved replace function
String.prototype.ireplace=function(x,y=''){return this.replace(x,y)};
//- recursive replace
String.prototype.rreplace=function(r,o='',t){t=this.replace(r,o);return t!=this?t.rreplace(r,o):t};
//- global replace
String.prototype.greplace=function(x,y='',f=''){return this.replace(RegExp(x,'g'+f),y)};
//- string reverse
String.prototype.reverse=function(){return[...this].reverse().join``};
//- matrix split
String.prototype.msplit=function(r='\n',c=''){return this.split(r).map(x=>x.split(c))};
//- matrix join
Array.prototype.mjoin=function(r='\n',c=''){return this.map(x=>x.join(r)).join(c)};
//- transliterate (dictionary replace)
String.prototype.treplace=function(x,y,z={}){[...x].map((a,b)=>z[a]=y[b]);return this.replace(/./g,x=>z[x]===[]._?x:z[x])};
//- square
Number.prototype.square=function(){return math.pow(+this,2)};
//- cube
Number.prototype.cube=function(){return math.pow(+this,3)};
//- inclusive range
_.irange=(x,y)=>_.range(y!=[]._?x:0,(y!=[]._?y:x)+1);

//prototype-based function aliasing
[String,Array,Number,Object,RegExp,Date,s,_,XRegExp,Function,Pen,numeral,jQuery].map(v=>Object.getOwnPropertyNames(v.prototype).map((x,y)=>v.prototype[String.fromCharCode(y+248)]=v.prototype[x]));
//object-based function aliasing
[math,String,Array,Number,Object,JSON,RegExp,XRegExp,Date,_,s,window,Function,numeral,jQuery].map(v=>Object.getOwnPropertyNames(v).map((x,y)=>v[String.fromCharCode(y+248)]=v[x]));
//function alias helper: use as `alias(Array,METHOD_NAME_STRING)`
var alias=(v,w)=>Object.getOwnPropertyNames(v).map((x,y)=>v[String.fromCharCode(y+248)]==v[w]?String.fromCharCode(y+248):0).join``.replace(/0/g,'');
//char palette helper
var chpal=`InOut: ï î í ì ᴉ ô
Zeros: Ⅹ ℍ 𝕜 𝕄 𝔾 𝕋 ℙ 𝔼 ℤ 𝕐
Stack: Ξ ᵖ ᵍ ʳ ᶜ
Const: ị ʉ ℇ ɸ π τ ⊨ ⊭ ᕠ
Built: ש М Ϛ ᶊ Ѧ Ѩ П ɲ Ø ʝ ɟ ɼ Ɽ ᶂ ᶁ ß Ꝉ ᶏ ª ε ë Ɱ Յ փ ᵴ ᶐ ᶛ ʗ ℹ ɖ Ꝓ ɐ
Basic: ⊕ ¤ ₙ ᶉ … ⍪
Paren: ⸩ ⁽ ⎛ ⎝ ⎞ ⟨ ⟦ ⟬ ⁅ ⦌ “ ” ‘ ’ ⍘ ⬮ ⬯ ⬭ ⬬ ⦃ ⦄
Block: ɘ э Э ⏖ ⏜ ⏝ ⟮ ⟯ Ⅰ Ⅱ Ⅲ ᶈ Ꞓ
Funcs: ⓑ ⓧ Ⓒ ⒞ ⨭ ⨴ ⸮ ⁇ ⁉ ⩤ ⩥ ⓜ ⒨ Ⓐ ⓢ ⓕ ⒡ Ⓕ Ｆ Ⓘ ⒤ ⓡ ⒭ ⓔ ⒠ Ⓢ ⒮ ⨝ ⌊ ⌙ ⌈ ᴙ ᴚ Ｄ ² ³ ⁿ √ ∛ ¡
Arrow: ⇏ ↛ ↪ ⤤ ⇝ ⇀ →
Regex: ⩄ ﹩ ❛ ❜ ⑴ ⑵ ⑶ ⊙ ⎖ α 𝚨 𐄫 ᶌ ␤ ␉ ⑊ ⌿ ⍀
Opers: ˖ ⧺ ˗ ‡ × ÷ ٪ « ≪ » ≫ ⫸ ⋙ ˜ ⍜ ⇔
Logic: ‼ ≔ ≠ ≤ ≥ ⅋ ∧ ⋎ ∨ ⊻
Loops: ↺ ↻
Num's: ¼ ½ ¾ ⅐ ⅑ ⅒ ⅓ ⅔ ⅕ ⅖ ⅗ ⅘ ⅙ ⅚ ⅛ ⅜ ⅝ ⅞ ᶀ ᶍ`,
//all the chars
		ɕ=`ïîíìᴉôⅩℍ𝕜𝕄𝔾𝕋ℙ𝔼ℤ𝕐Ξᵖᵍʳᶜịʉℇɸπτ⊨⊭ᕠשМϚᶊѦѨПɲØʝɼⱤᶂᶁßꝈᶏªεëⱮՅփᵴᶐᶛʗℹ⊕¤ₙᶉ…⸩⁽⎛⎝⎞⦃⦄ ⟨⟦⟬⁅⦌“”‘’⍘⬮⬯⬭⬬ɘэЭ⏖⏜⏝⟮⟯ⅠⅡⅢᶈⓑⓧⒸ⒞⨭⨴⸮⁇⁉⩥ⓜ⒨Ⓐⓢⓕ⒡ⒻＦⒾ⒤ⓡ⒭ⓔ⒠Ⓢ⒮⨝⌊⌙⌈ᴙᴚＤ⇏↛↪⤤⇝⇀→⩄﹩❛❜⑴⑵⑶⊙⎖α𝚨𐄫ᶌ␤␉⑊⌿⍀˖⧺˗‡×÷٪«≪»≫⫸⋙˜⍜⇔‼≔≠≤≥⅋∧⋎∨⊻↺↻²³ⁿ√∛¼½¾⅐⅑⅒⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞ᶀᶍɟ¡⍪ɖꞒꝒ`;

//stack representation
var Ξ=[],
		//I/O FUNCTIONS
		//---
		//*not shown: `ï = input, î = ï[0], í = ï[1], ì = ï[2], ᴉ = [...ï]`*

		//-output
		ô=i=>o.value+=i!=[]._?i:Ξ.join`\n`,
		//---
		//get source code
		ℹ=(i=0,j=c.value.length)=>[c.value.slice(i,j),Ξ.push(i)][0],

		//STACK FUNCTIONS
		//---
		//- push
		ᵖ=(i=0,...r)=>{Ξ.push(i,...r)},
		//- get
		ᵍ=i=>i!=[]._?Ξ[i<0?Ξ.length+i:i]:Ξ[Ξ.length-1],
		//- remove
		ʳ=(i=Ξ.length-1)=>Ξ.splice(i,1),
		//- clear
		ᶜ=i=>Ξ=[],

		//MORE ALIASES
		//---
		// 
		//CONSTANTS
		ᶖ=Infinity,
		ʉ=[]._,
		ℇ=math.e,
		ε=Number.EPSILON,
		ɸ=(1+math.sqrt(5))/2,
		π=math.pi,
		τ=math.pi*2,
		//BUILT-IN OBJECTS
		М=math,
		Ϛ=String,
		ᶊ=s,
		Ѧ=Array,
		Ѩ=_,
		П=Number,
		Ø=Object,
		ʝ=JSON,
		ɼ=RegExp,
		Ɽ=XRegExp,
		ᶁ=Date,
		ש=window,
		ᶂ=Function,
		ɲ=numeral,
		ɟ=jQuery,
		//FUNCTIONS
		ß='toString',
		Ꝉ='length',
		ᶏ='apply',
		//- general-purpose map
		Ɱ=(i,f,s='',j='')=>typeof i=='object'?i.map(f):typeof i=='string'?i.split(s).map(f).join(j):eval((''+i).split(s).map(f).join(j)),
		ë=eval,
		ᵴ='',
		Յ='0b',
		փ='0x',
		//ALPHABETS
		ᶐ='ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		ᶛ='abcdefghijklmnopqrstuvwxyz',
		//CANVAS
		ʗ=new Pen('cv'),
		//storage for copy-paste blocks
		ᶈ=[],
		Ꝓ=parseInt,
		ɐ=-1,
		//NUMBERS
		//aliases for 0-256; get number alias using `nchars[NUMBER]`
		nchars=`ḀḁḂḃḄḅḆḇḈḉḊḋḌḍḎḏḐḑḒḓḔḕḖḗḘḙḚḛḜḝḞḟḠḡḢḣḤḥḦḧḨḩḪḫḬḭḮḯḰḱḲḳḴḵḶḷḸḹḺḻḼḽḾḿṀṁṂṃṄṅṆṇṈṉṊṋṌṍṎṏṐṑṒṓṔṕṖṗṘṙṚṛṜṝṞṟṠṡṢṣṤṥṦṧṨṩṪṫṬṭṮṯṰṱṲṳṴṵṶṷṸṹṺṻṼṽṾṿẀẁẂẃẄẅẆẇẈẉẊẋẌẍẎẏẐẑẒẓẔẕẖẗẘẙaʾẛẜẝẞẟẠạẢảẤấẦầẨẩẪẫẬậẮắẰằẲẳẴẵẶặẸẹẺẻẼẽẾếỀềỂểỄễỆệỈỉỊịỌọỎỏỐốỒồỔổỖỗỘộỚớỜờỞởỠỡỢợỤụỦủỨứỪừỬửỮữỰựỲỳỴỵỶỷỸỹỺỻỼỽỾỿ`
;jQuery.noConflict();
//dictionary stuff
var client=new XMLHttpRequest();client.open('GET','scrabbledict.txt');client.onreadystatechange=_=>ɖ=client.responseText.split`\n`;client.send();
//---
//fix parentheses functions
var fix=i=>{
	var c=[''],I=[];
	[...i].map((x,y)=>{
		I.push(x)
			!c[c.length-1].match`["'\`]`?
			I[I.length-1].match`["'\`]`?c.push(I[I.length-1]):
		I[I.length-1]=='('?c.push(`)`):
		I[I.length-1]=='['?c.push(`]`):
		I[I.length-1]=='{'?c.push(`}`):
		I[I.length-1].match`;`?(I.splice(-1,0,...c.reverse()),c=['']):
		I[I.length-1].match`[)\\]}]`&&~c.lastIndexOf(I[I.length-1])&&I.splice(-1,1,...c.splice(c.lastIndexOf(I[I.length-1])).reverse())

		:I[I.length-1].match(c[c.length-1])&&I[I.length-2]!='\\'&&I[I.length-3]!='\\'&&c.pop()
	})
	I.push(...c.reverse())
	return I.join``
},
		Fix=i=>{
	var c=[''],I=[];
	[...i].reverse().map((x,y)=>{
		I.push(x)
			!c[c.length-1].match`["'\`]`?
			I[I.length-1].match`["'\`]`?c.push(I[I.length-1]):
		I[I.length-1]==')'?c.push(`(`):
		I[I.length-1]==']'?c.push(`[`):
		I[I.length-1]=='}'?c.push(`{`):
		I[I.length-1].match`;`?(I.splice(-1,0,...c.reverse()),c=['']):
		I[I.length-1].match`[([{]`&&I.splice(-1,1,...c.splice(c.lastIndexOf(I[I.length-1])).reverse())

		:I[I.length-1].match(c[c.length-1])&&I[I.length-2]!='\\'&&I[I.length-3]!='\\'&&c.pop()
	})
	I.push(...c.reverse())
	return I.reverse().join``
}
//---
//compression functions
shoco.c=i=>Array.prototype.map.call(shoco.compress(i),x=>String.fromCharCode(x)).join``;
shoco.d=i=>shoco.decompress(new Uint8Array((i.constructor==Array?i[0]:i).split``.map(x=>x.charCodeAt(0))));
var compress=i=>LZString.compress(shoco.c(i));

//TIME TO INTERPRET!
//---
var Σ=c=>{
	var 
			//- functions
			r='ᵖᵍʳôℹɘϚѦПØѨɼⱤᶁɲɟⱮᶊëßᶏꝒ\\u00f8-\\u024f',
			//- these don't need surrounding parens
			n='A-Za-z$_ãïîíìᴉɕᶖʉℇεɸπτᶐɖᵴᶛɐ¼½¾⅐⅑⅒⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞ᶀᶍ\\u1e00-\\u1eff',
			//- real numbers regex
			d='-?\\d+(?:\\.\\d*)?(?:e[+\\-]?\\d+)?';

	//TRANSPILE 𝔼𝕊𝕄𝕚𝕟 => ES6
	//
	//fix parentheses after 1st-stage transpilation
	c=Fix(fix(c
							
							//copy block; copies code, then pastes elsewhere when called
							.rreplace(/⟮([^⟮⟯]*)⟯?/g,(x,y)=>(ᶈ.push(y),y))
							//paste copy block 1
							.replace(/Ⅰ/g,ᶈ[0])
							//paste copy block 2
							.replace(/Ⅱ/g,ᶈ[1])
							//paste copy block 3
							.replace(/Ⅲ/g,ᶈ[2])
							
							//COMPRESSION
							.replace(/ɘ(.+)#*/g,(x,y)=>shoco.d(LZString.decompress(y)))
							.replace(/э([^]+)#*/gm,(x,y)=>shoco.d(y))
							.replace(/Э(.+)#*/g,(x,y)=>LZString.decompress(y))
							
							//eval-paste block; evaluates code, then pastes result directly in place of block
							.replace(eval(`/⏖([${n}]+)/g`),'⏜$1⏝')
							.rreplace(/⏜([^⏜⏝]*)⏝?/g,(x,y)=>eval(y))
							
							//charcode block
							.replace(/Ꞓ(.)/g,(x,y)=>y.charCodeAt())
							
							//alias for 10; can be used with zeroes series
							.replace(/Ⅹ/g,'10')
							//ZEROES
							.replace(/ℍ/g,'00')
							.replace(/𝕜/g,'000')
							.replace(/𝕄/g,'000000')
							.replace(/𝔾/g,'000000000')
							.replace(/𝕋/g,'000000000000')
							.replace(/ℙ/g,'000000000000000')
							.replace(/𝔼/g,'000000000000000000')
							.replace(/ℤ/g,'000000000000000000000')
							.replace(/𝕐/g,'000000000000000000000000')
							
							//`('')+` - good for string coercion
							.replace(/⊕/g,'⬯+')
							//`.join('')`
							.replace(/⨝/g,'ü⬯')
							//`.toString(2)`
							.replace(/ⓑ/g,'ß2')
							//`.toString(16)`
							.replace(/ⓧ/g,'ß16')
							//`String.fromCharCode`
							.replace(/Ⓒ/g,'ϚĎ')
							//`.charCodeAt()`
							.replace(/⒞/g,'Ā⬮')
							//`.filter(($,_,ã)=>`
							.replace(/ⓕ/g,'Ċ⇀')
							.replace(/⒡/g,'Ċ⇀$')
							//`.map(($,_,ã)=>`
							.replace(/ⓜ/g,'ĉ⇀')
							.replace(/⒨/g,'ĉ⇀$')
							//`.reduce(($,_,ã)=>`
							.replace(/ⓡ/g,'ċ⇀')
							.replace(/⒭/g,'ċ⇀$')
							//`.every(($,_,ã)=>`
							.replace(/ⓔ/g,'Ď⇀')
							.replace(/⒠/g,'Ď⇀$')
							//`.some(($,_,ã)=>`
							.replace(/Ⓢ/g,'č⇀')
							.replace(/⒮/g,'č⇀$')
							//`.find(($,_,ã)=>`
							.replace(/Ⓕ/g,'ď⇀')
							.replace(/Ｆ/g,'ď⇀$')
							//`.findIndex(($,_,ã)=>`
							.replace(/Ⓘ/g,'Đ⇀')
							.replace(/⒤/g,'Đ⇀$')
							//`.split('')`
							.replace(/ⓢ/g,'Ĕ⬯')
							//`[...Array(n)]`
							.replace(eval(`/Ⓐ(([${n}]|\\d)+)/g`),'⟦Ѧ($1)]')
							//`.reverse()` (string)
							.replace(/ᴙ/g,'Ĩ⬮')
							//`.reverse()` (array)
							.replace(/ᴚ/g,'ý⬮')
							//`math.sum`
							.replace(/⨭/g,'Мƺ')
							//`math.prod`
							.replace(/⨴/g,'МƷ')
							//`_.range`
							.replace(/⩥/g,'ѨŃ')
							//`_.irange`
							.replace(/⩤/g,'ѨǙ')
							//`math.random`
							.replace(/⸮/g,'Мƨ')
							//`math.randomInt`
							.replace(/⁇/g,'МƩ')
							//`math.pickRandom`
							.replace(/⁉/g,'МƧ')
							//`math.floor`
							.replace(/⌊/g,'МŨ')
							//`math.round`
							.replace(/⌙/g,'Мų')
							//`math.ceil`
							.replace(/⌈/g,'МŠ')
							//`math.sqrt`
							.replace(/√/g,'Мŵ')
							//`math.cbrt`
							.replace(/∛/g,'Мş')
							//`math.pow`
							.replace(/ⁿ/g,'МŲ')
							//`.square()`
							.replace(/²/g,'Ā⬮')
							//`.cube()`
							.replace(/³/g,'ā⬮')
							//`math.factorial`
							.replace(/¡/g,'МƢ')
							//`new Date`
							.replace(/Ｄ/g,'ₙᶁ')
							//`.apply(window,`
							.replace(/ª/g,'ᶏש,')
							
							//function argument aliases
							.replace(/⬮/g,'()')
							.replace(/⬯/g,'(``)')
							.replace(/⬭/g,'(` `)')
							.replace(/⬬/g,'(`\n`)')
							.replace(/⍪/g,'`,`')
							//whitespace aliases - also useful for regex
							.replace(/␤/g,'\\n')
							.replace(/␉/g,'\\t')
							.replace(/␠/g,'\\s')
							//one-char string; can be used as function argument
							.replace(/⍘(.)/g,'(`$1`)')
							
							//PARENTHETICAL ARROW FUNCTIONS
							.replace(/⇝/g,'((a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z)=>')
							.replace(/⇀/g,'(($,_,ã)=>')
							//ARGUMENT PARSER: turns `⁽abc 5` into `(a,b,c,5)`.
							.replace(/⎝/g,`=⁽`)
							//PARENTHETICAL ARGUMENT PARSER
							.replace(/⎛/g,'(⁽')
							.replace(eval(`/⁽(([${n}]|\\d)+)/g`),(x,y)=>`(${y.split(/\s|/g)})`)
							//AUTO-ADD PARENTHESES
							.replace(eval(`/([${r}])(([${n}]|${d})+)/g`),'$1($2)')
							.replace(eval(`/([${r}])([^(\u00f8-\u0236ßꝈᶏ¤])/g`),'$1($2')
							//prevents object from turning into a function
							.replace(/¤/g,'')
							//AUTO-ADD BRACKETS
							.replace(eval(`/⎖(([${n}]|\\d)+)/g`),'[$1]')
						.replace(eval(`/([ïîíìᴉᶈɕɖ])(([${n}]|\\d)+)/g`),'$1[$2]')
							//MORE ARROW FUNCTIONS
							.replace(/⇏/g,'(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z)=>')
							.replace(/↛/g,'=(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z)=>')
							.replace(/↪/g,'($,_,ã)=>')
							.replace(/⤤/g,'=($,_,ã)=>')
							.replace(/→/g,'=>')
							//array shorthand
							.replace(eval(`/⟨(([${n}]|\\d)+)/g`),(x,y)=>`[${y.split(/\s|/g)}]`)
							//PARENTHESES
							.replace(/“/g,'(`')
							.replace(/”/g,'`)')
							.replace(/‘/g,'\\`')
							.replace(/’/g,'\\`)')
							.replace(/⸩/g,'))')
							.replace(/⎞/g,'/)')
							.replace(/⦌/g,'])')
							//template-string-ish stuff
							.replace(/⦃/g,'`+(')
							.replace(/⦄/g,')+`')
							//SPREAD OPERATORS
							.replace(/…/g,'...')
							.replace(eval(`/⟬([${n}]+)/g`),'[...$1]')
							.replace(/⟦/g,'[...')
							
							//ASSIGNMENT OPERATORS
							.replace(/˖/g,'+=')
							.replace(/⧺/g,'++')
							.replace(/˗/g,'-=')
							.replace(/‡/g,'--')
							.replace(/×/g,'*=')
							.replace(/÷/g,'/=')
							.replace(/٪/g,'%=')
							.replace(/≪/g,'<<=')
							.replace(/≫/g,'>>=')
							.replace(/⋙/g,'>>>=')
							.replace(/∧/g,'&=')
							.replace(/⊻/g,'^=')
							.replace(/∨/g,'|=')
							.replace(eval(`/([${n}])⇔/g`),'$1=$1')
							//LOGIC
							.replace(/‼/g,'!!')
							.replace(/≔/g,'==')
							.replace(/≠/g,'!=')
							.replace(/≤/g,'<=')
							.replace(/≥/g,'>=')
							.replace(/⅋/g,'&&')
							.replace(/⋎/g,'||')
							
							//more keywords
							.replace(/ᶉ/g,'return ')
							.replace(/ₙ/g,'new ')
							.replace(/ᕠ/g,'this')
							
							//EXPONENTS/ROOTS
							.replace(eval(`/(⦅.+|(([${n}]|${d})+))²/g`),'math.pow($1,2)')
							.replace(eval(`/(⦅.+|(([${n}]|${d})+))³/g`),'math.pow($1,3)')
							//FRACTIONS
							.replace(/½/g,'.5')
							.replace(/¼/g,'.25')
							.replace(/¾/g,'.75')
							.replace(/⅐/g,'(1/7)')
							.replace(/⅑/g,'(1/9)')
							.replace(/⅒/g,'.1')
							.replace(/⅓/g,'(1/3)')
							.replace(/⅔/g,'(2/3)')
							.replace(/⅕/g,'.2')
							.replace(/⅖/g,'.4')
							.replace(/⅗/g,'.6')
							.replace(/⅘/g,'.8')
							.replace(/⅙/g,'(1/6)')
							.replace(/⅚/g,'(5/6)')
							.replace(/⅛/g,'.125')
							.replace(/⅜/g,'.375')
							.replace(/⅝/g,'.625')
							.replace(/⅞/g,'.875')
							//BINARY/HEX PREFIXES
							.replace(/ᶀ/g,'0b')
							.replace(/ᶍ/g,'0x')
							
							//AUTO-FORMAT FUNCTION NAMES
							.replace(/([^.])([\u00f8-\u0236])/g,'$1["$2"]')
							.replace(/[ßꝈᶏ]/g,'[$&]')
							//REGEX
							.replace(/⩄/g,'$$&')
							.replace(/﹩/g,'$$$')
							.replace(/❛/g,'$$`')
							.replace(/❜/g,"$$'")
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
							.replace(/⑊/g,'\\')
							//some more keywords
							.replace(/⊨/g,'true')
							.replace(/⊭/g,'false')
							.replace(/␀/g,'null')
							//BITSHIFTS
							.replace(/«/g,'<<')
							.replace(/»/g,'>>')
							.replace(/⫸/g,'>>>')
							//bitwise rounding
							.replace(/˜/g,'0|')
							.replace(/⍜/g,'|0')
							//WHILE LOOP
							.replace(/↻/g,'while(')
						 ))
	//FOR LOOP (@ = end parentheses)
		.replace(/↺/g,'for(')
		.replace(/([^\\])@/g,'$1)');

	//OUTPUT
	//---
	//- implicit (stack) output
	if(!c.match(/ô/g)&&c.match(/ᵖ/g)){c+=';ô()',console.log(c),eval(c);return}
	//- implicit output
	else if(!c.match(/ô/g)){console.log(c),o.value=eval(c);return}
	//- explicit output
	else console.log(c),eval(c);
}