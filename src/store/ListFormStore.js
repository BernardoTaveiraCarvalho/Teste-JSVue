import Contact from '../models/Contact'
import { defineStore } from 'pinia'
export const useListContactStore = defineStore('ListFormStore',{
    state: () =>({
        contactList: [],
        }),
    getters:{
        getContactList: (state) =>state.contactList,  
    },
    actions:{
        createListFormLocalStore(){
           
            const storeObject =JSON.parse(localStorage.getItem('contactArray'))
            if(storeObject !=null){
            for(let i=0;i<storeObject.length;i++){
                this.contactList[i] = new Contact(storeObject[i].id,storeObject[i].name,storeObject[i].phone,storeObject[i].email,storeObject[i].address) 
            }
            }
        },
        createList(contact){
            contact.generateId()
            this.contactList.push(contact)
            localStorage.setItem('contactArray', JSON.stringify(this.contactList))
            
          },
          findContact(id){
            let contactFinded
            this.contactList.forEach(element => {
                    if(id==element.id){
                        contactFinded=element
                    }
                });
                return contactFinded
          },
          editList(contact){  
           let  element=  this.findContact(contact.id)
            element.copyObject(contact)
            localStorage.setItem('contactArray', JSON.stringify(this.contactList))
          },
          deleteTask(contact){
       
            for(let i =0;i<this.contactList.length;i++){
                console.log(this.contactList)
                if(this.contactList[i].id==contact.id){
                   this.contactList.splice(i, 1)
                   localStorage.setItem('contactArray', JSON.stringify(this.contactList))
                }
            }     
     }
    }
})
    