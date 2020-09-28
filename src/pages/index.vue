<template>
    <div>
        <header-inner :list="nav" />
        <sidebar-menu />
        <MainContent />
    </div>
</template>

<script>
import header from "@/components/header";
import SidebarMenu from "@/components/SidebarMenu";
import MainContent from "@/components/MainContent";
export default {
    name: "index",
    components: {
        "header-inner": header,
        SidebarMenu,
        MainContent
    },
    data() {
        return {
            nav: [
                {
                    title: "首页",
                    link: ""
                },
                {
                    title: "java学习",
                    link: ""
                },
                {
                    title: "资料下载",
                    link: ""
                },
                {
                    title: "交流社区",
                    link: ""
                },
                {
                    title: "意见反馈",
                    link: ""
                },
                {
                    title: "关于我们",
                    link: ""
                }
            ]
        };
    }
};
</script>

<style scoped></style>
