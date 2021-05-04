<template>
    <nav class="navbar  navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href=""> 
                <img src="../assets/logo.png" class="logo-img" alt=""> {{ title }}
            </a> 
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        title: String
    }

}
</script>

<style>
.logo-img {
    height: 30px;
    width: auto;
    margin-right: 1rem;
}
</style>