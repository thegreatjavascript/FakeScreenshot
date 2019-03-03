<template>
  <div id="app">
    <el-card class='tab-bar'>
      <el-button size="medium" @click='route("/")' plain>微博</el-button>
      <el-button size="medium" @click='route("/zhihu")' plain>知乎</el-button>
      <el-button size="medium" @click='route("/douban")' plain>豆瓣</el-button>
    </el-card>
    <router-view />
    <iframe src="https://ghbtns.com/github-btn.html?user=thegreatjavascript&repo=FakeScreenshot&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
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
  margin-top: 80px;
  display: flex;
  align-items: center;
  flex-direction: column;
  > .tab-bar {
    display: flex;
    justify-content: center;
    width: fit-content;
    margin: auto;
    padding: 0 100px;
    margin-bottom: 50px;
  }
  iframe {
    margin: 20px 0;
  }
}
</style>
