(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{102:function(t,e,a){"use strict";a.r(e);a(2782);var i=a(0),o=Object(i.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading"},[e("div",{staticClass:"sk-fading-circle"},[e("div",{staticClass:"sk-circle1 sk-circle"}),e("div",{staticClass:"sk-circle2 sk-circle"}),e("div",{staticClass:"sk-circle3 sk-circle"}),e("div",{staticClass:"sk-circle4 sk-circle"}),e("div",{staticClass:"sk-circle5 sk-circle"}),e("div",{staticClass:"sk-circle6 sk-circle"}),e("div",{staticClass:"sk-circle7 sk-circle"}),e("div",{staticClass:"sk-circle8 sk-circle"}),e("div",{staticClass:"sk-circle9 sk-circle"}),e("div",{staticClass:"sk-circle10 sk-circle"}),e("div",{staticClass:"sk-circle11 sk-circle"}),e("div",{staticClass:"sk-circle12 sk-circle"})])])}],!1,null,"4cf69c55",null);e.default=o.exports},114:function(t,e,a){"use strict";a.r(e);var i=a(115),o=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e.default=o.a},115:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=a(29),s=(i=o)&&i.__esModule?i:{default:i},l=a(10);e.default={props:["width","hasTableWrap","type","notFullScreen"],data:function(){return{body:null,table:null,$body:null,onTop:!1,cols:0}},methods:{topCheck:function(){this.onTop=this.body.scrollWidth-this.body.offsetWidth>0&&this.body.scrollLeft<=0},resized:function(t){"xl"===t.state&&!this.notFullScreen||this.body.offsetWidth>this.$props.width?this.table.style.width="100%":this.$props.width?this.table.style.width=this.$props.width+"px":this.cols>3?this.table.style.width=this.body.offsetWidth>1200?"100%":"1200px":this.table.width="100%",this.topCheck()},scrollEnd:function(){this.$body.animate({scrollLeft:this.body.scrollWidth-this.body.offsetWidth})}},mounted:function(){this.$body=(0,s.default)(this.body=this.$el.querySelector(".scroll-body")),this.table=this.$el.querySelector("table");for(var t=this.table.rows,e=t.length,a=0;e--;)a=Math.max(t[e].cells.length,a);this.cols=a,(0,l.addResize)(this.resized)},beforeDestroy:function(){(0,l.removeResize)(this.resized)}}},116:function(t,e,a){var i=a(2760);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(2).default)("6c4d6a23",i,!0,{})},143:function(t,e,a){var i=a(2783);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(2).default)("4dac5b3d",i,!0,{})},155:function(t,e,a){"use strict";a.r(e);var i=a(156),o=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e.default=o.a},156:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Steps",props:{step:{type:Number,default:0}},watch:{step:function(){this.updateStatus()}},mounted:function(){this.updateStatus()},methods:{updateStatus:function(){var t=this;this.$children.forEach((function(e,a){var i=a+1;e.stepNum=i,t.step===i?e.status="active":i<t.step?e.status="finish":e.status=""}))}}}},157:function(t,e,a){var i=a(2949);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(2).default)("45d7fd06",i,!0,{})},158:function(t,e,a){"use strict";a.r(e);var i=a(159),o=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e.default=o.a},159:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Step",props:{sm:{type:Boolean,default:!1}},data:function(){return{status:"",stepNum:1}},computed:{wrapClass:function(){return["step-item",(t={},e="step-item-"+this.status,a=!!this.status,e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t),{sm:this.sm}];var t,e,a}}}},160:function(t,e,a){var i=a(2951);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(2).default)("29bc6b30",i,!0,{})},1764:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return o}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._b({class:t.onTop?"on-top":""},"div",{"data-table":"view-table"!==t.type,"view-table":"view-table"===t.type},!1),[a("div",{staticClass:"scroll-body",on:{scroll:t.topCheck}},[a("s",{staticClass:"top-arrow",on:{click:t.scrollEnd}}),t.hasTableWrap?t._e():a("table",[t._t("default")],2),t.hasTableWrap?t._t("default"):t._e()],2)])},o=[]},2013:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return o}));var i=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"steps-group"},[this._t("default")],2)},o=[]},2014:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return o}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.wrapClass},[e("div",{staticClass:"step-header"},[e("span",{staticClass:"step-header-icon"},[this._v(this._s(this.stepNum))])]),e("div",{staticClass:"step-content"},[e("p",{staticClass:"step-content-title"},[this._t("default")],2)])])},o=[]},2119:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return o}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",[a("section",{staticClass:"header"},[a("div",[a("h3",[t._v(t._s(t.$t("netDiag.hero.title")))]),a("p",[t._v(t._s(t.$t("netDiag.hero.desc")))])])]),a("section",{staticClass:"content"},[a("p",{domProps:{innerHTML:t._s(t.$t("netDiag.content.desc"))}}),a("div",{staticClass:"mt-60"},[a("steps",{attrs:{step:t.step}},[a("step",{attrs:{sm:""}},[t._v(t._s(t.isLogin?t.$t("netDiag.step1.title"):t.$t("netDiag.step1.title2")))]),a("step",{attrs:{sm:""}},[t._v(t._s(t.$t("netDiag.step2.title")))]),a("step",{attrs:{sm:""}},[t._v(t._s(t.$t("netDiag.step3.title")))])],1),1===t.step?a("div",{staticClass:"step1"},[a("p",[t._v(t._s(t.$t("netDiag.step1.note")))]),a("hr",{staticClass:"bold"}),a("form-group",{staticClass:"mt-28 mb-5"},[a("form-label",[t._v("\n            "+t._s(t.$t("netDiag.step1.domain"))+"\n            "),a("span",{staticClass:"cg"},[t._v("("+t._s(t.$t("netDiag.step1.option"))+")")])]),a("input-wrap",{class:{error:!t.validation.domain}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.lookupDomain,expression:"lookupDomain"}],attrs:{type:"text",name:"domain"},domProps:{value:t.lookupDomain},on:{input:function(e){e.target.composing||(t.lookupDomain=e.target.value)}}}),a("div",{staticClass:"error-msg"},[a("span",[t._v(t._s(t.$t("netDiag.step1.invalidateDomain")))])])])],1),a("hr"),t.isLogin?t._e():a("form-group",{staticClass:"mv-28"},[a("form-label",[t._v(t._s(t.$t("netDiag.step1.agree")))]),a("input-wrap",{staticClass:"hidden-sm-down"},[a("label",{staticClass:"agree"},[a("check",{staticClass:"circle-chx"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.agree,expression:"agree"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.agree)?t._i(t.agree,null)>-1:t.agree},on:{change:function(e){var a=t.agree,i=e.target,o=!!i.checked;if(Array.isArray(a)){var s=t._i(a,null);i.checked?s<0&&(t.agree=a.concat([null])):s>-1&&(t.agree=a.slice(0,s).concat(a.slice(s+1)))}else t.agree=o}}})]),a("span",{domProps:{innerHTML:t._s(t.$t("netDiag.step1.agreeTitle"))}})],1),a("div",{staticClass:"textarea",domProps:{innerHTML:t._s(t.$t("netDiag.step1.provision"))}})]),a("ul",{staticClass:"policy hidden-md-up"},[a("li",[a("label",{staticClass:"ttl"},[t._v(t._s(t.$t("netDiag.step1.agreeTitle2")))]),a("check",{staticClass:"circle-chx"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.agree,expression:"agree"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.agree)?t._i(t.agree,null)>-1:t.agree},on:{change:function(e){var a=t.agree,i=e.target,o=!!i.checked;if(Array.isArray(a)){var s=t._i(a,null);i.checked?s<0&&(t.agree=a.concat([null])):s>-1&&(t.agree=a.slice(0,s).concat(a.slice(s+1)))}else t.agree=o}}})]),a("a",{staticClass:"btn sm lgray line w-80",on:{click:function(e){t.showProvision=!0}}},[t._v(t._s(t.$t("netDiag.step1.showProvision")))])],1)])],1),a("hr",{staticClass:"hidden-sm-down"})],1):2===t.step?a("div",{staticClass:"step2"},[a("div",{staticClass:"box"},[t.isLoading?a("div",{staticClass:"loading"},[a("loading",{staticClass:"loading-sm"})],1):t._e(),a("h3",{domProps:{innerHTML:t._s(t.isError?t.$t("netDiag.step2.error"):t.$t("netDiag.step2.boxTitle"))}}),a("ul",t._l(t.netDiagStepList,(function(e,i){return a("li",{key:e},[a("span",[t._v(t._s(t.$t("netDiag.step2.step",{number:e+1})))]),a("span",{staticClass:"status",class:"status-"+t.progressInfo[i]},[t._v(t._s(t.statusText(i)))])])})),0)])]):3===t.step?a("div",{staticClass:"step3"},[a("div",{staticClass:"box"},[a("h3",[t._v(t._s(t.$t("netDiag.step3.boxTitle")))]),a("p",{staticClass:"mt-20",domProps:{innerHTML:t._s(t.$t("netDiag.step3.boxDesc"))}})]),a("hr",{staticClass:"bold mt-40"}),a("data-table",{attrs:{width:"800"}},[a("colgroup",[a("col",{attrs:{width:"170px"}}),a("col",{attrs:{width:"auto"}})]),a("tbody",[a("tr",[a("th",[t._v(t._s(t.$t("netDiag.step3.col1")))]),a("td",{staticClass:"col-trace-id"},[a("em",[t._v(t._s(t.reports.traceId))]),a("a",{staticClass:"btn sm lgray line mh-20",on:{click:t.copyToClipboard}},[t._v(t._s(t.$t("netDiag.step3.copy")))]),a("span",{staticClass:"fs-14 cg"},[t._v(t._s(t.$t("netDiag.step3.col1desc")))])])]),a("tr",[a("th",[t._v(t._s(t.$t("netDiag.step3.col2")))]),a("td",[t._v(t._s(t._f("dateFormat")(t.reports.requestDateTime,"YYYY-MM-DD HH:mm:ss")))])]),a("tr",[a("th",{domProps:{innerHTML:t._s(t.$t("netDiag.step3.col3"))}}),a("td",[t._v(t._s(t.getReportText(t.reports.client)))])]),a("tr",[a("th",{domProps:{innerHTML:t._s(t.$t("netDiag.step3.col4"))}}),a("td",[t._v(t._s(t.getReportText(t.reports.nat)))])]),a("tr",[a("th",[t._v(t._s(t.$t("netDiag.step3.col5")))]),a("td",{domProps:{innerHTML:t._s(t.getListReportText(t.reports.dns))}})]),a("tr",[a("th",[t._v(t._s(t.$t("netDiag.step3.col6")))]),a("td",{domProps:{innerHTML:t._s(t.lookupDomain?t.lookupDomain+t.getListReportText(t.reports.domain):"")}})]),a("tr",[a("th",[t._v(t._s(t.$t("netDiag.step3.col7")))]),a("td",[t._v(t._s(t.reports.userAgent))])]),a("tr",[a("th",[t._v(t._s(t.$t("netDiag.step3.col8")))]),a("td",[t._v(t._s(t.reports.speed||"0")+"Mbps")])])])])],1):t._e()],1),1===t.step?a("btn-wrap",{staticClass:"mt-40"},[a("a",{staticClass:"btn lg point",class:{disabled:!t.validation.domain||!t.isLogin&&!t.agree},on:{click:t.start}},[t._v(t._s(t.$t("netDiag.step1.start")))])]):3===t.step||t.isError?a("btn-wrap",{staticClass:"col-2 mt-40"},[a("a",{staticClass:"btn lg dgray",on:{click:t.reStart}},[t._v(t._s(t.$t("netDiag.step3.restart")))]),a("a",{staticClass:"btn lg point",on:{click:t.inquiry}},[t._v(t._s(t.$t("netDiag.step3.inquery")))])]):t._e()],1),t.showProvision?a("popup",[a("panel",{attrs:{title:t.$t("netDiag.step1.agreeTitle2")},on:{close:function(e){t.showProvision=!1}}},[a("div",{staticClass:"content",domProps:{innerHTML:t._s(t.$t("netDiag.step1.provision"))}}),a("a",{staticClass:"btn lg azure wf mt-30",on:{click:t.agreeProvision}},[t._v(t._s(t.$t("netDiag.step1.doAgree")))])])],1):t._e()],1)},o=[]},2759:function(t,e,a){"use strict";var i=a(116);a.n(i).a},2760:function(t,e,a){(t.exports=a(1)(!1)).push([t.i,'.flex-vhm{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.flex-hm,.flex-vhm{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.flex-hm,.flex-vhm,.flex-vm{display:-webkit-box;display:-ms-flexbox;display:flex}.flex-vm{-webkit-box-align:center;-ms-flex-align:center;align-items:center}[data-table]{-webkit-overflow-scrolling:touch;position:relative;border:1px solid #dadada}[data-table] .scroll-body{overflow:auto;margin:-1px;-webkit-overflow-scrolling:auto;z-index:1}[data-table].on-top s.top-arrow{width:60px;height:40px;background:url("/public/img/icon/table-more.svg");background-size:contain;position:absolute;left:auto;right:-1px;top:-1px;bottom:auto}[data-table].td-left td,[data-table].th-left th{text-align:left}[data-table].align-top td,[data-table].align-top th{vertical-align:text-top}[data-table] table{height:100%;border-bottom:1px solid #dadada}[data-table] table th{text-align:center}[data-table] table td,[data-table] table th{font-size:.9375rem;letter-spacing:-.44999999999999996px;line-height:1.5}[data-table] table td{line-height:1.6;font-weight:400}[data-table] table td s{font-size:0;text-indent:-9999px;width:10px;height:10px;border:2px solid #14adea;border-radius:50%;display:block;margin:0 auto}[data-table] table td,[data-table] table th{padding:18px 10px;vertical-align:middle;text-align:center}[data-table] table td.tl,[data-table] table th.tl{text-align:left}[data-table] table thead th{color:#fff;background:#6e737f;border-right:1px solid #fff}[data-table] table thead th:last-child{border-left:1px solid #fff;border-right:1px solid #6e737f}[data-table] table thead th.bb,[data-table] table thead th[colspan]{border-bottom:1px solid #fff}[data-table] table thead th.bt{border-top:1px solid #fff}[data-table] table thead th.br{border-right:1px solid #fff}[data-table] table thead th.bl{border-left:1px solid #fff}[data-table] table tbody th,[data-table] table tfoot th{background:#f6f6f6}[data-table] table tbody td,[data-table] table tbody th,[data-table] table tfoot td,[data-table] table tfoot th{border-bottom:1px solid #dadada;border-right:1px solid #dadada}[data-table] table tbody td:first-child,[data-table] table tbody th:first-child,[data-table] table tfoot td:first-child,[data-table] table tfoot th:first-child{border-left:1px solid #dadada}[data-table] table tbody td.bt,[data-table] table tbody th.bt,[data-table] table tfoot td.bt,[data-table] table tfoot th.bt{border-top:1px solid #dadada}[data-table] table tbody td.text-red,[data-table] table tbody th.text-red,[data-table] table tfoot td.text-red,[data-table] table tfoot th.text-red{color:#fb5134}[data-table] table tbody td.text-blue,[data-table] table tbody th.text-blue,[data-table] table tfoot td.text-blue,[data-table] table tfoot th.text-blue{color:#14adea}[data-table] .auto table{table-layout:auto}[view-table]{-webkit-overflow-scrolling:touch;position:relative;border-top:2px solid #222}[view-table] .scroll-body{overflow:auto;-webkit-overflow-scrolling:auto;z-index:1}[view-table].on-top s.top-arrow{width:60px;height:40px;background:url("/public/img/icon/table-more.svg");background-size:contain;position:absolute;left:auto;right:-1px;top:-1px;bottom:auto}[view-table] table th{width:32%}[view-table] table td,[view-table] table th{font-size:.9375rem;letter-spacing:-.44999999999999996px;line-height:1.5;line-height:1.3;font-weight:400}[view-table] table td,[view-table] table th{padding:11px 10px}[view-table] table tbody th{background:#f6f6f6;text-align:left}[view-table] table tbody td,[view-table] table tbody th{border-bottom:1px solid #dadada}.auto table{table-layout:auto}.bt table{border-bottom:2px solid #6e737f;border-top:2px solid #6e737f}.servicePop .no-border{max-height:300px;overflow-y:scroll;-webkit-overflow-scrolling:touch}.no-border{border:0;height:100%}.no-border .scroll-body{margin:0;height:100%}.no-border .scroll-body table{border:0}.no-border .scroll-body table tr:first-child td,.no-border .scroll-body table tr:first-child th{border-top:0}.no-border .scroll-body table tr:last-child td,.no-border .scroll-body table tr:last-child th{border-bottom:0}.no-border .scroll-body table td:first-child,.no-border .scroll-body table th:first-child{border-left:0}.no-border .scroll-body table td:last-child:not(.br),.no-border .scroll-body table th:last-child:not(.br){border-right:0}.neurocloud-table .scroll-body table{border:0}.neurocloud-table .scroll-body table tr th{color:#222;background-color:#fff;font-weight:600}.neurocloud-table .scroll-body table tr td,.neurocloud-table .scroll-body table tr th{font-size:.875rem;letter-spacing:-.42px;line-height:1.5;line-height:1;text-align:left;padding-left:20px;padding-right:20px}.neurocloud-table .scroll-body table tr td{font-weight:400}.neurocloud-table .scroll-body table tr.dotted-border th:first-child{border-bottom:none}.neurocloud-table .scroll-body table tr.dotted-border td,.neurocloud-table .scroll-body table tr.dotted-border th{border-bottom-style:dotted}.neurocloud-table .scroll-body table thead tr{border-bottom:1px solid #dadada}.neurocloud-table .scroll-body table thead tr th{border-right:1px solid #dadada;font-size:1.25rem;letter-spacing:-.6px;line-height:1.5;line-height:1;font-weight:600;font-family:Calibre,sans-serif;letter-spacing:0!important;text-align:center}.neurocloud-table .scroll-body table thead tr th:nth-child(4){border-top:1px solid #dadada}.neurocloud-table .scroll-body table tr th:last-child{border:2px solid #117ce9;border-bottom:1px solid #dadada;color:#117ce9}.neurocloud-table .scroll-body table tr th:nth-last-child(2){border-right:2px solid #117ce9;padding:0;width:20px}.neurocloud-table .scroll-body table tr td:nth-child(4){text-align:center;font-weight:600}.neurocloud-table .scroll-body table tr td:last-child{border-right:2px solid #117ce9;border-left:2px solid #117ce9;text-align:center;font-weight:600}.neurocloud-table .scroll-body table tr td:nth-last-child(2){border-right:2px solid #117ce9;padding:0;width:20px}.neurocloud-table .scroll-body table tr:last-child td:last-child{border-bottom:2px solid #117ce9}.neurocloud-table .scroll-body table tr:last-child td:nth-child(4){border-bottom:1px solid #dadada}#app.en-US [data-table] table td,#app.en-US [data-table] table th{font-size:1rem;letter-spacing:-.48px;line-height:1.5;font-family:Calibre,sans-serif;letter-spacing:0!important}#app.en-US [data-table] table td{line-height:1.56;font-weight:400}#app.en-US [data-table] table td,#app.en-US [data-table] table th{padding-bottom:14px}#app.ja-JP [data-table] table td{font-weight:400}@media (min-width:768px){.no-border,.no-border .scroll-body{height:auto}.servicePop .no-border{max-height:513px;overflow-y:scroll;-webkit-overflow-scrolling:touch}[view-table] table th{padding:18px 20px;width:23%}[view-table] table td,[view-table] table th{font-size:.875rem;letter-spacing:-.42px;line-height:1.5;line-height:1.3;font-weight:400}[view-table] table td{padding:18px 0 18px 30px}}@media (min-width:1260px){[view-table] table th{font-weight:500;padding:22px 30px;width:20%}[view-table] table td,[view-table] table th{font-size:.9375rem;letter-spacing:-.44999999999999996px;line-height:1.5;line-height:1.2}[view-table] table td{font-weight:400;padding:22px 0 22px 30px}}',""])},2782:function(t,e,a){"use strict";var i=a(143);a.n(i).a},2783:function(t,e,a){(t.exports=a(1)(!1)).push([t.i,'.flex-vhm[data-v-4cf69c55]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.flex-hm[data-v-4cf69c55],.flex-vhm[data-v-4cf69c55]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.flex-vm[data-v-4cf69c55]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.sk-fading-circle[data-v-4cf69c55]{margin:auto;width:40px;height:40px;position:absolute;left:0;top:0;right:0;bottom:40px}.sk-fading-circle .sk-circle[data-v-4cf69c55]{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle[data-v-4cf69c55]:before{content:"";display:block;margin:0 auto;width:15%;height:15%;background-color:#14adea;border-radius:100%;-webkit-animation:sk-circleFadeDelay-data-v-4cf69c55 1.2s infinite ease-in-out both;animation:sk-circleFadeDelay-data-v-4cf69c55 1.2s infinite ease-in-out both}.sk-fading-circle .sk-circle12[data-v-4cf69c55]{-webkit-transform:rotate(330deg);-ms-transform:rotate(330deg);transform:rotate(330deg)}.sk-fading-circle .sk-circle11[data-v-4cf69c55]{-webkit-transform:rotate(300deg);-ms-transform:rotate(300deg);transform:rotate(300deg)}.sk-fading-circle .sk-circle10[data-v-4cf69c55]{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.sk-fading-circle .sk-circle9[data-v-4cf69c55]{-webkit-transform:rotate(240deg);-ms-transform:rotate(240deg);transform:rotate(240deg)}.sk-fading-circle .sk-circle8[data-v-4cf69c55]{-webkit-transform:rotate(210deg);-ms-transform:rotate(210deg);transform:rotate(210deg)}.sk-fading-circle .sk-circle7[data-v-4cf69c55]{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.sk-fading-circle .sk-circle6[data-v-4cf69c55]{-webkit-transform:rotate(150deg);-ms-transform:rotate(150deg);transform:rotate(150deg)}.sk-fading-circle .sk-circle5[data-v-4cf69c55]{-webkit-transform:rotate(120deg);-ms-transform:rotate(120deg);transform:rotate(120deg)}.sk-fading-circle .sk-circle4[data-v-4cf69c55]{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.sk-fading-circle .sk-circle3[data-v-4cf69c55]{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.sk-fading-circle .sk-circle2[data-v-4cf69c55]{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.sk-fading-circle .sk-circle12[data-v-4cf69c55]:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}.sk-fading-circle .sk-circle11[data-v-4cf69c55]:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle .sk-circle10[data-v-4cf69c55]:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle .sk-circle9[data-v-4cf69c55]:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle .sk-circle8[data-v-4cf69c55]:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle .sk-circle7[data-v-4cf69c55]:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle .sk-circle6[data-v-4cf69c55]:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle .sk-circle5[data-v-4cf69c55]:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle .sk-circle4[data-v-4cf69c55]:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle .sk-circle3[data-v-4cf69c55]:before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle .sk-circle2[data-v-4cf69c55]:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}@-webkit-keyframes sk-circleFadeDelay-data-v-4cf69c55{0%,39%,to{opacity:0}40%{opacity:1}}@keyframes sk-circleFadeDelay-data-v-4cf69c55{0%,39%,to{opacity:0}40%{opacity:1}}.loading[data-v-4cf69c55]{position:absolute;left:0;top:0;width:100%;height:100%;background:hsla(0,0%,100%,.9)}.loading.loading-lg .sk-fading-circle[data-v-4cf69c55]{width:50px;height:50px;bottom:100px}.loading.loading-lg .sk-fading-circle .sk-circle[data-v-4cf69c55]{margin:50px auto}.loading.loading-lg .sk-fading-circle .sk-circle[data-v-4cf69c55]:before{width:8px;height:8px}.loading.loading-md .sk-fading-circle[data-v-4cf69c55]{width:30px;height:30px;bottom:60px}.loading.loading-md .sk-fading-circle .sk-circle[data-v-4cf69c55]{margin:30px auto}.loading.loading-md .sk-fading-circle .sk-circle[data-v-4cf69c55]:before{width:4px;height:4px}.loading.loading-sm .sk-fading-circle[data-v-4cf69c55]{width:20px;height:20px;bottom:40px}.loading.loading-sm .sk-fading-circle .sk-circle[data-v-4cf69c55]{margin:20px auto}.loading.loading-sm .sk-fading-circle .sk-circle[data-v-4cf69c55]:before{width:3px;height:3px}.loading.loading-xs .sk-fading-circle[data-v-4cf69c55]{width:14px;height:14px;bottom:28px}.loading.loading-xs .sk-fading-circle .sk-circle[data-v-4cf69c55]{margin:14px auto}.loading.loading-xs .sk-fading-circle .sk-circle[data-v-4cf69c55]:before{width:2px;height:2px}.loading.loading-xs[data-v-4cf69c55]{background:#fff}.loading.light-blue[data-v-4cf69c55]{background:#14adea}.loading.light-blue .sk-circle[data-v-4cf69c55]:before{background-color:#fff}',""])},2948:function(t,e,a){"use strict";var i=a(157);a.n(i).a},2949:function(t,e,a){(t.exports=a(1)(!1)).push([t.i,".steps-group[data-v-8598b9b8]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-ms-flexbox;display:flex}",""])},2950:function(t,e,a){"use strict";var i=a(160);a.n(i).a},2951:function(t,e,a){(t.exports=a(1)(!1)).push([t.i,'.flex-vhm[data-v-051751e8]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.flex-hm[data-v-051751e8],.flex-vhm[data-v-051751e8]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.flex-vm[data-v-051751e8]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.step-item[data-v-051751e8]{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:center}.step-item:first-child .step-header[data-v-051751e8]:before,.step-item:last-child .step-header[data-v-051751e8]:after{height:0}.step-item .step-header[data-v-051751e8]{margin-bottom:10px;position:relative}.step-item .step-header[data-v-051751e8]:after,.step-item .step-header[data-v-051751e8]:before{content:"";position:absolute;width:calc(50% - 19px);height:2px;background:#dadada;top:50%}.step-item .step-header[data-v-051751e8]:before{left:0}.step-item .step-header-icon[data-v-051751e8]{position:relative;z-index:1;display:inline-block;width:38px;height:38px;text-align:center;border-radius:50%;color:#707070;font-family:Calibre;border:1px solid #dadada;font-size:1.5rem;letter-spacing:-.72px;line-height:1.5;line-height:49px}.step-item .step-content-title[data-v-051751e8]{color:#14adea;font-size:.875rem;letter-spacing:-.42px;line-height:1.5;visibility:hidden}.step-item-active .step-header[data-v-051751e8]:before{background:#14adea}.step-item-active .step-header-icon[data-v-051751e8]{border-color:#14adea;color:#14adea}.step-item-active .step-content-title[data-v-051751e8]{visibility:visible}.step-item-finish .step-header[data-v-051751e8]:after,.step-item-finish .step-header[data-v-051751e8]:before{background:#14adea}.step-item-finish .step-header-icon[data-v-051751e8]{color:transparent;border-color:#14adea;background:url("/public/img/icon/step-check.svg") no-repeat;background-size:cover}@media (min-width:768px){.step-item[data-v-051751e8]{-webkit-box-flex:0;-ms-flex:0 1 180px;flex:0 1 180px}.step-item.sm[data-v-051751e8]{-webkit-box-flex:0;-ms-flex:0 1 140px;flex:0 1 140px}.step-item.sm .step-header[data-v-051751e8]:after,.step-item.sm .step-header[data-v-051751e8]:before{width:54px}.step-item.sm .step-header-icon[data-v-051751e8]{width:30px;height:30px;font-size:1.125rem;letter-spacing:-.54px;line-height:1.5;line-height:36px}}@media (max-width:767px){.sm[data-v-051751e8],.step-item[data-v-051751e8]{-webkit-box-flex:0;-ms-flex:0 1 92px;flex:0 1 92px}.sm .step-header[data-v-051751e8]:after,.sm .step-header[data-v-051751e8]:before,.step-item .step-header[data-v-051751e8]:after,.step-item .step-header[data-v-051751e8]:before{width:31px}.sm .step-header-icon[data-v-051751e8],.step-item .step-header-icon[data-v-051751e8]{display:inline-block;width:28px;height:28px;font-size:1.125rem;letter-spacing:-.54px;line-height:1.5;line-height:32px}}',""])},3:function(t,e,a){"use strict";a.r(e);var i=a(1764),o=a(114);for(var s in o)"default"!==s&&function(t){a.d(e,t,(function(){return o[t]}))}(s);a(2759);var l=a(0),r=Object(l.a)(o.default,i.a,i.b,!1,null,null,null);e.default=r.exports},3574:function(t,e,a){"use strict";var i=a(904);a.n(i).a},3575:function(t,e,a){(t.exports=a(1)(!1)).push([t.i,'.flex-vhm[data-v-0c8a4966]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.flex-hm[data-v-0c8a4966],.flex-vhm[data-v-0c8a4966]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.flex-vm[data-v-0c8a4966]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.header[data-v-0c8a4966]{background:url(/public/img/netDiag/network-diag-hero-bg.sm.png) 50% no-repeat;background-size:cover;text-align:center;padding:52px 20px;color:#fff}@media (min-width:768px){.header[data-v-0c8a4966]{background-image:url(/public/img/netDiag/network-diag-hero-bg.md.png)}}@media (min-width:992px){.header[data-v-0c8a4966]{background-image:url(/public/img/netDiag/network-diag-hero-bg.lg.png)}}.header h3[data-v-0c8a4966]{font-size:2.25rem;letter-spacing:-1.08px;line-height:1.5}.header p[data-v-0c8a4966]{margin-top:12px;font-size:.875rem;letter-spacing:-.42px;line-height:1.5}.content[data-v-0c8a4966]{background-color:#fff;padding:40px 20px}.content p[data-v-0c8a4966]{color:#707070;font-size:.875rem;letter-spacing:-.42px;line-height:1.5;line-height:22px}.content .step1[data-v-0c8a4966]{margin-top:50px}.content .step1 p[data-v-0c8a4966]{font-size:1rem;letter-spacing:-.48px;line-height:1.5;text-align:left}.content .step1 hr.bold[data-v-0c8a4966]{margin-top:19px;height:2px;background-color:#222}.content .step1 label.circle-chx[data-v-0c8a4966]{position:absolute;left:0;right:auto;top:12px;bottom:auto}.content .step1 .agree[data-v-0c8a4966]{position:relative;margin-top:10px;display:block}.content .step1 .agree label.circle-chx[data-v-0c8a4966]{position:absolute;left:auto;right:10px;top:50%;bottom:auto;margin-top:-12px}.content .step1 .agree label.circle-chx+span[data-v-0c8a4966]{font-size:.9375rem;letter-spacing:-.44999999999999996px;line-height:1.5;font-weight:500;color:#707070;margin:0;display:inline-block;padding-right:50px}.content .step1 ul.policy[data-v-0c8a4966]{margin-top:10px;border-top:1px solid #dadada}.content .step1 ul.policy li[data-v-0c8a4966]{position:relative;padding:12px 120px 8px 32px;border-bottom:1px solid #dadada}.content .step1 ul.policy li label.ttl[data-v-0c8a4966]{font-size:1rem;letter-spacing:-.48px;line-height:1.5;margin:0}.content .step1 ul.policy li label.ttl em[data-v-0c8a4966],.content .step1 ul.policy li label.ttl span[data-v-0c8a4966]{font-size:.875rem;letter-spacing:-.42px;line-height:1.5;font-weight:500}.content .step1 ul.policy li a[data-v-0c8a4966]{position:absolute;left:auto;right:0;top:50%;bottom:auto;margin-top:-16px}.content .step1 .textarea[data-v-0c8a4966]{border:1px solid #dadada;background:#f6f7f8;overflow-y:auto;margin-top:10px;font-size:.75rem;letter-spacing:-.36px;line-height:1.5;font-weight:400;color:#222;padding:10px 20px}.content .step2 .box[data-v-0c8a4966]{margin-top:60px;background-color:#f6f7f8;padding:30px}.content .step2 .box h3[data-v-0c8a4966]{margin-top:60px;text-align:center;font-size:1.25rem;letter-spacing:-.6px;line-height:1.5;line-height:1.08;font-weight:400;color:#14adea}.content .step2 .box .loading[data-v-0c8a4966]{position:relative;margin-top:15px}.content .step2 .box ul[data-v-0c8a4966]{margin:40px auto 0;display:table}.content .step2 .box ul li[data-v-0c8a4966]{display:table-row}.content .step2 .box ul li span[data-v-0c8a4966]{display:table-cell;padding:3px 20px}.content .step2 .box ul li span.status[data-v-0c8a4966]{font-size:.875rem;letter-spacing:-.42px;line-height:1.5;color:#707070}.content .step2 .box ul li span.status[data-v-0c8a4966]:before{position:absolute;left:0;right:auto;top:2px;bottom:auto;width:16px;height:16px;display:inline-block;position:relative;top:3px;margin-right:5px}.content .step2 .box ul li span.status-1[data-v-0c8a4966]{color:#4bbf4d}.content .step2 .box ul li span.status-1[data-v-0c8a4966]:before{content:"";background:url("/public/img/icon/network-diag-complete.svg") no-repeat;background-size:cover}.content .step2 .box ul li span.status-2[data-v-0c8a4966]{color:#4bbf4d}.content .step2 .box ul li span.status-2[data-v-0c8a4966]:before{content:"";background:url("/public/img/icon/network-diag-skip.svg") no-repeat;background-size:cover}.content .step3 .box[data-v-0c8a4966]{margin-top:60px;background-color:#f6f7f8;padding:30px}.content .step3 .box h3[data-v-0c8a4966]{text-align:center;font-size:1.25rem;letter-spacing:-.6px;line-height:1.5;line-height:1.08;font-weight:400;color:#14adea}.content .step3 td.col-trace-id a[data-v-0c8a4966]{padding:0 10px!important}.content .step3 td.col-trace-id span[data-v-0c8a4966]{margin-top:10px;display:block}[panel][data-v-0c8a4966]{margin-top:calc(25vh - 150px)}[panel] .content[data-v-0c8a4966]{font-size:.875rem;letter-spacing:-.42px;line-height:1.5;font-weight:400;max-height:500px;padding:0;overflow-y:hidden}[panel] .content+a.azure[data-v-0c8a4966]{width:100%}@media (min-width:768px){.header[data-v-0c8a4966]{padding:57px 40px}.header h3[data-v-0c8a4966]{font-size:2.625rem;letter-spacing:-1.26px;line-height:1.5}.content[data-v-0c8a4966]{max-width:800px;margin:0 auto;padding:40px}.content p[data-v-0c8a4966]{text-align:center}.content .step2 .box h3[data-v-0c8a4966]{font-size:1.5rem;letter-spacing:-.72px;line-height:1.5}.content .step2 .box ul li span[data-v-0c8a4966]{padding:5px 20px}.content .step3 td.col-trace-id a[data-v-0c8a4966]{padding:0 26px!important}.content .step3 td.col-trace-id span[data-v-0c8a4966]{display:inline}}.disabled[data-v-0c8a4966]{pointer-events:none;cursor:default;background:#dadada!important}[data-table][data-v-0c8a4966]{border-right:0}[data-table] table td[data-v-0c8a4966],[data-table] table th[data-v-0c8a4966]{border-left:0!important;border-right:0!important;padding:20px 30px;text-align:left}[data-table] table td[data-v-0c8a4966]{font-size:15px;padding:20px}@media (min-width:768px){#app.ja-JP [form-label][data-v-0c8a4966]{font-size:.9rem}#app.ja-JP [form-group]>label[data-v-0c8a4966]{width:30%}}',""])},4468:function(t,e,a){"use strict";a.r(e);var i=a(2119),o=a(902);for(var s in o)"default"!==s&&function(t){a.d(e,t,(function(){return o[t]}))}(s);a(3574);var l=a(0),r=Object(l.a)(o.default,i.a,i.b,!1,null,"0c8a4966",null);e.default=r.exports},70:function(t,e,a){"use strict";a.r(e);var i=a(2013),o=a(155);for(var s in o)"default"!==s&&function(t){a.d(e,t,(function(){return o[t]}))}(s);a(2948);var l=a(0),r=Object(l.a)(o.default,i.a,i.b,!1,null,"8598b9b8",null);e.default=r.exports},71:function(t,e,a){"use strict";a.r(e);var i=a(2014),o=a(158);for(var s in o)"default"!==s&&function(t){a.d(e,t,(function(){return o[t]}))}(s);a(2950);var l=a(0),r=Object(l.a)(o.default,i.a,i.b,!1,null,"051751e8",null);e.default=r.exports},902:function(t,e,a){"use strict";a.r(e);var i=a(903),o=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e.default=o.a},903:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=x(a(14)),o=x(a(29)),s=x(a(5)),l=x(a(38)),r=x(a(13)),n=x(a(12)),d=x(a(9)),c=x(a(70)),p=x(a(71)),b=x(a(15)),f=x(a(25)),u=x(a(31)),g=x(a(102)),h=x(a(3)),m=a(8);function x(t){return t&&t.__esModule?t:{default:t}}var v={CLIENT_IP:0,LOCAL_DNS:1,PERFORMANCE:2},k={READY:0,SUCCESS:1,ING:3,FAIL:2};e.default={name:"NetDiag",components:{FormGroup:l.default,FormLabel:r.default,InputWrap:n.default,BtnWrap:d.default,Steps:c.default,Step:p.default,Check:b.default,Popup:f.default,Panel:u.default,Loading:g.default,DataTable:h.default},data:function(){return{step:1,agree:!1,showProvision:!1,isLoading:!1,netDiagStepList:v,statusList:k,progressInfo:{},isError:!1,lookupDomain:"",uuid:"",results:{localIp:"",remoteAddress:"",dnsIp:"",duration:0,bitsLoaded:0,speedBps:0,speedKbps:0,sppedMbps:0,connection_speed:0},reports:{}}},computed:{isLogin:function(){return this.$store.getters.isLogin},validation:function(){return{domain:""===this.lookupDomain||(0,m.validateDomainName)(this.lookupDomain)}},ndiagWhoamiUrl:function(){return this.$store.state.urls.ndiagWhoamiUrl}},methods:{start:function(){this.step=2,this.processClientIp(),this.isLoading=!0},init:function(){var t=this;s.default.each(Object.keys(this.netDiagStepList),(function(e){t.$set(t.progressInfo,e,k.READY)})),this.isError=!1,this.agree=!1,this.uuid=(0,m.makeId)(12),this.lookupDomain=""},processClientIp:function(){var t=this;this.progressInfo.CLIENT_IP=k.ING,i.default.get(this.ndiagWhoamiUrl.replace(/uuid/,this.uuid)+"/api/v1/ip-address").then((function(e){var a=e.data;t.results=s.default.assign({localIp:a.localIp,remoteAddress:a.remoteAddress}),t.progressInfo.CLIENT_IP=k.SUCCESS,t.processLocalDns()})).catch((function(){t.progressInfo.CLIENT_IP=k.FAIL,t.processLocalDns()}))},processLocalDns:function(){var t=this;this.progressInfo.LOCAL_DNS=k.ING,i.default.get("/ndiag-api/dns").then((function(e){var a=e.data;t.result=s.default.assign(t.results,{dnsIp:a}),t.progressInfo.LOCAL_DNS=k.SUCCESS,t.processPerformance()})).catch((function(){t.progressInfo.LOCAL_DNS=k.FAIL,t.processPerformance()}))},processPerformance:function(){var t=this;this.progressInfo.PERFORMANCE=k.ING;var e=(new Date).getTime();i.default.get(this.ndiagWhoamiUrl.replace(/-dns/,"-kr2").replace(/uuid/,this.uuid)+"/api/v1/dummy",{responseType:"blob"}).then((function(a){var i=((new Date).getTime()-e)/1e3,o=8*a.data.size,l=(o/i).toFixed(2),r=(l/1024).toFixed(2),n=(r/1024).toFixed(2);t.results=s.default.assign(t.results,{duration:i,bitsLoaded:o,speedBps:l,speedKbps:r,speedMbps:n,connection_speed:n,responseHeaders:a.headers}),t.progressInfo.PERFORMANCE=k.SUCCESS,t.submitResults()})).catch((function(){t.progressInfo.PERFORMANCE=k.FAIL,t.submitResults()}))},submitResults:function(){var t=this,e={traceId:this.uuid,lookupDomain:this.lookupDomain,clientIp:this.results.localIp,natIp:this.results.remoteAddress,speed:this.results.connection_speed,responseHeader:JSON.stringify(this.results.responseHeaders)};i.default.post("/ndiag-api/ip",e).then((function(e){var a=e.data;t.reports=a,t.isLoading=!1,t.step=3})).catch((function(){t.isLoading=!1,t.isError=!0}))},agreeProvision:function(){this.agree=!0,this.showProvision=!1},statusText:function(t){switch(this.progressInfo[t]){case k.READY:return this.$t("netDiag.step2.ready");case k.ING:return this.$t("netDiag.step2.ing");case k.SUCCESS:return this.$t("netDiag.step2.success");default:return this.$t("netDiag.step2.fail")}},inquiry:function(){window.opener?window.opener.callback(this.reports.traceId||""):this.$router.push({name:"question",params:{type:"service",contentText:this.$t("netDiag.step3.col1")+" : "+(this.reports.traceId||"")},query:{parentCode:"O2O_NET"}})},reStart:function(){this.step=1,this.init(),window.scrollTo(0,0)},getListReportText:function(t){var e=this;if(!t)return"";var a="";return s.default.each(t,(function(t){a+="<p>"+e.getReportText(t)+"</p>"})),a},getReportText:function(t){if(!t)return"";var e=t.ipAddress,a=t.autonomousSystemNumber,i=t.isp,o=t.country,s="",l="";return e&&(s=e,o?s=s+" ("+o+")":s+=" (None)",a&&(l="AS"+a),i&&(l=l+" / "+i),l&&(l="("+l+")")),s+" "+l},copyToClipboard:function(){try{var t=document.createElement("textarea"),e=window.pageYOffset||document.documentElement.scrollTop;t.style.fontSize="12pt",t.style.border="0",t.style.padding="0",t.style.margin="0",t.style.position="absolute",t.style.top=e+"px",t.style.left="-9999px",t.setAttribute("readonly",""),t.value=this.reports.traceId,document.body.appendChild(t),t.select(),document.execCommand("Copy"),t.className="oInputClip",t.style.display="none",(0,o.default)(".oInputClip").remove()}catch(t){(0,o.default)(".oInputClip").remove(),console.error(t)}}},mounted:function(){this.init()}}},904:function(t,e,a){var i=a(3575);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(2).default)("c6b8dee6",i,!0,{})}}]);