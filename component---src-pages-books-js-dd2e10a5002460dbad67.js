/*! For license information please see component---src-pages-books-js-dd2e10a5002460dbad67.js.LICENSE.txt */
(self.webpackChunkx_x_codes=self.webpackChunkx_x_codes||[]).push([[389],{5706:function(e,t,r){"use strict";var n=r(8812),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return n.isMemo(e)?o:s[e.$$typeof]||a}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=o;var l=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(p){var a=h(r);a&&a!==p&&e(t,a,n)}var o=u(r);f&&(o=o.concat(f(r)));for(var s=c(t),m=c(r),g=0;g<o.length;++g){var y=o[g];if(!(i[y]||n&&n[y]||m&&m[y]||s&&s[y])){var v=d(r,y);try{l(t,y,v)}catch(b){}}}}return t}},165:function(e,t){"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,o=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,p=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,k=r?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case f:case i:case s:case o:case h:return e;default:switch(e=e&&e.$$typeof){case l:case d:case g:case m:case c:return e;default:return t}}case a:return t}}}function S(e){return w(e)===f}t.AsyncMode=u,t.ConcurrentMode=f,t.ContextConsumer=l,t.ContextProvider=c,t.Element=n,t.ForwardRef=d,t.Fragment=i,t.Lazy=g,t.Memo=m,t.Portal=a,t.Profiler=s,t.StrictMode=o,t.Suspense=h,t.isAsyncMode=function(e){return S(e)||w(e)===u},t.isConcurrentMode=S,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===g},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===a},t.isProfiler=function(e){return w(e)===s},t.isStrictMode=function(e){return w(e)===o},t.isSuspense=function(e){return w(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===f||e===s||e===o||e===h||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===c||e.$$typeof===l||e.$$typeof===d||e.$$typeof===v||e.$$typeof===b||e.$$typeof===k||e.$$typeof===y)},t.typeOf=w},8812:function(e,t,r){"use strict";e.exports=r(165)},6872:function(e){e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var l=i[c];if(!s(l))return!1;var u=e[l],f=t[l];if(!1===(a=r?r.call(n,u,f,l):void 0)||void 0===a&&u!==f)return!1}return!0}},7198:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children;return n.createElement("div",null,n.createElement("nav",null,n.createElement("a",{href:"/"},"x-x.codes")),t)}},4168:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Je}});var n=r(7294),a=r(7198);function i(e,t){return t||(t=e.slice(0)),e.raw=t,e}var o=r(8812),s=r(6872),c=r.n(s);var l=function(e){function t(e,n,c,l,d){for(var h,p,m,g,k,S=0,C=0,A=0,x=0,E=0,j=0,$=m=h=0,M=0,z=0,D=0,L=0,B=c.length,F=B-1,G="",H="",U="",W="";M<B;){if(p=c.charCodeAt(M),M===F&&0!==C+x+A+S&&(0!==C&&(p=47===C?10:47),x=A=S=0,B++,F++),0===C+x+A+S){if(M===F&&(0<z&&(G=G.replace(f,"")),0<G.trim().length)){switch(p){case 32:case 9:case 59:case 13:case 10:break;default:G+=c.charAt(M)}p=59}switch(p){case 123:for(h=(G=G.trim()).charCodeAt(0),m=1,L=++M;M<B;){switch(p=c.charCodeAt(M)){case 123:m++;break;case 125:m--;break;case 47:switch(p=c.charCodeAt(M+1)){case 42:case 47:e:{for($=M+1;$<F;++$)switch(c.charCodeAt($)){case 47:if(42===p&&42===c.charCodeAt($-1)&&M+2!==$){M=$+1;break e}break;case 10:if(47===p){M=$+1;break e}}M=$}}break;case 91:p++;case 40:p++;case 34:case 39:for(;M++<F&&c.charCodeAt(M)!==p;);}if(0===m)break;M++}if(m=c.substring(L,M),0===h&&(h=(G=G.replace(u,"").trim()).charCodeAt(0)),64===h){switch(0<z&&(G=G.replace(f,"")),p=G.charCodeAt(1)){case 100:case 109:case 115:case 45:z=n;break;default:z=_}if(L=(m=t(n,z,m,p,d+1)).length,0<T&&(k=s(3,m,z=r(_,G,D),n,I,P,L,p,d,l),G=z.join(""),void 0!==k&&0===(L=(m=k.trim()).length)&&(p=0,m="")),0<L)switch(p){case 115:G=G.replace(w,o);case 100:case 109:case 45:m=G+"{"+m+"}";break;case 107:m=(G=G.replace(y,"$1 $2"))+"{"+m+"}",m=1===R||2===R&&i("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=G+m,112===l&&(H+=m,m="")}else m=""}else m=t(n,r(n,G,D),m,l,d+1);U+=m,m=D=z=$=h=0,G="",p=c.charCodeAt(++M);break;case 125:case 59:if(1<(L=(G=(0<z?G.replace(f,""):G).trim()).length))switch(0===$&&(h=G.charCodeAt(0),45===h||96<h&&123>h)&&(L=(G=G.replace(" ",":")).length),0<T&&void 0!==(k=s(1,G,n,e,I,P,H.length,l,d,l))&&0===(L=(G=k.trim()).length)&&(G="\0\0"),h=G.charCodeAt(0),p=G.charCodeAt(1),h){case 0:break;case 64:if(105===p||99===p){W+=G+c.charAt(M);break}default:58!==G.charCodeAt(L-1)&&(H+=a(G,h,p,G.charCodeAt(2)))}D=z=$=h=0,G="",p=c.charCodeAt(++M)}}switch(p){case 13:case 10:47===C?C=0:0===1+h&&107!==l&&0<G.length&&(z=1,G+="\0"),0<T*N&&s(0,G,n,e,I,P,H.length,l,d,l),P=1,I++;break;case 59:case 125:if(0===C+x+A+S){P++;break}default:switch(P++,g=c.charAt(M),p){case 9:case 32:if(0===x+S+C)switch(E){case 44:case 58:case 9:case 32:g="";break;default:32!==p&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===x+C+S&&(z=D=1,g="\f"+g);break;case 108:if(0===x+C+S+O&&0<$)switch(M-$){case 2:112===E&&58===c.charCodeAt(M-3)&&(O=E);case 8:111===j&&(O=j)}break;case 58:0===x+C+S&&($=M);break;case 44:0===C+A+x+S&&(z=1,g+="\r");break;case 34:case 39:0===C&&(x=x===p?0:0===x?p:x);break;case 91:0===x+C+A&&S++;break;case 93:0===x+C+A&&S--;break;case 41:0===x+C+S&&A--;break;case 40:if(0===x+C+S){if(0===h)if(2*E+3*j==533);else h=1;A++}break;case 64:0===C+A+x+S+$+m&&(m=1);break;case 42:case 47:if(!(0<x+S+A))switch(C){case 0:switch(2*p+3*c.charCodeAt(M+1)){case 235:C=47;break;case 220:L=M,C=42}break;case 42:47===p&&42===E&&L+2!==M&&(33===c.charCodeAt(L+2)&&(H+=c.substring(L,M+1)),g="",C=0)}}0===C&&(G+=g)}j=E,E=p,M++}if(0<(L=H.length)){if(z=n,0<T&&(void 0!==(k=s(2,H,z,e,I,P,L,l,d,l))&&0===(H=k).length))return W+H+U;if(H=z.join(",")+"{"+H+"}",0!=R*O){switch(2!==R||i(H,2)||(O=0),O){case 111:H=H.replace(b,":-moz-$1")+H;break;case 112:H=H.replace(v,"::-webkit-input-$1")+H.replace(v,"::-moz-$1")+H.replace(v,":-ms-input-$1")+H}O=0}}return W+H+U}function r(e,t,r){var a=t.trim().split(m);t=a;var i=a.length,o=e.length;switch(o){case 0:case 1:var s=0;for(e=0===o?"":e[0]+" ";s<i;++s)t[s]=n(e,t[s],r).trim();break;default:var c=s=0;for(t=[];s<i;++s)for(var l=0;l<o;++l)t[c++]=n(e[l]+" ",a[s],r).trim()}return t}function n(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function a(e,t,r,n){var o=e+";",s=2*t+3*r+4*n;if(944===s){e=o.indexOf(":",9)+1;var c=o.substring(e,o.length-1).trim();return c=o.substring(0,e).trim()+c+";",1===R||2===R&&i(c,1)?"-webkit-"+c+c:c}if(0===R||2===R&&!i(o,1))return o;switch(s){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(E,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(c=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+c+o;case 1005:return h.test(o)?o.replace(d,":-webkit-")+o.replace(d,":-moz-")+o:o;case 1e3:switch(t=(c=o.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(t)){case 226:c=o.replace(k,"tb");break;case 232:c=o.replace(k,"tb-rl");break;case 220:c=o.replace(k,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+c+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,s=(c=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(111>c.charCodeAt(8))break;case 115:o=o.replace(c,"-webkit-"+c)+";"+o;break;case 207:case 102:o=o.replace(c,"-webkit-"+(102<s?"inline-":"")+"box")+";"+o.replace(c,"-webkit-"+c)+";"+o.replace(c,"-ms-"+c+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return c=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+c+"-ms-flex-"+c+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(C,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(C,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===x.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?a(e.replace("stretch","fill-available"),t,r,n).replace(":fill-available",":stretch"):o.replace(c,"-webkit-"+c)+o.replace(c,"-moz-"+c.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===r+n&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+o}return o}function i(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),$(2!==t?n:n.replace(A,"$1"),r,t)}function o(e,t){var r=a(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(S," or ($1)").substring(4):"("+t+")"}function s(e,t,r,n,a,i,o,s,c,u){for(var f,d=0,h=t;d<T;++d)switch(f=j[d].call(l,e,h,r,n,a,i,o,s,c,u)){case void 0:case!1:case!0:case null:break;default:h=f}if(h!==t)return h}function c(e){return void 0!==(e=e.prefix)&&($=null,e?"function"!=typeof e?R=1:(R=2,$=e):R=0),c}function l(e,r){var n=e;if(33>n.charCodeAt(0)&&(n=n.trim()),n=[n],0<T){var a=s(-1,r,n,n,I,P,0,0,0,0);void 0!==a&&"string"==typeof a&&(r=a)}var i=t(_,n,r,0,0);return 0<T&&(void 0!==(a=s(-2,i,n,n,I,P,i.length,0,0,0))&&(i=a)),"",O=0,P=I=1,i}var u=/^\0+/g,f=/[\0\r\f]/g,d=/: */g,h=/zoo|gra/,p=/([,: ])(transform)/g,m=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,y=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,b=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,S=/([\s\S]*?);/g,C=/-self|flex-/g,A=/[^]*?(:[rp][el]a[\w-]+)[^]*/,x=/stretch|:\s*\w+\-(?:conte|avail)/,E=/([^-])(image-set\()/,P=1,I=1,O=0,R=1,_=[],j=[],T=0,$=null,N=0;return l.use=function e(t){switch(t){case void 0:case null:T=j.length=0;break;default:if("function"==typeof t)j[T++]=t;else if("object"==typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else N=0|!!t}return e},l.set=c,void 0!==e&&c(e),l},u={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var f=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,d=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return f.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),h=r(5706),p=r.n(h);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var g=function(e,t){for(var r=[e[0]],n=0,a=t.length;n<a;n+=1)r.push(t[n],e[n+1]);return r},y=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,o.typeOf)(e)},v=Object.freeze([]),b=Object.freeze({});function k(e){return"function"==typeof e}function w(e){return e.displayName||e.name||"Component"}function S(e){return e&&"string"==typeof e.styledComponentId}var C="undefined"!=typeof process&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",A="undefined"!=typeof window&&"HTMLElement"in window,x=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY));function E(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var P=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,a=n;e>=a;)(a<<=1)<0&&E(16,""+e);this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var i=n;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),s=0,c=t.length;s<c;s++)this.tag.insertRule(o,t[s])&&(this.groupSizes[e]++,o++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var a=r;a<n;a++)this.tag.deleteRule(r)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),a=n+r,i=n;i<a;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),I=new Map,O=new Map,R=1,_=function(e){if(I.has(e))return I.get(e);for(;O.has(R);)R++;var t=R++;return I.set(e,t),O.set(t,e),t},j=function(e){return O.get(e)},T=function(e,t){t>=R&&(R=t+1),I.set(e,t),O.set(t,e)},$="style["+C+'][data-styled-version="5.3.3"]',N=new RegExp("^"+C+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),M=function(e,t,r){for(var n,a=r.split(","),i=0,o=a.length;i<o;i++)(n=a[i])&&e.registerName(t,n)},z=function(e,t){for(var r=(t.textContent||"").split("/*!sc*/\n"),n=[],a=0,i=r.length;a<i;a++){var o=r[a].trim();if(o){var s=o.match(N);if(s){var c=0|parseInt(s[1],10),l=s[2];0!==c&&(T(l,c),M(e,l,s[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(o)}}},D=function(){return"undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},L=function(e){var t=document.head,r=e||t,n=document.createElement("style"),a=function(e){for(var t=e.childNodes,r=t.length;r>=0;r--){var n=t[r];if(n&&1===n.nodeType&&n.hasAttribute(C))return n}}(r),i=void 0!==a?a.nextSibling:null;n.setAttribute(C,"active"),n.setAttribute("data-styled-version","5.3.3");var o=D();return o&&n.setAttribute("nonce",o),r.insertBefore(n,i),n},B=function(){function e(e){var t=this.element=L(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var a=t[r];if(a.ownerNode===e)return a}E(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),F=function(){function e(e){var t=this.element=L(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t),n=this.nodes[e];return this.element.insertBefore(r,n||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),G=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),H=A,U={isServer:!A,useCSSOMInjection:!x},W=function(){function e(e,t,r){void 0===e&&(e=b),void 0===t&&(t={}),this.options=m({},U,{},e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&A&&H&&(H=!1,function(e){for(var t=document.querySelectorAll($),r=0,n=t.length;r<n;r++){var a=t[r];a&&"active"!==a.getAttribute(C)&&(z(e,a),a.parentNode&&a.parentNode.removeChild(a))}}(this))}e.registerId=function(e){return _(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(m({},this.options,{},t),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(r=(t=this.options).isServer,n=t.useCSSOMInjection,a=t.target,e=r?new G(a):n?new B(a):new F(a),new P(e)));var e,t,r,n,a},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(_(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},t.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(_(e),r)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(_(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),r=t.length,n="",a=0;a<r;a++){var i=j(a);if(void 0!==i){var o=e.names.get(i),s=t.getGroup(a);if(o&&s&&o.size){var c=C+".g"+a+'[id="'+i+'"]',l="";void 0!==o&&o.forEach((function(e){e.length>0&&(l+=e+",")})),n+=""+s+c+'{content:"'+l+'"}/*!sc*/\n'}}}return n}(this)},e}(),Y=/(a)(d)/gi,q=function(e){return String.fromCharCode(e+(e>25?39:97))};function V(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=q(t%52)+r;return(q(t%52)+r).replace(Y,"$1-$2")}var X=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Z=function(e){return X(5381,e)};function J(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(k(r)&&!S(r))return!1}return!0}var K=Z("5.3.3"),Q=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&J(e),this.componentId=t,this.baseHash=X(K,t),this.baseStyle=r,W.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(e,t,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(n,this.staticRulesId))a.push(this.staticRulesId);else{var i=ye(this.rules,e,t,r).join(""),o=V(X(this.baseHash,i)>>>0);if(!t.hasNameForId(n,o)){var s=r(i,"."+o,void 0,n);t.insertRules(n,o,s)}a.push(o),this.staticRulesId=o}else{for(var c=this.rules.length,l=X(this.baseHash,r.hash),u="",f=0;f<c;f++){var d=this.rules[f];if("string"==typeof d)u+=d;else if(d){var h=ye(d,e,t,r),p=Array.isArray(h)?h.join(""):h;l=X(l,p+f),u+=p}}if(u){var m=V(l>>>0);if(!t.hasNameForId(n,m)){var g=r(u,"."+m,void 0,n);t.insertRules(n,m,g)}a.push(m)}}return a.join(" ")},e}(),ee=/^\s*\/\/.*$/gm,te=[":","[",".","#"];function re(e){var t,r,n,a,i=void 0===e?b:e,o=i.options,s=void 0===o?b:o,c=i.plugins,u=void 0===c?v:c,f=new l(s),d=[],h=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(r,n,a,i,o,s,c,l,u,f){switch(r){case 1:if(0===u&&64===n.charCodeAt(0))return e(n+";"),"";break;case 2:if(0===l)return n+"/*|*/";break;case 3:switch(l){case 102:case 112:return e(a[0]+n),"";default:return n+(0===f?"/*|*/":"")}case-2:n.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),p=function(e,n,i){return 0===n&&-1!==te.indexOf(i[r.length])||i.match(a)?e:"."+t};function m(e,i,o,s){void 0===s&&(s="&");var c=e.replace(ee,""),l=i&&o?o+" "+i+" { "+c+" }":c;return t=s,r=i,n=new RegExp("\\"+r+"\\b","g"),a=new RegExp("(\\"+r+"\\b){2,}"),f(o||!i?"":i,l)}return f.use([].concat(u,[function(e,t,a){2===e&&a.length&&a[0].lastIndexOf(r)>0&&(a[0]=a[0].replace(n,p))},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||E(15),X(e,t.name)}),5381).toString():"",m}var ne=n.createContext(),ae=(ne.Consumer,n.createContext()),ie=(ae.Consumer,new W),oe=re();function se(){return(0,n.useContext)(ne)||ie}function ce(){return(0,n.useContext)(ae)||oe}function le(e){var t=(0,n.useState)(e.stylisPlugins),r=t[0],a=t[1],i=se(),o=(0,n.useMemo)((function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),s=(0,n.useMemo)((function(){return re({options:{prefix:!e.disableVendorPrefixes},plugins:r})}),[e.disableVendorPrefixes,r]);return(0,n.useEffect)((function(){c()(r,e.stylisPlugins)||a(e.stylisPlugins)}),[e.stylisPlugins]),n.createElement(ne.Provider,{value:o},n.createElement(ae.Provider,{value:s},e.children))}var ue=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=oe);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.toString=function(){return E(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=oe),this.name+e.hash},e}(),fe=/([A-Z])/,de=/([A-Z])/g,he=/^ms-/,pe=function(e){return"-"+e.toLowerCase()};function me(e){return fe.test(e)?e.replace(de,pe).replace(he,"-ms-"):e}var ge=function(e){return null==e||!1===e||""===e};function ye(e,t,r,n){if(Array.isArray(e)){for(var a,i=[],o=0,s=e.length;o<s;o+=1)""!==(a=ye(e[o],t,r,n))&&(Array.isArray(a)?i.push.apply(i,a):i.push(a));return i}return ge(e)?"":S(e)?"."+e.styledComponentId:k(e)?"function"!=typeof(c=e)||c.prototype&&c.prototype.isReactComponent||!t?e:ye(e(t),t,r,n):e instanceof ue?r?(e.inject(r,n),e.getName(n)):e:y(e)?function e(t,r){var n,a,i=[];for(var o in t)t.hasOwnProperty(o)&&!ge(t[o])&&(Array.isArray(t[o])&&t[o].isCss||k(t[o])?i.push(me(o)+":",t[o],";"):y(t[o])?i.push.apply(i,e(t[o],o)):i.push(me(o)+": "+(n=o,(null==(a=t[o])||"boolean"==typeof a||""===a?"":"number"!=typeof a||0===a||n in u?String(a).trim():a+"px")+";")));return r?[r+" {"].concat(i,["}"]):i}(e):e.toString();var c}var ve=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function be(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return k(e)||y(e)?ve(ye(g(v,[e].concat(r)))):0===r.length&&1===e.length&&"string"==typeof e[0]?e:ve(ye(g(e,r)))}new Set;var ke=function(e,t,r){return void 0===r&&(r=b),e.theme!==r.theme&&e.theme||t||r.theme},we=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Se=/(^-|-$)/g;function Ce(e){return e.replace(we,"-").replace(Se,"")}var Ae=function(e){return V(Z(e)>>>0)};function xe(e){return"string"==typeof e&&!0}var Ee=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Pe=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Ie(e,t,r){var n=e[r];Ee(t)&&Ee(n)?Oe(n,t):e[r]=t}function Oe(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(var a=0,i=r;a<i.length;a++){var o=i[a];if(Ee(o))for(var s in o)Pe(s)&&Ie(e,o[s],s)}return e}var Re=n.createContext();Re.Consumer;var _e={};function je(e,t,r){var a=S(e),i=!xe(e),o=t.attrs,s=void 0===o?v:o,c=t.componentId,l=void 0===c?function(e,t){var r="string"!=typeof e?"sc":Ce(e);_e[r]=(_e[r]||0)+1;var n=r+"-"+Ae("5.3.3"+r+_e[r]);return t?t+"-"+n:n}(t.displayName,t.parentComponentId):c,u=t.displayName,f=void 0===u?function(e){return xe(e)?"styled."+e:"Styled("+w(e)+")"}(e):u,h=t.displayName&&t.componentId?Ce(t.displayName)+"-"+t.componentId:t.componentId||l,g=a&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,y=t.shouldForwardProp;a&&e.shouldForwardProp&&(y=t.shouldForwardProp?function(r,n,a){return e.shouldForwardProp(r,n,a)&&t.shouldForwardProp(r,n,a)}:e.shouldForwardProp);var C,A=new Q(r,h,a?e.componentStyle:void 0),x=A.isStatic&&0===s.length,E=function(e,t){return function(e,t,r,a){var i=e.attrs,o=e.componentStyle,s=e.defaultProps,c=e.foldedComponentIds,l=e.shouldForwardProp,u=e.styledComponentId,f=e.target,h=function(e,t,r){void 0===e&&(e=b);var n=m({},t,{theme:e}),a={};return r.forEach((function(e){var t,r,i,o=e;for(t in k(o)&&(o=o(n)),o)n[t]=a[t]="className"===t?(r=a[t],i=o[t],r&&i?r+" "+i:r||i):o[t]})),[n,a]}(ke(t,(0,n.useContext)(Re),s)||b,t,i),p=h[0],g=h[1],y=function(e,t,r,n){var a=se(),i=ce();return t?e.generateAndInjectStyles(b,a,i):e.generateAndInjectStyles(r,a,i)}(o,a,p),v=r,w=g.$as||t.$as||g.as||t.as||f,S=xe(w),C=g!==t?m({},t,{},g):t,A={};for(var x in C)"$"!==x[0]&&"as"!==x&&("forwardedAs"===x?A.as=C[x]:(l?l(x,d,w):!S||d(x))&&(A[x]=C[x]));return t.style&&g.style!==t.style&&(A.style=m({},t.style,{},g.style)),A.className=Array.prototype.concat(c,u,y!==u?y:null,t.className,g.className).filter(Boolean).join(" "),A.ref=v,(0,n.createElement)(w,A)}(C,e,t,x)};return E.displayName=f,(C=n.forwardRef(E)).attrs=g,C.componentStyle=A,C.displayName=f,C.shouldForwardProp=y,C.foldedComponentIds=a?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):v,C.styledComponentId=h,C.target=a?e.target:e,C.withComponent=function(e){var n=t.componentId,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(t,["componentId"]),i=n&&n+"-"+(xe(e)?e:Ce(w(e)));return je(e,m({},a,{attrs:g,componentId:i}),r)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=a?Oe({},e.defaultProps,t):t}}),C.toString=function(){return"."+C.styledComponentId},i&&p()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var Te=function(e){return function e(t,r,n){if(void 0===n&&(n=b),!(0,o.isValidElementType)(r))return E(1,String(r));var a=function(){return t(r,n,be.apply(void 0,arguments))};return a.withConfig=function(a){return e(t,r,m({},n,{},a))},a.attrs=function(a){return e(t,r,m({},n,{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},a}(je,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){Te[e]=Te(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=J(e),W.registerId(this.componentId+1)}var t=e.prototype;t.createStyles=function(e,t,r,n){var a=n(ye(this.rules,t,r,n).join(""),""),i=this.componentId+e;r.insertRules(i,i,a)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,r,n){e>2&&W.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)}}();!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var r=D();return"<style "+[r&&'nonce="'+r+'"',C+'="true"','data-styled-version="5.3.3"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?E(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return E(2);var r=((t={})[C]="",t["data-styled-version"]="5.3.3",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),a=D();return a&&(r.nonce=a),[n.createElement("style",m({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new W({isServer:!0}),this.sealed=!1}var t=e.prototype;t.collectStyles=function(e){return this.sealed?E(2):n.createElement(le,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return E(3)}}();var $e,Ne,Me,ze,De,Le,Be,Fe=Te,Ge=Fe.div($e||($e=i(["\n  margin-bottom: 48px;\n"]))),He=Fe.div(Ne||(Ne=i(["\n    display: flex;\n    flex-direction: horizontal;\n  "]))),Ue=Fe.img(Me||(Me=i(["\n    min-width: 150px;\n    width: 150px;\n    margin-right: 24px;\n    align-self: flex-start;\n    object-fit: contain;\n  "]))),We=Fe.div(ze||(ze=i(["\n    display: flex;\n    flex-direction: column;\n  "]))),Ye=Fe.div(De||(De=i(["\n    display: flex;\n    flex-direction: row;\n    margin-top: 24px;\n    * { margin: 0 8px; };\n"]))),qe=Fe.span(Le||(Le=i(["\n  opacity: 0.4;\n"]))),Ve=Fe.span(Be||(Be=i(["\n  opacity: 0.1;\n"]))),Xe=function(e){var t=e.title,r=e.author,a=e.cover,i=e.description,o=e.links;return n.createElement(Ge,null,n.createElement("h3",null,t," ",n.createElement(Ve,null,"|")," ",n.createElement(qe,null,r)),n.createElement(He,null,n.createElement(Ue,{src:a}),n.createElement(We,null,i,n.createElement(Ye,null,o.map((function(e){return n.createElement("a",{key:e.url,href:e.url},e.resourceName)}))))))},Ze=[{title:"A Brief History of Time",author:"Stephen Hawking",cover:"/book-covers/a-brief-history-of-time.jpg",description:"Was there a beginning of time? Could time run backwards? \n    Is the universe infinite or does it have boundaries? \n    These are just some of the questions considered in an internationally acclaimed masterpiece by one of the world's greatest thinkers. \n    It begins by reviewing the great theories of the cosmos from Newton to Einstein, before delving into the secrets which still lie at the heart of space and time, from the Big Bang to black holes, via spiral galaxies and strong theory.",links:[{resourceName:"Good Reads",url:"https://www.goodreads.com/book/show/45692858-a-brief-history-of-time"},{resourceName:"ЛитРес",url:"https://www.litres.ru/leonard-mlodinov/kratchayshaya-istoriya-vremeni/"}]},{title:"After dark",author:"Haruki Murakami",cover:"/book-covers/haruki-murakami-after-dark.jpg",description:"The midnight hour approaches in an almost empty all-night diner. Mari sips her coffee and glances up from a book as a young man, a musician, intrudes on her solitude. Both have missed the last train home.\n    Later, Mari is interrupted again by a girl from the Alphaville Hotel; a Chinese prostitute has been hurt by a client, and she needs Mari's help.\n    Meanwhile Mari's beautiful sister Eri sleeps a deep, heavy sleep that is 'to perfect, too pure' to be normal; she has lain asleep for two months. But tonight a the digital clock displays 00:00, a hint of life flickers across the TV screen, though the television's plug has been pulled out.\n    Strange nocturnal happenings, or a trick of the night?",links:[{resourceName:"Good Reads",url:"https://www.goodreads.com/book/show/3327199-after-dark"},{resourceName:"ЛитРес",url:"https://www.litres.ru/haruki-murakami/poslemrak/"}]},{title:"The Ocean at the End of the Lane",author:"Neil Gaiman",cover:"/book-covers/ocean-by-the-end-of-the-lane.jpeg",description:"A middle-aged man returns to his childhood home to attend a funeral. \n    Although the house he lived in is long gone, he is drawn to the farm at the end of the road, where, when he was seven, he encountered a most remarkable girl, Lettie Hempstock, and her mother and grandmother. \n    He hasn't thought of Lettie in decades, and yet as he sits by the pond (a pond that she'd claimed was an ocean) behind the ramshackle old farmhouse, the unremembered past comes flooding back.\n    And it is a past too strange, too frightening, too dangerous to have happened to anyone, let alone a small boy.",links:[{resourceName:"Good Reads",url:"https://www.goodreads.com/book/show/15783514-the-ocean-at-the-end-of-the-lane"},{resourceName:"ЛитРес",url:"https://www.litres.ru/nil-geyman/okean-v-konce-dorogi/"}]},{title:"[RU] Виват Император!",author:"Роман Злотников",cover:"/book-covers/roman-zlotnikov-vivat-imperator.jpeg",description:"В конце девяностых на политической арене России появляется молодой и амбициозный персонаж: Дмитрий Ярославичев, глава «Фонда Рюрика» и, по слухам, прямой наследник рода Романовых. \n    Его организация обладает неиссякаемыми финансовыми ресурсами, которые совершенно бескорыстно идут на развитие страны. \n    Власти в замешательстве – что заставляет Ярославичева разбрасываться деньгами, откуда у юного главы фонда такое состояние? \n    Неужели все, что он делает для соотечественников, можно объяснить мифической щедростью?..",links:[{resourceName:"ЛитРес",url:"https://www.litres.ru/roman-zlotnikov/vivat-imperator/"}]}],Je=function(){return n.createElement(a.Z,null,n.createElement("main",null,n.createElement("title",null,"Books"),n.createElement("h1",null,"Books"),Ze.map((function(e){return n.createElement(Xe,Object.assign({key:e.title+e.author},e))}))))}}}]);
//# sourceMappingURL=component---src-pages-books-js-dd2e10a5002460dbad67.js.map