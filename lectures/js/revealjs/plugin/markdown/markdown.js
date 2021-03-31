!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).RevealMarkdown=t()}(this,(function(){"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var n=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){function t(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1},getDefaults:t,changeDefaults:function(t){e.exports.defaults=t}}}));n.defaults,n.getDefaults,n.changeDefaults;const r=/[&<>"']/,s=/[&<>"']/g,i=/[<>"']|&(?!#?\w+;)/,a=/[<>"']|&(?!#?\w+;)/g,l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},o=e=>l[e];const c=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function h(e){return e.replace(c,(e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):"")}const p=/(^|[^\[])\^/g;const u=/[^\w:]/g,g=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;const d={},f=/^[^:]+:\/*[^/]*$/,k=/^([^:]+:)[\s\S]*$/,b=/^([^:]+:\/*[^/]*)[\s\S]*$/;function m(e,t){d[" "+e]||(f.test(e)?d[" "+e]=e+"/":d[" "+e]=x(e,"/",!0));const n=-1===(e=d[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(k,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(b,"$1")+t:e+t}function x(e,t,n){const r=e.length;if(0===r)return"";let s=0;for(;s<r;){const i=e.charAt(r-s-1);if(i!==t||n){if(i===t||!n)break;s++}else s++}return e.substr(0,r-s)}var w={escape:function(e,t){if(t){if(r.test(e))return e.replace(s,o)}else if(i.test(e))return e.replace(a,o);return e},unescape:h,edit:function(e,t){e=e.source||e,t=t||"";const n={replace:(t,r)=>(r=(r=r.source||r).replace(p,"$1"),e=e.replace(t,r),n),getRegex:()=>new RegExp(e,t)};return n},cleanUrl:function(e,t,n){if(e){let e;try{e=decodeURIComponent(h(n)).replace(u,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!g.test(n)&&(n=m(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n},resolveUrl:m,noopTest:{exec:function(){}},merge:function(e){let t,n,r=1;for(;r<arguments.length;r++)for(n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},splitCells:function(e,t){const n=e.replace(/\|/g,(e,t,n)=>{let r=!1,s=t;for(;--s>=0&&"\\"===n[s];)r=!r;return r?"|":" |"}).split(/ \|/);let r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n},rtrim:x,findClosingBracket:function(e,t){if(-1===e.indexOf(t[1]))return-1;const n=e.length;let r=0,s=0;for(;s<n;s++)if("\\"===e[s])s++;else if(e[s]===t[0])r++;else if(e[s]===t[1]&&(r--,r<0))return s;return-1},checkSanitizeDeprecation:function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}};const{defaults:y}=n,{rtrim:_,splitCells:z,escape:S,findClosingBracket:$}=w;function A(e,t,n){const r=t.href,s=t.title?S(t.title):null;return"!"!==e[0].charAt(0)?{type:"link",raw:n,href:r,title:s,text:e[1]}:{type:"image",raw:n,text:S(e[1]),href:r,title:s}}var v=class{constructor(e){this.options=e||y}space(e){const t=this.rules.block.newline.exec(e);if(t)return t[0].length>1?{type:"space",raw:t[0]}:{raw:"\n"}}code(e,t){const n=this.rules.block.code.exec(e);if(n){const e=t[t.length-1];if(e&&"paragraph"===e.type)return{raw:n[0],text:n[0].trimRight()};const r=n[0].replace(/^ {4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:_(r,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],n=function(e,t){const n=e.match(/^(\s+)(?:```)/);if(null===n)return t;const r=n[1];return t.split("\n").map(e=>{const t=e.match(/^\s+/);if(null===t)return e;const[n]=t;return n.length>=r.length?e.slice(r.length):e}).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim():t[2],text:n}}}heading(e){const t=this.rules.block.heading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[1].length,text:t[2]}}nptable(e){const t=this.rules.block.nptable.exec(e);if(t){const e={type:"table",header:z(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[],raw:t[0]};if(e.header.length===e.align.length){let t,n=e.align.length;for(t=0;t<n;t++)/^ *-+: *$/.test(e.align[t])?e.align[t]="right":/^ *:-+: *$/.test(e.align[t])?e.align[t]="center":/^ *:-+ *$/.test(e.align[t])?e.align[t]="left":e.align[t]=null;for(n=e.cells.length,t=0;t<n;t++)e.cells[t]=z(e.cells[t],e.header.length);return e}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],text:e}}}list(e){const t=this.rules.block.list.exec(e);if(t){let e=t[0];const n=t[2],r=n.length>1,s={type:"list",raw:e,ordered:r,start:r?+n:"",loose:!1,items:[]},i=t[0].match(this.rules.block.item);let a,l,o,c,h,p,u,g=!1;const d=i.length;for(let t=0;t<d;t++)a=i[t],e=a,l=a.length,a=a.replace(/^ *([*+-]|\d+\.) */,""),~a.indexOf("\n ")&&(l-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+l+"}","gm"),"")),t!==d-1&&(o=this.rules.block.bullet.exec(i[t+1])[0],(n.length>1?1===o.length:o.length>1||this.options.smartLists&&o!==n)&&(c=i.slice(t+1).join("\n"),s.raw=s.raw.substring(0,s.raw.length-c.length),t=d-1)),h=g||/\n\n(?!\s*$)/.test(a),t!==d-1&&(g="\n"===a.charAt(a.length-1),h||(h=g)),h&&(s.loose=!0),p=/^\[[ xX]\] /.test(a),u=void 0,p&&(u=" "!==a[1],a=a.replace(/^\[[ xX]\] +/,"")),s.items.push({type:"list_item",raw:e,task:p,checked:u,loose:h,text:a});return s}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:this.options.sanitize?"paragraph":"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):S(t[0]):t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:z(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let n,r=e.align.length;for(n=0;n<r;n++)/^ *-+: *$/.test(e.align[n])?e.align[n]="right":/^ *:-+: *$/.test(e.align[n])?e.align[n]="center":/^ *:-+ *$/.test(e.align[n])?e.align[n]="left":e.align[n]=null;for(r=e.cells.length,n=0;n<r;n++)e.cells[n]=z(e.cells[n].replace(/^ *\| *| *\| *$/g,""),e.header.length);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1]}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t)return{type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1]}}text(e,t){const n=this.rules.block.text.exec(e);if(n){const e=t[t.length-1];return e&&"text"===e.type?{raw:n[0],text:n[0]}:{type:"text",raw:n[0],text:n[0]}}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:S(t[1])}}tag(e,t,n){const r=this.rules.inline.tag.exec(e);if(r)return!t&&/^<a /i.test(r[0])?t=!0:t&&/^<\/a>/i.test(r[0])&&(t=!1),!n&&/^<(pre|code|kbd|script)(\s|>)/i.test(r[0])?n=!0:n&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0])&&(n=!1),{type:this.options.sanitize?"text":"html",raw:r[0],inLink:t,inRawBlock:n,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):S(r[0]):r[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=$(t[2],"()");if(e>-1){const n=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=""}let n=t[2],r="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);e?(n=e[1],r=e[3]):r=""}else r=t[3]?t[3].slice(1,-1):"";return n=n.trim().replace(/^<([\s\S]*)>$/,"$1"),A(t,{href:n?n.replace(this.rules.inline._escapes,"$1"):n,title:r?r.replace(this.rules.inline._escapes,"$1"):r},t[0])}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=(n[2]||n[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e||!e.href){const e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return A(n,e,n[0])}}strong(e){const t=this.rules.inline.strong.exec(e);if(t)return{type:"strong",raw:t[0],text:t[4]||t[3]||t[2]||t[1]}}em(e){const t=this.rules.inline.em.exec(e);if(t)return{type:"em",raw:t[0],text:t[6]||t[5]||t[4]||t[3]||t[2]||t[1]}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const n=/[^ ]/.test(e),r=e.startsWith(" ")&&e.endsWith(" ");return n&&r&&(e=e.substring(1,e.length-1)),e=S(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[1]}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let e,r;return"@"===n[2]?(e=S(this.options.mangle?t(n[1]):n[1]),r="mailto:"+e):(e=S(n[1]),r=e),{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let e,r;if("@"===n[2])e=S(this.options.mangle?t(n[0]):n[0]),r="mailto:"+e;else{let t;do{t=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0]}while(t!==n[0]);e=S(n[0]),r="www."===n[1]?"http://"+e:e}return{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t,n){const r=this.rules.inline.text.exec(e);if(r){let e;return e=t?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):S(r[0]):r[0]:S(this.options.smartypants?n(r[0]):r[0]),{type:"text",raw:r[0],text:e}}}};const{noopTest:T,edit:R,merge:O}=w,E={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:T,table:T,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};E.def=R(E.def).replace("label",E._label).replace("title",E._title).getRegex(),E.bullet=/(?:[*+-]|\d{1,9}\.)/,E.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,E.item=R(E.item,"gm").replace(/bull/g,E.bullet).getRegex(),E.list=R(E.list).replace(/bull/g,E.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+E.def.source+")").getRegex(),E._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",E._comment=/<!--(?!-?>)[\s\S]*?-->/,E.html=R(E.html,"i").replace("comment",E._comment).replace("tag",E._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),E.paragraph=R(E._paragraph).replace("hr",E.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",E._tag).getRegex(),E.blockquote=R(E.blockquote).replace("paragraph",E.paragraph).getRegex(),E.normal=O({},E),E.gfm=O({},E.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),E.gfm.nptable=R(E.gfm.nptable).replace("hr",E.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",E._tag).getRegex(),E.gfm.table=R(E.gfm.table).replace("hr",E.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",E._tag).getRegex(),E.pedantic=O({},E.normal,{html:R("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",E._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:T,paragraph:R(E.normal._paragraph).replace("hr",E.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",E.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const q={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:T,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^_([^\s_<][\s\S]*?[^\s_])_(?!_|[^\s,punctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\s,punctuation])|^\*([^\s*<\[])\*(?!\*)|^\*([^\s<"][\s\S]*?[^\s\[\*])\*(?![\]`punctuation])|^\*([^\s*"<\[][\s\S]*[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:T,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,_punctuation:"!\"#$%&'()*+\\-./:;<=>?@\\[^_{|}~"};q.em=R(q.em).replace(/punctuation/g,q._punctuation).getRegex(),q._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,q._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,q._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,q.autolink=R(q.autolink).replace("scheme",q._scheme).replace("email",q._email).getRegex(),q._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,q.tag=R(q.tag).replace("comment",E._comment).replace("attribute",q._attribute).getRegex(),q._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,q._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,q._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,q.link=R(q.link).replace("label",q._label).replace("href",q._href).replace("title",q._title).getRegex(),q.reflink=R(q.reflink).replace("label",q._label).getRegex(),q.normal=O({},q),q.pedantic=O({},q.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:R(/^!?\[(label)\]\((.*?)\)/).replace("label",q._label).getRegex(),reflink:R(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",q._label).getRegex()}),q.gfm=O({},q.normal,{escape:R(q.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),q.gfm.url=R(q.gfm.url,"i").replace("email",q.gfm._extended_email).getRegex(),q.breaks=O({},q.gfm,{br:R(q.br).replace("{2,}","*").getRegex(),text:R(q.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var P={block:E,inline:q};const{defaults:C}=n,{block:I,inline:Z}=P;function j(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function D(e){let t,n,r="";const s=e.length;for(t=0;t<s;t++)n=e.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),r+="&#"+n+";";return r}var N=class e{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||C,this.options.tokenizer=this.options.tokenizer||new v,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;const t={block:I.normal,inline:Z.normal};this.options.pedantic?(t.block=I.pedantic,t.inline=Z.pedantic):this.options.gfm&&(t.block=I.gfm,this.options.breaks?t.inline=Z.breaks:t.inline=Z.gfm),this.tokenizer.rules=t}static get rules(){return{block:I,inline:Z}}static lex(t,n){return new e(n).lex(t)}lex(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens}blockTokens(e,t=[],n=!0){let r,s,i,a;for(e=e.replace(/^ +$/gm,"");e;)if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),r.type&&t.push(r);else if(r=this.tokenizer.code(e,t))e=e.substring(r.raw.length),r.type?t.push(r):(a=t[t.length-1],a.raw+="\n"+r.raw,a.text+="\n"+r.text);else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.nptable(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),r.tokens=this.blockTokens(r.text,[],n),t.push(r);else if(r=this.tokenizer.list(e)){for(e=e.substring(r.raw.length),i=r.items.length,s=0;s<i;s++)r.items[s].tokens=this.blockTokens(r.items[s].text,[],!1);t.push(r)}else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),t.push(r);else if(n&&(r=this.tokenizer.def(e)))e=e.substring(r.raw.length),this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),t.push(r);else if(n&&(r=this.tokenizer.paragraph(e)))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.text(e,t))e=e.substring(r.raw.length),r.type?t.push(r):(a=t[t.length-1],a.raw+="\n"+r.raw,a.text+="\n"+r.text);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}return t}inline(e){let t,n,r,s,i,a;const l=e.length;for(t=0;t<l;t++)switch(a=e[t],a.type){case"paragraph":case"text":case"heading":a.tokens=[],this.inlineTokens(a.text,a.tokens);break;case"table":for(a.tokens={header:[],cells:[]},s=a.header.length,n=0;n<s;n++)a.tokens.header[n]=[],this.inlineTokens(a.header[n],a.tokens.header[n]);for(s=a.cells.length,n=0;n<s;n++)for(i=a.cells[n],a.tokens.cells[n]=[],r=0;r<i.length;r++)a.tokens.cells[n][r]=[],this.inlineTokens(i[r],a.tokens.cells[n][r]);break;case"blockquote":this.inline(a.tokens);break;case"list":for(s=a.items.length,n=0;n<s;n++)this.inline(a.items[n].tokens)}return e}inlineTokens(e,t=[],n=!1,r=!1){let s;for(;e;)if(s=this.tokenizer.escape(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.tag(e,n,r))e=e.substring(s.raw.length),n=s.inLink,r=s.inRawBlock,t.push(s);else if(s=this.tokenizer.link(e))e=e.substring(s.raw.length),"link"===s.type&&(s.tokens=this.inlineTokens(s.text,[],!0,r)),t.push(s);else if(s=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(s.raw.length),"link"===s.type&&(s.tokens=this.inlineTokens(s.text,[],!0,r)),t.push(s);else if(s=this.tokenizer.strong(e))e=e.substring(s.raw.length),s.tokens=this.inlineTokens(s.text,[],n,r),t.push(s);else if(s=this.tokenizer.em(e))e=e.substring(s.raw.length),s.tokens=this.inlineTokens(s.text,[],n,r),t.push(s);else if(s=this.tokenizer.codespan(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.br(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.del(e))e=e.substring(s.raw.length),s.tokens=this.inlineTokens(s.text,[],n,r),t.push(s);else if(s=this.tokenizer.autolink(e,D))e=e.substring(s.raw.length),t.push(s);else if(n||!(s=this.tokenizer.url(e,D))){if(s=this.tokenizer.inlineText(e,r,j))e=e.substring(s.raw.length),t.push(s);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(s.raw.length),t.push(s);return t}};const{defaults:L}=n,{cleanUrl:M,escape:H}=w;var U=class{constructor(e){this.options=e||L}code(e,t,n){const r=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,r);null!=t&&t!==e&&(n=!0,e=t)}return r?'<pre><code class="'+this.options.langPrefix+H(r,!0)+'">'+(n?e:H(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:H(e,!0))+"</code></pre>\n"}blockquote(e){return"<blockquote>\n"+e+"</blockquote>\n"}html(e){return e}heading(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,n){const r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"}listitem(e){return"<li>"+e+"</li>\n"}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+"</p>\n"}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return"<tr>\n"+e+"</tr>\n"}tablecell(e,t){const n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,n){if(null===(e=M(this.options.sanitize,this.options.baseUrl,e)))return n;let r='<a href="'+H(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>",r}image(e,t,n){if(null===(e=M(this.options.sanitize,this.options.baseUrl,e)))return n;let r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">",r}text(e){return e}},B=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}},F=class{constructor(){this.seen={}}slug(e){let t=e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){const e=t;do{this.seen[e]++,t=e+"-"+this.seen[e]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t}};const{defaults:V}=n,{unescape:X}=w;var G=class e{constructor(e){this.options=e||V,this.options.renderer=this.options.renderer||new U,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new B,this.slugger=new F}static parse(t,n){return new e(n).parse(t)}parse(e,t=!0){let n,r,s,i,a,l,o,c,h,p,u,g,d,f,k,b,m,x,w="";const y=e.length;for(n=0;n<y;n++)switch(p=e[n],p.type){case"space":continue;case"hr":w+=this.renderer.hr();continue;case"heading":w+=this.renderer.heading(this.parseInline(p.tokens),p.depth,X(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue;case"code":w+=this.renderer.code(p.text,p.lang,p.escaped);continue;case"table":for(c="",o="",i=p.header.length,r=0;r<i;r++)o+=this.renderer.tablecell(this.parseInline(p.tokens.header[r]),{header:!0,align:p.align[r]});for(c+=this.renderer.tablerow(o),h="",i=p.cells.length,r=0;r<i;r++){for(l=p.tokens.cells[r],o="",a=l.length,s=0;s<a;s++)o+=this.renderer.tablecell(this.parseInline(l[s]),{header:!1,align:p.align[s]});h+=this.renderer.tablerow(o)}w+=this.renderer.table(c,h);continue;case"blockquote":h=this.parse(p.tokens),w+=this.renderer.blockquote(h);continue;case"list":for(u=p.ordered,g=p.start,d=p.loose,i=p.items.length,h="",r=0;r<i;r++)k=p.items[r],b=k.checked,m=k.task,f="",k.task&&(x=this.renderer.checkbox(b),d?k.tokens.length>0&&"text"===k.tokens[0].type?(k.tokens[0].text=x+" "+k.tokens[0].text,k.tokens[0].tokens&&k.tokens[0].tokens.length>0&&"text"===k.tokens[0].tokens[0].type&&(k.tokens[0].tokens[0].text=x+" "+k.tokens[0].tokens[0].text)):k.tokens.unshift({type:"text",text:x}):f+=x),f+=this.parse(k.tokens,d),h+=this.renderer.listitem(f,m,b);w+=this.renderer.list(h,u,g);continue;case"html":w+=this.renderer.html(p.text);continue;case"paragraph":w+=this.renderer.paragraph(this.parseInline(p.tokens));continue;case"text":for(h=p.tokens?this.parseInline(p.tokens):p.text;n+1<y&&"text"===e[n+1].type;)p=e[++n],h+="\n"+(p.tokens?this.parseInline(p.tokens):p.text);w+=t?this.renderer.paragraph(h):h;continue;default:{const e='Token with "'+p.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return w}parseInline(e,t){t=t||this.renderer;let n,r,s="";const i=e.length;for(n=0;n<i;n++)switch(r=e[n],r.type){case"escape":s+=t.text(r.text);break;case"html":s+=t.html(r.text);break;case"link":s+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break;case"image":s+=t.image(r.href,r.title,r.text);break;case"strong":s+=t.strong(this.parseInline(r.tokens,t));break;case"em":s+=t.em(this.parseInline(r.tokens,t));break;case"codespan":s+=t.codespan(r.text);break;case"br":s+=t.br();break;case"del":s+=t.del(this.parseInline(r.tokens,t));break;case"text":s+=t.text(r.text);break;default:{const e='Token with "'+r.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return s}};const{merge:W,checkSanitizeDeprecation:J,escape:K}=w,{getDefaults:Q,changeDefaults:Y,defaults:ee}=n;function te(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(n=t,t=null),t=W({},te.defaults,t||{}),J(t),n){const r=t.highlight;let s;try{s=N.lex(e,t)}catch(e){return n(e)}const i=function(e){let i;if(!e)try{i=G.parse(s,t)}catch(t){e=t}return t.highlight=r,e?n(e):n(null,i)};if(!r||r.length<3)return i();if(delete t.highlight,!s.length)return i();let a=0;return te.walkTokens(s,(function(e){"code"===e.type&&(a++,r(e.text,e.lang,(function(t,n){if(t)return i(t);null!=n&&n!==e.text&&(e.text=n,e.escaped=!0),a--,0===a&&i()})))})),void(0===a&&i())}try{const n=N.lex(e,t);return t.walkTokens&&te.walkTokens(n,t.walkTokens),G.parse(n,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+K(e.message+"",!0)+"</pre>";throw e}}te.options=te.setOptions=function(e){return W(te.defaults,e),Y(te.defaults),te},te.getDefaults=Q,te.defaults=ee,te.use=function(e){const t=W({},e);if(e.renderer){const n=te.defaults.renderer||new U;for(const t in e.renderer){const r=n[t];n[t]=(...s)=>{let i=e.renderer[t].apply(n,s);return!1===i&&(i=r.apply(n,s)),i}}t.renderer=n}if(e.tokenizer){const n=te.defaults.tokenizer||new v;for(const t in e.tokenizer){const r=n[t];n[t]=(...s)=>{let i=e.tokenizer[t].apply(n,s);return!1===i&&(i=r.apply(n,s)),i}}t.tokenizer=n}if(e.walkTokens){const n=te.defaults.walkTokens;t.walkTokens=t=>{e.walkTokens(t),n&&n(t)}}te.setOptions(t)},te.walkTokens=function(e,t){for(const n of e)switch(t(n),n.type){case"table":for(const e of n.tokens.header)te.walkTokens(e,t);for(const e of n.tokens.cells)for(const n of e)te.walkTokens(n,t);break;case"list":te.walkTokens(n.items,t);break;default:n.tokens&&te.walkTokens(n.tokens,t)}},te.Parser=G,te.parser=G.parse,te.Renderer=U,te.TextRenderer=B,te.Lexer=N,te.lexer=N.lex,te.Tokenizer=v,te.Slugger=F,te.parse=te;var ne=te,re=/\[([\s\d,|-]*)\]/;return function(){var n;function r(e){var t=(e.querySelector("[data-template]")||e.querySelector("script")||e).textContent,n=(t=t.replace(new RegExp("__SCRIPT_END__","g"),"<\/script>")).match(/^\n?(\s*)/)[1].length,r=t.match(/^\n?(\t*)/)[1].length;return r>0?t=t.replace(new RegExp("\\n?\\t{"+r+"}","g"),"\n"):n>1&&(t=t.replace(new RegExp("\\n? {"+n+"}","g"),"\n")),t}function s(e){for(var t=e.attributes,n=[],r=0,s=t.length;r<s;r++){var i=t[r].name,a=t[r].value;/data\-(markdown|separator|vertical|notes)/gi.test(i)||(a?n.push(i+'="'+a+'"'):n.push(i))}return n.join(" ")}function i(e){return(e=e||{}).separator=e.separator||"^\r?\n---\r?\n$",e.notesSeparator=e.notesSeparator||"notes?:",e.attributes=e.attributes||"",e}function a(e,t){t=i(t);var n=e.split(new RegExp(t.notesSeparator,"mgi"));return 2===n.length&&(e=n[0]+'<aside class="notes">'+ne(n[1].trim())+"</aside>"),'<script type="text/template">'+(e=e.replace(/<\/script>/g,"__SCRIPT_END__"))+"<\/script>"}function l(e,t){t=i(t);for(var n,r,s,l=new RegExp(t.separator+(t.verticalSeparator?"|"+t.verticalSeparator:""),"mg"),o=new RegExp(t.separator),c=0,h=!0,p=[];n=l.exec(e);)!(r=o.test(n[0]))&&h&&p.push([]),s=e.substring(c,n.index),r&&h?p.push(s):p[p.length-1].push(s),c=l.lastIndex,h=r;(h?p:p[p.length-1]).push(e.substring(c));for(var u="",g=0,d=p.length;g<d;g++)p[g]instanceof Array?(u+="<section "+t.attributes+">",p[g].forEach((function(e){u+="<section data-markdown>"+a(e,t)+"</section>"})),u+="</section>"):u+="<section "+t.attributes+" data-markdown>"+a(p[g],t)+"</section>";return u}function o(e){return new Promise((function(t){var n=[];[].slice.call(e.querySelectorAll("[data-markdown]:not([data-markdown-parsed])")).forEach((function(e,t){e.getAttribute("data-markdown").length?n.push(function(e){return new Promise((function(t,n){var r=new XMLHttpRequest,s=e.getAttribute("data-markdown"),i=e.getAttribute("data-charset");null!=i&&""!=i&&r.overrideMimeType("text/html; charset="+i),r.onreadystatechange=function(e,r){4===r.readyState&&(r.status>=200&&r.status<300||0===r.status?t(r,s):n(r,s))}.bind(this,e,r),r.open("GET",s,!0);try{r.send()}catch(e){console.warn("Failed to get the Markdown file "+s+". Make sure that the presentation and the file are served by a HTTP server and the file can be found there. "+e),t(r,s)}}))}(e).then((function(t,n){e.outerHTML=l(t.responseText,{separator:e.getAttribute("data-separator"),verticalSeparator:e.getAttribute("data-separator-vertical"),notesSeparator:e.getAttribute("data-separator-notes"),attributes:s(e)})}),(function(t,n){e.outerHTML='<section data-state="alert">ERROR: The attempt to fetch '+n+" failed with HTTP status "+t.status+".Check your browser's JavaScript console for more details.<p>Remember that you need to serve the presentation HTML from a HTTP server.</p></section>"}))):e.getAttribute("data-separator")||e.getAttribute("data-separator-vertical")||e.getAttribute("data-separator-notes")?e.outerHTML=l(r(e),{separator:e.getAttribute("data-separator"),verticalSeparator:e.getAttribute("data-separator-vertical"),notesSeparator:e.getAttribute("data-separator-notes"),attributes:s(e)}):e.innerHTML=a(r(e))})),Promise.all(n).then(t)}))}function c(e,t,n){var r,s,i=new RegExp(n,"mg"),a=new RegExp('([^"= ]+?)="([^"]+?)"|(data-[^"= ]+?)(?=[" ])',"mg"),l=e.nodeValue;if(r=i.exec(l)){var o=r[1];for(l=l.substring(0,r.index)+l.substring(i.lastIndex),e.nodeValue=l;s=a.exec(o);)s[2]?t.setAttribute(s[1],s[2]):t.setAttribute(s[3],"");return!0}return!1}function h(){var e=n.getRevealElement().querySelectorAll("[data-markdown]:not([data-markdown-parsed])");return[].slice.call(e).forEach((function(e){e.setAttribute("data-markdown-parsed",!0);var t=e.querySelector("aside.notes"),n=r(e);e.innerHTML=ne(n),function e(t,n,r,s,i){if(null!=n&&null!=n.childNodes&&n.childNodes.length>0)for(var a=n,l=0;l<n.childNodes.length;l++){var o=n.childNodes[l];if(l>0)for(var h=l-1;h>=0;){var p=n.childNodes[h];if("function"==typeof p.setAttribute&&"BR"!=p.tagName){a=p;break}h-=1}var u=t;"section"==o.nodeName&&(u=o,a=o),"function"!=typeof o.setAttribute&&o.nodeType!=Node.COMMENT_NODE||e(u,o,a,s,i)}n.nodeType==Node.COMMENT_NODE&&0==c(n,r,s)&&c(n,t,i)}(e,e,null,e.getAttribute("data-element-attributes")||e.parentNode.getAttribute("data-element-attributes")||"\\.element\\s*?(.+?)$",e.getAttribute("data-attributes")||e.parentNode.getAttribute("data-attributes")||"\\.slide:\\s*?(\\S.+?)$"),t&&e.appendChild(t)})),Promise.resolve()}return{id:"markdown",init:function(r){n=r;var s=new ne.Renderer;return s.code=function(e,t){var n="";return re.test(t)&&(n=t.match(re)[1].trim(),n='data-line-numbers="'.concat(n,'"'),t=t.replace(re,"").trim()),"<pre><code ".concat(n,' class="').concat(t,'">').concat(e,"</code></pre>")},ne.setOptions(function(n){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?t(Object(s),!0).forEach((function(t){e(n,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):t(Object(s)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(s,e))}))}return n}({renderer:s},n.getConfig().markdown)),o(n.getRevealElement()).then(h)},processSlides:o,convertSlides:h,slidify:l,marked:ne}}}));