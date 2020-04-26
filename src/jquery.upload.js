(function($) {
  const setBackgroundImage = ($dom, base64) => {
    $dom.css('background-image', `url(${base64})`);
  };

  const initDOM = ({ left, top }) => {
    return $(`<div class='fakescreenshot-upload'><input type='file' ref='files' id='uploadImg'><svg class='upload icon' t="1586262308780" viewBox="0 0 1570 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2120" width="128" height="128"><path d="M1283.072 430.933333c0-4.266667 0.7168-8.533333 0.7168-12.8C1283.7888 187.050667 1102.2336 0 878.2848 0c-161.553067 0-300.373333 97.416533-365.568 238.250667a205.243733 205.243733 0 0 0-93.866667-23.1424c-103.424 0-189.6448 77.858133-206.097066 179.541333C88.6784 438.0672 0 558.626133 0 700.450133 0 878.933333 140.526933 1024 313.685333 1024h359.2192v-284.433067h-168.925866L785.066667 441.924267l281.088 297.301333h-168.96v284.433067h386.594133c158.4128 0 286.344533-133.358933 286.344533-296.5504 0-163.191467-128.6144-295.8336-287.061333-296.174934z" p-id="2121" fill="#00a7ea"></path></svg><svg class='close' t="1586265494105" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3379" width="32" height="32"><path d="M597.795527 511.488347 813.564755 295.718095c23.833825-23.833825 23.833825-62.47489 0.001023-86.307691-23.832801-23.832801-62.47489-23.833825-86.307691 0L511.487835 425.180656 295.717583 209.410404c-23.833825-23.833825-62.475913-23.833825-86.307691 0-23.832801 23.832801-23.833825 62.47489 0 86.308715l215.769228 215.769228L209.410915 727.258599c-23.833825 23.833825-23.833825 62.47489 0 86.307691 23.832801 23.833825 62.473867 23.833825 86.307691 0l215.768205-215.768205 215.769228 215.769228c23.834848 23.833825 62.475913 23.832801 86.308715 0 23.833825-23.833825 23.833825-62.47489 0-86.307691L597.795527 511.488347z" p-id="3380" fill="#00a7ea"></path></svg></div>
    <style>
    .fakescreenshot-upload{
      z-index: 100000;
      position: absolute;
      top: ${top - 90}px;
      left: ${left}px;
      width: 80px;
      height: 80px;
      border-radius: 5px;
      box-shadow: 0 0 10px #dddddd;
      background: white;
    }
    .fakescreenshot-upload input{
      width: 80px;
      height: 80px;
      opacity: 0;
      z-index: 10;
      position: absolute;
      top: 0;
      left: 0;
    }
    .fakescreenshot-upload svg.upload{
      position: absolute;
      top: 0;
      left: 0;
      width: 80px;
      height: 80px;
      padding: 15px;
      box-sizing: border-box;
    }
    .fakescreenshot-upload svg.close{
      position: absolute;
      top: 3px;
      right: 3px;
      width: 20px;
      height: 20px;
      display: none;
      z-index: 20;
    }
    </style>`);
  };

  $.fn.image = function(options) {
    const _this = this;

    const inputChange = e => {
      const files = e.target.files[0];
      const reader = new FileReader();
      reader.onload = ee => {
        const base64 = ee.target.result;

        if (_this.prop('tagName') === 'IMG') {
          // 如果是image标签
          _this.attr('src', base64);
        } else if (_this.css('background-image') !== 'none') {
          // 如果图片是通过背景图来显示的
          setBackgroundImage(_this, base64);
        } else {
          // 如果图片在某个子元素中（img/背景图）

          // 目标元素
          let target = false;
          // 类型
          let type = '';
          // 遍历计数控制器
          let count = 0;
          // 深度优先遍历
          let stack = _this.children();
          while (!target && stack.length && count < 100) {
            count++;
            const element = $(stack.splice(0, 1));

            if (element.prop('tagName') === 'IMG' || _this.css('background-image') !== 'none') {
              target = element;
              type = element.prop('tagName') === 'IMG' ? 'IMG' : 'BGI';
              break;
            }

            const children = element.children();
            if (children.length) {
              $.merge(stack, children);
            }
          }

          if (type === 'IMG') {
            target.attr('src', base64);
          } else if (type === 'BGI') {
            setBackgroundImage(target, base64);
          } else {
            // console.error('没有找到图片所在元素，目标：', _this, 'count次数：', count);
          }
        }

        // 删除srcset属性，不管它存在不存在。
        // 知乎有这个东西
        _this.removeAttr('srcset');

        fakescreenshot.hide();
      };
      reader.readAsDataURL(files);
    };

    let fakescreenshot = $('.fakescreenshot-upload');
    if (!fakescreenshot.length) {
      // 第一次调用时才塞入
      const dom = initDOM(options);
      $('body').prepend(dom);
      fakescreenshot = dom;

      fakescreenshot.hover(function() {
        $(this)
          .find('svg.close')
          .show();
      });
      fakescreenshot.mouseout(function(e) {
        if (e.toElement && !$(e.toElement).parents('.fakescreenshot-upload').length) {
          $(this)
            .find('svg.close')
            .hide();
        }
      });
      fakescreenshot.find('svg.close').click(function(e) {
        e.stopPropagation();
        fakescreenshot.remove();
      });
    } else {
      // 重新设置position
      fakescreenshot.css('left', `${options.left}px`);
      fakescreenshot.css('top', `${options.top - 90}px`);
      fakescreenshot.show();
    }

    fakescreenshot
      .find('input')
      .off('change')
      .change(inputChange);
  };
})(jQuery);
