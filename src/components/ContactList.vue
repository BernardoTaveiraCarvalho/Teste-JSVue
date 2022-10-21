<template>
<div>
  Filter Table: <select v-model="selectedOption" @change="handleChange" name="filter" id="filter">
  <option value=1>True</option>
  <option value=0>False</option>
  <option selected value=null>None</option>
  </select>
    <ul>
        <ContactLi   v-for="task in SetContactList" :task="task" :key="task.id" ></ContactLi>
    </ul>
</div>
</template>

<script>
    import ContactLi from './ContactLi.vue';
    import { mapState } from 'pinia'
    import {mapActions} from 'pinia'
    import { useListContactStore } from '../store/ListFormContact'
    export default{
        data (){
            return {
                selectedOption : null,
            }
        },
        computed: {
    ...mapState(useListTaskStore,['contactList','filterList','getContactListFinish','getContactListDontFinish']),
    SetTaskList(){
        if(this.selectedOption == 1){
            console.log("a")
            return this.getContactListFinish
        }
        if(this.selectedOption == 0){
            return this.getContactListDontFinish
        }
        return  this.contactList
    }
}, 
methods:{
 
    
},
    components: { ContactLi }
}
</script>

<style scoped>
div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;
}
ul{
    list-style-type: none;
    justify-content: center;
    align-self: center;
}
</style>
