<template>
  <div class="field">
    <p class="control has-icons-right">
      <input
        class="input"
        type="email"
        :placeholder="props.placeholder"
        @input="emits('update:modelValue', $event.target.value)"
      />
      <span class="icon is-small is-right">
        <i class="fa-solid fa-magnifying-glass"></i>
      </span>
    </p>
  </div>
</template>

<script setup lang="ts">
// TODO: Add logic for input validation and handling user input
const props = defineProps<{
    placeholder?: string
    modelValue?: string
}>()

const emits = defineEmits<{
    (event: 'update:modelValue', value: string): void
}>()
</script>
