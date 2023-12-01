export const isInViewport = (elm: any): boolean => {
  const elementTop = elm.offsetTop;
  const elementBottom = elementTop + elm.offsetHeight;

  // in this specific case the scroller is document.documentElement (<html></html> node)
  if (typeof window !== 'undefined') {
    const viewportTop = document.documentElement.scrollTop;
    const viewportBottom = viewportTop + document.documentElement.clientHeight - 120;
    return elementBottom > viewportTop && elementTop < viewportBottom;
  }

 return false;
}