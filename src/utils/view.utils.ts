import { type } from "os";

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

export const isMobile = () =>{
  if(typeof navigator !== 'undefined' && navigator.userAgent ){
    return (
      (navigator.userAgent.match(/Android/i)) ||
      (navigator.userAgent.match(/webOS/i)) ||
      (navigator.userAgent.match(/iPhone/i)) ||
      (navigator.userAgent.match(/iPod/i)) ||
      (navigator.userAgent.match(/iPad/i)) ||
      (navigator.userAgent.match(/BlackBerry/i))
    );
  }

  return false;
}