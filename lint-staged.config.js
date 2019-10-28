module.exports = {
  '*.js': ['npm run lint', 'git add', 'npm run test:unit:file'],
  '*.vue': ['npm run lint', 'git add', 'npm run test:unit:file'],
  '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged', 'git add']
}
