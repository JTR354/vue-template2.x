import routes from './routes'
import camelCase from 'lodash/camelCase'
const _pages = {
  mineDetail: `mine-detail`,
  homeDetail: `home-detail`,
  mine: `mine`,
  home: `home`,
  root: `root`
}
const _path = {}
function findPath(r = []) {
  r.forEach(function(route) {
    const key = camelCase(route.name)
    if (_pages[key]) {
      _path[key] = route.path
    }
    route.children && findPath(route.children)
  })
}
findPath(routes)
export default _path