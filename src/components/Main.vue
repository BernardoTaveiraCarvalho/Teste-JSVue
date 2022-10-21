<script>
 
 
 import {RouterView,RouterLink} from 'vue-router';
 import { useListContactStore } from '../store/ListFormStore'
 import { mapState } from 'pinia'
 import {mapActions}   from  'pinia'
  export default {
    name:"App",
    components: {
    
    },
    created() {
            this.createListFormLocalStore()
        },
    data(){
      return{
      
      }
    },
    methods: {
    ...mapActions( useListContactStore,['createListFormLocalStore'])
    },
    computed: {

}, 
  }
  </script>
  
  <template>
    <nav>
     <a><router-link :to="{name:'formContact'}">Go to Form</router-link></a>
     <a><router-link :to="{name:'contactList'}">Go to List</router-link></a>
    </nav>
    <div>
  
    <router-view>
    </router-view>
    </div>
   

   </template>
   <style>
   body{
    background-image: url("https://static.vecteezy.com/system/resources/previews/001/987/871/original/abstract-black-stripes-diagonal-background-free-vector.jpg");
    background-size: 100% 100%;
   }
   ul {
   list-style-type: none;
	padding: 0;
	
}
  nav{
    position: absolute;
    top: 15px;
    left: 10px;
    gap: 22px;
  }
 nav>a{
   font-size: large;
   padding-left: 20px;
   
 }

   </style>