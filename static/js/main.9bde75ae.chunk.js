(this["webpackJsonpreact-messenger"]=this["webpackJsonpreact-messenger"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e){e.exports=JSON.parse('{"chatNames":["Moths","Humming Birds","Saints","Greys","Grey Jackets","Grey Legs","United","Athletic","Grey Moths","Grey Humming Birds","Grey Saints","Compassionate Moths","Compassionate Humming Birds","Compassionate Saints","Selfish Moths","Selfish Humming Birds","Selfish Saints","Smart Moths","Smart Humming Birds","Smart Saints"],"chatGuids":["32c6cd58-9e1a-4ff4-b4df-f4f415c9e098","168a1f3a-3736-41e5-9311-0be24790be89","82cd67d3-bfbd-4a25-b491-f8707b59e918","88dd329c-9c2c-498a-ab16-82ee39ad1a9d","b360d198-d753-4de3-bcc1-5e9fbf0e6c3c","45d96437-a241-4267-8850-f0c113405ff6","2567b272-2028-4c32-b8c8-364f85375d06","748c2869-62e1-4b6a-be48-a871711689c8","3cc0a7f8-2940-4503-9535-649b1c7ddcde","e3d8d7c4-7896-4620-80b0-2e788184aceb","4e13c1b2-5e31-4a2c-a5e0-6e96d9c591fb","f20c5456-2436-4832-8943-4d9c03ebdba3","b4628ec6-b3eb-4adc-8809-9c02bc79f0bc","8d6a5d2f-9e72-4655-b3ac-f3d87d7417e6","9776a8e0-ee26-484a-b337-3599770f0fed","2996a1f0-ec98-4102-95f3-8442944abe7b","65d9def0-b439-4dc1-b7a3-7b1d0132379c","232979e5-b9ee-4647-821a-69c51c5588ce","34d55a15-4ea0-4228-a00e-050a4d231ee6","0ad2adc5-e24f-4919-a5ac-2ef5519b0ea0"],"usernames":["Command Ox","Mad Iguana","Growling Elephant","Golden Basilisk","Cannibal Dingo","Slasher Deer","Eastern Chicken","Crying Centipede","Resistance Cobra","Yellow Crow","Copper Raptor","Butterfly","Howling Pig","Radio Ape","Bullet Night Owl","Shining Hound","Green Horse","Southern Ant","Wild Crab","Rescue Hawk"],"messages":["Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minus eum quod nisi cumque amet unde, ex est dolorum deserunt omnis ipsum minima quasi iste. Non eum fugiat iste natus.","Lorem ipsum dolor sit amet consectetur adipisicing elit.","Aut minus eum quod nisi cumque amet unde, ex est dolorum deserunt omnis ipsum minima quasi iste.","Non eum fugiat iste natus.","Aut minus eum quod nisi cumque amet unde, ex est dolorum deserunt omnis ipsum minima quasi iste. Non eum fugiat iste natus.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eum fugiat iste natus.","Non eum fugiat iste natus. Lorem ipsum dolor sit amet consectetur adipisicing elit."]}')},,,,,,,,,,,,function(e,t,a){e.exports=a(59)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(25),i=a.n(s),o=a(11);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c,u=a(20),l=a.n(u),m=a(26),d=a(2),h=a(3),g=a(8),f=a(7),v=a(9),p={cardIcon:"Chat icon",messageAuthor:"Author avatar",default:"Avatar"},b={serviceMessage:"service-message",messageWrap:"message-wrap"},E={actions:{signIn:"login",signUp:"sign up"},link:{signIn:"Doesn't have an account?",signUp:"Already have an account?"},validation:{required:"[[FIELD]] is required",forbiddenFieldThreeChars:"[[FIELD]] must contain minimum three characters: letters, numbers, hyphen or underscore",forbiddenFieldEightChars:"[[FIELD]] must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"}},S=(a(35),function(e){var t=e.className,a=e.src,n=e.alt,s=void 0===n?p.default:n;return r.a.createElement("div",{className:t},r.a.createElement("img",{src:a,alt:s}))}),y=(a(36),function(e){var t=e.chatName,a=e.lastMessageDate;return r.a.createElement("div",{className:"card-meta"},r.a.createElement("div",{className:"card-meta__name"},r.a.createElement("span",null,t)),r.a.createElement("div",{className:"card-meta__date"},r.a.createElement("span",null,a)))}),O=(a(37),function(e){var t=e.author,a=e.message;return r.a.createElement("div",{className:"card-message"},r.a.createElement("span",{className:"card-message__author"},t,":"),r.a.createElement("span",{className:"card-message__content"},a))}),N=function(e){return e>=10?e:"0".concat(e)},w=function(e){return new Date(e).setHours(0,0,0,0)},I=(a(38),function(e){var t=e.logo,a=e.name,n=e.lastMessage,s=e.isSelected,i=function(e){var t=new Date(e),a=N(t.getDate()),n=N(t.getMonth()+1),r=N(t.getFullYear());return"".concat(a,"/").concat(n,"/").concat(r)}(n.timestamp);return r.a.createElement("div",{className:"card-wrap ".concat(s?"selected":"")},r.a.createElement("section",{className:"card"},r.a.createElement("section",{className:"card__body"},r.a.createElement(S,{className:"card__logo",src:t,alt:p.cardIcon}),r.a.createElement("section",{className:"card__info center"},r.a.createElement(y,{chatName:a,lastMessageDate:i}),r.a.createElement(O,{author:n.author.name,message:n.content})))))});!function(e){e.chatId="chatId"}(c||(c={}));var C=function(e){var t=e.chatList,a=e.selectedChat;return r.a.createElement("section",null,t.map((function(e){var t=a===e.guid;return r.a.createElement(v.a,{className:"link-reset",to:"/chat?".concat(c.chatId,"=").concat(e.guid),key:e.guid},r.a.createElement(I,Object.assign({},e,{isSelected:t})))})))},j=function(){function e(t,a){Object(d.a)(this,e),this.dictionary=t,this.pattern=a}return Object(h.a)(e,[{key:"execute",value:function(e){for(var t=new Map,a=this.pattern.exec(e);null!==a;a=this.pattern.exec(e)){var n=this.dictionary[a[0]];if(n){var r,s=this.pattern.exec(e),i=null!==(r=null===s||void 0===s?void 0:s[0])&&void 0!==r?r:"";t.set(n,i)}}return t}}]),e}(),k=new RegExp(/[^?=&]+/g),L=new j(c,k);function M(e){return function(t){return function(a){var n,s=a.location,i=L.execute(null!==(n=null===s||void 0===s?void 0:s.search)&&void 0!==n?n:"").get(e);return r.a.createElement(t,Object.assign({dataId:i},a))}}}var _,D=a(5),x=a(13),R=a(60),T=a(17);function G(e){var t=1+Math.random()*e;return Math.floor(t)}!function(e){e[e.Service=0]="Service",e[e.Text=1]="Text"}(_||(_={}));var B=a(16),A=a.n(B);function P(e,t){return e.reduce((function(e,a,n){return e[a]=t(a,n),e}),{})}function H(e,t){return function(){return function(e,t){for(var a,n,r=G(e.length-1),s=[],i=0;i<=r;i+=1){var o=Object(R.a)(),c=t[G(t.length-1)],u=e[G(e.length-1)],l=(a=new Date(2020,0,1),n=new Date,new Date(a.getTime()+Math.random()*(n.getTime()-a.getTime())).getTime()),m=!!G(1);s.push({guid:o,authorId:c,content:u,timestamp:l,type:_.Text}),m&&s.push({guid:Object(R.a)(),authorId:c,content:e[G(e.length-1)],timestamp:l+G(12e5),type:_.Text})}return s}(e,t)}}var U=function(){var e=sessionStorage.getItem("user");return null!==e?JSON.parse(e):e},W=function(){function e(){Object(d.a)(this,e),this.userStorage={},this.chatStorage={},this.messageStorage={};var t=T.chatNames,a=T.chatGuids,n=T.usernames,r=T.messages;this.initializeStorage(t,a,n,r),this.initMockUser()}return Object(h.a)(e,[{key:"getUserById",value:function(e){return this.userStorage[e]}},{key:"getChats",value:function(){return this.chatStorage}},{key:"getMessages",value:function(){return this.messageStorage}},{key:"getChatHistoryByChatId",value:function(e){return this.messageStorage[e]}},{key:"addMessage",value:function(e,t){this.messageStorage[e].push(t)}},{key:"addUser",value:function(e){this.userStorage[e.guid]=e}},{key:"getUser",value:function(e){var t=Object.values(this.userStorage).filter((function(t){return t.name===e.login}))[0];return t&&t.password===e.password?t:null}},{key:"initializeStorage",value:function(e,t,a,n){this.userStorage=P(a.map((function(){return Object(R.a)()})),function(e){return function(t,a){return{guid:t,name:e[a],avatar:A.a}}}(a)),this.chatStorage=P(t,function(e){return function(t,a){return{guid:t,name:e[a],logo:A.a}}}(e)),this.messageStorage=P(t,H(n,Object.keys(this.userStorage)))}},{key:"initMockUser",value:function(){var e=U();e&&(this.userStorage[e.guid]=e)}}]),e}(),F=new(function(){function e(t){Object(d.a)(this,e),this.storage=t}return Object(h.a)(e,[{key:"getChatList",value:function(){var e=this.storage.getChats(),t=this.storage.getMessages(),a=this.mapToChatInfo(e,t);return Promise.resolve(a)}},{key:"getChatHistoryByChatId",value:function(e){var t=this,a=this.storage.getChatHistoryByChatId(e).map((function(e){return t.mapToMessage(e)}));return Promise.resolve(a)}},{key:"sendMessagetoChat",value:function(e,t){var a=t.author,n=Object(x.a)(t,["author"]),r=Object(D.a)({},n,{authorId:a.guid});return this.storage.addMessage(e,r),Promise.resolve(this.mapToMessage(r))}},{key:"signUp",value:function(e){var t={guid:Object(R.a)(),avatar:A.a,name:e.login,password:e.password};this.storage.addUser(t);var a=Object(x.a)(t,["password"]);return Promise.resolve(a)}},{key:"signIn",value:function(e){var t=this.storage.getUser(e);if(t){t.password;var a=Object(x.a)(t,["password"]);return Promise.resolve(a)}return Promise.reject()}},{key:"mapToMessage",value:function(e){return{guid:e.guid,timestamp:e.timestamp,author:this.storage.getUserById(e.authorId),content:e.content,type:e.type}}},{key:"mapToChatInfo",value:function(e,t){var a=this;return Object.keys(e).map((function(n){var r=e[n],s=t[r.guid],i=s[s.length-1];return Object(D.a)({},r,{lastMessage:a.mapToMessage(i)})}))}}]),e}())(new W),q=function(e){var t=new Set;return e.reduce((function(e,a){var n=w(a.timestamp);return t.has(n)||(t.add(n),e.push({guid:Object(R.a)(),timestamp:n,type:_.Service})),e.push(a),e}),[])},z=function(e,t){var a=(null===t||void 0===t?void 0:t.type)!==_.Service&&(null===t||void 0===t?void 0:t.author.guid)===e.author.guid,n=w(null===t||void 0===t?void 0:t.timestamp)===w(e.timestamp);return a&&n?Object(D.a)({},e,{isChained:!0}):Object(D.a)({},e,{isChained:!1})},J=function(e){return e.map((function(t,a){if(t.type===_.Text){var n=e[a-1];return z(t,n)}return t}))},$=function(e){return{content:e.content,author:e.author,timestamp:e.timestamp,guid:e.guid,type:_.Text,isChained:!1}},K=function(e,t){var a=U();if(a){var n=function(e,t){return{content:e,author:t,timestamp:(new Date).getTime(),guid:Object(R.a)(),type:_.Text}}(t,a);return F.sendMessagetoChat(e,n).then((function(e){return $(e)}))}return Promise.reject()},X=(a(44),function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={chatList:[]},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.getChatList();case 3:t=e.sent,this.setState({chatList:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"getSortedChatList",value:function(){return this.state.chatList.sort((function(e,t){return e.lastMessage.timestamp-t.lastMessage.timestamp}))}},{key:"render",value:function(){var e=this.getSortedChatList(),t=this.props.dataId;return r.a.createElement("aside",{className:"sidebar ".concat(t?"hidden":"displayed")},r.a.createElement("div",{className:"sidebar-content-wrap"},r.a.createElement(C,{selectedChat:t,chatList:e})))}}]),a}(n.Component)),Z=Object(o.f)(M(c.chatId)(X)),Y=(a(45),function(e){var t=e.className,a=void 0===t?b.messageWrap:t,n=e.children;return r.a.createElement("div",{className:a},n)}),Q=(a(46),function(e){var t=e.timestamp;return r.a.createElement(Y,{className:b.serviceMessage},r.a.createElement("span",{className:"service-message__date"},new Date(t).toDateString()))}),V=(a(47),function(e){var t=e.author,a=e.content,n=e.timestamp,s=e.isChained,i=e.forwardedRef;return r.a.createElement(Y,null,r.a.createElement("section",{ref:i,className:"message ".concat(s?"chained":"")},r.a.createElement(S,{className:"message__icon",src:t.avatar,alt:p.messageAuthor}),r.a.createElement("div",{className:"message__body"},r.a.createElement("span",{className:"message__author"},t.name),r.a.createElement("div",{className:"message__content"},r.a.createElement("span",null,a))),r.a.createElement("div",{className:"message__time"},r.a.createElement("span",null,function(e){var t=new Date(e),a=N(t.getHours()),n=N(t.getMinutes()),r=N(t.getSeconds());return"".concat(a,":").concat(n,":").concat(r)}(n)))))}),ee=(a(48),function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).messageListContainerRef=void 0,n.lastMessageRef=void 0,n.messageListContainerRef=r.a.createRef(),n.lastMessageRef=r.a.createRef(),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"scrollToBottom",value:function(){var e,t=(null===(e=this.lastMessageRef.current)||void 0===e?void 0:e.getBoundingClientRect().bottom)||0;if(this.messageListContainerRef.current){var a=this.messageListContainerRef.current.scrollTop;this.messageListContainerRef.current.scrollTo(0,a+t)}}},{key:"render",value:function(){var e=this,t=this.props.messageList;return r.a.createElement("div",{ref:this.messageListContainerRef,className:"message-history"},t.map((function(a,n){var s;switch(n===t.length-1&&(s=e.lastMessageRef),a.type){case _.Service:return r.a.createElement(Q,Object.assign({key:a.guid},a));case _.Text:default:return r.a.createElement(V,Object.assign({key:a.guid,forwardedRef:s},a))}})))}}]),a}(n.Component));ee.defaultProps={messageList:[]};a(49);var te,ae=function(){return r.a.createElement("svg",{className:"icon",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 24 24","aria-labelledby":"sendIconTitle",stroke:"#77b7e4",strokeWidth:"1",strokeLinecap:"square",strokeLinejoin:"miter",fill:"none",color:"#e5e5e5"},r.a.createElement("title",{id:"sendIconTitle"},"Send"),r.a.createElement("polygon",{points:"21.368 12.001 3 21.609 3 14 11 12 3 9.794 3 2.394"}))};!function(e){e[e.MIN_ROWS=2]="MIN_ROWS",e[e.MAX_ROWS=10]="MAX_ROWS"}(te||(te={}));a(50);var ne,re=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).onChange=function(e){var t=e.target.value,a=n.calculateSize(t);n.setState((function(){return{content:t,rows:a}}))},n.onSubmit=function(e){e.preventDefault(),n.submit()},n.onKeyDown=function(e){13!==e.keyCode||e.shiftKey||(e.preventDefault(),n.submit())},n.state={content:"",rows:te.MIN_ROWS},n}return Object(h.a)(a,[{key:"submit",value:function(){var e=this.state.content;(0,this.props.onSend)(e),this.setState((function(){return{content:"",rows:te.MIN_ROWS}}))}},{key:"calculateSize",value:function(e){var t=Math.max(e.split("\n").length,e.split("\r").length);return t=Math.max(t,te.MIN_ROWS),t=Math.min(t,te.MAX_ROWS)}},{key:"render",value:function(){var e=this.state,t=e.content,a=e.rows;return r.a.createElement("div",{className:"message-box-wrap"},r.a.createElement("form",{onSubmit:this.onSubmit,className:"message-box"},r.a.createElement("label",{className:"message-box-label",htmlFor:"control"},r.a.createElement("textarea",{className:"message-box-control",id:"control",rows:a,value:t,onChange:this.onChange,onKeyDown:this.onKeyDown})),r.a.createElement("button",{type:"submit",className:"message-box-button button-reset"},r.a.createElement(ae,null))))}}]),a}(n.Component);!function(e){e.LOGIN="/login",e.REGISTER="/register",e.CHAT="/chat",e.HOME="/"}(ne||(ne={}));var se=a(4),ie=Object(se.b)();function oe(e){ie.push(e)}a(51);var ce,ue,le,me,de,he=function(){return r.a.createElement("svg",{className:"icon",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"25px",height:"25px",viewBox:"0 0 24 24","aria-labelledby":"arrowLeftIconTitle",stroke:"#77b7e4",strokeWidth:"1.92",strokeLinecap:"square",strokeLinejoin:"miter",fill:"none",color:"#77b7e4"},r.a.createElement("title",{id:"arrowLeftIconTitle"},"Arrow Left"),r.a.createElement("path",{d:"M9 6l-6 6 6 6"}),r.a.createElement("path",{d:"M21 12H4"}),r.a.createElement("path",{strokeLinecap:"round",d:"M3 12h1"}))},ge=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).onChatClosed=function(){oe(ne.HOME)},n.onSend=function(e){var t=n.props.dataId;e.trim().length&&K(t,e).then((function(e){n.setState((function(t){var a=t.messageList,n=a[a.length-1],r=z(e,n);return Object(D.a)({},t,{messageList:a.concat(r)})}))})).catch((function(e){console.error(e)}))},n.state={messageList:e.data||[]},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state.messageList;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"close-chat-button button-reset",onClick:this.onChatClosed,type:"button"},r.a.createElement(he,null)),r.a.createElement(ee,{messageList:e}),r.a.createElement(re,{onSend:this.onSend}))}}]),a}(n.Component),fe=(ce=function(e){return F.getChatHistoryByChatId(e).then((function(e){return e.map((function(e){return $(e)}))})).then(q).then(J).catch((function(e){return console.error(e),[]}))},ue=ge,function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={isLoading:!1},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.preload()}},{key:"componentDidUpdate",value:function(e){var t=this.props.dataId;e.dataId!==t&&this.preload()}},{key:"preload",value:function(){var e=this;this.setState({isLoading:!0});var t=this.props.dataId;ce(t).then((function(t){return e.setState({isLoading:!1,preloadedData:t})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.preloadedData;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("p",null,"Data is loading..."):r.a.createElement(ue,Object.assign({},this.props,{data:a})))}}]),a}(n.Component)),ve=M(c.chatId)(fe),pe=Object(o.f)(ve),be=(a(52),function(){return r.a.createElement("div",{className:"center"},r.a.createElement("span",null,"Please select a chat to start messaging"))}),Ee=(a(53),Object(o.f)(M(c.chatId)((function(e){var t=e.dataId;return r.a.createElement("div",{className:"content ".concat(t?"displayed":"hidden")},t?r.a.createElement(pe,null):r.a.createElement(be,null))})))),Se=(a(54),function(){return r.a.createElement("main",{className:"layout"},r.a.createElement(Z,null),r.a.createElement(Ee,null))}),ye=a(15),Oe=(a(55),function(e){var t=e.label,a=e.value,n=e.onBlur,s=e.onChange,i=e.error,o=e.type,c=void 0===o?"text":o;return r.a.createElement("label",{className:"form-field",htmlFor:t},r.a.createElement("span",{className:"form-field__label"},t),r.a.createElement("input",{id:t,type:c,className:"form-field__control",value:a,onBlur:n,onChange:s}),r.a.createElement("div",{className:"form-field__error"},r.a.createElement("span",null,i)))});!function(e){e.LOGIN="login",e.PASSWORD="password"}(le||(le={})),function(e){e.FIELD="[[FIELD]]"}(me||(me={})),function(e){e[e.SIGN_IN=0]="SIGN_IN",e[e.SIGN_UP=1]="SIGN_UP"}(de||(de={}));a(56);var Ne=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){e.preventDefault();var t=n.state,a=t.login,r=t.password;!n.validateLogin(a)&&!n.validatePassword(r)?(0,n.props.onSubmit)({login:a,password:r}):n.setState((function(e){return Object(D.a)({},e,{errors:{login:n.validate(le.LOGIN,a),password:n.validate(le.PASSWORD,r)}})}))},n.onChange=function(e){return function(t){var a=t.target.value;n.setState((function(t){return Object(D.a)({},t,Object(ye.a)({},e,a))}))}},n.onBlur=function(e){return function(){var t=n.state[e];n.setState((function(a){return Object(D.a)({},a,{errors:Object(D.a)({},a.errors,Object(ye.a)({},e,n.validate(e,t)))})}))}},n.state={login:"",password:"",errors:{login:"",password:""}},n}return Object(h.a)(a,[{key:"validate",value:function(e,t){return e===le.LOGIN?this.validateLogin(t).replace(me.FIELD,e):this.validatePassword(t).replace(me.FIELD,e)}},{key:"validateLogin",value:function(e){var t=this.props.loginPattern;return e.trim().length?t.test(e)?"":E.validation.forbiddenFieldThreeChars:E.validation.required}},{key:"validatePassword",value:function(e){var t=this.props.passwordPattern;return e.trim().length?t.test(e)?"":E.validation.forbiddenFieldEightChars:E.validation.required}},{key:"render",value:function(){var e=this.state,t=e.login,a=e.password,n=e.errors,s=this.props.type===de.SIGN_IN,i=s?E.actions.signIn:E.actions.signUp,o=s?ne.REGISTER:ne.LOGIN,c=s?E.link.signIn:E.link.signUp;return r.a.createElement("div",{className:"auth-form-container center"},r.a.createElement("div",{className:"auth-form-wrap"},r.a.createElement("h3",{className:"auth-form-header"},i),r.a.createElement("form",{onSubmit:this.onSubmit,className:"auth-form center"},r.a.createElement(Oe,{label:le.LOGIN,value:t,error:n.login,onBlur:this.onBlur(le.LOGIN),onChange:this.onChange(le.LOGIN)}),r.a.createElement(Oe,{label:le.PASSWORD,value:a,error:n.password,type:"password",onBlur:this.onBlur(le.PASSWORD),onChange:this.onChange(le.PASSWORD)}),r.a.createElement("div",{className:"auth-form__actions"},r.a.createElement(v.a,{to:o},c),r.a.createElement("button",{className:"button-reset auth-form__button",type:"submit"},i)))))}}]),a}(n.Component),we=function(e){var t=e.component,a=Object(x.a)(e,["component"]);return r.a.createElement(o.b,Object.assign({},a,{render:function(e){return function(){var e=sessionStorage.getItem("isAuthorized");return null!==e?JSON.parse(e):e}()?r.a.createElement(t,e):r.a.createElement(o.a,{to:"/login"})}}))},Ie=function(e){sessionStorage.setItem("isAuthorized",JSON.stringify(!0)),function(e){sessionStorage.setItem("user",JSON.stringify(e))}(e),oe(ne.HOME)},Ce=function(e){F.signUp(e).then(Ie)},je=function(e){F.signIn(e).then(Ie)},ke=/^[A-Za-z0-9-_]{3,}$/,Le=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&_-]{8,}$/,Me=(a(57),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(we,{exact:!0,path:ne.HOME,component:Se}),r.a.createElement(we,{path:ne.CHAT,component:Se}),r.a.createElement(o.b,{path:ne.LOGIN},r.a.createElement(Ne,{onSubmit:je,loginPattern:ke,passwordPattern:Le,type:de.SIGN_IN})),r.a.createElement(o.b,{path:ne.REGISTER},r.a.createElement(Ne,{onSubmit:Ce,loginPattern:ke,passwordPattern:Le,type:de.SIGN_UP})))});a(58);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.c,{history:ie},r.a.createElement(Me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.9bde75ae.chunk.js.map