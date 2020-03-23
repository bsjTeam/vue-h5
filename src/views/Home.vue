<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
     <van-button type="primary">el-button</van-button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>

<style lang="less" scoped>
.home {
  .ellipsis; // assets/css/mixin中定义的
}
</style>
