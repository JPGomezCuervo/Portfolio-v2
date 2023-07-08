<script setup lang="ts">
</script>

<template>
    <section class="background">
        <div class="split">
            <div class="container">
                <div class="left-container">

                </div>
                <form class="right-container">

                </form>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@import "../style.scss";


.split {
    display: block;
    padding: 90px 0;
    width: 100%;
}
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 60px;
}
.left-container {
    background-color: blue;
    width: 100%;
    height: 100px;
}

.right-container {
    background-color: red;
    width: 100%;
    height: 100px;
}


</style>
