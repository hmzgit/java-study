<template>
    <main>
        <section class="app-main">
            <transition name="fade-transform" mode="out-in">
                <router-view :key="key" />
            </transition>
        </section>
    </main>
</template>

<script>
export default {
    name: 'AppMain',
    computed: {
        key() {
            return this.$route.path;
        }
    }
};
</script>

<style scoped lang="scss">
.app-main {
    width: 100%;
    position: relative;
    overflow: hidden;
    padding-bottom: 20px;
}

.fixed-header + .app-main {
    padding-top: 50px;
}
</style>

<style lang="scss">
.el-popup-parent--hidden {
    .fixed-header {
        padding-right: 15px;
    }
}
</style>
