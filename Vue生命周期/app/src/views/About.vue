<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{path:'/about/C/1'}" tag="button">动态路由1</router-link>
    <router-link :to="{path:'/about/C/2'}" tag="button">动态路由2</router-link>
    <router-view/>
  </div>
</template>
