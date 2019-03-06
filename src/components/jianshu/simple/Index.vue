<template>
  <div class="container">
    <div class='toolbar'>
      <el-button type="primary" icon="el-icon-edit" size="medium" @click='changeMode' plain>{{edit ? '确认' : '编辑内容'}}</el-button>
      <el-button type="success" icon='el-icon-success' size="medium" @click='generageScreenShot' plain>生成截图</el-button>
    </div>
    <el-dialog title="" :visible.sync="dialogVisible" @opened='showImage' width="95%" top='2vh'>
      <div id='image-container'>
      </div>
      <span slot="footer" class="dialog-footer">
        <a id="download" download="shuirong.png">
          <el-button type="primary" @click="download">下载图片</el-button>
        </a>
      </span>
    </el-dialog>
    <div id='page-container'>
      <nav id="NAV_2">
        <div id="DIV_3">
          <!-- 左上方 Logo -->
          <a href="/" id="A_4"><img :src="logo" alt="Nav logo" id="IMG_5" /></a>
          <!-- 右上角 -->

          <!-- 未登录显示登录/注册/写文章 -->
          <a href="/writer#/" id="A_6"><i id="I_7"></i>写文章</a> <a id="A_8" href="/sign_up">注册</a> <a id="A_9" href="/sign_in">登录</a>
          <!-- 如果用户登录，显示下拉菜单 -->

          <div id="DIV_10">
            <a id="A_11"><i id="I_12"></i></a>
            <div id="DIV_13">
              <div id="DIV_14">
                <i id="I_15"></i><span id="SPAN_16">夜间模式</span>
              </div>
              <div id="DIV_17">
                <a id="A_18">开</a> <a id="A_19">关</a>
              </div>
              <hr id="HR_20" />
              <div id="DIV_21">
                <a id="A_22">宋体</a> <a id="A_23">黑体</a>
              </div>
              <div id="DIV_24">
                <a id="A_25">简</a> <a id="A_26">繁</a>
              </div>
            </div>
          </div>
          <div id="DIV_27">
            <div id="DIV_28">

              <button type="button" id="BUTTON_29">
                <span id="SPAN_30"></span><span id="SPAN_31"></span><span id="SPAN_32"></span>
              </button>
            </div>
            <div id="DIV_33">
              <ul id="UL_34">
                <li id="LI_35">
                  <a href="/" id="A_36"> <span id="SPAN_37">首页</span><i id="I_38"></i></a>
                </li>
                <li id="LI_39">
                  <a id="A_40" href="/apps?utm_medium=desktop&amp;utm_source=navbar-apps"><span id="SPAN_41">下载App</span><i id="I_42"></i></a>
                </li>
                <li id="LI_43">
                  <form action="/search" method="get" id="FORM_44">
                    <input name="utf8" type="hidden" value="✓" id="INPUT_45" />
                    <input type="text" name="q" id="INPUT_46" placeholder="搜索" /> <a href="javascript:void(null)" id="A_47"><i id="I_48"></i></a>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div id="DIV_49">
        <div id="DIV_50">
          <div id="DIV_51">
            <div id="DIV_52">
            </div>
            <a href="" id="A_53"></a>
          </div>
        </div>
        <div id="DIV_57">
          <div id="DIV_58">
            <h1 id="H1_59" :contenteditable='edit' v-html='title'></h1>
            <div id="DIV_60">
              <a href="" id="A_61">
                  <el-upload v-if='edit' class="avatar-uploader-jianshu-simple" action="" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                <img v-if="avatar" :src="avatar" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
                <img v-else :src="avatar" alt="96" id="IMG_62" />
                </a>
              <div id="DIV_63">
                <span id="SPAN_64"><a href="" id="A_65" :contenteditable='edit' v-html='nickname'></a></span>
                <a id="A_66"><i id="I_67"></i><span id="SPAN_68">关注</span></a>
                <div id="DIV_69">
                  <span id="SPAN_70"><i id="I_71"></i> 1.2</span>
                  <span id="SPAN_72" :contenteditable='edit' v-html='time'></span>
                  <span id="SPAN_73">字数 {{content.length}}</span>
                  <span id="SPAN_74">阅读 <span :contenteditable='edit' v-html='views'></span></span>
                  <span id="SPAN_75">评论 <span :contenteditable='edit' v-html='comments'></span></span>
                  <span id="SPAN_76">喜欢 <span :contenteditable='edit' v-html='likes'></span></span>
                </div>
              </div>
            </div>
            <div id="DIV_77">
              <div id="DIV_78" :contenteditable='edit' v-html='content'></div>
            </div>
          </div>
          <div id="DIV_84">
            <p id="P_85">
              小礼物走一走，来简书关注我
            </p>
            <div id="DIV_86">
              赞赏支持
            </div>
            <div id="DIV_87">
              <ul id="UL_88">
              </ul>
            </div>
          </div>
          <div id="DIV_89">
            <a href="/nb/28972913" id="A_90"><i id="I_91"></i> <span id="SPAN_92">日记本</span></a>
            <div id="DIV_93">
              © 著作权归作者所有
            </div>
            <div id="DIV_94">
              <a id="A_95">举报文章</a>
            </div>
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
  name: "jianshuSimple",
  data() {
    return {
      dialogVisible: false,
      edit: true,
      nickname: "鲁迅",
      avatar: json.avatar,
      logo: json.logo,
      views: 99999,
      comments: 99999,
      likes: 99999,
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
.avatar-uploader-jianshu-simple {
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
    width: 48px;
    height: 48px;
    line-height: 48px;
    text-align: center;
  }
  .avatar {
    width: 48px;
    height: 48px;
    display: block;
  }
}

canvas {
  transform: scale(0.8);
}
</style>
<style scoped lang='scss'>
#page-container {
  width: fit-content;
  margin: auto;
}
.container {
  width: 100%;
  background: #ffffff;
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