(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{16:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(8),i=n.n(c),o=(n(16),n(11)),s=n(2),h=n(3),j=n(5),l=n(4),u=n(9),b=(n(25),n(26),n(0)),d=function(){return Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Job"}),Object(b.jsx)("th",{children:"Action"})]})})},p=function(t){var e=t.characterData.map((function(e,n){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.job}),Object(b.jsx)("td",{children:Object(b.jsx)("button",{onClick:function(){return t.removeCharacter(n)},children:"Delete"})})]},n)}));return Object(b.jsx)("tbody",{children:e})},m=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var t=this.props,e=t.characterData,n=t.removeCharacter;return Object(b.jsxs)("table",{children:[Object(b.jsx)(d,{}),Object(b.jsx)(p,{characterData:e,removeCharacter:n})]})}}]),n}(a.Component),O=n(10),v=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).initialState={name:"",job:""},t.state=t.initialState,t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(O.a)({},a,r))},t.submitForm=function(){t.props.handleSubmit(t.state),t.setState(t.initialState)},t}return Object(h.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.job;return Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{htmlFor:"name",children:"Name"}),Object(b.jsx)("input",{type:"text",name:"name",id:"name",value:e,onChange:this.handleChange}),Object(b.jsx)("label",{htmlFor:"job",children:"Jobs"}),Object(b.jsx)("input",{type:"text",name:"job",id:"job",value:n,onChange:this.handleChange}),Object(b.jsx)("input",{type:"button",value:"Submit",onClick:this.submitForm})]})}}]),n}(a.Component),f=n.p+"static/media/sharepost.9034e8e1.png",x=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={characters:[]},t.removeCharacter=function(e){var n=t.state.characters;t.setState({characters:n.filter((function(t,n){return n!==e}))})},t.handleSubmit=function(e){t.setState({characters:[].concat(Object(o.a)(t.state.characters),[e])})},t.openGraphTag=function(){return Object(b.jsx)("div",{className:"application",children:Object(b.jsx)(u.Helmet,{meta:[{property:"og:url",content:"https://app.dev.vp.demo.eastwest.live/dashboard/credits/earn-credits"},{property:"og:type",content:"website"},{property:"og:title",content:"Earn Credit"},{property:"og:description",content:"How much does culture influence creative thinking?"},{property:"og:image",content:"".concat(window.location.origin,"/").concat(f)},{property:"fb:app_id",content:"942643939925036"}]})})},t}return Object(h.a)(n,[{key:"render",value:function(){var t=this.state.characters;return Object(b.jsxs)("div",{className:"App",children:[this.openGraphTag,Object(b.jsx)("h1",{className:"site-heading",children:"Hello, React!"}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(m,{characterData:t,removeCharacter:this.removeCharacter}),Object(b.jsx)(v,{handleSubmit:this.handleSubmit})]})]})}}]),n}(a.Component),g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),g()}},[[28,1,2]]]);
//# sourceMappingURL=main.a52eaf14.chunk.js.map