'use strict';

var _templateObject = _taggedTemplateLiteralLoose([''], ['']),
		_templateObject2 = _taggedTemplateLiteralLoose(['\n'], ['\\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

math['import'](numbers, { wrap: true, silent: true });
[String, Array, Number, Object, RegExp, Date, s, _, XRegExp, Function].map(function (v) {
	return Object.getOwnPropertyNames(v).map(function (x, y) {
		return v.prototype[String.fromCharCode(y + 248)] = v.prototype[x];
	});
});
[math, String, Array, Number, Object, JSON, RegExp, Date, _, s, window, Function].map(function (v) {
	return Object.getOwnPropertyNames(v).map(function (x, y) {
		return v[String.fromCharCode(y + 248)] = v[x];
	});
});
//get function alias
var alias = function alias(v, w) {
	return Object.getOwnPropertyNames(v).map(function (x, y) {
		return v[String.fromCharCode(y + 248)] == v[w] ? String.fromCharCode(y + 248) : 0;
	}).join(_templateObject).replace(/0/g, '');
};

var Ξ = [],
		//stack
		//I/O functions
		ô = function ô(i) {
			return o.value += i != []._ ? i : Ξ.join(_templateObject2);
		},
		//output
		ℹ = function ℹ(i) {
			return [i = i != []._ ? c.value[i] : c.value, Ξ.push(i)][0];
		},
		//source

		//stack functions
		ᵖ = function ᵖ() {
			var _2;

			for (var _len = arguments.length, r = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				r[_key - 1] = arguments[_key];
			}

			var i = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
			(_2 = Ξ).push.apply(_2, [i].concat(r));
		},
		ᵍ = function ᵍ(i) {
			return i != []._ ? Ξ[i < 0 ? Ξ.length + i : i] : Ξ[Ξ.length - 1];
		},
		ʳ = function ʳ() {
			var i = arguments.length <= 0 || arguments[0] === undefined ? Ξ.length - 1 : arguments[0];
			return Ξ.splice(i, 1);
		},
		ᶜ = function ᶜ(i) {
			return Ξ = [];
		},

		//aliasing
		ị = Infinity,
		ʉ = []._,
		ℇ = math.e,
		ε = Number.EPSILON,
		ᴉ = math.sqrt(-1),
		ɸ = (1 + math.sqrt(5)) / 2,
		π = math.pi,
		τ = math.pi * 2,
		М = math,
		Ϛ = String,
		Ѧ = Array,
		Ѩ = _,
		П = Number,
		Ø = Object,
		ʝ = JSON,
		ɼ = RegExp,
		Ɽ = XRegExp,
		ᶁ = Date,
		ש = window,
		ᶂ = Function,
		ß = 'toString',
		Ꝉ = 'length',
		ᶏ = 'apply',
		ᶊ = s,
		Ɱ = function Ɱ(i, f) {
			var s = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];
			var j = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];
			return typeof i == 'object' ? i.map(f) : typeof i == 'string' ? i.split(s).map(f).join(j) : eval(('' + i).split(s).map(f).join(j));
		},
		ᴙ = function ᴙ(i) {
			return [].concat(i).reverse().join(_templateObject);
		},
		ṟ = function ṟ(_x5, _x6, _x7, _x8) {
			var _again = true;

			_function: while (_again) {
				var i = _x5,
						r = _x6,
						o = _x7,
						t = _x8;
				_again = false;
				t = i.replace(r, o);
				if (t != i) {
					_x5 = t;
					_x6 = r;
					_x7 = o;
					_x8 = undefined;
					_again = true;
					continue _function;
				} else {
					return t;
				}
			}
		},
		ë = eval,
		nchars = 'ḀḁḂḃḄḅḆḇḈḉḊḋḌḍḎḏḐḑḒḓḔḕḖḗḘḙḚḛḜḝḞḟḠḡḢḣḤḥḦḧḨḩḪḫḬḭḮḯḰḱḲḳḴḵḶḷḸḹḺḻḼḽḾḿṀṁṂṃṄṅṆṇṈṉṊṋṌṍṎṏṐṑṒṓṔṕṖṗṘṙṚṛṜṝṞṟṠṡṢṣṤṥṦṧṨṩṪṫṬṭṮṯṰṱṲṳṴṵṶṷṸṹṺṻṼṽṾṿẀẁẂẃẄẅẆẇẈẉẊẋẌẍẎẏẐẑẒẓẔẕẖẗẘẙaʾẛẜẝẞẟẠạẢảẤấẦầẨẩẪẫẬậẮắẰằẲẳẴẵẶặẸẹẺẻẼẽẾếỀềỂểỄễỆệỈỉỊịỌọỎỏỐốỒồỔổỖỗỘộỚớỜờỞởỠỡỢợỤụỦủỨứỪừỬửỮữỰựỲỳỴỵỶỷỸỹỺỻỼỽỾỿ';

//compression stuff
shoco.c = function (i) {
	return Array.prototype.map.call(shoco.compress(i), function (x) {
		return String.fromCharCode(x);
	}).join(_templateObject);
};
shoco.d = function (i) {
	return shoco.decompress(new Uint8Array((i.constructor == Array ? i[0] : i).split(_templateObject).map(function (x) {
		return x.charCodeAt(0);
	})));
};
var compress = function compress(i) {
	return LZString.compress(shoco.c(i));
};

var Σ = function Σ(c) {
	var r = 'ᵖᵍʳôℹΣɘϚѦПØѨɼⱤƒᶁⱮᴙᶊëßᶏ\\u00f8-\\u0236',
			n = 'A-Za-z$_ãïîíìịʉℇεᴉɸπτ²³ⁿ√∛¼½¾⅐⅑⅒⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞ᶀᶍ\\u1e00-\\u1eff',
			d = '-?\\d+(?:\\.\\d*)?(?:e[+\\-]?\\d+)?';
	//syntax from esmin to es6
	c = babel.transform(c.replace(/ɘ(.+)#/g, function (x, y) {
		return shoco.d(LZString.decompress(y));
	}).replace(/э([^]+)#/gm, function (x, y) {
		return shoco.d(y);
	}).replace(/Э(.+)#/g, function (x, y) {
		return LZString.decompress(y);
	}).replace(/ℍ/g, '00').replace(/𝕜/g, '000').replace(/𝕄/g, '000000').replace(/𝔾/g, '000000000').replace(/𝕋/g, '000000000000').replace(/ℙ/g, '000000000000000').replace(/𝔼/g, '000000000000000000').replace(/ℤ/g, '000000000000000000000').replace(/𝕐/g, '000000000000000000000000').replace(/⊕/g, '⬯+').replace(/⬮/g, '()').replace(/⬯/g, '(``)').replace(/⬭/g, '(` `)').replace(/⬬/g, '(`\n`)').replace(/␤/g, '\n').replace(/␉/g, '\t').replace(/␠/g, '\s').replace(/⍘(.)/g, '(`$1`)').replace(/⇝/g, '((a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z)=>').replace(/⇀/g, '(($,_,ã)=>').replace(/ª/g, 'ᶏש,').replace(eval('/([' + r + '])(([' + n + ']|' + d + ')+)/g'), '$1($2)').replace(eval('/([' + r + '])([^(ø-ȶßꝈᶏ¤])/g'), '$1($2').replace(/¤/g, '').replace(eval('/⎖(([' + n + ']|\\d)+)/g'), '[$1]').replace(/([ïîíì])(\d+)/g, '$1[$2]').replace(/⇏/g, '(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z)=>').replace(/↛/g, '=(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z)=>').replace(/↪/g, '($,_,ã)=>').replace(/⤤/g, '=($,_,ã)=>').replace(/→/g, '=>').replace(/”/g, '`)').replace(/‘/g, '\\`').replace(/’/g, '\\`)').replace(/⸩/g, '))').replace(/⎞/g, '/)').replace(/⦃/g, '${').replace(/…/g, '...').replace(eval('/⟬([' + n + ']+)/g'), '[...$1]').replace(/⟦/g, '[...').replace(/˖/g, '+=').replace(/⧺/g, '++').replace(/˗/g, '-=').replace(/‡/g, '--').replace(/×/g, '*=').replace(/÷/g, '/=').replace(/٪/g, '%=').replace(/¡/g, '!!').replace(/≔/g, '==').replace(/≠/g, '!=').replace(/≤/g, '<=').replace(/≥/g, '>=').replace(/⅋/g, '&&').replace(/⋎/g, '||').replace(/↺/g, 'for(').replace(/ᶉ/g, 'return ').replace(/ₙ/g, 'new ').replace(/ᕠ/g, 'this').replace(eval('/(⦅.+|(([' + n + ']|' + d + ')+))²/g'), 'Math.pow($1,2)').replace(eval('/(⦅.+|(([' + n + ']|' + d + ')+))³/g'), 'Math.pow($1,3)').replace(eval('/(⦅.+|(([' + n + ']|' + d + ')+))ⁿ(.+⦆|(([' + n + ']|' + d + ')+))/g'), 'Math.pow($1,$4)').replace(eval('/√(.+⦆|(([' + n + ']|' + d + ')+))/g'), 'Math.sqrt($1)').replace(eval('/∛(.+⦆|(([' + n + ']|' + d + ')+))/g'), 'Math.cbrt($1)').replace(/[⦅⦆]/g, '').replace(/½/g, '.5').replace(/¼/g, '.25').replace(/¾/g, '.75').replace(/⅐/g, '(1/7)').replace(/⅑/g, '(1/9)').replace(/⅒/g, '0.1').replace(/⅓/g, '(1/3)').replace(/⅔/g, '(2/3)').replace(/⅕/g, '.2').replace(/⅖/g, '.4').replace(/⅗/g, '.6').replace(/⅘/g, '.8').replace(/⅙/g, '(1/6)').replace(/⅚/g, '(5/6)').replace(/⅛/g, '(1/8)').replace(/⅜/g, '(3/8)').replace(/⅝/g, '(5/8)').replace(/⅞/g, '(7/8)').replace(/ᶀ/g, '0b').replace(/ᶍ/g, '0x').replace(/Ⅹ/g, '10').replace(/([^.])([\u00f8-\u0236])/g, '$1["$2"]').replace(/([ßꝈᶏ])/g, '[$1]').replace(/⑴/g, '$1').replace(/⑵/g, '$2').replace(/⑶/g, '$3').replace(/⊙/g, '(.)').replace(/⁅/g, '[^').replace(/α/g, 'a-z').replace(/𝚨/g, 'A-Z').replace(/𐄫/g, '0-9').replace(/ᶌ/g, 'aeiou').replace(/⌿/g, '/g').replace(/⍀/g, '/ig').replace(/⊨/g, 'true').replace(/⊭/g, 'false').replace(/␀/g, 'null').replace(/«/g, '<<').replace(/»/g, '>>').replace(/⫸/g, '>>>').replace(/˜/g, '~~'), { loose: true }).code;
	if (!c.match(/ô/g) && c.match(/ᵖ/g)) {
		c += ';ô()', console.log(c), eval(c);return;
	} else if (Ξ.length < 1 && !c.match(/ô/g)) {
		console.log(c), o.value = eval(c);return;
	} else console.log(c), eval(c);
};