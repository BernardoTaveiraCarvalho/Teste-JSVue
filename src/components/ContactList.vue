<template>
<div>
    <ul>
        <ContactLi   v-for="contact in contactList" :contact="contact" :key="contact.id" ></ContactLi>
    </ul>
</div>
</template>

<script>
    import ContactLi from './ContactLi.vue';
    import { mapState } from 'pinia'
    import {mapActions} from 'pinia'
    import { useListContactStore } from '../store/ListFormStore'
    export default{
        data (){
            return {
                selectedOption : null,
            }
        },
        computed: {
    ...mapState(useListContactStore,['contactList','filterList']),
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
   
    justify-content: center;
    align-self: center;
}
</style>
