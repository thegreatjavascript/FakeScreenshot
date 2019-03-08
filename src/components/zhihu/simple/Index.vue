<template>
  <div class="container">
    <div class='toolbar'>
      <el-button type="primary" icon="el-icon-edit" size="medium" @click='changeMode' plain>{{edit ? '确认' : '编辑内容'}}</el-button>
      <el-button type="success" icon='el-icon-success' size="medium" @click='generageScreenShot' plain>生成截图</el-button>
    </div>
    <el-dialog class='dialog-container' :visible.sync="dialogVisible" @opened='showImage' width="95%" top='2vh'>
      <div id='image-container'>
      </div>
      <span slot="footer" class="dialog-footer">
        <a id="download" download="shuirong.png">
          <el-button type="primary" @click="download">下载图片</el-button>
        </a>
      </span>
    </el-dialog>
    <div id='page-container'>
      <main class="App-main" role="main">
        <div class="QuestionPage">
          <div>
            <div class="QuestionStatus"></div>
            <div class="QuestionHeader">
              <div class="QuestionHeader-content">
                <div class="QuestionHeader-main">
                  <div class="QuestionHeader-tags">
                    <div class="QuestionHeader-topics">
                      <div class="Tag QuestionTopic"><span class="Tag-content"><a class="TopicLink" target="_blank">
                            <div class="Popover">
                              <div id="Popover3-toggle" :contenteditable='edit' v-html='tags_0'></div>
                            </div>
                          </a></span></div>
                      <div class="Tag QuestionTopic"><span class="Tag-content"><a class="TopicLink" target="_blank">
                            <div class="Popover">
                              <div id="Popover4-toggle" :contenteditable='edit' v-html='tags_1'></div>
                            </div>
                          </a></span></div>
                    </div>
                  </div>
                  <h1 class="QuestionHeader-title" :contenteditable="edit" v-html='title'></h1>
                  <div>
                    <div class="QuestionHeader-detail">
                      <div class="QuestionRichText QuestionRichText--collapsed">
                        <div><span class="RichText ztext">
                            <p :contenteditable="edit" v-html='description'></p>
                          </span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="QuestionHeader-side">
                  <div class="QuestionHeader-follow-status">
                    <div class="QuestionFollowStatus">
                      <div class="NumberBoard QuestionFollowStatus-counts NumberBoard--divider"><button class="Button NumberBoard-item Button--plain" type="button">
                          <div class="NumberBoard-itemInner">
                            <div class="NumberBoard-itemName">关注者</div><strong class="NumberBoard-itemValue" :contenteditable="edit" v-html='followers'></strong>
                          </div>
                        </button>
                        <div class="NumberBoard-item">
                          <div class="NumberBoard-itemInner">
                            <div class="NumberBoard-itemName">被浏览</div><strong class="NumberBoard-itemValue" :contenteditable="edit" v-html='views'></strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="QuestionHeader-footer">
                <div class="QuestionHeader-footer-inner">
                  <div class="QuestionHeader-main QuestionHeader-footer-main">
                    <div class="QuestionButtonGroup"><button class="Button FollowButton Button--primary Button--blue" type="button">关注问题</button><button class="Button Button--blue" type="button">
                        <svg-icon icon-name='pen' class-name="Icon Button-icon Icon--modify"></svg-icon>写回答
                      </button></div>
                    <div class="QuestionHeaderActions"><button class="Button Button--grey Button--withIcon Button--withLabel" style="margin-right: 16px;" type="button"><span style="display: inline-flex; align-items: center;">​<svg-icon icon-name='user-plus' class-name="Zi Zi--Invite Button-zi"></svg-icon></span>邀请回答</button>
                      <div class="QuestionHeader-Comment"><button class="Button Button--plain Button--withIcon Button--withLabel" type="button"><span style="display: inline-flex; align-items: center;">​<svg-icon icon-name='comment' class-name="Zi Zi--Comment Button-zi"></svg-icon></span><span :contenteditable="edit" v-html='questionCommentNumber'></span> 条评论</button></div>
                      <div class="Popover ShareMenu">
                        <div class="ShareMenu-toggler" id="Popover5-toggle"><button class="Button Button--plain Button--withIcon Button--withLabel" type="button"><span style="display: inline-flex; align-items: center;">
                              <svg-icon icon-name='share' class-name="Zi Zi--Share Button-zi"></svg-icon>
                            </span>分享</button></div>
                      </div><button class="Button Button--plain Button--withIcon Button--withLabel" type="button"><span style="display: inline-flex; align-items: center;">
                          <svg-icon icon-name='report' class-name="Zi Zi--Report Button-zi"></svg-icon>
                        </span>举报</button>
                      <div class="Popover"><button class="Button Button--plain Button--withIcon Button--iconOnly" id="Popover6-toggle" aria-label="更多" type="button"><span style="display: inline-flex; align-items: center;">​<svg-icon icon-name='more' class-name="Zi Zi--Dots Button-zi"></svg-icon></span></button></div>
                    </div>
                    <div class="QuestionHeader-actions"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div class="Sticky is-fixed" style="left: 0px; top: 52px; width: 2004.21px;"></div>
                <div class="Sticky--holder" style="margin: 0px; left: auto; top: auto; height: 0px; right: auto; bottom: auto; display: block; position: static; float: none;"></div>
              </div>
            </div>
          </div>
          <div class="Question-main">
            <div class="ListShortcut">
              <div class="Question-mainColumn">
                <div class="Card ViewAll"><a class="QuestionMainAction ViewAll-QuestionMainAction">查看全部 <span :contenteditable='edit' v-html='totalAnswers'></span> 个回答</a></div>
                <div class="Card AnswerCard">
                  <div tabindex="-1" class="QuestionAnswer-content">
                    <div class="ContentItem AnswerItem" name="587184688">
                      <div class="ContentItem-meta">
                        <div class="AuthorInfo AnswerItem-authorInfo AnswerItem-authorInfo--related">
                          <span class="UserLink AuthorInfo-avatarWrapper">
                            <div class="Popover">
                              <el-upload v-if='edit' class="avatar-uploader-zhihu-simple" action="" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                                <img v-if="avatar" :src="avatar" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                              </el-upload>
                              <div v-else id="Popover7-toggle"><a class="UserLink-link" target="_blank"><img width="38" height="38" class="Avatar AuthorInfo-avatar" alt="对抗假截图" :src='avatar'></a></div>
                            </div>
                          </span>
                          <div class="AuthorInfo-content">
                            <div class="AuthorInfo-head"><span class="UserLink AuthorInfo-name">
                                <div class="Popover">
                                  <div id="Popover8-toggle"><a class="UserLink-link" target="_blank" :contenteditable="edit" v-html='nickname'></a></div>
                                </div>
                              </span></div>
                            <div class="AuthorInfo-detail">
                              <div class="AuthorInfo-badge">
                                <div class="RichText ztext AuthorInfo-badgeText" :contenteditable="edit" v-html='slogan'></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="AnswerItem-extraInfo"><span class="Voters"><button class="Button Button--plain" type="button"><span :contenteditable='edit' v-html='votesNumber'></span>人赞同了该回答</button></span></div>
                      </div>
                      <div class="RichContent RichContent--unescapable">
                        <div class="RichContent-inner"><span class="RichText ztext CopyrightRichText-richText">
                            <p style="white-space: pre-wrap;" :contenteditable="edit" v-html='content'></p>
                          </span></div>
                        <div>
                          <div class="ContentItem-time"><a target="_blank"><span>编辑于 <span :contenteditable='edit' v-html='time'></span></span></a></div>
                          <div class="watermark">什么是真相？fakes.netlify.com</div>
                        </div>
                        <div>
                          <div class="ContentItem-actions Sticky RichContent-actions is-bottom"><span><button class="Button VoteButton VoteButton--up" aria-label="赞同" type="button"><span style="display: inline-flex; align-items: center;">​<svg-icon icon-name='agree' class-name="Zi Zi--TriangleUp VoteButton-TriangleUp"></svg-icon></span>赞同 <span :contenteditable='edit' v-html='votesNumberButton'></span></button><button class="Button VoteButton VoteButton--down" aria-label="反对" type="button"><span style="display: inline-flex; align-items: center;">​<svg-icon icon-name='disagree' class-name="Zi Zi--TriangleDown"></svg-icon></span></button></span><button class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel" type="button"><span style="display: inline-flex; align-items: center;">​<svg-icon icon-name='comment' class-name="Zi Zi--Comment Button-zi"></svg-icon></span><span :contenteditable='edit' v-html='commentNumber'></span> 条评论</button>
                            <div class="Popover ShareMenu ContentItem-action">
                              <div class="ShareMenu-toggler" id="Popover33-toggle"><img class="ShareMenu-fakeQRCode" alt="微信二维码" src="https://www.zhihu.com/qrcode?url=https%3A%2F%2Fwww.zhihu.com%2Fanswer%2F587184688%23showWechatShareTip"><button class="Button Button--plain Button--withIcon Button--withLabel" type="button"><span style="display: inline-flex; align-items: center;">​<svg-icon icon-name='share' class-name="Zi Zi--Share Button-zi"></svg-icon></span>分享</button></div>
                            </div><button class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel" type="button"><span style="display: inline-flex; align-items: center;">​<svg-icon icon-name='collection' class-name="Zi Zi--Star Button-zi"></svg-icon></span>收藏</button><button class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel" type="button"><span style="display: inline-flex; align-items: center;">
                                <svg-icon icon-name='thanks' class-name="Zi Zi--Heart Button-zi"></svg-icon>
                              </span>感谢</button>
                            <div class="Popover ContentItem-action"><button class="Button OptionsButton Button--plain Button--withIcon Button--iconOnly" id="Popover34-toggle" aria-label="更多" type="button"><span style="display: inline-flex; align-items: center;">
                                  <svg-icon icon-name='more' class-name="Zi Zi--Dots Button-zi"></svg-icon>
                                </span></button></div><button class="Button ContentItem-action ContentItem-rightButton Button--plain" type="button"><span class="RichContent-collapsedText">收起</span><span style="display: inline-flex; align-items: center;">​<svg-icon icon-name='arrow-up' class-name="Zi Zi--ArrowDown ContentItem-arrowIcon is-active"></svg-icon></span></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="Card ViewAll"><a class="QuestionMainAction ViewAll-QuestionMainAction">查看全部 <span :contenteditable='edit' v-html='totalAnswers'></span> 个回答</a></div>
              </div>
            </div>
            <div class="Question-sideColumn Question-sideColumn--sticky">
              <div>
                <div class="Sticky">
                  <div class="Question-sideColumnAdContainer"></div>
                  <div class="Card AnswerAuthor">
                    <div class="Card-header AnswerAuthor-title">
                      <div class="Card-headerText">关于作者</div>
                    </div>
                    <div class="Card-section">
                      <div class="AnswerAuthor-user">
                        <el-upload v-if='edit' class="avatar-uploader-zhihu-simple-2" action="" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                          <img v-if="avatar" :src="avatar" class="avatar">
                          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                        <div v-else class="AnswerAuthor-user-avatar"><span class="UserLink"><a class="UserLink-link" target="_blank"><img width="60" height="60" class="Avatar Avatar--large UserLink-avatar" alt="对抗假截图" :src='avatar'></a></span></div>
                        <div class="AnswerAuthor-user-content">
                          <div class="AnswerAuthor-user-name"><span class="UserLink"><a class="UserLink-link" target="_blank">对抗假截图</a></span></div>
                          <div class="AnswerAuthor-user-headline">
                            <div class="RichText ztext" :contenteditable="edit" v-html='slogan'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="Card-section"></div>
                    <div class="Card-section">
                      <div class="AnswerAuthor-counts">
                        <div class="NumberBoard"><a class="Button NumberBoard-item Button--plain" type="button">
                            <div class="NumberBoard-itemInner">
                              <div class="NumberBoard-itemName">回答</div><strong class="NumberBoard-itemValue" :contenteditable='edit' v-html='answerNumber'></strong>
                            </div>
                          </a><a class="Button NumberBoard-item Button--plain" type="button">
                            <div class="NumberBoard-itemInner">
                              <div class="NumberBoard-itemName">文章</div><strong class="NumberBoard-itemValue" :contenteditable='edit' v-html='articleNumber'></strong>
                            </div>
                          </a><a class="Button NumberBoard-item Button--plain" type="button">
                            <div class="NumberBoard-itemInner">
                              <div class="NumberBoard-itemName">关注者</div><strong class="NumberBoard-itemValue" :contenteditable='edit' v-html='followerNumber'></strong>
                            </div>
                          </a></div>
                      </div>
                      <div class="MemberButtonGroup AnswerAuthor-buttons"><button class="Button FollowButton Button--primary Button--blue" type="button"><span style="display: inline-flex; align-items: center;">
                            <svg-icon icon-name='follow' class-name="Zi Zi--Plus FollowButton-icon"></svg-icon>
                          </span>关注她</button><button class="Button Button--grey Button--withIcon Button--withLabel" type="button"><span style="display: inline-flex; align-items: center;">​<svg-icon icon-name='envelope' class-name="Zi Zi--Comments Button-zi"></svg-icon></span>发私信</button></div>
                    </div>
                  </div>
                  <div class="Card">
                    <div class="Card-header AnswerInfo-title">
                      <div class="Card-headerText">被收藏 <button class="Button Button--plain" type="button" :contenteditable='edit' v-html='collectionNumber'></button> 次</div>
                    </div>
                    <div class="Card-section AnswerInfo-favlists">
                      <div class="AnswerInfo-favlist">
                        <div class="AnswerInfo-favlist-title"><a class="Button Button--plain" target="_blank" type="button">有趣的回答</a></div>
                        <div class="AnswerInfo-favlist-author"><span class="UserLink"><a class="UserLink-link" target="_blank">光风</a></span> 创建</div>
                        <div class="AnswerInfo-favlist-followers">19,365 人关注</div>
                      </div>
                      <div class="AnswerInfo-favlist">
                        <div class="AnswerInfo-favlist-title"><a class="Button Button--plain" target="_blank" type="button">浩瀚的宇宙和漫漫的浮生</a></div>
                        <div class="AnswerInfo-favlist-author"><span class="UserLink"><a class="UserLink-link" target="_blank">海蒲</a></span> 创建</div>
                        <div class="AnswerInfo-favlist-followers">5,338 人关注</div>
                      </div>
                      <div class="AnswerInfo-favlist">
                        <div class="AnswerInfo-favlist-title"><a class="Button Button--plain" target="_blank" type="button">watch later</a></div>
                        <div class="AnswerInfo-favlist-author"><span class="UserLink"><a class="UserLink-link" target="_blank">丁鹄儒</a></span> 创建</div>
                        <div class="AnswerInfo-favlist-followers">1,417 人关注</div>
                      </div>
                      <div class="AnswerInfo-favlist">
                        <div class="AnswerInfo-favlist-title"><a class="Button Button--plain" target="_blank" type="button">马克</a></div>
                        <div class="AnswerInfo-favlist-author"><span class="UserLink"><a class="UserLink-link" target="_blank">光风</a></span> 创建</div>
                        <div class="AnswerInfo-favlist-followers">236 人关注</div>
                      </div>
                      <div class="AnswerInfo-favlist">
                        <div class="AnswerInfo-favlist-title"><a class="Button Button--plain" target="_blank" type="button">感兴趣的有用的</a></div>
                        <div class="AnswerInfo-favlist-author"><span class="UserLink"><a class="UserLink-link" target="_blank">傻傻</a></span> 创建</div>
                        <div class="AnswerInfo-favlist-followers">119 人关注</div>
                      </div>
                    </div>
                  </div>
                  <div class="Card">
                    <div class="Card-header SimilarQuestions-title">
                      <div class="Card-headerText">相关问题</div>
                    </div>
                    <div class="Card-section SimilarQuestions-list">
                      <div class="SimilarQuestions-item">
                        <a class="Button Button--plain" target="_blank" type="button">有没有什么有含义的网名？</a> 8 个回答</div>
                      <div class="SimilarQuestions-item">
                        <a class="Button Button--plain" target="_blank" type="button">取过什么惊艳的网名？</a> 3 个回答</div>
                      <div class="SimilarQuestions-item">
                        <a class="Button Button--plain" target="_blank" type="button">有没有很好听的网名？</a> 111 个回答</div>
                      <div class="SimilarQuestions-item">
                        <a class="Button Button--plain" target="_blank" type="button">有什么好听的网名吗？</a> 6 个回答</div>
                      <div class="SimilarQuestions-item">
                        <a class="Button Button--plain" target="_blank" type="button">是否有自己多年不想更换的、有故事的网名昵称等？</a> 12 个回答</div>
                    </div>
                  </div>
                  <div class="Card">
                    <div class="Card-header RelatedCommodities-title">
                      <div class="Card-headerText">相关推荐</div>
                    </div>
                    <div class="Card-section RelatedCommodities-list"><a class="Button RelatedCommodities-item Button--plain" target="_blank" type="button"><img class="RelatedCommodities-image" alt="live" :src="zhihu_recommend_0">
                        <div class="RelatedCommodities-content">
                          <div class="RelatedCommodities-subject RelatedCommodities-subject-two">管清友教你 2019 年怎么投？穿越经济周期的投资课</div>
                          <div class="RelatedCommodities-meta">
                            <div class="RelatedCommodities-remixMeta">
                              <div>共 31 节课</div><button class="Button RelatedCommodities-remixListen Button--plain" type="button">试听</button>
                            </div>
                          </div>
                        </div>
                      </a><a class="Button RelatedCommodities-item Button--plain" target="_blank" type="button"><img class="RelatedCommodities-image" alt="live" :src="zhihu_recommend_1">
                        <div class="RelatedCommodities-content">
                          <div class="RelatedCommodities-subject">我们为什么上班？</div>
                          <div class="RelatedCommodities-description">张佳玮</div>
                          <div class="RelatedCommodities-meta">
                            <div class="RelatedCommodities-bookMeta">5,170 人读过<span class="RelatedCommodities-bookRead"><span style="display: inline-flex; align-items: center;">​<svg-icon icon-name='read' class-name="Zi Zi--Ebook"></svg-icon></span>阅读</span></div>
                          </div>
                        </div>
                      </a></div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import json from "./image.json";

export default {
  name: "SinaSimple",
  data() {
    return {
      dialogVisible: false,
      edit: false,
      nickname: "鲁迅",
      avatar: json.avatar,
      zhihu_recommend_0: json.zhihu_recommend_0,
      zhihu_recommend_1: json.zhihu_recommend_1,
      title: "网上的截图可信吗？",
      description:
        "经常在群里、论坛、知乎看到有人贴出一张截图试图证明某事，带了一波又一波节奏。\n\r但是截图内容可信吗？",
      questionCommentNumber: "99,999",
      followers: "99,999",
      views: "9,999,999",
      slogan: "截屏=实锤？相信你就输了！",
      votesNumber: "99,999",
      votesNumberButton: "99k",
      tags_0: "假新闻",
      tags_1: "假截图",
      reblogNumber: "99,999",
      commentNumber: "99,999",
      starNumber: "99,999",
      totalAnswers: "99,999",
      answerNumber: "9,999",
      articleNumber: 999,
      followerNumber: "999,999",
      collectionNumber: "99,999",
      time: "2048-10-10",
      content: `某张截图是真还是假，我也不知道。我只知道，现如今“截图”造假的成本非常非常低，并且足以乱真！
        因此，我们在网络上看到任何截图时，都要“首先怀疑”其真实性。这样才不会被轻易带了节奏。`,
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
.avatar-uploader-zhihu-simple {
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
    width: 38px;
    height: 38px;
    line-height: 38px;
    text-align: center;
  }
  .avatar {
    width: 38px;
    height: 38px;
    display: block;
  }
}

.avatar-uploader-zhihu-simple-2 {
  margin-right: 12px;

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
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .avatar {
    width: 60px;
    height: 60px;
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
  #page-container {
    background: #f5f4f5;
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
  color: #8590a6;
  font-size: 14px;
  text-align: right;
}
</style>