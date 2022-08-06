<template>
    <Header></Header>
    <Console></Console>
</template>

<script lang="ts">
    import Header from './components/Header.vue'
    import Console from './components/Console.vue'

    export let ip: String = 'localhost'; // Currently set to a loop-back ip address so it will always work on your local machine however you can change this to 'localhost'
    export let port: Number = 8000;

    export default {
        name: 'App',
        components: {
            Header,
            Console
        }
    }

    // Connecting to WebSocket located on the server

    interface socketResponseLayout {
        header: String,
        body: String
    }

    const socket = new WebSocket(`ws://${ip}:${port}`);

    socket.addEventListener('close', function(event) {
        console.log("Disconnected from the WebSocket");
    }); 

    socket.addEventListener('message', function (event) {
        outgoingChecks(JSON.parse(event.data));
    });

    socket.addEventListener('error', function (event) {
        console.log('ERROR: ', event);
    });

    const sendMessage = (message: string) => { // Must be a strigified JSON object of type socketResponseLayout
        socket.send(message);
    }

    export function outgoingChecks(input: socketResponseLayout) {
    if(input.header === 'CONSOLE-INFORMATION') {

    } else if(input.header === 'CONSOLE-ERROR') {

    } else if(input.header === 'SYSTEM-TOTAL-MEMORY-NUMBER') {

    } else if(input.header === 'SYSTEM-USED-MEMORY-NUMBER') {

    } else if(input.header === 'SYSTEM-REGISTERED-PROGRAM-INFORMATION') {

    } else if(input.header === 'CURRENT-INCOMING-TRAFFIC-NUMBER') {

    } else if(input.header === 'CURRENT-MEMORY-USAGE-NUMBER') {

    } else if(input.header === 'CURRENT-CPU-USAGE-NUMBER') {

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
