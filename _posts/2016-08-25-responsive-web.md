---
layout:     post
title:      自适应解决方案(个人资料整理)
category: blog
description: 个人的解决方案大都是使用通过页面制作的时候计算页面与psd图的比例不同来计算元素尺寸，所以我的首要任务就是计算屏幕宽度，还有页面宽度与psd图之间的比例。
---
个人的解决方案大都是使用通过页面制作的时候计算页面与psd图的比例不同来计算元素尺寸，所以我的首要任务就是计算屏幕宽度，还有页面宽度与psd图之间的比例。

```
// var windowWidth = $(window).width(); // Jquery/Zepto 计算, *在部分安卓上容易出现计算失误var 
windowWidth = (window.innerWidth > 0) ? 
                           window.innerWidth : 
                           window.screen.width; // 相对上面的获取来说比较稳定
var scale = windowWidth/psdWidth;
```

---
## PC端：
#### 1. js 设置页面body style 的zoom属性

```
// 这个方法在PC端一些不支持zoom属性的浏览器上面不适用，火狐好像就不支持
document.body.style.zoom = scale; 
```
## 移动端：
#### 1. js设置meta viewport标签scale属性，有一个问题就是android4.2以下版本不支持viewport标签

```
document
    .querySelector('meta[name="viewport"]')
    .setAttribute('content',"width=device-width,initial-scale="+scale+",user-scalable=no")

// 在安卓4.2版本一下就需要做个判断，并设置其scale值
function isAndroid(){ return /android/.test(navigator.appVersion.toLowerCase())}
var appVersion =parseFloat( 
                                navigator
                                  .appVersion
                                  .toLowerCase()
                                  .match(/android.*;/)[0]
                                  .match(/\d(\.\d+)?/)[0]
                            );
if(isAndriod() && appVersion<=4.2){
  document.querySelector('html').style.zoom = scale;
}
```
#### 2. js修改html 的font-size， 然后页面元素用rem定义尺寸，并给html元素增加data-dpr 为全局字体大小服务

```
document.querySelector('html').style.fontSize = scale*100+'px';
document.querySelector('html').setAttribute('data-dpr',window.devicePixelRatio);
```
#### 设置全局字体大小使用px

```
// css
[data-drp='1']{
  body{
      font-size:12px;
  }
}
[data-drp='2']{
  body{
      font-size:14px;
  }
}
[data-drp='3']{
  body{
      font-size:16px;
  }
}
```
## 引用资料：

[移动端获取屏幕宽度](http://www.uw3c.com/jsviews/js18.html)
[html-移动端如何获取屏真正宽度](https://segmentfault.com/q/1010000002961719)
[使用Flexible实现手淘H5页面的终端适配](http://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html)
