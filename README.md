# React-React初试——TodoList

参考教程代码在官网 [Redux 中文网](https://www.reduxjs.cn/)。

## 执行代码

### `npm install`
下载相关模块

### `npm start`
运行

## 最终页面效果

![](https://github.com/wode673/react-redux-todolist/blob/main/result.gif  "页面效果")

## 组件层次结构

### 展示组件（负责UI的呈现）

 ![](https://github.com/wode673/react-redux-todolist/blob/main/UI-Component-hierarchy.PNG  "UI组件层次结构")

####TodoList 用于显示 todos 列表。

* todos: Array 以 { text, completed } 形式显示的 todo 项数组。
* onTodoClick(index: number) 当 todo 项被点击时调用的回调函数。

####Todo 一个 todo 项。

* text: string 显示的文本内容。
* completed: boolean todo 项是否显示删除线。
* onClick() 当 todo 项被点击时调用的回调函数。

####Link 带有 callback 回调功能的链接
* onClick() 当点击链接时会触发

####Footer 一个允许用户改变可见 todo 过滤器的组件。

####App 根组件，渲染余下的所有内容。

###容器组件（负责管理数据和逻辑）

####VisibleTodoList 根据当前显示的状态来对 todo 列表进行过滤，并渲染 TodoList。

####FilterLink 得到当前过滤器并渲染 Link。

* filter: string 就是当前过滤的状态

###其他组件

####AddTodo 含有“Add”按钮的输入框




