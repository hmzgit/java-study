<template>
    <div>
        <section class="article-comment-block">
            <div class="comment-form flex-s-b" style="align-items: flex-start;">
                <div class="avatar-box">
                    <img src="https://static.woshipm.com/TTW_USER_202004_20200414140658_1283.jpg?imageView2/2/w/80/size-limit/5k!?imageView2/2/w/80/size-limit/5k!" alt="用户头像" />
                </div>
                <div class="comment-input no-reference" :focus="isFocus">
                    <div @focus="isFocus = true" @blur="isFocus = false" @input="domInput" ref="mTextarea" contenteditable="true" spellcheck="false" :placeholder="placeholderText" class="textarea comment-textarea" :class="{ empty: !content }"></div>
                </div>
            </div>
            <div class="comment-form flex-s-b">
                <div class="func_icon">
                    <div class="btn">
                        <i class="iconfont icon-biaoqing1"></i>
                    </div>
                    <div class="btn">
                        <i class="iconfont icon-tupian"></i>
                    </div>
                    <div class="btn">
                        <span class="num" v-if="content.length < maxNum">{{maxNum}}</span>
                        <span v-else class="num warn">{{maxNum}}</span>
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
      maxNum: ''
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
  created() {},
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
    // 输入框监听事件
    domInput(event) {
      let innerText = this.mTextarea.innerText;
      // 限制输入
      if (innerText.length >= this.maxlength) {
          console.log(innerText.length)
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
  overflow: hidden;

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
    margin-left: 45px;
    vertical-align: middle;

    .btn {
      display: inline-block;
      cursor: pointer;
      color: #446586;
      user-select: none;
      margin-left: 8px;
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
  }

  & .comment-input.no-reference {
    padding: 0 0 0 10px;
  }

  & .comment-input {
    position: relative;
    flex-grow: 1;
    border: 1px solid #d8dedf;
    border-radius: 3px;
    transition: all 0.3s ease;
    max-width: 522px;
  }

  & .comment-input[focus] {
    border-color: #409eff;
  }

  & .comment-textarea {
    padding: 5px 10px 0 0;
    border: none;
  }

  & .comment-input:after {
    content: '';
    position: absolute;
    right: 0;
    top: 1px;
    bottom: 1px;
    z-index: 10;
    width: 15px;
    border-radius: 3px;
  }

  .textarea {
    position: relative;
    display: block;
    box-sizing: border-box;
    width: 100%;
    min-height: 32px;
    max-height: 300px;
    line-height: 24px;
    font-size: 14px;
    font-weight: 400;
    resize: none;
    overflow-y: auto;
    // -webkit-user-modify: read-write-plaintext-only;
    outline: none;
    user-select: auto;
    -webkit-user-select: auto;
  }

  .textarea.empty:after {
    content: attr(placeholder);
    position: absolute;
    top: 5px;
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
      border-radius: 3px;
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
      user-select: none;
      touch-action: manipulation;
      cursor: pointer;
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
