<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<script>

    export default{
        name: 'HeaderName',
        props: ['title']

    }
</script>


<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>