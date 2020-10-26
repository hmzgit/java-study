<template>
    <aside class="aside-right">
        <div class="public-box aside-shadow">
            <div class="panel-blog-head flex-align">
                <div class="blog-head">
                    <img src="http://139.159.147.237/images/xuxiaofei.jpeg" alt="用户头像" class="avatar" />
                </div>
                <div class="blog-info">
                    <p class="bg-name ellipsis">曾阿牛🐂</p>
                    <p class="bg-desc ellipsis">互联网摸鱼精英</p>
                </div>
            </div>
            <div class="panel-blog-body flex-s-b">
                <div class="bg-body-item flex-direction">
                    <p class="bg-item-title">我的提问</p>
                    <p class="bg-item-desc">8</p>
                </div>
                <div class="bg-body-item flex-direction">
                    <p class="bg-item-title">回答</p>
                    <p class="bg-item-desc">88</p>
                </div>
                <div class="bg-body-item flex-direction">
                    <p class="bg-item-title">粉丝</p>
                    <p class="bg-item-desc">999</p>
                </div>
            </div>
            <div class="panel-blog-foot flex-s-b">
                <span class="bg-foot-item">我的关注</span>
                <span class="bg-foot-item">我的收藏</span>
            </div>
        </div>
        <div class="hot-block aside-shadow">
            <div class="hot-m">
                <div class="customer">
                    <div class="img-wrap">
                        <img src="http://139.159.147.237/images/kefu.jpeg" alt="客服" />
                    </div>
                    <div class="tips">
                        <p class="top">
                            如果资料失效，可以直接联系资料客服微信索取，微信在线时间为：8:00-23:30。请下载后24小时内删除，若侵权请联系客服删除该资料。
                        </p>
                        <p class="bottom">
                            <b>声明：本站资料整理自互联网，用于Java学习者交流学习使用，对资料版权不负任何法律责任，若有侵权请及时联系客服屏蔽删除</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <agreement-dialog v-if="dialogAgreementVisible" @close="handleClose" />
    </aside>
</template>

<script>
import { disableScroll, openScroll } from '@/utils';
export default {
    components: {},
    props: {},
    data() {
        return {
            dialogAgreementVisible: false
        };
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {
        // 上传规则
        handleAgreement() {
            this.dialogAgreementVisible = true;
            disableScroll();
        },

        // 关闭
        handleClose() {
            this.dialogAgreementVisible = false;
            openScroll();
        }
    }
};
</script>

<style scoped lang="scss">
.aside-right {
    width: 300px;
    margin-left: 20px;

    .public-box {
        padding: 20px;
        margin-bottom: 20px;
        background-color: #fff;
        border-radius: 4px;
        color: rgba(0, 0, 0, 0.9);

        .panel-blog-head {
            cursor: pointer;

            .blog-head {
                width: 50px;
                height: 50px;
                margin-right: 10px;

                .avatar {
                    width: 100%;
                    height: 100%;
                    border-radius: 100%;
                }
            }

            .blog-info {
                width: 200px;

                .bg-name {
                    font-size: 16px;
                    display: inline-block;
                    font-weight: 500;
                    color: #2c2c2c;
                    max-width: 200px;
                }

                .bg-desc {
                    color: #999;
                    font-size: 12px;
                    line-height: 1.5;
                }
            }
        }

        .panel-blog-body {
            margin-top: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #ebedf0;
            cursor: pointer;

            .bg-body-item {
                width: 70px;
                overflow: hidden;

                .bg-item-title,
                .bg-item-desc {
                    width: 100%;
                    text-align: center;
                }

                .bg-item-title {
                    position: relative;
                    font-size: 12px;
                    color: #999;
                }

                .bg-item-desc {
                    font-size: 20px;
                    color: #333;
                    opacity: 0.9;
                    line-height: 1.6;
                }

                &:hover {
                    .bg-item-title,
                    .bg-item-desc {
                        color: $main-col;
                        opacity: 1;
                    }
                }
            }
        }

        .panel-blog-foot {
            position: relative;
            margin-top: 15px;
            cursor: pointer;

            .bg-foot-item {
                padding: 0 15px;
                font-size: 14px;
                color: #333;
                opacity: 0.9;

                &:hover {
                    color: $main-col;
                    opacity: 1;
                }
            }

            &:after {
                content: ' ';
                position: absolute;
                left: 50%;
                display: block;
                height: 18px;
                width: 1px;
                background-color: #ebedf0;
            }
        }
    }

    .hot-block {
        background-color: #fff;
        border-radius: 4px;

        .hot-t {
            height: 50px;
            line-height: 50px;
            padding: 0 25px;
            font-size: 16px;
            color: #333;
            font-weight: bold;
            border-bottom: 1px solid #f2f2f2;

            .icon-shangchuan {
                font-size: 16px;
                color: $main-col;
                margin-right: 10px;
            }

            .icon-wenhao {
                font-size: 16px;
                color: #999;
                margin-left: 5px;
                cursor: pointer;
            }
        }

        .hot-m {
            padding: 25px;
            border-bottom: 1px solid #f2f2f2;

            .wrap {
                &.textarea {
                    align-items: flex-start;
                    margin-top: 20px;
                }

                .label {
                    margin-right: 10px;
                    font-size: 14px;
                    color: #333;
                }

                .data-name,
                .share-address {
                    width: 180px;
                    font-size: 12px;
                    color: #333;
                    border: 1px solid #eee;
                    border-radius: 4px;
                    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

                    &:focus {
                        border: 1px solid $main-col;
                    }
                }

                .data-name {
                    height: 30px;
                    line-height: 30px;
                    padding: 0 10px 0 10px;
                }

                .share-address {
                    height: 100px;
                    padding: 5px 10px;
                    font-family: '微软雅黑';
                    outline: none;
                    resize: none;
                }
            }

            .customer {
                .img-wrap {
                    width: 100%;
                    margin-bottom: 20px;

                    img {
                        width: 100%;
                        border: 1px solid #fff;
                        display: block;
                    }
                }

                .tips {
                    color: #666;
                    font-size: 12px;
                    text-align: justify;

                    .top {
                        margin-bottom: 15px;
                    }
                }
            }
        }

        .hot-b {
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 16px;
            color: #446586;
            cursor: pointer;
            user-select: none;
        }
    }
}
</style>
