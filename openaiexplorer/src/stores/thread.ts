import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThreadStore = defineStore('thread', () => {
  const state = ref({
    isHovered: false as boolean,
    isClicked: false as boolean,
    activeCard: null as string | null,
    hoveredThread: null as string | null,
  })

  const setActiveCard = (card: string | null) => {
    state.value.activeCard = card
  }

  return { 
    ...state.value, // Add the missing properties here
    setActiveCard 
  }
})
