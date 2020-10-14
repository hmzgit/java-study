<template>
    <div>
        <section class="article-comment-block">
            <div class="comment-form flex-s-b" style="align-items: flex-start;">
                <div class="avatar-box">
                    <img src="https://static.woshipm.com/TTW_USER_202004_20200414140658_1283.jpg?imageView2/2/w/80/size-limit/5k!?imageView2/2/w/80/size-limit/5k!" alt="用户头像" />
                </div>
                <div class="comment-input no-reference" :focus="isFocus">
                    <div
                        @focus="isFocus = true"
                        @blur="isFocus = false"
                        @input="domInput"
                        ref="mTextarea"
                        contenteditable="true"
                        spellcheck="false"
                        :placeholder="placeholderText"
                        class="textarea"
                        :class="{ empty: !content }"
                    ></div>
                    <div class="pic-row flex">
                        <div class="upload-column">
                            <img
                                class="upImg"
                                src="https://static.woshipm.com/TTW_USER_202004_20200414140658_1283.jpg?imageView2/2/w/80/size-limit/5k!?imageView2/2/w/80/size-limit/5k!"
                                alt="回答图片"
                            />
                            <span class="close">
                                <i class="iconfont icon-close"></i>
                            </span>
                        </div>
                        <div class="upload-column">
                            <img
                                class="upImg"
                                src="https://static.woshipm.com/TTW_USER_R201706_20170602174604_6218.jpg?imageView2/2/w/80/size-limit/5k!?imageView2/2/w/80/size-limit/5k!"
                                alt="回答图片"
                            />
                            <span class="close">
                                <i class="iconfont icon-close"></i>
                            </span>
                        </div>
                        <div class="upload-column">
                            <img class="upImg" src="//static001.geekbang.org/account/avatar/00/0f/f7/6e/04f9a672.jpg?x-oss-process=image/resize,w_200,h_200" alt="回答图片" />
                            <span class="close">
                                <i class="iconfont icon-close"></i>
                            </span>
                        </div>
                        <div class="upload-column">
                            <img class="upImg" src="https://static.woshipm.com/WX_U_202010_20201009070042_2416.jpg?imageView2/2/w/80/size-limit/5k!?imageView2/2/w/80/size-limit/5k!" alt="回答图片" />
                            <span class="close">
                                <i class="iconfont icon-close"></i>
                            </span>
                        </div>
                        <div class="upload-column">
                            <img class="upImg" src="//static001.geekbang.org/account/avatar/00/0f/f7/6e/04f9a672.jpg?x-oss-process=image/resize,w_200,h_200" alt="回答图片" />
                            <span class="close">
                                <i class="iconfont icon-close"></i>
                            </span>
                        </div>
                        <div class="upload-column">
                            <img class="upImg" src="https://static.woshipm.com/WX_U_202010_20201009070042_2416.jpg?imageView2/2/w/80/size-limit/5k!?imageView2/2/w/80/size-limit/5k!" alt="回答图片" />
                            <span class="close">
                                <i class="iconfont icon-close"></i>
                            </span>
                        </div>
                        <div class="max-length">
                            <span>(6/6)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="comment-form flex-s-b">
                <div class="func_icon">
                    <div class="btn emoji-icon">
                        <i class="iconfont icon-biaoqing1"></i>
                        <div class="emoji-selector">
                            <div class="triangle"></div>
                            <div class="emoji-picker">
                                <div class="emojis">
                                    <ul class="category">
                                        <li class="item" @click="getEmo(index)" v-for="(item, index) in faceList" :key="index">
                                            <span>{{ item }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btn">
                        <i class="iconfont icon-tupian"></i>
                    </div>
                    <div class="btn">
                        <span class="num" v-if="maxlength >= content.length">{{ maxNum }}</span>
                        <span v-else class="num warn">{{ maxNum }}</span>
                    </div>
                </div>
                <div class="comment-operation">
                    <div :disabled="!content" pl-button plbtn-color="blue" class="comment-btn Button_button_3onsJ" @click="submit">
                        {{ btnText }}
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
const appData = require('../../../utils/emoji.json');
export default {
    props: {
        // placeholderText
        placeholderText: {
            type: String,
            default: '讲两句呗...'
        },

        // 按钮文字
        btnText: {
            type: String,
            default: '评论'
        },

        // 最大字数
        maxlength: {
            type: Number,
            default: 99999
        },

        // 值
        value: String
    },
    data() {
        return {
            content: '',
            mTextarea: null,
            isFocus: false,
            maxNum: '',
            faceList: []
        };
    },
    watch: {
        value() {
            // 清空
            if (!this.value) {
                this.mTextarea.innerText = '';
                this.content = '';
                this.maxNum = this.maxlength;
            }
        }
    },
    computed: {},
    created() {
        // 😃,
        // 😘,
        // 😂,
        // 😳,
        // 😍,
        // 👏,
        // 👍,
        // 👎,
        // 😁,
        // 😉,
        // 😠,
        // 😞,
        // 😥,
        // 😭,
        // 😝,
        // 😡,
        // ❤,
        // 💔,
        // 😣,
        // 😔,
        // 😄,
        // 😷,
        // 😚,
        // 😓,
        // 😊,
        // 😢,
        // 😜,
        // 😨,
        // 😰,
        // 😲,
        // 😏,
        // 😱,
        // 😪,
        // 😖,
        // 😌,
        // 😒,
        // 👻,
        // 🎅,
        // 👧,
        // 👦,
        // 👩,
        // 👨,
        // 🐶,
        // 🐱,
        // 👊,
        // ✊,
        // ✌,
        // 💪,
        // 👆,
        // 👇,
        // 👉,
        // 👈,
        // 👌,
        // 💩,

        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f603.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f618.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f602.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f633.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f60d.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f44f.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f44d.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f44e.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f601.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f609.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f620.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f61e.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f625.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f62d.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f61d.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f621.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/2764.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f494.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f623.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f614.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f604.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f637.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f61a.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f613.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f60a.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f622.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f61c.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f628.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f630.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f632.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f60f.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f631.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f62a.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f616.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f60c.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f612.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f47b.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f385.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f467.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f466.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f469.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f468.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f436.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f431.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f44a.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/270a.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/270c.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f4aa.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f446.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f447.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f449.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f448.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f44c.svg
        // https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f4a9.svg
        console.log(appData);
        for (let i in appData) {
            this.faceList.push(appData[i].value);
        }

        console.log(this.entitiesToUtf16(this.utf16toEntities('😇')));
    },
    mounted() {
        this.$nextTick(() => {
            this.mTextarea = this.$refs.mTextarea;
            // 回显
            this.mTextarea.innerText = this.value;
            this.content = this.mTextarea.innerText;
            this.maxNum = this.maxlength;
        });
    },
    watch: {},
    methods: {
        entitiesToUtf16(str) {
            return str.replace(/&#(\d+);/g, function(match, dec) {
                let H = Math.floor((dec - 0x10000) / 0x400) + 0xd800;
                let L = (Math.floor(dec - 0x10000) % 0x400) + 0xdc00;
                return String.fromCharCode(H, L);
            });
        },
        utf16toEntities(str) {
            var patt = /[\ud800-\udbff][\udc00-\udfff]/g; // 检测utf16字符正则
            return str.replace(patt, function(char) {
                var H, L, code;
                if (char.length === 2) {
                    H = char.charCodeAt(0); // 取出高位
                    L = char.charCodeAt(1); // 取出低位
                    code = (H - 0xd800) * 0x400 + 0x10000 + L - 0xdc00; // 转换算法
                    return '&#' + code + ';';
                } else {
                    return char;
                }
            });
        },
        // 输入框监听事件
        domInput(event) {
            let innerText = this.mTextarea.innerText;
            // 限制输入
            if (innerText.length >= this.maxlength) {
                console.log(innerText.length);
                // innerText = innerText.substring(0, this.maxlength);
                this.mTextarea.innerText = innerText;
                this.content = innerText;
            }

            // 值
            this.content = innerText;
            // 剩余字符串
            this.maxNum = this.maxlength - this.content.length;
            // 设置光标到最后
            this.setFocus();
        },

        // 设置光标到最后
        setFocus() {
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(this.mTextarea);
            range.collapse(false);
            selection.removeAllRanges();
            selection.addRange(range);
        },

        // 提交评论
        submit() {
            if (this.content) {
                this.$emit('submit', this.content);
            }
        }
    }
};
</script>

<style scoped lang="scss">
.comment-form {
    margin-top: 12px;

    &:first-child {
        margin-top: 0;
    }

    .avatar-box {
        width: 32px;
        height: 32px;
        margin-right: 12px;

        img {
            width: 100%;
            height: 100%;
            border-radius: 100%;
            display: block;
        }
    }

    .func_icon {
        height: 100%;
        margin-left: 45px;
        vertical-align: middle;

        .btn {
            display: inline-block;
            cursor: pointer;
            color: #446586;
            user-select: none;
            margin-left: 8px;
            vertical-align: middle;

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
                font-size: 20px;
                vertical-align: middle;
            }

            .num {
                color: #999;
                font-size: 12px;
            }

            .warn {
                color: red;
            }
        }

        .emoji-icon {
            position: relative;

            .emoji-selector {
                position: absolute;
                top: 40px;
                z-index: 1;
                bottom: 0;
                width: 280px;
                height: 230px;
                border-radius: 3px;
                background-color: #fff;
                box-shadow: 0 5px 18px 0 rgba(0, 0, 0, 0.16);

                .triangle {
                    position: absolute;
                    top: -7px;
                    left: 20px;
                    width: 0;
                    height: 0;
                    transform: translate(-50%, -50%);
                    border: 8px solid transparent;
                    border-bottom-color: #fff;
                    z-index: 100;
                }

                .emoji-picker {
                    .emojis {
                        .category {
                            max-width: 280px;
                            max-height: 230px;
                            display: flex;
                            flex-wrap: wrap;
                            align-items: center;
                            justify-content: flex-start;
                            overflow-y: scroll;
                            padding: 10px;

                            .item {
                                font-size: 20px;
                                padding: 5px;
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }
    }

    .no-reference {
        padding: 10px;
    }

    .pic-row {
        overflow: hidden;
        margin-top: 15px;
        align-items: flex-end;

        .upload-column {
            width: 68px;
            height: 68px;
            border-radius: 4px;
            position: relative;
            overflow: hidden;
            margin-right: 6px;

            .upImg {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            &:hover .close {
                display: block;
            }

            .close {
                display: none;
                width: 20px;
                height: 20px;
                cursor: pointer;
                position: absolute;
                top: 0px;
                right: 0px;
                text-align: center;
                vertical-align: middle;

                &:hover {
                    background: rgba(0, 0, 0, 0.5);
                }

                .icon-close {
                    font-size: 20px;
                    color: #fff;
                }
            }
        }

        .max-length {
            font-size: 16px;
            color: #999;
        }
    }

    .comment-input {
        position: relative;
        flex-grow: 1;
        border: 1px solid #d8dedf;
        border-radius: 3px;
        transition: all 0.3s ease;
        max-width: 522px;
    }

    .comment-input[focus] {
        border-color: #409eff;
    }

    .textarea {
        position: relative;
        display: block;
        box-sizing: border-box;
        width: 100%;
        min-height: 50px;
        max-height: 300px;
        line-height: 18px;
        font-size: 14px;
        font-weight: 400;
        resize: none;
        overflow-y: auto;
        // -webkit-user-modify: read-write-plaintext-only;
        outline: none;
        user-select: auto;
        -webkit-user-select: auto;
        border: none;
    }

    .textarea.empty:after {
        content: attr(placeholder);
        position: absolute;
        top: 0px;
        font-weight: 500;
        color: #828a92;
        opacity: 0.6;
    }

    .comment-operation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 16px;

        .comment-btn {
            position: relative;
            top: -1px;
            left: 0px;
            width: 74px;
            height: 32px;
        }

        .Button_button_3onsJ {
            box-sizing: border-box;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            line-height: 1;
            text-size-adjust: 100%;
            transition: all 0.3s ease;
            // user-select: none;
            // touch-action: manipulation;
            cursor: pointer;
            border-radius: 3px;
        }

        [plbtn-color='blue'] {
            background: #409eff;
            border: 1px solid #409eff;
            box-shadow: none;
            color: #fff;
        }

        [plbtn-color='blue'][pl-button][disabled='disabled'] {
            background: #409eff;
            opacity: 0.6;
        }

        [pl-button][disabled],
        [pl-button][disabled]:hover,
        [pl-button][disabled]:active {
            border: none;
            box-shadow: none;
            color: #fff;
            cursor: not-allowed;
        }
    }
}
</style>
