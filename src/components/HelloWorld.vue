<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>  -->
    <Header></Header>
  </div>
</template>

<script>
import Header from './Header';
export default {
  name: 'HelloWorld',
  // data () {
  //   return {
  //     msg: '第一个练习'
  //   }
  // }
  components:{
    Header,
  }
}
</script>


