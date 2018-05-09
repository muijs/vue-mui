<template>
  <vui-modal type="confirm" :show="show">
    <slot></slot>
    <template slot="footer">
      <vui-button block class="btn-cancel" @click="$emit('cancel', $event)">{{cancelButtonText}}</vui-button>
      <vui-button block class="btn-ok" @click="$emit('ok', $event)">{{confirmButtonText}}</vui-button>
    </template>
  </vui-modal>
</template>

<script>
import VuiModal from './base-modal'
import VuiButton from './button'

export default {
  name: 'vui-confirm',
  components: {
    VuiModal,
    VuiButton
  },
  props: {
    show: {
      type: Boolean,
      default: false,
      required: true
    },
    confirmButtonText: {
      type: String,
      default: '确定'
    },
    cancelButtonText: {
      type: String,
      default: '取消'
    }
  }
}
</script>
