---
inject: true
to: src/router/pages.js
after: "const _pages"
---
  <%= h.changeCase.camelCase(name)%>: `<%= name %>`,