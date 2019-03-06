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
          </div> <a href="" id="A_6">V2EX</a> <span id="SPAN_7">›</span> <a href="/go/jobs" id="A_8" :contenteditable="edit" v-html='node'></a>
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
      nickname: "鲁迅",
      avatar: json.avatar,
      clickNumber: 99999,
      title: "你听过最美的网名是什么？",
      time: "99",
      node: "酷工作",
      content:
        "我给自己建起了一座 非手造的纪念碑 人民走向那里的小径 永远不会荒芜 它将自己坚定不屈的头颅 高高扬起 高过亚历山大的石柱 不 我绝不会死去 心活在神圣的竖琴中 它将比我的骨灰活得更久 不会消亡 只要在这个月照的世界上 还有一个诗人 我的名声就会传扬 整个伟大的俄罗斯都会 听到我的传闻 各种各样的语言 都会呼唤我的姓名 无论骄傲的斯拉夫人的子孙 还是芬兰人 山野的通古斯人 卡尔梅克人 我将长时期地受到人民的尊敬 和爱戴 因为我用竖琴唤起了 人们善良的感情 因为我歌颂过自由 在我的残酷的时代 我还曾为死者呼吁同情 啊我的缪斯 你要听从上天的吩咐 既不怕受人欺侮 也不希求什么桂冠 什么诽谤什么赞扬 一概视若粪土",
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
        width: width,
        onclone: element => {
          const svgElements = element.body
            .querySelector("#page-container")
            .getElementsByTagName("svg");

          Array.from(svgElements).forEach((svgElement, index) => {
            let color = "#7a859c";
            if (index === 0 || index === 6 || index === 7) {
              color = "#0079ff ";
            }
            if (index === 14 || index === 16) {
              color = "#ffffff";
            }
            const bBox = svgElement.getBBox();
            svgElement.setAttribute("fill", color);
          });
        }
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
  background: #f5f4f5;
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