---
inject: true
to: src/router/routes.js
after: "export default"
---
  // <%= title %>
  {
    path: '/<%= name %>',
    name: '<%= name %>',
    component: () => import('@pages/<%= name %>/<%= name %>')
  },
