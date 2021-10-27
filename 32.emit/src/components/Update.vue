<template>
  <div class="col"> 
       <div class="card">
        <div class="card-header bg-primary text-center text-white">
            Update
        </div>
       <div class="card-body">
           <form >
               <div class="row mb-3">
                   <div class="col">
                       <div class="form-outline">
                            <label class="form-label" for="name">Name:</label>
                            <input type="text" id="name" class="form-control" v-model="newName"/>                           
                        </div>                       
                   </div>
                   <div class="col">
                       <div class="form-outline">
                            <label class="form-label" for="age">Age:</label>
                            <input type="number" id="age" class="form-control" v-model="newAge" />                           
                        </div>                        
                   </div>                     
               </div>
               <div class="mb-3">
                    <label class="form-label" for="email">Email:</label>
                    <input type="email" id="email" class="form-control" v-model="newEmail"/>                           
                </div> 
                <button class="btn btn-outline-primary btn-block form-control">  Update</button>
           </form>
           {{newName}}
       </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['name','age','email'],
    data(){
        return{
            newName: this.name,
            newAge: this.age,
            newEmail: this.email
        }
    }   
}
</script>

<style>

</style>