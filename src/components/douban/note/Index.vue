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
                    <el-upload v-if='edit' class="avatar-uploader-douban-note" action="" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                      <img v-if="avatar" :src="avatar" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <a v-else href="" id="A_91"><img width="24" height="24" :src='avatar' id="IMG_92" /></a>
                    <a href="" id="A_93" :contenteditable="edit" v-html='nickname'></a> <span id="SPAN_94" :contenteditable="edit" v-html='time'></span>
                    <div class='watermark'>什么是真相？fakes.netlify.com</div>
                  </div>
                </div>
                <div id="DIV_95">
                </div>
                <div id="DIV_96">
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
                    <a href="https://www.douban.com/gallery/topic/14229/?from=hot_topic_note" id="A_190" class='watermark'>什么是真相？fakes.netlify.com</a> <span id="SPAN_191">新话题 · 297797人浏览</span>
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
      edit: false,
      dialogVisible: false,
      avatar: json.avatar,
      newMenu: json.new,
      logo: json.logo,
      nickname: "FakeScreenshot",
      slogan: "对抗假截图",
      description: "我给自己建起了一座非手造的纪念碑",
      time: "2020-20-20 01:01:01",
      title: "关于本项目：虚假截图/FakeScreenshot",
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

<style scoped src='./index.css'></style>
<style lang='scss'>
.avatar-uploader-douban-note {
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
.dialog-footer {
  display: block;
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
.watermark {
  transform: rotate(180deg);
  color: rgb(153, 153, 153);
  margin-left: 10px;
}
</style>


