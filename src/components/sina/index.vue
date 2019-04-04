<template>
  <div>
    <div class='tab2'>
      <el-button size="small" @click='route("/sina/simple")' plain>微博</el-button>
      <el-button size="small" @click='route("/sina/hot")' plain>热搜</el-button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "SinaIndex",
  methods: {
    route(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang='scss' scoped>
.tab2 {
  margin: auto;
  width: fit-content;
  margin-bottom: 20px;
}
</style>

