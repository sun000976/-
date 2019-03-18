<template>
  <div id="wrap">
    <h2>添加博客</h2>
		<form v-if="!submitTo">
    <label>博客标题</label>
     <input type="text" v-model="blog.title">
		 <label for="">博客内容</label>
		 <textarea v-model="blog.content"></textarea>
		 <div id="checkboxs">
			    <label for="">vue.js</label>
			    <input type="checkbox" value="vue.js" v-model="blog.arr">
					<label for="">React.js</label>
					<input type="checkbox" value="React.js" v-model="blog.arr">
					<label for="">node.js</label>
					<input type="checkbox" value="node.js" v-model="blog.arr">
					<label for="">Angular.js</label>
					<input type="checkbox" value="Angular.js" v-model="blog.arr">
		 </div>
		 <label for="">作者:</label>
		 <select v-model="blog.auth">
			  <option v-for="authors in author">{{authors}}</option>
		 </select>
		 <button @click.prevent="post" >添加博客</button>
		 </form>
		 <br>
		 <div v-if="submitTo">
			 <h3>你的博客已经发送成功</h3>
		 </div>
		 <div id="con">
			 <h3>博客总览</h3>
			 <p>博客标题:{{blog.title}}</p>
			 <p>博客内容:</p>
			 <p>{{blog.content}}</p>
			 <p>博客分类:</p>
			 <ul>
				 <li v-for="item in blog.arr">{{item}}</li>
			 </ul>
			 <p>作者:</p>
			 <div>{{blog.auth}}</div>
			 
		 </div>
  </div>
</template>
<script>
	// https://jsonplaceholder.typicode.com/
	// https://jsonplaceholder.typicode.com/posts
export default {
      name:"Addblog",
      data(){
        return {
          blog:{
              title:"",
							content:"",
							arr:[],
							auth:""
          },
					author:["张三","李四","孙豪杰"],
					submitTo:false
        }
      },
			methods:{
				post:function(){
					  this.$http.post("https://jsonplaceholder.typicode.com/posts",{
							title:this.blog.title,
							body:this.blog.content,
							userId:1,
						})
						.then(function(data){
							console.log(data)
							this.submitTo=true;
						})
				}
			}
}
</script>

<style scoped>
    #wrap *{
			box-sizing: border-box;
		}
		#wrap{
			width: 800px;
			margin: 20px auto;
			padding: 20px;
		}
		h2{
			text-align: center;
			margin-top: 10px;
		}
		label{
			display: block;
			font-size: 20px;
		}
		input[type="text"],select{
			height: 40px;
		}
		input[type="text"],textarea,select{
			width: 100%;
		}
		textarea{
			height: 200px;
		}
			#checkboxs{
				display: block;
				margin: 20px auto;
			}
		#checkboxs>label{
			display:inline-block;
			padding-left: 20px;
		}
		#checkboxs>input{
			display:inline-block;
			margin-left: 20px;
			padding: 10px;
		}
		button{
			margin-top: 20px;
			padding: 10px;
			background: crimson;
			color: whitesmoke;
			border: none;
			float: right;
			cursor: pointer;
			border-radius: 5px;
		}
		form:after{
			content: "";
			display: block;
			clear: both;
		}
		#con{
			border: 1px dotted #CCCCCC;
			padding: 20px;
		}
</style>
