(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fa6b414"],{3200:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"d",(function(){return s})),a.d(e,"f",(function(){return n})),a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return l})),a.d(e,"e",(function(){return o}));var i=a("b775");function r(t){return Object(i["b"])("/paper/paper/create-paper",t)}function s(t){return Object(i["b"])("/paper/paper/paper-detail",t)}function n(t){return Object(i["b"])("/paper/paper/qu-detail",t)}function c(t){return Object(i["b"])("/paper/paper/fill-answer",t)}function l(t){return Object(i["b"])("/paper/paper/hand-exam",t)}function o(t){return Object(i["b"])("/paper/paper/paper-result",t)}},b3de:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("h2",{staticClass:"text-center"},[t._v("开发人员入职培训考试")]),a("p",{staticClass:"text-center",staticStyle:{color:"#666"}},[t._v(t._s(t.paperData.createTime))]),a("el-row",{staticStyle:{"margin-top":"50px"},attrs:{gutter:24}},[a("el-col",{staticClass:"text-center",attrs:{span:8}},[t._v(" 考生姓名："+t._s(t.paperData.realName)+" ("+t._s(t.paperData.userName)+") ")]),a("el-col",{staticClass:"text-center",attrs:{span:8}},[t._v(" 考试用时："+t._s(t.paperData.userTime)+"分钟 ")]),a("el-col",{staticClass:"text-center",attrs:{span:8}},[t._v(" 考试得分："+t._s(t.paperData.userScore)+" ")])],1),a("el-card",{staticStyle:{"margin-top":"20px"}},t._l(t.paperData.quList,(function(e){return a("div",{staticClass:"qu-content"},[a("p",[t._v("题目"+t._s(e.sort+1)+".（得分："+t._s(e.actualScore)+"）")]),a("div",{staticStyle:{"margin-bottom":"20px"}},[a("Markdown",{attrs:{value:e.content,isPreview:!0}})],1),1===e.quType||3===e.quType?a("div",[a("el-radio-group",{model:{value:t.radioValues[e.id],callback:function(a){t.$set(t.radioValues,e.id,a)},expression:"radioValues[item.id]"}},t._l(e.answerList,(function(e){return a("el-radio",{attrs:{label:e.id}},[t._v(t._s(e.abc)+"."+t._s(e.content))])})),1),a("el-row",{attrs:{gutter:24}},[a("el-col",{staticStyle:{color:"#24da70"},attrs:{span:12}},[t._v(" 正确答案："+t._s(t.radioRights[e.id])+" ")]),e.answered?t._e():a("el-col",{staticStyle:{"text-align":"right",color:"#ff0000"},attrs:{span:12}},[t._v(" 答题结果：未答 ")]),e.answered&&!e.isRight?a("el-col",{staticStyle:{"text-align":"right",color:"#ff0000"},attrs:{span:12}},[t._v(" 答题结果："+t._s(t.myRadio[e.id])+" ")]):t._e(),e.answered&&e.isRight?a("el-col",{staticStyle:{"text-align":"right",color:"#24da70"},attrs:{span:12}},[t._v(" 答题结果："+t._s(t.myRadio[e.id])+" ")]):t._e()],1)],1):t._e(),4===e.quType?a("div",[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:12}},[t._v(" 我的回答："+t._s(e.answer)+" ")])],1)],1):t._e(),2===e.quType?a("div",[a("el-checkbox-group",{model:{value:t.multiValues[e.id],callback:function(a){t.$set(t.multiValues,e.id,a)},expression:"multiValues[item.id]"}},t._l(e.answerList,(function(e){return a("el-checkbox",{attrs:{label:e.id}},[t._v(t._s(e.abc)+"."+t._s(e.content))])})),1),a("el-row",{attrs:{gutter:24}},[a("el-col",{staticStyle:{color:"#24da70"},attrs:{span:12}},[t._v(" 正确答案："+t._s(t.multiRights[e.id].join(","))+" ")]),e.answered?t._e():a("el-col",{staticStyle:{"text-align":"right",color:"#ff0000"},attrs:{span:12}},[t._v(" 答题结果：未答 ")]),e.answered&&!e.isRight?a("el-col",{staticStyle:{"text-align":"right",color:"#ff0000"},attrs:{span:12}},[t._v(" 答题结果："+t._s(t.myMulti[e.id].join(","))+" ")]):t._e(),e.answered&&e.isRight?a("el-col",{staticStyle:{"text-align":"right",color:"#24da70"},attrs:{span:12}},[t._v(" 答题结果："+t._s(t.myMulti[e.id].join(","))+" ")]):t._e()],1)],1):t._e()])})),0)],1)},r=[],s=(a("ac6a"),a("3200")),n=a("8e77"),c={name:"AuctionGoodsDetail",components:{Markdown:n["a"]},data:function(){return{paperId:"",paperData:{quList:[]},radioValues:{},multiValues:{},radioRights:{},multiRights:{},myRadio:{},myMulti:{}}},created:function(){var t=this.$route.params.id;"undefined"!==typeof t&&(this.paperId=t,this.fetchData(t))},methods:{fetchData:function(t){var e=this,a={id:t};Object(s["e"])(a).then((function(t){e.paperData=t.data,e.paperData.quList.forEach((function(t){var a="",i="",r="",s=[],n=[],c=[];t.answerList.forEach((function(e){e.checked&&(1===t.quType||3===t.quType?(a=e.id,r=e.abc):(s.push(e.id),c.push(e.abc))),e.isRight&&(1===t.quType||3===t.quType?i=e.abc:n.push(e.abc))})),e.multiValues[t.id]=s,e.radioValues[t.id]=a,e.radioRights[t.id]=i,e.multiRights[t.id]=n,e.myRadio[t.id]=r,e.myMulti[t.id]=c})),console.log(e.multiValues),console.log(e.radioValues)}))}}},l=c,o=(a("c1d7"),a("2877")),u=Object(o["a"])(l,i,r,!1,null,"11619360",null);e["default"]=u.exports},c155:function(t,e,a){},c1d7:function(t,e,a){"use strict";var i=a("c155"),r=a.n(i);r.a}}]);