<template>
<div>
    <nav >
        <h2>LOGO</h2>
        <ul>
            <li><router-link class="link" to="/">Home</router-link></li>
            <li><router-link class="link" to="/about">About</router-link></li>  
        </ul>
    </nav>
    
    <router-view/>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
nav{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-color: darkslategrey;
}
ul {
    display: flex;
    
}
li {
    list-style:none;
}
.link {
    text-decoration: none;
    padding:1rem;
    color:white;
    display: inline-block;
}

</style>