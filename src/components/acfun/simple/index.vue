<template>
  <div>
    <div class='toolbard'>
      <el-button type="primary" icon="el-icon-edit" size="medium" @click='changeMode' plain>{{edit ? '确认' : '编辑内容'}}</el-button>
      <el-button type="success" icon='el-icon-success' size="medium" @click='generageScreenShot' plain>生成截图</el-button>
      <el-upload :show-file-list="false" action="" :on-success="handlePicSuccess" :before-upload="beforePicUpload">
        <el-button type="warning" icon='el-icon-success' size="medium" plain>更换头像</el-button>
      </el-upload>
    </div>
    <div id="DIV_1">
      <div id="header" class="header clearfix">
        <nav id="nav" class="wp nav">
          <div class="clearfix wp nav-parent">
            <ul class="fl">
              <h1 class="fl logo">
                <a>
                  <img src="http://cdn.aixifan.com/acfun-pc/2.6.48/img/logo.png" width="88" height="27">
                </a>
              </h1>
              <li data-category="112" data-cid="177">
                <a>AC正义</a>
              </li>
              <li data-category="105" data-cid="155">
                <a>番剧</a>
              </li>
              <li data-category="14" data-cid="1">
                <a>动画</a>
              </li>
              <li data-category="16" data-cid="58">
                <a>音乐</a>
              </li>
              <li data-category="17" data-cid="123">
                <a>舞蹈·偶像</a>
              </li>
              <li data-category="15" data-cid="59">
                <a>游戏</a>
              </li>
              <li data-category="18" data-cid="60">
                <a>娱乐</a>
              </li>
              <li data-category="19" data-cid="70">
                <a>科技</a>
              </li>
              <li data-category="20" data-cid="68">
                <a>影视</a>
              </li>
              <li data-category="21" data-cid="69">
                <a>体育</a>
              </li>
              <li data-category="22" data-cid="125">
                <a>鱼塘</a>
              </li>
              <li data-category="24" data-cid="63">
                <a>文章</a>
              </li>
              <li data-category="25" data-cid="0">
                <a>合辑</a>
              </li>
            </ul>
            <ol id="header-guide" class="fr header-guide">
              <li class="guide-item guide-user user-logined">
                <a target="_blank" class="user-avatar item" style="display: inline;">
                  <img src="http://cdn.aixifan.com/dotnet/20120923/style/image/avatar.jpg" width="30" height="30">
                </a>
                <a target="_blank" class="item user-login">登录/注册</a>
                <span class="user-message-count" v-html='msgnum' :contenteditable="edit" @input="changeMessage">2</span>
                <div class="guide-item-con">
                  <p class="clearfix">
                    <a target="_blank" class="fl user-name">还能咋地啊</a>
                    <a class="fr icon icon-logout user-logout">退出</a>
                  </p>
                  <div id="user-message" class="user-message">
                    <ul id="user-message-con" data-count="2" data-url="http://www.acfun.cn/member/#area=push">
                      <li>
                        <a class="unit" target="_blank">
                          您有
                          <span class="pts">2</span>条新推送
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a target="_blank" class="more">查看更多</a>
                </div>
              </li>
              <li class="guide-item guide-history">
                <a target="_blank" class="icon icon-history item"></a>
                <div class="guide-item-con">
                  <ul></ul>
                  <a target="_blank" class="more">查看更多</a>
                </div>
              </li>
              <li class="guide-item guide-upload">
                <a target="_blank" class="icon icon-upload item"></a>
                <div class="guide-item-con">
                  <ul>
                    <li>
                      <a target="_blank">投视频</a>
                    </li>
                    <li>
                      <a target="_blank">投文章</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="guide-item">
                <a target="_blank" class="icon icon-collect item"></a>
              </li>
            </ol>
            <div id="search-box" class="fr search-box">
              <form id="search-form" target="_blank" method="get" action="http://www.acfun.cn/search/">
                <input id="search-text" type="text" placeholder="【AGN】鬼泣5 ACer自己的评测" data-url="http://www.acfun.cn/a/ac5001046" value autocomplete="off" maxlength="30">
                <button id="search-btn" class="search-btn">
                  <i class="icon icon-search"></i>
                  <span>搜索</span>
                </button>
                <div class="search-result hidden"></div>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div id="main" class="main">
        <section class="clearfix area contentBottom wp">
          <section class="clearfix wp area head"></section>
          <div class="content wp clearfix area">
            <div class="fl">
              <section class="art-title">
                <div class="art-title-head">
                  <div class="caption" v-html='title' :contenteditable="edit" @input="changeContent">客观分析为什么【旗水卡卡东】会被喷成狗</div>
                  <div class="art-title-census">
                    <div class="article-parent">
                      <a target="_blank" class="art-channel">文章</a>
                      <span>&nbsp;&gt;&nbsp;</span>
                      <a target="_blank" class="sort-channel">生活情感</a>
                      <span>&nbsp;&gt;&nbsp;</span>
                      <a target="_blank" class="sort-channel">吐槽</a>
                    </div>
                    <div class="census-left">
                      <div class="viewcount">
                        <span>阅读量：</span>
                        <span class="quanity">1.0万</span>
                      </div>
                      <div class="comcount">
                        <span>评论：</span>
                        <span class="quanity">313</span>
                      </div>
                    </div>
                    <div class="census-right">
                      <div class="collectcount">
                        <i class="icon"></i>
                        <span>60</span>
                      </div>
                      <div class="bananacount">
                        <i class="icon"></i>
                        <span>7</span>
                      </div>
                      <div class="sharecount">
                        <i class="icon"></i>
                        <div class="sharehead">
                          <p>分享文章到</p>
                          <div id="bdshare1" data-bd-bind="1552284271746" class="share_box bdsharebuttonbox bdshare-button-style0-16">
                            <a title="分享到新浪微博" data-cmd="tsina" data-plat="WEIBO" class="bds_tsina"></a>
                            <a title="分享到QQ空间" data-cmd="qzone" data-plat="QQ_FRIENDZONE" class="bds_qzone"></a>
                            <a title="分享到百度贴吧" data-cmd="tieba" data-plat="OTHER" class="bds_tieba"></a>
                            <a title="分享到微信朋友圈" data-cmd="weixin" data-plat="WECHAT_FRIENDZONE" class="bds_weixin"></a>
                            <span class="clearfix"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="emoji" style="background-image: url(&quot;http://imgs.aixifan.com/cms/2017_11_07/1510048135861.png&quot;);"></div>
                </div>
              </section>
              <section class="art-subject">
                <div id="filter" class="clearfix"></div>
              </section>
              <section id="article-content">
                <div id="article-up">

                  <div class="up-abstract">
                    <div class="up-name">
                      <div class="upname" v-html='upname' :contenteditable="edit" @input="changeupname">愤怒的鸡儿</div>
                      <div class="up-type" v-html='uptype' :contenteditable="edit" @input="changeuptype">UP主</div>
                      <span class="watermark">什么是真相？fakes.netlify.com</span>
                    </div>
                    <div class="up-time" v-html='time' :contenteditable="edit" @input="changetime">2019年03月10日 18:31:37</div>
                  </div>
                  <div class="action-up">
                    <a class="message-back">回复</a>
                    <a>举报</a>
                  </div>
                </div>
                <div id="article-answer"></div>
                <div id="article-tags" class="clearfix"></div>
                <div class="article-content">
                  <div style="width: 100%; height: 100%; padding: 18px 12px 0px 10px; box-sizing: border-box; font-size: 14px; font-family: PingFangSC-Regular; color: rgb(51, 51, 51);">
                    <div style="font-size: 14px;white-space:pre-wrap;" v-html='content' :contenteditable="edit" @input="changeContentd">
                    </div>
                  </div>
                </div>
                <div id="article-operation" class="clearfix">
                  <div id="art-operate">
                    <div class="art-collect">
                      <div class="icon">
                        <div class="img"></div>
                      </div>
                      <span data-status="0" class="collect">收藏</span>
                    </div>
                    <div class="art-banana">
                      <div class="icon">
                        <div class="img"></div>
                        <div class="push1"></div>
                      </div>
                      <span data-status="0" class="banana">投蕉</span>
                    </div>
                    <div class="art-attitude">
                      <div class="icon" style="background-image: url(&quot;http://imgs.aixifan.com/cms/2017_11_07/1510048135861.png&quot;);"></div>
                      <span class="attitude">你的态度</span>
                      <div id="attitude-all" class="clearfix">
                        <li data-original="http://imgs.aixifan.com/cms/2017_11_07/1510048135861.png" at-index="0" at-id="1" title="at01" class="atd lazy" style="background-image: url(&quot;http://imgs.aixifan.com/cms/2017_11_07/1510048135861.png&quot;); display: list-item;"></li>
                        <li data-original="http://imgs.aixifan.com/cms/2017_11_07/1510048383512.png" at-index="1" at-id="2" title="at02" class="atd lazy" style="background-image: url(&quot;http://imgs.aixifan.com/cms/2017_11_07/1510048383512.png&quot;); display: list-item;"></li>
                        <li data-original="http://imgs.aixifan.com/cms/2017_11_07/1510048389889.png" at-index="2" at-id="3" title="at03" class="atd lazy" style="background-image: url(&quot;http://imgs.aixifan.com/cms/2017_11_07/1510048389889.png&quot;); display: list-item;"></li>
                        <li data-original="http://imgs.aixifan.com/cms/2017_11_07/1510048397323.png" at-index="3" at-id="4" title="at04" class="atd lazy" style="background-image: url(&quot;http://imgs.aixifan.com/cms/2017_11_07/1510048397323.png&quot;); display: list-item;"></li>
                        <li data-original="http://imgs.aixifan.com/cms/2017_11_07/1510048932099.png" at-index="4" at-id="5" title="at05" class="atd lazy" style="background-image: url(&quot;http://imgs.aixifan.com/cms/2017_11_07/1510048932099.png&quot;); display: list-item;"></li>
                        <li data-original="http://imgs.aixifan.com/cms/2017_11_07/1510048413184.png" at-index="5" at-id="6" title="at06" class="atd lazy" style="background-image: url(&quot;http://imgs.aixifan.com/cms/2017_11_07/1510048413184.png&quot;); display: list-item;"></li>
                        <li data-original="http://imgs.aixifan.com/cms/2017_11_07/1510048421370.png" at-index="6" at-id="7" title="at07" class="atd lazy" style="background-image: url(&quot;http://imgs.aixifan.com/cms/2017_11_07/1510048421370.png&quot;); display: list-item;"></li>
                        <li data-original="http://imgs.aixifan.com/cms/2017_11_07/1510049022057.PNG" at-index="7" at-id="8" title="at08" class="atd lazy" style="background-image: url(&quot;http://imgs.aixifan.com/cms/2017_11_07/1510049022057.PNG&quot;); display: list-item;"></li>
                        <li data-original="http://imgs.aixifan.com/cms/2017_11_07/1510048433787.png" at-index="8" at-id="9" title="at09" class="atd lazy" style="background-image: url(&quot;http://imgs.aixifan.com/cms/2017_11_07/1510048433787.png&quot;); display: list-item;"></li>
                        <li data-original="http://imgs.aixifan.com/cms/2017_11_07/1510048439352.png" at-index="9" at-id="10" title="at10" class="atd lazy" style="background-image: url(&quot;http://imgs.aixifan.com/cms/2017_11_07/1510048439352.png&quot;); display: list-item;"></li>
                        <li data-original="http://imgs.aixifan.com/cms/2017_11_07/1510048449031.png" at-index="10" at-id="11" title="at11" class="atd lazy" style="background-image: url(&quot;http://imgs.aixifan.com/cms/2017_11_07/1510048449031.png&quot;); display: list-item;"></li>
                        <li data-original="http://imgs.aixifan.com/cms/2017_11_07/1510048457101.png" at-index="11" at-id="12" title="at12" class="atd lazy" style="background-image: url(&quot;http://imgs.aixifan.com/cms/2017_11_07/1510048457101.png&quot;); display: list-item;"></li>
                        <li data-original="http://imgs.aixifan.com/cms/2017_11_07/1510048465023.png" at-index="12" at-id="13" title="at13" class="atd lazy" style="background-image: url(&quot;http://imgs.aixifan.com/cms/2017_11_07/1510048465023.png&quot;); display: list-item;"></li>
                        <li data-original="http://imgs.aixifan.com/cms/2017_11_07/1510048471249.png" at-index="13" at-id="14" title="at14" class="atd lazy" style="background-image: url(&quot;http://imgs.aixifan.com/cms/2017_11_07/1510048471249.png&quot;); display: list-item;"></li>
                        <li data-original="http://imgs.aixifan.com/cms/2017_11_07/1510048476850.png" at-index="14" at-id="15" title="at15" class="atd lazy" style="background-image: url(&quot;http://imgs.aixifan.com/cms/2017_11_07/1510048476850.png&quot;); display: list-item;"></li>
                        <li data-original="http://imgs.aixifan.com/cms/2017_11_07/1510048482297.png" at-index="15" at-id="16" title="at16" class="atd lazy" style="background-image: url(&quot;http://imgs.aixifan.com/cms/2017_11_07/1510048482297.png&quot;); display: list-item;"></li>
                        <li data-original="http://imgs.aixifan.com/cms/2017_11_07/1510048487509.png" at-index="16" at-id="17" title="at17" class="atd lazy" style="background-image: url(&quot;http://imgs.aixifan.com/cms/2017_11_07/1510048487509.png&quot;); display: list-item;"></li>
                        <li data-original="http://imgs.aixifan.com/cms/2017_11_07/1510048493240.png" at-index="17" at-id="18" title="at18" class="atd lazy" style="background-image: url(&quot;http://imgs.aixifan.com/cms/2017_11_07/1510048493240.png&quot;); display: list-item;"></li>
                      </div>
                    </div>
                  </div>
                  <div id="bdshare" data-bd-bind="1552284271746" class="share_box fr bdsharebuttonbox bdshare-button-style0-16">
                    <a title="分享到新浪微博" data-cmd="tsina" data-plat="WEIBO" class="bds_tsina"></a>
                    <a title="分享到QQ空间" data-cmd="qzone" data-plat="QQ_FRIENDZONE" class="bds_qzone"></a>
                    <a title="分享到百度贴吧" data-cmd="tieba" data-plat="OTHER" class="bds_tieba"></a>
                    <a title="分享到微信朋友圈" data-cmd="weixin" data-plat="WECHAT_FRIENDZONE" class="bds_weixin"></a>
                    <span class="clearfix"></span>
                  </div>
                  <div class="share-more fr">
                    分享
                    <span class="icon fr"></span>
                  </div>
                </div>
              </section>
            </div>
            <div class="fr">
              <section id="up-info">
                <div class="up-detail">
                  <img class="upcover" :src="picture" alt="">

                  <a target="_blank" class="upname">
                    <p v-html='upname' :contenteditable="edit" @input="changeupname" class="name float">{{upname}}</p>
                    <p class="desc"></p>
                  </a>
                </div>
                <ul class="up-census">
                  <li class="vote">
                    <div class="count" v-html='ovtenum' :contenteditable="edit" @input="changeupvote">1</div>
                    <div class="type">投稿</div>
                  </li>
                  <li data-status="0" class="focus">
                    <div class="count" v-html='focusnum' :contenteditable="edit" @input="changeupfocus">2</div>
                    <div class="type">关注</div>
                  </li>
                  <li class="follow">
                    <div class="count" v-html='follownum' :contenteditable="edit" @input="changeupfollow">4</div>
                    <div class="type">粉丝</div>
                  </li>
                </ul>
                <div class="up-operate">
                  <div class="focus">关注</div>
                  <a target="_blank" class="mail">私信</a>
                </div>
              </section>
              <section id="up-contributions" data-impr-config="{&quot;id&quot;:&quot;article-new-contribute&quot;,&quot;selector&quot;:&quot;.weblog-item&quot;,&quot;pullid&quot;:&quot;5277176762D636AF&quot;,&quot;reqid&quot;:&quot;5277176762D636AF_76cf5f6fc32a6b5cc05d461e935e381d_article-new-contribute&quot;}">
                <div class="ctb-head">
                  <h1 class="ctb-title">最新投稿</h1>
                  <a target="_blank" class="showall">全部</a>
                </div>
                <div class="contributions">
                  <div class="contribution weblog-item" data-show="true">
                    <p class="contb-title tit">
                      <a target="blank" v-html='title' :contenteditable="edit" @input="changeContent" data-wbinfo="{&quot;atomid&quot;:5010673,&quot;mediaId&quot;:5010673}"></a>
                    </p>
                    <div class="contb-count">
                      <div class="view-count">
                        <i class="view"></i>
                        <span class="count num">1.7万</span>
                      </div>
                      <div class="comm-count">
                        <i class="comm"></i>
                        <span class="count num">313</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section id="up-contvideo" style="display: none;">
                <h1 class="video-head">稿件中的视频</h1>
                <div class="videolist"></div>
                <script type="text/template" id="article-video">
                  <div class="video-temp">
                  <div data-original="[url]" style="background-image:url()" class="video-img">
                 
                  </div>
                  
                  <div class="video-count">
                    <div class="view-bonus">
                      <i class="view" />
                      <span class="bonus num">[view_bonus]</span>
                    </div>
                    <div class="comm-bonus">
                      <i class="comm"> </i>
                      <span class="bonus num">[comm_bonus]</span>
                    </div>
                  </div>
                </div>;
              </script>
              </section>
              <section id="realate-article" data-impr-config="{&quot;id&quot;:&quot;article-relate-contribute&quot;,&quot;selector&quot;:&quot;.weblog-item&quot;,&quot;pullid&quot;:&quot;7107727059A6FC28&quot;,&quot;reqid&quot;:&quot;7107727059A6FC28_76cf5f6fc32a6b5cc05d461e935e381d_article-relate-contribute&quot;}">
                <div class="relate-head">相关文章</div>
                <div class="relate-list">
                  <div class="relate-temp weblog-item" data-show="true">
                    <div class="relate-title tit">
                      <a target="blank" data-wbinfo="{&quot;atomid&quot;:&quot;ac1040781&quot;,&quot;mediaId&quot;:&quot;ac1040781&quot;}">俄罗斯“冰王子”普鲁申科宣布退役</a>
                    </div>
                    <div class="relate-total">
                      <div class="view-total">
                        <i class="view"></i>
                        <span class="total num">1.6万</span>
                      </div>
                      <div class="comm-total">
                        <i class="comm"></i>
                        <span class="total num">36</span>
                      </div>
                    </div>
                  </div>
                  <div class="relate-temp weblog-item" data-show="true">
                    <div class="relate-title tit">
                      <a target="blank" data-wbinfo="{&quot;atomid&quot;:&quot;ac1042658&quot;,&quot;mediaId&quot;:&quot;ac1042658&quot;}">LOL同人 瓦罗兰有时星光闪耀 03 格雷福斯</a>
                    </div>
                    <div class="relate-total">
                      <div class="view-total">
                        <i class="view"></i>
                        <span class="total num">6,812</span>
                      </div>
                      <div class="comm-total">
                        <i class="comm"></i>
                        <span class="total num">10</span>
                      </div>
                    </div>
                  </div>
                  <div class="relate-temp weblog-item" data-show="true">
                    <div class="relate-title tit">
                      <a target="blank" data-wbinfo="{&quot;atomid&quot;:&quot;ac1043094&quot;,&quot;mediaId&quot;:&quot;ac1043094&quot;}">【漫画】多米诺 第01话</a>
                    </div>
                    <div class="relate-total">
                      <div class="view-total">
                        <i class="view"></i>
                        <span class="total num">5,340</span>
                      </div>
                      <div class="comm-total">
                        <i class="comm"></i>
                        <span class="total num">6</span>
                      </div>
                    </div>
                  </div>
                  <div class="relate-temp weblog-item" data-show="true">
                    <div class="relate-title tit">
                      <a target="blank" data-wbinfo="{&quot;atomid&quot;:&quot;ac1043246&quot;,&quot;mediaId&quot;:&quot;ac1043246&quot;}">少年Y 12-14话</a>
                    </div>
                    <div class="relate-total">
                      <div class="view-total">
                        <i class="view"></i>
                        <span class="total num">3,952</span>
                      </div>
                      <div class="comm-total">
                        <i class="comm"></i>
                        <span class="total num">5</span>
                      </div>
                    </div>
                  </div>
                  <div class="relate-temp weblog-item" data-show="true">
                    <div class="relate-title tit">
                      <a target="blank" data-wbinfo="{&quot;atomid&quot;:&quot;ac1043290&quot;,&quot;mediaId&quot;:&quot;ac1043290&quot;}">重庆：两代人接力赡养陌生聋哑老太11年</a>
                    </div>
                    <div class="relate-total">
                      <div class="view-total">
                        <i class="view"></i>
                        <span class="total num">5,372</span>
                      </div>
                      <div class="comm-total">
                        <i class="comm"></i>
                        <span class="total num">11</span>
                      </div>
                    </div>
                  </div>
                </div>
                <script type="text/template" id="article-relate-temp">
                  <div class="relate-temp weblog-item">
                  <div class="relate-title tit">
                    
                  </div>
                  <div class="relate-total">
                    <div class="view-total">
                      <i class="view" />
                      <span class="total num">[views]</span>
                    </div>
                    <div class="comm-total">
                      <i class="comm" />
                      <span class="total num"> [comments]</span>
                    </div>
                  </div>
                </div>;
              </script>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
    <el-dialog title="" :visible.sync="dialogVisible" @opened='showImage' width="95%" top='2vh'>
      <div id='image-container'>
      </div>
      <span slot="footer" class="dialog-footer">
        <a id="download" download="shuirong.png">
          <el-button type="primary" @click="download">下载图片</el-button>
        </a>
      </span>
    </el-dialog>
  </div>
</template>


<script>
import html2canvas from "html2canvas";
export default {
  data() {
    return {
      dialogVisible: false,
      title: "关于本项目：虚假截图/FakeScreenshot",
      edit: false,
      upname: "三大赵日天",
      uptype: "up主",
      ovtenum: 1,
      focusnum: 1,
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
      follownum: 1,
      msgnum: 1,
      canvas: "",
      time: "2019年03月10日 18:31:37",
      mentionPerson: "",
      isMentioned: false,
      picture:
        "http://cdn.aixifan.com/dotnet/artemis/u/cms/www/201903/10183608dmsp7ht0.jpg",
      imageUrl: ""
    };
  },
  methods: {
    changetime(e) {
      let titleText = e.target.innerHTML;
      console.log(titleText);
      this.time = titleText;
    },
    download() {
      let download = document.getElementById("download");
      let image = document
        .querySelector("canvas")
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      download.setAttribute("href", image);
    },
    showImage() {
      const dom = document.querySelector("#image-container");
      if (dom.childNodes.length) {
        dom.removeChild(dom.childNodes[0]);
      }
      dom.appendChild(this.canvas);
    },
    changeMessage(e) {
      let titleText = e.target.innerHTML;
      this.msgnum = titleText;
    },
    changeContent(e) {
      let titleText = e.target.innerHTML;
      this.title = titleText;
    },
    changeContentd(e) {},
    changeupname(e) {
      this.upname = e.target.innerHTML;
    },
    changeupfollow(e) {
      this.follownum = e.target.innerHTML;
    },
    changeupfocus(e) {
      this.focusnum = e.target.innerHTML;
    },
    changeupvote(e) {
      this.ovtenum = e.target.innerHTML;
    },
    changeuptype(e) {},
    changeMode() {
      this.edit = !this.edit;
    },
    handlePicSuccess(res, file) {
      this.picture = URL.createObjectURL(file.raw);
    },
    random() {
      const result = list[Math.floor(Math.random() * list.length)];
      this.nickname = result.nickname;
      this.content = result.content;
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    },
    beforePicUpload(file) {
      this.getBase64(file).then(res => {
        this.picture = res;
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
    }
  }
};
</script>



<style  lang='scss' scoped>
@import "./index.css";
#DIV_1 {
  padding: 10px 0;
}
.toolbard {
  display: flex;
  width: 500px;
  margin: 0 auto;
  justify-content: space-between;
}
.el-button + .el-button {
  margin-left: 0;
}
.watermark {
  transform: rotate(180deg);
  color: #999;
}
</style>
