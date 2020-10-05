<template>
  <div :class="$style.App">
    <div class="Header">
      <TheHeader />
    </div>
    <div :class="$style.Scrollable">
      <main :class="$style.MainContent">
        <router-view />
      </main>
      <div>
        <TheFooter />
      </div>
    </div>
  </div>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
<style module lang="scss">
.App {
  @include base-font;
  width: 100%;
  .Scrollable {
    @include layout-fit($top: $header-height);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .Header {
    @include layout-fix($bottom: auto);
    height: $header-height;
    z-index: $z-index-header;
  }

  .MainContent {
    position: relative;
    flex-grow: 1;
  }
}
</style>
