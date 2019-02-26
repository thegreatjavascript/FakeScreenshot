<template>
  <div id="app">
    <el-card class='tab-bar'>
      <el-button size="medium" @click='route("/")' plain>微博</el-button>
      <el-button size="medium" @click='route("zhihu")' plain>知乎</el-button>
    </el-card>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    route(name) {
      this.$router.push(name);
    }
  }
};
</script>

<style lang='scss' scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: auto;
  margin-top: 80px;
  .tab-bar {
    display: flex;
    justify-content: center;
    width: fit-content;
    margin: auto;
    padding: 0 100px;
    margin-bottom: 50px;
  }
}
</style>
