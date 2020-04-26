// 展示文本输入框
const fetchTextArea = html => {
  return $(`<div class='fakescreenshot-textarea' >
  <svg class='close' t="1586265494105" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3379" width="32" height="32"><path d="M597.795527 511.488347 813.564755 295.718095c23.833825-23.833825 23.833825-62.47489 0.001023-86.307691-23.832801-23.832801-62.47489-23.833825-86.307691 0L511.487835 425.180656 295.717583 209.410404c-23.833825-23.833825-62.475913-23.833825-86.307691 0-23.832801 23.832801-23.833825 62.47489 0 86.308715l215.769228 215.769228L209.410915 727.258599c-23.833825 23.833825-23.833825 62.47489 0 86.307691 23.832801 23.833825 62.473867 23.833825 86.307691 0l215.768205-215.768205 215.769228 215.769228c23.834848 23.833825 62.475913 23.832801 86.308715 0 23.833825-23.833825 23.833825-62.47489 0-86.307691L597.795527 511.488347z" p-id="3380" fill="#00a7ea"></path></svg>
    <div class='textarea' contenteditable='true'>
      ${html}
    </div>
    <svg class='confirm' t="1586362754871" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1160" width="64" height="64"><path d="M905.211035 177.049369c-61.680804-46.705742-149.484569-34.533514-196.190311 27.114544L455.383026 539.107381 287.91999 412.320767c-61.681828-46.705742-149.553131-34.567283-196.190311 27.079752-46.705742 61.680804-34.602076 149.518339 27.079752 196.223057l279.138488 211.302497c61.680804 46.706765 149.485593 34.602076 196.190311-27.079752l338.152557-446.607664C978.996528 311.592644 966.824301 223.75511 905.211035 177.049369z" p-id="1161" fill="#00a7ea"></path></svg>
  </div>
  <style>
    .fakescreenshot-textarea{
      z-index: 100000;
      position: fixed;
      top: 15vh;
      left: calc(50vw - 200px);
      width: 440px;
      height: 190px;
      border-radius: 4px;
      border: 1px solid #ebeef5;
      background-color: #fff;
      overflow: hidden;
      color: #303133;
      transition: .3s;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      padding: 20px;
    }
    .fakescreenshot-textarea .textarea{
      overflow: hidden;
      width: 100%;
      height: 100%;
      background-color: #fff;
      color: #606266;
      line-height: 1.5;
      padding: 5px 15px;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      box-sizing: border-box;
    }
    .fakescreenshot-textarea .textarea img{
      width: 100%;
    }
    .fakescreenshot-textarea .textarea:hover{
      border-color: #c0c4cc;
    }
    .fakescreenshot-textarea .textarea:focus{
      border-color: #00a7ea;
      outline: none;
    }
    .fakescreenshot-textarea .close{
      position: absolute;
      top: 3px;
      right: 3px;
      width: 17px;
      height: 17px;
      z-index: 20;
    }
    .fakescreenshot-textarea .confirm{
      position: absolute;
      bottom: 22px;
      right: 25px;
      width: 25px;
      height: 25px;
      z-index: 20;
    }
  </style>`);
};

const initTextarea = (targetDOM, html) => {
  let dom = $('.fakescreenshot-textarea');

  if (!dom.length) {
    // 如果第一次添加此DOM
    dom = fetchTextArea(html);
    dom.find('.close').click(() => {
      dom.find('.textarea').empty();
      dom.hide();
    });

    $('body').append(dom);
  } else {
    dom.find('.textarea').html(html);
    // TODO 动画效果
    dom.show();
  }

  dom
    .find('.confirm')
    .off('click')
    .click(() => {
      const newHTML = dom.find('.textarea').html();
      targetDOM.html(newHTML);
      dom.hide();
    });

  dom.find('.textarea').focus();
};

const parseStyle = obj => {
  let style = '';
  for (let [key, value] of Object.entries(obj)) {
    style += `${key}:${value};`;
  }

  return style;
};

// 打上项目水印
const watermark = ({ opacity = 0.005, left, top, width, height, lineHeight, letterSpacing, fontSize = '14', fontColor, textLength, type }) => {
  // 水印在字体14px的情况下所占的面积。
  let text = 'Made by FakeScreenshot';

  // 如果文字类型，那么大概估算需要的水印文字量。（尽量在视觉上占满原DOM）
  if (type === 1 || type === 2) {
    // 考虑到一个汉字宽度 = 两个字母宽度
    text = text.repeat((textLength / text.length) * 2);
  } else if (type === 3) {
    text = text.repeat(Math.floor((width * height) / 4000));
  }

  console.log(fontSize, width, height, top, left);

  const style = {
    opacity: opacity,
    position: 'absolute',
    left: left + 'px',
    top: top + 5 + 'px', // 稍微偏移，方便识别
    'pointer-events': 'none',
    color: fontColor,
    'z-index': 999999,
    'font-size': type === 3 ? '40px' : fontSize + 'px',
    width: width + 'px',
    height: height + 'px',
    'line-height': lineHeight,
    'letter-spacing': letterSpacing,
    'word-break': 'break-all',
    'font-weight': 'bold',
  };

  const waterDOM = $(`<div name='madebyfakescreenshot' style="${parseStyle(style)}">${text}</div>`);

  $('body').append(waterDOM);
};

// 存放用户右键时的DOM
let $tempDOM;
// DOM的屏幕位置信息
let offset = {};

window.oncontextmenu = e => {
  const target = e.target;
  $tempDOM = $(target);
  const temp = $tempDOM.offset();
  offset.left = temp.left;
  offset.top = temp.top;
  offset.width = $tempDOM.width();
  offset.height = $tempDOM.height();
  offset.fontColor = $tempDOM.css('color');
  offset.lineHeight = $tempDOM.css('line-height');
  offset.letterSpacing = $tempDOM.css('letter-spacing');
  offset.fontSize = $tempDOM.css('font-size').replace('px', '');
  offset.textLength = $tempDOM.text().length;
};

chrome.runtime.onMessage.addListener(function(request) {
  if (!$tempDOM || !$tempDOM.length) {
    alert('请将鼠标置于页面文字/图片上 —> 鼠标右键 —> FakeScreenshot');
    return;
  }

  /**
   * 修改文字（就地）
   * 如果类型为1，并且没有修改过
   */
  if (request.type === 1 && !$tempDOM.attr('contenteditable')) {
    // clone是为了去除元素原有的点击事件（比如点击就展开文本）
    const clone = $tempDOM.clone();
    clone.attr('contenteditable', true);
    $tempDOM.replaceWith(clone);
    clone.focus();
    watermark({
      ...offset,
      type: request.type,
    });
  } else if (request.type === 2) {
    // 修改文字（弹框）
    initTextarea($tempDOM, $tempDOM.html());
    watermark({
      ...offset,
      type: request.type,
    });
  } else if (request.type === 3) {
    // 修改图片
    $tempDOM.image(offset);

    // 图片的水印视觉上可以看到
    watermark({
      ...offset,
      type: request.type,
      opacity: 0.02,
    });
  }

  // 置空，为了在用户右键扩展图标进入时做判断。
  $tempDOM = null;
});
