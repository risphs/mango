<template>
    <Header></Header>
    <Console></Console>
    <button @click="test()">Hi</button>
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
        },
        methods: {
            test() {
                testing();
            }
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
        const incoming: socketResponseLayout = JSON.parse(event.data);
        outgoingChecks(incoming);
    });

    socket.addEventListener('error', function (event) {
        console.log('ERROR: ', event);
    });

    const sendMessage = (message: string) => { // Must be a strigified JSON object of type socketResponseLayout
        socket.send(message);
    }

    function testing() {
        // TODO: Fix the CONSOLE-RUN and the CURRENT-CPU-USAGE
        const testRL: socketResponseLayout = {
            header: "CURRENT-CPU-USAGE",
            body: "dir"
        }
        const message = JSON.stringify(testRL);

        sendMessage(message);
    }

    export let consoleText: String[] = ['']; // This is the array that holds the console text
    export let systemTotalMemory: String = '1 TB';
    export let systemUsedMemory: String = '1 TB';
    export let systemsRegisteredProgram: String  = 'MongoDB';
    export let incomingTraffic: Number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Shows the last 10 didgets of the incoming traffic in people for the graph 
    export let incomingCPU: Number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    export let freeMemory: Number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    export function outgoingChecks(input: socketResponseLayout) {
    const value: any = input.body; // If statments are just putting the values in the right place

    if(input.header === 'CONSOLE-INFORMATION') {
        if(consoleText.length >= 25) {
            consoleText.push(value);
            consoleText.shift();
            return;
        }
        consoleText.push(value);
    } else if(input.header === 'CONSOLE-ERROR') {
        if(consoleText.length >= 25) {
            consoleText.push(value);
            consoleText.shift();
            return;
        }
        consoleText.push(value);

    } else if(input.header === 'SYSTEM-TOTAL-MEMORY-NUMBER') {
        systemTotalMemory = value;
    } else if(input.header === 'SYSTEM-USED-MEMORY-NUMBER') {
        systemUsedMemory = value;
    } else if(input.header === 'SYSTEM-REGISTERED-PROGRAM-INFORMATION') {
        systemsRegisteredProgram = value;
    } else if(input.header === 'CURRENT-INCOMING-TRAFFIC-NUMBER') {
        incomingTraffic.push(value);
        incomingTraffic.shift();
    } else if(input.header === 'FREE-MEMORY-NUMBER') {
        freeMemory.push(value);
        freeMemory.shift();
    } else if(input.header === 'CURRENT-CPU-USAGE-NUMBER') {
        incomingCPU.push(value);
        incomingCPU.shift();
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
