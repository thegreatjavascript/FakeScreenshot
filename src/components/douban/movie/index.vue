<template>
  <div class="container">
    <tool @change="changeMode">
      <el-button icon='el-icon-success' size="medium" @click='screenWriterVisible = true' plain>添加编剧</el-button>
      <el-button icon='el-icon-success' size="medium" @click='starVisible = true' plain>添加主演</el-button>
    </tool>
    <el-dialog title="添加编剧" :visible.sync="screenWriterVisible" width='30%'>
      <div>
        <div class='dialog-div' v-for='(item,index) in screenWriter'>
          <el-input v-model="item.name" placeholder="输入名称"></el-input>
          <el-button icon="el-icon-minus" circle @click='removeScreenWriter(index)'></el-button>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="addScreenWriter">新增编剧</el-button>
        <a id="download" download="shuirong.png">
          <el-button type="primary" @click="appendScreenWriterHTML">确定</el-button>
        </a>
      </span>
    </el-dialog>
    <el-dialog title="添加主演" :visible.sync="starVisible" width='30%'>
      <div>
        <div class='dialog-div' v-for='(item,index) in star'>
          <el-input v-model="item.name" placeholder="输入名称"></el-input>
          <el-button icon="el-icon-minus" circle @click='removeStar(index)'></el-button>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="addStar">新增主演</el-button>
        <a id="download" download="shuirong.png">
          <el-button type="primary" @click="appendStarHTML">确定</el-button>
        </a>
      </span>
    </el-dialog>
    <div id="DIV_1">
      <div id="DIV_2">
        <div id="DIV_3">
        </div>
        <h1 id="H1_4">
          <span id="SPAN_5" :contenteditable="edit" v-html='title'></span> <span id="SPAN_6">(<span :contenteditable="edit" v-html='time'></span>)</span>
        </h1>
        <div id="DIV_7">
          <div id="DIV_8">
            <div id="DIV_9">
              <div id="DIV_10">
                <div id="DIV_11">
                  <div id="DIV_12">
                    <el-upload v-if='edit' class="avatar-uploader-douban-movie" action="" :show-file-list="false" :before-upload="beforeAvatarUpload">
                      <img v-if="poster" :src="poster" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <a v-else href="" id="A_13"><img :src="poster" alt="Alita: Battle Angel" id="IMG_14" /></a>
                  </div>
                  <div id="DIV_15">
                    <span id="SPAN_16"><span id="SPAN_17">导演</span>: <span id="SPAN_18"><a href="" id="A_19" :contenteditable="edit" v-html='director'></a></span></span>
                    <br id="BR_20" />
                    <span id="SPAN_21"><span id="SPAN_22">编剧</span>: <span id="SPAN_23" :contenteditable="edit" v-html='screenwriterHTML'></span></span>
                    <br id="BR_27" />
                    <span id="SPAN_28">
                      <span id="SPAN_29">主演</span>:
                      <span id="SPAN_30">
                        <span id="SPAN_31">
                          <span id="SPAN_33" :contenteditable="edit" v-html='starHTML'>
                          </span>
                          <a href="javascript:;" title="更多主演" id="A_83">更多...</a>
                        </span>
                      </span>
                    </span>
                    <br id="BR_84" />
                    <span id="SPAN_85">类型:</span> <span :contenteditable="edit" v-html='type'></span>
                    <br id="BR_89" />
                    <span id="SPAN_90">制片国家/地区:</span> <span :contenteditable="edit" v-html='country'></span>
                    <br id="BR_91" />
                    <span id="SPAN_92">语言:</span> <span :contenteditable="edit" v-html='language'></span>
                    <br id="BR_93" />
                    <span id="SPAN_94">上映日期:</span><span :contenteditable="edit" v-html='releaseDate'></span>
                    <br id="BR_98" />
                    <span id="SPAN_99">片长:</span> <span id="SPAN_100"><span :contenteditable="edit" v-html='length'></span>分钟<span id="watermark">什么是真相？fakes.netlify.com</span></span>
                    <br id="BR_101" />
                    <span id="SPAN_102">又名:</span><span :contenteditable="edit" v-html='alias'></span>
                    <br id="BR_103" />
                    <span id="SPAN_104">IMDb链接:</span> <a href="" rel="nofollow" id="A_105" :contenteditable="edit" v-html='link'></a>
                    <br id="BR_106" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tool from "@/components/Tool";
import json from "./image.json";

export default {
  name: "DoubanMovie",
  data() {
    return {
      starVisible: false,
      edit: false,
      screenWriterVisible: false,
      poster: json.poster,
      title: "阿丽塔：战斗天使 Alita: Battle Angel",
      time: "2019",
      director: "罗伯特·罗德里格兹",
      screenWriter: [{ name: "詹姆斯·卡梅隆" }],
      screenwriterHTML: "<a href='' class='links'>詹姆斯·卡梅隆</a>",
      star: [{ name: "罗莎·萨拉查" }],
      starHTML: "<a href='' class='links'>罗莎·萨拉查</a>",
      type: "动作 / 科幻 / 冒险",
      country: "美国 / 加拿大 / 阿根廷",
      releaseDate: "2019-02-22(中国大陆) / 2019-02-05(台湾) / 2019-02-14(美国)",
      language: "英语 / 西班牙语",
      length: "122",
      alias: "铳梦 / 铳梦：战斗天使(港) / 艾莉塔：战斗天使(台)",
      link: "tt0437086",
      picture: "",
      imageUrl: ""
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
    beforeAvatarUpload(file) {
      this.getBase64(file).then(res => {
        this.poster = res;
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
    appendScreenWriterHTML() {
      this.screenwriterHTML = "";
      this.screenWriter.forEach(({ name }) => {
        this.screenwriterHTML += ` <a href="" class='links'>${name}</a> / `;
      });

      this.screenwriterHTML = this.screenwriterHTML.substring(
        0,
        this.screenwriterHTML.length - 2
      );
      this.screenWriterVisible = false;
    },
    removeScreenWriter(index) {
      this.screenWriter.splice(index, 1);
    },
    addScreenWriter() {
      this.screenWriter = this.screenWriter.concat({ name: "" });
    },
    appendStarHTML() {
      this.starHTML = "";
      this.star.forEach(({ name }) => {
        this.starHTML += ` <a href="" class='links'>${name}</a> / `;
      });

      this.starHTML = this.starHTML.substring(0, this.starHTML.length - 2);
      this.starVisible = false;
    },
    removeStar(index) {
      this.star.splice(index, 1);
    },
    addStar() {
      this.star = this.star.concat({ name: "" });
    }
  },
  components: {
    Tool
  }
};
</script>

<style scoped src='./style.css'></style>
<style lang='scss'>
.avatar-uploader-douban-movie {
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
    width: 135px;
    height: 200px;
    line-height: 200px;
    text-align: center;
  }
  .avatar {
    width: 135px;
    height: 200px;
    display: block;
  }
}
.links {
  color: rgb(51, 119, 170);
  overflow-wrap: break-word;
  text-decoration: none solid rgb(51, 119, 170);
  word-break: break-all;
  column-rule-color: rgb(51, 119, 170);
  perspective-origin: 0px 0px;
  transform-origin: 0px 0px;
  caret-color: rgb(51, 119, 170);
  border: 0px none rgb(51, 119, 170);
  font: normal normal 400 normal 13px / 21.06px Helvetica, Arial, sans-serif;
  outline: rgb(51, 119, 170) none 0px;
}
.dialog-footer {
  display: flex;
  justify-content: space-between;
}
.dialog-footer.download {
  display: block;
}
</style>
<style scoped lang='scss'>
.container {
  width: fit-content;
  margin: auto;
  padding: 20px 0;
}
#watermark {
  transform: rotate(180deg);
  margin-left: 10px;
  position: absolute;
}
.dialog-div {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  .el-input {
    width: 200px;
    margin-right: 50px;
  }
}
</style>