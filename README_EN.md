[中文][1] | English

## Deploy Vue Project In Azure Cloud

### Preparatory Work

1. Prepare a Microsoft Azure account.
2. Prepare Vue project code, and push it to the new repository in GitHub.

### Deployment Process

1. Access the [Azure portal][2][2]
2. Click create resource button.![image]( https://github.com/ineedahouse/markdownPhoto/blob/main/azure-deployment/front-end/1.png)
3. Choose `Static Web App`, if not found, you can search `Static Web App` in the search bar. And click create.![image]( https://github.com/ineedahouse/markdownPhoto/blob/main/azure-deployment/front-end/2.png)
4. Create `Static Web App`, Create resource group-> Fill in the details->  Fill in the deployment details->  Fill in the generate details. ![image]( https://github.com/ineedahouse/markdownPhoto/blob/main/azure-deployment/front-end/3.png)![image]( https://github.com/ineedahouse/markdownPhoto/blob/main/azure-deployment/front-end/4.png)
5. Create `Static Web App`. ![image]( https://github.com/ineedahouse/markdownPhoto/blob/main/azure-deployment/front-end/5.png)
6. Go to resources. ![image]( https://github.com/ineedahouse/markdownPhoto/blob/main/azure-deployment/front-end/6.png)
7. Enter the Actions page in the GitHub repository. Yellow indicates an ongoing task. When the run is successfully completed, it will be indicated by a green check mark, The following are the tasks that were successfully deployed before.![image]( https://github.com/ineedahouse/markdownPhoto/blob/main/azure-deployment/front-end/7.png)
8. After the deployment is successful, the URL in the upper right corner is the URL of the front-end service.![image]( https://github.com/ineedahouse/markdownPhoto/blob/main/azure-deployment/front-end/8.png)

[1]:  https://github.com/ineedahouse/azure-test-front-end/blob/master/README.md
[2]: https://portal.azure.com/

