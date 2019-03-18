<template>
	<div v-theme:column="'narrow'" id="show-blogs">
		<h1>博客总览</h1>
		<input type="text" v-model="search" placeholder="搜索">
		<div class="sing-blog" v-for="blog in filterBlogs">
			<router-link :to="'/blog/'+blog.id"><h2 v-reinbow>{{blog.title | toUpperCase}}</h2>
			</router-link>
			<article>{{blog.body | snippet}}</article>
		</div>
	</div>
</template>
<script>
	export default{
		name:"show-blogs",
		data(){
			return {
				blogs:[],
				search:""
			}
		},
		created(){
			this.$http.get("static/post.json")
		     .then(function(data){
				 // console.log(data)
				this.blogs=data.body.slice(0,10)
				// console.log(this.blogs)
			 })
		},
         computed:{
			 filterBlogs:function(){
				 return this.blogs.filter((blog)=>{
					 return blog.title.match(this.search)
				 })
			 },
			 
		 }		
	}
</script>

<style>
	#show-blogs{
		margin: 0 auto;
		max-width: 800px;
	}
	h1{
		text-align: center;
	}
	.sing-blog{
		padding: 20px;
		margin: 20px 0;
		box-sizing: border-box;
		background: #CCCCCC;
	}
	input{
		width: 100%;
		height: 20px;
	}
</style>
