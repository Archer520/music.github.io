(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-SongList-SongList","pages-components-NewMusic-NewMusic"],{"0882":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("f976"),s={created:function(){var t=this,e=(0,i.getHotSinger)("/top/artists",30,0);setTimeout((function(){e.then((function(e){200===e.status&&(t.hotSingers=e.data.artists)})).catch((function(t){new Error("请求热门歌手数据错误:",t)}))}),3e3)},data:function(){return{hotSingers:[]}},methods:{hotLink:function(t){uni.navigateTo({url:"/pages/components/SingerDetails/SingerDetails?id=".concat(t)})}}};e.default=s},"0aa6":function(t,e,n){"use strict";var i=n("30e9"),s=n.n(i);s.a},"0e44":function(t,e,n){"use strict";n.r(e);var i=n("5179"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},"1f77":function(t,e,n){"use strict";n.r(e);var i=n("0882"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},2623:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */.top-50[data-v-c57cc4c4]{margin-top:%?60?%}\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.hot-singer .title[data-v-c57cc4c4]{display:flex;align-items:center;height:%?30?%;font-size:%?30?%;font-weight:700}.hot-singer .title[data-v-c57cc4c4]::before{content:"";margin-right:%?30?%;display:block;width:%?10?%;height:100%;background-color:#c20c0c;border-radius:%?20?%}.hot-singer .singer[data-v-c57cc4c4]{margin-top:%?40?%;display:flex;height:%?300?%;overflow:auto}.hot-singer .singer .singer-item[data-v-c57cc4c4]{margin-right:%?20?%;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;width:%?300?%;height:100%;text-align:center}.hot-singer .singer .singer-item .singer-pic[data-v-c57cc4c4]{width:100%;height:%?250?%}.hot-singer .singer .singer-item .singer-pic uni-image[data-v-c57cc4c4]{width:100%;height:100%;border-radius:%?20?%}.hot-singer .singer .singer-item .singer-name[data-v-c57cc4c4]{margin-top:%?10?%;width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:%?30?%;color:#ccc}',""]),t.exports=e},"2d65":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */.top-50[data-v-0c8a8e19]{margin-top:%?60?%}\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.new-music .title[data-v-0c8a8e19]{display:flex;align-items:center;height:%?30?%;font-size:%?30?%;font-weight:700}.new-music .title[data-v-0c8a8e19]::before{content:"";margin-right:%?30?%;display:block;width:%?10?%;height:100%;background-color:#c20c0c;border-radius:%?20?%}.new-music .new-music-list[data-v-0c8a8e19]{margin-top:%?30?%}.new-music .new-music-list .new-music-item[data-v-0c8a8e19]{margin-top:%?20?%;display:flex;height:%?130?%;border-bottom:%?1?% solid #ccc}.new-music .new-music-list .new-music-item .music-pic[data-v-0c8a8e19]{flex-grow:0;flex-shrink:0;margin-right:%?20?%;width:%?120?%;height:%?120?%}.new-music .new-music-list .new-music-item .music-pic uni-image[data-v-0c8a8e19]{width:100%;height:100%;border-radius:%?20?%}.new-music .new-music-list .new-music-item .music-info[data-v-0c8a8e19]{overflow:hidden;width:100%;display:flex;justify-content:space-between;align-items:center}.new-music .new-music-list .new-music-item .music-info .music-name[data-v-0c8a8e19]{padding:0 %?30?%;width:100%;overflow:hidden}.new-music .new-music-list .new-music-item .music-info .music-name .song-title[data-v-0c8a8e19],\r\n.new-music .new-music-list .new-music-item .music-info .music-name .singer-name[data-v-0c8a8e19]{width:90%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:%?30?%}.new-music .new-music-list .new-music-item .music-info .music-name .singer-name[data-v-0c8a8e19]{margin-top:%?20?%;font-size:%?28?%;color:#ccc}.new-music .new-music-list .new-music-item .music-info .play-mv[data-v-0c8a8e19]{width:%?50?%;height:%?50?%}.new-music .new-music-list .new-music-item .music-info .play-mv uni-image[data-v-0c8a8e19]{width:100%;height:100%}',""]),t.exports=e},"30a5":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".song-list[data-v-5503543c]{padding:%?20?%}",""]),t.exports=e},"30e9":function(t,e,n){var i=n("2d65");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=n("4f06").default;s("dfab287a",i,!0,{sourceMap:!1,shadowMode:!1})},4475:function(t,e,n){"use strict";n.r(e);var i=n("7a9e"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},5179:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("f976"),s={created:function(){var t=this,e=(0,i.getNewSong)("/personalized/newsong",20);e.then((function(e){200===e.status&&(t.newSong=e.data.result)})).catch((function(t){new Error("请求最新音乐失败：",t)}))},data:function(){return{newSong:[]}},methods:{playMusic:function(t){var e=this,n=this.newSong[t].id,s=(0,i.getMusic)("/check/music",n);s.then((function(n){if(n.data.success){var i={activeIndex:t,musicList:e.newSong},s=JSON.stringify(i);uni.navigateTo({url:"/pages/Play/Play",success:function(t){t.eventChannel.emit("acceptDataFromOpenerPage",{data:s})}})}else uni.showModal({title:"提示",content:n.data.message,showCancel:!1})}))}}};e.default=s},"55cd":function(t,e,n){"use strict";var i=n("860d"),s=n.n(i);s.a},"589c":function(t,e,n){t.exports=n.p+"static/img/play.cef38889.png"},"5fd6":function(t,e,n){"use strict";n.r(e);var i=n("f356"),s=n("4475");for(var a in s)"default"!==a&&function(t){n.d(e,t,(function(){return s[t]}))}(a);n("55cd");var c,r=n("f0c5"),u=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"5503543c",null,!1,i["a"],c);e["default"]=u.exports},"7a9e":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(n("8b10")),a=i(n("c853")),c=i(n("be2b")),r={data:function(){return{}},methods:{},components:{Swiper:s.default,HotSinger:a.default,NewMusic:c.default}};e.default=r},"7cd9":function(t,e,n){"use strict";var i=n("82ec"),s=n.n(i);s.a},"82ec":function(t,e,n){var i=n("2623");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=n("4f06").default;s("5608a4b4",i,!0,{sourceMap:!1,shadowMode:!1})},"860d":function(t,e,n){var i=n("30a5");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=n("4f06").default;s("430aa24a",i,!0,{sourceMap:!1,shadowMode:!1})},"91be":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"new-music"},[i("v-uni-view",{staticClass:"title"},[t._v("最新音乐")]),i("v-uni-view",{staticClass:"new-music-list"},t._l(t.newSong,(function(e,s){return i("v-uni-view",{key:e.id,staticClass:"new-music-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.playMusic(s)}}},[i("v-uni-view",{staticClass:"music-pic"},[i("v-uni-image",{attrs:{src:e.picUrl}})],1),i("v-uni-view",{staticClass:"music-info"},[i("v-uni-view",{staticClass:"music-name"},[i("v-uni-view",{staticClass:"song-title"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"singer-name"},[t._v(t._s(e.song.artists[0].name))])],1),i("v-uni-view",{staticClass:"play-mv"},[i("v-uni-image",{attrs:{src:n("589c"),mode:"widthFix"}})],1)],1)],1)})),1)],1)},a=[]},a6d9:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uLoadingIcon:n("8362").default},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"hot-singer"},[n("u-loading-icon",{attrs:{mode:"semicircle",text:"加载中...",show:!t.hotSingers.length}}),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.hotSingers.length,expression:"hotSingers.length"}],staticClass:"title"},[t._v("热门歌手")]),n("v-uni-view",{staticClass:"singer"},t._l(t.hotSingers,(function(e){return n("v-uni-view",{key:e.id,staticClass:"singer-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hotLink(e.id)}}},[n("v-uni-view",{staticClass:"singer-pic"},[n("v-uni-image",{attrs:{src:e.picUrl}})],1),n("v-uni-view",{staticClass:"singer-name"},[t._v(t._s(e.name))])],1)})),1)],1)},a=[]},be2b:function(t,e,n){"use strict";n.r(e);var i=n("91be"),s=n("0e44");for(var a in s)"default"!==a&&function(t){n.d(e,t,(function(){return s[t]}))}(a);n("0aa6");var c,r=n("f0c5"),u=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"0c8a8e19",null,!1,i["a"],c);e["default"]=u.exports},c853:function(t,e,n){"use strict";n.r(e);var i=n("a6d9"),s=n("1f77");for(var a in s)"default"!==a&&function(t){n.d(e,t,(function(){return s[t]}))}(a);n("7cd9");var c,r=n("f0c5"),u=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"c57cc4c4",null,!1,i["a"],c);e["default"]=u.exports},f356:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"song-list"},[n("Swiper"),n("v-uni-view",{staticClass:"top-50"},[n("HotSinger")],1),n("v-uni-view",{staticClass:"top-50"},[n("NewMusic")],1)],1)},a=[]}}]);