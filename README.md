# redux学习

> A redux study-note

### 访问地址
```
http://localhost:5000/
```

### 运行程序 
```
npm install --save-dev
npm start     
http://localhost:5000/
```

### 项目目录说明
```
.
|-- action                           // 项目动作action管理
|   |-- dispatchAsync.js             // 异步控制dispatch 一个action
|   |-- setProvider.js               // 一个小型demo Provider-and-connect 控制dispatch 一个action
|   |-- setSubscriber.js             // 监视 Redux store 更新 控制dispatch 一个action
|-- components                       // 项目公共组件components管理
|-- containers                       // 项目业务组件containers管理
|   |-- home.jsx                     // 一个小型demo Provider-and-connect home组件业务流程
|-- reducers                         // 项目reducers管理
|   |-- dispatchAsync.js             // 异步控制dispatch 一个action创建的reducers
|   |-- providerReducer.js           // 一个小型demo Provider-and-connect 控制dispatch 一个action创建的reducers
|   |-- reducersExample.js           // 测试redux初级例子创建的reducers
|   |-- reducersTest.js              // 测试redux初步创建的reducers
|   |-- subscriber.js                // 监视 Redux store 更新 控制dispatch 一个action创建的reducers
|-- store                            // 项目创建store管理
|   |-- createStore.js               // 一个小型demo Provider-and-connect 控制dispatch 一个action创建的store(使用了中间件)
|-- index.html                       // 项目入口页面
|-- index.js                         // 项目入口js
|-- webpack.config.js                // 程序打包配置
|-- server.js                        // 代理服务器配置
|-- README.md                        // 项目说明
|-- package.json                     // 配置项目相关信息，通过执行 npm init 命令创建,npm start启动
.
```

### 页面说明
```
```

