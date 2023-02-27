import { useRef, useState, useEffect } from 'react';

const Page = (paraRef, pagenum) => {
    const parallax = paraRef;
    const [rotate, setRotate] = useState(0)
    const [cur , setCur] = useState(0)
    const PAGES = pagenum;
  
    useEffect(() => {
      const handleScroll = (e) => {
        const height = parallax.current.space
        const scrollablePages = PAGES - 1 // because you can't scroll past the last page 
        const scrollHeight = height * scrollablePages
  
        const scrollTop = e.target.scrollTop
        const percentScrolled = scrollTop / scrollHeight
        const currentPage = Math.floor(percentScrolled * scrollablePages)
        const currentPageScrollTop = scrollTop - (height * (currentPage))
        const currentPagePercent = currentPageScrollTop / height
  
        // because the ParallaxLayer below has an `offset` of `0`
        setCur(currentPage);
  
        // console.log(currentPage);
      }
  
      const container = parallax.current.container.current
      container.addEventListener('scroll', handleScroll)
  
      return () => {
        container.removeEventListener('scroll', handleScroll)
      }
    }, [])
  
  
    return cur;
  }
  
  export default Page;

  