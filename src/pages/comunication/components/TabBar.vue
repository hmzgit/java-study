<template>
    <div class="nav_wrap shadow flex-s-b">
        <ul class="nav">
            <li v-for="(item, index) in list" :key="item.title" :class="active == index ? 'active' : ''" @click="changeMenu(index)" class="menu-item">
                <span class="link">
                    <svg-icon v-if="index == 2" className="reward" iconClass="reward"></svg-icon>
                    {{ item.title }}
                </span>
            </li>
        </ul>
        <div class="btns">
            <div class="btn flex-align-center">提问</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabBar',
    data() {
        return {
            active: 0,
            list: [
                {
                    title: '最新'
                },
                {
                    title: '热门'
                },
                {
                    title: '悬赏'
                }
            ]
        };
    },
    mounted() {},
    methods: {
        changeMenu(index) {
            if (index != this.active) {
                this.active = index;
            }
        }
    }
};
</script>

<style scoped lang="scss">
.nav_wrap {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 15px 30px;

    .nav {
        list-style-type: none;
        margin: 0;
        display: flex;
        align-items: center;

        & .menu-item {
            .link {
                white-space: nowrap;

                .reward {
                    font-size: 18px;
                }
            }
        }

        & .active {
            color: #000;

            &:after {
                opacity: 1;
                transition: initial;
                transform: none;
            }
        }

        & li {
            display: inline-block;
            position: relative;
            margin-right: 30px;
            line-height: 38px;
            font-size: 16px;
            color: #333;
            cursor: pointer;

            &:after {
                content: ' ';
                display: block;
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 1px;
                background: #000;
                opacity: 0;
                transform: scaleX(0);
                transition: all 0.3s cubic-bezier(0.18, 0.89, 0.17, 0.88), opacity 0.25s ease;
            }

            &:hover {
                color: #000;

                &:after {
                    -webkit-transform: scaleX(1);
                    transform: scaleX(1);
                    opacity: 1;
                }
            }
        }
    }

    .btn {
        width: 80px;
        height: 30px;
        background-color: rgb(74, 144, 226);
        color: #fff;
        font-size: 14px;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            opacity: 0.9;
        }
    }
}
</style>
