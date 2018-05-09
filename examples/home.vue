<template>
  <section>
    <vui-list v-for="(group, index) in navs" :key="index">
      <span slot="title">{{group.title}}</span>
      <vui-list-item v-for="item in group.list" :to="item.path" :key="item.name" navigate>
        {{ item.name }}
      </vui-list-item>
    </vui-list>
  </section>
</template>

<script type="text/babel">
import navs from './navs.json'

export default {
  data() {
    return {
      navs: []
    }
  },

  created() {
    this.navs = navs
  }
}
</script>
