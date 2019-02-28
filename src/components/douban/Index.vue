<template>
  <div>
    <div class='toolbar'>
      <el-button type="primary" icon="el-icon-edit" size="medium" @click='route("/douban/movie")' plain>电影</el-button>
      <el-button type="success" icon='el-icon-success' size="medium" @click='route("/douban/note")' plain>笔记/文章</el-button>
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

