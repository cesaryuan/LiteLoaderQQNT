# LiteLoaderQQNT

LiteLoaderQQNT是一个QQNT的插件加载器  
它可以让你自由地为QQNT添加各种插件  
比如：美化主题，增加新功能 等...

Telegram闲聊群：https://t.me/LiteLoaderQQNT

> 各位也去试试同类项目 QQNTim 吧！  
> [QQNT-Improved - PC 端 QQNT 插件管理器](https://github.com/Flysoft-Studio/QQNTim)  
> LiteLoaderQQNT可与QQNTim共存


## 注意事项

- 目前仍在开发当中，可能会存在一些问题和不足
- 目前没有插件商店系统，暂时只能自行寻找插件
- 仅为个人兴趣而制作，开发目的在于学习和探索
- 能力有限，随缘更新。不过也欢迎各位来提交PR
- 由于项目特殊性，必要时会停止开发或删除仓库


## 安装方法

请先去官网安装QQNT最新版：https://im.qq.com/pcqq/index.shtml  
支持Windows, Linux, MacOS的32位与64位QQNT

安装位置：
- Windows：`QQNT的根目录/resources/app`
- Linux：`QQNT的根目录/resources/app`
- MacOS：`/Applications/QQ.app/Contents/Resources/app`

只需三步，就可以轻松安装LiteLoaderQQNT：
1. 下载`Release`中最新的`Source code`，解压出文件夹并放到`安装位置`，重命名文件夹为`LiteLoader`
2. 编辑`安装位置/package.json`文件，将`main`键值改为`LiteLoader`（根据文件夹名字而修改）
3. 重新启动QQNT，享受LiteLoaderQQNT带来的乐趣吧！

应与package.json文件同级：

```
├─app_launcher
├─LiteLoader <--在这
│  ├─builtins
│  ├─src
│  ├─package.json
│  └─...
├─package.json
└─...

```

package.json文件示例：
```
{
    ...
    "main": "LiteLoader",
    ...
}
```


## 插件链接

### 开发

目前并不建议开发插件，加载器还在完善中...  
插件格式基本确定，直到完善后都应该不会大改  
插件模板：[LiteLoaderQQNT-Plugin-Template](https://github.com/mo-jinran/LiteLoaderQQNT-Plugin-Template)

> Windows QQNT 9.8.5版本暂时无法打开自身的DevTools  
> 请安装Chii Devtools插件或QQNT vConsole插件进行调试


### 扩展

| 作者                                    | 名称                                                                          | 描述                                                 |
| --------------------------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------- |
| [沫烬染](https://github.com/mo-jinran)  | [Chii DevTools](https://github.com/mo-jinran/chii-devtools)                   | 使用Chii的DevTools进行远程调试                       |
| [XiaoHe321](https://github.com/xh321)   | [QQNT vConsole](https://github.com/xh321/LiteLoaderQQNT-VConsole)             | 使用腾讯自己的vConsole进行前端调试                   |
| [沫烬染](https://github.com/mo-jinran)  | [窗口置顶](https://github.com/mo-jinran/window-on-top)                        | 添加窗口置顶按钮                                     |
| [XiaoHe321](https://github.com/xh321)   | [背景插件](https://github.com/xh321/LiteLoaderQQNT-Background-Plugin)         | 窗口背景图片                                         |
| [XiaoHe321](https://github.com/xh321)   | [链接跳转](https://github.com/xh321/LiteLoaderQQNT-Directly-Jump)             | 外链直接跳转，而不经过拦截页                         |
| [FW27623](https://github.com/FW27623)   | [移除QQ游戏中心](https://github.com/FW27623/remove_qqgame_center)             | 删除QQ游戏中心侧边按钮                               |
| [cookieiz](https://github.com/cookieiz) | [关闭QQ空间](https://github.com/cookieiz/LiteLoaderQQNT-RemoveZone)           | 移除QQ空间按钮                                       |
| [XiaoHe321](https://github.com/xh321)   | [关闭更新弹窗](https://github.com/xh321/LiteLoaderQQNT-Kill-Update)           | 关闭NTQQ恼人的更新弹窗                               |
| [沫烬染](https://github.com/mo-jinran)  | [Linux - 背景毛玻璃](https://github.com/mo-jinran/linux-qqnt-background-blur) | 给Linux下KDE桌面环境的QQNT添加背景毛玻璃效果         |
| [XiaoHe321](https://github.com/xh321)   | [防撤回](https://github.com/xh321/LiteLoaderQQNT-Anti-Recall)                 | 目前防撤回仅当你打开聊天窗口时生效，重新进入就失效了 |
| [谦虚](https://github.com/qianxu2001)   | [繁化姬](https://github.com/qianxu2001/LiteLoaderQQNT-Plugin-Fanhuaji)        | 将消息从繁体转化为简体                               |
| [xinyihl](https://github.com/xinyihl)   | [自定义移除侧栏](https://github.com/xinyihl/LiteLoaderQQNT-RemoveSidebar)     | 通过序号自定义移除主页的侧栏                         |
| [谦虚](https://github.com/qianxu2001)   | [演示模式](https://github.com/qianxu2001/LiteLoaderQQNT-Plugin-Demo-mode)     | 对界面上的元素进行模糊处理以便演示或截图             |


### 主题

| 作者                                      | 名称                                                                         | 描述                                    |
| ----------------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------- |
| [沫烬染](https://github.com/mo-jinran)    | [测试主题](https://github.com/mo-jinran/test-theme)                          | 测试用的主题                            |
| [MUKAPP](https://github.com/MUKAPP)       | [MSpring-Theme](https://github.com/MUKAPP/LiteLoaderQQNT-MSpring-Theme)      | LiteLoaderQQNT 主题，优雅 · 粉粉 · 细致 |
| [festoney8](https://github.com/festoney8) | [QQNT微信风格主题](https://github.com/festoney8/LiteLoaderQQNT-Wechat-Theme) | QQNT高仿微信主题                        |
| [XiaoHe321](https://github.com/xh321)     | [自定义 CSS 样式](https://github.com/xh321/LiteLoaderQQNT-Custom-CSS)        | 用来自定义 CSS 样式                     |


## 数据目录

LiteLoaderQQNT的默认数据文件夹在`用户目录/Documents/BetterQQNT`  
修改环境变量`BETTERQQNT_PROFILE`可指定目录位置

### 数据目录结构：
```
BetterQQNT
    ├─plugins           // 插件本体目录
    │   ├─my-plugin         // 插件本体
    │   └─...
    ├─plugins_cache     // 插件缓存目录
    │   ├─my-plugin
    │   └─...
    ├─plugins_data      // 插件数据目录
    │   ├─my-plugin
    │   └─...
    └─config.json       // 配置文件（不是给插件用的
```

### 插件目录结构：
```
my-plugin
    ├─manifest.json     // 存放插件信息
    ├─main.js           // 存在插件入口
    └─...
```


## 开源协议

[MIT License](./LICENSE)  
Copyright (c) 2023 沫烬染
