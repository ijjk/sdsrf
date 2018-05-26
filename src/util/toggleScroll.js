const toggleScroll = on => {
  const html = document.querySelector('html')
  html.classList[on ? 'add' : 'remove']('no-scroll')
}
export default toggleScroll
