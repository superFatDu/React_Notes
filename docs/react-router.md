# React Router

## 1.1 安装

```bash
// install
$ npm i react-router-dom
```

## 1.2 使用

### 1.2.1 render

```js
// App.js
import { BrowserRouter, Route } from "react-redux-dom";

<BrowserRouter>
  <div>
    <Route path="/" exact render={() => (<div>Home</div>)}></Route>
    <Route path="/detail" exact render={() => (<div>Detail</div>)}></Route>
</div>
</BrowserRouter>
```

- exact 用于指定path的精确匹配。

### 1.2.2 component

- 在src目录下创建pages文件夹，然后创建home和detail文件夹，里面放index.js

```js
// 例如/home/index.js
import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>home</div>
    )
  }
}

export default Home;
```

```js
// App.js
import { BrowserRouter, Route } from "react-redux-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";

<BrowserRouter>
  <div>
    <Route path="/" exact component={Home}></Route>
    <Route path="/detail" exact component={Detail}></Route>
</div>
</BrowserRouter>
```

