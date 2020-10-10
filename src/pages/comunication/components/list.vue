<template>
    <aside class="aside-left">
        <div class="list">
            <ul class="list-ul">
                <li class="item flex" v-for="(item, index) in list" :key="item.id">
                    <div class="left">
                        <div class="avatar-wrap">
                            <img :src="item.head" alt="用户头像" class="avatar" />
                        </div>
                    </div>
                    <div class="right">
                        <div class="info-row flex-s-b">
                            <div class="flex-align">
                                <div class="user-name">fend.</div>
                                <div class="public-time">今天11:41</div>
                            </div>
                            <div class="flex-align" v-if="index == 0">
                                <span class="top-label">置顶</span>
                            </div>
                        </div>
                        <div class="desc_para">
                            大家好，对于经常出现网络请求失败的用户，强烈推荐更新到最新版，谢谢！
                            <br />
                            安卓v1.8.3+，iOS 2.3+
                            <br />
                            服务器已于近期搬到香港机房，接口api域名也做了调整。
                            <br />
                            国外用户或挂代理的用户无法访问应该已经解决了。
                            <br />
                            国内的间歇性抽风问题应该也已经没有了，谢谢大家的反馈。
                            <br />
                            iOS AppStore 国区无法下载，Testfight
                            1万个名额满了，我也没办法，大家可以自行去外区下载，如何注册账号，百度都有教程，注册需要的资料网上都有生成器。还有一个办法百度搜索「AppStore 美区账号共享」。
                        </div>
                        <div class="operations">
                            <div class="btns flex-align">
                                <div class="btn">
                                    <i class="iconfont icon-dianzan3"></i>
                                    <span class="btn-text">点赞</span>
                                </div>
                                <div class="btn">
                                    <i class="iconfont icon-pinglun1"></i>
                                    <span class="btn-text">评论</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script>
import { disableScroll, openScroll } from '@/utils';
export default {
    components: {},
    props: {},
    data() {
        return {
            dialogInquiryVisible: false,
            list: [
                {
                    id: 'AA001',
                    head: 'https://mirror-gold-cdn.xitu.io/168e09bdb66bcf662a4?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
                    title: '',
                    date: '1小时前',
                    downloadNum: 89,
                    integral: 4,
                    content: '链接: https://pan.baidu.com/s/1-6EupUOaH6mEKj2kWnL52A  密码: v0ca --来自百度网盘超级会员V5的分享'
                },
                {
                    id: 'AC783',
                    head: 'https://static.woshipm.com/WX_U_202007_20200716143737_5864.jpg?imageView2/2/w/80/size-limit/5k!?imageView2/2/w/80/size-limit/5k!',
                    title: 'LeetCode刷题实战60道-源码',
                    date: '15小时前',
                    downloadNum: 78,
                    integral: 3,
                    content: '复制这段内容后打开百度网盘手机App，操作更方便哦 链接：https://pan.baidu.com/s/1uaSy5GUUwJfudH63-vVRIA 提取码：15PT --来自百度网盘超级会员V5的分享'
                },
                {
                    id: 'GA045',
                    head: 'https://static.woshipm.com/TTW_USER_202004_20200424094658_6148.jpg?imageView2/2/w/80/size-limit/5k!?imageView2/2/w/80/size-limit/5k!',
                    title: 'SpringBoot+Vue前后端分离实现邮件定时发送功能-全套视频',
                    date: '一天前',
                    downloadNum: 67,
                    integral: 10,
                    content: '链接：https://pan.baidu.com/s/1FUQctOm7_jWPoVituGnxvg 提取码：xj21 复制这段内容后打开百度网盘手机App，操作更方便哦'
                },
                {
                    id: 'HA883',
                    head: 'https://static.woshipm.com/TTW_USER_R201706_20170602174604_6218.jpg?imageView2/2/w/80/size-limit/5k!?imageView2/2/w/80/size-limit/5k!',
                    title: 'Springboot+Vue前后端分离实现Excle文件导入并在前端页面回显功能-源码',
                    date: '一周前',
                    downloadNum: 40,
                    integral: 8,
                    content: '复制这段内容后打开百度网盘手机App，操作更方便哦 链接：https://pan.baidu.com/s/1K_HmdnsUofe_TnYFpFNdgA 提取码：6098 --来自百度网盘超级会员V5的分享'
                },
                {
                    id: 'Y0089',
                    head: 'https://static.woshipm.com/WX_U_202010_20201009070042_2416.jpg?imageView2/2/w/80/size-limit/5k!?imageView2/2/w/80/size-limit/5k!',
                    title: '前端开发核心知识进阶',
                    date: '2020-09-22 22:00',
                    downloadNum: 16,
                    integral: 9,
                    content: '复制这段内容后打开百度网盘手机App，操作更方便哦 链接:https://pan.baidu.com/s/1a9iL8PTDft8qs6iBm3kZZg 提取码:oa64'
                }
            ],
            index: '' // 当前索引
        };
    },
    computed: {},
    created() {},
    mounted() {
        this.handleData();
    },
    watch: {},
    methods: {
        // 处理列表数据
        handleData() {
            this.list.forEach(item => {
                item.code = this.handleCode(item);
                item.link = this.handleLink(item);
            });
        },

        // 提取链接
        handleLink(item) {
            let reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
            return item.content.match(reg).join('');
        },

        // 提取提取码
        handleCode(item) {
            let pwd = item.content.match(/密码: (\S*) --/);
            let code = item.content.match(/提取码：(\S*) --/);
            let code1 = item.content.match(/提取码：(\S*) 复制/);
            let code2 = item.content.match(/提取码:(\S*)/);
            // 密码
            if (pwd && pwd.length) {
                return pwd[1];
            }
            // 提取码
            if (code && code.length) {
                return code[1];
            }
            // 提取码1
            if (code1 && code1.length) {
                return code1[1];
            }
            // 提取码2
            if (code2 && code2.length) {
                return code2[1];
            }
        },

        // 下载按钮事件
        handleDownload(index) {
            this.dialogInquiryVisible = true;
            this.inquiry = this.list[index];
            console.log(this.inquiry);

            disableScroll();
        },

        // 确定下载
        handleConfirm(item) {
            console.log(item);
            setTimeout(() => {
                this.dialogInquiryVisible = false;
                window.open(item.link, '_blank');
            }, 1000);
        },

        // 关闭
        handleClose() {
            this.dialogInquiryVisible = false;
            openScroll();
        }
    }
};
</script>

<style scoped lang="scss">
.aside-left {
    width: 680px;
    transition: ease-in-out 0.5s;

    .list {
        box-shadow: 0px 3px 10px 0px rgba(153, 153, 153, 0.1);

        .item {
            background-color: #fff;
            border-radius: 4px;
            padding: 20px 30px;
            position: relative;
            margin-bottom: 10px;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06);

            .left {
                margin-right: 15px;

                .avatar-wrap {
                    .avatar {
                        width: 42px;
                        height: 42px;
                        display: block;
                        background: #d0d4d7;
                        border-radius: 100%;
                    }
                }
            }

            .right {
                flex: 1;

                .info-row {
                    margin: 5px 0 8px 0;

                    .user-name {
                        font-size: 16px;
                        color: #2e3135;
                        font-weight: 600;
                        margin-right: 10px;
                    }

                    .public-time {
                        font-size: 12px;
                        color: #b2b2b2;
                        line-height: 22px;
                    }

                    .top-label {
                        font-size: 12px;
                        color: #b2b2b2;
                        padding: 0 4px;
                        line-height: 16px;
                        text-align: center;
                        display: inline-block;
                        border: 1px solid #bdbdbd;
                        border-radius: 2px;
                        margin-left: 4px;
                        transform: translateY(1px);
                    }
                }

                .desc_para {
                    font-size: 14px;
                    line-height: 24px;
                    word-wrap: break-word;
                    word-break: break-all;
                }

                .operations {
                    margin: 10px 0;

                    .btns {
                        justify-content: flex-end;

                        .btn {
                            display: inline-block;
                            cursor: pointer;
                            color: #446586;
                            user-select: none;
                            margin-left: 15px;
                            vertical-align: middle;

                            &:hover {
                                color: rgb(74, 144, 226);
                            }

                            &:hover .iconfont {
                                color: rgb(74, 144, 226);
                            }

                            &:hover .btn-text {
                                text-decoration: underline;
                            }

                            &:first-child {
                                margin: 0;
                            }

                            .iconfont {
                                color: #446586;
                                font-size: 18px;
                                vertical-align: middle;
                            }

                            .btn-text {
                                font-size: 14px;
                                vertical-align: middle;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
