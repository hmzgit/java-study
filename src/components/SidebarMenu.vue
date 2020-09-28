<template>
    <aside class="sidebar">
        <div class="sidebar-inner">
            <div class="list">
                <ul class="menu-root">
                    <li>
                        <h3>java学习路线</h3>
                    </li>
                    <li v-for="(menu, index) in menus" :key="index">
                        <i
                            class="iconfont icon-arrow-right-bold"
                            :class="menuIndex == index ? 'arrow-down' : ''"
                        />
                        <a
                            @click.prevent="clickEvent(index)"
                            href=""
                            class="sidebar-link"
                            :class="menuIndex == index ? 'current' : ''"
                        >
                            {{ menu.title }}
                        </a>
                        <sidebar-menu-item
                            v-if="menuIndex == index && menu.childs"
                            :active="active"
                            :item="menu"
                            @select="onSelectItem"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </aside>
</template>

<script>
import SidebarMenuItem from "@/components/SidebarMenuItem";
export default {
    components: {
        SidebarMenuItem
    },
    data() {
        return {
            menuIndex: 0, // 第一层索引
            active: -1, // 第二层索引
            menus: [
                {
                    href: "/",
                    title: "第一阶段(java基础)"
                },
                {
                    href: "/basic-usage",
                    title: "第一章(java基础语法)"
                },
                {
                    href: "/props",
                    title: "环境搭建+入门",
                    childs: [
                        {
                            href: "/page/sub-page-1",
                            title: "01_java语言背景介绍",
                            childs: [
                                {
                                    href: "/page/sub-page-1",
                                    title: "01_xxxxxxx"
                                },
                                {
                                    href: "/page/sub-page-1",
                                    title: "02_xxxxxxx"
                                },
                                {
                                    href: "/page/sub-page-1",
                                    title: "03_xxxxxxx"
                                }
                            ]
                        },
                        {
                            href: "/page/sub-page-1",
                            title: "02_java语言跨平台原理"
                        },
                        {
                            href: "/page/sub-page-1",
                            title: "03_jdk下载和安装"
                        }
                    ]
                },
                {
                    href: "/",
                    title: "第二阶段(javaweb)"
                },
                {
                    href: "/",
                    title: "第三阶段(主流框架)"
                },
                {
                    href: "/",
                    title: "第四阶段(项目练习)"
                },
                {
                    href: "/",
                    title: "第五阶段(流行框架)",
                    childs: [
                        {
                            href: "/page/sub-page-1",
                            title: "01_java语言背景介绍"
                        },
                        {
                            href: "/page/sub-page-1",
                            title: "02_java语言跨平台原理"
                        },
                        {
                            href: "/page/sub-page-1",
                            title: "03_jdk下载和安装"
                        }
                    ]
                },
                {
                    href: "/",
                    title: "第六阶段(项目练习)"
                },
                {
                    href: "/",
                    title: "第七阶段(面试经验)"
                },
                {
                    href: "/",
                    title: "第四阶段(项目练习)"
                },
                {
                    href: "/",
                    title: "第五阶段(流行框架)"
                },
                {
                    href: "/",
                    title: "第六阶段(项目练习)"
                },
                {
                    href: "/",
                    title: "第七阶段(面试经验)"
                },
                {
                    href: "/",
                    title: "第四阶段(项目练习)"
                },
                {
                    href: "/",
                    title: "第五阶段(流行框架)"
                },
                {
                    href: "/",
                    title: "第六阶段(项目练习)"
                },
                {
                    href: "/",
                    title: "第七阶段(面试经验)"
                }
            ]
        };
    },
    methods: {},
    created() {},
    mounted() {},
    methods: {
        // 选中第一层
        clickEvent(index) {
            if (index != this.menuIndex) {
                this.menuIndex = index;
            }
        },

        // 选中第二层
        onSelectItem(index) {
            this.active = index;
        }
    }
};
</script>
<style rel="stylesheet/scss" lang="scss">
@import "../assets/style/sidebar-menu.scss";
</style>
