export function debounce (foo, t=500) {
  let timer
  return function() {
    if (timer !== undefined) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      foo.apply(this, arguments)
    }, t)
  }
}
