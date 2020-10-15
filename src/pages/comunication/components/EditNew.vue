<template>
    <div class="input-wrap">
        <el-input id="myComment" ref="commentInput" v-model="textarea" type="textarea" placeholder="我们一起聊聊那些有趣的事情" maxlength="300" show-word-limit>
            <!-- <div slot="append">发送评论</div> -->
        </el-input>
        <div class="emoji">
            <Emoji :textAreaId="'myComment'" @handleEmoji="handleEmoji">
                <img class="emoji-face" src="@/assets/face.png" alt="" />
            </Emoji>
        </div>
        <el-button :loading="loading" class="handle-comment" @click="sendComment">发送评论</el-button>
    </div>
</template>

<script>
import Emoji from './Emoji/Emoji';
export default {
    components: {
        Emoji
    },
    props: {},
    data() {
        return {
            textarea: '',
            loading: false
        };
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {
        handleEmoji(face) {
            this.textarea = this.textarea + face;
        },
        sendComment() {}
    }
};
</script>

<style scoped lang="scss"></style>
