<template lang="html">

    <h1> Hello Vue </h1>

    <span> Hey! What are vue doing here? </span>

</template>

<script>
export default {
    data() {
        return {
            time: new Date(),
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<style lang="css">
    h1 {
        text-align: center;
    }
</style>
