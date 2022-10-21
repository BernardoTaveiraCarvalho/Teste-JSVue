
export default function validateData(contact){
    if(contact.name == null){
        alert("Name empty") 
        return false
    }else if(contact.phone != null && (isNaN(parseInt(contact.phone))==true || parseInt(contact.phone) <100000000 || parseInt(contact.phone)>999999999)){
        console.log(isNaN(parseInt(contact.phone) ) )
        
        alert("The phone need 9 numbers")
        return false
    }else{
      return  true
    }
}
