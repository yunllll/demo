<template>
    <div style="background-color:green; width:400px; text-align:center;margin:0 auto;" class='t'>
      <h1 style="color:#fff">选择你最喜欢的运动</h1>
      <button class="button" v-for="sport in sports" :key="sport">{{ sport }}</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // 定义运动数组
  const sports = ref(['篮球', '足球', '游泳', '跑步', '自行车']);
  </script>
  
  <style scoped>
  .button {
    background-color: green;
    color: white;
    padding: 10px 20px;
    margin: 5px;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
  .button:hover {
    font-weight: bold;
    color: red;
  }
  t{
    
  }
  </style>
  