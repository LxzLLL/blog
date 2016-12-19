---
layout: post
title: React部分知识与理解
category: blog
description: react的无状态组件,mixins,高阶组件的理解
---
## 无状态组件(StatelessComponent)

```
// textbox component
export function TextBox({text}){
  return <div>{"文本是"+text}</div>
}

// 引用
import ...;
import TextBox from 'textbox';
class HelloWorld extend React.Component{
  // ...
  render(){
    return <TextBox text='hello world' />
  }
}
```
## Mixins

```
// TimerMixin
export default function TimerMixin(){
  return {
    run:function(){ //...},
    timer:0  
  }
}

  // 对react组件的扩展，文档v0.13 上我们可以看到, mixin 不再被ES6 所支持
import TimerMixin from 'TimerMixin';
class Helloworld extend React.Component{
  mixins:[TimerMixin()],
  // ...
  componentWillMount(){
    this.run();  
  }

  render(){
    return <div>{"Now timer is :"+this.timer}</div>  
  }
}
```
## 高阶组件(High Order Componet)

```
  // 可以当成是一种组件的扩展方式
  // createDialog  一个扩展dialog组件的函数
  export default function createDialog(Component){
      return class BiggerDialog extend React.Component{
        // ...
        componentWillMount(){
           //do something          
        }
        render(){
          <Component someotherparam={this.state.other} params={...this.props} />      
        }
      }
  }

// 使用的地方
import Dialog from 'dialog-component';
import createDialog from 'createdialog';
ReactDOM.render(createDialog(Dialog));
```
### 部分参考资料

[高性能的React组件](http://www.tuicool.com/articles/Nna6NfN)
[无状态组件(Stateless Component) 与高阶组件](http://www.jianshu.com/p/63569386befc)

