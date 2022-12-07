<template>
    <div>
        <h1>{{mountName}}</h1>
        <h2>{{subName}}</h2>
    </div>
</template>

<script>
    export default{
        name: 'HeaderTop',
        props:{
            mountName: String,
            subName: String
        }
    }

</script>

<style scoped>
    div{
        text-align: center;
        text-decoration: underline;
        font-weight:900px;
        color: rgb(218, 33, 110);
    }

</style>