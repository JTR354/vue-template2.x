const argv = process.argv.slice(2)
console.log(argv)
const params = {}
argv.forEach((a) => {
  const arr = a.split("=")
  params[arr[0].replace('--@', '')] = arr[1]
})
module.exports = {
  versions: params.ver || '',
  applications: params.app || 'platform',
  environments: params.env || 'production',
  platforms: params.pla || 'h5',
  [params.pla + 'Id']: params.id
}