(this.webpackJsonptv_task=this.webpackJsonptv_task||[]).push([[0],{17:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var i=t(0),a=t(1),r=t.n(a),c=t(3),s=t.n(c),o=(t(17),t(9)),d=t(6),l=t(7),h=t(11),u=t(10),j=function(n){Object(h.a)(t,n);var e=Object(u.a)(t);function t(n){var i;return Object(d.a)(this,t),(i=e.call(this,n)).state={hasError:!1},i}return Object(l.a)(t,[{key:"render",value:function(){return this.state.hasError?Object(i.jsx)("div",{className:"error-critical",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445"}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(n){return{hasError:!0}}}]),t}(r.a.Component),g=t(5),m=t.n(g),p=t(8);var b=t(2),f=t.n(b);function v(n,e,t){var i=document.querySelector(".activePage"),a=0;null!==i&&(a=Number(i.innerHTML));for(var r=[],c=[],s=0,o=Math.ceil(Number(t)/50),d=1;d<=o;d++)r.push(d);"previousChannels"===n&&(a-=2),-1===Math.sign(a)&&(a=0);if(null===i){for(var l=0;l<=49;l++)c.push(e[l]);s=1}else{a===r[r.length-1]&&(a=r[r.length-1]);for(var h=50*a;h<=50*a+49&&t>h;h++)c.push(e[h]),s=a+1}return{renderingChannels:c,poginationChannels:r,activePage:s,paramRender:!0}}function x(n,e){function t(t){var a=[];if(0===e)a=Object(i.jsx)("div",{children:"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0434\u0430\u043d\u043d\u044b\u0435"});else for(var r="",c="",s="",o="",d="",l="",h="",u="",j=0;j<=n.renderingChannels.length-1;j++){try{r=n.renderingChannels[j].name}catch(g){r="\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"}try{c=n.renderingChannels[j].image.medium}catch(m){c="\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"}try{s=n.renderingChannels[j].genres[0]}catch(p){s="\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"}try{o=n.renderingChannels[j].network.country.code}catch(b){o="\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"}try{d=n.renderingChannels[j].runtime+" min"}catch(f){d="\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"}try{l=n.renderingChannels[j].rating.average}catch(v){l="\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"}try{h=n.renderingChannels[j].url}catch(x){h="\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"}try{u=n.renderingChannels[j].summary.replace(/<\/?[a-zA-Z]+>/gi,"")}catch(O){u="\u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"}a[j]=Object(i.jsx)("div",{id:n.renderingChannels[j].id,children:Object(i.jsxs)("a",{href:h,className:"channel",children:[Object(i.jsx)("img",{src:c,alt:r}),Object(i.jsx)("span",{id:"information-channelsName",children:r}),Object(i.jsx)("span",{id:"information-genres",children:s}),Object(i.jsx)("span",{id:"information-country",children:o}),Object(i.jsx)("span",{id:"information-duration",children:d}),Object(i.jsx)("span",{id:"information-rating",children:l}),Object(i.jsx)("div",{id:"info",children:u})]})},r+j)}return Object(i.jsx)("div",{className:"content-item-channels",id:"channelsTV",children:a})}function a(e){for(var t=[],a=0;a<=n.poginationChannels.length-1;a++)n.activePage-1===a?t[a]=Object(i.jsx)("div",{id:"page"+n.poginationChannels[a],className:"activePage",children:n.poginationChannels[a]},"activePage"+n.poginationChannels[a]):t[a]=Object(i.jsx)("div",{id:"page"+n.poginationChannels[a],children:n.poginationChannels[a]},n.poginationChannels[a]);return Object(i.jsx)("div",{className:"content-page-channels",id:"pageTV",children:t})}s.a.render(Object(i.jsxs)(r.a.StrictMode,{children:[Object(i.jsx)(t,{list:n.renderingChannels}),Object(i.jsx)(a,{listPage:n})]}),document.getElementById("content"))}function O(n,e){function t(){return(t=Object(p.a)(m.a.mark((function e(t,a){var r,c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(){var e=Number(s.length);!0===(i=e>0&&"not successful"===a?v(n,s,e):{paramRender:!0}).paramRender&&"not successful"===a&&i.renderingChannels.length>0&&(x(i,e),window.scroll(-0,-0))},e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,r(),a="successfully";case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var i={};!function(n,e){t.apply(this,arguments)}("https://api.tvmaze.com/shows?page=1","not successful")}function C(n){return console.log("1 content: render main container"),null==document.querySelector("#channelsTV")&&O("mount",n.state.id),Object(i.jsxs)("div",{className:"content-block",id:n.state.id,children:[Object(i.jsxs)("div",{className:"content-item-text channel",id:"text-content",children:[Object(i.jsx)("span",{id:"information-image",children:"\u041e\u0431\u043b\u043e\u0436\u043a\u0430"}),Object(i.jsx)("span",{id:"information-channelsName",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(i.jsx)("span",{id:"information-genres",children:"\u0416\u0430\u043d\u0440"}),Object(i.jsx)("span",{id:"information-country",children:"\u0421\u0442\u0440\u0430\u043d\u0430"}),Object(i.jsx)("span",{id:"information-duration",children:"\u0414\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"}),Object(i.jsx)("span",{id:"information-rating",children:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"})]}),Object(i.jsx)("div",{className:"content-item-main",id:"content"})]})}function y(n){var e=n.state,t=n.onClick,a=e.id,r="";return console.log("2 additionBlock: render additional and active element "+a+" (state "+e.addition+")"),r="moreChannels"===a?"gonext_103393.svg":"goprevious_103394.svg",Object(i.jsx)("div",{className:"additional-block",id:"additional",children:Object(i.jsx)("img",{className:"rotate",src:r,alt:"click here",onClick:function(){return t(a)},id:a})})}v.propTypes={id:f.a.string,data:f.a.object,ammountChannels:f.a.string},O.propTypes={id:f.a.string};var N=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,r=e.getLCP,c=e.getTTFB;t(n),i(n),a(n),r(n),c(n)}))};function k(){var n=r.a.useState([{id:"contentUser",addition:!1},{id:"previousChannels",addition:!1},{id:"moreChannels",addition:!1}]),e=Object(o.a)(n,2),t=e[0],a=e[1];function c(n){console.log("0 MountDom: check ID for repalce addition"),a(t.map((function(e){return e.id===n&&(e.addition=!0,O(n,t[1].id)),e}))),N(console.log)}return Object(i.jsx)("div",{className:"app-mount",children:Object(i.jsxs)("div",{className:"react-main-component",children:[Object(i.jsx)(j,{children:Object(i.jsx)(C,{state:t[0]},t[0].id)}),Object(i.jsxs)("div",{className:"prevNext",children:[Object(i.jsx)(j,{children:Object(i.jsx)(y,{state:t[1],onClick:c},t[1].id)}),Object(i.jsx)(j,{children:Object(i.jsx)(y,{state:t[2],onClick:c},t[2].id)})]})]})})}y.propTypes={onClick:f.a.func,id:f.a.string,addition:f.a.bool},s.a.render(Object(i.jsx)(k,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.4887215a.chunk.js.map
