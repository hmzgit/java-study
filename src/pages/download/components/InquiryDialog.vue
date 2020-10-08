<template>
    <dialog-panel @close="handleClose">
        <template #inquiry>
            <div class="inquiry-block">
                <div class="title">确定要消耗5学习币下载吗?</div>
                <div class="buttons flex-align-center clearfix">
                    <div class="confirm" @click.stop="handleConfirm">确定</div>
                    <div class="cancel" @click.stop="handleClose">取消</div>
                </div>
            </div>
        </template>
    </dialog-panel>
</template>

<script>
import DialogPanel from '@/components/dialog';
export default {
  components: {
    DialogPanel
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    // 关闭弹窗
    handleClose() {
      this.$emit('close');
    },

    // 确认
    handleConfirm() {
      console.log('点击了确认');
    }
  }
};
</script>

<style scoped lang="scss">
.inquiry-block {
  width: 300px;
  padding: 15px 0;
  text-align: center;
  color: #333;

  .close {
    padding: 0 15px;
    text-align: right;

    .icon-close {
      font-size: 20px;
      color: #999;
      cursor: pointer;
    }
  }

  .title {
    font-size: 14px;
    padding: 30px 0;
  }

  .buttons {
    padding: 10px;

    .confirm,
    .cancel {
      display: inline-block;
      padding: 0 20px;
      height: 32px;
      line-height: 32px;
      color: #fff;
      text-align: center;
      cursor: pointer;
      font-size: 12px;
      border-radius: 40px;
    }

    .confirm {
      border: 1px solid rgb(74, 144, 226);
      background-color: rgb(74, 144, 226);
      margin-right: 30px;

      &:hover {
        opacity: 0.9;
      }
    }

    .cancel {
      border: 1px solid #dcdfe6;
      color: #606266;

      &:hover {
        color: rgb(74, 144, 226);
        border-color: #c6e2ff;
        background-color: #ecf5ff;
      }
    }
  }
}
</style>
