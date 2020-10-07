<template>
    <div class="home-wrap">
        <Sidebar />
        <div class="home-main">
            <router-view />
        </div>
    </div>
</template>

<script>
import Sidebar from './components/SidebarMenu';
export default {
    components: { Sidebar },
    data() {
        return {};
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {}
};
</script>

<style scoped lang="scss">
.home-wrap {
    display: flex;
    flex-direction: row;
    .home-main {
        flex: 1;
        margin-left: 20px;
    }
}
</style>
