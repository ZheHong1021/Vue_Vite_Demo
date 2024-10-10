<script setup>
// 建立一個 imageSrc 變數，用來儲存圖片的路徑
// 使用 URL 物件建立一個新的 URL，並將路徑轉換為絕對路徑
const imageSrc = new URL('@images/工程吉娃娃.png', import.meta.url).href
</script>
<template>
  <div>
    <h1>Image View</h1>
    <img :src="imageSrc" alt="工程吉娃娃" />
  </div>
</template>

<style></style>
