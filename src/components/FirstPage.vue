<template>
  <div class="hello">
    <h1>{{ msg }}</h1> 
    
  </div>
</template>

<script>
import Header from './Header';
export default {
  name: 'FirstPage',
  data () {
    return {
      msg: '第一个练习'
    }
  }
}
</script>