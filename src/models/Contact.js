import { v4 as uuidv4 } from 'uuid';

export default class Task{
    constructor(id = null, name ,phone,email,address){
        this.id = id;
        this.name = name
        this.phone= phone;
        this.email = email;
        this.address = address
    }
 
    generateId(){
        this.id = uuidv4();
    }
    copyObject(contact){
        this.id = contact.id;
        this.name =  contact.name
        this.phone= contact.phone;
        this.email= contact.email;
        this.address = contact.address
    }

}