export default (to, from, next) => {
  if (to.path === '/') {
    next('historico')
  }
  next()
}
