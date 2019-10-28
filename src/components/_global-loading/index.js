import LoadingComponent from '@components/_global-loading/_global-loading'

const Loading = {}

Loading.install = function(Vue) {
  const LoadingConstructor = Vue.extend(LoadingComponent)
  const instance = new LoadingConstructor()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)
  Vue.prototype.$loading = instance
}

export default Loading
