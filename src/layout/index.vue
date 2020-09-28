<template>
  <div>
    <header-top />

    <div class="main-container">
      <app-main />
    </div>
  </div>
</template>

<script>
import { HeaderTop, AppMain } from "./components";
export default {
  name: "index",
  components: {
    HeaderTop,
    AppMain,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.main-container {
  margin-top: 60px;
}
</style>
