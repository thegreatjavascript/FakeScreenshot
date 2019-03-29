<template>
  <div>
    <div class='toolbar'>
      <el-button size="small" @click='route("/douban/movie")' plain>电影</el-button>
      <el-button size="small" @click='route("/douban/note")' plain>笔记/文章</el-button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "DoubanIndex",
  methods: {
    route(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang='scss' scoped>
.toolbar {
  margin: auto;
  width: fit-content;
  margin-bottom: 20px;
}
</style>

