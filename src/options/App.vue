<template>
  <div class="container">
    <div class="head">
      <div>
        <span :class="{ active: !isHelpMode }" @click="isHelpMode = false">检测页</span>
        <span :class="{ active: isHelpMode }" @click="isHelpMode = true">使用指南</span>
      </div>
    </div>
    <div class="check" v-if="!isHelpMode">
      <header>
        <h1>FakeScreenshot：检查截图是否由本工具生成</h1>
        <div class="upload">
          <input type="file" ref="files" @change="inputChange" />
          <svg class="upload icon" t="1586262308780" viewBox="0 0 1570 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2120" width="128" height="128">
            <path
              d="M1283.072 430.933333c0-4.266667 0.7168-8.533333 0.7168-12.8C1283.7888 187.050667 1102.2336 0 878.2848 0c-161.553067 0-300.373333 97.416533-365.568 238.250667a205.243733 205.243733 0 0 0-93.866667-23.1424c-103.424 0-189.6448 77.858133-206.097066 179.541333C88.6784 438.0672 0 558.626133 0 700.450133 0 878.933333 140.526933 1024 313.685333 1024h359.2192v-284.433067h-168.925866L785.066667 441.924267l281.088 297.301333h-168.96v284.433067h386.594133c158.4128 0 286.344533-133.358933 286.344533-296.5504 0-163.191467-128.6144-295.8336-287.061333-296.174934z"
              p-id="2121"
              fill="#00a7ea"
            ></path>
          </svg>
        </div>
        <h3 class="top-50"><span>1. </span>检测结果意味着什么？</h3>
        <p>
          如果你有看到<strong>Made By Fakescreenshot</strong>水印或部分水印，说明该截图有90%的可能性由本工具生成。<span
            >剩余10%呢？有被人故意用PS或者Web技术伪造一个相同的水印的可能。</span
          >
        </p>
        <h3><span>2. </span>如果没有看到<strong>Made By Fakescreenshot</strong>水印，是不是说明截图不是伪造的？</h3>
        <p><span class="big">大错特错！</span>上述水印只是本工具独有。其他人完全可以通过修改网页源码来自行伪造截图，或利用PS等技术实现伪造效果，却没有水印。</p>
        <h3 class="bottom-30"><span>3. </span>本工具会为图片打上肉眼可见的水印，因此无需使用此检测工具测试。</h3>
      </header>
      <section>
        <img class="preview" src="" alt="preview" />
        <div class="cover"></div>
      </section>
    </div>
    <div class="help" v-else>
      <h1>FakeScreenshot：使用教程</h1>
      <div class="content">
        <div class="card">
          <h3>修改文字（原地）</h3>
          <video controls width="250" autoplay="true" loop="true">
            <source src="基础.webm" type="video/webm" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
        <div class="card">
          <h3>修改文字（弹框）</h3>
          <video controls width="250" autoplay="true" loop="true">
            <source src="弹框.webm" type="video/webm" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
        <div class="card">
          <h3>修改图片</h3>
          <video controls width="250" autoplay="true" loop="true">
            <source src="图片.webm" type="video/webm" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </div>
      <div class="last">
        <h3>图片真实性检测</h3>
        <video controls width="250" autoplay="true" loop="true">
          <source src="检测.webm" type="video/webm" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      s: document.querySelector.bind(document),
      isHelpMode: /help=1/.test(location.search),
    };
  },
  methods: {
    inputChange(e) {
      const files = e.target.files[0];
      const reader = new FileReader();
      reader.onload = ee => {
        const base64 = ee.target.result;
        const img = this.s('.preview');
        img.setAttribute('src', base64);
        img.style.display = 'block';
      };
      reader.readAsDataURL(files);
    },
    routeTo(isHelp) {},
  },
};
</script>

<style lang="scss">
:root {
  --main-color: #de335e;
  --text-color: #606266;
}
*,
body,
h3 {
  margin: 0;
  padding: 0;
}
.container {
  font-family: cursive;
  font-size: 14px;
  line-height: 1;
  .head {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: flex-end;
    font-size: 18px;
    div {
      width: 60%;
      margin: auto;
      height: 100%;
      display: flex;
      align-items: center;
    }
    span {
      margin: 0 20px;
      display: inline-block;
      position: relative;
      cursor: pointer;
    }
    span.active {
      color: var(--main-color);
    }
    span.active::after {
      position: absolute;
      bottom: -24px;
      right: 0;
      height: 4px;
      width: 100%;
      background: var(--main-color);
      content: '';
    }
  }
  .head::after {
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.07);
    display: block;
    position: absolute;
    top: 60px;
    color: rgba(0, 0, 0, 0.07);
    content: '';
    width: 100%;
    height: 2px;
  }
  .help {
    margin: 5vh auto;
    width: 90vw;
    h3 {
      color: var(--main-color);
      text-align: center;
      margin-bottom: 10px;
    }
    .content {
      display: flex;
      justify-content: space-between;
      .card video {
        width: 29vw;
      }
    }
    .last {
      margin: auto;
      width: 50vw;
      video {
        width: 100%;
      }
    }
  }
  h1 {
    color: var(--main-color);
    font-weight: bold;
    font-size: 35px;
    text-align: center;
    margin-bottom: 50px;
  }
  header {
    margin: 5vh auto;
    width: 60%;

    h3 {
      font-weight: bold;
      font-size: 25px;
      font-size: 19px;
      margin-top: 10px;
      span {
        font-size: 20px;
        margin-right: 3px;
        display: inline-block;
      }
    }
    .top-50 {
      margin-top: 50px;
    }
    strong {
      display: inline-block;
      margin: 0 2px;
      color: var(--main-color);
    }
    p {
      margin: 5px auto;
    }
    p.bottom-30 {
      margin-bottom: 30px;
    }
    .big {
      display: inline-block;
      margin-top: 10px;
      font-size: 30px;
      color: var(--main-color);
    }
    .upload {
      width: 70px;
      height: 70px;
      position: relative;
      box-shadow: 0 0 5px #eee;
      box-sizing: border-box;
      padding: 10px;
      margin: auto;
      svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 70px;
        height: 70px;
        box-sizing: border-box;
      }
      input {
        width: 70px;
        height: 70px;
        opacity: 0;
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
  section {
    width: 100%;
    position: relative;
    background: black;
    mix-blend-mode: color-burn;
    .preview {
      width: 100%;
      display: none;
    }
    .cover {
      position: absolute;
      left: 0;
      top: 0;
      background: black;
      width: 100%;
      height: 100%;
      mix-blend-mode: color-burn;
    }
  }
}
</style>
