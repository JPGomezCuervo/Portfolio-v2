<script setup lang="ts">
import arrow from "../assets/icons/icons8-arrow.svg";
import WhoIAm from "./WhoIAm.vue";
import Technologies from "./Technologies.vue";
import Experience from "./Experience.vue";
import { selectLanguages, setReference } from "../store";
import { ref, computed, onMounted } from "vue";

const { technologies, whoIAm, experience } = selectLanguages();

const slices = [{ component: WhoIAm, title: whoIAm.value.title }, { component: Technologies, title: technologies.value.title }, { component: Experience, title: experience.value.title }];
const index = ref(0);
const component = computed(() => slices[index.value]);
const title = computed(() => component.value.title);


const mode = ref("out-in");

const handleForward = (event: MouseEvent | Event) => {
  const name = (event.target as HTMLInputElement).name;

  // function to set the name of the css class
  handleTransition(name);

  if (index.value + 1 > 2) return index.value = 0;
  index.value = index.value + 1;
};

const handleBackward = (event: MouseEvent | Event) => {
  const name = (event.target as HTMLInputElement).name;

  // function to set the name of the css class
  handleTransition(name);

  if (index.value - 1 < 0) return index.value = 2;
  index.value = index.value - 1;
};

const handleTransition = (name: string) => {
  name === "forward" ?
    mode.value = "fade-left"
    : mode.value = "fade-right";
};

const handleRomboid = (event: MouseEvent | Event) => {
  const value = (event.target as HTMLInputElement).dataset.value;
  index.value = Number(value);
};

const carousel_section = ref<HTMLElement | null>(null);

onMounted(() => {
  carousel_section.value && setReference("carousel", carousel_section.value);
})


// const lastScrollPosition = ref(0);

// const handleScrollOnX = (event: MouseEvent) => {
//   const currentPosition = event.clientX;
//   console.log(currentPosition);

//   if (currentPosition > lastScrollPosition.value) {
//     // Handle forward transition
//     handleTransition("forward");
//     if (index.value + 1 > 2) return (index.value = 0);
//     index.value = index.value + 1;
//   } else {
//     // Handle backward transition
//     handleTransition("backward");
//     if (index.value - 1 < 0) return (index.value = 2);
//     index.value = index.value - 1;
//   }

//   lastScrollPosition.value = currentPosition;
// };


</script>

<template>
  <section class="carousel" ref="carousel_section">

    <div class="title">
      <h2 class="subtitle">{{ title }}</h2>
    </div>

    <div class="display">
      <transition :name="mode" mode="out-in">
        <component :is="component.component" :key="index"></component>
      </transition>
    </div>

    <div class="navigation">
      <img name="backward" :src="arrow" class="left-arrow arrow" @click="handleBackward" />
      <div class="romboids" v-for="(_, sliceIndex) in slices" :data-value="sliceIndex" @click="handleRomboid"
        :key="sliceIndex" :class="{ active: sliceIndex === index }"></div>
      <img name="forward" :src="arrow" class="right-arrow arrow" @click="handleForward" />
    </div>

  </section>
</template>
  
<style lang="scss" scoped>
.carousel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 60px;
}

.title {
  display: flex;
  width: 100%;
  grid-column: 1 / 3;
  margin-top: 2%;
}

.title h2 {
  margin: auto 0;
}

.display {
  width: 100%;
  grid-column: 1 / 3;
}

.navigation {
  width: 100%;
  grid-column: 1 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1%;
  margin-bottom: clamp(1rem, 2vh, 2rem);
}

.romboids {
  width: .6rem;
  height: .6rem;
  background-color: transparent;
  transform: rotate(45deg);
  margin-left: 1%;
  margin-right: 1%;
  border: 2px solid black;
  cursor: pointer;
  transition: background-color 0.3s;
}

.romboids.active {
  border: 2px solid #6F4AE7;
}

.arrow {
  height: 2rem;
  cursor: pointer;
}

.left-arrow {
  transform: rotate(-180deg);
}

.fade-right {

  &-enter-active,
  &-leave-active {
    transition: transform 0.2s, opacity 0.18s;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateX(200%);
  }

  &-enter-to,
  &-leave-from {
    opacity: 1;
    transform: translateX(0);
  }
}

.fade-left {

  &-enter-active,
  &-leave-active {
    transition: transform 0.2s, opacity 0.18s;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateX(-200%);
  }

  &-enter-to,
  &-leave-from {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 1000px) {
  .title h2 {
    text-align: center;
    width: 100%;
    margin-bottom: 1rem;
  }
}

@media (max-width: 700px) {
  .carousel {
    padding: 0 10px;
  }
}
</style>
  
  