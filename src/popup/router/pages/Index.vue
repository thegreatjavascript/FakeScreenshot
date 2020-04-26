<template>
  <div>
    <h1><a href="https://github.com/thegreatjavascript/FakeScreenshot" target="_blanket">FakeScreenshot/虚假截图制作工具</a></h1>
    <blockquote class="m-bottom-5">
      <p>截图 = 实锤？相信你就输了！</p>
    </blockquote>
    <p class="m-bottom">这是一个可以伪造任何网站界面截图的工具。但本工具的目的其实不是破坏，而是为了告诉（不懂编程的）普通人：<strong>不要轻易相信网上看到的“截图”！</strong></p>
    <h3>如何做到这点？</h3>
    <p class="m-bottom-5">通过此工具本身！</p>
    <blockquote class="m-bottom-20">
      <p>此工具的存在就是在告诉人们伪造网站截图“是如此简单”！因此未来你再看到网页截图时就会开始怀疑：它是真的吗？</p>
    </blockquote>
    <h3>伪造的截图可以看出来吗？</h3>
    <p>
      1. 本工具会为修改过的文字打上透明度为99.5%的水印（肉眼看不到），使用本项目提供的<span class="route" @click="routeToOptions">检测工具</span>可以检测出来的哦～<br />
      2. 本工具会为修改过的图片打上透明度为98%（尽管和上述差别不大，但仔细看的话，仍可看到）的水印。
    </p>
    <h3>如何使用？</h3>
    <p><span class="route" @click="routeToOptions(1)">>点我<</span></p>
    <footer>
      <a href="https://github.com/thegreatjavascript/FakeScreenshot" target="_blanket">
        <svg t="1587291611968" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1324" width="32" height="32">
          <path
            d="M64.6 512c0 195.6 125.4 361.9 300.1 422.9 23.5 5.9 19.9-10.8 19.9-22.2v-77.6c-135.8 15.9-141.3-74-150.5-89-18.5-31.5-61.9-39.5-49-54.5 31-15.9 62.5 4 98.9 58 26.4 39.1 77.9 32.5 104.1 26 5.7-23.5 17.9-44.5 34.7-60.9-140.7-25.2-199.4-111.1-199.4-213.3 0-49.5 16.4-95.1 48.4-131.8-20.4-60.6 1.9-112.4 4.9-120.1 58.2-5.2 118.5 41.6 123.3 45.3 33.1-8.9 70.8-13.7 112.9-13.7 42.4 0 80.3 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.4-43.9 2.9 7.7 24.7 58.3 5.5 118.1 32.5 36.8 49 82.8 49 132.4 0 102.3-59 188.3-200.2 213.2 23.5 23.3 38.1 55.5 38.1 91.1v112.7c0.8 9 0 17.9 15.1 17.9C832.7 877 960.4 709.4 960.4 512.1c0-247.5-200.6-447.9-447.9-447.9C265 64.1 64.6 264.5 64.6 512z"
            fill=""
            p-id="1325"
          ></path>
        </svg>
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    routeToOptions(isHelpMode) {
      const options = chrome.runtime.getURL(`options/options.html${isHelpMode ? '?help=1' : ''}`);

      window.open(options);
    },
  },
};
</script>

<style lang="scss">
:root {
  --main-color: #de335e;
  --text-color: #606266;
}

* {
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  padding: 10px 20px;
}
h1 {
  color: var(--main-color);
  font-size: 20px;
  padding: 0;
  text-align: center;
  padding-bottom: 0.5em;
}

blockquote {
  padding: 0 1em;
  color: var(--text-color);
  border-left: 0.25em solid var(--main-color);
}
p {
  font-size: 14px;
  line-height: 1.6;
  word-break: break-all;
}
.route {
  cursor: pointer;
}
.m-bottom {
  margin-bottom: 10px;
}
.m-bottom-5 {
  margin-bottom: 5px;
}
.m-bottom-20 {
  margin-bottom: 20px;
}

h3,
.route {
  color: var(--main-color);
}

footer {
  margin-top: 20px;
  a {
    width: fit-content;
    display: block;
    margin: auto;
  }
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
