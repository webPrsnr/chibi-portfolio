<script setup lang="ts">
import Text from '@/Common/ui/Text.vue'
import { Window } from '@/Modules/Window'
</script>

<template>
  <section class="main-section">
    <Window
      title="chibi_cv.EXE"
      h="90%"
      w="40%"
      style="flex:1"
    >
      <Text fw="bold">
        hello world
      </Text>
    </Window>
  </section>
</template>

<style scoped>
.main-section {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
