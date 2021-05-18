<template>
  <div>      
        <div class="card mb-4 p-5">
            <h3 class="card-id">{{ post.id  }}</h3>
            <h5 v-color class="card-title">{{ post.title  | uppCase}}</h5>            
            <p class="card-text">{{ post.body | shorten }}</p>

        </div>
  </div>
</template>

<script>
export default {
    props: ['post'],
    filters: {
        uppCase(value){
            return value.toUpperCase()            
        },
        shorten(val){
            return val.slice(0,70) + '...'

        }
    },
    directives: {
        color:{
            bind(el){
                el.style.color = '#' + Math.random().toString().slice(2, 8)
            }
        }
    }
}
</script>

<style>

</style>