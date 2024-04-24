<template>
  <div class="q-pa-sm contact">

    <div class="row contact--body">
      <div class="col-2">
      </div>
      <div class="col-6">
        <div class="overflow-hidden">
          <h2 id="title" class="q-mt-none text-weight-bold mb-0 mt-3">Contact</h2>
        </div>
        
        <div class="overflow-hidden">
          <p id="subtitle" class="text-subtitle-1 text-weight-thin"> 
            I am currently living in Davao, but I wouldn't mind an adventure.
            <br> I treat opportunities as privilege and every connection a friend. 
            <br> Dont be a stranger. Just say Hi!
          </p>
        </div>

        <div class="">
            <p class="mb-0 mt-8"><b> Email me at</b></p>
            <div class="overflow-hidden">
              <p id="email" 
                class="text-subtitle-1 text-weight-thin">
                <i class="fas fa-envelope"></i>sanzmoses@gmail.com
              </p>
            </div>
            
            <p class="mb-0 mt-5"><b> Reach me on</b></p>
            <section class="text-subtitle-1 overflow-hidden">
              <div id="reach">
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
              </div>
            </section>  

            <p class="mt-8 mb-0"><b> Catch me on </b></p>
            <section class="overflow-hidden">
              <div id="catch">
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
              </div>
            </section>

            <section class="overflow-hidden">
              <q-btn 
                id="download-btn"
                class="q-ma-sm q-px-lg q-py-sm text-capitalize"
                href="/files/sanz_resume.pdf"
                label="My Updated Resume" 
                icon="mdi-download"  
                target="_blank" 
                color="white" 
                outline
              />
            </section>
            
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

export default {
  name: 'Contact',
  setup() {
    const timeline = gsap.timeline({
      ease: 'Power2.inOut',
      duration: 0.4,
    })

    onMounted(() => {
      timeline
        .from("#title", {
          y: 50
        }, "<")
        .from("#subtitle", {
          y: -50
        }, "<")
        .from("#email", {
          y: -50
        }, "<")
        .from("#reach", {
          y: -100
        }, "<")
        .from("#catch", {
          y: -50
        }, "<")
        .from("#download-btn", {
          y: 50,
        }, "<")
        .to("#title", {
          opacity: .2,
        })

      timeline.play()
    }) 

    return { }
  }
}
</script>
