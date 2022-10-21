<script>
 
 import { useListContactStore } from '../store/ListFormStore'

 import {mapActions}   from  'pinia'
  export default {
    name:"App",
    components: {
    
    },
    data(){
      return{
      }
    },
   created() {
            this.createListFormLocalStore()
        },
    methods: {
    ...mapActions(useListContactStore,['findContact','createListFormLocalStore'])
    },
  
  }
  </script>
  
  <template>
 
   <ul>
        <li>{{findContact($route.params.id).name}}</li>
        <li>{{findContact($route.params.id).phone}}</li>
        <li>{{findContact($route.params.id).email}}</li>
        <li>{{findContact($route.params.id).address}}</li>
    </ul>
   </template>
