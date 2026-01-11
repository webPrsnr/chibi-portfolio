<template>
    <div class="bg-pattern bg-container">
        <slot />
    </div>
</template>

<style scoped>
.bg-container {
    width: 100vw;
    height: 100vh;
}

.bg-pattern {
    background-color: #e5e5f7;
    opacity: 0.2;
    background-image: linear-gradient(135deg, #444cf7 25%, transparent 25%), linear-gradient(225deg, #444cf7 25%, transparent 25%), linear-gradient(45deg, #444cf7 25%, transparent 25%), linear-gradient(315deg, #444cf7 25%, #e5e5f7 25%);
    background-position: 18px 0, 18px 0, 0 0, 0 0;
    background-size: 18px 18px;
    background-repeat: repeat;
}
</style>
