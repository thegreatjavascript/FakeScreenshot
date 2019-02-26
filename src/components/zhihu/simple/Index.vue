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
    <div></div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import json from "./avatar.json";

export default {
  name: "SinaSimple",
  data() {
    return {
      dialogVisible: false,
      edit: false,
      nickname: "林水溶",
      avatar: json && json.avatar,
      reblogNumber: 99999,
      commentNumber: 99999,
      starNumber: 99999,
      from: "iPhone客户端",
      time: "2020-12-12 12:12",
      content:
        "忙里偷闲:-D 花了二十块找学姐做的指甲 双十二买的等了很多天的性价比超高的保温杯 元旦要出去玩所以元旦之前要完成的一堆作业 哎 我今天还要熬夜缝手工作业 明天去给全班买圣诞晚会要吃的零食 总之最近很充实啦 也很开心 没时间难过没时间丧 这样真好 想一直这样",
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
      html2canvas(document.querySelector("#DIV_1"), { allowTaint: true }).then(
        canvas => {
          this.dialogVisible = true;
          this.canvas = canvas;
        }
      );
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
<style>
.avatar-uploader .el-upload {
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
  > button {
    margin-right: 50px;
  }
}
#image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>