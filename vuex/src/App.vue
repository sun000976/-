<template>
  <div id="app">
     <!-- <Addblog></Addblog> -->
		<!-- <showblogs></showblogs> -->
		 <Blogheader></Blogheader>
		 <router-view></router-view>
  </div>
</template>
<script>
import Addblog from "./components/Addblog"
import showblogs from "./components/showblogs"
import Blogheader from "./components/Blogheader"
export default {
     name:"app",
     components:{
       Addblog,
			 showblogs,
			 Blogheader
     }
}
</script>
<style>
</style>
