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
      <main class="App-main" role="main">
        <div class="QuestionPage" itemtype="http://schema.org/Question" itemscope="" data-za-detail-view-path-module="QuestionItem" data-za-extra-module='{"card":{"content":{"type":"Question","token":"27731412"}}}'>
          <div data-zop-question='{"title":"你听过最美的网名是什么？","topics":[{"name":"网名","id":"19560775"},{"name":"昵称","id":"19563436"}],"id":27731412,"isEditable":true}'>
            <div class="QuestionStatus"></div>
            <div class="QuestionHeader" data-za-detail-view-path-module="QuestionDescription" data-za-extra-module='{"card":{"content":{"type":"Question","token":"27731412"}}}'>
              <div class="QuestionHeader-content">
                <div class="QuestionHeader-main">
                  <div class="QuestionHeader-tags">
                    <div class="QuestionHeader-topics">
                      <div class="Tag QuestionTopic" data-za-detail-view-path-module="TopicItem" data-za-extra-module='{"card":{"content":{"type":"Topic","token":"19560775"}}}'><span class="Tag-content"><a class="TopicLink" target="_blank">
                            <div class="Popover">
                              <div id="Popover3-toggle" aria-expanded="false" aria-haspopup="true" aria-owns="Popover3-content" :contenteditable='edit' v-html='tags_0'></div>
                            </div>
                          </a></span></div>
                      <div class="Tag QuestionTopic" data-za-detail-view-path-module="TopicItem" data-za-extra-module='{"card":{"content":{"type":"Topic","token":"19563436"}}}'><span class="Tag-content"><a class="TopicLink" target="_blank">
                            <div class="Popover">
                              <div id="Popover4-toggle" aria-expanded="false" aria-haspopup="true" aria-owns="Popover4-content" :contenteditable='edit' v-html='tags_1'></div>
                            </div>
                          </a></span></div>
                    </div>
                  </div>
                  <h1 class="QuestionHeader-title" :contenteditable="edit" v-html='title'></h1>
                  <div>
                    <div class="QuestionHeader-detail">
                      <div class="QuestionRichText QuestionRichText--collapsed">
                        <div><span class="RichText ztext" itemprop="text">
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
                    <div class="QuestionButtonGroup"><button class="Button FollowButton Button--primary Button--blue" type="button">关注问题</button><button class="Button Button--blue" type="button"><svg xmlns="http://www.w3.org/2000/svg" class="Icon Button-icon Icon--modify" aria-hidden="true" style="width: 14px; height: 16px;" viewBox="0 0 12 12" width="14" height="16">
                          <title />
                          <g>
                            <path fill-rule="evenodd" d="M 0.423 10.32 L 0 12 l 1.667 -0.474 l 1.55 -0.44 l -2.4 -2.33 l -0.394 1.564 Z M 10.153 0.233 c -0.327 -0.318 -0.85 -0.31 -1.17 0.018 l -0.793 0.817 l 2.49 2.414 l 0.792 -0.814 c 0.318 -0.328 0.312 -0.852 -0.017 -1.17 l -1.3 -1.263 Z M 3.84 10.536 L 1.35 8.122 l 6.265 -6.46 l 2.49 2.414 l -6.265 6.46 Z" />
                          </g>
                        </svg>写回答</button></div>
                    <div class="QuestionHeaderActions"><button class="Button Button--grey Button--withIcon Button--withLabel" style="margin-right: 16px;" type="button"><span style="display: inline-flex; align-items: center;">​<svg xmlns="http://www.w3.org/2000/svg" class="Zi Zi--Invite Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                            <path fill-rule="evenodd" d="M 4 10 V 8 a 1 1 0 1 1 2 0 v 2 h 2 a 1 1 0 0 1 0 2 H 6 v 2 a 1 1 0 0 1 -2 0 v -2 H 2 a 1 1 0 0 1 0 -2 h 2 Z m 10.455 2 c -2.21 0 -4 -1.79 -4 -4 s 1.79 -4 4 -4 s 4 1.79 4 4 s -1.79 4 -4 4 Z m -7 6 c 0 -2.66 4.845 -4 7.272 -4 C 17.155 14 22 15.34 22 18 v 1.375 c 0 0.345 -0.28 0.625 -0.625 0.625 H 8.08 a 0.625 0.625 0 0 1 -0.625 -0.625 V 18 Z" /></svg></span>邀请回答</button>
                      <div class="QuestionHeader-Comment"><button class="Button Button--plain Button--withIcon Button--withLabel" type="button"><span style="display: inline-flex; align-items: center;">​<svg xmlns="http://www.w3.org/2000/svg" class="Zi Zi--Comment Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                              <path fill-rule="evenodd" d="M 10.241 19.313 a 0.97 0.97 0 0 0 -0.77 0.2 a 7.908 7.908 0 0 1 -3.772 1.482 a 0.409 0.409 0 0 1 -0.38 -0.637 a 5.825 5.825 0 0 0 1.11 -2.237 a 0.605 0.605 0 0 0 -0.227 -0.59 A 7.935 7.935 0 0 1 3 11.25 C 3 6.7 7.03 3 12 3 s 9 3.7 9 8.25 s -4.373 9.108 -10.759 8.063 Z" /></svg></span><span :contenteditable="edit" v-html='questionCommentNumber'></span> 条评论</button></div>
                      <div class="Popover ShareMenu">
                        <div class="ShareMenu-toggler" id="Popover5-toggle" aria-expanded="false" aria-haspopup="true" aria-owns="Popover5-content"><button class="Button Button--plain Button--withIcon Button--withLabel" type="button"><span style="display: inline-flex; align-items: center;">​<svg xmlns="http://www.w3.org/2000/svg" class="Zi Zi--Share Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                                <path fill-rule="evenodd" d="M 2.931 7.89 c -1.067 0.24 -1.275 1.669 -0.318 2.207 l 5.277 2.908 l 8.168 -4.776 c 0.25 -0.127 0.477 0.198 0.273 0.39 L 9.05 14.66 l 0.927 5.953 c 0.18 1.084 1.593 1.376 2.182 0.456 l 9.644 -15.242 c 0.584 -0.892 -0.212 -2.029 -1.234 -1.796 L 2.93 7.89 Z" /></svg></span>分享</button></div>
                      </div><button class="Button Button--plain Button--withIcon Button--withLabel" type="button"><span style="display: inline-flex; align-items: center;">​<svg xmlns="http://www.w3.org/2000/svg" class="Zi Zi--Report Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                            <path fill-rule="evenodd" d="M 19.947 3.129 c -0.633 0.136 -3.927 0.639 -5.697 0.385 c -3.133 -0.45 -4.776 -2.54 -9.949 -0.888 c -0.997 0.413 -1.277 1.038 -1.277 2.019 L 3 20.808 c 0 0.3 0.101 0.54 0.304 0.718 a 0.97 0.97 0 0 0 0.73 0.304 c 0.275 0 0.519 -0.102 0.73 -0.304 c 0.202 -0.179 0.304 -0.418 0.304 -0.718 v -6.58 c 4.533 -1.235 8.047 0.668 8.562 0.864 c 2.343 0.893 5.542 0.008 6.774 -0.657 c 0.397 -0.178 0.596 -0.474 0.596 -0.887 V 3.964 c 0 -0.599 -0.42 -0.972 -1.053 -0.835 Z" /></svg></span>举报</button>
                      <div class="Popover"><button class="Button Button--plain Button--withIcon Button--iconOnly" id="Popover6-toggle" aria-expanded="false" aria-haspopup="true" aria-owns="Popover6-content" aria-label="更多" type="button"><span style="display: inline-flex; align-items: center;">​<svg xmlns="http://www.w3.org/2000/svg" class="Zi Zi--Dots Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                              <path fill-rule="evenodd" d="M 5 14 a 2 2 0 1 1 0 -4 a 2 2 0 0 1 0 4 Z m 7 0 a 2 2 0 1 1 0 -4 a 2 2 0 0 1 0 4 Z m 7 0 a 2 2 0 1 1 0 -4 a 2 2 0 0 1 0 4 Z" /></svg></span></button></div>
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
              <div class="Question-mainColumn" data-zop-questionanswerlist="true">
                <div class="Card ViewAll" data-za-detail-view-path-module="MessageItem" data-za-extra-module='{"card":{"content":{"item_num":1631}}}'><a class="QuestionMainAction ViewAll-QuestionMainAction" data-za-detail-view-element_name="ViewAll">查看全部 <span :contenteditable='edit' v-html='totalAnswers'></span> 个回答</a></div>
                <div class="Card AnswerCard">
                  <div tabindex="-1" class="QuestionAnswer-content">
                    <div class="ContentItem AnswerItem" itemtype="http://schema.org/Answer" itemscope="" itemprop="mainEntityOfPage" name="587184688" data-zop='{"authorName":"对抗假截图","itemId":587184688,"title":"你听过最美的网名是什么？","type":"answer"}' data-za-detail-view-path-module="AnswerItem" data-za-extra-module='{"card":{"has_image":false,"has_video":false,"content":{"type":"Answer","token":"587184688","upvote_num":45706,"comment_num":1726,"publish_timestamp":null,"parent_token":"27731412","author_member_hash_id":"32c6bf07105f5b76de8fcb89973c52f6"}}}'>
                      <div class="ContentItem-meta">
                        <div class="AuthorInfo AnswerItem-authorInfo AnswerItem-authorInfo--related" itemtype="http://schema.org/Person" itemscope="" itemprop="author">
                          <span class="UserLink AuthorInfo-avatarWrapper">
                            <div class="Popover">
                              <div id="Popover7-toggle" aria-expanded="false" aria-haspopup="true" aria-owns="Popover7-content"><a class="UserLink-link" target="_blank" data-za-detail-view-element_name="User"><img width="38" height="38" class="Avatar AuthorInfo-avatar" alt="对抗假截图" :src='avatar'></a></div>
                            </div>
                          </span>
                          <div class="AuthorInfo-content">
                            <div class="AuthorInfo-head"><span class="UserLink AuthorInfo-name">
                                <div class="Popover">
                                  <div id="Popover8-toggle" aria-expanded="false" aria-haspopup="true" aria-owns="Popover8-content"><a class="UserLink-link" target="_blank" data-za-detail-view-element_name="User" :contenteditable="edit" v-html='nickname'></a></div>
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
                        <div class="RichContent-inner"><span class="RichText ztext CopyrightRichText-richText" itemprop="text">
                            <p :contenteditable="edit" v-html='content'></p>
                          </span></div>
                        <div>
                          <div class="ContentItem-time"><a target="_blank"><span data-tooltip="发布于 2019-02-01 14:19">编辑于 <span :contenteditable='edit' v-html='time'></span></span></a></div>
                        </div>
                        <div>
                          <div class="ContentItem-actions Sticky RichContent-actions is-bottom"><span><button class="Button VoteButton VoteButton--up" aria-label="赞同" type="button"><span style="display: inline-flex; align-items: center;">​<svg xmlns="http://www.w3.org/2000/svg" class="Zi Zi--TriangleUp VoteButton-TriangleUp" fill="currentColor" viewBox="0 0 24 24" width="10" height="10">
                                    <path fill-rule="evenodd" d="M 2 18.242 c 0 -0.326 0.088 -0.532 0.237 -0.896 l 7.98 -13.203 C 10.572 3.57 11.086 3 12 3 c 0.915 0 1.429 0.571 1.784 1.143 l 7.98 13.203 c 0.15 0.364 0.236 0.57 0.236 0.896 c 0 1.386 -0.875 1.9 -1.955 1.9 H 3.955 c -1.08 0 -1.955 -0.517 -1.955 -1.9 Z" /></svg></span>赞同 <span :contenteditable='edit' v-html='votesNumberButton'></span></button><button class="Button VoteButton VoteButton--down" aria-label="反对" type="button"><span style="display: inline-flex; align-items: center;">​<svg xmlns="http://www.w3.org/2000/svg" class="Zi Zi--TriangleDown" fill="currentColor" viewBox="0 0 24 24" width="10" height="10">
                                    <path fill-rule="evenodd" d="M 20.044 3 H 3.956 C 2.876 3 2 3.517 2 4.9 c 0 0.326 0.087 0.533 0.236 0.896 L 10.216 19 c 0.355 0.571 0.87 1.143 1.784 1.143 s 1.429 -0.572 1.784 -1.143 l 7.98 -13.204 c 0.149 -0.363 0.236 -0.57 0.236 -0.896 c 0 -1.386 -0.876 -1.9 -1.956 -1.9 Z" /></svg></span></button></span><button class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel" type="button"><span style="display: inline-flex; align-items: center;">​<svg xmlns="http://www.w3.org/2000/svg" class="Zi Zi--Comment Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                                  <path fill-rule="evenodd" d="M 10.241 19.313 a 0.97 0.97 0 0 0 -0.77 0.2 a 7.908 7.908 0 0 1 -3.772 1.482 a 0.409 0.409 0 0 1 -0.38 -0.637 a 5.825 5.825 0 0 0 1.11 -2.237 a 0.605 0.605 0 0 0 -0.227 -0.59 A 7.935 7.935 0 0 1 3 11.25 C 3 6.7 7.03 3 12 3 s 9 3.7 9 8.25 s -4.373 9.108 -10.759 8.063 Z" /></svg></span><span :contenteditable='edit' v-html='commentNumber'></span> 条评论</button>
                            <div class="Popover ShareMenu ContentItem-action">
                              <div class="ShareMenu-toggler" id="Popover33-toggle" aria-expanded="false" aria-haspopup="true" aria-owns="Popover33-content"><img class="ShareMenu-fakeQRCode" alt="微信二维码" src="https://www.zhihu.com/qrcode?url=https%3A%2F%2Fwww.zhihu.com%2Fanswer%2F587184688%23showWechatShareTip"><button class="Button Button--plain Button--withIcon Button--withLabel" type="button"><span style="display: inline-flex; align-items: center;">​<svg xmlns="http://www.w3.org/2000/svg" class="Zi Zi--Share Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                                      <path fill-rule="evenodd" d="M 2.931 7.89 c -1.067 0.24 -1.275 1.669 -0.318 2.207 l 5.277 2.908 l 8.168 -4.776 c 0.25 -0.127 0.477 0.198 0.273 0.39 L 9.05 14.66 l 0.927 5.953 c 0.18 1.084 1.593 1.376 2.182 0.456 l 9.644 -15.242 c 0.584 -0.892 -0.212 -2.029 -1.234 -1.796 L 2.93 7.89 Z" /></svg></span>分享</button></div>
                            </div><button class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel" type="button"><span style="display: inline-flex; align-items: center;">​<svg xmlns="http://www.w3.org/2000/svg" class="Zi Zi--Star Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                                  <path fill-rule="evenodd" d="M 5.515 19.64 l 0.918 -5.355 l -3.89 -3.792 c -0.926 -0.902 -0.639 -1.784 0.64 -1.97 L 8.56 7.74 l 2.404 -4.871 c 0.572 -1.16 1.5 -1.16 2.072 0 L 15.44 7.74 l 5.377 0.782 c 1.28 0.186 1.566 1.068 0.64 1.97 l -3.89 3.793 l 0.918 5.354 c 0.219 1.274 -0.532 1.82 -1.676 1.218 L 12 18.33 l -4.808 2.528 c -1.145 0.602 -1.896 0.056 -1.677 -1.218 Z" /></svg></span>收藏</button><button class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel" type="button"><span style="display: inline-flex; align-items: center;">​<svg xmlns="http://www.w3.org/2000/svg" class="Zi Zi--Heart Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                                  <path fill-rule="evenodd" d="M 2 8.437 C 2 5.505 4.294 3.094 7.207 3 C 9.243 3 11.092 4.19 12 6 c 0.823 -1.758 2.649 -3 4.651 -3 C 19.545 3 22 5.507 22 8.432 C 22 16.24 13.842 21 12 21 C 10.158 21 2 16.24 2 8.437 Z" /></svg></span>感谢</button>
                            <div class="Popover ContentItem-action"><button class="Button OptionsButton Button--plain Button--withIcon Button--iconOnly" id="Popover34-toggle" aria-expanded="false" aria-haspopup="true" aria-owns="Popover34-content" aria-label="更多" type="button"><span style="display: inline-flex; align-items: center;">​<svg xmlns="http://www.w3.org/2000/svg" class="Zi Zi--Dots Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                                    <path fill-rule="evenodd" d="M 5 14 a 2 2 0 1 1 0 -4 a 2 2 0 0 1 0 4 Z m 7 0 a 2 2 0 1 1 0 -4 a 2 2 0 0 1 0 4 Z m 7 0 a 2 2 0 1 1 0 -4 a 2 2 0 0 1 0 4 Z" /></svg></span></button></div><button class="Button ContentItem-action ContentItem-rightButton Button--plain" type="button" data-zop-retract-question="true"><span class="RichContent-collapsedText">收起</span><span style="display: inline-flex; align-items: center;">​<svg xmlns="http://www.w3.org/2000/svg" class="Zi Zi--ArrowDown ContentItem-arrowIcon is-active" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                                  <path fill-rule="evenodd" d="M 12 13 L 8.285 9.218 a 0.758 0.758 0 0 0 -1.064 0 a 0.738 0.738 0 0 0 0 1.052 l 4.249 4.512 a 0.758 0.758 0 0 0 1.064 0 l 4.246 -4.512 a 0.738 0.738 0 0 0 0 -1.052 a 0.757 0.757 0 0 0 -1.063 0 L 12.002 13 Z" /></svg></span></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="Card ViewAll" data-za-detail-view-path-module="MessageItem" data-za-extra-module='{"card":{"content":{"item_num":1631}}}'><a class="QuestionMainAction ViewAll-QuestionMainAction" data-za-detail-view-element_name="ViewAll">查看全部 <span :contenteditable='edit' v-html='totalAnswers'></span> 个回答</a></div>
              </div>
            </div>
            <div class="Question-sideColumn Question-sideColumn--sticky" data-za-detail-view-path-module="RightSideBar" data-za-extra-module='{"card":{"content":{"member_hash_id":"32c6bf07105f5b76de8fcb89973c52f6"}}}'>
              <div>
                <div class="Sticky">
                  <div class="Question-sideColumnAdContainer"></div>
                  <div class="Card AnswerAuthor">
                    <div class="Card-header AnswerAuthor-title">
                      <div class="Card-headerText">关于作者</div>
                    </div>
                    <div class="Card-section">
                      <div class="AnswerAuthor-user">
                        <div class="AnswerAuthor-user-avatar"><span class="UserLink"><a class="UserLink-link" target="_blank" data-za-detail-view-element_name="User"><img width="60" height="60" class="Avatar Avatar--large UserLink-avatar" alt="对抗假截图" :src='avatar'></a></span></div>
                        <div class="AnswerAuthor-user-content">
                          <div class="AnswerAuthor-user-name"><span class="UserLink"><a class="UserLink-link" target="_blank" data-za-detail-view-element_name="User">对抗假截图</a></span></div>
                          <div class="AnswerAuthor-user-headline">
                            <div class="RichText ztext" :contenteditable="edit" v-html='slogan'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="Card-section"></div>
                    <div class="Card-section">
                      <div class="AnswerAuthor-counts">
                        <div class="NumberBoard"><a class="Button NumberBoard-item Button--plain" type="button" data-za-detail-view-element_name="Answer">
                            <div class="NumberBoard-itemInner">
                              <div class="NumberBoard-itemName">回答</div><strong title="14" class="NumberBoard-itemValue" :contenteditable='edit' v-html='answerNumber'></strong>
                            </div>
                          </a><a class="Button NumberBoard-item Button--plain" type="button" data-za-detail-view-element_name="Post">
                            <div class="NumberBoard-itemInner">
                              <div class="NumberBoard-itemName">文章</div><strong title="0" class="NumberBoard-itemValue" :contenteditable='edit' v-html='articleNumber'></strong>
                            </div>
                          </a><a class="Button NumberBoard-item Button--plain" type="button" data-za-detail-view-element_name="Follower">
                            <div class="NumberBoard-itemInner">
                              <div class="NumberBoard-itemName">关注者</div><strong title="809" class="NumberBoard-itemValue" :contenteditable='edit' v-html='followerNumber'></strong>
                            </div>
                          </a></div>
                      </div>
                      <div class="MemberButtonGroup AnswerAuthor-buttons"><button class="Button FollowButton Button--primary Button--blue" type="button"><span style="display: inline-flex; align-items: center;">​<svg xmlns="http://www.w3.org/2000/svg" class="Zi Zi--Plus FollowButton-icon" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                              <path fill-rule="evenodd" d="M 13.491 10.488 s -0.012 -5.387 0 -5.998 c -0.037 -1.987 -3.035 -1.987 -2.997 0 c -0.038 1.912 0 5.998 0 5.998 H 4.499 c -1.999 0.01 -1.999 3.009 0 3.009 s 5.995 -0.01 5.995 -0.01 v 5.999 c 0 2.019 3.006 2.019 2.997 0 c -0.01 -2.019 0 -5.998 0 -5.998 s 3.996 0.009 6.004 0.009 c 2.008 0 2.008 -3 -0.01 -3.009 h -5.994 Z" /></svg></span>关注她</button><button class="Button Button--grey Button--withIcon Button--withLabel" type="button"><span style="display: inline-flex; align-items: center;">​<svg xmlns="http://www.w3.org/2000/svg" class="Zi Zi--Comments Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                              <path fill-rule="evenodd" d="M 11 2 c 5.571 0 9 4.335 9 8 c 0 6 -6.475 9.764 -11.481 8.022 c -0.315 -0.07 -0.379 -0.124 -0.78 0.078 c -1.455 0.54 -2.413 0.921 -3.525 1.122 c -0.483 0.087 -0.916 -0.25 -0.588 -0.581 c 0 0 0.677 -0.417 0.842 -1.904 c 0.064 -0.351 -0.14 -0.879 -0.454 -1.171 A 8.833 8.833 0 0 1 2 10 c 0 -3.87 3.394 -8 9 -8 Z m 10.14 9.628 c 0.758 0.988 0.86 2.009 0.86 3.15 c 0 1.195 -0.619 3.11 -1.368 3.938 c -0.209 0.23 -0.354 0.467 -0.308 0.722 c 0.12 1.073 0.614 1.501 0.614 1.501 c 0.237 0.239 -0.188 0.562 -0.537 0.5 c -0.803 -0.146 -1.495 -0.42 -2.546 -0.811 c -0.29 -0.146 -0.336 -0.106 -0.563 -0.057 c -2.043 0.711 -4.398 0.475 -6.083 -0.927 c 5.965 -0.524 8.727 -3.03 9.93 -8.016 Z" /></svg></span>发私信</button></div>
                    </div>
                  </div>
                  <div class="Card">
                    <div class="Card-header AnswerInfo-title">
                      <div class="Card-headerText">被收藏 <button class="Button Button--plain" type="button" :contenteditable='edit' v-html='collectionNumber'></button> 次</div>
                    </div>
                    <div class="Card-section AnswerInfo-favlists" data-za-detail-view-path-module="CollectionList" data-za-extra-module='{"card":{"content":null}}'>
                      <div class="AnswerInfo-favlist" data-za-detail-view-path-module="CollectionItem" data-za-extra-module='{"card":{"content":{"type":"Collection","token":"19641505","follower_num":19365,"author_member_hash_id":"5667923476ccf909a19d332aa29e72d3"}}}'>
                        <div class="AnswerInfo-favlist-title"><a title="有趣的回答" class="Button Button--plain" target="_blank" type="button" data-za-detail-view-element_name="Collection">有趣的回答</a></div>
                        <div class="AnswerInfo-favlist-author"><span class="UserLink"><a class="UserLink-link" target="_blank" data-za-detail-view-element_name="Author">光风</a></span> 创建</div>
                        <div class="AnswerInfo-favlist-followers">19,365 人关注</div>
                      </div>
                      <div class="AnswerInfo-favlist" data-za-detail-view-path-module="CollectionItem" data-za-extra-module='{"card":{"content":{"type":"Collection","token":"36316871","follower_num":5338,"author_member_hash_id":"c1b4dc828f3e3f70a01936971443a75d"}}}'>
                        <div class="AnswerInfo-favlist-title"><a title="浩瀚的宇宙和漫漫的浮生" class="Button Button--plain" target="_blank" type="button" data-za-detail-view-element_name="Collection">浩瀚的宇宙和漫漫的浮生</a></div>
                        <div class="AnswerInfo-favlist-author"><span class="UserLink"><a class="UserLink-link" target="_blank" data-za-detail-view-element_name="Author">海蒲</a></span> 创建</div>
                        <div class="AnswerInfo-favlist-followers">5,338 人关注</div>
                      </div>
                      <div class="AnswerInfo-favlist" data-za-detail-view-path-module="CollectionItem" data-za-extra-module='{"card":{"content":{"type":"Collection","token":"20132596","follower_num":1417,"author_member_hash_id":"9d89b1b67de3a6c9202e44315dcaec52"}}}'>
                        <div class="AnswerInfo-favlist-title"><a title="watch later" class="Button Button--plain" target="_blank" type="button" data-za-detail-view-element_name="Collection">watch later</a></div>
                        <div class="AnswerInfo-favlist-author"><span class="UserLink"><a class="UserLink-link" target="_blank" data-za-detail-view-element_name="Author">丁鹄儒</a></span> 创建</div>
                        <div class="AnswerInfo-favlist-followers">1,417 人关注</div>
                      </div>
                      <div class="AnswerInfo-favlist" data-za-detail-view-path-module="CollectionItem" data-za-extra-module='{"card":{"content":{"type":"Collection","token":"19552963","follower_num":236,"author_member_hash_id":"5667923476ccf909a19d332aa29e72d3"}}}'>
                        <div class="AnswerInfo-favlist-title"><a title="马克" class="Button Button--plain" target="_blank" type="button" data-za-detail-view-element_name="Collection">马克</a></div>
                        <div class="AnswerInfo-favlist-author"><span class="UserLink"><a class="UserLink-link" target="_blank" data-za-detail-view-element_name="Author">光风</a></span> 创建</div>
                        <div class="AnswerInfo-favlist-followers">236 人关注</div>
                      </div>
                      <div class="AnswerInfo-favlist" data-za-detail-view-path-module="CollectionItem" data-za-extra-module='{"card":{"content":{"type":"Collection","token":"72477649","follower_num":119,"author_member_hash_id":"6ea0e5d46c29ef0747d6eec92b1357af"}}}'>
                        <div class="AnswerInfo-favlist-title"><a title="感兴趣的有用的" class="Button Button--plain" target="_blank" type="button" data-za-detail-view-element_name="Collection">感兴趣的有用的</a></div>
                        <div class="AnswerInfo-favlist-author"><span class="UserLink"><a class="UserLink-link" target="_blank" data-za-detail-view-element_name="Author">傻傻</a></span> 创建</div>
                        <div class="AnswerInfo-favlist-followers">119 人关注</div>
                      </div>
                    </div>
                  </div>
                  <div class="Card" data-za-detail-view-path-module="RelatedQuestions" data-za-extra-module='{"card":{"content":null}}'>
                    <div class="Card-header SimilarQuestions-title">
                      <div class="Card-headerText">相关问题</div>
                    </div>
                    <div class="Card-section SimilarQuestions-list">
                      <div class="SimilarQuestions-item" itemtype="http://schema.org/Question" itemscope="" itemprop="zhihu:similarQuestion" data-za-detail-view-path-module="QuestionItem" data-za-extra-module='{"card":{"content":{"type":"Question","token":"61647906"}}}'>
                        <a class="Button Button--plain" target="_blank" type="button">有没有什么有含义的网名？</a> 8 个回答</div>
                      <div class="SimilarQuestions-item" itemtype="http://schema.org/Question" itemscope="" itemprop="zhihu:similarQuestion" data-za-detail-view-path-module="QuestionItem" data-za-extra-module='{"card":{"content":{"type":"Question","token":"287909511"}}}'>
                        <a class="Button Button--plain" target="_blank" type="button">取过什么惊艳的网名？</a> 3 个回答</div>
                      <div class="SimilarQuestions-item" itemtype="http://schema.org/Question" itemscope="" itemprop="zhihu:similarQuestion" data-za-detail-view-path-module="QuestionItem" data-za-extra-module='{"card":{"content":{"type":"Question","token":"59142292"}}}'>
                        <a class="Button Button--plain" target="_blank" type="button">有没有很好听的网名？</a> 111 个回答</div>
                      <div class="SimilarQuestions-item" itemtype="http://schema.org/Question" itemscope="" itemprop="zhihu:similarQuestion" data-za-detail-view-path-module="QuestionItem" data-za-extra-module='{"card":{"content":{"type":"Question","token":"58213013"}}}'>
                        <a class="Button Button--plain" target="_blank" type="button">有什么好听的网名吗？</a> 6 个回答</div>
                      <div class="SimilarQuestions-item" itemtype="http://schema.org/Question" itemscope="" itemprop="zhihu:similarQuestion" data-za-detail-view-path-module="QuestionItem" data-za-extra-module='{"card":{"content":{"type":"Question","token":"47274584"}}}'>
                        <a class="Button Button--plain" target="_blank" type="button">是否有自己多年不想更换的、有故事的网名昵称等？</a> 12 个回答</div>
                    </div>
                  </div>
                  <div class="Card" data-za-detail-view-path-module="ContentList" data-za-extra-module='{"card":{"content":null}}' data-za-detail-view-path-module_name="相关推荐">
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
                          <div class="RelatedCommodities-subject" data-tooltip="我们为什么上班？">我们为什么上班？</div>
                          <div class="RelatedCommodities-description">张佳玮</div>
                          <div class="RelatedCommodities-meta">
                            <div class="RelatedCommodities-bookMeta">5,170 人读过<span class="RelatedCommodities-bookRead"><span style="display: inline-flex; align-items: center;">​<svg xmlns="http://www.w3.org/2000/svg" class="Zi Zi--Ebook" fill="currentColor" viewBox="0 0 24 24" width="13" height="14">
                                    <path fill-rule="evenodd" d="M 16 17.649 V 2.931 a 0.921 0.921 0 0 0 -0.045 -0.283 a 0.943 0.943 0 0 0 -1.182 -0.604 L 4.655 5.235 A 0.932 0.932 0 0 0 4 6.122 v 14.947 c 0 0.514 0.421 0.931 0.941 0.931 H 19.06 c 0.52 0 0.941 -0.417 0.941 -0.93 V 7.292 a 0.936 0.936 0 0 0 -0.941 -0.931 h -0.773 v 12.834 a 0.934 0.934 0 0 1 -0.83 0.924 L 6.464 21.416 c -0.02 0.002 2.94 -0.958 8.883 -2.881 a 0.932 0.932 0 0 0 0.653 -0.886 Z" /></svg></span>阅读</span></div>
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
      edit: true,
      nickname: "对抗假截图",
      avatar: json.avatar,
      zhihu_recommend_0: json.zhihu_recommend_0,
      zhihu_recommend_1: json.zhihu_recommend_1,
      title: "你听过最美的网名是什么？",
      description:
        "问题描述：好久没有上来看，发现已经有好多回答了。第一次知乎提问，谢谢大家的答案～",
      questionCommentNumber: "99,999",
      followers: "99,999",
      views: "9,999,999",
      slogan: "TheGreatJavaScript: https://github.com/thegreatjavascript",
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
      from: "iPhone客户端",
      time: "2019-02-24",
      content: "项目的意义",
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
</style>