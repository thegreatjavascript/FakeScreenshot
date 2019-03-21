<template>
  <div class="container">
    <div class='toolbar'>
      <el-button type="primary" icon="el-icon-edit" size="medium" @click='changeMode' plain>{{edit ? '确认' : '编辑内容'}}</el-button>
      <el-button type="success" icon='el-icon-success' size="medium" @click='generageScreenShot' plain>生成截图</el-button>
    </div>
    <el-dialog title="" :visible.sync="dialogVisible" @opened='showImage'>
      <div id='image-container'>
      </div>
      <span slot="footer" class="dialog-footer">
        <a id="download" download="shuirong.png">
          <el-button type="primary" @click="download">下载图片</el-button>
        </a>
      </span>
    </el-dialog>
    <div id='page-container'>
      <div id="DIV_1">
        <div id="DIV_2">
          <div id="DIV_3">
            <a href="javascript:void;" id="A_4">
              <el-upload v-if='edit' class="avatar-uploader-v2ex-simple" action="" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                <img v-if="avatar" :src="avatar" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
              <img v-else :src="avatar" id="IMG_5" alt='' />
            </a>
          </div> <a href="" id="A_6">V2EX</a> <span id="SPAN_7">›</span> <a href="" id="A_8" :contenteditable="edit" v-html='node'></a>
          <div id="DIV_9">
          </div>
          <h1 id="H1_10" :contenteditable="edit" v-html='title'></h1>
          <div id="DIV_11">
            <a href="javascript:" id="A_12">
              <li id="LI_13">
              </li>
            </a>
            <a href="javascript:" id="A_14">
              <li id="LI_15">
              </li>
            </a>
          </div> <small id="SMALL_16"><a href="" id="A_17" :contenteditable="edit" v-html='nickname'></a> · <span :contenteditable="edit" v-html='time'></span> 分钟前 · <span :contenteditable="edit" v-html='clickNumber'></span> 次点击 &nbsp;&nbsp;<span class="watermark">什么是真相？fakes.netlify.com</span></small>
        </div>
        <div id="DIV_18">
          <div id="DIV_19">
            <div id="DIV_20" :contenteditable="edit" v-html='content'>
            </div>
          </div>
        </div>
        <div id="DIV_25">
          <div id="DIV_26">
            <span :contenteditable="edit" v-html='clickNumber'></span> 次点击
          </div>
          <a href="" id="A_27">加入收藏</a> <a href="#;" id="A_28">Tweet</a> <a href="#;" id="A_29">Weibo</a> <a href="#;" id="A_30">忽略主题</a><a href="#;" id="A_30" class='watermark' style='left: 420px;width:auto;'>什么是真相？fakes.netlify.com</a>
          <div id="DIV_31">
            <a href="#;" id="A_32">感谢</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import json from "./image.json";

export default {
  name: "V2exSimple",
  data() {
    return {
      dialogVisible: false,
      edit: false,
      nickname: "FakeScreenshot",
      avatar: json.avatar,
      clickNumber: 99999,
      title: "关于本项目：虚假截图/FakeScreenshot",
      time: "99",
      node: "程序员",
      content: `
      「1」
      之前玩知乎的时候，凑过不少“热闹”。我发现了一个现象：如果某答主在发表对某事的看法时，附带了截图的话，那么往往就能吸引不少“赞同”。因为人们下意识地认为“既然都有截图，那么情况十有八九就是这样吧”。
      好（wu）玩（yu）的是，有两次我还专门撰写了答案，用我伪造的一些荒唐的截图（让人一看就觉得是假的）来提醒其他用户：不要轻易相信高赞答主提供的“所谓截图证据”。
      但是...
      我的回答迅速淹没在洪流中，沉了...
      那时，我的心情是复杂的...

      「2」
      我基本每天都会上网，也有每天在不同渠道看新闻的习惯。当我看到一些明显真实性存疑的东西被广泛传播时，我就很烦，想骂人，想质问他们转发前为什么不先自己去证实下真伪？但理智上说，我也非常清楚：“现实就是这样。因为现在人们每天接受的信息太多，且求证的难度也太高，所以就极少会有人去求证”。这个事实很让人沮丧。所以寒假在家时我就在想：关于这个，作为程序员的我，能做些什么？
      
      「3」
      我最先想到的其实并不是「FakeScreenshot」项目，而是：运营一个专门替别人“求证”某事真实性的微博账户。当然，也不是所有的事情我都可以“搞定”，毕竟我只是一个没有什么社会能量的普通程序员，但仍旧有一些事情我可以求证出来。不过因为近期时间已经被其他事情占用了，因此这个想法一直没有实施。后面我才想到何不做一个“截图造假”的网站，这样任何知道此网站存在的人，心里都会明白：“哦，原来各大网站截图都是可以轻易伪造的啊”。这样当他再次看到其他截图的时候，会想起来此网站的存在，然后就会下意识地怀疑截图的真实性了。
      这也就是本项目存在的意义了！
      `,
      canvas: ""
    };
  },
  methods: {
    changeMode() {
      this.edit = !this.edit;
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    },
    generageScreenShot() {
      let screenShot = document.querySelector("#page-container");
      let width = screenShot.offsetWidth;
      let height = screenShot.offsetHeight;
      html2canvas(document.querySelector("#page-container"), {
        allowTaint: true,
        height: height,
        width: width
      }).then(canvas => {
        this.dialogVisible = true;
        this.canvas = canvas;
      });
    },
    showImage() {
      const dom = document.querySelector("#image-container");
      if (dom.childNodes.length) {
        dom.removeChild(dom.childNodes[0]);
      }
      dom.appendChild(this.canvas);
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      this.getBase64(file).then(res => {
        this.avatar = res;
      });
      return true;
    },
    download() {
      let download = document.getElementById("download");
      let image = document
        .querySelector("canvas")
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      download.setAttribute("href", image);
    }
  }
};
</script>

<style scoped src='./Index.css'></style>
<style lang='scss'>
.avatar-uploader-v2ex-simple {
  .el-upload {
    border: 1px dashed #d9d9d9;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .el-upload:hover {
    border-color: #409eff;
  }
  .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 72px;
    height: 72px;
    line-height: 72px;
    text-align: center;
  }
  .avatar {
    width: 72px;
    height: 72px;
    display: block;
  }
}
</style>
<style scoped lang='scss'>
#page-container {
  width: fit-content;
  margin: auto;
}
.container {
  width: 100%;
  margin: auto;
  padding: 20px 0;
}
.toolbar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  > button {
    margin: 0;
    margin-right: 50px;
  }
}
.watermark {
  transform: rotate(180deg);
  position: absolute;
}
</style>