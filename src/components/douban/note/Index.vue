<template>
  <div class="container">
    <div class='toolbar'>
      <el-button type="primary" icon="el-icon-edit" size="medium" @click='changeMode' plain>{{edit ? '确认' : '编辑内容'}}</el-button>
      <el-button type="success" icon='el-icon-success' size="medium" @click='generageScreenShot' plain>生成截图</el-button>
    </div>
    <el-dialog class='dialog-container' title="" :visible.sync="dialogVisible" @opened='showImage' width="95%" top='2vh'>
      <div id='image-container'>
      </div>
      <span slot="footer" class="dialog-footer">
        <a id="download" download="shuirong.png">
          <el-button type="primary" @click="download">下载图片</el-button>
        </a>
      </span>
    </el-dialog>
    <div id='page-container'>
      <div id="DIV_2">
      </div>
      <link href="//img3.doubanio.com/dae/accounts/resources/0246c88/shire/bundle.css" rel="stylesheet" type="text/css" id="LINK_4" />
      <div id="DIV_5">
        <div id="DIV_6">
          <div id="DIV_7">
            <a href="https://accounts.douban.com/passport/login?source=main" rel="nofollow" id="A_8">登录/注册</a>
          </div>
          <div id="DIV_9">
            <a href="https://www.douban.com/doubanapp/app?channel=top-nav" id="A_10">下载豆瓣客户端</a>
            <div id="DIV_11">
              <a href="https://www.douban.com/doubanapp/app?channel=qipao" id="A_12">豆瓣 <span id="SPAN_13">6.0</span> 全新发布</a> <a href="javascript: void 0;" id="A_14">×</a>
            </div>
          </div>
          <div id="DIV_22">
            <ul id="UL_23">
              <li id="LI_24">
                <a href="https://www.douban.com" id="A_25">豆瓣</a>
              </li>
              <li id="LI_26">
                <a href="https://book.douban.com" id="A_27">读书</a>
              </li>
              <li id="LI_28">
                <a href="https://movie.douban.com" id="A_29">电影</a>
              </li>
              <li id="LI_30">
                <a href="https://music.douban.com" id="A_31">音乐</a>
              </li>
              <li id="LI_32">
                <a href="https://www.douban.com/location" id="A_33">同城</a>
              </li>
              <li id="LI_34">
                <a href="https://www.douban.com/group" id="A_35">小组</a>
              </li>
              <li id="LI_36">
                <a href="https://read.douban.com/?dcs=top-nav&amp;dcm=douban" id="A_37">阅读</a>
              </li>
              <li id="LI_38">
                <a href="https://douban.fm/?from_=shire_top_nav" id="A_39">FM</a>
              </li>
              <li id="LI_40">
                <a href="https://time.douban.com/?dt_time_source=douban-web_top_nav" id="A_41">时间</a>
              </li>
              <li id="LI_42">
                <a href="https://market.douban.com/?utm_campaign=douban_top_nav&amp;utm_source=douban&amp;utm_medium=pc_web" id="A_43">豆品</a>
              </li>
              <li id="LI_44">
                <a href="#more" id="A_45"><span id="SPAN_46">更多</span></a>
                <div id="DIV_47">
                  <table id="TABLE_48">
                    <tbody id="TBODY_49">
                      <tr id="TR_50">
                        <td id="TD_51">
                          <a href="https://ypy.douban.com" id="A_52">豆瓣摄影</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <link href="//img3.doubanio.com/dae/accounts/resources/0246c88/sns/bundle.css" rel="stylesheet" type="text/css" id="LINK_55" />
      <div id="DIV_56">
        <div id="DIV_57">
          <div id="DIV_58">
            <div id="DIV_59">
              <img :src='logo'>
            </div>
            <div id="DIV_61">
              <form action="https://www.douban.com/search" method="get" id="FORM_62">
                <fieldset id="FIELDSET_63">

                  <legend id="LEGEND_64">
                    搜索：
                  </legend>
                  <label for="inp-query" id="LABEL_65">
                    搜索你感兴趣的内容和人...
                  </label>
                  <div id="DIV_66">
                    <input type="hidden" name="source" value="suggest" id="INPUT_67" />
                    <input id="INPUT_68" name="q" size="22" maxlength="60" placeholder="搜索你感兴趣的内容和人..." />
                  </div>
                  <div id="DIV_69">
                    <input type="submit" value="搜索" id="INPUT_70" />
                  </div>
                </fieldset>
              </form>
            </div>
            <div id="DIV_71">
              <ul id="UL_72">
                <li id="LI_73">
                  <a href="https://www.douban.com" id="A_74">首页</a>
                </li>
                <li id="LI_75">
                  <a href="https://www.douban.com/explore" id="A_76">浏览发现</a>
                </li>
                <li id="LI_77">
                  <a href="https://www.douban.com/gallery" id="A_78">话题广场<img :src="newMenu" alt="new" id="IMG_79" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="DIV_81">
        <div id="DIV_82">
          <div id="DIV_83">
            <div id="DIV_84">
              <div id="DIV_85">
                <a href="https://www.douban.com/accounts/register" id="A_86">快速注册</a>
              </div>
              <div id="DIV_87">
                <div id="DIV_88">
                  <h1 id="H1_89" :contenteditable="edit" v-html='title'>
                  </h1>
                  <div id="DIV_90">
                    <el-upload v-if='edit' class="avatar-uploader" action="" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                      <img v-if="avatar" :src="avatar" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <a v-else href="" id="A_91"><img width="24" height="24" :src='avatar' id="IMG_92" /></a>
                    <a href="" id="A_93" :contenteditable="edit" v-html='nickname'></a> <span id="SPAN_94" :contenteditable="edit" v-html='time'></span>
                  </div>
                </div>
                <div id="DIV_95">
                </div>
                <div id="DIV_96">
                  <div id="watermark">什么是真相？fakes.netlify.com</div>
                  <div id="DIV_97" :contenteditable="edit" v-html='content'>
                  </div>
                  <div id="DIV_111">
                  </div>
                </div>
                <div id="DIV_112">
                  <div id="DIV_113">
                    <div id="DIV_114">
                      <span id="SPAN_115" :contenteditable="edit" v-html='info'></span>
                    </div><span id="SPAN_116"></span>
                  </div>
                  <div id="DIV_117">
                    <div id="DIV_118">
                      <div id="DIV_119">
                        <a href="https://www.douban.com/accounts/register?reason=like" id="A_120">赞</a>
                      </div>
                      <div id="DIV_121">
                        <div id="DIV_122">
                          <div id="DIV_123">
                            <div id="DIV_124">
                              <span id="SPAN_125"> <a href="https://www.douban.com/accounts/register?reason=collect" id="A_126">转发 <span id="SPAN_127">8704</span></a></span>
                            </div>
                          </div><span id="SPAN_128"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="DIV_137">
              <div id="DIV_138">
                <div id="DIV_139">
                  <el-upload v-if='edit' class="avatar-uploader-2" action="" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                    <img v-if="avatar" :src="avatar" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                  <a v-else href="" id="A_140"><img :src='avatar' width="48" height="48" id="IMG_141" /></a>
                </div>
                <div id="DIV_142">
                  <a href="" id="A_143" :contenteditable="edit" v-html='nickname'></a> <span id="SPAN_144">(<span :contenteditable="edit" v-html='slogan'></span>)</span>
                  <p id="P_145" :contenteditable="edit" v-html='description'>
                  </p>
                  <div id="DIV_146">
                  </div>
                </div>
              </div>
              <div id="DIV_147">
                <div id="DIV_148">
                </div>
              </div>
              <div id="DIV_149">
                <h2 id="H2_150">
                  {{nickname}}的最新日记 · · · · · · <span id="SPAN_151">( <a href="notes" id="A_152">全部</a> )</span>
                </h2>
                <ul id="UL_153">
                  <li id="LI_154">
                    <a title="" href="" id="A_155" :contenteditable="edit" v-html='otherNotes_0'></a> <span id="SPAN_156">(<span :contenteditable="edit" v-html='otherNotes_0_likes'></span>人喜欢)</span>
                  </li>
                  <li id="LI_157">
                    <a title="" href="" id="A_158" :contenteditable="edit" v-html='otherNotes_1'></a> <span id="SPAN_159">(<span :contenteditable="edit" v-html='otherNotes_1_likes'></span>人喜欢)</span>
                  </li>
                  <li id="LI_160">
                    <a title="" href="" id="A_161" :contenteditable="edit" v-html='otherNotes_2'></a> <span id="SPAN_162">(<span :contenteditable="edit" v-html='otherNotes_2_likes'></span>人喜欢)</span>
                  </li>
                  <li id="LI_163">
                    <a title="" href="" id="A_164" :contenteditable="edit" v-html='otherNotes_3'></a> <span id="SPAN_165">(<span :contenteditable="edit" v-html='otherNotes_3_likes'></span>人喜欢)</span>
                  </li>
                  <li id="LI_166">
                    <a href="" id="A_167" :contenteditable="edit" v-html='otherNotes_4'></a> <span id="SPAN_168">(<span :contenteditable="edit" v-html='otherNotes_4_likes'></span>人喜欢)</span>
                  </li>
                </ul>
              </div>
              <div id="DIV_169">
                <h2 id="H2_170">
                  热门话题 · · · · · · <span id="SPAN_171">( <a href="/gallery/" id="A_172">去话题广场</a> )</span>
                </h2>
                <ul id="UL_173">
                  <li id="LI_174">
                    <a href="" id="A_175">属于春天的歌</a> <span id="SPAN_176">新话题 · 1073人浏览</span>
                  </li>
                  <li id="LI_177">
                    <a href="" id="A_178">春日踏青指南</a> <span id="SPAN_179">526619人浏览</span>
                  </li>
                  <li id="LI_180">
                    <a href="https://www.douban.com/gallery/topic/53531/?from=hot_topic_note" id="A_181">春日香水测评</a> <span id="SPAN_182">28599人浏览</span>
                  </li>
                  <li id="LI_183">
                    <a href="https://www.douban.com/gallery/topic/55556/?from=hot_topic_note" id="A_184">我的刺绣作品</a> <span id="SPAN_185">5721人浏览</span>
                  </li>
                  <li id="LI_186">
                    <a href="https://www.douban.com/gallery/topic/55558/?from=hot_topic_note" id="A_187">尝一口就印象深刻的食物</a> <span id="SPAN_188">40376人浏览</span>
                  </li>
                  <li id="LI_189">
                    <a href="https://www.douban.com/gallery/topic/14229/?from=hot_topic_note" id="A_190">属于夏天的电影</a> <span id="SPAN_191">新话题 · 297797人浏览</span>
                  </li>
                </ul>
              </div>
              <!-- douban ad begin -->

              <div id="DIV_192">
              </div>
              <!-- douban ad end -->

              <div id="DIV_193">
              </div>
              <!-- douban app begin -->

              <div id="DIV_194">
              </div>
              <div id="DIV_195">
              </div>
              <!-- douban app end -->

            </div>
            <div id="DIV_196">
              <!-- douban ad begin -->
              <div id="DIV_197">
              </div>

            </div>
          </div>
        </div>
      </div>

      <div id="DIV_200">
        <div id="DIV_201">
        </div>
        <div id="DIV_202">
          <a href="#" id="A_203">×</a>
          <div id="DIV_204">
          </div>
          <div id="DIV_205">
          </div>
        </div>
      </div>
      <div id="DIV_214">
      </div><a href="#" id="A_215"></a>
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import json from "./image.json";

export default {
  name: "DoubanNote",
  data() {
    return {
      edit: true,
      dialogVisible: false,
      avatar: json.avatar,
      newMenu: json.new,
      logo: json.logo,
      nickname: "梅伊娜·悦石",
      slogan: "此处长眠者",
      description: "声名水上书",
      time: "1919-06-16 09:52:00",
      title: "海伯利安：梅伊娜·悦石和技术内核顾问的对决（一）",
      content:
        "悦石坐着思考了片刻，单拳托腮。然后对着墙壁说道：“请叫阿尔贝都顾问过来。”二十秒后，悦石宽桌对面的空气蒙上了迷雾，闪着微光，最后凝固住了。技术内核的代表看上去依然俊俏，短短的灰发在光线下闪烁，他那坦率、正直的脸庞呈现出健康的古铜色。“执行官大人”全息投影像开口道，“顾问理事会和内核预言者将继续为你们效劳，在这大难——”“阿尔贝都，内核在哪里？”悦石打断道。顾问的笑容毫不抖动。“对不起，执行官大人，你说什么？”“技术内核。到底在哪里？”阿尔贝都那好好先生的脸庞露出一丝疑惑，但没有敌意，没有什么显著的情感反应，除了一副想要帮忙的茫然表情。“执行官大人，你肯定知道，自从内核隐退以来，我们的政策一直坚持不要暴露……啊……技术内核物理元件的所在地。换句话说，内核不在任何地方，自从——”“自从你们生活在数据平面和数据网的交感现实中，”悦石说，声音单调，“对，我已经听够这些废话了，阿尔贝都。我父亲以及我父亲的父亲都听够这一切了。我现在直截了当问你，技术内核在哪里？”顾问呆呆地摇了摇头，满脸歉意，就像一名大人又被小孩问了一个问了一千遍的问题。爸爸，天为什么是蓝色的？“执行官大人，对这个问题，我完全无法以人类的三维坐标来回答。从某种意义上说，我们……内核……存在于环网内，也存在于环网外。我们在数据平面的现实中游动，你们称其为数据网，但是说到物理元件……你们祖先称之为‘硬件’的东西，我们觉得有必要——”“有必要保密。”悦石替他说完了这句话。她交叉双臂，“阿尔贝都顾问，你有没有意识到，霸主中将会有好多人……数百万人……坚信内核……你们的顾问理事会……背叛了人类？”阿尔贝都双手打了个手势。“执行官大人，那实在是令人遗憾。遗憾，但可以理解。”“顾问先生，你们的预言者应该差不多是十全十美的。但你们却从没有警告过我们，驱逐者舰队会对世界造成毁灭。”投影像英俊的脸庞上露出悲伤之情，表情极为令人信服。“执行官大人，我得提醒你，顾问理事会警告过你们，如果想将海伯利安引进环网，将会带来无规则的变数，甚至连理事会也无法归因。”“但并不单单是海伯利安！”悦石叫道，她提高了嗓音，“神林被烧毁了。天国之门被熔成一堆渣。无限极海的脑袋正等着下一锤的攻击！如果顾问理事会不能预测如此规模的侵略，那还要你们有什么用？”“我们的确预测到了和驱逐者发生战争的必然性，执行官大人。我们也预言了防卫海伯利安的重大危险。你必须相信我，把海伯利安加入到任何预言方程式，都将让安全性因素降低到——”“好吧，”悦石叹了口气，“我想和内核的其他人谈谈，阿尔贝都。你们那难以辨认的智能阶级中拥有决策权力的人。”“我向你保证，我代表了广大内核成员，在我——”“对，对。但我想要和你们的……我想你们称其为神，我想和你们的一位神谈一谈。老辈人工智能中的一个。一个有影响力的神，阿尔贝都。我需要和他谈一谈，告诉我为什么内核绑架了我的艺术家赛文和我的助手利·亨特。”全息像看上去大吃一惊。“我向你保证，执行官大人，我们四世纪的联盟在上，内核跟这不幸的失踪事件完全无关——”悦石站起身。“这就是为什么我要和你们的神谈一谈的原因。阿尔贝都，现在作担保已毫无意义了。如果我们两个种族想要活下去，那就是时候来一次坦率的会谈了。我说完了。”她的注意力回到了桌子上的传真台文件上。阿尔贝都顾问站起身，点头道别，闪了闪，消失了。",
      otherNotes_0: "独自生活",
      otherNotes_0_likes: "99999",
      otherNotes_1: "陪伴是最好的爱",
      otherNotes_1_likes: "99999",
      otherNotes_2: "我不需要你一句对不起，你也不配得到我一句没关系",
      otherNotes_2_likes: "99999",
      otherNotes_3: "每个人都曾穿越过不为人知的黑暗",
      otherNotes_3_likes: "99999",
      otherNotes_4: "年轻时陪你吃苦的女人，年老时陪你享福的男人",
      otherNotes_4_likes: "99999",
      info: "日记被作者设为不允许回应"
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
        // allowTaint: true,
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
.avatar-uploader {
  height: 26px;
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
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
  }
  .avatar {
    width: 24px;
    height: 24px;
    display: block;
  }
}

.avatar-uploader-2 {
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
  transform: scale(0.9);
}
</style>
<style scoped lang='scss'>
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
.dialog-container {
  padding: 10px;
  #image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
}
#watermark {
  color: rgba(245, 108, 108, 0.5);
  font-family: microsoft yahei;
  font-size: 30px;
  font-weight: bold;
  transform: rotate(170deg);
  position: absolute;
  bottom: 80px;
  left: 500px;
}
</style>


