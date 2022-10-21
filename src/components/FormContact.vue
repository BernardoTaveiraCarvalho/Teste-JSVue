<template>
    <form @submit.prevent="SubmitContact($event)">
        <div> 
            <label for="">{{contact.name}}</label>
            <input type="text" name="name" v-model="contact.name" id="name"/>
            <label for="">{{contact.phone}}</label>
            <input type="text" name="phone" v-model="contact.phone" id="phone"/>
            <label for="">{{contact.email}}</label>
            <input type="text" name="email"  v-model="contact.email" id="email"/>
            <label for="">{{contact.address}}</label>
            <input type="text" name="address"  v-model="contact.address" id="address"/>
            <div class="error">{{error}}</div>
            <input type="submit"  />
        </div>
    </form>
</template>

<script>
      import Contact from '../models/Contact'
      import ContactList from './ContactList.vue'
      //import validations from '../validations/validations'
      import { useFormContactStore } from '../store/FormContactStore'
      import { useListContactStore } from '../store/ListFormStore'
      import {mapActions}   from  'pinia'
      import { mapWritableState } from 'pinia'
export default {
    data() {
        return {
          
            error: '',
        };
    },
    props: [
        "contactEdit"
    ]   ,
   
   computed: {
    ...mapWritableState(useFormContactStore ,['contact']),
},
  
    methods: {
        ...mapActions(useListContactStore,['createList','editList']),
 
        SubmitContact(e) {

            if(this.contact.name == null){
                alert("Name empty")
            }else{
                if(!this.contact.id){
                    this.createList(this.contact)
                    this.contact = new Contact()
                }else{
                    this.editList(this.contact)
                   
                    this.contact = new Contact()
                    
                }
            }
        },
        
    },
    emits:['createList','editList'],
    components: { ContactList }
};

</script>

<style scoped>
form>div{
    display: flex;
    flex-direction: column;
}
</style>

