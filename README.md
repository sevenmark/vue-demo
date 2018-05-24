## 准备工作

服务器环境：Ubuntu (本文安装的是16.04.4， 查看Ubuntu版本信息的命令是: cat /etc/issue)

CA系统软件包

需要用到的命令：


```
ssh -i 密钥.pem ubuntu@ec2-52-83-236-233.cn-northwest-1.compute.amazonaws.com.cn
```



### 第一步，连接服务器：

ssh -i 密钥.pem ubuntu@ec2-52-83-236-233.cn-northwest-1.compute.amazonaws.com.cn

(此处需要注意 密钥.pem 的权限，修改权限的命令 chmod 400 密钥.pem)

### 第二步，Java环境

检测是否存在Java环境：Java -version，如果显示The program Java can be found in the following packages,则表示Java未安装

安装openjdk-8-jre: sudo aot-get update sudo apt-get install openjdk-8-jre
(由于Ubuntu版本的原因，安装不了低版本的Java)

设置JAVA\_HOME环境变量： sudo update-alternatives --config。sudo vi /etc/environment,在最后添加一行：JAVA\_HOME="/usr/lib/jvm/java-8-openjdk-amd64",，然后运行：source /etc/environment
，再运行：echo $JAVA_HOME，能正确显示刚才设置的路径说明成功

### 第三步，安装字体








