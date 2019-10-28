---
to: "src/pages/<%= h.inflection.dasherize(name) %>/<%= h.inflection.dasherize(name) %>.vue"
---
<template>
  <div class="<%= h.inflection.dasherize(name.replace('_', '')) %>">
    <%= h.inflection.dasherize(name.replace('_', '')) %>
    <base-router-view @refresh="refresh"></base-router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  // import * as Helpers from './modules/helpers'
  // import API from '@api'
  const PAGE_NAME = '<%=  h.inflection.dasherize(name.replace('_', '')).toUpperCase().replace(/-/g, '_')%>'
  const TITLE = '<%= title %>'

  export default {
    name: PAGE_NAME,
    page: {
      title: TITLE
    },
    data() {
      return {

      }
    },
    computed: {
      // ...Helpers.<%= h.changeCase.camelCase(name.replace('_', ''))%>Computed,
    },
    methods: {
      // ...Helpers.<%= h.changeCase.camelCase(name.replace('_', ''))%>Methods,
      refresh() {
        console.log('<%=name%>, refresh')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .<%= h.inflection.dasherize(name.replace('_', '')) %>
    fill-box(fixed)
    z-index: 50
    background: #fff
</style>
