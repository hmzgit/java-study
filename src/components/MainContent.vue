<template>
    <main class="page">
        <div class="theme-default-content content__default">
            <h1>java语言跨平台原理</h1>
            <div class="vueschool">
                <a href="">
                    观看 Vue School 的关于 Vue Router 的免费视频课程 (英文)
                </a>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "MainContent",
    data() {
        return {};
    },
    methods: {},
    created() {},
    mounted() {},
    methods: {}
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.page {
    padding-bottom: 20px;
    padding-left: 301px;
    display: block;
}

.theme-default-content {
    &:not(.custom) {
        max-width: 740px;
        min-height: 740px;
        margin: 0 auto;
        padding: 91px 40px 30px 40px;
        // border: 1px solid #eaecef;
    }

    .vueschool {
        background-color: #e7ecf3;
        padding: 1em 1.25em;
        border-radius: 2px;
        color: #486491;
        position: relative;
        display: flex;

        a {
            color: #486491 !important;
            position: relative;
            padding-left: 36px;

            &:before {
                content: "";
                position: absolute;
                display: block;
                width: 30px;
                height: 30px;
                top: -5px;
                left: -4px;
                border-radius: 50%;
                background-color: #73abfe;
            }

            &:after {
                content: "";
                position: absolute;
                display: block;
                width: 0;
                height: 0;
                top: 5px;
                left: 8px;
                border-top: 5px solid transparent;
                border-bottom: 5px solid transparent;
                border-left: 8px solid #fff;
            }
        }
    }
}
</style>
