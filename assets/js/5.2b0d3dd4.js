(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{112:function(t,n,e){},115:function(t,n,e){"use strict";var s=e(7),a={name:"IconTag",functional:!0,props:{name:{type:String,required:!0},icon:{type:String,required:!0},size:{type:String,default:"1x"}},render:(t,{props:{name:n,icon:e,size:a}})=>t("span",{class:"post-tag",attrs:{title:n}},[t(s.a,{class:"post-tag-icon",attrs:{name:e,size:a}}),t("span",{class:"post-tag-name"},[n])])},i=(e(116),e(1)),o=Object(i.a)(a,void 0,void 0,!1,null,null,null);n.a=o.exports},116:function(t,n,e){"use strict";var s=e(112);e.n(s).a},136:function(t,n,e){"use strict";e.r(n);var s={name:"Categories",components:{IconTag:e(115).a}},a=e(1),i=Object(a.a)(s,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"categories"},[n("div",{staticClass:"main-div"},[n("h2",[this._v(this._s(this.$themeConfig.lang.categories))]),this._v(" "),this._l(this.$categories.list,function(t){return n("RouterLink",{key:t.name,attrs:{to:t.path}},[n("IconTag",{attrs:{icon:"category",name:t.name}})],1)})],2)])},[],!1,null,null,null);n.default=i.exports}}]);