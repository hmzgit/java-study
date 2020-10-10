<template>
    <div class="mian">
        <list />
        <sidebar />
    </div>
</template>

<script>
import list from './components/list';
import sidebar from './components/sidebar';
export default {
    components: {
        list,
        sidebar
    },
    props: {},
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
.mian {
    display: flex;
    justify-content: space-between;
}
</style>
