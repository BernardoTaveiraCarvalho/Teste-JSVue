import { defineStore } from 'pinia'
import Contact from '../models/Contact'
import router from '../router'

export const useFormContactStore = defineStore('FormContactStore',{
    state: () =>({
        contact: new Contact()
        }),
    getters:{
        getContactEdit: (state) =>state.contact
    },
    actions:{
        editContact(newContact){          
            this.contact.copyObject(newContact)
          },
          detailContact(newContact){
                router.push("/contactDetail/"+newContact.id)
          }
    }
})