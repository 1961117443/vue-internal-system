<template>
    <div>
        <mt-button type="primary" size="small" @click="infoHandler(demand.BillCode)">详情</mt-button>
    </div>
</template>

<script> 
    export default {
        props:{
            enableState:{
                type:int,
                default:0
            },
            title:{
                type:String,
                default:"按钮"
            } 
        }
    }
</script>

<style lang="scss" scoped>

</style>