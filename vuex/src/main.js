// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from "vue-resource"
// import Addblog from "./components/Addblog"
// import showblogs from "./components/showblogs"
import routers from "./routers"
Vue.config.productionTip=false
Vue.use(VueResource)
Vue.use(VueRouter)
//自定义指令
Vue.directive("reinbow",{
	  bind(el,binding,vnode){
			// toString(16)将随机数转换为16进制的字符串
			el.style.color="#"+Math.random().toString(16).slice(2,8)
		}
})
Vue.directive("theme",{
	  bind(el,binding,vnode){
			// console.log(binding)
			if(binding.value=="wide"){
				el.style.maxWidth="1260px";
			}else if(binding.value=="narrow"){
				   el.style.maxWidth="760px";
			}
			if(binding.arg=="column"){
				el.style.background="#6677cc";
				el.style.padding="20px"
			}
		}
})

//自定义过滤器
Vue.filter("toUpperCase",function(val){
	  return val.toUpperCase()
})
Vue.filter("snippet",function(val){
	 return  val.slice(0,100)+"..."
})
//创建配置路由   把地址路由引进来
  const router=new VueRouter({
		routes:routers,
// 		[
// 			{path:"/show",component:showblogs},
// 			{path:"/add",component:Addblog}
// 		],
		mode:"history"
	})
	  // mode:"history"   //去掉路径后面的井号
/* eslint-disable no-new 
*/
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
	router
})
