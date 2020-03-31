### 打包发布

- 签名密钥命令：
    keytool -genkeypair -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
    密钥库口令：nomal
    （my-key-alias）
    会生成一个叫做my-release-key.keystore的密钥库文件。
- 设置gradle变量
    1. 把my-release-key.keystore文件放到你工程中的android/app文件夹下
    2. 编辑项目目录/android/gradle.properties，加上如下代码
        MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
        MYAPP_RELEASE_KEY_ALIAS=my-key-alias
        MYAPP_RELEASE_STORE_PASSWORD=*****
        MYAPP_RELEASE_KEY_PASSWORD=*****
- 把签名配置加入到项目的gradle配置中
    编辑项目目录下的android/app/build.gradle，添加如下签名配置：
        ...
        android {
            ...
            defaultConfig { ... }
            signingConfigs {
                release {
                    if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                        storeFile file(MYAPP_RELEASE_STORE_FILE)
                        storePassword MYAPP_RELEASE_STORE_PASSWORD
                        keyAlias MYAPP_RELEASE_KEY_ALIAS
                        keyPassword MYAPP_RELEASE_KEY_PASSWORD
                    }
                }
            }
            buildTypes {
                release {
                    ...
                    signingConfig signingConfigs.release
                }
            }
        }
        ...
- 生成发行 APK 包
    进到项目的 android 目录，执行如下命令
        ./gradlew assembleRelease
    在 项目\android\app\build\outputs\apk\release下出现一个app-release.apk 即成功