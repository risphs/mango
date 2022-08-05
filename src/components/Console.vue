<template>
    <div id="console-container">
        <div id="console-background"></div>
        <h1 id="console-title">Console</h1>
        <p id="console-text"></p>
        <div id="text-box-container">
            <input type="text" id="console-input" placeholder="Type here...">
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Console',
}
</script>

<style>
#console-background {
    display: block;
    position: relative;

    width: 471px;
    height: 978px;
    left: 7px;
    top: 84px;

    margin-top: 10px;

    background: #1A212C;
    border-radius: 10px;
}

#console-title {
    width: 112px;
    height: 32px;

    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 31px;
    /* identical to box height */

    text-transform: uppercase;

    color: #FFFFFF;
}
</style>