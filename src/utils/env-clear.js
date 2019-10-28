import storage from 'storage-controller'

export function envClear() {
  const env = process.env.NODE_ENV
  const currentEnv = storage.get('env')
  if (env !== currentEnv) {
    storage.clear()
    storage.set('env', env)
  }
  console.warn('环境：' + env)
}

envClear()
