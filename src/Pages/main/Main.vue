<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Text from '@/Common/ui/Text.vue'
import { Window } from '@/Modules/Window'

const { t } = useI18n()
</script>

<template>
  <section class="main-section">
    <Window
      title="chibi_cv.EXE"
      h="90%"
      w="40%"
      style="flex:1"
    >
      <Text
        fw="bold"
        fz="xl"
      >
        {{ t('home.test') }}
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
