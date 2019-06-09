<template>
 <div>
     <h3>这是首页</h3>
 </div>
</template>
<script>

export default {
    mounted(){
       // console.log(this)
        this.$api.get("http://localhost:3000/api/Demand/1",{},res=>{
            console.log(res)
        } )
    }
}
</script>
<style  scoped>

</style>



