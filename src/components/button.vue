<template>
  <button 
    :class="btnClasses"
    :type="nativeType"
    :disabled="disabled"
    @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'vui-button',
  props: {
    disabled: Boolean,
    nativeType: String,
    block: Boolean,
    plain: Boolean,
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return [
          'default',
          'primary',
          'info',
          'success',
          'warning',
          'danger'
        ].indexOf(value) > -1
      }
    },
    size: {
      type: String,
      validator(value) {
        return [
          'small',
          'large'
        ].indexOf(value) > -1
      }
    }
  },
  computed: {
    btnClasses() {
      const classes = {
        'btn': true,
        [`btn-${this.type}`]: true,
        [`btn-${this.size}`]: !!this.size,
        'btn-plain': this.plain,
        'btn-block': this.block,
        'btn-disabled': this.disabled
      }
      return classes
    }
  }
}
</script>
