中文 | [English][1]

## 在Azure上部署Vue前端项目

### 准备工作

1. 准备微软Azure账号
2. 准备前端代码，并上传到GitHub上的新建仓库

### 部署流程

1. 进入[Azure门户网站][2]
2. 点击创建资源![image]( https://github.com/ineedahouse/markdownPhoto/blob/main/azure-deployment/front-end/1.png)
3. 选择`Static Web App`，如果没有找到，可以搜索，点击创建![image]( https://github.com/ineedahouse/markdownPhoto/blob/main/azure-deployment/front-end/2.png)
4. 创建`Static Web App`应用，新建资源组->填写详细信息->部署详细信息->生成详细信息![image]( https://github.com/ineedahouse/markdownPhoto/blob/main/azure-deployment/front-end/3.png)![image]( https://github.com/ineedahouse/markdownPhoto/blob/main/azure-deployment/front-end/4.png)
5. 创建静态Web应用![image]( https://github.com/ineedahouse/markdownPhoto/blob/main/azure-deployment/front-end/5.png)
6. 转到资源![image]( https://github.com/ineedahouse/markdownPhoto/blob/main/azure-deployment/front-end/6.png)
7. 进入GitHub仓库中的Actions页面，黄色的部分表示正在部署。当运行顺利完成，则会以绿色的对号来表示，下面的是之前部署成功的任务![image]( https://github.com/ineedahouse/markdownPhoto/blob/main/azure-deployment/front-end/7.png)
8. 在部署成功后，右上角的URL就是前端的URL![image]( https://github.com/ineedahouse/markdownPhoto/blob/main/azure-deployment/front-end/8.png)

[1]:  https://github.com/ineedahouse/azure-test-front-end/blob/master/README_EN.md
[2]: https://portal.azure.com/

