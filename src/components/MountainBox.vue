<template>
    <div>
        <span  v-for="mount in mounts" :key="mount.id">
            
            <MountainItem :mount="mount"/>
        </span>
       
    </div>
</template>

<script>

    import MountainItem from './MountainItem.vue';
    export default{
        name: 'BookBox',
        components:{
            MountainItem
        },
        props:{
            mounts: Array
        }
    }
</script>

<style scoped>
    .bookbox{
        background-color: burlywood;
        padding: 1em;
        color: gray;
    }
</style>