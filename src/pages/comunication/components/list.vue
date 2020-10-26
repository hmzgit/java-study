<template>
    <aside class="aside-left">
        <swiper />
        <tab-bar />
        <div class="list shadow">
            <ul class="list-ul">
                <li class="item flex shadow" v-for="(item, index) in list" :key="item.id">
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
                                <div class="btn" @click="showForm(index)">
                                    <i class="iconfont icon-pinglun1"></i>
                                    <span class="btn-text">回答</span>
                                </div>
                            </div>
                        </div>
                        <div class="reply-form" v-if="item.isCommentForm">
                            <edit-div @submit="onSubmit" v-model="value" :dialogVisible="dialogVisible" :maxlength="200" :btnText="btnText" placeholderText="讲两句呗..." />
                        </div>
                        <div class="reply-list">
                            <div class="reply-item flex" v-for="child in item.childs" :key="child.id">
                                <div class="left">
                                    <div class="avatar-wrap">
                                        <img :src="child.head" alt="用户头像" class="avatar" />
                                    </div>
                                </div>
                                <div class="right">
                                    <div class="info-row flex-s-b">
                                        <div class="flex-align">
                                            <div class="reply-name">fend.</div>
                                            <div class="public-time">今天11:41</div>
                                        </div>
                                    </div>
                                    <div class="desc_para">
                                        开发者说的是软件版本不是系统版本
                                    </div>
                                    <div class="operations">
                                        <div class="btns flex-align">
                                            <div class="btn">
                                                <i class="iconfont icon-dianzan3"></i>
                                                <span class="btn-text">点赞</span>
                                            </div>
                                            <div class="btn">
                                                <i class="iconfont icon-pinglun1"></i>
                                                <span class="btn-text">回答</span>
                                            </div>
                                        </div>
                                    </div>
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
import EditDiv from './EditDiv';
import Swiper from './swiper';
import TabBar from './TabBar';
export default {
    components: {
        EditDiv,
        Swiper,
        TabBar
    },
    data() {
        return {
            maxlength: 200, // 最大输入字数
            btnText: '回复', // 评论按钮文字
            value: '', // 输入值
            list: [
                {
                    id: 'AA001',
                    head: 'https://mirror-gold-cdn.xitu.io/168e09bdb66bcf662a4?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
                    title: '',
                    date: '1小时前',
                    downloadNum: 89,
                    integral: 4,
                    isCommentForm: false,
                    dialogVisible: false,
                    content: '链接: https://pan.baidu.com/s/1-6EupUOaH6mEKj2kWnL52A  密码: v0ca --来自百度网盘超级会员V5的分享'
                },
                {
                    id: 'HA883',
                    head: 'https://static.woshipm.com/TTW_USER_R201706_20170602174604_6218.jpg?imageView2/2/w/80/size-limit/5k!?imageView2/2/w/80/size-limit/5k!',
                    title: 'Springboot+Vue前后端分离实现Excle文件导入并在前端页面回显功能-源码',
                    date: '一周前',
                    downloadNum: 40,
                    integral: 8,
                    isCommentForm: false,
                    dialogVisible: false,
                    content: '复制这段内容后打开百度网盘手机App，操作更方便哦 链接：https://pan.baidu.com/s/1K_HmdnsUofe_TnYFpFNdgA 提取码：6098 --来自百度网盘超级会员V5的分享'
                },
                {
                    id: 'Y0089',
                    head: 'https://static.woshipm.com/WX_U_202010_20201009070042_2416.jpg?imageView2/2/w/80/size-limit/5k!?imageView2/2/w/80/size-limit/5k!',
                    title: '前端开发核心知识进阶',
                    date: '2020-09-22 22:00',
                    downloadNum: 16,
                    integral: 9,
                    isCommentForm: false,
                    dialogVisible: false,
                    content: '复制这段内容后打开百度网盘手机App，操作更方便哦 链接:https://pan.baidu.com/s/1a9iL8PTDft8qs6iBm3kZZg 提取码:oa64'
                }
            ],
            dialogVisible: false
        };
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {
        showForm(i) {
            // 只显示一个评论框
            this.list.forEach((item, index) => {
                if (index == i) {
                    item.isCommentForm = !item.isCommentForm;
                } else {
                    item.isCommentForm = false;
                }
            });
        },

        onSubmit() {}
    }
};
</script>

<style scoped lang="scss">
.aside-left {
    width: 680px;
    transition: ease-in-out 0.5s;

    .list {
        .item {
            background-color: #fff;
            border-radius: 4px;
            padding: 20px 30px;
            position: relative;
            margin-bottom: 10px;

            .left {
                margin-right: 12px;

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
                        // line-height: 22px;
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
                    margin: 10px 0 15px 0;

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
                                color: $main-col;
                            }

                            &:hover .iconfont {
                                color: $main-col;
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

                .reply-form {
                    margin: 20px 0;
                }

                .reply-list {
                    position: relative;
                    box-sizing: border-box;
                    background-color: rgba(0, 0, 0, 0.02);
                    border-radius: 4px;
                    padding: 0 20px;

                    .reply-item {
                        position: relative;
                        border-bottom: 0.5px solid #f0f1f3;
                        padding: 20px 0;

                        .left {
                            margin-right: 8px;

                            .avatar-wrap {
                                .avatar {
                                    width: 32px;
                                    height: 32px;
                                    display: block;
                                    background: #d0d4d7;
                                    border-radius: 100%;
                                }
                            }
                        }

                        .right {
                            .info-row {
                                margin: 5px 0 6px 0;

                                .reply-name {
                                    font-size: 14px;
                                    color: #2e3135;
                                    margin-right: 10px;
                                }
                            }
                        }

                        .operations {
                            margin: 8px 0 0 0;
                        }

                        &:last-child {
                            border: none;
                        }
                    }
                }
            }
        }
    }
}
</style>
