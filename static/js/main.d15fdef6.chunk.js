(this["webpackJsonpreact-messenger"]=this["webpackJsonpreact-messenger"]||[]).push([[0],[,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,,,,,,,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(5),c=a.n(s),o=(a(16),a(17),a(1)),i=a.n(o),u=a(2),m=a(6),l=a(7),g=a(9),d=a(8),h=(a(19),a(27)),f=a(3),v=a.n(f);function p(e){var t=1+Math.random()*e;return Math.floor(t)}function _(e,t){return e.reduce((function(e,a,n){return e[a]=t(a,n),e}),{})}function E(e){return function(t,a){return{guid:t,name:e[a],avatar:v.a}}}function y(e){return function(t,a){return{guid:t,name:e[a],logo:v.a}}}function N(e,t){return function(){return function(e,t){for(var a,n,r=p(e.length-1),s=[],c=0;c<=r;c+=1){var o=Object(h.a)(),i=t[p(t.length-1)],u=e[p(e.length-1)],m=(a=new Date(2020,0,1),n=new Date,new Date(a.getTime()+Math.random()*(n.getTime()-a.getTime())).getTime());s.push({guid:o,authorId:i,content:u,timestamp:m})}return s}(e,t)}}var b,w,S=function(){var e=null,t=null,n=null;return Object(u.a)(i.a.mark((function r(){var s;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e&&t&&n){r.next=7;break}return r.next=3,a.e(3).then(a.t.bind(null,28,3));case 3:s=r.sent,e=_(s.usernames.map((function(){return Object(h.a)()})),E(s.usernames)),t=_(s.usernames.map((function(){return Object(h.a)()})),y(s.chatNames)),n=_(Object.keys(t),N(s.messages,Object.keys(e)));case 7:return r.abrupt("return",{userStorage:e,chatStorage:t,messageStorage:n});case 8:case"end":return r.stop()}}),r)})))}();!function(e){e[e.Service=0]="Service",e[e.Text=1]="Text"}(b||(b={})),function(e){e.short="short",e.numeric="numeric"}(w||(w={}));var M=function(e){return e>=10?e:"0".concat(e)},T=function(e){var t=new Date(e);return{day:M(t.getDate()),month:M(t.getMonth()+1),year:M(t.getFullYear()),hours:M(t.getHours()),minutes:M(t.getMinutes()),seconds:M(t.getSeconds())}},k={getDate:function(e){var t=T(e),a=t.day,n=t.month,r=t.year;return"".concat(a,"/").concat(n,"/").concat(r)},getTime:function(e){var t=T(e),a=t.hours,n=t.minutes,r=t.seconds;return"".concat(a,":").concat(n,":").concat(r)},removeTimeFromTimestamp:function(e){var t=new Date(e);return new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()},getServiceMessage:function(e){return new Date(e).toLocaleString("default",{weekday:w.short,month:w.short,day:w.numeric,year:w.numeric}).replace(/,/g,"")}},C={mapChatInfoToChatCardProps:function(e,t,a,n,r){return Object.keys(e).map((function(s){var c=e[s],o=a[c.guid],i=o[o.length-1];return{chat:c,lastMessage:i,author:t[i.authorId],selected:n===c.guid,onChatSelected:r}}))},mapMessageToMessageWithAuthor:function(e,t){var a=new Set;return e.reduce((function(e,n){var r=k.removeTimeFromTimestamp(n.timestamp);return a.has(r)||(a.add(r),e.push({guid:Object(h.a)(),timestamp:n.timestamp,type:b.Service})),e.push({guid:n.guid,timestamp:n.timestamp,content:n.content,author:t[n.authorId],type:b.Text}),e}),[])}},j=(a(20),a(21),function(e){var t=e.className,a=e.src,n=e.alt;return r.a.createElement("div",{className:t},r.a.createElement("img",{src:a,alt:n}))});j.defaultProps={alt:"Avatar"};var O=j,D={chat:{cardIcon:"Chat icon",messageAuthor:"Author avatar",serviceMessage:"service-message"}},x=function(e){var t=e.chat,a=e.author,n=e.lastMessage,s=e.selected,c=e.onChatSelected,o=k.getDate(n.timestamp);return r.a.createElement("button",{className:"card-wrap button-reset","data-guid":t.guid,onClick:c,type:"button"},r.a.createElement("section",{className:"card ".concat(s?"selected":"")},r.a.createElement("section",{className:"card__body"},r.a.createElement(O,{className:"card__logo",src:t.logo,alt:D.chat.cardIcon}),r.a.createElement("section",{className:"card__info"},r.a.createElement("div",{className:"card__info__top"},r.a.createElement("p",{className:"card__info__top__name"},t.name),r.a.createElement("p",{className:"card__info__top__date"},o)),r.a.createElement("div",{className:"card__info__bottom"},r.a.createElement("p",{className:"card__info__bottom__author"},a.name,":"),r.a.createElement("p",{className:"card__info__bottom__message"},n.content))))))},L=function(e){var t=e.chatList;return r.a.createElement("section",null,t.map((function(e){return r.a.createElement(x,Object.assign({},e,{key:e.chat.guid}))})))},I=(a(22),function(e){var t=e.className,a=e.children;return r.a.createElement("div",{className:t},a)});I.defaultProps={className:"message-wrap"};var A=I,F=(a(23),function(e){var t=e.author,a=e.content,n=e.timestamp;return r.a.createElement(A,null,r.a.createElement("section",{style:{position:"relative"},className:"message"},r.a.createElement(O,{className:"message__icon",src:t.avatar,alt:D.chat.messageAuthor}),r.a.createElement("div",{className:"message__body"},r.a.createElement("span",{className:"message__author"},t.name),r.a.createElement("div",{className:"message__content"},r.a.createElement("span",null,a))),r.a.createElement("div",{className:"message__time"},r.a.createElement("span",{className:"message__created"},k.getTime(n)))))}),P=(a(24),function(e){var t=e.timestamp;return r.a.createElement(A,{className:D.chat.serviceMessage},r.a.createElement("span",{className:"service-message__date"},k.getServiceMessage(t)))}),W=(a(25),function(e){var t=e.messageList;return r.a.createElement("div",{className:"message-history"},t.map((function(e){switch(e.type){case b.Service:return r.a.createElement(P,Object.assign({key:e.guid},e));case b.Text:default:return r.a.createElement(F,Object.assign({key:e.guid},e))}})))}),B=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(m.a)(this,a),(e=t.call(this,n)).onChatSelected=function(t){e.setState({selectedChat:t.currentTarget.dataset.guid})},e.state={selectedChat:null,chats:{},users:{},messages:{}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,a=t.userStorage,n=t.chatStorage,r=t.messageStorage,this.setState({chats:n,users:a,messages:r});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getMessageList",value:function(){var e=this.state,t=e.selectedChat,a=e.messages,n=e.users,r=t?a[t]:[];return C.mapMessageToMessageWithAuthor(r,n)}},{key:"getChatList",value:function(){var e=this.state,t=e.chats,a=e.users,n=e.messages,r=e.selectedChat;return C.mapChatInfoToChatCardProps(t,a,n,r,this.onChatSelected)}},{key:"render",value:function(){var e=this.getChatList(),t=this.getMessageList();return r.a.createElement("main",{className:"layout"},r.a.createElement("aside",{className:"layout__sidebar"},r.a.createElement(L,{chatList:e})),r.a.createElement("div",{className:"layout__content"},r.a.createElement(W,{messageList:t})))}}]),a}(n.Component);var J=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.d15fdef6.chunk.js.map