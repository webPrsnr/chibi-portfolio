<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Box from '@/Common/ui/Box.vue'
import Text from '@/Common/ui/Text.vue'
import { DialogBox } from '@/Modules/DialogBox'
import { Window } from '@/Modules/Window'

const { t } = useI18n()
</script>

<template>
  <Box
    as="section"
    h="100%"
    w="100%"
    display="flex"
    class="main-section"
  >
    <Window
      title="chibi_cv.EXE"
      h="90%"
      w="40%"
      flex="1"
    >
      <Text
        fw="bold"
        fz="xl"
      >
        {{ t('home.test') }}
      </Text>

      <DialogBox
        text="Some reandom text"
        title="Title"
      />
    </Window>
  </Box>
</template>

<style scoped>
.main-section {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
