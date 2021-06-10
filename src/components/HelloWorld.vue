<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button @click="getUserInfo" type="primary">
      查询
    </el-button>
    <el-table
    :data="userList">
      <el-table-column prop="id"></el-table-column>
      <el-table-column prop="name"></el-table-column>
      <el-table-column prop="age"></el-table-column>
      <el-table-column prop="updateDate"></el-table-column>
    </el-table>

  </div>
</template>

<script>
import {getUserInfo} from '../api/userInfo'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to TestApp',
      userList: []
    }
  },
  methods:{
    getUserInfo(){
      getUserInfo({}).then(data =>{
        this.userList = data;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
