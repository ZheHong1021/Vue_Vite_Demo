<script setup>
import { ref } from 'vue'
import { PostService } from '@/api/index.js'

// 建立一個 posts 變數，用來儲存所有文章
const posts = ref([])

// 定義 fetchposts 函式，用來取得所有文章
const fetchPost = async () => {
  try {
    const response = await PostService.get_all() // 失敗
    if (response.status === 200) {
      posts.value = response.data
    }
  } catch (err) {
    console.log(err)
  } finally {
    console.log('finally')
  }
}

fetchPost()
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ posts }}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
