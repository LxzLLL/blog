---
layout:     post
title:      ios上iframe滚动条无法显示问题
category: blog
description: iframe设置高度，然后当iframe内容高度超过指定高度的时候，内容会被切断，并且不出现滚动条
---
## 问题描述
+ iframe设置高度，然后当iframe内容高度超过指定高度的时候，内容会被切断，并且不出现滚动条

## 解决方案
+ 解决方案：在body下在创建一个container，通过这个container来提供滚动条

```
// code:
html,body{ height:100%}
.container{ height:100%; -webkit-overflow-scrolling:touch; overflow:scroll;}
```