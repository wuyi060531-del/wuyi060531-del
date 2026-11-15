/*! Hero background: "Temple Night" world from ThreeUI Community (https://github.com/MengTo/threeui),
 * MIT License, Copyright (c) 2026 Meng To; bundled with Three.js r149 (MIT). Unmodified renderer,
 * bundled and minified only. Licence texts: ../THIRD_PARTY_NOTICES.md */
var Zl=0,ia=1,Jl=2;var Cl=1,Zo=2,hs=3,ri=0,gn=1,pn=2;var zn=0,Wi=1,an=2,sa=3,ra=4,$l=5,Vi=100,Kl=101,jl=102,oa=103,aa=104,Ql=200,ec=201,tc=202,nc=203,Rl=204,Pl=205,ic=206,sc=207,rc=208,oc=209,ac=210,lc=0,cc=1,hc=2,ho=3,uc=4,dc=5,fc=6,pc=7,Ll=0,mc=1,gc=2,Ln=0,xc=1,_c=2,yc=3,Jo=4,vc=5,Il=300,Yi=301,Zi=302,uo=303,fo=304,br=306,xn=1e3,fn=1001,po=1002,sn=1003,la=1004;var Er=1005;var rn=1006,bc=1007;var ps=1008;var xi=1009,Mc=1010,wc=1011,Dl=1012,Sc=1013,fi=1014,pi=1015,_i=1016,Ec=1017,Tc=1018,qi=1020,Ac=1021,Rn=1023,Cc=1024,Rc=1025,mi=1026,Ji=1027,Pc=1028,Lc=1029,Ic=1030,Dc=1031,Nc=1033,Tr=33776,Ar=33777,Cr=33778,Rr=33779,ca=35840,ha=35841,ua=35842,da=35843,Fc=36196,fa=37492,pa=37496,ma=37808,ga=37809,xa=37810,_a=37811,ya=37812,va=37813,ba=37814,Ma=37815,wa=37816,Sa=37817,Ea=37818,Ta=37819,Aa=37820,Ca=37821,Pr=36492,zc=36283,Ra=36284,Pa=36285,La=36286;var tr=2300,nr=2301,Lr=2302,Ia=2400,Da=2401,Na=2402;var Jn=3e3,xt=3001,Oc=3200,Uc=3201,Nl=0,Bc=1;var Nn="srgb",ms="srgb-linear";var Ir=7680;var Hc=519,Fa=35044;var za="300 es",mo=1035,oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Dr=Math.PI/180,Oa=180/Math.PI;function Ts(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[r&255]+Kt[r>>8&255]+Kt[r>>16&255]+Kt[r>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function on(r,e,t){return Math.max(e,Math.min(t,r))}function kc(r,e){return(r%e+e)%e}function Nr(r,e,t){return(1-t)*r+t*e}function Ua(r){return(r&r-1)===0&&r!==0}function go(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Rs(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var nt=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mn=class r{constructor(){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],m=n[5],_=n[8],p=i[0],d=i[3],v=i[6],S=i[1],y=i[4],M=i[7],I=i[2],F=i[5],V=i[8];return s[0]=a*p+o*S+c*I,s[3]=a*d+o*y+c*F,s[6]=a*v+o*M+c*V,s[1]=l*p+u*S+f*I,s[4]=l*d+u*y+f*F,s[7]=l*v+u*M+f*V,s[2]=h*p+m*S+_*I,s[5]=h*d+m*y+_*F,s[8]=h*v+m*M+_*V,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+i*s*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,h=o*c-u*s,m=l*s-a*c,_=t*f+n*h+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/_;return e[0]=f*p,e[1]=(i*l-u*n)*p,e[2]=(o*n-i*a)*p,e[3]=h*p,e[4]=(u*t-i*c)*p,e[5]=(i*s-o*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(a*t-n*s)*p,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Fr.makeScale(e,t)),this}rotate(e){return this.premultiply(Fr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Fr=new mn;function Fl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ir(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function er(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var zr={[Nn]:{[ms]:gi},[ms]:{[Nn]:er}},tn={legacyMode:!0,get workingColorSpace(){return ms},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(zr[e]&&zr[e][t]!==void 0){let n=zr[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},zl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ft={r:0,g:0,b:0},Tn={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function Or(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Ls(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}var lt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=tn.workingColorSpace){return this.r=e,this.g=t,this.b=n,tn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=tn.workingColorSpace){if(e=kc(e,1),t=on(t,0,1),n=on(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Or(a,s,e+1/3),this.g=Or(a,s,e),this.b=Or(a,s,e-1/3)}return tn.toWorkingColorSpace(this,i),this}setStyle(e,t=Nn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,tn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,tn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,tn.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,tn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Nn){let n=zl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return tn.fromWorkingColorSpace(Ls(this,Ft),e),on(Ft.r*255,0,255)<<16^on(Ft.g*255,0,255)<<8^on(Ft.b*255,0,255)<<0}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tn.workingColorSpace){tn.fromWorkingColorSpace(Ls(this,Ft),t);let n=Ft.r,i=Ft.g,s=Ft.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=tn.workingColorSpace){return tn.fromWorkingColorSpace(Ls(this,Ft),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Nn){return tn.fromWorkingColorSpace(Ls(this,Ft),e),e!==Nn?`color(${e} ${Ft.r} ${Ft.g} ${Ft.b})`:`rgb(${Ft.r*255|0},${Ft.g*255|0},${Ft.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Tn),Tn.h+=e,Tn.s+=t,Tn.l+=n,this.setHSL(Tn.h,Tn.s,Tn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(Ps);let n=Nr(Tn.h,Ps.h,t),i=Nr(Tn.s,Ps.s,t),s=Nr(Tn.l,Ps.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};lt.NAMES=zl;var Ci,sr=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ci===void 0&&(Ci=ir("canvas")),Ci.width=e.width,Ci.height=e.height;let n=Ci.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ir("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=gi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},rr=class{constructor(e=null){this.isSource=!0,this.uuid=Ts(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ur(i[a].image)):s.push(Ur(i[a]))}else s=Ur(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Ur(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?sr.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vc=0,wn=class r extends oi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=fn,i=fn,s=rn,a=ps,o=Rn,c=xi,l=r.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=Ts(),this.name="",this.source=new rr(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Il)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xn:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xn:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Il;wn.DEFAULT_ANISOTROPY=1;var Tt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],m=c[5],_=c[9],p=c[2],d=c[6],v=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(_-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(_+d)<.1&&Math.abs(l+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,M=(m+1)/2,I=(v+1)/2,F=(u+h)/4,V=(f+p)/4,b=(_+d)/4;return y>M&&y>I?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=F/n,s=V/n):M>I?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=F/i,s=b/i):I<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(I),n=V/s,i=b/s),this.set(n,i,s,t),this}let S=Math.sqrt((d-_)*(d-_)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(d-_)/S,this.y=(f-p)/S,this.z=(h-u)/S,this.w=Math.acos((l+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_n=class extends oi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);let i={width:e,height:t,depth:1};this.texture=new wn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:rn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new rr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},or=class extends wn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xo=class extends wn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3],h=s[a+0],m=s[a+1],_=s[a+2],p=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=p;return}if(f!==p||c!==h||l!==m||u!==_){let d=1-o,v=c*h+l*m+u*_+f*p,S=v>=0?1:-1,y=1-v*v;if(y>Number.EPSILON){let I=Math.sqrt(y),F=Math.atan2(I,v*S);d=Math.sin(d*F)/I,o=Math.sin(o*F)/I}let M=o*S;if(c=c*d+h*M,l=l*d+m*M,u=u*d+_*M,f=f*d+p*M,d===1-o){let I=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=I,l*=I,u*=I,f*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*f+c*m-l*h,e[t+1]=c*_+u*h+l*f-o*m,e[t+2]=l*_+u*m+o*h-c*f,e[t+3]=u*_-o*f-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),f=o(s/2),h=c(n/2),m=c(i/2),_=c(s/2);switch(a){case"XYZ":this._x=h*u*f+l*m*_,this._y=l*m*f-h*u*_,this._z=l*u*_+h*m*f,this._w=l*u*f-h*m*_;break;case"YXZ":this._x=h*u*f+l*m*_,this._y=l*m*f-h*u*_,this._z=l*u*_-h*m*f,this._w=l*u*f+h*m*_;break;case"ZXY":this._x=h*u*f-l*m*_,this._y=l*m*f+h*u*_,this._z=l*u*_+h*m*f,this._w=l*u*f-h*m*_;break;case"ZYX":this._x=h*u*f-l*m*_,this._y=l*m*f+h*u*_,this._z=l*u*_-h*m*f,this._w=l*u*f+h*m*_;break;case"YZX":this._x=h*u*f+l*m*_,this._y=l*m*f+h*u*_,this._z=l*u*_-h*m*f,this._w=l*u*f-h*m*_;break;case"XZY":this._x=h*u*f-l*m*_,this._y=l*m*f-h*u*_,this._z=l*u*_+h*m*f,this._w=l*u*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-i)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(u-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+l)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(s-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-i)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-s*c,this._y=i*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ba.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ba.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*i-o*n,u=c*n+o*t-s*i,f=c*i+s*n-a*t,h=-s*t-a*n-o*i;return this.x=l*c+h*-s+u*-o-f*-a,this.y=u*c+h*-a+f*-s-l*-o,this.z=f*c+h*-o+l*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Br.copy(this).projectOnVector(e),this.sub(Br)}reflect(e){return this.sub(Br.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Br=new N,Ba=new Sn,yi=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.length;c<l;c+=3){let u=e[c],f=e[c+1],h=e[c+2];u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.count;c<l;c++){let u=e.getX(c),f=e.getY(c),h=e.getZ(c);u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){let s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)li.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(li)}else n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox),Hr.applyMatrix4(e.matrixWorld),this.union(Hr);let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),Is.subVectors(this.max,ts),Ri.subVectors(e.a,ts),Pi.subVectors(e.b,ts),Li.subVectors(e.c,ts),ei.subVectors(Pi,Ri),ti.subVectors(Li,Pi),ci.subVectors(Ri,Li);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-ci.z,ci.y,ei.z,0,-ei.x,ti.z,0,-ti.x,ci.z,0,-ci.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-ci.y,ci.x,0];return!kr(t,Ri,Pi,Li,Is)||(t=[1,0,0,0,1,0,0,0,1],!kr(t,Ri,Pi,Li,Is))?!1:(Ds.crossVectors(ei,ti),t=[Ds.x,Ds.y,Ds.z],kr(t,Ri,Pi,Li,Is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return li.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(li).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Gn=[new N,new N,new N,new N,new N,new N,new N,new N],li=new N,Hr=new yi,Ri=new N,Pi=new N,Li=new N,ei=new N,ti=new N,ci=new N,ts=new N,Is=new N,Ds=new N,hi=new N;function kr(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){hi.fromArray(r,s);let o=i.x*Math.abs(hi.x)+i.y*Math.abs(hi.y)+i.z*Math.abs(hi.z),c=e.dot(hi),l=t.dot(hi),u=n.dot(hi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Gc=new yi,ns=new N,Vr=new N,vi=class{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Gc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);let t=ns.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ns,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add(Vr)),this.expandByPoint(ns.copy(e.center).sub(Vr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Wn=new N,Gr=new N,Ns=new N,ni=new N,Wr=new N,Fs=new N,qr=new N,gs=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.direction).multiplyScalar(t).add(this.origin),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Gr.copy(e).add(t).multiplyScalar(.5),Ns.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(Gr);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Ns),o=ni.dot(this.direction),c=-ni.dot(Ns),l=ni.lengthSq(),u=Math.abs(1-a*a),f,h,m,_;if(u>0)if(f=a*c-o,h=a*o-c,_=s*u,f>=0)if(h>=-_)if(h<=_){let p=1/u;f*=p,h*=p,m=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*c)+l;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l):h<=_?(f=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(Ns).multiplyScalar(h).add(Gr),m}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);let n=Wn.dot(this.direction),i=Wn.dot(Wn)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return o<0&&c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,i,s){Wr.subVectors(t,e),Fs.subVectors(n,e),qr.crossVectors(Wr,Fs);let a=this.direction.dot(qr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,e);let c=o*this.direction.dot(Fs.crossVectors(ni,Fs));if(c<0)return null;let l=o*this.direction.dot(Wr.cross(ni));if(l<0||c+l>a)return null;let u=-o*ni.dot(qr);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gt=class r{constructor(){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,c,l,u,f,h,m,_,p,d){let v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=s,v[5]=a,v[9]=o,v[13]=c,v[2]=l,v[6]=u,v[10]=f,v[14]=h,v[3]=m,v[7]=_,v[11]=p,v[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Ii.setFromMatrixColumn(e,0).length(),s=1/Ii.setFromMatrixColumn(e,1).length(),a=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let h=a*u,m=a*f,_=o*u,p=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=m+_*l,t[5]=h-p*l,t[9]=-o*c,t[2]=p-h*l,t[6]=_+m*l,t[10]=a*c}else if(e.order==="YXZ"){let h=c*u,m=c*f,_=l*u,p=l*f;t[0]=h+p*o,t[4]=_*o-m,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=p+h*o,t[10]=a*c}else if(e.order==="ZXY"){let h=c*u,m=c*f,_=l*u,p=l*f;t[0]=h-p*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=p-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let h=a*u,m=a*f,_=o*u,p=o*f;t[0]=c*u,t[4]=_*l-m,t[8]=h*l+p,t[1]=c*f,t[5]=p*l+h,t[9]=m*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let h=a*c,m=a*l,_=o*c,p=o*l;t[0]=c*u,t[4]=p-h*f,t[8]=_*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*f+_,t[10]=h-p*f}else if(e.order==="XZY"){let h=a*c,m=a*l,_=o*c,p=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+p,t[5]=a*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wc,e,qc)}lookAt(e,t,n){let i=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),ii.crossVectors(n,un),ii.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ii.crossVectors(n,un)),ii.normalize(),zs.crossVectors(un,ii),i[0]=ii.x,i[4]=zs.x,i[8]=un.x,i[1]=ii.y,i[5]=zs.y,i[9]=un.y,i[2]=ii.z,i[6]=zs.z,i[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],m=n[13],_=n[2],p=n[6],d=n[10],v=n[14],S=n[3],y=n[7],M=n[11],I=n[15],F=i[0],V=i[4],b=i[8],P=i[12],k=i[1],de=i[5],re=i[9],Z=i[13],W=i[2],ue=i[6],_e=i[10],Ae=i[14],ge=i[3],Te=i[7],Me=i[11],ke=i[15];return s[0]=a*F+o*k+c*W+l*ge,s[4]=a*V+o*de+c*ue+l*Te,s[8]=a*b+o*re+c*_e+l*Me,s[12]=a*P+o*Z+c*Ae+l*ke,s[1]=u*F+f*k+h*W+m*ge,s[5]=u*V+f*de+h*ue+m*Te,s[9]=u*b+f*re+h*_e+m*Me,s[13]=u*P+f*Z+h*Ae+m*ke,s[2]=_*F+p*k+d*W+v*ge,s[6]=_*V+p*de+d*ue+v*Te,s[10]=_*b+p*re+d*_e+v*Me,s[14]=_*P+p*Z+d*Ae+v*ke,s[3]=S*F+y*k+M*W+I*ge,s[7]=S*V+y*de+M*ue+I*Te,s[11]=S*b+y*re+M*_e+I*Me,s[15]=S*P+y*Z+M*Ae+I*ke,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],m=e[14],_=e[3],p=e[7],d=e[11],v=e[15];return _*(+s*c*f-i*l*f-s*o*h+n*l*h+i*o*m-n*c*m)+p*(+t*c*m-t*l*h+s*a*h-i*a*m+i*l*u-s*c*u)+d*(+t*l*f-t*o*m-s*a*f+n*a*m+s*o*u-n*l*u)+v*(-i*o*u-t*c*f+t*o*h+i*a*f-n*a*h+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],m=e[11],_=e[12],p=e[13],d=e[14],v=e[15],S=f*d*l-p*h*l+p*c*m-o*d*m-f*c*v+o*h*v,y=_*h*l-u*d*l-_*c*m+a*d*m+u*c*v-a*h*v,M=u*p*l-_*f*l+_*o*m-a*p*m-u*o*v+a*f*v,I=_*f*c-u*p*c-_*o*h+a*p*h+u*o*d-a*f*d,F=t*S+n*y+i*M+s*I;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/F;return e[0]=S*V,e[1]=(p*h*s-f*d*s-p*i*m+n*d*m+f*i*v-n*h*v)*V,e[2]=(o*d*s-p*c*s+p*i*l-n*d*l-o*i*v+n*c*v)*V,e[3]=(f*c*s-o*h*s-f*i*l+n*h*l+o*i*m-n*c*m)*V,e[4]=y*V,e[5]=(u*d*s-_*h*s+_*i*m-t*d*m-u*i*v+t*h*v)*V,e[6]=(_*c*s-a*d*s-_*i*l+t*d*l+a*i*v-t*c*v)*V,e[7]=(a*h*s-u*c*s+u*i*l-t*h*l-a*i*m+t*c*m)*V,e[8]=M*V,e[9]=(_*f*s-u*p*s-_*n*m+t*p*m+u*n*v-t*f*v)*V,e[10]=(a*p*s-_*o*s+_*n*l-t*p*l-a*n*v+t*o*v)*V,e[11]=(u*o*s-a*f*s-u*n*l+t*f*l+a*n*m-t*o*m)*V,e[12]=I*V,e[13]=(u*p*i-_*f*i+_*n*h-t*p*h-u*n*d+t*f*d)*V,e[14]=(_*o*i-a*p*i-_*n*c+t*p*c+a*n*d-t*o*d)*V,e[15]=(a*f*i-u*o*i+u*n*c-t*f*c-a*n*h+t*o*h)*V,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,h=s*l,m=s*u,_=s*f,p=a*u,d=a*f,v=o*f,S=c*l,y=c*u,M=c*f,I=n.x,F=n.y,V=n.z;return i[0]=(1-(p+v))*I,i[1]=(m+M)*I,i[2]=(_-y)*I,i[3]=0,i[4]=(m-M)*F,i[5]=(1-(h+v))*F,i[6]=(d+S)*F,i[7]=0,i[8]=(_+y)*V,i[9]=(d-S)*V,i[10]=(1-(h+p))*V,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Ii.set(i[0],i[1],i[2]).length(),a=Ii.set(i[4],i[5],i[6]).length(),o=Ii.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],An.copy(this);let l=1/s,u=1/a,f=1/o;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=f,An.elements[9]*=f,An.elements[10]*=f,t.setFromRotationMatrix(An),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){let o=this.elements,c=2*s/(t-e),l=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=c,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=l,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){let o=this.elements,c=1/(t-e),l=1/(n-i),u=1/(a-s),f=(t+e)*c,h=(n+i)*l,m=(a+s)*u;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ii=new N,An=new gt,Wc=new N(0,0,0),qc=new N(1,1,1),ii=new N,zs=new N,un=new N,Ha=new gt,ka=new Sn,bi=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],f=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(on(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-on(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(on(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ha.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ha,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ka.setFromEuler(this),this.setFromQuaternion(ka,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bi.DEFAULT_ORDER="XYZ";var ar=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xc=0,Va=new N,Di=new Sn,qn=new gt,Os=new N,is=new N,Yc=new N,Zc=new Sn,Ga=new N(1,0,0),Wa=new N(0,1,0),qa=new N(0,0,1),Jc={type:"added"},Xa={type:"removed"},Xt=class r extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new N,t=new bi,n=new Sn,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new gt},normalMatrix:{value:new mn}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(Ga,e)}rotateY(e){return this.rotateOnAxis(Wa,e)}rotateZ(e){return this.rotateOnAxis(qa,e)}translateOnAxis(e,t){return Va.copy(e).applyQuaternion(this.quaternion),this.position.add(Va.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ga,e)}translateY(e){return this.translateOnAxis(Wa,e)}translateZ(e){return this.translateOnAxis(qa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Os.copy(e):Os.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(is,Os,this.up):qn.lookAt(Os,is,this.up),this.quaternion.setFromRotationMatrix(qn),i&&(qn.extractRotation(i.matrixWorld),Di.setFromRotationMatrix(qn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Jc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xa)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(Xa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,Yc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,Zc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Xt.DEFAULT_UP=new N(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Cn=new N,Xn=new N,Xr=new N,Yn=new N,Ni=new N,Fi=new N,Ya=new N,Yr=new N,Zr=new N,Jr=new N,ds=class r{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Cn.subVectors(e,t),i.cross(Cn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Cn.subVectors(i,t),Xn.subVectors(n,t),Xr.subVectors(e,t);let a=Cn.dot(Cn),o=Cn.dot(Xn),c=Cn.dot(Xr),l=Xn.dot(Xn),u=Xn.dot(Xr),f=a*l-o*o;if(f===0)return s.set(-2,-1,-1);let h=1/f,m=(l*c-o*u)*h,_=(a*u-o*c)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yn),Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getUV(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,Yn),c.set(0,0),c.addScaledVector(s,Yn.x),c.addScaledVector(a,Yn.y),c.addScaledVector(o,Yn.z),c}static isFrontFacing(e,t,n,i){return Cn.subVectors(n,t),Xn.subVectors(e,t),Cn.cross(Xn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Cn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return r.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Ni.subVectors(i,n),Fi.subVectors(s,n),Yr.subVectors(e,n);let c=Ni.dot(Yr),l=Fi.dot(Yr);if(c<=0&&l<=0)return t.copy(n);Zr.subVectors(e,i);let u=Ni.dot(Zr),f=Fi.dot(Zr);if(u>=0&&f<=u)return t.copy(i);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Ni,a);Jr.subVectors(e,s);let m=Ni.dot(Jr),_=Fi.dot(Jr);if(_>=0&&m<=_)return t.copy(s);let p=m*l-c*_;if(p<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Fi,o);let d=u*_-m*f;if(d<=0&&f-u>=0&&m-_>=0)return Ya.subVectors(s,i),o=(f-u)/(f-u+(m-_)),t.copy(i).addScaledVector(Ya,o);let v=1/(d+p+h);return a=p*v,o=h*v,t.copy(n).addScaledVector(Ni,a).addScaledVector(Fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$c=0,$n=class extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=Ts(),this.name="",this.type="Material",this.blending=Wi,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Rl,this.blendDst=Pl,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}let i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Vt=class extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Nt=new N,Us=new nt,bt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Us.fromBufferAttribute(this,t),Us.applyMatrix3(e),this.setXY(t,Us.x,Us.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),i=hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),i=hn(i,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}};var lr=class extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var cr=class extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Mt=class extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Kc=0,Mn=new gt,$r=new Xt,zi=new N,dn=new yi,ss=new yi,kt=new N,zt=class r extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fl(e)?cr:lr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new mn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return $r.lookAt(e),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ss.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(dn.min,ss.min),dn.expandByPoint(kt),kt.addVectors(dn.max,ss.max),dn.expandByPoint(kt)):(dn.expandByPoint(ss.min),dn.expandByPoint(ss.max))}dn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)kt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)kt.fromBufferAttribute(o,l),c&&(zi.fromBufferAttribute(e,l),kt.add(zi)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let k=0;k<o;k++)l[k]=new N,u[k]=new N;let f=new N,h=new N,m=new N,_=new nt,p=new nt,d=new nt,v=new N,S=new N;function y(k,de,re){f.fromArray(i,k*3),h.fromArray(i,de*3),m.fromArray(i,re*3),_.fromArray(a,k*2),p.fromArray(a,de*2),d.fromArray(a,re*2),h.sub(f),m.sub(f),p.sub(_),d.sub(_);let Z=1/(p.x*d.y-d.x*p.y);isFinite(Z)&&(v.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(Z),S.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(Z),l[k].add(v),l[de].add(v),l[re].add(v),u[k].add(S),u[de].add(S),u[re].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let k=0,de=M.length;k<de;++k){let re=M[k],Z=re.start,W=re.count;for(let ue=Z,_e=Z+W;ue<_e;ue+=3)y(n[ue+0],n[ue+1],n[ue+2])}let I=new N,F=new N,V=new N,b=new N;function P(k){V.fromArray(s,k*3),b.copy(V);let de=l[k];I.copy(de),I.sub(V.multiplyScalar(V.dot(de))).normalize(),F.crossVectors(b,de);let Z=F.dot(u[k])<0?-1:1;c[k*4]=I.x,c[k*4+1]=I.y,c[k*4+2]=I.z,c[k*4+3]=Z}for(let k=0,de=M.length;k<de;++k){let re=M[k],Z=re.start,W=re.count;for(let ue=Z,_e=Z+W;ue<_e;ue+=3)P(n[ue+0]),P(n[ue+1]),P(n[ue+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);let i=new N,s=new N,a=new N,o=new N,c=new N,l=new N,u=new N,f=new N;if(e)for(let h=0,m=e.count;h<m;h+=3){let _=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,d),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,d),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u),m=0,_=0;for(let p=0,d=c.length;p<d;p++){o.isInterleavedBufferAttribute?m=c[p]*o.data.stride+o.offset:m=c[p]*u;for(let v=0;v<u;v++)h[_++]=l[m++]}return new bt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){let h=l[u],m=e(h,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],f=s[l];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},Za=new gt,Oi=new gs,Kr=new vi,rs=new N,os=new N,as=new N,jr=new N,Bs=new N,Hs=new nt,ks=new nt,Vs=new nt,Qr=new N,Gs=new N,De=class extends Xt{constructor(e=new zt,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Bs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=o[c],f=s[c];u!==0&&(jr.fromBufferAttribute(f,e),a?Bs.addScaledVector(jr,u):Bs.addScaledVector(jr.sub(t),u))}t.add(Bs)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(s),e.ray.intersectsSphere(Kr)===!1)||(Za.copy(s).invert(),Oi.copy(e.ray).applyMatrix4(Za),n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1))return;let a,o=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,f=n.groups,h=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,_=f.length;m<_;m++){let p=f[m],d=i[p.materialIndex],v=Math.max(p.start,h.start),S=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let y=v,M=S;y<M;y+=3){let I=o.getX(y),F=o.getX(y+1),V=o.getX(y+2);a=Ws(this,d,e,Oi,l,u,I,F,V),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{let m=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let p=m,d=_;p<d;p+=3){let v=o.getX(p),S=o.getX(p+1),y=o.getX(p+2);a=Ws(this,i,e,Oi,l,u,v,S,y),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,_=f.length;m<_;m++){let p=f[m],d=i[p.materialIndex],v=Math.max(p.start,h.start),S=Math.min(c.count,Math.min(p.start+p.count,h.start+h.count));for(let y=v,M=S;y<M;y+=3){let I=y,F=y+1,V=y+2;a=Ws(this,d,e,Oi,l,u,I,F,V),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{let m=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let p=m,d=_;p<d;p+=3){let v=p,S=p+1,y=p+2;a=Ws(this,i,e,Oi,l,u,v,S,y),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}};function jc(r,e,t,n,i,s,a,o){let c;if(e.side===gn?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===ri,o),c===null)return null;Gs.copy(o),Gs.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(Gs);return l<t.near||l>t.far?null:{distance:l,point:Gs.clone(),object:r}}function Ws(r,e,t,n,i,s,a,o,c){r.getVertexPosition(a,rs),r.getVertexPosition(o,os),r.getVertexPosition(c,as);let l=jc(r,e,t,n,rs,os,as,Qr);if(l){i&&(Hs.fromBufferAttribute(i,a),ks.fromBufferAttribute(i,o),Vs.fromBufferAttribute(i,c),l.uv=ds.getUV(Qr,rs,os,as,Hs,ks,Vs,new nt)),s&&(Hs.fromBufferAttribute(s,a),ks.fromBufferAttribute(s,o),Vs.fromBufferAttribute(s,c),l.uv2=ds.getUV(Qr,rs,os,as,Hs,ks,Vs,new nt));let u={a,b:o,c,normal:new N,materialIndex:0};ds.getNormal(rs,os,as,u.normal),l.face=u}return l}var ft=class r extends zt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],u=[],f=[],h=0,m=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(f,2));function _(p,d,v,S,y,M,I,F,V,b,P){let k=M/V,de=I/b,re=M/2,Z=I/2,W=F/2,ue=V+1,_e=b+1,Ae=0,ge=0,Te=new N;for(let Me=0;Me<_e;Me++){let ke=Me*de-Z;for(let J=0;J<ue;J++){let ae=J*k-re;Te[p]=ae*S,Te[d]=ke*y,Te[v]=W,l.push(Te.x,Te.y,Te.z),Te[p]=0,Te[d]=0,Te[v]=F>0?1:-1,u.push(Te.x,Te.y,Te.z),f.push(J/V),f.push(1-Me/b),Ae+=1}}for(let Me=0;Me<b;Me++)for(let ke=0;ke<V;ke++){let J=h+ke+ue*Me,ae=h+ke+ue*(Me+1),fe=h+(ke+1)+ue*(Me+1),be=h+(ke+1)+ue*Me;c.push(J,ae,be),c.push(ae,fe,be),ge+=6}o.addGroup(m,ge,P),m+=ge,h+=Ae}}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function $i(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function nn(r){let e={};for(let t=0;t<r.length;t++){let n=$i(r[t]);for(let i in n)e[i]=n[i]}return e}function Qc(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ol(r){return r.getRenderTarget()===null&&r.outputEncoding===xt?Nn:ms}var eh={clone:$i,merge:nn},th=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yt=class extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=th,this.fragmentShader=nh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=Qc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},hr=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qt=class extends hr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oa*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ui=-90,Bi=1,_o=class extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;let i=new qt(Ui,Bi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);let s=new qt(Ui,Bi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);let a=new qt(Ui,Bi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);let o=new qt(Ui,Bi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);let c=new qt(Ui,Bi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);let l=new qt(Ui,Bi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,a,o,c,l]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Ln,e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}},ur=class extends wn{constructor(e,t,n,i,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Yi,super(e,t,n,i,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yo=class extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ur(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ft(5,5,5),s=new Yt({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:zn});s.uniforms.tEquirect.value=t;let a=new De(i,s),o=t.minFilter;return t.minFilter===ps&&(t.minFilter=rn),new _o(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},eo=new N,ih=new N,sh=new mn,Zn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=eo.subVectors(n,t).cross(ih.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let n=e.delta(eo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sh.getNormalMatrix(e),i=this.coplanarPoint(eo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hi=new vi,qs=new N,xs=class{constructor(e=new Zn,t=new Zn,n=new Zn,i=new Zn,s=new Zn,a=new Zn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],c=n[4],l=n[5],u=n[6],f=n[7],h=n[8],m=n[9],_=n[10],p=n[11],d=n[12],v=n[13],S=n[14],y=n[15];return t[0].setComponents(o-i,f-c,p-h,y-d).normalize(),t[1].setComponents(o+i,f+c,p+h,y+d).normalize(),t[2].setComponents(o+s,f+l,p+m,y+v).normalize(),t[3].setComponents(o-s,f-l,p-m,y-v).normalize(),t[4].setComponents(o-a,f-u,p-_,y-S).normalize(),t[5].setComponents(o+a,f+u,p+_,y+S).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSprite(e){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(qs.x=i.normal.x>0?e.max.x:e.min.x,qs.y=i.normal.y>0?e.max.y:e.min.y,qs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(qs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ul(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function rh(r,e){let t=e.isWebGL2,n=new WeakMap;function i(l,u){let f=l.array,h=l.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,f,h),l.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,f){let h=u.array,m=u.updateRange;r.bindBuffer(f,l),m.count===-1?r.bufferSubData(f,0,h):(t?r.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):r.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u&&(r.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let f=n.get(l);f===void 0?n.set(l,i(l,u)):f.version<l.version&&(s(f.buffer,l,u),f.version=l.version)}return{get:a,remove:o,update:c}}var It=class r extends zt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,f=e/o,h=t/c,m=[],_=[],p=[],d=[];for(let v=0;v<u;v++){let S=v*h-a;for(let y=0;y<l;y++){let M=y*f-s;_.push(M,-S,0),p.push(0,0,1),d.push(y/o),d.push(1-v/c)}}for(let v=0;v<c;v++)for(let S=0;S<o;S++){let y=S+l*v,M=S+l*(v+1),I=S+1+l*(v+1),F=S+1+l*v;m.push(y,M,F),m.push(M,I,F)}this.setIndex(m),this.setAttribute("position",new Mt(_,3)),this.setAttribute("normal",new Mt(p,3)),this.setAttribute("uv",new Mt(d,2))}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},oh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ch=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dh="vec3 transformed = vec3( position );",fh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ph=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,mh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Eh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Th=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ah=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ch=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ph=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ih="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Oh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jh=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,$h=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,tu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,su=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ru=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ou=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,au=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,lu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,cu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,du=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,xu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_u=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,yu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,vu=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Su=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Eu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Tu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Au=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Cu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ru=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Lu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Du=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ou=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Uu=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ku=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Gu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ju=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,$u=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Ku=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ju=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Qu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ed=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,td=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,nd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,id=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ad=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ud=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,md=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_d=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Md=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ed=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Td=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ad=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ld=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Id=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nd=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,zd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Od=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ot={alphamap_fragment:oh,alphamap_pars_fragment:ah,alphatest_fragment:lh,alphatest_pars_fragment:ch,aomap_fragment:hh,aomap_pars_fragment:uh,begin_vertex:dh,beginnormal_vertex:fh,bsdfs:ph,iridescence_fragment:mh,bumpmap_pars_fragment:gh,clipping_planes_fragment:xh,clipping_planes_pars_fragment:_h,clipping_planes_pars_vertex:yh,clipping_planes_vertex:vh,color_fragment:bh,color_pars_fragment:Mh,color_pars_vertex:wh,color_vertex:Sh,common:Eh,cube_uv_reflection_fragment:Th,defaultnormal_vertex:Ah,displacementmap_pars_vertex:Ch,displacementmap_vertex:Rh,emissivemap_fragment:Ph,emissivemap_pars_fragment:Lh,encodings_fragment:Ih,encodings_pars_fragment:Dh,envmap_fragment:Nh,envmap_common_pars_fragment:Fh,envmap_pars_fragment:zh,envmap_pars_vertex:Oh,envmap_physical_pars_fragment:Jh,envmap_vertex:Uh,fog_vertex:Bh,fog_pars_vertex:Hh,fog_fragment:kh,fog_pars_fragment:Vh,gradientmap_pars_fragment:Gh,lightmap_fragment:Wh,lightmap_pars_fragment:qh,lights_lambert_fragment:Xh,lights_lambert_pars_fragment:Yh,lights_pars_begin:Zh,lights_toon_fragment:$h,lights_toon_pars_fragment:Kh,lights_phong_fragment:jh,lights_phong_pars_fragment:Qh,lights_physical_fragment:eu,lights_physical_pars_fragment:tu,lights_fragment_begin:nu,lights_fragment_maps:iu,lights_fragment_end:su,logdepthbuf_fragment:ru,logdepthbuf_pars_fragment:ou,logdepthbuf_pars_vertex:au,logdepthbuf_vertex:lu,map_fragment:cu,map_pars_fragment:hu,map_particle_fragment:uu,map_particle_pars_fragment:du,metalnessmap_fragment:fu,metalnessmap_pars_fragment:pu,morphcolor_vertex:mu,morphnormal_vertex:gu,morphtarget_pars_vertex:xu,morphtarget_vertex:_u,normal_fragment_begin:yu,normal_fragment_maps:vu,normal_pars_fragment:bu,normal_pars_vertex:Mu,normal_vertex:wu,normalmap_pars_fragment:Su,clearcoat_normal_fragment_begin:Eu,clearcoat_normal_fragment_maps:Tu,clearcoat_pars_fragment:Au,iridescence_pars_fragment:Cu,output_fragment:Ru,packing:Pu,premultiplied_alpha_fragment:Lu,project_vertex:Iu,dithering_fragment:Du,dithering_pars_fragment:Nu,roughnessmap_fragment:Fu,roughnessmap_pars_fragment:zu,shadowmap_pars_fragment:Ou,shadowmap_pars_vertex:Uu,shadowmap_vertex:Bu,shadowmask_pars_fragment:Hu,skinbase_vertex:ku,skinning_pars_vertex:Vu,skinning_vertex:Gu,skinnormal_vertex:Wu,specularmap_fragment:qu,specularmap_pars_fragment:Xu,tonemapping_fragment:Yu,tonemapping_pars_fragment:Zu,transmission_fragment:Ju,transmission_pars_fragment:$u,uv_pars_fragment:Ku,uv_pars_vertex:ju,uv_vertex:Qu,uv2_pars_fragment:ed,uv2_pars_vertex:td,uv2_vertex:nd,worldpos_vertex:id,background_vert:sd,background_frag:rd,backgroundCube_vert:od,backgroundCube_frag:ad,cube_vert:ld,cube_frag:cd,depth_vert:hd,depth_frag:ud,distanceRGBA_vert:dd,distanceRGBA_frag:fd,equirect_vert:pd,equirect_frag:md,linedashed_vert:gd,linedashed_frag:xd,meshbasic_vert:_d,meshbasic_frag:yd,meshlambert_vert:vd,meshlambert_frag:bd,meshmatcap_vert:Md,meshmatcap_frag:wd,meshnormal_vert:Sd,meshnormal_frag:Ed,meshphong_vert:Td,meshphong_frag:Ad,meshphysical_vert:Cd,meshphysical_frag:Rd,meshtoon_vert:Pd,meshtoon_frag:Ld,points_vert:Id,points_frag:Dd,shadow_vert:Nd,shadow_frag:Fd,sprite_vert:zd,sprite_frag:Od},Re={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new mn},uv2Transform:{value:new mn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new mn}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new mn}}},Fn={basic:{uniforms:nn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:nn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new lt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:nn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:nn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:nn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new lt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:nn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:nn([Re.points,Re.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:nn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:nn([Re.common,Re.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:nn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:nn([Re.sprite,Re.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new mn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:nn([Re.common,Re.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:nn([Re.lights,Re.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Fn.physical={uniforms:nn([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new nt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var Xs={r:0,b:0,g:0};function Ud(r,e,t,n,i,s,a){let o=new lt(0),c=s===!0?0:1,l,u,f=null,h=0,m=null;function _(d,v){let S=!1,y=v.isScene===!0?v.background:null;y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y));let M=r.xr,I=M.getSession&&M.getSession();I&&I.environmentBlendMode==="additive"&&(y=null),y===null?p(o,c):y&&y.isColor&&(p(y,1),S=!0),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===br)?(u===void 0&&(u=new De(new ft(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:$i(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,V,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=y.encoding!==xt,(f!==y||h!==y.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,m=r.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new De(new It(2,2),new Yt({name:"BackgroundMaterial",uniforms:$i(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=y.encoding!==xt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,f=y,h=y.version,m=r.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function p(d,v){d.getRGB(Xs,Ol(r)),n.buffers.color.setClear(Xs.r,Xs.g,Xs.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(d,v=1){o.set(d),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,p(o,c)},render:_}}function Bd(r,e,t,n){let i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=d(null),l=c,u=!1;function f(W,ue,_e,Ae,ge){let Te=!1;if(a){let Me=p(Ae,_e,ue);l!==Me&&(l=Me,m(l.object)),Te=v(W,Ae,_e,ge),Te&&S(W,Ae,_e,ge)}else{let Me=ue.wireframe===!0;(l.geometry!==Ae.id||l.program!==_e.id||l.wireframe!==Me)&&(l.geometry=Ae.id,l.program=_e.id,l.wireframe=Me,Te=!0)}ge!==null&&t.update(ge,34963),(Te||u)&&(u=!1,b(W,ue,_e,Ae),ge!==null&&r.bindBuffer(34963,t.get(ge).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(W){return n.isWebGL2?r.bindVertexArray(W):s.bindVertexArrayOES(W)}function _(W){return n.isWebGL2?r.deleteVertexArray(W):s.deleteVertexArrayOES(W)}function p(W,ue,_e){let Ae=_e.wireframe===!0,ge=o[W.id];ge===void 0&&(ge={},o[W.id]=ge);let Te=ge[ue.id];Te===void 0&&(Te={},ge[ue.id]=Te);let Me=Te[Ae];return Me===void 0&&(Me=d(h()),Te[Ae]=Me),Me}function d(W){let ue=[],_e=[],Ae=[];for(let ge=0;ge<i;ge++)ue[ge]=0,_e[ge]=0,Ae[ge]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ue,enabledAttributes:_e,attributeDivisors:Ae,object:W,attributes:{},index:null}}function v(W,ue,_e,Ae){let ge=l.attributes,Te=ue.attributes,Me=0,ke=_e.getAttributes();for(let J in ke)if(ke[J].location>=0){let fe=ge[J],be=Te[J];if(be===void 0&&(J==="instanceMatrix"&&W.instanceMatrix&&(be=W.instanceMatrix),J==="instanceColor"&&W.instanceColor&&(be=W.instanceColor)),fe===void 0||fe.attribute!==be||be&&fe.data!==be.data)return!0;Me++}return l.attributesNum!==Me||l.index!==Ae}function S(W,ue,_e,Ae){let ge={},Te=ue.attributes,Me=0,ke=_e.getAttributes();for(let J in ke)if(ke[J].location>=0){let fe=Te[J];fe===void 0&&(J==="instanceMatrix"&&W.instanceMatrix&&(fe=W.instanceMatrix),J==="instanceColor"&&W.instanceColor&&(fe=W.instanceColor));let be={};be.attribute=fe,fe&&fe.data&&(be.data=fe.data),ge[J]=be,Me++}l.attributes=ge,l.attributesNum=Me,l.index=Ae}function y(){let W=l.newAttributes;for(let ue=0,_e=W.length;ue<_e;ue++)W[ue]=0}function M(W){I(W,0)}function I(W,ue){let _e=l.newAttributes,Ae=l.enabledAttributes,ge=l.attributeDivisors;_e[W]=1,Ae[W]===0&&(r.enableVertexAttribArray(W),Ae[W]=1),ge[W]!==ue&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](W,ue),ge[W]=ue)}function F(){let W=l.newAttributes,ue=l.enabledAttributes;for(let _e=0,Ae=ue.length;_e<Ae;_e++)ue[_e]!==W[_e]&&(r.disableVertexAttribArray(_e),ue[_e]=0)}function V(W,ue,_e,Ae,ge,Te){n.isWebGL2===!0&&(_e===5124||_e===5125)?r.vertexAttribIPointer(W,ue,_e,ge,Te):r.vertexAttribPointer(W,ue,_e,Ae,ge,Te)}function b(W,ue,_e,Ae){if(n.isWebGL2===!1&&(W.isInstancedMesh||Ae.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let ge=Ae.attributes,Te=_e.getAttributes(),Me=ue.defaultAttributeValues;for(let ke in Te){let J=Te[ke];if(J.location>=0){let ae=ge[ke];if(ae===void 0&&(ke==="instanceMatrix"&&W.instanceMatrix&&(ae=W.instanceMatrix),ke==="instanceColor"&&W.instanceColor&&(ae=W.instanceColor)),ae!==void 0){let fe=ae.normalized,be=ae.itemSize,j=t.get(ae);if(j===void 0)continue;let je=j.buffer,ze=j.type,Ue=j.bytesPerElement;if(ae.isInterleavedBufferAttribute){let Ne=ae.data,pt=Ne.stride,Ve=ae.offset;if(Ne.isInstancedInterleavedBuffer){for(let Je=0;Je<J.locationSize;Je++)I(J.location+Je,Ne.meshPerAttribute);W.isInstancedMesh!==!0&&Ae._maxInstanceCount===void 0&&(Ae._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let Je=0;Je<J.locationSize;Je++)M(J.location+Je);r.bindBuffer(34962,je);for(let Je=0;Je<J.locationSize;Je++)V(J.location+Je,be/J.locationSize,ze,fe,pt*Ue,(Ve+be/J.locationSize*Je)*Ue)}else{if(ae.isInstancedBufferAttribute){for(let Ne=0;Ne<J.locationSize;Ne++)I(J.location+Ne,ae.meshPerAttribute);W.isInstancedMesh!==!0&&Ae._maxInstanceCount===void 0&&(Ae._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ne=0;Ne<J.locationSize;Ne++)M(J.location+Ne);r.bindBuffer(34962,je);for(let Ne=0;Ne<J.locationSize;Ne++)V(J.location+Ne,be/J.locationSize,ze,fe,be*Ue,be/J.locationSize*Ne*Ue)}}else if(Me!==void 0){let fe=Me[ke];if(fe!==void 0)switch(fe.length){case 2:r.vertexAttrib2fv(J.location,fe);break;case 3:r.vertexAttrib3fv(J.location,fe);break;case 4:r.vertexAttrib4fv(J.location,fe);break;default:r.vertexAttrib1fv(J.location,fe)}}}}F()}function P(){re();for(let W in o){let ue=o[W];for(let _e in ue){let Ae=ue[_e];for(let ge in Ae)_(Ae[ge].object),delete Ae[ge];delete ue[_e]}delete o[W]}}function k(W){if(o[W.id]===void 0)return;let ue=o[W.id];for(let _e in ue){let Ae=ue[_e];for(let ge in Ae)_(Ae[ge].object),delete Ae[ge];delete ue[_e]}delete o[W.id]}function de(W){for(let ue in o){let _e=o[ue];if(_e[W.id]===void 0)continue;let Ae=_e[W.id];for(let ge in Ae)_(Ae[ge].object),delete Ae[ge];delete _e[W.id]}}function re(){Z(),u=!0,l!==c&&(l=c,m(l.object))}function Z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:re,resetDefaultState:Z,dispose:P,releaseStatesOfGeometry:k,releaseStatesOfProgram:de,initAttributes:y,enableAttribute:M,disableUnusedAttributes:F}}function Hd(r,e,t,n){let i=n.isWebGL2,s;function a(l){s=l}function o(l,u){r.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,f){if(f===0)return;let h,m;if(i)h=r,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,l,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=c}function kd(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let V=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(V){if(V==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";V="mediump"}return V==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext,o=t.precision!==void 0?t.precision:"highp",c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),h=r.getParameter(35660),m=r.getParameter(3379),_=r.getParameter(34076),p=r.getParameter(34921),d=r.getParameter(36347),v=r.getParameter(36348),S=r.getParameter(36349),y=h>0,M=a||e.has("OES_texture_float"),I=y&&M,F=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:I,maxSamples:F}}function Vd(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Zn,o=new mn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let m=f.length!==0||h||n!==0||i;return i=h,n=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){let _=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,v=r.get(f);if(!i||_===null||_.length===0||s&&!d)s?u(null):l();else{let S=s?0:n,y=S*4,M=v.clippingState||null;c.value=M,M=u(_,h,y,m);for(let I=0;I!==y;++I)M[I]=t[I];v.clippingState=M,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,m,_){let p=f!==null?f.length:0,d=null;if(p!==0){if(d=c.value,_!==!0||d===null){let v=m+p*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(d===null||d.length<v)&&(d=new Float32Array(v));for(let y=0,M=m;y!==p;++y,M+=4)a.copy(f[y]).applyMatrix4(S,o),a.normal.toArray(d,M),d[M+3]=a.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function Gd(r){let e=new WeakMap;function t(a,o){return o===uo?a.mapping=Yi:o===fo&&(a.mapping=Zi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){let o=a.mapping;if(o===uo||o===fo)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new yo(c.height/2);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Ki=class extends hr{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gi=4,Ja=[.125,.215,.35,.446,.526,.582],di=20,to=new Ki,$a=new lt,no=null,ui=(1+Math.sqrt(5))/2,ki=1/ui,Ka=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,ui,ki),new N(0,ui,-ki),new N(ki,0,ui),new N(-ki,0,ui),new N(ui,ki,0),new N(-ui,ki,0)],dr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){no=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=el(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(no),e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),no=this._renderer.getRenderTarget();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:_i,format:Rn,encoding:Jn,depthBuffer:!1},i=ja(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ja(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wd(s)),this._blurMaterial=qd(s,e,t)}return i}_compileMaterial(e){let t=new De(this._lodPlanes[0],e);this._renderer.compile(t,to)}_sceneToCubeUV(e,t,n,i){let o=new qt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor($a),u.toneMapping=Ln,u.autoClear=!1;let m=new Vt({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),_=new De(new ft,m),p=!1,d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy($a),p=!0);for(let v=0;v<6;v++){let S=v%3;S===0?(o.up.set(0,c[v],0),o.lookAt(l[v],0,0)):S===1?(o.up.set(0,0,c[v]),o.lookAt(0,l[v],0)):(o.up.set(0,c[v],0),o.lookAt(0,0,l[v]));let y=this._cubeSize;Ys(i,S*y,v>2?y:0,y,y),u.setRenderTarget(i),p&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Yi||e.mapping===Zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=el()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qa());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new De(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;Ys(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,to)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Ka[(i-1)%Ka.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new De(this._lodPlanes[i],l),h=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*di-1),p=s/_,d=isFinite(s)?1+Math.floor(u*p):di;d>di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${di}`);let v=[],S=0;for(let V=0;V<di;++V){let b=V/p,P=Math.exp(-b*b/2);v.push(P),V===0?S+=P:V<d&&(S+=2*P)}for(let V=0;V<v.length;V++)v[V]=v[V]/S;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=v,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-n;let M=this._sizeLods[i],I=3*M*(i>y-Gi?i-y+Gi:0),F=4*(this._cubeSize-M);Ys(t,I,F,3*M,2*M),c.setRenderTarget(t),c.render(f,to)}};function Wd(r){let e=[],t=[],n=[],i=r,s=r-Gi+1+Ja.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>r-Gi?c=Ja[a-r+Gi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,p=3,d=2,v=1,S=new Float32Array(p*_*m),y=new Float32Array(d*_*m),M=new Float32Array(v*_*m);for(let F=0;F<m;F++){let V=F%3*2/3-1,b=F>2?0:-1,P=[V,b,0,V+2/3,b,0,V+2/3,b+1,0,V,b,0,V+2/3,b+1,0,V,b+1,0];S.set(P,p*_*F),y.set(h,d*_*F);let k=[F,F,F,F,F,F];M.set(k,v*_*F)}let I=new zt;I.setAttribute("position",new bt(S,p)),I.setAttribute("uv",new bt(y,d)),I.setAttribute("faceIndex",new bt(M,v)),e.push(I),i>Gi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ja(r,e,t){let n=new _n(r,e,t);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function qd(r,e,t){let n=new Float32Array(di),i=new N(0,1,0);return new Yt({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Qa(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function el(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function $o(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Xd(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===uo||c===fo,u=c===Yi||c===Zi;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new dr(r)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{let f=o.image;if(l&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new dr(r));let h=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function i(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Yd(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Zd(r,e,t,n){let i={},s=new WeakMap;function a(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete i[h.id];let m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function c(f){let h=f.attributes;for(let _ in h)e.update(h[_],34962);let m=f.morphAttributes;for(let _ in m){let p=m[_];for(let d=0,v=p.length;d<v;d++)e.update(p[d],34962)}}function l(f){let h=[],m=f.index,_=f.attributes.position,p=0;if(m!==null){let S=m.array;p=m.version;for(let y=0,M=S.length;y<M;y+=3){let I=S[y+0],F=S[y+1],V=S[y+2];h.push(I,F,F,V,V,I)}}else{let S=_.array;p=_.version;for(let y=0,M=S.length/3-1;y<M;y+=3){let I=y+0,F=y+1,V=y+2;h.push(I,F,F,V,V,I)}}let d=new(Fl(h)?cr:lr)(h,1);d.version=p;let v=s.get(f);v&&e.remove(v),s.set(f,d)}function u(f){let h=s.get(f);if(h){let m=f.index;m!==null&&h.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Jd(r,e,t,n){let i=n.isWebGL2,s;function a(h){s=h}let o,c;function l(h){o=h.type,c=h.bytesPerElement}function u(h,m){r.drawElements(s,m,o,h*c),t.update(m,s,1)}function f(h,m,_){if(_===0)return;let p,d;if(i)p=r,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,o,h*c,_),t.update(m,s,_)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=f}function $d(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Kd(r,e){return r[0]-e[0]}function jd(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Qd(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,a=new Tt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,f,h){let m=l.morphTargetInfluences;if(e.isWebGL2===!0){let _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=_!==void 0?_.length:0,d=s.get(u);if(d===void 0||d.count!==p){let ue=function(){Z.dispose(),s.delete(u),u.removeEventListener("dispose",ue)};d!==void 0&&d.texture.dispose();let y=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,I=u.morphAttributes.color!==void 0,F=u.morphAttributes.position||[],V=u.morphAttributes.normal||[],b=u.morphAttributes.color||[],P=0;y===!0&&(P=1),M===!0&&(P=2),I===!0&&(P=3);let k=u.attributes.position.count*P,de=1;k>e.maxTextureSize&&(de=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);let re=new Float32Array(k*de*4*p),Z=new or(re,k,de,p);Z.type=pi,Z.needsUpdate=!0;let W=P*4;for(let _e=0;_e<p;_e++){let Ae=F[_e],ge=V[_e],Te=b[_e],Me=k*de*4*_e;for(let ke=0;ke<Ae.count;ke++){let J=ke*W;y===!0&&(a.fromBufferAttribute(Ae,ke),re[Me+J+0]=a.x,re[Me+J+1]=a.y,re[Me+J+2]=a.z,re[Me+J+3]=0),M===!0&&(a.fromBufferAttribute(ge,ke),re[Me+J+4]=a.x,re[Me+J+5]=a.y,re[Me+J+6]=a.z,re[Me+J+7]=0),I===!0&&(a.fromBufferAttribute(Te,ke),re[Me+J+8]=a.x,re[Me+J+9]=a.y,re[Me+J+10]=a.z,re[Me+J+11]=Te.itemSize===4?a.w:1)}}d={count:p,texture:Z,size:new nt(k,de)},s.set(u,d),u.addEventListener("dispose",ue)}let v=0;for(let y=0;y<m.length;y++)v+=m[y];let S=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(r,"morphTargetBaseInfluence",S),h.getUniforms().setValue(r,"morphTargetInfluences",m),h.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}else{let _=m===void 0?0:m.length,p=n[u.id];if(p===void 0||p.length!==_){p=[];for(let M=0;M<_;M++)p[M]=[M,0];n[u.id]=p}for(let M=0;M<_;M++){let I=p[M];I[0]=M,I[1]=m[M]}p.sort(jd);for(let M=0;M<8;M++)M<_&&p[M][1]?(o[M][0]=p[M][0],o[M][1]=p[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(Kd);let d=u.morphAttributes.position,v=u.morphAttributes.normal,S=0;for(let M=0;M<8;M++){let I=o[M],F=I[0],V=I[1];F!==Number.MAX_SAFE_INTEGER&&V?(d&&u.getAttribute("morphTarget"+M)!==d[F]&&u.setAttribute("morphTarget"+M,d[F]),v&&u.getAttribute("morphNormal"+M)!==v[F]&&u.setAttribute("morphNormal"+M,v[F]),i[M]=V,S+=V):(d&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),v&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}let y=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function ef(r,e,t,n){let i=new WeakMap;function s(c){let l=n.render.frame,u=c.geometry,f=e.get(c,u);return i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),f}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}var Bl=new wn,Hl=new or,kl=new xo,Vl=new ur,tl=[],nl=[],il=new Float32Array(16),sl=new Float32Array(9),rl=new Float32Array(4);function Qi(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=tl[i];if(s===void 0&&(s=new Float32Array(i),tl[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ot(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Mr(r,e){let t=nl[e];t===void 0&&(t=new Int32Array(e),nl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function tf(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function nf(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2fv(this.addr,e),Ut(t,e)}}function sf(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;r.uniform3fv(this.addr,e),Ut(t,e)}}function rf(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4fv(this.addr,e),Ut(t,e)}}function of(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Ot(t,n))return;rl.set(n),r.uniformMatrix2fv(this.addr,!1,rl),Ut(t,n)}}function af(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Ot(t,n))return;sl.set(n),r.uniformMatrix3fv(this.addr,!1,sl),Ut(t,n)}}function lf(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Ot(t,n))return;il.set(n),r.uniformMatrix4fv(this.addr,!1,il),Ut(t,n)}}function cf(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function hf(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2iv(this.addr,e),Ut(t,e)}}function uf(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;r.uniform3iv(this.addr,e),Ut(t,e)}}function df(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4iv(this.addr,e),Ut(t,e)}}function ff(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function pf(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2uiv(this.addr,e),Ut(t,e)}}function mf(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;r.uniform3uiv(this.addr,e),Ut(t,e)}}function gf(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4uiv(this.addr,e),Ut(t,e)}}function xf(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Bl,i)}function _f(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||kl,i)}function yf(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Vl,i)}function vf(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Hl,i)}function bf(r){switch(r){case 5126:return tf;case 35664:return nf;case 35665:return sf;case 35666:return rf;case 35674:return of;case 35675:return af;case 35676:return lf;case 5124:case 35670:return cf;case 35667:case 35671:return hf;case 35668:case 35672:return uf;case 35669:case 35673:return df;case 5125:return ff;case 36294:return pf;case 36295:return mf;case 36296:return gf;case 35678:case 36198:case 36298:case 36306:case 35682:return xf;case 35679:case 36299:case 36307:return _f;case 35680:case 36300:case 36308:case 36293:return yf;case 36289:case 36303:case 36311:case 36292:return vf}}function Mf(r,e){r.uniform1fv(this.addr,e)}function wf(r,e){let t=Qi(e,this.size,2);r.uniform2fv(this.addr,t)}function Sf(r,e){let t=Qi(e,this.size,3);r.uniform3fv(this.addr,t)}function Ef(r,e){let t=Qi(e,this.size,4);r.uniform4fv(this.addr,t)}function Tf(r,e){let t=Qi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Af(r,e){let t=Qi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Cf(r,e){let t=Qi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Rf(r,e){r.uniform1iv(this.addr,e)}function Pf(r,e){r.uniform2iv(this.addr,e)}function Lf(r,e){r.uniform3iv(this.addr,e)}function If(r,e){r.uniform4iv(this.addr,e)}function Df(r,e){r.uniform1uiv(this.addr,e)}function Nf(r,e){r.uniform2uiv(this.addr,e)}function Ff(r,e){r.uniform3uiv(this.addr,e)}function zf(r,e){r.uniform4uiv(this.addr,e)}function Of(r,e,t){let n=this.cache,i=e.length,s=Mr(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Bl,s[a])}function Uf(r,e,t){let n=this.cache,i=e.length,s=Mr(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||kl,s[a])}function Bf(r,e,t){let n=this.cache,i=e.length,s=Mr(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Vl,s[a])}function Hf(r,e,t){let n=this.cache,i=e.length,s=Mr(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Hl,s[a])}function kf(r){switch(r){case 5126:return Mf;case 35664:return wf;case 35665:return Sf;case 35666:return Ef;case 35674:return Tf;case 35675:return Af;case 35676:return Cf;case 5124:case 35670:return Rf;case 35667:case 35671:return Pf;case 35668:case 35672:return Lf;case 35669:case 35673:return If;case 5125:return Df;case 36294:return Nf;case 36295:return Ff;case 36296:return zf;case 35678:case 36198:case 36298:case 36306:case 35682:return Of;case 35679:case 36299:case 36307:return Uf;case 35680:case 36300:case 36308:case 36293:return Bf;case 36289:case 36303:case 36311:case 36292:return Hf}}var vo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=bf(t.type)}},bo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=kf(t.type)}},Mo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},io=/(\w+)(\])?(\[|\.)?/g;function ol(r,e){r.seq.push(e),r.map[e.id]=e}function Vf(r,e,t){let n=r.name,i=n.length;for(io.lastIndex=0;;){let s=io.exec(n),a=io.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){ol(t,l===void 0?new vo(o,r,e):new bo(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new Mo(o),ol(t,f)),t=f}}}var Xi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Vf(s,a,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function al(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Gf=0;function Wf(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function qf(r){switch(r){case Jn:return["Linear","( value )"];case xt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function ll(r,e,t){let n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Wf(r.getShaderSource(e),a)}else return i}function Xf(r,e){let t=qf(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Yf(r,e){let t;switch(e){case xc:t="Linear";break;case _c:t="Reinhard";break;case yc:t="OptimizedCineon";break;case Jo:t="ACESFilmic";break;case vc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zf(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(us).join(`
`)}function Jf(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $f(r,e){let t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function us(r){return r!==""}function cl(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Kf=/^[ \t]*#include +<([\w\d./]+)>/gm;function wo(r){return r.replace(Kf,jf)}function jf(r,e){let t=ot[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return wo(t)}var Qf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ul(r){return r.replace(Qf,ep)}function ep(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function dl(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tp(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Cl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Zo?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===hs&&(e="SHADOWMAP_TYPE_VSM"),e}function np(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Yi:case Zi:e="ENVMAP_TYPE_CUBE";break;case br:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ip(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Zi&&(e="ENVMAP_MODE_REFRACTION"),e}function sp(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ll:e="ENVMAP_BLENDING_MULTIPLY";break;case mc:e="ENVMAP_BLENDING_MIX";break;case gc:e="ENVMAP_BLENDING_ADD";break}return e}function rp(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function op(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=tp(t),l=np(t),u=ip(t),f=sp(t),h=rp(t),m=t.isWebGL2?"":Zf(t),_=Jf(s),p=i.createProgram(),d,v,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[_].filter(us).join(`
`),d.length>0&&(d+=`
`),v=[m,_].filter(us).join(`
`),v.length>0&&(v+=`
`)):(d=[dl(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),v=[m,dl(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?ot.tonemapping_pars_fragment:"",t.toneMapping!==Ln?Yf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.encodings_pars_fragment,Xf("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(us).join(`
`)),a=wo(a),a=cl(a,t),a=hl(a,t),o=wo(o),o=cl(o,t),o=hl(o,t),a=ul(a),o=ul(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["#define varying in",t.glslVersion===za?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===za?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let y=S+d+a,M=S+v+o,I=al(i,35633,y),F=al(i,35632,M);if(i.attachShader(p,I),i.attachShader(p,F),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){let P=i.getProgramInfoLog(p).trim(),k=i.getShaderInfoLog(I).trim(),de=i.getShaderInfoLog(F).trim(),re=!0,Z=!0;if(i.getProgramParameter(p,35714)===!1){re=!1;let W=ll(i,I,"vertex"),ue=ll(i,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+P+`
`+W+`
`+ue)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(k===""||de==="")&&(Z=!1);Z&&(this.diagnostics={runnable:re,programLog:P,vertexShader:{log:k,prefix:d},fragmentShader:{log:de,prefix:v}})}i.deleteShader(I),i.deleteShader(F);let V;this.getUniforms=function(){return V===void 0&&(V=new Xi(i,p)),V};let b;return this.getAttributes=function(){return b===void 0&&(b=$f(i,p)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Gf++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=I,this.fragmentShader=F,this}var ap=0,So=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Eo(e),t.set(e,n)),n}},Eo=class{constructor(e){this.id=ap++,this.code=e,this.usedTimes=0}};function lp(r,e,t,n,i,s,a){let o=new ar,c=new So,l=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures,m=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b,P,k,de,re){let Z=de.fog,W=re.geometry,ue=b.isMeshStandardMaterial?de.environment:null,_e=(b.isMeshStandardMaterial?t:e).get(b.envMap||ue),Ae=_e&&_e.mapping===br?_e.image.height:null,ge=_[b.type];b.precision!==null&&(m=i.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));let Te=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Me=Te!==void 0?Te.length:0,ke=0;W.morphAttributes.position!==void 0&&(ke=1),W.morphAttributes.normal!==void 0&&(ke=2),W.morphAttributes.color!==void 0&&(ke=3);let J,ae,fe,be;if(ge){let pt=Fn[ge];J=pt.vertexShader,ae=pt.fragmentShader}else J=b.vertexShader,ae=b.fragmentShader,c.update(b),fe=c.getVertexShaderID(b),be=c.getFragmentShaderID(b);let j=r.getRenderTarget(),je=b.alphaTest>0,ze=b.clearcoat>0,Ue=b.iridescence>0;return{isWebGL2:u,shaderID:ge,shaderName:b.type,vertexShader:J,fragmentShader:ae,defines:b.defines,customVertexShaderID:fe,customFragmentShaderID:be,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,instancing:re.isInstancedMesh===!0,instancingColor:re.isInstancedMesh===!0&&re.instanceColor!==null,supportsVertexTextures:h,outputEncoding:j===null?r.outputEncoding:j.isXRRenderTarget===!0?j.texture.encoding:Jn,map:!!b.map,matcap:!!b.matcap,envMap:!!_e,envMapMode:_e&&_e.mapping,envMapCubeUVHeight:Ae,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===Bc,tangentSpaceNormalMap:b.normalMapType===Nl,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===xt,clearcoat:ze,clearcoatMap:ze&&!!b.clearcoatMap,clearcoatRoughnessMap:ze&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:ze&&!!b.clearcoatNormalMap,iridescence:Ue,iridescenceMap:Ue&&!!b.iridescenceMap,iridescenceThicknessMap:Ue&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===Wi,alphaMap:!!b.alphaMap,alphaTest:je,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!W.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!Z,useFog:b.fog===!0,fogExp2:Z&&Z.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:f,skinning:re.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:ke,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:b.toneMapped?r.toneMapping:Ln,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===pn,flipSided:b.side===gn,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){let P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(let k in b.defines)P.push(k),P.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(v(P,b),S(P,b),P.push(r.outputEncoding)),P.push(b.customProgramCacheKey),P.join()}function v(b,P){b.push(P.precision),b.push(P.outputEncoding),b.push(P.envMapMode),b.push(P.envMapCubeUVHeight),b.push(P.combine),b.push(P.vertexUvs),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.morphAttributeCount),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function S(b,P){o.disableAll(),P.isWebGL2&&o.enable(0),P.supportsVertexTextures&&o.enable(1),P.instancing&&o.enable(2),P.instancingColor&&o.enable(3),P.map&&o.enable(4),P.matcap&&o.enable(5),P.envMap&&o.enable(6),P.lightMap&&o.enable(7),P.aoMap&&o.enable(8),P.emissiveMap&&o.enable(9),P.bumpMap&&o.enable(10),P.normalMap&&o.enable(11),P.objectSpaceNormalMap&&o.enable(12),P.tangentSpaceNormalMap&&o.enable(13),P.clearcoat&&o.enable(14),P.clearcoatMap&&o.enable(15),P.clearcoatRoughnessMap&&o.enable(16),P.clearcoatNormalMap&&o.enable(17),P.iridescence&&o.enable(18),P.iridescenceMap&&o.enable(19),P.iridescenceThicknessMap&&o.enable(20),P.displacementMap&&o.enable(21),P.specularMap&&o.enable(22),P.roughnessMap&&o.enable(23),P.metalnessMap&&o.enable(24),P.gradientMap&&o.enable(25),P.alphaMap&&o.enable(26),P.alphaTest&&o.enable(27),P.vertexColors&&o.enable(28),P.vertexAlphas&&o.enable(29),P.vertexUvs&&o.enable(30),P.vertexTangents&&o.enable(31),P.uvsVertexOnly&&o.enable(32),b.push(o.mask),o.disableAll(),P.fog&&o.enable(0),P.useFog&&o.enable(1),P.flatShading&&o.enable(2),P.logarithmicDepthBuffer&&o.enable(3),P.skinning&&o.enable(4),P.morphTargets&&o.enable(5),P.morphNormals&&o.enable(6),P.morphColors&&o.enable(7),P.premultipliedAlpha&&o.enable(8),P.shadowMapEnabled&&o.enable(9),P.physicallyCorrectLights&&o.enable(10),P.doubleSided&&o.enable(11),P.flipSided&&o.enable(12),P.useDepthPacking&&o.enable(13),P.dithering&&o.enable(14),P.specularIntensityMap&&o.enable(15),P.specularColorMap&&o.enable(16),P.transmission&&o.enable(17),P.transmissionMap&&o.enable(18),P.thicknessMap&&o.enable(19),P.sheen&&o.enable(20),P.sheenColorMap&&o.enable(21),P.sheenRoughnessMap&&o.enable(22),P.decodeVideoTexture&&o.enable(23),P.opaque&&o.enable(24),b.push(o.mask)}function y(b){let P=_[b.type],k;if(P){let de=Fn[P];k=eh.clone(de.uniforms)}else k=b.uniforms;return k}function M(b,P){let k;for(let de=0,re=l.length;de<re;de++){let Z=l[de];if(Z.cacheKey===P){k=Z,++k.usedTimes;break}}return k===void 0&&(k=new op(r,P,b,s),l.push(k)),k}function I(b){if(--b.usedTimes===0){let P=l.indexOf(b);l[P]=l[l.length-1],l.pop(),b.destroy()}}function F(b){c.remove(b)}function V(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:y,acquireProgram:M,releaseProgram:I,releaseShaderCache:F,programs:l,dispose:V}}function cp(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function hp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function fl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function pl(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f,h,m,_,p,d){let v=r[e];return v===void 0?(v={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:p,group:d},r[e]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=m,v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=p,v.group=d),e++,v}function o(f,h,m,_,p,d){let v=a(f,h,m,_,p,d);m.transmission>0?n.push(v):m.transparent===!0?i.push(v):t.push(v)}function c(f,h,m,_,p,d){let v=a(f,h,m,_,p,d);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):t.unshift(v)}function l(f,h){t.length>1&&t.sort(f||hp),n.length>1&&n.sort(h||fl),i.length>1&&i.sort(h||fl)}function u(){for(let f=e,h=r.length;f<h;f++){let m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:u,sort:l}}function up(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new pl,r.set(n,[a])):i>=s.length?(a=new pl,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function dp(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new lt};break;case"SpotLight":t={position:new N,direction:new N,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function fp(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var pp=0;function mp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function gp(r,e){let t=new dp,n=fp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new N);let s=new N,a=new gt,o=new gt;function c(u,f){let h=0,m=0,_=0;for(let de=0;de<9;de++)i.probe[de].set(0,0,0);let p=0,d=0,v=0,S=0,y=0,M=0,I=0,F=0,V=0,b=0;u.sort(mp);let P=f!==!0?Math.PI:1;for(let de=0,re=u.length;de<re;de++){let Z=u[de],W=Z.color,ue=Z.intensity,_e=Z.distance,Ae=Z.shadow&&Z.shadow.map?Z.shadow.map.texture:null;if(Z.isAmbientLight)h+=W.r*ue*P,m+=W.g*ue*P,_+=W.b*ue*P;else if(Z.isLightProbe)for(let ge=0;ge<9;ge++)i.probe[ge].addScaledVector(Z.sh.coefficients[ge],ue);else if(Z.isDirectionalLight){let ge=t.get(Z);if(ge.color.copy(Z.color).multiplyScalar(Z.intensity*P),Z.castShadow){let Te=Z.shadow,Me=n.get(Z);Me.shadowBias=Te.bias,Me.shadowNormalBias=Te.normalBias,Me.shadowRadius=Te.radius,Me.shadowMapSize=Te.mapSize,i.directionalShadow[p]=Me,i.directionalShadowMap[p]=Ae,i.directionalShadowMatrix[p]=Z.shadow.matrix,M++}i.directional[p]=ge,p++}else if(Z.isSpotLight){let ge=t.get(Z);ge.position.setFromMatrixPosition(Z.matrixWorld),ge.color.copy(W).multiplyScalar(ue*P),ge.distance=_e,ge.coneCos=Math.cos(Z.angle),ge.penumbraCos=Math.cos(Z.angle*(1-Z.penumbra)),ge.decay=Z.decay,i.spot[v]=ge;let Te=Z.shadow;if(Z.map&&(i.spotLightMap[V]=Z.map,V++,Te.updateMatrices(Z),Z.castShadow&&b++),i.spotLightMatrix[v]=Te.matrix,Z.castShadow){let Me=n.get(Z);Me.shadowBias=Te.bias,Me.shadowNormalBias=Te.normalBias,Me.shadowRadius=Te.radius,Me.shadowMapSize=Te.mapSize,i.spotShadow[v]=Me,i.spotShadowMap[v]=Ae,F++}v++}else if(Z.isRectAreaLight){let ge=t.get(Z);ge.color.copy(W).multiplyScalar(ue),ge.halfWidth.set(Z.width*.5,0,0),ge.halfHeight.set(0,Z.height*.5,0),i.rectArea[S]=ge,S++}else if(Z.isPointLight){let ge=t.get(Z);if(ge.color.copy(Z.color).multiplyScalar(Z.intensity*P),ge.distance=Z.distance,ge.decay=Z.decay,Z.castShadow){let Te=Z.shadow,Me=n.get(Z);Me.shadowBias=Te.bias,Me.shadowNormalBias=Te.normalBias,Me.shadowRadius=Te.radius,Me.shadowMapSize=Te.mapSize,Me.shadowCameraNear=Te.camera.near,Me.shadowCameraFar=Te.camera.far,i.pointShadow[d]=Me,i.pointShadowMap[d]=Ae,i.pointShadowMatrix[d]=Z.shadow.matrix,I++}i.point[d]=ge,d++}else if(Z.isHemisphereLight){let ge=t.get(Z);ge.skyColor.copy(Z.color).multiplyScalar(ue*P),ge.groundColor.copy(Z.groundColor).multiplyScalar(ue*P),i.hemi[y]=ge,y++}}S>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=_;let k=i.hash;(k.directionalLength!==p||k.pointLength!==d||k.spotLength!==v||k.rectAreaLength!==S||k.hemiLength!==y||k.numDirectionalShadows!==M||k.numPointShadows!==I||k.numSpotShadows!==F||k.numSpotMaps!==V)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=S,i.point.length=d,i.hemi.length=y,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=F,i.spotShadowMap.length=F,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=F+V-b,i.spotLightMap.length=V,i.numSpotLightShadowsWithMaps=b,k.directionalLength=p,k.pointLength=d,k.spotLength=v,k.rectAreaLength=S,k.hemiLength=y,k.numDirectionalShadows=M,k.numPointShadows=I,k.numSpotShadows=F,k.numSpotMaps=V,i.version=pp++)}function l(u,f){let h=0,m=0,_=0,p=0,d=0,v=f.matrixWorldInverse;for(let S=0,y=u.length;S<y;S++){let M=u[S];if(M.isDirectionalLight){let I=i.directional[h];I.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(v),h++}else if(M.isSpotLight){let I=i.spot[_];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(v),I.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(v),_++}else if(M.isRectAreaLight){let I=i.rectArea[p];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(v),o.identity(),a.copy(M.matrixWorld),a.premultiply(v),o.extractRotation(a),I.halfWidth.set(M.width*.5,0,0),I.halfHeight.set(0,M.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){let I=i.point[m];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(v),m++}else if(M.isHemisphereLight){let I=i.hemi[d];I.direction.setFromMatrixPosition(M.matrixWorld),I.direction.transformDirection(v),d++}}}return{setup:c,setupView:l,state:i}}function ml(r,e){let t=new gp(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function xp(r,e){let t=new WeakMap;function n(s,a=0){let o=t.get(s),c;return o===void 0?(c=new ml(r,e),t.set(s,[c])):a>=o.length?(c=new ml(r,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var To=class extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ao=class extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},_p=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vp(r,e,t){let n=new xs,i=new nt,s=new nt,a=new Tt,o=new To({depthPacking:Uc}),c=new Ao,l={},u=t.maxTextureSize,f={[ri]:gn,[gn]:ri,[pn]:pn},h=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:_p,fragmentShader:yp}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let _=new zt;_.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new De(_,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cl,this.render=function(M,I,F){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||M.length===0)return;let V=r.getRenderTarget(),b=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),k=r.state;k.setBlending(zn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);for(let de=0,re=M.length;de<re;de++){let Z=M[de],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let ue=W.getFrameExtents();if(i.multiply(ue),s.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ue.x),i.x=s.x*ue.x,W.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ue.y),i.y=s.y*ue.y,W.mapSize.y=s.y)),W.map===null){let Ae=this.type!==hs?{minFilter:sn,magFilter:sn}:{};W.map=new _n(i.x,i.y,Ae),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();let _e=W.getViewportCount();for(let Ae=0;Ae<_e;Ae++){let ge=W.getViewport(Ae);a.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),k.viewport(a),W.updateMatrices(Z,Ae),n=W.getFrustum(),y(I,F,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===hs&&v(W,F),W.needsUpdate=!1}d.needsUpdate=!1,r.setRenderTarget(V,b,P)};function v(M,I){let F=e.update(p);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new _n(i.x,i.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(I,null,F,h,p,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(I,null,F,m,p,null)}function S(M,I,F,V,b,P){let k=null,de=F.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(de!==void 0)k=de;else if(k=F.isPointLight===!0?c:o,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let re=k.uuid,Z=I.uuid,W=l[re];W===void 0&&(W={},l[re]=W);let ue=W[Z];ue===void 0&&(ue=k.clone(),W[Z]=ue),k=ue}return k.visible=I.visible,k.wireframe=I.wireframe,P===hs?k.side=I.shadowSide!==null?I.shadowSide:I.side:k.side=I.shadowSide!==null?I.shadowSide:f[I.side],k.alphaMap=I.alphaMap,k.alphaTest=I.alphaTest,k.map=I.map,k.clipShadows=I.clipShadows,k.clippingPlanes=I.clippingPlanes,k.clipIntersection=I.clipIntersection,k.displacementMap=I.displacementMap,k.displacementScale=I.displacementScale,k.displacementBias=I.displacementBias,k.wireframeLinewidth=I.wireframeLinewidth,k.linewidth=I.linewidth,F.isPointLight===!0&&k.isMeshDistanceMaterial===!0&&(k.referencePosition.setFromMatrixPosition(F.matrixWorld),k.nearDistance=V,k.farDistance=b),k}function y(M,I,F,V,b){if(M.visible===!1)return;if(M.layers.test(I.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===hs)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld);let de=e.update(M),re=M.material;if(Array.isArray(re)){let Z=de.groups;for(let W=0,ue=Z.length;W<ue;W++){let _e=Z[W],Ae=re[_e.materialIndex];if(Ae&&Ae.visible){let ge=S(M,Ae,V,F.near,F.far,b);r.renderBufferDirect(F,null,de,ge,M,_e)}}}else if(re.visible){let Z=S(M,re,V,F.near,F.far,b);r.renderBufferDirect(F,null,de,Z,M,null)}}let k=M.children;for(let de=0,re=k.length;de<re;de++)y(k[de],I,F,V,b)}}function bp(r,e,t){let n=t.isWebGL2;function i(){let B=!1,te=new Tt,we=null,Fe=new Tt(0,0,0,0);return{setMask:function(Ge){we!==Ge&&!B&&(r.colorMask(Ge,Ge,Ge,Ge),we=Ge)},setLocked:function(Ge){B=Ge},setClear:function(Ge,ht,Dt,yt,On){On===!0&&(Ge*=yt,ht*=yt,Dt*=yt),te.set(Ge,ht,Dt,yt),Fe.equals(te)===!1&&(r.clearColor(Ge,ht,Dt,yt),Fe.copy(te))},reset:function(){B=!1,we=null,Fe.set(-1,0,0,0)}}}function s(){let B=!1,te=null,we=null,Fe=null;return{setTest:function(Ge){Ge?je(2929):ze(2929)},setMask:function(Ge){te!==Ge&&!B&&(r.depthMask(Ge),te=Ge)},setFunc:function(Ge){if(we!==Ge){switch(Ge){case lc:r.depthFunc(512);break;case cc:r.depthFunc(519);break;case hc:r.depthFunc(513);break;case ho:r.depthFunc(515);break;case uc:r.depthFunc(514);break;case dc:r.depthFunc(518);break;case fc:r.depthFunc(516);break;case pc:r.depthFunc(517);break;default:r.depthFunc(515)}we=Ge}},setLocked:function(Ge){B=Ge},setClear:function(Ge){Fe!==Ge&&(r.clearDepth(Ge),Fe=Ge)},reset:function(){B=!1,te=null,we=null,Fe=null}}}function a(){let B=!1,te=null,we=null,Fe=null,Ge=null,ht=null,Dt=null,yt=null,On=null;return{setTest:function(vt){B||(vt?je(2960):ze(2960))},setMask:function(vt){te!==vt&&!B&&(r.stencilMask(vt),te=vt)},setFunc:function(vt,vn,en){(we!==vt||Fe!==vn||Ge!==en)&&(r.stencilFunc(vt,vn,en),we=vt,Fe=vn,Ge=en)},setOp:function(vt,vn,en){(ht!==vt||Dt!==vn||yt!==en)&&(r.stencilOp(vt,vn,en),ht=vt,Dt=vn,yt=en)},setLocked:function(vt){B=vt},setClear:function(vt){On!==vt&&(r.clearStencil(vt),On=vt)},reset:function(){B=!1,te=null,we=null,Fe=null,Ge=null,ht=null,Dt=null,yt=null,On=null}}}let o=new i,c=new s,l=new a,u=new WeakMap,f=new WeakMap,h={},m={},_=new WeakMap,p=[],d=null,v=!1,S=null,y=null,M=null,I=null,F=null,V=null,b=null,P=!1,k=null,de=null,re=null,Z=null,W=null,ue=r.getParameter(35661),_e=!1,Ae=0,ge=r.getParameter(7938);ge.indexOf("WebGL")!==-1?(Ae=parseFloat(/^WebGL (\d)/.exec(ge)[1]),_e=Ae>=1):ge.indexOf("OpenGL ES")!==-1&&(Ae=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),_e=Ae>=2);let Te=null,Me={},ke=r.getParameter(3088),J=r.getParameter(2978),ae=new Tt().fromArray(ke),fe=new Tt().fromArray(J);function be(B,te,we){let Fe=new Uint8Array(4),Ge=r.createTexture();r.bindTexture(B,Ge),r.texParameteri(B,10241,9728),r.texParameteri(B,10240,9728);for(let ht=0;ht<we;ht++)r.texImage2D(te+ht,0,6408,1,1,0,6408,5121,Fe);return Ge}let j={};j[3553]=be(3553,3553,1),j[34067]=be(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),je(2929),c.setFunc(ho),At(!1),jt(ia),je(2884),et(zn);function je(B){h[B]!==!0&&(r.enable(B),h[B]=!0)}function ze(B){h[B]!==!1&&(r.disable(B),h[B]=!1)}function Ue(B,te){return m[B]!==te?(r.bindFramebuffer(B,te),m[B]=te,n&&(B===36009&&(m[36160]=te),B===36160&&(m[36009]=te)),!0):!1}function Ne(B,te){let we=p,Fe=!1;if(B)if(we=_.get(te),we===void 0&&(we=[],_.set(te,we)),B.isWebGLMultipleRenderTargets){let Ge=B.texture;if(we.length!==Ge.length||we[0]!==36064){for(let ht=0,Dt=Ge.length;ht<Dt;ht++)we[ht]=36064+ht;we.length=Ge.length,Fe=!0}}else we[0]!==36064&&(we[0]=36064,Fe=!0);else we[0]!==1029&&(we[0]=1029,Fe=!0);Fe&&(t.isWebGL2?r.drawBuffers(we):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(we))}function pt(B){return d!==B?(r.useProgram(B),d=B,!0):!1}let Ve={[Vi]:32774,[Kl]:32778,[jl]:32779};if(n)Ve[oa]=32775,Ve[aa]=32776;else{let B=e.get("EXT_blend_minmax");B!==null&&(Ve[oa]=B.MIN_EXT,Ve[aa]=B.MAX_EXT)}let Je={[Ql]:0,[ec]:1,[tc]:768,[Rl]:770,[ac]:776,[rc]:774,[ic]:772,[nc]:769,[Pl]:771,[oc]:775,[sc]:773};function et(B,te,we,Fe,Ge,ht,Dt,yt){if(B===zn){v===!0&&(ze(3042),v=!1);return}if(v===!1&&(je(3042),v=!0),B!==$l){if(B!==S||yt!==P){if((y!==Vi||F!==Vi)&&(r.blendEquation(32774),y=Vi,F=Vi),yt)switch(B){case Wi:r.blendFuncSeparate(1,771,1,771);break;case an:r.blendFunc(1,1);break;case sa:r.blendFuncSeparate(0,769,0,1);break;case ra:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Wi:r.blendFuncSeparate(770,771,1,771);break;case an:r.blendFunc(770,1);break;case sa:r.blendFuncSeparate(0,769,0,1);break;case ra:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}M=null,I=null,V=null,b=null,S=B,P=yt}return}Ge=Ge||te,ht=ht||we,Dt=Dt||Fe,(te!==y||Ge!==F)&&(r.blendEquationSeparate(Ve[te],Ve[Ge]),y=te,F=Ge),(we!==M||Fe!==I||ht!==V||Dt!==b)&&(r.blendFuncSeparate(Je[we],Je[Fe],Je[ht],Je[Dt]),M=we,I=Fe,V=ht,b=Dt),S=B,P=!1}function Bt(B,te){B.side===pn?ze(2884):je(2884);let we=B.side===gn;te&&(we=!we),At(we),B.blending===Wi&&B.transparent===!1?et(zn):et(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),o.setMask(B.colorWrite);let Fe=B.stencilWrite;l.setTest(Fe),Fe&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),dt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?je(32926):ze(32926)}function At(B){k!==B&&(B?r.frontFace(2304):r.frontFace(2305),k=B)}function jt(B){B!==Zl?(je(2884),B!==de&&(B===ia?r.cullFace(1029):B===Jl?r.cullFace(1028):r.cullFace(1032))):ze(2884),de=B}function _t(B){B!==re&&(_e&&r.lineWidth(B),re=B)}function dt(B,te,we){B?(je(32823),(Z!==te||W!==we)&&(r.polygonOffset(te,we),Z=te,W=we)):ze(32823)}function yn(B){B?je(3089):ze(3089)}function Qt(B){B===void 0&&(B=33984+ue-1),Te!==B&&(r.activeTexture(B),Te=B)}function L(B,te,we){we===void 0&&(Te===null?we=33984+ue-1:we=Te);let Fe=Me[we];Fe===void 0&&(Fe={type:void 0,texture:void 0},Me[we]=Fe),(Fe.type!==B||Fe.texture!==te)&&(Te!==we&&(r.activeTexture(we),Te=we),r.bindTexture(B,te||j[B]),Fe.type=B,Fe.texture=te)}function w(){let B=Me[Te];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{r.compressedTexImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(){try{r.texSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{r.texSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ke(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{r.texStorage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(){try{r.texStorage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ye(){try{r.texImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function He(){try{r.texImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Be(B){ae.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),ae.copy(B))}function We(B){fe.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),fe.copy(B))}function ct(B,te){let we=f.get(te);we===void 0&&(we=new WeakMap,f.set(te,we));let Fe=we.get(B);Fe===void 0&&(Fe=r.getUniformBlockIndex(te,B.name),we.set(B,Fe))}function wt(B,te){let Fe=f.get(te).get(B);u.get(te)!==Fe&&(r.uniformBlockBinding(te,Fe,B.__bindingPointIndex),u.set(te,Fe))}function Ct(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},Te=null,Me={},m={},_=new WeakMap,p=[],d=null,v=!1,S=null,y=null,M=null,I=null,F=null,V=null,b=null,P=!1,k=null,de=null,re=null,Z=null,W=null,ae.set(0,0,r.canvas.width,r.canvas.height),fe.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:je,disable:ze,bindFramebuffer:Ue,drawBuffers:Ne,useProgram:pt,setBlending:et,setMaterial:Bt,setFlipSided:At,setCullFace:jt,setLineWidth:_t,setPolygonOffset:dt,setScissorTest:yn,activeTexture:Qt,bindTexture:L,unbindTexture:w,compressedTexImage2D:z,compressedTexImage3D:Ee,texImage2D:Ye,texImage3D:He,updateUBOMapping:ct,uniformBlockBinding:wt,texStorage2D:pe,texStorage3D:Pe,texSubImage2D:Se,texSubImage3D:Le,compressedTexSubImage2D:Ke,compressedTexSubImage3D:Ie,scissor:Be,viewport:We,reset:Ct}}function Mp(r,e,t,n,i,s,a){let o=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap,p,d=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(L,w){return v?new OffscreenCanvas(L,w):ir("canvas")}function y(L,w,z,Ee){let Se=1;if((L.width>Ee||L.height>Ee)&&(Se=Ee/Math.max(L.width,L.height)),Se<1||w===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){let Le=w?go:Math.floor,Ke=Le(Se*L.width),Ie=Le(Se*L.height);p===void 0&&(p=S(Ke,Ie));let pe=z?S(Ke,Ie):p;return pe.width=Ke,pe.height=Ie,pe.getContext("2d").drawImage(L,0,0,Ke,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Ke+"x"+Ie+")."),pe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function M(L){return Ua(L.width)&&Ua(L.height)}function I(L){return o?!1:L.wrapS!==fn||L.wrapT!==fn||L.minFilter!==sn&&L.minFilter!==rn}function F(L,w){return L.generateMipmaps&&w&&L.minFilter!==sn&&L.minFilter!==rn}function V(L){r.generateMipmap(L)}function b(L,w,z,Ee,Se=!1){if(o===!1)return w;if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Le=w;return w===6403&&(z===5126&&(Le=33326),z===5131&&(Le=33325),z===5121&&(Le=33321)),w===33319&&(z===5126&&(Le=33328),z===5131&&(Le=33327),z===5121&&(Le=33323)),w===6408&&(z===5126&&(Le=34836),z===5131&&(Le=34842),z===5121&&(Le=Ee===xt&&Se===!1?35907:32856),z===32819&&(Le=32854),z===32820&&(Le=32855)),(Le===33325||Le===33326||Le===33327||Le===33328||Le===34842||Le===34836)&&e.get("EXT_color_buffer_float"),Le}function P(L,w,z){return F(L,z)===!0||L.isFramebufferTexture&&L.minFilter!==sn&&L.minFilter!==rn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function k(L){return L===sn||L===la||L===Er?9728:9729}function de(L){let w=L.target;w.removeEventListener("dispose",de),Z(w),w.isVideoTexture&&_.delete(w)}function re(L){let w=L.target;w.removeEventListener("dispose",re),ue(w)}function Z(L){let w=n.get(L);if(w.__webglInit===void 0)return;let z=L.source,Ee=d.get(z);if(Ee){let Se=Ee[w.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&W(L),Object.keys(Ee).length===0&&d.delete(z)}n.remove(L)}function W(L){let w=n.get(L);r.deleteTexture(w.__webglTexture);let z=L.source,Ee=d.get(z);delete Ee[w.__cacheKey],a.memory.textures--}function ue(L){let w=L.texture,z=n.get(L),Ee=n.get(w);if(Ee.__webglTexture!==void 0&&(r.deleteTexture(Ee.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++)r.deleteFramebuffer(z.__webglFramebuffer[Se]),z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer[Se]);else{if(r.deleteFramebuffer(z.__webglFramebuffer),z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&r.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let Se=0;Se<z.__webglColorRenderbuffer.length;Se++)z.__webglColorRenderbuffer[Se]&&r.deleteRenderbuffer(z.__webglColorRenderbuffer[Se]);z.__webglDepthRenderbuffer&&r.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let Se=0,Le=w.length;Se<Le;Se++){let Ke=n.get(w[Se]);Ke.__webglTexture&&(r.deleteTexture(Ke.__webglTexture),a.memory.textures--),n.remove(w[Se])}n.remove(w),n.remove(L)}let _e=0;function Ae(){_e=0}function ge(){let L=_e;return L>=c&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+c),_e+=1,L}function Te(L){let w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.encoding),w.join()}function Me(L,w){let z=n.get(L);if(L.isVideoTexture&&yn(L),L.isRenderTargetTexture===!1&&L.version>0&&z.__version!==L.version){let Ee=L.image;if(Ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(z,L,w);return}}t.bindTexture(3553,z.__webglTexture,33984+w)}function ke(L,w){let z=n.get(L);if(L.version>0&&z.__version!==L.version){ze(z,L,w);return}t.bindTexture(35866,z.__webglTexture,33984+w)}function J(L,w){let z=n.get(L);if(L.version>0&&z.__version!==L.version){ze(z,L,w);return}t.bindTexture(32879,z.__webglTexture,33984+w)}function ae(L,w){let z=n.get(L);if(L.version>0&&z.__version!==L.version){Ue(z,L,w);return}t.bindTexture(34067,z.__webglTexture,33984+w)}let fe={[xn]:10497,[fn]:33071,[po]:33648},be={[sn]:9728,[la]:9984,[Er]:9986,[rn]:9729,[bc]:9985,[ps]:9987};function j(L,w,z){if(z?(r.texParameteri(L,10242,fe[w.wrapS]),r.texParameteri(L,10243,fe[w.wrapT]),(L===32879||L===35866)&&r.texParameteri(L,32882,fe[w.wrapR]),r.texParameteri(L,10240,be[w.magFilter]),r.texParameteri(L,10241,be[w.minFilter])):(r.texParameteri(L,10242,33071),r.texParameteri(L,10243,33071),(L===32879||L===35866)&&r.texParameteri(L,32882,33071),(w.wrapS!==fn||w.wrapT!==fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(L,10240,k(w.magFilter)),r.texParameteri(L,10241,k(w.minFilter)),w.minFilter!==sn&&w.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let Ee=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===sn||w.minFilter!==Er&&w.minFilter!==ps||w.type===pi&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===_i&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(r.texParameterf(L,Ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function je(L,w){let z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",de));let Ee=w.source,Se=d.get(Ee);Se===void 0&&(Se={},d.set(Ee,Se));let Le=Te(w);if(Le!==L.__cacheKey){Se[Le]===void 0&&(Se[Le]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Se[Le].usedTimes++;let Ke=Se[L.__cacheKey];Ke!==void 0&&(Se[L.__cacheKey].usedTimes--,Ke.usedTimes===0&&W(w)),L.__cacheKey=Le,L.__webglTexture=Se[Le].texture}return z}function ze(L,w,z){let Ee=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Ee=35866),w.isData3DTexture&&(Ee=32879);let Se=je(L,w),Le=w.source;t.bindTexture(Ee,L.__webglTexture,33984+z);let Ke=n.get(Le);if(Le.version!==Ke.__version||Se===!0){t.activeTexture(33984+z),r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);let Ie=I(w)&&M(w.image)===!1,pe=y(w.image,Ie,!1,u);pe=Qt(w,pe);let Pe=M(pe)||o,Ye=s.convert(w.format,w.encoding),He=s.convert(w.type),Be=b(w.internalFormat,Ye,He,w.encoding,w.isVideoTexture);j(Ee,w,Pe);let We,ct=w.mipmaps,wt=o&&w.isVideoTexture!==!0,Ct=Ke.__version===void 0||Se===!0,B=P(w,pe,Pe);if(w.isDepthTexture)Be=6402,o?w.type===pi?Be=36012:w.type===fi?Be=33190:w.type===qi?Be=35056:Be=33189:w.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===mi&&Be===6402&&w.type!==Dl&&w.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=fi,He=s.convert(w.type)),w.format===Ji&&Be===6402&&(Be=34041,w.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=qi,He=s.convert(w.type))),Ct&&(wt?t.texStorage2D(3553,1,Be,pe.width,pe.height):t.texImage2D(3553,0,Be,pe.width,pe.height,0,Ye,He,null));else if(w.isDataTexture)if(ct.length>0&&Pe){wt&&Ct&&t.texStorage2D(3553,B,Be,ct[0].width,ct[0].height);for(let te=0,we=ct.length;te<we;te++)We=ct[te],wt?t.texSubImage2D(3553,te,0,0,We.width,We.height,Ye,He,We.data):t.texImage2D(3553,te,Be,We.width,We.height,0,Ye,He,We.data);w.generateMipmaps=!1}else wt?(Ct&&t.texStorage2D(3553,B,Be,pe.width,pe.height),t.texSubImage2D(3553,0,0,0,pe.width,pe.height,Ye,He,pe.data)):t.texImage2D(3553,0,Be,pe.width,pe.height,0,Ye,He,pe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){wt&&Ct&&t.texStorage3D(35866,B,Be,ct[0].width,ct[0].height,pe.depth);for(let te=0,we=ct.length;te<we;te++)We=ct[te],w.format!==Rn?Ye!==null?wt?t.compressedTexSubImage3D(35866,te,0,0,0,We.width,We.height,pe.depth,Ye,We.data,0,0):t.compressedTexImage3D(35866,te,Be,We.width,We.height,pe.depth,0,We.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?t.texSubImage3D(35866,te,0,0,0,We.width,We.height,pe.depth,Ye,He,We.data):t.texImage3D(35866,te,Be,We.width,We.height,pe.depth,0,Ye,He,We.data)}else{wt&&Ct&&t.texStorage2D(3553,B,Be,ct[0].width,ct[0].height);for(let te=0,we=ct.length;te<we;te++)We=ct[te],w.format!==Rn?Ye!==null?wt?t.compressedTexSubImage2D(3553,te,0,0,We.width,We.height,Ye,We.data):t.compressedTexImage2D(3553,te,Be,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?t.texSubImage2D(3553,te,0,0,We.width,We.height,Ye,He,We.data):t.texImage2D(3553,te,Be,We.width,We.height,0,Ye,He,We.data)}else if(w.isDataArrayTexture)wt?(Ct&&t.texStorage3D(35866,B,Be,pe.width,pe.height,pe.depth),t.texSubImage3D(35866,0,0,0,0,pe.width,pe.height,pe.depth,Ye,He,pe.data)):t.texImage3D(35866,0,Be,pe.width,pe.height,pe.depth,0,Ye,He,pe.data);else if(w.isData3DTexture)wt?(Ct&&t.texStorage3D(32879,B,Be,pe.width,pe.height,pe.depth),t.texSubImage3D(32879,0,0,0,0,pe.width,pe.height,pe.depth,Ye,He,pe.data)):t.texImage3D(32879,0,Be,pe.width,pe.height,pe.depth,0,Ye,He,pe.data);else if(w.isFramebufferTexture){if(Ct)if(wt)t.texStorage2D(3553,B,Be,pe.width,pe.height);else{let te=pe.width,we=pe.height;for(let Fe=0;Fe<B;Fe++)t.texImage2D(3553,Fe,Be,te,we,0,Ye,He,null),te>>=1,we>>=1}}else if(ct.length>0&&Pe){wt&&Ct&&t.texStorage2D(3553,B,Be,ct[0].width,ct[0].height);for(let te=0,we=ct.length;te<we;te++)We=ct[te],wt?t.texSubImage2D(3553,te,0,0,Ye,He,We):t.texImage2D(3553,te,Be,Ye,He,We);w.generateMipmaps=!1}else wt?(Ct&&t.texStorage2D(3553,B,Be,pe.width,pe.height),t.texSubImage2D(3553,0,0,0,Ye,He,pe)):t.texImage2D(3553,0,Be,Ye,He,pe);F(w,Pe)&&V(Ee),Ke.__version=Le.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Ue(L,w,z){if(w.image.length!==6)return;let Ee=je(L,w),Se=w.source;t.bindTexture(34067,L.__webglTexture,33984+z);let Le=n.get(Se);if(Se.version!==Le.__version||Ee===!0){t.activeTexture(33984+z),r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);let Ke=w.isCompressedTexture||w.image[0].isCompressedTexture,Ie=w.image[0]&&w.image[0].isDataTexture,pe=[];for(let te=0;te<6;te++)!Ke&&!Ie?pe[te]=y(w.image[te],!1,!0,l):pe[te]=Ie?w.image[te].image:w.image[te],pe[te]=Qt(w,pe[te]);let Pe=pe[0],Ye=M(Pe)||o,He=s.convert(w.format,w.encoding),Be=s.convert(w.type),We=b(w.internalFormat,He,Be,w.encoding),ct=o&&w.isVideoTexture!==!0,wt=Le.__version===void 0||Ee===!0,Ct=P(w,Pe,Ye);j(34067,w,Ye);let B;if(Ke){ct&&wt&&t.texStorage2D(34067,Ct,We,Pe.width,Pe.height);for(let te=0;te<6;te++){B=pe[te].mipmaps;for(let we=0;we<B.length;we++){let Fe=B[we];w.format!==Rn?He!==null?ct?t.compressedTexSubImage2D(34069+te,we,0,0,Fe.width,Fe.height,He,Fe.data):t.compressedTexImage2D(34069+te,we,We,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?t.texSubImage2D(34069+te,we,0,0,Fe.width,Fe.height,He,Be,Fe.data):t.texImage2D(34069+te,we,We,Fe.width,Fe.height,0,He,Be,Fe.data)}}}else{B=w.mipmaps,ct&&wt&&(B.length>0&&Ct++,t.texStorage2D(34067,Ct,We,pe[0].width,pe[0].height));for(let te=0;te<6;te++)if(Ie){ct?t.texSubImage2D(34069+te,0,0,0,pe[te].width,pe[te].height,He,Be,pe[te].data):t.texImage2D(34069+te,0,We,pe[te].width,pe[te].height,0,He,Be,pe[te].data);for(let we=0;we<B.length;we++){let Ge=B[we].image[te].image;ct?t.texSubImage2D(34069+te,we+1,0,0,Ge.width,Ge.height,He,Be,Ge.data):t.texImage2D(34069+te,we+1,We,Ge.width,Ge.height,0,He,Be,Ge.data)}}else{ct?t.texSubImage2D(34069+te,0,0,0,He,Be,pe[te]):t.texImage2D(34069+te,0,We,He,Be,pe[te]);for(let we=0;we<B.length;we++){let Fe=B[we];ct?t.texSubImage2D(34069+te,we+1,0,0,He,Be,Fe.image[te]):t.texImage2D(34069+te,we+1,We,He,Be,Fe.image[te])}}}F(w,Ye)&&V(34067),Le.__version=Se.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Ne(L,w,z,Ee,Se){let Le=s.convert(z.format,z.encoding),Ke=s.convert(z.type),Ie=b(z.internalFormat,Le,Ke,z.encoding);n.get(w).__hasExternalTextures||(Se===32879||Se===35866?t.texImage3D(Se,0,Ie,w.width,w.height,w.depth,0,Le,Ke,null):t.texImage2D(Se,0,Ie,w.width,w.height,0,Le,Ke,null)),t.bindFramebuffer(36160,L),dt(w)?h.framebufferTexture2DMultisampleEXT(36160,Ee,Se,n.get(z).__webglTexture,0,_t(w)):(Se===3553||Se>=34069&&Se<=34074)&&r.framebufferTexture2D(36160,Ee,Se,n.get(z).__webglTexture,0),t.bindFramebuffer(36160,null)}function pt(L,w,z){if(r.bindRenderbuffer(36161,L),w.depthBuffer&&!w.stencilBuffer){let Ee=33189;if(z||dt(w)){let Se=w.depthTexture;Se&&Se.isDepthTexture&&(Se.type===pi?Ee=36012:Se.type===fi&&(Ee=33190));let Le=_t(w);dt(w)?h.renderbufferStorageMultisampleEXT(36161,Le,Ee,w.width,w.height):r.renderbufferStorageMultisample(36161,Le,Ee,w.width,w.height)}else r.renderbufferStorage(36161,Ee,w.width,w.height);r.framebufferRenderbuffer(36160,36096,36161,L)}else if(w.depthBuffer&&w.stencilBuffer){let Ee=_t(w);z&&dt(w)===!1?r.renderbufferStorageMultisample(36161,Ee,35056,w.width,w.height):dt(w)?h.renderbufferStorageMultisampleEXT(36161,Ee,35056,w.width,w.height):r.renderbufferStorage(36161,34041,w.width,w.height),r.framebufferRenderbuffer(36160,33306,36161,L)}else{let Ee=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let Se=0;Se<Ee.length;Se++){let Le=Ee[Se],Ke=s.convert(Le.format,Le.encoding),Ie=s.convert(Le.type),pe=b(Le.internalFormat,Ke,Ie,Le.encoding),Pe=_t(w);z&&dt(w)===!1?r.renderbufferStorageMultisample(36161,Pe,pe,w.width,w.height):dt(w)?h.renderbufferStorageMultisampleEXT(36161,Pe,pe,w.width,w.height):r.renderbufferStorage(36161,pe,w.width,w.height)}}r.bindRenderbuffer(36161,null)}function Ve(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Me(w.depthTexture,0);let Ee=n.get(w.depthTexture).__webglTexture,Se=_t(w);if(w.depthTexture.format===mi)dt(w)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,Ee,0,Se):r.framebufferTexture2D(36160,36096,3553,Ee,0);else if(w.depthTexture.format===Ji)dt(w)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,Ee,0,Se):r.framebufferTexture2D(36160,33306,3553,Ee,0);else throw new Error("Unknown depthTexture format")}function Je(L){let w=n.get(L),z=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ve(w.__webglFramebuffer,L)}else if(z){w.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)t.bindFramebuffer(36160,w.__webglFramebuffer[Ee]),w.__webglDepthbuffer[Ee]=r.createRenderbuffer(),pt(w.__webglDepthbuffer[Ee],L,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),pt(w.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function et(L,w,z){let Ee=n.get(L);w!==void 0&&Ne(Ee.__webglFramebuffer,L,L.texture,36064,3553),z!==void 0&&Je(L)}function Bt(L){let w=L.texture,z=n.get(L),Ee=n.get(w);L.addEventListener("dispose",re),L.isWebGLMultipleRenderTargets!==!0&&(Ee.__webglTexture===void 0&&(Ee.__webglTexture=r.createTexture()),Ee.__version=w.version,a.memory.textures++);let Se=L.isWebGLCubeRenderTarget===!0,Le=L.isWebGLMultipleRenderTargets===!0,Ke=M(L)||o;if(Se){z.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)z.__webglFramebuffer[Ie]=r.createFramebuffer()}else{if(z.__webglFramebuffer=r.createFramebuffer(),Le)if(i.drawBuffers){let Ie=L.texture;for(let pe=0,Pe=Ie.length;pe<Pe;pe++){let Ye=n.get(Ie[pe]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&dt(L)===!1){let Ie=Le?w:[w];z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer);for(let pe=0;pe<Ie.length;pe++){let Pe=Ie[pe];z.__webglColorRenderbuffer[pe]=r.createRenderbuffer(),r.bindRenderbuffer(36161,z.__webglColorRenderbuffer[pe]);let Ye=s.convert(Pe.format,Pe.encoding),He=s.convert(Pe.type),Be=b(Pe.internalFormat,Ye,He,Pe.encoding,L.isXRRenderTarget===!0),We=_t(L);r.renderbufferStorageMultisample(36161,We,Be,L.width,L.height),r.framebufferRenderbuffer(36160,36064+pe,36161,z.__webglColorRenderbuffer[pe])}r.bindRenderbuffer(36161,null),L.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),pt(z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(Se){t.bindTexture(34067,Ee.__webglTexture),j(34067,w,Ke);for(let Ie=0;Ie<6;Ie++)Ne(z.__webglFramebuffer[Ie],L,w,36064,34069+Ie);F(w,Ke)&&V(34067),t.unbindTexture()}else if(Le){let Ie=L.texture;for(let pe=0,Pe=Ie.length;pe<Pe;pe++){let Ye=Ie[pe],He=n.get(Ye);t.bindTexture(3553,He.__webglTexture),j(3553,Ye,Ke),Ne(z.__webglFramebuffer,L,Ye,36064+pe,3553),F(Ye,Ke)&&V(3553)}t.unbindTexture()}else{let Ie=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?Ie=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ie,Ee.__webglTexture),j(Ie,w,Ke),Ne(z.__webglFramebuffer,L,w,36064,Ie),F(w,Ke)&&V(Ie),t.unbindTexture()}L.depthBuffer&&Je(L)}function At(L){let w=M(L)||o,z=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let Ee=0,Se=z.length;Ee<Se;Ee++){let Le=z[Ee];if(F(Le,w)){let Ke=L.isWebGLCubeRenderTarget?34067:3553,Ie=n.get(Le).__webglTexture;t.bindTexture(Ke,Ie),V(Ke),t.unbindTexture()}}}function jt(L){if(o&&L.samples>0&&dt(L)===!1){let w=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],z=L.width,Ee=L.height,Se=16384,Le=[],Ke=L.stencilBuffer?33306:36096,Ie=n.get(L),pe=L.isWebGLMultipleRenderTargets===!0;if(pe)for(let Pe=0;Pe<w.length;Pe++)t.bindFramebuffer(36160,Ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Pe,36161,null),t.bindFramebuffer(36160,Ie.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Pe,3553,null,0);t.bindFramebuffer(36008,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Ie.__webglFramebuffer);for(let Pe=0;Pe<w.length;Pe++){Le.push(36064+Pe),L.depthBuffer&&Le.push(Ke);let Ye=Ie.__ignoreDepthValues!==void 0?Ie.__ignoreDepthValues:!1;if(Ye===!1&&(L.depthBuffer&&(Se|=256),L.stencilBuffer&&(Se|=1024)),pe&&r.framebufferRenderbuffer(36008,36064,36161,Ie.__webglColorRenderbuffer[Pe]),Ye===!0&&(r.invalidateFramebuffer(36008,[Ke]),r.invalidateFramebuffer(36009,[Ke])),pe){let He=n.get(w[Pe]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,He,0)}r.blitFramebuffer(0,0,z,Ee,0,0,z,Ee,Se,9728),m&&r.invalidateFramebuffer(36008,Le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),pe)for(let Pe=0;Pe<w.length;Pe++){t.bindFramebuffer(36160,Ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Pe,36161,Ie.__webglColorRenderbuffer[Pe]);let Ye=n.get(w[Pe]).__webglTexture;t.bindFramebuffer(36160,Ie.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Pe,3553,Ye,0)}t.bindFramebuffer(36009,Ie.__webglMultisampledFramebuffer)}}function _t(L){return Math.min(f,L.samples)}function dt(L){let w=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function yn(L){let w=a.render.frame;_.get(L)!==w&&(_.set(L,w),L.update())}function Qt(L,w){let z=L.encoding,Ee=L.format,Se=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===mo||z!==Jn&&(z===xt?o===!1?e.has("EXT_sRGB")===!0&&Ee===Rn?(L.format=mo,L.minFilter=rn,L.generateMipmaps=!1):w=sr.sRGBToLinear(w):(Ee!==Rn||Se!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",z)),w}this.allocateTextureUnit=ge,this.resetTextureUnits=Ae,this.setTexture2D=Me,this.setTexture2DArray=ke,this.setTexture3D=J,this.setTextureCube=ae,this.rebindTextures=et,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=dt}function wp(r,e,t){let n=t.isWebGL2;function i(s,a=null){let o;if(s===xi)return 5121;if(s===Ec)return 32819;if(s===Tc)return 32820;if(s===Mc)return 5120;if(s===wc)return 5122;if(s===Dl)return 5123;if(s===Sc)return 5124;if(s===fi)return 5125;if(s===pi)return 5126;if(s===_i)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Ac)return 6406;if(s===Rn)return 6408;if(s===Cc)return 6409;if(s===Rc)return 6410;if(s===mi)return 6402;if(s===Ji)return 34041;if(s===mo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Pc)return 6403;if(s===Lc)return 36244;if(s===Ic)return 33319;if(s===Dc)return 33320;if(s===Nc)return 36249;if(s===Tr||s===Ar||s===Cr||s===Rr)if(a===xt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Tr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ar)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Cr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Rr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Tr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ar)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Cr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Rr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ca||s===ha||s===ua||s===da)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===ca)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ha)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ua)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===da)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Fc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===fa||s===pa)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===fa)return a===xt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===pa)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ma||s===ga||s===xa||s===_a||s===ya||s===va||s===ba||s===Ma||s===wa||s===Sa||s===Ea||s===Ta||s===Aa||s===Ca)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ma)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ga)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===xa)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_a)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ya)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===va)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ba)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ma)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===wa)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Sa)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ea)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ta)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Aa)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ca)return a===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Pr)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Pr)return a===xt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===zc||s===Ra||s===Pa||s===La)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Pr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Ra)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Pa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===La)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===qi?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}var Co=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Pn=class extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sp={type:"move"},fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let p of e.hand.values()){let d=t.getJointPose(p,n),v=this._getHandJoint(l,p);d!==null&&(v.matrix.fromArray(d.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=d.radius),v.visible=d!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,_=.005;l.inputState.pinching&&h>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sp)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ro=class extends wn{constructor(e,t,n,i,s,a,o,c,l,u){if(u=u!==void 0?u:mi,u!==mi&&u!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===mi&&(n=fi),n===void 0&&u===Ji&&(n=qi),super(null,i,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:sn,this.minFilter=c!==void 0?c:sn,this.flipY=!1,this.generateMipmaps=!1}},Po=class extends oi{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,m=null,_=null,p=t.getContextAttributes(),d=null,v=null,S=[],y=[],M=new Set,I=new Map,F=new qt;F.layers.enable(1),F.viewport=new Tt;let V=new qt;V.layers.enable(2),V.viewport=new Tt;let b=[F,V],P=new Co;P.layers.enable(1),P.layers.enable(2);let k=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=S[J];return ae===void 0&&(ae=new fs,S[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=S[J];return ae===void 0&&(ae=new fs,S[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=S[J];return ae===void 0&&(ae=new fs,S[J]=ae),ae.getHandSpace()};function re(J){let ae=y.indexOf(J.inputSource);if(ae===-1)return;let fe=S[ae];fe!==void 0&&fe.dispatchEvent({type:J.type,data:J.inputSource})}function Z(){i.removeEventListener("select",re),i.removeEventListener("selectstart",re),i.removeEventListener("selectend",re),i.removeEventListener("squeeze",re),i.removeEventListener("squeezestart",re),i.removeEventListener("squeezeend",re),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",W);for(let J=0;J<S.length;J++){let ae=y[J];ae!==null&&(y[J]=null,S[J].disconnect(ae))}k=null,de=null,e.setRenderTarget(d),m=null,h=null,f=null,i=null,v=null,ke.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",re),i.addEventListener("selectstart",re),i.addEventListener("selectend",re),i.addEventListener("squeeze",re),i.addEventListener("squeezestart",re),i.addEventListener("squeezeend",re),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ae={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:m}),v=new _n(m.framebufferWidth,m.framebufferHeight,{format:Rn,type:xi,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let ae=null,fe=null,be=null;p.depth&&(be=p.stencil?35056:33190,ae=p.stencil?Ji:mi,fe=p.stencil?qi:fi);let j={colorFormat:32856,depthFormat:be,scaleFactor:s};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(j),i.updateRenderState({layers:[h]}),v=new _n(h.textureWidth,h.textureHeight,{format:Rn,type:xi,depthTexture:new Ro(h.textureWidth,h.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});let je=e.properties.get(v);je.__ignoreDepthValues=h.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ke.setContext(i),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function W(J){for(let ae=0;ae<J.removed.length;ae++){let fe=J.removed[ae],be=y.indexOf(fe);be>=0&&(y[be]=null,S[be].disconnect(fe))}for(let ae=0;ae<J.added.length;ae++){let fe=J.added[ae],be=y.indexOf(fe);if(be===-1){for(let je=0;je<S.length;je++)if(je>=y.length){y.push(fe),be=je;break}else if(y[je]===null){y[je]=fe,be=je;break}if(be===-1)break}let j=S[be];j&&j.connect(fe)}}let ue=new N,_e=new N;function Ae(J,ae,fe){ue.setFromMatrixPosition(ae.matrixWorld),_e.setFromMatrixPosition(fe.matrixWorld);let be=ue.distanceTo(_e),j=ae.projectionMatrix.elements,je=fe.projectionMatrix.elements,ze=j[14]/(j[10]-1),Ue=j[14]/(j[10]+1),Ne=(j[9]+1)/j[5],pt=(j[9]-1)/j[5],Ve=(j[8]-1)/j[0],Je=(je[8]+1)/je[0],et=ze*Ve,Bt=ze*Je,At=be/(-Ve+Je),jt=At*-Ve;ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(jt),J.translateZ(At),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();let _t=ze+At,dt=Ue+At,yn=et-jt,Qt=Bt+(be-jt),L=Ne*Ue/dt*_t,w=pt*Ue/dt*_t;J.projectionMatrix.makePerspective(yn,Qt,L,w,_t,dt)}function ge(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;P.near=V.near=F.near=J.near,P.far=V.far=F.far=J.far,(k!==P.near||de!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),k=P.near,de=P.far);let ae=J.parent,fe=P.cameras;ge(P,ae);for(let j=0;j<fe.length;j++)ge(fe[j],ae);P.matrixWorld.decompose(P.position,P.quaternion,P.scale),J.matrix.copy(P.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale);let be=J.children;for(let j=0,je=be.length;j<je;j++)be[j].updateMatrixWorld(!0);fe.length===2?Ae(P,F,V):P.projectionMatrix.copy(F.projectionMatrix)},this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(J){c=J,h!==null&&(h.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.getPlanes=function(){return M};let Te=null;function Me(J,ae){if(u=ae.getViewerPose(l||a),_=ae,u!==null){let fe=u.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let be=!1;fe.length!==P.cameras.length&&(P.cameras.length=0,be=!0);for(let j=0;j<fe.length;j++){let je=fe[j],ze=null;if(m!==null)ze=m.getViewport(je);else{let Ne=f.getViewSubImage(h,je);ze=Ne.viewport,j===0&&(e.setRenderTargetTextures(v,Ne.colorTexture,h.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(v))}let Ue=b[j];Ue===void 0&&(Ue=new qt,Ue.layers.enable(j),Ue.viewport=new Tt,b[j]=Ue),Ue.matrix.fromArray(je.transform.matrix),Ue.projectionMatrix.fromArray(je.projectionMatrix),Ue.viewport.set(ze.x,ze.y,ze.width,ze.height),j===0&&P.matrix.copy(Ue.matrix),be===!0&&P.cameras.push(Ue)}}for(let fe=0;fe<S.length;fe++){let be=y[fe],j=S[fe];be!==null&&j!==void 0&&j.update(be,ae,l||a)}if(Te&&Te(J,ae),ae.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ae.detectedPlanes});let fe=null;for(let be of M)ae.detectedPlanes.has(be)||(fe===null&&(fe=[]),fe.push(be));if(fe!==null)for(let be of fe)M.delete(be),I.delete(be),n.dispatchEvent({type:"planeremoved",data:be});for(let be of ae.detectedPlanes)if(!M.has(be))M.add(be),I.set(be,ae.lastChangedTime),n.dispatchEvent({type:"planeadded",data:be});else{let j=I.get(be);be.lastChangedTime>j&&(I.set(be,be.lastChangedTime),n.dispatchEvent({type:"planechanged",data:be}))}}_=null}let ke=new Ul;ke.setAnimationLoop(Me),this.setAnimationLoop=function(J){Te=J},this.dispose=function(){}}};function Ep(r,e){function t(p,d){d.color.getRGB(p.fogColor.value,Ol(r)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,v,S,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),u(p,d)):d.isMeshPhongMaterial?(i(p,d),l(p,d)):d.isMeshStandardMaterial?(i(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,y)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),_(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,v,S):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===gn&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===gn&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let v=e.get(d).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;let M=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*M}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let S;d.map?S=d.map:d.specularMap?S=d.specularMap:d.displacementMap?S=d.displacementMap:d.normalMap?S=d.normalMap:d.bumpMap?S=d.bumpMap:d.roughnessMap?S=d.roughnessMap:d.metalnessMap?S=d.metalnessMap:d.alphaMap?S=d.alphaMap:d.emissiveMap?S=d.emissiveMap:d.clearcoatMap?S=d.clearcoatMap:d.clearcoatNormalMap?S=d.clearcoatNormalMap:d.clearcoatRoughnessMap?S=d.clearcoatRoughnessMap:d.iridescenceMap?S=d.iridescenceMap:d.iridescenceThicknessMap?S=d.iridescenceThicknessMap:d.specularIntensityMap?S=d.specularIntensityMap:d.specularColorMap?S=d.specularColorMap:d.transmissionMap?S=d.transmissionMap:d.thicknessMap?S=d.thicknessMap:d.sheenColorMap?S=d.sheenColorMap:d.sheenRoughnessMap&&(S=d.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let y;d.aoMap?y=d.aoMap:d.lightMap&&(y=d.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,v,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*v,p.scale.value=S*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let y;d.map?y=d.map:d.alphaMap&&(y=d.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let v;d.map?v=d.map:d.alphaMap&&(v=d.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function l(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,v){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===gn&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Tp(r,e,t,n){let i={},s={},a=[],o=t.isWebGL2?r.getParameter(35375):0;function c(S,y){let M=y.program;n.uniformBlockBinding(S,M)}function l(S,y){let M=i[S.id];M===void 0&&(_(S),M=u(S),i[S.id]=M,S.addEventListener("dispose",d));let I=y.program;n.updateUBOMapping(S,I);let F=e.render.frame;s[S.id]!==F&&(h(S),s[S.id]=F)}function u(S){let y=f();S.__bindingPointIndex=y;let M=r.createBuffer(),I=S.__size,F=S.usage;return r.bindBuffer(35345,M),r.bufferData(35345,I,F),r.bindBuffer(35345,null),r.bindBufferBase(35345,y,M),M}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){let y=i[S.id],M=S.uniforms,I=S.__cache;r.bindBuffer(35345,y);for(let F=0,V=M.length;F<V;F++){let b=M[F];if(m(b,F,I)===!0){let P=b.__offset,k=Array.isArray(b.value)?b.value:[b.value],de=0;for(let re=0;re<k.length;re++){let Z=k[re],W=p(Z);typeof Z=="number"?(b.__data[0]=Z,r.bufferSubData(35345,P+de,b.__data)):Z.isMatrix3?(b.__data[0]=Z.elements[0],b.__data[1]=Z.elements[1],b.__data[2]=Z.elements[2],b.__data[3]=Z.elements[0],b.__data[4]=Z.elements[3],b.__data[5]=Z.elements[4],b.__data[6]=Z.elements[5],b.__data[7]=Z.elements[0],b.__data[8]=Z.elements[6],b.__data[9]=Z.elements[7],b.__data[10]=Z.elements[8],b.__data[11]=Z.elements[0]):(Z.toArray(b.__data,de),de+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,P,b.__data)}}r.bindBuffer(35345,null)}function m(S,y,M){let I=S.value;if(M[y]===void 0){if(typeof I=="number")M[y]=I;else{let F=Array.isArray(I)?I:[I],V=[];for(let b=0;b<F.length;b++)V.push(F[b].clone());M[y]=V}return!0}else if(typeof I=="number"){if(M[y]!==I)return M[y]=I,!0}else{let F=Array.isArray(M[y])?M[y]:[M[y]],V=Array.isArray(I)?I:[I];for(let b=0;b<F.length;b++){let P=F[b];if(P.equals(V[b])===!1)return P.copy(V[b]),!0}}return!1}function _(S){let y=S.uniforms,M=0,I=16,F=0;for(let V=0,b=y.length;V<b;V++){let P=y[V],k={boundary:0,storage:0},de=Array.isArray(P.value)?P.value:[P.value];for(let re=0,Z=de.length;re<Z;re++){let W=de[re],ue=p(W);k.boundary+=ue.boundary,k.storage+=ue.storage}if(P.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=M,V>0){F=M%I;let re=I-F;F!==0&&re-k.boundary<0&&(M+=I-F,P.__offset=M)}M+=k.storage}return F=M%I,F>0&&(M+=I-F),S.__size=M,S.__cache={},this}function p(S){let y={boundary:0,storage:0};return typeof S=="number"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function d(S){let y=S.target;y.removeEventListener("dispose",d);let M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function v(){for(let S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:c,update:l,dispose:v}}function Ap(){let r=ir("canvas");return r.style.display="block",r}function Ko(r={}){this.isWebGLRenderer=!0;let e=r.canvas!==void 0?r.canvas:Ap(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1,u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let f=null,h=null,m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Jn,this.physicallyCorrectLights=!1,this.toneMapping=Ln,this.toneMappingExposure=1;let p=this,d=!1,v=0,S=0,y=null,M=-1,I=null,F=new Tt,V=new Tt,b=null,P=e.width,k=e.height,de=1,re=null,Z=null,W=new Tt(0,0,P,k),ue=new Tt(0,0,P,k),_e=!1,Ae=new xs,ge=!1,Te=!1,Me=null,ke=new gt,J=new nt,ae=new N,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function be(){return y===null?de:1}let j=t;function je(E,H){for(let ne=0;ne<E.length;ne++){let q=E[ne],le=e.getContext(q,H);if(le!==null)return le}return null}try{let E={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r149"),e.addEventListener("webglcontextlost",Be,!1),e.addEventListener("webglcontextrestored",We,!1),e.addEventListener("webglcontextcreationerror",ct,!1),j===null){let H=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&H.shift(),j=je(H,E),j===null)throw je(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ze,Ue,Ne,pt,Ve,Je,et,Bt,At,jt,_t,dt,yn,Qt,L,w,z,Ee,Se,Le,Ke,Ie,pe,Pe;function Ye(){ze=new Yd(j),Ue=new kd(j,ze,r),ze.init(Ue),Ie=new wp(j,ze,Ue),Ne=new bp(j,ze,Ue),pt=new $d,Ve=new cp,Je=new Mp(j,ze,Ne,Ve,Ue,Ie,pt),et=new Gd(p),Bt=new Xd(p),At=new rh(j,Ue),pe=new Bd(j,ze,At,Ue),jt=new Zd(j,At,pt,pe),_t=new ef(j,jt,At,pt),Se=new Qd(j,Ue,Je),w=new Vd(Ve),dt=new lp(p,et,Bt,ze,Ue,pe,w),yn=new Ep(p,Ve),Qt=new up,L=new xp(ze,Ue),Ee=new Ud(p,et,Bt,Ne,_t,u,a),z=new vp(p,_t,Ue),Pe=new Tp(j,pt,Ue,Ne),Le=new Hd(j,ze,pt,Ue),Ke=new Jd(j,ze,pt,Ue),pt.programs=dt.programs,p.capabilities=Ue,p.extensions=ze,p.properties=Ve,p.renderLists=Qt,p.shadowMap=z,p.state=Ne,p.info=pt}Ye();let He=new Po(p,j);this.xr=He,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let E=ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(E){E!==void 0&&(de=E,this.setSize(P,k,!1))},this.getSize=function(E){return E.set(P,k)},this.setSize=function(E,H,ne){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=E,k=H,e.width=Math.floor(E*de),e.height=Math.floor(H*de),ne!==!1&&(e.style.width=E+"px",e.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(P*de,k*de).floor()},this.setDrawingBufferSize=function(E,H,ne){P=E,k=H,de=ne,e.width=Math.floor(E*ne),e.height=Math.floor(H*ne),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(F)},this.getViewport=function(E){return E.copy(W)},this.setViewport=function(E,H,ne,q){E.isVector4?W.set(E.x,E.y,E.z,E.w):W.set(E,H,ne,q),Ne.viewport(F.copy(W).multiplyScalar(de).floor())},this.getScissor=function(E){return E.copy(ue)},this.setScissor=function(E,H,ne,q){E.isVector4?ue.set(E.x,E.y,E.z,E.w):ue.set(E,H,ne,q),Ne.scissor(V.copy(ue).multiplyScalar(de).floor())},this.getScissorTest=function(){return _e},this.setScissorTest=function(E){Ne.setScissorTest(_e=E)},this.setOpaqueSort=function(E){re=E},this.setTransparentSort=function(E){Z=E},this.getClearColor=function(E){return E.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(E=!0,H=!0,ne=!0){let q=0;E&&(q|=16384),H&&(q|=256),ne&&(q|=1024),j.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Be,!1),e.removeEventListener("webglcontextrestored",We,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),Qt.dispose(),L.dispose(),Ve.dispose(),et.dispose(),Bt.dispose(),_t.dispose(),pe.dispose(),Pe.dispose(),dt.dispose(),He.dispose(),He.removeEventListener("sessionstart",Fe),He.removeEventListener("sessionend",Ge),Me&&(Me.dispose(),Me=null),ht.stop()};function Be(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function We(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;let E=pt.autoReset,H=z.enabled,ne=z.autoUpdate,q=z.needsUpdate,le=z.type;Ye(),pt.autoReset=E,z.enabled=H,z.autoUpdate=ne,z.needsUpdate=q,z.type=le}function ct(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function wt(E){let H=E.target;H.removeEventListener("dispose",wt),Ct(H)}function Ct(E){B(E),Ve.remove(E)}function B(E){let H=Ve.get(E).programs;H!==void 0&&(H.forEach(function(ne){dt.releaseProgram(ne)}),E.isShaderMaterial&&dt.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,ne,q,le,qe){H===null&&(H=fe);let ve=le.isMesh&&le.matrixWorld.determinant()<0,Qe=As(E,H,ne,q,le);Ne.setMaterial(q,ve);let st=ne.index,rt=1;q.wireframe===!0&&(st=jt.getWireframeAttribute(ne),rt=2);let at=ne.drawRange,it=ne.attributes.position,$e=at.start*rt,Zt=(at.start+at.count)*rt;qe!==null&&($e=Math.max($e,qe.start*rt),Zt=Math.min(Zt,(qe.start+qe.count)*rt)),st!==null?($e=Math.max($e,0),Zt=Math.min(Zt,st.count)):it!=null&&($e=Math.max($e,0),Zt=Math.min(Zt,it.count));let bn=Zt-$e;if(bn<0||bn===1/0)return;pe.setup(le,q,Qe,ne,st);let Bn,Pt=Le;if(st!==null&&(Bn=At.get(st),Pt=Ke,Pt.setIndex(Bn)),le.isMesh)q.wireframe===!0?(Ne.setLineWidth(q.wireframeLinewidth*be()),Pt.setMode(1)):Pt.setMode(4);else if(le.isLine){let tt=q.linewidth;tt===void 0&&(tt=1),Ne.setLineWidth(tt*be()),le.isLineSegments?Pt.setMode(1):le.isLineLoop?Pt.setMode(2):Pt.setMode(3)}else le.isPoints?Pt.setMode(0):le.isSprite&&Pt.setMode(4);if(le.isInstancedMesh)Pt.renderInstances($e,bn,le.count);else if(ne.isInstancedBufferGeometry){let tt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Hn=Math.min(ne.instanceCount,tt);Pt.renderInstances($e,bn,Hn)}else Pt.render($e,bn)},this.compile=function(E,H){function ne(q,le,qe){q.transparent===!0&&q.side===pn&&q.forceSinglePass===!1?(q.side=gn,q.needsUpdate=!0,en(q,le,qe),q.side=ri,q.needsUpdate=!0,en(q,le,qe),q.side=pn):en(q,le,qe)}h=L.get(E),h.init(),_.push(h),E.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(h.pushLight(q),q.castShadow&&h.pushShadow(q))}),h.setupLights(p.physicallyCorrectLights),E.traverse(function(q){let le=q.material;if(le)if(Array.isArray(le))for(let qe=0;qe<le.length;qe++){let ve=le[qe];ne(ve,E,q)}else ne(le,E,q)}),_.pop(),h=null};let te=null;function we(E){te&&te(E)}function Fe(){ht.stop()}function Ge(){ht.start()}let ht=new Ul;ht.setAnimationLoop(we),typeof self<"u"&&ht.setContext(self),this.setAnimationLoop=function(E){te=E,He.setAnimationLoop(E),E===null?ht.stop():ht.start()},He.addEventListener("sessionstart",Fe),He.addEventListener("sessionend",Ge),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(H),H=He.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,H,y),h=L.get(E,_.length),h.init(),_.push(h),ke.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ae.setFromProjectionMatrix(ke),Te=this.localClippingEnabled,ge=w.init(this.clippingPlanes,Te),f=Qt.get(E,m.length),f.init(),m.push(f),Dt(E,H,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(re,Z),ge===!0&&w.beginShadows();let ne=h.state.shadowsArray;if(z.render(ne,E,H),ge===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ee.render(f,E),h.setupLights(p.physicallyCorrectLights),H.isArrayCamera){let q=H.cameras;for(let le=0,qe=q.length;le<qe;le++){let ve=q[le];yt(f,E,ve,ve.viewport)}}else yt(f,E,H);y!==null&&(Je.updateMultisampleRenderTarget(y),Je.updateRenderTargetMipmap(y)),E.isScene===!0&&E.onAfterRender(p,E,H),pe.resetDefaultState(),M=-1,I=null,_.pop(),_.length>0?h=_[_.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Dt(E,H,ne,q){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)ne=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ae.intersectsSprite(E)){q&&ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ke);let ve=_t.update(E),Qe=E.material;Qe.visible&&f.push(E,ve,Qe,ne,ae.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==pt.render.frame&&(E.skeleton.update(),E.skeleton.frame=pt.render.frame),!E.frustumCulled||Ae.intersectsObject(E))){q&&ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ke);let ve=_t.update(E),Qe=E.material;if(Array.isArray(Qe)){let st=ve.groups;for(let rt=0,at=st.length;rt<at;rt++){let it=st[rt],$e=Qe[it.materialIndex];$e&&$e.visible&&f.push(E,ve,$e,ne,ae.z,it)}}else Qe.visible&&f.push(E,ve,Qe,ne,ae.z,null)}}let qe=E.children;for(let ve=0,Qe=qe.length;ve<Qe;ve++)Dt(qe[ve],H,ne,q)}function yt(E,H,ne,q){let le=E.opaque,qe=E.transmissive,ve=E.transparent;h.setupLightsView(ne),ge===!0&&w.setGlobalState(p.clippingPlanes,ne),qe.length>0&&On(le,H,ne),q&&Ne.viewport(F.copy(q)),le.length>0&&vt(le,H,ne),qe.length>0&&vt(qe,H,ne),ve.length>0&&vt(ve,H,ne),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function On(E,H,ne){let q=Ue.isWebGL2;Me===null&&(Me=new _n(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")?_i:xi,minFilter:ps,samples:q&&s===!0?4:0})),p.getDrawingBufferSize(J),q?Me.setSize(J.x,J.y):Me.setSize(go(J.x),go(J.y));let le=p.getRenderTarget();p.setRenderTarget(Me),p.clear();let qe=p.toneMapping;p.toneMapping=Ln,vt(E,H,ne),p.toneMapping=qe,Je.updateMultisampleRenderTarget(Me),Je.updateRenderTargetMipmap(Me),p.setRenderTarget(le)}function vt(E,H,ne){let q=H.isScene===!0?H.overrideMaterial:null;for(let le=0,qe=E.length;le<qe;le++){let ve=E[le],Qe=ve.object,st=ve.geometry,rt=q===null?ve.material:q,at=ve.group;Qe.layers.test(ne.layers)&&vn(Qe,H,ne,st,rt,at)}}function vn(E,H,ne,q,le,qe){E.onBeforeRender(p,H,ne,q,le,qe),E.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),le.onBeforeRender(p,H,ne,q,E,qe),le.transparent===!0&&le.side===pn&&le.forceSinglePass===!1?(le.side=gn,le.needsUpdate=!0,p.renderBufferDirect(ne,H,q,le,E,qe),le.side=ri,le.needsUpdate=!0,p.renderBufferDirect(ne,H,q,le,E,qe),le.side=pn):p.renderBufferDirect(ne,H,q,le,E,qe),E.onAfterRender(p,H,ne,q,le,qe)}function en(E,H,ne){H.isScene!==!0&&(H=fe);let q=Ve.get(E),le=h.state.lights,qe=h.state.shadowsArray,ve=le.state.version,Qe=dt.getParameters(E,le.state,qe,H,ne),st=dt.getProgramCacheKey(Qe),rt=q.programs;q.environment=E.isMeshStandardMaterial?H.environment:null,q.fog=H.fog,q.envMap=(E.isMeshStandardMaterial?Bt:et).get(E.envMap||q.environment),rt===void 0&&(E.addEventListener("dispose",wt),rt=new Map,q.programs=rt);let at=rt.get(st);if(at!==void 0){if(q.currentProgram===at&&q.lightsStateVersion===ve)return es(E,Qe),at}else Qe.uniforms=dt.getUniforms(E),E.onBuild(ne,Qe,p),E.onBeforeCompile(Qe,p),at=dt.acquireProgram(Qe,st),rt.set(st,at),q.uniforms=Qe.uniforms;let it=q.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(it.clippingPlanes=w.uniform),es(E,Qe),q.needsLights=wr(E),q.lightsStateVersion=ve,q.needsLights&&(it.ambientLightColor.value=le.state.ambient,it.lightProbe.value=le.state.probe,it.directionalLights.value=le.state.directional,it.directionalLightShadows.value=le.state.directionalShadow,it.spotLights.value=le.state.spot,it.spotLightShadows.value=le.state.spotShadow,it.rectAreaLights.value=le.state.rectArea,it.ltc_1.value=le.state.rectAreaLTC1,it.ltc_2.value=le.state.rectAreaLTC2,it.pointLights.value=le.state.point,it.pointLightShadows.value=le.state.pointShadow,it.hemisphereLights.value=le.state.hemi,it.directionalShadowMap.value=le.state.directionalShadowMap,it.directionalShadowMatrix.value=le.state.directionalShadowMatrix,it.spotShadowMap.value=le.state.spotShadowMap,it.spotLightMatrix.value=le.state.spotLightMatrix,it.spotLightMap.value=le.state.spotLightMap,it.pointShadowMap.value=le.state.pointShadowMap,it.pointShadowMatrix.value=le.state.pointShadowMatrix);let $e=at.getUniforms(),Zt=Xi.seqWithValue($e.seq,it);return q.currentProgram=at,q.uniformsList=Zt,at}function es(E,H){let ne=Ve.get(E);ne.outputEncoding=H.outputEncoding,ne.instancing=H.instancing,ne.skinning=H.skinning,ne.morphTargets=H.morphTargets,ne.morphNormals=H.morphNormals,ne.morphColors=H.morphColors,ne.morphTargetsCount=H.morphTargetsCount,ne.numClippingPlanes=H.numClippingPlanes,ne.numIntersection=H.numClipIntersection,ne.vertexAlphas=H.vertexAlphas,ne.vertexTangents=H.vertexTangents,ne.toneMapping=H.toneMapping}function As(E,H,ne,q,le){H.isScene!==!0&&(H=fe),Je.resetTextureUnits();let qe=H.fog,ve=q.isMeshStandardMaterial?H.environment:null,Qe=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:Jn,st=(q.isMeshStandardMaterial?Bt:et).get(q.envMap||ve),rt=q.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,at=!!q.normalMap&&!!ne.attributes.tangent,it=!!ne.morphAttributes.position,$e=!!ne.morphAttributes.normal,Zt=!!ne.morphAttributes.color,bn=q.toneMapped?p.toneMapping:Ln,Bn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Pt=Bn!==void 0?Bn.length:0,tt=Ve.get(q),Hn=h.state.lights;if(ge===!0&&(Te===!0||E!==I)){let Gt=E===I&&q.id===M;w.setState(q,E,Gt)}let Lt=!1;q.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Hn.state.version||tt.outputEncoding!==Qe||le.isInstancedMesh&&tt.instancing===!1||!le.isInstancedMesh&&tt.instancing===!0||le.isSkinnedMesh&&tt.skinning===!1||!le.isSkinnedMesh&&tt.skinning===!0||tt.envMap!==st||q.fog===!0&&tt.fog!==qe||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==w.numPlanes||tt.numIntersection!==w.numIntersection)||tt.vertexAlphas!==rt||tt.vertexTangents!==at||tt.morphTargets!==it||tt.morphNormals!==$e||tt.morphColors!==Zt||tt.toneMapping!==bn||Ue.isWebGL2===!0&&tt.morphTargetsCount!==Pt)&&(Lt=!0):(Lt=!0,tt.__version=q.version);let Dn=tt.currentProgram;Lt===!0&&(Dn=en(q,H,le));let Cs=!1,jn=!1,Qn=!1,Ht=Dn.getUniforms(),kn=tt.uniforms;if(Ne.useProgram(Dn.program)&&(Cs=!0,jn=!0,Qn=!0),q.id!==M&&(M=q.id,jn=!0),Cs||I!==E){if(Ht.setValue(j,"projectionMatrix",E.projectionMatrix),Ue.logarithmicDepthBuffer&&Ht.setValue(j,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),I!==E&&(I=E,jn=!0,Qn=!0),q.isShaderMaterial||q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshStandardMaterial||q.envMap){let Gt=Ht.map.cameraPosition;Gt!==void 0&&Gt.setValue(j,ae.setFromMatrixPosition(E.matrixWorld))}(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ht.setValue(j,"isOrthographic",E.isOrthographicCamera===!0),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial||q.isShadowMaterial||le.isSkinnedMesh)&&Ht.setValue(j,"viewMatrix",E.matrixWorldInverse)}if(le.isSkinnedMesh){Ht.setOptional(j,le,"bindMatrix"),Ht.setOptional(j,le,"bindMatrixInverse");let Gt=le.skeleton;Gt&&(Ue.floatVertexTextures?(Gt.boneTexture===null&&Gt.computeBoneTexture(),Ht.setValue(j,"boneTexture",Gt.boneTexture,Je),Ht.setValue(j,"boneTextureSize",Gt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let Si=ne.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0&&Ue.isWebGL2===!0)&&Se.update(le,ne,q,Dn),(jn||tt.receiveShadow!==le.receiveShadow)&&(tt.receiveShadow=le.receiveShadow,Ht.setValue(j,"receiveShadow",le.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(kn.envMap.value=st,kn.flipEnvMap.value=st.isCubeTexture&&st.isRenderTargetTexture===!1?-1:1),jn&&(Ht.setValue(j,"toneMappingExposure",p.toneMappingExposure),tt.needsLights&&Un(kn,Qn),qe&&q.fog===!0&&yn.refreshFogUniforms(kn,qe),yn.refreshMaterialUniforms(kn,q,de,k,Me),Xi.upload(j,tt.uniformsList,kn,Je)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Xi.upload(j,tt.uniformsList,kn,Je),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ht.setValue(j,"center",le.center),Ht.setValue(j,"modelViewMatrix",le.modelViewMatrix),Ht.setValue(j,"normalMatrix",le.normalMatrix),Ht.setValue(j,"modelMatrix",le.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Gt=q.uniformsGroups;for(let ai=0,Jt=Gt.length;ai<Jt;ai++)if(Ue.isWebGL2){let Ei=Gt[ai];Pe.update(Ei,Dn),Pe.bind(Ei,Dn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Dn}function Un(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function wr(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(E,H,ne){Ve.get(E.texture).__webglTexture=H,Ve.get(E.depthTexture).__webglTexture=ne;let q=Ve.get(E);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=ne===void 0,q.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,H){let ne=Ve.get(E);ne.__webglFramebuffer=H,ne.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,ne=0){y=E,v=H,S=ne;let q=!0,le=null,qe=!1,ve=!1;if(E){let st=Ve.get(E);st.__useDefaultFramebuffer!==void 0?(Ne.bindFramebuffer(36160,null),q=!1):st.__webglFramebuffer===void 0?Je.setupRenderTarget(E):st.__hasExternalTextures&&Je.rebindTextures(E,Ve.get(E.texture).__webglTexture,Ve.get(E.depthTexture).__webglTexture);let rt=E.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(ve=!0);let at=Ve.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(le=at[H],qe=!0):Ue.isWebGL2&&E.samples>0&&Je.useMultisampledRTT(E)===!1?le=Ve.get(E).__webglMultisampledFramebuffer:le=at,F.copy(E.viewport),V.copy(E.scissor),b=E.scissorTest}else F.copy(W).multiplyScalar(de).floor(),V.copy(ue).multiplyScalar(de).floor(),b=_e;if(Ne.bindFramebuffer(36160,le)&&Ue.drawBuffers&&q&&Ne.drawBuffers(E,le),Ne.viewport(F),Ne.scissor(V),Ne.setScissorTest(b),qe){let st=Ve.get(E.texture);j.framebufferTexture2D(36160,36064,34069+H,st.__webglTexture,ne)}else if(ve){let st=Ve.get(E.texture),rt=H||0;j.framebufferTextureLayer(36160,36064,st.__webglTexture,ne||0,rt)}M=-1},this.readRenderTargetPixels=function(E,H,ne,q,le,qe,ve){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=Ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(Qe=Qe[ve]),Qe){Ne.bindFramebuffer(36160,Qe);try{let st=E.texture,rt=st.format,at=st.type;if(rt!==Rn&&Ie.convert(rt)!==j.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let it=at===_i&&(ze.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&ze.has("EXT_color_buffer_float"));if(at!==xi&&Ie.convert(at)!==j.getParameter(35738)&&!(at===pi&&(Ue.isWebGL2||ze.has("OES_texture_float")||ze.has("WEBGL_color_buffer_float")))&&!it){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-q&&ne>=0&&ne<=E.height-le&&j.readPixels(H,ne,q,le,Ie.convert(rt),Ie.convert(at),qe)}finally{let st=y!==null?Ve.get(y).__webglFramebuffer:null;Ne.bindFramebuffer(36160,st)}}},this.copyFramebufferToTexture=function(E,H,ne=0){let q=Math.pow(2,-ne),le=Math.floor(H.image.width*q),qe=Math.floor(H.image.height*q);Je.setTexture2D(H,0),j.copyTexSubImage2D(3553,ne,0,0,E.x,E.y,le,qe),Ne.unbindTexture()},this.copyTextureToTexture=function(E,H,ne,q=0){let le=H.image.width,qe=H.image.height,ve=Ie.convert(ne.format),Qe=Ie.convert(ne.type);Je.setTexture2D(ne,0),j.pixelStorei(37440,ne.flipY),j.pixelStorei(37441,ne.premultiplyAlpha),j.pixelStorei(3317,ne.unpackAlignment),H.isDataTexture?j.texSubImage2D(3553,q,E.x,E.y,le,qe,ve,Qe,H.image.data):H.isCompressedTexture?j.compressedTexSubImage2D(3553,q,E.x,E.y,H.mipmaps[0].width,H.mipmaps[0].height,ve,H.mipmaps[0].data):j.texSubImage2D(3553,q,E.x,E.y,ve,Qe,H.image),q===0&&ne.generateMipmaps&&j.generateMipmap(3553),Ne.unbindTexture()},this.copyTextureToTexture3D=function(E,H,ne,q,le=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let qe=E.max.x-E.min.x+1,ve=E.max.y-E.min.y+1,Qe=E.max.z-E.min.z+1,st=Ie.convert(q.format),rt=Ie.convert(q.type),at;if(q.isData3DTexture)Je.setTexture3D(q,0),at=32879;else if(q.isDataArrayTexture)Je.setTexture2DArray(q,0),at=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(37440,q.flipY),j.pixelStorei(37441,q.premultiplyAlpha),j.pixelStorei(3317,q.unpackAlignment);let it=j.getParameter(3314),$e=j.getParameter(32878),Zt=j.getParameter(3316),bn=j.getParameter(3315),Bn=j.getParameter(32877),Pt=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;j.pixelStorei(3314,Pt.width),j.pixelStorei(32878,Pt.height),j.pixelStorei(3316,E.min.x),j.pixelStorei(3315,E.min.y),j.pixelStorei(32877,E.min.z),ne.isDataTexture||ne.isData3DTexture?j.texSubImage3D(at,le,H.x,H.y,H.z,qe,ve,Qe,st,rt,Pt.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(at,le,H.x,H.y,H.z,qe,ve,Qe,st,Pt.data)):j.texSubImage3D(at,le,H.x,H.y,H.z,qe,ve,Qe,st,rt,Pt),j.pixelStorei(3314,it),j.pixelStorei(32878,$e),j.pixelStorei(3316,Zt),j.pixelStorei(3315,bn),j.pixelStorei(32877,Bn),le===0&&q.generateMipmaps&&j.generateMipmap(at),Ne.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Je.setTextureCube(E,0):E.isData3DTexture?Je.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Je.setTexture2DArray(E,0):Je.setTexture2D(E,0),Ne.unbindTexture()},this.resetState=function(){v=0,S=0,y=null,Ne.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var Lo=class extends Ko{};Lo.prototype.isWebGL1Renderer=!0;var fr=class r{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new lt(e),this.density=t}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}};var _s=class extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}};var pr=class extends bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},gl=new gt,xl=new gt,Zs=[],Cp=new gt,ls=new De,ys=class extends De{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,Cp)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ls.geometry=this.geometry,ls.material=this.material,ls.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,gl),xl.multiplyMatrices(n,gl),ls.matrixWorld=xl,ls.raycast(e,Zs);for(let a=0,o=Zs.length;a<o;a++){let c=Zs[a];c.instanceId=s,c.object=this,t.push(c)}Zs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new pr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Io=class extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},_l=new N,yl=new N,vl=new gt,so=new gs,Js=new vi,Do=class extends Xt{constructor(e=new zt,t=new Io){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)_l.fromBufferAttribute(t,i-1),yl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=_l.distanceTo(yl);e.setAttribute("lineDistance",new Mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(i),Js.radius+=s,e.ray.intersectsSphere(Js)===!1)return;vl.copy(i).invert(),so.copy(e.ray).applyMatrix4(vl);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new N,u=new N,f=new N,h=new N,m=this.isLineSegments?2:1,_=n.index,d=n.attributes.position;if(_!==null){let v=Math.max(0,a.start),S=Math.min(_.count,a.start+a.count);for(let y=v,M=S-1;y<M;y+=m){let I=_.getX(y),F=_.getX(y+1);if(l.fromBufferAttribute(d,I),u.fromBufferAttribute(d,F),so.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);let b=e.ray.origin.distanceTo(h);b<e.near||b>e.far||t.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let v=Math.max(0,a.start),S=Math.min(d.count,a.start+a.count);for(let y=v,M=S-1;y<M;y+=m){if(l.fromBufferAttribute(d,y),u.fromBufferAttribute(d,y+1),so.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);let F=e.ray.origin.distanceTo(h);F<e.near||F>e.far||t.push({distance:F,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},bl=new N,Ml=new N,mr=class extends Do{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)bl.fromBufferAttribute(t,i),Ml.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+bl.distanceTo(Ml);e.setAttribute("lineDistance",new Mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var No=class extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wl=new gt,Fo=new gs,$s=new vi,Ks=new N,vs=class extends Xt{constructor(e=new zt,t=new No){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(i),$s.radius+=s,e.ray.intersectsSphere($s)===!1)return;wl.copy(i).invert(),Fo.copy(e.ray).applyMatrix4(wl);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){let h=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let _=h,p=m;_<p;_++){let d=l.getX(_);Ks.fromBufferAttribute(f,d),Sl(Ks,d,c,i,e,t,this)}}else{let h=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=h,p=m;_<p;_++)Ks.fromBufferAttribute(f,_),Sl(Ks,_,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Sl(r,e,t,n,i,s,a){let o=Fo.distanceSqToPoint(r);if(o<t){let c=new N;Fo.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var gr=class extends wn{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},zo=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);let u=n[i],h=n[i+1]-u,m=(a-u)/h;return(i+m)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new nt:new N);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new N,i=[],s=[],a=[],o=new N,c=new gt;for(let m=0;m<=e;m++){let _=m/e;i[m]=this.getTangentAt(_,new N)}s[0]=new N,a[0]=new N;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),f=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(i[m-1],i[m]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(on(i[m-1].dot(i[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(o,_))}a[m].crossVectors(i[m],s[m])}if(t===!0){let m=Math.acos(on(s[0].dot(s[e]),-1,1));m/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let _=1;_<=e;_++)s[_].applyMatrix4(c.makeRotationAxis(i[_],m*_)),a[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function jo(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,f){let h=(a-s)/l-(o-s)/(l+u)+(o-a)/u,m=(o-a)/u-(c-a)/(u+f)+(c-o)/f;h*=u,m*=u,i(a,o,h,m)},calc:function(s){let a=s*s,o=a*s;return r+e*s+t*a+n*o}}}var js=new N,ro=new jo,oo=new jo,ao=new jo,bs=class extends zo{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new N){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=i[(o-1)%s]:(js.subVectors(i[0],i[1]).add(i[0]),l=js);let f=i[o%s],h=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(js.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=js),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m),d=Math.pow(h.distanceToSquared(u),m);p<1e-4&&(p=1),_<1e-4&&(_=p),d<1e-4&&(d=p),ro.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,_,p,d),oo.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,_,p,d),ao.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,_,p,d)}else this.curveType==="catmullrom"&&(ro.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),oo.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),ao.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(ro.calc(c),oo.calc(c),ao.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new N().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var ln=class r extends zt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let u=[],f=[],h=[],m=[],_=0,p=[],d=n/2,v=0;S(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Mt(f,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(m,2));function S(){let M=new N,I=new N,F=0,V=(t-e)/n;for(let b=0;b<=s;b++){let P=[],k=b/s,de=k*(t-e)+e;for(let re=0;re<=i;re++){let Z=re/i,W=Z*c+o,ue=Math.sin(W),_e=Math.cos(W);I.x=de*ue,I.y=-k*n+d,I.z=de*_e,f.push(I.x,I.y,I.z),M.set(ue,V,_e).normalize(),h.push(M.x,M.y,M.z),m.push(Z,1-k),P.push(_++)}p.push(P)}for(let b=0;b<i;b++)for(let P=0;P<s;P++){let k=p[P][b],de=p[P+1][b],re=p[P+1][b+1],Z=p[P][b+1];u.push(k,de,Z),u.push(de,re,Z),F+=6}l.addGroup(v,F,0),v+=F}function y(M){let I=_,F=new nt,V=new N,b=0,P=M===!0?e:t,k=M===!0?1:-1;for(let re=1;re<=i;re++)f.push(0,d*k,0),h.push(0,k,0),m.push(.5,.5),_++;let de=_;for(let re=0;re<=i;re++){let W=re/i*c+o,ue=Math.cos(W),_e=Math.sin(W);V.x=P*_e,V.y=d*k,V.z=P*ue,f.push(V.x,V.y,V.z),h.push(0,k,0),F.x=ue*.5+.5,F.y=_e*.5*k+.5,m.push(F.x,F.y),_++}for(let re=0;re<i;re++){let Z=I+re,W=de+re;M===!0?u.push(W,W+1,Z):u.push(W+1,W,Z),b+=3}l.addGroup(v,b,M===!0?1:2),v+=b}}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ms=class r extends ln{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Oo=class r extends zt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];o(i),l(n),u(),this.setAttribute("position",new Mt(s,3)),this.setAttribute("normal",new Mt(s.slice(),3)),this.setAttribute("uv",new Mt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let y=new N,M=new N,I=new N;for(let F=0;F<t.length;F+=3)m(t[F+0],y),m(t[F+1],M),m(t[F+2],I),c(y,M,I,S)}function c(S,y,M,I){let F=I+1,V=[];for(let b=0;b<=F;b++){V[b]=[];let P=S.clone().lerp(M,b/F),k=y.clone().lerp(M,b/F),de=F-b;for(let re=0;re<=de;re++)re===0&&b===F?V[b][re]=P:V[b][re]=P.clone().lerp(k,re/de)}for(let b=0;b<F;b++)for(let P=0;P<2*(F-b)-1;P++){let k=Math.floor(P/2);P%2===0?(h(V[b][k+1]),h(V[b+1][k]),h(V[b][k])):(h(V[b][k+1]),h(V[b+1][k+1]),h(V[b+1][k]))}}function l(S){let y=new N;for(let M=0;M<s.length;M+=3)y.x=s[M+0],y.y=s[M+1],y.z=s[M+2],y.normalize().multiplyScalar(S),s[M+0]=y.x,s[M+1]=y.y,s[M+2]=y.z}function u(){let S=new N;for(let y=0;y<s.length;y+=3){S.x=s[y+0],S.y=s[y+1],S.z=s[y+2];let M=d(S)/2/Math.PI+.5,I=v(S)/Math.PI+.5;a.push(M,1-I)}_(),f()}function f(){for(let S=0;S<a.length;S+=6){let y=a[S+0],M=a[S+2],I=a[S+4],F=Math.max(y,M,I),V=Math.min(y,M,I);F>.9&&V<.1&&(y<.2&&(a[S+0]+=1),M<.2&&(a[S+2]+=1),I<.2&&(a[S+4]+=1))}}function h(S){s.push(S.x,S.y,S.z)}function m(S,y){let M=S*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function _(){let S=new N,y=new N,M=new N,I=new N,F=new nt,V=new nt,b=new nt;for(let P=0,k=0;P<s.length;P+=9,k+=6){S.set(s[P+0],s[P+1],s[P+2]),y.set(s[P+3],s[P+4],s[P+5]),M.set(s[P+6],s[P+7],s[P+8]),F.set(a[k+0],a[k+1]),V.set(a[k+2],a[k+3]),b.set(a[k+4],a[k+5]),I.copy(S).add(y).add(M).divideScalar(3);let de=d(I);p(F,k+0,S,de),p(V,k+2,y,de),p(b,k+4,M,de)}}function p(S,y,M,I){I<0&&S.x===1&&(a[y]=S.x-1),M.x===0&&M.z===0&&(a[y]=I/2/Math.PI+.5)}function d(S){return Math.atan2(S.z,-S.x)}function v(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}};var xr=class r extends Oo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}};var _r=class r extends zt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],f=new N,h=new N,m=[],_=[],p=[],d=[];for(let v=0;v<=n;v++){let S=[],y=v/n,M=0;v==0&&a==0?M=.5/t:v==n&&c==Math.PI&&(M=-.5/t);for(let I=0;I<=t;I++){let F=I/t;f.x=-e*Math.cos(i+F*s)*Math.sin(a+y*o),f.y=e*Math.cos(a+y*o),f.z=e*Math.sin(i+F*s)*Math.sin(a+y*o),_.push(f.x,f.y,f.z),h.copy(f).normalize(),p.push(h.x,h.y,h.z),d.push(F+M,1-y),S.push(l++)}u.push(S)}for(let v=0;v<n;v++)for(let S=0;S<t;S++){let y=u[v][S+1],M=u[v][S],I=u[v+1][S],F=u[v+1][S+1];(v!==0||a>0)&&m.push(y,M,F),(v!==n-1||c<Math.PI)&&m.push(M,I,F)}this.setIndex(m),this.setAttribute("position",new Mt(_,3)),this.setAttribute("normal",new Mt(p,3)),this.setAttribute("uv",new Mt(d,2))}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var cn=class extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nl,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function si(r,e,t){return Gl(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function Qs(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Gl(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var ji=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Uo=class extends ji{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ia,endingEnd:Ia}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Da:s=e,o=2*t-n;break;case Na:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Da:a=e,c=2*n-t;break;case Na:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,m=this._weightNext,_=(n-t)/(i-t),p=_*_,d=p*_,v=-h*d+2*h*p-h*_,S=(1+h)*d+(-1.5-2*h)*p+(-.5+h)*_+1,y=(-1-m)*d+(1.5+m)*p+.5*_,M=m*d-m*p;for(let I=0;I!==o;++I)s[I]=v*a[u+I]+S*a[l+I]+y*a[c+I]+M*a[f+I];return s}},Bo=class extends ji{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),f=1-u;for(let h=0;h!==o;++h)s[h]=a[l+h]*f+a[c+h]*u;return s}},Ho=class extends ji{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},In=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qs(t,this.TimeBufferType),this.values=Qs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qs(e.times,Array),values:Qs(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Uo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case tr:t=this.InterpolantFactoryMethodDiscrete;break;case nr:t=this.InterpolantFactoryMethodLinear;break;case Lr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return nr;case this.InterpolantFactoryMethodSmooth:return Lr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=si(n,s,a),this.values=si(this.values,s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Gl(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=si(this.times),t=si(this.values),n=this.getValueSize(),i=this.getInterpolation()===Lr,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{let f=o*n,h=f-n,m=f+n;for(let _=0;_!==n;++_){let p=t[f+_];if(p!==t[h+_]||p!==t[m+_]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,h=a*n;for(let m=0;m!==n;++m)t[h+m]=t[f+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=si(e,0,a),this.values=si(t,0,a*n)):(this.times=e,this.values=t),this}clone(){let e=si(this.times,0),t=si(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=nr;var Mi=class extends In{};Mi.prototype.ValueTypeName="bool";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=tr;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var ko=class extends In{};ko.prototype.ValueTypeName="color";var Vo=class extends In{};Vo.prototype.ValueTypeName="number";var Go=class extends ji{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let u=l+o;l!==u;l+=4)Sn.slerpFlat(s,0,a,l-o,a,l,c);return s}},ws=class extends In{InterpolantFactoryMethodLinear(e){return new Go(this.times,this.values,this.getValueSize(),e)}};ws.prototype.ValueTypeName="quaternion";ws.prototype.DefaultInterpolation=nr;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends In{};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=tr;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wo=class extends In{};Wo.prototype.ValueTypeName="vector";var Ss=class extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},yr=class extends Ss{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},lo=new gt,El=new N,Tl=new N,vr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xs,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;El.setFromMatrixPosition(e.matrixWorld),t.position.copy(El),Tl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tl),t.updateMatrixWorld(),lo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Al=new gt,cs=new N,co=new N,qo=class extends vr{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new Tt(2,1,1,1),new Tt(0,1,1,1),new Tt(3,1,1,1),new Tt(1,1,1,1),new Tt(3,0,1,1),new Tt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),cs.setFromMatrixPosition(e.matrixWorld),n.position.copy(cs),co.copy(n.position),co.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(co),n.updateMatrixWorld(),i.makeTranslation(-cs.x,-cs.y,-cs.z),Al.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al)}},Kn=class extends Ss{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Xo=class extends vr{constructor(){super(new Ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Es=class extends Ss{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new Xo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Qo="\\[\\]\\.:\\/",Rp=new RegExp("["+Qo+"]","g"),ea="[^"+Qo+"]",Pp="[^"+Qo.replace("\\.","")+"]",Lp=/((?:WC+[\/:])*)/.source.replace("WC",ea),Ip=/(WCOD+)?/.source.replace("WCOD",Pp),Dp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ea),Np=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ea),Fp=new RegExp("^"+Lp+Ip+Dp+Np+"$"),zp=["material","materials","bones","map"],Yo=class{constructor(e,t,n){let i=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rp,"")}static parseTrackName(e){let t=Fp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);zp.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Yo;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Up=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"149"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="149");function Bp(r){let e=new URLSearchParams(location.search),t=(R,A)=>{let x=e.get(R);return x===null?A:x},n=(R,A)=>{let x=e.get(R);return x===null?A:parseFloat(x)},i=matchMedia("(prefers-reduced-motion: reduce)").matches,s=matchMedia("(hover: none)").matches,a=(R,A,x)=>R<A?A:R>x?x:R,o=R=>a(R,0,1),c=(R,A,x)=>R+(A-R)*x,l=(R,A,x)=>{let g=o((x-R)/(A-R));return g*g*(3-2*g)},u=R=>1-Math.pow(1-R,3),f=R=>R<.5?4*R*R*R:1-Math.pow(-2*R+2,3)/2,h=Math.PI*2,m=(R,A,x,g)=>c(R,A,1-Math.exp(-x*g));function _(R){return function(){R|=0,R=R+1831565813|0;let A=Math.imul(R^R>>>15,1|R);return A=A+Math.imul(A^A>>>7,61|A)^A,((A^A>>>14)>>>0)/4294967296}}function p(R){let A=_(R),x=new Uint8Array(256),g=new Uint8Array(512);for(let C=0;C<256;C++)x[C]=C;for(let C=255;C>0;C--){let Y=A()*(C+1)|0,O=x[C];x[C]=x[Y],x[Y]=O}for(let C=0;C<512;C++)g[C]=x[C&255];let T=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],D=C=>C*C*C*(C*(C*6-15)+10);return function(C,Y){let O=Math.floor(C),X=Math.floor(Y),G=O&255,U=X&255,oe=C-O,ce=Y-X,xe=D(oe),ye=D(ce),Q=(me,se,ie)=>{let Ce=T[me&7];return Ce[0]*se+Ce[1]*ie},he=g[g[G]+U],K=g[g[G]+U+1],ee=g[g[G+1]+U],$=g[g[G+1]+U+1];return c(c(Q(he,oe,ce),Q(ee,oe-1,ce),xe),c(Q(K,oe,ce-1),Q($,oe-1,ce-1),xe),ye)}}function d(R,A,x,g,T,D){let C=.5,Y=1,O=0,X=0;for(let G=0;G<(g||4);G++)O+=C*R(A*Y,x*Y),X+=C,C*=D||.5,Y*=T||2;return O/X}function v(R,A){let x=document.createElement("canvas");return x.width=R,x.height=A,x}let S=(R,A,x)=>"rgb("+(R|0)+","+(A|0)+","+(x|0)+")";function y(R,A,x,g,T,D){let C=v(R,A),Y=C.getContext("2d");Y.fillStyle="#808080",Y.fillRect(0,0,R,A);let O=T||3,X=1;for(let G=0;G<(g||5);G++){let U=v(O,O),oe=U.getContext("2d"),ce=oe.createImageData(O,O),xe=ce.data,ye=_(x+G*977);for(let Q=0;Q<O*O;Q++){let he=128+(ye()-.5)*255*(D||1);xe[Q*4]=xe[Q*4+1]=xe[Q*4+2]=a(he,0,255),xe[Q*4+3]=255}oe.putImageData(ce,0,0),Y.globalAlpha=X,Y.globalCompositeOperation=G===0?"source-over":"overlay",Y.imageSmoothingEnabled=!0,Y.imageSmoothingQuality="high",Y.drawImage(U,0,0,R,A),O*=2,X*=.62}return Y.globalAlpha=1,Y.globalCompositeOperation="source-over",C}function M(R,A){let x=R.width,g=R.height,T=v(x,g),D=T.getContext("2d");D.filter="blur(1.1px)",D.drawImage(R,0,0),D.filter="none";let C=D.getImageData(0,0,x,g).data,Y=v(x,g),O=Y.getContext("2d"),X=O.createImageData(x,g),G=X.data,U=(ce,xe)=>C[((xe+g)%g*x+(ce+x)%x)*4]/255,oe=A||2.4;for(let ce=0;ce<g;ce++)for(let xe=0;xe<x;xe++){let ye=(U(xe+1,ce)-U(xe-1,ce))*oe,Q=(U(xe,ce+1)-U(xe,ce-1))*oe,he=-ye,K=Q,ee=1,$=1/Math.hypot(he,K,ee),me=(ce*x+xe)*4;G[me]=(he*$*.5+.5)*255,G[me+1]=(K*$*.5+.5)*255,G[me+2]=(ee*$*.5+.5)*255,G[me+3]=255}return O.putImageData(X,0,0),Y}function I(){let x=v(1024,1024),g=x.getContext("2d");g.fillStyle="#10161a",g.fillRect(0,0,1024,1024),g.globalCompositeOperation="overlay",g.globalAlpha=.82,g.drawImage(y(1024,1024,41,6,3,1),0,0),g.globalAlpha=1,g.globalCompositeOperation="source-over";let T=_(7);for(let Y=1;Y<6;Y++){let O=170.66666666666666*Y;g.fillStyle="rgba(0,0,0,.45)",g.fillRect(0,O-1.5,1024,3),g.fillStyle="rgba(190,205,205,.05)",g.fillRect(0,O+2,1024,2)}for(let Y=0;Y<6;Y++)for(let O=0;O<4;O++){let X=256*(O+.5)+(T()-.5)*14,G=1024/6*(Y+.5),U=g.createRadialGradient(X,G,1,X,G,11);U.addColorStop(0,"rgba(0,0,0,.5)"),U.addColorStop(.7,"rgba(0,0,0,.18)"),U.addColorStop(1,"rgba(0,0,0,0)"),g.fillStyle=U,g.beginPath(),g.arc(X,G,11,0,h),g.fill()}for(let Y=0;Y<190;Y++){let O=T()*1024,X=.6+T()*3.4,G=T()*1024*.5,U=1024*(.4+T()*.7),oe=g.createLinearGradient(0,G,0,G+U),ce=T()>.45;oe.addColorStop(0,"rgba(0,0,0,0)"),oe.addColorStop(.25,ce?"rgba(0,0,0,.20)":"rgba(170,195,200,.045)"),oe.addColorStop(1,"rgba(0,0,0,0)"),g.fillStyle=oe,g.fillRect(O,G,X,U)}g.globalAlpha=.16,g.globalCompositeOperation="overlay",g.drawImage(y(512,512,91,3,128,1.4),0,0,1024,1024),g.globalAlpha=1,g.globalCompositeOperation="source-over";let D=v(1024,1024),C=D.getContext("2d");C.fillStyle="#808080",C.fillRect(0,0,1024,1024),C.globalAlpha=.5,C.drawImage(y(1024,1024,41,5,6,1),0,0),C.globalAlpha=1;for(let Y=1;Y<6;Y++)C.fillStyle="#2a2a2a",C.fillRect(0,1024/6*Y-2,1024,4);return{map:x,normal:M(D,2)}}function F(){let x=v(1024,1024),g=x.getContext("2d"),T=_(23);g.fillStyle="#0a0f12",g.fillRect(0,0,1024,1024);let D=4,C=1024/D;for(let U=0;U<D;U++)for(let oe=0;oe<D;oe++){let ce=.82+T()*.36;g.fillStyle=S(12*ce,17*ce,20*ce),g.fillRect(oe*C+1.5,U*C+1.5,C-3,C-3)}g.globalCompositeOperation="overlay",g.globalAlpha=.55,g.drawImage(y(1024,1024,63,6,4,1),0,0),g.globalAlpha=1,g.globalCompositeOperation="source-over",g.strokeStyle="rgba(0,0,0,.72)",g.lineWidth=3;for(let U=0;U<=D;U++)g.beginPath(),g.moveTo(U*C,0),g.lineTo(U*C,1024),g.stroke(),g.beginPath(),g.moveTo(0,U*C),g.lineTo(1024,U*C),g.stroke();let Y=v(1024,1024),O=Y.getContext("2d");O.fillStyle="#8c8c8c",O.fillRect(0,0,1024,1024),O.globalAlpha=.35,O.drawImage(y(1024,1024,63,5,8,1),0,0),O.globalAlpha=1,O.strokeStyle="#303030",O.lineWidth=5;for(let U=0;U<=D;U++)O.beginPath(),O.moveTo(U*C,0),O.lineTo(U*C,1024),O.stroke(),O.beginPath(),O.moveTo(0,U*C),O.lineTo(1024,U*C),O.stroke();let X=v(512,512),G=X.getContext("2d");return G.fillStyle="#1c1c1c",G.fillRect(0,0,512,512),G.globalAlpha=.95,G.globalCompositeOperation="lighten",G.drawImage(y(512,512,77,4,3,1.5),0,0),G.globalAlpha=1,G.globalCompositeOperation="source-over",{map:x,normal:M(Y,1.5),rough:X}}function V(R,A){let x=A||{},g=512,T=512,D=v(g,T),C=D.getContext("2d"),Y=v(g,T),O=Y.getContext("2d"),X=v(g,T),G=X.getContext("2d"),U=_(R||3),oe=x.base||[30,23,19];C.fillStyle=S(oe[0],oe[1],oe[2]),C.fillRect(0,0,g,T),O.fillStyle="#808080",O.fillRect(0,0,g,T),G.fillStyle=x.rough||"#d6d6d6",G.fillRect(0,0,g,T);let ce=x.boards===void 0?7:x.boards,xe=[0];if(ce>0){let Q=[],he=0;for(let ee=0;ee<ce;ee++){let $=.7+U()*.6;Q.push($),he+=$}let K=0;Q.forEach(ee=>{K+=ee/he*g,xe.push(K)})}else xe.push(g);let ye=(Q,he,K,ee)=>{if(!(Q.length<2)){he.beginPath(),he.moveTo(Q[0][0],Q[0][1]);for(let $=1;$<Q.length;$++)he.lineTo(Q[$][0],Q[$][1]);he.strokeStyle=K,he.lineWidth=ee,he.lineCap="round",he.stroke()}};for(let Q=0;Q<xe.length-1;Q++){let he=xe[Q],K=xe[Q+1],ee=K-he,$=.8+U()*.44,me=he+ee*(U()*2.8-.9),se=ee*(.12+U()*1.7),ie=ee*(.1+U()*.4),Ce=1+(U()*2|0),Oe=U()*h,Ze=Xe=>se+Math.sin(Xe/T*h*Ce+Oe)*ie,ut=2.4+U()*5;[C,O,G].forEach(Xe=>{Xe.save(),Xe.beginPath(),Xe.rect(he,0,ee,T),Xe.clip()}),C.fillStyle=S(oe[0]*$,oe[1]*$,oe[2]*$),C.fillRect(he,0,ee,T);for(let Xe=1;Xe*ut<ee*3.4+se+ie;Xe++){let mt=Xe*ut*(.88+U()*.24),Rt=.42+U()*.38,St=.8+U()*1.9;for(let Wt of[-1,1]){let $t=[],En=()=>{ye($t,C,"rgba(0,0,0,"+Rt.toFixed(2)+")",St),ye($t,O,"rgba(0,0,0,"+(Rt*.8).toFixed(2)+")",St),ye($t.map(Vn=>[Vn[0]+Wt*(St+.6),Vn[1]]),C,"rgba(150,120,96,"+(Rt*.3).toFixed(2)+")",St*.7),$t=[]};for(let Vn=-3;Vn<=T+3;Vn+=3){let Ti=Ze(Vn),Ai=mt*mt-Ti*Ti;if(Ai<=0){En();continue}$t.push([me+Wt*Math.sqrt(Ai),Vn])}En()}}for(let Xe=0;Xe<220;Xe++){let mt=he+U()*ee,Rt=U()*T,St=1.5+U()*6;C.fillStyle="rgba(0,0,0,"+(.1+U()*.22)+")",C.fillRect(mt,Rt,.7+U()*.7,St),O.fillStyle="rgba(0,0,0,.22)",O.fillRect(mt,Rt,.8,St)}if(U()>.55){let Xe=he+ee*(.2+U()*.6),mt=U()*T,Rt=2.5+U()*5;for(let St=5;St>=1;St--){let Wt=St/5;C.strokeStyle="rgba(0,0,0,"+(.5-Wt*.25).toFixed(2)+")",C.lineWidth=1.1,C.beginPath(),C.ellipse(Xe,mt,Rt*Wt*1.5,Rt*Wt*2.4,0,0,h),C.stroke(),O.strokeStyle="rgba(0,0,0,.30)",O.lineWidth=1.1,O.beginPath(),O.ellipse(Xe,mt,Rt*Wt*1.5,Rt*Wt*2.4,0,0,h),O.stroke()}}for(let Xe=0;Xe<5;Xe++){let mt=he+U()*ee,Rt=U()*T,St=20+U()*120,Wt=[];for(let $t=Rt;$t<Rt+St;$t+=6)Wt.push([mt+Math.sin($t*.07)*1.4,$t]);ye(Wt,C,"rgba(0,0,0,.62)",.7+U()*1.2),ye(Wt,O,"rgba(0,0,0,.55)",.7+U()*1.2)}[C,O,G].forEach(Xe=>Xe.restore()),ce>0&&(C.fillStyle="rgba(0,0,0,.80)",C.fillRect(K-1.1,0,2.2,T),C.fillStyle="rgba(158,130,106,.14)",C.fillRect(K+1.1,0,1.1,T),O.fillStyle="rgba(0,0,0,.85)",O.fillRect(K-1.3,0,2.6,T),O.fillStyle="rgba(255,255,255,.35)",O.fillRect(K+1.3,0,1.6,T),G.fillStyle="rgba(255,255,255,.5)",G.fillRect(K-1.6,0,3.2,T))}for(let Q=0;Q<90;Q++){let he=U()*g,K=U()*T,ee=T*(.15+U()*.5),$=C.createLinearGradient(0,K,0,K+ee);$.addColorStop(0,"rgba(0,0,0,0)"),$.addColorStop(.3,"rgba(0,0,0,"+(.1+U()*.16)+")"),$.addColorStop(1,"rgba(0,0,0,0)"),C.fillStyle=$,C.fillRect(he,K,.8+U()*3.4,ee)}return{map:D,normal:M(Y,x.relief||2.4),rough:X}}function b(R,A){let x=A||{},g=512,T=512,D=v(g,T),C=D.getContext("2d"),Y=v(g,T),O=Y.getContext("2d"),X=v(g,T),G=X.getContext("2d"),U=_(R||17),oe=x.base||[46,51,53];C.fillStyle=S(oe[0],oe[1],oe[2]),C.fillRect(0,0,g,T),O.fillStyle="#808080",O.fillRect(0,0,g,T),G.fillStyle="#e8e8e8",G.fillRect(0,0,g,T);let ce=(K,ee,$,me,se)=>{for(let ie=0;ie<K;ie++){let Ce=$+U()*(me-$),Oe=U()*g,Ze=U()*T;C.fillStyle=ee(U),C.beginPath(),C.ellipse(Oe,Ze,Ce,Ce*(.55+U()*.85),U()*h,0,h),C.fill(),se&&(O.fillStyle=se,O.beginPath(),O.ellipse(Oe,Ze,Ce,Ce*.8,0,0,h),O.fill())}};ce(3400,K=>"rgba(206,210,204,"+(.06+K()*.2)+")",.6,2.8,"rgba(255,255,255,.13)"),ce(2e3,K=>"rgba(126,136,134,"+(.07+K()*.2)+")",.8,3.4,null),ce(1300,K=>"rgba(8,10,12,"+(.14+K()*.38)+")",.5,2.4,"rgba(0,0,0,.16)");for(let K=0;K<220;K++){let ee=U()*T,$=U()*g,me=5+U()*24,se=-.26+U()*.52;[[C,"rgba(0,0,0,.22)","rgba(210,216,212,.08)"],[O,"rgba(0,0,0,.34)","rgba(255,255,255,.26)"]].forEach(([ie,Ce,Oe])=>{ie.save(),ie.translate($,ee),ie.rotate(se),ie.fillStyle=Ce,ie.fillRect(0,0,me,1.5),ie.fillStyle=Oe,ie.fillRect(0,1.5,me,1),ie.restore()})}for(let K=0;K<260;K++){let ee=U()*g,$=U()*T,me=.8+U()*U()*5,se=C.createRadialGradient(ee-me*.3,$-me*.3,me*.1,ee,$,me);se.addColorStop(0,"rgba(0,0,0,.42)"),se.addColorStop(.7,"rgba(0,0,0,.16)"),se.addColorStop(1,"rgba(198,204,198,.10)"),C.fillStyle=se,C.beginPath(),C.arc(ee,$,me,0,h),C.fill(),O.fillStyle="rgba(0,0,0,.40)",O.beginPath(),O.arc(ee,$,me*.8,0,h),O.fill()}for(let K=0;K<16;K++){let ee=U()*g,$=U()*T,me=U()*h,se=[[ee,$]];for(let ie=0;ie<24;ie++)me+=(U()-.5)*.9,ee+=Math.cos(me)*9,$+=Math.sin(me)*9,se.push([ee,$]);[[C,"rgba(0,0,0,.46)"],[O,"rgba(0,0,0,.55)"]].forEach(([ie,Ce])=>{ie.beginPath(),ie.moveTo(se[0][0],se[0][1]),se.forEach(Oe=>ie.lineTo(Oe[0],Oe[1])),ie.strokeStyle=Ce,ie.lineWidth=.7+U()*.9,ie.stroke()})}let xe=O.getImageData(0,0,g,T).data,ye=C.getImageData(0,0,g,T),Q=G.getImageData(0,0,g,T),he=x.moss===void 0?1:x.moss;for(let K=0;K<g*T;K++){let ee=a((.5-xe[K*4]/255)*4.2,0,1)*he;if(ee<=0)continue;let $=K*4;ye.data[$]=c(ye.data[$],30,ee*.75),ye.data[$+1]=c(ye.data[$+1],44,ee*.95),ye.data[$+2]=c(ye.data[$+2],28,ee*.85),Q.data[$]=Q.data[$+1]=Q.data[$+2]=c(Q.data[$],255,ee*.5)}return C.putImageData(ye,0,0),G.putImageData(Q,0,0),{map:D,normal:M(Y,x.relief||3.2),rough:X}}function P(){let x=V(131,{base:[34,22,17],boards:0}),g=v(512,512),T=g.getContext("2d"),D=v(512,512),C=D.getContext("2d"),Y=v(512,512),O=Y.getContext("2d"),X=_(5);T.drawImage(x.map,0,0),C.fillStyle="#808080",C.fillRect(0,0,512,512),O.fillStyle="#8c8c8c",O.fillRect(0,0,512,512),T.globalAlpha=.8,T.fillStyle="#7c1610",T.fillRect(0,0,512,512),T.globalAlpha=1,T.globalCompositeOperation="multiply",T.globalAlpha=.42,T.drawImage(x.map,0,0),T.globalAlpha=1,T.globalCompositeOperation="source-over",T.globalCompositeOperation="overlay",T.globalAlpha=.5,T.drawImage(y(512,512,313,5,3,1),0,0),T.globalAlpha=1,T.globalCompositeOperation="source-over";for(let G=0;G<190;G++){let U=X()*512,oe=X()*512,ce=X()*h;T.strokeStyle="rgba(24,8,6,"+(.28+X()*.4)+")",C.strokeStyle="rgba(0,0,0,.42)",T.lineWidth=C.lineWidth=.5+X()*.7,T.beginPath(),C.beginPath(),T.moveTo(U,oe),C.moveTo(U,oe);for(let xe=0;xe<5+X()*9;xe++)ce+=(X()-.5)*1.5,U+=Math.cos(ce)*(5+X()*9),oe+=Math.sin(ce)*(5+X()*9),T.lineTo(U,oe),C.lineTo(U,oe);T.stroke(),C.stroke()}for(let G=0;G<40;G++){let U=X()*512,oe=X()*512,ce=2+X()*X()*17,xe=[];for(let Q=0;Q<9;Q++){let he=Q/9*h,K=ce*(.55+X()*.75);xe.push([U+Math.cos(he)*K,oe+Math.sin(he)*K])}let ye=Q=>{Q.beginPath(),Q.moveTo(xe[0][0],xe[0][1]);for(let he=1;he<xe.length;he++){let K=xe[he],ee=xe[(he+1)%xe.length];Q.quadraticCurveTo(K[0],K[1],(K[0]+ee[0])/2,(K[1]+ee[1])/2)}Q.closePath()};T.save(),ye(T),T.clip(),T.drawImage(x.map,0,0),T.fillStyle="rgba(0,0,0,.22)",T.fillRect(0,0,512,512),T.restore(),ye(T),T.strokeStyle="rgba(196,110,76,.30)",T.lineWidth=1.2,T.stroke(),ye(C),C.fillStyle="rgba(0,0,0,.34)",C.fill(),C.strokeStyle="rgba(255,255,255,.30)",C.lineWidth=1.6,C.stroke(),ye(O),O.fillStyle="rgba(240,240,240,.75)",O.fill()}for(let G=0;G<120;G++){let U=X()*512,oe=.6+X()*2.6,ce=X()*512,xe=512*(.2+X()*.6),ye=T.createLinearGradient(0,ce,0,ce+xe);ye.addColorStop(0,"rgba(0,0,0,0)"),ye.addColorStop(.3,X()>.5?"rgba(12,4,4,.24)":"rgba(210,150,120,.05)"),ye.addColorStop(1,"rgba(0,0,0,0)"),T.fillStyle=ye,T.fillRect(U,ce,oe,xe)}return O.globalAlpha=.6,O.globalCompositeOperation="multiply",O.drawImage(y(512,512,401,4,6,1.2),0,0),O.globalAlpha=1,O.globalCompositeOperation="source-over",{map:g,normal:M(D,2.2),rough:Y}}function k(){let x=v(1024,768),g=x.getContext("2d");g.clearRect(0,0,1024,768),g.fillStyle="rgba(228,222,206,.055)",g.fillRect(0,0,1024,768),g.strokeStyle="rgba(10,8,7,.88)";let T=12,D=9;g.lineWidth=5;for(let C=1;C<T;C++)g.beginPath(),g.moveTo(1024/T*C,0),g.lineTo(1024/T*C,768),g.stroke();for(let C=1;C<D;C++)g.beginPath(),g.moveTo(0,768/D*C),g.lineTo(1024,768/D*C),g.stroke();return g.lineWidth=13,g.strokeStyle="rgba(8,6,5,.95)",g.strokeRect(0,0,1024,768),g.beginPath(),g.moveTo(1024/2,0),g.lineTo(1024/2,768),g.stroke(),x}function de(){let A=v(128,128),x=A.getContext("2d");x.translate(128/2,128*.92),x.scale(128/2.2,-128/2.2),x.beginPath();let g=5,T=1.9;for(let C=0;C<g;C++){let Y=-T/2+T*(C/(g-1))+Math.PI/2,O=C===2?.96:C===1||C===3?.82:.6,X=.17;x.moveTo(0,.02),x.lineTo(Math.cos(Y-X)*O*.55,Math.sin(Y-X)*O*.55),x.lineTo(Math.cos(Y)*O,Math.sin(Y)*O),x.lineTo(Math.cos(Y+X)*O*.55,Math.sin(Y+X)*O*.55),x.closePath()}x.fillStyle="#fff",x.fill(),x.lineWidth=.05,x.strokeStyle="#fff",x.stroke(),x.setTransform(1,0,0,1,0,0),x.globalCompositeOperation="destination-out";let D=_(3);for(let C=0;C<40;C++)x.beginPath(),x.arc(D()*128,D()*128,D()*3,0,h),x.fill();return A}function re(){let x=v(512,512),g=x.getContext("2d"),T=g.createLinearGradient(0,0,0,512);T.addColorStop(0,"rgb(6,10,15)"),T.addColorStop(.34,"rgb(13,22,31)"),T.addColorStop(.66,"rgb(17,26,34)"),T.addColorStop(.88,"rgb(24,35,42)"),T.addColorStop(1,"rgb(14,22,28)"),g.fillStyle=T,g.fillRect(0,0,512,512),g.globalAlpha=.34,g.globalCompositeOperation="overlay",g.drawImage(y(512,512,313,5,3,.9),0,0),g.globalAlpha=1,g.globalCompositeOperation="source-over";let D=g.createRadialGradient(512*.68,512*.95,4,512*.68,512*.95,512*.44);D.addColorStop(0,"rgba(150,66,26,.30)"),D.addColorStop(.5,"rgba(96,44,22,.12)"),D.addColorStop(1,"rgba(0,0,0,0)"),g.fillStyle=D,g.fillRect(0,0,512,512);let C=_(881);for(let Y=0;Y<420;Y++){let O=C()*512,X=C()*512*.78,G=.5+C()*C()*1.7;g.fillStyle="rgba(214,232,240,"+(.12+C()*.42)*(1-X/512)+")",g.beginPath(),g.arc(O,X,G,0,h),g.fill()}return x}function Z(){let x=v(2048,512),g=x.getContext("2d"),T=p(1207),D=_(1207);g.beginPath(),g.moveTo(0,512);for(let C=0;C<=2048;C+=4){let Y=C/2048,O=.46+.3*(d(T,Y*2.4,.5,4,2.1,.55)*.5+.5)+.16*(d(T,Y*7.5,3.1,3,2.2,.5)*.5+.5);g.lineTo(C,512-O*512*.84)}g.lineTo(2048,512),g.closePath(),g.fillStyle="#050809",g.fill(),g.fillStyle="#050809";for(let C=0;C<460;C++){let Y=D()*2048,O=Y/2048,G=512-(.46+.3*(d(T,O*2.4,.5,4,2.1,.55)*.5+.5)+.16*(d(T,O*7.5,3.1,3,2.2,.5)*.5+.5))*512*.84,U=8+D()*30,oe=3+D()*6;g.beginPath(),g.moveTo(Y,G-U),g.lineTo(Y+oe,G+4),g.lineTo(Y-oe,G+4),g.closePath(),g.fill()}return x}function W(){let x=v(512,512),g=x.getContext("2d"),T=v(512,512),D=T.getContext("2d");g.fillStyle="#151c20",g.fillRect(0,0,512,512),D.fillStyle="#606060",D.fillRect(0,0,512,512);let C=14,Y=512/C;for(let X=0;X<C;X++){let G=g.createLinearGradient(X*Y,0,(X+1)*Y,0);G.addColorStop(0,"rgba(0,0,0,.62)"),G.addColorStop(.3,"rgba(148,178,192,.13)"),G.addColorStop(.66,"rgba(84,110,124,.05)"),G.addColorStop(1,"rgba(0,0,0,.62)"),g.fillStyle=G,g.fillRect(X*Y,0,Y,512),g.fillStyle="rgba(0,0,0,.50)",g.fillRect(X*Y-3,0,6,512),g.fillStyle="rgba(168,196,208,.09)",g.fillRect(X*Y-1.2,0,1.6,512);let U=D.createLinearGradient(X*Y,0,(X+1)*Y,0);U.addColorStop(0,"#2c2c2c"),U.addColorStop(.5,"#eaeaea"),U.addColorStop(1,"#2c2c2c"),D.fillStyle=U,D.fillRect(X*Y,0,Y,512)}let O=_(211);for(let X=0;X<512;X+=512/9){g.fillStyle="rgba(0,0,0,.34)",g.fillRect(0,X,512,3.5),D.fillStyle="rgba(0,0,0,.55)",D.fillRect(0,X,512,3.5),D.fillStyle="rgba(255,255,255,.28)",D.fillRect(0,X+3.5,512,2);for(let G=0;G<26;G++)g.fillStyle=O()>.5?"rgba(0,0,0,.30)":"rgba(96,116,92,.10)",g.fillRect(O()*512,X+1,2+O()*9,2+O()*3)}return g.globalCompositeOperation="overlay",g.globalAlpha=.46,g.drawImage(y(256,256,211,5,3,1),0,0,512,512),g.globalAlpha=1,g.globalCompositeOperation="source-over",D.globalAlpha=.3,D.drawImage(y(256,256,213,4,16,1.2),0,0,512,512),D.globalAlpha=1,{map:x,normal:M(T,2.2)}}function ue(){let A=v(512,512),x=A.getContext("2d"),g=512/2-1,T=_(91),D=(ye,Q)=>[512/2+ye*g,512/2+Q*g];x.beginPath(),x.arc(512/2,512/2,g,0,h),x.closePath(),x.save(),x.clip();let C=x.createRadialGradient(512*.46,512*.44,512*.05,512/2,512/2,g);C.addColorStop(0,"rgb(150,150,150)"),C.addColorStop(.55,"rgb(158,158,158)"),C.addColorStop(.86,"rgb(178,178,178)"),C.addColorStop(1,"rgb(196,196,196)"),x.fillStyle=C,x.fillRect(0,0,512,512),x.globalCompositeOperation="overlay",x.globalAlpha=.5,x.drawImage(y(256,256,517,6,4,1.1),0,0,512,512),x.globalAlpha=1,x.globalCompositeOperation="source-over";let Y=[[-.52,-.06,.46,.8],[-.26,-.38,.31,.92],[.13,-.31,.2,.88],[.3,-.08,.23,.84],[.45,.12,.15,.78],[.27,.27,.12,.74],[.57,-.3,.12,.95],[-.27,.3,.19,.7],[-.47,.25,.13,.72]],O=v(512,512),X=O.getContext("2d");Y.forEach(([ye,Q,he,K])=>{for(let ee=0;ee<22;ee++){let $=T()*h,me=T()*he*.66,[se,ie]=D(ye+Math.cos($)*me,Q+Math.sin($)*me*.8),Ce=he*g*(.3+T()*.46),Oe=X.createRadialGradient(se,ie,Ce*.2,se,ie,Ce);Oe.addColorStop(0,"rgba(0,0,0,"+(K*.14).toFixed(3)+")"),Oe.addColorStop(1,"rgba(0,0,0,0)"),X.fillStyle=Oe,X.beginPath(),X.arc(se,ie,Ce,0,h),X.fill()}}),x.save(),x.filter="blur(9px)",x.globalAlpha=.9,x.drawImage(O,0,0),x.restore(),x.globalCompositeOperation="overlay",x.globalAlpha=.18,x.drawImage(y(256,256,811,4,11,1.2),0,0,512,512),x.globalAlpha=1,x.globalCompositeOperation="source-over";let G=v(512,512),U=G.getContext("2d");[[-.1,.54,150,1],[-.28,-.07,80,.6],[-.46,-.04,60,.45]].forEach(([ye,Q,he,K])=>{let[ee,$]=D(ye,Q);for(let me=0;me<he;me++){let se=T()*h,ie=g*(.3+T()*T()*1.3),Ce=g*(.08+T()*.06),Oe=[ee+Math.cos(se)*Ce,$+Math.sin(se)*Ce],Ze=[ee+Math.cos(se)*ie,$+Math.sin(se)*ie],ut=U.createLinearGradient(Oe[0],Oe[1],Ze[0],Ze[1]);ut.addColorStop(0,"rgba(255,255,255,"+(.085*K).toFixed(3)+")"),ut.addColorStop(.4,"rgba(255,255,255,"+(.055*K).toFixed(3)+")"),ut.addColorStop(1,"rgba(255,255,255,0)"),U.strokeStyle=ut,U.lineWidth=.8+T()*2.4,U.lineCap="round",U.beginPath(),U.moveTo(Oe[0],Oe[1]),U.quadraticCurveTo(ee+Math.cos(se+.06)*ie*.55,$+Math.sin(se+.06)*ie*.55,Ze[0],Ze[1]),U.stroke()}}),x.save(),x.filter="blur(2.4px)",x.globalCompositeOperation="lighter",x.globalAlpha=.62,x.drawImage(G,0,0),x.restore();let oe=(ye,Q)=>Y.some(([he,K,ee])=>Math.hypot(ye-he,(Q-K)*1.15)<ee*.82);for(let ye=0;ye<620;ye++){let Q=T()*h,he=Math.sqrt(T())*.97,K=Math.cos(Q)*he,ee=Math.sin(Q)*he;if(oe(K,ee)&&T()>.12)continue;let[$,me]=D(K,ee),se=T()>.975,ie=(1+T()*T()*T()*(se?34:11))*(512/512),Ce=.55+.45*Math.sqrt(Math.max(0,1-he*he)),Oe=Math.sqrt(Math.max(0,1-he*he))*.72+.28;x.save(),x.translate($,me),x.rotate(Math.atan2(ee,K)),x.scale(Oe,1),x.rotate(-Math.atan2(ee,K));let Ze=Math.max(.8,ie*.26),ut=x.createLinearGradient(-ie,-ie,ie,ie);if(ut.addColorStop(0,"rgba(255,255,255,"+(.34*Ce).toFixed(3)+")"),ut.addColorStop(.5,"rgba(255,255,255,0)"),ut.addColorStop(1,"rgba(0,0,0,"+(.38*Ce).toFixed(3)+")"),x.strokeStyle=ut,x.lineWidth=Ze,x.beginPath(),x.arc(0,0,Math.max(.6,ie-Ze*.5),0,h),x.stroke(),ie>3){let Xe=x.createLinearGradient(-ie,-ie,ie,ie);Xe.addColorStop(0,"rgba(0,0,0,"+(.21*Ce).toFixed(3)+")"),Xe.addColorStop(1,"rgba(255,255,255,"+(.07*Ce).toFixed(3)+")"),x.fillStyle=Xe,x.beginPath(),x.arc(0,0,ie-Ze,0,h),x.fill()}ie>13&&(x.fillStyle="rgba(255,255,255,"+(.14*Ce).toFixed(3)+")",x.beginPath(),x.arc(-ie*.04,-ie*.04,ie*.11,0,h),x.fill()),x.restore()}x.globalCompositeOperation="overlay",x.globalAlpha=.13,x.drawImage(y(512,512,977,2,210,1.3),0,0,512,512),x.globalAlpha=1,x.globalCompositeOperation="source-over";let ce=x.createRadialGradient(512*.4,512*.38,512*.18,512*.52,512*.56,512*.72);ce.addColorStop(0,"rgba(0,0,0,0)"),ce.addColorStop(1,"rgba(0,0,0,.30)"),x.fillStyle=ce,x.fillRect(0,0,512,512),x.restore();let xe=x.createRadialGradient(512/2,512/2,g-2.5,512/2,512/2,g);return xe.addColorStop(0,"rgba(0,0,0,1)"),xe.addColorStop(1,"rgba(0,0,0,0)"),x.globalCompositeOperation="destination-in",x.fillStyle=xe,x.fillRect(0,0,512,512),x.globalCompositeOperation="source-over",A}function _e(R,A){let g=v(256,256),T=g.getContext("2d"),D=T.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);return D.addColorStop(0,R||"rgba(255,255,255,1)"),D.addColorStop(.28,A||"rgba(255,255,255,.36)"),D.addColorStop(.62,"rgba(255,255,255,.07)"),D.addColorStop(1,"rgba(255,255,255,0)"),T.fillStyle=D,T.fillRect(0,0,256,256),g}function Ae(){let A=v(128,128),x=A.getContext("2d"),g=x.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return g.addColorStop(0,"rgba(255,255,255,1)"),g.addColorStop(.07,"rgba(236,250,250,.92)"),g.addColorStop(.16,"rgba(190,230,238,.40)"),g.addColorStop(.34,"rgba(132,192,212,.13)"),g.addColorStop(.62,"rgba(88,146,172,.035)"),g.addColorStop(1,"rgba(70,120,142,0)"),x.fillStyle=g,x.fillRect(0,0,128,128),A}function ge(R,A){A=A||{};let x=A.w||2048,g=A.h||1024,T=v(x,g),D=T.getContext("2d"),C=_(R),Y=p(R*13+5),O=A.crest!==void 0?A.crest:.46,X=A.peak!==void 0?A.peak:.6,G=A.wide!==void 0?A.wide:.4,U=new Float32Array(x);for(let me=0;me<x;me++){let se=me/x,ie=Math.exp(-Math.pow((se-O)/G,2)*2.1);ie+=.46*Math.exp(-Math.pow((se-O-(A.crest2||.4))/(G*.62),2)*3.1),ie+=.3*Math.exp(-Math.pow((se-O+(A.crest3||.46))/(G*.7),2)*3.4);let Ce=d(Y,se*4.2,.5,4,2.05,.52)*.5+.5;U[me]=ie*(.8+.38*Ce)}let oe=0;for(let me=0;me<x;me++)oe=Math.max(oe,U[me]);for(let me=0;me<x;me++)U[me]*=g*X/oe;let ce=me=>g-U[a(me|0,0,x-1)];D.beginPath(),D.moveTo(0,g);for(let me=0;me<x;me+=3)D.lineTo(me,ce(me));D.lineTo(x,ce(x-1)),D.lineTo(x,g),D.closePath();let xe=D.createLinearGradient(0,g-g*X,0,g);xe.addColorStop(0,"#1a2416"),xe.addColorStop(.38,"#0e150c"),xe.addColorStop(1,"#040604"),D.fillStyle=xe,D.fill(),D.save(),D.clip(),D.globalCompositeOperation="overlay",D.globalAlpha=.5,D.drawImage(y(1024,512,R+3,5,3,1),0,0,x,g),D.restore(),D.globalAlpha=1,D.globalCompositeOperation="source-over";let ye=A.light||[-.42,-.91],Q=A.blades||15e3,he=[];for(let me=0;me<Q;me++){let se=C()*x|0,ie=ce(se),Ce=Math.pow(C(),2.3),Oe=ie+Ce*(g-ie)+(C()-.5)*6;Oe>g+20||he.push({i:se,by:Oe,depth:Ce,r:C(),r2:C(),r3:C()})}he.sort((me,se)=>me.by-se.by);let K=(A.len||46)*(x/2048);for(let me=0;me<he.length;me++){let se=he[me],ie=se.i+(se.r-.5)*5,Ce=1-.52*se.depth,Oe=K*(.36+1.05*se.r2*se.r2)*Ce,Ze=(se.r3-.5)*1.5+(A.wind||.16),ut=ie+Ze*Oe*.95,Xe=se.by-Oe,mt=ie+Ze*Oe*.3,Rt=se.by-Oe*.62,St=(.9+1.9*se.r)*Ce*(x/2048),Wt=ut-ie,$t=Xe-se.by,En=1/Math.hypot(Wt,$t),Vn=o((-(Wt*En)*ye[0]-$t*En*ye[1])*.5+.5),Ti=Math.pow(1-se.depth,1.35),Ai=.1+.46*Ti+.34*Vn*Ti,Sr=o(Ti*1.25-.42)*(A.warm!==void 0?A.warm:1),ql=(10+78*Ai+44*Sr)*(A.tintR||1),Xl=(16+106*Ai+24*Sr)*(A.tintG||1),Yl=(12+80*Ai+16*Sr)*(A.tintB||1);D.fillStyle=S(ql,Xl,Yl),D.beginPath(),D.moveTo(ie-St,se.by),D.quadraticCurveTo(mt-St*.35,Rt,ut,Xe),D.quadraticCurveTo(mt+St*.35,Rt,ie+St,se.by),D.closePath(),D.fill()}D.globalCompositeOperation="source-atop";let ee=D.createLinearGradient(A.bounceFrom||x,0,A.bounceTo||0,0);ee.addColorStop(0,"rgba(180,40,16,.24)"),ee.addColorStop(.55,"rgba(140,32,14,.07)"),ee.addColorStop(1,"rgba(0,0,0,0)"),D.fillStyle=ee,D.fillRect(0,0,x,g);let $=D.createLinearGradient(0,g-g*X*1.05,0,g);return $.addColorStop(0,"rgba(146,182,180,.13)"),$.addColorStop(.5,"rgba(0,0,0,0)"),$.addColorStop(1,"rgba(0,0,0,.70)"),D.fillStyle=$,D.fillRect(0,0,x,g),D.globalCompositeOperation="source-over",T}function Te(R,A){A=A||{};let x=A.w||1536,g=A.h||1024,T=v(x,g),D=T.getContext("2d"),C=_(R),Y=p(R*7+11);(A.blobs||[[.3,.7,.4,.34],[.66,.82,.38,.28],[.46,.96,.52,.34]]).forEach((G,U)=>{let oe=G[0]*x,ce=G[1]*g,xe=G[2]*x*.5,ye=G[3]*g*.8;D.beginPath();for(let K=0;K<=128;K++){let ee=K/128*h,$=1+.17*d(Y,Math.cos(ee)*1.7+U*9,Math.sin(ee)*1.7,4,2.1,.55),me=oe+Math.cos(ee)*xe*$,se=ce+Math.sin(ee)*ye*$;K===0?D.moveTo(me,se):D.lineTo(me,se)}D.closePath();let Q=D.createLinearGradient(oe-xe,ce-ye,oe+xe*.4,ce+ye),he=1-U*.16;Q.addColorStop(0,S(30*he,39*he,40*he)),Q.addColorStop(.42,S(14*he,19*he,20*he)),Q.addColorStop(1,S(6,9,9)),D.fillStyle=Q,D.fill(),D.save(),D.clip(),D.globalCompositeOperation="overlay",D.globalAlpha=.62,D.drawImage(y(768,512,R+U*31,6,4,1.1),0,0,x,g),D.globalAlpha=1,D.globalCompositeOperation="source-over";for(let K=0;K<26;K++){D.beginPath();let ee=oe+(C()-.5)*xe*2,$=ce+(C()-.5)*ye*1.6;D.moveTo(ee,$);for(let me=0;me<3;me++)D.lineTo(ee+(C()-.5)*xe*.8,$+(C()-.5)*ye*.6);D.closePath(),D.fillStyle=C()>.5?"rgba(255,255,255,.030)":"rgba(0,0,0,.14)",D.fill()}D.lineWidth=3+C()*4,D.strokeStyle="rgba(178,206,206,.20)",D.beginPath();for(let K=0;K<=60;K++){let ee=Math.PI+K/60*Math.PI*.78,$=1+.17*d(Y,Math.cos(ee)*1.7+U*9,Math.sin(ee)*1.7,4,2.1,.55),me=oe+Math.cos(ee)*xe*$*.97,se=ce+Math.sin(ee)*ye*$*.97;K===0?D.moveTo(me,se):D.lineTo(me,se)}D.stroke(),D.restore()}),D.globalCompositeOperation="source-atop";for(let G=0;G<2600;G++){let U=C()*x,oe=g-Math.pow(C(),1.7)*g*.5;D.fillStyle="rgba("+(40+C()*40|0)+","+(60+C()*46|0)+",34,"+(.05+C()*.22)+")",D.fillRect(U,oe,1.6+C()*2.4,3+C()*9)}let X=D.createLinearGradient(x,0,0,0);return X.addColorStop(0,"rgba(190,48,22,.16)"),X.addColorStop(.7,"rgba(0,0,0,0)"),D.fillStyle=X,D.fillRect(0,0,x,g),D.globalCompositeOperation="source-over",T}function Me(R){let g=v(1536,1024),T=g.getContext("2d"),D=_(R),C=[];function Y(U,oe,ce,xe,ye,Q){let K=U,ee=oe,$=ce;T.beginPath(),T.moveTo(K,ee);for(let me=0;me<7;me++)$+=(D()-.5)*.3,K+=Math.cos($)*xe/7,ee+=Math.sin($)*xe/7,T.lineTo(K,ee);if(T.lineCap="round",T.lineWidth=ye,T.strokeStyle="rgba("+(26+Q*5|0)+","+(22+Q*4|0)+","+(22+Q*4|0)+",1)",T.stroke(),Q<4&&xe>34){let me=Q===0?3:2;for(let se=0;se<me;se++)Y(K,ee,$+(D()-.5)*1.25,xe*(.58+D()*.18),ye*.58,Q+1)}else for(let me=0;me<9;me++)C.push([K+(D()-.5)*78,ee+(D()-.5)*78,D()*h,12+D()*20,D()])}Y(1536*1.02,1024*.06,Math.PI*.78,420,26,0),Y(1536*.86,-1024*.02,Math.PI*.62,330,18,1);let O=de(),X=v(128,128),G=X.getContext("2d");return C.forEach(U=>{G.clearRect(0,0,128,128),G.drawImage(O,0,0),G.globalCompositeOperation="source-in";let oe=U[4];G.fillStyle=S(96+oe*96,14+oe*22,16+oe*18),G.fillRect(0,0,128,128),G.globalCompositeOperation="source-over",T.save(),T.translate(U[0],U[1]),T.rotate(U[2]),T.globalAlpha=.78+oe*.22,T.drawImage(X,-U[3],-U[3],U[3]*2,U[3]*2),T.restore()}),T.globalAlpha=1,g}let ke=()=>Math.max(1,r.clientWidth),J=()=>Math.max(1,r.clientHeight),ae,fe,be,j=1,ze=t("q",s?"low":"high")==="low",Ue=t("post","1")!=="0",Ne=t("shadow",ze?"0":"1")!=="0",pt=n("dpr",ze?1.4:1.8),Ve={scale:1,acc:0,n:0,locked:t("adapt","1")==="0"};function Je(){if(t("nogl","0")!=="0")throw new Error("webgl disabled");ae=new Ko({canvas:r,antialias:!Ue,alpha:!1,powerPreference:"high-performance"}),ae.setPixelRatio(Math.min(devicePixelRatio||1,pt)),ae.setSize(ke(),J(),!0),ae.outputEncoding=Ue?Jn:xt,ae.toneMapping=Ue?Ln:Jo,ae.toneMappingExposure=1,ae.setClearColor(329482,1),Ne&&(ae.shadowMap.enabled=!0,ae.shadowMap.type=Zo),j=ae.capabilities.getMaxAnisotropy(),fe=new _s,fe.fog=new fr(330254,.0168),fe.background=new lt(395789),be=new qt(36,ke()/J(),.35,220),fe.add(be)}function et(R,A){A=A||{};let x=new gr(R);return x.wrapS=x.wrapT=A.wrap||fn,A.repeat&&x.repeat.set(A.repeat[0],A.repeat[1]),x.anisotropy=Math.min(A.aniso||8,j),A.srgb!==!1&&(x.encoding=xt),x.needsUpdate=!0,x}let Bt=(R,A,x)=>new lt().setRGB(R,A,x);function At(R,A,x){x=x||{};let g=xn,T=x.aniso||8,D=new cn({map:et(R.map,{wrap:g,repeat:A,aniso:T}),normalMap:et(R.normal,{wrap:g,repeat:A,srgb:!1,aniso:T}),normalScale:new nt(x.normal===void 0?.8:x.normal,x.normal===void 0?.8:x.normal),color:x.color===void 0?16777215:x.color,roughness:x.roughness===void 0?1:x.roughness,metalness:x.metalness===void 0?.02:x.metalness});return R.rough&&(D.roughnessMap=et(R.rough,{wrap:g,repeat:A,srgb:!1})),D}let jt={},_t=(R,A)=>jt[R]||(jt[R]=A()),dt=()=>_t("wallWood",()=>V(3,{boards:7})),yn=()=>_t("postWood",()=>V(29,{boards:0}));function Qt(R,A){let x=R.length,g=A.length,T=[],D=[],C=[],Y=[],O=new N,X=new N,G=new N,U=new N(0,1,0);for(let ce=0;ce<x;ce++){let xe=R[ce],ye=R[Math.max(0,ce-1)],Q=R[Math.min(x-1,ce+1)];O.subVectors(Q,ye).normalize(),G.crossVectors(O,U).normalize(),X.crossVectors(G,O).normalize();for(let he=0;he<g;he++){let K=A[he][0],ee=A[he][1],$=Math.hypot(K,ee)||1;T.push(xe.x+G.x*K+X.x*ee,xe.y+G.y*K+X.y*ee,xe.z+G.z*K+X.z*ee),D.push(G.x*K/$+X.x*ee/$,G.y*K/$+X.y*ee/$,G.z*K/$+X.z*ee/$),C.push(he/g,ce/(x-1))}}for(let ce=0;ce<x-1;ce++)for(let xe=0;xe<g;xe++){let ye=(xe+1)%g,Q=ce*g+xe,he=ce*g+ye,K=(ce+1)*g+ye,ee=(ce+1)*g+xe;Y.push(Q,he,K,Q,K,ee)}[0,x-1].forEach((ce,xe)=>{let ye=T.length/3,Q=R[ce];T.push(Q.x,Q.y,Q.z),D.push(0,0,xe?1:-1),C.push(.5,.5);for(let he=0;he<g;he++){let K=ce*g+he,ee=ce*g+(he+1)%g;xe?Y.push(ye,K,ee):Y.push(ye,ee,K)}});let oe=new zt;return oe.setAttribute("position",new Mt(T,3)),oe.setAttribute("normal",new Mt(D,3)),oe.setAttribute("uv",new Mt(C,2)),oe.setIndex(Y),oe}function L(R,A,x,g,T,D){let O=D===void 0?.3:D,X=.001,G=($,me)=>{let se=Math.min(1,Math.abs($)/R),ie=Math.min(1,Math.abs(me)/A),Ce=Math.max(0,(Math.abs($)-x)/Math.max(R-x,1e-4)),Oe=Math.min(1,Math.max(Ce,ie));return g*Math.pow(1-Oe,1.45)+O*g*l(.72,1,Oe)*(.52+.68*Math.min(se,ie))},U=[],oe=[],ce=[],xe=[],ye=new N,Q=1855;for(let $=0;$<2;$++){for(let me=0;me<=34;me++)for(let se=0;se<=52;se++){let ie=-R+2*R*se/52,Ce=-A+2*A*me/34;ye.set(-(G(ie+X,Ce)-G(ie-X,Ce))/(2*X),1,-(G(ie,Ce+X)-G(ie,Ce-X))/(2*X)).normalize(),$&&ye.negate(),U.push(ie,G(ie,Ce)-($?T:0),Ce),oe.push(ye.x,ye.y,ye.z),ce.push(ie*.14,Ce*.14)}for(let me=0;me<34;me++)for(let se=0;se<52;se++){let ie=$*Q+me*53+se,Ce=ie+1,Oe=ie+52+2,Ze=ie+52+1;$?xe.push(ie,Oe,Ce,ie,Ze,Oe):xe.push(ie,Ce,Oe,ie,Oe,Ze)}}let he=[];for(let $=0;$<=52;$++)he.push([$,0]);for(let $=1;$<=34;$++)he.push([52,$]);for(let $=51;$>=0;$--)he.push([$,34]);for(let $=33;$>=1;$--)he.push([0,$]);let K=U.length/3;he.forEach($=>{let me=-R+2*R*$[0]/52,se=-A+2*A*$[1]/34,ie=$[0]===0?-1:$[0]===52?1:0,Ce=$[1]===0?-1:$[1]===34?1:0,Oe=Math.hypot(ie,Ce)||1,Ze=G(me,se);U.push(me,Ze,se,me,Ze-T,se),oe.push(ie/Oe,0,Ce/Oe,ie/Oe,0,Ce/Oe),ce.push(0,0,0,1)});for(let $=0;$<he.length;$++){let me=K+$*2,se=me+1,ie=K+($+1)%he.length*2,Ce=ie+1;xe.push(me,se,Ce,me,Ce,ie)}let ee=new zt;return ee.setAttribute("position",new Mt(U,3)),ee.setAttribute("normal",new Mt(oe,3)),ee.setAttribute("uv",new Mt(ce,2)),ee.setIndex(xe),ee}function w(R){let A=0,x=0;R.forEach(G=>{A+=G.attributes.position.count,x+=G.index.count});let g=new Float32Array(A*3),T=new Float32Array(A*3),D=new Float32Array(A*2),C=A>65535?new Uint32Array(x):new Uint16Array(x),Y=0,O=0;R.forEach(G=>{g.set(G.attributes.position.array,Y*3),T.set(G.attributes.normal.array,Y*3),D.set(G.attributes.uv.array,Y*2);let U=G.index.array;for(let oe=0;oe<U.length;oe++)C[O+oe]=U[oe]+Y;O+=U.length,Y+=G.attributes.position.count,G.dispose()});let X=new zt;return X.setAttribute("position",new bt(g,3)),X.setAttribute("normal",new bt(T,3)),X.setAttribute("uv",new bt(D,2)),X.setIndex(new bt(C,1)),X}let z={},Ee=[],Se=7,Le=40,Ke=-11,Ie=.55,pe=8.4,Pe=-44;function Ye(){let R=I(),A=et(R.map,{wrap:xn,repeat:[4,1.4]}),x=et(R.normal,{wrap:xn,repeat:[4,1.4],srgb:!1}),g=new cn({map:A,normalMap:x,normalScale:new nt(.85,.85),roughness:.78,metalness:.05,color:5397600}),T=new De(new It(360,190),new Vt({color:Bt(.6,.7,.8),map:et(re()),depthWrite:!1,fog:!1,toneMapped:!1}));T.position.set(0,62,-108),T.renderOrder=0,fe.add(T),z.sky=T;let D=et(Z(),{wrap:xn,repeat:[1.7,1]});[[-90,13,300,26,0],[-63,9.5,210,19,16]].forEach((Q,he)=>{let K=new De(new It(Q[2],Q[3]),new Vt({map:he?et(Z()):D,transparent:!0,color:he?659477:395533,depthWrite:!1,fog:!1}));K.position.set(Q[4],Q[1],Q[0]),K.renderOrder=1,fe.add(K)});let C=F(),Y=new cn({map:et(C.map,{wrap:xn,repeat:[7,7],aniso:16}),normalMap:et(C.normal,{wrap:xn,repeat:[7,7],srgb:!1,aniso:16}),roughnessMap:et(C.rough,{wrap:xn,repeat:[3.4,3.4],srgb:!1}),normalScale:new nt(.3,.3),roughness:.74,metalness:.06,color:6911354}),O=new De(new It(150,150),Y);O.rotation.x=-Math.PI/2,O.position.set(0,0,-18),O.receiveShadow=!0,fe.add(O),z.floor=O,z.floorMat=Y;let X=new cn({map:et(C.map,{wrap:xn,repeat:[3,1.2],aniso:16}),normalMap:et(C.normal,{wrap:xn,repeat:[3,1.2],srgb:!1,aniso:16}),normalScale:new nt(.18,.18),roughness:.93,metalness:.02,color:5792618}),G=new De(new ft(42,Se,24),X);G.position.set(0,Se/2,-45),G.receiveShadow=!0,G.castShadow=!0,fe.add(G);let U=new De(new ft(43,.34,25),g);U.position.set(0,Se-.17,-45),U.receiveShadow=!0,fe.add(U);let oe=[],ce=[];for(let Q=0;Q<Le;Q++){let he=(Q+1)*(Se/Le),K=Ke-(Q+.5)*Ie,ee=pe+(Le-Q)*.052;oe.push(new ft(ee,Se/Le+.04,Ie+.04).translate(0,he-Se/Le/2,K)),[-1,1].forEach($=>ce.push(new ft(.9,1.5,Ie+.06).translate($*(ee/2+.45),he-.3,K)))}let xe=new De(w(oe),X);xe.receiveShadow=!0,xe.castShadow=!0,fe.add(xe);let ye=new De(w(ce),g);ye.receiveShadow=!0,ye.castShadow=!0,fe.add(ye)}function He(){let R=new Pn,A=At(dt(),[4,1.6],{color:5656912,normal:1.5}),x=At(yn(),[1.1,1],{color:9073773,normal:1.05,metalness:.03}),g=new cn({color:9400110,roughness:.38,metalness:.78}),T=_t("roof",()=>W()),D=At(T,[1,1],{color:2831418,roughness:.74,metalness:.1,normal:1.4}),C=new Vt({color:Bt(1.06,.48,.18),fog:!0,toneMapped:!1}),Y=new Vt({map:et(k()),transparent:!0,depthWrite:!1,fog:!0});z.paper=C;function O(se,ie,Ce,Oe,Ze){let ut=new De(new It(se,ie),C);ut.position.set(Ce,Oe,Ze),R.add(ut);let Xe=new De(new It(se,ie),Y);Xe.position.set(Ce,Oe,Ze+.06),Xe.renderOrder=3,R.add(Xe)}function X(se,ie,Ce,Oe){let Ze=[];for(let Xe=-se;Xe<=se+.001;Xe+=Oe)[-ie,ie].forEach(mt=>{Ze.push(new ft(.34,.46,.34).translate(Xe,Ce,Pe+mt)),Ze.push(new ft(.92,.17,.24).translate(Xe,Ce+.3,Pe+mt))});for(let Xe=-ie+Oe;Xe<ie-.001;Xe+=Oe)[-se,se].forEach(mt=>{Ze.push(new ft(.34,.46,.34).translate(mt,Ce,Pe+Xe)),Ze.push(new ft(.24,.17,.92).translate(mt,Ce+.3,Pe+Xe))});let ut=new De(w(Ze),x);ut.castShadow=!1,R.add(ut)}let G=Se,U=new De(new ft(13.6,5,8.2),A);U.position.set(0,G+2.5,Pe),U.castShadow=!0,R.add(U);for(let se=0;se<5;se++){let ie=-5.6+se*2.8;O(1.55,2.5,ie,G+2.6,Pe+4.16)}for(let se=0;se<6;se++){let ie=new De(new ln(.3,.34,5,14),x);ie.position.set(-7+se*2.8,G+2.5,Pe+4.24),ie.castShadow=!0,R.add(ie)}let oe=new De(new ft(14.6,.4,8.9),x);oe.position.set(0,G+.2,Pe),R.add(oe),X(7,4.4,G+5.15,1.4);let ce=new De(L(9.6,6.4,3.2,2.9,.4,.26),D);ce.position.set(0,G+5.6,Pe),ce.castShadow=!0,R.add(ce);let xe=new De(new ft(10,3.4,6),A);xe.position.set(0,G+9.4,Pe),xe.castShadow=!0,R.add(xe);let ye=new De(new ft(12.4,.26,8.4),x);ye.position.set(0,G+7.72,Pe),R.add(ye),[.1,.94].forEach(se=>[4.2,-4.2].forEach(ie=>{let Ce=new De(new ft(12.4,.17,.17),x);Ce.position.set(0,G+7.85+se,Pe+ie),R.add(Ce)}));for(let se=0;se<=16;se++){let ie=new De(new ft(.1,1.05,.1),x);ie.position.set(-6.2+se*.775,G+8.42,Pe+4.2),R.add(ie)}for(let se=0;se<4;se++)O(1,1.35,-4.5+se*3,G+9.5,Pe+3.06);let Q=new De(new ft(1.9,1.3,.16),g);Q.position.set(0,G+9.7,Pe+3.12),R.add(Q);let he=new De(new ft(1.52,.98,.18),A);he.position.set(0,G+9.7,Pe+3.16),R.add(he),X(5.2,3.3,G+11.2,1.3);let K=new De(L(10.8,7.2,3.6,5.2,.48,.26),D);K.position.set(0,G+11.7,Pe),K.castShadow=!0,R.add(K);let ee=new De(new ft(7.6,.6,1.05),D);ee.position.set(0,G+17.1,Pe),R.add(ee),[-1,1].forEach(se=>{let ie=new De(new Ms(.46,1.15,4),D);ie.position.set(se*3.9,G+17.6,Pe),ie.rotation.y=Math.PI/4,R.add(ie)}),z.templeTop=G+18.2,[-1,1].forEach(se=>{let ie=new De(new ft(7.6,3.4,5.2),A);ie.position.set(se*10.6,G+1.7,Pe+1.4),ie.castShadow=!0,R.add(ie);for(let Oe=0;Oe<3;Oe++)O(1.3,1.6,se*10.6+(Oe-1)*2.4,G+1.8,Pe+4.06);let Ce=new De(L(5,4,1.4,1.9,.32,.26),D);Ce.position.set(se*10.6,G+3.4,Pe+1.4),Ce.castShadow=!0,R.add(Ce)}),fe.add(R),z.temple=R;let $=new De(new It(30,16),new Vt({map:et(_e("rgba(255,150,66,.80)","rgba(240,96,26,.24)")),transparent:!0,blending:an,depthWrite:!1,fog:!1,opacity:.3}));$.position.set(0,G+3,Pe+5.6),$.renderOrder=2,fe.add($),z.hallHalo=$;let me=new De(new It(64,20),new Vt({map:et(_e("rgba(150,178,190,.62)","rgba(104,138,154,.20)")),transparent:!0,blending:an,depthWrite:!1,fog:!1,opacity:.17}));me.position.set(0,G-1.4,Pe+10),me.renderOrder=2,fe.add(me)}let Be={x:17.9,y:31.9,z:-72,r:8.6};function We(){let R=new De(new It(Be.r*2,Be.r*2),new Vt({map:et(ue()),color:Bt(3.6,.64,.61),transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1}));R.position.set(Be.x,Be.y,Be.z),R.renderOrder=1,fe.add(R),z.moon=R;let A=new De(new It(Be.r*6.4,Be.r*6.4),new Vt({map:et(_e("rgba(255,124,112,.90)","rgba(206,52,48,.26)")),transparent:!0,blending:an,depthWrite:!1,fog:!1,opacity:.44}));A.position.set(Be.x,Be.y,Be.z-.3),A.renderOrder=0,fe.add(A),z.moonHalo=A}function ct(){if(!z.moon)return;let R=Be.x*(1-.4*Dn());z.moon.position.x=R,z.moonHalo.position.x=R}function wt(){let R=At(_t("lacquer",()=>P()),[2,2],{color:Bt(1.72,1.02,.94),roughness:.92,metalness:.05,normal:.75}),A=new cn({color:8019242,roughness:.5,metalness:.6}),x=new Pn,g=.78,T=8.2,D=3.55;[-1,1].forEach(xe=>{let ye=new De(new ln(.3,.38,T,26),R);ye.position.set(xe*D,g+T/2,0),ye.castShadow=!0,x.add(ye);let Q=new De(new ln(.46,.5,.52,26),A);Q.position.set(xe*D,g+.26,0),Q.castShadow=!0,x.add(Q);let he=new De(new ln(.345,.345,.26,26),A);he.position.set(xe*D,g+T-1.42,0),x.add(he);let K=new De(new ft(.86,.3,.86),A);K.position.set(xe*D,g+T-.72,0),x.add(K);let ee=new De(new ft(.6,.52,.6),A);ee.position.set(xe*D,g+T-.34,0),x.add(ee),[-1,1].forEach($=>{let me=new De(new ft(.24,.7,.18),A);me.position.set(xe*D+$*.4,g+T-.62,.3),x.add(me);let se=me.clone();se.position.z=-.3,x.add(se)})});let C=new De(new ft(9.4,.52,.46),R);C.position.set(0,g+T-2.15,0),C.castShadow=!0,x.add(C);let Y=new De(new ft(.46,1.22,.4),R);Y.position.set(0,g+T+.1,0),x.add(Y);let O=new De(new ft(.6,.18,.5),A);O.position.set(0,g+T+.68,0),x.add(O);function X(xe,ye,Q){let he=[];for(let K=0;K<=26;K++){let ee=K/26*2-1;he.push(new N(ee*xe,Math.pow(Math.abs(ee),Q)*ye,0))}return he}let G=new De(Qt(X(5.05,.4,2.6),[[-.3,-.19],[.3,-.19],[.32,.06],[.28,.21],[-.28,.21],[-.32,.06]]),R);G.position.set(0,g+T-.52,0),G.castShadow=!0,x.add(G);let U=new De(Qt(X(5.85,.62,2.4),[[-.42,-.24],[.42,-.24],[.46,.04],[.3,.28],[-.3,.28],[-.46,.04]]),R);U.position.set(0,g+T+.96,0),U.castShadow=!0,x.add(U);let oe=new De(Qt(X(5.95,.62,2.4),[[-.48,.22],[.48,.22],[.48,.34],[-.48,.34]]),new cn({color:1182732,roughness:.42,metalness:.14}));oe.position.set(0,g+T+.96,0),x.add(oe);let ce=.72;x.position.set(0,-g*ce,-8.6),x.scale.setScalar(ce),fe.add(x),z.torii=x}function Ct(R,A,x,g){let T=_t("lanternStone",()=>At(_t("granite",()=>b(17)),[1.5,1.5],{color:10134949,metalness:0,normal:1.45})),D=_t("lanternDark",()=>At(yn(),[.9,.9],{color:14205622,metalness:.1,normal:.7})),C=new Pn,Y=new De(new ln(.44,.52,.26,20),T);Y.position.y=.13,Y.castShadow=!0,C.add(Y);let O=new De(new ln(.15,.18,1.02,16),T);O.position.y=.77,O.castShadow=!0,C.add(O);let X=new De(new ln(.42,.34,.13,20),T);X.position.y=1.34,X.castShadow=!0,C.add(X);let G=new De(new ft(.5,.5,.5),D);G.position.y=1.66,G.castShadow=!0,C.add(G);let U=new Vt({color:Bt(2.3,.3,.085),fog:!1,toneMapped:!1});[[0,0,.256,0],[0,0,-.256,Math.PI],[.256,0,0,Math.PI/2],[-.256,0,0,-Math.PI/2]].forEach(K=>{let ee=new De(new It(.34,.34),U);ee.position.set(K[0],1.66,K[2]),ee.rotation.y=K[3],C.add(ee)}),z.lanternPane=z.lanternPane||U;let oe=new De(new ln(.1,.62,.34,4,1),T);oe.position.y=2.06,oe.rotation.y=Math.PI/4,oe.castShadow=!0,C.add(oe);let ce=new De(new ln(.66,.7,.07,4,1),T);ce.position.y=1.93,ce.rotation.y=Math.PI/4,C.add(ce);let xe=new De(new _r(.09,12,10),T);xe.position.y=2.28,C.add(xe);let ye=new De(new Ms(.055,.16,10),T);ye.position.y=2.4,C.add(ye);let Q=new De(new It(3.4,3.4),new Vt({map:et(_e("rgba(255,120,60,.9)","rgba(255,60,24,.28)")),transparent:!0,blending:an,depthWrite:!1,fog:!1,opacity:.5}));Q.position.y=1.66,Q.renderOrder=2,C.add(Q),Q.userData.billboard=!0;let he=new Kn(16734756,2.6,9,2);return he.position.set(0,1.66,0),C.add(he),z.lanternLights=z.lanternLights||[],z.lanternLights.push(he),z.lanternGlows=z.lanternGlows||[],z.lanternGlows.push(Q),C.position.set(R,g||0,A),C.scale.setScalar(x||1),fe.add(C),C}function B(R,A,x,g){let T=_(R),D=[],C=[],Y=new gt,O=new Sn,X=new N(0,1,0),G=new N,U=new N;function oe(Ze,ut,Xe,mt){G.subVectors(ut,Ze);let Rt=G.length();G.normalize();let St=new ln(mt,Xe,Rt,6,1,!0);O.setFromUnitVectors(X,G),U.addVectors(Ze,ut).multiplyScalar(.5),Y.compose(U,O,new N(1,1,1)),St.applyMatrix4(Y),D.push(St)}function ce(Ze,ut,Xe,mt,Rt){let St=Ze.clone().addScaledVector(ut,Xe);if(St.y+=Xe*.1,oe(Ze,St,mt,mt*.68),Rt>=4||Xe<.34){C.push(St.clone());return}let Wt=Rt<2?3:2;for(let $t=0;$t<Wt;$t++){let En=ut.clone();En.x+=(T()-.5)*1.25,En.z+=(T()-.5)*1.25,En.y+=.3+T()*.5,En.normalize(),ce(St,En,Xe*(.62+T()*.16),mt*.66,Rt+1)}}let xe=new N(0,0,0);oe(xe,new N(0,1.5,0),.22,.16);for(let Ze=0;Ze<4;Ze++){let ut=Ze/4*h+T();ce(new N(0,1.5,0),new N(Math.cos(ut)*.8,.8,Math.sin(ut)*.8).normalize(),1.45,.155,0)}let ye=new De(w(D),new cn({color:1512467,roughness:.94,metalness:0,side:pn}));ye.castShadow=!0;let Q=new It(.36,.36),he=new cn({map:et(de()),color:2819078,alphaTest:.42,side:pn,roughness:.86,metalness:0,emissive:524288,emissiveIntensity:.12}),K=ze?5:9,ee=new ys(Q,he,C.length*K),$=new gt,me=new bi,se=new Sn,ie=new N,Ce=0;C.forEach(Ze=>{for(let ut=0;ut<K;ut++){let Xe=new N(Ze.x+(T()-.5)*.95,Ze.y+(T()-.5)*.8,Ze.z+(T()-.5)*.95);me.set(T()*h,T()*h,T()*h),se.setFromEuler(me);let mt=.7+T()*.75;ie.set(mt,mt,mt),$.compose(Xe,se,ie),ee.setMatrixAt(Ce++,$)}}),ee.instanceMatrix.needsUpdate=!0,ee.castShadow=!1,ee.frustumCulled=!1;let Oe=new Pn;return Oe.add(ye),Oe.add(ee),Oe.position.set(A,0,x),Oe.scale.setScalar(g||1),Oe.rotation.y=T()*h,fe.add(Oe),he.onBeforeCompile=Ze=>{Ze.uniforms.uT=z.uT,Ze.vertexShader=`uniform float uT;
`+Ze.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vec3 wp = (instanceMatrix * vec4(0.0,0.0,0.0,1.0)).xyz;
float ph = wp.x*1.7 + wp.z*1.3 + wp.y*.7;
transformed.x += sin(uT*1.35 + ph)*0.055;
transformed.z += cos(uT*1.05 + ph*1.3)*0.045;
`)},Oe}function te(){let R=new cn({color:1317404,roughness:.46,metalness:.1}),A=_(404),x=p(88);[[-6.2,-5.4,.95],[-7.4,-2.1,.7],[6.6,-7.2,.8],[8,-4,1.05],[-9,-8.4,1.15],[9.6,-9.2,.9],[3.4,-7.8,.55],[-3.2,-8.6,.6]].forEach((T,D)=>{let C=new xr(T[2],2),Y=C.attributes.position;for(let X=0;X<Y.count;X++){let G=Y.getX(X),U=Y.getY(X),oe=Y.getZ(X),ce=1+.34*d(x,G*1.6+D*7,oe*1.6+U,3,2.2,.5);Y.setXYZ(X,G*ce,U*ce*.68,oe*ce)}C.computeVertexNormals();let O=new De(C,R);O.position.set(T[0],T[2]*.3,T[1]),O.rotation.set(A(),A()*h,A()*.4),O.castShadow=!0,O.receiveShadow=!0,fe.add(O)})}function we(R,A){let x=new Vt({map:et(R,{aniso:16}),transparent:!0,depthWrite:!0,alphaTest:.012,side:pn,fog:!0,color:16777215});return x.onBeforeCompile=g=>{g.uniforms.uT=z.uT,g.uniforms.uSway={value:A||.07},g.vertexShader=`uniform float uT;
uniform float uSway;
`+g.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
float h = uv.y;
float ph = position.x*0.30 + float(gl_InstanceID)*0.0;
transformed.x += sin(uT*0.85 + ph)*uSway*h*h;
transformed.y += cos(uT*0.62 + ph*1.7)*uSway*0.35*h*h;
`),g.fragmentShader=g.fragmentShader.replace("#include <alphatest_fragment>",`float feX = smoothstep(0.0, 0.11, vUv.x) * (1.0 - smoothstep(0.89, 1.0, vUv.x));
float feY = smoothstep(0.0, 0.07, vUv.y);
diffuseColor.a *= feX * feY;
#include <alphatest_fragment>`)},x}function Fe(){let R=[["grassFar",ge(101,{crest:.3,peak:.46,wide:.42,blades:11e3,len:34,warm:.7,crest2:.46,crest3:.4}),-3.4,2.85,-.4,24,12,.04],["rockLeft",Te(404,{blobs:[[.24,.78,.48,.38],[.58,.94,.46,.3],[.84,1.06,.42,.28]]}),-7.2,2.55,1.8,17,11.3,.01],["grassMid",ge(202,{crest:.6,peak:.55,wide:.4,blades:13e3,len:40,warm:.95,crest2:-.44,crest3:.34}),3.9,2.86,3.6,15,7.5,.062],["grassNear",ge(303,{crest:.42,peak:.62,wide:.48,blades:16e3,len:50,warm:.85,crest2:.42,crest3:.44}),-1.9,2.92,5.6,12,6,.092],["bough",Me(505),4.6,2.95,6.4,13,8.7,.045],["rockNear",Te(606,{blobs:[[.18,.86,.54,.44],[.54,1.02,.5,.36],[.86,.92,.4,.32]]}),-6.6,1.7,6,9,6,.008]];z.fg=[],R.forEach(A=>{let x=new De(new It(A[5],A[6],12,12),we(A[1],A[7]));x.position.set(A[2],A[3],A[4]),x.renderOrder=20+z.fg.length,x.name=A[0],x.frustumCulled=!1,fe.add(x),z.fg.push(x)})}function Ge(){let R=et(_e("rgba(160,205,210,.55)","rgba(110,165,175,.18)"));z.haze=[];let A=_(66);for(let U=0;U<(ze?4:6);U++){let oe=12+A()*15,ce=new De(new It(oe,oe*.55),new Vt({map:R,transparent:!0,blending:an,depthWrite:!1,fog:!1,opacity:.05+A()*.07}));ce.position.set((A()-.5)*44,1.5+A()*10,-38+A()*40),ce.renderOrder=4,ce.userData={sp:.06+A()*.12,ph:A()*h,x0:ce.position.x},fe.add(ce),z.haze.push(ce)}let x=ze?220:460,g=new Float32Array(x*3),T=new Float32Array(x);for(let U=0;U<x;U++)g[U*3]=(A()-.5)*30,g[U*3+1]=A()*11,g[U*3+2]=-26+A()*36,T[U]=A();let D=new zt;D.setAttribute("position",new bt(g,3)),D.setAttribute("aSeed",new bt(T,1));let C=new vs(D,new Yt({uniforms:{uT:z.uT,uTex:{value:et(_e("rgba(255,190,140,1)","rgba(255,120,60,.35)"))},uSize:{value:J()*.5}},transparent:!0,blending:an,depthWrite:!1,vertexShader:`attribute float aSeed; uniform float uT; uniform float uSize; varying float vA;
void main(){ vec3 p=position;
 p.y = mod(p.y + uT*(0.14+aSeed*0.28), 11.5);
 p.x += sin(uT*0.36 + aSeed*22.0)*0.85;
 p.z += cos(uT*0.29 + aSeed*17.0)*0.7;
 vec4 mv = modelViewMatrix * vec4(p,1.0);
 vA = (0.25+aSeed*0.75) * smoothstep(11.5,7.0,p.y) * smoothstep(0.0,1.4,p.y);
 gl_PointSize = uSize*(0.010+aSeed*0.020)/max(-mv.z,0.6);
 gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform sampler2D uTex; varying float vA;
void main(){ vec4 t=texture2D(uTex, gl_PointCoord);
 gl_FragColor = vec4(t.rgb*vec3(1.6,0.78,0.42), t.a*vA*0.75); }`}));if(C.frustumCulled=!1,C.renderOrder=5,fe.add(C),z.embers=C,!ze){let oe=new Float32Array(5400),ce=new Float32Array(900*2),xe=new Float32Array(900*2),ye=new Float32Array(900*2);for(let K=0;K<900;K++){let ee=(A()-.5)*40,$=-30+A()*34,me=A()*17,se=7+A()*9,ie=.3+A()*.55;for(let Ce=0;Ce<2;Ce++){let Oe=(K*2+Ce)*3;oe[Oe]=ee,oe[Oe+1]=me,oe[Oe+2]=$,ce[K*2+Ce]=Ce,xe[K*2+Ce]=se,ye[K*2+Ce]=ie}}let Q=new zt;Q.setAttribute("position",new bt(oe,3)),Q.setAttribute("aTop",new bt(ce,1)),Q.setAttribute("aSpeed",new bt(xe,1)),Q.setAttribute("aLen",new bt(ye,1));let he=new mr(Q,new Yt({uniforms:{uT:z.uT},transparent:!0,blending:an,depthWrite:!1,vertexShader:`attribute float aTop; attribute float aSpeed; attribute float aLen; uniform float uT; varying float vA;
void main(){ vec3 p=position;
 float y = mod(p.y - uT*aSpeed, 17.0);
 p.y = y + aTop*aLen;
 vA = smoothstep(0.0,3.0,y)*smoothstep(17.0,11.0,y);
 gl_Position = projectionMatrix * modelViewMatrix * vec4(p,1.0); }`,fragmentShader:`varying float vA;
void main(){ gl_FragColor = vec4(0.55,0.74,0.82, vA*0.024); }`}));he.frustumCulled=!1,he.renderOrder=6,fe.add(he),z.rain=he}let Y=v(256,256),O=Y.getContext("2d"),X=O.createRadialGradient(128,128,84,128,128,128);X.addColorStop(0,"rgba(255,255,255,0)"),X.addColorStop(.62,"rgba(255,255,255,.55)"),X.addColorStop(.86,"rgba(255,255,255,.22)"),X.addColorStop(1,"rgba(255,255,255,0)"),O.fillStyle=X,O.fillRect(0,0,256,256);let G=et(Y);z.ripples=[];for(let U=0;U<(ze?6:13);U++){let oe=new De(new It(1,1),new Vt({map:G,transparent:!0,blending:an,depthWrite:!1,fog:!0,opacity:0}));oe.rotation.x=-Math.PI/2,oe.renderOrder=7,oe.userData={t:A()*4,x:(A()-.5)*22,z:-8+A()*22,sp:.5+A()*.5},fe.add(oe),z.ripples.push(oe)}}let ht=11,Dt=12,yt=30;function On(){let R=ze?110:260,A=new cn({map:et(de()),alphaTest:.42,side:pn,color:4196362,roughness:.84,metalness:0,emissive:7864832,emissiveIntensity:.72}),x=new ys(new It(.4,.4),A,R);x.frustumCulled=!1,x.renderOrder=5,x.castShadow=x.receiveShadow=!1;let g=_(404),T=[];for(let D=0;D<R;D++)T.push({x:(g()-.5)*2*yt,z:(g()-.5)*2*yt,y:g()*26,fall:.5+g()*.9,sway:.45+g()*1.5,swayPh:g()*h,swayAmp:.3+g()*.95,spin:(g()-.5)*2.6,roll:g()*h,rollSp:.5+g()*2,tilt:g()*h,s:.55+g()*.9});fe.add(x),z.leaves={mesh:x,list:T}}let vt=new gt,vn=new Sn,en=new bi,es=new N,As=new N,Un=new N;function wr(R){let A=z.leaves;if(!A)return;let x=be.position.y,g=A.list;be.getWorldDirection(Un),Un.y=0,Un.lengthSq()<1e-6?Un.set(0,0,-1):Un.normalize();let T=be.position.x+Un.x*ht,D=be.position.z+Un.z*ht,C=!A.seeded;A.seeded=!0;for(let Y=0;Y<g.length;Y++){let O=g[Y];if(O.y-=O.fall*R,O.roll+=O.rollSp*R,O.tilt+=O.spin*R,C||O.y<x-10){O.y=C?x-10+Math.random()*26:x+16;let oe=Math.random()*h,ce=Math.sqrt(Math.random())*Dt;O.x=T+Math.cos(oe)*ce,O.z=D+Math.sin(oe)*ce}let X=be.position.x,G=be.position.z;O.x-X>yt?O.x-=2*yt:O.x-X<-yt&&(O.x+=2*yt),O.z-G>yt?O.z-=2*yt:O.z-G<-yt&&(O.z+=2*yt);let U=Math.sin(Jt*O.sway+O.swayPh);es.set(O.x+U*O.swayAmp,O.y,O.z+Math.cos(Jt*O.sway*.7+O.swayPh)*O.swayAmp*.6),en.set(O.roll,O.tilt,U*.55),vn.setFromEuler(en),As.setScalar(O.s),vt.compose(es,vn,As),A.mesh.setMatrixAt(Y,vt)}A.mesh.instanceMatrix.needsUpdate=!0}let E=3.4,H={list:[],i:0,acc:0,ex:0,ey:0,lx:0,ly:0,idle:0,seen:!1};function ne(){if(s)return;let R=ze?90:190,A=new zt;A.setAttribute("position",new bt(new Float32Array(R*3),3)),A.setAttribute("aA",new bt(new Float32Array(R),1)),A.setAttribute("aS",new bt(new Float32Array(R),1));let x=new vs(A,new Yt({uniforms:{uTex:{value:et(Ae())},uPx:{value:J()}},transparent:!0,blending:an,depthWrite:!1,depthTest:!1,fog:!1,vertexShader:`attribute float aA; attribute float aS;
uniform float uPx; varying float vA;
void main(){ vA = aA;
 vec4 mv = modelViewMatrix * vec4(position,1.0);
 gl_PointSize = uPx * aS / max(-mv.z, 0.4);
 gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform sampler2D uTex; varying float vA;
void main(){ if (vA <= 0.0) discard;
 vec4 t = texture2D(uTex, gl_PointCoord);
 gl_FragColor = vec4(t.rgb, t.a * vA); }`}));x.frustumCulled=!1,x.renderOrder=9,x.layers.set(1),be.add(x),H.mesh=x;for(let g=0;g<R;g++)H.list.push({life:0,max:1,vx:0,vy:0,sz:0,ph:0})}function q(R,A){let x=Math.tan(be.fov*Math.PI/360)*E;return[R*x*be.aspect,A*x]}function le(R){if(!H.mesh)return;let A=H.mesh.geometry,x=A.attributes.position.array,g=A.attributes.aA.array,T=A.attributes.aS.array,D=H.list,C=D.length,Y=q($e.tmx,$e.tmy);H.seen||(H.ex=H.lx=Y[0],H.ey=H.ly=Y[1],H.seen=!0),H.ex=m(H.ex,Y[0],16,R),H.ey=m(H.ey,Y[1],16,R);let O=H.ex-H.lx,X=H.ey-H.ly,G=Math.hypot(O,X),U=G>1e-5?Math.atan2(X,O):0,oe=(ye,Q,he,K)=>{let ee=H.i;H.i=(ee+1)%C;let $=D[ee],me=ee*3;x[me]=ye+(Math.random()+Math.random()-1)*.3,x[me+1]=Q+(Math.random()+Math.random()-1)*.3,x[me+2]=-E+(Math.random()-.5)*.9,$.life=0,$.max=(K?2.1:1.45)+Math.random()*1.3,$.vx=-Math.cos(he)*.09+(Math.random()-.5)*.38,$.vy=-Math.sin(he)*.09+(Math.random()-.5)*.32+.02,$.sz=(K?.018:.024)+Math.random()*.026,$.ph=Math.random()*h};H.acc+=G;let ce=.03,xe=0;for(;H.acc>=ce&&xe++<14;){H.acc-=ce;let ye=G>1e-6?Math.min(1,xe*ce/G):0;oe(H.lx+O*ye,H.ly+X*ye,U,!1)}H.idle+=R,H.idle>.42&&(H.idle=0,oe(H.ex,H.ey,Math.random()*h,!0)),H.lx=H.ex,H.ly=H.ey;for(let ye=0;ye<C;ye++){let Q=D[ye],he=ye*3;if(Q.life>=Q.max){g[ye]=0;continue}Q.life+=R;let K=Q.life/Q.max;x[he]+=(Q.vx+Math.sin(Jt*1.3+Q.ph)*.17)*R,x[he+1]+=(Q.vy+Math.cos(Jt*1.1+Q.ph*1.7)*.14)*R,Q.vx*=1-.5*R,Q.vy=Q.vy*(1-.5*R)+.022*R,g[ye]=l(0,.12,K)*(1-l(.22,1,K))*.9,T[ye]=Q.sz*(1+K*.55)}A.attributes.position.needsUpdate=!0,A.attributes.aA.needsUpdate=!0,A.attributes.aS.needsUpdate=!0}function qe(){fe.add(new yr(5473167,395784,.13));let R=new Es(11983844,1.22);if(R.position.set(2.6,21,2.5),R.target.position.set(0,2.2,-12.5),fe.add(R.target),Ne){R.castShadow=!0;let C=ze?1024:2048;R.shadow.mapSize.set(C,C);let Y=R.shadow.camera;Y.left=-26,Y.right=26,Y.top=34,Y.bottom=-16,Y.near=3,Y.far=78,R.shadow.bias=-.0012,R.shadow.normalBias=.035,R.shadow.radius=2.2}fe.add(R),z.key=R;let A=new Es(16738882,.52);A.position.set(26,30,-60),A.target.position.set(0,8,-40),fe.add(A.target),fe.add(A);let x=new Kn(16747046,2.3,15,2);x.position.set(0,Se+1.2,Pe+8.6),fe.add(x),z.hallLight=x,[-1,1].forEach(C=>{let Y=new Kn(16745504,2.2,11,2);Y.position.set(C*11.4,Se+1.2,Pe+5.6),fe.add(Y)});let g=new Kn(16726556,3,46,2);g.position.set(11,17,-24),fe.add(g),z.moonLight=g;let T=new Kn(8832722,.95,30,2);T.position.set(-1,13.5,-16),fe.add(T);let D=new Kn(16752713,4.2,17,2);D.position.set(0,7.6,-26),fe.add(D)}let ve={levels:[]},Qe=`varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4( position.xy, 0.0, 1.0 ); }`;function st(){if(ve.cam=new Ki(-1,1,1,-1,0,1),ve.quad=new De(new It(2,2),null),ve.quad.frustumCulled=!1,ve.qScene=new _s,ve.qScene.add(ve.quad),ve.up=new Yt({uniforms:{tS:{value:null},uAmt:{value:1}},vertexShader:Qe,fragmentShader:`uniform sampler2D tS; uniform float uAmt; varying vec2 vUv;
void main(){ gl_FragColor = vec4(texture2D(tS,vUv).rgb*uAmt, 1.0); }`,blending:an,transparent:!0,depthTest:!1,depthWrite:!1}),!Ue)return;let R=ae.domElement.width,A=ae.domElement.height,x={minFilter:rn,magFilter:rn,type:_i,depthBuffer:!1,stencilBuffer:!1};ve.scene=new _n(R,A,Object.assign({},x,{depthBuffer:!0,samples:ze?0:2}));let g=Math.max(2,R>>1),T=Math.max(2,A>>1),D=4;for(let C=0;C<D;C++)ve.levels.push({a:new _n(g,T,x),b:new _n(g,T,x),w:g,h:T}),g=Math.max(2,g>>1),T=Math.max(2,T>>1);ve.bright=new Yt({uniforms:{tS:{value:null},uThr:{value:.86},uKnee:{value:.5}},vertexShader:Qe,fragmentShader:`uniform sampler2D tS; uniform float uThr; uniform float uKnee; varying vec2 vUv;
void main(){ vec3 c = texture2D(tS, vUv).rgb;
 float l = dot(c, vec3(0.2126,0.7152,0.0722));
 float k = smoothstep(uThr, uThr+uKnee, l);
 gl_FragColor = vec4(c*k, 1.0); }`}),ve.blur=new Yt({uniforms:{tS:{value:null},uDir:{value:new nt(1,0)}},vertexShader:Qe,fragmentShader:`uniform sampler2D tS; uniform vec2 uDir; varying vec2 vUv;
void main(){ vec3 c = texture2D(tS, vUv).rgb * 0.2270270270;
 c += texture2D(tS, vUv + uDir*1.3846153846).rgb * 0.3162162162;
 c += texture2D(tS, vUv - uDir*1.3846153846).rgb * 0.3162162162;
 c += texture2D(tS, vUv + uDir*3.2307692308).rgb * 0.0702702703;
 c += texture2D(tS, vUv - uDir*3.2307692308).rgb * 0.0702702703;
 gl_FragColor = vec4(c, 1.0); }`}),ve.comp=new Yt({uniforms:{tS:{value:null},tB:{value:null},uRes:{value:new nt(R,A)},uT:{value:0},uBloom:{value:.34},uCA:{value:1},uGrain:{value:.02},uVig:{value:1},uExp:{value:.62},uFade:{value:1},uSat:{value:1.05}},vertexShader:Qe,fragmentShader:`uniform sampler2D tS; uniform sampler2D tB; uniform vec2 uRes;
uniform float uT, uBloom, uCA, uGrain, uVig, uExp, uFade, uSat;
varying vec2 vUv;
vec3 aces(vec3 x){ return clamp((x*(2.51*x+0.03))/(x*(2.43*x+0.59)+0.14), 0.0, 1.0); }
void main(){
 vec2 d = vUv - 0.5; float r2 = dot(d,d);
 float ca = uCA * (0.30 + r2*2.6) * 0.0013;
 vec3 c;
 c.r = texture2D(tS, vUv + d*ca).r;
 c.g = texture2D(tS, vUv).g;
 c.b = texture2D(tS, vUv - d*ca).b;
 c += texture2D(tB, vUv).rgb * uBloom;
 c *= uExp;
 c = aces(c);
 float l = dot(c, vec3(0.2126,0.7152,0.0722));
 c = mix(vec3(l), c, uSat);
 c = mix(c, c*vec3(0.74,1.03,1.11), smoothstep(0.55,0.0,l)*0.80);
 c = mix(c, c*vec3(1.035,0.995,0.968), smoothstep(0.50,1.0,l)*0.26);
 float v = smoothstep(1.22, 0.26, length(d*vec2(1.0,0.94))*1.42);
 c *= mix(1.0, v, uVig);
 float g = fract(sin(dot(vUv*uRes + uT*137.0, vec2(12.9898,78.233)))*43758.5453);
 c += (g-0.5)*uGrain;
 c *= uFade;
 vec3 e = pow(max(c,0.0), vec3(1.0/2.2));
 e = clamp((e - 0.30) * 1.00 + 0.30, 0.0, 1.0);
 gl_FragColor = vec4( e, 1.0 );
}`})}function rt(R,A,x){ve.quad.material=R,ae.setRenderTarget(A||null),x||ae.clear(!0,!1,!1),ae.render(ve.qScene,ve.cam)}function at(){let R=ve.levels;ve.bright.uniforms.tS.value=ve.scene.texture,rt(ve.bright,R[0].a);for(let A=0;A<R.length;A++)A>0&&(ve.up.blending=zn,ve.up.uniforms.uAmt.value=1,ve.up.uniforms.tS.value=R[A-1].a,rt(ve.up,R[A].a)),ve.blur.uniforms.tS.value=R[A].a,ve.blur.uniforms.uDir.value.set(1/R[A].w,0),rt(ve.blur,R[A].b),ve.blur.uniforms.tS.value=R[A].b,ve.blur.uniforms.uDir.value.set(0,1/R[A].h),rt(ve.blur,R[A].a);ve.up.blending=an,ve.up.uniforms.uAmt.value=.52;for(let A=R.length-1;A>0;A--)ve.up.uniforms.tS.value=R[A].a,rt(ve.up,R[A-1].a,!0);ve.comp.uniforms.tS.value=ve.scene.texture,ve.comp.uniforms.tB.value=R[0].a,rt(ve.comp,null)}let it=[{p:[0,4.05,13.6],t:[0,6.6,-18],fov:36},{p:[-5.6,2.35,11.6],t:[1.2,5.6,-14],fov:48},{p:[1.2,3.6,2.2],t:[-.6,7.5,-22],fov:40},{p:[5.2,2.1,-3.4],t:[-2.6,7,-20],fov:46},{p:[0,7.6,-16],t:[0,13,-40],fov:42},{p:[0,10.5,-20],t:[0,3,-34],fov:46}],$e={prog:0,smooth:0,mx:0,my:0,tmx:0,tmy:0,intro:0,focus:-1,focusAmt:0},Zt,bn,Bn;function Pt(){Zt=new bs(it.map(R=>new N(R.p[0],R.p[1],R.p[2])),!1,"catmullrom",.42),bn=new bs(it.map(R=>new N(R.t[0],R.t[1],R.t[2])),!1,"catmullrom",.42),Bn=new qt(it[0].fov,ke()/J(),.35,220),be.layers.enable(1),be.layers.enable(2)}let tt=new N,Hn=new N,Lt=new N;function Dn(){return a((1.62-ke()/J())/1.05,0,1)}function Cs(R,A,x){let g=Dn();return g<=0?x:(Lt.subVectors(R,A).normalize(),R.addScaledVector(Lt,g*8.2),R.y+=g*1.1,x*(1+g*.4))}function jn(){let R=it.length-1,A=a($e.smooth/R,0,1);Zt.getPoint(A,tt),bn.getPoint(A,Hn);let x=a(Math.floor($e.smooth),0,R-1),g=a($e.smooth-x,0,1),T=c(it[x].fov,it[x+1].fov,g);T=Cs(tt,Hn,T);let D=1-$e.intro;tt.z+=D*5.6,tt.y+=D*.65,T+=D*8;let C=1-l(0,1.6,$e.smooth)*.55;tt.x+=$e.mx*.62*C,tt.y+=$e.my*.34*C,Hn.x-=$e.mx*.2*C,Hn.y-=$e.my*.12*C,be.position.copy(tt),be.lookAt(Hn),Math.abs(be.fov-T)>1e-4&&(be.fov=T,be.updateProjectionMatrix())}function Qn(){let R=ke(),A=J();ae.setPixelRatio(Math.min(devicePixelRatio||1,pt)*Ve.scale),ae.setSize(R,A,!0),be.aspect=R/A,be.updateProjectionMatrix();let x=ae.domElement.width,g=ae.domElement.height;if(Ue&&ve.scene){ve.scene.setSize(x,g),ve.comp.uniforms.uRes.value.set(x,g);let T=Math.max(2,x>>1),D=Math.max(2,g>>1);ve.levels.forEach(C=>{C.a.setSize(T,D),C.b.setSize(T,D),C.w=T,C.h=D,T=Math.max(2,T>>1),D=Math.max(2,D>>1)})}if(ve.scene){let T=!ze&&Ve.scale>.78?2:0;ve.scene.samples!==T&&(ve.scene.samples=T,ve.scene.dispose())}Ne&&z.key&&(z.key.shadow.needsUpdate=!0),z.embers&&(z.embers.material.uniforms.uSize.value=A*ae.getPixelRatio()*.5),H.mesh&&(H.mesh.material.uniforms.uPx.value=A*ae.getPixelRatio()),ct()}function Ht(R){z.uT.value=Jt,$e.focusAmt=m($e.focusAmt,$e.focus>=0?1:0,5,R);let A=Math.sin(Jt*1.9)*.5+.5,x=$e.focusAmt;z.hallHalo&&(z.hallHalo.material.opacity=.3+x*.14+Math.sin(Jt*.6)*.035),z.hallLight&&(z.hallLight.intensity=3.4*(1+x*.3)*(1+Math.sin(Jt*.43)*.045)),z.moonHalo&&(z.moonHalo.material.opacity=.44+x*.1+Math.sin(Jt*.34)*.05),z.lanternLights&&z.lanternLights.forEach((g,T)=>{g.intensity=2.6*(1+x*.55)*(.86+.22*Math.sin(Jt*(2.3+T*.7)+T*2.1)+.1*A)}),z.lanternGlows&&z.lanternGlows.forEach(g=>{g.quaternion.copy(be.quaternion)}),z.haze&&z.haze.forEach(g=>{g.position.x=g.userData.x0+Math.sin(Jt*g.userData.sp+g.userData.ph)*5.5,g.quaternion.copy(be.quaternion)}),z.ripples&&z.ripples.forEach(g=>{let T=g.userData;T.t+=R*T.sp,T.t>4&&(T.t=0,T.x=(Math.random()-.5)*22,T.z=-8+Math.random()*22);let D=T.t/4,C=.3+D*4.2;g.scale.set(C,C,1),g.position.set(T.x,.02,T.z),g.material.opacity=Math.sin(D*Math.PI)*.16}),z.fg&&z.fg.forEach(g=>{let T=l(.9,4.6,be.position.z-g.position.z);g.material.opacity=T,g.visible=T>.006}),wr(R),le(R)}let kn=0;function Si(){kn++,ae.setRenderTarget(Ue?ve.scene:null),ae.clear(!0,!0,!1),ae.render(fe,be),ae.setRenderTarget(null),Ue&&(ve.comp.uniforms.uT.value=Jt,ve.comp.uniforms.uFade.value=Ei,at())}let Gt=!1,ai=0,Jt=0,Ei=1;function Wl(R){if(Gt)return;let A=ai?(R-ai)/1e3:0,x=Math.min(A,.05);if(ai=R,Jt+=x,Ei=1,!Ve.locked&&Jt>2.2&&(Ve.acc+=A,Ve.n++,Ve.n>=40||Ve.acc>.9)){let g=Ve.acc/Ve.n;Ve.acc=0,Ve.n=0,g>.023&&Ve.scale>.55?(Ve.scale=Math.max(.55,Ve.scale*(g>.05?.64:.85)),Qn()):g<.0138&&Ve.scale<1&&(Ve.scale=Math.min(1,Ve.scale+.08),Qn())}$e.prog=0,$e.smooth=0,$e.intro=1,$e.mx=m($e.mx,$e.tmx,2.6,x),$e.my=m($e.my,$e.tmy,2.6,x),jn(),Ht(x),Si()}function ta(R,A){for(let x of Object.values(R))x?.isTexture&&A.add(x);for(let x of Object.values(R.uniforms||{})){let g=x?.value;g?.isTexture&&A.add(g)}R.dispose?.()}function na(){if(Gt)return;Gt=!0;let R=new Set,A=new Set,x=new Set;fe?.traverse(g=>{g.geometry&&R.add(g.geometry),(Array.isArray(g.material)?g.material:g.material?[g.material]:[]).forEach(D=>A.add(D))});for(let g of R)g.dispose?.();for(let g of A)ta(g,x);for(let g of[ve.up,ve.bright,ve.blur,ve.comp])g&&!A.has(g)&&ta(g,x);ve.quad?.geometry?.dispose?.(),ve.scene?.dispose?.(),ve.levels.forEach(g=>{g.a.dispose(),g.b.dispose()});for(let g of x)g.dispose?.();ae?.dispose?.()}try{Je(),z.uT={value:0},Pt(),qe(),Ye(),He(),We(),wt(),te(),Ct(7.4,-7,1.15),Ct(-7.6,-5.2,1);let R=g=>Math.max(0,(Ke-g)/Ie-.5),A=g=>(R(g)+1)*(Se/Le)+.45,x=g=>(pe+(Le-R(g))*.052)/2+.45;[-14.4,-23.5].forEach((g,T)=>{let D=T?.95:.9;Ct(x(g),g,D,A(g)),Ct(-x(g),g,D,A(g))}),B(71,12.6,-13,1.05),B(72,-11.8,-9.4,.95),B(73,9.2,-19,.82),B(74,-14.5,-17.5,1),B(75,16.5,-6,.88),Fe(),Ge(),On(),ne(),st(),z.fg.forEach(g=>g.layers.set(1)),z.rain&&z.rain.layers.set(1),z.leaves&&z.leaves.mesh.layers.set(1),z.ripples.forEach(g=>g.layers.set(1)),Ne&&z.key&&(z.key.shadow.autoUpdate=!1,z.key.shadow.needsUpdate=!0),$e.intro=1,Ei=1,Qn(),jn(),Ht(0),Si()}catch(R){throw console.error("Kage world could not create its Three.js renderer.",R),na(),R}return{render:Wl,resize:Qn,reducedMotion:i,setPointer(R,A,x=!0){$e.tmx=x?a(R,-1,1):0,$e.tmy=x?a(A,-1,1):0},dispose:na}}export{Bp as createTempleNightRenderer};
