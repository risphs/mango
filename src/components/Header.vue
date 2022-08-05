<template>
        <div id="header-container">
            <div id="button-container">
                <button id="server-button" @click="setServer(1)">Server</button>
                <button id="server-button" @click="setServer(2)">Server</button>
                <button id="server-button" @click="setServer(3)">Server</button>
                <button id="server-button" @click="setServer(4)">Server</button>
                <button id="server-button" @click="setServer(5)">Server</button>
            </div> 
                <button id="add-server-button" @click="addServer">
                    <img id="add-server-button-icon" src="../assets/plus-solid.svg" alt="+">
                </button>
                <h1 id="title">Mango</h1>
            <div id="orange-hr"></div>
        </div>
</template>

<script lang="ts">
export default {
    name: 'Header',
    methods: {
        addServer() {
            console.log("Add server button clicked");
        },

        setServer(id: Number) {
            console.log(`Server Name with the id ${id} has been clicked!`)
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Poppins:wght@500&display=swap');

#header-container {
    width: 100%;
}


#button-container {
    margin-top: -169px;
    margin-left: -1020px;
}

#title {
    position: relative;

    width: 99px;
    height: 42px;

    top: -100px;
    margin-left: 855px;

    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;

    color: #000000;
}

#orange-hr {
    width: 100%;
    height: 3px;
    margin-top: -80px;

    background: #E6AA50;
    box-shadow: 0px 0px 34px 8px rgba(229, 170, 80, 0.25);
}

#server-button {
    display: inline-block;
    width: 143px;
    height: 39px;

    background: #334155;
    border-radius: 5px;
    border: none;

    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-transform: uppercase;

    margin-left: 22px;
    margin-right: 22px;
    color: #FFFFFF;
}


#add-server-button {
    position: relative;

    width: 41px;
    height: 39px;

    background: #334155;
    border-radius: 5px;
    border: none;

    top: -99px;


}

#add-server-button-icon {
    width: 24px;
    height: 28px;
    margin-top: 5px;
    fill: #fff;
    background: #334155
}

/* Responsive Design */
@media screen and (min-width: 800px) {
    #title {
        margin-left: 86%;
        top: -185px;
    }
    #button-container {
        margin-left: -240px;
    }
    #server-button {
        width: 100px;
        height: 30px;
 
        margin-left: 6px;
        margin-right: 6px;

        font-size: 17px;
    }
    #add-server-button {
        margin-left: 360px;
        top: -90px;
        height: 30px;
        width: 30px;
    }
    #add-server-button-icon {
        height: 21px;
        width: 29px;
    }
    #orange-hr {
        margin-top: -180px;
    }
}

@media screen and (min-width: 1250px) { 
    #title {
        margin-left: 91%;
        top: -193px;
    }
    #button-container {
        margin-left: -515px;
    }
    #server-button {
        font-size: 20px;

        margin-left: 15px;
        margin-right: 15px;

        width: 120px;
        height: 35px;
    }
    #add-server-button {
        height: 35px;
        width: 35px;
        top: -95px;

        margin-left: 300px;
    }
    #add-server-button-icon {
        height: 26px;
        width: 33px;
    }
    #orange-hr {
        margin-left: 0px;
        width: 100%;
    }
}
</style>