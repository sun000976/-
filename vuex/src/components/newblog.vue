<template>
	<div id="new-blog">
		<h1>{{blog.title}}</h1>
		<article>{{blog.body}}</article>
	</div>
</template>

<script>
	export default{
		name:"new-blog",
		data(){
			return {
				id:this.$route.params.id,
				blog:{}
			}
		},
		created(){
			// 本地的无法访问static/post.json/
			this.$http.get("https://jsonplaceholder.typicode.com/posts/"+this.id)
			.then(function(data){
				this.blog=data.body
			})
		}
	}
</script>

<style>
	#new-blog{
		max-width: 760px;
		margin: 0 auto;
		padding: 20px;
		background: #eee;
		border: 1px dotted #AAC3F1;
	}
</style>
