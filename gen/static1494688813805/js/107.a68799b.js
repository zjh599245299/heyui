webpackJsonp([107],{119:function(e,t,n){var o=n(0)(n(708),n(877),null,null);o.options.__file="/Users/alicia/Documents/develop/github/heyui/src/components/demos/dataplugins/autocomplete7.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] autocomplete7.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},708:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o=n(91),u=function(e){return e&&e.__esModule?e:{default:e}}(o),a=function(e,t){(0,u.default)("https://suggest.taobao.com/sug?code=utf-8&q="+e).then(function(e){return e.json()}).then(function(e){t(e.result.map(function(e){return{title:e[0],key:e[1]}}))})};t.default={data:function(){return{value:"",param:{loadData:a,minWord:1}}},methods:{onChange:function(t){e(t)},update:function(){this.value={key:123,title:"修改"}}}}}).call(t,n(7))},877:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("value:"+e._s(e.value)+"\n    "),n("button",{staticClass:"h-btn h-btn-text",on:{click:e.update}},[e._v("修改值")])]),e._v(" "),n("AutoComplete",{attrs:{option:e.param,type:"object"},on:{change:e.onChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});