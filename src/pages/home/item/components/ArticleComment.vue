<template>
    <div>
        <section class="article-comment-block">
            <div class="huifu-head flex-align">
                <div>
                    <strong>评论</strong>
                    <span class="line">|</span>
                    <span class="comment_count">
                        共4条
                    </span>
                </div>
            </div>
            <div class="comment-form">
                <div class="comment-input no-reference" :focus="isFocus">
                    <div @focus="isFocus = true" @blur="isFocus = false" v-text="commentText" ref="comment" @input="changeComment" contenteditable="plaintext-only" spellcheck="false" placeholder="发表评论" class="textarea comment-textarea"></div>
                </div>
                <div class="comment-operation">
                    <div disabled pl-button plbtn-color="blue" class="comment-btn Button_button_3onsJ">评论</div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      commentText: "",
      isFocus: false
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    // 输入框监听事件
    changeComment(e) {
      this.commentText = this.$refs.comment.innerHTML;
      this.$nextTick(() => {
        this.keepLastIndex(e.target);
      });
    },

    // 解决光标定位问题
    keepLastIndex(obj) {
      if (window.getSelection) {
        //ie11 10 9 ff safari
        obj.focus(); //解决ff不获取焦点无法定位问题
        var range = window.getSelection(); //创建range
        range.selectAllChildren(obj); //range 选择obj下所有子内容
        range.collapseToEnd(); //光标移至最后
      } else if (document.selection) {
        //ie10 9 8 7 6 5
        var range = document.selection.createRange(); //创建选择对象
        //var range = document.body.createTextRange();
        range.moveToElementText(obj); //range定位到obj
        range.collapse(false); //光标移至最后
        range.select();
      }
    }
  }
};
</script>

<style scoped lang="scss">
.article-comment-block {
  transition: ease-in-out 0.5s;
  padding: 30px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 3px 10px 0px rgba(153, 153, 153, 0.1);
  margin-top: 20px;

  .huifu-head {
    padding-bottom: 30px;
    position: relative;

    & > div:first-child strong {
      font-size: 18px;
      color: #333;
    }

    & > div:first-child .line {
      margin: 0 10px;
      color: #e5e5e5;
    }

    & > div:first-child .comment_count {
      font-size: 14px;
      color: #999;
    }
  }

  //   .comment-form .comment-input {
  //     -webkit-transition: all 0.3s ease;
  //     -o-transition: all 0.3s ease;
  //     transition: all 0.3s ease;
  //   }
  //   .comment-form {
  //     display: flex;
  //     justify-content: space-between;
  //     align-items: flex-end;
  //   }
  //   .comment-form.unlogin-form {
  //     opacity: 0.4;
  //     pointer-events: none;
  //   }
  //   .comment-form .comment-textarea {
  //     padding: 6px 15px 0 0;
  //     border: none;
  //   }
  //   .comment-form .comment-input {
  //     position: relative;
  //     -webkit-box-flex: 1;
  //     -ms-flex-positive: 1;
  //     flex-grow: 1;
  //     padding: 14px 0 17px 17px;
  //     border: 1px solid #d8dedf;
  //     border-radius: 6px;
  //   }
  //   .comment-form .comment-input.no-reference {
  //     padding: 0 0 0 17px;
  //   }
  //   .comment-form .comment-input[focus] {
  //     border-color: #3db24b;
  //   }
  //   .comment-form .comment-input:after {
  //     content: "";
  //     position: absolute;
  //     right: 0;
  //     top: 1px;
  //     bottom: 1px;
  //     z-index: 10;
  //     width: 15px;
  //     background: #fff;
  //     border-radius: 6px;
  //   }
  //   .comment-form .comment-operation {
  //     display: -webkit-box;
  //     display: -ms-flexbox;
  //     display: flex;
  //     -webkit-box-pack: justify;
  //     -ms-flex-pack: justify;
  //     justify-content: space-between;
  //     -webkit-box-align: center;
  //     -ms-flex-align: center;
  //     align-items: center;
  //     margin-left: 16px;
  //   }
  //   .comment-form .comment-operation .comment-btn {
  //     position: relative;
  //     top: -1px;
  //     left: 0px;
  //     width: 83px;
  //     height: 37px;
  //     border-radius: 6px;
  //   }
  //   .comment-list h2 {
  //     position: relative;
  //     padding-bottom: 23px;
  //     text-indent: 17px;
  //     line-height: 1;
  //     font-size: 20px;
  //     font-weight: 600;
  //     color: #303030;
  //   }
  //   .comment-list h2:before {
  //     content: " ";
  //     display: block;
  //     position: absolute;
  //     left: 0;
  //     top: 0;
  //     width: 4px;
  //     height: 19px;
  //     border-radius: 4px;
  //     background: #3db24b;
  //   }
  //   .comment-list h2 .comment-number {
  //     font-size: 18px;
  //   }
  //   .comment-list .list {
  //     margin-top: 20px;
  //   }
  //   .comment-list .list .comment-item {
  //     position: relative;
  //     padding: 28px 0 16px 56px;
  //   }
  //   .comment-list .list .comment-item .comment-avatar {
  //     position: absolute;
  //     left: 0;
  //     top: 14px;
  //   }
  //   .comment-list .empty-comment {
  //     position: relative;
  //     left: 50%;
  //     display: inline-block;
  //     padding: 0 13px;
  //     margin-top: 20px;
  //     font-size: 14px;
  //     color: #828a92;
  //     text-align: center;
  //     -webkit-transform: translateX(-50%);
  //     -ms-transform: translateX(-50%);
  //     transform: translateX(-50%);
  //   }
  //   .comment-list .empty-comment:before,
  //   .comment-list .empty-comment:after {
  //     content: "";
  //     position: absolute;
  //     top: 50%;
  //     width: 3px;
  //     height: 3px;
  //     background: #828a92;
  //     border-radius: 50%;
  //     -webkit-transform: translateY(-50%);
  //     -ms-transform: translateY(-50%);
  //     transform: translateY(-50%);
  //   }

  .comment-form {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    & .comment-input.no-reference {
      padding: 0 0 0 17px;
    }

    & .comment-input {
      position: relative;
      flex-grow: 1;
      border: 1px solid #d8dedf;
      border-radius: 6px;
      transition: all 0.3s ease;
    }
    & .comment-input[focus] {
      border-color: #2c74e6;
    }

    & .comment-textarea {
      padding: 6px 15px 0 0;
      border: none;
    }

    & .comment-input:after {
      content: "";
      position: absolute;
      right: 0;
      top: 1px;
      bottom: 1px;
      z-index: 10;
      width: 15px;
      background: #fff;
      border-radius: 6px;
    }

    .textarea {
      position: relative;
      display: block;
      box-sizing: border-box;
      width: 100%;
      min-height: 36px;
      max-height: 130px;
      border-radius: 6px;
      line-height: 24px;
      font-size: 16px;
      font-weight: 400;
      resize: none;
      overflow-y: auto;
      -webkit-user-modify: read-write-plaintext-only;
      outline: none;
    }

    .textarea.empty:after {
      content: attr(placeholder);
      position: absolute;
      top: 6px;
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
        width: 83px;
        height: 37px;
        border-radius: 6px;
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

      // pl-button plbtn-color="blue"
      [plbtn-color="blue"][pl-button][disabled="disabled"] {
        background: #2c74e6;
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
}
</style>
