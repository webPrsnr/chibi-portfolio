<template>
  <div class="layout-container">
    <div class="sub-container sub-bg">
      <div class="bg-pattern" />
    </div>

    <div class="sub-container sub-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.layout-container {
  position: relative;
}

.sub-container {
  position: absolute;
  width: 100vw;
  height: 100vh;
}

.sub-bg {
  z-index: var(--z-index-xs);
}

.sub-content {
  z-index: var(--z-index-sm);
}

.bg-pattern {
  width: 100%;
  height: 100%;
  background-color: #e5e5f7;
  opacity: 0.2;
  background-image:
    linear-gradient(135deg, #444cf7 25%, transparent 25%),
    linear-gradient(225deg, #444cf7 25%, transparent 25%),
    linear-gradient(45deg, #444cf7 25%, transparent 25%),
    linear-gradient(315deg, #444cf7 25%, #e5e5f7 25%);
  background-position:
    18px 0,
    18px 0,
    0 0,
    0 0;
  background-size: 18px 18px;
  background-repeat: repeat;
}
</style>
