(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"3XHS":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),c=a.n(n),s=a("8Kt/"),r=a.n(s),o=a("c/Lg"),l=a("78ew"),i=a("LiYJ"),u=a("aCnj"),m=a("lduF"),p=a("1OyB"),v=a("vuIU"),d=a("Ji7U"),f=a("md7G"),b=a("foSv"),N=a("rePB"),k=a("LQnH"),h=a("gSLU"),w=c.a.createElement;var g=function(e){var t=e.skills.skills.map((function(e,t){return w("div",{className:"icon-wrapper",key:t},w("span",{className:"sub-reveal-container show"},w("div",{className:"sub-reveal"},w("img",{className:"skill-icon",src:"/images/".concat(e.img,".png"),alt:"small ".concat(e.alt," logo")}),w("span",{className:"skill-name"},e.name))))}));return w(n.Fragment,null,w("article",{className:"section-article-wrapper"},w("h2",{className:"head3"},w("span",{className:"show-container show"},w("div",{className:"reveal ",style:{color:"#EBE9CD"}},e.skills.title),w("div",{className:"runner"}))),w("p",{className:"sub-reveal-container desc show"},w("span",{className:"sub-reveal",style:{color:"#ABA98F",fontWeight:500}},e.skills.description))),w("figure",{className:"section-article-wrapper figure-icons"},w("div",{className:"icons-container"}," ",t)))},y=c.a.createElement;function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(b.a)(e);if(t){var c=Object(b.a)(this).constructor;a=Reflect.construct(n,arguments,c)}else a=n.apply(this,arguments);return Object(f.a)(this,a)}}var O=function(e){Object(d.a)(a,e);var t=j(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){var e=this.context.skills,t=y(g,{skills:e.creativeDesign}),a=y(g,{skills:e.frontend}),n=y(g,{skills:e.backend});return y("section",{className:"section-container skills"},y("div",{className:"section-background",style:{background:"url('".concat(e.background,"') repeat center top")}},y("div",{className:"section-wrapper"},t,a,n,y("article",{className:"section-article-wrapper"},y("div",{className:"sub-reveal-container desc show"},y("span",{className:"sub-reveal btn",style:{color:"#ABA98F"}},y(h.a,{text:e.messagetext,type:e.type,withSvg:e.withSvg,btnType:e.btnType,link:e.link,colors:e.color})))))))}}]),a}(n.Component);Object(N.a)(O,"contextType",k.a);var x=O,E=c.a.createElement;var A=function(e){return E("div",{className:"reveal ",style:{color:"#41474A"}},e.title)},C=c.a.createElement;var B=function(e){return C("span",{className:"sub-reveal",style:{color:"#6B6F71",fontWeight:500}},e.desc)},F=c.a.createElement;var R=function(e){var t=e.books.map((function(e,t){return F("div",{className:"book-wrapper",key:t},F("span",{className:"show-container show"},F("a",{href:"https://".concat(e.link),className:"reveal book-link",rel:"noopener noreferrer",target:"_blank"},F("div",{className:""},F("img",{className:"book-icon",src:"/images/".concat(e.img,".png"),alt:"".concat(e.alt," icon")}),F("span",{className:"book-name"},e.name)),F("div",{className:"runner"}))))}));return F(n.Fragment,null,t)},S=c.a.createElement;var D=function(e){return S("span",{className:"sub-reveal",style:{color:"#6B6F71",fontWeight:500}},e.desc,S("a",{href:"".concat(e.link),rel:"noopener noreferrer",target:"_blank",className:"links"}," here"),".")},T=c.a.createElement;function L(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(b.a)(e);if(t){var c=Object(b.a)(this).constructor;a=Reflect.construct(n,arguments,c)}else a=n.apply(this,arguments);return Object(f.a)(this,a)}}var _=function(e){Object(d.a)(a,e);var t=L(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){var e=this.context.followMyReads;return T("section",{className:"section-container myreads"},T("div",{className:"section-background",style:{background:"url('".concat(e.background,"') repeat center top")}},T("div",{className:"section-wrapper"},T("article",{className:"section-article-wrapper"},T("h2",{className:"head3"},T("span",{className:"show-container show"},T(A,{title:e.title}),T("div",{className:"runner"}))),T("p",{className:"sub-reveal-container desc show"},T(B,{desc:e.topDesc})),T("figure",{className:"section-article-wrapper book-icons"},T("div",{className:"content-center books-container"},T(R,{books:e.books}))),T("p",{className:"sub-reveal-container desc show"},T(D,{link:e.goodreadsLink,desc:e.bottomDesc}))))))}}]),a}(n.Component);Object(N.a)(_,"contextType",k.a);var P=_,X=a("CN8t"),H=a("pFri"),J=a("AC3K"),M=a("9NGu"),U=a("FXEY"),q=a("ZMKu"),G=c.a.createElement;t.default=function(){var e=Object(n.useContext)(M.a).state;return Object(n.useEffect)((function(){Object(H.b)(),setTimeout((function(){Object(J.b)()}),300),window.addEventListener("scroll",Object(J.a)(J.b,40))})),G(q.b.div,{variants:U.a,initial:"initial",animate:"enter",exit:e.exitMode,className:"container"},G(r.a,null,G("title",null,"Aiman Adlawan | About Me"),G("link",{rel:"icon",href:"/images/brand-icon-logo.ico"})),G("div",{className:"container"},G(o.a,null),G("div",{className:"main-container"},G(k.b,{pagesets:"about"},G(l.a,null),G(i.a,null),G("main",{className:"main"},G(u.a,null),G(m.a,{title:"skills"}),G(x,null),G(P,null),G(X.a,null))))))}},lduF:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),s=a("LQnH"),r=c.a.createElement;var o=function(e){return r("div",{className:"section-block-left"},r("div",{className:"left-align left-block"},r("h2",{className:"head2",style:{color:e.textcolor}},r("span",{className:"show-container show"},r("div",{className:"reveal"},r("span",null,e.title)),r("div",{className:"runner"})))))},l=a("9NGu"),i=a("gSLU"),u=a("YFqc"),m=a.n(u),p=c.a.createElement;var v=function(e){var t=Object(n.useContext)(l.a).setTransitionState;return p("div",{className:"section-block-right"},p("div",{className:"right-align right-block"},p("div",{className:"show-container show"},p("p",{className:"reveal desc",style:{color:e.textcolor}},p("span",{className:""},e.desc),e.withArrow?p(m.a,{href:"/projects"},p("a",null,p("span",{className:"block-arrow",onClick:function(){t("bottom")}},p(i.a,{type:"arrow",colors:e.colors})))):null),p("div",{className:"runner"}))))},d=c.a.createElement;t.a=function(e){var t=Object(n.useContext)(s.a),a=t.withBlocks,c=t.projectBlocks,r=f(e.title,a,c),l=d("div",{className:"section-block-background",style:{background:"url('".concat(r.background,"') repeat center top")}},d(o,{title:r.blockTitle,textcolor:r.textcolor}),d(v,{textcolor:r.textcolor,desc:r.blockDesc,withArrow:r.withArrow,colors:r.textcolor}));return d("section",{className:"section-block-container",style:{backgroundColor:r.backgroundColor}},l)};var f=function(e,t,a){return"project"===e||"skills"===e?t:"view more"===e?a:void 0}},rB5V:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return a("3XHS")}])}},[["rB5V",0,2,3,1,4,5,7]]]);