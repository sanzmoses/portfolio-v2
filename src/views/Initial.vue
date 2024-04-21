<template>
  <section class="initial-loader">

    <div class="loader-container">
      <div class="quote-container">
        <div class="shape">
          <div class="light"></div>
        </div>

        <div class="text-container ct-words">
          <p class="mb-0 text-left quote words">
            {{ random_quote.words }}
          </p>
        </div>
        <div class="text-container ct-author">
          <p class="mb-0 text-right text-accent quote author">
            - {{ random_quote.author }}
          </p>
        </div>
      </div>

      <div class="logo-container left">
        <q-img
          class="logo logo-left"
          src="@/assets/logo_left.svg"
          alt="SVG"
        />
      </div>

      <div class="logo-container right">
        <q-img
          class="logo logo-right"
          src="@/assets/logo_right.svg"
          alt="SVG"
        />
      </div>
      
    </div>

  </section>
</template>

<script>
import gsap from 'gsap'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import { useGlobalStore } from '/src/stores/GlobalStore'
import { useQuoteStore } from '/src/stores/QuoteStore'

export default {
  name: 'Initial',
  setup() {
    const lorem = ref(null);
    const global_store = useGlobalStore()
    const quote_store = useQuoteStore()
    const random_quote = quote_store.random_quote

    const setInitialLoading = global_store.SET_INITIAL_LOADING
    const router = useRouter()

    let timeline = gsap.timeline()

    
    onMounted(() => {
      const quote = document.getElementsByClassName("ct-words")
      const quote_height = quote[0].getBoundingClientRect()
      const actual_height = quote_height.height
      
      const proper_height = actual_height > 30 ? -20: 0

      gsap.set(".ct-words", {
        top: proper_height
      })

      timeline.to(".shape", {
        rotate: 720,
        duration: 1,
        ease: "Power4.out",
        y: 0,
        delay: .5
      })

      timeline.to(".shape", {
        height: .5,
        top: "50%",
        duration: .4,
        ease: "Power4.out",
      })

      timeline.to(".shape", {
        width: "100%",
        x: "50%",
        duration: .4,
        ease: "Power4.out",
      })

      timeline.to(".quote", {
        y: 0,
        duration: .4,
        ease: "Power4.out",
        onStart: () => {
          gsap.to(".shape", {
            width: 0,
            duration: .4,
            ease: "Power4.out",
          })
        },
        onComplete: () => {
          // loading animation
          gsap.set(".text-container", { minWidth: "300px" })
          gsap.set(".light", { width: "100%" })

          gsap.fromTo(".shape", {
            width: 0,
          }, {
            width: 300,
            duration: 5,
            ease: "step",
          })

          gsap.fromTo(".light", {
            opacity: 0,
          }, {
            opacity: 1,
            duration: .4,
            ease: "step",
            repeat: -1,
            yoyo: true
          })
        }
      })

      // closing animation
      timeline.to(".logo", {
        y: 0,
        duration: .4,
        delay: 5,
        ease: "Power4.out",
      })

      timeline.to(".logo-container.left", {
        left: "35%",
        duration: .4,
        delay: .4,
        ease: "Power4.out",
        onStart: () => {
          gsap.set(".quote-container", { overflow: "hidden" })
        }
      })

      timeline.to(".logo-container.right", {
        right: "35%",
        duration: .4,
        ease: "Power4.out",
      }, "<")

      timeline.to(".quote-container", {
        width: 0,
        x: 175,
        duration: .3,
        ease: "Power4.out",
      }, "<")

      timeline.to(".quote-container", {
        delay: 1,
        onComplete: () => {
          setInitialLoading(false)
          router.push("/projects");
        }
      })
      
      timeline.play()
    })

    return { 
      random_quote
    }
  }
}
</script>

<style lang="scss" scoped>
$loader_width: 300px;
.initial-loader {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
}

.loader-container {
  position: relative;
  width: $loader_width; 

  .shape {
    position: absolute;
    top: calc(50% - 10px);
    right: 50%;
    width: 20px;
    height: 20px;
    background-color: white;

    .light {
      position: relative;
      width: 5px;
      height: 3px;
      border-radius: 25px;
      box-shadow: 0 0 15px #ffffff;
      background-color: transparent;
    }
  }

  .logo-container {
    width: 50px;
    position: absolute;
    overflow: hidden;

    &.right {
      top: 5px;
      right: -55px;
    }

    &.left {
      bottom: 5px;
      left: -55px;
    }

    .logo-right {
      transform: translateY(100px)
    }

    .logo-left {
      transform: translateY(-100px)
    }
  }

  .quote-container {
    position: relative;
    width: 100%;
    height: 50px;

    .text-container {
      overflow: hidden;
      position: absolute;
      width: 100%;

      &.ct-words {
        top: 0;
        left: 0;
      }

      &.ct-author {
        bottom: 0;
        right: 0;
      }
      .words {
        transform: translateY(50px)
      }

      .author {
        transform: translateY(-50px)
      }
    }
  }
}
</style>
