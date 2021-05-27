<template>
  <div class="customer container">
    <AddDishesForm />
    <DishesList />
    <WeekDishesList />

  </div>
</template>

<script>
import AddDishesForm from '../components/Dishes/AddDishesForm'
import DishesList from '../components/Dishes/DishesList'
import WeekDishesList from '../components/Dishes/WeekDishesList'

export default {
  name:'Food',
  components:{
    AddDishesForm,
    DishesList,
    WeekDishesList
  }
  
}
</script>