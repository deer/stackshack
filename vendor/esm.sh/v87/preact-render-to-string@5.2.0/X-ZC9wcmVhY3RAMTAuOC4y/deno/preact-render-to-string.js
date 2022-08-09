/* esm.sh - esbuild bundle(preact-render-to-string@5.2.0) deno production */
import{options as f,Fragment as se}from"/v87/preact@10.8.2/deno/preact.js";var le=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,fe=/[&<>"]/;function I(t){var e=String(t);return fe.test(e)?e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):e}var z=function(t,e){return String(t).replace(/(\n+)/g,"$1"+(e||"	"))},j=function(t,e,r){return String(t).length>(e||40)||!r&&String(t).indexOf(`
`)!==-1||String(t).indexOf("<")!==-1},ee={};function ue(t){var e="";for(var r in t){var u=t[r];u!=null&&u!==""&&(e&&(e+=" "),e+=r[0]=="-"?r:ee[r]||(ee[r]=r.replace(/([A-Z])/g,"-$1").toLowerCase()),e+=": ",e+=u,typeof u=="number"&&le.test(r)===!1&&(e+="px"),e+=";")}return e||void 0}function T(t,e){for(var r in e)t[r]=e[r];return t}function W(t,e){return Array.isArray(e)?e.reduce(W,t):e!=null&&e!==!1&&t.push(e),t}var pe={shallow:!0},L=[],ce=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,te=/[\s\n\\/='"\0<>]/;function re(){this.__d=!0}m.render=m;var _e=function(t,e){return m(t,e,pe)},ne=[];function m(t,e,r){e=e||{},r=r||{};var u=f.__s;f.__s=!0;var d=h(t,e,r);return f.__c&&f.__c(t,ne),ne.length=0,f.__s=u,d}function h(t,e,r,u,d,g){if(t==null||typeof t=="boolean")return"";if(typeof t!="object")return I(t);var l=r.pretty,x=l&&typeof l=="string"?l:"	";if(Array.isArray(t)){for(var H="",y=0;y<t.length;y++)l&&y>0&&(H+=`
`),H+=h(t[y],e,r,u,d,g);return H}var b,a=t.type,p=t.props,q=!1;if(typeof a=="function"){if(q=!0,!r.shallow||!u&&r.renderRootComponent!==!1){if(a===se){var Q=[];return W(Q,t.props.children),h(Q,e,r,r.shallowHighOrder!==!1,d,g)}var R,n=t.__c={__v:t,context:e,props:t.props,setState:re,forceUpdate:re,__d:!0,__h:[]};f.__b&&f.__b(t);var w=f.__r;if(a.prototype&&typeof a.prototype.render=="function"){var S=a.contextType,V=S&&e[S.__c],Z=S!=null?V?V.props.value:S.__:e;(n=t.__c=new a(p,Z)).__v=t,n._dirty=n.__d=!0,n.props=p,n.state==null&&(n.state={}),n._nextState==null&&n.__s==null&&(n._nextState=n.__s=n.state),n.context=Z,a.getDerivedStateFromProps?n.state=T(T({},n.state),a.getDerivedStateFromProps(n.props,n.state)):n.componentWillMount&&(n.componentWillMount(),n.state=n._nextState!==n.state?n._nextState:n.__s!==n.state?n.__s:n.state),w&&w(t),R=n.render(n.props,n.state,n.context)}else for(var k=a.contextType,K=k&&e[k.__c],oe=k!=null?K?K.props.value:k.__:e,ae=0;n.__d&&ae++<25;)n.__d=!1,w&&w(t),R=a.call(t.__c,p,oe);return n.getChildContext&&(e=T(T({},e),n.getChildContext())),f.diffed&&f.diffed(t),h(R,e,r,r.shallowHighOrder!==!1,d,g)}a=(b=a).displayName||b!==Function&&b.name||function(B){var G=(Function.prototype.toString.call(B).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!G){for(var A=-1,J=L.length;J--;)if(L[J]===B){A=J;break}A<0&&(A=L.push(B)-1),G="UnnamedComponent"+A}return G}(b)}var O,_,i="<"+a;if(p){var $=Object.keys(p);r&&r.sortAttributes===!0&&$.sort();for(var F=0;F<$.length;F++){var o=$[F],s=p[o];if(o!=="children"){if(!te.test(o)&&(r&&r.allAttributes||o!=="key"&&o!=="ref"&&o!=="__self"&&o!=="__source")){if(o==="defaultValue")o="value";else if(o==="className"){if(p.class!==void 0)continue;o="class"}else d&&o.match(/^xlink:?./)&&(o=o.toLowerCase().replace(/^xlink:?/,"xlink:"));if(o==="htmlFor"){if(p.for)continue;o="for"}o==="style"&&s&&typeof s=="object"&&(s=ue(s)),o[0]==="a"&&o[1]==="r"&&typeof s=="boolean"&&(s=String(s));var P=r.attributeHook&&r.attributeHook(o,s,e,r,q);if(P||P==="")i+=P;else if(o==="dangerouslySetInnerHTML")_=s&&s.__html;else if(a==="textarea"&&o==="value")O=s;else if((s||s===0||s==="")&&typeof s!="function"){if(!(s!==!0&&s!==""||(s=o,r&&r.xml))){i+=" "+o;continue}if(o==="value"){if(a==="select"){g=s;continue}a==="option"&&g==s&&p.selected===void 0&&(i+=" selected")}i+=" "+o+'="'+I(s)+'"'}}}else O=s}}if(l){var U=i.replace(/\n\s*/," ");U===i||~U.indexOf(`
`)?l&&~i.indexOf(`
`)&&(i+=`
`):i=U}if(i+=">",te.test(a))throw new Error(a+" is not a valid HTML tag name in "+i);var C,ie=ce.test(a)||r.voidElements&&r.voidElements.test(a),c=[];if(_)l&&j(_)&&(_=`
`+x+z(_,x)),i+=_;else if(O!=null&&W(C=[],O).length){for(var D=l&&~i.indexOf(`
`),X=!1,E=0;E<C.length;E++){var M=C[E];if(M!=null&&M!==!1){var v=h(M,e,r,!0,a==="svg"||a!=="foreignObject"&&d,g);if(l&&!D&&j(v)&&(D=!0),v)if(l){var Y=v.length>0&&v[0]!="<";X&&Y?c[c.length-1]+=v:c.push(v),X=Y}else c.push(v)}}if(l&&D)for(var N=c.length;N--;)c[N]=`
`+x+z(c[N],x)}if(c.length||_)i+=c.join("");else if(r&&r.xml)return i.substring(0,i.length-1)+" />";return!ie||C||_?(l&&~i.indexOf(`
`)&&(i+=`
`),i+="</"+a+">"):i=i.replace(/>$/," />"),i}m.shallowRender=_e;var ve=m;export{ve as default,m as render,m as renderToStaticMarkup,m as renderToString,_e as shallowRender};
