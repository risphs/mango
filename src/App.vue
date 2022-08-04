<template>
    <Header></Header>
</template>

<script lang="ts">
    import Header from './components/Header.vue'

    export default {
        name: 'App',
        components: {
            Header
        }
    }
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: #F1F5F9;
    color: #fff;
    margin-top: 60px;
}
</style>
