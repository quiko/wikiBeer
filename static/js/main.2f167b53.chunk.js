(this["webpackJsonpfamoco-test"]=this["webpackJsonpfamoco-test"]||[]).push([[0],{107:function(e,a,t){},108:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(9),c=t.n(o),l=(t(82),t(42)),i=t(23),m=t(177),s=t(157),u=t(159),p=t(161),g=t(154),d=t(160),E=Object(g.a)((function(e){return{appBar:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",width:"100%",position:"fixed",top:0},nav:{marginLeft:"auto"},toolbar:{flexWrap:"wrap"},link:{margin:e.spacing(1,2),color:"white"}}}));function b(){var e=E();return r.a.createElement("div",null,r.a.createElement(s.a,{position:"static",color:"default",elevation:0,className:e.appBar},r.a.createElement(u.a,{className:e.toolbar},r.a.createElement(d.a,{component:"div",role:"tabpanel",variant:"h4",className:e.link},"WikiBeer"),r.a.createElement("nav",{className:e.nav},r.a.createElement(p.a,{component:l.b,to:"/",className:e.link},"Home")))))}var f=t(66),h=t(72),v=t(162),w=t(67),x=t.n(w),k=t(68),y=t.n(k),j=Object(g.a)((function(e){return{root:Object(f.a)({},e.mixins.gutters(),{paddingTop:e.spacing(2),paddingBottom:e.spacing(2),background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",color:"white"}),clickableIcon:{cursor:"pointer",color:"white","&:hover":{color:"black"},marginLeft:5}}}));function N(){var e=j();return r.a.createElement("footer",{className:e.footer},r.a.createElement(h.a,{className:e.root},r.a.createElement(d.a,{variant:"subtitle1",className:e.title},"Made with",r.a.createElement(v.a,null,r.a.createElement(x.a,{style:{marginLeft:3}}))," ","by @quiko",r.a.createElement(v.a,null,r.a.createElement(y.a,{onClick:function(e){return window.location.href="https://github.com/quiko"},className:e.clickableIcon})))))}var O=t(175),B=t(176),F=t(52),S=t.n(F),W=t(33),I=t(69),C=t.n(I),P=function(e,a){var t=Object(n.useState)(a),r=Object(W.a)(t,2),o=r[0],c=r[1];return Object(n.useEffect)((function(){!function(){var a;S.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.a.awrap(C()(e));case 2:a=t.sent,c(a.data);case 4:case"end":return t.stop()}}))}()}),[]),{Data:o,setData:c}},D=t(4),T=t(168),z=t(170),J=t(165),L=t(167),R=t(169),q=t(166),H=t(178),_=t(179),A=t(163),G=t(164),M=t(70),$=t.n(M),K=Object(g.a)((function(e){return{main:{backgroundColor:"transparent"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}})),Q=function(e){var a=e.name,t=e.description,n=K();return r.a.createElement(_.a,{className:n.main},r.a.createElement(A.a,{expandIcon:r.a.createElement($.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(d.a,{className:n.heading},a)),r.a.createElement(G.a,null,r.a.createElement(d.a,null,t)))},U=Object(D.a)((function(e){return{root:{backgroundColor:"rgba(250, 190, 88, 0.3)"},head:{color:e.palette.common.black},body:{fontSize:14}}}))(J.a),V=Object(D.a)((function(e){return{root:{backgroundColor:e.palette.background.default}}}))(q.a),X=Object(g.a)({table:{minWidth:700},shadow:{boxShadow:"2px 2px 6px  rgba(0, 0, 0, 0.4)"}}),Y=function(e){var a=e.Data,t=X(),o=Object(n.useState)(0),c=Object(W.a)(o,2),l=c[0],i=c[1],m=Object(n.useState)(5),s=Object(W.a)(m,2),u=s[0],p=s[1],g=a.slice(l*u,l*u+u);return r.a.createElement(L.a,{className:t.shadow,component:h.a},r.a.createElement(T.a,{className:t.table,"aria-label":"customized table"},r.a.createElement(R.a,null,r.a.createElement(q.a,null,r.a.createElement(U,null,"name"),r.a.createElement(U,{align:"right"},"first brewed"),r.a.createElement(U,{align:"right"},"abv %"),r.a.createElement(U,{align:"right"},"attenuation level"))),r.a.createElement(z.a,null,g.map((function(e){return r.a.createElement(V,{key:e.id},r.a.createElement(U,{component:"th",scope:"row"},r.a.createElement(Q,{name:e.name,description:e.description})),r.a.createElement(U,{align:"right"},e.first_brewed),r.a.createElement(U,{align:"right"},e.abv),r.a.createElement(U,{align:"right"},e.attenuation_level))})))),r.a.createElement(H.a,{rowsPerPageOptions:[5,10,25],component:"div",count:a.length,rowsPerPage:u,page:l,onChangePage:function(e,a){i(a)},onChangeRowsPerPage:function(e){p(parseInt(e.target.value,10)),i(0)}}))},Z=t(171),ee=t(172),ae=t(174),te=t(173),ne=t(71),re=t.n(ne),oe=Object(g.a)((function(e){return{root:{display:"flex",justifyContent:"center"},card:{maxWidth:445,height:280,boxShadow:"2px 2px 6px  rgba(0, 0, 0, 0.4)"},button:{color:"#FF8E53 "},title:{color:"#FF8E53 "}}})),ce=function(){var e=oe();return r.a.createElement("div",{className:e.root},r.a.createElement(Z.a,{className:e.card},r.a.createElement(ee.a,null,r.a.createElement(te.a,{component:"img",alt:"beer and flowers",height:"140",image:re.a,title:"beer and flowers"}),r.a.createElement(ae.a,null,r.a.createElement(d.a,{className:e.title,gutterBottom:!0,variant:"h5",component:"h2"},"Thirsty ? Discover our finest beers."),r.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"p"},"Hello beer lover ! this database will inform you about the finest beers .")))))},le=Object(g.a)((function(e){return{root:{flexGrow:1,overflow:"hidden",padding:e.spacing(0,3)},paper:{maxWidth:750,margin:"".concat(e.spacing(1),"px auto"),padding:e.spacing(2),boxShadow:"2px 2px 6px  rgba(0, 0, 0, 0.4)"},card:{marginBottom:"35px"},shadow:{boxShadow:"2px 2px 6px  rgba(0, 0, 0, 0.4)"},title:{textAlign:"center",color:"#FF8E53 ",textJustify:"center"}}}));function ie(){var e=le(),a=P("https://api.punkapi.com/v2/beers/",[]).Data;return 0===a.length?r.a.createElement(O.a,{container:!0,spacing:2,justify:"center",alignItems:"center"},r.a.createElement(B.a,{color:"secondary"})):r.a.createElement("div",{className:e.root},r.a.createElement(h.a,{className:e.paper},r.a.createElement(O.a,{container:!0,spacing:2,justify:"center",alignItems:"center",className:e.card},r.a.createElement(ce,null)),r.a.createElement(O.a,{container:!0,spacing:2,justify:"center",alignItems:"center"},r.a.createElement(Y,{Data:a}))))}t(107);var me=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement(b,null),r.a.createElement(m.a,{component:"main",style:{marginTop:"15%",marginBottom:"15%"}},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:ie})))),r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},71:function(e,a,t){e.exports=t.p+"static/media/beer.6518cad5.jpg"},77:function(e,a,t){e.exports=t(108)},82:function(e,a,t){}},[[77,1,2]]]);
//# sourceMappingURL=main.2f167b53.chunk.js.map