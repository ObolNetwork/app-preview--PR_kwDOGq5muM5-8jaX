(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9592],{62624:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/operator/[address]",function(){return o(42129)}])},42129:function(t,e,o){"use strict";o.r(e),o.d(e,{__N_SSG:function(){return v},default:function(){return OperatorPage}});var n=o(85893),r=o(48900),i=o(32890),a=o(10890),s=o(58668),l=o(25164),p=o(86744),d=o(52765);let{styled:h,css:c,theme:u,createTheme:x,getCssText:g,globalCss:f,keyframes:m,config:b,reset:k}=(0,p.Th)({theme:{colors:{...d.MA,...d.Fe,...d.ae,...d.fr,...d.qZ,...d.cV,...d.$p,...d.Q6,...d.Wl,...d.iQ,...d.vd,...d.jk,...d.ht,...d.QN,...d.iN,...d.Bt,...d.DT,...d.sl,...d.$C,...d.ek,...d.Hc,...d.LR,...d.er,...d.Dz,...d.$y,...d.P_,...d.bC,...d.EV,...d.t3,...d.uW,...d.VS,...d.nX,...d.mJ,...d.dH,...d.Fr,...d.L,...d.lM,...d.b5,...d.il,...d.eQ,...d.BJ,...d.Eh,...d.fJ,...d.PS,...d._L,...d.YO,...d.br,...d.WH,...d.Cn,...d.W_,...d.t$,...d.Ec,...d.I$,...d.yr,...d.o5,...d.tX,...d.F9,...d.U2,hiContrast:"$slate12",loContrast:"white",canvas:"hsl(0 0% 93%)",panel:"white",transparentPanel:"hsl(0 0% 0% / 97%)",shadowLight:"hsl(206 22% 7% / 35%)",shadowDark:"hsl(206 22% 7% / 20%)"},fonts:{untitled:"Untitled Sans, -apple-system, system-ui, sans-serif",mono:"S\xf6hne Mono, menlo, monospace"},space:{1:"5px",2:"10px",3:"15px",4:"20px",5:"25px",6:"35px",7:"45px",8:"65px",9:"80px"},sizes:{1:"5px",2:"10px",3:"15px",4:"20px",5:"25px",6:"35px",7:"45px",8:"65px",9:"80px"},fontSizes:{1:"12px",2:"13px",3:"15px",4:"17px",5:"19px",6:"21px",7:"27px",8:"35px",9:"59px"},radii:{1:"4px",2:"6px",3:"8px",4:"12px",round:"50%",pill:"9999px"},zIndices:{1:"100",2:"200",3:"300",4:"400",max:"999"}},media:{bp1:"(min-width: 520px)",bp2:"(min-width: 900px)",bp3:"(min-width: 1200px)",bp4:"(min-width: 1800px)",motion:"(prefers-reduced-motion)",hover:"(any-hover: hover)",dark:"(prefers-color-scheme: dark)",light:"(prefers-color-scheme: light)"},utils:{p:t=>({padding:t}),pt:t=>({paddingTop:t}),pr:t=>({paddingRight:t}),pb:t=>({paddingBottom:t}),pl:t=>({paddingLeft:t}),px:t=>({paddingLeft:t,paddingRight:t}),py:t=>({paddingTop:t,paddingBottom:t}),m:t=>({margin:t}),mt:t=>({marginTop:t}),mr:t=>({marginRight:t}),mb:t=>({marginBottom:t}),ml:t=>({marginLeft:t}),mx:t=>({marginLeft:t,marginRight:t}),my:t=>({marginTop:t,marginBottom:t}),ta:t=>({textAlign:t}),fd:t=>({flexDirection:t}),fw:t=>({flexWrap:t}),ai:t=>({alignItems:t}),ac:t=>({alignContent:t}),jc:t=>({justifyContent:t}),as:t=>({alignSelf:t}),fg:t=>({flexGrow:t}),fs:t=>({flexShrink:t}),fb:t=>({flexBasis:t}),bc:t=>({backgroundColor:t}),br:t=>({borderRadius:t}),btrr:t=>({borderTopRightRadius:t}),bbrr:t=>({borderBottomRightRadius:t}),bblr:t=>({borderBottomLeftRadius:t}),btlr:t=>({borderTopLeftRadius:t}),bs:t=>({boxShadow:t}),lh:t=>({lineHeight:t}),ox:t=>({overflowX:t}),oy:t=>({overflowY:t}),pe:t=>({pointerEvents:t}),us:t=>({WebkitUserSelect:t,userSelect:t}),userSelect:t=>({WebkitUserSelect:t,userSelect:t}),size:t=>({width:t,height:t}),appearance:t=>({WebkitAppearance:t,appearance:t}),backgroundClip:t=>({WebkitBackgroundClip:t,backgroundClip:t})}});x("dark-theme",{colors:{...d.hU,...d.XD,...d.L0,...d.Gl,...d.$B,...d.g9,...d.Dv,...d.nA,...d.Xl,...d.KV,...d.ib,...d.zw,...d.Gz,...d.og,...d.qn,...d.j0,...d.yI,...d.hT,...d.by,...d.u7,...d.yt,...d.$1,...d.f3,...d.zD,...d.CL,...d.nu,...d.yD,...d.ct,...d.Ej,...d.C3,...d.BZ,...d.tZ,...d.Ff,...d.vh,...d.NG,...d.Hy,...d.Lo,...d.zv,...d.On,...d.aM,...d.yg,...d.SH,...d.CP,...d.w9,...d.Ro,...d.BY,...d.j5,...d.Jn,...d.uY,...d.lf,...d.mf,...d.XS,...d.WQ,...d.NJ,...d.Lk,...d.Us,hiContrast:"$slate12",loContrast:"$slate1",canvas:"hsl(0 0% 15%)",panel:"$slate3",transparentPanel:"hsl(0 100% 100% / 97%)",shadowLight:"hsl(206 22% 7% / 35%)",shadowDark:"hsl(206 22% 7% / 20%)"}});var w=o(67294),C=o(86105);let _=h(r.kC,{flexDirection:"column",width:"auto",gap:"$2xl",px:"10%",py:"$5xl","@sm":{px:"10%",pb:"$5xl",pt:"$xl"}});var v=!0;function OperatorPage(t){let{paramAddress:e,operatorData:o,lockData:p,clusterDefinitionResponseData:d,error:h}=t,c=(null==p?void 0:p.cluster_locks.filter(t=>t.cluster_definition.fork_version===C.se))||[],u={cluster_locks:c,total_pages:(null==p?void 0:p.total_pages)||0,total_count:c.length},[x,g]=(0,w.useState)(0),[f,m]=(0,w.useState)(0),[b,k]=(0,w.useState)(0);if(!o)return(0,n.jsx)(i.X,{children:h});let v=b-f;return(0,n.jsxs)(_,{children:[(0,n.jsx)(l.ZJ,{value:o,children:(0,n.jsx)(s.q,{})}),(0,n.jsxs)(r.kC,{css:{gap:"$lg","@sm":{flexDirection:"column"}},children:[(0,n.jsx)(r.gK,{heading:"Clusters",content:b||"0",tooltipContent:"The number of clusters that this user operates"}),(0,n.jsx)(r.gK,{heading:"Validators",content:x||"0",tooltipContent:"The number of validators in all of this operators clusters"}),(0,n.jsx)(r.gK,{heading:"Invites",content:v>=0?v:"0",tooltipContent:"The number of cluster invites sent to this operator"})]}),(0,n.jsx)(a.l,{data:{lockData:u,clusterDefinitionData:d,isLoading:!1,error:!1},setTotalClusters:k,setTotalValidators:g,setTotalLocks:m,operator:e})]})}}},function(t){t.O(0,[2765,2056,9774,2888,179],function(){return t(t.s=62624)}),_N_E=t.O()}]);