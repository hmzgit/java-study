<template>
    <aside class="aside-right">
        <div class="hot-block">
            <div class="hot-t flex-s-b">
                <span class="flex-align">
                    <i class="iconfont icon-shangchuan"></i>
                    <em>上传资料</em>
                </span>
                <span>
                    <i class="iconfont icon-wenhao"></i>
                </span>
            </div>
            <div class="hot-m">
                <div class="wrap flex-align">
                    <label class="label">资料名称:</label>
                    <input spellcheck="false" autocomplete="off" type="text" placeholder="请输入资料名称" class="data-name">
                </div>
                <div class="wrap textarea  flex-align">
                    <label class="label">分享地址:</label>
                    <textarea spellcheck="false" autocomplete="off" placeholder="请粘贴分享地址" class="share-address"></textarea>
                </div>
            </div>
            <div class="hot-b">我要上传</div>
        </div>
    </aside>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>

<style scoped lang="scss">
.aside-right {
  width: 300px;
  margin-left: 20px;

  .hot-block {
    background-color: #fff;
    margin-bottom: 20px;
    box-shadow: 0px 3px 10px 0px rgba(153, 153, 153, 0.1);
    border-radius: 4px;

    .hot-t {
      height: 50px;
      line-height: 50px;
      padding: 0 25px;
      font-size: 18px;
      color: #333;
      font-weight: bold;
      border-bottom: 1px solid #f2f2f2;

      .icon-shangchuan {
        font-size: 18px;
        color: rgb(74, 144, 226);
        margin-right: 10px;
      }

      .icon-wenhao {
        font-size: 18px;
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
          font-size: 14px;
          color: #333;
          border: 1px solid #eee;
          border-radius: 4px;
          transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

          &:focus {
            border: 1px solid rgb(74, 144, 226);
          }
        }

        .data-name {
          height: 30px;
          line-height: 30px;
          padding: 2px 15px 0 15px;
        }

        .share-address {
          height: 80px;
          padding: 5px 15px;
          font-family: '微软雅黑';
          outline: none;
          resize: none;
        }
      }
    }

    .hot-b {
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 16px;
      color: #406080;
      cursor: pointer;
      user-select: none;
    }
  }
}
</style>
