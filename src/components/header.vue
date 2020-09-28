<template>
    <header id="header">
        <a class="logo-font">java学习网</a>
        <ul id="nav">
            <li
                v-for="item in list"
                :key="item.title"
                class="nav-dropdown-container"
            >
                <a class="nav-link">{{ item.title }}</a>
            </li>

            <li class="nav-dropdown-container personal-info">
                <div class="left">
                    <img
                        class="head"
                        src="https://mirror-gold-cdn.xitu.io/168e09bdb66bcf662a4?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
                        alt=""
                    />
                </div>
                <div class="right">
                    <p class="title">fend.</p>
                    <p class="level">
                        <span>初学者</span>
                        <span>|</span>
                        <span>未认证</span>
                    </p>
                </div>
                <ul class="nav-dropdown">
                    <li>
                        <a class="nav-link">
                            <i class="iconfont icon-gerenzhuyeyeye"></i>
                            <span>我的主页</span>
                        </a>
                    </li>
                    <li>
                        <a class="nav-link">
                            <i class="iconfont icon-tuichudenglu"></i>
                            <span>退出登陆</span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        list: {
            type: Array
        }
    },
    methods: {},
    created() {},
    mounted() {}
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
#header {
    position: fixed;
    width: 100%;
    top: 0;
    background-color: #fff;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
    transition: background-color 0.3s ease-in-out;
    padding: 10px 60px;
    z-index: 20;
}

@media screen and (max-width: 1000px) {
    #header {
        display: none;
    }
}

.logo-font {
    font-size: 1.5em;
    line-height: 40px;
    color: #273849;
    font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    font-weight: bold;
}

#nav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: fixed;
    right: 30px;
    top: 10px;
    height: 40px;
    display: flex;
    align-items: center;

    & .nav-dropdown-container {
        padding-right: 0.8em;

        .nav-link {
            cursor: pointer;
            padding-bottom: 3px;
            white-space: nowrap;
        }
    }

    & li {
        display: inline-block;
        position: relative;
        margin: 0 0.6em;
    }

    & .nav-dropdown {
        display: none;
        max-height: calc(100vh - 61px);
        overflow-y: auto;
        position: absolute;
        top: 105%;
        right: 15px;
        background-color: #fff;
        padding: 10px 0;
        border: 1px solid #ddd;
        border-bottom-color: #ccc;
        text-align: left;
        border-radius: 4px;
        white-space: nowrap;

        & li {
            line-height: 2em;
            margin: 0;
            display: block;
        }

        & a {
            display: flex;
            align-items: center;
            padding: 0 24px 0 20px;

            .icon-gerenzhuyeyeye,
            .icon-tuichudenglu {
                font-size: 20px;
                color: #b2bac2;
                margin-right: 8px;
            }
        }
    }
}

#nav .personal-info {
    height: 40px;
    display: flex;
    align-items: center;

    .left .head {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid #fff;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);
        margin-right: 10px;
    }

    .right {
        .title {
            font-size: 16px;
            color: #333;
            font-weight: bold;
        }

        .level {
            font-size: 14px;
            color: #666;
        }
    }

    &:hover .nav-dropdown {
        display: block;
    }
}
</style>
