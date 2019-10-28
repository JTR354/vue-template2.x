---
to: "src/components/<%= (h.inflection.dasherize(name).toLowerCase().slice(0, 5) === 'base-' || h.inflection.dasherize(name).toLowerCase().slice(0, 7) === 'global-') ? '_' : '' %><%= h.inflection.dasherize(name) %>/<%= (h.inflection.dasherize(name).toLowerCase().slice(0, 5) === 'base-' || h.inflection.dasherize(name).toLowerCase().slice(0, 7) === 'global-') ? '_' : '' %><%= h.inflection.dasherize(name) %>.vue"
---
<template>
  <div class="<%= h.inflection.dasherize(name) %>">
    <%= h.inflection.dasherize(name) %>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = '<%=  h.inflection.dasherize(name).toUpperCase().replace(/-/g, '_')%>'

  export default {
    name: COMPONENT_NAME,
    data() {
      return {

      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@design"

  .<%= h.inflection.dasherize(name) %>
    width: 100%
</style>
