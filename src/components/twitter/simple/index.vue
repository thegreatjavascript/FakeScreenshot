<template>
  <div class="container">
    <tool @change="changeMode">
      <el-upload :show-file-list="false" action="" :on-success="handlePicSuccess" :before-upload="beforePicUpload">
        <el-button type="warning" icon='el-icon-success' size="medium" plain>添加图片</el-button>
      </el-upload>
      <el-button type="info" icon='el-icon-info' size="medium" @click='random' plain>随机一下</el-button>
    </tool>
    <el-dialog title="" :visible.sync="isMentioned">
      <div>
        <el-input autofocus title="@someon" placeholder="输入用户名" v-model="mentionPerson" @keyup.enter.native="getMention">
          <template slot="prepend">@</template>
        </el-input>
        <el-button @click="getMention" style="margin-left:40%;margin-top:20px">确定</el-button>
      </div>
    </el-dialog>

    <div class="TwitterPage font-body stream content-main Grid-cell stream-item" id="DIV_1">
      <div class="tweet dismissible-content original-tweet ">
        <div class="context">
          <div class="tweet-context with-icn" v-show='edit || context.like.checked'>
            <span class="Icon Icon--small Icon--heartBadge"></span>
            <b :contenteditable='edit'>{{ context.like.people }}</b>
            <span> 表示喜欢</span>
            <input type="checkbox" v-model='context.like.checked' v-show='edit'>
          </div>
          <div class="tweet-context with-icn" v-show='edit || context.follow.checked'>
            <span class="Icon Icon--small Icon--follower"></span>
            <b :contenteditable='edit'>{{ context.follow.people }}</b>
            <span> 关注了 ta</span>
            <input type="checkbox" v-model='context.follow.checked' v-show='edit'>
          </div>
          <div class="tweet-context with-icn" v-show='edit || context.retweet.checked'>
            <span class="Icon Icon--small Icon--retweeted"></span>
            <b :contenteditable='edit'>{{ context.retweet.people }}</b>
            <span> 转推了</span>
            <input type="checkbox" v-model='context.retweet.checked' v-show='edit'>
          </div>
          <!--<div id="watermark">什么是真相？fakes.netlify.com</div>-->
        </div>

        <el-upload v-if='edit' class="avatar-uploader-twitter-simple" action="" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
          <img v-if="avatar" :src="avatar" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <img v-else :src='avatar' class="avatar"/>

        <div class="content">
          <div class="stream-item-header">
            <a class="account-group">
              <span class="FullNameGroup">
                <strong class="fullname show-popup-with-id u-textTruncate" v-html='nickname' :contenteditable='edit'></strong>
                <span class="UserBadges">
                  <span class="Icon Icon--verified">
                  </span>
                </span>
                <span class="UserNameBreak">&nbsp;</span>
              </span>
              <span class="username u-dir u-textTruncate" dir="ltr">@<b :contenteditable="edit" v-html='username'></b></span>
            </a>

            <small class="time">
              <a title="下午3:24 - 2019年3月30日" class="tweet-timestamp">
                <span> </span>
                <span class="_timestamp" v-html='time' :contenteditable="edit"></span>
              </a>
            </small>

            <div id="watermark">什么是真相？fakes.netlify.com</div>

            <div class="ProfileTweet-action ProfileTweet-action--more">
              <div class="dropdown">
                <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle" aria-haspopup="true" type="button">
                  <div title="更多" class="IconContainer">
                    <span class="Icon Icon--caretDownLight Icon--small"></span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div>
            <p class="TweetTextSize TweetTextSizenormal tweet-text" v-html='content' :contenteditable="edit"></p>
          </div>

          <div class="stream-item-footer">
            <div class="ProfileTweet-actionList" role="group">
              <div class="ProfileTweet-action ProfileTweet-action--reply">
                <button class="ProfileTweet-actionButton" type="button" :contenteditable="edit">
                  <div class="IconContainer">
                    <span class="Icon Icon--medium Icon--reply"></span>
                  </div>
                  <span class="ProfileTweet-actionCount">
                    <span class="ProfileTweet-actionCountForPresentation" v-html='commentNumber'></span>
                  </span>
                </button>
              </div>

              <div class="ProfileTweet-action ProfileTweet-action--retweet">
                <button class="ProfileTweet-actionButton" type="button" :contenteditable="edit">
                  <div title="转推" class="IconContainer">
                    <span class="Icon Icon--medium Icon--retweet"></span>
                  </div>
                  <span class="ProfileTweet-actionCount">
                    <span class="ProfileTweet-actionCountForPresentation" v-html='retweetNumber'></span>
                  </span>
                </button>
              </div>

              <div class="ProfileTweet-action ProfileTweet-action--favorite">
                <button class="ProfileTweet-actionButton" type="button" :contenteditable="edit">
                  <div title="喜欢" class="IconContainer">
                    <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
                  </div>
                  <span class="ProfileTweet-actionCount">
                    <span class="ProfileTweet-actionCountForPresentation" v-html='likeNumber'></span>
                  </span>
                </button>
              </div>

              <div class="ProfileTweet-action ProfileTweet-action--dm">
                <button class="ProfileTweet-actionButton u-textUserColorHover" type="button">
                  <div class="IconContainer">
                    <span class="Icon Icon--medium Icon--dm"></span>
                  </div>
                </button>
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
import { list } from "./data.json";

export default {
  name: "TwitterSimple",
  data() {
    return {
      edit: false,
      nickname: "鲁迅",
      username: "Lu Xun",
      avatar: json.avatar,
      retweetNumber: 114514,
      commentNumber: 12450,
      likeNumber: 12306,
      context: {
        like: {
          people: "<谁谁>",
          checked: false
        },
        retweet: {
          people: "旧青年",
          checked: true
        },
        follow: {
          people: "<谁谁>",
          checked: false
        }
      },
      from: "iPhone客户端",
      time: "1912年11月06日",
      content: "任何有脑子的中国人，都应该对网上的截图保持怀疑！",
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
    }
  },
  components: {
    Tool
  }
};
</script>

<style scoped src='./style.css'></style>
<style lang='scss'>
.avatar-uploader-twitter-simple {
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    float: left;
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
  .avatar2 {
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
#watermark {
  color: #657786;
  float: left;
  transform: rotate(180deg);
  align-self: baseline;
  font-size: 13px;
}
</style>
