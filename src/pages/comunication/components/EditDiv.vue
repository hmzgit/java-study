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
                        @keydown="onEnter"
                        ref="mTextarea"
                        contenteditable="true"
                        spellcheck="false"
                        :placeholder="placeholderText"
                        class="textarea"
                        :class="{ empty: !content }"
                    ></div>
                    <div class="pic-row flex">
                        <div class="upload-column" v-for="(item, index) in uploadList" :key="index">
                            <img class="upImg" :src="item" alt="回答图片" />
                            <span class="close">
                                <i class="iconfont icon-close"></i>
                            </span>
                        </div>
                        <div class="max-length">
                            <span>({{ uploadList.length }}/6)</span>
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
                                        <li class="item" @click="getEmo(item)" v-for="(item, index) in emojis" :key="index">
                                            <img class="emoji-img" :src="item.svg" :alt="item.emoji" />
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
            emojis: [],
            uploadList: [
                'https://static.woshipm.com/TTW_USER_202004_20200414140658_1283.jpg?imageView2/2/w/80/size-limit/5k!?imageView2/2/w/80/size-limit/5k!',
                'https://static.woshipm.com/TTW_USER_R201706_20170602174604_6218.jpg?imageView2/2/w/80/size-limit/5k!?imageView2/2/w/80/size-limit/5k!',
                '//static001.geekbang.org/account/avatar/00/0f/f7/6e/04f9a672.jpg?x-oss-process=image/resize,w_200,h_200',
                'https://static.woshipm.com/WX_U_202010_20201009070042_2416.jpg?imageView2/2/w/80/size-limit/5k!?imageView2/2/w/80/size-limit/5k!',
                '//static001.geekbang.org/account/avatar/00/0f/f7/6e/04f9a672.jpg?x-oss-process=image/resize,w_200,h_200',
                'https://static.woshipm.com/WX_U_202010_20201009070042_2416.jpg?imageView2/2/w/80/size-limit/5k!?imageView2/2/w/80/size-limit/5k!'
            ]
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
        for (let i in appData) {
            this.emojis.push({
                emoji: appData[i].value,
                svg: appData[i].cdn
            });
        }
    },
    mounted() {
        this.$nextTick(() => {
            // 回显
            this.mTextarea = this.$refs.mTextarea;
            this.mTextarea.innerText = this.value;
            this.content = this.mTextarea.innerText;
            this.maxNum = this.maxlength;
        });
    },
    watch: {},
    methods: {
        // 输入框监听事件
        domInput(event) {
            let innerText = this.mTextarea.innerText;
            console.log(this.mTextarea.innerHTML);
            // 限制输入
            if (innerText.length >= this.maxlength) {
                this.mTextarea.innerText = innerText;
                this.content = innerText;
            }

            // 赋值最新值
            this.setData();
        },

        // 赋值最新值
        setData() {
            // 最新值
            this.content = this.getEditValue(this.mTextarea);
            // 剩余字符串字数
            this.maxNum = this.maxlength - this.content.length;
            // 设置光标到最后
            this.setFocus();
        },

        // 回车换行事件
        onEnter(e) {
            if (e.keyCode === 13) {
                /*调用光标插入方法，在光标处插入 换行*/
                this.insertHtmlAtCaret('<br>');
                return false;
            }
        },

        // 插入内容
        insertHtmlAtCaret(html, isFocus = false) {
            var sel, range, frag;
            if (window.getSelection) {
                // 没获取焦点时点击表情的处理
                if (isFocus) {
                    let edit = this.mTextarea;
                    if (!edit.hasfocus) {
                        edit.focus();
                    }
                }
                sel = window.getSelection();
                if (sel.getRangeAt && sel.rangeCount) {
                    range = sel.getRangeAt(0);
                    range.deleteContents();
                    var el = document.createElement('div');
                    el.innerHTML = html;
                    frag = document.createDocumentFragment();
                    var node;
                    var lastNode;
                    while ((node = el.firstChild)) {
                        lastNode = frag.appendChild(node);
                    }
                    range.insertNode(frag);
                    if (lastNode) {
                        range = range.cloneRange();
                        range.setStartAfter(lastNode);
                        range.collapse(true);
                        sel.removeAllRanges();
                        sel.addRange(range);
                    }
                }
            }
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

        // 插入表情
        getEmo(item) {
            let Img = `<img class="text-emoji" alt="${item.emoji}" src="${item.svg}" />`; // img是要插入的图片表情
            this.insertHtmlAtCaret(Img, true);
            // 赋值最新值
            this.setData();
        },

        // 获取输入框内容
        getEditValue(elem) {
            let res = '';
            Array.from(elem.childNodes).forEach(child => {
                if (child.nodeName === '#text') {
                    res += child.nodeValue;
                } else if (child.nodeName === 'BR') {
                    res += '↵';
                } else if (child.nodeName === 'IMG') {
                    res += child.alt;
                } else if (child.nodeName === 'DIV') {
                    res += this.getEditValue(child);
                }
            });
            return res;
        },

        // 提交评论
        submit() {
            let innerText = this.getEditValue(this.mTextarea);
            if (innerText) {
                console.log(innerText);
                this.$emit('submit', innerText);
            }
        }
    }
};
</script>

<style>
/* 动态添加的元素样式不生效 */
/* 样式不生效，因为标签里没有属性data-v-33f8ed40 */
/* style 去掉scoped 属性就好了*/
.text-emoji {
    vertical-align: sub;
    width: 20px;
    height: 20px;
    cursor: default;
    margin: 0 2px;
}
</style>

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
                top: 35px;
                left: -20px;
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
                    left: 30px;
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
                                padding: 5px 10px;
                                cursor: pointer;

                                .emoji-img {
                                    width: 22px;
                                    height: 22px;
                                    display: block;

                                    &:hover {
                                        transform: scale(1.2);
                                    }
                                }
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
            border-radius: 2px;
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
        word-break: break-word;
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
