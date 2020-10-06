<template>
    <div>
        <section class="article-comment-block">
            <div class="huifu-head">
                <div class="flex-align">
                    <strong>评论</strong>
                    <span class="line">|</span>
                    <span class="comment_count">
                        共4条
                    </span>
                </div>
            </div>
            <edit-div @submit="onSubmit" :btnText="btnText" :placeholderText="placeholderText" />
            <list />
        </section>
    </div>
</template>

<script>
import EditDiv from './EditDiv';
import list from './list';
export default {
    components: {
        EditDiv,
        list
    },
    data() {
        return {
            placeholderText: '发表评论',
            btnText: '评论'
        };
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {
        // 评论
        onSubmit(content) {
            console.log(content);
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
}
</style>
