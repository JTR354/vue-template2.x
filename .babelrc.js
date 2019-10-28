module.exports = {
  presets: ['@vue/app'],
  plugins: [
    'lodash',
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
    [
      "import",
      {
        "libraryName": "iview",
        "libraryDirectory": "src/components"
      }
    ],
  ]
}
