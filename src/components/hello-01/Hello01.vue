<template>
  <div class="hello">
    I'm Hello 01 {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'hello-01',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  margin: 40px 0 0;
}
</style>
