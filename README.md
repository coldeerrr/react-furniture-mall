# react-furniture-mall:house:
*基于React的移动端家装购物网站*

## 用到的技术/工具:wrench:
**前端：**
 - `React` 脚手架 `create-react-app`
 - `React-Hook` 常用的钩子 `(useState/useEffect...)`
 - `React-Router` 前端路由
 - `Redux` 状态集中管理工具
 - `Axios`  集成网络请求
 - `Less`  css预处理器
 - 第三方库 `(Swiper/city-select/lodash...)`
 
**后端：**
 - `express`搭建简易服务器提供数据
 - `Mock.js`模拟随机数据

## 主要功能:bulb:

 - 首页展示
- 城市管理
- 搜索功能
- 上拉加载
- 详情
- 评价
- 收藏

## 项目结构:page_facing_up:

    |- server: 简易服务器
    |  |- data: 存放数据
    |- src
    |  |- assets:  所有静态资源
    |  |- components: 封装的可复用组件
    |  |  |- BottomNav: 用于路由的底部组件
    |  |  |- HeaderNav: Home界面的头部组件
    |  |  |- LoadMore: 封装的加载更多组件
    |  |  |- PubHeader: 封装的头部组件
    |  |  |- SearchInput: 封装的搜索框组件
    |  |  |- Star: 封装的星星组件
    |  |  |- Swiper: 封装的轮播图组件
    |  |  |- Tabs: 封装的切换栏组件
    |  |- data: 存放本地请求的城市信息
    |  |- pages: 路由组件
    |  |  |- City: 城市选择界面
    |  |  |- Details: 详情页
    |  |  |- Login: 登录界面
    |  |  |- Main: 底部导航的四个路由, 其中Home页的功能已完善
    |  |  |- Order: 订单界面
    |  |  |- Search: 搜索界面
    |  |- redux: redux集中管理状态
    |  |- router: 注册路由的文件
    |  |- utils: 二次封装的axios, 可复用的函数等
    |  |- App.jsx: 外壳组件
