<template>
    
    <ul>
        <li>{{localContact.name}}</li>
        <li>{{localContact.phone}}</li>
        <li>{{localContact.email}}</li>
        <li>{{localContact.address}}</li>
        <button @click="editTask(localTask)">Edit</button>
        <button @click="detailTask(localTask)">View</button>
        <button @click="deleteTask(localTask)">Delete</button>
    </ul>
</template>

<script>
import Contact from '../models/Contact';
import { useListContactStore } from '../store/ListFormStore'
import { useFormContactStore } from '../store/FormContactStore'

import {mapActions}   from  'pinia'
export default {
    props: {
        contact: {
            type: Contact,
            required: true
        },
    },
    data() {
        return {
            localContact: new Contact(),
        }
    },
    created() {
        this.localContact = this.contact
       
    },
    methods: {
        ...mapActions(useFormTaskStore,['editContact','detailContact']),  
        ...mapActions(useListTaskStore,['deleteContact']),
    },
   
}
</script>

<style scoped>

</style>