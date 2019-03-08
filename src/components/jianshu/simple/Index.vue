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
      edit: false,
      nickname: "FakeScreenshot",
      avatar: json.avatar,
      logo: json.logo,
      views: 99999,
      comments: 99999,
      likes: 99999,
      title: "关于本项目：虚假截图/FakeScreenshot",
      time: "99",
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
  #image-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
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