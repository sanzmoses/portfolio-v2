<template>
  <div class="q-pa-xl contact">

    <div class="row contact--body">
      <div class="col-2">
      </div>
      <div class="col-6">
        <h3 class="q-mt-none">{{ '<Contact/>' }}</h3>
        
        <p class="text-subtitle-1 text-weight-thin"> 
            I am currently living in Davao, but I wouldn't mind an adventure.
            <br> I treat opportunities as privilege and every connection a friend. 
            <br> Dont be a stranger. Just say Hi!
        </p>

        <div class="">
            <p class="mb-0 mt-8"><b> Email me at</b></p>
            <p class="text-subtitle-1 text-weight-thin"><i class="fas fa-envelope"></i>sanzmoses@gmail.com</p>
            
            <p class="mb-0 mt-5"><b> Reach me on</b></p>
            <section class="text-subtitle-1">
                <p class="mt-0 mb-0"> 
                    <q-icon name="mdi-github" color="white" /> 
                    <span class="text-weight-thin ml-2">sanzillion</span>
                </p>
                <p class="mt-0 mb-0">
                    <q-icon name="mdi-send" color="white" /> 
                    <span class="text-weight-thin ml-2">@Sanzmoses</span>
                    
                </p>
                <p class="mt-0 mb-0">
                    <q-icon name="mdi-phone" color="white" /> 
                    <span class="text-weight-thin ml-2">+63 907 423 9571 </span>   
                </p>
            </section>  

            <p class="mt-8 mb-0"><b> Catch me on </b></p>
            <p class="mt-0 text-h4"> 
                <a class="mr-1" href="https://github.com/sanzmoses" target="_blank">
                    <q-icon name="mdi-github" color="white" />
                </a> 
                <a class="mr-1" href="https://www.facebook.com/sanzillion" target="_blank">
                    <q-icon name="mdi-facebook" color="white" />
                </a> 
                <a class="mr-1" href="https://twitter.com/sanzillion" target="_blank">
                    <q-icon name="mdi-twitter" color="white" />
                </a> 
                <a class="mr-1" href="https://www.instagram.com/sanzmoses/" target="_blank">
                    <q-icon name="mdi-instagram" color="white" />
                </a> 
            </p>

            <q-btn 
                class="q-ma-sm q-px-lg q-py-sm text-capitalize"
                href="/files/sanz_resume.pdf"
                label="My Updated Resume" 
                icon="mdi-download"  
                target="_blank" 
                color="white" 
                outline
            />
            
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Contact',
  setup() {
    const lorem = ref(null);

    lorem.value = '';

    return { 
      lorem
    }
  }
}
</script>
