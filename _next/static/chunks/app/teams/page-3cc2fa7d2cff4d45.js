(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[619],{9560:function(e,_,t){Promise.resolve().then(t.bind(t,898))},898:function(e,_,t){"use strict";t.r(_),t.d(_,{default:function(){return C}});var n=t(7437),r=t(7520),o=t.n(r),s=t(2265),a=t(3410),i=t(2095),c=t(208),p=t(2281),d=t(4301),l=t(1201),y=t(9469),k=t(3445),h=t(2383),x=t(778),u=t(9253),j=t(1994),Z=t(4627),f=t.n(Z);function m(e){let{children:_,center:t}=e;return(0,n.jsx)("div",{className:(0,j.Z)({[f().containerCenter]:t}),children:(0,n.jsx)("div",{className:f().container,children:_})})}var g=t(3804),P=t(2069),T=t(4442),v=t(486),b=t(5002);function N(e){let{open:_,onOpen:t,onClose:r,title:o,text:s}=e;return(0,n.jsx)(T.Z,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:_,onClose:r,closeAfterTransition:!0,slots:{backdrop:g.Z},slotProps:{backdrop:{timeout:500}},children:(0,n.jsx)(v.Z,{in:_,children:(0,n.jsxs)(P.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,maxWidth:"95%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},children:[(0,n.jsx)(b.Z,{id:"transition-modal-title",variant:"h3",component:"h3",children:o}),(0,n.jsx)(b.Z,{sx:{mt:2},children:s})]})})})}function C(){let[e,_]=(0,s.useState)(""),[t,r]=(0,s.useState)([]),[j,Z]=(0,s.useState)([]),[f,g]=(0,s.useState)(!0),[P,T]=(0,s.useState)(!1),[v,b]=(0,s.useState)(""),[C,S]=(0,s.useState)(""),[w,E]=(0,s.useState)(!1);async function A(e){let _=await fetch(e,{headers:{"Access-Control-Allow-Origin":"*"}});r((await _.json()).pokemons),g(!1)}(0,s.useEffect)(()=>{A("data/pokemons.json")},[]);let B=t.filter(_=>_.spanishName.toLowerCase().includes(e.toLowerCase()));return(0,n.jsx)("div",{children:f?(0,n.jsx)(u.Z,{sx:{width:"100vw",maxWidth:"1200px"}}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.Z,{sx:{padding:2},children:[(0,n.jsx)("h1",{children:"Su equipo:"}),(0,n.jsx)(m,{center:!0,children:(0,n.jsx)(i.Z,{component:a.Z,className:o().teamTable,children:(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(p.Z,{children:(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(l.Z,{children:"ID"}),(0,n.jsx)(l.Z,{children:"Foto"}),(0,n.jsx)(l.Z,{children:"Nombre"}),(0,n.jsx)(l.Z,{children:"Tipo"}),(0,n.jsx)(l.Z,{})]})}),(0,n.jsx)(y.Z,{children:j.length>0?j.map(e=>(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(l.Z,{children:e.id}),(0,n.jsx)(l.Z,{children:(0,n.jsx)("img",{src:e.sprites.front_default,alt:e.spanishName})}),(0,n.jsx)(l.Z,{children:e.spanishName}),(0,n.jsx)(l.Z,{children:(0,n.jsx)(x.Z,{types:e.types})}),(0,n.jsx)(l.Z,{children:(0,n.jsx)(k.Z,{variant:"contained",onClick:()=>{var _;return _=e.id,void(E(!1),Z(e=>e.filter(e=>e.id!==_)))},children:"Eliminar"})})]},e.id)):(0,n.jsx)(d.Z,{children:(0,n.jsx)(l.Z,{colSpan:4,align:"center",children:"No hay ning\xfan Pokemon en su equipo a\xfan."})})})]})})}),!w&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{children:"Seleccione un nuevo Pokemon"}),(0,n.jsx)(h.Z,{label:"Buscar Pok\xe9mon",variant:"outlined",fullWidth:!0,sx:{marginBottom:2},value:e,onChange:e=>_(e.target.value)}),(0,n.jsx)(m,{center:!0,children:(0,n.jsx)(i.Z,{component:a.Z,className:o().tableBody,children:(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(p.Z,{children:(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(l.Z,{children:"ID"}),(0,n.jsx)(l.Z,{children:"Foto"}),(0,n.jsx)(l.Z,{children:"Nombre"}),(0,n.jsx)(l.Z,{children:"Tipo"})]})}),(0,n.jsx)(y.Z,{children:B.length>0?B.map(e=>(0,n.jsxs)(d.Z,{sx:{cursor:"pointer"},onClick:()=>{-1==j.findIndex(_=>_.id==e.id)?(j.length>=5&&E(!0),Z(_=>[..._,e])):(b("Acci\xf3n inv\xe1lida"),S("Ya tenes este Pokemon en la lista"),T(!0))},children:[(0,n.jsx)(l.Z,{children:e.id}),(0,n.jsx)(l.Z,{children:(0,n.jsx)("img",{src:e.sprites.front_default,alt:e.spanishName})}),(0,n.jsx)(l.Z,{children:e.spanishName}),(0,n.jsx)(l.Z,{children:(0,n.jsx)(x.Z,{types:e.types})})]},e.id)):(0,n.jsx)(d.Z,{children:(0,n.jsx)(l.Z,{colSpan:4,align:"center",children:"No se encontraron resultados"})})})]})})})]})]}),(0,n.jsx)(N,{open:P,title:v,text:C,onClose:()=>T(!1)})]})})}},778:function(e,_,t){"use strict";t.d(_,{Z:function(){return a}});var n=t(7437),r=t(2265),o=t(9567),s=t.n(o);function a(e){let{types:_}=e,[t,o]=(0,r.useState)([]);return(0,r.useEffect)(()=>{var e,t,n,r;let s;s=[null!==(n=null===(e=_[0])||void 0===e?void 0:e.type.name)&&void 0!==n?n:"default"],(null===(t=_[1])||void 0===t?void 0:t.type.name)!=void 0&&s.push(null===(r=_[1])||void 0===r?void 0:r.type.name),o(s)},[]),(0,n.jsx)("div",{className:s().pokecard__types,children:t.map((e,_)=>{let t=s()["pokecard__type__".concat(e.toLowerCase())]||s().pokecard__type__default;return(0,n.jsx)("span",{className:"".concat(s().pokecard__type," ").concat(t),children:e},_)})})}},7520:function(e){e.exports={tableBody:"page_tableBody__34RyT"}},4627:function(e){e.exports={container:"Container_container__5SxDp",containerCenter:"Container_containerCenter__vfsX_"}},9567:function(e){e.exports={pokecard__types:"PokeTypes_pokecard__types__PNiGT",pokecard__type:"PokeTypes_pokecard__type__lbVBe",pokecard__type__fire:"PokeTypes_pokecard__type__fire__WWKtm",pokecard__type__water:"PokeTypes_pokecard__type__water__08P_W",pokecard__type__grass:"PokeTypes_pokecard__type__grass__8_ycP",pokecard__type__electric:"PokeTypes_pokecard__type__electric__SyEzf",pokecard__type__psychic:"PokeTypes_pokecard__type__psychic__23Kfs",pokecard__type__ice:"PokeTypes_pokecard__type__ice__uYQEM",pokecard__type__dragon:"PokeTypes_pokecard__type__dragon__sa6rP",pokecard__type__dark:"PokeTypes_pokecard__type__dark__Xez6b",pokecard__type__fairy:"PokeTypes_pokecard__type__fairy__EeX8e",pokecard__type__fighting:"PokeTypes_pokecard__type__fighting__7sE8w",pokecard__type__flying:"PokeTypes_pokecard__type__flying__taGtT",pokecard__type__ghost:"PokeTypes_pokecard__type__ghost__qYPgH",pokecard__type__ground:"PokeTypes_pokecard__type__ground__fQZpt",pokecard__type__normal:"PokeTypes_pokecard__type__normal__jeQTA",pokecard__type__poison:"PokeTypes_pokecard__type__poison__rnTve",pokecard__type__rock:"PokeTypes_pokecard__type__rock__AnROF",pokecard__type__steel:"PokeTypes_pokecard__type__steel__Zx2QT",pokecard__type__bug:"PokeTypes_pokecard__type__bug__75cr1",pokecard__type__default:"PokeTypes_pokecard__type__default__OYP7t"}}},function(e){e.O(0,[615,477,75,653,971,117,744],function(){return e(e.s=9560)}),_N_E=e.O()}]);