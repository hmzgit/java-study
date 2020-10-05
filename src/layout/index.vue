<template>
  <div>
    <div class="mian">
      <header-top />
      <div class="mian-body">
        <div class="main-container">
          <app-main />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HeaderTop, AppMain } from "./components";
export default {
  name: "index",
  components: {
    HeaderTop,
    AppMain
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.mian {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mian-body {
  width: 1100px;
  margin-top: 61px;
}

.main-container {
  margin-top: 20px;
  /* background-color: #fff; */
}
</style>
