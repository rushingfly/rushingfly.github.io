node 版本使用16

zh目录下的文件不用编辑，会被自动拷贝。

发布步骤：
1. 使用```yarn docs:dev```本地编辑
2. 使用```yarn docs:build```编译静态文件
3. 拷贝```src/.vuepress/dist```目录下的文件到```rushingfly.github.io```项目目录下
4. 在```rushingfly.github.io```项目提交并push到Github

TODO: 
* 最新功能里只支持yarn2，考虑换成pnpm
* 站内搜索功能
* 重命名posts文件夹里的文件后，cp命令没有删除zh文件夹里的旧文件，应该删除一下