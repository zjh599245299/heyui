webpackJsonp([14],{1022:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("button",{staticClass:"h-btn h-btn-blue",on:{click:function(t){e.notice("info")}}},[e._v("消息")]),e._v(" "),n("button",{staticClass:"h-btn h-btn-green",on:{click:function(t){e.notice("success")}}},[e._v("成功")]),e._v(" "),n("button",{staticClass:"h-btn h-btn-yellow",on:{click:function(t){e.notice("warn")}}},[e._v("警告")]),e._v(" "),n("button",{staticClass:"h-btn h-btn-red",on:{click:function(t){e.notice("error")}}},[e._v("错误")])])},staticRenderFns:[]},e.exports.render._withStripped=!0},217:function(e,t,n){var o=n(0)(n(801),n(1022),null,null);o.options.__file="/Users/alicia/Documents/develop/github/heyui/src/components/demos/message/notice3.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] notice3.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},801:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{notice:function(e){var t={info:"消息",success:"成功",warn:"警告",error:"错误"}[e];this.$Notice({type:e,title:t,content:"这是一个"+t+"的通知"})}}}}});