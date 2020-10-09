<template>
    <header id="header">
        <div class="container flex-align">
            <a class="logo-font">java学习网</a>
            <ul id="nav">
                <li v-for="(item, index) in list" :key="item.title" :class="active == index ? 'active' : ''" @click="changeNav(index)" class="nav-dropdown-container">
                    <router-link class="nav-link" :to="item.link">{{ item.title }}</router-link>
                </li>

                <li class="nav-dropdown-container personal-info">
                    <div class="left">
                        <img class="head" src="https://mirror-gold-cdn.xitu.io/168e09bdb66bcf662a4?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1" alt="" />
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
                                <span>我的主页</span>
                            </a>
                        </li>
                        <li>
                            <a class="nav-link">
                                <span>退出登陆</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            list: [
                {
                    title: '首页',
                    link: '/'
                },
                {
                    title: 'java学习',
                    link: '/study'
                },
                {
                    title: '资料下载',
                    link: '/download'
                },
                {
                    title: '学习圈子',
                    link: '/comunication'
                },
                {
                    title: ' 组队学习',
                    link: '/feedback'
                },
                {
                    title: '关于我们',
                    link: '/about'
                }
            ]
        };
    },
    props: {},
    created() {},
    mounted() {},
    methods: {
        changeNav(index) {
            console.log(111);
            if (index != this.active) {
                this.active = index;
            }
        }
    }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
#header {
    position: fixed;
    width: 100%;
    top: 0;
    background-color: #fff;
    transition: background-color 0.3s ease-in-out;
    padding: 0 60px;
    z-index: 20;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.11);

    .container {
        position: relative;
        width: 1000px;
        height: 70px;
        margin: 0 auto;

        .logo-font {
            font-size: 1.5em;
            line-height: 40px;
            color: #273849;
            font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
            font-weight: bold;
        }

        #nav {
            list-style-type: none;
            margin: 0;
            padding: 0;
            position: absolute;
            right: 0;
            top: 0;
            height: 70px;
            display: flex;
            align-items: center;

            & .nav-dropdown-container {
                .nav-link {
                    cursor: pointer;
                    padding-bottom: 3px;
                    white-space: nowrap;

                    &:hover {
                        color: rgb(81, 147, 221);
                    }
                }
            }

            & .active .nav-link {
                color: rgb(74, 144, 226);
                transition: all 0.3s ease;

                &:after {
                    content: ' ';
                    display: block;
                    position: absolute;
                    left: 0;
                    bottom: -10px;
                    width: 100%;
                    height: 2px;
                    background: rgb(74, 144, 226);
                }
            }

            & li {
                display: inline-block;
                position: relative;
                margin: 0 18px;
            }

            & .nav-dropdown {
                display: none;
                background-color: #fff;
                right: 0;
                line-height: 1.8;
                position: absolute;
                top: 45px;
                width: 120px;
                z-index: 11;
                box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
                box-sizing: border-box;
                border-radius: 5px;
                text-align: center;
                padding: 10px 0;

                &:before {
                    background: #fff none repeat scroll 0 0;
                    box-shadow: -1px -1px 3px -1px rgba(0, 0, 0, 0.15);
                    content: '';
                    display: block;
                    height: 10px;
                    left: 82px;
                    position: absolute;
                    top: -12px;
                    transform: rotate(45deg) translate(6px, 6px);
                    width: 10px;
                }

                & li {
                    width: 100%;
                    height: 48px;
                    line-height: 48px;
                    margin: 0;
                    font-size: 14px;
                    padding: 0 10px;
                    color: #555;

                    &:hover {
                        background-color: #f7f7f7;
                        color: rgb(74, 144, 226);
                    }

                    &:hover a {
                        color: rgb(74, 144, 226);
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
                cursor: pointer;
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
                    cursor: pointer;
                }
            }

            &:hover .nav-dropdown {
                display: block;
            }
        }
    }
}

@media screen and (max-width: 1000px) {
    #header {
        display: none;
    }
}
</style>
