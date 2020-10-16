<template>
    <div class="emoji-selector">
        <div class="emoji-picker">
            <div class="emojis">
                <ul class="category">
                    <li class="item" @click="getEmoji(item)" v-for="item in emojis" :key="item.key">
                        <img class="emoji-img" :src="item.cdn" :alt="item.value" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
const appData = require('./emoji.json');
export default {
    props: {},
    data() {
        return {
            emojis: []
        };
    },
    created() {
        for (let i in appData) {
            this.emojis.push(appData[i]);
        }
    },
    mounted() {},
    methods: {
        // 插入表情
        getEmoji(item) {
            this.$emit('addEmoji', item);
        }
    }
};
</script>

<style scoped lang="scss">
.emoji-selector {
    position: absolute;
    top: -245px;
    left: -20px;
    bottom: 0;
    width: 280px;
    height: 230px;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 0 5px 18px 0 rgba(0, 0, 0, 0.16);
    animation: up 0.3s;
    z-index: 10;

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

        &::after {
            border-width: 8px 8px 0 8px;
            border-color: #fff transparent transparent transparent;
            position: absolute;
            bottom: -8px;
            left: 22px;
            content: '';
            width: 0;
            height: 0;
            border-style: solid;
        }
    }
}

@keyframes up {
    0% {
        -webkit-transform: translateY(20px);
        transform: translateY(20px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
    }
}
</style>
