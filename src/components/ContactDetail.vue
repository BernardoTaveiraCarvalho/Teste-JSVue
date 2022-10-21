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
    ...mapActions( useListTaskStore,['findContact','createListFormLocalStore'])
    },
  
  }
  </script>
  
  <template>
 
   <ul>
        <li>{{findTask($route.params.id).name}}</li>
        <li>{{findTask($route.params.id).phone}}</li>
        <li>{{findTask($route.params.id).email}}</li>
        <li>{{findTask($route.params.id).address}}</li>
    </ul>
   </template>
