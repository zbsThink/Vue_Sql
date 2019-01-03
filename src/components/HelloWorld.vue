<template>
  <div>
    用户：<input type="text" v-model="username">
    密码：<input type="password" v-model="password">
    <button @click="addReader">增加</button>
    <button @click="searchReader">查询登陆</button>
    <button @click="cancelReader">删除</button>
    <button @click="updateReader">修改</button>

  </div>
</template>
<script>
export default {
  name:'test',
  data(){
    return {
      username:'',
      password:''
    }
  },
methods:{
  //这是做的插入操作
   addReader:function(){
      this.$http.post('/api/reader/addReader',{
        name:this.username,
        password:this.password
      })
      .then(res=>{
     if(res.ok){
       console.log('插入成功')
        this.username = ''
        this.password = ''
     }else{
       console.log('插入失败')
       this.username = ''
       this.password = ''
     }
    })
    .catch(error=>{
      console.log(error)
    })
   },
  //这是做的查询操作(用户登陆验证)
  searchReader:function(){
    this.$http.post('/api/reader/searchReader',{
      name:this.username,
      password:this.password
    })
    .then(res=>{
      // let name = res.data[0].name
      // let password = res.data[0].password
      if(this.username == ''||this.password == ''){
        console.log('用户或者密码不能为空')
      }
      else if(!res.data.length){
        console.log('密码或者用户名错误')
      }else{
        console.log('登陆成功')
      }
      
    })
  },
  //这是做的删除操作
  cancelReader:function(){
     this.$http.post('/api/reader/cancelReader',{
        name:this.username
      })
      .then(res=>{
       if(res.ok){
       console.log('删除成功')
       this.username = ''
       }else{
       console.log('删除失败')
     }
    })
    .catch(error=>{
      console.log(error)
    })  
  },
  //这是做的修改操作
  updateReader:function(){
     this.$http.post('/api/reader/updateReader',{
        password:this.password,
        name:this.username
      })
      .then(res=>{
       if(res.ok){
       console.log('修改成功')
       this.password = ''
       }else{
       console.log('修改失败')
     }
    })
    .catch(error=>{
      console.log(error)
    })  
  }
}
}
</script>
<style scoped>

</style>



