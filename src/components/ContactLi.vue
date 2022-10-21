<template>
    
    <ul>
        <li>  Name: {{localContact.name}}</li>
        <li><span v-if="localContact.phone!=null">Phone: </span>{{localContact.phone}}</li>
        <li><span v-if="localContact.email!=null">Email: </span>{{localContact.email}}</li>
        <li><span v-if="localContact.address!=null">Address: </span> {{localContact.address}}</li>
        <button @click="editContact(localContact)">Edit</button>
        <button @click="detailContact(localContact)">View</button>
        <button @click="deleteContact(localContact)">Delete</button>
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
        ...mapActions(useFormContactStore ,['editContact','detailContact']),  
        ...mapActions( useListContactStore,['deleteContact']),
    },
   
}
</script>

<style scoped>

</style>