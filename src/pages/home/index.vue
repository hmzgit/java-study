<template>
  <div class="home-wrap">
    <Sidebar></Sidebar>
    <div class="home-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/SidebarMenu";
export default {
  components: { Sidebar },
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
};
</script>

<style scoped lang="scss">
.home-wrap {
  display: flex;
  flex-direction: row;
  .home-main {
    flex: 1;
  }
}
</style>
