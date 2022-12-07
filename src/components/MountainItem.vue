<template>
    <body>
        <div class="c1">    
            <span v-if="mount.continent==='asia'">
                <h1>Asia</h1>
                <p> <b>{{mount.rank}} . <u><b>{{mount.name}}</b></u></b></p>
                    <ul>
                        <li><b>Height:</b> {{mount.height}}</li>
                        <li><b>Age:</b> {{mount.age}}</li>
                        <li><b>Mountain Range:</b> {{mount.mountainrange}}</li>
                        <li><b>Fact:</b> {{mount.fact}}</li>
                        <li><b>Country:</b> {{mount.country}}</li>
                        <li><b>Coordinates:</b> {{mount.coordinates}}</li>
                    </ul>
            </span>
        </div>
        <div class="c2">
            <span v-if="mount.continent==='africa'">
                <h1>Africa</h1>
                <p><b>{{mount.rank}} . <u><b>{{mount.name}}</b></u></b></p>
                    <ul>
                        <li><b>Height:</b> {{mount.height}}</li>
                        <li><b>Age:</b> {{mount.age}}</li>
                        <li><b>Mountain Range:</b> {{mount.mountainrange}}</li>
                        <li><b>Fact:</b> {{mount.fact}}</li>
                        <li><b>Country:</b> {{mount.country}}</li>
                        <li><b>Coordinates:</b> {{mount.coordinates}}</li>
                    </ul>
            </span>
        </div>
        <div class="c3">
            <span v-if="mount.continent==='north america'">
                <h1>North America</h1>
                <p><b>{{mount.rank}} . <u><b>{{mount.name}}</b></u></b></p>
                    <ul>
                        <li><b>Height:</b> {{mount.height}}</li>
                        <li><b>Age:</b> {{mount.age}}</li>
                        <li><b>Mountain Range:</b> {{mount.mountainrange}}</li>
                        <li><b>Fact:</b> {{mount.fact}}</li>
                        <li><b>Country:</b> {{mount.country}}</li>
                        <li><b>Coordinates:</b> {{mount.coordinates}}</li>
                    </ul>
            </span>
        </div>
        <div class="c4">    
            <span v-if="mount.continent==='south america'">
                <h1>South America</h1>
                <p> <b>{{mount.rank}} . <u><b>{{mount.name}}</b></u></b></p>
                    <ul>
                        <li><b>Height:</b> {{mount.height}}</li>
                        <li><b>Age:</b> {{mount.age}}</li>
                        <li><b>Mountain Range:</b> {{mount.mountainrange}}</li>
                        <li><b>Fact:</b> {{mount.fact}}</li>
                        <li><b>Country:</b> {{mount.country}}</li>
                        <li><b>Coordinates:</b> {{mount.coordinates}}</li>
                    </ul>
            </span>
        </div>
        <div class="c5">    
            <span v-if="mount.continent==='europe'">
                <h1>Europe</h1>
                <p> <b>{{mount.rank}} . <u><b>{{mount.name}}</b></u></b></p>
                    <ul>
                        <li><b>Height:</b> {{mount.height}}</li>
                        <li><b>Age:</b> {{mount.age}}</li>
                        <li><b>Mountain Range:</b> {{mount.mountainrange}}</li>
                        <li><b>Fact:</b> {{mount.fact}}</li>
                        <li><b>Country:</b> {{mount.country}}</li>
                        <li><b>Coordinates:</b> {{mount.coordinates}}</li>
                    </ul>
            </span>
        </div>
        <div class="c6">    
            <span v-if="mount.continent==='australia'">
                <h1>Australia</h1>
                <p> <b>{{mount.rank}} . <u><b>{{mount.name}}</b></u></b></p>
                    <ul>
                        <li><b>Height:</b> {{mount.height}}</li>
                        <li><b>Age:</b> {{mount.age}}</li>
                        <li><b>Mountain Range:</b> {{mount.mountainrange}}</li>
                        <li><b>Fact:</b> {{mount.fact}}</li>
                        <li><b>Country:</b> {{mount.country}}</li>
                        <li><b>Coordinates:</b> {{mount.coordinates}}</li>
                    </ul>
            </span>
        </div>
        <div></div>

    </body>
    
</template>

<script>
    export default{
        name: 'MountainItem',
        props:{
            mount: Array
        }
    }

</script>

<style scoped>
   *{
    font-size:medium;
    font-weight:200em;
   }
    h1{
        text-align: center;
        font-size: xx-large;
        color: rgb(80, 0, 146);
        margin: 0;
        text-decoration: underline;
    }
    div{
        background-color: #f5dcd4;
        color: black;
        margin-top: 5px;

    }
    span{
        margin: 2px;
    }
    .c1{
        background: rgb(253, 255, 108);
        margin-bottom: 5px;
        margin-top: -2em;
    }
    .c2{
        background: rgb(255, 208, 79);
        margin-bottom: 5px;
        margin-top: -2em;
    }
    .c3{
        background: rgb(95, 255, 108);
        margin-bottom: 5px;
        margin-top: -2em;
    }
    .c4{
        background: rgb(250, 191, 255);
        margin-bottom: 5px;
        margin-top: -2em;
    }
    .c5{
        background: rgb(128, 215, 255);
        margin-bottom: 5px;
        margin-top: -2em;
    }
    .c6{
        background: rgb(255, 136, 136);
        margin-bottom: 5px;
        margin-top: -2em;
    }
    p{
    font-size: large;
    color: rgb(183, 0, 255);
    font-weight: bolder;
    }
</style>