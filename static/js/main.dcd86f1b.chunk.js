(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__1UBED",BreadTop:"BurgerIngredient_BreadTop__36r15",Seeds1:"BurgerIngredient_Seeds1__37syF",Seeds2:"BurgerIngredient_Seeds2__2s6Ay",Meat:"BurgerIngredient_Meat__26wdL",Cheese:"BurgerIngredient_Cheese__1IQA6",Salad:"BurgerIngredient_Salad__1Fgnp",Bacon:"BurgerIngredient_Bacon__2iifL"}},,function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__2hyAk",Open:"SideDrawer_Open__2o3kx",Close:"SideDrawer_Close__31LLT",Logo:"SideDrawer_Logo__21QiI"}},function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__kebtE",Label:"BuildControl_Label__3o-eZ",Less:"BuildControl_Less__liBai",More:"BuildControl_More__yGMsf"}},,function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__yUBAU",Logo:"Toolbar_Logo__K0fEU",DesktopOnly:"Toolbar_DesktopOnly__3bSfW"}},function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__2_Rb7"}},function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__1o98d",OrderButton:"BuildControls_OrderButton__1Kxsa",enable:"BuildControls_enable__3fIpr"}},function(e,t,a){e.exports={Button:"Button_Button__1v-je",Success:"Button_Success__3M3zk",Danger:"Button_Danger__2CXsa"}},,,,,,,,,,,function(e,t,a){e.exports={Content:"Layout_Content__4C-Ji"}},function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={Logo:"Logo_Logo__1T8gb"}},function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__1SENR"}},function(e,t,a){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__jKQA1"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__14nRd"}},function(e,t,a){e.exports={Burger:"Burger_Burger__2seUS"}},function(e,t,a){e.exports={Modal:"Modal_Modal__3g0CI"}},,function(e,t,a){e.exports={Loader:"Spinner_Loader__1N_oD",load5:"Spinner_load5__2hTbb"}},,function(e,t,a){e.exports=a(56)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),o=a.n(l),c=(a(37),a(3)),i=function(e){return e.children},s=a(21),u=a.n(s),d=a(7),m=a.n(d),_=a(22),p=a.n(_),g=a(23),E=a.n(g),b=function(e){return r.a.createElement("div",{className:E.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:p.a,alt:"MyBurger"}))},f=a(24),v=a.n(f),B=a(8),h=a.n(B),k=function(e){return r.a.createElement("li",{className:h.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?h.a.active:null},e.children))},C=function(e){return r.a.createElement("ul",{className:v.a.NavigationItems},r.a.createElement(k,{link:"#test",active:!0},"Burger Builder"),r.a.createElement(k,{link:"#test"},"Checkout"))},N=a(25),y=a.n(N),w=function(e){return r.a.createElement("div",{className:y.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},S=function(e){return r.a.createElement("header",{className:m.a.Toolbar},r.a.createElement(w,{clicked:e.drawerToggleClicked}),r.a.createElement(b,{height:"80%"}),r.a.createElement("nav",{className:m.a.DesktopOnly},r.a.createElement(C,null)))},L=a(4),O=a.n(L),T=a(26),D=a.n(T),x=function(e){return e.show?r.a.createElement("div",{className:D.a.Backdrop,onClick:function(){return e.clicked()}}):null},I=function(e){var t=[O.a.SideDrawer,O.a.Close];return e.open&&(t=[O.a.SideDrawer,O.a.Open]),r.a.createElement(i,null,r.a.createElement(x,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:O.a.Logo},r.a.createElement(b,null)),r.a.createElement("nav",null,r.a.createElement(C,null))))},j=function(e){var t=r.a.useState(!1),a=Object(c.a)(t,2),n=a[0],l=a[1];return r.a.createElement(i,null,r.a.createElement(S,{drawerToggleClicked:function(){l(function(e){return!e.showSideDrawer})}}),r.a.createElement(I,{open:n,closed:function(){return[l(!1)]}}),r.a.createElement("main",{className:u.a.Content},e.children))},M=a(6),A=a(31),R=a(27),U=a.n(R),F=a(2),z=a.n(F),J=function(e){var t=null;switch(e.type){case"bread-bottom":t=r.a.createElement("div",{className:z.a.BreadBottom});break;case"bread-top":t=r.a.createElement("div",{className:z.a.BreadTop},r.a.createElement("div",{className:z.a.Seeds1}),r.a.createElement("div",{className:z.a.Seeds2}));break;case"meat":t=r.a.createElement("div",{className:z.a.Meat});break;case"cheese":t=r.a.createElement("div",{className:z.a.Cheese});break;case"bacon":t=r.a.createElement("div",{className:z.a.Bacon});break;case"salad":t=r.a.createElement("div",{className:z.a.Salad});break;default:t=null}return t},K=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(A.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(J,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)});return 0===t.length&&(t=r.a.createElement("p",null,"Please add ingredients")),r.a.createElement("div",{className:U.a.Burger},r.a.createElement(J,{type:"bread-top"}),t,r.a.createElement(J,{type:"bread-bottom"}))},Q=a(9),Y=a.n(Q),W=a(5),G=a.n(W),P=function(e){return r.a.createElement("div",{className:G.a.BuildControl},r.a.createElement("div",{className:G.a.Label},e.label),r.a.createElement("button",{onClick:function(){return e.removed()},className:G.a.Less,disabled:e.disabled},"Less"),r.a.createElement("button",{onClick:function(){return e.added()},className:G.a.More},"More"))},X=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],Z=function(e){return r.a.createElement("div",{className:Y.a.BuildControls},r.a.createElement("p",null,r.a.createElement("b",null,"Current price : ",e.price.toFixed(2))),X.map(function(t){return r.a.createElement(P,{added:function(){return e.ingredientsAdded(t.type)},removed:function(){return e.ingredientsRemoved(t.type)},key:t.label,label:t.label,disabled:e.disabled[t.type]})}),r.a.createElement("button",{disabled:!e.purchasable,className:Y.a.OrderButton,onClick:function(){return e.ordered()}},"ORDER NOW"))},q=a(28),H=a.n(q),V=function(e){return r.a.createElement(i,null,r.a.createElement(x,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:H.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-200vh)",opacity:e.show?"1":"0"}},e.children))},$=a(10),ee=a.n($),te=function(e){return r.a.createElement("button",{className:[ee.a.Button,ee.a[e.btnType]].join(" "),onClick:function(){return e.clicked()}},e.children)},ae=function(e){var t=Object.keys(e.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t)," :"," ",e.ingredients[t])});return r.a.createElement(i,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients : "),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total price : ",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to checkout ? "),r.a.createElement(te,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),r.a.createElement(te,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},ne=a(29),re=a.n(ne).a.create({baseURL:"https://react-my-burger-177b2.firebaseio.com/"}),le=a(30),oe=a.n(le),ce=function(){return r.a.createElement("div",{className:oe.a.Loader},"Loading...")},ie=function(e){var t={salad:.5,cheese:.4,meat:1.3,bacon:.7},a=r.a.useState({salad:0,bacon:0,cheese:0,meat:0}),n=Object(c.a)(a,2),l=n[0],o=n[1],s=r.a.useState(4),u=Object(c.a)(s,2),d=u[0],m=u[1],_=r.a.useState(!1),p=Object(c.a)(_,2),g=p[0],E=p[1],b=r.a.useState(!1),f=Object(c.a)(b,2),v=f[0],B=f[1],h=r.a.useState(!1),k=Object(c.a)(h,2),C=k[0],N=k[1],y=function(e){var t=Object(M.a)({},e),a=Object.keys(t).map(function(e){return t[e]}).reduce(function(e,t){return e+t},0);E(a>0)},w=function(){B(!1)},S=Object(M.a)({},l);for(var L in S)S[L]=S[L]<=0;var O=r.a.createElement(ae,{purchaseCancelled:w,purchaseContinued:function(){N(!0);var e={ingredients:l,price:d,customer:{name:"Dicksen",address:{street:"Test street 1",zipCode:"41351",country:"Mauritius"},email:"test@email.com"},deliveryMethod:"fastest"};re.post("/orders.json",e).then(function(e){N(!1),B(!1)}).catch(function(e){N(!1),B(!1)})},ingredients:l,price:d});return C&&(O=r.a.createElement(ce,null)),r.a.createElement(i,null,r.a.createElement(V,{show:v,modalClosed:w},O),r.a.createElement(K,{ingredients:l}),r.a.createElement(Z,{ingredientsRemoved:function(e){var a=l[e];if(!(a<=0)){var n=a-1,r=Object(M.a)({},l);r[e]=n;var c=d-t[e];o(r),m(c),y(r)}},ingredientsAdded:function(e){var a=l[e]+1,n=Object(M.a)({},l);n[e]=a;var r=d+t[e];o(n),m(r),y(n)},disabled:S,price:d,ordered:function(){B(!0)},purchasable:g}))};var se=document.getElementById("root");o.a.render(r.a.createElement(function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null,r.a.createElement(ie,null)))},null),se)}],[[32,1,2]]]);
//# sourceMappingURL=main.dcd86f1b.chunk.js.map