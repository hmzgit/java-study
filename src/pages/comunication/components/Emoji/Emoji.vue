<template>
  <el-popover class="emoji-wrap" placement="bottom-start" width="400" trigger="click">
    <div class="emotionList">
      <b v-for="(item,idx) in faceList" :key="idx" class="emotionItem" @click="getEmo(idx)">{{ item }}</b>
    </div>
    <slot slot="reference"></slot>
  </el-popover>
</template>

<script>
import appData from './emoji.json'
const changeSelectedText = (textArea, str) => {
  if (window.getSelection) {
    // 非IE浏览器
    // textArea.setRangeText(str)
    // 在未选中文本的情况下，重新设置光标位置
    textArea.selectionStart += str.length
    textArea.focus()
  } else if (document.selection) {
    // IE浏览器
    textArea.focus()
    // var sel = document.selection.createRange()
    // sel.text = str
  }
}
export default {
  name: 'Emoji',
  props: {
    textAreaId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      faceList: appData
    }
  },
  methods: {
    getEmo (idx) {
      const textArea = document.getElementById(this.textAreaId)
      this.$emit('handleEmoji', this.faceList[idx])
      changeSelectedText(textArea, this.faceList[idx])
    }
  }
}
</script>

<style>
/* el-popover是和app同级的，所以scoped的局部属性设置了无效 */
/* 需要设置全局style */
.emoji-wrap {
  height: 200px;
  width: 400px;
  overflow: scroll;
  overflow-x: auto;
}
</style>

<style scoped>
.emotionList {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
}
.emotionItem {
  width: 10%;
  font-size: 20px;
  text-align: center;
}
</style>
