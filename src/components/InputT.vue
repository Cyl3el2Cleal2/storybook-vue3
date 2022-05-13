<script setup lang="ts">
import { ref, computed } from "vue";
interface Props {
  btnName: string;
  backgroundColor: string;
  label?: string;
}
const props = withDefaults(defineProps<Props>(), {
  btnName: "OK",
  backgroundColor: "red",
});
const style = computed(() => {
  return {
    backgroundColor: props.backgroundColor,
  };
});
const value = ref("");
</script>
<template>
  <div :style="style">
    {{ label }}
    <br/>
    <input type="text" :value="value" />
    <br/>
    <button>{{ btnName }}</button>
  </div>
</template>

