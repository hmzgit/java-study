<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App",
    created() {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
@import "assets/style/index.scss";
@import "assets/icon/iconfont.css";
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
