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
    <div id="page-outer">
      <div class="AppContent" id="page-container">
        <div class="AppContainer">
          <div class="AppContent-main content-main u-cf" role="main" aria-labelledby="content-main-heading">
            <div class="Grid Grid--withGutter">
              <div class="Grid-cell u-size2of3 u-lg-size3of4">
                <div class="Grid Grid--withGutter">
                  <div class="Grid-cell&#10;                    u-lg-size2of3&#10;              " data-test-selector="ProfileTimeline">
                    <div class="ProfileTimeline " id="timeline">
                      <div class="stream-container  " data-min-position="1111355230573211650" data-max-position="1112118445779374080">
                        <div class="stream">
                          <ol class="stream-items js-navigable-stream" id="stream-items-id">
                            <li class="js-stream-item stream-item stream-item&#10;" id="stream-item-tweet-1112118445779374080" data-item-type="tweet" data-suggestion-json='{"suggestion_details":{},"tweet_ids":"1112118445779374080","scribe_component":"tweet"}' data-item-id="1112118445779374080">
                              <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content&#10;       original-tweet js-original-tweet&#10;      &#10;      &#10;       &#10;" data-you-block="false" data-you-follow="false" data-user-id="25073877" data-name="Donald J. Trump" data-screen-name="realDonaldTrump" data-item-id="1112118445779374080" data-disclosure-type="" data-reply-to-users-json='[{"id_str":"25073877","screen_name":"realDonaldTrump","name":"Donald J. Trump","emojified_name":{"text":"Donald J. Trump","emojified_text_as_html":"Donald J. Trump"}},{"id_str":"807095","screen_name":"nytimes","name":"The New York Times","emojified_name":{"text":"The New York Times","emojified_text_as_html":"The New York Times"}}]' data-mentions="nytimes" data-follows-you="false" data-tweet-nonce="1112118445779374080-29afb910-560e-4bfb-982e-71788493efc8" data-conversation-id="1112118445779374080" data-permalink-path="/realDonaldTrump/status/1112118445779374080" data-tweet-id="1112118445779374080" data-tweet-stat-initialized="true">
                                <div class="context"></div>

                                <div class="content">
                                  <div class="stream-item-header">
                                    <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/realDonaldTrump" data-user-id="25073877">
                                      <img class="avatar js-action-profile-avatar" alt="" src="https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_bigger.jpg" />
                                      <span class="FullNameGroup">
                                        <strong class="fullname show-popup-with-id u-textTruncate " data-aria-label-part="">Donald J. Trump</strong><span>‏</span><span class="UserBadges"><span class="Icon Icon--verified"><span class="u-hiddenVisually">认证账号</span></span></span><span class="UserNameBreak">&nbsp;</span></span><span class="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>realDonaldTrump</b></span></a>

                                    <small class="time">
                                      <a title="下午3:24 - 2019年3月30日" class="tweet-timestamp js-permalink js-nav js-tooltip" href="/realDonaldTrump/status/1112118445779374080" data-conversation-id="1112118445779374080"><span class="_timestamp js-short-timestamp js-relative-timestamp" aria-hidden="true" data-long-form="true" data-time-ms="1553984674000" data-time="1553984674">17小时</span><span class="u-hiddenVisually" data-aria-label-part="last">17小时前</span></a>
                                    </small>

                                    <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
                                      <div class="dropdown">
                                        <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" aria-haspopup="true" type="button">
                                          <div title="更多" class="IconContainer js-tooltip">
                                            <span class="Icon Icon--caretDownLight Icon--small"></span>
                                            <span class="u-hiddenVisually">更多</span>
                                          </div>
                                        </button>
                                        <div class="dropdown-menu is-autoCentered">
                                          <div class="dropdown-caret">
                                            <div class="caret-outer"></div>
                                            <div class="caret-inner"></div>
                                          </div>
                                          <ul>
                                            <li class="copy-link-to-tweet js-actionCopyLinkToTweet">
                                              <button class="dropdown-link" type="button">
                                                复制推文链接
                                              </button>
                                            </li>
                                            <li class="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
                                              <button class="dropdown-link" type="button">
                                                嵌入推文
                                              </button>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="js-tweet-text-container">
                                    <p class="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part="0">
                                      “The Trump Administration has succeeded
                                      in dramatically raising the costs to
                                      Iran for its sinister behavior, at no
                                      cost to the U.S. or our allies. That’s
                                      the definition of a foreign-policy
                                      achievement.” Bret Stephens,
                                      <a class="twitter-atreply pretty-link js-nav" dir="ltr" href="/nytimes" data-mentioned-user-id="807095"><s>@</s><b>nytimes</b></a>
                                      We are getting stronger all over the
                                      world, watch!
                                    </p>
                                  </div>

                                  <div class="stream-item-footer">
                                    <div class="ProfileTweet-actionCountList u-hiddenVisually">
                                      <span class="ProfileTweet-action--reply u-hiddenVisually">
                                        <span class="ProfileTweet-actionCount" data-tweet-stat-count="11451">
                                          <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-1112118445779374080" data-aria-label-part="">11,451回复</span>
                                        </span>
                                      </span>
                                      <span class="ProfileTweet-action--retweet u-hiddenVisually">
                                        <span class="ProfileTweet-actionCount" data-tweet-stat-count="20605">
                                          <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-1112118445779374080" data-aria-label-part="">20,605 转推</span>
                                        </span>
                                      </span>
                                      <span class="ProfileTweet-action--favorite u-hiddenVisually">
                                        <span class="ProfileTweet-actionCount" data-tweet-stat-count="85559">
                                          <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-1112118445779374080" data-aria-label-part="">85,559 喜欢</span>
                                        </span>
                                      </span>
                                    </div>

                                    <div class="ProfileTweet-actionList js-actions" role="group" aria-label="发推行为">
                                      <div class="ProfileTweet-action ProfileTweet-action--reply">
                                        <button class="ProfileTweet-actionButton js-actionButton js-actionReply" aria-describedby="profile-tweet-action-reply-count-aria-1112118445779374080" type="button" data-modal="ProfileTweet-reply">
                                          <div title="回复" class="IconContainer js-tooltip">
                                            <span class="Icon Icon--medium Icon--reply"></span>
                                            <span class="u-hiddenVisually">回复</span>
                                          </div>
                                          <span class="ProfileTweet-actionCount" data-tweet-stat-count="11451">
                                            <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">1万</span>
                                          </span>
                                        </button>
                                      </div>

                                      <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
                                        <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" aria-describedby="profile-tweet-action-retweet-count-aria-1112118445779374080" type="button" data-modal="ProfileTweet-retweet">
                                          <div title="转推" class="IconContainer js-tooltip">
                                            <span class="Icon Icon--medium Icon--retweet"></span>
                                            <span class="u-hiddenVisually">转推</span>
                                          </div>
                                          <span class="ProfileTweet-actionCount" data-tweet-stat-count="20605">
                                            <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">2万</span>
                                          </span>
                                        </button><button class="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" type="button" data-modal="ProfileTweet-retweet">
                                          <div title="撤销转推" class="IconContainer js-tooltip">
                                            <span class="Icon Icon--medium Icon--retweet"></span>
                                            <span class="u-hiddenVisually">已转推</span>
                                          </div>
                                          <span class="ProfileTweet-actionCount" data-tweet-stat-count="20605">
                                            <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">2万</span>
                                          </span>
                                        </button>
                                      </div>

                                      <div class="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
                                        <button class="ProfileTweet-actionButton js-actionButton js-actionFavorite" aria-describedby="profile-tweet-action-favorite-count-aria-1112118445779374080" type="button">
                                          <div title="喜欢" class="IconContainer js-tooltip">
                                            <span class="Icon Icon--heart Icon--medium" role="presentation"></span>
                                            <div class="HeartAnimation"></div>
                                            <span class="u-hiddenVisually">喜欢</span>
                                          </div>
                                          <span class="ProfileTweet-actionCount" data-tweet-stat-count="85559">
                                            <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">9万</span>
                                          </span>
                                        </button><button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
                                          <div title="撤销喜欢" class="IconContainer js-tooltip">
                                            <span class="Icon Icon--heart Icon--medium" role="presentation"></span>
                                            <div class="HeartAnimation"></div>
                                            <span class="u-hiddenVisually">喜欢</span>
                                          </div>
                                          <span class="ProfileTweet-actionCount" data-tweet-stat-count="85559">
                                            <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">9万</span>
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="dismiss-module">
                                <div class="dismissed-module">
                                  <div class="feedback-actions">
                                    <div class="feedback-action" data-feedback-url="" data-feedback-type="DontLike">
                                      <div class="action-confirmation dismiss-module-item">
                                        谢谢。Twitter
                                        会使用此信息，来优化你的时间线。
                                        <span class="undo-action">撤销</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="child-feedback-confirmation">
                                    <div class="child-confirmation-item">
                                      <span class="child-confirmation-text"></span>
                                      <span class="undo-child-feedback-action">撤销</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
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
      content:
        "我即使是死了，钉在棺材里了，也要在墓里，用这腐朽的声带喊出：“我没说过这句话”",
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

<style scoped src='./style.css'></style>
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