(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d366ebba"],{"2f21":function(t,a,e){"use strict";var n=e("79e5");t.exports=function(t,a){return!!t&&n((function(){a?t.call(null,(function(){}),1):t.call(null)}))}},3200:function(t,a,e){"use strict";e.d(a,"a",(function(){return r})),e.d(a,"d",(function(){return i})),e.d(a,"f",(function(){return s})),e.d(a,"b",(function(){return c})),e.d(a,"c",(function(){return o})),e.d(a,"e",(function(){return u}));var n=e("b775");function r(t){return Object(n["b"])("/paper/paper/create-paper",t)}function i(t){return Object(n["b"])("/paper/paper/paper-detail",t)}function s(t){return Object(n["b"])("/paper/paper/qu-detail",t)}function c(t){return Object(n["b"])("/paper/paper/fill-answer",t)}function o(t){return Object(n["b"])("/paper/paper/hand-exam",t)}function u(t){return Object(n["b"])("/paper/paper/paper-result",t)}},3276:function(t,a,e){},"55dd":function(t,a,e){"use strict";var n=e("5ca1"),r=e("d8e8"),i=e("4bf8"),s=e("79e5"),c=[].sort,o=[1,2,3];n(n.P+n.F*(s((function(){o.sort(void 0)}))||!s((function(){o.sort(null)}))||!e("2f21")(c)),"Array",{sort:function(t){return void 0===t?c.call(i(this)):c.call(i(this),r(t))}})},"70fe":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-container"},[e("el-row",{attrs:{gutter:24}},[e("el-col",{attrs:{span:24}},[e("el-card",{staticStyle:{"margin-bottom":"10px"}},[t._v(" 距结束还有："),e("span",{staticStyle:{color:"#ff0000"}},[t._v(t._s(t.min)+"分钟"+t._s(t.sec)+"秒")]),e("el-button",{staticStyle:{float:"right","margin-top":"-10px"},attrs:{type:"primary",icon:"el-icon-plus",loading:t.loading},on:{click:function(a){return t.handHandExam()}}},[t._v(" "+t._s(t.handleText)+" ")])],1)],1),e("el-col",{staticStyle:{"margin-bottom":"10px"},attrs:{span:6,xs:24}},[e("el-card",[e("p",{staticClass:"card-title"},[t._v("答题卡")]),e("el-row",{staticClass:"card-line",staticStyle:{"padding-left":"10px"},attrs:{gutter:24}},[e("el-tag",{attrs:{type:"info"}},[t._v("未作答")]),e("el-tag",{attrs:{type:"success"}},[t._v("已作答")])],1),void 0!==t.paperData.radioList&&t.paperData.radioList.length>0?e("div",[e("p",{staticClass:"card-title"},[t._v("单选题")]),e("el-row",{staticClass:"card-line",attrs:{gutter:24}},t._l(t.paperData.radioList,(function(a){return e("el-tag",{attrs:{type:t.cardItemClass(a.answered,a.quId)},on:{click:function(e){return t.handSave(a)}}},[t._v(" "+t._s(a.sort+1))])})),1)],1):t._e(),void 0!==t.paperData.multiList&&t.paperData.multiList.length>0?e("div",[e("p",{staticClass:"card-title"},[t._v("多选题")]),e("el-row",{staticClass:"card-line",attrs:{gutter:24}},t._l(t.paperData.multiList,(function(a){return e("el-tag",{attrs:{type:t.cardItemClass(a.answered,a.quId)},on:{click:function(e){return t.handSave(a)}}},[t._v(t._s(a.sort+1))])})),1)],1):t._e(),void 0!==t.paperData.judgeList&&t.paperData.judgeList.length>0?e("div",[e("p",{staticClass:"card-title"},[t._v("判断题")]),e("el-row",{staticClass:"card-line",attrs:{gutter:24}},t._l(t.paperData.judgeList,(function(a){return e("el-tag",{attrs:{type:t.cardItemClass(a.answered,a.quId)},on:{click:function(e){return t.handSave(a)}}},[t._v(t._s(a.sort+1))])})),1)],1):t._e(),void 0!==t.paperData.saqList&&t.paperData.saqList.length>0?e("div",[e("p",{staticClass:"card-title"},[t._v("简答题")]),e("el-row",{staticClass:"card-line",attrs:{gutter:24}},t._l(t.paperData.saqList,(function(a){return e("el-tag",{attrs:{type:t.cardItemClass(a.answered,a.quId)},on:{click:function(e){return t.handSave(a)}}},[t._v(t._s(a.sort+1))])})),1)],1):t._e()],1)],1),e("el-col",{attrs:{span:18,xs:24}},[e("el-card",{staticClass:"qu-content"},[t.quData.content?e("p",[t._v("题目"+t._s(t.quData.sort+1)+" ")]):t._e(),e("div",{staticStyle:{"margin-bottom":"20px"}},[e("Markdown",{attrs:{value:t.quData.content,isPreview:!0}}),t.quData.image?e("p",[e("img",{attrs:{src:t.quData.image}})]):t._e()],1),e("p",[t._v("选项：")]),1===t.quData.quType||3===t.quData.quType?e("div",[e("el-radio-group",{model:{value:t.radioValue,callback:function(a){t.radioValue=a},expression:"radioValue"}},t._l(t.quData.answerList,(function(a){return e("el-radio",{attrs:{label:a.id}},[t._v(t._s(a.abc)+"."+t._s(a.content)+" "),a.image?e("div",{staticStyle:{clear:"both"}},[e("img",{attrs:{src:a.image}})]):t._e()])})),1)],1):t._e(),2===t.quData.quType?e("div",[e("el-checkbox-group",{model:{value:t.multiValue,callback:function(a){t.multiValue=a},expression:"multiValue"}},t._l(t.quData.answerList,(function(a){return e("el-checkbox",{attrs:{label:a.id}},[t._v(t._s(a.abc)+"."+t._s(a.content)+" "),a.image?e("div",{staticStyle:{clear:"both"}},[e("img",{attrs:{src:a.image}})]):t._e()])})),1)],1):t._e(),4===t.quData.quType?e("div",[e("el-input",{attrs:{type:"textarea",rows:10},model:{value:t.saqValue,callback:function(a){t.saqValue=a},expression:"saqValue"}})],1):t._e()]),e("div",{staticStyle:{"margin-top":"20px"}},[t.showPrevious?e("el-button",{attrs:{type:"primary",icon:"el-icon-back"},on:{click:function(a){return t.handPrevious()}}},[t._v(" 上一题 ")]):t._e(),t.showNext?e("el-button",{attrs:{type:"warning",icon:"el-icon-right"},on:{click:function(a){return t.handNext()}}},[t._v(" 下一题 ")]):t._e()],1)],1),e("el-col",{attrs:{span:24}},[e("el-card",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[t._v(" 距结束还有："),e("span",{staticStyle:{color:"#ff0000"}},[t._v(t._s(t.min)+"分钟"+t._s(t.sec)+"秒")]),t.showNext?t._e():e("el-button",{staticStyle:{float:"right","margin-top":"-10px"},attrs:{type:"primary",icon:"el-icon-plus",loading:t.loading},on:{click:function(a){return t.handHandExam()}}},[t._v(" "+t._s(t.handleText)+" ")])],1)],1)],1)],1)},r=[],i=(e("55dd"),e("ac6a"),e("3200")),s=e("5c96"),c=e("8e77"),o={name:"ExamProcess",components:{Markdown:c["a"]},data:function(){return{isFullscreen:!1,camVisible:!0,showPrevious:!1,showNext:!0,loading:!1,handleText:"交卷",pageLoading:!1,paperId:"",cardItem:{},allItem:[],quData:{answerList:[]},paperData:{leftSeconds:99999,radioList:[],multiList:[],judgeList:[],saqList:[]},radioValue:"",saqValue:"",multiValue:[],answeredIds:[],min:"00",sec:"00"}},created:function(){var t=this.$route.params.id;"undefined"!==typeof t&&(this.paperId=t,this.fetchData(t))},methods:{countdown:function(){var t=this.paperData.leftSeconds;if(t<0)this.doHandler();else{var a=parseInt(t/60%60),e=parseInt(t%60);this.min=a>9?a:"0"+a,this.sec=e>9?e:"0"+e;var n=this;this.paperData.leftSeconds-=1,setTimeout((function(){n.countdown()}),1e3)}},cardItemClass:function(t,a){return a===this.cardItem.quId?"warning":t?"success":t?void 0:"info"},countNotAnswered:function(){var t=0;return this.paperData.radioList.forEach((function(a){a.answered||(t+=1)})),this.paperData.multiList.forEach((function(a){a.answered||(t+=1)})),this.paperData.judgeList.forEach((function(a){a.answered||(t+=1)})),this.paperData.saqList.forEach((function(a){a.answered||(t+=1)})),t},handNext:function(){var t=this.cardItem.sort+1;this.handSave(this.allItem[t])},handPrevious:function(){var t=this.cardItem.sort-1;this.handSave(this.allItem[t])},doHandler:function(){var t=this;this.handleText="正在交卷，请等待...",this.loading=!0;var a={id:this.paperId};Object(i["c"])(a).then((function(){t.$message({message:"试卷提交成功，即将进入试卷详情！",type:"success"}),t.$router.push({name:"ShowExam",params:{id:t.paperId}})}))},handHandExam:function(){var t=this;this.handSave(this.cardItem,(function(){var a=t.countNotAnswered(),e="确认要交卷吗？";a>0&&(e="您还有"+a+"题未作答，确认要交卷吗?"),t.$confirm(e,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.doHandler()})).catch((function(){t.$message({type:"info",message:"交卷已取消，您可以继续作答！"})}))}))},handSave:function(t,a){var e=this;t.id===this.allItem[0].id?this.showPrevious=!1:this.showPrevious=!0;var n=this.allItem.length-1;t.id===this.allItem[n].id?this.showNext=!1:this.showNext=!0;var r=this.multiValue;""!==this.radioValue&&r.push(this.radioValue);var s={paperId:this.paperId,quId:this.cardItem.quId,answers:r,answer:this.saqValue};Object(i["b"])(s).then((function(){r.length>0&&(e.cardItem.answered=!0),a&&a(),e.fetchQuData(t)}))},fetchQuData:function(t){var a=this,e=s["Loading"].service({text:"拼命加载中",background:"rgba(0, 0, 0, 0.7)"});this.cardItem=t;var n={paperId:this.paperId,quId:t.quId};Object(i["f"])(n).then((function(t){console.log(t),a.quData=t.data,a.radioValue="",a.multiValue=[],a.quData.answerList.forEach((function(t){1!==a.quData.quType&&3!==a.quData.quType||!t.checked||(a.radioValue=t.id),2===a.quData.quType&&t.checked&&a.multiValue.push(t.id)})),a.saqValue=a.quData.answer,e.close()}))},fetchData:function(t){var a=this,e={id:t};Object(i["d"])(e).then((function(t){a.paperData=t.data,a.paperData.radioList?a.cardItem=a.paperData.radioList[0]:a.paperData.multiList?a.cardItem=a.paperData.multiList[0]:a.paperData.judgeList?a.cardItem=a.paperData.judgeList[0]:a.cardItem=a.paperData.saqList[0];var e=a;a.paperData.radioList.forEach((function(t){e.allItem.push(t)})),a.paperData.multiList.forEach((function(t){e.allItem.push(t)})),a.paperData.judgeList.forEach((function(t){e.allItem.push(t)})),a.paperData.saqList.forEach((function(t){e.allItem.push(t)})),e.allItem.forEach((function(t,a){t.sort=a})),a.cardItem=e.allItem[0],a.fetchQuData(a.cardItem),a.countdown()}))}}},u=o,l=(e("7c4e"),e("2877")),d=Object(l["a"])(u,n,r,!1,null,"f4f3bca8",null);a["default"]=d.exports},"7c4e":function(t,a,e){"use strict";var n=e("3276"),r=e.n(n);r.a}}]);