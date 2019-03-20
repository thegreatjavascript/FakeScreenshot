<template>
  <div class="container">
    <div class='toolbar'>
      <el-button type="primary" icon="el-icon-edit" size="medium" @click='changeMode' plain>{{edit ? '确认' : '编辑内容'}}</el-button>
      <el-button type="success" icon='el-icon-success' size="medium" @click='generageScreenShot' plain>生成截图</el-button>
      <el-upload :show-file-list="false" action="" :on-success="handlePicSuccess" :before-upload="beforePicUpload">
        <el-button type="warning" icon='el-icon-success' size="medium" plain>添加图片</el-button>
      </el-upload>
      <el-button type="info" icon='el-icon-info' size="medium" @click='random' plain>随机一下</el-button>
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
    <el-dialog title="" :visible.sync="isMentioned">
      <div>
        <el-input autofocus title="@someon" placeholder="输入用户名" v-model="mentionPerson" @keyup.enter.native="getMention">
          <template slot="prepend">@</template>
        </el-input>
        <el-button @click="getMention" style="margin-left:40%;margin-top:20px">确定</el-button>
      </div>
    </el-dialog>
    <div id="DIV_1">
      <div id="DIV_2">
        <div id="DIV_3">
          <div id="DIV_4">
            <a href="javascript:void(0);" id="A_5"><i id="I_6">c</i></a>
            <div id="DIV_7">
              <ul id="UL_8">
                <li id="LI_9">
                  <a href="javascript:void(0)" title="帮上头条" id="A_10">帮上头条</a>
                </li>
                <li id="LI_11">
                  <span id="SPAN_12"> <a href="javascript:void(0);" id="A_13">投诉</a></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="DIV_14">
          <div id="DIV_15">
            <el-upload v-if='edit' class="avatar-uploader-sina-simple" action="" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
              <img v-if="avatar" :src="avatar" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <a v-else id="A_16"><img :src='avatar' width="50" height="50" id="IMG_17" /></a>
          </div>
        </div>
        <div id="DIV_18">
          <div id="DIV_19">
            <a href="" id="A_20" v-html='nickname' :contenteditable="edit"></a> <a title="微博会员" href="http://vip.weibo.com/personal?from=main" id="A_21"><em id="EM_22"></em></a>
          </div>
          <div id="DIV_23">
            <a name="4316491173741841" href="/6423850204/H6V0FfHqh?from=page_1005056423850204_profile&amp;wvr=6&amp;mod=weibotime" :contenteditable="edit" v-html='time' id="A_24"></a>&nbsp;来自&nbsp;<a href="http://vip.weibo.com/prividesc?priv=1006&amp;from=feed" id="A_25" :contenteditable="edit" v-html='from'></a>
            <div id="watermark">什么是真相？fakes.netlify.com</div>
          </div>
          <div id="DIV_26">
          </div>
          <div id="DIV_27" v-html='content' :contenteditable="edit" @input="changeContent">
          </div>

        </div>
        <div id="DIV_35">
          <div id="DIV_36">
          </div>
        </div>
      </div>
      <div id="DIV_37">
        <div id="DIV_38">
          <ul id="UL_39">
            <li id="LI_40">
              <span id="A_41"><span id="SPAN_42"><span id="SPAN_43"><span id="SPAN_44"><em id="EM_45">û</em><em id="EM_46">收藏</em></span></span></span></span>
            </li>
            <li id="LI_47">
              <span id="A_48"><span id="SPAN_49"><span id="SPAN_50"><span id="SPAN_51"><em id="EM_52"></em><em id="EM_53" :contenteditable="edit" v-html='reblogNumber'></em></span></span></span></span> <span id="SPAN_54"><span id="SPAN_55"><i id="I_56"></i><em id="EM_57"></em></span></span>
            </li>
            <li id="LI_58">
              <span id="A_59"><span id="SPAN_60"><span id="SPAN_61"><span id="SPAN_62"><em id="EM_63"></em><em id="EM_64" :contenteditable="edit" v-html='commentNumber'></em></span></span></span></span> <span id="SPAN_65"><span id="SPAN_66"><i id="I_67"></i><em id="EM_68"></em></span></span>
            </li>
            <li id="LI_69">
              <!--cuslike用于前端判断是否显示个性赞，1:显示-->
              <span title="赞" id="A_70"><span id="SPAN_71"><span id="SPAN_72"> <span id="SPAN_73"><em id="EM_74">ñ</em><em id="EM_75" :contenteditable="edit" v-html='starNumber'></em></span></span></span></span> <span id="SPAN_76"><span id="SPAN_77"><i id="I_78"></i><em id="EM_79"></em></span></span>
            </li>
          </ul>
        </div>
      </div>
      <div id="DIV_80">
      </div>
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import json from "./image.json";
import { list } from "./data.json";

export default {
  name: "SinaSimple",
  data() {
    return {
      dialogVisible: false,
      edit: false,
      nickname: "鲁迅",
      avatar: json.avatar,
      reblogNumber: 99999,
      commentNumber: 99999,
      starNumber: 99999,
      from: "iPhone客户端",
      time: "1912-11-06 14:31",
      content: "我即使是死了，钉在棺材里了，也要在墓里，用这腐朽的声带喊出：“我没说过这句话”",
      canvas: "",
      mentionPerson: "",
      isMentioned: false,
      picture: "",
      imageUrl: ""
    };
  },
  methods: {
    random() {
      const result = list[Math.floor(Math.random() * list.length)];
      this.nickname = result.nickname;
      this.content = result.content;
    },
    getMention() {
      document.querySelector("#DIV_27").innerHTML = document
        .querySelector("#DIV_27")
        .innerHTML.slice(
          0,
          document.querySelector("#DIV_27").innerHTML.length - 1
        );
      document.querySelector("#DIV_27").innerHTML =
        document.querySelector("#DIV_27").innerHTML +
        `<span style="color:#eb7350">@${this.mentionPerson}</span>&nbsp;`;
      this.mentionPerson = "";
      this.isMentioned = false;
    },
    changeContent(e) {
      //不能直接绑定到content,否则会导致光标位置错误！
      //也无法使用v-model绑定
      let contentText = e.target.innerHTML;
      if (contentText.slice("")[contentText.length - 1] === "@") {
        this.isMentioned = true;
      }
    },
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
      let screenShot = document.querySelector("#DIV_1");
      let width = screenShot.offsetWidth;
      let height = screenShot.offsetHeight;
      html2canvas(screenShot, {
        allowTaint: true,
        useCORS: true,
        height: height,
        width: width
      }).then(canvas => {
        this.canvas = canvas;
        this.dialogVisible = true;
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
    handlePicSuccess(res, file) {
      this.picture = URL.createObjectURL(file.raw);
    },
    beforePicUpload(file) {
      this.getBase64(file).then(res => {
        this.picture = res;
        let image = new Image(167);
        image.src = this.picture;
        document.getElementById("DIV_27").appendChild(image);
        image.style = "display:block";
      });
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
.avatar-uploader-sina-simple {
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 45px;
    height: 45px;
    line-height: 45px;
    text-align: center;
  }
  .avatar {
    width: 45px;
    height: 45px;
    display: block;
  }
}
</style>
<style scoped lang='scss'>
.container {
  width: fit-content;
  margin: auto;
  padding: 20px 0;
}
.toolbar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  justify-content: space-around;
}
#image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
#watermark {
  transform: rotate(180deg);
}
</style>