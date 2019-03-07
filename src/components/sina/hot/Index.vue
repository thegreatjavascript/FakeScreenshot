<template>
  <div class="container">
    <div class='toolbar'>
      <el-button type="primary" icon="el-icon-edit" size="medium" @click='changeMode' plain>{{edit ? '确认' : '编辑内容'}}</el-button>
      <el-button type="success" icon='el-icon-success' size="medium" @click='generageScreenShot' plain>生成截图</el-button>
    </div>
    <el-dialog title="" :visible.sync="dialogVisible" @opened='showImage' width='40%'>
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
          </div>
          <div id="DIV_4">
            <ul id="UL_5">
              <li id="LI_6">
                <a href="javascript:;" id="A_7">查看完整热搜榜»</a>
                <span class="watermark">什么是真相？fakes.netlify.com</span>
              </li>
              <ul id="UL_8">
                <li id="LI_9">
                  <a href="javascript:;" id="A_10"><i id="I_11">1</i><span :contenteditable="edit" v-html='search_0'></span><i id="I_12">新</i></a>
                </li>
                <li id="LI_13">
                  <a href="javascript:;" id="A_14"><i id="I_15">2</i><span :contenteditable="edit" v-html='search_1'></span><i id="I_16">新</i></a>
                </li>
                <li id="LI_17">
                  <a href="javascript:;" id="A_18"><i id="I_19">3</i><span :contenteditable="edit" v-html='search_2'></span></a>
                </li>
                <li id="LI_20">
                  <a href="javascript:;" id="A_21"><i id="I_22">4</i><span :contenteditable="edit" v-html='search_3'></span><i id="I_23">新</i></a>
                </li>
                <li id="LI_24">
                  <a href="javascript:;" id="A_25"><i id="I_26">5</i><span :contenteditable="edit" v-html='search_4'></span></a>
                </li>
                <li id="LI_27">
                  <a href="javascript:;" id="A_28"><i id="I_29">6</i><span :contenteditable="edit" v-html='search_5'></span><i id="I_30">沸</i></a>
                </li>
                <li id="LI_31">
                  <a href="javascript:;" id="A_32"><i id="I_33">7</i><span :contenteditable="edit" v-html='search_6'></span><i id="I_34">新</i></a>
                </li>
                <li id="LI_35">
                  <a href="javascript:;" id="A_36"><i id="I_37">8</i><span :contenteditable="edit" v-html='search_7'></span><i id="I_38">新</i></a>
                </li>
                <li id="LI_39">
                  <a href="javascript:;" id="A_40"><i id="I_41">9</i><span :contenteditable="edit" v-html='search_8'></span><i id="I_42">沸</i></a>
                </li>
                <li id="LI_43">
                  <a href="javascript:;" id="A_44"><i id="I_45">10</i><span :contenteditable="edit" v-html='search_9'></span><i id="I_46">沸</i></a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";

export default {
  name: "hotSimple",
  data() {
    return {
      dialogVisible: false,
      edit: false,
      search_0: "三体舰队即将抵达太阳系 怎么办？",
      search_1: "智子（三体人驻地球的大使）大杀特杀无辜群众",
      search_2: "艾伊尔人正在集结 攻击白塔",
      search_3: "技术内核的藏身之处",
      search_4: "伯劳鸟是什么东西",
      search_5: "爱是宇宙第五种基本力",
      search_6: "首席执行官 梅伊娜·悦石痛斥技术内核",
      search_7: "失落之城“煞达罗苟斯”惊现魔物",
      search_8: "哈里·谢顿谈心理史学",
      search_9: "论第二基地的危险性",
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
<style scoped lang='scss'>
.container {
  width: 100%;
  margin: auto;
  padding: 20px 0;
  #image-container {
    width: fit-content;
    margin: auto;
  }
  #page-container {
    width: fit-content;
    margin: auto;
    .watermark {
      transform: rotate(180deg);
      margin-right: 12px;
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
}
</style>