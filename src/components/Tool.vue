<template>
  <div>
    <div class='toolbar'>
      <el-button type="primary" icon="el-icon-edit" size="medium" @click='changeMode' plain>{{edit ? '确认' : '编辑内容'}}</el-button>
      <el-button type="success" icon='el-icon-success' size="medium" @click='generageScreenShot' plain>生成截图</el-button>
      <slot></slot>
    </div>
    <el-dialog title="" width="95%" top='2vh' :visible.sync="dialogVisible" @opened='showImage'>
      <div id='image-container'>
        <img ref="image" :src="image">
      </div>
      <span slot="footer" class="dialog-footer">
        <el-slider v-model="count" @change="toGreen"></el-slider>
        <a id="download" download="shuirong.png">
          <el-button type="primary" @click="download">下载图片</el-button>
        </a>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import green from "@/utils/green.js";
import html2canvas from "html2canvas";

export default {
  data() {
    return {
      dialogVisible: false,
      edit: false,
      count: 0,
      canvas: "",
      image: "",
      imageData: []
    };
  },
  methods: {
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
        let ctx = canvas.getContext('2d');
        let data = ctx.getImageData(0, 0, canvas.width, canvas.height);
        this.imageData = data;
        this.canvas = canvas;
        this.dialogVisible = true;
      });
    },
    showImage() {
      this.toGreen(0);
    },
    toGreen(value) {
      this.image = green(this.canvas, this.imageData, value);
    },
    download() {
      let download = document.getElementById("download");
      let image = document
        .querySelector("canvas")
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      download.setAttribute("href", image);
    },
    changeMode() {
      this.edit = !this.edit;
      this.$emit('change');
    }
  }
};
</script>
<style scoped lang='scss'>
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
canvas {
  transform: scale(0.9);
}
</style>