webpackJsonp([56],{170:function(e,c,s){var t=s(0)(s(759),s(901),null,null);t.options.__file="/Users/alicia/Documents/develop/github/heyui/src/components/demos/form/checkbox1.vue",t.esModule&&Object.keys(t.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),t.options.functional&&console.error("[vue-loader] checkbox1.vue: functional components are not supported with templates, they should use render functions."),e.exports=t.exports},759:function(e,c,s){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default={data:function(){return{checks:[]}},methods:{checkAll:function(){3==this.checks.length?this.checks.splice(0,3):this.checks=["1","2","3"]}}}},901:function(e,c,s){e.exports={render:function(){var e=this,c=e.$createElement,s=e._self._c||c;return s("div",[s("div",{staticClass:"bottom-line"},[s("label",[s("input",{attrs:{type:"checkbox",value:"3",indeterminate:e.checks.length>0&&e.checks.length<3},domProps:{checked:3==e.checks.length},on:{click:e.checkAll}}),e._v("全选")])]),e._v(" "),s("div",{staticClass:"h-checkbox"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.checks,expression:"checks"}],attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(e.checks)?e._i(e.checks,"1")>-1:e.checks},on:{__c:function(c){var s=e.checks,t=c.target,r=!!t.checked;if(Array.isArray(s)){var o=e._i(s,"1");r?o<0&&(e.checks=s.concat("1")):o>-1&&(e.checks=s.slice(0,o).concat(s.slice(o+1)))}else e.checks=r}}}),e._v("测试1")]),e._v(" "),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.checks,expression:"checks"}],attrs:{type:"checkbox",value:"2"},domProps:{checked:Array.isArray(e.checks)?e._i(e.checks,"2")>-1:e.checks},on:{__c:function(c){var s=e.checks,t=c.target,r=!!t.checked;if(Array.isArray(s)){var o=e._i(s,"2");r?o<0&&(e.checks=s.concat("2")):o>-1&&(e.checks=s.slice(0,o).concat(s.slice(o+1)))}else e.checks=r}}}),e._v("测试2")]),e._v(" "),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.checks,expression:"checks"}],attrs:{type:"checkbox",value:"3"},domProps:{checked:Array.isArray(e.checks)?e._i(e.checks,"3")>-1:e.checks},on:{__c:function(c){var s=e.checks,t=c.target,r=!!t.checked;if(Array.isArray(s)){var o=e._i(s,"3");r?o<0&&(e.checks=s.concat("3")):o>-1&&(e.checks=s.slice(0,o).concat(s.slice(o+1)))}else e.checks=r}}}),e._v("测试3")])])])},staticRenderFns:[]},e.exports.render._withStripped=!0}});