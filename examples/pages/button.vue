<template>
  <div>
    <vui-header fixed>Button</vui-header>
    <page-content>
      <section>
        <h1>Normal</h1>
        <div class="btn-group">
          <vui-button @click="handleClick">Default</vui-button>
          <vui-button ref="btn1" type="primary">Primary</vui-button>
          <vui-button type="info">Info</vui-button>
          <vui-button type="success">Success</vui-button>
          <vui-button type="warning">Warning</vui-button>
          <vui-button type="danger">Danger</vui-button>
        </div>
      </section>

      <section>
        <h1>Plain</h1>
        <div class="btn-group">
          <vui-button plain>Default</vui-button>
          <vui-button plain type="primary">Primary</vui-button>
          <vui-button plain type="info">Info</vui-button>
          <vui-button plain type="success">Success</vui-button>
          <vui-button plain type="warning">Warning</vui-button>
          <vui-button plain type="danger">Danger</vui-button>
        </div>
      </section>       

      <section>
        <h1>Sizes</h1>
        <div class="btn-group">
          <vui-button size="small" type="primary">Small</vui-button>
          <vui-button type="primary">Default</vui-button>
          <vui-button size="large" type="primary">Large</vui-button>         
        </div>
      </section>

      <section>
        <h1>Block</h1>
        <div class="btn-group">
          <vui-button block>Default</vui-button>
          <vui-button block type="primary">Primary</vui-button>
          <vui-button block type="danger">Danger</vui-button>
        </div>

        <div class="btn-group">
          <vui-button block disabled>Disabled</vui-button>
          <vui-button block type="primary" disabled>Disabled</vui-button>
          <vui-button block type="danger" disabled>Disabled</vui-button>
        </div>

        <div class="btn-group">
          <vui-button block plain>Plain</vui-button>
          <vui-button block plain type="primary">Plain</vui-button>
          <vui-button block plain type="danger" nativeType="submit">Plain</vui-button>
        </div>
      </section>
    </page-content>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs.btn1.$on('click', function(ev) {
      console.log(ev)
    })
  },
  methods: {
    handleClick(ev) {
      console.log(ev)
    }
  }
}
</script>

<style lang="less" scoped>
section {
  > h1 {
    font-size: 18px;
  }
}
.btn-group .btn {
  margin-bottom: 15px;
}
</style>
