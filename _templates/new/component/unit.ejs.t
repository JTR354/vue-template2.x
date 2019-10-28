---
to: "src/components/<%= (h.inflection.dasherize(name).toLowerCase().slice(0, 5) === 'base-' || h.inflection.dasherize(name).toLowerCase().slice(0, 7) === 'global-') ? '_' : '' %><%= h.inflection.dasherize(name) %>/<%= (h.inflection.dasherize(name).toLowerCase().slice(0, 5) === 'base-' || h.inflection.dasherize(name).toLowerCase().slice(0, 7) === 'global-') ? '_' : '' %><%= h.inflection.dasherize(name) %>.unit.js"
---
<%
  const fileName =
    ((h.inflection.dasherize(name).toLowerCase().slice(0, 5) === 'base-' ||
    h.inflection.dasherize(name).toLowerCase().slice(0, 7) === 'global-') ? '_' : '') +
    h.inflection.dasherize(name)
  const importName = h.inflection.camelize(fileName.replace(/-/g, '_'))
%>import <%= importName %> from './<%= fileName %>'

describe('@components/<%= fileName %>', () => {
  it('exports a valid component', () => {
    expect(<%= importName %>).toBeAComponent()
  })
})
