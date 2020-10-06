<template>
    <div>
        <div class="list">
            <div class="comment-item" v-for="item in list" :key="item.id">
                <div class="wrap">
                    <div class="left">
                        <div class="comment-avatar">
                            <img :src="item.head" alt="用户头像" class="avatar" />
                        </div>
                    </div>
                    <div class="right">
                        <div class="reply-author">
                            <span class="reply-user font-size-sm">{{ item.name }}</span>
                        </div>
                        <div class="reply-content font-size-sm">
                            <span>{{ item.content }}</span>
                        </div>
                        <div class="reply-operation">
                            <div class="date">{{ item.date }}</div>
                            <div class="reply-action flex-align">
                                <span class="like-btn flex-align">
                                    <i class="iconfont icon-dianzan1"></i>
                                    <em>{{ item.like }}</em>
                                </span>
                                <span class="reply-btn flex-align">
                                    <i class="iconfont icon-huifu1"></i>
                                    <em>回复</em>
                                </span>
                            </div>
                        </div>
                        <div class="reply-list">
                            <div class="reply-item" v-for="child in item.childs" :key="child.id">
                                <div class="wrap">
                                    <div class="left">
                                        <div class="comment-avatar">
                                            <img :src="child.head" alt="用户头像" class="avatar_reply" />
                                        </div>
                                    </div>
                                    <div class="right">
                                        <div class="reply-author flex-align">
                                            <span class="reply-user font-size-xs">{{ child.name }}</span>
                                        </div>
                                        <div class="reply-content font-size-xs">
                                            <span class="reply-label font-size-xs" v-if="child.at">
                                                回复
                                                <span class="reply-user" style="font-weight: bold;">@{{ child.at }}</span>
                                                <span style="padding-right: 2px;font-weight: bold;">:</span>
                                            </span>
                                            <span>
                                                {{ child.content }}
                                            </span>
                                        </div>
                                        <div class="reply-operation">
                                            <div class="date">{{ child.date }}</div>
                                            <div class="reply-action flex-align">
                                                <span class="like-btn flex-align">
                                                    <i class="iconfont icon-dianzan1"></i>
                                                    <em>{{ child.like }}</em>
                                                </span>
                                                <span class="reply-btn flex-align">
                                                    <i class="iconfont icon-huifu1"></i>
                                                    <em>回复</em>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {},
    data() {
        return {
            list: [
                {
                    id: 1,
                    head: 'https://mirror-gold-cdn.xitu.io/168e09bdb66bcf662a4?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
                    name: 'fend',
                    content: ' 此女是加州大学伯克利分校的高材生，在湾区可以横着走。所以，从统计学意义上来讲，此人属于无效样本，应予以剔除。',
                    date: '2020 年 05 月 24 日 11:12',
                    like: 2,
                    childs: [
                        {
                            id: 2,
                            head: '//static001.geekbang.org/account/avatar/00/0f/f7/6e/04f9a672.jpg?x-oss-process=image/resize,w_200,h_200',
                            name: '阿牛',
                            content: '网络喷子原型？',
                            date: '一天前',
                            like: 0,
                            at: '谋生'
                        },
                        {
                            id: 3,
                            head: 'https://static.woshipm.com/TTW_USER_202004_20200414140658_1283.jpg?imageView2/2/w/80/size-limit/5k!?imageView2/2/w/80/size-limit/5k!',
                            name: '谋生',
                            content: '这不是有手就行？',
                            date: '一周前',
                            like: 1
                        }
                    ]
                }
            ]
        };
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {}
};
</script>

<style scoped lang="scss">
.font-size-xs {
    font-size: 14px;
}

.font-size-sm {
    font-size: 16px;
}

.list {
    margin-top: 20px;

    .reply-item {
        position: relative;
        border-bottom: 0.5px solid #f2f2f2;
        padding: 20px 0;

        & .reply-author {
            margin-top: 7px !important;
        }

        &:last-child {
            border: none;
        }
    }

    .comment-item {
        position: relative;
        padding: 20px 0;

        .wrap {
            display: flex;

            .left {
                margin-right: 15px;

                .comment-avatar {
                    .avatar {
                        width: 40px;
                        height: 40px;
                        display: block;
                        background: #d0d4d7;
                        border-radius: 100%;
                    }

                    .avatar_reply {
                        width: 30px;
                        height: 30px;
                        display: block;
                        background: #d0d4d7;
                        border-radius: 100%;
                    }
                }
            }

            .right {
                flex: 1;
                .reply-author {
                    line-height: 16px;
                    margin-top: 12px;

                    .reply-user {
                        font-weight: bold;
                        color: #303030;
                    }

                    .reply-label {
                        padding: 0 8px;
                        font-weight: 300;
                        color: #303030;
                    }
                }

                .reply-content {
                    margin: 10px 0;
                    line-height: 24px;
                    font-weight: 400;
                    word-break: break-word;
                    color: #303030;
                }

                .reply-operation {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                    width: 100%;
                    margin-top: 10px;
                    line-height: 1;
                    font-size: 14px;
                    font-weight: 400;
                    color: #141414;

                    .date {
                        font-size: 14px;
                        font-weight: 400;
                        color: #828a92;
                    }

                    .reply-action {
                        .like-btn,
                        .reply-btn {
                            color: #828a92;
                            cursor: pointer;
                            user-select: none;
                        }

                        .reply-btn {
                            margin-left: 25px;
                        }

                        .iconfont {
                            font-size: 16px;
                            color: #b4b9be;
                            user-select: none;
                            margin-right: 5px;
                        }
                    }
                }
            }
        }

        .reply-list {
            position: relative;
            box-sizing: border-box;
            margin-top: 20px;
            background-color: #f5f6f7;
            border-radius: 4px;
            padding: 0 30px;
        }
    }
}
</style>
