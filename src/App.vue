<template>
  <div id="app">
    <a href="https://github.com/thegreatjavascript/FakeScreenshot">
      <img style="position: absolute; top: 0; right: 0; border: 0;" src="./assets/fork.png">
    </a>
    <el-dialog title="关于本项目" :visible.sync="dialogVisible" width="40%">
      <info></info>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-card class='tab-bar'>
      <el-button size="medium" @click='route("/")' plain>微博</el-button>
      <el-button size="medium" @click='route("/zhihu")' plain>知乎</el-button>
      <el-button size="medium" @click='route("/douban")' plain>豆瓣</el-button>
      <el-button size="medium" @click='route("/v2ex")' plain>V2EX</el-button>
      <el-button size="medium" @click='route("/jianshu")' plain>简书</el-button>
      <el-button size="medium" @click='route("/acfun")' plain>Acfun</el-button>
    </el-card>
    <router-view />
    <iframe src="https://ghbtns.com/github-btn.html?user=thegreatjavascript&repo=FakeScreenshot&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
  </div>
</template>

<script>
import Info from "./components/Info";

export default {
  name: "App",
  data() {
    return {
      dialogVisible: true
    };
  },
  methods: {
    route(name) {
      this.$router.push(name);
    },
    isPC() {
      //是否为PC端
      var userAgentInfo = navigator.userAgent;
      var Agents = [
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPad",
        "iPod"
      ];
      var flag = true;
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
        }
      }
      return flag;
    }
  },
  components: {
    Info
  },
  created() {
    if (!this.isPC()) {
      window.alert("为了最佳体验，请在电脑端使用本网站！");
      this.dialogVisible = false;
    } else {
      this.dialogVisible = true;
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

<style>
#_hj-f5b2a1eb-9b07_feedback_minimized
  > div._hj-f5b2a1eb-9b07_feedback_minimized_label
  > div._hj-f5b2a1eb-9b07_feedback_minimized_label_text {
  transform: none !important;
}
</style>
