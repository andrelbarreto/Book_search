(this.webpackJsonpgooglebooks=this.webpackJsonpgooglebooks||[]).push([[0],{27:function(e,t,a){e.exports=a(58)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},52:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(24),r=a.n(o),i=a(8),s=a(6);a(32);var c=function({children:e}){return l.a.createElement("div",{className:"jumbotron mt-4"},e)};var m=function({icon:e,title:t,children:a}){return l.a.createElement("div",{className:"card mt-4"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h3",null,l.a.createElement("strong",null,l.a.createElement("i",{className:"fa fa-".concat(e),"aria-hidden":"true"})," ",t))),l.a.createElement("div",{className:"card-body"},a))};var u=function({q:e,handleInputChange:t,handleFormSubmit:a}){return l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"Query"},l.a.createElement("strong",null,"Book")),l.a.createElement("input",{className:"form-control",id:"Title",type:"text",value:e,placeholder:"I Robot",name:"q",onChange:t,required:!0})),l.a.createElement("div",{className:"pull-right"},l.a.createElement("button",{onClick:a,type:"submit",className:"btn btn-lg btn-danger float-right"},"Search")))};a(33);const d=({children:e})=>l.a.createElement("ul",{className:"list-group"},e);function h({children:e}){return l.a.createElement("li",{className:"list-group-item"},e)}function E({fluid:e,children:t}){return l.a.createElement("div",{className:"container".concat(e?"-fluid":"")},t)}function g({fluid:e,children:t}){return l.a.createElement("div",{className:"row".concat(e?"-fluid":"")},t)}function v({size:e,children:t}){return l.a.createElement("div",{className:e.split(" ").map(e=>"col-"+e).join(" ")},t)}a(34);var p=function({title:e,subtitle:t,authors:a,link:n,description:o,image:r,Button:i}){return l.a.createElement(h,null,l.a.createElement(g,{className:"flex-wrap-reverse"},l.a.createElement(v,{size:"md-8"},l.a.createElement("h3",{className:"font-italic"},e),t&&l.a.createElement("h5",{className:"font-italic"},t)),l.a.createElement(v,{size:"md-4"},l.a.createElement("div",{className:"btn-container"},l.a.createElement("a",{className:"btn btn-light",target:"_blank",rel:"noopener noreferrer",href:n},"View"),l.a.createElement(i,null)))),l.a.createElement(g,null,l.a.createElement(v,{size:"md-6"},l.a.createElement("p",{className:"font-italic small"},"Written by ",a))),l.a.createElement(g,null,l.a.createElement(v,{size:"12 sm-4 md-2"},l.a.createElement("img",{className:"img-thumbnail img-fluid w-100",src:r,alt:e})),l.a.createElement(v,{size:"12 sm-8 md-10"},l.a.createElement("p",null,o))))};var f=function(){return l.a.createElement("footer",null,l.a.createElement("hr",null),l.a.createElement("p",{className:"pull-right"},l.a.createElement("i",{className:"fab fa-github"})," Built using React.js"))},b=a(10),k=a.n(b),N=function(e){return k.a.get("/api/google",{params:{q:"title:"+e}})},w=function(){return k.a.get("/api/books")},S=function(e){return k.a.delete("/api/books/"+e)},B=function(e){return k.a.post("/api/books",e)};class I extends n.Component{constructor(...e){super(...e),this.state={books:[],q:"",message:"Search For A Book"},this.handleInputChange=e=>{const t=e.target,a=t.name,n=t.value;this.setState({[a]:n})},this.getBooks=()=>{N(this.state.q).then(e=>this.setState({books:e.data})).catch(()=>this.setState({books:[],message:"No New Books Found, Try again"}))},this.handleFormSubmit=e=>{e.preventDefault(),this.getBooks()},this.handleBookSave=e=>{const t=this.state.books.find(t=>t.id===e);B({googleId:t.id,title:t.volumeInfo.title,subtitle:t.volumeInfo.subtitle,link:t.volumeInfo.infoLink,authors:t.volumeInfo.authors,description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail}).then(()=>this.getBooks())}}render(){return l.a.createElement(E,null,l.a.createElement(g,null,l.a.createElement(v,{size:"md-12"},l.a.createElement(c,null,l.a.createElement("h1",{className:"text-center"},l.a.createElement("strong",null," Google Books Search")),l.a.createElement("h2",{className:"text-center"},"Search for and Save Books you chose!"))),l.a.createElement(v,{size:"md-12"},l.a.createElement(m,{title:"Book Search",icon:"far fa-book"},l.a.createElement(u,{handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit,q:this.state.q})))),l.a.createElement(g,null,l.a.createElement(v,{size:"md-12"},l.a.createElement(m,{title:"Results"},this.state.books.length?l.a.createElement(d,null,this.state.books.map(e=>l.a.createElement(p,{key:e.id,title:e.volumeInfo.title,subtitle:e.volumeInfo.subtitle,link:e.volumeInfo.infoLink,authors:e.volumeInfo.authors.join(", "),description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,Button:()=>l.a.createElement("button",{onClick:()=>this.handleBookSave(e.id),className:"btn btn-primary ml-2"},"Save")}))):l.a.createElement("h2",{className:"text-center"},this.state.message)))),l.a.createElement(f,null))}}var x=I;class C extends n.Component{constructor(...e){super(...e),this.state={books:[]},this.getSavedBooks=()=>{w().then(e=>this.setState({books:e.data})).catch(e=>console.log(e))},this.handleBookDelete=e=>{S(e).then(e=>this.getSavedBooks())}}componentDidMount(){this.getSavedBooks()}render(){return l.a.createElement(E,null,l.a.createElement(g,null,l.a.createElement(v,{size:"md-12"},l.a.createElement(c,null,l.a.createElement("h1",{className:"text-center"},l.a.createElement("strong",null,"(React) Google Books Search")),l.a.createElement("h2",{className:"text-center"},"Search for and Save Books of Interest.")))),l.a.createElement(g,null,l.a.createElement(v,{size:"md-12"},l.a.createElement(m,{title:"Saved Books",icon:"download"},this.state.books.length?l.a.createElement(d,null,this.state.books.map(e=>l.a.createElement(p,{key:e._id,title:e.title,subtitle:e.subtitle,link:e.link,authors:e.authors.join(", "),description:e.description,image:e.image,Button:()=>l.a.createElement("button",{onClick:()=>this.handleBookDelete(e._id),className:"btn btn-danger ml-2"},"Delete")}))):l.a.createElement("h2",{className:"text-center"},"No Saved Books")))),l.a.createElement(f,null))}}var y=C;var z=function(){return l.a.createElement(E,{fluid:!0},l.a.createElement(g,null,l.a.createElement(v,{size:"md-12"},l.a.createElement(c,null,l.a.createElement("h1",{className:"text-center"},"404 Page Not Found"),l.a.createElement("h1",{className:"text-center"},l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};a(52);class W extends n.Component{constructor(...e){super(...e),this.state={open:!1,width:window.innerWidth},this.updateWidth=()=>{const e={width:window.innerWidth};this.state.open&&e.width>991&&(e.open=!1),this.setState(e)},this.toggleNav=()=>{this.setState({open:!this.state.open})}}componentDidMount(){window.addEventListener("resize",this.updateWidth)}componentWillUnmount(){window.removeEventListener("resize",this.updateWidth)}render(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-2"},l.a.createElement(i.b,{className:"navbar-brand",to:"/"},"Google Books"),l.a.createElement("button",{onClick:this.toggleNav,className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"".concat(this.state.open?"":"collapse ","navbar-collapse"),id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{onClick:this.toggleNav,className:"/"===window.location.pathname?"nav-link active":"nav-link",to:"/"},"Search")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{onClick:this.toggleNav,className:"/saved"===window.location.pathname?"nav-link active":"nav-link",to:"/saved"},"Saved")))))}}var F=W;var j=function(){return l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(F,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:x}),l.a.createElement(s.a,{exact:!0,path:"/saved",component:y}),l.a.createElement(s.a,{component:z}))))};const q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const t=e.installing;t.onstatechange=()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(e=>{console.error("Error during service worker registration:",e)})}r.a.render(l.a.createElement(j,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="".concat("","/service-worker.js");q?function(e){fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):L(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e):L(e)})}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.345379b7.chunk.js.map